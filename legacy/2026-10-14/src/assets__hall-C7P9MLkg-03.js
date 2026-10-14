// assets__hall-C7P9MLkg 03 — math
// Lines 531-1283 of readable/assets__hall-C7P9MLkg.pretty.js (statement-aligned).
function ft(b, C) {
  const r = (t, d) => b.mats.get(t, d),
    x = b.rng(2024),
    e = r("wood_walnut"),
    y = r("brass_aged"),
    o = r("paper_old"),
    p = new at({
      color: 854795,
      roughness: 0.32,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.14,
    });
  p.name = "bakelite";
  const v = new Q();
  ((v.name = "hallNorth"), C.add(v));
  const s = new n0("hallNorth"),
    Y = [],
    m = { L: 1.1, D: 0.36, H: 0.8, z: 1.5, off: 0.036 },
    M = g([5.4, 0, m.z], [0, Math.PI / 2, 0]);
  s.push(M);
  {
    const { L: t, D: d, H: F, off: T } = m,
      R = T + d / 2;
    (s.box(e, t, 0.028, d, [0, F - 0.014, R], { r: 0.007, seg: 2 }),
      s.box(e, t - 0.036, 0.014, d - 0.026, [0, F - 0.035, R - 0.006], {
        r: 0.004,
      }),
      s.box(e, t - 0.1, 0.092, 0.02, [0, F - 0.088, T + d - 0.05]),
      s.box(e, t - 0.1, 0.092, 0.02, [0, F - 0.088, T + 0.03]));
    for (const X of [-1, 1])
      s.box(
        e,
        0.02,
        0.092,
        d - 0.09,
        [X * (t / 2 - 0.06), F - 0.088, R - 0.01],
        { grain: "z" },
      );
    s.box(e, 0.46, 0.068, 0.016, [0, F - 0.088, T + d - 0.036], { r: 0.004 });
    for (const X of [-1, 1])
      s.add(new c0(0.009, 0.009, 0.004, 14), y, {
        m: g([X * 0.04, F - 0.082, T + d - 0.026], [Math.PI / 2, 0, 0]),
        uv: "keep",
      });
    s.add(new A0(0.04, 0.0025, 6, 20, Math.PI), y, {
      m: g([0, F - 0.084, T + d - 0.019], [0.35, 0, Math.PI]),
      uv: "keep",
    });
    for (const X of [-1, 1])
      for (const Z of [T + 0.03, T + d - 0.04])
        (s.add(pt(J0(0.046, F - 0.05, 0.046, 0.005, 1), 0.42), e, {
          m: g([X * (t / 2 - 0.058), (F - 0.05) / 2, Z]),
          uv: $0.y,
        }),
          s.add(
            H(
              [
                [0, 0],
                [0.015, 0],
                [0.016, 0.03],
                [0.014, 0.032],
                [0, 0.032],
              ],
              12,
            ),
            y,
            { m: g([X * (t / 2 - 0.058), 0, Z]), uv: "keep" },
          ));
    (s.box(e, t - 0.14, 0.018, d - 0.12, [0, 0.17, R], { r: 0.004 }),
      [
        [0, 0],
        [0.012, 0.21],
        [-0.01, -0.12],
        [0.02, 0.35],
        [-0.004, 0.08],
        [0.015, -0.3],
      ].forEach(([X, Z], O) => {
        const $ =
          O === 2
            ? r("paper_old", { color: "#aeb6bb" })
            : O === 4
              ? r("paper_old", { color: "#b08a60" })
              : o;
        s.box(
          $,
          0.17,
          0.0026,
          0.11,
          [0.02 + X, F + 0.0014 + O * 0.0027, T + 0.16 + X * 0.6],
          { rot: [0, Z, 0], r: 8e-4, grain: null },
        );
      }));
  }
  {
    const d = m.off + 0.17,
      F = m.H;
    (s.add(
      H(
        [
          [0, 0],
          [0.058, 0],
          [0.062, 0.006],
          [0.072, 0.04],
          [0.082, 0.1],
          [0.086, 0.14],
          [0.094, 0.15],
          [0.094, 0.162],
          [0.084, 0.165],
          [0.08, 0.15],
          [0.08, 0.15],
          [0, 0.15],
        ],
        36,
      ),
      r("porcelain_cracked", { color: "#57735f" }),
      { m: g([-0.34, F, d]), uv: "keep" },
    ),
      s.add(new rt(0.079, 24), r("dark_room", { color: "#2a1d14" }), {
        m: g([-0.34, F + 0.1515, d], [-Math.PI / 2, 0, 0]),
        uv: "world",
      }));
    const T = r("wood_oak_pale", { color: "#c8b090" }),
      R = b.mats.paint("#7a5a3c", { rough: 0.92, props: { side: f0 } });
    for (let J = 0; J < 9; J++) {
      const X = x() * Math.PI * 2,
        Z = 0.18 + x() * 0.2,
        O = 0.05 + x() * 0.12,
        $ = x() < 0.6,
        j = P(-0.34 + Math.cos(X) * 0.02, F + 0.15, d + Math.sin(X) * 0.02),
        W = P(
          j.x + Math.cos(X) * O * 0.4,
          j.y + Z * 0.6,
          j.z + Math.sin(X) * O * 0.4,
        ),
        K = P(
          j.x + Math.cos(X) * O,
          j.y + Z * ($ ? 0.75 : 1),
          j.z + Math.sin(X) * O,
        ),
        e0 = $
          ? P(
              j.x + Math.cos(X) * (O + 0.08),
              j.y + Z * 0.45,
              j.z + Math.sin(X) * (O + 0.08),
            )
          : P(K.x + Math.cos(X) * 0.01, K.y + 0.03, K.z + Math.sin(X) * 0.01),
        y0 = new a0([j, W, K, e0]);
      s.add(
        S0(y0, (h0) => 0.0034 - h0 * 0.0018, 14, 5),
        T,
        { uv: "keep" },
      );
      for (let h0 = 0; h0 < 2; h0++) {
        const L0 = 0.45 + h0 * 0.3 + x() * 0.1,
          m0 = y0.getPointAt(Math.min(1, L0)),
          X0 = new u0(0.06, 0.022, 6, 1),
          k0 = X0.attributes.position;
        for (let w0 = 0; w0 < k0.count; w0++) {
          const D0 = k0.getX(w0),
            R0 = k0.getY(w0),
            v0 = (D0 + 0.03) / 0.06;
          k0.setXYZ(
            w0,
            D0,
            R0 * (1 - v0 * 0.7) * Math.sin(Math.PI * (0.15 + v0 * 0.85)),
            -v0 * v0 * 0.03 + Math.abs(R0) * 0.6,
          );
        }
        (X0.computeVertexNormals(),
          s.add(X0, R, {
            m: g(
              [m0.x, m0.y, m0.z],
              [x() * 1.2 - 0.3, X + x() * 2, -0.9 - x() * 0.8],
              [1, 1, 1],
            ),
            uv: "keep",
          }));
      }
    }
    for (let J = 0; J < 4; J++) {
      const X = new u0(0.055, 0.02, 5, 1),
        Z = X.attributes.position;
      for (let O = 0; O < Z.count; O++) {
        const $ = Z.getX(O),
          j = Z.getY(O),
          W = ($ + 0.0275) / 0.055;
        Z.setXYZ(
          O,
          $,
          j * Math.sin(Math.PI * (0.15 + W * 0.85)),
          Math.abs(j) * 0.5 + 0.002,
        );
      }
      (X.computeVertexNormals(),
        s.add(X, R, {
          m: g(
            [-0.34 + 0.1 + x() * 0.16, F + 0.001, m.off + 0.08 + x() * 0.22],
            [-Math.PI / 2, 0, x() * 6.28],
          ),
          uv: "keep",
        }));
    }
  }
  (s.pop(),
    Y.push({
      x0: 5.4,
      x1: 5.4 + m.off + m.D + 0.01,
      z0: m.z - m.L / 2,
      z1: m.z + m.L / 2,
      y0: 0,
      y1: m.H,
    }));
  const i = new Q();
  ((i.name = "phone"), v.add(i), (i.matrixAutoUpdate = !0));
  const u = new n0("phone"),
    B = M.clone().multiply(g([0.3, m.H, m.off + 0.17], [0, -0.22, 0]));
  u.push(B);
  {
    const t = M0([
        [-0.092, 0.014],
        [0.092, 0.014],
        [0.092, 0.09],
        [0.078, 0.1],
        [0.015, 0.104],
        [-0.06, 0.06],
        [-0.092, 0.05],
      ]),
      d = g0(t, 0.19, 0.014, { seg: 3 });
    (u.add(d, p, { m: g([0, 0, 0], [0, Math.PI / 2, 0]), uv: "keep" }),
      u.box(p, 0.2, 0.012, 0.215, [0, 0.006, 0], { r: 0.004 }));
    for (const Z of [-1, 1])
      (u.box(p, 0.034, 0.05, 0.05, [Z * 0.072, 0.12, -0.035], {
        r: 0.012,
        seg: 2,
      }),
        u.add(new c0(0.0065, 0.0065, 0.03, 12), r("porcelain_cracked"), {
          m: g([Z * 0.03, 0.112, -0.038]),
          uv: "keep",
        }));
    const F = Math.atan2(0.044, 0.075);
    u.at([0, 0.094, 0.03], [F, 0, 0], () => {
      u.add(
        new c0(0.047, 0.047, 0.003, 36),
        r("porcelain_cracked", { color: "#e8e0cc" }),
        { m: g([0, 0.0015, 0]), uv: "keep" },
      );
      const Z = [];
      for (let $ = 0; $ < 10; $++) {
        const j = Math.PI * 0.35 + $ * ((Math.PI * 1.55) / 9),
          W = [];
        for (let K = 0; K < 12; K++) {
          const e0 = -(K / 12) * Math.PI * 2;
          W.push([
            Math.cos(j) * 0.032 + Math.cos(e0) * 0.0068,
            Math.sin(j) * 0.032 + Math.sin(e0) * 0.0068,
          ]);
        }
        Z.push(W);
      }
      const O = M0(
        Array.from({ length: 40 }, ($, j) => {
          const W = (j / 40) * Math.PI * 2;
          return [Math.cos(W) * 0.043, Math.sin(W) * 0.043];
        }),
        Z,
      );
      (u.add(g0(O, 0.004, 8e-4, { seg: 1 }), p, {
        m: g([0, 0.0055, 0], [-Math.PI / 2, 0, 0]),
        uv: "keep",
      }),
        u.add(new c0(0.016, 0.016, 0.004, 24), r("paper_old"), {
          m: g([0, 0.0062, 0]),
          uv: "keep",
        }),
        u.box(
          r("brass_aged", { rough: 0.25 }),
          0.006,
          0.006,
          0.016,
          [0.036, 0.009, 0.022],
          { rot: [0, -0.6, 0], r: 0.002 },
        ));
    });
    const T = p,
      R = P(-0.06, 0, 0.215),
      J = new a0([
        P(-0.1, 0.03, 0.05),
        P(-0.13, 0.01, 0.1),
        P(-0.11, 0.004, 0.16),
        R.clone().add(P(0, 0.004, -0.01)),
      ]);
    u.add(Z0(J), T, { uv: "keep" });
    const X = new a0([
      P(0.05, 0.02, -0.1),
      P(0.08, 0.004, -0.15),
      P(0.1, 0, -0.19),
      P(0.11, -0.05, -0.21),
      P(0.12, -0.4, -0.22),
    ]);
    u.add(new j0(X, 24, 0.0028, 6, !1), r("iron_black", { rough: 0.7 }), {
      uv: "keep",
    });
  }
  (u.pop(), u.flush(i));
  const _ = P(-0.06, 0, 0.215).applyMatrix4(B),
    l = new Q();
  ((l.name = "handsetSwing"), l.position.copy(_), i.add(l));
  {
    const t = new n0("handset");
    (t.add(
      Z0(
        new a0([
          P(0, 0, 0),
          P(0.004, -0.06, 0.01),
          P(-0.004, -0.14, 0.012),
          P(0, -0.2, 0.012),
        ]),
        { stretch: 2.1 },
      ),
      p,
      { uv: "keep" },
    ),
      t.at([0, -0.2 - 0.012 - 0.1, 0.012], [0, 0.5, Math.PI / 2 - 0.04], () => {
        const d = [];
        for (let R = 0; R <= 16; R++) {
          const J = R / 16,
            X = -0.1 + J * 0.2,
            Z = 0.022 * Math.sin(Math.PI * J);
          d.push(P(X, Z, 0));
        }
        const F = new a0(d);
        F.computeFrenetFrames(24, !1);
        const T = [];
        for (let R = 0; R <= 24; R++) {
          const J = R / 24,
            X = F.getPointAt(J),
            Z = Math.min(J, 1 - J),
            O = 0.012 + 0.012 * Math.pow(Math.max(0, 1 - Z / 0.16), 2),
            $ = F.getTangentAt(J),
            j = P(0, 0, 1),
            W = P().crossVectors(j, $).normalize();
          T.push(K0(X, W, j, O * 0.86, O * 1.08, 14));
        }
        t.add(U0(T, { capStart: !0, capEnd: !0 }), p, { uv: "keep" });
        for (const R of [-1, 1])
          (t.add(
            H(
              [
                [0, 0],
                [0.029, 0],
                [0.031, 0.006],
                [0.028, 0.03],
                [0.016, 0.034],
                [0, 0.034],
              ],
              24,
            ),
            p,
            { m: g([R * 0.092, 0.004, 0], [Math.PI, 0, 0]), uv: "keep" },
          ),
            t.add(
              new c0(0.02, 0.02, 0.003, 20),
              r("iron_black", { rough: 0.5 }),
              { m: g([R * 0.092, 0.0035, 0], [Math.PI, 0, 0]), uv: "keep" },
            ));
      }),
      t.flush(l));
  }
  const N = new x0(14, 0.5),
    G = new x0(14, 0.5);
  N.kick(0.12);
  let k = 0;
  const h = i.children.filter((t) => t !== l),
    n = {
      group: i,
      handset: l,
      swing(t = 1) {
        (N.kick(t * 0.6), G.kick(t * 0.35));
      },
      ring(t = 2) {
        k = t;
      },
      update(t, d) {
        if (
          ((l.rotation.x = N.update(t) + 0.012 * Math.sin(d * 0.7)),
          (l.rotation.z = G.update(t)),
          k > 0)
        ) {
          k -= t;
          const F = k > 0 ? Math.sin(d * 95) * 0.0012 : 0;
          for (const T of h) T.position.x = F;
        }
      },
    },
    a = new Q();
  ((a.name = "clock"), v.add(a));
  const c = new n0("clock"),
    f = { z: 1.62, off: 0.036 },
    E = g([6.8, 0, f.z], [0, -Math.PI / 2, 0]),
    S = r("wood_walnut", { color: "#8a6a58" });
  c.push(E);
  const L = (t) => f.off + t / 2;
  (c.box(e, 0.54, 0.07, 0.31, [0, 0.035, L(0.31)], { r: 0.008 }),
    c.box(e, 0.5, 0.34, 0.28, [0, 0.24, L(0.28)], { r: 0.006 }),
    c.box(S, 0.34, 0.2, 0.012, [0, 0.235, f.off + 0.28 + 0.004], { r: 0.004 }),
    c.box(e, 0.52, 0.035, 0.3, [0, 0.425, L(0.3)], { r: 0.008 }));
  const z = { w: 0.38, d: 0.22, y0: 0.44, y1: 1.43 };
  c.box(S, z.w, z.y1 - z.y0, 0.014, [0, (z.y0 + z.y1) / 2, f.off + 0.007], {
    r: 0.002,
    grain: "y",
  });
  for (const t of [-1, 1])
    c.box(
      e,
      0.02,
      z.y1 - z.y0,
      z.d,
      [t * (z.w / 2 - 0.01), (z.y0 + z.y1) / 2, L(z.d)],
      { grain: "y" },
    );
  const V = f.off + z.d - 0.01,
    D = { y0: 0.66, y1: 1.26 };
  (c.box(e, z.w, D.y0 - z.y0, 0.022, [0, (z.y0 + D.y0) / 2, V], { r: 0.004 }),
    c.box(e, z.w, z.y1 - D.y1, 0.022, [0, (D.y1 + z.y1) / 2, V], { r: 0.004 }));
  for (const t of [-1, 1])
    c.box(
      e,
      z.w / 2 - 0.1,
      D.y1 - D.y0,
      0.022,
      [t * (0.1 + (z.w / 2 - 0.1) / 2), (D.y0 + D.y1) / 2, V],
      { r: 0.004, grain: "y" },
    );
  (c.box(y, 0.008, 0.03, 0.01, [0.13, 0.96, V + 0.014], { r: 0.002 }),
    c.add(new u0(0.2, 0.6), T0(12108992, 0.14, { name: "clock_glass" }), {
      m: g([0, (D.y0 + D.y1) / 2, V + 0.002]),
      uv: "keep",
    }));
  const I = { y0: 1.43, y1: 2.02, w: 0.46, d: 0.27 };
  (c.box(e, 0.5, 0.045, 0.3, [0, I.y0 + 0.0225, L(0.3)], { r: 0.008 }),
    c.box(
      e,
      I.w,
      I.y1 - I.y0 - 0.045,
      I.d - 0.03,
      [0, (I.y0 + 0.045 + I.y1) / 2, L(I.d - 0.03)],
      { r: 0.006 },
    ));
  const U = 0.3,
    w = I.y0 + 0.08,
    A = 0.3,
    q = 0.15,
    r0 = [];
  r0.push([-U / 2 + 0.012, 0.012], [U / 2 - 0.012, 0.012]);
  for (let t = 0; t <= 16; t++) {
    const d = (t / 16) * Math.PI;
    r0.push([Math.cos(d) * (q - 0.012), A + Math.sin(d) * (q - 0.012)]);
  }
  const o0 = M0(
    [
      [-0.46 / 2, -0.03],
      [I.w / 2, -0.03],
      [I.w / 2, A + q + 0.05],
      [-0.46 / 2, A + q + 0.05],
    ],
    [r0.reverse()],
  );
  c.add(g0(o0, 0.02, 0.003, { seg: 2, curveSegments: 16 }), e, {
    m: g([0, w, f.off + I.d - 0.008]),
    uv: "world",
  });
  const s0 = new ct();
  (s0.moveTo(-U / 2, 0),
    s0.lineTo(U / 2, 0),
    s0.lineTo(U / 2, A),
    s0.absarc(0, A, U / 2, 0, Math.PI, !1),
    s0.lineTo(-U / 2, 0));
  const F0 = new E0(s0, 24);
  {
    const t = F0.attributes.uv,
      d = F0.attributes.position;
    for (let F = 0; F < t.count; F++)
      t.setXY(F, (d.getX(F) + U / 2) / U, d.getY(F) / (A + q));
  }
  (c.add(F0, r("hall_clockface"), {
    m: g([0, w, f.off + I.d - 0.027]),
    uv: "keep",
  }),
    c.add(new E0(s0, 24), T0(12635336, 0.1, { name: "clock_glass2" }), {
      m: g([0, w, f.off + I.d - 5e-4]),
      uv: "keep",
    }));
  for (const t of [-1, 1])
    c.add(
      H(
        [
          [0, 0],
          [0.018, 0],
          [0.018, 0.02],
          [0.012, 0.03],
          [0.011, 0.44],
          [0.016, 0.45],
          [0.016, 0.47],
          [0, 0.47],
        ],
        14,
      ),
      y,
      {
        m: g([t * (I.w / 2 - 0.02), I.y0 + 0.045, f.off + I.d - 0.005]),
        uv: "keep",
      },
    );
  c.box(e, 0.5, 0.04, 0.29, [0, I.y1 + 0.02, L(0.29)], { r: 0.008 });
  for (const t of [-1, 1]) {
    const d = new a0([
      P(t * 0.24, I.y1 + 0.04, 0),
      P(t * 0.17, I.y1 + 0.1, 0),
      P(t * 0.08, I.y1 + 0.16, 0),
      P(t * 0.055, I.y1 + 0.14, 0),
    ]);
    for (const F of [f.off + 0.03, f.off + 0.25])
      c.add(
        S0(d, (T) => 0.022 - T * 0.008, 16, 8),
        e,
        { m: g([0, 0, F]), uv: "world" },
      );
    c.add(
      g0(
        M0([
          [t * 0.245, I.y1 + 0.04],
          [t * 0.06, I.y1 + 0.04],
          [t * 0.06, I.y1 + 0.13],
          [t * 0.15, I.y1 + 0.11],
        ]),
        0.22,
        0.003,
      ),
      e,
      { m: g([0, 0, f.off + 0.15]), uv: "world" },
    );
  }
  for (const [t, d] of [
    [-0.23, 0.8],
    [0, 1],
    [0.23, 0.8],
  ])
    c.add(
      H(
        [
          [0, 0],
          [0.018, 0],
          [0.012, 0.012],
          [0.02, 0.03],
          [0.022, 0.045],
          [0.012, 0.062],
          [0.004, 0.09],
          [0, 0.1],
        ],
        14,
      ),
      y,
      {
        m: g([t, I.y1 + (t === 0 ? 0.13 : 0.04), f.off + 0.15], [0, 0, 0], d),
        uv: "keep",
      },
    );
  for (const t of [-1, 1])
    (c.add(
      H(
        [
          [0, 0],
          [0.026, 0],
          [0.028, 0.006],
          [0.028, 0.19],
          [0.022, 0.2],
          [0.004, 0.205],
          [0, 0.205],
        ],
        20,
      ),
      y,
      { m: g([t * 0.085, 1.02 + (t > 0 ? 0.07 : 0), f.off + 0.1]), uv: "keep" },
    ),
      c.add(new c0(0.0012, 0.0012, 0.3, 4), r("iron_black"), {
        m: g([t * 0.085, 1.37 + (t > 0 ? 0.035 : 0), f.off + 0.1]),
        uv: "keep",
        shadow: !1,
      }));
  (c.pop(), c.flush(a));
  const V0 = E,
    i0 = new Q();
  ((i0.name = "pendulum"),
    i0.position.set(0, 1.5, f.off + 0.14).applyMatrix4(V0),
    (i0.rotation.y = -Math.PI / 2),
    a.add(i0));
  {
    const t = new n0("pendulum");
    (t.add(new c0(0.0022, 0.0022, 0.66, 6), y, {
      m: g([0, -0.33, 0]),
      uv: "keep",
    }),
      t.add(
        H(
          [
            [0, -0.009],
            [0.05, -0.006],
            [0.068, -0.002],
            [0.07, 0],
            [0.068, 0.002],
            [0.05, 0.006],
            [0, 0.009],
          ],
          32,
        ),
        r("brass_aged", { rough: 0.22 }),
        { m: g([0, -0.67, 0], [Math.PI / 2, 0, 0]), uv: "keep" },
      ),
      t.flush(i0));
  }
  const Y0 = [],
    H0 = r("iron_black", { color: "#1a2233", rough: 0.35 }),
    q0 = P(0, w + A / 2, f.off + I.d - 0.024).applyMatrix4(V0);
  for (const [t, d] of [
    [0.105, 0.007],
    [0.075, 0.011],
  ]) {
    const F = new Q();
    (F.position.copy(q0), (F.rotation.y = -Math.PI / 2), a.add(F));
    const T = new Q();
    F.add(T);
    const R = M0([
        [-d * 0.4, -0.018],
        [d * 0.4, -0.018],
        [d * 0.5, 0],
        [d, t * 0.55],
        [d * 0.35, t * 0.7],
        [d * 0.2, t],
        [-d * 0.2, t],
        [-d * 0.35, t * 0.7],
        [-d, t * 0.55],
        [-d * 0.5, 0],
      ]),
      J = new p0(g0(R, 0.0015, 4e-4, { seg: 1 }), H0);
    ((J.castShadow = !0), T.add(J), Y0.push(T));
  }
  const t0 = {
    group: a,
    pendulum: i0,
    running: !1,
    time: 3 + 7 / 60,
    amp: 0,
    set(t, d = 0) {
      ((t0.time = t + d / 60), N0());
    },
    start() {
      t0.running = !0;
    },
    stop() {
      t0.running = !1;
    },
    update(t, d) {
      (t0.running
        ? ((t0.amp += (0.07 - t0.amp) * Math.min(1, t * 0.8)),
          (t0.time += t / 3600),
          N0())
        : (t0.amp *= Math.max(0, 1 - t * 0.6)),
        (i0.rotation.z = t0.amp * Math.sin((d * Math.PI * 2) / 1.68)));
    },
  };
  function N0() {
    const t = t0.time % 12,
      d = (t0.time * 60) % 60;
    ((Y0[0].rotation.z = -(d / 60) * Math.PI * 2),
      (Y0[1].rotation.z = -(t / 12) * Math.PI * 2));
  }
  (N0(),
    Y.push({
      x0: 6.8 - f.off - 0.31,
      x1: 6.8,
      z0: f.z - 0.27,
      z1: f.z + 0.27,
      y0: 0,
      y1: 2.2,
    }));
  {
    s.add(new c0(0.008, 0.008, 1.16, 12), y, {
      m: g([6.1, 2.52, 0.11], [0, 0, Math.PI / 2]),
      uv: "keep",
    });
    for (const W of [-1, 1])
      (s.add(new G0(0.018, 14, 10), y, {
        m: g([6.1 + W * 0.59, 2.52, 0.11]),
        uv: "keep",
      }),
        s.box(y, 0.012, 0.012, 0.11, [6.1 + W * 0.5, 2.52, 0.11 / 2], {
          r: 0.003,
        }));
    const F = 48,
      T = 18,
      R = 5.58,
      J = 6.22,
      X = 0.955,
      Z = 2.52 - 0.03,
      O = new u0(1, 1, F, T),
      $ = O.attributes.position;
    for (let W = 0; W < $.count; W++) {
      const K = $.getX(W) + 0.5,
        e0 = $.getY(W) + 0.5,
        y0 = R + (J - R) * K,
        h0 = X + (Z - X) * e0,
        L0 =
          Math.sin(K * Math.PI * 2 * 7.5) * (0.018 + 0.014 * e0) +
          Math.sin(K * Math.PI * 2 * 2.3 + 1) * 0.008,
        m0 = (1 - e0) * (1 - e0) * 0.02 * Math.sin(K * 5);
      $.setXYZ(
        W,
        y0 + (1 - e0) * 0.02 * Math.sin(K * 9),
        h0 + (e0 < 0.02 ? Math.sin(K * 31) * 0.004 : 0),
        0.11 + L0 + m0,
      );
    }
    O.computeVertexNormals();
    const j = r("linen_stained", {
      side: f0,
      extra: { transparent: !0, opacity: 0.74, depthWrite: !1 },
    });
    s.add(O, j, { uv: "world", shadow: !1 });
    for (let W = 0; W < 9; W++)
      s.add(new A0(0.014, 0.0022, 6, 14), y, {
        m: g(
          [R + 0.02 + (W * (J - R - 0.04)) / 8, 2.52 - 0.006, 0.11],
          [0, Math.PI / 2, 0],
        ),
        uv: "keep",
      });
  }
  return (
    s.flush(v),
    {
      group: v,
      colliders: Y,
      phone: n,
      clock: t0,
      anims: [
        (t, d) => {
          (n.update(t, d), t0.update(t, d));
        },
      ],
    }
  );
}
