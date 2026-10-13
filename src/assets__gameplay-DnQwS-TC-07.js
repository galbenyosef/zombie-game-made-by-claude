// assets__gameplay-DnQwS-TC 07 — math
// Lines 2221-2814 of readable/assets__gameplay-DnQwS-TC.pretty.js (statement-aligned).
function pi(o) {
  const { scene: t, camera: i, player: e } = o;
  t.add(i);
  const s = {
      has: { torch: !1, pistol: !1 },
      ammo: 12,
      mag: 12,
      reserve: 48,
      on: !0,
      aim: 0,
      state: "idle",
      stateT: 0,
      lastShot: -9,
      kick: 0,
      reloadT: 0,
      sway: new O(),
      bobK: 0,
      drawK: 0,
      cooldown: 0.17,
    },
    l = new Cs(16773336, 26, 30, 0.44, 0.62, 1.5);
  ((l.castShadow = !0),
    l.shadow.mapSize.set(1536, 1536),
    (l.shadow.camera.near = 0.12),
    (l.shadow.camera.far = 26),
    (l.shadow.bias = -35e-5),
    (l.shadow.normalBias = 0.015),
    (l.shadow.focus = 1),
    (l.map = ci()),
    (l.userData.noActor = !1),
    (l.name = "torch"),
    t.add(l, l.target));
  const n = new At().copy(i.quaternion);
  let r = 0,
    h = 0,
    a = 0;
  const y = ai(o, l),
    g = new de();
  ((g.name = "viewmodel"), i.add(g));
  const w = jt(new qt({ color: 13146748, roughness: 0.62, metalness: 0 })),
    _ = jt(new qt({ color: 1578778, roughness: 0.72, metalness: 0 })),
    c = jt(new qt({ color: 14268323, roughness: 0.3 })),
    k = jt(new qt({ color: 1777707, roughness: 0.92, metalness: 0 })),
    K = -0.004,
    Y = jt(new qt({ color: 13146748, roughness: 0.62, metalness: 0 }), K),
    F = jt(new qt({ color: 1578778, roughness: 0.72, metalness: 0 }), K),
    X = [],
    J = (z, I = 0.6) => (
      z.metalness > 0.5 && ((z.userData.vmK = I), X.push(z)),
      z
    );
  let U, N;
  const T = () => {
      const z = t.environment || null,
        I = t.environmentIntensity ?? 1;
      if (!(z === U && I === N)) {
        ((U = z), (N = I));
        for (const E of X)
          ((E.envMap = z), (E.envMapIntensity = Math.max(E.userData.vmK, I)));
      }
    },
    f = Es();
  f.group.traverse((z) => {
    if (z.isMesh) {
      ((z.castShadow = !1), (z.frustumCulled = !1));
      const I = Array.isArray(z.material) ? z.material : [z.material];
      for (let E = 0; E < I.length; E++) {
        const st = I[E].clone();
        ((st.userData.pk = "p"), jt(st), J(st), (I[E] = st));
      }
      z.material = Array.isArray(z.material) ? I : I[0];
    }
  });
  const b = new de();
  ((b.name = "gunRoot"),
    g.add(b),
    b.add(f.group),
    (f.group.rotation.y = Math.PI),
    f.group.updateMatrix(),
    f.mag.parent.updateMatrix(),
    (b.visible = !1));
  function L(z, I = [w, _, c]) {
    const E = Os(z, 0),
      st = Ys(Ds, E, 0, z + "|0.000"),
      nt = new de(),
      Pt = new Vt(st.skin, I[0]),
      vt = new Vt(st.glove, I[1]),
      rt = new Vt(st.nails, I[2]);
    for (const Lt of [Pt, vt, rt]) ((Lt.frustumCulled = !1), nt.add(Lt));
    return nt;
  }
  let v, R, W;
  {
    const z = Math.cos((18 * Math.PI) / 180),
      I = Math.sin((18 * Math.PI) / 180),
      E = L("pistol"),
      st = new It().makeBasis(new O(0, z, I), new O(-1, 0, 0), new O(0, -I, z));
    (st.setPosition(-0.026, 0.01584, -0.09423),
      (E.matrixAutoUpdate = !1),
      E.matrix.copy(st),
      f.group.add(E));
    const nt = new Vt(new Ke(0.031, 0.043, 0.9, 24, 1, !0), k);
    (nt.geometry.rotateX(Math.PI / 2),
      nt.geometry.translate(0, 0, -0.47),
      (nt.rotation.x = -0.5),
      (nt.rotation.y = 0.3),
      (nt.frustumCulled = !1),
      (nt.material.side = Xe),
      E.add(nt),
      (v = E),
      (R = nt));
  }
  const C = new de();
  ((C.name = "torchVM"), g.add(C));
  const j = new It().compose(
      new O(-0.19, -0.16, -0.37),
      new At().setFromEuler(new pe(0.03, 0.14, 0.02)),
      new O(1, 1, 1),
    ),
    u = new vs({ color: new Me().setRGB(3, 2.7, 2.2), toneMapped: !1 });
  {
    const z = J(
        jt(new qt({ color: 5659488, metalness: 1, roughness: 0.34 })),
        0.5,
      ),
      I = jt(new qt({ color: 921103, roughness: 0.85 })),
      E = (Se, Te, Ae, me, Be) => {
        const Pe = new Ke(Se, Te, Ae, 28);
        Pe.rotateX(Math.PI / 2);
        const te = new Vt(Pe, Be);
        return ((te.position.z = me), (te.frustumCulled = !1), C.add(te), te);
      };
    (E(0.0155, 0.0155, 0.12, 0, z),
      E(0.0165, 0.0165, 0.085, -0.008, I),
      E(0.0255, 0.0165, 0.045, -0.085, z),
      E(0.0262, 0.0262, 0.012, -0.11, z));
    const st = new Ls(0.0235, 28),
      nt = new Vt(st, u);
    ((nt.rotation.y = Math.PI),
      (nt.position.z = -0.1165),
      (nt.frustumCulled = !1),
      C.add(nt),
      E(0.0148, 0.0148, 0.02, 0.075, z));
    const Pt = L("torch", [Y, F, c]),
      vt = new O(0, 0, -1),
      rt = new O(0.64, -0.77, 0).normalize(),
      Lt = new O().crossVectors(vt, rt).multiplyScalar(-1),
      ne = new It().makeBasis(vt, rt, Lt);
    (ne.setPosition(
      new O(0, 0, -0.005).addScaledVector(rt, 0.022).addScaledVector(Lt, -0.06),
    ),
      (Pt.matrixAutoUpdate = !1),
      Pt.matrix.copy(ne),
      C.add(Pt));
    const Gt = new Vt(new Ke(0.045, 0.034, 0.9, 24, 1, !0), k);
    (Gt.geometry.rotateX(Math.PI / 2), Gt.geometry.translate(0, 0, 0.43));
    const Jt = new O().setFromMatrixPosition(ne),
      _e = new O(-0.32, -0.52, -0.24).applyMatrix4(j.clone().invert());
    (Gt.position.copy(Jt),
      Gt.quaternion.setFromUnitVectors(new O(0, 0, 1), _e.sub(Jt).normalize()),
      (Gt.frustumCulled = !1),
      (Gt.material.side = Xe),
      C.add(Gt),
      (W = Gt));
  }
  (C.position.set(-0.19, -0.16, -0.37),
    C.rotation.set(0.03, 0.14, 0.02),
    (C.visible = !1),
    T());
  const m = {
      hip: { p: new O(0.155, -0.175, -0.36), r: new O(0.06, -0.11, 0) },
      ads: { p: new O(0, -0.096, -0.28), r: new O(0, 0, 0) },
      drop: { p: new O(0.085, -0.035, -0.32), r: new O(0.25, 0.25, -0.6) },
      load: { p: new O(0.07, -0.04, -0.3), r: new O(0.3, 0.35, -0.8) },
      hidden: { p: new O(0.2, -0.5, -0.3), r: new O(0.9, -0.1, 0.1) },
    },
    d = { p: m.hidden.p.clone(), r: m.hidden.r.clone() },
    x = new O(),
    A = new O(),
    q = new pe(),
    Z = new O(),
    $ = {
      fetch: {
        p: new O(-0.12, -0.38, -0.2),
        q: new At().setFromEuler(new pe(-0.9, 0.3, 0.2)),
      },
      load: new O(0.05, -0.1, -0.2),
      pinch: new O(0.025, 0.012, -0.045),
      hold: [0.07, 0.118],
    },
    lt = f.magClone();
  ((lt.group.visible = !1), t.add(lt.group));
  const zt = f.magClone();
  ((zt.group.visible = !1), (zt.group.matrixAutoUpdate = !1), C.add(zt.group));
  const ot = { on: !1, t: 0, v: new O(), w: new O() },
    Ft = new It(),
    p = new It();
  {
    const z = (E) => new At().setFromEuler(new pe(E.x, E.y, E.z)),
      I = z(m.load.r)
        .multiply(new At().setFromAxisAngle(new O(0, 1, 0), Math.PI))
        .multiply(new At().setFromAxisAngle(new O(1, 0, 0), Ye));
    (Ft.compose($.pinch, z($.load).invert().multiply(I), new O(1, 1, 1)),
      p.copy(Ft).invert());
  }
  const P = new It(),
    M = new It(),
    G = new O(),
    S = (z, I) =>
      I.multiplyMatrices(b.matrix, f.group.matrix)
        .multiply(f.mag.parent.matrix)
        .multiply(M.makeTranslation(0, -z, 0)),
    V = (z, I) => {
      const E = lt.group;
      (S(ps, P)
        .premultiply(g.matrix)
        .premultiply(i.matrixWorld)
        .decompose(E.position, E.quaternion, G),
        ot.v.set(0, -1, 0).applyQuaternion(E.quaternion).multiplyScalar(z),
        e.vel && ((ot.v.x += e.vel.x), (ot.v.z += e.vel.z)),
        ot.w.set(
          4 + Math.random() * 3,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 3,
        ),
        (ot.t = 0),
        (ot.on = !0),
        lt.show(I));
    },
    B = new At(),
    tt = new O(),
    ct = (z) => {
      const I = lt.group;
      if (ot.on) {
        ((ot.t += z),
          (ot.v.y -= 9.8 * z),
          I.position.addScaledVector(ot.v, z),
          tt.copy(ot.w).multiplyScalar(z));
        const E = tt.length();
        (E > 1e-6 &&
          I.quaternion.multiply(B.setFromAxisAngle(tt.divideScalar(E), E)),
          (I.position.y < e.pos.y + 0.1 || ot.t > 1.5) && (ot.on = !1));
      }
      I.visible = ot.on && g.visible;
    },
    ut = new At().setFromRotationMatrix(v.matrix),
    mt = (z, I, E, st) => {
      const nt = I.clone()
        .applyQuaternion(z.quaternion)
        .applyQuaternion(new At().setFromRotationMatrix(E));
      return {
        mesh: z,
        axis: I,
        q0: z.quaternion.clone(),
        elbow: z.position.clone().applyMatrix4(E).addScaledVector(nt, 0.28),
        drop: st,
      };
    },
    yt = (z, I) =>
      new It().compose(
        z,
        new At().setFromEuler(new pe(I.x, I.y, I.z)),
        new O(1, 1, 1),
      ),
    Mt = mt(
      R,
      new O(0, 0, -1),
      yt(m.hip.p, m.hip.r).multiply(f.group.matrix).multiply(v.matrix),
      new O(0.05, -0.12, 0.08),
    ),
    bt = mt(W, new O(0, 0, 1), j, new O(0, 0, 0)),
    ft = new At(),
    kt = new At(),
    Rt = new At(),
    Ct = new O(),
    $t = new O(),
    Qt = new It(),
    Xt = (z, I, E, st) => {
      if (st <= 0) {
        z.mesh.quaternion.copy(z.q0);
        return;
      }
      (Ct.copy(z.mesh.position).applyMatrix4(I),
        ft.setFromUnitVectors(
          z.axis,
          $t.copy(z.elbow).addScaledVector(z.drop, st).sub(Ct).normalize(),
        ),
        z.mesh.quaternion
          .copy(z.q0)
          .slerp(kt.copy(E).invert().multiply(ft), st));
    },
    H = new O(),
    at = new O(),
    Q = new O(),
    et = new At(),
    Wt = new O(),
    gt = new At(),
    Kt = new O(),
    Et = new At(),
    oe = new At(),
    Ot = new O(),
    we = new O(),
    ae = [];
  return (
    (s.onFire = (z) => ae.push(z)),
    (s.give = (z) => {
      ((s.has[z] = !0),
        z === "torch" && (C.visible = !0),
        z === "pistol" &&
          ((s.state = "draw"),
          (s.stateT = 0),
          (b.visible = !0),
          o.audio.play("pickup_item", { vol: 0.6 })));
    }),
    (s.toggleTorch = () => {
      ((s.on = !s.on), o.audio.play("flashlight_click", { vol: 0.5 }));
    }),
    (s.canFire = () =>
      s.has.pistol &&
      s.state === "idle" &&
      s.ammo > 0 &&
      o.time - s.lastShot >= s.cooldown &&
      !e.frozen),
    (s.reload = () => {
      !s.has.pistol ||
        s.state !== "idle" ||
        s.ammo === s.mag ||
        s.reserve <= 0 ||
        ((s.state = "reload"),
        (s.stateT = 0),
        (s._empty = s.ammo === 0),
        (s._cues = 0),
        (s._seated = s._dropped = !1));
    }),
    (s.fire = () => {
      if (!s.has.pistol || e.frozen || s.state === "draw") return !1;
      if (s.ammo <= 0)
        return (
          o.time - s.lastShot > 0.25 &&
            (o.audio.play("gun_dry_fire", { vol: 0.7 }), (s.lastShot = o.time)),
          s.reload(),
          !1
        );
      if (!s.canFire()) return !1;
      (s.ammo--, (s.lastShot = o.time), (s.kick = 1), f.setSlide(1));
      const z = new O(),
        I = new O();
      (i.getWorldPosition(z), i.getWorldDirection(I));
      const E = new O(),
        st = new O();
      (f.group.updateWorldMatrix(!0, !0), f.muzzleWorld(E, st));
      const nt = Ne(0.014, 0.004, s.aim);
      for (const Pt of ae)
        Pt({
          origin: z,
          dir: I,
          muzzle: E,
          muzzleDir: st,
          spread: nt,
          player: !0,
        });
      return (
        (e.recoil.pitch += 0.016 + Math.random() * 0.006),
        (e.recoil.yaw += (Math.random() - 0.5) * 0.008),
        (e.shake += 0.3),
        s.ammo === 0 && (s._autoAt = o.time + 0.35),
        !0
      );
    }),
    (s.update = (z) => {
      const I = o.input,
        E = I.locked || o.service;
      ((s.stateT += z), T(), I.consume("KeyF") && s.toggleTorch());
      const st = Zt(e.moving / 3.4);
      (n.slerp(i.quaternion, 1 - Math.exp(-(14 - 5 * Zt(st)) * z)),
        (r = Dt(r, 0, 5, z)));
      const nt = s.has.torch && s.on && h <= 0 && !s.suppress;
      ((a = Dt(a, nt ? 1 : 0, s.suppress ? 6 : 22, z)),
        a < 0.004 && (a = 0),
        (l.visible = !0),
        (l.shadow.autoUpdate = a > 0),
        l.shadow.map || (l.shadow.needsUpdate = !0),
        (C.visible = s.has.torch),
        i.updateWorldMatrix(!0, !1),
        (l.intensity = 26 * a * (1 - 0.35 * r) * (s.torchMul ?? 1)),
        u.color.setRGB(s.on ? 3 : 0.05, s.on ? 2.7 : 0.05, s.on ? 2.2 : 0.05));
      let Pt = 0;
      (E &&
        s.has.pistol &&
        I.down("Mouse2") &&
        (s.state === "idle" || s.state === "fire") &&
        (Pt = 1),
        (s.aim = Dt(s.aim, Pt, 14, z)),
        s.state === "draw" &&
          ((s.drawK = Zt(s.stateT / 0.55)),
          s.stateT > 0.55 && ((s.state = "idle"), (s.drawK = 1))),
        s._autoAt && o.time >= s._autoAt && ((s._autoAt = 0), s.reload()),
        s.state === "reload" && !s.has.pistol && (s.state = "idle"));
      const vt = s.state === "reload",
        rt = s.stateT,
        Lt = !!s._empty;
      if (vt) {
        if (
          (ri.forEach(([xt, Tt, Bt], ye) => {
            rt >= Tt &&
              !(s._cues & (1 << ye)) &&
              (Lt || !Bt) &&
              ((s._cues |= 1 << ye), o.audio.play(xt, { vol: 0.7 }));
          }),
          rt >= it.seat && !s._seated)
        ) {
          s._seated = !0;
          const xt = Math.min(s.mag - s.ammo, s.reserve);
          ((s.ammo += xt), (s.reserve -= xt));
        }
        rt >= (Lt ? it.end : it.endTac) && (s.state = "idle");
      }
      (E &&
        (I.down("Mouse0") && s.state === "idle" && s.fire(),
        I.consume("KeyR") && s.reload()),
        (s.kick = Math.max(0, s.kick - z * 9)));
      const ne = s.has.pistol && (s.ammo === 0 || (vt && Lt && rt < it.slam));
      f.setSlide(
        Math.max(ne ? li : 0, f.slideK - z * (vt ? 30 : 10)),
        s.ammo > 0 && !ne,
      );
      const Gt = ni((s.has.pistol && s.drawK) || 0);
      (x.copy(m.hidden.p).lerp(m.hip.p, Gt),
        A.copy(m.hidden.r).lerp(m.hip.r, Gt),
        x.lerp(m.ads.p, s.aim),
        A.lerp(m.ads.r, s.aim));
      let Jt = 0;
      if (vt) {
        const xt = Lt ? it.ret : it.retTac,
          Tt = ee(it.turn[0], it.turn[1], rt);
        ((Jt = ee(0, it.cant, rt) * (1 - ee(xt[0], xt[1], rt))),
          x.lerp(H.copy(m.drop.p).lerp(m.load.p, Tt), Jt),
          A.lerp(at.copy(m.drop.r).lerp(m.load.r, Tt), Jt));
      }
      ((d.p.x = Dt(d.p.x, x.x, 18, z)),
        (d.p.y = Dt(d.p.y, x.y, 18, z)),
        (d.p.z = Dt(d.p.z, x.z, 18, z)),
        (d.r.x = Dt(d.r.x, A.x, 18, z)),
        (d.r.y = Dt(d.r.y, A.y, 18, z)),
        (d.r.z = Dt(d.r.z, A.z, 18, z)),
        (s.bobK = Dt(s.bobK, Zt(e.moving / 3.5), 6, z)));
      const _e = e.bobPhase,
        Se = Math.cos(_e) * 0.006 * s.bobK * (1 - s.aim * 0.85),
        Te = Math.abs(Math.sin(_e)) * 0.008 * s.bobK * (1 - s.aim * 0.85),
        Ae = e.lastLook || { x: 0, y: 0 };
      ((s.sway.x = Dt(s.sway.x, Zt(-Ae.x * 4e-4, -0.03, 0.03), 9, z)),
        (s.sway.y = Dt(s.sway.y, Zt(Ae.y * 4e-4, -0.03, 0.03), 9, z)));
      const me = s.kick,
        Be = 0.028 * me * (1 - 0.4 * s.aim),
        Pe = 0.012 * me;
      let te = 0,
        Ue = 0,
        qe = 0,
        Ve = 0,
        es = 0,
        Re = 0;
      if (vt) {
        const xt = $e(rt - it.release),
          Tt = $e(rt - it.seat),
          Bt = Lt ? $e(rt - it.slam) : 0;
        ((Re -= 0.03 * xt),
          (es += 0.015 * xt),
          H.set(0, Math.cos(Ye), -Math.sin(Ye))
            .applyEuler(q.set(d.r.x, d.r.y, d.r.z))
            .multiplyScalar(0.014 * Tt),
          (te += H.x),
          (Ue += H.y),
          (qe += H.z),
          (Re += 0.05 * Tt),
          (Ve += 0.03 * Tt),
          (qe -= 0.008 * Bt),
          (Ue -= 0.003 * Bt),
          (Ve -= 0.05 * Bt),
          (Re += 0.025 * Bt));
      }
      (b.position.set(
        d.p.x + Se + s.sway.x + te,
        d.p.y + Te + s.sway.y - Pe * 0.4 + Ue,
        d.p.z + Be + qe,
      ),
        b.rotation.set(
          d.r.x + 0.11 * me * (1 - 0.5 * s.aim) + s.sway.y * 1.4 + Ve,
          d.r.y + s.sway.x * 1.4 + es,
          d.r.z + Re,
        ),
        b.updateMatrix(),
        Xt(
          Mt,
          Qt.multiplyMatrices(b.matrix, f.group.matrix).multiply(v.matrix),
          Rt.copy(b.quaternion).multiply(f.group.quaternion).multiply(ut),
          Jt,
        ));
      let ss = 0,
        is = !0;
      if (vt && rt < it.seat && rt > it.release) {
        const xt = rt - it.release,
          Tt = 0.35 * xt + 4.5 * xt * xt;
        Tt < ps && !s._dropped
          ? (ss = Tt)
          : ((is = !1),
            s._dropped || ((s._dropped = !0), V(0.35 + 9 * xt, !Lt)));
      }
      ((f.mag.visible = is),
        f.setMag(ss, !(vt && Lt && rt < it.seat)),
        (zt.group.visible =
          vt && rt > (it.down[1] + it.up[0]) / 2 && rt < it.seat),
        ct(z),
        Wt.set(
          -0.19 + Se * 1.3 + s.sway.x * 0.7,
          -0.16 + Te * 1.3 + s.sway.y * 0.7 - s.aim * 0.03,
          -0.37 + s.aim * 0.02,
        ),
        gt.setFromEuler(q.set(0.03 + s.sway.y, 0.14 + s.sway.x, 0.02)),
        Q.copy(Wt),
        et.copy(gt));
      let re = 0;
      if (vt) {
        const xt = ee(it.down[0], it.down[1], rt),
          Tt = ee(it.up[0], it.up[1], rt),
          Bt = ee(it.back[0], it.back[1], rt),
          ye = Ne(
            $.hold[0],
            $.hold[1],
            ee(it.up[1] - 0.04, it.seat - 0.03, rt),
          );
        if (
          (zt.group.matrix.copy(Ft).multiply(M.makeTranslation(0, ye, 0)),
          (re = xt * (1 - Bt)),
          re > 0)
        ) {
          if ((Q.lerp($.fetch.p, xt), et.slerp($.fetch.q, xt), Tt > 0)) {
            const Ms =
              rt >= it.seat
                ? 0
                : hi *
                  (1 -
                    Math.pow(Zt((rt - it.up[1]) / (it.seat - it.up[1])), 2.2));
            (S(Ms + ye, P)
              .multiply(p)
              .decompose(Kt, Et, G),
              Q.lerp(Kt, Tt),
              et.slerp(Et, Tt));
          }
          Bt > 0 && (Q.lerp(Wt, Bt), et.slerp(gt, Bt));
        }
      }
      (C.position.copy(Q),
        C.quaternion.copy(et),
        C.updateMatrix(),
        Xt(bt, C.matrix, et, re));
      const os = Z.set(-0.19 + s.sway.x * 0.5, -0.16 + s.sway.y * 0.5, -0.53);
      if ((Ot.set(0, 0, -1), re > 0)) {
        oe.copy(gt).invert().premultiply(et);
        const xt = 2 * Math.acos(Math.min(1, Math.abs(oe.w))),
          Tt = Math.min(0.55 * re, xt > 1e-4 ? 0.28 / xt : 1);
        (Ot.applyQuaternion(Et.identity().slerp(oe, Tt)),
          os.lerp(we.set(0, 0, -0.12).applyQuaternion(et).add(Q), 0.6 * re));
      }
      (l.position.copy(os.applyMatrix4(i.matrixWorld)),
        l.target.position
          .copy(l.position)
          .addScaledVector(Ot.applyQuaternion(n), 5));
      const as = Ne((o.baseFov ?? 72) + (o.fovKick || 0), 54, s.aim);
      (Math.abs(i.fov - as) > 0.02 &&
        !o.cameraOverride &&
        !o.camCtl &&
        ((i.fov = Dt(i.fov, as, 14, z)), i.updateProjectionMatrix()),
        (e.speedMul = 1 - 0.28 * s.aim),
        y.update(z));
    }),
    (s.flickerTorch = (z = 1) => {
      r = z;
    }),
    (s.killTorch = (z = 0.4) => {
      ((h = z),
        setTimeout(() => {
          h = 0;
        }, z * 1e3));
    }),
    (s.torch = l),
    (s.pistol = f),
    (s.vm = g),
    (s.gunRoot = b),
    (s.setVisible = (z) => {
      g.visible = z;
    }),
    s
  );
}
