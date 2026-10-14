// assets/living-DeOLLwnx 13 — part
// Lines 4065-4307 of readable/assets/living-DeOLLwnx.pretty.js (statement-aligned).
function Gt(a, t, r = 1.6, e = 0.88, o = 0.5, s = {}) {
  const n = s.wood || "wood_walnut";
  a.part(
    _(r + 0.04, 0.035, o + 0.03, { r: 0.012, m: 3 }).translate(
      0,
      e - 0.0175,
      0.01,
    ),
    n,
    { grain: "x" },
  );
  for (const u of [-1, 1])
    a.part(
      _(0.03, e - 0.16, o, { r: 0.005 }).translate(
        u * (r / 2 - 0.015),
        0.12 + (e - 0.16) / 2,
        0,
      ),
      n,
      { grain: "y" },
    );
  (a.part(_(r - 0.02, 0.06, o - 0.03, { r: 0.006 }).translate(0, 0.12, 0), n, {
    grain: "x",
  }),
    a.part(
      _(r - 0.03, e - 0.2, 0.012, { r: 0.002 }).translate(
        0,
        0.14 + (e - 0.2) / 2,
        -o / 2 + 0.01,
      ),
      n,
      { grain: "x", cast: !1 },
    ));
  for (const [u, b] of [
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
  ])
    a.part(
      j(
        [
          [0.03, 0],
          [0.036, 0.02],
          [0.026, 0.05],
          [0.034, 0.08],
          [0.03, 0.095],
        ],
        14,
      ).translate(u * (r / 2 - 0.05), 0, b * (o / 2 - 0.06)),
      n,
      { grain: "y" },
    );
  const l = r * 0.3,
    p = r - 2 * l - 0.04,
    d = o / 2;
  for (const u of [-1, 1]) {
    const b = u * (r / 2 - 0.02 - l / 2);
    (a.part(
      _(l - 0.01, e - 0.23, 0.022, { r: 0.006 }).translate(
        b,
        0.15 + (e - 0.23) / 2,
        d - 0.005,
      ),
      n,
      { grain: "y" },
    ),
      a.part(
        _(l - 0.1, e - 0.34, 0.014, { r: 0.018, m: 3 }).translate(
          b,
          0.15 + (e - 0.23) / 2,
          d + 0.008,
        ),
        n,
        { grain: "y" },
      ),
      a.part(
        j(
          [
            [0.01, 0],
            [0.013, 0.006],
            [0.008, 0.014],
            [0.012, 0.024],
            [0, 0.027],
          ],
          12,
        )
          .rotateX(e0 / 2)
          .translate(b - u * (l / 2 - 0.05), 0.15 + (e - 0.23) / 2, d + 0.006),
        "brass_aged",
        { cast: !1 },
      ));
  }
  const c = s.drawers ?? [0, 0, 0];
  for (let u = 0; u < 3; u++) {
    const b = (e - 0.23) / 3,
      k = 0.15 + b * (u + 0.5),
      S = c[u] || 0;
    (a.part(
      _(p - 0.01, b - 0.012, 0.022, { r: 0.005 }).translate(
        0,
        k,
        d - 0.005 + S,
      ),
      n,
      { grain: "x" },
    ),
      S > 0 &&
        a.part(
          _(p - 0.04, b - 0.03, S + 0.01, { r: 0.003 }).translate(
            0,
            k - 0.004,
            d - 0.02 + S / 2 - 0.01,
          ),
          n,
          { grain: "z", cast: !1 },
        ),
      a.part(
        T0(
          [
            [-0.06, k, d + 0.012 + S],
            [-0.05, k - 0.012, d + 0.03 + S],
            [0.05, k - 0.012, d + 0.03 + S],
            [0.06, k, d + 0.012 + S],
          ],
          0.004,
          10,
          6,
        ),
        "brass_aged",
        { cast: !1 },
      ));
    for (const h of [-1, 1])
      a.part(
        new Z0(0.012, 0.012, 0.006, 12)
          .rotateX(e0 / 2)
          .translate(h * 0.06, k, d + 0.01 + S),
        "brass_aged",
        { cast: !1 },
      );
  }
}
function Me(a, t, r, e, o, s, n = {}) {
  const p = (s / 2 + 0.07) * Math.sin(0.05) + 0.004,
    d = new b0().multiplyMatrices(
      F(r[0], r[1], r[2], e),
      F(0, 0, p, 0, 0, 0).multiply(F(0, 0, 0, 0, 0.05, n.tilt || 0)),
    );
  t.frame(d);
  const c = 0.07,
    u = z0(o + c * 2, s + c * 2, 0.016, 0, 0);
  (u.holes.push(z0(o + 0.01, s + 0.01, 0.014, 0, 0)),
    t.part(G0(u, 0.045, 0.007, 6), "brass_aged", { grain: "x" }));
  const b = z0(o + 0.03, s + 0.03, 0.008, 0, 0);
  return (
    b.holes.push(z0(o, s, 0.006, 0, 0)),
    t.part(G0(b, 0.03, 0.002, 4), "wood_ebony", { grain: "x", cast: !1 }),
    t.part(
      T0(
        [
          [-o * 0.3, s / 2, 0.004],
          [0, s / 2 + 0.16, -0.001],
          [o * 0.3, s / 2, 0.004],
        ],
        0.0012,
        12,
        4,
      ),
      "brass_aged",
      { cast: !1 },
    ),
    d
  );
}
function wt(a, t, r, e, o, s, n) {
  (t.part(
    j(
      [
        [0, 0],
        [e * 0.7, 0],
        [e * 0.75, 0.02],
        [e, o * 0.85],
        [e * 1.08, o * 0.9],
        [e * 1.08, o],
        [e * 0.98, o],
        [e * 0.95, o * 0.9],
        [0, o * 0.86],
      ],
      24,
      !1,
    ),
    a0(a, "#6b3b26"),
    { grain: "y" },
  ),
    t.part(
      new pt(e * 0.95, 20).rotateX(-e0 / 2).translate(0, o * 0.88, 0),
      a0(a, "#1e150e"),
      { cast: !1 },
    ));
  const l = a0(a, "#4a3a22"),
    p = a0(a, "#5a4428");
  for (let d = 0; d < s; d++) {
    const c = (d / s) * e0 * 2 + r(),
      u = 0.15 + r() * 0.35,
      b = n * (0.6 + r() * 0.5),
      k = [
        Math.cos(c) * Math.sin(u) * b,
        o + Math.cos(u) * b,
        Math.sin(c) * Math.sin(u) * b,
      ],
      S = [k[0] * 1.35, k[1] - b * (0.25 + r() * 0.3), k[2] * 1.35];
    t.part(
      T0(
        [
          [Math.cos(c) * 0.02, o * 0.88, Math.sin(c) * 0.02],
          [k[0] * 0.5, o + b * 0.55, k[2] * 0.5],
          k,
          S,
        ],
        0.004 + n * 0.003,
        12,
        5,
      ),
      l,
      { cast: n > 0.5 },
    );
    for (let h = 0; h < 3; h++) {
      const y = 0.45 + h * 0.22,
        C = k[0] * y,
        z = o + (k[1] - o) * y,
        w = k[2] * y,
        f = new D0(0.04 + n * 0.04, 8, 4, 0, e0 * 2, 0, e0 * 0.35).scale(
          1.4,
          0.5,
          0.6,
        );
      (f.rotateZ(-0.9 - r() * 0.8),
        f.rotateY(c + (r() - 0.5)),
        f.translate(C, z - 0.02, w),
        t.part(f, p, { cast: !1 }));
    }
  }
}
