// assets__city-COfbVKUz 01 — array
// Lines 1-324 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
import { d as C0 } from "./plan3-BlRgM2iV.js";
import {
  x as N0,
  o as S0,
  V as X,
  a9 as Ft,
  i as ee,
  c as s0,
  $ as Ct,
  y as oe,
  am as Nt,
  U as Vt,
  X as se,
  aA as ae,
  aJ as Tt,
  G as T0,
  B as v0,
  an as m0,
  K as Mt,
  Q as G0,
  ah as kt,
  ai as ne,
  I as e0,
  aK as Pt,
  aL as At,
  b as _0,
  l as jt,
  d as et,
  ao as ot,
  m as E0,
  A as rt,
  h as q0,
  k as _t,
  J as ie,
  P as re,
  n as ce,
  a0 as le,
  H as fe,
  az as he,
  Y as Ht,
  z as Gt,
  ax as de,
} from "./index-DaQlAVPp.js";
import { H as O0 } from "./hatch-Vg74Rrkt.js";
const w0 = 16,
  k0 = 12;
function ue() {
  return {
    uTime: { value: 0 },
    uDawn: { value: 0.35 },
    uSunDir: { value: new X(0.94, -0.16, 0.3).normalize() },
    uMoonDir: { value: new X(-0.9, 0.17, -0.4).normalize() },
    uWind: { value: new Ft(0.9, -0.42) },
    uHazeK: { value: 1 / 1900 },
    uAmb: { value: 1.6 },
    uFirePos: {
      value: Array.from({ length: w0 }, () => new N0(0, -999, 0, 0)),
    },
    uFireCol: { value: Array.from({ length: w0 }, () => new X()) },
    uFireDir: { value: Array.from({ length: w0 }, () => new N0(0, 0, 0, 0)) },
    uLampPos: {
      value: Array.from({ length: k0 }, () => new N0(0, -999, 0, 0)),
    },
    uLampCol: { value: Array.from({ length: k0 }, () => new N0()) },
    uSLPos: { value: new X(0, -999, 0) },
    uSLDir: { value: new X(0, -1, 0) },
    uSLCos: { value: new Ft(0.95, 0.99) },
    uSLCol: { value: new X(0, 0, 0) },
    uFlash: { value: new N0(0, -999, 0, 0) },
    uPx: { value: 1 },
    uMirror: { value: null },
    uMirrorMat: { value: new S0() },
    uMirrorPlane: { value: new N0(0, 1, 0, -1e9) },
    uMirrorOn: { value: 0 },
  };
}
const u0 = `
float c3h12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float c3h13(vec3 p3) { p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec2 c3h22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
float c3n(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  float a = c3h12(i), b = c3h12(i + vec2(1.0, 0.0)), c = c3h12(i + vec2(0.0, 1.0)), d = c3h12(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float c3fbm(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += a * c3n(p); p = p * 2.03 + vec2(11.3, 7.7); a *= 0.5; } return s / 0.96875; }
float c3fbm3(vec2 p) { float s = 0.0, a = 0.5; for (int i = 0; i < 3; i++) { s += a * c3n(p); p = p * 2.03 + vec2(11.3, 7.7); a *= 0.5; } return s / 0.875; }
float c3wrap(float a) { return mod(a + 3.14159265, 6.2831853) - 3.14159265; }
`,
  g0 = `
uniform float uTime;
uniform float uDawn;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
float c3az(vec3 d) { return atan(d.x, -d.z + 1e-7); }
// how much the city burns toward each direction (the glow at the horizon, under the smoke)
float c3fireAz(float az) {
  float g = 0.10;
  float u;                                                 // (squares, never pow(): pow of a negative is NaN)
  u = c3wrap(az - 0.10) / 0.42; g += 1.00 * exp(-u * u);    // north, beyond the river
  u = c3wrap(az - 0.75) / 0.22; g += 0.55 * exp(-u * u);    // north-east: the downtown fires
  u = c3wrap(az + 1.35) / 0.48; g += 0.80 * exp(-u * u);    // west
  u = c3wrap(az - 3.00) / 0.50; g += 0.85 * exp(-u * u);    // south
  u = c3wrap(az + 2.35) / 0.35; g += 0.55 * exp(-u * u);    // south-west
  return g;
}
// how much of the dawn lies toward a direction (a wide lobe round the sun's azimuth)
float c3dawnAz(vec3 d) {
  vec2 h = normalize(d.xz + vec2(1e-5, 0.0));
  vec2 s = normalize(uSunDir.xz);
  return clamp(dot(h, s) * 0.5 + 0.5, 0.0, 1.0);          // (clamped: pow() of a hair under 0 is NaN, and a NaN in the
                                                            // sky's env map would spread over every standard material)
}
vec3 sky3(vec3 d) {
  float el = asin(clamp(d.y, -1.0, 1.0));
  float e = max(el, 0.0);
  float az = c3az(d);
  float dk = c3dawnAz(d);
  float dawn = 0.55 + 0.45 * uDawn;
  // the night overhead and the dusky band round the horizon
  vec3 zen = vec3(0.0060, 0.0118, 0.0232);
  vec3 hor = vec3(0.0150, 0.0200, 0.0300);
  vec3 c = mix(hor, zen, smoothstep(0.0, 1.0, pow(e / 1.5708, 0.55)));
  // the dawn: the east horizon pales to grey-blue, a faint warm line right on it
  float lobe = pow(dk, 2.6);
  c += vec3(0.050, 0.064, 0.086) * lobe * exp(-e / 0.30) * dawn;
  c += vec3(0.034, 0.042, 0.056) * pow(dk, 6.0) * exp(-e / 0.10) * dawn;
  c += vec3(0.115, 0.066, 0.036) * pow(dk, 14.0) * exp(-e / 0.030) * dawn;
  // the burning city: an ember glow low down under the smoke, a dull red-brown above it
  float g = c3fireAz(az) * (1.0 - 0.6 * pow(dk, 4.0));
  c += vec3(0.070, 0.019, 0.0045) * g * exp(-e / 0.055);
  c += vec3(0.016, 0.0062, 0.0026) * g * exp(-e / 0.20);
  // under the horizon line: the haze over the rest of the city, lit from beneath, darker the steeper we look down
  float b = max(-el, 0.0);
  vec3 under = (vec3(0.055, 0.016, 0.0042) * g + vec3(0.030, 0.038, 0.052) * lobe * dawn) * exp(-b / 0.05) + vec3(0.0035, 0.0034, 0.0038);
  under += vec3(0.010, 0.0040, 0.0016) * g * exp(-b / 0.25);
  return mix(c, under, smoothstep(0.0, 0.006, b));
}
`,
  F0 = `
uniform vec4 uFirePos[${w0}];
uniform vec3 uFireCol[${w0}];
uniform vec4 uFireDir[${w0}];      // the way a fire's light goes out (a burning storey: its facade's normal), w = how much
uniform vec4 uLampPos[${k0}];
uniform vec4 uLampCol[${k0}];
uniform vec3 uSLPos;
uniform vec3 uSLDir;
uniform vec2 uSLCos;
uniform vec3 uSLCol;
uniform vec4 uFlash;
uniform float uHazeK;
uniform float uAmb;
// the sky's light on a surface facing N (cheap irradiance of sky3: overhead blue, the dawn on the east faces, the fires'
// glow on the faces that look at the burning districts, the city's glow from below)
vec3 c3skyAmb(vec3 N) {
  float az = c3az(N);
  float g = c3fireAz(az);
  float dk = pow(c3dawnAz(N), 2.0) * (0.55 + 0.45 * uDawn);
  vec3 side = vec3(0.0150, 0.0190, 0.0260) + vec3(0.040, 0.048, 0.062) * dk + vec3(0.040, 0.0130, 0.0040) * g;
  vec3 up = vec3(0.022, 0.033, 0.052) + vec3(0.010, 0.006, 0.003);
  vec3 down = vec3(0.013, 0.008, 0.0055);
  float k = N.y;
  return (k > 0.0 ? mix(side, up, k) : mix(side, down, -k)) * uAmb;
}
vec3 cityLight(vec3 P, vec3 N) {
  vec3 L = c3skyAmb(N);
  L += vec3(0.028, 0.030, 0.034) * max(dot(N, uMoonDir), 0.0) * uAmb;
  for (int i = 0; i < ${w0}; i++) {
    vec4 f = uFirePos[i];
    if (f.w <= 0.0) continue;
    vec3 d = f.xyz - P; float r2 = dot(d, d); vec3 dn = d * inversesqrt(r2);
    float nl = max(dot(N, dn), 0.0) * 0.8 + 0.2;
    vec4 fd = uFireDir[i];
    float lobe = mix(1.0, smoothstep(-0.35, 0.6, -dot(dn, fd.xyz)), fd.w);
    L += uFireCol[i] * f.w * nl * lobe / (r2 + 25.0);
  }
  for (int i = 0; i < ${k0}; i++) {
    vec4 l = uLampPos[i];
    if (l.w <= 0.0) continue;
    vec3 d = l.xyz - P; float r2 = dot(d, d); vec3 ld = d * inversesqrt(r2);
    float cone = mix(1.0, smoothstep(0.1, 0.6, ld.y), uLampCol[i].w);
    L += uLampCol[i].rgb * l.w * max(dot(N, ld), 0.0) * cone / (r2 + 1.0);
  }
  if (uSLCol.r + uSLCol.g + uSLCol.b > 0.0) {
    vec3 d = P - uSLPos; float r2 = dot(d, d); vec3 dn = d * inversesqrt(r2);
    float spot = smoothstep(uSLCos.x, uSLCos.y, dot(dn, uSLDir));
    L += uSLCol * spot * max(dot(N, -dn), 0.0) / (r2 + 1.0);
  }
  if (uFlash.w > 0.0) {
    vec3 d = uFlash.xyz - P; float r2 = dot(d, d);
    L += vec3(1.0, 0.55, 0.22) * uFlash.w * (max(dot(N, d * inversesqrt(r2)), 0.0) * 0.85 + 0.15) / (r2 + 40.0);
  }
  return L;
}
// highlights of the fires, the lamps and the searchlight on a glossy surface (glass, puddles, wet roofs)
vec3 citySpec(vec3 P, vec3 N, vec3 V, float shin) {
  vec3 S = vec3(0.0);
  float norm = (shin + 8.0) * 0.04;
  for (int i = 0; i < ${w0}; i++) {
    vec4 f = uFirePos[i];
    if (f.w <= 0.0) continue;
    vec3 d = f.xyz - P; float r2 = dot(d, d); vec3 ld = d * inversesqrt(r2);
    S += uFireCol[i] * f.w * pow(max(dot(N, normalize(ld - V)), 0.0), shin) * norm * max(dot(N, ld), 0.0) / (r2 + 25.0);
  }
  for (int i = 0; i < ${k0}; i++) {
    vec4 l = uLampPos[i];
    if (l.w <= 0.0) continue;
    vec3 d = l.xyz - P; float r2 = dot(d, d); vec3 ld = d * inversesqrt(r2);
    S += uLampCol[i].rgb * l.w * pow(max(dot(N, normalize(ld - V)), 0.0), shin) * norm * max(dot(N, ld), 0.0) / (r2 + 1.0);
  }
  if (uSLCol.r + uSLCol.g + uSLCol.b > 0.0) {
    vec3 d = uSLPos - P; float r2 = dot(d, d); vec3 ld = d * inversesqrt(r2);
    float spot = smoothstep(uSLCos.x, uSLCos.y, dot(-ld, uSLDir));
    S += min(uSLCol * spot * pow(max(dot(N, normalize(ld - V)), 0.0), shin) * norm * max(dot(N, ld), 0.0) / (r2 + 1.0), vec3(5.0));
  }
  return S;
}
// smoke and mist between the eye and P: thicker low down (the smoke settles in the streets)
float c3hazeAmt(vec3 P, float dist) {
  float low = 1.0 - smoothstep(0.0, 60.0, P.y);
  return 1.0 - exp(-dist * uHazeK * (1.0 + 0.9 * low));
}
// the haze's colour toward a direction: the sky at the horizon that way (never under it: no seam where the skyline
// crosses the horizon), dimmer the steeper we look down (the air under us is lit by the city, not by the sky)
vec3 c3hazeCol(vec3 dir) {
  vec3 h = sky3(normalize(vec3(dir.x, 0.015 + max(dir.y, 0.0) * 0.5, dir.z)));
  return h * mix(1.0, 0.55, smoothstep(0.0, -0.6, dir.y));
}
vec3 cityHaze(vec3 col, vec3 P) {
  vec3 D = P - cameraPosition;
  float dist = length(D);
  vec3 dir = D / max(dist, 1e-3);
  return mix(col, c3hazeCol(dir), c3hazeAmt(P, dist));
}
// what a mirror (glass) shows the way R goes: the sky above the horizon; below it the burning city - its haze, the glow of
// the fires toward their districts
vec3 c3reflect(vec3 R) {
  if (R.y >= 0.0) return sky3(normalize(vec3(R.x, R.y * 0.9 + 0.012, R.z)));
  vec3 h = c3hazeCol(R) * mix(0.9, 0.45, smoothstep(0.0, -0.5, R.y));
  float az = c3az(R);
  h += vec3(0.05, 0.014, 0.003) * c3fireAz(az) * exp(R.y / 0.08);
  return h;
}
// a glossy surface's reflection of the sky (the moon's glint in it)
vec3 c3skyRefl(vec3 V, vec3 N, float rough) {
  vec3 R = reflect(V, N);
  R.y = abs(R.y);
  float fres = 0.04 + 0.96 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);
  vec3 Rr = normalize(vec3(R.x, max(R.y - rough * 0.4, 0.01), R.z));
  vec3 s = sky3(Rr) * (1.0 - rough * 0.5);
  float mc = dot(R, uMoonDir);
  s += vec3(0.9, 0.85, 0.75) * 0.5 * smoothstep(0.9990 - rough * 0.02, 0.99985, mc);
  return s * fres;
}
`;
function r0(m) {
  const e = new ee({ fog: !1, lights: !1, ...m });
  return ((e.userData.city3 = !0), e);
}
const h0 = { x0: 350, x1: 530, z0: 30, z1: 205 },
  $ = { z0: -610, z1: -500, water: -12, bed: -15, top: 0, parapet: 1.1 },
  wt = {
    z0: -496,
    z1: -474,
    top: 12.4,
    bottom: 10,
    deck: 0.7,
    x0: -420,
    x1: 3300,
    pierStep: 34,
    pierX0: 1035,
  },
  pe = { z0: -625 },
  Q = { x0: -900, x1: 3400, z0: -2300, z1: 1300 },
  d0 = { x0: -260, x1: 165, z0: 60, z1: 420 },
  st = (m, e, d = 0) =>
    m > d0.x0 - d && m < d0.x1 + d && e > d0.z0 - d && e < d0.z1 + d,
  V0 = 4,
  Y0 = {
    x0: 424,
    z0: 196,
    x1: 436,
    z1: 212,
    y: -0.02,
    hole: { x0: 427.7, z0: 203, x1: 432.3, z1: 209.3 },
  },
  it = (m, e, d = 0) =>
    m > Y0.x0 - d && m < Y0.x1 + d && e > Y0.z0 - d && e < Y0.z1 + d,
  j0 = (m) => 440 + 102 * m,
  U0 = (m) => 18 - 80 * m,
  K0 = (m) => 219 + 80 * m,
  Q0 = (m) => -680 - 76 * m;
function me() {
  const m = [];
  for (let e = -12; e <= 29; e++) {
    const d = j0(e);
    if (d < Q.x0 || d > Q.x1) continue;
    const n = e % 3 === 0,
      h = e === 0 ? 17 : e === -1 || e === 1 ? 12 : n ? 16 : 11,
      c = [];
    e === 0
      ? c.push([-487, 6], [233, Q.z1])
      : d > h0.x0 - 20 && d < h0.x1 + 20 && e !== -1 && e !== 1
        ? c.push([-487, 6], [233, Q.z1])
        : c.push([-487, Q.z1]);
    for (const [w, s] of c)
      m.push({
        x: d,
        hw: h,
        z0: w,
        z1: s,
        kind: n || Math.abs(e) === 1 ? "ave" : "st",
      });
    m.push({
      x: d,
      hw: n ? 12 : 10,
      z0: Q.z0,
      z1: -617.5,
      kind: n ? "ave" : "st",
      old: !0,
    });
  }
  return m;
}
