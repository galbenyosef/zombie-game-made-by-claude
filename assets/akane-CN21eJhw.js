import{G as ee,at as ft,aT as ye,p as Qt,C as Rt,c as te,b as Ue,$ as Jt,O as mt,q as Ht,T as Et,D as eo,V as Me}from"./index-DaQlAVPp.js";import{s as ze,a as S0,e as N0,b as B0,f as E0,c as st,d as Se,g as to}from"./lightrig-BOum5aAY.js";import{R as oo}from"./RoundedBoxGeometry-D0zz8qHa.js";import{m as no}from"./BufferGeometryUtils-Qxvmd-vM.js";const Z=(e,t=0,a=1)=>e<t?t:e>a?a:e,n0=(e,t,a)=>e+(t-e)*a,V0=(e,t,a)=>{const o=Z((a-e)/(t-e));return o*o*(3-2*o)};function _t(e=1){let t=e>>>0||2654435769;return function(){t=t+1831565813|0;let a=Math.imul(t^t>>>15,1|t);return a=a+Math.imul(a^a>>>7,61|a)^a,((a^a>>>14)>>>0)/4294967296}}function X0(...e){let t=2166136261;for(let a of e)a=Math.floor(a*1000003)|0,t^=a,t=Math.imul(t,16777619),t^=t>>>13,t=Math.imul(t,1540483477),t^=t>>>15;return(t>>>0)/4294967296}const ao={yaw:0,bodyYaw:null,pitch:0,roll:0,lean:0,breathe:0,eyes:{open:1,openL:null,openR:null,lids:0,iris:1,gaze:[0,0],light:1,closed:0},brows:{l:0,r:0},mouth:{open:0,shape:"A",smile:0,teeth:0},blush:.3,tears:0,anger:0,sad:0,arms:"guitar",guitar:1,strum:0,strumAmp:1,fret:.3,wet:0,crack:0,glow:0,wind:[0,0],hairSwing:[0,0],sit:0,seat:.46,kneel:0,stomp:0,stompSide:1,block:.45,jump:0,headbang:0,headbangAmp:0,lookUp:0,headFwd:null,bounce:0,pump:0,sway:0,weight:0,shoulders:0,hop:0,stamp:0,stampSide:1,neckLift:0,guitarTilt:0,guitarSwing:0,guitarDrop:0,bend:0,extraFinger:0,pointUp:.15,desk:.74,penAt:[0,0],phoneY:1.1,micH:null,micZ:.455,micStand:null,micBoom:!0,micSide:1,eyeReflect:.5,headScale:1,chibi:0,phoneScreen:null,light:{key:[-.6,-.8],keyColor:"#fff4ea",rim:[1,-.2],rimColor:"#6f95e8",rimAmt:.6,ambient:"#16338f",amb:.35}},pt=e=>e!==null&&typeof e=="object"&&!Array.isArray(e);function rt(e={},t=ao){const a={};for(const o of Object.keys(t)){const r=t[o],i=e[o];pt(r)?a[o]=rt(pt(i)?i:{},r):Array.isArray(r)?a[o]=Array.isArray(i)?i.slice():r.slice():a[o]=i===void 0?r:i}for(const o of Object.keys(e))o in a||(a[o]=e[o]);return a}function Nt(e){const t=Z(e.headbangAmp??0,0,1.5);if(!(t>0))return 0;const a=.5+.5*Math.cos(2*Math.PI*(e.headbang||0));return t*40*Math.pow(a,2.2)-t*6}function so(e){return(e.pitch||0)+Nt(e)-32*Z(e.lookUp??0)}const Ot=`
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
`,xe=`
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
`+Ot+`
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
`,Xe=`
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
`,ro=`
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
`,Ft=`
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
`,io=`
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
`+Ft+`
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
`,lo=`
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
`,co=`
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
`+Ot+`
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
`,uo=`
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
`,ho=`
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
`+Ft+`
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
`,fo=`
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
`,mo=`
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
`,Kt="#f7e6db",it="#e2c0b6";function po(e){const t=d=>(d/=255,d<=.04045?d/12.92:Math.pow((d+.055)/1.055,2.4)),a=d=>{if(Array.isArray(d))return new e.Color(d[0],d[1],d[2]);const w=String(d).replace("#",""),f=parseInt(w.length===3?w.split("").map(C=>C+C).join(""):w,16);return new e.Color(t(f>>16&255),t(f>>8&255),t(f&255))},o={uKeyDir:{value:new e.Vector3(-.5,.6,.6).normalize()},uKeyCol:{value:a("#fff4ea")},uRimDir:{value:new e.Vector3(1,.2,-.3).normalize()},uRimCol:{value:a("#6f95e8")},uRimAmt:{value:.6},uAmbCol:{value:a("#16338f")},uAmb:{value:.35},uAmbGain:{value:new e.Color(1,1,1)},uShadowA:{value:null},uShadowB:{value:null},uShadowMat:{value:new e.Matrix4},uShadowMatB:{value:new e.Matrix4},uShadowOn:{value:0},uShadowTexel:{value:.000244140625},uShadowSoft:{value:0},uPx:{value:2.2},uPxToView:{value:.001},uExposure:{value:1},uJaw:{value:0},uTime:{value:0},uHairWind:{value:new e.Vector4(0,0,0,0)},uCamH:{value:new e.Vector3(0,0,1)},uWarp:{value:7},uSkinTint:{value:.2},uSkinWarm:{value:.22}},r=[],i=()=>e.UniformsUtils.clone(e.UniformsLib.fog),n=d=>new e.ShaderMaterial({fog:!0,clipping:!0,...d});function s(d={}){const w={};d.detail&&(w.DETAIL=""),d.seam!=null&&(w.SEAM=""),d.tartan&&(w.TARTAN=""),d.cloth&&(w.CLOTH=""),d.neck&&(w.NECK=""),d.beads&&(w.BEADS=""),d.rest&&(w.REST=""),d.skin&&(w.SKIN=""),d.litMax!=null&&(w.LITMAX=""),d.coat&&(w.COAT="");const f={...i(),...o,uBase:{value:a(d.base??"#ffffff")},uShade:{value:a(d.shade??"#cdd3ec")},uDeep:{value:a(d.deep??d.shade??"#8890b0")},uRampT:{value:d.rampT??0},uRampSoft:{value:d.soft??.01},uDeepT:{value:d.deepT??-.55},uDeepAmt:{value:d.deepAmt??0},uRim:{value:d.rim??1},uRimW:{value:d.rimW??.62},uSpecCol:{value:a(d.specCol??"#ffffff")},uSpecAmt:{value:d.spec??0},uSpecT:{value:d.specT??.97},uWet:{value:0},uWetSpec:{value:d.wetSpec??0},uWetMatte:{value:d.wetMatte??0},uShadowSel:{value:d.shadowSel??0},uDetail:{value:d.detail??null},uDetailRect:{value:new e.Vector4(...d.detailRect??[0,0,1,1])},uInk:{value:a(d.ink??"#7d7f9c")},uPatch:{value:a(d.patch??"#f5e9e4")},uPatchShade:{value:a(d.patchShade??"#c9bfd9")},uTartan:{value:a(d.tartan??"#5a0a12")},uSeamY:{value:d.seam??0},uSeamCol:{value:a(d.seamCol??"#b9bfd8")},uSheen:{value:d.sheen??.6},uFold:{value:d.fold??.35},uJawY:{value:d.jawY??1.36},uJawCol:{value:a(d.jawCol??"#b98a9c")},uBeadScale:{value:d.beadScale??6},uLitMax:{value:d.litMax??64},uSkinBoost:{value:d.skinBoost??0},uCoat:{value:new e.Vector2(...d.coat??[.02,.3])},uShadowBias:{value:d.shadowBias??0}},C=n({defines:w,uniforms:f,vertexShader:xe,fragmentShader:Xe+ro,side:d.side??e.FrontSide});return C.userData.kind="toon",r.push(C),C}function u(d){const w={...i(),...o,uBase:{value:a(d.base??Kt)},uShade:{value:a(d.shade??it)},uDeep:{value:a(d.shade??it)},uRampT:{value:0},uRampSoft:{value:d.soft??.012},uDeepT:{value:-1},uDeepAmt:{value:0},uRim:{value:d.rim??1},uSpecCol:{value:a("#ffffff")},uSpecAmt:{value:0},uSpecT:{value:1},uWet:{value:0},uWetSpec:{value:1},uWetMatte:{value:0},uShadowSel:{value:1},uFaceTex:{value:d.faceTex},uFaceData:{value:d.dataTex},uFaceRect:{value:new e.Vector4(...d.rect)},uHeadC:{value:new e.Vector3(...d.headC??[0,0,0])},uFaceT:{value:d.faceT??-.12},uKeyTint:{value:d.keyTint??.45},uIrisR:{value:new e.Vector4(-28.5,-7,11.5,13.8)},uIrisL:{value:new e.Vector4(28.5,-7,11.5,13.8)},uPupil:{value:.45},uIrisDetail:{value:1},uEyeReflect:{value:.5},uEnvCube:{value:null},uEnvRect:{value:null},uEnvMode:{value:0},uEnvGain:{value:1},uHeadRot:{value:new e.Matrix3},uTears:{value:0},uShadowBias:{value:d.shadowBias??0}},f=n({defines:{FACE:"",JAW:""},uniforms:w,vertexShader:xe,fragmentShader:Xe+io});return f.userData.kind="face",r.push(f),f}function l(d={}){const w={...i(),...o,uBase:{value:a(d.base??"#2a2433")},uShade:{value:a(d.shade??"#110e16")},uDeep:{value:a(d.deep??"#08060b")},uTip:{value:a(d.tip??"#c1121f")},uTipShade:{value:a(d.tipShade??"#6a0a13")},uTipHot:{value:a(d.tipHot??"#e5383b")},uCrim:{value:a(d.crim??"#c1121f")},uCrimShade:{value:a(d.crimShade??"#6a0a13")},uRingCol:{value:a(d.ring??"#4a4266")},uRingT:{value:d.ringT??.993},uRingAmt:{value:d.ringAmt??1},uRampT:{value:d.rampT??.2},uRampSoft:{value:.01},uDeepT:{value:-.45},uDeepAmt:{value:.6},uRim:{value:d.rim??1.4},uSpecCol:{value:a("#ffffff")},uSpecAmt:{value:0},uSpecT:{value:1},uWet:{value:0},uWetSpec:{value:1},uWetMatte:{value:0},uShadowSel:{value:0},uShadowBias:{value:d.shadowBias??.012}},f=n({defines:{HAIR:""},uniforms:w,vertexShader:xe,fragmentShader:Xe+lo,side:e.DoubleSide});return f.userData.kind="hair",r.push(f),f}const v=new Map;function g(d,w={}){const f=d+"|"+(w.w??1)+"|"+(w.hair?1:0)+"|"+(w.zPush??0)+"|"+(w.hullN?1:0)+"|"+(w.jaw?1:0);if(v.has(f))return v.get(f);const C={};w.hair&&(C.HAIR=""),w.hullN&&(C.OUTN=""),w.jaw&&(C.JAW="");const x=n({defines:C,uniforms:{...i(),uPx:o.uPx,uPxToView:o.uPxToView,uKeyCol:o.uKeyCol,uAmbGain:o.uAmbGain,uExposure:o.uExposure,uJaw:o.uJaw,uHairWind:o.uHairWind,uTime:o.uTime,uW:{value:w.w??1},uZPush:{value:w.zPush??0},uLine:{value:a(d)}},vertexShader:co,fragmentShader:uo,side:e.BackSide});return x.userData.kind="outline",v.set(f,x),r.push(x),x}function m(d){const w=n({defines:{PULL:""},uniforms:{...i(),uOverTex:{value:d.tex},uFaceRect:{value:new e.Vector4(...d.rect)},uOverA:{value:d.alpha??.6},uPull:{value:d.pull??.03},uExposure:o.uExposure,uKeyCol:o.uKeyCol,uAmbGain:o.uAmbGain,uCamH:o.uCamH,uWarp:o.uWarp},vertexShader:xe,fragmentShader:ho,transparent:!0,depthWrite:!1,depthTest:!0});return w.stencilWrite=!0,w.stencilRef=1,w.stencilFunc=e.EqualStencilFunc,w.stencilFail=e.KeepStencilOp,w.stencilZFail=e.KeepStencilOp,w.stencilZPass=e.KeepStencilOp,r.push(w),w}function y(){const d=n({uniforms:{...i(),uKeyDir:o.uKeyDir,uKeyCol:o.uKeyCol,uRimCol:o.uRimCol,uRimAmt:o.uRimAmt,uAmbCol:o.uAmbCol,uAmbGain:o.uAmbGain,uExposure:o.uExposure},vertexShader:fo,fragmentShader:mo,transparent:!0,depthWrite:!1});return r.push(d),d}function k(d,w,f,C={}){const x=new e.Group,p=new e.Mesh(d,w);if(x.add(p),f){const M=new e.Mesh(d,g(f,{w:C.lineW??1,hair:w.userData.kind==="hair",zPush:C.zPush,jaw:w.userData.kind==="face"}));M.userData.hull=!0,M.renderOrder=p.renderOrder,x.add(M),p.userData.hullMesh=M}return x.userData.mesh=p,x}function G(){for(const d of r)d.dispose()}return{shared:o,toon:s,face:u,hair:l,outline:g,overlay:m,drops:y,withOutline:k,mats:r,dispose:G,C:a}}function go(e,t=4096){const a=()=>{const C=new e.WebGLRenderTarget(t,t,{depthBuffer:!0});return C.depthTexture=new e.DepthTexture(t,t),C.depthTexture.type=e.UnsignedIntType,C},o=a(),r=a(),i=new e.OrthographicCamera(-1,1,1,-1,.01,10),n=new e.OrthographicCamera(-1,1,1,-1,.01,10),s=new e.Matrix4,u=new e.Scene,l=new e.MeshBasicMaterial({colorWrite:!1,side:e.DoubleSide});u.overrideMaterial=l;const v=[],g=new e.Matrix4;function m(C,x={}){const p=new e.Mesh(C.geometry,l);p.matrixAutoUpdate=!1,p.frustumCulled=!1,u.add(p),v.push({src:C,proxy:p,inB:x.inB??!0})}const y=C=>{for(let x=C;x;x=x.parent)if(!x.visible)return!1;return!0},k=new e.Color,G=(C,x,p,M)=>{C.left=-M,C.right=M,C.top=M,C.bottom=-M,C.near=.01,C.far=M*4,C.position.copy(p).addScaledVector(x,M*2),C.up.set(0,1,0),Math.abs(x.y)>.98&&C.up.set(0,0,1),C.lookAt(p),C.updateMatrixWorld(!0),C.updateProjectionMatrix()},d=C=>C.state&&C.state.buffers&&C.state.buffers.depth;function w(C,x,p,M,I=x){const P=d(C),F=!!(P&&P.getReversed&&P.getReversed());i._reversedDepth=!1,n._reversedDepth=!1,G(i,x,p,M),G(n,I,p,M);for(const s0 of v)s0.proxy.geometry=s0.src.geometry,s0.proxy.matrix.copy(s0.src.matrixWorld),s0.proxy.matrixWorld.copy(s0.src.matrixWorld),s0.vis=y(s0.src);const L=C.getRenderTarget(),O=C.autoClear;C.getClearColor(k);const J=C.getClearAlpha();C.autoClear=!0,u.matrixWorldAutoUpdate=!1,F&&P.setReversed(!1);try{for(const s0 of v)s0.proxy.visible=s0.vis;C.setRenderTarget(o),C.render(u,i);for(const s0 of v)s0.proxy.visible=s0.vis&&s0.inB;C.setRenderTarget(r),C.render(u,n)}finally{F&&P.setReversed(!0),C.setRenderTarget(L),C.autoClear=O,C.setClearColor(k,J)}return g.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),s.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),{matrix:g,matrixB:s,texA:o.depthTexture,texB:r.depthTexture,texel:1/t}}function f(){o.dispose(),r.dispose(),l.dispose()}return{add:m,render:w,dispose:f,proxies:v}}const U0=[-.09,-.115,.18,.18],Ye=1e3,k0={lash:"#0b080d",lashLow:"#1a1219",crease:"#7d4a66",shadow:"90,34,70",irisTop:"#4a0710",irisMid:"#8e0f1d",irisMid2:"#d8283a",irisBot:"#ff4d5e",irisRing:"#230306",pupil:"#120103",sclera:"#fdfbff",scleraShade:"#c7c0dc",brow:"#2a1c24",mouthLine:"#5a2230",teeth:"#fbf8fb",nose:"#c98a98"},C0=(e,t,a,o,r)=>{const i=[];for(let n=0;n<=r;n++){const s=n/r,u=1-s;i.push([u*u*u*e[0]+3*u*u*s*t[0]+3*u*s*s*a[0]+s*s*s*o[0],u*u*u*e[1]+3*u*u*s*t[1]+3*u*s*s*a[1]+s*s*s*o[1]])}return i},le=(e,t,a)=>[n0(e[0],t[0],a),n0(e[1],t[1],a)],vo=(e,t,a)=>{const o=parseInt(e.slice(1),16),r=parseInt(t.slice(1),16),i=[16,8,0].map(n=>Math.round(n0(o>>n&255,r>>n&255,Z(a))));return`rgb(${i[0]},${i[1]},${i[2]})`};function y0(e,t,a){const o=t.length;if(o<2)return;const r=[],i=[];for(let n=0;n<o;n++){const s=t[Math.max(0,n-1)],u=t[Math.min(o-1,n+1)];let l=u[0]-s[0],v=u[1]-s[1];const g=Math.hypot(l,v)||1;l/=g,v/=g;const m=(typeof a=="function"?a(n/(o-1)):a[n])*.5;r.push([t[n][0]-v*m,t[n][1]+l*m]),i.push([t[n][0]+v*m,t[n][1]-l*m])}e.beginPath(),e.moveTo(r[0][0],r[0][1]);for(let n=1;n<o;n++)e.lineTo(r[n][0],r[n][1]);for(let n=o-1;n>=0;n--)e.lineTo(i[n][0],i[n][1]);e.closePath(),e.fill()}const J0=(e,t)=>"blur("+(t*e.canvas.width/2048).toFixed(2)+"px)",O0=(e,t,a=!0)=>{t.forEach((o,r)=>r===0&&a?e.moveTo(o[0],o[1]):e.lineTo(o[0],o[1]))};function wo(e,t){const a=e.eyes,o=t>0?a.openL??a.open:a.openR??a.open,r=Z(a.closed),i=Z(e.anger),n=Z(e.sad),s=Z(a.lids),u=_e(e),l=Z(o,0,1.15)*(1-.62*s)*(1-.18*u),v=.82+.18*Z(o,0,1),g=[-12.5,-1.6+n*.8+i*1.6],m=[13.6,-.6-n*1.8+i*1.8];let y=[-10.2+i*2.2,n0(11.4*l,g[1]+1.6,i*.9)+n*1.4],k=[5.5,n0(14.6*l,8.6*l,i)-n*3.4*l];const G=[-8.5,-3.6],d=[6.5,-4.4];y=le(y,G,r),k=le(k,d,r);let w=[-6.5,-12.4*v+i*6.4+u*1.6],f=[7.5,-12.8*v+i*5.4+u*1.8];w=le(w,[-6,-3.4],r),f=le(f,[7,-4],r);const C=C0(g,y,k,m,28),x=C0(g,w,f,m,28),p=r>.85?0:Z(l*(1-r));return{I:g,O:m,u1:y,u2:k,l1:w,l2:f,upper:C,lower:x,openAmt:p,closed:r,kUp:l}}function Vt(e,t){const a=(r,i,n)=>{const s=Z(r,-1,1),u=Math.abs(s);return Math.sign(s)*(i*u+(n-i)*u*u*u)},o=e.gaze[1];return[a(e.gaze[0],5.5,8.5)*t,-a(o,3.5,o<0?10.2:6)]}function gt(e,t){const a=e.eyes,o=jt(e),[r,i]=Vt(a,t),n=.6+r,s=-1.4+i,u=10*o,l=12*o;return{cx:t*ce+t*H0*n,cy:ue+H0*s,rx:u*H0,ry:l*H0,pupil:.3+.18*(1-Z(e.anger))}}function _e(e){return Z((Z(e.anger)-.35)/.4)*Z((Z(e.mouth.open)-.3)/.4)}const jt=e=>Z(e.eyes.iris*(1-.15*_e(e)),.5,1.15);function vt(e,t,a,o,r,i,n=!1,s=null){const u=t.eyes,l=wo(t,a);e.save(),e.translate(o,r),e.scale(a*H0,H0);const v=Z(t.anger),g=Z(t.sad),m=d=>n0(1.3,3.7,Math.pow(d,.8))*(1+v*.35)+v*(1-d)*.9;if(l.openAmt>.02&&!n){e.save(),e.beginPath(),O0(e,l.upper),O0(e,l.lower.slice().reverse(),!1),e.closePath(),e.clip();const d=Math.max(...l.upper.map(t0=>t0[1])),w=e.createLinearGradient(0,d,0,d-9);w.addColorStop(0,k0.scleraShade),w.addColorStop(1,k0.sclera),e.fillStyle=w,e.fillRect(-20,-20,40,40);const f=jt(t),[C,x]=Vt(u,a),p=.6+C,M=-1.4+x,I=10*f,P=12*f,F=e.createLinearGradient(0,M+P,0,M-P);F.addColorStop(0,k0.irisTop),F.addColorStop(.42,k0.irisMid),F.addColorStop(.78,k0.irisMid2),F.addColorStop(1,k0.irisBot),e.fillStyle=F,e.beginPath(),e.ellipse(p,M,I,P,0,0,Math.PI*2),e.fill(),e.save(),e.beginPath(),e.ellipse(p,M,I,P,0,0,Math.PI*2),e.clip(),e.strokeStyle="rgba(255,96,110,0.22)",e.lineWidth=.35;for(let t0=0;t0<26;t0++){const V=t0/26*Math.PI*2+X0(t0,3)*.2,R=.45+X0(t0,5)*.15,H=.78+X0(t0,7)*.18;e.beginPath(),e.moveTo(p+Math.cos(V)*I*R,M+Math.sin(V)*P*R),e.lineTo(p+Math.cos(V)*I*H,M+Math.sin(V)*P*H),e.stroke()}const L=e.createRadialGradient(p,M-P*.55,.5,p,M-P*.55,I*.95);L.addColorStop(0,"rgba(255,62,78,0.8)"),L.addColorStop(1,"rgba(255,90,100,0)"),e.fillStyle=L,e.beginPath(),e.ellipse(p,M-P*.52,I*.8,P*.42,0,0,Math.PI*2),e.fill();const O=e.createLinearGradient(0,M+P,0,M+P*.05);O.addColorStop(0,"rgba(24,2,6,0.88)"),O.addColorStop(1,"rgba(24,2,6,0)"),e.fillStyle=O,e.fillRect(p-I,M,I*2,P+.1);const J=.3+.18*(1-v),s0=e.createRadialGradient(p,M+1,.2,p,M+.5,I*J*1.1);s0.addColorStop(0,"#080001"),s0.addColorStop(1,k0.pupil),e.fillStyle=s0,e.beginPath(),e.ellipse(p,M+.6,I*J,P*J*1.05,0,0,Math.PI*2),e.fill(),e.strokeStyle=k0.irisRing,e.lineWidth=.75+v*.3,e.beginPath(),e.ellipse(p,M,I-.3,P-.3,0,0,Math.PI*2),e.stroke(),e.restore();const $=Z(u.light)*(1-v*.9);if($>.01){e.fillStyle=`rgba(255,255,255,${$})`;const t0=p+-3.6*a,V=M+4.8;e.beginPath(),e.ellipse(t0,V,3.3*f,4*f,-.35*a,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(p+3.6*a,M-4.6,1.5*f,1.5*f,0,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(255,255,255,${$*.7})`,e.beginPath(),e.ellipse(p+1.6*a,M+6.3,.9,.9,0,0,Math.PI*2),e.fill()}const r0=Math.max(Z(t.tears),g*.5);if(r0>.02&&(e.strokeStyle=`rgba(235,245,255,${.75*r0})`,e.lineWidth=1.1,e.beginPath(),O0(e,l.lower.slice(6,25).map(t0=>[t0[0],t0[1]+1.6])),e.stroke()),e.restore(),s&&(s.save(),s.translate(o,r),s.scale(a*H0,H0),s.beginPath(),O0(s,l.upper),O0(s,l.lower.slice().reverse(),!1),s.closePath(),s.fillStyle="rgb(255,0,0)",s.fill(),s.clip(),s.globalCompositeOperation="lighter",s.fillStyle="rgb(0,255,0)",s.beginPath(),s.ellipse(p,M,I,P,0,0,Math.PI*2),s.fill(),s.restore()),e.save(),e.filter=J0(e,10),e.fillStyle=`rgba(${k0.shadow},0.5)`,y0(e,l.lower.slice(9).map(t0=>[t0[0],t0[1]-.8]),t0=>n0(.8,2.6,t0)),e.restore(),e.fillStyle=k0.lashLow,y0(e,l.lower.slice(9),t0=>n0(.35,1.35,Math.sin(t0*Math.PI*.75))*(1+v*.3)),l.closed<.5){e.fillStyle=k0.crease;const t0=C0([-6,l.u1[1]*.8+3.2],[-2,l.u1[1]+4],[7,l.u2[1]+3.2],[13,l.O[1]+5.5],16);y0(e,t0,V=>Math.sin(V*Math.PI)*.7)}}const y=l.closed>.5?C0(l.O,[l.O[0]+2,l.O[1]-.2],[l.O[0]+4,l.O[1]+.8],[l.O[0]+5.6,l.O[1]+1.6],8):C0(l.O,[l.O[0]+2.2,l.O[1]+1.2],[l.O[0]+4.6,l.O[1]+2.8],[l.O[0]+7,l.O[1]+3.9],10),k=l.upper.concat(y.slice(1)),G=l.upper.length;if(n||(e.save(),e.filter=J0(e,22),e.fillStyle=`rgba(${k0.shadow},${.55+v*.2})`,y0(e,l.upper.map(d=>[d[0],d[1]+2.6]),d=>n0(2.5,5.5,Math.sin(d*Math.PI*.85))),e.filter=J0(e,9),e.fillStyle="rgba(12,8,14,0.55)",y0(e,k.map(d=>[d[0],d[1]+.5]),d=>2.2+Math.sin(d*Math.PI)*2.2),e.restore()),e.fillStyle=k0.lash,y0(e,k,d=>{const w=d*(k.length-1);if(w<G)return m(w/(G-1))*(l.closed>.5?.75:1);const f=(w-G+1)/(k.length-G);return n0(m(1),.2,Math.pow(f,.7))*(l.closed>.5?.75:1)}),l.openAmt>.2)for(let d=0;d<2;d++){const w=l.upper[22+d*3],f=C0(w,[w[0]+1.2,w[1]+1.5],[w[0]+2.2,w[1]+2.8],[w[0]+3.4+d,w[1]+3+d*.3],6);y0(e,f,C=>(1-C)*1.1)}e.restore()}function wt(e,t,a,o,r){const i=Z(a>0?t.brows.l:t.brows.r,-1,1),n=Math.max(0,-i),s=Math.max(0,i),u=[-13.5-n*1.6,20.5-n*12.5+s*5],l=[-2.5,24.5-n*5.2+s*1.6],v=[14.5,21.5+n*.2-s*2.4],g=C0(u,le(u,l,.55),le(l,v,.35),v,22);e.save(),e.translate(o,r),e.scale(a,1),e.fillStyle=n>0?vo(k0.brow,"#5e1f40",n*.8):k0.brow,y0(e,g,m=>(m<.15?n0(1.5,2.3,m/.15):n0(2.3,.4,Math.pow((m-.15)/.85,1.3)))*(1+n*1.1)),e.restore()}const Ie=-58.5,bt=6.4,ke={A:{top:-47.5,cy:-50.5,bot:-65.5,wt:11.1,wb:8.6,sq:.15,teeth:2},E:{top:-53,cy:-54.3,bot:-62.2,wt:14,wb:11.1,sq:.35,teeth:2},I:{top:-55.4,cy:-56,bot:-60,wt:10,wb:8.2,sq:.35,teeth:1.4},O:{top:-51.6,cy:-57.8,bot:-64,wt:5,wb:5,sq:0,teeth:0,oval:!0},U:{top:-54.4,cy:-58.2,bot:-62,wt:3.6,wb:3.6,sq:0,teeth:0,oval:!0}},yt={A:{top:-50.6,cy:-52.8,bot:-64.2,wt:8.2,wb:6.4,sq:.15,teeth:1.5},E:{top:-54.4,cy:-55.4,bot:-61.2,wt:10.4,wb:8.2,sq:.35,teeth:1.5}},Mt={wide:{top:-41.8,cy:-47.2,bot:-66,wt:14.6,wb:9.4,sq:.75,teeth:3.1},round:{top:-42.8,cy:-49,bot:-65.8,wt:11.6,wb:8.4,sq:.3,teeth:2.7}},qe=(e,t,a)=>{const o={};for(const r of["top","cy","bot","wt","wb","sq","teeth"])o[r]=n0(e[r],t[r],a);return o.oval=a<.5?e.oval:t.oval,o};function bo(e){const t=e.mouth,a=Z(t.open,0,1),o=t.shape==="M"?"M":ke[t.shape]?t.shape:"A";if(a<.06||o==="M")return null;const r=_e(e),i=yt[o]?qe(yt[o],ke[o],1-.8*Z(e.sad)*(1-r)):ke[o];i.oval=ke[o].oval;const n=i.oval?Mt.round:Mt.wide,s=r>0?qe(i,n,r):{...i},u=Z((a-.06)/.94),l=u<.2?u:.2+.8*Math.pow((u-.2)/.8,.7),v=l*(2-l),g={top:Ie,cy:Ie,bot:Ie,wt:bt*(i.oval?.85:1),wb:bt*.8,sq:s.sq,teeth:0},m=qe(g,s,v);m.oval=s.oval&&r<.5,m.teeth=s.teeth*Z((i.oval?0:.45)+(t.teeth??0)*.8+r+(o==="E"||o==="I"?.6:0))*Z(v*1.4);const y=Z(e.sad),k=Z(t.smile??0,-1,1)-y*.35,G=t.skew??Z((e.brows.l-e.brows.r)*.9,-1,1),d=C=>k*2.2*(1+G*C)*(1-.7*r);let w,f;if(m.oval){const C=m.wt,x=(m.top-m.bot)/2,p=(m.top+m.bot)/2;w=[],f=[];for(let M=0;M<=28;M++){const I=Math.PI-M/28*Math.PI;w.push([Math.cos(I)*C,p+Math.sin(I)*x*.92]),f.push([Math.cos(I)*C,p-Math.sin(I)*x*1.08])}}else{const C=[-m.wt,m.cy+d(-1)],x=[m.wt,m.cy+d(1)],p=(m.top-.25*(C[1]+x[1])/2)/.75;w=C0(C,[-m.wt*.5,p],[m.wt*.5,p],x,32);const M=F=>C0(F,[n0(F[0],Math.sign(F[0])*m.wb,.85),n0(F[1],m.bot,.72)],[Math.sign(F[0])*m.wb*(.45+.5*m.sq),m.bot],[0,m.bot],16),I=M(C),P=M(x).reverse();f=I.concat(P.slice(1))}return{top:w,bot:f,S:m,open:a,sk:r}}function yo(e,t,a){const o=t.mouth,r=Z(t.sad),i=Z(o.smile??0,-1,1)-r*.35,n=o.skew??Z((t.brows.l-t.brows.r)*.9,-1,1),s=bo(t),u=0,l=Ie;if(!s){const p=(o.shape==="M"?9.5:10.5)*1.22,M=O=>i*3.2*(1+n*O),I=[u-p/2,l+M(-1)],P=[u+p/2,l+M(1)],F=-1.1*i+(o.shape==="M"?.3:0),L=C0(I,[u-p*.2,l+F-i*.5],[u+p*.2,l+F-i*.5],P,20);e.fillStyle=k0.mouthLine,y0(e,L,O=>n0(.4,1.2,Math.sin(O*Math.PI))*(o.shape==="M"?1.1:.95)),e.fillStyle="rgba(214,140,165,0.55)",y0(e,C0([u-3.2,l-3.2],[u-1.2,l-3.8],[u+1.2,l-3.8],[u+3.2,l-3.2],10),O=>Math.sin(O*Math.PI)*.7);return}const{top:v,bot:g,S:m,sk:y}=s,k=()=>{e.beginPath(),O0(e,v),O0(e,g.slice().reverse(),!1),e.closePath()},G=Math.max(...v.map(p=>p[1])),d=Math.min(...g.map(p=>p[1])),w=G-d,f=m.wt*2;if(e.save(),e.filter=J0(e,14),e.fillStyle=`rgba(${k0.shadow},${.16+.12*y})`,e.beginPath(),e.ellipse(0,d-2.6,f*.26,1.5+w*.05,0,0,Math.PI*2),e.fill(),e.restore(),y>.05){e.fillStyle=`rgba(150,82,120,${.55*y})`;for(const p of[-1,1]){const M=[p*(m.wt+2.4),m.cy+5.2],I=[p*(m.wt+4),m.cy+1],P=[p*(m.wt+3.9),m.cy-3.4],F=[p*(m.wt+2.6),m.cy-6.4];y0(e,C0(M,I,P,F,14),L=>Math.sin(L*Math.PI)*.75)}}e.save(),k();const C=e.createLinearGradient(0,G,0,d);C.addColorStop(0,"#1c0409"),C.addColorStop(.45,"#360914"),C.addColorStop(1,"#5a1426"),e.fillStyle=C,e.fill(),e.clip();const x=e.createRadialGradient(0,G-w*.36,0,0,G-w*.36,Math.max(f*.42,w*.45));if(x.addColorStop(0,"rgba(12,1,5,0.75)"),x.addColorStop(1,"rgba(12,1,5,0)"),e.fillStyle=x,e.fillRect(-f,d-2,f*2,w+4),w>3.5){const p=Math.min(f*.36,m.wb*.92),M=w*.24,I=d+w*.08;e.save(),e.filter=J0(e,5);const P=e.createRadialGradient(0,I+M*.2,0,0,I+M*.2,p*1.25);P.addColorStop(0,"#e2798e"),P.addColorStop(.6,"#c85a74"),P.addColorStop(1,"#9a3a55"),e.fillStyle=P,e.beginPath(),e.ellipse(0,I,p,M*1.35,0,0,Math.PI*2),e.fill(),e.restore()}if(m.teeth>.15){const p=v.length,M=P=>m.teeth*Math.pow(Math.sin(Math.PI*(.04+.92*P/(p-1))),.45),I=[];for(let P=0;P<p;P++)I.push([v[P][0],v[P][1]-M(P)]);if(e.beginPath(),O0(e,v.map(P=>[P[0],P[1]+.6])),O0(e,I.slice().reverse(),!1),e.closePath(),e.fillStyle=k0.teeth,e.fill(),y>.2||m.teeth>2.2){const P=Math.round((p-1)*.7),F=I[P],L=2.8*Z(y*1.4+.3),O=1.3;e.beginPath(),e.moveTo(F[0]-O,F[1]+.3),e.quadraticCurveTo(F[0]-O*.35,F[1]-L*.55,F[0]+.2,F[1]-L),e.quadraticCurveTo(F[0]+O*.45,F[1]-L*.45,F[0]+O,F[1]+.3),e.closePath(),e.fill()}if(e.save(),e.filter=J0(e,4),e.fillStyle="rgba(150,120,160,0.55)",y0(e,v.slice(2,-2).map(P=>[P[0],P[1]-.25]),P=>Math.sin(P*Math.PI)*m.teeth*.55),e.fillStyle="rgba(8,1,4,0.5)",y0(e,I.slice(3,-3).map(P=>[P[0],P[1]-.9]),P=>Math.sin(P*Math.PI)*1.4),e.restore(),y>.35){const P=g.slice(Math.round(g.length*.32),Math.round(g.length*.68)+1),F=1.25*Z((y-.35)/.4);e.beginPath(),O0(e,P.map(L=>[L[0],L[1]-.5])),O0(e,P.slice().reverse().map((L,O,J)=>[L[0],L[1]+F*Math.pow(Math.sin(Math.PI*O/(J.length-1)),.5)]),!1),e.closePath(),e.fillStyle=k0.teeth,e.fill()}}e.restore(),e.fillStyle="#3a0d18",y0(e,v,p=>n0(.45,.85,Math.sin(p*Math.PI))),e.fillStyle="rgba(70,18,34,0.85)",y0(e,g,p=>n0(.3,.6,Math.sin(p*Math.PI))),e.save(),e.filter=J0(e,5),e.fillStyle="rgba(226,150,172,0.45)",e.beginPath(),e.ellipse(0,d-1.3,Math.max(2,f*.16),.8,0,0,Math.PI*2),e.fill(),e.restore()}function Mo(e,t,a){const o=Z(t.tears);if(!(o<.02))for(const r of[-1,1]){const i=r*ce,n=ue;e.fillStyle=`rgba(214,236,255,${.85*o})`;const s=C0([i-r*6,n-13.4],[i+r*2,n-15.6],[i+r*9,n-15],[i+r*14.5,n-11.5],16);y0(e,s,k=>Math.sin(k*Math.PI)*2.4),e.fillStyle=`rgba(255,255,255,${o})`,y0(e,s.map(k=>[k[0],k[1]+.5]),k=>Math.sin(k*Math.PI)*.8);const u=i+r*11.5,l=n-13.5;e.save(),e.filter=J0(e,6),e.fillStyle=`rgba(28,18,34,${.4*o})`,y0(e,C0([u-r*1.2,l+1],[u-r*.8,l-6],[u-r*.2,l-12],[u+r*.4,l-17*o],12),k=>n0(1.8,.4,k)),e.restore();const v=16+34*o,g=r*2.8,m=C0([u,l],[u+g*.25,l-v*.35],[u+g,l-v*.7],[u+g*.7,l-v],24);e.fillStyle=`rgba(120,160,225,${.55*o})`,y0(e,m,k=>n0(3.4,2.4,k)),e.fillStyle=`rgba(226,242,255,${.95*o})`,y0(e,m,k=>n0(2.3,1.6,k)),e.fillStyle=`rgba(255,255,255,${o})`,y0(e,m.map(k=>[k[0]-r*.5,k[1]]),k=>.7*(1-k*.4));const y=m[m.length-1];e.fillStyle=`rgba(120,160,225,${.7*o})`,e.beginPath(),e.ellipse(y[0],y[1]-1.8,3,3.8,0,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(226,242,255,${o})`,e.beginPath(),e.ellipse(y[0],y[1]-1.6,2.3,3,0,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(255,255,255,${o})`,e.beginPath(),e.ellipse(y[0]-r*.8,y[1]-.6,.8,1.1,0,0,Math.PI*2),e.fill()}}const ce=28.5,ue=-5.5,H0=1.15;function Ze(e,t,a,o,r=0,i=null,n=null){const s=[],u=y=>{const k=y.canvas.width,G=k/(U0[2]*Ye);y.setTransform(1,0,0,1,0,0),n||y.clearRect(0,0,k,k),y.setTransform(G,0,0,-G,-U0[0]*Ye*G,(U0[1]+U0[3])*Ye*G),n&&(y.save(),y.beginPath(),y.rect(n[0],n[1],n[2]-n[0],n[3]-n[1]),y.clip(),y.clearRect(n[0],n[1],n[2]-n[0],n[3]-n[1]),s.push(y))};u(e),a&&u(a),i&&(u(i),i.fillStyle="#000",i.fillRect(-100,-130,200,200));const l=Z(o.anger),v=Z(o.sad),g=Z(o.blush+v*.15+Z(o.tears)*.2+l*.15);for(const y of[-1,1]){const k=y*31,G=-25,d=e.createRadialGradient(k,G,0,k,G,15);if(d.addColorStop(0,`rgba(232,138,154,${.7*g})`),d.addColorStop(.6,`rgba(232,138,154,${.32*g})`),d.addColorStop(1,"rgba(232,138,154,0)"),e.fillStyle=d,e.save(),e.translate(k,G),e.scale(1,.55),e.translate(-k,-G),e.beginPath(),e.arc(k,G,15,0,Math.PI*2),e.fill(),e.restore(),g>.35){e.fillStyle=`rgba(217,96,122,${Z((g-.35)*1.6)*.8})`;for(let w=0;w<3;w++){const f=k+y*(w-1)*3.4-1.2,C=G+.5;y0(e,[[f+1.2,C+2.2],[f-1.2,C-2.2]],x=>Math.sin(x*Math.PI)*.8+.1)}}}if(l>.02){const y=e.createLinearGradient(0,60,0,-4);y.addColorStop(0,"rgba(30,12,30,0)"),y.addColorStop(.3,`rgba(30,12,30,${.5*l})`),y.addColorStop(.7,`rgba(30,12,30,${.36*l})`),y.addColorStop(1,"rgba(30,12,30,0)"),e.fillStyle=y,e.fillRect(-70,-4,140,80),e.fillStyle=`rgba(150,70,110,${.55*l})`;for(const k of[-1,1])y0(e,C0([k*21,-19.5],[k*25,-20.5],[k*30,-20.8],[k*35,-19.6],10),G=>Math.sin(G*Math.PI)*.7)}if(v>.3){e.fillStyle=`rgba(160,120,170,${(v-.3)*.5})`;for(const y of[-1,1])y0(e,C0([y*6,20],[y*7.5,22],[y*8.5,23.5],[y*9,26],8),k=>Math.sin(k*Math.PI)*.6)}e.fillStyle=k0.nose,y0(e,C0([1.8,-31.2],[2.4,-32],[1.8,-32.8],[.6,-33.1],10),y=>Math.sin(y*Math.PI)*.9);const m=e.createRadialGradient(0,-30.5,0,0,-30.5,3.5);m.addColorStop(0,`rgba(232,138,154,${.45*Z(g+.2)})`),m.addColorStop(1,"rgba(232,138,154,0)"),e.fillStyle=m,e.beginPath(),e.arc(0,-30.5,3.5,0,Math.PI*2),e.fill();for(const y of[-1,1])vt(e,o,y,y*ce,ue,r,!1,i),wt(e,o,y,y*ce,ue),a&&(vt(a,o,y,y*ce,ue,r,!0),wt(a,o,y,y*ce,ue));if(l>.02){const y=e.createLinearGradient(0,30,0,-6);y.addColorStop(0,"rgba(30,12,30,0)"),y.addColorStop(.55,`rgba(30,12,30,${.3*l})`),y.addColorStop(1,"rgba(30,12,30,0)"),e.fillStyle=y,e.fillRect(-60,-6,120,36)}if(l>.4){e.fillStyle=`rgba(150,70,110,${(l-.4)*.9})`;for(const y of[-1,1])y0(e,C0([y*4.5,13],[y*5.5,15.5],[y*6.5,17.5],[y*8,19.5],8),k=>Math.sin(k*Math.PI)*.75)}yo(e,o),Mo(e,o),So(e,Z(o.wounds??0));for(const y of s)y.restore()}function So(e,t){if(!(t>.01))return;e.save(),e.lineCap="round";const a=e.createRadialGradient(-27,-13,0,-27,-13,11);a.addColorStop(0,`rgba(58,40,34,${.3*t})`),a.addColorStop(1,"rgba(58,40,34,0)"),e.fillStyle=a,e.beginPath(),e.arc(-27,-13,11,0,Math.PI*2),e.fill();const o=(i,n,s,u,l,v)=>{e.strokeStyle=`rgba(118,20,30,${v})`,e.lineWidth=l,e.beginPath(),e.moveTo(i,n),e.quadraticCurveTo((i+s)/2+1.3,(n+u)/2+.7,s,u),e.stroke()};o(-34,-17,-24,-27.5,.62,.92*t),o(-32.6,-15.2,-24.8,-25.2,.38,.62*t),o(-31,-19.4,-25.5,-28.2,.3,.5*t),e.strokeStyle=`rgba(230,120,120,${.35*t})`,e.lineWidth=.9,e.beginPath(),e.moveTo(-34.6,-17.4),e.quadraticCurveTo(-29,-23,-24.6,-28.2),e.stroke(),e.translate(30.5,-26.5),e.rotate(-.38);const r=(i,n,s,u,l)=>{e.beginPath(),e.moveTo(i+l,n),e.arcTo(i+s,n,i+s,n+u,l),e.arcTo(i+s,n+u,i,n+u,l),e.arcTo(i,n+u,i,n,l),e.arcTo(i,n,i+s,n,l),e.closePath()};e.fillStyle=`rgba(205,166,128,${.96*t})`,r(-8.4,-2.7,16.8,5.4,1.5),e.fill(),e.fillStyle=`rgba(232,208,178,${.95*t})`,e.fillRect(-2.7,-2.7,5.4,5.4),e.fillStyle=`rgba(140,98,70,${.55*t})`;for(let i=0;i<6;i++)for(const n of[-1,1])e.beginPath(),e.arc(n*(4.4+i%3*1.3),-1.4+Math.floor(i/3)*2.8,.28,0,Math.PI*2),e.fill();e.restore()}const xo=[0,.012,-.004];function R0(e,t,a){const o=N0(e,t,a,0,.024,-.008,.0705,.087,.086),r=N0(e,t,a,0,-.032,.004,.061,.056,.068);let i=S0(o,r,.02);const n=Math.abs(e);return i=B0(i,(n-.019-(t+.0805)*.86)*.758,.022),i=B0(i,(-(t+.0825)+(.028-a)*.62)*.85,.016),i=B0(i,a-.0745,.035),i=S0(i,N0(e,t,a,0,-.029,.0655,.0042,.0095,.006),.009),i}function ko(e,t,a={}){const o=a.res??.0011,r=ze(R0,[-.085,-.1,-.105],[.085,.125,.095],o,{smooth:1,project:3}),i=new e.BufferGeometry;i.setAttribute("position",new e.BufferAttribute(r.positions,3)),i.setAttribute("normal",new e.BufferAttribute(r.normals,3)),i.setIndex(new e.BufferAttribute(r.indices,1)),i.computeBoundingSphere();let n=a.faceRes??2048;const s=N=>{const Y=document.createElement("canvas");return Y.width=Y.height=N,Y},u=N=>{const Y=new e.CanvasTexture(N);return Y.colorSpace=e.NoColorSpace,Y.anisotropy=8,Y.premultiplyAlpha=!0,Y.minFilter=e.LinearMipmapLinearFilter,Y.magFilter=e.LinearFilter,Y},l=N=>{const Y=s(N),o0=s(N),i0=s(N/2),u0={faceTex:u(Y),overTex:u(o0),dataTex:u(i0),key:"",ctx:{face:Y.getContext("2d"),over:o0.getContext("2d"),data:i0.getContext("2d")}};return u0.dataTex.premultiplyAlpha=!0,u0},v=new Map([[n,l(n)]]);let g=v.get(n);const m=t.face({faceTex:g.faceTex,dataTex:g.dataTex,rect:U0,headC:xo}),y=t.withOutline(i,m,"#6e4452",{lineW:1}),k=y.userData.mesh,G=new e.Mesh(i,t.overlay({tex:g.overTex,rect:U0,alpha:.4,pull:.028}));G.renderOrder=20,y.add(G);const d=[-27,-84,27,-35],w=[-48,-25,48,17],f=U0[0]*1e3,C=(U0[1]+U0[3])*1e3,x=U0[2]*1e3,p=(N,[Y,o0,i0,u0])=>{const f0=N/x,K=Math.max(0,Math.floor((Y-f)*f0)),b=Math.min(N,Math.ceil((i0-f)*f0)),W=Math.max(0,Math.floor((C-u0)*f0)),X=Math.min(N,Math.ceil((C-o0)*f0));return[K,W,b-K,X-W]},M=[],I=document.createElement("canvas"),P=I.getContext("2d"),F=new e.Texture(I),L=new e.Vector2,O=([N,Y,o0],i0)=>{const u0=N[Y+"Tex"];if(!o0){u0.needsUpdate=!0;return}const f0=u0.image,K=f0.width,[b,W,X,S]=p(K,o0);(I.width!==X||I.height!==S)&&(I.width=X,I.height=S),P.globalCompositeOperation="copy",P.drawImage(f0,b,W,X,S,0,0,X,S),i0.copyTextureToTexture(F,u0,null,L.set(b,K-W-S))};let J=!1;function s0(N){if(!M.length)return;const Y=M.length>4||J?M.length:1;J=!1;for(let o0=0;o0<Y&&M.length;o0++)O(M.shift(),N)}const $=(N,Y,o0)=>{for(let i0=M.length-1;i0>=0;i0--)M[i0][0]===N&&M[i0][1]===Y&&(!o0||M[i0][2]&&M[i0][2]===o0)&&M.splice(i0,1);!o0&&M.some(i0=>i0[0]===N&&i0[1]===Y&&!i0[2])||M.push([N,Y,o0])};let r0=null,t0=0;function V(N,Y){const o0=JSON.stringify(N.eyes),i0=JSON.stringify(N.mouth),u0=JSON.stringify([N.brows,N.blush,N.tears,N.anger,N.sad,N.wet,N.wounds]),f0=o0+"|"+i0+"|"+u0;r0=N,t0=Y;const K=m.uniforms,b=gt(N,-1),W=gt(N,1);if(K.uIrisR.value.set(b.cx,b.cy,b.rx,b.ry),K.uIrisL.value.set(W.cx,W.cy,W.rx,W.ry),K.uPupil.value=W.pupil,K.uTears.value=Math.max(0,Math.min(1,N.tears)),f0===g.key)return;const X=g.synced&&o0===g.kE&&u0===g.kR,S=g.synced&&i0===g.kM&&u0===g.kR;g.key=f0,g.kE=o0,g.kM=i0,g.kR=u0,X?(Ze(g.ctx.face,null,null,N,Y,null,d),$(g,"face",d)):S?(Ze(g.ctx.face,null,g.ctx.over,N,Y,g.ctx.data,w),$(g,"face",w),$(g,"over",w),$(g,"data",w)):(Ze(g.ctx.face,null,g.ctx.over,N,Y,g.ctx.data),$(g,"face",null),$(g,"over",null),$(g,"data",null),g.synced=!0)}function R(N){N!==n&&(n=N,v.has(N)||v.set(N,l(N)),g=v.get(N),m.uniforms.uFaceTex.value=g.faceTex,m.uniforms.uFaceData.value=g.dataTex,G.material.uniforms.uOverTex.value=g.overTex,r0&&V(r0,t0),J=!0)}function H(N,Y){if(v.has(N)||!r0)return;const o0=n;R(N);for(let i0=M.length-1;i0>=0;i0--)M[i0][0]===g&&M.splice(i0,1);if(Y)for(const i0 of[g.faceTex,g.overTex,g.dataTex])i0.needsUpdate=!0,Y.initTexture(i0);R(o0)}return{group:y,mesh:k,overlay:G,material:m,paint:V,setRes:R,warm:H,flush:s0,get res(){return n},stats:{verts:r.positions.length/3,tris:r.indices.length/3},dispose(){i.dispose();for(const N of v.values())N.faceTex.dispose(),N.overTex.dispose(),N.dataTex.dispose()}}}function ut(e,t){const a=[],o=i=>e[Math.max(0,Math.min(e.length-1,i))],r=e.length-1;for(let i=0;i<=t;i++){const n=i/t*r,s=Math.min(r-1,Math.floor(n)),u=n-s,l=o(s-1),v=o(s),g=o(s+1),m=o(s+2),y=u*u,k=y*u;a.push([0,1,2].map(G=>.5*(2*v[G]+(-l[G]+g[G])*u+(2*l[G]-5*v[G]+4*g[G]-m[G])*y+(-l[G]+3*v[G]-3*g[G]+m[G])*k)))}return a}const $e=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],St=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],Qe=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],we=e=>{const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Ut(e,t=[0,0,1]){const a=e.length,o=[],r=[],i=[];for(let s=0;s<a;s++)o.push(we($e(e[Math.min(a-1,s+1)],e[Math.max(0,s-1)])));let n=$e(t,o[0].map(s=>s*St(t,o[0])));Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])<1e-6&&(n=Math.abs(o[0][0])<.9?Qe(o[0],[1,0,0]):Qe(o[0],[0,1,0])),n=we(n);for(let s=0;s<a;s++){if(s>0){const u=o[s];n=we($e(n,u.map(l=>l*St(n,u))))}r.push(n),i.push(Qe(o[s],n))}return{T:o,N:r,B:i}}function I0(e,t,a,o={}){const r=o.segs??32,i=o.radial??16,n=o.raw?t:ut(t,r),s=n.length,{T:u,N:l,B:v}=Ut(n,o.up??[0,0,1]),g=typeof a=="function"?a:()=>a,m=o.scale?o.scale[0]:1,y=o.scale?o.scale[1]:1,k=[],G=[],d=[],w=(p,M,I,P,F,L,O=0)=>{for(let J=0;J<=i;J++){const s0=J/i*Math.PI*2,$=Math.cos(s0),r0=Math.sin(s0);I[0]*$*y+P[0]*r0*m,I[1]*$*y+P[1]*r0*m,I[2]*$*y+P[2]*r0*m,k.push(p[0]+(I[0]*$*m+P[0]*r0*y)*F,p[1]+(I[1]*$*m+P[1]*r0*y)*F,p[2]+(I[2]*$*m+P[2]*r0*y)*F);let t0=we([I[0]*$/m+P[0]*r0/y,I[1]*$/m+P[1]*r0/y,I[2]*$/m+P[2]*r0/y]);O&&(t0=we([t0[0]*(1-Math.abs(O))+L[0]*O,t0[1]*(1-Math.abs(O))+L[1]*O,t0[2]*(1-Math.abs(O))+L[2]*O])),G.push(t0[0],t0[1],t0[2])}};let f=0;const C=5;if(o.capStart){const p=g(0);for(let M=0;M<C;M++){const I=(1-M/C)*Math.PI/2,P=n[0].map((F,L)=>F-u[0][L]*Math.sin(I)*p*Math.min(m,y));w(P,0,l[0],v[0],p*Math.cos(I)+1e-5,u[0],-Math.sin(I)),f++}}for(let p=0;p<s;p++)w(n[p],p/(s-1),l[p],v[p],Math.max(g(p/(s-1)),1e-5),u[p]),f++;if(o.capEnd){const p=g(1);for(let M=1;M<=C;M++){const I=M/C*Math.PI/2,P=n[s-1].map((F,L)=>F+u[s-1][L]*Math.sin(I)*p*Math.min(m,y));w(P,1,l[s-1],v[s-1],p*Math.cos(I)+1e-5,u[s-1],Math.sin(I)),f++}}for(let p=0;p<f-1;p++)for(let M=0;M<i;M++){const I=p*(i+1)+M,P=I+1,F=I+i+1,L=F+1;d.push(I,P,F,P,L,F)}const x=new e.BufferGeometry;return x.setAttribute("position",new e.Float32BufferAttribute(k,3)),x.setAttribute("normal",new e.Float32BufferAttribute(G,3)),x.setIndex(d),x.computeBoundingSphere(),x}const xt=new Map;function kt(e,t,a,o={}){const r=o.segs??32,i=o.radial??16,n=5,s=e.attributes.position,u=e.attributes.normal;if(!s||!u||!e.index)return!1;const l=o.raw?t:ut(t,r),v=l.length,g=v+(o.capStart?n:0)+(o.capEnd?n:0);if(s.count!==g*(i+1))return!1;const{T:m,N:y,B:k}=Ut(l,o.up??[0,0,1]),G=typeof a=="function"?a:()=>a,d=o.scale?o.scale[0]:1,w=o.scale?o.scale[1]:1;let f=xt.get(i);if(!f){f=new Float32Array((i+1)*2);for(let I=0;I<=i;I++){const P=I/i*Math.PI*2;f[I*2]=Math.cos(P),f[I*2+1]=Math.sin(P)}xt.set(i,f)}const C=s.array,x=u.array;let p=0;const M=(I,P,F,L,O,J=0)=>{for(let s0=0;s0<=i;s0++){const $=f[s0*2],r0=f[s0*2+1];C[p]=I[0]+(P[0]*$*d+F[0]*r0*w)*L,C[p+1]=I[1]+(P[1]*$*d+F[1]*r0*w)*L,C[p+2]=I[2]+(P[2]*$*d+F[2]*r0*w)*L;let t0=P[0]*$/d+F[0]*r0/w,V=P[1]*$/d+F[1]*r0/w,R=P[2]*$/d+F[2]*r0/w,H=Math.sqrt(t0*t0+V*V+R*R)||1;if(t0/=H,V/=H,R/=H,J){const N=1-Math.abs(J);t0=t0*N+O[0]*J,V=V*N+O[1]*J,R=R*N+O[2]*J,H=Math.sqrt(t0*t0+V*V+R*R)||1,t0/=H,V/=H,R/=H}x[p]=t0,x[p+1]=V,x[p+2]=R,p+=3}};if(o.capStart){const I=G(0),P=Math.min(d,w);for(let F=0;F<n;F++){const L=(1-F/n)*Math.PI/2,O=Math.sin(L)*I*P;M([l[0][0]-m[0][0]*O,l[0][1]-m[0][1]*O,l[0][2]-m[0][2]*O],y[0],k[0],I*Math.cos(L)+1e-5,m[0],-Math.sin(L))}}for(let I=0;I<v;I++)M(l[I],y[I],k[I],Math.max(G(I/(v-1)),1e-5),m[I]);if(o.capEnd){const I=G(1),P=Math.min(d,w);for(let F=1;F<=n;F++){const L=F/n*Math.PI/2,O=Math.sin(L)*I*P;M([l[v-1][0]+m[v-1][0]*O,l[v-1][1]+m[v-1][1]*O,l[v-1][2]+m[v-1][2]*O],y[v-1],k[v-1],I*Math.cos(L)+1e-5,m[v-1],Math.sin(L))}}return s.needsUpdate=!0,u.needsUpdate=!0,e.computeBoundingSphere(),!0}function Ct(e){const t=e.attributes.position.array,a=e.attributes.normal,o=a.array,r=e.index.array;o.fill(0);for(let i=0;i<r.length;i+=3){const n=r[i]*3,s=r[i+1]*3,u=r[i+2]*3,l=t[u]-t[s],v=t[u+1]-t[s+1],g=t[u+2]-t[s+2],m=t[n]-t[s],y=t[n+1]-t[s+1],k=t[n+2]-t[s+2],G=v*k-g*y,d=g*m-l*k,w=l*y-v*m;o[n]+=G,o[n+1]+=d,o[n+2]+=w,o[s]+=G,o[s+1]+=d,o[s+2]+=w,o[u]+=G,o[u+1]+=d,o[u+2]+=w}for(let i=0;i<o.length;i+=3){const n=Math.sqrt(o[i]*o[i]+o[i+1]*o[i+1]+o[i+2]*o[i+2])||1;o[i]/=n,o[i+1]/=n,o[i+2]/=n}a.needsUpdate=!0}function Pt(e,t,a,o,r={}){return I0(e,t,1,{...r,radial:r.radial??12,scale:[o,a]})}function lt(e,t,a){const o=e(t[0],t[1],t[2]);if(o>=a)return t;const r=.001,i=[e(t[0]+r,t[1],t[2])-e(t[0]-r,t[1],t[2]),e(t[0],t[1]+r,t[2])-e(t[0],t[1]-r,t[2]),e(t[0],t[1],t[2]+r)-e(t[0],t[1],t[2]-r)],n=Math.hypot(i[0],i[1],i[2])||1;return[t[0]+i[0]/n*(a-o),t[1]+i[1]/n*(a-o),t[2]+i[2]/n*(a-o)]}const w0={hips:[0,.86,0],chest:[0,1.18,0],neck:[0,1.315,-.012]};function j0(e,t,a){let o=E0(e,t,a,0,1.06,-.004,.137,.212,.09,.07);o=S0(o,N0(e,t,a,0,1.185,.004,.142,.118,.105),.05),o=S0(o,st(e,t,a,-.126,1.262,-.014,.126,1.262,-.014,.052),.055),o=S0(o,N0(e,t,a,0,.915,0,.15,.07,.1),.04);const r=E0(e,t,a,0,.862,0,.137,.03,.087,.026);o=B0(o,-(t-.875),.02),o=S0(o,r,.012),o=B0(o,-(t-.834),.004),o=B0(o,-st(e,t,a,0,1.24,-.01,0,1.6,-.014,.044),.016);{const i=a+.018,n=Math.hypot(e,i)||1e-6,s=Math.max(0,i/n),u=Math.max(0,-i/n),l=1.308-.062*s*s,v=.029-.009*s+.004*u,g=Math.hypot(e,i*(i<0?.86:1.12))-(.074+.004*u-.006*s),m=Math.hypot(g,(t-l)*1.1)-v;o=S0(o,m,.012)}o=S0(o,N0(e,t,a,0,1.252,-.11,.108,.078,.046),.03),o=S0(o,E0(e,t,a,0,.955,.08,.095,.052,.013,.011),.008);{const i=Math.atan2(e,a+.004),n=Math.max(0,Math.min(1,(1.15-t)/.16))*Math.max(0,Math.min(1,(t-.878)/.03)),s=Math.pow(.5+.5*Math.sin(i*11+Math.sin(t*19+i*2.3)*.9+.6),2.6);o-=.0028*n*s;const u=Math.max(0,Math.min(1,a/.06)),l=Math.pow(Math.max(0,Math.sin((Math.abs(e)*.9+(t-1))*70)),3)*Math.max(0,Math.min(1,(t-.98)/.05))*Math.max(0,Math.min(1,(1.16-t)/.04))*Math.max(0,Math.min(1,(Math.abs(e)-.04)/.04));o-=.002*l*u}return o}function Re(e,t,a,o,r){const i=ze(t,a,o,r,{smooth:1,project:3}),n=new e.BufferGeometry;return n.setAttribute("position",new e.BufferAttribute(i.positions,3)),n.setAttribute("normal",new e.BufferAttribute(i.normals,3)),n.setIndex(new e.BufferAttribute(i.indices,1)),n.computeBoundingSphere(),n}function Co(e){const a=document.createElement("canvas");a.width=a.height=1024;const o=a.getContext("2d"),r=[-.26,.8,.52,.56],i=1024/r[2];o.setTransform(i,0,0,-i,-r[0]*i,(r[1]+r[3])*i),o.fillStyle="#000",o.fillRect(-1,0,3,3),o.globalCompositeOperation="lighter";const n=(u,l,v)=>{o.strokeStyle=`rgba(255,0,0,${v})`,o.lineWidth=l,o.lineCap="round",o.lineJoin="round",o.beginPath(),u.forEach((g,m)=>m?o.lineTo(g[0],g[1]):o.moveTo(g[0],g[1])),o.stroke()};for(const u of[-1,1])n([[u*.13,1.2],[u*.1,1.1],[u*.085,1]],.006,.9),n([[u*.16,1.12],[u*.14,1],[u*.13,.92]],.005,.9),n([[u*.05,.905],[u*.1,.9],[u*.14,.91]],.004,.8),n([[u*.02,.89],[u*.06,.885]],.003,.7);o.strokeStyle="rgba(0,255,0,0.9)",o.lineWidth=.0016,o.setLineDash([.006,.004]),o.beginPath(),o.moveTo(-.098,.905),o.lineTo(-.1,.99),o.quadraticCurveTo(-.1,1.009,-.085,1.01),o.lineTo(.085,1.01),o.quadraticCurveTo(.1,1.009,.1,.99),o.lineTo(.098,.905),o.stroke(),o.setLineDash([]),o.lineWidth=.0014,o.beginPath(),o.moveTo(-.2,.885),o.lineTo(.2,.885),o.stroke(),o.strokeStyle="rgba(0,255,0,0.45)",o.lineWidth=.0012;for(let u=-24;u<=24;u++)o.beginPath(),o.moveTo(u*.0072,.836),o.lineTo(u*.0072,.882),o.stroke();o.strokeStyle="rgba(0,255,0,1)",o.lineWidth=.0022;for(const u of[-1,1])o.beginPath(),o.moveTo(u*.1,.99),o.lineTo(u*.085,.915),o.stroke();const s=new e.CanvasTexture(a);return s.colorSpace=e.NoColorSpace,s.anisotropy=8,{tex:s,rect:r}}function Po(e){const a=document.createElement("canvas");a.width=a.height=1024;const o=a.getContext("2d"),r=[-.16,.05,.32,.85];o.setTransform(1024/r[2],0,0,-1024/r[3],-r[0]*1024/r[2],(r[1]+r[3])*1024/r[3]),o.fillStyle="#000",o.fillRect(-1,-1,3,3),o.globalCompositeOperation="lighter";const i=_t(77),n=(u,l,v,g)=>{const m=[];for(let y=0;y<20;y++){const k=y/20*Math.PI*2,G=1+(i()-.5)*.55;m.push([u+Math.cos(k)*v*G,l+Math.sin(k)*g*G])}o.beginPath(),m.forEach((y,k)=>k?o.lineTo(y[0],y[1]):o.moveTo(y[0],y[1])),o.closePath(),o.fillStyle="rgb(0,0,255)",o.fill(),o.strokeStyle="rgb(0,255,0)",o.lineWidth=.0018,o.stroke(),o.lineWidth=9e-4;for(let y=0;y<3;y++){const k=l+(i()-.5)*g*1.2;o.beginPath(),o.moveTo(u-v*1.1,k+(i()-.5)*.003),o.lineTo(u+v*1.1,k+(i()-.5)*.003),o.stroke()}};n(.074,.468,.017,.012),n(-.086,.655,.011,.019),n(-.07,.262,.008,.012),n(.092,.73,.006,.008);const s=new e.CanvasTexture(a);return s.colorSpace=e.NoColorSpace,s.anisotropy=8,{tex:s,rect:r}}const me={thigh:.39,shin:.3955},Ao=e=>[e*.078,.86,0],ht=e=>[e*.078*.92,.47,.012],pe=e=>[e*.078*.85,.075,-.004];function Wo(e){const t=Z(e.sit??0),a=Z(e.kneel??0),o=Z(e.stomp??0),r=1-Math.max(t,a,o),i=Math.max(Z(e.jump??0),Z(e.hop??0)*r),n=Z(e.bounce??0,-.03,.14)*r,s=Z(e.weight??0,-1,1)*r,u=Z(e.stamp??0)*r,l=(e.stampSide??1)>=0?1:-1,v=e.seat??.46,g=e.block??.45,m=(e.stompSide??1)>=0?1:-1;let y=.86+t*(v+.075-.86)+a*(.47-.86)-o*.02;const k=i*.34;y+=k-n-.012*u-.006*Math.abs(s);const G=t*-.02+a*.02-.25*n,d=-m*.018*o+.034*s-l*.022*u,w={};for(const x of[-1,1]){let p=pe(x).slice();const M=[x*.1,.075,.3],I=[x*.1,.19,-.33];if(p=[p[0]+(M[0]-p[0])*t+(I[0]-p[0])*a,p[1]+(M[1]-p[1])*t+(I[1]-p[1])*a,p[2]+(M[2]-p[2])*t+(I[2]-p[2])*a],x===m&&o>0){const L=[x*.12,g+.075,.3];p=[n0(p[0],L[0],o),n0(p[1],L[1],o),n0(p[2],L[2],o)]}const P=Math.max(0,-x*s);p=[p[0]-x*.008*P,p[1]+.022*P,p[2]+.012*P],x===l&&u>0&&(p=[p[0]+x*.012*u,p[1]+.2*u,p[2]+.07*u]),p=[p[0],p[1]+k-i*.62*0+i*.12,p[2]-i*.1];const F=[x*.12,a*-.6+o*(x===m?.3:0),1];w[x]={ankle:p,pole:F}}const f={hipsY:y,hipsZ:G,hipsX:d,legs:w,sit:t,kneel:a,stomp:o,jump:i,stand:r,bounce:n,weight:s,stamp:u};a>0&&Go(e,f);const C=Z(e.walkAmp??0)*r;if(C>.001){const x=e.walk??0,p=(e.walkStride??.3)*C,M=(e.walkLift??.085)*C,I=(me.thigh+me.shin)*.988;let P=9;const F={};for(const L of[-1,1]){const O=((x+(L>0?0:.5))%1+1)%1;let J,s0;const $=e.walkDuty??.6;if(O<$)J=p*(1-2*(O/$)),s0=0;else{const N=(O-$)/(1-$),Y=N*N*(3-2*N);J=-p+2*p*Y,s0=M*Math.sin(Math.PI*N)}const r0=pe(L),t0=[r0[0]*(1-.1*C),r0[1]+s0,r0[2]+J+.02*C];F[L]=t0;const V=t0[0]-L*.078,R=t0[2],H=Math.sqrt(Math.max(.04,I*I-V*V-R*R));P=Math.min(P,t0[1]+H)}f.hipsY=Math.min(y,n0(y,P,C))-.006*C,f.hipsX=.024*C*Math.sin(x*Math.PI*2+.4),f.hipsZ=0;for(const L of[-1,1])f.legs[L]={ankle:F[L],pole:[L*.1,0,1]};f.walking=C}return(e.ride??0)>0&&Bo(e,f),f}const Ge=[];{for(const e of[-.09,-.03,.03,.09,.142])Ge.push([0,0,e]);for(let e=1;e<=3;e++){const t=e/4*Math.PI/2;Ge.push([0,.014-.014*Math.cos(t),.142+.014*Math.sin(t)],[0,.014-.014*Math.cos(t),-.09-.014*Math.sin(t)])}Ge.push([0,.026,.156],[0,.04,.154],[0,.07,.152],[0,.1,.12])}const Io=.046;function Xt(e,t,a){const o=me.thigh,r=me.shin;let i=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],n=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);const s=o+r-.001;if(n>s){const k=s/n;i=i.map(G=>G*k),n=s,t=[e[0]+i[0],e[1]+i[1],e[2]+i[2]]}const u=i.map(k=>k/n),l=(o*o-r*r+n*n)/(2*n),v=Math.sqrt(Math.max(0,o*o-l*l)),g=a[0]*u[0]+a[1]*u[1]+a[2]*u[2];let m=[a[0]-u[0]*g,a[1]-u[1]*g,a[2]-u[2]*g];const y=Math.sqrt(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])||1;return m=m.map(k=>k/y),{K:[e[0]+u[0]*l+m[0]*v,e[1]+u[1]*l+m[1]*v,e[2]+u[2]*l+m[2]*v],A:t}}function Yt(e,t,a){const o=e[0]*t[0]+e[1]*t[1]+e[2]*t[2],r=[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]];if(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]<1e-12)return a.slice();const n=1/(1+o),s=r[0]*a[0]+r[1]*a[1]+r[2]*a[2],u=[r[1]*a[2]-r[2]*a[1],r[2]*a[0]-r[0]*a[2],r[0]*a[1]-r[1]*a[0]];return[a[0]*o+u[0]+r[0]*s*n,a[1]*o+u[1]+r[1]*s*n,a[2]*o+u[2]+r[2]*s*n]}const Le=e=>{const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function Go(e,t){const a=Math.PI/180,o=(e.bodyYaw==null?.6*(e.yaw||0):e.bodyYaw)*a*.5,r=(Z(e.sway??0,-15,15)*t.stand+3.5*t.weight)*a,i=Math.cos(o),n=Math.sin(o),s=Z(t.kneel/.1),u=(l,v)=>{const g=l*.078*Math.cos(r),m=[t.hipsX+g*i,t.hipsY+l*.078*Math.sin(r),t.hipsZ-g*n],y=t.legs[l].pole,k=[y[0]*i+y[2]*n,y[1],-y[0]*n+y[2]*i],{K:G,A:d}=Xt(m,v,k),w=ht(l),f=pe(l),C=Le([f[0]-w[0],f[1]-w[1],f[2]-w[2]]),x=Le([d[0]-G[0],d[1]-G[1],d[2]-G[2]]);let p=9;for(const M of Ge){const I=Yt(C,x,[l*.069+M[0]-f[0],M[1]-f[1],M[2]-f[2]]);p=Math.min(p,d[1]+I[1])}return{boot:p,knee:G[1]-Io}};for(const l of[-1,1])for(let v=0;v<3;v++){const g=u(l,t.legs[l].ankle);if(Math.abs(g.boot)<5e-4)break;t.legs[l].ankle=[t.legs[l].ankle[0],t.legs[l].ankle[1]-g.boot*s,t.legs[l].ankle[2]]}}const Do=[0,-.075,.084];function Bo(e,t){const a=Z(e.ride),o=e.rideHips||[0,.94,0],r=e.ridePegs||{1:[.2,.35,.05],[-1]:[-.2,.35,.05]},i=Z(e.rideSwing??0),n=Math.PI/180;t.hipsX=n0(t.hipsX,o[0],a),t.hipsY=n0(t.hipsY,o[1],a),t.hipsZ=n0(t.hipsZ,o[2],a);const s=(e.rideRoll??0)*n;for(const u of[-1,1]){const l=r[u],v=[t.hipsX+u*.078*Math.cos(s),t.hipsY+u*.078*Math.sin(s),t.hipsZ],g=[u*.22,.02,1];let m=[l[0]+u*.004,l[1]+.112,l[2]-.045];for(let k=0;k<3;k++){const{K:G,A:d}=Xt(v,m,g),w=ht(u),f=pe(u),C=Yt(Le([f[0]-w[0],f[1]-w[1],f[2]-w[2]]),Le([d[0]-G[0],d[1]-G[1],d[2]-G[2]]),Do);m=[l[0]-C[0],l[1]-C[1],l[2]-C[2]]}if(u<0&&i>0){const k=Math.sin(Math.PI*i);m=[m[0]-.05*k,m[1]+.5*k,m[2]-.22*k]}const y=t.legs[u];y.ankle=[n0(y.ankle[0],m[0],a),n0(y.ankle[1],m[1],a),n0(y.ankle[2],m[2],a)],y.pole=[n0(y.pole[0],g[0],a),n0(y.pole[1],g[1],a),n0(y.pole[2],g[2],a)]}t.ride=a,t.stand*=1-a}function Lo(e,t,a,o={}){const r=[],i=[],n=(K,b,W)=>(b.position.set(-W[0],-W[1],-W[2]),K.add(b),b),s=K=>{const b=K.userData.mesh;return r.push(b),i.push(b.geometry),K},u=Co(e);i.push(u.tex);const l=t.toon({base:"#2a2733",shade:"#17151c",deep:"#0c0b10",deepT:-.35,deepAmt:.6,rampT:.16,soft:.012,detail:u.tex,detailRect:u.rect,ink:"#4a4552",rim:1.35,cloth:!0,sheen:.55,fold:.3,wetSpec:.6}),v=t.toon({base:"#24212a",shade:"#0e0d12",rampT:.05,rim:.9,spec:0,specT:.97,tartan:"#5e0b14",cloth:!0,sheen:.45,fold:0,wetSpec:.6}),g=Po(e);i.push(g.tex);const m=t.toon({base:"#27232d",shade:"#0f0d13",rampT:.1,spec:.18,specT:.95,specCol:"#8f86b0",rim:1.1,detail:g.tex,detailRect:g.rect,ink:"#08070a",patch:"#f3dccd",patchShade:"#cf9f90",rest:!0,wetSpec:0,wetMatte:.8}),y=t.toon({base:"#2b2830",shade:"#0e0d11",deep:"#070609",deepT:-.4,deepAmt:.6,rampT:.1,rim:1.2,spec:.9,specT:.975,specCol:"#b8b4cc",wetSpec:0,wetMatte:.45}),k=t.toon({base:"#1a181e",shade:"#0a090c",rampT:.1,rim:.9,spec:.2,specT:.98}),G=t.toon({base:"#d0141f",shade:"#6a0a13",rampT:0,rim:.6}),d=t.toon({base:"#c1121f",shade:"#6a0a13",rampT:0,spec:.2,specT:.97,rim:.8}),w=t.toon({base:"#eceef6",shade:"#7d8199",deep:"#3b3d4d",deepT:-.4,deepAmt:.7,rampT:.1,spec:1.2,specT:.92,rim:1.2}),f=t.toon({base:"#c1121f",shade:"#6a0a13",rampT:0,rim:.8}),C=t.toon({base:"#1d1a21",shade:"#0b0a0d",rampT:.1,spec:.5,specT:.97,rim:1}),x=t.toon({base:"#efdbcd",shade:"#d6ada1",rampT:.3,soft:.01,spec:0,specT:.994,rim:.55,wetSpec:0,neck:!0,jawY:1.33,jawCol:"#b98676",skin:!0});{const K=[],b=[[0,1.255],[.036,1.255],[.033,1.285],[.0292,1.322],[.0274,1.358],[.027,1.4],[0,1.42]];for(const[T,z]of b)K.push(new e.Vector2(T,z));const W=new e.LatheGeometry(K,48);W.translate(0,0,-.008);const X=t.withOutline(W,x,"#6e4452",{lineW:.9});n(a.neck,X,w0.neck),s(X);const S=new e.TorusGeometry(.0306,.0034,12,64);S.rotateX(Math.PI/2),S.scale(1,1.6,1),S.translate(0,1.316,-.008);const h=t.withOutline(S,C,"#020203",{lineW:.7});n(a.neck,h,w0.neck),s(h);const A=new e.TorusGeometry(.0052,.0011,8,24);A.translate(0,1.3095,.0248);const D=t.withOutline(A,w,"#2a2c38",{lineW:.5});n(a.neck,D,w0.neck)}{const K=Re(e,j0,[-.26,.8,-.2],[.26,1.38,.16],o.bodyRes??.0028),b=t.withOutline(K,l,"#040306",{lineW:1.05});n(a.chest,b,w0.chest),s(b)}const p=[];for(const K of[1]){const b=new e.Group;n(a.chest,b,w0.chest),p.push({s:K,grp:b,mesh:null,key:""})}{const K=new e.Shape;K.moveTo(0,-.017),K.bezierCurveTo(-.006,-.011,-.019,-.003,-.018,.007),K.bezierCurveTo(-.017,.016,-.006,.019,0,.01),K.bezierCurveTo(.006,.019,.017,.016,.018,.007),K.bezierCurveTo(.019,-.003,.006,-.011,0,-.017);const b=new e.ExtrudeGeometry(K,{depth:.002,bevelEnabled:!0,bevelThickness:.0012,bevelSize:.0012,bevelSegments:2,curveSegments:16}),W=new e.Group,X=t.withOutline(b,f,"#2a0306",{lineW:.7});W.add(X);for(const S of[.8,-.8]){const h=new e.BoxGeometry(.03,.0032,.0016);h.rotateZ(S),h.translate(0,5e-4,.0038),W.add(t.withOutline(h,C,"#020203",{lineW:.4}))}W.position.set(.075,1.2-w0.chest[1],.099),W.rotation.set(-.35,.38,-.12),a.chest.add(W),r.push(X.userData.mesh),i.push(b)}let M=null,I=null,P=null;{const W=[],X=[],S=[];for(let U=0;U<=22;U++){const B=U/22,_=n0(.9,.615,B),Q=n0(.148,.232,Math.pow(B,.85)),q=n0(.104,.19,Math.pow(B,.85)),j=n0(.004,.017,B);for(let E=0;E<=144;E++){const a0=E/144*Math.PI*2,l0=E%6/6,c0=1+((l0<.66?l0/.66:1-(l0-.66)/.34)-.5)*j*4.2;W.push(Math.sin(a0)*Q*c0,_,Math.cos(a0)*q*c0-.004),S.push(B,a0)}}for(let U=0;U<22;U++)for(let B=0;B<144;B++){const _=U*145+B,Q=_+1,q=_+144+1,j=q+1;X.push(_,q,Q,Q,q,j)}const h=new e.BufferGeometry;h.setAttribute("position",new e.Float32BufferAttribute(W,3)),h.setIndex(X),h.computeVertexNormals(),M=h,I=Float32Array.from(W),P=Float32Array.from(S),v.side=e.DoubleSide;const A=t.withOutline(h,v,"#020203",{lineW:1});n(a.hips,A,w0.hips),s(A);const D=[];for(let U=0;U<=12;U++){const B=U/12,_=n0(-.62,-1.95,B),Q=.845-Math.sin(B*Math.PI)*.1,q=(.9-Q)/.285,j=n0(.148,.232,Math.pow(q,.85))*1.1,E=n0(.104,.19,Math.pow(q,.85))*1.12;D.push([Math.sin(_)*j,Q,Math.cos(_)*E])}const T=I0(e,D,U=>.0017+.0013*Math.abs(Math.sin(U*140)),{segs:160,radial:8,capStart:!0,capEnd:!0}),z=t.withOutline(T,w,"#23252f",{lineW:.45});n(a.hips,z,w0.hips),i.push(T)}const F=a.hips.parent,L={};for(const K of[-1,1]){const b=K*.078,W=[[b,.86,0],[b*1.02,.7,.005],[b*.92,.47,.012],[b*.9,.3,-.004],[b*.86,.12,-.01],[b*.85,.075,-.004]],S=I0(e,W,U=>{const B=[[0,.066],[.22,.06],[.44,.043],[.58,.048],[.8,.034],[1,.03]];for(let _=1;_<B.length;_++)if(U<=B[_][0]){const Q=(U-B[_-1][0])/(B[_][0]-B[_-1][0]);return n0(B[_-1][1],B[_][1],Q*Q*(3-2*Q))}return .03},{segs:72,radial:28,capEnd:!0,capStart:!0}),h=Float32Array.from(S.attributes.position.array),A=Float32Array.from(S.attributes.normal.array);S.setAttribute("aRest",new e.BufferAttribute(Float32Array.from(h),3)),S.setAttribute("aRestN",new e.BufferAttribute(Float32Array.from(A),3));const D=new Float32Array(h.length/3);for(let U=0;U<D.length;U++)D[U]=V0(.505,.435,h[U*3+1]);const T=t.withOutline(S,m,"#020203",{lineW:1});F.add(T),s(T),T.userData.mesh.frustumCulled=!1,T.userData.mesh.userData.hullMesh&&(T.userData.mesh.userData.hullMesh.frustumCulled=!1);const z=new e.Group;z.name="foot"+K,F.add(z),L[K]={s:K,geo:S,P0:h,N0:A,W:D,foot:z,key:""}}const O=K=>(b,W,X)=>{const S=b-K*.069,h=X-.022;let A=E0(S,W,h,0,.026,.004,.05,.026,.13,.014);const D=S0(N0(S,W,h,0,.07,.045,.046,.04,.085),E0(S,W,h,0,.1,-.035,.043,.06,.052,.03),.03),T=E0(S,W,h,0,.16,-.018,.043,.075,.046,.034);return A=S0(A,B0(S0(D,T,.03),-(W-.045),.01),.008),A=B0(A,-st(S,W,h,0,.2,-.02,0,.3,-.02,.033),.006),A};for(const K of[-1,1]){const b=pe(K),W=new e.Group;W.position.set(-b[0],-b[1],-b[2]),L[K].foot.add(W);const X=Re(e,(U,B,_)=>B0(O(K)(U,B,_),-(B-.052),.004),[K*.069-.07,.03,-.12],[K*.069+.07,.25,.18],.0028),S=t.withOutline(X,y,"#020203",{lineW:1});W.add(S),s(S);const h=Re(e,(U,B,_)=>B0(O(K)(U,B,_),B-.052,.004),[K*.069-.07,-.01,-.13],[K*.069+.07,.07,.18],.0028),A=t.withOutline(h,k,"#020203",{lineW:1});W.add(A),s(A);const D=[];for(let U=0;U<7;U++){const B=.085+U*.019,_=.058-Math.max(0,B-.12)*.25-.012*(U>1?1:0);D.push([K*.069+(U%2?.02:-.02),B,_],[K*.069+(U%2?-.02:.02),B+.0095,_])}const T=I0(e,D.map(U=>lt(O(K),U,.0022)),()=>.0024,{raw:!0,radial:6}),z=t.withOutline(T,G,"#2a0306",{lineW:.5});W.add(z),i.push(T)}const J=new e.Quaternion,s0=new e.Quaternion,$=new e.Vector3,r0=new e.Vector3,t0=new e.Quaternion;function V(K,b,W,X,S){let h=[b[0]-K[0],b[1]-K[1],b[2]-K[2]],A=Math.sqrt(h[0]*h[0]+h[1]*h[1]+h[2]*h[2]);const D=X+S-.001;if(A>D){const q=D/A;h=h.map(j=>j*q),A=D,b=[K[0]+h[0],K[1]+h[1],K[2]+h[2]]}const T=h.map(q=>q/A),z=(X*X-S*S+A*A)/(2*A),U=Math.sqrt(Math.max(0,X*X-z*z)),B=W[0]*T[0]+W[1]*T[1]+W[2]*T[2];let _=[W[0]-T[0]*B,W[1]-T[1]*B,W[2]-T[2]*B];const Q=Math.sqrt(_[0]*_[0]+_[1]*_[1]+_[2]*_[2])||1;return _=_.map(q=>q/Q),{K:[K[0]+T[0]*z+_[0]*U,K[1]+T[1]*z+_[1]*U,K[2]+T[2]*z+_[2]*U],A:b}}const R={[-1]:0,1:0};function H(K,b){a.hips.getWorldQuaternion(t0);for(const W of[-1,1]){const X=L[W],S=new e.Vector3(W*.078,0,0).applyQuaternion(a.hips.quaternion).add(a.hips.position),h=[S.x,S.y,S.z],A=b.legs[W],D=a.hips.rotation.y,T=[A.pole[0]*Math.cos(D)+A.pole[2]*Math.sin(D),A.pole[1],-A.pole[0]*Math.sin(D)+A.pole[2]*Math.cos(D)],{K:z,A:U}=V(h,A.ankle,T,me.thigh,me.shin),B=Ao(W),_=ht(W),Q=pe(W);J.setFromUnitVectors($.set(_[0]-B[0],_[1]-B[1],_[2]-B[2]).normalize(),r0.set(z[0]-h[0],z[1]-h[1],z[2]-h[2]).normalize()),s0.setFromUnitVectors($.set(Q[0]-_[0],Q[1]-_[1],Q[2]-_[2]).normalize(),r0.set(U[0]-z[0],U[1]-z[1],U[2]-z[2]).normalize()),R[W]=Math.atan2(z[2]-h[2],h[1]-z[1]);{const q=X.geo.attributes.position.array,j=X.geo.attributes.normal.array,{P0:E,N0:a0,W:l0}=X;for(let e0=0;e0<l0.length;e0++){const c0=l0[e0],d0=e0*3;$.set(E[d0]-B[0],E[d0+1]-B[1],E[d0+2]-B[2]).applyQuaternion(J),r0.set(E[d0]-_[0],E[d0+1]-_[1],E[d0+2]-_[2]).applyQuaternion(s0),q[d0]=(1-c0)*($.x+h[0])+c0*(r0.x+z[0]),q[d0+1]=(1-c0)*($.y+h[1])+c0*(r0.y+z[1]),q[d0+2]=(1-c0)*($.z+h[2])+c0*(r0.z+z[2]),$.set(a0[d0],a0[d0+1],a0[d0+2]).applyQuaternion(J).multiplyScalar(1-c0),r0.set(a0[d0],a0[d0+1],a0[d0+2]).applyQuaternion(s0).multiplyScalar(c0),$.add(r0).normalize(),j[d0]=$.x,j[d0+1]=$.y,j[d0+2]=$.z}X.geo.attributes.position.needsUpdate=!0,X.geo.attributes.normal.needsUpdate=!0,X.geo.computeBoundingSphere()}X.foot.position.set(U[0],U[1],U[2]),X.foot.quaternion.copy(s0)}}let N="",Y=null,o0=!1;function i0(K={}){const W=Math.round(Math.max(0,R[-1])/.004)*.004,X=Math.round(Math.max(0,R[1])/.004)*.004,S=Math.round(Z(K.ride??0)*20)/20,h=Math.round((K.rideSeat??.785)/.004)*.004,A=K.rideSeatW??.1,D=W+","+X+","+S+","+h;if(D===N)return;N=D;const T=P.length/2;if(!Y){Y=new Float32Array(T*2);for(let B=0;B<T;B++){const _=P[B*2],Q=P[B*2+1],q=Math.sin(Q),j=V0(-.25,.65,Math.cos(Q)),E=V0(0,.3,_)*.92*j;Y[B*2]=V0(-.8,.8,-q)*E,Y[B*2+1]=V0(-.8,.8,q)*E}}if(S>0){o0=!0,u0(W,X,S,h,A);return}const z=M.attributes.position.array,U=.86;o0&&(o0=!1,z.set(I));for(let B=0;B<T;B++){const _=Y[B*2],Q=Y[B*2+1];if(_===0&&Q===0)continue;const q=W*_+X*Q,j=B*3,E=I[j],a0=I[j+1]-U,l0=I[j+2],e0=Math.cos(q),c0=Math.sin(q);if(z[j]=E,z[j+1]=a0*e0-l0*c0+U,z[j+2]=a0*c0+l0*e0,q>.2){const d0=V0(.2,1.4,q)*.08*P[B*2];z[j]*=1+d0}}M.attributes.position.needsUpdate=!0,Ct(M),M.computeBoundingSphere()}function u0(K,b,W,X,S){const h=P.length/2,A=M.attributes.position.array,D=.86;for(let T=0;T<h;T++){const z=Y?Y[T*2]:0,U=Y?Y[T*2+1]:0,B=T*3;let _=I[B],Q=I[B+1],q=I[B+2];const j=K*z+b*U;if(j!==0){const l0=Math.cos(j),e0=Math.sin(j),c0=Q-D,d0=c0*l0-q*e0+D,x0=c0*e0+q*l0;Q=d0,q=x0,j>.2&&(_*=1+V0(.2,1.4,j)*.08*P[T*2])}const E=V0(S+.03,S-.01,Math.abs(_))*V0(.06,-.02,q)*W,a0=X+.006-Q;E>0&&a0>0&&(Q+=a0*E,q-=a0*.75*E*V0(.02,-.06,q),_*=1+a0*.9*E),A[B]=_,A[B+1]=Q,A[B+2]=q}M.attributes.position.needsUpdate=!0,Ct(M),M.computeBoundingSphere()}function f0(K,b,W){W&&(H(K,W),i0(K));const X=K.hairSwing||[0,0];for(const S of p){const h=S.s*.03,A=1.262,D=.085,T=+(X[0]*.012).toFixed(5),z=+(Math.abs(X[1])*.006).toFixed(5),U=T+","+z;if(U===S.key&&S.mesh)continue;S.key=U,S.mesh&&(S.grp.remove(S.mesh),S.mesh.userData.mesh.geometry.dispose());const B=S.s<0?.13:.115,_=[[h,A,D-.01],[h+S.s*.004,A-.02,D+.012],[h+S.s*.006+T*.4,A-B*.5,D+.018+z],[h+S.s*.004+T,A-B,D+.02+z]],Q=ut(_,24).map(E=>lt(j0,E,.004)),q=I0(e,Q,E=>E>.88?.0036:.0024,{raw:!0,radial:8,capEnd:!0}),j=t.withOutline(q,d,"#2a0306",{lineW:.55});S.grp.add(j),S.mesh=j}}return{casters:r,setPose:f0,legs:L,neckMat:x,cordMeshes:()=>p.map(K=>K.mesh&&K.mesh.userData.mesh).filter(Boolean),dispose(){for(const K of i)K.dispose();for(const K of p)K.mesh&&K.mesh.userData.mesh.geometry.dispose()}}}const de=[0,.024,-.008],fe=[.0705,.087,.086],be=Math.PI/180;function h0(e,t,a=0){const o=e*be,r=t*be,i=Math.cos(r)*Math.sin(o),n=Math.sin(r),s=Math.cos(r)*Math.cos(o),u=1/Math.sqrt((i/fe[0])**2+(n/fe[1])**2+(s/fe[2])**2);return[de[0]+i*(u+a),de[1]+n*(u+a),de[2]+s*(u+a)]}function To(){const e=_t(99),t=n=>(e()-.5)*2*n,a=[],o=n=>a.push({layer:0,hang:.6,bulge:.15,th:.0055,tipPow:1.6,col:0,tip:1,...n});for(let n=0;n<15;n++){const s=-150+n*21.428571428571427+t(6),u=Math.cos(s*be);o({pts:[h0(s+180,78,-.004),h0(s*.85,86-4*Math.abs(u),.008+t(.002)),h0(s,62,.013+t(.002)),h0(s*1.02,40,.0145),h0(s*1.05,22+t(4),.0135)],w:.04+t(.005),th:.0078,layer:.25,hang:.25,bulge:.12,tipPow:1.4,tip:0})}[[40,-36,-34,.03,0,.012],[32,-26,-27,.032,1,.013],[24,-15,-19,.03,0,.0135],[48,-46,-40,.028,0,.011],[16,-5,-8,.028,0,.0135],[36,-30,-22,.022,0,.0145],[28,-9,-26,.014,0,.0125]].forEach(([n,s,u,l,v,g],m)=>{o({pts:[h0(n,66,0),h0(n*.8,50,g-.001),h0(n0(n,s,.35),32,g+.002),h0(n0(n,s,.65),12,g+.002),h0(n0(n,s,.88),(12+u)/2,g),h0(s,u,g-.002)],w:l,th:.006,layer:m===5?.3:0,hang:.35,bulge:.22,tipPow:1.5,col:v})});for(const[n,s,u,l,v]of[[4,-44,-6,.03,0],[-10,-54,-14,.03,0],[-24,-60,-24,.028,0],[-38,-64,-32,.026,1],[10,-24,4,.03,0]])o({pts:[h0(n,70,0),h0(n-4,52,.0125),h0(n0(n,s,.45),30,.0145),h0(n0(n,s,.8),12,.014),h0(s,u,.0115)],w:l,th:.0058,layer:.12,hang:.4,bulge:.2,tipPow:1.5,col:v});for(const[n,s,u,l,v]of[[46,42,-2,.026,0],[54,58,-10,.024,1],[40,30,4,.026,0],[60,66,-22,.022,0],[22,16,2,.03,0],[30,36,-1,.024,0],[14,4,0,.026,0]])o({pts:[h0(n*.9,64,0),h0(n,46,.012),h0(n0(n,s,.5),26,.0135),h0(s,(26+u)/2,.012),h0(s+2,u,.0095)],w:l,th:.0055,layer:.05,hang:.35,bulge:.2,tipPow:1.5,col:v});for(const n of[-1,1]){for(let s=0;s<3;s++){const u=n*(66+s*11),l=n*(.073+s*.004),v=(n<0?-.012:0)-s*.01+t(.006);o({pts:[h0(u*.82,58,0),h0(u,34,.013),h0(u+n*2,8,.0145),[l,-.032,.02-s*.012],[l+n*.001,-.066+v,.016-s*.012],[l+n*(.006+s*.002),-.09+v,.015-s*.012]],w:.03-s*.002,th:.006,layer:s*.2,hang:.75,bulge:.2,tipPow:1.5,col:s===1&&n>0?1:0})}o({pts:[h0(n*58,40,.004),h0(n*66,16,.014),[n*.066,-.02,.036],[n*.064,-.07,.04],[n*.068,-.12,.036],[n*.064,-.17,.038],[n*.058,-.205,.044]],w:.016,th:.0048,layer:0,hang:1,bulge:.1,tipPow:1.4,col:n>0?1:0})}for(let n=0;n<2;n++){const s=n===0?18:16;for(let u=0;u<s;u++){const l=86+(u+(n?.5:0))*(188/(s-1))+t(3);if(l>274)continue;const v=Math.sin(l*be),g=Math.cos(l*be),m=n===1,y=m?-.132+t(.012):-.07+t(.016),k=m?.083:.092,G=m?.01:.012+t(.004),d=Math.abs(v);o({pts:[h0(l,76,-.004),h0(l,52,m?.004:.014),h0(l,18,m?.008:.018),h0(l,-12,m?.01:.019),[v*(k+d*.004),n0(-.03,y,.45),g*(k-.004)-.012],[v*(k+.004+d*.004),y+.014,g*k-.012],[v*(k+G+d*.004),y-.006,g*(k+G*.6)-.012]],w:(m?.044:.048)+t(.005),th:.0075,layer:m?.35:.1,hang:.8,bulge:.14,tipPow:m?2.2:1.7,col:m?1:0})}}const i=[[[h0(-72,50,.004),h0(-80,30,.022),[-.102,-.02,0],[-.116,-.055,-.004]],.007,0],[[h0(76,46,.004),h0(84,26,.022),[.104,-.03,-.006],[.118,-.06,-.01]],.007,1],[[h0(150,70,.004),h0(160,50,.022),[.05,.02,-.108],[.066,-.02,-.116]],.008,0],[[h0(-130,60,.004),h0(-135,30,.023),[-.082,-.04,-.072],[-.104,-.078,-.078]],.008,0],[[h0(-30,76,.004),h0(-40,70,.022),[-.05,.1,.032],[-.072,.086,.052]],.006,0],[[h0(110,40,.004),h0(115,10,.024),[.1,-.05,-.05],[.118,-.09,-.05]],.007,0]];for(const[n,s,u]of i)o({pts:n,w:s,th:.0035,layer:0,hang:.9,bulge:.2,tipPow:1.3,col:u});return o({pts:[h0(-8,80,-.002),[-.004,.123,.006],[-.008,.143,.022],[-.016,.147,.04],[-.028,.138,.05]],w:.0075,th:.0035,layer:0,hang:.3,bulge:.3,tip:0}),a.forEach((n,s)=>{n.id=s,n.rnd=X0(s,17)}),a}function zo(e,t){const a=[],o=i=>e[Math.max(0,Math.min(e.length-1,i))],r=e.length-1;for(let i=0;i<=t;i++){const n=i/t*r,s=Math.min(r-1,Math.floor(n)),u=n-s,l=o(s-1),v=o(s),g=o(s+1),m=o(s+2),y=u*u,k=y*u;a.push([0,1,2].map(G=>.5*(2*v[G]+(-l[G]+g[G])*u+(2*l[G]-5*v[G]+4*g[G]-m[G])*y+(-l[G]+3*v[G]-3*g[G]+m[G])*k)))}return a}const Ce=(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],De=(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],ie=(e,t)=>[e[0]*t,e[1]*t,e[2]*t],Je=(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],At=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],he=e=>{const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]};function _o(e,t){const a=R0(e[0],e[1],e[2]);if(a>=t)return e;const o=5e-4,r=he([R0(e[0]+o,e[1],e[2])-R0(e[0]-o,e[1],e[2]),R0(e[0],e[1]+o,e[2])-R0(e[0],e[1]-o,e[2]),R0(e[0],e[1],e[2]+o)-R0(e[0],e[1],e[2]-o)]);return De(e,ie(r,t-a))}function Wt(e){const t=Z(e[1],-.25,.03);return he([e[0],e[1]-t+1e-4,e[2]- -.01])}function No(e,t,a={}){const o=new e.Group;o.name="hair";const r=To(),i=36,n=12,s=Array.from({length:n},(S,h)=>Math.cos(h/n*Math.PI*2)),u=Array.from({length:n},(S,h)=>Math.sin(h/n*Math.PI*2)),l=t.hair({});l.stencilWrite=!0,l.stencilRef=1,l.stencilFunc=e.AlwaysStencilFunc,l.stencilZPass=e.ReplaceStencilOp;const v="#050407",g=(i+1)*n,m=r.length*g,y=new Float32Array(m*3),k=new Float32Array(m*3),G=new Float32Array(m*3),d=new Float32Array(m*3),w=new Float32Array(m*4),f=new Float32Array(m*2),C=[];r.forEach((S,h)=>{const A=h*g;for(let D=0;D<i;D++)for(let T=0;T<n;T++){const z=A+D*n+T,U=A+D*n+(T+1)%n,B=A+(D+1)*n+T,_=A+(D+1)*n+(T+1)%n;C.push(z,B,U,U,B,_)}});const x=new e.BufferGeometry;x.setAttribute("position",new e.BufferAttribute(y,3)),x.setAttribute("normal",new e.BufferAttribute(k,3)),x.setAttribute("aOutN",new e.BufferAttribute(G,3)),x.setAttribute("aTan",new e.BufferAttribute(d,3)),x.setAttribute("aHair",new e.BufferAttribute(w,4)),x.setAttribute("aCol",new e.BufferAttribute(f,2)),r.forEach(S=>{for(let h=S.id*g;h<(S.id+1)*g;h++)f[h*2]=S.col,f[h*2+1]=S.tip}),x.setIndex(C);const p=t.withOutline(x,l,v,{lineW:.9}),M=p.userData.mesh;M.onBeforeRender=()=>{o0=!1},M.renderOrder=5,M.userData.hullMesh&&(M.userData.hullMesh.renderOrder=5),o.add(p);const P=ze((S,h,A)=>{let D=N0(S,h,A,de[0],de[1]+.002,de[2]-.002,fe[0]+.0085,fe[1]+.009,fe[2]+.0095);D=S0(D,N0(S,h,A,0,-.035,-.04,.066,.062,.056),.02);let T=N0(S,h,A,0,-.02,-.022,.084,.1,.082);T=B0(T,-(h+.108),.01),T=B0(T,A-0+(h+.02)*.1,.02),D=S0(D,T,.015);const z=Math.abs((S*70+100.5)%1-.5)*2,U=Math.max(-(A-.012),h-(.036+.014*z));D=B0(D,-U,.012);const B=Math.max(-(A+.035),h+.02);return D=B0(D,-B,.012),D},[-.1,-.12,-.12],[.1,.13,.1],.002,{smooth:1,project:2}),F=new e.BufferGeometry;F.setAttribute("position",new e.BufferAttribute(P.positions,3)),F.setAttribute("normal",new e.BufferAttribute(P.normals,3)),F.setAttribute("aOutN",new e.BufferAttribute(P.normals,3));{const S=P.positions.length/3,h=new Float32Array(S*3),A=new Float32Array(S*4),D=[0,.115,-.03];for(let z=0;z<S;z++){const U=[P.positions[z*3],P.positions[z*3+1],P.positions[z*3+2]],B=[P.normals[z*3],P.normals[z*3+1],P.normals[z*3+2]];let _=Ce(U,D);_=he(Ce(_,ie(B,Je(_,B)))),h.set(_,z*3),A.set([.25,Math.sin(U[0]*300+U[2]*200),X0(Math.round(U[0]*400),Math.round(U[2]*400)),.45],z*4)}F.setAttribute("aTan",new e.BufferAttribute(h,3)),F.setAttribute("aHair",new e.BufferAttribute(A,4));const T=new Float32Array(S*2);for(let z=0;z<S;z++)T[z*2]=P.positions[z*3+1]<-.045&&P.positions[z*3+2]<0?1:0;F.setAttribute("aCol",new e.BufferAttribute(T,2))}F.setIndex(new e.BufferAttribute(P.indices,1));const L=t.withOutline(F,l,v,{lineW:.9});L.userData.mesh.renderOrder=5,o.add(L);const O=t.toon({base:"#e9ebf3",shade:"#7d8199",rampT:.1,spec:1.2,specT:.92,rim:1.2}),J=new e.Group;{const A=I0(e,[[0,0,0],[.034,0,0]],.0011,{segs:2,radial:8,raw:!0}),D=I0(e,[[.004,.0045,0],[.034-.002,.0038,0]],.0011,{segs:2,radial:8,raw:!0}),T=new e.TorusGeometry(.0028,.0011,8,16);T.translate(0,.0023,0);const z=new e.BoxGeometry(.0075,.0068,.0032);z.translate(.034+.001,.0022,0);for(const U of[A,D,T,z])J.add(t.withOutline(U,O,"#2a2c38",{lineW:.5}))}const s0=h0(58,36,.016);J.position.set(...s0),J.lookAt(s0[0]*3,s0[1]*3-.05,s0[2]*3),J.rotateZ(1.15),o.add(J);const $=new e.Quaternion,r0=new e.Vector3,t0=new e.Matrix4,V=["position","normal","aOutN","aTan","aHair"];let R="",H=null,N=0,Y=0,o0=!1;function i0(S,h){x.attributes.position.updateRanges.length>8&&(o0=!0);const A=S+h<=r.length?[[S,h]]:[[S,r.length-S],[0,S+h-r.length]];for(const D of V){const T=x.attributes[D];if(o0)T.clearUpdateRanges();else for(const[z,U]of A)T.addUpdateRange(z*g*T.itemSize,U*g*T.itemSize);T.needsUpdate=!0}}function u0(S,h,A){const D=Z(S.wet);A.head.getWorldQuaternion($).invert(),r0.set(0,-1,0).applyQuaternion($);const T=[r0.x,r0.y,r0.z],z=S.hairSwing||[0,0],U=S.wind||[0,0],B=new e.Vector3(z[0]*.035+U[0]*.03,-z[1]*.03-U[1]*.02,0);S.windW&&(B.x+=S.windW[0],B.y+=S.windW[1],B.z+=S.windW[2]),B.applyQuaternion($);const _=T.map(e0=>+e0.toFixed(2)),Q=B.toArray().map(e0=>+e0.toFixed(3)),q=+D.toFixed(2);let j=null;if((S.ride??0)>.5){t0.copy(A.chest.matrixWorld).invert().multiply(A.head.matrixWorld);const e0=t0.elements;j=[e0[0],e0[1],e0[2],e0[4],e0[5],e0[6],e0[8],e0[9],e0[10],e0[12],e0[13]+w0.chest[1],e0[14]].map((c0,d0)=>+c0.toFixed(d0<9?2:3))}const E=JSON.stringify([_,Q,q,j]);if(E!==R){if(R=E,H={gDelta:[_[0],_[1]+1,_[2]],sR:Q,wR:q,hb:null},j){const e0=new e.Matrix4().set(j[0],j[3],j[6],j[9],j[1],j[4],j[7],j[10],j[2],j[5],j[8],j[11],0,0,0,1);H.hb={mHR:e0,mRH:e0.clone().invert()}}N=r.length}if(!N)return;const a0=S.hairBudget>0?Math.min(N,Math.ceil(S.hairBudget)):N;if(a0>=r.length){for(const e0 of r)b(e0,H.gDelta,H.sR,H.wR,H.hb);for(const e0 of V)x.attributes[e0].clearUpdateRanges(),x.attributes[e0].needsUpdate=!0;N=0,Y=0,x.computeBoundingSphere();return}const l0=Y;for(let e0=0;e0<a0;e0++)b(r[Y],H.gDelta,H.sR,H.wR,H.hb),Y=(Y+1)%r.length;N-=a0,i0(l0,a0),N||x.computeBoundingSphere()}const f0=new e.Vector3;function K(S,h){f0.set(S[0],S[1],S[2]).applyMatrix4(h.mHR);const A=[f0.x,f0.y,f0.z],D=lt(j0,A,.008);return D===A?S:(f0.set(D[0],D[1],D[2]).applyMatrix4(h.mRH),[f0.x,f0.y,f0.z])}function b(S,h,A,D,T=null){const z=S.pts.length,U=S.pts.map((j,E)=>{const a0=E/(z-1),l0=S.hang*a0*a0,e0=.12*l0;let c0=De(j,ie(h,e0*.9));return c0=De(c0,ie(A,l0*(1+S.rnd*.4))),D>0&&(c0=De(c0,[0,-D*.012*l0,0])),E===0?j:c0});let B=zo(U,i);B=B.map((j,E)=>E<2?j:_o(j,.0035+S.layer*-.001)),T&&(B=B.map((j,E)=>E<6?j:K(j,T))),S.tipNow=B[i];const _=S.id*g,Q=1-D*.38;let q=null;for(let j=0;j<=i;j++){const E=j/i,a0=B[j],l0=he(Ce(B[Math.min(i,j+1)],B[Math.max(0,j-1)]));let e0=Wt(a0);e0=he(Ce(e0,ie(l0,Je(e0,l0))));let c0=he(At(l0,e0));q&&Je(c0,q)<0&&(c0=ie(c0,-1)),q=c0,e0=At(c0,l0);const d0=Math.pow(Math.max(0,1-Math.pow(E,S.tipPow)),.7)*(1+S.bulge*Math.sin(Math.PI*Math.min(1,E*1.4))),x0=S.w*d0*Q*(1-D*.25*E),P0=S.th*Math.pow(Math.max(0,1-Math.pow(E,2.2)),.6)*(1-D*.25),A0=Wt(a0),z0=1/Math.max(x0*.5,1e-4),_0=1/Math.max(P0*.5,1e-4);for(let G0=0;G0<n;G0++){const p0=s[G0],v0=u[G0],m0=v0>0?v0:v0*.45,g0=_+j*n+G0,D0=p0*x0*.5,T0=m0*P0*.5;y[g0*3]=a0[0]+c0[0]*D0+e0[0]*T0,y[g0*3+1]=a0[1]+c0[1]*D0+e0[1]*T0,y[g0*3+2]=a0[2]+c0[2]*D0+e0[2]*T0;const K0=p0*z0,ae=(v0>0?v0:v0/.45)*_0;let Z0=c0[0]*K0+e0[0]*ae,$0=c0[1]*K0+e0[1]*ae,ge=c0[2]*K0+e0[2]*ae,Ne=Math.sqrt(Z0*Z0+$0*$0+ge*ge)||1;Z0/=Ne,$0/=Ne,ge/=Ne,G[g0*3]=Z0,G[g0*3+1]=$0,G[g0*3+2]=ge;const Oe=.55+(v0>0?.15:-.6);let Fe=A0[0]*Oe+Z0*.45,Ke=A0[1]*Oe+$0*.45,Ve=A0[2]*Oe+ge*.45;const je=Math.sqrt(Fe*Fe+Ke*Ke+Ve*Ve)||1;k[g0*3]=Fe/je,k[g0*3+1]=Ke/je,k[g0*3+2]=Ve/je,d[g0*3]=l0[0],d[g0*3+1]=l0[1],d[g0*3+2]=l0[2],w[g0*4]=E,w[g0*4+1]=p0,w[g0*4+2]=S.rnd,w[g0*4+3]=S.layer+(v0>0?0:.35)}}}const W=r.filter(S=>S.hang>=.75).map(S=>S.id),X=()=>W.map(S=>r[S].tipNow).filter(Boolean);return{group:o,casters:[M,L.userData.mesh],setPose:u0,tips:X,stats:()=>({clumps:r.length,verts:m,capVerts:P.positions.length/3}),dispose(){x.dispose(),F.dispose()}}}const b0={scale:.648,bridgeX:-.1,nutX:.548,topZ:.0225,strapTail:[-.272,-.01,0],strapHorn:[.232,.112,0]},Te=e=>b0.nutX-b0.scale*(1-Math.pow(2,-e/12)),Be=(e,t)=>{const a=Z((b0.nutX-t)/(b0.nutX-b0.bridgeX)),o=n0(.0175,.0265,a);return n0(o,-o,e/5)},It=[[-.27,0],[-.255,.09],[-.2,.158],[-.12,.184],[-.04,.166],[.012,.132],[.062,.136],[.13,.152],[.198,.142],[.232,.112],[.216,.078],[.178,.05],[.16,.034],[.16,-.034],[.172,-.054],[.19,-.086],[.17,-.122],[.11,-.132],[.062,-.117],[.004,-.142],[-.06,-.182],[-.15,-.196],[-.226,-.16],[-.262,-.09]],Oo=[[-.2,.128],[-.12,.158],[-.04,.142],[.012,.112],[.062,.118],[.13,.134],[.19,.124],[.205,.1],[.176,.06],[.158,.038],[.158,-.038],[.168,-.06],[.176,-.086],[.158,-.108],[.108,-.114],[.06,-.098],[.018,-.085],[-.05,-.062],[-.075,-.035],[-.075,.035],[-.12,.07],[-.19,.1]],Fo=[[0,.021],[.03,.026],[.07,.044],[.12,.052],[.17,.05],[.192,.036],[.19,.012],[.16,-.004],[.1,-.012],[.05,-.02],[.02,-.024],[0,-.021]];function He(e,t,a=!0){const o=new e.Shape;if(a){const r=t.map(s=>new e.Vector2(s[0],s[1])),n=new e.SplineCurve([...r,r[0],r[1]]).getSpacedPoints(160).slice(0,-8);o.setFromPoints(n)}else{o.moveTo(t[0][0],t[0][1]);for(const r of t.slice(1))o.lineTo(r[0],r[1])}return o.closePath(),o}function Ko(e,t){const a=t.index?t.toNonIndexed():t,o=a.attributes.position,r=o.count,i=new Map,n=new Float32Array(r*3);a.computeVertexNormals();const s=a.attributes.normal,u=l=>`${Math.round(o.getX(l)*1e5)},${Math.round(o.getY(l)*1e5)},${Math.round(o.getZ(l)*1e5)}`;for(let l=0;l<r;l++){const v=u(l);let g=i.get(v);g||(g=[0,0,0],i.set(v,g)),g[0]+=s.getX(l),g[1]+=s.getY(l),g[2]+=s.getZ(l)}for(let l=0;l<r;l++){const v=i.get(u(l)),g=Math.hypot(v[0],v[1],v[2])||1;n[l*3]=v[0]/g,n[l*3+1]=v[1]/g,n[l*3+2]=v[2]/g}return a.setAttribute("aOutN",new e.BufferAttribute(n,3)),a}function Vo(e,t,a={}){const o=new e.Group;o.name="guitar";const r=new e.Group;o.add(r);const i=[],n=[],s=(V,R,H,N={})=>{const Y=H?Ko(e,V):V,o0=t.withOutline(Y,R,H,{lineW:N.lineW??.9});return H&&(o0.userData.mesh.userData.hullMesh.material=t.outline(H,{w:N.lineW??.9,hullN:!0})),r.add(o0),N.cast!==!1&&i.push(o0.userData.mesh),n.push(Y),o0},u=t.toon({base:"#b5121f",shade:"#5c0710",deep:"#2e0307",deepT:-.3,deepAmt:.6,rampT:.05,spec:1.3,specT:.988,rim:1.1,rimW:.84,wetSpec:.25,beads:!0,beadScale:6.5,litMax:.62,coat:[.018,.34]}),l=t.toon({base:"#1c1a21",shade:"#0b0a0e",rampT:0,spec:1,specT:.985,rim:.8,rimW:.84}),v=t.toon({base:"#3e2324",shade:"#1e1012",rampT:0,rim:.5}),g=t.toon({base:"#4a2c2a",shade:"#241414",rampT:.05,spec:.5,specT:.99}),m=t.toon({base:"#f4f1ec",shade:"#b8b4c8",rampT:0,spec:.4,specT:.99}),y=t.toon({base:"#b9bdcc",shade:"#3e4152",deep:"#1c1d26",deepT:-.2,deepAmt:.8,rampT:.45,spec:1.4,specT:.9,rim:1.4}),k=t.toon({base:"#f6f0e2",shade:"#c9c6d8",rampT:.05,spec:.4,specT:.99}),G=t.toon({base:"#211e27",shade:"#0d0c11",rampT:.1,spec:.7,specT:.975,rim:.8}),d=t.toon({base:"#fbfbff",shade:"#9a9eb8",rampT:-.2,spec:1,specT:.9}),w=t.toon({base:"#24212a",shade:"#0d0c10",rampT:0,spec:0,specT:.99,rim:1.1,side:e.DoubleSide}),f=t.toon({base:"#8d91a3",shade:"#2e3040",rampT:.3,spec:.9,specT:.995,rim:1.2,rimW:.84}),C=t.toon({base:"#c1121f",shade:"#6a0a13",rampT:0}),x=b0.topZ;{const V=new e.ExtrudeGeometry(He(e,It),{depth:.028999999999999998,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:5,curveSegments:64});V.translate(0,0,-.028999999999999998/2),s(V,u,"#1f0206",{lineW:1.1})}{const V=new e.ExtrudeGeometry(He(e,Oo),{depth:.0016,bevelEnabled:!0,bevelThickness:6e-4,bevelSize:.0012,bevelSegments:1});V.translate(0,0,x+6e-4),s(V,l,"#000000",{lineW:.6,cast:!1});const R=new e.Shape;for(let i0=0;i0<10;i0++){const u0=Math.PI/2+i0*Math.PI/5,f0=i0%2?.0075:.018;(i0?R.lineTo:R.moveTo).call(R,Math.cos(u0)*f0,Math.sin(u0)*f0)}R.closePath();const H=new e.ExtrudeGeometry(R,{depth:5e-4,bevelEnabled:!1});H.rotateZ(.3),H.translate(-.205,.055,x+2e-4),s(H,m,"#1a1a22",{lineW:.5,cast:!1});const N=new e.Shape,Y=[[-.024,-.015],[.022,-.017],[.026,-.004],[.019,.001],[.027,.009],[.021,.016],[-.02,.018],[-.025,.006],[-.021,0]];N.moveTo(...Y[0]);for(const i0 of Y.slice(1))N.lineTo(...i0);N.closePath();const o0=new e.ExtrudeGeometry(N,{depth:5e-4,bevelEnabled:!1});o0.rotateZ(-.35),o0.translate(-.17,-.13,x+2e-4),s(o0,m,"#1a1a22",{lineW:.5,cast:!1});for(let i0=0;i0<3;i0++){const u0=new e.BoxGeometry(.036,.0045,6e-4);u0.translate(0,-.008+i0*.008,0),u0.rotateZ(-.35),u0.translate(-.17,-.13,x+9e-4),s(u0,l,null,{cast:!1})}}for(const V of[-.028,.088]){const R=new e.BoxGeometry(.036,.086,.012,1,1,1);R.translate(V,0,x+.008),s(R,G,"#000000",{lineW:.6,cast:!1});for(let H=0;H<6;H++){const N=new e.CylinderGeometry(.0026,.0026,.002,12);N.rotateX(Math.PI/2),N.translate(V,Be(H,V),x+.0145),s(N,y,null,{cast:!1})}}{const V=new e.BoxGeometry(.014,.078,.012);V.translate(b0.bridgeX,0,x+.009),s(V,f,"#1a1b24",{lineW:.6});const R=new e.BoxGeometry(.05,.085,.006);R.translate(b0.bridgeX-.07,0,x+.004),s(R,f,"#1a1b24",{lineW:.6,cast:!1});const H=I0(e,[[b0.bridgeX-.06,-.035,x+.006],[b0.bridgeX-.05,-.06,x+.02],[b0.bridgeX-.01,-.12,x+.025],[b0.bridgeX+.03,-.15,x+.02]],.0022,{segs:20,radial:8,capEnd:!0});s(H,y,null,{cast:!1})}for(const[V,R]of[[-.135,-.118],[-.185,-.082]]){const H=new e.CylinderGeometry(.0115,.0125,.014,24);H.rotateX(Math.PI/2),H.translate(V,R,x+.008),s(H,G,"#0b0a10",{lineW:.6});const N=new e.CylinderGeometry(.004,.004,.0025,16);N.rotateX(Math.PI/2),N.translate(V,R,x+.0155),s(N,y,null,{cast:!1})}{const V=new e.BoxGeometry(.03,.012,.003);V.translate(.045,.125,x+.0025),s(V,y,null,{cast:!1})}{const R=b0.nutX+.004,H=24,N=20,Y=[],o0=[];for(let K=0;K<=H;K++){const b=n0(.12,R,K/H),W=(b-.12)/(R-.12),X=n0(.057,.0425,W),S=n0(.024,.021,W);for(let h=0;h<=N;h++){const A=Math.PI*(h/N);Y.push(b,Math.cos(A)*X/2,x+.004-Math.sin(A)*S)}}for(let K=0;K<H;K++)for(let b=0;b<N;b++){const W=K*(N+1)+b,X=W+1,S=W+N+1,h=S+1;o0.push(W,S,X,X,S,h)}const i0=new e.BufferGeometry;i0.setAttribute("position",new e.Float32BufferAttribute(Y,3)),i0.setIndex(o0),i0.computeVertexNormals(),s(i0,g,"#120808",{lineW:.9});{const b=b0.nutX-.15,W=new e.BoxGeometry(b,1,.0055,12,1,1);W.translate(.15+b/2,0,x+.004+.00275);const X=W.attributes.position;for(let S=0;S<X.count;S++){const h=(X.getX(S)-.12)/(R-.12);X.setY(S,X.getY(S)*n0(.057,.0425,h))}W.computeVertexNormals(),s(W,v,"#1c0e12",{lineW:.6})}for(let K=1;K<=21;K++){const b=Te(K);if(b<.12+.03)break;const W=(b-.12)/(R-.12),X=n0(.057,.0425,W),S=new e.BoxGeometry(.0022,X,.0016);if(S.translate(b,0,x+.0101),s(S,y,null,{cast:!1}),[3,5,7,9,12,15,17].includes(K)){const h=(b+Te(K-1))/2;for(const A of K===12?[-.01,.01]:[0]){const D=new e.CylinderGeometry(.0033,.0033,8e-4,16);D.rotateX(Math.PI/2),D.translate(h,A,x+.0097),s(D,k,null,{cast:!1})}}}const u0=new e.BoxGeometry(.004,.0425,.004);u0.translate(b0.nutX,0,x+.0105),s(u0,k,null,{cast:!1});const f0=new e.ExtrudeGeometry(He(e,Fo),{depth:.008,bevelEnabled:!0,bevelThickness:.003,bevelSize:.003,bevelSegments:3,curveSegments:32});f0.translate(b0.nutX,0,x-.012),s(f0,u,"#1f0206",{lineW:.9});for(let K=0;K<6;K++){const b=b0.nutX+.042+K*.024,W=.043+Math.sin(K/5*2.2)*.006,X=new e.CylinderGeometry(.0035,.0035,.012,12);X.rotateX(Math.PI/2),X.translate(b,W-.012,x+0),s(X,y,null,{cast:!1});const S=new e.CylinderGeometry(.0055,.0055,.012,16);S.translate(b,W+.012,x-.006),s(S,y,"#4a4c60",{lineW:.5})}}for(let V=0;V<6;V++){const R=n0(58e-5,36e-5,V/5),H=[[b0.bridgeX,Be(V,b0.bridgeX),x+.0155],[b0.nutX,Be(V,b0.nutX),x+.0125],[b0.nutX+.042+V*.024,.031+Math.sin(V/5*2.2)*.006,x+.004]],N=I0(e,H,R,{segs:2,radial:6,raw:!0});s(N,d,null,{cast:!1})}for(const V of[b0.strapTail,b0.strapHorn]){const R=new e.CylinderGeometry(.004,.005,.01,12);R.rotateZ(Math.PI/2),R.translate(V[0]+(V===b0.strapTail?-.004:.004),V[1],V[2]),s(R,y,null,{cast:!1})}const p=new e.Matrix4,M=new e.Vector3,I=new e.Vector3,P=new e.Vector3,F=(a.neckSide??"screenRight")==="screenLeft",L=new e.Group;L.name="strap";let O=null,J=null;const s0={hang:-1};function $(V){if(V.arms==="guitar_up")return M.set(F?-1:1,.12,0).normalize(),P.set(0,.28,1).normalize(),P.addScaledVector(M,-P.dot(M)).normalize(),I.crossVectors(P,M),F&&I.negate(),p.makeBasis(M,I,P),p.setPosition(F?.1:-.1,.5,.14),p;const H=V.arms==="guitar"||V.arms==="point"||V.arms==="wipe"?0:1,N=(W,X)=>Math.max(-X,Math.min(X,W||0)),Y=(n0(20,12,H)+N(V.neckLift,30))*Math.PI/180,o0=(n0(14,6,H)+N(V.guitarSwing,20))*Math.PI/180,i0=(n0(12,4,H)+N(V.guitarTilt,15))*Math.PI/180,u0=F?-1:1;M.set(u0*Math.cos(Y)*Math.cos(o0),Math.sin(Y),Math.sin(o0)*Math.cos(Y)).normalize(),P.set(0,Math.sin(i0),1).normalize(),P.addScaledVector(M,-P.dot(M)).normalize(),I.crossVectors(P,M),F&&I.negate(),p.makeBasis(M,I,P);const f0=u0*-.07,K=n0(.935,.9,H)+.05*Math.max(0,Math.min(1,V.sit??0))-N(V.guitarDrop,.05),b=.132+.0012*Math.abs(N(V.guitarTilt,15))+4e-4*Math.max(0,-N(V.neckLift,30));return p.setPosition(f0-w0.chest[0],K-w0.chest[1],b-w0.chest[2]),p}function r0(V,R){o.visible=V.guitar>.5&&V.arms!=="none",$(V).decompose(o.position,o.quaternion,o.scale),L.visible=o.visible&&V.arms!=="guitar_up";const N=(V.arms==="guitar"||V.arms==="point"||V.arms==="wipe"?0:1)+.05*Math.round(20*Math.max(0,Math.min(1,V.sit??0)))/20,Y=(u0,f0)=>Math.round((u0||0)*f0)/f0,o0={arms:V.arms,neckLift:Y(V.neckLift,10),guitarSwing:Y(V.guitarSwing,10),guitarTilt:Y(V.guitarTilt,10),guitarDrop:Y(V.guitarDrop,2e3),sit:Y(Math.max(0,Math.min(1,V.sit??0)),20)},i0=(V.arms==="guitar_up"?"up":N)+"|"+[o0.neckLift,o0.guitarSwing,o0.guitarTilt].join(",")+"|"+o0.guitarDrop;if(s0.hang!==i0){s0.hang=i0;const u0=t0($(o0).clone());O?(O.userData.mesh.geometry.dispose(),J.geometry.dispose(),O.userData.mesh.geometry=u0.strap,O.userData.mesh.userData.hullMesh.geometry=u0.strap,J.geometry=u0.stitch):(O=t.withOutline(u0.strap,w,"#000000",{lineW:.8}),J=new e.Mesh(u0.stitch,C),L.add(O,J),i.push(O.userData.mesh))}}function t0(V){const R=b=>new e.Vector3(...b).applyMatrix4(V),H=R(b0.strapHorn),N=R(b0.strapTail),Y=F?-1:1,o0=(b,W,X)=>new e.Vector3(b-w0.chest[0],W-w0.chest[1],X-w0.chest[2]),i0=[H,o0(Y*.13,1.2,.13),o0(Y*.105,1.3,.06),o0(Y*.1,1.325,-.03),o0(Y*.08,1.26,-.13),o0(-Y*.08,1.05,-.135),o0(-Y*.2,.92,-.08),o0(-Y*.23,.9,.05),N],u0=[],f0=i0.map(b=>[b.x,b.y,b.z]),K=jo(f0,60);for(const b of K){const W=b[0]+w0.chest[0],X=b[1]+w0.chest[1],S=b[2]+w0.chest[2];let h=j0(W,X,S);if(h<.006){const D=[j0(W+.001,X,S)-j0(W-.001,X,S),j0(W,X+.001,S)-j0(W,X-.001,S),j0(W,X,S+.001)-j0(W,X,S-.001)],T=Math.hypot(...D)||1;b[0]+=D[0]/T*(.006-h),b[1]+=D[1]/T*(.006-h),b[2]+=D[2]/T*(.006-h)}u0.push(b)}return{strap:Pt(e,u0,.022,.0022,{raw:!0,radial:12,up:[0,0,1]}),stitch:Pt(e,u0,.0011,.0029,{raw:!0,radial:8,up:[0,0,1]})}}return r0({arms:"guitar",guitar:1}),{group:o,model:r,strap:L,casters:i,setPose:r0,placement:$,lefty:F,outline:It,dispose(){for(const V of n)V.dispose();O&&O.userData.mesh.geometry.dispose()}}}function jo(e,t){const a=[],o=i=>e[Math.max(0,Math.min(e.length-1,i))],r=e.length-1;for(let i=0;i<=t;i++){const n=i/t*r,s=Math.min(r-1,Math.floor(n)),u=n-s,l=o(s-1),v=o(s),g=o(s+1),m=o(s+2),y=u*u,k=y*u;a.push([0,1,2].map(G=>.5*(2*v[G]+(-l[G]+g[G])*u+(2*l[G]-5*v[G]+4*g[G]-m[G])*y+(-l[G]+3*v[G]-3*g[G]+m[G])*k)))}return a}const Uo=(e,t)=>new e.Color().setStyle(t,e.SRGBColorSpace);function dt(e,t){if(t)return{stand:t.toon({base:"#2a2830",shade:"#0c0b10",deep:"#050507",deepT:-.3,deepAmt:.7,rampT:.15,spec:1.1,specT:.96,specCol:"#c9cde0",rim:1.2,wetSpec:1}),chrome:t.toon({base:"#c9ccd8",shade:"#3e4152",deep:"#1c1d26",deepT:-.2,deepAmt:.8,rampT:.45,spec:1.4,specT:.9,rim:1.4}),grille:t.toon({base:"#9ea3b5",shade:"#34374a",rampT:.3,spec:1.2,specT:.93,rim:1.2}),body:t.toon({base:"#1e1c23",shade:"#09080b",rampT:.1,spec:.8,specT:.97,rim:1,wetSpec:1}),cable:t.toon({base:"#1a181e",shade:"#070608",rampT:.1,spec:.5,specT:.96,rim:.9,wetSpec:1}),red:t.toon({base:"#c1121f",shade:"#6a0a13",rampT:0,rim:.8}),line:"#020203"};const a=(o,r,i)=>new e.MeshStandardMaterial({color:Uo(e,o),roughness:r,metalness:i});return{stand:a("#1f1d24",.45,.6),chrome:a("#c9ccd8",.25,1),grille:a("#8d92a3",.5,1),body:a("#18161c",.4,.3),cable:a("#131116",.5,0),red:a("#c1121f",.5,0),line:null}}function M0(e,t,a,o,r,i,n=.8){let s;return t&&a.line?(s=t.withOutline(r,i,a.line,{lineW:n}),s.userData.mesh.castShadow=!0):(s=new e.Mesh(r,i),s.castShadow=!0,s.receiveShadow=!0),o.add(s),s}function Xo(e,t={}){const a=t.kit||null,o=dt(e,a),r=new e.Group;r.name="micStand";const i=t.height??1.36,n=!!t.boom,s=(t.side??1)>=0?1:-1,u=(t.tilt??(n?52:22))*Math.PI/180,l=t.reach??.2,v=L=>{const O=Math.hypot(L[0],L[1],L[2])||1;return[L[0]/O,L[1]/O,L[2]/O]},g=(L,O,J)=>[L[0]+O[0]*J,L[1]+O[1]*J,L[2]+O[2]*J],m=n?v([-s*(t.skew??.34),Math.sin(u),Math.cos(u)]):[0,Math.sin(u),Math.cos(u)],y=[0,i,l],k=g(y,m,-.024),G=g(y,m,-.2),d=g(y,m,-.13),w=n?[s*(t.out??.46),0,t.baseZ??.36]:[0,0,0],f=.26;{const L=n?s>0?Math.PI/2:-Math.PI/2:Math.PI/6;for(let J=0;J<3;J++){const s0=J/3*Math.PI*2+L,$=[w[0]+Math.sin(s0)*.3,.012,w[2]+Math.cos(s0)*.3],r0=[w[0]+Math.sin(s0)*.15,f*.45,w[2]+Math.cos(s0)*.15];M0(e,a,o,r,I0(e,[[w[0],f,w[2]],r0,$],.0075,{segs:16,radial:10,capEnd:!0}),o.stand,.7);const t0=new e.SphereGeometry(.011,12,8);t0.scale(1,.6,1),t0.translate($[0],.008,$[2]),M0(e,a,o,r,t0,o.body,.5)}const O=new e.CylinderGeometry(.02,.024,.07,16);O.translate(w[0],f,w[2]),M0(e,a,o,r,O,o.stand,.8)}let C;if(n){const L=[w[0],t.pivotH??i-.2,w[2]],O=Math.min(f+.62,L[1]-.18),J=new e.CylinderGeometry(.0125,.0125,O-f,16);J.translate(w[0],(f+O)/2,w[2]),M0(e,a,o,r,J,o.stand,.8);const s0=new e.CylinderGeometry(.019,.019,.045,16);s0.translate(w[0],O,w[2]),M0(e,a,o,r,s0,o.stand,.7);const $=new e.CylinderGeometry(.0085,.0085,L[1]-O,12);$.translate(w[0],(L[1]+O)/2,w[2]),M0(e,a,o,r,$,o.chrome,.7);const r0=new e.CylinderGeometry(.02,.02,.04,16);r0.rotateX(Math.PI/2),r0.translate(L[0],L[1],L[2]),M0(e,a,o,r,r0,o.stand,.7);const t0=new e.BoxGeometry(.008,.045,.012);t0.translate(L[0]+s*.024,L[1],L[2]),M0(e,a,o,r,t0,o.chrome,.5);const V=g(d,m,-.012),R=v([V[0]-L[0],V[1]-L[1],V[2]-L[2]]),H=g(L,R,-.16);M0(e,a,o,r,I0(e,[H,L,V],.0082,{segs:16,radial:10,capEnd:!0,capStart:!0}),o.stand,.7);const N=new e.CylinderGeometry(.02,.02,.06,14);N.applyMatrix4(new e.Matrix4().makeRotationFromQuaternion(new e.Quaternion().setFromUnitVectors(new e.Vector3(0,1,0),new e.Vector3(R[0],R[1],R[2]))));const Y=g(H,R,.02);N.translate(Y[0],Y[1],Y[2]),M0(e,a,o,r,N,o.body,.6);const o0=g(L,R,.05),i0=g(V,R,-.08);C=[G,[G[0]+s*.02,G[1]-.04,G[2]-.02],[i0[0],i0[1]-.02,i0[2]],[o0[0],o0[1]-.03,o0[2]],[w[0]+s*.02,L[1]-.1,w[2]-.02],[w[0]+s*.025,f+.2,w[2]-.025],[w[0]+s*.05,f,w[2]-.03],[w[0]+s*.12,.012,w[2]-.08],[w[0]+s*.2,.01,w[2]+.15],[w[0]+s*.1,.01,w[2]+.5],[w[0]+s*.4,.01,w[2]+1],[w[0]+s*.9,.01,w[2]+1.4]]}else{const L=[0,d[1]-.06,0],O=new e.CylinderGeometry(.0125,.0125,.72,16);O.translate(0,f+.36,0),M0(e,a,o,r,O,o.stand,.8);const J=new e.CylinderGeometry(.019,.019,.045,16);J.translate(0,f+.72,0),M0(e,a,o,r,J,o.stand,.7);const s0=new e.CylinderGeometry(.006,.006,.03,8);s0.rotateZ(Math.PI/2),s0.translate(.03,f+.72,0),M0(e,a,o,r,s0,o.chrome,.5);const $=I0(e,[[0,f+.7,0],[0,L[1]-.02,0],[0,L[1]+.02,.01],[d[0],d[1]-.012,d[2]-.03]],.0078,{segs:24,radial:10,capEnd:!0});M0(e,a,o,r,$,o.chrome,.7),C=[G,[G[0]+.01,G[1]-.06,G[2]-.05],[.03,L[1]-.2,-.02],[.035,f+.3,-.02],[.05,f,-.03],[.12,.012,-.06],[.28,.01,-.02],[.34,.01,-.22],[.2,.01,-.45],[.35,.01,-.9],[.8,.01,-1.4]]}const x=new e.CylinderGeometry(.017,.017,.035,14,1,!0);x.applyMatrix4(new e.Matrix4().makeRotationFromQuaternion(new e.Quaternion().setFromUnitVectors(new e.Vector3(0,1,0),new e.Vector3(m[0],m[1],m[2])))),x.translate(d[0],d[1],d[2]),M0(e,a,o,r,x,o.body,.7);const p=[];for(let L=0;L<=8;L++){const O=L/8;p.push([G[0]+(k[0]-G[0])*O,G[1]+(k[1]-G[1])*O,G[2]+(k[2]-G[2])*O])}M0(e,a,o,r,I0(e,p,L=>.0125+.008*Math.pow(L,1.6),{segs:24,radial:16,capStart:!0}),o.body,.8);const M=new e.TorusGeometry(.0205,.0022,8,24);M.lookAt(new e.Vector3(m[0],m[1],m[2]));const I=g(k,m,-.014);M.translate(I[0],I[1],I[2]),M0(e,a,o,r,M,o.chrome,.5);const P=new e.SphereGeometry(.026,24,16);P.translate(k[0],k[1],k[2]),M0(e,a,o,r,P,o.grille,.8),t.cable!==!1&&M0(e,a,o,r,I0(e,C,.0042,{segs:120,radial:8,capEnd:!0}),o.cable,.6);const F=n?g(y,m,-(t.grip??.13)):g(d,m,-.01);return{group:r,grip:F,axis:m,mouth:y,tail:G,height:i,boom:n,dispose(){r.traverse(L=>L.geometry&&L.geometry.dispose())}}}function Yo(e,t={}){const a=t.kit||null,o=dt(e,a),r=new e.Group;r.name="phone";const i=.071,n=.148,s=.008,u=.009,l=new e.Shape;l.moveTo(-i/2+u,-n/2),l.lineTo(i/2-u,-n/2),l.quadraticCurveTo(i/2,-n/2,i/2,-n/2+u),l.lineTo(i/2,n/2-u),l.quadraticCurveTo(i/2,n/2,i/2-u,n/2),l.lineTo(-i/2+u,n/2),l.quadraticCurveTo(-i/2,n/2,-i/2,n/2-u),l.lineTo(-i/2,-n/2+u),l.quadraticCurveTo(-i/2,-n/2,-i/2+u,-n/2);const v=new e.ExtrudeGeometry(l,{depth:s-.002,bevelEnabled:!0,bevelThickness:.001,bevelSize:.001,bevelSegments:2,curveSegments:8});v.translate(0,0,-.006/2),M0(e,a,o,r,v,o.body,.6);const g=new e.MeshBasicMaterial({color:new e.Color(.5,.62,.9),toneMapped:!1}),m=new e.Mesh(new e.PlaneGeometry(i-.006,n-.008),g);m.position.z=s/2+4e-4,r.add(m);const y=new e.CylinderGeometry(.006,.006,.0025,16);return y.rotateX(Math.PI/2),y.translate(-i/2+.016,n/2-.016,-s/2-.001),M0(e,a,o,r,y,o.chrome,.4),{group:r,screen:m,setScreen(k){g.color.setRGB(k[0],k[1],k[2])},dispose(){r.traverse(k=>k.geometry&&k.geometry.dispose()),g.dispose()}}}function qo(e,t={}){const a=t.kit||null,o=dt(e,a),r=new e.Group;r.name="pen";const i=I0(e,[[0,.012,0],[0,.14,0]],l=>.0042-4e-4*l,{segs:8,radial:12,capEnd:!0,capStart:!0});M0(e,a,o,r,i,o.body,.5);const n=new e.ConeGeometry(.0038,.013,12);n.rotateX(Math.PI),n.translate(0,.0065,0),M0(e,a,o,r,n,o.chrome,.4);const s=new e.BoxGeometry(.0016,.045,.003);s.translate(0,.115,.0048),M0(e,a,o,r,s,o.chrome,.4);const u=new e.CylinderGeometry(.0045,.0045,.006,12);return u.translate(0,.135,0),M0(e,a,o,r,u,o.red,.4),{group:r,dispose(){r.traverse(l=>l.geometry&&l.geometry.dispose())}}}const ve=.27,Ee=.245,L0=[.136,.08,-.016],se=[{k:[.0235,.001,.074],L:[.034,.022,.018],r:.0082},{k:[.0075,.002,.077],L:[.037,.024,.019],r:.0083},{k:[-.0085,.001,.074],L:[.034,.022,.018],r:.0079},{k:[-.0235,-.001,.068],L:[.027,.018,.016],r:.0071}],q0={k:[.024,-.007,.02],L:[.03,.026,.022],r:.0092},F0=[.82,.76,.68,.6],ne=[1.08,.84,.76,.67],oe=.0011,ct=.3,et=.0042,Gt={relaxed:{c:[[.3,.45,.3],[.35,.5,.3],[.4,.55,.32],[.45,.55,.3]],spread:.05,thumb:[.55,.25,.2,.25]},fist:{c:[[1.45,1.6,1.1],[1.5,1.65,1.1],[1.5,1.65,1.1],[1.45,1.6,1.05]],spread:0,thumb:[.9,.6,.5,.6],thumbTo:"fist"},open:{c:[[.04,.06,.04],[.03,.05,.04],[.05,.06,.04],[.08,.08,.05]],spread:.16,thumb:[.2,.05,.05,.1]},pick:{c:[[.8,1.6,.65],[.72,1.55,.75],[.78,1.55,.75],[.85,1.5,.7]],spread:.05,thumb:[.75,.2,.25,.35],pick:!0,thumbTo:"pick"},fret:{c:[[.5,1.75,.55],[.55,1.8,.55],[.6,1.75,.5],[.7,1.5,.45]],spread:.12,thumb:[0,.2,.25,.15],thumbDir:[.35,-.9,.25]},reach:{c:[[.12,.18,.1],[.14,.2,.1],[.18,.22,.12],[.24,.26,.14]],spread:.12,thumb:[.3,.1,.1,.15]},point:{c:[[0,.02,.01],[1.5,1.7,1.05],[1.5,1.7,1.05],[1.45,1.65,1]],spread:.02,thumb:[.95,.45,.45,.45],thumbTo:"tuck"},wipe:{c:[[.55,.7,.45],[.6,.75,.5],[.65,.8,.5],[.7,.8,.5]],spread:.03,thumb:[.45,.25,.2,.2]},grip:{c:[[1.15,1.25,.8],[1.2,1.3,.85],[1.2,1.3,.85],[1.15,1.25,.8]],spread:0,thumb:[1,.35,.3,.25]},phone:{c:[[.35,.8,.5],[.4,.85,.55],[.45,.9,.55],[.5,.9,.5]],spread:.02,thumb:[.25,.1,.15,.1],phone:!0},pen:{c:[[.45,.75,.4],[.8,.95,.5],[1.25,1.4,.9],[1.3,1.4,.85]],spread:.02,thumb:[.85,.3,.3,.3],pen:!0,thumbTo:"pen"},flat:{c:[[.08,.1,.06],[.08,.1,.06],[.1,.12,.06],[.12,.12,.06]],spread:.08,thumb:[.15,.05,.05,.05]},pistol:{c:[[.16,.12,.06],[1.05,1.15,.8],[1.08,1.18,.82],[1,1.1,.75]],spread:0,thumb:[.62,.22,.2,.18],thumbDir:[.42,-.62,.66]},support:{c:[[1,1.1,.7],[1.05,1.15,.78],[1.08,1.18,.82],[1,1.1,.75]],spread:0,thumb:[.3,.12,.1,.1],thumbDir:[.45,-.5,.74]},torch:{c:[[1.15,1.25,.8],[1.2,1.3,.85],[1.2,1.3,.85],[1.15,1.25,.8]],spread:0,thumb:[.9,.6,.5,.6],thumbTo:"fist"}},Dt=[-.02,-.026,.067],c={add:(e,t)=>[e[0]+t[0],e[1]+t[1],e[2]+t[2]],sub:(e,t)=>[e[0]-t[0],e[1]-t[1],e[2]-t[2]],mul:(e,t)=>[e[0]*t,e[1]*t,e[2]*t],dot:(e,t)=>e[0]*t[0]+e[1]*t[1]+e[2]*t[2],cross:(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],len:e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),norm:e=>{const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])||1;return[e[0]/t,e[1]/t,e[2]/t]},lerp:(e,t,a)=>[n0(e[0],t[0],a),n0(e[1],t[1],a),n0(e[2],t[2],a)]},Y0=(e,t,a)=>{const o=Math.cos(a),r=Math.sin(a),i=c.dot(t,e),n=c.cross(t,e);return[e[0]*o+n[0]*r+t[0]*i*(1-o),e[1]*o+n[1]*r+t[1]*i*(1-o),e[2]*o+n[2]*r+t[2]*i*(1-o)]};function qt(e){const t=Z(e||0);return t<.001?{defs:se,map:[0,1,2,3]}:{defs:[se[0],se[1],se[2],{k:[-.0168,0,.0715],L:se[2].L.map(a=>a*(.3+.72*t)),r:.0074*(.55+.45*t)},{...se[3],k:[-.0235-.0075*t,-.0012,.067-.002*t]}],map:[0,1,2,2,3]}}function Zt(e,t,a){const o=c.norm(c.add(c.add(c.mul(e,.85),c.mul(t,.12)),c.mul(a,.5)));let r=c.norm(c.add(c.add(c.mul(e,.1),c.mul(t,-1)),c.mul(a,-.42)));const i=c.norm(c.cross(r,o));r=c.norm(c.sub(r,c.mul(i,c.dot(r,i))));let n=c.cross(i,r);return c.dot(n,e)<0&&(n=c.mul(n,-1)),{X:n,Y:i,Z:r}}const tt=Zt([1,0,0],[0,1,0],[0,0,1]),$t=e=>[c.dot(e,tt.X),c.dot(e,tt.Y),c.dot(e,tt.Z)],Zo=$t([0,0,1]),Bt=$t([0,-1,0]);function ot(e,t,a){let o=Y0([0,0,1],[0,1,0],a);const r=Y0([1,0,0],[0,1,0],a);let i=[0,1,0];const n=[e.k],s=[],u=o;let l=e.k;for(let v=0;v<3;v++)o=Y0(o,r,t[v]),i=Y0(i,r,t[v]),l=c.add(l,c.mul(o,e.L[v])),n.push(l),s.push(i);return{pts:n,ups:s,axis:r,base:u}}function Pe(e,t){const[a,o,r,i]=t;let n=c.norm(e.thumbDir||[.62,-.38,.68]);n=Y0(n,c.norm([0,.3,1]),-a*.9);const s=c.norm(c.cross(n,[0,-1,.2])),u=[q0.k],l=[];let v=q0.k;for(const g of[o,r,i])n=Y0(n,s,g),v=c.add(v,c.mul(n,q0.L[u.length-1])),u.push(v),l.push(c.norm(c.cross(n,s)));return{pts:u,ups:l}}const nt=(e,t)=>{const a=e.pts[2],o=e.pts[3],r=e.ups[2];return{c:c.lerp(a,o,.62),n:c.mul(r,-1),r:t}};function Ae(e,t,a,o){let r=e.slice(),i=o(r);const n=r.length,s=5,u=new Array(n).fill(0);for(let l=0;l<Math.pow(s,n);l++){let v=l;const g=u.map((y,k)=>{const G=v%s;return v=Math.floor(v/s),t[k]+(a[k]-t[k])*G/(s-1)}),m=o(g);m<i&&(i=m,r=g)}for(let l=.12;l>.004;l*=.5){let v=!0;for(;v;){v=!1;for(let g=0;g<n;g++)for(const m of[-1,1]){const y=r.slice();y[g]=Z(y[g]+m*l,t[g],a[g]);const k=o(y);k<i-1e-12&&(i=k,r=y,v=!0)}}}return r}const Lt=new Map;function $o(e,t=0){const a=e+"|"+(+t||0).toFixed(3);let o=Lt.get(a);return o||(o=Qo(e,t),Lt.set(a,o)),o}function Qo(e,t){const a=Gt[e]||Gt.relaxed,{defs:o,map:r}=qt(t),i=o.length,n=d=>((i-1)/2-d)*a.spread*(4/i),s=o.map((d,w)=>ot(d,a.c[r[w]],n(w))),u=q0.r*ne[3],l=o[0].r*F0[2];let v=a.thumb.slice(0,4);const g=[-.3,-.35,-.3,-.3],m=[1.7,1.2,1.4,1.4];let y=null,k=null;if(a.thumbTo==="pick"){const d=c.norm(c.add(c.norm(Zo),[1,0,0])),w=c.norm(c.sub(Bt,c.mul(d,c.dot(Bt,d)))),f=s[0],C=c.add(c.lerp(f.pts[2],f.pts[3],.45),c.mul(d,l+6e-4));let x=-1/0;s.forEach((F,L)=>F.pts.slice(1).forEach((O,J)=>{x=Math.max(x,c.dot(O,w)+o[L].r*F0[J+1])}));const p=Math.max(.004,x+.015-.0165-c.dot(C,w)),M=c.add(C,c.mul(w,p)),I=c.add(M,c.mul(w,-.0075)),P=c.add(I,c.mul(d,6e-4+u));v=Ae(v,g,m,F=>{const L=nt(Pe(a,F),u),O=c.sub(L.c,P);return c.dot(O,O)+3e-5*(1-c.dot(L.n,c.mul(d,-1)))}),y={center:M,dir:w,across:c.norm(c.cross(w,d)),face:d},y.tip=c.add(M,c.mul(w,.0165))}if(a.thumbTo==="tuck"||a.thumbTo==="fist"){const d=(p,M,I)=>c.add(c.lerp(p.pts[1],p.pts[2],I),c.mul(p.ups[1],o[M].r*F0[1]+q0.r*ne[2]*.92)),w=a.thumbTo==="fist"?0:1,f=d(s[w],w,.6),C=d(s[w+1],w+1,.55),x=c.norm(c.add(s[w].ups[1],s[w+1].ups[1]));v=Ae(v,g,m,p=>{const M=Pe(a,p),I=c.sub(M.pts[2],f),P=c.sub(M.pts[3],C);return c.dot(I,I)+c.dot(P,P)+3e-5*(1-c.dot(c.mul(M.ups[2],-1),c.mul(x,-1)))})}if(a.thumbTo==="pen"){const d=s[0],w=nt(d,o[0].r*F0[3]),f=c.add(w.c,c.mul(w.n,w.r+et+4e-4)),C=c.add(o[0].k,[.013,.004,-.02]),x=c.norm(c.sub(C,f)),p=c.norm(c.sub([1,0,0],c.mul(x,c.dot([1,0,0],x)))),M=c.add(c.add(f,c.mul(x,.004)),c.mul(p,et+u+4e-4));v=Ae(v,g,m,L=>{const O=nt(Pe(a,L),u),J=c.sub(O.c,M);return c.dot(J,J)+2e-5*(1-c.dot(O.n,c.mul(p,-1)))});const I=o[1].r*F0[2],P=c.add(c.add(f,c.mul(x,.006)),c.mul(p,-(et+I+4e-4))),F=Ae([...a.c[1],n(1)],[.2,.3,.1,-.35],[1.5,1.8,1.2,.35],L=>{const O=ot(o[1],L.slice(0,3),L[3]),J=c.sub(c.lerp(O.pts[2],O.pts[3],.5),P);return c.dot(J,J)});s[1]=ot(o[1],F.slice(0,3),F[3]),k={tip:c.add(f,c.mul(x,-.024)),dir:x}}const G=Pe(a,v);return{fingers:s.map(d=>d.pts),ups:s.map(d=>d.ups),axes:s.map(d=>d.axis),bases:s.map(d=>d.base),thumb:G.pts,thumbUps:G.ups,pick:y,pen:k,phone:!!a.phone,n:i}}function re(e,t,a,o){const r=e[0],i=e[1],n=e[2],s=t[0]-r,u=t[1]-i,l=t[2]-n,v=1/Math.max(s*s+u*u+l*l,1e-12),g=o-a;return(m,y,k)=>{const G=m-r,d=y-i,w=k-n;let f=(G*s+d*u+w*l)*v;f=f<0?0:f>1?1:f;const C=G-s*f,x=d-u*f,p=w-l*f;return Math.sqrt(C*C+x*x+p*p)-(a+g*f)}}const Ro=(e,t,a,o,r)=>{const i=Math.max(o[0]-e,0,e-r[0]),n=Math.max(o[1]-t,0,t-r[1]),s=Math.max(o[2]-a,0,a-r[2]);return Math.sqrt(i*i+n*n+s*s)};function Jo(e,t){const a=t.map(f=>[f.k[0],f.k[1]+.0022,f.k[2]-.004,f.r*F0[0]*1.06]),o=[-.034,-.021,-.046],r=[.034,.015,.083],i=(f,C,x)=>{const p=Ro(f,C,x,o,r);if(p>.007)return p;let M=E0(f,C,x,0,-.0015,.037,.0215,.0036,.0305,.0074);M=B0(M,Math.abs(f+.001)-.0305+Math.max(0,.034-x)*.2,.006),M=S0(M,N0(f,C,x,.0165,-.0085,.027,.0125,.0085,.019),.008),M=S0(M,N0(f,C,x,-.0185,-.0065,.037,.0105,.0075,.024),.008),M=S0(M,E0(f,C,x,0,-.001,-.016,.0165,.0038,.021,.0074),.012);for(const I of a)M=S0(M,Se(f,C,x,I[0],I[1],I[2],I[3]),.006);return M},n=(f,C,x,p=null)=>{const M=c.mul(c.add(c.add(f[0],f[1]),c.add(f[2],f[3])),.25);let I=0;for(const R of f)I=Math.max(I,c.len(c.sub(R,M)));I+=x[0]+.012;const P=p||c.norm(c.sub(f[1],f[0])),F=c.sub(f[0],c.mul(P,.012)),L=c.add(f[1],c.mul(C[0],6e-4)),O=c.add(f[2],c.mul(C[1],5e-4)),J=re(F,f[0],x[0],x[0]),s0=re(f[0],f[1],x[0],x[1]),$=re(f[1],f[2],x[1]*.97,x[2]),r0=re(f[2],f[3],x[2]*.97,x[3]),t0=x[1]*1.01,V=x[2]*1.005;return(R,H,N)=>{const Y=Se(R,H,N,M[0],M[1],M[2],I);if(Y>.006)return Y;let o0=Math.min(J(R,H,N),s0(R,H,N),$(R,H,N),r0(R,H,N));return o0=S0(o0,Se(R,H,N,L[0],L[1],L[2],t0),.003),o0=S0(o0,Se(R,H,N,O[0],O[1],O[2],V),.0025),o0}},s=t.map(f=>F0.map(C=>f.r*C)),u=e.fingers.map((f,C)=>n(f,e.ups[C],s[C],e.bases[C])),l=ne.map(f=>q0.r*f),v=n(e.thumb,e.thumbUps,l),g=(f,C,x)=>{const p=S0(i(f,C,x),v(f,C,x),.011);let M=p;for(const I of u)M=Math.min(M,S0(p,I(f,C,x),.0055));return M},m=(f,C,x,p,M)=>{const I=c.norm(c.sub(x,f)),P=re(c.sub(f,c.mul(I,C)),x,p+oe,M+oe);return(F,L,O)=>B0(P(F,L,O),(F-x[0])*I[0]+(L-x[1])*I[1]+(O-x[2])*I[2],6e-4)},y=e.fingers.map((f,C)=>{const x=re(c.sub(f[0],c.mul(e.bases[C],.012)),f[0],s[C][0]+oe,s[C][0]+oe),p=m(f[0],0,c.lerp(f[0],f[1],ct),s[C][0],n0(s[C][0],s[C][1],ct));return(M,I,P)=>Math.min(x(M,I,P),p(M,I,P))}),k=c.lerp(e.thumb[1],e.thumb[2],.3),G=m(e.thumb[0],.004,e.thumb[1],l[0],l[1]),d=m(e.thumb[1],.002,k,l[1],n0(l[1],l[2],.3));return{skin:g,glove:(f,C,x)=>{let p=i(f,C,x)-oe;p=S0(p,Math.min(G(f,C,x),d(f,C,x)),.008);for(const M of y)p=S0(p,M(f,C,x),.004);return p}}}const Ho=8e-4;function Tt(e,t,a=!0){const o=a?[-.037,-.024,-.049]:[1/0,1/0,1/0],r=a?[.037,.017,.084]:[-1/0,-1/0,-1/0];return e.forEach((i,n)=>{const s=t[n]+.0045;for(let u=0;u<3;u++)o[u]=Math.min(o[u],i[u]-s),r[u]=Math.max(r[u],i[u]+s)}),{lo:o,hi:r}}function zt(e,t,a){const o=ze(t,a.lo,a.hi,Ho,{smooth:1,project:1}),r=new e.BufferGeometry;return r.setAttribute("position",new e.BufferAttribute(o.positions,3)),r.setAttribute("normal",new e.BufferAttribute(o.normals,3)),r.setIndex(new e.BufferAttribute(o.indices,1)),r.computeBoundingSphere(),r}function Eo(e,t){let a=0,o=0;for(const v of t)a+=v.attributes.position.count,o+=v.index?v.index.count:v.attributes.position.count;const r=new Float32Array(a*3),i=new Float32Array(a*3),n=new Uint32Array(o);let s=0,u=0;for(const v of t){r.set(v.attributes.position.array,s*3),i.set(v.attributes.normal.array,s*3);const g=v.index?v.index.array:[...Array(v.attributes.position.count).keys()];for(let m=0;m<g.length;m++)n[u+m]=g[m]+s;s+=v.attributes.position.count,u+=g.length,v.dispose()}const l=new e.BufferGeometry;return l.setAttribute("position",new e.BufferAttribute(r,3)),l.setAttribute("normal",new e.BufferAttribute(i,3)),l.setIndex(new e.BufferAttribute(n,1)),l.computeBoundingSphere(),l}function en(e,t,a){const o=[],r=(i,n,s,u)=>{const l=i[2],v=i[3],g=c.len(c.sub(v,l)),m=c.norm(c.sub(v,l)),y=c.norm(c.sub(n[2],c.mul(m,c.dot(n[2],m)))),k=c.cross(y,m),G=n0(s*.97,u,.7),d=G*.7,w=G*.3,f=g*.36,C=c.add(c.add(l,c.mul(m,g*.7)),c.mul(y,G-w+45e-5)),x=new e.SphereGeometry(1,16,10);x.scale(d,w,f);const p=new e.Matrix4().makeBasis(new e.Vector3(...k),new e.Vector3(...y),new e.Vector3(...m));p.setPosition(...C),x.applyMatrix4(p),o.push(x)};return t.fingers.forEach((i,n)=>r(i,t.ups[n],a[n].r*F0[2],a[n].r*F0[3])),r(t.thumb,t.thumbUps,q0.r*ne[2],q0.r*ne[3]),Eo(e,o)}const Q0=new Map;function tn(e,t,a=0,o=""){if(o&&Q0.has(o)){const i=Q0.get(o);return Q0.delete(o),Q0.set(o,i),i}const r=on(e,t,a);if(o&&(Q0.set(o,r),Q0.size>16)){const[i,n]=Q0.entries().next().value;Q0.delete(i);for(const s of Object.values(n))s.dispose()}return r}function on(e,t,a=0){const{defs:o}=qt(a),r=Jo(t,o),i=[],n=[],s=[],u=[];return t.fingers.forEach((l,v)=>l.forEach((g,m)=>{i.push(g),n.push(o[v].r*F0[m]),m<2&&(s.push(m?c.lerp(l[0],l[1],ct):g),u.push(o[v].r*F0[0]+oe))})),t.thumb.forEach((l,v)=>{i.push(l),n.push(q0.r*ne[v]),v<3&&(s.push(v<2?l:c.lerp(t.thumb[1],t.thumb[2],.3)),u.push(q0.r*ne[v]+oe))}),{skin:zt(e,r.skin,Tt(i,n)),glove:zt(e,r.glove,Tt(s,u)),nails:en(e,t,o)}}function nn(e,t){const a=new e.Shape;a.moveTo(0,.0135),a.quadraticCurveTo(.0162,.0105,.0138,-.005),a.quadraticCurveTo(.0078,-.0152,0,-.0165),a.quadraticCurveTo(-.0078,-.0152,-.0138,-.005),a.quadraticCurveTo(-.0162,.0105,0,.0135);const o=new e.ExtrudeGeometry(a,{depth:.001,bevelEnabled:!0,bevelThickness:3e-4,bevelSize:3e-4,bevelSegments:1,curveSegments:8});o.translate(0,0,-5e-4);const r=t.dir,i=c.norm(c.sub(t.across,c.mul(r,c.dot(t.across,r)))),n=c.cross(i,c.mul(r,-1)),s=new e.Matrix4().makeBasis(new e.Vector3(...i),new e.Vector3(...c.mul(r,-1)),new e.Vector3(...n));return s.setPosition(...t.center),o.applyMatrix4(s),o}function an(e,t,a,o,r={}){const i=[],n=t.toon({base:"#2a2733",shade:"#17151c",deep:"#0c0b10",deepT:-.35,deepAmt:.6,rampT:.12,soft:.012,side:e.DoubleSide,rim:1.35,cloth:!0,sheen:.55,fold:.3,wetSpec:.6}),s=t.toon({base:"#2a2630",shade:"#131117",rampT:.1,soft:.012,rim:1.2,side:e.DoubleSide,cloth:!0,sheen:.4,fold:.15}),u=t.toon({base:Kt,shade:it,rampT:.1,soft:.01,spec:.3,specT:.994,rim:.35,rimW:.8,wetSpec:1,skin:!0,skinBoost:.7}),l=t.toon({base:"#27232d",shade:"#0e0d11",rampT:.12,spec:.12,specT:.985,rim:1,cloth:!0,sheen:.3,fold:.1,wetSpec:.4}),v=t.toon({base:"#1b1519",shade:"#070507",rampT:.05,spec:1.3,specT:.975,rim:.9,wetSpec:.5}),g=t.toon({base:"#c8121e",shade:"#5c0710",rampT:0,spec:.5,rim:.6,rimW:.84,litMax:.55,coat:[.012,.22]}),m="#040306",y="#6e4452",k=r.pistol||null;k&&(k.group.matrixAutoUpdate=!1,k.group.visible=!1,a.chest.add(k.group));const G=Yo(e,{kit:t}),d=qo(e,{kit:t});G.group.visible=!1,d.group.visible=!1;const w=[1,-1].map(b=>{const W=t.withOutline(new e.BufferGeometry,n,m,{lineW:1.05}),X=t.withOutline(new e.BufferGeometry,s,m,{lineW:1}),S=new e.Group,h=t.withOutline(new e.BufferGeometry,u,y,{lineW:.85}),A=t.withOutline(new e.BufferGeometry,l,m,{lineW:.85}),D=t.withOutline(new e.BufferGeometry,v,"#020203",{lineW:.45}),T=t.withOutline(new e.BufferGeometry,g,"#12030a",{lineW:.8});S.add(h,A,D,T),a.chest.add(W,X,S),i.push(W.userData.mesh,X.userData.mesh,h.userData.mesh,A.userData.mesh,T.userData.mesh);for(const z of[W,X,h,A,D,T])z.userData.mesh.frustumCulled=!1;return{side:b,sleeve:W,cuff:X,hand:S,handMesh:h,gloveMesh:A,nails:D,pick:T,shapeKey:"",hasPick:!1}});w.find(b=>b.side===-1).hand.add(G.group,d.group);const C=(b,W)=>{if(!b||!W||!b.attributes.position||!W.attributes.position)return!1;const X=Object.keys(b.attributes),S=Object.keys(W.attributes);if(X.length!==S.length)return!1;for(const h of S){const A=b.attributes[h],D=W.attributes[h];if(!A||A.itemSize!==D.itemSize||A.array.length!==D.array.length||A.array.constructor!==D.array.constructor)return!1}return!b.index&&!W.index||!!(b.index&&W.index&&b.index.array.length===W.index.array.length&&b.index.array.constructor===W.index.array.constructor)},x=(b,W,X=!0)=>{const S=b.userData.mesh;if(X&&S.userData.ownGeo!==!1&&S.geometry!==W&&C(S.geometry,W)){const h=S.geometry;for(const A in W.attributes){const D=h.attributes[A];D.array.set(W.attributes[A].array),D.needsUpdate=!0}W.index&&(h.index.array.set(W.index.array),h.index.needsUpdate=!0),h.boundingSphere=W.boundingSphere||null,h.boundingBox=W.boundingBox||null,W.dispose();return}S.userData.ownGeo!==!1&&S.geometry.dispose(),S.userData.ownGeo=X,S.geometry=W,S.userData.hullMesh&&(S.userData.hullMesh.geometry=W)},p=new e.Matrix4,M=new e.Matrix4,I=new e.Matrix4,P=b=>new e.Vector3(...b),F=b=>{const W=P(b).applyMatrix4(M);return[W.x,W.y,W.z]},L=b=>{const W=P(b).transformDirection(M);return[W.x,W.y,W.z]},O=b=>{const W=P(b).applyMatrix4(I);return[W.x,W.y,W.z]},J=b=>{const W=P(b).transformDirection(I);return[W.x,W.y,W.z]},s0=a.hips.parent,$=new e.Vector3,r0=(b,W,X)=>{b=c.norm(b);let S=c.norm(c.sub(W,c.mul(b,c.dot(W,b)))),h=c.cross(S,b);return c.dot(h,X)<0&&(h=c.mul(h,-1)),{X:h,Y:S,Z:b}},t0=(b,W)=>(W=c.norm(W),b=c.norm(c.sub(b,c.mul(W,c.dot(b,W)))),{X:c.cross(b,W),Y:b,Z:W}),V=18*Math.PI/180,R=Math.cos(V),H=Math.sin(V);function N(b){const W=(j,E,a0)=>[j-w0.chest[0],E-w0.chest[1],a0-w0.chest[2]],X=Z(b.gunRaise??1),S=b.gunAim?c.norm(b.gunAim):[0,.02,1],h=c.norm([.1,-.7,.72]);let A=c.norm(c.lerp(h,S,X));const D=W(-.045,1.365,.405),T=W(-.07,1.06,.3);let z=c.lerp(T,D,X);const U=Z(b.gunRecoil??0);U>0&&(z=c.add(z,c.add(c.mul(A,-.035*U),[0,.006*U,0])),A=c.norm(c.add(A,[0,.09*U,0])));const B=c.norm(c.sub([0,1,0],c.mul(A,c.dot([0,1,0],A)))),_=c.add(c.mul(B,R),c.mul(A,H)),Q=c.sub(c.mul(A,R),c.mul(B,H)),q=c.cross(Q,_);return{G:z,B:A,Up:B,X:_,Y:q,Z:Q}}function Y(b,W,X){if(W===-1){const B=Dt,_=c.sub(b.G,c.add(c.add(c.mul(b.X,B[0]),c.mul(b.Y,B[1])),c.mul(b.Z,B[2])));return{W:_,X:b.X,Y:b.Y,Z:b.Z,shape:"pistol",pole:[-.55,-1,.05],gunW:_}}const h=Dt,A=h[0]-.052,D=h[1]+.001,T=h[2]-.004,z=c.mul(b.Y,-1);return{W:c.sub(b.G,c.add(c.add(c.mul(b.X,A),c.mul(z,D)),c.mul(b.Z,T))),X:b.X,Y:z,Z:b.Z,shape:"support",pole:[.6,-1,.05]}}function o0(b,W,X,S){if(b.arms==="gun"&&S.gun&&(W.side===-1||(b.gunHands??2)>1.5))return Y(S.gun,W.side);const h=W.side,D=o.lefty?1:-1,T=b.arms,z=(q,j,E)=>[q-w0.chest[0],j-w0.chest[1],E-w0.chest[2]];if(b.guitar>.5&&(T==="guitar"||(T==="point"||T==="wipe")&&h!==D)||T==="guitar"&&b.guitar>.5){if(M.copy(o.placement(b)),h===D&&T==="guitar"){const P0=Z(b.strumAmp,0,1.5),A0=b.strum*Math.PI*2,z0=Math.cos(A0),_0=.02+.05*P0,G0=z0*_0,p0=F([.03+.3*G0,G0,b0.topZ+.0135+.024*P0*z0*z0]),v0=Math.sin(A0)*.18*P0,m0=L([1,0,0]),g0=L([0,1,0]),D0=L([0,0,1]),T0=Zt(m0,g0,D0),K0=v0*1.1;return{contact:p0,contactKind:"pick",X:Y0(T0.X,D0,K0),Y:Y0(T0.Y,D0,K0),Z:Y0(T0.Z,D0,K0),shape:"pick",pole:[h*1,-.7,-.6]}}const q=Z(b.fret),j=n0(Te(1)-.012,Te(11)-.012,q),E=F([j,Be(2,j)+.013*Z(b.bend??0,-.5,1.5),b0.topZ+.0118]),a0=L([1,0,0]),l0=L([0,1,0]),e0=L([0,0,1]),c0=c.norm(c.add(c.add(c.mul(l0,.1),c.mul(e0,1)),c.mul(a0,-.12)));let d0=c.norm(c.add(c.mul(e0,.12),c.mul(l0,-1)));d0=c.norm(c.sub(d0,c.mul(c0,c.dot(d0,c0))));let x0=c.cross(d0,c0);return c.dot(x0,a0)<0&&(x0=c.mul(x0,-1)),{contact:E,contactKind:"index",X:x0,Y:d0,Z:c0,shape:"fret",pole:[h*.9,-1,.1]}}if(T==="guitar_up"&&b.guitar>.5){if(M.copy(o.placement(b)),h===D){const j=t0(L([0,0,-1]),L([.15,-1,0]));return{contact:F([-.215,-.14,0]),contactKind:"palm",...j,shape:"grip",pole:[h,-.4,-.5]}}const q=t0(L([0,0,-1]),L([0,1,.1]));return{contact:F([.4,0,-.012]),contactKind:"palm",...q,shape:"grip",pole:[h,-.4,-.5]}}if(T==="hands_up"){const q=r0([h*.15,1,.1],[0,0,-1],[-h,0,0]);return{W:z(h*.215,1.3,.2),...q,shape:"open",pole:[h,-1,-.2]}}if(T==="fists"){const q=r0([-h*.25,.55,.8],[h*.4,.6,.3],[0,1,0]);return{W:z(h*.13,1.08,.2),...q,shape:"fist",pole:[h,-.8,-.3]}}if(T==="face"){const q=r0([-h*.3,1,.1],[0,.1,1],[0,1,0]);return{W:z(h*.065,1.36,.19),...q,shape:"relaxed",pole:[h,-1,.1]}}if(T==="reach"&&h===-1){const q=r0([.1,.3,1],[0,-.2,-1],[0,1,0]);return{W:z(-.1,1.3,.46),...q,shape:"reach",pole:[-.6,-1,0]}}if(T==="point"&&h===D){const q=Z(b.pointUp??.15,-.5,1),j=z(h*.1,1.27+q*.08,.43);if(S.aim){const a0=[L0[0]*h,L0[1],L0[2]];let l0=c.norm(c.sub(S.aim,a0));const e0=[0,0,1],c0=Math.cos(70*Math.PI/180);if(c.dot(l0,e0)<c0){const p0=c.norm(c.sub(l0,c.mul(e0,c.dot(l0,e0))));l0=c.add(c.mul(e0,c0),c.mul(p0,Math.sqrt(1-c0*c0)))}let d0=c.add(a0,c.mul(l0,.4));d0=c.add(d0,[0,q*.08-.03,0]);const x0=c.sub(S.aim,d0),P0=c.len(x0);let A0=c.norm(c.cross([0,1,0],x0));c.dot(A0,[h,0,0])<0&&(A0=c.mul(A0,-1));const z0=c.norm(c.add(c.add(x0,c.mul(A0,P0*.13)),[0,P0*.06,0])),_0=r0(z0,[0,1,0],[-h,0,0]),G0=c.add(c.mul(_0.X,.0245),c.mul(_0.Y,.001));return{W:c.sub(d0,G0),..._0,shape:"point",pole:[h,-.6,-.6]}}const E=r0([.06*-h,q,1],[0,1,0],[-h,0,0]);return{W:j,...E,shape:"point",pole:[h,-.6,-.6]}}if(T==="wipe"&&h===D){s0.updateMatrixWorld(!0),$.set(h*.0285,-.0055,.072),S.headToChest($);const q=[$.x,$.y,$.z],j=t0([0,.15,-1],[-h*.45,1,.1]);return{contact:c.add(q,[0,0,.012]),contactKind:"knuckle",...j,shape:"wipe",pole:[h,-.8,-.2]}}if(T==="mic"&&S.mic){const q=S.mic,j=J(q.axisRoot),E=h===D?-.04:.015,a0=O(c.add(q.gripRoot,c.mul(q.axisRoot,E))),l0=c.norm(J([h,.25,0])),e0=c.norm(c.cross(j,l0)),c0=t0(l0,c.dot(e0,[0,-1,0])<0?c.mul(e0,-1):e0);return{contact:a0,contactKind:"palm",...c0,shape:"grip",pole:[h,-1,-.4]}}if(T==="phone"&&h===D){const q=O([h*.05,b.phoneY??1.1,.3]),j=t0(J([0,-.62,.78]),J([h*.1,.78,.62]));return{contact:q,contactKind:"phone",...j,shape:"phone",pole:[h,-1,-.3]}}if(T==="touch"&&b.touchAt){const q=b.touchAt,j=[L0[0]*h,L0[1],L0[2]],E=O(h===D?q:[q[0]+.05*h,q[1]+.03,q[2]]),a0=c.norm(c.sub(E,j)),l0=r0(a0,[0,1,0],[-h,.2,0]);return h===D?{contact:E,contactKind:"pen",...l0,shape:"pen",pole:[h,-.7,-.5]}:{contact:E,contactKind:"palm",...l0,shape:"flat",pole:[h,-.8,-.4]}}if(T==="bars"&&b.barL&&b.barR){const q=h===1?b.barL:b.barR,j=h===1?b.barAxisL||[1,0,0]:b.barAxisR||[-1,0,0],E=O(q),a0=c.norm(J(j)),l0=[L0[0]*h,L0[1],L0[2]];let e0=c.sub(E,l0);e0=c.norm(c.sub(e0,c.mul(a0,c.dot(e0,a0))));const c0=Y0(e0,c.mul(a0,h),b.barRoll??.32),d0=r0(c0,J([0,1,-.3]),c.mul(a0,-1)),x0=h===-1&&b.barReachR?Z(b.barReachK??0):0;if(x0>.001){const P0=O(b.barReachR);return{contact:c.add(E,c.mul(c.sub(P0,E),x0)),contactKind:"bar",...d0,shape:x0>.55?"pick":"grip",pole:[h*1,-.75,-.55]}}return{contact:E,contactKind:"bar",...d0,shape:"grip",pole:[h*1,-.75,-.55]}}if(T==="grab"&&b.grabL&&b.grabR){const q=h===1?b.grabL:b.grabR,j=[L0[0]*h,L0[1],L0[2]],E=O(q),a0=c.norm(c.sub(E,j)),l0=r0(a0,[0,1,0],[-h,.2,0]);return{contact:E,contactKind:"palm",...l0,shape:"grip",pole:[h,-.8,-.4]}}if(T==="pen"){const q=b.desk??.74;if(h===D){const E=b.penAt||[0,0],a0=O([h*.07+E[0]*.08,q+.001,.34+E[1]*.06]),l0=r0(J([-h*.12,-.52,.85]),J([h*.55,.83,.05]),J([-h,0,.2]));return{contact:a0,contactKind:"pen",...l0,shape:"pen",pole:[h,-.6,-.6]}}const j=r0(J([-h*.35,-.05,1]),J([0,1,0]),J([-h,0,0]));return{contact:O([h*.16,q+.012,.3]),contactKind:"palm",...j,shape:"flat",pole:[h,-.3,-1]}}const B=r0([h*.08,-1,.06],[h,0,0],[0,0,1]),_=Z(b.walkAmp??0),Q=_*Math.sin((b.walk??0)*Math.PI*2+(h>0?Math.PI:0))*(b.walkArm??1);return{W:z(h*(.25-.012*_),.8+(b.guitar>.5&&T!=="none"?.02:0)+.02*_*Math.abs(Q),.035+.11*Q),...B,shape:"relaxed",pole:[h*.25,0,-1]}}function i0(b,W,X){let S=c.sub(W,b),h=c.len(S);const A=ve+Ee-.002;h>A&&(W=c.add(b,c.mul(c.norm(S),A)),S=c.sub(W,b),h=A);const D=c.norm(S),T=(ve*ve-Ee*Ee+h*h)/(2*h),z=Math.sqrt(Math.max(0,ve*ve-T*T));let U=c.sub(X,c.mul(D,c.dot(X,D)));return U=c.norm(U),{E:c.add(c.add(b,c.mul(D,T)),c.mul(U,z)),W}}const u0=new e.Matrix4,f0=new e.Matrix4;function K(b,W,X={}){s0.updateMatrixWorld(!0),f0.copy(a.chest.matrixWorld).invert(),I.multiplyMatrices(f0,s0.matrixWorld),u0.multiplyMatrices(f0,a.head.matrixWorld);const S={mic:X.mic||null,aim:X.aim||null,headToChest:h=>h.applyMatrix4(u0),gun:null};b.arms==="gun"&&(S.gun=N(b)),G.group.visible=!1,d.group.visible=!1;for(const h of w){const A=o0(b,h,W,S),D=h.side===-1?Math.round(Z(b.extraFinger??0)*40)/40:0,T=$o(A.shape,D),z=A.shape+"|"+D.toFixed(3);if(h.shapeKey!==z){h.shapeKey=z;const p0=tn(e,T,D,z);x(h.handMesh,p0.skin,!1),x(h.gloveMesh,p0.glove,!1),x(h.nails,p0.nails,!1),T.pick?(x(h.pick,nn(e,T.pick)),h.pick.visible=!0):h.pick.visible=!1}h.side===-1&&T.phone&&(G.group.visible=!0,G.group.position.set(0,-.021,.072),G.group.rotation.set(Math.PI/2,0,0),b.phoneScreen&&G.setScreen(b.phoneScreen)),h.side===-1&&T.pen&&(d.group.visible=!0,d.group.position.set(...T.pen.tip),d.group.quaternion.setFromUnitVectors(new e.Vector3(0,1,0),P(T.pen.dir)));let U=A.W;if(A.contact){const p0=A.contactKind==="pick"?T.pick.tip:A.contactKind==="pen"?T.pen.tip:A.contactKind==="palm"?[0,-.03,.048]:A.contactKind==="bar"?b.barContact||[0,-.024,.066]:A.contactKind==="phone"?[0,-.025,.072]:A.contactKind==="knuckle"?c.lerp(T.fingers[0][1],T.fingers[1][1],.5):T.fingers[0][3],v0=c.add(c.add(c.mul(A.X,p0[0]),c.mul(A.Y,p0[1])),c.mul(A.Z,p0[2]));U=c.sub(A.contact,v0)}p.makeBasis(P(A.X),P(A.Y),P(A.Z));const B=[L0[0]*h.side,L0[1],L0[2]];if(A.shape==="pick"&&b.arms==="guitar"){const p0=Z(b.strumAmp,0,1.5),v0=b.strum*Math.PI*2;B[1]+=.01*p0*Math.cos(v0),B[2]+=.009*p0*Math.sin(v0)}const{E:_,W:Q}=i0(B,U,A.pole);p.setPosition(...Q),p.decompose(h.hand.position,h.hand.quaternion,h.hand.scale);const q=A.shape==="relaxed"||A.shape==="fist"||A.shape==="wipe"?.036:A.shape==="pick"?.006:.017,j=[B[0]-h.side*.05,B[1]-.01,B[2]],E=c.add(Q,c.mul(A.Z,q)),a0=[j,B,c.lerp(B,_,.5),_,c.lerp(_,Q,.5),Q],l0=p0=>{const v0=[[0,.046],[.2,.049],[.4,.046],[.6,.042],[.8,.039],[1,.037]];for(let m0=1;m0<v0.length;m0++)if(p0<=v0[m0][0]){const g0=(p0-v0[m0-1][0])/(v0[m0][0]-v0[m0-1][0]);return n0(v0[m0-1][1],v0[m0][1],g0)}return .044},e0=p0=>{const v0=Math.max(0,Math.min(1,(p0-.62)/.3))*(1-Math.max(0,(p0-.97)/.03)),m0=Math.exp(-Math.pow((p0-.5)/.06,2));return l0(p0)*(1+.07*v0*Math.pow(Math.max(0,Math.sin(p0*60+h.side)),2)+.05*m0*Math.pow(Math.max(0,Math.sin(p0*45)),2))},c0={segs:72,radial:24,up:[0,0,1],capStart:!0};kt(h.sleeve.userData.mesh.geometry,a0,e0,c0)||x(h.sleeve,I0(e,a0,e0,c0));const x0=[c.sub(Q,c.mul(c.norm(c.sub(Q,_)),.012)),Q,c.add(Q,c.mul(A.Z,q*.55)),E],P0=p0=>n0(.0405,.0385,p0),A0={segs:12,radial:24,up:[0,0,1]},z0=h.cuff.userData.mesh.geometry,_0=kt(z0,x0,P0,A0),G0=_0?z0:I0(e,x0,P0,A0);{const p0=G0.attributes.position,v0=25,m0=p0.count-v0;for(let g0=0;g0<v0;g0++){const D0=g0%24,T0=.0015+.0055*X0(D0,h.side,5)*(D0%3===0?1:.45);p0.setXYZ(m0+g0,p0.getX(m0+g0)-A.Z[0]*T0,p0.getY(m0+g0)-A.Z[1]*T0,p0.getZ(m0+g0)-A.Z[2]*T0)}p0.needsUpdate=!0}_0||x(h.cuff,G0),h.elbow=_,h.wrist=Q}if(k){const h=S.gun;if(k.group.visible=!!h,h){const A=[0,-.02386,-.03669],D=c.sub(h.G,c.add(c.add(c.mul(h.X,0),c.mul(h.Up,A[1])),c.mul(h.B,A[2])));p.makeBasis(P(c.mul(h.Y,-1)),P(h.Up),P(h.B)),p.setPosition(...D),k.group.matrix.copy(p),k.group.matrixWorldNeedsUpdate=!0}}}return{casters:i,setPose:K,arms:w,phone:G,pen:d,dispose(){for(const b of w)for(const W of[b.sleeve,b.cuff,b.pick])W.userData.mesh.geometry.dispose();G.dispose(),d.dispose()}}}const W0=Math.PI/180,We=1.2;function sn(e,t={}){const a=po(e),o=go(e,t.shadowSize??4096),r=new e.Group;r.name="char3d";const i=(h,A,D=0,T=0,z=0)=>{const U=new e.Group;return U.name=h,U.position.set(D,T,z),A.add(U),U},n={};n.hips=i("hips",r,0,.86,0),n.spine=i("spine",n.hips,0,.09,0),n.chest=i("chest",n.spine,0,.23,0),n.neck=i("neck",n.chest,0,w0.neck[1]-w0.chest[1],w0.neck[2]),n.headPivot=i("headPivot",n.neck,0,.054,.004),n.head=i("head",n.headPivot,0,.06*We,.024*We),n.head.scale.setScalar(We);const s=ko(e,a,t);n.head.add(s.group),o.add(s.mesh,{inB:!1});const u=Lo(e,a,n,t);for(const h of u.casters)o.add(h);const l=No(e,a,t);n.head.add(l.group);for(const h of l.casters)o.add(h);const v=Vo(e,a,t);n.chest.add(v.group),n.chest.add(v.strap);for(const h of v.casters)o.add(h);const g=an(e,a,n,v,t);for(const h of g.casters)o.add(h);const m=new e.Group;m.name="micStand",r.add(m);let y=null,k="";const G=72,d=new e.InstancedBufferGeometry;{const h=new e.SphereGeometry(1,10,8);d.index=h.index,d.setAttribute("position",h.attributes.position),d.setAttribute("normal",h.attributes.normal),d.setAttribute("aDrop",new e.InstancedBufferAttribute(new Float32Array(G*4),4)),d.setAttribute("aStretch",new e.InstancedBufferAttribute(new Float32Array(G),1)),d.instanceCount=0}const w=new e.Mesh(d,a.drops());w.frustumCulled=!1,w.name="drops";let f=rt({}),C=0,x=null,p={};const M=new e.Vector3,I=new e.Matrix4;function P(h,A=0){p=h||{},f=rt(h),C=A,a.shared.uTime.value=A;{const m0=f.windW,g0=a.shared.uHairWind.value;m0?g0.set(m0[0],m0[1],m0[2],Z(f.hairFlutter??0,0,2)):g0.set(0,0,0,0)}const D=(f.bodyYaw==null?.6*f.yaw:f.bodyYaw)*W0,T=Math.sin(f.breathe*Math.PI*2),z=Nt(f),U=_e(f),B=Z(f.headFwd??U),_=Wo(f),Q=Z(f.chibi);r.scale.setScalar(n0(1,.56,Q)),n.head.scale.setScalar(We*Z(f.headScale??1,.5,3)*n0(1,2.2,Q)),n.hips.position.set(_.hipsX,_.hipsY,_.hipsZ);const q=Z(f.sway??0,-15,15),j=q*_.stand+3.5*_.weight,E=Z(f.pump??0,-20,30),a0=_.ride||0;{const m0=Z(f.walkAmp??0)*_.stand,g0=(f.walk??0)*Math.PI*2;n.hips.rotation.set(0,(D*.5-m0*4.5*Math.sin(g0)*W0)*(1-a0),(j*W0+m0*2.4*Math.sin(g0)*W0)*(1-a0)+(f.rideRoll??0)*W0*a0)}const l0=f.lean+z*.35+_.stomp*6+B*5,e0=Z(f.walkAmp??0)*_.stand,c0=(f.walk??0)*Math.PI*2,d0=e0*5.5*Math.sin(c0)*W0,x0=e0*1.6*Math.cos(c0*2)*W0;n.spine.rotation.set((l0*.6+E*.65+_.bounce*60+e0*2.2*(1-Math.cos(c0*2)))*W0,D*(.5+.3*a0)+d0*.55,(-.75*j+.6*q*(1-_.stand))*W0+x0),n.chest.rotation.set((l0*.4+E*.35)*W0,0,-.15*j*W0),n.chest.position.set(0,.23+Z(f.shoulders??0,-.05,.05),0),n.chest.scale.set(1+T*.006,1+T*.004,1+T*.012);const P0=f.yaw*W0-D*(1-.2*a0),A0=so(f);n.neck.position.set(0,w0.neck[1]-w0.chest[1],w0.neck[2]+B*.014);const z0=-.5*l0-.3*E-30*_.bounce;n.neck.rotation.set((A0*.3+B*11+z0*.3)*W0,P0*.35,-f.roll*W0*.3,"YXZ"),n.headPivot.rotation.set((A0*.7-B*8+z0*.7)*W0,P0*.65,-f.roll*W0*.7,"YXZ");const _0=f.lookUp>0?{...f,eyes:{...f.eyes,gaze:[f.eyes.gaze[0],f.eyes.gaze[1]+.7*Z(f.lookUp)]}}:f;s.paint(_0,A);{const m0=f.mouth,g0=Z(m0.open),D0=m0.shape==="A"?.0022:m0.shape==="O"?.002:m0.shape==="E"||m0.shape==="I"?.001:m0.shape==="U"?.0012:0;a.shared.uJaw.value=g0*n0(D0,.0026,U)}const G0=Z(f.wet);for(const m0 of a.mats)m0.uniforms&&m0.uniforms.uWet&&(m0.uniforms.uWet.value=G0);s.overlay.material.uniforms.uOverA.value=.4+.3*Z(f.anger),r.updateMatrixWorld(!0),M.set(0,-.084-a.shared.uJaw.value,.022).applyMatrix4(n.head.matrixWorld),I.copy(n.neck.matrixWorld).invert(),M.applyMatrix4(I),u.neckMat.uniforms.uJawY.value=M.y+w0.neck[1]-.019,u.setPose(f,A,_),r.updateMatrixWorld(!0),v.setPose(f,A),r.updateMatrixWorld(!0);const p0=f.micStand===!0||f.micStand!==!1&&f.arms==="mic";m.visible=p0;let v0=null;if(p0){const m0=+(f.micH??1.325).toFixed(3),g0=f.micBoom!==!1,D0=(f.micSide??1)>=0?1:-1,T0=f.micTilt??void 0,K0=f.micGrip??void 0,ae=[m0,g0,D0,T0,K0].join("|");ae!==k&&(k=ae,y&&(m.remove(y.group),y.dispose()),y=Xo(e,{kit:a,height:m0,boom:g0,side:D0,tilt:T0,grip:K0}),m.add(y.group)),m.position.set(0,0,f.micZ??.455),m.rotation.set(0,Math.PI,0);const Z0=y.grip,$0=y.axis;v0={gripRoot:[-Z0[0],Z0[1],(f.micZ??.455)-Z0[2]],axisRoot:[-$0[0],$0[1],-$0[2]]}}x=v0,g.setPose(f,A,{mic:v0}),l.setPose(f,A,n),r.updateMatrixWorld(!0),L(G0,A)}const F=[];function L(h,A){const D=d.attributes.aDrop,T=d.attributes.aStretch;if(h<.05){d.instanceCount=0,w.visible=!1;return}w.visible=!0,F.length=0;for(const B of l.tips())F.push(M.set(B[0],B[1],B[2]).applyMatrix4(n.head.matrixWorld).clone());if(v.group.visible){const B=v.outline.map(_=>new e.Vector3(_[0],_[1],-.01).applyMatrix4(v.group.matrixWorld));B.sort((_,Q)=>_.y-Q.y);for(let _=0;_<6&&_<B.length;_++)F.push(B[_])}F.push(M.set(0,-.083,.03).applyMatrix4(n.head.matrixWorld).clone());for(const B of g.arms)B.wrist&&F.push(M.set(...B.wrist).applyMatrix4(n.chest.matrixWorld).clone().add(new e.Vector3(0,-.035,0)));let z=0;const U=r.matrixWorld.elements[13];for(let B=0;B<F.length&&z<G;B++){if(X0(B,71)>h*1.05)continue;const _=F[B],Q=1.1+X0(B,72)*1.9,q=A/Q+X0(B,73),j=q-Math.floor(q),E=.0012+.0011*X0(B,74,Math.floor(q));if(j<.72){const a0=j/.72,l0=E*(.35+.65*a0);D.setXYZW(z,_.x,_.y-l0*(.6+.6*a0),_.z,l0),T.setX(z,.25*a0)}else{const a0=(j-.72)*Q,l0=_.y-E-.5*9.8*a0*a0;if(l0<U)continue;D.setXYZW(z,_.x,l0,_.z,E),T.setX(z,Math.min(3,9.8*a0*.35))}z++}d.instanceCount=z,D.needsUpdate=!0,T.needsUpdate=!0}const O=.03,J=[[0,-.049,.074],[0,-.0585,.073],[0,-.066,.069],[0,-.078,.062],[0,-.029,.0715],[.022,-.058,.066],[-.022,-.058,.066]];let s0=null,$=null;const r0=new e.Vector3,t0=new e.Vector3;function V(){let h=r;for(;h.parent;)h=h.parent;if(h===r||!h.isScene)return null;if(h!==s0){s0=h,$=null;const D=h.getObjectByName("roof.micStand");D&&D.traverse(T=>{!$&&T.isMesh&&T.geometry&&T.geometry.type==="SphereGeometry"&&($=T)})}if(!$)return null;for(let D=$;D;D=D.parent)if(!D.visible)return null;const A=$.geometry;return A.boundingSphere||A.computeBoundingSphere(),$.updateWorldMatrix(!0,!1),t0.copy(A.boundingSphere.center).applyMatrix4($.matrixWorld),{c:t0,r:A.boundingSphere.radius*$.matrixWorld.getMaxScaleOnAxis()}}function R(h){r.updateMatrixWorld(!0);let A=9;for(const D of J)r0.set(D[0],D[1],D[2]).applyMatrix4(n.head.matrixWorld),A=Math.min(A,r0.distanceTo(h.c)-h.r);return A}let H=0;function N(){H=0;const h=V();if(!h)return;const A=p,D=A.lean??0;if(R(h)>=O)return;const z=_=>(P({...A,lean:D-_},C),R(h));let U=0,B=8;for(;B<40&&z(B)<O;)U=B,B=Math.min(40,B*2);for(let _=0;_<7;_++){const Q=.5*(U+B);z(Q)>=O?B=Q:U=Q}z(B),H=B,p=A}const Y=new e.Vector3,o0=new e.Vector3,i0=new e.Vector3,u0=new e.Vector3,f0=new e.Quaternion,K=new e.Vector3,b=new e.Matrix3,W=new e.Matrix4;function X(h,A,D={}){D.micClear!==!1&&N();const T=A.quaternion,z=a.shared;if(D.world){const Q=D.world;z.uKeyDir.value.copy(Q.keyDir),z.uKeyCol.value.copy(Q.keyCol),z.uAmbGain.value.copy(Q.ambGain),z.uAmbCol.value.copy(Q.ambCol),z.uAmb.value=Q.amb,z.uRimCol.value.copy(Q.rimCol),z.uRimAmt.value=Q.rimAmt;const q=Q.rimDir||[1,-.2];Y.set(q[0],-q[1],-.35).normalize().applyQuaternion(T),z.uRimDir.value.copy(Y),z.uExposure.value=Q.comp??1,z.uSkinTint.value=Q.skinTint??.2,z.uSkinWarm.value=Q.skinWarm??.22}else{const Q=f.light,q=Q.key||[-.6,-.8];Y.set(q[0],-q[1],D.keyZ??.75).normalize().applyQuaternion(T),z.uKeyDir.value.copy(Y);const j=Q.rim||[1,-.2];Y.set(j[0],-j[1],-.35).normalize().applyQuaternion(T),z.uRimDir.value.copy(Y),z.uKeyCol.value.set(Q.keyColor||"#fff4ea"),z.uRimCol.value.set(Q.rimColor||"#6f95e8"),z.uRimAmt.value=Q.rimAmt??.6,z.uAmbCol.value.set(Q.ambient||"#16338f"),z.uAmb.value=Q.amb??.35,z.uAmbGain.value.setRGB(1,1,1),z.uExposure.value=1}f.arms==="point"&&f.pointAt!==!1&&(r.updateMatrixWorld(!0),A.getWorldPosition(Y),W.copy(n.chest.matrixWorld).invert(),Y.applyMatrix4(W),g.setPose(f,C,{mic:x,aim:[Y.x,Y.y,Y.z]}),r.updateMatrixWorld(!0));const U=D.height??h.getRenderTarget()?.height??h.domElement.height;z.uPxToView.value=A.isPerspectiveCamera?2*Math.tan(A.fov*W0/2)/U:0,z.uPx.value=D.outlinePx??2.2,r.updateMatrixWorld(!0),n.head.getWorldQuaternion(f0),n.head.getWorldPosition(K),A.getWorldPosition(Y),Y.sub(K).applyQuaternion(f0.clone().invert()).normalize(),z.uCamH.value.copy(Y),z.uWarp.value=D.warp??11;const B=s.material.uniforms;b.setFromMatrix4(I.makeRotationFromQuaternion(f0)),B.uHeadRot.value.copy(b),B.uEyeReflect.value=Z(f.eyeReflect??.5,0,2);const _=D.env||null;if(B.uEnvMode.value=_?_.rect?2:_.cube?1:0:0,B.uEnvCube.value=_&&_.cube?_.cube:null,B.uEnvRect.value=_&&_.rect?_.rect:null,B.uEnvGain.value=_&&_.gain!=null?_.gain:1,B.uIrisDetail.value=D.irisDetail??1,D.faceRes&&D.faceRes!==s.res&&s.setRes(D.faceRes),s.flush(h),t.shadows!==!1){const Q=D.shadowCenter?o0.set(...D.shadowCenter):r.localToWorld(o0.set(0,1.15,.05)),q=D.shadowRadius??.62;n.head.getWorldPosition(K),A.getWorldPosition(u0).sub(K),u0.lengthSq()>1e-8?u0.normalize():A.getWorldDirection(u0).negate(),i0.copy(z.uKeyDir.value).multiplyScalar(D.faceShadowKey??.45).add(u0).normalize();const j=o.render(h,z.uKeyDir.value,Q,q,i0);z.uShadowA.value=j.texA,z.uShadowB.value=j.texB,z.uShadowMat.value.copy(j.matrix),z.uShadowMatB.value.copy(j.matrixB),z.uShadowTexel.value=j.texel,z.uShadowSoft.value=D.shadowSoft?1:0,z.uShadowOn.value=1}}function S(){s.dispose(),u.dispose(),l.dispose(),v.dispose(),g.dispose(),y&&y.dispose(),d.dispose(),o.dispose(),a.dispose()}return P({},0),{group:r,drops:w,setPose:P,prepare:X,dispose:S,rig:n,kit:a,parts:{head:s,body:u,hair:l,guitar:v,arms:g},get pose(){return f},get micPush(){return H},stats:()=>({head:s.stats,hair:l.stats&&l.stats(),faceRes:s.res})}}function at(e,t=new Set){const a=new Map;for(const o of e.children)o.isMesh&&!t.has(o)&&(a.has(o.material)||a.set(o.material,[]),a.get(o.material).push(o));for(const[o,r]of a){if(r.length<2)continue;const i=no(r.map(s=>(s.updateMatrix(),s.geometry.clone().applyMatrix4(s.matrix))));if(!i)continue;for(const s of r)e.remove(s),s.geometry.dispose();const n=new te(i,o);n.castShadow=!0,n.receiveShadow=!0,e.add(n)}}const rn=18*Math.PI/180;function ln(e={}){const t=new ee;t.name="pistol";const a=ft("study_gunmetal",{rough:.3}),o=ye("#161719",{rough:.62}),r=ye("#050506",{rough:.9}),i=new Qt({color:new Rt().setRGB(1.4,1.4,1.2),toneMapped:!1}),n=ft("brass_aged"),s=(p,M,I,P,F,L,O,J,s0=t)=>{const $=new te(new oo(p,M,I,3,P),F);return $.position.set(L,O,J),$.castShadow=!0,$.receiveShadow=!0,s0.add($),$},u=new ee;u.name="slide",t.add(u),s(.0305,.0385,.185,.0035,a,0,.0605,.012,u),s(.0322,.011,.02,.002,a,0,.0525,.096,u);for(let p=0;p<8;p++)for(const M of[-1,1])s(.0012,.028,.0016,4e-4,r,M*.0154,.0595,-.0555+p*.0034,u);s(9e-4,.011,.034,3e-4,r,-.0153,.066,.012,u),s(.0035,.004,.006,8e-4,a,0,.0827,-.072,u),s(.0018,.0035,.0055,4e-4,r,0,.0851,-.0745,u),s(.0016,.0042,.0018,3e-4,i,.0032,.0854,-.0728,u),s(.0016,.0042,.0018,3e-4,i,-.0032,.0854,-.0728,u),s(.0022,.0055,.0068,6e-4,a,0,.0845,.098,u),s(.0011,.0011,.0011,2e-4,i,0,.0866,.1005,u),s(.0272,.0245,.152,.003,o,0,.0313,.0125-.006,t);const l=new ee;t.add(l),s(.0245,.0032,.048,.0012,o,0,.0055,.047,l),s(.0245,.026,.0034,.0012,o,0,.0185,.0705,l);const v=s(.0068,.0215,.0048,.0012,a,0,.0195,.033,t);v.rotation.x=-.22,v.position.set(0,.0205,.0345);const g=new ee;g.name="gripGroup",t.add(g),g.position.set(0,.0275,-.02),g.rotation.x=rn,s(.0295,.108,.0385,.0075,o,0,-.054,0,g),s(.0302,.014,.0392,.004,o,0,-.1085,0,g);for(let p=0;p<3;p++)s(.0298,.0028,.0016,6e-4,r,0,-.03-p*.0185,.0198,g);const m=new ee;m.name="mag",g.add(m),s(.0244,.0035,.0326,.001,a,0,-.1163,0,m),s(.0212,.108,.0296,.0022,ye("#50545c",{rough:.5,metal:.35}),0,-.0605,4e-4,m).name="magBody",s(.0118,.0034,.0236,8e-4,ye("#c4561c",{rough:.5}),0,-.0052,0,m).name="magFollower";{const p=new ee;p.name="magRound",p.position.set(.0023,-.005,0),m.add(p);const M=new te(new Ue(.0048,.0048,.019,14),n);M.rotation.x=Math.PI/2,M.position.z=-.0045,p.add(M);const I=new te(new Jt(.0046,14,8,0,Math.PI*2,0,Math.PI/2),n);I.rotation.x=Math.PI/2,I.scale.set(1,1.9,1),I.position.z=.005,p.add(I)}const y=p=>{const M=["magBody","magFollower","magRound"].map(I=>p.getObjectByName(I));return(I,P)=>{M[0].visible=I,M[1].visible=I&&!P,M[2].visible=I&&P}},k=y(m);k(!1,!0);const G=new te(new Ue(.0064,.0064,.136,16),a);G.rotation.x=Math.PI/2,G.position.set(0,.0575,.0355),t.add(G);const d=new mt;d.position.set(0,.0575,.112),t.add(d);const w=new mt;w.position.set(-.02,.066,0),t.add(w);const f=new te(new Ht(.0046,20),r);f.position.set(0,.0575,.1064),t.add(f);const C=new te(new Ue(.0045,.0045,.028,12),n);C.rotation.x=Math.PI/2,C.position.set(0,.052,0),C.visible=!1,u.add(C),l.updateMatrix();for(const p of[...l.children])p.applyMatrix4(l.matrix),t.add(p);t.remove(l),at(u,new Set([C])),at(t,new Set([v,G])),at(g),t.traverse(p=>{p.isMesh&&(p.castShadow=!0)});let x=0;return{group:t,muzzle:d,eject:w,slide:u,trigger:v,mag:m,setSlide(p,M=!0){x=p,u.position.z=-.032*p,C.visible=M&&p>.6},setTrigger(p){v.rotation.x=-.22+.25*p,v.position.z=.0345-.004*p},get slideK(){return x},setMag(p,M=!0){m.position.set(0,-p,0),k(p>5e-4,M)},magClone(){const p=m.clone();p.position.set(0,0,0),p.visible=!0;const M=y(p);return M(!0,!0),{group:p,show:I=>M(!0,I)}},muzzleWorld(p,M){d.getWorldPosition(p),M.set(0,0,1).transformDirection(t.matrixWorld)}}}function cn(e,t={}){const a=t.pistol||ln(),o=sn(Et,{shadowSize:t.shadowSize??2048,faceRes:t.faceRes??2048,pistol:a});o.group.traverse(k=>{k.isMesh&&(k.castShadow=!k.userData.hull&&!(k.material&&k.material.transparent),k.receiveShadow=!1)}),o.drops.castShadow=!1;const r=new ee;r.name="akane",r.add(o.group,o.drops);const i=to(e,{maxLevel:.5,minLevel:.1,skinWarm:.4,skinTint:.16,...t}),n=new Me,s=new Me,u=new Me,l=new Me;let v=!1,g=t.faceRes??2048;const m={root:r,char:o,rig:o.rig,pistol:a,env:null,forceFaceRes:0,setPose:(k,G)=>o.setPose(k,G),prepare:y,lightRig:null,dispose:()=>o.dispose()};m.dynamicBuffers=()=>{const k=eo;r.traverse(G=>{const d=G.geometry;if(!(!d||!d.attributes)){for(const w in d.attributes){const f=d.attributes[w];f.isInterleavedBufferAttribute?f.data.setUsage(k):f.setUsage(k)}d.index?.setUsage(k),d.dispose()}})};function y(k){if(!r.visible)return;r.updateMatrixWorld(!0),o.group.localToWorld(n.set(0,1.15,.05));const G=i.at(n);o.rig.head.getWorldPosition(s),k.getWorldPosition(u);const d=Math.max(.05,s.distanceTo(u)),w=e.post.sceneTarget.height,f=.26/(2*Math.tan(k.fov*Math.PI/360)*d)*w,C=Math.max(1,Math.min(2.6,.7+f/220))*(w/1080);v=v?f>280:f>360,g=g>2048?f>560?4096:2048:f>780?4096:2048,m.forceFaceRes&&(g=m.forceFaceRes);const x=v?[s.x,s.y-.02,s.z]:o.group.localToWorld(l.set(0,.9,.05)).toArray();o.prepare(e.renderer,k,{world:G,height:w,outlinePx:C,shadowCenter:x,shadowRadius:v?.32:1.05,env:m.env,faceRes:g,warp:11,micClear:!1,shadowSoft:g>2048})}return m.lightRig=i,m}const mn=Object.freeze(Object.defineProperty({__proto__:null,createAkane:cn},Symbol.toStringTag,{value:"Module"}));export{rn as G,tn as a,ln as b,cn as c,mn as d,$o as h};
