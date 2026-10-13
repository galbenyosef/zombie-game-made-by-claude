// assets__exterior-BqAhvNw2 01 — push
// Lines 1-258 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
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
