// assets/labkit-ElMHH8EU 01 — torch
// Lines 1-88 of readable/assets/labkit-ElMHH8EU.pretty.js (statement-aligned).
import { c as C, l as u } from "./looks-DR2oSjqf.js";
import { G as M, C as S, n as j, V as q } from "./index-DaQlAVPp.js";
const g = Math.PI / 180;
function buildLabFlashlight(
  f,
  { name: r, look: w, views: s = {}, torch: y = !0, onView: d } = {},
) {
  const { game: e, scene: h } = f,
    n = new M();
  ((n.name = "lab_" + r), h.add(n), (h.background = new S(0)));
  const c = C(f, { parent: n });
  let p = u(w);
  c.apply(p, !0);
  const a = new j(16773336, y ? 180 : 0, 28, 0.42, 0.6, 2);
  ((a.name = "lab_flashlight"),
    (a.castShadow = !0),
    a.shadow.mapSize.set(1024, 1024),
    (a.shadow.bias = -5e-4),
    (a.shadow.camera.near = 0.2),
    n.add(a, a.target),
    e.weapons || (e.weapons = { torch: a }));
  const m = new q(),
    l = {
      group: n,
      rig: c,
      flash: a,
      anim: [
        () => {
          const o = e.camera;
          (o.updateMatrixWorld(),
            a.position
              .copy(o.position)
              .add(m.set(0.18, -0.22, 0).applyQuaternion(o.quaternion)),
            a.target.position
              .copy(o.position)
              .add(m.set(0, 0, -6).applyQuaternion(o.quaternion)),
            c.follow(o.position));
        },
      ],
      views: s,
      setLook(o) {
        ((p = u(o)), c.apply(p, !0));
      },
      torch(o) {
        a.intensity = o ? 180 : 0;
      },
    };
  return (
    (e.beats = {
      goto: async (o) => {
        const t = o.startsWith(r + ":") ? s[o.slice(r.length + 1)] : s[o];
        if (!t) {
          console.warn(
            "[lab " +
              r +
              "] no view " +
              o +
              " (have: " +
              Object.keys(s).join(", ") +
              ")",
          );
          return;
        }
        if (
          (t.look && l.setLook(t.look),
          t.torch != null && l.torch(t.torch),
          d && (await d(o, t)),
          t.cam)
        ) {
          const [i, k, b, L = 0, x = 0] = t.cam;
          e.debug.setCam({
            x: i,
            y: k,
            z: b,
            yaw: L,
            pitch: x,
            fov: t.fov || 70,
          });
        }
        for (let i = 0; i < Math.round((t.t || 0) * 30); i++) e.step(1 / 30);
        ((e.camera.rotation.order = "YXZ"),
          t.cam &&
            e.camera.rotation.set((t.cam[4] || 0) * g, (t.cam[3] || 0) * g, 0));
      },
    }),
    l
  );
}
