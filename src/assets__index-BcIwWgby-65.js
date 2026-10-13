// assets__index-BcIwWgby 65 — fog
// Lines 20705-21178 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
async function pi(s) {
  const { scene: o, renderer: t, game: u } = s,
    e = s.rng(20260929),
    r = new Kt();
  ((r.name = "section2"), o.add(r), (o.background = new Xt(0)));
  const a = [],
    p = [],
    i = [],
    d = hn();
  (r.add(d.mesh), a.push((F) => d.update(F)));
  const y = new Xs(16766624, 3.2);
  ((y.name = "sun"), (y.castShadow = !0), y.shadow.mapSize.set(4096, 4096));
  {
    const F = y.shadow.camera;
    ((F.left = -30),
      (F.right = 30),
      (F.top = 34),
      (F.bottom = -34),
      (F.near = 1),
      (F.far = 220));
  }
  ((y.shadow.bias = -35e-5), (y.shadow.normalBias = 0.035));
  const w = new Xs(9414358, 0.35);
  w.name = "skyfill";
  const g = new rn(10466520, 4872746, 0.55);
  ((g.name = "hemi2"), r.add(y, y.target, w, w.target, g));
  const z = (F, E = [0, 0, 12]) => {
      (y.target.position.set(...E),
        y.position.set(E[0] + F.x * 90, E[1] + F.y * 90, E[2] + F.z * 90));
    },
    x = {};
  {
    const F = new ln(t),
      E = new cn(),
      Y = d.mesh.clone();
    ((Y.material = d.mesh.material.clone()), E.add(Y));
    for (const [et, nt, it] of [
      ["dream", 0, 0],
      ["ruins", 1, 0],
      ["forest", 1, 1],
    ])
      ((Y.material.uniforms.uMode.value = nt),
        Y.material.uniforms.uForest && (Y.material.uniforms.uForest.value = it),
        (x[et] = F.fromScene(E, 0.02).texture));
    F.dispose();
  }
  const v = mn();
  r.add(v.group);
  const n = kn(s, e);
  (r.add(n.group), p.push(...n.colliders));
  const l = [],
    f = Fn(s);
  (r.add(f.mesh), a.push((F) => f.update(F)), Ca(v.basin.material, f.causU));
  const h = Vn(s, f, e);
  (r.add(h.school, h.dead),
    a.push((F, E) => {
      const Y = u.player.pos,
        et = u.npc?.pos;
      (h.watch(
        J0(Y.x, Y.z) < 2.4
          ? [Y.x, Y.z]
          : et && J0(et.x, et.z) < 1.2
            ? [et.x, et.z]
            : null,
      ),
        h.update(F, E));
    }),
    l.push((F) => {
      (f.setWorld(F), h.setWorld(F));
    }));
  const c = qn(s, f, e);
  (r.add(c.group), i.push(...c.circles), a.push((F, E) => c.update(F, E)));
  const M = Hn(s, e);
  (r.add(M.group),
    i.push(...M.circles),
    l.push((F) => {
      (c.setWorld(F), M.setWorld(F));
    }));
  const m = cr(s, {
    circles: [...c.circles, ...M.circles, ...M.holes],
    trees: c.trees,
    U: c.U,
  });
  r.add(m.group);
  const k = [
    { x: 0, z: 0, r: 0.55, k: 0.8 },
    { x: 0, z: 0, r: 0.5, k: 0.8 },
  ];
  (a.push((F, E) => {
    const Y = u.player.pos,
      et = u.npc?.pos;
    ((k[0].x = Y.x),
      (k[0].z = Y.z),
      et && ((k[1].x = et.x), (k[1].z = et.z)),
      m.update(F, E, u.camera, et ? k : [k[0]]));
  }),
    l.push((F) => m.setWorld(F)));
  const S = Qn(s, e);
  (r.add(S.group),
    p.push(...S.colliders),
    a.push((F, E) => S.update(F, E)),
    l.push((F) => S.setWorld(F)));
  const A = {
    churchIn: Gr(s, { church: S.church, rng: s.rng(4011) }),
    forest: ni(s, { rng: s.rng(4012), sky: d }),
    house: un(s, { rng: s.rng(4013) }),
  };
  (S.church.group.add(A.churchIn.group), r.add(A.forest.group, A.house.group));
  for (const F of Object.values(A)) {
    (p.push(...(F.colliders || [])), i.push(...(F.circles || [])));
    for (const E of F.anim || []) a.push(E);
    F.setWorld && l.push((E) => F.setWorld(E));
  }
  for (let F = 0; F < 1; F += 1 / 220)
    for (const E of [
      [-5, -0.8],
      [0.7, 1],
      [-2.3, 0.1],
    ]) {
      const Y = F * Math.PI * 2,
        et = Math.cos(Y),
        nt = Math.sin(Y);
      let it = 0;
      for (; it < 8 && J0(E[0] + et * it, E[1] + nt * it) < 0;) it += 0.05;
      if (it < 0.1 || it >= 8) continue;
      const lt = E[0] + et * (it - 0.35),
        ht = E[1] + nt * (it - 0.35);
      J0(lt, ht) < -0.2 && i.push({ x: lt, z: ht, r: 0.34, pond: !0 });
    }
  const b = { world: "dream" },
    P = {
      dream: {
        post: {
          exposure: 0.95,
          bloom: 0.24,
          bloomThreshold: 1.35,
          vignette: 0.32,
          sat: 1.12,
          contrast: 1.08,
        },
        key: [16764820, 4.2],
        keyDir: new dt(-0.83, 0.27, 0.49).normalize(),
        fill: [9414358, 0.35],
        fillDir: new dt(0.6, 0.5, -0.6).normalize(),
        hemi: [10466520, 4872746, 0.42],
        env: 0.5,
        fog: [14725242, 0.009],
      },
      ruins: {
        post: {
          exposure: 0.95,
          bloom: 0.2,
          bloomThreshold: 1.5,
          vignette: 0.45,
          sat: 0.95,
          contrast: 1.06,
        },
        key: [16734756, 0.9],
        keyDir: new dt(0.35, 0.18, 0.92).normalize(),
        fill: [8361408, 0.2],
        fillDir: new dt(0.45, 0.42, -0.79).normalize(),
        hemi: [5913146, 1708044, 0.45],
        env: 0.22,
        fog: [1313287, 0.026],
      },
    },
    _ = ["exposure", "bloom", "bloomThreshold", "vignette", "sat", "contrast"],
    I = (F) => ({
      post: Object.fromEntries(_.map((E) => [E, F.post[E] ?? u.post[E]])),
      key: new Xt(F.key[0]),
      keyI: F.key[1],
      keyDir: F.keyDir.clone().normalize(),
      fill: new Xt(F.fill[0]),
      fillI: F.fill[1],
      fillDir: F.fillDir.clone().normalize(),
      hemiSky: new Xt(F.hemi[0]),
      hemiGround: new Xt(F.hemi[1]),
      hemiI: F.hemi[2],
      env: F.env,
      envName: F.envName || "ruins",
      fog: new Xt(F.fog[0]),
      fogD: F.fog[1],
      skyForest: F.sky?.forest ?? 0,
    }),
    R = (F) =>
      F
        ? I({ ...P.ruins, ...F, post: { ...P.ruins.post, ...(F.post || {}) } })
        : null,
    V = { ruins: I(P.ruins) },
    L = (F) => V[F] || V.ruins,
    K = I(P.ruins),
    j = new Set(["church", "yard", "forest", "house"]),
    O = new dt(0, 0, 12),
    J = (F, E = !0) => {
      if (
        (y.color.copy(F.key),
        (y.intensity = F.keyI),
        z(F.keyDir, O.toArray()),
        w.color.copy(F.fill),
        (w.intensity = F.fillI),
        w.position.copy(F.fillDir).multiplyScalar(80),
        w.target.position.set(0, 0, 0),
        g.color.copy(F.hemiSky),
        g.groundColor.copy(F.hemiGround),
        (g.intensity = F.hemiI),
        (o.environment = x[F.envName] || x.ruins),
        (o.environmentIntensity = F.env),
        o.fog && (o.fog.color.copy(F.fog), (o.fog.density = F.fogD)),
        d.uniforms.uForest && (d.uniforms.uForest.value = F.skyForest),
        E)
      ) {
        const Y = u.lookMul || {};
        for (const et of _) u.post[et] = F.post[et] * (Y[et] ?? 1);
      }
    },
    tt = (F, E) => {
      for (const Y of _) K.post[Y] += (F.post[Y] - K.post[Y]) * E;
      (K.key.lerp(F.key, E),
        (K.keyI += (F.keyI - K.keyI) * E),
        K.keyDir.lerp(F.keyDir, E).normalize(),
        K.fill.lerp(F.fill, E),
        (K.fillI += (F.fillI - K.fillI) * E),
        K.fillDir.lerp(F.fillDir, E).normalize(),
        K.hemiSky.lerp(F.hemiSky, E),
        K.hemiGround.lerp(F.hemiGround, E),
        (K.hemiI += (F.hemiI - K.hemiI) * E),
        (K.env += (F.env - K.env) * E),
        K.fog.lerp(F.fog, E),
        (K.fogD += (F.fogD - K.fogD) * E),
        (K.skyForest += (F.skyForest - K.skyForest) * E),
        (K.envName =
          K.skyForest > 0.5
            ? "forest"
            : F.envName === "forest"
              ? K.envName
              : F.envName));
    },
    st = (F) => {
      (tt(F, 1), (K.envName = F.envName));
    },
    G = () => {
      const F = u.player.pos,
        E = Ve(F.x, F.z),
        Y =
          b.world === "ruins" && j.has(E)
            ? [Math.round(F.x / 6) * 6, 0, Math.round(F.z / 6) * 6]
            : [0, 0, 12];
      return O.x !== Y[0] || O.z !== Y[2]
        ? (O.set(...Y), (y.shadow.needsUpdate = !0), !0)
        : !1;
    };
  function q() {
    if (b.world !== "ruins") return;
    const F = u.player.pos;
    (G(), st(L(Ve(F.x, F.z))), J(K));
  }
  a.push((F) => {
    if (b.world !== "ruins") return;
    const E = u.camera.position,
      Y = L(Ve(E.x, E.z));
    (G(), tt(Y, 1 - Math.exp(-F * 2.2)), J(K, !u.postOwned));
  });
  const U = () => {
    ((V.church = R(A.churchIn.look)),
      (V.yard = R(A.forest.yardLook || A.forest.look)),
      (V.forest = R(A.forest.look)),
      (V.house = R(A.house.look)));
    for (const F of Object.keys(V)) V[F] || delete V[F];
    V.ruins = I(P.ruins);
  };
  U();
  function Z(F) {
    const E = P[F];
    ((b.world = F),
      F === "ruins"
        ? (G(),
          st(L(Ve(u.player.pos.x, u.player.pos.z))),
          (!o.fog || !o.fog.isFogExp2) && (o.fog = new $s(E.fog[0], E.fog[1])),
          J(K))
        : (O.set(0, 0, 12),
          y.color.set(E.key[0]),
          (y.intensity = E.key[1]),
          z(E.keyDir),
          Object.assign(u.post, E.post),
          w.color.set(E.fill[0]),
          (w.intensity = E.fill[1]),
          w.position.copy(E.fillDir).multiplyScalar(80),
          w.target.position.set(0, 0, 0),
          g.color.set(E.hemi[0]),
          g.groundColor.set(E.hemi[1]),
          (g.intensity = E.hemi[2]),
          (o.environment = x[F]),
          (o.environmentIntensity = E.env),
          !o.fog || !o.fog.isFogExp2
            ? (o.fog = new $s(E.fog[0], E.fog[1]))
            : (o.fog.color.set(E.fog[0]), (o.fog.density = E.fog[1])),
          d.uniforms.uForest && (d.uniforms.uForest.value = 0)),
      (d.uniforms.uMode.value = F === "ruins" ? 1 : 0),
      v.setWorld(F),
      n.setWorld(F));
    for (const Y of l) Y(F);
    ((y.shadow.needsUpdate = !0),
      u.nav?.rebuild(),
      (y.shadow.autoUpdate = F !== "ruins"));
  }
  (a.push(() => {
    y.shadow.autoUpdate ||
      ((b.shT = (b.shT || 0) + 1),
      b.shT % 2 === 0 && (y.shadow.needsUpdate = !0));
  }),
    Z("dream"));
  const ot = 7,
    $ = (...F) => {
      const E = [];
      for (const Y of F)
        Y?.traverse((et) => {
          (et.isMesh || et.isPoints || et.isLine) && !et.isLight && E.push(et);
        });
      return E;
    },
    C = {
      behind: $(S.district?.group, f.mesh, h.school, h.dead, m.group, M.group),
      away: $(
        c.group,
        n.group,
        S.group.getObjectByName("checkpoint"),
        ...S.group.children.filter((F) => F.name === "outside_baked"),
      ),
      deep: $(A.churchIn.group),
    };
  {
    const F = new Set([...C.behind, ...C.away, ...C.deep]);
    C.sealed = $(A.forest.group, S.group).filter((E) => !F.has(E));
  }
  const T = { behind: !1, away: !1, deep: !1, sealed: !1 },
    D = (F, E) => {
      if (T[F] !== E) {
        T[F] = E;
        for (const Y of C[F])
          E
            ? ((Y.userData.cullMask = Y.layers.mask), Y.layers.set(ot))
            : Y.userData.cullMask != null &&
              ((Y.layers.mask = Y.userData.cullMask),
              (Y.userData.cullMask = null));
      }
    };
  a.push(() => {
    const F = u.camera.position,
      E = Ve(F.x, F.z),
      Y = b.world === "ruins";
    (D("behind", Y && j.has(E)),
      D("away", Y && E !== "church" && j.has(E)),
      D("deep", Y && (E === "forest" || E === "house")),
      D(
        "sealed",
        Y &&
          !!u.houseSealed &&
          F.x > _t.x0 + 0.1 &&
          F.x < _t.x1 - 0.1 &&
          F.z > _t.z0 + 0.15 &&
          F.z < _t.z1 - 0.15,
      ));
  });
  const N = { sun: y, fill: w, hemi: g },
    H = () => {
      const F = u.camera,
        E = [];
      o.traverse((et) => {
        (et.isMesh || et.isPoints || et.isLine) &&
          et.frustumCulled &&
          E.push(et);
      });
      const Y = () => {
        const et = u.lighting,
          nt = u.shadowBudget?.cands || { spot: [], point: [] },
          it = [
            ...new Set(
              [et?.sun, y, u.weapons?.torch, ...nt.spot, ...nt.point].filter(
                Boolean,
              ),
            ),
          ],
          lt = it.map((ht) => ht.castShadow);
        it.forEach((ht) => {
          ((ht.castShadow = !0), (ht.shadow.needsUpdate = !0));
        });
        for (const ht of E) ht.frustumCulled = !1;
        t.shadowMap.render(it, o, F);
        for (const ht of E) ht.frustumCulled = !0;
        it.forEach((ht, yt) => {
          ht.castShadow = lt[yt];
        });
      };
      for (const et of ["ruins", "dream"]) {
        (Z(et), t.setRenderTarget(u.post.rt.scene), t.compile(o, F), Y());
        for (const nt of E) nt.frustumCulled = !1;
        t.render(o, F);
        for (const nt of E) nt.frustumCulled = !0;
        (t.setRenderTarget(null), u.render());
      }
      for (const et of Object.values(A)) et.warmUp?.();
    },
    Q = {
      setWorld: Z,
      get world() {
        return b.world;
      },
      sky: d,
      terrain: v,
      walls: n,
      water: f,
      koi: h,
      flora: c,
      lawn: m,
      stones: M,
      outside: S,
      church: S.church,
      fires: S.fires,
      hooks: l,
      envs: x,
      warmUp: H,
      churchIn: A.churchIn,
      forest: A.forest,
      house: A.house,
      snapLook: q,
      refreshLooks: U,
      get look() {
        return K;
      },
    },
    W = (F, E) => {
      const Y = Yt.a[0],
        et = Yt.a[1],
        nt = Yt.b[0] - Y,
        it = Yt.b[1] - et,
        lt = Math.max(
          0,
          Math.min(1, ((F - Y) * nt + (E - et) * it) / (nt * nt + it * it)),
        );
      return Math.hypot(F - Y - nt * lt, E - et - it * lt) < Yt.w * 0.55;
    };
  return {
    group: r,
    colliders: p,
    circles: i,
    anim: a,
    points: Ie,
    props: Q,
    lighting: N,
    navPlan: xn,
    roomAt: Ve,
    surfaceAt: (F, E) => {
      const Y = Ve(F, E);
      return Y === "garden" || Y === "gapW" || Y === "gapE"
        ? W(F, E)
          ? b.world === "ruins"
            ? "ash"
            : "wood"
          : Bo(F, E) < 0.62
            ? "gravel"
            : b.world === "ruins"
              ? "ash"
              : "grass"
        : Y === "yard" || Y === "forest"
          ? A.forest.surfaceAt?.(F, E) || "grass"
          : Y === "house"
            ? A.house.surfaceAt?.(F, E) || "wood"
            : Y === "shop"
              ? "tile"
              : "stone";
    },
    start: Ie.start,
  };
}
