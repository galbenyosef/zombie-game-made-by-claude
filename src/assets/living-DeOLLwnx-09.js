// assets/living-DeOLLwnx 09 — grain
// Lines 2728-2837 of readable/assets/living-DeOLLwnx.pretty.js (statement-aligned).
function Ct(a, t, r = {}) {
  const e = r.wood || "wood_walnut",
    o = r.seat || "velvet_red",
    s = 0.44,
    n = 0.42,
    l = 0.47,
    p = [
      [0.017, 0],
      [0.02, 0.05],
      [0.016, 0.12],
      [0.02, 0.2],
      [0.024, 0.3],
      [0.018, 0.36],
      [0.022, 0.41],
      [0.022, l - 0.05],
    ];
  for (const c of [-1, 1])
    a.part(j(p, 12).translate(c * (s / 2 - 0.03), 0, n / 2 - 0.03), e, {
      grain: "y",
    });
  for (const c of [-1, 1])
    (a.part(_(0.032, 0.5, 0.034, { r: 0.006 }), e, {
      grain: "y",
      local: F(c * (s / 2 - 0.03), 0.25, -n / 2 + 0.03, 0, 0.04),
    }),
      a.part(_(0.03, 0.5, 0.032, { r: 0.006 }), e, {
        grain: "y",
        local: F(c * (s / 2 - 0.03), l + 0.22, -n / 2 + 0.005, 0, -0.1),
      }));
  for (const c of [-1, 1])
    (a.part(
      _(s - 0.05, 0.06, 0.02, { r: 0.004 }).translate(
        0,
        l - 0.06,
        c * (n / 2 - 0.03),
      ),
      e,
      { grain: "x" },
    ),
      a.part(
        _(0.02, 0.06, n - 0.05, { r: 0.004 }).translate(
          c * (s / 2 - 0.03),
          l - 0.06,
          0,
        ),
        e,
        { grain: "z" },
      ));
  for (const c of [-1, 1])
    a.part(
      _(0.018, 0.022, n - 0.06, { r: 0.004 }).translate(
        c * (s / 2 - 0.03),
        0.13,
        0,
      ),
      e,
      { grain: "z", cast: !1 },
    );
  (a.part(_(s - 0.06, 0.02, 0.018, { r: 0.004 }).translate(0, 0.14, 0), e, {
    grain: "x",
    cast: !1,
  }),
    a.part(
      _(s - 0.01, 0.05, n - 0.01, {
        r: 0.018,
        m: 3,
        puff: [0.004, 0.012, 0.004],
        sag: { x: 0, z: 0.02, r: 0.1, d: 0.006 },
        rng: t,
        res: 0.05,
      }).translate(0, l + 0.01, 0.005),
      o,
      { grain: "x" },
    ));
  const d = _(s - 0.02, 0.07, 0.026, {
    r: 0.008,
    res: 0.04,
    m: 2,
    puff: [0, 0, 1e-4],
  });
  {
    const c = d.attributes.position;
    for (let u = 0; u < c.count; u++) {
      const b = c.getX(u);
      c.setZ(u, c.getZ(u) - b * b * 0.35);
    }
    d.computeVertexNormals();
  }
  (a.part(d, e, { grain: "x", local: F(0, l + 0.44, -n / 2 - 0.03, 0, -0.1) }),
    a.part(_(s - 0.07, 0.03, 0.022, { r: 0.005 }), e, {
      grain: "x",
      local: F(0, l + 0.12, -n / 2 + 0, 0, -0.1),
    }));
  {
    const c = new $0();
    (c.moveTo(-0.035, 0),
      c.bezierCurveTo(-0.07, 0.08, -0.02, 0.14, -0.05, 0.22),
      c.bezierCurveTo(-0.075, 0.27, -0.06, 0.3, -0.07, 0.3),
      c.lineTo(0.07, 0.3),
      c.bezierCurveTo(0.06, 0.3, 0.075, 0.27, 0.05, 0.22),
      c.bezierCurveTo(0.02, 0.14, 0.07, 0.08, 0.035, 0),
      c.lineTo(-0.035, 0));
    const u = G0(c, 0.014, 0.003, 10);
    (u.translate(0, 0, -0.007),
      a.part(u, e, {
        grain: "y",
        local: F(0, l + 0.135, -n / 2 - 0.012, 0, -0.1),
      }));
  }
}
