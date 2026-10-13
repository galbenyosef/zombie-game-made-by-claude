// assets__index-TPd_HXBJ 17 — math
// Lines 4956-6167 of readable/assets__index-TPd_HXBJ.pretty.js (statement-aligned).
function Da(t, e = {}) {
  const o = t.game || t;
  t.scene || o.scene;
  const n = t.renderer || o.renderer,
    a =
      e.rng ||
      (
        (u) => () =>
          (u = (u * 16807) % 2147483647) / 2147483647
      )(5303),
    l = performance.now(),
    r = new Ge();
  r.name = "train";
  const p = (u, S) => {
      try {
        const T = t.mats?.get?.(u);
        return (T && T[S]) || null;
      } catch {
        return null;
      }
    },
    f = new Ue(new Uint8Array([128, 128, 255, 255]), 1, 1);
  f.needsUpdate = !0;
  const c = new Ue(new Uint8Array([120, 120, 120, 255]), 1, 1);
  ((c.needsUpdate = !0), (c.colorSpace = io));
  const d = {
    atlas: Nn(),
    moq: p("train_moquette", "map") || c,
    moqN: p("train_moquette", "normalMap") || f,
    floor: p("train_floor", "map") || c,
    floorN: p("train_floor", "normalMap") || f,
    floorO: p("train_floor", "aoMap") || c,
  };
  for (const u of ["moq", "moqN", "floor", "floorN", "floorO"])
    ((d[u].wrapS = d[u].wrapT = xe), d[u].repeat?.set?.(1, 1));
  const i = [
      ["moq", "tMoq", "train_moquette", "map"],
      ["moqN", "tMoqN", "train_moquette", "normalMap"],
      ["floor", "tFloor", "train_floor", "map"],
      ["floorN", "tFloorN", "train_floor", "normalMap"],
      ["floorO", "tFloorO", "train_floor", "aoMap"],
    ].filter(([u]) => d[u] === c || d[u] === f),
    s = () => {
      for (let u = i.length - 1; u >= 0; u--) {
        const [S, T, A, E] = i[u],
          I = p(A, E);
        if (I) {
          ((I.wrapS = I.wrapT = xe), (d[S] = I));
          for (const N of q) N.userData.U?.[T] && (N.userData.U[T].value = I);
          i.splice(u, 1);
        }
      }
    },
    m = performance.now(),
    v = Je("mid", "hi", a),
    y = Je("cab", "lo", a),
    w = Ta(a),
    M = (u) => (u.nv > 0 ? u.build() : null),
    k = {
      mid: {
        ext: v.ext.build(),
        int: v.int.merge(w.mid).build(),
        gIn: v.gIn.merge(w.midGlass).build(),
        gOut: v.gOut.build(),
        dec: M(w.midDec),
      },
      cab: {
        ext: y.ext.build(),
        int: y.int.build(),
        gIn: y.gIn.build(),
        gOut: y.gOut.build(),
      },
      dmg: { int: M(w.dmg), dec: M(w.dmgDec) },
      car1: { int: M(w.cab1) },
    },
    P = wa().build(),
    C = Math.round(performance.now() - m),
    F = {
      min: new W(-8.75, h.FL, -1.3),
      max: new W(h.END, h.CEIL, h.IW),
      eye: new W(0, 2.65, 0),
    },
    D = {
      min: new W(-8.75, h.FL, -1.3),
      max: new W(h.cabX, h.CEIL, h.IW),
      eye: new W(0, 2.65, 0),
    },
    z = [],
    q = [],
    Y = (u, S, T, A, E = !0) => {
      const I = new Ft(u, S);
      return (
        (I.name = T),
        (I.castShadow = E),
        (I.receiveShadow = !0),
        (I.onBeforeShadow = () => {}),
        A.add(I),
        I
      );
    };
  for (let u = 0; u < Zt; u++) {
    const S = u === 1 ? "mid" : "cab",
      T = u === 2 ? -1 : 1,
      A = fe(u * 17.3 + 3.1);
    ((A.uCab.value = S === "cab" ? 1 : 0),
      A.uCar.value.set(u === 2 ? 1 : 0.8, u === 2 ? 1 : 0, u * 17.3 + 3.1, 0));
    const E = { ...d, box: S === "mid" ? F : D },
      I = {
        ext: st("ext", A, E),
        int: st("int", A, E),
        gIn: st("glassIn", A, E),
        gOut: st("glassOut", A, E),
        dec: st("decal", A, E),
      };
    ((I.gIn.opacity = 1), (I.gOut.opacity = 1), q.push(...Object.values(I)));
    const N = En(A),
      B = new Ge();
    ((B.name = "train_car" + (u + 1)), r.add(B));
    const $ = k[S],
      G = {
        ext: Y($.ext, I.ext, "train_car" + (u + 1) + "_body", B),
        int: Y($.int, I.int, "train_car" + (u + 1) + "_inside", B),
        gOut: Y($.gOut, I.gOut, "train_car" + (u + 1) + "_glass_out", B, !1),
        gIn: Y($.gIn, I.gIn, "train_car" + (u + 1) + "_glass_in", B, !1),
      };
    for (const Z of ["ext", "int"])
      ((G[Z].customDepthMaterial = N.depth),
        (G[Z].customDistanceMaterial = N.distance));
    ((G.gOut.renderOrder = 1),
      (G.gIn.renderOrder = 1),
      S === "mid" &&
        k.mid.dec &&
        ((G.dec = Y(k.mid.dec, I.dec, "train_car2_smears", B, !1)),
        (G.dec.renderOrder = 2)),
      u === 0 &&
        k.car1.int &&
        (G.props = Y(k.car1.int, I.int, "train_car1_things", B)),
      u === 2 &&
        (k.dmg.int && (G.dmg = Y(k.dmg.int, I.int, "train_car3_damage", B)),
        k.dmg.dec &&
          ((G.dec = Y(k.dmg.dec, I.dec, "train_car3_smears", B, !1)),
          (G.dec.renderOrder = 2))),
      z.push({
        i: u,
        type: S,
        dir: T,
        group: B,
        U: A,
        mats: I,
        meshes: G,
        zones: [0, 1, 2].map(() => ({
          lvl: 1,
          on: !0,
          t: 0.5 + a() * 2,
          base: 1,
        })),
        flick: 0,
        roll: 0,
        lat: 0,
        ph: a() * 10,
        ph2: a() * 10,
        light: 1,
        matrix: new i0(),
      }));
  }
  ((z[2].zones[0].base = 0),
    (z[2].zones[1].base = 0.38),
    (z[2].zones[2].base = 0.6),
    (z[2].flick = 0.4));
  const Z0 = fe(0),
    m0 = st("ext", Z0, { ...d }, { wheels: !0 });
  q.push(m0);
  const Q = new on(P, m0, Zt * 2);
  ((Q.name = "train_bogies"),
    (Q.castShadow = !0),
    (Q.receiveShadow = !0),
    (Q.frustumCulled = !1),
    Q.instanceMatrix.setUsage(ie),
    (Q.onBeforeShadow = () => {}),
    r.add(Q));
  const O0 = [0, 1].map((u) => ko(u)),
    X0 = st("ext", fe(5), { ...d });
  q.push(X0);
  for (const u of O0)
    ((u.mesh = new Ft(u.geo, X0)),
      (u.mesh.name = "train_gangway" + (u.k + 1)),
      (u.mesh.frustumCulled = !1),
      (u.mesh.castShadow = !0),
      (u.mesh.receiveShadow = !0),
      (u.mesh.onBeforeShadow = () => {}),
      r.add(u.mesh));
  const u0 = new nn(16773596, 0, 60, 0.42, 0.55, 2);
  ((u0.name = "train_headlight"),
    (u0.castShadow = !1),
    (u0.userData.noShadowBudget = !0),
    r.add(u0, u0.target));
  const Tt = ao.map((u, S) => {
      const T = new Ve(eo, 0, no, 2);
      return (
        (T.name = "train_light_" + S),
        (T.castShadow = !1),
        (T.userData.noShadowBudget = !0),
        r.add(T),
        { l: T, x: u, k: 0 }
      );
    }),
    Rt = (u) =>
      new $e({
        vertexShader: Pa,
        fragmentShader: Ia,
        transparent: !0,
        depthWrite: !1,
        depthTest: !0,
        blending: Ze,
        fog: !1,
        toneMapped: !1,
        uniforms: { uHead: u.uHead, uTail: u.uTail },
      });
  for (const u of [z[0], z[2]]) {
    const S = new Ft(Na(), Rt(u.U));
    ((S.name = "train_flares" + (u.i + 1)),
      (S.frustumCulled = !1),
      (S.renderOrder = 22),
      u.group.add(S),
      (u.flares = S));
  }
  const ye = new $e({
      vertexShader: za,
      fragmentShader: Ea,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      side: an,
      blending: Ze,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uTime: it().uTime,
        uK: { value: 0 },
        uColor: { value: new qe(1, 0.9, 0.75) },
      },
    }),
    Jt = new ln(1, 1, 40, 1, !0);
  (Jt.translate(0, -0.5, 0), Jt.rotateZ(Math.PI / 2));
  const tt = new Ft(Jt, ye);
  ((tt.name = "train_beam"),
    (tt.frustumCulled = !1),
    (tt.renderOrder = 21),
    tt.position.set(h.HL + 0.08, 1.62, 0),
    tt.scale.set(32, 32 * Math.tan(0.3), 32 * Math.tan(0.36)),
    z[0].group.add(tt));
  const bo = z[1].group,
    et = (u, S, T, A, E = 0) => {
      const I = new fn();
      return (
        (I.name = "train_spot_" + u),
        I.position.set(S, T, A),
        (I.rotation.y = E),
        bo.add(I),
        I
      );
    },
    yo = 0.83 - 0.015,
    P0 = {
      sara: et("sara", 0.44, h.FL + 1.62, -0.98, 0),
      akane: et("akane", 0.42, h.FL, 0.93, Math.PI),
      akanePole: et("akanePole", yo, h.FL + 1.45, h.railZ),
      akaneSeat: et(
        "akaneSeat",
        0.83 + 3.5 * ((5.17 - 0.83) / 8),
        h.FL + 0.45,
        h.seatZ,
        Math.PI,
      ),
      gangway: et("gangway", -8.75 - 0.04, 2.4, 0, Math.PI / 2),
      gangwayDead: et("gangwayDead", -8.75 - 0.48, h.FL, 0, Math.PI / 2),
      gangwayF: et("gangwayF", h.END + 0.04, 2.4, 0, -Math.PI / 2),
    },
    vo = { root: P0.akane, pose: "stand", hands: { R: P0.akanePole, L: null } },
    f0 = { p: null, s: null, n: 0, len: 0 },
    ve = (u) => {
      const S = u.length;
      ((f0.p = new Float64Array(S * 3)),
        (f0.s = new Float64Array(S)),
        (f0.n = S));
      let T = 0;
      for (let A = 0; A < S; A++) {
        const E = u[A];
        ((f0.p[A * 3] = E[0]),
          (f0.p[A * 3 + 1] = E[1]),
          (f0.p[A * 3 + 2] = E[2]),
          A > 0 &&
            (T += Math.hypot(
              E[0] - u[A - 1][0],
              E[1] - u[A - 1][1],
              E[2] - u[A - 1][2],
            )),
          (f0.s[A] = T));
      }
      ((f0.len = T), (L.seg = 0));
    },
    Lt = (u, S) => {
      const T = f0.n;
      if (T < 2) return S.set(u, 0, 0);
      let A;
      if (u <= 0) A = 0;
      else if (u >= f0.len) A = T - 2;
      else {
        for (A = k0(L.seg | 0, 0, T - 2); A < T - 2 && f0.s[A + 1] < u;) A++;
        for (; A > 0 && f0.s[A] > u;) A--;
        L.seg = A;
      }
      const E = f0.s[A + 1] - f0.s[A] || 1,
        I = (u - f0.s[A]) / E,
        N = A * 3,
        B = N + 3,
        $ = f0.p;
      return S.set(
        $[N] + ($[B] - $[N]) * I,
        $[N + 1] + ($[B + 1] - $[N + 1]) * I,
        $[N + 2] + ($[B + 2] - $[N + 2]) * I,
      );
    },
    we = new W(),
    ke = new W(),
    Yt = (u, S) => (
      Lt(u + 1, we),
      Lt(u - 1, ke),
      S.subVectors(we, ke).normalize()
    ),
    Xt = new W(),
    te = new W(),
    wo = (u) => (Yt(u + 3, Xt), Yt(u - 3, te), (te.z * Xt.x - te.x * Xt.z) / 6),
    L = {
      s: 0,
      seg: 0,
      t: 0,
      speed: 0,
      lastS: null,
      accel: 0,
      wheel: 0,
      power: 1,
      powerGoal: 1,
      door: { left: Se("left"), right: Se("right") },
      lastSide: "left",
      stopped: !0,
      stopT: 0,
      curve: 0,
      station: [2, 3],
      lamps: new Kt(),
      poolCar: 1,
      poolNext: -1,
      poolK: 0,
      flickSnd: 0,
      knock: 0,
      knockV: 0,
      knockF: 0,
      knockVF: 0,
      gang: {
        rear: { k: 0, goal: 0, rate: 1 },
        front: { k: 0, goal: 0, rate: 1 },
      },
    };
  function Se(u) {
    return {
      side: u,
      k: 0,
      from: 0,
      to: 0,
      t: 0,
      T: 1,
      mode: "idle",
      hold: 0,
      lamp: 0,
    };
  }
  const ee = new W(),
    oe = new W(),
    I0 = new W(),
    K0 = new W(),
    Pt = new W(),
    ne = new W(),
    ae = new W(),
    dt = new W(),
    Me = new W(),
    Ae = new W(),
    le = new i0(),
    Te = new i0(),
    re = () => {
      for (const u of z) {
        const S = L.s - H0 / 2 - H0 * u.i;
        (Lt(S + h.bogieX, ee),
          Lt(S - h.bogieX, oe),
          I0.subVectors(ee, oe).normalize(),
          K0.set(0, 1, 0).addScaledVector(I0, -I0.y).normalize(),
          Pt.crossVectors(I0, K0).normalize());
        const T = u.roll,
          A = Math.cos(T),
          E = Math.sin(T);
        (ne.copy(K0).multiplyScalar(A).addScaledVector(Pt, E),
          ae.copy(Pt).multiplyScalar(A).addScaledVector(K0, -E),
          dt
            .addVectors(ee, oe)
            .multiplyScalar(0.5)
            .addScaledVector(K0, 1)
            .addScaledVector(ne, -1)
            .addScaledVector(ae, u.lat),
          Me.copy(I0).multiplyScalar(u.dir),
          Ae.copy(ae).multiplyScalar(u.dir),
          le.makeBasis(Me, ne, Ae).setPosition(dt),
          u.matrix.copy(le),
          le.decompose(u.group.position, u.group.quaternion, u.group.scale));
      }
      for (let u = 0; u < Zt * 2; u++) {
        const S =
          L.s -
          H0 / 2 -
          H0 * Math.floor(u / 2) +
          (u % 2 === 0 ? h.bogieX : -6.25);
        (Lt(S, dt),
          Yt(S, I0),
          K0.set(0, 1, 0).addScaledVector(I0, -I0.y).normalize(),
          Pt.crossVectors(I0, K0).normalize(),
          Te.makeBasis(I0, K0, Pt).setPosition(dt),
          Q.setMatrixAt(u, Te));
      }
      ((Q.instanceMatrix.needsUpdate = !0), r.updateMatrixWorld(!0));
      for (const u of O0) So(u);
    };
  function ko(u) {
    const { sec: S, folds: T, depth: A } = ka(),
      E = S.length,
      I = S.map((H, a0) => {
        const A0 = S[(a0 - 1 + E) % E],
          j = S[(a0 + 1) % E],
          r0 = j[0] - A0[0],
          l0 = j[1] - A0[1],
          t0 = Math.hypot(r0, l0) || 1;
        return [l0 / t0, -r0 / t0];
      }),
      N = T + 1,
      B = E + 1,
      $ = _({ col: "#17181a", rough: 0.8, kind: O.RUBBER }),
      G = [],
      Z = [],
      o0 = [],
      W0 = [],
      w0 = [],
      Et = 0.4 / T,
      ht = (H, a0) => {
        const A0 = Z.length / 3;
        if (!a0) {
          for (let j = 0; j < T; j++) {
            const r0 = j % 2 === 1 ? A : 0,
              l0 = (j + 1) % 2 === 1 ? A : 0,
              t0 = Math.atan2(l0 - r0, Et),
              at = Math.sin(t0),
              z0 = Math.cos(t0),
              Go = Z.length / 3;
            for (const [yt, lt] of [
              [j, r0],
              [j + 1, l0],
            ])
              for (let G0 = 0; G0 < B; G0++) {
                const De = S[G0 % E],
                  $t = I[G0 % E];
                (G.push([
                  De[0] + $t[0] * (lt - H),
                  De[1] + $t[1] * (lt - H),
                  yt / T,
                ]),
                  Z.push(0, 0, 0),
                  o0.push(at, $t[1] * z0, $t[0] * z0),
                  W0.push(G0 / E, yt / T));
              }
            for (let yt = 0; yt < E; yt++) {
              const lt = Go + yt,
                G0 = lt + B;
              w0.push(lt, lt + 1, G0, lt + 1, G0 + 1, G0);
            }
          }
          return;
        }
        for (let j = 0; j < N; j++) {
          const r0 = j / T,
            l0 = (j % 2 === 1 ? A : 0) - H;
          for (let t0 = 0; t0 < B; t0++) {
            const at = S[t0 % E],
              z0 = I[t0 % E];
            (G.push([at[0] + z0[0] * l0, at[1] + z0[1] * l0, r0]),
              Z.push(0, 0, 0),
              o0.push(0, -z0[1], -z0[0]),
              W0.push(t0 / E, r0));
          }
        }
        for (let j = 0; j < T; j++)
          for (let r0 = 0; r0 < E; r0++) {
            const l0 = A0 + j * B + r0,
              t0 = l0 + B;
            w0.push(l0, t0, l0 + 1, l0 + 1, t0, t0 + 1);
          }
      };
    (ht(0, !1),
      ht(0.04, !0),
      ((H, a0, A0) => {
        const j = Z.length / 3;
        for (const [r0, l0] of [
          [H, 0],
          [a0, 0],
          [a0, 1],
          [H, 1],
        ])
          (G.push([r0, A0, l0]),
            Z.push(0, 0, 0),
            o0.push(0, 1, 0),
            W0.push(r0, l0));
        w0.push(j, j + 1, j + 2, j, j + 2, j + 3);
      })(0.5, -0.5, h.FL + 0.012));
    const Vt = Z.length / 3,
      Nt = [
        [-0.07, 0.69],
        [0.07, 0.69],
        [0.07, 0.83],
        [-0.07, 0.83],
      ];
    for (let H = 0; H < 4; H++) {
      const a0 = Nt[H],
        A0 = Nt[(H + 1) % 4],
        j = (a0[0] + A0[0]) / 2,
        r0 = (a0[1] + A0[1]) / 2 - 0.76,
        l0 = Math.hypot(j, r0) || 1;
      for (const [at, z0] of [
        [a0, 0],
        [A0, 0],
        [A0, 1],
        [a0, 1],
      ])
        (G.push([at[0], at[1], z0]),
          Z.push(0, 0, 0),
          o0.push(0, r0 / l0, j / l0),
          W0.push(0, z0));
      const t0 = Vt + H * 4;
      w0.push(t0, t0 + 1, t0 + 2, t0, t0 + 2, t0 + 3);
    }
    const b0 = new q0(),
      mt = Z.length / 3;
    (b0.setAttribute("position", new S0(new Float32Array(Z), 3)),
      b0.setAttribute("normal", new S0(new Float32Array(o0), 3)),
      b0.setAttribute("uv", new S0(new Float32Array(W0), 2)));
    const gt = new Float32Array(mt * 3),
      nt = new Float32Array(mt * 4),
      Ct = new Float32Array(mt),
      bt = T * 2 * B + N * B;
    for (let H = 0; H < mt; H++) {
      const a0 =
        H < bt
          ? $
          : H < bt + 4
            ? _({ col: "#7c7c78", rough: 0.45, metal: 1, kind: O.PLAIN })
            : _({ col: "#232527", rough: 0.6, metal: 0.4, kind: O.UNDER });
      ((gt[H * 3] = a0.col[0]),
        (gt[H * 3 + 1] = a0.col[1]),
        (gt[H * 3 + 2] = a0.col[2]),
        (nt[H * 4] = a0.rough),
        (nt[H * 4 + 1] = a0.metal),
        (nt[H * 4 + 2] = a0.kind),
        (nt[H * 4 + 3] = 0));
    }
    return (
      b0.setAttribute("color", new S0(gt, 3)),
      b0.setAttribute("aSurf", new S0(nt, 4)),
      b0.setAttribute("aAnim", new S0(Ct, 1)),
      b0.setIndex(w0),
      b0.attributes.position.setUsage(ie),
      b0.attributes.normal.setUsage(ie),
      { k: u, geo: b0, rest: G, nrm0: Float32Array.from(o0), A: u, B: u + 1 }
    );
  }
  function So(u) {
    const S = z[u.A],
      T = z[u.B],
      A = -8.8 * S.dir,
      E = h.HL * T.dir,
      I = u.geo.attributes.position.array,
      N = u.geo.attributes.normal.array,
      B = u.rest,
      $ = u.nrm0,
      G = S.matrix.elements,
      Z = T.matrix.elements;
    for (let o0 = 0; o0 < B.length; o0++) {
      const [W0, w0, Et] = B[o0],
        ht = W0 * S.dir,
        xt = W0 * T.dir,
        Vt = G[0] * A + G[4] * w0 + G[8] * ht + G[12],
        Nt = G[1] * A + G[5] * w0 + G[9] * ht + G[13],
        b0 = G[2] * A + G[6] * w0 + G[10] * ht + G[14],
        mt = Z[0] * E + Z[4] * w0 + Z[8] * xt + Z[12],
        gt = Z[1] * E + Z[5] * w0 + Z[9] * xt + Z[13],
        nt = Z[2] * E + Z[6] * w0 + Z[10] * xt + Z[14];
      ((I[o0 * 3] = Vt + (mt - Vt) * Et),
        (I[o0 * 3 + 1] = Nt + (gt - Nt) * Et),
        (I[o0 * 3 + 2] = b0 + (nt - b0) * Et));
      const Ct = $[o0 * 3],
        bt = $[o0 * 3 + 1],
        H = $[o0 * 3 + 2] * S.dir;
      ((N[o0 * 3] = G[0] * Ct * S.dir + G[4] * bt + G[8] * H),
        (N[o0 * 3 + 1] = G[1] * Ct * S.dir + G[5] * bt + G[9] * H),
        (N[o0 * 3 + 2] = G[2] * Ct * S.dir + G[6] * bt + G[10] * H));
    }
    ((u.geo.attributes.position.needsUpdate = !0),
      (u.geo.attributes.normal.needsUpdate = !0));
  }
  const se = (u, S) => (u.dir > 0 ? S : S === "left" ? "right" : "left"),
    Le = (u) => u * u * (3 - 2 * u),
    Pe = 0.1 / h.TRAVEL,
    Mo = (u) =>
      u < 0.68 ? 1 - (1 - Pe) * Dt(0, 0.68, u) : Pe * (1 - Dt(0.68, 1, u));
  function Ao(u, S, T) {
    const A = L.door[u];
    if (A)
      if (((L.lastSide = u), S)) {
        if (A.mode === "opening" || (A.k > 0.999 && A.mode === "idle")) return;
        ((A.mode = "opening"),
          (A.from = A.k),
          (A.t = 0),
          (A.T = (T ?? 2) * Math.max(0.25, 1 - A.k)),
          pt("train_door_chime", u, 0.42),
          pt("train_door_open", u, 0.75));
      } else {
        if (A.mode === "closing" || (A.k < 0.001 && A.mode === "idle")) return;
        ((A.mode = "closing"),
          (A.from = A.k),
          (A.t = 0),
          (A.T = (T ?? 2.5) * Math.max(0.3, A.k)),
          pt("train_door_chime", u, 0.45),
          pt("train_door_close", u, 0.48, 0.35));
      }
  }
  function To(u) {
    const S = L.door[u];
    S &&
      ((S.mode !== "closing" &&
        !(S.mode === "idle" && S.k < 0.02 && L.t - (S.shutAt ?? -9) < 0.3)) ||
        ((S.mode = "bounce"),
        (S.from = S.k),
        (S.to = Math.min(1, S.k + 0.45)),
        (S.t = 0),
        (S.T = 0.35),
        (S.hold = 0.9),
        pt("train_door_bounce", u, 0.85)));
  }
  const Ie = (u, S) => {
      if (u.mode === "idle") {
        u.lamp = 0;
        return;
      }
      u.t += S;
      const T = k0(u.t / Math.max(0.05, u.T));
      u.mode === "opening"
        ? ((u.k = u.from + (1 - u.from) * Le(T)),
          (u.lamp = 0),
          T >= 1 && ((u.k = 1), (u.mode = "idle")))
        : u.mode === "closing"
          ? ((u.k = u.from * Mo(T)),
            (u.lamp = Math.sin(L.t * Math.PI * 2 * 2.2) > -0.1 ? 1 : 0),
            T >= 1 &&
              ((u.k = 0), (u.mode = "idle"), (u.lamp = 0), (u.shutAt = L.t)))
          : u.mode === "bounce" &&
            ((u.lamp = Math.sin(L.t * Math.PI * 2 * 2.2) > -0.1 ? 1 : 0),
            T < 1
              ? (u.k = u.from + (u.to - u.from) * Le(T))
              : ((u.k = u.to),
                (u.hold -= S),
                u.hold <= 0 &&
                  ((u.mode = "closing"),
                  (u.from = u.k),
                  (u.t = 0),
                  (u.T = 2.5 * Math.max(0.3, u.k)),
                  pt("train_door_close", u.side, 0.42))));
    },
    R0 = a,
    Lo = (u, S) => {
      const T = u.flick;
      let A = 0;
      for (let E = 0; E < 3; E++) {
        const I = u.zones[E];
        T < 0.01
          ? ((I.on = !0), (I.lvl = _t(I.lvl, 1, 20, S)))
          : ((I.t -= S),
            I.t <= 0 &&
              (I.on
                ? ((I.on = !1),
                  (I.t =
                    T > 0.85
                      ? 0.3 + R0() * 2.4 * T
                      : 0.035 + R0() * 0.1 * (1 + T * 2.5)),
                  T > 0.5 && R0() < 0.3 && (I.t += R0() * 0.5))
                : ((I.on = !0),
                  (I.t =
                    T > 0.85
                      ? 0.04 + R0() * 0.15
                      : (1 - T) * (0.4 + R0() * 3.5) +
                        0.04 +
                        (R0() < T * 0.6 ? 0 : R0() * 0.4))),
              z.indexOf(u) === L.poolCar &&
                L.flickSnd <= 0 &&
                ((L.flickSnd = 0.22), Eo(u))),
            (I.lvl = I.on
              ? 1 - T * 0.2 * R0()
              : T > 0.85
                ? 0
                : (u.flickFloor ?? 0.04)));
        const N = I.lvl * I.base * L.power;
        (u.U.uZone.value.setComponent(E, N), (A += N));
      }
      ((u.light = A / 3),
        (u.U.uLight.value = u.light),
        (u.U.uEnvK.value = 0.04 + 0.96 * Math.pow(u.light, 1.6)));
    },
    ot = new W(),
    Bt = new W(),
    ze = new i0(),
    Po = () => {
      const u = o.camera;
      if (!u) return 1;
      u.getWorldPosition(ot);
      let S = 1,
        T = 1e9;
      for (const A of z) {
        (ze.copy(A.group.matrixWorld).invert(), Bt.copy(ot).applyMatrix4(ze));
        const E = Math.max(0, Math.abs(Bt.x) - h.HL),
          I = Math.max(0, Math.abs(Bt.z) - h.HW),
          N = Math.max(0, Math.abs(Bt.y - 2.2) - 1.4),
          B = Math.hypot(E, N, I) + (A.i === L.poolCar ? -0.5 : 0);
        B < T && ((T = B), (S = A.i));
      }
      return S;
    },
    Io = (u) => {
      const S = Po();
      (S !== L.poolCar && L.poolNext !== S && (L.poolNext = S),
        L.poolNext >= 0
          ? ((L.poolK = Math.max(0, L.poolK - u * 5)),
            L.poolK === 0 && ((L.poolCar = L.poolNext), (L.poolNext = -1)))
          : (L.poolK = Math.min(1, L.poolK + u * 4)));
      const T = z[L.poolCar];
      for (let A = 0; A < Tt.length; A++) {
        const E = Tt[A],
          I = T.dir > 0 ? A : 2 - A;
        (dt
          .set((T.type === "cab" ? La[A] : E.x) * T.dir, 3.08, 0)
          .applyMatrix4(T.group.matrixWorld),
          E.l.position.copy(dt),
          (E.l.intensity = oo * L.poolK * T.U.uZone.value.getComponent(I)));
      }
    },
    Ee = new W(),
    Ne = new W(),
    zo = () => {
      const u = L.power;
      ((z[0].U.uHead.value = u),
        (z[0].U.uTail.value = 0),
        (z[2].U.uHead.value = 0),
        (z[2].U.uTail.value = u));
      const S = z[0];
      (Ee.set(h.HL + 0.12, 1.61, 0).applyMatrix4(S.group.matrixWorld),
        Ne.set(h.HL + 40, 0.6, 0).applyMatrix4(S.group.matrixWorld),
        u0.position.copy(Ee),
        u0.target.position.copy(Ne),
        (u0.intensity = v0.headIntensity * u),
        u0.updateMatrixWorld(),
        u0.target.updateMatrixWorld(),
        (ye.uniforms.uK.value = v0.beamK * u));
      const [T, A] = L.station,
        E = Math.sin(L.t * Math.PI * 2 * 0.9) > 0 ? 1 : 0.15;
      for (let I = 0; I < 4; I++)
        L.lamps.setComponent(
          I,
          (I === T ? 1 : 0) + (I === A && A !== T ? E : 0),
        );
      (it().uLamps.value.copy(L.lamps), (it().uPower.value = u));
    },
    p0 = Aa(o, {
      get onboard() {
        return v0.onboard;
      },
      get engineVol() {
        return v0.engineVol;
      },
    }),
    B0 = new W(),
    Ce = new W(),
    ut = new W(),
    n0 = new W(),
    It = { speed: 0, accel: 0, curve: 0, power: 1, near: B0 },
    zt = (u) => {
      const S = o.camera;
      if (!S) return u.set(0, 0, 0);
      (S.getWorldPosition(ot),
        Ce.set(h.HL, 2, 0).applyMatrix4(z[0].group.matrixWorld),
        ut.set(h.HL, 2, 0).applyMatrix4(z[2].group.matrixWorld),
        n0.subVectors(Ce, ut));
      const T = n0.length() || 1;
      n0.divideScalar(T);
      const A = k0(
        (ot.x - ut.x) * n0.x + (ot.y - ut.y) * n0.y + (ot.z - ut.z) * n0.z,
        0,
        T,
      );
      return u.copy(ut).addScaledVector(n0, A);
    },
    pt = (u, S, T, A = 0) => {
      zt(B0);
      const E = S === "left" ? -1 : 1,
        I = z[L.poolCar];
      (n0.set(0, 2, E * h.HW * I.dir).applyMatrix4(I.group.matrixWorld),
        p0.shot(u, n0, T, A ? { delay: A } : {}));
    },
    Eo = (u) => {
      (n0.set(0, 3, 0).applyMatrix4(u.group.matrixWorld),
        !(
          !v0.onboard &&
          (!o.camera || o.camera.getWorldPosition(ot).distanceTo(n0) > 28)
        ) && p0.shot("train_light_flicker", n0, 0.35 + 0.3 * u.flick));
    },
    Gt = [];
  for (const u of z) {
    const S = [],
      T = [
        [-8.8, -6.65],
        [-5.35, -0.65],
        [0.65, 5.35],
        [6.65, h.HL],
      ];
    for (const [A, E] of T)
      for (const I of [1, -1])
        S.push([
          A,
          E,
          h.FL,
          h.FL + 2.2,
          I > 0 ? 1.27 : -1.43,
          I > 0 ? 1.43 : -1.27,
        ]);
    for (const [A, E] of ho(u.type))
      for (const I of [1, -1])
        S.push([
          A - 0.04,
          E + 0.04,
          h.FL,
          h.FL + 0.6,
          I > 0 ? 0.78 : -1.3,
          I > 0 ? 1.3 : -0.78,
        ]);
    u.type === "mid"
      ? (S.push([h.END - 0.05, h.HL + 0.05, h.FL, h.FL + 2.3, -1.4, 1.4]),
        S.push([-8.8 - 0.05, -8.75 + 0.05, h.FL, h.FL + 2.3, -1.4, 1.4]))
      : (S.push([h.cabX - 0.03, h.HL + 0.05, h.FL, h.FL + 2.3, -1.4, 1.4]),
        S.push([-8.8 - 0.05, -8.75 + 0.05, h.FL, h.FL + 2.3, -1.4, 1.4]));
    for (const A of S) Gt.push({ c: u, b: A });
    for (const A of h.doors)
      for (const E of [1, -1])
        Gt.push({
          c: u,
          b: [
            A - h.DW / 2 - 0.02,
            A + h.DW / 2 + 0.02,
            h.FL,
            h.FL + 2.2,
            E > 0 ? 1.27 : -1.43,
            E > 0 ? 1.43 : -1.27,
          ],
          plug: E > 0 ? "right" : "left",
        });
  }
  const Ut = Gt.map((u) => ({
      x0: 0,
      x1: 0,
      z0: 0,
      z1: 0,
      y0: 0,
      y1: 0,
      on: !0,
      plug: u.plug ? { car: u.c, side: u.plug } : null,
    })),
    g0 = new W();
  function Fe() {
    return (
      r.updateMatrixWorld(!0),
      Gt.forEach(({ c: u, b: S }, T) => {
        const A = Ut[T];
        let E = 1e9,
          I = -1e9,
          N = 1e9,
          B = -1e9,
          $ = 1e9,
          G = -1e9;
        for (let Z = 0; Z < 8; Z++)
          (g0
            .set(Z & 1 ? S[1] : S[0], Z & 2 ? S[3] : S[2], Z & 4 ? S[5] : S[4])
            .applyMatrix4(u.group.matrixWorld),
            (E = Math.min(E, g0.x)),
            (I = Math.max(I, g0.x)),
            (N = Math.min(N, g0.y)),
            (B = Math.max(B, g0.y)),
            ($ = Math.min($, g0.z)),
            (G = Math.max(G, g0.z)));
        ((A.x0 = E),
          (A.x1 = I),
          (A.y0 = N),
          (A.y1 = B),
          (A.z0 = $),
          (A.z1 = G));
      }),
      Ut
    );
  }
  function No(u = "left") {
    r.updateMatrixWorld(!0);
    let S = 1e9,
      T = -1e9,
      A = 1e9,
      E = -1e9,
      I = 0;
    const N = u === "right" ? 1 : -1;
    for (const B of z) {
      const G = B.type === "cab" ? h.cabX : h.END;
      for (const [Z, o0] of [
        [-8.75, -1.3],
        [G, -1.3],
        [-8.75, h.IW],
        [G, h.IW],
        [-8.75, N * B.dir * (h.HW + 0.02)],
        [G, N * B.dir * (h.HW + 0.02)],
      ])
        (g0.set(Z, h.FL, o0).applyMatrix4(B.group.matrixWorld),
          (S = Math.min(S, g0.x)),
          (T = Math.max(T, g0.x)),
          (A = Math.min(A, g0.z)),
          (E = Math.max(E, g0.z)),
          (I = g0.y));
    }
    return { x0: S, x1: T, z0: A, z1: E, y: I, y0: I - 0.05, y1: I + 2.2 };
  }
  const v0 = {
      root: r,
      cars: z,
      spots: P0,
      rider: vo,
      colliders: Ut,
      headlight: u0,
      pool: Tt.map((u) => u.l),
      bogies: Q,
      beam: tt,
      length: pe,
      headIntensity: 5200,
      beamK: 0.07,
      engineVol: 1,
      onboard: !1,
      collidersOn: !1,
      get s() {
        return L.s;
      },
      get speed() {
        return L.speed;
      },
      get doorsK() {
        return L.door[L.lastSide].k;
      },
      doorsOf: (u) => L.door[u]?.k ?? 0,
      setLine: ve,
      place(u) {
        ((L.s = u), re());
      },
      doors: Ao,
      bounce: To,
      refreshColliders: Fe,
      floorBox: No,
      lights(u) {
        L.powerGoal = k0(+u || 0);
      },
      flicker(u, S, T = 0.04) {
        const A = z[u | 0];
        A && ((A.flick = k0(+S || 0)), (A.flickFloor = k0(+T)));
      },
      horn() {
        const u = new W(h.HL + 0.3, 1.5, 0).applyMatrix4(
          z[0].group.matrixWorld,
        );
        p0.shot("train_horn", u, 0.6, { ref: 7 });
      },
      chime() {
        const u = z[L.poolCar];
        p0.shot(
          "train_pa_chime",
          new W(0, 3.2, 0).applyMatrix4(u.group.matrixWorld),
          0.8,
          { reverb: 0.15 },
        );
      },
      bang(u = 1) {
        ((u = k0(+u || 0)),
          (L.knockV += 0.55 * u),
          P0.gangway.getWorldPosition(n0),
          p0.shot("train_gangway_bang", n0, 0.5 + 0.5 * u, { ref: 3 }));
      },
      bangFront(u = 1) {
        ((u = k0(+u || 0)),
          (L.knockVF += 0.55 * u),
          P0.gangwayF.getWorldPosition(n0),
          p0.shot("train_gangway_bang", n0, 0.5 + 0.5 * u, { ref: 3 }));
      },
      gangway(u, S, T = 1.2, A = !1) {
        const E = L.gang[u];
        E &&
          ((E.goal = S ? 1 : 0),
          (E.rate = 1 / Math.max(0.05, T)),
          !A &&
            ((u === "front" ? P0.gangwayF : P0.gangway).getWorldPosition(n0),
            S && T < 0.4
              ? (p0.shot("train_gangway_bang", n0, 1, { ref: 4 }),
                p0.shot("train_door_bounce", n0, 0.9, { ref: 4 }))
              : p0.shot(S ? "train_door_open" : "train_door_close", n0, 0.6, {
                  ref: 3,
                })));
      },
      gangwayK: (u) => L.gang[u]?.k ?? 0,
      lockCar(u, S = !0) {
        const T = z[u | 0];
        T && (T.locked = !!S);
      },
      dims: {
        END: h.END,
        IW: h.IW,
        FL: h.FL,
        CAR: H0,
        doors: h.doors,
        DW: h.DW,
      },
      setStation(u, S = -1) {
        L.station = [u, S];
      },
      carryCamera(u, S = 0, T = 0) {
        (P0.sara.updateMatrixWorld(!0),
          P0.sara.getWorldPosition(u.position),
          P0.sara.getWorldQuaternion(u.quaternion),
          u.quaternion
            .multiply(Co.setFromAxisAngle(Do, Math.PI + S))
            .multiply(Fo.setFromAxisAngle(_o, T)),
          u.updateMatrixWorld());
      },
      update: Oo,
      sound: p0,
      tris: 0,
      buildMs: 0,
    },
    Co = new Ot(),
    Fo = new Ot(),
    Do = new W(0, 1, 0),
    _o = new W(1, 0, 0);
  function Oo(u, S = {}) {
    ((u = Math.min(Math.max(u || 0, 0), 0.1)),
      (L.t += u),
      i.length && (L.mapT = (L.mapT || 0) + u) > 0.5 && ((L.mapT = 0), s()),
      (it().uTime.value = L.t));
    let T = S.speed;
    (T == null && (T = L.lastS == null || u <= 0 ? 0 : (L.s - L.lastS) / u),
      (L.lastS = L.s),
      (L.accel = _t(L.accel, u > 0 ? (T - L.speed) / u : 0, 4, u)));
    const A = L.speed;
    ((L.speed = T),
      (L.wheel = (L.wheel - (T * u) / h.wheelR) % (Math.PI * 2)),
      (it().uWheel.value = L.wheel));
    const E = Math.abs(T),
      I = Dt(1, 14, E);
    for (const N of z) {
      const B = L.s - H0 / 2 - H0 * N.i,
        $ = wo(B);
      N.i === 1 && (L.curve = $);
      const G = k0($ * T * T * 0.0125, -0.014, 0.014),
        Z =
          I *
          (0.0032 * Math.sin(L.t * 4.4 + N.ph) +
            0.0016 * Math.sin(L.t * 7.3 + N.ph2) +
            8e-4 * Math.sin(L.t * 13.1 + N.ph * 2));
      ((N.roll = _t(N.roll, G + Z, 6, u)),
        (N.lat = _t(
          N.lat,
          I *
            (0.004 * Math.sin(L.t * 2.1 + N.ph2) +
              0.002 * Math.sin(L.t * 5.7 + N.ph)),
          6,
          u,
        )));
    }
    (re(), Ie(L.door.left, u), Ie(L.door.right, u));
    {
      const N = Math.max(1, Math.ceil(u / 0.004)),
        B = u / N;
      for (let $ = 0; $ < N; $++)
        ((L.knockV += (-1600 * L.knock - 18 * L.knockV) * B),
          (L.knock += L.knockV * B));
    }
    z[1].U.uKnock.value = k0(L.knock, -0.004, 0.014);
    {
      const N = Math.max(1, Math.ceil(u / 0.004)),
        B = u / N;
      for (let $ = 0; $ < N; $++)
        ((L.knockVF += (-1600 * L.knockF - 18 * L.knockVF) * B),
          (L.knockF += L.knockVF * B));
    }
    z[1].U.uKnockF.value = k0(L.knockF, -0.004, 0.014);
    for (const N of [L.gang.rear, L.gang.front])
      if (N.k !== N.goal) {
        const B = N.goal - N.k;
        N.k += Math.sign(B) * Math.min(Math.abs(B), N.rate * u);
      }
    z[1].U.uGang.value.set(
      Dt(0, 1, L.gang.rear.k) * 0.86,
      Dt(0, 1, L.gang.front.k) * 0.86,
    );
    for (const N of Ut)
      if (N.plug) {
        const B = L.door[se(N.plug.car, N.plug.side)];
        N.on = !!v0.collidersOn && (!!N.plug.car.locked || B.k < 0.25);
      }
    for (const N of z) {
      const B = L.door[se(N, "left")],
        $ = L.door[se(N, "right")],
        G = N.locked ? 0 : 1;
      (N.U.uDoor.value.set(
        B.k * h.TRAVEL * G,
        $.k * h.TRAVEL * G,
        B.lamp * G,
        $.lamp * G,
      ),
        N.U.uBtn.value.set(B.k > 0.5 && G ? 1 : 0, $.k > 0.5 && G ? 1 : 0),
        N.U.uToCar.value.setFromMatrix4(N.group.matrixWorld).transpose(),
        N.U.uCarPos.value.setFromMatrixPosition(N.group.matrixWorld));
    }
    ((L.power = _t(L.power, L.powerGoal, 9, u)), (L.flickSnd -= u));
    for (const N of z) Lo(N, u);
    (Io(u),
      zo(),
      A > 3.2 &&
        E <= 3.2 &&
        L.accel < -0.2 &&
        (zt(B0), p0.shot("train_brake", B0, 0.75)),
      !L.stopped && E < 0.02 && ((L.stopped = !0), (L.stopT = 0.6)),
      L.stopped &&
        E > 0.15 &&
        ((L.stopped = !1), zt(B0), p0.shot("train_air", B0, 0.45)),
      L.stopT > 0 &&
        ((L.stopT -= u),
        L.stopT <= 0 && (zt(B0), p0.shot("train_air", B0, 0.7))),
      zt(B0),
      (It.speed = T),
      (It.accel = L.accel),
      (It.curve = L.curve),
      (It.power = L.power),
      p0.update(u, It));
  }
  const Ro = Bo();
  function Bo() {
    const u = performance.now();
    try {
      const S = new rn();
      S.background = new qe(0);
      const T = z[1],
        A = new Ft(T.meshes.int.geometry, T.mats.int);
      S.add(A);
      for (const N of ao) {
        const B = new Ve(eo, oo, no, 2);
        (B.position.set(N, 3.08, 0), S.add(B));
      }
      (S.add(new sn(3818056, 1710102, 0.4)),
        T.U.uZone.value.set(1, 1, 1),
        (T.U.uEnvK.value = 0),
        T.U.uToCar.value.identity(),
        T.U.uCarPos.value.set(0, 0, 0));
      const E = new cn(n),
        I = E.fromScene(S, 0, 0.05, 40, { size: 256, position: F.eye.clone() });
      E.dispose();
      for (const N of q)
        N.defines?.TR_INT !== void 0 &&
          ((N.envMap = I.texture),
          (N.envMapIntensity = 1),
          (N.needsUpdate = !0));
      v0.envTexture = I.texture;
    } catch (S) {
      console.warn("[train] interior capture failed", S);
    }
    return Math.round(performance.now() - u);
  }
  return (
    ve([
      [0, 0, 0],
      [pe + 10, 0, 0],
    ]),
    (L.s = pe),
    re(),
    Fe(),
    (v0.tris = [k.mid.ext, k.mid.int, k.cab.ext, k.cab.int].reduce(
      (u, S) => u + S.index.count / 3,
      0,
    )),
    (v0.buildMs = Math.round(performance.now() - l)),
    (v0.partsMs = C),
    (v0.captureMs = Ro),
    v0
  );
}
