// assets__bedroom-Se-_w21f 10 — add
// Lines 2273-2639 of readable/assets__bedroom-Se-_w21f.pretty.js (statement-aligned).
function De(N, t) {
  const w = new u0();
  w.name = "piano";
  const e = new M0("piano"),
    o = t.ebony,
    M = nt(88);
  (e.add(R(z0 + 0.03, 0.1, 4.4, k0 - 0.03, 1.24, _t - 0.025, 0.008, "x"), o),
    e.add(
      R(z0 + 0.01, 1.24, 4.365, k0 - 0.01, 1.262, _t - 0.018, 0.01, "x"),
      o,
    ),
    e.add(R(z0 + 0.02, 1.228, 4.375, k0 - 0.02, 1.242, 4.4, 0.004, "x"), o),
    e.add(R(z0 + 0.02, 0, 4.41, k0 - 0.02, 0.1, _t - 0.022, 0.008, "x"), o),
    e.add(R(z0 + 0.025, 0.09, 4.4, k0 - 0.025, 0.105, 4.425, 0.004, "x"), o),
    e.add(R(z0 + 0.12, 0.86, 4.388, k0 - 0.12, 1.21, 4.402, 0.004, "x"), o),
    e.add(R(z0 + 0.2, 0.93, 4.378, k0 - 0.2, 1.16, 4.39, 0.012, "x"), o));
  for (const f of [0.95, 1.14])
    e.add(
      R(z0 + 0.24, f - 0.004, 4.372, k0 - 0.24, f + 0.004, 4.38, 0.003, "x"),
      t.brass,
    );
  for (const [f, U] of [
    [z0, z0 + 0.095],
    [k0 - 0.095, k0],
  ])
    (e.add(R(f, 0.6, tt, U, 0.83, 4.42, 0.018, "z"), o),
      e.add(
        R(f + 0.005, 0.83, tt + 0.03, U - 0.005, 0.86, 4.42, 0.012, "z"),
        o,
      ));
  (e.add(R(z0 + 0.09, 0.6, tt, k0 - 0.09, 0.672, 4.42, 0.004, "x"), o),
    e.add(
      R(z0 + 0.09, 0.64, tt - 0.016, k0 - 0.09, 0.708, tt + 0.004, 0.004, "x"),
      o,
    ),
    e.add(
      R(z0 + 0.09, 0.705, et + 0.004, k0 - 0.09, 0.86, 4.41, 0.004, "x"),
      o,
    ),
    e.add(
      R(
        St - 0.01,
        0.703,
        et - 0.004,
        St + 52 * wt + 0.01,
        0.713,
        et + 0.006,
        0.002,
        "x",
      ),
      t.feltRed,
    ));
  {
    const f = R(z0 + 0.1, -0.035, -0.02, k0 - 0.1, 0.035, 0.02, 0.006, "x");
    (f.translate(0, 0, 0),
      f.applyMatrix4(mt([0, 0.86, et + 0.01], [-0.28, 0, 0])),
      e.add(f, o));
  }
  (e.add(R(3, 0.79, et + 0.001, 3.15, 0.81, et + 0.006, 0.002, "x"), t.brass),
    e.add(R(2.72, 0.9, 4.335, 3.43, 0.918, 4.39, 0.004, "x"), o),
    e.add(R(2.72, 0.912, 4.33, 3.43, 0.935, 4.341, 0.003, "x"), o),
    e.add(R(z0 + 0.09, 0.105, 4.42, k0 - 0.09, 0.6, 4.432, 0.004, "x"), o),
    e.add(R(z0 + 0.2, 0.18, 4.412, k0 - 0.2, 0.52, 4.422, 0.01, "x"), o),
    e.add(R(2.86, 0.03, 4.36, 3.29, 0.1, 4.425, 0.006, "x"), o));
  for (const f of [2.99, 3.16]) {
    const U = E(
      [
        [0, 0],
        [0.012, 0],
        [0.013, 0.01],
        [0.011, 0.05],
        [0.016, 0.075],
        [0.018, 0.085],
        [0, 0.088],
      ],
      0,
      0,
      0,
      { segs: 16, rot: [-Math.PI / 2, 0, 0], scale: [1, 1, 0.45] },
    );
    (U.translate(f, 0.07, 4.405), e.add(U, t.brass));
  }
  for (const f of [z0 + 0.048, k0 - 0.048])
    (e.add(R(f - 0.042, 0, tt + 0.005, f + 0.042, 0.055, 4.44, 0.008, "z"), o),
      e.add(
        E(
          [
            [0, 0],
            [0.034, 0],
            [0.036, 0.02],
            [0.028, 0.04],
            [0.024, 0.1],
            [0.032, 0.16],
            [0.036, 0.26],
            [0.03, 0.36],
            [0.022, 0.44],
            [0.026, 0.5],
            [0.03, 0.545],
            [0, 0.545],
          ],
          f,
          0.055,
          tt + 0.045,
          { segs: 20, tile: 0.8 },
        ),
        o,
      ),
      e.add(
        E(
          [
            [0, 0],
            [0.012, 0],
            [0.014, 0.012],
            [0, 0.014],
          ],
          f,
          0,
          tt + 0.03,
          { segs: 12 },
        ),
        t.brass,
      ));
  for (const f of [z0 + 0.14, k0 - 0.14])
    (e.add(
      E(
        [
          [0, 0],
          [0.022, 0],
          [0.022, 0.004],
          [0, 0.005],
        ],
        f,
        1.04,
        4.388,
        { segs: 16, rot: [Math.PI / 2, 0, 0] },
      ),
      t.brass,
    ),
      e.add(
        h0(
          [
            [f, 1.04, 4.386],
            [f, 1.03, 4.34],
            [f, 1, 4.3],
            [f, 0.99, 4.27],
          ],
          0.005,
          16,
          6,
        ),
        t.brass,
      ),
      e.add(
        E(
          [
            [0, 0],
            [0.034, 0],
            [0.036, 0.004],
            [0.03, 0.006],
            [0.014, 0.008],
            [0.014, 0.03],
            [0.017, 0.033],
            [0, 0.032],
          ],
          f,
          0.985,
          4.268,
          { segs: 20 },
        ),
        t.brass,
      ),
      e.add(
        E(
          [
            [0, 0],
            [0.012, 0],
            [0.012, 0.028],
            [0.011, 0.033],
            [0.006, 0.031],
            [0, 0.03],
          ],
          f,
          1.017,
          4.268,
          { segs: 16 },
        ),
        t.wax,
      ),
      e.add(
        h0(
          [
            [f, 1.045, 4.268],
            [f + 0.001, 1.05, 4.268],
            [f + 0.003, 1.054, 4.269],
          ],
          9e-4,
          5,
          4,
        ),
        t.wick,
        { cast: !1 },
      ));
  const s = 2.84,
    h = 3.31,
    i = 0.918,
    z = 0.3,
    D = 0.08,
    C = bt(
      (f, U) => {
        const O = h - (h - s) * f,
          l = Math.abs(f - 0.5) * 2,
          a =
            0.007 * Math.sin(l * Math.PI) * (1 - 0.5 * U) -
            0.004 * g0(0.85, 1, l),
          r = i + U * z * Math.cos(D),
          n = 4.345 + U * z * Math.sin(D) - a + 0.003 * M.n2(f * 8, U * 6);
        return [O, r, n];
      },
      40,
      20,
      1,
      1,
      !1,
      !0,
    );
  {
    let f = 0;
    const U = C.attributes.normal;
    for (let O = 0; O < U.count; O++) f += U.getZ(O);
    if (f > 0) {
      const O = C.index.array;
      for (let l = 0; l < O.length; l += 3) {
        const a = O[l + 1];
        ((O[l + 1] = O[l + 2]), (O[l + 2] = a));
      }
      C.computeVertexNormals();
    }
  }
  const V = new r0(C, t.score);
  ((V.name = "piano:score"),
    (V.castShadow = !0),
    (V.receiveShadow = !0),
    w.add(V),
    e.flush(w));
  const A = [],
    x = [];
  let k = 0;
  const _ = [];
  for (let f = 0; f < 88; f++) {
    const U = (f + 9) % 12;
    if (U === 1 || U === 3 || U === 6 || U === 8 || U === 10) {
      const l = { 1: -0.12, 3: 0.12, 6: -0.15, 8: 0, 10: 0.15 }[U] * wt * 0.5,
        a = St + k * wt + l;
      (_.push({ n: f, black: !0, slot: x.length, x: a }), x.push(a));
    } else {
      const l = St + (k + 0.5) * wt;
      (_.push({ n: f, black: !1, slot: A.length, x: l }), A.push(l), k++);
    }
  }
  const y = se(wt - 0.0013, 0.022, et - Lt, 0.0016),
    L = se(0.0118, 0.017, 0.094, 0.0022),
    W = new Rt(y, t.ivory, A.length);
  W.name = "piano:keysWhite";
  const X = new Rt(L, t.ebonyKey || o, x.length);
  X.name = "piano:keysBlack";
  for (const f of [W, X])
    ((f.castShadow = !0),
      (f.receiveShadow = !0),
      f.instanceMatrix.setUsage(Yt),
      w.add(f));
  const F = _.map((f) =>
      f.black
        ? new ct().makeTranslation(f.x, ee + 0.0085 - 0.001, et - 0.047)
        : new ct().makeTranslation(f.x, ee - 0.011, (Lt + et) / 2),
    ),
    G = new Float32Array(88);
  for (let f = 0; f < 88; f++)
    G[f] = M.hash(f, 3, 1) < 0.08 ? 0.15 + M.hash(f, 4, 1) * 0.25 : 0;
  const m = new Float32Array(88),
    S = new ct(),
    u = new ct(),
    c = new ct(),
    g = new ct(),
    b = { v: 0.012 };
  function p(f) {
    const U = _[f],
      O = ((m[f] + G[f] * 0.2) * b.v) / (Ot.z - Lt);
    (u.makeTranslation(0, Ot.y, Ot.z),
      c.makeRotationX(-O),
      g.makeTranslation(0, -0.7, -4.62),
      S.multiplyMatrices(u, c).multiply(g).multiply(F[f]),
      (U.black ? X : W).setMatrixAt(U.slot, S));
  }
  for (let f = 0; f < 88; f++) p(f);
  const v = [],
    I = [];
  let Z = 0,
    j = !1,
    T = 3;
  const d = {
      group: w,
      keys: 88,
      onKey: null,
      pressKeys(f, U = 0.2, { hold: O = null, travel: l = null } = {}) {
        (l != null && (b.v = l),
          (Array.isArray(f) ? f : [f]).forEach((r, n) =>
            v.push({
              n: Math.max(0, Math.min(87, r | 0)),
              at: Z + n * U,
              hold: O ?? Math.max(0.16, U * 0.9),
            }),
          ));
      },
      get idle() {
        return j;
      },
      set idle(f) {
        ((j = !!f), (T = Z + 1.5));
      },
      setIdle(f) {
        d.idle = f;
      },
      set travel(f) {
        b.v = f;
      },
      get travel() {
        return b.v;
      },
    },
    K = (f) => {
      if (((Z += f), j && Z >= T)) {
        const l = 15 + Math.floor(M.hash(Math.floor(Z * 10), 7, 2) * 24);
        (v.push({ n: l, at: Z, hold: 0.5 + M.hash(l, 2, 3) * 0.6 }),
          (T = Z + 4 + M.hash(Math.floor(Z), 9, 1) * 9));
      }
      for (let l = v.length - 1; l >= 0; l--) {
        const a = v[l];
        Z >= a.at &&
          (v.splice(l, 1),
          I.push({ n: a.n, t: 0, hold: a.hold }),
          d.onKey && d.onKey(a.n));
      }
      let U = !1,
        O = !1;
      for (let l = I.length - 1; l >= 0; l--) {
        const a = I[l];
        a.t += f;
        const r = Math.min(1, a.t / 0.045),
          n = a.t > a.hold ? Math.max(0, 1 - (a.t - a.hold) / 0.09) : 1;
        ((m[a.n] = Math.min(r, n)),
          p(a.n),
          _[a.n].black ? (O = !0) : (U = !0),
          a.t > a.hold + 0.1 && ((m[a.n] = 0), p(a.n), I.splice(l, 1)));
      }
      (U && (W.instanceMatrix.needsUpdate = !0),
        O && (X.instanceMatrix.needsUpdate = !0));
    };
  return (
    N.scene.add(w),
    {
      group: w,
      anim: K,
      api: d,
      colliders: [{ x0: z0, x1: k0, z0: tt - 0.02, z1: _t, y0: 0, y1: 1.27 }],
    }
  );
}
