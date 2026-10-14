// assets/index-BcIwWgby 35 — color
// Lines 10541-10956 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Gr(s, { church: o, rng: t }) {
  const { mats: u } = s,
    e = new Kt();
  e.name = "church_in";
  const r = [],
    a = [],
    p = r0.back,
    i = (T, D = {}, N = {}) => wo(u.get(T, D), N),
    d = {
      stone: i("church_dressed"),
      rib: i("church_dressed", { color: "#e8e2d6" }),
      web: i("church_web"),
      floor: i("church_floor"),
      marble: i("church_dressed", { color: "#f2eee6", rough: 0.35 }),
      gilt: i("church_gilt"),
      brass: i("brass_aged"),
      iron: i("iron_black"),
      oak: i("wood_walnut", {
        color: "#b89c86",
        extra: { clearcoat: 0.06, clearcoatRoughness: 0.6 },
      }),
      linen: i("linen_stained", { color: "#f4efe4" }),
      velvet: i("velvet_red"),
      leather: i("leather_brown"),
      paint: i("wood_ebony", { color: "#6a5e58" }),
      paint2: wo(u.paint("#1a2c6a", { rough: 0.6 })),
      panel: i("church_panels"),
      runner: i("rug_runner", { color: "#d8d0c8" }),
      door: i("door_wood", { color: "#9a8474" }),
      wax: Cr(i("wax_candle", { color: "#efe4cc", rough: 0.55 })),
    };
  (Object.assign(d, {
    white: i("plaster_bare", { color: "#f0ebe0", rough: 0.7 }),
    blue: i("plaster_bare", { color: "#5876b8", rough: 0.6, side: p0 }),
    skin: i("plaster_bare", { color: "#f2d2bc", rough: 0.6 }),
    brownR: i("plaster_bare", { color: "#a87a52", side: p0 }),
    greenM: i("plaster_bare", { color: "#5a7a58" }),
    redM: i("plaster_bare", { color: "#a84838", side: p0 }),
    purple: i("wool_grey", { color: "#9a62c8" }),
    plaster: i("plaster_bare"),
    slate: i("concrete_grey", { color: "#5a5c62" }),
    canvas: i("linen_stained", { color: "#9a9468", side: p0 }),
    olive: i("wood_painted_white", { color: "#5e6a3e" }),
    paintW: wo(u.paint("#d8d4c8", { rough: 0.8 })),
    wool: i("wool_grey"),
    ash: i("ruin_ash"),
    char: i("ruin_char"),
    dry: i("ruin_char", { color: "#8a7050" }),
    banner: i("church_banner", { side: p0 }),
    shard: wo(
      new n0({
        color: new Xt(0.3, 0.3, 0.3),
        roughness: 0.05,
        metalness: 0.15,
      }),
    ),
  }),
    (d.banner.alphaTest = 0.5),
    (d.ledger = i("church_ledger")),
    (d.ledger.polygonOffset = !0),
    (d.ledger.polygonOffsetFactor = -2),
    (d.ledger.polygonOffsetUnits = -2),
    (d.tracery = d.rib));
  const y = new yn("church_in"),
    w = (T, D, N) => y.add(D, d[T], N),
    g = [],
    z = Object.fromEntries(da.map((T, D) => [T, D])),
    x = pr(w, t);
  r.push(...x.colliders);
  const v = vr(s, e, w, u, t),
    n = gr(w, g, t, z);
  r.push(...n.colliders);
  const l = Sr(s, e, w, d, g, t, z);
  r.push(...l.colliders);
  for (let T = 0; T < 12; T++)
    g.push({
      x: -2.6 + t() * 1,
      y: 0,
      z: 41.15 + t() * 0.35,
      h: 0.05 + t() * 0.2,
      r: 0.018 + t() * 0.015,
      lit: t() > 0.15,
      cl: z.door,
    });
  for (let T = 0; T < 9; T++)
    g.push({
      x: 1.7 + t() * 0.9,
      y: 0,
      z: 41.15 + t() * 0.3,
      h: 0.05 + t() * 0.2,
      r: 0.018 + t() * 0.015,
      lit: t() > 0.15,
      cl: z.door,
    });
  const f = Vr(s, e, w, d, g, t, z);
  r.push(...f.colliders);
  const h = Fr(e, d, w, g, z, t);
  ((h.api.audio = s.audio), r.push(...h.colliders));
  const c = Nr(e, d, t);
  (r.push(...c.colliders), y.flush(e));
  for (const T of e.children)
    T.isMesh && !v.meshes.includes(T) && (T.receiveShadow = !0);
  const M = qr(s, e, d, s.rng(40115));
  r.push(M.collider);
  const m = Tr(s, e, g, d, t, { gustFrom: [0, 1, 40.3] }),
    k = new dt(-0.3, 0.94, -0.12).normalize(),
    S = 0.018,
    A = [0.06, 0.012, 0.005],
    b = _r(s, e, {
      keyDir: k,
      rng: t,
      glows: [
        { x: 0, y: 1.1, z: 58.3, r: 2.4, c: [S * 1.6, S * 0.72, S * 0.24] },
        { x: 0, y: 2.2, z: 60.2, r: 1.8, c: [S, S * 0.45, S * 0.15] },
        { x: -2.6, y: 0.6, z: 57.5, r: 1.2, c: [S, S * 0.45, S * 0.15] },
        { x: 2.6, y: 0.6, z: 57.5, r: 1.2, c: [S, S * 0.45, S * 0.15] },
        {
          x: -2.35,
          y: 1.85,
          z: 56.35,
          r: 0.9,
          c: [S * 0.8, S * 0.36, S * 0.12],
        },
        {
          x: 2.35,
          y: 1.85,
          z: 56.35,
          r: 0.9,
          c: [S * 0.8, S * 0.36, S * 0.12],
        },
        { x: -4.95, y: 1.05, z: 59.75, r: 1.3, c: A },
        { x: 5.8, y: 0.95, z: 47.7, r: 1, c: A },
        { x: -2.1, y: 0.45, z: 41.5, r: 0.9, c: [S * 0.6, S * 0.27, S * 0.09] },
        { x: 1.95, y: 3, z: 59.5, r: 0.45, c: [0.16, 0.012, 0.006] },
      ],
      wisps: g
        .filter((T) => T.lit && T.cl === z.altar && T.h > 0.3)
        .map((T, D) => ({
          x: T.x,
          y: T.y + T.h + 0.03,
          z: T.z,
          h: 1.4 + (D % 3) * 0.6,
        })),
    }),
    P = da.map((T, D) => {
      const N = g.filter((E) => E.cl === D && E.lit);
      let H = 0,
        Q = 0,
        W = 0,
        B = 0;
      for (const E of N) {
        const Y = E.votive ? 0.45 : 1;
        ((H += E.x * Y),
          (Q += (E.y + E.h + 0.03) * Y),
          (W += E.z * Y),
          (B += Y));
      }
      B && ((H /= B), (Q /= B), (W /= B));
      const F = N.length && N.filter((E) => E.votive).length / N.length > 0.5;
      return (
        T === "altar" && ((W -= 0.9), (Q += 0.5)),
        {
          name: T,
          i: D,
          mem: N,
          x: H,
          y: Q + 0.3,
          z: W,
          cd: B,
          col:
            T === "lamp"
              ? [1, 0.06, 0.03]
              : F
                ? [1, 0.28, 0.1]
                : [1, 0.47, 0.17],
          ph: t() * 10,
        }
      );
    });
  for (const T of P) /^(steps|bank)/.test(T.name) && (T.gain = 0.75);
  const _ = {};
  P.forEach((T, D) => {
    _[T.name] = D;
  });
  const I = 0.36,
    R = [];
  let V = P.length;
  for (const T of v.lancets)
    (R.push({
      i: V,
      x: T.east ? pt.x1 - 0.5 : pt.x0 + 0.5,
      y: 6.2,
      z: T.zc,
      col: T.east ? [1, 0.45, 0.35] : [0.9, 0.35, 0.3],
      cd: 5,
      smash: !!T.smash,
    }),
      V++);
  const L = R.findIndex((T) => T.smash);
  (R.push({ i: V++, x: 0, y: 8.3, z: pt.z0 + 0.6, col: [1, 0.5, 0.4], cd: 7 }),
    R.push({
      i: V++,
      x: 0,
      y: 8.2,
      z: pt.z1 - 0.6,
      col: [0.45, 0.55, 1],
      cd: 6,
    }));
  const K = V++;
  for (const T of R) ca(T.i, T.x, T.y, T.z, T.cd, T.col, 7);
  ca(K, 0.3, 0.35, 52.4, 3, [0.55, 0.68, 1], 5.5);
  const j = {},
    O = (T, D, N, H, Q, W) => {
      const B = new No(Q, 0, W, 2);
      return (
        B.position.set(D, N, H),
        (B.name = "church_" + T),
        (B.castShadow = !1),
        e.add(B),
        B
      );
    },
    J = (T) => P[z[T]];
  ((j.altar = O("altar", 0, 2, 59.6, 16747068, 10)),
    (j.steps = O("steps", 0, 0.75, 58.2, 16745016, 7)),
    (j.lady = O("lady", J("lady").x, 1.3, J("lady").z - 0.4, 16734768, 6)),
    (j.cand = O("cand", -2.3, 1.95, 56.4, 16747068, 8)),
    (j.back = O("back", 4.75, 1.45, 60.4, 16747068, 7)),
    (j.joseph = O(
      "joseph",
      J("joseph").x - 0.35,
      1.15,
      J("joseph").z,
      16730662,
      5,
    )));
  const tt = o.inside;
  (tt.position.set(J("door").x, 1.1, J("door").z + 0.8), (tt.distance = 7));
  const st = {
      altar: [j.altar, 0.55],
      stepsM: [j.steps, 0.9],
      lady: [j.lady, 0.7],
      candW: [j.cand, 1.25],
      door: [tt, 0.8],
      back: [j.back, 0.85],
      joseph: [j.joseph, 0.9],
    },
    G = Lr(s, e, v, [
      {
        east: !0,
        zc: 46.5,
        target: [-1, 0, 43.4],
        intensity: 1100,
        angle: 0.25,
      },
      {
        east: !0,
        zc: 56.5,
        target: [-1.9, 0, 55.6],
        intensity: 1e3,
        angle: 0.24,
      },
    ]),
    q = { gain: 1 },
    U = (T, D) =>
      1 +
      0.06 * Math.sin(D * 9.1 + T.ph) * Math.sin(D * 5.3 + T.ph * 2) +
      0.05 * Math.sin(D * 17.3 + T.ph * 3) +
      0.04 * Math.sin(D * 2.1 + T.ph),
    Z = (T, D) => {
      const N = m.U.uGust.value,
        H = M.api.since,
        Q =
          H >= 0 && H < 3
            ? 6.5 * Math.exp(-H / 0.55) * Math.min(1, H / 0.03)
            : 0;
      for (const W of P) {
        let B = 0;
        for (const et of W.mem) B += (et.level ?? 1) * (et.votive ? 0.45 : 1);
        const F =
            U(W, D) *
            (1 - 0.55 * N * (0.6 + 0.4 * Math.sin(D * 23 + W.ph))) *
            q.gain,
          E = B * I * F * (W.gain ?? 1);
        (_0.pos[_[W.name]].set(W.x, W.y, W.z, E),
          _0.col[_[W.name]].set(
            W.col[0],
            W.col[1],
            W.col[2],
            Math.min(9, 2.6 + Math.sqrt(Math.max(E, 0)) * 0.75),
          ));
        const Y = st[W.name];
        Y &&
          (Y[0].intensity =
            E * Y[1] +
            (Y[0] === tt ? o.spill * 6 : 0) +
            (Y[0] === j.cand ? Q * 9 : 0));
      }
      for (const W of R)
        _0.pos[W.i].w = W.cd * (0.85 + 0.15 * Math.sin(D * 1.3 + W.i));
      {
        const W = R[L],
          B = M.api.state;
        (B > 0
          ? (_0.pos[W.i].set(
              pt.x0 + 0.15,
              4.4,
              M.api.zc + 0.2,
              W.cd *
                (1 +
                  0.5 *
                    B *
                    (0.85 + 0.15 * Math.sin(D * 6.1) * Math.sin(D * 2.3)) +
                  Q),
            ),
            _0.col[W.i].set(1, 0.5, 0.2, 8 + 3 * Math.min(1, Q)))
          : W.flared &&
            (_0.pos[W.i].set(W.x, W.y, W.z, _0.pos[W.i].w),
            _0.col[W.i].set(W.col[0], W.col[1], W.col[2], 7)),
          (W.flared = B > 0));
      }
    };
  _0.used = so;
  const ot = o.group.parent?.getObjectByName("ash"),
    $ = new dt();
  (a.push((T, D) => {
    if (!o.group.parent?.visible) return;
    ((v.U.uT.value = D),
      M.update(T),
      m.update(T, D),
      Z(T, D),
      b.update(T, D),
      s.game.camera.getWorldPosition($));
    const N =
      $.x > pt.x0 - 0.3 &&
      $.x < pt.x1 + 0.3 &&
      $.z > pt.z0 - 0.4 &&
      $.z < pt.z1 + 0.3 &&
      $.y < 11;
    if (ot) {
      const H = N ? "church" : Ve($.x, $.z);
      ot.visible = !N && H !== "yard" && H !== "forest" && H !== "house";
    }
    G.update(T, D, N);
  }),
    Z(0, 0),
    (o.onReset = () => {
      (m.reset(),
        (h.api.openK = 0),
        h.api.open(0),
        c.api.reset(),
        M.api.reset());
    }));
  const C = {
    post: {
      exposure: 1.28,
      bloom: 0.3,
      bloomThreshold: 1.4,
      vignette: 0.32,
      sat: 1.05,
      contrast: 1.04,
    },
    key: [10270463, 1.4],
    keyDir: k.clone(),
    fill: [3820134, 0],
    fillDir: new dt(0.2, 1, 0.1),
    hemi: [1977408, 5913126, 3.3],
    env: 0.05,
    fog: [723468, 0.02],
  };
  for (const T of r) T.on = !1;
  return {
    group: e,
    colliders: r,
    anim: a,
    look: C,
    points: {
      akaneHold: [0, 41.45, Math.PI],
      priest: [0, 57.3, 0],
      approach: [0, 52.6],
      reveal: [0.15, 55.9],
      backIn: [(p.x0 + p.x1) / 2, pt.z1 - 1.4],
      backOut: [(p.x0 + p.x1) / 2, r0.z1 + 1.2],
      flood: [
        [0, 42.6],
        [-4.3, 42.4],
        [4.6, 42.6],
        [0, 44.2],
        [-4.8, 45.6],
        [4.8, 45.6],
      ],
    },
    backDoor: h.api,
    barricade: c.api,
    window: M.api,
    candles: {
      gust: (T = 1) => {
        (m.gust(T),
          s.audio?.play?.("candle_gust", {
            pos: [0, 1.6, 44],
            vol: 0.55 + 0.35 * T,
          }));
      },
      reset: () => m.reset(),
      count: g.length,
      lit: m.lit.length,
    },
    lights: { ...j, inside: tt },
    setWorld(T) {
      for (const D of r)
        D.on = T === "ruins" && (D !== h.api.collider || h.api.openK < 0.3);
      M.api.setWorld(T);
    },
    warmUp() {},
  };
}
