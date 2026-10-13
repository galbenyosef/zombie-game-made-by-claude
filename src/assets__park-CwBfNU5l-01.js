// assets__park-CwBfNU5l 01 — kind
// Lines 1-336 of readable/assets__park-CwBfNU5l.pretty.js (statement-aligned).
import { C as W0, d as Jt } from "./plan3-BlRgM2iV.js";
import { m as v0, V as I, t as k0 } from "./common-BYwPbecq.js";
import {
  C as Vt,
  x as ue,
  h as $t,
  c as jt,
  M as u0,
  ae as $e,
  o as gt,
  V as a0,
  Q as C0,
  E as q0,
  b as It,
  f as da,
  g as ua,
  N as fa,
  Y as Se,
  G as P0,
  B as Q0,
  m as y0,
  a2 as Qe,
  a3 as Je,
  ah as xt,
  ak as N,
  $ as z0,
  q as j0,
  a9 as _0,
  a8 as Ie,
  d as _t,
  an as Y0,
  v as ha,
  U as pa,
  X as ma,
  aG as xa,
  aH as Ma,
  ao as Fe,
  I as H0,
  l as he,
  K as U0,
  J as pe,
  p as ge,
  i as oe,
  A as me,
  au as wa,
  av as ba,
  k as va,
  P as Oe,
  n as ya,
  ai as za,
  a6 as ga,
  a5 as ka,
} from "./index-DaQlAVPp.js";
import { a as Be } from "./BufferGeometryUtils-Qxvmd-vM.js";
import { R as Pa } from "./RoundedBoxGeometry-D0zz8qHa.js";
import {
  n as Ke,
  j as Re,
  o as Ue,
  s as Xe,
  u as Ve,
  q as Sa,
} from "./district-BhfbivMT.js";
const R0 = { x0: 424, x1: 436, z0: 196 },
  ke = 0.45,
  c0 = { x: 433, z: 150, r: 4.6, plaza: 12.5 },
  I0 = { x: 400, z: 140.5, r: 5 },
  ta = { x0: 394, x1: 417, z0: 166.5, z1: 185.5 },
  L0 = { x: 411.2, z: 124.6, r: 4.2 },
  m0 = { x0: 418, x1: 490, z0: 64, z1: 125 },
  h0 = { x: W0.pos[0], z: W0.pos[2], half: 11 },
  E0 = { x0: 443.4, x1: 450.4 },
  Ae = { x0: 419, x1: 441, z0: 186.5, z1: 196 },
  ne = { z0: 104.6, z1: 121.4, xs: [440.8, 444.6, 450.6, 454.4] },
  F0 = { x0: 458, x1: 494, z0: 158, z1: 182 },
  Z0 = { x0: 421, x1: 433.5, z0: 126.5, z1: 137.5 },
  Nt = {
    x: 449.12,
    z: 174.88,
    yaw: -2.574,
    tree: [447.6, 171.6],
    breach: [468, 204.6],
  },
  Aa = [
    {
      id: "avenue",
      kind: "asphalt",
      w: 5,
      pts: [
        [430, 195.9],
        [430.1, 189],
        [430.6, 181],
        [431.6, 173],
        [432.6, 166],
        [433.3, 160.5],
      ],
    },
    {
      id: "avenueN",
      kind: "asphalt",
      w: 5,
      pts: [
        [437.4, 140.5],
        [440.1, 134.2],
        [443.2, 128.5],
        [446.1, 123.6],
        [447.2, 120.6],
      ],
    },
    {
      id: "swPath",
      kind: "asphalt",
      w: 3.4,
      pts: [
        [421, 190.6],
        [410, 189.6],
        [397, 190.4],
        [380, 194.2],
        [364, 197],
        [349.4, 197.4],
      ],
    },
    {
      id: "sePath",
      kind: "asphalt",
      w: 3.4,
      pts: [
        [439, 190.6],
        [452, 189.4],
        [470, 190.4],
        [492, 194.4],
        [512, 196.8],
        [530.6, 197.1],
      ],
    },
    {
      id: "crossW",
      kind: "gravel",
      w: 3.6,
      pts: [
        [349.4, 151.2],
        [370, 150.6],
        [388, 151.6],
        [405, 151.4],
        [421.2, 150.5],
      ],
    },
    {
      id: "crossE",
      kind: "gravel",
      w: 3.6,
      pts: [
        [444.8, 150.2],
        [462, 149],
        [484, 147.3],
        [506, 146.7],
        [530.6, 146.9],
      ],
    },
    {
      id: "diagNW",
      kind: "gravel",
      w: 3,
      pts: [
        [424, 142],
        [417.6, 133.6],
        [413.2, 127.6],
        [404.5, 113.5],
        [393.5, 95],
        [384, 75],
        [377, 55],
        [372.5, 38],
        [371, 29.4],
      ],
    },
    {
      id: "north",
      kind: "gravel",
      w: 3,
      pts: [
        [380.6, 67.5],
        [398, 57],
        [425, 52],
        [455, 50.4],
        [485, 52.6],
        [505, 58.2],
        [511.5, 60.6],
      ],
    },
    {
      id: "east",
      kind: "gravel",
      w: 3,
      pts: [
        [484, 147.3],
        [494, 132],
        [501.5, 112],
        [506.5, 88],
        [509.2, 70],
        [511.5, 60.6],
        [514.2, 45],
        [515, 29.4],
      ],
    },
    {
      id: "bandSpur",
      kind: "gravel",
      w: 2.6,
      pts: [
        [401.6, 151.5],
        [401, 147.6],
      ],
    },
    {
      id: "statueW",
      kind: "gravel",
      w: 2.6,
      pts: [
        [407.2, 124.8],
        [396, 127.5],
        [380, 129.5],
        [362, 128.6],
        [349.4, 128.2],
      ],
    },
  ],
  _e = [
    { id: "fountain", x: c0.x, z: c0.z, r: c0.plaza, kind: "setts" },
    { id: "statue", x: L0.x, z: L0.z, r: L0.r, kind: "setts" },
    { id: "bandstand", x: I0.x, z: I0.z, r: I0.r + 2.4, kind: "gravel" },
  ],
  _a = [
    { id: "wS", x: 350, z: 197.4, axis: "x", w: 3.6 },
    { id: "w", x: 350, z: 151.2, axis: "x", w: 4.2 },
    { id: "wN", x: 350, z: 128.2, axis: "x", w: 3 },
    { id: "eS", x: 530, z: 197.1, axis: "x", w: 3.6 },
    { id: "e", x: 530, z: 146.9, axis: "x", w: 4.2 },
    { id: "nW", x: 371, z: 30, axis: "z", w: 3.6 },
    { id: "nE", x: 515, z: 30, axis: "z", w: 3.6 },
  ],
  ea = [430, 194.2],
  aa = [450.8, 93.7],
  Ta = [
    ea,
    [430.2, 186.5],
    [431, 178.5],
    [432.4, 170.5],
    [434.3, 163.4],
    [438.3, 157.4],
    [441.4, 150.6],
    [440.8, 144],
    [439, 138.4],
    [440.9, 132.6],
    [443.8, 127.3],
    [446.5, 122.2],
    [447.4, 115],
    [447.7, 107.5],
    [448.6, 100.6],
    aa,
  ];
function oa(e, a = 0.5) {
  const t = [];
  for (let r = 0; r < e.length - 1; r++) {
    const o = e[Math.max(0, r - 1)],
      n = e[r],
      i = e[r + 1],
      f = e[Math.min(e.length - 1, r + 2)],
      w = Math.hypot(i[0] - n[0], i[1] - n[1]),
      s = Math.max(1, Math.ceil(w / a));
    for (let l = 0; l < s; l++) {
      const u = l / s,
        c = u * u,
        M = c * u,
        h = (v, S, d, y) =>
          0.5 *
          (2 * S +
            (-v + d) * u +
            (2 * v - 5 * S + 4 * d - y) * c +
            (-v + 3 * S - 3 * d + y) * M);
      t.push([h(o[0], n[0], i[0], f[0]), h(o[1], n[1], i[1], f[1])]);
    }
  }
  return (t.push(e[e.length - 1].slice()), t);
}
function Ca(e, a) {
  const t = [e[0].slice()];
  let r = a;
  for (let i = 1; i < e.length; i++) {
    let f = e[i - 1][0],
      w = e[i - 1][1];
    const s = e[i][0],
      l = e[i][1];
    let u = Math.hypot(s - f, l - w);
    for (; u >= r && u > 1e-9;) {
      const c = r / u;
      ((f += (s - f) * c),
        (w += (l - w) * c),
        t.push([f, w]),
        (u -= r),
        (r = a));
    }
    r -= u;
  }
  const o = e[e.length - 1],
    n = t[t.length - 1];
  return (
    Math.hypot(o[0] - n[0], o[1] - n[1]) > a * 0.35
      ? t.push(o.slice())
      : (t[t.length - 1] = o.slice()),
    t
  );
}
const Ia = (e) => {
  let a = 0;
  for (let t = 1; t < e.length; t++)
    a += Math.hypot(e[t][0] - e[t - 1][0], e[t][1] - e[t - 1][1]);
  return a;
};
function se(e, a, t, r, o, n) {
  const i = o - t,
    f = n - r,
    w = i * i + f * f,
    s = w > 0 ? Math.max(0, Math.min(1, ((e - t) * i + (a - r) * f) / w)) : 0;
  return Math.hypot(e - (t + i * s), a - (r + f * s));
}
const N0 = oa(Ta, 0.25),
  T0 = Ca(N0, 3).map(([e, a]) => [+e.toFixed(2), +a.toFixed(2)]);
function G0(e, a) {
  let t = 1e9;
  for (let r = 1; r < N0.length; r++) {
    const o = N0[r - 1],
      n = N0[r];
    t = Math.min(t, se(e, a, o[0], o[1], n[0], n[1]));
  }
  return t;
}
