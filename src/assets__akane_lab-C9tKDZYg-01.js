// assets__akane_lab-C9tKDZYg 01 — mode
// Lines 1-140 of readable/assets__akane_lab-C9tKDZYg.pretty.js (statement-aligned).
import { b as S, c as x } from "./akane-CN21eJhw.js";
import {
  G as A,
  C as M,
  as as P,
  c as h,
  d as f,
  M as k,
  P as R,
  aq as T,
  ar as H,
  n as L,
} from "./index-DaQlAVPp.js";
import "./lightrig-BOum5aAY.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./BufferGeometryUtils-Qxvmd-vM.js";
async function F(n) {
  const { game: i } = n,
    a = new A();
  ((a.name = "akane_lab"),
    n.scene.add(a),
    (n.scene.background = new M(329226)),
    (n.scene.fog = new P(461070, 0.05)));
  const u = new h(new f(30, 30), new k({ color: 2759700, roughness: 0.55 }));
  ((u.rotation.x = -Math.PI / 2), (u.receiveShadow = !0), a.add(u));
  const g = new h(new f(30, 8), new k({ color: 2046518, roughness: 0.9 }));
  (g.position.set(0, 4, -4), (g.receiveShadow = !0), a.add(g));
  const d = new R(16756848, 55, 12, 2);
  (d.position.set(-1.6, 2.1, 1.2),
    (d.castShadow = !0),
    d.shadow.mapSize.set(1024, 1024),
    a.add(d));
  const p = new T(9086719, 0.5);
  (p.position.set(4, 6, 6),
    p.target.position.set(0, 0, 0),
    a.add(p, p.target),
    a.add(new H(1712691, 722693, 0.3)));
  const t = new L(16773340, 160, 14, 0.42, 0.6, 2);
  ((t.castShadow = !0),
    t.shadow.mapSize.set(1024, 1024),
    t.position.set(1.6, 1.5, 4.5),
    t.target.position.set(0, 1.1, 0),
    a.add(t, t.target));
  const w = S(),
    r = x(i, { pistol: w });
  (r.root.position.set(0, 0, 0), a.add(r.root), (i.akane = r));
  const e = { mode: "stand", t: 0, phase: 0, speed: 1.3, fireT: -9 },
    s = () => ({ guitar: 0, arms: "down", blush: 0.15, breathe: e.t * 0.25 }),
    c = {
      stand: () => s(),
      walk: () => ({ ...s(), walkAmp: 1, walk: e.phase, walkStride: 0.3 }),
      run: () => ({
        ...s(),
        walkAmp: 1,
        walk: e.phase,
        walkStride: 0.42,
        walkLift: 0.16,
        lean: 9,
      }),
      gun: () => ({
        ...s(),
        arms: "gun",
        gunRaise: 1,
        gunHands: 2,
        eyes: { open: 1, gaze: [0, 0] },
        brows: { l: -0.3, r: -0.3 },
        mouth: { open: 0, shape: "M" },
      }),
      gunlow: () => ({
        ...s(),
        arms: "gun",
        gunRaise: 0,
        gunHands: 2,
        walkAmp: 0,
      }),
      gunwalk: () => ({
        ...s(),
        arms: "gun",
        gunRaise: 0.55,
        gunHands: 2,
        walkAmp: 1,
        walk: e.phase,
        walkStride: 0.26,
      }),
      fire: () => {
        const o = Math.max(0, 1 - (e.t - e.fireT) * 6);
        return {
          ...s(),
          arms: "gun",
          gunRaise: 1,
          gunHands: 2,
          gunRecoil: o,
          lean: -2 * o,
        };
      },
      scared: () => ({
        ...s(),
        arms: "hands_up",
        brows: { l: 0.9, r: 0.9 },
        eyes: { open: 1.2, iris: 0.8 },
        mouth: { open: 0.3, shape: "O" },
        lean: -4,
      }),
      kneel: () => ({ ...s(), arms: "reach", kneel: 1, pitch: 20 }),
      point: () => ({ ...s(), arms: "point", pointAt: !1 }),
    };
  return (
    n.onFrame((o, l) => {
      ((e.t += o),
        (e.mode === "walk" || e.mode === "run" || e.mode === "gunwalk") &&
          (e.phase += o * (e.mode === "run" ? 2 : 1.3)),
        e.mode === "fire" && e.t - e.fireT > 0.25 && (e.fireT = e.t));
      const b = (c[e.mode] || c.stand)();
      (w.setSlide(e.mode === "fire" ? Math.max(0, 1 - (e.t - e.fireT) * 9) : 0),
        r.setPose(b, e.t));
    }),
    n.beforeRender((o) => r.prepare(o)),
    (i.beats = {
      goto(o) {
        if (!o.startsWith("akane")) return;
        const l = o.split(":")[1] || "stand";
        ((e.mode = l), (e.phase = 0), (e.fireT = e.t));
        const m =
          l === "walk" || l === "run"
            ? [2.4, 1.1, 3.2, 0.2]
            : [0.8, 1.25, 2.3, 0.1];
        i.debug.lookAtCam(m[0], m[1], m[2], 0, 0.95, 0, 45);
      },
    }),
    i.debug.lookAtCam(0.8, 1.25, 2.3, 0, 0.95, 0, 45),
    {
      group: a,
      colliders: [],
      anim: [],
      points: {},
      props: { akane: r, pistol: w, S: e },
      lights: { lamp: d, moon: p, spot: t },
    }
  );
}
