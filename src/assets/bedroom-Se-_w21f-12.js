// assets/bedroom-Se-_w21f 12 — add
// Lines 2648-3087 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
function Fe(N, t) {
  const w = new u0();
  w.name = "wardrobe";
  const e = new M0("wardrobe"),
    o = t.walnut,
    M = nt(9);
  (e.add(R(Y0 + 0.01, 0.12, d0 + 0.025, Z0 - 0.01, dt, it, 0.008, "y"), o),
    e.add(R(Y0 - 0.01, 0, d0 - 0.012, Z0 + 0.01, 0.1, it, 0.006, "x"), o));
  const s = [
    [0, 0],
    [0.012, 0],
    [0.012, 0.008],
    [0.006, 0.016],
    [0.004, 0.024],
    [0, 0.026],
  ];
  (e.add(
    Q0(
      s,
      [Y0 - 0.002, 0.1, d0 - 0.002],
      [Z0 + 0.002, 0.1, d0 - 0.002],
      [0, 0, -1],
      [0, 1, 0],
      { mitreA: 1, mitreB: 1 },
    ),
    o,
  ),
    e.add(
      Q0(
        s,
        [Y0 - 0.002, 0.1, it],
        [Y0 - 0.002, 0.1, d0 - 0.002],
        [-1, 0, 0],
        [0, 1, 0],
        { mitreB: 1 },
      ),
      o,
    ),
    e.add(
      Q0(
        s,
        [Z0 + 0.002, 0.1, d0 - 0.002],
        [Z0 + 0.002, 0.1, it],
        [1, 0, 0],
        [0, 1, 0],
        { mitreA: 1 },
      ),
      o,
    ));
  const h = [
      [0, 0],
      [0.008, 0.002],
      [0.01, 0.014],
      [0.016, 0.02],
      [0.024, 0.03],
      [0.036, 0.046],
      [0.048, 0.066],
      [0.056, 0.08],
      [0.062, 0.086],
      [0.064, 0.096],
      [0.064, 0.11],
      [0, 0.11],
    ],
    i = dt;
  (e.add(
    Q0(h, [Y0, i, d0], [Z0, i, d0], [0, 0, -1], [0, 1, 0], {
      mitreA: 1,
      mitreB: 1,
    }),
    o,
  ),
    e.add(
      Q0(h, [Y0, i, it], [Y0, i, d0], [-1, 0, 0], [0, 1, 0], { mitreB: 1 }),
      o,
    ),
    e.add(
      Q0(h, [Z0, i, d0], [Z0, i, it], [1, 0, 0], [0, 1, 0], { mitreA: 1 }),
      o,
    ),
    e.add(R(Y0, i + 0.002, d0, Z0, i + 0.108, it, 0.004, "x"), o));
  {
    const l = new jt(),
      a = 0.42;
    (l.moveTo(-a, 0),
      l.lineTo(-a, 0.035),
      l.bezierCurveTo(-a + 0.05, 0.05, -a + 0.12, 0.03, -0.22, 0.07),
      l.bezierCurveTo(-0.14, 0.1, -0.1, 0.16, -0.04, 0.17),
      l.quadraticCurveTo(0, 0.2, 0.04, 0.17),
      l.bezierCurveTo(0.1, 0.16, 0.14, 0.1, 0.22, 0.07),
      l.bezierCurveTo(a - 0.12, 0.03, a - 0.05, 0.05, a, 0.035),
      l.lineTo(a, 0),
      l.lineTo(-a, 0));
    const r = new Et(l, {
      depth: 0.028,
      bevelEnabled: !0,
      bevelThickness: 0.004,
      bevelSize: 0.004,
      bevelSegments: 2,
      curveSegments: 24,
    });
    (r.translate(1.1, i + 0.108, d0 + 0.012),
      r.computeVertexNormals(),
      e.add(r, o));
    const n = new $0(0.05, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    (n.scale(1, 0.75, 0.25),
      n.rotateX(-Math.PI / 2),
      n.translate(1.1, i + 0.2, d0 + 0.008),
      e.add(n, o));
    for (const Y of [-1, 1]) {
      const P = [];
      for (let q = 0; q <= 24; q++) {
        const Q = (q / 24) * Math.PI * 1.7,
          H = 0.035 * (1 - (q / 24) * 0.6);
        P.push([
          1.1 + Y * (0.13 + Math.cos(Q) * H),
          i + 0.16 + Math.sin(Q) * H * 0.8,
          d0 + 0.006,
        ]);
      }
      e.add(h0(P, 0.0055, 40, 6), o);
    }
    e.add(
      E(
        [
          [0, 0],
          [0.03, 0],
          [0.032, 0.01],
          [0.02, 0.02],
          [0.03, 0.04],
          [0.034, 0.06],
          [0.024, 0.08],
          [0.012, 0.09],
          [0.016, 0.1],
          [0.006, 0.12],
          [0, 0.125],
        ],
        1.1,
        i + 0.29,
        d0 + 0.026,
        { segs: 20 },
      ),
      o,
    );
  }
  (e.add(R(Y0 + 0.01, 0.12, d0, Y0 + 0.05, dt, d0 + 0.03, 0.005, "y"), o),
    e.add(R(Z0 - 0.05, 0.12, d0, Z0 - 0.01, dt, d0 + 0.03, 0.005, "y"), o),
    e.add(R(Y0 + 0.01, dt - 0.07, d0, Z0 - 0.01, dt, d0 + 0.03, 0.005, "x"), o),
    e.add(R(Y0 + 0.01, 0.12, d0, Z0 - 0.01, 0.18, d0 + 0.03, 0.005, "x"), o));
  const z = 0.182,
    D = dt - 0.072,
    C = 0.024,
    V = (l, a) => {
      const r = new u0();
      ((r.name = a > 0 ? "wardrobe:doorL" : "wardrobe:doorR"),
        r.position.set(l, 0, d0));
      const n = new M0(r.name),
        Y = 0.748,
        P = a > 0 ? 0.002 : -Y + 0.001,
        q = a > 0 ? Y - 0.001 : -0.002,
        Q = (i0, l0, s0, t0, p0, y0, F0 = 0.005, B0 = "y") =>
          n.add(R(i0, l0, s0, t0, p0, y0, F0, B0), o);
      (Q(P, z, -C, P + 0.075, D, 0, 0.005, "y"),
        Q(q - 0.075, z, -C, q, D, 0, 0.005, "y"),
        Q(P + 0.07, D - 0.11, -C, q - 0.07, D, 0, 0.005, "x"),
        Q(P + 0.07, z, -C, q - 0.07, z + 0.13, 0, 0.005, "x"),
        Q(P + 0.07, 0.72, -C, q - 0.07, 0.8, 0, 0.005, "x"));
      for (const [i0, l0] of [
        [z + 0.13, 0.72],
        [0.8, D - 0.11],
      ]) {
        (Q(P + 0.07, i0, -C + 0.008, q - 0.07, l0, -0.004, 0.003, "y"),
          Q(
            P + 0.1,
            i0 + 0.03,
            -C - 0.004,
            q - 0.1,
            l0 - 0.03,
            -C + 0.008,
            0.012,
            "y",
          ));
        for (const [s0, t0, p0, y0] of [
          [P + 0.075, i0 + 0.004, q - 0.075, i0 + 0.012],
          [P + 0.075, l0 - 0.012, q - 0.075, l0 - 0.004],
        ])
          Q(s0, t0, -C - 0.002, p0, y0, -C + 0.004, 0.003, "x");
        for (const [s0, t0] of [
          [P + 0.075, P + 0.083],
          [q - 0.083, q - 0.075],
        ])
          Q(s0, i0 + 0.004, -C - 0.002, t0, l0 - 0.004, -C + 0.004, 0.003, "y");
      }
      const H = (a > 0, 0);
      for (const i0 of [0.4, 1.1, 1.8])
        n.add(
          E(
            [
              [0, -0.045],
              [0.0065, -0.045],
              [0.0065, 0.045],
              [0, 0.045],
            ],
            H,
            i0,
            -0.002,
            { segs: 12 },
          ),
          t.brass,
        );
      for (const i0 of [0.4, 1.1, 1.8])
        n.add(
          E(
            [
              [0, 0],
              [0.004, 0],
              [0.003, 0.006],
              [0, 0.007],
            ],
            H,
            i0 + 0.045,
            -0.002,
            { segs: 8 },
          ),
          t.brass,
        );
      const e0 = a > 0 ? Y - 0.045 : -Y + 0.045;
      (n.add(
        R(
          e0 - 0.022,
          1.06,
          -C - 0.004,
          e0 + 0.022,
          1.14,
          -C + 0.001,
          0.004,
          "y",
        ),
        t.brass,
      ),
        n.add(
          E(
            [
              [0, 0],
              [0.008, 0],
              [0.006, 0.008],
              [0, 0.01],
            ],
            e0,
            1.115,
            -C - 0.004,
            { segs: 12, rot: [-Math.PI / 2, 0, 0] },
          ),
          t.brass,
        ));
      const n0 = new at(0.028, 0.004, 8, 24);
      return (
        n0.translate(0, -0.028, 0),
        n0.rotateX(1.25),
        n0.translate(e0, 1.115, -C - 0.012),
        n.add(n0, t.brass),
        n.add(
          R(
            e0 - 0.012,
            0.97,
            -C - 0.004,
            e0 + 0.012,
            1.02,
            -C + 0.001,
            0.003,
            "y",
          ),
          t.brass,
        ),
        n.flush(r),
        w.add(r),
        {
          pivot: r,
          dir: a,
          a: 0,
          v: 0,
          ringPos: [
            l + e0,
            1.115 - 0.028 * Math.cos(1.25),
            d0 - C - 0.012 - 0.028 * Math.sin(1.25),
          ],
        }
      );
    },
    A = V(Y0 + 0.05, 1),
    x = V(Z0 - 0.05, -1),
    k = new u0();
  k.name = "wardrobe:chain";
  const _ = new M0("chain"),
    y = A.ringPos,
    L = x.ringPos,
    W = (y[0] + L[0]) / 2,
    X = y[1],
    F = y[2],
    G = [];
  for (const [l, a, r, n] of [
    [-0.004, 0.003, 0, 0.034],
    [0.006, -0.004, 0.18, 0.04],
  ]) {
    const Y = [];
    for (let P = 0; P < 12; P++) {
      const q = (P / 12) * Math.PI * 2,
        Q = W + l + Math.cos(q) * 0.066,
        H = X + Math.sin(q) * n * (Math.sin(q) < 0 ? 1.3 : 1);
      Y.push(new w0(Q, H + (Q - W) * r, F + a + 0.006 * Math.sin(q * 2)));
    }
    G.push({ c: new Qt(Y, !0, "centripetal"), closed: !0 });
  }
  const m = new w0(W + 0.012, X - 0.2, F - 0.012);
  G.push({
    c: new Qt(
      [
        new w0(W - 0.035, X - 0.04, F),
        new w0(W - 0.03, X - 0.12, F - 0.006),
        new w0(m.x - 0.012, m.y + 0.012, m.z),
        new w0(m.x + 0.012, m.y + 0.012, m.z),
        new w0(W + 0.045, X - 0.1, F - 0.008),
        new w0(W + 0.04, X - 0.04, F),
      ],
      !1,
      "centripetal",
    ),
    closed: !1,
  });
  const S = new w0(),
    u = new Ft(),
    c = new Ft(),
    g = new w0(0, 1, 0);
  let b = 0;
  for (const { c: l, closed: a } of G) {
    const r = Math.max(3, Math.round(l.getLength() / 0.021));
    for (let n = 0; n < (a ? r : r + 1); n++, b++) {
      const Y = n / r,
        P = l.getPointAt(Math.min(Y, 1));
      l.getTangentAt(Math.min(Y, 1), S);
      const q = new at(0.0082, 0.0024, 6, 12);
      (q.scale(1, 1.55, 1),
        u.setFromUnitVectors(g, S),
        c.setFromAxisAngle(S, ((b % 2) * Math.PI) / 2 + 0.35),
        q.applyQuaternion(u),
        q.applyQuaternion(c),
        q.translate(P.x, P.y, P.z),
        _.add(q, t.chainMat));
    }
  }
  const p = new u0();
  ((p.name = "wardrobe:padlock"), p.position.copy(m));
  const v = new M0("padlock"),
    I = new at(0.017, 0.004, 8, 20, Math.PI);
  (I.translate(0, -0.012, 0),
    v.add(I, t.chrome),
    v.add(v0([-0.017, -0.012, 0], [-0.017, -0.026, 0], 0.004, 8), t.chrome),
    v.add(v0([0.017, -0.012, 0], [0.017, -0.026, 0], 0.004, 8), t.chrome));
  {
    const l = new Vt(0.03, 0.03, 0.022, 28, 1, !1, 0, Math.PI);
    (l.rotateX(Math.PI / 2),
      l.rotateZ(Math.PI),
      l.scale(1, 1.05, 1),
      l.translate(0, -0.04, 0),
      v.add(l, t.brass),
      v.add(R(-0.03, -0.04, -0.011, 0.03, -0.022, 0.011, 0.004, "x"), t.brass),
      v.add(
        R(-0.0025, -0.066, -0.0118, 0.0025, -0.052, -0.0105, 0.001),
        t.keyhole,
      ));
  }
  (v.flush(p), k.add(p), _.flush(k), w.add(k), e.flush(w), N.scene.add(w));
  const Z = [A, x],
    j = 0.022,
    T = 7,
    d = { events: [], clock: 0, rattle: 0, rattleAmp: 0.5, lockA: 0, lockV: 0 },
    K = {
      group: w,
      doors: [A.pivot, x.pivot],
      chain: k,
      padlock: p,
      onThump: null,
      knock(l = 1, { interval: a = 0.42, strength: r = 1 } = {}) {
        for (let n = 0; n < l; n++)
          d.events.push({
            at: d.clock + n * a * (0.85 + 0.3 * M.hash(n, 3, 5)),
            s: r * (0.8 + 0.4 * M.hash(n, 8, 1)),
          });
      },
      rattle(l = 1.5, a = 0.5) {
        ((d.rattle = Math.max(d.rattle, l)), (d.rattleAmp = a));
      },
    },
    f = (l) => {
      ((A.v +=
        0.55 * l * (0.9 + 0.2 * M.hash(Math.floor(d.clock * 100), 1, 1))),
        (x.v +=
          0.55 * l * (0.9 + 0.2 * M.hash(Math.floor(d.clock * 100), 2, 1))),
        (d.lockV += 3.5 * l),
        K.onThump && K.onThump(l));
    };
  let U = 0;
  return {
    group: w,
    anim: (l) => {
      d.clock += l;
      for (let Y = d.events.length - 1; Y >= 0; Y--)
        if (d.clock >= d.events[Y].at) {
          const P = d.events[Y];
          (d.events.splice(Y, 1), f(P.s));
        }
      if (d.rattle > 0 && ((d.rattle -= l), (U += l), U > 0.07)) {
        U = 0;
        const Y =
          d.rattleAmp * (0.15 + 0.25 * M.hash(Math.floor(d.clock * 50), 5, 5));
        ((A.v += Y * 0.4), (x.v += Y * 0.35), (d.lockV += Y * 1.5));
      }
      const a = 4,
        r = l / a;
      for (let Y = 0; Y < a; Y++) {
        for (const P of Z)
          ((P.v += (-70 * P.a - T * P.v) * r),
            (P.a += P.v * r),
            P.a > j && ((P.a = j), P.v > 0 && (P.v *= -0.35)),
            P.a < 0 && ((P.a = 0), P.v < 0 && (P.v *= -0.25)));
        ((d.lockV += (-40 * d.lockA - 2.2 * d.lockV) * r),
          (d.lockA += d.lockV * r));
      }
      ((A.pivot.rotation.y = A.a), (x.pivot.rotation.y = -x.a));
      const n = (0.7 * (A.a + x.a)) / 2;
      ((k.position.z = -n * 0.72),
        (k.rotation.x = -n * 0.6),
        (p.rotation.x = d.lockA * 0.12),
        (p.rotation.z = d.lockA * 0.05));
    },
    api: K,
    colliders: [
      { x0: Y0 - 0.01, x1: Z0 + 0.01, z0: d0 - 0.07, z1: 4.8, y0: 0, y1: 2.45 },
    ],
  };
}
