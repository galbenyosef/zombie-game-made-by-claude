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
const S0 = 0.15,
  Vt = 0.27,
  q = { W: 2.65, E: 9.35, N: 200.15, S: 206.85 },
  $ = { x0: 2.5, x1: 9.5, z0: 200, z1: 207 },
  K = { x0: 2.8, x1: 9.2, z0: 200.3, z1: 206.7 },
  x0 = 0.11,
  ot = 0.02,
  ht = (z) => 0.17 + z * Vt,
  gt = (z) => 0.305 + z * Vt,
  nt = [0, 8],
  et = [-1, 8],
  v0 = 0.3,
  q0 = (40 * Math.PI) / 180,
  Bt = Math.tan(q0),
  U = 6,
  Tt = 2.755,
  e0 = (z) => Tt + (U - Math.abs(z - U) - q.W) * Bt,
  Pt = e0(U),
  t0 = { z0: 199.7, z1: 207.3, x0: 2, x1: 10, T: 0.13 },
  ft = 0.07,
  to = [199.93, 200.7, 201.5, 202.3, 203.1, 203.9, 204.7, 205.5, 206.3, 207.07],
  Et = [201.5, 203.1, 204.7, 206.3],
  Xt = 2.49,
  jt = 0.11,
  l0 = {
    z0: 198.35,
    z1: 200,
    x0: 2.35,
    x1: 9.65,
    y: 0.022,
    posts: [
      [2.72, 198.56],
      [9.28, 198.56],
    ],
    postR: 0.115,
    beamZ: 198.56,
    roof: {
      z0: 198.18,
      x0: 2.18,
      x1: 9.82,
      yWall: 2.98,
      slope: Math.tan((20 * Math.PI) / 180),
      T: 0.11,
    },
  },
  G0 = (z) => l0.roof.yWall - ($.z0 - z) * l0.roof.slope,
  bt = {
    door: { wall: "N", a: 5.52, b: 6.48, y0: 0, y1: 1.97, hinge: "b" },
    back: { wall: "S", a: 5.52, b: 6.48, y0: 0, y1: 1.97, hinge: "a" },
    W1: {
      wall: "N",
      a: 3.52,
      b: 4.28,
      y0: 0.9,
      y1: 1.74,
      win: !0,
      shutters: !0,
    },
    W2: { wall: "E", a: 202.36, b: 203.12, y0: 0.99, y1: 1.76, win: !0 },
    W3: {
      wall: "S",
      a: 3.42,
      b: 4.18,
      y0: 0.9,
      y1: 1.74,
      win: !0,
      shutters: !0,
    },
  },
  O = {
    z0: 202.6,
    z1: 204.2,
    front: 3.36,
    mantelY: 1.32,
    breast: [2.8, 3.26, 202.78, 204.02],
    box: { z0: 203, z1: 203.8, y1: 0.84, back: 2.62 },
    stack: { x0: 1.93, z0: 202.9, z1: 203.9, top: 6.05 },
    base: { x0: 1.78, z0: 202.62, z1: 204.18, top: 1.9 },
    hearth: { x1: 3.98, z0: 202.46, z1: 204.34 },
  },
  oo = { x0: 7.84, x1: 9.18, z0: 204.52, z1: 206.68, top: 0.6 },
  so = { cx: 5.3, cz: 203.3, hx: 0.64, hz: 0.4, top: 0.76 },
  xt = { x: 7.92, z: 203.24, yaw: -0.6 },
  mo = {
    W1: {
      hinge: "b",
      over: 0.04,
      y0: 0.8,
      h: 1.06,
      cracks: [
        [0.2, 0.014],
        [0.5, 0.019],
        [0.66, 0.012],
      ],
      slot: [2, 0.62, 0.014],
    },
    W2: {
      hinge: "a",
      over: 0.07,
      y0: 0.89,
      h: 0.97,
      cracks: [
        [0.24, 0.023],
        [0.55, 0.021],
        [0.73, 0.024],
      ],
      slot: [1, 0.54, 0.02],
      brace: !1,
    },
    W3: {
      hinge: "b",
      over: 0.04,
      y0: 0.865,
      h: 0.995,
      cracks: [
        [0.27, 0.017],
        [0.53, 0.012],
        [0.7, 0.015],
      ],
      slot: [1, 0.4, 0.012],
    },
  },
  Nt = { az: 76, el: 19 },
  zo = () => {
    const z = (Nt.az * Math.PI) / 180,
      t = (Nt.el * Math.PI) / 180;
    return [Math.cos(t) * Math.sin(z), Math.sin(t), -Math.cos(t) * Math.cos(z)];
  },
  Mo = {
    ring: [
      [0.9, 198.05],
      [3.4, 197.85],
      [6, 197.75],
      [8.6, 197.85],
      [10.7, 198.3],
      [11.05, 200.6],
      [11.1, 202.8],
      [11.05, 205],
      [10.7, 207.55],
      [8.5, 208.5],
      [6, 208.65],
      [3.5, 208.5],
      [1.25, 208.1],
      [0.3, 206],
      [0.2, 203.6],
      [0.2, 201.35],
      [0.35, 199.4],
    ],
    windows: {
      W1: [3.9, 199.22, 0],
      W2: [9.86, 202.66, -Math.PI / 2],
      W3: [3.8, 207.75, Math.PI],
    },
    door: [6, 199.2, 0],
    back: [6, 207.75, Math.PI],
  },
  mt = (z, t) => Math.min(z - q.W, q.E - z, t - q.N, q.S - t);
function z0(z, t, k) {
  const o = r0(-0.07, 0.07, mt(z, k)),
    d = 1 - 0.32 * r0(1.9, 5, t),
    i = 0.76 + 0.24 * r0(0, 0.9, t);
  return [
    Y0(0.74 * i, 0.97 * d, o),
    Y0(0.73 * i, 0.83 * d, o),
    Y0(0.7 * i, 0.67 * d, o),
  ];
}
const no = (z, t, k) => {
    const o = r0(-0.05, 0.05, mt(z, k)),
      d = 1 - 0.25 * r0(1.8, 2.6, t);
    return [Y0(0.66, 0.98 * d, o), Y0(0.66, 0.92 * d, o), Y0(0.64, 0.8 * d, o)];
  },
  _0 = (z, t, k) => {
    const o = r0(-0.04, 0.04, mt(z, k)),
      d = 1 - 0.38 * r0(2.6, 5.2, t);
    return [
      Y0(0.72, 0.93 * d, o),
      Y0(0.71, 0.79 * d, o),
      Y0(0.68, 0.63 * d, o),
    ];
  };
function Yt(z) {
  const t = [];
  for (const k of Object.values(bt))
    k.wall === z && t.push({ a: k.a, b: k.b, y0: k.y0, y1: k.y1 });
  return (z === "W" && t.push({ a: O.z0, b: O.z1, y0: -1, y1: 2 }), t);
}
const Rt = (z, t) => z - S0 * 0.9 < t.y1 && z + S0 * 0.9 > t.y0;
function eo(z) {
  const t = [];
  if (z.wall === "N" || z.wall === "S")
    for (let d = nt[0]; d <= nt[1]; d++) t.push(ht(d));
  else for (let d = et[0]; d <= et[1]; d++) t.push(gt(d));
  let k = 9,
    o = -9;
  for (const d of t)
    Rt(d, z) ||
      (d > (z.y0 + z.y1) / 2
        ? (k = Math.min(k, d - S0))
        : (o = Math.max(o, d + S0)));
  return { top: k, bot: o };
}
function ao(z, t, k, o) {
  let d = [[z, t]];
  for (const i of o) {
    if (!Rt(k, i)) continue;
    const f = [];
    for (const [Y, n] of d) {
      if (i.b <= Y || i.a >= n) {
        f.push([Y, n]);
        continue;
      }
      (i.a > Y && f.push([Y, i.a]), i.b < n && f.push([i.b, n]));
    }
    d = f;
  }
  return d.filter(([i, f]) => f - i > 0.05);
}
function co(z, t, k, o, d) {
  const i = new Set([z, t]);
  for (const n of d)
    (n.a > z && n.a < t && i.add(n.a), n.b > z && n.b < t && i.add(n.b));
  const f = [...i].sort((n, s) => n - s),
    Y = [];
  for (let n = 0; n < f.length - 1; n++) {
    const s = f[n],
      c = f[n + 1],
      r = (s + c) / 2;
    let y = [[k, o]];
    for (const l of d) {
      if (!(r > l.a && r < l.b)) continue;
      const N = [];
      for (const [b, A] of y) {
        if (l.y1 <= b || l.y0 >= A) {
          N.push([b, A]);
          continue;
        }
        (l.y0 > b && N.push([b, l.y0]), l.y1 < A && N.push([l.y1, A]));
      }
      y = N;
    }
    for (const [l, N] of y) N - l > 0.01 && Y.push([s, c, l, N]);
  }
  return Y;
}
function wo(z, t, k, o) {
  const d = new R0();
  d.name = "house_shell";
  const i = o,
    f = [];
  let Y = 1;
  const n = [
    { id: "N", axis: "x", c: q.N, s0: q.W - v0, s1: q.E + v0, n: nt, y: ht },
    { id: "S", axis: "x", c: q.S, s0: q.W - v0, s1: q.E + v0, n: nt, y: ht },
    { id: "W", axis: "z", c: q.W, s0: q.N - v0, s1: q.S + v0, n: et, y: gt },
    { id: "E", axis: "z", c: q.E, s0: q.N - v0, s1: q.S + v0, n: et, y: gt },
  ];
  for (const a of n) {
    const e = Yt(a.id);
    for (let h = a.n[0]; h <= a.n[1]; h++) {
      const g = a.y(h),
        M = a.s0;
      for (const [u, p] of ao(M, a.s1, g, e)) {
        const x = Math.abs(u - M) < 1e-6,
          S = Math.abs(p - a.s1) < 1e-6,
          m = S0 * (0.96 + k() * 0.08);
        i.add(
          j0({
            axis: a.axis,
            a: u,
            b: p,
            c: a.c,
            y: g,
            r: m,
            seed: Y++,
            flip: (h & 1) === 1,
            caps: [x, S],
            tint: z0,
          }),
          t.log,
        );
      }
    }
  }
  for (const a of n) {
    const e = Yt(a.id).map((u) => ({
        a: u.a,
        b: u.b,
        y0: Math.max(0, u.y0 - 0.05),
        y1: u.y1 + 0.03,
      })),
      h = a.y(a.n[1]),
      g = a.axis === "x" ? q.W : q.N,
      M = a.axis === "x" ? q.E : q.S;
    for (const [u, p, x, S] of co(g, M, 0, h, e))
      for (const m of [-1, 1]) {
        const I = a.c + m * x0;
        let V;
        (a.axis === "x"
          ? (V =
              m > 0
                ? s0([u, x, I], [p, x, I], [p, S, I], [u, S, I])
                : s0([p, x, I], [u, x, I], [u, S, I], [p, S, I]))
          : (V =
              m > 0
                ? s0([I, x, p], [I, x, u], [I, S, u], [I, S, p])
                : s0([I, x, u], [I, x, p], [I, S, p], [I, S, u])),
          A0(V),
          T(V, no),
          i.add(V, t.chink, { cast: !0, receive: !0 }));
      }
  }
  const s = (a, e, h, g) =>
    f.push({ x0: a, x1: e, z0: h, z1: g, y0: 0, y1: 2.6 });
  for (const [a, e] of [
    ["N", [$.z0, K.z0]],
    ["S", [K.z1, $.z1]],
  ]) {
    const h = Object.values(bt).find((g) => g.wall === a && !g.win);
    (s($.x0 - 0.15, h.a, e[0], e[1]), s(h.b, $.x1 + 0.15, e[0], e[1]));
  }
  (s($.x0, K.x0, $.z0 - 0.15, $.z1 + 0.15),
    s(K.x1, $.x1, $.z0 - 0.15, $.z1 + 0.15));
  {
    const a = s0(
      [K.x0 - 0.12, ot, K.z1 + 0.12],
      [K.x1 + 0.12, ot, K.z1 + 0.12],
      [K.x1 + 0.12, ot, K.z0 - 0.12],
      [K.x0 - 0.12, ot, K.z0 - 0.12],
    );
    A0(a);
    const e = new J0(a, t.floor);
    ((e.name = "house:floor"), (e.receiveShadow = !0), d.add(e));
  }
  const c = Math.cos(q0),
    r = t0.T / c,
    y = (a, e, h, g) => {
      const M = [0, 0.8, 1.6, 2.4, 3, 3.25, 3.35, 3.5, g].filter(
          (C) => C <= g + 1e-6,
        ),
        u = [e];
      for (let C = Math.ceil(e * 4) / 4; C < h; C += 0.25)
        C > e + 0.01 && u.push(C);
      u.push(h);
      const p = [],
        x = [],
        S = [];
      for (let C = 0; C < u.length; C++)
        for (let D = 0; D < M.length; D++) {
          const F = U + a * M[D],
            o0 = e0(F);
          (p.push(F, o0, u[C]), x.push(u[C], M[D] / c));
        }
      const m = M.length;
      for (let C = 0; C < u.length - 1; C++)
        for (let D = 0; D < m - 1; D++) {
          const F = C * m + D,
            o0 = F + 1,
            f0 = F + m,
            D0 = f0 + 1;
          S.push(F, o0, f0, o0, D0, f0);
        }
      const I = new E0();
      (I.setAttribute("position", new u0(p, 3)),
        I.setAttribute("uv", new u0(x, 2)),
        I.setIndex(S),
        I.computeVertexNormals());
      {
        const C = I.attributes.normal;
        let D = 0;
        for (let F = 0; F < C.count; F++) D += C.getY(F);
        if (D > 0) {
          const F = I.index.array;
          for (let o0 = 0; o0 < F.length; o0 += 3) {
            const f0 = F[o0 + 1];
            ((F[o0 + 1] = F[o0 + 2]), (F[o0 + 2] = f0));
          }
          I.computeVertexNormals();
        }
      }
      (T(I, _0), i.add(I, t.plank, { cast: !1, receive: !0 }));
      const V = U + a * g,
        G = e0(U) + r,
        _ = e0(V) + r,
        j = -g / c,
        L =
          a < 0
            ? s0(
                [U, G, e],
                [V, _, e],
                [V, _, h],
                [U, G, h],
                [
                  [e, 0],
                  [e, j],
                  [h, j],
                  [h, 0],
                ],
              )
            : s0(
                [U, G, h],
                [V, _, h],
                [V, _, e],
                [U, G, e],
                [
                  [-h, 0],
                  [-h, j],
                  [-e, j],
                  [-e, 0],
                ],
              );
      i.add(L, t.shingle, { cast: !0, receive: !0 });
      const J = e0(V),
        n0 =
          a < 0
            ? s0([V, J, h], [V, J, e], [V, _, e], [V, _, h])
            : s0([V, J, e], [V, J, h], [V, _, h], [V, _, e]);
      return (
        A0(n0),
        Q(n0, [0.66, 0.64, 0.6]),
        i.add(n0, t.plank, { cast: !1 }),
        { xE: V }
      );
    },
    l = O.stack.z0 - 0.08,
    N = O.stack.z1 + 0.08,
    b = U - t0.x0,
    A = U - $.x0 - 0.02;
  (y(-1, t0.z0, l, b),
    y(-1, l, N, A),
    y(-1, N, t0.z1, b),
    y(1, t0.z0, t0.z1, t0.x1 - U));
  const P = (a, e, h, g) => {
    const M = U + e * h,
      u = [U, e0(U), a],
      p = [M, e0(M), a],
      x = [M, e0(M) + r, a],
      S = [U, e0(U) + r, a],
      m = g < 0 == e < 0 ? s0(u, p, x, S) : s0(p, u, S, x);
    (A0(m), Q(m, [0.66, 0.64, 0.6]), i.add(m, t.plank, { cast: !1 }));
  };
  (P(t0.z0, -1, b, -1),
    P(t0.z0, 1, t0.x1 - U, -1),
    P(t0.z1, -1, b, 1),
    P(t0.z1, 1, t0.x1 - U, 1));
  for (const a of [t0.z0 + 0.02, t0.z1 - 0.02])
    for (const e of [-1, 1]) {
      const h = e < 0 ? b : t0.x1 - U,
        g = U + e * h,
        M = new m0(U, e0(U) + r * 0.55, a),
        u = new m0(g, e0(g) + r * 0.55, a),
        p = M.distanceTo(u),
        x = Z(-p / 2, -0.11, -0.02, p / 2, 0.11, 0.02, 0.006, "x"),
        S = new F0().makeRotationZ(e < 0 ? q0 : -q0);
      (S.setPosition((M.x + u.x) / 2, (M.y + u.y) / 2, a),
        x.applyMatrix4(S),
        Q(x, [0.62, 0.6, 0.56]),
        i.add(x, t.plank));
    }
  for (const a of [-1, 1]) {
    const e = Z(
        -0.13,
        -0.012,
        t0.z0 - 0.02,
        0.13,
        0.012,
        t0.z1 + 0.02,
        0.005,
        "z",
      ),
      h = new F0().makeRotationZ(a < 0 ? q0 : -q0);
    (h.setPosition(U + a * 0.095 * c, e0(U) + r + 0.03 + 0.012, 0),
      e.applyMatrix4(h),
      Q(e, [0.55, 0.53, 0.5]),
      i.add(e, t.plank));
  }
  const w = (a, e, h) => z0(a, e, h);
  for (const a of to)
    for (const e of [-1, 1]) {
      const h =
          e < 0 && a > l && a < N ? A - 0.03 : (e < 0 ? b : t0.x1 - U) - 0.04,
        g = U + e * h,
        M = U + e * 0.1;
      i.add(
        U0([g, e0(g) - ft / c, a], [M, e0(M) - ft / c, a], ft, {
          seed: Y++,
          tint: w,
        }),
        t.log,
      );
    }
  i.add(
    j0({
      axis: "z",
      a: t0.z0 - 0.12,
      b: t0.z1 + 0.12,
      c: U,
      y: Pt - 0.14,
      r: 0.13,
      seed: Y++,
      tint: z0,
    }),
    t.log,
  );
  for (const a of Et)
    i.add(
      j0({
        axis: "x",
        a: $.x0 + 0.02,
        b: $.x1 - 0.02,
        c: a,
        y: Xt,
        r: jt,
        seed: Y++,
        taper: 0.04,
        tint: z0,
      }),
      t.log,
    );
  for (const a of [-1, 1]) {
    const e = a < 0 ? K.x0 + 0.01 : K.x1 - 0.01,
      h = 2.56,
      g = e0(e) + 0.01,
      M =
        a < 0
          ? s0([e, h, q.S], [e, h, q.N], [e, g, q.N], [e, g, q.S])
          : s0([e, h, q.N], [e, h, q.S], [e, g, q.S], [e, g, q.N]),
      u = M.attributes.uv;
    for (let p = 0; p < 4; p++)
      u.setXY(p, M.attributes.position.getZ(p), M.attributes.position.getY(p));
    (T(M, _0), i.add(M, t.plank, { cast: !1 }));
  }
  const E = [],
    X = (a, e, h, g, M, u, p, x = null) => {
      const S = new kt(),
        m = e0(g),
        I = e0(M);
      if (
        (S.moveTo(g, u),
        S.lineTo(M, u),
        S.lineTo(M, I + 0.02),
        S.lineTo(U, Pt + 0.02),
        S.lineTo(g, m + 0.02),
        S.lineTo(g, u),
        x)
      ) {
        const j = new Qt();
        (j.moveTo(x.x0, x.y0),
          j.lineTo(x.x0, x.y1),
          j.lineTo(x.x1, x.y1),
          j.lineTo(x.x1, x.y0),
          j.lineTo(x.x0, x.y0),
          S.holes.push(j));
      }
      const V = new It(S, { depth: Math.abs(e - h), bevelEnabled: !1 });
      V.translate(0, 0, Math.min(e, h));
      const G = V.attributes.position,
        _ = V.attributes.uv;
      for (let j = 0; j < G.count; j++) _.setXY(j, G.getY(j), G.getX(j));
      (T(V, _0), i.add(V, t.plank));
      {
        const j = h + (h < e ? -0.012 : 0.012);
        for (let L = g + 0.2; L < M - 0.05; L += 0.2) {
          const J = e0(L) - 0.02;
          if (J - u < 0.12) continue;
          const n0 =
            x && L > x.x0 - 0.1 && L < x.x1 + 0.1
              ? [
                  [u + 0.03, x.y0 - 0.09],
                  [x.y1 + 0.09, J],
                ]
              : [[u + 0.03, J]];
          for (const [C, D] of n0) {
            if (D - C < 0.05) continue;
            const F = g0(
              L - 0.022,
              C,
              Math.min(j, h),
              L + 0.022,
              D,
              Math.max(j, h),
              0.003,
              "y",
            );
            (Q(F, [0.64, 0.62, 0.58]), i.add(F, t.plank, { cast: !1 }));
          }
        }
      }
    },
    v = { x0: U - 0.25, x1: U + 0.25, y0: 3.48, y1: 3.98 };
  X(q.N, q.N + x0, q.N - x0, q.W, q.E, 2.42, !0, v);
  {
    const a = q.N,
      e = 0.025,
      h = [];
    for (const u of [-1, 1]) {
      const p = a + u * x0,
        x = p + u * 0.025,
        S = Math.min(p, x),
        m = Math.max(p, x);
      (h.push(
        g0(v.x0 - 0.07, v.y0 - 0.07, S, v.x1 + 0.07, v.y0, m, 0.004, "x"),
        g0(v.x0 - 0.07, v.y1, S, v.x1 + 0.07, v.y1 + 0.07, m, 0.004, "x"),
      ),
        h.push(
          g0(v.x0 - 0.07, v.y0, S, v.x0, v.y1, m, 0.004, "y"),
          g0(v.x1, v.y0, S, v.x1 + 0.07, v.y1, m, 0.004, "y"),
        ));
    }
    (h.push(
      g0(v.x0, v.y0, a - x0, v.x1, v.y0 + e, a + x0, 0.003, "x"),
      g0(v.x0, v.y1 - e, a - x0, v.x1, v.y1, a + x0, 0.003, "x"),
    ),
      h.push(
        g0(v.x0, v.y0, a - x0, v.x0 + e, v.y1, a + x0, 0.003, "y"),
        g0(v.x1 - e, v.y0, a - x0, v.x1, v.y1, a + x0, 0.003, "y"),
      ));
    const g = U,
      M = (v.y0 + v.y1) / 2;
    h.push(
      g0(g - 0.012, v.y0, a - 0.015, g + 0.012, v.y1, a + 0.015, 0.003, "y"),
      g0(v.x0, M - 0.012, a - 0.015, v.x1, M + 0.012, a + 0.015, 0.003, "x"),
    );
    for (const u of h) (T(u, _0), i.add(u, t.plank));
    E.push(
      s0(
        [v.x0 + e, v.y0 + e, a],
        [v.x1 - e, v.y0 + e, a],
        [v.x1 - e, v.y1 - e, a],
        [v.x0 + e, v.y1 - e, a],
        [
          [0, 0],
          [0.8, 0],
          [0.8, 0.8],
          [0, 0.8],
        ],
      ),
    );
  }
  X(q.S, q.S - x0, q.S + x0, q.W, q.E, 2.42);
  {
    const a = l0.roof,
      e = [0.72, 0.7, 0.66],
      h = Z(l0.x0, -0.05, l0.z0, l0.x1, l0.y, l0.z1, 0.01, "x", 2);
    (Q(h, e),
      i.add(h, t.plank, { cast: !1 }),
      i.add(
        j0({
          axis: "x",
          a: l0.x0 - 0.05,
          b: l0.x1 + 0.05,
          c: l0.z0 + 0.02,
          y: -0.085,
          r: 0.12,
          seed: Y++,
          tint: () => [0.66, 0.64, 0.6],
        }),
        t.log,
      ));
    const g = 0.125,
      M = G0(l0.beamZ) - g;
    for (const [j, L] of l0.posts) {
      i.add(
        U0([j, -0.02, L], [j, M - 0.06, L], l0.postR, {
          seed: Y++,
          radial: 16,
          taper: 0.05,
          tint: z0,
        }),
        t.log,
      );
      const J = ut(j - 0.2, -0.04, L - 0.19, j + 0.2, 0.05, L + 0.19, 0.03);
      (Q(J, [0.8, 0.8, 0.78]), i.add(J, t.stone));
      const n0 = j < U ? 1 : -1;
      (i.add(
        U0([j + n0 * 0.07, M - 0.62, L], [j + n0 * 0.6, M - 0.08, L], 0.045, {
          seed: Y++,
          radial: 8,
          tint: () => e,
        }),
        t.log,
      ),
        f.push({
          x0: j - 0.16,
          x1: j + 0.16,
          z0: L - 0.16,
          z1: L + 0.16,
          y0: 0,
          y1: 2.4,
        }));
    }
    i.add(
      j0({
        axis: "x",
        a: a.x0 + 0.06,
        b: a.x1 - 0.06,
        c: l0.beamZ,
        y: M,
        r: g,
        seed: Y++,
        tint: () => e,
      }),
      t.log,
    );
    const u = Math.cos(Math.atan(a.slope)),
      p = a.T / u,
      x = a.z0,
      S = $.z0 - 0.005,
      m = G0(x),
      I = G0(S),
      V = s0(
        [a.x0, m, x],
        [a.x1, m, x],
        [a.x1, I, S],
        [a.x0, I, S],
        [
          [a.x0, x / u],
          [a.x1, x / u],
          [a.x1, S / u],
          [a.x0, S / u],
        ],
      );
    (Q(V, [0.7, 0.68, 0.64]), i.add(V, t.plank, { cast: !1 }));
    const G = s0(
      [a.x0, I + p, S],
      [a.x1, I + p, S],
      [a.x1, m + p, x],
      [a.x0, m + p, x],
      [
        [a.x0, 0],
        [a.x1, 0],
        [a.x1, -1.8149999999999977 / u],
        [a.x0, -1.8149999999999977 / u],
      ],
    );
    i.add(G, t.shingle);
    const _ = s0(
      [a.x1, m, x],
      [a.x0, m, x],
      [a.x0, m + p, x],
      [a.x1, m + p, x],
    );
    (A0(_), Q(_, [0.64, 0.62, 0.58]), i.add(_, t.plank, { cast: !1 }));
    for (const [j, L] of [
      [a.x0, -1],
      [a.x1, 1],
    ]) {
      const J =
        L < 0
          ? s0([j, m, x], [j, I, S], [j, I + p, S], [j, m + p, x])
          : s0([j, I, S], [j, m, x], [j, m + p, x], [j, I + p, S]);
      (A0(J), Q(J, [0.64, 0.62, 0.58]), i.add(J, t.plank, { cast: !1 }));
      const n0 = Math.hypot(S - x, I - m),
        C = Z(-0.02, -0.09, -n0 / 2, 0.02, 0.09, n0 / 2, 0.005, "z");
      (C.rotateX(Math.atan2(I - m, S - x) * -1),
        C.translate(j + L * 0.02, (m + I) / 2 + p * 0.5, (x + S) / 2),
        Q(C, [0.6, 0.58, 0.55]),
        i.add(C, t.plank));
    }
    {
      const j = Z(
        a.x0 + 0.1,
        I + p - 0.02,
        $.z0 - 0.05,
        a.x1 - 0.1,
        I + p + 0.13,
        $.z0 + 0.012,
        0.006,
        "x",
      );
      (Q(j, [0.55, 0.53, 0.5]), i.add(j, t.plank));
    }
    for (let j = a.x0 + 0.22; j < a.x1 - 0.1; j += 0.76) {
      const L = x + 0.05,
        J = $.z0 - 0.02;
      i.add(
        U0([j, G0(L) - 0.055, L], [j, G0(J) - 0.055, J], 0.055, {
          seed: Y++,
          radial: 9,
          tint: () => e,
        }),
        t.log,
      );
    }
    i.add(
      j0({
        axis: "x",
        a: a.x0 + 0.15,
        b: a.x1 - 0.15,
        c: $.z0 - 0.07,
        y: G0($.z0) - 0.14,
        r: 0.075,
        seed: Y++,
        tint: () => e,
      }),
      t.log,
    );
  }
  {
    const a = (p, x, S) => {
        if (
          p > O.box.back - 0.05 &&
          p < O.front + 0.01 &&
          S > O.box.z0 - 0.02 &&
          S < O.box.z1 + 0.02 &&
          x < O.box.y1 + 0.02
        )
          return [0.16, 0.14, 0.13];
        const V =
          1 -
          0.55 *
            (Math.exp(-(((S - (O.box.z0 + O.box.z1) / 2) / 0.45) ** 2)) *
              r0(O.box.y1 - 0.05, O.box.y1 + 0.1, x) *
              (1 - r0(1, 1.6, x)) *
              r0(3, 3.3, p));
        return p < $.x0 + 0.01
          ? [0.84 * V, 0.83 * V, 0.8 * V]
          : [0.98 * V, 0.93 * V, 0.86 * V];
      },
      e = (p, x, S, m, I, V, G = 0.035) => {
        const _ = ut(p, x, S, m, I, V, G, 2);
        return (T(_, a), i.add(_, t.stone), _);
      },
      h = O.box,
      g = O;
    (e($.x0 - 0.02, 0, g.z0, g.front, g.mantelY, h.z0),
      e($.x0 - 0.02, 0, h.z1, g.front, g.mantelY, g.z1),
      e($.x0 - 0.02, h.y1, h.z0 - 0.01, g.front, g.mantelY, h.z1 + 0.01, 0.02),
      e($.x0 - 0.02, 0, h.z0, h.back, h.y1 + 0.01, h.z1, 0.01),
      e(
        h.back - 0.01,
        0,
        h.z0 + 0.005,
        g.front - 0.02,
        0.07,
        h.z1 - 0.005,
        0.01,
      ));
    {
      const p = Z(
        g.front - 0.06,
        h.y1 - 0.03,
        h.z0 - 0.06,
        g.front + 0.008,
        h.y1 + 0.02,
        h.z1 + 0.06,
        0.004,
        "z",
      );
      i.add(p, t.iron);
    }
    (e(
      $.x0 - 0.02,
      g.mantelY + 0.1,
      g.breast[2],
      g.breast[1],
      e0(g.breast[1]) + 0.08,
      g.breast[3],
      0.03,
    ),
      e($.x0 - 0.02, g.mantelY + 0.04, g.z0, K.x0 + 0.1, 2.12, g.z1, 0.02));
    {
      const p = ut(
        g.front - 0.02,
        -0.01,
        g.hearth.z0,
        g.hearth.x1,
        0.035,
        g.hearth.z1,
        0.012,
      );
      (T(p, () => [0.9, 0.88, 0.84]), i.add(p, t.stone));
    }
    {
      const p = Z(
        K.x0 - 0.02,
        g.mantelY,
        g.z0 - 0.14,
        g.front + 0.16,
        g.mantelY + 0.1,
        g.z1 + 0.14,
        0.012,
        "z",
      );
      (T(p, (x, S, m) => {
        const I = z0(x, S, m);
        return [I[0] * 0.8, I[1] * 0.78, I[2] * 0.76];
      }),
        i.add(p, t.plank));
    }
    const M = g.base,
      u = g.stack;
    e(M.x0, -0.05, M.z0, $.x0 + 0.02, M.top, M.z1, 0.05);
    {
      const p = new kt();
      (p.moveTo(M.z0, 0),
        p.lineTo(M.z1, 0),
        p.lineTo(u.z1, 0.55),
        p.lineTo(u.z0, 0.55),
        p.lineTo(M.z0, 0));
      const x = new It(p, {
          depth: $.x0 + 0.02 - (M.x0 + 0.06),
          bevelEnabled: !0,
          bevelThickness: 0.02,
          bevelSize: 0.02,
          bevelSegments: 1,
        }),
        S = x.attributes.position;
      for (let m = 0; m < S.count; m++) {
        const I = S.getX(m),
          V = S.getY(m),
          G = S.getZ(m);
        S.setXYZ(m, M.x0 + 0.06 + G, M.top + V, I);
      }
      (x.computeVertexNormals(), A0(x), T(x, a), i.add(x, t.stone));
    }
    (e(u.x0, M.top + 0.3, u.z0, $.x0 + 0.03, u.top, u.z1, 0.04),
      e(
        u.x0 - 0.05,
        u.top,
        u.z0 - 0.05,
        $.x0 + 0.08,
        u.top + 0.08,
        u.z1 + 0.05,
        0.02,
      ));
    {
      const p = Z(
        u.x0 + 0.1,
        u.top + 0.02,
        u.z0 + 0.12,
        $.x0 - 0.06,
        u.top + 0.09,
        u.z1 - 0.12,
        0.01,
        "z",
      );
      i.add(p, t.dark, { cast: !1 });
    }
    (f.push({ x0: M.x0, x1: $.x0, z0: M.z0, z1: M.z1, y0: 0, y1: 3 }),
      f.push({ x0: K.x0, x1: g.front, z0: g.z0, z1: g.z1, y0: 0, y1: 2.5 }));
  }
  const W = {};
  for (const [a, e] of Object.entries(bt)) {
    if (!e.win) continue;
    const h = e.wall === "N" || e.wall === "S" ? "x" : "z",
      g = q[e.wall],
      M = e.wall === "N" ? 1 : e.wall === "S" ? -1 : e.wall === "W" ? 1 : -1,
      u = (a0, c0, B) =>
        h === "x" ? [a0, c0, g + M * B] : [g + M * B, c0, a0],
      p = (a0, c0, B, M0, h0, w0, k0 = 0.004, W0 = null) => {
        const b0 = u(a0, c0, B),
          I0 = u(M0, h0, w0);
        return g0(
          Math.min(b0[0], I0[0]),
          Math.min(b0[1], I0[1]),
          Math.min(b0[2], I0[2]),
          Math.max(b0[0], I0[0]),
          Math.max(b0[1], I0[1]),
          Math.max(b0[2], I0[2]),
          k0,
          W0,
        );
      },
      x = 0.03,
      S = S0 + 0.035,
      m = e.a,
      I = e.b,
      V = e.y0,
      G = e.y1,
      _ = [
        p(m - x, V - x, -S, m, G + x, S),
        p(I, V - x, -S, I + x, G + x, S),
        p(m - x, G, -S, I + x, G + x, S),
        p(m - x, V - x, -S + 0.005, I + x, V, S),
      ];
    for (const a0 of [-1, 1]) {
      const c0 = a0 * (S - 0.005),
        B = a0 * (S + 0.018);
      (_.push(
        p(
          m - x - 0.075,
          V - x - 0.02,
          Math.min(c0, B),
          m - x,
          G + x + 0.075,
          Math.max(c0, B),
          0.004,
        ),
      ),
        _.push(
          p(
            I + x,
            V - x - 0.02,
            Math.min(c0, B),
            I + x + 0.075,
            G + x + 0.075,
            Math.max(c0, B),
            0.004,
          ),
        ),
        _.push(
          p(
            m - x - 0.075,
            G + x,
            Math.min(c0, B),
            I + x + 0.075,
            G + x + 0.08,
            Math.max(c0, B),
            0.004,
          ),
        ),
        a0 > 0 &&
          _.push(
            p(
              m - x - 0.05,
              V - x - 0.035,
              S - 0.01,
              I + x + 0.05,
              V - x + 0.01,
              S + 0.045,
              0.006,
            ),
          ));
    }
    _.push(
      p(
        m - x - 0.06,
        V - x - 0.045,
        -0.255,
        I + x + 0.06,
        V - x + 0.004,
        -0.12,
        0.006,
      ),
    );
    const { top: j, bot: L } = eo(e);
    (j > G + x + 0.01 &&
      _.push(
        p(
          m - x,
          G + x - 0.005,
          -0.13799999999999998,
          I + x,
          j + 0.03,
          S0 - 0.012,
          0.008,
        ),
      ),
      L < V - x - 0.01 &&
        _.push(
          p(
            m - x,
            L - 0.03,
            -0.13799999999999998,
            I + x,
            V - x + 0.005,
            S0 - 0.012,
            0.008,
          ),
        ));
    for (const a0 of _) (T(a0, _0), i.add(a0, t.plank));
    const J = [],
      n0 = 0.045,
      C = 0.022,
      D = m,
      F = I,
      o0 = V,
      f0 = G;
    J.push(
      p(D, o0, -C, D + n0, f0, C),
      p(F - n0, o0, -C, F, f0, C),
      p(D, o0, -C, F, o0 + n0 * 1.3, C),
      p(D, f0 - n0, -C, F, f0, C),
    );
    const D0 = (D + F) / 2,
      zt = (o0 + f0) / 2 + 0.01;
    J.push(
      p(D0 - 0.013, o0, -C * 0.7, D0 + 0.013, f0, C * 0.7),
      p(D, zt - 0.013, -C * 0.7, F, zt + 0.013, C * 0.7),
    );
    for (const a0 of J)
      (T(a0, (c0, B, M0) => {
        const h0 = _0(c0, B, M0);
        return [h0[0] * 0.85, h0[1] * 0.83, h0[2] * 0.8];
      }),
        i.add(a0, t.plank));
    const Wt = u(D, o0, 0.004),
      Zt = u(F, o0, 0.004),
      Gt = u(F, f0, 0.004),
      _t = u(D, f0, 0.004),
      Lt = s0(Wt, Zt, Gt, _t, [
        [0, 0],
        [1.3, 0],
        [1.3, 1.4],
        [0, 1.4],
      ]);
    if ((E.push(Lt), e.shutters)) {
      const a0 = [0.56, 0.25, 0.2],
        c0 = [];
      for (const B of [-1, 1]) {
        const M0 = (I - m) / 2 + 0.05,
          h0 = B < 0 ? m - x - 0.07 : I + x + 0.07,
          w0 = B < 0 ? h0 - M0 : h0,
          k0 = B < 0 ? h0 : h0 + M0,
          W0 = V - x - 0.02,
          b0 = G + x + 0.03,
          I0 = -0.209,
          B0 = -0.235;
        for (let P0 = 0; P0 < 3; P0++) {
          const qt = w0 + (P0 * M0) / 3 + 0.002,
            Ct = w0 + ((P0 + 1) * M0) / 3 - 0.002;
          c0.push(
            p(
              qt,
              W0 + (P0 === 1 ? 0 : 0.006),
              B0,
              Ct,
              b0 - (P0 % 2) * 0.012,
              I0,
              0.004,
              "y",
            ),
          );
        }
        for (const P0 of [W0 + 0.13, b0 - 0.13])
          c0.push(
            p(
              w0 + 0.03,
              P0 - 0.045,
              B0 - 0.02,
              k0 - 0.03,
              P0 + 0.045,
              B0,
              0.004,
            ),
          );
        const at = B < 0 ? k0 - 0.07 : w0 + 0.07,
          ct = B < 0 ? w0 + 0.07 : k0 - 0.07,
          rt = W0 + 0.2,
          it = b0 - 0.2,
          Mt = Math.hypot(ct - at, it - rt),
          T0 = Z(-Mt / 2, -0.04, -0.01, Mt / 2, 0.04, 0.01, 0.004, "x");
        (T0.rotateZ(Math.atan2(it - rt, ct - at)),
          h === "z" && T0.rotateY(-Math.PI / 2));
        const lt = u((at + ct) / 2, (rt + it) / 2, B0 - 0.01);
        (T0.translate(lt[0], lt[1], lt[2]), c0.push(T0));
        const Z0 = u(B < 0 ? w0 + 0.02 : k0 - 0.02, (W0 + b0) / 2, I0 + 0.02);
        i.add(
          Z(
            Z0[0] - 0.006,
            Z0[1] - 0.006,
            Z0[2] - 0.006,
            Z0[0] + 0.006,
            Z0[1] + 0.006,
            Z0[2] + 0.006,
            0.002,
          ),
          t.iron,
          { cast: !1 },
        );
      }
      for (const B of c0)
        (T(B, (M0, h0, w0) => {
          const k0 =
            0.85 + 0.3 * Math.abs(Math.sin(M0 * 13.1 + h0 * 7.7 + w0 * 11.3));
          return [a0[0] * k0, a0[1] * k0, a0[2] * k0];
        }),
          i.add(B, t.plank));
    }
    W[a] = {
      center: u((m + I) / 2, (V + G) / 2, 0),
      inward: h === "x" ? [0, 0, M] : [M, 0, 0],
      P: u,
    };
  }
  const R = new J0(ro(E), t.glass);
  return (
    (R.name = "house:glass"),
    (R.castShadow = !1),
    (R.receiveShadow = !1),
    (R.renderOrder = 2),
    d.add(R),
    { group: d, colliders: f, glass: R, winFrames: W }
  );
}
function ro(z) {
  const t = [],
    k = [],
    o = [],
    d = [];
  let i = 0;
  for (const Y of z) {
    const n = Y.attributes.position,
      s = Y.attributes.normal,
      c = Y.attributes.uv;
    for (let r = 0; r < n.count; r++)
      (t.push(n.getX(r), n.getY(r), n.getZ(r)),
        k.push(s.getX(r), s.getY(r), s.getZ(r)),
        o.push(c.getX(r), c.getY(r)));
    for (const r of Y.index.array) d.push(r + i);
    i += n.count;
  }
  const f = new E0();
  return (
    f.setAttribute("position", new u0(t, 3)),
    f.setAttribute("normal", new u0(k, 3)),
    f.setAttribute("uv", new u0(o, 2)),
    f.setIndex(d),
    f
  );
}
function io(z, t, k) {
  const o = new R0();
  o.name = "house_bed";
  const d = k,
    i = C0(77),
    { x0: f, x1: Y, z0: n, z1: s } = oo,
    c = (m, I, V) => {
      const G = [
        [0, 0],
        [0.04, 0],
        [0.042, 0.02],
        [0.04, 0.26],
        [0.03, 0.29],
        [0.036, 0.315],
        [0.028, 0.34],
        [0.027, V - 0.14],
        [0.034, V - 0.12],
        [0.036, V - 0.095],
        [0.03, V - 0.075],
        [0.022, V - 0.06],
        [0.028, V - 0.04],
        [0.026, V - 0.02],
        [0.012, V - 0.004],
        [0, V],
      ];
      d.add(H(G, m, 0, I, { segs: 16, tile: 0.8 }), t.wood);
    },
    r = 1.06,
    y = 0.68,
    l = 0.045;
  (c(f + l, s - l, r),
    c(Y - l, s - l, r),
    c(f + l, n + l, y),
    c(Y - l, n + l, y),
    d.add(
      Z(
        f + 0.02,
        0.22,
        n + l + 0.03,
        f + 0.055,
        0.39,
        s - l - 0.03,
        0.006,
        "z",
      ),
      t.wood,
    ),
    d.add(
      Z(
        Y - 0.055,
        0.22,
        n + l + 0.03,
        Y - 0.02,
        0.39,
        s - l - 0.03,
        0.006,
        "z",
      ),
      t.wood,
    ));
  const N = s - l,
    b = f + l + 0.03,
    A = Y - l - 0.03;
  d.add(Z(b, 0.3, N - 0.018, A, 0.37, N + 0.018, 0.006, "x"), t.wood);
  for (let m = 0; m < 5; m++) {
    const I = b + (m * (A - b)) / 5 + 0.004,
      V = b + ((m + 1) * (A - b)) / 5 - 0.004,
      G = 0.86 + 0.08 * Math.sin(Math.PI * (((I + V) / 2 - b) / (A - b)));
    d.add(Z(I, 0.36, N - 0.012, V, G, N + 0.012, 0.004, "y"), t.wood);
  }
  {
    const m = [];
    for (let G = 0; G <= 24; G++) {
      const _ = G / 24,
        j = b - 0.02 + _ * (A - b + 0.04);
      m.push([j, 0.86 + 0.085 * Math.sin(Math.PI * _)]);
    }
    const V = lo(m, N, 0.075, 0.032);
    d.add(V, t.wood);
  }
  const P = n + l;
  for (let m = 0; m < 3; m++) {
    const I = b + (m * (A - b)) / 3 + 0.004,
      V = b + ((m + 1) * (A - b)) / 3 - 0.004;
    d.add(Z(I, 0.3, P - 0.012, V, 0.55, P + 0.012, 0.004, "y"), t.wood);
  }
  d.add(
    Z(b - 0.02, 0.55, P - 0.024, A + 0.02, 0.6, P + 0.024, 0.008, "x"),
    t.wood,
  );
  for (let m = n + 0.2; m < s - 0.1; m += 0.28)
    d.add(Z(f + 0.05, 0.33, m, Y - 0.05, 0.36, m + 0.09, 0.004, "x"), t.plank);
  const w = f + 0.07,
    E = Y - 0.07,
    X = n + 0.075,
    v = s - 0.075,
    W = 0.56;
  d.add(Z(w, 0.36, X, E, W - 0.02, v, 0.05, "z", 3), t.ticking);
  const R = (m, I, V) =>
      V *
      (i.fbm2(m * 3.1, I * 3.1, 3) * 0.6 +
        Math.pow(1 - Math.abs(i.n2(m * 6.5 + 3, I * 2.7)), 6) * 0.8),
    a = (m, I) =>
      -0.018 *
      Math.exp(-(((m - 8.6) / 0.28) ** 2)) *
      r0(204.8, 205.3, I) *
      (1 - r0(206, 206.4, I)),
    e = (m, I) => W + 0.004 + a(m, I) + R(m, I, 0.004),
    h = wt({
      x0: w + 0.01,
      x1: E - 0.01,
      z0: X + 0.01,
      z1: v - 0.01,
      top: e,
      hang: { w: 0.14, e: 0.14, n: 0.05, s: 0.05 },
      r: 0.05,
      res: 0.03,
      floor: 0.34,
    });
  d.add(h, t.linen);
  const g = v - 0.56,
    M = (m, I) => {
      const V = e(m, I) + 0.035,
        G = 0.006 * i.fbm2(m * 5 + 2, I * 5 - 1, 3),
        _ =
          0.012 *
          Math.pow(Math.max(0, i.n2(m * 2.2 + 7, I * 5.5)), 2) *
          r0(n + 0.1, n + 0.6, I);
      return V + G + _;
    },
    u = (m, I, V) => (G, _, j) =>
      m *
        (Math.sin(
          _ * (6.2831 / I) + V + (G === "e" ? 1.3 : G === "w" ? 2.9 : 0.4),
        ) *
          0.6 +
          i.n2(_ * 7 + V, G.charCodeAt(0)) * 0.4) *
        r0(0.02, 0.2, j) +
      0.012 * r0(0, 0.1, j),
    p = wt({
      x0: w - 0.005,
      x1: E + 0.005,
      z0: X - 0.005,
      z1: g,
      top: M,
      hang: { w: 0.3, e: 0.3, n: 0.26, s: 0 },
      r: 0.07,
      res: 0.02,
      floor: 0.08,
      fold: u(0.03, 0.34, 1.7),
      hem: (m, I) => 0.92 + 0.08 * i.n2(I * 4 + (m === "n" ? 5 : 1), 3),
    });
  d.add(p, t.quilt);
  {
    const m = V0(
      (I, V) => {
        const G = w - 0.02 + I * (E - w + 0.04),
          _ = g - 0.2 + V * 0.215,
          j =
            0.018 * Math.sin(Math.PI * tt((_ - (g - 0.2)) / 0.215, 0, 1)) +
            0.012 * r0(g - 0.05, g + 0.01, _);
        return [
          G,
          M(tt(G, w, E), Math.min(_, g)) +
            0.01 +
            j +
            0.002 * i.n2(G * 9, _ * 9),
          _,
        ];
      },
      60,
      10,
      1.3,
      0.22,
      !1,
      !1,
    );
    (yt(m), st(m, "xz", 1), d.add(m, t.backing));
    for (const I of [-1, 1]) {
      const V = V0(
        (G, _) => {
          const j = g - 0.2 + G * 0.215,
            L = I < 0 ? w - 0.02 : E + 0.02,
            J = M(tt(L, w, E), Math.min(j, g)) + 0.012;
          return [L + I * (0.01 + 0.015 * _), J - _ * 0.26, j];
        },
        8,
        10,
        0.22,
        0.26,
        !1,
        I > 0,
      );
      (st(V, "zy", 1), d.add(V, t.backing));
    }
  }
  const x = v - 0.33,
    S = (w + E) / 2;
  (vt(
    d,
    t.linen,
    i,
    S + 0.04,
    x,
    0.33,
    0.2,
    0.085,
    { x: 0.05, z: 0.02, r: 0.12, d: 0.035 },
    e(S, x) + 0.02,
    0,
    0.03,
  ),
    vt(
      d,
      t.linen,
      i,
      S - 0.03,
      v - 0.07,
      0.31,
      0.19,
      0.075,
      null,
      W + 0.2,
      -1.2,
      -0.04,
    ));
  {
    const m = X + 0.06,
      I = X + 0.42,
      V = V0(
        (G, _) => {
          const j = w - 0.03 + G * (E - w + 0.06),
            L = m + _ * (I - m),
            J = Math.sin(Math.PI * _);
          return [
            j,
            M(tt(j, w, E), L) +
              0.004 +
              0.045 * Math.pow(J, 0.4) +
              0.006 * i.n2(j * 7, L * 11),
            L,
          ];
        },
        40,
        14,
        1.4,
        0.36,
        !1,
        !1,
      );
    (yt(V), st(V, "xz", 1), d.add(V, t.wool));
  }
  return {
    group: o,
    colliders: [{ x0: f, x1: Y, z0: n, z1: s, y0: 0, y1: 0.7 }],
    sheetTop: e,
    quiltTop: M,
  };
}
function lo(z, t, k, o) {
  const d = [],
    i = [];
  for (const [s, c] of z)
    d.push(
      s,
      c + 0.01,
      t - o / 2,
      s,
      c + 0.01,
      t + o / 2,
      s,
      c - k,
      t + o / 2,
      s,
      c - k,
      t - o / 2,
    );
  const f = z.length;
  for (let s = 0; s < f - 1; s++)
    for (let c = 0; c < 4; c++) {
      const r = s * 4 + c,
        y = s * 4 + ((c + 1) % 4),
        l = (s + 1) * 4 + c,
        N = (s + 1) * 4 + ((c + 1) % 4);
      i.push(r, l, y, y, l, N);
    }
  const Y = new E0();
  (Y.setAttribute("position", new u0(d, 3)),
    Y.setIndex(i),
    Y.computeVertexNormals());
  const n = new Float32Array((d.length / 3) * 2);
  for (let s = 0; s < d.length / 3; s++)
    ((n[s * 2] = d[s * 3]), (n[s * 2 + 1] = d[s * 3 + 1]));
  return (Y.setAttribute("uv", new K0(n, 2)), uo(Y));
}
function uo(z) {
  const t = z.attributes.position,
    k = z.attributes.normal;
  let o = 0,
    d = 0;
  for (let f = 0; f < t.count; f++) ((o += t.getY(f)), (d += t.getZ(f)));
  ((o /= t.count), (d /= t.count));
  let i = 0;
  for (let f = 0; f < t.count; f++)
    i += (t.getY(f) - o) * k.getY(f) + (t.getZ(f) - d) * k.getZ(f);
  if (i < 0) {
    const f = z.index.array;
    for (let Y = 0; Y < f.length; Y += 3) {
      const n = f[Y + 1];
      ((f[Y + 1] = f[Y + 2]), (f[Y + 2] = n));
    }
    z.computeVertexNormals();
  }
  return z;
}
function yt(z) {
  const t = z.attributes.normal;
  let k = 0;
  for (let o = 0; o < t.count; o++) k += t.getY(o);
  if (k < 0) {
    const o = z.index.array;
    for (let d = 0; d < o.length; d += 3) {
      const i = o[d + 1];
      ((o[d + 1] = o[d + 2]), (o[d + 2] = i));
    }
    z.computeVertexNormals();
  }
  return z;
}
function vt(z, t, k, o, d, i, f, Y, n, s, c = 0, r = 0) {
  const l = (P, w) =>
      Math.pow(Math.max(0, 1 - Math.pow(Math.abs(P), 2.4)), 0.6) *
      Math.pow(Math.max(0, 1 - Math.pow(Math.abs(w), 2.2)), 0.6),
    N = (P, w, E) => {
      const X = P * 2 - 1,
        v = w * 2 - 1,
        W = X * i * (1 - 0.06 * (1 - v * v)),
        R = v * f * (1 - 0.05 * (1 - X * X)),
        a = l(X, v);
      let e;
      if (E) {
        if (((e = Y * Math.pow(a, 0.7)), n)) {
          const h = ((W - n.x) ** 2 + (R - n.z) ** 2) / (n.r * n.r);
          e -= n.d * Math.exp(-h) * a;
        }
        e +=
          0.004 * k.n2(W * 16 + o, R * 16) * a +
          0.003 * Math.pow(1 - Math.abs(k.n2(W * 8, R * 8 + 5)), 5) * a;
      } else e = -Math.min(Y * a, Y * 0.35);
      return [W, e, R];
    },
    b = V0((P, w) => N(P, w, !0), 30, 30, 2 * i, 2 * f, !1, !1),
    A = V0((P, w) => N(P, w, !1), 30, 30, 2 * i, 2 * f, !1, !0);
  yt(b);
  {
    const P = A.attributes.normal;
    let w = 0;
    for (let E = 0; E < P.count; E++) w += P.getY(E);
    if (w > 0) {
      const E = A.index.array;
      for (let X = 0; X < E.length; X += 3) {
        const v = E[X + 1];
        ((E[X + 1] = E[X + 2]), (E[X + 2] = v));
      }
      A.computeVertexNormals();
    }
  }
  for (const P of [b, A])
    (P.rotateX(c),
      P.rotateY(r),
      P.translate(o, s, d),
      st(P, "xz", 1),
      z.add(P, t));
}
function pt(z, t, k, o, d, { tilt: i = 0 } = {}) {
  const f = p0([k, 0, o], [0, d, 0]),
    Y = [],
    n = 0.46,
    s = (c, r, y, l = 0) => {
      const N = H(
        [
          [0, 0],
          [0.019, 0],
          [0.02, 0.02],
          [0.017, 0.12],
          [0.021, 0.14],
          [0.017, 0.16],
          [0.017, y - 0.06],
          [0.021, y - 0.04],
          [0.014, y - 0.015],
          [0, y],
        ],
        0,
        0,
        0,
        { segs: 10, tile: 0.8 },
      );
      return (
        l && N.applyMatrix4(new F0().makeRotationX(-l)),
        N.translate(c, 0, r),
        N
      );
    };
  (Y.push(
    s(-0.19, 0.17, n),
    s(0.19, 0.17, n),
    s(-0.18, -0.17, 1, 0.08),
    s(0.18, -0.17, 1, 0.08),
  ),
    Y.push(Z(-0.215, n - 0.03, -0.2, 0.215, n, 0.2, 0.012, "x", 2)));
  for (const c of [0.64, 0.77, 0.9]) {
    const r = -0.17 - 0.08 * c - 0.005;
    Y.push(
      Z(-0.17, c - 0.035, r - 0.012, 0.17, c + 0.035, r + 0.012, 0.005, "x"),
    );
  }
  Y.push(
    d0([-0.19, 0.17, 0.17], [0.19, 0.17, 0.17], 0.011, 8),
    d0([-0.19, 0.12, 0.17], [-0.18, 0.12, -0.17], 0.01, 8),
    d0([0.19, 0.12, 0.17], [0.18, 0.12, -0.17], 0.01, 8),
    d0([-0.18, 0.2, -0.18], [0.18, 0.2, -0.18], 0.01, 8),
  );
  for (const c of Y)
    (i && c.applyMatrix4(new F0().makeRotationZ(i)),
      c.applyMatrix4(f),
      z.add(c, t.wood));
}
function fo(z, t, k, o, d) {
  const i = new R0();
  i.name = "house_table";
  const f = k,
    Y = C0(31),
    n = z.rng(515),
    { cx: s, cz: c, hx: r, hz: y, top: l } = so,
    N = (2 * y - 0.006) / 3;
  for (let W = 0; W < 3; W++) {
    const R = c - y + W * (N + 0.003);
    f.add(
      Z(
        s - r,
        l - 0.042,
        R,
        s + r,
        l - (W === 1 ? 0.001 : 0),
        R + N,
        0.008,
        "x",
        2,
      ),
      t.wood,
    );
  }
  for (const W of [-1, 1])
    for (const R of [-1, 1])
      f.add(
        Z(
          s + W * (r - 0.1) - 0.03,
          0,
          c + R * (y - 0.08) - 0.03,
          s + W * (r - 0.1) + 0.03,
          l - 0.04,
          c + R * (y - 0.08) + 0.03,
          0.006,
          "y",
        ),
        t.wood,
      );
  for (const W of [-1, 1])
    f.add(
      Z(
        s - r + 0.1,
        l - 0.14,
        c + W * (y - 0.08) - 0.011,
        s + r - 0.1,
        l - 0.042,
        c + W * (y - 0.08) + 0.011,
        0.004,
        "x",
      ),
      t.wood,
    );
  for (const W of [-1, 1])
    f.add(
      Z(
        s + W * (r - 0.1) - 0.011,
        l - 0.14,
        c - y + 0.08,
        s + W * (r - 0.1) + 0.011,
        l - 0.042,
        c + y - 0.08,
        0.004,
        "z",
      ),
      t.wood,
    );
  const b = [s - 0.3, c - y - 0.22, 0.04],
    A = [s + 0.34, c + y + 0.4, Math.PI + 0.42];
  (pt(f, t, b[0], b[1], b[2]),
    pt(f, t, A[0], A[1], A[2]),
    pt(f, t, xt.x, xt.z, xt.yaw));
  const P = l,
    w = [5, 203.14];
  o.add(
    H(
      [
        [0, 0],
        [0.06, 0],
        [0.075, 0.004],
        [0.11, 0.012],
        [0.118, 0.018],
        [0.112, 0.019],
        [0.07, 0.01],
        [0, 0.009],
      ],
      w[0],
      P,
      w[1],
      { segs: 36 },
    ),
    t.enamelV,
  );
  {
    const W = Q0(0, 0, 0, 0.07, 18, 12, [1.25, 0.62, 0.9]),
      R = W.attributes.position;
    for (let h = 0; h < R.count; h++)
      (R.getX(h) > 0.035 && R.setX(h, 0.035 + (R.getX(h) - 0.035) * 0.1),
        R.getY(h) < -0.01 && R.setY(h, -0.01));
    (W.computeVertexNormals(),
      T(W, (h, g, M, u) => (u > 0.8 ? [0.9, 0.78, 0.55] : [0.55, 0.3, 0.13])),
      W.rotateY(0.6),
      W.translate(w[0] - 0.01, P + 0.03, w[1] + 0.01),
      o.add(W, t.food));
    for (let h = 0; h < 7; h++) {
      const g = Q0(
        w[0] + (n() - 0.5) * 0.2,
        P + 0.013,
        w[1] + (n() - 0.5) * 0.18,
        0.004 + n() * 0.003,
        5,
        4,
      );
      (Q(g, [0.6, 0.4, 0.2]), o.add(g, t.food, { cast: !1 }));
    }
    new R0();
    const a = Z(0, -0.0012, -0.011, 0.13, 0.0012, 0.011, 0.001, "x");
    o.add(
      a.applyMatrix4(
        p0([w[0] + 0.02, P + 0.02, w[1] - 0.07], [0, -0.35, 0.05]),
      ),
      t.iron,
      { cast: !1 },
    );
    const e = Z(-0.09, -0.008, -0.012, 0, 0.008, 0.012, 0.005, "x");
    (Q(e, [0.3, 0.2, 0.13]),
      o.add(
        e.applyMatrix4(
          p0([w[0] + 0.02, P + 0.02, w[1] - 0.07], [0, -0.35, 0.05]),
        ),
        t.misc,
        { cast: !1 },
      ));
  }
  const E = [4.8, 203.46];
  o.add(
    H(
      [
        [0, 0],
        [0.035, 0],
        [0.04, 0.006],
        [0.07, 0.035],
        [0.078, 0.06],
        [0.074, 0.062],
        [0.066, 0.038],
        [0.034, 0.012],
        [0, 0.011],
      ],
      E[0],
      P,
      E[1],
      { segs: 32 },
    ).applyMatrix4(new F0()),
    t.enamelV,
  );
  {
    const W = H(
      [
        [0, 0.03],
        [0.05, 0.03],
        [0.062, 0.036],
        [0, 0.036],
      ],
      E[0],
      P,
      E[1],
      { segs: 24 },
    );
    (T(W, (R, a, e) =>
      Y.n2(R * 90, e * 90) > 0.3 ? [0.62, 0.45, 0.22] : [0.34, 0.18, 0.08],
    ),
      o.add(W, t.food, { cast: !1 }));
  }
  {
    new R0();
    const W = new $t(0.022, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    (W.scale(1, 0.35, 1.4), W.rotateX(Math.PI));
    const R = p0([E[0] + 0.02, P + 0.045, E[1] - 0.01], [0.5, 0.9, 0.35]);
    (o.add(W.applyMatrix4(R), t.iron, { cast: !1 }),
      o.add(
        d0(
          [E[0] + 0.02, P + 0.045, E[1] - 0.01],
          [E[0] + 0.1, P + 0.13, E[1] - 0.09],
          0.004,
          6,
        ),
        t.iron,
        { cast: !1 },
      ));
  }
  const X = [5.32, 203.56];
  {
    const W = H(
        [
          [0, 0],
          [0.036, 0],
          [0.04, 0.004],
          [0.04, 0.09],
          [0.042, 0.094],
          [0.038, 0.094],
          [0.036, 0.004],
          [0, 0.004],
        ],
        0,
        0,
        0,
        { segs: 24 },
      ),
      R = new L0(0.028, 0.005, 6, 16, Math.PI * 1.1);
    (R.rotateZ(-Math.PI / 2 - 0.15), R.translate(0.04, 0.05, 0));
    const a = p0([X[0], P + 0.042, X[1]], [0, 0.9, Math.PI / 2 + 0.05]);
    (Q(W, [0.86, 0.9, 0.92]),
      Q(R, [0.86, 0.9, 0.92]),
      o.add(W.applyMatrix4(a), t.enamelV, { cast: !1 }),
      o.add(R.applyMatrix4(a), t.enamelV, { cast: !1 }));
  }
  {
    d.push(
      H(
        [
          [0, 0],
          [0.042, 0],
          [0.046, 0.01],
          [0.046, 0.1],
          [0.036, 0.116],
          [0.034, 0.128],
          [0.036, 0.132],
          [0, 0.132],
        ],
        4.88,
        P,
        203.02,
        { segs: 24 },
      ),
    );
    const a = H(
      [
        [0, 0.004],
        [0.043, 0.004],
        [0.043, 0.085],
        [0, 0.085],
      ],
      4.88,
      P,
      203.02,
      { segs: 20 },
    );
    (Q(a, [0.42, 0.06, 0.05]), o.add(a, t.food, { cast: !1 }));
    const e = H(
      [
        [0, 0.142],
        [0.03, 0.14],
        [0.042, 0.13],
        [0.047, 0.11],
        [0.049, 0.1],
        [0.046, 0.098],
      ],
      4.88,
      P,
      203.02,
      { segs: 20 },
    );
    {
      const h = e.attributes.position;
      for (let g = 0; g < h.count; g++) {
        const M = Math.atan2(h.getZ(g) - 203.02, h.getX(g) - 4.88);
        h.setY(
          g,
          h.getY(g) -
            0.012 *
              Math.max(0, Math.sin(M * 5)) *
              (0.142 - (h.getY(g) - P)) *
              20,
        );
      }
      e.computeVertexNormals();
    }
    (Q(e, [0.78, 0.24, 0.2]), o.add(e, t.woolV, { cast: !1 }));
  }
  const v = [
    { x0: s - r, x1: s + r, z0: c - y, z1: c + y, y0: 0, y1: l + 0.02 },
    {
      x0: b[0] - 0.23,
      x1: b[0] + 0.23,
      z0: b[1] - 0.24,
      z1: b[1] + 0.22,
      y0: 0,
      y1: 0.5,
    },
    {
      x0: A[0] - 0.25,
      x1: A[0] + 0.25,
      z0: A[1] - 0.25,
      z1: A[1] + 0.25,
      y0: 0,
      y1: 0.5,
    },
  ];
  return { group: i, colliders: v, cup: X, plate: w, bowl: E };
}
const O0 = {
    calendar: [0, 0.42, 0.36, 1],
    photo: [0.38, 0.72, 0.6, 1],
    cartridges: [0.38, 0.42, 0.6, 0.6],
    jar: [
      [0.62, 0.86, 0.81, 1],
      [0.81, 0.86, 1, 1],
      [0.62, 0.72, 0.81, 0.86],
      [0.81, 0.72, 1, 0.86],
    ],
    tin: [
      [0, 0, 0.5, 0.1],
      [0.5, 0, 1, 0.1],
      [0, 0.1, 0.5, 0.2],
      [0.5, 0.1, 1, 0.2],
      [0, 0.2, 0.5, 0.3],
      [0.5, 0.2, 1, 0.3],
      [0, 0.3, 0.5, 0.4],
      [0.5, 0.3, 1, 0.4],
    ],
  },
  i0 = (z, t) => Q(z, t);
function $0(z, t) {
  const k = z.attributes.uv;
  for (let o = 0; o < k.count; o++)
    k.setXY(
      o,
      t[0] + (t[2] - t[0]) * k.getX(o),
      t[1] + (t[3] - t[1]) * k.getY(o),
    );
  return z;
}
function X0(z, t, k, o, d, i, f, Y, n = [0.55, 0.5, 0.42]) {
  const s = new St(i, i, f * 0.84, 24, 1, !0);
  (s.translate(0, f * 0.5, 0),
    $0(s, Y),
    s.translate(k, o, d),
    z.add(s, t.labels));
  const c = H(
      [
        [i * 0.98, 0],
        [i * 1.03, 0.004],
        [i * 1.02, f * 0.08],
        [i, f * 0.085],
      ],
      k,
      o,
      d,
      { segs: 24 },
    ),
    r = H(
      [
        [i, f * 0.915],
        [i * 1.02, f * 0.92],
        [i * 1.03, f - 0.004],
        [i * 0.94, f],
        [0, f - 0.002],
      ],
      k,
      o,
      d,
      { segs: 24 },
    );
  (Q(c, n), Q(r, n), z.add(c, t.misc), z.add(r, t.misc));
}
function H0(z, t, k, o, d, i, f, Y, n, s, c, r = "tin") {
  k.push(
    H(
      [
        [0, 0],
        [f * 0.92, 0],
        [f, f * 0.25],
        [f, Y * 0.82],
        [f * 0.8, Y * 0.9],
        [f * 0.78, Y],
        [0, Y],
      ],
      o,
      d,
      i,
      { segs: 24 },
    ),
  );
  const y = H(
    [
      [0, 0.004],
      [f * 0.93, 0.004],
      [f * 0.95, Y * 0.82 * s],
      [0, Y * 0.82 * s],
    ],
    o,
    d,
    i,
    { segs: 18 },
  );
  if ((Q(y, n), z.add(y, t.misc, { cast: !1 }), c)) {
    const l = new St(f * 1.01, f * 1.01, Y * 0.34, 18, 1, !0, -0.9, 1.8);
    (l.translate(0, Y * 0.45, 0),
      $0(l, c),
      l.translate(o, d, i),
      z.add(l, t.labels, { cast: !1 }));
  }
  if (r === "tin") {
    const l = H(
      [
        [0, Y + 0.012],
        [f * 0.84, Y + 0.012],
        [f * 0.86, Y - 0.012],
        [f * 0.83, Y - 0.012],
      ],
      o,
      d,
      i,
      { segs: 18 },
    );
    (Q(l, [0.5, 0.46, 0.38]), z.add(l, t.misc));
  } else {
    const l = H(
      [
        [0, Y + 0.012],
        [f * 0.7, Y + 0.008],
        [f * 0.92, Y - 0.01],
        [f * 0.95, Y - 0.03],
        [f * 0.9, Y - 0.032],
      ],
      o,
      d,
      i,
      { segs: 18 },
    );
    (Q(l, r), z.add(l, t.woolV, { cast: !1 }));
  }
}
function xo(z, t, k, o, d) {
  const i = C0(222),
    f = z.rng(626),
    Y = [];
  {
    const n = K.x0 + 0.02,
      s = K.x0 + 0.5,
      c = 200.46,
      r = 201.5,
      y = 1.92,
      l = t.paint;
    (k.add(Z(n, 0, c + 0.02, s - 0.02, 0.1, r - 0.02, 0.008, "z"), l),
      k.add(Z(n, 0.1, c, s - 0.03, y - 0.08, c + 0.024, 0.006, "y"), l),
      k.add(Z(n, 0.1, r - 0.024, s - 0.03, y - 0.08, r, 0.006, "y"), l),
      k.add(
        Z(
          n - 0.01,
          y - 0.1,
          c - 0.03,
          s + 0.02,
          y - 0.06,
          r + 0.03,
          0.008,
          "z",
        ),
        l,
      ),
      k.add(
        Z(n - 0.02, y - 0.06, c - 0.05, s + 0.04, y, r + 0.05, 0.01, "z"),
        l,
      ),
      k.add(Z(n, 0.1, c, s - 0.03, 0.13, r, 0.004, "z"), l),
      k.add(Z(n, 0.88, c, s - 0.02, 0.92, r, 0.005, "z"), l));
    const N = s - 0.03;
    for (const [b, A] of [
      [c + 0.03, (c + r) / 2 - 0.004],
      [(c + r) / 2 + 0.004, r - 0.03],
    ]) {
      (k.add(Z(N - 0.01, 0.74, b, N + 0.012, 0.87, A, 0.005, "z"), l),
        k.add(Z(N - 0.01, 0.14, b, N + 0.012, 0.72, A, 0.005, "y"), l),
        k.add(
          Z(N + 0.004, 0.2, b + 0.05, N + 0.018, 0.66, A - 0.05, 0.008, "y"),
          l,
        ),
        k.add(Z(N - 0.01, 0.94, b, N + 0.012, y - 0.12, A, 0.005, "y"), l),
        k.add(
          Z(N + 0.004, 1, b + 0.05, N + 0.018, y - 0.18, A - 0.05, 0.008, "y"),
          l,
        ));
      for (const P of [0.8, 0.46, 1.4])
        o.add(
          i0(
            H(
              [
                [0, 0],
                [0.012, 0],
                [0.014, 0.012],
                [0.008, 0.02],
                [0, 0.021],
              ],
              N + 0.012,
              P,
              (b + A) / 2 + (P === 0.8 ? 0 : b < (c + r) / 2 ? 0.2 : -0.2),
              { segs: 10, rot: [0, 0, -Math.PI / 2] },
            ),
            [0.4, 0.3, 0.2],
          ),
          t.misc,
        );
    }
    o.add(
      i0(
        H(
          [
            [0, 0],
            [0.09, 0],
            [0.11, 0.1],
            [0.115, 0.13],
            [0.105, 0.132],
            [0, 0.02],
          ],
          (n + s) / 2,
          y,
          c + 0.3,
          { segs: 20 },
        ),
        [0.6, 0.48, 0.3],
      ),
      t.misc,
    );
    {
      const b = H(
        [
          [0, 0],
          [0.07, 0],
          [0.085, 0.06],
          [0.08, 0.16],
          [0.06, 0.2],
          [0.058, 0.215],
          [0, 0.215],
        ],
        (n + s) / 2,
        y,
        r - 0.28,
        { segs: 20 },
      );
      (T(b, (A, P) => (P > y + 0.12 ? [0.42, 0.32, 0.22] : [0.72, 0.64, 0.52])),
        o.add(b, t.enamelV));
    }
    Y.push({ x0: K.x0 - 0.1, x1: s, z0: c - 0.05, z1: r + 0.05, y0: 0, y1: y });
  }
  {
    const n = K.x1 - 0.005,
      s = n - 0.25,
      c = 200.46,
      r = 201.36;
    for (const l of [1.06, 1.42, 1.78]) {
      const N = Z(s, l - 0.026, c, n, l, r, 0.005, "z");
      (T(N, z0), k.add(N, t.plank));
      for (const b of [c + 0.1, r - 0.1]) {
        const A = Z(
          n - 0.2,
          l - 0.16,
          b - 0.012,
          n,
          l - 0.026,
          b + 0.012,
          0.004,
          "x",
        );
        (T(A, z0), k.add(A, t.plank));
      }
    }
    const y = O0;
    (H0(
      o,
      t,
      d,
      s + 0.12,
      1.06,
      c + 0.12,
      0.045,
      0.13,
      [0.45, 0.06, 0.05],
      0.8,
      y.jar[0],
      "tin",
    ),
      H0(
        o,
        t,
        d,
        s + 0.13,
        1.06,
        c + 0.25,
        0.042,
        0.12,
        [0.62, 0.36, 0.06],
        0.7,
        y.jar[1],
        [0.6, 0.55, 0.45],
      ),
      H0(
        o,
        t,
        d,
        s + 0.11,
        1.06,
        c + 0.37,
        0.048,
        0.15,
        [0.3, 0.34, 0.1],
        0.85,
        y.jar[2],
        "tin",
      ),
      X0(o, t, s + 0.12, 1.06, c + 0.55, 0.055, 0.15, y.tin[0]),
      X0(o, t, s + 0.13, 1.06, c + 0.7, 0.045, 0.11, y.tin[3]),
      X0(o, t, s + 0.12, 1.42, c + 0.1, 0.05, 0.13, y.tin[1]),
      X0(o, t, s + 0.11, 1.42, c + 0.23, 0.04, 0.1, y.tin[2]));
    for (let l = 0; l < 4; l++)
      o.add(
        H(
          [
            [0, 0],
            [0.07, 0],
            [0.1, 0.012],
            [0.105, 0.016],
            [0.098, 0.016],
            [0.07, 0.004],
            [0, 0.004],
          ],
          s + 0.12,
          1.42 + l * 0.013,
          c + 0.43,
          { segs: 28 },
        ),
        t.enamelV,
      );
    o.add(
      H(
        [
          [0, 0],
          [0.036, 0],
          [0.038, 0.004],
          [0.038, 0.085],
          [0.041, 0.088],
          [0.036, 0.088],
          [0.034, 0.006],
          [0, 0.006],
        ],
        s + 0.12,
        1.42,
        c + 0.63,
        { segs: 20 },
      ),
      t.enamelV,
    );
    {
      const l = new L0(0.025, 0.005, 6, 14, Math.PI);
      (l.rotateZ(-Math.PI / 2),
        l.rotateY(-Math.PI / 2),
        l.translate(s + 0.12, 1.42 + 0.045, c + 0.63 + 0.038),
        o.add(l, t.enamelV));
    }
    (X0(o, t, s + 0.12, 1.42, c + 0.78, 0.042, 0.12, y.tin[4]),
      H0(
        o,
        t,
        d,
        s + 0.12,
        1.78,
        c + 0.13,
        0.06,
        0.2,
        [0.82, 0.8, 0.74],
        0.6,
        y.jar[3],
        "tin",
      ),
      H0(
        o,
        t,
        d,
        s + 0.12,
        1.78,
        c + 0.3,
        0.055,
        0.18,
        [0.8, 0.72, 0.56],
        0.45,
        null,
        "tin",
      ));
    {
      const l = s + 0.12,
        N = c + 0.5,
        b = Z(
          l - 0.055,
          1.78,
          N - 0.055,
          l + 0.055,
          1.9,
          N + 0.055,
          0.006,
          "y",
        );
      (o.add(i0(b, [0.32, 0.22, 0.14]), t.misc),
        o.add(
          H(
            [
              [0, 0],
              [0.045, 0],
              [0.05, 0.02],
              [0.03, 0.05],
              [0.012, 0.06],
              [0, 0.062],
            ],
            l,
            1.9,
            N,
            { segs: 16 },
          ),
          t.iron,
        ),
        o.add(d0([l, 1.965, N], [l + 0.06, 1.975, N], 0.004, 6), t.iron),
        o.add(
          i0(Q0(l + 0.065, 1.99, N, 0.012, 8, 6), [0.3, 0.2, 0.12]),
          t.misc,
        ));
    }
    X0(o, t, s + 0.12, 1.78, c + 0.7, 0.05, 0.16, y.tin[5]);
    {
      const l = n - 0.26,
        N = c + 0.34,
        b = H(
          [
            [0, 0],
            [0.19, 0],
            [0.205, 0.08],
            [0.215, 0.26],
            [0.205, 0.44],
            [0.19, 0.52],
            [0, 0.52],
          ],
          l,
          0.02,
          N,
          { segs: 24, tile: 0.6 },
        ),
        A = b.attributes.uv,
        P = b.attributes.position;
      for (let w = 0; w < A.count; w++)
        A.setXY(w, P.getY(w) * 1, A.getX(w) * 0.5);
      (T(b, z0), k.add(b, t.plank));
      for (const w of [0.08, 0.44]) {
        const E = new L0(0.212, 0.008, 6, 36);
        (E.rotateX(Math.PI / 2), E.translate(l, 0.02 + w, N), k.add(E, t.iron));
      }
      Y.push({
        x0: l - 0.22,
        x1: K.x1,
        z0: N - 0.22,
        z1: N + 0.22,
        y0: 0,
        y1: 0.54,
      });
    }
  }
  {
    const c = K.z1 - 0.01,
      r = c - 0.48,
      y = 0.84,
      l = (X, v, W) => z0(X, v, W),
      N = (X) => {
        (T(X, l), k.add(X, t.plank));
      };
    (N(Z(2.93, y - 0.04, r, 4.72, y, c, 0.008, "x", 2)),
      N(
        Z(2.93 + 0.03, 0.24, r + 0.03, 4.72 - 0.03, 0.27, c - 0.02, 0.004, "x"),
      ));
    for (const X of [2.93 + 0.04, 4.72 - 0.04])
      for (const v of [r + 0.04, c - 0.04])
        N(Z(X - 0.03, 0, v - 0.03, X + 0.03, y - 0.04, v + 0.03, 0.006, "y"));
    N(
      Z(
        2.93 + 0.02,
        y - 0.14,
        r + 0.01,
        4.72 - 0.02,
        y - 0.04,
        r + 0.035,
        0.004,
        "x",
      ),
    );
    const b = 3.15,
      A = (r + c) / 2 - 0.02;
    o.add(
      H(
        [
          [0, 0],
          [0.1, 0],
          [0.12, 0.01],
          [0.19, 0.085],
          [0.2, 0.1],
          [0.19, 0.102],
          [0.18, 0.09],
          [0.11, 0.016],
          [0, 0.014],
        ],
        b,
        y,
        A,
        { segs: 36 },
      ),
      t.enamelV,
    );
    const P = H(
      [
        [0, 0],
        [0.055, 0],
        [0.06, 0.01],
        [0.075, 0.08],
        [0.07, 0.14],
        [0.05, 0.19],
        [0.048, 0.22],
        [0.058, 0.25],
        [0.056, 0.254],
        [0.044, 0.25],
        [0.04, 0.22],
        [0, 0.2],
      ],
      b + 0.03,
      y + 0.015,
      A + 0.02,
      { segs: 28 },
    );
    o.add(P, t.enamelV);
    {
      const X = new L0(0.06, 0.008, 6, 16, Math.PI);
      (X.rotateZ(-Math.PI / 2),
        X.translate(b + 0.03 + 0.07, y + 0.17, A + 0.02),
        o.add(X, t.enamelV));
    }
    {
      const X = Z(3.33, y, A - 0.05, 3.41, y + 0.03, A + 0, 0.01);
      (Q(X, [0.86, 0.8, 0.62]), o.add(X, t.misc));
    }
    const w = 4.72 + 0.24,
      E = c - 0.26;
    {
      const X = H(
          [
            [0, 0],
            [0.13, 0],
            [0.135, 0.01],
            [0.16, 0.3],
            [0.155, 0.305],
            [0.13, 0.02],
            [0, 0.02],
          ],
          w,
          0.02,
          E,
          { segs: 24 },
        ),
        v = X.attributes.uv,
        W = X.attributes.position;
      for (let R = 0; R < v.count; R++) v.setXY(R, W.getY(R), v.getX(R) * 0.4);
      (T(X, l), k.add(X, t.plank));
    }
    for (const X of [0.06, 0.26]) {
      const v = new L0(0.135 + X * 0.085, 0.006, 6, 30);
      (v.rotateX(Math.PI / 2), v.translate(w, 0.02 + X, E), k.add(v, t.iron));
    }
    {
      const X = H(
        [
          [0, 0.2],
          [0.152, 0.2],
          [0, 0.2],
        ],
        w,
        0.02,
        E,
        { segs: 24 },
      );
      (Q(X, [0.05, 0.06, 0.06]), o.add(X, t.misc, { cast: !1 }));
    }
    {
      const W = K.z1 - 0.02;
      o.add(d0([3.18, 1.55, W], [3.18, 1.55, W - 0.05], 0.003, 5), t.iron);
      const R = H(
        [
          [0, 0],
          [0.1, 0],
          [0.12, 0.04],
          [0.114, 0.042],
          [0.094, 0.006],
          [0, 0.006],
        ],
        0,
        0,
        0,
        { segs: 28 },
      );
      (R.rotateX(-Math.PI / 2),
        R.translate(3.18, 1.55 - 0.36, W - 0.03),
        o.add(R, t.iron),
        o.add(
          Z(
            3.18 - 0.012,
            1.55 - 0.26,
            W - 0.028,
            3.18 + 0.012,
            1.55 + 0.01,
            W - 0.018,
            0.004,
            "y",
          ),
          t.iron,
        ));
    }
    Y.push({
      x0: 2.93 - 0.02,
      x1: 4.72 + 0.4,
      z0: r - 0.02,
      z1: K.z1,
      y0: 0,
      y1: y,
    });
  }
  {
    const n = K.z0 + 0.005,
      s = 1.79,
      c = [7.06, 7.32, 7.58, 7.84];
    for (const l of c)
      k.add(
        U0([l, s, n - 0.02], [l, s + 0.02, n + 0.13], 0.016, {
          radial: 8,
          tint: () => [0.9, 0.7, 0.5],
        }),
        t.log,
      );
    const r = (l, N, b, A, P, w = 0) => {
      const E = t.woolV,
        X = C0(P),
        v = V0(
          (R, a) => {
            const e = (R - 0.5) * Math.PI * 1.05,
              h = a * N,
              g = r0(0, 0.14, h),
              M =
                b * (0.25 + 0.75 * g) * (1 + 0.08 * a) +
                0.015 * X.n2(R * 9, a * 3),
              u = (0.05 + 0.1 * g) * (1 + 0.15 * a),
              p = 0.012 * Math.sin(R * 22 + P) * a;
            return [
              l + Math.sin(e) * M * 1 + p * 0.3,
              s + 0.04 - h,
              n + 0.02 + Math.cos(e) * u + p + (w ? 0.03 * a : 0),
            ];
          },
          24,
          18,
          b * 2,
          N,
          !1,
          !1,
        );
      v.computeVertexNormals();
      const W = V0(
        (R, a) => {
          const e = a * N,
            h = r0(0, 0.14, e),
            g = b * (0.25 + 0.75 * h) * (1 + 0.08 * a);
          return [l + (R - 0.5) * 2 * g, s + 0.04 - e, n + 0.018];
        },
        8,
        8,
        b * 2,
        N,
        !1,
        !0,
      );
      for (const R of [v, W]) o.add(i0(R, A), E);
      for (const R of [-1, 1])
        o.add(
          i0(
            y0(
              [
                [l + R * b * 0.9, s - 0.12, n + 0.1],
                [l + R * b * 1.02, s - 0.35, n + 0.12],
                [l + R * b * 0.98, s - 0.62, n + 0.13],
              ],
              0.055,
              10,
              8,
            ),
            A,
          ),
          E,
        );
      o.add(
        i0(
          y0(
            [
              [l - b * 0.4, s + 0.02, n + 0.12],
              [l, s - 0.02, n + 0.16],
              [l + b * 0.4, s + 0.02, n + 0.12],
            ],
            0.03,
            10,
            6,
          ),
          A,
        ),
        E,
      );
    };
    (r(c[0], 0.95, 0.24, [0.72, 0.2, 0.17], 3),
      r(c[2], 0.86, 0.22, [0.6, 0.5, 0.34], 7, 1),
      o.add(
        i0(
          H(
            [
              [0, 0.1],
              [0.07, 0.098],
              [0.085, 0.07],
              [0.09, 0.02],
              [0.16, 0.012],
              [0.17, 0.004],
              [0.15, 0],
              [0.08, 0.01],
            ],
            0,
            0,
            0,
            { segs: 28 },
          ).applyMatrix4(p0([c[1], s - 0.08, n + 0.12], [1.25, 0, 0.12])),
          [0.4, 0.3, 0.22],
        ),
        t.woolV,
      ));
    {
      const l = V0(
        (N, b) => [
          c[3] + (N - 0.5) * 0.18 + 0.02 * Math.sin(b * 7),
          s + 0.02 - b * 0.7 * (N < 0.5 ? 1 : 0.8),
          n + 0.05 + 0.03 * Math.sin(N * Math.PI) + 0.01 * Math.sin(b * 9),
        ],
        6,
        20,
        0.18,
        0.7,
        !1,
        !1,
      );
      o.add(i0(l, [0.48, 0.56, 0.66]), t.woolV);
    }
    const y = (l, N, b, A) => {
      const P = [];
      P.push(
        H(
          [
            [0, 0],
            [0.045, 0],
            [0.05, 0.04],
            [0.048, 0.2],
            [0.052, 0.3],
            [0.05, 0.31],
            [0.044, 0.3],
            [0.04, 0.03],
            [0, 0.03],
          ],
          0,
          0,
          0,
          { segs: 16 },
        ),
      );
      const w = Q0(0, 0.045, 0.07, 0.06, 14, 10, [0.85, 0.75, 2]);
      {
        const X = w.attributes.position;
        for (let v = 0; v < X.count; v++) X.getY(v) < 0 && X.setY(v, 0);
        w.computeVertexNormals();
      }
      P.push(w, Z(-0.048, 0, -0.06, 0.048, 0.018, 0.2, 0.006, "z"));
      const E = A
        ? p0([l, 0.07, N], [0, b, Math.PI / 2 - 0.2])
        : p0([l, 0.02, N], [0, b, 0]);
      for (const X of P) o.add(X.applyMatrix4(E), t.leather);
    };
    (y(7.16, 200.55, 0.1, !1),
      y(7.3, 200.53, -0.05, !1),
      y(7.62, 200.62, 1.2, !0),
      y(7.76, 200.5, 0.3, !1));
  }
  {
    const n = O0.calendar,
      s = 8.42,
      c = 1.52,
      r = 0.27,
      y = 0.42,
      l = new dt(r, y, 4, 6);
    {
      const N = l.attributes.position;
      for (let b = 0; b < N.count; b++)
        N.setZ(
          b,
          0.004 * Math.sin((N.getY(b) / y + 0.5) * 3) +
            0.006 * Math.max(0, N.getY(b) / y - 0.3),
        );
    }
    (l.computeVertexNormals(),
      $0(l, n),
      l.translate(s, c, K.z0 + 0.008),
      o.add(l, t.labels, { cast: !1 }),
      o.add(
        d0(
          [s, c + y / 2 - 0.015, K.z0 - 0.01],
          [s, c + y / 2 - 0.015, K.z0 + 0.03],
          0.003,
          5,
        ),
        t.iron,
      ));
  }
  {
    const n = Et[1],
      s = Xt - jt + 0.01,
      c = [
        [0.36, [0.36, 0.42, 0.22]],
        [0.3, [0.44, 0.36, 0.2]],
        [0.4, [0.3, 0.38, 0.24]],
        [0.28, [0.5, 0.42, 0.3]],
        [0.34, [0.34, 0.4, 0.3]],
        [0.3, [0.46, 0.3, 0.34]],
      ];
    [3.42, 3.64, 3.88, 4.12, 4.36, 4.58].forEach((y, l) => {
      const [N, b] = c[l],
        A = s - 0.1 - f() * 0.06;
      o.add(
        i0(
          y0(
            [
              [y, s + 0.02, n],
              [y + 0.005, (s + A) / 2, n + 0.01],
              [y, A, n],
            ],
            0.0025,
            6,
            4,
          ),
          [0.62, 0.52, 0.36],
        ),
        t.misc,
      );
      for (let P = 0; P < 11; P++) {
        const w = f() * Math.PI * 2,
          E = 0.02 + f() * 0.05,
          X = N * (0.7 + f() * 0.3),
          v = [y + Math.cos(w) * 0.006, A + 0.02, n + Math.sin(w) * 0.006],
          W = [
            y + Math.cos(w) * E * 0.5,
            A - X * 0.5,
            n + Math.sin(w) * E * 0.5,
          ],
          R = [y + Math.cos(w) * E, A - X, n + Math.sin(w) * E],
          a = y0([v, W, R], 0.0022, 6, 3);
        (Q(a, [b[0] * 0.8, b[1] * 0.7, b[2] * 0.6]),
          o.add(a, t.herb, { cast: !1 }));
        for (let e = 0; e < 4; e++) {
          const h = 0.45 + e * 0.15,
            g = [
              v[0] + (R[0] - v[0]) * h,
              v[1] + (R[1] - v[1]) * h,
              v[2] + (R[2] - v[2]) * h,
            ],
            M = new dt(0.022, 0.05, 1, 2);
          {
            const u = M.attributes.position;
            for (let p = 0; p < u.count; p++)
              (u.setX(p, u.getX(p) * (1 - Math.abs(u.getY(p)) / 0.03)),
                u.setZ(p, 0.008 * Math.abs(u.getX(p)) * 40));
          }
          (M.computeVertexNormals(),
            M.applyMatrix4(
              p0(g, [0.4 + f() * 0.8, f() * 6.28, (f() - 0.5) * 1.2]),
            ),
            Q(M, [b[0] * (0.9 + f() * 0.2), b[1] * (0.9 + f() * 0.2), b[2]]),
            o.add(M, t.herb, { cast: !1 }));
        }
      }
      {
        const P = new L0(0.012, 0.003, 4, 10);
        (P.rotateX(Math.PI / 2),
          P.translate(y, A + 0.005, n),
          o.add(i0(P, [0.62, 0.52, 0.36]), t.misc));
      }
    });
  }
  {
    const n = K.x0 + 0.02,
      s = n + 0.5,
      c = O.hearth.z1 + 0.1,
      r = c + 0.66,
      y = 0.46,
      l = (P, w, E) => z0(P, w, E),
      N = (P) => {
        (T(P, l), k.add(P, t.plank));
      };
    (N(Z(n, 0, c, s, y, c + 0.025, 0.004, "x")),
      N(Z(n, 0, r - 0.025, s, y, r, 0.004, "x")),
      N(Z(s - 0.025, 0, c, s, y - 0.05, r, 0.004, "z")),
      N(Z(n, 0, c, n + 0.025, y, r, 0.004, "z")),
      N(Z(n, 0.02, c, s, 0.05, r, 0.004, "z")));
    for (let P = 0; P < 14; P++) {
      const w = Math.floor(P / 5),
        E = P % 5,
        X = 0.08 + w * 0.11,
        v = c + 0.1 + E * 0.12 + (f() - 0.5) * 0.03,
        W = 0.045 + f() * 0.02,
        R = 0.36 + f() * 0.08,
        a = po(R, W, f, w * 7 + E);
      (a.applyMatrix4(
        p0(
          [(n + s) / 2 + (f() - 0.5) * 0.06, X + (w > 1 ? 0.03 : 0), v],
          [0, Math.PI / 2 + (f() - 0.5) * 0.25, f() * 6.28],
        ),
      ),
        k.add(a, t.log));
    }
    Y.push({
      x0: K.x0 - 0.1,
      x1: s + 0.02,
      z0: c - 0.02,
      z1: r + 0.02,
      y0: 0,
      y1: y,
    });
    const b = O.front + 0.1,
      A = O.z0 - 0.12;
    (o.add(
      H(
        [
          [0, 0],
          [0.07, 0],
          [0.072, 0.012],
          [0.02, 0.02],
          [0, 0.02],
        ],
        b,
        0,
        A,
        { segs: 16 },
      ),
      t.iron,
    ),
      o.add(d0([b, 0.02, A], [b, 0.62, A], 0.008, 6), t.iron),
      o.add(
        y0(
          [
            [b - 0.06, 0.6, A],
            [b, 0.66, A],
            [b + 0.06, 0.6, A],
          ],
          0.005,
          8,
          5,
        ),
        t.iron,
      ));
    for (const [P, w, E] of [
      [-0.05, 0.02, 0.72],
      [0.05, -0.01, 0.7],
    ])
      (o.add(
        d0([b + P * 1.6, 0.03, A + w], [b + P, E, A + w * 0.5], 0.006, 6),
        t.iron,
      ),
        o.add(
          i0(Q0(b + P, E + 0.015, A + w * 0.5, 0.012, 8, 6), [0.8, 0.62, 0.3]),
          t.misc,
        ));
    o.add(
      Z(b - 0.1, 0.02, A - 0.02, b - 0.02, 0.028, A + 0.06, 0.002, "z"),
      t.iron,
    );
    {
      const P = O.front + 0.3,
        w = O.box.z1 + 0.25;
      (o.add(
        H(
          [
            [0, 0],
            [0.08, 0],
            [0.1, 0.02],
            [0.11, 0.07],
            [0.1, 0.12],
            [0.07, 0.15],
            [0.035, 0.16],
            [0.036, 0.17],
            [0, 0.18],
          ],
          P,
          0.035,
          w,
          { segs: 24 },
        ),
        t.iron,
      ),
        o.add(
          y0(
            [
              [P + 0.08, 0.1, w],
              [P + 0.15, 0.14, w - 0.01],
              [P + 0.19, 0.2, w - 0.02],
            ],
            0.014,
            10,
            8,
          ),
          t.iron,
        ),
        o.add(
          y0(
            [
              [P - 0.07, 0.17, w],
              [P - 0.05, 0.28, w],
              [P + 0.05, 0.28, w],
              [P + 0.07, 0.17, w],
            ],
            0.005,
            16,
            5,
          ),
          t.iron,
        ));
    }
    {
      const P = O.box.z1 - 0.04,
        w = O.box.back + 0.14;
      (o.add(d0([w, 0.15, P], [w, 0.78, P], 0.01, 6), t.iron),
        o.add(d0([w, 0.74, P], [w + 0.05, 0.74, P - 0.46], 0.009, 6), t.iron),
        o.add(d0([w, 0.3, P], [w + 0.04, 0.72, P - 0.3], 0.007, 6), t.iron));
      const E = w + 0.035,
        X = P - 0.34;
      (o.add(d0([E, 0.735, X], [E, 0.52, X], 0.004, 5), t.iron),
        o.add(
          H(
            [
              [0, 0],
              [0.07, 0],
              [0.1, 0.03],
              [0.115, 0.1],
              [0.11, 0.17],
              [0.116, 0.18],
              [0.1, 0.18],
              [0, 0.03],
            ],
            E,
            0.33,
            X,
            { segs: 24 },
          ),
          t.iron,
        ),
        o.add(
          y0(
            [
              [E - 0.11, 0.5, X],
              [E, 0.54, X],
              [E + 0.11, 0.5, X],
            ],
            0.004,
            10,
            4,
          ),
          t.iron,
        ));
    }
  }
  {
    const n = O.mantelY + 0.1,
      s = O.front + 0.02,
      c = O.z0 + 0.08;
    o.add(
      H(
        [
          [0, 0],
          [0.055, 0],
          [0.058, 0.01],
          [0.052, 0.012],
          [0.02, 0.01],
          [0.02, 0.04],
          [0.024, 0.042],
          [0, 0.042],
        ],
        s,
        n,
        c,
        { segs: 20 },
      ),
      t.iron,
    );
    {
      const r = H(
        [
          [0, 0.04],
          [0.018, 0.04],
          [0.019, 0.09],
          [0.015, 0.094],
          [0, 0.09],
        ],
        s,
        n,
        c,
        { segs: 14 },
      );
      (Q(r, [0.86, 0.8, 0.66]), o.add(r, t.misc));
    }
    {
      const r = O0.photo,
        y = O.breast[1] + 0.045,
        l = (O.z0 + O.z1) / 2 - 0.12,
        N = Z(-0.08, 0, -0.012, 0.08, 0.2, 0, 0.004, "x");
      (N.applyMatrix4(p0([y, n, l], [0.18, -Math.PI / 2 + 0.08, 0])),
        o.add(i0(N, [0.28, 0.19, 0.12]), t.misc));
      const b = new dt(0.13, 0.17);
      ($0(b, r),
        b.translate(0, 0.1, 0.002),
        b.applyMatrix4(p0([y, n, l], [0.18, -Math.PI / 2 + 0.08, 0])),
        o.add(b, t.labels, { cast: !1 }));
    }
    (X0(o, t, s - 0.02, n, O.z1 - 0.3, 0.035, 0.07, O0.tin[2]),
      o.add(
        i0(
          y0(
            [
              [s + 0.02, n + 0.012, O.z1 - 0.16],
              [s + 0.06, n + 0.016, O.z1 - 0.1],
              [s + 0.1, n + 0.02, O.z1 - 0.06],
            ],
            0.005,
            10,
            6,
          ),
          [0.22, 0.14, 0.09],
        ),
        t.misc,
      ),
      o.add(
        i0(
          H(
            [
              [0, 0],
              [0.016, 0],
              [0.019, 0.04],
              [0.015, 0.042],
              [0.013, 0.008],
              [0, 0.008],
            ],
            s + 0.01,
            n,
            O.z1 - 0.18,
            { segs: 14 },
          ),
          [0.25, 0.16, 0.1],
        ),
        t.misc,
      ));
    {
      const r = new Jt(0.09, 0.04, 0.12);
      ($0(r, O0.cartridges),
        r.translate(s - 0.015, n + 0.02, O.z0 + 0.36),
        o.add(r, t.labels));
    }
  }
  {
    const n = O.breast[1] + 0.005,
      s = (O.z0 + O.z1) / 2,
      c = 2.05,
      r = Z(n, c - 0.12, s - 0.1, n + 0.035, c + 0.12, s + 0.1, 0.012, "y");
    o.add(i0(r, [0.3, 0.2, 0.13]), t.misc);
    for (const y of [-1, 1]) {
      const l = [
          [n + 0.04, c, s + y * 0.04],
          [n + 0.12, c + 0.04, s + y * 0.15],
          [n + 0.16, c + 0.14, s + y * 0.26],
          [n + 0.14, c + 0.3, s + y * 0.3],
          [n + 0.09, c + 0.42, s + y * 0.24],
        ],
        N = y0(l, 0.016, 20, 8);
      (Q(N, [0.62, 0.52, 0.4]), o.add(N, t.misc));
      for (const [b, A, P] of [
        [1, 0.14, -0.04],
        [2, 0.13, -0.08],
        [3, 0.1, -0.1],
      ]) {
        const w = l[b],
          E = [w[0] + 0.05, w[1] + A, w[2] + y * P],
          X = y0(
            [
              w,
              [(w[0] + E[0]) / 2 + 0.02, (w[1] + E[1]) / 2, (w[2] + E[2]) / 2],
              E,
            ],
            0.009,
            8,
            6,
          );
        (Q(X, [0.66, 0.56, 0.44]), o.add(X, t.misc));
      }
    }
  }
  {
    const s = K.z1 - 0.1;
    o.add(
      i0(
        d0([6.72, 0.28, s], [6.72 - 0.1, 1.45, s + 0.05], 0.013, 8),
        [0.55, 0.42, 0.28],
      ),
      t.misc,
    );
    const c = H(
      [
        [0, 0],
        [0.09, 0],
        [0.07, 0.18],
        [0.03, 0.3],
        [0, 0.31],
      ],
      0,
      0,
      0,
      { segs: 16, scale: [1, 1, 0.35] },
    );
    {
      const r = c.attributes.position;
      for (let y = 0; y < r.count; y++)
        r.setX(y, r.getX(y) * (1 + 0.1 * i.n2(r.getY(y) * 30, y)));
      c.computeVertexNormals();
    }
    (c.applyMatrix4(p0([6.72 + 0.01, 0, s - 0.005], [0, 0.3, 0.08])),
      Q(c, [0.62, 0.52, 0.32]),
      o.add(c, t.misc));
  }
  return { colliders: Y };
}
function po(z, t, k, o) {
  const d = k() * Math.PI * 2,
    i = Math.PI * (0.5 + k() * 0.5),
    f = 8,
    Y = [],
    n = [],
    s = [],
    r = ((e) => {
      const h = [[0, 0]];
      for (let g = 0; g <= f; g++) {
        const M = d + (i * g) / f;
        h.push([Math.cos(M) * t, Math.sin(M) * t]);
      }
      return h;
    })(),
    y = (e, h, g, M, u, p, x, S) => {
      const m = Y.length / 3;
      (Y.push(...e, ...h, ...g, ...M),
        n.push(u, x, p, x, p, S, u, S),
        s.push(m, m + 1, m + 2, m, m + 2, m + 3));
    },
    l = z / 2;
  for (let e = 1; e < r.length - 1; e++) {
    const [h, g] = r[e],
      [M, u] = r[e + 1];
    y(
      [-l, h, g],
      [l, h, g],
      [l, M, u],
      [-l, M, u],
      o * 0.37,
      o * 0.37 + z / 1.8,
      0.1 + (e / f) * 0.2,
      0.1 + ((e + 1) / f) * 0.2,
    );
  }
  const N = r[1],
    b = r[r.length - 1];
  (y(
    [-l, 0, 0],
    [l, 0, 0],
    [l, N[0], N[1]],
    [-l, N[0], N[1]],
    0.2,
    0.2 + z / 1.8,
    0.4,
    0.46,
  ),
    y(
      [-l, b[0], b[1]],
      [l, b[0], b[1]],
      [l, 0, 0],
      [-l, 0, 0],
      0.5,
      0.5 + z / 1.8,
      0.4,
      0.46,
    ));
  for (const e of [-1, 1]) {
    const h = Y.length / 3,
      g = o % 4;
    for (const [M, u] of r)
      (Y.push(e * l, M, u),
        n.push((g + 0.5 + (M / t) * 0.45) / 4, 0.88 + (u / t) * 0.11));
    for (let M = 1; M < r.length - 1; M++) s.push(h, h + M, h + M + 1);
  }
  const A = new E0();
  (A.setAttribute("position", new u0(Y, 3)),
    A.setAttribute("uv", new u0(n, 2)),
    A.setIndex(s),
    A.computeVertexNormals());
  const P = A.attributes.position,
    w = A.index.array,
    E = new m0(0, Math.cos(d + i / 2) * t * 0.4, Math.sin(d + i / 2) * t * 0.4),
    X = new m0(),
    v = new m0(),
    W = new m0(),
    R = new m0(),
    a = new m0();
  for (let e = 0; e < w.length; e += 3)
    if (
      (X.fromBufferAttribute(P, w[e]),
      v.fromBufferAttribute(P, w[e + 1]),
      W.fromBufferAttribute(P, w[e + 2]),
      R.subVectors(v, X).cross(a.subVectors(W, X)),
      a
        .addVectors(X, v)
        .add(W)
        .multiplyScalar(1 / 3)
        .sub(E),
      R.dot(a) < 0)
    ) {
      const h = w[e + 1];
      ((w[e + 1] = w[e + 2]), (w[e + 2] = h));
    }
  return (A.computeVertexNormals(), Q(A, [0.95, 0.85, 0.7]), A);
}
const N0 = { cx: 6.72, cz: 204.95, rx: 1, rz: 0.66, rot: 0.08 };
function ko(z, t, k, o) {
  const d = new R0();
  d.name = "house_room";
  const i = new R0();
  ((i.name = "house_detail"), d.add(i));
  const f = new Ft("house_detail"),
    Y = [],
    n = io(z, t, o);
  d.add(n.group);
  const s = fo(z, t, o, f, Y);
  d.add(s.group);
  const c = xo(z, t, o, f, Y),
    r = new J0(At(Y), t.jar);
  ((r.name = "house:jars"),
    (r.renderOrder = 3),
    (r.receiveShadow = !0),
    i.add(r));
  {
    const l = C0(5),
      N = N0.rx - N0.rz,
      b = 10,
      A = 26,
      P = 18,
      w = Math.cos(N0.rot),
      E = Math.sin(N0.rot),
      X = [],
      v = [],
      W = [],
      R = (g) => {
        const M = [];
        for (let u = 0; u < b; u++) M.push([-N + (2 * N * u) / b, -g]);
        for (let u = 0; u < A; u++) {
          const p = -Math.PI / 2 + (Math.PI * u) / A;
          M.push([N + Math.cos(p) * g, Math.sin(p) * g]);
        }
        for (let u = 0; u < b; u++) M.push([N - (2 * N * u) / b, g]);
        for (let u = 0; u < A; u++) {
          const p = Math.PI / 2 + (Math.PI * u) / A;
          M.push([-N + Math.cos(p) * g, Math.sin(p) * g]);
        }
        return M;
      },
      a = 2 * b + 2 * A;
    for (let g = 0; g <= P; g++) {
      const M = g / P,
        u = R(M * N0.rz);
      for (const [p, x] of u) {
        const S =
          0.024 +
          0.006 * (1 - M * M) -
          0.012 * Math.pow(Math.max(0, (M - 0.93) / 0.07), 2) +
          0.0015 * l.n2(p * 6, x * 6);
        (X.push(N0.cx + p * w - x * E, S, N0.cz + p * E + x * w),
          v.push(0.5 + p / (2 * N0.rx), 0.5 + x / (2 * N0.rz)));
      }
    }
    for (let g = 0; g < P; g++)
      for (let M = 0; M < a; M++) {
        const u = g * a + M,
          p = g * a + ((M + 1) % a),
          x = u + a,
          S = p + a;
        W.push(u, x, p, p, x, S);
      }
    const e = new E0();
    (e.setAttribute("position", new u0(X, 3)),
      e.setAttribute("uv", new u0(v, 2)),
      e.setIndex(W),
      e.computeVertexNormals(),
      ho(e));
    const h = new J0(e, t.rug);
    ((h.name = "house:rug"), (h.receiveShadow = !0), d.add(h));
  }
  const y = [...n.colliders, ...s.colliders, ...c.colliders];
  return {
    group: d,
    detail: i,
    detailBucket: f,
    colliders: y,
    anim: null,
    props: { bed: n.group, table: s.group },
  };
}
function ho(z) {
  const t = z.attributes.normal;
  let k = 0;
  for (let o = 0; o < t.count; o++) k += t.getY(o);
  if (k < 0) {
    const o = z.index.array;
    for (let d = 0; d < o.length; d += 3) {
      const i = o[d + 1];
      ((o[d + 1] = o[d + 2]), (o[d + 2] = i));
    }
    z.computeVertexNormals();
  }
  return z;
}
export {
  oo as B,
  ot as F,
  Ft as H,
  K as I,
  bt as O,
  l0 as P,
  S0 as R,
  mo as S,
  so as T,
  q as W,
  Q as a,
  $ as b,
  O as c,
  j0 as d,
  wo as e,
  ko as f,
  Dt as g,
  Mo as h,
  xt as i,
  N0 as j,
  z0 as l,
  zo as m,
  U0 as p,
  po as s,
  T as v,
};
