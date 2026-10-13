// assets__district-BhfbivMT 21 — math
// Lines 6589-6936 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function Go(n, t, e, r) {
  const o = t.sink("body"),
    l = t.burnt,
    s = t.o,
    c = t.rng,
    a = t.K("paint"),
    h = l ? "iron" : "trim",
    f = oe(r, 0.75),
    y = k0;
  for (const T of [1, -1])
    U0(o, h, T * 0.45 - 0.05, 0.8, -3.45, T * 0.45 + 0.05, 1.02, 3.3, y, 0.005);
  for (const T of [-3.2, -2.25, -0.9, 0.6, 2, 3])
    U0(o, h, -0.42, 0.84, T - 0.04, 0.42, 0.98, T + 0.04, y, 0.005);
  U0(o, a, -1.12, 0.62, 3.3, 1.12, 0.86, 3.46, r, 0.005);
  for (const T of [1, -1])
    (f0(
      o,
      h,
      new z(T * 0.62, 0.66, 3.46),
      new z(T * 0.62, 0.66, 3.58),
      0.04,
      0.04,
      L0,
      y,
    ),
      f0(
        o,
        h,
        new z(T * 0.62, 0.66, 3.58),
        new z(T * 0.62, 0.8, 3.58),
        0.04,
        0.04,
        new z(0, 0, 1),
        y,
      ));
  const m = (T, N, K, O, k, P = 0.42) => {
    const W = le(new z(T, N, K), O);
    j0(o, "decal", W, P, P / 4, 0.002, (q, Y) =>
      ze(l ? "plate_burnt" : k, q, Y),
    );
  };
  (m(0.62 * 0 + 0.55, 0.74, 3.46, new z(0, 0, 1), "army_no"),
    m(-0.62, 0.74, 3.46, new z(0, 0, 1), "army_mark", 0.36),
    U0(o, "trim", -0.5, 0.9, 3.18, 0.5, 1.56, 3.24, [0.02, 0.02, 0.02], 0.005));
  const b = l ? "iron" : a;
  for (const T of [0.88, 1.6])
    f0(o, b, new z(-0.56, T, 3.3), new z(0.56, T, 3.3), 0.04, 0.04, L0, r);
  for (let T = 0; T <= 8; T++) {
    const N = -0.54 + T * 0.135;
    f0(
      o,
      b,
      new z(N, 0.88, 3.3),
      new z(N, 1.6, 3.3),
      0.025,
      0.03,
      new z(0, 0, 1),
      r,
    );
  }
  const v = new je(
      [
        [-0.62, 0.98],
        [0.62, 0.98],
        [0.62, 1.52],
        [0.52, 1.64],
        [-0.52, 1.64],
        [-0.62, 1.52],
      ].map(([T, N]) => new ye(T, N)),
    ),
    p = new at(v, {
      depth: 1.2,
      bevelEnabled: !0,
      bevelThickness: 0.02,
      bevelSize: 0.015,
      bevelSegments: 1,
    });
  (U(o, a, p, Z(0, 0, 2.08), r), p.dispose());
  for (const T of [1, -1])
    for (let N = 0; N < 6; N++) {
      const K = 2.5 + N * 0.1;
      U0(
        o,
        "trim",
        T * 0.63 - 0.004,
        1.25,
        K,
        T * 0.63 + 0.004,
        1.45,
        K + 0.04,
        [0.02, 0.02, 0.02],
        0.002,
      );
    }
  f0(o, h, new z(0, 1.66, 2.1), new z(0, 1.66, 3.25), 0.02, 0.02, L0, y);
  const d = new je();
  {
    (d.moveTo(1.95, 1.3),
      d.lineTo(3.1, 1.3),
      d.quadraticCurveTo(3.34, 1.3, 3.36, 1.05),
      d.lineTo(3.36, 0.92),
      d.lineTo(2.55 + 0.64 * Math.cos(0.4), 0.53 + 0.64 * Math.sin(0.4)));
    for (let O = 1; O <= 8; O++) {
      const k = 0.4 + (O / 8) * (Math.PI - 0.8);
      d.lineTo(2.55 + 0.64 * Math.cos(k), 0.53 + 0.64 * Math.sin(k));
    }
    (d.lineTo(1.95, 0.95), d.lineTo(1.95, 1.3));
  }
  for (const T of [1, -1]) {
    const N = new at(d, {
      depth: 0.5,
      bevelEnabled: !0,
      bevelThickness: 0.015,
      bevelSize: 0.015,
      bevelSegments: 1,
    });
    (U(
      o,
      a,
      N,
      new J0()
        .makeBasis(new z(0, 0, 1), new z(0, 1, 0), new z(1, 0, 0))
        .setPosition(T > 0 ? 0.66 : -1.16, 0, 0),
      r,
    ),
      N.dispose());
    const K = T * 0.9,
      O = new z(K, 1.14, 3.4);
    if (
      (U(o, h, new b0(0.11, 0.1, 0.1, 12), Z(O.x, O.y, O.z, Math.PI / 2), y), l)
    )
      T0(
        o,
        "char",
        (W, q) => ({ p: new z(W, q, 3.45), n: new z(0, 0, 1) }),
        [
          [K - 0.08, 1.06],
          [K + 0.08, 1.06],
          [K + 0.08, 1.22],
          [K - 0.08, 1.22],
        ],
        { nu: 2, nv: 2, off: 0, bulge: -0.01, rim: 0.005 },
      );
    else {
      const W = new nt(0.095, 12, 4, 0, Math.PI * 2, 0, 0.9);
      (U(
        o,
        "lamp",
        W,
        Z(O.x, O.y, O.z + 0.01, Math.PI / 2),
        [0.55, 0.56, 0.58],
      ),
        W.dispose());
    }
    for (const W of [-0.05, 0, 0.05])
      f0(
        o,
        h,
        new z(K + W, 1.03, 3.48),
        new z(K + W, 1.25, 3.48),
        0.008,
        0.008,
        new z(0, 0, 1),
        y,
      );
    l ||
      T0(
        o,
        s.hazards ? "hazard" : "lamp",
        (W, q) => ({ p: new z(W, q, 3.36), n: new z(0, 0, 1) }),
        [
          [T * 1.02 - 0.04, 1.2],
          [T * 1.02 + 0.04, 1.2],
          [T * 1.02 + 0.04, 1.26],
          [T * 1.02 - 0.04, 1.26],
        ],
        {
          nu: 1,
          nv: 1,
          off: 0.02,
          bulge: 0.004,
          rim: 0.02,
          col: st.amber,
          rimCol: y,
        },
      );
    for (const [W, q] of [
      [0.62, 0],
      [0.86, 0.02],
    ])
      U0(
        o,
        h,
        T * 1.02,
        W - 0.02,
        1.15 + q,
        T * 1.18,
        W + 0.02,
        1.75 + q,
        y,
        0.004,
      );
    const k = new z(T * 1.1, 2.1, 1.98),
      P = new z(T * 1.45, 2.1, 2.02);
    (f0(o, h, k, P, 0.025, 0.025, L0, y),
      f0(
        o,
        h,
        k.clone().add(new z(0, -0.3, 0)),
        P.clone().add(new z(0, -0.25, 0)),
        0.02,
        0.02,
        L0,
        y,
      ),
      U(o, h, new p0(0.2, 0.32, 0.04), Z(P.x, 1.95, P.z), y),
      l ||
        j0(
          o,
          "glass",
          le(new z(P.x, 1.95, P.z - 0.021), new z(0, 0, -1)),
          0.17,
          0.28,
          0,
          (W, q) => de(0, W, q),
        ));
  }
  l ||
    f0(
      o,
      "trim",
      new z(0, 1.8, 2.035),
      new z(0, 2.4, 1.955),
      0.05,
      0.03,
      new z(0, 0, 1),
      r,
    );
  for (let T = 0; T < 2; T++)
    U(
      o,
      l ? "burnt" : a,
      g0(0.16, 0.46, 0.34, 0.02),
      Z(1.17, 1.02, 0.35 - T * 0.38, 0, 0, 0),
      l ? r : oe(r, 0.9),
    );
  (U0(o, h, 1.08, 0.78, -0.1, 1.12, 1.3, 0.7, y, 0.004),
    U(
      o,
      h,
      new b0(0.2, 0.2, 0.75, 12),
      Z(-0.85, 0.75, 0.3, Math.PI / 2),
      l ? [1, 1, 1] : f,
    ));
  const i = 1.2,
    u = -3.5,
    x = 0.62,
    w = 1.28,
    _ = l ? "burnt" : a,
    M = l ? r : oe(r, 0.92);
  U0(o, _, -i, w - 0.06, u, i, w, x, M, 0.005);
  for (const T of [1, -1]) {
    for (const [N, K] of [
      [w + 0.02, w + 0.16],
      [w + 0.19, w + 0.33],
      [w + 0.36, w + 0.5],
    ])
      U0(
        o,
        _,
        T * i - 0.025,
        N,
        u + 0.02,
        T * i + 0.025,
        K,
        x - 0.02,
        M,
        0.004,
      );
    for (let N = u + 0.05; N < x; N += 0.8)
      U0(
        o,
        h,
        T * i - 0.035,
        w - 0.1,
        N,
        T * i + 0.035,
        w + 0.54,
        N + 0.07,
        y,
        0.004,
      );
  }
  U0(o, _, -i, w, x - 0.03, i, w + 0.75, x, M, 0.004);
  const C = ie(s.doors?.rr ?? (l && c() < 0.4 ? 1.4 : 0), 0, 1.6);
  {
    const T = Z(0, w, u, C);
    for (const [N, K] of [
      [0.02, 0.16],
      [0.19, 0.33],
      [0.36, 0.5],
    ])
      U(
        o,
        _,
        new p0(i * 2, K - N, 0.05),
        T.clone().multiply(Z(0, (N + K) / 2, -0.025)),
        M,
      );
    l ||
      j0(
        o,
        "decal",
        T.clone().multiply(new J0().makeRotationY(Math.PI)),
        0.5,
        0.125,
        0.052,
        (N, K) => ze("army_no", N, K),
      );
  }
  for (const T of [1, -1])
    (T0(
      o,
      l ? "char" : "lamp",
      (N, K) => ({ p: new z(N, K, u - 0.01), n: new z(0, 0, -1) }),
      [
        [T * 0.9, 1],
        [T * 1.05, 1],
        [T * 1.05, 1.08],
        [T * 0.9, 1.08],
      ],
      l
        ? { nu: 1, nv: 1, off: 0.02, bulge: 0, rim: 0.02 }
        : {
            nu: 1,
            nv: 1,
            off: 0.03,
            bulge: 0.004,
            rim: 0.03,
            col: st.tail,
            rimCol: y,
          },
    ),
      U0(o, _, T * 0.74, 1.14, -3.6, T * 1.22, 1.18, -0.95, M, 0.004),
      U(o, "trim", new p0(0.4, 0.34, 0.01), Z(T * 0.99, 0.55, -3.5), y));
  (f0(o, h, new z(0, 0.85, -3.45), new z(0, 0.85, -3.62), 0.1, 0.1, L0, y),
    Ho(t, o, i, w + 0.5, u, x));
}
