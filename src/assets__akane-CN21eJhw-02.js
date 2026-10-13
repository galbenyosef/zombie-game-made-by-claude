// assets__akane-CN21eJhw 02 — assets__akane-cn21ejhw
// Lines 161-1068 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
const Ot = `
uniform vec4 uHairWind;
uniform float uTime;
vec3 hairFlutter(vec4 h) {
  float L = length(uHairWind.xyz);
  if (uHairWind.w <= 0.0 || L < 1e-4) return vec3(0.0);
  vec3 wd = uHairWind.xyz / L;
  vec3 up = vec3(0.0, 1.0, 0.0) - wd * wd.y;
  up = length(up) > 1e-3 ? normalize(up) : vec3(1.0, 0.0, 0.0);
  vec3 sd = cross(wd, up);
  float s = h.x, k = s * s;
  float ph = uTime * 17.0 + h.z * 37.0 - s * 7.0;
  float a = sin(ph) + 0.5 * sin(ph * 1.73 + h.z * 11.0);
  float b = sin(ph * 0.83 + 2.1 + h.z * 5.0);
  return (up * a * 0.6 + sd * b * 0.45 + wd * (0.5 + 0.5 * sin(ph * 0.6)) * 0.4) * k * uHairWind.w * 0.011;
}
`,
  xe =
    `
#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec3 vW;
varying vec3 vN;
varying vec3 vL;
varying vec3 vLN;
#ifdef REST
attribute vec3 aRest;
attribute vec3 aRestN;
#endif
#ifdef HAIR
attribute vec4 aHair;
attribute vec3 aTan;
attribute vec2 aCol;
varying vec4 vHair;
varying vec3 vT;
varying vec2 vCol;
#endif
#ifdef PULL
uniform float uPull;
#endif
#ifdef FACE
uniform vec3 uHeadC;
varying vec3 vSphN;
varying vec3 vGlzN;
#endif
#ifdef JAW
uniform float uJaw;
#endif
#ifdef HAIR
` +
    Ot +
    `
#endif
void main() {
  vec3 pos = position;
#ifdef JAW
  float jw = smoothstep(-0.055, -0.073, pos.y) * smoothstep(-0.035, 0.015, pos.z);
  pos.y -= uJaw * jw;
  pos.z -= uJaw * jw * 0.3;
#endif
  vec4 w = modelMatrix * vec4(pos, 1.0);
#ifdef HAIR
  w.xyz += hairFlutter(aHair);
#endif
  vW = w.xyz;
  mat3 nm = transpose(inverse(mat3(modelMatrix)));
  vN = normalize(nm * normal);
#ifdef REST
  vL = aRest;
  vLN = aRestN;
#else
  vL = position;
  vLN = normal;
#endif
#ifdef FACE
  vSphN = nm * ((position - uHeadC) * vec3(1.0, 0.85, 1.0));
  vGlzN = nm * ((position - uHeadC) * vec3(1.0, 1.9, 1.0));
#endif
#ifdef HAIR
  vHair = aHair;
  vCol = aCol;
  vT = normalize(mat3(modelMatrix) * aTan);
#endif
  vec4 mvPosition = viewMatrix * w;
#ifdef PULL
  mvPosition.xyz *= 1.0 - uPull / max(length(mvPosition.xyz), uPull * 2.0);
#endif
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}
`,
  Xe = `
#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
uniform vec3 uKeyDir;
uniform vec3 uKeyCol;
uniform vec3 uRimDir;
uniform vec3 uRimCol;
uniform float uRimAmt;
uniform vec3 uAmbCol;
uniform float uAmb;
uniform vec3 uAmbGain;
uniform sampler2D uShadowA;
uniform sampler2D uShadowB;
uniform mat4 uShadowMat;
uniform mat4 uShadowMatB;
uniform float uShadowOn;
uniform float uShadowTexel;
uniform float uShadowSoft;
uniform float uExposure;

uniform vec3 uBase;
uniform vec3 uShade;
uniform vec3 uDeep;
uniform float uRampT;
uniform float uRampSoft;
uniform float uDeepT;
uniform float uDeepAmt;
uniform float uRim;
uniform vec3 uSpecCol;
uniform float uSpecAmt;
uniform float uSpecT;
uniform float uWet;
uniform float uWetSpec;
uniform float uWetMatte;
uniform float uShadowSel;
uniform float uRimW;

varying vec3 vW;
varying vec3 vN;
varying vec3 vL;
varying vec3 vLN;

float lumi(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h12(i), h12(i + vec2(1.0, 0.0)), f.x), mix(h12(i + vec2(0.0, 1.0)), h12(i + vec2(1.0, 1.0)), f.x), f.y);
}
// Self-shadow lookup (shadows.js draws both maps with the CLASSIC depth convention, even on the reversed-Z page).
// Bias (fix round 3, the stripes that crawled over her hoodie and hair): the receiver is moved off its surface along
// the GEOMETRIC normal (swept hair and folded cloth shade with normals that lie in the surface, so the old 4 mm push
// along the shading normal left the point inside its own depth) by enough to clear the whole 5x5 PCF footprint at any
// slope, then toward the light by uShadowBias (hair: strand-to-strand shadows are mm-scale moire, not form).
// The texel size and the light direction are read back from the orthographic matrix.
uniform float uShadowBias;
float shadowAt(vec3 wp, vec3 n) {
  if (uShadowOn < 0.5) return 1.0;
  bool useB = uShadowSel > 0.5;
  mat4 M = useB ? uShadowMatB : uShadowMat;
  vec3 r0 = vec3(M[0][0], M[1][0], M[2][0]);
  vec3 r2 = vec3(M[0][2], M[1][2], M[2][2]);
  float texW = 2.0 * uShadowTexel / max(length(r0), 1e-6);    // metres per shadow texel
  vec3 Ls = -normalize(r2);                                    // toward the light
  vec3 ng = cross(dFdx(wp), dFdy(wp));
  ng = dot(ng, ng) > 1e-20 ? normalize(ng) : n;
  if (dot(ng, n) < 0.0) ng = -ng;
  float cosT = abs(dot(ng, Ls));
  float sinT = sqrt(max(1.0 - cosT * cosT, 0.0));
  // the 5x5 kernel reaches 2.5 texels per axis (3.5 on the diagonal): a plane at angle T needs h >= reach * sin(T)
  vec3 p = wp + ng * (0.0015 + 4.0 * texW * sinT) + Ls * (0.0008 + uShadowBias);
  vec4 s = M * vec4(p, 1.0);
  vec3 c = s.xyz / s.w * 0.5 + 0.5;
  if (c.x < 0.0 || c.x > 1.0 || c.y < 0.0 || c.y > 1.0 || c.z > 1.0) return 1.0;
  float lit = 0.0;
  if (uShadowSoft > 0.5) {
    // close-ups: every tap blends the four texels round it (bilinear), and the penumbra is left wider: a shadow texel
    // covers several pixels this close, and the fringe's strands stepped into a blotchy stipple on the skin
    float T = uShadowTexel, z = c.z - 1e-5;
    for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
      vec2 q = c.xy + vec2(float(i), float(j)) * T * 1.25;
      vec2 g = q / T - 0.5, f = fract(g), b = (floor(g) + 0.5) * T;
      float a0 = step(z, useB ? textureLod(uShadowB, b, 0.0).r : textureLod(uShadowA, b, 0.0).r);
      float a1 = step(z, useB ? textureLod(uShadowB, b + vec2(T, 0.0), 0.0).r : textureLod(uShadowA, b + vec2(T, 0.0), 0.0).r);
      float a2 = step(z, useB ? textureLod(uShadowB, b + vec2(0.0, T), 0.0).r : textureLod(uShadowA, b + vec2(0.0, T), 0.0).r);
      float a3 = step(z, useB ? textureLod(uShadowB, b + vec2(T), 0.0).r : textureLod(uShadowA, b + vec2(T), 0.0).r);
      lit += mix(mix(a0, a1, f.x), mix(a2, a3, f.x), f.y);
    }
    return smoothstep(0.12, 0.88, lit / 25.0);
  }
  for (int i = -2; i <= 2; i++) for (int j = -2; j <= 2; j++) {
    vec2 o = vec2(float(i), float(j)) * uShadowTexel * 1.25;
    float d = useB ? textureLod(uShadowB, c.xy + o, 0.0).r : textureLod(uShadowA, c.xy + o, 0.0).r;
    lit += step(c.z - 1e-5, d);
  }
  lit /= 25.0;
  return smoothstep(0.3, 0.7, lit);
}
vec3 ambTint() {
  float m = max(max(uAmbCol.r, uAmbCol.g), max(uAmbCol.b, 1e-4));
  return mix(vec3(1.0), uAmbCol / m, uAmb * 0.6) * uAmbGain;
}
// SKIN (fix round 2, lead review of draft 1: her face read pale lilac / grey under the blue night): the world's light
// sets the skin's BRIGHTNESS, but only uSkinTint of its chroma reaches it, so the skin keeps its own warm hue (a
// subsurface floor) while the world stays blue. skinFloor() then pulls any pixel still cooler than the skin's own hue
// (fog, ambient, a blue key) back to that hue at the same luminance.
uniform float uSkinTint;
uniform float uSkinWarm;
vec3 skinLight(vec3 c) { float l = lumi(c); return mix(vec3(l), c, uSkinTint); }
vec3 skinFloor(vec3 col, vec3 hue, float k) {
  float y = lumi(col);
  // the target: the skin's own hue pushed a little toward a peach subsurface (it has to survive fog, depth of field
  // and a cool grade), at the same luminance
  vec3 h = hue * vec3(1.0, 0.975, 0.955);
  h /= max(lumi(h), 1e-4);
  // coolness: how far blue climbs toward red relative to the skin's own ratio (0 = as warm as the skin)
  float cool = clamp(((col.b / max(col.r, 1e-4)) - (h.b / h.r)) * 3.0, 0.0, 1.0);
  return mix(col, h * y, clamp(cool + uSkinWarm + (k - 0.85) * 3.0, 0.0, 1.0) * min(k, 1.0));
}
float rimMask(vec3 N, vec3 V, float width) {
  float fres = 1.0 - clamp(dot(N, V), 0.0, 1.0);
  float side = dot(N, uRimDir);
  float f = fres * smoothstep(-0.1, 0.45, side);
  float w = max(fwidth(f), 1e-4);
  return smoothstep(width - w, width + w, f);
}
`,
  ro = `
#ifdef DETAIL
uniform sampler2D uDetail;
uniform vec4 uDetailRect;
uniform vec3 uInk;
uniform vec3 uPatch;
uniform vec3 uPatchShade;
#endif
#ifdef TARTAN
uniform vec3 uTartan;
#endif
#ifdef SEAM
uniform float uSeamY;
uniform vec3 uSeamCol;
#endif
#ifdef CLOTH
uniform float uSheen;
uniform float uFold;
#endif
#ifdef NECK
uniform float uJawY;
uniform vec3 uJawCol;
#endif
#ifdef BEADS
uniform float uBeadScale;
#endif
#ifdef LITMAX
uniform float uLitMax;
#endif
#ifdef COAT
uniform vec2 uCoat;
#endif
#ifdef SKIN
uniform float uSkinBoost;
#endif

void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = uKeyDir;
#ifdef CLOTH
  {
    // fine fabric folds: long soft ridges along the drape (rest space), bent into the shading normal
    vec2 fp = vec2(vL.x * 38.0 + sin(vL.y * 9.0 + vL.z * 7.0) * 0.9, vL.y * 5.0 + vL.z * 3.0);
    float e = 0.02;
    float f0 = vnoise(fp), fx = vnoise(fp + vec2(e, 0.0)), fy = vnoise(fp + vec2(0.0, e));
    vec3 g = vec3((fx - f0) / e, (fy - f0) / e * 0.25, 0.0);
    vec3 T1 = normalize(cross(N, vec3(0.0, 1.0, 0.0)) + 1e-4), T2 = cross(N, T1);
    N = normalize(N + (T1 * g.x + T2 * g.y) * uFold);
  }
#endif
  float ndl = dot(N, L);
  float sh = shadowAt(vW, N);
  float w = max(fwidth(ndl) * 0.8, uRampSoft);
  float lit = smoothstep(uRampT - w, uRampT + w, ndl);
  vec3 base = uBase;
  vec3 shade = uShade;
  float ink = 0.0;
#ifdef DETAIL
  vec2 duv = (vL.xy - uDetailRect.xy) / uDetailRect.zw;
  vec4 dt = texture2D(uDetail, duv);
  float inside = step(0.0, duv.x) * step(duv.x, 1.0) * step(0.0, duv.y) * step(duv.y, 1.0) * smoothstep(0.0, 0.3, vLN.z);
  lit *= 1.0 - dt.r * inside;           // painted fold shadows
  ink = dt.g * inside;                   // stitches / seams
  float patchK = dt.b * inside;          // patch colour (skin through rips)
  base = mix(base, uPatch, patchK);
  shade = mix(shade, uPatchShade, patchK);
#endif
#ifdef TARTAN
  {
    float ang = atan(vL.x, vL.z) * 9.5493;       // 60 units around
    float fy = vL.y * 110.0;
    float lx = abs(fract(ang * 0.5) - 0.5), ly = abs(fract(fy * 0.5) - 0.5);
    float wx = fwidth(ang) * 0.9 + 0.02, wy = fwidth(fy) * 0.9 + 0.02;
    float tl = max(1.0 - smoothstep(0.018, 0.018 + wx, lx), 1.0 - smoothstep(0.018, 0.018 + wy, ly));
    base = mix(base, uTartan, tl * 0.45);
    shade = mix(shade, uTartan * 0.55, tl * 0.4);
  }
#endif
  lit *= sh;
  vec3 at = ambTint();
  vec3 kc = uKeyCol;
#ifdef CLOTH
  // (fix round 3) her cloth is near-black: once the self-shadow worked, a saturated blue night key turned its lit side
  // and its wet sheen periwinkle / violet. Cloth takes half the key's chroma (the level is unchanged)
  kc = mix(vec3(lumi(uKeyCol)), uKeyCol, 0.5);
#endif
#ifdef SKIN
  at = skinLight(at);
  kc = skinLight(kc);
  // wet skin stays skin (only a little darker)
  base = mix(base, base * 0.9, uWet * 0.4);
  shade = mix(shade, shade * 0.88, uWet * 0.4);
#else
  // wet cloth: darker, cooler
  base = mix(base, base * vec3(0.72, 0.74, 0.82), uWet * 0.55);
  shade = mix(shade, shade * vec3(0.66, 0.68, 0.8), uWet * 0.55);
#endif
  vec3 col = mix(shade * at, base * kc, lit);
  float deep = (1.0 - smoothstep(uDeepT - w, uDeepT + w, ndl)) * uDeepAmt;
  col = mix(col, uDeep * at, deep * (1.0 - lit));
#ifdef LITMAX
  // a saturated lacquer keeps its colour where a key hits it face-on: the lit tone is capped (hue kept) so the
  // crimson top never climbs into the tonemapper's white-pink shoulder
  { float mc = max(col.r, max(col.g, col.b)); col *= min(1.0, uLitMax / max(mc, 1e-4)); }
#endif
#ifdef SKIN
  // small skin (the hands) greys out first under fog, depth of field and a cool grade: uSkinBoost aims it at the
  // richer shade hue and pulls harder
  col = skinFloor(col, mix(uShade, uBase, lit * (1.0 - uSkinBoost)), 0.85 + 0.15 * uSkinBoost);
#endif
#ifdef NECK
  {
    // the head's designed shadow under the jaw: a hard band at the top of the neck, its lower edge a soft U that is
    // lowest under the chin and rises toward the sides and the back (uJawY follows the chin, index.js)
    float ang = atan(vL.x, vL.z + 0.008);
    float yb = uJawY + 0.016 * smoothstep(0.0, 1.4, abs(ang));
    float jw = max(fwidth(vL.y), 1e-5) * 1.5;
    float band = smoothstep(yb - jw, yb + jw, vL.y);
    col = mix(col, uJawCol * at, band * 0.92);
  }
#endif
#ifdef DETAIL
  col = mix(col, uInk * mix(at, uKeyCol, lit), ink);
#endif
#ifdef SEAM
  float sd = abs(vL.y - uSeamY);
  float sw = max(fwidth(vL.y), 1e-5);
  col = mix(col, uSeamCol * mix(at, uKeyCol, lit), 1.0 - smoothstep(0.0006, 0.0006 + sw * 1.5, sd));
#endif
  // glaze / gloss specular (thresholded)
  vec3 H = normalize(L + V);
  float nh = dot(N, H);
  float sw2 = max(fwidth(nh), 1e-4);
  // (fix round 5, SING-4: 0.02 widened every wet highlight into a vinyl sheet) wet narrows the band only a little
  float spT = uSpecT - uWet * uWetSpec * 0.005;
  float spec = smoothstep(spT - sw2, spT + sw2, nh) * sh;
#ifdef COAT
  {
    // clear coat: the highlight is a NARROW BAND (a strip light in the lacquer), not a blob. H projected onto the
    // surface must sit inside a thin stripe across (uCoat.x) and a longer one along (uCoat.y) a diagonal axis
    vec3 Hp = H - N * nh;
    vec3 Ta = normalize(cross(N, normalize(vec3(0.45, 1.0, 0.0))) + 1e-4), Tb = cross(N, Ta);
    float a = abs(dot(Hp, Ta)), b = abs(dot(Hp, Tb));
    float aw = max(fwidth(a), 1e-4);
    float wa = uCoat.x * (1.0 + uWet * 0.5);
    spec = (1.0 - smoothstep(wa - aw, wa + aw, a)) * (1.0 - smoothstep(uCoat.y * 0.6, uCoat.y, b)) * step(0.0, nh) * sh;
  }
#endif
  vec3 specK = uKeyCol;
#ifdef CLOTH
  specK = kc;
#endif
  float wetSpecK = 0.5;
#ifdef SKIN
  wetSpecK = 0.22;     // (fix round 3) wet skin: a glint, not a white stripe down the throat
#endif
#ifdef CLOTH
  // (fix round 5, SING-4: wet hoodie / sleeves / skirt read as latex, the pleats as pinstripes) soaked cotton and knit
  // darken and flatten: no wet specular sheet at all; the wet reads in the base and in the thin broken fold glints below
  wetSpecK = 0.0;
#endif
  // uWetMatte: how much of the dry gloss the soaked material loses (tights, boots: no vinyl shine)
  col += uSpecCol * (uSpecAmt + uWet * uWetSpec * wetSpecK) * (1.0 - uWet * uWetMatte) * spec * specK;
#ifdef CLOTH
  // black cloth needs form: a soft velvet sheen toward grazing angles on the lit side, a wet sheen when soaked
  {
    // (fix round 5) soaked, the sheen hugs the silhouette edge only
    float fr = pow(1.0 - clamp(dot(N, V), 0.0, 1.0), mix(2.5, 4.5, uWet));
    col += base * uKeyCol * fr * uSheen * (0.35 + 0.65 * lit);
    // (fix round 3: was smoothstep(0.86, 0.96) x sh x the full key - a broad violet sheet over wet sleeves)
    // (fix round 5, SING-4: 0.95..0.99 still drew a pale band on every pleat) thin BROKEN glints along the fold ridges:
    // about a fifth of the old area, in short dashes, at a third of the level
    vec2 gp = vec2(vL.x * 38.0 + sin(vL.y * 9.0 + vL.z * 7.0) * 0.9, vL.y * 5.0 + vL.z * 3.0);
    float brk = smoothstep(0.62, 0.8, vnoise(gp * vec2(1.0, 2.6) + 7.3));
    float wsp = smoothstep(0.982, 0.994, nh) * lit * uWet * brk;
    col += kc * wsp * 0.1;
  }
#endif
#ifdef BEADS
  float bpx = fwidth(vL.x * 1000.0 / uBeadScale) + 1e-5;
  if (uWet > 0.01 && vLN.z > 0.55) {
    // water beading on the clear coat: one bead per jittered cell (guitar-local metres -> mm)
    vec2 bp = vL.xy * 1000.0 / uBeadScale;
    vec2 ci = floor(bp), cf = fract(bp);
    float best = 1e9; vec2 bd = vec2(0.0); float brad = 0.0;
    for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
      vec2 c = ci + vec2(float(i), float(j));
      float hh = h12(c * 1.37 + 5.1);
      if (hh > uWet * 0.85) continue;
      vec2 o = vec2(h12(c + 11.3), h12(c + 27.9)) * 0.7 + 0.15;
      float r = (0.14 + 0.24 * h12(c + 3.7)) * (0.7 + 0.3 * uWet);
      vec2 d = (vec2(float(i), float(j)) + o - cf);
      float dd = length(d) - r;
      if (dd < best) { best = dd; bd = d; brad = r; }
    }
    float px = bpx;
    float vis = 1.0 - smoothstep(0.06, 0.15, px);            // too small on screen: fade out (no glitter)
    float inB = (1.0 - smoothstep(-px, px, best)) * vis;
    if (inB > 0.0) {
      vec2 q = -bd / max(brad, 1e-4);                        // -1..1 across the bead
      vec3 Tx = normalize(cross(vec3(0.0, 1.0, 0.0), N) + 1e-4), Ty = cross(N, Tx);
      vec3 Nb = normalize(N + (Tx * q.x + Ty * q.y) * 1.6);
      float bh = dot(Nb, H);
      float bw = 0.004;
      float hl = smoothstep(0.985 - bw, 0.985 + bw, bh);
      float edge = smoothstep(0.55, 1.0, length(q));
      vec3 deepc = col * vec3(0.62, 0.55, 0.6);
      vec3 bc = mix(deepc, col * 0.35, edge * 0.8);
      bc += vec3(1.0) * hl * 1.6 * (0.3 + 0.7 * sh) * max(uKeyCol, vec3(0.35));
      bc += col * 0.9 * smoothstep(0.3, 0.9, dot(q, normalize((vec2(dot(-L, Tx), dot(-L, Ty))) + 1e-4))) * (1.0 - edge);
      col = mix(col, bc, inB);
    }
  }
#endif
  // rim
  col += uRimCol * uRimAmt * uRim * rimMask(N, V, uRimW);
  col = min(col, vec3(64.0));

  if (!gl_FrontFacing) col *= 0.5;
  gl_FragColor = vec4(col * uExposure, 1.0);
  #include <fog_fragment>
}
`,
  Ft = `
uniform vec3 uCamH;
uniform float uWarp;
// p = head-local mm. The far-side eye + brow slide toward the face centre with the view yaw, so the far eye stays
// inside the silhouette and is not squeezed by the curve of the head (the anime turn cheat). Nose/mouth untouched.
vec2 faceWarp(vec2 p) {
  float yawV = atan(uCamH.x, max(uCamH.z, 0.05));
  float sF = yawV > 0.0 ? -1.0 : 1.0;
  float s = uWarp * abs(sin(yawV));
  float wy = smoothstep(-44.0, -22.0, p.y) * (1.0 - smoothstep(40.0, 55.0, p.y));
  float wx = smoothstep(3.0, 14.0, p.x * sF);
  p.x += sF * s * wx * wy;
  return p;
}
`,
  io =
    `
uniform sampler2D uFaceTex;
uniform sampler2D uFaceData;
uniform float uKeyTint;
uniform vec4 uFaceRect;
uniform vec3 uHeadC;
uniform float uFaceT;
uniform vec4 uIrisR;
uniform vec4 uIrisL;
uniform float uPupil;
uniform float uIrisDetail;
uniform float uEyeReflect;
uniform samplerCube uEnvCube;
uniform sampler2D uEnvRect;
uniform float uEnvMode;
uniform float uEnvGain;
uniform mat3 uHeadRot;
uniform float uTime;
uniform float uTears;
varying vec3 vSphN;
varying vec3 vGlzN;
vec3 dec(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
` +
    Ft +
    `
// periodic value noise in x (angular coordinates wrap without a seam)
float vnP(vec2 p, float per) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float i0 = mod(i.x, per), i1 = mod(i.x + 1.0, per);
  return mix(mix(h12(vec2(i0, i.y)), h12(vec2(i1, i.y)), f.x), mix(h12(vec2(i0, i.y + 1.0)), h12(vec2(i1, i.y + 1.0)), f.x), f.y);
}
vec3 envSample(vec3 R) {
  if (uEnvMode > 1.5) {
    vec3 Rh = transpose(uHeadRot) * R;
    vec2 e = vec2(atan(Rh.x, Rh.z) / 6.2831853 + 0.5, 0.5 + asin(clamp(Rh.y, -1.0, 1.0)) / 3.1415927);
    return dec(texture2D(uEnvRect, e).rgb);
  }
  if (uEnvMode > 0.5) return textureCube(uEnvCube, R, 1.0).rgb;
  // no map: the location's ambient as a sky above a dark ground
  float up = smoothstep(-0.2, 0.6, R.y);
  return mix(uAmbCol * 0.08, uAmbCol * 0.6 + uKeyCol * 0.15, up);
}
// running water drops on the skin (wet) and the moving tear beads (tears), closed form in t. Returns
// (darken, highlight, wet mask) for this paint point; refr = where the paint under a drop is seen (the bead magnifies).
// FIX ROUND 5 (SING-8: the drops read as opaque white popcorn / blisters): a drop is a clear BEAD - no fill, a thin dark
// refracted rim, one hard catch-light and a faint caustic on the far side; at most ~20 px radius on screen (an ECU no
// longer blows them up), 2-3 per cheek, and none on the eyes or the nose.
vec3 drops(vec2 p, vec2 L2, float aa, out vec2 refr) {
  vec3 acc = vec3(0.0);
  refr = p;
  float k = uWet;
  float rMax = max(13.0 * aa, 0.35);             // aa ~ 1.1-1.5 x the mm per screen px: a radius of ~14-19 px at most
  for (int i = 0; i < 12; i++) {
    float fi = float(i);
    if (h12(vec2(fi, 0.31)) > k * 1.1) continue;
    float P = 2.2 + h12(vec2(fi, 1.7)) * 3.2;
    float ph = uTime / P + h12(vec2(fi, 2.9));
    float cyc = floor(ph), u = fract(ph);
    float lane = h12(vec2(fi, cyc + 0.5));
    float side = h12(vec2(cyc, fi + 7.0)) > 0.5 ? 1.0 : -1.0;
    // lanes: the outer cheeks (from under the eyes), the forehead above the brows, the chin
    vec2 p0; float run;
    if (lane < 0.5) { p0 = vec2(side * (33.0 + 14.0 * h12(vec2(fi, cyc + 3.3))), -27.0 - 8.0 * h12(vec2(cyc, fi))); run = 62.0; }
    else if (lane < 0.8) { p0 = vec2((h12(vec2(fi, cyc + 9.1)) - 0.5) * 70.0, 52.0); run = 22.0; }
    else { p0 = vec2((h12(vec2(fi, cyc + 4.4)) - 0.5) * 24.0, -76.0); run = 13.0; }
    float fall = u * u * run * (0.7 + 0.6 * h12(vec2(fi, 5.5)));
    float sway = sin(u * 5.0 + fi) * 1.2;
    vec2 c = vec2(p0.x + sway, p0.y - fall);
    // keep-outs: the eyes and the nose
    vec2 ce = vec2(abs(c.x) - 30.0, c.y + 5.0) / vec2(19.0, 17.0);
    if (dot(ce, ce) < 1.0 || (abs(c.x) < 11.0 && c.y > -40.0 && c.y < -16.0)) continue;
    float r = min(0.9 + 0.8 * h12(vec2(fi, 8.8)), rMax);
    vec2 d = (p - c) * vec2(1.0, 0.82);
    float dl = length(d);
    float head = 1.0 - smoothstep(r - aa, r + aa, dl);
    float trail = (1.0 - smoothstep(0.22 - aa, 0.42 + aa, abs(p.x - c.x))) * step(c.y, p.y) * step(p.y, p0.y) * (1.0 - u) * 0.5;
    // the bead magnifies what is under it (flipped, 0.55x), a thin dark rim, a hard catch-light toward the light
    if (head > 0.0) refr = mix(refr, c - d * vec2(1.0, 1.22) * 0.55, head);
    float rim = smoothstep(0.72 * r, 0.95 * r, dl) * (1.0 - smoothstep(0.95 * r, r + aa, dl));
    float hl = 1.0 - smoothstep(0.17 * r - aa, 0.17 * r + aa, length(d - L2 * r * 0.5));
    float caus = (1.0 - smoothstep(0.1 * r, 0.45 * r, length(d + L2 * r * 0.42))) * 0.35;
    acc.x = max(acc.x, rim * 0.34 * head + trail * 0.1);
    acc.y = max(acc.y, (hl + caus) * head);
    acc.z = max(acc.z, max(head, trail));
  }
  // tears: a bead running down the wet streak from the outer lower lid (face.js paints the streak)
  if (uTears > 0.02) {
    for (int s = 0; s < 2; s++) {
      float sd = s == 0 ? -1.0 : 1.0;
      float u = fract(uTime / 2.6 + (s == 0 ? 0.0 : 0.43));
      float len = 16.0 + 34.0 * uTears;
      float x0 = sd * (28.5 + 11.5 * 1.15), y0 = -5.5 - 15.5;
      vec2 c = vec2(x0 + sd * 2.2 * u, y0 - len * u);
      vec2 d = (p - c) * vec2(1.0, 0.75);
      float dl = length(d), r = min(1.9, rMax);
      float head = (1.0 - smoothstep(r - aa, r + aa, dl)) * uTears;
      acc.x = max(acc.x, head * smoothstep(0.72 * r, r, dl) * 0.4);
      acc.y = max(acc.y, (1.0 - smoothstep(0.2 * r - aa, 0.2 * r + aa, length(d - L2 * r * 0.45))) * head);
      acc.z = max(acc.z, head);
    }
  }
  return acc;
}
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = uKeyDir;
  // a clean normal for the face: mostly the head's ellipsoid, a little of the real surface
  vec3 sphN = normalize(vSphN);
  vec3 nS = normalize(mix(sphN, N, 0.35));
  float ndl = dot(nS, L);
  float sh = shadowAt(vW, N);
  float w = max(fwidth(ndl) * 0.8, uRampSoft);
  float lit = smoothstep(uFaceT - w, uFaceT + w, ndl) * sh;
  vec2 pmm = faceWarp(vL.xy * 1000.0);
  float pxmm = length(fwidth(pmm)) * 0.75 + 1e-3;
  vec2 uv = (pmm * 0.001 - uFaceRect.xy) / uFaceRect.zw;
  float front = smoothstep(0.02, 0.28, vLN.z) * step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  // running drops + tear beads (fix round 5: computed first, the beads refract the paint under them)
  vec3 dr = vec3(0.0);
  vec2 uvD = uv;
  if (uWet > 0.02 || uTears > 0.02) {
    vec3 Lh = transpose(uHeadRot) * L;
    vec2 L2 = normalize(Lh.xy + vec2(1e-4));
    vec2 pr;
    dr = drops(pmm, L2, pxmm, pr) * front;
    uvD = (pr * 0.001 - uFaceRect.xy) / uFaceRect.zw;
  }
  vec4 tex = texture2D(uFaceTex, uvD);
  tex.a *= front;
  vec3 texRGB = tex.a > 0.0 ? dec(clamp(tex.rgb / max(tex.a, 1e-4), 0.0, 1.0)) : vec3(0.0);
  vec4 fd = texture2D(uFaceData, uv) * front;
  float eyeM = fd.r, irisM = fd.g;
  // ---- ECU iris: procedural fibres, collarette and a dark limbal ring over the painted gradient
  vec4 I = pmm.x > 0.0 ? uIrisL : uIrisR;
  vec2 q = (pmm - I.xy) / max(I.zw, vec2(1e-3));
  float r = length(q);
  float white = tex.a * smoothstep(0.9, 0.97, min(texRGB.r, min(texRGB.g, texRGB.b)));
  if (irisM > 0.001 && uIrisDetail > 0.0) {
    float a01 = atan(q.y, q.x) / 6.2831853 + 0.5;
    float fib = vnP(vec2(a01 * 72.0, r * 3.0), 72.0) * 0.55 + vnP(vec2(a01 * 180.0, r * 7.0 + 3.1), 180.0) * 0.3 + vnP(vec2(a01 * 36.0, r * 1.5 + 9.0), 36.0) * 0.15;
    float collar = smoothstep(0.42, 0.5, r) * (1.0 - smoothstep(0.52, 0.64, r));
    float limb = smoothstep(0.8, 1.0, r);
    float pup = smoothstep(uPupil * 0.95, uPupil * 1.12, r);
    vec3 m = mix(vec3(0.7), vec3(1.3), fib) * (1.0 - 0.5 * limb) * (1.0 + 0.3 * collar);
    // radial light streaks toward the lower half (the soft lit rim of the bible)
    m *= 1.0 + 0.35 * smoothstep(0.3, 0.9, r) * smoothstep(0.1, -0.7, q.y) * fib;
    texRGB = mix(texRGB, texRGB * m, irisM * pup * uIrisDetail * (1.0 - white));
  }
  vec3 at = ambTint();
  vec3 ratio = uShade / max(uBase, vec3(1e-3));
  vec3 base = mix(uBase, uBase * 0.9, uWet * 0.2);
  vec3 kc = mix(vec3(lumi(uKeyCol)), uKeyCol, uKeyTint);
  // the skin takes the world's brightness but keeps its warm hue (skinLight); the paint (eyes, liner, mouth) keeps
  // the key's tint as before
  vec3 kcS = skinLight(uKeyCol), atS = skinLight(at);
  // (fix round 5, SING-7) the IRIS keeps its painted crimson under any key: the world's light sets its brightness only
  // (a blue-violet night key x crimson read magenta, hue 326-340)
  vec3 kcP = mix(kc, vec3(lumi(kc)), irisM), atP = mix(at, vec3(lumi(at)), irisM);
  vec3 litC = mix(base * kcS, texRGB * kcP, tex.a);
  vec3 shdC = mix(uShade * atS, texRGB * ratio * atP, tex.a);
  // pure-white paint (catch-lights, teeth) stays bright in shade
  float litK = max(lit, white * 0.85);
  vec3 col = mix(shdC, litC, litK);
  // depth: the shade tone toward the silhouette
  float fres = 1.0 - clamp(dot(nS, V), 0.0, 1.0);
  col = mix(col, uShade * atS, smoothstep(0.5, 0.95, fres) * 0.5 * (1.0 - tex.a));
  // warm skin floor (bare skin and the soft paint over it: blush, nose; not the eyes)
  col = skinFloor(col, mix(uShade, base, litK), 0.85 * (1.0 - smoothstep(0.35, 0.8, tex.a)) * (1.0 - eyeM));
  vec3 H = normalize(L + V);
  // ---- the wet cornea: a bulged normal over the eye opening reflects the location + a sharp key glint
  if (eyeM > 0.001) {
    vec2 qc = (pmm - I.xy) / max(I.w * 1.45, 1e-3);
    vec3 Tx = uHeadRot[0], Ty = uHeadRot[1];
    vec3 Nc = normalize(N + (Tx * qc.x + Ty * qc.y) * 0.85);
    vec3 R = reflect(-V, Nc);
    float fr = 0.04 + 0.96 * pow(1.0 - clamp(dot(Nc, V), 0.0, 1.0), 5.0);
    vec3 env = envSample(R) * uEnvGain;
    // stylised (much stronger than a real 4 % cornea): the lights of the location read in the dark iris.
    // (fix round 5, SING-7: the blue-violet city added over crimson turned the irises magenta, hue 327 at eyeReflect 1.8)
    // the IRIS takes the reflection by VALUE in its own crimson (the bible's lit iris #ff4d5e), capped at 0.35; the whites
    // keep the city's colour (as before, x 0.4)
    vec3 refl = env * (0.35 + 0.65 * fr) * uEyeReflect * eyeM * (1.0 - white * 0.6);
    float rv = min(lumi(refl) * 1.4, 0.35);
    col += mix(refl * 0.4, vec3(1.0, 0.074, 0.11) * rv, irisM);
    float rh = dot(R, L);
    float gw = 0.0009;
    float glint = smoothstep(0.9975 - gw, 0.9975 + gw, rh) + 0.25 * smoothstep(0.985 - gw, 0.985 + gw, rh);
    col += max(uKeyCol, vec3(0.2)) * glint * 2.5 * sh * eyeM * (0.3 + 0.7 * uEyeReflect);
    float rr = dot(R, uRimDir);
    col += uRimCol * uRimAmt * smoothstep(0.985 - gw, 0.985 + gw, rr) * 0.8 * eyeM * uEyeReflect;
  }
  // wet skin: a thin crisp sheen (no porcelain glaze)
  float gh = dot(normalize(vGlzN), H);
  float gw2 = max(fwidth(gh), 1e-4);
  // (fix round 3: 0.985 / 0.45 painted a flat white disc across the forehead on wet close-ups once the self-shadow
  // worked; a smaller, softer glint)
  col += vec3(0.9, 0.95, 1.0) * smoothstep(0.993 - gw2, 0.997 + gw2, gh) * sh * uWet * 0.14 * (1.0 - tex.a);
  // running drops + tear beads: a thin dark rim, the catch-light (+ caustic), a rim glint (no fill)
  if (uWet > 0.02 || uTears > 0.02) {
    col *= 1.0 - dr.x;
    col += vec3(0.95, 0.97, 1.0) * dr.y * (0.4 + 0.6 * max(lit, 0.3)) * max(lumi(uKeyCol), 0.35) * 1.4;
    col += uRimCol * uRimAmt * dr.z * 0.2 * rimMask(nS, V, 0.3);
  }
  col += uRimCol * uRimAmt * uRim * rimMask(nS, V, 0.72) * 0.8;
  col = min(col, vec3(64.0));
  gl_FragColor = vec4(col * uExposure, 1.0);
  #include <fog_fragment>
}
`,
  lo = `
uniform vec3 uTip;
uniform vec3 uTipShade;
uniform vec3 uTipHot;
uniform vec3 uCrim;
uniform vec3 uCrimShade;
uniform vec3 uRingCol;
uniform float uRingT;
uniform float uRingAmt;
varying vec4 vHair;
varying vec3 vT;
varying vec2 vCol;
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = uKeyDir;
  float s = vHair.x, u = vHair.y, rnd = vHair.z, layer = vHair.w;
  float ndl = dot(N, L) - layer * 0.35;
  float sh = shadowAt(vW, N);
  float w = max(fwidth(ndl) * 0.8, uRampSoft);
  float lit = smoothstep(uRampT - w, uRampT + w, ndl) * sh;
  float tip = smoothstep(0.66, 0.97, s) * vCol.y;
  vec3 base = mix(mix(uBase, uCrim, vCol.x), mix(uTip, uTipHot, vCol.x), tip);
  vec3 shade = mix(mix(uShade, uCrimShade, vCol.x), uTipShade, tip);
  float wetK = uWet;
  base = mix(base, base * vec3(0.9, 0.7, 0.8), wetK * 0.55);
  shade = mix(shade, shade * vec3(0.82, 0.6, 0.72), wetK * 0.55);
  vec3 at = ambTint();
  // (fix round 3) black hair keeps a near-neutral lit side under a saturated night key (as the cloth does)
  vec3 kcH = mix(vec3(lumi(uKeyCol)), uKeyCol, 0.45);
  vec3 col = mix(shade * at, base * kcH, lit);
  float deep = (1.0 - smoothstep(uDeepT - w, uDeepT + w, ndl)) * uDeepAmt;
  col = mix(col, uDeep * at, deep * (1.0 - lit));
  // angel ring: Kajiya-Kay on the strand tangent, shifted per strand for a jagged anime edge
  vec3 T = normalize(vT);
  vec3 H = normalize(L + V);
  float jag = fract(u * 2.3 + rnd * 7.0);
  jag = abs(jag - 0.5) * 2.0;
  vec3 Ts = normalize(T + N * ((jag - 0.5) * 0.12 + (rnd - 0.5) * 0.2 - 0.02));
  float th = dot(Ts, H);
  float sinTH = sqrt(max(1.0 - th * th, 0.0));
  float rw = max(fwidth(sinTH), 1e-4);
  float rT = uRingT + wetK * 0.004;
  float ring = smoothstep(rT - rw, rT + rw, sinTH) * lit * (1.0 - smoothstep(0.35, 0.7, s)) * (1.0 - layer);
  // (fix round 3) the crimson strands' ring stays red: violet + crimson read pink under the night key
  vec3 ringC = mix(uRingCol, uCrim * 1.15 + uRingCol * 0.15, vCol.x);
  col = mix(col, ringC * kcH, ring * uRingAmt * (1.0 + wetK * 0.2));
  // wet gloss streaks: a few soft glints along the strand inside the Kajiya-Kay band (fix round 3: the old hard
  // step(fract(u * 3.7)) over the whole lit strand drew 2-4 px diagonal stripes on wet close-ups once the self-shadow
  // worked; the band now fades to its mean where it would alias)
  float wph = u * 3.7 + rnd * 11.0;
  float wband = smoothstep(0.35, 0.75, 0.5 + 0.5 * sin(6.2831853 * wph));
  wband = mix(wband, 0.4, smoothstep(0.1, 0.35, fwidth(wph)));
  float wsp = smoothstep(0.988 - rw, 0.996 + rw, sinTH) * wband * wetK * lit;
  // crimson strands glint crimson-white (a blue-white glint on red read pink)
  col += mix(vec3(0.8, 0.85, 1.0), vec3(1.0, 0.42, 0.4), vCol.x) * wsp * 0.16 * max(kcH, vec3(0.3));
  col += uRimCol * uRimAmt * uRim * rimMask(N, V, 0.6);
  col = min(col, vec3(64.0));
  gl_FragColor = vec4(col * uExposure, 1.0);
  #include <fog_fragment>
}
`,
  co =
    `
#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
uniform float uPx;
uniform float uPxToView;
uniform float uW;
uniform float uZPush;
#ifdef HAIR
attribute vec4 aHair;
` +
    Ot +
    `
#endif
#if defined(HAIR) || defined(OUTN)
attribute vec3 aOutN;
#endif
#ifdef JAW
uniform float uJaw;
#endif
void main() {
  vec3 pos = position;
#ifdef JAW
  float jw = smoothstep(-0.055, -0.073, pos.y) * smoothstep(-0.035, 0.015, pos.z);
  pos.y -= uJaw * jw;
  pos.z -= uJaw * jw * 0.3;
#endif
  vec4 w = modelMatrix * vec4(pos, 1.0);
#ifdef HAIR
  w.xyz += hairFlutter(aHair);
#endif
  mat3 nm = transpose(inverse(mat3(modelMatrix)));
#if defined(HAIR) || defined(OUTN)
  vec3 nw = normalize(nm * aOutN);
#else
  vec3 nw = normalize(nm * normal);
#endif
  vec4 mvPosition = viewMatrix * w;
  vec3 nv = normalize(mat3(viewMatrix) * nw);
  float d = max(-mvPosition.z, 0.02);
  float lw = uW;
#ifdef HAIR
  lw *= mix(1.0, 0.35, smoothstep(0.55, 1.0, aHair.x));
#endif
  float off = uPx * lw * uPxToView * d;
  mvPosition.xyz += nv * off;
  mvPosition.z -= off * 0.6 + uZPush;
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}
`,
  uo = `
#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
uniform vec3 uLine;
uniform vec3 uKeyCol;
uniform vec3 uAmbGain;
uniform float uExposure;
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  float kl = dot(uKeyCol, vec3(0.2126, 0.7152, 0.0722));
  vec3 kc = uKeyCol / max(kl, 1e-3) * min(kl, 1.0);
  gl_FragColor = vec4(uLine * mix(uAmbGain, kc, 0.5) * uExposure, 1.0);
  #include <fog_fragment>
}
`,
  ho =
    `
#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
uniform sampler2D uOverTex;
uniform vec4 uFaceRect;
uniform float uOverA;
uniform float uExposure;
uniform vec3 uKeyCol;
uniform vec3 uAmbGain;
varying vec3 vL;
varying vec3 vLN;
` +
    Ft +
    `
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  vec2 pmm = faceWarp(vL.xy * 1000.0);
  vec2 uv = (pmm * 0.001 - uFaceRect.xy) / uFaceRect.zw;
  float front = smoothstep(0.02, 0.28, vLN.z) * step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  vec4 t = texture2D(uOverTex, uv);
  float a = t.a * front * uOverA;
  vec3 c = t.a > 0.0 ? t.rgb / t.a : vec3(0.0);
  c = mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
  gl_FragColor = vec4(c * mix(uAmbGain, uKeyCol, 0.6) * uExposure, a);
  #include <fog_fragment>
}
`,
  fo = `
#include <common>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
attribute vec4 aDrop;       // xyz world centre, w radius
attribute float aStretch;   // fall speed stretch
varying vec3 vW;
varying vec3 vN;
void main() {
  vec3 p = position;
  p.y *= 1.0 + aStretch;
  vec4 w = vec4(aDrop.xyz + p * aDrop.w, 1.0);
  vW = w.xyz;
  vN = normalize(normal * vec3(1.0, 1.0 / (1.0 + aStretch), 1.0));
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}
`,
  mo = `
#include <common>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
uniform vec3 uKeyDir;
uniform vec3 uKeyCol;
uniform vec3 uRimCol;
uniform float uRimAmt;
uniform vec3 uAmbCol;
uniform vec3 uAmbGain;
uniform float uExposure;
varying vec3 vW;
varying vec3 vN;
void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  float nv = clamp(dot(N, V), 0.0, 1.0);
  vec3 H = normalize(uKeyDir + V);
  float nh = dot(N, H);
  float aw = max(fwidth(nh), 1e-4);
  // (fix round 5, SING-8: opaque grey spheres read as white popcorn in close-ups) a CLEAR bead: nearly see-through in
  // the middle, a darker refracting rim, one hard catch-light and a rim glint
  vec3 body = uAmbCol * uAmbGain * 0.35 + uKeyCol * 0.08;
  vec3 col = body * 0.45;
  float a = 0.12 + 0.6 * pow(1.0 - nv, 1.6);
  float hl = smoothstep(0.965 - aw, 0.965 + aw, nh);
  col = mix(col, uKeyCol * 2.2, hl);
  float rg = pow(1.0 - nv, 3.0);
  col += uRimCol * uRimAmt * rg * 0.8;
  a = clamp(max(a, max(hl, rg * 0.8)), 0.0, 1.0);
  gl_FragColor = vec4(col * uExposure, a);
  #include <fog_fragment>
}
`,
  Kt = "#f7e6db",
  it = "#e2c0b6";
