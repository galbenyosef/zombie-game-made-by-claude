// assets/index-U-kV3K8W 01 — groundat
// Lines 1-334 of readable/assets/index-U-kV3K8W.pretty.js (statement-aligned).
import { a as eo } from "./house-BEzMWI26.js";
import { k as G, H as m } from "./district-BhfbivMT.js";
import { c as ro, l as L, a as I, b as ao } from "./looks-DR2oSjqf.js";
import { b as co } from "./metro-xgLUk92P.js";
import { b as lo } from "./park-CwBfNU5l.js";
import { b as io } from "./city-COfbVKUz.js";
import { b as uo, H as po } from "./hatch-Vg74Rrkt.js";
import { N as fo } from "./nav-DkEG8EU-.js";
import { G as mo, C as go } from "./index-DaQlAVPp.js";
import "./kit-CFeM0oZ2.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./furniture-BraVmmRV.js";
import "./plan3-BlRgM2iV.js";
import "./common-BYwPbecq.js";
import "./BufferGeometryUtils-Qxvmd-vM.js";
const W = -8.9;
async function buildSection3(l) {
  const { scene: y, renderer: O, game: n } = l,
    f = new mo();
  ((f.name = "section3"), y.add(f), (y.background = new go(0)));
  const w = [],
    F = [],
    T = [],
    c = ro(l, { parent: f }),
    H = (o) => n.loadMark?.("part3: " + o),
    a = eo(l, { rng: l.rng(4013) });
  (H("house"), f.add(a.group));
  const g = uo(l, { house: a });
  f.add(g.group);
  const U = async (o, s) => {
      try {
        return await s();
      } catch (t) {
        return (console.error("[section3] " + o + " failed:", t), null);
      }
    },
    r = (await U("metro", () => co(l, { rng: l.rng(5301), hatch: po }))) || {};
  H("metro");
  const i = (await U("city", () => io(l, { rng: l.rng(5306), rig: c }))) || {};
  H("city");
  const u = (await U("park", () => lo(l, { rng: l.rng(5305), rig: c }))) || {};
  H("park");
  const p = {
    zoneAt: (o, s, t) => u.zoneAt?.(o, s, t) || i.zoneAt?.(o, s, t) || null,
    groundAt: (o, s, t) =>
      u.groundAt?.(o, s, t) ?? i.groundAt?.(o, s, t) ?? null,
    surfaceAt: (o, s, t) =>
      u.surfaceAt?.(o, s, t) || i.surfaceAt?.(o, s, t) || null,
    navPlans: { ...(i.navPlans || {}), ...(u.navPlans || {}) },
    looks: { ...(i.looks || {}), ...(u.looks || {}) },
    points: { ...(i.points || {}), ...(u.points || {}) },
    sky: i.sky,
  };
  for (const o of [a, g, r, i, u]) {
    (o.group && o.group.parent !== f && f.add(o.group),
      F.push(...(o.colliders || [])),
      T.push(...(o.circles || [])));
    for (const s of o.anim || []) w.push(s);
  }
  a.setWorld("ruins");
  for (const o of a.colliders || [])
    (o.y0 === void 0 && (o.y0 = -0.35), o.y1 === void 0 && (o.y1 = 4.5));
  (p.sky?.env && c.makeEnv("sky", p.sky.env),
    r.props?.lightsApi &&
      (r.props.lightsApi.torch = () => n.weapons?.torch || null));
  const z = (o, s) =>
      o > m.x0 - 0.2 && o < m.x1 + 0.2 && s > m.z0 - 1.9 && s < m.z1 + 0.2,
    h = (o, s, t = n.player.pos.y) =>
      t > -2.5 && z(o, s)
        ? "cabin"
        : r.zoneAt?.(o, s, t) ||
          p.zoneAt?.(o, s, t) ||
          (t > -2.5 && Math.hypot(o - 6, s - 203.5) < 16 ? "yard" : "void"),
    D = (o, s, t = 0) => {
      if (t > -2.5 && z(o, s) && !g.inHole(o, s)) return 0;
      const e = r.groundAt?.(o, s, t);
      return e ?? p.groundAt?.(o, s, t) ?? null;
    },
    E = (o, s, t = 0) => {
      const e = D(o, s, t);
      return e ?? (t < -2.5 ? t : 0);
    },
    Y = (o, s, t = n.player.pos.y) =>
      h(o, s, t) === "cabin"
        ? a.surfaceAt?.(o, s) || "wood"
        : r.surfaceAt?.(o, s, t) || p.surfaceAt?.(o, s, t) || "stone",
    Z = (o, s) => r.groundAt?.(o, s, W) ?? -9,
    k = {
      cabin: {
        x0: -3.5,
        x1: 15.5,
        z0: 194.5,
        z1: 212.5,
        cell: 0.15,
        groundAt: () => 0,
        inArea: (o, s) =>
          (G.house ? G.house(o, s) : !1) ||
          !(
            o > m.x0 - 0.05 &&
            o < m.x1 + 0.05 &&
            s > m.z0 - 0.05 &&
            s < m.z1 + 0.05
          ),
      },
    };
  for (const [o, s] of Object.entries(r.navPlans || {}))
    k[o] = { cell: 0.15, ...s, groundAt: Z };
  const d = p.navPlans?.park;
  if (d) {
    const o = k.parkgate,
      s = (t, e) => r.groundAt?.(t, e, W) ?? p.groundAt?.(t, e, 0) ?? 0;
    k.parkgate = o
      ? {
          x0: Math.min(o.x0, d.x0),
          x1: Math.max(o.x1, d.x1),
          z0: Math.min(o.z0, d.z0),
          z1: Math.max(o.z1, d.z1),
          cell: 0.2,
          groundAt: s,
          inArea: (t, e) => o.inArea(t, e) || d.inArea(t, e),
          blocked: (t, e) => !!(o.blocked?.(t, e) || d.blocked?.(t, e)),
        }
      : { cell: 0.2, ...d, groundAt: s };
  }
  const S = { level: "cabin" },
    _ = {},
    q = (o) => (_[o] ||= new fo(n.world, 0.3, k[o]));
  function J(o) {
    if (!k[o]) {
      console.warn("[section3] no level " + o);
      return;
    }
    S.level = o;
    const s = q(o);
    (s.rebuild(), (n.nav = s), n.npc && (n.npc.nav = s));
  }
  const N = new Set([
      "shaft",
      "passage",
      "ashwood",
      "tunnel",
      "parkgate",
      "concourse",
    ]),
    v = {
      cabin: L({ ...a.look, keyBox: 24, beam: 0.25 }),
      yard: L({ ...a.look, keyBox: 24 }),
      void: L({}),
    },
    Q = {
      shaft: 0.45,
      passage: 0.4,
      ashwood: 0.32,
      tunnel: 0.3,
      parkgate: 0.32,
      concourse: 0.3,
      stairs: 0.3,
      park: 0.45,
      camp: 0.4,
      city: 0.35,
    },
    V = {
      shaft: 2,
      passage: 2.6,
      ashwood: 2.4,
      tunnel: 2.6,
      parkgate: 3.6,
      concourse: 3.2,
      stairs: 2.8,
      park: 1.7,
      camp: 1.3,
      city: 1.6,
    };
  for (const o of [r, p])
    for (const [s, t] of Object.entries(o.looks || {}))
      v[s] = L({ beam: Q[s] ?? 0, torch: V[s] ?? 1, ...t });
  const R = (o) => v[o] || v.void,
    b = I(L({}), v.cabin);
  let A = "cabin";
  const X = () => {
    const o = n.camera.position;
    ((A = h(o.x, o.z, o.y - 1.6)),
      I(b, R(A)),
      c.follow(o),
      c.apply(b, !n.postOwned, n.lookMul));
  };
  (w.push((o) => {
    const s = n.camera.position;
    if (
      ((A = h(s.x, s.z, s.y - 1.6)),
      ao(b, R(A), 1 - Math.exp(-o * 2.2)),
      N.has(A) || c.follow(s),
      c.apply(b, !n.postOwned, n.lookMul),
      n.weapons && !n.torchOwned && (n.weapons.torchMul = b.torch ?? 1),
      n.post)
    ) {
      n.post.beamLight = n.beamLight || n.weapons?.torch || null;
      const t = n.beamLight ? (n.beamFogK ?? 0.012) : b.beam || 0;
      ((n.post.beamFog += (t - n.post.beamFog) * Math.min(1, o * 2.5)),
        n.post.beamFog < 0.002 && (n.post.beamFog = 0));
    }
  }),
    (c.key.shadow.autoUpdate = !1));
  {
    let o = 0;
    w.push(() => {
      ++o % 30 === 0 && !N.has(A) && (c.key.shadow.needsUpdate = !0);
    });
  }
  const j = 7,
    P = (...o) => {
      const s = [];
      for (const t of o)
        t?.traverse((e) => {
          (e.isMesh || e.isPoints || e.isLine || e.isSprite) &&
            !e.isLight &&
            s.push(e);
        });
      return s;
    },
    B = {
      cabin: P(a.group, g.top),
      metro: P(r.group),
      surface: P(u.group, i.group),
    },
    M = { cabin: !1, metro: !1, surface: !1 },
    C = (o, s) => {
      if (M[o] !== s) {
        M[o] = s;
        for (const t of B[o])
          s
            ? ((t.userData.cullMask = t.layers.mask), t.layers.set(j))
            : t.userData.cullMask != null &&
              ((t.layers.mask = t.userData.cullMask),
              (t.userData.cullMask = null));
      }
    },
    $ = (o, s) => {
      const t = P(s);
      if ((B[o].push(...t), M[o]))
        for (const e of t)
          ((e.userData.cullMask = e.layers.mask), e.layers.set(j));
    },
    x = new Set([
      "shaft",
      "passage",
      "ashwood",
      "tunnel",
      "parkgate",
      "stairs",
      "concourse",
    ]);
  w.push(() => {
    if (n.noCull) {
      for (const no of Object.keys(M)) C(no, !1);
      return;
    }
    const o = n.camera.position,
      s = h(o.x, o.z, o.y - 1.6),
      t = x.has(s),
      e = r.points?.exitTop
        ? Math.hypot(o.x - r.points.exitTop[0], o.z - r.points.exitTop[2]) < 40
        : !1;
    (C("cabin", !(s === "cabin" || s === "yard" || s === "shaft")),
      C("metro", !(t || s === "cabin" || e)),
      C("surface", t && !(s === "stairs" || s === "concourse") && !e));
  });
  const oo = () => {
      const o = n.camera,
        s = [];
      n.noCull = !0;
      for (const t of Object.keys(M)) C(t, !1);
      y.traverse((t) => {
        (t.isMesh || t.isPoints || t.isLine) && t.frustumCulled && s.push(t);
      });
      try {
        (O.setRenderTarget(n.post.rt.scene), O.compile(y, o));
        for (const t of s) t.frustumCulled = !1;
        O.render(y, o);
      } catch (t) {
        console.warn("[section3 warmUp]", t);
      }
      for (const t of s) t.frustumCulled = !0;
      O.setRenderTarget(null);
      for (const t of [a, r, i, u])
        try {
          t.warmUp?.();
        } catch (e) {
          console.warn("[section3 warmUp]", e);
        }
      n.noCull = !1;
    },
    so = {
      ...(r.points || {}),
      ...(p.points || {}),
      ...g.points,
      bedEye: a.points.bedEye,
      bedSide: a.points.bedSide,
    },
    to = {
      setLevel: J,
      get level() {
        return S.level;
      },
      snapLook: X,
      warmUp: oo,
      rig: c,
      looks: v,
      cullAdd: $,
      house: a,
      hatch: g,
      metro: r,
      park: u,
      city: i,
      surface: p,
      zoneAt: h,
      groundAt: E,
    };
  ((n.groundAt = E), (n.world.groundAt = E), (n.world.floorAt = D));
  const K = a.points.bedSide;
  return {
    group: f,
    colliders: F,
    circles: T,
    anim: w,
    points: so,
    props: to,
    lighting: { sun: c.key, fill: c.fill, hemi: c.hemi },
    navPlan: k.cabin,
    roomAt: h,
    surfaceAt: Y,
    start: [K[0], K[1], Math.PI],
  };
}
