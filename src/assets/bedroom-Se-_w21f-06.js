// assets/bedroom-Se-_w21f 06 — add
// Lines 1168-1878 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
function Be(N, t) {
  const w = new u0();
  w.name = "nightstands";
  const e = new M0("nightstands"),
    o = nt(5),
    M = N.rng(311);
  (te(e, t, W0.north), te(e, t, W0.south));
  const s = W0.north.top,
    h = 0.2,
    i = 1.08,
    z = new u0();
  z.name = "lamp";
  const D = new M0("lamp");
  D.add(
    E(
      [
        [0, 0],
        [0.075, 0],
        [0.078, 0.006],
        [0.072, 0.014],
        [0.06, 0.02],
        [0.05, 0.03],
        [0.04, 0.035],
        [0.036, 0.045],
        [0.05, 0.075],
        [0.058, 0.11],
        [0.054, 0.14],
        [0.04, 0.17],
        [0.022, 0.19],
        [0.015, 0.205],
        [0.018, 0.215],
        [0.012, 0.225],
        [0.011, 0.3],
        [0.016, 0.305],
        [0.016, 0.33],
        [0.012, 0.335],
        [0, 0.335],
      ],
      h,
      s,
      i,
      { segs: 32, tile: 0.5 },
    ),
    t.brass,
  );
  const C = s + 0.27,
    V = s + 0.47,
    A = 0.145,
    x = 0.078;
  for (const B of [-1, 1])
    D.add(
      h0(
        [
          [h, s + 0.33, i + B * 0.012],
          [h, s + 0.36, i + B * 0.06],
          [h, s + 0.44, i + B * 0.04],
          [h, s + 0.48, i],
        ],
        0.0018,
        16,
        5,
      ),
      t.brass,
    );
  D.add(
    E(
      [
        [0, 0],
        [0.01, 0],
        [0.012, 0.01],
        [0.006, 0.02],
        [0.009, 0.028],
        [0, 0.036],
      ],
      h,
      s + 0.475,
      i,
      { segs: 12 },
    ),
    t.brass,
  );
  const k = 22,
    _ = new Vt(1, 1, 1, k * 4, 6, !0);
  {
    const B = _.attributes.position;
    for (let J = 0; J < B.count; J++) {
      const a0 = B.getX(J),
        V0 = B.getY(J) + 0.5,
        U0 = B.getZ(J),
        q0 = Math.atan2(U0, a0),
        ft = A + (x - A) * V0,
        gt = 1 + 0.035 * Math.abs(Math.sin(q0 * k)) - 0.02;
      B.setXYZ(
        J,
        h + Math.cos(q0) * ft * gt,
        C + V0 * (V - C),
        i + Math.sin(q0) * ft * gt,
      );
    }
    _.computeVertexNormals();
    const $ = _.attributes.uv;
    for (let J = 0; J < $.count; J++)
      $.setXY(J, $.getX(J) * 0.8, $.getY(J) * 0.2);
  }
  const y = new r0(_, t.shade);
  ((y.name = "lamp:shade"),
    (y.castShadow = !1),
    (y.receiveShadow = !1),
    z.add(y));
  for (const [B, $] of [
    [C, A * 0.99],
    [V, x * 0.99],
  ]) {
    const J = new at($, 0.0022, 6, 48);
    (st(J, [h, B, i], [Math.PI / 2, 0, 0]), D.add(J, t.brass));
  }
  D.add(
    E(
      [
        [0, 0],
        [0.016, 0],
        [0.017, 0.03],
        [0.012, 0.035],
        [0, 0.035],
      ],
      h,
      s + 0.335,
      i,
      { segs: 16 },
    ),
    t.brass,
  );
  const L = E(
      [
        [0, 0],
        [0.012, 0.004],
        [0.016, 0.02],
        [0.026, 0.045],
        [0.027, 0.06],
        [0.02, 0.075],
        [0, 0.08],
      ],
      h,
      s + 0.365,
      i,
      { segs: 20 },
    ),
    W = new Dt({ color: new pt().setRGB(4, 2.2, 0.8), toneMapped: !1 }),
    X = new r0(L, W);
  ((X.name = "lamp:bulb"),
    z.add(X),
    D.add(
      h0(
        [
          [h - 0.05, s + 0.01, i],
          [h - 0.13, s + 0.006, i + 0.02],
          [0.05, s - 0.01, i + 0.05],
          [0.035, s - 0.1, i + 0.06],
          [0.03, 0.3, i + 0.1],
          [0.028, 0.004, i + 0.2],
          [0.028, 0.004, i + 0.5],
        ],
        0.003,
        40,
        5,
      ),
      t.cord,
    ),
    D.flush(z),
    w.add(z));
  const F = [h, s + 0.41, i],
    G = new Ht(16756848, 7, 9, 1.05, 0.8, 2);
  (G.position.set(...F),
    (G.name = "lampLight"),
    G.target.position.set(0.72, 0.2, 2.3),
    z.add(G.target),
    (G.castShadow = !0),
    G.shadow.mapSize.set(2048, 2048),
    (G.shadow.bias = -0.0012),
    (G.shadow.normalBias = 0.045),
    (G.shadow.camera.near = 0.05),
    (G.shadow.camera.far = 9),
    (G.shadow.radius = 2),
    z.add(G));
  const m = new Ht(16760968, 3.2, 6, 0.7, 1, 2);
  (m.position.set(h, s + 0.44, i),
    (m.name = "lampUp"),
    (m.castShadow = !1),
    m.target.position.set(h + 0.1, 3, i + 0.15),
    z.add(m.target),
    z.add(m));
  const S = new ie(16752736, 0.35, 5, 2);
  (S.position.set(h + 0.06, s + 0.39, i + 0.05),
    (S.name = "lampFill"),
    (S.castShadow = !1),
    z.add(S));
  const u = new u0();
  u.name = "clock";
  const c = 0.15,
    g = 1.35,
    b = Math.atan2(0.45 - c, 2.4 - g);
  (u.position.set(c, s, g), (u.rotation.y = b));
  const p = new M0("clock"),
    v = 0.043,
    I = 0.034,
    Z = 0.058;
  p.add(
    E(
      [
        [0, -I / 2],
        [v - 0.004, -I / 2],
        [v, -I / 2 + 0.004],
        [v, I / 2 - 0.004],
        [v + 0.003, I / 2 - 0.002],
        [v + 0.003, I / 2 + 0.002],
        [v - 0.003, I / 2 + 0.004],
        [v - 0.004, I / 2 + 0.002],
      ],
      0,
      0,
      0,
      { segs: 40, rot: [Math.PI / 2, 0, 0] },
    ).translate(0, Z, 0),
    t.brass,
  );
  for (const B of [-1, 1]) {
    const $ = B * 0.62,
      J = Math.sin($) * (v + 0.012),
      a0 = Z + Math.cos($) * (v + 0.012),
      V0 = E(
        [
          [0, 0.024],
          [0.01, 0.023],
          [0.018, 0.018],
          [0.023, 0.01],
          [0.025, 0.002],
          [0.024, 0],
          [0.02, 0.004],
          [0, 0.006],
        ],
        0,
        0,
        0,
        { segs: 24 },
      );
    (st(V0, [J, a0, -0.004], [0, 0, -$]),
      p.add(V0, t.brass),
      p.add(
        v0(
          [J * 0.8, Z + (a0 - Z) * 0.8, -0.004],
          [J, a0 + 0.002, -0.004],
          0.0022,
          6,
        ),
        t.brass,
      ),
      p.add(
        v0([B * 0.03, Z - v * 0.72, 0], [B * 0.042, 0.002, 0.004], 0.0028, 6),
        t.brass,
      ),
      p.add(J0(B * 0.043, 0.004, 0.004, 0.0055, 10, 8), t.brass));
  }
  (p.add(v0([0, Z + v, -0.004], [0, Z + v + 0.03, -0.004], 0.0016, 6), t.brass),
    p.add(J0(0, Z + v + 0.031, -0.004, 0.005, 10, 8), t.brass));
  {
    const B = new at(0.016, 0.0025, 6, 20, Math.PI);
    (st(B, [0, Z + v + 0.004, -0.006], [0, 0, 0]), p.add(B, t.brass));
  }
  (p.add(
    v0([0.012, Z, -I / 2], [0.012, Z, -I / 2 - 0.012], 0.0025, 6),
    t.brass,
  ),
    p.add(
      R(0.004, Z - 0.01, -I / 2 - 0.018, 0.02, Z + 0.01, -I / 2 - 0.012, 0.002),
      t.brass,
    ));
  const j = new Zt(v - 0.004, 40);
  j.translate(0, Z, I / 2 + 5e-4);
  const T = new r0(j, t.clockFace);
  ((T.name = "clock:dial"), (T.receiveShadow = !0));
  const d = new u0();
  d.position.set(0, Z, I / 2 + 0.0015);
  const K = (B, $) => {
      const J = new ot(),
        a0 = $ / 2;
      return (
        J.setAttribute(
          "position",
          new T0(
            [
              -a0,
              -B * 0.18,
              0,
              a0,
              -B * 0.18,
              0,
              a0 * 0.5,
              B,
              0,
              -a0 * 0.5,
              B,
              0,
              0,
              B * 1.06,
              0,
            ],
            3,
          ),
        ),
        J.setIndex([0, 1, 2, 0, 2, 3, 3, 2, 4]),
        J.computeVertexNormals(),
        new r0(J, t.handMat)
      );
    },
    f = K(0.021, 0.0042),
    U = K(0.031, 0.003);
  ((U.position.z = 6e-4), d.add(f, U));
  const O = (B, $) => {
    ((U.rotation.z = -($ / 60) * Math.PI * 2),
      (f.rotation.z = -(((B % 12) + $ / 60) / 12) * Math.PI * 2));
  };
  O(3, 7);
  const l = new $0(0.2, 32, 8, 0, Math.PI * 2, 0, 0.21);
  (l.rotateX(Math.PI / 2),
    l.translate(0, Z, I / 2 - 0.2 * Math.cos(0.21) + 0.004));
  const a = new r0(l, t.glass);
  ((a.name = "clock:crystal"),
    (a.renderOrder = 2),
    p.flush(u),
    u.add(T, d, a),
    w.add(u));
  const r = 0.43,
    n = 1,
    Y = E(
      [
        [0, 0],
        [0.03, 0],
        [0.032, 0.004],
        [0.034, 0.1],
        [0.036, 0.112],
        [0.033, 0.112],
        [0.031, 0.1],
        [0.029, 0.008],
        [0, 0.007],
      ],
      r,
      s,
      n,
      { segs: 32 },
    ),
    P = new r0(Y, t.glass);
  ((P.name = "glass"), (P.renderOrder = 3));
  const q = E(
      [
        [0, 0.008],
        [0.0288, 0.008],
        [0.0302, 0.068],
        [0.0309, 0.071],
        [0, 0.0705],
      ],
      r,
      s,
      n,
      { segs: 32 },
    ),
    Q = new r0(q, t.water);
  ((Q.name = "water"), (Q.renderOrder = 2), w.add(P, Q));
  const H = new u0();
  H.name = "flashlight";
  const e0 = new M0("flashlight"),
    n0 = 0.27,
    i0 = [
      [0, 0],
      [0.012, 0],
      [0.0175, 0.003],
      [0.0182, 0.008],
    ];
  for (let B = 0; B < 7; B++)
    i0.push([0.0188, 0.01 + B * 0.004], [0.0178, 0.012 + B * 0.004]);
  (i0.push(
    [0.0182, 0.04],
    [0.0172, 0.042],
    [0.0172, 0.17],
    [0.0182, 0.172],
    [0.0182, 0.178],
    [0.0172, 0.18],
    [0.0172, 0.2],
    [0.02, 0.21],
    [0.026, 0.225],
    [0.0285, 0.24],
    [0.0292, 0.245],
    [0.0292, 0.262],
    [0.0282, 0.268],
    [0.026, 0.27],
    [0.024, 0.2695],
  ),
    e0.add(E(i0, 0, 0, 0, { segs: 28, tile: 0.3 }), t.brass),
    e0.add(R(-0.004, 0.165, 0.016, 0.004, 0.19, 0.0215, 0.0015), t.fibre),
    e0.add(R(-0.003, 0.172, 0.0205, 0.003, 0.182, 0.0245, 0.001), t.brass));
  {
    const B = new at(0.008, 0.0015, 6, 16);
    (B.translate(0, -0.006, 0), e0.add(B, t.brass));
  }
  const l0 = E(
    [
      [0.004, 0.235],
      [0.012, 0.24],
      [0.02, 0.25],
      [0.0245, 0.266],
    ],
    0,
    0,
    0,
    { segs: 24 },
  );
  e0.add(l0, t.chrome);
  const s0 = new Zt(0.0245, 24);
  (s0.rotateX(-Math.PI / 2), s0.translate(0, 0.2675, 0), e0.flush(H));
  const t0 = new r0(s0, t.lens);
  ((t0.name = "flashlight:lens"), H.add(t0));
  const p0 = Math.atan2(0.12, 0.25),
    y0 = Math.atan2(0.0292 - 0.0188, n0 * 0.9),
    F0 = [0.235, s + 0.0188, 1.19];
  (H.position.set(...F0),
    H.rotation.set(0, 0, 0),
    H.quaternion.setFromEuler(new de(0, -p0, -Math.PI / 2 + y0, "YXZ")),
    w.add(H),
    H.updateMatrixWorld(!0));
  const B0 = new w0(0, n0 * 0.55, 0).applyMatrix4(H.matrixWorld),
    H0 = [+B0.x.toFixed(3), +B0.y.toFixed(3), +B0.z.toFixed(3)],
    o0 = W0.south.top,
    m0 = 0.17,
    b0 = 3.7;
  e.add(
    E(
      [
        [0, 0],
        [0.036, 0],
        [0.042, 0.006],
        [0.05, 0.04],
        [0.052, 0.07],
        [0.045, 0.1],
        [0.028, 0.13],
        [0.022, 0.15],
        [0.026, 0.16],
        [0.03, 0.166],
        [0.027, 0.168],
        [0.02, 0.16],
        [0.019, 0.14],
        [0, 0.135],
      ],
      m0,
      o0,
      b0,
      { segs: 32, tile: 0.3 },
    ),
    t.vase,
  );
  for (let B = 0; B < 6; B++) {
    const $ = (B / 6) * Math.PI * 2 + M() * 0.6,
      J = 0.12 + M() * 0.12,
      a0 = 0.05 + M() * 0.07,
      V0 = 0.03 + M() * 0.1,
      U0 = Math.cos($),
      q0 = Math.sin($),
      ft = [
        [m0 + U0 * 0.004, o0 + 0.12, b0 + q0 * 0.004],
        [m0 + U0 * 0.012, o0 + 0.16 + J * 0.5, b0 + q0 * 0.012],
        [m0 + U0 * a0 * 0.6, o0 + 0.16 + J, b0 + q0 * a0 * 0.6],
        [m0 + U0 * a0, o0 + 0.16 + J - V0 * 0.4, b0 + q0 * a0],
        [m0 + U0 * a0 * 1.1, o0 + 0.16 + J - V0, b0 + q0 * a0 * 1.1],
      ];
    e.add(h0(ft, 0.0022, 24, 5), t.stem);
    const gt = ft[4],
      At = new he(0.016 + M() * 0.006, 2),
      Mt = At.attributes.position;
    for (let N0 = 0; N0 < Mt.count; N0++) {
      const xt = Mt.getX(N0),
        vt = Mt.getY(N0),
        qt = Mt.getZ(N0),
        Wt = 1 + 0.35 * o.n2(xt * 120 + B, qt * 120 + vt * 60);
      Mt.setXYZ(N0, xt * Wt, vt * Wt * 1.25 - 0.004, qt * Wt);
    }
    (At.computeVertexNormals(),
      st(At, [gt[0], gt[1] - 0.01, gt[2]], [0.4 * q0, $, 0.5 * U0]),
      e.add(At, t.petal));
    const Nt = ft[2],
      Xt = new ut(0.035, 0.016, 6, 2),
      yt = Xt.attributes.position;
    for (let N0 = 0; N0 < yt.count; N0++) {
      const xt = yt.getX(N0),
        vt = yt.getY(N0);
      (yt.setZ(
        N0,
        0.012 * (xt / 0.035) ** 2 * 4 + 0.006 * (vt / 0.016) ** 2 * 4,
      ),
        yt.setY(N0, vt * (1 - (Math.abs(xt) / 0.035) * 0.8)));
    }
    (Xt.computeVertexNormals(),
      st(
        Xt,
        [Nt[0] + U0 * 0.02, Nt[1] - 0.02, Nt[2] + q0 * 0.02],
        [0.9, $ + 1.2, 0.5],
      ),
      e.add(Xt, t.leaf));
  }
  for (let B = 0; B < 9; B++) {
    const $ = new Zt(0.009 + M() * 0.006, 7),
      J = $.attributes.position;
    for (let a0 = 0; a0 < J.count; a0++)
      J.setZ(
        a0,
        0.004 * (J.getX(a0) ** 2 + J.getY(a0) ** 2) * 900 * (M() * 0.5 + 0.5),
      );
    ($.computeVertexNormals(),
      $.rotateX(-Math.PI / 2 + (M() - 0.5) * 0.3),
      $.translate(m0 + 0.05 + M() * 0.2, o0 + 0.0015, b0 - 0.12 + M() * 0.2),
      e.add($, t.petal, { cast: !1 }));
  }
  const A0 = mt([0.33, o0, 3.5], [0, 0.35, 0]),
    G0 = [
      R(-0.085, 0, -0.11, 0.085, 0.014, 0.11, 0.003, "z"),
      R(-0.07, 0.014, -0.095, 0.07, 0.017, 0.095, 0.001, "z"),
    ];
  for (const B of G0) B.applyMatrix4(A0);
  (e.add(G0[0], t.ebony), e.add(G0[1], t.card));
  const X0 = R(-0.012, 0.017, -0.06, 0.012, 0.02, 0.07, 0.001, "z");
  (X0.applyMatrix4(A0), e.add(X0, t.card));
  const j0 = [];
  for (let B = 0; B <= 34; B++) {
    const $ = (B / 34) * Math.PI * 2,
      J = Math.cos($) * 0.055 * (1 + 0.15 * Math.sin($ * 3)),
      a0 = Math.sin($) * 0.07,
      V0 = new w0(J, 0.024, a0).applyMatrix4(A0);
    j0.push(V0);
  }
  j0.forEach((B, $) => {
    $ < 34 && e.add(J0(B.x, B.y, B.z, 0.0042, 8, 6), t.bead);
  });
  const E0 = j0[0],
    _0 = [];
  for (let B = 1; B <= 7; B++) {
    const $ = B / 7,
      J = E0.x + (W0.south.x1 + 0.008 - E0.x) * Math.min(1, $ * 1.4),
      a0 = $ < 0.7 ? o0 + 0.02 - $ * 0.02 : o0 - ($ - 0.7) * 0.2;
    _0.push([J, a0 + 0.004, E0.z + $ * 0.02]);
  }
  _0.forEach((B) => e.add(J0(B[0], B[1], B[2], 0.0042, 8, 6), t.bead));
  {
    const B = _0[6];
    (e.add(
      R(
        B[0] - 0.002,
        B[1] - 0.05,
        B[2] - 0.003,
        B[0] + 0.002,
        B[1] - 0.006,
        B[2] + 0.003,
        0.001,
      ),
      t.brass,
    ),
      e.add(
        R(
          B[0] - 0.002,
          B[1] - 0.025,
          B[2] - 0.016,
          B[0] + 0.002,
          B[1] - 0.019,
          B[2] + 0.016,
          0.001,
        ),
        t.brass,
      ));
  }
  const rt = (B, $, J) => {
    const a0 = E(
        [
          [0, 0],
          [0.018, 0],
          [0.019, 0.004],
          [0.019, 0.052],
          [0.014, 0.06],
          [0.011, 0.062],
          [0.011, 0.068],
          [0, 0.068],
        ],
        0,
        0,
        0,
        { segs: 20 },
      ),
      V0 = E(
        [
          [0, 0.062],
          [0.0125, 0.062],
          [0.013, 0.078],
          [0.011, 0.08],
          [0, 0.08],
        ],
        0,
        0,
        0,
        { segs: 20 },
      ),
      U0 = J ? mt([B, o0 + 0.019, $], [0, J, Math.PI / 2]) : mt([B, o0, $]);
    (a0.applyMatrix4(U0),
      V0.applyMatrix4(U0),
      e.add(a0, t.amber, { cast: !1 }),
      e.add(V0, t.capMat));
  };
  (rt(0.43, 3.7, 0), rt(0.39, 3.8, 2.3));
  for (let B = 0; B < 6; B++) {
    const $ = new Ut(0.0035, 0.008, 3, 8);
    ($.rotateZ(Math.PI / 2),
      $.rotateY(M() * 3),
      $.translate(0.44 + M() * 0.05, o0 + 0.0035, 3.82 - M() * 0.07),
      e.add($, t.pill, { cast: !1 }));
  }
  (e.flush(w), N.scene.add(w));
  const f0 = {
      on: !0,
      flick: 0.08,
      blowT: -1,
      level: 1,
      base: G.intensity,
      fillBase: S.intensity,
      upBase: m.intensity,
    },
    lt = t.shade.emissiveIntensity,
    It = (B) => {
      ((G.intensity = f0.base * B),
        (S.intensity = f0.fillBase * B),
        (m.intensity = f0.upBase * B),
        (t.shade.emissiveIntensity = lt * B),
        W.color.setRGB(4 * B + 0.06, 2.2 * B + 0.05, 0.8 * B + 0.04));
    };
  return {
    group: w,
    anim: (B, $) => {
      let J = 0;
      if (f0.blowT >= 0)
        ((f0.blowT += B),
          (J =
            f0.blowT < 0.06
              ? 2.6
              : f0.blowT < 0.12
                ? 0.3
                : f0.blowT < 0.16
                  ? 1.4
                  : 0),
          f0.blowT > 0.2 && ((f0.blowT = -1), (f0.on = !1)));
      else if (f0.on) {
        const a0 = f0.flick;
        ((J =
          1 +
          a0 *
            (0.55 * Math.sin($ * 13.1) * Math.sin($ * 2.3 + 1) +
              0.45 * o.n2($ * 7, 1.3))),
          a0 > 0.2 &&
            o.n2($ * 3.1, 9.2) > 0.55 - a0 * 0.3 &&
            (J *= 0.15 + 0.4 * (0.5 + 0.5 * Math.sin($ * 61))));
      }
      ((f0.level += (J - f0.level) * Math.min(1, B * 30)),
        It(Math.max(0, f0.level)));
    },
    lamp: {
      group: z,
      light: G,
      fill: S,
      up: m,
      bulb: X,
      setOn(B) {
        ((f0.on = !!B), (f0.blowT = -1), B || (f0.level = 0));
      },
      flicker(B = 0.08) {
        f0.flick = B;
      },
      blow() {
        f0.blowT = 0;
      },
      get on() {
        return f0.on;
      },
    },
    light: G,
    fill: S,
    up: m,
    clock: { group: u, setTime: O, hands: d },
    flashlight: H,
    flashlightSpot: H0,
    colliders: [
      {
        x0: W0.north.x0,
        x1: W0.north.x1,
        z0: W0.north.z0,
        z1: W0.north.z1,
        y0: 0,
        y1: 0.66,
      },
      {
        x0: W0.south.x0,
        x1: W0.south.x1,
        z0: W0.south.z0,
        z1: W0.south.z1,
        y0: 0,
        y1: 0.66,
      },
    ],
  };
}
