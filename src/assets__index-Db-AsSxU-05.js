// assets__index-Db-AsSxU 05 — cloth
// Lines 1205-1612 of readable/assets__index-Db-AsSxU.pretty.js (statement-aligned).
const so = {
    skin: 0,
    cloth: 1,
    hair: 2,
    eye: 3,
    mouth: 4,
    teeth: 5,
    leather: 6,
    wound: 7,
    plastic: 8,
  },
  ao = `
#include <common>
#include <skinning_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
attribute float aMat;
attribute vec4 aCol;
attribute float aAO;
varying vec3 vW;
varying vec3 vN;
varying vec3 vL;
varying vec3 vLN;
varying vec4 vCol;
flat varying float vMat;          // FLAT: an interpolated id passes through every id in between (skin 0 -> mouth 3 drew a thin band of eyeball 2: white dots on every lip, lid and wound edge)
varying float vAO;
void main() {
  vAO = aAO;
  #include <skinbase_vertex>
  #include <beginnormal_vertex>
  #include <skinnormal_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  vec4 w = modelMatrix * vec4(transformed, 1.0);
  vW = w.xyz;
  vN = normalize(mat3(modelMatrix) * objectNormal);
  vL = position;
  vLN = normal;
  vCol = aCol;
  vMat = aMat;
  vec4 mvPosition = viewMatrix * w;
  gl_Position = projectionMatrix * mvPosition;
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  #include <fog_vertex>
}
`,
  io = `
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
uniform vec3 uAmbRGB;              // the shade side's light (linear, like uKeyCol)
uniform vec3 uTorchPos;            // the flashlight, lit per pixel
uniform vec3 uTorchDir;
uniform vec3 uTorchCol;            // colour * intensity; 0 = off
uniform vec4 uTorchP;              // cos(outer), cos(inner), cutoff distance, decay
uniform float uExposure;
uniform vec3 uBaseP[NMAT];
uniform vec3 uShadeP[NMAT];
uniform vec3 uDeepP[NMAT];
uniform vec4 uMatP[NMAT];          // x = type, y = spec, z = fold, w = rim
uniform vec4 uMatQ[NMAT];          // x = pattern (0 none, 1 print, 2 ribbing, 3 wrap), y = pattern frequency (1/m)
varying float vAO;
uniform vec3 uBlood;
uniform vec3 uBloodShade;
uniform vec3 uDirt;
uniform vec3 uBruise;
uniform vec3 uVein;
uniform vec3 uLivor;
uniform float uLivorY;
uniform float uSeed;
uniform float uSil;
uniform sampler2D uFaceTex;
uniform vec4 uFaceRect;            // head-local metres: x0, y0, w, h
uniform vec3 uHC;                  // head centre (rest, root space)
uniform float uFaceOn;
uniform vec4 uEyeL;
uniform vec4 uEyeR;
uniform vec4 uGaze;
uniform vec3 uIrisCol;
uniform vec3 uScleraCol;
uniform float uCloud;
uniform vec4 uAliveP;              // PRIEST: x = alive (0 = the dead: nothing below changes), y = cos of the pupil's edge, z = the upper lid's edge (eye-local), w = catchlight
uniform float uBlink;              // PRIEST: 0 open .. 1 the upper lid shut (per instance)
varying vec3 vW;
varying vec3 vN;
varying vec3 vL;
varying vec3 vLN;
varying vec4 vCol;
flat varying float vMat;

float lumi(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float h13(vec3 p) { p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vn3(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float a = h13(i), b = h13(i + vec3(1.0, 0.0, 0.0)), c = h13(i + vec3(0.0, 1.0, 0.0)), d = h13(i + vec3(1.0, 1.0, 0.0));
  float e = h13(i + vec3(0.0, 0.0, 1.0)), g = h13(i + vec3(1.0, 0.0, 1.0)), h = h13(i + vec3(0.0, 1.0, 1.0)), k = h13(i + vec3(1.0, 1.0, 1.0));
  return mix(mix(mix(a, b, f.x), mix(c, d, f.x), f.y), mix(mix(e, g, f.x), mix(h, k, f.x), f.y), f.z);
}
float fbm(vec3 p) { return vn3(p) * 0.55 + vn3(p * 2.07 + 11.3) * 0.3 + vn3(p * 4.3 + 3.1) * 0.15; }
vec3 dec(vec3 c) { return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c)); }
vec3 ambTint() {
  float m = max(max(uAmbCol.r, uAmbCol.g), max(uAmbCol.b, 1e-4));
  return mix(vec3(1.0), uAmbCol / m, uAmb * 0.6) * uAmbGain;
}
float rimMask(vec3 N, vec3 V, float width) {
  float fres = 1.0 - clamp(dot(N, V), 0.0, 1.0);
  float side = dot(N, uRimDir);
  float f = fres * smoothstep(-0.1, 0.45, side);
  float w = max(fwidth(f), 1e-4);
  return smoothstep(width - w, width + w, f);
}
// a crisp painterly edge: the interpolated mask m thresholded against noise (anti-aliased by the noise's screen rate)
float paintEdge(float m, float n, float soft) {
  float v = m * 1.3 - 0.15 + (n - 0.5) * 0.7;
  float w = max(fwidth(v) * 0.8, soft);
  return smoothstep(0.5 - w, 0.5 + w, v);
}

void main() {
  #include <clipping_planes_fragment>
  #include <logdepthbuf_fragment>
  int mi = int(vMat + 0.5);
  vec4 mp = uMatP[mi];
  int ty = int(mp.x + 0.5);
  vec3 N = normalize(vN);
  if (!gl_FrontFacing) N = -N;
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = uKeyDir;
  vec3 base = uBaseP[mi], shade = uShadeP[mi], deepC = uDeepP[mi];
  vec3 P = vL + vec3(uSeed * 1.37, uSeed * 0.71, uSeed * 2.13);
  bool isSkin = ty == 0;
  bool isCloth = ty == 1;
  // ---- cloth patterns (rest space): 1 = a faded diamond print, 2 = knit ribbing (bent normal), 3 = bandage wrap
  vec4 mq = uMatQ[mi];
  int pt = int(mq.x + 0.5);
  float patDark = 0.0;
  if (pt > 0) {
    vec2 pu = abs(vLN.x) > abs(vLN.z) ? vec2(vL.z, vL.y) : vec2(vL.x, vL.y);
    if (pt == 1) {
      vec2 q = pu * mq.y;
      vec2 r = vec2(q.x + q.y, q.x - q.y) * 0.7071;
      vec2 f = abs(fract(r) - 0.5);
      float dm = f.x + f.y;
      float aa = max(fwidth(dm), 1e-3);
      float mark = 1.0 - smoothstep(0.22 - aa, 0.22 + aa, dm);
      float dotm = 1.0 - smoothstep(0.08 - aa, 0.08 + aa, length(fract(q + 0.5) - 0.5));
      patDark = max(mark * 0.55, dotm * 0.4) * (0.6 + 0.4 * vn3(vL * 20.0));
      base = mix(base, base * vec3(0.72, 0.82, 0.92), patDark);
      shade = mix(shade, shade * vec3(0.8, 0.88, 0.96), patDark * 0.7);
    } else if (pt == 2) {
      float u = pu.x * mq.y;
      vec3 T1 = normalize(cross(N, vec3(0.0, 1.0, 0.0)) + 1e-4);
      float fw = fwidth(u);
      float k = 1.0 - smoothstep(0.3, 0.8, fw);
      N = normalize(N + T1 * cos(u * 6.2831853) * 0.35 * k);
      patDark = (0.5 + 0.5 * sin(u * 6.2831853)) * 0.18 * k;
      base *= 1.0 - patDark; shade *= 1.0 - patDark * 0.6;
    } else if (pt == 3) {
      float u = (pu.x * 0.4 + pu.y) * mq.y;
      float g = abs(fract(u) - 0.5);
      float aa = max(fwidth(u), 1e-3);
      patDark = (1.0 - smoothstep(0.06 - aa, 0.06 + aa, g)) * 0.5;
      base *= 1.0 - patDark; shade *= 1.0 - patDark * 0.7;
    } else if (pt == 4) {
      // SOLDIER: a painted woodland camouflage, three tones: blotches in rest space (they ride on the cloth), crisp edges
      vec3 q = vL * mq.y;
      float c1 = fbm(q + vec3(2.3, 7.1, 4.4)), c2 = fbm(q * 1.7 + vec3(9.7, 1.3, 5.9));
      float w1 = max(fwidth(c1), 0.004), w2 = max(fwidth(c2), 0.004);
      float mb = smoothstep(0.55 - w1, 0.55 + w1, c1);
      float mk = smoothstep(0.6 - w2, 0.6 + w2, c2) * (1.0 - mb * 0.4);
      base = mix(base, base * vec3(1.16, 0.94, 0.72), mb * 0.75);
      base = mix(base, base * vec3(0.46, 0.5, 0.44), mk * 0.8);
      shade = mix(shade, shade * vec3(1.1, 0.94, 0.78), mb * 0.6);
      shade = mix(shade, shade * 0.6, mk * 0.7);
    }
  }
  // ---- cloth: fine folds bent into the normal + a weave grain (rest space so it never swims)
  if (isCloth && mp.z > 0.0) {
    vec2 fp = vec2(vL.x * 36.0 + sin(vL.y * 9.0 + vL.z * 7.0) * 0.9, vL.y * 5.0 + vL.z * 3.0);
    float e = 0.02;
    float f0 = vn3(vec3(fp, 0.5)), fx = vn3(vec3(fp + vec2(e, 0.0), 0.5)), fy = vn3(vec3(fp + vec2(0.0, e), 0.5));
    vec3 g = vec3((fx - f0) / e, (fy - f0) / e * 0.25, 0.0);
    vec3 T1 = normalize(cross(N, vec3(0.0, 1.0, 0.0)) + 1e-4), T2 = cross(N, T1);
    N = normalize(N + (T1 * g.x + T2 * g.y) * mp.z);
  }
  // ---- skin: painterly mottling (grey-green <-> violet-grey), lividity pooled low, veins, bruises
  float nA = fbm(P * 7.0);
  if (isSkin) {
    float mott = smoothstep(0.35, 0.75, fbm(P * 4.5 + 7.0));
    base = mix(base, base * vec3(0.93, 0.9, 1.02), mott * 0.6);
    shade = mix(shade, shade * vec3(1.02, 0.92, 1.06), mott * 0.6);
    float liv = smoothstep(uLivorY, uLivorY - 0.45, vL.y) * (0.55 + 0.45 * nA);
    base = mix(base, uLivor, liv * 0.55);
    shade = mix(shade, uLivor * 0.55, liv * 0.45);
    float br = paintEdge(vCol.z, fbm(P * 13.0), 0.08);
    base = mix(base, uBruise, br * 0.75);
    shade = mix(shade, uBruise * 0.5, br * 0.6);
    // veins: thin dark branching lines (ridged, domain-warped noise), where the mask asks for them
    if (vCol.w > 0.01) {
      vec3 q = P * 26.0 + vec3(fbm(P * 9.0), fbm(P * 9.0 + 5.2), 0.0) * 1.6;
      float r1 = abs(vn3(q) - 0.5), r2 = abs(vn3(q * 2.1 + 3.3) - 0.5);
      float vw = max(fwidth(r1) * 1.2, 0.004);
      float vein = (1.0 - smoothstep(0.018, 0.018 + vw, r1)) * 0.8 + (1.0 - smoothstep(0.012, 0.012 + vw, r2)) * 0.45;
      vein *= vCol.w * smoothstep(0.3, 0.6, fbm(P * 3.0 + 1.0));
      base = mix(base, uVein, clamp(vein, 0.0, 1.0) * 0.7);
      shade = mix(shade, uVein * 0.6, clamp(vein, 0.0, 1.0) * 0.5);
    }
  }
  // PRIEST: living skin: a warm ruddy mottling over the dead's violet one
  if (isSkin && uAliveP.x > 0.5) {
    float m2 = smoothstep(0.3, 0.75, fbm(P * 5.3 + 3.0));
    base = mix(base, base * vec3(1.07, 0.95, 0.9), m2 * 0.6);
    shade = mix(shade, shade * vec3(1.08, 0.94, 0.9), m2 * 0.5);
  }
  // ---- cloth rips: skin through the hole (extra mask), a dark frayed rim
  float rip = 0.0;
  if (isCloth && vCol.w > 0.01) {
    float v = vCol.w * 1.3 - 0.15 + (fbm(P * 30.0) - 0.5) * 0.9;
    float w = max(fwidth(v), 0.02);
    rip = smoothstep(0.5 - w, 0.5 + w, v);
    float rim = smoothstep(0.35 - w, 0.35 + w, v) * (1.0 - rip);
    base = mix(base, uBaseP[0] * 0.92, rip); shade = mix(shade, uShadeP[0], rip);
    base = mix(base, base * 0.35, rim); shade = mix(shade, shade * 0.4, rim);
  }
  // ---- dirt (browns and darkens, blotchy)
  float dm = vCol.y * (0.55 + 0.45 * fbm(P * 11.0 + 3.0));
  base = mix(base, base * uDirt, clamp(dm, 0.0, 1.0));
  shade = mix(shade, shade * mix(vec3(1.0), uDirt, 0.6), clamp(dm, 0.0, 1.0));
  // ---- face paint (head materials): premultiplied sRGB paint over the base, only on front-facing rest normals
  float paintA = 0.0;
  if (uFaceOn > 0.5 && (mi == ${L.FACE} || mi == ${L.MOUTH} || mi == ${L.TEETH})) {
    vec2 uv = ((vL.xy - uHC.xy) - uFaceRect.xy) / uFaceRect.zw;
    float front = smoothstep(0.0, 0.3, vLN.z + (vL.z - uHC.z - 0.05) * 4.0) * step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    vec4 t = texture2D(uFaceTex, uv);
    paintA = t.a * front;
    if (paintA > 0.001) {
      vec3 pc = dec(clamp(t.rgb / max(t.a, 1e-4), 0.0, 1.0));
      vec3 ratio = shade / max(base, vec3(1e-3));
      base = mix(base, pc, paintA);
      shade = mix(shade, pc * clamp(ratio, 0.0, 1.2), paintA);
    }
  }
  // ---- the eyes: procedural on the eyeball (rest space): yellowed veined sclera, a milky clouded iris, a pinprick pupil
  if (mi == ${L.EYE}) {
    bool left = vL.x > uHC.x;
    vec4 E = left ? uEyeL : uEyeR;
    vec2 g = left ? uGaze.xy : uGaze.zw;
    vec3 q = normalize(vL - E.xyz);
    vec3 fw = normalize(vec3(g, 1.0));
    float ca = dot(q, fw);
    float aa = max(fwidth(ca) * 1.2, 0.0015);
    float iris = smoothstep(0.875 - aa, 0.875 + aa, ca);
    float ring = iris * (1.0 - smoothstep(0.885, 0.91, ca));
    float pupil = smoothstep(0.9968 - aa, 0.9968 + aa, ca);
    vec3 sc = uScleraCol;
    float vr = 1.0 - smoothstep(0.015, 0.04, abs(vn3(q * 16.0 + uSeed) - 0.5));
    sc = mix(sc, vec3(0.3, 0.02, 0.025), vr * 0.6 * (1.0 - smoothstep(0.55, 0.85, ca)));
    sc *= 0.75 + 0.25 * smoothstep(0.2, 0.7, ca);
    vec3 ic = mix(uIrisCol, uIrisCol * 0.35, ring);
    ic = mix(ic, uScleraCol * 1.08, uCloud * (0.45 + 0.55 * smoothstep(0.88, 0.99, ca)));
    vec3 ec = mix(sc, ic, iris);
    ec = mix(ec, vec3(0.012, 0.01, 0.012), pupil * 0.92);
    base = ec; shade = ec * 0.42; deepC = ec * 0.3;
  }
  // PRIEST: a living eye: a clear ivory sclera (pink at the corners: he has been crying), a warm fibrous iris with a dark
  // limbal ring, a real pupil; when he blinks the upper lid is painted down over the ball (skin, a dark lash edge)
  float lidPx = 0.0;
  if (mi == ${L.EYE} && uAliveP.x > 0.5) {
    bool leftE = vL.x > uHC.x;
    vec4 E = leftE ? uEyeL : uEyeR;
    vec2 g = leftE ? uGaze.xy : uGaze.zw;
    vec3 q = normalize(vL - E.xyz);
    vec3 fw = normalize(vec3(g, 1.0));
    float ca = dot(q, fw);
    float aa = max(fwidth(ca) * 1.2, 0.0015);
    float iris = smoothstep(0.866 - aa, 0.866 + aa, ca);
    float ring = iris * (1.0 - smoothstep(0.874, 0.9, ca));
    float pupil = smoothstep(uAliveP.y - aa, uAliveP.y + aa, ca);
    vec3 t1 = normalize(cross(vec3(0.0, 1.0, 0.0), fw)), t2 = cross(fw, t1);
    float ang = atan(dot(q, t2), dot(q, t1));
    float fib = 0.5 + 0.5 * sin(ang * 29.0 + vn3(q * 22.0 + uSeed) * 5.0);
    vec3 ic = uIrisCol * (0.72 + 0.4 * fib);
    ic = mix(ic, uIrisCol * vec3(1.55, 1.45, 1.1), smoothstep(0.93, 0.972, ca) * 0.55);
    ic = mix(ic, uIrisCol * 0.22, ring);
    vec3 sc = uScleraCol * (0.78 + 0.22 * smoothstep(0.15, 0.75, ca));
    float vr = 1.0 - smoothstep(0.012, 0.032, abs(vn3(q * 13.0 + uSeed) - 0.5));
    sc = mix(sc, vec3(0.62, 0.16, 0.14), vr * 0.4 * (1.0 - smoothstep(0.4, 0.8, ca)));
    sc = mix(sc, sc * vec3(1.0, 0.78, 0.76), (1.0 - smoothstep(0.25, 0.65, ca)) * 0.55);
    vec3 ec = mix(sc, ic, iris);
    ec = mix(ec, vec3(0.012, 0.009, 0.009), pupil);
    base = ec; shade = ec * 0.45; deepC = ec * 0.3;
    float edge = q.y - (mix(uAliveP.z, -0.46, uBlink) - abs(q.x) * 0.22);
    float lw = max(fwidth(edge) * 1.2, 0.006);
    float on = smoothstep(0.0, 0.04, uBlink);
    lidPx = smoothstep(-lw, lw, edge) * on;
    float lash = (1.0 - smoothstep(0.0, 0.045 + lw, abs(edge))) * on;
    base = mix(base, uBaseP[${L.FACE}] * vec3(1.18, 1.0, 0.96), lidPx);
    shade = mix(shade, uShadeP[${L.FACE}], lidPx); deepC = mix(deepC, uDeepP[${L.FACE}], lidPx);
    base = mix(base, vec3(0.09, 0.06, 0.055), lash * 0.7); shade = mix(shade, vec3(0.03, 0.02, 0.02), lash * 0.7);
  }
  // ---- blood (dried oxblood, wetter where thick)
  float bl = paintEdge(vCol.x, fbm(P * 24.0 + 1.7), 0.03);
  if (ty == 7) bl = 0.0;
  base = mix(base, uBlood * vec3(0.8, 0.85, 0.85), bl * 0.92);
  shade = mix(shade, uBloodShade, bl * 0.92);
  // ---- relief: a fine bump on skin (wrinkles, lumps) and cloth (weave), faded out before it is smaller than a pixel
  float bumpS = isSkin ? 0.0011 : (isCloth ? 0.0005 : 0.0);
  if (bumpS > 0.0) {
    vec3 Pb = P * (isSkin ? 46.0 : 140.0);
    float fade = 1.0 - smoothstep(0.35, 0.9, length(fwidth(Pb)));
    if (fade > 0.01) {
      float hgt = (isSkin ? vn3(Pb) * 0.65 + vn3(Pb * 2.3 + 4.1) * 0.35 : vn3(Pb)) * bumpS * fade;
      vec3 dpx = dFdx(vW), dpy = dFdy(vW);
      vec3 r1 = cross(dpy, N), r2 = cross(N, dpx);
      float det = dot(dpx, r1);
      vec3 grad = sign(det) * (dFdx(hgt) * r1 + dFdy(hgt) * r2);
      N = normalize(abs(det) * N - grad);
    }
  }
  // albedo for real light: the palette was tuned for a cel ramp (its "base" was the lit tone), so real light made them read as
  // pale mannequins. Dead skin darker and greyer (a little yellow-green), cloth dulled, and grime over everything
  vec3 albedo = base;
  float grime = 0.72 + 0.28 * fbm(P * 3.1 + 2.0);
  if (isSkin) albedo = mix(albedo, vec3(lumi(albedo)) * vec3(0.97, 1.0, 0.88), 0.35) * 0.6;
  else if (isCloth) albedo = mix(albedo, vec3(lumi(albedo)), 0.25) * 0.78;
  if (isSkin && uAliveP.x > 0.5) albedo = base * 0.7;                     // PRIEST: living skin keeps its warmth
  albedo *= (ty == 3) ? 0.85 : grime;
  // the shade palette tone tints the unlit side a little (cool, bruised), never a hard band
  vec3 coolT = clamp(shade / max(base, vec3(1e-3)), 0.0, 1.5);
  coolT = coolT / max(max(coolT.r, max(coolT.g, coolT.b)), 1e-3);
  float wrap = isSkin ? 0.35 : (isCloth ? 0.2 : 0.12);
  float ao = clamp(vAO, 0.0, 1.0);
  // material response: shininess and reflectance at normal incidence
  float shin = 10.0, F0 = 0.02;
  if (isSkin) { shin = 14.0; F0 = 0.026; }
  if (ty == 2) { shin = 30.0; F0 = 0.03; }
  if (ty == 3) { shin = 260.0; F0 = 0.025; }
  if (ty == 4 || ty == 7) { shin = 90.0; F0 = 0.025; }
  if (ty == 5) { shin = 28.0; F0 = 0.025; }
  if (ty == 6) { shin = 40.0; F0 = 0.035; }
  if (ty == 8) { shin = 70.0; F0 = 0.04; }
  if (bl > 0.5) { shin = max(shin, 70.0); F0 = max(F0, 0.025); }
  if (lidPx > 0.5) { shin = 14.0; F0 = 0.026; }                            // PRIEST (the blinking lid is skin)
  float nrm = (shin + 8.0) / (8.0 * PI);
  float NdV = clamp(dot(N, V), 0.0, 1.0);
  // key: the room's lights blended (lightrig.js)
  vec3 col = vec3(0.0);
  {
    vec3 Lk = uKeyDir;
    float ndl = dot(N, Lk);
    float d = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
    col += albedo * uKeyCol * d * mix(1.0, ao, 0.35);
    if (isSkin) col += albedo * uKeyCol * vec3(0.15, 0.06, 0.1) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));
    if (isSkin && uAliveP.x > 0.5) col += albedo * uKeyCol * vec3(0.12, 0.02, -0.07) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));   // PRIEST: living blood under the skin
    vec3 H = normalize(Lk + V);
    float fr = F0 + (1.0 - F0) * pow(1.0 - clamp(dot(V, H), 0.0, 1.0), 5.0);
    col += min(uKeyCol * nrm * pow(max(dot(N, H), 0.0), shin) * fr * max(ndl, 0.0), vec3(0.5));
    // PRIEST: the catchlight: the key mirrored in the wet cornea (a crisp spot, readable even in candle light)
    if (mi == ${L.EYE} && uAliveP.x > 0.5) col += (uKeyCol * 1.6 + vec3(0.05, 0.04, 0.035)) * uAliveP.w * smoothstep(0.9925, 0.9965, dot(N, H)) * (1.0 - lidPx);
  }
  // the flashlight, per pixel: the cone with its soft edge, the inverse-distance fall-off
  if (uTorchCol.r + uTorchCol.g + uTorchCol.b > 1e-4) {
    vec3 Lt = uTorchPos - vW;
    float dist = max(length(Lt), 1e-3);
    Lt /= dist;
    float cone = smoothstep(uTorchP.x, uTorchP.y, dot(-Lt, uTorchDir));
    float fall = 1.0 / max(pow(dist, uTorchP.w), 0.01);
    float cut = clamp(1.0 - pow(dist / uTorchP.z, 4.0), 0.0, 1.0);
    vec3 Et = uTorchCol * cone * fall * cut * cut / PI;
    Et /= 1.0 + lumi(Et) / 2.2;
    float ndl = dot(N, Lt);
    float d = clamp((ndl + wrap) / (1.0 + wrap), 0.0, 1.0);
    col += albedo * Et * d * mix(1.0, ao, 0.35);
    if (isSkin) col += albedo * Et * vec3(0.15, 0.06, 0.1) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));
    if (isSkin && uAliveP.x > 0.5) col += albedo * Et * vec3(0.12, 0.02, -0.07) * smoothstep(-0.35, 0.05, ndl) * (1.0 - smoothstep(0.05, 0.45, ndl));      // PRIEST
    vec3 H = normalize(Lt + V);
    float fr = F0 + (1.0 - F0) * pow(1.0 - clamp(dot(V, H), 0.0, 1.0), 5.0);
    col += min(Et * nrm * pow(max(dot(N, H), 0.0), shin) * fr * max(ndl, 0.0), vec3(0.6));
    if (mi == ${L.EYE} && uAliveP.x > 0.5) col += Et * 1.4 * uAliveP.w * smoothstep(0.9925, 0.9965, dot(N, H)) * (1.0 - lidPx);   // PRIEST: the torch in his eyes
  }
  // the shade side: the rest of the room + the sky, a little more from above than from the floor, the cavities darkest
  vec3 amb = max(uAmbRGB, vec3(0.012, 0.014, 0.02)) * (0.8 + 0.2 * N.y);
  col += albedo * mix(vec3(1.0), coolT, 0.35) * amb * ao * ao;
  // a faint sheen at grazing angles (the room reflected in wet, waxy skin): keeps the silhouette in the dark
  col += (amb * 1.4 + uRimCol * uRimAmt * 0.04) * pow(1.0 - NdV, 4.0) * F0 * 12.0 * mp.w * ao;
  // PRIEST: the living eye area is lifted a little (the post's screen-space AO digs the sockets into the dead's dark rings)
  if (uAliveP.x > 0.5 && (mi == ${L.FACE} || lidPx > 0.5)) {
    vec2 dl = vec2(abs(vL.x - uHC.x) - abs(uEyeL.x - uHC.x) + 0.004, vL.y - uEyeL.y + 0.002) / vec2(0.023, 0.016);
    col *= 1.0 + 0.38 * (1.0 - smoothstep(0.5, 1.0, length(dl))) * step(uHC.z + 0.035, vL.z);
  }
  col = min(col, vec3(64.0));
  if (!gl_FrontFacing) col *= 0.5;
  if (uSil > 0.5) col = vec3(0.0);
  gl_FragColor = vec4(col * uExposure, 1.0);
  #include <fog_fragment>
}
`;
