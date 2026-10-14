// assets__index-BcIwWgby 64 — push
// Lines 20097-20704 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function ni(s, { rng: o, sky: t }) {
  const u = performance.now(),
    e = s.game,
    r = new Kt();
  ((r.name = "forest"), (r.visible = !1));
  const a = new Kt();
  ((a.name = "forest_meshes"), r.add(a));
  const p = [],
    i = [],
    d = [],
    y = nc();
  (t?.uniforms?.uMoonF && t.uniforms.uMoonF.value.copy(To),
    e.post && !e.post.clock && (e.post.clock = () => e.time));
  const w = [];
  for (let X = 0; X < $0.nz; X++)
    for (let rt = 0; rt < $0.nx; rt++) {
      const ct = new Kt();
      ((ct.name = "forest_chunk"),
        a.add(ct),
        w.push({
          g: ct,
          x: $0.x0 + (rt + 0.5) * $0.sx,
          z: $0.z0 + (X + 0.5) * $0.sz,
          parts: { bark: [], cards: [], cores: [] },
        }));
    }
  const g = (X, rt) => w[as(X, rt)],
    z = ic(y, s.rng(4061)),
    x = rc(),
    v = qc(),
    n = Gc(x, "crowns"),
    { trees: l, far: f } = Ec(y, o),
    h = Fc(s, y, s.rng(4052));
  (a.add(h.group), p.push(...h.colliders), i.push(...h.circles));
  {
    const X = g(h.yew.x, h.yew.z);
    (X.parts.bark.push(...h.yewParts),
      (X.parts.extra = [h.yewLeaves.geometry(), h.grass.geometry()]),
      l.push({
        kind: "oak",
        x: h.yew.x,
        z: h.yew.z,
        r: 0.6,
        H: 9.5,
        cb: 1.8,
        Rc: 4.2,
        space: 0,
        yard: !0,
      }));
  }
  const c = Ea(y),
    M = (X, rt) => {
      for (const ct of c)
        if (
          (X - ct.x) ** 2 + (rt - ct.z) ** 2 <
          (ct.kind === "stone" ? 1.1 : 0.7) ** 2
        )
          return !0;
      if (Math.abs(X - Tt.x) < 2.2 && rt > Tt.z0 - 1.5 && rt < Tt.z1 + 1.5)
        return !0;
      for (const ct of je)
        if ((X - ct.x) ** 2 + (rt - ct.z) ** 2 < (ct.r * 1.75) ** 2) return !0;
      for (const ct of m)
        if ((X - ct[0]) ** 2 + (rt - ct[1]) ** 2 < ct[2] * ct[2]) return !0;
      return y.trodAt(X, rt) > 0.15;
    },
    m = [],
    k = ai(s, y, s.rng(4041), { lamps: c, trees: l });
  (a.add(k.group), i.push(...k.circles), p.push(...k.cart.colliders));
  for (const X of k.bark)
    g(
      X.attributes.position.getX(0),
      X.attributes.position.getZ(0),
    ).parts.bark.push(X);
  for (const X of k.things)
    m.push([
      X.x,
      X.z,
      X.name === "graves"
        ? 2.6
        : X.name === "graves2"
          ? 2.1
          : X.name === "cart"
            ? 3.6
            : X.name === "pram"
              ? 1.7
              : X.name === "strips" || X.name === "shoe" || X.name === "doll"
                ? 0
                : 1,
    ]);
  {
    const X = Nt.cart,
      rt = {
        o: X,
        kind: "cart",
        ...Ua(
          X,
          k.cart.solids,
          X.gap * 1.25,
          k.circles.filter((gt) => gt.obst === "cart"),
        ),
      };
    let ct = 0,
      ut = 0,
      mt = 0;
    for (const [gt, kt, zt] of k.cart.solids)
      kt < 1.6 && ((ct += gt), (ut += zt), mt++);
    ((rt.at = [ct / Math.max(1, mt), ut / Math.max(1, mt)]),
      y.setDodges([z.dodge, rt], [z.jump]),
      Object.defineProperty(y, "solids", {
        value: { tree: z.solids.tree, cart: k.cart.solids, log: z.solids.log },
        enumerable: !1,
      }));
  }
  for (const X of z.bark)
    g(
      X.attributes.position.getX(0),
      X.attributes.position.getZ(0),
    ).parts.bark.push(X);
  (g(Nt.tree.x, Nt.tree.z).parts.cards.push(...z.cards),
    p.push(...z.colliders),
    i.push(...z.circles));
  for (const [X, rt, ct] of [
    [Nt.tree.plate.u, Nt.tree.plate.v, 2.6],
    [1, -2.2, 2.2],
    [-1.4, -0.2, 2.6],
  ]) {
    const [ut, mt] = He(Nt.tree, X, rt);
    m.push([ut, mt, ct]);
  }
  {
    const X = Nt.log,
      rt = (X.ang * Math.PI) / 180;
    for (let ct = -4.2; ct <= 4.21; ct += 0.7) {
      const [ut, mt] = He(X, Math.cos(rt) * ct, Math.sin(rt) * ct);
      m.push([ut, mt, 0.75]);
    }
  }
  const S = hc(s, y);
  for (const X of S.chunks) g(X.cx, X.cz).g.add(X.mesh);
  for (const X of S.group.children.filter((rt) => !rt.name.endsWith("_chunk")))
    a.add(X);
  const A = (X) => {
    const rt = X.attributes.position.getX(0),
      ct = X.attributes.position.getZ(0),
      ut = S.chunks.find(
        (mt) => Math.abs(rt - mt.cx) <= 13 && Math.abs(ct - mt.cz) <= 13.2,
      );
    ut &&
      ((ut.mesh.geometry = a0([ut.mesh.geometry, X])),
      ut.mesh.geometry.computeBoundingSphere(),
      ut.mesh.geometry.computeBoundingBox());
  };
  for (const X of k.mounds) A(X);
  for (const X of z.earth) A(X);
  const b = new Xt(),
    P = (X, rt) => {
      const ct = (X.pos.x * 12.9898 + X.pos.z * 78.233) % 1,
        ut = X.shade * (0.85 + 0.3 * Math.abs(ct));
      return (
        X.cell === 2
          ? rt.setRGB(0.55 * ut, 0.62 * ut, 0.5 * ut)
          : X.cell === 8
            ? rt.setRGB(0.6 * ut, 0.66 * ut, 0.6 * ut)
            : X.cell === 7
              ? rt.setRGB(0.7 * ut, 0.8 * ut, 0.7 * ut)
              : rt.setRGB(0.85 * ut, 0.95 * ut, 0.9 * ut),
        b
      );
    },
    _ = s.rng(4071);
  for (const X of l) {
    if (X.yard || X.kind === "giant") continue;
    let rt = 1e9;
    for (let zt = 0; zt < 6; zt++)
      rt = Math.min(
        rt,
        y.heightAt(
          X.x + Math.cos(zt) * X.r * 1.3,
          X.z + Math.sin(zt) * X.r * 1.3,
        ),
      );
    const ct = y.dPathAt(X.x, X.z) < 22 || y.clearingSd(X.x, X.z) < 10,
      ut = X.own ? _ : o,
      mt =
        X.kind === "cedar"
          ? Hc(X, rt, ut, ct)
          : Oc(X, rt, ut, { young: X.kind === "young" }),
      gt = g(X.x, X.z),
      kt = mt.cards.filter(
        (zt) => zt.pos.y > 3.2 || y.sdAt(zt.pos.x, zt.pos.z) > 1.2,
      );
    (gt.parts.bark.push(...mt.parts),
      X.own
        ? ((gt.parts.ownCards ||= []).push(...kt),
          mt.core && (gt.parts.ownCores ||= []).push(mt.core))
        : (gt.parts.cards.push(...kt), mt.core && gt.parts.cores.push(mt.core)),
      X.kind !== "young" &&
        y.dPathAt(X.x, X.z) < 8 &&
        Kc(y, ut, X, rt, gt.parts.bark),
      y.sdAt(X.x, X.z) < 6 &&
        i.push({
          x: X.x,
          z: X.z,
          r: X.r * (X.kind === "cedar" ? 1.25 : 1.1) + 0.05,
          tree: !0,
        }));
  }
  const I = ti(y, s.rng(4031));
  for (const X of I.list) {
    const rt = g(X.G.x, X.G.z);
    (rt.parts.bark.push(...X.bark), rt.parts.cards.push(...X.cards));
  }
  (p.push(...I.colliders), i.push(...I.circles));
  const R = [...I.lurks, z.lurk].sort((X, rt) => X.s - rt.s),
    V = new Map(),
    L = Uc(y, o, as, V, M);
  for (const [X, rt] of V) w[X].parts.bark.push(...rt);
  i.push(...L.circles);
  const K = Vc(
    y,
    o,
    as,
    (X, rt) =>
      M(X, rt) ||
      y.sideSpawns.some((ct) => (X - ct.x) ** 2 + (rt - ct.z) ** 2 < 6.8),
  );
  i.push(...K.circles);
  const j = Dc();
  for (const [X, rt] of K.byChunk) {
    const ct = new bt(a0(rt), j);
    ((ct.name = "forest_rocks"),
      (ct.castShadow = !0),
      (ct.receiveShadow = !0),
      w[X].g.add(ct));
  }
  const O = Sc(y, o, [
    [-4.6, 193.2, 0.34],
    [-2.9, 204.6, 0.42],
    [14.6, 191.4, 0.3],
    [16.2, 201.8, 0.38],
    [12.4, 211.2, 0.36],
    [-5.6, 188.2, 0.28],
  ]);
  for (const X of O.bark)
    g(
      X.attributes.position.getX(0),
      X.attributes.position.getZ(0),
    ).parts.bark.push(X);
  i.push(...O.circles);
  {
    const X = new bt(a0(O.tops), i0(Ac(), "stumptop"));
    ((X.name = "forest_stump_tops"), (X.receiveShadow = !0), a.add(X));
  }
  const J = kc(y, o, as, M);
  i.push(...J.circles);
  const tt = i0(new n0({ color: 16777215, roughness: 0.7 }), "mushroom");
  a.add(Pc([...J.mush, ...L.mush, ...z.mush], o, tt));
  for (const X of w) {
    if (
      (X.parts.ownCards &&
        (X.parts.extra ||= []).push(Ma(X.parts.ownCards, _, P)),
      X.parts.ownCores &&
        (X.parts.extra ||= []).push(
          wa(X.parts.ownCores, () => 0.45 + _() * 0.15),
        ),
      X.parts.bark.length)
    ) {
      const rt = new bt(a0(X.parts.bark), v);
      ((rt.name = "forest_trunks"),
        (rt.castShadow = !0),
        (rt.receiveShadow = !0),
        X.g.add(rt));
    }
    if (X.parts.cards.length || J.out.get(w.indexOf(X)) || X.parts.extra) {
      const rt = Ma(X.parts.cards, o, P),
        ct = X.parts.cores.length
          ? wa(X.parts.cores, () => 0.45 + o() * 0.15)
          : null,
        ut = J.out.get(w.indexOf(X))?.geometry(),
        mt = new bt(a0([rt, ct, ut, ...(X.parts.extra || [])]), n);
      ((mt.name = "forest_foliage"),
        (mt.castShadow = !0),
        (mt.receiveShadow = !0),
        X.g.add(mt));
    }
    X.parts = null;
  }
  const st = Yc(l, f, To);
  ((K0.tCanopy.value = st.tex),
    K0.uCanopy.value.set(st.box.x0, st.box.z0, st.box.w, st.box.d));
  const G = cc(),
    q = jc(f, G.tex, G.n);
  a.add(q);
  const U = Wc(s, y, o);
  (a.add(U.group), p.push(...U.colliders));
  const Z = gc(s, y, o);
  a.add(Z.group);
  for (const X of Z.lights) r.add(X);
  for (const X of Z.spots) {
    if (X.kind === "post") {
      const rt = X.x,
        ct = X.z;
      i.push({ x: rt, z: ct, r: 0.1, lamp: !0 });
    }
    if (X.kind === "stone") {
      const rt = X.pos;
      i.push({ x: rt.x, z: rt.z, r: 0.3, lamp: !0 });
    }
  }
  const ot = Nc(y, o, To, st);
  a.add(ot.mesh);
  const $ = Lc(Z.spots, Z.uGlow);
  a.add($.pts);
  const C = de[1],
    T = y.at(C.s - 2),
    D = [+(T.x + T.tz * 7.2).toFixed(2), +(T.z - T.tx * 7.2).toFixed(2)],
    N = Rc(s, y, o, { warn: [...D, 7.5] });
  a.add(N.points);
  const H = new Map(),
    Q = 2;
  for (const X of i) {
    const rt = `${Math.floor(X.x / Q)},${Math.floor(X.z / Q)}`;
    (H.has(rt) || H.set(rt, []), H.get(rt).push(X));
  }
  const W = (X, rt) => {
    const ct = Math.floor(X / Q),
      ut = Math.floor(rt / Q);
    for (let mt = ct - 1; mt <= ct + 1; mt++)
      for (let gt = ut - 1; gt <= ut + 1; gt++)
        for (const kt of H.get(`${mt},${gt}`) || [])
          if ((X - kt.x) ** 2 + (rt - kt.z) ** 2 < (kt.r + 0.2) ** 2) return !0;
    return !1;
  };
  ((Js.yard = (X, rt) => y.inYard(X, rt) && !W(X, rt)),
    (Js.forest = (X, rt) => rt >= St.z && y.sdAt(X, rt) < 0.3 && !W(X, rt)));
  const B = [];
  {
    const X = y.G,
      rt = [];
    for (let kt = 0; kt < X.nz; kt++)
      for (let zt = 0; zt < X.nx; zt++) {
        const Et = y.grids.sdG[kt * X.nx + zt];
        if (Et < 0.32 || Et > 0.8) continue;
        const o0 = X.x0 + zt * X.cell,
          E0 = X.z0 + kt * X.cell;
        E0 < St.z + 0.45 ||
          y.houseSd(o0, E0) < 1.2 ||
          (Math.abs(o0 - Tt.x) < 1.7 && E0 > Tt.z0 - 0.6 && E0 < Tt.z1 + 0.6) ||
          rt.push([o0, E0, o()]);
      }
    rt.sort((kt, zt) => kt[2] - zt[2]);
    const ct = new Map(),
      ut = (kt, zt) => `${Math.floor(kt / 1.5)},${Math.floor(zt / 1.5)}`,
      mt = (kt, zt, Et) => {
        const o0 = Math.floor(kt / 1.5),
          E0 = Math.floor(zt / 1.5);
        for (let oe = o0 - 1; oe <= o0 + 1; oe++)
          for (let Pe = E0 - 1; Pe <= E0 + 1; Pe++)
            for (const qo of ct.get(`${oe},${Pe}`) || [])
              if ((qo[0] - kt) ** 2 + (qo[1] - zt) ** 2 < Et * Et) return !0;
        return !1;
      },
      gt = (kt, zt) => {
        const Et = Math.floor(kt / Q),
          o0 = Math.floor(zt / Q);
        for (let E0 = Et - 1; E0 <= Et + 1; E0++)
          for (let oe = o0 - 1; oe <= o0 + 1; oe++)
            for (const Pe of H.get(`${E0},${oe}`) || [])
              if ((kt - Pe.x) ** 2 + (zt - Pe.z) ** 2 < (Pe.r + 0.05) ** 2)
                return !0;
        return !1;
      };
    for (const [kt, zt] of rt) {
      if (mt(kt, zt, 0.6) || gt(kt, zt)) continue;
      const Et = ut(kt, zt);
      (ct.has(Et) || ct.set(Et, []),
        ct.get(Et).push([kt, zt]),
        B.push({ x: kt, z: zt, r: 0.55, edge: !0 }));
    }
    i.push(...B);
  }
  const F = new dt(0.1, 0.35, -1).normalize(),
    E = {
      post: {
        exposure: 2.3,
        bloom: 0.3,
        bloomThreshold: 1,
        vignette: 0.62,
        sat: 1,
        contrast: 1.16,
      },
      key: [9086176, 0.06],
      keyDir: To.clone(),
      fill: [11553322, 0.003],
      fillDir: F,
      hemi: [2372686, 920328, 0.006],
      env: 0.012,
      envName: "forest",
      fog: [263946, 0.052],
      sky: { forest: 1 },
    },
    Y = {
      post: {
        exposure: 1.7,
        bloom: 0.3,
        bloomThreshold: 1.05,
        vignette: 0.56,
        sat: 1.02,
        contrast: 1.13,
      },
      key: [9611488, 0.48],
      keyDir: To.clone(),
      fill: [16737332, 0.3],
      fillDir: F,
      hemi: [3029590, 1379593, 0.075],
      env: 0.1,
      envName: "forest",
      fog: [789005, 0.034],
      sky: { forest: 1 },
    },
    et = {
      forest: { mist: new Xt(0.001, 0.0015, 0.0023), scatter: 0.042 },
      yard: { mist: new Xt(0.0062, 0.0082, 0.011), scatter: 0.06 },
    };
  let nt = 0,
    it = !0;
  const lt = new dt(),
    ht = 0.32,
    yt = 0.85,
    Ft = 35,
    Ut = [
      ...k.group.children,
      ...Z.group.children.filter((X) => X.name === "lantern_hook_swing"),
    ];
  for (const X of Ut) {
    X.geometry.computeBoundingSphere();
    const rt = X.geometry.boundingSphere.center.clone().add(X.position);
    ((X.userData.cx = rt.x), (X.userData.cz = rt.z));
  }
  const Lt = e.camera,
    h0 = s.scene.getObjectByName("sun");
  let D0 = 0,
    ee = 0;
  const Ye = new dt(1e9, 0, 0);
  d.push((X, rt) => {
    if (!r.visible) return;
    K0.uFT.value = rt;
    const ct = Lt.position,
      ut = e.roomAt ? e.roomAt(ct.x, ct.z) : null;
    if (e.weapons?.torch && e.post) {
      const mt =
        (ut === "forest" || ut === "yard"
          ? (t?.uniforms?.uForest?.value ?? 0) *
            yt *
            Math.min(1.2, (s.scene.fog?.density ?? 0) / 0.05)
          : 0) * (e.beamLight ? (e.beamFogK ?? 0.12) : 1);
      ((e.post.beamLight = e.beamLight || e.weapons.torch),
        (e.post.beamFog += (mt - e.post.beamFog) * Math.min(1, X * 2.5)),
        e.post.beamFog < 0.005 && (e.post.beamFog = 0));
    }
    {
      const mt = ut === "yard" || (ut !== "forest" && ct.z < St.z) ? 0 : 1;
      ((nt += (mt - nt) * Math.min(1, X * 1.6)),
        (it || lt.distanceToSquared(ct) > 25) && ((nt = mt), (it = !1)),
        lt.copy(ct),
        K0.uMistCol.value.copy(et.yard.mist).lerp(et.forest.mist, nt),
        (K0.uScatter.value =
          et.yard.scatter + (et.forest.scatter - et.yard.scatter) * nt));
    }
    if (
      (h0 &&
        (K0.uCanBox.value.set(
          h0.target.position.x,
          h0.target.position.z,
          24,
          1,
        ),
        K0.uRim.value.copy(h0.color).multiplyScalar(h0.intensity * ht),
        K0.uMoonDir.value
          .subVectors(h0.position, h0.target.position)
          .normalize()),
      Z.update(X, rt, Lt),
      N.update(Lt),
      ($.mat.uniforms.uScale.value =
        e.post.size.y / (2 * Math.tan((Lt.fov * Math.PI) / 360))),
      (ee -= X),
      ee <= 0)
    ) {
      ee = 0.4;
      const mt = e.player.pos;
      for (const gt of i)
        gt.on = (gt.x - mt.x) ** 2 + (gt.z - mt.z) ** 2 < 1764;
    }
    if (((D0 -= X), D0 <= 0 || Ye.distanceToSquared(Lt.position) > 16)) {
      ((D0 = 0.25), Ye.copy(Lt.position));
      const mt = Lt.position.x,
        gt = Lt.position.z;
      a.visible = gt > 44 || e.player.pos.z > 44;
      for (const kt of w) kt.g.visible = Math.hypot(kt.x - mt, kt.z - gt) < 88;
      for (const kt of Ut)
        kt.visible = Math.hypot(kt.userData.cx - mt, kt.userData.cz - gt) < Ft;
    }
  });
  const Se = (X) => {
    const rt = X === "ruins";
    ((r.visible = rt), !rt && e.post && (e.post.beamFog = 0));
    for (const ct of p) ct.on = rt;
    for (const ct of i) ct.on = rt;
    ((ee = 0), Z.api.reset(), N.api.reset(), (it = !0));
  };
  Se("dream");
  const Ae = Math.round(performance.now() - u);
  let Xe = y.S.end - 9;
  for (let X = y.S.bridgeS + 2; X < y.S.end; X += 0.25) {
    const rt = y.at(X);
    if (y.clearingSd(rt.x, rt.z) < -2.5) {
      Xe = X;
      break;
    }
  }
  const $e = y.at(Xe),
    y0 = de[0],
    Eo = {
      gate: [U0.x, U0.z],
      bridgeN: [Tt.x, Tt.z0 + 0.3],
      bridgeS: [Tt.x, Tt.z1 - 0.3],
      clearing: [+$e.x.toFixed(2), +$e.z.toFixed(2)],
      lookBack: [y0.x, y0.z, +Math.atan2(y0.x + 9.15, y0.z - 42.25).toFixed(2)],
      yardIn: [4.25, 63.4],
      angel: [h.angel.x, h.angel.z],
      stream: U.center,
      e1Scare: [...D, 9],
    },
    ho = (X) => y.routeIndexAtS(X),
    Ze = de[2],
    Fe = y.route.findIndex(
      (X) => X[0] === Tt.x && X[1] === +(Tt.z0 - 0.8).toFixed(2),
    ),
    bs = Z.api.list.reduce(
      (X, rt, ct) =>
        rt.lit &&
        rt.kind === "post" &&
        rt.s < Ze.s &&
        (X < 0 || rt.s > Z.api.list[X].s)
          ? ct
          : X,
      -1,
    ),
    ft = [
      {
        at: ho(C.s - 14),
        from: ["e1L"],
        scare: [...D, 9, 9],
        note:
          "the hairpin in the east (the first glade, ~" +
          Math.round(C.s - y.S.gate) +
          " m past the gate): the fireflies in the trees to the LEFT (outside the hairpin) go dark (fireflies.scare(...scare)); ~2.5 s later the dead come out of the ferns on the left (e1L) and, as she turns, one from behind the giants ahead",
      },
      {
        at: ho(Ze.s - 8),
        from: ["e2Ahead", "e2Behind"],
        note:
          "the hairpin in the west: one steps out onto the path AHEAD (e2Ahead[0]) and, as Sara turns, one comes up BEHIND (e2Behind[0]); a good moment to snuff the last lantern before that glade (one of the few still burning: the dark closes in): lanterns.snuff(" +
          bs +
          ")",
      },
      {
        at: Fe,
        from: ["e3W", "e3E"],
        note: "the bridge: as she steps onto the deck they come along the ravine from BOTH sides (e3W: the north rim behind them and the south rim ahead-west; e3E: the north rim east and the south rim east); they must cross",
      },
      {
        at: Fe + 1,
        from: ["e3Big"],
        note: "mid-bridge: the big one (a brute) comes round from the east beyond the south end (e3Big), into the path they have to take",
      },
    ];
  return {
    group: r,
    colliders: p,
    circles: i,
    anim: d,
    plan: y,
    buildMs: Ae,
    look: E,
    yardLook: Y,
    route: y.route,
    points: Eo,
    spawns: y.spawns,
    sideSpawns: y.sideSpawns,
    lurks: R,
    things: k.things,
    get ride() {
      return y.ride;
    },
    encounters: ft,
    fireflies: N.api,
    lanterns: Z.api,
    surfaceAt: y.surfaceAt,
    setWorld: Se,
    warmUp() {
      a.visible = !0;
      for (const X of w) X.g.visible = !0;
      for (const X of Ut) X.visible = !0;
    },
  };
}
