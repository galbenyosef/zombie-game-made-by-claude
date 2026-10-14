// assets/script2-Chjgntzz 09 — math
// Lines 2137-2444 of readable/assets/script2-Chjgntzz.pretty.js (statement-aligned).
function Zo(p, e) {
  {
    const o = Nt(
        [
          d(0, 0.79, -0.42),
          d(0, 0.79, -0.62),
          d(0, 0.8, -0.85),
          d(0, 0.825, -1.05),
          d(0, 0.86, -1.17),
        ],
        16,
      ),
      r = o.map((s, T) => {
        const k = T / (o.length - 1),
          S = 0.07 - 0.012 * Fe(0.7, 1, k),
          u = 0.028,
          x = [];
        for (let b = 0; b <= 10; b++) {
          const g = Math.PI * (1 - b / 10);
          x.push(d(Math.cos(g) * S, s.y - (1 - Math.sin(g)) * u - 0.004, s.z));
        }
        for (let b = 10; b >= 0; b--) {
          const g = Math.PI * (1 - b / 10);
          x.push(
            d(
              Math.cos(g) * (S - 0.003),
              s.y - (1 - Math.sin(g)) * u - 0.008,
              s.z,
            ),
          );
        }
        return x;
      });
    p.body.add(Xt(r.reverse(), { cap0: !0, cap1: !0 }), null, P.plastic, {
      wear: (s, T, k) => [k[0], 0, Math.min(1, k[2] + 0.4 * o0(-T.y)), 0.8],
    });
  }
  {
    const r = [
      d(-0.095, 0.905, -0.7),
      d(-0.095, 0.905, -1),
      d(-0.06, 0.905, -1.06),
      d(0.06, 0.905, -1.06),
      d(0.095, 0.905, -1),
      d(0.095, 0.905, -0.7),
    ];
    p.body.add(
      ge(ut(r, 0.035, 5), 0.0095, 10, { cap0: !0, cap1: !0 }),
      null,
      P.frame,
      { wear: (s, T, k) => [0.75, 0.75, k[2], 0.8] },
    );
    for (const s of [-0.8, -0.92])
      p.body.add(
        ke(d(-0.095, 0.905, s), d(0.095, 0.905, s), 0.0075, 8),
        null,
        P.frame,
        { wear: (T, k, S) => [0.7, 0.75, S[2], 0.8] },
      );
    for (const s of [-1, 1])
      (p.body.add(
        ge([d(s * 0.095, 0.905, -0.7), d(s * 0.08, 0.815, -0.66)], 0.0085, 8),
        null,
        P.frame,
      ),
        p.body.add(
          ge(
            [d(s * 0.09, 0.905, -0.98), d(s * 0.072, 0.835, -0.86)],
            0.0085,
            8,
          ),
          null,
          P.frame,
        ));
  }
  {
    const o = d(0, 0.9740000000000001, -0.86),
      r = 0.2,
      s = 0.115,
      T = 0.3,
      k = he(r, s, T, 0.014, 3),
      S = k.attributes.position;
    for (let u = 0; u < S.count; u++) {
      const x = S.getX(u),
        b = S.getY(u),
        g = S.getZ(u);
      if (Math.abs(b) > s / 2 - 0.003) {
        const n = x / (r / 2),
          B = g / (T / 2),
          O = Math.min(Math.abs(n - B * (r / T) * (T / r)), Math.abs(n + B));
        Math.abs(n) < 0.8 &&
          Math.abs(B) < 0.82 &&
          S.setY(
            u,
            b + Math.sign(b) * (0.004 * Math.exp(-((O / 0.12) ** 2)) - 0.0015),
          );
      }
    }
    (k.computeVertexNormals(),
      p.body.add(k, Z(o.x, o.y, o.z, 0, 0.04, 0), P.can));
    for (const u of [-0.055, 0, 0.055])
      p.body.add(
        ge(
          ut(
            [
              d(u, o.y + 0.03, o.z + T / 2 - 0.01),
              d(u, o.y + 0.03, o.z + T / 2 + 0.02),
              d(u, o.y - 0.03, o.z + T / 2 + 0.02),
              d(u, o.y - 0.03, o.z + T / 2 - 0.01),
            ],
            0.01,
            3,
          ),
          0.0055,
          6,
        ),
        null,
        P.can,
      );
    (p.body.add(
      ke(
        d(0.06, o.y + 0.03, o.z - T / 2 + 0.01),
        d(0.06, o.y + 0.03, o.z - T / 2 - 0.03),
        0.017,
        14,
      ),
      null,
      P.can,
      { wear: (u, x, b) => [0.8, 0.6, b[2], 0.6] },
    ),
      p.body.add(
        he(0.03, 0.02, 0.012, 0.004),
        Z(0.06, o.y + 0.03, o.z - T / 2 - 0.035),
        P.black,
      ));
    for (const u of [o.z + 0.07, o.z - 0.085]) {
      const x = ut(
        [
          d(-0.1, 0.9, u),
          d(-0.105, o.y + s / 2 + 0.003, u),
          d(0.105, o.y + s / 2 + 0.003, u),
          d(0.1, 0.9, u),
        ],
        0.012,
        3,
      );
      (p.body.add(ge(x, [0.013, 0.0015], 6, { up: d(0, 0, 1) }), null, P.strap),
        p.body.add(
          he(0.024, 0.006, 0.03, 0.002),
          Z(0.045, o.y + s / 2 + 0.006, u),
          P.steel,
        ));
    }
  }
  {
    const o = E.tail;
    p.body.add(he(0.11, 0.06, 0.07, 0.015), Z(o.x, o.y, o.z + 0.015), P.black);
    const r = new f0(0.096, 0.046, 1, 1);
    (p.body.add(r, Z(o.x, o.y, o.z - 0.0215, 0, Math.PI, 0), P.tail, {
      uv: (u, x, b, g) => [b, g],
    }),
      p.body.add(he(0.1, 0.05, 0.012, 0.01), Z(o.x, o.y, o.z - 0.016), P.tail, {
        wear: (u, x, b) => [0, 0, b[2] * 0.8, 0],
      }));
    const [s, T, k, S] = T0.plate;
    (p.body.add(
      he(0.21, 0.11, 0.006, 0.004),
      Z(0, 0.735, -1.025, -0.12, 0, 0),
      P.black,
    ),
      p.body.add(
        new f0(0.2, 0.1),
        Z(0, 0.735, -1.0285, -0.12, Math.PI, 0),
        P.decal,
        { uv: (u, x, b, g) => [Je(s, k, b), Je(T, S, g)] },
      ),
      p.body.add(he(0.03, 0.05, 0.02, 0.004), Z(0, 0.79, -1.02), P.black));
  }
}
function Qo(p) {
  const e = E.SW,
    o = Kt;
  for (const r of [-1, 1]) {
    const s = d(r * 0.09, e.y, e.z),
      T = d(r * 0.086, o.y + 0.005, o.z - 0.015),
      k = s.distanceTo(T),
      S = e0(s, T);
    (p.swing.add(he(0.026, k, 0.042, 0.007), S, P.frame, {
      wear: (x, b, g) => [g[0], g[1], Math.min(1, g[2] + 0.2), g[3]],
    }),
      p.swing.add(
        he(0.03, 0.05, 0.044, 0.004),
        Z(r * 0.088, o.y, o.z + 0.02),
        P.alu,
      ));
    const u = d(r * E.shockBot.x, E.shockBot.y, E.shockBot.z);
    p.swing.add(
      he(0.014, 0.05, 0.045, 0.005),
      Z(r * 0.1, u.y - 0.012, u.z),
      P.frame,
    );
  }
  (p.swing.add(
    ke(d(-0.105, e.y, e.z), d(0.105, e.y, e.z), 0.02, 14),
    null,
    P.frame,
  ),
    p.swing.add(
      ke(d(-0.125, e.y, e.z), d(0.125, e.y, e.z), 0.009, 8),
      null,
      P.steel,
    ),
    p.swing.add(
      ke(d(-0.088, 0.415, -0.3), d(0.088, 0.415, -0.3), 0.014, 10),
      null,
      P.frame,
    ),
    p.swing.add(
      He(
        [
          [0, 0.012],
          [0.07, 0.012],
          [0.082, 0.004],
          [0.084, -0.008],
          [0, -0.008],
        ],
        28,
      ).rotateZ(Math.PI / 2),
      Z(-0.07, o.y, o.z),
      P.case,
    ),
    p.swing.add(
      ge(
        [d(-0.085, o.y + 0.02, o.z + 0.04), d(-0.095, 0.385, -0.42)],
        0.0055,
        6,
      ),
      null,
      P.black,
    ),
    p.swing.add(
      he(0.012, 0.09, 0.02, 0.004),
      Z(-0.085, o.y + 0.06, o.z - 0.01, -0.5, 0, 0),
      P.alu,
    ));
  {
    const r = d(0.072, 0.37, -0.06),
      s = d(0.072, o.y, o.z),
      T = 0.04,
      k = 0.112,
      S = s.clone().sub(r),
      u = S.length();
    S.divideScalar(u);
    const x = Math.asin((k - T) / u),
      b = d(0, S.z, -S.y),
      g = b
        .clone()
        .multiplyScalar(Math.cos(x))
        .addScaledVector(S, -Math.sin(x)),
      n = b
        .clone()
        .multiplyScalar(-Math.cos(x))
        .addScaledVector(S, -Math.sin(x)),
      B = [],
      O = Math.atan2(n.y, n.z);
    let le = Math.atan2(g.y, g.z) - O;
    le < 0 && (le += Math.PI * 2);
    for (let _e = 0; _e <= 12; _e++) {
      const We = O + le * (_e / 12);
      B.push(d(r.x, r.y + Math.sin(We) * T, r.z + Math.cos(We) * T));
    }
    const de = Math.atan2(g.y, g.z);
    let q = Math.atan2(n.y, n.z) - de;
    q > 0 && (q -= Math.PI * 2);
    const te = (_e, We, ze) => {
      for (let J = 1; J < ze; J++) B.push(_e.clone().lerp(We, J / ze));
    };
    te(
      d(r.x, r.y + g.y * T, r.z + g.z * T),
      d(s.x, s.y + g.y * k, s.z + g.z * k),
      16,
    );
    for (let _e = 0; _e <= 24; _e++) {
      const We = de + q * (_e / 24);
      B.push(d(s.x, s.y + Math.sin(We) * k, s.z + Math.cos(We) * k));
    }
    (te(
      d(s.x, s.y + n.y * k, s.z + n.z * k),
      d(r.x, r.y + n.y * T, r.z + n.z * T),
      16,
    ),
      B.push(B[0].clone()),
      p.swing.add(
        ge(B, [0.0045, 0.0075], 6, { up: d(1, 0, 0) }),
        null,
        P.chain,
        { wear: (_e, We, ze) => [0, ze[1], 0.3, 0] },
      ));
    const ne = d(0.085, r.y + g.y * T + 0.03, -0.12),
      we = d(0.085, s.y + g.y * k + 0.035, -0.62);
    p.swing.add(
      he(0.006, ne.distanceTo(we), 0.035, 0.002),
      e0(ne, we),
      P.black,
      { wear: (_e, We, ze) => [0.4, 0.3, ze[2], 0.3] },
    );
  }
}
