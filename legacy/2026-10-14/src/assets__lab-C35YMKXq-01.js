// assets__lab-C35YMKXq 01 — add
// Lines 1-133 of readable/assets__lab-C35YMKXq.pretty.js (statement-aligned).
import {
  G as v,
  ap as z,
  c as p,
  $ as B,
  ah as R,
  d as G,
  M as D,
  aq as C,
  P as E,
  ar as k,
  f as T,
  g as j,
  p as q,
} from "./index-DaQlAVPp.js";
async function I(x) {
  const { game: i, mats: S } = x,
    o = new v();
  ((o.name = "lab"), x.scene.add(o));
  const a = 300,
    s = 300,
    y = Object.keys(S.catalog),
    A = new URLSearchParams(location.search).get("mood") || "studio",
    w = {},
    L = (t) => {
      const e = document.createElement("canvas");
      ((e.width = 512), (e.height = 96));
      const n = e.getContext("2d");
      ((n.fillStyle = "rgba(0,0,0,0)"),
        n.fillRect(0, 0, 512, 96),
        (n.font = "bold 44px monospace"),
        (n.fillStyle = "#e8e0d0"),
        (n.textAlign = "center"),
        n.fillText(t, 256, 62));
      const r = new T(e);
      return (
        (r.colorSpace = j),
        new p(
          new G(1.2, 0.225),
          new q({ map: r, transparent: !0, toneMapped: !1 }),
        )
      );
    };
  y.forEach((t, e) => {
    const n = e % 6,
      r = Math.floor(e / 6),
      c = a + n * 1.5,
      l = s - r * 2.6,
      u = S.get(t),
      P = z(c - 0.6, 0.05, l - 0.03, c + 0.6, 1.25, l + 0.03),
      g = new p(P, u);
    ((g.castShadow = g.receiveShadow = !0), o.add(g));
    const b = new p(new B(0.2, 48, 32), u);
    (b.position.set(c - 0.3, 0.22, l + 0.75), (b.castShadow = !0), o.add(b));
    const f = new p(new R(0.34, 0.34, 0.34), u);
    (f.position.set(c + 0.3, 0.17, l + 0.75),
      (f.rotation.y = 0.5),
      (f.castShadow = !0),
      o.add(f));
    const M = L(t);
    (M.position.set(c, 1.42, l + 0.05), o.add(M), (w[t] = [c, l]));
  });
  const h = new p(new G(60, 60), new D({ color: 2433823, roughness: 0.9 }));
  ((h.rotation.x = -Math.PI / 2),
    h.position.set(a + 4, 0, s - 6),
    (h.receiveShadow = !0),
    o.add(h));
  const d = (t) => ((t.userData.noActor = !0), o.add(t), t);
  if (A === "night") {
    const t = d(new C(9086719, 0.6));
    (t.position.set(a - 6, 8, s + 12),
      t.target.position.set(a + 4, 0, s - 6),
      o.add(t.target),
      d(new E(16756848, 60, 12, 2)).position.set(a + 2, 2.2, s + 2.5),
      d(new k(1712691, 722693, 0.28)));
  } else {
    const t = d(new C(16773856, 2.2));
    (t.position.set(a - 3, 6, s + 6),
      t.target.position.set(a + 4, 0, s - 6),
      o.add(t.target),
      (t.castShadow = !0),
      t.shadow.mapSize.set(2048, 2048));
    const e = t.shadow.camera;
    ((e.left = -14),
      (e.right = 14),
      (e.top = 12),
      (e.bottom = -12),
      (e.far = 60),
      (t.shadow.bias = -4e-4),
      d(new k(8952251, 3351057, 0.7)));
  }
  i.scene.fog = null;
  const m = {
    names: y,
    pos: w,
    focus(t, e = 1.7, n = 0.9) {
      const r = w[t];
      return r
        ? (i.debug.lookAtCam(
            r[0],
            n + 0.15,
            r[1] + e,
            r[0],
            0.6,
            r[1] + 0.3,
            50,
          ),
          !0)
        : !1;
    },
  };
  return (
    (i.lab = m),
    (i.beats = {
      goto(t) {
        t.startsWith("lab:")
          ? m.focus(t.slice(4))
          : t === "lab" &&
            i.debug.lookAtCam(a + 3.7, 1.6, s + 4.5, a + 3.7, 0.7, s - 3, 65);
      },
    }),
    i.debug.lookAtCam(a + 3.7, 1.6, s + 4.5, a + 3.7, 0.7, s - 3, 65),
    {
      group: o,
      colliders: [],
      anim: [],
      points: {},
      props: {},
      lights: {},
      lab: m,
    }
  );
}
