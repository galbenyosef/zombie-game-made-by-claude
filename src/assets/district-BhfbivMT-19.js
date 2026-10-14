// assets/district-BhfbivMT 19 — off
// Lines 5960-6376 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function Fo(n, t, e) {
  const r = t.sink("body"),
    o = t.burnt,
    l = t.o,
    s = t.rng,
    c = (d, i) => e.front(d, i),
    a = (d, i) => e.back(d, i),
    h = (d) => (i, u) => e.side(i, u, d),
    f = (d) => (o ? "char" : d && l.hazards ? "hazard" : "lamp"),
    y = (d, i, u, x, w = {}) =>
      T0(
        r,
        f(x),
        d,
        i,
        o
          ? {
              nu: w.nu ?? 2,
              nv: w.nv ?? 1,
              off: 0.002,
              bulge: -0.004,
              rim: 0.006,
            }
          : {
              nu: w.nu ?? 2,
              nv: w.nv ?? 1,
              off: w.off ?? 0.008,
              bulge: 0.006,
              col: st[u],
              rimCol: k0,
            },
      ),
    m = n.z1,
    b = n.z0;
  if (!o) {
    (j0(
      r,
      "glass",
      le(new z(0, 1.75, m - 0.012), new z(0, 0, 1)),
      2.12,
      1.5,
      0,
      (d, i) => de(t.tiles.get("front") || 0, d, i),
    ),
      j0(
        r,
        "glass",
        le(new z(0, 1.75, m - 0.02), new z(0, 0, -1)),
        2.12,
        1.5,
        0,
        (d, i) => de(0, d, i),
      ),
      j0(
        r,
        "glass",
        le(new z(0, 2.31, b + 0.012), new z(0, 0, -1)),
        1.7,
        0.58,
        0,
        (d, i) => de(t.tiles.get("back") || 0, d, i),
      ),
      U(r, "trim", new p0(0.05, 1.46, 0.03), Z(0, 1.75, m - 0.005), k0));
    for (const d of [-0.95, 0.05])
      f0(
        r,
        "trim",
        new z(d, 1.06, m + 0.02),
        new z(d + 0.85, 1.1, m + 0.02),
        0.02,
        0.015,
        new z(0, 0, 1),
        k0,
      );
  }
  const v = (d, i, u) =>
    T0(
      r,
      o ? "char" : "decal",
      d,
      i,
      o
        ? { nu: 2, nv: 1, off: 0.004, bulge: 0, rim: 0.01 }
        : {
            nu: 2,
            nv: 1,
            off: 0.004,
            bulge: 0,
            rim: 0.01,
            uv: (x, w) => ze(u, x, w),
          },
    );
  (v(
    c,
    [
      [-0.95, 2.56],
      [0.95, 2.56],
      [0.95, 2.76],
      [-0.95, 2.76],
    ],
    "bus_front",
  ),
    v(
      h(1),
      [
        [3.55, 2.42],
        [2.6, 2.42],
        [2.6, 2.6],
        [3.55, 2.6],
      ],
      "bus_side",
    ),
    v(
      a,
      [
        [0.32, 2.64],
        [-0.32, 2.64],
        [-0.32, 2.78],
        [0.32, 2.78],
      ],
      "bus_rear",
    ),
    v(
      h(1),
      [
        [4.2, 0.62],
        [4, 0.62],
        [4, 0.82],
        [4.2, 0.82],
      ],
      "bus_no",
    ),
    o ||
      T0(
        r,
        "decal",
        h(-1),
        [
          [-4.75, 0.45],
          [-3.55, 0.45],
          [-3.55, 1.05],
          [-4.75, 1.05],
        ],
        {
          nu: 2,
          nv: 1,
          off: 0.0015,
          bulge: 0,
          rim: 0.002,
          uv: (d, i) => ze("bus_ad", d, i),
        },
      ));
  for (const d of [1, -1]) {
    (y(
      c,
      [
        [d * 0.66, 0.62],
        [d * 0.84, 0.62],
        [d * 0.84, 0.76],
        [d * 0.66, 0.76],
      ],
      "head",
      !1,
      { nu: 2, nv: 2 },
    ),
      y(
        c,
        [
          [d * 0.86, 0.62],
          [d * 1.04, 0.62],
          [d * 1.04, 0.76],
          [d * 0.86, 0.76],
        ],
        "head",
        !1,
        { nu: 2, nv: 2 },
      ),
      y(
        c,
        [
          [d * 0.86, 0.79],
          [d * 1.08, 0.79],
          [d * 1.08, 0.86],
          [d * 0.86, 0.86],
        ],
        "amber",
        !0,
      ),
      y(
        a,
        [
          [d * 0.95, 0.72],
          [d * 1.13, 0.72],
          [d * 1.13, 1],
          [d * 0.95, 1],
        ],
        "tail",
        !1,
        { nv: 2 },
      ),
      y(
        a,
        [
          [d * 0.95, 1.02],
          [d * 1.13, 1.02],
          [d * 1.13, 1.16],
          [d * 0.95, 1.16],
        ],
        "amber",
        !0,
      ),
      y(
        a,
        [
          [d * 0.95, 1.18],
          [d * 1.13, 1.18],
          [d * 1.13, 1.3],
          [d * 0.95, 1.3],
        ],
        "white",
        !1,
      ));
    for (const i of [4.1, 1.7, -0.6, -3.2, -5.2])
      y(
        h(d),
        [
          [i + 0.05, 0.44],
          [i - 0.05, 0.44],
          [i - 0.05, 0.48],
          [i + 0.05, 0.48],
        ],
        "amber",
        !0,
        { nu: 1 },
      );
  }
  for (const [d, i, u] of [
    [c, 0.3, 0.56],
    [a, 0.36, 0.62],
  ])
    T0(
      r,
      o ? "burnt" : "trim",
      d,
      [
        [-1.16, i],
        [1.16, i],
        [1.16, u],
        [-1.16, u],
      ],
      {
        nu: 12,
        nv: 1,
        off: 0.04,
        bulge: 0.01,
        rim: 0.04,
        col: o ? [0.05, 0.045, 0.04] : [0.05, 0.05, 0.052],
      },
    );
  for (const [d, i, u] of [
    [c, 0.43, 1],
    [a, 0.49, -1],
  ]) {
    const x = d(0, i),
      w = le(x.p.clone().add(new z(0, 0, u * 0.045)), new z(0, 0, u));
    (U(
      r,
      o ? "char" : "trim",
      new p0(0.35, 0.18, 0.012),
      w.clone().multiply(Z(0, 0, 0.006)),
      k0,
    ),
      j0(r, "decal", w, 0.33, 0.165, 0.0125, (_, M) =>
        ze(o ? "plate_burnt" : "plate_g" + (u > 0 ? 0 : 1), _, M),
      ));
  }
  if (
    (T0(
      r,
      o ? "char" : "trim",
      a,
      [
        [-0.9, 0.78],
        [0.9, 0.78],
        [0.9, 1.55],
        [-0.9, 1.55],
      ],
      { nu: 6, nv: 2, off: 0.004, bulge: 0, rim: 0.01, col: k0 },
    ),
    !o)
  )
    for (let d = 0; d < 7; d++) {
      const i = 0.84 + d * 0.1;
      T0(
        r,
        "trim",
        a,
        [
          [-0.86, i],
          [0.86, i],
          [0.86, i + 0.035],
          [-0.86, i + 0.035],
        ],
        {
          nu: 4,
          nv: 1,
          off: 0.012,
          bulge: 0,
          rim: 0.012,
          col: [0.1, 0.1, 0.1],
        },
      );
    }
  (U(
    r,
    o ? "burnt" : "paint",
    g0(2, 0.16, 3.2, 0.06),
    Z(0, 2.98, -3.3),
    n.livery.roof,
  ),
    U(
      r,
      o ? "iron" : "trim",
      new p0(0.62, 0.05, 0.62),
      Z(0, 2.93, 1),
      [0.1, 0.1, 0.1],
    ));
  for (const d of [1, -1]) {
    const i = o ? "iron" : "trim",
      u = new z(d * 1.16, 2.72, 5.45),
      x = new z(d * 1.36, 2.7, 5.8),
      w = new z(d * 1.4, 2.25, 5.86);
    (f0(r, i, u, x, 0.03, 0.03, L0, k0),
      f0(r, i, x, w, 0.03, 0.03, new z(0, 0, 1), k0),
      !(o && s() < 0.5) &&
        (U(
          r,
          i,
          g0(0.2, 0.34, 0.06, 0.03),
          Z(w.x, w.y - 0.12, w.z + 0.02, 0, -d * 0.35, 0),
          k0,
        ),
        o ||
          j0(
            r,
            "glass",
            le(
              new z(w.x - d * 0.01, w.y - 0.12, w.z - 0.012),
              new z(-d * 0.34, 0, -0.94).normalize(),
            ),
            0.17,
            0.3,
            0,
            (_, M) => de(0, _, M),
          )));
  }
  const p = t.sink("busdoors");
  for (const [d, [i, u]] of n.doorsL.entries()) {
    const x =
      ie(
        (d === 0 ? l.doors?.fl : l.doors?.rl) ?? (o ? 0.4 + s() * 0.8 : 0),
        0,
        1.5,
      ) / 1.5;
    if (o && s() < 0.35) continue;
    const w = n.hw((i + u) / 2) - 0.06,
      _ = (u - i) / 2,
      M = 0.34,
      C = 2.3;
    for (const [T, N] of [
      [0, i],
      [1, u],
    ]) {
      const K = T === 0 ? 1 : -1,
        O = x * (d === 0 ? 1.45 : 0.25) * -K,
        k = new J0()
          .makeTranslation(w, 0, N)
          .multiply(new J0().makeRotationY(O))
          .multiply(new J0().makeTranslation(0, 0, 0));
      d === 1 &&
        k.premultiply(new J0().makeTranslation(0.08 * x, 0, K * x * _ * 0.9));
      const P = o ? "iron" : "trim",
        W = (q, Y, $, i0) =>
          U(p, P, new p0(q, Y, $), k.clone().multiply(Z(0, i0[0], i0[1])), k0);
      if (
        (W(0.04, C - M, 0.05, [(M + C) / 2, K * 0.025]),
        W(0.04, C - M, 0.05, [(M + C) / 2, K * (_ - 0.025)]),
        W(0.04, 0.05, _, [C - 0.025, (K * _) / 2]),
        W(0.04, 0.1, _, [M + 0.05, (K * _) / 2]),
        W(0.04, 0.05, _, [1.1, (K * _) / 2]),
        !o)
      )
        for (const [q, Y] of [
          [M + 0.1, 1.08],
          [1.12, C - 0.05],
        ]) {
          const $ = k
            .clone()
            .multiply(
              new J0()
                .makeBasis(new z(0, 0, -1), new z(0, 1, 0), new z(1, 0, 0))
                .setPosition(0.012, (q + Y) / 2, (K * _) / 2),
            );
          (j0(p, "glass", $, _ - 0.05, Y - q, 0, (i0, o0) => de(0, i0, o0)),
            j0(
              p,
              "glass",
              $.clone().multiply(new J0().makeRotationY(Math.PI)),
              _ - 0.05,
              Y - q,
              0.024,
              (i0, o0) => de(0, i0, o0),
            ));
        }
    }
  }
}
