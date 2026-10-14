// assets/district-BhfbivMT 14 — addscaledvector
// Lines 4409-4541 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function qe(n, t, e, r, o, l, s = {}) {
  const c = n.burnt,
    a = n.seatCol;
  if (s.lite && !c) {
    const i = s.back ?? 0.6;
    (U(t, "trim", new p0(l, 0.12, 0.46), Z(e, r - 0.06, o + 0.25, -0.06), a),
      U(
        t,
        "trim",
        new p0(l, i, 0.1),
        Z(e, r + i / 2 - 0.02, o - 0.02, -0.2),
        a,
      ));
    return;
  }
  if (s.lite && c) {
    const i = l / 2 - 0.02,
      u = r - 0.08,
      x = s.back ?? 0.6,
      w = new z(0, Math.cos(0.2), -Math.sin(0.2)),
      _ = "iron",
      M = [1, 1, 1],
      C = [
        [e - i, u, o + 0.02],
        [e + i, u, o + 0.02],
        [e + i, u, o + 0.46],
        [e - i, u, o + 0.46],
      ].map((T) => new z(...T));
    for (let T = 0; T < 4; T++)
      f0(t, _, C[T], C[(T + 1) % 4], 0.02, 0.02, L0, M);
    for (const T of [-i, i])
      (f0(
        t,
        _,
        new z(e + T, u, o),
        new z(e + T, u, o).addScaledVector(w, x),
        0.022,
        0.022,
        new z(0, 0, 1),
        M,
      ),
        f0(
          t,
          _,
          new z(e + T, u, o + 0.4),
          new z(e + T, u - 0.36, o + 0.4),
          0.02,
          0.02,
          new z(0, 0, 1),
          M,
        ));
    f0(
      t,
      _,
      new z(e - i, u, o).addScaledVector(w, x),
      new z(e + i, u, o).addScaledVector(w, x),
      0.022,
      0.022,
      L0,
      M,
    );
    return;
  }
  if (!c) {
    (U(t, "trim", g0(l, 0.13, 0.5, 0.045), Z(e, r - 0.065, o + 0.25, -0.08), a),
      U(
        t,
        "trim",
        g0(l, s.back ?? 0.6, 0.12, 0.045),
        Z(e, r + (s.back ?? 0.6) / 2 - 0.02, o - 0.02, -0.28),
        a,
      ),
      s.head !== !1 &&
        U(
          t,
          "trim",
          g0(Math.min(0.27, l * 0.55), 0.17, 0.1, 0.04),
          Z(e, r + (s.back ?? 0.6) + 0.07, o - 0.2, -0.25),
          a,
        ));
    return;
  }
  const h = "iron",
    f = l / 2 - 0.02,
    y = r - 0.08,
    m = s.back ?? 0.6,
    b = [
      [e - f, y, o + 0.02],
      [e + f, y, o + 0.02],
      [e + f, y, o + 0.48],
      [e - f, y, o + 0.48],
    ].map((i) => new z(...i));
  for (let i = 0; i < 4; i++)
    f0(t, h, b[i], b[(i + 1) % 4], 0.018, 0.018, L0, [1, 1, 1]);
  for (let i = 1; i < 4; i++) {
    const u = o + 0.02 + i * 0.115;
    for (let x = 0; x < 4; x++) {
      const w = e - f + (x / 4) * f * 2,
        _ = e - f + ((x + 1) / 4) * f * 2;
      f0(
        t,
        h,
        new z(w, y + 0.01, u + (x % 2 ? 0.03 : -0.03)),
        new z(_, y + 0.01, u + (x % 2 ? -0.03 : 0.03)),
        0.006,
        0.006,
        L0,
        [1, 1, 1],
      );
    }
  }
  const v = new z(0, Math.cos(0.28), -Math.sin(0.28));
  for (const i of [-f, f]) {
    const u = new z(e + i, y, o),
      x = u.clone().addScaledVector(v, m);
    f0(t, h, u, x, 0.02, 0.02, new z(0, 0, 1), [1, 1, 1]);
  }
  const p = new z(e - f, y, o).addScaledVector(v, m),
    d = new z(e + f, y, o).addScaledVector(v, m);
  f0(t, h, p, d, 0.02, 0.02, L0, [1, 1, 1]);
  for (let i = 1; i < 3; i++) {
    const u = new z(e - f, y, o).addScaledVector(v, (m * i) / 3),
      x = new z(e + f, y, o).addScaledVector(v, (m * i) / 3);
    f0(t, h, u, x, 0.006, 0.006, L0, [1, 1, 1]);
  }
  n.rng() < 0.7 &&
    U(
      t,
      "char",
      g0(l * (0.4 + n.rng() * 0.4), 0.05, 0.3, 0.02),
      Z(e + (n.rng() - 0.5) * 0.1, y + 0.03, o + 0.28, 0, n.rng()),
    );
}
