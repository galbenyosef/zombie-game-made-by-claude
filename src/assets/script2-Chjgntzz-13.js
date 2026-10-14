// assets/script2-Chjgntzz 13 — math
// Lines 3388-7796 of readable/assets/script2-Chjgntzz.pretty.js (statement-aligned).
function da(p) {
  const e = p,
    o = p.player,
    r = () => p.npc,
    s = { beat: null, run: 0, flags: {}, running: !1 };
  e.lookMul = {};
  const T = p.sched,
    k = () => e.rooms.garden?.props,
    S = () => e.rooms.garden?.points || {},
    u = (t) => T.wait(t),
    x = (t, a) => T.until(t, a),
    b = (t, a) => e.audio.play(t, a),
    g = (t, a) => r().say(t, a),
    n = (t) => t !== s.run,
    B = new Y(),
    O = () => e.camera.getWorldPosition(B),
    ee = (t) => r().distTo(o.pos.x, o.pos.z) < t,
    le = new Map(),
    de = (t, { cool: a = 22, gap: l = 2.5, emote: i, over: c = !1 } = {}) => {
      if (
        r().speaking ||
        e.time - (s.lastBark ?? -99) < l ||
        (!c && (e.playerSpeaking || s.priest?.talking))
      )
        return !1;
      let h = [],
        m = 1 / 0;
      for (const z of t) {
        if (!e.audio.manifest?.[z]) continue;
        const w = le.get(z) ?? -1e9;
        e.time - w < a ||
          (w < m - 1e-6
            ? ((m = w), (h = [z]))
            : Math.abs(w - m) < 1e-6 && h.push(z));
      }
      if (!h.length) return !1;
      const f = h[Math.floor(Math.random() * h.length)];
      return (
        le.set(f, e.time),
        (s.lastBark = e.time),
        g(f, i ? { emote: i } : void 0),
        !0
      );
    },
    fe = {
      behind: [
        "a3_behind",
        "a3_behind3",
        "v_behind",
        "v_behind2",
        "a3_c_behind4",
        "a3_c_behind5",
      ],
      left: ["a3_left3", "v_left", "a3_c_left2", "a3_c_left3"],
      right: ["a3_right3", "v_right", "a3_c_right2", "a3_c_right3"],
      cover: ["v_cover2", "a3_c_cover3", "a3_c_cover4", "a3_c_cover5"],
      lag: ["a2_stayclose", "a2_keepmoving", "a3_c_lag1", "a3_c_lag2"],
      out: ["a3_what", "a3_backdoor", "a3_c_out1", "a3_c_out2"],
    };
  async function q(t, { thought: a = !1, vol: l = 0.95 } = {}) {
    const i = e.audio.manifest[t],
      c = (i?.text || "").replace(/^\[[^\]]*\]\s*/, "");
    (c && e.hud.subtitle(c, (i?.dur ?? 2) + 0.3, "", a ? "thought" : ""),
      (e.playerSpeaking = !0));
    try {
      await e.audio.voice(t, { vol: l, reverb: 0.04 });
    } finally {
      e.playerSpeaking = !1;
    }
  }
  const te = new ko(),
    ne = new Ae(),
    we = new vo(),
    _e = new Y(),
    We = new Y(),
    ze = (t, a) => {
      const l = e.camera;
      (l.updateMatrixWorld(),
        ne.multiplyMatrices(l.projectionMatrix, l.matrixWorldInverse),
        te.setFromProjectionMatrix(ne),
        l.getWorldPosition(_e));
      for (const i of [0.45, 1.15, 1.7]) {
        if (
          (we.center.set(t, i, a), (we.radius = 0.5), !te.intersectsSphere(we))
        )
          continue;
        We.set(t, i, a).sub(_e);
        const c = We.length();
        if (
          (We.divideScalar(c),
          !e.combat.raycastWorld(_e, We, Math.max(0.05, c - 0.35)))
        )
          return !0;
      }
      return !1;
    },
    J = 7.5;
  async function $(t, a, l = {}, i, c = 12, h = null) {
    const m = e.time,
      f = (w) => Math.hypot(w[0] - o.pos.x, w[1] - o.pos.z),
      z = (w) =>
        e.nav.walkable(w[0], w[1]) &&
        !!e.nav.path(w[0], w[1], o.pos.x, o.pos.z);
    for (;;) {
      if ((i != null && n(i)) || (h && !h())) return null;
      const w = l.minD ?? J;
      let L = a.find((F) => f(F) >= w && !ze(F[0], F[1]) && z(F));
      if (!L && e.time - m > c) {
        const F = a.slice().sort((G, oe) => f(oe) - f(G));
        if (
          ((L =
            F.find((G) => f(G) >= 6 && !ze(G[0], G[1]) && z(G)) ||
            F.find((G) => f(G) >= 12 && z(G)) ||
            null),
          !L && e.time - m > c * 3)
        )
          return null;
      }
      if (L) {
        const F = e.zombies.spawn(t, L[0], L[1], {
          ...l,
          yaw: L[2] ?? l.yaw ?? 0,
        });
        return (ve(F), F);
      }
      await u(0.15);
    }
  }
  const ve = (t) => {
      const a = o.forward(new Y());
      ((a.y = 0), a.normalize());
      const l = t.pos.x - o.pos.x,
        i = t.pos.z - o.pos.z,
        c = Math.hypot(l, i);
      c > 12 ||
        (e.zombies.groan(t, 1.2),
        (a.x * l + a.z * i) / Math.max(c, 0.001) < -0.2 &&
          ((t.alertT = 1.1), (t.rushed = !1), (t.calmT = 2)));
    },
    Pe = (t, a = 6) => {
      if (e.time - (s.lastCall ?? -99) < a || r().speaking) return;
      const l = o.forward(new Y());
      ((l.y = 0), l.normalize());
      const i = new Y().subVectors(t, o.pos);
      ((i.y = 0), i.normalize());
      const c = Math.atan2(l.x * i.z - l.z * i.x, l.x * i.x + l.z * i.z);
      de(Math.abs(c) > 2.1 ? fe.behind : c > 0 ? fe.right : fe.left, {
        cool: 18,
      }) && (s.lastCall = e.time);
    },
    Ie = (t) => {
      const a = e.weapons;
      t
        ? (a.give("torch"), a.give("pistol"), (a.on = !0), a.setVisible(!0))
        : ((a.has.torch = !1), (a.has.pistol = !1), (a.gunRoot.visible = !1));
    };
  function Se() {
    const t = e.renderer,
      a = r();
    ((s._cubeRT ||= new Mo(256, {
      type: _o,
      generateMipmaps: !0,
      minFilter: xo,
    })),
      (s._cubeCam ||= new zo(0.12, 400, s._cubeRT)),
      a.headWorld(s._cubeCam.position));
    const l = a.root.visible;
    a.root.visible = !1;
    const i = t.getRenderTarget();
    return (
      s._cubeCam.update(t, e.scene),
      t.setRenderTarget(i),
      (a.root.visible = l),
      s._cubeRT.texture
    );
  }
  async function je(t) {
    const a = e.camera,
      l = e.weapons,
      i = e.post,
      c = a.position.clone(),
      h = a.quaternion.clone(),
      m = a.fov;
    ((o.frozen = !0), l.setVisible(!1));
    const f = r(),
      z = f.akane.char.rig.head;
    (f.lookAt(c.clone()), f.emote("sad", 99));
    const w = new Y(0.0285, -0.0055, 0.064),
      L = new Y(0.017, 8e-4, 0.064),
      F = new Y(),
      G = new Y(),
      oe = new Y(),
      X = new Y(),
      se = new Y(),
      ue = new Y(),
      Q = new Y(),
      pe = new Y(),
      A = new Ue(),
      N = new Ae(),
      I = new Y(),
      W = new Y(),
      M = new Y(),
      D = new Y(0.004, -0.012, 0.05);
    let H = "in",
      C = 0,
      ce = 0,
      me = !1;
    const $e = 3.4,
      jt = 3.6,
      d0 = 15,
      y0 = 0.28,
      Ct = 0.21,
      p0 = 9,
      Jt = i.vignette,
      ct = i.ao;
    let Vt = Jt;
    ((f.akane.env = { cube: s._cubeRT ? s._cubeRT.texture : Se(), gain: 0.32 }),
      (f.eyeReflect = 1.1),
      (f.calmHead = !0),
      (f.noBlink = !0),
      (f.akane.forceFaceRes = 4096),
      (e.postOwned = !0),
      (e.camCtl = (yt) => {
        ((C += yt), (ce += yt), z.updateWorldMatrix(!0, !1));
        const dt = z.matrixWorld.elements;
        (F.copy(L).applyMatrix4(z.matrixWorld),
          G.copy(w).applyMatrix4(z.matrixWorld),
          W.copy(D).applyMatrix4(z.matrixWorld),
          oe.set(dt[8], dt[9], dt[10]).normalize(),
          X.set(dt[4], dt[5], dt[6]).normalize(),
          me || (se.copy(F), ue.copy(oe), Q.copy(X), M.copy(W), (me = !0)));
        const u0 = 1 - Math.exp(-yt * 14);
        (se.lerp(F, u0),
          ue.lerp(oe, u0).normalize(),
          Q.lerp(X, u0).normalize(),
          M.lerp(W, u0));
        const De = kt.smooth(Math.min(1, ce / p0)),
          mt = y0 + (Ct - y0) * De;
        (pe
          .copy(se)
          .addScaledVector(ue, mt)
          .addScaledVector(Q, Math.sin(ce * 0.9) * 0.0012),
          I.copy(se).addScaledVector(Q, Math.sin(ce * 0.9) * 8e-4),
          N.lookAt(pe, I, Q),
          A.setFromRotationMatrix(N));
        let Ge, Wt;
        if (H !== "out")
          ((Ge = kt.slow(Math.min(1, C / $e))),
            a.position.lerpVectors(c, pe, Ge),
            a.quaternion.slerpQuaternions(h, A, Ge),
            (Wt = m + (d0 - m) * Ge));
        else {
          const Y0 = Math.min(1, C / jt),
            F0 = kt.smooth(Math.min(1, Y0 / 0.55)),
            k0 = kt.smooth(Math.max(0, (Y0 - 0.3) / 0.7)),
            co = mt + (0.95 - mt) * F0;
          (I.lerpVectors(se, M, F0),
            pe.copy(I).addScaledVector(ue, co),
            N.lookAt(pe, I, Q),
            A.setFromRotationMatrix(N),
            a.position.lerpVectors(pe, c, k0),
            a.quaternion.slerpQuaternions(A, h, k0));
          const X0 = d0 + (38 - d0) * F0;
          ((Wt = X0 + (m - X0) * k0), (Ge = 1 - k0));
        }
        (Math.abs(a.fov - Wt) > 0.01 &&
          ((a.fov = Wt), a.updateProjectionMatrix()),
          (i.focus = Math.max(0.05, a.position.distanceTo(G))),
          (i.aperture = 0.004 + 0.018 * Ge * Ge),
          (i.vignette = Vt + 0.22 * Ge),
          (i.ao = ct * (1 - Ge)));
      }));
    const gt = () => {
      ((e.camCtl = null),
        (e.postOwned = !1),
        a.position.copy(c),
        a.quaternion.copy(h),
        (a.fov = m),
        a.updateProjectionMatrix(),
        (i.focus = 0),
        (i.aperture = 0.9),
        (i.vignette = Vt),
        (i.ao = ct),
        (f.akane.env = null),
        (f.eyeReflect = null),
        (f.calmHead = !1),
        (f.freezeMouth = !1),
        (f.noBlink = !1),
        (f.akane.forceFaceRes = 0),
        (o.frozen = !1),
        o.sync(),
        l.setVisible(!0));
    };
    return (
      e.audio.duck("amb", 0.35, 6),
      await u($e * 0.85),
      n(t) ||
      ((H = "hold"),
      (f.freezeMouth = !0),
      await g("a2_nogarden", { emote: "sad", hold: 3 }),
      n(t)) ||
      (f.emote("sad", 99), await u(0.9), n(t)) ||
      (await T.tween(i, "lid", 0, 0.24, "in"),
      e.audio.loops.get("amb_garden")?.stop?.(0.3),
      e.audio.loops.get("garden_theme")?.stop?.(0.3),
      k().setWorld("ruins"),
      (Vt = i.vignette),
      b("reveal_sting", { vol: 1 }),
      e.audio.loop("amb_ruins", { vol: 0 }).fadeTo(0.65, 2.5),
      (s.heart = e.audio.play("heartbeat", { vol: 0.55, loop: !0 })),
      f.emote("scared", 99),
      await u(0.12),
      n(t)) ||
      ((f.akane.env = { cube: Se(), gain: 0.45 }), await u(0.9), n(t)) ||
      (await T.tween(i, "lid", 1, 0.9, "out"), await u(0.8), n(t)) ||
      ((H = "out"), (C = 0), q("s2_what2", { thought: !0 }), await u(jt), n(t))
        ? (gt(), !1)
        : (gt(), !0)
    );
  }
  async function Ye(t) {
    if (
      ((s.beat = "garden"),
      S(),
      k()?.setWorld("dream"),
      Ie(!1),
      e.hud.setVisible(!0),
      (o.speedMul = 0.7),
      r().holster(),
      r().emote("neutral"),
      r().lookAt(new Y(0.2, -0.1, 0.4)),
      e.audio.loop("amb_garden", { vol: 0.62 }),
      e.post.fadeColor.setRGB(1, 0.96, 0.9),
      (e.post.fade = 1),
      (e.post.lid = 0.2),
      (e.post.blur = 0.6),
      (async () => (
        await u(0.1),
        n(t) || Se(),
        await T.tween(e.post, "fade", 0, 3.1, "out"),
        e.post.fadeColor.setRGB(0, 0, 0)
      ))(),
      (async () => (
        await u(0.6),
        await T.during(2.4, (i) => {
          ((e.post.lid = 0.2 + 0.8 * kt.smooth(i)),
            (e.post.blur = 0.6 * (1 - i)));
        })
      ))(),
      await u(3.4),
      n(t) ||
        (await q("s2_madeit"), n(t)) ||
        (await u(0.8), n(t)) ||
        (await g("a2_fornow"), n(t)))
    )
      return;
    (r().lookAt(O), (r().attend = !0));
    let a = await x(() => ee(2.5) || n(t), 16);
    if (n(t)) return;
    if (!a) {
      g("a2_comehere");
      const [i, c] = e.nav.snap(o.pos.x, o.pos.z, !0);
      if (
        (r().walkTo(i, c, { speed: 1.1, arrive: 1.8 }),
        (a = await x(() => ee(2.5) || n(t), 25)),
        n(t))
      )
        return;
    }
    if (
      (r().stop(),
      (o.speedMul = 0),
      r().turnTo(o.pos.x, o.pos.z),
      r().lookAt(O),
      e.audio.loop("garden_theme", { vol: 0 }).fadeTo(0.32, 5),
      await u(0.6),
      n(t) ||
        (await q("s2_what"), n(t)) ||
        (await u(0.35),
        r().emote("sad", 30),
        await g("a2_started", { emote: "sad", hold: 1 }),
        n(t)) ||
        (await u(0.6), await q("s2_nomemory"), n(t)) ||
        (await u(0.4), await g("a2_head", { emote: "sad", hold: 1 }), n(t)) ||
        (await u(0.7), await q("s2_stayed"), n(t)) ||
        (await u(0.5), await g("a2_couldnt", { emote: "sad", hold: 2 }), n(t)))
    )
      return;
    (await u(1.2), r().emote("sad", 99));
    {
      const i = r().pos;
      k()?.water?.ripple(i.x - 0.9, i.z + 0.6, 0.9);
    }
    (await u(1.4),
      !(
        n(t) ||
        ((r().akane.forceFaceRes = 4096), await q("s2_garden"), n(t)) ||
        (await u(0.4), n(t)) ||
        !(await je(t)) ||
        n(t)
      ) && (await Xe(t, !0)));
  }
  async function Xe(t, a = !1) {
    if (
      ((s.beat = "ruins"),
      (r().attend = !1),
      a || (k()?.setWorld("ruins"), e.audio.loop("amb_ruins", { vol: 0.65 })),
      (o.speedMul = 1),
      Ie(!0),
      e.hud.hint("F: light", 4),
      r().emote("scared", 4),
      r().lowReady(),
      r().lookAt(null),
      await u(a ? 1.6 : 0.8),
      n(t))
    )
      return;
    const l = [
        [-15.2, 3.6, Math.PI / 2],
        [-15.4, 2.2, Math.PI / 2],
        [-15, 5, Math.PI / 2],
      ],
      i = [
        [15.2, -1, -Math.PI / 2],
        [15.4, -2.4, -Math.PI / 2],
        [15, 0.4, -Math.PI / 2],
      ],
      c = [
        $("lanky", l, { state: "emerge" }, t, 6),
        $("gown", i, { state: "emerge" }, t, 6),
      ];
    ((async () => (
      await u(5.5),
      n(t) || $("gown", l, { state: "emerge" }, t, 6)
    ))(),
      b("zombie_groan_2", { pos: [-13.5, 1.3, 3.5], vol: 0.9, reverb: 0.5 }),
      await u(0.9),
      !n(t) &&
        (s.heart?.stop?.(4),
        r().aimAt(() => {
          const h = e.zombies.nearest(r().pos);
          return h
            ? h.kit.chestWorld(new Y())
            : new Y(r().pos.x, 1.2, r().pos.z + 3);
        }),
        await g("a2_church"),
        !n(t) && (await Promise.all(c), await Dt(t))));
  }
  const nt = () => {
      for (const t of s.crateRecs || []) t.remove();
      s.crateRecs = (k()?.outside?.crates || []).map((t, a) =>
        e.interact.add({
          id: "ammo_crate" + a,
          pos: t.pos,
          radius: 1.9,
          cone: 0.55,
          prompt: "take",
          enabled: () => !t.taken && e.weapons.has.pistol,
          onUse: () => {
            t.taken ||
              (t.take(),
              (e.weapons.reserve += 30),
              (e.weapons.showUntil = e.time + 4),
              b("pickup_item", { vol: 0.9 }),
              b("gun_mag_in", { vol: 0.5 }),
              e.hud.hint("+30 rounds", 2.5));
          },
        }),
      );
    },
    rt = (t, a, l = 6) =>
      (k()?.outside?.crates || []).find(
        (i) => !i.taken && Math.hypot(i.pos[0] - t, i.pos[2] - a) < l,
      );
  async function ae(
    t,
    {
      speed: a = 2.1,
      waitDist: l = 5.5,
      run: i,
      onPoint: c,
      holdAt: h = new Set(),
      holdMin: m = 1.5,
    } = {},
  ) {
    const f = (z) =>
      e.zombies
        .alive()
        .some(
          (w) =>
            w.alerted &&
            (Math.hypot(w.pos.x - r().pos.x, w.pos.z - r().pos.z) < z ||
              Math.hypot(w.pos.x - o.pos.x, w.pos.z - o.pos.z) < z),
        );
    for (let z = 0; z < t.length; z++) {
      const w = t[z];
      if (n(i)) return;
      let L = !1,
        F = !1,
        G = 0;
      const oe = () => {
          const se = ++G;
          r()
            .walkTo(w[0], w[1], { speed: a, arrive: 0.4 })
            .then((ue) => {
              se === G && (ue ? (L = !0) : (F = !0));
            });
        },
        X = () => {
          (G++, r().stop());
        };
      for (oe(); !L && !n(i);) {
        if ((await u(0.12), F)) {
          if (((F = !1), r().distTo(w[0], w[1]) < 1)) {
            L = !0;
            break;
          }
          (await u(0.35), oe());
          continue;
        }
        if (f(4.2)) {
          X();
          let Q = 0;
          if (
            (await x(() => ((Q = f(5.5) ? 0 : Q + 0.1), Q > 0.8 || n(i)), 30),
            n(i))
          )
            return;
          oe();
          continue;
        }
        const se = r().distTo(o.pos.x, o.pos.z),
          ue =
            Math.hypot(o.pos.x - w[0], o.pos.z - w[1]) >
            Math.hypot(r().pos.x - w[0], r().pos.z - w[1]);
        if (se > l && ue) {
          if (
            (X(),
            r().lookAt(O),
            e.time - (s.lastNag ?? -99) > 7 &&
              de(fe.lag, { cool: 16 }) &&
              (s.lastNag = e.time),
            await x(() => r().distTo(o.pos.x, o.pos.z) < l - 1.5 || n(i), 60),
            n(i))
          )
            return;
          (r().lookAt(null), oe());
        }
      }
      if (n(i)) return;
      if ((c && c(z), h.has(z))) {
        const se = e.time;
        let ue = 0;
        if (
          (await x(
            () => (
              (ue = f(10) ? 0 : ue + 0.1),
              (ue > 1.2 && e.time - se > m) || e.time - se > 20 || n(i)
            ),
            30,
          ),
          n(i))
        )
          return;
      }
    }
  }
  const At = [
      [2.4, 5.2],
      [0.2, 10.3],
      [8, 14],
      [15.2, 14],
      [22, 13.9],
      [29.6, 14.6],
      [33.6, 16.2],
      [34.6, 22.6],
      [37.5, 27.2],
      [40.3, 27.2],
      [42.4, 29.9],
      [43.9, 30.6],
      [45.5, 26],
      [48, 26],
      [48, 40.9],
      [41, 41.1],
      [35, 41.3],
      [31.6, 37.9],
      [23, 38.8],
      [14.5, 37.7],
      [0, 39.25],
    ],
    it = { street: 6, backalley: 12, lane: 17 },
    Oe = new Set([3, 5, 7, 12, 14, 17]);
  async function Dt(t, a = 0) {
    ((s.beat =
      a >= it.lane
        ? "lane"
        : a >= it.backalley
          ? "backalley"
          : a >= it.street
            ? "street"
            : "ruins"),
      nt(),
      e.audio.loop("vending_hum", { pos: [18.2, 1, 13.4], vol: 0.5 }),
      e.audio.loop("neon_buzz", { pos: [38.9, 3.3, 28.3], vol: 0.45 }));
    const l = k().outside.district.spots,
      i = k().outside.district.burstDoor;
    (k().outside,
      (async () => {
        let w = 0;
        const L = (F) => {
          const G = r().headWorld(new Y()),
            oe = F.kit.chestWorld(new Y()),
            X = oe.clone().sub(G),
            se = X.length();
          return (X.divideScalar(se), !e.combat.raycastWorld(G, X, se));
        };
        for (; !n(t) && s.beat !== "church_in";) {
          (await u(0.12), (w -= 0.12));
          const F = r();
          if (F.grabbed || F.dead || F.workCue) continue;
          let G = null,
            oe = 1e9;
          for (const X of e.zombies.alive()) {
            const se = X.pos.distanceTo(F.pos);
            se < 12 && se < oe && L(X) && ((oe = se), (G = X));
          }
          if (G) {
            F.aimAt(() => G.kit.chestWorld(new Y()));
            const X =
              Math.abs(
                Lt(F.yaw, Math.atan2(G.pos.x - F.pos.x, G.pos.z - F.pos.z)),
              ) < 0.3;
            w <= 0 &&
              X &&
              F.gun.raise > 0.85 &&
              (!F.path || oe < 3.5) &&
              (F.path && oe < 3.5 && F.stop(), F.fire(), (w = M0(0.6, 1)));
          } else s.beat !== "church" && F.lowReady();
        }
      })(),
      (e.zombies.onAkaneHit = null));
    const c = new Set();
    (async () => {
      for (; !n(t) && s.beat !== "church_in";) {
        await u(0.3);
        for (const w of e.zombies.alive())
          !c.has(w) && w.pos.distanceTo(o.pos) < 9 && (c.add(w), Pe(w.pos, 4));
      }
    })();
    const h = (w, L) => {
        (async () => (await u(w), n(t) || L()))();
      },
      m = (w, L = 5) => {
        (async () => (
          await x(() => !r().speaking || n(t), L),
          !n(t) && !r().dead && g(w)
        ))();
      },
      f = (w, L, F = {}) => $(w, L, { state: "emerge", ...F }, t, 8),
      z = new Set();
    (await ae(At.slice(a), {
      run: t,
      speed: 2.15,
      waitDist: 6,
      holdAt: new Set([...Oe].filter((w) => w >= a).map((w) => w - a)),
      onPoint: (w) => {
        const L = w + a;
        if (!z.has(L))
          switch (
            (z.add(L),
            L === it.street && (s.beat = "street"),
            L === it.backalley && (s.beat = "backalley"),
            L === it.lane && (s.beat = "lane"),
            L)
          ) {
            case 1:
              (m("a2_blocked"),
                f("gown", l.alleyAhead),
                h(2.2, () => f("lanky", l.forecourtW)));
              break;
            case 4:
              (h(0.4, () => {
                (i.open(),
                  b("door_burst", { pos: i.pos, vol: 1, reverb: 0.4 }),
                  (e.player.shake += 0.25),
                  e.zombies.spawn("lanky", i.spot[0], i.spot[1], {
                    state: "emerge",
                    yaw: Math.PI,
                  }));
              }),
                h(0.9, () => e.nav.rebuild()),
                h(1.6, () => f("gown", l.alleyDump)));
              break;
            case 6:
              (f("lanky", l.streetBus),
                h(1, () => f("gown", l.streetBus)),
                h(2.4, () => f("lanky", l.streetBus)),
                h(4, () => f("gown", l.streetN)));
              break;
            case 8:
              (m("a2_bus"),
                e.zombies.spawn("gown", l.kitchen[0][0], l.kitchen[0][1], {
                  yaw: l.kitchen[0][2],
                }));
              break;
            case 9:
              m("a2_dark");
              break;
            case 11:
              rt(44, 28) && m("a2_ammo", 3);
              break;
            case 12:
              (rt(44, 28) &&
                h(2.5, () => {
                  rt(44, 28) &&
                    r().distTo(o.pos.x, o.pos.z) < 7 &&
                    m("a2_ammo", 3);
                }),
                h(0.8, () => m("a2_backdoor")));
              break;
            case 13:
              (f("lanky", l.backS),
                h(1.3, () => f("gown", l.backS)),
                h(3.2, () => f("gown", l.backN)));
              break;
            case 14:
              h(1, () => f("lanky", l.passageW));
              break;
            case 15:
              (f("brute", l.streetS),
                h(1.2, () => f("gown", l.streetS)),
                h(2.6, () => f("lanky", l.streetS)));
              break;
            case 16:
              rt(38.35, 43.9) && h(0.5, () => m("a2_ammo", 3));
              break;
            case 17:
              (m("a2_lane"), h(2, () => f("lanky", l.laneE)));
              break;
          }
      },
    }),
      !n(t) && (await Ht(t)));
  }
  async function Ht(t) {
    s.beat = "church";
    const a = k().church,
      l = k().outside.district.spots;
    if (
      (r().lowReady(),
      r().lookAt(null),
      await r().walkTo(0, 39.3, { speed: 1.9, arrive: 0.2 }),
      n(t) || (r().holster(), r().turnTo(0, 41), await u(0.35), n(t)))
    )
      return;
    b("door_pound", { pos: [0, 1.5, 40], vol: 0.9, reverb: 0.6 });
    const i = g("a2_stuck");
    (e.hud.hint("Cover her", 4),
      (async () => (
        await i,
        await u(0.2),
        !n(t) &&
          (await q("s2_cover"),
          await u(0.8),
          !n(t) &&
            rt(4.3, 37.9, 2) &&
            (await x(() => !r().speaking || n(t), 4),
            !n(t) && rt(4.3, 37.9, 2) && g("a2_ammo")))
      ))());
    const c = e.time,
      h = [
        [0.6, "gown", l.squareLane],
        [2, "lanky", l.squareW],
        [3.8, "lanky", l.squareBand],
        [5.4, "gown", l.squareLane],
        [6.8, "brute", l.squareW],
        [8.2, "gown", l.squareBand],
        [9.6, "lanky", l.squareLane],
        [11, "gown", l.squareW],
        [12.4, "lanky", l.squareBand],
      ];
    (async () => {
      for (const [A, N, I] of h) {
        if (
          (await x(() => e.time - c >= A || n(t), 60),
          n(t) ||
            s.flags.doorOpen ||
            (await x(
              () => e.zombies.alive().length < 12 || n(t) || s.flags.doorOpen,
              20,
            ),
            n(t) || s.flags.doorOpen))
        )
          return;
        $(
          N,
          I,
          { state: "emerge", target: "akane" },
          t,
          6,
          () => !s.flags.doorOpen,
        );
      }
    })();
    const m = 14,
      f = 1.3;
    let z = 0,
      w = e.time,
      L = 0,
      F = 0,
      G = !1,
      oe = !1;
    const X = {
        pos: [0, 39.32],
        yaw: 0,
        hold: !0,
        L: [0.3, 1.25, 39.92],
        R: [-0.3, 1.25, 39.92],
        crouch: 0.05,
        lean: 10,
        hop: 0,
      },
      se = () => {
        let A = 99;
        for (const N of e.zombies.alive())
          A = Math.min(A, Math.hypot(N.pos.x - r().pos.x, N.pos.z - r().pos.z));
        return A;
      };
    if (
      (await x(() => {
        if (n(t) || r().dead) return !0;
        const A = Math.min(0.1, e.time - w);
        w = e.time;
        const N = se(),
          I = N < 1.9;
        (N < 4 && !G && de(fe.cover, { cool: 16 }) && (G = !0),
          z > 0.5 && !oe && !r().speaking && ((oe = !0), q("s2_hurry")),
          I || (z = Math.min(1, z + A / m)),
          (F += I ? 0 : A));
        const W = (F % 1.8) / 1.8,
          M = W < 0.22 ? Math.sin((W / 0.22) * Math.PI) : 0;
        !I &&
          W < 0.02 + A / 1.8 &&
          F > 0.5 &&
          ((L = Math.min(0.1, L + 0.01)),
          a.open(L),
          b(Math.random() < 0.5 ? "door_pound" : "bookcase_thud", {
            pos: [0, 1.5, 40],
            vol: 0.8,
            rate: 0.85 + Math.random() * 0.2,
            reverb: 0.6,
          }),
          Math.random() < 0.6 &&
            b("furniture_scrape", {
              pos: [0, 0.3, 40.3],
              vol: 0.45,
              rate: 0.7,
              reverb: 0.5,
            }),
          e.fx.dust({ x: 0, y: 3.2, z: 39.95 }, 1.2, 0.5));
        const D = (f - 0.3) * Math.sin(L * 1.7);
        return (
          (X.L[2] = 39.92 + D),
          (X.R[2] = 39.92 + D),
          (X.pos[1] = 39.32 + D * 0.8),
          (X.lean = 10 + M * 12),
          (X.hop = M * 0.22),
          (X.crouch = 0.05 + M * 0.08),
          I
            ? r().work({ ...X, hold: !1, lean: -6, crouch: 0.1, hop: 0 })
            : r().work(X),
          e.hud.task("Cover her", z, I),
          z >= 1
        );
      }, 90),
      n(t) ||
        r().dead ||
        ((s.flags.doorOpen = !0),
        r().work(null),
        e.hud.task(null),
        b("church_doors", { pos: [0, 2, 40], vol: 1, reverb: 0.6 }),
        await T.during(1.1, (A) => a.open(L + (1 - L) * kt.inout(A))),
        n(t)))
    )
      return;
    (e.nav.rebuild(), (s.beat = "church_in"), g("a2_run"));
    const ue = e.audio.loop?.("horde_moan", { vol: 0 });
    (ue?.fadeTo?.(0.9, 1.5),
      r().lowReady(),
      r().walkTo(0, 45.5, { speed: 2.6, arrive: 0.4 }));
    const Q = [...l.squareLane, ...l.squareW, ...l.squareBand];
    if (
      ((async () => {
        for (let A = 0; A < 12; A++) {
          if (n(t) || s.flags.inside) return;
          ($(
            A % 3 === 0 ? "lanky" : "gown",
            [
              Q[(A * 5) % Q.length],
              Q[(A * 5 + 2) % Q.length],
              Q[(A * 5 + 4) % Q.length],
            ],
            { state: "emerge" },
            t,
            1.2,
            () => !s.flags.inside,
          ),
            await u(0.3));
        }
      })(),
      await x(() => o.pos.z > 41.4 || n(t), 120),
      n(t))
    )
      return;
    ((s.flags.inside = !0), (o.frozen = !0), (e.combat.invuln = 60));
    {
      const A = e.camera,
        N = new _0().setFromQuaternion(A.quaternion, "YXZ"),
        I = A.position.clone(),
        W = Math.max(I.z, 43.4);
      Ft(
        e,
        [
          { t: 0, p: I.toArray(), yaw: N.y / v0, pitch: N.x / v0, fov: A.fov },
          { t: 1.1, p: [I.x * 0.5, I.y, W], look: [0, 1.85, 40], fov: A.fov },
          { t: 6, p: [I.x * 0.4, I.y, W + 1], look: [0, 1.85, 40], fov: A.fov },
        ],
        { ease: "inout" },
      );
    }
    for (const A of e.zombies.alive()) {
      const N = A.pos.z > 40.3,
        I = A.pos.z > 38.4 && Math.abs(A.pos.x) < 1.6;
      if (!(!N && !I)) {
        if (N && ze(A.pos.x, A.pos.z)) {
          (r().aimAt(() => A.kit.chestWorld(new Y())),
            r().fire(),
            A.hit(
              99,
              "chest",
              A.kit.chestWorld(new Y()),
              new Y(0, 0, -1),
              "akane",
            ));
          continue;
        }
        (A.pos.set(Math.max(-1.2, Math.min(1.2, A.pos.x)), 0, 38.3),
          (A.circle.x = A.pos.x),
          (A.circle.z = A.pos.z),
          (A.alertT = 1.3),
          (A.path = null),
          A.sync());
      }
    }
    for (const A of e.zombies.alive()) {
      const N = A.pos.z > 38.2 ? A.pos.z : 38.2 - Math.random() * 0.5;
      ((A.goal = new Y(
        Math.max(-2.4, Math.min(2.4, A.pos.x)) + (Math.random() - 0.5) * 0.5,
        0,
        N,
      )),
        (A.path = null),
        (A.repath = 0));
    }
    (e.audio.duck("amb", 0.2, 6),
      await u(0.45),
      await T.during(0.75, (A) => a.open(1 - kt.inout(A))),
      b("door_slam", { pos: [0, 2, 40], vol: 1, reverb: 0.8 }),
      (e.player.shake += 0.4),
      e.zombies.clear((A) => A.pos.z < 40.2),
      ue?.fadeTo?.(0.25, 1.2));
    const pe = async (A) => {
      (b("door_pound", {
        pos: [0, 1.5, 40],
        vol: A,
        rate: 0.9 + Math.random() * 0.2,
        reverb: 0.7,
      }),
        a.open(-0.04 * A),
        e.fx.dust(
          { x: (Math.random() - 0.5) * 1.8, y: 4.15, z: 40.95 },
          0.9,
          0.5 * A,
        ),
        await u(0.07),
        a.open(-0.015 * A),
        await u(0.07),
        a.open(0));
    };
    for (let A = 0; A < 5; A++) {
      if ((await u(A ? 0.42 + Math.random() * 0.35 : 0.3), n(t))) return;
      await pe(1 - A * 0.12);
    }
    (e.audio.loops.get("amb_ruins")?.stop?.(2),
      ue?.stop?.(3),
      await u(0.5),
      await q("s2_end"),
      !n(t) && (await qt(t, !0)));
  }
  const tt = () => k()?.churchIn,
    Ze = () => k()?.forest,
    _ = () => k()?.house,
    re = () => tt()?.points || {},
    ie = (...t) => t.find((a) => $0[a]) || "lanky",
    Le = (t, a, l) => {
      (async () => (await u(a), n(t) || l()))();
    },
    Pt = () => {
      const t = e.camera,
        a = new _0().setFromQuaternion(t.quaternion, "YXZ");
      ((e.camCtl = null),
        o.place(t.position.x, t.position.z, a.y, a.x, o.eye, 0),
        (o.frozen = !1));
    },
    Ke = () => {
      const t = e.camera,
        a = new _0().setFromQuaternion(t.quaternion, "YXZ");
      return {
        t: 0,
        p: t.position.toArray(),
        yaw: a.y / v0,
        pitch: a.x / v0,
        fov: t.fov,
      };
    },
    v = (() => {
      if (!$0.priest) return null;
      let t = null;
      try {
        t = Po(e.makeCtx(), { kind: "priest", seed: 5 });
      } catch (i) {
        return (console.warn("[script2] no priest:", i.message), null);
      }
      ((t.root.visible = !1), (t.root.name = "priest"), e.scene.add(t.root));
      const a = { z: t, talking: !1, look: null, yawTw: null, walk: null };
      ((a.setLook = (i) => {
        ((a.look = i), i || t.lookAt?.(null));
      }),
        (a.place = (i, c, h) => {
          (t.root.position.set(i, 0, c),
            (t.root.rotation.y = h),
            (a.walk = null),
            (a.yawTw = null),
            (a.rising = !1));
        }),
        (a.kneelAt = (i, c, h) =>
          a.place(i + Math.sin(h) * 0.38, c + Math.cos(h) * 0.38, h)),
        (a.rise = () => {
          ((a.riseYaw0 = t.root.rotation.y),
            (a.rising = !0),
            (a.yawTw = null),
            t.setState("rise"));
        }),
        (a.head = (i = new Y()) =>
          t.headWorld
            ? t.headWorld(i)
            : i.set(t.root.position.x, 1.6, t.root.position.z)),
        (a.turn = (i, c, h) => {
          a.yawTw = {
            from: t.root.rotation.y,
            to: i,
            t0: e.time + c,
            t1: e.time + h,
          };
        }),
        (a.walkTo = (i, c) =>
          new Promise((h) => {
            (t.setState("walk"), (a.walk = { to: [i, c], done: h }));
          })),
        (a.solid = (i) => {
          const c = e.world.circles;
          if (
            (i &&
              !a.circle &&
              ((a.circle = {
                x: t.root.position.x,
                z: t.root.position.z,
                r: 0.32,
              }),
              c.push(a.circle)),
            !i && a.circle)
          ) {
            const h = c.indexOf(a.circle);
            (h >= 0 && c.splice(h, 1), (a.circle = null));
          }
        }));
      const l = new Y();
      return (
        e.updaters.push((i) => {
          if (t.root.visible) {
            if (
              (t.setMouth?.(
                a.talking ? Math.min(1, e.audio.voiceLevel * 2.7) : 0,
              ),
              a.look &&
                t.lookAt?.(typeof a.look == "function" ? a.look(l) : a.look),
              a.yawTw)
            ) {
              const c = a.yawTw,
                h = Math.min(
                  1,
                  Math.max(0, (e.time - c.t0) / Math.max(0.001, c.t1 - c.t0)),
                );
              ((t.root.rotation.y = c.from + Lt(c.from, c.to) * kt.smooth(h)),
                h >= 1 && (a.yawTw = null));
            }
            if (a.walk) {
              const c = t.root,
                h = a.walk.to[0] - c.position.x,
                m = a.walk.to[1] - c.position.z,
                f = Math.hypot(h, m);
              if (f < 0.06) {
                const z = a.walk.done;
                ((a.walk = null), t.setState("stand"), z());
              } else {
                c.rotation.y +=
                  Lt(c.rotation.y, Math.atan2(h, m)) * Math.min(1, i * 7);
                const z = Math.min(
                  f / Math.max(i, 0.001),
                  t.groundSpeed || 1.05,
                );
                ((c.position.x += Math.sin(c.rotation.y) * z * i),
                  (c.position.z += Math.cos(c.rotation.y) * z * i));
              }
            }
            (t.update(i, { speed: 1 }),
              a.circle &&
                ((a.circle.x = t.root.position.x),
                (a.circle.z = t.root.position.z)),
              a.rising &&
                ((t.root.rotation.y = a.riseYaw0 + (t.riseTurn || 0)),
                t.state !== "rise" &&
                  ((a.rising = !1),
                  (t.root.rotation.y = a.riseYaw0 - Math.PI))));
          }
        }),
        e.prepares.push((i) => {
          t.root.visible && t.prepare(i);
        }),
        (t.onEvent = (i) => {
          const c = t.root.position;
          i === "thud"
            ? b("body_fall_stone", {
                pos: [c.x, 0.3, c.z],
                vol: 0.9,
                reverb: 0.4,
              })
            : i === "step" &&
              (t.state === "walk" || t.state === "flinch") &&
              b("step_stone_" + (1 + Math.floor(Math.random() * 4)), {
                pos: [c.x, 0.05, c.z],
                vol: 0.35,
                ref: 1.5,
              });
        }),
        a
      );
    })();
  async function wt(t, { hold: a = 0.25, vol: l } = {}) {
    const i = e.audio.manifest[t],
      c = (i?.text || "").replace(/^\[[^\]]*\]\s*/, "");
    c && e.hud.subtitle(c, (i?.dur ?? 2.5) + 0.3, "PRIEST");
    const h = v ? v.head() : new Y(0, 1.6, 57);
    v && (v.talking = !0);
    try {
      await e.audio.voice(t, {
        pos: [h.x, h.y, h.z],
        ref: 2.4,
        rolloff: 0.8,
        reverb: 0.45,
        vol: l ?? 1,
        onHandle: (m) => {
          s.prVoice = m;
        },
      });
    } finally {
      (v && (v.talking = !1), (s.prVoice = null));
    }
    await u(a);
  }
  const a0 = (t = 0.06) => {
      (s.prVoice?.stop?.(t), (s.prVoice = null), v && (v.talking = !1));
    },
    K = { k: 0, want: 0, t: 0, was: !1, spike: 0, beatT: 0 },
    s0 = { t0: null },
    ht = (t) => {
      const a = t.getChannelData(0),
        l = Math.floor(t.sampleRate * 0.01),
        i = [];
      for (let h = 0; h + l < a.length; h += l) {
        let m = 0;
        for (let f = 0; f < l; f += 2) m += a[h + f] * a[h + f];
        i.push(m);
      }
      let c = 0;
      for (const h of i) c = Math.max(c, h);
      for (let h = 1; h < i.length; h++) if (i[h] > c * 0.3) return h * 0.01;
      return 0;
    },
    ft = (t) => {
      const a = e.audio,
        l = a.ctx,
        i = a.buffers.get("heartbeat_sick");
      if (!l || !i) {
        i === void 0 && l && a.buffer("heartbeat_sick");
        return;
      }
      s0.t0 == null && (s0.t0 = ht(i));
      const c = l.createBufferSource();
      c.buffer = i;
      const h = l.createGain(),
        m = t * (i._norm ?? 1),
        f = l.currentTime,
        z = 0.55;
      (h.gain.setValueAtTime(m, f),
        h.gain.setValueAtTime(m, f + z - 0.12),
        h.gain.linearRampToValueAtTime(0, f + z),
        c.connect(h),
        h.connect(a.bus.sfx),
        c.start(f, Math.max(0, s0.t0 - 0.03), z),
        (c.onended = () => {
          try {
            h.disconnect();
          } catch {}
        }));
    };
  e.updaters.push((t) => {
    if (
      ((K.k += (K.want - K.k) * Math.min(1, t * 0.35)),
      K.k < 0.01 && K.want === 0)
    ) {
      K.was &&
        ((K.was = !1),
        (e.post.blur = 0),
        (e.post.ca = 0.0016),
        (o.lean -= K.lean || 0),
        (K.lean = 0));
      return;
    }
    ((K.was = !0), (K.t += t));
    const a = 0.5 + 0.5 * Math.sin(K.t * 0.83) * Math.sin(K.t * 0.31 + 1.3),
      l = a * a;
    (e.camCtl || (e.post.blur = K.k * (0.05 + 0.2 * l)),
      (e.post.ca = 0.0016 + K.k * 0.0045 * a));
    const i = o.frozen ? 0 : K.k * 0.035 * Math.sin(K.t * 0.57);
    ((o.lean += i - (K.lean || 0)),
      (K.lean = i),
      o.frozen || (o.yaw += Math.sin(K.t * 0.71) * K.k * 9e-4));
    const c = St.want,
      h = (c.bpm || 62 + 44 * K.k) + 42 * K.spike;
    ((K.beatT -= t),
      K.beatT <= 0 &&
        ((K.beatT = 60 / h),
        ft(0.1 + 0.42 * K.k * (0.6 + 0.4 * a) + 0.25 * K.spike),
        typeof e.post.pulse == "number" &&
          (e.post.pulse = Math.max(
            e.post.pulse,
            Math.min(1, (c.beat || 0.2 + 0.55 * K.k * K.k) + 0.45 * K.spike),
          ))));
  });
  {
    let t = 0;
    e.updaters.push((a) => {
      if (((t -= a), t > 0)) return;
      t = 1;
      const l = e.zombies.list.filter((c) => c.dead && c.deadT > 5);
      if (l.length <= 10) return;
      l.sort((c, h) => h.deadT - c.deadT);
      const i = new Set(
        l.slice(0, l.length - 10).filter((c) => !ze(c.pos.x, c.pos.z)),
      );
      i.size && e.zombies.clear((c) => i.has(c));
    });
  }
  function Gt(t, a, { stopFor: l = 3.5, range: i = 12 } = {}) {
    (async () => {
      let c = 0;
      const h = (m) => {
        const f = r().headWorld(new Y()),
          z = m.kit.chestWorld(new Y()),
          w = z.clone().sub(f),
          L = w.length();
        return (w.divideScalar(L), !e.combat.raycastWorld(f, w, L));
      };
      for (; !n(t) && a();) {
        (await u(0.12), (c -= 0.12));
        const m = r();
        if (m.grabbed || m.dead || m.workCue) continue;
        let f = null,
          z = 1e9;
        for (const w of e.zombies.alive()) {
          const L = w.pos.distanceTo(m.pos);
          L < i && L < z && h(w) && ((z = L), (f = w));
        }
        if (f) {
          m.aimAt(() => f.kit.chestWorld(new Y()));
          const w =
            Math.abs(
              Lt(m.yaw, Math.atan2(f.pos.x - m.pos.x, f.pos.z - m.pos.z)),
            ) < 0.3;
          c <= 0 &&
            w &&
            m.gun.raise > 0.85 &&
            (!m.path || z < l) &&
            (m.path && z < l && m.stop(), m.fire(), (c = M0(0.6, 1)));
        } else m.lowReady();
      }
    })();
  }
  function n0(t) {
    const a = k().church,
      l = { on: !0, jolt: 0, heat: 0, pause: !1 },
      i = async (c) => {
        (b("door_pound", {
          pos: [0, 1.5, 40],
          vol: c,
          rate: 0.85 + Math.random() * 0.25,
          reverb: 0.75,
        }),
          Math.random() < 0.35 &&
            b(Math.random() < 0.5 ? "zombie_groan_1" : "zombie_groan_3", {
              pos: [(Math.random() - 0.5) * 3, 1.5, 38.5],
              vol: 0.35 * c,
              reverb: 0.5,
            }),
          a.open(-0.04 * c),
          e.fx.dust(
            { x: (Math.random() - 0.5) * 1.8, y: 4.15, z: 40.95 },
            0.9,
            0.5 * c,
          ),
          (l.jolt = Math.max(l.jolt, c)),
          await u(0.07),
          l.on && a.open(-0.015 * c),
          await u(0.07),
          l.on && a.open(0));
      };
    return (
      (async () => {
        for (; l.on && !n(t);) {
          if (
            (await u(
              Math.max(0.7, 3 - l.heat * 2.2) * (0.6 + Math.random() * 0.8),
            ),
            !l.on || n(t))
          )
            return;
          if (l.pause) continue;
          const c = Math.random() < 0.35 ? 3 : Math.random() < 0.5 ? 2 : 1;
          for (let h = 0; h < c && l.on && !l.pause; h++)
            (await i(Math.min(1.1, 0.5 + Math.random() * 0.3 + l.heat * 0.35)),
              await u(0.22 + Math.random() * 0.2));
        }
      })(),
      (l.stop = () => {
        l.on = !1;
      }),
      l
    );
  }
  function r0(t, a) {
    const l = re().akaneHold || [0, 41.45, Math.PI],
      i = l[2] ?? Math.PI,
      c = Math.sin(i),
      h = Math.cos(i),
      m = -h,
      f = c,
      z = (L, F) => [
        l[0] + c * 0.55 + m * L * 0.3,
        F,
        l[1] + h * 0.55 + f * L * 0.3,
      ],
      w = {
        pos: [l[0], l[1]],
        yaw: i,
        hold: !0,
        L: z(-1, 1.32),
        R: z(1, 1.08),
        crouch: 0.1,
        lean: 16,
        hop: 0,
      };
    (r().holster(),
      r().lookAt(null),
      r().work(w),
      (async () => {
        let L = e.time;
        await x(() => {
          if (!a.on || n(t)) return !0;
          const F = Math.min(0.1, e.time - L);
          return (
            (L = e.time),
            (a.jolt = Math.max(0, a.jolt - F * 3.2)),
            (w.lean = 16 - 12 * a.jolt),
            (w.crouch = 0.1 + 0.07 * a.jolt),
            !1
          );
        }, 3600);
      })());
  }
  async function qt(t, a = !1) {
    s.beat = "nave";
    const l = re(),
      i = l.priest || [0, 57.3, 0],
      c = l.approach || [0, 52.6];
    l.reveal;
    const h = l.akaneHold || [0, 41.45, Math.PI];
    (e.audio.loop("amb_church", { vol: 0 }).fadeTo(0.55, 3),
      e.audio
        .loop("horde_moan", { pos: [0, 1.5, 35.5], vol: 0 })
        ?.fadeTo?.(0.28, 2));
    const m = e.weapons;
    ((m.has.pistol = !1),
      (m.gunRoot.visible = !1),
      (m.on = !0),
      (o.speedMul = 0.72));
    const f = n0(t);
    if (
      ((s.siege = f),
      v &&
        (v.kneelAt(i[0], i[1], i[2] ?? 0),
        (v.z.root.visible = !0),
        v.z.setState("pray", { instant: !0 }),
        v.setLook(null)),
      (s.murmur = e.audio.loop("priest_murmur", {
        pos: [i[0], 0.95, i[1]],
        vol: 0,
      })),
      s.murmur?.fadeTo?.(0.85, 2),
      (a &&
        (Pt(),
        await r().walkTo(h[0], h[1] + 0.3, { speed: 2.4, arrive: 0.2 }),
        n(t))) ||
        (r0(t, f), await u(0.4), n(t)))
    )
      return;
    g("a3_hold2", { emote: "scared" });
    const z = e.audio.loop("heartbeat", { vol: 0 });
    s.naveHeart = z;
    const w = () => Math.hypot(o.pos.x - i[0], o.pos.z - i[1]),
      L = Math.max(3.2, Math.hypot(c[0] - i[0], c[1] - i[1]));
    let F = e.time;
    (await x(() => {
      if (n(t)) return !0;
      const G = w();
      return (
        z?.fadeTo?.(Math.max(0, Math.min(1, (15 - G) / 10)) * 0.7, 0.4),
        (f.heat = Math.min(0.6, f.heat + 0.0015)),
        e.time - F > 24 &&
          G > 9 &&
          !r().speaking &&
          ((F = e.time), g("a3_go2", { emote: "scared" })),
        G < L || o.pos.z > c[1]
      );
    }, 3600),
      !n(t) && (await b0(t)));
  }
  const Zt = { sat: 0.78 / 1.05, exposure: 1.08 / 1.28 };
  async function b0(t) {
    const a = re(),
      l = a.priest || [0, 57.3, 0],
      i = a.reveal || [0.15, 55.9],
      c = s.siege;
    ((o.frozen = !0),
      (e.combat.invuln = 120),
      (e.post.aoRadius = 0.22),
      (e.lookMul.sat ??= 1),
      (e.lookMul.exposure ??= 1),
      T.tween(e.lookMul, "sat", Zt.sat, 3.5, "inout"),
      T.tween(e.lookMul, "exposure", Zt.exposure, 3.5, "inout"));
    const h = [l[0], 1.02, l[1]],
      m = Ke();
    if (
      (Ft(
        e,
        [
          m,
          {
            t: 4.8,
            p: [i[0], 1.6, i[1]],
            look: [h[0] + 0.05, h[1] - 0.05, h[2]],
            fov: m.fov - 8,
          },
        ],
        { ease: "inout" },
      ),
      s.naveHeart?.fadeTo?.(0.85, 1.5),
      await u(2.6),
      n(t) ||
        (c && (c.pause = !0), await u(0.9), n(t)) ||
        (s.murmur?.fadeTo?.(0, 0.35),
        v?.z.setState("still"),
        await u(2.2),
        n(t)) ||
        (v &&
          (v.setLook((z) => z.copy(e.camera.position)),
          v.z.setState("look_back")),
        await u(0.85),
        n(t)) ||
        (b("piano_low_note", { vol: 0.55, reverb: 0.8 }),
        s.naveHeart?.fadeTo?.(0.3, 2.5),
        await u(0.9),
        n(t)) ||
        (await wt("p_easy"), n(t)))
    )
      return;
    v &&
      (v.rise(),
      b("cassock_rustle_rise", { pos: [l[0], 0.8, l[1]], vol: 0.7 }));
    {
      const z = Ke();
      Ft(
        e,
        [
          z,
          {
            t: 2.4,
            p: [i[0], 1.6, i[1] - 0.45],
            look: [l[0], 1.5, l[1] + 0.38],
            fov: z.fov + 4,
          },
        ],
        { ease: "inout" },
      );
    }
    if (
      (await u(2.5),
      n(t) ||
        (v &&
          (v.z.setState("talk"), v.setLook((z) => z.copy(e.camera.position))),
        s.naveHeart?.stop?.(2),
        (s.naveHeart = null),
        Pt(),
        (o.speedMul = 0),
        (e.combat.invuln = 120),
        c && ((c.pause = !1), (c.heat = Math.max(c.heat, 0.5))),
        await u(0.25),
        n(t)) ||
        (await q("s3_out"), n(t)) ||
        (v && v.setLook(new Y(4.25, 1.5, 61)),
        await wt("p_back2", { hold: 0.3 }),
        n(t)) ||
        (v && v.setLook((z) => z.copy(e.camera.position)),
        await q("s3_move"),
        n(t)) ||
        (c && (c.heat = Math.max(c.heat, 0.85)), await u(0.4), n(t)) ||
        (await wt("p_save", { hold: 0.7 }), n(t)) ||
        (await q("s3_name"), n(t)) ||
        (c && (c.pause = !0), await u(0.35), n(t)))
    )
      return;
    let f = !1;
    if (v) {
      v.setLook((w) => w.copy(e.camera.position));
      const z = v.z.onEvent;
      ((v.z.onEvent = (w, L) => {
        (w === "strange" && L === "held" && (f = !0), z?.(w, L));
      }),
        R("strange", "still"),
        Le(t, 4, () => {
          v.z.onEvent !== z && (v.z.onEvent = z);
        }));
    }
    {
      const z = Ke(),
        w = v ? v.head() : new Y(0, 1.6, 57.3),
        L = z.p[0] - w.x,
        F = z.p[2] - w.z,
        G = Math.hypot(L, F) || 1;
      Ft(
        e,
        [
          z,
          {
            t: 3,
            p: [w.x + (L / G) * 1, w.y + 0.02, w.z + (F / G) * 1],
            look: [w.x, w.y - 0.02, w.z],
            fov: 40,
          },
        ],
        { ease: "inout" },
      );
    }
    ((e.weapons.torchMul ??= 1),
      T.tween(e.weapons, "torchMul", 0.12, 1.6, "inout"),
      (e.lookMul.sat ??= 1),
      T.tween(e.lookMul, "sat", Zt.sat * 0.85, 2.2, "inout"),
      b("piano_low_note", { vol: 0.45, reverb: 0.85, rate: 0.8 }),
      Le(t, 1.2, () =>
        b("whisper_creepy", {
          pos: v ? v.head().toArray() : [0, 1.6, 57],
          vol: 0.22,
        }),
      ),
      await x(() => n(t) || f, 3.4),
      !n(t) &&
        (await u(0.7),
        !n(t) &&
          (T.tween(e.lookMul, "sat", 1, 1.2, "out"),
          T.tween(e.lookMul, "exposure", 1, 1.2, "out"),
          T.tween(e.weapons, "torchMul", 1, 0.5, "out"),
          await Ne(t, !0))));
  }
  const R = (t, a = "stand", l) => {
      v && v.z.setState(So.includes(t) ? t : a, l);
    },
    V = {
      pos: v ? v.z.root.position : new Y(0, 0, 57.3),
      hurt: (t) => s.onPriestHit?.(t),
    },
    j = () => !!s.pr?.down,
    xe = [
      [-3, 38.3, 0.45],
      [3, 38.3, -0.45],
      [-2.3, 37.3, 0.3],
      [2.3, 37.3, -0.3],
      [0, 36.6, 0],
      [-1.3, 36.2, 0.15],
      [1.3, 36.2, -0.15],
      [-3.6, 36.9, 0.6],
      [3.6, 36.9, -0.6],
    ],
    Be = () => {
      const t = xe.slice();
      for (let a = t.length - 1; a > 0; a--) {
        const l = Math.floor(Math.random() * (a + 1));
        [t[a], t[l]] = [t[l], t[a]];
      }
      return t;
    },
    Ve = {
      west: [
        [-2.6, 41.9],
        [-3.9, 42.8],
        [-4.75, 45.2],
        [-5, 48],
      ],
      centre: [
        [0, 43.6],
        [0, 46.8],
      ],
      east: [
        [2.1, 42.5],
        [4.5, 43.2],
        [4.75, 45.4],
        [4.8, 48.2],
      ],
    },
    be = (t) => {
      const a = Math.random();
      return t === "akane"
        ? a < 0.7
          ? "east"
          : "centre"
        : t && typeof t == "object"
          ? a < 0.38
            ? "west"
            : a < 0.72
              ? "centre"
              : "east"
          : a < 0.34
            ? "west"
            : a < 0.66
              ? "east"
              : "centre";
    },
    Me = (t, a) => {
      if (!t || t.dead) return t;
      if (
        ((t._route = Ve[be(a)].map((l) => [
          l[0] + (Math.random() - 0.5) * 0.4,
          l[1] + (Math.random() - 0.5) * 0.3,
        ])),
        (t._routeTgt = a ?? t.forceTarget),
        (t.goal = new Y(t._route[0][0], 0, t._route[0][1])),
        (t.path = null),
        (t.repath = 0),
        s._aisles !== s.run)
      ) {
        const l = s.run;
        ((s._aisles = l),
          (async () => {
            for (; !n(l) && !s.flags.out;) {
              await u(0.2);
              for (const i of e.zombies.alive()) {
                if (!i._route || i.air) continue;
                const c = i._route[0];
                if (!(Math.hypot(c[0] - i.pos.x, c[1] - i.pos.z) > 1))
                  if ((i._route.shift(), i._route.length))
                    (i.goal.set(i._route[0][0], 0, i._route[0][1]),
                      (i.path = null),
                      (i.repath = 0));
                  else {
                    const h =
                      i._routeTgt === V && j()
                        ? Math.random() < 0.7
                          ? "player"
                          : "akane"
                        : i._routeTgt;
                    ((i._route = null),
                      (i.goal = null),
                      h && (i.forceTarget = h),
                      (i.path = null),
                      (i.repath = 0));
                  }
              }
            }
            s._aisles === l && (s._aisles = null);
          })());
      }
      return t;
    };
  async function Ne(t, a = !1) {
    s.beat = "burst";
    const l = k().church,
      i = tt();
    re().priest;
    let h = s.siege;
    if (
      !a &&
      (e.audio.loop("amb_church", { vol: 0.5 }),
      e.audio.loop("horde_moan", { pos: [0, 1.5, 35.5], vol: 0.3 }),
      (h = n0(t)),
      (s.siege = h),
      (h.heat = 0.8),
      r0(t, h),
      v &&
        ((v.z.root.visible = !0),
        v.z.setState("talk"),
        v.setLook((f) => f.copy(e.camera.position))),
      (e.weapons.has.pistol = !1),
      (e.weapons.gunRoot.visible = !1),
      (o.speedMul = 0),
      await u(1.6),
      n(t))
    )
      return;
    (i?.barricade?.reset?.(),
      i?.window?.reset?.(),
      (s.flags.window = !1),
      h?.stop());
    {
      const f = re().akaneHold || [0, 41.45, Math.PI];
      if (
        (b("door_pound", {
          pos: [0, 1.5, 40],
          vol: 1.15,
          rate: 0.8,
          reverb: 0.8,
        }),
        l.open(-0.08),
        e.fx.dust({ x: 0, y: 4.1, z: 40.95 }, 1.2, 0.8),
        r().work({
          pos: [f[0] + 0.5, f[1] + 1.6],
          yaw: f[2] ?? Math.PI,
          hold: !1,
          lean: -14,
          crouch: 0.2,
          hop: 0,
        }),
        r().scare(0.9),
        await u(0.42),
        n(t))
      )
        return;
      (l.open(0), r().work(null));
    }
    (b("church_doors_burst", { pos: [0, 2, 40.5], vol: 1.1, reverb: 0.8 }),
      b("wood_break", { pos: [0, 1.5, 40.5], vol: 0.9, reverb: 0.6 }),
      (e.player.shake += 0.55),
      i?.candles?.gust?.(1),
      (async () => (
        await T.during(0.6, (f) => (l.burst ? l.burst(f) : l.open(kt.out(f)))),
        e.nav.rebuild()
      ))(),
      e.fx.dust({ x: 0, y: 3.8, z: 41.2 }, 2.2, 1),
      e.audio
        .loop("horde_moan", { pos: [0, 1.5, 38], vol: 0.3 })
        ?.fadeTo?.(0.95, 1.2),
      r().scare(1.1),
      r().emote("scream", 3));
    {
      const f = Ke();
      Ft(e, [f, { t: 0.5, p: f.p, look: [0, 1.8, 42.5], fov: 72 }], {
        ease: "out",
      });
    }
    ((e.combat.invuln = 0),
      (async () => {
        await u(0.3);
        const f = [ie("nun", "gown"), "lanky", ie("nun", "gown"), "gown"],
          z = [V, "player", "player", "akane"];
        for (let w = 0; w < f.length; w++) {
          if (n(t)) return;
          const L = await $(f[w], Be(), { alerted: !0, target: z[w] }, t, 1);
          (L && ((L.calmT = 1.8), (L.rushed = !1), Me(L, z[w])),
            await u(0.35 + Math.random() * 0.2));
        }
      })(),
      g("a3_in", { emote: "scream" }),
      Gt(t, () => s.beat === "burst" && !r().workCue && !s.flags.backOpen, {
        stopFor: 1.6,
      }),
      v && (v.setLook(null), v.z.setState("face"), v.turn(Math.PI, 0, 0.8)),
      await u(1.5),
      !n(t) &&
        (Pt(),
        e.weapons.give("pistol"),
        (o.speedMul = 1),
        (e.post.aoRadius = 0.55),
        (e.weapons.ammo = e.weapons.mag),
        (e.weapons.reserve = Math.max(e.weapons.reserve, 156)),
        await ye(t)));
  }
  function Ee(t) {
    const a = (s.pr = { hits: 0, last: -9, down: !1 });
    return (
      (s.flags.lights = !1),
      (s.onPriestHit = (l) => {
        if (a.down || e.time - a.last < 0.5) return;
        if (((a.last = e.time), a.hits++, a.hits >= 3)) {
          Ce(t, l);
          return;
        }
        R("flinch", "face", { side: Math.random() < 0.5 ? -1 : 1 });
        const i = [V.pos.x, 1.5, V.pos.z];
        a.hits === 1
          ? v?.talking
            ? b("priest_gasp", { pos: i, vol: 0.9 })
            : wt("p_cry", { hold: 0 })
          : (v?.talking
              ? b("priest_gasp", { pos: i, vol: 1 })
              : wt("p_getback", { hold: 0 }),
            Le(t, 0.45, () => q("s3_father")));
      }),
      a
    );
  }
  function Ce(t, a) {
    const l = s.pr;
    if (
      !l ||
      l.down ||
      ((l.down = !0), (s.flags.priestDown = !0), (s.onPriestHit = null), !v)
    )
      return;
    const i = v.z.root.position.clone(),
      c = new Y(i.x, 0, Math.min(i.z, 57.25));
    (v.solid(!1),
      v.setLook(null),
      (v.walk = null),
      a0(0.12),
      (s.flags.pleading = !1),
      R("grabbed", "face"));
    const h =
      c.z > 56.4
        ? Math.PI / 2
        : Math.abs(c.x) < 1.3
          ? Math.PI
          : v.z.root.rotation.y;
    (v.turn(h, 0, 0.7),
      T.during(0.7, (w) => v.z.root.position.lerpVectors(i, c, kt.inout(w))),
      b("priest_struggle", { pos: [c.x, 1.4, c.z], vol: 1, reverb: 0.4 }));
    const m = [
        [0.95, -0.5],
        [0.9, -1.35],
        [-0.6, 0.1],
      ].map(([w, L]) => [
        w * Math.cos(h) + L * Math.sin(h),
        -w * Math.sin(h) + L * Math.cos(h),
      ]),
      f = e.zombies
        .alive()
        .filter((w) => w !== a && w.pos.distanceTo(c) < 3.2)
        .sort((w, L) => w.pos.distanceTo(c) - L.pos.distanceTo(c)),
      z = [...(a && !a.dead ? [a] : []), ...f].slice(0, 3);
    for (const w of e.zombies.alive())
      !z.includes(w) &&
        w.forceTarget === V &&
        ((w.forceTarget = Math.random() < 0.7 ? "player" : "akane"),
        (w.path = null),
        (w.repath = 0));
    (z.forEach((w, L) => {
      ((w.forceTarget = null),
        (w._feed = new Y(c.x + m[L][0], 0, c.z + m[L][1])),
        (w.goal = w._feed.clone()),
        (w.path = null),
        (w.repath = 0),
        (w.calmT = 0));
    }),
      (async () => {
        for (; !n(t) && !s.flags.out;) {
          for (const w of z)
            w.dead ||
              !w._feed ||
              (w.state !== "grab" &&
                Math.hypot(w._feed.x - w.pos.x, w._feed.z - w.pos.z) < 0.45 &&
                ((w.state = "grab"),
                (w.goal = null),
                (w.path = null),
                (w.yaw = Math.atan2(
                  c.x - 0.6 * Math.sin(h) - w.pos.x,
                  c.z - 0.6 * Math.cos(h) - w.pos.z,
                )),
                w.sync()),
              w.state === "grab" && w.kit.setState("attack"));
          await u(0.85);
        }
      })(),
      Le(t, 1.1, () => {
        (R("taken", "face"),
          Le(t, 0.9, () =>
            b("crowd_pile", { pos: [c.x, 0.8, c.z], vol: 1, reverb: 0.5 }),
          ),
          s.flags.out || q("s3_no"),
          Le(t, 3.2, () => {
            s.flags.out || ((s.flags.lights = !0), wt("p_last", { hold: 0 }));
          }));
      }));
  }
  async function ot(t) {
    if (((s.flags.pleading = !0), await q("s3_come"), n(t) || j())) {
      s.flags.pleading = !1;
      return;
    }
    if (
      (v && (R("refuse", "stand"), v.setLook((a) => a.copy(e.camera.position))),
      await wt("p_home", { hold: 0.25 }),
      n(t) || j())
    ) {
      s.flags.pleading = !1;
      return;
    }
    (v && (v.setLook(null), v.turn(Math.PI, 0, 0.4), R("shield", "face")),
      (s.flags.lights = !0),
      await wt("p_go", { hold: 0 }),
      (s.flags.pleading = !1));
  }
  async function ye(t) {
    s.beat = "burst";
    const a = tt(),
      l = a?.barricade,
      i = re(),
      c = i.priest || [0, 57.3, 0],
      h = i.backIn || [4.25, 59.8];
    if (!l) {
      console.warn("[script2] no barricade");
      return;
    }
    const m = [c[0], c[1] + 0.05];
    v &&
      (Math.hypot(v.z.root.position.x - m[0], v.z.root.position.z - m[1]) >
        0.5 && v.place(m[0], m[1], Math.PI),
      v.solid(!0));
    const f = Ee(t);
    (R("pray_stand", "face"),
      e.hud.hint("Protect the priest", 5),
      e.audio.loop("choir_dread", { vol: 0 })?.fadeTo?.(0.42, 6),
      (async () => {
        r().lowReady();
        const me = l.cue(0);
        (await r().walkTo(Math.min(5.2, h[0] + 0.6), 52.5, {
          speed: 3.8,
          arrive: 0.5,
        }),
          !n(t) &&
            (await r().walkTo(me.pos[0], me.pos[1], {
              speed: 3.4,
              arrive: 0.25,
            }),
            !n(t) && (s.flags.atBarricade = !0)));
      })(),
      Le(t, 2.2, () => {
        f.down || q("s3_stay");
      }));
    const z = [
        ie("nun", "gown"),
        "lanky",
        "gown",
        ie("soldier", "lanky"),
        ie("nun", "gown"),
        "lanky",
        "gown",
        ie("nun", "gown"),
        "brute",
        ie("soldier", "lanky"),
        "gown",
        ie("nun", "gown"),
        "lanky",
        ie("soldier", "lanky"),
        "gown",
        ie("nun", "gown"),
        "lanky",
        "gown",
        ie("nun", "gown"),
        ie("soldier", "lanky"),
        "lanky",
        "gown",
      ],
      w = [
        V,
        "player",
        V,
        "player",
        V,
        "akane",
        V,
        "player",
        V,
        "player",
        V,
        "akane",
      ];
    let L = 0,
      F = e.time + 3.2;
    const G = [0, 0.22, 0.5, 0.67, 0.84, 1],
      oe = 25;
    let X = 0,
      se = e.time,
      ue = 0,
      Q = -1,
      pe = new Set(),
      A = 0,
      N = -9,
      I = 0,
      W = !1;
    const M = (me) => {
      for (let $e = 0; $e < 5; $e++) if (me < G[$e + 1]) return $e;
      return 4;
    };
    let D = null;
    const H = () => {
        let me = 99;
        D = null;
        for (const $e of e.zombies.alive()) {
          const jt = Math.hypot($e.pos.x - r().pos.x, $e.pos.z - r().pos.z);
          jt < me && ((me = jt), (D = $e));
        }
        return me;
      },
      C = [
        ["p_pray1", 5],
        ["p_pray2", 17],
        ["p_pray3", 29],
      ],
      ce = e.time;
    if (
      (await x(() => {
        if (n(t) || r().dead) return !0;
        const me = Math.min(0.1, e.time - se);
        se = e.time;
        const $e = f.down ? "Cover Akane" : "Protect the priest",
          jt = e.zombies.alive().length,
          d0 = X < 0.3 ? 6 : X < 0.7 ? 7 : 8;
        if (e.time >= F && jt < d0 && L < z.length) {
          const De = z[L],
            mt = f.down ? (L % 3 === 2 ? "akane" : "player") : w[L % w.length];
          (L++,
            $(De, Be(), { alerted: !0, target: mt }, t, 1.5).then((Wt) => {
              (Wt &&
                Math.random() < 0.4 &&
                ((Wt.calmT = 1.2), (Wt.rushed = !1)),
                Me(Wt, mt));
            }));
          const Ge = pe.has("window") ? 1 : 1.25;
          F =
            e.time +
            (X < 0.3 ? 2.6 : X < 0.7 ? 2 : 1.6) *
              (0.8 + Math.random() * 0.4) *
              Ge;
        }
        if (v && !f.down) {
          const De = e.zombies
              .alive()
              .some((Ge) => Ge.pos.distanceTo(V.pos) < 1.6),
            mt = v.z.state;
          (De && mt === "pray_stand" && R("shield", "face"),
            !De && mt === "shield" && R("pray_stand", "face"));
          for (const Ge of C)
            !pe.has(Ge[0]) &&
              e.time - ce > Ge[1] &&
              !v.talking &&
              (pe.add(Ge[0]), wt(Ge[0], { hold: 0 }));
        }
        if (!s.flags.atBarricade) return (e.hud.task($e, 0, !1), !1);
        pe.has("blocked") ||
          (pe.add("blocked"),
          g("a3_blocked", { emote: "scream" }),
          le.set("v_cover2", e.time));
        const y0 = H(),
          Ct = y0 < 2.3;
        if (
          (Ct && e.time - N > 6 && de(fe.cover, { cool: 16 }) && (N = e.time),
          Ct && D)
        ) {
          const De = D;
          (r().work(null),
            r().aimAt(() => De.kit.chestWorld(new Y())),
            (W = !0));
          const mt =
            Math.abs(
              Lt(
                r().yaw,
                Math.atan2(De.pos.x - r().pos.x, De.pos.z - r().pos.z),
              ),
            ) < 0.35;
          return (
            e.time > I &&
              mt &&
              r().gun.raise > 0.85 &&
              (r().fire(), (I = e.time + M0(0.55, 0.8))),
            e.hud.task($e, X, !0),
            !1
          );
        }
        (W && ((W = !1), r().holster()), (ue += Ct ? 0 : me));
        const p0 = (ue % 1.6) / 1.6,
          Jt = p0 < 0.26 ? Math.sin((p0 / 0.26) * Math.PI) : 0;
        Ct || (X = Math.min(1, X + (me * (0.32 + 2.2 * Jt)) / oe));
        const ct = M(X),
          Vt = Math.min(1, (X - G[ct]) / (G[ct + 1] - G[ct]));
        if (ct !== Q) {
          for (let De = 0; De < ct; De++) l.pieces[De].set(1);
          (Q >= 0 && (e.nav.rebuild(), Mt(l.pieces[Q], Q)), (Q = ct));
        }
        l.pieces[ct].set(Vt);
        const gt = l.pieces[ct],
          yt = l.cue(ct),
          dt = gt.kind;
        if (dt === "rip" && Vt > 0.58)
          r().work({
            pos: yt.pos,
            yaw: yt.yaw,
            hold: !1,
            lean: -2,
            crouch: 0.1,
            hop: 0,
          });
        else {
          const De = (yt.L[1] + yt.R[1]) / 2,
            mt =
              dt === "drag"
                ? 0.32 + 0.06 * Jt
                : dt === "rip"
                  ? De < 0.8
                    ? 0.45
                    : De < 1.4
                      ? 0.12
                      : 0
                  : 0.12;
          r().work({
            pos: yt.pos,
            yaw: yt.yaw,
            hold: !0,
            L: yt.L,
            R: yt.R,
            crouch: mt,
            lean: (dt === "drag" ? -10 : -7) - 12 * Jt,
            hop: 0.1 * Jt,
          });
        }
        if (((A -= me), !Ct && p0 < 0.05 && A <= 0)) {
          A = 1.2;
          const De = gt.at([0, 0.5, 0]).toArray();
          (dt === "drag"
            ? b(Math.random() < 0.5 ? "chest_drag" : "furniture_scrape", {
                pos: De,
                vol: 0.8,
                rate: 0.9 + Math.random() * 0.2,
                reverb: 0.5,
              })
            : dt === "haul"
              ? b(Math.random() < 0.5 ? "furniture_scrape" : "bookcase_thud", {
                  pos: De,
                  vol: 0.8,
                  rate: 0.85 + Math.random() * 0.2,
                  reverb: 0.5,
                })
              : Vt < 0.55 &&
                b("nail_pry", {
                  pos: De,
                  vol: 0.85,
                  rate: 0.9 + Math.random() * 0.2,
                  reverb: 0.4,
                }),
            e.fx.dust({ x: De[0], y: 1.4, z: De[2] }, 0.6, 0.35));
        }
        return (
          dt === "rip" &&
            Vt >= 0.55 &&
            !pe.has("rip" + ct) &&
            (pe.add("rip" + ct),
            b("plank_rip", {
              pos: gt.at([0, 0, 0]).toArray(),
              vol: 0.9,
              reverb: 0.4,
            })),
          X >= 0.7 &&
            !pe.has("almost") &&
            !r().speaking &&
            (pe.add("almost"), g("a3_almost", { emote: "scared" })),
          X >= 0.74 &&
            !pe.has("window") &&
            (pe.add("window"), Qe(t) && (F = e.time + 5)),
          X >= 0.78 &&
            !f.down &&
            !pe.has("plea") &&
            !r().speaking &&
            !v?.talking &&
            (pe.add("plea"), ot(t)),
          X >= 0.86 &&
            !pe.has("one") &&
            !r().speaking &&
            f.down &&
            (pe.add("one"), g("a3_one", { emote: "scared" })),
          e.hud.task($e, X, Ct),
          X >= 1
        );
      }, 400),
      !(n(t) || r().dead) &&
        (await x(() => n(t) || !(s.flags.pleading && v?.talking && !f.down), 4),
        !n(t)))
    ) {
      for (const me of l.pieces) me.set(1);
      (Mt(l.pieces[4], 4),
        e.nav.rebuild(),
        e.hud.task(null),
        r().work(null),
        await et(t));
    }
  }
  function Qe(t) {
    const a = tt()?.window;
    if (!a?.smash || !e.zombies.climbIn) return !1;
    s.flags.window = !0;
    const l = (c) =>
        j() ? (c % 3 === 2 ? "akane" : "player") : c === 3 ? "player" : V,
      i = (c) => (
        c?.landed?.then?.(() => {
          !c.dead &&
            j() &&
            c.forceTarget === V &&
            ((c.forceTarget = "player"), (c.path = null), (c.repath = 0));
        }),
        c
      );
    return (
      (async () => {
        (i(
          e.zombies.climbIn(ie("nun", "gown"), a, { crash: !0, target: l(0) }),
        ),
          (e.player.shake += 0.35),
          tt()?.candles?.gust?.(0.75),
          (async () => {
            const h = Ke(),
              m = a.sill,
              f = [m[0] + 0.3, m[1] + 1.35, m[2]],
              z = [a.land[0] - 0.3, 1.1, a.land[1]];
            ((e.combat.invuln = Math.max(e.combat.invuln, 2.3)),
              (o.frozen = !0),
              Ft(
                e,
                [
                  h,
                  { t: 0.3, p: h.p, look: f, fov: 54 },
                  { t: 1.15, p: h.p, look: z, fov: 46 },
                  { t: 1.55, p: h.p, look: z, fov: h.fov },
                ],
                { ease: "inout" },
              ),
              await u(1.6),
              !n(t) && (e.camCtl ? Pt() : (o.frozen = !1)));
          })(),
          (async () => (
            await x(() => n(t) || !r().speaking, 1.6),
            !n(t) &&
              !s.flags.backOpen &&
              (g("a3_window", { emote: "scream" }), (s.lastBark = e.time))
          ))());
        const c = ["lanky", "gown", ie("soldier", "lanky"), ie("nun", "gown")];
        for (let h = 0; h < c.length; h++) {
          if (
            (await u(1 + Math.random() * 0.6),
            n(t) ||
              s.flags.out ||
              (await x(
                () => n(t) || s.flags.out || e.zombies.alive().length < 9,
                6,
              ),
              n(t) || s.flags.out))
          )
            return;
          i(e.zombies.climbIn(c[h], a, { target: l(h + 1) }));
        }
      })(),
      !0
    );
  }
  const Mt = (t, a) => {
    const l = t.at([0, 0.2, 0]).toArray();
    a === 0
      ? b("furniture_scrape", { pos: l, vol: 0.6, rate: 0.8, reverb: 0.5 })
      : a === 1
        ? (b("pew_topple", { pos: l, vol: 1, reverb: 0.7 }),
          e.fx.dust({ x: l[0], y: 0.3, z: l[2] }, 1.4, 0.8))
        : b("plank_drop", { pos: l, vol: 0.9, reverb: 0.5 });
  };
  async function et(t) {
    const a = tt(),
      l = re(),
      i = l.backIn || [4.25, 59.8],
      c = l.backOut || [4.25, 63.2];
    if ((await T.during(0.5, (z) => a?.backDoor?.open?.(kt.out(z))), n(t)))
      return;
    (e.nav.rebuild(),
      (s.flags.backOpen = !0),
      b("church_backdoor_open", { pos: [i[0], 1.2, i[1] + 1.2], vol: 0.6 }),
      r().work(null),
      r().lowReady(),
      g("a3_open2", { emote: "scream" }),
      (s.lastBark = e.time),
      e.audio.loops.get("choir_dread")?.fadeTo?.(0.6, 2));
    const h = [c[0] + 1.2, 62.85];
    (r()
      .walkTo(h[0], h[1], { speed: 3.8, arrive: 0.25 })
      .then(() => {
        !n(t) && !s.flags.out && r().turnTo(i[0], i[1] - 2.5);
      }),
      Gt(
        t,
        () => !s.flags.yardTalk && (s.beat === "burst" || s.beat === "yard"),
        { stopFor: 3, range: 14 },
      ));
    const m = () => {
      const z = Math.random();
      return z < 0.4
        ? "lanky"
        : z < 0.7
          ? ie("nun", "gown")
          : z < 0.85
            ? "gown"
            : ie("soldier", "lanky");
    };
    ((async () => {
      for (let w = 0; w < 8; w++) {
        if (n(t) || s.flags.out) return;
        {
          const L = !j() && w % 4 !== 3 ? V : "player";
          $(m(), Be(), { state: "emerge", target: L }, t, 0.8).then((F) =>
            Me(F, L),
          );
        }
        await u(0.3 + Math.random() * 0.2);
      }
      const z = e.time;
      for (; !n(t) && !s.flags.out;) {
        const w = Math.min(1, (e.time - z) / 20);
        if (
          (await u((1.5 - 0.9 * w) * (0.8 + Math.random() * 0.4)),
          !s.flags.out && e.zombies.alive().length < 9 + 4 * w)
        ) {
          const L = !j() && Math.random() < 0.6 + 0.3 * w ? V : "player";
          $(m(), Be(), { state: "emerge", target: L }, t, 0.8).then((F) =>
            Me(F, L),
          );
        }
      }
    })(),
      e.audio.loops.get("horde_moan")?.fadeTo?.(1, 1.5),
      (async () => {
        if (
          (await u(2.6),
          n(t) ||
            s.flags.out ||
            j() ||
            !v ||
            (await x(() => n(t) || !v.talking, 4), n(t) || s.flags.out || j()))
        )
          return;
        const z = v.z.root.position,
          w = [Math.max(-0.5, Math.min(0.5, z.x)), 54.3];
        (v.setLook(null),
          await v.walkTo(w[0], w[1]),
          !(n(t) || j()) && (v.turn(Math.PI, 0, 0.4), R("shield", "face")));
      })());
    let f = e.time + 5.5;
    (await x(
      () =>
        n(t) || o.pos.z > 62.45
          ? !0
          : (e.time > f &&
              o.pos.z < 61 &&
              de(fe.out, { cool: 12, emote: "scream" }) &&
              (f = e.time + 6.5),
            !1),
      900,
    ),
      !n(t) && (await at(t)));
  }
  async function at(t) {
    const a = tt(),
      l = re(),
      i = l.backIn || [4.25, 59.8];
    ((s.flags.out = !0), (s.beat = "yard"), e.hud.task(null));
    const c = !!v && !j();
    if (
      ((s.onPriestHit = null),
      r().stop(),
      r().holster(),
      r().work({
        pos: [i[0] + 0.3, 62.35],
        yaw: Math.PI,
        hold: !0,
        L: [i[0] - 0.42, 1.05, 61.36],
        R: [i[0] - 0.2, 1.1, 61.36],
        crouch: 0.1,
        lean: 12,
        hop: 0,
      }),
      await u(0.3),
      !n(t) &&
        (await T.during(0.4, (h) => a?.backDoor?.open?.(1 - kt.in(h))), !n(t)))
    ) {
      ((s.flags.shut = !0), a0(0.05));
      for (const h of e.zombies.alive())
        h.pos.z > 60.3 &&
          h.pos.z < 62.7 &&
          Math.abs(h.pos.x - i[0]) < 1.2 &&
          ((h.pos.z = 60.3), h.sync());
      if (
        ((e.player.shake += 0.4),
        e.nav.rebuild(),
        e.audio.loops.get("choir_dread")?.stop?.(2.5),
        e.audio.loops.get("amb_church")?.stop?.(1.5),
        e.audio.loops.get("horde_moan")?.fadeTo?.(0.3, 1.2),
        await u(0.4),
        !n(t))
      ) {
        if (
          (b("door_wedge", {
            pos: [i[0] - 0.4, 1.1, 61.4],
            vol: 1,
            reverb: 0.4,
          }),
          e.zombies.clear((h) => h.pos.z < 61.6),
          (async () => {
            for (let h = 0; h < 6; h++) {
              if ((await u(h ? 0.6 + Math.random() * 0.8 : 0.7), n(t))) return;
              (b("door_pound", {
                pos: [i[0], 1.3, i[1] + 0.7],
                vol: 1 - h * 0.13,
                rate: 0.95 + Math.random() * 0.1,
                reverb: 0.4,
              }),
                a?.backDoor?.open?.(-0.02),
                await u(0.08),
                a?.backDoor?.open?.(0));
            }
            e.audio.loops.get("horde_moan")?.stop?.(5);
          })(),
          c)
        ) {
          if (
            (await u(0.7),
            n(t) ||
              (wt("p_getback", { hold: 0, vol: 0.55 }),
              b("priest_struggle", {
                pos: [i[0] - 1.6, 1.4, i[1] - 1.2],
                vol: 0.6,
                reverb: 0.6,
              }),
              Le(t, 1.4, () =>
                b("crowd_pile", {
                  pos: [i[0] - 1.6, 0.8, i[1] - 1.2],
                  vol: 0.6,
                  reverb: 0.6,
                }),
              ),
              await u(1.6),
              n(t)) ||
              (await q("s3_no"), n(t)))
          )
            return;
        } else if ((await u(1), n(t))) return;
        (v && ((v.z.root.visible = !1), v.setLook(null), v.solid(!1)),
          r().work(null),
          await x(() => n(t) || !e.zombies.alive().length, 15),
          !n(t) && (await g0(t)));
      }
    }
  }
  async function g0(t) {
    ((s.beat = "yard"),
      (s.flags.yardTalk = !0),
      e.camCtl && Pt(),
      (e.combat.invuln = 0),
      (o.speedMul = 1),
      (e.weapons.on = !0));
    const a = Tt();
    if (!a || !U) {
      console.warn("[script2] no ride");
      return;
    }
    if (
      (U.park(a.bike[0], a.bike[1], a.bike[2]),
      r().work(null),
      r().holster(),
      r().emote("scared", 4),
      r().lookAt(new Y(a.bike[0], 0.9, a.bike[1])),
      await u(0.5),
      n(t))
    )
      return;
    g("a3_moto", { emote: "scream" });
    const l = [
      a.bike[0] + Math.cos(a.bike[2]) * 0.75,
      a.bike[1] - Math.sin(a.bike[2]) * 0.75,
    ];
    if (
      (await r().walkTo(l[0], l[1], { speed: 3.4, arrive: 0.25 }),
      n(t) ||
        (r().lookAt(null), Bt(!0), await u(0.85), n(t)) ||
        (U.kickstand?.(!1), await u(0.3), n(t)))
    )
      return;
    U.setOn(!0);
    const i = () => {
      const m = U.seats.passenger.getWorldPosition(new Y());
      return [m.x, 1, m.z];
    };
    let c = !1;
    ((s.bikeRec = e.interact.add({
      id: "bike",
      pos: i,
      radius: 2,
      cone: 0.8,
      prompt: "get on",
      enabled: () => !c,
      onUse: () => {
        c = !0;
      },
    })),
      e.hud.hint("E: get on", 4));
    let h = e.time + 6;
    if (
      (await x(() => {
        if (n(t)) return !0;
        const m = i();
        return (
          Math.hypot(o.pos.x - m[0], o.pos.z - m[2]) < 1.1 && (c = !0),
          e.time > h &&
            de(["a3_c_lag1", "a2_keepmoving"], { cool: 12 }) &&
            (h = e.time + 8),
          c
        );
      }, 600),
      s.bikeRec?.remove?.(),
      (s.bikeRec = null),
      !n(t))
    ) {
      {
        const m = Ke(),
          f = U.seats.passenger.getWorldPosition(new Y()),
          z = a.bike[2];
        Ft(
          e,
          [
            m,
            {
              t: 0.9,
              p: [f.x, f.y, f.z],
              look: [f.x + Math.sin(z) * 6, f.y - 0.25, f.z + Math.cos(z) * 6],
              fov: m.fov,
            },
          ],
          { ease: "inout" },
        );
      }
      (b("cassock_rustle_rise", { vol: 0.35 }),
        await u(0.95),
        !n(t) && (await It(t, { chat: !0 })));
    }
  }
  const i0 = {
      off: {
        trail: 0,
        ghost: 0,
        tunnel: 0,
        warp: 0,
        bleed: 0,
        bpm: 0,
        beat: 0,
        muffle: 0,
      },
      mild: {
        trail: 0,
        ghost: 0,
        tunnel: 0,
        warp: 0.03,
        bleed: 0.08,
        bpm: 74,
        beat: 0.06,
        muffle: 0,
      },
      peak: {
        trail: 0,
        ghost: 0,
        tunnel: 0,
        warp: 0.04,
        bleed: 0.16,
        bpm: 122,
        beat: 0.12,
        muffle: 0.2,
      },
    },
    St = { want: { ...i0.off }, secs: 2, name: "off" },
    xt = (t, a = 2) => {
      const l = i0[t] || i0.off;
      ((l.muffle ?? 0) !== (St.want.muffle ?? 0) &&
        e.audio.muffle?.(l.muffle ?? 0, Math.max(0.5, a)),
        (St.want = { ...l }),
        (St.secs = a),
        (St.name = t));
    };
  e.updaters.push((t) => {
    const a = e.post;
    for (const l of ["trail", "ghost", "tunnel", "warp", "bleed"]) {
      if (typeof a[l] != "number") continue;
      const i = St.want[l] ?? 0,
        c = a[l];
      if (Math.abs(i - c) < 1e-4) {
        a[l] = i;
        continue;
      }
      a[l] = c + (i - c) * Math.min(1, (t * 2.5) / Math.max(0.1, St.secs));
    }
  });
  function R0(t, a) {
    (async () => {
      let l = 0;
      const i = (c) => {
        const h = r().headWorld(new Y()),
          m = c.kit.chestWorld(new Y()),
          f = m.clone().sub(h),
          z = f.length();
        return (f.divideScalar(z), !e.combat.raycastWorld(h, f, z));
      };
      for (; !n(t) && a();) {
        (await u(0.1), (l -= 0.1));
        const c = r();
        if (c.grabbed || c.dead || c.workCue) continue;
        let h = null,
          m = 1e9;
        for (const w of e.zombies.alive()) {
          const L = w.pos.distanceTo(c.pos),
            F = w.pos.distanceTo(o.pos);
          if (L > 15) continue;
          const G = Math.min(L, F * 0.85);
          G < m && i(w) && ((m = G), (h = w));
        }
        if (!h) {
          c.lowReady();
          continue;
        }
        c.aimAt(() => h.kit.chestWorld(new Y()));
        const f =
            Math.abs(
              Lt(c.yaw, Math.atan2(h.pos.x - c.pos.x, h.pos.z - c.pos.z)),
            ) < 0.3,
          z = h.pos.distanceTo(c.pos) < 5 || h.pos.distanceTo(o.pos) < 4.5;
        l <= 0 &&
          f &&
          c.gun.raise > 0.85 &&
          (!c.path || z) &&
          (c.path && z && c.stop(), c.fire(), (l = M0(0.75, 1.25)));
      }
    })();
  }
  const U = (() => {
      try {
        const t = aa(e.makeCtx(), {});
        return (
          (t.park = (a, l, i) => {
            (t.root.position.set(a, 0, l),
              t.root.rotation.set(0, i, 0),
              t.kickstand?.(!0),
              t.update?.(0, { speed: 0, steer: 0.3, lean: 0, bump: 0 }));
          }),
          (t.away = () => {
            (t.returnShadow?.(),
              t.setOn?.(!1, { quiet: !0 }),
              t.root.position.set(-70, -40, -70),
              t.update?.(0, { speed: 0 }));
          }),
          t.away(),
          t
        );
      } catch (t) {
        return (console.warn("[script2] no motorcycle:", t.message), null);
      }
    })(),
    l0 = () => e.scene.getObjectByName("house_moon"),
    Tt = () => {
      const t = Ze();
      if (!t?.plan) return null;
      if (s._rideD?.fo === t) return s._rideD;
      const a = t.ride || {},
        l = a.bike || [5.3, 66.4, Math.atan2(2 - 5.3, 77.2 - 66.4)];
      let i = a.line?.length ? a.line.map((M) => [M[0], M[1]]) : null;
      if (!i) {
        i = [[l[0], l[1]]];
        const M = t.plan.yardPath,
          D = t.plan.path;
        for (let C = 0; C < M.n; C += 2)
          M.z[C] > l[1] + 2 && i.push([M.x[C], M.z[C]]);
        for (let C = 0; C < D.n; C += 2)
          D.z[C] > 77.6 && i.push([D.x[C], D.z[C]]);
        let H = 0;
        for (; i.length > 2 && H < 7;) {
          const C = i[i.length - 1],
            ce = i[i.length - 2];
          ((H += Math.hypot(C[0] - ce[0], C[1] - ce[1])), i.pop());
        }
      }
      const c = [0];
      for (let M = 1; M < i.length; M++)
        c.push(
          c[M - 1] + Math.hypot(i[M][0] - i[M - 1][0], i[M][1] - i[M - 1][1]),
        );
      const h = c[c.length - 1],
        m = Math.max(2, Math.ceil(h / 0.5) + 1),
        f = [];
      for (let M = 0, D = 0; M < m; M++) {
        const H = Math.min(h, M * 0.5);
        for (; D < c.length - 2 && c[D + 1] < H;) D++;
        const C = c[D + 1] > c[D] ? (H - c[D]) / (c[D + 1] - c[D]) : 0;
        f.push({
          x: i[D][0] + (i[D + 1][0] - i[D][0]) * C,
          z: i[D][1] + (i[D + 1][1] - i[D][1]) * C,
          s: H,
          yaw: 0,
          k: 0,
        });
      }
      for (let M = 0; M < m; M++) {
        const D = f[Math.max(0, M - 3)],
          H = f[Math.min(m - 1, M + 3)];
        f[M].yaw = Math.atan2(H.x - D.x, H.z - D.z);
      }
      for (let M = 0; M < m; M++) {
        const D = f[Math.max(0, M - 6)],
          H = f[Math.min(m - 1, M + 6)];
        f[M].k = Lt(D.yaw, H.yaw) / Math.max(0.5, H.s - D.s);
      }
      const z = a.slow?.length
          ? a.slow
          : (() => {
              const M = [];
              let D = null,
                H = null,
                C = null;
              for (const ce of f) {
                D == null && ce.z > 75.5 && (D = ce.s);
                const me =
                  Math.abs(ce.x - 2.5) < 2 && ce.z > 159.4 && ce.z < 172.8;
                (me && H == null && (H = ce.s), me && (C = ce.s));
              }
              return (
                D != null && M.push([D - 1, D + 3, 3.5]),
                H != null && M.push([H - 1, C + 1, 3]),
                M.push([h - 14, h, 2.5]),
                M
              );
            })(),
        w = (a.dodge || []).map((M) => ({
          ...M,
          ease: Math.max(2, M.ease || 6),
        })),
        L = (a.jump || []).slice().sort((M, D) => M.s - D.s),
        F = (M) => (M <= 0 ? 0 : M >= 1 ? 1 : M * M * (3 - 2 * M)),
        G = (M) => {
          let D = 0;
          for (const H of w)
            M > H.s0 &&
              M < H.s1 &&
              (D += H.off * F((M - H.s0) / H.ease) * F((H.s1 - M) / H.ease));
          return D;
        },
        oe = 4,
        X = Math.sqrt(oe / 2.6),
        se = 5,
        ue = (M) => (M >= 4.5 ? M * X : M >= 2.9 && M <= 3.1 ? 3.8 : M),
        Q = new Float32Array(m);
      for (let M = 1; M < m - 1; M++)
        w.length &&
          (Q[M] =
            Math.abs(G(f[M].s + 0.5) - 2 * G(f[M].s) + G(f[M].s - 0.5)) / 0.25);
      const pe = (M) => {
          const D = new Float32Array(m);
          for (let C = 0; C < m; C++) {
            ((D[C] = Math.min(
              M,
              Math.sqrt(oe / Math.max(Math.abs(f[C].k), 1e-4)),
            )),
              Q[C] > 1e-4 && (D[C] = Math.min(D[C], Math.sqrt(se / Q[C]))));
            for (const [ce, me, $e] of z)
              f[C].s >= ce && f[C].s <= me && (D[C] = Math.min(D[C], ue($e)));
          }
          ((D[0] = 0.8), (D[m - 1] = 0));
          for (let C = 1; C < m; C++)
            D[C] = Math.min(D[C], Math.sqrt(D[C - 1] ** 2 + 6 * 0.5));
          for (let C = m - 2; C >= 0; C--)
            D[C] = Math.min(D[C], Math.sqrt(D[C + 1] ** 2 + 2 * 4.5 * 0.5));
          let H = 0;
          for (let C = 1; C < m; C++)
            H += 0.5 / Math.max(0.3, (D[C] + D[C - 1]) / 2);
          return { v: D, T: H };
        },
        A = h * 0.142;
      let N = 6.5,
        I = pe(N);
      for (let M = 0; M < 10; M++)
        ((N = Math.max(4.2, Math.min(10, (N * I.T) / A))), (I = pe(N)));
      const W = {
        fo: t,
        pts: f,
        len: h,
        v: I.v,
        T: I.T,
        VMAX: N,
        bike: l,
        stop: a.stop || [f[m - 1].x, f[m - 1].z, f[m - 1].yaw],
        dodge: w,
        jump: L,
        offAt: G,
      };
      return (
        (W.at = (M) => {
          const D = Math.max(0, Math.min(m - 1.001, M / 0.5)),
            H = Math.floor(D),
            C = D - H,
            ce = f[H],
            me = f[H + 1];
          return {
            x: ce.x + (me.x - ce.x) * C,
            z: ce.z + (me.z - ce.z) * C,
            s: ce.s + 0.5 * C,
            yaw: ce.yaw + Lt(ce.yaw, me.yaw) * C,
            k: ce.k + (me.k - ce.k) * C,
            v: W.v[H] + (W.v[H + 1] - W.v[H]) * C,
          };
        }),
        (W.sOf = (M, D) => {
          let H = 0,
            C = 1e9;
          for (let ce = 0; ce < m; ce += 2) {
            const me = (f[ce].x - M) ** 2 + (f[ce].z - D) ** 2;
            me < C && ((C = me), (H = f[ce].s));
          }
          return H;
        }),
        (s._rideD = W),
        W
      );
    },
    y = {
      on: !1,
      s: 0,
      v: 0,
      yaw: 0,
      lean: 0,
      steer: 0,
      bump: 0,
      cap: null,
      D: null,
      eng: null,
      mount: null,
      braked: !1,
      torch: 1,
      ev: new Set(),
      hop: null,
      peek: 0,
    },
    Ut = { side: -0.06, up: 0.16 };
  ((s._ride = y), (s._bike = U), (s._rideEye = Ut));
  const c0 = new Y(),
    A0 = new Y(),
    Bt = (t, a = !1) => {
      const l = r();
      if (U) {
        if (l.ride) {
          l.ride(t ? U : null, { now: a });
          return;
        }
        if (t) {
          (l.stop(), l.holster());
          const i = U.seats.driver.getWorldPosition(new Y());
          (l.place(i.x, i.z, U.root.rotation.y), l.sitDown(0.86));
        } else l.standUp();
      }
    };
  (e.updaters.push((t) => {
    U &&
      !y.on &&
      (U.on || U.headlight.intensity > 0.3) &&
      U.update(t, { speed: 0, steer: 0.3, lean: 0 });
  }),
    e.updaters.unshift((t) => {
      if (!y.on || !U || !y.D) return;
      const a = y.D;
      let l = a.at(y.s).v;
      (y.cap != null && (l = Math.min(l, y.cap)),
        y.s < a.len - 0.02 && (l = Math.max(l, 0.6)));
      const i = l > y.v ? 3 : 4.6,
        c = l < y.v - 0.4 ? Math.min(1, (y.v - l) / 2) : 0;
      ((y.v += Math.max(-i * t, Math.min(i * t, l - y.v))),
        (y.s = Math.min(a.len, y.s + y.v * t)),
        y.s >= a.len - 0.02 && ((y.s = a.len), (y.v = 0)));
      const h = a.at(y.s),
        m = a.offAt(y.s),
        f = a.offAt(y.s + 0.4),
        z = a.offAt(y.s - 0.4),
        w = (f - z) / 0.8,
        L = h.k + (f - 2 * m + z) / 0.16;
      y.yaw +=
        Lt(y.yaw, h.yaw + Math.atan(w)) * Math.min(1, t * (m || w ? 10 : 7));
      const F = Math.max(
        -0.5,
        Math.min(0.5, Math.atan((-L * y.v * y.v) / 9.81)),
      );
      ((y.lean += (F - y.lean) * Math.min(1, t * (m || w ? 5 : 3.2))),
        (y.steer = Math.max(
          -0.5,
          Math.min(0.5, Math.atan(1.4 * L) * (0.6 + 0.4 / (1 + y.v))),
        )));
      const G =
        Math.sin(y.s * 2.7) *
        Math.sin(y.s * 1.31 + 0.7) *
        Math.sin(y.s * 0.53 + 2.1);
      let oe = 0;
      (G > 0.6 && y.bumpArm !== !1
        ? ((oe = Math.min(1, (G - 0.5) * 2.4 * Math.min(1, y.v / 4))),
          (y.bumpArm = !1))
        : G < 0.4 && (y.bumpArm = !0),
        y.bump > 0.5 && ((oe = Math.max(oe, y.bump)), (y.bump = 0)));
      let X = 0;
      if (!y.hop)
        for (const Q of a.jump)
          !y.ev.has(Q) &&
            y.s >= Q.s - 0.1 &&
            y.s < Q.s + 1.5 &&
            y.v > 1.5 &&
            (y.ev.add(Q),
            (y.hop = { t: 0, vy: Math.min(2.7, 1 + 0.24 * y.v), y: 0 }),
            U.rev?.(0.5),
            b("log_thump", {
              vol: 1,
              ...(y.mount ? {} : { pos: [h.x, 0.4, h.z] }),
            }));
      if (y.hop) {
        const Q = y.hop;
        ((Q.t += t),
          (Q.vy -= 9.81 * t),
          (Q.y += Q.vy * t),
          Q.y <= 0 &&
            Q.t > 0.1 &&
            ((X = 1),
            (y.hop = null),
            (y.v *= 0.9),
            (o.shake += 0.5),
            b("moto_land", {
              vol: 1,
              ...(y.mount ? {} : { pos: [h.x, 0.4, h.z] }),
            }),
            Math.random() < 0.5 && r().scare?.(0.6)));
      }
      const se = y.hop ? Math.max(0, y.hop.y) : 0,
        ue = y.hop
          ? -0.16 * Math.max(0, 1 - y.hop.t / 0.42) +
            0.06 * Math.max(0, Math.min(1, (y.hop.t - 0.25) / 0.2))
          : 0;
      if (
        (U.root.position.set(
          h.x + Math.cos(h.yaw) * m,
          se,
          h.z - Math.sin(h.yaw) * m,
        ),
        U.root.rotation.set(ue, y.yaw, 0, "YXZ"),
        U.update(t, {
          speed: y.v,
          steer: y.steer,
          lean: y.lean,
          bump: Math.max(y.hop ? 0 : oe, X),
          brake: c,
        }),
        lt(a, h, t),
        (e.fovKick =
          (e.fovKick || 0) +
          (6 * Math.max(0, Math.min(1, (y.v - 4) / 6)) - (e.fovKick || 0)) *
            Math.min(1, t * 2)),
        y.mount && o.mount === y.mount && o._ride(0),
        !r().ride)
      ) {
        const Q = U.seats.driver.getWorldPosition(c0);
        r().place(Q.x, Q.z, y.yaw);
      }
      if (y.mount && o.mount === y.mount) {
        const Q = U.seats.driver.getWorldPosition(c0);
        Q.y += 0.5;
        const pe = e.camera,
          A = Q.x - pe.position.x,
          N = Q.y - pe.position.y,
          I = Q.z - pe.position.z,
          W = Math.hypot(A, N, I) || 1,
          M = o.forward(A0),
          D = (M.x * A + M.y * N + M.z * I) / W,
          H =
            W < 1.4 ? 1 - 0.85 * Math.max(0, Math.min(1, (D - 0.8) / 0.15)) : 1;
        ((y.torch += (H - y.torch) * Math.min(1, t * 10)),
          (e.weapons.torchMul = y.torch));
      }
      Te();
    }));
  const lt = (t, a, l) => {
      const i = !!y.mount,
        c = (m) => (i ? {} : { pos: m });
      let h = 0;
      for (const m of t.dodge) {
        const f = m.at ? t.sOf(m.at[0], m.at[1]) : (m.s0 + m.s1) / 2;
        m.off > 0 && y.s > m.s0 - 18 && y.s < f + 1.5 && (h = 0.22);
      }
      ((y.peek += (h - y.peek) * Math.min(1, l * 4)),
        t.dodge.forEach((m, f) => {
          const z = "d" + f;
          (!y.ev.has(z + "s") &&
            y.s > m.s0 - 12 &&
            y.s < m.s1 &&
            (y.ev.add(z + "s"),
            g(m.kind === "cart" ? "a3_r_look" : "a3_r_watch", {
              emote: "scream",
            }),
            (s.lastBark = e.time)),
            !y.ev.has(z + "k") &&
              y.s > m.s0 + m.ease * 0.25 &&
              (y.ev.add(z + "k"),
              b("moto_skid", { vol: 0.75, ...c([a.x, 0.3, a.z]) }),
              (o.shake += 0.12)));
          const w = m.at ? t.sOf(m.at[0], m.at[1]) : (m.s0 + m.s1) / 2;
          !y.ev.has(z + "w") &&
            y.s > w - 1.2 &&
            (y.ev.add(z + "w"),
            m.kind === "tree"
              ? (b("branch_whip", { vol: 0.95, ...c([a.x, 1.4, a.z]) }),
                (o.shake += 0.22))
              : b("moto_bump", { vol: 0.5, ...c([a.x, 0.4, a.z]) }));
        }),
        t.jump.forEach((m, f) => {
          const z = "j" + f;
          !y.ev.has(z) &&
            y.s > m.s - 15 &&
            y.s < m.s &&
            (y.ev.add(z),
            g("a3_r_hold", { emote: "scream" }),
            (s.lastBark = e.time));
        }));
    },
    Te = () => {
      const t = U.root.position.x,
        a = U.root.position.z,
        l = Math.sin(y.yaw),
        i = Math.cos(y.yaw);
      for (const c of e.zombies.alive()) {
        const h = c.pos.x - t,
          m = c.pos.z - a,
          f = Math.hypot(h, m);
        if (f > 2.2 || e.time < (c._bikeT ?? 0)) continue;
        const z = h * l + m * i,
          w = Math.abs(h * i - m * l);
        y.v > 1.6 && z > -0.6 && z < 1.15 && w < 0.6
          ? ((c._bikeT = e.time + 5),
            b("moto_hit", { pos: [c.pos.x, 0.9, c.pos.z], vol: 1 }),
            c.die("body", new Y(l, 0, i)),
            (y.v *= 0.55),
            (y.bump = 1),
            (y.lean += (Math.random() - 0.5) * 0.3),
            (o.shake += 0.25),
            Math.random() < 0.5 && st("akane"))
          : f < 1.35 &&
            c.alerted &&
            !(c.stun > 0) &&
            c.state !== "attack" &&
            ((c._bikeT = e.time + 1.4),
            (c.state = "attack"),
            (c.attackT = 0),
            c.kit.setState("attack"),
            e.zombies.groan(c, 1),
            st(
              z > 0.6
                ? "akane"
                : z < -0.2 || Math.random() < 0.55
                  ? "sara"
                  : "akane",
              c,
            ));
      }
    },
    st = (t, a) => {
      t === "akane"
        ? ((r().hits?.n ?? 0) < 2 && r().hurt(),
          r().dead || de(["a3_r_hit"], { cool: 6, gap: 0.5, over: !0 }),
          (y.lean += 0.12 * (Math.random() < 0.5 ? -1 : 1)))
        : e.combat.hurt(14, a ? a.pos : U.root.position);
    };
  function bt(t) {
    const a = y.D,
      l = Ze(),
      i = [
        ...(l?.sideSpawns || [])
          .filter((F) => !/^g/.test(F.name || ""))
          .map((F) => [F.x, F.z]),
        ...(l?.lurks || []).map((F) => [F.x, F.z]),
      ].map((F) => ({ x: F[0], z: F[1], s: a.sOf(F[0], F[1]) })),
      c = () => {
        const F = Math.random();
        return F < 0.4
          ? ie("soldier", "lanky")
          : F < 0.7
            ? "lanky"
            : F < 0.88
              ? "gown"
              : ie("nun", "gown");
      },
      h = (F) =>
        a.dodge.some((G) => F > G.s0 - 4 && F < G.s1 + 2) ||
        a.jump.some((G) => Math.abs(F - G.s) < 5),
      m = (() => {
        const F = a.dodge.find((X) => X.kind === "cart"),
          G = a.jump[0];
        let oe =
          F && G && G.s - F.s1 > 34 ? (F.s1 + G.s) / 2 + 6 : a.len * 0.62;
        for (let X = 0; X < 40 && h(oe); X++) oe += 2;
        return oe;
      })();
    let f = e.time + 0.3,
      z = 0,
      w = !0,
      L = !1;
    (async () => {
      for (; !n(t) && y.on && y.s < a.len - 28;) {
        await u(0.2);
        const F = U.root.position,
          G = Math.sin(y.yaw),
          oe = Math.cos(y.yaw),
          X =
            a.dodge.some((A) => A.s0 - 12 - y.s > 0 && A.s0 - 12 - y.s < 14) ||
            a.jump.some((A) => A.s - 15 - y.s > 0 && A.s - 15 - y.s < 14);
        for (const A of e.zombies.alive()) {
          if (X) break;
          if (A._called || A.pos.distanceTo(F) > 22) continue;
          const N = A.pos.x - F.x,
            I = A.pos.z - F.z,
            W = Math.atan2(G * I - oe * N, G * N + oe * I);
          if (w) {
            if (r().speaking) continue;
            ((w = !1),
              (A._called = !0),
              g("a3_r_shoot1", { emote: "scream" }),
              le.set("a3_r_shoot1", e.time),
              (s.lastBark = e.time));
            continue;
          }
          const M = Math.abs(W) > 2.2;
          if (M && A.pos.distanceTo(F) > 9) continue;
          const D =
            Math.abs(W) < 0.4
              ? ["a3_r_shoot3", "a3_r_shoot2", "a3_ahead"]
              : M
                ? ["a3_r_behind", "a3_behind"]
                : W > 0
                  ? ["a3_r_right", "a3_right3", "v_right"]
                  : ["a3_r_left", "a3_left3", "v_left"];
          de(D, {
            cool: M ? 30 : 28,
            gap: M ? 7 : 2.6,
            emote: "scream",
            over: !0,
          }) && (A._called = !0);
        }
        if (!L && y.s > m - 31 && y.s < m - 12) {
          L = !0;
          for (const [A, N] of [
            [0, -1.25],
            [0.8, 1.3],
            [5.5, 0.1],
          ]) {
            const I = a.at(m + A),
              W = I.x + Math.cos(I.yaw) * N,
              M = I.z - Math.sin(I.yaw) * N;
            if (!e.nav.walkable(W, M)) continue;
            const D = e.zombies.spawn(c(), W, M, {
              state: "emerge",
              target: "player",
              yaw: I.yaw + Math.PI,
            });
            D.calmT = 0.6;
          }
          f = e.time + 2.4;
          continue;
        }
        if (
          (Math.floor(e.time * 5) % 5 === 0 &&
            e.zombies.clear(
              (A) =>
                a.sOf(A.pos.x, A.pos.z) < y.s - (A.dead ? 30 : 24) &&
                !ze(A.pos.x, A.pos.z),
            ),
          e.time < f || e.zombies.alive().length >= 8)
        )
          continue;
        let se = null,
          ue = "";
        if (z % 3 !== 2) {
          const A = [];
          for (const N of i) {
            const I = N.s - y.s;
            if (I < 8 || I > 40 || Math.hypot(N.x - F.x, N.z - F.z) < 10)
              continue;
            const W = a.at(N.s),
              D = Math.hypot(N.x - W.x, N.z - W.z) / 2.8 + 0.4,
              H = I / Math.max(2.5, (y.v + W.v) / 2);
            H - D < -0.3 ||
              H - D > 1.8 ||
              ze(N.x, N.z) ||
              !e.nav.walkable(N.x, N.z) ||
              A.push(N);
          }
          if (A.length) {
            const N = A[Math.floor(Math.random() * A.length)];
            ((se = [N.x, N.z]), (ue = "side"));
          }
        }
        for (let A = 0; A < 6 && !se; A++) {
          const N = a.at(y.s + 30 + Math.random() * 12),
            I = (Math.random() - 0.5) * 1.6,
            W = N.x + Math.cos(N.yaw) * I,
            M = N.z - Math.sin(N.yaw) * I;
          N.s < a.len - 22 &&
            !h(N.s) &&
            Math.abs(N.s - m) > 10 &&
            e.nav.walkable(W, M) &&
            ((se = [W, M]), (ue = "path"));
        }
        if (!se) {
          f = e.time + 0.5;
          continue;
        }
        const Q =
            ue === "side"
              ? Math.random() < 0.5
                ? ie("soldier", "gown")
                : Math.random() < 0.5
                  ? "gown"
                  : ie("nun", "gown")
              : c(),
          pe = e.zombies.spawn(Q, se[0], se[1], {
            state: "emerge",
            target: "player",
            yaw: Math.atan2(F.x - se[0], F.z - se[1]),
          });
        ((pe.calmT = ue === "path" ? 0.8 : 0.3),
          z++,
          (f = e.time + 1 + Math.random() * 0.7));
      }
    })();
  }
  async function It(t, { chat: a = !0, from: l = 0 } = {}) {
    const i = Tt();
    if (!i || !U) {
      console.warn("[script2] no ride");
      return;
    }
    s.beat = a ? "forest" : "bridge";
    const c = i.at(l);
    ((y.D = i),
      (y.s = l),
      (y.v = l ? Math.min(3, c.v) : 0),
      (y.yaw = c.yaw),
      (y.lean = 0),
      (y.cap = null),
      (y.braked = !1),
      (y.ev = new Set()),
      (y.hop = null),
      (y.peek = 0),
      i.dodge.forEach((m, f) => {
        if (l > m.s0 - 12) for (const z of "skw") y.ev.add("d" + f + z);
      }),
      i.jump.forEach((m, f) => {
        l > m.s - 15 && (y.ev.add("j" + f), y.ev.add(m));
      }),
      U.root.position.set(c.x, 0, c.z),
      U.root.rotation.set(0, y.yaw, 0),
      r().riding !== U && Bt(!0, !0),
      U.kickstand?.(!1),
      U.setOn(!0, { quiet: !!U.state?.on }),
      (U.engineVol = 1),
      U.takeShadow?.(l0()),
      (e.beamLight = U.headlight),
      (e.beamFogK = 0.12),
      (y.on = !0),
      (y.mount = {
        eye: (m) => {
          U.seats.passenger.getWorldPosition(m);
          const f = Math.cos(y.yaw),
            z = Math.sin(y.yaw),
            w = Ut.side + y.peek;
          return (
            (m.x -= f * w),
            (m.z += z * w),
            (m.y += Ut.up + Math.abs(y.peek) * 0.2),
            m
          );
        },
        yaw: () => y.yaw + Math.PI,
        roll: () => -y.lean * 0.75,
      }),
      (e.camCtl = null),
      (o.frozen = !1),
      (o.mount = y.mount),
      (o._mountYaw = null),
      (o.yaw = y.yaw + Math.PI),
      (o.pitch = -0.06),
      o._ride(0),
      (U.onboard = !0),
      (e.combat.invuln = 0),
      (o.speedMul = 1),
      (e.weapons.on = !0),
      (e.weapons.reserve = Math.max(e.weapons.reserve, 60)),
      (K.want = 0.22),
      xt("mild", 3),
      e.audio.loop("amb_forest", { vol: 0 }).fadeTo(0.3, 4),
      U.rev?.(0.8));
    const h = { rec: null, want: 0 };
    if (
      ((s.hordeLoop = h),
      (async () => {
        for (; !n(t);) {
          (await u(0.2),
            !h.rec &&
              h.want > 0 &&
              (h.rec = e.audio.loop("horde_forest", {
                pos: [o.pos.x, 1.5, o.pos.z],
                vol: 0,
              })));
          const m = h.rec;
          if (!m) continue;
          m.vol !== h.want && m.fadeTo(h.want, 2);
          const f = m.handle?.panner;
          if (f) {
            const z = i.at(Math.max(0, (y.on ? y.s : i.len) - 25));
            ((f.positionX.value = z.x),
              (f.positionY.value = 1.4),
              (f.positionZ.value = z.z));
          }
        }
      })(),
      a)
    ) {
      const m = (f) => {
        U && T.tween(U, "engineVol", f ? 0.8 : 1, 0.6, "inout");
      };
      if (
        (await u(1.3),
        n(t) ||
          (m(!0), await q("s3_failed"), n(t)) ||
          (await u(0.25),
          r().lookAt(O),
          await g("a3_who2", { emote: "sad" }),
          n(t)) ||
          (r().lookAt(null), await q("s3_priest2"), n(t)) ||
          ((y.cap = 4.2), await u(0.5), n(t)) ||
          ((e.lookMul.sat ??= 1),
          T.tween(e.lookMul, "sat", 0.62, 3, "inout"),
          b("piano_low_note", { vol: 0.45, reverb: 0.8 }),
          r().lookAt(O),
          await g("a3_nopriest2", { emote: "sad", hold: 0.35 }),
          n(t)) ||
          (await g("a3_unwell2", { emote: "sad", hold: 0.3 }), n(t)) ||
          (r().lookAt(null),
          T.tween(e.lookMul, "sat", 1, 2.5, "inout"),
          (y.cap = null),
          m(!1),
          U.rev?.(0.7),
          await u(0.4),
          n(t)))
      )
        return;
    }
    ((s.beat = "bridge"),
      (s.flags.rideZ = !0),
      bt(t),
      await x(() => n(t) || y.s > i.len - 30, 300),
      !n(t) &&
        (await x(() => n(t) || !r().speaking, 2.5),
        !n(t) &&
          (g("a3_r_house", { emote: "scream" }),
          (s.lastBark = e.time),
          (h.want = 0.85),
          xt("peak", 3),
          (s.hordeSpots = () => {
            const m = [];
            for (let f = 34; f <= 62; f += 4) {
              const z = i.at((y.on ? y.s : i.len) - f);
              m.push([z.x, z.z, z.yaw]);
            }
            return m;
          }),
          H0(t),
          await x(() => n(t) || (y.s >= i.len - 0.05 && y.v < 0.25), 90),
          !n(t) &&
            ((y.on = !1),
            U.update(0, { speed: 0 }),
            g("a3_r_off", { emote: "scream" }),
            (r().rideReach = { to: Qt, on: !0 }),
            r().lookAt(Qt()),
            await u(0.4),
            !n(t) &&
              (b("moto_key", { vol: 0.85 }),
              U.setOn(!1),
              await u(0.3),
              !n(t) &&
                (r().rideReach && (r().rideReach.on = !1),
                r().lookAt(null),
                Le(t, 0.7, () => {
                  r().rideReach = null;
                }),
                await I0(t),
                !n(t) &&
                  (await q0(t, {
                    route: Ze()?.route,
                    hordeLoop: h,
                    fromRide: !0,
                  }))))))));
  }
  const Qt = () => {
    const t = U.grips.L.getWorldPosition(new Y()),
      a = U.grips.R.getWorldPosition(new Y()),
      l = new Y(0, 0, 1).transformDirection(U.root.matrixWorld);
    return t
      .add(a)
      .multiplyScalar(0.5)
      .addScaledVector(l, 0.07)
      .add(new Y(0, -0.05, 0));
  };
  async function I0(t) {
    const a = U.root.position,
      l = y.yaw,
      i = _()?.points?.porch || [6, 199.3],
      c = a.x + Math.cos(l) * 0.85 - Math.sin(l) * 0.35,
      h = a.z - Math.sin(l) * 0.85 - Math.cos(l) * 0.35;
    ((o.mount = null),
      (y.mount = null),
      (e.weapons.torchMul = 1),
      (y.torch = 1),
      (U.onboard = !1),
      (e.fovKick = 0),
      U.returnShadow?.(),
      (e.beamLight = null));
    const m = Ke();
    (Ft(
      e,
      [m, { t: 0.5, p: [c, 1.62, h], look: [i[0], 1.3, i[1]], fov: m.fov }],
      { ease: "inout" },
    ),
      Bt(!1),
      Le(t, 0.8, () => {
        (U.kickstand?.(!0),
          U.update?.(0, { speed: 0, steer: 0.3, lean: 0, bump: 0 }));
      }),
      await u(0.55),
      !n(t) && (Pt(), await x(() => n(t) || !r().riding, 2)));
  }
  function H0(t) {
    s._horde !== t &&
      ((s._horde = t),
      (async () => {
        let a = 0;
        for (
          ;
          !n(t) &&
          !s.flags.hShut &&
          (await u(0.75 + Math.random() * 0.6), !(n(t) || s.flags.hShut));
        ) {
          if (e.zombies.alive().length >= 11) continue;
          const l = s.hordeSpots?.() || [];
          if (!l.length) continue;
          const i =
            a % 5 === 4
              ? ie("soldier", "lanky")
              : a % 3 === 2
                ? "gown"
                : a % 4 === 1
                  ? ie("nun", "gown")
                  : "lanky";
          (a++,
            $(
              i,
              l,
              { state: "emerge", minD: 12 },
              t,
              1.2,
              () => !s.flags.hShut,
            ).then((c) => {
              c && (c.calmT = 0.5);
            }));
        }
        s._horde === t && (s._horde = null);
      })());
  }
  function G0(t, a) {
    if (((s.flags.pounding = !0), s._pounding === t)) return;
    s._pounding = t;
    const l = {
        pos: new Y(6, 0, 199.95),
        reach: 0.75,
        hurt: () => {
          s.flags.pounding &&
            (a?.shove?.(0.45 + Math.random() * 0.4), (e.player.shake += 0.03));
        },
      },
      i = (f, z) => ({
        pos: new Y(f, 0, z),
        reach: 0.75,
        hurt: () => {
          s.flags.pounding &&
            b("window_knock", {
              pos: [f, 1.35, z],
              vol: 0.85,
              rate: 0.9 + Math.random() * 0.2,
              reverb: 0.2,
            });
        },
      }),
      c = [l, l, i(3.9, 199.95), l, i(3.8, 207.05), i(9.55, 202.74)],
      h = (f) =>
        f.pos.x > 2.8 && f.pos.x < 9.2 && f.pos.z > 200.45 && f.pos.z < 206.7;
    let m = 0;
    (async () => {
      for (; !n(t) && s.flags.pounding;) {
        for (const f of e.zombies.alive())
          f._pound ||
            f._ring ||
            f.goal ||
            h(f) ||
            ((f._pound = c[m++ % c.length]),
            (f.forceTarget = f._pound),
            (f.alerted = !0),
            (f.path = null),
            (f.repath = 0));
        await u(0.4);
      }
      s._pounding === t && (s._pounding = null);
    })();
  }
  async function q0(t, a = {}) {
    s.beat = "house";
    const l = _(),
      i = l?.points || {},
      c = Ze(),
      h = i.porch || [6, 199.3],
      m = i.inside || [6, 201.2],
      f = l?.frontDoor,
      z = l?.backDoor,
      w = f?.pos?.[2] ?? 200;
    (xt("peak", 2),
      (K.want = Math.max(K.want, 0.45)),
      (o.speedMul = 0.95),
      e.audio.loop("heartbeat_fast", { vol: 0 })?.fadeTo?.(0.35, 2));
    const L = a.route || c?.route || [];
    a.hordeLoop && (a.hordeLoop.want = 0.9);
    const F = () => {
        const W = [],
          M = o.pos.z;
        for (let D = L.length - 1; D >= 0; D--) {
          const H = L[D];
          H[1] < M - 14 &&
            H[1] > M - 34 &&
            W.push([
              H[0] + (Math.random() - 0.5),
              H[1],
              Math.atan2(o.pos.x - H[0], o.pos.z - H[1]),
            ]);
        }
        return W;
      },
      G = [
        [-4.6, 194.5],
        [16.4, 194.6],
        [-5.4, 202.6],
        [17.6, 203.4],
        [12.9, 188.6],
        [-1.8, 189.4],
      ].map(([W, M]) => [W, M, Math.atan2(6 - W, 200 - M)]);
    R0(t, () => s.beat === "house" && !s.flags.siege);
    const oe = (W, M) => Math.hypot(W - h[0], M - h[1]);
    if (
      ((s.hordeSpots = () => {
        const W = oe(o.pos.x, o.pos.z);
        return [...F(), ...G.filter((M) => oe(M[0], M[1]) > W + 3)];
      }),
      H0(t),
      !a.fromRide && !r().speaking && g("a3_house2", { emote: "scream" }),
      await r().walkTo(h[0] + 0.3, h[1], { speed: 3.4, arrive: 0.3 }),
      n(t) ||
        (r().turnTo(h[0], h[1] + 2),
        f?.open?.(1, 0.55),
        await u(0.6),
        e.nav.rebuild(),
        n(t)))
    )
      return;
    const X = i.akaneDoor || [m[0] + 1, m[1] + 0.5];
    if (
      (await r().walkTo(X[0], X[1], { speed: 3, arrive: 0.25 }),
      n(t) ||
        (r().turnTo(h[0], h[1] - 3),
        await x(
          () =>
            n(t) ||
            (e.roomAt(o.pos.x, o.pos.z) === "house" && o.pos.z > w + 0.45),
          120,
        ),
        n(t)))
    )
      return;
    (e.audio.loops.get("amb_forest")?.fadeTo?.(0.15, 3),
      e.audio.loops.get("stream_loop")?.stop?.(2),
      g("a3_door", { emote: "scream" }));
    const se = [],
      ue = (W) => {
        const M = e.interact.add(W);
        return (se.push(M), M);
      };
    s.houseRecs = se;
    const Q = f?.usePos || [6, 1.2, w + 0.4],
      pe = () => {
        if (!s.flags.hShut) {
          s.flags.hShut = !0;
          {
            const M = w + 0.13,
              D = o.pos.x - 6.47,
              H = o.pos.z - M,
              C = Math.hypot(D, H);
            if (o.pos.z > w && C < 1.15) {
              const ce = 1.15 / Math.max(C, 0.05);
              ((o.pos.x = 6.47 + D * ce),
                (o.pos.z = M + Math.max(0.3, H * ce)),
                o.resolve?.());
            }
          }
          (f?.slam ? f.slam(0.35) : f?.open?.(0, 0.35),
            (e.player.shake += 0.2),
            Le(t, 0.45, () => e.nav.rebuild()));
          for (const W of e.zombies.alive())
            W.pos.z > w - 0.4 &&
              W.pos.z < w + 0.6 &&
              Math.abs(W.pos.x - 6) < 1 &&
              ((W.pos.z = w - 0.9), W.sync());
          (G0(t, f),
            Le(t, 0.5, () => {
              s.flags.hBar ||
                (g("a3_bar", { emote: "scream" }),
                e.hud.hint("E: drop the bar", 3));
            }));
        }
      },
      A = () => {
        s.flags.hBar ||
          !s.flags.hShut ||
          ((s.flags.hBar = !0),
          f?.bolt?.(!0),
          Le(t, 0.7, () => {
            (g("a3_windows", { emote: "scared" }),
              e.hud.hint("E: close the shutters", 4));
          }));
      };
    (ue({
      id: "h_door",
      pos: Q,
      radius: 2.2,
      cone: 0.6,
      prompt: "shut",
      enabled: () => !s.flags.hShut,
      onUse: pe,
    }),
      ue({
        id: "h_bar",
        pos: Q,
        radius: 2.2,
        cone: 0.6,
        prompt: "bar",
        enabled: () => s.flags.hShut && !s.flags.hBar,
        onUse: A,
      }),
      e.hud.hint("E: shut the door", 4));
    const N =
        l?.shutters?.list?.length && l.shutters.list[0].close
          ? l.shutters.list
          : l?.shutters
            ? [
                {
                  id: "W2",
                  pos: [9.2, 1.35, 202.74],
                  standAt: i.shutter || [8.62, 202.45, Math.PI / 2],
                  close: (W, M) => l.shutters.close(W, M),
                  get closeK() {
                    return l.shutters.closeK ?? 0;
                  },
                },
              ]
            : [],
      I = (W, M = 0.35) => {
        W._closing ||
          (W.closeK ?? 0) > 0.9 ||
          ((W._closing = !0), W.close(1, M));
      };
    for (const W of N)
      ue({
        id: "h_" + W.id,
        pos: W.pos,
        radius: 2,
        cone: 0.6,
        prompt: "close",
        enabled: () => s.flags.hBar && !W._closing,
        onUse: () => I(W),
      });
    if (
      ((async () => {
        if ((await x(() => n(t) || s.flags.hShut, 3.5), n(t))) return;
        const W = i.frontUse || [Q[0] + 0.5, Q[2] + 0.3, Math.PI];
        if (!s.flags.hShut) {
          if (
            (await r().walkTo(W[0], W[1], { speed: 2.6, arrive: 0.25 }), n(t))
          )
            return;
          (r().faceYaw(W[2] ?? Math.PI), pe(), await u(0.5));
        }
        if ((await x(() => n(t) || s.flags.hBar, 4), n(t))) return;
        s.flags.hBar ||
          (await r().walkTo(W[0], W[1], { speed: 2.4, arrive: 0.25 }),
          r().faceYaw(W[2] ?? Math.PI),
          A(),
          await u(0.6));
        const M = i.backUse || i.backDoor || [5.95, 206.14, 0];
        if (
          (await r().walkTo(M[0], M[1], { speed: 3.2, arrive: 0.2 }), !n(t))
        ) {
          (r().faceYaw(M[2] ?? 0),
            await u(0.25),
            z?.bolt?.(!0),
            g("a3_gotback"),
            await u(0.35));
          for (const D of N) {
            if (D._closing || n(t)) continue;
            const H = D.standAt || [D.pos[0], D.pos[2], 0];
            if ((await r().walkTo(H[0], H[1], { speed: 3, arrive: 0.2 }), n(t)))
              return;
            (H[2] != null && r().faceYaw(H[2]),
              await u(0.2),
              I(D, 0.4),
              await u(0.35));
          }
          s.flags.akaneDone = !0;
        }
      })(),
      await x(
        () =>
          n(t) ||
          (s.flags.hBar && N.every((W) => W._closing) && s.flags.akaneDone),
        90,
      ),
      !n(t) &&
        (await x(
          () =>
            n(t) ||
            !e.zombies
              .alive()
              .some(
                (W) =>
                  e.roomAt(W.pos.x, W.pos.z) === "house" && W.pos.z > w + 0.3,
              ),
          20,
        ),
        !n(t)))
    ) {
      for (const W of se) W.remove();
      ((s.houseRecs = null), await io(t, a));
    }
  }
  async function io(t, a = {}) {
    const l = _(),
      i = l?.points || {},
      c = l?.frontDoor;
    ((s.flags.siege = !0),
      r().lowReady(),
      (e.houseSealed = !0),
      U?.state?.on && U.setOn(!1));
    {
      const I = new Set(
        e.zombies
          .alive()
          .sort((W, M) => W.pos.distanceTo(o.pos) - M.pos.distanceTo(o.pos))
          .slice(0, 6),
      );
      e.zombies.clear((W) => !I.has(W) && !ze(W.pos.x, W.pos.z));
    }
    const h = l?.outside || {},
      m = h.ring?.length
        ? h.ring.map((I) => I.slice())
        : [
            [1.1, 198.6],
            [6, 197.9],
            [10.9, 198.6],
            [11, 203.5],
            [10.6, 208.4],
            [6, 208.9],
            [1.3, 208.3],
            [0.9, 203.5],
          ],
      f = h.windows || {};
    if (f.W2) {
      const I = m.findIndex((W) => W[0] > 10.5 && W[1] > 201.5 && W[1] < 204.2);
      I >= 0 &&
        m.splice(I, 1, [f.W2[0] + 0.08, 201.7], [f.W2[0] + 0.08, 203.6]);
    }
    const z = h.door || [6, 199, 0];
    (a.hordeLoop && (a.hordeLoop.want = 0.25),
      e.audio.loops.get("heartbeat_fast")?.fadeTo?.(0.18, 3),
      e.audio.loop("tension_drone", { vol: 0 })?.fadeTo?.(0.4, 4));
    {
      const I = e.zombies.alive().length,
        W = ["lanky", ie("soldier", "lanky"), "gown", ie("nun", "gown")],
        M = m.slice().sort(() => Math.random() - 0.5);
      for (let D = I, H = 0; D < 4 && H < M.length; H++) {
        const C = M[H];
        ze(C[0], C[1]) ||
          (e.zombies.spawn(W[D % W.length], C[0], C[1], {
            alerted: !0,
            yaw: Math.atan2(6 - C[0], 203.5 - C[1]),
          }),
          D++);
      }
    }
    G0(t, c);
    const w = (I, W) => {
        let M = 0,
          D = 1e9;
        m.forEach((C, ce) => {
          const me = Math.hypot(C[0] - I.pos.x, C[1] - I.pos.z);
          me < D && ((D = me), (M = ce));
        });
        const H = W % 2 ? 1 : -1;
        ((I.calmT = 999),
          (I.rushed = !1),
          (I._ring = { k: M, dir: H, i: W }),
          (I.goal = new Y(m[M][0], 0, m[M][1])),
          (I.path = null),
          (I.repath = 0));
      },
      L = { on: !0 };
    (async () => {
      for (; L.on && !n(t);) {
        await u(0.25);
        for (const I of e.zombies.alive())
          !I._ring ||
            I._hold ||
            (I.goal &&
              Math.hypot(I.goal.x - I.pos.x, I.goal.z - I.pos.z) < 0.6 &&
              ((I._ring.k = (I._ring.k + I._ring.dir + m.length) % m.length),
              I.goal.set(m[I._ring.k][0], 0, m[I._ring.k][1]),
              (I.path = null),
              (I.repath = 0)));
      }
    })();
    const F = (I) =>
        e.zombies
          .alive()
          .slice()
          .sort(
            (W, M) =>
              Math.hypot(W.pos.x - I[0], W.pos.z - I[1]) -
              Math.hypot(M.pos.x - I[0], M.pos.z - I[1]),
          )[0],
      G = (I, W) => {
        const M = F(I);
        return M
          ? ((M._hold = !0),
            (M.goal = new Y(I[0], 0, I[1])),
            (M.path = null),
            (M.repath = 0),
            Le(t, W, () => {
              M._hold = !1;
            }),
            M)
          : null;
      };
    if (
      (await u(0.6),
      n(t) ||
        (g("a3_lightoff"),
        e.hud.hint("F: light off", 4),
        await x(() => n(t) || !e.weapons.on, 4),
        n(t)))
    )
      return;
    (e.weapons.on && (b("flashlight_click", { vol: 0.6 }), (e.weapons.on = !1)),
      (o.speedMul = 0.32),
      (s.flags.pounding = !1));
    for (const I of e.zombies.alive())
      I._pound && ((I.forceTarget = null), (I._pound = null), (I.path = null));
    (e.zombies.alive().forEach(w), xt("off", 3), (K.want = 0.3));
    const oe = [7.25, 201.55, Math.atan2(6 - 7.25, 200 - 201.55)];
    (async () => (
      await r().walkTo(oe[0], oe[1], { speed: 1, arrive: 0.15 }),
      !n(t) &&
        (r().faceYaw(oe[2] ?? Math.PI),
        r().work({
          pos: [oe[0], oe[1]],
          yaw: oe[2] ?? Math.PI,
          hold: !1,
          crouch: 0.48,
          lean: 6,
          hop: 0,
        }),
        r().lowReady())
    ))();
    const X = (I) => u(I);
    if (
      (G(z, 4),
      b("porch_steps", { pos: [z[0], 0.4, z[1]], vol: 0.8, reverb: 0.2 }),
      f.W2 && G(f.W2, 3),
      await x(() => n(t) || !r().speaking, 3),
      n(t) ||
        (await g("a3_shh", { emote: "scared" }), n(t)) ||
        (c?.shove?.(1),
        c?.shove || b("house_door_rattle", { pos: [6, 1.2, 200], vol: 1.1 }),
        (e.player.shake += 0.2),
        (K.spike = 1),
        typeof e.post.pulse == "number" && (e.post.pulse = 1),
        await X(0.8),
        n(t)))
    )
      return;
    ((K.spike = 0), (L.on = !1));
    const se = [
      [-6, 190],
      [18, 192],
      [6, 186],
      [-4, 206],
      [16, 206],
    ];
    if (
      (e.zombies.alive().forEach((I, W) => {
        const M = se[W % se.length];
        ((I._ring = null),
          (I.goal = new Y(
            M[0] + Math.random() * 2,
            0,
            M[1] + Math.random() * 2,
          )),
          (I.path = null),
          (I.repath = 0));
      }),
      a.hordeLoop && (a.hordeLoop.want = 0),
      e.audio.loops.get("horde_forest")?.stop?.(3),
      await X(1.8),
      n(t) ||
        (e.zombies.clear((I) => !ze(I.pos.x, I.pos.z)),
        e.audio.loops.get("tension_drone")?.fadeTo?.(0.15, 4),
        await g("a3_w_gone", { emote: "sad" }),
        n(t)) ||
        (await X(1.2), n(t)) ||
        (e.zombies.clear(), await q("s3_w_real", { vol: 0.8 }), n(t)) ||
        (await X(0.6), n(t)))
    )
      return;
    (r().work(null), r().standUp());
    const ue = i.lamp || [5.2, 203.2, 0];
    if (
      (g("a3_w_lamp", { emote: "sad" }),
      await r().walkTo(ue[0], ue[1], { speed: 1, arrive: 0.2 }),
      n(t) ||
        (ue[2] != null && r().faceYaw(ue[2]),
        r().holster(),
        await u(0.6),
        n(t)) ||
        (_()?.lamp?.light?.(!0),
        e.audio.loops.get("tension_drone")?.stop?.(4),
        e.audio.loop("amb_house", { vol: 0 }).fadeTo(0.4, 3),
        e.audio.loops.get("heartbeat_fast")?.stop?.(3),
        await u(1.2),
        n(t)) ||
        ((K.want = 0.6),
        xt("mild", 5),
        await r().walkTo(
          o.pos.x + (r().pos.x - o.pos.x) * 0.3,
          o.pos.z + (r().pos.z - o.pos.z) * 0.3,
          { speed: 1, arrive: 1.1 },
        ),
        n(t)) ||
        (r().turnTo(o.pos.x, o.pos.z),
        r().lookAt(O),
        r().emote("sad", 30),
        await u(0.5),
        n(t)) ||
        (await g("a3_w_sleep", { emote: "sad", hold: 1 }), n(t)) ||
        (await u(0.3), await q("s3_w_minute", { vol: 0.8 }), n(t)))
    )
      return;
    const Q = i.bedSide || [7.38, 205.45],
      pe = l?.bed || {},
      A = pe.pos || [8.5, 0.6, 205.6];
    (s.bedRec?.remove?.(),
      (s.bedRec = e.interact.add({
        id: "bed",
        pos: [A[0], Math.max(0.5, A[1]), A[2]],
        radius: 2,
        cone: 0.7,
        prompt: "use",
        enabled: () => s.flags.bedOk && !s.flags.lying,
        onUse: () => {
          s.flags.lying = !0;
        },
      })),
      (s.flags.bedOk = !0),
      (o.speedMul = 0.7),
      e.hud.hint("E: lie down", 6),
      r().lookAt(null));
    const N = i.watch || [7.92, 203.24, -0.6];
    ((async () => (
      await r().walkTo(N[0], N[1], { speed: 1.1, arrive: 0.12 }),
      !n(t) &&
        (N[2] != null && r().faceYaw(N[2]),
        await u(0.5),
        r().sitDown(0.46),
        r().lowReady())
    ))(),
      await x(() => n(t) || s.flags.lying, 3600),
      !n(t) && (await lo(t, Q, pe)));
  }
  async function lo(t, a, l) {
    ((o.frozen = !0),
      (e.combat.invuln = 999),
      s.bedRec?.remove?.(),
      (s.bedRec = null));
    const i = _()?.points || {},
      c = l.eye || i.bedEye || [8.5, 0.88, 206.12],
      h = i.watch || [7.92, 203.24, -0.6],
      m = l.look || [h[0], 1.2, h[1]];
    (e.weapons.setVisible(!1), (e.weapons.suppress = !0));
    const f = Ke();
    (b("bed_creak", { pos: [c[0], 0.5, c[2]], vol: 0.8 }),
      Ft(
        e,
        [
          f,
          { t: 1.1, p: [a[0], 1.3, a[1]], look: [c[0], 0.6, c[2]], fov: 66 },
          { t: 2.6, p: c, look: [c[0] - 0.7, 2.6, c[2] - 0.9], fov: 60 },
          { t: 6, p: c, look: [c[0] - 0.8, 2.5, c[2] - 1.1], fov: 60 },
          { t: 8.5, p: [c[0], c[1] + 0.02, c[2]], look: m, fov: 58, roll: -10 },
        ],
        { ease: "inout" },
      ),
      (K.want = 0.6),
      await u(3),
      !n(t) &&
        (b("lullaby_soft", { vol: 0.4 }),
        await u(3.4),
        !n(t) &&
          (await g("a3_w_here", { emote: "sad" }),
          !n(t) &&
            (await T.tween(e.post, "lid", 0.35, 1.6, "inout"),
            await u(0.5),
            await T.tween(e.post, "lid", 0.8, 0.9, "out"),
            await u(1.2),
            await T.tween(e.post, "lid", 0.2, 1.8, "inout"),
            await u(0.4),
            await T.tween(e.post, "lid", 0.45, 0.8, "out"),
            await u(0.6),
            e.audio.duck("amb", 0, 12),
            await T.tween(e.post, "lid", 0, 2.4, "in"),
            !n(t) &&
              ((e.post.fade = 1),
              await u(2),
              !(n(t) || e.service) &&
                (location.href = location.pathname + "?section=3"))))));
  }
  const $t = {
      garden() {
        k()?.setWorld("dream");
        const t = S().start;
        o.place(t[0], t[1], t[2], 0);
        const a = S().akane;
        r().place(a[0], a[1], 3.9);
      },
      ruins() {
        k()?.setWorld("ruins");
        const t = S().talk;
        o.place(t[0], t[1], 2.2, 0);
        const a = S().akane;
        (r().place(a[0], a[1], 0.9), e.nav.rebuild());
      },
      street() {
        (k()?.setWorld("ruins"),
          e.nav.rebuild(),
          o.place(31, 14.2, -Math.PI / 2, 0),
          r().place(32.4, 14.9, 0.4));
      },
      backalley() {
        (k()?.setWorld("ruins"),
          e.nav.rebuild(),
          o.place(44.4, 27.4, -2.2, 0),
          r().place(45.4, 26.2, 1.4));
      },
      lane() {
        (k()?.setWorld("ruins"),
          e.nav.rebuild(),
          o.place(35.6, 42.2, Math.PI * 0.75, 0),
          r().place(34.2, 40.9, -0.9));
      },
      church() {
        (k()?.setWorld("ruins"),
          e.nav.rebuild(),
          o.place(3, 36.2, Math.PI * 0.8, 0),
          r().place(1.4, 37.4, Math.PI));
      },
      church_in() {
        (k()?.setWorld("ruins"), e.nav.rebuild());
        const t = k()?.churchIn?.points || {},
          a = t.akaneHold || [0, 41.45, Math.PI];
        (o.place(0.4, 43.2, Math.PI, 0),
          r().place(a[0], a[1], a[2] ?? Math.PI));
      },
      forest() {
        (k()?.setWorld("ruins"),
          k()?.churchIn?.backDoor?.open?.(0),
          e.nav.rebuild());
        const t = k()?.forest?.route || [
          [4.25, 64.5],
          [3, 76],
        ];
        (o.place(4.25, 63.2, Math.PI, 0),
          r().place(t[1]?.[0] ?? t[0][0], t[1]?.[1] ?? t[0][1], 0));
        const a = Tt();
        a && U && U.park(a.bike[0], a.bike[1], a.bike[2]);
      },
      house() {
        (k()?.setWorld("ruins"), e.nav.rebuild());
        const t = k()?.house?.points || {},
          a = t.porch || [6, 198.9];
        (o.place(a[0] - 0.4, a[1] - 1.6, Math.PI, 0),
          r().place(a[0] + 0.3, a[1], Math.PI));
        const l = Tt();
        l && U && U.park(l.stop[0], l.stop[1], l.stop[2]);
      },
      nave() {
        $t.church_in();
      },
      burst() {
        $t.church_in();
        const t = k()?.churchIn?.points || {},
          a = t.priest || [0, 57.3, 0],
          l = t.reveal || [0.15, 55.9];
        if ((o.place(l[0], l[1] - 0.45, Math.PI, 0), v)) {
          const i = a[2] ?? 0;
          (v.place(
            a[0] + Math.sin(i) * 0.38,
            a[1] + Math.cos(i) * 0.38,
            i + Math.PI,
          ),
            (v.z.root.visible = !0),
            v.z.setState("stand", { instant: !0 }));
        }
      },
      take() {
        $t.burst();
      },
      yard() {
        (k()?.setWorld("ruins"),
          k()?.churchIn?.backDoor?.open?.(0),
          k()?.churchIn?.barricade?.clearAll?.(),
          e.nav.rebuild());
        const t = k()?.churchIn?.points || {},
          a = t.backOut || [4.25, 63.2];
        (o.place(a[0] - 0.6, a[1] + 1.9, Math.PI * 0.92, 0),
          r().place(a[0] + 0.55, a[1] - 0.2, Math.PI));
        const l = Tt();
        l && U && U.park(l.bike[0], l.bike[1], l.bike[2]);
      },
      bridge() {
        $t.forest();
      },
    },
    W0 = (t) => async (a) => {
      (e.audio.loop("amb_ruins", { vol: 0.65 }),
        (o.speedMul = 1),
        r().lowReady(),
        r().emote("scared", 3),
        await u(0.6),
        !n(a) && (await Dt(a, it[t])));
    },
    U0 = {
      garden: Ye,
      ruins: (t) => Xe(t, !1),
      street: W0("street"),
      backalley: W0("backalley"),
      lane: W0("lane"),
      church: async (t) => {
        (e.audio.loop("amb_ruins", { vol: 0.65 }), await Ht(t));
      },
      nave: (t) => qt(t, !1),
      burst: (t) => Ne(t, !1),
      yard: (t) => g0(t),
      take: async (t) => {
        const a = tt(),
          l = re();
        (k()?.church?.burst?.(1),
          a?.barricade?.clearAll?.(),
          e.nav.rebuild(),
          (s.beat = "burst"),
          e.weapons.give("pistol"),
          e.audio.loop("amb_church", { vol: 0.5 }),
          e.audio.loop("choir_dread", { vol: 0.5 }),
          e.audio.loop("horde_moan", { pos: [0, 1.5, 38], vol: 0.6 }));
        const i = l.backIn || [4.25, 59.8];
        (r().place(i[0] - 0.2, i[1] - 0.3, Math.PI),
          r().lowReady(),
          v &&
            (v.place(0, 57.35, Math.PI),
            (v.z.root.visible = !0),
            v.solid(!0),
            R("shield", "face")),
          Ee(t));
        for (let c = 0; c < 4; c++)
          e.zombies.spawn(
            c % 2 ? "lanky" : ie("nun", "gown"),
            -1.5 + c * 1,
            50 + (c % 2) * 1.2,
            { alerted: !0, target: c % 2 ? "player" : V },
          );
        (await u(0.6), !n(t) && (await et(t)));
      },
      forest: (t) => It(t, { chat: !0 }),
      bridge: (t) => {
        const a = Tt(),
          l = a?.dodge?.[0];
        return It(t, {
          chat: !1,
          from: a ? Math.round(l ? Math.max(20, l.s0 - 25) : a.len * 0.36) : 0,
        });
      },
      house: (t) => ((K.want = 0.45), (K.k = 0.4), q0(t)),
    },
    j0 = (t) => {
      (s.run++,
        T.clear(),
        e.zombies.clear(),
        e.hud.clearSubtitle(),
        e.hud.task?.(null),
        e.hud.card("", "", !1),
        e.npc.revive?.(),
        e.npc.stop(),
        e.npc.work?.(null),
        (e.npc.grabbed = !1),
        e.npc.holster(),
        e.npc.standUp(),
        e.npc.emote("neutral"),
        (e.npc.calmHead = !1),
        (e.npc.freezeMouth = !1),
        (e.npc.noBlink = !1),
        (e.npc.eyeReflect = null),
        (e.npc.attend = !1),
        e.npc.akane &&
          ((e.npc.akane.forceFaceRes = 0), (e.npc.akane.env = null)),
        s.heart?.stop?.(0.3),
        (s.heart = null),
        (e.playerSpeaking = !1),
        (e.post.fade = 0),
        (e.post.lid = 1),
        (e.post.blur = 0),
        e.post.fadeColor.setRGB(0, 0, 0),
        (e.post.aoRadius = 0.55),
        (e.camCtl = null),
        (o.frozen = !1),
        (o.speedMul = 1),
        (s.beat = t),
        (s.flags = {}),
        e.combat.heal(),
        (e.weapons.ammo = e.weapons.mag),
        (e.weapons.reserve = 60),
        k()?.church?.open(0),
        k()?.outside?.district?.reset?.());
      for (const a of s.crateRecs || []) a.remove();
      ((s.crateRecs = null), (e.weapons.showUntil = 0));
      for (const a of [
        "horde_moan",
        "vending_hum",
        "neon_buzz",
        "amb_church",
        "amb_forest",
        "amb_house",
        "stream_loop",
        "priest_murmur",
        "heartbeat",
        "choir_dread",
        "horde_forest",
        "fever_drone",
        "heartbeat_fast",
        "tension_drone",
      ])
        e.audio.loops.get(a)?.stop?.(0.3);
      ((o.mount = null),
        (y.on = !1),
        (y.mount = null),
        (y.eng = null),
        (y.hop = null),
        s.bikeRec?.remove?.(),
        (s.bikeRec = null),
        e.npc.ride?.(null, { now: !0 }),
        (e.npc.rideReach = null),
        U?.away?.(),
        (e.weapons.torchMul = 1),
        (e.beamLight = null),
        U && ((U.engineVol = 1), (U.onboard = !1)));
      for (const a of s.houseRecs || []) a.remove();
      ((s.houseRecs = null), e.audio.muffle?.(0, 0.1), xt("off", 0.1));
      for (const a of ["trail", "ghost", "tunnel", "warp", "bleed"])
        typeof e.post[a] == "number" && (e.post[a] = 0);
      (typeof e.post.pulse == "number" && (e.post.pulse = 0),
        (s.onPriestHit = null),
        (s.pr = null),
        (s.hordeSpots = null),
        (e.lookMul = {}),
        (e.postOwned = !1),
        (e.fovKick = 0),
        (e.houseSealed = !1),
        k()?.churchIn?.barricade?.reset?.(),
        k()?.churchIn?.window?.reset?.(),
        s.siege?.stop?.(),
        (s.siege = null),
        (s.murmur = null),
        (s.naveHeart = null),
        v &&
          ((v.z.root.visible = !1),
          (v.walk = null),
          (v.yawTw = null),
          (v.talking = !1),
          v.setLook(null),
          v.solid(!1),
          v.z.setFade?.(1),
          v.z.holdLantern?.(!1),
          v.z.selfLight?.(0)),
        k()?.churchIn?.backDoor?.open?.(0),
        k()?.house?.reset?.(),
        (e.weapons.suppress = !1),
        k()?.forest?.lanterns?.reset?.(),
        k()?.forest?.fireflies?.reset?.(),
        s.bedRec?.remove?.(),
        (s.bedRec = null),
        s.backRec?.remove?.(),
        (s.backRec = null),
        (K.want = 0),
        (K.k = 0),
        (K.spike = 0),
        (o.lean -= K.lean || 0),
        (K.lean = 0),
        (e.post.ca = 0.0016),
        ($t[t] || $t.garden)(),
        k()?.snapLook?.(),
        Ie(t !== "garden"));
    };
  return (
    (s.goto = async function (a) {
      j0(a);
      const l = s.run;
      (e.audio.unlock?.(), (s.running = !0));
      try {
        await (U0[a] || Ye)(l);
      } catch (i) {
        console.error("[script2]", i);
      }
      s.running = !1;
    }),
    (s.enter = async function (a) {
      j0(a);
      for (let l = 0; l < 6; l++) e.step(1 / 30);
    }),
    (s.start = () =>
      s.goto(new URLSearchParams(location.search).get("beat") || "garden")),
    (s.restartBeat = () =>
      s.goto(
        s.beat === "church_in" ? "church" : U0[s.beat] ? s.beat : "ruins",
      )),
    (s.priest = v),
    (s.sick = K),
    (s.seenAt = ze),
    (s.eyeShot = je),
    s
  );
}
