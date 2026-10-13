// assets__index-TPd_HXBJ 09 — add
// Lines 2639-2947 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function sa(t, e, o, n, a, l) {
  const r = At(a),
    p = be.map(([s, m]) => y0(s, h.winY0, m, h.winY1, 0.09, 3)),
    f = h.doors.map((s) => [
      [s - 0.65, 1.1],
      [s + 0.65, 1.1],
      [s + 0.65, h.DHEAD],
      [s - 0.65, h.DHEAD],
    ]);
  t.add(
    St(
      [
        [-8.8, 0.97],
        [h.HL, 0.97],
        [h.HL, 3.1],
        [-8.8, 3.1],
      ],
      [...p, ...f],
      h.HW,
      1,
    ),
    r,
    g.side,
  );
  for (const s of p) {
    t.add(Y0(s, h.gOut - 0.004, h.HW), r, g.black);
    const m = new Q0(s.map(([P, C]) => new c0(P, C))),
      v = new F0(m, 3),
      y = v.clone();
    (y.translate(0, 0, h.gOut), n.add(y, r, g.glass));
    const w = v.clone();
    w.translate(0, 0, h.gIn);
    const M = w.index.array;
    for (let P = 0; P < M.length; P += 3) {
      const C = M[P + 1];
      ((M[P + 1] = M[P + 2]), (M[P + 2] = C));
    }
    const k = w.attributes.normal;
    for (let P = 0; P < k.count; P++) k.setXYZ(P, 0, 0, -1);
    o.add(w, r, g.glass);
  }
  for (const s of h.doors) {
    const m = [
      [s - 0.65, 1.1],
      [s + 0.65, 1.1],
      [s + 0.65, h.DHEAD],
      [s - 0.65, h.DHEAD],
    ];
    (t.add(Y0(m, h.IW, h.HW), r, g.steelY, {
      pick: (v) => (v.y < 1.105 ? g.alu : g.steelY),
    }),
      t.add(
        U(s - 0.65, 1.085, h.IW - 0.01, s + 0.65, 1.102, h.HW + 0.03, 0.004),
        r,
        g.alu,
      ),
      t.add(
        s0(s - 0.65, 1.1, h.HW - 0.02, s + 0.65, 1.103, h.HW + 0.03),
        r,
        g.yellow,
      ),
      t.add(
        U(s - 0.09, 3.035, h.HW - 0.01, s + 0.09, 3.085, h.HW + 0.022, 0.008),
        r,
        g.black,
      ),
      t.add(
        h0(
          [s - 0.07, 3.042, h.HW + 0.0225],
          [s + 0.07, 3.042, h.HW + 0.0225],
          [s + 0.07, 3.078, h.HW + 0.0225],
          [s - 0.07, 3.078, h.HW + 0.0225],
        ),
        r,
        g.doorLamp(a),
        { uv: (v, y, w, M) => [w, M] },
      ));
  }
  const c = a * (h.HW + 0.003),
    d = b(a, 0, 0),
    i = b(0, 1, 0);
  (X(t, b(7.95, 1.805, c), d, i, 0.3, 0.075, R[l.number || "car4013"], g.decal),
    X(
      t,
      b(-7.95, 1.805, c),
      d,
      i,
      0.3,
      0.075,
      R[l.number || "car4013"],
      g.decal,
    ),
    X(t, b(0.95 * a, 1.805, c), d, i, 0.17, 0.17, R.roundel, g.decal));
}
function ia(t, e, o, n, a, l) {
  const r = At(a);
  for (const p of h.doors)
    for (const f of [-1, 1]) {
      const c = (a < 0 ? 1 : 3) + (f > 0 ? 1 : 0),
        d = f < 0 ? p - h.LEAF : p,
        i = f < 0 ? p : p + h.LEAF,
        s = f < 0 ? i : d,
        m = f < 0 ? d + 0.13 : d + 0.1,
        v = f < 0 ? i - 0.1 : i - 0.13,
        y = y0(m, 1.96, v, 2.9, 0.06, 3),
        w = [
          [d, 1.105],
          [i, 1.105],
          [i, 3.02],
          [d, 3.02],
        ];
      (t.add(St(w, [y], h.LZ1, 1), r, g.leafOut, { anim: c }),
        e.add(St(w, [y], h.LZ0, -1), r, g.steel, { anim: c }));
      const M = Y0(w.slice().reverse(), h.LZ0, h.LZ1);
      (t.add(M, r, g.steel, {
        anim: c,
        pick: (z) => (Math.abs(z.x - s) < 0.002 ? g.rubber : g.steel),
      }),
        t.add(
          U(
            s - 0.012,
            1.105,
            h.LZ0 - 0.004,
            s + 0.012,
            3.02,
            h.LZ1 + 0.004,
            0.01,
          ),
          r,
          g.rubber,
          { anim: c },
        ),
        t.add(Y0(y, h.LZ0, h.LZ1), r, g.rubber, { anim: c }));
      const k = new Q0(y.map(([z, q]) => new c0(z, q))),
        P = new F0(k, 3);
      (P.translate(0, 0, (h.LZ0 + h.LZ1) / 2 + 0.006),
        n.add(P, r, g.glass, { anim: c }));
      const C = new F0(k, 3);
      C.translate(0, 0, (h.LZ0 + h.LZ1) / 2 - 0.006);
      const F = C.index.array;
      for (let z = 0; z < F.length; z += 3) {
        const q = F[z + 1];
        ((F[z + 1] = F[z + 2]), (F[z + 2] = q));
      }
      const D = C.attributes.normal;
      for (let z = 0; z < D.count; z++) D.setXYZ(z, 0, 0, -1);
      if ((o.add(C, r, g.glass, { anim: c }), f > 0)) {
        const z = a * (h.LZ0 - 0.002),
          q = b(-a, 0, 0);
        X(
          e,
          b((d + i) / 2, 1.78, z),
          q,
          b(0, 1, 0),
          0.3,
          0.075,
          R.lean,
          g.decal,
          { anim: c },
        );
      }
    }
}
function ca(t, e) {
  for (const o of [1, -1]) {
    const n = At(o);
    (t.add($0(mo, -8.8, h.HL, { out: 1, hard: [1] }), n, g.under, {
      pick: (a) => (a.y < 0.935 ? g.under : g.black),
    }),
      t.add($0(go, -8.8, h.HL, { out: 1, nx: 1 }), n, g.roof, {
        pick: (a) => (a.y > 3.2 ? g.roof : g.steel),
      }),
      t.add(
        $0(
          [
            [1.405, 3.13],
            [1.418, 3.135],
            [1.42, 3.16],
          ],
          -8.8,
          h.HL,
          { out: 1 },
        ),
        n,
        g.steel,
      ));
  }
  for (const o of [-5.8, 5.8]) {
    (t.add(
      U(o - 1.5, 3.54, -0.82, o + 1.5, 3.655, 0.82, 0.04, 2),
      null,
      g.roof,
    ),
      t.add(s0(o - 1.1, 3.655, -0.55, o - 0.1, 3.66, 0.55), null, g.slotsExt));
    for (const n of [-0.62, 0.62])
      t.add(
        d0(b(o + 0.9, 3.655, n), b(o + 0.9, 3.665, n), 0.2, 16),
        null,
        g.grille,
      );
  }
}
function fa(t, e, o, n, a) {
  const l = ge(),
    r = y0(-0.56, 1.08, 0.56, 3.08, 0.12, 3),
    p = (f, c) => {
      t.add(C0(l, [r], f, c), null, g.steelZ);
      const d = Y0(
          r.map(([m, v]) => [m, v]),
          0,
          0.06,
        ),
        i = d.attributes.position,
        s = d.attributes.normal;
      for (let m = 0; m < i.count; m++) {
        const v = i.getX(m),
          y = i.getY(m),
          w = i.getZ(m);
        i.setXYZ(m, f - c * w, y, v);
        const M = s.getX(m),
          k = s.getY(m);
        s.setXYZ(m, 0, k, M);
      }
      (Ht(d, c < 0), t.add(d, null, g.black));
      for (const m of [-0.9, 0.9])
        t.add(
          d0(b(f + c * 0.03, 1.3, m), b(f + c * 0.03, 2.4, m), 0.016, 8),
          null,
          g.steel,
        );
      for (const m of [-0.95, 0.95])
        t.add(
          U(f, 0.95, m - 0.14, f + c * 0.07, 1.06, m + 0.14, 0.01),
          null,
          g.underG,
        );
    };
  (a.type === "mid" && p(h.HL, 1), p(-8.8, -1));
}
function da(t, e, o, n, a) {
  const { x0: l, x1: r } = a;
  t.add(
    h0([l, h.FL, h.IW], [r, h.FL, h.IW], [r, h.FL, -1.3], [l, h.FL, -1.3]),
    null,
    g.floor,
    { uv: (p) => [p.x, p.z] },
  );
  for (const p of [1, -1]) {
    const f = At(p),
      c = [[l, 1.1]];
    for (const s of h.doors)
      c.push(
        [s - 0.65, 1.1],
        [s - 0.65, h.DHEAD],
        [s + 0.65, h.DHEAD],
        [s + 0.65, 1.1],
      );
    c.push([r, 1.1], [r, 3.06], [l, 3.06]);
    const d = be.filter(([s, m]) => m < r - 0.05),
      i = d.map(([s, m]) =>
        y0(s - 0.035, h.winY0 - 0.035, m + 0.035, h.winY1 + 0.035, 0.12, 3),
      );
    (t.add(St(c, i, h.IW, -1), f, g.lining),
      d.forEach(([s, m], v) => {
        const y = i[v],
          w = y0(s, h.winY0, m, h.winY1, 0.09, 3);
        t.add(po(y, h.IW, w, h.gIn - 0.002), f, g.liningG, {
          pick: (M) => (Math.abs(M.z) > h.gIn - 0.03 ? g.rubber : g.liningG),
        });
      }),
      t.add($0(h.cove, l, r, { out: 1 }), f, g.lining),
      t.add($0(ra, l, r, { out: 1, hard: [1] }), f, g.lining));
  }
  (ua(t, a),
    t.add(
      h0(
        [l + 0.3, h.CEIL - 0.003, -0.12],
        [l + 0.3, h.CEIL - 0.003, 0.12],
        [r - 0.3, h.CEIL - 0.003, 0.12],
        [r - 0.3, h.CEIL - 0.003, -0.12],
      ),
      null,
      g.slots,
    ));
  for (const p of [1, -1])
    t.add(
      s0(l + 0.28, h.CEIL - 0.006, p * 0.12, r - 0.28, h.CEIL, p * 0.145),
      null,
      g.alu,
    );
  for (const p of [-3, 3])
    p > r ||
      t.add(
        L0(
          [
            [0, 0],
            [0.11, 0],
            [0.12, 0.006],
            [0, 0.006],
          ],
          20,
        )
          .translate(0, -0.006, 0)
          .applyMatrix4(J0(p, h.CEIL, 0.45)),
        null,
        g.grille,
      );
  (pa(t, a), ha(t, e, a), ga(t, e, o, a));
}
