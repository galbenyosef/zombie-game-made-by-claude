// assets/script2-Chjgntzz 05 — add
// Lines 1032-1349 of readable/assets/script2-Chjgntzz.pretty.js (statement-aligned).
function Oo(p) {
  const e = (o) => zt(o, z0);
  for (const o of [-1, 1]) {
    const r = o * 0.088,
      s = (T) => e(T).add(d(r, 0, 0));
    (p.steer.add(ke(s(0.66), s(1.205), 0.0175, 18, !1), null, P.chrome, {
      wear: (T, k, S) => [0, 0.45, S[2] * 0.4, 0.15],
    }),
      p.steer.add(
        He(
          [
            [0, 0.012],
            [0.012, 0.012],
            [0.016, 0.006],
            [0.016, -0.004],
            [0.0175, -0.006],
            [0, -0.006],
          ],
          6,
        ),
        e0(s(1.2), s(1.24)),
        P.chrome,
      ),
      p.slider.add(
        ke(s(E0 - 0.035), s(0.69), [0.0245, 0.0225], 18, !0),
        null,
        P.case,
        { wear: (T, k, S) => [0, 0, Math.min(1, S[2] * 1.3 + 0.2), 0.3] },
      ),
      p.slider.add(ke(s(0.685), s(0.705), 0.0215, 16, !0), null, P.rubber),
      p.slider.add(
        he(0.05, 0.04, 0.06, 0.008),
        new Ae().compose(
          s(E0),
          new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
          d(1, 1, 1),
        ),
        P.case,
      ));
  }
  for (const [o, r] of [
    [0.985, 0.032],
    [1.17, 0.026],
  ]) {
    const s = new N0(),
      T = 0.03;
    (s.absarc(-0.088, 0, T, Math.PI / 2, Math.PI * 1.5, !1),
      s.absarc(0.088, 0, T, -Math.PI / 2, Math.PI / 2, !1));
    const k = t0(s, r, 0.004, 8, 1);
    k.rotateX(Math.PI / 2);
    const S = new Ae().compose(
      zt(o, z0 * 0.5),
      new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
      d(1, 1, 1),
    );
    p.steer.add(k, S, o > 1 ? P.alu : P.black);
  }
  p.steer.add(
    He(
      [
        [0, 0.012],
        [0.018, 0.012],
        [0.02, 0],
        [0, 0],
      ],
      6,
    ),
    new Ae().compose(
      zt(1.185),
      new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
      d(1, 1, 1),
    ),
    P.chrome,
  );
  {
    const o = Nt(
        [
          d(0, 0.835, 0.33),
          d(0, 0.862, 0.45),
          d(0, 0.874, 0.6),
          d(0, 0.862, 0.76),
          d(0, 0.826, 0.9),
          d(0, 0.77, 1),
        ],
        18,
      ),
      r = o.map((s, T) => {
        const k = T / (o.length - 1),
          S =
            0.062 * (1 - 0.22 * Fe(0.7, 1, k)) * (0.86 + 0.14 * Fe(0, 0.15, k)),
          u = 0.05 * (1 - 0.3 * Fe(0.75, 1, k)),
          x = [];
        for (let b = 0; b <= 10; b++) {
          const g = b / 10,
            n = Math.PI * (1 - g);
          x.push(
            d(Math.cos(n) * S, s.y - (1 - Math.sin(n)) * u * 0.9 - 0.004, s.z),
          );
        }
        for (let b = 10; b >= 0; b--) {
          const g = b / 10,
            n = Math.PI * (1 - g);
          x.push(
            d(
              Math.cos(n) * (S - 0.003),
              s.y - (1 - Math.sin(n)) * u * 0.9 - 0.008,
              s.z,
            ),
          );
        }
        return x;
      });
    (p.steer.add(
      Xt(r.reverse(), { flipW: !1, cap0: !0, cap1: !0 }),
      null,
      P.plastic,
      {
        wear: (s, T, k) => [k[0], 0, Math.min(1, k[2] + 0.35 * o0(-T.y)), 0.9],
      },
    ),
      p.steer.add(
        he(0.1, 0.02, 0.07, 0.006),
        new Ae().compose(
          zt(0.95, z0 * 0.6),
          new Ue().setFromAxisAngle(d(1, 0, 0), -Rt),
          d(1, 1, 1),
        ),
        P.black,
      ));
  }
}
function No(p) {
  const e = (r) => [
      d(0, 1.072, 0.298),
      d(r * 0.09, 1.076, 0.298),
      d(r * 0.17, 1.096, 0.276),
      d(r * 0.24, 1.122, 0.226),
      d(r * 0.31, 1.131, 0.196),
      d(r * 0.435, 1.134, 0.18),
    ],
    o = [...e(-1).reverse(), ...e(1).slice(1)];
  (p.steer.add(
    ge(ut(o, 0.05, 5), 0.0112, 12, { cap0: !0, cap1: !0 }),
    null,
    P.chrome,
    { wear: (r, s, T) => [0, 0.5, 0.05, 0.3] },
  ),
    p.steer.add(
      ge([d(-0.17, 1.125, 0.268), d(0.17, 1.125, 0.268)], 0.008, 10, {
        cap0: !0,
        cap1: !0,
      }),
      null,
      P.chrome,
      { wear: (r, s, T) => [0, 0.5, 0, 0.3] },
    ),
    p.steer.add(he(0.075, 0.03, 0.036, 0.006), Z(0, 1.074, 0.298), P.alu));
  for (const r of [-1, 1])
    p.steer.add(
      ke(d(r * 0.03, 1.03, 0.284), d(r * 0.03, 1.064, 0.296), 0.011, 10),
      null,
      P.alu,
    );
  (p.steer.add(he(0.04, 0.028, 0.03, 0.004), Z(-0.15, 1.125, 0.268), P.alu),
    p.steer.add(he(0.04, 0.028, 0.03, 0.004), Z(0.15, 1.125, 0.268), P.alu));
  for (const r of [-1, 1]) {
    const s = d(r * 0.31, 1.131, 0.196),
      T = d(r * 0.43, 1.134, 0.18),
      k = [];
    for (let b = 0; b <= 18; b++) k.push(s.clone().lerp(T, b / 18));
    (p.steer.add(
      ge(
        k,
        (b, g) => 0.0158 + (g % 2 ? 0.0012 : 0) + 0.0015 * Fe(0.85, 1, b),
        12,
        { cap1: !0 },
      ),
      null,
      P.rubber,
      { wear: (b, g, n) => [0, 0, 0.15, 0.2] },
    ),
      p.steer.add(
        ke(
          s.clone().addScaledVector(T.clone().sub(s).normalize(), -0.004),
          s.clone().addScaledVector(T.clone().sub(s).normalize(), 0.006),
          0.021,
          16,
        ),
        null,
        P.rubber,
      ));
    const S = d(r * 0.29, 1.131, 0.2);
    p.steer.add(he(0.026, 0.034, 0.034, 0.006), Z(S.x, S.y, S.z), P.alu);
    const u = [
      d(r * 0.292, 1.138, 0.225),
      d(r * 0.31, 1.142, 0.262),
      d(r * 0.38, 1.14, 0.258),
      d(r * 0.455, 1.135, 0.236),
    ];
    (p.steer.add(
      ge(ut(u, 0.02, 4), (b) => 0.0055 - 0.0012 * b, 8, { cap1: !0 }),
      null,
      P.alu,
    ),
      p.steer.add(new oo(0.0072, 10, 8), Z(u[3].x, u[3].y, u[3].z), P.alu),
      p.steer.add(
        he(0.032, 0.04, 0.036, 0.008),
        Z(r * 0.322, 1.13, 0.194),
        P.black,
      ),
      r > 0 &&
        p.steer.add(
          ke(d(0.322, 1.142, 0.212), d(0.322, 1.152, 0.214), 0.004, 8),
          null,
          P.tail,
        ));
    const x = Nt(
      [
        d(r * 0.29, 1.14, 0.215),
        d(r * 0.25, 1.2, 0.3),
        d(r * 0.12, 1.12, 0.42),
        d(r * 0.05, 0.98, 0.43),
        d(r * 0.035, 0.9, 0.38),
      ],
      24,
    );
    p.steer.add(ge(x, 0.0035, 6), null, P.black, {
      wear: (b, g, n) => [0, 0, n[2] * 0.4, 0.4],
    });
  }
  {
    const r = d(0, 1.105, 0.375),
      s = new Ue().setFromAxisAngle(d(1, 0, 0), -0.8),
      T = new Ae().compose(r, s, d(1, 1, 1));
    (p.steer.add(
      He(
        [
          [0, -0.05],
          [0.04, -0.05],
          [0.047, -0.03],
          [0.047, 0],
          [0, 0],
        ],
        24,
      ),
      T,
      P.black,
    ),
      p.steer.add(
        new ao(0.046, 0.0045, 8, 32).rotateX(Math.PI / 2),
        T.clone().multiply(Z(0, 0, 0)),
        P.chrome,
      ));
    const k = new x0(0.042, 32).rotateX(-Math.PI / 2),
      [S, u, x, b] = T0.dial;
    (p.steer.add(k, T.clone().multiply(Z(0, -0.004, 0)), P.decal, {
      uv: (g, n, B, O) => [Je(S, x, B), Je(u, b, O)],
    }),
      p.steer.add(
        new x0(0.043, 32).rotateX(-Math.PI / 2),
        T.clone().multiply(Z(0, 0.0015, 0)),
        P.glass,
        { wear: (g, n, B) => [0, 0, 0.1, 0.8] },
      ),
      p.steer.add(
        he(0.032, 0.0015, 0.003, 6e-4),
        T.clone().multiply(Z(-0.012, -0.002, 0.012, 0, -0.75, 0)),
        P.tail,
      ),
      p.steer.add(
        ke(d(0, 1.05, 0.33), d(0, 1.09, 0.36), 0.008, 8),
        null,
        P.black,
      ));
  }
  {
    const r = Nt(
      [
        d(-0.295, 1.148, 0.205),
        d(-0.31, 1.22, 0.205),
        d(-0.33, 1.3, 0.2),
        d(-0.345, 1.35, 0.195),
      ],
      12,
    );
    p.steer.add(ge(r, 0.0045, 8, { cap1: !0 }), null, P.chrome);
    const s = d(-0.355, 1.395, 0.19),
      T = new Ue().setFromEuler(new _0(0.14, 0.5, 0, "YXZ")),
      k = new Ae().compose(s, T, d(1, 1, 1));
    (p.steer.add(
      He(
        [
          [0, -0.006],
          [0.039, -0.006],
          [0.043, -0.002],
          [0.042, 0.006],
          [0.03, 0.012],
          [0, 0.014],
        ],
        24,
      ).rotateX(Math.PI / 2),
      k,
      P.chrome,
    ),
      p.steer.add(
        new x0(0.038, 24).rotateY(Math.PI),
        k.clone().multiply(Z(0, 0, -0.0068)),
        P.mirror,
      ),
      p.steer.add(
        ge([d(0.295, 1.148, 0.205), d(0.298, 1.18, 0.205)], 0.0045, 8, {
          cap1: !0,
        }),
        null,
        P.chrome,
      ));
  }
}
