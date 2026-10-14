// assets__district-BhfbivMT 01 — math
// Lines 1-331 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
import {
  G as P0,
  at as v0,
  c as l0,
  d as D0,
  B as St,
  h as V0,
  x as Wn,
  ah as p0,
  ak as I0,
  M as e0,
  J as Ve,
  b as b0,
  l as Cn,
  p as mn,
  A as bn,
  C as Mt,
  m as ht,
  N as Kt,
  V as ke,
  Q as Nt,
  o as J0,
  $ as nt,
  f as Dt,
  g as Pt,
  aa as Yn,
  a5 as je,
  a9 as ye,
  a6 as at,
  ag as wn,
  ai as Gn,
  E as xn,
  w as on,
  a8 as Ht,
  ab as Hn,
  U as yn,
  X as vn,
  al as gt,
  Y as Mn,
  aw as gn,
  aH as En,
  K as Kn,
  q as At,
  af as Nn,
  a7 as Dn,
} from "./index-DaQlAVPp.js";
const De = { x0: -13, x1: 13, z0: -11, z1: 11 },
  No = { x0: -1.3, x1: 1.3 },
  mt = [
    { side: "west", a: 1.5, b: 5.5 },
    { side: "east", a: -3, b: 1.2 },
  ],
  _e = { x0: -16, x1: 16, z0: 11.4, z1: 40.2 },
  Do = {
    a: { z: 19, x0: -16, x1: 8.85, gap: [8.85, 8.85], truck: [12.25, 19.3] },
    b: {
      z: 31.55,
      x0: -7.3,
      bags0: -5.6,
      x1: 16,
      gap: [-11, -7.3],
      west: [-16, -13.8],
    },
  },
  bt = {
    x0: -7,
    x1: 7,
    z0: 40,
    z1: 62,
    door: { x0: -1.3, x1: 1.3 },
    tower: { x0: -11.5, x1: -6.8, z0: 40, z1: 44.5 },
    back: { x0: 3.6, x1: 4.9, z: 62, h: 2.5 },
  },
  wt = { x0: -9, x1: 9, z0: 62, z1: 77 },
  xt = { x0: -45, x1: 45, z0: 77, z1: 212 },
  Ke = { x0: 2.5, x1: 9.5, z0: 200, z1: 207 },
  Qe = { yard: null, forest: null, house: null },
  xe = {
    alley: { x0: 16, x1: 31, z0: 12.6, z1: 15.4 },
    street: { x0: 31, x1: 39, z0: 5, z1: 46, walk: 1.7 },
    bus: { x0: 31, x1: 39, z0: 30.6, z1: 34.6 },
    shop: {
      x0: 39,
      x1: 46.5,
      z0: 24,
      z1: 32.6,
      t: 0.25,
      door: [26.3, 28.1],
      back: [25.3, 26.7],
      kx: 43.2,
      pass: [29.8, 31.4],
    },
    back: { x0: 46.5, x1: 49.5, z0: 22, z1: 42.6 },
    passage: { x0: 39, x1: 46.5, z0: 39.6, z1: 42.6 },
    lane: { x0: 16, x1: 31, z0: 35.8, z1: 39.6 },
  },
  rn = [
    { x: -5, z: -0.8, rx: 3.5, rz: 2.6, rot: 0.25 },
    { x: 0.7, z: 1, rx: 2.8, rz: 2.1, rot: -0.35 },
  ],
  an = (n, t, e) => {
    const r = Math.cos(n.rot),
      o = Math.sin(n.rot),
      l = t - n.x,
      s = e - n.z,
      c = (l * r + s * o) / n.rx,
      a = (-l * o + s * r) / n.rz;
    return (Math.hypot(c, a) - 1) * Math.min(n.rx, n.rz);
  },
  qn = (n, t, e) => {
    const r = Math.max(e - Math.abs(n - t), 0) / e;
    return Math.min(n, t) - r * r * e * 0.25;
  };
function Rt(n, t) {
  const e = qn(an(rn[0], n, t), an(rn[1], n, t), 1.6),
    r = Math.atan2(t - 0.1, n + 2.2);
  return (
    e +
    0.16 * Math.sin(r * 3 + 1.1) +
    0.09 * Math.sin(r * 7 + 0.4) +
    0.05 * Math.sin(r * 13 + 2)
  );
}
function sn(n, t) {
  const e = -Rt(n, t);
  return e <= 0
    ? 0
    : 0.06 +
        0.72 *
          (1 - Math.exp(-e / 0.9)) *
          (1 - 0.25 * Math.exp(-((n + 2.1) ** 2 + (t - 0.1) ** 2) / 1.2));
}
const dt = -0.12,
  qo = { x0: -9.2, x1: 4, z0: -4.2, z1: 3.9 },
  Oo = { a: [-1.5, -2.45], b: [-3.1, 2.15], w: 1.15, rise: 0.6 },
  Vo = {
    start: [8.4, -7.2, 2.2],
    akane: [2.75, -1.55],
    talk: [4.25, -2.55],
    lantern: [3.25, -2.7],
    cherry: [-3.9, -4.55],
    gate: [0, 11],
    plazaMid: [0, 24],
    churchDoor: [0, 40],
    churchIn: [0, 43.5],
    backDoor: [4.25, 62],
    yardIn: [4.25, 63.4],
    houseDoor: [6, 200],
  };
function On(n, t) {
  if (n > De.x0 && n < De.x1 && t > De.z0 && t < De.z1) return "garden";
  if (n > _e.x0 && n < _e.x1 && t >= De.z1 && t < _e.z1) return "plaza";
  if (n > bt.x0 && n < bt.x1 && t >= bt.z0 && t < bt.z1) return "church";
  if (
    t >= wt.z0 &&
    n > wt.x0 &&
    n < wt.x1 &&
    t < wt.z1 &&
    (!Qe.yard || Qe.yard(n, t))
  )
    return "yard";
  if (
    n > Ke.x0 - 3 &&
    n < Ke.x1 + 3 &&
    t > Ke.z0 - 3 &&
    t < Ke.z1 + 3 &&
    (Qe.house
      ? Qe.house(n, t)
      : n > Ke.x0 && n < Ke.x1 && t > Ke.z0 && t < Ke.z1)
  )
    return "house";
  if (
    t >= xt.z0 - 15 &&
    n > xt.x0 &&
    n < xt.x1 &&
    t < xt.z1 &&
    Qe.forest &&
    Qe.forest(n, t)
  )
    return "forest";
  if (n > -16.2 && n <= De.x0 && t > mt[0].a - 1.2 && t < mt[0].b + 1.2)
    return "gapW";
  if (n >= De.x1 && n < 16.2 && t > mt[1].a - 1.2 && t < mt[1].b + 1.2)
    return "gapE";
  const e = xe,
    r = (o) => n >= o.x0 && n < o.x1 && t >= o.z0 && t < o.z1;
  return r(e.alley)
    ? "alley"
    : r(e.street)
      ? "street"
      : r(e.shop)
        ? "shop"
        : r(e.back)
          ? "back"
          : r(e.passage)
            ? "passage"
            : r(e.lane)
              ? "lane"
              : null;
}
const Lo = {
    x0: -45,
    x1: 49.6,
    z0: -11.4,
    z1: 212,
    cell: 0.2,
    inArea: (n, t) => On(n, t) !== null,
    blocked: (n, t) => Rt(n, t) < 0.3,
  },
  Vn = [
    [
      [8.6, -7.6],
      [6.9, -5.4],
      [5.1, -3.6],
      [3.9, -2.4],
    ],
    [
      [3.9, -2.4],
      [4.3, 0.1],
      [3.8, 2.8],
      [2.3, 5.1],
      [0.7, 7.6],
      [0, 10.9],
    ],
    [
      [3.9, -2.4],
      [1.6, -3.4],
      [-0.5, -3.35],
      [-1.35, -2.75],
    ],
    [
      [-3.2, 2.35],
      [-4.7, 3.9],
      [-6.9, 5.3],
      [-8.8, 6],
    ],
  ],
  Ln = (n, t, e, r) => {
    const o = r[0] - e[0],
      l = r[1] - e[1],
      s = Math.max(
        0,
        Math.min(1, ((n - e[0]) * o + (t - e[1]) * l) / (o * o + l * l)),
      );
    return Math.hypot(n - e[0] - o * s, t - e[1] - l * s);
  };
function Xn(n, t) {
  let e = 1e9;
  for (const r of Vn)
    for (let o = 0; o < r.length - 1; o++)
      e = Math.min(e, Ln(n, t, r[o], r[o + 1]));
  return e;
}
function Un(n, t) {
  const e = Rt(n, t),
    r = 0.018 * Math.sin(n * 1.3 + t * 0.7) * Math.sin(t * 1.1 - n * 0.4);
  if (e >= 0.45) return r;
  if (e >= 0) {
    const o = e / 0.45;
    return dt + 0.025 + (r - dt - 0.025) * (o * o * (3 - 2 * o));
  }
  return dt + 0.025 - Math.min(sn(n, t) + 0.03, 0.05 + sn(n, t));
}
function $n(n, t, e) {
  const r = n.clone();
  r.userData = { ...n.userData };
  const o = {
    tGravel: { value: t.map },
    tGravelN: { value: t.normalMap },
    tAsh: { value: e.map },
    tAshN: { value: e.normalMap },
    uAsh: { value: 0 },
  };
  return (
    (r.onBeforeCompile = (l) => {
      (Object.assign(l.uniforms, o),
        (l.vertexShader = l.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec2 aMask;
varying vec2 vMask;
varying vec2 vGUv;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vMask = aMask; vGUv = uv;`,
          )),
        (l.fragmentShader = l.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
uniform sampler2D tGravel, tGravelN, tAsh, tAshN;
uniform float uAsh;
varying vec2 vMask;
varying vec2 vGUv;
float gH(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float gN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gH(i), gH(i + vec2(1, 0)), f.x), mix(gH(i + vec2(0, 1)), gH(i + vec2(1, 1)), f.x), f.y); }`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      float edgeN = gN(vGUv * 3.7) * 0.5 + gN(vGUv * 11.3) * 0.3;
      float pathK = smoothstep(0.35, 0.65, vMask.x + (edgeN - 0.4) * 0.35);
      vec3 gcol = texture2D(tGravel, vGUv / 1.2).rgb;
      // under the lawn: a mat of green thatch (the gaps between the blades read as more grass, not bare soil)
      vec3 lawnC = vec3(0.03, 0.066, 0.013) * (0.75 + 0.5 * gN(vGUv * 0.9));
      diffuseColor.rgb = mix(diffuseColor.rgb, lawnC, 0.6 * (1.0 - vMask.y));
      diffuseColor.rgb = mix(diffuseColor.rgb, gcol, pathK);
      diffuseColor.rgb *= 1.0 - 0.45 * vMask.y;                                  // the wet bank
      vec3 acol = texture2D(tAsh, vGUv / 2.5).rgb;
      diffuseColor.rgb = mix(diffuseColor.rgb, mix(acol, acol * 0.8 + gcol * 0.12, pathK), uAsh);`,
          )
          .replace(
            "#include <normal_fragment_maps>",
            `#include <normal_fragment_maps>
      {
        vec3 gn = texture2D(tGravelN, vGUv / 1.2).xyz * 2.0 - 1.0;
        vec3 an = texture2D(tAshN, vGUv / 2.5).xyz * 2.0 - 1.0;
        vec3 mapN = normalize(mix(mix(vec3(0.0, 0.0, 1.0), gn, pathK * 0.8), an, uAsh * 0.8));
        mapN.xy *= normalScale;
        normal = normalize(normal + tbn * vec3(mapN.xy, 0.0) * 0.8);
      }`,
          )));
    }),
    (r.customProgramCacheKey = () => "land2"),
    (r.userData.U = o),
    r
  );
}
