// assets/index-DQDjAbEY 24 — math
// Lines 6700-7720 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function buildHelicopter(e, l = {}) {
  const a = e.game || e,
    o = e.scene || a.scene,
    t = l.livery === "army";
  let s = 5304;
  const n = l.rng || (() => ((s = (s * 16807) % 2147483647), s / 2147483647)),
    c = performance.now();
  bakeHelicopterDecals();
  const i = {
      body: new Ke("body"),
      tail: new Ke("tail"),
      glass: new Ke("glass"),
      cabin: new Ke("cabin"),
    },
    d = Ma(i, { army: t, rng: n }),
    f = [],
    p = { quad: (b, K) => f.push(ln(b, K)) },
    m = t ? { parts: {} } : Ca(i.cabin, p, { rng: n }),
    x = performance.now();
  t || (qt(i.body, d.grid), qt(i.cabin, d.grid));
  const w = Math.round(performance.now() - x),
    v = ya({ livery: t ? "army" : "rescue" }),
    u = v.userData.U;
  On(u, t);
  const g = t ? null : en(u),
    P = t ? null : rn(),
    k = P?.userData.U,
    y = new $e();
  y.name = l.name || (t ? "heli_army" : "heli");
  const M = new $e();
  ((M.name = y.name + "_body"), y.add(M));
  const F = (b, K, H, N0 = !0) => {
      const E0 = new le(b, K);
      return (
        (E0.name = H),
        (E0.castShadow = N0),
        (E0.receiveShadow = !0),
        (E0.customDepthMaterial = v.userData.depth),
        (E0.customDistanceMaterial = v.userData.distance),
        (E0.onBeforeShadow = () => {}),
        E0
      );
    },
    A = i.body.build(),
    W = i.tail.build();
  A.boundingSphere.radius += 1.5;
  const N = F(A, v, y.name + "_mesh");
  M.add(N);
  let D = null;
  if (!t) {
    const b = i.cabin.build();
    ((b.boundingSphere.radius += 0.6),
      (D = F(b, v, y.name + "_cabin", !1)),
      M.add(D));
  }
  const $ = new $e();
  (($.name = y.name + "_tail"), M.add($));
  const u0 = F(W, v, y.name + "_tailmesh");
  $.add(u0);
  let L = null,
    T = null;
  if (!t) {
    const b = i.glass.build();
    ((b.boundingSphere.radius += 1.5),
      (L = new le(b, g)),
      (L.name = y.name + "_glass"),
      (L.renderOrder = 6),
      (L.castShadow = !1),
      (L.receiveShadow = !1),
      M.add(L));
    const K = In(f);
    ((K.boundingSphere.radius += 1.2),
      (T = new le(K, P)),
      (T.name = y.name + "_screens"),
      (T.castShadow = !1),
      M.add(T));
  }
  const O = Kt({
    R: X.R,
    r0: 0.6,
    chord: X.chord,
    nb: 4,
    tipBand: X.R - 0.33,
    name: y.name + "_disc",
  });
  (O.mesh.position.copy(X.mast), M.add(O.mesh));
  const q = Kt({
    R: X.trR,
    r0: 0.12,
    chord: X.trChord,
    tipChord: 1,
    nb: 2,
    tipBand: 0.5,
    stripes: !0,
    axis: "x",
    name: y.name + "_tdisc",
  });
  (q.mesh.position.set(X.tr.x + 0.04, X.tr.y, X.tr.z),
    (q.mesh.rotation.y = Math.PI / 2),
    $.add(q.mesh));
  const j =
      i.body.tris + i.cabin.tris + i.tail.tris + i.glass.tris + f.length * 2,
    E = (b, K, H) => {
      const N0 = new Go();
      return ((N0.name = K), H && N0.position.copy(H), b.add(N0), N0);
    },
    l0 = {
      copilot: E(M, "heli_eye_copilot", t0.eye),
      pilot: E(M, "heli_seat_pilot", h(-0.38, t0.floorY, t0.seatZ)),
      rear: E(M, "heli_seat_rear", h(-0.1, t0.floorY, -1.05)),
    },
    y0 = { R: E(M, "heli_hand_R"), L: E(M, "heli_hand_L") },
    o0 = { L: E(M, "heli_foot_L"), R: E(M, "heli_foot_R") },
    n0 = {
      root: l0.pilot,
      pose: "seat",
      seat: +(t0.seatTop - t0.floorY).toFixed(3),
      hands: y0,
      feet: o0,
      lean: 5,
    },
    U = {
      [f0.NAV_L]: E(M, "lamp_nav_l", h(1.27, 2.02, -4.98)),
      [f0.NAV_R]: E(M, "lamp_nav_r", h(-1.27, 2.02, -4.98)),
      [f0.NAV_TAIL]: E($, "lamp_tail", h(0, 2.05, O0.z1 - 0.05)),
      [f0.BCN_TOP]: E(M, "lamp_bcn_top", h(0, 2.9, -1.55)),
      [f0.BCN_BELLY]: E(M, "lamp_bcn_belly", h(0, 0.57, -0.45)),
      [f0.STROBE_L]: E(M, "lamp_strobe_l", h(1.27, 2.3, -5.02)),
      [f0.STROBE_R]: E(M, "lamp_strobe_r", h(-1.27, 2.3, -5.02)),
      [f0.LANDING]: E(
        M,
        "lamp_landing",
        h(X.landing.x, X.landing.y - 0.04, X.landing.z + 0.06),
      ),
    },
    e0 = E(M, "heli_exhaust_1", h(0.42, 2.95, -2.36)),
    a0 = E(M, "heli_fire_at", h(0.45, 2.7, -1.6)),
    r0 = E(M, "heli_glow_at", h(0, 1.36, 2.12)),
    i0 = {};
  let V = null,
    p0 = null,
    C = null;
  t ||
    ((V = new It(15002879, 0, 95, 0.22, 0.85, 2)),
    (V.name = y.name + "_searchlight"),
    (V.castShadow = !0),
    V.shadow.mapSize.set(1024, 1024),
    (V.shadow.camera.near = 0.8),
    (V.shadow.camera.far = 95),
    (V.shadow.bias = -6e-4),
    (V.shadow.normalBias = 0.04),
    (V.userData.actorGain = 1),
    (p0 = new It(16773596, 0, 55, 0.36, 0.5, 2)),
    (p0.name = y.name + "_landing"),
    (p0.castShadow = !1),
    (p0.userData.noShadowBudget = !0),
    (C = new Ct(10275071, 0, 2.3, 2)),
    (C.name = y.name + "_glow"),
    (C.castShadow = !1),
    o.add(V, V.target, p0, p0.target, C),
    Object.assign(i0, { searchlight: V, landing: p0, glow: C }));
  const J = new Ct(16722458, 0, 9, 2);
  ((J.name = y.name + "_fxlight"), (J.castShadow = !1), o.add(J), (i0.fx = J));
  const Y = buildHeliFx(o, { name: y.name + "_fx", haloN: 8, seed: t ? 91 : 77 }),
    B = {},
    k0 = Ln(a, B, { enabled: l.sound !== !1 });
  l.parent !== null && (l.parent || o).add(y);
  const r = {
      t: 0,
      rpm: 0,
      phase: 0,
      phaseT: 0.7,
      omegaT: 0,
      n1: [0, 0],
      eng: [0, 0],
      startT: [-9, -9],
      collective: 0,
      cyc: [0, 0],
      pedal: 0,
      speed: 0,
      damage: 0,
      power: 0,
      powerOn: !1,
      bootT: 0,
      beacon: !1,
      strobe: !1,
      doorK: [0, 0, 0, 0],
      doorGoal: [0, 0, 0, 0],
      doorRate: [1, 1, 1, 1],
      pan: 0,
      tilt: 8 * U0,
      aim: null,
      searchK: 0,
      landingK: 0,
      crack: 0,
      crackGoal: 0,
      smoke: 0,
      fire: 0,
      warn: new Set(),
      warnT: new Map(),
      shake: 0,
      kick: 0,
      kickDecay: 0.5,
      broken: !1,
      brokeT: 0,
      grind: 0,
      sparkT: -9,
      sparkPos: new Y0(),
      hookV: [0, 0],
      hook: [0, 0],
      lastPos: new Y0(),
      vel: new Y0(),
      velInit: !1,
      emitAcc: 0,
      smears: 0,
      eyeV: new Y0(),
      eyeO: new Y0(),
      thr: [0, 0],
      throttleGoal: null,
    },
    c0 = u.uPart.value;
  for (const b of c0) b.identity();
  const F0 = new b0().makeScale(0, 0, 0);
  (c0[_.BRK_BODY].copy(F0), c0[_.BRK_TAIL].copy(F0), c0[_.CABLES].copy(F0));
  const z0 = new b0(),
    ro = new b0(),
    lo = new b0(),
    kt = new b0(),
    Ee = new nt(),
    h0 = new Y0(),
    w0 = new Y0(),
    q0 = new Y0(),
    Qe = new Y0(),
    be = new Zt(),
    Ue = new b0(),
    pe = (b, K, H) =>
      b
        .makeTranslation(K.x, K.y, K.z)
        .multiply(H)
        .multiply(lo.makeTranslation(-K.x, -K.y, -K.z)),
    De = {
      1: [X.hingeFL[0].clone(), X.hingeFL[1].clone()],
      [-1]: [
        h(-X.hingeFL[0].x, X.hingeFL[0].y, X.hingeFL[0].z),
        h(-X.hingeFL[1].x, X.hingeFL[1].y, X.hingeFL[1].z),
      ],
    },
    io = {
      1: De[1][1].clone().sub(De[1][0]).normalize(),
      [-1]: De[-1][1].clone().sub(De[-1][0]).normalize(),
    };
  (Object.assign(B, {
    root: y,
    body: M,
    seats: l0,
    rider: n0,
    hands: y0,
    feet: o0,
    mast: X.mast.clone(),
    tail: $,
    lights: i0,
    searchlight: V,
    landing: p0,
    glow: C,
    fx: Y,
    material: v,
    glassMaterial: g,
    screensMaterial: P,
    triParts: { ...d.parts, ...m.parts },
    aoMs: w,
    meshes: {
      body: N,
      cabin: D,
      tail: u0,
      glass: L,
      screens: T,
      disc: O.mesh,
      tdisc: q.mesh,
    },
    tris: j,
    onboard: !1,
    engineVol: 1,
    searchIntensity: 26e3,
    landingIntensity: 6e3,
    glowIntensity: 0.9,
    beamK: 0,
    state: r,
  }),
    Object.defineProperties(B, {
      searchK: {
        get: () => r.searchK,
        set: (b) => {
          r.searchK = m0(+b || 0);
        },
        enumerable: !0,
      },
      landingK: {
        get: () => r.landingK,
        set: (b) => {
          r.landingK = m0(+b || 0);
        },
        enumerable: !0,
      },
      rpm: { get: () => r.rpm, enumerable: !0 },
      broken: { get: () => r.broken, enumerable: !0 },
    }),
    (B.placeMast = (b, K) => {
      (y.quaternion.copy(K),
        h0.copy(X.mast).applyQuaternion(K),
        y.position.copy(b).sub(h0));
    }),
    (B.power = (b = !0, { instant: K = !1 } = {}) => {
      if (((b = !!b), K)) {
        ((r.powerOn = b), (r.power = b ? 1 : 0), (r.bootT = b ? 10 : 0));
        return;
      }
      b !== r.powerOn &&
        ((r.powerOn = b),
        (r.bootT = 0),
        k0.play(b ? "heli_battery" : "heli_switch", b ? 0.8 : 0.6));
    }),
    (B.start = (b = 1) => {
      const K = b === 2 ? 1 : 0;
      r.eng[K] ||
        (r.powerOn || B.power(!0),
        (r.eng[K] = 1),
        (r.startT[K] = r.t),
        k0.play("heli_switch", 0.6),
        k0.play("heli_starter", 0.85, { extra: { delay: 0.15 } }),
        k0.play("heli_lightoff", 0.9, { extra: { delay: 2.4 } }));
    }),
    (B.stop = (b = !1) => {
      ((r.eng[0] = 0),
        (r.eng[1] = 0),
        (r.startT[0] = r.startT[1] = -9),
        b &&
          ((r.n1[0] = r.n1[1] = 0),
          (r.rpm = 0),
          (r.thr[0] = r.thr[1] = 0),
          (r.throttleGoal = null)));
    }),
    (B.throttle = (b) => {
      r.throttleGoal = b == null ? null : m0(b);
    }),
    (B.beacon = (b = !0) => {
      ((r.beacon = !!b), (r.strobe = !!b));
    }),
    (B.aim = (b) => {
      b
        ? ((r.aim = r.aim || new Y0()),
          b.isVector3 ? r.aim.copy(b) : r.aim.fromArray(b))
        : (r.aim = null);
    }),
    (B.crack = (b) => {
      const K = m0(b);
      (K > r.crackGoal + 0.04 &&
        k0.play("heli_glass_crack", 0.6 + 0.4 * (K - r.crackGoal)),
        (r.crackGoal = K));
    }),
    (B.smoke = (b) => {
      r.smoke = m0(b);
    }),
    (B.fire = (b) => {
      r.fire = m0(b);
    }),
    (B.shake = (b, K) => {
      K
        ? ((r.kick = Math.max(r.kick, b)), (r.kickDecay = K))
        : (r.shake = Math.max(0, b));
    }),
    (B.warn = (b = []) => {
      const K = new Set((b || []).filter((N0) => yt.includes(N0)));
      let H = !1;
      for (const N0 of K) r.warn.has(N0) || ((H = !0), r.warnT.set(N0, r.t));
      (K.size && !K.has("MASTER CAUTION") && K.add("MASTER CAUTION"),
        (r.warn = K),
        H && k0.play("heli_caution", 0.75));
    }),
    (B.sparks = (b, K = 50) => {
      const H = b.isVector3 ? h0.copy(b) : h0.fromArray(b);
      (Y.burst(H, K, null, 8),
        (r.sparkT = r.t),
        r.sparkPos.copy(H),
        k0.play("heli_sparks", 0.8, { pos: [H.x, H.y, H.z], outside: !0 }));
    }),
    (B.bang = (b) => {
      const K = b.isVector3 ? h0.copy(b) : h0.fromArray(b);
      if (
        (k0.play("heli_glass_bang", 0.9, { pos: [K.x, K.y, K.z], outside: !0 }),
        (r.kick = Math.max(r.kick, 0.35)),
        (r.kickDecay = 0.35),
        g)
      ) {
        (y.updateMatrixWorld(!0), Ue.copy(M.matrixWorld).invert());
        const H = w0.copy(K).applyMatrix4(Ue);
        (g.userData.U.uSmear.value[r.smears % 6].set(
          H.x,
          H.y,
          H.z,
          0.05 + 0.03 * n(),
        ),
          r.smears++);
      }
    }),
    (B.breakTail = () => {
      if (r.broken) return $;
      ((r.broken = !0),
        (r.brokeT = r.t),
        (r.grind = 1),
        y.updateMatrixWorld(!0),
        o.attach($),
        c0[_.BRK_BODY].identity(),
        c0[_.BRK_TAIL].identity(),
        h0.set(0, ie(O0.brk).C, O0.brk).applyMatrix4(M.matrixWorld),
        Y.burst(h0, 80, null, 10),
        (r.sparkT = r.t),
        r.sparkPos.copy(h0),
        k0.play("heli_tail_bang", 1));
      const b = new Set(r.warn);
      return (
        b.add("TAIL ROTOR"),
        B.warn([...b]),
        (r.kick = 1),
        (r.kickDecay = 0.9),
        $
      );
    }));
  const Ve = (b, K) => ({
    name: K,
    get k() {
      return r.doorK[b];
    },
    open(H = 1, N0 = 1.2) {
      const E0 = m0(H);
      (E0 !== r.doorGoal[b] && E0 > r.doorK[b]
        ? k0.play(b < 2 ? "heli_door_latch" : "heli_door_slide", 0.75)
        : E0 !== r.doorGoal[b] && b >= 2 && k0.play("heli_door_slide", 0.75),
        (r.doorGoal[b] = E0),
        (r.doorRate[b] = 1 / Math.max(0.05, N0)));
    },
  });
  B.doors = {
    left: Ve(0, "left"),
    right: Ve(1, "right"),
    rearL: Ve(2, "rearL"),
    rearR: Ve(3, "rearR"),
  };
  const zt = [
      { name: "pod", box: [-0.92, 0.92, 0, 2.95, -2.75, 3.5] },
      { name: "tail", box: [-0.48, 0.48, 0, 3.6, -7.3, -2.75] },
      { name: "stab", box: [-1.3, 1.3, 1.5, 2.45, -5.35, -4.7] },
    ],
    St = zt.map((b) => ({
      x0: 0,
      x1: 0,
      z0: 0,
      z1: 0,
      y0: 0,
      y1: 0,
      on: !1,
      name: "heli_" + b.name,
    }));
  B.colliders = (b = !0) => (
    y.updateMatrixWorld(!0),
    zt.forEach((K, H) => {
      const [N0, E0, qe, We, Je, et] = K.box,
        A0 = St[H];
      ((A0.x0 = A0.z0 = A0.y0 = 1 / 0), (A0.x1 = A0.z1 = A0.y1 = -1 / 0));
      for (const Se of [N0, E0])
        for (const me of [qe, We])
          for (const tt of [Je, et])
            (h0.set(Se, me, tt).applyMatrix4(y.matrixWorld),
              (A0.x0 = Math.min(A0.x0, h0.x)),
              (A0.x1 = Math.max(A0.x1, h0.x)),
              (A0.z0 = Math.min(A0.z0, h0.z)),
              (A0.z1 = Math.max(A0.z1, h0.z)),
              (A0.y0 = Math.min(A0.y0, h0.y)),
              (A0.y1 = Math.max(A0.y1, h0.y)));
      A0.on = !!b;
    }),
    St
  );
  const At = new nt(),
    Tt = new nt(),
    co = new Y0(0, 1, 0),
    fo = new Y0(1, 0, 0);
  B.carryCamera = (b, K = 0, H = 0) => {
    (y.updateMatrixWorld(!0),
      l0.copilot.getWorldPosition(b.position),
      l0.copilot.getWorldQuaternion(b.quaternion),
      At.setFromAxisAngle(co, Math.PI + K),
      Tt.setFromAxisAngle(fo, H),
      b.quaternion.multiply(At).multiply(Tt),
      b.updateMatrixWorld());
  };
  const ne = u.uLamp.value,
    ho = new ee(10275071),
    uo = new ee(1, 0.12, 0.06),
    po = () => {
      for (let b = y; b; b = b.parent) if (!b.visible) return !1;
      return !0;
    };
  ((B.update = (b, K = {}) => {
    ((b = Math.min(Math.max(b || 0, 0), 0.1)), (r.t += b));
    const H = r.t,
      N0 = po();
    ((Y.group.visible = N0),
      (r.collective = X0(
        r.collective,
        m0(K.collective ?? r.collective),
        10,
        b,
      )),
      K.cyclic &&
        ((r.cyc[0] = X0(r.cyc[0], m0(K.cyclic[0], -1, 1), 12, b)),
        (r.cyc[1] = X0(r.cyc[1], m0(K.cyclic[1], -1, 1), 12, b))),
      (r.pedal = X0(r.pedal, m0(K.pedal ?? r.pedal, -1, 1), 12, b)),
      (r.speed = K.speed ?? r.speed),
      (r.damage = X0(r.damage, m0(K.damage ?? r.damage), 4, b)));
    for (let I = 0; I < 2; I++) {
      const d0 = H - r.startT[I],
        s0 = r.eng[I]
          ? d0 < 2.2
            ? 0.22 * j0(0, 2, d0)
            : 0.68 +
              0.3 *
                (r.throttleGoal ?? (r.rpm > 0.6 ? 1 : 0.5)) *
                (0.6 + 0.4 * r.collective)
          : 0;
      r.n1[I] = X0(r.n1[I], s0, d0 < 2.2 ? 4 : 1.4, b);
    }
    if (
      ((r.thr[0] = X0(r.thr[0], r.throttleGoal ?? (r.eng[0] ? 1 : 0), 6, b)),
      (r.thr[1] = X0(r.thr[1], r.throttleGoal ?? (r.eng[1] ? 1 : 0), 6, b)),
      K.rpm != null)
    )
      r.rpm = m0(K.rpm, 0, 1.15);
    else {
      const I = Math.max(r.n1[0], r.n1[1]),
        d0 = I > 0.3 ? m0((I - 0.3) / 0.55) : 0,
        s0 =
          d0 > r.rpm
            ? Math.min(0.2 * b, (d0 - r.rpm) * (1 - Math.exp(-b * 1.5)))
            : (d0 - r.rpm) * (1 - Math.exp(-b * 0.15));
      r.rpm = m0(r.rpm + s0, 0, 1.15);
    }
    const E0 = r.rpm * Ht;
    ((r.phase = (r.phase + E0 * b) % (Math.PI * 2e3)),
      (r.omegaT = r.broken ? X0(r.omegaT, 0, 0.35, b) : r.rpm * $t),
      (r.phaseT = (r.phaseT + r.omegaT * b) % (Math.PI * 2e3)));
    const qe = 0.32 * (1 - j0(0.05, 0.75, r.rpm)),
      We = r.rpm * r.rpm * (0.04 + 0.16 * r.collective);
    O.U.uDroop.value.set(qe, We, X.R, 0.6);
    const Je = O.step(b, E0, r.phase, Ht, -0.85);
    (u.uRotor.value.set(qe, We, X.R, Je),
      (u.uTRotorA.value = q.step(b, r.omegaT, r.phaseT, $t, 1.3)));
    const et =
        (r.cyc[1] * 3.5 + Math.min(r.speed, 60) * 0.06) *
        U0 *
        j0(0.3, 0.9, r.rpm),
      A0 = -r.cyc[0] * 3 * U0 * j0(0.3, 0.9, r.rpm);
    (be.set(et, 0, A0),
      Ee.setFromEuler(be),
      O.mesh.quaternion.copy(Ee),
      z0.makeRotationFromQuaternion(Ee).multiply(ro.makeRotationY(r.phase)),
      pe(c0[_.ROTOR], X.mast, z0),
      pe(c0[_.TROTOR], X.tr, z0.makeRotationX(r.phaseT)));
    for (const [I, d0, s0, M0, B0] of [
      [1, _.CYC_L, _.COL_L, _.PED_LL, _.PED_LR],
      [-1, _.CYC_R, _.COL_R, _.PED_RL, _.PED_RR],
    ]) {
      const P0 = re["cyc" + I],
        Me = re["col" + I];
      P0 &&
        (be.set(r.cyc[1] * 11 * U0, 0, r.cyc[0] * 9 * U0, "XZY"),
        z0.makeRotationFromEuler(be),
        pe(c0[d0], P0.pivot, z0),
        pe(c0[s0], Me.pivot, z0.makeRotationX(-r.collective * 13 * U0)),
        c0[M0].makeTranslation(0, 0, -r.pedal * 0.045),
        c0[B0].makeTranslation(0, 0, r.pedal * 0.045));
    }
    (c0[_.THR_1].makeTranslation(0, 0, r.thr[0] * 0.11),
      c0[_.THR_2].makeTranslation(0, 0, r.thr[1] * 0.11),
      re["cyc-1"] &&
        (y0.R.position.copy(re["cyc-1"].grip).applyMatrix4(c0[_.CYC_R]),
        y0.R.quaternion.setFromRotationMatrix(c0[_.CYC_R]),
        y0.L.position.copy(re["col-1"].grip).applyMatrix4(c0[_.COL_R]),
        y0.L.quaternion.setFromRotationMatrix(c0[_.COL_R]),
        o0.L.position.copy(re["ped-1L"].pos).applyMatrix4(c0[_.PED_RL]),
        o0.R.position.copy(re["ped-1R"].pos).applyMatrix4(c0[_.PED_RR])));
    for (let I = 0; I < 4; I++) {
      const d0 = r.doorGoal[I],
        s0 = r.doorK[I],
        M0 =
          s0 +
          Math.sign(d0 - s0) * Math.min(Math.abs(d0 - s0), b * r.doorRate[I]);
      (I < 2 &&
        s0 > 0.02 &&
        M0 <= 0.02 &&
        d0 < s0 &&
        k0.play("heli_door_latch", 0.6),
        (r.doorK[I] = M0));
    }
    for (const [I, d0, s0] of [
      [0, 1, _.DOOR_FL],
      [1, -1, _.DOOR_FR],
    ]) {
      const M0 = r.doorK[I] * r.doorK[I] * (3 - 2 * r.doorK[I]);
      (z0.makeRotationAxis(io[d0], -d0 * M0 * 78 * U0),
        pe(c0[s0], De[d0][0], z0));
    }
    for (const [I, d0, s0] of [
      [2, 1, _.DOOR_RL],
      [3, -1, _.DOOR_RR],
    ]) {
      const M0 = r.doorK[I],
        B0 = j0(0, 0.15, M0) * X.slideOut,
        P0 = j0(0.08, 1, M0) * X.slideBack;
      c0[s0].makeTranslation(d0 * B0, 0, -P0);
    }
    {
      const I =
          -r.cyc[1] * 0.3 -
          Math.min(r.speed, 50) * 0.008 +
          Math.sin(H * 2.1) * 0.03 * r.rpm,
        d0 = r.cyc[0] * 0.2 + Math.sin(H * 1.7) * 0.03 * r.rpm;
      ((r.hookV[0] += ((I - r.hook[0]) * 22 - r.hookV[0] * 1.5) * b),
        (r.hook[0] += r.hookV[0] * b),
        (r.hookV[1] += ((d0 - r.hook[1]) * 22 - r.hookV[1] * 1.5) * b),
        (r.hook[1] += r.hookV[1] * b),
        be.set(r.hook[0], 0, r.hook[1]),
        z0.makeRotationFromEuler(be),
        pe(c0[_.HOOK], Qe.set(X.hook.x, 2.12, X.hook.z), z0));
    }
    r.broken &&
      (be.set(Math.sin(H * 5.3) * 0.25 + 0.2, 0, Math.sin(H * 4.1) * 0.3),
      z0.makeRotationFromEuler(be),
      pe(c0[_.CABLES], Qe.set(0, ie(O0.brk).C, O0.brk), z0),
      (r.grind = X0(r.grind, 0.7, 0.5, b)));
    {
      r.kick *= Math.exp(-b / Math.max(0.05, r.kickDecay));
      const I = r.shake + r.kick + r.damage * 0.25,
        d0 = 7e-4 * r.rpm * (1 + 2 * r.damage),
        s0 = (M0, B0) =>
          Math.sin(H * M0 + B0) * 0.6 +
          Math.sin(H * M0 * 2.31 + B0 * 1.7) * 0.4;
      (M.rotation.set(
        I * 0.012 * s0(23, 0.3) + d0 * Math.sin(H * 103),
        I * 0.006 * s0(17, 1.3),
        I * 0.016 * s0(19, 2.1) + d0 * Math.sin(H * 97),
      ),
        M.position.set(
          I * 0.008 * s0(29, 4.1),
          I * 0.012 * s0(31, 0.7) + d0 * Math.sin(H * 101),
          I * 0.006 * s0(27, 2.2),
        ),
        h0.set(
          I * 0.012 * s0(13, 5),
          I * 0.016 * s0(11, 3),
          I * 0.01 * s0(9, 1),
        ),
        r.eyeV.addScaledVector(
          h0.sub(r.eyeO).multiplyScalar(140).addScaledVector(r.eyeV, -14),
          b,
        ),
        r.eyeO.addScaledVector(r.eyeV, b),
        l0.copilot.position.copy(t0.eye).add(r.eyeO));
    }
    (y.updateMatrixWorld(!0),
      M.getWorldPosition(h0),
      r.velInit || (r.lastPos.copy(h0), (r.velInit = !0)),
      b > 0 &&
        (w0.copy(h0).sub(r.lastPos).divideScalar(b),
        r.vel.lerp(w0, 1 - Math.exp(-b * 6))),
      r.lastPos.copy(h0));
    const Se = Qe.copy(h0);
    {
      let I = 0,
        d0 = 8 * U0;
      r.aim &&
        (Ue.copy(M.matrixWorld).invert(),
        w0.copy(r.aim).applyMatrix4(Ue).sub(X.slPivot),
        (I = m0(Math.atan2(w0.x, w0.z), -110 * U0, 110 * U0)),
        (d0 = m0(
          Math.atan2(-w0.y, Math.hypot(w0.x, w0.z)),
          -10 * U0,
          85 * U0,
        )));
      const s0 = 1.6 * b;
      if (
        ((r.pan += m0(I - r.pan, -s0, s0)),
        (r.tilt += m0(d0 - r.tilt, -s0, s0)),
        pe(c0[_.SL_PAN], X.slMount, z0.makeRotationY(r.pan)),
        pe(kt, X.slPivot, z0.makeRotationX(r.tilt)),
        c0[_.SL_TILT].multiplyMatrices(c0[_.SL_PAN], kt),
        V)
      ) {
        if (
          (w0
            .set(X.slPivot.x, X.slPivot.y, X.slPivot.z + 0.12)
            .applyMatrix4(c0[_.SL_TILT])
            .applyMatrix4(M.matrixWorld),
          q0
            .set(0, 0, 1)
            .transformDirection(c0[_.SL_TILT])
            .transformDirection(M.matrixWorld),
          V.position.copy(w0),
          V.target.position.copy(w0).addScaledVector(q0, 20),
          (V.intensity = B.searchIntensity * r.searchK * (r.powerOn ? 1 : 0)),
          V.updateMatrixWorld(),
          V.target.updateMatrixWorld(),
          (Y.beam.visible = B.beamK > 0 && V.intensity > 1),
          Y.beam.visible)
        ) {
          (Y.beam.position.copy(w0),
            Ee.setFromUnitVectors(h0.set(0, 0, -1), q0),
            Y.beam.quaternion.copy(Ee));
          const B0 = 45,
            P0 = Math.tan(V.angle * 0.9) * B0;
          (Y.beam.scale.set(P0, P0, B0),
            (Y.beamMat.uniforms.uK.value = B.beamK * r.searchK));
        }
        a.camera.getWorldPosition(h0);
        const M0 = m0(h0.sub(w0).normalize().dot(q0));
        ((Y.flare.visible = V.intensity > 1 && M0 > 0.3),
          Y.flareMat.uniforms.uPos.value.copy(w0).addScaledVector(q0, 0.06),
          (Y.flareMat.uniforms.uK.value =
            r.searchK * (Math.pow(M0, 8) * 2.2 + Math.pow(M0, 3) * 0.15)),
          w0.copy(X.landing).applyMatrix4(M.matrixWorld),
          q0
            .set(0, -Math.sin(28 * U0), Math.cos(28 * U0))
            .transformDirection(M.matrixWorld),
          p0.position.copy(w0),
          p0.target.position.copy(w0).addScaledVector(q0, 10),
          (p0.intensity =
            B.landingIntensity * r.landingK * (r.powerOn ? 1 : 0)),
          p0.updateMatrixWorld(),
          p0.target.updateMatrixWorld());
      } else ((Y.beam.visible = !1), (Y.flare.visible = !1));
    }
    ((r.power = X0(r.power, r.powerOn ? 1 : 0, r.powerOn ? 6 : 10, b)),
      r.powerOn && (r.bootT += b));
    const me = r.power;
    {
      const I = me * (t ? 0.6 : 1);
      (ne[f0.NAV_L].set(4 * I, 0.12 * I, 0.06 * I, 0),
        ne[f0.NAV_R].set(0.1 * I, 3.4 * I, 0.9 * I, 0),
        ne[f0.NAV_TAIL].set(3 * I, 2.9 * I, 2.6 * I, 0));
      const d0 = (Pe) => {
          const G0 = (H * 1.25 + Pe) % 1;
          return r.beacon
            ? Math.pow(Math.max(0, Math.sin(G0 * Math.PI)), 6)
            : 0;
        },
        s0 = d0(0),
        M0 = d0(0.5);
      (ne[f0.BCN_TOP].set(6 * s0, 0.25 * s0, 0.1 * s0, 0),
        ne[f0.BCN_BELLY].set(6 * M0, 0.25 * M0, 0.1 * M0, 0));
      const B0 = H % 1.3,
        P0 =
          r.strobe && r.rpm > 0.3 && (B0 < 0.04 || (B0 > 0.12 && B0 < 0.16))
            ? 1
            : 0;
      (ne[f0.STROBE_L].set(9 * P0, 9 * P0, 9.5 * P0, 0),
        ne[f0.STROBE_R].set(9 * P0, 9 * P0, 9.5 * P0, 0),
        O.U.uLit.value.setRGB(
          0.9 * s0 + 0.5 * P0,
          0.03 * s0 + 0.5 * P0,
          0.02 * s0 + 0.55 * P0,
        ));
      const Me = V ? V.intensity / B.searchIntensity : 0;
      ne[f0.SEARCH].set(6 * Me, 6.3 * Me, 7 * Me, 0);
      const ve = p0 ? p0.intensity / B.landingIntensity : 0;
      (ne[f0.LANDING].set(5 * ve, 4.8 * ve, 4.4 * ve, 0),
        ne[f0.CABIN].set(0.25 * me, 0.02 * me, 0.015 * me, 0));
      const $0 = (Pe, G0, ot, mo, vo, go, xo = 0) => {
        (U[G0].getWorldPosition(h0), Y.setHalo(Pe, h0, ot, mo, vo, go, xo));
      };
      ($0(0, f0.NAV_L, 2.2 * I, 0.06 * I, 0.03 * I, 0.22),
        $0(1, f0.NAV_R, 0.05 * I, 1.8 * I, 0.5 * I, 0.22),
        $0(2, f0.NAV_TAIL, 1.5 * I, 1.45 * I, 1.3 * I, 0.2),
        $0(3, f0.BCN_TOP, 4 * s0, 0.15 * s0, 0.06 * s0, 0.5),
        $0(4, f0.BCN_BELLY, 4 * M0, 0.15 * M0, 0.06 * M0, 0.5),
        $0(5, f0.STROBE_L, 6 * P0, 6 * P0, 6.5 * P0, 0.8, 1),
        $0(6, f0.STROBE_R, 6 * P0, 6 * P0, 6.5 * P0, 0.8, 1),
        $0(7, f0.LANDING, 3 * ve, 2.9 * ve, 2.7 * ve, 0.6, 1));
      const Be = Math.max(0, 1 - (H - r.sparkT) / 0.35);
      Be > 0.01
        ? (J.position.copy(r.sparkPos),
          J.color.setRGB(1, 0.62, 0.3),
          (J.intensity = 60 * Be * Be),
          (J.distance = 12))
        : r.fire > 0.01
          ? (a0.getWorldPosition(J.position),
            J.color.setRGB(1, 0.42, 0.12),
            (J.intensity =
              30 *
              r.fire *
              (0.75 + 0.25 * Math.sin(H * 23) * Math.sin(H * 7.3))),
            (J.distance = 14))
          : (J.intensity = 0);
      {
        r.groundY == null && (r.groundY = y.position.y);
        const Pe = y.position.y - (B.groundY ?? r.groundY),
          G0 = M0 * (1 - j0(0.3, 2.5, Pe));
        ((Y.pool.visible = G0 > 0.003),
          Y.pool.visible &&
            (U[f0.BCN_BELLY].getWorldPosition(Y.pool.position),
            (Y.pool.position.y = (B.groundY ?? r.groundY) + 0.03),
            Y.pool.scale.set(9, 1, 9),
            (Y.poolMat.uniforms.uK.value = 1.6 * G0)));
      }
    }
    if (k) {
      ((k.uTime.value = H), (k.uPower.value = me), (k.uBoot.value = r.bootT));
      const I = M.matrixWorld.elements,
        d0 = Math.hypot(I[8], I[9], I[10]) || 1,
        s0 = Math.hypot(I[0], I[1], I[2]) || 1,
        M0 = Math.asin(m0(I[9] / d0, -1, 1)),
        B0 = Math.asin(m0(I[1] / s0, -1, 1)),
        P0 = Math.atan2(I[8], -I[10]);
      (k.uAtt.value.set(M0, B0, P0, 0),
        k.uAir.value.set(
          Math.max(
            0,
            Math.hypot(r.vel.x, r.vel.z) * 1.944 +
              (r.rpm > 0.5 ? 2 * Math.sin(H * 1.3) : 0),
          ),
          (Se.y + 32) * 3.281,
          r.vel.y * 196.85,
          Math.max(0, Se.y * 3.281),
        ));
      const Me =
          r.rpm * 100 * (1 + 0.004 * Math.sin(H * 3.1)) +
          r.damage * 3 * Math.sin(H * 9),
        ve = (12 + 72 * r.collective) * j0(0.5, 1, r.rpm),
        $0 = r.warn.has("ENG 1 FIRE");
      (k.uEng.value.set(
        Me,
        Me * 0.995,
        ve * (r.n1[0] > 0.5 ? 1 : 0) + ($0 ? 8 * Math.sin(H * 7) : 0),
        ve * (r.n1[1] > 0.5 ? 1 : 0),
      ),
        k.uEng2.value.set(
          r.n1[0] * 100,
          r.n1[1] * 100,
          r.n1[0] > 0.05
            ? 380 + 420 * r.n1[0] + 120 * r.collective + ($0 ? 260 : 0)
            : 22,
          r.n1[1] > 0.05 ? 380 + 420 * r.n1[1] + 120 * r.collective : 22,
        ),
        k.uMisc.value.set(
          Math.max(0, 410 - H * 0.6),
          9,
          r.damage > 0.5 ? (r.damage - 0.5) * 2 : 0,
          1,
        ),
        k.uMap.value.set(Se.x, Se.z, P0, 900));
      const Be = (G0) =>
          r.warn.has(G0)
            ? H - (r.warnT.get(G0) ?? 0) < 4
              ? Math.sin(H * 12) > -0.3
                ? 1
                : 0.15
              : 1
            : 0,
        Pe = r.warn.size ? (Math.sin(H * 9) > 0 ? 1 : 0.1) : 0;
      if (
        (yt.forEach((G0, ot) => {
          k.uWarn.value[ot] = G0 === "MASTER CAUTION" ? Pe : Be(G0);
        }),
        (k.uMC.value = Pe),
        k.uFire.value.set(
          $0 ? (Math.sin(H * 10) > -0.2 ? 1 : 0.1) : 0,
          r.warn.has("ENG 2 FIRE") ? 1 : 0,
        ),
        k.uSmall.value.set(
          H - r.startT[0] < 6 && r.eng[0] ? 1 : 0,
          H - r.startT[1] < 6 && r.eng[1] ? 1 : 0,
          0,
          0,
        ),
        C)
      ) {
        r0.getWorldPosition(C.position);
        const G0 = r.warn.size ? (0.5 + 0.5 * Math.sin(H * 9)) * 0.6 : 0;
        (C.color.copy(ho).lerp(uo, G0 * 0.7),
          (C.intensity =
            B.glowIntensity *
            me *
            j0(0.8, 2.2, r.bootT) *
            (1 + G0 * 0.6) *
            (r.damage > 0.5 ? 0.85 + 0.15 * Math.sin(H * 31) : 1)));
      }
    }
    if (
      ((u.uPanelLight.value =
        me *
        j0(0.3, 1.2, r.bootT) *
        (r.damage > 0.6 ? 0.8 + 0.2 * Math.sin(H * 37) : 1)),
      g)
    ) {
      const I = g.userData.U;
      ((r.crack = X0(r.crack, r.crackGoal, 5, b)),
        (I.uCrack.value = r.crack),
        (I.uPanel.value.w = k ? k.uPower.value * j0(0.8, 2.2, r.bootT) : 0),
        I.uScrRefl.value.set(
          r.warn.size ? 0.6 : 0,
          k ? k.uMC.value : 0,
          k ? k.uAtt.value.y : 0,
          I.uScrRefl.value.w,
        ));
    }
    {
      const I = Math.max(r.smoke, r.fire * 0.8);
      if (I > 0.01)
        for (
          r.emitAcc += b * (8 + 40 * I),
            e0.getWorldPosition(w0),
            q0.set(0.25, 0.9, -0.4).transformDirection(M.matrixWorld);
          r.emitAcc >= 1;
        )
          ((r.emitAcc -= 1),
            h0
              .copy(q0)
              .multiplyScalar(2.5 + n() * 1.5)
              .addScaledVector(r.vel, 0.25),
            (h0.y -= 4 * r.rpm),
            (h0.x += (n() - 0.5) * 0.8),
            (h0.z += (n() - 0.5) * 0.8),
            Y.puff(w0, h0, {
              size: 0.35 + 0.25 * I,
              grow: 1.3 + 0.8 * I,
              life: 2.2 + 1.6 * I,
              op: 0.55 + 0.4 * I,
              heat: r.fire,
            }));
      else r.emitAcc = 0;
      (a0.getWorldPosition(w0),
        q0.copy(r.vel).multiplyScalar(-1),
        Y.update(b, a.camera, {
          fireAt: w0,
          fireK: r.fire,
          fireWind: q0,
          time: H,
          rendererH: a.renderer?.domElement?.height || 900,
        }),
        (u.uBurn.value = Math.max(u.uBurn.value, r.fire * 0.8)));
    }
    if (
      (a.camera.getWorldPosition(h0),
      O.mesh.getWorldPosition(w0),
      q0.set(0, 1, 0).transformDirection(M.matrixWorld),
      (O.mesh.renderOrder = h0.sub(w0).dot(q0) > 0 ? 7 : 4),
      !N0)
    )
      for (const I of Object.values(i0)) I.intensity = 0;
    (w0.copy(Se), (w0.y += 2.2));
    const tt =
      Math.max(r.doorK[0], r.doorK[1], r.doorK[2] * 0.8, r.doorK[3] * 0.8) *
      m0(0.15 + r.speed / 35) *
      (r.rpm > 0.2 ? 1 : 0.2);
    k0.update(b, {
      rpm: r.rpm,
      n1: Math.max(r.n1[0], r.n1[1]),
      wind: tt,
      horn: r.warn.has("LOW ROTOR RPM"),
      bell: r.warn.has("ENG 1 FIRE") || r.warn.has("ENG 2 FIRE"),
      grind: r.broken ? r.grind : 0,
      pos: w0,
    });
  }),
    (B.warm = () => {
      Y.group.visible = !0;
      for (const b of [
        O.mesh,
        q.mesh,
        Y.smokeMesh,
        Y.sparkMesh,
        Y.fireMesh,
        Y.beam,
        Y.flare,
        Y.pool,
        Y.halos,
      ])
        b.visible = !0;
    }));
  const _t = u.uViewToRest.value;
  return (
    (N.onBeforeRender = (b, K, H) => {
      (_t.copy(M.matrixWorld).invert().multiply(H.matrixWorld),
        g && g.userData.U.uCamRest.value.setFromMatrixPosition(_t),
        u.uDoorsOpen.value.set(
          Math.min(1, r.doorK[0] * 4),
          Math.min(1, r.doorK[1] * 4),
          Math.min(1, r.doorK[2] * 3),
          Math.min(1, r.doorK[3] * 3),
        ));
    }),
    D && (D.onBeforeRender = N.onBeforeRender),
    L &&
      (L.onBeforeRender = (b, K, H) => {
        (z0.copy(M.matrixWorld).invert().multiply(H.matrixWorld),
          g.userData.U.uCamRest.value.setFromMatrixPosition(z0));
      }),
    (B.dispose = () => {
      for (const b of [N, D, u0, L, T, O.mesh, q.mesh])
        b && (b.geometry.dispose(), b.material.dispose());
      (v.userData.depth.dispose(),
        v.userData.distance.dispose(),
        Y.dispose(),
        k0.dispose());
      for (const b of Object.values(i0))
        (o.remove(b), b.target && o.remove(b.target));
      (y.parent?.remove(y), $.parent?.remove($));
    }),
    (B.buildMs = Math.round(performance.now() - c)),
    B.update(0, {}),
    B
  );
}
