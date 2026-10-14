// assets/index-Db-AsSxU 01 — math
// Lines 1-338 of readable/assets/index-Db-AsSxU.pretty.js (statement-aligned).
import {
  x as Fe,
  V as H0,
  C as ze,
  i as l1,
  au as h1,
  av as d1,
  o as Je,
  a2 as _1,
  a4 as q1,
  c as O1,
  f as f1,
  N as m1,
  aw as u1,
  a9 as P1,
  a8 as B1,
  b as mt,
  af as Yt,
  a7 as Gt,
  J as W1,
  B as p1,
  h as Ce,
  Q as Ht,
  E as j1,
  T as b1,
  G as w1,
  aR as K1,
  aS as Ut,
  v as Ft,
  aL as Y1,
  I as G1,
  w as U1,
} from "./index-DaQlAVPp.js";
import {
  B as bt,
  a as $1,
  b as d0,
  N as _t,
  c as g1,
  A as V1,
  d as Z1,
} from "./anim-B86X8yU9.js";
import { S as Hn } from "./anim-B86X8yU9.js";
import {
  s as J1,
  e as b0,
  a as B,
  r as _0,
  b as f0,
  c as K0,
  d as se,
  f as W0,
  g as Q1,
} from "./lightrig-BOum5aAY.js";
const I0 = (e, o = 0, n = 1) => (e < o ? o : e > n ? n : e),
  T0 = (e, o, n) => e + (o - e) * n,
  h = (e, o, n) => {
    const c = I0((n - e) / (o - e));
    return c * c * (3 - 2 * c);
  };
function ot(e = 1) {
  let o = e >>> 0 || 2654435769;
  return function () {
    o = (o + 1831565813) | 0;
    let n = Math.imul(o ^ (o >>> 15), 1 | o);
    return (
      (n = (n + Math.imul(n ^ (n >>> 7), 61 | n)) ^ n),
      ((n ^ (n >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Be(e, o, n) {
  let c = (e * 374761393 + o * 668265263 + n * 1274126177) | 0;
  return (
    (c = Math.imul(c ^ (c >>> 13), 1274126177)),
    (c ^= c >>> 16),
    (c >>> 0) / 4294967296
  );
}
function me(e, o, n) {
  const c = Math.floor(e),
    t = Math.floor(o),
    s = Math.floor(n);
  let i = e - c,
    r = o - t,
    l = n - s;
  ((i = i * i * i * (i * (i * 6 - 15) + 10)),
    (r = r * r * r * (r * (r * 6 - 15) + 10)),
    (l = l * l * l * (l * (l * 6 - 15) + 10)));
  const a = Be(c, t, s),
    u = Be(c + 1, t, s),
    f = Be(c, t + 1, s),
    d = Be(c + 1, t + 1, s),
    v = Be(c, t, s + 1),
    C = Be(c + 1, t, s + 1),
    p = Be(c, t + 1, s + 1),
    F = Be(c + 1, t + 1, s + 1),
    J = a + (u - a) * i,
    n0 = f + (d - f) * i,
    _ = v + (C - v) * i,
    G = p + (F - p) * i,
    y = J + (n0 - J) * r,
    E = _ + (G - _) * r;
  return y + (E - y) * l;
}
function oe(e, o, n, c = 3) {
  let t = 0,
    s = 0.5,
    i = 0;
  for (let r = 0; r < c; r++)
    ((t += me(e, o, n) * s),
      (i += s),
      (e = e * 2.03 + 17.1),
      (o = o * 2.03 + 3.7),
      (n = n * 2.03 + 9.3),
      (s *= 0.5));
  return t / i;
}
const j0 = {
  add: (e, o) => [e[0] + o[0], e[1] + o[1], e[2] + o[2]],
  sub: (e, o) => [e[0] - o[0], e[1] - o[1], e[2] - o[2]],
  mul: (e, o) => [e[0] * o, e[1] * o, e[2] * o],
  dot: (e, o) => e[0] * o[0] + e[1] * o[1] + e[2] * o[2],
  cross: (e, o) => [
    e[1] * o[2] - e[2] * o[1],
    e[2] * o[0] - e[0] * o[2],
    e[0] * o[1] - e[1] * o[0],
  ],
  len: (e) => Math.hypot(e[0], e[1], e[2]),
  norm: (e) => {
    const o = Math.hypot(e[0], e[1], e[2]) || 1;
    return [e[0] / o, e[1] / o, e[2] / o];
  },
  lerp: (e, o, n) => [
    e[0] + (o[0] - e[0]) * n,
    e[1] + (o[1] - e[1]) * n,
    e[2] + (o[2] - e[2]) * n,
  ],
};
function X1(e, o, n, c, t, s, i, r, l) {
  const a = i - c,
    u = r - t,
    f = l - s,
    d = a * a + u * u + f * f;
  let v = d > 0 ? ((e - c) * a + (o - t) * u + (n - s) * f) / d : 0;
  v = v < 0 ? 0 : v > 1 ? 1 : v;
  const C = e - c - a * v,
    p = o - t - u * v,
    F = n - s - f * v;
  return Math.sqrt(C * C + p * p + F * F);
}
function z1(e, o, n) {
  const c = j0.norm(o);
  let t = j0.sub(n, j0.mul(c, j0.dot(n, c)));
  t = j0.norm(t);
  const s = j0.cross(t, c);
  return {
    o: e,
    U: c,
    V: s,
    W: t,
    lx: (i, r, l) => (i - e[0]) * c[0] + (r - e[1]) * c[1] + (l - e[2]) * c[2],
    ly: (i, r, l) => (i - e[0]) * s[0] + (r - e[1]) * s[1] + (l - e[2]) * s[2],
    lz: (i, r, l) => (i - e[0]) * t[0] + (r - e[1]) * t[1] + (l - e[2]) * t[2],
    world: (i, r, l) => [
      e[0] + c[0] * i + s[0] * r + t[0] * l,
      e[1] + c[1] * i + s[1] * r + t[1] * l,
      e[2] + c[2] * i + s[2] * r + t[2] * l,
    ],
  };
}
const ut = () => (typeof performance < "u" ? performance.now() : Date.now()),
  eo = [0.005, 0.012, 0.024, 0.042],
  to = [0.3, 0.3, 0.25, 0.15],
  oo = bt.map((e) => (/L$/.test(e) ? 1 : /R$/.test(e) ? -1 : 0));
function $t(e) {
  const o = bt.map((n0) => [e.segA?.[n0] ?? e.J[n0], e.J[$1[n0]]]),
    n = bt.map((n0) => e.rad[n0] ?? 0.04),
    c = [];
  let t = 0,
    s = 0;
  const i = { parts: {}, ms: 0 },
    r = ut(),
    l = new Float32Array(_t);
  for (const n0 of e.parts) {
    const _ = ut(),
      G = J1(n0.sdf, n0.min, n0.max, n0.res, {
        smooth: n0.smooth ?? 1,
        project: n0.project ?? 0,
      }),
      y = G.positions.length / 3,
      E = new Uint16Array(y * 4),
      c0 = new Float32Array(y * 4),
      u0 = new Float32Array(y),
      q = new Float32Array(y * 4),
      $ = new Float32Array(y),
      x = (n0.bones || []).map((Z) => d0[Z]),
      e0 = n0.sigma ?? 0.022,
      H = G.positions,
      z = G.normals;
    for (let Z = 0; Z < y; Z++) {
      const p0 = H[Z * 3],
        j = H[Z * 3 + 1],
        t0 = H[Z * 3 + 2],
        A = z[Z * 3],
        w = z[Z * 3 + 1],
        Y = z[Z * 3 + 2],
        b = typeof n0.mat == "function" ? n0.mat(p0, j, t0, A, w, Y) : n0.mat;
      ((u0[Z] = b),
        l.fill(0),
        n0.weights ? n0.weights(p0, j, t0, l) : Et(p0, j, t0, x, o, n, e0, l),
        no(l, E, c0, Z * 4));
      {
        let N = 0;
        for (let V = 0; V < 4; V++) {
          const O = eo[V],
            i0 = n0.sdf(p0 + A * O, j + w * O, t0 + Y * O);
          N += (Math.max(0, O - i0) / O) * to[V];
        }
        $[Z] = Math.max(0, Math.min(1, 1 - N * (n0.aoK ?? 1.1)));
      }
      const g = e.col ? e.col(p0, j, t0, b, n0.name, A, w, Y) : null;
      g &&
        ((q[Z * 4] = g[0]),
        (q[Z * 4 + 1] = g[1]),
        (q[Z * 4 + 2] = g[2]),
        (q[Z * 4 + 3] = g[3]));
    }
    (c.push({
      m: G,
      skinIndex: E,
      skinWeight: c0,
      mat: u0,
      col: q,
      ao: $,
      base: t,
    }),
      (t += y),
      (s += G.indices.length),
      (i.parts[n0.name] = {
        verts: y,
        tris: G.indices.length / 3,
        ms: Math.round(ut() - _),
      }));
  }
  const a = new Float32Array(t * 3),
    u = new Float32Array(t * 3),
    f = new Uint16Array(t * 4),
    d = new Float32Array(t * 4),
    v = new Float32Array(t),
    C = new Float32Array(t * 4),
    p = new Float32Array(t),
    F = t > 65535 ? new Uint32Array(s) : new Uint16Array(s);
  let J = 0;
  for (const n0 of c) {
    (a.set(n0.m.positions, n0.base * 3),
      u.set(n0.m.normals, n0.base * 3),
      f.set(n0.skinIndex, n0.base * 4),
      d.set(n0.skinWeight, n0.base * 4),
      v.set(n0.mat, n0.base),
      C.set(n0.col, n0.base * 4),
      p.set(n0.ao, n0.base));
    const _ = n0.m.indices;
    for (let G = 0; G < _.length; G++) F[J + G] = _[G] + n0.base;
    J += _.length;
  }
  return (
    (i.verts = t),
    (i.tris = s / 3),
    (i.ms = Math.round(ut() - r)),
    {
      position: a,
      normal: u,
      index: F,
      skinIndex: f,
      skinWeight: d,
      aMat: v,
      aCol: C,
      aAO: p,
      stats: i,
    }
  );
}
function Et(e, o, n, c, t, s, i, r) {
  let l = 1e9;
  const a = Et._d || (Et._d = new Float32Array(_t));
  for (const u of c) {
    const [f, d] = t[u];
    let v = X1(e, o, n, f[0], f[1], f[2], d[0], d[1], d[2]) - s[u];
    const C = oo[u];
    (C !== 0 && C * e < 0.012 && (v += (0.012 - C * e) * 6),
      (a[u] = v),
      v < l && (l = v));
  }
  for (const u of c) {
    const f = (a[u] - l) / i;
    r[u] = f > 3 ? 0 : Math.exp(-f * f);
  }
}
function no(e, o, n, c) {
  let t = 0;
  for (let s = 0; s < 4; s++) {
    let i = 0,
      r = -1;
    for (let l = 0; l < _t; l++) e[l] > r && ((r = e[l]), (i = l));
    if (r <= 0) {
      ((o[c + s] = 0), (n[c + s] = 0));
      continue;
    }
    ((o[c + s] = i), (n[c + s] = r), (t += r), (e[i] = -1));
  }
  if (t <= 0) {
    n[c] = 1;
    return;
  }
  for (let s = 0; s < 4; s++) n[c + s] /= t;
}
const L = {
    SKIN: 0,
    FACE: 1,
    EYE: 2,
    MOUTH: 3,
    TEETH: 4,
    HAIR: 5,
    CLOTH_A: 6,
    CLOTH_B: 7,
    CLOTH_C: 8,
    SHOE: 9,
    NAIL: 10,
    SOCK: 11,
    BELT: 12,
    WOUND: 13,
    TUBE: 14,
  },
  He = 16,
  Vt = (40 * Math.PI) / 180,
  z0 = (e) => [e * Math.sin(Vt), -Math.cos(Vt), 0],
  G0 = (e, o, n) => [e[0] + o[0] * n, e[1] + o[1] * n, e[2] + o[2] * n];
