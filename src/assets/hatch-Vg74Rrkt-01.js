// assets/hatch-Vg74Rrkt 01 — math
// Lines 1-186 of readable/assets/hatch-Vg74Rrkt.pretty.js (statement-aligned).
import { R as Z } from "./RoundedBoxGeometry-D0zz8qHa.js";
import {
  G as P,
  B as X,
  I as Y,
  ak as z,
  M as q,
  c as v,
  m as K,
  J as Q,
  b as $,
  d as tt,
} from "./index-DaQlAVPp.js";
import { I as A, F as b, j as ot } from "./furniture-BraVmmRV.js";
const et = {
  x: 6.62,
  z: 204.98,
  w: 0.8,
  d: 0.8,
  shaft: { x0: 6.07, x1: 7.17, z0: 204.43, z1: 205.53 },
  ladderZ: 204.6,
  bottom: -9,
};
function buildFloorHatch(j, { house: O }) {
  const R = new P();
  R.name = "hatch";
  const i = new P();
  ((i.name = "hatch_top"), R.add(i));
  const F = [],
    t = et,
    u = t.x - t.w / 2,
    g = t.x + t.w / 2,
    d = t.z - t.d / 2,
    l = t.z + t.d / 2,
    B = O.group.getObjectByName("house:floor"),
    D = B?.material || j.mats.get("house_floor");
  if (B) {
    const o = A.x0 - 0.12,
      e = A.x1 + 0.12,
      c = A.z0 - 0.12,
      s = A.z1 + 0.12,
      n = b,
      h = [],
      p = [],
      r = (f, V, C, L) => {
        const I = h.length / 3;
        (h.push(f, n, L, C, n, L, C, n, V, f, n, V),
          p.push(I, I + 1, I + 2, I, I + 2, I + 3));
      };
    (r(o, c, e, d), r(o, l, e, s), r(o, d, u, l), r(g, d, e, l));
    const y = new X();
    (y.setAttribute("position", new Y(h, 3)),
      y.setIndex(p),
      y.computeVertexNormals(),
      z(y),
      B.geometry.dispose(),
      (B.geometry = y));
  }
  const M = D;
  new q({ color: 1380364, roughness: 1 });
  const x = (o, e, c, s = 0.006) => new Z(o, e, c, 2, s),
    w = (o, e, c, s, n, h = i, p) => {
      const r = new v(o, e);
      return (
        r.position.set(c, s, n),
        (r.castShadow = !0),
        (r.receiveShadow = !0),
        p && (r.name = p),
        h.add(r),
        r
      );
    },
    m = 0.07,
    H = b + 0.008;
  (w(z(x(t.w + 2 * m, 0.03, m)), M, t.x, H, d - m / 2, i, "hatch:frameN"),
    w(z(x(t.w + 2 * m, 0.03, m)), M, t.x, H, l + m / 2, i, "hatch:frameS"),
    w(z(x(m, 0.03, t.d)), M, u - m / 2, H, t.z, i, "hatch:frameW"),
    w(z(x(m, 0.03, t.d)), M, g + m / 2, H, t.z, i, "hatch:frameE"));
  const G = new X();
  {
    const o = [],
      e = [],
      s = b,
      n = (h, p, r, y) => {
        const f = o.length / 3;
        (o.push(h, -0.32, p, r, -0.32, y, r, s, y, h, s, p),
          e.push(f, f + 1, f + 2, f, f + 2, f + 3));
      };
    (n(u, d, g, d),
      n(g, d, g, l),
      n(g, l, u, l),
      n(u, l, u, d),
      G.setAttribute("position", new Y(o, 3)),
      G.setIndex(e),
      G.computeVertexNormals(),
      z(G));
  }
  const T = new v(G, new q({ color: 3812386, roughness: 0.95, side: K }));
  ((T.receiveShadow = !0), i.add(T));
  const S = new P();
  ((S.name = "hatch_lid"), S.position.set(t.x, b + 0.022, d), i.add(S));
  const k = new P();
  S.add(k);
  const U = t.d / 5;
  for (let o = 0; o < 5; o++) {
    const e = z(x(t.w - 0.01, 0.035, U - 0.006, 0.004)),
      c = w(e, M, 0, 0, U * (o + 0.5), k);
    c.rotation.y = (o % 2 ? 1 : -1) * 0.004;
  }
  for (const o of [0.14, t.d - 0.14])
    w(z(x(t.w - 0.1, 0.03, 0.09)), M, 0, -0.032, o, k);
  const _ = j.mats.get("iron_black"),
    E = w(new Q(0.045, 0.007, 8, 20), _, 0, 0.022, t.d - 0.1, k);
  ((E.rotation.x = Math.PI / 2),
    w(x(0.03, 0.014, 0.05, 0.003), _, 0, 0.022, t.d - 0.05, k));
  for (const o of [-0.26, 0.26])
    w(x(0.05, 0.008, 0.16, 0.002), _, o, 0.02, 0.07, k);
  const N = O.group.getObjectByName("house:rug");
  if (N) {
    N.visible = !1;
    const o = 2 * ot.rz + 0.05,
      e = 0.12,
      c = new $(e, e, o, 24, 1, !1);
    c.rotateX(Math.PI / 2);
    const s = new v(c, N.material);
    ((s.name = "hatch:rug"),
      s.position.set(u - 0.42, b + e * 0.92, t.z),
      (s.rotation.y = 0.06),
      s.scale.set(1, 0.86, 1),
      (s.castShadow = !0),
      (s.receiveShadow = !0),
      i.add(s));
    const n = new tt(0.34, o * 0.94);
    n.rotateX(-Math.PI / 2);
    const h = new v(n, N.material);
    (h.position.set(u - 0.2, b + 0.006, t.z), (h.receiveShadow = !0), i.add(h));
  }
  const a = {
    k: 1,
    goal: 1,
    rate: 0,
    onShut: null,
    set(o) {
      ((a.k = a.goal = o), (S.rotation.x = -o * 1.815));
    },
    to(o, e = 0.6) {
      ((a.goal = o), (a.rate = Math.abs(o - a.k) / Math.max(0.05, e)));
    },
  };
  (a.set(1),
    F.push((o) => {
      if (a.k === a.goal) return;
      const e = a.goal - a.k,
        c = Math.sign(e) * Math.min(Math.abs(e), a.rate * o);
      ((a.k += c),
        (S.rotation.x = -a.k * 1.815),
        a.k === a.goal && a.k === 0 && a.onShut?.());
    }));
  const J = [
      {
        x0: u + 0.04,
        x1: g - 0.04,
        z0: d + 0.04,
        z1: l - 0.04,
        y0: -0.4,
        y1: 0.9,
        hatch: !0,
      },
    ],
    W = {
      hatch: [t.x, b, t.z],
      hatchStand: [t.x, l + 0.36, 0],
      hatchUse: [t.x, 0.35, t.z],
      akaneHatch: [t.x + 0.62, t.z + 0.62],
      shaftBottom: [t.x, t.bottom, t.z + 0.12],
    };
  return {
    group: R,
    top: i,
    colliders: J,
    points: W,
    lid: a,
    anim: F,
    inHole: (o, e) => o > u && o < g && e > d && e < l,
  };
}
