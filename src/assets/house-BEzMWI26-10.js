// assets/house-BEzMWI26 10 — api
// Lines 2696-2942 of readable/assets/house-BEzMWI26.pretty.js (statement-aligned).
function Rt(s, { rng: o }) {
  let e = "dream";
  const n = new l0();
  n.name = "house";
  const t = new l0();
  ((t.name = "house_body"), (t.visible = !1), n.add(t));
  const u = bt(s),
    d = [],
    a = [],
    h = new dt("house"),
    c = ut(s, u, o, h);
  (t.add(c.group), a.push(...c.colliders));
  const m = xt(s, u, h);
  (t.add(...m.groups), a.push(...m.colliders), d.push(...m.anim));
  const g = zt(s, u, h);
  (t.add(...g.groups), d.push(...g.anim));
  const w = () => {
      const x = s.game.player.pos;
      return (
        e === "ruins" &&
        x.x > S0.x0 - 12 &&
        x.x < S0.x1 + 12 &&
        x.z > S0.z0 - 14 &&
        x.z < S0.z1 + 10
      );
    },
    M = _t(s, u, n, { near: w, S: h });
  (t.add(M.group),
    d.push(M.anim),
    d.push(() => {
      u.glass.emissiveIntensity *=
        1 - 0.28 * (g.closeK("W1") + g.closeK("W2") + g.closeK("W3"));
    }));
  const p = It(s, n, {
    slits: g.slits,
    shutK: g.closeK,
    near: w,
    doorK: { front: () => m.front.api.openK, back: () => m.back.api.openK },
    dead: () => s.game.zombies?.list || [],
  });
  (t.add(p.group), d.push(p.anim));
  const C = Pt(s, {
    lampAt: (x) => x.set(W0.x, q0, W0.z, M.lamp.level),
    glowAt: (x) => {
      const v = p.cardMat.uniforms.uK.value;
      (x[0].set(6, 1, X.z0 + 0.42, v.x * 0.9),
        x[1].set(6, 1, X.z1 - 0.42, v.z * 0.9));
    },
  });
  (t.add(C.points), d.push(C.anim));
  const A = ht(s, u, o, h);
  (t.add(A.group), a.push(...A.colliders));
  const L = Dt(s, u, o, h);
  (t.add(L.group), a.push(...L.colliders));
  {
    const x = T0.W3,
      v = new st(x.b - x.a + 0.08, x.y1 - x.y0 + 0.08, 0.03);
    (v.translate((x.a + x.b) / 2, (x.y0 + x.y1) / 2, X.z1 - 0.06),
      h.casters.push(v));
  }
  const U = Ot(s.renderer, n, ft([...h.casters, ...A.detailBucket.casters]));
  ((h.casters = []), (A.detailBucket.casters = []));
  const R = new l0();
  ((R.name = "house_static"),
    t.add(R),
    h.flush(R),
    A.detailBucket.flush(A.detail));
  const I = (x, v, z) => {
    M.lamp.shake(z === "shove" ? 0.6 * v : 0.9 * v);
    const r = x._frame;
    C.api.burst(r.lintel[0], r.lintel[1], r.inward, v, {
      puff: z === "slam",
      sides: r.sides,
    });
  };
  ((m.front.api.onImpact = I), (m.back.api.onImpact = I));
  for (const x of ["W1", "W2", "W3"]) {
    const v = g.one[x],
      z = v.F,
      r = v.y0 + v.h + 0.01,
      B = 0.29,
      y = ($) => [
        z.base[0] + $ * z.es[0] + B * z.en[0],
        r,
        z.base[2] + $ * z.es[2] + B * z.en[2],
      ],
      a0 = y(v.sH),
      Z = y(v.sH + v.dir * v.w);
    v.api.onImpact = ($, J) => {
      (M.lamp.shake(0.35 * J), C.api.burst(a0, Z, [z.en[0], z.en[2]], 0.4 * J));
    };
  }
  Ze.house = (x, v) =>
    x > le.x0 && x < le.x1 && v > le.z0 - 0.05 && v < X.z1 - 0.02;
  const W = {
      post: {
        exposure: 0.94,
        bloom: 0.3,
        bloomThreshold: 1.05,
        vignette: 0.5,
        sat: 1,
        contrast: 1.08,
      },
      key: [10335968, 1.1],
      keyDir: ve.clone(),
      fill: [5662346, 0.025],
      fillDir: ve.clone(),
      hemi: [4215918, 1841172, 0.32],
      env: 0.06,
      envName: "forest",
      sky: { forest: 1 },
      fog: [658965, 0.018],
    },
    o0 = () => {
      const x = e === "ruins";
      for (const v of a) v.door || (v.on = x);
      for (const v of [m.front.api, m.back.api]) ((v._world = x), v._cols());
    };
  o0();
  const D = {
    W1: [3.62, 201.25, 2.88],
    W2: [8.45, 203.35, 2.17],
    W3: [3.45, 205.75, 0.39],
  };
  for (const x of g.list) x.standAt = D[x.id];
  const Y = {
      porch: [6, 199.3, 0],
      inside: [6, 201.2],
      boltFront: [6.05, 200.86, Math.PI],
      backDoor: [5.95, 206.14, 0],
      lamp: [W0.x + 0.58, W0.z + 0.02, -Math.PI / 2],
      shutter: D.W2,
      bedSide: [7.38, 205.45],
      watch: [ce.x, ce.z, ce.yaw],
      bedEye: [8.5, 0.88, 206.12],
      hide: [5.4, 205.9, -0.26],
      akaneHide: [6.5, 205, Math.PI],
      frontUse: [6.05, 200.95, Math.PI],
      backUse: [5.95, 206.1, 0],
    },
    e0 = {
      pos: [(z0.x0 + z0.x1) / 2, z0.top, (z0.z0 + z0.z1) / 2],
      eye: Y.bedEye,
      look: [7.95, 1.38, 203.2],
      lamp: [W0.x, q0, W0.z],
    },
    T = (x, v) =>
      x > v0.front - 0.05 &&
      x < v0.hearth.x1 &&
      v > v0.hearth.z0 &&
      v < v0.hearth.z1
        ? "stone"
        : "wood";
  d.push(() => {
    const x = s.game.player.pos,
      v =
        e === "ruins" &&
        x.x > S0.x0 - 14 &&
        x.x < S0.x1 + 14 &&
        x.z > S0.z0 - 16 &&
        x.z < S0.z1 + 12;
    A.detail.visible !== v && (A.detail.visible = v);
  });
  const S = g.one.W2.api,
    H = {
      list: g.list,
      get: (x) => g.one[x]?.api,
      close: (x, v) => S.close(x, v),
      get closeK() {
        return S.closeK;
      },
      snapAll(x) {
        for (const v of g.list) v.close(x);
      },
    },
    K = {
      group: n,
      colliders: a,
      anim: d,
      look: W,
      points: Y,
      bed: e0,
      outside: mt,
      frontDoor: m.front.api,
      backDoor: m.back.api,
      shutters: H,
      lamp: M.lamp,
      embers: M.embers,
      moon: p.moon,
      lights: { ...M.lights, moon: p.light },
      dust: C.api,
      props: {
        furniture: A.props,
        shutterLeaf: g.one.W2.parts.leaf,
        shutterLeaves: {
          W1: g.one.W1.parts.leaf,
          W2: g.one.W2.parts.leaf,
          W3: g.one.W3.parts.leaf,
        },
        bars: { front: m.front.parts.bar, back: m.back.parts.bar },
      },
      surfaceAt: T,
      setWorld(x) {
        e = x;
        const v = x === "ruins";
        ((t.visible = v),
          U.setActive(v),
          v && (A.detail.visible = !0),
          K.reset(),
          M.embers.set(v ? 0.75 : 0),
          p.moon.set(v ? 1 : 0),
          v || M.lamp.set(!1),
          o0());
      },
      reset() {
        (m.front.api.snap(0, !1),
          m.back.api.snap(0, !1),
          H.snapAll(0),
          M.lamp.set(!1),
          C.api.clear());
      },
      warmUp() {
        const x = s.game,
          v = s.renderer,
          z = [A.detail, M.lamp.flame, p.moon.cards, p.moon.beams, C.points],
          r = [t.visible, ...z.map((B) => B.visible)];
        t.visible = !0;
        for (const B of z) B.visible = !0;
        try {
          (v.setRenderTarget(x.post?.rt?.scene || null),
            v.compile(n, x.camera, s.scene));
        } catch (B) {
          console.warn("[house warmUp]", B);
        }
        (v.setRenderTarget(null),
          (t.visible = r[0]),
          z.forEach((B, y) => {
            B.visible = r[y + 1];
          }));
      },
      windows: c.winFrames,
      openings: T0,
      inside: n0,
      shadowProxy: U,
    };
  return K;
}
