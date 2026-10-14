// assets__index-TPd_HXBJ 11 — add
// Lines 3286-3538 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function ma(t, e, o, n) {
  const l = h.railY,
    r = 0.2 + n() * 0.02,
    p = h.railZ,
    f = (n() - 0.5) * 0.04,
    c = _({ col: "#2a2b2c", rough: 0.7, kind: O.PAINT });
  t.add(
    s0(o - 0.025 / 2, l - r, p - 0.004, o + 0.025 / 2, l + 0.02, p + 0.004),
    e,
    c,
  );
  const d = uo(0.062, 0.0105, 6, 18);
  (d.rotateY(Math.PI / 2),
    t.add(
      d.applyMatrix4(J0(o, l - r - 0.06, p + f * 0)),
      e,
      _({ col: "#c9c0a8", rough: 0.4, kind: O.PAINT }),
    ));
}
function ga(t, e, o, n) {
  const { type: a } = n,
    l = (f, c, d) => {
      t.add(C0(jt(0.42, 3.02), [], f, c), null, g.lining);
    },
    r = (f, c, d = 0) => {
      const i = f - c * 0.02,
        s = { anim: d },
        m = C0(
          [
            [-0.42, 1.1],
            [0.42, 1.1],
            [0.42, 3.02],
            [-0.42, 3.02],
          ],
          [y0(-0.23, 1.95, 0.23, 2.85, 0.06, 3)],
          i,
          c,
        );
      t.add(m, null, g.steel, s);
      const v = C0(
        [
          [-0.42, 1.1],
          [0.42, 1.1],
          [0.42, 3.02],
          [-0.42, 3.02],
        ],
        [y0(-0.23, 1.95, 0.23, 2.85, 0.06, 3)],
        i - c * 0.04,
        -c,
      );
      t.add(v, null, g.steel, s);
      const y = y0(-0.23, 1.95, 0.23, 2.85, 0.06, 3),
        w = Y0(y, 0, 0.04),
        M = w.attributes.position,
        k = w.attributes.normal;
      for (let D = 0; D < M.count; D++) {
        const z = M.getX(D),
          q = M.getY(D),
          Y = M.getZ(D);
        (M.setXYZ(D, i - c * Y, q, z), k.setXYZ(D, 0, k.getY(D), k.getX(D)));
      }
      (Ht(w, c < 0), t.add(w, null, g.rubber, s));
      const P = new Q0(y.map(([D, z]) => new c0(D, z))),
        C = new F0(P, 3),
        F = (D, z, q) => {
          const Y = D.attributes.position,
            Z0 = D.attributes.normal;
          for (let Q = 0; Q < Y.count; Q++) {
            const O0 = Y.getX(Q),
              X0 = Y.getY(Q);
            (Y.setXYZ(Q, z, X0, O0), Z0.setXYZ(Q, q, 0, 0));
          }
          const m0 = D.index.array;
          if (q > 0)
            for (let Q = 0; Q < m0.length; Q += 3) {
              const O0 = m0[Q + 1];
              ((m0[Q + 1] = m0[Q + 2]), (m0[Q + 2] = O0));
            }
          return D;
        };
      (e.add(F(C.clone(), i - c * 0.015, c), null, g.glass, s),
        e.add(F(C.clone(), i - c * 0.025, -c), null, g.glass, s),
        t.add(
          U(i + c * 0.005 - 0.01, 2.12, 0.3, i + c * 0.04, 2.16, 0.36, 0.008),
          null,
          g.steel,
          s,
        ),
        t.add(
          U(i - 0.002, 1.1, -0.4, i + c * 0.003, 1.35, 0.4, 0.004),
          null,
          g.kick,
          s,
        ));
      for (const D of [-0.45, 0.45])
        t.add(
          U(f - 0.01, 1.1, D - 0.03, f + c * 0.02, 3.05, D + 0.03, 0.008),
          null,
          g.steel,
        );
      t.add(
        U(f - 0.01, 3.02, -0.48, f + c * 0.02, 3.08, 0.48, 0.008),
        null,
        g.steel,
      );
    },
    p = (f, c, d) => {
      const i = f + c * 0.01;
      t.add(
        U(i - c * 0, 3.1, -0.5, i + c * 0.07, 3.24, 0.5, 0.01),
        null,
        g.grille,
      );
      const s = b(0, 0, c > 0 ? -1 : 1);
      X(
        t,
        b(i + c * 0.071, 3.17, 0),
        s,
        b(0, 1, 0),
        0.92,
        0.1,
        [0, 0, 1, 1],
        g.scroll,
        {
          uv: (w, M, k, P) => [
            k,
            R.scroll[1] + (R.scroll[3] - R.scroll[1]) * P,
          ],
        },
      );
      const m = c > 0 ? 0.66 : -0.66,
        v = f + c * 0.12;
      (t.add(
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
        ).applyMatrix4(J0(v, 1.28, m)),
        null,
        g.red,
      ),
        t.add(
          U(v - 0.03, 1.86, m - 0.02, v + 0.03, 1.94, m + 0.02, 0.01),
          null,
          g.black,
        ),
        t.add(
          j0(
            [
              b(v, 1.9, m + 0.02),
              b(v + c * 0.04, 1.8, m + 0.09),
              b(v + c * 0.05, 1.5, m + 0.1),
            ],
            0.008,
            6,
          ),
          null,
          g.black,
        ),
        X(
          t,
          b(v + c * 0.081, 1.62, m),
          b(0, 0, c > 0 ? -1 : 1),
          b(0, 1, 0),
          0.07,
          0.14,
          R.extLabel,
          g.decal,
          { col: () => [1, 1, 1] },
        ),
        t.add(
          U(f, 1.2, m - 0.1, f + c * 0.03, 1.9, m + 0.1, 0.01),
          null,
          g.liningG,
        ));
      const y = -m;
      (X(
        t,
        b(f + c * 0.012, 2.25, y),
        s,
        b(0, 1, 0),
        0.22,
        0.22,
        R.intercom,
        g.decal,
      ),
        t.add(
          U(f, 1.85, y - 0.08, f + c * 0.06, 1.95, y + 0.08, 0.02),
          null,
          g.red,
        ),
        X(
          t,
          b(f + c * 0.012, 2.5, y),
          s,
          b(0, 1, 0),
          0.26,
          0.065,
          R.alarm,
          g.decal,
        ),
        X(
          t,
          b(f + c * 0.012, 2.78, m),
          s,
          b(0, 1, 0),
          0.2,
          0.067,
          R.nosmoke,
          g.decal,
        ),
        d &&
          X(
            t,
            b(f + c * 0.012, 2.95, -m),
            s,
            b(0, 1, 0),
            0.24,
            0.06,
            R.car4013,
            g.decal,
          ));
    };
  if (a === "mid")
    (l(h.END, -1),
      r(h.END, -1, 8),
      p(h.END, -1, !0),
      l(-8.75, 1),
      r(-8.75, 1, 7),
      p(-8.75, 1, !0));
  else {
    t.add(C0(jt(0.5, 3.04), [], -8.75, 1), null, g.lining);
    for (const f of [-0.53, 0.53])
      t.add(
        U(-8.75 - 0.05, 1.1, f - 0.03, -8.75 + 0.02, 3.07, f + 0.03, 0.008),
        null,
        g.steel,
      );
    (t.add(
      U(-8.75 - 0.05, 3.04, -0.56, -8.75 + 0.02, 3.1, 0.56, 0.008),
      null,
      g.steel,
    ),
      p(-8.75, 1, !1));
  }
}
