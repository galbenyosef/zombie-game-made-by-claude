// assets__gameplay-DnQwS-TC 09 — math
// Lines 2950-3934 of readable/assets__gameplay-DnQwS-TC.pretty.js (statement-aligned).
class fi {
  constructor(t, i, e, s = {}) {
    ((this.game = t),
      (this.akane = i),
      (this.nav = e),
      (this.pos = new dt()),
      (this.yaw = 0),
      (this.speed = 0),
      (this.moveSpeed = 1.3),
      (this.turnRate = 0),
      (this.phase = 0),
      (this.t = 0),
      (this.circle = { x: 0, z: 0, r: 0.27 }),
      t.world.circles.push(this.circle),
      (this.path = null),
      (this.pathIdx = 0),
      (this.arrive = null),
      (this.arriveDist = 0.25),
      (this.wantYaw = null),
      (this.gun = {
        mode: "none",
        raise: 0,
        recoil: 0,
        aim: null,
        slide: 0,
        hands: 2,
      }),
      (this.arms = "down"),
      (this.touchAt = null),
      (this.kneelK = 0),
      (this.kneelGoal = 0),
      (this.pointK = 0),
      (this.sitK = 0),
      (this.sitGoal = 0),
      (this.seatY = 0.46),
      (this.lookGoal = null),
      (this.lookYaw = 0),
      (this.lookPitch = 0),
      (this.glance = { t: 2, yaw: 0, pitch: 0 }),
      (this.emo = { ...Ze.neutral }),
      (this.emoGoal = "neutral"),
      (this.blinkT = 3),
      (this.blink = 0),
      (this.speaking = !1),
      (this.mouth = { open: 0, shape: "M" }),
      (this._sayTok = 0),
      (this._voice = null),
      (this._sayPrev = null),
      (this.flinch = 0),
      (this.handsUp = 0),
      (this.busy = null),
      (this.hits = ks()),
      (this.dead = !1),
      (this.deadK = 0),
      (this.onDeath = null),
      (this.onWound = null),
      (this.workCue = null),
      (this._wk = {
        crouch: 0,
        lean: 0,
        hop: 0,
        k: 0,
        L: new dt(),
        R: new dt(),
        back: 1,
      }),
      (this.root = i.root),
      (this.visible = !0),
      (this.pistol = i.pistol),
      (this.pistolLight = null),
      (this._v = new dt()),
      (this._w = new dt()),
      (this.onFire = null),
      (this.onStep = null),
      (this.turnBias = 0),
      (this.faceHold = 0),
      (this.voiceUntil = 0),
      (this.wounds = 1),
      (this.bike = null),
      (this.rideK = 0),
      (this._mount = null),
      (this._dismount = null),
      (this._rb = null));
  }
  place(t, i, e = this.yaw, s) {
    (this.bike || this._dismount) && this.ride(null, { now: !0 });
    const l = this.game.world.groundAt;
    (this.pos.set(t, s ?? (l ? l(t, i, this.pos.y) : 0), i),
      (this.yaw = e),
      (this.circle.x = t),
      (this.circle.z = i),
      (this.path = null),
      (this.speed = 0),
      this.apply());
  }
  get x() {
    return this.pos.x;
  }
  get z() {
    return this.pos.z;
  }
  headWorld(t = new dt()) {
    return (this.akane.char.rig.head.getWorldPosition(t), t);
  }
  chestWorld(t = new dt()) {
    return (this.akane.char.rig.chest.getWorldPosition(t), t);
  }
  distTo(t, i) {
    return Math.hypot(this.pos.x - t, this.pos.z - i);
  }
  walkTo(t, i, { speed: e = 1.3, arrive: s = 0.25 } = {}) {
    (this.arrive && this.arrive(!1), ([t, i] = this.nav.snap(t, i, !0)));
    const l = this.nav.path(this.pos.x, this.pos.z, t, i, { avoidSealed: !0 });
    return l
      ? ((this.path = l),
        (this.pathIdx = 0),
        (this.moveSpeed = e),
        (this.arriveDist = s),
        (this.goal = [t, i]),
        (this.walkDeadline =
          this.t + 3 + (Math.hypot(t - this.pos.x, i - this.pos.z) / e) * 2.5),
        new Promise((n) => {
          this.arrive = n;
        }))
      : (console.warn("[akane] no route to", t.toFixed(2), i.toFixed(2)),
        Promise.resolve(!1));
  }
  stop() {
    if (((this.path = null), this.arrive)) {
      const t = this.arrive;
      ((this.arrive = null), t(!1));
    }
  }
  followSpot(t, i) {
    const e = this.nav,
      s = this.game.roomAt || ie,
      l = s(t.x, t.z),
      [n, r] = e.snap(t.x, t.z, !0);
    let h = null,
      a = 1e9;
    for (const y of [1.4, 1.9, 2.5]) {
      for (const g of [150, -150, 115, -115, 180, 80, -80, 30, -30, 0]) {
        const w = i + g * di,
          _ = n - Math.sin(w) * y,
          c = r - Math.cos(w) * y;
        if (
          !e.walkable(_, c, !0) ||
          (l && s(_, c) !== l) ||
          !e.lineFree(_, c, n, r, !0)
        )
          continue;
        const k = Math.abs(g) < 60 ? 1.8 : 0,
          K =
            Math.hypot(_ - this.pos.x, c - this.pos.z) +
            Math.abs(180 - Math.abs(g)) * 0.004 +
            k;
        K < a && ((a = K), (h = [_, c]));
      }
      if (h) break;
    }
    return h;
  }
  keepNear(t, i, { near: e = 2.7, speed: s = 1.6 } = {}) {
    const l = this.distTo(t.x, t.z),
      n = this.goal,
      r = this.path && n && Math.hypot(n[0] - t.x, n[1] - t.z) < 2.4;
    if (l <= e || r || (this._followT && this.t - this._followT < 0.5))
      return !1;
    this._followT = this.t;
    const h = this.followSpot(t, i);
    return (
      h
        ? this.walkTo(h[0], h[1], { speed: s, arrive: 0.35 })
        : this.walkTo(t.x, t.z, { speed: s, arrive: 1.3 }),
      !0
    );
  }
  turnTo(t, i) {
    return (
      (this.wantYaw = Math.atan2(t - this.pos.x, i - this.pos.z)),
      new Promise((e) => {
        this._turnRes = e;
      })
    );
  }
  faceYaw(t) {
    this.wantYaw = t;
  }
  lookAt(t) {
    this.lookGoal = t;
  }
  set attend(t) {
    ((this._attend = !!t),
      !t &&
        this._attendTurn &&
        ((this._attendTurn = !1), (this.wantYaw = null)));
  }
  get attend() {
    return !!this._attend;
  }
  emote(t, i = 0) {
    ((this.emoGoal = t), (this.faceHold = i));
  }
  setGun(t, i = 2) {
    ((this.gun.mode = t), (this.gun.hands = i));
  }
  aimAt(t) {
    ((this.gun.aim = t), this.setGun("aim"));
  }
  lowReady() {
    ((this.gun.aim = null), this.setGun("low"));
  }
  holster() {
    ((this.gun.aim = null), this.setGun("none"));
  }
  kneelAt(t) {
    ((this.kneelGoal = 1), (this.touchWorld = t), (this.arms = "touch"));
  }
  standUp() {
    ((this.kneelGoal = 0),
      (this.sitGoal = 0),
      (this.touchWorld = null),
      this.arms === "touch" && (this.arms = "down"));
  }
  sitDown(t = 0.46) {
    ((this.sitGoal = 1), (this.seatY = t));
  }
  work(t) {
    this.workCue = t;
  }
  gesturePoint(t = 1.4) {
    this.pointK = t;
  }
  scare(t = 1.2) {
    this.handsUp = t;
  }
  hurt() {
    ((this.flinch = 1),
      !(this.dead || !this.hits.hit(this.game.time)) &&
        (this.hits.dead
          ? ((this.dead = !0), this.onDeath && this.onDeath())
          : this.onWound && this.onWound(this.hits.n)));
  }
  revive() {
    ((this.dead = !1),
      this.hits.reset(),
      (this.kneelGoal = 0),
      (this.sitGoal = 0),
      (this.sitK = 0),
      (this.deadK = 0));
  }
  ride(t, { now: i = !1 } = {}) {
    if (((t = t || null), t === this.bike && !this._dismount)) return;
    const e = new dt();
    if (t) {
      (this.bike && this.bike !== t && this.ride(null, { now: !0 }),
        this._dismount && this._finishDismount(),
        this.stop(),
        (this.workCue = null),
        (this.kneelGoal = 0),
        (this.sitGoal = 0),
        (this.touchWorld = null),
        (this.arms = "down"),
        this.setGun("none"));
      const s = t.rider ? t.rider.root : t.seats.driver;
      (t.root.updateMatrixWorld(!0),
        (this._rootParent = this.root.parent),
        this.root.getWorldPosition(e));
      const l = s.worldToLocal(e.clone()),
        n = new dt(0, 0, 1).transformDirection(
          (t.rider?.root || t.root).matrixWorld,
        ),
        r = Math.atan2(n.x, n.z);
      (s.add(this.root),
        (this._mount = i ? null : { from: l, yaw: se(r, this.yaw) }),
        this.root.position.copy(i ? e.set(0, 0, 0) : l),
        this.root.rotation.set(0, i ? 0 : this._mount.yaw, 0),
        (this.bike = t),
        (t.load = 1),
        (this.rideK = i ? 1 : 0),
        (this.circle.on = !1),
        (this._rb = null));
    } else if (this.bike) {
      const s = this.bike;
      s.root.updateMatrixWorld(!0);
      const l = s.rider
        ? new dt().fromArray(s.rider.exit || [0, 0, 0])
        : s.seats.driver.worldToLocal(
            s.root.localToWorld(new dt(0.62, 0, -0.12)),
          );
      ((this._dismount = { bike: s, to: l }),
        (this.bike = null),
        i && ((this.rideK = 0), this._finishDismount()));
    } else this._dismount && i && ((this.rideK = 0), this._finishDismount());
  }
  get riding() {
    return !!(this.bike || this._dismount);
  }
  _finishDismount() {
    const t = this._dismount;
    if (!t) return;
    t.bike.root.updateMatrixWorld(!0);
    const i = (
        t.bike.rider ? t.bike.rider.root : t.bike.seats.driver
      ).localToWorld(t.to.clone()),
      e = new dt(0, 0, 1).transformDirection(
        (t.bike.rider?.root || t.bike.root).matrixWorld,
      );
    ((this._rootParent || this.game.scene).add(this.root),
      this.root.rotation.set(0, 0, 0),
      (t.bike.load = 0),
      (this._dismount = null),
      (this.rideK = 0),
      (this._mount = null),
      (this.circle.on = !0),
      this.place(i.x, i.z, Math.atan2(e.x, e.z), t.bike.rider ? i.y : void 0));
  }
  rideStep(t) {
    const i = this.bike || this._dismount?.bike;
    if (!i) return;
    this.rideK = Math.min(
      1,
      Math.max(0, this.rideK + ((this.bike ? 1 : -1) * t) / 0.75),
    );
    const e = this.rideK * this.rideK * (3 - 2 * this.rideK);
    if (this.bike && this._mount) {
      const y = this._mount;
      (this.root.position.copy(y.from).multiplyScalar(1 - e),
        this.root.rotation.set(0, y.yaw * (1 - e), 0),
        this.rideK >= 1 &&
          ((this._mount = null),
          this.root.position.set(0, 0, 0),
          this.root.rotation.set(0, 0, 0)));
    }
    if (
      this._dismount &&
      (this.root.position.copy(this._dismount.to).multiplyScalar(1 - e),
      this.root.rotation.set(0, 0, 0),
      this.rideK <= 0)
    ) {
      this._finishDismount();
      return;
    }
    this.root.updateMatrixWorld(!0);
    const s = this._v;
    (this.root.getWorldPosition(s),
      this.pos.set(s.x, i.rider ? s.y : 0, s.z),
      (this.circle.x = s.x),
      (this.circle.z = s.z));
    const l = this._w
      .set(0, 0, 1)
      .transformDirection((i.rider?.root || i.root).matrixWorld);
    ((this.yaw = Math.atan2(l.x, l.z)),
      (this.speed = 0),
      (this.turnRate = 0),
      (this.path = null));
    const n = i.state || {},
      r =
        this._rb ||
        (this._rb = {
          y: n.chassisY || 0,
          v: 0,
          ly: n.lean || 0,
          sw: 0,
          swV: 0,
        }),
      h = n.chassisY || 0;
    ((r.v += ((h - r.y) * 140 - r.v * 13) * t), (r.y += r.v * t));
    const a = t > 0 ? ((n.lean || 0) - r.ly) / t : 0;
    ((r.ly = n.lean || 0),
      (r.swV += ((-a * 0.06 - r.sw) * 90 - r.swV * 11) * t),
      (r.sw += r.swV * t));
  }
  fire() {
    if (this.gun.mode !== "aim") return !1;
    this.gun.recoil = 1;
    const t = new dt(),
      i = new dt();
    return (
      this.akane.pistol.muzzleWorld(t, i),
      this.onFire && this.onFire(t, i),
      !0
    );
  }
  async say(t, { emote: i, hold: e = 0.5, subtitle: s = !0 } = {}) {
    const l = this.game,
      n = l.audio.manifest[t],
      r = ++this._sayTok;
    if (
      l.playerSpeaking &&
      (await l.sched.until(() => !l.playerSpeaking, 4), r !== this._sayTok)
    )
      return;
    if (this.speaking && this._voice)
      try {
        this._voice.stop(0.12);
      } catch {}
    const h = n?.text || "",
      a = ((h.match(/^\[([^\]]+)\]/) || [])[1] || "").split(/[ ,]+/)[0],
      y = i || ui[a] || "neutral",
      g = this._sayPrev && this.speaking ? this._sayPrev : this.emoGoal;
    ((this._sayPrev = g), this.emote(y, 9), (this.speaking = !0));
    const w = this.headWorld();
    s &&
      l.hud &&
      l.hud.subtitle(
        h.replace(/^\[[^\]]*\]\s*/, ""),
        (n?.dur ?? 2) + 0.3,
        "AKANE",
      );
    const _ =
      a === "whispering"
        ? 0.7
        : a === "screaming"
          ? 1.12
          : a === "scared" || a === "nervous"
            ? 0.86
            : 1;
    ((this._voice = null),
      await l.audio.voice(t, {
        pos: [w.x, w.y, w.z],
        ref: 2.2,
        rolloff: 0.8,
        reverb: 0.3,
        vol: _,
        bus: "akane",
        onHandle: (k) => {
          r === this._sayTok && (this._voice = k);
        },
      }),
      r === this._sayTok &&
        ((this.speaking = !1),
        (this._voice = null),
        (this._sayPrev = null),
        (this.faceHold = e),
        this.emoGoal === y &&
          (this.emoGoal =
            y === "scream" || y === "urgent"
              ? "scared"
              : g === y
                ? "neutral"
                : g)));
  }
  update(t) {
    ((this.t += t),
      (this.dt = t),
      this.bike || this._dismount ? this.rideStep(t) : this.locomote(t),
      this.timers(t),
      this.apply());
    const i = this.speaking && this._voice?.panner;
    if (i) {
      const e = this.headWorld(this._vh || (this._vh = new dt()));
      ((i.positionX.value = e.x),
        (i.positionY.value = e.y),
        (i.positionZ.value = e.z));
    }
  }
  locomote(t) {
    let i = 0,
      e = null;
    if (
      this.path &&
      this.walkDeadline &&
      this.t > this.walkDeadline &&
      ((this.path = null), (this.walkDeadline = 0), this.arrive)
    ) {
      const y = this.arrive;
      ((this.arrive = null), y(!1));
    }
    if (this.path && this.pathIdx < this.path.length) {
      const y = this.path[this.pathIdx],
        g = y[0] - this.pos.x,
        w = y[1] - this.pos.z,
        _ = Math.hypot(g, w),
        c = this.pathIdx === this.path.length - 1;
      if (_ < (c ? this.arriveDist : 0.2)) {
        if (
          (this.pathIdx++,
          this.pathIdx >= this.path.length && ((this.path = null), this.arrive))
        ) {
          const k = this.arrive;
          ((this.arrive = null), k(!0));
        }
      } else
        ((e = Math.atan2(g, w)),
          (i = this.moveSpeed * (c ? _t(0.35 + _ / 1.1, 0, 1) : 1)),
          (i *= 1 - 0.85 * Qe(0.5, 1.6, Math.abs(se(this.yaw, e)))));
    }
    const s = this.workCue;
    let l = !1;
    if (s && s.pos && !this.path && !this.grabbed) {
      l = !0;
      const y = s.pos[0] - this.pos.x,
        g = s.pos[1] - this.pos.z,
        w = 1 - Math.exp(-12 * t),
        _ = 2.6 * t;
      let c = y * w,
        k = g * w;
      const K = Math.hypot(c, k);
      (K > _ && ((c *= _ / K), (k *= _ / K)),
        (this.pos.x += c),
        (this.pos.z += k),
        (i = Math.hypot(c, k) / Math.max(t, 1e-4)),
        i > 0.05 &&
          (this._wk.back =
            Math.sin(this.yaw) * c + Math.cos(this.yaw) * k < 0 ? -1 : 1),
        s.yaw != null && (this.wantYaw = s.yaw));
    }
    if (this.gun.mode === "aim" && this.gun.aim) {
      const y =
        typeof this.gun.aim == "function" ? this.gun.aim() : this.gun.aim;
      y &&
        !this.path &&
        (this.wantYaw = Math.atan2(y.x - this.pos.x, y.z - this.pos.z));
    }
    if (
      this._attend &&
      !this.path &&
      !s &&
      this.gun.mode !== "aim" &&
      this.kneelK < 0.3 &&
      this.sitK < 0.3 &&
      !this.dead &&
      !this.calmHead &&
      this.lookGoal &&
      (this.wantYaw == null || this._attendTurn)
    ) {
      const y =
          typeof this.lookGoal == "function" ? this.lookGoal() : this.lookGoal,
        g = Math.atan2(y.x - this.pos.x, y.z - this.pos.z),
        w = Math.abs(se(this.yaw, g));
      (this._attendTurn ? w > 0.05 : w > 0.85) &&
        ((this.wantYaw = g), (this._attendTurn = !0));
    }
    let n = e ?? this.wantYaw,
      r = null;
    if (
      e != null &&
      this.strafe > 0 &&
      this.gun.mode === "aim" &&
      this.gun.aim
    ) {
      const y =
        typeof this.gun.aim == "function" ? this.gun.aim() : this.gun.aim;
      y &&
        ((r = e),
        (n =
          e +
          _t(
            se(e, Math.atan2(y.x - this.pos.x, y.z - this.pos.z)),
            -this.strafe,
            this.strafe,
          )));
    }
    let h = 0;
    if (n != null) {
      const y = se(this.yaw, n),
        g = this.gun.mode === "aim" ? 9 : this._attendTurn ? 2.6 : 6;
      if (
        ((h = _t(y * 10, -g, g)),
        (this.yaw += h * t),
        Math.abs(y) < 0.11 && this._turnRes)
      ) {
        const w = this._turnRes;
        ((this._turnRes = null), w(!0));
      }
      e == null &&
        Math.abs(y) < 0.02 &&
        ((this.wantYaw = null), (this._attendTurn = !1));
    }
    if (
      ((this.turnRate = Nt(this.turnRate, Math.abs(h), 12, t)),
      (this.speed = l
        ? Nt(this.speed, i, 14, t)
        : Nt(this.speed, i, i > this.speed ? 5 : 8, t)),
      this.speed > 0.005 && !l)
    ) {
      const y = this.pos.x,
        g = this.pos.z,
        w = r ?? this.yaw;
      if (
        ((this.pos.x += Math.sin(w) * this.speed * t),
        (this.pos.z += Math.cos(w) * this.speed * t),
        this.sideT > 0)
      ) {
        this.sideT -= t;
        const c = this.sideDir;
        ((this.pos.x += Math.cos(this.yaw) * c * 0.9 * t),
          (this.pos.z -= Math.sin(this.yaw) * c * 0.9 * t));
      }
      xs(this.game.world, this.pos, 0.27, this.pos.y, this.circle);
      const _ = Math.hypot(this.pos.x - y, this.pos.z - g);
      ((this.pinT =
        this.path && i > 0.4 && _ < this.speed * t * 0.25
          ? (this.pinT || 0) + t
          : 0),
        this.pinT > 0.6 &&
          ((this.pinT = 0),
          (this.sideT = 0.5),
          (this.sideDir = Math.random() < 0.5 ? -1 : 1)));
    }
    ((this.circle.x = this.pos.x), (this.circle.z = this.pos.z));
    const a = this.game.world.groundAt;
    if (a && !this.noGround) {
      const y = a(this.pos.x, this.pos.z, this.pos.y),
        g = y - this.pos.y;
      this.pos.y = Math.abs(g) > 0.6 ? y : this.pos.y + g * Math.min(1, t * 14);
    }
  }
  timers(t) {
    ((this.gun.raise = Nt(
      this.gun.raise,
      this.gun.mode === "aim" ? 1 : (this.gun.mode === "low", 0),
      11,
      t,
    )),
      this.gun.mode === "aim" &&
        (this.gun.raise = Math.min(1, this.gun.raise + t * 3.5)),
      (this.gun.recoil = Math.max(0, this.gun.recoil - t * 7)),
      (this.kneelK = Nt(this.kneelK, this.kneelGoal, 3.2, t)),
      (this.sitK = Nt(this.sitK, this.sitGoal, 2.4, t)),
      (this.pointK = Math.max(0, this.pointK - t)),
      (this.handsUp = Math.max(0, this.handsUp - t)),
      (this.flinch = Math.max(0, this.flinch - t * 4)),
      this.dead || this.hits.update(t, this.game.time),
      (this.deadK = this.dead ? Math.min(1, this.deadK + t * 1.6) : 0),
      this.faceHold > 0 &&
        !this.speaking &&
        ((this.faceHold -= t),
        this.faceHold <= 0 &&
          !this.forceEmo &&
          (this.emoGoal =
            this.emoGoal === "scream"
              ? "scared"
              : this.emoGoal === "relieved" || this.emoGoal === "urgent"
                ? "neutral"
                : this.emoGoal)));
  }
  apply() {
    const t = this.t,
      i = this.game,
      e = this.dt || 1 / 60,
      s = this.bike || this._dismount?.bike || null;
    s ||
      (this.root.position.set(
        this.pos.x,
        this.pos.y + (this.yOff || 0),
        this.pos.z,
      ),
      (this.root.rotation.y = this.yaw));
    const l = Math.max(
        this.speed,
        this.turnRate * 0.22 * (this.gun.mode === "aim" ? 0.6 : 1),
      ),
      n = Qe(1.75, 2.8, this.speed),
      r = xe(0.3, 0.4, n),
      h = xe(0.6, 0.46, n),
      a = {
        guitar: 0,
        breathe: t * 0.24,
        arms: this.arms,
        wounds: this.wounds,
        hairBudget: 18,
      };
    if (
      ((a.walkAmp = l > 0.06 ? _t(l / 1.15) : 0),
      (a.walk = this.phase),
      (a.walkStride = r),
      (a.walkLift = xe(0.085, 0.17, n)),
      (a.walkDuty = h),
      (a.lean = n * 9 + this.flinch * -6),
      (a.kneel = this.kneelK),
      this.sitK > 0.002 &&
        ((a.sit = this.sitK),
        (a.seat = this.seatY),
        (a.walkAmp *= 1 - this.sitK)),
      this.deadK > 0)
    ) {
      const v = this.deadK * this.deadK * (3 - 2 * this.deadK);
      ((a.kneel = Math.max(a.kneel, v)), (a.lean += 38 * v));
    }
    const y = this.workCue,
      g = this._wk,
      w = 1 - Math.exp(-9 * e);
    ((g.crouch += ((y?.crouch ?? 0) - g.crouch) * w),
      (g.lean += ((y?.lean ?? 0) - g.lean) * w),
      (g.hop += ((y?.hop ?? 0) - g.hop) * (1 - Math.exp(-20 * e))));
    const _ = !!(y && y.hold && y.L && y.R && !this.grabbed);
    (_ && (g.L.fromArray(y.L), g.R.fromArray(y.R)),
      (g.k += ((_ ? 1 : 0) - g.k) * (1 - Math.exp(-(_ ? 16 : 10) * e))),
      g.crouch > 0.005 && (a.kneel = Math.max(a.kneel, g.crouch)),
      (a.lean += g.lean),
      g.hop > 0.005 && (a.jump = g.hop));
    let c = null;
    if (s && s.rider && this.rideK > 0.001) {
      const v = s.rider,
        R = this.rideK * this.rideK * (3 - 2 * this.rideK);
      ((a.walkAmp = 0),
        (a.kneel = 0),
        v.pose === "seat" && ((a.sit = R), (a.seat = v.seat ?? 0.46)),
        (a.lean =
          (v.lean ?? 0) * R + this.flinch * -7 + (v.leanFn ? v.leanFn() : 0)),
        (this._rideSway =
          (v.sway ? v.sway() : 0) + this.flinch * 4 * Math.sin(t * 40)),
        (this._rideDrop = 0),
        (c = { b: s, k: R, generic: !0 }));
    } else if (s && this.rideK > 0.001) {
      const v = s,
        R = v.state,
        W = this._rb || { y: 0, sw: 0 },
        C = this.rideK * this.rideK * (3 - 2 * this.rideK),
        j = this.root,
        u = (zt, ot) => j.worldToLocal(zt.getWorldPosition(ot));
      j.updateMatrixWorld(!0);
      const m = v.seatTopAt ? v.seatTopAt(v.G.seatZ) : 0.865,
        d = Math.max(-0.03, Math.min(0.03, W.y - (R.chassisY || 0))),
        x = m + 0.058;
      ((a.ride = C),
        (a.walkAmp = 0),
        (a.kneel = 0),
        (a.sit = 0),
        (a.rideSwing = this._mount
          ? this.rideK
          : this._dismount
            ? 1 - this.rideK
            : 0),
        (a.rideHips = [0, x, -0.005]));
      const A = u(v.pegs.L, (this._rk1 ||= new dt())),
        q = u(v.pegs.R, (this._rk2 ||= new dt()));
      ((a.ridePegs = { 1: [A.x, A.y, A.z], [-1]: [q.x, q.y, q.z] }),
        (a.rideSeat = 0.86 + (m - x)),
        (a.rideSeatW = 0.1));
      const Z = Math.abs(R.speed || 0);
      ((a.lean =
        C * (26 + 4 * _t(Z / 10)) +
        this.flinch * -9 -
        d * 160 +
        (R.brake || 0) * 3),
        (this._rideDrop = d * 0.7),
        (a.rideRoll = 0),
        (this._rideSway =
          C * (-(R.lean || 0) * 57.3 * 0.22 + W.sw * 57.3) +
          this.flinch * 4 * Math.sin(t * 40)),
        (c = { b: v, k: C }));
      const $ = (this._rk3 ||= new dt());
      $.set(0, 0, 1).transformDirection(v.root.matrixWorld);
      const lt = _t(Z / 9) * 0.105;
      ((a.windW = [-$.x * lt, 0.025 * _t(Z / 9) - $.y * lt, -$.z * lt]),
        (a.hairFlutter = _t(Z / 8, 0, 1.4)));
    }
    const k = this.headWorld(this._w);
    let K = null;
    (this.lookGoal &&
      (K =
        typeof this.lookGoal == "function" ? this.lookGoal() : this.lookGoal),
      y && y.look && (K = (this._lk ||= new dt()).fromArray(y.look)),
      this.gun.mode === "aim" &&
        this.gun.aim &&
        (K =
          typeof this.gun.aim == "function" ? this.gun.aim() : this.gun.aim));
    let Y = 0,
      F = 0;
    if (c) {
      const v = this.root,
        R = v.worldToLocal((this._rk4 ||= new dt()).copy(k)),
        W = (this._rk5 ||= new dt());
      K
        ? v.worldToLocal(W.copy(K))
        : W.set((c.b.state?.steer || 0) * 4.5, 0.9, 10);
      const C = W.x - R.x,
        j = W.z - R.z,
        u = W.y - R.y;
      ((Y = Math.atan2(C, j)),
        Math.abs(Y) > 1.9 && (Y = 1.42 + 0.05 * Math.sin(t * 0.7)),
        (F = -Math.atan2(u, Math.hypot(C, j))));
    } else if (K) {
      const v = K.x - k.x,
        R = K.z - k.z,
        W = K.y - k.y;
      ((Y = se(this.yaw, Math.atan2(v, R))),
        (F = -Math.atan2(W, Math.hypot(v, R))));
    }
    const X = c ? 1.45 : 1.25;
    if (
      ((this.lookYaw = Nt(this.lookYaw, _t(Y, -X, X), 9, e)),
      (this.lookPitch = Nt(this.lookPitch, _t(F, -0.6, 0.6), 9, e)),
      (a.yaw = this.lookYaw * ve),
      (a.pitch =
        this.lookPitch * ve + 4 + (this.deadK > 0 ? 40 * this.deadK : 0)),
      this.gun.mode !== "none"
        ? (a.bodyYaw = 0.15 * this.lookYaw * ve)
        : (a.bodyYaw = 0.5 * this.lookYaw * ve),
      c && (a.bodyYaw = 0.3 * this.lookYaw * ve * c.k + a.bodyYaw * (1 - c.k)),
      c &&
        c.generic &&
        this.rideK > 0.55 &&
        !(this.handsUp > 0) &&
        this.gun.mode === "none")
    ) {
      const v = c.b.rider.hands || {},
        R = this.root,
        W = v.R
          ? R.worldToLocal(v.R.getWorldPosition((this._rk1 ||= new dt())))
          : null,
        C = v.L
          ? R.worldToLocal(v.L.getWorldPosition((this._rk2 ||= new dt())))
          : null;
      (W || C) &&
        ((a.arms = "grab"),
        (a.grabR = W ? [W.x, W.y, W.z] : [-0.23, 0.84, 0.05]),
        (a.grabL = C ? [C.x, C.y, C.z] : [0.23, 0.84, 0.05]));
    } else if (c && !c.generic && this.rideK > 0.55 && !(this.handsUp > 0)) {
      const v = c.b,
        R = this.root,
        W = R.worldToLocal(v.grips.L.getWorldPosition(this._rk1)),
        C = R.worldToLocal(v.grips.R.getWorldPosition(this._rk2)),
        j = (this._rk6 ||= new dt())
          .set(1, 0, 0)
          .transformDirection(v.grips.L.matrixWorld),
        u = (this._rk7 ||= new dt())
          .set(1, 0, 0)
          .transformDirection(v.grips.R.matrixWorld),
        m = (this._rkM ||= new It()).copy(R.matrixWorld).invert();
      (j.transformDirection(m),
        u.transformDirection(m),
        (a.arms = "bars"),
        (a.barL = [W.x, W.y, W.z]),
        (a.barR = [C.x, C.y, C.z]),
        (a.barAxisL = [j.x, j.y, j.z]),
        (a.barAxisR = [u.x, u.y, u.z]));
      const d = this.rideReach;
      if (
        ((this._rrK = Nt(this._rrK || 0, d?.on ? 1 : 0, d?.on ? 11 : 8, e)),
        d && this._rrK > 0.002)
      ) {
        const x = R.worldToLocal((this._rk8 ||= new dt()).copy(d.to()));
        ((a.barReachR = [x.x, x.y, x.z]), (a.barReachK = this._rrK));
      } else ((a.barReachR = null), (a.barReachK = 0));
    } else if (this.gun.mode !== "none" && !this.handsUp) {
      ((a.arms = "gun"),
        (a.gunRaise = this.gun.raise),
        (a.gunHands = this.gun.hands),
        (a.gunRecoil = this.gun.recoil));
      let v = [0, 0.02, 1];
      if (this.gun.aim) {
        const R =
            typeof this.gun.aim == "function" ? this.gun.aim() : this.gun.aim,
          W = this.chestWorld(this._v),
          C = R.x - W.x,
          j = R.z - W.z,
          u = R.y - W.y,
          m = Math.hypot(C, j),
          d = _t(se(this.yaw, Math.atan2(C, j)), -0.5, 0.5),
          x = Math.atan2(u, Math.max(m, 0.3));
        v = [Math.sin(d), Math.sin(x), Math.cos(x) * Math.cos(d)];
      }
      ((a.gunAim = v),
        this.gun.mode === "low" &&
          (a.gunAim = this.sitK > 0.5 ? [0, -0.55, 0.84] : [0, -0.02, 1]));
    } else if (this.handsUp > 0) a.arms = "hands_up";
    else if (g.k > 0.04) {
      const v = Math.cos(this.yaw),
        R = Math.sin(this.yaw),
        W = (C, j) => {
          const u = C.x - this.pos.x,
            m = C.z - this.pos.z;
          return [u * v - m * R, C.y, u * R + m * v].map(
            (x, A) => j[A] + (x - j[A]) * g.k,
          );
        };
      ((a.arms = "grab"),
        (a.grabL = W(g.L, [0.25, 0.8, 0.05])),
        (a.grabR = W(g.R, [-0.25, 0.8, 0.05])));
    } else if (this.arms === "touch" && this.touchWorld) {
      const v = Math.cos(this.yaw),
        R = Math.sin(this.yaw),
        W = this.touchWorld[0] - this.pos.x,
        C = this.touchWorld[2] - this.pos.z,
        j = Math.sin(t * 17) * 0.004 + Math.sin(t * 9.3) * 0.003;
      ((a.touchAt = [
        W * v - C * R + j,
        this.touchWorld[1] + Math.sin(t * 13) * 0.003,
        W * R + C * v + j * 0.5,
      ]),
        (a.arms = this.kneelK > 0.6 ? "touch" : "down"),
        (a.pitch = 24 * this.kneelK));
    } else
      this.pointK > 0
        ? ((a.arms = "point"), (a.pointAt = !1), (a.pointUp = 0.25))
        : a.arms === "guitar" && (a.arms = "down");
    ((a.walkArm = this.gun.mode !== "none" ? 0.2 : 1),
      (a.weight =
        0.25 *
        Math.sin(t * 0.31) *
        (1 - _t(l)) *
        (this.kneelK > 0.5 || this.sitK > 0.5 ? 0 : 1)),
      (a.sway = 0.6 * Math.sin(t * 0.47) * (1 - _t(l))),
      (a.shoulders = 0.004 * Math.sin(t * 1.3) + (this.handsUp > 0 ? 0.02 : 0)),
      c &&
        ((a.weight = 0),
        (a.sway = this._rideSway || 0),
        (a.shoulders += this._rideDrop || 0)),
      this.emo.tears > 0.02 && (a.tears = Ut(this.emo.tears, 0.05)),
      this.eyeReflect != null && (a.eyeReflect = this.eyeReflect));
    const J = Ze[this.emoGoal] || Ze.neutral,
      U = 1 - Math.exp(-7 * e);
    for (const v of [
      "brows",
      "open",
      "smile",
      "blush",
      "sad",
      "anger",
      "tears",
    ])
      this.emo[v] += (J[v] - this.emo[v]) * U;
    ((this.blinkT -= e),
      this.blinkT <= 0 &&
        ((this.blinkT = 2.2 + (Math.sin(t * 12.9) + 1) * 1.6),
        this.noBlink || (this.blink = 0.14)),
      (this.blink = Math.max(0, this.blink - e)));
    const N = this.blink > 0 ? 0.05 : this.emo.open;
    a.eyes = {
      open: Ut(N, 0.1),
      gaze: [
        Ut(_t(this.lookYaw * 0.5, -0.6, 0.6), 0.1),
        Ut(_t(0.05 + this.lookPitch * 0.45, -0.35, 0.35), 0.1),
      ],
      iris: 0.95 + 0.1 * Ut(this.emo.brows, 0.1),
    };
    const T = Ut(this.emo.brows, 0.1);
    ((a.brows = { l: T, r: T }),
      (a.blush = Ut(this.emo.blush, 0.05)),
      (a.sad = Ut(this.emo.sad, 0.1)),
      (a.anger = Ut(this.emo.anger, 0.1)));
    const f = i.audio;
    let b = 0,
      L = "M";
    if (this.speaking) {
      b = _t(f.voiceLevel * 2.7, 0, 1);
      const v = f.voiceFlux;
      ((L =
        v < 0.16 ? "O" : v < 0.22 ? "U" : v < 0.3 ? "A" : v < 0.4 ? "E" : "I"),
        b < 0.12 && ((L = "M"), (b = 0)));
    }
    (this.speaking && !this.calmHead && (a.pitch += f.voiceLevel * 5),
      (a.mouth = {
        open: Ut(b, 0.125),
        shape: L,
        smile: Ut(this.emo.smile, 0.1),
        teeth: b > 0.35 ? 0.25 : 0,
      }),
      this.freezeMouth && this._mouth
        ? (a.mouth = this._mouth)
        : (this._mouth = a.mouth),
      !this.speaking &&
        this.emo.open > 1.1 &&
        this.emoGoal === "scared" &&
        (a.mouth = { open: 0.12, shape: "O", smile: -0.2, teeth: 0 }),
      (this._lastPose = a),
      this.akane.setPose(a, t),
      this.pistol.setSlide(_t(this.gun.recoil * 1.4)));
  }
  stepPhase(t) {
    const i = Math.max(
      this.speed,
      this.turnRate * 0.22 * (this.gun.mode === "aim" ? 0.6 : 1),
    );
    if (i > 0.05) {
      const e = Qe(1.75, 2.8, this.speed),
        s = xe(0.3, 0.4, e),
        l = xe(0.6, 0.46, e),
        n = Math.floor(this.phase * 2);
      ((this.phase +=
        ((i * l) / (2 * s)) * t * (this.workCue ? this._wk.back : 1)),
        Math.floor(this.phase * 2) !== n &&
          this.onStep &&
          this.kneelK < 0.5 &&
          this.onStep(i));
    }
  }
  tick(t) {
    (this.stepPhase(t), this.update(t));
  }
}
