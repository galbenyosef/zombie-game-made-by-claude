// assets/gameplay-DnQwS-TC 05 — pos
// Lines 1223-1881 of readable/assets/gameplay-DnQwS-TC.pretty.js (statement-aligned).
class ei {
  constructor(t, i, e, s, l, n) {
    ((this.mgr = t),
      (this.game = t.game),
      (this.kind = i),
      (this.cfg = cs[i] || cs.lanky),
      (this.kit = e),
      (this.pos = new Ge(s, 0, l)),
      (this.yaw = n),
      (this.speed = 0),
      (this.hp = this.cfg.hp),
      (this.dead = !1),
      (this.state = "idle"),
      (this.alerted = !1),
      (this.alertT = 0),
      (this.path = null),
      (this.pathI = 0),
      (this.repath = 0),
      (this.attackCd = 0.4),
      (this.stun = 0),
      (this.t = 0),
      (this.forceTarget = null),
      (this.circle = { x: s, z: l, r: 0.3 }),
      this.game.world.circles.push(this.circle),
      (this.groanT = St(2, 6)),
      (this.attackT = 0),
      (this.target = null),
      (this.holdFn = null),
      (this.rushed = !1),
      (this.calmT = 0),
      (this.goal = null),
      (this.y = 0),
      (this.air = null),
      e.root.position.copy(this.pos),
      (e.root.rotation.y = n),
      (e.onEvent = (r, h) => {
        r === "hit" ? this.onHit() : r === "land" && this.onAirEvent(h);
      }),
      e.setState("idle"));
  }
  targetPos() {
    if (this.goal) return this.goal;
    const t = this.game,
      i = t.npc;
    if (
      this.forceTarget &&
      typeof this.forceTarget == "object" &&
      this.forceTarget.pos
    )
      return this.forceTarget.pos;
    if (this.forceTarget === "akane" && i) return i.pos;
    if (this.forceTarget === "player" || !i) return t.player.pos;
    const e = this.pos.distanceToSquared(t.player.pos);
    return this.pos.distanceToSquared(i.pos) < e * 0.36 ? i.pos : t.player.pos;
  }
  walled(t) {
    const i = ls.set(this.pos.x, this.pos.y + 1.2, this.pos.z),
      e = hs.set(t.x - this.pos.x, 0, t.z - this.pos.z),
      s = e.length();
    return s < 0.05
      ? !1
      : (e.divideScalar(s),
        !!this.game.combat.raycastWorld(i, e, Math.max(0.05, s - 0.15)));
  }
  alert(t = 0) {
    this.dead || this.alerted || ((this.alerted = !0), (this.alertT = t));
  }
  hit(t, i, e, s, l) {
    if (!this.dead) {
      if (
        ((this.hp -= t), (this.alerted = !0), (this.alertT = 0), this.hp <= 0)
      ) {
        this.die(i, s);
        return;
      }
      if (!this.air && this.state !== "grab" && t >= 0.9) {
        ((this.stun = i === "head" ? 0.6 : 0.42), (this.state = "stagger"));
        const n = s.clone().applyAxisAngle(new Ge(0, 1, 0), -this.yaw);
        (this.kit.setState(
          Math.abs(n.x) > Math.abs(n.z)
            ? n.x > 0
              ? "stagger_right"
              : "stagger_left"
            : n.z > 0
              ? "stagger_front"
              : "stagger_back",
        ),
          (this.speed *= 0.2));
      }
    }
  }
  die(t, i) {
    if (
      this.air &&
      this.air.phase !== "land" &&
      this.air.phase !== "wait" &&
      this.air.phase !== "launch"
    ) {
      this.airDie();
      return;
    }
    (this.air && this.airDone(),
      (this.dead = !0),
      (this.state = "dead"),
      (this.hp = 0));
    const e = i.clone().applyAxisAngle(new Ge(0, 1, 0), -this.yaw);
    (this.kit.setState(
      t === "head" ? "die_head" : e.z > 0 ? "die_front" : "die_back",
    ),
      this.game.audio.play("zombie_die", {
        pos: [this.pos.x, this.pos.y + 0.5, this.pos.z],
        vol: 0.8,
        rate: St(0.92, 1.06),
      }),
      (this.deadT = 0),
      this.holdFn && this.holdFn(),
      this.mgr.onKill && this.mgr.onKill(this));
  }
  onHit() {
    if (this.dead || this.state !== "attack" || this.goal) return;
    const t = this.game,
      i = this.target || this.targetPos(),
      e = Math.hypot(i.x - this.pos.x, i.z - this.pos.z),
      s = this.forceTarget;
    if (
      !(
        e >
        ((s && typeof s == "object" && i === s.pos && s.reach) ||
          this.cfg.reach) +
          0.4
      ) &&
      !this.walled(i)
    ) {
      if (
        this.forceTarget &&
        typeof this.forceTarget == "object" &&
        i === this.forceTarget.pos
      ) {
        this.forceTarget.hurt?.(this);
        return;
      }
      i === t.player.pos
        ? t.combat.hurt(this.cfg.dmg, this.pos)
        : t.npc &&
          (t.npc.hurt(), this.mgr.onAkaneHit && this.mgr.onAkaneHit(this));
    }
  }
  update(t) {
    const i = this.game,
      e = this.cfg;
    if (((this.t += t), this.air)) {
      this.updateAir(t);
      return;
    }
    if (this.dead) {
      const U = this.deadT;
      if (
        ((this.deadT += t),
        U < 0.7 &&
          this.deadT >= 0.7 &&
          !this.carried &&
          this.game.fx.bloodPool(this.pos, St(0.6, 1)),
        U < 1.6 && this.deadT >= 1.6)
      ) {
        const N = this.game.world.circles.indexOf(this.circle);
        N >= 0 && this.game.world.circles.splice(N, 1);
      }
      this.kit.update(t);
      return;
    }
    if (
      ((this.attackCd -= t),
      (this.stun -= t),
      this.alerted && this.alertT > 0 && (this.alertT -= t),
      !this.alerted)
    ) {
      const U = Math.hypot(
          i.player.pos.x - this.pos.x,
          i.player.pos.z - this.pos.z,
        ),
        N = i.npc
          ? Math.hypot(i.npc.pos.x - this.pos.x, i.npc.pos.z - this.pos.z)
          : 99;
      Math.min(U, N) < 3.4 && this.alert(St(0.2, 0.6));
    }
    const s = this.alerted && this.alertT <= 0;
    if (
      ((this.groanT -= t),
      this.groanT <= 0 &&
        ((this.groanT = this.alerted ? St(4, 9) : St(7, 12)),
        this.mgr.groan(this, this.alerted ? 1 : 0.4)),
      this.state === "grab")
    ) {
      (this.kit.update(t), this.sync());
      return;
    }
    if (this.state === "stagger") {
      ((this.speed = be(this.speed, 0, 10, t)),
        this.stun <= 0 && (this.state = s ? "chase" : "idle"),
        this.kit.update(t),
        this.move(t, 0),
        this.sync());
      return;
    }
    if (!s) {
      ((this.speed = be(this.speed, 0, 8, t)),
        this.kit.setState("idle"),
        this.kit.update(t),
        this.sync());
      return;
    }
    const l = this.targetPos(),
      n = l.x - this.pos.x,
      r = l.z - this.pos.z,
      h = Math.hypot(n, r);
    if (((this.target = l), this.state === "attack")) {
      ((this.attackT += t),
        (this.yaw +=
          je(De(this.yaw, Math.atan2(n, r)), -1, 1) * Math.min(1, t * 6)),
        (this.speed = be(this.speed, 0, 12, t)),
        this.attackT > 0.98 &&
          ((this.state = "chase"),
          (this.attackCd = St(0.6, 1.3)),
          this.kit.setState("shamble")),
        this.kit.update(t),
        this.sync());
      return;
    }
    if (((this.state = "chase"), this.goal && h < 0.35)) {
      ((this.speed = be(this.speed, 0, 8, t)),
        this.kit.setState("idle"),
        this.kit.update(t),
        this.move(t, 0),
        this.sync());
      return;
    }
    const a = Math.abs(De(this.yaw, Math.atan2(n, r))),
      y =
        (this.forceTarget &&
          typeof this.forceTarget == "object" &&
          l === this.forceTarget.pos &&
          this.forceTarget.reach) ||
        e.reach;
    if (
      h < y &&
      this.attackCd <= 0 &&
      a < 0.9 &&
      !this.goal &&
      !this.walled(l)
    ) {
      ((this.state = "attack"),
        (this.attackT = 0),
        this.kit.setState("attack"),
        this.sync());
      return;
    }
    if (((this.repath -= t), this.repath <= 0 || !this.path)) {
      this.repath = St(0.45, 0.8);
      const U = i.nav.lineFree(this.pos.x, this.pos.z, l.x, l.z);
      ((this.path = U
        ? [[l.x, l.z]]
        : i.nav.path(this.pos.x, this.pos.z, l.x, l.z)),
        (this.pathI = 0),
        this.path || (this.repath = 0.35));
    }
    let g = Math.atan2(n, r),
      w = e.chase * (this.rushed ? 1 : 0.62 + 0.38 * Math.min(1, h / 4));
    if (
      (this.path || (w = 0),
      this.calmT > 0 && ((this.calmT -= t), (w = Math.min(w, e.walk))),
      this.path && this.path.length)
    ) {
      let U = this.path[Math.min(this.pathI, this.path.length - 1)];
      for (
        ;
        this.pathI < this.path.length - 1 &&
        Math.hypot(U[0] - this.pos.x, U[1] - this.pos.z) < 0.14;
      )
        (this.pathI++, (U = this.path[this.pathI]));
      g = Math.atan2(U[0] - this.pos.x, U[1] - this.pos.z);
    }
    h < y * 0.9 && !this.goal && (w = 0);
    const _ = De(this.yaw, g);
    ((this.yaw += Math.max(-e.turn * t, Math.min(e.turn * t, _))),
      (w *= 1 - 0.8 * Math.min(1, Math.abs(_) / 1.2)));
    const c = w > e.walk * 1.45 && this.kind !== "brute",
      k = w < 0.12 ? "idle" : c ? "run" : "shamble",
      K = k === "idle" ? 1 : je(w / (k === "run" ? 3.2 : e.walk), 0.35, 1.8);
    (this.kit.setState(k, { speed: K }), this.kit.update(t, { speed: K }));
    const Y = this.kit.groundSpeed,
      F = k === "idle" ? 0 : (Y ?? w);
    this.speed = be(this.speed, F, F > this.speed ? 9 : 14, t);
    const X = this.pos.x,
      J = this.pos.z;
    if (
      (this.move(t, this.speed),
      (this.stuckT =
        (this.stuckT || 0) +
        (F > 0.3 && Math.hypot(this.pos.x - X, this.pos.z - J) < t * F * 0.25
          ? t
          : -this.stuckT || 0)),
      this.stuckT > 0.9 && this.path && this.pathI < this.path.length)
    ) {
      const U = this.path[this.pathI],
        N = (U[0] - this.pos.x) * 0.5,
        T = (U[1] - this.pos.z) * 0.5,
        f = Math.hypot(N, T);
      ((f > 0.02 &&
        !!i.combat.raycastWorld(
          ls.set(this.pos.x, this.pos.y + 0.9, this.pos.z),
          hs.set(N / f, 0, T / f),
          f + 0.3,
        )) ||
        ((this.pos.x += N), (this.pos.z += T)),
        (this.stuckT = 0),
        (this.repath = 0),
        (this.path = null));
    }
    this.sync();
  }
  move(t, i) {
    i > 0.01 &&
      ((this.pos.x += Math.sin(this.yaw) * i * t),
      (this.pos.z += Math.cos(this.yaw) * i * t));
    for (const h of this.mgr.list) {
      if (h === this || h.dead || (h.air && h.air.phase !== "land")) continue;
      const a = this.pos.x - h.pos.x,
        y = this.pos.z - h.pos.z,
        g = a * a + y * y;
      if (g < 0.25 && g > 1e-6) {
        const w = Math.sqrt(g),
          _ = (0.5 - w) * 0.5;
        ((this.pos.x += (a / w) * _), (this.pos.z += (y / w) * _));
      }
    }
    const e = this.game.player.pos,
      s = this.pos.x - e.x,
      l = this.pos.z - e.z,
      n = s * s + l * l;
    if (n < 0.3025 && n > 1e-6) {
      const h = Math.sqrt(n);
      ((this.pos.x = e.x + (s / h) * 0.55),
        (this.pos.z = e.z + (l / h) * 0.55));
    }
    (xs(this.game.world, this.pos, 0.3, this.pos.y, this.circle),
      (this.circle.x = this.pos.x),
      (this.circle.z = this.pos.z));
    const r = this.game.world.groundAt;
    if (r && !this.air) {
      const h = r(this.pos.x, this.pos.z, this.pos.y),
        a = h - this.pos.y;
      this.pos.y = Math.abs(a) > 0.6 ? h : this.pos.y + a * Math.min(1, t * 14);
    }
  }
  sync() {
    (this.kit.root.position.set(this.pos.x, this.pos.y + this.y, this.pos.z),
      (this.kit.root.rotation.y = this.yaw));
  }
  airTarget() {
    const t = this.game,
      i = this.air?.o.target;
    return i && typeof i == "object" && i.pos
      ? i.pos
      : i === "akane" && t.npc
        ? t.npc.pos
        : t.player.pos;
  }
  updateAir(t) {
    const i = this.air,
      e = this.game,
      s = i.win,
      l = this.kit,
      n = s.sill;
    if (((i.t += t), i.phase === "wait")) {
      const r = this.mgr.winQ(s);
      if (
        r.busy ||
        (s.state >= 0.999 ? r.q[0] : r.q.find((a) => a.air?.o.crash)) !== this
      )
        return;
      (r.q.splice(r.q.indexOf(this), 1),
        (r.busy = this),
        (this.yaw = s.face),
        i.o.crash
          ? (s.state <= 0 && s.smash?.(),
            (i.phase = "launch"),
            (i.t = 0),
            e.audio.play("zombie_scream", {
              pos: [n[0], n[1] + 1, n[2]],
              vol: 0.95,
              rate: St(0.9, 1.05),
              reverb: 0.5,
            }))
          : i.o.perch0
            ? ((l.root.visible = !0),
              (i.phase = "perch"),
              (i.t = 0),
              this.pos.set(n[0], 0, n[2]),
              (this.y = n[1]),
              l.setState("perch", { instant: !0 }),
              l.lookAt(i.look, 0.8),
              e.audio.play("zombie_growl", {
                pos: [n[0], n[1] + 1, n[2]],
                vol: 0.9,
                rate: St(0.9, 1.08),
                reverb: 0.45,
              }))
            : ((l.root.visible = !0),
              (i.phase = "climb"),
              (i.t = 0),
              this.pos.set(n[0], 0, n[2]),
              (this.y = n[1]),
              l.setState("climb", { instant: !0 })));
    } else if (i.phase === "launch") {
      if (i.t < 0.05) return;
      const r = Math.sin(s.face),
        h = Math.cos(s.face);
      (this.airFly(
        "crash",
        n[0] - r * 0.6,
        n[1] + 0.1,
        n[2] - h * 0.6,
        s.land[0] + r * 0.45,
        s.land[1] + h * 0.45,
        1.3,
      ),
        l.setState("fall", { crash: !0, instant: !0 }),
        (l.root.visible = !0));
    } else if (i.phase === "climb")
      i.t >= Le.climb &&
        ((i.phase = "perch"),
        (i.t = 0),
        l.setState("perch"),
        l.lookAt(i.look, 0.8),
        e.audio.play("zombie_growl", {
          pos: [n[0], n[1] + 1, n[2]],
          vol: 0.8,
          rate: St(0.9, 1.08),
          reverb: 0.45,
        }));
    else if (i.phase === "perch")
      i.t >= i.perch &&
        (this.airFly(
          "fall",
          n[0],
          n[1],
          n[2],
          s.land[0],
          s.land[1],
          i.o.vy ?? 0.5,
        ),
        l.setState("fall"));
    else if (i.phase === "fall" || i.phase === "crash" || i.phase === "drop") {
      const r = Math.min(i.t, i.T);
      ((this.pos.x = i.x0 + (i.x1 - i.x0) * (r / i.T)),
        (this.pos.z = i.z0 + (i.z1 - i.z0) * (r / i.T)),
        (this.y = Math.max(0, i.y0 + i.vy * r - 4.905 * r * r)));
      const h = this.mgr.winQ(s);
      if (
        (h.busy === this &&
          (i.phase !== "crash" || r > 0.22) &&
          (h.busy = null),
        i.t >= i.T)
      ) {
        if (((this.y = 0), i.phase === "drop")) {
          this.airLanded();
          return;
        }
        ((i.phase = "land"),
          (i.t = 0),
          (this.circle.x = this.pos.x),
          (this.circle.z = this.pos.z),
          l.lookAt(null),
          l.setState("land", { hard: i.hard }));
        const a = this.airTarget(),
          y = e.nav?.path(this.pos.x, this.pos.z, a.x, a.z),
          g = y && y.length ? y[0] : [a.x, a.z];
        i.goalYaw = Math.atan2(g[0] - this.pos.x, g[1] - this.pos.z);
      }
    } else if (i.phase === "land") {
      const r = i.hard ? Le.hard : Le.land;
      if (
        (i.t > r * 0.4 &&
          (this.yaw += je(De(this.yaw, i.goalYaw), -3 * t, 3 * t)),
        i.t >= r)
      ) {
        (this.airDone(), this.kit.update(t), this.sync());
        return;
      }
    }
    if (i.phase === "perch" || i.phase === "climb") {
      const r = this.airTarget();
      i.look.set(r.x, r === e.player.pos ? 1.55 : 1.3, r.z);
    }
    (i.phase !== "wait" && l.update(t), this.sync());
  }
  airFly(t, i, e, s, l, n, r) {
    const h = this.air;
    ((h.phase = t),
      (h.t = 0),
      (h.x0 = i),
      (h.y0 = e),
      (h.z0 = s),
      (h.x1 = l),
      (h.z1 = n),
      (h.vy = r),
      (h.T = (r + Math.sqrt(r * r + 2 * 9.81 * Math.max(0, e))) / 9.81),
      this.pos.set(i, 0, s),
      (this.y = e));
  }
  onAirEvent(t) {
    const i = this.game,
      e = this.pos.x,
      s = this.pos.z,
      l = !!this.air?.hard;
    if (t === "grip") {
      i.audio.play("zombie_climb_sill", {
        pos: [e, this.y + 0.2, s],
        vol: 0.9,
        rate: St(0.92, 1.08),
        reverb: 0.4,
      });
      return;
    }
    if (t === "impact") {
      (i.audio.play("body_fall_stone", {
        pos: [e, 0.3, s],
        vol: l ? 1 : 0.85,
        rate: St(0.92, 1.08),
        reverb: 0.45,
      }),
        i.fx?.dust?.({ x: e, y: 0.02, z: s }, 0.55, l ? 1.1 : 0.7));
      const n = Math.hypot(i.player.pos.x - e, i.player.pos.z - s);
      n < 7 && (i.player.shake += (l ? 0.4 : 0.22) * (1 - n / 7));
    } else
      t === "thud" &&
        i.audio.play("body_fall_stone", {
          pos: [e, 0.2, s],
          vol: 0.55,
          rate: St(0.8, 0.9),
          reverb: 0.4,
        });
  }
  airDone() {
    const t = this.air;
    if (!t) return;
    ((this.air = null), (this.y = 0));
    const i = this.mgr.winQ(t.win);
    i.busy === this && (i.busy = null);
    const e = i.q.indexOf(this);
    (e >= 0 && i.q.splice(e, 1),
      (this.alerted = !0),
      (this.alertT = 0),
      (this.rushed = !0),
      (this.state = "chase"),
      (this.path = null),
      (this.repath = 0),
      (this.speed = 2.2),
      t.o.target && (this.forceTarget = t.o.target),
      (this.circle.x = this.pos.x),
      (this.circle.z = this.pos.z),
      (this.kit.root.visible = !0),
      this.kit.lookAt(null),
      this.sync(),
      t.res?.(this));
  }
  airDie() {
    const t = this.air,
      i = this.game,
      e = t.win,
      s = e.sill;
    ((this.dead = !0),
      (this.state = "dead"),
      (this.hp = 0),
      i.audio.play("zombie_die", {
        pos: [this.pos.x, this.y + 0.8, this.pos.z],
        vol: 0.8,
        rate: St(0.92, 1.06),
      }));
    const l = this.mgr.winQ(e);
    if (
      (l.busy === this && (l.busy = null),
      this.holdFn && this.holdFn(),
      this.mgr.onKill && this.mgr.onKill(this),
      (t.outside = t.phase === "climb" && t.t < Le.climb * 0.45),
      t.phase === "fall" || t.phase === "crash")
    ) {
      const n = Math.min(t.t, t.T),
        r = t.vy - 9.81 * n,
        h = this.pos.x,
        a = this.pos.z,
        y = this.y,
        g = (t.T - n) / t.T;
      this.airFly(
        "drop",
        h,
        y,
        a,
        h + (t.x1 - t.x0) * g,
        a + (t.z1 - t.z0) * g,
        r,
      );
    } else {
      const n = Math.sin(e.face),
        r = Math.cos(e.face);
      t.outside
        ? this.airFly(
            "drop",
            s[0] - n * 0.55,
            Math.max(0, this.y - 0.9),
            s[2] - r * 0.55,
            e.out[0],
            e.out[1],
            0,
          )
        : this.airFly(
            "drop",
            s[0],
            s[1],
            s[2],
            e.land[0] - n * 0.15,
            e.land[1] - r * 0.15,
            0.4,
          );
    }
    (this.kit.lookAt(null),
      this.kit.setState("fall", { limp: !0, fade: 0.12 }));
  }
  airLanded() {
    const t = this.air,
      i = this.game;
    if (
      ((this.air = null),
      (this.y = 0),
      (this.deadT = 0),
      this.kit.setState("die_front", { fade: 0.08 }),
      (this.kit.anim.t = 0.9),
      (this.circle.x = this.pos.x),
      (this.circle.z = this.pos.z),
      t.outside)
    )
      this.kit.root.visible = !1;
    else {
      (i.audio.play("body_fall_stone", {
        pos: [this.pos.x, 0.3, this.pos.z],
        vol: 0.95,
        rate: St(0.85, 1),
        reverb: 0.45,
      }),
        i.fx?.dust?.({ x: this.pos.x, y: 0.02, z: this.pos.z }, 0.6, 0.9));
      const e = Math.hypot(
        i.player.pos.x - this.pos.x,
        i.player.pos.z - this.pos.z,
      );
      e < 7 && (i.player.shake += 0.25 * (1 - e / 7));
    }
    (this.sync(), t.res?.(this));
  }
}
