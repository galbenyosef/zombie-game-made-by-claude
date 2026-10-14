// assets__bedroom-Se-_w21f 02 — math
// Lines 68-420 of readable/assets__bedroom-Se-_w21f.pretty.js (statement-aligned).
function Ie(N, t) {
  const w = new u0();
  w.name = "bed";
  const e = new M0("bed"),
    o = t.iron,
    M = t.brass,
    s = nt(41),
    h = 0.085,
    i = 2.065,
    z = 1.635,
    D = 3.165,
    C = 0.019,
    V = (a, r, n) => {
      (e.add(
        E(
          [
            [0, 0],
            [0.026, 0],
            [0.028, 0.012],
            [0.022, 0.03],
            [C, 0.05],
            [C, n - 0.05],
            [0.024, n - 0.035],
            [0.024, n - 0.02],
            [0.012, n],
          ],
          a,
          0,
          r,
          { segs: 20, tile: 0.5 },
        ),
        o,
      ),
        e.add(
          E(
            [
              [0, 0],
              [0.012, 0],
              [0.016, 0.006],
              [0.026, 0.022],
              [0.031, 0.042],
              [0.028, 0.06],
              [0.018, 0.074],
              [0.006, 0.082],
              [0, 0.083],
            ],
            a,
            n - 0.004,
            r,
            { segs: 24, tile: 0.5 },
          ),
          M,
        ));
      for (const Y of n > 1.2 ? [0.44, 1.02, n - 0.12] : [0.44, n - 0.12])
        e.add(
          E(
            [
              [0.02, -0.012],
              [0.027, -0.008],
              [0.029, 0],
              [0.027, 0.008],
              [0.02, 0.012],
            ],
            a,
            Y,
            r,
            { segs: 20 },
          ),
          M,
        );
    },
    A = 1.42,
    x = 0.94;
  (V(h, z, A), V(h, D, A), V(i, z, x), V(i, D, x));
  const k = (a, r, n) => {
    const Y = (a - z) / (D - z);
    return r + (n - r) * Math.sin(Math.PI * Y);
  };
  e.add(v0([h, 0.42, z], [h, 0.42, D], 0.012, 10), o);
  const _ = (a, r, n) => {
    const Y = [];
    for (let P = 0; P <= 24; P++) {
      const q = z + ((D - z) * P) / 24;
      Y.push([h, k(q, a, r), q]);
    }
    e.add(h0(Y, n, 64, 10), o);
  };
  (_(1.24, 1.36, 0.014), _(1.08, 1.16, 0.009));
  const y = 13;
  for (let a = 1; a < y; a++) {
    const r = z + ((D - z) * a) / y,
      n = k(r, 1.24, 1.36);
    (e.add(v0([h, 0.42, r], [h, n, r], 0.0078, 8), o),
      e.add(
        E(
          [
            [0.009, -0.01],
            [0.0125, -0.006],
            [0.0135, 0],
            [0.0125, 0.006],
            [0.009, 0.01],
          ],
          h,
          0.78,
          r,
          { segs: 12 },
        ),
        M,
      ));
  }
  for (const a of [-1, 1]) {
    const r = [];
    for (let n = 0; n <= 40; n++) {
      const Y = (n / 40) * Math.PI * 1.65,
        P = 0.075 * (1 - (n / 40) * 0.62);
      r.push([
        h,
        1.23 + Math.sin(Y) * P * 0.9,
        2.4 + a * (0.1 + Math.cos(Y) * P),
      ]);
    }
    e.add(h0(r, 0.0065, 60, 8), o);
  }
  (e.add(
    E(
      [
        [0, 0],
        [0.03, 0],
        [0.036, 0.006],
        [0.03, 0.013],
        [0.012, 0.02],
        [0, 0.021],
      ],
      h + 0.006,
      1.3,
      2.4,
      { segs: 24, rot: [0, 0, -Math.PI / 2] },
    ),
    M,
  ),
    e.add(v0([i, x - 0.05, z], [i, x - 0.05, D], 0.014, 12), o),
    e.add(v0([i, 0.42, z], [i, 0.42, D], 0.012, 10), o));
  for (let a = 1; a < 6; a++) {
    const r = z + ((D - z) * a) / 6;
    e.add(v0([i, 0.42, r], [i, x - 0.05, r], 0.0078, 8), o);
  }
  const L = [
    [0, 0],
    [0.004, 0],
    [0.004, 0.036],
    [0.034, 0.036],
    [0.034, 0.04],
    [0, 0.04],
  ];
  (e.add(
    Q0(
      L.map(([a, r]) => [a, r]),
      [h, 0.3, z + 0.004],
      [i, 0.3, z + 0.004],
      [0, 0, 1],
    ),
    o,
  ),
    e.add(
      Q0(
        L.map(([a, r]) => [a, r]),
        [i, 0.3, D - 0.004],
        [h, 0.3, D - 0.004],
        [0, 0, -1],
      ),
      o,
    ),
    e.add(
      R(h + 0.02, 0.33, z + 0.03, i - 0.02, 0.345, D - 0.03, 0.004),
      t.ironDark,
    ));
  const W = zt.top,
    X = 0.11,
    F = 2.04,
    G = 1.665,
    m = 3.135;
  e.add(R(X, 0.35, G, F, W - 0.032, m, 0.055, "x", 4), t.ticking);
  {
    const a = W - 0.05,
      r = [
        [F - 0.05, a, G + 0.005],
        [F + 0.003, a, G + 0.05],
        [F + 0.003, a, m - 0.05],
        [F - 0.05, a, m - 0.005],
      ];
    e.add(h0(r, 0.0055, 40, 6), t.ticking);
  }
  const S = (a, r) => {
      const n = g0(0.45, 0.75, a) * (1 - g0(1.5, 2, a)),
        Y = Math.exp(-Math.pow((r - 2.42) / 0.2, 2));
      return -0.022 * n * Y;
    },
    u = (a, r, n) => {
      const Y = s.fbm2(a * 3.2, r * 3.2, 3),
        P = 1 - Math.abs(s.n2(a * 7.5 + 11, r * 3.1 - 4)),
        q = 1 - Math.abs(s.n2(a * 2.4 - 3, r * 8 + 9));
      return n * (Y * 0.6 + Math.pow(P, 6) * 0.9 + Math.pow(q, 8) * 0.6);
    },
    c = (a, r) =>
      W +
      0.004 +
      S(a, r) +
      u(a, r, 0.006) * g0(0, 0.12, Math.min(a - X, F - a, r - G, m - r) + 0.05),
    g = (a, r, n) => (Y, P, q) => {
      const Q = Y === "n" ? 0 : Y === "s" ? 1 : Y === "e" ? 2 : 3,
        H =
          Math.sin(
            P * (6.2831 / r) + n + Q * 1.7 + s.n2(P * 3 + Q * 7, n) * 2.2,
          ) *
            0.6 +
          s.n2(P * 9 + n, Q * 5) * 0.4;
      return a * H * g0(0.02, 0.14, q);
    },
    b = Bt({
      x0: X + 0.01,
      x1: F - 0.01,
      z0: G + 0.01,
      z1: m - 0.01,
      top: c,
      hang: { w: 0.02, e: 0.1, n: 0.2, s: 0.2 },
      r: 0.05,
      res: 0.018,
      floor: 0.36,
      fold: g(0.012, 0.19, 1.3),
      hem: (a, r) => 0.8 + 0.2 * s.n2(r * 6 + (a === "n" ? 3 : 8), 2),
    });
  (Tt(b, 2.047), e.add(b, t.linen));
  const p = (a) =>
      1.02 + ((a - G) / (m - G)) * 0.4 + 0.05 * Math.sin(a * 5.1 + 1),
    v = [
      [1.28, 1.72, 1.98, 1.64, 0.026, 0.05],
      [1.33, 2.12, 2.02, 2.42, 0.034, 0.07],
      [1.45, 2.68, 2.02, 3.08, 0.03, 0.06],
      [1.62, 1.86, 1.92, 2.22, 0.02, 0.045],
      [1.55, 2.98, 1.86, 3.14, 0.024, 0.05],
      [1.7, 2.5, 2.03, 2.6, 0.018, 0.04],
    ],
    I = (a, r) => {
      let n = 0;
      for (const [Y, P, q, Q, H, e0] of v) {
        const n0 = q - Y,
          i0 = Q - P,
          l0 = n0 * n0 + i0 * i0,
          s0 = Pt(((a - Y) * n0 + (r - P) * i0) / l0),
          t0 = a - (Y + n0 * s0),
          p0 = r - (P + i0 * s0);
        n +=
          H *
          Math.exp(-(t0 * t0 + p0 * p0) / (e0 * e0)) *
          Math.pow(Math.sin(Math.PI * s0), 0.6);
      }
      return n;
    },
    Z = (a, r) => {
      const n = a - p(r),
        Y = 0.7 + 0.55 * s.n2(r * 4.1, 7) + 0.25 * s.n2(r * 11, 2),
        P = 0.1 * Math.exp(-Math.pow((n - 0.12) / 0.075, 2)) * Y,
        q =
          0.045 *
          Math.exp(-Math.pow((n - 0.3) / 0.07, 2)) *
          (0.5 + 0.7 * s.n2(r * 3.3, 3)),
        Q = g0(-0.005, 0.05, n),
        H = 1 - g0(-0.05, -0.008, n);
      return (
        c(Math.max(a, 1), r) +
        0.004 +
        0.024 * Q -
        0.02 * H +
        (P + q + I(a, r)) * Q +
        u(a + 5, r - 3, 0.016) * Q
      );
    },
    j = 1.02,
    T = F + 0.01,
    d = G - 0.005,
    K = m + 0.005,
    f = Bt({
      x0: j - 0.06,
      x1: T,
      z0: d,
      z1: K,
      top: Z,
      hang: { e: 0.2, n: 0.44, s: 0.52 },
      r: 0.06,
      res: 0.016,
      floor: 0.012,
      fold: (
        (a) => (r, n, Y) =>
          0.5 * (a(r, n, Y) + 0.045 * g0(0.02, 0.14, Y)) + 0.004
      )(g(0.045, 0.24, 4.1)),
      hem: (a, r) =>
        0.7 + 0.3 * (0.5 + 0.5 * s.n2(r * 3.4 + (a === "s" ? 9 : 1), 5)),
    });
  (Ae(f, p, d, K), Tt(f, 2.052), e.add(f, t.wool));
  {
    const a = bt(
      (r, n) => {
        const Y = G + 0.02 + r * (m - G - 0.04),
          P = p(Y) + 0.02 + n * 0.2,
          q = Z(P, Y) + 0.006 + 0.004 * Math.sin(n * Math.PI);
        return [P, q, Y];
      },
      90,
      14,
      1.45,
      0.2,
      !1,
      !0,
    );
    (Gt(a, "zx", 1), e.add(a, t.linen));
  }
  const U = (a, r, n, Y, P, q, Q, H = 0, e0 = 0) => {
    const n0 = Xe(n, Y, P, q, s);
    (n0.rotateZ(H),
      n0.rotateY(e0),
      n0.translate(a, Q, r),
      Gt(n0, "xz", 1),
      e.add(n0, t.linen));
  };
  (U(
    0.48,
    2.42,
    0.24,
    0.34,
    0.075,
    { x: 0.02, z: -0.02, r: 0.13, d: 0.05 },
    W + 0.004 + 0.022,
  ),
    U(0.19, 2.38, 0.22, 0.33, 0.068, null, W + 0.215, -1.18, 0.06));
  const O = _e(b, 0.86, 2.52, 0.36, 0.3),
    l = new r0(O, t.stain);
  return (
    (l.name = "bed:stain"),
    (l.receiveShadow = !0),
    (l.renderOrder = 1),
    w.add(l),
    e.flush(w),
    N.scene.add(w),
    {
      group: w,
      colliders: [
        { x0: zt.x0, x1: zt.x1, z0: zt.z0, z1: zt.z1, y0: 0, y1: 0.9 },
      ],
      sheetTop: c,
      coverTop: Z,
    }
  );
}
