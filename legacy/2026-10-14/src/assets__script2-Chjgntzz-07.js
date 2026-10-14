// assets__script2-Chjgntzz 07 — add
// Lines 1643-1945 of readable/assets__script2-Chjgntzz.pretty.js (statement-aligned).
function qo(p) {
  p.body.add(
    he(0.19, 0.22, 0.34, 0.06, 3),
    Z(0, 0.38, 0.06, 0.08, 0, 0),
    P.case,
    { wear: (x, b, g) => [0, 0, Math.min(1, g[2] + 0.25), 0.5] },
  );
  const e = (x, b, g, n) => {
    const B = He(
      [
        [0, n],
        [g * 0.55, n],
        [g * 0.85, n * 0.75],
        [g, n * 0.35],
        [g * 1.02, 0],
        [0, 0],
      ],
      22,
    ).rotateZ(x > 0 ? -Math.PI / 2 : Math.PI / 2);
    p.body.add(B, Z(b.x, b.y, b.z), P.case, {
      wear: (O, ee, le) => [0, 0, Math.min(1, le[2] + 0.2), 0.4],
    });
    for (let O = 0; O < 7; O++) {
      const ee = (O / 7) * Math.PI * 2,
        le = new h0(0.0055, 0.0055, 0.006, 6);
      (le.rotateZ(Math.PI / 2),
        p.body.add(
          le,
          Z(
            b.x + x * n * 0.6,
            b.y + Math.sin(ee) * g * 0.82,
            b.z + Math.cos(ee) * g * 0.82,
          ),
          P.steel,
          { wear: (de, fe, q) => [0, 0.7, q[2], 0] },
        ));
    }
  };
  (e(1, d(0.092, 0.37, -0), 0.085, 0.045),
    e(-1, d(-0.092, 0.4, 0.07), 0.1, 0.05));
  const o = 15 * P0,
    r = d(0, 0.48, 0.11),
    s = d(0, Math.cos(o), Math.sin(o)),
    T = (x) => r.clone().addScaledVector(s, x),
    k = new Ue().setFromAxisAngle(d(1, 0, 0), o);
  p.body.add(ke(T(-0.02), T(0.27), 0.043, 14), null, P.fins);
  const S = d(0, Math.cos(o), Math.sin(o)),
    u = (x, b) => (Math.abs(b.dot(S)) > 0.7 ? P.fins : P.finEdge);
  for (let x = 0; x < 14; x++) {
    const b = 0.01 + x * 0.0172,
      g = x >= 8,
      O = t0(
        To(g ? 0.178 : 0.16, g ? 0.158 : 0.14, 0.028),
        0.004,
        0.0012,
        3,
        1,
      );
    (O.rotateX(Math.PI / 2),
      p.body.add(O, new Ae().compose(T(b), k, d(1, 1, 1)), P.fins, {
        pick: u,
        wear: (ee, le, de) => [0.7, 0.25, de[2], 0.6],
      }));
  }
  p.body.add(
    he(0.12, 0.05, 0.1, 0.02),
    new Ae().compose(T(0.285), k, d(1, 1, 1)),
    P.case,
  );
  for (const x of [-1, 1])
    p.body.add(
      He(
        [
          [0, 0.018],
          [0.025, 0.018],
          [0.028, 0],
          [0, 0],
        ],
        16,
      ).rotateZ((x * Math.PI) / 2),
      new Ae().compose(T(0.27).add(d(x * 0.055, 0, 0)), k, d(1, 1, 1)),
      P.case,
    );
  (p.body.add(
    ge(
      Nt(
        [
          T(0.2).add(d(0.075, 0, 0.02)),
          d(0.11, 0.73, 0.1),
          d(0.06, 0.8, 0),
          d(0.03, 0.82, -0.08),
        ],
        12,
      ),
      0.0045,
      6,
    ),
    null,
    P.black,
  ),
    p.body.add(
      ke(
        T(0.2).add(d(0.06, 0, 0.02)),
        T(0.2).add(d(0.085, 0, 0.02)),
        0.009,
        10,
      ),
      null,
      P.tail,
    ),
    p.body.add(ke(d(0, 0.6, 0.03), d(0, 0.62, -0.1), 0.026, 14), null, P.alu),
    p.body.add(
      ke(d(0, 0.55, -0.04), d(0, 0.595, -0.04), 0.022, 12),
      null,
      P.case,
    ),
    p.body.add(
      ke(d(0, 0.625, -0.1), d(0, 0.64, -0.17), [0.03, 0.034], 14),
      null,
      P.rubber,
    ),
    p.body.add(
      ge(
        ut(
          [d(-0.145, 0.36, 0), d(-0.15, 0.4, -0.12), d(-0.16, 0.47, -0.2)],
          0.03,
          4,
        ),
        0.009,
        8,
        { cap1: !0 },
      ),
      null,
      P.chrome,
    ),
    p.body.add(he(0.04, 0.02, 0.03, 0.004), Z(-0.165, 0.47, -0.205), P.rubber),
    p.body.add(
      ge(
        ut(
          [d(0.13, 0.33, 0.06), d(0.155, 0.35, 0.02), d(0.17, 0.37, -0.03)],
          0.02,
          4,
        ),
        0.0075,
        8,
        { cap1: !0 },
      ),
      null,
      P.chrome,
    ),
    p.body.add(
      ke(d(0.16, 0.37, -0.035), d(0.205, 0.37, -0.035), 0.009, 10),
      null,
      P.rubber,
    ),
    p.body.add(
      ge(
        ut(
          [
            d(-0.135, 0.31, -0.13),
            d(-0.16, 0.32, -0.07),
            d(-0.18, 0.345, -0.03),
          ],
          0.02,
          4,
        ),
        0.008,
        8,
      ),
      null,
      P.black,
    ),
    p.body.add(he(0.05, 0.012, 0.03, 0.004), Z(-0.19, 0.35, -0.025), P.steel),
    p.body.add(
      ge(
        Nt(
          [
            d(0.05, 0.3, 0.2),
            d(0.03, 0.5, 0.29),
            d(0.02, 0.75, 0.33),
            d(0.025, 0.86, 0.3),
          ],
          16,
        ),
        0.005,
        6,
      ),
      null,
      P.black,
    ),
    p.body.add(he(0.02, 0.09, 0.1, 0.012), Z(0.095, 0.37, -0.06), P.case));
}
function Uo(p) {
  const e = [
      d(-0.01, 0.66, 0.265),
      d(-0.035, 0.62, 0.325),
      d(-0.095, 0.535, 0.315),
      d(-0.128, 0.5, 0.22),
      d(-0.134, 0.53, 0),
      d(-0.136, 0.6, -0.2),
      d(-0.14, 0.66, -0.36),
      d(-0.14, 0.7, -0.44),
    ],
    o = Nt(e, 48);
  let r = 0;
  const s = [0];
  for (let x = 1; x < o.length; x++)
    ((r += o[x].distanceTo(o[x - 1])), s.push(r));
  const T = (x) => {
    let b = 0,
      g = 1e9;
    for (let n = 0; n < o.length; n++) {
      const B = o[n].distanceToSquared(x);
      B < g && ((g = B), (b = n));
    }
    return s[b] / r;
  };
  p.body.add(ge(o, 0.0185, 10), null, P.pipe, {
    wear: (x, b, g) => [T(x) * 0.85, g[1], g[2], 0.2],
  });
  {
    const g = [];
    for (let n = 22; n <= 41; n++) {
      const B = o[n],
        O = o[Math.min(o.length - 1, n + 1)]
          .clone()
          .sub(o[Math.max(0, n - 1)])
          .normalize(),
        ee = d(-1, 0.25, 0).normalize(),
        le = d().crossVectors(O, ee).normalize(),
        de = d().crossVectors(le, O).normalize(),
        fe = [];
      for (let q = 0; q <= 9; q++) {
        const te = ((-0.95 + 1.9 * (q / 9)) * Math.PI) / 2;
        fe.push(
          B.clone()
            .addScaledVector(de, Math.cos(te) * 0.029)
            .addScaledVector(le, Math.sin(te) * 0.029),
        );
      }
      for (let q = 9; q >= 0; q--) {
        const te = ((-0.95 + 1.9 * (q / 9)) * Math.PI) / 2;
        fe.push(
          B.clone()
            .addScaledVector(de, Math.cos(te) * 0.026)
            .addScaledVector(le, Math.sin(te) * 0.026),
        );
      }
      g.push(fe);
    }
    p.body.add(Xt(g, { cap0: !0, cap1: !0 }), null, P.shield, {
      both: !0,
      wear: (n, B, O) => [0.65, 0.7, O[2], 0.4],
    });
    for (const n of [24, 31, 39])
      p.body.add(
        new ao(0.03, 0.003, 6, 20),
        e0(o[n - 1], o[n + 1]).multiply(new Ae().makeRotationX(Math.PI / 2)),
        P.steel,
      );
  }
  const k = d(-0.14, 0.695, -0.43),
    u = d(-0.14, 0.775, -0.86).clone().sub(k).normalize();
  (p.body.add(
    He(
      [
        [0.02, 0],
        [0.05, 0.04],
        [0.054, 0.08],
        [0.054, 0.36],
        [0.05, 0.4],
        [0.046, 0.43],
        [0, 0.43],
      ],
      24,
    ),
    e0(k, k.clone().addScaledVector(u, 0.43)).multiply(Z(0, -0.215, 0)),
    P.pipe,
    {
      wear: (x, b, g) => [0.75 + 0.25 * Fe(-0.5, -0.86, x.z), g[1], g[2], 0.3],
    },
  ),
    p.body.add(
      ke(
        k.clone().addScaledVector(u, 0.41),
        k.clone().addScaledVector(u, 0.47),
        0.016,
        12,
      ),
      null,
      P.pipe,
      { wear: (x, b, g) => [1, 0.9, g[2], 0] },
    ),
    p.body.add(
      ge(
        [d(-0.14, 0.76, -0.66), d(-0.1, 0.795, -0.66), d(-0.082, 0.806, -0.66)],
        0.006,
        6,
      ),
      null,
      P.steel,
    ));
}
