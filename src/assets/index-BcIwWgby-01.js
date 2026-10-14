// assets/index-BcIwWgby 01 — math
// Lines 1-180 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
import {
  G as Kt,
  at as At,
  c as bt,
  ah as qt,
  ak as Ct,
  B as Rt,
  I as xt,
  o as wt,
  b as Pt,
  au as ko,
  av as So,
  V as dt,
  C as Xt,
  a9 as re,
  x as H0,
  i as P0,
  d as m0,
  z as Is,
  U as ga,
  X as Ga,
  al as Ha,
  aw as vs,
  Y as _s,
  F as Oa,
  w as ba,
  ax as ja,
  H as Ya,
  ay as Xa,
  az as $a,
  aA as Za,
  an as M0,
  K as l0,
  E as pe,
  $ as t0,
  M as n0,
  m as p0,
  Q as w0,
  q as Ms,
  f as io,
  g as lo,
  a2 as za,
  a3 as ka,
  a7 as ws,
  h as vt,
  P as No,
  ab as Ja,
  af as Es,
  a0 as Sa,
  aa as Lo,
  a5 as he,
  aB as Aa,
  a6 as te,
  J as s0,
  l as no,
  ao as Po,
  A as ye,
  k as Do,
  v as hs,
  aC as Pa,
  aD as Qa,
  aE as tn,
  D as en,
  a8 as ro,
  aF as on,
  aG as sn,
  aH as an,
  ag as js,
  aj as nn,
  a1 as Ys,
  aq as Xs,
  ar as rn,
  y as cn,
  aI as ln,
  as as $s,
} from "./index-DaQlAVPp.js";
import { F as To, b as hn, a as un } from "./house-BEzMWI26.js";
import {
  G as Co,
  a as V0,
  m as X0,
  b as u0,
  P as fn,
  W as v0,
  p as J0,
  B as Yt,
  c as dn,
  S as Ie,
  d as Bo,
  g as Me,
  C as r0,
  e as zs,
  f as pn,
  h as Mo,
  i as Zs,
  j as Ta,
  z as Ve,
  H as _t,
  k as Js,
  l as mn,
  N as xn,
} from "./district-BhfbivMT.js";
import { a as vn } from "./BufferGeometryUtils-Qxvmd-vM.js";
import {
  g as Mn,
  a as Mt,
  l as Wt,
  d as Qs,
  x as wn,
  t as Q0,
  r as ge,
  M as f0,
  h as us,
  B as yn,
} from "./kit-CFeM0oZ2.js";
import {
  V as at,
  t as Vt,
  f as i0,
  m as a0,
  k as d0,
  c as gn,
  F as K0,
  A as bn,
} from "./common-BYwPbecq.js";
import { R as Zt } from "./RoundedBoxGeometry-D0zz8qHa.js";
import "./furniture-BraVmmRV.js";
const We = 0.46,
  T0 = 0.4,
  uo = 0.45,
  ns = 2.45,
  zn = 0.2;
function fo(s, o, t, u, e, r) {
  const a = new qt(u - s, e - o, r - t);
  return (a.translate((s + u) / 2, (o + e) / 2, (t + r) / 2), Ct(a));
}
function ta(s, o, t, u, e = ns) {
  const r = T0 / 2 + zn,
    a = 0.3,
    p = o - s,
    i = new Rt(),
    d = [],
    y = [],
    w = [],
    g = (n, l, f, h, c, M, m, k) => {
      const S = d.length / 3;
      (d.push(...n, ...l, ...f, ...h),
        y.push(c, M, m, M, m, k, c, k),
        w.push(S, S + 1, S + 2, S, S + 2, S + 3));
    },
    z = Math.hypot(r, a);
  (g([0, e, -r], [p, e, -r], [p, e + a, 0], [0, e + a, 0], 0, 0, p, z),
    g([p, e, r], [0, e, r], [0, e + a, 0], [p, e + a, 0], 0, 0, p, z),
    g(
      [0, e - 0.06, -r],
      [0, e - 0.06, r],
      [p, e - 0.06, r],
      [p, e - 0.06, -r],
      0,
      0,
      1,
      1,
    ),
    i.setAttribute("position", new xt(d, 3)),
    i.setAttribute("uv", new xt(y, 2)),
    i.setIndex(w),
    i.computeVertexNormals());
  const x = u
    ? new wt().makeTranslation(s, 0, t)
    : new wt().makeRotationY(-Math.PI / 2).setPosition(t, 0, s);
  i.applyMatrix4(x);
  const v = new Pt(0.075, 0.075, p, 8, 1, !1, 0, Math.PI).rotateZ(Math.PI / 2);
  (v.translate(p / 2, e + a - 0.01, 0), v.applyMatrix4(x));
  {
    const n = v.attributes.uv;
    for (let l = 0; l < n.count; l++)
      n.setXY(l, n.getX(l) * p, n.getY(l) * 0.3);
  }
  return [i, v];
}
