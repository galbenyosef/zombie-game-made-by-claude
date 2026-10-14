// assets/index-DQDjAbEY 11 — add
// Lines 3049-3393 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function La(e, l, a) {
  const o = (t, s, n, c, i, d = null, f = !0) => {
    const p = f
        ? new ue(n, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2)
        : new Ne(n, 20),
      m = new b0();
    (d && m.makeRotationFromEuler(new Zt(d[0], d[1], d[2])),
      m.setPosition(s),
      t.add(p, m, { ...S.lens, col: i }, { wear: () => [c, 0, 0, 0] }));
  };
  (o(
    e,
    h(1.236, 2.02, -4.98),
    0.03,
    f0.NAV_L,
    [0.5, 0.05, 0.04],
    [0, 0, -Math.PI / 2],
  ),
    o(
      e,
      h(-1.236, 2.02, -4.98),
      0.03,
      f0.NAV_R,
      [0.05, 0.4, 0.12],
      [0, 0, Math.PI / 2],
    ),
    o(
      e,
      h(1.236, 2.3, -5.02),
      0.025,
      f0.STROBE_L,
      [0.6, 0.6, 0.62],
      [0, 0, -Math.PI / 2],
    ),
    o(
      e,
      h(-1.236, 2.3, -5.02),
      0.025,
      f0.STROBE_R,
      [0.6, 0.6, 0.62],
      [0, 0, Math.PI / 2],
    ),
    o(
      l,
      h(0, 2.05, O0.z1 - 0.012),
      0.028,
      f0.NAV_TAIL,
      [0.62, 0.6, 0.55],
      [-Math.PI / 2, 0, 0],
    ),
    e.add(
      W0(
        [
          [0.075, 0],
          [0.075, 0.025],
          [0, 0.025],
        ],
        20,
      ),
      z(0, 2.83, -1.55),
      S.dark,
    ),
    o(e, h(0, 2.855, -1.55), 0.06, f0.BCN_TOP, [0.5, 0.04, 0.03]),
    e.add(
      W0(
        [
          [0.075, 0],
          [0.075, 0.025],
          [0, 0.025],
        ],
        20,
      ),
      z(0, 0.64, -0.45, Math.PI),
      S.dark,
    ),
    o(
      e,
      h(0, 0.615, -0.45),
      0.06,
      f0.BCN_BELLY,
      [0.5, 0.04, 0.03],
      [Math.PI, 0, 0],
    ));
  {
    const t = X.landing,
      s = -28 * je;
    (e.add(
      new V0(0.1, 0.1, 0.05, 24, 1, !0),
      z(t.x, t.y + 0.01, t.z, Math.PI / 2 - s),
      S.chrome,
    ),
      o(e, t, 0.09, f0.LANDING, [0.55, 0.55, 0.52], [-s, 0, 0], !1));
  }
}
function Oa(e, l, a) {
  e.add(
    g0(h(0, 2.2, -3.25), h(0, 2.92, -3.62), [0.008, 0.004], 6),
    null,
    S.dark,
  );
  const o = (t, s, n = !1) => {
    const c = new Lt();
    (c.moveTo(0, 0),
      c.lineTo(0.18, 0),
      c.quadraticCurveTo(0.05, s * 0.4, -0.04, s),
      c.lineTo(-0.07, s),
      c.quadraticCurveTo(-0.03, s * 0.3, -0.06, 0),
      c.closePath());
    const i = new at(c, {
      depth: 0.012,
      bevelEnabled: !0,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 1,
    });
    (i.translate(0, 0, -0.006),
      e.add(
        i,
        z(t.x, t.y, t.z, 0, -Math.PI / 2, n ? Math.PI : 0),
        S.blackPaint,
      ));
  };
  (o(h(0, 2.86, -1.15), 0.16),
    o(h(0, 0.615, 0.55), 0.14, !0),
    o(h(0, 0.64, -1.5), 0.12, !0));
  for (const t of [-3.55, -3.9])
    e.add(
      G(0.12, 0.02, 0.16, 0.005, 1),
      z(0, ie(t).C - ie(t).ry + 0.005, t),
      S.blackPaint,
    );
  for (const t of [1, -1]) {
    const c = _0(2.86, 1.38) * t;
    e.add(
      v0(
        fe(
          [
            h(c, 1.38, 2.86),
            h(c + t * 0.09, 1.38, 2.86),
            h(c + t * 0.09, 1.38, 2.86 + 0.16),
          ],
          0.02,
          4,
        ),
        0.008,
        8,
        { cap1: !0 },
      ),
      null,
      S.chrome,
    );
  }
  {
    const t = new Lt();
    (t.moveTo(0, 0),
      t.lineTo(0.55, 0),
      t.lineTo(0.62, 0.34),
      t.lineTo(0.5, 0.36));
    for (let c = 0; c < 6; c++)
      (t.lineTo(0.45 - c * 0.07, 0.3 - c * 0.045),
        t.lineTo(0.42 - c * 0.07, 0.25 - c * 0.045));
    t.closePath();
    const s = new at(t, { depth: 0.008, bevelEnabled: !1 });
    (s.translate(0, 0, -0.004),
      e.add(
        s,
        z(0, he(0, 1.55) - 0.02, 1.3, 0, -Math.PI / 2, 0),
        a ? S.odPaint : S.blackPaint,
      ));
    const n = new at(t, { depth: 0.008, bevelEnabled: !1 });
    (n.translate(0, 0, -0.004),
      e.add(
        n,
        z(0, 0.8, 2.86, 0, -Math.PI / 2, Math.PI + 0.35),
        a ? S.odPaint : S.blackPaint,
      ));
  }
  if (!a) {
    const t = h(-0.62, 2.2, 0.05),
      s = h(-1.12, 2.31, 0.05);
    (e.add(
      v0(fe([h(-0.4, 2.24, 0.05), t, s], 0.08, 4), [0.05, 0.065], 12, {
        up: h(0, 0, 1),
      }),
      null,
      S.greyPaint,
    ),
      e.add(
        g0(h(-1.16, 2.22, -0.24), h(-1.16, 2.22, 0.3), 0.11, 22),
        null,
        S.whitePaint,
      ));
    for (const n of [-0.24, 0.3])
      e.add(
        new V0(0.115, 0.115, 0.02, 22),
        z(-1.16, 2.22, n, Math.PI / 2),
        S.dark,
      );
    (e.add(
      g0(h(-1.16, 2.12, 0.05), h(-1.16, 2.08, 0.05), 0.004, 6),
      null,
      S.steel,
      { part: _.HOOK },
    ),
      e.add(G(0.05, 0.08, 0.04, 0.008, 2), z(-1.16, 2.04, 0.05), S.dark, {
        part: _.HOOK,
      }),
      e.add(
        new Z0(0.032, 0.008, 8, 18, Math.PI * 1.5),
        z(-1.16, 1.975, 0.05, 0, Math.PI / 2, Math.PI * 0.75),
        S.steel,
        { part: _.HOOK },
      ));
  }
  {
    const t = h(_0(2.72, 1), 1, 2.72),
      s = h(0.9, 0.93, 2.94);
    (e.add(v0(fe([t, h(0.84, 1, 2.8), s], 0.05, 4), 0.012, 8), null, S.dark),
      e.add(
        new ue(0.08, 18, 10, 0, Math.PI * 2, 0, 0.6),
        z(s.x, s.y, s.z + 0.02, -Math.PI / 2 - 0.4, 0.5, 0),
        S.chrome,
      ),
      e.add(
        new Z0(0.045, 0.008, 6, 20),
        z(s.x, s.y, s.z + 0.06, -0.4, 0.5, 0, 1.6, 1.6, 1),
        S.dark,
      ));
  }
  for (const t of [1, -1]) {
    let c = 2.6;
    for (let p = 3.2; p > 2.4; p -= 0.004)
      if (he(0.5, p) >= 1.575) {
        c = p;
        break;
      }
    const i = h(t * 0.5, 1.575, c + 0.012);
    e.add(
      new V0(0.018, 0.022, 0.03, 12),
      z(i.x, i.y, i.z + 0.01, -0.9, 0, 0),
      S.dark,
    );
    const d = [];
    for (let p = 0; p <= 8; p++) {
      const m = x0(0.5, 0.08, p / 8),
        x = 1.5 + 0.22 * m * m + 0.035;
      let w = 2.6;
      for (let v = 3.25; v > 2.4; v -= 0.004)
        if (he(m, v) >= x) {
          w = v;
          break;
        }
      d.push(h(t * m, x, w + 0.016));
    }
    e.add(v0(d, [0.006, 0.004], 6, { cap0: !0, cap1: !0 }), null, S.dark);
    const f = d.map((p) => p.clone().add(h(0, 0.006, 0.004)));
    e.add(v0(f.slice(1), 0.004, 4, { cap0: !0, cap1: !0 }), null, S.rubber);
  }
  for (const t of [1, -1]) {
    let s = -2.6;
    for (let n = -2.92; n < -2.3; n += 0.005)
      if (_0(n, 1.45) >= 0.09) {
        s = n;
        break;
      }
    e.add(
      G(0.03, 0.12, 0.025, 0.008, 1),
      z(t * 0.09, 1.45, s - 0.01, 0, t * 0.5, 0),
      S.chrome,
    );
    for (const n of [1.15, 1.8]) {
      let c = -2.5;
      for (let i = -2.92; i < -2.2; i += 0.005)
        if (_0(i, n) >= 0.5) {
          c = i;
          break;
        }
      e.add(
        G(0.05, 0.06, 0.04, 0.008, 1),
        z(t * (_0(c, n) - 0.005), n, c - 0.02),
        S.steel,
      );
    }
  }
  for (const t of [1, -1])
    for (const s of X.hingeFL)
      e.add(
        G(0.03, 0.07, 0.05, 0.008, 1),
        z(t * (s.x - 0.008), s.y, s.z + 0.012),
        S.steel,
      );
  for (const t of [1, -1]) {
    const c = _0(1.2, 1) * t;
    e.add(G(0.02, 0.03, 0.15, 0.008, 2), z(c + t * 0.006, 1, 1.2), S.chrome, {
      part: t > 0 ? _.DOOR_FL : _.DOOR_FR,
    });
    const i = -0.75,
      d = _0(i, 1.2) * t;
    e.add(
      v0(
        fe(
          [
            h(d, 1, i),
            h(d + t * 0.05, 1.02, i),
            h(d + t * 0.05, 1.4, i),
            h(d, 1.42, i),
          ],
          0.03,
          3,
        ),
        0.011,
        8,
      ),
      null,
      S.chrome,
    );
    const f = -0.55,
      p = 1.02,
      m = _0(f, p) * t;
    e.add(
      G(0.018, 0.03, 0.14, 0.008, 2),
      z(m + t * 0.006, p, f - 0.2),
      S.chrome,
      { part: t > 0 ? _.DOOR_RL : _.DOOR_RR },
    );
    for (const x of [2.13, 0.79]) {
      const w = [];
      for (let v = 0; v <= 10; v++) {
        const u = x0(-2.15, 0.85, v / 10),
          g = _0(u, x);
        g > 0 && w.push(h(t * (g + 0.015), x, u));
      }
      w.length > 2 &&
        e.add(v0(w, 0.012, 6, { cap0: !0, cap1: !0 }), null, S.alu);
    }
  }
  if (!a) {
    const n = -_0(-1.65, 1.05);
    e.add(
      new V0(0.045, 0.045, 0.012, 20),
      z(n - 0.004, 1.05, -1.65, 0, 0, Math.PI / 2),
      S.chrome,
    );
  }
}
