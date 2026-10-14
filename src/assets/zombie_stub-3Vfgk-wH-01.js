// assets/zombie_stub-3Vfgk-wH 01 — position
// Lines 1-117 of readable/assets/zombie_stub-3Vfgk-wH.pretty.js (statement-aligned).
import {
  G as z,
  M as G,
  c as u,
  a1 as b,
  $ as W,
  V as g,
} from "./index-DaQlAVPp.js";
const o = g,
  y = {
    lanky: { h: 1.92, w: 0.19, c: 7305826 },
    brute: { h: 1.82, w: 0.3, c: 6971224 },
    gown: { h: 1.66, w: 0.16, c: 9080968 },
  };
function createZombieStub(E, { kind: S = "lanky" } = {}) {
  const t = y[S] || y.lanky,
    e = new z(),
    f = new G({ color: t.c, roughness: 0.8 }),
    w = new u(new b(t.w, t.h - t.w * 2 - 0.3, 6, 12), f);
  ((w.position.y = t.h * 0.5 - 0.08), (w.castShadow = !0));
  const x = new u(new W(0.12, 12, 10), f);
  x.position.y = t.h - 0.13;
  const n = new u(new b(0.05, 0.6, 4, 8), f),
    h = n.clone();
  (n.position.set(-t.w - 0.08, t.h * 0.62, 0.15),
    h.position.set(t.w + 0.08, t.h * 0.62, 0.15),
    (n.rotation.x = h.rotation.x = -1.1));
  const a = new z();
  return (
    a.add(w, x, n, h),
    e.add(a),
    {
      root: e,
      height: t.h,
      state: "idle",
      time: 0,
      dead: !1,
      onEvent: null,
      _t: 0,
      _fall: 0,
      _fallDir: 1,
      _hit: !1,
      setState(i) {
        i !== this.state &&
          ((this.state = i),
          (this._t = 0),
          i.startsWith("die") &&
            ((this.dead = !1),
            (this._fall = 0),
            (this._fallDir = i === "die_back" || i === "die_head" ? -1 : 1)));
      },
      update(i, l = {}) {
        ((this.time += i), (this._t += i));
        const c = l.speed ?? 0.5;
        if (this.state.startsWith("die")) {
          ((this._fall = Math.min(1, this._fall + i / 1.3)),
            (a.rotation.x =
              -this._fallDir * (Math.PI / 2) * (this._fall * this._fall)),
            (a.position.z = -this._fallDir * 0.4 * this._fall),
            this._fall >= 1 && (this.dead = !0));
          return;
        }
        ((a.rotation.z =
          Math.sin(this.time * (2 + c * 3)) *
          0.08 *
          (this.state === "idle" ? 0.3 : 1)),
          (a.position.y =
            Math.abs(Math.sin(this.time * (2 + c * 3))) *
            0.03 *
            (this.state === "idle" ? 0 : 1)),
          this.state === "attack"
            ? ((n.rotation.x = h.rotation.x =
                -1.1 - Math.sin(Math.min(this._t / 0.45, 1) * Math.PI) * 0.7),
              this._t > 0.45 &&
                !this._hit &&
                ((this._hit = !0), this.onEvent && this.onEvent("hit")),
              this._t > 0.95 && ((this._hit = !1), (this._t = 0)))
            : ((this._hit = !1), (n.rotation.x = h.rotation.x = -1.1)));
      },
      hitTest(i, l, c) {
        const s = e.position,
          k = [
            ["head", new o(s.x, t.h - 0.13, s.z), 0.16],
            ["body", new o(s.x, t.h * 0.62, s.z), t.w + 0.1],
            ["body", new o(s.x, t.h * 0.42, s.z), t.w + 0.08],
            ["legs", new o(s.x, 0.45, s.z), 0.2],
          ];
        let d = null;
        for (const [D, V, m] of k) {
          const _ = new o().subVectors(i, V),
            p = _.dot(l),
            v = _.dot(_) - m * m,
            M = p * p - v;
          if (M < 0) continue;
          const r = -p - Math.sqrt(M);
          r < 0 ||
            r > c ||
            ((!d || r < d.distance) &&
              (d = {
                zone: D,
                distance: r,
                point: i.clone().addScaledVector(l, r),
              }));
        }
        return d;
      },
      headWorld(i = new o()) {
        return i.set(e.position.x, t.h - 0.13, e.position.z);
      },
      chestWorld(i = new o()) {
        return i.set(e.position.x, t.h * 0.62, e.position.z);
      },
      prepare() {},
      dispose() {},
    }
  );
}
