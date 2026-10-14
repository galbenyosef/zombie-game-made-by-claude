// assets/anim-B86X8yU9 02 — math
// Lines 134-1190 of readable/assets/anim-B86X8yU9.pretty.js (statement-aligned).
class Et {
  constructor(t, s = 1) {
    ((this.def = t), (this.st = t.style), (this.seed = s));
    const h = t.J;
    ((this.J = h),
      (this.off = yt(h).map((a) => new m(a[0], a[1], a[2]))),
      (this.hips0 = new m(...h.hips)),
      (this.pose = new $()),
      (this.from = new $()),
      (this.out = new $()),
      (this.wp = Array.from({ length: S }, () => new m())),
      (this.wq = Array.from({ length: S }, () => new O())));
    const e = (a) => new m(a[0], a[1], a[2]),
      o = (a, y, l, c) => {
        const f = e(h[F[a]]),
          p = e(h[F[y]]),
          u = e(h[l]),
          w = p.clone().sub(f),
          q = u.clone().sub(p),
          g = w.length(),
          R = q.length();
        (w.normalize(), q.normalize());
        const _ = new m().crossVectors(w, c).normalize(),
          A = Math.atan2(new m().crossVectors(w, q).dot(_), w.dot(q));
        return {
          b1: a,
          b2: y,
          r1: w,
          r2: q,
          l1: g,
          l2: R,
          h: _,
          thRest: A,
          x1: w.clone().cross(_),
        };
      },
      i = new m(0, 0, -1),
      n = new m(0, 0, 1);
    ((this.legs = {
      1: o(d.thighL, d.shinL, "footL", i),
      [-1]: o(d.thighR, d.shinR, "footR", i),
    }),
      (this.arms = {
        1: o(d.upperArmL, d.foreArmL, "handL", n),
        [-1]: o(d.upperArmR, d.foreArmR, "handR", n),
      }),
      (this.heel = {
        1: e([h.heelL[0], 0, h.heelL[2]]).sub(e(h.footL)),
        [-1]: e([h.heelR[0], 0, h.heelR[2]]).sub(e(h.footR)),
      }),
      (this.toe = {
        1: e([h.toeL[0], 0, h.toeL[2]]).sub(e(h.footL)),
        [-1]: e([h.toeR[0], 0, h.toeR[2]]).sub(e(h.footR)),
      }),
      (this.ankleY = h.footL[1]),
      (this.legLen = this.legs[1].l1 + this.legs[1].l2),
      (this.hipJ = { 1: e(h.thighL), [-1]: e(h.thighR) }),
      (this.vols = t.hit.map(([a, y, l, c, f]) => {
        const p = h[a];
        return {
          bone: d[a],
          a: new m(y[0] - p[0], y[1] - p[1], y[2] - p[2]),
          b: new m(l[0] - p[0], l[1] - p[1], l[2] - p[2]),
          r: c,
          zone: f,
        };
      })),
      (this.state = "idle"),
      (this.t = 0),
      (this.fade = 1),
      (this.fadeDur = 0.2),
      (this.prevLoop = "idle"),
      (this.opts = {}),
      (this.cyc = M(s * 0.618)),
      (this.speed = 1),
      (this.dead = !1),
      (this.down = !1),
      (this.events = []),
      (this.hitFired = !1),
      (this.gruntAt = 2 + M(s * 0.37) * 5),
      (this.rnd = M(Math.sin(s * 91.7) * 43758.5)),
      (this.twitch = {
        next: 0,
        i: 0,
        p: 0,
        y: 0,
        r: 0,
        p0: 0,
        y0: 0,
        r0: 0,
        at: 0,
      }),
      (this.groundSpeed = 0),
      (this.look = null),
      (this.lookW = 0.85),
      (this.lookPt = new m()),
      (this.torso = [d.spine, d.chest]),
      (this.chains = [
        {
          root: d.upperArmL,
          bones: [d.upperArmL, d.foreArmL, d.handL],
          feet: !1,
        },
        {
          root: d.upperArmR,
          bones: [d.upperArmR, d.foreArmR, d.handR],
          feet: !1,
        },
        { root: d.thighL, bones: [d.thighL, d.shinL, d.footL], feet: 1 },
        { root: d.thighR, bones: [d.thighR, d.shinR, d.footR], feet: -1 },
        { root: d.neck, bones: [d.head, d.neck], feet: !1 },
      ]),
      (this.deathSide = s % 2 ? 1 : -1),
      (this.e = new dt(0, 0, 0, "YXZ")),
      (this.tq = new O()),
      (this.tq2 = new O()),
      (this.tq3 = new O()),
      (this.tv = new m()),
      (this.tv2 = new m()),
      (this.tv3 = new m()),
      (this.tv4 = new m()),
      (this.tv5 = new m()),
      (this.tv6 = new m()),
      (this.m1 = new st()),
      (this.m2 = new st()),
      (this.ax = new m()),
      this.setState("idle", {}, !0));
  }
  setState(t, s = {}, h = !1) {
    if (
      (G.includes(t) || (t = "idle"),
      !(this.dead && !t.startsWith("die_") && !s.revive))
    ) {
      if (t === this.state && K.has(t) && !h) {
        this.opts = { ...this.opts, ...s };
        return;
      }
      (K.has(this.state) && (this.prevLoop = this.state),
        this.from.copy(this.out),
        (this.fade = h ? 1 : 0),
        (this.fadeDur =
          s.fade ??
          (t.startsWith("stagger")
            ? 0.08
            : t.startsWith("die")
              ? 0.12
              : t === "attack"
                ? 0.15
                : 0.25)),
        T[t] &&
          s.fade == null &&
          T[t].fade != null &&
          (this.fadeDur = T[t].fade),
        (this.state = t),
        (this.t = 0),
        (this.opts = s),
        (this.hitFired = !1),
        t.startsWith("die_") && ((this.dead = !0), (this.down = !1)),
        s.revive && ((this.dead = !1), (this.down = !1)),
        (t === "attack" || t.startsWith("stagger")) &&
          this.events.push(["grunt", t]),
        h && (this.evalState(0), this.out.copy(this.pose)));
    }
  }
  update(t, s) {
    (s != null && (this.speed = x(s, 0, 1.5)), (this.t += t));
    const h = this.state,
      e = P[h] ? this.gaitParams(P[h]) : null;
    if (e) {
      const o = this.cyc;
      ((this.cyc += t * e.cadence * 0.5),
        Math.floor(this.cyc) !== Math.floor(o) &&
          this.events.push(["step", "L"]),
        Math.floor(this.cyc + 0.5) !== Math.floor(o + 0.5) &&
          this.events.push(["step", "R"]));
    }
    ((this.groundSpeed = e ? e.v * this.gk(h) : 0),
      ht[h] && this.t >= ht[h] && this.setState(this.prevLoop, this.opts));
    {
      const o = T[h];
      o &&
        o.next &&
        this.t >= (typeof o.dur == "function" ? o.dur.call(this) : o.dur) &&
        this.setState(o.next === "prev" ? this.prevLoop : o.next, {
          fade: o.nextFade,
        });
    }
    if (
      (U[h] &&
        this.t >= U[h] &&
        !this.down &&
        ((this.down = !0), this.events.push(["dead", h])),
      h === "attack" &&
        !this.hitFired &&
        this.t >= 0.45 &&
        ((this.hitFired = !0), this.events.push(["hit", 0])),
      !this.dead &&
        K.has(this.state) &&
        ((this.gruntAt -= t),
        this.gruntAt <= 0 &&
          (this.events.push(["grunt", this.state]),
          (this.rnd = M(this.rnd * 7.13 + 0.31)),
          (this.gruntAt = 3.5 + this.rnd * 6))),
      this.evalState(t),
      (this.fade =
        this.fadeDur > 0 ? Math.min(1, this.fade + t / this.fadeDur) : 1),
      this.fade < 1)
    ) {
      const o = z(0, 1, this.fade);
      this.out.hp.lerpVectors(this.from.hp, this.pose.hp, o);
      for (let i = 0; i < S; i++)
        this.out.q[i].slerpQuaternions(this.from.q[i], this.pose.q[i], o);
    } else this.out.copy(this.pose);
    this.state.startsWith("die_")
      ? this.groundDead(
          this.out,
          z(0.04, 0.22, this.t),
          z(0.4, 0.85, this.t / U[this.state]),
        )
      : T[this.state]?.air || this.ground(this.out, 0);
  }
  apply(t) {
    const s = this.out;
    t[0].position.copy(s.hp);
    for (let h = 0; h < S; h++) t[h].quaternion.copy(s.q[h]);
  }
  gk(t) {
    return t === "run" && this.st.run.burst
      ? this.speed * this.burstK()
      : t === "reach"
        ? this.speed * 0.85
        : this.speed;
  }
  burstK() {
    const [t, s] = this.st.run.burst,
      h = M(this.t / t + this.seed * 0.37);
    return 1 - s * z(0.52, 0.66, h) * (1 - z(0.86, 1, h));
  }
  gaitParams(t) {
    const s = this.st;
    return t === "run"
      ? s.run
      : t === "emerge"
        ? s.emerge || {
            ...s.run,
            v: s.run.v * 0.62,
            cadence: s.run.cadence * 0.85,
            lean: 42,
            crouch: s.run.crouch + 0.05,
          }
        : s.shamble;
  }
  qe(t, s, h, e) {
    return (this.e.set(s * k, h * k, e * k, "YXZ"), t.setFromEuler(this.e));
  }
  begin(t) {
    t.hp.copy(this.hips0);
    for (let s = 0; s < S; s++) t.q[s].identity();
  }
  fk(t) {
    const s = this.wp,
      h = this.wq;
    (s[0].copy(t.hp), h[0].copy(t.q[0]));
    for (let e = 1; e < S; e++) {
      const o = V[e];
      (s[e].copy(this.off[e]).applyQuaternion(h[o]).add(s[o]),
        h[e].multiplyQuaternions(h[o], t.q[e]));
    }
  }
  fkTo(t, s) {
    const h = this.wp,
      e = this.wq;
    (h[0].copy(t.hp), e[0].copy(t.q[0]));
    let o = 0;
    const i = this._ch || (this._ch = new Int8Array(8));
    for (let n = s; n > 0; n = V[n]) i[o++] = n;
    for (let n = o - 1; n >= 0; n--) {
      const a = i[n],
        y = V[a];
      (h[a].copy(this.off[a]).applyQuaternion(e[y]).add(h[y]),
        e[a].multiplyQuaternions(e[y], t.q[a]));
    }
  }
  ik(t, s, h, e) {
    const o = V[s.b1];
    this.fkTo(t, s.b1);
    const i = this.wq[o],
      n = this.wp[s.b1],
      a = this.tv.copy(h).sub(n);
    let y = a.length();
    const l = (s.l1 + s.l2) * 0.9995,
      c = Math.abs(s.l1 - s.l2) + 0.001;
    y = x(y, c, l);
    const f = a.normalize(),
      p = x((s.l1 * s.l1 + y * y - s.l2 * s.l2) / (2 * s.l1 * y), -1, 1),
      u = Math.sqrt(1 - p * p),
      w = this.tv2.copy(e).addScaledVector(f, -e.dot(f));
    (w.lengthSq() < 1e-8 && w.set(0, 0, 1).addScaledVector(f, -f.z),
      w.normalize());
    const q = this.tv3
        .copy(n)
        .addScaledVector(f, s.l1 * p)
        .addScaledVector(w, s.l1 * u),
      g = this.tv4.copy(q).sub(n).normalize(),
      R = this.tv5.copy(n).addScaledVector(f, y),
      _ = this.tv6.copy(R).sub(q).normalize(),
      A = this.ax.crossVectors(g, w).negate();
    (A.lengthSq() < 1e-10 ? A.copy(s.h) : A.normalize(),
      this.m1.makeBasis(s.r1, s.h, s.x1));
    const D = this.tv5.crossVectors(g, A);
    (this.m2.makeBasis(g, A, D), this.m2.multiply(this.m1.transpose()));
    const L = this.tq.setFromRotationMatrix(this.m2);
    t.q[s.b1].copy(i).invert().multiply(L);
    const W = Math.acos(x(g.dot(_), -1, 1));
    t.q[s.b2].setFromAxisAngle(s.h, W - s.thRest);
  }
  leg(t, s, h, e, o, i, n, a = 0) {
    const y = this._T || (this._T = new m()),
      l = this._pole || (this._pole = new m());
    (y.set(h, e, o),
      l.set(a + s * 0.15, 0, 1).normalize(),
      l.applyAxisAngle(this._Y || (this._Y = new m(0, 1, 0)), n));
    const c = this.legs[s];
    (this.ik(t, c, y, l),
      this.fkTo(t, c.b2),
      this.qe(this.tq2, -i / k, n / k, 0));
    const f = s > 0 ? d.footL : d.footR;
    t.q[f].copy(this.wq[c.b2]).invert().multiply(this.tq2);
  }
  ankleFor(t, s) {
    const h = Math.cos(-s),
      e = Math.sin(-s),
      o = this.heel[t],
      i = this.toe[t],
      n = o.y * h - o.z * e,
      a = i.y * h - i.z * e;
    return Math.max(-n, -a) + 0.0015;
  }
  ankleShift(t, s) {
    const h = Math.cos(-s),
      e = Math.sin(-s),
      o = s >= 0 ? this.heel[t] : this.toe[t],
      i = o.y * e + o.z * h;
    return o.z - i;
  }
  armDir(t, s, h, e, o, i, n, a, y, l = 0) {
    const c = this.arms[s];
    this.fkTo(t, c.b1);
    const f = this.wq[V[c.b1]],
      p = this.tq3.copy(f).invert(),
      u = this.tv.set(h, e, o).normalize().applyQuaternion(p),
      w = this.tv2.set(i, n, a).applyQuaternion(p),
      q = t.q[c.b1].setFromUnitVectors(c.r1, u),
      g = this.tv3.set(0, 0, 1).applyQuaternion(q);
    if (
      (g.addScaledVector(u, -g.dot(u)),
      w.addScaledVector(u, -w.dot(u)),
      g.lengthSq() > 1e-8 && w.lengthSq() > 1e-8)
    ) {
      (g.normalize(), w.normalize());
      const R =
        Math.atan2(this.tv4.crossVectors(g, w).dot(u), g.dot(w)) + l * k;
      (this.tq2.setFromAxisAngle(u, R), q.premultiply(this.tq2));
    }
    t.q[c.b2].setFromAxisAngle(c.h, y * k);
  }
  armIK(t, s, h, e, o, i, n, a) {
    const y = this._TA || (this._TA = new m()),
      l = this._PA || (this._PA = new m());
    (y.set(h, e, o),
      l.set(i, n, a).normalize(),
      this.ik(t, this.arms[s], y, l));
  }
  chestPt(t, s, h, e, o) {
    return (
      this.fkTo(t, d.chest),
      o.set(s, h, e).applyQuaternion(this.wq[d.chest]).add(this.wp[d.chest])
    );
  }
  hand(t, s, h, e, o) {
    this.qe(t.q[s > 0 ? d.handL : d.handR], h, e * s, o * s);
  }
  posture(t, s, h = {}) {
    const e = this.st,
      o = this.seed,
      i = h.lean ?? 0,
      n = e.sway ?? 1,
      a = e.hunch + i * 0.6,
      y = e.chestHunch + i * 0.4,
      l = Math.sin(s * 1.7 + o) * (h.breath ?? 1),
      c = I(s * 0.6, o) * 2.5 * n,
      f = I(s * 0.45, o + 4) * 3 * n;
    (this.qe(
      t.q[d.spine],
      a * 0.55 + (h.sp ?? 0),
      (h.syaw ?? 0) + f * 0.4,
      c * 0.5 + (h.sr ?? 0) + (e.leanR ?? 0) * 0.6,
    ),
      this.qe(
        t.q[d.chest],
        y + a * 0.45 + l * 1.2 + (h.cp ?? 0),
        (h.cyaw ?? 0) + f * 0.6,
        c * 0.5 + (h.cr ?? 0) + (e.leanR ?? 0) * 0.4,
      ));
    const p = this.twitchAt(s, h.twitch ?? e.twitch ?? 0),
      u = -(a + y + i * 0.3) * (h.comp ?? e.comp ?? 0.4),
      w = I(s * 0.35, o + 9) * 6 * (h.loll ?? 1);
    let q = e.headPitch + u + w * 0.5 + p.p + (h.hp ?? 0);
    const g = e.headRoll + w * 0.6 + p.r + (h.hr ?? 0);
    let R =
      (e.headYaw ?? 0) +
      I(s * 0.3, o + 2) * 8 * (h.loll ?? 1) +
      p.y +
      (h.hy ?? 0);
    const _ = this.look ? this.lookW * (h.lookK ?? 1) : 0;
    if (_ > 0) {
      this.fkTo(t, d.neck);
      const L = this.tv.copy(this.look).sub(this.wp[d.neck]);
      ((L.y -= 0.14),
        L.applyQuaternion(this.tq3.copy(this.wq[d.chest]).invert()));
      const W = x(Math.atan2(L.x, L.z) / k, -70, 70),
        v =
          x(Math.atan2(-L.y, Math.hypot(L.x, L.z)) / k, -40, 45) -
          0.3 * (e.neckFwd ?? 8);
      ((q = J(q, v + e.headPitch * 0.25 + p.p + w * 0.3 + (h.hp ?? 0), _)),
        (R = J(R, W + p.y + I(s * 0.3, o + 2) * 3 + (h.hy ?? 0), _)));
    }
    (this.qe(t.q[d.neck], q * 0.45 + (e.neckFwd ?? 8), R * 0.4, g * 0.45),
      this.qe(
        t.q[d.head],
        q * 0.55 - (e.neckFwd ?? 8) * 0.7,
        R * 0.6,
        g * 0.55,
      ));
    const A =
      e.jaw +
      (h.jaw ?? 0) +
      Math.max(0, Math.sin(s * 0.9 + o * 3)) * 0.05 +
      p.j;
    this.qe(t.q[d.jaw], x(A, 0, 0.75) / k, 0, 0);
    const D = e.shoulderDrop ?? 0;
    (this.qe(t.q[d.shoulderL], 0, -4, -6 + (h.shrug ?? 0)),
      this.qe(
        t.q[d.shoulderR],
        0,
        4,
        6 + (e.dropR ?? D) * 40 - (h.shrug ?? 0),
      ));
  }
  twitchAt(t, s) {
    const h = this.twitch;
    if (s <= 0) return ((h.j = 0), { p: 0, y: 0, r: 0, j: 0 });
    for ((t < h.at - 1e-6 || t > h.next + 5) && (h.next = t); t >= h.next;) {
      ((h.p0 = h.p), (h.y0 = h.y), (h.r0 = h.r), (h.at = h.next), h.i++);
      const i = M(Math.sin((h.i + this.seed * 13) * 12.9898) * 43758.5453),
        n = M(i * 97.13 + 0.17),
        a = M(n * 61.7 + 0.29),
        l = M(a * 17.3 + 0.61) > 0.55;
      ((h.p = (i - 0.5) * (l ? 38 : 12) * s),
        (h.y = (n - 0.5) * (l ? 55 : 14) * s),
        (h.r = (a - 0.5) * (l ? 40 : 10) * s),
        (h.next = h.at + 0.12 + (n * (l ? 0.9 : 0.5)) / Math.max(s, 0.3)));
    }
    const e = z(0, 0.06, t - h.at),
      o = this._tw || (this._tw = { p: 0, y: 0, r: 0, j: 0 });
    return (
      (o.p = J(h.p0, h.p, e)),
      (o.y = J(h.y0, h.y, e)),
      (o.r = J(h.r0, h.r, e)),
      (o.j = (1 - e) * 0.12 * s),
      o
    );
  }
  gait(t, s, h, e) {
    const o = this.st,
      i = this.J,
      n = s.duty,
      a = s.cadence * 0.5,
      l = (s.v * h * n) / a,
      c = this.cyc,
      f = this.legLen * 0.985,
      p = l * 0.5 + 0.012,
      u =
        this.ankleY +
        Math.sqrt(Math.max(0.01, f * f - p * p)) +
        (i.hips[1] - i.thighL[1]);
    let w = Math.min(i.hips[1] - s.crouch * x(h, 0.4, 1.2), u);
    const q = c - n * 0.5;
    w += s.bob * h * Math.cos(4 * Math.PI * q) - s.bob * 0.5 * h;
    const g =
        s.drag === "R" || o.shamble.drag === "R" ? -1 : s.drag === "L" ? 1 : 0,
      R = g < 0 ? M(c + 0.5) : M(c),
      _ = g ? (s.dip ?? 0) * h * Math.sin(Math.PI * x(R / n)) : 0;
    w -= _;
    const A = s.sway * Math.cos(2 * Math.PI * q) + (g ? -g * _ * 0.4 : 0),
      D = -(s.yaw ?? 5) * Math.cos(2 * Math.PI * c) * h,
      L = (s.roll ?? 4) * Math.sin(2 * Math.PI * q) * h + (g ? g * _ * 90 : 0),
      W = (s.lean ?? 0) * x(h, 0.3, 1.2);
    (t.hp.set(this.hips0.x + A, w, this.hips0.z + (s.hipZ ?? 0)),
      this.qe(t.q[d.hips], W, D, L));
    for (const v of [1, -1]) {
      const B = M(c + (v > 0 ? 0 : 0.5)),
        N = g === v,
        rt =
          v * (s.width ?? 0.1) +
          (v > 0 ? i.footL[0] - 0.1 : i.footR[0] + 0.1) * 0,
        ct = (s.toeOut ?? 0.08) * v * (o.toeIn ? -1 : 1);
      let X, C, E;
      if (B < n) {
        const j = B / n;
        ((X = l * 0.5 - l * j),
          (C = 0),
          (E =
            (s.heel ?? 0.12) * (1 - z(0, 0.22, j)) * h -
            (s.toeOff ?? 0.25) * z(0.72, 1, j) * h),
          N && (E = -0.1 * z(0.6, 1, j)));
      } else {
        const j = (B - n) / (1 - n),
          ft = j * j * (3 - 2 * j);
        ((X = -l * 0.5 + l * ft),
          (C =
            (N ? s.lift[1] : s.lift[0]) *
            Math.pow(Math.sin(Math.PI * j), 0.9) *
            x(h, 0.3, 1.3)),
          (E = J(
            -(s.toeOff ?? 0.25) * h,
            (s.heel ?? 0.12) * h,
            z(0.25, 0.9, j),
          )),
          N &&
            (E =
              J(-0.1, -0.55, z(0, 0.35, j)) * (1 - z(0.8, 1, j)) +
              -0.1 * z(0.8, 1, j)));
      }
      const lt = this.ankleFor(v, E) + C,
        pt = i.footL[2] + X + this.ankleShift(v, E) * (B < n ? 1 : 0.5);
      this.leg(t, v, rt, lt, pt, E, ct);
    }
    return W;
  }
  stance(t, s, h, e = 0, o = 0) {
    const i = this.st,
      n = i.shamble.toeOut ?? 0.08,
      a = i.toeIn ? -1 : 1;
    (this.leg(t, 1, s[0], this.ankleFor(1, e) + (s[2] ?? 0), s[1], e, n * a),
      this.leg(
        t,
        -1,
        h[0],
        this.ankleFor(-1, o) + (h[2] ?? 0),
        h[1],
        o,
        -n * a,
      ));
  }
  dangle(t, s, h, e, o, i = 0) {
    const n = h * k,
      a = e * k,
      y = s * Math.sin(a),
      l = -Math.cos(a) * Math.cos(n),
      c = Math.cos(a) * Math.sin(n) + i;
    this.armDir(t, s, y, l, c, 0, 0.3, 1, o);
  }
  evalState(t) {
    const s = this.pose,
      h = this.state,
      e = this.t;
    this.st;
    const o = this.seed,
      i = e + o * 7.3 + this.cycT0();
    if ((this.begin(s), T[h])) return T[h].fn.call(this, s, e, i, t);
    if (h === "idle") return this.sIdle(s, i);
    if (h === "shamble" || h === "reach")
      return this.sWalk(s, i, h === "reach");
    if (h === "run") return this.sRun(s, i);
    if (h === "emerge") return this.sEmerge(s, i);
    if (h === "attack") return this.sAttack(s, e, i);
    if (h.startsWith("stagger_")) return this.sStagger(s, e, i, h.slice(8));
    if (h === "grab_hold") return this.sGrab(s, e, i);
    if (h.startsWith("die_")) return this.sDie(s, e, i, h.slice(4));
  }
  cycT0() {
    return 0;
  }
  sIdle(t, s) {
    const h = this.st,
      e = this.seed,
      o = I(s * 0.25, e + 1) * 0.035 * (h.sway ?? 1),
      i =
        this.J.hips[1] -
        (h.idleCrouch ?? 0.035) -
        Math.abs(o) * 0.25 +
        Math.sin(s * 1.7 + e) * 0.004;
    (t.hp.set(o, i, this.J.hips[2]),
      this.qe(t.q[d.hips], 2, I(s * 0.2, e + 3) * 4, -o * 120),
      this.posture(t, s, { lean: 0 }));
    const n = h.idleWidth ?? 0.12;
    this.stance(t, [n, this.J.footL[2] + 0.05], [-n, this.J.footR[2] - 0.07]);
    const a = I(s * 0.5, e + 5) * 4;
    this.restArms(t, s, a, -a * 0.7, 0, 0);
  }
  restArms(t, s, h, e, o, i) {
    const n = this.st;
    if (n.claws) return this.clawArms(t, s, h, e);
    const a = ((n.armSpread ?? 0.12) / k) * 0.55;
    if (
      (this.dangle(
        t,
        1,
        5 + h + i * 0.3,
        a + 5,
        (n.elbow ?? 0.2) * 55 + 8 + o * 6,
      ),
      this.hand(t, 1, 12 + o * 8, 0, 0),
      n.heldR)
    ) {
      const y = Math.sin(s * 7.3) * 3 + Math.sin(s * 13.1) * 2;
      (this.armDir(
        t,
        -1,
        0.1,
        -0.92,
        0.3 + e * 0.004,
        0.35,
        0.35,
        1,
        n.heldR + y,
        0,
      ),
        this.hand(t, -1, -35 + y * 2, -15, 0));
    } else
      (this.dangle(
        t,
        -1,
        3 + e + i * 0.3,
        a + 3 + (n.dropArmR ?? 0),
        (n.elbowR ?? n.elbow ?? 0.2) * 45 + 6 - o * 4,
      ),
        this.hand(t, -1, 8 - o * 8, 0, 0));
  }
  clawArms(t, s, h, e) {
    const o = this.st.claws,
      i = this.seed,
      n = this._ca0 || (this._ca0 = new m()),
      a = this._cb0 || (this._cb0 = new m()),
      y = this._ca1 || (this._ca1 = new m()),
      l = this._cb1 || (this._cb1 = new m()),
      c = this._cx0 || (this._cx0 = new m()),
      f = this._cx1 || (this._cx1 = new m()),
      p = Math.cos(40 * k),
      u = Math.sin(40 * k);
    for (const w of [1, -1]) {
      const q = Math.floor(s * 0.9 + w * 0.37 + i),
        g =
          M(Math.sin((q + i * 3.1 + w) * 12.9898) * 43758.5) > 0.72
            ? Z(M(s * 0.9 + w * 0.37 + i) / 0.9, 0.05)
            : 0,
        R =
          Math.sin(s * 8.3 + w * 1.9 + i) * 1.6 +
          Math.sin(s * 13.7 + w * 0.7) * 1.1 +
          g * 9,
        _ = (w > 0 ? h : e) * 0.004;
      (this.armDir(
        t,
        w,
        w * o.out,
        -0.95,
        o.fwd + _,
        -w * 0.22,
        0.3,
        1,
        o.elbow + R + (w < 0 ? o.asym : 0),
        0,
      ),
        n.set(w * u, -p, 0),
        a.set(w * p, u, 0),
        c.crossVectors(n, a));
      const A = (o.droop + R * 2.2 - g * 20) * k;
      (y.set(-w * 0.12, -Math.sin(A), Math.cos(A)).normalize(),
        l.set(0, Math.cos(A), Math.sin(A)),
        l.addScaledVector(y, -l.dot(y)).normalize(),
        f.crossVectors(y, l),
        this.m1.makeBasis(n, a, c),
        this.m2.makeBasis(y, l, f).multiply(this.m1.transpose()));
      const D = this.arms[w];
      this.fkTo(t, D.b2);
      const L = w > 0 ? d.handL : d.handR;
      t.q[L].copy(this.wq[D.b2])
        .invert()
        .multiply(this.tq.setFromRotationMatrix(this.m2));
    }
  }
  sWalk(t, s, h) {
    const e = this.st,
      o = e.shamble,
      i = this.gk(this.state),
      n = this.gait(t, o, i, s),
      a = this.cyc;
    this.posture(t, s, {
      lean: (o.lean ?? 0) + (h ? 6 : 0),
      loll: 0.7,
      cr: Math.sin(2 * Math.PI * (a - 0.25)) * 3,
    });
    const y = (o.yaw ?? 5) * Math.cos(2 * Math.PI * a) * i;
    (this.tq.setFromAxisAngle(
      this._Y || (this._Y = new m(0, 1, 0)),
      y * 1.6 * k,
    ),
      t.q[d.chest].premultiply(this.tq));
    const l = Math.sin(4 * Math.PI * (a - o.duty * 0.5)) * 3;
    if (
      (this.tq.setFromAxisAngle(this._X || (this._X = new m(1, 0, 0)), l * k),
      t.q[d.head].multiply(this.tq),
      h)
    ) {
      const c = Math.sin(4 * Math.PI * a) * 0.025,
        f = this.tv6;
      for (const p of [1, -1]) {
        const u = Math.sin(2 * Math.PI * (a + (p > 0 ? 0.5 : 0))) * 0.04;
        (this.chestPt(t, p * 0.16, 0.12 + c + u * 0.5, 0.52 + u, f),
          this.armIK(t, p, f.x, f.y, f.z, p * 0.5, -1, -0.3),
          this.hand(t, p, -8 + Math.sin(s * 3 + p) * 6, -10, 0));
      }
    } else {
      const c = (o.armSwing ?? 14) * i,
        f = Math.sin(2 * Math.PI * (a + 0.5)) * c,
        p = Math.sin(2 * Math.PI * a) * c * (e.deadArmR ? 0.5 : 1),
        u = Math.sin(2 * Math.PI * (a - 0.1));
      this.restArms(t, s, f, p, u, n);
    }
  }
  sRun(t, s) {
    const h = this.st,
      e = h.run,
      o = this.gk("run");
    this.gait(t, e, o, s);
    const i = this.cyc;
    this.posture(t, s, {
      lean: e.lean * 0.5,
      comp: 0.9,
      loll: 0.3,
      jaw: 0.25,
      cr: Math.sin(2 * Math.PI * (i - 0.25)) * 6,
      hp: -8,
    });
    const n = (e.yaw ?? 8) * Math.cos(2 * Math.PI * i);
    if (
      (this.tq.setFromAxisAngle(
        this._Y || (this._Y = new m(0, 1, 0)),
        n * 1.2 * k,
      ),
      t.q[d.chest].premultiply(this.tq),
      h.runArms === "pump")
    )
      for (const l of [1, -1]) {
        const c = Math.cos(2 * Math.PI * (i - 0.06)) * (l > 0 ? -1 : 1);
        (this.dangle(t, l, -8 + c * 46 * x(o, 0.5, 1.2), 13, 86 - c * 20),
          this.hand(t, l, -18, -8, 0));
      }
    else
      for (const l of [1, -1]) {
        const c = 2 * Math.PI * (i + (l > 0 ? 0.5 : 0)),
          f = Math.sin(c);
        (this.armDir(
          t,
          l,
          l * 0.35,
          -0.35 + f * 0.4,
          0.8 + f * 0.25,
          0,
          0.6,
          0.4,
          40 - f * 25,
        ),
          this.hand(t, l, -15, -5, 0));
      }
    const a = Math.floor(i);
    if (M(Math.sin((a + this.seed * 7) * 12.9898) * 43758.5453) > 0.7) {
      const l = M(i),
        c = Math.sin(Math.PI * x(l / 0.4)) * 10;
      (this.tq.setFromAxisAngle(this._X || (this._X = new m(1, 0, 0)), c * k),
        t.q[d.spine].multiply(this.tq));
    }
  }
  sEmerge(t, s) {
    this.st;
    const h = this.gaitParams("emerge"),
      e = this.speed;
    this.gait(t, h, e, s);
    const o = this.cyc;
    (this.posture(t, s, {
      lean: 12,
      comp: 0.95,
      loll: 0.3,
      jaw: 0.3,
      hp: -20,
      shrug: 6,
    }),
      this.tq.setFromAxisAngle(
        this._Y || (this._Y = new m(0, 1, 0)),
        (-14 + Math.sin(2 * Math.PI * o) * 6) * k,
      ),
      t.q[d.chest].premultiply(this.tq));
    const i = this.tv6;
    for (const n of [1, -1]) {
      const a = Math.sin(2 * Math.PI * (o + (n > 0 ? 0.5 : 0))) * 0.08;
      (this.chestPt(
        t,
        n * 0.2,
        0 + a * 0.5 + (n > 0 ? 0.1 : -0.05),
        0.48 + a,
        i,
      ),
        this.armIK(t, n, i.x, i.y, i.z, n * 0.6, -1, -0.2),
        this.hand(t, n, -10, -10, 0));
    }
  }
  sAttack(t, s, h) {
    const e = this.st,
      o = this.J,
      i = z(0, 0.3, s) * (1 - z(0.3, 0.42, s)),
      n = z(0.28, 0.45, s) * (1 - z(0.6, 0.95, s)),
      a = z(0.42, 0.62, s) * (1 - z(0.7, 0.95, s)),
      y = z(0.36, 0.45, s) * (1 - z(0.5, 0.7, s)),
      l = z(0.26, 0.42, s) * (1 - z(0.75, 0.95, s)),
      c = o.hips[1] - 0.05 - n * 0.09 + i * 0.02;
    (t.hp.set(0, c, o.hips[2] - i * 0.06 + n * 0.2),
      this.qe(t.q[d.hips], n * 9 - i * 5, i * 6 - n * 4, 0),
      this.posture(t, h, {
        sp: -i * 12 + n * 16,
        cp: -i * 9 + n * 9,
        comp: 0.85,
        loll: 0.15,
        jaw: i * 0.4 - y * (e.jaw + 0.1) + a * 0.15,
        hp: -i * 14 + y * 14,
        hr: -e.headRoll * 0.45 * (i + n),
        twitch: 0,
        shrug: i * 14,
      }));
    const f =
      Math.sin(Math.PI * x((s - 0.26) / 0.16)) * 0.06 * (s < 0.42 ? 1 : 0);
    this.stance(
      t,
      [0.11, o.footL[2] + 0.12 + l * 0.2, f],
      [-0.12, o.footR[2] - 0.14],
    );
    const p = this.tv6;
    for (const u of [1, -1]) {
      const w = u * (0.3 * i + (0.17 - 0.09 * a) * (1 - i)),
        q = 0.36 * i + (0.1 - 0.2 * a) * (1 - i),
        g = 0.05 * i + (0.3 + 0.42 * n - 0.2 * a) * (1 - i);
      (this.chestPt(t, w, q, g, p),
        this.armIK(t, u, p.x, p.y, p.z, u * 0.9, -0.1 + i * 0.7, -0.5),
        this.hand(t, u, -25 * n + 20 * a, -12, 0));
    }
  }
  sStagger(t, s, h, e) {
    this.st;
    const o = this.J,
      i = Z(s, 0.09) * (1 - z(0.35, 0.5, s) * 0),
      n = Z(s - 0.03, 0.1);
    let a = 0,
      y = 0,
      l = 0,
      c = 0,
      f = 0,
      p = 0,
      u = 0;
    (e === "front"
      ? ((a = -0.07 * i), (l = -18 * i), (p = -26 * n))
      : e === "back"
        ? ((a = 0.07 * i), (l = 20 * i), (p = 22 * n))
        : e === "left"
          ? ((y = -0.06 * i), (c = 16 * i), (f = 14 * i), (u = 24 * n))
          : ((y = 0.06 * i), (c = -16 * i), (f = -14 * i), (u = -24 * n)),
      t.hp.set(y, o.hips[1] - 0.04 - i * 0.03, o.hips[2] + a),
      this.qe(t.q[d.hips], l * 0.3, f * 0.3, c * 0.3),
      this.posture(t, h, {
        sp: l * 0.6,
        cp: l * 0.4,
        sr: c * 0.5,
        cr: c * 0.5,
        syaw: f * 0.5,
        cyaw: f * 0.5,
        hp: p,
        hr: u,
        jaw: 0.25 * i,
        twitch: 0,
      }),
      this.stance(t, [0.12, o.footL[2] + 0.04], [-0.12, o.footR[2] - 0.05]));
    const w = e === "front" ? 1 : e === "back" ? -0.6 : 0.3;
    for (const q of [1, -1]) {
      const g = e === "left" ? -1 : e === "right" ? 1 : 0;
      (this.dangle(
        t,
        q,
        8 + 45 * i * w,
        10 + 25 * i * (1 + g * q * 0.8),
        20 + 30 * i,
      ),
        this.hand(t, q, 10, 0, 0));
    }
  }
  sGrab(t, s, h) {
    const e = this.st,
      o = this.J,
      i = 0.72 + M(this.seed * 0.31) * 0.2,
      n = M(s / i),
      a = n < 0.16 ? z(0, 0.16, n) : 1 - z(0.16, 0.8, n),
      y = Math.sin(s * 23) * 0.014 + Math.sin(s * 17.3) * 0.009;
    (t.hp.set(y * 0.5, o.hips[1] - 0.07, o.hips[2] + 0.07 + a * 0.03),
      this.qe(t.q[d.hips], 8, 0, y * 60),
      this.posture(t, h, {
        sp: 8 + a * 5,
        cp: 6 + a * 8,
        comp: 0.9,
        loll: 0.1,
        twitch: 0,
        hp: -14 + a * 24,
        hr: -e.headRoll * 0.4,
        jaw: 0.42 * (1 - a) - e.jaw * a * 0.9,
        shrug: 10 + a * 6,
      }),
      this.tq.setFromAxisAngle(
        this._X || (this._X = new m(1, 0, 0)),
        a * 22 * k,
      ),
      t.q[d.neck].multiply(this.tq),
      this.stance(t, [0.13, o.footL[2] + 0.12], [-0.13, o.footR[2] - 0.08]));
    const l = this.tv6;
    for (const c of [1, -1])
      (this.chestPt(t, c * (0.13 + y), 0.04 + y - a * 0.02, 0.62 + a * 0.03, l),
        this.armIK(t, c, l.x, l.y, l.z, c * 1, 0.25, -0.15),
        this.hand(t, c, -30, -35, 10));
  }
  sDie(t, s, h, e) {
    this.st;
    const o = this.J,
      i = this.deathSide,
      n = mt[this.def.kind]?.[e] || wt[e],
      a = this._dv || (this._dv = {});
    gt(n, s, a);
    const y = o.hips[1];
    (t.hp.set(a.hx * i, y + a.hy, o.hips[2] + a.hz),
      this.qe(t.q[d.hips], a.hp, a.hyaw * i, a.hr * i),
      this.qe(t.q[d.spine], a.sp, a.syaw * i, a.sr * i),
      this.qe(t.q[d.chest], a.cp, a.cyaw * i, a.cr * i),
      this.qe(t.q[d.neck], a.np, (a.nyaw + a.dyaw * 0.45) * i, a.nr * i),
      this.qe(t.q[d.head], a.dp, a.dyaw * 0.55 * i, a.dr * i),
      this.qe(t.q[d.jaw], a.jaw, 0, 0),
      this.qe(t.q[d.shoulderL], 0, 0, -4),
      this.qe(t.q[d.shoulderR], 0, 0, 4));
    for (const l of [1, -1]) {
      const c = l * i > 0 ? "l" : "r",
        f = l > 0 ? d.thighL : d.thighR,
        p = l > 0 ? d.shinL : d.shinR,
        u = l > 0 ? d.footL : d.footR;
      (this.qe(
        t.q[f],
        -a["t" + c + "f"],
        a["t" + c + "y"] * l,
        a["t" + c + "a"] * l,
      ),
        this.qe(t.q[p], a["k" + c], 0, 0),
        this.qe(t.q[u], -a["f" + c], 0, 0));
    }
    for (const l of [1, -1]) {
      const c = l * i > 0 ? "l" : "r",
        f = this.arms[l],
        p = a["a" + c + "f"] * k,
        u = a["a" + c + "a"] * k,
        w = this.tv
          .set(
            l * Math.sin(u),
            -Math.cos(u) * Math.cos(p),
            Math.cos(u) * Math.sin(p),
          )
          .normalize();
      (t.q[f.b1].setFromUnitVectors(f.r1, w),
        this.tq2.setFromAxisAngle(w, a["a" + c + "t"] * k * l),
        t.q[f.b1].premultiply(this.tq2),
        t.q[f.b2].setFromAxisAngle(f.h, a["e" + c] * k),
        this.hand(t, l, a.hand, 0, 0));
    }
  }
  groundDead(t, s, h) {
    if (h > 0)
      for (let e = 0; e < 3; e++) {
        this.clampFloor(t, h, this.torso);
        for (const o of this.chains) this.settleChain(t, o, h);
      }
    this.clampFloor(t, s, null);
  }
  ground(t, s) {
    if (s > 0)
      for (let h = 0; h < 3; h++) {
        this.clampFloor(t, s, this.torso);
        for (const e of this.chains) this.settleChain(t, e, s);
      }
    this.clampFloor(t, 0, null);
  }
  lowOf(t, s, h, e) {
    let o = 1e9;
    for (const i of this.vols) {
      if (s && !s.includes(i.bone)) continue;
      const n = this.wq[i.bone],
        a = this.wp[i.bone],
        y = this.tv.copy(i.a).applyQuaternion(n).add(a),
        l = this.tv2.copy(i.b).applyQuaternion(n).add(a),
        c = y.y < l.y ? y : l,
        f = c.y - i.r * (i.zone === "head" ? 0.85 : 0.72);
      f < o && ((o = f), e && e.copy(c));
    }
    if (h)
      for (const i of [1, -1]) {
        if (h !== !0 && h !== i) continue;
        const n = i > 0 ? d.footL : d.footR,
          a = this.wq[n],
          y = this.wp[n];
        for (const l of [this.heel[i], this.toe[i]]) {
          const c = this.tv3.copy(l).applyQuaternion(a).add(y);
          c.y < o && ((o = c.y), e && e.copy(c));
        }
      }
    return o;
  }
  clampFloor(t, s, h) {
    this.fk(t);
    const e = this.lowOf(t, h, !h, null);
    h || (this.lowest = e);
    let o = 0;
    if ((e < 0 && (o = -e), s > 0 && e > 0 && (o = -e * s), o !== 0)) {
      t.hp.y += o;
      for (let i = 0; i < S; i++) this.wp[i].y += o;
    }
  }
  settleChain(t, s, h) {
    this.fk(t);
    const e = this._low || (this._low = new m()),
      o = this.lowOf(t, s.bones, s.feet, e);
    if (Math.abs(o) < 0.002) return;
    const i = this.wp[s.root],
      n = this.tv4.copy(e).sub(i),
      a = n.length();
    if (a < 0.05) return;
    const y = Math.acos(x(-n.y / a, -1, 1)),
      l = Math.acos(x(-(n.y - o) / a, -1, 1)),
      c = x(y - l, -0.7, 0.7) * h,
      f = this.tv5.crossVectors(n, this.tv6.set(0, -1, 0));
    if (f.lengthSq() < 1e-8) return;
    f.normalize();
    const p = this.tq.setFromAxisAngle(f, c),
      u = this.wq[V[s.root]];
    (this.tq2.copy(u).invert().multiply(p).multiply(u),
      t.q[s.root].premultiply(this.tq2));
  }
}
