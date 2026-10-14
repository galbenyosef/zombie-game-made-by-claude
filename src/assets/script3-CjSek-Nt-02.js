// assets/script3-CjSek-Nt 02 — pos
// Lines 35-3457 of readable/assets/script3-CjSek-Nt.pretty.js (statement-aligned).
function Fo(H) {
  const o = H,
    c = H.player,
    w = () => H.npc,
    r = { beat: null, run: 0, flags: {}, running: !1 };
  o.lookMul = {};
  const ie = H.sched,
    N = () => o.rooms.part3?.props || {},
    ne = () => N().house,
    le = () => N().hatch,
    q = () => N().metro || {},
    ue = () => N().park || {},
    rt = () => N().city || {},
    T = (e) => ie.wait(e),
    E = (e, t) => ie.until(e, t),
    I = (e, t) => o.audio.play(e, t),
    G = (e, t) => w().say(e, t),
    p = (e) => e !== r.run,
    C = (e, t, n) => {
      (async () => (await T(t), p(e) || n()))();
    },
    Ft = new A(),
    Se = () => o.camera.getWorldPosition(Ft),
    Y = (...e) => e.find((t) => zo[t]) || "lanky",
    Be = (e, t, n = c.pos.y) =>
      o.world.groundAt ? o.world.groundAt(e, t, n) : 0,
    it = () => {
      const e = o.camera,
        t = new Ke().setFromQuaternion(e.quaternion, "YXZ"),
        n = Be(e.position.x, e.position.z, e.position.y - 1.62);
      ((o.camCtl = null),
        c.place(e.position.x, e.position.z, t.y, t.x, e.position.y - n, n),
        (c.frozen = !1),
        ie.tween(c, "eye", 1.62, 0.4, "inout"));
    },
    fe = () => {
      const e = o.camera,
        t = new Ke().setFromQuaternion(e.quaternion, "YXZ");
      return {
        t: 0,
        p: e.position.toArray(),
        yaw: t.y / Ot,
        pitch: t.x / Ot,
        fov: e.fov,
      };
    },
    Ge = new Map(),
    U = (e, { cool: t = 22, gap: n = 2.5, emote: s, over: a = !1 } = {}) => {
      if (
        w().speaking ||
        r.pa ||
        o.time - (r.lastBark ?? -99) < n ||
        (!a && o.playerSpeaking)
      )
        return !1;
      let i = [],
        l = 1 / 0;
      for (const f of e) {
        if (!o.audio.manifest?.[f]) continue;
        const d = Ge.get(f) ?? -1e9;
        o.time - d < t ||
          (d < l - 1e-6
            ? ((l = d), (i = [f]))
            : Math.abs(d - l) < 1e-6 && i.push(f));
      }
      if (!i.length) return !1;
      const h = i[Math.floor(Math.random() * i.length)];
      return (
        Ge.set(h, o.time),
        (r.lastBark = o.time),
        G(h, s ? { emote: s } : void 0),
        !0
      );
    },
    _e = {
      behind: [
        "a3_behind",
        "a3_behind3",
        "v_behind",
        "v_behind2",
        "a3_c_behind4",
        "a3_c_behind5",
      ],
      lag: ["a2_stayclose", "a2_keepmoving", "a3_c_lag1", "a3_c_lag2"],
      more: ["a3_more", "a3_c_more2"],
      run: ["p3a_run1", "p3a_run2", "a2_keepmoving"],
    };
  async function ze(e, { thought: t = !1, vol: n = 0.95 } = {}) {
    const s = o.audio.manifest[e],
      a = (s?.text || "").replace(/^\[[^\]]*\]\s*/, "");
    (a && o.hud.subtitle(a, (s?.dur ?? 2) + 0.3, "", t ? "thought" : ""),
      (o.playerSpeaking = !0));
    try {
      await o.audio.voice(e, { vol: n, reverb: 0.04 });
    } finally {
      o.playerSpeaking = !1;
    }
  }
  async function Ht(
    e,
    { pos: t = null, chime: n = !0, run: s = r.run, patience: a = 8 } = {},
  ) {
    const i = () => !w().speaking && !o.playerSpeaking;
    if ((await E(() => i() || p(s), a), p(s) || !i())) return !1;
    r.pa = !0;
    try {
      if (
        (n &&
          (I(
            "p3_pa_chime",
            t
              ? { pos: t, vol: 0.5, reverb: 0.6, ref: 4 }
              : { vol: 0.42, reverb: 0.25 },
          ),
          await T(1.3)),
        p(s))
      )
        return !1;
      const l = o.audio.manifest[e],
        h = (l?.text || "").replace(/^\[[^\]]*\]\s*/, "");
      (h && o.hud.subtitle(h, (l?.dur ?? 3) + 0.3, "SPEAKERS", "thought"),
        await o.audio.voice(
          e,
          t
            ? { pos: t, ref: 5, rolloff: 0.5, reverb: 0.7, vol: 1 }
            : { vol: 0.8, reverb: 0.3 },
        ));
    } finally {
      r.pa = !1;
    }
    return !0;
  }
  const me = (e, t, n = 4, s = r.run) =>
      (async () => (
        await E(() => (!r.pa && !w().speaking) || p(s), n),
        p(s) || r.pa || w().speaking ? !1 : (G(e, t), !0)
      ))(),
    lt = new xo(),
    ct = new Lt(),
    Ue = new _o(),
    Ze = new A(),
    Pe = new A(),
    Me = (e, t, n = Be(e, t)) => {
      const s = o.camera;
      (s.updateMatrixWorld(),
        ct.multiplyMatrices(s.projectionMatrix, s.matrixWorldInverse),
        lt.setFromProjectionMatrix(ct),
        s.getWorldPosition(Ze));
      for (const a of [0.45, 1.15, 1.7]) {
        if (
          (Ue.center.set(e, n + a, t),
          (Ue.radius = 0.5),
          !lt.intersectsSphere(Ue))
        )
          continue;
        Pe.set(e, n + a, t).sub(Ze);
        const i = Pe.length();
        if (
          (Pe.divideScalar(i),
          !o.combat.raycastWorld(Ze, Pe, Math.max(0.05, i - 0.35)))
        )
          return !0;
      }
      return !1;
    };
  async function pt(e, t, n = {}, s, a = 10, i = null) {
    const l = o.time,
      h = (d) => Math.hypot(d[0] - c.pos.x, d[1] - c.pos.z),
      f = (d) =>
        o.nav.walkable(d[0], d[1]) &&
        !!o.nav.path(d[0], d[1], c.pos.x, c.pos.z);
    for (;;) {
      if ((s != null && p(s)) || (i && !i())) return null;
      const d = n.minD ?? 8;
      let u = t.find((m) => h(m) >= d && !Me(m[0], m[1]) && f(m));
      if (!u && o.time - l > a) {
        const m = t.slice().sort((g, v) => h(v) - h(g));
        if (
          ((u =
            m.find((g) => h(g) >= 6 && !Me(g[0], g[1]) && f(g)) ||
            m.find((g) => h(g) >= 14 && f(g)) ||
            null),
          !u && o.time - l > a * 3)
        )
          return null;
      }
      if (u) {
        const m = o.zombies.spawn(e, u[0], u[1], {
          ...n,
          yaw: u[2] ?? Math.atan2(c.pos.x - u[0], c.pos.z - u[1]),
        });
        return (Kt(m), m);
      }
      await T(0.15);
    }
  }
  const Kt = (e) => {
    const t = c.forward(new A());
    ((t.y = 0), t.normalize());
    const n = e.pos.x - c.pos.x,
      s = e.pos.z - c.pos.z,
      a = Math.hypot(n, s);
    a > 12 ||
      (o.zombies.groan(e, 1.2),
      (t.x * n + t.z * s) / Math.max(a, 0.001) < -0.2 &&
        ((e.alertT = 1.1), (e.rushed = !1), (e.calmT = 2)));
  };
  function qe(
    e,
    t,
    {
      range: n = 16,
      walkCone: s = 0.42,
      walkCd: a = [0.85, 1.3],
      strafe: i = 0,
    } = {},
  ) {
    ((w().strafe = i),
      (async () => {
        let l = 0;
        const h = (f) => {
          const d = w().headWorld(new A()),
            u = f.kit.chestWorld(new A()),
            m = u.clone().sub(d),
            g = m.length();
          return (m.divideScalar(g), !o.combat.raycastWorld(d, m, g));
        };
        for (; !p(e) && t();) {
          (await T(0.1), (l -= 0.1));
          const f = w();
          if (f.grabbed || f.dead || f.workCue || f.riding) continue;
          const d = f.path?.[f.pathIdx],
            u = d && i > 0 ? Math.atan2(d[0] - f.pos.x, d[1] - f.pos.z) : null;
          let m = null,
            g = 1e9;
          for (const M of o.zombies.alive()) {
            const P = M.pos.distanceTo(f.pos),
              S = M.pos.distanceTo(c.pos);
            if (P > n) continue;
            let R = Math.min(P, S * 0.85);
            (u != null &&
              Math.abs(
                xe(u, Math.atan2(M.pos.x - f.pos.x, M.pos.z - f.pos.z)),
              ) >
                i + s &&
              (R += 10),
              R < g && h(M) && ((g = R), (m = M)));
          }
          if (!m) {
            f.lowReady();
            continue;
          }
          f.aimAt(() => m.kit.chestWorld(new A()));
          const v = Math.abs(
            xe(f.yaw, Math.atan2(m.pos.x - f.pos.x, m.pos.z - f.pos.z)),
          );
          l <= 0 &&
            v < (f.path ? s : 0.3) &&
            f.gun.raise > 0.85 &&
            (f.fire(), (l = f.path ? O(a[0], a[1]) : O(0.65, 1.1)));
        }
      })());
  }
  async function Ie(
    e,
    {
      speed: t = 2.4,
      waitDist: n = 6.5,
      run: s,
      onPoint: a,
      stopR: i = 2.6,
      stopMax: l = 2,
      stopCd: h = 2,
      stopExtra: f = 6,
      holdAt: d = new Set(),
      holdMax: u = 8,
    } = {},
  ) {
    const m = (v) =>
      o.zombies
        .alive()
        .some(
          (M) =>
            M.alerted &&
            !M.carried &&
            Math.abs(M.pos.y - w().pos.y) < 2.2 &&
            (Math.hypot(M.pos.x - w().pos.x, M.pos.z - w().pos.z) < v ||
              Math.hypot(M.pos.x - c.pos.x, M.pos.z - c.pos.z) < v * 0.8),
        );
    let g = 0;
    for (let v = 0; v < e.length; v++) {
      const M = e[v];
      if (p(s)) return;
      let P = !1,
        S = !1,
        R = 0,
        x = 0;
      const _ = () => {
          const W = ++R;
          w()
            .walkTo(M[0], M[1], { speed: t, arrive: 0.55 })
            .then((V) => {
              W === R && (V ? (P = !0) : (S = !0));
            });
        },
        F = () => {
          (R++, w().stop());
        };
      for (_(); !P && !p(s);) {
        if ((await T(0.1), (g -= 0.1), S)) {
          if (((S = !1), x++, w().distTo(M[0], M[1]) < 1.6 || x > 5)) {
            P = !0;
            break;
          }
          (await T(0.25), _());
          continue;
        }
        if (v < e.length - 1 && w().path && w().distTo(M[0], M[1]) < 1.7) {
          P = !0;
          break;
        }
        if (g <= 0 && m(i)) {
          F();
          const J = o.time,
            ke = () =>
              o.zombies
                .alive()
                .some(
                  ($) =>
                    !$.carried &&
                    Math.abs($.pos.y - w().pos.y) < 2.2 &&
                    Math.hypot($.pos.x - w().pos.x, $.pos.z - w().pos.z) < 1.7,
                );
          if (
            (await E(
              () =>
                !m(i + 0.6) ||
                (o.time - J > l && !ke()) ||
                o.time - J > l + f ||
                p(s),
              l + f + 0.5,
            ),
            p(s))
          )
            return;
          ((g = h), _());
          continue;
        }
        const W = w().distTo(c.pos.x, c.pos.z),
          V =
            Math.hypot(c.pos.x - M[0], c.pos.z - M[1]) >
            Math.hypot(w().pos.x - M[0], w().pos.z - M[1]);
        if (W > n && V) {
          if (
            (F(),
            w().lookAt(Se),
            o.time - (r.lastNag ?? -99) > 6 &&
              U(_e.lag, { cool: 12 }) &&
              (r.lastNag = o.time),
            await E(() => w().distTo(c.pos.x, c.pos.z) < n - 2 || p(s), 120),
            p(s))
          )
            return;
          (w().lookAt(null), _());
        }
      }
      if (p(s)) return;
      if ((a && a(v), d.has(v))) {
        const W = o.time;
        let V = null;
        if (
          (await E(
            () => (
              m(8) ? (V = null) : V == null && (V = o.time),
              (V != null && o.time - V > 0.9 && o.time - W > 1) ||
                o.time - W > u ||
                p(s)
            ),
            u + 1,
          ),
          p(s))
        )
          return;
      }
    }
  }
  function Ye(e, t) {
    (async () => {
      for (; !p(e) && t();) {
        for (const n of o.zombies.alive())
          !n.forceTarget &&
            !n.carried &&
            n.state !== "grab" &&
            (n.forceTarget = "player");
        await T(0.25);
      }
    })();
  }
  const Vt = 120,
    Ee = (e) => {
      const t = o.weapons;
      t.reserve < e && ((t.reserve = e), (t.showUntil = o.time + 3));
    };
  function Bt(e) {
    (async () => {
      let t = 0;
      for (; !p(e);) {
        await T(0.4);
        const n = o.weapons;
        if (
          !(
            !n.has.pistol ||
            r.beat === "wake" ||
            r.beat === "ladder" ||
            r.beat === "flight" ||
            r.beat === "crash"
          ) &&
          !(
            n.ammo + n.reserve > 14 ||
            o.time < t ||
            w().dead ||
            w().distTo(c.pos.x, c.pos.z) > 16
          )
        ) {
          if (
            ((t = o.time + 14),
            await E(() => !w().speaking || p(e), 1.5),
            p(e) ||
              (G(Math.random() < 0.5 ? "p3a_ammo" : "p3a_ammo2", {
                emote: "urgent",
              }),
              await T(1),
              p(e)))
          )
            return;
          ((n.reserve += 48),
            (n.showUntil = o.time + 4),
            I("pickup_item", { vol: 0.9 }),
            I("gun_mag_in", { vol: 0.5 }),
            o.hud.hint("+48 rounds", 2.5));
        }
      }
    })();
  }
  const Qe = (() => {
      const e = [];
      try {
        for (const [t, n, s, a, i] of [
          [11.75, he.north.z0 + 0.42, 0.04, K, "metro"],
          [431.6, 227.6, 0.25, K, "metro"],
        ]) {
          const l = [],
            h = vo(t, n, s, l, a);
          (o.scene.add(h.statics, h.group),
            N().cullAdd?.(i, h.statics),
            N().cullAdd?.(i, h.group));
          const f = {
            x0: t - 0.5,
            x1: t + 0.5,
            z0: n - 0.4,
            z1: n + 0.4,
            y0: a,
            y1: a + 0.5,
            shot: !1,
          };
          (Math.abs(Math.cos(s)) < 0.5 &&
            ((f.x0 = t - 0.3),
            (f.x1 = t + 0.3),
            (f.z0 = n - 0.5),
            (f.z1 = n + 0.5)),
            o.world.colliders.push(f),
            e.push(h));
        }
      } catch (t) {
        console.warn("[script3] no ammo crates:", t.message);
      }
      return e;
    })(),
    Xe = () => {
      for (const e of r.crateRecs || []) e.remove();
      r.crateRecs = Qe.map((e, t) =>
        o.interact.add({
          id: "p3_ammo" + t,
          pos: e.pos,
          radius: 1.9,
          cone: 0.55,
          prompt: "take",
          bot: !0,
          enabled: () =>
            !e.taken &&
            o.weapons.has.pistol &&
            Math.abs(e.pos[1] - c.pos.y) < 2 &&
            Math.hypot(e.pos[0] - c.pos.x, e.pos[2] - c.pos.z) < 12,
          onUse: () => {
            e.taken ||
              (e.take(),
              (o.weapons.reserve += 40),
              (o.weapons.showUntil = o.time + 4),
              I("pickup_item", { vol: 0.9 }),
              I("gun_mag_in", { vol: 0.5 }),
              o.hud.hint("+40 rounds", 2.5));
          },
        }),
      );
    },
    Gt = (e, t, n = 7) =>
      Qe.find((s) => !s.taken && Math.hypot(s.pos[0] - e, s.pos[2] - t) < n);
  function je(e, t) {
    (async () => {
      const n = new Set();
      for (; !p(e) && t();) {
        await T(0.5);
        const s = Gt(c.pos.x, c.pos.z, 6);
        !s ||
          n.has(s) ||
          Math.abs(s.pos[1] - c.pos.y) > 2 ||
          w().speaking ||
          (n.add(s), U(["a2_ammo"], { cool: 20, over: !0 }));
      }
    })();
  }
  const Ut = (e) => {
      const t = o.weapons;
      (t.give("torch"), t.give("pistol"), t.setVisible(!0));
    },
    k = (() => {
      try {
        const e = Mo(o.makeCtx(), { rng: o.makeCtx().rng(7301) });
        (o.scene.add(e.root), (e.colliderList = e.colliders || []));
        for (const t of e.colliderList)
          ((t.on = !1), o.world.colliders.push(t));
        return e;
      } catch (e) {
        return (console.warn("[script3] no train:", e.message), null);
      }
    })(),
    y = (() => {
      try {
        const e = Wt(o.makeCtx(), {
          rng: o.makeCtx().rng(7302),
          livery: "rescue",
        });
        (e.root.parent || o.scene.add(e.root),
          e.warm?.(),
          (e.colliderList = e.colliders?.(!1) || []));
        for (const t of e.colliderList) o.world.colliders.push(t);
        return e;
      } catch (e) {
        return (console.warn("[script3] no helicopter:", e.message), null);
      }
    })(),
    Q = (() => {
      try {
        const e = Wt(o.makeCtx(), {
          rng: o.makeCtx().rng(7303),
          livery: "army",
        });
        return (
          e.root.parent || o.scene.add(e.root),
          e.warm?.(),
          e.root.position.set(0, -200, 0),
          e
        );
      } catch (e) {
        return (console.warn("[script3] no army helicopter:", e.message), null);
      }
    })();
  ((r._train = k),
    (r._heli = y),
    (r._heli2 = Q),
    w()?.akane?.dynamicBuffers?.(),
    k && N().cullAdd?.("metro", k.root));
  for (const e of [y, Q])
    e &&
      (N().cullAdd?.("surface", e.root),
      e.fx?.group && N().cullAdd?.("surface", e.fx.group));
  const b = {
    s: 0,
    v: 0,
    on: !1,
    line: null,
    cap: null,
    stopS: null,
    mount: null,
  };
  r._T = b;
  const ft = () => {
      const e = q();
      return (
        b.line ||
          !k ||
          !e.line?.length ||
          (k.setLine?.(e.line), (b.line = e.line)),
        b.line
      );
    },
    ve = (e) => q().stops?.[e]?.s ?? null,
    Je = (e) => {
      !k ||
        !ft() ||
        ((b.s = e), (b.v = 0), k.place?.(e), k.update?.(0, { speed: 0 }));
    };
  (o.updaters.unshift((e) => {
    if (!k || !b.on || !b.line) return;
    let t = b.cap ?? 16;
    if (b.stopS != null) {
      const s = Math.max(0, b.stopS - b.s);
      t = Math.min(
        t,
        Math.sqrt(2 * (b.decel ?? 1.15) * s) + (s > 0.05 ? 0.25 : 0),
      );
    }
    const n =
      t > b.v ? (b.accel ?? 1.25) : Math.max(1.6, (b.decel ?? 1.15) * 1.4);
    if (
      ((b.v += B(t - b.v, -n * e, n * e)),
      (b.s += b.v * e),
      b.stopS != null && b.s >= b.stopS && ((b.s = b.stopS), (b.v = 0)),
      k.place?.(b.s),
      k.update?.(e, { speed: b.v }),
      b.mount && c.mount === b.mount && c._ride(0),
      c.deck && c.deckSync(e),
      b.decel > 1.5 &&
        b.v > 1.2 &&
        b.v < 13 &&
        b.stopS != null &&
        o.fx?.sparks &&
        ((b.sparkT = (b.sparkT || 0) - e), b.sparkT <= 0))
    ) {
      b.sparkT = 0.05 + Math.random() * 0.06;
      const s = [2.75, 15.25, 20.75, 33.25, 38.75, 51.25][
          Math.floor(Math.random() * 6)
        ],
        a = dt(b.s - s),
        i = Math.random() < 0.7 ? -0.72 : 0.72;
      a &&
        o.fx.sparks(
          Zt.set(
            a.x + Math.cos(a.yaw) * i,
            a.y + 0.12,
            a.z - Math.sin(a.yaw) * i,
          ),
          qt.set(
            Math.sin(a.yaw) * b.v * 0.35,
            0.4,
            Math.cos(a.yaw) * b.v * 0.35,
          ),
          3 + Math.floor(Math.random() * 4),
          1.2,
        );
    }
    if (!b.mount && b.v > 3) {
      const s = dt(b.s - 27);
      if (s) {
        const a = Math.hypot(s.x - c.pos.x, s.z - c.pos.z);
        a < 30 &&
          (c.shake = Math.max(
            c.shake,
            0.06 * (1 - a / 30) * Math.min(1, b.v / 12),
          ));
      }
    }
  }),
    o.updaters.splice(1, 0, (e) => ao(e)));
  const Zt = new A(),
    qt = new A(),
    dt = (e) => {
      const t = b.line;
      if (!t?.length) return null;
      const n = Math.max(0, Math.min(t.length - 1.001, e / 0.5)),
        s = Math.floor(n),
        a = n - s,
        i = t[s],
        l = t[s + 1];
      return {
        x: i[0] + (l[0] - i[0]) * a,
        y: i[1] + (l[1] - i[1]) * a,
        z: i[2] + (l[2] - i[2]) * a,
        yaw: Math.atan2(l[0] - i[0], l[2] - i[2]),
      };
    };
  k &&
    o.updaters.push((e) => {
      b.on || k.update?.(e, { speed: 0 });
    });
  const we = (e) => {
      if (k) {
        (k.refreshColliders?.(), (k.collidersOn = e));
        for (const t of k.colliderList || [])
          t.on =
            e &&
            (!t.plug ||
              !!t.plug.car.locked ||
              (k.doorsOf?.(
                t.plug.car.dir > 0
                  ? t.plug.side
                  : t.plug.side === "left"
                    ? "right"
                    : "left",
              ) ?? 0) < 0.25);
      }
    },
    Te = (e, t) => {
      for (const n of q().props?.edges?.[e] || []) n.on = t;
    },
    X = {
      on: !1,
      rpm: 0,
      mount: null,
      pos: new A(),
      q: new Re(),
      yaw: L.yaw,
      tail: null,
    };
  r._HP = X;
  const Ae = (e = !1) => {
    y &&
      (y.root.position.set(L.pos[0], L.pos[1], L.pos[2]),
      y.root.quaternion.setFromAxisAngle(new A(0, 1, 0), L.yaw),
      y.root.updateMatrixWorld(!0),
      y.beacon?.(!0),
      y.update?.(0, { collective: 0, cyclic: [0, 0], pedal: 0, speed: 0 }),
      y.colliders?.(!0),
      e && o.nav?.rebuild());
  };
  (y &&
    o.updaters.push((e) => {
      X.on ||
        (r.spool != null && (r.spool = Math.min(1, r.spool + e * 0.45)),
        y.update?.(e, {
          rpm: r.spool ?? void 0,
          collective: 0,
          cyclic: [0, 0],
          pedal: 0,
          speed: 0,
        }));
    }),
    Q &&
      o.updaters.push((e) => {
        Q.update?.(
          e,
          Q.root.position.y > -100
            ? {
                rpm: 1,
                collective: 0.5,
                cyclic: [0, 0],
                pedal: 0,
                speed: 30,
                damage: 1,
              }
            : { rpm: 0 },
        );
      }));
  const Yt = new Re(),
    Qt = new Re().setFromAxisAngle(new A(0, 1, 0), Math.PI),
    ht = () => ({
      eye: (e) => {
        const t = y.seats?.copilot;
        return (
          y.root.updateMatrixWorld(!0),
          t
            ? t.getWorldPosition(e)
            : e
                .copy(y.root.position)
                .add(new A(0.38, 1.9, 1.5).applyQuaternion(y.root.quaternion)),
          e
        );
      },
      yaw: () => 0,
      quat: (e) => {
        const t = y.seats?.copilot || y.root;
        return (
          t.updateMatrixWorld(!0),
          e.copy(t.getWorldQuaternion(Yt)).multiply(Qt),
          e
        );
      },
    }),
    D = [];
  ((r._carry = D),
    (r._spawnCarried = (...e) => j(...e)),
    (r._platformSide = (e) => ut(e)));
  const ae = (e) => k?.cars?.[e]?.group || null,
    re = () => k?.dims || { END: 8.75, IW: 1.3, FL: 1.1 },
    te = new A(),
    Z = new A(),
    ce = new A(),
    $e = (e, t, n) => {
      const s = re();
      for (let a = 0; a < 3; a++) {
        const i = ae(a);
        if (
          i &&
          (i.updateMatrixWorld(!0),
          te.set(e, t, n),
          i.worldToLocal(te),
          Math.abs(te.x) < s.END + 0.1 &&
            Math.abs(te.z) < s.IW + 0.25 &&
            te.y > s.FL - 1 &&
            te.y < s.FL + 1.2)
        )
          return { i: a, x: te.x, z: te.z };
      }
      return null;
    },
    ut = (e) => {
      const t = ae(e);
      return t
        ? (t.updateMatrixWorld(!0),
          te.setFromMatrixPosition(t.matrixWorld),
          (te.z = oe - 3),
          t.worldToLocal(te),
          Math.sign(te.z) || -1)
        : -1;
    };
  function mt(e, t, n, s, a = "walk") {
    const i = re();
    return (
      (e.carried = {
        car: t,
        x: B(n, -i.END + 0.3, i.END - 0.3),
        z: B(s, -i.IW + 0.35, i.IW - 0.35),
        yaw: n < 0 ? Math.PI / 2 : -Math.PI / 2,
        mode: a,
        t: 0,
        hp: e.hp,
        stag: 0,
        cd: 0.6 + Math.random(),
        wob: Math.random() * 6,
        beat: 0,
      }),
      (e.state = "grab"),
      (e.forceTarget = null),
      (e.path = null),
      (e.goal = null),
      (e.alerted = !0),
      (e.alertT = 0),
      (e.air = null),
      e.kit.setState(a === "window" ? "reach" : "shamble", { speed: 0.9 }),
      D.includes(e) || D.push(e),
      e
    );
  }
  function wt(e) {
    if (!e.carried) return;
    e.carried = null;
    const t = D.indexOf(e);
    (t >= 0 && D.splice(t, 1),
      e.dead ||
        ((e.state = "chase"),
        (e.alerted = !0),
        (e.alertT = 0),
        (e.forceTarget = "player"),
        (e.path = null),
        (e.repath = 0),
        (e.rushed = !0),
        e.kit.setState("shamble")),
      (e.circle.x = e.pos.x),
      (e.circle.z = e.pos.z));
  }
  function j(e, t, n, s, a = "walk") {
    const i = ae(t);
    if (!i) return null;
    const l = re();
    (i.updateMatrixWorld(!0), Z.set(n, l.FL, s), i.localToWorld(Z));
    const h = o.zombies.spawn(e, Z.x, Z.z, { y: Z.y, alerted: !0 });
    return ((h.pos.y = Z.y), mt(h, t, n, s, a));
  }
  const gt = new A(),
    Ce = () => {
      if (c.deck) return c.deck.local;
      const e = ae(1);
      return e
        ? (e.updateMatrixWorld(!0), e.worldToLocal(gt.copy(c.pos)))
        : gt.set(0.44, 0, -0.98);
    },
    De = () => k?.spots?.akane?.position || { x: 0.42, z: 0.93 },
    Xt = (e, t) => {
      const n = Ce(),
        s = De(),
        a = Math.hypot(t.x - n.x, t.z - n.z),
        i = Math.hypot(t.x - s.x, t.z - s.z);
      a < 1.15 && a <= i + 0.3
        ? o.combat.hurt(e.cfg.dmg, e.pos)
        : i < 1.2 && (w().flinch = 1);
    },
    jt = [
      [-6.815, -5.185],
      [-0.815, 0.815],
      [5.185, 6.815],
    ],
    Jt = [],
    $t = [];
  function kt(e, t) {
    const n = re(),
      s = n.END,
      a = 0.78 - e,
      i = n.IW - e,
      l = Math.max(0.05, 0.46 - e);
    ((t.length = 0), t.push([-s + e, s - e, -a, a]));
    for (const [h, f] of jt) t.push([h + e, f - e, -i, i]);
    return (
      (k?.gangwayK?.("front") ?? 0) > 0.6 && t.push([s - e, s + 0.32, -l, l]),
      (k?.gangwayK?.("rear") ?? 0) > 0.6 && t.push([-s - 0.32, -s + e, -l, l]),
      t
    );
  }
  function et(e, t, n) {
    let s = 0,
      a = 0,
      i = 1 / 0;
    for (const l of n) {
      const h = B(e.x, l[0], l[1]),
        f = B(e.z, l[2], l[3]),
        d = (h - e.x) ** 2 + (f - e.z) ** 2;
      if (d < 1e-10) return !1;
      d < i && ((i = d), (s = h), (a = f));
    }
    if (t && i > 1e-12) {
      const l = Math.sqrt(i),
        h = (s - e.x) / l,
        f = (a - e.z) / l,
        d = t.x * h + t.z * f;
      d < 0 && ((t.x -= d * h), (t.z -= d * f));
    }
    return ((e.x = s), (e.z = a), !0);
  }
  function eo(e, t, n) {
    const s = kt(n, Jt),
      a = t.x,
      i = 0.78 - n;
    (et(e, t, s),
      Math.abs(a) > 0.3 &&
        Math.abs(t.x) < Math.abs(a) * 0.5 &&
        Math.abs(e.z) > i + 0.004 &&
        (t.z -= Math.sign(e.z) * Math.abs(a) * 0.85));
    const l = (f, d, u) => {
      const m = e.x - f,
        g = e.z - d,
        v = Math.hypot(m, g),
        M = n + u;
      if (v >= M || v < 1e-6) return;
      const P = m / v,
        S = g / v;
      ((e.x = f + P * M), (e.z = d + S * M));
      const R = t.x * P + t.z * S;
      R < 0 && ((t.x -= R * P), (t.z -= R * S));
    };
    for (const f of D) {
      const d = f.carried;
      !f.dead && d && d.car === 1 && l(d.x, d.z, 0.27);
    }
    const h = De();
    (l(h.x, h.z, 0.25), et(e, t, s));
  }
  const tt = (e) => {
      if (!e) {
        c.deck && c.setDeck(null);
        return;
      }
      const t = ae(1);
      !t ||
        !c.setDeck ||
        ((c.mount = null),
        (b.mount = null),
        c.setDeck({
          frame: t,
          floorY: re().FL,
          resolve: eo,
          surface: "metal",
        }));
    },
    yt = [];
  for (const e of ["rear", "front"])
    for (const t of [
      [-1.3, -0.46],
      [-0.46, 0.46],
      [0.46, 1.3],
    ]) {
      const n = {
        x0: 0,
        x1: 0,
        z0: 0,
        z1: 0,
        y0: 0,
        y1: 0,
        on: !1,
        end: e,
        za: t[0],
        zb: t[1],
        door: t[0] === -0.46,
      };
      (o.world.colliders.push(n), yt.push(n));
    }
  const pe = new bo(),
    to = new A();
  function oo() {
    const e = ae(1),
      t = re(),
      n = !!(e && b.on && r.beat === "train");
    for (const s of yt) {
      if (((s.on = n && (!s.door || (k.gangwayK?.(s.end) ?? 1) < 0.5)), !s.on))
        continue;
      const a = (s.end === "rear" ? -1 : 1) * (t.END + 0.02);
      pe.makeEmpty();
      for (const i of [-0.05, 0.05])
        for (const l of [t.FL, t.FL + 2.3])
          for (const h of [s.za, s.zb])
            pe.expandByPoint(e.localToWorld(to.set(a + i, l, h)));
      ((s.x0 = pe.min.x),
        (s.x1 = pe.max.x),
        (s.y0 = pe.min.y),
        (s.y1 = pe.max.y),
        (s.z0 = pe.min.z),
        (s.z1 = pe.max.z));
    }
  }
  function ao(e) {
    if ((k && oo(), !D.length || !k)) return;
    const t = re(),
      n = t.END;
    for (let s = 0; s < 3; s++) ae(s)?.updateMatrixWorld(!0);
    for (const s of D.slice()) {
      const a = s.carried;
      if (!a) continue;
      const i = ae(a.car);
      if (i) {
        if (!s.dead) {
          if (
            ((a.t += e),
            (a.cd -= e),
            s.hp < a.hp - 0.01 &&
              ((a.hp = s.hp),
              (a.stag = 0.5),
              s.kit.setState(
                Math.random() < 0.5 ? "stagger_back" : "stagger_front",
              ),
              (a.x -= Math.sin(a.yaw) * 0.14),
              (a.z -= Math.cos(a.yaw) * 0.08)),
            a.stag > 0)
          )
            a.stag -= e;
          else if (a.mode === "window")
            ((a.yaw = a.z > 0 ? 0 : Math.PI),
              a.cd <= 0 &&
                ((a.cd = 0.9 + Math.random() * 0.8),
                s.kit.setState("attack"),
                C(r.run, 0.42, () => {
                  !s.dead &&
                    s.carried &&
                    I("window_knock", {
                      pos: [s.pos.x, s.pos.y + 1.5, s.pos.z],
                      vol: 0.9,
                      rate: 0.85 + Math.random() * 0.3,
                      reverb: 0.3,
                    });
                })));
          else if (a.mode === "attack") {
            if (((a.beat += e), a.car === 1 && a.beat < 0.4)) {
              const l = a.tgt === "akane" ? De() : Ce();
              a.yaw += B(
                xe(a.yaw, Math.atan2(l.x - a.x, l.z - a.z)),
                -6 * e,
                6 * e,
              );
            }
            (a.beat > 0.45 &&
              !a.hit &&
              ((a.hit = !0),
              a.car === 1
                ? Xt(s, a)
                : a.door &&
                  ((a.door === "rear" ? k.bang : k.bangFront)?.(
                    0.6 + Math.random() * 0.4,
                  ),
                  (c.shake += 0.03))),
              a.beat > 1 &&
                ((a.mode = a.door ? "door" : "walk"),
                (a.cd = 0.15 + Math.random() * 0.5),
                s.kit.setState(a.door ? "idle" : "shamble", { speed: 0.9 })));
          } else {
            let l,
              h,
              f = null;
            if (a.car === 1) {
              const v = Ce(),
                M = De(),
                P = Math.hypot(a.x - v.x, a.z - v.z),
                S = Math.hypot(a.x - M.x, a.z - M.z);
              ((f = P <= S + 0.6 ? v : M),
                (a.tgt = f === v ? "sara" : "akane"),
                (l = f.x),
                (h = f.z));
            } else ((l = -n + 0.35), (h = 0));
            const d = l - a.x,
              u = h - a.z,
              m = Math.hypot(d, u),
              g = a.car !== 1 ? (a.car === 0 ? "front" : "rear") : null;
            if (g && m < 0.3)
              k.gangwayK?.(g) > 0.6
                ? (i.localToWorld(Z.set(a.x - 0.6, t.FL, a.z)),
                  ae(1).worldToLocal(ce.copy(Z)),
                  D.some(
                    (M) =>
                      M !== s &&
                      !M.dead &&
                      M.carried?.car === 1 &&
                      Math.hypot(M.carried.x - ce.x, M.carried.z - ce.z) < 0.75,
                  )
                    ? ((a.yaw = -Math.PI / 2), s.kit.setState("idle"))
                    : ((a.car = 1),
                      (a.x = ce.x),
                      (a.z = ce.z),
                      (a.mode = "walk"),
                      (a.door = null),
                      (a.entered = o.time),
                      s.kit.setState("shamble", { speed: 1 })))
                : ((a.mode = "door"),
                  (a.door = g),
                  (a.yaw = -Math.PI / 2),
                  a.cd <= 0 &&
                    ((a.mode = "attack"),
                    (a.beat = 0),
                    (a.hit = !1),
                    s.kit.setState("attack"),
                    (a.cd = 0.6 + Math.random() * 0.7)));
            else if (a.car === 1 && m < 0.8)
              ((a.yaw = Math.atan2(d, u)),
                a.cd <= 0
                  ? ((a.mode = "attack"),
                    (a.beat = 0),
                    (a.hit = !1),
                    (a.door = null),
                    s.kit.setState("attack"),
                    (a.cd = 0.45 + Math.random() * 0.55))
                  : s.kit.setState("idle"));
            else {
              let v = 1;
              const M = m > 1e-6 ? d / m : 0,
                P = m > 1e-6 ? u / m : 0;
              for (const x of D) {
                if (x === s || x.dead || !x.carried || x.carried.car !== a.car)
                  continue;
                const _ = x.carried.x - a.x,
                  F = x.carried.z - a.z,
                  W = _ * M + F * P,
                  V = Math.abs(_ * P - F * M);
                if (W > 0 && W < 0.68 && V < 0.42) {
                  v = 0;
                  break;
                }
              }
              const S =
                  s.kind !== "brute" && (a.car !== 1 || m > 3.2) && a.t > 0.6,
                R =
                  v *
                  (S
                    ? Math.min(s.kit.groundSpeed || 2.6, 2.9)
                    : Math.min(s.kit.groundSpeed || s.cfg.walk, 1.6) *
                      (s.kind === "gown" || s.kind === "soldier" ? 1.25 : 1));
              if (m > 0.001 && R > 0) {
                const x = Math.min(
                  Math.max(0, m - (a.car === 1 ? 0.7 : 0)),
                  R * e,
                );
                ((a.x += M * x), (a.z += P * x));
              }
              ((a.z += Math.sin(a.t * 1.7 + a.wob) * 0.04 * e),
                (a.yaw = Math.atan2(d, u)),
                s.kit.setState(R > 0 ? (S ? "run" : "shamble") : "idle", {
                  speed: S ? 1 : 0.9,
                }),
                a.mode === "door" && (a.mode = "walk"));
            }
          }
          if (a.mode === "window") a.z = B(a.z, -t.IW + 0.32, t.IW - 0.32);
          else if (a.car === 1) {
            for (const u of D) {
              if (u === s || u.dead || !u.carried || u.carried.car !== 1)
                continue;
              const m = a.x - u.carried.x,
                g = a.z - u.carried.z,
                v = Math.hypot(m, g);
              if (v < 0.56 && v > 1e-4) {
                const M = (0.56 - v) * 0.5;
                ((a.x += (m / v) * M), (a.z += (g / v) * M));
              }
            }
            const l = Ce(),
              h = a.x - l.x,
              f = a.z - l.z,
              d = Math.hypot(h, f);
            (d < 0.5 &&
              d > 1e-4 &&
              ((a.x = l.x + (h / d) * 0.5), (a.z = l.z + (f / d) * 0.5)),
              et(a, null, kt(0.27, $t)));
          } else
            ((a.x = B(a.x, -n + 0.25, n - 0.25)), (a.z = B(a.z, -0.5, 0.5)));
        }
        (i.localToWorld(Z.set(a.x, t.FL, a.z)),
          s.pos.copy(Z),
          ce
            .set(Math.sin(a.yaw), 0, Math.cos(a.yaw))
            .transformDirection(i.matrixWorld),
          (s.yaw = Math.atan2(ce.x, ce.z)),
          s.sync(),
          (s.circle.x = s.pos.x),
          (s.circle.z = s.pos.z));
      }
    }
  }
  function so(e, t) {
    (async () => {
      const n = k?.spots?.akane;
      if (!n) return;
      const s = n.rotation.y;
      let a = 0.9;
      for (; !p(e) && t();) {
        (await T(0.05), (a -= 0.05));
        let i = null,
          l = 1e9;
        for (const f of D) {
          const d = f.carried;
          if (f.dead || !d || d.car !== 1) continue;
          const u = Math.hypot(d.x - n.position.x, d.z - n.position.z);
          u < l && u < 10 && ((l = u), (i = f));
        }
        const h = i
          ? Math.atan2(i.carried.x - n.position.x, i.carried.z - n.position.z)
          : s;
        if (((n.rotation.y += B(xe(n.rotation.y, h), -0.22, 0.22)), !i)) {
          w().gun.mode === "aim" && w().lowReady();
          continue;
        }
        if (w().gun.mode !== "aim" || w().gun.aim?._t !== i) {
          const f = () => i.kit.chestWorld(new A());
          ((f._t = i), w().aimAt(f));
        }
        a <= 0 &&
          Math.abs(xe(n.rotation.y, h)) < (l < 1.6 ? 0.45 : 0.22) &&
          w().gun.raise > (l < 1.6 ? 0.55 : 0.8) &&
          l < 8.5 &&
          (w().fire(), (a = l < 1.6 ? O(0.45, 0.7) : O(0.7, 1.1)));
      }
      p(e) || ((n.rotation.y = s), w().lowReady());
    })();
  }
  const no = 199.6;
  function ro(e) {
    const t = ne();
    if (!t) return;
    const n = t.frontDoor,
      s = t.outside || {},
      a = {
        pos: new A(6, 0, 199.95),
        reach: 0.75,
        hurt: () => {
          r.flags.pound &&
            (n?.shove?.(0.5 + Math.random() * 0.45), (c.shake += 0.03));
        },
      },
      i = (m, g) => ({
        pos: new A(m, 0, g),
        reach: 0.75,
        hurt: () => {
          r.flags.pound &&
            I("window_knock", {
              pos: [m, 1.35, g],
              vol: 0.95,
              rate: 0.9 + Math.random() * 0.2,
              reverb: 0.2,
            });
        },
      }),
      l = {
        pos: new A(6, 0, 207.05),
        reach: 0.75,
        hurt: () => {
          r.flags.pound && t.backDoor?.shove?.(0.4 + Math.random() * 0.4);
        },
      },
      h = [a, i(3.9, 199.95), a, l, i(9.55, 202.74), i(3.8, 207.05), a];
    r.flags.pound = !0;
    let f = 0;
    (async () => {
      for (; !p(e) && r.flags.pound;) {
        for (const m of o.zombies.alive())
          m._pound ||
            m.inCabin ||
            ((m._pound = h[f++ % h.length]),
            (m.forceTarget = m._pound),
            (m.alerted = !0),
            (m.path = null),
            (m.repath = 0));
        await T(0.4);
      }
    })();
    const d = s.ring || [
        [6, 197.8],
        [10.7, 198.3],
        [11.05, 202.8],
        [6, 208.65],
        [1.25, 208.1],
        [0.2, 203.6],
      ],
      u = ["lanky", "brute", "gown", Y("soldier", "lanky"), "lanky", "gown"];
    for (let m = 0; m < 6; m++) {
      const g = d[(m * 3) % d.length];
      o.zombies.spawn(u[m], g[0] + O(-0.4, 0.4), g[1] + O(-0.3, 0.3), {
        alerted: !0,
        y: 0,
      });
    }
  }
  function bt(e) {
    if (r.flags.burst) return;
    r.flags.burst = !0;
    const t = ne(),
      n = t?.frontDoor;
    (I("p3_door_burst", { pos: [6, 1.2, 200.1], vol: 1.2, reverb: 0.3 }),
      n?.bolt?.(!1),
      n?.slam?.(1),
      n?.open?.(1, 0.18),
      (c.shake += 0.35),
      t?.lamp?.shake?.(1),
      C(e, 0.25, () => o.nav.rebuild()),
      (r.flags.pound = !1));
    for (const s of o.zombies.alive())
      (s.state === "grab" && (s.state = "chase"),
        (s.forceTarget = "player"),
        (s._pound = null),
        (s.inCabin = !0),
        (s.path = null),
        (s.repath = 0),
        (s.rushed = !0));
    r.winBeater = null;
  }
  async function xt(e) {
    r.beat = "wake";
    const t = ne(),
      n = t?.points || {},
      s = le();
    if (!t) return;
    (t.frontDoor?.snap?.(0, !1),
      t.frontDoor?.bolt?.(!0),
      t.backDoor?.snap?.(0, !1),
      t.backDoor?.bolt?.(!0),
      t.shutters?.snapAll?.(1),
      t.lamp?.set?.(!0),
      s?.lid?.set(1),
      N().setLevel?.("cabin"),
      o.audio.loop("amb_house", { vol: 0 }).fadeTo(0.35, 3));
    const a = n.bedEye || [8.5, 0.88, 206.12],
      i = n.bedSide || [7.38, 205.45];
    (w().place(
      i[0] - 0.05,
      i[1] - 0.15,
      Math.atan2(a[0] - i[0], a[2] - i[1]),
      0,
    ),
      w().holster(),
      w().emote("urgent", 6),
      w().kneelAt([a[0] - 0.35, 0.72, a[2] - 0.3]),
      (w().kneelK = 1),
      o.weapons.setVisible(!1),
      (o.weapons.on = !1),
      (c.frozen = !0),
      c.place(i[0] + 0.4, i[1] + 0.3, -1.2, 0, 1.62, 0),
      (o.post.fade = 1),
      (o.post.lid = 0));
    const l = new A(),
      h = new A(),
      f = o.camera;
    let d = null;
    if (
      ((o.camCtl = (P) => {
        (w().headWorld(l),
          (l.y -= 0.04),
          d || (d = l.clone()),
          d.lerp(l, 1 - Math.exp(-P * 4)),
          f.position.set(a[0], a[1] + Math.sin(o.time * 0.7) * 0.004, a[2]),
          h.copy(d),
          f.up.set(0, 1, 0),
          f.lookAt(h),
          f.rotateZ(-0.16),
          f.fov !== 62 && ((f.fov = 62), f.updateProjectionMatrix()));
      }),
      w().lookAt(Se),
      await T(0.2),
      p(e) ||
        (G("p3a_wake", { emote: "urgent" }),
        (c.shake += 0.05),
        await T(0.4),
        p(e)) ||
        (ie.tween(o.post, "fade", 0, 0.8, "out"),
        await ie.tween(o.post, "lid", 0.6, 0.4, "out"),
        p(e)) ||
        (await ie.tween(o.post, "lid", 0.25, 0.2, "in"),
        await ie.tween(o.post, "lid", 1, 0.4, "out"),
        p(e)) ||
        (await E(() => !w().speaking || p(e), 2), p(e)))
    )
      return;
    (w().emote("scared", 4),
      G("p3a_trap", { emote: "scared" }),
      w().gesturePoint(1.2),
      C(e, 0.4, () => w().standUp()));
    const u = be;
    if (
      (C(e, 0.7, () => {
        const P = fe();
        de(
          o,
          [
            P,
            { t: 0.9, p: [8.05, 1.08, 205.95], look: [u.x, 0.2, u.z], fov: 66 },
            {
              t: 1.8,
              p: [7.55, 1.62, 205.75],
              look: [u.x - 0.2, 0.4, u.z - 0.2],
              fov: 72,
            },
          ],
          { ease: "inout" },
        ).then(() => {
          p(e) ||
            (it(),
            o.weapons.setVisible(!0),
            o.audio.play("bed_creak", { vol: 0.4 }));
        });
      }),
      await T(0.7),
      p(e) ||
        (await io(e), p(e)) ||
        ((r.flags.akaneDown = !0), await T(0.4), p(e)))
    )
      return;
    (ro(e),
      t.frontDoor?.shove?.(1),
      (c.shake += 0.15),
      t.lamp?.shake?.(0.8),
      C(e, 0.7, () => {
        o.weapons.on ||
          ((o.weapons.on = !0), I("flashlight_click", { vol: 0.5 }));
      }),
      I("zombie_growl", { pos: [6, 1.5, 198.8], vol: 1 }),
      C(e, 1.6, () => {
        const P = t.shutters?.get?.("W1");
        if (!P) return;
        (P.close(0.2, 0.18),
          I("house_shutter_close", { pos: [3.9, 1.3, 200.3], vol: 1 }),
          t.lamp?.shake?.(0.5));
        const S = o.zombies.spawn("gown", 3.9, no, {
          yaw: 0,
          y: 0,
          alerted: !0,
        });
        ((S.inCabin = !1),
          (S._pound = { pos: new A(3.9, 0, 199.98) }),
          (S.state = "grab"),
          (S.forceTarget = null),
          (S.yaw = 0),
          S.kit.setState("reach"),
          S.sync(),
          (r.winBeater = S),
          o.zombies.groan(S, 1.3),
          (async () => {
            for (
              await T(0.5);
              !p(e) &&
              r.flags.pound &&
              S.state === "grab" &&
              !S.dead &&
              (S.kit.setState("attack"),
              await T(0.45),
              !(p(e) || !r.flags.pound || S.dead));
            )
              (I("window_knock", {
                pos: [3.9, 1.35, 200.1],
                vol: 1.1,
                rate: 0.85 + Math.random() * 0.3,
                reverb: 0.2,
              }),
                t.lamp?.shake?.(0.15),
                await T(
                  0.5 + Math.random() * (Math.random() < 0.3 ? 1.4 : 0.5),
                ));
          })());
      }),
      o.audio.loop("heartbeat_fast", { vol: 0 })?.fadeTo?.(0.25, 2));
    const m = [u.x, 0.35, u.z];
    (r.hatchRec?.remove?.(),
      C(e, 3.2, () => {
        ((r.flags.hatchReady = !0), o.hud.hint("E: climb down", 4));
      }),
      (r.hatchRec = o.interact.add({
        id: "hatch",
        pos: m,
        radius: 1.9,
        cone: 0.75,
        prompt: "use",
        bot: !0,
        enabled: () =>
          r.flags.akaneDown && r.flags.hatchReady && !r.flags.climb,
        onUse: () => {
          r.flags.climb = !0;
        },
      })));
    const g = o.time;
    let v = o.time + 3.6,
      M = 0;
    (await E(
      () =>
        p(e) || r.flags.climb
          ? !0
          : (o.time > v &&
              !w().speaking &&
              (G(M++ % 2 ? "p3a_hurry2" : "p3a_hurry", { subtitle: !0 }),
              (v = o.time + 7)),
            o.time - g > 22 && !r.flags.burst && bt(e),
            !1),
      1 / 0,
    ),
      !p(e) && (r.hatchRec?.remove?.(), (r.hatchRec = null), await lo(e)));
  }
  async function io(e) {
    const t = w(),
      n = be,
      s = [n.x + 0.02, n.z + n.d / 2 + 0.3];
    if (
      (await t.walkTo(s[0], s[1], { speed: 2, arrive: 0.12 }),
      p(e) ||
        (t.faceYaw(Math.PI),
        C(r.run, 0.1, async () => {
          (await E(() => !t.speaking, 3),
            G("p3a_follow", { emote: "whisper" }));
        }),
        await T(0.25),
        p(e)))
    )
      return;
    (I("p3_ladder_hands", { pos: [n.x, 0.5, n.z], vol: 0.7 }),
      (t.noGround = !0));
    const a = t.pos.z,
      i = n.ladderZ + 0.36,
      l = t.pos.y;
    let h = 0;
    (await ie.during(2, (f) => {
      const d = Ve(f),
        u = l - 2.8 * f * f;
      ((t.pos.z = Nt(a, i, Ve(Math.min(1, f * 2.4)))), (t.pos.y = u));
      const m = Math.max(-0.4, u + 1.38),
        g = Math.sin(f * Math.PI * 6) * 0.1;
      t.work({
        pos: [t.pos.x, t.pos.z],
        yaw: Math.PI,
        hold: !0,
        L: [n.x + 0.22, Math.min(0.92, m + g), n.ladderZ + 0.04],
        R: [n.x - 0.22, Math.min(0.92, m - g), n.ladderZ + 0.04],
        lean: 6 + 10 * d,
      });
      const v = Math.floor(-u / 0.3);
      v !== h &&
        ((h = v),
        I("p3_ladder_step", {
          pos: [n.x, u + 0.2, n.z],
          vol: 0.55,
          rate: O(0.92, 1.08),
          reverb: 0.4,
        }));
    }),
      !p(e) &&
        (t.work(null),
        q().points?.shaftBottom || (n.x, K, n.z + 0.12),
        (t.noGround = !1),
        t.place(n.x + 0.05, n.shaft.z1 + 0.9, Math.PI, K),
        t.lowReady(),
        t.aimAt(new A(n.x, 0, n.z))));
  }
  async function lo(e) {
    r.beat = "ladder";
    const t = be,
      n = ne(),
      s = le();
    ((c.frozen = !0),
      o.weapons.setVisible(!1),
      (o.weapons.on = !0),
      I("flashlight_click", { vol: 0.5 }));
    const a = fe(),
      i = [t.x, 1.62, t.z + t.d / 2 + 0.25];
    if (
      (await de(
        o,
        [a, { t: 0.6, p: i, look: [t.x, -2.5, t.ladderZ + 0.15], fov: 72 }],
        { ease: "inout" },
      ),
      p(e))
    )
      return;
    (I("p3_ladder_hands", { vol: 0.7 }), C(e, 0.35, () => bt(e)));
    const l = [t.x, 0.62, t.ladderZ + 0.42];
    if (
      (await de(
        o,
        [fe(), { t: 0.8, p: l, look: [t.x, -1.4, t.ladderZ - 0.02], fov: 72 }],
        { ease: "inout" },
      ),
      p(e))
    )
      return;
    I("p3_ladder_step", { vol: 0.8 });
    const h = o.zombies
      .alive()
      .sort(
        (W, V) =>
          Math.hypot(W.pos.x - t.x, W.pos.z - t.z) -
          Math.hypot(V.pos.x - t.x, V.pos.z - t.z),
      )[0];
    h &&
      (h.pos.set(t.x + 0.12, 0, t.z + t.d / 2 + 0.36),
      (h.yaw = Math.PI),
      (h.state = "grab"),
      (h.forceTarget = null),
      h.kit.setState("reach"),
      h.sync(),
      o.zombies.groan(h, 1.4));
    const f = [t.x + 0.1, 1.45, t.z + 1.05];
    if (
      (await de(
        o,
        [fe(), { t: 0.5, p: [t.x, 0.14, t.ladderZ + 0.4], look: f, fov: 76 }],
        { ease: "out" },
      ),
      p(e) ||
        (ze("p3s_shut"),
        q().props?.ladderTop?.to?.(0, 0.3),
        await T(0.3),
        p(e)) ||
        (s?.lid?.to(0, 0.36),
        de(
          o,
          [
            fe(),
            {
              t: 0.34,
              p: [t.x, -0.68, t.ladderZ + 0.42],
              look: [t.x + 0.05, 0.6, t.z + 0.12],
              fov: 76,
            },
          ],
          { ease: "inout" },
        ),
        await T(0.36),
        p(e)))
    )
      return;
    (I("p3_trapdoor_slam", { vol: 1.15, reverb: 0.5 }),
      (c.shake += 0.3),
      o.fx?.dust?.({ x: t.x, y: -0.45, z: t.z }, 0.5, 0.8),
      o.zombies.clear(),
      (r.flags.pound = !1));
    const d = o.audio.loop("p3_hatch_pound", { pos: [t.x, 0.1, t.z], vol: 0 });
    if (
      (d.fadeTo(0.9, 0.3),
      (r.hatchPound = d),
      o.audio.loops.get("amb_house")?.stop?.(1),
      C(e, 1, () => n?.lamp?.set?.(!1)),
      (async () => {
        for (let W = 0; W < 7 && !p(e); W++) {
          if ((await T(0.38 + Math.random() * 0.4), p(e))) return;
          (s?.lid?.set(0.012 + Math.random() * 0.01),
            C(e, 0.07, () => s?.lid?.set(0)),
            W < 4 &&
              o.fx?.dust?.(
                { x: t.x + O(-0.3, 0.3), y: -0.42, z: t.z + O(-0.3, 0.3) },
                0.3,
                0.5,
              ));
        }
      })(),
      await T(0.5),
      p(e))
    )
      return;
    const u = -0.68,
      m = K + 1.62,
      g = o.camera,
      v = 4.4;
    let M = 0,
      P = 0;
    const S = new A(),
      R = new A(),
      x = new A(),
      _ = new A();
    if (
      (await new Promise((W) => {
        o.camCtl = (V) => {
          M += V;
          const J = B(M / v),
            ke =
              J < 0.12
                ? (J / 0.12) ** 2 * 0.06
                : J > 0.88
                  ? 1 - ((1 - J) / 0.12) ** 2 * 0.06
                  : 0.06 + ((J - 0.12) / 0.76) * 0.88,
            $ = Nt(u, m, ke),
            ye = Math.floor((u - $) / 0.3),
            Fe = ((u - $) / 0.3) % 1,
            He = Math.sin(Fe * Math.PI) * 0.035;
          (g.position.set(
            t.x + Math.sin(M * 1.7) * 0.012,
            $ - He,
            t.ladderZ + 0.42,
          ),
            R.set(t.x + 0.05, $ + 1.6, t.z + 0.12),
            x.set(t.x, $ - 3.2, t.ladderZ + 0.95),
            _.set(t.x, $ - 0.35, t.shaft.z1 + 2));
          const go = Ve(B((J - 0.06) / 0.2)),
            ko = Ve(B((J - 0.84) / 0.16));
          (S.copy(R).lerp(x, go).lerp(_, ko),
            g.up.set(0, 1, 0),
            g.lookAt(S),
            ye !== P &&
              ((P = ye),
              I("p3_ladder_step", {
                vol: 0.55,
                rate: O(0.9, 1.1),
                reverb: 0.5,
              }),
              ye % 3 === 0 && I("p3_ladder_hands", { vol: 0.35 })),
            J >= 1 && W());
        };
      }),
      p(e))
    )
      return;
    (d.fadeTo(0.25, 2), N().setLevel?.("ashwood"));
    const F = [t.x, t.shaft.z1 - 0.25];
    (await de(
      o,
      [
        fe(),
        {
          t: 0.7,
          p: [F[0], K + 1.62, F[1]],
          look: [w().pos.x, K + 1.45, w().pos.z + 1.2],
          fov: 72,
        },
      ],
      { ease: "inout" },
    ),
      !p(e) &&
        (it(),
        o.weapons.setVisible(!0),
        w().lowReady(),
        w().lookAt(Se),
        await _t(e, { fromLadder: !0 })));
  }
  async function _t(e, { fromLadder: t = !1 } = {}) {
    r.beat = "ashwood";
    const n = q(),
      s = n.points || {},
      a = s.ashwood || {};
    (N().setLevel?.("ashwood"),
      (o.weapons.on = !0),
      Xe(),
      je(e, () => r.beat === "ashwood"),
      o.audio.loop("p3_metro_amb", { vol: 0 }).fadeTo(0.55, 3),
      o.audio.loops.get("p3_hatch_pound")?.fadeTo?.(0.12, 4),
      o.audio.loops.get("heartbeat_fast")?.stop?.(3),
      k &&
        ft() &&
        ((b.on = !1),
        Je(q().stops?.start?.s ?? 68),
        k.lights?.(1),
        k.doors?.("left", !1, 0)),
      we(!1),
      Te("ashwood", !0),
      n.props?.board?.set?.(`LINE 4      PARKGATE
SERVICE SUSPENDED`),
      n.props?.shutter?.set?.(0.5),
      n.props?.signals?.west?.set?.("red"));
    const i = a.dead?.length
        ? a.dead
        : [
            [1.6, 216.9, 2.6],
            [12.4, 214.4, -0.4],
            [26.8, 216.4, -2.1],
            [38.6, 216.5, -1.6],
            [48.4, 214.1, -2.6],
            [17.6, 226.4, 3],
            [42.2, 226.2, 2.7],
          ],
      l = i.filter((R) => R[1] < oe),
      h = i.filter((R) => R[1] > oe),
      f = l
        .filter((R) => R[0] > -2 && R[0] < 50)
        .filter((R, x, _) => _.length <= 5 || x % 3 !== 2)
        .slice(0, 5),
      d = ["lanky", "gown", "brute", "lanky", Y("soldier", "lanky"), "gown"],
      u = f.map((R, x) => {
        const _ = o.zombies.spawn(d[x % d.length], R[0], R[1], {
          yaw: R[2] ?? 0,
          y: K,
        });
        return ((_.alertT = 0), _);
      });
    (h.slice(0, 2).forEach((R, x) =>
      o.zombies.spawn(d[(x + 3) % d.length], R[0], R[1], {
        yaw: R[2] ?? 0,
        y: K,
      }),
    ),
      Ye(e, () => r.beat === "ashwood"));
    const m = s.passageEnd
      ? [s.passageEnd[0], s.passageEnd[2]]
      : [he.passageDoor[0], he.passageDoor[1] - 0.9];
    if (
      (t && G("p3a_okay", { emote: "scared" }),
      w().lookAt(null),
      t &&
        (async () => (
          await T(0.3),
          await E(() => !w().speaking || p(e), 2.5),
          !p(e) && (await ze("p3s_where", { vol: 0.85 }))
        ))(),
      (async () => (
        await E(() => p(e) || w().distTo(m[0], m[1]) < 2.6, 40),
        !p(e) &&
          (n.props?.staffDoor?.open?.(1, 0.9),
          o.audio.loops.get("p3_hatch_pound")?.stop?.(3),
          await T(0.9),
          !p(e) && (o.nav.rebuild(), (r.flags.onPlatform = !0)))
      ))(),
      await Ie(
        [
          [be.x - 0.18, (be.shaft.z1 + m[1]) / 2],
          [m[0] - 0.12, m[1]],
        ],
        { speed: 2.3, run: e, stopR: 0, waitDist: 5 },
      ),
      p(e) || (await E(() => r.flags.onPlatform || p(e), 3), p(e)))
    )
      return;
    qe(e, () => r.beat === "ashwood" && !r.flags.boarded, {
      walkCone: 0.48,
      walkCd: [0.5, 0.85],
      strafe: 0.55,
    });
    const g = (R) =>
        u
          .filter((x) => !x.dead && !x.alerted)
          .sort((x, _) => Math.abs(x.pos.x - R) - Math.abs(_.pos.x - R)),
      v = (R, x, _ = 0.3) => {
        g(R)
          .slice(0, x)
          .forEach((F, W) => {
            (F.alert(_ + W * 1.2), o.zombies.groan(F, 1.1));
          });
      };
    v(w().pos.x, 2, 0.4);
    const M = s.staffDoor
        ? [s.staffDoor[0], s.staffDoor[2]]
        : [he.passageDoor[0], he.passageDoor[1] + 0.8],
      P = a.board || [20, oe - 2.1],
      S = [
        [M[0] + 0.7, M[1] + 1.1],
        [11.2, 215.3],
        [15.6, 215.9],
        [P[0] - 0.4, P[1] - 0.8],
      ];
    (await Ie(S, {
      speed: 2.5,
      run: e,
      waitDist: 6,
      stopR: 1.5,
      stopMax: 0.9,
      stopCd: 3.5,
      stopExtra: 1,
      onPoint: (R) => {
        (R === 1 && v(w().pos.x + 10, 1, 0.5),
          R === 2 && v(w().pos.x + 20, 2, 0.8));
      },
    }),
      !p(e) && (await co(e)));
  }
  async function co(e) {
    const t = q(),
      n = t.points || {},
      s = n.ashwood || {};
    if (((r.flags.trainComing = !0), await T(0.3), p(e))) return;
    const a = [he.x0 - 6, K + 1, oe];
    (I("p3_train_far", { pos: a, vol: 1, ref: 6, reverb: 0.7 }),
      t.props?.lights?.surge?.(),
      t.props?.board?.set?.(`LINE 4      PARKGATE
TRAIN APPROACHING`),
      t.props?.signals?.west?.set?.("green"));
    const i = ve("ashwood"),
      l = [];
    if (k && b.line && i != null) {
      ((b.s = Math.max(k.length || 54, i - 118)),
        (b.v = 19),
        (b.stopS = i),
        (b.cap = 19),
        (b.accel = 1.25),
        (b.decel = 2.3),
        (b.on = !0),
        k.lights?.(1),
        k.place?.(b.s),
        k.lockCar?.(0, !0),
        k.lockCar?.(2, !0),
        k.flicker?.(2, 0.5, 0.2));
      const x = (_, F = 1) => ut(_) * (re().IW - 0.42) * F;
      (j("gown", 2, -3.8, x(2), "window"),
        j("lanky", 2, 2.2, x(2), "window"),
        j("brute", 2, 5.4, x(2), "window"),
        j("lanky", 0, -2.4, x(0), "window"),
        j(Y("soldier", "lanky"), 0, 3.4, x(0), "window"),
        l.push(
          j("gown", 1, -6, x(1, 1.05), "window"),
          j("lanky", 1, 6, x(1, 1.05), "window"),
        ),
        C(e, 1, () => k.horn?.()),
        C(e, 3, () => k.horn?.()));
    }
    if ((await T(1.6), p(e))) return;
    me("p3a_train", { emote: "scared" }, 4.5, e);
    const h = s.stairs?.length
      ? s.stairs
      : [
          [48, 213.4],
          [47, 212.6],
          [49, 212.6],
        ];
    if (
      ((r.flags.rush = !0),
      (async () => {
        if ((t.props?.shutter?.rattle?.(), await T(0.7), !p(e))) {
          (t.props?.shutter?.to?.(1, 1.2),
            I("p3_zombie_rush", {
              pos: [h[0][0], K + 2, h[0][1]],
              vol: 1.1,
              ref: 5,
              reverb: 0.6,
            }));
          for (let x = 0; x < 6 && !p(e) && !r.flags.boarded; x++) {
            const _ = h[x % h.length];
            if (o.zombies.alive().length < 14) {
              const F = o.zombies.spawn(
                x % 3 === 1
                  ? "gown"
                  : x % 3 === 2
                    ? Y("soldier", "lanky")
                    : "lanky",
                _[0] + O(-0.4, 0.4),
                _[1] + O(-0.4, 0.4),
                { state: "emerge", target: "player", y: K },
              );
              F.calmT = 0.3;
            }
            await T(x < 3 ? 0.6 : 1.4);
          }
        }
      })(),
      C(e, 2.4, () => me("p3a_stairs", { emote: "scream" }, 5, e)),
      await E(() => p(e) || !k || !b.on || b.v < 0.05, 25),
      p(e) ||
        ((b.on = !1),
        k?.doors?.("left", !0),
        (r.flags.doorsOpen = !0),
        await T(0.9),
        p(e)))
    )
      return;
    const f = ae(1),
      d = k?.dims?.CAR || 18;
    let u = he.stopX - 2 * d,
      m = u + d;
    if (f) {
      f.updateMatrixWorld(!0);
      const x = re().END,
        _ = f.localToWorld(Z.set(-x, 0, 0)).x,
        F = f.localToWorld(Z.set(x, 0, 0)).x;
      ((u = Math.min(_, F)), (m = Math.max(_, F)));
    }
    for (const x of q().props?.edges?.ashwood || [])
      x.on = !(x.x1 > u + 0.3 && x.x0 < m - 0.3);
    (we(!0), o.nav.rebuild());
    for (const x of l)
      x &&
        !x.dead &&
        x.carried &&
        (wt(x),
        (x.forceTarget = null),
        (x.calmT = 0),
        (x.rushed = !0),
        o.zombies.groan(x, 1.3));
    if (
      (l.some((x) => x && !x.dead) &&
        (C(e, 0.3, () => {
          U(["p3a_t_inside"], { cool: 60, over: !0, emote: "scream" }) ||
            U(["a3_c_ahead2", "a2_more"], {
              cool: 20,
              over: !0,
              emote: "scream",
            });
        }),
        (c.shake += 0.08)),
      await E(() => p(e) || l.every((x) => !x || x.dead), 6),
      p(e) || (await E(() => !w().speaking || p(e), 2.5), p(e)))
    )
      return;
    G("p3a_getin", { emote: "scream" });
    const g = k?.spots?.akane?.getWorldPosition(new A()),
      v = s.board || [20, oe - 1.9],
      M = g ? [g.x, g.z] : [v[0] + 0.4, oe + 0.9];
    w()
      .walkTo(M[0], M[1], { speed: 3.2, arrive: 0.25 })
      .then(() => {
        (w().faceYaw(Math.PI), w().lookAt(Se));
      });
    const P = () => $e(c.pos.x, c.pos.y + 0.05, c.pos.z)?.i === 1;
    r.boardRec?.remove?.();
    const S = o.time;
    if (
      (await E(
        () =>
          p(e) ||
          (P() && w().distTo(M[0], M[1]) < 1.2) ||
          (P() && o.time - S > 12),
        120,
      ),
      p(e))
    )
      return;
    r.flags.boarded = !0;
    const R = o.zombies
      .alive()
      .filter(
        (x) =>
          !x.carried &&
          Math.abs(x.pos.z - (oe - 1.6)) < 1.6 &&
          x.pos.x > u - 1 &&
          x.pos.x < m + 1 &&
          Math.abs(x.pos.x - c.pos.x) < 4,
      );
    if ((k?.doors?.("left", !1), R.length)) {
      if (
        (await T(1.2),
        p(e) ||
          (k?.bounce?.("left"),
          I("zombie_growl", {
            pos: [R[0].pos.x, K + 1.5, R[0].pos.z],
            vol: 1.1,
          }),
          G("p3a_close", { emote: "scream" }),
          (c.shake += 0.15),
          await T(1.6),
          p(e)))
      )
        return;
      k?.doors?.("left", !1);
    }
    if ((await T(1.4), !p(e))) {
      for (const x of o.zombies.alive()) {
        if (x.carried) continue;
        const _ = $e(x.pos.x, x.pos.y + 0.05, x.pos.z);
        _ && mt(x, _.i, _.x, _.z, "walk");
      }
      (tt(!0),
        we(!1),
        Te("ashwood", !0),
        o.nav.rebuild(),
        t.props?.board?.set?.(`LINE 4      PARKGATE
DEPARTED`),
        t.props?.signals?.west?.set?.("red"),
        await zt(e));
    }
  }
  async function zt(e, { from: t = null } = {}) {
    r.beat = "train";
    const n = ve("ashwood"),
      s = ve("parkgate");
    if (!k || !b.line || n == null || s == null)
      return (
        console.warn("[script3] no train line: straight to Parkgate"),
        ot(e)
      );
    if ((Ee(100), !c.deck)) {
      const l = k.spots?.sara?.getWorldPosition(new A());
      (l && c.place(l.x, l.z, c.yaw, 0, 1.62, l.y - 1.62), tt(!0));
    }
    ((o.camCtl = null),
      (c.frozen = !1),
      (k.onboard = !0),
      w().ride && k.rider && w().ride(k),
      C(e, 1.2, () => {
        o.weapons.on &&
          ((o.weapons.on = !1), I("flashlight_click", { vol: 0.45 }));
      }),
      D.some((l) => !l.dead) ||
        (k.lockCar?.(0, !0),
        k.lockCar?.(2, !0),
        j("gown", 2, -3.8, 0.3),
        j("lanky", 2, 2.2, -0.3),
        j("brute", 2, 5.4, 0.2),
        j("lanky", 0, -2.4, 0.1),
        j(Y("soldier", "lanky"), 0, 3.4, -0.2)));
    for (const l of D)
      l.carried?.mode === "window" &&
        ((l.carried.mode = "walk"), l.kit.setState("shamble", { speed: 0.9 }));
    ((w().strafe = 0),
      (b.s = t ?? n),
      (b.v = 0),
      (b.stopS = s),
      (b.cap = 24),
      (b.accel = 2.2),
      (b.decel = 1.9),
      (b.on = !0),
      k.setStation?.("ASHWOOD", "PARKGATE"),
      o.audio.loops.get("p3_metro_amb")?.stop?.(4),
      k.flicker?.(1, 0),
      k.flicker?.(2, 0.6, 0.22),
      (o.fx.flashK = 0.3),
      so(e, () => r.beat === "train"),
      (async () => (
        await E(() => p(e) || b.s > n + 75, 30),
        p(e) || o.zombies.clear((l) => !l.carried)
      ))(),
      (async () => (
        await T(1.4),
        !p(e) &&
          (D.some((l) => !l.dead && l.carried?.car === 1) ||
            me("p3a_made", { emote: "relieved" }, 2, e),
          await E(
            () =>
              p(e) ||
              D.some((l) => l.carried?.door && l.carried.mode === "attack"),
            20,
          ),
          !p(e) && me("p3a_t_cars", { emote: "scream" }, 3, e))
      ))());
    let a = 0;
    const i = async (l, h, f) => {
      const d = o.time;
      if (
        (await E(
          () =>
            p(e) ||
            (o.time - d > f &&
              D.some(
                (g) => !g.dead && g.carried?.car === h && g.carried.door === l,
              )),
          40,
        ),
        p(e) ||
          !D.some((g) => !g.dead && g.carried?.car === h) ||
          (await T(1.8), p(e)))
      )
        return;
      (k.gangway?.(l, !0, 0.22),
        (c.shake += 0.25),
        k.flicker?.(1, 0.4, 0.6),
        C(e, 0.9, () => k.flicker?.(1, 0)));
      const u = D.find((g) => !g.dead && g.carried?.car === h);
      u &&
        I("zombie_growl", { pos: [u.pos.x, u.pos.y + 1.5, u.pos.z], vol: 1.1 });
      const m = a++ === 0 ? "p3a_t_door" : "p3a_t_back";
      (await E(() => (!w().speaking && !r.pa) || p(e), 1.5),
        p(e) || U([m], { cool: 99, over: !0 }));
    };
    (i("rear", 2, 3.5),
      i("front", 0, 7),
      (async () => {
        const l = [
          "lanky",
          "gown",
          Y("soldier", "lanky"),
          "lanky",
          "gown",
          "brute",
          "lanky",
          Y("soldier", "lanky"),
          "gown",
          "lanky",
        ];
        let h = 0;
        if ((await T(4.5), !p(e)))
          for (; !p(e) && r.beat === "train" && b.on && b.s < s - 85;) {
            if (D.filter((f) => !f.dead).length < 5)
              for (const f of h % 2 === 0 ? [2, 0] : [0, 2]) {
                const d = ae(f);
                if (!d) continue;
                const u = f === 0 ? "front" : "rear",
                  m = O(1, 4.6),
                  g = O(-0.3, 0.3);
                if (
                  (d.updateMatrixWorld(!0),
                  d.localToWorld(Z.set(m, re().FL, g)),
                  (k.gangwayK?.(u) ?? 0) > 0.2 && Me(Z.x, Z.z, Z.y))
                )
                  continue;
                const v = j(l[h % l.length], f, m, g, "walk");
                (v &&
                  ((v.carried.t = 0.4),
                  Math.random() < 0.6 && o.zombies.groan(v, 1.2)),
                  h++);
                break;
              }
            await T(O(2.1, 3));
          }
      })(),
      (async () => {
        const l = new Set();
        let h = 0;
        for (; !p(e) && r.beat === "train";) {
          await T(0.25);
          for (const f of D)
            f.dead ||
              f.carried?.car !== 1 ||
              !f.carried.entered ||
              l.has(f) ||
              (l.add(f),
              l.size > 2 &&
                o.time - (r.lastMore ?? -99) > 7 &&
                (U(["p3a_t_keep"], { cool: 18 }) ||
                  U(h++ % 2 ? _e.more : _e.behind, { cool: 9 })) &&
                (r.lastMore = o.time));
        }
      })(),
      (async () => (
        await E(() => p(e) || (b.s >= s - 85 && !D.some((l) => !l.dead)), 90),
        !(p(e) || r.beat !== "train" || !b.on) &&
          (await T(0.9),
          !p(e) &&
            (me("p3a_t_clear", { emote: "scared" }, 2, e), k.flicker?.(1, 0)))
      ))(),
      await E(() => p(e) || b.s > n + 140, 60),
      !p(e) &&
        (Ht("p3n_next", { patience: 12, run: e }),
        await E(() => p(e) || b.s > s - 70, 60),
        !p(e) &&
          (await E(() => p(e) || b.v < 0.05, 40),
          !p(e) &&
            ((b.on = !1), (o.fx.flashK = 1), await ot(e, { fromTrain: !0 })))));
  }
  async function ot(e, { fromTrain: t = !1 } = {}) {
    r.beat = "parkgate";
    const n = q(),
      s = n.points || {},
      a = s.parkgate || {},
      i = n.stops?.parkgate?.side || "left";
    if (
      (N().setLevel?.("parkgate"),
      (o.weapons.on = !0),
      Ee(110),
      Xe(),
      je(e, () => r.beat === "parkgate"),
      o.audio.loop("p3_metro_amb", { vol: 0 }).fadeTo(0.5, 2),
      t)
    ) {
      if (
        (k?.doors?.(i, !0),
        (c.mount = null),
        (b.mount = null),
        k && (k.onboard = !1),
        k?.spots?.akane && (k.spots.akane.rotation.y = Math.PI),
        w().ride?.(null),
        C(e, 0.4, () => {
          o.weapons.on ||
            ((o.weapons.on = !0), I("flashlight_click", { vol: 0.45 }));
        }),
        await T(0.9),
        p(e))
      )
        return;
      if (
        (Te("parkgate", !1),
        we(!0),
        o.nav.rebuild(),
        tt(!1),
        !c.deck && k && !$e(c.pos.x, c.pos.y + 0.05, c.pos.z))
      ) {
        const u = k.spots?.sara?.getWorldPosition(new A());
        u && c.place(u.x, u.z, c.yaw, c.pitch, 1.62, u.y - 1.62);
      }
      for (const u of D.slice())
        u.dead ? ((u.carried = null), D.splice(D.indexOf(u), 1)) : wt(u);
    }
    const l = a.dead?.length ? a.dead : [],
      h = ["lanky", "gown", "brute", Y("soldier", "lanky"), "lanky", "gown"];
    if (
      (l.forEach((u, m) => {
        const g = o.zombies.spawn(h[m % h.length], u[0], u[1], {
          yaw: u[2] ?? 0,
          y: K,
        });
        ((g.alertT = O(0.3, 1.2)), (g.alerted = m % 2 === 0));
      }),
      (a.stairsDead || []).forEach((u, m) =>
        o.zombies.spawn(h[(m + 2) % h.length], u[0], u[1], {
          yaw: u[2] ?? 0,
          y: u[3] ?? K + 4.5,
        }),
      ),
      qe(e, () => r.beat === "parkgate", {
        walkCone: 0.48,
        walkCd: [0.5, 0.85],
        strafe: 0.55,
      }),
      Ye(e, () => r.beat === "parkgate"),
      await E(() => !w().speaking || p(e), 3),
      p(e))
    )
      return;
    G("p3a_stairs2", { emote: "scream" });
    const f = a.route?.length
      ? a.route
      : [
          [ee[0], ee[2] + 18],
          [ee[0], ee[2] + 6],
          [ee[0], ee[2] - 1],
        ];
    let d = !1;
    (await Ie(f, {
      speed: 2.9,
      run: e,
      waitDist: 7.5,
      stopR: 1.5,
      stopMax: 0.8,
      stopCd: 4,
      stopExtra: 0.8,
      onPoint: (u) => {
        u === 1 && C(e, 0.4, () => U(["p3a_keepup"], { cool: 30 }));
        const m = f[u],
          g = Be(m[0], m[1], w().pos.y);
        !d &&
          g > K + 3.5 &&
          ((d = !0), C(e, 0.3, () => U(["p3a_gates"], { cool: 60 })));
      },
    }),
      !p(e) && (we(!1), await Mt(e)));
  }
  async function Mt(e, { fromExit: t = !0 } = {}) {
    r.beat = "park";
    const n = ue(),
      s = n.points || {};
    (N().setLevel?.("parkgate"),
      Ee(130),
      Xe(),
      je(e, () => r.beat === "park"),
      o.audio.loops.get("p3_metro_amb")?.stop?.(3),
      o.audio.loop("p3_park_amb", { vol: 0 }).fadeTo(0.6, 3),
      k && (k.engineVol = 0),
      Ae(!0));
    const a = s.exitOut || [ee[0], ee[2] - 4],
      i = s.dead?.length ? s.dead : [],
      l = [
        "lanky",
        "gown",
        "brute",
        "lanky",
        Y("soldier", "lanky"),
        "lanky",
        "gown",
      ];
    if (
      (i.forEach((m, g) => {
        o.zombies.spawn(l[g % l.length], m[0], m[1], {
          yaw: m[2] ?? 0,
          y: 0,
        })._src = "park";
      }),
      t && w().walkTo(a[0] + 0.5, a[1] - 8, { speed: 1.6, arrive: 0.5 }),
      w().lookAt(new A(L.pos[0], 2, L.pos[2])),
      await E(() => !w().speaking || p(e), 3),
      p(e) ||
        (w().gesturePoint(1.6), await G("p3a_heli", { emote: "scared" }), p(e)))
    )
      return;
    w().lookAt(null);
    const h = (m, g) => Math.hypot(m - L.pos[0], g - L.pos[2]);
    for (const m of o.zombies.alive())
      Math.hypot(m.pos.x - c.pos.x, m.pos.z - c.pos.z) < 32 &&
        h(m.pos.x, m.pos.z) < h(c.pos.x, c.pos.z) - 3 &&
        m.alert(O(0.3, 1.4));
    (I("zombie_scream", {
      pos: [ee[0] - 18, 1.5, ee[2] - 20],
      vol: 1,
      reverb: 0.5,
    }),
      G("p3a_chopper", { emote: "scream" }),
      (c.shake += 0.05),
      o.audio.loop("p3_action", { vol: 0, bus: "music" })?.fadeTo?.(0.32, 4),
      (r.flags.run = !0),
      qe(e, () => r.beat === "park", {
        range: 18,
        walkCone: 0.48,
        walkCd: [0.45, 0.8],
        strafe: 0.6,
      }),
      Ye(e, () => r.beat === "park"),
      po(e),
      fo(e));
    const f = s.route?.length
        ? s.route
        : [
            [ee[0], ee[2] - 20],
            [L.pos[0] - 6, L.pos[2] + 14],
          ],
      d = f
        .slice(1, Math.max(2, f.length - 2))
        .filter((m, g, v) => g % 3 === 2 || g === v.length - 1);
    let u = o.time + 5;
    (await Ie(d, {
      speed: 3.1,
      run: e,
      waitDist: 11,
      stopR: 1.4,
      stopMax: 0.8,
      stopCd: 4,
      stopExtra: 0.8,
      onPoint: (m) => {
        (o.time > u &&
          m < d.length - 2 &&
          ((u = o.time + 9),
          U([..._e.run, "p3a_p_this"], {
            cool: 16,
            emote: "scream",
            over: !0,
          })),
          m === d.length - 3 &&
            C(e, 0.2, () => U(["p3a_almost"], { cool: 99, over: !0 })));
        for (const g of o.zombies.alive())
          !g.alerted &&
            Math.hypot(g.pos.x - c.pos.x, g.pos.z - c.pos.z) < 32 &&
            h(g.pos.x, g.pos.z) < h(c.pos.x, c.pos.z) - 3 &&
            g.alert(O(0.3, 1));
      },
    }),
      !p(e) && (vt(e), await At(e)));
  }
  function vt(e) {
    r.flags.akaneBoarding ||
      ((r.flags.akaneBoarding = !0),
      (w().strafe = 0),
      w().lowReady(),
      (async () => {
        const t = [L.pos[0] + 0.7, L.pos[2] - 2.2];
        (G("p3a_in", { emote: "scream" }),
          await w().walkTo(L.pos[0] - 6.6, L.pos[2] + 0.6, {
            speed: 3.4,
            arrive: 0.8,
          }),
          !p(e) &&
            (await w().walkTo(t[0], t[1], { speed: 3.4, arrive: 0.5 }),
            !p(e) &&
              (y?.doors?.right?.open?.(1, 0.4),
              await T(0.3),
              !p(e) &&
                (w().ride && y?.rider && w().ride(y),
                C(e, 0.9, () => y?.doors?.right?.open?.(0, 0.5)),
                (r.flags.akaneIn = !0),
                C(e, 0.2, () => Tt())))));
      })());
  }
  const Tt = () => {
    !y ||
      r.flags.started ||
      (y.power?.(!0),
      y.start?.(1),
      y.throttle?.(1),
      (r.flags.started = !0),
      (r.spool = 0),
      C(r.run, 0.6, () => y.start?.(2)));
  };
  function po(e) {
    const t = (ue().points?.ambush || []).map((i) => ({ ...i, done: !1 })),
      n = [
        "gown",
        "lanky",
        Y("soldier", "lanky"),
        "gown",
        "brute",
        Y("soldier", "lanky"),
        "gown",
        "lanky",
        "gown",
        Y("soldier", "lanky"),
        "lanky",
        "gown",
        "gown",
        "lanky",
        Y("soldier", "lanky"),
        "gown",
        "lanky",
        "brute",
        "gown",
        "lanky",
      ];
    let s = 0;
    const a = (i) => {
      if (i.leap) {
        const l = i.leap,
          h = o.zombies.climbIn(
            "gown",
            { sill: l.sill, land: l.land, out: l.out, face: l.face, state: 1 },
            { perch0: !0, perch: 0.5, vy: 1.3, target: "player" },
          );
        ((h.calmT = 0), (h._src = "leap"));
      }
      for (let l = 0; l < (i.n ?? 2); l++)
        C(e, 0.12 + l * 0.5, () => {
          i.spots.length &&
            pt(
              n[s++ % n.length],
              i.spots,
              { state: "emerge", minD: 3.8, y: 0 },
              e,
              1,
            ).then((h) => {
              if (!h) return;
              ((h.calmT = 0),
                (h.rushed = !0),
                (h.alertT = 0),
                (h.forceTarget = "player"),
                (h._src = i.id));
              const f = i.spots.findIndex(
                (d) => Math.hypot(d[0] - h.pos.x, d[1] - h.pos.z) < 0.3,
              );
              f >= 0 && i.spots.length > 1 && i.spots.splice(f, 1);
            });
        });
      i.call &&
        (async () => (
          await T(i.leap ? 0.3 : 0.55),
          await E(() => (!w().speaking && !r.pa) || p(e), 1.6),
          !p(e) &&
            (U([i.call], { cool: 30, gap: 0.8, emote: "scream", over: !0 }) ||
              U(_e.more, { cool: 5, gap: 1, emote: "scream", over: !0 }))
        ))();
    };
    (async () => {
      for (
        ;
        !p(e) &&
        (r.beat === "park" || r.beat === "chopper") &&
        t.some((i) => !i.done);
      ) {
        await T(0.1);
        for (const i of t)
          !i.done &&
            c.pos.z < i.at + 6 &&
            ((i.done = !0), (i.spots = i.spots.slice()), a(i));
      }
    })();
  }
  function fo(e) {
    const t = ue().points || {},
      n = t.sides?.length ? t.sides : [],
      s = t.camp?.length ? t.camp : [],
      a = t.route?.length > 3 ? t.route : null,
      i = (f, d) => Math.hypot(f - L.pos[0], d - L.pos[2]),
      l = (f, d) => {
        let u = 0,
          m = 1 / 0;
        for (let g = 0; g < a.length; g++) {
          const v = (a[g][0] - f) ** 2 + (a[g][1] - d) ** 2;
          v < m && ((m = v), (u = g));
        }
        return u;
      },
      h = new Set();
    ((async () => {
      for (
        ;
        !p(e) &&
        (r.beat === "park" || r.beat === "chopper") &&
        !r.flags.liftoff;
      ) {
        await T(0.2);
        const f = i(c.pos.x, c.pos.z);
        if (r.beat === "park")
          for (const d of o.zombies.alive())
            !d.air &&
              !d.carried &&
              d.alerted &&
              i(d.pos.x, d.pos.z) > f + 2 &&
              d.pos.distanceTo(c.pos) > 3.5 &&
              (d.calmT = Math.max(d.calmT || 0, 0.5));
        if (!(!a || !h.size))
          for (const d of h) {
            if (
              d.dead ||
              r.beat !== "park" ||
              d.pos.distanceTo(c.pos) < 6 ||
              i(d.pos.x, d.pos.z) > f + 1 ||
              o.time - d._block > 12
            ) {
              ((d.goal = null), h.delete(d));
              continue;
            }
            d.goal &&
              Math.hypot(d.goal.x - d.pos.x, d.goal.z - d.pos.z) < 0.6 &&
              ((d.yaw += B(
                xe(d.yaw, Math.atan2(c.pos.x - d.pos.x, c.pos.z - d.pos.z)),
                -0.7,
                0.7,
              )),
              d.sync());
          }
      }
    })(),
      (async () => {
        let f = 0;
        for (
          ;
          !p(e) &&
          (r.beat === "park" || r.beat === "chopper") &&
          !r.flags.liftoff;
        ) {
          await T(0.9 + Math.random() * 0.5);
          const d = i(c.pos.x, c.pos.z) < 40;
          if (p(e) || r.flags.liftoff) break;
          const u = i(c.pos.x, c.pos.z);
          r.beat === "park" &&
            o.zombies.clear(
              (_) =>
                !_.carried &&
                !_.air &&
                i(_.pos.x, _.pos.z) > u + 5 &&
                _.pos.distanceTo(c.pos) > 8 &&
                !Me(_.pos.x, _.pos.z, _.pos.y),
            );
          const m = r.beat === "chopper" ? (r.flags.inHeli ? 10 : 6) : 7;
          if (
            o.zombies
              .alive()
              .filter(
                (_) =>
                  _.alerted &&
                  i(_.pos.x, _.pos.z) < (r.beat === "park" ? u - 2 : u + 3) &&
                  _.pos.distanceTo(c.pos) < 30,
              ).length >= m ||
            o.zombies.alive().length >= 30
          )
            continue;
          const v = (_) => Math.hypot(_[0] - c.pos.x, _[1] - c.pos.z),
            M = (_) => Math.hypot(_[0] - w().pos.x, _[1] - w().pos.z) > 7,
            P = d && s.length ? [...s, ...n] : n;
          let S = P.filter(
            (_) => i(_[0], _[1]) < u - 4 && v(_) > 13 && v(_) < 34 && M(_),
          );
          if (
            (S.length ||
              (S = P.filter(
                (_) => Math.abs(i(_[0], _[1]) - u) < 12 && v(_) > 13 && M(_),
              )),
            !S.length)
          )
            continue;
          S.sort((_, F) => Math.abs(v(_) - 18) - Math.abs(v(F) - 18));
          const R =
              f % 5 === 4
                ? Y("soldier", "lanky")
                : f % 3 === 1
                  ? "gown"
                  : "lanky",
            x = a && r.beat === "park" && u > 24 && f % 3 !== 2;
          (f++,
            pt(
              R,
              S,
              { state: "emerge", minD: 12, y: 0 },
              e,
              1.5,
              () => !r.flags.liftoff,
            ).then((_) => {
              if (
                _ &&
                ((_.calmT = 0.6),
                (_.alerted = !0),
                (_.forceTarget = "player"),
                (_._src = x ? "block" : "rush"),
                x)
              ) {
                const F = l(c.pos.x, c.pos.z),
                  W = a[Math.min(a.length - 1, F + 5)],
                  V = a[Math.min(a.length - 1, F + 6)],
                  J = V[0] - W[0],
                  ke = V[1] - W[1],
                  $ = Math.hypot(J, ke) || 1,
                  ye = (Math.random() < 0.5 ? -1 : 1) * O(0.4, 1.6),
                  Fe = W[0] + (ke / $) * ye,
                  He = W[1] - (J / $) * ye;
                o.nav.walkable(Fe, He) &&
                  ((_.goal = new A(Fe, 0, He)), (_._block = o.time), h.add(_));
              }
            }));
        }
      })());
  }
  async function At(e, { direct: t = !1 } = {}) {
    ((r.beat = "chopper"), Ee(100));
    const n = ue().points || {};
    Ae(!0);
    const s = n.chopperDoor || [L.pos[0] + 0.6, L.pos[2] + 2.2];
    if (
      (vt(e),
      y?.doors?.left?.open?.(1, 0.6),
      r.heliRec?.remove?.(),
      (r.heliRec = o.interact.add({
        id: "chopper",
        pos: [s[0], 1.3, s[1]],
        radius: 2.9,
        cone: 0.75,
        prompt: "use",
        bot: !0,
        enabled: () => !r.flags.inHeli,
        onUse: () => {
          r.flags.inHeli = !0;
        },
      })),
      o.hud.hint("E: get in", 4),
      await E(() => p(e) || r.flags.inHeli, 300),
      p(e))
    )
      return;
    if ((r.heliRec?.remove?.(), (r.heliRec = null), !y)) {
      console.warn("[script3] no helicopter");
      return;
    }
    r.flags.heliPound = !0;
    const a = (d) => ({
        pos: new A(L.pos[0] + 1.4, 0, L.pos[2] + (d === "L" ? 1.5 : -1.5)),
        reach: 1,
        hurt: (u) => {
          if (!r.flags.heliPound) return;
          const m = new A(
            u.pos.x + (L.pos[0] + 1.4 - u.pos.x) * 0.5,
            1.45,
            u.pos.z + (L.pos[2] - u.pos.z) * 0.35,
          );
          (y.bang?.(m),
            y.shake?.(0.35, 0.4),
            (c.shake += 0.06),
            d === "L" &&
              Math.hypot(u.pos.x - c.pos.x, u.pos.z - c.pos.z) < 1.8 &&
              o.time - (r.doorHurtT ?? -9) > 1.5 &&
              ((r.doorHurtT = o.time), o.combat.hurt(8, u.pos)));
        },
      }),
      i = [a("L"), a("R"), a("L")];
    ((async () => {
      let d = 0;
      for (; !p(e) && r.flags.heliPound;) {
        for (const u of o.zombies.alive())
          u._heli ||
            ((u._heli = !0),
            (u.forceTarget = i[d++ % i.length]),
            (u.path = null),
            (u.repath = 0));
        await T(0.3);
      }
    })(),
      y.colliders?.(!1),
      o.nav.rebuild(),
      (X.mount = ht()));
    const l = fe();
    c.frozen = !0;
    const h = X.mount.eye(new A());
    if (
      (I("heli_door_latch", { vol: 0.25 }),
      await de(
        o,
        [
          l,
          {
            t: 0.7,
            p: h.toArray(),
            look: [h.x - 2, h.y - 0.3, h.z + 6],
            fov: 74,
          },
        ],
        { ease: "inout" },
      ),
      p(e))
    )
      return;
    ((o.camCtl = null),
      (c.frozen = !1),
      (c.mount = X.mount),
      (c._mountQ = null),
      (c.yaw = Math.PI / 2 - 0.45),
      (c.pitch = -0.08),
      c._ride(0),
      (y.onboard = !0),
      o.weapons.setVisible(!0),
      C(e, 0.5, () => {
        o.weapons.on &&
          ((o.weapons.on = !1), I("flashlight_click", { vol: 0.4 }));
      }));
    const f = ze("p3s_fly");
    (await E(() => p(e) || r.flags.akaneIn, 2),
      !p(e) &&
        (!r.flags.akaneIn &&
          w().ride &&
          y.rider &&
          (w().ride(y, { now: !0 }), (r.flags.akaneIn = !0)),
        Tt(),
        await f,
        !p(e) &&
          (G("p3a_findout", { emote: "scream" }),
          await T(0.7),
          !p(e) && (await It(e)))));
  }
  const z = {
    t: 0,
    on: !1,
    spin: 0,
    spinV: 0,
    spinA: 0,
    shake: 0,
    rpm: void 0,
    fl: null,
    end: 0,
    speed: 0,
  };
  r._FL = z;
  const ho = new A(),
    uo = new A(),
    Le = new Re(),
    We = new Re(),
    Rt = new Ke(0, 0, 0, "YXZ"),
    St = new Lt(),
    Pt = new A(),
    at = new A(),
    st = new A(),
    mo = new A(0, 1, 0),
    Oe = [0, 0, 0],
    Ne = [0, 0, 0];
  o.updaters.unshift((e) => {
    if (!z.on || !y || !z.fl) return;
    const t = z.fl;
    ((z.t = Math.min(z.end, z.t + e)),
      z.rpm != null && z.rpm < 1 && (z.rpm = Math.min(1, z.rpm + e * 0.45)));
    const n = t.points(z.t),
      s = t.attitude(z.t);
    ((z.spinV +=
      ((z.spin ? 7 : 0) - z.spinV) * Math.min(1, e * (z.spin ? 0.75 : 3))),
      (z.spinA += z.spinV * e),
      Pt.fromArray(n.l),
      at.fromArray(n.u),
      st.fromArray(n.f),
      St.makeBasis(Pt, at, st),
      Le.setFromRotationMatrix(St),
      z.spinA && (We.setFromAxisAngle(mo, z.spinA), Le.multiply(We)),
      (z.shake = Math.max(0, z.shake - e * 0.8)));
    const a =
        0.004 +
        z.shake * 0.03 +
        (z.spin ? 0.035 : 0) +
        (r.flags.damage || 0) * 0.004,
      i = Math.sin(z.t * 37) * Math.sin(z.t * 13.3),
      l = Math.sin(z.t * 41 + 1) * Math.sin(z.t * 9.1);
    (Rt.set(l * a * 0.6, i * a * 0.3, i * a * 0.8, "YXZ"),
      We.setFromEuler(Rt),
      Le.multiply(We),
      y.root.position
        .set(n.p[0], n.p[1], n.p[2])
        .addScaledVector(at, -(t.FRAME?.skidDown ?? 0.65))
        .add(ho.set(i * a, l * a * 0.6, l * a)),
      y.root.quaternion.copy(Le),
      t.at(Math.max(0, z.t - 0.05), Oe),
      t.at(z.t + 0.05, Ne));
    const h = (Ne[0] - Oe[0]) * 10,
      f = (Ne[1] - Oe[1]) * 10,
      d = (Ne[2] - Oe[2]) * 10;
    ((z.speed = Math.hypot(h, d)),
      y.update?.(e, {
        rpm: z.rpm,
        collective: B(0.55 + f * 0.03),
        cyclic: [B(s.bank * 1.3, -1, 1), B(-s.pitch * 1.6, -1, 1)],
        pedal: B(z.spinV * 0.15, -1, 1),
        speed: z.speed,
        damage: r.flags.damage || 0,
      }),
      t.drive?.(z.t),
      y.aim &&
        z.t > 1.5 &&
        !z.spin &&
        y.aim(uo.set(n.p[0] + h * 1.6, n.p[1] - 9, n.p[2] + d * 1.6)),
      (o.fovKick =
        (o.fovKick || 0) +
        (8 * B((z.speed - 12) / 25) - (o.fovKick || 0)) * Math.min(1, e * 2)),
      X.mount && c.mount === X.mount && c._ride(0));
  });
  const se = (e) => {
      ((z.shake = Math.max(z.shake, e)),
        (c.shake += e * 0.2),
        y?.shake?.(e, 0.6));
    },
    ge = (e) => {
      o.audio.manifest?.[e] &&
        (Ge.set(e, o.time), (r.lastBark = o.time), G(e, { emote: "scream" }));
    },
    wo = [
      [3, () => I("p3_whoosh_3", { vol: 0.7 })],
      [9.9, () => se(0.25)],
      [
        15,
        () =>
          U(["p3a_f_down"], { cool: 99, gap: 0.5, emote: "scream", over: !0 }),
      ],
      [
        17.3,
        () => {
          (se(0.85), I("p3_whoosh_3", { vol: 1 }));
        },
      ],
      [
        21,
        () =>
          U(["p3a_f_comeon"], {
            cool: 99,
            gap: 0.5,
            emote: "scream",
            over: !0,
          }),
      ],
      [
        22.6,
        () => {
          (y?.crack?.(Math.max(0.08, (r.cracks = (r.cracks || 0) + 0.08))),
            se(0.4));
        },
      ],
      [
        24.2,
        () => {
          o.playerSpeaking || ze("p3s_close");
        },
      ],
      [
        24.9,
        () => {
          (se(0.75), I("p3_whoosh_2", { vol: 1 }));
        },
      ],
      [
        29.8,
        () => {
          (U(["p3a_f_blind"], {
            cool: 99,
            gap: 0.5,
            emote: "scream",
            over: !0,
          }),
            y?.warn?.(["MASTER CAUTION"]),
            o.audio.muffle?.(0.3, 0.3, 1.2),
            se(0.5));
        },
      ],
      [
        31.4,
        () => {
          (ge("p3a_f_pullup"),
            se(0.9),
            y?.warn?.(["MASTER CAUTION", "LOW ROTOR RPM"]),
            (r.flags.damage = Math.max(r.flags.damage || 0, 0.2)));
        },
      ],
      [36.8, () => y?.warn?.(["MASTER CAUTION"])],
      [
        39,
        () =>
          U(["p3a_f_hold"], { cool: 99, gap: 0.5, emote: "scream", over: !0 }),
      ],
      [46.2, () => ge("p3a_f_watch")],
      [
        47.9,
        () => {
          (se(0.7), I("p3_whoosh_1", { vol: 1 }));
        },
      ],
      [48.6, () => ge("p3a_f_other")],
      [
        50.4,
        () => {
          (se(1), (c.shake += 0.4));
        },
      ],
      [
        52,
        () => U(["p3a_f_hold"], { cool: 0, gap: 0, emote: "scream", over: !0 }),
      ],
      [52.6, () => se(0.6)],
      [58.1, () => ge("p3a_f_bridge")],
      [59.1, () => se(0.6)],
      [62.8, () => G("p3a_f_laugh", { emote: "relieved" })],
      [67.3, () => ge("p3a_f_comeon")],
      [
        67.9,
        () => {
          (se(0.8),
            y?.sparks?.(y.root.localToWorld(new A(0, 0.05, 0.5)), 50),
            y?.warn?.(["MASTER CAUTION", "ENG 1 FIRE"]),
            y?.smoke?.(0.5),
            (r.flags.damage = Math.max(r.flags.damage || 0, 0.5)));
        },
      ],
    ];
  async function It(e, { from: t = 0 } = {}) {
    r.beat = "flight";
    const n = rt(),
      s = n.flight;
    if (!s?.line?.length || !y)
      return (console.warn("[script3] no flight line"), Et(e, null));
    ((z.fl = s), (z.end = s.duration ?? s.line[s.line.length - 1][3]));
    const a = s.crash?.clipT ?? z.end - 4.3;
    ((r.flags.heliPound = !1), (r.flags.liftoff = !0));
    for (const i of o.zombies.alive()) ((i.forceTarget = null), (i._heli = !1));
    (c.mount ||
      ((X.mount = ht()),
      (c.mount = X.mount),
      (c._mountQ = null),
      (c.yaw = 0),
      (c.pitch = -0.1),
      (y.onboard = !0)),
      w().ride && y.rider && !w().riding && w().ride(y, { now: !0 }),
      (X.rpm = 1),
      (X.on = !0),
      r.flags.started
        ? (z.rpm = r.spool ?? void 0)
        : (y.power?.(!0, { instant: !0 }),
          y.start?.(1),
          y.start?.(2),
          (z.rpm = 1)),
      (y.searchK = 1),
      (y.landingK = 1),
      (o.beamLight = y.searchlight),
      (o.beamFogK = 0.012),
      n.props?.searchlight?.(y.searchlight),
      C(e, 7, () => {
        y.landingK = 0;
      }),
      (z.t = t),
      (z.spin = 0),
      (z.spinV = 0),
      (z.spinA = 0),
      (z.shake = 0),
      (z.on = !0),
      s.drive?.(t, { sound: !1 }),
      o.audio.loops.get("p3_park_amb")?.fadeTo?.(0.2, 4),
      o.audio.loop("p3_action", { vol: 0, bus: "music" })?.fadeTo?.(0.36, 3),
      o.weapons.setVisible(!1),
      (o.weapons.on = !1),
      t < 1 && me("p3a_up", { emote: "scream" }, 3, e),
      C(e, 1.2, () => {
        y.doors?.left?.open?.(0, 0.6);
      }),
      C(e, 3, () => o.zombies.clear()));
    for (const [i, l] of wo)
      i < t ||
        (async () => {
          if ((await E(() => p(e) || z.t >= i, 400), !p(e)))
            try {
              l();
            } catch (h) {
              console.warn("[script3] flight beat", i, h);
            }
        })();
    if (Q) {
      const i = [0, 0, 0],
        l = [0, 0, 0],
        h = new Ke(0, 0, 0, "YXZ"),
        f = s.heli2?.[0]?.[3] ?? 46,
        d = s.heli2?.[s.heli2.length - 1]?.[3] ?? 50.3,
        u = () => {
          if (p(e) || !z.on) return;
          const m = z.t;
          if (m < f - 0.5 || m > d) {
            if (
              (Q.root.position.y > -100 && Q.root.position.set(0, -200, 0),
              m > d)
            ) {
              const g = o.updaters.indexOf(u);
              g >= 0 && o.updaters.splice(g, 1);
            }
            return;
          }
          (s.heli2At(m, i),
            s.heli2At(m + 0.1, l),
            Q.root.position.set(i[0], i[1] - 1.6, i[2]),
            Q.root.quaternion.setFromEuler(
              h.set(
                0.3 + Math.sin(m * 3.1) * 0.15,
                Math.atan2(l[0] - i[0], l[2] - i[2]) + (m - f) * 5.2,
                0.35 * Math.sin(m * 2.3),
                "YXZ",
              ),
            ));
        };
      o.updaters.push(u);
    }
    (await E(() => p(e) || z.t >= a, 400), !p(e) && (await Et(e, s)));
  }
  async function Et(e, t) {
    if (((r.beat = "crash"), t)) {
      ((z.shake = 2), (c.shake += 0.6), (r.flags.damage = 1));
      const n = y?.breakTail?.();
      if (n) {
        const s = new A(O(-3, 3), 2.5, O(-3, 3)).addScaledVector(st, -4),
          a = new A(O(-6, 6), O(-9, 9), O(-6, 6)),
          i = (l) => {
            if (
              ((s.y -= 9.81 * l),
              n.position.addScaledVector(s, l),
              (n.rotation.x += a.x * l),
              (n.rotation.y += a.y * l),
              (n.rotation.z += a.z * l),
              n.position.y < -60)
            ) {
              const h = o.updaters.indexOf(i);
              h >= 0 && o.updaters.splice(h, 1);
            }
          };
        o.updaters.push(i);
      }
      if (
        (y?.warn?.([
          "MASTER CAUTION",
          "TAIL ROTOR",
          "LOW ROTOR RPM",
          "ENG 1 FIRE",
          "HYD 1",
        ]),
        y?.smoke?.(1),
        y?.fire?.(0.7),
        y?.crack?.(0.75),
        C(e, 2, () => y?.crack?.(1)),
        (z.spin = 1),
        C(e, 0.25, () => ge("p3a_f_hit")),
        C(e, 1.7, () => G("p3a_f_brace", { emote: "scream" })),
        C(e, 3, () => ze("p3s_akane")),
        o.audio.muffle?.(0.12, 1),
        await E(() => p(e) || z.t >= z.end - 0.03, 20),
        p(e))
      )
        return;
    }
    if (
      (I("p3_heli_crash", { vol: 1.4 }),
      I("p3s_scream", { vol: 0.4 }),
      (c.shake += 1.5),
      (z.shake = 3),
      o.post.fadeColor.setRGB(1, 0.92, 0.85),
      (o.post.fade = 0.9),
      await T(0.12),
      !p(e))
    ) {
      ((z.on = !1),
        o.post.fadeColor.setRGB(0, 0, 0),
        (o.post.fade = 1),
        o.audio.duck("amb", 0, 30),
        o.audio.duck("sfx", 0, 30),
        o.audio.duck("music", 0, 30));
      for (const n of ["p3_action", "p3_park_amb", "heartbeat_fast"])
        o.audio.loops.get(n)?.stop?.(0.05);
      (y &&
        ((y.engineVol = 0),
        (y.onboard = !1),
        y.stop?.(!0),
        y.warn?.([]),
        (y.root.position.y -= 400)),
        rt().props?.ambience?.(!1),
        o.audio.muffle?.(0.85, 0.05, 3.5),
        o.hud.clearSubtitle(),
        (c.frozen = !0),
        o.weapons.setVisible(!1),
        o.audio.play("p3_tinnitus", { vol: 0.5, bus: "voice" }),
        await T(4.5),
        !p(e) &&
          (await o.audio.voice("p3a_end", { vol: 0.65, reverb: 0.3 }),
          !p(e) &&
            (o.hud.subtitle("Sara...?", 2.4, "", "thought"),
            await T(2.6),
            !p(e) &&
              (o.hud.card("TO BE CONTINUED", ""),
              await T(5),
              !p(e) &&
                (o.hud.hint("press R to play again", 600),
                await E(() => o.input.pressed("KeyR") || p(e), 3600),
                !p(e) &&
                  !o.service &&
                  (location.href = location.pathname + "?section=3"))))));
    }
  }
  const nt = {
      wake() {},
      ashwood() {
        (N().setLevel?.("ashwood"),
          le()?.lid?.set(0),
          q().props?.ladderTop?.set?.(0),
          ne()?.lamp?.set?.(!1));
        const e = be;
        (c.place(e.x, e.shaft.z1 - 0.2, Math.PI, 0, 1.62, K),
          w().place(e.x + 0.05, e.shaft.z1 + 0.9, Math.PI, K));
      },
      train() {
        (N().setLevel?.("ashwood"), le()?.lid?.set(0), ne()?.lamp?.set?.(!1));
        const e = q().points?.ashwood || {},
          t = e.board || [20, oe - 1.9];
        (c.place(t[0], t[1] + 2.2, Math.PI, 0, 1.62, K),
          w().place(t[0] + 0.7, oe - 0.2, 0, K));
        const n = ve("ashwood");
        n != null && Je(n);
      },
      parkgate() {
        (N().setLevel?.("parkgate"), le()?.lid?.set(0), ne()?.lamp?.set?.(!1));
        const e = ve("parkgate");
        e != null && Je(e);
        const t = k?.spots?.sara?.getWorldPosition(new A());
        t
          ? c.place(t.x, t.z, Math.PI, 0, 1.62, t.y - 1.62)
          : c.place(415, oe - 2, Math.PI, 0, 1.62, K);
        const n = k?.spots?.akane?.getWorldPosition(new A());
        n ? w().place(n.x, n.z, 0, n.y) : w().place(416, oe - 2.5, 0, K);
      },
      park() {
        (N().setLevel?.("parkgate"), le()?.lid?.set(0), ne()?.lamp?.set?.(!1));
        const e = ue().points || {},
          t = e.exitOut || [ee[0], ee[2] - 4];
        (c.place(t[0], t[1], 0, 0, 1.62, 0),
          w().place(t[0] + 0.8, t[1] - 1.5, Math.PI, 0),
          Ae());
      },
      chopper() {
        (N().setLevel?.("parkgate"), le()?.lid?.set(0), ne()?.lamp?.set?.(!1));
        const e = ue().points || {},
          t = e.chopperDoor || [L.pos[0] + 0.6, L.pos[2] + 2.2];
        (c.place(t[0], t[1] + 1.2, 0, 0, 1.62, 0),
          w().place(t[0] - 1.2, t[1] + 0.6, Math.PI, 0),
          Ae());
      },
      flight() {
        nt.chopper();
      },
    },
    Ct = {
      wake: xt,
      ashwood: (e) => _t(e, { fromLadder: !1 }),
      train: async (e) => {
        await zt(e);
      },
      parkgate: (e) => ot(e, { fromTrain: !0 }),
      park: (e) => Mt(e, { fromExit: !0 }),
      chopper: (e) => At(e, { direct: !0 }),
      flight: async (e) => {
        ((r.flags.inHeli = !0), Ae(), y?.colliders?.(!1), await It(e));
      },
    },
    Dt = (e) => {
      (r.run++, ie.clear());
      for (const n of D) n.carried = null;
      ((D.length = 0),
        c.setDeck?.(null),
        (r.pa = !1),
        o.zombies.clear(),
        o.hud.clearSubtitle(),
        o.hud.task?.(null),
        o.hud.card("", "", !1),
        o.npc.revive?.(),
        o.npc.ride?.(null, { now: !0 }),
        o.npc.stop(),
        o.npc.work?.(null),
        (o.npc.grabbed = !1),
        o.npc.holster(),
        o.npc.standUp(),
        o.npc.emote("neutral"),
        (o.npc.noGround = !1),
        (o.npc.yOff = 0),
        o.npc.lookAt(null),
        (o.npc.strafe = 0),
        (o.playerSpeaking = !1),
        (o.post.fade = 0),
        (o.post.lid = 1),
        (o.post.blur = 0),
        o.post.fadeColor.setRGB(0, 0, 0),
        (o.camCtl = null),
        (c.frozen = !1),
        (c.speedMul = 1),
        (c.mount = null),
        (r.beat = e),
        (r.flags = {}),
        o.combat.heal(),
        (o.weapons.ammo = o.weapons.mag),
        (o.weapons.reserve = Math.max(o.weapons.reserve, Vt)),
        (o.weapons.showUntil = 0));
      for (const n of [
        "amb_house",
        "heartbeat_fast",
        "p3_shaft_amb",
        "p3_hatch_pound",
        "p3_metro_amb",
        "p3_train_ride",
        "p3_park_amb",
        "p3_generator",
        "p3_heli_outside",
        "p3_heli_inside",
        "p3_heli_caution",
        "p3_heli_lowrotor",
        "p3_action",
      ])
        o.audio.loops.get(n)?.stop?.(0.3);
      (o.audio.muffle?.(0, 0.1),
        (r.heliLoop = null),
        (r.caution = null),
        (r.lowRotor = null),
        (r.winBeater = null),
        (r.spool = null));
      for (const n of [r.hatchRec, r.heliRec, r.boardRec]) n?.remove?.();
      ((r.hatchRec = r.heliRec = r.boardRec = null),
        (o.lookMul = {}),
        (o.postOwned = !1),
        (o.fovKick = 0),
        (o.fx.flashK = 1),
        (b.on = !1),
        (b.mount = null),
        (b.stopS = null),
        (b.cap = null),
        (b.accel = 1.25),
        (b.decel = 1.15),
        k &&
          ((k.onboard = !1),
          (k.engineVol = 1),
          k.doors?.("left", !1, 0),
          k.doors?.("right", !1, 0),
          k.flicker?.(0, 0),
          k.flicker?.(1, 0),
          k.flicker?.(2, 0.4, 0.2)),
        k &&
          (k.lockCar?.(0, !1),
          k.lockCar?.(2, !1),
          k.gangway?.("rear", !1, 0.05, !0),
          k.gangway?.("front", !1, 0.05, !0),
          k.spots?.akane && (k.spots.akane.rotation.y = Math.PI)));
      for (const n of Qe) n.reset();
      for (const n of r.crateRecs || []) n.remove();
      ((r.crateRecs = null),
        we(!1),
        Te("ashwood", !0),
        Te("parkgate", !0),
        (z.on = !1),
        (X.on = !1),
        (X.rpm = 0),
        (X.mount = null),
        (o.beamLight = null),
        y &&
          ((y.onboard = !1),
          (y.engineVol = 1),
          y.stop?.(!0),
          y.power?.(!1, { instant: !0 }),
          y.warn?.([]),
          y.crack?.(0),
          y.smoke?.(0),
          y.fire?.(0),
          (y.searchK = 0),
          (y.landingK = 0),
          y.aim?.(null),
          y.doors?.left?.open?.(0, 0),
          y.doors?.right?.open?.(0, 0),
          y.root.position.set(L.pos[0], 0, L.pos[2])),
        Q && (Q.root.position.set(0, -200, 0), Q.smoke?.(0), Q.fire?.(0)));
      const t = ne();
      (t &&
        (t.reset?.(),
        t.lamp?.set?.(!0),
        t.shutters?.snapAll?.(1),
        t.frontDoor?.bolt?.(!0)),
        le()?.lid?.set(1),
        q().props?.ladderTop?.set?.(1),
        q().props?.shutter?.set?.(0.5),
        q().props?.staffDoor?.open?.(0, 0),
        N().house?.group && (N().house.group.visible = !0),
        (nt[e] || nt.wake)(),
        N().snapLook?.(),
        Ut(),
        (o.weapons.on = e !== "wake"),
        o.weapons.setVisible(!0));
    };
  return (
    (r.goto = async function (t) {
      Dt(t);
      const n = r.run;
      (o.audio.unlock?.(), (r.running = !0), Bt(n));
      try {
        await (Ct[t] || xt)(n);
      } catch (s) {
        console.error("[script3]", s);
      }
      r.running = !1;
    }),
    (r.enter = async function (t) {
      Dt(t);
      for (let n = 0; n < 6; n++) o.step(1 / 30);
    }),
    (r.start = () =>
      r.goto(new URLSearchParams(location.search).get("beat") || "wake")),
    (r.restartBeat = () =>
      r.goto(
        r.beat === "ladder"
          ? "wake"
          : r.beat === "crash"
            ? "flight"
            : Ct[r.beat]
              ? r.beat
              : "wake",
      )),
    (r.seenAt = Me),
    r
  );
}
