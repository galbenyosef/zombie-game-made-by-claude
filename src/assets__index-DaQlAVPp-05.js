// assets__index-DaQlAVPp 05 — math
// Lines 36369-36690 of readable/assets__index-DaQlAVPp.pretty.js (statement-aligned).
class tS {
  constructor(e, t) {
    ((this.camera = e),
      (this.world = t),
      (this.pos = new P(0, 0, 0)),
      (this.vel = new P()),
      (this.yaw = 0),
      (this.pitch = 0),
      (this.eye = Nd),
      (this.sensitivity = 0.0021),
      (this.frozen = !1),
      (this.bobPhase = 0),
      (this.bobAmp = 0),
      (this.stepCount = 0),
      (this.onStep = null),
      (this.recoil = { pitch: 0, yaw: 0, kick: 0 }),
      (this.shake = 0),
      (this.lean = 0),
      (this.speedMul = 1),
      (this.height = 0),
      (this._lastPhase = 0),
      (this.moving = 0),
      (this.mount = null),
      (this.mountRoll = 0),
      (this._mountYaw = null),
      (this.deck = null),
      (this.dvel = new P()),
      (this._deckYaw = null),
      (this._deckPrev = new P()));
  }
  place(e, t, n = this.yaw, i = 0, s = Nd, a) {
    (a === void 0 &&
      (a = this.world.groundAt ? this.world.groundAt(e, t, this.pos.y) : 0),
      this.pos.set(e, a, t),
      (this.yaw = n),
      (this.pitch = i),
      (this.eye = s),
      this.vel.set(0, 0, 0),
      this.sync());
  }
  forward(e = new P()) {
    return this.mount?.quat && this._mountQ
      ? e.set(0, 0, -1).applyQuaternion(this.camera.quaternion)
      : e.set(
          -Math.sin(this.yaw) * Math.cos(this.pitch),
          Math.sin(this.pitch),
          -Math.cos(this.yaw) * Math.cos(this.pitch),
        );
  }
  get eyePos() {
    return new P(this.pos.x, this.pos.y + this.eye, this.pos.z);
  }
  lookAt(e, t, n) {
    const i = e - this.pos.x,
      s = t - (this.pos.y + this.eye),
      a = n - this.pos.z;
    ((this.yaw = Math.atan2(-i, -a)),
      (this.pitch = Math.atan2(s, Math.hypot(i, a))));
  }
  sync() {
    const e = this.camera,
      t = this.bobAmp,
      n = Math.cos(this.bobPhase) * 0.012 * t,
      i = Math.abs(Math.sin(this.bobPhase)) * 0.03 * t - 0.01 * t,
      s = this.shake
        ? (Math.sin(this.world.time * 71) + Math.sin(this.world.time * 43)) *
          0.5 *
          this.shake
        : 0,
      a = this.shake
        ? (Math.sin(this.world.time * 57) + Math.sin(this.world.time * 89)) *
          0.5 *
          this.shake
        : 0,
      o = Math.cos(this.yaw),
      l = Math.sin(this.yaw);
    if (
      (e.position.set(
        this.pos.x + o * n,
        this.pos.y + this.eye + i + a * 0.02,
        this.pos.z - l * n,
      ),
      this.mount?.quat && this._mountQ)
    ) {
      (Fd.setFromEuler(
        eS.set(
          this.pitch + this.recoil.pitch + a * 0.012,
          this.yaw + this.recoil.yaw + s * 0.012,
          this.lean,
          "YXZ",
        ),
      ),
        e.quaternion.copy(this._mountQ).multiply(Fd));
      return;
    }
    ((e.rotation.order = "YXZ"),
      e.rotation.set(
        this.pitch + this.recoil.pitch + a * 0.012,
        this.yaw + this.recoil.yaw + s * 0.012,
        this.lean + this.mountRoll + Math.sin(this.bobPhase) * 0.004 * t,
      ));
  }
  update(e, t, n = !0) {
    const i = t.takeLook();
    if (((this.lastLook = i), this.frozen)) {
      this.sync();
      return;
    }
    if (i.x || i.y) {
      const y = jM * e,
        w = (_) => (_ > y ? y : _ < -y ? -y : _);
      ((this.yaw -= w(i.x * this.sensitivity)),
        (this.pitch -= w(i.y * this.sensitivity)),
        (this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch))));
    }
    if (this.mount) {
      this._ride(e);
      return;
    }
    ((this._mountYaw = null), (this.mountRoll = 0));
    let s = (t.down("KeyW") ? 1 : 0) - (t.down("KeyS") ? 1 : 0),
      a = (t.down("KeyD") ? 1 : 0) - (t.down("KeyA") ? 1 : 0);
    n || ((s = 0), (a = 0));
    const o = Math.hypot(s, a) || 1;
    ((s /= o), (a /= o));
    const l = t.down("ShiftLeft") || t.down("ShiftRight"),
      c = (l ? Sc : KM) * this.speedMul,
      h = Math.sin(this.yaw),
      d = Math.cos(this.yaw),
      u = (-h * s + d * a) * c,
      f = (-d * s - h * a) * c,
      p = 1 - Math.exp((-30 * e) / Math.max(c, 0.5));
    let x;
    if (this.deck) {
      const y = this.deck,
        w = this._deckHeading(),
        _ = Math.cos(w),
        b = Math.sin(w),
        S = _ * u - b * f,
        E = b * u + _ * f,
        v = this.dvel;
      ((v.x += (S - v.x) * p),
        (v.z += (E - v.z) * p),
        Math.abs(v.x) < 0.001 && (v.x = 0),
        Math.abs(v.z) < 0.001 && (v.z = 0),
        (y.local.x += v.x * e),
        (y.local.z += v.z * e),
        y.resolve?.(y.local, v, wc),
        this._deckPlace(),
        (x = Math.hypot(v.x, v.z)));
    } else {
      if (
        ((this.vel.x += (u - this.vel.x) * p),
        (this.vel.z += (f - this.vel.z) * p),
        Math.abs(this.vel.x) < 0.001 && (this.vel.x = 0),
        Math.abs(this.vel.z) < 0.001 && (this.vel.z = 0),
        (this.pos.x += this.vel.x * e),
        (this.pos.z += this.vel.z * e),
        this.resolve(),
        this.world.groundAt)
      ) {
        const y = this.world.groundAt(this.pos.x, this.pos.z, this.pos.y),
          w = y - this.pos.y;
        this.pos.y =
          Math.abs(w) > 0.6 ? y : this.pos.y + w * Math.min(1, e * 14);
      }
      x = Math.hypot(this.vel.x, this.vel.z);
    }
    ((this.moving = x),
      (this.bobPhase += e * x * 3.3),
      (this.bobAmp +=
        (Math.min(x / Sc, 1) * (l ? 1.15 : 0.8) - this.bobAmp) *
        Math.min(1, e * 8)));
    const m = Math.floor(this.bobPhase / Math.PI);
    m !== this._lastPhase &&
      ((this._lastPhase = m),
      this.stepCount++,
      x > 0.4 && this.onStep && this.onStep(m & 1, Math.min(x / Sc, 1)));
    const g = Math.min(1, e * 14);
    ((this.recoil.pitch -= this.recoil.pitch * g),
      (this.recoil.yaw -= this.recoil.yaw * g),
      (this.shake -= this.shake * Math.min(1, e * 5)),
      (this.lean -= this.lean * Math.min(1, e * 6)),
      this.sync());
  }
  _deckHeading() {
    const e = this.deck.frame.matrixWorld.elements;
    return Math.atan2(-e[2], e[0]);
  }
  _deckPlace() {
    const e = this.deck;
    this.pos.copy(
      Tc.set(e.local.x, e.floorY, e.local.z).applyMatrix4(e.frame.matrixWorld),
    );
  }
  deckSync(e = 0) {
    if (!this.deck) return;
    const t = this._deckHeading();
    if (this._deckYaw != null) {
      let n = t - this._deckYaw;
      for (; n > Math.PI;) n -= 2 * Math.PI;
      for (; n < -Math.PI;) n += 2 * Math.PI;
      this.yaw += n;
    }
    ((this._deckYaw = t),
      this._deckPlace(),
      e > 0 && this.vel.subVectors(this.pos, this._deckPrev).divideScalar(e),
      this._deckPrev.copy(this.pos),
      this.sync());
  }
  setDeck(e) {
    if (!e) {
      ((this.deck = null),
        (this._deckYaw = null),
        this.vel.set(0, 0, 0),
        this.dvel.set(0, 0, 0));
      return;
    }
    (e.frame.updateMatrixWorld(!0),
      (e.local = (e.local || new P()).copy(this.pos)),
      e.frame.worldToLocal(e.local),
      (this.deck = e),
      this.dvel.set(0, 0, 0),
      this.vel.set(0, 0, 0),
      e.resolve?.(e.local, this.dvel, wc),
      (this._deckYaw = this._deckHeading()),
      this._deckPlace(),
      this._deckPrev.copy(this.pos),
      this.sync());
  }
  _ride(e) {
    const t = this.mount;
    if (t.quat) {
      const a = t.eye(Tc);
      ((this._mountQ = t.quat(QM)),
        this.pos.set(a.x, a.y - this.eye, a.z),
        this.vel.set(0, 0, 0),
        (this.moving = 0),
        (this.bobAmp *= Math.exp(-e * 6)),
        (this.mountRoll = 0),
        (this._mountYaw = null));
      const o = Math.min(1, e * 14);
      ((this.recoil.pitch -= this.recoil.pitch * o),
        (this.recoil.yaw -= this.recoil.yaw * o),
        (this.shake -= this.shake * Math.min(1, e * 5)),
        (this.lean -= this.lean * Math.min(1, e * 6)),
        this.sync());
      return;
    }
    this._mountQ = null;
    const n = t.eye(Tc),
      i = t.yaw();
    if (this._mountYaw != null) {
      let a = i - this._mountYaw;
      for (; a > Math.PI;) a -= 2 * Math.PI;
      for (; a < -Math.PI;) a += 2 * Math.PI;
      this.yaw += a;
    }
    ((this._mountYaw = i),
      this.pos.set(n.x, n.y - this.eye, n.z),
      this.vel.set(0, 0, 0),
      (this.moving = 0),
      (this.bobAmp *= Math.exp(-e * 6)),
      (this.mountRoll = t.roll ? t.roll() : 0));
    const s = Math.min(1, e * 14);
    ((this.recoil.pitch -= this.recoil.pitch * s),
      (this.recoil.yaw -= this.recoil.yaw * s),
      (this.shake -= this.shake * Math.min(1, e * 5)),
      (this.lean -= this.lean * Math.min(1, e * 6)),
      this.sync());
  }
  resolve() {
    const e = this.pos,
      t = wc;
    for (let n = 0; n < 3; n++) {
      let i = !1;
      for (const s of this.world.colliders) {
        if (
          s.on === !1 ||
          (s.y1 !== void 0 && (s.y1 < e.y + 0.3 || s.y0 > e.y + 1.6))
        )
          continue;
        const a = Math.max(s.x0, Math.min(e.x, s.x1)),
          o = Math.max(s.z0, Math.min(e.z, s.z1)),
          l = e.x - a,
          c = e.z - o,
          h = l * l + c * c;
        if (!(h >= t * t))
          if (((i = !0), h > 1e-9)) {
            const d = Math.sqrt(h),
              u = l / d,
              f = c / d;
            ((e.x = a + u * t), (e.z = o + f * t));
            const p = this.vel.x * u + this.vel.z * f;
            p < 0 && ((this.vel.x -= p * u), (this.vel.z -= p * f));
          } else {
            const d = [
              [s.x0 - t - e.x, "x"],
              [s.x1 + t - e.x, "x"],
              [s.z0 - t - e.z, "z"],
              [s.z1 + t - e.z, "z"],
            ].sort((u, f) => Math.abs(u[0]) - Math.abs(f[0]))[0];
            d[1] === "x" ? (e.x += d[0]) : (e.z += d[0]);
          }
      }
      for (const s of this.world.circles) {
        if (s.on === !1) continue;
        const a = e.x - s.x,
          o = e.z - s.z,
          l = t + s.r,
          c = a * a + o * o;
        if (c >= l * l || c < 1e-9) continue;
        i = !0;
        const h = Math.sqrt(c),
          d = a / h,
          u = o / h;
        ((e.x = s.x + d * l), (e.z = s.z + u * l));
      }
      if (!i) break;
    }
  }
}
