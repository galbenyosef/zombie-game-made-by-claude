// assets__index-DaQlAVPp 12 — items
// Lines 38775-38987 of readable/assets__index-DaQlAVPp.pretty.js (statement-aligned).
class bS {
  constructor(e) {
    ((this.game = e),
      (this.items = []),
      (this.current = null),
      (this.enabled = !0),
      (this._p = new P()),
      (this._d = new P()),
      (this._f = new P()),
      (this.onChange = null));
  }
  add(e) {
    return (
      (e.radius ??= 1.6),
      (e.cone ??= 0.45),
      (e.prompt ??= "use"),
      (e.enabled ??= () => !0),
      (e.remove = () => {
        const t = this.items.indexOf(e);
        (t >= 0 && this.items.splice(t, 1),
          this.current === e && (this.current = null));
      }),
      this.items.push(e),
      e
    );
  }
  update() {
    const e = this.game;
    let t = null,
      n = -1;
    if (this.enabled && !e.player.frozen) {
      const i = e.player.eyePos,
        s = e.player.forward(this._f);
      for (const a of this.items) {
        if (a.enabled && !a.enabled(e)) continue;
        const o = typeof a.pos == "function" ? a.pos() : a.pos;
        (this._p.set(o[0], o[1], o[2]), this._d.copy(this._p).sub(i));
        const l = this._d.length();
        if (l > a.radius) continue;
        this._d.divideScalar(Math.max(l, 1e-4));
        const c = this._d.dot(s);
        if (c < 1 - a.cone) continue;
        const h = c * 2 - l / a.radius;
        h > n && ((n = h), (t = a));
      }
    }
    if (
      (t !== this.current &&
        ((this.current = t), this.onChange && this.onChange(t)),
      this.current && e.input.consume("KeyE"))
    ) {
      const i = this.current;
      i.onUse && i.onUse(e);
    }
  }
}
const Ho = (r, e = 0, t = 1) => (r < e ? e : r > t ? t : r),
  Jc = {
    linear: (r) => r,
    in: (r) => r * r,
    out: (r) => 1 - (1 - r) * (1 - r),
    inout: (r) => (r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2),
    smooth: (r) => r * r * (3 - 2 * r),
    slow: (r) => r * r * r * (r * (r * 6 - 15) + 10),
  };
class MS {
  constructor(e) {
    ((this.game = e), (this.items = []), (this.cancelled = !1));
  }
  wait(e) {
    return new Promise((t) => this.items.push({ kind: "wait", t: e, res: t }));
  }
  until(e, t = 1 / 0) {
    return new Promise((n) =>
      this.items.push({ kind: "until", pred: e, t, res: n }),
    );
  }
  tween(e, t, n, i, s = "inout") {
    const a = e[t],
      o = Jc[s] || Jc.inout;
    return new Promise((l) =>
      this.items.push({
        kind: "tween",
        obj: e,
        prop: t,
        from: a,
        to: n,
        secs: i,
        t: 0,
        f: o,
        res: l,
      }),
    );
  }
  tweens(e, t, n = "inout") {
    return Promise.all(e.map(([i, s, a]) => this.tween(i, s, a, t, n)));
  }
  during(e, t) {
    return new Promise((n) =>
      this.items.push({ kind: "during", secs: e, t: 0, fn: t, res: n }),
    );
  }
  update(e) {
    for (let t = this.items.length - 1; t >= 0; t--) {
      const n = this.items[t];
      if (n.kind === "wait")
        ((n.t -= e), n.t <= 0 && (this.items.splice(t, 1), n.res()));
      else if (n.kind === "until") {
        let i = !1;
        try {
          i = n.pred();
        } catch (s) {
          console.error(s);
        }
        ((n.t -= e),
          i
            ? (this.items.splice(t, 1), n.res(!0))
            : n.t <= 0 && (this.items.splice(t, 1), n.res(!1)));
      } else if (n.kind === "tween") {
        n.t += e;
        const i = Ho(n.t / n.secs);
        ((n.obj[n.prop] = n.from + (n.to - n.from) * n.f(i)),
          i >= 1 && (this.items.splice(t, 1), n.res()));
      } else if (n.kind === "during") {
        n.t += e;
        const i = Ho(n.t / n.secs);
        (n.fn(i, e), i >= 1 && (this.items.splice(t, 1), n.res()));
      }
    }
  }
  clear() {
    for (const e of this.items) e.res && e.res(!1);
    this.items.length = 0;
  }
}
function CS(r, e, t = {}) {
  const n = r.camera,
    i = e[e.length - 1].t;
  let s = 0;
  const a = e.map((x) => new P(...x.p)),
    o = e.map((x) => (x.look ? new P(...x.look) : null)),
    l = new bh(a, !1, "catmullrom", 0.5),
    c = new P(),
    h = new Ve(),
    d = new P(0, 1, 0),
    u = (x, m) => {
      const g = e[x];
      return (
        o[x]
          ? (h.lookAt(a[x], o[x], d), m.setFromRotationMatrix(h))
          : m.setFromEuler(
              new rn(
                ((g.pitch ?? 0) * Math.PI) / 180,
                ((g.yaw ?? 0) * Math.PI) / 180,
                ((g.roll ?? 0) * Math.PI) / 180,
                "YXZ",
              ),
            ),
        o[x] &&
          g.roll &&
          m.multiply(
            new Pt().setFromAxisAngle(new P(0, 0, 1), (g.roll * Math.PI) / 180),
          ),
        m
      );
    },
    f = e.map((x, m) => u(m, new Pt())),
    p = Jc[t.ease || "smooth"];
  return new Promise((x) => {
    const m = (g) => {
      let y = 0;
      for (; y < e.length - 2 && g > e[y + 1].t;) y++;
      const w = e[y],
        _ = e[y + 1],
        b = Ho((g - w.t) / Math.max(1e-4, _.t - w.t)),
        S = t.ease === "linear" ? b : p(b);
      (l.getPoint(Ho((y + S) / (e.length - 1)), c),
        n.position.copy(c),
        n.quaternion.copy(f[y]).slerp(f[y + 1], S));
      const E = w.fov ?? 72,
        v = _.fov ?? E,
        T = E + (v - E) * S;
      Math.abs(n.fov - T) > 0.01 && ((n.fov = T), n.updateProjectionMatrix());
    };
    ((r.camCtl = (g) => {
      ((s += g),
        m(Math.min(s, i)),
        s >= i && (t.hold === !1 && (r.camCtl = null), x()));
    }),
      r.camCtl(0));
  });
}
class SS {
  constructor() {
    this.m = new Map();
  }
  on(e, t) {
    return (
      (this.m.get(e) || this.m.set(e, []).get(e)).push(t),
      () => this.off(e, t)
    );
  }
  off(e, t) {
    const n = this.m.get(e);
    if (n) {
      const i = n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    }
  }
  emit(e, ...t) {
    for (const n of [...(this.m.get(e) || [])]) n(...t);
  }
}
