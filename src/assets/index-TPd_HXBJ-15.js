// assets/index-TPd_HXBJ 15 — add
// Lines 4489-4893 of readable/assets/index-TPd_HXBJ.pretty.js (statement-aligned).
function Ta(t) {
  const e = new M0("props"),
    o = new M0("midDec"),
    n = new M0("midGlass"),
    a = new M0("dmg"),
    l = new M0("dmgDec"),
    r = new M0("cab1"),
    p = h.FL;
  (ue(e, 1.75, 0.42, 0.58, 0.43, 0.35, R.paper, t, {
    crumple: 0.012,
    fold: !0,
  }),
    ue(
      e,
      2.55,
      -0.25,
      0.42,
      0.31,
      -0.9,
      [
        R.paper[0] + (R.paper[2] - R.paper[0]) * 0.5,
        R.paper[1],
        R.paper[2],
        R.paper[3],
      ],
      t,
      { crumple: 0.008 },
    ));
  {
    const f = new i0()
        .makeRotationY(0.18)
        .setPosition(3.95, h.seatY + 0.042, 1.03),
      c = L0(
        [
          [0, 0],
          [0.012, 0.02],
          [0.034, 0.18],
          [0.04, 0.42],
          [0.032, 0.58],
          [0.016, 0.66],
          [0.006, 0.7],
          [0, 0.7],
        ],
        9,
      );
    (c.rotateZ(-Math.PI / 2),
      c.applyMatrix4(f),
      e.add(c, null, K.canopy, { flat: !0 }));
    const d = d0(b(0.69, 0, 0), b(0.8, 0, 0), 0.005, 6);
    (d.applyMatrix4(f), e.add(d, null, K.shaft));
    const i = d0(b(-0.12, 0, 0), b(0, 0, 0), 0.012, 8);
    (i.applyMatrix4(f), e.add(i, null, K.wood));
    const s = j0(
      [
        b(-0.12, 0, 0),
        b(-0.2, 0, -0.01),
        b(-0.25, 0, -0.05),
        b(-0.25, 0, -0.1),
        b(-0.21, 0, -0.13),
      ],
      0.011,
      8,
      { cap1: !0 },
    );
    (s.applyMatrix4(f), e.add(s, null, K.wood));
    const m = U(0.3, -0.02, -0.042, 0.34, 0.02, 0.042, 0.006);
    (m.applyMatrix4(f), e.add(m, null, K.lid));
  }
  {
    const f = new i0().makeRotationY(-0.6).setPosition(-0.35, p, 0.42),
      c = U(-0.036, 0, -0.076, 0.036, 0.009, 0.076, 0.006);
    (c.applyMatrix4(f), e.add(c, null, K.phone));
    const d = h0(
      [-0.033, 0.0095, 0.072],
      [0.033, 0.0095, 0.072],
      [0.033, 0.0095, -0.072],
      [-0.033, 0.0095, -0.072],
    );
    (d.applyMatrix4(f), e.add(d, null, K.screen, { uv: ct(R.phone) }));
  }
  {
    const d = new i0()
        .makeRotationY(0.5)
        .multiply(new i0().makeRotationX(Math.PI / 2))
        .setPosition(-2.35, p + 0.12, -0.6),
      i = 0.3,
      s = 0.17,
      m = 0.36,
      v = [
        [
          [-i / 2, 0, s / 2],
          [i / 2, 0, s / 2],
          [i / 2, m, s / 2],
          [-i / 2, m, s / 2],
          !0,
        ],
        [
          [i / 2, 0, -s / 2],
          [-i / 2, 0, -s / 2],
          [-i / 2, m, -s / 2],
          [i / 2, m, -s / 2],
          !0,
        ],
        [
          [i / 2, 0, s / 2],
          [i / 2, 0, -s / 2],
          [i / 2, m, -s / 2],
          [i / 2, m, s / 2],
          !1,
        ],
        [
          [-i / 2, 0, -s / 2],
          [-i / 2, 0, s / 2],
          [-i / 2, m, s / 2],
          [-i / 2, m, -s / 2],
          !1,
        ],
        [
          [-i / 2, 0, -s / 2],
          [i / 2, 0, -s / 2],
          [i / 2, 0, s / 2],
          [-i / 2, 0, s / 2],
          !1,
        ],
      ];
    for (const [M, k, P, C, F] of v) {
      const D = h0(M, k, P, C);
      (D.translate(0, -m / 2, 0),
        D.applyMatrix4(d),
        e.add(D, null, F ? K.bag : K.bagIn, {
          uv: F ? ct(R.bag) : void 0,
          both: !0,
        }));
    }
    const y = (M) => b(-2.35 + Math.sin(0.5) * M, 0, -0.6 + Math.cos(0.5) * M),
      w = (M, k, P) => {
        const C = new Re(k, 12, 8);
        (C.translate(M.x, p + k * 0.96, M.z), e.add(C, null, P));
      };
    (w(y(0.42).add(b(0.05, 0, 0)), 0.04, K.orange),
      w(y(0.62).add(b(-0.12, 0, 0.05)), 0.041, K.orange),
      w(y(0.95).add(b(0.25, 0, 0.1)), 0.038, K.apple));
    {
      const M = y(0.75).add(b(0.35, 0, -0.05)),
        k = new ro(0.037, 0.037, 0.11, 16, 1, !0);
      (k.rotateZ(Math.PI / 2),
        k.rotateY(0.7),
        k.translate(M.x, p + 0.037, M.z),
        e.add(k, null, K.can, {
          uv: (P, C, F, D) => [
            R.can[0] + (R.can[2] - R.can[0]) * F,
            R.can[1] + (R.can[3] - R.can[1]) * D,
          ],
        }));
      for (const P of [-1, 1]) {
        const C = new co(0.037, 16);
        (C.rotateY((Math.PI / 2) * P),
          C.translate(0.055 * P, 0, 0),
          C.rotateY(0.7),
          C.translate(M.x, p + 0.037, M.z),
          e.add(C, null, K.tin));
      }
    }
    {
      const M = new i0()
          .makeRotationY(1.2)
          .multiply(new i0().makeRotationZ(Math.PI / 2 - 0.15))
          .setPosition(-2.17, p + 0.035, -0.38),
        k = new so(0.28, 0.07, 0.2);
      (k.applyMatrix4(M), e.add(k, null, K.box, { uv: ct(R.box) }));
    }
  }
  {
    const f = h.gIn - 0.003,
      c = b(2.25, 2.42, f);
    (T0(o, c, b(-1, 0, 0), b(0, 1, 0), 0.26, 0.31, R.hand, K.blood),
      T0(
        o,
        b(2.1, 1.5, h.IW - 0.003),
        b(-1, 0, 0),
        b(0, 1, 0),
        0.2,
        0.2,
        R.palm,
        K.bloodDry,
      ));
  }
  {
    const c = _({ col: "#2a3432", rough: 0.3, kind: 3, param: 0.1 });
    n.add(
      h0(
        [-2.85, 2.08, -1.3705],
        [-1.95, 2.08, -1.3705],
        [-1.95, 2.53, -1.3705],
        [-2.85, 2.53, -1.3705],
      ),
      null,
      c,
      { uv: ct(R.scratch) },
    );
  }
  for (const f of [7.93, -7.93])
    for (const c of [1, -1]) {
      const d = c * (h.gIn - 0.0015),
        i = b(-c, 0, 0);
      T0(o, b(f, 2.82, d), i, b(0, 1, 0), 0.34, 0.085, R.priority, {
        ...K.paper,
        col: [0.5, 0.5, 0.5],
        param: 1,
      });
    }
  T0(
    o,
    b(0.35, p + 0.002, 0.7),
    b(1, 0, 0),
    b(0, 0, -1),
    0.45,
    0.45,
    R.spatter,
    { ...K.bloodDry, param: 0.55 },
  );
  {
    const m = new Re(1, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      v = m.attributes.position;
    for (let y = 0; y < v.count; y++) {
      const w = v.getX(y),
        M = v.getY(y),
        k = v.getZ(y),
        P =
          0.82 +
          0.22 * Math.sin(w * 9.1 + k * 4.3) * Math.cos(k * 7.7 - w * 2.1) +
          0.08 * Math.sin(w * 23 + k * 19);
      v.setXYZ(
        y,
        2.25 + w * 0.2 * (0.92 + 0.1 * P),
        1.551 - 0.016 + M * 0.03 * P,
        -1.02 + k * 0.11 * (0.92 + 0.1 * P),
      );
    }
    (m.computeVertexNormals(), a.add(m, null, K.foam));
    for (let y = 0; y < 9; y++) {
      const w = (y / 9) * Math.PI * 2 + t() * 0.3,
        M = 0.07 + t() * 0.05,
        k = 0.08 + t() * 0.07,
        P = 1.4 + t() * 1.3,
        C = 2.25 + Math.cos(w) * 0.2 * 1.02,
        F = -1.02 + Math.sin(w) * 0.11 * 1.02,
        D = Math.cos(w),
        z = Math.sin(w),
        q = -z,
        Y = D,
        Z0 = (m0, Q) => {
          const O0 = Q * P,
            X0 = k / Math.max(P, 0.1),
            u0 = Math.sin(O0) * X0,
            Tt = (1 - Math.cos(O0)) * X0,
            Rt = (m0 - 0.5) * M * (1 - Q * 0.35);
          return [C + D * u0 + q * Rt, 1.551 + 0.002 + Tt, F + z * u0 + Y * Rt];
        };
      a.add(he(Z0, 2, 4, !1), null, K.fabric, {
        uv: (m0) => [m0.x, m0.z],
        both: !0,
      });
    }
    for (let y = 0; y < 4; y++) {
      const w = new Be(0.025 + t() * 0.02, 1);
      (w.scale(1.3, 0.7, 1),
        w.translate(2 + t() * 0.7, 1.551 + 0.012, -0.95 - t() * 0.15),
        a.add(w, null, K.foam));
    }
    for (let y = 0; y < 9; y++) {
      const w = new Be(0.015 + t() * 0.02, 0);
      (w.translate(1.75 + t() * 1.2, p + 0.012, -0.62 + t() * 0.42),
        a.add(w, null, K.foam, { flat: !0 }));
    }
  }
  {
    const f = new i0()
        .makeRotationY(2.2)
        .multiply(new i0().makeRotationX(0.35))
        .setPosition(-1.4, p + 0.03, 0.25),
      c = U(-0.12, 0, -0.042, 0.12, 0.055, 0.042, 0.03, 2);
    (c.applyMatrix4(f), a.add(c, null, K.shoe));
    const d = U(-0.125, -0.008, -0.045, 0.125, 0.004, 0.045, 0.012);
    (d.applyMatrix4(f), a.add(d, null, K.sole));
  }
  (T0(
    l,
    b(2.25, h.seatY + 0.0035, -1.02),
    b(1, 0, 0),
    b(0, 0, -1),
    0.6,
    0.36,
    R.grime,
    { ...K.bloodDry, col: [0.05, 0.05, 0.05], param: 1 },
  ),
    T0(
      l,
      b(1.2, p + 0.002, -0.15),
      b(1, 0, 0),
      b(0, 0, -1),
      1.3,
      0.98,
      R.pool,
      K.blood,
    ),
    T0(
      l,
      b(0.3, p + 0.0025, 0.5),
      b(-0.8, 0, 0.6),
      b(0.6, 0, 0.8),
      1.5,
      0.9,
      R.drag,
      K.bloodDry,
    ),
    T0(
      l,
      b(-3, 1.8, 1.176),
      b(-1, 0, 0),
      b(0, 0.995, 0.1).normalize(),
      0.9,
      0.3,
      R.smear2,
      K.bloodDry,
    ),
    T0(
      l,
      b(-4.95, 2.3, -1.3 + 0.003),
      b(1, 0, 0),
      b(0, 1, 0),
      0.24,
      0.24,
      R.palm,
      K.blood,
    ),
    T0(
      l,
      b(-8.75 + 0.004, 2, 0.85),
      b(0, 0, -1),
      b(0, 1, 0),
      0.7,
      0.7,
      R.spatter,
      K.bloodDry,
    ),
    T0(
      l,
      b(-6.3, 2.25, h.LZ0 - 0.003),
      b(-1, 0, 0),
      b(0, 1, 0),
      0.25,
      0.3,
      R.hand,
      K.blood,
      3,
    ));
  {
    const f = b(-3.6, h.seatY + 0.002, -1);
    (r.add(
      L0(
        [
          [0, 0],
          [0.03, 0],
          [0.042, 0.14],
          [0, 0.14],
        ],
        14,
      ).translate(f.x, f.y, f.z),
      null,
      K.cup,
    ),
      r.add(
        L0(
          [
            [0, 0],
            [0.044, 0],
            [0.044, 0.008],
            [0.03, 0.016],
            [0, 0.016],
          ],
          14,
        ).translate(f.x, f.y + 0.14, f.z),
        null,
        K.lid,
      ),
      ue(
        r,
        -1.9,
        0.3,
        0.42,
        0.31,
        0.6,
        [
          R.paper[0],
          R.paper[1],
          R.paper[0] + (R.paper[2] - R.paper[0]) * 0.5,
          R.paper[3],
        ],
        t,
        { crumple: 0.01 },
      ));
  }
  return { mid: e, midDec: o, midGlass: n, dmg: a, dmgDec: l, cab1: r };
}
