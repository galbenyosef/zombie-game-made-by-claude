// assets__index-DQDjAbEY 13 — add
// Lines 3712-4015 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
function Na(e) {
  const l = t0.floorY,
    a = [],
    o = [],
    t = [],
    s = -2.25,
    n = 2.41,
    c = (d) => Math.max(0.05, _0(d, l + 0.02) - S0 - 0.008),
    i = 60;
  for (let d = 0; d <= i; d++) {
    const f = x0(s, n, d / i),
      p = c(f);
    (a.push(-p, l, f, p, l, f), o.push(0, 1, 0, 0, 1, 0));
  }
  for (let d = 0; d < i; d++) {
    const f = d * 2;
    t.push(f, f + 2, f + 1, f + 1, f + 2, f + 3);
  }
  e.addRaw(a, o, t, R.floor, {
    uvs: a.flatMap((d, f) => (f % 3 === 0 ? [a[f], a[f + 2]] : [])),
  });
  for (const d of [t0.seatX, -0.38])
    for (const f of [-0.17, 0.17])
      e.add(
        G(0.035, 0.012, 0.75, 0.003, 1),
        z(d + f, l + 0.006, t0.seatZ - 0.02),
        R.alu,
      );
  for (const d of [0.14, 0.58])
    e.add(G(0.04, 0.014, 2.1, 0.003, 1), z(d, l + 0.007, -0.95), R.alu);
  for (const [d, f] of [
    [-0.55, -1.9],
    [-0.55, -0.6],
    [0, -2.05],
    [-0.1, 0.4],
  ])
    e.add(
      new Z0(0.025, 0.006, 6, 16),
      z(d, l + 0.012, f, Math.PI / 2),
      R.steel,
    );
  e.add(
    g0(h(-0.62, l + 0.03, 2.405), h(0.62, l + 0.03, 2.405), 0.022, 12),
    null,
    R.alu,
  );
  for (const d of [-0.62, 0.62, -0.12, 0.12])
    e.add(G(0.05, 0.06, 0.05, 0.008, 1), z(d, l + 0.02, 2.405), R.dark);
}
function Fa(e, l) {
  const a = t0.panel;
  (e.add(G(a.x * 2, a.h, 0.16, 0.018, 2), D0(0, a.h / 2, -0.08), R.panelPaint),
    e.add(G(0.5, 0.2, 0.16, 0.018, 2), D0(0, -0.06, -0.08), R.panelPaint));
  const o = 26,
    t = 9,
    s = [],
    n = [],
    c = (u) => {
      const g = 1.49 + 0.2 * u * u;
      for (let P = 2.3; P < 3.3; P += 0.005)
        if (!(he(u, P) - S0 - 0.02 > g)) return P;
      return 3.2;
    };
  for (let u = 0; u <= o; u++) {
    const g = x0(-0.74, a.x - 0.02, u / o),
      P = c(g);
    for (let k = 0; k <= t; k++) {
      const y = k / t,
        M = x0(2.322, P, y),
        F = 1.548 - 0.04 * y - 0.03 * (g / a.x) ** 2;
      s.push(g, F, M);
    }
  }
  for (let u = 0; u < o; u++)
    for (let g = 0; g < t; g++) {
      const P = u * (t + 1) + g,
        k = P + t + 1;
      n.push(P, P + 1, k, P + 1, k + 1, k);
    }
  const i = new K0();
  (i.setAttribute("position", new L0(s, 3)),
    i.setIndex(n),
    i.computeVertexNormals(),
    e.add(i, null, R.glareTop));
  const d = (u) => 1.535 - 0.03 * (u / a.x) ** 2,
    f = [];
  for (let u = 0; u <= 30; u++) {
    const g = x0(-0.74, a.x - 0.02, u / 30);
    f.push(h(g, d(g), 2.322));
  }
  (e.add(v0(f, 0.011, 8, { cap0: !0, cap1: !0 }), null, R.glareTop),
    e.add(
      Ae(
        f.map((u) => h(u.x, u.y - 0.008, u.z - 0.001)),
        f.map((u) => h(u.x, u.y - 0.07, u.z + 0.012)),
        !1,
      ),
      null,
      R.plastic,
      { both: R.plastic },
    ));
  const p = [
    [0.4, 0],
    [0.135, 1],
    [-0.135, 2],
    [-0.4, 3],
  ];
  for (const [u, g] of p) {
    e.add(
      G(0.205, 0.262 - 0.012, 0.026, 0.008, 1),
      D0(u, (0.012 + 0.262) / 2, 0.013),
      R.bezel,
    );
    for (const W of [-1, 1])
      for (let N = 0; N < 5; N++)
        e.add(
          new pt(0.012, 0.016, 0.008),
          D0(u + W * (0.205 / 2 - 0.011), 0.012 + 0.045 + N * 0.042, 0.029),
          R.button,
        );
    for (let W = 0; W < 4; W++)
      e.add(
        new pt(0.022, 0.009, 0.008),
        D0(u - 0.06 + W * 0.04, 0.012 + 0.012, 0.029),
        R.button,
      );
    for (const W of [-1, 1])
      e.add(
        new V0(0.009, 0.01, 0.014, 14),
        new b0().multiplyMatrices(
          D0(u + W * (0.205 / 2 - 0.012), 0.262 - 0.014, 0.033),
          new b0().makeRotationX(Math.PI / 2),
        ),
        R.knob,
      );
    const M = 0.0175,
      F = 0.012 + 0.024,
      A = 0.262 - 0.018;
    l.quad(
      [
        xe(u + 0.205 / 2 - M, F, 0.0265),
        xe(u - 0.205 / 2 + M, F, 0.0265),
        xe(u - 0.205 / 2 + M, A, 0.0265),
        xe(u + 0.205 / 2 - M, A, 0.0265),
      ],
      g,
    );
  }
  (e.add(
    G(0.46 + 0.02, 0.312 - 0.27 + 0.012, 0.016, 0.004, 1),
    D0(0, (0.27 + 0.312) / 2, 0.008),
    R.bezel,
  ),
    l.quad(
      [
        xe(0.46 / 2, 0.27, 0.0165),
        xe(-0.46 / 2, 0.27, 0.0165),
        xe(-0.46 / 2, 0.312, 0.0165),
        xe(0.46 / 2, 0.312, 0.0165),
      ],
      4,
    ));
  const m = (u, g, P, k) => {
    const y = d(u) - 0.06,
      M = 2.324;
    (e.add(
      G(g + 0.012, P + 0.012, 0.012, 0.003, 1),
      z(u, y + P / 2, M + 0.004),
      R.bezel,
    ),
      l.quad(
        [
          h(u + g / 2, y, M - 0.0025),
          h(u - g / 2, y, M - 0.0025),
          h(u - g / 2, y + P, M - 0.0025),
          h(u + g / 2, y + P, M - 0.0025),
        ],
        k,
      ));
  };
  (m(0.27, 0.05, 0.032, 5), m(-0.27, 0.05, 0.032, 5), m(0, 0.1, 0.034, 6));
  const x = (u, g, P) => D0(u, g, P).multiply(new b0().makeRotationY(Math.PI)),
    w = (u) => {
      const g = Fe[u] || [0, 0, 1, 1];
      return (P, k, y, M) => [x0(g[0], g[2], y), x0(g[1], g[3], M)];
    },
    v = (u, g, P, k = 0.028) => {
      (e.add(
        new V0(k + 0.006, k + 0.008, 0.02, 28).rotateX(Math.PI / 2),
        D0(u, g, 0.004),
        R.bezel,
      ),
        e.add(new Ne(k, 28), x(u, g, 0.0145), R.decal, { uv: w(P) }),
        e.add(new Z0(k + 0.003, 0.004, 6, 28), D0(u, g, 0.0145), R.chrome),
        e.add(
          G(0.0025, k * 0.75, 0.002, 5e-4, 1),
          new b0().multiplyMatrices(
            D0(u, g, 0.0165),
            new b0()
              .makeRotationZ(u * 20 + 1)
              .multiply(new b0().makeTranslation(0, k * 0.32, 0)),
          ),
          R.white,
        ));
    };
  (v(-0.08, -0.07, "dialAsi"),
    v(0, -0.07, "dialAtt"),
    v(0.08, -0.07, "dialAlt"));
  for (const u of [1, -1]) {
    const g = u * 0.63;
    (e.add(new Z0(0.03, 0.008, 8, 24), D0(g, 0.21, 0.006), R.plastic),
      e.add(new ue(0.026, 16, 10), D0(g, 0.21, 0.004), R.plasticGrey),
      e.add(
        new Ne(0.014, 16),
        x(g, 0.21, 0.031),
        Z({ col: "#050505", rough: 0.9 }),
      ));
  }
  v(0.62, 0.08, "clock", 0.03);
  for (let u = 0; u < 4; u++) {
    const g = -0.56 - u * 0.04;
    (e.add(
      new V0(0.006, 0.006, 0.004, 10).rotateX(Math.PI / 2),
      D0(g, 0.1, 0.004),
      R.chrome,
    ),
      e.add(
        g0(h(0, 0, 0), h(0, 0.004, -0.014), [0.0026, 0.0018], 6),
        D0(g, 0.1, 0.006),
        R.knob,
      ));
  }
  e.add(new de(0.17, 0.008), x(-0.62, 0.135, 0.0015), R.decal, {
    uv: w("placard1"),
  });
  for (let u = 0; u < 7; u++)
    for (const g of [1, -1]) {
      const P = g * (0.27 + u * 0.06);
      Math.abs(P) > a.x - 0.04 ||
        (e.add(G(0.012, 0.012, 0.01, 0.002, 1), D0(P, 0.012, 0.004), R.chrome),
        e.add(
          g0(h(0, 0, 0), h(0, 0.002, -0.018), 0.0025, 6),
          D0(P, 0.012, 0.006),
          R.chrome,
        ));
    }
}
function Ea(e, l) {
  const a = h(0, 1.06, 2.26),
    o = h(0, 0.93, 1.74),
    t = a.distanceTo(o),
    s = Math.atan2(a.y - o.y, a.z - o.z),
    n = a.clone().add(o).multiplyScalar(0.5),
    c = new b0().makeRotationX(-s).setPosition(n.x, n.y - 0.12, n.z);
  (e.add(G(0.26, 0.24, t, 0.012, 1), c, R.panelPaint),
    e.add(
      G(0.26, 0.33, 0.12, 0.012, 1),
      z(0, t0.floorY + 0.165, 1.78),
      R.panelPaint,
    ),
    e.add(
      G(0.24, 0.26, 0.5, 0.012, 1),
      z(0, t0.floorY + 0.13, 2.05),
      R.panelPaint,
    ));
  const i = new de(0.235, t - 0.03),
    d = new b0()
      .makeRotationX(-Math.PI / 2 - s)
      .setPosition(n.x, n.y + 0.0015, n.z),
    f = Fe.pedestal || [0, 0, 1, 1];
  e.add(i, d, R.decal, {
    uv: (m, x, w, v) => [x0(f[0], f[2], 1 - w), x0(f[1], f[3], 1 - v)],
  });
  const p = (m, x, w = 0.002) =>
    a
      .clone()
      .lerp(o, m)
      .add(h(x, w, 0));
  (o.clone().sub(a).normalize(), h(0, 1, 0).applyAxisAngle(h(1, 0, 0), -s + 0));
  for (const [m, x] of [
    [0.06, 0.14],
    [0.3, 0.38],
  ]) {
    const w = p(m, -0.09, 0.003),
      v = p(m, 0.07, 0.003),
      u = p(x, 0.07, 0.003),
      g = p(x, -0.09, 0.003);
    l.quad([u, g, w, v], 7);
  }
  for (const m of [0.1, 0.34, 0.55, 0.75])
    for (const x of [0.085, -0.1]) {
      const w = p(m, x, 0.004);
      (e.add(
        new V0(0.014, 0.015, 0.016, 16),
        new b0().makeRotationX(-s).setPosition(w.x, w.y + 0.008, w.z),
        R.knob,
      ),
        e.add(
          new V0(0.009, 0.009, 0.026, 12),
          new b0().makeRotationX(-s).setPosition(w.x, w.y + 0.012, w.z),
          R.knob,
        ));
    }
}
