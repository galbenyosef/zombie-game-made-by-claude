// assets__script2-Chjgntzz 06 — add
// Lines 1350-1642 of readable/assets__script2-Chjgntzz.pretty.js (statement-aligned).
function Ho(p) {
  const e = E.lens,
    o = E.lensR,
    r = new Ue().setFromAxisAngle(d(1, 0, 0), -0.06),
    s = new Ae().compose(e, r, d(1, 1, 1));
  (p.steer.add(
    He(
      [
        [0, -0.11],
        [0.045, -0.11],
        [0.068, -0.085],
        [0.08, -0.05],
        [0.082, -0.012],
        [0, -0.012],
      ],
      20,
    ).rotateX(Math.PI / 2),
    s,
    P.black,
  ),
    p.steer.add(
      He(
        [
          [o - 0.002, 0.004],
          [o + 0.004, 0.006],
          [o + 0.01, 0],
          [o + 0.011, -0.012],
          [o + 0.004, -0.012],
        ],
        40,
      ).rotateX(Math.PI / 2),
      s,
      P.chrome,
      { wear: (T, k, S) => [0, 0.45, 0.25, 0.3] },
    ));
  {
    const T = new x0(o, 40),
      k = T.attributes.position,
      S = T.attributes.uv;
    for (let u = 0; u < k.count; u++) {
      const x = Math.hypot(k.getX(u), k.getY(u)) / o;
      (k.setZ(u, 0.008 * (1 - x * x)),
        S.setXY(u, 0.5 + k.getX(u) / (2 * o), 0.5 + k.getY(u) / (2 * o)));
    }
    (T.computeVertexNormals(),
      p.steer.add(T, s, P.lens, { wear: (u, x, b) => [0, 0, 0.18, 0] }));
  }
  {
    const u = (n, B, O = 0) => {
        const ee = [],
          le = (de, fe, q) => {
            for (let te = 0; te <= 4; te++) {
              const ne = q + ((te / 4) * Math.PI) / 2;
              ee.push([de + Math.cos(ne) * 0.04, fe + Math.sin(ne) * 0.04]);
            }
          };
        return (
          le(0.064, 0.07799999999999999, 0),
          le(-0.064, 0.07799999999999999, Math.PI / 2),
          le(-0.064, -0.054, Math.PI),
          le(0.064, -0.054, Math.PI * 1.5),
          ee.map(([de, fe]) =>
            d(
              de * n,
              fe * n,
              B + (fe > 0.0649 ? O * Fe(0.0649, 0.118, fe) : 0),
            ),
          )
        );
      },
      x = [
        u(1, 0.004, 0.026),
        u(1, -0.004, 0.012),
        u(0.97, -0.03),
        u(0.9, -0.07),
        u(0.78, -0.1),
      ];
    p.steer.add(Xt(x, {}), s, P.plastic, {
      both: !0,
      wear: (n, B, O) => [O[0] * 0.8, 0, O[2] * 0.5, 0.9],
    });
    const b = new N0(u(1, 0).map((n) => new mo(n.x, n.y))),
      g = new V0();
    (g.absarc(0, 0, o + 0.006, 0, Math.PI * 2, !0),
      b.holes.push(g),
      p.steer.add(
        t0(b, 0.005, 0.0015, 6, 1),
        s.clone().multiply(Z(0, 0, 0)),
        P.plastic,
        { wear: (n, B, O) => [O[0] * 0.9, 0, O[2] * 0.5, 0.9] },
      ));
    for (const n of [-1, 1])
      p.steer.add(
        he(0.012, 0.05, 0.07, 0.004),
        s.clone().multiply(Z(n * 0.098, -0.01, -0.1)),
        P.black,
      );
  }
  for (const T of [-1, 1]) {
    const k = d(T * 0.1, 0.94, 0.47),
      S = d(T * 0.17, 0.95, 0.5);
    (p.steer.add(ke(k, S, 0.006, 8), null, P.black),
      p.steer.add(
        He(
          [
            [0, 0],
            [0.02, 0],
            [0.024, -0.02],
            [0.016, -0.04],
            [0, -0.045],
          ],
          14,
        ).rotateX(-Math.PI / 2),
        Z(S.x, S.y, S.z + 0.005),
        P.black,
      ),
      p.steer.add(
        new oo(0.02, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(
          Math.PI / 2,
        ),
        Z(S.x, S.y, S.z + 0.02, 0, 0, 0, 1, 1, 0.8),
        P.amber,
      ));
  }
}
function Go(p) {
  const e = P.frame,
    o = (S, u, x) => [x[0], x[1] * (0.6 + 0.6 * o0(1 - S.y)), x[2], x[3] * 0.7],
    r = zt(1),
    s = zt(1.16);
  p.body.add(ke(zt(0.99), zt(1.16), 0.026, 18), null, e, { wear: o });
  for (const S of [0.99, 1.16])
    p.body.add(
      He(
        [
          [0.024, -0.006],
          [0.031, -0.006],
          [0.031, 0.006],
          [0.024, 0.006],
        ],
        18,
      ),
      e0(zt(S - 0.006), zt(S + 0.006)),
      P.black,
    );
  const T = ut(
    [
      s.clone().add(d(0, -0.012, -0.01)),
      d(0, 0.955, 0.16),
      d(0, 0.86, -0.1),
      d(0, 0.815, -0.16),
    ],
    [0.12, 0.1],
    8,
  );
  (p.body.add(ge(T, 0.022, 12), null, e, { wear: o }),
    p.body.add(
      ge(
        ut(
          [r.clone().add(d(0, 0.01, -0.02)), d(0, 0.9, 0.22), d(0, 0.93, 0.18)],
          0.04,
          4,
        ),
        0.012,
        8,
      ),
      null,
      e,
    ));
  const k = ut(
    [r.clone().add(d(0, -0.005, 0.012)), d(0, 0.5, 0.293), d(0, 0.27, 0.25)],
    0.1,
    8,
  );
  p.body.add(ge(k, 0.021, 12, { cap1: !0 }), null, e, { wear: o });
  for (const S of [-1, 1]) {
    const u = ut(
      [
        d(0, 0.3, 0.255),
        d(S * 0.06, 0.215, 0.205),
        d(S * 0.068, 0.19, 0.05),
        d(S * 0.072, 0.21, -0.07),
        d(S * 0.078, 0.36, -0.15),
        d(S * 0.075, 0.6, -0.17),
        d(S * 0.07, 0.808, -0.16),
      ],
      [0.05, 0.08, 0.06, 0.08, 0.06],
      6,
    );
    (p.body.add(ge(u, 0.0165, 9), null, e, { wear: o }),
      p.body.add(
        ge(
          ut(
            [
              d(S * 0.07, 0.812, -0.15),
              d(S * 0.078, 0.805, -0.45),
              d(S * 0.08, 0.81, -0.72),
              d(S * 0.07, 0.835, -0.86),
            ],
            0.06,
            4,
          ),
          0.0125,
          8,
        ),
        null,
        e,
        { wear: o },
      ),
      p.body.add(
        ge([d(S * 0.082, 0.47, -0.19), d(S * 0.098, 0.8, -0.462)], 0.0135, 8),
        null,
        e,
        { wear: o },
      ));
    const x = no(
        [
          [0.08, 0.36],
          [-0.03, 0.4],
          [-0.07, 0.6],
          [-0.05, 0.66],
          [0.03, 0.56],
          [0.1, 0.5],
          [0.13, 0.42],
        ],
        0.015,
      ),
      b = t0(x, 0.006, 0.0015, 6);
    (b.rotateY(Math.PI / 2),
      p.body.add(b, Z(S * 0.088, 0, -0.15), e, { wear: o }));
    const g = d(S * E.peg.x, E.peg.y, E.peg.z);
    (p.body.add(
      he(0.06, 0.03, 0.04, 0.005),
      Z(S * 0.115, 0.335, E.peg.z + 0.002),
      P.black,
    ),
      p.body.add(
        ge([d(S * 0.08, 0.36, -0.15), d(S * 0.1, 0.34, E.peg.z)], 0.01, 8),
        null,
        e,
      ));
    const n = he(0.085, 0.022, 0.034, 0.004);
    p.body.add(n, Z(g.x, g.y, g.z), P.steel, {
      wear: (B, O, ee) => [0, 0.6, 0.6, 0.2],
    });
    for (let B = 0; B < 6; B++) {
      const O = new so(0.004, 0.006, 0.034);
      p.body.add(
        O,
        Z(g.x - S * 0.035 + S * B * 0.014, g.y + 0.013, g.z),
        P.steel,
        { wear: (ee, le, de) => [0, 0.7, 0.7, 0] },
      );
    }
    p.body.add(
      he(0.012, 0.045, 0.04, 0.004),
      Z(S * (E.shockTop.x + 0), E.shockTop.y, E.shockTop.z),
      e,
    );
  }
  (p.body.add(
    ke(d(-0.078, 0.806, -0.44), d(0.078, 0.806, -0.44), 0.011, 8),
    null,
    e,
  ),
    p.body.add(
      ke(d(-0.082, 0.81, -0.7), d(0.082, 0.81, -0.7), 0.011, 8),
      null,
      e,
    ));
  {
    const S = [];
    for (let u = 0; u <= 10; u++) {
      const x = u / 10,
        b = Je(0.29, -0.06, x),
        g = Je(0.24, 0.165, Fe(0, 0.3, x)) + 0.004 * Math.sin(x * 19);
      S.push([
        d(-0.085, g + 0.03, b),
        d(-0.075, g, b),
        d(0.075, g, b),
        d(0.085, g + 0.03, b),
        d(0.083, g + 0.034, b),
        d(0.072, g + 0.004, b),
        d(-0.072, g + 0.004, b),
        d(-0.083, g + 0.034, b),
      ]);
    }
    p.body.add(Xt(S), null, P.alu, {
      both: !0,
      wear: (u, x, b) => [0, 0, Math.min(1, b[2] + 0.4), 0.3],
    });
  }
}
