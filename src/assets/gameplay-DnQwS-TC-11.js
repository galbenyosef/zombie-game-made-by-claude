// assets/gameplay-DnQwS-TC 11 — pos
// Lines 3944-5325 of readable/assets/gameplay-DnQwS-TC.pretty.js (statement-aligned).
function runStoryScript(o) {
  const t = o,
    i = o.player,
    e = () => o.npc,
    s = () => o.rooms,
    l = o.sched,
    n = { beat: null, run: 0, flags: {}, running: !1 },
    r = (p) => {
      (t.trace ||= []).push(t.time.toFixed(1) + "s " + p);
    },
    h = (p, P) => t.npc.say(p, P),
    a = (p) => l.wait(p),
    y = (p, P) => l.until(p, P),
    g = (p, P) => t.audio.play(p, P),
    w = (p) => t.shell.doors[p],
    _ = (p, P, M) => new ht(p, P, M),
    c = (p) => p !== n.run,
    k = (p, P = 15, M = 3.4) => {
      const G = t.weapons;
      if (!G.has.torch || !G.on) return !1;
      const S = G.torch.position,
        V = new ht().subVectors(G.torch.target.position, S).normalize(),
        B = new ht().subVectors(p, S),
        tt = B.length();
      return tt > M ? !1 : V.dot(B.divideScalar(tt)) > Math.cos(P * ce);
    },
    K = (p, P = 9) => {
      if (t.time - (n.lastCall ?? -99) < P || t.npc.speaking) return;
      n.lastCall = t.time;
      const M = i.forward(new ht());
      ((M.y = 0), M.normalize());
      const G = new ht().subVectors(p, i.pos);
      ((G.y = 0), G.normalize());
      const S = Math.atan2(M.x * G.z - M.z * G.x, M.x * G.x + M.z * G.z),
        V = Math.abs(S) > 2.1;
      h(
        V
          ? Math.random() < 0.5
            ? "v_behind"
            : "v_behind2"
          : S > 0
            ? "v_right"
            : "v_left",
      );
    },
    Y = new ht(),
    F = () => t.camera.getWorldPosition(Y);
  async function X(p, { rate: P = 1, vol: M = 0.95 } = {}) {
    const G = t.audio.manifest[p],
      S = (G?.text || "").replace(/^\[[^\]]*\]\s*/, "");
    (S && t.hud.subtitle(S, (G?.dur ?? 2) / P + 0.3, "", "thought"),
      (t.playerSpeaking = !0));
    try {
      await t.audio.voice(p, { vol: M, rate: P, reverb: 0.04 });
    } finally {
      t.playerSpeaking = !1;
    }
  }
  const J = new Is(),
    U = new It(),
    N = new Ks(),
    T = new ht(),
    f = new ht(),
    b = (p, P) => {
      const M = t.camera;
      (M.updateMatrixWorld(),
        U.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse),
        J.setFromProjectionMatrix(U),
        M.getWorldPosition(T));
      for (const G of [0.45, 1.15, 1.7]) {
        if ((N.center.set(p, G, P), (N.radius = 0.5), !J.intersectsSphere(N)))
          continue;
        f.set(p, G, P).sub(T);
        const S = f.length();
        if (
          (f.divideScalar(S),
          !t.combat.raycastWorld(T, f, Math.max(0.05, S - 0.35)))
        )
          return !0;
      }
      return !1;
    };
  async function L(p, P, M = {}, G, S = 20) {
    const V = t.time;
    for (;;) {
      if (G != null && c(G)) return null;
      const B =
        P.find((tt) => !b(tt[0], tt[1])) ||
        (t.time - V > S ? P[P.length - 1] : null);
      if (B)
        return t.zombies.spawn(p, B[0], B[1], {
          ...M,
          yaw: B[2] ?? M.yaw ?? 0,
        });
      await a(0.15);
    }
  }
  async function v(
    p,
    P,
    { dist: M = 1.1, fov: G = 34, into: S = 0.9, back: V = 0.9 } = {},
  ) {
    const B = t.camera,
      tt = t.weapons,
      ct = B.position.clone(),
      ut = B.quaternion.clone(),
      mt = B.fov,
      yt = new ht(),
      Mt = new ht(),
      bt = new ze(),
      ft = new It(),
      kt = new ht(0, 1, 0),
      Rt = new ht();
    ((i.frozen = !0), tt.setVisible(!1), (tt.suppress = !0));
    let Ct = "in",
      $t = 0;
    t.camCtl = (Xt) => {
      (($t += Xt), e().headWorld(yt));
      const H = i.pos.x - yt.x,
        at = i.pos.z - yt.z,
        Q = Math.hypot(H, at) || 1;
      (Rt.set(-at / Q, 0, H / Q).multiplyScalar(0.15),
        Mt.set(
          yt.x + (H / Q) * M + Rt.x,
          yt.y + 0.02,
          yt.z + (at / Q) * M + Rt.z,
        ),
        ft.lookAt(Mt, yt.set(yt.x, yt.y - 0.005, yt.z), kt),
        bt.setFromRotationMatrix(ft));
      const et =
        Ct === "in"
          ? Ce.smooth(Math.min(1, $t / S))
          : Ct === "hold"
            ? 1
            : 1 - Ce.smooth(Math.min(1, $t / V));
      (B.position.lerpVectors(ct, Mt, et), B.quaternion.copy(ut).slerp(bt, et));
      const Wt = mt + (G - mt) * et;
      Math.abs(B.fov - Wt) > 0.01 && ((B.fov = Wt), B.updateProjectionMatrix());
    };
    const Qt = () => {
      ((t.camCtl = null),
        tt.setVisible(!0),
        (tt.suppress = !1),
        B.position.copy(ct),
        B.quaternion.copy(ut),
        (B.fov = mt),
        B.updateProjectionMatrix(),
        (i.frozen = !1),
        i.sync());
    };
    if ((await a(S * 0.7), c(p))) {
      Qt();
      return;
    }
    if (((Ct = "hold"), await h(P, { hold: 0.9 }), c(p))) {
      Qt();
      return;
    }
    ((Ct = "back"), ($t = 0), await a(V), Qt());
  }
  async function R(p, { speed: P = 1.5, wait: M = 4.2, run: G } = {}) {
    for (const S of p) {
      if (c(G)) return;
      const V = e().walkTo(S[0], S[1], { speed: P, arrive: 0.3 });
      let B = !1;
      for (
        V.then(() => {
          B = !0;
        });
        !B && !c(G);
      ) {
        await a(0.12);
        const tt = e().distTo(i.pos.x, i.pos.z),
          ct =
            Math.hypot(i.pos.x - S[0], i.pos.z - S[1]) >
            Math.hypot(e().pos.x - S[0], e().pos.z - S[1]);
        if (tt > M && ct) {
          if (
            (e().stop(),
            e().lookAt(F),
            await y(() => e().distTo(i.pos.x, i.pos.z) < M - 1.2 || c(G), 60),
            c(G))
          )
            return;
          e()
            .walkTo(S[0], S[1], { speed: P, arrive: 0.3 })
            .then(() => {
              B = !0;
            });
        }
      }
    }
  }
  const W = async (p, P = 1.3) => {
    ((w(p).locked = !1), w(p).open(1), await a(P), t.nav.rebuild());
  };
  let C = null;
  const j = () => {
    if (C) return C;
    const p = document.createElement("canvas");
    p.width = p.height = 64;
    const P = p.getContext("2d"),
      M = P.createRadialGradient(32, 32, 0, 32, 32, 32);
    return (
      M.addColorStop(0, "rgba(255,255,255,1)"),
      M.addColorStop(0.25, "rgba(255,220,160,0.6)"),
      M.addColorStop(1, "rgba(255,200,120,0)"),
      (P.fillStyle = M),
      P.fillRect(0, 0, 64, 64),
      (P.strokeStyle = "rgba(255,240,210,0.8)"),
      (P.lineWidth = 1.5),
      P.beginPath(),
      P.moveTo(32, 6),
      P.lineTo(32, 58),
      P.moveTo(6, 32),
      P.lineTo(58, 32),
      P.stroke(),
      (C = new ts(p)),
      C
    );
  };
  async function u(p) {
    n.beat = "intro";
    const M = (s().bedroom?.points || {}).pillow || [0.55, 0.78, 2.4];
    (t.hud.setVisible(!0),
      (i.frozen = !0),
      e().place(wt.akaneStart[0], wt.akaneStart[1], 0),
      e().lookAt(() => _(2.4, 1.1, 2.6)),
      e().emote("scared", 99),
      (t.post.fade = 1),
      (t.post.lid = 0),
      (t.post.blur = 1),
      (t.post.focus = 0),
      t.audio.loop("amb_bedroom", { vol: 0.55 }),
      t.audio.loop("amb_wind_rain", { vol: 0.3 }),
      n.heart?.stop?.(0.2),
      (n.heart = t.audio.play("heartbeat", { vol: 0.5, loop: !0 })),
      new ht(...M));
    const G = Ee(
      t,
      [
        { t: 0, p: [M[0], M[1], M[2]], yaw: -90, pitch: 68, fov: 78 },
        {
          t: 3.2,
          p: [M[0] + 0.01, M[1] + 0.005, M[2]],
          yaw: -84,
          pitch: 60,
          fov: 78,
        },
        {
          t: 6.4,
          p: [M[0] + 0.02, M[1] + 0.01, M[2] - 0.05],
          yaw: -28,
          pitch: 26,
          fov: 76,
        },
        {
          t: 9.2,
          p: [M[0] + 0.03, M[1] + 0.02, M[2] - 0.06],
          yaw: -47,
          pitch: 4,
          fov: 74,
        },
        {
          t: 12,
          p: [M[0] + 0.03, M[1] + 0.02, M[2] - 0.06],
          yaw: -49,
          pitch: 3,
          fov: 74,
        },
      ],
      { ease: "smooth" },
    );
    if (
      ((async () => (
        await a(0.6),
        await l.tween(t.post, "fade", 0, 1.4, "out")
      ))(),
      (async () => (
        await a(1.2),
        await l.during(1.2, (V) => {
          ((t.post.lid = 0.55 * Ce.smooth(V)), (t.post.blur = 1 - 0.25 * V));
        }),
        await l.during(0.35, (V) => {
          t.post.lid = 0.55 * (1 - V * 0.9);
        }),
        await a(0.25),
        await l.during(1.6, (V) => {
          ((t.post.lid = 0.05 + 0.95 * Ce.smooth(V)),
            (t.post.blur = 0.75 - 0.5 * V));
        }),
        await l.tween(t.post, "blur", 0.08, 4.5, "smooth")
      ))(),
      (async () => (
        await a(1.6),
        g("piano_low_note", { pos: [3, 1, 4.4], vol: 0.8, reverb: 0.6 }),
        s().bedroom?.props?.piano?.pressKeys?.([9], 0.2)
      ))(),
      await a(5.2),
      c(p) ||
        (await X("v_intro_1"), c(p)) ||
        (e().scare(0.35), await a(0.25), c(p)))
    )
      return;
    e().lookAt(F);
    {
      const V = F();
      e().turnTo(V.x, V.z);
    }
    (await a(0.8),
      !(
        c(p) ||
        (await h("v_intro_2"), c(p)) ||
        (await G, c(p)) ||
        ((t.post.lid = 1),
        await l.tween(t.post, "blur", 0, 1.5, "out"),
        await Ee(
          t,
          [
            {
              t: 0,
              p: [M[0] + 0.03, M[1] + 0.02, M[2] - 0.06],
              yaw: -49,
              pitch: 3,
              fov: 74,
            },
            { t: 1.4, p: [1.2, 1.22, 2.35], yaw: -62, pitch: 6, fov: 74 },
            {
              t: 3,
              p: [wt.bedside[0], 1.62, wt.bedside[1]],
              yaw: -48,
              pitch: 0,
              fov: 72,
            },
          ],
          { ease: "smooth" },
        ),
        c(p))
      ) &&
        (n.heart?.stop?.(5),
        (t.camCtl = null),
        i.place(wt.bedside[0], wt.bedside[1], -48 * ce, 0, 1.62),
        (i.frozen = !1),
        e().lookAt(F),
        await m(p)));
  }
  async function m(p) {
    n.beat = "bedroom";
    const P = s().bedroom || {},
      M = P.props || {};
    (t.hud.setVisible(!0),
      t.audio.loop("amb_bedroom", { vol: 0.55 }),
      (t.storyFlags = n.flags),
      (n.flags.torch = !1));
    const G = M.flashlight;
    (t.events.on("use", function V(B) {
      B !== "flashlight" ||
        n.flags.torch ||
        ((n.flags.torch = !0),
        G && (G.visible = !1),
        t.weapons.give("torch"),
        g("flashlight_click", { vol: 0.6 }),
        t.events.off("use", V));
    }),
      e().lookAt(F),
      !(await y(() => n.flags.torch || c(p), 9)) &&
        !c(p) &&
        (e().gesturePoint(1.8),
        h("v_flash"),
        await y(() => n.flags.torch || c(p), 60)),
      !c(p) && (await a(1), await d(p)));
  }
  async function d(p) {
    n.beat = "lock";
    const P = s().bedroom || {},
      M = P.props || {},
      G = w("D1"),
      S = G.lockPos || [5.25, 1, 4.21];
    if (!n.flags.torch) {
      ((n.flags.torch = !0), t.weapons.give("torch"));
      const kt = M.flashlight;
      kt && (kt.visible = !1);
    }
    if (
      (e().lookAt(null),
      await e().walkTo(wt.lockSpot[0], wt.lockSpot[1] - 0.15, {
        speed: 1.25,
        arrive: 0.25,
      }),
      c(p) ||
        (e().turnTo(S[0], S[2]),
        await a(0.7),
        g("door_locked_rattle", { pos: [5.25, 1, 4.2], vol: 0.9 }),
        G.rattle?.(),
        await a(0.9),
        g("door_locked_rattle", { pos: [5.25, 1, 4.2], vol: 0.8 }),
        G.rattle?.(),
        await a(0.9),
        c(p)) ||
        (e().stop(),
        e().lookAt(new ht(3, 1, 4.4)),
        e().scare(0.8),
        g("piano_lullaby", { pos: [3, 1, 4.4], vol: 0.9, reverb: 0.7 }),
        M.piano?.pressKeys?.([21, 24, 28, 26, 21, 19], 0.55),
        P.lights?.candles?.forEach?.((kt) => {
          const Rt = kt.intensity;
          ((kt.intensity = Rt * 0.55),
            setTimeout(() => {
              kt.intensity = Rt;
            }, 900));
        }),
        (t.post.grain += 0),
        (i.shake += 0.15),
        await a(1.4),
        await h("v_piano"),
        c(p)))
    )
      return;
    (await a(0.6),
      e().lookAt(null),
      e().turnTo(S[0], S[2]),
      await a(0.4),
      h("v_lock"),
      await a(1.2),
      e().kneelAt(S));
    const V = new ws({
        map: j(),
        color: new Me().setRGB(2.2, 1.5, 0.7),
        blending: ke,
        depthWrite: !1,
        transparent: !0,
        toneMapped: !1,
        fog: !1,
        opacity: 0,
      }),
      B = new ms(V);
    (B.position.set(S[0] - 0.05, S[1], S[2]),
      B.scale.setScalar(0.18),
      (B.renderOrder = 45),
      t.scene.add(B));
    const tt = (kt, Rt) => {
      V.opacity = B.visible
        ? (0.25 + 0.3 * Math.sin(Rt * 5.5)) * B.userData.k
        : 0;
    };
    ((B.userData.k = 1), t.updaters.push(tt), M.dolls?.setActive?.(!0));
    let ct = 0,
      ut = 4.6,
      mt = !1,
      yt = !1,
      Mt = t.time + 7,
      bt = 0,
      ft = null;
    for (t.time; ct < ut && !c(p);) {
      await a(0.05);
      const kt = 0.05,
        Rt = i.pos.distanceTo(new ht(S[0], 0, S[2])) < 3.6,
        Ct = k(new ht(S[0], S[1], S[2]), 16, 3.8) && Rt;
      if (((B.userData.k = Ct ? 0 : 1), bt > 0)) {
        bt -= kt;
        continue;
      }
      (Ct
        ? ((ct += kt),
          mt ||
            ((mt = !0),
            (ft = g("lock_pick", { pos: [5.2, 1, 4.2], vol: 0.85 }))),
          (Mt = t.time + 7),
          t.weapons.flickerTorch?.(0))
        : ((ct = Math.max(0, ct - kt * 0.35)),
          mt && ((mt = !1), ft?.stop?.(0.15)),
          t.time > Mt &&
            !e().speaking &&
            ((Mt = t.time + 12), h("v_lock_nudge"), (e().faceHold = 0))),
        ct > 1.7 &&
          !yt &&
          ((yt = !0),
          (bt = 1.6),
          (mt = !1),
          ft?.stop?.(0.1),
          M.wardrobe?.knock?.(3),
          g("wardrobe_thump", { pos: [1.1, 1, 4.5], vol: 1, reverb: 0.5 }),
          (i.shake += 0.5),
          e().scare(0.6),
          await a(0.9),
          h("v_wardrobe"),
          await a(0.7)));
    }
    t.scene.remove(B);
    {
      const kt = t.updaters.indexOf(tt);
      kt >= 0 && t.updaters.splice(kt, 1);
    }
    c(p) ||
      (ft?.stop?.(0.2),
      M.dolls?.setActive?.(!1),
      g("door_creak_open", { pos: [5.2, 1, 3.9], vol: 0.9, reverb: 0.4 }),
      e().standUp(),
      await a(0.5),
      h("v_lock_done"),
      t.audio.loop("amb_hall", { vol: 0.5 }),
      await W("D1", 1.4),
      s().bedroom?.props?.curtains?.gust?.(1.2),
      s().bedroom?.props?.candles?.setLit?.(!0),
      await x(p));
  }
  async function x(p) {
    n.beat = "hall";
    const P = s().hall || {},
      M = P.props || {};
    (t.audio.loop("amb_hall", { vol: 0.55 }),
      e().lookAt(null),
      await e().walkTo(wt.hallStart[0], wt.hallStart[1], { speed: 1.5 }),
      !c(p) &&
        (h("v_hall_go"),
        M.ceilingLight?.setFlicker?.(0.35),
        await R([[wt.hallStart[0], 8.3]], { run: p }),
        !c(p) &&
          (e().stop(),
          e().lookAt(F),
          await y(() => e().distTo(i.pos.x, i.pos.z) < 2.8 || c(p), 12),
          !c(p) &&
            (e().turnTo(5.3, 9.9),
            e().lookAt(null),
            g("door_locked_rattle", { pos: [5.3, 1, 10], vol: 0.9 }),
            w("D3").rattle?.(),
            M.scratch3?.(),
            g("zombie_groan_2", {
              pos: [4.6, 1.2, 10],
              vol: 0.55,
              reverb: 0.7,
              rate: 0.9,
            }),
            M.ceilingLight?.snap?.(),
            await a(0.8),
            e().scare(0.5),
            await a(0.35),
            e().lookAt(F),
            await Promise.race([e().turnTo(i.pos.x, i.pos.z), a(1.3)]),
            !c(p) &&
              (await v(p, "v_d3"),
              e().lookAt(null),
              await a(0.3),
              !c(p) &&
                (await R(
                  [
                    [wt.hallStart[0], 7.5],
                    [wt.studyDoor[0] - 0.1, wt.studyDoor[1] + 0.2],
                  ],
                  { run: p, speed: 1.6 },
                ),
                !c(p) &&
                  ((w("D4").locked = !1),
                  e().turnTo(7, 6.65),
                  await a(0.4),
                  g("door_creak_open", {
                    pos: [6.9, 1, 6.65],
                    vol: 0.85,
                    reverb: 0.3,
                  }),
                  await W("D4", 1.3),
                  await A(p))))))));
  }
  async function A(p) {
    n.beat = "study";
    const P = s().study || {},
      M = P.props || {},
      G = P.points || {};
    (t.audio.loop("amb_hall", { vol: 0.35 }),
      (n.flags.pistol = !1),
      (n.flags.pistolNpc = !1));
    const S = G.studyInside || [7.45, 0, 6.65];
    G.deskFront;
    const V = G.deskFrontWoman || [8.8, 0, 7.12],
      B = G.pistolBSpot || [9.56, 0.82, 6.38];
    (t.events.on("use", function ct(ut) {
      ut !== "pistol" ||
        n.flags.pistol ||
        ((n.flags.pistol = !0),
        M.pistolA && (M.pistolA.visible = !1),
        t.weapons.give("pistol"),
        t.events.off("use", ct));
    }),
      r("study: walking in"),
      await e().walkTo(S[0] + 0.3, S[2] - 0.5, { speed: 1.5 }),
      !(
        c(p) ||
        (r("study: arrived inside"),
        e().lookAt(null),
        e().turnTo(B[0], B[2]),
        await y(() => t.player.pos.x > 7.5 || c(p), 30),
        c(p)) ||
        (r("study: player inside"), await a(0.4), await h("v_guns"), c(p)) ||
        (r("study: v_guns done"),
        e().lookAt(F),
        !(await y(() => n.flags.pistol || c(p), 12)) &&
          !c(p) &&
          (e().gesturePoint(1.6), await y(() => n.flags.pistol || c(p), 60)),
        c(p))
      ) &&
        (r("study: player took the pistol"),
        await a(0.4),
        await e().walkTo(V[0], V[2], { speed: 1.4, arrive: 0.2 }),
        !c(p) &&
          (r("study: she is at the desk"),
          e().lookAt(new ht(B[0], B[1], B[2])),
          e().turnTo(B[0], B[2]),
          await a(0.5),
          (e().arms = "touch"),
          (e().touchWorld = [B[0] - 0.12, B[1] + 0.12, B[2]]),
          (e().kneelGoal = 0),
          await a(0.9),
          M.pistolB && (M.pistolB.visible = !1),
          g("pickup_item", { pos: [B[0], B[1], B[2]], vol: 0.6 }),
          await a(0.25),
          (e().arms = "down"),
          (e().touchWorld = null),
          e().lowReady(),
          g("gun_slide_rack", { pos: [V[0], 1.2, V[2]], vol: 0.8 }),
          (n.flags.pistolNpc = !0),
          await a(0.9),
          await h("v_guns2"),
          !c(p) && (await q(p)))));
  }
  async function q(p) {
    ((n.beat = "firstdead"),
      t.audio.loop("amb_living", { vol: 0.05 }).fadeTo(0.5, 6),
      t.audio.loop("amb_hall", { vol: 0.3 }),
      e().lowReady(),
      e().lookAt(null),
      t.nav.rebuild());
    const P = n.flags.z1
      ? Promise.resolve(n.flags.z1)
      : L(
          "lanky",
          [
            [wt.zombieFirst[0], wt.zombieFirst[1], 0],
            [3.4, 18.6, 0.2],
          ],
          { yaw: 0 },
          p,
          40,
        ).then((V) => (n.flags.z1 = V));
    if (
      (await e().walkTo(wt.studyDoor[0], wt.studyDoor[1], { speed: 1.2 }),
      c(p) ||
        (await R(
          [
            [6.1, 11],
            [6.1, 13.2],
            [4.85, 14.5],
          ],
          { run: p, speed: 1.35 },
        ),
        c(p)))
    )
      return;
    const M = await P;
    if (!M || c(p)) return;
    (e().stop(), t.hud.hint("Right mouse: aim   Left mouse: fire", 6));
    const G = () => M.kit.chestWorld(new ht());
    if (
      (e().aimAt(G),
      await a(0.5),
      h("v_first"),
      !(await y(() => M.dead || M.alerted || c(p), 10)) &&
        !c(p) &&
        (h("v_first_nudge"),
        await y(() => M.dead || M.alerted || c(p), 5),
        !M.dead &&
          !M.alerted &&
          !c(p) &&
          (e().fire(), await a(0.4), e().fire())),
      !c(p))
    ) {
      if ((await y(() => M.dead || c(p), 7), !M.dead && !c(p)))
        for (let V = 0; V < 4 && !M.dead; V++) (e().fire(), await a(0.35));
      (await a(0.6),
        !c(p) &&
          (await y(() => !e().speaking || c(p), 3),
          !c(p) &&
            (h("v_heard"),
            t.zombies.alertAll(2),
            g("zombie_groan_1", { pos: [1, 1.4, 12], vol: 0.8, reverb: 0.8 }),
            g("distant_gunfire", { vol: 0.5 }),
            await a(1.6),
            await Z(p))));
    }
  }
  async function Z(p) {
    ((n.beat = "fight"), t.hud.hint("R: reload", 3), e().lookAt(null));
    const P = s().living?.props || {};
    ((n.flags.kills = 0),
      (t.zombies.onKill = () => {
        (n.flags.kills++,
          Math.random() < 0.35 &&
            !e().speaking &&
            t.time - (n.lastGot ?? -99) > 16 &&
            ((n.lastGot = t.time), h("v_gotone")));
      }),
      (async () => {
        let tt = 0;
        const ct = (ut) => {
          const mt = e(),
            yt = mt.headWorld(new ht()),
            Mt = ut.kit.chestWorld(new ht()),
            bt = Mt.clone().sub(yt),
            ft = bt.length();
          return (bt.divideScalar(ft), !t.combat.raycastWorld(yt, bt, ft));
        };
        for (; !c(p) && n.beat === "fight";) {
          (await a(0.12), (tt -= 0.12));
          const ut = e();
          if (ut.grabbed) continue;
          let mt = null,
            yt = 1e9;
          for (const bt of t.zombies.alive()) {
            const ft = bt.pos.distanceTo(ut.pos);
            ft < 12 && ft < yt && ct(bt) && ((yt = ft), (mt = bt));
          }
          const Mt = ut.distTo(i.pos.x, i.pos.z);
          if (
            ((!mt || Mt > 6) &&
              ut.keepNear(i.pos, i.yaw, { speed: Mt > 5 ? 2.3 : 1.6 }),
            mt)
          ) {
            ut.aimAt(() => mt.kit.chestWorld(new ht()));
            const bt =
              Math.abs(
                us(
                  ut.yaw,
                  Math.atan2(mt.pos.x - ut.pos.x, mt.pos.z - ut.pos.z),
                ),
              ) < 0.28;
            tt <= 0 &&
              bt &&
              ut.gun.raise > 0.85 &&
              !ut.path &&
              (ut.fire(), (tt = ds(0.55, 0.95)));
          } else ut.lowReady();
        }
      })(),
      (t.zombies.onAkaneHit = null));
    const M = w("D5");
    for (const tt of ["D5", "D3"]) {
      const ct = w(tt);
      (ct.angle > 0.01 || ct.target > 0) &&
        (ct.open(0, !0), (ct.locked = !0), (ct.speed = 3));
    }
    if (
      (t.nav.rebuild(),
      await a(0.6),
      c(p) ||
        (await L(
          "gown",
          [
            [2.05, 12.85, 0],
            [1.2, 12, 0.3],
          ],
          { state: "emerge" },
          p,
          10,
        ),
        c(p)) ||
        (g("door_pound", { pos: [2.05, 1.2, 13.4], vol: 0.85, reverb: 0.4 }),
        M.rattle?.(0.07),
        await a(0.9),
        c(p)) ||
        (g("door_burst", { pos: [2, 1.2, 13.5], vol: 1, reverb: 0.5 }),
        (M.locked = !1),
        (M.speed = 9),
        M.open(1),
        await a(0.4),
        t.nav.rebuild(),
        await a(0.3),
        K(new ht(2, 0, 14)),
        await y(() => t.zombies.alive().length === 0 || c(p), 40),
        c(p)))
    )
      return;
    (await a(1.4),
      (i.shake += 0.3),
      g("door_pound", { pos: [12.3, 1.3, 17], vol: 0.9, reverb: 0.4 }),
      P.barricade?.pound?.(0.6));
    const G = await L(
      "lanky",
      [
        [1.3, 12.2, 0.3],
        [0.8, 11, 0.5],
        [3.8, 11.2, -0.4],
      ],
      { state: "emerge", target: "akane" },
      p,
      10,
    );
    if (c(p) || (await a(0.6), K(new ht(2, 0, 14), 0), await a(1.6), c(p)))
      return;
    const S = w("D3"),
      V = await L(
        "brute",
        [
          [4.3, 10.4, Math.PI / 2],
          [3.6, 9.3, Math.PI / 2],
        ],
        { state: "emerge" },
        p,
        10,
      );
    if (!V || c(p)) return;
    (g("door_burst", { pos: [5.3, 1.2, 10.15], vol: 1, reverb: 0.6 }),
      (S.locked = !1),
      (S.speed = 9),
      S.open(1),
      s().hall?.props?.ceilingLight?.swing?.(1),
      await a(0.4),
      t.nav.rebuild(),
      (async () => (
        await y(() => V.dead || V.pos.z > 12.2 || c(p), 15),
        !V.dead && !c(p) && ((n.lastCall = -99), K(V.pos, 0))
      ))());
    const B = await y(
      () => (G && G.dead) || (G && G.pos.distanceTo(e().pos) < 1) || c(p),
      30,
    );
    c(p) ||
      (B && G && !G.dead && (await $(G, p)),
      await y(() => t.zombies.alive().length === 0 || c(p), 60),
      !c(p) && (await a(1.2), await lt(p)));
  }
  async function $(p, P, { hold: M = 7.5, lethal: G = !1 } = {}) {
    const S = e();
    ((S.grabbed = !0), (p.state = "grab"), p.kit.setState("grab_hold"));
    const V = new ht(p.pos.x - S.pos.x, 0, p.pos.z - S.pos.z).normalize();
    (p.pos.set(S.pos.x + V.x * 0.62, 0, S.pos.z + V.z * 0.62),
      (p.yaw = Math.atan2(-V.x, -V.z)),
      S.faceYaw(Math.atan2(V.x, V.z)),
      S.setGun("none"),
      (S.handsUp = 99),
      S.emote("scream", 99),
      h("v_grab"));
    let B = !1;
    ((p.holdFn = () => {
      B = !0;
    }),
      S.hurt());
    let tt = t.time;
    if (
      (await y(
        () => (
          !B && !p.dead && t.time - tt > 2.5 && ((tt = t.time), S.hurt()),
          B || p.dead || S.dead || c(P)
        ),
        M,
      ),
      c(P) || S.dead)
    ) {
      S.grabbed = !1;
      return;
    }
    ((S.handsUp = 0),
      (S.grabbed = !1),
      p.dead ||
        ((p.state = "chase"),
        S.setGun("aim"),
        S.hurt(),
        await a(0.25),
        S.fire(),
        S.fire(),
        G &&
          !p.dead &&
          p.hit(9, "head", p.kit.headWorld(new ht()), V.clone(), "akane"),
        await a(0.4)),
      S.emote("scared", 3),
      S.lowReady(),
      await a(0.4),
      h("v_saved"));
  }
  async function lt(p) {
    n.beat = "finale";
    const P = s().living || {},
      M = P.props || {},
      G = M.barricade?.work;
    (e().lowReady(), e().lookAt(null));
    const S = G?.steps || [];
    (G?.reset(), G?.begin(), t.nav.rebuild());
    {
      const H = w("D6");
      (H.angle > 0.01 || H.target > 0) && H.open(0, !0);
    }
    if (
      (S.length &&
        (await e().walkTo(S[0].at[0], S[0].at[1], { speed: 2.4, arrive: 0.2 }),
        c(p))) ||
      (e().holster(),
      e().lookAt(F),
      await Promise.race([e().turnTo(i.pos.x, i.pos.z), a(0.7)]),
      c(p))
    )
      return;
    const V = h("v_cover");
    t.hud.hint("Keep them off her", 5);
    const B = t.time,
      tt = [
        [6.1, 10.4, 0],
        [6.1, 8.6, 0],
        [4.3, 10.4, Math.PI / 2],
      ],
      ct = [
        [1.3, 12.2, 0.3],
        [0.8, 11, 0.5],
        [3.8, 11.2, -0.4],
      ],
      ut = [
        [0.8, "lanky", tt],
        [2.8, "gown", ct],
        [5.4, "lanky", ct],
        [7.6, "gown", tt],
      ],
      mt = new Set();
    if (
      ((async () => {
        for (const [H, at, Q] of ut) {
          if (
            (await y(() => t.time - B >= H || c(p), 60),
            c(p) || n.flags.cleared)
          )
            return;
          L(at, Q, { state: "emerge", target: "akane" }, p, 8);
        }
      })(),
      await a(1.1),
      c(p))
    )
      return;
    e().lookAt(null);
    const yt = S.reduce((H, at) => H + at.dur, 0),
      Mt = {};
    let bt = 0,
      ft = !1,
      kt = !1;
    const Rt = () => {
      let H = null,
        at = 99;
      for (const Q of t.zombies.alive()) {
        if (Q.state === "grab") continue;
        const et = Math.hypot(Q.pos.x - e().pos.x, Q.pos.z - e().pos.z);
        et < at && ((at = et), (H = Q));
      }
      return [H, at];
    };
    for (const H of S) {
      H === S[S.length - 1] &&
        L("lanky", tt, { state: "emerge", target: "akane" }, p, 8);
      const at = [...(H.via || []), [H.at[0], H.at[1]]],
        Q = [e().pos.x, e().pos.z];
      let et = 0,
        Wt = t.time,
        gt = 0,
        Kt = Math.hypot(e().pos.x - H.at[0], e().pos.z - H.at[1]) > 0.3;
      const Et = new Set();
      if (
        (await y(() => {
          if (c(p)) return !0;
          const oe = Math.min(0.1, t.time - Wt);
          Wt = t.time;
          const [Ot, we] = Rt();
          for (const I of t.zombies.alive())
            !mt.has(I) && I.pos.z > 13.9 && (mt.add(I), K(I.pos, 2.5));
          (Ot && we < 3.6 && !kt && !e().speaking && ((kt = !0), h("v_cover2")),
            Ot &&
              we < 1.05 &&
              !ft &&
              !e().grabbed &&
              ((ft = !0),
              e().work(null),
              $(Ot, p, { hold: 5, lethal: !0 }).then(() => {
                ((ft = !1), e().holster());
              })));
          const ae = ft || e().grabbed || (Ot && we < 1.7);
          if (Kt) {
            if (!ae) {
              let st = 2.3 * oe;
              for (; st > 0 && gt < at.length;) {
                const nt = at[gt][0] - Q[0],
                  Pt = at[gt][1] - Q[1],
                  vt = Math.hypot(nt, Pt);
                vt <= st
                  ? ((Q[0] = at[gt][0]), (Q[1] = at[gt][1]), (st -= vt), gt++)
                  : ((Q[0] += (nt / vt) * st),
                    (Q[1] += (Pt / vt) * st),
                    (st = 0));
              }
            }
            const I = at[Math.min(gt, at.length - 1)],
              E = Math.atan2(I[0] - e().pos.x, I[1] - e().pos.z);
            return (
              ft || e().grabbed
                ? e().work(null)
                : e().work({
                    pos: Q.slice(),
                    yaw:
                      Math.hypot(I[0] - e().pos.x, I[1] - e().pos.z) > 0.15
                        ? E
                        : H.at[2],
                    hold: !1,
                    crouch: 0,
                    lean: 5,
                  }),
              t.hud.task("Cover her", bt / yt, ae),
              (Kt =
                gt < at.length ||
                Math.hypot(e().pos.x - H.at[0], e().pos.z - H.at[1]) > 0.1),
              !1
            );
          }
          const z = ae && (Mt.hold || et < 0.05);
          (z || (et = Math.min(1, et + oe / H.dur)), G.pose(H, et, Mt));
          for (const [I, E, st, nt] of H.sounds || [])
            et >= I &&
              !Et.has("s" + I + E) &&
              (Et.add("s" + I + E),
              g(E, {
                pos: H.piece.group.position.toArray(),
                vol: st,
                rate: nt ?? 1,
                reverb: 0.3,
              }));
          for (const [I, E, st, nt, Pt, vt] of H.dust || [])
            if (et >= I && !Et.has("d" + I)) {
              (Et.add("d" + I), t.fx.dust({ x: E, y: st, z: nt }, Pt, vt));
              const rt = Math.hypot(i.pos.x - E, i.pos.z - nt);
              vt > 1 && (i.shake += 0.35 * Math.max(0, 1 - rt / 8));
            }
          return (
            H.voice &&
              et >= H.voice[0] &&
              !Et.has("v") &&
              !e().speaking &&
              (Et.add("v"), h(H.voice[1])),
            ft || e().grabbed
              ? e().work(null)
              : z
                ? (e().work({
                    ...Mt,
                    hold: !1,
                    lean: -8,
                    crouch: 0.1,
                    look: Ot ? Ot.kit.chestWorld(new ht()).toArray() : Mt.look,
                  }),
                  e().handsUp || e().scare(0.4))
                : e().work(Mt),
            t.hud.task("Cover her", (bt + et * H.dur) / yt, z),
            et >= 1
          );
        }, 1 / 0),
        c(p))
      )
        return;
      ((bt += H.dur), t.nav.rebuild());
    }
    if ((await y(() => (!ft && !e().grabbed) || c(p), 12), c(p))) return;
    (await V,
      (n.flags.cleared = !0),
      t.hud.task("Cover her", 1, !1),
      e().work(null),
      (n.lastGot = t.time + 600));
    const Ct = t.audio.loop("horde_moan", { vol: 0, bus: "sfx" });
    if (
      (Ct.fadeTo(0.5, 3),
      g("zombie_groan_1", { pos: [6.1, 1.4, 10.5], vol: 0.9, reverb: 0.7 }),
      g("zombie_groan_3", {
        pos: [1.5, 1.4, 12],
        vol: 0.8,
        reverb: 0.7,
        delay: 0.6,
      }),
      (async () => {
        const H = t.time;
        for (const [at, Q, et] of [
          [0.2, "lanky", tt],
          [0.9, "gown", ct],
          [1.7, "lanky", ct],
          [2.6, "brute", tt],
        ]) {
          if (
            (await y(() => t.time - H >= at || c(p) || n.flags.exit, 30),
            c(p) || n.flags.exit)
          )
            return;
          L(Q, et, { state: "emerge", target: "player" }, p, 6);
        }
        for (let at = 0; at < 6; at++) {
          if ((await a(3.2), c(p) || n.flags.exit)) return;
          t.zombies.alive().length < 5 &&
            L(
              at % 2 ? "gown" : "lanky",
              at % 2 ? ct : tt,
              { state: "emerge", target: "player" },
              p,
              6,
            );
        }
      })(),
      await e().walkTo(11, 17.2, { speed: 1.6, arrive: 0.15 }),
      c(p) ||
        (t.hud.task(null),
        e().turnTo(12.3, 16.95),
        h("v_clear"),
        t.audio.duck("amb", 0.3, 2),
        g("door_creak_open", {
          pos: [12.3, 1.1, 16.95],
          vol: 0.9,
          reverb: 0.4,
        }),
        await W("D6", 0.9),
        c(p)) ||
        (e().lowReady(),
        (n.flags.exitOpen = !0),
        await Promise.race([
          e().walkTo(11.75, 17.35, { speed: 2.6, arrive: 0.12 }),
          a(2.5),
        ]),
        c(p)))
    )
      return;
    (e().lookAt(F),
      e().turnTo(i.pos.x, i.pos.z),
      (async () => {
        let H = 0.6;
        const at = (Q) => {
          const et = e().headWorld(new ht()),
            Wt = Q.kit.chestWorld(new ht()),
            gt = Wt.clone().sub(et),
            Kt = gt.length();
          return (gt.divideScalar(Kt), !t.combat.raycastWorld(et, gt, Kt));
        };
        for (; !c(p) && !n.flags.exit;) {
          (await a(0.12), (H -= 0.12));
          const Q = e();
          if (Q.grabbed || Q.dead || Q.path) continue;
          let et = null,
            Wt = 1e9;
          for (const gt of t.zombies.alive()) {
            const Kt = gt.pos.distanceTo(Q.pos);
            Kt < 11 && Kt < Wt && at(gt) && ((Wt = Kt), (et = gt));
          }
          if (et) {
            Q.aimAt(() => et.kit.chestWorld(new ht()));
            const gt =
              Math.abs(
                us(Q.yaw, Math.atan2(et.pos.x - Q.pos.x, et.pos.z - Q.pos.z)),
              ) < 0.3;
            H <= 0 && gt && Q.gun.raise > 0.85 && (Q.fire(), (H = ds(1, 1.5)));
          } else (Q.lowReady(), Q.lookAt(F));
        }
      })());
    const $t = () => i.pos.x > 11.45 && i.pos.z > 16.3 && i.pos.z < 17.2;
    let Qt = t.time + 1.6,
      Xt = 0;
    if (
      (await y(
        () =>
          c(p) || $t()
            ? !0
            : (t.time > Qt &&
                !e().speaking &&
                (h(Xt % 2 ? "v_clear" : "v_door"), Xt++, (Qt = t.time + 6.5)),
              !1),
        1 / 0,
      ),
      !c(p))
    ) {
      ((n.flags.exit = !0),
        (t.combat.invuln = 60),
        e().lookAt(null),
        e().lowReady(),
        e().walkTo(12.3, 16.95, { speed: 2.6 }),
        e().path?.push([13.1, 16.95]),
        (i.frozen = !0));
      {
        const H = new pe().setFromQuaternion(t.camera.quaternion, "YXZ");
        Ee(
          t,
          [
            {
              t: 0,
              p: t.camera.position.toArray(),
              yaw: H.y / ce,
              pitch: H.x / ce,
              fov: t.camera.fov,
            },
            {
              t: 1.6,
              p: [Math.max(11.65, t.camera.position.x), 1.62, 16.95],
              yaw: -90,
              pitch: 1,
              fov: t.camera.fov,
            },
          ],
          { ease: "inout" },
        );
      }
      (t.post.fadeColor.setRGB(1, 0.96, 0.9),
        t.audio.duck("amb", 0, 8),
        Ct.stop(2.6),
        await a(0.3),
        await l.tween(t.post, "fade", 1, 2.2, "in"),
        await a(1),
        !(c(p) || t.service) &&
          (location.href = location.pathname + "?section=2"));
    }
  }
  const zt = {
      intro() {},
      bedroom() {
        (i.place(wt.bedside[0], wt.bedside[1], -48 * ce, 0),
          e().place(wt.akaneStart[0], 1, 0));
      },
      lock() {
        (i.place(3.6, 3.2, -70 * ce, -0.05), e().place(4.2, 3.8, Math.PI / 2));
      },
      hall() {
        (w("D1").open(1, !0),
          t.nav.rebuild(),
          i.place(6.1, 3.9, Math.PI, 0),
          e().place(6.1, 5, 0));
      },
      study() {
        (w("D1").open(1, !0),
          w("D4").open(1, !0),
          t.nav.rebuild(),
          i.place(6.1, 6.7, -Math.PI / 2, 0),
          e().place(6.1, 7.6, 0));
      },
      guns() {
        (w("D1").open(1, !0),
          w("D4").open(1, !0),
          t.nav.rebuild(),
          i.place(8, 6.5, -Math.PI / 2, -0.15),
          e().place(7.7, 6.1, Math.PI / 2));
      },
      firstdead() {
        (w("D1").open(1, !0),
          w("D4").open(1, !0),
          t.nav.rebuild(),
          i.place(6.1, 11.4, Math.PI, 0),
          e().place(6.1, 12.3, 0),
          e().lowReady());
      },
      fight() {
        (w("D1").open(1, !0),
          w("D4").open(1, !0),
          t.nav.rebuild(),
          i.place(6.1, 15.6, Math.PI, 0),
          e().place(6.6, 15, 0),
          e().lowReady());
      },
      finale() {
        (w("D1").open(1, !0), w("D4").open(1, !0));
        for (const p of ["D5", "D3"]) {
          const P = w(p);
          ((P.locked = !1), P.open(1, !0));
        }
        (t.nav.rebuild(),
          i.place(9.6, 16.9, -Math.PI / 2, 0),
          e().place(10.6, 17.4, Math.PI / 2),
          e().lowReady());
      },
    },
    ot = {
      intro: [],
      bedroom: [],
      lock: ["torch"],
      hall: ["torch"],
      study: ["torch"],
      guns: ["torch"],
      firstdead: ["torch", "pistol"],
      fight: ["torch", "pistol"],
      finale: ["torch", "pistol"],
    },
    Ft = {
      intro: u,
      bedroom: m,
      lock: d,
      hall: x,
      study: A,
      guns: A,
      firstdead: q,
      fight: Z,
      finale: lt,
    };
  return (
    (n.goto = async function (P, { silent: M = !1 } = {}) {
      n.run++;
      const G = n.run;
      (n.heart?.stop?.(0.3),
        (n.heart = null),
        (t.playerSpeaking = !1),
        t.audio.loops.get("horde_moan")?.stop?.(0.3),
        (n.lastGot = null),
        l.clear(),
        t.zombies.clear(),
        t.hud.clearSubtitle(),
        t.hud.task?.(null),
        t.npc.revive?.(),
        t.npc.stop(),
        t.npc.work?.(null),
        (t.npc.grabbed = !1),
        t.npc.lowReady?.(),
        t.npc.holster(),
        t.npc.standUp(),
        t.npc.emote("neutral"),
        (t.post.fade = 0),
        (t.post.lid = 1),
        (t.post.blur = 0),
        (t.camCtl = null),
        (i.frozen = !1),
        t.hud.card("", "", !1),
        (n.beat = P),
        (n.flags = { kills: 0 }),
        t.combat.heal(),
        (t.weapons.ammo = t.weapons.mag),
        (t.weapons.reserve = 48));
      for (const S of ot[P] || []) t.weapons.give(S);
      (ot[P]?.includes("pistol") ||
        ((t.weapons.has.pistol = !1), (t.weapons.gunRoot.visible = !1)),
        ot[P]?.includes("torch") || (t.weapons.has.torch = !1),
        (zt[P] || (() => {}))(),
        t.audio.unlock?.(),
        (n.running = !0));
      try {
        await (Ft[P] || u)(G);
      } catch (S) {
        console.error("[script]", S);
      }
      n.running = !1;
    }),
    (n.enter = async function (P) {
      (n.run++,
        l.clear(),
        t.zombies.clear(),
        t.hud.clearSubtitle(),
        t.hud.task?.(null),
        t.npc.revive?.(),
        t.npc.stop(),
        t.npc.work?.(null),
        (t.npc.grabbed = !1),
        t.npc.holster(),
        t.npc.standUp(),
        (t.post.fade = 0),
        (t.post.lid = 1),
        (t.post.blur = 0),
        (t.camCtl = null),
        (i.frozen = !1),
        (n.beat = P),
        (n.flags = { kills: 0 }),
        t.combat.heal());
      for (const M of ot[P] || []) t.weapons.give(M);
      (ot[P]?.includes("pistol") ||
        ((t.weapons.has.pistol = !1), (t.weapons.gunRoot.visible = !1)),
        ot[P]?.includes("torch") || (t.weapons.has.torch = !1),
        ot[P]?.includes("pistol") &&
          ((t.weapons.drawK = 1), (t.weapons.state = "idle")),
        (zt[P] || (() => {}))(),
        (P === "firstdead" || P === "fight") &&
          P === "firstdead" &&
          (n.flags.z1 = t.zombies.spawn(
            "lanky",
            wt.zombieFirst[0],
            wt.zombieFirst[1],
            { yaw: 0 },
          )));
      for (let M = 0; M < 6; M++) t.step(1 / 30);
    }),
    (n.start = () =>
      n.goto(new URLSearchParams(location.search).get("beat") || "intro")),
    (n.restartBeat = () => n.goto(n.beat === "guns" ? "study" : n.beat)),
    (n.grabScene = $),
    (n.seenAt = b),
    n
  );
}
