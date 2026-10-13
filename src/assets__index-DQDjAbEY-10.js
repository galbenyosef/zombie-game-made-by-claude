// assets__index-DQDjAbEY 10 — add
// Lines 2770-3048 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
function Sa(e) {
  const l = X.tr;
  (e.add(
    new ue(1, 20, 12),
    z(0.12, l.y, l.z + 0.03, 0, 0, 0, 0.11, 0.13, 0.2),
    S.skin,
  ),
    e.add(
      g0(h(0.18, l.y, l.z), h(l.x + 0.02, l.y, l.z), 0.035, 14),
      null,
      S.steel,
      { part: _.TROTOR },
    ),
    e.add(
      W0(
        [
          [0, -0.05],
          [0.06, -0.05],
          [0.07, -0.02],
          [0.07, 0.02],
          [0.05, 0.05],
          [0, 0.06],
        ],
        20,
      ),
      z(l.x + 0.02, l.y, l.z, 0, 0, -Math.PI / 2),
      S.dark,
      { part: _.TROTOR },
    ));
  for (const a of [1, -1]) {
    const o = [],
      t = h(0, a, 0);
    for (let s = 0; s <= 8; s++) {
      const n = x0(0.1, X.trR, s / 8),
        c = x0(0.17, X.trChord, s / 8),
        i = (8 - (5 * s) / 8) * je,
        d = h(0, 0, -a).applyAxisAngle(t, i),
        f = h(1, 0, 0).applyAxisAngle(t, i);
      o.push({
        o: h(l.x + 0.035, l.y + a * n, l.z).addScaledVector(d, -c * 0.25),
        c,
        t: 0.11,
        chord: d,
        up: f,
      });
    }
    e.add(Le(o, 8), null, S.blade, {
      part: _.TROTOR,
      uv: (s) => [Math.hypot(s.y - l.y, s.z - l.z), 0.5],
      wear: () => [0, 1, 0, 0],
    });
  }
}
function Aa(e) {
  const l = X.mast;
  (e.add(g0(h(0, 2.82, 0), h(0, l.y - 0.02, 0), 0.075, 20), null, S.steel, {
    part: _.ROTOR,
  }),
    e.add(
      W0(
        [
          [0, -0.03],
          [0.25, -0.03],
          [0.26, 0],
          [0.25, 0.03],
          [0.12, 0.05],
          [0, 0.05],
        ],
        36,
      ),
      z(0, 2.96, 0),
      S.alu,
      { part: _.ROTOR },
    ),
    e.add(
      W0(
        [
          [0, -0.07],
          [0.2, -0.07],
          [0.22, -0.04],
          [0.22, 0.04],
          [0.19, 0.07],
          [0, 0.07],
        ],
        36,
      ),
      z(0, l.y, 0),
      S.dark,
      { part: _.ROTOR },
    ),
    e.add(
      W0(
        [
          [0.15, 0],
          [0.145, 0.04],
          [0.11, 0.09],
          [0.05, 0.115],
          [0, 0.12],
        ],
        30,
      ),
      z(0, l.y + 0.06, 0),
      S.chrome,
      { part: _.ROTOR },
    ));
  for (let a = 0; a < 4; a++) {
    const o = (a * Math.PI) / 2,
      t = h(Math.sin(o), 0, Math.cos(o)),
      s = h(Math.cos(o), 0, -Math.sin(o)),
      n = (f, p = 0, m = 0) => h(t.x * f + s.x * m, l.y + p, t.z * f + s.z * m),
      c = new b0().makeRotationY(o);
    (e.add(
      G(0.12, 0.07, 0.42, 0.012, 2),
      new b0().copy(c).setPosition(n(0.36)),
      S.dark,
      { part: _.ROTOR },
    ),
      e.add(g0(n(0.45), n(0.78), [0.06, 0.045], 16), null, S.dark, {
        part: _.ROTOR,
      }),
      e.add(g0(n(0.5, 0, 0), n(0.5, -0.02, 0.13), 0.018, 8), null, S.steel, {
        part: _.ROTOR,
      }),
      e.add(
        g0(
          n(0.5, -0.02, 0.13),
          h(t.x * 0.24 + s.x * 0.13, 2.98, t.z * 0.24 + s.z * 0.13),
          0.011,
          8,
        ),
        null,
        S.steel,
        { part: _.ROTOR },
      ));
    const i = [],
      d = 22;
    for (let f = 0; f <= d; f++) {
      const p = x0(0.62, X.R, f / d),
        m = j0(X.R - 0.4, X.R, p),
        x =
          x0(X.chord, X.chord * 0.62, m) *
          (p < 0.95 ? x0(0.8, 1, (p - 0.62) / 0.33) : 1),
        w = x0(7, -3, (p - 0.6) / (X.R - 0.6)) * je,
        v = s
          .clone()
          .multiplyScalar(-Math.cos(w))
          .add(h(0, -Math.sin(w), 0))
          .normalize(),
        u = h(0, 1, 0).applyAxisAngle(t, w),
        g = m * m * 0.1,
        P = n(p, 0, x * 0.25 - g);
      i.push({ o: P, c: x, t: p < 0.95 ? 0.16 : 0.12, chord: v, up: u });
    }
    e.add(Le(i, 9), null, S.blade, {
      part: _.ROTOR,
      uv: (f) => {
        const p = Math.hypot(f.x, f.z),
          x = h(f.x, 0, f.z).dot(s);
        return [p, m0(0.25 - x / X.chord)];
      },
      wear: () => [0, 0, 0, 0],
    });
  }
}
function Ta(e, l) {
  const a = l ? S.odPaint : S.greyPaint;
  for (const o of [1, -1]) {
    const t = o * X.skidX,
      s = X.skidR,
      n = fe(
        [
          h(t, 0.11, -2.06),
          h(t, s, -1.86),
          h(t, s, 1.55),
          h(t, 0.11, 1.98),
          h(t, 0.36, 2.2),
        ],
        [0.25, 0.32, 0.18],
        8,
      );
    e.add(v0(n, s, 11, { cap0: !0, cap1: !0 }), null, a, {
      wear: () => [0.8, 0.9, 0, 0.3],
    });
    for (const [c, i] of [
      [-1.55, -0.6],
      [0.55, 1.4],
    ])
      e.add(
        G(0.05, 0.012, i - c, 0.004, 1),
        z(t, 0.006, (c + i) / 2),
        S.steel,
        { wear: () => [0.9, 0.5, 0, 0.3] },
      );
    e.add(G(0.26, 0.018, 0.13, 0.005, 2), z(o * 0.93, 0.55, 1), S.alu, {
      wear: () => [0.7, 0.8, 0, 0.5],
    });
  }
  for (const o of [1, -1.08]) {
    const t = [
        h(X.skidX, 0.045, o),
        h(X.skidX - 0.02, 0.32, o),
        h(1, 0.54, o),
        h(0.74, 0.6, o),
        h(0, 0.6, o),
      ],
      s = [
        ...t,
        ...t
          .slice(0, -1)
          .reverse()
          .map((n) => h(-n.x, n.y, n.z)),
      ];
    e.add(v0(we(s, 30), 0.05, 11), null, a, { wear: () => [0.7, 0.6, 0, 0.3] });
    for (const n of [1, -1])
      e.add(
        new ue(1, 14, 8),
        z(n * 0.7, 0.64, o, 0, 0, 0, 0.1, 0.07, 0.14),
        l ? S.odPaint : S.skin,
      );
  }
}
function _a(e, l) {
  const a = X.slMount,
    o = X.slPivot;
  if ((e.add(G(0.22, 0.09, 0.26, 0.02, 2), z(a.x, a.y - 0.02, a.z), S.dark), l))
    return;
  e.add(
    W0(
      [
        [0.06, 0],
        [0.06, 0.04],
        [0.05, 0.06],
        [0, 0.06],
      ],
      20,
    ),
    z(a.x, a.y - 0.12, a.z),
    S.dark,
    { part: _.SL_PAN },
  );
  const t = fe(
    [
      h(0.2, o.y, o.z),
      h(0.2, a.y - 0.09, o.z),
      h(-0.2, a.y - 0.09, o.z),
      h(-0.2, o.y, o.z),
    ],
    0.05,
    5,
  );
  e.add(v0(t, [0.022, 0.03], 10, { up: h(0, 0, 1) }), null, S.dark, {
    part: _.SL_PAN,
  });
  const s = (n) => h(o.x, o.y, o.z + n);
  (e.add(g0(s(-0.2), s(0.16), 0.14, 28), null, S.blackPaint, {
    part: _.SL_TILT,
  }),
    e.add(new Z0(0.15, 0.022, 10, 36), z(o.x, o.y, o.z + 0.16), S.chrome, {
      part: _.SL_TILT,
    }),
    e.add(new Ne(0.135, 36), z(o.x, o.y, o.z + 0.165), S.lens, {
      part: _.SL_TILT,
      wear: () => [f0.SEARCH, 0, 0, 0],
    }));
  for (let n = 0; n < 6; n++)
    e.add(
      new Z0(0.135, 0.006, 4, 22),
      z(o.x, o.y, o.z - 0.17 + n * 0.022),
      S.dark,
      { part: _.SL_TILT },
    );
  for (const n of [1, -1])
    e.add(
      g0(h(n * 0.2, o.y, o.z), h(n * 0.145, o.y, o.z), 0.03, 12),
      null,
      S.steel,
      { part: _.SL_TILT },
    );
}
