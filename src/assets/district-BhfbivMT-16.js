// assets/district-BhfbivMT 16 — math
// Lines 5107-5342 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function Pn(n, t) {
  const e = n.dress.cabin,
    r = t.sink("interior"),
    o = t.burnt,
    l = t.rng,
    s = e.floor,
    c = n.cabin[0] + 0.04,
    a = n.cabin[1] - 0.02,
    h = Math.min(n.hw(c), n.hw(a)) - 0.12,
    f = o ? "burnt" : "trim",
    y = o ? [0.05, 0.045, 0.04] : [0.03, 0.03, 0.03];
  (U(
    r,
    f,
    g0(h * 2, 0.04, a - c, 0.005),
    Z(0, s - 0.02, (c + a) / 2),
    o ? y : [0.035, 0.034, 0.033],
  ),
    e.flat ||
      U(
        r,
        f,
        g0(0.22, 0.14, Math.min(1.4, a - c - 0.2), 0.04),
        Z(0, s + 0.05, a - Math.min(1.4, a - c - 0.2) / 2 - 0.1),
        y,
      ));
  const m = e.dash,
    b = n.belt(m),
    v = n.hw(m - 0.3) - 0.1,
    p = new je(
      [
        [m, s + 0.1],
        [m, b - 0.03],
        [m - 0.3, b + 0.02],
        [m - 0.48, b - 0.03],
        [m - 0.52, b - 0.2],
        [m - 0.36, b - 0.33],
        [m - 0.32, s + 0.1],
      ].map(([M, C]) => new ye(M, C)),
    ),
    d = new at(p, {
      depth: v * 2,
      bevelEnabled: !0,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 1,
    });
  (U(
    r,
    o ? "char" : "trim",
    d,
    new J0()
      .makeBasis(new z(0, 0, 1), new z(0, 1, 0), new z(1, 0, 0))
      .setPosition(-v, 0, 0),
    o ? [1, 1, 1] : [0.04, 0.04, 0.042],
  ),
    d.dispose());
  const i = -0.37,
    u = b - 0.03,
    x = m - 0.62 + (e.flat ? 0.2 : 0);
  (U(
    r,
    o ? "iron" : "trim",
    new Ve(0.185, 0.016, 4, 14),
    Z(i, u, x, e.flat ? 0.9 : 0.43),
    k0,
  ),
    f0(
      r,
      o ? "iron" : "trim",
      new z(i, u, x),
      new z(i, u - 0.16, x + 0.3),
      0.05,
      0.05,
      new z(1, 0, 0),
      k0,
    ),
    o ||
      U(
        r,
        "trim",
        new b0(0.06, 0.06, 0.04, 10),
        Z(i, u, x, Math.PI / 2 + (e.flat ? 0.9 : 0.43)),
        k0,
      ));
  const w = s + 0.36,
    _ = e.seatF;
  if (e.flat) qe(t, r, 0, w, _, h * 2 - 0.04, { back: 0.5, head: !1 });
  else for (const M of [-0.36, 0.36]) qe(t, r, M, w, _, 0.5);
  if (
    (e.bench &&
      qe(t, r, 0, w + 0.02, e.seatR, h * 2 - 0.06, {
        back: 0.56,
        head: !1,
        lite: o,
      }),
    e.shelf &&
      !o &&
      U(
        r,
        "trim",
        g0(h * 2, 0.02, e.shelf[1] - e.shelf[0], 0.005),
        Z(0, n.belt(e.shelf[0]) - 0.02, (e.shelf[0] + e.shelf[1]) / 2),
        [0.03, 0.03, 0.03],
      ),
    e.cargo)
  ) {
    const M = n.wheel.zr,
      C = n.arches.find((K) => K.z === M),
      T = (C ? C.y + C.r : 0.75) + 0.03;
    for (const K of [1, -1])
      U(
        r,
        f,
        g0(0.4, T - s, (C ? C.r : 0.4) * 2 + 0.06, 0.03),
        Z(K * (h - 0.18), (T + s) / 2, M),
        y,
      );
    let N = _ - 0.55;
    for (; N > n.z0 + 0.35;) {
      for (let K = 0; K < 3; K++) {
        const O = 0.3 + l() * 0.25,
          k = 0.2 + l() * 0.25,
          P = 0.3 + l() * 0.2,
          W = -0.55 + K * 0.52 + (l() - 0.5) * 0.1;
        l() < 0.25 ||
          (Math.abs(W) + O / 2 > h - 0.4 && Math.abs(N - P / 2 - M) < 0.62) ||
          (U(
            r,
            o ? "char" : "trim",
            g0(O, o ? k * 0.4 : k, P, 0.01),
            Z(W, s + (o ? k * 0.2 : k / 2), N - P / 2, 0, (l() - 0.5) * 0.3),
            o ? [1, 1, 1] : me(l() < 0.5 ? "#8a6a44" : "#9c7c52"),
          ),
          !o &&
            l() < 0.5 &&
            U(
              r,
              "trim",
              g0(O * 0.9, k * 0.8, P * 0.9, 0.01),
              Z(W, s + k + k * 0.4, N - P / 2, 0, (l() - 0.5) * 0.4),
              me("#7e603c"),
            ));
      }
      N -= 0.6;
    }
  }
}
function So(n, t) {
  const e = t.sink("under"),
    r = n.dress,
    o = t.burnt,
    l = o ? "iron" : "trim",
    s = n.wheel,
    c = [0.012, 0.012, 0.013],
    a = [1, 1, 1],
    h = n.z0 + 0.5,
    f = n.z1 - 0.45,
    y = Math.min(0.62, s.x - s.w / 2 - 0.08);
  if (!r.bed) {
    U(e, l, new p0(y * 2, 0.02, f - h), Z(0, 0.18, (h + f) / 2), c);
    for (const p of [-0.28, 0.28])
      U(e, l, new p0(0.06, 0.04, f - h - 0.3), Z(p, 0.155, (h + f) / 2), c);
  }
  const m = s.R;
  for (const p of s.axles || [s.zf, s.zr])
    for (const d of [1, -1]) {
      const i = new z(d * (s.x - s.w / 2 - 0.02), m - 0.04, p);
      (f0(
        e,
        "iron",
        i,
        new z(d * 0.34, m - 0.08, p + 0.12),
        0.05,
        0.035,
        L0,
        a,
      ),
        f0(
          e,
          "iron",
          i,
          new z(d * 0.34, m - 0.08, p - 0.14),
          0.04,
          0.03,
          L0,
          a,
        ),
        !r.bed &&
          !s.axles &&
          f0(
            e,
            "iron",
            i.clone().add(new z(-d * 0.06, 0, 0)),
            new z(d * (s.x - 0.2), m + 0.3, p),
            0.06,
            0.06,
            new z(0, 0, 1),
            a,
          ));
    }
  (s.axles ||
    f0(
      e,
      "iron",
      new z(-s.x + 0.14, s.zr > -9 ? m - 0.05 : 0, s.zr),
      new z(s.x - 0.14, m - 0.05, s.zr),
      0.07,
      0.07,
      new z(0, 0, 1),
      a,
    ),
    r.engine &&
      U(
        e,
        "iron",
        new p0(0.5, 0.14, 0.5),
        Z(-0.05, 0.22, (r.engine[0] + r.engine[1]) / 2),
      ));
  const b = r.exhaust ?? 0.35,
    v = r.bed ? -1.2 : n.z0 + 0.08;
  (f0(
    e,
    "iron",
    new z(b, 0.19, r.bed ? 1.2 : n.z1 - 1.2),
    new z(b, 0.19, v + 0.5),
    0.05,
    0.05,
    L0,
    a,
  ),
    f0(e, "iron", new z(b, 0.19, v + 0.5), new z(b, 0.2, v), 0.05, 0.05, L0, a),
    U(e, "iron", g0(0.28, 0.15, 0.45, 0.05), Z(b - 0.05, 0.2, v + 0.45)),
    r.fuel != null &&
      U(e, l, g0(0.7, 0.18, 0.45, 0.04), Z(-0.15, 0.22, r.fuel), c));
}
