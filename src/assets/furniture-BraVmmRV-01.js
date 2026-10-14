// assets/furniture-BraVmmRV 01 — math
// Lines 1-311 of readable/assets/furniture-BraVmmRV.pretty.js (statement-aligned).
import { R as Ot } from "./RoundedBoxGeometry-D0zz8qHa.js";
import {
  h as At,
  g as Ht,
  a as Z,
  m as C0,
  i as Y0,
  c as r0,
  d as wt,
  b as V0,
  e as tt,
  p as st,
  l as H,
  f as Q0,
  M as p0,
  r as d0,
  t as y0,
} from "./kit-CFeM0oZ2.js";
import {
  c as J0,
  B as E0,
  h as K0,
  I as u0,
  V as m0,
  Q as Ut,
  ak as A0,
  G as R0,
  o as F0,
  a5 as kt,
  a6 as It,
  aa as Qt,
  $ as $t,
  J as L0,
  d as dt,
  ah as Jt,
  b as St,
} from "./index-DaQlAVPp.js";
function Q(z, t) {
  const k = z.attributes.position.count,
    o = new Float32Array(k * 3);
  for (let d = 0; d < k; d++)
    ((o[d * 3] = t[0]), (o[d * 3 + 1] = t[1]), (o[d * 3 + 2] = t[2]));
  return (z.setAttribute("color", new K0(o, 3)), z);
}
function T(z, t) {
  const k = z.attributes.position,
    o = z.attributes.normal,
    d = k.count,
    i = new Float32Array(d * 3);
  for (let f = 0; f < d; f++) {
    const Y = t(
      k.getX(f),
      k.getY(f),
      k.getZ(f),
      o ? o.getX(f) : 0,
      o ? o.getY(f) : 1,
      o ? o.getZ(f) : 0,
    );
    ((i[f * 3] = Y[0]), (i[f * 3 + 1] = Y[1]), (i[f * 3 + 2] = Y[2]));
  }
  return (z.setAttribute("color", new K0(i, 3)), z);
}
function ut(z, t, k, o, d, i, f = 0.01, Y = 2) {
  const n = o - z,
    s = d - t,
    c = i - k,
    r = new Ot(
      n,
      s,
      c,
      Y,
      Math.min(f, n / 2 - 1e-4, s / 2 - 1e-4, c / 2 - 1e-4),
    );
  return (r.translate((z + o) / 2, (t + d) / 2, (k + i) / 2), A0(r));
}
function s0(
  z,
  t,
  k,
  o,
  d = [
    [0, 0],
    [1, 0],
    [1, 1],
    [0, 1],
  ],
) {
  const i = new E0();
  return (
    i.setAttribute("position", new u0([...z, ...t, ...k, ...o], 3)),
    i.setAttribute("uv", new u0(d.flat(), 2)),
    i.setIndex([0, 1, 2, 0, 2, 3]),
    i.computeVertexNormals(),
    i
  );
}
const Kt = 1.8;
function j0({
  axis: z = "x",
  a: t,
  b: k,
  c: o,
  y: d,
  r: i,
  taper: f = 0.06,
  flip: Y = !1,
  seed: n = 1,
  caps: s = [!0, !0],
  tint: c = null,
  radial: r = 20,
  segLen: y = 0.3,
  wob: l = 1,
}) {
  const N = C0(n * 7 + 3),
    b = Math.abs(k - t),
    A = Math.sign(k - t) || 1,
    P = Math.max(2, Math.ceil(b / y)),
    w = [],
    E = [],
    X = [],
    v = [],
    W = (N.hash(n, 3, 5) * 7) % 1,
    R = N.hash(n, 9, 1),
    a = (u, p) => {
      const x = Y ? 1 - u : u,
        S = 1 - f * x;
      return (
        i *
        S *
        (1 +
          l *
            (0.035 * N.n2(u * b * 0.9 + n * 3.1, 0.5) +
              0.018 *
                N.n2(Math.cos(p) * 1.3 + n, Math.sin(p) * 1.3 + u * b * 2.2) +
              0.012 * N.n2(u * b * 4.5, p * 2 + n)))
      );
    },
    e = (u, p, x) => (z === "x" ? [u, d + x, o + p] : [o + p, d + x, u]),
    h = [];
  for (let u = 0; u <= P; u++) {
    const p = u / P,
      x = t + A * b * p,
      S = [];
    for (let m = 0; m <= r; m++) {
      const I = (m / r) * Math.PI * 2,
        V = a(p, I % (Math.PI * 2)),
        G = -Math.cos(I) * V,
        _ = Math.sin(I) * V * 1,
        j = e(x, _, G);
      w.push(...j);
      const L = z === "x" ? 0 : Math.sin(I),
        J = z === "x" ? Math.sin(I) : 0;
      (E.push(L, -Math.cos(I), J),
        X.push(W + (p * b) / Kt, 0.012 + (0.72 * m) / r),
        S.push(w.length / 3 - 1));
    }
    h.push(S);
  }
  for (let u = 0; u < P; u++)
    for (let p = 0; p < r; p++) {
      const x = h[u][p],
        S = h[u][p + 1],
        m = h[u + 1][p],
        I = h[u + 1][p + 1];
      v.push(x, m, S, S, m, I);
    }
  const g = (u, p) => {
    const x = Math.floor(N.hash(n, u, 77) * 4),
      S = u / P,
      m = t + A * b * S,
      I = w.length / 3,
      V = e(m + p * A * 0.004, 0, 0),
      G = z === "x" ? [p * A, 0, 0] : [0, 0, p * A];
    (w.push(...V), E.push(...G), X.push((x + 0.5) / 4, 0.88));
    const _ = R * Math.PI * 2;
    for (let j = 0; j <= r; j++) {
      const L = (j / r) * Math.PI * 2,
        J = a(S, L % (Math.PI * 2));
      (w.push(...e(m + p * A * 0.004 * 0, Math.sin(L) * J, -Math.cos(L) * J)),
        E.push(...G));
      const n0 = (J / i) * 0.47;
      X.push(
        (x + 0.5 + n0 * Math.cos(L + _)) / 4,
        0.88 + 0.115 * (n0 / 0.47) * Math.sin(L + _) * (0.47 / 0.47),
      );
    }
    for (let j = 0; j < r; j++) v.push(I, I + 1 + j, I + 2 + j);
  };
  (s[0] && g(0, -1), s[1] && g(P, 1));
  const M = new E0();
  return (
    M.setAttribute("position", new u0(w, 3)),
    M.setAttribute("normal", new u0(E, 3)),
    M.setAttribute("uv", new u0(X, 2)),
    M.setIndex(v),
    Ht(M),
    c && T(M, c),
    M
  );
}
function U0(
  z,
  t,
  k,
  {
    seed: o = 1,
    radial: d = 12,
    tint: i = null,
    caps: f = !0,
    taper: Y = 0.08,
  } = {},
) {
  const n = new m0(...z),
    s = new m0(...t),
    c = n.distanceTo(s),
    r = j0({
      axis: "x",
      a: 0,
      b: c,
      c: 0,
      y: 0,
      r: k,
      seed: o,
      radial: d,
      taper: Y,
      caps: [f, f],
      segLen: Math.max(0.2, c / 8),
      wob: 0.8,
    }),
    y = new Ut().setFromUnitVectors(
      new m0(1, 0, 0),
      s.clone().sub(n).normalize(),
    );
  return (r.applyQuaternion(y), r.translate(n.x, n.y, n.z), i && T(r, i), r);
}
class Ft {
  constructor(t) {
    ((this.name = t), (this.m = new Map()), (this.casters = []));
  }
  add(t, k, { cast: o = !0, receive: d = !0 } = {}) {
    (t.attributes.normal || t.computeVertexNormals(),
      k.vertexColors && !t.attributes.color && Q(t, [1, 1, 1]));
    let i = this.m.get(k.uuid);
    return (
      i || this.m.set(k.uuid, (i = { mat: k, geos: [], receive: !1 })),
      i.geos.push(t),
      (i.receive = i.receive || d),
      o && this.casters.push(t),
      t
    );
  }
  flush(t) {
    const k = [];
    for (const o of this.m.values()) {
      const d = new J0(At(o.geos), o.mat);
      ((d.castShadow = !1),
        (d.receiveShadow = o.receive),
        (d.name =
          this.name + ":" + (o.mat.userData.catalog || o.mat.name || "mat")),
        t.add(d),
        k.push(d));
    }
    return (this.m.clear(), k);
  }
  casterGeometry() {
    const t = Dt(this.casters);
    return ((this.casters = []), t);
  }
}
function Dt(z) {
  let t = 0,
    k = 0;
  for (const n of z)
    ((t += n.attributes.position.count),
      (k += n.index ? n.index.count : n.attributes.position.count));
  const o = new Float32Array(t * 3),
    d = new Uint32Array(k);
  let i = 0,
    f = 0;
  for (const n of z) {
    const s = n.attributes.position,
      c = s.count;
    for (let r = 0; r < c; r++)
      ((o[(i + r) * 3] = s.getX(r)),
        (o[(i + r) * 3 + 1] = s.getY(r)),
        (o[(i + r) * 3 + 2] = s.getZ(r)));
    if (n.index) {
      const r = n.index.array;
      for (let y = 0; y < r.length; y++) d[f + y] = r[y] + i;
      f += r.length;
    } else {
      for (let r = 0; r < c; r++) d[f + r] = i + r;
      f += c;
    }
    i += c;
  }
  const Y = new E0();
  return (
    Y.setAttribute("position", new K0(o, 3)),
    Y.setIndex(new K0(d, 1)),
    Y.computeBoundingSphere(),
    Y
  );
}
function g0(z, t, k, o, d, i, f = 0.004, Y = null) {
  const n = o - z,
    s = d - t,
    c = i - k,
    r = Y || (n >= c && n >= s ? "x" : c >= s ? "z" : "y");
  return Z(z, t, k, o, d, i, f, r, 1);
}
