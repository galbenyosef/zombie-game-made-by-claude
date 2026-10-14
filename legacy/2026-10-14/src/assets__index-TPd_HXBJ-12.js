// assets__index-TPd_HXBJ 12 — add
// Lines 3539-3967 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function ba(t, e, o, n, a) {
  const l = h.cabX,
    r = h.HL,
    p = (s, m, v) => {
      const y = s.attributes.position,
        w = s.attributes.normal;
      for (let M = 0; M < y.count; M++) {
        const k = y.getX(M),
          P = y.getY(M);
        (y.setXYZ(M, m, P, k), w.setXYZ(M, v, 0, 0));
      }
      return Ht(s, v > 0);
    },
    f = y0(-0.2, 1.86, 0.2, 2.84, 0.05, 3);
  (e.add(C0(jt(0.36, 3), [], l, -1), null, g.lining),
    e.add(C0(jt(0.36, 3), [], l + 0.04, 1), null, g.cabLin),
    e.add(
      C0(
        [
          [-0.36, 1.1],
          [0.36, 1.1],
          [0.36, 3],
          [-0.36, 3],
        ],
        [f],
        l + 0.01,
        -1,
      ),
      null,
      g.steel,
    ),
    e.add(
      C0(
        [
          [-0.36, 1.1],
          [0.36, 1.1],
          [0.36, 3],
          [-0.36, 3],
        ],
        [f],
        l + 0.035,
        1,
      ),
      null,
      g.cabLin,
    ));
  {
    const s = new Q0(f.map(([w, M]) => new c0(w, M)));
    (o.add(p(new F0(s, 3), l + 0.015, -1), null, g.glass),
      o.add(p(new F0(s, 3), l + 0.03, 1), null, g.glass));
    const m = Y0(f, 0, 0.025),
      v = m.attributes.position,
      y = m.attributes.normal;
    for (let w = 0; w < v.count; w++) {
      const M = v.getX(w),
        k = v.getY(w),
        P = v.getZ(w);
      (v.setXYZ(w, l + 0.01 + P, k, M), y.setXYZ(w, 0, y.getY(w), y.getX(w)));
    }
    e.add(Ht(m, !0), null, g.rubber);
  }
  (e.add(U(l - 0.012, 2.12, 0.25, l + 0.002, 2.16, 0.32, 0.006), null, g.steel),
    e.add(
      d0(b(l - 0.006, 2.02, 0.29), b(l - 0.012, 2.02, 0.29), 0.02, 12),
      null,
      g.alu,
    ),
    X(
      e,
      b(l - 0.002, 1.62, 0),
      b(0, 0, 1),
      b(0, 1, 0),
      0.34,
      0.1,
      R.staff,
      g.decal,
    ));
  for (const s of [-0.39, 0.39])
    e.add(
      U(l - 0.02, 1.1, s - 0.025, l + 0.005, 3.03, s + 0.025, 0.006),
      null,
      g.steel,
    );
  (e.add(U(l - 0.02, 3, -0.415, l + 0.005, 3.05, 0.415, 0.006), null, g.steel),
    e.add(U(l - 0.07, 3.08, -0.5, l, 3.24, 0.5, 0.01), null, g.grille),
    X(
      e,
      b(l - 0.071, 3.16, 0),
      b(0, 0, 1),
      b(0, 1, 0),
      0.4,
      0.133,
      R.cabScreen,
      g.dispGlow(1.4),
    ));
  {
    const m = l - 0.12;
    (e.add(
      L0(
        [
          [0, 0],
          [0.075, 0],
          [0.08, 0.02],
          [0.08, 0.5],
          [0.06, 0.56],
          [0.025, 0.6],
          [0, 0.6],
        ],
        16,
      ).applyMatrix4(J0(m, 1.28, -0.72)),
      null,
      g.red,
    ),
      e.add(
        U(m - 0.03, 1.86, -0.72 - 0.02, m + 0.03, 1.94, -0.72 + 0.02, 0.01),
        null,
        g.black,
      ),
      e.add(
        j0(
          [
            b(m, 1.9, -0.72 + 0.02),
            b(m - 0.04, 1.8, -0.72 + 0.09),
            b(m - 0.05, 1.5, -0.72 + 0.1),
          ],
          0.008,
          6,
        ),
        null,
        g.black,
      ),
      X(
        e,
        b(m - 0.081, 1.62, -0.72),
        b(0, 0, 1),
        b(0, 1, 0),
        0.07,
        0.14,
        R.extLabel,
        g.decal,
      ),
      e.add(
        U(l - 0.03, 1.2, -0.72 - 0.1, l, 1.9, -0.72 + 0.1, 0.01),
        null,
        g.liningG,
      ),
      X(
        e,
        b(l - 0.003, 2.25, 0.72),
        b(0, 0, 1),
        b(0, 1, 0),
        0.22,
        0.22,
        R.intercom,
        g.decal,
      ),
      e.add(U(l - 0.06, 1.85, 0.64, l, 1.95, 0.8, 0.02), null, g.red),
      X(
        e,
        b(l - 0.003, 2.5, 0.72),
        b(0, 0, 1),
        b(0, 1, 0),
        0.26,
        0.065,
        R.alarm,
        g.decal,
      ),
      e.add(U(l - 0.02, 2, -1.22, l, 2.62, -0.88, 0.006), null, g.steel),
      X(
        e,
        b(l - 0.021, 2.31, -1.05),
        b(0, 0, 1),
        b(0, 1, 0),
        0.32,
        0.6,
        R.ad4,
        g.decal,
      ));
  }
  e.add(
    h0(
      [l + 0.04, h.FL + 0.05, h.IW],
      [r - 0.02, h.FL + 0.05, h.IW],
      [r - 0.02, h.FL + 0.05, -1.3],
      [l + 0.04, h.FL + 0.05, -1.3],
    ),
    null,
    g.cabFloor,
  );
  for (const s of [1, -1]) {
    const m = At(s),
      v = y0(7.42 - 0.03, h.winY0 - 0.03, 8.45 + 0.03, h.winY1 + 0.03, 0.12, 3);
    (e.add(
      St(
        [
          [l + 0.04, 1.1],
          [r - 0.02, 1.1],
          [r - 0.02, 3.06],
          [l + 0.04, 3.06],
        ],
        [v],
        h.IW,
        -1,
      ),
      m,
      g.cabLin,
    ),
      e.add(
        po(v, h.IW, y0(7.42, h.winY0, 8.45, h.winY1, 0.09, 3), h.gIn - 0.002),
        m,
        g.rubber,
      ),
      e.add(
        $0(
          [
            [1.3, 3.06],
            [1, 3.28],
            [0, 3.3],
          ],
          l + 0.04,
          r - 0.02,
          { out: -1 },
        ),
        m,
        g.cabLin,
      ));
  }
  {
    const s = h.FL + 0.84,
      m = h.FL + 1.02,
      v = 8.12,
      y = 8.62,
      w = new Q0([
        new c0(v, h.FL + 0.05),
        new c0(8.72, h.FL + 0.05),
        new c0(8.72, m),
        new c0(y, m),
        new c0(v, s),
      ]),
      M = new tn(w, {
        depth: 2.5,
        bevelEnabled: !0,
        bevelThickness: 0.012,
        bevelSize: 0.012,
        bevelSegments: 1,
        curveSegments: 1,
      });
    (M.translate(0, 0, -1.25), e.add(M, null, g.console));
    const k = b(y - v, m - s, 0).normalize(),
      P = b(-k.y, k.x, 0),
      C = b((v + y) / 2, (s + m) / 2, 0).addScaledVector(P, 0.014);
    X(
      e,
      C,
      b(0, 0, 1),
      k,
      1.7,
      Math.hypot(y - v, m - s) * 0.94,
      R.console,
      g.dispGlow(1.7),
    );
  }
  (e.add(
    d0(b(8.2, h.FL + 0.93, -0.42), b(8.2, h.FL + 1.06, -0.42), 0.012, 8),
    null,
    g.steel,
  ),
    e.add(
      U(8.18, h.FL + 1.06, -0.5, 8.22, h.FL + 1.09, -0.34, 0.01),
      null,
      g.seatBlack,
    ),
    e.add(
      d0(b(7.66, h.FL + 0.05, 0), b(7.66, h.FL + 0.44, 0), 0.05, 12),
      null,
      g.steel,
    ),
    e.add(
      L0(
        [
          [0, 0],
          [0.28, 0],
          [0.3, 0.02],
          [0, 0.02],
        ],
        16,
      ).applyMatrix4(J0(7.66, h.FL + 0.05, 0)),
      null,
      g.steel,
    ),
    e.add(
      U(7.42, h.FL + 0.44, -0.27, 7.92, h.FL + 0.56, 0.27, 0.05, 2),
      null,
      g.seatBlack,
    ),
    e.add(
      U(7.36, h.FL + 0.54, -0.25, 7.46, h.FL + 1.22, 0.25, 0.05, 2),
      null,
      g.seatBlack,
    ),
    e.add(
      U(7.3, h.FL + 1.24, -0.14, 7.4, h.FL + 1.4, 0.14, 0.04, 2),
      null,
      g.seatBlack,
    ));
  for (const s of [-0.3, 0.3])
    e.add(
      U(7.5, h.FL + 0.72, s - 0.03, 7.86, h.FL + 0.77, s + 0.03, 0.015),
      null,
      g.seatBlack,
    );
  e.add(d0(b(8.7, 3.2, -1.1), b(8.7, 3.2, 1.1), 0.03, 12), null, g.grille);
  const c = y0(-1.06, 2.02, 1.06, 3.26, 0.14, 4),
    d = new Q0(c.map(([s, m]) => new c0(s, m)));
  (n.add(p(new F0(d, 4), r - 0.012, 1), null, g.wind),
    o.add(p(new F0(d, 4), r - 0.02, -1), null, g.wind),
    t.add(C0(ge(), [c], r, 1), null, g.front));
  {
    const s = Y0(c, 0, 0.03),
      m = s.attributes.position,
      v = s.attributes.normal;
    for (let y = 0; y < m.count; y++) {
      const w = m.getX(y),
        M = m.getY(y),
        k = m.getZ(y);
      (m.setXYZ(y, r - k, M, w), v.setXYZ(y, 0, v.getY(y), v.getX(y)));
    }
    t.add(s, null, g.rubber);
  }
  (e.add(U(r - 0.12, 3.03, -0.8, r - 0.04, 3.24, 0.8, 0.01), null, g.grille),
    X(
      e,
      b(r - 0.039, 3.135, 0),
      b(0, 0, -1),
      b(0, 1, 0),
      1.5,
      0.1875,
      R.dest,
      g.dispGlow(2.4),
    ));
  const i = ge();
  {
    const s = [];
    for (const [m, v] of i) s.push(b(r + 0.004, v, m));
    (s.push(s[0].clone()), t.add(j0(s, 0.014, 6), null, g.steel));
  }
  for (const s of [1, -1]) {
    const m = s * 1;
    t.add(
      U(r - 0.02, 1.46, m - 0.32, r + 0.035, 1.76, m + 0.32, 0.05, 3),
      null,
      g.black,
    );
    for (const [v, y, w] of [
      [s * 0.84, 0.1, g.head],
      [s * 1.17, 0.075, g.tail],
    ]) {
      const M = uo(y + 0.012, 0.012, 6, 24);
      (M.rotateY(Math.PI / 2),
        M.translate(r + 0.038, 1.61, v),
        t.add(M, null, g.steel));
      const k = new co(y, 24);
      (k.rotateY(Math.PI / 2),
        k.translate(r + 0.04, 1.61, v),
        t.add(k, null, w, { uv: (P, C, F, D) => [F, D] }));
    }
  }
  t.add(U(r - 0.01, 1.28, -0.24, r + 0.012, 1.44, 0.24, 0.02), null, g.grille);
  for (let s = 0; s < 5; s++)
    t.add(
      U(
        r + 0.004,
        1.3 + s * 0.03,
        -0.22,
        r + 0.02,
        1.312 + s * 0.03,
        0.22,
        0.004,
      ),
      null,
      g.black,
    );
  X(
    t,
    b(r + 0.003, 1.92, 0),
    b(0, 0, -1),
    b(0, 1, 0),
    0.16,
    0.16,
    R.roundel,
    g.decal,
  );
  for (const s of [-0.55, 0.45])
    t.add(
      U(r + 0.004, 2.05, s - 0.4, r + 0.02, 2.07, s + 0.4, 0.006),
      null,
      g.black,
    );
  t.add(U(r - 0.05, 0.94, -1.05, r + 0.09, 1.07, 1.05, 0.015), null, g.underG);
  for (let s = 0; s < 3; s++)
    t.add(
      U(r + 0.07, 0.96 + s * 0.04, -1, r + 0.1, 0.975 + s * 0.04, 1, 0.005),
      null,
      g.underG,
    );
  (ya(t, r, 1),
    t.add(
      h0(
        [r + 0.16, 0.2, -1.2],
        [r + 0.16, 0.2, 1.2],
        [r + 0.04, 0.93, 1.25],
        [r + 0.04, 0.93, -1.25],
      ),
      null,
      g.underG,
      { uv: (s) => [s.z, s.y] },
    ),
    t.add(
      h0(
        [r + 0.04, 0.93, -1.25],
        [r + 0.04, 0.93, 1.25],
        [r + 0.16, 0.2, 1.2],
        [r + 0.16, 0.2, -1.2],
      ),
      null,
      g.under,
      { uv: (s) => [s.z, s.y] },
    ));
}
