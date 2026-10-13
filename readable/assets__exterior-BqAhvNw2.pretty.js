import {
  V as B,
  a9 as E0,
  x as T0,
  i as le,
  ai as re,
  B as z0,
  I as o0,
  c as e0,
  $ as R0,
  am as ce,
  G as b0,
  ah as $,
  b as d0,
  l as ee,
  K as W0,
  o as a0,
  an as f0,
  Q as s0,
  d as te,
  m as P0,
  ao as oe,
  A as A0,
  h as k0,
  k as D0,
  a5 as G0,
  a6 as q0,
  D as $0,
  p as j0,
  C as K0,
  q as fe,
  a7 as de,
} from "./index-DaQlAVPp.js";
const l0 = -27,
  C = { zN: -40, zS: -0.2, med0: -22.1, med1: -18.1, curbH: 0.16 },
  Y = { x0: 13.5, x1: 29.5 },
  y0 = { dx: 118 },
  w0 = 8,
  g0 = 16,
  pe = 150,
  ve = (t) => (t < 0 ? 0 : t > 1 ? 1 : t),
  C0 = (t) => ((t = ve(t)), t * t * (3 - 2 * t));
function t0(t, i) {
  const a = -i,
    e = C0((a - 85) / 540),
    s =
      Math.sin(t * 0.0061 + 0.7) *
      7 *
      C0((a - 160) / 300) *
      (1 - C0((a - 700) / 300));
  return l0 - pe * e - s;
}
function he() {
  return {
    uTime: { value: 0 },
    uMoonDir: { value: new B(0.21, 0.216, -0.953).normalize() },
    uMoonR: { value: 0.0245 },
    uMoonLight: { value: new B(0.02, 0.026, 0.036) },
    uGlow: { value: 1 },
    uWind: { value: new E0(-0.03, 0.01) },
    uHazeK: { value: 1 / 2600 },
    uFirePos: { value: Array.from({ length: w0 }, () => new T0(0, 0, 0, 0)) },
    uFireCol: { value: Array.from({ length: w0 }, () => new B()) },
    uLampPos: { value: Array.from({ length: g0 }, () => new T0(0, 0, 0, 0)) },
    uLampCol: { value: Array.from({ length: g0 }, () => new T0(0, 0, 0, 0)) },
    uHeliPos: { value: new B(0, 200, -600) },
    uHeliDir: { value: new B(0, -1, 0) },
    uHeliOn: { value: 0 },
    uPx: { value: 1 },
  };
}
const c0 = `
float exHash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float exHash13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec2 exHash22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float exNoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  float a = exHash12(i), b = exHash12(i + vec2(1.0, 0.0)), c = exHash12(i + vec2(0.0, 1.0)), d = exHash12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float exFbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * exNoise(p); p = p * 2.03 + vec2(11.3, 7.7); a *= 0.5; } return s / 0.96875; }
float exFbm3(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++) { s += a * exNoise(p); p = p * 2.03 + vec2(11.3, 7.7); a *= 0.5; } return s / 0.875; }
float exWrapA(float a) { return mod(a + 3.14159265, 6.2831853) - 3.14159265; }
`,
  m0 = `
uniform float uTime;
uniform vec3 uMoonDir;
uniform float uGlow;
// how much the city burns in each direction (azimuth: 0 = north, +east): the horizon glow and the cloud underlight
float fireGlowAz(float az) {
  float g = 0.28;
  g += 1.00 * exp(-pow(exWrapA(az - 0.36) / 0.26, 2.0));   // NNE: the burning tower district
  g += 0.55 * exp(-pow(exWrapA(az + 0.42) / 0.30, 2.0));   // NNW
  g += 0.45 * exp(-pow(exWrapA(az - 1.50) / 0.38, 2.0));   // east
  g += 0.30 * exp(-pow(exWrapA(az - 3.00) / 0.55, 2.0));   // south, behind the flat
  g += 0.20 * exp(-pow(exWrapA(az + 1.70) / 0.45, 2.0));   // west
  return g * uGlow;
}
vec3 skyBase(vec3 d) {
  float el = asin(clamp(d.y, -1.0, 1.0));
  float az = atan(d.x, -d.z);
  float g = fireGlowAz(az);
  float e = max(el, 0.0);
  vec3 zen = vec3(0.0011, 0.0021, 0.0034);          // deep teal-blue night
  vec3 cool = vec3(0.0026, 0.0034, 0.0046);         // moonlit smoke between
  vec3 wine = vec3(0.0075, 0.0024, 0.0020);
  vec3 ember = vec3(0.058, 0.0115, 0.0024);
  vec3 c = zen + cool * exp(-e / 0.40) * 0.9 + wine * exp(-e / 0.11) * (0.30 + 0.70 * g) + ember * (exp(-e / 0.028) * 0.55 + exp(-e / 0.10) * 0.45) * g * g;
  // below the line: the haze over the rest of the city, lit from beneath, darker the further down we look
  float b = max(-el, 0.0);
  vec3 under = ember * g * g * 0.55 * exp(-b / 0.030) + (wine * (0.45 + 0.55 * g) + ember * 0.07 * g) * exp(-b / 0.11) + vec3(0.0011, 0.0010, 0.0012);
  return mix(c, under, smoothstep(0.0, 0.004, b));
}
`,
  N0 = `
uniform vec3 uMoonLight;
uniform vec4 uFirePos[${w0}];
uniform vec3 uFireCol[${w0}];
uniform vec4 uLampPos[${g0}];
uniform vec4 uLampCol[${g0}];
uniform vec3 uHeliPos;
uniform vec3 uHeliDir;
uniform float uHeliOn;
uniform float uHazeK;
// the sky's light on a surface: the horizon glow of the direction it faces + the fire-lit cloud deck above
vec3 skyAmbient(vec3 N) {
  float az = atan(N.x, -N.z);
  float g = fireGlowAz(az);
  vec3 side = vec3(0.016, 0.0048, 0.0020) * g + vec3(0.0016, 0.0022, 0.0032);
  vec3 up = vec3(0.012, 0.0045, 0.0026) * uGlow + vec3(0.0022, 0.0028, 0.0038);
  vec3 down = vec3(0.0030, 0.0018, 0.0014) * uGlow;
  float k = N.y;
  vec3 a = k > 0.0 ? mix(side, up, k) : mix(side, down, -k);
  return a;
}
vec3 exLight(vec3 P, vec3 N) {
  vec3 L = skyAmbient(N);
  L += uMoonLight * max(dot(N, uMoonDir), 0.0);
  for (int i = 0; i < ${w0}; i++) {
    vec4 f = uFirePos[i];
    if (f.w <= 0.0) continue;
    vec3 d = f.xyz - P; float r2 = dot(d, d);
    float nl = max(dot(N, d * inversesqrt(r2)), 0.0) * 0.75 + 0.25;
    L += uFireCol[i] * f.w * nl / (r2 + 60.0);
  }
  for (int i = 0; i < ${g0}; i++) {
    vec4 l = uLampPos[i];
    if (l.w <= 0.0) continue;
    vec3 d = l.xyz - P; float r2 = dot(d, d); vec3 ld = d * inversesqrt(r2);
    float nl = max(dot(N, ld), 0.0);
    float cone = mix(1.0, smoothstep(0.05, 0.55, ld.y), uLampCol[i].w);
    L += uLampCol[i].rgb * l.w * nl * cone / (r2 + 0.6);
  }
  if (uHeliOn > 0.001) {
    vec3 d = P - uHeliPos; float r = length(d); vec3 dn = d / r;
    float c = dot(dn, uHeliDir);
    float spot = smoothstep(0.9955, 0.9988, c);
    L += vec3(0.85, 0.92, 1.0) * uHeliOn * spot * (max(dot(N, -dn), 0.0) * 0.8 + 0.2) * 9.0e4 / (r * r + 1.0);
  }
  return L;
}
// glossy highlights of the near lights (lamps, police, the burning car) and the big fires on a wet surface
vec3 exSpec(vec3 P, vec3 N, vec3 V, float shin) {
  vec3 S = vec3(0.0);
  for (int i = 0; i < ${g0}; i++) {
    vec4 l = uLampPos[i];
    if (l.w <= 0.0) continue;
    vec3 d = l.xyz - P; float r2 = dot(d, d); vec3 ld = d * inversesqrt(r2);
    vec3 h = normalize(ld - V);
    float sp = pow(max(dot(N, h), 0.0), shin) * (shin + 8.0) * 0.04;
    S += uLampCol[i].rgb * l.w * sp * max(dot(N, ld), 0.0) / (r2 + 0.6);
  }
  for (int i = 0; i < ${w0}; i++) {
    vec4 f = uFirePos[i];
    if (f.w <= 0.0) continue;
    vec3 d = f.xyz - P; float r2 = dot(d, d); vec3 ld = d * inversesqrt(r2);
    vec3 h = normalize(ld - V);
    float sp = pow(max(dot(N, h), 0.0), shin) * (shin + 8.0) * 0.04;
    S += uFireCol[i] * f.w * sp * max(dot(N, ld), 0.0) / (r2 + 60.0);
  }
  return S;
}
// fraction of haze between the eye and P (smoke settles in the basin: denser low down)
float hazeAmt(vec3 P, float dist) {
  float low = smoothstep(-40.0, -150.0, P.y);
  return 1.0 - exp(-dist * uHazeK * (1.0 + 0.6 * low));
}
vec3 applyHaze(vec3 col, vec3 P) {
  vec3 D = P - cameraPosition;
  float dist = length(D);
  vec3 dir = D / max(dist, 1e-3);
  return mix(col, skyBase(dir), hazeAmt(P, dist));
}
// a wet surface's reflection of the sky (and the moon's glint)
vec3 wetReflect(vec3 V, vec3 N, float rough) {
  vec3 R = reflect(V, N);
  R.y = abs(R.y);
  float fres = 0.03 + 0.97 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);
  // a rough surface gathers a wide lobe: when the lobe reaches down to the horizon it picks up the glow there
  vec3 Rr = normalize(vec3(R.x, max(R.y - rough * 0.45, 0.012), R.z));
  vec3 s = skyBase(Rr) * (1.0 - rough * 0.55);
  float mc = dot(R, uMoonDir);
  float spread = 0.0008 + rough * 0.02;
  s += vec3(1.0, 0.20, 0.07) * 1.6 * smoothstep(1.0 - spread, 1.0 - spread * 0.1, mc);
  return s * fres;
}
`;
function n0(t) {
  const i = new le({ fog: !1, lights: !1, ...t });
  return ((i.userData.exterior = !0), i);
}
class p0 {
  constructor(i) {
    ((this.attrs = i),
      (this.pos = []),
      (this.nor = []),
      (this.uv = []),
      (this.data = {}));
    for (const a of Object.keys(i)) this.data[a] = [];
  }
  add(i, a, e) {
    const s = i.index ? i.toNonIndexed() : i,
      l = s.attributes.position,
      d = s.attributes.normal,
      v = s.attributes.uv,
      x = new re().getNormalMatrix(a),
      n = new B(),
      k = new B();
    for (let m = 0; m < l.count; m++) {
      (n.fromBufferAttribute(l, m).applyMatrix4(a),
        this.pos.push(n.x, n.y, n.z),
        d
          ? (k.fromBufferAttribute(d, m).applyMatrix3(x).normalize(),
            this.nor.push(k.x, k.y, k.z))
          : this.nor.push(0, 1, 0),
        v ? this.uv.push(v.getX(m), v.getY(m)) : this.uv.push(0, 0));
      for (const p of Object.keys(this.attrs)) {
        const b = e[p],
          N = this.attrs[p];
        for (let o = 0; o < N; o++)
          this.data[p].push(Array.isArray(b) ? b[o] : b);
      }
    }
    s !== i && s.dispose();
  }
  get count() {
    return this.pos.length / 3;
  }
  build() {
    const i = new z0();
    (i.setAttribute("position", new o0(this.pos, 3)),
      i.setAttribute("normal", new o0(this.nor, 3)),
      i.setAttribute("uv", new o0(this.uv, 2)));
    for (const [a, e] of Object.entries(this.attrs))
      i.setAttribute(a, new o0(this.data[a], e));
    return (i.computeBoundingSphere(), i.computeBoundingBox(), i);
  }
}
const me = `
varying vec3 vDir;
void main() {
  vDir = position;
  vec3 vp = (viewMatrix * vec4(position, 0.0)).xyz;
  gl_Position = projectionMatrix * vec4(vp * 900.0, 1.0);
}
`,
  ue = `
varying vec3 vDir;
uniform float uMoonR;
uniform vec2 uWind;
uniform float uCloud;
${c0}
${m0}

vec2 deckUV(vec3 d, float k) { return d.xz / (max(d.y, 0.0) + 0.045) * k; }
// cloud-deck density; det = 0..1 how much fine detail survives the pixel footprint (fades to the mean near the horizon)
float deck(vec2 p, float det) {
  vec2 w = uWind * uTime;
  float n = exFbm(p * 0.85 + w);
  float m = exFbm3(p * 3.3 - w * 1.6 + 5.2);
  n = mix(0.5, n, clamp(det * 1.5, 0.0, 1.0));
  m = mix(0.5, m, det);
  return smoothstep(0.50, 0.74, n + (m - 0.5) * 0.42 + (uCloud - 0.5) * 0.3);
}
float mBlob(vec2 q, vec2 c, vec2 r) { return 1.0 - smoothstep(0.55, 1.0, length((q - c) / r)); }
// the near side of the moon, roughly as the eye knows it (maria as soft dark seas)
float moonMaria(vec2 q) {
  vec2 w = q + (vec2(exNoise(q * 4.0 + 3.0), exNoise(q * 4.0 + 7.0)) - 0.5) * 0.20;
  float m = 0.0;
  m = max(m, mBlob(w, vec2(-0.30, 0.40), vec2(0.30, 0.24)));
  m = max(m, mBlob(w, vec2(-0.60, 0.02), vec2(0.26, 0.46)));
  m = max(m, mBlob(w, vec2(0.12, 0.36), vec2(0.15, 0.14)));
  m = max(m, mBlob(w, vec2(0.31, 0.10), vec2(0.20, 0.16)));
  m = max(m, mBlob(w, vec2(0.67, 0.28), vec2(0.10, 0.09)));
  m = max(m, mBlob(w, vec2(0.52, -0.17), vec2(0.12, 0.15)));
  m = max(m, mBlob(w, vec2(0.33, -0.32), vec2(0.08, 0.08)));
  m = max(m, mBlob(w, vec2(-0.18, -0.36), vec2(0.18, 0.12)));
  m = max(m, mBlob(w, vec2(-0.47, -0.37), vec2(0.09, 0.09)));
  m = max(m, mBlob(w, vec2(-0.02, 0.63), vec2(0.30, 0.07)));
  float n = exNoise(q * 7.0) * 0.5 + exNoise(q * 17.0) * 0.3;
  return clamp(m * (0.70 + 0.5 * n), 0.0, 1.0);
}

void main() {
  vec3 d = normalize(vDir);
  float el = asin(clamp(d.y, -1.0, 1.0));
  float az = atan(d.x, -d.z);
  float g = fireGlowAz(az);
  vec3 col = skyBase(d);

  // ---- the moon (drawn under the clouds)
  vec3 mR = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
  vec3 mU = cross(mR, uMoonDir);
  float cm = dot(d, uMoonDir);
  float mAng = length(cross(d, uMoonDir));
  float disc = 0.0;
  if (cm > 0.0) {
    vec2 q = vec2(dot(d, mR), dot(d, mU)) / uMoonR;
    float r = length(q);
    float aa = fwidth(r) + 0.004;
    disc = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
    if (disc > 0.0) {
      float nz = sqrt(max(0.0, 1.0 - r * r));
      vec3 mc = vec3(1.0, 0.060, 0.022) * 1.75;
      mc *= 0.50 + 0.50 * pow(nz, 0.45);
      mc *= 1.0 - moonMaria(q) * 0.52;
      float crat = exNoise(q * 23.0 + 1.3);
      mc *= 0.90 + 0.14 * smoothstep(0.55, 0.9, crat);
      float ty = 1.0 - smoothstep(0.0, 0.10, length(q - vec2(-0.05, -0.72)));
      mc *= 1.0 + ty * 0.35;
      mc *= mix(0.78, 1.0, smoothstep(-1.0, 0.5, q.y));      // the lower limb sits deeper in the smoke
      col = mix(col, mc, disc);
    }
    float outR = max(mAng - uMoonR, 0.0);
    vec3 halo = vec3(1.0, 0.075, 0.028);
    col += halo * (0.95 * exp(-outR / (uMoonR * 0.16)) + 0.20 * exp(-outR / (uMoonR * 0.9)) + 0.045 * exp(-outR / (uMoonR * 4.0)) + 0.012 * exp(-outR / 0.22)) * (1.0 - disc);
  }

  // ---- the rest of the city, beyond the last street that is built: a band of tiny lights and far fires under the glow
  if (el < 0.0 && el > -0.17) {
    float b = -el;
    vec2 q = vec2(az * 150.0, log(b + 0.004) * 32.0);
    vec2 qi = floor(q);
    float h = exHash12(qi + 7.0);
    vec2 qf = fract(q) - 0.5 - (exHash22(qi + 3.0) - 0.5) * 0.55;
    float pxq = length(fwidth(q));
    float dotm = 1.0 - smoothstep(0.0, max(pxq * 0.55, 0.10), length(qf));
    float district = smoothstep(0.35, 0.65, exNoise(vec2(az * 9.0, 0.5)));
    float lit = step(0.90 - 0.06 * district, h) * dotm;
    vec3 lc = mix(vec3(1.0, 0.42, 0.12), vec3(1.0, 0.60, 0.28), fract(h * 13.0));
    float fadeH = smoothstep(0.004, 0.03, b) * (1.0 - smoothstep(0.10, 0.16, b));
    col += lc * lit * 0.32 * fadeH * (0.75 + 0.25 * sin(uTime * 0.7 + h * 50.0));
    // far fires where the glow lobes are, each with a thread of smoke
    for (int i = 0; i < 7; i++) {
      float fi = float(i);
      vec2 fp = vec2(-0.62 + fi * 0.27 + 0.08 * sin(fi * 3.7), -0.012 - 0.030 * fract(fi * 0.618));
      if (i == 5) fp = vec2(1.45, -0.02);
      if (i == 6) fp = vec2(1.72, -0.035);
      vec2 dq = vec2(exWrapA(az - fp.x), el - fp.y);
      float fl = 0.75 + 0.25 * sin(uTime * (4.0 + fi) + fi * 7.0) * sin(uTime * 2.3 + fi);
      float core = exp(-dot(dq, dq) / (0.0000025 + 0.0000015 * fract(fi * 0.37)));
      float bloomF = exp(-dot(dq * vec2(1.0, 1.6), dq * vec2(1.0, 1.6)) / 0.00012);
      col += vec3(1.0, 0.36, 0.08) * (core * 1.4 + bloomF * 0.020) * fl * fireGlowAz(fp.x);
    }
  }

  // ---- stars in the gaps (under the clouds)
  float starMask = smoothstep(0.10, 0.35, el);
  vec3 stars = vec3(0.0);
  if (starMask > 0.0) {
    vec3 sp = d * 340.0;
    vec3 ci = floor(sp);
    float h = exHash13(ci);
    if (h > 0.9950) {
      vec3 jit = vec3(exHash13(ci + 1.7), exHash13(ci + 5.3), exHash13(ci + 9.1)) - 0.5;
      vec3 sc = normalize(ci + 0.5 + jit * 0.6) * 340.0;
      float rr = length(sp - sc);
      float px = length(fwidth(sp)) * 0.7;
      float s = 1.0 - smoothstep(0.0, max(px, 0.10), rr);
      float tw = 0.7 + 0.3 * sin(uTime * (1.3 + h * 37.0) + h * 311.0);
      stars = vec3(0.80, 0.84, 1.0) * s * tw * (0.015 + 0.09 * pow((h - 0.9950) / 0.0050, 3.0)) * starMask;
    }
  }

  // ---- the cloud deck, lit from below by the fires
  float den = 0.0;
  if (d.y > -0.03) {
    // cloud bands stretched along the wind: cool and moonlit up high, lit orange from beneath low over the fires
    vec2 p0 = deckUV(d, 1.0);
    vec2 p = vec2(p0.x * 0.55, p0.y * 1.35);
    float fw = length(fwidth(p));
    float det = 1.0 - smoothstep(0.08, 0.6, fw);
    den = deck(p, det);
    vec2 p1 = deckUV(normalize(d + vec3(0.0, 0.012, 0.0)), 1.0);
    float denUp = deck(vec2(p1.x * 0.55, p1.y * 1.35), det);
    float rim = clamp((den - denUp) * 4.0, 0.0, 1.0);
    float hk = exp(-max(el, 0.0) / 0.14);
    vec3 moonC = vec3(0.0042, 0.0060, 0.0086) * (0.7 + 0.6 * exNoise(p * 2.0));
    vec3 under = vec3(0.034, 0.0080, 0.0021) * g * hk;
    vec3 cc = moonC + under;
    cc += vec3(0.0085, 0.0115, 0.0160) * rim * (1.0 - hk * 0.6);
    cc *= mix(1.0, 0.55, smoothstep(0.6, 1.0, den));
    vec3 moonLit = vec3(1.0, 0.085, 0.030) * (0.60 * exp(-mAng / 0.026) + 0.14 * exp(-mAng / 0.10));
    cc += moonLit * (1.0 - smoothstep(0.30, 0.98, den));
    float fade = smoothstep(-0.03, 0.05, d.y);
    // the deck thins around the moon (the hero of the window): only a veil of cloud ever crosses the disc
    float clearing = mix(0.30, 1.0, smoothstep(0.035, 0.13, mAng));
    den *= fade * clearing;
    col = mix(col + stars, cc, den * 0.86);
  } else {
    col += stars;
  }

  // ---- low smoke bands over the burning horizon, stretched along the wind
  if (d.y > -0.05 && el < 0.45) {
    vec2 ps = deckUV(d, 0.55);
    vec2 pr = vec2(ps.x * 0.8 + ps.y * 0.6, -ps.x * 0.6 + ps.y * 0.8);
    float fw = length(fwidth(pr));
    float sm = exFbm(vec2(pr.x * 0.30, pr.y * 1.7) + vec2(uTime * 0.012, 0.0));
    sm = mix(0.5, sm, 1.0 - smoothstep(0.1, 0.8, fw));
    float band = smoothstep(0.52, 0.86, sm) * exp(-max(el, 0.0) / 0.10) * smoothstep(-0.05, 0.0, d.y);
    vec3 smc = vec3(0.014, 0.0040, 0.0016) * g + vec3(0.0012, 0.0010, 0.0011);
    col = mix(col, smc, band * 0.75);
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function we(t, i) {
  const a = n0({
      vertexShader: me,
      fragmentShader: ue,
      uniforms: { ...i, uCloud: { value: 0.5 } },
      side: ce,
      depthWrite: !1,
      depthTest: !1,
    }),
    e = new e0(new R0(1, 96, 48), a);
  return (
    (e.name = "sky"),
    (e.frustumCulled = !1),
    (e.renderOrder = -1e3),
    { mesh: e, mat: a }
  );
}
function ae(t) {
  return (
    (t >>>= 0),
    (t ^= t >>> 16),
    (t = Math.imul(t, 2146121005) >>> 0),
    (t ^= t >>> 15),
    (t = Math.imul(t, 2221713035) >>> 0),
    (t ^= t >>> 16),
    t >>> 0
  );
}
const se = (t, i) =>
    (ae(Math.floor(t / 280) * 7919 + Math.floor(i / 280) * 104729 + 9e6) &
      1023) <
    470,
  xe = (t, i, a) => (ae(t * 7919 + i * 104729 + a * 31 + 5e6) & 1023) < 880,
  ge = (t, i) => i > -41 && i < 1 && t > -262 && t < 262;
function ye(t = 1350) {
  const i = [],
    a = (e, s, l, d, v) => {
      Math.hypot(e - 3, s - 2) > t ||
        ge(e, s) ||
        (se(e, s) && xe(l, d, v) && i.push([e, t0(e, s) + 7.5, s]));
    };
  for (let e = -12; e <= 12; e++) {
    const s = Y.x0 + y0.dx * e;
    for (let l = -45; l <= 20; l++)
      (a(s + 1, l * 32, e, l, 0), a(s + 15, l * 32 + 16, e, l, 1));
  }
  for (let e = 0; e < 20; e++) {
    const s = -82 - 76 * e,
      l = -66 - 76 * e;
    for (let d = -45; d <= 45; d++)
      (a(d * 32 + 8, s + 1, e + 100, d, 2),
        a(d * 32 + 24, l - 1, e + 100, d, 3));
  }
  for (let e = 0; e < 6; e++) {
    const s = 60 + 76 * e,
      l = 76 + 76 * e;
    for (let d = -45; d <= 45; d++)
      (a(d * 32 + 8, s + 1, e + 200, d, 2),
        a(d * 32 + 24, l - 1, e + 200, d, 3));
  }
  return i;
}
const be = `
varying vec3 vWorld;
varying vec3 vN;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vN = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  ze = 48,
  Me = `
varying vec3 vWorld;
varying vec3 vN;
uniform vec4 uAve[48];
${c0}
${m0}
${N0}
uint exIhash(uint x) { x ^= x >> 16u; x *= 0x7feb352du; x ^= x >> 15u; x *= 0x846ca68bu; x ^= x >> 16u; return x; }
float districtOn(vec2 p) {
  int a = int(floor(p.x / 280.0)), b = int(floor(p.y / 280.0));
  return float((exIhash(uint(a * 7919 + b * 104729 + 9000000)) & 1023u) < 470u);
}
float slotOn(float a, float b, float s) {
  return float((exIhash(uint(int(a) * 7919 + int(b) * 104729 + int(s) * 31 + 5000000)) & 1023u) < 880u);
}
float pool(vec2 p, vec2 lamp, float on) {
  vec2 d = p - lamp;
  return on * 60.0 / (dot(d, d) + 60.0);
}
void main() {
  vec3 P = vWorld;
  vec3 N = normalize(vN);
  vec3 V = normalize(P - cameraPosition);
  vec2 p = P.xz;
  // ---- which kind of ground: a north-south street, an east-west street, or a block (pavement / yard)
  float kx = floor((p.x - ${Y.x0.toFixed(1)}) / ${y0.dx.toFixed(1)});
  float rx = p.x - ${Y.x0.toFixed(1)} - kx * ${y0.dx.toFixed(1)};
  float nsS = step(0.0, rx) * step(rx, 16.0);
  float ewS = 0.0, jz = 0.0, z0 = 0.0, z1 = 0.0, band = 0.0;
  if (p.y < -66.0) { jz = floor((-66.0 - p.y) / 76.0); float rr = -66.0 - p.y - jz * 76.0; ewS = step(rr, 16.0); z0 = -82.0 - 76.0 * jz; z1 = -66.0 - 76.0 * jz; band = jz + 100.0; }
  else if (p.y > 60.0) { jz = floor((p.y - 60.0) / 76.0); float rr = p.y - 60.0 - jz * 76.0; ewS = step(rr, 16.0); z0 = 60.0 + 76.0 * jz; z1 = 76.0 + 76.0 * jz; band = jz + 200.0; }
  float ave = step(-40.0, p.y) * step(p.y, -0.2);
  float street = max(max(nsS, ewS), ave);
  // ---- surface
  float n = exFbm3(p * 0.35);
  float n2 = exNoise(p * 2.7);
  vec3 asphalt = vec3(0.052, 0.051, 0.053) * (0.75 + 0.5 * n) * (0.9 + 0.2 * n2);
  vec3 pave = vec3(0.075, 0.070, 0.064) * (0.75 + 0.5 * n);
  // pavement strips along the street edges (curb lines)
  float edgeNS = min(rx, 16.0 - rx);
  float edgeEW = min(p.y - z0, z1 - p.y);
  float walk = (nsS > 0.5 ? step(edgeNS, 3.2) : 0.0) + (ewS > 0.5 && nsS < 0.5 ? step(edgeEW, 3.2) : 0.0);
  vec3 alb = mix(pave * 0.8, asphalt, street);
  alb = mix(alb, pave, clamp(walk, 0.0, 1.0));
  // lane markings (dashed centre lines), only where the pixel can hold them
  vec2 fw = fwidth(p);
  float mk = 0.0;
  if (fw.x < 0.25) {
    float cx = abs(rx - 8.0);
    mk += nsS * (1.0 - smoothstep(0.06, 0.06 + fw.x, cx)) * step(0.5, fract(p.y / 6.0));
    float cz = abs(p.y - (z0 + z1) * 0.5);
    mk += ewS * (1.0 - nsS) * (1.0 - smoothstep(0.06, 0.06 + fw.y, cz)) * step(0.5, fract(p.x / 6.0));
    mk *= 1.0 - 0.6 * smoothstep(0.1, 0.25, fw.x);
  }
  // the avenue: three lanes each way, edge lines, a zebra where the cross street meets it, manholes
  if (ave > 0.5 && fw.x < 0.3) {
    float z = p.y;
    float dash = step(0.45, fract(p.x / 9.0));
    float lw = 0.07 + fw.y;
    float lanes = 0.0;
    lanes += (1.0 - smoothstep(0.0, lw, abs(z + 30.7))) * dash + (1.0 - smoothstep(0.0, lw, abs(z + 26.4))) * dash;
    lanes += (1.0 - smoothstep(0.0, lw, abs(z + 13.8))) * dash + (1.0 - smoothstep(0.0, lw, abs(z + 9.5))) * dash;
    lanes += (1.0 - smoothstep(0.0, lw, abs(z + 34.6))) + (1.0 - smoothstep(0.0, lw, abs(z + 22.5)));
    lanes += (1.0 - smoothstep(0.0, lw, abs(z + 17.7))) + (1.0 - smoothstep(0.0, lw, abs(z + 5.6)));
    float zeb = step(0.5, fract(z / 1.2)) * (step(abs(p.x - 11.2), 1.6) + step(abs(p.x - 31.8), 1.6)) * step(z, -5.4) * step(-34.8, z);
    float wear = smoothstep(0.35, 0.75, exNoise(p * 0.6 + 9.0));
    mk += clamp(lanes + zeb, 0.0, 1.0) * (0.35 + 0.65 * wear);
    vec2 mh = vec2(fract((p.x + 7.0) / 41.0) - 0.5, 0.0) * 41.0; mh.y = mod(z + 13.0, 17.0) - 8.5;
    float man = 1.0 - smoothstep(0.30, 0.34, length(mh));
    alb = mix(alb, vec3(0.020, 0.019, 0.018), man * 0.9);
  }
  alb = mix(alb, vec3(0.30, 0.28, 0.22), clamp(mk, 0.0, 1.0) * 0.6);
  // ---- the lamps of the grid: sodium pools where the district still has power
  vec3 lampL = vec3(0.0);
  if (street > 0.5 && ave < 0.5) {
    float s = 0.0;
    if (nsS > 0.5) {
      float x0 = ${Y.x0.toFixed(1)} + kx * ${y0.dx.toFixed(1)};
      float iw = floor(p.y / 32.0 + 0.5); vec2 lw = vec2(x0 + 1.0, iw * 32.0);
      float ie = floor((p.y - 16.0) / 32.0 + 0.5); vec2 le = vec2(x0 + 15.0, ie * 32.0 + 16.0);
      s += pool(p, lw, districtOn(lw) * slotOn(kx, iw, 0.0));
      s += pool(p, le, districtOn(le) * slotOn(kx, ie, 1.0));
    }
    if (ewS > 0.5) {
      float ia = floor((p.x - 8.0) / 32.0 + 0.5); vec2 la = vec2(ia * 32.0 + 8.0, z0 + 1.0);
      float ib = floor((p.x - 24.0) / 32.0 + 0.5); vec2 lb = vec2(ib * 32.0 + 24.0, z1 - 1.0);
      s += pool(p, la, districtOn(la) * slotOn(band, ia, 2.0));
      s += pool(p, lb, districtOn(lb) * slotOn(band, ib, 3.0));
    }
    lampL = vec3(1.0, 0.42, 0.11) * s * 0.55;
  }
  // the avenue's own lamps (and the stretch of the cross street near it): real pools, some of them flickering
  // puddles: flat mirrors in the asphalt
  float puddle = smoothstep(0.55, 0.75, exNoise(p * 0.22 + 3.0)) * street;
  float wetK = mix(0.35, 1.0, puddle) * mix(0.35, 1.0, street);
  float rough = mix(0.35, 0.03, puddle);
  vec3 spec = vec3(0.0);
  if (p.y > -205.0 && p.y < 2.0 && abs(p.x) < 270.0) {
    float s = 0.0, sg = 0.0;
    float shin = mix(60.0, 900.0, puddle);
    for (int i = 0; i < 48; i++) {
      vec4 l = uAve[i];
      if (l.w <= 0.0) continue;
      vec3 d = vec3(l.x, l.y, l.z) - P;
      float r2 = dot(d, d);
      vec3 ld = d * inversesqrt(r2);
      s += l.w * max(d.y, 0.0) / (r2 * sqrt(r2) + 1.0);
      vec3 hv = normalize(ld - V);
      sg += l.w * pow(max(hv.y, 0.0), shin) * (shin + 8.0) * 0.010 * max(ld.y, 0.0) / (r2 + 1.0);
    }
    lampL += vec3(1.0, 0.42, 0.11) * s;
    spec = vec3(1.0, 0.45, 0.13) * sg * mix(0.35, 1.0, puddle);
  }
  vec3 L = exLight(P, N) + lampL;
  vec3 col = alb * L + wetReflect(V, N, rough) * wetK + spec + exSpec(P, N, V, mix(60.0, 700.0, puddle)) * wetK * 0.25;
  col = applyHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function ke(t, i) {
  const a = [],
    e = [];
  for (let p = -1; p <= 1; p += 2)
    for (let b = 0; b <= 44; b++) {
      const N = b / 44;
      a.push(p * (N * N * 1180 + N * 280));
    }
  for (let p = 0; p <= 70; p++) {
    const b = p / 70;
    e.push(-(b * b * 1150 + b * 320));
  }
  for (let p = 1; p <= 12; p++) e.push(p * 45);
  const s = [...new Set(a.map((p) => Math.round(p * 10) / 10))].sort(
      (p, b) => p - b,
    ),
    l = [...new Set(e.map((p) => Math.round(p * 10) / 10))].sort(
      (p, b) => p - b,
    ),
    d = [],
    v = [];
  for (let p = 0; p < l.length; p++)
    for (let b = 0; b < s.length; b++) {
      const N = s[b],
        o = l[p];
      let u = t0(N, o);
      d.push(N, u, o);
    }
  for (let p = 0; p < l.length - 1; p++)
    for (let b = 0; b < s.length - 1; b++) {
      const N = p * s.length + b,
        o = N + 1,
        u = N + s.length,
        z = u + 1;
      v.push(N, u, o, o, u, z);
    }
  const x = new z0();
  if (
    (x.setAttribute("position", new o0(d, 3)),
    x.setIndex(v),
    x.computeVertexNormals(),
    x.attributes.normal.getY(0) < 0)
  ) {
    for (let p = 0; p < v.length; p += 3) {
      const b = v[p + 1];
      ((v[p + 1] = v[p + 2]), (v[p + 2] = b));
    }
    (x.setIndex(v), x.computeVertexNormals());
  }
  const k = n0({
      vertexShader: be,
      fragmentShader: Me,
      uniforms: {
        ...i,
        uAve: { value: Array.from({ length: ze }, () => new T0()) },
      },
    }),
    m = new e0(x, k);
  return (
    (m.name = "city_ground"),
    (m.frustumCulled = !1),
    { mesh: m, mat: k }
  );
}
const Se = `
attribute vec4 aOrigin;
attribute vec4 aDims;
attribute vec4 aStyle;
attribute vec4 aLight;
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vNl;
varying vec3 vNw;
varying vec4 vDims;
varying vec4 vStyle;
varying vec4 vLight;
varying float vRot;
void main() {
  vec4 wp = vec4(position, 1.0);
  vec3 n = normal;
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  n = mat3(instanceMatrix) * n;
#endif
  wp = modelMatrix * wp;
  n = normalize(mat3(modelMatrix) * n);
  vWorld = wp.xyz;
  vNw = n;
  float c = cos(aOrigin.w), s = sin(aOrigin.w);
  vec3 rel = wp.xyz - aOrigin.xyz;
  vLocal = vec3(c * rel.x - s * rel.z, rel.y, s * rel.x + c * rel.z);
  vNl = vec3(c * n.x - s * n.z, n.y, s * n.x + c * n.z);
  vDims = aDims; vStyle = aStyle; vLight = aLight; vRot = aOrigin.w;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Pe = `
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vNl;
varying vec3 vNw;
varying vec4 vDims;
varying vec4 vStyle;
varying vec4 vLight;
varying float vRot;
uniform float uDetail;
${c0}
${m0}
${N0}

vec3 toneColor(float tone, float s) {
  float fam = floor(tone * 4.0);
  float v = fract(tone * 4.0);
  vec3 c;
  if (fam < 0.5) c = mix(vec3(0.150, 0.060, 0.042), vec3(0.100, 0.052, 0.042), v);
  else if (fam < 1.5) c = mix(vec3(0.260, 0.215, 0.165), vec3(0.180, 0.160, 0.140), v);
  else if (fam < 2.5) c = mix(vec3(0.190, 0.185, 0.175), vec3(0.120, 0.125, 0.130), v);
  else c = mix(vec3(0.040, 0.045, 0.052), vec3(0.060, 0.058, 0.056), v);
  return c * (0.80 + 0.40 * s);
}

void main() {
  vec3 P = vWorld;
  vec3 V = normalize(P - cameraPosition);
  vec3 N = normalize(vNw);
  vec3 Nl = normalize(vNl);
  float seed = abs(vDims.w);
  float kind = vStyle.w;
  vec3 alb = vec3(0.1);
  vec3 emit = vec3(0.0);
  float wetK = 0.18;
  float rough = 0.6;

  if (kind < 0.5 && abs(Nl.y) < 0.5) {
    // ============================================================== a facade with windows
    vec3 Fn = abs(Nl.z) > abs(Nl.x) ? vec3(0.0, 0.0, sign(Nl.z)) : vec3(sign(Nl.x), 0.0, 0.0);
    vec3 T = cross(vec3(0.0, 1.0, 0.0), Fn);
    float W = abs(Fn.z) > 0.5 ? vDims.x : vDims.z;
    float u = dot(vLocal, T) + 0.5 * W;
    float v = vLocal.y;
    float faceId = Fn.x + 2.0 * Fn.z + 3.0;
    bool blank = vDims.w < 0.0 && abs(Fn.x) > 0.5;
    float flH = vStyle.x;
    float fam = floor(vStyle.z * 4.0);
    float gH = flH * 1.3;
    float topV = vDims.y - 1.25;
    float nb = max(1.0, floor(W / vStyle.y + 0.5));
    float bw = W / nb;
    float ci = floor(u / bw);
    float fu = u - ci * bw;
    float fy = v - gH;
    float fi = fy < 0.0 ? 0.0 : floor(fy / flH) + 1.0;
    float yIn = fy < 0.0 ? v : fy - (fi - 1.0) * flH;
    float thisH = fy < 0.0 ? gH : flH;
    float glassy = step(2.5, fam);
    float ww = bw * mix(0.40 + 0.22 * exHash12(vec2(seed, 3.1)), 0.90, glassy);
    float wx0 = 0.5 * (bw - ww);
    float wy0 = fi < 0.5 ? 0.30 : mix(0.85, 0.28, glassy);
    float wy1 = thisH - (fi < 0.5 ? 0.80 : mix(0.45, 0.18, glassy));
    float wh = wy1 - wy0;
    vec2 fw = max(vec2(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v)))), vec2(1e-4));
    float inX = smoothstep(wx0 - fw.x, wx0 + fw.x, fu) - smoothstep(wx0 + ww - fw.x, wx0 + ww + fw.x, fu);
    float inY = smoothstep(wy0 - fw.y, wy0 + fw.y, yIn) - smoothstep(wy1 - fw.y, wy1 + fw.y, yIn);
    float onFace = step(0.2, v) * (1.0 - smoothstep(topV - fw.y, topV + fw.y, v));
    float winM = clamp(inX, 0.0, 1.0) * clamp(inY, 0.0, 1.0) * onFace * (blank ? 0.0 : 1.0);
    float cov = (ww / bw) * (wh / thisH);
    float lod = smoothstep(0.35, 0.95, max(fw.x / ww, fw.y / wh));

    // ---- what is behind this window
    float h1 = exHash13(vec3(ci + 0.37, fi + 0.71, faceId * 7.13 + seed * 17.31));
    float h2 = fract(h1 * 91.7 + 0.33);
    float h3 = fract(h1 * 53.1 + 0.71);
    float burnRow = step(0.5, vLight.z) * step(vLight.y - 0.01, fi) * step(fi, vLight.y + vLight.z - 0.99);
    float nearBurn = step(0.5, vLight.z) * step(vLight.y - 1.01, fi) * step(fi, vLight.y + vLight.z + 0.01);
    vec3 R = reflect(V, N);
    R.y = abs(R.y) * 0.6 + 0.02;
    float fres = 0.05 + 0.95 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);
    vec3 glassRefl = skyBase(normalize(R)) * fres * (0.5 + 1.0 * h3);
    vec3 wEmit = vec3(0.0025, 0.0028, 0.0035);
    float lit = step(h1, vLight.x) * (1.0 - burnRow);
    float broken = step(h3, vLight.w) * (1.0 - lit);
    if (burnRow > 0.5) {
      // a burning storey: some windows roar, some glow through smoke, some are black
      if (h2 < 0.36) {
        float n = exFbm3(vec2(u * 1.4, v * 0.8 - uTime * 2.3) + seed * 3.0);
        float fl = n * 1.35 - (yIn - wy0) / wh * 0.55 + 0.22;
        wEmit = mix(vec3(1.0, 0.14, 0.02), vec3(2.8, 0.85, 0.16), smoothstep(0.45, 0.95, fl)) * smoothstep(0.08, 0.5, fl) + vec3(0.16, 0.02, 0.004);
      } else if (h2 < 0.72) {
        wEmit = vec3(0.30, 0.040, 0.008) * (0.55 + 0.45 * exNoise(vec2(uTime * 1.7, h1 * 30.0))) * (0.6 + 0.4 * smoothstep(wy1, wy0, yIn));
      } else wEmit = vec3(0.002);
      glassRefl = vec3(0.0);
    } else if (lit > 0.5) {
      vec3 lc = h2 < 0.64 ? vec3(1.0, 0.50, 0.19) : h2 < 0.86 ? vec3(1.0, 0.34, 0.09) * 0.5 : vec3(0.42, 0.56, 1.0) * 0.7;
      float fl = 1.0;
      if (h2 >= 0.86) fl = 0.45 + 0.55 * exNoise(vec2(uTime * 7.0, h1 * 50.0));
      else if (h2 >= 0.64) fl = 0.78 + 0.22 * exNoise(vec2(uTime * 3.0, h1 * 40.0));
      else if (h3 < 0.14) fl = 0.15 + 0.85 * step(0.28, exNoise(vec2(uTime * 8.0, h1 * 70.0)));
      float lum = (0.30 + 0.70 * h3) * fl * 0.85;
      wEmit = lc * lum * (0.55 + 0.45 * smoothstep(wy0, wy1, yIn));
      if (uDetail > 0.5 && ww / fw.x > 7.0 && glassy < 0.5) {
        // the room behind the glass (interior mapping): back wall, floor, ceiling, side walls, lit by one lamp
        vec3 Vl = vec3(cos(vRot) * V.x - sin(vRot) * V.z, V.y, sin(vRot) * V.x + cos(vRot) * V.z);
        vec3 rd = vec3(dot(Vl, T), Vl.y, -dot(Vl, Fn));
        rd.z = max(rd.z, 0.02);
        vec3 ro = vec3(fu, yIn, 0.0);
        float depth = 3.2 + 3.0 * h3;
        vec3 t1 = (vec3(0.0, 0.0, 0.0) - ro) / rd;
        vec3 t2 = (vec3(bw, thisH, depth) - ro) / rd;
        vec3 tf = max(t1, t2);
        float t = min(min(tf.x, tf.y), tf.z);
        vec3 hp = ro + rd * t;
        vec3 lampP = vec3(bw * (0.3 + 0.4 * h2), thisH - 0.4, depth * 0.5);
        vec3 dl = hp - lampP;
        float fall = 1.0 / (1.0 + dot(dl, dl) * 0.30);
        vec3 surf;
        if (t == tf.z) {
          surf = mix(vec3(0.55, 0.44, 0.34), vec3(0.42, 0.25, 0.20), h2);
          float furn = step(hp.y, 0.9 + 0.8 * h1) * step(abs(hp.x - bw * (0.2 + 0.6 * h3)), 0.6 + 0.6 * h2);
          surf *= 1.0 - 0.75 * furn;
          float pic = step(abs(hp.x - bw * 0.5), 0.35) * step(abs(hp.y - 1.75), 0.25);
          surf *= 1.0 - 0.5 * pic * step(0.5, h2);
        } else if (t == tf.y) surf = rd.y > 0.0 ? vec3(0.62, 0.57, 0.50) : vec3(0.16, 0.10, 0.065);
        else surf = vec3(0.45, 0.38, 0.31);
        wEmit = lc * lum * surf * fall * 2.6;
        // curtains drawn part-way (lit from behind)
        float cs = h2 > 0.5 ? (fu - wx0) : (wx0 + ww - fu);
        float cw = ww * (0.12 + 0.34 * h3);
        float curt = 1.0 - smoothstep(cw - 0.04, cw + 0.04, cs + 0.05 * sin(yIn * 11.0 + h1 * 20.0));
        wEmit = mix(wEmit, lc * lum * vec3(0.95, 0.42, 0.28) * 0.40 * (0.7 + 0.3 * sin(fu * 40.0 + h1 * 9.0)), curt * step(0.25, h1 * 3.1 - floor(h1 * 3.1)));
      }
      glassRefl *= 0.25;
    } else if (broken > 0.5) {
      float sh = step(0.62, exNoise(vec2(fu, yIn) * 9.0 + h1 * 30.0));
      float edge = 1.0 - smoothstep(0.0, 0.18, min(min(fu - wx0, wx0 + ww - fu), min(yIn - wy0, wy1 - yIn)));
      glassRefl *= sh * edge * 1.5;
      wEmit = vec3(0.0008);
    } else {
      wEmit += vec3(0.010, 0.006, 0.0035) * step(0.82, h3) * step(0.5, h2);
    }
    // ---- the wall around it
    vec3 wall = toneColor(vStyle.z, exNoise(vec2(u * 0.13, v * 0.11) + seed * 7.0));
    if (glassy > 0.5) wall = mix(wall, vec3(0.020, 0.022, 0.026), 0.6);
    float streak = exNoise(vec2(u * 1.6, v * 0.07) + seed * 5.0);
    float grime = smoothstep(0.45, 0.85, streak) * 0.30;
    float under = step(yIn, wy0) * (1.0 - smoothstep(0.0, 1.4, wy0 - yIn)) * (1.0 - smoothstep(ww * 0.25, ww * 0.6, abs(fu - bw * 0.5)));
    float base = 1.0 - smoothstep(0.0, gH * 1.2, v);
    // storey lines + a painted cornice band when there is no real one
    float band = (1.0 - smoothstep(0.0, 0.10 + fw.y, abs(yIn - thisH + 0.12))) * 0.20 * (1.0 - glassy);
    float capBand = smoothstep(topV - 0.25, topV, v) * (1.0 - step(topV + 0.9, v)) * 0.25;
    wall *= (1.0 - grime - under * 0.28 - base * 0.25) * (1.0 + band + capBand);
    // soot above burning and burnt windows
    float sootCol = 1.0 - smoothstep(ww * 0.2, ww * 0.9 + (yIn - wy1) * 0.4, abs(fu - bw * 0.5));
    float soot = nearBurn * sootCol * smoothstep(wy0, wy1 + 0.5, yIn + 0.5) ;
    wall *= 1.0 - 0.85 * clamp(soot, 0.0, 1.0);
    // shutters on some shop fronts
    if (fi < 0.5) {
      float shut = step(0.55, h2);
      wEmit = mix(wEmit, vec3(0.0), shut * 0.9);
      glassRefl *= 1.0 - shut;
      wall = mix(wall, vec3(0.09, 0.09, 0.095) * (0.8 + 0.2 * step(0.5, fract(yIn * 6.0))), shut * winM);
    }
    // LOD: a window smaller than a pixel becomes its average
    vec3 winAvg = vec3(0.0035) + skyBase(normalize(R)) * fres * 0.9 + vec3(1.0, 0.48, 0.18) * vLight.x * 0.35 * uDetail;
    vec3 wEm = mix(wEmit + glassRefl, winAvg, lod);
    float wM = mix(winM, cov * onFace * (blank ? 0.0 : 1.0), lod);
    alb = wall * (1.0 - wM);
    emit = wEm * wM;
    // the glow of a burning storey on the wall around it
    if (vLight.z > 0.5) {
      float fb = vLight.y * flH + gH - flH;
      float ft = fb + vLight.z * flH;
      float d = max(max(fb - v, v - ft), 0.0);
      float flick = 0.75 + 0.25 * exNoise(vec2(uTime * 5.0, seed));
      float colMask = 0.55 + 0.45 * smoothstep(bw * 0.5, 0.0, abs(fu - bw * 0.5));
      emit += alb * vec3(2.4, 0.55, 0.12) * exp(-d / 1.3) * flick * colMask * (1.0 - wM);
    }
    wetK = 0.06;
    rough = 0.5;
  } else if (Nl.y > 0.5) {
    // ============================================================== roofs: tar and gravel, puddles, a coping at the edge
    vec2 rp = P.xz;
    float n = exFbm3(rp * 0.21 + seed * 3.0);
    alb = vec3(0.060, 0.056, 0.054) * (0.65 + 0.7 * n);
    if (kind > 1.5 && kind < 2.5) alb = vec3(0.085, 0.060, 0.045);
    if (kind > 2.5) alb = vec3(0.030, 0.030, 0.032);
    vec2 hd = vec2(vDims.x, vDims.z) * 0.5;
    float edge = min(hd.x - abs(vLocal.x), hd.y - abs(vLocal.z));
    float cope = 1.0 - smoothstep(0.15, 0.45, edge);
    alb = mix(alb, toneColor(vStyle.z, 0.5) * 1.1, cope * step(kind, 0.5));
    float puddle = smoothstep(0.52, 0.72, exNoise(rp * 0.28 + seed * 9.0));
    wetK = (0.20 + 0.75 * puddle * (1.0 - cope)) * (uDetail > 0.9 ? 1.0 : 0.5);
    rough = mix(0.5, 0.06, puddle);
    if (kind > 3.5 && kind < 4.5) {
      // paving slabs, 0.6 m, dark joints, wet
      vec2 sl = rp / 0.6; vec2 f = abs(fract(sl) - 0.5);
      float joint = smoothstep(0.44, 0.5, max(f.x, f.y));
      alb = vec3(0.105, 0.100, 0.094) * (0.75 + 0.5 * exHash12(floor(sl))) * (1.0 - joint * 0.55) * (0.8 + 0.4 * n);
      puddle = smoothstep(0.58, 0.78, exNoise(rp * 0.5 + 4.0));
      wetK = 0.25 + 0.6 * puddle; rough = mix(0.3, 0.05, puddle);
    } else if (kind > 4.5) {
      float leaf = step(0.55, exNoise(rp * 3.1));
      alb = mix(vec3(0.050, 0.038, 0.026), vec3(0.085, 0.052, 0.024), leaf) * (0.7 + 0.6 * n); wetK = 0.15; rough = 0.6;
    }
  } else {
    // ============================================================== plain parts: cornices, bulkheads, tanks, iron
    float n = exNoise(P.xz * 0.9 + P.y * 0.7 + seed);
    if (kind < 1.5) {
      alb = toneColor(vStyle.z, n) * 0.95;
      float streak = exNoise(vec2(dot(P.xz, vec2(0.7, 0.7)) * 1.5, P.y * 0.12) + seed);
      alb *= 1.0 - 0.3 * smoothstep(0.5, 0.9, streak);
    } else if (kind < 2.5) {
      float around = atan(vLocal.x, vLocal.z) * 11.0;
      float stave = 0.8 + 0.2 * step(0.12, fract(around));
      float hoop = 1.0 - 0.6 * step(0.93, fract(vLocal.y * 1.4));
      alb = vec3(0.090, 0.058, 0.040) * stave * hoop * (0.8 + 0.4 * n);
    } else if (kind < 3.5) {
      alb = vec3(0.026, 0.025, 0.026) * (0.8 + 0.4 * n);
      wetK = 0.35; rough = 0.3;
    } else {
      alb = vec3(0.13, 0.125, 0.12) * (0.8 + 0.4 * n);
      wetK = 0.2; rough = 0.4;
    }
  }

  vec3 L = exLight(P, N);
  vec3 col = alb * L + emit + wetReflect(V, N, rough) * wetK;
  if (uDetail > 0.9 && N.y > 0.5) col += exSpec(P, N, V, mix(40.0, 600.0, 1.0 - rough)) * wetK * 0.3;
  col = applyHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function S0(t, i) {
  return n0({
    vertexShader: Se,
    fragmentShader: Pe,
    uniforms: { ...t, uDetail: { value: i } },
  });
}
function H0(t) {
  const i = t.flH ?? 3.3,
    a = t.storeys ?? 6,
    e = t.h ?? i * 1.3 + (a - 1) * i + 1.25;
  return {
    rot: 0,
    bay: 3.2,
    tone: 0.1,
    seed: 1,
    lit: 0.06,
    burnF: 0,
    burnN: 0,
    dmg: 0.05,
    blank: !1,
    ...t,
    flH: i,
    h: e,
  };
}
function F0(t, i, a, e) {
  return (
    Math.min(
      t0(t - a / 2, i - e / 2),
      t0(t + a / 2, i - e / 2),
      t0(t - a / 2, i + e / 2),
      t0(t + a / 2, i + e / 2),
    ) - 0.6
  );
}
function Ae(t) {
  const i = [],
    a = [],
    e = [],
    s = [],
    l = (y, H) => y + (H - y) * t(),
    d = (y) => y[Math.floor(t() * y.length)],
    v = (y) => (y + 0.05 + t() * 0.9) / 4,
    x = (y) => (y === 3 ? 3.7 : y === 2 ? 3.1 + t() * 0.3 : 3.25 + t() * 0.5),
    n = C.zN,
    k = -66,
    m = [
      [-206.5, -178, 8, 0, 0.1],
      [-178, -150, 11, 1, 0.06],
      [-150, -126, 6, 0, 0.12],
      [-126, -104.5, 9, 2, 0.05],
      [-88.5, -52, 8, 0, 0.1],
      [-52, -26, 18, 1, 0.13, { tall: !0, open: !0 }],
      [-26, 13.5, 3, 0, 0.16, { tank: !0 }],
      [29.5, 52, 9, 0, 0.08, { burn: [6, 1] }],
      [52, 77, 12, 2, 0.06],
      [77, 101, 6, 0, 0.11],
      [101, 131.5, 10, 1, 0.07],
      [147.5, 180, 8, 0, 0.09],
      [180, 212, 14, 2, 0.05],
      [212, 249.5, 7, 1, 0.08],
    ];
  for (const [y, H, c, w, h, g = {}] of m) {
    const M = H - y,
      R = n - k,
      A = (y + H) / 2,
      _ = (n + k) / 2,
      D = x(w);
    i.push(
      H0({
        x: A,
        z: _,
        w: M,
        d: R,
        base: F0(A, _, M, R),
        storeys: c,
        flH: D,
        bay: w === 1 ? 3.6 : 3.1,
        tone: v(w),
        seed: (g.open ? 1 : -1) * (1 + i.length * 7.3),
        lit: h,
        dmg: 0.1,
        burnF: g.burn ? g.burn[0] : 0,
        burnN: g.burn ? g.burn[1] : 0,
        ex: g,
      }),
    );
  }
  const p = [
    [-206.5, -170, 7, 1, 0.06],
    [-170, -135, 10, 0, 0.08],
    [-135, -104.5, 6, 2, 0.05],
    [-88.5, -60, 6, 0, 0.09],
    [-60, -30, 10, 1, 0.06],
    [-30, -0.2, 8, 0, 0.08],
    [29.5, 60, 3, 0, 0.1],
    [60, 95, 4, 1, 0.08],
    [95, 131.5, 6, 0, 0.09],
    [147.5, 190, 11, 2, 0.05],
    [190, 249.5, 8, 0, 0.08],
  ];
  for (const [y, H, c, w, h] of p) {
    const g = H - y,
      M = 24,
      R = (y + H) / 2,
      A = C.zS + M / 2;
    i.push(
      H0({
        x: R,
        z: A,
        w: g,
        d: M,
        base: F0(R, A, g, M),
        storeys: c,
        flH: x(w),
        bay: 3.2,
        tone: v(w),
        seed: -(3 + i.length * 5.1),
        lit: h,
        dmg: 0.08,
      }),
    );
  }
  const b = { x: 60, z: -1130, r: 300 },
    N = new E0(3, 2),
    o = [];
  for (let y = 0; y < 17; y++) o.push([-142 - 76 * y, -82 - 76 * y]);
  const u = [
      [76, 136],
      [152, 212],
      [228, 288],
      [304, 364],
    ],
    z = [
      [k, n, "nrow"],
      [C.zS, 24, "srow"],
      [24, 60, "sback"],
    ],
    f = [];
  for (let y = -12; y <= 11; y++)
    f.push([Y.x1 + y0.dx * y, Y.x0 + y0.dx * (y + 1)]);
  const L = (y, H, c, w, h) => {
    const g = w - c > 40 ? 2 : 1;
    for (let M = 0; M < g; M++) {
      const R = c + ((w - c) * M) / g,
        A = c + ((w - c) * (M + 1)) / g;
      let _ = y;
      for (; _ < H - 6;) {
        let D = l(12, 30);
        H - (_ + D) < 12 && (D = H - _);
        const j = _ + D / 2,
          U = (R + A) / 2;
        _ += D;
        const K = Math.hypot(j - N.x, U - N.y);
        if (K > 1380 || t() < 0.05) continue;
        const E = l(0.3, 1.8),
          Q = D - E * 2,
          G = A - R - E * 2,
          i0 = Math.hypot(j - b.x, U - b.z);
        let r0 = d([0, 0, 0, 1, 1, 2, 2]),
          J;
        const v0 = -U;
        if (i0 < b.r) {
          const r = 1 - i0 / b.r;
          ((J = Math.round(l(8, 22) + r * r * l(10, 45))),
            (r0 = t() < 0.45 * r + 0.1 ? 3 : d([1, 2, 2])));
        } else
          v0 > 0 && v0 < 290
            ? (J = Math.round(l(2, 5.6)))
            : K < 450
              ? (J = Math.round(l(3, 8) + (t() < 0.04 ? l(4, 12) : 0)))
              : (J = Math.round(l(3, 11) + (t() < 0.05 ? l(8, 20) : 0)));
        h === "south" && (J = Math.round(l(3, 8)));
        const u0 = x(r0),
          q = H0({
            x: j,
            z: U + l(-0.8, 0.8),
            w: Q,
            d: G,
            base: F0(j, U, Q, G),
            storeys: J,
            flH: u0,
            bay: r0 === 3 ? 2.4 : l(2.8, 3.8),
            tone: v(r0),
            seed: 1 + t() * 97,
            lit: r0 === 3 ? l(0.01, 0.06) : l(0.015, 0.12),
            dmg: l(0.03, 0.18),
          });
        if (((K < 470 ? a : e).push(q), K < 520 && r0 !== 3)) {
          const r = q.base + q.h;
          if (
            (t() < 0.55 &&
              s.push({
                type: "box",
                x: j + l(-Q, Q) * 0.25,
                z: q.z + l(-G, G) * 0.25,
                w: l(2.5, 4.5),
                d: l(2.5, 4),
                h: l(2.4, 3.4),
                y: r,
                tone: q.tone,
                seed: q.seed,
              }),
            t() < 0.3 &&
              s.push({
                type: "tank",
                x: j + l(-Q, Q) * 0.3,
                z: q.z + l(-G, G) * 0.3,
                r: l(1.6, 2.4),
                h: l(3.2, 4.5),
                legs: l(3, 5),
                y: r,
                seed: q.seed,
              }),
            t() < 0.35)
          )
            for (let S = 0; S < 1 + Math.floor(t() * 3); S++)
              s.push({
                type: "box",
                x: j + l(-Q, Q) * 0.35,
                z: q.z + l(-G, G) * 0.35,
                w: l(1.2, 2.2),
                d: l(0.9, 1.6),
                h: l(0.9, 1.5),
                y: r,
                tone: 0.6,
                seed: q.seed,
              });
        }
      }
    }
  };
  for (const [y, H] of f) {
    for (const [c, w] of o) L(y, H, c, w, "north");
    for (const [c, w] of u)
      Math.abs((y + H) / 2) < 700 && L(y, H, c, w, "south");
    if (H < -206.5 || y > 249.5)
      for (const [c, w] of z) L(y, H, c, w, c > 0 ? "south" : "north");
    else L(y, H, 24, 60, "south");
  }
  const P = H0({
    x: 96,
    z: -238,
    w: 24,
    d: 22,
    storeys: 22,
    flH: 3.4,
    bay: 3,
    tone: 0.3,
    seed: 51,
    lit: 0,
    dmg: 0.35,
    burnF: 15,
    burnN: 5,
  });
  P.base = F0(P.x, P.z, P.w, P.d);
  const F = (y) => {
    for (let H = y.length - 1; H >= 0; H--) {
      const c = y[H];
      Math.abs(c.x - P.x) < (c.w + P.w) / 2 + 2 &&
        Math.abs(c.z - P.z) < (c.d + P.d) / 2 + 2 &&
        y.splice(H, 1);
    }
  };
  (F(a), F(e));
  for (let y = s.length - 1; y >= 0; y--)
    Math.abs(s[y].x - P.x) < 16 &&
      Math.abs(s[y].z - P.z) < 16 &&
      s.splice(y, 1);
  a.push(P);
  const I = [],
    T = (y, H, c, w, h, g) => {
      let M = 0;
      for (let R = 0; R < 800 && M < H; R++) {
        const A = y[Math.floor(t() * y.length)];
        if (!A || A.burnN) continue;
        const _ = Math.atan2(A.x - 2.75, -(A.z - 2.4)),
          D = Math.hypot(A.x - 2.75, A.z - 2.4);
        if (Math.abs(_ - c) > w || D < h || D > g) continue;
        const j = Math.max(2, Math.round((A.h - A.flH * 1.3 - 1.25) / A.flH));
        ((A.burnF = 1 + Math.floor(t() * Math.max(1, j - 2))),
          (A.burnN = 1 + Math.floor(t() * 3)),
          (A.dmg = 0.3),
          I.push(A),
          M++);
      }
    };
  return (
    T(a, 5, 0.3, 0.35, 120, 460),
    T(a, 3, -0.45, 0.3, 120, 460),
    T(e, 10, 0.35, 0.4, 470, 1300),
    T(e, 6, -0.45, 0.35, 470, 1300),
    T(e, 5, 1.5, 0.45, 300, 1300),
    T(a, 3, 1.5, 0.45, 100, 460),
    { near: i, mid: a, far: e, tops: s, tower: P, fires: I }
  );
}
function M0(t, i, a, e, s) {
  const l = i.length,
    d = new W0(t, a, l),
    v = {
      aOrigin: new Float32Array(l * 4),
      aDims: new Float32Array(l * 4),
      aStyle: new Float32Array(l * 4),
      aLight: new Float32Array(l * 4),
    },
    x = new a0();
  i.forEach((n, k) => {
    (e(n, x), d.setMatrixAt(k, x));
    const m = s(n);
    for (const p of Object.keys(v)) v[p].set(m[p], k * 4);
  });
  for (const n of Object.keys(v)) t.setAttribute(n, new f0(v[n], 4));
  return (
    (d.instanceMatrix.needsUpdate = !0),
    d.computeBoundingSphere(),
    (d.frustumCulled = !1),
    d
  );
}
const O0 = (t, i = 0) => ({
    aOrigin: [t.x, t.base, t.z, t.rot],
    aDims: [t.w, t.h, t.d, t.blank ? -Math.abs(t.seed) : t.seed],
    aStyle: [t.flH, t.bay, t.tone, i],
    aLight: [t.lit, t.burnF, t.burnN, t.dmg],
  }),
  U0 = (t, i) => {
    const a = new s0().setFromAxisAngle(new B(0, 1, 0), t.rot);
    return i.compose(
      new B(t.x, t.base + t.h / 2, t.z),
      a,
      new B(t.w, t.h, t.d),
    );
  };
function Ne(t, i, a) {
  const e = new b0();
  e.name = "city";
  const s = S0(i, 1),
    l = S0(i, 0.6),
    d = S0(i, 0),
    v = (f, L) => Math.hypot(f.x - 3, f.z - 2) - Math.hypot(L.x - 3, L.z - 2);
  (a.mid.sort(v), a.far.sort(v));
  const x = M0(new $(1, 1, 1), a.mid, l, U0, (f) => O0(f));
  x.name = "city_mid";
  const n = M0(new $(1, 1, 1), a.far, d, U0, (f) => O0(f));
  ((n.name = "city_far"), e.add(x, n));
  const k = a.tops.filter((f) => f.type === "box"),
    m = a.tops.filter((f) => f.type === "tank"),
    p = M0(
      new $(1, 1, 1),
      k,
      l,
      (f, L) =>
        L.compose(
          new B(f.x, f.y + f.h / 2, f.z),
          new s0(),
          new B(f.w, f.h, f.d),
        ),
      (f) => ({
        aOrigin: [f.x, f.y, f.z, 0],
        aDims: [f.w, f.h, f.d, f.seed],
        aStyle: [3, 3, f.tone, 1],
        aLight: [0, 0, 0, 0],
      }),
    ),
    b = X0([
      new d0(0.5, 0.5, 1, 18, 1, !1).translate(0, 0.5, 0),
      new ee(0.56, 0.32, 18, 1).translate(0, 1.16, 0),
    ]),
    N = M0(
      b,
      m,
      l,
      (f, L) =>
        L.compose(
          new B(f.x, f.y + f.legs, f.z),
          new s0(),
          new B(f.r * 2, f.h, f.r * 2),
        ),
      (f) => ({
        aOrigin: [f.x, f.y + f.legs, f.z, 0],
        aDims: [f.r * 2, f.h, f.r * 2, f.seed],
        aStyle: [3, 3, 0.1, 2],
        aLight: [0, 0, 0, 0],
      }),
    ),
    o = X0(
      [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ]
        .map(([f, L]) =>
          new $(0.06, 1, 0.06).translate(f * 0.36, 0.5, L * 0.36),
        )
        .concat([
          new $(0.8, 0.05, 0.05).translate(0, 0.55, -0.36),
          new $(0.8, 0.05, 0.05).translate(0, 0.55, 0.36),
        ]),
    ),
    u = M0(
      o,
      m,
      l,
      (f, L) =>
        L.compose(
          new B(f.x, f.y, f.z),
          new s0(),
          new B(f.r * 2, f.legs, f.r * 2),
        ),
      (f) => ({
        aOrigin: [f.x, f.y, f.z, 0],
        aDims: [f.r * 2, f.legs, f.r * 2, f.seed],
        aStyle: [3, 3, 0.1, 3],
        aLight: [0, 0, 0, 0],
      }),
    );
  ((p.name = "city_roofboxes"),
    (N.name = "city_tanks"),
    (u.name = "city_tanklegs"),
    e.add(p, N, u));
  const z = Le(a.near, s);
  return (
    e.add(z),
    { group: e, mats: [s, l, d], meshes: { mid: x, far: n, near: z } }
  );
}
function X0(t) {
  const i = new p0({});
  for (const a of t) i.add(a, new a0(), {});
  return i.build();
}
function Le(t, i) {
  const a = new p0({ aOrigin: 4, aDims: 4, aStyle: 4, aLight: 4 }),
    e = new a0(),
    s = new s0(),
    l = new B(),
    d = new B(),
    v = (n, k, m, p, b, N, o) => {
      (e.compose(
        d.set((n + p) / 2, (k + b) / 2, (m + N) / 2),
        s.identity(),
        l.set(p - n, b - k, N - m),
      ),
        a.add(He, e, o));
    };
  for (const n of t) {
    const k = O0(n, 0),
      m = n.x - n.w / 2,
      p = n.x + n.w / 2,
      b = n.z - n.d / 2,
      N = n.z + n.d / 2,
      o = n.base + n.h;
    v(m, n.base, b, p, o, N, k);
    const u = { ...k, aStyle: [n.flH, n.bay, n.tone, 1] },
      z = n.z < C.zN + 1,
      f = z ? N : b,
      L = z ? 1 : -1,
      P = (I, T, y) =>
        v(
          m - 0.02,
          I,
          L > 0 ? f - 0.02 : f - T,
          p + 0.02,
          I + y,
          L > 0 ? f + T : f + 0.02,
          u,
        ),
      F = o - 1.25;
    if (
      (P(F - 0.45, 0.22, 0.18),
      P(F - 0.27, 0.42, 0.14),
      P(F - 0.13, 0.62, 0.16),
      v(m - 0.05, o - 0.02, b - 0.05, p + 0.05, o + 0.12, N + 0.05, u),
      P(n.base + n.flH * 1.3 - 0.25 + (n.base < -27.5, 0), 0.18, 0.22),
      v(m, o - 0.02, b, p, o + 0.9, b + 0.3, u),
      v(m, o - 0.02, N - 0.3, p, o + 0.9, N, u),
      v(m, o - 0.02, b, m + 0.3, o + 0.9, N, u),
      v(p - 0.3, o - 0.02, b, p, o + 0.9, N, u),
      v(
        n.x - 2 + n.w * 0.18,
        o,
        n.z - 1.5,
        n.x + 1.2 + n.w * 0.18,
        o + 3,
        n.z + 1.8,
        u,
      ),
      n.ex && n.ex.tank)
    ) {
      const I = n.x + n.w * 0.4,
        T = n.z + 3;
      n.lantern = [I - 2.6, o + 1.1, T + 2.3];
      const y = {
        ...k,
        aOrigin: [I, o, T, 0],
        aDims: [4.2, 2.9 + 1.25, 3.2, 31.7],
        aStyle: [2.9 / 1.3, 2.1, 0.62, 0],
        aLight: [1, 0, 0, 0],
      };
      (v(I - 2.1, o, T - 1.6, I + 2.1, o + 2.9, T + 1.6, y),
        v(I - 2.3, o + 2.9, T - 1.8, I + 2.3, o + 3.05, T + 1.8, {
          ...k,
          aStyle: [3, 3, 0.62, 3],
        }));
      const H = n.x - n.w * 0.3,
        c = n.z - 2,
        w = 4.5,
        h = 2.3,
        g = 4.6,
        M = o + 0.9,
        R = {
          ...k,
          aOrigin: [H, M + w, c, 0],
          aDims: [h * 2, g, h * 2, n.seed],
          aStyle: [3, 3, 0.1, 2],
        };
      (e.compose(d.set(H, M + w, c), s.identity(), l.set(h * 2, g, h * 2)),
        a.add(Y0, e, R));
      const A = { ...k, aStyle: [3, 3, 0.1, 3] };
      for (const [_, D] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        v(
          H + _ * h * 0.7 - 0.09,
          M,
          c + D * h * 0.7 - 0.09,
          H + _ * h * 0.7 + 0.09,
          M + w + 0.1,
          c + D * h * 0.7 + 0.09,
          A,
        );
      for (const _ of [M + 1.5, M + 3.2])
        (v(
          H - h * 0.7,
          _,
          c - h * 0.7 - 0.05,
          H + h * 0.7,
          _ + 0.1,
          c - h * 0.7 + 0.05,
          A,
        ),
          v(
            H - h * 0.7,
            _,
            c + h * 0.7 - 0.05,
            H + h * 0.7,
            _ + 0.1,
            c + h * 0.7 + 0.05,
            A,
          ));
      v(
        H - h * 0.75,
        M + w - 0.1,
        c - h * 0.75,
        H + h * 0.75,
        M + w + 0.05,
        c + h * 0.75,
        A,
      );
    }
    if (n.ex && n.ex.tall) {
      const I = m + 3,
        T = p - 3,
        y = b + 3,
        H = N - 3,
        c = o + n.flH * 3,
        w = {
          ...k,
          aOrigin: [n.x, o, n.z, 0],
          aDims: [T - I, c - o, H - y, -Math.abs(n.seed) - 11],
        };
      v(I, o, y, T, c, H, w);
      const h = { ...w, aStyle: [n.flH, n.bay, n.tone, 1] };
      v(I - 0.3, c - 0.1, y - 0.3, T + 0.3, c + 0.25, H + 0.3, h);
      const g = n.x - 3,
        M = n.z,
        R = 3.5,
        A = 2,
        _ = 4.2,
        D = c + 0.25,
        j = {
          ...k,
          aOrigin: [g, D + R, M, 0],
          aDims: [A * 2, _, A * 2, n.seed],
          aStyle: [3, 3, 0.1, 2],
        };
      (e.compose(d.set(g, D + R, M), s.identity(), l.set(A * 2, _, A * 2)),
        a.add(Y0, e, j));
      const U = { ...k, aStyle: [3, 3, 0.1, 3] };
      for (const [K, E] of [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ])
        v(
          g + K * A * 0.7 - 0.08,
          D,
          M + E * A * 0.7 - 0.08,
          g + K * A * 0.7 + 0.08,
          D + R + 0.1,
          M + E * A * 0.7 + 0.08,
          U,
        );
      v(n.x + 4, c, n.z + 2, n.x + 4.15, c + 9, n.z + 2.15, U);
    }
  }
  const x = new e0(a.build(), i);
  return ((x.name = "city_near"), x);
}
const He = new $(1, 1, 1),
  Y0 = (() => {
    const t = new p0({});
    return (
      t.add(new d0(0.5, 0.5, 1, 20, 1, !1).translate(0, 0.5, 0), new a0(), {}),
      t.add(new ee(0.56, 0.34, 20, 1).translate(0, 1.17, 0), new a0(), {}),
      t.build()
    );
  })(),
  Fe = `
varying vec2 vUv;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Te = `
varying vec2 vUv;
varying vec3 vWorld;
uniform vec2 uSize;
uniform float uSeed;
uniform float uRain;
uniform vec3 uRight;
uniform vec3 uOut;
${c0}
${m0}

vec3 outside(vec3 d) {
  vec3 c = skyBase(d) * 1.3;
  float mc = dot(d, uMoonDir);
  c += vec3(1.0, 0.07, 0.03) * (1.4 * smoothstep(0.9985, 0.9996, mc) + 0.15 * smoothstep(0.985, 0.999, mc));
  if (d.y < -0.015) {
    vec2 q = d.xz / (0.03 - d.y) * 30.0;
    float h = exHash12(floor(q));
    c = c * 0.6 + vec3(1.0, 0.48, 0.18) * step(0.965, h) * 0.20;
  }
  return c;
}
// premultiplied accumulate
void over(inout vec4 acc, vec3 c, float a) { acc.rgb = c * a + acc.rgb * (1.0 - a); acc.a = a + acc.a * (1.0 - a); }

// a bead at c with radii r (pane metres): lens colour + coverage
vec4 bead(vec2 p, vec2 c, vec2 r, vec3 V, vec3 up, float px, float gk) {
  vec2 d = (p - c) / r;
  float l = length(d);
  float aa = px / min(r.x, r.y) * 1.5;
  float cover = 1.0 - smoothstep(1.0 - aa, 1.0, l);
  if (cover <= 0.0) return vec4(0.0);
  vec3 dir = normalize(V - (uRight * d.x + up * d.y) * 0.85);
  vec3 col = outside(dir) * 2.3;
  float rim = smoothstep(0.50, 1.0, l);
  col *= 1.0 - rim * 0.88;
  col += vec3(0.010, 0.012, 0.016) * rim;
  // glints: the room's lamp caught on the front of the bead, the city's glow gathered at its foot
  float g1 = 1.0 - smoothstep(0.0, 0.17 + aa, length(d - vec2(-0.32, 0.38)));
  float g2 = 1.0 - smoothstep(0.0, 0.32 + aa, length(d * vec2(1.0, 1.4) - vec2(0.15, -0.62)));
  col += vec3(1.0, 0.70, 0.42) * g1 * g1 * 1.5 * gk + vec3(1.0, 0.24, 0.07) * g2 * 0.10;
  return vec4(col, cover * 0.92);
}

// a field of static beads on a jittered grid; clearM removes them where a runner wiped the glass
vec4 beads(vec2 p, float cell, float prob, float rMin, float rMax, float sd, vec3 V, vec3 up, float px, float clearM, float spkRate) {
  vec2 ci = floor(p / cell);
  float hp = exHash12(ci + sd * 1.7 + 3.1);
  vec2 h = exHash22(ci + sd);
  float r = mix(rMin, rMax, h.x * h.x);
  vec2 jit = exHash22(ci + sd + 17.3) - 0.5;
  vec2 c = (ci + 0.5) * cell + jit * max(cell - 2.4 * r, 0.0);
  vec2 rr = vec2(r, r * (1.0 + 0.22 * step(0.55, h.y)));
  float clump = 0.30 + 0.70 * smoothstep(0.25, 0.75, exNoise(p * 5.0 + sd));
  float on = step(hp, prob * uRain * clump);
  float gk = (0.15 + 0.85 * h.y * h.y) * (r / rMax);
  vec4 b = on > 0.5 ? bead(p, c - vec2(0.0, 0.15 * r * step(0.55, h.y)), rr, V, up, px, gk) : vec4(0.0);
  float lod = smoothstep(0.10, 0.40, px / cell);
  float avgA = prob * uRain * clump * 3.1416 * (rMin * rMin + rMax * rMax) * 0.4 / (cell * cell) * 0.55;
  vec4 avg = vec4(outside(V) * 1.6, avgA);
  vec4 o = mix(b, avg, lod);
  // too small to draw: some beads still flash their glint as a single sparkling pixel
  vec2 gp = c + vec2(-0.32, 0.38) * rr;
  float spk = (1.0 - smoothstep(0.0, px * 0.9, length(p - gp))) * on * step(1.0 - spkRate, h.y) * lod;
  o = vec4(mix(o.rgb, vec3(1.0, 0.70, 0.42) * 0.9, spk), max(o.a, spk * 0.5));
  o.a *= clearM;
  return o;
}

void main() {
  vec2 p = vUv * uSize;
  vec3 V = normalize(vWorld - cameraPosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec2 fwp = fwidth(p);
  float px = max(max(fwp.x, fwp.y), 1e-5);
  vec4 acc = vec4(0.0);

  // ---- grime: a film, dried streaks, dirt settled along the bottom rail
  float g1 = exFbm3(p * 2.2 + uSeed);
  float g2 = exNoise(vec2(p.x * 70.0, p.y * 2.2) + uSeed * 3.0);
  float g3 = exNoise(p * 26.0 + uSeed);
  float bottom = 1.0 - smoothstep(0.0, 0.22, p.y);
  float edgeD = min(min(p.x, uSize.x - p.x), min(p.y, uSize.y - p.y));
  float corner = 1.0 - smoothstep(0.0, 0.10, edgeD);
  float grime = 0.018 + 0.040 * smoothstep(0.45, 0.85, g1) + 0.030 * smoothstep(0.6, 0.95, g2) * (0.4 + 0.6 * bottom) + 0.05 * bottom * smoothstep(0.3, 0.8, g3) + 0.05 * corner;
  vec3 grimeC = vec3(0.030, 0.026, 0.022) + skyBase(V) * 0.35;
  over(acc, grimeC, grime);

  // ---- runners: a few drops sliding down in fits and starts, each leaving a trail
  float colW = 0.055;
  float ci = floor(p.x / colW);
  float h = exHash12(vec2(ci, uSeed + 0.5));
  float h2 = exHash12(vec2(ci + 3.7, uSeed + 7.7));
  float speed = 0.010 + 0.022 * h2;
  float ph = h * 100.0;
  float t = uTime;
  float prog = speed * (t + 0.40 * sin(t * 0.9 + ph) + 0.22 * sin(t * 2.1 + ph * 1.7)) + h2 * 7.0;
  float H = uSize.y + 0.40;
  float cyc = floor(prog / H);
  float yHead = uSize.y + 0.06 - (prog - cyc * H);
  float runOn = step(0.42, exHash12(vec2(ci + 0.5, cyc + uSeed))) * uRain;
  float x0 = (ci + 0.5) * colW + (exHash12(vec2(ci, cyc + uSeed * 2.0)) - 0.5) * colW * 0.45;
  float xs = x0 + 0.0022 * sin(p.y * 38.0 + ph) + 0.0012 * sin(p.y * 91.0 + ph * 2.0);
  float above = p.y - yHead;
  float tl = 0.10 + 0.30 * h2;
  float inTrail = step(0.0, above) * (1.0 - smoothstep(tl * 0.5, tl, above)) * runOn;
  float clearM = 1.0 - inTrail * (1.0 - smoothstep(0.004, 0.010, abs(p.x - xs)));

  // ---- static beads, two scales
  vec4 b1 = beads(p, 0.0065, 0.55, 0.00035, 0.0011, uSeed * 3.1 + 1.0, V, up, px, clearM, 0.0);
  over(acc, b1.rgb, b1.a);
  vec4 b2 = beads(p, 0.020, 0.40, 0.0012, 0.0030, uSeed * 5.3 + 9.0, V, up, px, clearM, 0.05);
  over(acc, b2.rgb, b2.a);

  // ---- the runner: a wet line with beads left behind, then the head
  if (runOn > 0.0) {
    float w = mix(0.0011, 0.00035, clamp(above / tl, 0.0, 1.0));
    float wpx = max(w, px * 0.5);
    float line = (1.0 - smoothstep(wpx * 0.5, wpx, abs(p.x - xs))) * inTrail * (w / wpx);
    vec3 lc = outside(normalize(V + uRight * sign(p.x - xs) * 0.6)) * 2.0;
    float sheen = 1.0 - smoothstep(0.0, wpx * 0.6, abs(p.x - xs + wpx * 0.3));
    lc += vec3(1.0, 0.70, 0.42) * sheen * 0.18;
    over(acc, lc, line * 0.8 * clamp(0.0015 / px, 0.25, 1.0));
    float by = floor(p.y / 0.011);
    float hb = exHash12(vec2(by, ci + cyc));
    vec2 bc = vec2(xs + (hb - 0.5) * 0.002, (by + 0.5) * 0.011);
    float bOn = step(0.45, hb) * step(yHead + 0.004, bc.y) * step(bc.y, yHead + tl);
    if (bOn > 0.0) { vec4 tb = bead(p, bc, vec2(0.0009 + 0.0007 * hb), V, up, px, 0.4); over(acc, tb.rgb, tb.a); }
    vec2 rH = vec2(0.0024, 0.0031) * (0.85 + 0.45 * h2);
    vec2 hc = vec2(x0 + 0.0022 * sin(yHead * 38.0 + ph) + 0.0012 * sin(yHead * 91.0 + ph * 2.0), yHead);
    vec4 hd = bead(p, hc, rH, V, up, px, 1.0);
    over(acc, hd.rgb, hd.a);
  }
  vec3 col = acc.a > 1e-4 ? acc.rgb / acc.a : vec3(0.0);
  gl_FragColor = vec4(col, acc.a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Re(t, i, a, e, s) {
  const l = n0({
    vertexShader: Fe,
    fragmentShader: Te,
    uniforms: {
      ...t,
      uSize: { value: new E0(i[0], i[1]) },
      uSeed: { value: a },
      uRain: { value: 1 },
      uRight: { value: e.clone() },
      uOut: { value: s.clone() },
    },
    transparent: !0,
    depthWrite: !1,
    side: P0,
  });
  return ((l.name = "rain_glass"), l);
}
function _e(t, i, a) {
  const e = [],
    s = t.shell;
  if (!s) return { panes: e, setIntensity() {} };
  let l = 1;
  for (const d of ["W1", "W2", "W3"]) {
    const v = s.windows[d];
    if (!v) continue;
    const x = v.opening,
      n = x.head - x.sill,
      m = new B(...v.interiorNormal).clone().negate();
    let p = v.glass;
    const b = p.geometry.parameters?.width ?? x.w;
    ((!v.alongX || b < 0.01) &&
      ((p = new e0(new te(x.w, n))),
      p.position.set(...v.center),
      (p.rotation.y = Math.PI / 2),
      (p.name = "rain_" + d),
      a.add(p),
      (v.glass.visible = !1)),
      p.updateMatrixWorld(!0));
    const N = new B(1, 0, 0)
        .applyQuaternion(p.getWorldQuaternion(new s0()))
        .normalize(),
      o = Re(i, [x.w, n], l++ * 7.31, N, m);
    ((p.material = o),
      (p.renderOrder = 10),
      e.push({ id: d, mesh: p, mat: o }));
  }
  return {
    panes: e,
    setIntensity(d) {
      for (const v of e) v.mat.uniforms.uRain.value = d;
    },
  };
}
const Ce = `
attribute vec4 aCol;      // rgb, size in px @720p
attribute vec4 aMode;     // kind, phase, rate, extra
varying vec3 vCol;
varying float vSharp;
uniform float uPx;
${c0}
${m0}
uniform float uHazeK;
float hazeAmtV(vec3 P, float dist) { float low = smoothstep(-40.0, -150.0, P.y); return 1.0 - exp(-dist * uHazeK * (1.0 + 0.6 * low)); }
void main() {
  vec3 P = position;
  float kind = aMode.x, ph = aMode.y, rate = aMode.z;
  float k = 1.0;
  if (kind > 0.5 && kind < 1.5) {                       // aircraft warning: slow on/off
    float c = fract(uTime * rate + ph);
    k = smoothstep(0.0, 0.08, c) * (1.0 - smoothstep(0.45, 0.55, c));
  } else if (kind > 1.5 && kind < 2.5) {                // gunfire: bursts of pops, long silences
    float slot = floor(uTime / 7.0 + ph);
    float live = step(0.55, exHash12(vec2(slot, ph * 13.0)));
    float lt = fract(uTime / 7.0 + ph) * 7.0;
    float pops = step(lt, 1.6 + 1.4 * exHash12(vec2(slot, ph)));
    float pop = step(0.72, exHash12(vec2(floor(uTime * 11.0), ph * 31.0 + slot)));
    k = live * pops * pop;
  } else if (kind > 2.5 && kind < 3.5) {                // fire flicker
    k = 0.65 + 0.35 * exNoise(vec2(uTime * rate, ph * 17.0));
  } else if (kind > 3.5 && kind < 4.5) {                // police: red / blue alternating (extra = 0 red, 1 blue)
    float c = fract(uTime * rate + ph + aMode.w * 0.5);
    k = step(c, 0.25) * (0.6 + 0.4 * step(fract(uTime * rate * 4.0), 0.5));
  } else if (kind > 4.5 && kind < 5.5) {                // a failing lamp
    k = 0.2 + 0.8 * step(0.3, exNoise(vec2(uTime * rate, ph * 9.0)));
  }
  vec3 D = P - cameraPosition;
  float dist = length(D);
  // pull toward the eye so a point on a facade never fights the wall behind it
  vec3 Pp = P - D / max(dist, 1e-3) * min(3.0, dist * 0.02);
  vec4 mv = viewMatrix * vec4(Pp, 1.0);
  gl_Position = projectionMatrix * mv;
  float hz = hazeAmtV(P, dist);
  vCol = aCol.rgb * k * (1.0 - 0.85 * hz);
  float sz = aCol.a * uPx;
  gl_PointSize = max(sz, 1.0) * 2.5;
  vSharp = 2.5;
  if (k < 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  Be = `
varying vec3 vCol;
varying float vSharp;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q) * vSharp;               // r = 1 at the nominal size
  float core = exp(-r * r * 2.2);
  float halo = exp(-r * 1.6) * 0.18;
  float a = core + halo;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ie(t, i, a) {
  const e = i.length,
    s = new Float32Array(e * 3),
    l = new Float32Array(e * 4),
    d = new Float32Array(e * 4);
  i.forEach((k, m) => {
    (s.set(k.p, m * 3),
      l.set([...k.c, k.s], m * 4),
      d.set(k.m || [0, 0, 0, 0], m * 4));
  });
  const v = new z0();
  (v.setAttribute("position", new k0(s, 3)),
    v.setAttribute("aCol", new k0(l, 4)),
    v.setAttribute("aMode", new k0(d, 4)),
    v.computeBoundingSphere());
  const x = n0({
      vertexShader: Ce,
      fragmentShader: Be,
      uniforms: { ...t },
      transparent: !0,
      depthWrite: !1,
      blending: A0,
    }),
    n = new D0(v, x);
  return ((n.name = a), (n.frustumCulled = !1), (n.renderOrder = 5), n);
}
const Ve = `
attribute vec4 aFlame;    // x, y, z (base), seed
attribute vec4 aSizeF;    // width, height, intensity, lean
varying vec2 vUv;
varying float vSeed;
varying float vI;
varying float vHaze;
uniform float uHazeK;
void main() {
  vec3 base = aFlame.xyz;
  vec3 toCam = cameraPosition - base;
  vec3 right = normalize(vec3(toCam.z, 0.0, -toCam.x));
  float w = aSizeF.x, h = aSizeF.y;
  vec3 P = base + right * position.x * w + vec3(0.0, (position.y + 0.5) * h, 0.0) + right * aSizeF.w * (position.y + 0.5) * h * 0.3;
  vUv = position.xy + 0.5;
  vSeed = aFlame.w; vI = aSizeF.z;
  float dist = length(P - cameraPosition);
  float low = smoothstep(-40.0, -150.0, P.y);
  vHaze = 1.0 - exp(-dist * uHazeK * (1.0 + 0.6 * low));
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  Oe = `
varying vec2 vUv;
varying float vSeed;
varying float vI;
varying float vHaze;
${c0}
uniform float uTime;
void main() {
  vec2 uv = vUv;
  float t = uTime;
  float n = exFbm3(vec2(uv.x * 2.6 + vSeed * 7.0, uv.y * 2.0 - t * 2.2 + vSeed));
  float n2 = exFbm3(vec2(uv.x * 6.0 - vSeed, uv.y * 4.5 - t * 3.7));
  float x = abs(uv.x - 0.5 + (n - 0.5) * 0.45 * uv.y);
  float wdt = 0.48 * pow(1.0 - uv.y, 0.7);
  float body = 1.0 - smoothstep(wdt * 0.2, wdt, x + (n2 - 0.5) * 0.18);
  body *= 1.0 - smoothstep(0.25, 0.92, uv.y + (n - 0.5) * 0.75);
  body *= smoothstep(0.0, 0.10, uv.y);
  float heat = body * (1.15 - uv.y * 0.9) * (0.75 + 0.5 * n2);
  vec3 c = mix(vec3(0.55, 0.05, 0.008), vec3(1.7, 0.36, 0.05), smoothstep(0.15, 0.6, heat));
  c = mix(c, vec3(3.2, 1.1, 0.25), smoothstep(0.65, 1.05, heat));
  float flick = 0.8 + 0.2 * sin(t * 13.0 + vSeed * 31.0);
  vec3 col = c * body * vI * flick * (1.0 - 0.8 * vHaze);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ee(t, i) {
  const a = i.length,
    e = new oe(),
    s = new te(1, 1);
  ((e.index = s.index),
    e.setAttribute("position", s.attributes.position),
    e.setAttribute("uv", s.attributes.uv));
  const l = new Float32Array(a * 4),
    d = new Float32Array(a * 4);
  (i.forEach((n, k) => {
    (l.set([...n.p, n.seed], k * 4),
      d.set([n.w, n.h, n.i, n.lean || 0], k * 4));
  }),
    e.setAttribute("aFlame", new f0(l, 4)),
    e.setAttribute("aSizeF", new f0(d, 4)),
    (e.instanceCount = a));
  const v = n0({
      vertexShader: Ve,
      fragmentShader: Oe,
      uniforms: { ...t },
      transparent: !0,
      depthWrite: !1,
      blending: A0,
      side: P0,
    }),
    x = new e0(e, v);
  return (
    (x.name = "city_flames"),
    (x.frustumCulled = !1),
    (x.renderOrder = 6),
    x
  );
}
const We = `
attribute vec2 aT;        // along 0..1, side -1..1
attribute vec4 aBase;     // x, y, z, height
attribute vec4 aShape;    // width at base, width at top, drift x, drift z
attribute vec4 aMisc;     // seed, density, fire light, speed
varying vec2 vT;
varying vec4 vMisc;
varying vec3 vWorld;
varying float vW;
uniform float uTime;
vec3 pathAt(float t) {
  float f = pow(t, 1.35);
  vec3 p = aBase.xyz + vec3(aShape.z * f, aBase.w * t, aShape.w * f);
  float s = aMisc.x;
  p.x += sin(t * 5.0 + s + uTime * 0.05) * aBase.w * 0.035 * t;
  p.z += cos(t * 4.0 + s * 1.3) * aBase.w * 0.03 * t;
  return p;
}
void main() {
  float t = aT.x;
  vec3 P = pathAt(t);
  vec3 Tn = normalize(pathAt(min(t + 0.02, 1.0)) - pathAt(max(t - 0.02, 0.0)));
  vec3 toCam = normalize(cameraPosition - P);
  vec3 S = normalize(cross(Tn, toCam));
  float w = mix(aShape.x, aShape.y, pow(t, 0.75));
  P += S * aT.y * w * 0.5;
  vT = aT; vMisc = aMisc; vWorld = P; vW = w;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  De = `
varying vec2 vT;
varying vec4 vMisc;
varying vec3 vWorld;
varying float vW;
uniform float uMoonR;
${c0}
${m0}
${N0}
void main() {
  float t = vT.x, s = vT.y;
  float sp = vMisc.w;
  float scroll = uTime * 0.045 * sp;
  vec2 q = vec2(s * 0.9 + vMisc.x * 3.0, t * 5.0 - scroll);
  float big = exFbm3(q);
  float det = exFbm(q * 2.6 + vec2(5.0, -scroll * 1.5));
  float edge = abs(s) * (0.9 + 0.2 * t) + (big - 0.5) * 1.1 + (det - 0.5) * 0.35;
  float body = (1.0 - smoothstep(0.25, 0.92, edge)) * (1.0 - smoothstep(0.62, 1.0, abs(s)));
  float dens = body * smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.45, 1.0, t)) * vMisc.y;
  dens *= 0.60 + 0.8 * det;
  vec3 V = normalize(vWorld - cameraPosition);
  // in front of the moon the smoke is only ever a veil (the moon is the hero of the bedroom window)
  float mAng = length(cross(V, uMoonDir));
  dens *= mix(0.32, 1.0, smoothstep(0.03, 0.075, mAng));
  if (dens < 0.003) discard;
  // dark smoke: thick cores shade themselves, its own fire lights the underside, the city glow the rest,
  // thin edges in front of the moon catch its red light
  float thick = smoothstep(0.3, 0.95, dens);
  vec3 smoke = vec3(0.018, 0.016, 0.015) * (1.0 - 0.5 * thick);
  vec3 L = skyAmbient(vec3(0.0, 1.0, 0.0)) * 0.8 + skyAmbient(-V) * 0.5;
  vec3 fireL = vec3(1.0, 0.33, 0.08) * vMisc.z * (exp(-t * 10.0) + 0.06 * exp(-t * 3.0)) * (0.4 + 0.9 * (1.0 - det));
  vec3 col = smoke * (L * 6.0 + fireL * 9.0);
  float thin = 1.0 - smoothstep(0.05, 0.5, dens);
  float mf = dot(V, uMoonDir);
  col += vec3(1.0, 0.10, 0.04) * (smoothstep(0.9960, 0.9995, mf) * 0.45 + smoothstep(0.975, 0.997, mf) * 0.012) * thin;
  col += vec3(0.0030, 0.0040, 0.0056) * smoothstep(0.3, 0.9, abs(s)) * (1.0 - thick);
  col = applyHaze(col, vWorld);
  float a = clamp(dens * 1.35, 0.0, 0.96);
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ge(t, i) {
  const e = [],
    s = [],
    l = [],
    d = [],
    v = [];
  let x = 0;
  for (const p of i) {
    for (let b = 0; b <= 56; b++) {
      const N = Math.pow(b / 56, 1.25);
      for (const o of [-1, 1])
        (e.push(N, o),
          s.push(...p.p, p.h),
          l.push(p.w0, p.w1, p.dx, p.dz),
          d.push(p.seed, p.dens, p.fire, p.speed ?? 1));
      if (b < 56) {
        const o = x + b * 2;
        v.push(o, o + 1, o + 2, o + 1, o + 3, o + 2);
      }
    }
    x += 114;
  }
  const n = new z0();
  (n.setAttribute("position", new o0(new Float32Array(x * 3), 3)),
    n.setAttribute("aT", new o0(e, 2)),
    n.setAttribute("aBase", new o0(s, 4)),
    n.setAttribute("aShape", new o0(l, 4)),
    n.setAttribute("aMisc", new o0(d, 4)),
    n.setIndex(v));
  const k = n0({
      vertexShader: We,
      fragmentShader: De,
      uniforms: { ...t },
      transparent: !0,
      depthWrite: !1,
      side: P0,
    }),
    m = new e0(n, k);
  return (
    (m.name = "city_smoke"),
    (m.frustumCulled = !1),
    (m.renderOrder = 4),
    m
  );
}
const qe = `
attribute vec4 aEm;       // source x, y, z, seed
attribute vec4 aEm2;      // rise speed, life, spread, size
varying vec3 vCol;
uniform float uTime;
uniform float uPx;
uniform vec2 uWind;
void main() {
  float s = aEm.w;
  float life = aEm2.y;
  float age = fract(uTime / life + s * 0.61);
  float cyc = floor(uTime / life + s * 0.61);
  float h1 = fract(sin(s * 91.7 + cyc * 17.3) * 43758.5);
  float h2 = fract(sin(s * 37.1 + cyc * 7.9) * 24634.6);
  float tt = age * life;
  vec3 P = aEm.xyz + vec3((h1 - 0.5) * aEm2.z, 0.0, (h2 - 0.5) * aEm2.z);
  P.y += aEm2.x * tt - 0.02 * tt * tt;
  P.x += -1.1 * tt + sin(tt * 1.3 + s * 7.0) * 1.4 + (h1 - 0.5) * tt * 0.8;
  P.z += cos(tt * 1.1 + s * 3.0) * 1.2 + 0.25 * tt;
  vec4 mv = viewMatrix * vec4(P, 1.0);
  gl_Position = projectionMatrix * mv;
  float fade = smoothstep(0.0, 0.06, age) * (1.0 - smoothstep(0.55, 1.0, age));
  float tw = 0.55 + 0.45 * sin(uTime * (9.0 + h2 * 9.0) + s * 20.0);
  vCol = vec3(3.2, 0.95, 0.22) * fade * tw;
  gl_PointSize = clamp(aEm2.w * uPx * 45.0 / max(-mv.z, 0.5), 1.0, 9.0);
}
`,
  $e = `
varying vec3 vCol;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float a = exp(-dot(q, q) * 3.5);
  if (a < 0.02) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function je(t, i, a) {
  const e = [];
  for (const k of i)
    for (let m = 0; m < k.n; m++)
      e.push([
        ...k.p,
        a() * 100,
        k.rise * (0.7 + a() * 0.6),
        k.life * (0.7 + a() * 0.6),
        k.spread,
        0.6 + a() * 0.8,
      ]);
  const s = e.length,
    l = new Float32Array(s * 4),
    d = new Float32Array(s * 4);
  e.forEach((k, m) => {
    (l.set(k.slice(0, 4), m * 4), d.set(k.slice(4, 8), m * 4));
  });
  const v = new z0();
  (v.setAttribute("position", new o0(new Float32Array(s * 3), 3)),
    v.setAttribute("aEm", new k0(l, 4)),
    v.setAttribute("aEm2", new k0(d, 4)));
  const x = n0({
      vertexShader: qe,
      fragmentShader: $e,
      uniforms: { ...t },
      transparent: !0,
      depthWrite: !1,
      blending: A0,
    }),
    n = new D0(v, x);
  return (
    (n.name = "city_embers"),
    (n.frustumCulled = !1),
    (n.renderOrder = 6),
    n
  );
}
function Z0(t, i = [3, 2]) {
  const a = [];
  return (
    i[1] > t.z + t.d / 2 && a.push({ nx: 0, nz: 1 }),
    i[1] < t.z - t.d / 2 && a.push({ nx: 0, nz: -1 }),
    i[0] > t.x + t.w / 2 && a.push({ nx: 1, nz: 0 }),
    i[0] < t.x - t.w / 2 && a.push({ nx: -1, nz: 0 }),
    a
  );
}
function B0(t, i, a, e, s = 0.4) {
  const l = i.nz ? t.w : t.d,
    d = Math.max(1, Math.floor(l / t.bay + 0.5)),
    v = l / d,
    x = (a + 0.5) * v - l / 2,
    n = t.flH * 1.3,
    k = e === 0 ? n * 0.45 : n + (e - 1) * t.flH + t.flH * 0.5,
    m = i.nz,
    p = -i.nx,
    b = t.x + m * x + i.nx * (t.w / 2 + s),
    N = t.z + p * x + i.nz * (t.d / 2 + s);
  return { x: b, y: t.base + k, z: N, nb: d };
}
function Ke(t, i, a, e, s = {}) {
  const l = new b0();
  l.name = "city_fx";
  const d = (o, u) => o + (u - o) * e(),
    v = [],
    x = [],
    n = [],
    k = [a.tower, ...a.near.filter((o) => o.burnN > 0), ...a.fires];
  for (const o of k) {
    const u = o === a.tower,
      z = Math.hypot(o.x - 3, o.z - 2),
      f = Z0(o);
    for (const F of f) {
      const I = F.nz ? o.w : o.d,
        T = Math.max(1, Math.floor(I / o.bay + 0.5));
      for (let y = o.burnF; y < o.burnF + o.burnN; y++)
        for (let H = 0; H < T; H++) {
          const c = e();
          if (c < (u ? 0.3 : 0.5)) continue;
          const w = B0(o, F, H, y, 0.35),
            h = c > 0.85,
            g =
              (u ? d(0.8, 1.35) : z < 120 ? d(0.55, 1) : d(1.2, 2.2)) *
              (h ? 1.6 : 1);
          (v.push({
            p: [w.x, w.y - o.flH * 0.3, w.z],
            w: 2.2 * g,
            h: o.flH * d(0.9, 1.7) * g,
            i: d(0.7, 1.2),
            seed: e() * 50,
            lean: d(-0.6, 0.2),
          }),
            z < 120 &&
              h &&
              x.push({
                p: [w.x, w.y + o.flH * 0.6, w.z + F.nz * 1.5],
                h: d(40, 70),
                w0: 2.5,
                w1: d(18, 28),
                dx: -d(25, 45),
                dz: F.nz * d(2, 6),
                seed: e() * 20,
                dens: 0.9,
                fire: 0.8,
                speed: 1.6,
              }));
        }
    }
    const L = o.base + o.flH * 1.3 + (o.burnF - 1 + o.burnN) * o.flH,
      P = o.base + o.h;
    if (u) {
      for (let F = 0; F < 5; F++) {
        const I = f[F % f.length],
          T = B0(
            o,
            I,
            Math.floor(e() * 7),
            o.burnF + Math.floor(e() * o.burnN),
            1,
          );
        x.push({
          p: [T.x, T.y + 1.5, T.z],
          h: d(28, 45),
          w0: 4,
          w1: d(16, 24),
          dx: -d(8, 18),
          dz: I.nz * d(4, 10) + 6,
          seed: e() * 20,
          dens: 0.75,
          fire: 0.6,
          speed: 1.3,
        });
      }
      for (let F = 0; F < 9; F++)
        v.push({
          p: [o.x + d(-o.w, o.w) * 0.42, P - 1.5, o.z + d(-o.d, o.d) * 0.42],
          w: d(6, 10),
          h: d(9, 16),
          i: d(0.9, 1.3),
          seed: e() * 50,
          lean: d(-0.8, 0),
        });
      (x.push({
        p: [o.x + 2, P + 2, o.z],
        h: 180,
        w0: 18,
        w1: 105,
        dx: -55,
        dz: 95,
        seed: 3.1,
        dens: 1,
        fire: 1,
        speed: 1.4,
      }),
        x.push({
          p: [o.x - 3, P + 1, o.z + 4],
          h: 150,
          w0: 10,
          w1: 44,
          dx: -110,
          dz: 18,
          seed: 11.3,
          dens: 0.28,
          fire: 0.9,
          speed: 1.2,
        }),
        x.push({
          p: [o.x + 4, P - 6, o.z + 6],
          h: 120,
          w0: 12,
          w1: 70,
          dx: -95,
          dz: 10,
          seed: 7.7,
          dens: 0.7,
          fire: 0.8,
          speed: 1.1,
        }));
    } else {
      const F = z < 480 ? 1 : 1.6;
      x.push({
        p: [o.x, Math.max(L, P - 4), o.z],
        h: d(70, 140) * F,
        w0: d(6, 10) * F,
        w1: d(35, 70) * F,
        dx: -d(40, 110) * F,
        dz: d(-10, 25),
        seed: e() * 20,
        dens: z < 480 ? 0.85 : 0.6,
        fire: 0.7,
        speed: d(0.8, 1.3),
      });
    }
  }
  for (const o of s.flames || []) v.push(o);
  for (const o of s.plumes || []) x.push(o);
  for (const [o, u, z] of s.gridLamps || [])
    n.push({
      p: [o, u, z],
      c: [1.6, 0.66, 0.18],
      s: 1.1,
      m: [e() < 0.05 ? 5 : 0, e(), 6, 0],
    });
  for (const o of a.far) {
    const u = Z0(o),
      z = Math.max(1, Math.round((o.h - o.flH * 1.3 - 1.25) / o.flH) + 1),
      f = s.powered ? s.powered(o.x, o.z) : !0;
    for (const L of u) {
      const P = L.nz ? o.w : o.d,
        F = Math.max(1, Math.floor(P / o.bay + 0.5)),
        I = F * z,
        T = o.lit * (o.tone > 0.75 ? 1.5 : 1) * (f ? 0.9 : 0.12),
        y = Math.round(I * T + e() - 0.5);
      for (let H = 0; H < y; H++) {
        const c = B0(o, L, Math.floor(e() * F), Math.floor(e() * z), 0.3),
          w = e() < 0.82,
          h = d(0.35, 1) * (f ? 1 : 0.45);
        n.push({
          p: [c.x, c.y, c.z],
          c: w ? [1 * h, 0.5 * h, 0.19 * h] : [0.45 * h, 0.6 * h, 1 * h],
          s: d(0.8, 1.2),
          m: [e() < 0.04 ? 3 : 0, e(), 2, 0],
        });
      }
    }
  }
  const m = [...a.far, ...a.mid]
    .filter((o) => o.h > 70)
    .sort((o, u) => u.h - o.h)
    .slice(0, 26);
  for (const o of m) {
    const u = o.base + o.h + 0.6,
      z = e();
    for (const [f, L] of [
      [-1, -1],
      [1, 1],
    ])
      n.push({
        p: [o.x + f * o.w * 0.45, u, o.z + L * o.d * 0.45],
        c: [4, 0.18, 0.06],
        s: 1.6,
        m: [1, z, 0.55, 0],
      });
  }
  for (const o of s.warning || [])
    n.push({ p: o, c: [4, 0.18, 0.06], s: 1.8, m: [1, e(), 0.5, 0] });
  for (let o = 0; o < 22; o++) {
    const u = e() < 0.6 ? a.mid : a.far,
      z = u[Math.floor(e() * u.length)];
    if (!z) continue;
    const f = e() < 0.4,
      L = z.x + d(-z.w, z.w) * 0.6,
      P = z.z + z.d / 2 + d(2, 8),
      F = f ? z.base + z.h + 1.2 : t0(L, P) + 1.3;
    n.push({
      p: [L, F, f ? z.z : P],
      c: [7, 5.2, 2.6],
      s: 1.5,
      m: [2, e() * 10, 1, 0],
    });
  }
  for (let o = 0; o < 7; o++) {
    const u = a.mid[Math.floor(e() * a.mid.length)],
      z = u.x + d(-u.w, u.w) * 0.4,
      f = u.z + u.d / 2 + d(3, 7),
      L = t0(z, f) + 1.5,
      P = e();
    (n.push({
      p: [z - 0.4, L, f],
      c: [4, 0.25, 0.15],
      s: 1.5,
      m: [4, P, 1.6, 0],
    }),
      n.push({
        p: [z + 0.4, L, f],
        c: [0.3, 0.6, 5],
        s: 1.5,
        m: [4, P, 1.6, 1],
      }));
  }
  for (const o of s.points || []) n.push(o);
  const p = Ee(i, v),
    b = Ge(i, x),
    N = Ie(i, n, "city_points");
  return (
    l.add(p, b, N),
    s.embers?.length && l.add(je(i, s.embers, e)),
    {
      group: l,
      counts: { flames: v.length, plumes: x.length, points: n.length },
    }
  );
}
const Ue = `
attribute float aPart;
attribute vec4 aCarA;   // paint rgb (linear), state: 0 whole, 1 burnt, 2 police
attribute vec4 aCarB;   // hazard 0/1, phase, headlights 0/1, dirt
varying vec3 vWorld;
varying vec3 vNw;
varying vec3 vLocal;
varying float vPart;
varying vec4 vA;
varying vec4 vB;
void main() {
  vec4 wp = vec4(position, 1.0);
  vec3 n = normal;
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  n = mat3(instanceMatrix) * n;
#endif
  wp = modelMatrix * wp;
  vWorld = wp.xyz; vNw = normalize(mat3(modelMatrix) * n); vLocal = position; vPart = aPart; vA = aCarA; vB = aCarB;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Xe = `
varying vec3 vWorld;
varying vec3 vNw;
varying vec3 vLocal;
varying float vPart;
varying vec4 vA;
varying vec4 vB;
${c0}
${m0}
${N0}
void main() {
  vec3 P = vWorld;
  vec3 N = normalize(vNw);
  vec3 V = normalize(P - cameraPosition);
  int part = int(vPart + 0.5);
  float burnt = step(0.5, vA.w) * step(vA.w, 1.5);
  float police = step(1.5, vA.w);
  vec3 alb = vA.rgb;
  vec3 emit = vec3(0.0);
  float gloss = 0.55, rough = 0.12;
  float n = exNoise(vLocal.xy * 3.0 + vLocal.z * 2.0 + vB.y * 10.0);
  if (part == 0) {
    alb *= 0.85 + 0.3 * n;
    alb = mix(alb, vec3(0.05, 0.045, 0.04), vB.w * smoothstep(0.55, 0.3, vLocal.y));
    if (burnt > 0.5) { alb = mix(vec3(0.018, 0.016, 0.015), vec3(0.09, 0.04, 0.02), smoothstep(0.4, 0.8, n)); gloss = 0.05; rough = 0.6; }
    if (police > 0.5) alb = vLocal.y > 0.72 ? vec3(0.55, 0.55, 0.55) : vec3(0.02, 0.02, 0.025);
  } else if (part == 1) {
    alb = vec3(0.004, 0.005, 0.006);
    gloss = burnt > 0.5 ? 0.0 : 1.0; rough = 0.04;
    float crack = step(0.82, exNoise(vLocal.xz * 9.0 + vB.y * 30.0));
    alb += vec3(0.05) * crack * (1.0 - burnt);
  } else if (part == 2) {
    alb = vec3(0.012); gloss = 0.1; rough = 0.5;
  } else if (part == 3 || part == 4) {
    float front = step(0.0, vLocal.x);
    float blink = vB.x * step(0.5, fract(uTime * 1.25 + vB.y));
    vec3 base = front > 0.5 ? vec3(0.10, 0.10, 0.09) : vec3(0.10, 0.008, 0.004);
    alb = base;
    emit = vec3(2.6, 1.05, 0.15) * blink * (1.0 - burnt);
    if (front > 0.5) emit += vec3(2.2, 2.0, 1.6) * vB.z * (1.0 - burnt);
    else emit += vec3(0.5, 0.02, 0.01) * vB.z;
    gloss = 0.4;
  } else if (part == 5) {
    alb = vec3(0.015, 0.015, 0.016); gloss = 0.2; rough = 0.3;
  } else {
    float side = step(0.0, vLocal.z);
    float c = fract(uTime * 1.6 + vB.y);
    float on = side > 0.5 ? step(0.5, c) : step(c, 0.5);
    on *= 0.6 + 0.4 * step(0.5, fract(uTime * 6.4));
    emit = (side > 0.5 ? vec3(0.25, 0.5, 4.5) : vec3(4.5, 0.2, 0.12)) * on;
    alb = vec3(0.05);
  }
  vec3 L = exLight(P, N);
  vec3 col = alb * L + emit + wetReflect(V, N, rough) * gloss + exSpec(P, N, V, mix(20.0, 260.0, gloss)) * gloss * 0.35;
  col = applyHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ye(t = !1) {
  const i = new p0({ aPart: 1 }),
    a = new a0(),
    e = new G0();
  [
    [-2.3, 0.3],
    [2.3, 0.3],
    [2.36, 0.55],
    [2.3, 0.78],
    [1.92, 0.88],
    [1.05, 0.97],
    [-1.58, 0.97],
    [-2.22, 0.92],
    [-2.36, 0.72],
  ].forEach(([v, x], n) => (n ? e.lineTo(v, x) : e.moveTo(v, x)));
  const s = new q0(e, {
    depth: 1.7,
    bevelEnabled: !0,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 2,
    curveSegments: 1,
  });
  (s.translate(0, 0, -0.85),
    s.computeVertexNormals(),
    i.add(s, a, { aPart: 0 }));
  const l = new G0();
  [
    [1.05, 0.96],
    [0.32, 1.4],
    [-0.92, 1.42],
    [-1.56, 0.96],
  ].forEach(([v, x], n) => (n ? l.lineTo(v, x) : l.moveTo(v, x)));
  const d = new q0(l, { depth: 1.42, bevelEnabled: !1 });
  (d.translate(0, 0, -0.71),
    d.computeVertexNormals(),
    i.add(d, a, { aPart: 1 }),
    i.add(new $(1.26, 0.05, 1.4).translate(-0.3, 1.425, 0), a, { aPart: 0 }));
  for (const [v, x] of [
    [1.42, 0.76],
    [1.42, -0.76],
    [-1.45, 0.76],
    [-1.45, -0.76],
  ])
    i.add(
      new d0(0.33, 0.33, 0.24, 12).rotateX(Math.PI / 2).translate(v, 0.33, x),
      a,
      { aPart: 2 },
    );
  for (const v of [0.58, -0.58])
    (i.add(new $(0.08, 0.13, 0.36).translate(2.33, 0.68, v), a, { aPart: 3 }),
      i.add(new $(0.08, 0.14, 0.34).translate(-2.37, 0.76, v), a, {
        aPart: 4,
      }));
  return (
    i.add(new $(0.14, 0.16, 1.72).translate(2.36, 0.4, 0), a, { aPart: 5 }),
    i.add(new $(0.14, 0.16, 1.72).translate(-2.4, 0.42, 0), a, { aPart: 5 }),
    t && i.add(new $(0.3, 0.13, 1.2).translate(-0.3, 1.51, 0), a, { aPart: 6 }),
    i.build()
  );
}
function Q0(t, i, a) {
  const e = Ye(a),
    s = i.length,
    l = n0({ vertexShader: Ue, fragmentShader: Xe, uniforms: { ...t } }),
    d = new W0(e, l, s),
    v = new Float32Array(s * 4),
    x = new Float32Array(s * 4),
    n = new a0(),
    k = new s0(),
    m = new s0(),
    p = new s0(),
    b = new B(0, 1, 0),
    N = new B(0, 0, 1),
    o = new B(1, 0, 0);
  return (
    i.forEach((u, z) => {
      (k.setFromAxisAngle(b, u.yaw),
        m.setFromAxisAngle(N, u.pitch || 0),
        p.setFromAxisAngle(o, u.roll || 0),
        k.multiply(m).multiply(p),
        n.compose(new B(u.x, u.y, u.z), k, new B(1, 1, 1)),
        d.setMatrixAt(z, n),
        v.set([...u.paint, u.state], z * 4),
        x.set(
          [u.hazard ? 1 : 0, u.phase, u.lights ? 1 : 0, u.dirt ?? 0.4],
          z * 4,
        ));
    }),
    e.setAttribute("aCarA", new f0(v, 4)),
    e.setAttribute("aCarB", new f0(x, 4)),
    (d.instanceMatrix.needsUpdate = !0),
    (d.frustumCulled = !1),
    (d.name = a ? "street_police" : "street_cars"),
    d
  );
}
const Ze = `
attribute float aOn;
varying float vOn;
varying vec3 vWorld;
void main() {
  vec4 wp = vec4(position, 1.0);
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
#endif
  vOn = aOn; vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Qe = `
varying float vOn;
varying vec3 vWorld;
void main() {
  vec3 c = mix(vec3(0.03, 0.025, 0.02), vec3(3.4, 1.35, 0.32), vOn);
  gl_FragColor = vec4(c, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Je(t, i, a) {
  const e = new b0();
  e.name = "street";
  const s = (r, S) => r + (S - r) * a(),
    l = l0,
    d = new p0({ aOrigin: 4, aDims: 4, aStyle: 4, aLight: 4 }),
    v = new a0(),
    x = new s0(),
    n = new B(),
    k = new B(),
    m = (r, S = 0.55, V = 3) => ({
      aOrigin: [0, l, 0, 0],
      aDims: [1, 1, 1, V],
      aStyle: [3, 3, S, r],
      aLight: [0, 0, 0, 0],
    }),
    p = (r, S, V, O, W, X, Z) => {
      (v.compose(
        k.set((r + O) / 2, (S + W) / 2, (V + X) / 2),
        x.identity(),
        n.set(O - r, W - S, X - V),
      ),
        d.add(J0, v, Z));
    },
    b = (r, S, V, O, W, X) => {
      (v.compose(k.set(S, V, O), x.setFromAxisAngle(ne, W), n.set(1, 1, 1)),
        d.add(r, v, X));
    },
    N = m(4, 0.62),
    o = m(1, 0.62),
    u = m(3),
    z = m(5, 0.3),
    f = -262,
    L = 262,
    P = Y.x0,
    F = Y.x1,
    I = [
      [C.zS - 5, C.zS],
      [C.zN, C.zN + 5],
    ];
  for (const [r, S] of I)
    for (const [V, O] of [
      [f, P],
      [F, L],
    ])
      p(V, l - 0.3, r, O, l + C.curbH, S, N);
  for (const [r, S] of [
    [f, P - 4],
    [F + 4, L],
  ])
    p(r, l - 0.3, C.med0, S, l + 0.22, C.med1, o);
  for (const [r, S] of [
    [f, P - 4],
    [F + 4, L],
  ])
    p(r + 0.3, l + 0.22, C.med0 + 0.3, S - 0.3, l + 0.26, C.med1 - 0.3, z);
  for (let r = C.zN; r > -205; r -= 6) {
    const S = r - 6,
      V = t0(P, r),
      O = t0(P, S);
    for (const [W, X] of [
      [P, P + 3.2],
      [F - 3.2, F],
    ]) {
      const Z = Math.hypot(6, V - O),
        h0 = Math.atan2(V - O, 6);
      (v.compose(
        k.set((W + X) / 2, (V + O) / 2 - 0.07, (r + S) / 2),
        x.setFromAxisAngle(new B(1, 0, 0), -h0),
        n.set(X - W, 0.46, Z + 0.05),
      ),
        d.add(J0, v, N));
    }
  }
  const T = [],
    y = (r, S, V, O = 1.7) => {
      const W =
        t0(r, S) + (Math.abs(S - (C.med0 + C.med1) / 2) < 2.5 ? 0.22 : C.curbH);
      (p(r - 0.09, W, S - 0.09, r + 0.09, W + 7.9, S + 0.09, u),
        p(r - 0.16, W, S - 0.16, r + 0.16, W + 1.1, S + 0.16, u));
      const [X, Z] = V;
      p(
        Math.min(r, r + X * O) - 0.05,
        W + 7.75,
        Math.min(S, S + Z * O) - 0.05,
        Math.max(r, r + X * O) + 0.05,
        W + 7.85,
        Math.max(S, S + Z * O) + 0.05,
        u,
      );
      const h0 = r + X * O,
        x0 = S + Z * O;
      p(
        h0 - 0.32 * (X ? 1 : 0.55),
        W + 7.62,
        x0 - 0.32 * (Z ? 1 : 0.55),
        h0 + 0.32 * (X ? 1 : 0.55),
        W + 7.8,
        x0 + 0.32 * (Z ? 1 : 0.55),
        u,
      );
      const L0 = a();
      T.push({
        x: h0,
        y: W + 7.58,
        z: x0,
        state: L0 < 0.6 ? 1 : L0 < 0.72 ? 2 : 0,
        phase: a() * 10,
        rate: s(5, 12),
      });
    };
  for (let r = -150; r <= 170; r += 28)
    (r < P - 3 || r > F + 3) && y(r, C.zS - 4.5, [0, -1]);
  for (let r = -136; r <= 170; r += 28)
    (r < P - 3 || r > F + 3) && y(r, C.zN + 4.5, [0, 1]);
  let H = 1;
  for (let r = -130; r <= 160; r += 36)
    (r < P - 6 || r > F + 6) &&
      (y(r, (C.med0 + C.med1) / 2, [0, H], 1.5), (H = -H));
  for (let r = 0; r < 6; r++)
    (y(P + 0.9, -48 - 30 * r, [1, 0]), y(F - 0.9, -63 - 30 * r, [-1, 0]));
  T.length = Math.min(T.length, 48);
  for (const r of T) Math.abs(r.x - 3) < 62 && r.z > C.zN - 1 && (r.state = 1);
  const c = T.filter((r) => r.z > C.zS - 8 && Math.abs(r.x - 3) < 30).sort(
    (r, S) => Math.abs(r.x - 3) - Math.abs(S.x - 3),
  )[0];
  c && (c.state = 2);
  for (let r = -120; r <= 150; r += 18)
    (r > P - 8 && r < F + 8) ||
      a() < 0.25 ||
      et(
        d,
        r + s(-3, 3),
        l + 0.24,
        (C.med0 + C.med1) / 2 + s(-0.5, 0.5),
        a,
        m(3, 0.3, 9),
      );
  const w = m(3, 0.5, 5),
    h = (r, S, V, O) => {
      const W = new $(O ? 1.3 : 1.9, O ? 1.9 : 1.3, 1.1);
      b(W, r, l + (O ? 0.95 : 0.65), S, V, w);
    };
  (h(-18, -3.2, 0.2, !0), h(44, -37.4, -0.1, !1), h(-64, -36.8, 1.4, !0));
  for (let r = 0; r < 14; r++) {
    const S = s(-120, 150),
      V = a() < 0.5 ? s(-4.4, -1) : s(-39, -35.6);
    (S > P - 2 && S < F + 2) ||
      b(
        new d0(0.3, 0.27, 0.9, 10).rotateZ(a() < 0.5 ? Math.PI / 2 : 0),
        S,
        l + C.curbH + 0.45,
        V,
        a() * 6,
        w,
      );
  }
  const g = (r, S, V) => {
    const O = new p0({});
    O.add(new $(2.2, 0.28, 0.05).translate(0, 0.95, 0), new a0(), {});
    for (const W of [-0.95, 0.95])
      O.add(new $(0.06, 1.1, 0.5).translate(W, 0.55, 0), new a0(), {});
    b(O.build(), r, l, S, V, m(1, 0.62, 12));
  };
  (g(8, -24.5, 0.3),
    g(11, -26.8, -0.2),
    g(36, -12, 1.2),
    g(21, -44, 0.1),
    g(24.5, -44.5, -0.25));
  const M = (r, S, V) => {
    const O = t0(r, S);
    (b(new $(1.7, 0.22, 0.5), r, O + 0.11, S, V, m(3, 0.2, 21)),
      b(
        new R0(0.13, 8, 6),
        r + Math.cos(V) * 0.95,
        O + 0.12,
        S - Math.sin(V) * 0.95,
        V,
        m(3, 0.2, 21),
      ));
  };
  (M(-6, -9.5, 0.7),
    M(15, -31, 2.1),
    M(31, -8, -0.4),
    M(19, -88, 1.2),
    M(24, -97, 2.9),
    M(-37, -28, 0.3));
  const R = new e0(d.build(), S0(i, 1));
  ((R.name = "street_static"), e.add(R));
  const A = new $(0.5, 0.05, 0.26),
    _ = new W0(
      A,
      n0({ vertexShader: Ze, fragmentShader: Qe, uniforms: {} }),
      T.length,
    ),
    D = new f0(new Float32Array(T.length), 1);
  (A.setAttribute("aOn", D),
    T.forEach((r, S) => {
      (v.compose(k.set(r.x, r.y, r.z), x.identity(), n.set(1, 1, 1)),
        _.setMatrixAt(S, v),
        (D.array[S] = r.state ? 1 : 0));
    }),
    (_.name = "street_lamps"),
    (_.frustumCulled = !1),
    e.add(_));
  const j = [],
    U = [],
    K = [
      [0.02, 0.02, 0.022],
      [0.3, 0.3, 0.31],
      [0.12, 0.012, 0.012],
      [0.02, 0.035, 0.08],
      [0.2, 0.17, 0.12],
      [0.45, 0.45, 0.44],
      [0.035, 0.06, 0.045],
      [0.25, 0.1, 0.03],
    ],
    E = (r, S, V, O = {}) => {
      const X = Math.cos(V),
        Z = -Math.sin(V),
        h0 = t0(r + X * 2.3, S + Z * 2.3),
        x0 = t0(r - X * 2.3, S - Z * 2.3),
        L0 = (S > C.zS - 5 && S < C.zS) || (S > C.zN && S < C.zN + 5),
        ie = (h0 + x0) / 2 + (L0 ? C.curbH : 0),
        _0 = {
          x: r,
          y: ie,
          z: S,
          yaw: V,
          pitch: Math.atan2(h0 - x0, 2 * 2.3),
          roll: 0,
          paint: K[Math.floor(a() * K.length)],
          state: 0,
          hazard: a() < 0.3,
          phase: a(),
          lights: !1,
          dirt: s(0.2, 0.7),
          ...O,
        };
      return ((_0.state === 2 ? U : j).push(_0), _0);
    };
  (E(9, -24, 0.4),
    E(12.8, -21.2, 2.3, { roll: 0.08 }),
    E(5.5, -28.5, -0.25, { hazard: !0 }),
    E(34, -15.5, Math.PI + 0.3, { hazard: !0 }),
    E(26, -9.5, 1.9));
  const Q = [-32.6, -28.5, -24.3, -15.9, -11.7, -7.4];
  for (let r = 0; r < 20; r++) {
    let S = s(-150, 170);
    S > P - 6 && S < F + 6 && (S += 40);
    const V = Q[Math.floor(a() * Q.length)] + s(-0.6, 0.6),
      O = V < C.med0;
    E(
      S,
      V,
      (O ? 0 : Math.PI) + s(-0.35, 0.35) + (a() < 0.12 ? s(-1.4, 1.4) : 0),
    );
  }
  (E(-44, -2.6, 0.12, { hazard: !0 }),
    E(71, -37.6, Math.PI - 0.1),
    E(-95, -2.9, -0.05),
    E(4.5, -6.6, Math.PI * 0.5 + 0.35, {
      lights: !0,
      hazard: !0,
      paint: K[2],
    }));
  const G = E(22.2, -84, Math.PI / 2 + 0.5, {
    state: 1,
    hazard: !1,
    paint: K[0],
  });
  (E(18.4, -78, Math.PI / 2 - 0.3),
    E(26.5, -104, -Math.PI / 2 + 0.25, { hazard: !0 }),
    E(17.2, -131, Math.PI / 2 + 0.1),
    E(25.8, -150, -Math.PI / 2 - 0.4),
    E(19, -171, Math.PI / 2, { hazard: !0 }),
    E(21.5, -60, 0.9));
  const i0 = E(20.5, -118, Math.PI / 2 + 1.1, {
    state: 2,
    paint: [0.02, 0.02, 0.025],
    hazard: !1,
    lights: !0,
    phase: 0,
  });
  e.add(Q0(i, j, !1), Q0(i, U, !0));
  const r0 = T.filter((r) => r.state)
      .map((r) => ({ h: r, d: Math.hypot(r.x - 3, r.z + 20) }))
      .sort((r, S) => r.d - S.d)
      .slice(0, 11)
      .map((r) => r.h),
    J = [];
  for (const r of r0)
    J.push({
      type: "lamp",
      h: r,
      p: [r.x, r.y - 0.1, r.z],
      c: [1, 0.42, 0.11],
      I: 22,
      cone: 1,
    });
  (J.push({
    type: "fire",
    p: [G.x, G.y + 1.6, G.z],
    c: [1, 0.38, 0.09],
    I: 60,
    cone: 0,
  }),
    J.push({
      type: "copR",
      p: [i0.x, i0.y + 1.7, i0.z - 0.3],
      c: [1, 0.04, 0.02],
      I: 30,
      cone: 0,
    }),
    J.push({
      type: "copB",
      p: [i0.x, i0.y + 1.7, i0.z + 0.3],
      c: [0.05, 0.15, 1],
      I: 38,
      cone: 0,
    }),
    J.forEach((r, S) => {
      (i.uLampPos.value[S].set(...r.p, r.I),
        i.uLampCol.value[S].set(...r.c, r.cone));
    }));
  const v0 = [],
    u0 = [];
  for (let r = 0; r < 5; r++)
    v0.push({
      p: [G.x + s(-1.3, 1.3), G.y + 0.9, G.z + s(-0.6, 0.6)],
      w: s(1.4, 2.4),
      h: s(2.2, 4.2),
      i: s(0.9, 1.3),
      seed: a() * 40,
      lean: s(-0.5, 0.1),
    });
  u0.push({
    p: [G.x, G.y + 3, G.z],
    h: 60,
    w0: 2.5,
    w1: 26,
    dx: -38,
    dz: 6,
    seed: 4.4,
    dens: 0.85,
    fire: 1,
    speed: 2.2,
  });
  const q = [
    { p: [G.x, G.y + 1.5, G.z], n: 70, rise: 3.2, life: 11, spread: 2 },
  ];
  return {
    group: e,
    heads: T,
    slots: J,
    lens: _,
    onAttr: D,
    burning: G,
    cop: i0,
    flames: v0,
    plumes: u0,
    embers: q,
    cars: j,
    police: U,
  };
}
const ne = new B(0, 1, 0),
  J0 = new $(1, 1, 1);
function et(t, i, a, e, s, l) {
  const d = new a0(),
    v = new s0(),
    x = new B(),
    n = new B(),
    k = (p, b, N, o) => {
      const u = new B().subVectors(b, p),
        z = u.length(),
        f = new d0(o, N, z, 5, 1, !0).translate(0, z / 2, 0);
      (v.setFromUnitVectors(ne, u.normalize()),
        d.compose(n.copy(p), v, x.set(1, 1, 1)),
        t.add(f, d, l));
    },
    m = (p, b, N, o, u) => {
      const z = p.clone().addScaledVector(b, N);
      if ((k(p, z, o, o * 0.68), u === 0)) return;
      const f = u > 2 ? 2 : 3;
      for (let L = 0; L < f; L++) {
        const P = b.clone(),
          F = 0.45 + s() * 0.55,
          I = s() * Math.PI * 2,
          T = new B(Math.cos(I), 0, Math.sin(I));
        (P.multiplyScalar(Math.cos(F))
          .addScaledVector(T, Math.sin(F))
          .add(new B(0, 0.25, 0))
          .normalize(),
          m(z, P, N * (0.62 + s() * 0.2), o * 0.62, u - 1));
      }
    };
  m(
    new B(i, a, e),
    new B((s() - 0.5) * 0.15, 1, (s() - 0.5) * 0.15).normalize(),
    2.6 + s(),
    0.16,
    4,
  );
}
const tt = `
attribute float aBone;
attribute vec4 aPos;      // x, y, z, heading
attribute vec4 aGait;     // phase, rate (Hz), limp 0..1, pose: 0 walk, 1 reach, 2 feed, 3 bang, 4 stand
attribute vec4 aLook;     // scale, head tilt, look-up amount, tint seed
varying vec3 vWorld;
varying vec3 vNw;
varying float vBone;
varying float vTint;
uniform float uTime;
vec3 rX(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x, c * p.y - s * p.z, s * p.y + c * p.z); }
vec3 rZ(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x - s * p.y, s * p.x + c * p.y, p.z); }
vec3 rY(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z); }
void main() {
  int b = int(aBone + 0.5);
  vec3 p = position;
  vec3 n = normal;
  float pose = aGait.w;
  float c = (uTime * aGait.y + aGait.x) * 6.2831853;
  float walk = pose < 0.5 || (pose > 0.5 && pose < 1.5) ? 1.0 : 0.0;
  float limp = aGait.z;
  float side = (b == 3 || b == 5 || b == 7 || b == 9) ? -1.0 : 1.0;   // left = -x
  // ---- legs
  float legPh = side < 0.0 ? c : c + 3.14159;
  float swing = sin(legPh) * (0.38 - (side > 0.0 ? limp * 0.25 : 0.0)) * walk;
  float knee = (0.08 + max(0.0, -sin(legPh + 0.9)) * 0.55 * (side > 0.0 ? 1.0 - limp * 0.7 : 1.0)) * walk;
  if (pose > 1.5 && pose < 2.5) { swing = -1.25; knee = 2.2; }                           // feeding: kneeling
  if (b >= 9) p = rX(p - vec3(0.1 * side, 0.48, 0.0), knee) + vec3(0.1 * side, 0.48, 0.0);
  if (b >= 7) p = rX(p - vec3(0.1 * side, 0.92, 0.0), -swing) + vec3(0.1 * side, 0.92, 0.0);
  // ---- arms
  float arm = sin(c + (side < 0.0 ? 3.14159 : 0.0)) * 0.22 * walk + 0.05 * sin(uTime * 0.9 + aGait.x * 7.0);
  float armOut = 0.10 + 0.05 * side * aLook.w;
  float fore = 0.25 + 0.15 * sin(c * 0.5 + side);
  if (pose > 0.5 && pose < 1.5) { arm = -1.25 + 0.12 * sin(c + side); fore = 0.15; armOut = 0.05; }        // reaching
  if (pose > 1.5 && pose < 2.5) { arm = -0.9; fore = 1.1; }
  if (pose > 2.5 && pose < 3.5) { float hit = pow(max(0.0, sin(uTime * 2.3 + aGait.x * 5.0 + side * 1.4)), 6.0); arm = -2.3 + hit * 0.9; fore = 0.2; armOut = 0.15; }   // beating on a door
  if (b == 5 || b == 6) p = rX(p - vec3(0.24 * side, 1.2, 0.0), -fore) + vec3(0.24 * side, 1.2, 0.0);
  if (b >= 3 && b <= 6) { p = rX(p - vec3(0.22 * side, 1.5, 0.0), arm) + vec3(0.22 * side, 1.5, 0.0); p = rZ(p - vec3(0.22 * side, 1.5, 0.0), armOut * side) + vec3(0.22 * side, 1.5, 0.0); }
  // ---- head: lolled, bobbing, looking up at something if told to
  float tilt = aLook.y + 0.10 * sin(c * 0.5 + aGait.x);
  float nod = 0.25 * (1.0 - aLook.z) - aLook.z * 0.85 + 0.08 * sin(c);
  if (b == 2) { p = rZ(p - vec3(0.0, 1.58, 0.0), tilt) + vec3(0.0, 1.58, 0.0); p = rX(p - vec3(0.0, 1.58, 0.0), nod) + vec3(0.0, 1.58, 0.0); }
  // ---- trunk: leaning forward, swaying
  float lean = 0.30 + 0.15 * aLook.w - aLook.z * 0.25;
  if (pose > 1.5 && pose < 2.5) lean = 1.05;
  if (pose > 2.5 && pose < 3.5) lean = 0.10;
  float sway = sin(c) * 0.09 * walk + 0.05 * sin(uTime * 0.7 + aGait.x * 3.0);
  if (b >= 1 && b <= 6) { p = rX(p - vec3(0.0, 1.0, 0.0), lean) + vec3(0.0, 1.0, 0.0); p = rZ(p - vec3(0.0, 1.0, 0.0), sway) + vec3(0.0, 1.0, 0.0); }
  // ---- whole body
  float bob = abs(sin(c)) * 0.035 * walk;
  if (pose > 1.5 && pose < 2.5) p.y -= 0.42;
  p *= aLook.x;
  p.y += bob;
  p = rY(p, aPos.w);
  vec3 wp = p + aPos.xyz;
  vWorld = wp; vNw = rY(n, aPos.w); vBone = aBone; vTint = aLook.w;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,
  ot = `
varying vec3 vWorld;
varying vec3 vNw;
varying float vBone;
varying float vTint;
${c0}
${m0}
${N0}
void main() {
  vec3 P = vWorld;
  vec3 N = normalize(vNw);
  vec3 V = normalize(P - cameraPosition);
  int b = int(vBone + 0.5);
  float h = fract(vTint * 13.7);
  vec3 cloth = h < 0.3 ? vec3(0.030, 0.030, 0.032) : h < 0.5 ? vec3(0.070, 0.055, 0.040) : h < 0.62 ? vec3(0.16, 0.15, 0.13) : h < 0.78 ? vec3(0.05, 0.012, 0.012) : vec3(0.025, 0.035, 0.050);
  vec3 skin = vec3(0.10, 0.11, 0.085);
  vec3 alb = (b == 2 || b == 11) ? skin : cloth;
  if (b >= 7 && b <= 10) alb = mix(vec3(0.02, 0.02, 0.025), cloth, 0.4);
  alb *= 0.8 + 0.4 * exNoise(P.xy * 7.0 + vTint * 20.0);
  vec3 L = exLight(P, N);
  vec3 col = alb * L;
  col += alb * exSpec(P, N, V, 6.0) * 0.4;
  col = applyHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function at() {
  const t = new p0({ aBone: 1 }),
    i = new a0(),
    a = (s, l, d, v, x, n, k) =>
      t.add(new $(s, l, d).translate(v, x, n), i, { aBone: k });
  a(0.34, 0.2, 0.21, 0, 0.95, 0, 0);
  const e = new d0(0.19, 0.16, 0.56, 6, 1)
    .scale(1, 1, 0.62)
    .translate(0, 1.28, 0);
  (t.add(e, i, { aBone: 1 }),
    a(0.44, 0.1, 0.2, 0, 1.51, 0, 1),
    t.add(new R0(0.105, 8, 6).scale(0.9, 1.1, 1).translate(0, 1.69, 0.01), i, {
      aBone: 2,
    }),
    t.add(new d0(0.05, 0.05, 0.12, 5).translate(0, 1.58, 0), i, { aBone: 2 }));
  for (const s of [-1, 1]) {
    const l = s < 0;
    (a(0.095, 0.32, 0.095, 0.24 * s, 1.35, 0, l ? 3 : 4),
      a(0.08, 0.3, 0.08, 0.245 * s, 1.05, 0, l ? 5 : 6),
      a(0.07, 0.12, 0.05, 0.245 * s, 0.85, 0.01, l ? 5 : 6),
      a(0.14, 0.46, 0.15, 0.1 * s, 0.7, 0, l ? 7 : 8),
      a(0.11, 0.46, 0.12, 0.1 * s, 0.25, 0, l ? 9 : 10),
      a(0.11, 0.07, 0.25, 0.1 * s, 0.035, 0.06, l ? 9 : 10));
  }
  return t.build();
}
function st(t, i, a, e) {
  const s = (c, w) => c + (w - c) * a(),
    l = [],
    d = (c, w, h = {}) =>
      l.push({
        x: c,
        z: w,
        head: s(-Math.PI, Math.PI),
        speed: s(0.22, 0.5),
        phase: a(),
        limp: a() < 0.45 ? s(0.3, 1) : s(0, 0.2),
        pose: 0,
        scale: s(0.9, 1.08),
        tilt: (a() < 0.5 ? -1 : 1) * s(0.1, 0.55),
        tint: a(),
        role: "drift",
        ox: s(-14, 14),
        oz: s(-10, 10),
        look: 0,
        ...h,
      }),
    v = e.cop;
  for (let c = 0; c < 120; c++) d(s(-110, 130), s(-37, -3.5));
  for (let c = 0; c < 60; c++) d(s(Y.x0 + 1, Y.x1 - 1), s(-200, -40));
  for (let c = 0; c < 34; c++) {
    const w = a() * 6.283,
      h = s(3, 13);
    d(v.x + Math.cos(w) * h * 0.6, v.z + Math.sin(w) * h, {
      speed: s(0.1, 0.25),
    });
  }
  const x = [
    [-6, -9.5],
    [15, -31],
    [31, -8],
    [19, -88],
    [24, -97],
    [-37, -28],
  ];
  for (const [c, w] of x)
    for (let h = 0; h < (a() < 0.5 ? 2 : 3); h++) {
      const g = a() * 6.283;
      d(c + Math.cos(g) * 0.75, w + Math.sin(g) * 0.75, {
        role: "feed",
        pose: 2,
        head: Math.atan2(-Math.cos(g), -Math.sin(g)),
        speed: 0,
      });
    }
  for (let c = 0; c < 9; c++)
    d(s(5.5, 9.5), s(-1.6, -0.55) - (c > 5 ? s(0.6, 1.8) : 0), {
      role: "door",
      pose: c > 5 ? 0 : 3,
      head: s(-0.3, 0.3),
      speed: 0,
    });
  for (const c of l) c.role === "drift" && a() < 0.18 && (c.pose = 1);
  const n = l.length,
    k = at(),
    m = new oe();
  m.index = k.index;
  for (const c of ["position", "normal", "aBone"])
    m.setAttribute(c, k.attributes[c]);
  const p = new f0(new Float32Array(n * 4), 4);
  p.setUsage($0);
  const b = new f0(new Float32Array(n * 4), 4),
    N = new f0(new Float32Array(n * 4), 4);
  (N.setUsage($0),
    l.forEach((c, w) => {
      (b.array.set([c.phase, c.speed * 1.05 + 0.08, c.limp, c.pose], w * 4),
        N.array.set([c.scale * s(0.96, 1.06), c.tilt, 0, c.tint], w * 4));
    }),
    m.setAttribute("aPos", p),
    m.setAttribute("aGait", b),
    m.setAttribute("aLook", N),
    (m.instanceCount = n));
  const o = n0({ vertexShader: tt, fragmentShader: ot, uniforms: { ...i } }),
    u = new e0(m, o);
  ((u.name = "city_dead"), (u.frustumCulled = !1));
  const z = [...e.cars, ...e.police].map((c) => [c.x, c.z, 2.6]),
    f = { p: [v.x, l0, v.z], up: 0 },
    L = (c, w) =>
      (w > C.zN + 0.5 && w < C.zS - 0.3 && c > -140 && c < 170) ||
      (c > Y.x0 + 0.5 && c < Y.x1 - 0.5 && w < C.zN + 2 && w > -215),
    P = 4096,
    F = new Int32Array(P),
    I = new Int32Array(n),
    T = (c, w) =>
      ((Math.imul(c, 73856093) ^ Math.imul(w, 19349663)) >>> 0) & (P - 1),
    y = new Float32Array(z.length * 3);
  z.forEach((c, w) => y.set(c, w * 3));
  function H(c) {
    ((c = Math.min(c, 0.1)), F.fill(-1));
    for (let w = 0; w < n; w++) {
      const h = l[w],
        g = T(Math.floor(h.x / 3), Math.floor(h.z / 3));
      ((I[w] = F[g]), (F[g] = w));
    }
    for (let w = 0; w < n; w++) {
      const h = l[w];
      if (h.role === "drift") {
        let R = f.p[0] + h.ox,
          A = f.p[2] + h.oz;
        const _ = h.x > Y.x0 && h.x < Y.x1;
        (A < C.zN - 2 &&
          !_ &&
          h.z > C.zN &&
          ((R = (Y.x0 + Y.x1) / 2 + h.ox * 0.2), (A = -30 + h.oz * 0.3)),
          A > C.zN + 2 &&
            _ &&
            h.z < C.zN &&
            ((R = (Y.x0 + Y.x1) / 2 + h.ox * 0.2), (A = C.zN + 6)));
        let D = R - h.x,
          j = A - h.z;
        const U = Math.hypot(D, j);
        let K = 0,
          E = 0;
        U > 1.2 && ((K = D / U), (E = j / U));
        const Q = Math.floor(h.x / 3),
          G = Math.floor(h.z / 3);
        for (let q = -1; q <= 1; q++)
          for (let r = -1; r <= 1; r++)
            for (let S = F[T(Q + q, G + r)]; S >= 0; S = I[S]) {
              if (S === w) continue;
              const V = l[S],
                O = h.x - V.x,
                W = h.z - V.z,
                X = O * O + W * W;
              if (X < 0.7 && X > 1e-6) {
                const Z = Math.sqrt(X);
                ((K += (O / Z) * (0.85 - Z) * 2.2),
                  (E += (W / Z) * (0.85 - Z) * 2.2));
              }
            }
        for (let q = 0; q < y.length; q += 3) {
          const r = h.x - y[q],
            S = h.z - y[q + 1],
            V = y[q + 2],
            O = r * r + S * S;
          if (O < V * V && O > 1e-6) {
            const W = Math.sqrt(O);
            ((K += (r / W) * (V - W) * 0.8), (E += (S / W) * (V - W) * 0.8));
          }
        }
        const i0 = Math.hypot(K, E),
          r0 = U > 1.2 ? 1 : 0.1;
        if (i0 > 1e-4) {
          let r = Math.atan2(K, E) - h.head;
          ((r = Math.atan2(Math.sin(r), Math.cos(r))),
            (h.head += r * Math.min(1, c * 0.9)));
        }
        const J = h.speed * r0 * (0.75 + 0.25 * Math.sin(h.phase * 40 + h.x)),
          v0 = h.x + Math.sin(h.head) * J * c,
          u0 = h.z + Math.cos(h.head) * J * c;
        L(v0, u0) ? ((h.x = v0), (h.z = u0)) : (h.head += c * 0.8);
      }
      const g =
        t0(h.x, h.z) +
        ((h.z > C.zS - 5 && h.z < C.zS) || (h.z > C.zN && h.z < C.zN + 5)
          ? C.curbH
          : 0);
      ((p.array[w * 4] = h.x),
        (p.array[w * 4 + 1] = g),
        (p.array[w * 4 + 2] = h.z),
        (p.array[w * 4 + 3] = h.head));
      const M =
        f.up *
        (h.role === "feed" ? 0.2 : 1) *
        Math.max(0, 1 - Math.hypot(h.x - f.p[0], h.z - f.p[2]) / 90);
      ((h.look += (M - h.look) * Math.min(1, c * 0.6)),
        (N.array[w * 4 + 2] = h.look));
    }
    ((p.needsUpdate = !0), (N.needsUpdate = !0));
  }
  return (
    H(0),
    {
      mesh: u,
      agents: l,
      update: H,
      setAttention(c) {
        if (!c) {
          ((f.p = [v.x, l0, v.z]), (f.up = 0));
          return;
        }
        ((f.p = [c[0], c[1] ?? l0, c[2]]),
          (f.up = (c[1] ?? l0) > l0 + 6 ? 1 : 0));
        for (const w of l)
          w.role === "drift" &&
            ((w.ox = s(-9, 9)),
            (w.oz = s(-6, 6)),
            f.up && (w.oz = Math.min(w.oz, 0) - s(1.5, 8)));
        if (f.up)
          for (const w of l)
            w.role === "drift" &&
              (w.oz = Math.max(
                C.zN + 1 - f.p[2],
                Math.min(w.oz, C.zS - 1.5 - f.p[2]),
              ));
      },
      attention: f,
    }
  );
}
function nt(t, i) {
  const a = new p0({ aOrigin: 4, aDims: 4, aStyle: 4, aLight: 4 }),
    e = new p0({ aOrigin: 4, aDims: 4, aStyle: 4, aLight: 4 });
  let s = a;
  const l = new a0(),
    d = new s0(),
    v = new B(),
    x = new B(),
    n = new $(1, 1, 1),
    k = -27.39,
    m = 3.3,
    p = 0.06,
    b = 17.3,
    N = (c, w, h, g, M, R, A = 0, _ = 0.07) => {
      const D = {
        aOrigin: [(c + g) / 2, k, (h + R) / 2, 0],
        aDims: [g - c, M - k + 1.25, R - h, b],
        aStyle: [m, 3.2, p, A],
        aLight: [_, 0, 0, 0.12],
      };
      (l.compose(
        x.set((c + g) / 2, (w + M) / 2, (h + R) / 2),
        d.identity(),
        v.set(g - c, M - w, R - h),
      ),
        s.add(n, l, D));
    },
    o = -0.2,
    u = 13.5,
    z = -0.2,
    f = 20.6;
  (N(o, k, z, u, -0.3, f, 0, 0.06),
    N(7, -0.3, z, u, 3.3, 4.4, 0, 0),
    N(7, -0.3, 9.2, u, 3.3, 13.4, 0, 0),
    N(12.4, -0.3, 13.4, u, 3.3, f, 0, 0));
  const L = (c, w, h, g, M, R) => N(c, w, h, g, M, R, 1);
  ((s = e),
    L(o, 3.3, z, u, 3.62, 4.4),
    L(o, 3.3, 9.2, u, 3.62, f),
    L(o, 3.3, 4.4, 11, 3.62, 9.2),
    L(o - 0.05, 3.62, z - 0.05, u + 0.05, 4.45, z + 0.28),
    L(o - 0.05, 3.62, f - 0.28, u + 0.05, 4.45, f + 0.05),
    L(o - 0.05, 3.62, z, o + 0.28, 4.45, f),
    L(u - 0.28, 3.62, z, u + 0.05, 4.45, 4.4),
    L(u - 0.28, 3.62, 9.2, u + 0.05, 4.45, f),
    L(o - 0.08, 4.45, z - 0.12, u + 0.08, 4.6, z + 0.3),
    (s = a),
    L(o - 0.05, 3.05, z - 0.62, u + 0.05, 3.25, z),
    L(o - 0.05, 3.25, z - 0.45, u + 0.05, 3.4, z),
    L(o - 0.03, -0.55, z - 0.22, u + 0.03, -0.3, z),
    L(o - 0.03, k + m * 1.3 - 0.3, z - 0.25, u + 0.03, k + m * 1.3, z));
  const P = 5.9,
    F = 8.1;
  (N(P, l0, z - 0.06, F, l0 + 2.7, z + 0.02, 3),
    L(P - 0.4, l0 + 2.95, z - 1.1, F + 0.4, l0 + 3.1, z));
  const I = S0(i, 1),
    T = new e0(a.build(), I);
  T.name = "our_building";
  const y = new e0(e.build(), I);
  ((y.name = "our_roof"),
    (y.userData.ceiling = !0),
    T.add(y),
    t.beforeRender(() => {
      y.visible = !t.game.flags.has("noceil");
    }));
  const H = { p: [(P + F) / 2, l0 + 2.8, z - 0.6], c: [1, 0.55, 0.2], I: 9 };
  return { mesh: T, doorLamp: H };
}
const I0 = 36,
  V0 = 60,
  it = [
    [760, 125, -80],
    [560, 115, -260],
    [360, 96, -420],
    [220, 82, -500],
    [120, 72, -540],
    [40, 64, -560],
    [-60, 52, -575],
    [-150, 26, -600],
    [-230, -36, -630],
    [-300, -110, -660],
  ].map((t) => new B(...t)),
  lt = `
varying vec3 vLocal;
varying vec3 vWorld;
varying vec3 vNw;
void main() {
  vLocal = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNw = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  rt = `
varying vec3 vLocal;
varying vec3 vWorld;
varying vec3 vNw;
uniform float uOn;
uniform float uTime;
uniform float uHazeK;
${c0}
void main() {
  float t = clamp(-vLocal.y, 0.0, 1.0);                  // 0 at the lamp, 1 at the ground
  vec3 V = normalize(vWorld - cameraPosition);
  float facing = abs(dot(normalize(vNw), V));
  float soft = pow(facing, 1.6);                          // edges of the cone fade: it reads as a volume
  float fall = (1.0 - smoothstep(0.55, 1.0, t)) * (0.35 + 0.65 * exp(-t * 3.0));
  float rain = 0.75 + 0.25 * exNoise(vec2(atan(vLocal.x, vLocal.z) * 30.0, t * 40.0 + uTime * 9.0));
  float dist = length(vWorld - cameraPosition);
  float hz = 1.0 - exp(-dist * uHazeK);
  float body = smoothstep(0.05, 0.85, facing);
  vec3 c = vec3(0.80, 0.88, 1.0) * (0.12 * body * body + 0.09 * pow(facing, 6.0)) * fall * rain * uOn * (1.0 - 0.7 * hz);
  gl_FragColor = vec4(c, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  ct = `
attribute vec4 aCol;
attribute vec2 aKind;
varying vec3 vCol;
uniform float uTime;
uniform float uPx;
void main() {
  float k = 1.0;
  if (aKind.x > 0.5 && aKind.x < 1.5) k = step(fract(uTime * 1.1 + aKind.y), 0.12);            // beacon
  else if (aKind.x > 1.5) k = step(fract(uTime * 0.9 + aKind.y), 0.05);                       // strobe
  vCol = aCol.rgb * k;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aCol.a * uPx * 2.5;
  if (k < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  ft = `
varying vec3 vCol;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q) * 2.5;
  float a = exp(-r * r * 2.2) + exp(-r * 1.6) * 0.2;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function dt(t, i) {
  const a = new b0();
  a.name = "helicopter";
  const e = new b0(),
    s = new j0({ color: new K0(0.006, 0.006, 0.007), fog: !1 }),
    l = new e0(new R0(1, 12, 8).scale(3.2, 1.25, 1.3), s),
    d = new e0(
      new d0(0.22, 0.45, 6.5, 6).rotateZ(Math.PI / 2).translate(-5.6, 0.35, 0),
      s,
    ),
    v = new e0(new $(0.9, 1.6, 0.12).translate(-8.8, 1, 0), s),
    x = new e0(new $(4.2, 0.1, 2.3).translate(0.2, -1.55, 0), s),
    n = new j0({
      color: new K0(0.01, 0.01, 0.012),
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
      fog: !1,
      side: P0,
    }),
    k = new e0(new fe(5.6, 24).rotateX(-Math.PI / 2).translate(0, 1.55, 0), n);
  e.add(l, d, v, x, k);
  const m = [
      [0.3, 0.2, -1.4, 5, 0.2, 0.08, 2, 0],
      [0.3, 0.2, 1.4, 0.15, 5, 0.6, 2, 0],
      [-9.1, 0.8, 0, 4, 4, 3.6, 1.8, 0],
      [0, 1.45, 0, 8, 0.3, 0.12, 2.4, 1],
      [-1, -0.4, 0, 9, 9, 9, 2.6, 2],
      [2.6, -1.3, 0, 7, 7.4, 8, 2.2, 0],
    ],
    p = new z0();
  (p.setAttribute(
    "position",
    new o0(
      m.flatMap((g) => g.slice(0, 3)),
      3,
    ),
  ),
    p.setAttribute(
      "aCol",
      new o0(
        m.flatMap((g) => g.slice(3, 7)),
        4,
      ),
    ),
    p.setAttribute(
      "aKind",
      new o0(
        m.flatMap((g, M) => [g[7], M * 0.37]),
        2,
      ),
    ));
  const b = new D0(
    p,
    n0({
      vertexShader: ct,
      fragmentShader: ft,
      uniforms: { uTime: i.uTime, uPx: i.uPx },
      transparent: !0,
      depthWrite: !1,
      blending: A0,
    }),
  );
  ((b.frustumCulled = !1), (b.renderOrder = 6), e.add(b), a.add(e));
  const N = new d0(0, 1, 1, 28, 8, !0).translate(0, -0.5, 0),
    o = { uOn: { value: 0 }, uTime: i.uTime, uHazeK: i.uHazeK },
    u = new e0(
      N,
      n0({
        vertexShader: lt,
        fragmentShader: rt,
        uniforms: o,
        transparent: !0,
        depthWrite: !1,
        blending: A0,
        side: P0,
      }),
    );
  ((u.frustumCulled = !1), (u.renderOrder = 7), a.add(u), (a.visible = !1));
  const z = new de(it, !1, "catmullrom", 0.5),
    f = new B(),
    L = new B(),
    P = new B(),
    F = new B(),
    I = new s0(),
    T = new B(),
    y = new B(),
    H = new B(0, -1, 0);
  let c = 8;
  const w = { active: !1, t: 0 };
  function h(g, M) {
    M - c > V0 && (c += V0 * Math.floor((M - c) / V0));
    const R = M - c,
      A = R >= 0 && R <= I0;
    if (((w.active = A), (w.t = R), (a.visible = A), !A)) {
      ((i.uHeliOn.value = 0), (o.uOn.value = 0));
      return;
    }
    const _ = R / I0;
    (z.getPointAt(Math.min(_, 0.999), f),
      z.getPointAt(Math.min(_ + 0.01, 1), L),
      e.position.copy(f),
      F.subVectors(L, f).normalize());
    const D = Math.atan2(-F.z, F.x);
    (e.rotation.set(0, 0, 0),
      (e.rotation.order = "YXZ"),
      (e.rotation.y = D),
      (e.rotation.z = -0.12),
      (e.rotation.x = 0.18 * Math.sin(_ * 5)));
    const j = Math.sin(M * 0.45) * 55 + Math.sin(M * 0.17) * 25;
    (P.set(f.x + F.x * 70 - F.z * j, 0, f.z + F.z * 70 + F.x * j),
      (P.y = t0(P.x, P.z) + 8),
      T.set(f.x, f.y - 1.6, f.z));
    const U = T.distanceTo(P);
    (u.position.copy(T),
      y.subVectors(P, T).normalize(),
      I.setFromUnitVectors(H, y),
      u.quaternion.copy(I));
    const K = Math.tan(0.085) * U;
    u.scale.set(K, U, K);
    const E = Math.min(1, R / 2, (I0 - R) / 2),
      Q = _ < 0.86 ? E : E * Math.max(0, 1 - (_ - 0.86) / 0.08);
    ((o.uOn.value = Q),
      i.uHeliPos.value.copy(T),
      i.uHeliDir.value.copy(y),
      (i.uHeliOn.value = Q));
  }
  return {
    group: a,
    update: h,
    state: w,
    trigger() {
      c = i.uTime.value || 0;
    },
  };
}
async function vt(t) {
  const i = performance.now(),
    a = new b0();
  a.name = "exterior";
  const e = he(),
    s = t.game.lighting,
    l = new B(0.2, 0.216, -0.955);
  (s?.moon && l.copy(s.moon.position).sub(s.moon.target.position).normalize(),
    e.uMoonDir.value.copy(l));
  const d = we(t, e);
  a.add(d.mesh);
  const v = ke(t, e);
  a.add(v.mesh);
  const x = Ae(t.rng(20260928)),
    n = Ne(t, e, x);
  a.add(n.group);
  const k = _e(t, e, a),
    m = Je(t, e, t.rng(4242));
  a.add(m.group);
  const p = st(t, e, t.rng(99), m);
  a.add(p.mesh);
  const b = nt(t, e);
  a.add(b.mesh);
  const N = dt(t, e);
  (a.add(N.group),
    m.slots.push({
      type: "door",
      p: b.doorLamp.p,
      c: b.doorLamp.c,
      I: b.doorLamp.I,
      cone: 0,
    }));
  const o = x.near.find((g) => g.lantern);
  (o &&
    m.slots.push({
      type: "lantern",
      p: o.lantern,
      c: [1, 0.55, 0.22],
      I: 7,
      cone: 0,
    }),
    m.slots.forEach((g, M) => {
      M < e.uLampPos.value.length &&
        (e.uLampPos.value[M].set(...g.p, g.I),
        e.uLampCol.value[M].set(...g.c, g.cone));
    }));
  const u = o
      ? [{ p: o.lantern, c: [2.4, 1.1, 0.35], s: 1.3, m: [3, 0.3, 1.5, 0] }]
      : [],
    z = x.near.find((g) => g.ex && g.ex.tall),
    f = Ke(t, e, x, t.rng(777), {
      gridLamps: ye(),
      warning: z
        ? [[z.x + 4.07, z.base + z.h + z.flH * 3 + 9.2, z.z + 2.07]]
        : [],
      flames: m.flames,
      plumes: m.plumes,
      embers: m.embers,
      powered: se,
      points: u,
    });
  a.add(f.group);
  const L = [],
    P = x.tower,
    F = P.base + P.flH * 1.3 + (P.burnF - 1 + P.burnN / 2) * P.flH;
  L.push({ p: [P.x, F, P.z + P.d / 2 + 2], I: 320, c: [1, 0.42, 0.12] });
  for (const g of x.fires.slice(0, w0 - 1)) {
    const M = g.base + g.flH * 1.3 + (g.burnF - 1 + g.burnN / 2) * g.flH;
    L.push({ p: [g.x, M, g.z], I: 50 + g.burnN * 30, c: [1, 0.4, 0.11] });
  }
  L.forEach((g, M) => {
    (e.uFirePos.value[M].set(g.p[0], g.p[1], g.p[2], g.I),
      e.uFireCol.value[M].set(...g.c));
  });
  const I = v.mat.uniforms.uAve.value,
    T = m.heads;
  for (const g of I) g.set(0, 0, 0, 0);
  T.forEach((g, M) => I[M].set(g.x, g.y, g.z, g.state ? 45 : 0));
  const y = m.slots,
    H = s?.fire,
    c = { level: H ? H.intensity : 0.5, flicker: 0.14, light: H },
    w = [
      (g, M) => {
        e.uTime.value = M;
        for (let R = 0; R < L.length; R++) {
          const A = L[R],
            _ =
              0.82 +
              0.1 * Math.sin(M * 7.3 + R * 1.7) +
              0.08 * Math.sin(M * 13.1 + R * 3.1);
          e.uFirePos.value[R].w = A.I * _;
        }
        for (let R = 0; R < T.length; R++) {
          const A = T[R];
          if (A.state !== 2) continue;
          const _ =
            Math.sin(M * A.rate + A.phase) +
              Math.sin(M * A.rate * 2.7 + A.phase * 3.1) * 0.8 >
            -0.2
              ? 1
              : 0.08;
          ((I[R].w = 45 * _), (m.onAttr.array[R] = _));
        }
        m.onAttr.needsUpdate = !0;
        for (let R = 0; R < y.length; R++) {
          const A = y[R],
            _ = e.uLampPos.value[R];
          A.type === "lamp" && A.h.state === 2
            ? (_.w = I[T.indexOf(A.h)].w)
            : A.type === "fire"
              ? (_.w =
                  A.I *
                  (0.75 +
                    0.15 * Math.sin(M * 9.1) +
                    0.1 * Math.sin(M * 17.3 + 1.1)))
              : A.type === "copR"
                ? (_.w =
                    A.I *
                    ((M * 1.6) % 1 < 0.5 ? 1 : 0) *
                    ((M * 6.4) % 1 >= 0.5 ? 1 : 0.6))
                : A.type === "copB"
                  ? (_.w =
                      A.I *
                      ((M * 1.6) % 1 >= 0.5 ? 1 : 0) *
                      ((M * 6.4) % 1 >= 0.5 ? 1 : 0.6))
                  : A.type === "door" &&
                    (_.w =
                      A.I *
                      (Math.sin(M * 3.1) +
                        Math.sin(M * 7.7 + 2) * 0.7 +
                        Math.sin(M * 17.9) * 0.4 >
                      -0.6
                        ? 1
                        : 0.05));
        }
        if ((p.update(g), N.update(g, M), H && c.flicker > 0)) {
          const R =
            1 +
            c.flicker *
              (0.55 * Math.sin(M * 5.1) +
                0.3 * Math.sin(M * 11.7 + 1.3) +
                0.15 * Math.sin(M * 23.3));
          H.intensity = c.level * R;
        }
      },
    ];
  return (
    t.beforeRender(() => {
      e.uPx.value = (t.game.post?.size?.y || 720) / 720;
    }),
    t.scene.add(a),
    console.log(
      `[exterior] built in ${(performance.now() - i).toFixed(0)} ms: ${x.mid.length} mid, ${x.far.length} far, ${x.near.length} near, fx ${JSON.stringify(f.counts)}`,
    ),
    {
      stats: {
        buildMs: performance.now() - i,
        mid: x.mid.length,
        far: x.far.length,
        near: x.near.length,
        fx: f.counts,
        dead: p.agents.length,
      },
      group: a,
      anim: w,
      lights: { moon: s?.moon || null, fire: s?.fire || null },
      points: {
        cityView: [2.6, 1.62, 0.9],
        windowSeat: [2.6, 1.2, 0.45],
        burningCar: [m.burning.x, m.burning.y, m.burning.z],
        policeCar: [m.cop.x, m.cop.y, m.cop.z],
        streetDoor: [7, -27, -0.8],
      },
      props: {
        moon: { dir: l, mesh: d.mesh },
        fire: c,
        helicopter: { trigger: N.trigger, state: N.state, group: N.group },
        crowd: { setAttention: p.setAttention, agents: p.agents, mesh: p.mesh },
        rain: { setIntensity: k.setIntensity, panes: k.panes },
        uniforms: e,
        plan: x,
      },
    }
  );
}
export { vt as build };
