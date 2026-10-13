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
function ve() {
  const m = [];
  for (let d = 0; d <= 5; d++) {
    const n = U0(d),
      h = d === 0 ? 12 : d === 3 ? 16 : 10;
    m.push({
      z: n,
      hw: h,
      x0: Q.x0,
      x1: Q.x1,
      kind: d === 3 || d === 0 ? "ave" : "st",
    });
  }
  for (let d = 0; e(d) < Q.z1; d++)
    m.push({
      z: K0(d),
      hw: d === 0 ? 14 : d % 3 === 0 ? 15 : 10,
      x0: Q.x0,
      x1: Q.x1,
      kind: d % 3 === 0 ? "ave" : "st",
    });
  for (let d = 0; Q0(d) > Q.z0; d++)
    m.push({
      z: Q0(d),
      hw: d % 4 === 3 ? 11 : 8,
      x0: Q.x0,
      x1: Q.x1,
      kind: d % 4 === 3 ? "ave" : "st",
      old: !0,
    });
  return (
    m.push({ z: -487, hw: 13, x0: wt.x0, x1: wt.x1, kind: "quay" }),
    m.push({ z: -617.5, hw: 7.5, x0: Q.x0, x1: Q.x1, kind: "quay", old: !0 }),
    m
  );
  function e(d) {
    return K0(d);
  }
}
const bt = [
  { name: "twins", x0: 655, x1: 730, z0: -292, z1: -152 },
  { name: "climb", x0: 961, x1: 1036, z0: -292, z1: -152 },
];
function xe() {
  const m = [],
    e = [];
  for (let s = -12; s <= 29; s++) e.push(j0(s));
  const d = (s) =>
      s === 0 ? 17 : s === -1 || s === 1 ? 12 : s % 3 === 0 ? 16 : 11,
    n = (s) => (s % 3 === 0 ? 12 : 10),
    h = [[-474, U0(5) - 10]];
  for (let s = 5; s >= 1; s--)
    h.push([
      U0(s) + (s === 3 ? 16 : 10),
      U0(s - 1) - (s - 1 === 3 ? 16 : s - 1 === 0 ? 12 : 10),
    ]);
  const c = [];
  for (let s = 0; K0(s) < Q.z1; s++) {
    const x = s === 0 ? 14 : s % 3 === 0 ? 15 : 10,
      k = (s + 1) % 3 === 0 ? 15 : 10;
    c.push([K0(s) + x, Math.min(Q.z1, K0(s + 1) - k)]);
  }
  const w = [U0(0) + 12, K0(0) - 14];
  for (let s = 0; s < e.length - 1; s++) {
    const x = s - 12,
      k = e[s] + d(x),
      P = e[s + 1] - d(x + 1);
    if (P < Q.x0 || k > Q.x1) continue;
    for (const [N, T] of [...h, w, ...c])
      T - N < 8 ||
        (k >= j0(-1) && P <= j0(1) && N >= w[0] - 1 && T <= w[1] + 1) ||
        m.push({
          x0: k,
          x1: P,
          z0: N,
          z1: T,
          region: N > 200 ? "south" : "down",
        });
    const _ = e[s] + n(x),
      g = e[s + 1] - n(x + 1);
    let M = pe.z0;
    for (let N = 0; Q0(N) > Q.z0; N++) {
      const T = N % 4 === 3 ? 11 : 8,
        S = M,
        v = Q0(N) + T;
      (S - v > 8 && m.push({ x0: _, x1: g, z0: v, z1: S, region: "old" }),
        (M = Q0(N) - T));
    }
  }
  for (const s of bt) {
    for (let x = m.length - 1; x >= 0; x--) {
      const k = m[x];
      k.x0 >= s.x0 - 1 &&
        k.x1 <= s.x1 + 1 &&
        k.z0 >= s.z0 - 1 &&
        k.z1 <= s.z1 + 1 &&
        m.splice(x, 1);
    }
    m.push({
      x0: s.x0,
      x1: s.x1,
      z0: s.z0,
      z1: s.z1,
      region: "down",
      superName: s.name,
    });
  }
  return m;
}
function we() {
  const m = me(),
    e = ve(),
    d = [];
  for (const h of e) {
    let c = [[h.x0, h.x1]];
    for (const w of bt)
      h.z < w.z0 ||
        h.z > w.z1 ||
        (c = c.flatMap(([s, x]) =>
          w.x1 <= s || w.x0 >= x
            ? [[s, x]]
            : [
                [s, w.x0],
                [w.x1, x],
              ].filter(([k, P]) => P - k > 1),
        ));
    for (const [w, s] of c)
      if (h.z > h0.z0 && h.z < h0.z1)
        for (const [x, k] of [
          [w, Math.min(s, j0(-1))],
          [Math.max(w, j0(1)), s],
        ])
          k - x > 1 && d.push({ ...h, x0: x, x1: k });
      else d.push({ ...h, x0: w, x1: s });
  }
  const n = [];
  for (const h of m) {
    let c = [[h.z0, h.z1]];
    for (const w of bt)
      h.x > w.x0 &&
        h.x < w.x1 &&
        (c = c.flatMap(([s, x]) =>
          w.z1 <= s || w.z0 >= x
            ? [[s, x]]
            : [
                [s, w.z0],
                [w.z1, x],
              ].filter(([k, P]) => P - k > 1),
        ));
    for (const [w, s] of c) n.push({ ...h, z0: w, z1: s });
  }
  return { ns: n, ew: d };
}
const Ot = [
    { name: "b0", x: 134, w: 18, kind: "truss" },
    { name: "b1", x: 644, w: 22, kind: "arch" },
    { name: "b2", x: 1154, w: 24, kind: "girder", piers: [-524, -586] },
    { name: "b3", x: 1664, w: 30, kind: "cable", tower: 92 },
    { name: "b4", x: 2276, w: 22, kind: "girder", piers: [-540, -570] },
  ],
  be = `
varying vec3 vDir;
void main() {
  vDir = position;
  vec3 vp = (viewMatrix * vec4(position, 0.0)).xyz;
  gl_Position = projectionMatrix * vec4(vp * 900.0, 1.0);
}
`,
  ye = `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  ge = `
  if (starMask > 0.0) {
    vec3 sp = d * 300.0;
    vec3 ci = floor(sp);
    float h = c3h13(ci);
    if (h > 0.9965) {
      vec3 jit = vec3(c3h13(ci + 1.7), c3h13(ci + 5.3), c3h13(ci + 9.1)) - 0.5;
      vec3 sc = normalize(ci + 0.5 + jit * 0.6) * 300.0;
      float rr = length(sp - sc);
      float px = pxStar;
      float s = 1.0 - smoothstep(0.0, max(px, 0.10), rr);
      float tw = 0.75 + 0.25 * sin(uTime * (1.1 + h * 31.0) + h * 311.0);
      stars = vec3(0.80, 0.86, 1.0) * s * tw * (0.020 + 0.12 * pow((h - 0.9965) / 0.0035, 3.0)) * starMask;
    }
  }
`,
  Rt = (m) => `
varying vec3 vDir;
uniform float uMoonR;
uniform vec2 uWind;
${u0}
${g0}
vec2 deckUV(vec3 d, float k) { return d.xz / (max(d.y, 0.0) + 0.06) * k; }
float mBlob(vec2 q, vec2 c, vec2 r) { return 1.0 - smoothstep(0.55, 1.0, length((q - c) / r)); }
float moonMaria(vec2 q) {
  vec2 w = q + (vec2(c3n(q * 4.0 + 3.0), c3n(q * 4.0 + 7.0)) - 0.5) * 0.18;
  float m = 0.0;
  m = max(m, mBlob(w, vec2(-0.30, 0.40), vec2(0.30, 0.24)));
  m = max(m, mBlob(w, vec2(-0.60, 0.02), vec2(0.26, 0.46)));
  m = max(m, mBlob(w, vec2(0.12, 0.36), vec2(0.15, 0.14)));
  m = max(m, mBlob(w, vec2(0.31, 0.10), vec2(0.20, 0.16)));
  m = max(m, mBlob(w, vec2(0.52, -0.17), vec2(0.12, 0.15)));
  m = max(m, mBlob(w, vec2(-0.18, -0.36), vec2(0.18, 0.12)));
  m = max(m, mBlob(w, vec2(-0.47, -0.37), vec2(0.09, 0.09)));
  float n = c3n(q * 7.0) * 0.5 + c3n(q * 17.0) * 0.3;
  return clamp(m * (0.70 + 0.5 * n), 0.0, 1.0);
}
void main() {
  vec3 d = normalize(vDir);
  float el = asin(clamp(d.y, -1.0, 1.0));
  float e = max(el, 0.0);
  float az = c3az(d);
  float dk = c3dawnAz(d);
  float dawn = 0.55 + 0.45 * uDawn;
  float g = c3fireAz(az) * (1.0 - 0.6 * pow(dk, 4.0));
  vec3 col = sky3(d);
  vec2 wind = uWind * uTime * 0.0006;
  // (every derivative here, in uniform control flow: inside a branch that differs between neighbouring pixels they are
  // undefined)
  float pxStar = length(fwidth(d * 300.0)) * 0.7;
  vec2 qCity = vec2(az * 160.0, log(max(-el, 0.0) + 0.004) * 34.0);
  float pxCity = length(fwidth(qCity));
  vec2 p0d = deckUV(d, 1.0);
  vec2 prd = vec2(p0d.x * 0.92 + p0d.y * 0.38, -p0d.x * 0.38 + p0d.y * 0.92);
  float fwDeck = length(fwidth(vec2(prd.x * 0.35, prd.y * 1.6)));
  vec2 psd = deckUV(d, 0.6);
  float fwBand = length(fwidth(vec2(psd.x * 0.8 + psd.y * 0.6, -psd.x * 0.6 + psd.y * 0.8)));

  // ---- the moon: pale, low in the west, warmed a little by the air it shines through
  vec3 mR = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
  vec3 mU = cross(mR, uMoonDir);
  float cm = dot(d, uMoonDir);
  float mAng = length(cross(d, uMoonDir));
  float disc = 0.0;
  vec2 qm = vec2(dot(d, mR), dot(d, mU)) / uMoonR;
  float aaM = fwidth(length(qm)) + 0.01;                     // (derivatives outside the branches: undefined inside)
  if (cm > 0.0) {
    vec2 q = qm;
    float r = length(q);
    float aa = aaM;
    disc = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
    if (disc > 0.0) {
      float nz = sqrt(max(0.0, 1.0 - r * r));
      vec3 mc = vec3(1.0, 0.86, 0.66) * 0.62;
      mc *= 0.55 + 0.45 * pow(nz, 0.5);
      mc *= 1.0 - moonMaria(q) * 0.42;
      mc *= mix(0.72, 1.0, smoothstep(-1.0, 0.6, q.y));
      col = mix(col, mc, disc);
    }
    float outR = max(mAng - uMoonR, 0.0);
    col += vec3(0.85, 0.78, 0.66) * (0.20 * exp(-outR / (uMoonR * 0.35)) + 0.030 * exp(-outR / (uMoonR * 2.5)) + 0.006 * exp(-outR / 0.18)) * (1.0 - disc);
  }

  // ---- the rest of the city under the horizon: tiny far lights and far fires in the haze
  if (el < 0.0 && el > -0.16) {
    float b = -el;
    vec2 q = vec2(az * 160.0, log(b + 0.004) * 34.0);
    vec2 qi = floor(q);
    float h = c3h12(qi + 7.0);
    vec2 qf = fract(q) - 0.5 - (c3h22(qi + 3.0) - 0.5) * 0.55;
    float pxq = pxCity;
    float dotm = 1.0 - smoothstep(0.0, max(pxq * 0.55, 0.10), length(qf));
    float lit = step(0.93 - 0.05 * min(g, 1.0), h) * dotm;
    vec3 lc = mix(vec3(1.0, 0.42, 0.12), vec3(1.0, 0.62, 0.30), fract(h * 13.0));
    float fadeH = smoothstep(0.003, 0.025, b) * (1.0 - smoothstep(0.09, 0.15, b));
    col += lc * lit * 0.20 * fadeH * (0.75 + 0.25 * sin(uTime * 0.7 + h * 50.0));
  }

  // ---- the last stars (gone toward the dawn, and near the glow of the fires)
  float starMask = smoothstep(0.12, 0.40, el) * (1.0 - smoothstep(0.35, 0.75, dk * (1.0 - smoothstep(0.5, 1.2, el)))) * (1.0 - 0.6 * uDawn);
  vec3 stars = vec3(0.0);
  ${m ? "" : ge}

  // ---- high thin cloud: long streaks that catch the first light in the east (rose and pale gold under them), lit by
  // the fires from beneath over the burning districts, dark grey-blue against the night elsewhere
  float den = 0.0;
  if (d.y > -0.02) {
    vec2 p0 = deckUV(d, 1.0);
    vec2 pr = vec2(p0.x * 0.92 + p0.y * 0.38, -p0.x * 0.38 + p0.y * 0.92);
    vec2 p = vec2(pr.x * 0.35, pr.y * 1.6) + wind;
    float fw = fwDeck;
    float det = 1.0 - smoothstep(0.1, 0.7, fw);
    float n = c3fbm(p * 0.9);
    float m = c3fbm3(p * 3.4 + 5.2);
    n = mix(0.5, n, clamp(det * 1.5, 0.0, 1.0)); m = mix(0.5, m, det);
    den = smoothstep(0.52, 0.80, n + (m - 0.5) * 0.45) * smoothstep(-0.02, 0.06, d.y) * (1.0 - smoothstep(0.75, 1.3, e));
    float lowK = exp(-e / 0.22);
    vec3 base = sky3(normalize(vec3(d.x, max(d.y, 0.0) * 0.6 + 0.02, d.z))) * 0.70;
    vec3 rose = mix(vec3(0.090, 0.050, 0.044), vec3(0.150, 0.085, 0.048), pow(dk, 8.0)) * pow(dk, 3.5) * (0.35 + 0.65 * lowK) * dawn * 1.6;
    vec3 ember = vec3(0.050, 0.014, 0.004) * g * lowK;
    vec3 cc = base + rose + ember;
    cc *= 0.82 + 0.36 * m;
    col = mix(col + stars, cc, den * 0.92);
  } else col += stars;

  // ---- banks of smoke low over the burning horizon, drifting with the wind, lit orange from under them
  if (d.y > -0.04 && el < 0.40) {
    vec2 ps = deckUV(d, 0.6);
    vec2 pr = vec2(ps.x * 0.8 + ps.y * 0.6, -ps.x * 0.6 + ps.y * 0.8);
    float fw = fwBand;
    float sm = c3fbm(vec2(pr.x * 0.28, pr.y * 1.4) + vec2(uTime * 0.010, 0.0));
    sm = mix(0.5, sm, 1.0 - smoothstep(0.1, 0.8, fw));
    float band = smoothstep(0.50, 0.82, sm) * exp(-e / 0.085) * smoothstep(-0.04, 0.0, d.y) * (0.25 + 0.75 * min(g, 1.2));
    float underlit = exp(-e / 0.03);
    vec3 smc = vec3(0.0085, 0.0062, 0.0058) + vec3(0.050, 0.013, 0.0030) * g * underlit + vec3(0.012, 0.012, 0.014) * pow(dk, 3.0) * dawn;
    col = mix(col, smc, band * 0.80);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function ze(m, e) {
  const d = { ...e, uMoonR: { value: 0.016 } },
    n = r0({
      vertexShader: be,
      fragmentShader: Rt(!1),
      uniforms: d,
      side: Nt,
      depthWrite: !1,
      depthTest: !1,
    }),
    h = new s0(new Ct(1, 96, 48), n);
  ((h.name = "city3_sky"), (h.frustumCulled = !1), (h.renderOrder = -1e3));
  const c = new oe();
  c.name = "city3_sky_env";
  const w = r0({
    vertexShader: ye,
    fragmentShader: Rt(!0),
    uniforms: d,
    side: Nt,
    depthWrite: !1,
  });
  return (
    c.add(new s0(new Ct(40, 64, 32), w)),
    { mesh: h, env: c, uniforms: d, mat: n, update(s) {} }
  );
}
const $t = {
    eye: [0.5, 0.9, 0],
    rotorUp: 2.75,
    rotorR: 5.5,
    skidDown: 0.65,
    tailBack: 7.5,
    tailUp: 0.9,
    tailR: 0.85,
    noseFwd: 3.1,
    bodyR: 1,
  },
  Xt = -Math.PI / 2,
  nt = [
    [0, 452, 0.65, 92],
    [1.2, 452, 0.95, 92],
    [2.4, 451.9, 3.2, 91.4],
    [3.6, 451.1, 7.4, 88.6],
    [4.8, 449.4, 12.4, 82],
    [6, 446.8, 17.6, 70.5],
    [7.2, 443.8, 22.4, 53.5],
    [8.4, 441.4, 26.4, 31.5],
    [9.6, 440.2, 29.5, 4.5],
    [10.8, 440, 32, -26],
    [12, 440, 34.5, -59],
    [13.2, 440, 36.8, -93],
    [14, 440, 37.49, -115],
    [14.84, 440.01, 37.89, -137.01],
    [15.71, 441.29, 37.26, -158.96],
    [16.58, 447.23, 36, -180.06],
    [17.45, 459.32, 35.24, -198.33],
    [18.32, 476.46, 35, -211.98],
    [19.17, 496.98, 35, -219.67],
    [19.96, 518.83, 35, -221.91],
    [20.71, 540.83, 35, -222],
    [21.41, 562.83, 35, -222],
    [22.09, 584.83, 35, -222],
    [22.75, 606.83, 35, -222],
    [23.39, 628.83, 35, -222],
    [24.03, 650.83, 35, -222],
    [24.66, 672.83, 35, -222],
    [25.29, 694.83, 35, -222],
    [25.92, 716.83, 35, -222],
    [26.55, 738.83, 35, -222],
    [27.81, 783, 35.2, -222],
    [29.01, 825, 35.6, -222],
    [30.18, 866, 36.6, -222],
    [31.18, 897, 39, -222],
    [32.18, 921, 43.6, -222],
    [33.18, 938, 51.5, -222],
    [34.18, 947, 63.5, -222],
    [35.18, 950.4, 77.5, -222],
    [36.18, 952.2, 91, -222],
    [37, 956.6, 99.5, -222],
    [37.6, 962, 104.5, -222],
    [39.34, 982, 107.4, -222],
    [40.74, 1001.99, 107.04, -222.41],
    [41.95, 1021.44, 104.2, -226.68],
    [43.07, 1037.8, 98.87, -237.94],
    [44.14, 1048.2, 91.06, -254.85],
    [45.16, 1051.75, 81.91, -274.46],
    [46.09, 1052, 71.99, -294.48],
    [46.93, 1052, 61.99, -314.48],
    [47.69, 1052, 52.44, -334.48],
    [48.41, 1052, 42.94, -354.48],
    [49.11, 1052, 34.79, -374.48],
    [49.8, 1052, 26.79, -394.48],
    [50.49, 1052, 19.82, -414.48],
    [51.18, 1052, 13.55, -434.48],
    [51.87, 1052, 8.6, -454.48],
    [52.69, 1052, 4.8, -476.48],
    [53.56, 1052, 4, -498.48],
    [54.52, 1052.71, 1.5, -520.46],
    [55.54, 1058.23, -2.5, -541.64],
    [56.54, 1071.18, -5.3, -559.26],
    [57.53, 1089.88, -6.9, -570.58],
    [58.49, 1111.43, -7.3, -574.58],
    [59.4, 1133.43, -7.3, -574.89],
    [60.34, 1155.43, -7.3, -574.89],
    [61.34, 1177.43, -6.42, -574.89],
    [62.36, 1199.42, -4.73, -575.4],
    [63.37, 1220.78, -1.46, -580.24],
    [64.38, 1238.88, 3.36, -592.5],
    [65.38, 1250.91, 6.71, -610.75],
    [66.34, 1255.54, 9.08, -632.16],
    [67.27, 1256, 11.19, -654.16],
    [68.2, 1256, 13.24, -676.16],
    [69.12, 1256, 15.6, -698],
    [69.96, 1256.3, 17.6, -716],
    [70.76, 1257.2, 18.6, -730],
    [71.56, 1258.6, 17, -740.5],
    [72.36, 1259.8, 12.5, -748],
    [73.16, 1260.6, 6.2, -752.5],
    [73.86, 1261, 0.65, -755],
  ],
  Me = {
    park: 8.4,
    birds: 10.9,
    crane: 17,
    glass: 22.4,
    gap: 24.9,
    smokeIn: 29.6,
    smokeOut: 31,
    climb: 33,
    crest: 37.6,
    tank: 47.3,
    heli2: 50,
    highway: 52.9,
    bridge: 60,
    quay: 65.4,
    wires: 68,
    clip: 69.6,
    crash: 73.86,
  };
function ct(m, e) {
  const d = m.length,
    n = new Float64Array(d - 1),
    h = new Float64Array(d),
    c = new Float64Array(d),
    w = new Float64Array(d),
    s = new Float64Array(d),
    x = new Float64Array(d),
    k = new Float64Array(d),
    P = new Float64Array(d);
  for (let g = 0; g < d - 1; g++) n[g] = m[g + 1] - m[g];
  for (let g = 1; g < d - 1; g++)
    h[g] = (3 / n[g]) * (e[g + 1] - e[g]) - (3 / n[g - 1]) * (e[g] - e[g - 1]);
  c[0] = 1;
  for (let g = 1; g < d - 1; g++)
    ((c[g] = 2 * (m[g + 1] - m[g - 1]) - n[g - 1] * w[g - 1]),
      (w[g] = n[g] / c[g]),
      (s[g] = (h[g] - n[g - 1] * s[g - 1]) / c[g]));
  c[d - 1] = 1;
  for (let g = d - 2; g >= 0; g--)
    ((k[g] = s[g] - w[g] * k[g + 1]),
      (x[g] = (e[g + 1] - e[g]) / n[g] - (n[g] * (k[g + 1] + 2 * k[g])) / 3),
      (P[g] = (k[g + 1] - k[g]) / (3 * n[g])));
  const _ = (g) => {
    if (g <= m[0]) return 0;
    if (g >= m[d - 1]) return d - 2;
    let M = 0,
      N = d - 2;
    for (; M < N;) {
      const T = (M + N + 1) >> 1;
      m[T] <= g ? (M = T) : (N = T - 1);
    }
    return M;
  };
  return {
    at(g) {
      const M = _(g),
        N = g - m[M];
      return e[M] + x[M] * N + k[M] * N * N + P[M] * N * N * N;
    },
    vel(g) {
      const M = _(g),
        N = g - m[M];
      return x[M] + 2 * k[M] * N + 3 * P[M] * N * N;
    },
    acc(g) {
      const M = _(g),
        N = g - m[M];
      return 2 * k[M] + 6 * P[M] * N;
    },
  };
}
const ke = 9.81;
function Pe() {
  const m = nt.map((i) => i[0]),
    e = ct(
      m,
      nt.map((i) => i[1]),
    ),
    d = ct(
      m,
      nt.map((i) => i[2]),
    ),
    n = ct(
      m,
      nt.map((i) => i[3]),
    ),
    h = m[0],
    c = m[m.length - 1],
    w = (i) => (i < h ? h : i > c ? c : i),
    s = (i, t = [0, 0, 0]) => (
      (i = w(i)),
      (t[0] = e.at(i)),
      (t[1] = d.at(i)),
      (t[2] = n.at(i)),
      t
    ),
    x = (i, t = [0, 0, 0]) => (
      (i = w(i)),
      (t[0] = e.vel(i)),
      (t[1] = d.vel(i)),
      (t[2] = n.vel(i)),
      t
    ),
    k = (i, t = [0, 0, 0]) => (
      (i = w(i)),
      (t[0] = e.acc(i)),
      (t[1] = d.acc(i)),
      (t[2] = n.acc(i)),
      t
    ),
    P = 0.05,
    _ = Math.ceil((c - h) / P) + 1,
    g = new Float64Array(_);
  let M = Xt;
  for (let i = 0; i < _; i++) {
    const t = h + i * P,
      u = e.vel(t),
      o = n.vel(t),
      l = Math.hypot(u, o);
    let f = l > 0.4 ? Math.atan2(u, o) : M;
    for (; f - M > Math.PI;) f -= 2 * Math.PI;
    for (; f - M < -Math.PI;) f += 2 * Math.PI;
    const z = Math.min(1, Math.max(0, (l - 0.4) / 5));
    g[i] = M = M + (f - M) * (i === 0 ? 0 : z);
  }
  const N = (i, t) => {
      const u = new Float64Array(i.length);
      for (let o = 0; o < i.length; o++) {
        let l = 0,
          f = 0;
        for (let z = -t; z <= t; z++) {
          const A = Math.min(i.length - 1, Math.max(0, o + z));
          ((l += i[A]), f++);
        }
        u[o] = l / f;
      }
      return u;
    },
    T = N(N(g, 4), 4),
    S = (i, t) => {
      const u = (w(t) - h) / P,
        o = Math.min(_ - 2, Math.floor(u)),
        l = u - o;
      return i[o] + (i[o + 1] - i[o]) * l;
    },
    v = (i) => S(T, i),
    a = [0, 0, 0],
    r = [0, 0, 0],
    y = (i) => {
      a[0] = a[1] = a[2] = 0;
      for (const t of [-0.3, -0.15, 0, 0.15, 0.3])
        (k(i + t, r),
          (a[0] += r[0] / 5),
          (a[1] += r[1] / 5),
          (a[2] += r[2] / 5));
      return a;
    },
    b = (i, t = {}) => {
      const u = x(i),
        o = y(i),
        l = Math.hypot(u[0], u[2]),
        f = v(i),
        z = Math.sin(f),
        A = Math.cos(f),
        F = o[0] * z + o[2] * A,
        E = o[0] * -A + o[2] * z,
        K = Math.max(6.5, ke + o[1]);
      return (
        (t.heading = f),
        (t.bank = Math.max(-0.9, Math.min(0.9, Math.atan2(E, K)))),
        (t.pitch = Math.max(
          -0.5,
          Math.min(0.5, -Math.atan2(F, K) - Math.min(l, 40) * 0.0035),
        )),
        t
      );
    },
    p = [];
  for (let i = h; i <= c + 1e-9; i += 0.05) {
    const t = s(i);
    p.push({ t: i, x: t[0], y: t[1], z: t[2] });
  }
  return {
    T: m,
    t0: h,
    t1: c,
    pos: s,
    vel: x,
    acc: k,
    heading: v,
    attitude: b,
    samples: p,
    FRAME: $t,
  };
}
function Yt(m, e, d = m.attitude(e)) {
  const n = m.pos(e),
    h = m.FRAME,
    c = Math.cos(d.heading),
    w = Math.sin(d.heading),
    s = Math.cos(d.bank),
    x = Math.sin(d.bank),
    k = Math.cos(d.pitch),
    P = Math.sin(d.pitch),
    _ = [w, 0, c],
    g = [c, 0, -w],
    M = [0, 1, 0],
    N = [_[0] * k + M[0] * P, _[1] * k + M[1] * P, _[2] * k + M[2] * P],
    T = [M[0] * k - _[0] * P, M[1] * k - _[1] * P, M[2] * k - _[2] * P],
    S = [T[0] * s - g[0] * x, T[1] * s - g[1] * x, T[2] * s - g[2] * x],
    v = [g[0] * s + T[0] * x, g[1] * s + T[1] * x, g[2] * s + T[2] * x],
    a = (r, y, b) => [
      n[0] + N[0] * r + v[0] * y + S[0] * b,
      n[1] + N[1] * r + v[1] * y + S[1] * b,
      n[2] + N[2] * r + v[2] * y + S[2] * b,
    ];
  return {
    p: n,
    f: N,
    l: v,
    u: S,
    rotor: a(0, 0, h.rotorUp),
    tail: a(-h.tailBack, 0, h.tailUp),
    nose: a(h.noseFwd, 0, 0.4),
    skid: a(0, 0, -h.skidDown),
    eye: a(h.eye[2], h.eye[0], h.eye[1]),
    at: a,
  };
}
function Ae(m, e = 24) {
  const d = new Map(),
    n = (h, c) => h * 100003 + c;
  for (const h of m) {
    const c = n(Math.floor(h.x / e), Math.floor(h.z / e));
    (d.get(c) || d.set(c, []).get(c)).push(h);
  }
  return {
    lowest(h, c, w, s, x) {
      let k = 1 / 0;
      const P = Math.floor((h - x) / e),
        _ = Math.floor((c + x) / e),
        g = Math.floor((w - x) / e),
        M = Math.floor((s + x) / e);
      for (let N = P; N <= _; N++)
        for (let T = g; T <= M; T++) {
          const S = d.get(n(N, T));
          if (S)
            for (const v of S) {
              const a = Math.max(h - v.x, 0, v.x - c),
                r = Math.max(w - v.z, 0, v.z - s);
              a * a + r * r < x * x && v.y < k && (k = v.y);
            }
        }
      return k;
    },
    dist(h, c, w, s, x = 200) {
      let k = x;
      const P = Math.floor((h - x) / e),
        _ = Math.floor((c + x) / e),
        g = Math.floor((w - x) / e),
        M = Math.floor((s + x) / e);
      for (let N = P; N <= _; N++)
        for (let T = g; T <= M; T++) {
          const S = d.get(n(N, T));
          if (S)
            for (const v of S) {
              const a = Math.max(h - v.x, 0, v.x - c),
                r = Math.max(w - v.z, 0, v.z - s),
                y = Math.sqrt(a * a + r * r);
              y < k && (k = y);
            }
        }
      return k;
    },
  };
}
function _e(m, e) {
  const d = Math.exp(-(((m - 900) / 520) ** 2 + ((e + 260) / 300) ** 2)),
    n = Math.exp(-(((m - 1900) / 450) ** 2 + ((e + 150) / 380) ** 2)) * 0.75,
    h = Math.exp(-(((m - 700) / 380) ** 2 + ((e - 480) / 260) ** 2)) * 0.45;
  return Math.max(d, n, h);
}
function Se(m, e, d = []) {
  const n = (o, l) => o + (l - o) * m(),
    h = (o) => o[Math.floor(m() * o.length)],
    c = we(),
    w = xe(),
    s = Ae(e.samples),
    x = [],
    k = [],
    P = [],
    _ = [],
    g = [],
    M = [],
    N = e.FRAME.skidDown,
    T = e.FRAME.rotorR + 3.5,
    S = 2.6,
    v = e.samples.filter((o, l) => l % 20 === 0),
    a = (o, l, f, z) => {
      let A = 1e9;
      for (const F of v) {
        const E = Math.max(o - F.x, 0, F.x - l),
          K = Math.max(f - F.z, 0, F.z - z);
        A = Math.min(A, Math.hypot(E, K));
      }
      return A;
    };
  let r = 0;
  const y = (o) => {
      const l = {
        rot: 0,
        base: 0,
        flH: 3.4,
        bay: 3.1,
        style: 0,
        tone: m(),
        seed: 1 + m() * 97,
        lit: 0.05,
        burnF: 0,
        burnN: 0,
        dmg: 0.08,
        groundH: 0,
        tint: m(),
        faces: 15,
        flags: 4,
        tier: "mid",
        region: "down",
        kind: "pre",
        ...o,
      };
      if (!o.exempt) {
        const z =
          s.lowest(
            l.x - l.w / 2,
            l.x + l.w / 2,
            l.z - l.d / 2,
            l.z + l.d / 2,
            T,
          ) -
          N -
          S -
          (l.flags & 16 ? 9 : 2.5);
        if (l.h > z) {
          if (z < 4) return null;
          const A = Math.max(
            1,
            Math.floor((z - (l.groundH || l.flH * 1.3) - 1.2) / l.flH) + 1,
          );
          ((l.h = Math.min(
            z,
            (l.groundH || l.flH * 1.3) + (A - 1) * l.flH + 1.2,
          )),
            (l.flags &= -25),
            (l.capped = !0));
        }
      }
      return ((l.id = r++), x.push(l), l);
    },
    b = (o, l, f) => f + Math.max(0, o - 1) * l + 1.2;
  for (const o of w) {
    if (o.superName) continue;
    const l = d.find(
      (U) =>
        Math.min(o.x1, U.x1) - Math.max(o.x0, U.x0) > (o.x1 - o.x0) * 0.5 &&
        Math.min(o.z1, U.z1) - Math.max(o.z0, U.z0) > (o.z1 - o.z0) * 0.5,
    );
    if (l) {
      ((o.claim = l.name), (o.ground = l.ground));
      continue;
    }
    const { x0: f, x1: z, z0: A, z1: F } = o,
      E = (f + z) / 2,
      K = (A + F) / 2,
      L = z - f,
      q = F - A;
    if (z > d0.x0 && f < d0.x1 && F > d0.z0 && A < d0.z1) continue;
    const R = a(f, z, A, F),
      V = Math.max(h0.x0 - z, 0, f - h0.x1) + Math.max(h0.z0 - F, 0, A - h0.z1),
      H = V < 30,
      I = o.region,
      W = _e(E, K),
      D = R < 520 || V < 160 ? 2 : R < 1250 ? 1 : 0;
    if (m() < (I === "old" ? 0.03 : 0.04) && R > 160 && !H) {
      k.push({ type: "lot", x: E, z: K, w: L, d: q });
      continue;
    }
    if (D === 0) {
      const U = 1 + Math.floor(m() * 3);
      for (let B = 0; B < U; B++) {
        const j = f + (L * B) / U,
          O = f + (L * (B + 1)) / U;
        let Z = Math.round(
          I === "old"
            ? n(3, 8)
            : I === "south"
              ? n(4, 13)
              : n(5, 14) + W * n(6, 30),
        );
        m() < 0.05 && (Z += Math.round(n(10, 30)));
        const n0 =
            Z > 18
              ? h([2, 3, 3, 5, 1])
              : h(I === "old" ? [0, 0, 0, 6, 1] : [0, 0, 1, 2, 4]),
          t0 = n0 === 3 || n0 === 5 ? 3.9 : n0 === 4 ? 3 : 3.3;
        y({
          x: (j + O) / 2,
          z: K,
          w: O - j - 1,
          d: q - 1,
          h: b(Z, t0, t0 * 1.3),
          flH: t0,
          bay: n0 === 3 ? 3 : 3.2,
          style: n0,
          tier: "far",
          region: I,
          kind: "mass",
          lit: n(0.01, 0.07),
        });
      }
      continue;
    }
    const G = (U, B, j, O) =>
        s.dist(U, B, j, O, 90) < 75 ? "near" : D === 2 ? "mid" : "far",
      a0 =
        I === "down"
          ? Math.min(0.85, W * 1.2 + (R < 120 ? 0.25 : 0)) * (H ? 0.25 : 1)
          : I === "south"
            ? W * 0.6
            : 0;
    if (L > 50 && q > 40 && m() < a0) {
      const U = n(2, 5),
        B = Math.min(L - U * 2, n(34, 62)),
        j = Math.min(q - U * 2, n(28, 52)),
        O = E + (n(-1, 1) * (L - U * 2 - B)) / 2,
        Z = K + (n(-1, 1) * (q - U * 2 - j)) / 2;
      let n0 = Math.round(n(16, 26) + W * n(10, 32) + (R < 140 ? n(4, 14) : 0));
      const t0 = h([3, 3, 3, 5, 2, 1, 5]),
        c0 = t0 === 1 ? 3.8 : 4,
        D0 = y({
          x: O,
          z: Z,
          w: B,
          d: j,
          h: b(n0, c0, c0 * 1.5),
          flH: c0,
          groundH: c0 * 1.5,
          bay: t0 === 3 ? 3 : t0 === 5 ? 2.4 : 3.4,
          style: t0,
          tier: G(O - B / 2, O + B / 2, Z - j / 2, Z + j / 2),
          region: I,
          kind: "tower",
          lit: n(0, 0.05),
          flags: 4 | (m() < 0.4 ? 8 : 0) | 32,
          dmg: n(0.04, 0.2),
        });
      if (D0 && m() < 0.7) {
        const at = Math.round(n(2, 5));
        y({
          x: E,
          z: K,
          w: L - 1,
          d: q - 1,
          h: b(at, 4.2, 5),
          flH: 4.2,
          groundH: 5,
          bay: 4,
          style: h([1, 2, 3]),
          tier: G(f, z, A, F),
          region: I,
          kind: "podium",
          flags: 38,
          lit: 0.02,
        });
      }
      if (D0) continue;
    }
    const o0 = Math.min(q / 2, I === "old" ? n(14, 20) : n(15, 24)),
      p0 = Math.min(L / 2, o0),
      b0 =
        I === "old"
          ? n(3, 6.5)
          : H
            ? n(5, 9.5)
            : I === "south"
              ? n(5, 11)
              : n(6, 12) + W * n(4, 16),
      P0 =
        I === "old"
          ? [0, 0, 0, 0, 6, 1]
          : H
            ? [0, 1, 1, 0, 2]
            : I === "south"
              ? [0, 4, 4, 2, 1, 0]
              : [1, 0, 2, 4, 1, 3],
      H0 = (U, B) => {
        const j = [];
        let O = U;
        for (; O < B - 6;) {
          let Z = n(I === "old" ? 9 : 13, I === "old" ? 20 : 30);
          (B - (O + Z) < 9 && (Z = B - O), j.push([O, O + Z]), (O += Z));
        }
        return j;
      },
      x0 = (U, B, j, O, Z, n0) => {
        const t0 = h(P0);
        let c0 = Math.max(
          2,
          Math.round(b0 + n(-1.5, 2.5) + (n0 ? n(0, 2) : 0)),
        );
        R < 70 && I !== "old" && (c0 += Math.round(n(2, 8)));
        const D0 =
            t0 === 4
              ? 3
              : t0 === 1
                ? 3.7
                : t0 === 3
                  ? 3.9
                  : I === "old"
                    ? n(3.1, 3.5)
                    : n(3.2, 3.6),
          at = t0 === 4 ? 3.6 : D0 * 1.3,
          te =
            4 |
            (I !== "south" || m() < 0.6 ? 2 : 0) |
            (t0 === 0 && m() < (I === "old" ? 0.75 : 0.35) ? 1 : 0) |
            (m() < (I === "old" ? 0.45 : 0.22) ? 16 : 0) |
            (m() < 0.6 ? 32 : 0) |
            (t0 === 4 ? 64 : 0);
        return y({
          x: (U + B) / 2,
          z: (j + O) / 2,
          w: B - U,
          d: O - j,
          h: b(c0, D0, at),
          flH: D0,
          groundH: at,
          bay: t0 === 1 ? 3.4 : t0 === 4 ? 3.6 : n(2.8, 3.4),
          style: t0,
          faces: Z,
          flags: te,
          tier: G(U, B, j, O),
          region: I,
          kind: I === "old" ? "old" : "pre",
          lit: n(0.01, 0.09),
          dmg: n(0.03, 0.2),
        });
      },
      R0 = m() < 0.15,
      B0 = m() < 0.15;
    for (const [U, B] of H0(f, z)) {
      const j = U === f || B === z,
        O = 8 | (U === f ? 2 : 0) | (B === z ? 1 : 0),
        Z = 4 | (U === f ? 2 : 0) | (B === z ? 1 : 0);
      ((R0 && !j && m() < 0.35) ||
        x0(U + 0.3, B - 0.3, A + 0.4, A + o0, O | 4, j),
        q > o0 * 2 + 6 &&
          !(B0 && !j && m() < 0.35) &&
          x0(U + 0.3, B - 0.3, F - o0, F - 0.4, Z | 8, j));
    }
    if (q > o0 * 2 + 10) {
      for (const [U, B] of H0(A + o0 + 0.3, F - o0 - 0.3))
        (x0(f + 0.4, f + p0, U + 0.3, B - 0.3, 3, !1),
          L > p0 * 2 + 6 && x0(z - p0, z - 0.4, U + 0.3, B - 0.3, 3, !1));
      L > p0 * 2 + 16 &&
        q > o0 * 2 + 16 &&
        m() < 0.3 &&
        y({
          x: E,
          z: K,
          w: L - p0 * 2 - 8,
          d: q - o0 * 2 - 8,
          h: b(Math.round(n(1, 3)), 4, 4.5),
          flH: 4,
          groundH: 4.5,
          style: 6,
          faces: 15,
          flags: 36,
          tier: D === 2 ? "mid" : "far",
          region: I,
          kind: "low",
          lit: 0,
        });
    }
  }
  const p = (o, l) => {
    let f = 0.05;
    return (
      (f +=
        0.35 * Math.exp(-(((o - 800) / 500) ** 2 + ((l + 1300) / 420) ** 2))),
      (f += 0.3 * Math.exp(-(((o + 400) / 380) ** 2 + ((l + 300) / 600) ** 2))),
      (f += 0.3 * Math.exp(-(((o - 600) / 600) ** 2 + ((l - 950) / 350) ** 2))),
      (f +=
        0.14 * Math.exp(-(((o - 900) / 420) ** 2 + ((l + 260) / 260) ** 2))),
      f
    );
  };
  for (const o of x) {
    if (o.exempt || o.kind === "low") continue;
    const l = Math.max(
      1,
      Math.floor((o.h - (o.groundH || o.flH * 1.3) - 1.2) / o.flH) + 1,
    );
    if (l < 2) continue;
    const f = p(o.x, o.z) * (o.tier === "near" ? 0.75 : 1);
    m() > f ||
      ((o.burnF = 1 + Math.floor(m() * Math.max(1, l - 1))),
      (o.burnN = Math.min(
        l - o.burnF + 1,
        1 + Math.floor(m() * (o.kind === "tower" ? 4 : 2.5)),
      )),
      (o.dmg = Math.max(o.dmg, 0.35)),
      (o.lit = 0));
  }
  const i = x
    .filter((o) => o.kind === "tower" && o.h > 70 && o.tier !== "near")
    .sort((o, l) => l.h - o.h);
  for (let o = 0, l = 0; o < i.length && l < 5; o++) {
    const f = i[o];
    if (m() < 0.55) continue;
    const z = Math.floor((f.h - (f.groundH || 6)) / f.flH);
    ((f.burnF = Math.max(2, Math.floor(z * n(0.35, 0.6)))),
      (f.burnN = Math.min(z - f.burnF, Math.round(n(6, 14)))),
      (f.dmg = 0.6),
      (f.lit = 0),
      (f.engulfed = !0),
      l++);
  }
  for (const o of x) {
    if (!o.burnN) continue;
    const l = o.groundH || o.flH * 1.3,
      f = o.base + l + (o.burnF - 1) * o.flH,
      z = f + o.burnN * o.flH,
      A = (f + z) / 2;
    [
      [1, 0, o.d],
      [-1, 0, o.d],
      [0, 1, o.w],
      [0, -1, o.w],
    ].forEach(([E, K, L], q) => {
      o.faces & (1 << q) &&
        P.push({
          x: o.x + E * (o.w / 2 + 9),
          y: A,
          z: o.z + K * (o.d / 2 + 9),
          I: 4 + Math.min(L, 40) * Math.min(o.burnN, 6) * 0.3,
          kind: "storey",
          bld: o.id,
          nx: E,
          nz: K,
          w: L,
          yb: f,
          yt: z,
          engulfed: !!o.engulfed,
        });
    });
  }
  const t = (o, l) => {
      const f =
        Math.sin(Math.floor(o / 260) * 12.9898 + Math.floor(l / 260) * 78.233) *
        43758.5453;
      return f - Math.floor(f) < 0.32;
    },
    u = (o, l) =>
      o > h0.x0 - 60 && o < h0.x1 + 60 && l > h0.z0 - 60 && l < h0.z1 + 60;
  for (const o of c.ns) {
    const l = o.hw > 15 ? 5.5 : 4;
    for (let f = o.z0 + 8; f < o.z1 - 4; f += 32)
      for (const z of [-1, 1]) {
        const A = f + (z > 0 ? 16 : 0);
        if (A > o.z1 - 4) continue;
        const F = o.x + z * (o.hw - l + 0.55),
          E = t(F, A) || u(F, A) ? m() < 0.75 : m() < 0.05;
        a(F, F, A, A) > 1500 ||
          g.push({
            x: F,
            y: 8.2,
            z: A,
            on: E,
            ax: -z,
            az: 0,
            flick: m() < 0.12,
          });
      }
  }
  for (const o of c.ew) {
    const l = o.kind === "quay" ? 4 : o.hw > 15 ? 5.5 : 4;
    for (let f = o.x0 + 8; f < o.x1 - 4; f += 32)
      for (const z of [-1, 1]) {
        const A = f + (z > 0 ? 16 : 0);
        if (A > o.x1 - 4) continue;
        const F = o.z + z * (o.hw - l + 0.55),
          E = t(A, F) || u(A, F) ? m() < 0.75 : m() < 0.05;
        a(A, A, F, F) > 1500 ||
          g.push({
            x: A,
            y: 8.2,
            z: F,
            on: E,
            ax: 0,
            az: -z,
            flick: m() < 0.12,
          });
      }
  }
  for (let o = g.length - 1; o >= 0; o--) {
    const l = g[o];
    (s.lowest(l.x - 1.5, l.x + 1.5, l.z - 1.5, l.z + 1.5, 10) < 14 ||
      st(l.x, l.z, 1) ||
      it(l.x, l.z, 1)) &&
      g.splice(o, 1);
  }
  return {
    blds: x,
    roofs: k,
    fires: P,
    plumes: _,
    lamps: g,
    cars: M,
    streets: c,
    blocks: w,
    corridor: s,
    add: y,
    R: n,
    pick: h,
    districtHeat: p,
  };
}
const C = {
    facade: 0,
    trim: 1,
    wood: 2,
    iron: 3,
    metal: 4,
    concrete: 5,
    sign: 6,
    dark: 7,
    glassRail: 8,
    crane: 9,
    mast: 10,
    plywood: 11,
    container: 12,
    helipad: 13,
    steel: 14,
    bridge: 15,
    burnt: 16,
    lamp: 17,
  },
  tt = 1024,
  yt = 6,
  Fe = `
attribute float aPart;
uniform highp sampler2D uBld;
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vNl;
varying vec3 vNw;
flat varying vec4 vB1;
flat varying vec4 vB2;
flat varying vec4 vB3;
flat varying vec4 vB4;
flat varying float vKind;
flat varying float vRot;
flat varying float vPxS;
uniform float uPx;
vec4 bfetch(int i) { return texelFetch(uBld, ivec2(i % ${tt}, i / ${tt}), 0); }
void main() {
  float kind = floor(aPart / 32768.0 + 0.001);
  int id = int(aPart - kind * 32768.0 + 0.5);
  int b = id * ${yt};
  vec4 b0 = bfetch(b);
  vB1 = bfetch(b + 1); vB2 = bfetch(b + 2); vB3 = bfetch(b + 3); vB4 = bfetch(b + 4);
  vKind = kind;
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
  float c = cos(b0.w), s = sin(b0.w);
  vec3 rel = wp.xyz - b0.xyz;
  vLocal = vec3(c * rel.x - s * rel.z, rel.y, s * rel.x + c * rel.z);
  vNl = vec3(c * n.x - s * n.z, n.y, s * n.x + c * n.z);
#ifdef OBJLOCAL
  vLocal = position; vNl = normal;                 // (a moving part: its own frame)
#endif
  vRot = b0.w;
  vPxS = 2.0 / (projectionMatrix[1][1] * 720.0 * max(uPx, 0.1));
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Ce = `
varying vec3 vWorld;
varying vec3 vLocal;
varying vec3 vNl;
varying vec3 vNw;
flat varying vec4 vB1;
flat varying vec4 vB2;
flat varying vec4 vB3;
flat varying vec4 vB4;
flat varying float vKind;
flat varying float vRot;
flat varying float vPxS;
uniform sampler2D uMirror;
uniform mat4 uMirrorMat;
uniform vec4 uMirrorPlane;
uniform float uMirrorOn;
${u0}
${g0}
${F0}
// the real reflection on the one mirror face being drawn this frame (mirror.js), or -1
vec3 c3mirror(vec3 P, vec3 N, vec3 Ng) {
  if (uMirrorOn < 0.5 || abs(dot(P, uMirrorPlane.xyz) - uMirrorPlane.w) > 0.3 || dot(N, uMirrorPlane.xyz) < 0.9) return vec3(-1.0);
  vec4 mc = uMirrorMat * vec4(P, 1.0);
  vec2 muv = mc.xy / mc.w + (Ng.xz - N.xz + Ng.yy - N.yy) * 0.12;
  return texture2D(uMirror, clamp(muv, vec2(0.002), vec2(0.998))).rgb;
}

// ---- the palettes (linear albedo)
vec3 wallColor(float style, float tone, float n) {
  vec3 c;
  if (style < 0.5 || (style > 5.5)) {                                          // brick: oxblood, brown, tan, purple-brown
    float f = floor(tone * 4.0), v = fract(tone * 4.0);
    if (f < 0.5) c = mix(vec3(0.150, 0.042, 0.028), vec3(0.185, 0.060, 0.038), v);
    else if (f < 1.5) c = mix(vec3(0.105, 0.052, 0.034), vec3(0.130, 0.070, 0.046), v);
    else if (f < 2.5) c = mix(vec3(0.200, 0.135, 0.080), vec3(0.165, 0.105, 0.062), v);
    else c = mix(vec3(0.080, 0.040, 0.036), vec3(0.098, 0.052, 0.044), v);
  } else if (style < 1.5) {                                                    // stone: limestone, sandstone, granite
    float f = floor(tone * 3.0), v = fract(tone * 3.0);
    if (f < 0.5) c = mix(vec3(0.340, 0.305, 0.240), vec3(0.290, 0.262, 0.210), v);
    else if (f < 1.5) c = mix(vec3(0.290, 0.205, 0.135), vec3(0.245, 0.175, 0.115), v);
    else c = mix(vec3(0.200, 0.200, 0.195), vec3(0.160, 0.160, 0.160), v);
  } else if (style < 2.5 || (style > 3.5 && style < 4.5)) {                    // concrete
    c = mix(vec3(0.215, 0.205, 0.190), vec3(0.165, 0.165, 0.160), tone);
  } else if (style < 3.5) {                                                    // the frame of a glass wall: dark anodized metal
    c = mix(vec3(0.040, 0.043, 0.048), vec3(0.075, 0.073, 0.070), tone);
  } else {                                                                     // the fins of the finned towers: pale concrete / metal
    c = mix(vec3(0.200, 0.195, 0.185), vec3(0.150, 0.152, 0.155), tone);
  }
  return c * (0.85 + 0.30 * n);
}
vec3 trimColor(float style, float tone) {
  if (style < 0.5 || style > 5.5) return vec3(0.24, 0.215, 0.18) * (0.85 + 0.2 * tone);         // brick's stone trim
  if (style < 1.5) return wallColor(style, tone, 0.6) * 1.15;
  if (style < 2.5 || (style > 3.5 && style < 4.5)) return vec3(0.20, 0.195, 0.185);
  return vec3(0.12, 0.125, 0.13);
}
vec3 glassTint(float t) {
  if (t < 0.35) return vec3(0.55, 0.68, 0.80);       // blue-grey
  if (t < 0.6) return vec3(0.52, 0.72, 0.66);        // green
  if (t < 0.8) return vec3(0.78, 0.64, 0.48);        // bronze
  return vec3(0.42, 0.46, 0.52);                     // smoked
}

// ---- a room behind a window (interior mapping): ro = the point on the glass in the room's frame (x across the bay,
// y up the storey, z = 0 at the glass), rd = the view ray in the same frame (z into the room)
vec3 roomColor(vec3 ro, vec3 rd, vec3 dims, float h1, float h2, float h3, float office, float sharp, float tubeK, out float depthHit, out float tubes) {
  rd.z = max(rd.z, 0.03);
  if (abs(rd.x) < 1e-4) rd.x = 1e-4;
  if (abs(rd.y) < 1e-4) rd.y = 1e-4;
  vec3 tv = (step(vec3(0.0), rd) * dims - ro) / rd;
  float t = min(min(tv.x, tv.y), tv.z);
  vec3 hp = ro + rd * t;
  depthHit = hp.z;
  tubes = 0.0;
  float isBack = step(tv.z, min(tv.x, tv.y));
  float isY = (1.0 - isBack) * step(tv.y, tv.x);
  float isFloor = isY * step(rd.y, 0.0), isCeil = isY * step(0.0, rd.y), isSide = 1.0 - isBack - isY;
  vec3 paper = mix(vec3(0.34, 0.29, 0.22), vec3(0.24, 0.27, 0.28), h2) * (0.8 + 0.35 * h3);
  vec3 c = paper * (0.78 * isBack + 0.92 * isSide) + vec3(0.10, 0.075, 0.055) * isFloor + vec3(0.42, 0.40, 0.37) * isCeil;
  if (office > 0.5) {
    c = vec3(0.30, 0.30, 0.29) * (isBack + isSide) + vec3(0.07, 0.075, 0.08) * isFloor + vec3(0.36, 0.36, 0.35) * isCeil;
    // ceiling panels; desks and partitions as a dark band low on the walls
    float panel = isCeil * step(0.82, fract(hp.x / 1.2)) * sharp;
    tubes = isCeil * mix(0.12, step(0.78, fract(hp.z / 1.8 + 0.3)) * step(0.2, fract(hp.x / 1.2)) * step(fract(hp.x / 1.2), 0.75), tubeK);
    c *= 1.0 - 0.35 * panel;
    float desk = (isBack + isSide) * step(hp.y, 1.15) * step(0.85, hp.y) * sharp;
    c = mix(c, vec3(0.05), desk);
  } else {
    // a wardrobe or a shelf against the back wall, a picture, a door
    float furn = isBack * step(0.45, h3) * step(abs(hp.x - dims.x * (0.2 + 0.5 * h2)), 0.45 + 0.3 * h1) * step(hp.y, 1.9);
    float pic = isBack * step(abs(hp.x - dims.x * 0.6), 0.35) * step(abs(hp.y - 1.6), 0.25) * step(0.55, h1);
    float door = isBack * step(h3, 0.28) * step(abs(hp.x - dims.x * 0.75), 0.42) * step(hp.y, 2.05);
    c = mix(c, vec3(0.06, 0.045, 0.035), furn); c *= 1.0 - 0.5 * pic; c = mix(c, vec3(0.03), door);
  }
  return c;
}

void main() {
  vec3 P = vWorld;
  vec3 D = P - cameraPosition;
  float dist = length(D);
  vec3 V = D / dist;
  vec3 N = normalize(vNw);
  vec3 Nl = normalize(vNl);
  float W0 = vB1.x, H0 = vB1.y, D0 = vB1.z, seed = vB1.w;
  float flH = vB2.x, bay = vB2.y, style = vB2.z, tone = vB2.w;
  float litF = vB3.x, burnF = vB3.y, burnN = vB3.z, dmg = vB3.w;
  float groundH = vB4.x, tint = vB4.y, faces = vB4.z, flags = vB4.w;
  float kind = vKind;
  vec3 alb = vec3(0.1);
  vec3 emit = vec3(0.0);
  vec3 refl = vec3(0.0);
  float shin = 0.0, gloss = 0.0;
  float wetK = 0.0, rough = 0.6;
  vec3 Nshade = N;

  if (kind < 0.5 && abs(Nl.y) < 0.5) {
    // ===================================================================================== a facade
    vec3 Fn = abs(Nl.z) > abs(Nl.x) ? vec3(0.0, 0.0, sign(Nl.z)) : vec3(sign(Nl.x), 0.0, 0.0);
    vec3 Tt = cross(vec3(0.0, 1.0, 0.0), Fn);
    float W = abs(Fn.z) > 0.5 ? W0 : D0;
    float u = dot(vLocal, Tt) + 0.5 * W;
    float v = vLocal.y;
    float bit = Fn.x > 0.5 ? 1.0 : Fn.x < -0.5 ? 2.0 : Fn.z > 0.5 ? 4.0 : 8.0;
    float hasWin = step(0.5, mod(floor(faces / bit), 2.0));
    float faceId = Fn.x + 2.0 * Fn.z + 3.0;
    float gH = groundH > 0.1 ? groundH : flH * 1.3;
    float topV = H0 - 1.2;
    float nb = max(1.0, floor(W / bay + 0.5));
    float bw = W / nb;
    float ci = floor(u / bw);
    float fu = u - ci * bw;
    float fy = v - gH;
    float fi = fy < 0.0 ? 0.0 : floor(fy / flH) + 1.0;
    float yIn = fy < 0.0 ? v : fy - (fi - 1.0) * flH;
    float thisH = fy < 0.0 ? gH : flH;
    float glassy = step(2.5, style) * step(style, 3.5) + step(4.5, style) * step(style, 5.5);
    // the window per style: [wx0, wx0 + ww] x [wy0, wy1] in the bay, the reveal's depth
    float ww, wy0, wy1, rev;
    if (style < 0.5) { ww = bw * 0.44; wy0 = 0.85; wy1 = thisH - 0.55; rev = 0.24; }
    else if (style < 1.5) { ww = bw * 0.46; wy0 = 0.75; wy1 = thisH - 0.48; rev = 0.32; }
    else if (style < 2.5) { ww = bw * 0.94; wy0 = 0.95; wy1 = thisH - 0.38; rev = 0.14; }
    else if (style < 3.5) { ww = bw - 0.10; wy0 = 0.05; wy1 = thisH - 0.95; rev = 0.0; }
    else if (style < 4.5) { ww = bw * 0.58; wy0 = 0.08; wy1 = thisH - 0.55; rev = 0.18; }
    else if (style < 5.5) { ww = bw * 0.78; wy0 = 0.05; wy1 = thisH - 0.70; rev = 0.0; }
    else { ww = bw * 0.62; wy0 = thisH * 0.42; wy1 = thisH - 0.45; rev = 0.20; }
    float shop = fi < 0.5 ? step(0.5, mod(floor(flags / 2.0), 2.0)) : 0.0;
    if (shop > 0.5) { ww = bw * 0.86; wy0 = 0.35; wy1 = gH - 1.05; rev = 0.25; }
    else if (fi < 0.5) { wy0 = max(wy0, 1.1); wy1 = gH - 0.7; }
    float wx0 = 0.5 * (bw - ww);
    float wh = wy1 - wy0;
    vec2 fw = max(vec2(length(vec2(dFdx(u), dFdy(u))), length(vec2(dFdx(v), dFdy(v)))), vec2(1e-4));
    // (a smooth estimate of the same, for the fades that steer rays and patterns: the derivatives jump from one 2x2
    // block of pixels to the next, and a fade that follows them turns to noise)
    float pxF = dist * vPxS / max(abs(dot(V, N)), 0.15), pxV = dist * vPxS;
    float onFace = step(0.25, v) * (1.0 - smoothstep(topV - fw.y, topV + fw.y, v)) * hasWin;
    float inX = smoothstep(wx0 - fw.x, wx0 + fw.x, fu) - smoothstep(wx0 + ww - fw.x, wx0 + ww + fw.x, fu);
    float inY = smoothstep(wy0 - fw.y, wy0 + fw.y, yIn) - smoothstep(wy1 - fw.y, wy1 + fw.y, yIn);
    float winM = clamp(inX, 0.0, 1.0) * clamp(inY, 0.0, 1.0) * onFace;
    float cov = (ww / bw) * (wh / thisH);
    float lod = smoothstep(0.14, 0.42, max(pxF / max(ww, 0.3), pxV / max(wh, 0.3)));
    // ---- this window's fate
    float h1 = c3h13(vec3(ci + 0.37, fi + 0.71, faceId * 7.13 + seed * 17.31));
    float h2 = fract(h1 * 91.7 + 0.33), h3 = fract(h1 * 53.1 + 0.71), h4 = fract(h1 * 17.3 + 0.19);
    float burnRow = step(0.5, burnN) * step(burnF - 0.01, fi) * step(fi, burnF + burnN - 0.99);
    float nearBurn = step(0.5, burnN) * step(burnF - 1.01, fi) * step(fi, burnF + burnN + 0.01);
    float burning = burnRow * step(0.22, h2);
    float burnt = (1.0 - burning) * step(h3, dmg * 0.55 + burnRow * 0.7);
    float lit = (1.0 - burnRow) * (1.0 - burnt) * step(h1, litF);
    float broken = (1.0 - lit) * (1.0 - burning) * (1.0 - burnt) * step(h4, dmg);
    // ---- the wall
    float wn = c3n(vec2(u * 0.11, v * 0.09) + seed * 7.0);
    vec3 wall = wallColor(style, tone, wn);
    if (hasWin < 0.5 && style < 2.5) wall = wallColor(0.0, fract(tone + 0.37), wn) * 0.92;      // a party wall: plain brick
#if DETAIL > 1
    // brick coursing and stone joints up close
    float fwm = pxF;
    if ((style < 0.5 || style > 5.5 || hasWin < 0.5) && fwm < 0.008) {
      float cy = v / 0.075, row = floor(cy);
      float cx = (u + 0.11 * mod(row, 2.0)) / 0.225;
      float mort = max(smoothstep(0.82, 0.95, fract(cy)), smoothstep(0.90, 0.97, fract(cx)));
      float bh = c3h12(vec2(floor(cx), row) + seed);
      vec3 bc = wall * (0.90 + 0.20 * bh);
      bc = mix(bc, wall * 1.25 + vec3(0.02), mort * 0.45);
      wall = mix(bc, wall, smoothstep(0.003, 0.0075, fwm));
    } else if (style > 0.5 && style < 1.5 && fwm < 0.02) {
      float jy = smoothstep(0.92, 0.985, fract(v / 0.62));
      float jx = smoothstep(0.95, 0.99, fract((u + 0.4 * mod(floor(v / 0.62), 2.0)) / 1.2));
      float bh = c3h12(vec2(floor(u / 1.2), floor(v / 0.62)) + seed);
      vec3 bc = wall * (0.93 + 0.14 * bh) * (1.0 - 0.25 * max(jx, jy));
      wall = mix(bc, wall, smoothstep(0.008, 0.02, fwm));
    }
#endif
    // streaks of grime from the sills down, dirt low down, the storey bands, soot over the burnt and burning windows
    float streak = mix(0.5, c3n(vec2(u * 1.7, v * 0.06) + seed * 5.0), 1.0 - smoothstep(0.12, 0.35, fw.x * 1.7));   // (band-limited: no shimmer at grazing angles)
    // (the patterns that repeat every bay fade to their average where a pixel spans a good part of a bay: no shimmer)
    float lodU = smoothstep(0.10, 0.30, pxF / bw), lodV = smoothstep(0.10, 0.30, pxV / thisH);
    float under = mix(step(yIn, wy0) * (1.0 - smoothstep(0.0, 1.6, wy0 - yIn)) * (1.0 - smoothstep(ww * 0.3, ww * 0.62, abs(fu - bw * 0.5))), 0.12, max(lodU, lodV)) * hasWin;
    float base = 1.0 - smoothstep(0.0, gH * 1.1, v);
    float band = mix(1.0 - smoothstep(0.0, 0.10 + fw.y, abs(yIn - thisH + 0.10)), 0.05, lodV) * (0.22 - 0.22 * glassy) * step(0.5, hasWin);
    float capBand = smoothstep(topV - 0.35, topV - 0.05, v) * 0.25;
    wall *= (1.0 - smoothstep(0.45, 0.85, streak) * 0.28 - under * 0.30 - base * 0.22) * (1.0 + band + capBand);
    float sootCol = mix(1.0 - smoothstep(ww * 0.25, ww * 0.95 + max(yIn - wy1, 0.0) * 0.45, abs(fu - bw * 0.5)), 0.5, lodU);
    float sootK = (nearBurn + burnt * 0.6) * sootCol * smoothstep(wy0, wy1 + 0.8, yIn + 0.4) * hasWin;
    float sootBelow = 0.0;
    {   // (the soot from the window under this one, up into this storey)
      float hB = c3h13(vec3(ci + 0.37, fi - 1.0 + 0.71, faceId * 7.13 + seed * 17.31));
      float burntB = step(fract(hB * 53.1 + 0.71), dmg * 0.55);
      sootBelow = burntB * sootCol * (1.0 - smoothstep(0.0, wy0 + 0.6, yIn)) * step(1.0, fi) * hasWin;
    }
    // (per window: averaged where the windows are smaller than a pixel, or it shimmers)
    wall *= 1.0 - 0.85 * mix(clamp(sootK + sootBelow * 0.7, 0.0, 1.0), (dmg * 0.25 + nearBurn * 0.35) * hasWin, lod);
    // the shopfront: a fascia (the sign band) over the windows, shutters down on many
    float fascia = 0.0, shut = 0.0;
    if (shop > 0.5) {
      fascia = step(gH - 1.0, yIn) * step(yIn, gH - 0.25);
      wall = mix(wall, mix(vec3(0.02, 0.02, 0.022), vec3(0.10, 0.03, 0.025), step(0.6, h4)), fascia * 0.85);
      shut = step(0.45, h2) * (1.0 - burning);
    }
    // ---- what the window shows
    vec3 wEmit = vec3(0.0);
    vec3 wCol = vec3(0.0);           // the lit-by-the-world colour of what is seen through the window (multiplied by the light later)
    vec3 wRefl = vec3(0.0);
    float revK = 0.0;
    vec3 Lw = vec3(0.0);
    float inWin = winM;
    // the glass, tilted a hair per pane (the reflections break up)
    vec3 Ng = N;
    if (glassy > 0.5 || shop > 0.5) {
      vec2 jit = (c3h22(vec2(ci, fi) + seed) - 0.5) * 0.035;
      Ng = normalize(N + Tt * jit.x + vec3(0.0, jit.y, 0.0));
    }
    float glassKeep = (1.0 - broken) * (1.0 - burnt) * (1.0 - step(0.6, burning * h4));
    if (inWin > 0.001) {
      vec3 R = reflect(V, Ng);
      float fres = 0.05 + 0.95 * pow(1.0 - clamp(dot(-V, Ng), 0.0, 1.0), 5.0);
      float f0 = glassy > 0.5 ? 0.22 : shop > 0.5 ? 0.10 : 0.07;
      fres = f0 + (1.0 - f0) * pow(1.0 - clamp(dot(-V, Ng), 0.0, 1.0), 5.0);
      vec3 gTint = glassy > 0.5 ? glassTint(tint) : vec3(1.0);
      wRefl = c3reflect(R) * fres * 1.25 * gTint;
#if DETAIL > 1
      { vec3 mr = c3mirror(P, N, Ng); if (mr.r >= 0.0) wRefl = mr * fres * 1.5 * uMirrorOn * gTint; }
#endif
      float lo = 1.0 - lod;
#if DETAIL > 0
      if (lo > 0.01 && ww / fw.x > 5.0) {
        // the reveal: a ray into the wall from this point of the opening; it meets a side of the recess or the glass
        float fineK = 1.0 - smoothstep(0.025, 0.06, pxF);                   // (reveals, curtains, bars: only where they hold)
        rev *= fineK;
        float cr = cos(vRot), sr = sin(vRot);
        vec3 Vl = vec3(cr * V.x - sr * V.z, V.y, sr * V.x + cr * V.z);
        vec3 rd = vec3(dot(Vl, Tt), Vl.y, -dot(Vl, Fn));
        rd.z = max(rd.z, 0.02);
        float tg = rev / rd.z;
        float tu = rd.x > 0.0 ? (wx0 + ww - fu) / rd.x : (wx0 - fu) / min(rd.x, -1e-4);
        float tvv = rd.y > 0.0 ? (wy1 - yIn) / rd.y : (wy0 - yIn) / min(rd.y, -1e-4);
        float tside = min(tu, tvv);
        if (rev > 0.05 && tside < tg) {
          revK = 1.0;
          float sill = step(tvv, tu) * step(rd.y, 0.0);
          wCol = wall * mix(0.45, 0.85, sill);
        } else {
          vec2 gp = vec2(fu + rd.x * tg, yIn + rd.y * tg);
          // the room behind
          float office = step(2.5, style) * step(style, 5.5) * (1.0 - step(3.5, style) * step(style, 4.5));
          float roomW = office > 0.5 ? bw * 2.0 : bw;
          vec3 ro = vec3(gp.x - wx0 + (office > 0.5 ? mod(ci, 2.0) * bw : 0.0), gp.y - (fi < 0.5 ? 0.0 : 0.0), 0.0);
          ro.x = clamp(ro.x, 0.01, roomW - 0.01);
          float dims_z = 3.2 + 3.5 * h3;
          float dHit, tubes;
          float sharpK = (1.0 - smoothstep(0.012, 0.035, pxF / max(bw * 0.5, 0.2))) * smoothstep(0.08, 0.3, rd.z);
          float tubeK = (1.0 - smoothstep(0.012, 0.03, pxF)) * smoothstep(0.15, 0.4, rd.z);
          vec3 rc = roomColor(ro, rd, vec3(roomW, thisH, dims_z), h1, h2, h3, office, sharpK, tubeK, dHit, tubes);
          rc = mix(vec3(0.16, 0.14, 0.12), rc, sharpK);
          float deep = mix(0.45, exp(-dHit * 0.28), sharpK);
          wCol = rc * deep * 0.55;
          if (office > 0.5 && burning < 0.5 && burnt < 0.5) {
            // an office floor with its lights on (some still are: cold tubes, a flicker), the rest dark
            float floorOn = step(c3h12(vec2(fi * 1.7 + seed, faceId)), 0.10 + litF * 2.0);
            float fl = 0.82 + 0.18 * step(0.08, c3n(vec2(uTime * 9.0, fi + seed)));
            wEmit += floorOn * (vec3(0.55, 0.64, 0.68) * rc * deep + vec3(1.6, 1.75, 1.85) * tubes) * fl;
            // (the exit signs: a green spot on some back walls, dark floors or not)
            wEmit += vec3(0.05, 0.55, 0.18) * step(0.93, h4) * step(abs(ro.x - roomW * 0.5), 0.25) * step(abs(gp.y - 2.4), 0.12) * sharpK * 0.0;
          }
          if (lit > 0.5) {
            vec3 lc = h2 < 0.6 ? vec3(1.0, 0.52, 0.20) : h2 < 0.85 ? vec3(1.0, 0.36, 0.10) * 0.6 : vec3(0.45, 0.60, 1.0) * 0.6;
            float fl = h2 > 0.85 ? 0.5 + 0.5 * c3n(vec2(uTime * 7.0, h1 * 50.0)) : 1.0;
            wEmit = lc * rc * (0.10 + 0.35 * h3) * fl * deep * 1.6;
          }
          if (burning > 0.5) {
            float lowK = 1.0 - clamp(gp.y / thisH, 0.0, 1.0);
            float n = c3fbm3(vec2(gp.x * 1.3 + h1 * 9.0, gp.y * 0.9 - uTime * 2.4));
            float flame = smoothstep(0.35, 0.9, n * 1.35 - gp.y / thisH * 0.65 + 0.25);
            vec3 fc = mix(vec3(1.2, 0.18, 0.03), vec3(3.2, 1.0, 0.22), flame);
            wEmit = rc * vec3(1.4, 0.45, 0.11) * (0.45 + 0.55 * lowK) * (0.7 + 0.3 * sin(uTime * 9.0 + h1 * 40.0)) + fc * flame * (0.6 + 0.5 * lowK);
            wEmit *= 1.0 - 0.6 * smoothstep(thisH * 0.7, thisH, gp.y) * (1.0 - flame);
            wCol *= 0.2;
          }
          if (burnt > 0.5) { wCol *= 0.12; wEmit *= 0.0; }
          // shutters down over the shop window
          if (shut > 0.5) { wCol = vec3(0.10, 0.10, 0.105) * (0.75 + 0.25 * step(0.5, fract(gp.y * 5.0))); wEmit *= 0.0; }
          // a curtain drawn part-way in some rooms (lit from behind when the lamp is on)
          float cs = h2 > 0.5 ? (gp.x - wx0) : (wx0 + ww - gp.x);
          float curt = (1.0 - smoothstep(ww * (0.14 + 0.3 * h3) - 0.04 - pxF, ww * (0.14 + 0.3 * h3) + 0.04 + pxF, cs)) * step(0.55, h4) * (1.0 - office) * (1.0 - burnt) * (1.0 - shut) * mix(0.35, 1.0, fineK);
          wCol = mix(wCol, mix(vec3(0.40, 0.33, 0.26), vec3(0.30, 0.10, 0.08), step(0.7, h1)) * 0.45, curt);
          wEmit = mix(wEmit, lit * vec3(0.9, 0.4, 0.15) * 0.18, curt);
          // mullions of the curtain wall / the sash bars of the old windows
          float mull = 0.0;
          if (glassy > 0.5) { float dm = min(fract(gp.x / (bw * 0.5)), 1.0 - fract(gp.x / (bw * 0.5))) * bw * 0.5; mull = clamp(0.06 / max(fw.x * 2.0, 0.06), 0.0, 1.0) * (1.0 - smoothstep(0.03, 0.03 + fw.x * 1.5, dm)); }
          else if (style < 1.5 || style > 5.5) mull = 1.0 - smoothstep(0.025, 0.025 + fw.x, abs(gp.x - (wx0 + ww * 0.5)));
          mull = max(mull, (1.0 - smoothstep(0.03, 0.03 + fw.y, abs(gp.y - (wy0 + wh * 0.62)))) * step(style, 1.5));
          mull *= fineK;
          wCol = mix(wCol, vec3(0.035), mull * 0.9);
          wRefl *= 1.0 - mull;
        }
      }
#endif
      // the average (a window too small to read)
      vec3 avgCol = glassy > 0.5 ? vec3(0.012, 0.014, 0.017) : vec3(0.02, 0.018, 0.016);
      vec3 avgEmit = vec3(1.0, 0.50, 0.19) * litF * 0.22 + vec3(1.6, 0.42, 0.08) * burnRow * 0.45;
      wCol = mix(avgCol, wCol, lo);
      wEmit = mix(avgEmit, wEmit, lo);
      float gk = mix(glassKeep * (1.0 - revK), 0.8 - 0.6 * dmg - burnRow * 0.7, lod);
      wRefl *= max(gk, 0.0) * (1.0 - shut * lo);
      // a crack across some kept panes
      gloss = gk;
    }
    // the wall's glow round a burning storey (the fire light on the masonry)
    vec3 burnGlow = vec3(0.0);
    if (burnN > 0.5) {
      float fb = burnF * flH + gH - flH, ft = fb + burnN * flH;
      float dB = max(max(fb - v, v - ft), 0.0);
      float flick = 0.75 + 0.25 * c3n(vec2(uTime * 5.0, seed));
      burnGlow = vec3(1.6, 0.42, 0.09) * exp(-dB / 1.3) * flick * (0.45 + 0.55 * smoothstep(bw * 0.5, 0.0, abs(fu - bw * 0.5)));
    }
    float wM = mix(inWin, cov * onFace, lod);
    alb = wall * (1.0 - wM) + wCol * wM;
    emit = wEmit * wM + alb * burnGlow * (1.0 - wM);
    refl = wRefl * wM;
    if (glassy > 0.5 && hasWin > 0.5) {
      // the spandrels between the floors: dark back-painted glass, a mirror like the rest (the floor lines read in it)
      vec3 Rs = reflect(V, N);
      float fs = 0.18 + 0.82 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);
      vec3 rs = c3reflect(Rs);
#if DETAIL > 1
      { vec3 mr = c3mirror(P, N, N); if (mr.r >= 0.0) rs = mr; }
#endif
      refl += rs * fs * (1.0 - wM) * 0.9 * (1.0 - 0.7 * nearBurn);
      alb = mix(alb, alb * 0.6, 1.0 - wM);
    }
    shin = mix(60.0, 900.0, gloss) ;
    gloss *= wM;
    wetK = 0.04;
    rough = 0.5;
  } else if (kind < 0.5 && Nl.y > 0.5) {
    // ===================================================================================== a roof
    vec2 rp = P.xz;
    float n = c3fbm3(rp * 0.21 + seed * 3.0);
    alb = vec3(0.055, 0.052, 0.050) * (0.65 + 0.7 * n);
    vec2 hd = vec2(W0, D0) * 0.5;
    float edge = min(hd.x - abs(vLocal.x), hd.y - abs(vLocal.z));
    float cope = 1.0 - smoothstep(0.25, 0.55, edge);
    alb = mix(alb, trimColor(style, tone) * 0.9, cope);
    float puddle = smoothstep(0.55, 0.75, c3n(rp * 0.27 + seed * 9.0)) * (1.0 - cope);
    wetK = 0.12 + 0.8 * puddle;
    rough = mix(0.55, 0.05, puddle);
    gloss = puddle;
    shin = 300.0;
    alb *= 1.0 - 0.5 * puddle;
  } else if (kind < 0.5) {
    alb = vec3(0.03);                                                     // (a soffit)
  } else {
    // ===================================================================================== the parts
    float n = c3n(P.xz * 0.9 + P.y * 0.7 + seed);
    if (kind < 1.5) {                                                     // trim: cornices, sills, parapets, bands
      alb = trimColor(style, tone) * (0.85 + 0.25 * n);
      float streak = c3n(vec2(dot(P.xz, vec2(0.7, 0.7)) * 1.5, P.y * 0.12) + seed);
      alb *= 1.0 - 0.3 * smoothstep(0.5, 0.9, streak);
      if (Nl.y > 0.5) alb *= 0.8;
      if (Nl.y < -0.5) alb *= 0.45;
    } else if (kind < 2.5) {                                              // wood: the water tanks' staves and hoops
      float around = atan(vLocal.x, vLocal.z) * 11.0;
      alb = vec3(0.085, 0.056, 0.038) * (0.8 + 0.2 * step(0.12, fract(around))) * (1.0 - 0.6 * step(0.93, fract(P.y * 1.4))) * (0.8 + 0.4 * n);
    } else if (kind < 3.5) {                                              // iron: fire escapes, rails, legs, masts
      alb = vec3(0.028, 0.026, 0.027) * (0.8 + 0.4 * n);
      wetK = 0.25; rough = 0.35; gloss = 0.3; shin = 60.0;
    } else if (kind < 4.5) {                                              // metal: AC units, ducts, vents
      alb = vec3(0.16, 0.165, 0.17) * (0.75 + 0.35 * n);
      wetK = 0.15; rough = 0.4;
    } else if (kind < 5.5) {                                              // concrete: balcony slabs, podiums, stair huts
      alb = vec3(0.19, 0.185, 0.175) * (0.8 + 0.3 * n);
      if (Nl.y < -0.5) alb *= 0.5;
    } else if (kind < 6.5) {                                              // a sign / billboard face (dark, worn)
      alb = mix(vec3(0.12, 0.10, 0.08), vec3(0.05, 0.06, 0.08), step(0.5, fract(seed * 3.7))) * (0.7 + 0.5 * n);
    } else if (kind < 7.5) {
      alb = vec3(0.012);
    } else if (kind < 8.5) {
      alb = vec3(0.02, 0.025, 0.03);
      gloss = 0.6; shin = 200.0;
    } else if (kind < 9.5) {                                              // a crane's yellow paint, grimy
      alb = vec3(0.50, 0.33, 0.035) * (0.65 + 0.45 * n);
      wetK = 0.12; rough = 0.45; gloss = 0.25; shin = 50.0;
    } else if (kind < 10.5) {                                             // a mast's red and white bands
      float band = step(0.5, fract(vLocal.y / 6.0));
      alb = mix(vec3(0.30, 0.03, 0.02), vec3(0.42, 0.42, 0.40), band) * (0.7 + 0.4 * n);
    } else if (kind < 11.5) {                                             // plywood (hoardings), weathered
      alb = vec3(0.17, 0.125, 0.08) * (0.7 + 0.5 * c3n(vec2(dot(P.xz, vec2(0.7, 0.7)) * 3.0, P.y * 0.4)));
    } else if (kind < 12.5) {                                             // a container / site cabin, corrugated, faded
      float hue = fract(seed * 0.618);
      vec3 cc = hue < 0.25 ? vec3(0.06, 0.10, 0.20) : hue < 0.5 ? vec3(0.22, 0.05, 0.03) : hue < 0.75 ? vec3(0.07, 0.13, 0.07) : vec3(0.18, 0.17, 0.15);
      alb = cc * (0.75 + 0.3 * step(0.5, fract(dot(P.xz, vec2(1.0)) * 3.3))) * (0.75 + 0.4 * n);
    } else if (kind < 13.5) {                                             // a helipad's deck: the circle, the H, the edge
      vec2 q = vLocal.xz;
      float r = length(q);
      float ring = (1.0 - smoothstep(0.25, 0.35, abs(r - 9.0)));
      float hH = step(abs(q.x), 2.6) * step(abs(q.y), 3.6) * (step(1.9, abs(q.x)) + step(abs(q.y), 0.45));
      alb = vec3(0.05, 0.055, 0.06) * (0.8 + 0.4 * n);
      alb = mix(alb, vec3(0.40, 0.38, 0.30), clamp(ring + hH, 0.0, 1.0) * 0.8);
      wetK = 0.4; rough = 0.25; gloss = 0.4; shin = 200.0;
    } else if (kind < 14.5) {                                             // bare steel (the tanker's tank, ducts)
      alb = vec3(0.24, 0.24, 0.25) * (0.7 + 0.4 * n);
      wetK = 0.3; rough = 0.3; gloss = 0.5; shin = 120.0;
    } else if (kind < 15.5) {                                             // a bridge's painted steel (grey-green, rust)
      alb = mix(vec3(0.075, 0.085, 0.08), vec3(0.085, 0.055, 0.04), smoothstep(0.6, 0.9, c3n(vec2(dot(P.xz, vec2(0.71)) * 2.2, P.y * 0.35)))) * (0.8 + 0.3 * n);
      wetK = 0.12; rough = 0.45;
    } else if (kind < 16.5) {                                             // burnt: char and ash
      alb = vec3(0.022, 0.019, 0.017) * (0.6 + 0.8 * n);
    } else {
      alb = vec3(0.05);                                                   // a lamp's housing
    }
  }

  vec3 L = cityLight(P, N);
  vec3 col = alb * L + emit;
  col += refl;
  col += c3skyRefl(V, N, rough) * wetK;
  if (gloss > 0.01 && dist < 420.0) col += citySpec(P, N, V, max(shin, 20.0)) * gloss * 0.6;
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function W0(m, e, d, { objLocal: n = !1 } = {}) {
  const h = { DETAIL: d };
  n && (h.OBJLOCAL = 1);
  const c = r0({
    vertexShader: Fe,
    fragmentShader: Ce,
    uniforms: { ...m, uBld: { value: e } },
    defines: h,
  });
  return ((c.name = "city3_facade_" + d + (n ? "_obj" : "")), c);
}
function Ne(m) {
  const e = m.length,
    d = Math.ceil((e * yt) / tt),
    n = new Float32Array(tt * Math.max(1, d) * 4);
  for (const c of m) {
    const w = c.id * yt * 4;
    n.set(
      [
        c.x,
        c.base,
        c.z,
        c.rot || 0,
        c.w,
        c.h,
        c.d,
        c.seed,
        c.flH,
        c.bay,
        c.style,
        c.tone,
        c.lit,
        c.burnF,
        c.burnN,
        c.dmg,
        c.groundH || 0,
        c.tint,
        c.faces,
        c.flags,
        0,
        0,
        0,
        0,
      ],
      w,
    );
  }
  const h = new Vt(n, tt, Math.max(1, d), se, ae);
  return (
    (h.minFilter = Tt),
    (h.magFilter = Tt),
    (h.generateMipmaps = !1),
    (h.needsUpdate = !0),
    h
  );
}
const A0 = (m, e) => m + 32768 * e;
class l0 {
  constructor() {
    ((this.pos = []), (this.nor = []), (this.part = []), (this.idx = []));
  }
  get count() {
    return this.pos.length / 3;
  }
  box(e, d, n, h, c, w, s) {
    if (h - e < 0.001 || c - d < 0.001 || w - n < 0.001) return;
    const x = this.pos,
      k = this.nor,
      P = this.part,
      _ = this.idx,
      g = (M, N, T, S, v) => {
        const a = x.length / 3;
        x.push(...M, ...N, ...T, ...S);
        for (let r = 0; r < 4; r++) (k.push(...v), P.push(s));
        _.push(a, a + 1, a + 2, a, a + 2, a + 3);
      };
    (g([h, d, w], [h, d, n], [h, c, n], [h, c, w], [1, 0, 0]),
      g([e, d, n], [e, d, w], [e, c, w], [e, c, n], [-1, 0, 0]),
      g([e, c, w], [h, c, w], [h, c, n], [e, c, n], [0, 1, 0]),
      g([e, d, n], [h, d, n], [h, d, w], [e, d, w], [0, -1, 0]),
      g([e, d, w], [h, d, w], [h, c, w], [e, c, w], [0, 0, 1]),
      g([h, d, n], [e, d, n], [e, c, n], [h, c, n], [0, 0, -1]));
  }
  obox(e, d, n, h, c, w, s, x) {
    if (!s) {
      this.box(
        e - h / 2,
        d - c / 2,
        n - w / 2,
        e + h / 2,
        d + c / 2,
        n + w / 2,
        x,
      );
      return;
    }
    const k = new kt(h, c, w);
    (k.rotateY(s), k.translate(e, d, n), this.geo(k, x), k.dispose());
  }
  geo(e, d, n = null) {
    const h = e.attributes.position,
      c = e.attributes.normal,
      w = this.pos.length / 3,
      s = new X(),
      x = new X(),
      k = n ? new ne().getNormalMatrix(n) : null;
    for (let P = 0; P < h.count; P++)
      (s.fromBufferAttribute(h, P),
        x.fromBufferAttribute(c, P),
        n && (s.applyMatrix4(n), x.applyMatrix3(k).normalize()),
        this.pos.push(s.x, s.y, s.z),
        this.nor.push(x.x, x.y, x.z),
        this.part.push(d));
    if (e.index)
      for (let P = 0; P < e.index.count; P++)
        this.idx.push(w + e.index.getX(P));
    else for (let P = 0; P < h.count; P++) this.idx.push(w + P);
  }
  build() {
    const e = new v0();
    return (
      e.setAttribute("position", new e0(this.pos, 3)),
      e.setAttribute("normal", new e0(this.nor, 3)),
      e.setAttribute("aPart", new e0(this.part, 1)),
      e.setIndex(
        this.count > 65535 ? new Pt(this.idx, 1) : new At(this.idx, 1),
      ),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
}
const lt = new kt(1, 1, 1).translate(0, 0.5, 0),
  Te = (() => {
    const m = new l0();
    return (
      m.geo(new _0(0.5, 0.5, 1, 16, 1).translate(0, 0.5, 0), 0),
      m.geo(new jt(0.55, 0.3, 16, 1).translate(0, 1.15, 0), 0),
      m.build()
    );
  })();
function He(m) {
  let e = Math.floor(m * 1e6) | 0 || 1;
  return () => (
    (e = (e * 16807) % 2147483647),
    e <= 0 && (e += 2147483646),
    (e - 1) / 2147483646
  );
}
function Re(m, e, d, n) {
  const h = He(e.seed + e.id * 0.0137),
    c = e.id,
    w = e.x - e.w / 2,
    s = e.x + e.w / 2,
    x = e.z - e.d / 2,
    k = e.z + e.d / 2,
    P = e.base,
    _ = P + e.h,
    g = A0(c, C.trim),
    M = A0(c, C.iron),
    N = A0(c, C.metal),
    T = A0(c, C.concrete),
    S = e.style === 3 || e.style === 5,
    v = [
      { bit: 1, n: [1, 0], at: s, a0: x, a1: k, W: e.d },
      { bit: 2, n: [-1, 0], at: w, a0: x, a1: k, W: e.d },
      { bit: 4, n: [0, 1], at: k, a0: w, a1: s, W: e.w },
      { bit: 8, n: [0, -1], at: x, a0: w, a1: s, W: e.w },
    ],
    a = (p, i, t, u, o, l, f, z = 0.02) => {
      if (p.n[0]) {
        const A = p.at - p.n[0] * z,
          F = p.at + p.n[0] * u;
        m.box(Math.min(A, F), o, i, Math.max(A, F), l, t, f);
      } else {
        const A = p.at - p.n[1] * z,
          F = p.at + p.n[1] * u;
        m.box(i, o, Math.min(A, F), t, l, Math.max(A, F), f);
      }
    },
    r = e.groundH || e.flH * 1.3,
    y = Math.max(1, Math.floor((e.h - r - 1.2) / e.flH) + 1);
  if (e.flags & 4) {
    const p = S ? 0.25 : 0.35,
      i = S ? 1.4 : 1.05;
    (m.box(w, _ - 0.02, x, s, _ + i, x + p, g),
      m.box(w, _ - 0.02, k - p, s, _ + i, k, g),
      m.box(w, _ - 0.02, x + p, w + p, _ + i, k - p, g),
      m.box(s - p, _ - 0.02, x + p, s, _ + i, k - p, g),
      S ||
        m.box(w - 0.06, _ + i, x - 0.06, s + 0.06, _ + i + 0.12, k + 0.06, g));
  }
  for (const p of v) {
    if (!(e.faces & p.bit)) continue;
    const i = Math.max(1, Math.floor(p.W / e.bay + 0.5)),
      t = p.W / i;
    if (S) a(p, p.a0, p.a1, 0.12, _ - 1.5, _ - 1.2, g);
    else {
      const u = _ - 1.2;
      (a(p, p.a0 - 0.05, p.a1 + 0.05, 0.22, u - 0.55, u - 0.35, g),
        a(p, p.a0 - 0.1, p.a1 + 0.1, 0.42, u - 0.35, u - 0.18, g),
        a(p, p.a0 - 0.15, p.a1 + 0.15, 0.62, u - 0.18, u + 0.02, g),
        a(p, p.a0, p.a1, 0.2, P + r - 0.3, P + r - 0.05, g));
    }
    for (let u = 1; u < y; u++) {
      const o = P + r + (u - 1) * e.flH;
      if (o > _ - 2) break;
      e.style === 1 && a(p, p.a0, p.a1, 0.1, o + 0.55, o + 0.7, g);
      for (let l = 0; l < i; l++) {
        const f = p.a0 + (l + 0.5) * t;
        if (e.style === 0 || e.style === 6) {
          const z = t * 0.44 + 0.16,
            A = e.style === 6 ? o + e.flH * 0.42 : o + 0.85;
          (a(p, f - z / 2, f + z / 2, 0.09, A - 0.1, A, g),
            a(
              p,
              f - z / 2 - 0.05,
              f + z / 2 + 0.05,
              0.05,
              o + e.flH - 0.55,
              o + e.flH - 0.35,
              g,
            ));
        }
        if (e.flags & 32 && e.style !== 3 && h() < 0.13) {
          const E = o + (e.style === 4 ? 1.1 : 0.85) - 0.12;
          (a(p, f - 0.72 / 2, f + 0.72 / 2, 0.55, E - 0.48, E, N, 0),
            a(
              p,
              f - 0.72 / 2 + 0.05,
              f - 0.72 / 2 + 0.09,
              0.55 * 0.9,
              E - 0.48 - 0.25,
              E - 0.48,
              M,
              0,
            ),
            a(
              p,
              f + 0.72 / 2 - 0.09,
              f + 0.72 / 2 - 0.05,
              0.55 * 0.9,
              E - 0.48 - 0.25,
              E - 0.48,
              M,
              0,
            ));
        }
        if (e.flags & 64) {
          const z = t * 0.82,
            A = 1.35;
          (a(p, f - z / 2, f + z / 2, A, o - 0.02, o + 0.16, T, 0),
            a(p, f - z / 2, f + z / 2, A, o + 0.95, o + 1, M, -A + 0.04),
            a(p, f - z / 2, f - z / 2 + 0.04, A, o + 0.16, o + 0.95, M, 0),
            a(p, f + z / 2 - 0.04, f + z / 2, A, o + 0.16, o + 0.95, M, 0),
            a(
              p,
              f - z / 2,
              f + z / 2,
              0.03,
              o + 0.16,
              o + 0.95,
              A0(c, C.glassRail),
              -A + 0.04,
            ));
        }
      }
    }
    if (e.flags & 1 && e.style === 0 && p.W > 9 && y > 2) {
      const u = p.W > 22 ? 2 : 1;
      for (let o = 0; o < u; o++) {
        const l = p.a0 + p.W * (u === 1 ? 0.5 : o === 0 ? 0.27 : 0.73),
          f = Math.min(5.2, t * 1.8),
          z = 1.25;
        for (let A = 1; A < y; A++) {
          const F = P + r + (A - 1) * e.flH + 0.2;
          if (F > _ - 2.2) break;
          if (
            (a(p, l - f / 2, l + f / 2, z, F - 0.05, F, M, 0),
            a(p, l - f / 2, l + f / 2, 0.035, F + 0.95, F + 1, M, -z + 0.035),
            a(p, l - f / 2, l - f / 2 + 0.035, z, F, F + 1, M, 0),
            a(p, l + f / 2 - 0.035, l + f / 2, z, F, F + 1, M, 0),
            A > 1)
          ) {
            const K = A % 2 ? 1 : -1;
            for (let L = 0; L < 6; L++) {
              const q = l + K * (-f / 2 + 0.3 + (L / 6) * (f - 0.9)),
                R = F - e.flH + 0.2 + ((L + 0.5) / 6) * (e.flH - 0.2);
              a(p, q - 0.18, q + 0.18, z * 0.55, R - 0.04, R, M, -0.1);
            }
          }
        }
        a(p, l - 0.25, l + 0.25, 0.9, P + r - 0.1, P + r + 0, M, -0.6);
      }
    }
  }
  const b = (p, i, t, u, o) => {
    const l = n.lowest(p - t / 2, p + t / 2, i - u / 2, i + u / 2, 9);
    return _ + o < l - 0.65 - 2.5;
  };
  if (e.w > 8 && e.d > 8) {
    const p = e.x + (h() - 0.5) * e.w * 0.4,
      i = e.z + (h() - 0.5) * e.d * 0.4,
      t = 3.2 + h() * 1.8,
      u = 2.6 + h() * 1.4,
      o = 2.8 + h() * 0.6;
    b(p, i, t, u, o) &&
      (d.push({ type: "hut", x: p, z: i, w: t, d: u, h: o, y: _, id: c }),
      m.box(p - t / 2, _, i - u / 2, p + t / 2, _ + o, i + u / 2, T),
      m.box(
        p - t / 2 - 0.15,
        _ + o,
        i - u / 2 - 0.15,
        p + t / 2 + 0.15,
        _ + o + 0.15,
        i + u / 2 + 0.15,
        g,
      ));
    const l = 1 + Math.floor(h() * (e.w * e.d > 900 ? 5 : 3));
    for (let f = 0; f < l; f++) {
      const z = e.x + (h() - 0.5) * (e.w - 3),
        A = e.z + (h() - 0.5) * (e.d - 3),
        F = 1.2 + h() * 2.2,
        E = 1 + h() * 1.6,
        K = 0.8 + h() * 1;
      b(z, A, F, E, K) &&
        (m.box(z - F / 2, _, A - E / 2, z + F / 2, _ + K, A + E / 2, N),
        m.box(
          z - F / 2 + 0.1,
          _ + K,
          A - E / 2 + 0.1,
          z - F / 2 + 0.5,
          _ + K + 0.35,
          A - E / 2 + 0.5,
          N,
        ));
    }
    if (e.flags & 16) {
      const f = e.x + (h() - 0.5) * e.w * 0.5,
        z = e.z + (h() - 0.5) * e.d * 0.5,
        A = 1.8 + h() * 0.9,
        F = 3.5 + h() * 2.5,
        E = 3.8 + h() * 1.2;
      if (b(f, z, A * 2.2, A * 2.2, F + E + 0.5)) {
        d.push({ type: "tank", x: f, z, r: A, legs: F, h: E, y: _, id: c });
        const K = new S0().compose(
          new X(f, _ + F, z),
          new G0(),
          new X(A * 2, E, A * 2),
        );
        m.geo(Te, A0(c, C.wood), K);
        for (const [L, q] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ])
          m.box(
            f + L * A * 0.7 - 0.09,
            _,
            z + q * A * 0.7 - 0.09,
            f + L * A * 0.7 + 0.09,
            _ + F + 0.1,
            z + q * A * 0.7 + 0.09,
            M,
          );
        for (const L of [_ + F * 0.4, _ + F * 0.8])
          (m.box(
            f - A * 0.7,
            L,
            z - A * 0.7 - 0.04,
            f + A * 0.7,
            L + 0.08,
            z - A * 0.7 + 0.04,
            M,
          ),
            m.box(
              f - A * 0.7,
              L,
              z + A * 0.7 - 0.04,
              f + A * 0.7,
              L + 0.08,
              z + A * 0.7 + 0.04,
              M,
            ));
        m.box(
          f - A * 0.78,
          _ + F - 0.12,
          z - A * 0.78,
          f + A * 0.78,
          _ + F + 0.04,
          z + A * 0.78,
          M,
        );
      }
    }
    if (h() < 0.35) {
      const f = e.x + (h() - 0.5) * e.w * 0.6,
        z = e.z + (h() - 0.5) * e.d * 0.6,
        A = 6 + h() * 10;
      b(f, z, 1, 1, A) &&
        (m.box(f - 0.07, _, z - 0.07, f + 0.07, _ + A, z + 0.07, M),
        m.box(
          f - 0.8,
          _ + A * 0.7,
          z - 0.03,
          f + 0.8,
          _ + A * 0.7 + 0.05,
          z + 0.03,
          M,
        ),
        d.push({ type: "mast", x: f, z, y: _, h: A, id: c }));
    }
  }
}
function Be(m, e, d) {
  const n = new T0();
  n.name = "city3_buildings";
  const h = Ne(d.blds),
    c = [W0(e, h, 0), W0(e, h, 1), W0(e, h, 2)],
    w = [],
    s = [],
    x = new Map();
  for (const T of d.blds) {
    if (T.tier === "near") continue;
    const S =
      (T.tier === "mid" ? "m" : "f") +
      Math.floor(T.x / 320) +
      "," +
      Math.floor(T.z / 320);
    (x.get(S) || x.set(S, []).get(S)).push(T);
  }
  const k = new S0(),
    P = new G0(),
    _ = new X(0, 1, 0),
    g = new X(),
    M = new X();
  for (const [T, S] of x) {
    const v = new v0();
    (v.setIndex(lt.index),
      v.setAttribute("position", lt.attributes.position),
      v.setAttribute("normal", lt.attributes.normal),
      v.setAttribute(
        "aPart",
        new m0(new Float32Array(S.map((r) => A0(r.id, 0))), 1),
      ));
    const a = new Mt(v, c[T[0] === "m" ? 1 : 0], S.length);
    (S.forEach((r, y) => {
      (P.setFromAxisAngle(_, r.rot || 0),
        a.setMatrixAt(
          y,
          k.compose(g.set(r.x, r.base, r.z), P, M.set(r.w, r.h, r.d)),
        ));
    }),
      (a.instanceMatrix.needsUpdate = !0),
      a.computeBoundingSphere(),
      a.computeBoundingBox?.(),
      (a.name = "city3_bld_" + T),
      n.add(a),
      w.push(a));
  }
  const N = new Map();
  for (const T of d.blds) {
    if (T.tier !== "near") continue;
    const S = Math.floor(T.x / 160) + "," + Math.floor(T.z / 160);
    (N.get(S) || N.set(S, []).get(S)).push(T);
  }
  for (const [T, S] of N) {
    const v = new l0();
    for (const r of S) {
      if (r.custom) {
        r.custom(v, A0, C);
        continue;
      }
      (v.box(
        r.x - r.w / 2,
        r.base,
        r.z - r.d / 2,
        r.x + r.w / 2,
        r.base + r.h,
        r.z + r.d / 2,
        A0(r.id, 0),
      ),
        Re(v, r, s, d.corridor));
    }
    const a = new s0(v.build(), c[2]);
    ((a.name = "city3_near_" + T), n.add(a), w.push(a));
  }
  return { group: n, meshes: w, roofItems: s, texture: h, mats: c };
}
const J = {
    block: 0,
    road: 1,
    walk: 2,
    cross: 3,
    plaza: 4,
    curb: 5,
    quay: 6,
    dirt: 7,
    cobble: 8,
    far: 9,
    wood: 10,
  },
  Le = `
attribute vec4 aG;
varying vec3 vWorld;
varying vec3 vN;
varying vec4 vG;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); vG = aG;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Ie = `
varying vec3 vWorld;
varying vec3 vN;
varying vec4 vG;
${u0}
${g0}
${F0}
float lineAA(float d, float w, float fw) { return 1.0 - smoothstep(w - fw, w + fw, abs(d)); }
void main() {
  vec3 P = vWorld;
  vec3 V = normalize(P - cameraPosition);
  vec3 N = normalize(vN);
  float kind = vG.x, ac = vG.y, al = vG.z, hw = vG.w;
  vec2 p = P.xz;
  vec2 fwp = fwidth(p);
  float fw = max(fwp.x, fwp.y);
  float n = c3fbm3(p * 0.31);
  float n2 = c3n(p * 2.3);
  vec3 alb;
  float wet = 0.25, rough = 0.5, puddle = 0.0;
  if (kind < 0.5 || kind > 8.5) {
    // the yards and the far plain: broken concrete, gravel, rubble
    alb = vec3(0.050, 0.047, 0.044) * (0.6 + 0.8 * n) * (0.85 + 0.3 * n2);
    if (kind > 8.5) alb *= 0.7;
    puddle = smoothstep(0.6, 0.78, c3n(p * 0.19 + 3.0)) * 0.7;
    if (kind > 9.5) {
      // the wood round the cabin (the plain under its trees): dark leaf litter and earth, damp, hardly a puddle
      alb = vec3(0.034, 0.029, 0.021) * (0.6 + 0.8 * n) * (0.85 + 0.3 * n2);
      puddle *= 0.1; wet = 0.12;
    }
  } else if (kind < 1.5 || (kind > 2.5 && kind < 3.5)) {
    // asphalt
    alb = vec3(0.046, 0.045, 0.046) * (0.72 + 0.5 * n) * (0.9 + 0.2 * n2);
    float patchK = smoothstep(0.62, 0.66, c3n(p * 0.07 + 11.0));
    alb *= 1.0 - 0.25 * patchK;
    float crack = 1.0 - smoothstep(0.0, 0.03 + fw, abs(c3n(p * 0.35 + 5.0) - 0.5));
    alb *= 1.0 - 0.35 * crack * step(fw, 0.12);
    float oil = smoothstep(0.55, 0.8, c3n(vec2(ac * 0.6, al * 0.08) + 7.0)) * step(kind, 1.5);
    alb *= 1.0 - 0.3 * oil;
    puddle = smoothstep(0.56, 0.74, c3n(p * 0.21 + 3.0));
    float mk = 0.0;
    vec3 mkCol = vec3(0.30, 0.29, 0.26);
    if (kind < 1.5 && fw < 0.35) {
      float cw = hw - ${V0.toFixed(1)};                         // half the carriageway
      float aveK = step(15.0, hw);
      // the centre: a double yellow on the avenues, a dashed white on the streets
      float yel = aveK * (lineAA(ac - 0.18, 0.07, fw) + lineAA(ac + 0.18, 0.07, fw));
      float dash = step(0.55, fract(al / 9.0));
      mk += (1.0 - aveK) * lineAA(ac, 0.07, fw) * dash;
      // lane lines every 3.4 m out from the centre, an edge line by the curbs
      float lane = abs(ac) / 3.4;
      float laneL = lineAA((fract(lane + 0.5) - 0.5) * 3.4, 0.06, fw) * step(1.5, abs(ac)) * step(abs(ac), cw - 1.0) * step(0.5, fract(al / 6.0));
      mk += laneL;
      mk += lineAA(abs(ac) - (cw - 0.45), 0.06, fw);
      float wear = 0.35 + 0.65 * smoothstep(0.3, 0.75, c3n(p * 0.5 + 9.0));
      mk *= wear;
      alb = mix(alb, vec3(0.32, 0.25, 0.08), clamp(yel * wear, 0.0, 1.0) * 0.6);
      // manholes
      vec2 mh = vec2(ac - 1.8 * sign(ac + 0.01), mod(al + 7.0, 23.0) - 11.5);
      alb = mix(alb, vec3(0.022, 0.021, 0.02), (1.0 - smoothstep(0.32, 0.35, length(mh))) * step(2.0, cw));
    }
    if (kind > 2.5 && fw < 0.4) {
      // an intersection: zebras along its four edges (hw packs both half sizes: hwx * 1000 + hwz)
      float hx = floor(hw / 1000.0), hz = hw - hx * 1000.0;
      float ex = hx - abs(ac), ez = hz - abs(al);
      float zebX = step(ex, 4.2) * step(0.6, ex) * step(abs(al), hz - ${V0.toFixed(1)}) * step(0.5, fract(al / 1.1));
      float zebZ = step(ez, 4.2) * step(0.6, ez) * step(abs(ac), hx - ${V0.toFixed(1)}) * step(0.5, fract(ac / 1.1));
      // (a T on the park - kind 3.2: shut on its north side, 3.4: on its south side - has no zebra on the shut side)
      zebZ *= 1.0 - step(abs(kind - 3.2), 0.05) * step(al, 0.0) - step(abs(kind - 3.4), 0.05) * step(0.0, al);
      float wear = 0.4 + 0.6 * smoothstep(0.3, 0.7, c3n(p * 0.8 + 2.0));
      mk += clamp(zebX + zebZ, 0.0, 1.0) * wear * (1.0 - smoothstep(0.15, 0.4, fw));
    }
    alb = mix(alb, mkCol, clamp(mk, 0.0, 1.0) * 0.75);
    wet = 0.35;
  } else if (kind < 2.5) {
    // the sidewalk: square pavers, the curb stone along its road edge
    vec2 q = vec2(ac, al) / 0.6;
    vec2 f = abs(fract(q) - 0.5);
    float joint = smoothstep(0.43, 0.5, max(f.x, f.y)) * (1.0 - smoothstep(0.03, 0.08, fw));
    alb = vec3(0.090, 0.086, 0.080) * (0.78 + 0.4 * c3h12(floor(q))) * (0.8 + 0.35 * n) * (1.0 - 0.45 * joint);
    float curb = 1.0 - smoothstep(0.25, 0.3 + fw, hw - abs(ac));
    alb = mix(alb, vec3(0.14, 0.135, 0.125) * (0.8 + 0.3 * n2), curb);
    puddle = smoothstep(0.62, 0.78, c3n(p * 0.33 + 1.0)) * 0.6;
  } else if (kind < 4.5) {
    // a plaza: big stone slabs
    vec2 q = p / 1.2;
    vec2 f = abs(fract(q) - 0.5);
    float joint = smoothstep(0.46, 0.5, max(f.x, f.y)) * (1.0 - smoothstep(0.05, 0.1, fw));
    alb = vec3(0.13, 0.125, 0.115) * (0.8 + 0.3 * c3h12(floor(q))) * (0.8 + 0.3 * n) * (1.0 - 0.4 * joint);
    puddle = smoothstep(0.6, 0.76, c3n(p * 0.25 + 4.0));
  } else if (kind < 5.5) {
    alb = vec3(0.13, 0.125, 0.12) * (0.8 + 0.3 * n2);                 // a curb's face
  } else if (kind < 6.5) {
    // a quay wall: big stone courses, green-black where the water was, streaks
    float cy = P.y / 0.7, cx = (ac + 0.6 * mod(floor(cy), 2.0)) / 1.6;
    vec2 f = abs(fract(vec2(cx, cy)) - 0.5);
    float joint = smoothstep(0.45, 0.5, max(f.x * 0.9, f.y)) * (1.0 - smoothstep(0.05, 0.12, fw));
    alb = vec3(0.16, 0.15, 0.135) * (0.8 + 0.3 * c3h12(floor(vec2(cx, cy)))) * (1.0 - 0.45 * joint);
    float waterline = smoothstep(${($.water + 2.5).toFixed(1)}, ${($.water + 0.2).toFixed(1)}, P.y);
    alb = mix(alb, vec3(0.025, 0.03, 0.022), waterline);
    alb *= 1.0 - 0.35 * smoothstep(0.4, 0.8, c3n(vec2(ac * 0.8, P.y * 0.05)));
    wet = 0.15;
  } else if (kind < 7.5) {
    alb = vec3(0.060, 0.050, 0.040) * (0.6 + 0.8 * n) * (0.85 + 0.3 * n2);   // dirt (the building site, the lots)
    puddle = smoothstep(0.55, 0.72, c3n(p * 0.23 + 6.0));
  } else {
    // cobbles (the quays' promenades)
    vec2 q = vec2(ac / 0.22, al / 0.16 + 0.5 * mod(floor(ac / 0.22), 2.0));
    vec2 f = abs(fract(q) - 0.5);
    float joint = smoothstep(0.38, 0.5, max(f.x, f.y)) * (1.0 - smoothstep(0.02, 0.05, fw));
    alb = vec3(0.075, 0.070, 0.066) * (0.7 + 0.5 * c3h12(floor(q))) * (1.0 - 0.5 * joint);
    puddle = smoothstep(0.6, 0.78, c3n(p * 0.3 + 8.0));
  }
  alb *= 1.0 - 0.5 * puddle;
  float rgh = mix(0.55, 0.04, puddle);
  vec3 L = cityLight(P, N);
  vec3 col = alb * L;
  col += c3skyRefl(V, N, rgh) * mix(wet, 1.0, puddle);
  float dist = length(P - cameraPosition);
  if (dist < 500.0) col += citySpec(P, N, V, mix(40.0, 1200.0, puddle)) * mix(wet * 0.4, 1.0, puddle);
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  Ee = `
varying vec3 vWorld;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWorld = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }
`,
  qe = `
varying vec3 vWorld;
uniform float uWaterY;
${u0}
${g0}
${F0}
void main() {
  vec3 P = vWorld;
  vec3 V = normalize(P - cameraPosition);
  float dist = length(P - cameraPosition);
  // ripples: two scrolling noises, flattened with distance (no shimmer far off)
  vec2 q = P.xz;
  float t = uTime;
  float fade = 1.0 - smoothstep(60.0, 500.0, dist);
  vec2 g1 = vec2(c3n(q * 0.55 + vec2(t * 0.16, 0.0)) - c3n(q * 0.55 + vec2(t * 0.16, 0.0) + vec2(0.11, 0.0)), c3n(q * 0.55 + vec2(0.0, t * 0.12)) - c3n(q * 0.55 + vec2(0.0, t * 0.12) + vec2(0.0, 0.11)));
  vec2 g2 = vec2(c3n(q * 2.3 - vec2(t * 0.45, t * 0.1)) - 0.5, c3n(q * 2.3 + vec2(t * 0.25, -t * 0.4) + 4.0) - 0.5);
  vec2 g3 = vec2(c3n(q * 0.09 + vec2(t * 0.03, 0.0)) - 0.5, c3n(q * 0.09 + vec2(3.0, t * 0.02)) - 0.5);
  vec3 N = normalize(vec3((g1.x * 1.25 + g2.x * 0.10 + g3.x * 0.05) * fade, 1.0, (g1.y * 1.25 + g2.y * 0.10 + g3.y * 0.05) * fade));
  float fres = 0.02 + 0.98 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);
  vec3 R = reflect(V, N);
  R.y = abs(R.y);
  vec3 col = sky3(normalize(vec3(R.x, max(R.y, 0.004), R.z))) * fres * 1.15;
  col += vec3(0.0018, 0.0022, 0.0024);                                  // (the water's own murk)
  col += (c3skyAmb(vec3(0.0, 1.0, 0.0)) + vec3(0.02, 0.008, 0.003)) * vec3(0.010, 0.012, 0.011);
  if (dist < 900.0) col += citySpec(P, N, V, 260.0) * 0.9;
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  Bt = O0?.shaft
    ? {
        x0: O0.shaft.x0 - 0.02,
        z0: O0.shaft.z0 - 0.02,
        x1: O0.shaft.x1 + 0.02,
        z1: O0.shaft.z1 + 0.02,
      }
    : null,
  We = { ...d0, y: -0.08, drop: !0 },
  Ut = [Y0, ...(Bt ? [{ ...Bt, y: -0.08, drop: !0 }] : [])],
  De = [We, ...Ut];
function gt(m, e) {
  const [d, n, h, c] = m;
  if (h <= e.x0 || d >= e.x1 || c <= e.z0 || n >= e.z1) return [m];
  const w = [];
  (n < e.z0 && w.push([d, n, h, e.z0]), c > e.z1 && w.push([d, e.z1, h, c]));
  const s = Math.max(n, e.z0),
    x = Math.min(c, e.z1);
  return (
    d < e.x0 && w.push([d, s, e.x0, x]),
    h > e.x1 && w.push([e.x1, s, h, x]),
    w.filter(([k, P, _, g]) => _ - k > 0.001 && g - P > 0.001)
  );
}
class Lt {
  constructor(e = De) {
    ((this.keeps = e),
      (this.p = []),
      (this.n = []),
      (this.g = []),
      (this.i = []));
  }
  quad(e, d, n, h, c, w, s, x, k) {
    const P = this.p.length / 3;
    this.p.push(...e, ...d, ...n, ...h);
    for (let _ = 0; _ < 4; _++) this.n.push(...c);
    (this.g.push(...w, ...s, ...x, ...k),
      this.i.push(P, P + 1, P + 2, P, P + 2, P + 3));
  }
  flat(e, d, n, h, c, w) {
    for (const s of this.keeps) {
      if (n <= s.x0 || e >= s.x1 || h <= s.z0 || d >= s.z1) continue;
      for (const M of gt([e, d, n, h], s))
        this.flat(M[0], M[1], M[2], M[3], c, w);
      const x = Math.max(e, s.x0),
        k = Math.max(d, s.z0),
        P = Math.min(n, s.x1),
        _ = Math.min(h, s.z1),
        g = Math.min(c, s.y);
      if (!s.drop)
        for (const M of gt([x, k, P, _], s.hole))
          this.rect(M[0], M[1], M[2], M[3], g, w);
      if (c - g > 0.05) {
        const M = (N, T) => [J.curb, N, T, 0];
        (s.x0 > e && s.x0 < n && this.wallZ(k, _, s.x0, g, c, 1, M),
          s.x1 > e && s.x1 < n && this.wallZ(k, _, s.x1, g, c, -1, M),
          s.z0 > d && s.z0 < h && this.wallX(x, P, s.z0, g, c, 1, M),
          s.z1 > d && s.z1 < h && this.wallX(x, P, s.z1, g, c, -1, M));
      }
      return;
    }
    this.rect(e, d, n, h, c, w);
  }
  rect(e, d, n, h, c, w) {
    this.quad(
      [e, c, h],
      [n, c, h],
      [n, c, d],
      [e, c, d],
      [0, 1, 0],
      w(e, h),
      w(n, h),
      w(n, d),
      w(e, d),
    );
  }
  wallX(e, d, n, h, c, w, s) {
    for (const x of this.keeps)
      if (!(
        n <= x.z0 ||
        n >= x.z1 ||
        d <= x.x0 ||
        e >= x.x1 ||
        (!x.drop && c <= x.y + 0.001)
      )) {
        (e < x.x0 && this.wallX(e, x.x0, n, h, c, w, s),
          d > x.x1 && this.wallX(x.x1, d, n, h, c, w, s));
        return;
      }
    w > 0
      ? this.quad(
          [e, h, n],
          [d, h, n],
          [d, c, n],
          [e, c, n],
          [0, 0, 1],
          s(e, h),
          s(d, h),
          s(d, c),
          s(e, c),
        )
      : this.quad(
          [d, h, n],
          [e, h, n],
          [e, c, n],
          [d, c, n],
          [0, 0, -1],
          s(d, h),
          s(e, h),
          s(e, c),
          s(d, c),
        );
  }
  wallZ(e, d, n, h, c, w, s) {
    for (const x of this.keeps)
      if (!(
        n <= x.x0 ||
        n >= x.x1 ||
        d <= x.z0 ||
        e >= x.z1 ||
        (!x.drop && c <= x.y + 0.001)
      )) {
        (e < x.z0 && this.wallZ(e, x.z0, n, h, c, w, s),
          d > x.z1 && this.wallZ(x.z1, d, n, h, c, w, s));
        return;
      }
    w > 0
      ? this.quad(
          [n, h, d],
          [n, h, e],
          [n, c, e],
          [n, c, d],
          [1, 0, 0],
          s(d, h),
          s(e, h),
          s(e, c),
          s(d, c),
        )
      : this.quad(
          [n, h, e],
          [n, h, d],
          [n, c, d],
          [n, c, e],
          [-1, 0, 0],
          s(e, h),
          s(d, h),
          s(d, c),
          s(e, c),
        );
  }
  build() {
    const e = new v0();
    return (
      e.setAttribute("position", new e0(this.p, 3)),
      e.setAttribute("normal", new e0(this.n, 3)),
      e.setAttribute("aG", new e0(this.g, 4)),
      e.setIndex(
        this.p.length / 3 > 65535 ? new Pt(this.i, 1) : new At(this.i, 1),
      ),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
}
function Ke(m, e, d) {
  const n = new T0();
  n.name = "city3_ground";
  const h = r0({ vertexShader: Le, fragmentShader: Ie, uniforms: { ...e } });
  h.name = "city3_ground";
  const { ns: c, ew: w } = d.streets,
    s = new Map(),
    x = (a, r) => {
      const y = Math.floor(a / 480) + "," + Math.floor(r / 480);
      return s.get(y) || s.set(y, new Lt()).get(y);
    },
    k = 0.15,
    P = (a) =>
      w
        .filter(
          (r) =>
            a.x >= r.x0 - a.hw &&
            a.x <= r.x1 + a.hw &&
            r.z >= a.z0 - r.hw &&
            r.z <= a.z1 + r.hw,
        )
        .sort((r, y) => r.z - y.z),
    _ = new Set();
  for (const a of c) {
    const r = P(a),
      y = a.hw > 15 ? 5.5 : V0;
    let b = a.z0;
    const p = [];
    for (const i of r) {
      const t = i.z - i.hw,
        u = i.z + i.hw;
      (t > b + 0.5 && p.push([b, t]), (b = Math.max(b, u)));
    }
    a.z1 > b + 0.5 && p.push([b, a.z1]);
    for (const [i, t] of p)
      for (let u = i; u < t - 0.01; u += 120) {
        const o = Math.min(t, u + 120),
          l = x(a.x, (u + o) / 2);
        (l.flat(a.x - a.hw + y, u, a.x + a.hw - y, o, 0, (f, z) => [
          J.road,
          f - a.x,
          z,
          a.hw,
        ]),
          l.flat(a.x - a.hw, u, a.x - a.hw + y, o, k, (f, z) => [
            J.walk,
            f - (a.x - a.hw),
            z,
            y,
          ]),
          l.flat(a.x + a.hw - y, u, a.x + a.hw, o, k, (f, z) => [
            J.walk,
            a.x + a.hw - f,
            z,
            y,
          ]),
          l.wallZ(u, o, a.x - a.hw + y, 0, k, 1, (f, z) => [J.curb, f, z, 0]),
          l.wallZ(u, o, a.x + a.hw - y, 0, k, -1, (f, z) => [J.curb, f, z, 0]));
      }
    for (const i of r) {
      const t = a.x + "," + i.z;
      if (_.has(t)) continue;
      _.add(t);
      const u = x(a.x, i.z),
        o = a.hw * 1e3 + i.hw,
        l = a.x > h0.x0 && a.x < h0.x1,
        f = i.hw > 15 ? 5.5 : V0,
        z = l && a.z0 > i.z - i.hw - 0.5,
        A = l && a.z1 < i.z + i.hw + 0.5;
      let F = i.z - i.hw,
        E = i.z + i.hw;
      if (z) {
        const L = F;
        (u.flat(a.x - a.hw, L, a.x + a.hw, L + f, k, (q, R) => [
          J.walk,
          R - L,
          q,
          f,
        ]),
          u.wallX(a.x - a.hw, a.x + a.hw, L + f, 0, k, 1, (q, R) => [
            J.curb,
            q,
            R,
            0,
          ]),
          (F += f));
      }
      if (A) {
        const L = E;
        (u.flat(a.x - a.hw, L - f, a.x + a.hw, L, k, (q, R) => [
          J.walk,
          L - R,
          q,
          f,
        ]),
          u.wallX(a.x - a.hw, a.x + a.hw, L - f, 0, k, -1, (q, R) => [
            J.curb,
            q,
            R,
            0,
          ]),
          (E -= f));
      }
      const K = J.cross + (z ? 0.2 : A ? 0.4 : 0);
      u.flat(a.x - a.hw, F, a.x + a.hw, E, 0, (L, q) => [
        K,
        L - a.x,
        q - i.z,
        o,
      ]);
    }
  }
  for (const a of w) {
    const r = c
        .filter(
          (i) =>
            i.x >= a.x0 - i.hw &&
            i.x <= a.x1 + i.hw &&
            a.z >= i.z0 - a.hw &&
            a.z <= i.z1 + a.hw,
        )
        .sort((i, t) => i.x - t.x),
      y = a.kind === "quay" ? 4 : a.hw > 15 ? 5.5 : V0;
    let b = a.x0;
    const p = [];
    for (const i of r) {
      const t = i.x - i.hw,
        u = i.x + i.hw;
      (t > b + 0.5 && p.push([b, t]), (b = Math.max(b, u)));
    }
    a.x1 > b + 0.5 && p.push([b, a.x1]);
    for (const [i, t] of p)
      for (let u = i; u < t - 0.01; u += 120) {
        const o = Math.min(t, u + 120),
          l = x((u + o) / 2, a.z);
        (l.flat(u, a.z - a.hw + y, o, a.z + a.hw - y, 0, (f, z) => [
          J.road,
          z - a.z,
          f,
          a.hw,
        ]),
          l.flat(u, a.z - a.hw, o, a.z - a.hw + y, k, (f, z) => [
            a.kind === "quay" && a.z < -480 && a.z > -500 ? J.cobble : J.walk,
            z - (a.z - a.hw),
            f,
            y,
          ]),
          l.flat(u, a.z + a.hw - y, o, a.z + a.hw, k, (f, z) => [
            J.walk,
            a.z + a.hw - z,
            f,
            y,
          ]),
          l.wallX(u, o, a.z - a.hw + y, 0, k, 1, (f, z) => [J.curb, f, z, 0]),
          l.wallX(u, o, a.z + a.hw - y, 0, k, -1, (f, z) => [J.curb, f, z, 0]));
      }
  }
  for (const a of d.blocks) {
    const r = x((a.x0 + a.x1) / 2, (a.z0 + a.z1) / 2),
      y = a.ground === "dirt" ? J.dirt : a.superName ? J.plaza : J.block;
    r.flat(a.x0, a.z0, a.x1, a.z1, k, (b, p) => [y, b, p, 0]);
  }
  for (const a of d.roofs.filter((r) => r.type === "lot"))
    x(a.x, a.z).flat(
      a.x - a.w / 2 + 0.5,
      a.z - a.d / 2 + 0.5,
      a.x + a.w / 2 - 0.5,
      a.z + a.d / 2 - 0.5,
      k + 0.01,
      (y, b) => [J.dirt, y, b, 0],
    );
  const g = $;
  for (let a = Q.x0; a < Q.x1; a += 120) {
    const r = Math.min(Q.x1, a + 120),
      y = x(a + 60, -555);
    (y.wallX(a, r, g.z1, g.bed, g.top, -1, (b, p) => [J.quay, b, p, 0]),
      y.wallX(a, r, g.z0, g.bed, g.top, 1, (b, p) => [J.quay, b, p, 0]));
  }
  const M = Ot.map((a) => [a.x - a.w / 2 - 0.5, a.x + a.w / 2 + 0.5]);
  for (const [a, r] of [
    [g.z1, 1],
    [g.z0, -1],
  ]) {
    let y = [[Q.x0, Q.x1]];
    for (const [b, p] of M)
      y = y.flatMap(([i, t]) =>
        p <= i || b >= t
          ? [[i, t]]
          : [
              [i, b],
              [p, t],
            ].filter(([u, o]) => o - u > 1),
      );
    for (const [b, p] of y)
      for (let i = b; i < p - 0.01; i += 120) {
        const t = Math.min(p, i + 120),
          u = x(i + 60, a),
          o = a + r * 0.45;
        (u.flat(i, Math.min(a, o), t, Math.max(a, o), g.parapet, (l, f) => [
          J.quay,
          l,
          f,
          0,
        ]),
          u.wallX(i, t, a, k, g.parapet, -r, (l, f) => [J.quay, l, f, 0]),
          u.wallX(i, t, o, k, g.parapet, r, (l, f) => [J.quay, l, f, 0]));
      }
  }
  const N = [];
  for (const [a, r] of s) {
    const y = new s0(r.build(), h);
    ((y.name = "city3_ground_" + a), n.add(y), N.push(y));
  }
  {
    const a = new Lt(Ut),
      r = 9e3;
    a.flat(-r, -r, r, g.z0, -0.08, (b, p) => [J.far, b, p, 0]);
    for (const b of gt([-r, g.z1, r, r], d0))
      a.flat(b[0], b[1], b[2], b[3], -0.08, (p, i) => [J.far, p, i, 0]);
    a.flat(d0.x0, d0.z0, d0.x1, d0.z1, -0.08, (b, p) => [J.wood, b, p, 0]);
    const y = new s0(a.build(), h);
    ((y.name = "city3_plain"), (y.renderOrder = -5), n.add(y), N.push(y));
  }
  const T = r0({
    vertexShader: Ee,
    fragmentShader: qe,
    uniforms: { ...e, uWaterY: { value: g.water } },
  });
  T.name = "city3_water";
  const S = new et(Q.x1 - Q.x0 + 2e3, g.z1 - g.z0, 1, 1)
      .rotateX(-Math.PI / 2)
      .translate((Q.x0 + Q.x1) / 2, g.water, (g.z0 + g.z1) / 2),
    v = new s0(S, T);
  return (
    (v.name = "city3_river"),
    n.add(v),
    N.push(v),
    { group: n, water: v, meshes: N, mat: h, wmat: T }
  );
}
const Ve = `
attribute vec4 aCol;      // rgb, size (px at 720p)
attribute vec4 aMode;     // kind (0 steady, 1 warning blink, 2 flicker, 3 police, 4 failing), phase, rate, extra
varying vec3 vCol;
uniform float uPx;
${u0}
${g0}
uniform float uHazeK;
float hazeV(vec3 P, float dist) { float low = 1.0 - smoothstep(0.0, 60.0, P.y); return 1.0 - exp(-dist * uHazeK * (1.0 + 0.9 * low)); }
void main() {
  vec3 P = position;
  float kind = aMode.x, ph = aMode.y, rate = aMode.z;
  float k = 1.0;
  if (kind > 0.5 && kind < 1.5) { float c = fract(uTime * rate + ph); k = smoothstep(0.0, 0.06, c) * (1.0 - smoothstep(0.42, 0.5, c)); }
  else if (kind > 1.5 && kind < 2.5) k = 0.65 + 0.35 * c3n(vec2(uTime * rate, ph * 17.0));
  else if (kind > 2.5 && kind < 3.5) { float c = fract(uTime * rate + ph + aMode.w * 0.5); k = step(c, 0.25) * (0.6 + 0.4 * step(fract(uTime * rate * 4.0), 0.5)); }
  else if (kind > 3.5) k = 0.15 + 0.85 * step(0.32, c3n(vec2(uTime * rate, ph * 9.0)));
  vec3 D = P - cameraPosition;
  float dist = length(D);
  vec3 Pp = P - D / max(dist, 1e-3) * min(2.5, dist * 0.02);         // (pulled toward the eye: never inside its wall)
  gl_Position = projectionMatrix * viewMatrix * vec4(Pp, 1.0);
  vCol = aCol.rgb * k * (1.0 - 0.9 * hazeV(P, dist));
  // a lamp head reads its real size up close: 0.5 m across
  float px = 0.5 / max(dist, 0.5) * projectionMatrix[1][1] * 360.0 * uPx;
  gl_PointSize = clamp(max(aCol.a * uPx, px), 1.0, 48.0) * 2.5;
  if (k < 0.002) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  je = `
varying vec3 vCol;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q) * 2.5;
  float a = exp(-r * r * 2.2) + exp(-r * 1.6) * 0.16;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ge(m, e, d) {
  const n = e.length,
    h = new Float32Array(n * 3),
    c = new Float32Array(n * 4),
    w = new Float32Array(n * 4);
  e.forEach((P, _) => {
    (h.set(P.p, _ * 3),
      c.set([P.c[0], P.c[1], P.c[2], P.s], _ * 4),
      w.set(P.m || [0, 0, 0, 0], _ * 4));
  });
  const s = new v0();
  (s.setAttribute("position", new q0(h, 3)),
    s.setAttribute("aCol", new q0(c, 4)),
    s.setAttribute("aMode", new q0(w, 4)),
    s.computeBoundingSphere());
  const x = r0({
      vertexShader: Ve,
      fragmentShader: je,
      uniforms: { ...m },
      transparent: !0,
      depthWrite: !1,
      blending: rt,
    }),
    k = new _t(s, x);
  return ((k.name = d), (k.frustumCulled = !1), (k.renderOrder = 5), k);
}
const Oe = `
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
  vHaze = 1.0 - exp(-dist * uHazeK * 1.4);
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  $e = `
varying vec2 vUv;
varying float vSeed;
varying float vI;
varying float vHaze;
${u0}
uniform float uTime;
void main() {
  vec2 uv = vUv;
  float t = uTime;
  float n = c3fbm3(vec2(uv.x * 2.6 + vSeed * 7.0, uv.y * 2.0 - t * 2.2 + vSeed));
  float n2 = c3fbm3(vec2(uv.x * 6.0 - vSeed, uv.y * 4.5 - t * 3.7));
  float x = abs(uv.x - 0.5 + (n - 0.5) * 0.45 * uv.y);
  float wdt = 0.48 * pow(1.0 - uv.y, 0.7);
  float body = 1.0 - smoothstep(wdt * 0.2, wdt, x + (n2 - 0.5) * 0.18);
  body *= 1.0 - smoothstep(0.25, 0.92, uv.y + (n - 0.5) * 0.75);
  body *= smoothstep(0.0, 0.10, uv.y);
  float heat = body * (1.15 - uv.y * 0.9) * (0.75 + 0.5 * n2);
  vec3 c = mix(vec3(0.55, 0.05, 0.008), vec3(1.7, 0.36, 0.05), smoothstep(0.15, 0.6, heat));
  c = mix(c, vec3(3.2, 1.1, 0.25), smoothstep(0.65, 1.05, heat));
  float flick = 0.8 + 0.2 * sin(t * 13.0 + vSeed * 31.0);
  vec3 col = c * body * vI * flick * (1.0 - 0.85 * vHaze);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Z0(m, e, d = "city3_flames") {
  const n = Math.max(1, e.length),
    h = new ot(),
    c = new et(1, 1);
  ((h.index = c.index),
    h.setAttribute("position", c.attributes.position),
    h.setAttribute("uv", c.attributes.uv));
  const w = new Float32Array(n * 4),
    s = new Float32Array(n * 4);
  e.forEach((g, M) => {
    (w.set([g.p[0], g.p[1], g.p[2], g.seed], M * 4),
      s.set([g.w, g.h, g.i, g.lean || 0], M * 4));
  });
  const x = new m0(w, 4),
    k = new m0(s, 4);
  (h.setAttribute("aFlame", x),
    h.setAttribute("aSizeF", k),
    (h.instanceCount = e.length));
  const P = r0({
      vertexShader: Oe,
      fragmentShader: $e,
      uniforms: { ...m },
      transparent: !0,
      depthWrite: !1,
      blending: rt,
      side: E0,
    }),
    _ = new s0(h, P);
  return (
    (_.name = d),
    (_.frustumCulled = !1),
    (_.renderOrder = 6),
    (_.userData.attrs = { aF: x, aS: k }),
    _
  );
}
const Xe = `
attribute vec2 aT;        // along 0..1, side -1..1
attribute vec4 aBase;     // x, y, z, height
attribute vec4 aShape;    // width at base, width at top, drift x, drift z
attribute vec4 aMisc;     // seed, density, fire light, speed
varying vec2 vT;
varying vec4 vMisc;
varying vec3 vWorld;
varying vec3 vSide;
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
  vT = aT; vMisc = aMisc; vWorld = P; vSide = S;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  Ye = `
varying vec2 vT;
varying vec4 vMisc;
varying vec3 vWorld;
varying vec3 vSide;
${u0}
${g0}
${F0}
void main() {
  float t = vT.x, s = vT.y;
  float sp = vMisc.w;
  float scroll = uTime * 0.045 * sp;
  vec2 q = vec2(s * 0.9 + vMisc.x * 3.0, t * 5.0 - scroll);
  float big = c3fbm3(q);
  float det = c3fbm(q * 2.6 + vec2(5.0, -scroll * 1.5));
  float edge = abs(s) * (0.9 + 0.2 * t) + (big - 0.5) * 1.1 + (det - 0.5) * 0.35;
  float body = (1.0 - smoothstep(0.25, 0.92, edge)) * (1.0 - smoothstep(0.62, 1.0, abs(s)));
  float dens = body * smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.45, 1.0, t)) * vMisc.y;
  dens *= 0.60 + 0.8 * det;
  if (dens < 0.003) discard;
  vec3 V = normalize(vWorld - cameraPosition);
  // dark smoke: thick cores shade themselves; its own fire lights the underside; the dawn and the sky the rest (the side
  // toward the east the brightest)
  float thick = smoothstep(0.3, 0.95, dens);
  vec3 smoke = vec3(0.085, 0.080, 0.076) * (1.0 - 0.5 * thick);
  float east = c3dawnAz(vSide * sign(s + 1e-4));
  vec3 L = c3skyAmb(vec3(0.0, 1.0, 0.0)) * 0.7 + c3skyAmb(-V) * 0.5 + vec3(0.030, 0.036, 0.046) * pow(east, 3.0) * (0.55 + 0.45 * uDawn) * (1.0 - thick);
  vec3 fireL = vec3(1.0, 0.33, 0.08) * vMisc.z * (exp(-t * 9.0) * 1.2 + 0.08 * exp(-t * 2.5)) * (0.4 + 0.9 * (1.0 - det));
  vec3 col = smoke * (L * 2.2 + fireL * 3.5);
  col = cityHaze(col, vWorld);
  float a = clamp(dens * 1.6, 0.0, 0.97);
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ue(m, e, d = "city3_smoke") {
  const h = [],
    c = [],
    w = [],
    s = [],
    x = [];
  let k = 0;
  for (const M of e) {
    for (let N = 0; N <= 48; N++) {
      const T = Math.pow(N / 48, 1.25);
      for (const S of [-1, 1])
        (h.push(T, S),
          c.push(...M.p, M.h),
          w.push(M.w0, M.w1, M.dx, M.dz),
          s.push(M.seed, M.dens, M.fire, M.speed ?? 1));
      if (N < 48) {
        const S = k + N * 2;
        x.push(S, S + 1, S + 2, S + 1, S + 3, S + 2);
      }
    }
    k += 98;
  }
  const P = new v0();
  (P.setAttribute("position", new e0(new Float32Array(Math.max(3, k * 3)), 3)),
    P.setAttribute("aT", new e0(h, 2)),
    P.setAttribute("aBase", new e0(c, 4)),
    P.setAttribute("aShape", new e0(w, 4)),
    P.setAttribute("aMisc", new e0(s, 4)),
    P.setIndex(k > 65535 ? new Pt(x, 1) : new At(x, 1)));
  const _ = r0({
      vertexShader: Xe,
      fragmentShader: Ye,
      uniforms: { ...m },
      transparent: !0,
      depthWrite: !1,
      side: E0,
    }),
    g = new s0(P, _);
  return ((g.name = d), (g.frustumCulled = !1), (g.renderOrder = 4), g);
}
const Ze = `
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
  P.xz += uWind * tt * 1.4 + vec2(sin(tt * 1.3 + s * 7.0), cos(tt * 1.1 + s * 3.0)) * 1.3;
  vec4 mv = viewMatrix * vec4(P, 1.0);
  gl_Position = projectionMatrix * mv;
  float fade = smoothstep(0.0, 0.06, age) * (1.0 - smoothstep(0.55, 1.0, age));
  float tw = 0.55 + 0.45 * sin(uTime * (9.0 + h2 * 9.0) + s * 20.0);
  vCol = vec3(3.2, 0.95, 0.22) * fade * tw;
  gl_PointSize = clamp(aEm2.w * uPx * 45.0 / max(-mv.z, 0.5), 1.0, 9.0);
}
`,
  Je = `
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
function Qe(m, e, d) {
  const n = [];
  for (const P of e)
    for (let _ = 0; _ < P.n; _++)
      n.push([
        ...P.p,
        d() * 100,
        P.rise * (0.7 + d() * 0.6),
        P.life * (0.7 + d() * 0.6),
        P.spread,
        0.6 + d() * 0.8,
      ]);
  const h = Math.max(1, n.length),
    c = new Float32Array(h * 4),
    w = new Float32Array(h * 4);
  n.forEach((P, _) => {
    (c.set(P.slice(0, 4), _ * 4), w.set(P.slice(4, 8), _ * 4));
  });
  const s = new v0();
  (s.setAttribute("position", new e0(new Float32Array(h * 3), 3)),
    s.setAttribute("aEm", new q0(c, 4)),
    s.setAttribute("aEm2", new q0(w, 4)),
    s.setDrawRange(0, n.length));
  const x = r0({
      vertexShader: Ze,
      fragmentShader: Je,
      uniforms: { ...m },
      transparent: !0,
      depthWrite: !1,
      blending: rt,
    }),
    k = new _t(s, x);
  return (
    (k.name = "city3_embers"),
    (k.frustumCulled = !1),
    (k.renderOrder = 6),
    k
  );
}
function It(m, e, d, n, h, c = 0.4) {
  const w = d ? m.w : m.d,
    s = Math.max(1, Math.floor(w / m.bay + 0.5)),
    x = w / s,
    k = (n + 0.5) * x - w / 2,
    P = m.groundH || m.flH * 1.3,
    _ = h === 0 ? P * 0.45 : P + (h - 1) * m.flH + m.flH * 0.5,
    g = d,
    M = -e;
  return {
    x: m.x + g * k + e * (m.w / 2 + c),
    y: m.base + _,
    z: m.z + M * k + d * (m.d / 2 + c),
    nb: s,
  };
}
function to(m, e, d, n) {
  const h = new T0();
  h.name = "city3_fx";
  const c = (S, v) => S + (v - S) * n(),
    w = [],
    s = [],
    x = [],
    k = [],
    P = (S, v) => d.corridor.dist(S, S, v, v, 900);
  for (const S of d.blds) {
    if (!S.burnN) continue;
    const v = S.tier === "far" ? 900 : P(S.x, S.z),
      a = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
    v < 700 &&
      a.forEach(([p, i], t) => {
        if (!(S.faces & (1 << t))) return;
        const u = i ? S.w : S.d,
          o = Math.max(1, Math.floor(u / S.bay + 0.5));
        for (let l = S.burnF; l < S.burnF + S.burnN; l++)
          for (let f = 0; f < o; f++) {
            const z = n();
            if (z < (S.engulfed ? 0.25 : 0.55)) continue;
            const A = It(S, p, i, f, l, 0.3),
              F = z > 0.88,
              E = c(0.7, 1.15) * (F ? 1.5 : 1);
            w.push({
              p: [A.x, A.y - S.flH * 0.32, A.z],
              w: S.bay * 0.8 * E,
              h: S.flH * c(0.9, 1.6) * E,
              i: c(0.7, 1.15),
              seed: n() * 50,
              lean: c(-0.4, 0.4),
            });
          }
      });
    const r = S.groundH || S.flH * 1.3,
      y = S.base + r + (S.burnF - 1 + S.burnN) * S.flH,
      b = S.engulfed ? 2.2 : S.burnN > 2 ? 1.4 : 1;
    if (
      (v < 1400 &&
        (n() < 0.6 || S.engulfed) &&
        s.push({
          p: [S.x, Math.min(y, S.base + S.h) + 1, S.z],
          h: c(90, 170) * b,
          w0: c(10, 18) * b,
          w1: c(55, 95) * b,
          dx: c(70, 130) * b,
          dz: -c(15, 55) * b,
          seed: n() * 20,
          dens: 1,
          fire: 1,
          speed: c(0.8, 1.3),
        }),
      S.engulfed)
    )
      for (let p = 0; p < 10; p++)
        w.push({
          p: [
            S.x + c(-S.w, S.w) * 0.42,
            S.base + S.h - 1.5,
            S.z + c(-S.d, S.d) * 0.42,
          ],
          w: c(7, 12),
          h: c(10, 18),
          i: c(0.9, 1.3),
          seed: n() * 50,
          lean: c(-0.3, 0.6),
        });
    v < 260 &&
      k.push({
        p: [S.x, y, S.z],
        n: 18,
        rise: 2.4,
        life: 6,
        spread: Math.max(S.w, S.d) * 0.6,
      });
  }
  const _ = [
    [900, -1500],
    [500, -1250],
    [1300, -1350],
    [-650, -200],
    [-500, 350],
    [700, 1050],
    [250, 900],
    [-300, 750],
    [1700, -1150],
    [2100, 600],
  ];
  for (const [S, v] of _) {
    s.push({
      p: [S + c(-60, 60), 20, v + c(-60, 60)],
      h: c(260, 420),
      w0: c(40, 70),
      w1: c(160, 260),
      dx: c(160, 280),
      dz: -c(40, 140),
      seed: n() * 20,
      dens: c(0.7, 0.95),
      fire: 1,
      speed: c(0.6, 1),
    });
    for (let a = 0; a < 14; a++)
      x.push({
        p: [S + c(-120, 120), c(3, 30), v + c(-120, 120)],
        c: [3, 1, 0.25],
        s: c(1.5, 3),
        m: [2, n(), c(2, 6), 0],
      });
  }
  for (const S of d.lamps)
    S.on &&
      x.push({
        p: [S.x + S.ax * 1.4, S.y, S.z + S.az * 1.4],
        c: [1.6, 0.68, 0.17],
        s: 1,
        m: [S.flick ? 4 : 0, n(), 7, 0],
      });
  for (const S of d.blds) {
    if (S.tier === "near" || S.burnN || S.lit < 0.005) continue;
    const v = Math.max(
      1,
      Math.floor((S.h - (S.groundH || S.flH * 1.3) - 1.2) / S.flH) + 1,
    );
    [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ].forEach(([a, r], y) => {
      if (!(S.faces & (1 << y))) return;
      const b = r ? S.w : S.d,
        p = Math.max(1, Math.floor(b / S.bay + 0.5)),
        i = Math.round(p * v * S.lit * 0.6 + n() - 0.5);
      for (let t = 0; t < i; t++) {
        const u = It(S, a, r, Math.floor(n() * p), Math.floor(n() * v), 0.25),
          o = n() < 0.85,
          l = c(0.3, 0.9);
        x.push({
          p: [u.x, u.y, u.z],
          c: o ? [1 * l, 0.5 * l, 0.19 * l] : [0.45 * l, 0.6 * l, 1 * l],
          s: c(0.8, 1.2),
          m: [n() < 0.05 ? 2 : 0, n(), 2, 0],
        });
      }
    });
  }
  const g = d.blds
    .filter((S) => S.h > 75)
    .sort((S, v) => v.h - S.h)
    .slice(0, 40);
  for (const S of g) {
    const v = S.base + S.h + 1.6,
      a = n();
    for (const [r, y] of [
      [-1, -1],
      [1, 1],
      [1, -1],
    ])
      x.push({
        p: [S.x + r * S.w * 0.45, v, S.z + y * S.d * 0.45],
        c: [4, 0.16, 0.05],
        s: 1.5,
        m: [1, a, 0.55, 0],
      });
  }
  for (const S of d.extraPoints || [])
    x.push({ p: S, c: [4, 0.16, 0.05], s: 1.6, m: [1, n(), 0.5, 0] });
  for (const S of d.extraPts || []) x.push(S);
  for (const S of d.extraFlames || []) w.push(S);
  const M = Z0(e, w),
    N = Ue(e, s),
    T = Ge(e, x, "city3_points");
  return (
    h.add(M, N, T),
    k.length && h.add(Qe(e, k, n)),
    {
      group: h,
      flames: M,
      plumes: N,
      points: T,
      counts: {
        flames: w.length,
        plumes: s.length,
        points: x.length,
        embers: k.length,
      },
    }
  );
}
const eo = new X(0, 1, 0),
  Et = new S0(),
  qt = new G0(),
  oo = new X(),
  so = new X(),
  ft = new X(),
  ao = new kt(1, 1, 1),
  no = new _0(0.5, 0.5, 1, 6, 1);
function Y(m, e, d, n, h, c = !1) {
  ft.set(d[0] - e[0], d[1] - e[1], d[2] - e[2]);
  const w = ft.length();
  w < 1e-4 ||
    (qt.setFromUnitVectors(eo, ft.multiplyScalar(1 / w)),
    Et.compose(
      oo.set((e[0] + d[0]) / 2, (e[1] + d[1]) / 2, (e[2] + d[2]) / 2),
      qt,
      so.set(n, w, n),
    ),
    m.geo(c ? no : ao, h, Et));
}
function J0(m, e, d, n, h, c, w, s) {
  const x = Math.hypot(d[0] - e[0], d[1] - e[1], d[2] - e[2]),
    k = Math.max(1, Math.round(x / c)),
    P = (_, g, M) => [
      _[0] + (g[0] - _[0]) * M,
      _[1] + (g[1] - _[1]) * M,
      _[2] + (g[2] - _[2]) * M,
    ];
  for (let _ = 0; _ < k; _++) {
    const g = _ / k,
      M = (_ + 1) / k;
    (Y(m, P(e, d, g), P(n, h, (g + M) / 2), w, s),
      Y(m, P(n, h, (g + M) / 2), P(e, d, M), w, s));
  }
}
function L0(m, e, d, n, h, c, w = 10) {
  let s = e;
  for (let x = 1; x <= w; x++) {
    const k = x / w,
      P = [
        e[0] + (d[0] - e[0]) * k,
        e[1] + (d[1] - e[1]) * k - n * 4 * k * (1 - k),
        e[2] + (d[2] - e[2]) * k,
      ];
    (Y(m, s, P, h, c, !0), (s = P));
  }
}
const z0 = (m, e) => m + 32768 * e,
  io = [
    { name: "site", x0: 457, x1: 531, z0: -206, z1: -152, ground: "dirt" },
    { name: "glass", x0: 554, x1: 633, z0: -292, z1: -238 },
    { name: "tankB", x0: 1068, x1: 1143, z0: -372, z1: -312 },
    { name: "impactB", x0: 961, x1: 1036, z0: -474, z1: -392 },
    { name: "heli2B", x0: 1068, x1: 1143, z0: -474, z1: -392 },
    { name: "mastB", x0: 1164, x1: 1246, z0: -748, z1: -688 },
    { name: "anchorB", x0: 1266, x1: 1346, z0: -748, z1: -688 },
  ],
  f0 = {
    x: 494,
    z: -179,
    mastH: 42.5,
    jibY: 43.6,
    jibLen: 55,
    headH: 9.5,
    sw: 2,
    th0: -2.95,
    th1: -1.92,
  },
  i0 = {
    x0: 668,
    x1: 727,
    n: { z0: -282, z1: -229.5, h: 140 },
    s: { z0: -214.5, z1: -160, h: 126 },
  },
  I0 = {
    x: 875,
    z: -220.5,
    yaw: Math.PI / 2 - 0.35,
    col: { x: 873, z: -221, lean: 0.24, r0: 7, k: 0.42 },
  },
  y0 = {
    x0: 961,
    x1: 1022,
    z0: -254,
    z1: -190,
    h: 88,
    pad: { x: 991.5, z: -222, y: 90.2, s: 21 },
  },
  Zt = {
    x: 1071.5,
    z: -349,
    roof: 58,
    legs: 4.2,
    r: 2.1,
    h: 4.6,
    vx: -11,
    vy: 3,
    spin: 2.6,
  },
  M0 = { x: 1036, y: 24, z: -431 },
  ro = { z: -667, xw: 1247.6, xe: 1264.4, ys: [12, 11.4, 10.8], sag: 0.35 },
  Jt = {
    x: 1239.5,
    z: -703.5,
    roof: 21,
    h: 30,
    guyY: 22.5,
    anchor: [1266.4, 8.8, -701],
  };
function co(m, e, d) {
  const n = (w) => m.add({ exempt: !0, tier: "near", ...w }),
    h = { blds: {} };
  ((h.blds.glass = n({
    x: 593.5,
    z: -264.5,
    w: 67,
    d: 43,
    h: 132,
    flH: 4,
    groundH: 6,
    bay: 3,
    style: 3,
    tone: 0.12,
    tint: 0.2,
    faces: 15,
    flags: 36,
    kind: "tower",
    lit: 0,
    burnF: 14,
    burnN: 4,
    dmg: 0.45,
  })),
    n({
      x: 593.5,
      z: -265,
      w: 79,
      d: 54,
      h: 9.2,
      flH: 4.2,
      groundH: 5,
      bay: 4,
      style: 1,
      tone: 0.3,
      faces: 15,
      flags: 6,
      kind: "podium",
      lit: 0.02,
    }),
    (h.blds.twinN = n({
      x: (i0.x0 + i0.x1) / 2,
      z: (i0.n.z0 + i0.n.z1) / 2,
      w: i0.x1 - i0.x0,
      d: i0.n.z1 - i0.n.z0,
      h: i0.n.h,
      flH: 4,
      groundH: 7,
      bay: 3,
      style: 3,
      tone: 0.05,
      tint: 0.1,
      faces: 15,
      flags: 12,
      kind: "tower",
      lit: 0.03,
      dmg: 0.12,
      mirror: !0,
    })),
    (h.blds.twinS = n({
      x: (i0.x0 + i0.x1) / 2,
      z: (i0.s.z0 + i0.s.z1) / 2,
      w: i0.x1 - i0.x0,
      d: i0.s.z1 - i0.s.z0,
      h: i0.s.h,
      flH: 4,
      groundH: 7,
      bay: 3,
      style: 3,
      tone: 0.05,
      tint: 0.7,
      faces: 15,
      flags: 12,
      kind: "tower",
      lit: 0.02,
      dmg: 0.15,
      burnF: 22,
      burnN: 2,
      mirror: !0,
    })),
    (h.blds.climb = n({
      x: (y0.x0 + y0.x1) / 2,
      z: (y0.z0 + y0.z1) / 2,
      w: y0.x1 - y0.x0,
      d: y0.z1 - y0.z0,
      h: y0.h,
      flH: 3.9,
      groundH: 6,
      bay: 3,
      style: 3,
      tone: 0.3,
      tint: 0.15,
      faces: 15,
      flags: 4,
      kind: "tower",
      lit: 0.08,
      dmg: 0.08,
      mirror: !0,
    })),
    n({
      x: 1029,
      z: -222,
      w: 13.5,
      d: 136,
      h: 9,
      flH: 4,
      groundH: 5,
      bay: 4,
      style: 2,
      tone: 0.4,
      faces: 13,
      flags: 6,
      kind: "podium",
      lit: 0.02,
    }),
    n({
      x: 991.5,
      z: -273,
      w: 61,
      d: 34,
      h: 13,
      flH: 4,
      groundH: 5,
      bay: 4,
      style: 2,
      tone: 0.45,
      faces: 10,
      flags: 6,
      kind: "podium",
      lit: 0.02,
    }),
    n({
      x: 991.5,
      z: -171,
      w: 61,
      d: 34,
      h: 13,
      flH: 4,
      groundH: 5,
      bay: 4,
      style: 2,
      tone: 0.45,
      faces: 6,
      flags: 6,
      kind: "podium",
      lit: 0.02,
    }),
    (h.blds.tankB = n({
      x: 1086,
      z: -342,
      w: 36,
      d: 58,
      h: Zt.roof,
      flH: 3.45,
      groundH: 5,
      bay: 3.1,
      style: 1,
      tone: 0.42,
      faces: 15,
      flags: 38,
      kind: "pre",
      lit: 0.03,
      burnF: 14,
      burnN: 2,
      dmg: 0.4,
    })),
    n({
      x: 1124.5,
      z: -342,
      w: 37,
      d: 58,
      h: 34,
      flH: 3.3,
      groundH: 4.5,
      bay: 3,
      style: 0,
      tone: 0.2,
      faces: 13,
      flags: 38,
      kind: "pre",
      lit: 0.05,
    }),
    (h.blds.impactB = n({
      x: 1013,
      z: -431,
      w: 46,
      d: 78,
      h: 50,
      flH: 3.4,
      groundH: 5,
      bay: 3.2,
      style: 0,
      tone: 0.1,
      faces: 15,
      flags: 39,
      kind: "pre",
      lit: 0.04,
      dmg: 0.2,
    })),
    n({
      x: 973.5,
      z: -433,
      w: 23,
      d: 80,
      h: 31,
      flH: 3.3,
      groundH: 4.5,
      bay: 3,
      style: 1,
      tone: 0.6,
      faces: 14,
      flags: 6,
      kind: "pre",
      lit: 0.05,
    }),
    n({
      x: 1089,
      z: -433,
      w: 40,
      d: 80,
      h: 26.5,
      flH: 3.4,
      groundH: 5,
      bay: 3.2,
      style: 1,
      tone: 0.15,
      faces: 15,
      flags: 38,
      kind: "pre",
      lit: 0.04,
      dmg: 0.2,
    }),
    n({
      x: 1126,
      z: -433,
      w: 33,
      d: 80,
      h: 19.5,
      flH: 3.3,
      groundH: 4.5,
      bay: 3,
      style: 0,
      tone: 0.6,
      faces: 13,
      flags: 23,
      kind: "pre",
      lit: 0.03,
      dmg: 0.25,
      burnF: 3,
      burnN: 2,
    }),
    (h.blds.mastB = n({
      x: 1218,
      z: -718,
      w: 56,
      d: 60,
      h: Jt.roof,
      flH: 3.3,
      groundH: 4.2,
      bay: 2.9,
      style: 0,
      tone: 0.05,
      faces: 15,
      flags: 23,
      kind: "old",
      region: "old",
      lit: 0.04,
      dmg: 0.2,
    })),
    n({
      x: 1176,
      z: -718,
      w: 24,
      d: 60,
      h: 17,
      flH: 3.3,
      groundH: 4.2,
      bay: 2.9,
      style: 6,
      tone: 0.3,
      faces: 14,
      flags: 6,
      kind: "old",
      region: "old",
      lit: 0.02,
    }),
    (h.blds.anchorB = n({
      x: 1290,
      z: -718,
      w: 47,
      d: 60,
      h: 18.5,
      flH: 3.2,
      groundH: 4,
      bay: 2.8,
      style: 0,
      tone: 0.7,
      faces: 15,
      flags: 7,
      kind: "old",
      region: "old",
      lit: 0.05,
      dmg: 0.15,
    })),
    n({
      x: 1330,
      z: -718,
      w: 32,
      d: 60,
      h: 23.5,
      flH: 3.3,
      groundH: 4.2,
      bay: 2.9,
      style: 1,
      tone: 0.5,
      faces: 13,
      flags: 6,
      kind: "old",
      region: "old",
      lit: 0.04,
    }),
    (h.blds.site = n({
      x: 494,
      z: -179,
      w: 74,
      d: 54,
      h: 0.5,
      flH: 4.2,
      style: 2,
      tone: 0.5,
      faces: 0,
      flags: 0,
      kind: "site",
      custom: () => {},
    })),
    (h.blds.prop = n({
      x: 0,
      z: 0,
      w: 1,
      d: 1,
      h: 1,
      style: 2,
      tone: 0.5,
      faces: 0,
      flags: 0,
      kind: "prop",
      custom: () => {},
    })));
  const c = m.fires;
  return (
    c.push({ x: I0.x, y: 4, z: I0.z, I: 160, kind: "tanker" }),
    c.push({ x: 1066, y: 56, z: -349, I: 70, kind: "tankB" }),
    c.push({ x: 1043, y: 23, z: -431, I: 0, kind: "impact", dyn: !0 }),
    c.push({ x: 1256, y: 11.5, z: -667, I: 0, kind: "wires", dyn: !0 }),
    c.push({ x: 1159, y: 3.5, z: -545, I: 55, kind: "bridgeBus" }),
    c.push({ x: 600, y: 2.5, z: -227, I: 40, kind: "car" }),
    c.push({ x: 1052, y: 2.5, z: -268, I: 40, kind: "car" }),
    c.push({ x: 1256, y: 2.5, z: -735, I: 45, kind: "car" }),
    c.push({ x: 446, y: 2.5, z: -60, I: 35, kind: "car" }),
    h
  );
}
const lo = `
attribute vec4 aS;        // x, y, z (centre), size
attribute vec4 aS2;       // seed, density, fire light, spin
varying vec2 vUv;
varying vec4 vS2;
varying vec3 vWorld;
varying float vFade;
uniform float uTime;
uniform vec2 uWind;
void main() {
  vec3 c = aS.xyz;
  c.xz += uWind * (sin(uTime * 0.11 + aS2.x * 6.0) * 2.5);
  c.y += sin(uTime * 0.21 + aS2.x * 9.0) * 1.2;
  vec3 toCam = cameraPosition - c;
  float d = length(toCam);
  vec3 f = toCam / d;
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 u = cross(f, r);
  float a = aS2.w * uTime * 0.05 + aS2.x * 6.28;
  vec2 q = vec2(cos(a) * position.x - sin(a) * position.y, sin(a) * position.x + cos(a) * position.y);
  vec3 P = c + (r * q.x + u * q.y) * aS.w;
  vUv = position.xy + 0.5; vS2 = aS2; vWorld = P;
  vFade = smoothstep(1.5, 9.0, d);                    // (a sprite fades as the lens goes through it: the veil takes over)
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  fo = `
varying vec2 vUv;
varying vec4 vS2;
varying vec3 vWorld;
varying float vFade;
${u0}
${g0}
${F0}
uniform float uOn;
void main() {
  vec2 q = vUv - 0.5;
  float r = length(q) * 2.0;
  float n = c3fbm(vUv * 3.0 + vS2.x * 7.0 + vec2(0.0, -uTime * 0.05));
  float dens = (1.0 - smoothstep(0.35, 1.0, r + (n - 0.5) * 0.6)) * vS2.y * vFade * uOn;
  if (dens < 0.004) discard;
  float h = clamp(vWorld.y / 120.0, 0.0, 1.0);
  vec3 V = normalize(vWorld - cameraPosition);
  vec3 L = c3skyAmb(vec3(0.0, 1.0, 0.0)) * 0.8 + c3skyAmb(-V) * 0.4;
  vec3 fireL = vec3(1.0, 0.36, 0.09) * vS2.z * exp(-vWorld.y / 16.0) * (0.6 + 0.8 * n);
  vec3 col = vec3(0.05, 0.047, 0.045) * (L * 2.0 + fireL * 2.6) * (0.65 + 0.5 * n);
  col = cityHaze(col, vWorld);
  gl_FragColor = vec4(col, clamp(dens * 1.2, 0.0, 0.95));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  ho = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,
  uo = `
varying vec2 vUv;
uniform float uK;
uniform float uTime;
uniform vec3 uFire;
${u0}
void main() {
  float n = c3fbm(vUv * vec2(3.0, 2.0) + vec2(uTime * 0.6, uTime * 0.25));
  float n2 = c3fbm3(vUv * vec2(7.0, 5.0) - vec2(uTime * 1.1, -uTime * 0.4));
  float a = clamp(uK * (0.86 + 0.25 * n + 0.12 * n2), 0.0, 0.99);
  float low = pow(1.0 - vUv.y, 2.2);
  vec3 col = vec3(0.0075, 0.0068, 0.0064) * (0.5 + 0.9 * n) + uFire * low * (0.35 + 0.9 * n2);
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Qt(m, e, d) {
  const n = I0.col;
  if (e < 1 || e > 160) return 0;
  const h = n.x + n.lean * e,
    c = n.z - n.lean * 0.35 * e,
    w = n.r0 + n.k * e,
    s = Math.hypot(m - h, d - c) / w;
  return Math.max(0, Math.min(1, (1.08 - s) / 0.35)) * Math.min(1, e / 6);
}
const po = `
attribute vec4 aB;        // start x, y, z, seed
attribute vec4 aB2;       // velocity x, y, z, flap rate
uniform float uK;         // 0..1 over the flight (2.6 s)
uniform float uTime;
varying float vA;
void main() {
  float t = uK * 2.6;
  float s = aB.w;
  vec3 v = aB2.xyz;
  vec3 c = aB.xyz + v * t + vec3(sin(t * 3.0 + s * 9.0), sin(t * 2.3 + s * 5.0) * 0.6, cos(t * 2.7 + s * 7.0)) * 1.2 * t;
  float flap = sin(uTime * aB2.w + s * 20.0);
  vec3 p = position;
  p.y += abs(p.x) * flap * 0.9;                               // the wings beat
  vec3 f = normalize(v);
  vec3 rr = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 P = c + rr * p.x * 0.55 + vec3(0.0, p.y * 0.55, 0.0) + f * p.z * 0.55;
  vA = step(0.001, uK) * (1.0 - smoothstep(0.85, 1.0, uK));
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
  if (vA < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  mo = `
varying float vA;
void main() { gl_FragColor = vec4(vec3(0.004, 0.004, 0.005), 1.0); }
`,
  vo = `
attribute vec4 aG;        // start x, y, z, seed
attribute vec4 aG2;       // velocity x, y, z, size
uniform float uK;         // 0..1 over the fall
uniform float uDur;
uniform float uTime;
varying vec3 vN;
varying vec3 vW;
varying float vOn;
void main() {
  float t = uK * uDur;
  float s = aG.w;
  vec3 c = aG.xyz + aG2.xyz * t + vec3(0.0, -4.9 * t * t, 0.0);
  float a = t * (6.0 + s * 9.0) + s * 20.0, b = t * (4.0 + s * 7.0);
  vec3 p = position * aG2.w;
  p = vec3(cos(a) * p.x - sin(a) * p.y, sin(a) * p.x + cos(a) * p.y, p.z);
  p = vec3(p.x, cos(b) * p.y - sin(b) * p.z, sin(b) * p.y + cos(b) * p.z);
  vec3 n = vec3(0.0, 0.0, 1.0);
  n = vec3(cos(a) * n.x - sin(a) * n.y, sin(a) * n.x + cos(a) * n.y, n.z);
  n = vec3(n.x, cos(b) * n.y - sin(b) * n.z, sin(b) * n.y + cos(b) * n.z);
  vec3 P = c + p;
  vN = n; vW = P;
  vOn = step(0.001, uK) * step(uK, 0.999) * step(0.5, P.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
  if (vOn < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  xo = `
varying vec3 vN;
varying vec3 vW;
varying float vOn;
${u0}
${g0}
${F0}
uniform float uGlass;
void main() {
  vec3 V = normalize(vW - cameraPosition);
  vec3 N = normalize(vN); if (dot(N, V) > 0.0) N = -N;
  vec3 col;
  if (uGlass > 0.5) {
    // glass: the sky and the fires in it, and the burning floor above it catching every pane as it turns
    float glint = pow(abs(dot(N, V)), 24.0);
    col = c3skyRefl(V, N, 0.02) * 3.0 + citySpec(vW, N, V, 300.0) * 3.0 + vec3(0.02, 0.025, 0.03) + vec3(2.4, 0.95, 0.3) * glint;
  } else {
    col = vec3(0.05, 0.045, 0.04) * cityLight(vW, N);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function ht(m, e, d, n, h) {
  const c = Math.max(1, e.length),
    w = new ot(),
    s = new v0();
  (s.setAttribute(
    "position",
    new e0(
      d
        ? [-0.5, -0.4, 0, 0.55, -0.3, 0, 0, 0.6, 0]
        : [
            -0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, 0.5,
            0, -0.5, 0.5, 0,
          ],
      3,
    ),
  ),
    w.setAttribute("position", s.attributes.position));
  const x = new Float32Array(c * 4),
    k = new Float32Array(c * 4);
  (e.forEach((M, N) => {
    (x.set(M[0], N * 4), k.set(M[1], N * 4));
  }),
    w.setAttribute("aG", new m0(x, 4)),
    w.setAttribute("aG2", new m0(k, 4)),
    (w.instanceCount = e.length));
  const P = {
      ...m,
      uK: { value: 0 },
      uDur: { value: n },
      uGlass: { value: d ? 1 : 0 },
    },
    _ = r0({ vertexShader: vo, fragmentShader: xo, uniforms: P, side: E0 }),
    g = new s0(w, _);
  return ((g.name = h), (g.frustumCulled = !1), { mesh: g, uni: P });
}
const wo = `
attribute vec4 aF;        // offset x, y, z (from the centre), seed
attribute vec4 aF2;       // size, delay, rise, kind
uniform vec3 uC;
uniform float uK;         // seconds since the blast
varying vec2 vUv;
varying float vHeat;
varying float vA;
varying float vSeed;
void main() {
  float t = max(uK - aF2.y, 0.0);
  float grow = 1.0 - exp(-t * 3.2);
  vec3 c = uC + aF.xyz * grow * 1.6 + vec3(0.0, aF2.z * t * t * 0.6 + aF2.z * t * 0.8, 0.0);
  float size = aF2.x * (0.35 + grow * 1.1 + t * 0.25);
  vec3 toCam = normalize(cameraPosition - c);
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), toCam));
  vec3 u = cross(toCam, r);
  vec3 P = c + (r * position.x + u * position.y) * size;
  vUv = position.xy + 0.5;
  vHeat = exp(-t * 1.6);
  vA = step(0.0001, uK - aF2.y) * (1.0 - smoothstep(2.5, 6.0, t));
  vSeed = aF.w;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
  if (vA < 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  bo = `
varying vec2 vUv;
varying float vHeat;
varying float vA;
varying float vSeed;
${u0}
void main() {
  vec2 q = vUv - 0.5;
  float n = c3fbm(vUv * 3.5 + vSeed * 9.0);
  float r = length(q) * 2.0 + (n - 0.5) * 0.7;
  float body = 1.0 - smoothstep(0.45, 1.0, r);
  if (body * vA < 0.01) discard;
  float core = 1.0 - smoothstep(0.0, 0.7, r);
  vec3 hot = mix(vec3(2.2, 0.55, 0.10), vec3(5.0, 2.6, 0.9), core * vHeat);
  vec3 smoke = vec3(0.020, 0.017, 0.015);
  vec3 col = mix(smoke, hot, clamp(vHeat * 1.4 - 0.15 + core * 0.4 * vHeat, 0.0, 1.0));
  float a = body * vA * mix(0.9, 1.0, vHeat);
  gl_FragColor = vec4(col * (vHeat > 0.12 ? 1.0 : 1.0), a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Wt(m, e, d, n, h, c) {
  const w = new ot(),
    s = new et(1, 1);
  ((w.index = s.index), w.setAttribute("position", s.attributes.position));
  const x = new Float32Array(d * 4),
    k = new Float32Array(d * 4);
  for (let M = 0; M < d; M++) {
    const N = e() * 2 - 1,
      T = e() * 6.283,
      S = Math.cbrt(e());
    (x.set(
      [
        Math.sqrt(1 - N * N) * Math.cos(T) * n * S,
        N * n * 0.6 * S,
        Math.sqrt(1 - N * N) * Math.sin(T) * n * S,
        e() * 10,
      ],
      M * 4,
    ),
      k.set([n * (0.45 + e() * 0.6), e() * 0.25, h * (0.5 + e()), 0], M * 4));
  }
  (w.setAttribute("aF", new m0(x, 4)),
    w.setAttribute("aF2", new m0(k, 4)),
    (w.instanceCount = d));
  const P = { ...m, uC: { value: new X() }, uK: { value: -1 } },
    _ = r0({
      vertexShader: wo,
      fragmentShader: bo,
      uniforms: P,
      transparent: !0,
      depthWrite: !1,
    }),
    g = new s0(w, _);
  return (
    (g.name = c),
    (g.frustumCulled = !1),
    (g.renderOrder = 7),
    { mesh: g, uni: P }
  );
}
const yo = `
attribute vec4 aP;        // origin x, y, z, seed
attribute vec4 aP2;       // velocity x, y, z, life
uniform float uK;         // seconds since the burst
uniform float uPx;
varying vec3 vCol;
void main() {
  float t = uK;
  vec3 P = aP.xyz + aP2.xyz * t + vec3(0.0, -4.9 * t * t, 0.0);
  float life = clamp(1.0 - t / aP2.w, 0.0, 1.0);
  vec4 mv = viewMatrix * vec4(P, 1.0);
  gl_Position = projectionMatrix * mv;
  vCol = mix(vec3(3.0, 0.9, 0.2), vec3(6.0, 5.0, 3.5), life * life) * life * step(0.0, t);
  gl_PointSize = clamp(1.6 * uPx * 40.0 / max(-mv.z, 0.5), 1.0, 7.0);
  if (life <= 0.0 || t < 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  go = `
varying vec3 vCol;
void main() { vec2 q = gl_PointCoord * 2.0 - 1.0; float a = exp(-dot(q, q) * 3.0); if (a < 0.03) discard; gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Dt(m, e, d, n) {
  const h = [];
  for (const g of d)
    for (let M = 0; M < g.n; M++) {
      const N = e() * 6.283,
        T = e() * 2 - 1,
        S = g.speed * (0.3 + e());
      h.push([
        g.p[0],
        g.p[1],
        g.p[2],
        e(),
        Math.sqrt(1 - T * T) * Math.cos(N) * S,
        Math.abs(T) * S * 0.8 + g.up,
        Math.sqrt(1 - T * T) * Math.sin(N) * S,
        0.4 + e() * g.life,
      ]);
    }
  const c = Math.max(1, h.length),
    w = new Float32Array(c * 4),
    s = new Float32Array(c * 4);
  h.forEach((g, M) => {
    (w.set(g.slice(0, 4), M * 4), s.set(g.slice(4, 8), M * 4));
  });
  const x = new v0();
  (x.setAttribute("position", new e0(new Float32Array(c * 3), 3)),
    x.setAttribute("aP", new q0(w, 4)),
    x.setAttribute("aP2", new q0(s, 4)));
  const k = { ...m, uK: { value: -1 } },
    P = r0({
      vertexShader: yo,
      fragmentShader: go,
      uniforms: k,
      transparent: !0,
      depthWrite: !1,
      blending: rt,
    }),
    _ = new _t(x, P);
  return (
    (_.name = n),
    (_.frustumCulled = !1),
    (_.renderOrder = 7),
    { mesh: _, uni: k }
  );
}
const zo = `
attribute vec4 aP;        // path point x, y, z, its time
attribute float aSide;    // -1 .. 1
uniform float uHead;      // the time of the head (the trail is drawn up to it)
uniform float uTime;
varying float vAge;
varying float vS;
varying vec3 vWorld;
void main() {
  float age = max(uHead - aP.w, 0.0);
  vec3 c = aP.xyz + vec3(0.9, 1.6, -0.5) * age;
  vec3 toCam = normalize(cameraPosition - c);
  vec3 tang = vec3(1.0, -0.4, 0.3);
  vec3 sd = normalize(cross(toCam, tang));
  float w = 1.2 + age * 2.6;
  vec3 P = c + sd * aSide * w;
  vAge = (aP.w > uHead) ? -1.0 : age; vS = aSide; vWorld = P;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  Mo = `
varying float vAge;
varying float vS;
varying vec3 vWorld;
${u0}
${g0}
${F0}
void main() {
  if (vAge < 0.0) discard;
  float n = c3fbm3(vec2(vS * 1.3 + vAge * 0.7, vAge * 2.2 - uTime * 0.6));
  float d = (1.0 - smoothstep(0.35, 1.0, abs(vS) + (n - 0.5) * 0.6)) * exp(-vAge / 5.0) * smoothstep(0.0, 0.15, vAge);
  if (d < 0.01) discard;
  vec3 col = vec3(0.04, 0.036, 0.034) * (c3skyAmb(vec3(0.0, 1.0, 0.0)) * 2.0 + vec3(1.0, 0.35, 0.08) * exp(-vAge * 1.5) * 1.5);
  col = cityHaze(col, vWorld);
  gl_FragColor = vec4(col, clamp(d, 0.0, 0.92));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function ko(m, e, d, n, h, c) {
  const w = new T0();
  w.name = "city3_sites";
  const s = (r, y) => r + (y - r) * c(),
    x = W0(e, h, 2),
    k = W0(e, h, 2, { objLocal: !0 }),
    P = [],
    _ = {},
    g = [],
    M = (r, y, b, p, i, t, u) => P.push({ box: [r, y, b, p, i, t], name: u }),
    N = (r, y, b, p) => P.push({ seg: [r, y, b], name: p }),
    T = n.blds.site.id,
    S = n.blds.prop.id,
    v = new l0();
  {
    const r = f0,
      y = (B) => z0(T, B),
      b = 457.6,
      p = 530.4,
      i = -205.4,
      t = -152.6;
    for (const [B, j] of [
      [
        [b, i],
        [p, i],
      ],
      [
        [p, i],
        [p, t],
      ],
      [
        [p, t],
        [b, t],
      ],
      [
        [b, t],
        [b, i],
      ],
    ]) {
      const O = Math.hypot(j[0] - B[0], j[1] - B[1]);
      for (let Z = 0; Z < O - 0.5; Z += 2.44) {
        const n0 = Math.min(O, Z + 2.42),
          t0 = [B[0] + ((j[0] - B[0]) * Z) / O, B[1] + ((j[1] - B[1]) * Z) / O],
          c0 = [
            B[0] + ((j[0] - B[0]) * n0) / O,
            B[1] + ((j[1] - B[1]) * n0) / O,
          ];
        (B[0] === b && j[0] === b && Math.abs((t0[1] + c0[1]) / 2 + 179) < 4) ||
          v.box(
            Math.min(t0[0], c0[0]) - 0.04,
            0,
            Math.min(t0[1], c0[1]) - 0.04,
            Math.max(t0[0], c0[0]) + 0.04,
            2.4 + (Z % 4.88 < 2.44 ? 0 : 0.05),
            Math.max(t0[1], c0[1]) + 0.04,
            y(C.plywood),
          );
      }
    }
    const u = 468,
      o = 522,
      l = -199,
      f = -160;
    for (let B = 0; B < 4; B++) {
      const j = B * 4.2,
        O = B === 3 ? u + 30 : o;
      if ((B > 0 && v.box(u, j - 0.3, l, O, j, f, y(C.concrete)), B < 3))
        for (let Z = u; Z <= o + 0.1; Z += 6)
          for (let n0 = l; n0 <= f + 0.1; n0 += 6.5)
            v.box(
              Z - 0.25,
              j,
              n0 - 0.25,
              Z + 0.25,
              j + 3.9,
              n0 + 0.25,
              y(C.concrete),
            );
    }
    for (let B = u + 31; B <= o; B += 6)
      for (let j = l; j <= f + 0.1; j += 6.5) {
        v.box(B - 0.25, 12.6, j - 0.25, B + 0.25, 15, j + 0.25, y(C.concrete));
        for (const O of [-0.12, 0.12])
          Y(v, [B + O, 15, j], [B + O * 2, 16.6, j + O], 0.03, y(C.iron));
      }
    for (let B = u + 0.5; B < u + 30; B += 1.2)
      v.box(B, 12.6, f - 0.1, B + 1.1, 13.8, f, y(C.plywood));
    for (let B = 0; B < 3; B++)
      (v.box(
        460 + B * 6.3,
        0.15,
        -158.5,
        466 + B * 6.3,
        2.75,
        -156,
        z0(T, C.container),
      ),
        B < 2 &&
          v.box(
            460 + B * 6.3,
            2.75,
            -158.5,
            466 + B * 6.3,
            5.35,
            -156,
            z0(T, C.container),
          ));
    for (let B = 0; B < 6; B++)
      v.box(
        500 + B * 2.2,
        0.15,
        -203.5,
        501.6 + B * 2.2,
        0.15 + s(0.8, 1.4),
        -202,
        y(C.plywood),
      );
    for (let B = 0; B < 5; B++)
      v.box(
        470 + B * 0.5,
        0.15,
        -156 - B * 0.1,
        482,
        0.4 + B * 0.12,
        -155.6 - B * 0.1,
        y(C.iron),
      );
    const z = r.sw / 2,
      A = r.x,
      F = r.z,
      E = r.mastH;
    v.box(A - 3.5, 0, F - 3.5, A + 3.5, 1.2, F + 3.5, y(C.concrete));
    const K = [
      [-z, -z],
      [z, -z],
      [z, z],
      [-z, z],
    ];
    for (const [B, j] of K)
      Y(v, [A + B, 1.2, F + j], [A + B, E, F + j], 0.16, y(C.crane));
    for (let B = 1.2; B < E - 0.1; B += 2.45) {
      const j = Math.min(E, B + 2.45);
      for (let O = 0; O < 4; O++) {
        const [Z, n0] = K[O],
          [t0, c0] = K[(O + 1) % 4];
        (Y(v, [A + Z, B, F + n0], [A + t0, j, F + c0], 0.08, y(C.crane)),
          Y(v, [A + Z, B, F + n0], [A + t0, B, F + c0], 0.07, y(C.crane)));
      }
    }
    M(A - 1.2, 0, F - 1.2, A + 1.2, E + 1, F + 1.2, "crane mast");
    const L = new l0(),
      q = (B) => z0(S, B),
      R = r.jibY,
      V = r.jibLen;
    (L.box(-1.6, E - R, -1.6, 1.6, 1, 1.6, q(C.crane)),
      L.box(1.3, -2.6, 1, 3.6, -0.1, 3.4, q(C.metal)),
      L.box(1.35, -2, 3.38, 3.55, -0.7, 3.42, q(C.glassRail)));
    const H = 0.85,
      I = 1.9,
      W = [-H, 0, 1.6],
      D = [-H * 0.6, 0, V],
      G = [H, 0, 1.6],
      a0 = [H * 0.6, 0, V],
      o0 = [0, I, 1.6],
      p0 = [0, I * 0.55, V];
    for (const [B, j] of [
      [W, D],
      [G, a0],
      [o0, p0],
    ])
      Y(L, B, j, 0.14, q(C.crane));
    (J0(L, W, D, G, a0, 2.4, 0.06, q(C.crane)),
      J0(L, W, D, o0, p0, 2.4, 0.07, q(C.crane)),
      J0(L, G, a0, o0, p0, 2.4, 0.07, q(C.crane)));
    const b0 = [-1, 0.2, -1.6],
      P0 = [-1, 0.2, -18],
      H0 = [1, 0.2, -1.6],
      x0 = [1, 0.2, -18];
    (Y(L, b0, P0, 0.16, q(C.crane)),
      Y(L, H0, x0, 0.16, q(C.crane)),
      J0(L, b0, P0, H0, x0, 2, 0.07, q(C.crane)));
    for (let B = 0; B < 4; B++)
      L.box(
        -1.3,
        -1.2,
        -18 + 0.3 + B * 1.15,
        1.3,
        0.9,
        -18 + 1.35 + B * 1.15,
        q(C.concrete),
      );
    L.box(-0.9, 0.3, -9, 0.9, 1.6, -6.5, q(C.metal));
    const R0 = r.headH;
    for (const [B, j] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
    ])
      Y(L, [B * 1, 0.5, j * 1], [0, R0, 0], 0.13, q(C.crane));
    for (const B of [22, 40])
      L0(
        L,
        [0, R0, 0.2],
        [0, I * (1 - (0.45 * B) / V), B],
        0.15,
        0.045,
        q(C.iron),
        6,
      );
    (L0(L, [0, R0, -0.2], [-1, 0.4, -17], 0.1, 0.045, q(C.iron), 6),
      L0(L, [0, R0, -0.2], [1, 0.4, -17], 0.1, 0.045, q(C.iron), 6),
      L.box(-0.8, -0.35, 13, 0.8, 0.05, 14.4, q(C.metal)));
    for (const B of [-0.25, 0.25])
      Y(L, [B, -0.3, 13.7], [B, -5, 13.7], 0.03, q(C.iron), !0);
    L.box(-0.35, -5.9, 13.35, 0.35, -4.9, 14.05, q(C.crane));
    const B0 = new s0(L.build(), k);
    ((B0.name = "city3_crane_jib"), B0.position.set(A, R, F), w.add(B0));
    const U = (B) => {
      const j = B * B * (3 - 2 * B);
      B0.rotation.y = r.th0 + (r.th1 - r.th0) * j;
    };
    (U(0),
      (_.crane = {
        k: 0,
        set(B) {
          ((_.crane.k = B = Math.max(0, Math.min(1, B))), U(B));
        },
        object: B0,
        warning: [0, 0, 0],
      }),
      P.push({
        name: "crane jib",
        dyn: "crane",
        obb: { c: [A, R, F], from: 1.6, to: V, half: 1.1, y0: -0.4, y1: 2.2 },
      }),
      P.push({
        name: "crane counter-jib",
        dyn: "crane",
        obb: {
          c: [A, R, F],
          from: -18,
          to: -1.6,
          half: 1.4,
          y0: -1.3,
          y1: R0 + 0.3,
        },
      }),
      g.push({ id: "crane_groan", at: [A, R, F] }));
  }
  {
    const r = (y) => z0(n.blds.twinN.id, y);
    for (const [y, b] of [
      [662, -290],
      [662, -150],
      [733, -200],
      [733, -246],
    ])
      v.box(y - 2.5, 0.15, b - 1.2, y + 2.5, 0.9, b + 1.2, r(C.concrete));
    v.box(657.5, 0.15, -224, 660.5, 1.2, -220, r(C.concrete));
    for (let y = 0; y < 16; y++) {
      const b = (y / 16) * Math.PI * 2,
        p = ((y + 1) / 16) * Math.PI * 2;
      Y(
        v,
        [659, 4.2 + Math.cos(b) * 2.8, -222 + Math.sin(b) * 2.8],
        [659, 4.2 + Math.cos(p) * 2.8, -222 + Math.sin(p) * 2.8],
        0.35,
        r(C.steel),
      );
    }
    M(657.5, 0, -225, 660.5, 7.2, -219, "sculpture");
  }
  {
    const r = I0,
      y = (t) => z0(S, t),
      b = new l0();
    (b.box(-1.25, 0.9, 5.2, 1.25, 3.4, 7.6, y(C.burnt)),
      b.box(-1.3, 0.55, -8, 1.3, 1, 5.4, y(C.burnt)));
    const p = new _0(1.35, 1.35, 11.5, 20, 1);
    (p.rotateX(Math.PI / 2), p.translate(0, 2.45, -1.6), b.geo(p, y(C.burnt)));
    for (const t of [6.4, -4.5, -6])
      for (const u of [-1, 1]) {
        const o = new _0(0.52, 0.52, 0.4, 12);
        (o.rotateZ(Math.PI / 2),
          o.translate(u * 1.2, 0.52, t),
          b.geo(o, y(C.dark)));
      }
    const i = new s0(b.build(), k);
    ((i.name = "city3_tanker"),
      i.position.set(r.x, 0.15, r.z),
      (i.rotation.y = r.yaw),
      w.add(i),
      M(r.x - 7, 0, r.z - 5, r.x + 7, 4.2, r.z + 5, "tanker"));
  }
  {
    const r = n.blds.climb,
      y = (t) => z0(r.id, t),
      b = y0;
    for (let t = b.z0 + 1.5; t < b.z1 - 0.5; t += 1.5)
      v.box(
        b.x0 - 0.12,
        6,
        t - 0.04,
        b.x0 + 0.02,
        b.h - 0.2,
        t + 0.04,
        y(C.trim),
      );
    for (let t = 6; t < b.h - 1; t += 3.9)
      v.box(
        b.x0 - 0.18,
        t - 0.25,
        b.z0,
        b.x0 + 0.02,
        t + 0.12,
        b.z1,
        y(C.trim),
      );
    const p = b.pad,
      i = p.s / 2;
    (v.box(b.x0, b.h, b.z0, b.x1, b.h + 1.2, b.z0 + 0.3, y(C.trim)),
      v.box(b.x0, b.h, b.z1 - 0.3, b.x1, b.h + 1.2, b.z1, y(C.trim)),
      v.box(b.x0, b.h, b.z0, b.x0 + 0.3, b.h + 1.2, b.z1, y(C.trim)),
      v.box(b.x1 - 0.3, b.h, b.z0, b.x1, b.h + 1.2, b.z1, y(C.trim)),
      v.box(p.x - i, p.y - 0.35, p.z - i, p.x + i, p.y, p.z + i, y(C.helipad)));
    for (const [t, u] of [
      [-1, -1],
      [1, -1],
      [-1, 1],
      [1, 1],
      [0, -1],
      [0, 1],
      [-1, 0],
      [1, 0],
    ])
      Y(
        v,
        [p.x + t * (i - 1), b.h, p.z + u * (i - 1)],
        [p.x + t * (i - 1), p.y - 0.35, p.z + u * (i - 1)],
        0.3,
        y(C.iron),
      );
    for (const t of [-1, 1])
      (v.box(
        p.x - i - 1.2,
        p.y - 0.4,
        p.z + t * i - (t > 0 ? 0 : 0.05),
        p.x + i + 1.2,
        p.y - 0.3,
        p.z + t * i + (t > 0 ? 0.05 : 0),
        y(C.iron),
      ),
        v.box(
          p.x + t * i - 0.05,
          p.y - 0.4,
          p.z - i - 1.2,
          p.x + t * i + 0.05,
          p.y - 0.3,
          p.z + i + 1.2,
          y(C.iron),
        ));
    (Y(
      v,
      [b.x1 - 3, b.h, b.z0 + 3],
      [b.x1 - 3, b.h + 6, b.z0 + 3],
      0.08,
      y(C.iron),
    ),
      Y(
        v,
        [b.x1 - 3, b.h + 5.9, b.z0 + 3],
        [b.x1 - 3 + 1.6, b.h + 5.2, b.z0 + 3.6],
        0.45,
        y(C.mast),
        !0,
      ),
      v.box(
        b.x1 - 14,
        b.h,
        b.z1 - 9,
        b.x1 - 4,
        b.h + 4.2,
        b.z1 - 3,
        y(C.concrete),
      ),
      M(b.x0 - 0.5, 0, b.z0, b.x1, b.h + 1.2, b.z1, "climb tower"),
      M(p.x - i, b.h, p.z - i, p.x + i, p.y, p.z + i, "helipad"));
  }
  {
    const r = Zt,
      y = (W) => z0(S, W);
    n.blds.tankB;
    const b = r.x,
      p = r.z,
      i = r.roof,
      t = [
        [-1, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
      ],
      u = new l0();
    for (const [W, D] of t)
      u.box(
        W * r.r * 0.7 - 0.11,
        0,
        D * r.r * 0.7 - 0.11,
        W * r.r * 0.7 + 0.11,
        r.legs,
        D * r.r * 0.7 + 0.11,
        y(C.iron),
      );
    for (const W of [r.legs * 0.4, r.legs * 0.8])
      (u.box(
        -2.1 * 0.7,
        W,
        -2.1 * 0.7 - 0.05,
        r.r * 0.7,
        W + 0.1,
        -2.1 * 0.7 + 0.05,
        y(C.iron),
      ),
        u.box(
          -2.1 * 0.7,
          W,
          r.r * 0.7 - 0.05,
          r.r * 0.7,
          W + 0.1,
          r.r * 0.7 + 0.05,
          y(C.iron),
        ));
    u.box(
      -2.1 * 0.8,
      r.legs - 0.14,
      -2.1 * 0.8,
      r.r * 0.8,
      r.legs + 0.04,
      r.r * 0.8,
      y(C.iron),
    );
    const o = new s0(u.build(), k);
    ((o.name = "city3_tank_stand"), o.position.set(b, i, p), w.add(o));
    const l = new l0(),
      f = new _0(r.r, r.r, r.h, 20, 1);
    (f.translate(0, 0, 0), l.geo(f, y(C.wood)));
    const z = new jt(r.r * 1.08, r.h * 0.28, 20, 1);
    (z.translate(0, r.h / 2 + r.h * 0.14, 0), l.geo(z, y(C.wood)));
    for (const W of [-4.6 * 0.3, 0, r.h * 0.3]) {
      const D = new ie(r.r + 0.03, 0.04, 4, 24);
      (D.rotateX(Math.PI / 2), D.translate(0, W, 0), l.geo(D, y(C.iron)));
    }
    const A = new s0(l.build(), k);
    ((A.name = "city3_tank"), w.add(A));
    const F = [b, i + r.legs + r.h / 2, p],
      E = 5.2,
      K = 0.15,
      L = (W, D) => {
        if (W <= K)
          return ((D[0] = F[0]), (D[1] = F[1]), (D[2] = F[2]), (D[3] = 0), D);
        const G = W - K;
        let a0 = F[0] + r.vx * G,
          o0 = F[1] + r.vy * G - 4.9 * G * G;
        const p0 = F[2] - 1.2 * G,
          b0 = 1036 + r.r + 0.3;
        if (a0 < b0) {
          const P0 = (b0 - F[0]) / r.vx,
            H0 = F[1] + r.vy * P0 - 4.9 * P0 * P0,
            x0 = G - P0;
          ((a0 = b0 + 0.8 * Math.min(x0, 0.5)),
            (o0 = Math.max(r.r + 0.1, H0 - 4.9 * x0 * x0 - 6 * x0)));
        }
        return (
          (o0 = Math.max(r.r + 0.15, o0)),
          (D[0] = a0),
          (D[1] = o0),
          (D[2] = p0),
          (D[3] = G),
          D
        );
      },
      q = [0, 0, 0, 0],
      R = (W) => {
        const D = W * E;
        (L(D, q), A.position.set(q[0], q[1], q[2]));
        const G = q[3];
        (A.rotation.set(
          0,
          0,
          Math.min(G * r.spin, 2.2) + (G > 1.2 ? (G - 1.2) * 0.8 : 0),
        ),
          (A.rotation.x = G * 0.35),
          (o.rotation.z = Math.min(1, D / 0.6) * 0.55),
          (o.position.y = i - Math.min(1, D / 0.6) * 0.6));
      };
    (R(0),
      (_.tank = {
        k: 0,
        dur: E,
        set(W) {
          ((_.tank.k = W = Math.max(0, Math.min(1, W))),
            R(W),
            (V.uni.uK.value = W > 0 ? W * E : -1),
            (I.uni.uK.value = W > 0.02 ? W : 0));
        },
        at: (W, D = [0, 0, 0, 0]) => L(W * E, D),
        object: A,
      }));
    const V = Wt(e, c, 26, 6, 3.5, "city3_tank_blast");
    (V.uni.uC.value.set(1068.5, i - 3, p), w.add(V.mesh));
    const H = [];
    for (let W = 0; W < 160; W++)
      H.push([
        [1067 + s(-1, 3), i - s(0, 6), p + s(-6, 6), c()],
        [s(-14, -2), s(-2, 9), s(-5, 5), s(0.15, 0.6)],
      ]);
    const I = ht(e, H, !1, E, "city3_tank_debris");
    (w.add(I.mesh),
      P.push({ name: "tank", dyn: "tank", sphere: { r: r.r * 1.35 } }),
      M(
        b - r.r,
        i,
        p - r.r,
        b + r.r,
        i + r.legs + r.h * 1.2,
        p + r.r,
        "tank stand",
      ),
      g.push(
        { id: "tank_blast", at: [1068, i - 3, p] },
        { id: "tank_fall", at: F },
        { id: "tank_smash", at: [1038.4, 29.1, -352.6] },
      ));
  }
  {
    const r = M0,
      y = Wt(e, c, 48, 9, 5, "city3_impact_fireball");
    (y.uni.uC.value.set(r.x + 4, r.y, r.z), w.add(y.mesh));
    const b = new l0(),
      p = (z) => z0(S, z);
    (b.box(-0.6, -4, -6, 0.2, 4.5, 6.5, p(C.burnt)),
      Y(b, [0.2, 0.6, 1.2], [6.8, 2.6, 3.4], 0.75, p(C.burnt)),
      Y(b, [6.6, 2.5, 3.3], [7.6, 4.4, 3.8], 0.12, p(C.burnt)),
      Y(b, [6.7, 2.6, 3.2], [7, 1, 5.2], 0.25, p(C.burnt)));
    for (let z = 0; z < 9; z++)
      Y(
        b,
        [0.2, s(-3, 3), s(-5, 5)],
        [s(1.2, 3.5), s(-4, 4), s(-6, 6)],
        s(0.08, 0.3),
        p(C.burnt),
      );
    const i = new s0(b.build(), k);
    ((i.name = "city3_impact_wreck"),
      i.position.set(r.x, r.y, r.z),
      (i.visible = !1),
      w.add(i));
    const t = [];
    for (let z = 0; z < 16; z++)
      t.push({
        p: [r.x + s(0.5, 3), r.y + s(-4, 3), r.z + s(-6, 6)],
        w: s(2.5, 5),
        h: s(4, 9),
        i: s(0.9, 1.3),
        seed: c() * 50,
        lean: s(-0.2, 0.6),
      });
    const u = Z0(e, t, "city3_impact_flames");
    ((u.visible = !1), w.add(u));
    const o = [];
    for (let z = 0; z < 220; z++)
      o.push([
        [r.x + s(0, 3), r.y + s(-3, 3), r.z + s(-5, 5), c()],
        [s(2, 18), s(-3, 10), s(-9, 9), s(0.1, 0.7)],
      ]);
    const l = ht(e, o, !1, 4, "city3_impact_debris");
    w.add(l.mesh);
    const f = d.fires.find((z) => z.kind === "impact");
    ((_.impact = {
      k: 0,
      dur: 8,
      set(z) {
        _.impact.k = z = Math.max(0, Math.min(1, z));
        const A = z * 8;
        ((y.uni.uK.value = z > 0 ? A : -1),
          (l.uni.uK.value = z > 0 ? Math.min(1, A / 4) : 0),
          (i.visible = u.visible = z > 0.01),
          f && (f.I = z > 0 ? 40 + 160 * Math.exp(-A * 1.2) : 0),
          e.uFlash.value.set(
            r.x + 6,
            r.y,
            r.z,
            z > 0 ? 9e3 * Math.exp(-A * 3) : 0,
          ));
      },
    }),
      g.push(
        { id: "heli2_explosion", at: [r.x, r.y, r.z] },
        { id: "impact_fire", at: [r.x, r.y, r.z] },
      ));
  }
  {
    const r = ro,
      y = (R) => z0(S, R),
      b = 12.6,
      p = [];
    for (let R = -632; R > -840; R -= 28) p.push(R);
    (p.push(r.z), p.sort((R, V) => V - R));
    for (const R of [r.xw, r.xe]) {
      let V = null;
      for (const H of p)
        if (!(H < -745 && H > -768)) {
          (Y(v, [R, 0, H], [R, b, H], 0.3, y(C.burnt), !0),
            v.box(
              R - 1.1,
              b - 0.9,
              H - 0.07,
              R + 1.1,
              b - 0.75,
              H + 0.07,
              y(C.burnt),
            ));
          for (const I of [-0.95, 0, 0.95])
            v.box(
              R + I - 0.06,
              b - 0.75,
              H - 0.06,
              R + I + 0.06,
              b - 0.45,
              H + 0.06,
              y(C.metal),
            );
          if (Math.abs(H - r.z) < 1) {
            const I = R + (R < 1256 ? -0.55 : 0.55),
              W = new _0(0.42, 0.42, 1.2, 12);
            (W.translate(I, b - 2.6, H), v.geo(W, y(C.metal)));
          }
          if (V != null)
            for (const I of [-0.95, 0.95])
              L0(
                v,
                [R + I, b - 0.45, V],
                [R + I, b - 0.45, H],
                0.45,
                0.025,
                y(C.dark),
                6,
              );
          (N([R, 0, H], [R, b, H], 0.35, "pole"), (V = H));
        }
    }
    const i = [];
    for (const R of r.ys) {
      for (const V of [0, 1]) {
        const H = new l0(),
          I = V ? [r.xe, R, r.z] : [r.xw, R, r.z],
          W = [1256, R - r.sag, r.z];
        L0(
          H,
          [0, 0, 0],
          [W[0] - I[0], W[1] - I[1], 0],
          r.sag * 0.5,
          0.03,
          y(C.dark),
          6,
        );
        const D = new s0(H.build(), k);
        (D.position.set(I[0], I[1], I[2]),
          (D.name = "city3_wire"),
          w.add(D),
          i.push({ mesh: D, half: V, a: I }));
      }
      N([r.xw, R, r.z], [r.xe, R, r.z], 0.03, "power line");
    }
    const t = Dt(
      e,
      c,
      [
        { p: [1256, r.ys[0] - 0.3, r.z], n: 120, speed: 7, up: 1.5, life: 1.2 },
        { p: [r.xw, b - 0.6, r.z], n: 70, speed: 5, up: 1, life: 1.4 },
        { p: [r.xe, b - 0.6, r.z], n: 70, speed: 5, up: 1, life: 1.4 },
        { p: [r.xe + 0.55, b - 2.6, r.z], n: 90, speed: 8, up: 2, life: 1.6 },
      ],
      "city3_wire_sparks",
    );
    w.add(t.mesh);
    const u = d.fires.find((R) => R.kind === "wires");
    ((_.wires = {
      k: 0,
      dur: 1.6,
      set(R) {
        _.wires.k = R = Math.max(0, Math.min(1, R));
        const V = R * 1.6;
        for (const H of i) {
          const I = R > 0 ? Math.min(1.45, V * 2.6) * (H.half ? -1 : 1) : 0;
          H.mesh.rotation.z =
            -I * (H.half ? -1 : 1) * 0 +
            (H.half ? 1 : -1) * Math.min(1.45, V * 2.6) * (R > 0 ? 1 : 0);
        }
        ((t.uni.uK.value = R > 0 ? V : -1),
          u &&
            (u.I =
              R > 0
                ? 90 * Math.exp(-V * 2.5) * (0.6 + 0.4 * Math.sin(V * 40))
                : 0));
      },
    }),
      g.push(
        { id: "wires_snap", at: [1256, 12, r.z] },
        { id: "transformer_blast", at: [r.xe + 0.55, b - 2.6, r.z] },
      ));
    const o = Jt,
      l = o.x,
      f = o.z,
      z = o.roof,
      A = o.roof + o.h,
      F = [
        [0.7, 0],
        [-0.35, 0.61],
        [-0.35, -0.61],
      ];
    for (const [R, V] of F)
      Y(v, [l + R, z, f + V], [l + R, A, f + V], 0.09, y(C.mast));
    for (let R = z; R < A - 0.5; R += 1.5)
      for (let V = 0; V < 3; V++) {
        const [H, I] = F[V],
          [W, D] = F[(V + 1) % 3];
        Y(v, [l + H, R, f + I], [l + W, R + 1.5, f + D], 0.04, y(C.mast));
      }
    for (const [R, V, H] of [
      [-14, -10, z + o.h * 0.5],
      [-14, 12, z + o.h * 0.5],
      [-16, 2, z + o.h * 0.9],
      [4.2, 22, z + o.h * 0.6],
      [4.5, -24, z + o.h * 0.6],
    ])
      (L0(v, [l, H, f], [l + R, z + 0.3, f + V], 0.25, 0.025, y(C.dark), 8),
        N([l, H, f], [l + R, z + 0.3, f + V], 0.05, "mast guy"));
    (v.box(l - 1.5, z, f - 1.5, l + 1.5, z + 0.4, f + 1.5, y(C.concrete)),
      N([l, z, f], [l, A, f], 0.9, "radio mast"));
    const E = [l + 0.4, o.guyY, f],
      K = o.anchor;
    v.box(
      K[0] - 0.05,
      K[1] - 0.4,
      K[2] - 0.25,
      K[0] + 0.25,
      K[1] + 0.4,
      K[2] + 0.25,
      y(C.iron),
    );
    const L = [];
    for (const R of [0, 1]) {
      const V = new l0(),
        H = R ? K : E,
        I = [(E[0] + K[0]) / 2, (E[1] + K[1]) / 2 - 0.1, (E[2] + K[2]) / 2];
      L0(
        V,
        [0, 0, 0],
        [I[0] - H[0], I[1] - H[1], I[2] - H[2]],
        0.05,
        0.035,
        y(C.dark),
        5,
      );
      const W = new s0(V.build(), k);
      (W.position.set(H[0], H[1], H[2]),
        (W.name = "city3_guy"),
        w.add(W),
        L.push({ mesh: W, half: R }));
    }
    N(E, K, 0.03, "the clip wire");
    const q = Dt(
      e,
      c,
      [
        { p: [1256, 14.6, -701.3], n: 90, speed: 9, up: 1, life: 0.9 },
        { p: K, n: 40, speed: 4, up: 0.5, life: 1 },
      ],
      "city3_clip_sparks",
    );
    (w.add(q.mesh),
      (_.clip = {
        k: 0,
        dur: 1.2,
        set(R) {
          _.clip.k = R = Math.max(0, Math.min(1, R));
          const V = R * 1.2;
          for (const H of L) {
            const I = R > 0 ? Math.min(1.6, V * 3.2) : 0;
            ((H.mesh.rotation.z = (H.half ? 1 : -1) * I * 0.7),
              (H.mesh.rotation.x = (H.half ? -1 : 1) * I * 0.4));
          }
          q.uni.uK.value = R > 0 ? V : -1;
        },
        wire: { a: E, b: K },
      }),
      g.push({ id: "clip_snap", at: [1256, 14.6, -701.3] }));
  }
  {
    const r = [],
      y = (l, f) => {
        let z = 30;
        for (const A of d.blds)
          A.kind !== "prop" &&
            A.kind !== "site" &&
            Math.abs(l - A.x) < A.w / 2 &&
            Math.abs(f - A.z) < A.d / 2 &&
            (z = Math.max(z, A.base + A.h + 1.4));
        return z;
      };
    for (let l = 0; l < 120; l++) {
      const f = s(417, 423),
        z = s(-112, -66),
        A = Math.min(y(f - 1, z) + s(0.2, 1.5), 48),
        F = s(10, 18),
        E = s(-5, 6),
        K = s(1.5, 6);
      r.push([
        [f, A, z, c()],
        [F, K, E, s(14, 22)],
      ]);
    }
    const b = new ot(),
      p = new v0();
    (p.setAttribute(
      "position",
      new e0(
        [
          -1, 0, -0.1, 0, 0, 0.35, 0, 0, -0.3, 1, 0, -0.1, 0, 0, -0.3, 0, 0,
          0.35, 0, -0.05, 0.45, 0, -0.05, -0.55, 0.12, -0.05, -0.05,
        ],
        3,
      ),
    ),
      b.setAttribute("position", p.attributes.position));
    const i = new Float32Array(r.length * 4),
      t = new Float32Array(r.length * 4);
    (r.forEach((l, f) => {
      (i.set(l[0], f * 4), t.set(l[1], f * 4));
    }),
      b.setAttribute("aB", new m0(i, 4)),
      b.setAttribute("aB2", new m0(t, 4)),
      (b.instanceCount = r.length));
    const u = { ...e, uK: { value: 0 } },
      o = new s0(
        b,
        r0({ vertexShader: po, fragmentShader: mo, uniforms: u, side: E0 }),
      );
    ((o.name = "city3_birds"),
      (o.frustumCulled = !1),
      w.add(o),
      (_.birds = {
        k: 0,
        dur: 2.6,
        set(l) {
          ((_.birds.k = l = Math.max(0, Math.min(1, l))), (u.uK.value = l));
        },
      }),
      g.push({ id: "birds_flee", at: [421, 34, -30] }));
  }
  {
    const r = n.blds.glass,
      y = r.z + r.d / 2,
      b = [];
    for (let u = 0; u < 900; u++)
      b.push([
        [s(596, 626), s(58, 78), y + s(0.2, 1.5), c()],
        [s(-2, 4), s(-1, 2.5), s(6.5, 11.5), s(0.25, 0.9)],
      ]);
    const p = ht(e, b, !0, 3.2, "city3_glass_rain");
    w.add(p.mesh);
    const i = [];
    for (let u = 0; u < 14; u++)
      i.push({
        p: [s(574, 618), s(64, 78), y + 1.2],
        w: s(3, 5),
        h: s(5, 9),
        i: s(1, 1.4),
        seed: c() * 50,
        lean: s(0, 0.6),
      });
    const t = Z0(e, i, "city3_glass_flames");
    ((t.visible = !1),
      w.add(t),
      (_.glass = {
        k: 0,
        dur: 3.2,
        set(u) {
          ((_.glass.k = u = Math.max(0, Math.min(1, u))),
            (p.uni.uK.value = u),
            (t.visible = u > 0));
        },
      }),
      g.push(
        { id: "glass_burst", at: [596, 72, y] },
        { id: "glass_shards_rain", at: [596, 40, -225] },
      ));
  }
  {
    const r = I0.col,
      y = [];
    for (let A = 0; A < 260; A++) {
      const F = Math.pow(c(), 1.35) * 150 + 2,
        E = r.x + r.lean * F,
        K = r.z - r.lean * 0.35 * F,
        L = r.r0 + r.k * F,
        q = c() * 6.283,
        R = Math.sqrt(c()) * L * 0.75;
      y.push([
        E + Math.cos(q) * R,
        F,
        K + Math.sin(q) * R,
        L * s(0.55, 0.95),
        c(),
        s(0.35, 0.65) * (F < 70 ? 1 : 0.8),
        s(0.6, 1),
        s(-1, 1),
      ]);
    }
    const b = new ot(),
      p = new et(1, 1);
    ((b.index = p.index), b.setAttribute("position", p.attributes.position));
    const i = new Float32Array(y.length * 4),
      t = new Float32Array(y.length * 4);
    (y
      .sort((A, F) => F[1] - A[1])
      .forEach((A, F) => {
        (i.set(A.slice(0, 4), F * 4), t.set(A.slice(4, 8), F * 4));
      }),
      b.setAttribute("aS", new m0(i, 4)),
      b.setAttribute("aS2", new m0(t, 4)),
      (b.instanceCount = y.length));
    const u = { ...e, uOn: { value: 1 } },
      o = new s0(
        b,
        r0({
          vertexShader: lo,
          fragmentShader: fo,
          uniforms: u,
          transparent: !0,
          depthWrite: !1,
          side: E0,
        }),
      );
    ((o.name = "city3_smoke_column"),
      (o.frustumCulled = !1),
      (o.renderOrder = 4),
      w.add(o));
    const l = [];
    for (let A = 0; A < 14; A++)
      l.push({
        p: [I0.x + s(-6, 6), 0.4, I0.z + s(-3.5, 3.5)],
        w: s(4, 7),
        h: s(7, 14),
        i: s(1, 1.4),
        seed: c() * 50,
        lean: s(0.1, 0.8),
      });
    w.add(Z0(e, l, "city3_tanker_flames"));
    const f = {
        uK: { value: 0 },
        uTime: e.uTime,
        uFire: { value: new X(0.045, 0.012, 0.0025) },
      },
      z = new s0(
        new et(2, 2),
        r0({
          vertexShader: ho,
          fragmentShader: uo,
          uniforms: f,
          transparent: !0,
          depthTest: !1,
          depthWrite: !1,
        }),
      );
    ((z.name = "city3_smoke_veil"),
      (z.frustumCulled = !1),
      (z.renderOrder = 999),
      w.add(z),
      (_.smoke = {
        k: 1,
        set(A) {
          ((_.smoke.k = A), (u.uOn.value = A));
        },
        at: Qt,
        veil: f,
      }),
      g.push({ id: "smoke_rush", at: null }));
  }
  {
    const r = n.heli2Path,
      y = [];
    for (let L = 0; L < r.length - 1; L++) {
      const q = r[L],
        R = r[L + 1];
      for (let V = 0; V < 8; V++) {
        const H = V / 8;
        y.push([
          q[0] + (R[0] - q[0]) * H,
          q[1] + (R[1] - q[1]) * H,
          q[2] + (R[2] - q[2]) * H,
          q[3] + (R[3] - q[3]) * H,
        ]);
      }
    }
    y.push(r[r.length - 1]);
    const b = [],
      p = [],
      i = [],
      t = [];
    y.forEach((L, q) => {
      for (const R of [-1, 1])
        (b.push(0, 0, 0), p.push(L[0], L[1], L[2], L[3]), i.push(R));
      if (q < y.length - 1) {
        const R = q * 2;
        t.push(R, R + 1, R + 2, R + 1, R + 3, R + 2);
      }
    });
    const u = new v0();
    (u.setAttribute("position", new e0(b, 3)),
      u.setAttribute("aP", new e0(p, 4)),
      u.setAttribute("aSide", new e0(i, 1)),
      u.setIndex(t));
    const o = { ...e, uHead: { value: -1 } },
      l = new s0(
        u,
        r0({
          vertexShader: zo,
          fragmentShader: Mo,
          uniforms: o,
          transparent: !0,
          depthWrite: !1,
          side: E0,
        }),
      );
    ((l.name = "city3_heli2_trail"),
      (l.frustumCulled = !1),
      (l.renderOrder = 4),
      w.add(l));
    const f = [];
    for (let L = 0; L < 7; L++)
      f.push({
        p: [s(-1.2, 1.2), s(-0.5, 0.8), s(-2.5, 1.5)],
        w: s(1.6, 2.8),
        h: s(2.5, 4.5),
        i: s(1, 1.4),
        seed: c() * 50,
        lean: s(0.2, 0.9),
      });
    const z = Z0(e, f, "city3_heli2_flames");
    ((z.visible = !1), w.add(z));
    const A = f.map((L) => L.p.slice()),
      F = z.userData.attrs.aF,
      E = { x: 0, y: -999, z: 0, I: 0, kind: "heli2", dyn: !0 };
    d.fires.push(E);
    const K = [0, 0, 0];
    ((_.heli2fx = {
      t: -1,
      set(L, q) {
        _.heli2fx.t = L;
        const R = r[0][3],
          V = r[r.length - 1][3],
          H = L >= R && L < V + 0.05;
        if (
          ((z.visible = H),
          (o.uHead.value = L >= R && L < V + 6 ? Math.min(L, V) : -1),
          !H)
        ) {
          E.I = 0;
          return;
        }
        q(L, K);
        for (let I = 0; I < A.length; I++)
          ((F.array[I * 4] = K[0] + A[I][0]),
            (F.array[I * 4 + 1] = K[1] + A[I][1]),
            (F.array[I * 4 + 2] = K[2] + A[I][2]));
        ((F.needsUpdate = !0),
          (E.x = K[0]),
          (E.y = K[1]),
          (E.z = K[2]),
          (E.I = 70));
      },
    }),
      g.push({ id: "heli2_fall", at: "heli2", loop: !0 }));
  }
  const a = new s0(v.build(), x);
  return (
    (a.name = "city3_sites_static"),
    w.add(a),
    { group: w, props: _, solids: P, sounds: g, mats: [x, k] }
  );
}
const Po = 3.1;
function Ao(m, e) {
  const d = [],
    n = [],
    h = (x, k) => (
      (x.userData.noShadowBudget = !0),
      (x.castShadow = !1),
      (x.decay = 2),
      m.add(x),
      { light: x, fire: null, next: null, k: 0, phase: k * 1.7 }
    );
  for (let x = 0; x < 8; x++) {
    const k = new re(16742954, 0, 140, 2);
    ((k.name = "city3_fire_pt" + x), d.push(h(k, x)));
  }
  for (let x = 0; x < 3; x++) {
    const k = new ce(16738850, 0, 220, 0.75, 0.9, 2);
    ((k.name = "city3_fire_spot" + x), m.add(k.target), n.push(h(k, x + 8)));
  }
  const c = [];
  let w = 0;
  const s = (x) => {
    c.length = 0;
    for (const N of e) {
      if (!(N.I > 0)) continue;
      const T = (N.x - x.x) ** 2 + (N.y - x.y) ** 2 + (N.z - x.z) ** 2;
      T > 260 * 260 || c.push([T / N.I, N]);
    }
    c.sort((N, T) => N[0] - T[0]);
    const k = c.slice(0, 11).map((N) => N[1]),
      _ = k
        .slice()
        .sort((N, T) => T.I - N.I)
        .slice(0, 3),
      g = k.filter((N) => !_.includes(N)).slice(0, 8),
      M = (N, T) => {
        const S = T.filter((v) => !N.some((a) => a.fire === v));
        for (const v of N)
          T.includes(v.fire) ? (v.next = v.fire) : (v.next = S.shift() || null);
      };
    (M(d, g), M(n, _));
  };
  return {
    points: d,
    spots: n,
    update(x, k, P) {
      w++ % 8 === 0 && s(P);
      for (const _ of [...d, ...n]) {
        _.next !== _.fire
          ? ((_.k = Math.max(0, _.k - x / 0.35)),
            _.k === 0 && (_.fire = _.next))
          : _.fire && (_.k = Math.min(1, _.k + x / 0.5));
        const g = _.fire,
          M = _.light;
        if (!g) {
          M.intensity = 0;
          continue;
        }
        const N =
          0.78 +
          0.14 * Math.sin(k * 7.3 + _.phase) +
          0.08 * Math.sin(k * 13.1 + _.phase * 2.1);
        if (
          ((M.intensity = g.I * Po * N * _.k * (M.isSpotLight ? 1.6 : 1)),
          M.isSpotLight)
        ) {
          const T = P.x - g.x,
            S = P.y - g.y,
            v = P.z - g.z,
            a = Math.hypot(T, S, v) || 1;
          (M.position.set(
            g.x - (T / a) * 2,
            g.y - (S / a) * 2,
            g.z - (v / a) * 2,
          ),
            M.target.position.set(P.x, P.y, P.z),
            M.target.updateMatrixWorld());
        } else M.position.set(g.x, g.y, g.z);
      }
    },
  };
}
const dt = new X(),
  Kt = new X();
function _o(m, e) {
  if (!e || !(e.intensity > 0)) {
    m.uSLCol.value.set(0, 0, 0);
    return;
  }
  (e.getWorldPosition(dt),
    e.target.getWorldPosition(Kt),
    m.uSLPos.value.copy(dt),
    m.uSLDir.value.copy(Kt).sub(dt).normalize(),
    m.uSLCos.value.set(
      Math.cos(e.angle),
      Math.cos(e.angle * (1 - (e.penumbra || 0) * 0.9)),
    ),
    m.uSLCol.value
      .set(e.color.r, e.color.g, e.color.b)
      .multiplyScalar(e.intensity / Math.PI));
}
const ut = [
    [
      "birds",
      9.6,
      2.6,
      "props.birds.set(0..1) over 2.6 s: a flock bursts off the corner roof on the left and crosses ahead; birds_flee",
    ],
    [
      "crane",
      14.4,
      4.4,
      "props.crane.set(0..1) over 4.4 s: the jib swings across the turn, over the rotor at t ~17.4; crane_groan (the mast top), crane_pass",
    ],
    [
      "glass",
      20.4,
      3.2,
      "props.glass.set(0..1) over 3.2 s: the burning tower on the left bursts its windows, glass rains across Grand Street; glass_burst, glass_shards_rain; heli.crack(0.08) at ~22.6 (a shard hits)",
    ],
    [
      "gap",
      24.5,
      1.6,
      "the slot between the twin towers (x 668..727): level, 2 m each side; gap_whoosh",
    ],
    [
      "smoke",
      29.6,
      1.6,
      "into the tanker's smoke column: blind ~1.4 s (the city draws the veil itself); smoke_rush; heli.warn(['MASTER CAUTION'])",
    ],
    [
      "climb",
      31.2,
      6.4,
      "out of the smoke at the tower's face: the flare and the climb up the glass (8.5 m off it) to t 37.6; engine strain; low-rotor horn (the helicopter's)",
    ],
    [
      "tank",
      45.6,
      5.2,
      "props.tank.set(0..1) over 5.2 s: a blast on the roof of the building on the right throws its water tank across the avenue; it crosses ahead at t ~47.3, passes under the chin by t ~48.2, smashes into the west facade at 48.8 and drops to the street (~50.6); tank_blast, tank_fall, tank_smash",
    ],
    [
      "heli2",
      46,
      4.3,
      "the army helicopter (flight.heli2: place it, smoke(1), spin it) crosses ahead right to left and hits the building on the left at t 50.3; heli2_fall (on it)",
    ],
    [
      "impact",
      50.3,
      8,
      "props.impact.set(0..1) over 8 s at the hit: the fireball, the flash, the wreck in the facade, the fire; heli2_explosion, impact_fire; hide the army helicopter; shake",
    ],
    [
      "highway",
      52.4,
      1.6,
      "under the elevated highway (the girders 2.2 m over the rotor); deck_whoosh",
    ],
    [
      "bridge",
      58.9,
      1.2,
      "under the bridge (the girders 3 m over the rotor, a pier 4 m off the rotor's right tip); bridge_whoosh",
    ],
    [
      "wires",
      67.85,
      1.6,
      "props.wires.set(0..1) over 1.6 s: the skids snap the power lines (sparks, a transformer blows); wires_snap, transformer_blast; heli.sparks(the skid); heli.warn(['MASTER CAUTION', 'ENG 1 FIRE'])",
    ],
    [
      "clip",
      69.55,
      1.2,
      "props.clip.set(0..1) over 1.2 s: the radio mast's guy wire takes the tail rotor; clip_snap; heli.breakTail(), warn TAIL ROTOR, the spin begins (the owner's)",
    ],
    ["crash", 73.86, 0, "the impact in the street: black"],
  ],
  pt = [
    [
      9.6,
      "birds_flee",
      [421, 34, -30],
      1,
      14,
      "a flock of pigeons bursting off a roof: wings clattering, calls",
    ],
    [
      14.4,
      "crane_groan",
      [494, 43.6, -179],
      1,
      22,
      "a tower crane's steel groaning and its slewing ring grinding as the jib swings loose",
    ],
    [
      16.9,
      "crane_pass",
      null,
      0.9,
      0,
      "the jib sweeping over the rotor: a deep steel whoosh, a cable's twang",
    ],
    [
      20.4,
      "glass_burst",
      [596, 72, -243],
      1,
      26,
      "a burning tower's windows bursting from the heat: a deep thump, a cascade of breaking glass",
    ],
    [
      21.2,
      "glass_shards_rain",
      [596, 40, -225],
      1,
      14,
      "the glass raining down onto the street (the existing clip)",
    ],
    [
      24.5,
      "gap_whoosh",
      null,
      0.9,
      0,
      "the rotor's slap thrown back by the twin towers' walls: a fast rising and falling roar",
    ],
    [
      29.6,
      "smoke_rush",
      null,
      1,
      0,
      "into the smoke: a rush of hot wind, the fire's roar below, grit on the glass",
    ],
    [
      45.6,
      "tank_blast",
      [1068, 55, -349],
      1,
      30,
      "an explosion on a roof: a sharp blast, debris",
    ],
    [
      45.75,
      "tank_fall",
      [1071.5, 64.5, -349],
      1,
      18,
      "a wooden water tank torn off its stand: staves creaking, water sloshing out, its tumble",
    ],
    [
      48.77,
      "tank_smash",
      [1038.4, 29.1, -352.6],
      1,
      30,
      "the tank smashing into a facade: a huge wooden crash, a burst of water, masonry falling",
    ],
    [
      50.3,
      "heli2_explosion",
      [M0.x, M0.y, M0.z],
      1,
      60,
      "a helicopter hitting a building and exploding: a huge blast, tearing metal, glass, a fireball's roar",
    ],
    [
      50.6,
      "impact_fire",
      [M0.x, M0.y, M0.z],
      0.8,
      30,
      "the fuel fire flaring up after the blast: a 4-5 s roar settling into crackle",
    ],
    [
      52.4,
      "deck_whoosh",
      null,
      0.9,
      0,
      "under the elevated highway: the rotor noise slammed back off the deck, a deep boom",
    ],
    [
      58.9,
      "bridge_whoosh",
      null,
      0.9,
      0,
      "under the bridge: the rotor's echo off the girders, a short hollow roar",
    ],
    [
      67.85,
      "wires_snap",
      [1256, 12, -667],
      1,
      15,
      "power lines snapping on the skids: twangs, a whip, crackling sparks",
    ],
    [
      67.95,
      "transformer_blast",
      [1264.95, 10, -667],
      1,
      25,
      "a pole transformer blowing: a bang, an electric zap and buzz, a shower of sparks",
    ],
    [
      69.55,
      "clip_snap",
      [1256, 14.6, -701.3],
      1,
      12,
      "a guy wire striking the tail rotor: a violent metallic bang, a shriek of tearing metal",
    ],
  ],
  mt = [
    [
      46,
      50.3,
      "heli2_fall",
      "heli2",
      1,
      30,
      "a stricken helicopter going down (loop): its rotor's ragged thud, a dying turbine's whine, an alarm",
    ],
  ],
  zt = [
    [1262, 96, -520, 46],
    [1222, 84, -494, 46.8],
    [1182, 70, -470, 47.6],
    [1143, 57, -452, 48.4],
    [1105, 45, -440, 49.1],
    [1071, 34.5, -434, 49.7],
    [M0.x + 5.5, M0.y + 0.5, M0.z, 50.3],
  ];
function So(m, e, d = null) {
  const n = [];
  for (let v = m.t0; v <= m.t1 + 1e-6; v += 0.1) {
    const a = m.pos(v);
    n.push([
      +a[0].toFixed(3),
      +a[1].toFixed(3),
      +a[2].toFixed(3),
      +v.toFixed(2),
    ]);
  }
  const h = m.pos(m.t1);
  n[n.length - 1][3] < m.t1 - 0.001 &&
    n.push([
      +h[0].toFixed(3),
      +h[1].toFixed(3),
      +h[2].toFixed(3),
      +m.t1.toFixed(2),
    ]);
  const c = ut.map(([v, a, r, y]) => ({ t: a, name: v, dur: r, note: y })),
    w = m.t1,
    s = m.pos(w),
    x = {
      t: +w.toFixed(2),
      at: s.map((v) => +v.toFixed(2)),
      heading: +m.heading(w).toFixed(3),
      clipT: 69.55,
      street: "the old street (x 1256), at its crossing with z -756",
    },
    k = (v, a = [0, 0, 0]) => {
      const r = zt;
      if (v <= r[0][3])
        return ((a[0] = r[0][0]), (a[1] = r[0][1]), (a[2] = r[0][2]), a);
      for (let b = 1; b < r.length; b++)
        if (v <= r[b][3]) {
          const p = r[b - 1],
            i = r[b],
            t = (v - p[3]) / (i[3] - p[3]);
          return (
            (a[0] = p[0] + (i[0] - p[0]) * t),
            (a[1] = p[1] + (i[1] - p[1]) * t),
            (a[2] = p[2] + (i[2] - p[2]) * t),
            a
          );
        }
      const y = r[r.length - 1];
      return ((a[0] = y[0]), (a[1] = y[1]), (a[2] = y[2]), a);
    },
    P = (v, a) => {
      const r = ut.find((y) => y[0] === v);
      return r
        ? r[2] > 0
          ? Math.max(0, Math.min(1, (a - r[1]) / r[2]))
          : a >= r[1]
            ? 1
            : 0
        : 0;
    };
  let _ = null,
    g = !1;
  const M = new Map(),
    N = [0, 0, 0],
    T = (v) => {
      const a = d;
      if (!a || !a.ctx) return;
      if (!g) {
        g = !0;
        for (const b of new Set([
          ...pt.map((p) => p[1]),
          ...mt.map((p) => p[2]),
        ]))
          a.buffer(b);
      }
      const r = _ != null && v > _ && v - _ < 0.5;
      if (r)
        for (const [b, p, i, t, u] of pt)
          b > _ &&
            b <= v &&
            a.play(
              p,
              i
                ? { pos: i, vol: t, ref: u, rolloff: 1, reverb: 0.2 }
                : { vol: t, reverb: 0.1 },
            );
      const y = a.ctx.currentTime;
      for (const b of mt) {
        const [p, i, t, u, o, l] = b;
        let f = M.get(b);
        const z = r && v >= p && v < i;
        if (
          (z &&
            !f &&
            a.buffers.get(t) &&
            ((f = a.play(t, {
              loop: !0,
              vol: 0,
              pos: u === "heli2" ? k(v, N) : u,
              ref: l,
              rolloff: 1,
              reverb: 0.15,
            })),
            f && M.set(b, f)),
          !f)
        )
          continue;
        if (!z) {
          (f.stop(0.4), M.delete(b));
          continue;
        }
        u === "heli2" &&
          f.panner &&
          (k(v, N),
          f.panner.positionX.setTargetAtTime(N[0], y, 0.05),
          f.panner.positionY.setTargetAtTime(N[1], y, 0.05),
          f.panner.positionZ.setTargetAtTime(N[2], y, 0.05));
        const A = f.gain.gain,
          F = f.source.buffer?._norm ?? 1;
        (A.cancelScheduledValues(y),
          A.setTargetAtTime(o * F, y, 0.15),
          A.setTargetAtTime(0, y + 0.5, 0.3));
      }
    },
    S = (v, a = {}) => {
      for (const r of [
        "birds",
        "crane",
        "glass",
        "tank",
        "impact",
        "wires",
        "clip",
      ])
        e[r]?.set(P(r, v));
      (e.heli2fx?.set(v, k), a.sound !== !1 && T(v), (_ = v));
    };
  return {
    line: n,
    events: c,
    heli2: zt.map((v) => v.slice()),
    crash: x,
    FRAME: $t,
    PARKED_YAW: Xt,
    moments: Me,
    duration: +m.t1.toFixed(2),
    at: (v, a) => m.pos(v, a),
    attitude: (v, a) => m.attitude(v, a),
    points: (v) => Yt(m, v),
    heli2At: k,
    kOf: P,
    drive: S,
    schedule: ut,
    sounds: pt,
    loops: mt,
  };
}
const Fo = (m, e) => m + 32768 * e;
function $0(m, e, d, n, h, c, w) {
  const s = (n + h) / 2,
    x = (e + d) / 2,
    k = w ? (d - e) / 2 : (h - n) / 2,
    P = (g, M) => (w ? [J.road, g - x, M, k + 4] : [J.road, M - s, g, k + 4]);
  m.p.push(e, c, h, d, c, h, d, c, n, e, c, n);
  for (let g = 0; g < 4; g++) m.n.push(0, 1, 0);
  m.g.push(...P(e, h), ...P(d, h), ...P(d, n), ...P(e, n));
  const _ = m.p.length / 3 - 4;
  m.i.push(_, _ + 1, _ + 2, _, _ + 2, _ + 3);
}
function Co(m, e, d, n, h, c, w) {
  const s = new T0();
  s.name = "city3_structures";
  const x = (v, a) => v + (a - v) * c(),
    k = W0(e, n, 2),
    P = [],
    _ = [],
    g = [],
    M = (v) => Fo(w, v),
    N = new Map(),
    T = (v) => {
      const a = Math.floor(v / 360);
      return N.get(a) || N.set(a, new l0()).get(a);
    },
    S = { p: [], n: [], g: [], i: [] };
  {
    const v = wt,
      a = (v.z0 + v.z1) / 2,
      r = v.bottom,
      y = v.top,
      b = y - v.deck;
    for (let p = v.x0; p < v.x1 - 0.1; p += 120) {
      const i = Math.min(v.x1, p + 120),
        t = T(p + 60);
      ($0(S, p, i, v.z0, v.z1, y, !1),
        t.box(p, b, v.z0, i, y - 0.01, v.z1, M(C.concrete)));
      for (const u of [-493.5, -488.8, -484, -479.2, -476])
        t.box(p, r, u - 0.25, i, b, u + 0.25, M(C.bridge));
      for (let u = p; u < i; u += 8)
        t.box(
          u - 0.12,
          r + 0.4,
          v.z0 + 1.2,
          u + 0.12,
          b,
          v.z1 - 1.2,
          M(C.bridge),
        );
      (t.box(p, y, v.z0, i, y + 1.05, v.z0 + 0.45, M(C.concrete)),
        t.box(p, y, v.z1 - 0.45, i, y + 1.05, v.z1, M(C.concrete)),
        t.box(p, y, a - 0.3, i, y + 0.9, a + 0.3, M(C.concrete)),
        t.box(p, r - 0.1, v.z0 - 0.1, i, y + 0.05, v.z0 + 0.05, M(C.concrete)),
        t.box(p, r - 0.1, v.z1 - 0.05, i, y + 0.05, v.z1 + 0.1, M(C.concrete)));
    }
    for (
      let p =
        v.pierX0 - Math.floor((v.pierX0 - v.x0) / v.pierStep) * v.pierStep;
      p < v.x1;
      p += v.pierStep
    ) {
      const i = T(p);
      (i.box(p - 1.1, 0.15, a - 1.1, p + 1.1, r - 1, a + 1.1, M(C.concrete)),
        i.box(
          p - 1.3,
          r - 1,
          v.z0 + 0.8,
          p + 1.3,
          r,
          v.z1 - 0.8,
          M(C.concrete),
        ),
        P.push({
          box: [p - 1.1, 0, a - 1.1, p + 1.1, r, a + 1.1],
          name: "highway pier",
        }));
    }
    P.push({ box: [v.x0, r, v.z0, v.x1, y + 1.1, v.z1], name: "highway deck" });
    for (let p = v.x0 + 20; p < v.x1; p += 42) {
      const i = T(p);
      Y(i, [p, y + 0.9, a], [p, y + 10.5, a], 0.22, M(C.lamp), !0);
      for (const u of [-1, 1])
        (Y(i, [p, y + 10.3, a], [p, y + 10.6, a + u * 2.2], 0.12, M(C.lamp)),
          i.box(
            p - 0.3,
            y + 10.25,
            a + u * 2.2 - 0.5,
            p + 0.3,
            y + 10.5,
            a + u * 2.2 + 0.5,
            M(C.lamp),
          ));
      const t = c() < 0.3;
      for (const u of [-1, 1])
        g.push({
          x: p,
          y: y + 10.1,
          z: a + u * 2.2,
          on: t,
          ax: 0,
          az: 0,
          flick: c() < 0.2,
        });
    }
    for (let p = v.x0 + 30; p < v.x1; p += x(9, 26)) {
      if (Math.abs(p - 1052) < 30) continue;
      const i = Math.floor(c() * 4),
        t = v.z0 + 2.6 + i * 4.6 + (i > 1 ? 1.4 : 0),
        u = x(4.2, 5.2),
        o = T(p),
        l = c() < 0.18,
        f = l ? C.burnt : C.container;
      (o.box(p - u / 2, y + 0.25, t - 0.9, p + u / 2, y + 1, t + 0.9, M(f)),
        o.box(
          p - u * 0.25,
          y + 1,
          t - 0.8,
          p + u * 0.2,
          y + 1.5,
          t + 0.8,
          M(l ? C.burnt : C.glassRail),
        ),
        l && c() < 0.4 && _.push({ x: p, y: y + 2, z: t, I: 30, kind: "car" }));
    }
  }
  for (const v of Ot) {
    const a = v.x - v.w / 2,
      r = v.x + v.w / 2,
      y = $.z1 + 4,
      b = $.z0 - 4,
      p = T(v.x);
    if (v.kind === "girder") {
      const t = 0.09999999999999998,
        u = -1.5;
      ($0(S, a + 3, r - 3, b, y, 0.6, !0),
        p.box(a, t, b, r, 0.6 - 0.01, y, M(C.concrete)),
        p.box(a, 0.6, b, a + 3, 0.6 + 0.18, y, M(C.concrete)),
        p.box(r - 3, 0.6, b, r, 0.6 + 0.18, y, M(C.concrete)));
      for (const o of [a + 2, a + 8, r - 8, r - 2])
        p.box(o - 0.3, u, b, o + 0.3, t, y, M(C.bridge));
      for (let o = b; o < y; o += 6)
        for (let l = 0; l < 3; l++) {
          const f = [a + 2, a + 8, r - 8][l],
            z = [a + 8, r - 8, r - 2][l];
          (Y(p, [f, u + 0.2, o], [z, t - 0.1, o], 0.12, M(C.bridge)),
            Y(p, [f, t - 0.1, o], [z, u + 0.2, o], 0.12, M(C.bridge)));
        }
      (p.box(a - 0.15, u + 0.3, b, a + 0.1, t, y, M(C.bridge)),
        p.box(r - 0.1, u + 0.3, b, r + 0.15, t, y, M(C.bridge)));
      for (const o of [a + 0.1, r - 0.1]) {
        p.box(o - 0.05, 0.6 + 1.05, b, o + 0.05, 0.6 + 1.15, y, M(C.iron));
        for (let l = b; l < y; l += 2)
          p.box(
            o - 0.04,
            0.6,
            l - 0.04,
            o + 0.04,
            0.6 + 1.1,
            l + 0.04,
            M(C.iron),
          );
      }
      for (let o = b + 10; o < y; o += 27)
        for (const l of [-1, 1]) {
          const f = v.x + l * (v.w / 2 - 0.6);
          (Y(p, [f, 0.6, o], [f, 0.6 + 8.5, o], 0.18, M(C.lamp), !0),
            p.box(
              f - l * 1.6 - 0.3,
              0.6 + 8.3,
              o - 0.3,
              f - l * 0.1 + 0.3,
              0.6 + 8.5,
              o + 0.3,
              M(C.lamp),
            ),
            g.push({
              x: f - l * 1.4,
              y: 0.6 + 8.2,
              z: o,
              on: c() < 0.4,
              ax: 0,
              az: 0,
              flick: c() < 0.2,
            }));
        }
      for (const o of v.piers || []) {
        p.box(a - 1, $.bed, o - 1.25, r + 1, u, o + 1.25, M(C.concrete));
        for (const l of [a - 1, r + 1]) {
          const f = new _0(1.25, 1.25, u - $.bed, 12, 1);
          (f.translate(l, (u + $.bed) / 2, o), p.geo(f, M(C.concrete)));
        }
        P.push({
          box: [a - 2.3, $.bed, o - 1.25, r + 2.3, u, o + 1.25],
          name: v.name + " pier",
        });
      }
      if (
        (P.push({
          box: [a - 0.2, u, b, r + 0.2, 0.6 + 1.2, y],
          name: v.name + " deck",
        }),
        v.name === "b2")
      ) {
        p.box(v.x + 1, 0.6 + 0.3, -552, v.x + 3.6, 0.6 + 3.4, -540, M(C.burnt));
        for (let o = b + 8; o < y - 6; o += x(10, 20)) {
          const l = v.x + (c() < 0.5 ? -3.5 : 3.5) + x(-0.5, 0.5);
          Math.abs(o + 546) < 9 ||
            (p.box(
              l - 0.9,
              0.6 + 0.25,
              o - 2.2,
              l + 0.9,
              0.6 + 1,
              o + 2.2,
              M(c() < 0.25 ? C.burnt : C.container),
            ),
            p.box(
              l - 0.8,
              0.6 + 1,
              o - 1,
              l + 0.8,
              0.6 + 1.45,
              o + 0.9,
              M(C.glassRail),
            ));
        }
      }
    } else if (v.kind === "arch") {
      const t = [-537, -573],
        u = -9.5;
      ($0(S, a + 3, r - 3, b, y, 1, !0),
        p.box(a, 1 - 0.6, b, r, 1 - 0.01, y, M(C.trim)),
        p.box(a, 1, b, a + 0.7, 1 + 1.1, y, M(C.trim)),
        p.box(r - 0.7, 1, b, r, 1 + 1.1, y, M(C.trim)));
      const o = [
        [$.z0, t[1] - 3],
        [t[1] + 3, t[0] - 3],
        [t[0] + 3, $.z1],
      ];
      for (const [l, f] of o) {
        const A = (f - l) / 2,
          F = (l + f) / 2,
          E = 1 - 1.4 - u;
        for (let K = 0; K < 14; K++) {
          const L = K / 14,
            q = (K + 1) / 14,
            R = l + (f - l) * L,
            V = l + (f - l) * q,
            H = u + E * Math.sqrt(Math.max(0, 1 - ((R - F) / A) ** 2)),
            I = u + E * Math.sqrt(Math.max(0, 1 - ((V - F) / A) ** 2));
          p.box(a + 0.3, Math.min(H, I), R, r - 0.3, 1 - 0.6, V, M(C.trim));
        }
      }
      for (const l of t)
        p.box(a - 1.5, $.bed, l - 3, r + 1.5, u + 1.5, l + 3, M(C.trim));
      P.push({ box: [a, $.bed, $.z0, r, 1 + 1.1, $.z1], name: v.name });
    } else if (v.kind === "cable") {
      const t = 0.5999999999999999,
        u = ($.z0 + $.z1) / 2,
        o = v.tower;
      ($0(S, a + 2, r - 2, b, y, 2.4, !0),
        p.box(a, t, b, r, 2.4 - 0.01, y, M(C.concrete)),
        p.box(a - 0.3, t - 0.4, b, a + 0.6, 2.4 + 0.9, y, M(C.bridge)),
        p.box(r - 0.6, t - 0.4, b, r + 0.3, 2.4 + 0.9, y, M(C.bridge)));
      for (const l of [-1, 1])
        Y(
          p,
          [v.x + l * (v.w / 2 + 2.5), $.bed, u],
          [v.x + l * 4.5, o, u],
          3.2,
          M(C.concrete),
        );
      (p.box(
        v.x - v.w / 2 - 2,
        t - 3,
        u - 1.6,
        v.x + v.w / 2 + 2,
        t,
        u + 1.6,
        M(C.concrete),
      ),
        p.box(
          v.x - 9,
          o - 22,
          u - 1.4,
          v.x + 9,
          o - 19,
          u + 1.4,
          M(C.concrete),
        ));
      for (const l of [-1, 1])
        for (const f of [-1, 1])
          for (let z = 1; z <= 9; z++) {
            const A = u + f * (6 + z * 5.6),
              F = o - 2 - z * 1.6,
              E = v.x + l * (v.w / 2 - 0.2);
            Y(
              p,
              [v.x + l * 4.6, F, u + f * 0.8],
              [E, 2.4 + 0.6, A],
              0.09,
              M(C.iron),
              !0,
            );
          }
      (P.push(
        { box: [a, t - 3, $.z0, r, 2.4 + 1, $.z1], name: v.name + " deck" },
        {
          box: [v.x - 20, $.bed, u - 2, v.x + 20, o, u + 2],
          name: v.name + " pylon",
        },
      ),
        (d.extraPoints = (d.extraPoints || []).concat([
          [v.x - 4.5, o + 0.8, u],
          [v.x + 4.5, o + 0.8, u],
          [v.x, o - 40, u],
        ])));
    } else {
      const t = 0.20000000000000007,
        u = -2;
      ($0(S, a + 2, r - 2, b, y, 0.8, !0),
        p.box(a, t, b, r, 0.8 - 0.01, y, M(C.concrete)));
      for (const o of [a + 2, v.x, r - 2])
        p.box(o - 0.3, u, b, o + 0.3, t, y, M(C.bridge));
      if (v.kind === "truss")
        for (const o of [a + 0.3, r - 0.3])
          (Y(p, [o, 0.8 + 9, b + 6], [o, 0.8 + 9, y - 6], 0.5, M(C.bridge)),
            J0(
              p,
              [o, 0.8, b],
              [o, 0.8, y],
              [o, 0.8 + 9, b + 6],
              [o, 0.8 + 9, y - 6],
              7,
              0.35,
              M(C.bridge),
            ));
      for (const o of v.piers || [-555])
        p.box(a - 1, $.bed, o - 1.4, r + 1, u, o + 1.4, M(C.concrete));
      P.push({ box: [a, $.bed, $.z0, r, 0.8 + 10, $.z1], name: v.name });
    }
    for (const [i, t] of [
      [$.z1, $.z1 + 4],
      [$.z0 - 4, $.z0],
    ])
      p.box(a, 0, Math.min(i, t), r, 0.2, Math.max(i, t), M(C.concrete));
  }
  for (const [v, a] of N) {
    const r = new s0(a.build(), k);
    ((r.name = "city3_struct_" + v), s.add(r));
  }
  {
    const v = new v0();
    (v.setAttribute("position", new e0(S.p, 3)),
      v.setAttribute("normal", new e0(S.n, 3)),
      v.setAttribute("aG", new e0(S.g, 4)),
      v.setIndex(S.i),
      v.computeBoundingSphere());
    const a = new s0(v, h);
    ((a.name = "city3_decks"), s.add(a));
  }
  return { group: s, solids: P, fires: _, lamps: g };
}
const No = `
attribute float aPart;
attribute vec4 aCar;      // paint rgb (linear), state (0 whole, 1 burnt, 2 police, 3 ambulance, 4 taxi, 5 army)
attribute vec4 aCar2;     // hazards on, phase, dirt, seed
varying vec3 vWorld;
varying vec3 vNw;
varying vec3 vLocal;
flat varying float vPart;
flat varying vec4 vA;
flat varying vec4 vB;
void main() {
  vec4 wp = vec4(position, 1.0);
  vec3 n = normal;
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  n = mat3(instanceMatrix) * n;
#endif
  wp = modelMatrix * wp;
  vWorld = wp.xyz; vNw = normalize(mat3(modelMatrix) * n); vLocal = position; vPart = aPart; vA = aCar; vB = aCar2;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  To = `
varying vec3 vWorld;
varying vec3 vNw;
varying vec3 vLocal;
flat varying float vPart;
flat varying vec4 vA;
flat varying vec4 vB;
${u0}
${g0}
${F0}
void main() {
  vec3 P = vWorld;
  vec3 V = normalize(P - cameraPosition);
  vec3 N = normalize(vNw);
  float part = floor(vPart + 0.5);
  float state = vA.w;
  float burnt = step(0.5, state) * step(state, 1.5);
  float n = c3n(P.xz * 3.1 + P.y * 2.0 + vB.w);
  vec3 alb = vA.rgb;
  float coat = 0.6, rough = 0.35;
  vec3 emit = vec3(0.0);
  if (part < 0.5) {
    // paint: ash and dust on top, grime low
    float dust = smoothstep(0.3, 0.9, N.y) * (0.35 + 0.5 * vB.z);
    alb = mix(alb, vec3(0.13, 0.125, 0.12), dust * 0.6) * (0.85 + 0.25 * n);
    if (state > 2.5 && state < 3.5) alb = mix(alb, vec3(0.30, 0.03, 0.02), step(abs(vLocal.y - 1.05), 0.12));      // the ambulance's band
  } else if (part < 1.5) {
    alb = vec3(0.012, 0.014, 0.016); coat = 1.0; rough = 0.05;
    float crack = step(0.82, fract(vB.w * 7.3)) * step(0.6, c3n(vLocal.xz * 9.0 + vB.w));
    alb += crack * 0.05;
  } else if (part < 2.5) {
    alb = vec3(0.015); coat = 0.05; rough = 0.8;
  } else if (part < 3.5) {
    alb = vec3(0.10); coat = 0.4;
  } else if (part < 4.5) {
    alb = vec3(0.30, 0.30, 0.28); coat = 0.8;
  } else if (part < 5.5) {
    alb = vec3(0.12, 0.01, 0.01); coat = 0.8;
    float haz = vB.x * step(0.5, fract(uTime * 1.4 + vB.y));
    emit = vec3(2.2, 0.75, 0.05) * haz;
  } else if (part < 6.5) {
    float blue = step(0.0, vLocal.x);
    float c = fract(uTime * 1.8 + vB.y + blue * 0.5);
    float on = step(c, 0.25) * (0.6 + 0.4 * step(fract(uTime * 7.2), 0.5)) * step(1.5, state) * step(state, 3.5);
    alb = mix(vec3(0.2, 0.02, 0.02), vec3(0.02, 0.03, 0.2), blue);
    emit = mix(vec3(5.0, 0.3, 0.15), vec3(0.3, 0.6, 6.0), blue) * on;
  } else {
    alb = vec3(0.25, 0.25, 0.24);
  }
  if (burnt > 0.5) {
    float rust = smoothstep(0.35, 0.75, c3n(vLocal.xz * 2.3 + vB.w * 3.0));
    alb = mix(vec3(0.016, 0.014, 0.013), vec3(0.07, 0.03, 0.015), rust) * (0.7 + 0.5 * n);
    if (part > 0.5 && part < 1.5) alb = vec3(0.004);
    coat = 0.02; rough = 0.9; emit *= 0.0;
  }
  vec3 L = cityLight(P, N);
  vec3 col = alb * L + emit;
  float dist = length(P - cameraPosition);
  col += c3skyRefl(V, N, rough) * coat * (part < 1.5 ? 1.0 : 0.6);
  if (dist < 260.0 && coat > 0.3) col += citySpec(P, N, V, mix(30.0, 500.0, 1.0 - rough)) * coat * 0.5;
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
class St {
  constructor() {
    ((this.p = []), (this.n = []), (this.a = []), (this.i = []));
  }
  quad(e, d, n, h, c) {
    const w = [d[0] - e[0], d[1] - e[1], d[2] - e[2]],
      s = [h[0] - e[0], h[1] - e[1], h[2] - e[2]],
      x = w[1] * s[2] - w[2] * s[1],
      k = w[2] * s[0] - w[0] * s[2],
      P = w[0] * s[1] - w[1] * s[0],
      _ = Math.hypot(x, k, P) || 1,
      g = this.p.length / 3;
    this.p.push(...e, ...d, ...n, ...h);
    for (let M = 0; M < 4; M++)
      (this.n.push(x / _, k / _, P / _), this.a.push(c));
    this.i.push(g, g + 1, g + 2, g, g + 2, g + 3);
  }
  box(e, d, n, h, c, w, s, x = { ix: 0, zf: 0, zb: 0 }, k = null) {
    const P = k || {},
      _ = e + x.ix,
      g = d - x.ix,
      M = c + x.zb,
      N = w - x.zf,
      T = {
        a: [e, n, c],
        b: [d, n, c],
        c: [d, n, w],
        d: [e, n, w],
        e: [_, h, M],
        f: [g, h, M],
        g: [g, h, N],
        h: [_, h, N],
      };
    (this.quad(T.e, T.h, T.g, T.f, P.top ?? s),
      this.quad(T.d, T.c, T.g, T.h, P.front ?? s),
      this.quad(T.b, T.a, T.e, T.f, P.back ?? s),
      this.quad(T.c, T.b, T.f, T.g, P.right ?? s),
      this.quad(T.a, T.d, T.h, T.e, P.left ?? s));
  }
  wheel(e, d, n, h) {
    const w = e;
    for (let s = 0; s < 10; s++) {
      const x = (s / 10) * Math.PI * 2,
        k = ((s + 1) / 10) * Math.PI * 2,
        P = [w - h / 2, n + Math.cos(x) * n, d + Math.sin(x) * n],
        _ = [w - h / 2, n + Math.cos(k) * n, d + Math.sin(k) * n],
        g = [w + h / 2, n + Math.cos(x) * n, d + Math.sin(x) * n],
        M = [w + h / 2, n + Math.cos(k) * n, d + Math.sin(k) * n];
      this.quad(P, _, M, g, 2);
    }
    for (const s of [-1, 1]) {
      const x = this.p.length / 3,
        k = w + (s * h) / 2;
      (this.p.push(k, n, d), this.n.push(s, 0, 0), this.a.push(3));
      for (let P = 0; P < 10; P++) {
        const _ = (P / 10) * Math.PI * 2;
        (this.p.push(k, n + Math.cos(_) * n * 0.75, d + Math.sin(_) * n * 0.75),
          this.n.push(s, 0, 0),
          this.a.push(3));
      }
      for (let P = 0; P < 10; P++) {
        const _ = (P + 1) % 10;
        s > 0
          ? this.i.push(x, x + 1 + P, x + 1 + _)
          : this.i.push(x, x + 1 + _, x + 1 + P);
      }
    }
  }
  build() {
    const e = new v0();
    return (
      e.setAttribute("position", new e0(this.p, 3)),
      e.setAttribute("normal", new e0(this.n, 3)),
      e.setAttribute("aPart", new e0(this.a, 1)),
      e.setIndex(this.i),
      e.computeBoundingSphere(),
      e
    );
  }
}
function X0(
  m = 4.6,
  e = 1.8,
  d = 1.45,
  n = { zf: 1.15, zb: 0.55, ix: 0.12 },
  h,
) {
  const c = new St(),
    w = e / 2,
    s = m / 2;
  (c.box(
    -w,
    w,
    0.32,
    0.92,
    -s,
    s,
    0,
    { ix: 0.04, zf: 0.12, zb: 0.08 },
    { front: 3, back: 3 },
  ),
    c.box(-w + 0.08, w - 0.08, 0.92, d, -s + 0.95, s - 1.25, 1, n, { top: 0 }),
    c.box(-w + 0.02, w - 0.02, 0.62, 0.78, s - 0.06, s + 0.01, 4),
    c.box(-w + 0.04, w - 0.04, 0.7, 0.84, -s - 0.01, -s + 0.05, 5));
  for (const x of [s - 0.85, -s + 0.85])
    for (const k of [-1, 1]) c.wheel(k * (w - 0.12), x, 0.33, 0.24);
  return (h && h(c, w, s, d), c.build());
}
function vt(m, e, d, n, h = 0, c) {
  const w = new St(),
    s = e / 2,
    x = m / 2;
  (w.box(-s, s, 0.45, d, -x, x - n, h),
    w.box(-s, s, 0.45, d * 0.62, x - n, x, 0, { ix: 0.05, zf: 0.35, zb: 0 }),
    w.box(-s + 0.08, s - 0.08, d * 0.62, d * 0.88, x - n + 0.1, x - 0.25, 1, {
      ix: 0.04,
      zf: 0.35,
      zb: 0,
    }),
    w.box(-s + 0.05, s - 0.05, 0.75, 0.9, x - 0.05, x + 0.01, 4),
    w.box(-s + 0.05, s - 0.05, 0.6, 0.8, -x - 0.01, -x + 0.04, 5));
  for (const k of [x - 0.9, -x + 1.1])
    for (const P of [-1, 1]) w.wheel(P * (s - 0.15), k, 0.45, 0.3);
  return (c && c(w, s, x, d), w.build());
}
function Ho() {
  const m = new St(),
    e = 1.27,
    d = 6,
    n = 3.05;
  (m.box(-e, e, 0.35, 1.1, -d, d, 0),
    m.box(-e, e, 1.1, 2.4, -d, d, 1),
    m.box(-e, e, 2.4, n, -d, d, 0, { ix: 0.05, zf: 0.1, zb: 0.1 }),
    m.box(-e + 0.05, e - 0.05, 0.6, 0.8, d - 0.04, d + 0.01, 4));
  for (const h of [d - 2.4, -d + 2.6])
    for (const c of [-1, 1]) m.wheel(c * (e - 0.2), h, 0.5, 0.3);
  return m.build();
}
const Ro = {
    sedan: () => X0(),
    hatch: () => X0(4.1, 1.75, 1.5, { zf: 1, zb: 0.15, ix: 0.12 }),
    suv: () => X0(4.8, 1.95, 1.8, { zf: 0.85, zb: 0.12, ix: 0.1 }),
    taxi: () =>
      X0(4.7, 1.8, 1.48, { zf: 1.15, zb: 0.55, ix: 0.12 }, (m, e, d, n) =>
        m.box(-0.35, 0.35, n, n + 0.22, -0.3, 0.3, 7),
      ),
    police: () =>
      X0(4.8, 1.85, 1.48, { zf: 1.15, zb: 0.55, ix: 0.12 }, (m, e, d, n) =>
        m.box(-0.6, 0.6, n, n + 0.14, -0.25, 0.25, 6),
      ),
    van: () =>
      vt(5.3, 2, 2.3, 1.4, 0, (m, e, d, n) =>
        m.box(-0.55, 0.55, n, n + 0.15, d - 1.2, d - 0.9, 6),
      ),
    truck: () => vt(7.6, 2.4, 3.5, 2, 3),
    army: () => vt(7.2, 2.45, 3.2, 2.2, 0),
    bus: () => Ho(),
  },
  Bo = {
    sedan: [4.6, 1.8],
    hatch: [4.1, 1.75],
    suv: [4.8, 1.95],
    taxi: [4.7, 1.8],
    police: [4.8, 1.85],
    van: [5.3, 2],
    truck: [7.6, 2.4],
    army: [7.2, 2.45],
    bus: [12, 2.55],
  },
  Lo = [
    [0.12, 0.12, 0.13],
    [0.3, 0.3, 0.31],
    [0.03, 0.035, 0.04],
    [0.25, 0.02, 0.02],
    [0.02, 0.06, 0.18],
    [0.36, 0.36, 0.34],
    [0.1, 0.12, 0.1],
    [0.2, 0.12, 0.05],
    [0.05, 0.05, 0.06],
    [0.4, 0.4, 0.4],
  ];
function Io(m, e, d, n) {
  const h = new T0();
  h.name = "city3_cars";
  const c = (t, u) => t + (u - t) * n(),
    w = (t) => t[Math.floor(n() * t.length)],
    s = r0({ vertexShader: No, fragmentShader: To, uniforms: { ...e } });
  s.name = "city3_cars";
  const x = [],
    k = [],
    P = [],
    _ = [],
    g = [],
    M = d.corridor,
    N = (t, u) => M.dist(t - 0.5, t + 0.5, u - 0.5, u + 0.5, 400),
    T = (t, u, o, l, f = {}) => {
      M.lowest(t - 3, t + 3, u - 3, u + 3, 9) < 11 ||
        it(t, u, 3) ||
        st(t, u, 3) ||
        x.push({ x: t, z: u, yaw: o, kind: l, ...f });
    },
    S = (t, u) => N(t, u) < 380 || (t > 300 && t < 580 && u > -30 && u < 260);
  for (const t of d.streets.ns) {
    const u = t.hw - (t.hw > 15 ? 5.5 : 4),
      o = Math.max(1, Math.floor(u / 3.3));
    for (let l = t.z0 + 6; l < t.z1 - 6; l += c(5.8, 9.5)) {
      if (!S(t.x, l)) {
        l += 40;
        continue;
      }
      const f = N(t.x, l) < 140;
      if (n() > (f ? 0.62 : 0.28)) continue;
      const z = Math.floor(n() * o * 2) - o,
        A = t.x + (z + 0.5) * 3.3 + c(-0.4, 0.4),
        F = z < 0 ? 0 : Math.PI,
        E = n() < 0.12;
      T(
        A,
        l,
        F + (E ? c(-0.9, 0.9) : c(-0.08, 0.08)),
        w([
          "sedan",
          "sedan",
          "hatch",
          "suv",
          "suv",
          "taxi",
          "van",
          "sedan",
          "truck",
          "police",
        ]),
        { burnt: n() < 0.12 },
      );
    }
    for (const l of [-1, 1])
      for (let f = t.z0 + 10; f < t.z1 - 10; f += c(5.5, 14))
        !S(t.x, f) ||
          n() < 0.35 ||
          T(
            t.x + l * (u - 1.1),
            f,
            l < 0 ? 0 : Math.PI,
            w(["sedan", "hatch", "suv", "van", "taxi"]),
            { burnt: n() < 0.06 },
          );
  }
  for (const t of d.streets.ew) {
    const u = t.hw - (t.hw > 15 ? 5.5 : 4),
      o = Math.max(1, Math.floor(u / 3.3));
    for (let l = t.x0 + 6; l < t.x1 - 6; l += c(5.8, 9.5)) {
      if (!S(l, t.z)) {
        l += 40;
        continue;
      }
      const f = N(l, t.z) < 140;
      if (n() > (f ? 0.62 : 0.28)) continue;
      const z = Math.floor(n() * o * 2) - o,
        A = t.z + (z + 0.5) * 3.3 + c(-0.4, 0.4),
        F = z < 0 ? Math.PI / 2 : -Math.PI / 2,
        E = n() < 0.12;
      T(
        l,
        A,
        F + (E ? c(-0.9, 0.9) : c(-0.08, 0.08)),
        w([
          "sedan",
          "sedan",
          "hatch",
          "suv",
          "suv",
          "taxi",
          "van",
          "sedan",
          "truck",
          "police",
          "army",
        ]),
        { burnt: n() < 0.12 },
      );
    }
    for (const l of [-1, 1])
      for (let f = t.x0 + 10; f < t.x1 - 10; f += c(5.5, 14))
        !S(f, t.z) ||
          n() < 0.35 ||
          T(
            f,
            t.z + l * (u - 1.1),
            l < 0 ? Math.PI / 2 : -Math.PI / 2,
            w(["sedan", "hatch", "suv", "van", "taxi"]),
            { burnt: n() < 0.06 },
          );
  }
  (x.push({ x: 600, z: -218, yaw: 1.2, kind: "bus", burnt: !0 }),
    x.push(
      { x: 455, z: 20, yaw: -1.4, kind: "van", amb: !0 },
      { x: 468, z: 16, yaw: 1.9, kind: "police" },
      { x: 430, z: 22, yaw: 1.62, kind: "police" },
    ));
  const v = new Map(),
    a = {},
    r = new S0(),
    y = new G0(),
    b = new X(0, 1, 0),
    p = new X(),
    i = new X(1, 1, 1);
  for (const t of x) {
    const u =
      t.kind + "|" + Math.floor(t.x / 300) + "," + Math.floor(t.z / 300);
    (v.get(u) || v.set(u, []).get(u)).push(t);
    const o = Bo[t.kind],
      l = t.yaw;
    if (t.burnt && n() < 0.3) {
      for (let f = 0; f < 3; f++)
        P.push({
          p: [t.x + c(-0.8, 0.8), 0.9, t.z + c(-1.2, 1.2)],
          w: c(1.6, 2.6),
          h: c(2, 4),
          i: c(0.9, 1.3),
          seed: n() * 50,
          lean: c(0.1, 0.7),
        });
      k.push({ x: t.x, y: 2.2, z: t.z, I: 34, kind: "car" });
    }
    if (t.kind === "police" || t.amb) {
      const f = n();
      (_.push({
        p: [
          t.x - Math.cos(l) * 0.4,
          t.kind === "van" ? 2.5 : 1.6,
          t.z + Math.sin(l) * 0.4,
        ],
        c: [4, 0.25, 0.15],
        s: 1.4,
        m: [3, f, 1.8, 0],
      }),
        _.push({
          p: [
            t.x + Math.cos(l) * 0.4,
            t.kind === "van" ? 2.5 : 1.6,
            t.z - Math.sin(l) * 0.4,
          ],
          c: [0.3, 0.6, 5],
          s: 1.4,
          m: [3, f, 1.8, 1],
        }));
    }
    g.push({
      box: [
        t.x - o[0] / 2,
        0,
        t.z - o[0] / 2,
        t.x + o[0] / 2,
        3.6,
        t.z + o[0] / 2,
      ],
      name: "car",
    });
  }
  for (const [t, u] of v) {
    const o = t.split("|")[0],
      l = (a[o] ||= Ro[o]()).clone(),
      f = u.length,
      z = new Float32Array(f * 4),
      A = new Float32Array(f * 4),
      F = new Mt(l, s, f);
    (u.forEach((E, K) => {
      (y.setFromAxisAngle(b, E.yaw),
        F.setMatrixAt(K, r.compose(p.set(E.x, 0.02, E.z), y, i)));
      const L =
          E.kind === "taxi"
            ? [0.55, 0.36, 0.02]
            : E.kind === "police"
              ? [0.03, 0.035, 0.05]
              : E.amb
                ? [0.55, 0.55, 0.52]
                : E.kind === "army"
                  ? [0.07, 0.085, 0.045]
                  : E.kind === "bus"
                    ? [0.3, 0.22, 0.04]
                    : w(Lo),
        q = E.burnt
          ? 1
          : E.kind === "police"
            ? 2
            : E.amb
              ? 3
              : E.kind === "taxi"
                ? 4
                : E.kind === "army"
                  ? 5
                  : 0;
      (z.set([...L, q], K * 4),
        A.set([n() < 0.12 ? 1 : 0, n(), n(), n() * 10], K * 4));
    }),
      l.setAttribute("aCar", new m0(z, 4)),
      l.setAttribute("aCar2", new m0(A, 4)),
      (F.instanceMatrix.needsUpdate = !0),
      F.computeBoundingSphere(),
      (F.name = "city3_cars_" + t),
      h.add(F));
  }
  return {
    group: h,
    fires: k,
    flames: P,
    points: _,
    solids: g,
    count: x.length,
  };
}
const Eo = (m, e) => m + 32768 * e,
  qo = `
attribute float aPart;       // 0 trunk / branches, 1 leaves
varying vec3 vWorld;
varying vec3 vNw;
varying float vP;
varying float vSeed;
void main() {
  vec4 wp = vec4(position, 1.0);
  vec3 n = normal;
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp; n = mat3(instanceMatrix) * n;
  vSeed = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.11;
#else
  vSeed = 0.0;
#endif
  vWorld = wp.xyz; vNw = normalize(n); vP = aPart;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Wo = `
varying vec3 vWorld;
varying vec3 vNw;
varying float vP;
varying float vSeed;
${u0}
${g0}
${F0}
void main() {
  vec3 P = vWorld;
  vec3 N = normalize(vNw);
  vec3 V = normalize(P - cameraPosition);
  if (dot(N, V) > 0.0) N = -N;
  float n = c3n(P.xz * 2.7 + P.y * 3.1 + vSeed);
  vec3 alb;
  if (vP < 0.5) alb = vec3(0.035, 0.028, 0.022) * (0.7 + 0.5 * n);
  else {
    // a crown: holes where the leaves are gone (discard), the rest dark olive and rust
    float h = c3n(P.xz * 5.3 + P.y * 4.7 + vSeed * 3.0) * 0.6 + c3n(P.xz * 13.0 - P.y * 11.0) * 0.4;
    if (h < 0.47) discard;
    alb = mix(vec3(0.050, 0.055, 0.025), vec3(0.085, 0.045, 0.018), smoothstep(0.4, 0.7, c3n(P.xz * 1.3 + vSeed))) * (0.7 + 0.6 * n);
  }
  vec3 col = alb * cityLight(P, N);
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function xt(m, e, d) {
  const n = [],
    h = [],
    c = [],
    w = [],
    s = (a, r) => {
      const y = n.length / 3,
        b = a.attributes.position,
        p = a.attributes.normal;
      for (let i = 0; i < b.count; i++)
        (n.push(b.getX(i), b.getY(i), b.getZ(i)),
          h.push(p.getX(i), p.getY(i), p.getZ(i)),
          c.push(r));
      if (a.index)
        for (let i = 0; i < a.index.count; i++) w.push(y + a.index.getX(i));
      else for (let i = 0; i < b.count; i++) w.push(y + i);
      a.dispose();
    },
    x = new X(0, 1, 0),
    k = new X(),
    P = new G0(),
    _ = new S0(),
    g = new X(),
    M = new X(),
    N = (a, r, y, b) => {
      k.set(r[0] - a[0], r[1] - a[1], r[2] - a[2]);
      const p = k.length();
      P.setFromUnitVectors(x, k.normalize());
      const i = new _0(b, y, p, 5, 1, !0);
      (i.applyMatrix4(
        _.compose(
          M.set((a[0] + r[0]) / 2, (a[1] + r[1]) / 2, (a[2] + r[2]) / 2),
          P,
          g.set(1, 1, 1),
        ),
      ),
        s(i, 0));
    },
    T = e * 0.42;
  N([0, 0, 0], [0, T, 0], 0.17, 0.12);
  const S = 4 + Math.floor(m() * 2);
  for (let a = 0; a < S; a++) {
    const r = (a / S) * Math.PI * 2 + m() * 0.6,
      y = e * (0.35 + m() * 0.2),
      b = [Math.cos(r) * y * 0.55, T + y * 0.85, Math.sin(r) * y * 0.55];
    N([0, T * (0.9 + m() * 0.15), 0], b, 0.09, 0.03);
  }
  for (let a = 0; a < d; a++) {
    const r = m() * Math.PI * 2,
      y = e * 0.18 * m(),
      b = new le(e * (0.2 + m() * 0.1), 1);
    (b.scale(1, 0.75, 1),
      b.translate(Math.cos(r) * y, e * (0.68 + m() * 0.18), Math.sin(r) * y),
      s(b, 1));
  }
  const v = new v0();
  return (
    v.setAttribute("position", new e0(n, 3)),
    v.setAttribute("normal", new e0(h, 3)),
    v.setAttribute("aPart", new e0(c, 1)),
    v.setIndex(w),
    v.computeBoundingSphere(),
    v
  );
}
function Do(m, e, d, n, h, c) {
  const w = new T0();
  w.name = "city3_furniture";
  const s = (i, t) => i + (t - i) * c(),
    x = W0(e, n, 2),
    k = r0({
      vertexShader: qo,
      fragmentShader: Wo,
      uniforms: { ...e },
      side: E0,
    }),
    P = (i) => Eo(h, i),
    _ = d.corridor,
    g = [],
    M = [],
    N = (i, t) =>
      _.dist(i - 0.5, i + 0.5, t - 0.5, t + 0.5, 300) < 260 ||
      (i > 300 && i < 580 && t > -40 && t < 260),
    T = (() => {
      const i = new l0();
      return (
        Y(i, [0, 0, 0], [0, 8.4, 0], 0.17, P(C.lamp), !0),
        Y(i, [0, 7.9, 0], [1.5, 8.35, 0], 0.08, P(C.lamp)),
        i.box(1.15, 8.15, -0.18, 1.85, 8.38, 0.18, P(C.lamp)),
        i.box(-0.18, 0, -0.18, 0.18, 0.5, 0.18, P(C.lamp)),
        i.build()
      );
    })(),
    S = (() => {
      const i = new l0();
      (Y(i, [0, 0, 0], [0, 6.2, 0], 0.22, P(C.lamp), !0),
        Y(i, [0, 5.8, 0], [7.5, 6, 0], 0.13, P(C.lamp)));
      for (const t of [3.8, 7])
        i.box(t - 0.17, 4.9, -0.15, t + 0.17, 5.85, 0.15, P(C.lamp));
      return (i.box(-0.17, 2.6, -0.15, 0.17, 3.5, 0.15, P(C.lamp)), i.build());
    })(),
    v = (() => {
      const i = new l0(),
        t = new _0(0.14, 0.17, 0.75, 8);
      return (
        t.translate(0, 0.37, 0),
        i.geo(t, P(C.crane)),
        i.box(-0.22, 0.45, -0.06, 0.22, 0.55, 0.06, P(C.crane)),
        i.build()
      );
    })(),
    a = (() => {
      const i = new l0();
      return (i.box(-0.3, 0, -0.25, 0.3, 1.1, 0.25, P(C.container)), i.build());
    })(),
    r = [xt(c, 8.5, 4), xt(c, 10.5, 5), xt(c, 7.5, 3)],
    y = new Map(),
    b = (i, t, u, o, l, f, z, A = 1) => {
      const F = i + "|" + Math.floor(o / 320) + "," + Math.floor(f / 320);
      (y.has(F) || y.set(F, [t, u, []]),
        y
          .get(F)[2]
          .push(
            new S0().compose(
              new X(o, l, f),
              new G0().setFromAxisAngle(new X(0, 1, 0), z),
              new X(A, A, A),
            ),
          ));
    };
  for (const i of d.lamps) {
    if (i.y > 9 || !N(i.x, i.z) || it(i.x, i.z, 1) || st(i.x, i.z, 1)) continue;
    const t = Math.atan2(-i.az, i.ax);
    (b("lamp", T, x, i.x, 0.15, i.z, t),
      M.push({
        seg: [[i.x, 0, i.z], [i.x, 8.4, i.z], 0.15],
        name: "lamp post",
      }));
  }
  const p = (i, t, u = 9) => _.lowest(i - 1, i + 1, t - 1, t + 1, u) < 16;
  for (const i of d.streets.ns)
    if (!(i.hw < 15 || i.old))
      for (const t of [-1, 1])
        for (let u = i.z0 + 12; u < i.z1 - 12; u += s(8.5, 11)) {
          const o = i.x + t * (i.hw - 2.6);
          !N(o, u) ||
            p(o, u) ||
            c() < 0.15 ||
            (b(
              "tree" + Math.floor(c() * 3),
              null,
              k,
              o,
              0.15,
              u,
              c() * 6.28,
              s(0.85, 1.15),
            ),
            M.push({
              box: [o - 3, 0, u - 3, o + 3, 11.5, u + 3],
              name: "street tree",
            }));
        }
  for (const i of d.streets.ew)
    if (!(i.hw < 15))
      for (const t of [-1, 1])
        for (let u = i.x0 + 12; u < i.x1 - 12; u += s(8.5, 11)) {
          const o = i.z + t * (i.hw - 2.6);
          !N(u, o) ||
            p(u, o) ||
            c() < 0.15 ||
            (b(
              "tree" + Math.floor(c() * 3),
              null,
              k,
              u,
              0.15,
              o,
              c() * 6.28,
              s(0.85, 1.15),
            ),
            M.push({
              box: [u - 3, 0, o - 3, u + 3, 11.5, o + 3],
              name: "street tree",
            }));
        }
  for (const i of d.streets.ns)
    for (const t of d.streets.ew) {
      if (
        !(
          i.x >= t.x0 - i.hw &&
          i.x <= t.x1 + i.hw &&
          t.z >= i.z0 - t.hw &&
          t.z <= i.z1 + t.hw
        ) ||
        !N(i.x, t.z) ||
        c() < 0.25
      )
        continue;
      const u = [
          [i.x - i.hw + 0.8, t.z - t.hw + 0.8, 0],
          [i.x + i.hw - 0.8, t.z + t.hw - 0.8, Math.PI],
        ],
        o = c();
      for (const [l, f, z] of u)
        if (!(p(l, f, 9) || it(l, f, 1.5) || st(l, f, 1.5))) {
          b("signal", S, x, l, 0.15, f, z);
          for (const A of [3.8, 7]) {
            const F = l + Math.cos(z) * A,
              E = f - Math.sin(z) * A;
            g.push({
              p: [F, 5.4, E],
              c: [2.6, 1, 0.05],
              s: 0.9,
              m: [1, o, 0.9, 0],
            });
          }
          M.push(
            { seg: [[l, 0, f], [l, 6.2, f], 0.25], name: "signal" },
            {
              seg: [
                [l, 6, f],
                [l + Math.cos(z) * 7.5, 6, f - Math.sin(z) * 7.5],
                0.6,
              ],
              name: "signal arm",
            },
          );
        }
    }
  for (const i of d.streets.ns)
    for (let t = i.z0 + 20; t < i.z1 - 20; t += s(25, 60)) {
      const u = c() < 0.5 ? -1 : 1,
        o = i.x + u * (i.hw - (i.hw > 15 ? 5.5 : 4) + 0.5);
      N(o, t) &&
        (c() < 0.5
          ? b("hydrant", v, x, o, 0.15, t, 0)
          : b(
              "nbox",
              a,
              x,
              o + u * 0.3,
              0.15,
              t,
              u > 0 ? Math.PI / 2 : -Math.PI / 2,
            ));
    }
  for (const [i, [t, u, o]] of y) {
    const l = t || r[+i.split("|")[0].slice(4)],
      f = new Mt(l, u, o.length);
    (o.forEach((z, A) => f.setMatrixAt(A, z)),
      (f.instanceMatrix.needsUpdate = !0),
      f.computeBoundingSphere(),
      (f.name = "city3_furn_" + i),
      w.add(f));
  }
  return { group: w, points: g, solids: M };
}
function Ko(m, e) {
  const d = Math.max(m[0] - e[0], 0, e[0] - m[3]),
    n = Math.max(m[1] - e[1], 0, e[1] - m[4]),
    h = Math.max(m[2] - e[2], 0, e[2] - m[5]);
  return d === 0 && n === 0 && h === 0
    ? -Math.min(
        e[0] - m[0],
        m[3] - e[0],
        e[1] - m[1],
        m[4] - e[1],
        e[2] - m[2],
        m[5] - e[2],
      )
    : Math.hypot(d, n, h);
}
function Vo(m, e, d, n) {
  const h = e[0] - m[0],
    c = e[1] - m[1],
    w = e[2] - m[2],
    s = h * h + c * c + w * w || 1e-9;
  let x = ((n[0] - m[0]) * h + (n[1] - m[1]) * c + (n[2] - m[2]) * w) / s;
  return (
    (x = x < 0 ? 0 : x > 1 ? 1 : x),
    Math.hypot(n[0] - m[0] - h * x, n[1] - m[1] - c * x, n[2] - m[2] - w * x) -
      d
  );
}
function jo({
  line: m,
  plan: e,
  roofItems: d,
  solids: n,
  flight: h,
  props: c,
}) {
  const s = new Map(),
    x = (t, u) => t * 100003 + u,
    k = (t, u, o, l, f) => {
      for (let z = Math.floor(u / 20); z <= Math.floor(o / 20); z++)
        for (let A = Math.floor(l / 20); A <= Math.floor(f / 20); A++) {
          const F = x(z, A);
          (s.get(F) || s.set(F, []).get(F)).push(t);
        }
    },
    P = (t, u) => {
      k({ box: t, name: u }, t[0], t[3], t[2], t[5]);
    };
  for (const t of e.blds) {
    if (t.kind === "prop" || t.kind === "site" || t.h < 1) continue;
    const u = t.tier === "near" && !t.exempt ? 1.35 : t.exempt ? 0.15 : 0.3,
      o = t.base + t.h + (t.flags & 4 ? 1.45 : 0.2),
      l = (f) => (t.faces & f ? u : 0.05);
    P(
      [
        t.x - t.w / 2 - l(2),
        t.base,
        t.z - t.d / 2 - l(8),
        t.x + t.w / 2 + l(1),
        o,
        t.z + t.d / 2 + l(4),
      ],
      (t.kind || "building") + " " + t.id,
    );
  }
  for (const t of d)
    if (t.type === "hut")
      P(
        [
          t.x - t.w / 2 - 0.2,
          t.y,
          t.z - t.d / 2 - 0.2,
          t.x + t.w / 2 + 0.2,
          t.y + t.h + 0.2,
          t.z + t.d / 2 + 0.2,
        ],
        "stair hut",
      );
    else if (t.type === "tank")
      P(
        [
          t.x - t.r * 1.1,
          t.y,
          t.z - t.r * 1.1,
          t.x + t.r * 1.1,
          t.y + t.legs + t.h * 1.3,
          t.z + t.r * 1.1,
        ],
        "roof tank",
      );
    else if (t.type === "mast") {
      const u = {
        seg: [[t.x, t.y, t.z], [t.x, t.y + t.h, t.z], 0.3],
        name: "antenna",
      };
      k(u, t.x - 1, t.x + 1, t.z - 1, t.z + 1);
    }
  for (const t of n)
    if (t.box) P(t.box, t.name);
    else if (t.seg) {
      const [u, o, l] = t.seg;
      k(
        t,
        Math.min(u[0], o[0]) - l,
        Math.max(u[0], o[0]) + l,
        Math.min(u[2], o[2]) - l,
        Math.max(u[2], o[2]) + l,
      );
    }
  for (const t of e.lamps) {
    if (t.y > 9) continue;
    const u = {
      seg: [
        [t.x - t.ax * 1.4, 0, t.z - t.az * 1.4],
        [t.x - t.ax * 1.4, 8.4, t.z - t.az * 1.4],
        0.12,
      ],
      name: "lamp post",
    };
    k(u, t.x - 2, t.x + 2, t.z - 2, t.z + 2);
  }
  const _ = (t) => {
      if (t[2] > $.z0 && t[2] < $.z1) {
        const u = Math.min(Math.abs(t[2] - $.z0), Math.abs(t[2] - $.z1)),
          o = t[1] - $.water;
        return t[1] > $.parapet
          ? Math.min(o, Math.hypot(u, t[1] - $.parapet))
          : Math.min(o, u);
      }
      return t[1] - 0.15;
    },
    g = h.kOf,
    M = [0, 0, 0, 0],
    N = [0, 0, 0],
    T = (t) => {
      const u = [],
        o = g("crane", t),
        l = o * o * (3 - 2 * o),
        f = f0.th0 + (f0.th1 - f0.th0) * l,
        z = Math.sin(f),
        A = Math.cos(f);
      (u.push({
        obb: {
          cx: f0.x,
          cz: f0.z,
          s: z,
          c: A,
          from: 1.6,
          to: f0.jibLen,
          half: 1.1,
          y0: f0.jibY - 0.4,
          y1: f0.jibY + 2.2,
        },
        name: "crane jib",
      }),
        u.push({
          obb: {
            cx: f0.x,
            cz: f0.z,
            s: z,
            c: A,
            from: -18,
            to: -1.6,
            half: 1.4,
            y0: f0.jibY - 1.3,
            y1: f0.jibY + f0.headH + 0.3,
          },
          name: "crane counter-jib / head",
        }));
      const F = g("tank", t);
      return (
        c.tank &&
          (c.tank.at(F, M),
          u.push({ sphere: [M[0], M[1], M[2], 2.9], name: "the tank" })),
        t > 45.9 &&
          t < 50.4 &&
          (h.heli2At(t, N),
          u.push({
            sphere: [N[0], N[1], N[2], 6.2],
            name: "the army helicopter",
          })),
        u
      );
    },
    S = (t, u) => {
      if (t.sphere)
        return (
          Math.hypot(
            u[0] - t.sphere[0],
            u[1] - t.sphere[1],
            u[2] - t.sphere[2],
          ) - t.sphere[3]
        );
      const o = t.obb,
        l = u[0] - o.cx,
        f = u[2] - o.cz,
        z = l * o.s + f * o.c,
        A = l * o.c - f * o.s,
        F = Math.max(o.from - z, 0, z - o.to),
        E = Math.max(Math.abs(A) - o.half, 0),
        K = Math.max(o.y0 - u[1], 0, u[1] - o.y1);
      return Math.hypot(F, E, K);
    },
    v = (t, u, o = 14) => {
      let l = _(t),
        f = "the ground / water";
      const z = Math.floor((t[0] - o) / 20),
        A = Math.floor((t[0] + o) / 20),
        F = Math.floor((t[2] - o) / 20),
        E = Math.floor((t[2] + o) / 20),
        K = new Set();
      for (let L = z; L <= A; L++)
        for (let q = F; q <= E; q++) {
          const R = s.get(x(L, q));
          if (R)
            for (const V of R) {
              if (K.has(V)) continue;
              K.add(V);
              const H = V.box
                ? Ko(V.box, t)
                : Vo(V.seg[0], V.seg[1], V.seg[2], t);
              H < l && ((l = H), (f = V.name));
            }
        }
      for (const L of u) {
        const q = S(L, t);
        q < l && ((l = q), (f = L.name));
      }
      return [l, f];
    },
    a = m.FRAME,
    r = (t) => {
      const u = [t.rotor];
      for (let o = 0; o < 28; o++) {
        const l = (o / 28) * Math.PI * 2,
          f = Math.cos(l),
          z = Math.sin(l);
        for (const A of [a.rotorR, a.rotorR * 0.55])
          u.push([
            t.rotor[0] + (t.f[0] * f + t.l[0] * z) * A,
            t.rotor[1] + (t.f[1] * f + t.l[1] * z) * A,
            t.rotor[2] + (t.f[2] * f + t.l[2] * z) * A,
          ]);
      }
      return u;
    },
    y = (t) => {
      const u = [];
      for (let o = 0; o < 8; o++) {
        const l = (o / 8) * Math.PI * 2;
        u.push([
          t.tail[0] + (t.f[0] * Math.cos(l) + t.u[0] * Math.sin(l)) * a.tailR,
          t.tail[1] + (t.f[1] * Math.cos(l) + t.u[1] * Math.sin(l)) * a.tailR,
          t.tail[2] + (t.f[2] * Math.cos(l) + t.u[2] * Math.sin(l)) * a.tailR,
        ]);
      }
      return (u.push(t.tail), u);
    },
    b = (t) => {
      const u = [];
      for (const o of [a.noseFwd, 2, 0.6, -0.9, -2.4])
        for (const [l, f] of [
          [0, -0.45],
          [0.95, 0.4],
          [-0.95, 0.4],
          [0, 1.6],
        ])
          u.push(t.at(o, l, f));
      for (const o of [-3.5, -5, -6.5]) u.push(t.at(o, 0, 0.9));
      for (const o of [-1.8, 0, 1.8])
        for (const l of [1.1, -1.1]) u.push(t.at(o, l, -a.skidDown));
      return u;
    },
    p = (t = m.t0, u = m.t1, o = 0.1) => {
      const l = [];
      for (let f = t; f <= u + 1e-6; f += o) {
        const z = Yt(m, f),
          A = T(f),
          F = (E, K = 0) => {
            let L = [1e9, ""];
            for (const q of E) {
              const R = v(q, A);
              R[0] < L[0] && (L = R);
            }
            return ((L[0] -= K), L);
          };
        l.push({
          t: +f.toFixed(2),
          rotor: F(r(z)),
          tail: F(y(z), a.tailR * 0),
          body: F(b(z), a.bodyR * 0),
        });
      }
      return l;
    };
  return {
    sweep: p,
    report: (t) => {
      const u = p(),
        o = {};
      for (const [f, z, A] of t) {
        const F = u.filter((R) => R.t >= z - 1e-6 && R.t <= A + 1e-6),
          E = (R) =>
            F.reduce(
              (V, H) => (H[R][0] < V[0] ? [H[R][0], H[R][1], H.t] : V),
              [1e9, "", 0],
            ),
          K = E("rotor"),
          L = E("tail"),
          q = E("body");
        o[f] = {
          rotor: +K[0].toFixed(2),
          rotorAt: K[2],
          rotorBy: K[1],
          tail: +L[0].toFixed(2),
          tailBy: L[1],
          body: +q[0].toFixed(2),
          bodyAt: q[2],
          bodyBy: q[1],
        };
      }
      const l = (f) =>
        u.reduce(
          (z, A) => (A[f][0] < z[0] ? [A[f][0], A[f][1], A.t] : z),
          [1e9, "", 0],
        );
      return (
        (o.whole = { rotor: l("rotor"), tail: l("tail"), body: l("body") }),
        o
      );
    },
    nearest: v,
    dynamic: T,
  };
}
function Go(m, e, d) {
  const { renderer: n, scene: h, game: c } = m,
    w = new fe(16, 16, { type: he, depthBuffer: !0 });
  ((w.texture.generateMipmaps = !1),
    (w.texture.minFilter = Ht),
    (w.texture.magFilter = Ht));
  const s = new Vt(new Uint8Array([0, 0, 0, 255]), 1, 1);
  ((s.needsUpdate = !0), (e.uMirror.value = s));
  const x = new Gt(),
    k = new X(),
    P = new X(),
    _ = new X(),
    g = new X(),
    M = new X(),
    N = new X(),
    T = new S0(),
    S = new de(),
    v = new N0(),
    a = new N0(),
    r = new S0().set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1,
    ),
    y = { active: null, renders: 0, gain: 1 },
    b = (i) => {
      let t = null,
        u = 1e9;
      for (const o of d) {
        const l = i.position;
        if (
          l.x < o.zone[0] ||
          l.x > o.zone[3] ||
          l.y < o.zone[1] ||
          l.y > o.zone[4] ||
          l.z < o.zone[2] ||
          l.z > o.zone[5]
        )
          continue;
        const f = Math.abs(
          (l.x - o.p[0]) * o.n[0] +
            (l.y - o.p[1]) * o.n[1] +
            (l.z - o.p[2]) * o.n[2],
        );
        f < u && ((u = f), (t = o));
      }
      return t;
    };
  return {
    update: (i) => {
      const t = c.noMirror ? null : b(i);
      if (((y.active = t ? t.name : null), !t)) {
        ((e.uMirrorOn.value = 0), (e.uMirror.value = s));
        return;
      }
      const u = Math.max(16, Math.round((c.post?.size?.x || 1280) * 0.5)),
        o = Math.max(16, Math.round((c.post?.size?.y || 720) * 0.5));
      if (
        ((w.width !== u || w.height !== o) && w.setSize(u, o),
        k.set(t.n[0], t.n[1], t.n[2]),
        P.set(t.p[0], t.p[1], t.p[2]),
        i.updateMatrixWorld(),
        _.setFromMatrixPosition(i.matrixWorld),
        g.subVectors(P, _),
        g.dot(k) > 0)
      ) {
        ((e.uMirrorOn.value = 0), (e.uMirror.value = s));
        return;
      }
      (g.reflect(k).negate().add(P),
        T.extractRotation(i.matrixWorld),
        M.set(0, 0, -1).applyMatrix4(T).add(_),
        N.subVectors(P, M).reflect(k).negate().add(P),
        x.position.copy(g),
        x.up.set(0, 1, 0).applyMatrix4(T).reflect(k),
        x.lookAt(N),
        (x.near = i.near),
        (x.far = i.far),
        (x.fov = i.fov),
        (x.aspect = i.aspect),
        x.updateMatrixWorld(),
        x.projectionMatrix.copy(i.projectionMatrix),
        e.uMirrorMat.value
          .copy(r)
          .multiply(x.projectionMatrix)
          .multiply(x.matrixWorldInverse),
        S.setFromNormalAndCoplanarPoint(k, P).applyMatrix4(
          x.matrixWorldInverse,
        ),
        v.set(S.normal.x, S.normal.y, S.normal.z, S.constant));
      const l = x.projectionMatrix.elements;
      ((a.x = (Math.sign(v.x) + l[8]) / l[0]),
        (a.y = (Math.sign(v.y) + l[9]) / l[5]),
        (a.z = -1),
        (a.w = (1 + l[10]) / l[14]),
        v.multiplyScalar(2 / v.dot(a)),
        (l[2] = v.x),
        (l[6] = v.y),
        (l[10] = v.z + 1 - 0.003),
        (l[14] = v.w),
        x.projectionMatrixInverse.copy(x.projectionMatrix).invert(),
        (e.uMirrorOn.value = 0),
        (e.uMirror.value = s));
      const f = n.getRenderTarget(),
        z = n.autoClear;
      (n.setRenderTarget(w),
        (n.autoClear = !0),
        n.render(h, x),
        n.setRenderTarget(f),
        (n.autoClear = z),
        (e.uMirror.value = w.texture),
        (e.uMirrorOn.value = y.gain),
        e.uMirrorPlane.value.set(
          t.n[0],
          t.n[1],
          t.n[2],
          t.n[0] * t.p[0] + t.n[1] * t.p[1] + t.n[2] * t.p[2],
        ),
        y.renders++);
    },
    state: y,
    rt: w,
  };
}
const Oo = [
    ["lift-off", 0, 9],
    ["birds", 9.6, 12.2],
    ["crane", 14.4, 19.8],
    ["glass", 20.4, 23.6],
    ["gap", 24.2, 26.6],
    ["smoke", 29.2, 31.4],
    ["climb", 31.4, 38.6],
    ["dive", 38.6, 45.4],
    ["tank", 45.4, 49],
    ["heli2", 49, 51.2],
    ["highway", 51.2, 53.8],
    ["river", 53.8, 58.4],
    ["bridge", 58.4, 60.4],
    ["quay", 60.4, 66],
    ["wires", 67.2, 68.6],
    ["clip", 69, 70.2],
  ],
  $o = {
    post: {
      exposure: 1.12,
      bloom: 0.26,
      bloomThreshold: 1.25,
      vignette: 0.42,
      sat: 0.98,
      contrast: 1.07,
    },
    key: [11122902, 0.22],
    keyDir: [-0.85, 0.3, -0.35],
    fill: [9347780, 0.1],
    fillDir: [0.9, 0.25, 0.25],
    hemi: [3425374, 2758672, 0.32],
    env: 0.45,
    envName: "sky",
    fog: [1712432, 0.0035],
    keyBox: 30,
  },
  Xo = {
    post: {
      exposure: 1.22,
      bloom: 0.28,
      bloomThreshold: 1.2,
      vignette: 0.4,
      sat: 1,
      contrast: 1.08,
    },
    key: [11122902, 0.22],
    keyDir: [-0.85, 0.3, -0.35],
    fill: [9676488, 0.14],
    fillDir: [0.9, 0.25, 0.25],
    hemi: [3820134, 3021328, 0.36],
    env: 0.55,
    envName: "sky",
    fog: [1844275, 0.0012],
    keyBox: 26,
  };
async function Jo(m, { rng: e } = {}) {
  const d = performance.now();
  e = e || m.rng(5306);
  const n = new T0();
  n.name = "city";
  const h = ue(),
    c = ze(m, h);
  n.add(c.mesh);
  const w = Pe(),
    s = Se(e, w, io),
    x = co(s, w, m.rng(5307));
  x.heli2Path = zt;
  const k = Be(m, h, s);
  n.add(k.group);
  const P = ko(m, h, s, x, k.texture, m.rng(5308));
  n.add(P.group);
  const _ = Ke(m, h, s);
  n.add(_.group);
  const g = Co(m, h, s, k.texture, _.mat, m.rng(5309), x.blds.prop.id);
  (n.add(g.group), s.lamps.push(...g.lamps), s.fires.push(...g.fires));
  const M = Io(m, h, s, m.rng(5310));
  (n.add(M.group),
    s.fires.push(...M.fires),
    (s.extraFlames = M.flames),
    (s.extraPts = M.points));
  const N = Do(m, h, s, k.texture, x.blds.prop.id, m.rng(5311));
  (n.add(N.group), s.extraPts.push(...N.points));
  const T = to(m, h, s, m.rng(7713));
  n.add(T.group);
  const S = Ao(n, s.fires),
    v = { light: null },
    a = m.audio || m.game?.audio || null,
    r = So(w, P.props, a),
    y = Go(m, h, [
      {
        name: "gap",
        n: [0, 0, 1],
        p: [697, 50, i0.n.z1],
        zone: [600, 8, -236, 735, 80, -208],
      },
      {
        name: "climb",
        n: [-1, 0, 0],
        p: [y0.x0, 50, -222],
        zone: [880, 20, -256, 960, 110, -188],
      },
    ]);
  m.beforeRender((H) => y.update(H));
  const b = s.fires,
    p = s.lamps.filter((H) => H.on),
    i = [],
    t = [];
  let u = 0;
  const o = m.camera || m.game.camera,
    l = () => {
      const H = o.position;
      i.length = 0;
      for (const I of b) {
        const D =
          ((I.x - H.x) ** 2 + (I.y - H.y) ** 2 + (I.z - H.z) ** 2) / I.I;
        i.length < w0
          ? (i.push([D, I]), i.sort((G, a0) => G[0] - a0[0]))
          : D < i[w0 - 1][0] &&
            ((i[w0 - 1] = [D, I]), i.sort((G, a0) => G[0] - a0[0]));
      }
      t.length = 0;
      for (const I of p) {
        const W = (I.x - H.x) ** 2 + (I.z - H.z) ** 2;
        t.length < k0
          ? (t.push([W, I]), t.sort((D, G) => D[0] - G[0]))
          : W < t[k0 - 1][0] &&
            ((t[k0 - 1] = [W, I]), t.sort((D, G) => D[0] - G[0]));
      }
    },
    f = { h: null, asked: !1, on: !0 },
    z = (H) => {
      const I = a;
      if (!I || !I.ctx) return;
      if (!f.h) {
        const b0 = I.buffers.get("fire_loop");
        if (b0 === void 0) {
          f.asked || ((f.asked = !0), I.buffer("fire_loop"));
          return;
        }
        if (
          !b0 ||
          ((f.h = I.play("fire_loop", {
            loop: !0,
            vol: 0,
            pos: [H.x, H.y, H.z],
            ref: 9,
            rolloff: 1,
            bus: "amb",
            reverb: 0.1,
          })),
          !f.h)
        )
          return;
      }
      const W = i[0]?.[1],
        D = f.h,
        G = D.panner,
        a0 = D.gain.gain,
        o0 = I.ctx.currentTime,
        p0 =
          W && f.on && H.y > -3
            ? Math.min(1, W.I / 90) * 0.9 * (D.source.buffer?._norm ?? 1)
            : 0;
      (W &&
        G &&
        (G.positionX.setTargetAtTime(W.x, o0, 0.4),
        G.positionY.setTargetAtTime(W.y, o0, 0.4),
        G.positionZ.setTargetAtTime(W.z, o0, 0.4)),
        a0.cancelScheduledValues(o0),
        a0.setTargetAtTime(p0, o0, 0.5),
        a0.setTargetAtTime(0, o0 + 0.5, 0.3));
    },
    A = [
      (H, I) => {
        ((h.uTime.value = I),
          (h.uPx.value = (m.game.post?.size?.y || 720) / 720),
          u++ % 6 === 0 && l());
        for (let W = 0; W < w0; W++) {
          const D = i[W]?.[1],
            G = h.uFirePos.value[W];
          if (!D) {
            G.w = 0;
            continue;
          }
          const a0 =
            0.8 +
            0.12 * Math.sin(I * 7.3 + W * 1.7) +
            0.08 * Math.sin(I * 13.1 + W * 3.1);
          (G.set(D.x, D.y, D.z, D.I * a0),
            h.uFireCol.value[W].set(1, 0.4, 0.11),
            h.uFireDir.value[W].set(
              D.nx || 0,
              0,
              D.nz || 0,
              D.nx || D.nz ? 0.85 : 0,
            ));
        }
        (S.update(H, I, o.position), z(o.position), _o(h, v.light));
        {
          const W = o.position,
            D = Qt(W.x, W.y, W.z),
            G = P.props.smoke.veil.uK;
          G.value += (Math.min(1, D * 1.15) - G.value) * Math.min(1, H * 9);
        }
        for (let W = 0; W < k0; W++) {
          const D = t[W]?.[1],
            G = h.uLampPos.value[W];
          if (!D) {
            G.w = 0;
            continue;
          }
          const a0 = D.flick
            ? Math.sin(I * 7 + W) + Math.sin(I * 17.3 + W * 3) * 0.7 > -0.3
              ? 1
              : 0.1
            : 1;
          (G.set(D.x + D.ax * 1.4, D.y - 0.3, D.z + D.az * 1.4, 26 * a0),
            h.uLampCol.value[W].set(1, 0.45, 0.12, 1));
        }
      },
    ],
    F = (H, I) =>
      (H > C0.x0 && H < C0.x1 && I > C0.z0 && I < C0.z1) || st(H, I),
    E = (H) => H > $.z0 - 2 && H < $.z1 + 2,
    K = (H, I, W = 0) =>
      F(H, I)
        ? null
        : W > 12 || (E(I) && W > $.bed - 2 && W < 12)
          ? "air"
          : W > -3
            ? "city"
            : null,
    L = (H, I, W = 0) => (F(H, I) || W < -3 ? null : 0),
    q = s.streets.ns
      .filter((H) => H.x > C0.x0 - 220 && H.x < C0.x1 + 220)
      .concat(
        s.streets.ew.filter((H) => H.z > C0.z0 - 220 && H.z < C0.z1 + 220),
      ),
    R = (H, I, W = 0) => {
      if (F(H, I) || W < -3) return null;
      for (const D of q) {
        const G = D.hw > 15 ? 5.5 : 4;
        if (
          D.x !== void 0 &&
          D.z0 !== void 0 &&
          I >= D.z0 &&
          I <= D.z1 &&
          Math.abs(H - D.x) < D.hw
        )
          return Math.abs(H - D.x) < D.hw - G ? "asphalt" : "stone";
        if (
          D.z !== void 0 &&
          D.x0 !== void 0 &&
          H >= D.x0 &&
          H <= D.x1 &&
          Math.abs(I - D.z) < D.hw
        )
          return Math.abs(I - D.z) < D.hw - G ? "asphalt" : "stone";
      }
      return "stone";
    },
    V = () => {
      try {
        const H = new Gt(75, o.aspect || 1.7777777777777777, 0.05, 1500);
        (H.position.set(700, 36, -222),
          H.lookAt(760, 36, -222),
          H.updateMatrixWorld(),
          y.update(H),
          (h.uMirrorOn.value = 0));
      } catch (H) {
        console.warn("[city3 warmUp]", H);
      }
    };
  return (
    console.log(
      `[city3] built in ${(performance.now() - d).toFixed(0)} ms: ${s.blds.length} buildings, ${k.meshes.length} building meshes, ${_.meshes.length} ground meshes, fx ${JSON.stringify(T.counts)}, ${b.length} fires, ${p.length} lit lamps`,
    ),
    {
      group: n,
      colliders: [],
      circles: [],
      anim: A,
      points: {
        liftoff: [452, 0, 92],
        crash: r.crash.at.slice(),
        gap: [697, 35, -222],
        climbFace: [961, 60, -222],
        bridge: [1154, -7, -575],
        wires: [1256, 12, -667],
        mast: [1239.5, 21, -703.5],
      },
      props: {
        ...P.props,
        uniforms: h,
        plan: s,
        line: w,
        sites: P,
        pool: S,
        mirrors: y,
        searchlight(H) {
          v.light = H || null;
        },
        clearance(H = Oo) {
          return jo({
            line: w,
            plan: s,
            roofItems: k.roofItems,
            solids: [...P.solids, ...g.solids, ...M.solids, ...N.solids],
            flight: r,
            props: P.props,
          }).report(H);
        },
        ambience(H = !0) {
          f.on = !!H;
        },
        dawn(H) {
          h.uDawn.value = H;
        },
      },
      zoneAt: K,
      groundAt: L,
      surfaceAt: R,
      navPlans: {},
      looks: { city: $o, air: Xo },
      sky: { mesh: c.mesh, env: c.env, update: c.update, uniforms: h },
      flight: r,
      warmUp: V,
    }
  );
}
export { $o as L, Xo as a, Jo as b, Yt as h };
