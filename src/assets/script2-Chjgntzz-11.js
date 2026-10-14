// assets/script2-Chjgntzz 11 — math
// Lines 2610-3378 of readable/assets/script2-Chjgntzz.pretty.js (statement-aligned).
function buildMotorcycle(p, e = {}) {
  const o = p.game || p,
    r = p.scene || o.scene,
    s =
      e.rng ||
      (() => {
        let R = 7;
        return () => ((R = (R * 16807) % 2147483647), R / 2147483647);
      })(),
    T = performance.now(),
    { K: k, rest: S, shockLen: u } = Eo(s),
    x = Vo(Co()),
    b = x.userData.U;
  b.uShock.value.set(0, K0.top, K0.bot, 0);
  const g = new _t();
  g.name = e.name || "motorcycle";
  const n = new _t();
  ((n.name = "moto_lean"), g.add(n));
  const B = new _t();
  ((B.name = "moto_chassis"), n.add(B));
  const O = new _t();
  ((O.name = "moto_steerFrame"),
    B.add(O),
    S.steer.decompose(O.position, O.quaternion, O.scale));
  const ee = new _t();
  ((ee.name = "moto_steer"), O.add(ee));
  const le = new _t();
  ((le.name = "moto_slider"), ee.add(le));
  const de = new _t();
  ((de.name = "moto_fwheel"), le.add(de));
  const fe = E.FA.clone().applyMatrix4(S.steer.clone().invert());
  de.position.copy(fe);
  const q = new _t();
  ((q.name = "moto_swing"), q.position.copy(E.SW), B.add(q));
  const te = new _t();
  ((te.name = "moto_rwheel"), te.position.copy(E.RA).sub(E.SW), q.add(te));
  const ne = new _t();
  ((ne.name = "moto_shocks"),
    B.add(ne),
    S.shock.decompose(ne.position, ne.quaternion, ne.scale));
  const we = new _t();
  ((we.name = "moto_stand"), we.position.copy(E.stand), B.add(we));
  const _e = new Ue().setFromUnitVectors(new qe(0, -1, 0), w0(!0)),
    We = new Ue().setFromUnitVectors(new qe(0, -1, 0), w0(!1));
  we.quaternion.copy(_e);
  const ze = [],
    J = (R, V, j, xe, Be = !0) => {
      const Ve = R.build(j),
        be = new L0(Ve, x);
      return (
        (be.name = xe),
        (be.castShadow = Be),
        (be.receiveShadow = !0),
        (be.onBeforeShadow = () => {}),
        V.add(be),
        ze.push(be),
        be
      );
    },
    $ = (R) => (R ? R.clone().invert() : null);
  (J(k.body, B, null, "moto_body"),
    J(k.steer, ee, $(S.steer), "moto_bars"),
    J(k.slider, le, $(S.steer), "moto_forklegs"),
    J(k.fwheel, de, $(S.fwheel), "moto_fwheel_mesh"),
    J(k.swing, q, $(S.swing), "moto_swingarm"),
    J(k.rwheel, te, $(S.rwheel), "moto_rwheel_mesh"),
    J(k.shock, ne, $(S.shock), "moto_shock_mesh", !1),
    J(k.stand, we, $(S.stand), "moto_stand_mesh"));
  const ve = Object.values(k).reduce((R, V) => R + V.tris, 0),
    Pe = (R, V, j) => {
      const xe = new yo();
      return ((xe.name = V), xe.position.copy(j), R.add(xe), xe);
    },
    Ie = (R) => R.clone().applyMatrix4($(S.steer)),
    Se = {
      driver: Pe(B, "moto_seat_driver", new qe(0, 0, E.seatZ)),
      passenger: Pe(B, "moto_seat_passenger", E.paxEye),
    },
    je = {
      L: Pe(ee, "moto_grip_L", Ie(E.grip)),
      R: Pe(ee, "moto_grip_R", Ie(new qe(-E.grip.x, E.grip.y, E.grip.z))),
    };
  for (const [R, V] of [
    ["L", 1],
    ["R", -1],
  ]) {
    const j = new qe(V * E.gripAxis.x, E.gripAxis.y, E.gripAxis.z)
      .transformDirection($(S.steer))
      .normalize();
    je[R].quaternion.setFromUnitVectors(new qe(1, 0, 0), j);
  }
  const Ye = {
      L: Pe(B, "moto_peg_L", new qe(E.peg.x, E.peg.y + 0.011, E.peg.z)),
      R: Pe(B, "moto_peg_R", new qe(-E.peg.x, E.peg.y + 0.011, E.peg.z)),
    },
    Xe = Pe(ee, "moto_lens", Ie(E.lens)),
    nt = new qe(0, -Math.sin(0.058), Math.cos(0.058)).transformDirection(
      $(S.steer),
    ),
    rt = Pe(B, "moto_tail", E.tail),
    ae = new wo(16769204, 0, 32, 0.64, 0.72, 2);
  ((ae.name = "moto_headlight"),
    (ae.castShadow = !1),
    (ae.userData.noShadowBudget = !0),
    ae.shadow.mapSize.set(1024, 1024),
    (ae.shadow.camera.near = 0.3),
    (ae.shadow.camera.far = 25),
    (ae.shadow.bias = -0.0012),
    (ae.shadow.normalBias = 0.045),
    (ae.shadow.focus = 1),
    (ae.shadow.autoUpdate = !1),
    (ae.shadow.needsUpdate = !0),
    (ae.userData.actorGain = 1),
    r.add(ae, ae.target));
  const At = new Z0({
      vertexShader: Ko,
      fragmentShader: ea,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      side: bo,
      blending: Q0,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uTime: { value: 0 },
        uK: { value: 0 },
        uColor: { value: new C0(1, 0.9, 0.74) },
        uLen: { value: 16 },
      },
    }),
    it = new go(1, 1, 48, 1, !0);
  (it.translate(0, -0.5, 0), it.rotateX(Math.PI / 2));
  const Oe = new L0(it, At);
  ((Oe.name = "moto_beam"),
    (Oe.frustumCulled = !1),
    (Oe.renderOrder = 21),
    (Oe.visible = !1));
  const Dt = 16,
    Ht = Math.tan(ae.angle * 0.92) * Dt;
  (Oe.scale.set(Ht * 1.15, Ht * 0.62, Dt), r.add(Oe));
  const tt = new Z0({
      vertexShader: ta,
      fragmentShader: oa,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      blending: Q0,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uPos: { value: new qe() },
        uSize: { value: 0.55 },
        uK: { value: 0 },
        uColor: { value: new C0(1, 0.86, 0.66) },
      },
    }),
    Ze = new L0(new f0(1, 1), tt);
  ((Ze.name = "moto_flare"),
    (Ze.frustumCulled = !1),
    (Ze.renderOrder = 22),
    (Ze.visible = !1),
    r.add(Ze),
    e.parent !== null && (e.parent || r).add(g));
  const _ = {
      on: !1,
      onK: 0,
      rpm: 0,
      speed: 0,
      lastSpeed: 0,
      accel: 0,
      lean: 0,
      steer: 0,
      wheelF: 0,
      wheelR: 0,
      s: 0,
      standGoal: 1,
      standK: 1,
      standV: 0,
      yf: 0,
      vf: 0,
      yr: 0,
      vr: 0,
      rfPrev: 0,
      rrPrev: 0,
      bumps: [],
      brake: 0,
      load: 0,
      loadK: 0,
      head: { y: 0, v: 0 },
      t: 0,
      shadowT: 0,
    },
    re = {
      root: g,
      meshes: ze,
      headlight: ae,
      beam: Oe,
      flare: Ze,
      seats: Se,
      grips: je,
      pegs: Ye,
      tail: rt,
      material: x,
      tris: ve,
      G: E,
      seatTopAt: ro,
      get load() {
        return _.load;
      },
      set load(R) {
        _.load = pt(+R || 0);
      },
      parkLean: -0.165,
      paxEye: E.paxEye.clone(),
      headIntensity: 1100,
      engineVol: 1,
      beamK: 0.05,
      bounceK: 0.0011,
      state: {
        lean: 0,
        steer: 0,
        speed: 0,
        front: 0,
        rear: 0,
        wheel: 0,
        on: !1,
        stand: !0,
      },
    },
    ie = o.audio,
    Le = { pos: [0, 0, 0] },
    Pt = (R, V = 0.8, j = {}) => {
      if (e.sound !== !1 && ie?.play)
        try {
          ie.play(R, {
            ...(re.onboard ? {} : { pos: Le.pos, ref: 2 }),
            vol: V,
            ...j,
          });
        } catch {}
    };
  ((re.onboard = !1),
    (re.mix = {
      level: 0.55,
      idle: 0.6,
      cruise: 0.72,
      duck: 0.5,
      dip: -4,
      top: 6500,
    }),
    (re.cruiseId = "moto_cruise_b"));
  const Ke = { id: "moto_start", crank: 0.6, hand: 2.3, fade: 0.7 },
    v = {
      nodes: null,
      building: !1,
      rpm: 0,
      duck: 0,
      ob: 0,
      load: 0.5,
      startK: 1,
      handAt: 0,
      startH: null,
    };
  re._engine = v;
  const wt = (R) => {
      const V = R.getChannelData(0),
        j = V.length,
        xe = R.sampleRate;
      let Be = 0;
      for (; Be < j && Math.abs(V[Be]) < 0.001;) Be++;
      const Ve = Math.round(xe * 0.03),
        be = Math.min(j - 1, Be + Math.round(xe * 0.04)),
        Me = Math.round(xe * 0.02);
      let Ne = 0;
      for (let ye = 0; ye < Me; ye++) Ne += V[be + ye] * V[be + ye];
      let Ee = -2,
        Ce = j - Me - 1;
      for (
        let ye = Math.max(be + Me * 4, j - Math.round(xe * 0.6));
        ye < j - Me - 1;
        ye += 2
      ) {
        let Qe = 0,
          Mt = 0;
        for (let at = 0; at < Me; at += 2)
          ((Qe += V[be + at] * V[ye + at]), (Mt += V[ye + at] * V[ye + at]));
        const et = Qe / Math.sqrt(Ne * Mt * 0.5 + 1e-12);
        et > Ee && ((Ee = et), (Ce = ye));
      }
      const ot = new AudioBuffer({
        length: j,
        numberOfChannels: R.numberOfChannels,
        sampleRate: xe,
      });
      for (let ye = 0; ye < R.numberOfChannels; ye++) {
        const Qe = R.getChannelData(ye),
          Mt = ot.getChannelData(ye);
        Mt.set(Qe);
        for (let et = 0; et < Ve; et++) {
          const at = Math.sin((((et + 0.5) / Ve) * Math.PI) / 2) ** 2;
          Mt[Ce - Ve + et] =
            Qe[Ce - Ve + et] * (1 - at) + Qe[be - Ve + et] * at;
        }
      }
      return { buf: ot, start: be / xe, end: Ce / xe };
    },
    a0 = async () => {
      if (!(
        v.nodes ||
        v.building ||
        e.sound === !1 ||
        !ie?.ctx ||
        !ie.buffer
      )) {
        v.building = !0;
        try {
          const R = ie.ctx,
            V = await ie.buffer(re.cruiseId || "moto_cruise_b"),
            j = R.createGain();
          j.gain.value = 0;
          const Be = {
              eng: ((Ce) => {
                if (!Ce) return null;
                const ot = Ce._seam || (Ce._seam = wt(Ce)),
                  ye = R.createBufferSource();
                ((ye.buffer = ot.buf),
                  (ye.loop = !0),
                  (ye.loopStart = ot.start),
                  (ye.loopEnd = ot.end));
                const Qe = R.createGain();
                return (
                  (Qe.gain.value = 0),
                  ye.connect(Qe),
                  Qe.connect(j),
                  ye.start(
                    R.currentTime + 0.02,
                    ot.start + Math.random() * (ot.end - ot.start),
                  ),
                  { s: ye, g: Qe, norm: Ce._norm ?? 1 }
                );
              })(V),
            },
            Ve = R.createBiquadFilter();
          ((Ve.type = "peaking"),
            (Ve.frequency.value = 1700),
            (Ve.Q.value = 0.8),
            (Ve.gain.value = re.mix.dip));
          const be = R.createBiquadFilter();
          ((be.type = "lowpass"),
            (be.frequency.value = re.mix.top),
            (be.Q.value = 0.6),
            j.connect(Ve),
            Ve.connect(be));
          const Me = R.createPanner();
          ((Me.panningModel = "HRTF"),
            (Me.distanceModel = "inverse"),
            (Me.refDistance = 2),
            (Me.rolloffFactor = 1.1),
            (Me.maxDistance = 60));
          const Ne = R.createGain(),
            Ee = R.createGain();
          ((Ne.gain.value = 1),
            (Ee.gain.value = 0),
            be.connect(Ne),
            Ne.connect(Me),
            Me.connect(ie.bus.sfx),
            be.connect(Ee),
            Ee.connect(ie.bus.sfx),
            (v.nodes = {
              c: R,
              L: Be,
              mix: j,
              top: be,
              pan: Me,
              gP: Ne,
              gD: Ee,
            }));
        } catch {
          v.nodes = null;
        }
        ((v.building = !1), _.on || K(0.05));
      }
    },
    K = (R = 0.5) => {
      const V = v.nodes;
      if (V) {
        v.nodes = null;
        try {
          const j = V.c.currentTime;
          (V.mix.gain.cancelScheduledValues(j),
            V.mix.gain.setTargetAtTime(0, j, R / 3));
          for (const xe of Object.values(V.L)) xe?.s.stop(j + R * 1.6);
        } catch {}
        setTimeout(
          () => {
            try {
              (V.gP.disconnect(), V.gD.disconnect(), V.pan.disconnect());
            } catch {}
          },
          R * 1600 + 200,
        );
      }
    },
    s0 = (R, V) => {
      _.on && !v.nodes && !v.building && ie?.ctx && a0();
      const j = v.nodes;
      if (!j) return;
      const xe = Math.abs(V);
      ((v.rpm = vt(
        v.rpm,
        _.on ? Yt(1.5, 10, xe) + (_.rev || 0) * 0.5 : 0,
        2.5,
        R,
      )),
        (v.load = vt(
          v.load,
          _.accel > 0.4 ? 1 : _.accel < -0.6 ? 0.15 : 0.5,
          4,
          R,
        )));
      const Be = ie.speaking ? 1 : 0;
      ((v.duck = vt(v.duck, Be, Be ? 10 : 2.2, R)),
        (v.ob = vt(v.ob, re.onboard ? 1 : 0, 6, R)));
      const Ve = Yt(0.35, 2.4, xe),
        be = j.c.currentTime,
        Me = (ot, ye, Qe = 0.04) => {
          try {
            ot.setTargetAtTime(ye, be, Qe);
          } catch {}
        },
        Ne = re.mix,
        Ee = j.L;
      if (v.handAt && be >= v.handAt) {
        v.handAt = 0;
        try {
          (v.startH?.gain.gain.setTargetAtTime(0, be, Ke.fade / 3),
            v.startH?.source.stop(be + Ke.fade * 2));
        } catch {}
        v.startH = null;
      }
      ((v.startK = vt(
        v.startK,
        v.handAt ? 0 : 1,
        v.handAt ? 30 : 1 / (Ke.fade / 3),
        R,
      )),
        Ee.eng &&
          (Me(
            Ee.eng.g.gain,
            Ee.eng.norm *
              (Ne.idle * (1 - Ve) + Ne.cruise * Ve * (0.84 + 0.24 * v.load)),
          ),
          Me(
            Ee.eng.s.playbackRate,
            0.8 + 0.3 * v.rpm + 0.03 * (v.load - 0.5),
            0.12,
          )),
        Me(
          j.mix.gain,
          Ne.level *
            _.onK *
            v.startK *
            (re.engineVol ?? 1) *
            (1 - Ne.duck * v.duck),
          0.06,
        ),
        Me(j.top.frequency, Ne.top, 0.1),
        Me(j.gP.gain, 1 - v.ob, 0.08),
        Me(j.gD.gain, v.ob, 0.08));
      const Ce = j.pan;
      ((Ce.positionX.value = Le.pos[0]),
        (Ce.positionY.value = Le.pos[1]),
        (Ce.positionZ.value = Le.pos[2]));
    };
  (Object.defineProperty(re, "on", { get: () => _.on }),
    (re.setOn = (R, { quiet: V = !1 } = {}) => {
      if (((R = !!R), R !== _.on))
        if (((_.on = R), R))
          ((_.crank = V ? 0 : Ke.crank),
            (v.startK = V ? 1 : 0),
            (v.handAt = 0),
            (v.startH = null),
            !V &&
              e.sound !== !1 &&
              ie?.ctx &&
              ie.buffer &&
              (ie.buffer(Ke.id).then((j) => {
                !_.on ||
                  !j ||
                  !ie.ctx ||
                  ((v.startH = ie.play(Ke.id, {
                    ...(re.onboard ? {} : { pos: Le.pos, ref: 2 }),
                    vol: 0.9,
                  })),
                  (v.handAt = ie.ctx.currentTime + Ke.hand));
              }),
              (v.handAt = 1e9)),
            a0());
        else {
          ((_.crank = 0), (v.handAt = 0));
          try {
            v.startH?.stop(0.15);
          } catch {}
          ((v.startH = null),
            V || Pt(_.speed > 2 ? "moto_stop" : "moto_off", 0.85),
            K(V ? 0.2 : 0.35));
        }
    }),
    (re.kickstand = (R) => {
      const V = R ? 1 : 0;
      V !== _.standGoal && ((_.standGoal = V), Pt("moto_stand", 0.6));
    }),
    (re.rev = (R = 1) => {
      _.rev = Math.max(_.rev || 0, R);
    }),
    (re.takeShadow = (R) =>
      _.lent || !R || !R.castShadow || ae.castShadow
        ? !1
        : ((R.castShadow = !1),
          (ae.castShadow = !0),
          (ae.shadow.needsUpdate = !0),
          (_.lent = R),
          !0)),
    (re.returnShadow = () => {
      _.lent &&
        ((ae.castShadow = !1),
        (_.lent.castShadow = !0),
        (_.lent.shadow.needsUpdate = !0),
        (_.lent = null));
    }));
  const ht = new qe(),
    ft = new qe(),
    Gt = new Ue(),
    n0 = new Ae(),
    r0 = new qe(),
    qt = E.WB;
  re.update = (R, V = {}) => {
    ((R = Math.min(Math.max(R || 0, 0), 0.1)), (_.t += R));
    const j = V.speed ?? 0;
    ((_.accel = vt(_.accel, R > 0 ? (j - _.lastSpeed) / R : 0, 6, R)),
      (_.lastSpeed = j),
      (_.speed = j));
    let xe = V.steer,
      Be = V.lean;
    if (V.yawRate != null) {
      const Te = Math.max(Math.abs(j), 0.6);
      (xe == null && (xe = Math.atan((qt * V.yawRate) / Te)),
        Be == null && (Be = -Math.atan((j * V.yawRate) / 9.81)));
    }
    ((xe = pt(xe ?? 0, -0.75, 0.75)),
      (Be = pt(Be ?? 0, -0.75, 0.75)),
      (_.steer = vt(_.steer, xe, 18, R)),
      (_.standV += ((_.standGoal - _.standK) * 260 - _.standV * 22) * R),
      (_.standK = pt(_.standK + _.standV * R, -0.05, 1.05)));
    const Ve = Yt(0.2, 0.8, _.loadK),
      be = Yt(0.6, 1, _.standK) * (1 - Ve) * (1 - Yt(0.3, 1.2, Math.abs(j)));
    ((_.lean = vt(_.lean, Be + re.parkLean * be, 10, R)),
      (_.loadK = vt(_.loadK, _.load, 3.5, R)),
      (_.s += j * R),
      V.bump > 0.01 &&
        (_.bumps.push({ s: _.s + 0.05, h: 0.085 * pt(V.bump), w: 0.45 }),
        _.bumps.length > 6 && _.bumps.shift(),
        V.bump > 0.55 &&
          _.t - (_.bumpT ?? -9) > 0.6 &&
          ((_.bumpT = _.t), Pt("moto_bump", 0.2 + 0.3 * V.bump))));
    const Me = 0.006 + 0.01 * Yt(1, 9, Math.abs(j)),
      Ne = (Te) => {
        let st =
          (to(Te * 1.7) - 0.5) * Me + (to(Te * 4.1 + 9) - 0.5) * Me * 0.5;
        for (const bt of _.bumps) {
          const It = (Te - bt.s) / bt.w;
          It > -1 &&
            It < 1 &&
            (st += bt.h * 0.5 * (1 + Math.cos(Math.PI * It)));
        }
        return st;
      };
    for (; _.bumps.length && _.s - _.bumps[0].s > qt + 1;) _.bumps.shift();
    const Ee = Ne(_.s),
      Ce = Ne(_.s - qt),
      ot = R > 0 ? (Ee - _.rfPrev) / R : 0,
      ye = R > 0 ? (Ce - _.rrPrev) / R : 0;
    ((_.rfPrev = Ee), (_.rrPrev = Ce));
    const Qe = pt(V.brake ?? (_.accel < -1.5 ? Yt(1.5, 5, -_.accel) : 0));
    _.brake = vt(_.brake, Qe, 8, R);
    const Mt = pt(-_.accel * 0.006, -0.025, 0.035) + _.brake * 0.012,
      et = 2 * Math.PI * 1.7,
      at = 2 * Math.PI * 1.5,
      g0 = 0.42,
      i0 = 0.48,
      St = Math.max(1, Math.ceil(R / (1 / 120))),
      xt = R / St;
    for (let Te = 0; Te < St; Te++)
      ((_.vf += (et * et * (Ee - Mt - _.yf) + 2 * g0 * et * (ot - _.vf)) * xt),
        (_.yf += _.vf * xt),
        (_.vr +=
          (at * at * (Ce + Mt * 0.6 - _.yr) + 2 * i0 * at * (ye - _.vr)) * xt),
        (_.yr += _.vr * xt));
    const R0 = (1 - _.loadK) * -0.032,
      U = (1 - _.loadK) * -0.042,
      l0 = pt(Ee - _.yf + R0, -0.06, E.fTravel),
      Tt = pt(Ce - _.yr + U, -0.07, E.rTravel),
      y = Ee - l0 * Math.cos(E.RAKE),
      Ut = Ce - Tt;
    ((_.onK = vt(_.onK, _.on ? 1 : 0, _.on ? 4 : 5, R)),
      (_.rpm = vt(
        _.rpm,
        _.on ? pt(0.25 + Math.abs(j) / 14 + (_.rev || 0) * 0.5) : 0,
        5,
        R,
      )),
      (_.rev = Math.max(0, (_.rev || 0) - R * 1.6)));
    const c0 =
      _.onK *
      (9e-4 * Math.sin(_.t * 2 * Math.PI * (17 + 30 * _.rpm)) +
        5e-4 * Math.sin(_.t * 2 * Math.PI * (23 + 41 * _.rpm)));
    (B.position.set(0, (y + Ut) / 2 + c0, 0),
      B.rotation.set(-(y - Ut) / qt, 0, c0 * 0.4),
      (n.rotation.z = _.lean),
      (ee.rotation.y = _.steer),
      le.position.set(0, l0, 0),
      (_.wheelF += (j * R) / E.RF),
      (_.wheelR += (j * R) / E.RR),
      (de.rotation.x = _.wheelF % (Math.PI * 2)));
    {
      const Te = E.RA.clone().sub(E.SW),
        st = Math.hypot(Te.y, Te.z),
        bt = Math.asin(Te.y / st),
        It = pt((Te.y + Tt) / st, -0.99, 0.99);
      ((q.rotation.x = Math.asin(It) - bt),
        (te.rotation.x = _.wheelR % (Math.PI * 2)),
        ht
          .set(0, E.shockBot.y, E.shockBot.z)
          .sub(E.SW)
          .applyAxisAngle(new qe(1, 0, 0), q.rotation.x)
          .add(E.SW),
        ft.set(0, E.shockTop.y, E.shockTop.z));
      const Qt = ht.sub(ft),
        I0 = Qt.length();
      (ne.rotation.set(Math.atan2(-Qt.z, -Qt.y), 0, 0),
        (b.uShock.value.x = u - I0));
    }
    (Gt.copy(_e).slerp(We, pt(1 - _.standK)), we.quaternion.copy(Gt));
    {
      const Te = _.head,
        st = (y + Ut) / 2;
      ((Te.v += ((st - Te.y) * 160 - Te.v * 16) * R),
        (Te.y += Te.v * R),
        Se.passenger.position.set(
          re.paxEye.x,
          re.paxEye.y + (Te.y - st) * 0.6,
          re.paxEye.z,
        ),
        Se.passenger.rotation.set(
          -B.rotation.x * 0.6,
          0,
          -_.lean * 0.25,
          "YXZ",
        ));
    }
    _.crank > 0 && (_.crank = Math.max(0, _.crank - R));
    const A0 =
        _.crank > 0 ? 0.42 + 0.18 * Math.sin(_.t * 47) * Math.sin(_.t * 13) : 1,
      Bt =
        _.onK *
        A0 *
        (0.74 + 0.26 * _.rpm) *
        (1 - 0.04 * _.onK * (1 - _.rpm) * (0.5 + 0.5 * Math.sin(_.t * 31)));
    ((b.uHead.value = Bt),
      (b.uTail.value = _.onK * (0.55 + 0.9 * _.brake)),
      (ae.intensity = re.headIntensity * Bt),
      g.updateMatrixWorld(!0),
      Xe.getWorldPosition(ht),
      ae.position.copy(ht),
      ft.copy(nt).transformDirection(Xe.parent.matrixWorld),
      ae.position.addScaledVector(ft, -0.035),
      ae.target.position.copy(ae.position).addScaledVector(ft, 10),
      ae.updateMatrixWorld(),
      ae.target.updateMatrixWorld());
    {
      const Te = g.position.y,
        st = Math.max(0.2, ht.y - Te),
        bt = Math.min(7, ft.y < -0.03 ? st / -ft.y : 7) * 0.75;
      (b.uBouncePos.value.copy(ht).addScaledVector(ft, bt),
        (b.uBouncePos.value.y = Te + 0.05),
        b.uBounce.value
          .copy(ae.color)
          .multiplyScalar(ae.intensity * re.bounceK));
    }
    if (
      (ae.intensity > 0.5 &&
        ae.castShadow &&
        ((_.shadowT -= R),
        (Math.abs(j) > 0.05 ||
          Math.abs(_.steer - (_.lastSteer ?? 0)) > 0.001 ||
          _.shadowT <= 0 ||
          !ae.shadow.map) &&
          ((ae.shadow.needsUpdate = !0), (_.shadowT = 0.5))),
      (_.lastSteer = _.steer),
      (Oe.visible = ae.intensity > 1),
      Oe.visible &&
        (Oe.position.copy(ht),
        Gt.setFromUnitVectors(new qe(0, 0, -1), ft),
        Oe.quaternion.copy(Gt),
        Oe.rotateZ(-_.lean),
        (At.uniforms.uTime.value += R),
        (At.uniforms.uK.value = re.beamK * Bt)),
      (Ze.visible = ae.intensity > 1),
      Ze.visible)
    ) {
      (tt.uniforms.uPos.value.copy(ht).addScaledVector(ft, 0.012),
        o.camera.getWorldPosition(r0));
      const st = r0.sub(ht).normalize(),
        bt = pt(st.dot(ft));
      tt.uniforms.uK.value =
        Bt * (Math.pow(bt, 6) * 1.6 + Math.pow(bt, 2) * 0.12);
    }
    ((Le.pos[0] = (ht.x + g.position.x) / 2),
      (Le.pos[1] = g.position.y + 0.45),
      (Le.pos[2] = (ht.z + g.position.z) / 2),
      s0(R, j));
    const lt = re.state;
    ((lt.lean = _.lean),
      (lt.steer = _.steer),
      (lt.speed = j),
      (lt.front = l0),
      (lt.rear = Tt),
      (lt.wheel = _.wheelR),
      (lt.on = _.on),
      (lt.stand = _.standK > 0.5),
      (lt.chassisY = B.position.y),
      (lt.pitch = B.rotation.x),
      (lt.rpm = _.rpm),
      (lt.brake = _.brake));
  };
  const Zt = new Ue(),
    b0 = new Ue();
  return (
    (re.carryCamera = (R, V = 0, j = 0) => {
      (g.updateMatrixWorld(!0),
        Se.passenger.getWorldPosition(R.position),
        Se.passenger.getWorldQuaternion(R.quaternion),
        Zt.setFromAxisAngle(new qe(0, 1, 0), Math.PI + V),
        b0.setFromAxisAngle(new qe(1, 0, 0), j),
        R.quaternion.multiply(Zt).multiply(b0),
        R.updateMatrixWorld());
    }),
    (re.toBike = (R, V = new qe()) => (
      g.updateMatrixWorld(!0),
      n0.copy(B.matrixWorld).invert(),
      V.copy(R).applyMatrix4(n0)
    )),
    (re.dispose = () => {
      for (const R of ze) R.geometry.dispose();
      (K(0.05),
        x.dispose(),
        At.dispose(),
        it.dispose(),
        tt.dispose(),
        Ze.geometry.dispose(),
        r.remove(ae, ae.target, Oe, Ze),
        g.parent?.remove(g));
    }),
    (re.buildMs = Math.round(performance.now() - T)),
    re.update(0, { speed: 0 }),
    re
  );
}
