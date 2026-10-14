// assets__lab_city-Bdm3u4EP 01 — fov
// Lines 1-222 of readable/assets__lab_city-Bdm3u4EP.pretty.js (statement-aligned).
import { m as z } from "./labkit-ElMHH8EU.js";
import { b as B, L as m, a as A, h as F } from "./city-COfbVKUz.js";
import {
  d as R,
  c as v,
  M as I,
  p as X,
  m as Q,
  n as H,
  o as K,
  E as Y,
  G as j,
  $ as D,
  b as T,
  ah as U,
  q as Z,
  V as L,
  Q as G,
} from "./index-DaQlAVPp.js";
import "./looks-DR2oSjqf.js";
import "./plan3-BlRgM2iV.js";
import "./kit-CFeM0oZ2.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./hatch-Vg74Rrkt.js";
import "./furniture-BraVmmRV.js";
async function ne(y) {
  const { game: l } = y;
  let o = null;
  const s = { on: !1, t: 0, chase: !1, look: null },
    t = (n, a = 0.4, e = {}) => ({
      ride: !0,
      t0: n,
      t: a,
      look: A,
      fov: 75,
      ...e,
    }),
    O = {
      exit: { cam: [430, 1.62, 200, 0, 2], fov: 70, look: m },
      exitUp: { cam: [430, 1.62, 200, 0, 12], fov: 70, look: m },
      camp: { cam: [452, 1.62, 100, 0, 6], fov: 72, look: m },
      campE: { cam: [452, 1.62, 100, -90, 6], fov: 72, look: m },
      campS: { cam: [452, 1.62, 100, 180, 6], fov: 72, look: m },
      campW: { cam: [452, 1.62, 100, 90, 6], fov: 72, look: m },
      over: { cam: [452, 70, 160, -18, -10], fov: 70, look: A },
      top: { cam: [850, 1400, -300, 0, -90], fov: 60, look: A },
      fly: t(0, 0),
      chase: t(0, 0, { chase: !0 }),
      gapL: t(24.9, 0.2, { head: [55, 6] }),
      gapL2: t(25, 0.2, { head: [80, 0] }),
      climbL: t(34.6, 0.2, { head: [0, 25] }),
      downChin: t(48, 0.2, { head: [-15, -55] }),
      lift: t(4, 0.2),
      lift2: t(7, 0.2),
      birds: t(9.8, 1.2),
      crane: t(16.6, 0.6),
      craneOut: t(15.6, 0.4, { chase: !0 }),
      craneChase: t(16.9, 0.45, { chase: !0 }),
      gapChase: t(24.6, 0.3, { chase: !0 }),
      glass: t(21.6, 0.9),
      gap: t(24.3, 0.3),
      smoke: t(30, 0.4),
      climb: t(34.4, 0.4),
      crest: t(37.6, 0.3),
      tank: t(46.9, 0.4),
      heli2: t(49.3, 0.4),
      impact: t(50.6, 0.4),
      highway: t(52.1, 0.3),
      river: t(56.4, 0.3),
      bridge: t(58.6, 0.3),
      wires: t(67.4, 0.3),
      clip: t(69.2, 0.3),
      crash: { cam: [1252, 1.7, -727, -14, 7], fov: 70, look: m },
    },
    i = z(y, {
      name: "city",
      look: m,
      torch: !1,
      views: O,
      onView: async (n, a) => {
        ((s.on = !!a.ride),
          (s.chase = !!a.chase),
          (s.t = a.t0 || 0),
          (s.head = a.head || null),
          s.on
            ? ((l.cameraOverride = !0),
              (l.player.frozen = !0),
              (l.camera.fov = a.fov || 75),
              l.camera.updateProjectionMatrix(),
              (l.camCtl = E),
              E(0))
            : ((l.camCtl = null),
              o?.flight.drive(-1),
              (c.visible = !1),
              (d.visible = !1)));
      },
    });
  ((o = await B(y, { rng: y.rng(5306) })),
    i.group.add(o.group),
    o.sky?.env && (i.rig.makeEnv("sky", o.sky.env), i.setLook(m)));
  {
    const n = new R(180, 175).rotateX(-Math.PI / 2).translate(440, 0.02, 117.5),
      a = new v(n, new I({ color: 791564, roughness: 0.95 }));
    ((a.name = "lab_park_standin"), i.group.add(a));
  }
  const S = new I({
      color: 14212578,
      roughness: 0.5,
      metalness: 0.1,
      emissive: 3156516,
    }),
    q = new X({
      color: 328965,
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
      side: Q,
    }),
    P = (n) => {
      const a = new j(),
        e = new v(new D(1, 16, 10).scale(1.2, 1.1, 2.6), n);
      (e.position.set(0, 0.6, 0.6), a.add(e));
      const r = new v(new T(0.18, 0.4, 6.5, 8).rotateX(Math.PI / 2), n);
      (r.position.set(0, 1.1, -4.5), a.add(r));
      const w = new v(new U(0.12, 1.6, 1), n);
      (w.position.set(0, 1.7, -7.6), a.add(w));
      const b = new v(new Z(5.5, 32).rotateX(-Math.PI / 2), q);
      return ((b.position.y = 2.75), a.add(b), a);
    },
    c = P(S);
  ((c.name = "lab_heli_standin"), (c.visible = !1), i.group.add(c));
  const h = new H(15266047, 0, 160, 0.16, 0.5, 2);
  ((h.name = "lab_searchlight"),
    i.group.add(h, h.target),
    o.props.searchlight(h),
    l.prepares.unshift(() => {
      s.on && (c.visible = !0);
    }),
    l.prepares.push(() => {
      c.visible = s.on && s.chase;
    }));
  const d = P(new I({ color: 2765344, roughness: 0.7 }));
  ((d.name = "lab_heli2_standin"), (d.visible = !1), i.group.add(d));
  const f = [0, 0, 0],
    M = [0, 0, 0],
    W = o.props.line,
    k = new K(),
    g = new L(),
    p = new L(),
    u = new L(),
    _ = new Y(),
    V = new G();
  function E(n) {
    s.t += n;
    const a = s.t;
    o.flight.drive(a);
    const e = F(W, a),
      r = l.camera;
    (u.set(-e.f[0], -e.f[1], -e.f[2]),
      p.set(e.u[0], e.u[1], e.u[2]),
      g.crossVectors(p, u).normalize(),
      p.crossVectors(u, g),
      k.makeBasis(g, p, u),
      (c.visible = s.chase),
      c.position.set(e.p[0], e.p[1] - 0.65, e.p[2]),
      c.quaternion
        .setFromRotationMatrix(k)
        .multiply(new G().setFromAxisAngle(p.set(0, 1, 0), Math.PI)));
    const w = e.at(3, 0, -0.6),
      b = e.at(55, 0, -22);
    if (
      (h.position.set(w[0], w[1], w[2]),
      h.target.position.set(b[0], b[1], b[2]),
      h.target.updateMatrixWorld(),
      (h.intensity = a > 2 ? 4500 : 0),
      a > 45.9 && a < 50.3
        ? ((d.visible = !0),
          o.flight.heli2At(a, f),
          o.flight.heli2At(a + 0.1, M),
          d.position.set(f[0], f[1], f[2]),
          d.rotation.set(
            0.3,
            Math.atan2(M[0] - f[0], M[2] - f[2]) + a * 2.2,
            0.2,
          ))
        : (d.visible = !1),
      s.chase)
    ) {
      const x = e.at(-16, 0, 5.5),
        C = e.at(6, 0, 1.2);
      (r.position.set(x[0], x[1], x[2]),
        r.up.set(0, 1, 0),
        r.lookAt(C[0], C[1], C[2]));
    } else
      (r.position.set(e.eye[0], e.eye[1], e.eye[2]),
        u.set(-e.f[0], -e.f[1], -e.f[2]),
        p.set(e.u[0], e.u[1], e.u[2]),
        g.crossVectors(p, u).normalize(),
        p.crossVectors(u, g),
        k.makeBasis(g, p, u),
        r.quaternion.setFromRotationMatrix(k),
        s.head &&
          (_.set(
            (s.head[1] * Math.PI) / 180,
            (s.head[0] * Math.PI) / 180,
            0,
            "YXZ",
          ),
          V.setFromEuler(_),
          r.quaternion.multiply(V)));
    r.updateMatrixWorld();
  }
  return {
    group: i.group,
    colliders: o.colliders,
    circles: o.circles,
    anim: [...i.anim, ...o.anim],
    points: o.points,
    props: { ...o.props, lab: i, city: o, ride: s, flight: o.flight },
    start: [430, 200],
  };
}
