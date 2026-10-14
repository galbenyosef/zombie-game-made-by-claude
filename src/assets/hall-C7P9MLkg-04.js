// assets/hall-C7P9MLkg 04 — math
// Lines 1284-1601 of readable/assets/hall-C7P9MLkg.pretty.js (statement-aligned).
const d0 = { x0: 5.7, x1: 6.5, z0: 1.35, z1: 12.85, t: 0.008 },
  P0 = { z: 6.95, skew: 0.2, h: 0.06, w: 0.08 };
function I0(b, C) {
  const r = d0;
  if (b < r.x0 || b > r.x1 || C < r.z0 || C > r.z1) return 0;
  const x = (b - r.x0) / (r.x1 - r.x0),
    e = P0.z + P0.skew * (b - 6.1),
    y =
      P0.h *
      Math.exp(-(((C - e) / P0.w) ** 2)) *
      (0.75 + 0.25 * Math.sin(x * Math.PI)),
    o =
      0.012 *
      Math.exp(-(((C - e - 0.28) / 0.09) ** 2)) *
      (1 - Math.abs(x - 0.4)),
    p = 0.0035 * (Math.exp(-x / 0.04) + Math.exp(-(1 - x) / 0.04)),
    v = 0.0015 * Math.sin(C * 3.1 + x * 2) * Math.sin(C * 0.9);
  return r.t + y + o + p + v;
}
function mt(b, C) {
  const r = (o, p) => b.mats.get(o, p),
    x = b.rng(90210),
    e = new Q();
  ((e.name = "hallFloor"), C.add(e));
  const y = new n0("hallFloor");
  {
    const o = d0,
      p = 10,
      v = 0.03,
      s = Math.round((o.z1 - o.z0) / v),
      Y = [],
      m = [],
      M = [];
    for (let k = 0; k <= s; k++)
      for (let h = 0; h <= p; h++) {
        const n = o.x0 + (o.x1 - o.x0) * (h / p),
          a = o.z0 + (o.z1 - o.z0) * (k / s);
        (Y.push(
          n,
          I0(
            Math.min(Math.max(n, o.x0 + 1e-5), o.x1 - 1e-5),
            Math.min(Math.max(a, o.z0 + 1e-5), o.z1 - 1e-5),
          ),
          a,
        ),
          m.push(n - o.x0, -a));
      }
    for (let k = 0; k < s; k++)
      for (let h = 0; h < p; h++) {
        const n = k * (p + 1) + h,
          a = n + p + 1;
        M.push(n, a, n + 1, n + 1, a, a + 1);
      }
    const i = new b0();
    (i.setAttribute("position", new l0(Y, 3)),
      i.setAttribute("uv", new l0(m, 2)),
      i.setIndex(M),
      i.computeVertexNormals());
    const u = r("rug_runner");
    y.add(i, u, { uv: "keep" });
    const B = [],
      _ = (k, h, n, a, c) => {
        for (let f = 0; f < c; f++) {
          const E = f / c,
            S = (f + 1) / c,
            L = k + (n - k) * E,
            z = h + (a - h) * E,
            V = k + (n - k) * S,
            D = h + (a - h) * S,
            I = I0(
              L + (k === n ? (k < 6 ? 1e-5 : -1e-5) : 0),
              z + (h === a ? (h < 6 ? 1e-5 : -1e-5) : 0),
            ),
            U = I0(
              V + (k === n ? (k < 6 ? 1e-5 : -1e-5) : 0),
              D + (h === a ? (h < 6 ? 1e-5 : -1e-5) : 0),
            );
          B.push(L, 5e-4, z, V, 5e-4, D, V, U, D, L, 5e-4, z, V, U, D, L, I, z);
        }
      };
    (_(o.x0, o.z0, o.x0, o.z1, s),
      _(o.x1, o.z1, o.x1, o.z0, s),
      _(o.x1, o.z0, o.x0, o.z0, p),
      _(o.x0, o.z1, o.x1, o.z1, p));
    const l = new b0();
    (l.setAttribute("position", new l0(B, 3)),
      l.computeVertexNormals(),
      y.add(l, r("rug_runner", { color: "#8a7a70" }), { uv: "world" }));
    const N = [];
    for (const [k, h] of [
      [o.z0, -1],
      [o.z1, 1],
    ])
      for (let a = 0; a < 64; a++) {
        const c =
            o.x0 +
            0.012 +
            (o.x1 - o.x0 - 0.024) * (a / 63) +
            (x() - 0.5) * 0.004,
          f = 0.05 + x() * 0.03,
          E = (x() - 0.5) * 0.35,
          S = 0.0034,
          L = c + Math.sin(E) * f,
          z = k + h * Math.cos(E) * f,
          V = o.t * 0.5,
          D = 0.0012 + x() * 0.002,
          I = (-Math.cos(E) * S) / 2,
          U = ((Math.sin(E) * S) / 2) * h,
          w = [c - S / 2, V, k],
          A = [c + S / 2, V, k],
          q = [L + I * -1, D, z + U],
          r0 = [L - I * -1, D, z - U];
        h > 0
          ? N.push(...w, ...q, ...A, ...A, ...q, ...r0)
          : N.push(...w, ...A, ...q, ...A, ...r0, ...q);
      }
    const G = new b0();
    (G.setAttribute("position", new l0(N, 3)),
      G.computeVertexNormals(),
      y.add(G, r("linen_stained", { color: "#b8a888", side: f0 }), {
        uv: "world",
        shadow: !1,
      }));
  }
  {
    const o = new a0([
        P(5.25, 0, 10.2),
        P(5.72, 0, 10.42),
        P(6.02, 0, 10.95),
        P(6.12, 0, 11.75),
        P(6.1, 0, 12.6),
        P(6.06, 0, 13.55),
      ]),
      p = o.getLength(),
      v = [],
      s = [],
      Y = [],
      m = [
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
      ];
    let M = 0.34,
      i = 0;
    for (; M < p - 0.05;) {
      const l = M / p,
        N = o.getPointAt(l),
        G = o.getTangentAt(l),
        k = i % 2 === 0,
        h = P(G.z, 0, -G.x);
      let n = N.x + h.x * (k ? 0.085 : -0.085),
        a = N.z + h.z * (k ? 0.085 : -0.085);
      for (const o0 of [d0.x0, d0.x1])
        Math.abs(n - o0) < 0.07 && (n = o0 + (n >= o0 ? 0.072 : -0.072));
      n < 5.47 && (n = 5.47);
      const c = n > d0.x0 && n < d0.x1 && a > d0.z0 && a < d0.z1,
        f = (c ? I0(n, a) : 0) + 0.0016,
        E = Math.atan2(G.x, G.z) + (k ? 0.12 : -0.12) + (x() - 0.5) * 0.1,
        S = Math.max(0.3, 1 - i * 0.085) * (c ? 0.92 : 1),
        L = i < 3 ? m[k ? 0 : 1] : i % 3 === 2 ? m[3] : k ? m[2] : m[1],
        z = 0.15,
        V = 0.15,
        D = Math.cos(E),
        I = Math.sin(E),
        U = (o0, s0) => [
          n + o0 * z * D + s0 * V * I,
          f,
          a - o0 * z * I + s0 * V * D,
        ],
        [w, A] = [L[0] * 0.5, 1 - (L[1] + 1) * 0.5],
        q = [U(1, -1), U(-1, -1), U(-1, 1), U(1, 1)],
        r0 = [
          [w, A],
          [w + 0.5, A],
          [w + 0.5, A + 0.5],
          [w, A + 0.5],
        ];
      for (const o0 of [0, 1, 2, 0, 2, 3])
        (v.push(...q[o0]), s.push(...r0[o0]), Y.push(1, 1, 1, S));
      ((M += 0.315 + (x() - 0.5) * 0.03), i++);
    }
    const u = new b0();
    (u.setAttribute("position", new l0(v, 3)),
      u.setAttribute("uv", new l0(s, 2)),
      u.setAttribute("color", new l0(Y, 4)),
      u.computeVertexNormals());
    const B = r("hall_footprints", {
        color: "#553b3b",
        extra: {
          transparent: !0,
          depthWrite: !1,
          vertexColors: !0,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -4,
        },
      }),
      _ = new p0(u, B);
    ((_.name = "footprints"),
      (_.receiveShadow = !0),
      (_.renderOrder = 1),
      e.add(_));
  }
  {
    const o = r("leather_brown", { color: "#5a4038" }),
      p = r("leather_brown", { color: "#2a1a14" }),
      v = 18,
      s = 22,
      Y = 0.235,
      m = (n) =>
        0.012 +
        0.032 *
          Math.sin(Math.PI * Math.min(1, n * 1.25)) *
          (n > 0.75 ? 1 - (n - 0.75) * 1.4 : 1),
      M = (n) => (n < 0.55 ? 0 : 0.034 * Math.pow((n - 0.55) / 0.45, 1.3)),
      i = (n) =>
        n < 0.18
          ? 0.012 + n * 0.12
          : n < 0.42
            ? 0.034 + (n - 0.18) * 0.1
            : 0.058 - (n - 0.42) * 0.03,
      u = (n, a, c = 1) => {
        const f = Y / 2 - n * Y,
          E = Math.max(0.006, m(n)),
          S = Math.max(0.008, i(n)),
          L = M(n),
          z = Math.cos(a),
          V = Math.sin(a),
          D = L + S * 0.45,
          I = V < 0 ? L + S * 0.45 * (1 + V) : L + S * 0.45 + S * 0.55 * V;
        return P(f, D + (I - D) * c, z * E * c);
      },
      B = [];
    for (let n = 0; n <= s; n++) {
      const a = [];
      for (let c = 0; c < v; c++) a.push(u(n / s, (c / v) * Math.PI * 2));
      B.push(a);
    }
    const _ = [],
      l = 10,
      N = 8;
    for (let n = 0; n <= l; n++) {
      const a = 0.46 + (n / l) * 0.46,
        c = [];
      for (let f = 0; f <= N; f++)
        c.push(u(a, Math.PI / 2 - 0.85 + (f / N) * 1.7, 1.015));
      _.push(c);
    }
    const G = [];
    for (let n = 0; n < l; n++)
      for (let a = 0; a < N; a++) {
        const c = _[n][a],
          f = _[n][a + 1],
          E = _[n + 1][a + 1],
          S = _[n + 1][a];
        G.push(
          ...c.toArray(),
          ...S.toArray(),
          ...f.toArray(),
          ...f.toArray(),
          ...S.toArray(),
          ...E.toArray(),
        );
      }
    const k = new b0();
    (k.setAttribute("position", new l0(G, 3)), k.computeVertexNormals());
    const h = new n0("shoe");
    (h.at([6.72, 0.045, 12.3], [Math.PI / 2 - 0.06, -1.52, 0, "YXZ"], () => {
      (h.add(U0(B, { capStart: !0, capEnd: !0 }), o, { uv: "keep" }),
        h.add(k, r("leather_brown", { color: "#140d0b", side: f0 }), {
          uv: "keep",
        }),
        h.box(p, 0.04, 0.036, 0.042, [-0.095, 0.017, 0], { r: 0.004 }));
    }),
      h.flush(e));
  }
  {
    const o = r("wool_grey", { color: "#8e8880" }),
      p = [
        [5.47, 0.35],
        [5.46, 2.3],
        [6.74, 0.3],
        [6.73, 2.1],
        [6.74, 2.55],
        [5.46, 5.3],
        [6.73, 9.6],
        [5.47, 12.95],
        [6.74, 13.1],
        [5.8, 0.08],
        [5.65, 1.7],
      ];
    for (const [v, s] of p) {
      const Y = new lt(1, 1),
        m = Y.attributes.position;
      for (let i = 0; i < m.count; i++) {
        const u =
          0.7 +
          0.5 *
            Math.sin(m.getX(i) * 7 + v * 13) *
            Math.cos(m.getZ(i) * 5 + s * 7);
        m.setXYZ(i, m.getX(i) * u, m.getY(i) * u, m.getZ(i) * u);
      }
      Y.computeVertexNormals();
      const M = 0.012 + x() * 0.02;
      y.add(Y, o, {
        m: g(
          [v, M * 0.3, s],
          [0, x() * 3, 0],
          [M, M * 0.45, M * (0.8 + x() * 0.6)],
        ),
        uv: "world",
        shadow: !1,
      });
    }
  }
  return (y.flush(e), { group: e });
}
