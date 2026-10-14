// assets__gameplay-DnQwS-TC 14 — castshadow
// Lines 5876-6173 of readable/assets__gameplay-DnQwS-TC.pretty.js (statement-aligned).
function bi(o) {
  const { hud: t, weapons: i, interact: e } = o,
    s = e.current;
  (t.prompt(s && !o.player.frozen ? s.prompt : null),
    t.crosshair(i.has.pistol && !o.player.frozen, i.aim > 0.5));
  const l =
    o.time - i.lastShot < 2.5 ||
    i.state === "reload" ||
    i.state === "draw" ||
    i.aim > 0.3 ||
    o.time < (i.showUntil || 0);
  t.ammo(i.ammo, i.mag, i.reserve, i.has.pistol && l);
  const n = o.npc,
    r = (h) => Math.max(0, 3 - h.n);
  t.vitals(r(o.combat.wounds), n && n.root.visible ? r(n.hits) : null);
}
async function vi(o) {
  const { player: t, post: i, npc: e } = o;
  o.combat.dead ||
    o.over ||
    ((o.over = !0),
    e.stop(),
    e.work?.(null),
    e.holster(),
    (e.grabbed = !1),
    (e.handsUp = 0),
    e.emote("dead", 99),
    e.lookAt(null),
    o.audio.play("sub_hit", { vol: 0.8 }),
    o.audio.voice("v_akane_dead", { vol: 1, reverb: 0.05 }),
    o.hud.subtitle(
      (o.audio.manifest.v_akane_dead?.text || "Akane!").replace(
        /^\[[^\]]*\]\s*/,
        "",
      ),
      2.6,
      "",
      "thought",
    ),
    await o.sched.wait(1.3),
    (t.frozen = !0),
    o.audio.duck("amb", 0.1, 4),
    i.fadeColor.setRGB(0.12, 0, 0),
    await o.sched.tween(i, "fade", 1, 1.6, "in"),
    o.hud.card("AKANE IS DEAD", "protect her"),
    await o.sched.wait(2.4),
    o.hud.card("", "", !1),
    i.fadeColor.setRGB(0, 0, 0),
    (o.over = !1),
    o.script.restartBeat());
}
async function xi(o) {
  const { player: t, post: i } = o;
  o.over ||
    ((o.over = !0),
    (t.frozen = !0),
    o.npc.stop(),
    o.audio.play("sub_hit", { vol: 0.9 }),
    o.audio.duck("amb", 0.1, 4),
    i.fadeColor.setRGB(0.12, 0, 0),
    await o.sched.tween(i, "fade", 1, 1.6, "in"),
    await o.sched.wait(1.6),
    i.fadeColor.setRGB(0, 0, 0),
    (o.over = !1),
    o.script.restartBeat());
}
function ki(o) {
  const e = new Set(
      [
        o.lighting?.moon,
        o.lighting?.fire,
        o.lighting?.sun,
        o.weapons.torch,
      ].filter(Boolean),
    ),
    s = o.roomAt,
    l = { spot: [], point: [] };
  o.scene.traverse((k) => {
    !k.isLight ||
      e.has(k) ||
      k.userData.noShadowBudget ||
      (k.isSpotLight && k.castShadow
        ? l.spot.push(k)
        : k.isPointLight && k.castShadow && l.point.push(k));
  });
  const n = new Map(),
    r = new pt();
  for (const k of [...l.spot, ...l.point])
    (k.getWorldPosition(r),
      n.set(k, s(r.x, r.z) || (r.z > 21 ? "living" : "outside")));
  const h = (k, K, Y, F) => {
      const X = s(Y.x, Y.z),
        J = (U) => (
          U.getWorldPosition(r),
          Math.hypot(r.x - Y.x, r.z - Y.z) +
            (n.get(U) === X ? 0 : 60) -
            (F.has(U) ? 1.6 : 0)
        );
      return new Set(
        k
          .map((U) => [J(U), U])
          .sort((U, N) => U[0] - N[0])
          .slice(0, K)
          .map((U) => U[1]),
      );
    },
    a = { spot: new Set(), point: new Set() },
    y = [...l.spot, ...l.point],
    g = new Set(y.filter((k) => k.shadow.autoUpdate === !1));
  for (const k of y) g.has(k) || (k.shadow.autoUpdate = !1);
  const w = () => {
    const k = o.player.pos;
    for (const [K, Y] of [
      ["spot", 2],
      ["point", 1],
    ]) {
      const F = h(l[K], Y, k, a[K]);
      for (const X of l[K]) {
        const J = F.has(X);
        X.castShadow !== J &&
          ((X.castShadow = J), J && (X.shadow.needsUpdate = !0));
      }
      a[K] = F;
    }
  };
  w();
  let _ = 0,
    c = 0;
  (o.updaters.push((k) => {
    ((_ += k), _ > 0.35 && ((_ = 0), w()), c++);
    const K = o.player.pos,
      Y = s(K.x, K.z),
      F = [o.npc.pos];
    for (const J of o.zombies.list) J.dead || F.push(J.pos);
    let X = 0;
    for (const J of y) {
      if (!J.castShadow || g.has(J) || J.intensity <= 0.01) continue;
      J.getWorldPosition(r);
      const U = Math.min(J.distance || 8, 8),
        N = (b) => {
          const L = (b.y ?? 0) - r.y;
          return Math.abs(L) > 3 ? L * L : 0;
        },
        f =
          n.get(J) === Y ||
          (r.x - K.x) ** 2 + (r.z - K.z) ** 2 + N(K) < 4.5 * 4.5 ||
          F.some((b) => (r.x - b.x) ** 2 + (r.z - b.z) ** 2 + N(b) < U * U)
            ? 2
            : 30;
      ((c + X * 7) % f === 0 && (J.shadow.needsUpdate = !0), X++);
    }
  }),
    (o.shadowBudget = { apply: w, cands: l }));
}
function Mi(o) {
  (o.camera.layers.enable(1), o.weapons.torch.shadow.camera.layers.enable(1));
  const i = o.npc.akane.root;
  o.scene.updateMatrixWorld(!0);
  let e = 0;
  (o.scene.traverse((s) => {
    if (
      !s.isMesh ||
      !s.castShadow ||
      s.isSkinnedMesh ||
      s.isInstancedMesh ||
      !s.geometry
    )
      return;
    let l = !1;
    for (let h = s; h; h = h.parent)
      if (h === i) {
        l = !0;
        break;
      }
    const n = s.geometry;
    (n.boundingSphere || n.computeBoundingSphere(),
      (n.boundingSphere
        ? n.boundingSphere.radius * s.matrixWorld.getMaxScaleOnAxis()
        : 0) < (l ? 0.1 : 0.2) && (s.layers.set(1), e++));
  }),
    (o.shadowLayers = { small: 1, moved: e }));
}
function zi(o) {
  try {
    const t = o.renderer,
      i = o.shadowProxies.holder,
      e = new Bs(),
      s = new Us(),
      l = new qs(4, 4),
      n = i.children.map((a) => a.frustumCulled),
      r = t.shadowMap.autoUpdate,
      h = t.getRenderTarget();
    (i.children.forEach((a) => {
      a.frustumCulled = !1;
    }),
      o.scene.remove(i),
      e.add(i),
      (i.visible = !0),
      (t.shadowMap.autoUpdate = !1),
      t.setRenderTarget(l),
      t.render(e, s),
      t.setRenderTarget(h),
      (t.shadowMap.autoUpdate = r),
      e.remove(i),
      o.scene.add(i),
      (i.visible = !1),
      i.children.forEach((a, y) => {
        a.frustumCulled = n[y];
      }),
      l.dispose());
  } catch (t) {
    console.warn("[warmShadowProxies]", t);
  }
}
async function _i(o) {
  try {
    const i = o.zombies.kinds
        .filter((c) => c !== "priest")
        .map((c, k) => o.zombies.spawn(c, -60 - k * 3, -60, {})),
      e = o.zombies.keepWarm?.(),
      s = o.script?.priest,
      l = s ? s.z.root.visible : !1;
    (s &&
      (s.z.root.position.set(-60 - i.length * 3 - 3, 0, -60),
      (s.z.root.visible = !0),
      s.z.setFade?.(0.5),
      s.z.holdLantern?.(!0),
      s.z.selfLight?.(0.5)),
      o.player.place(6, 2, 0, 0),
      o.fx.muzzleFlash(new pt(0, 1, -50), new pt(0, 0, -1), 0.01),
      o.fx.impactBody(new pt(0, 1, -50), new pt(0, 0, -1), 0.1),
      o.fx.impactWorld(new pt(0, 1, -50), new pt(0, 0, 1)),
      o.fx.tracer(new pt(0, 1, -50), new pt(0, 1, -51)),
      o.step(1 / 60));
    const n = o.renderer,
      r = new Set(),
      h = (c) => {
        if (c && c.isTexture && !r.has(c)) {
          r.add(c);
          try {
            n.initTexture(c);
          } catch {}
        }
      };
    (o.scene.traverse((c) => {
      if (c.material)
        for (const k of Array.isArray(c.material) ? c.material : [c.material]) {
          for (const K in k) h(k[K]);
          if (k.uniforms) for (const K in k.uniforms) h(k.uniforms[K].value);
        }
    }),
      n.setRenderTarget(o.post.rt.scene),
      n.compile(o.scene, o.camera),
      n.setRenderTarget(null));
    const a = o.lighting,
      y = o.shadowBudget.cands,
      g = [];
    o.scene.traverse((c) => {
      c.isLight && c.castShadow && c.shadow && g.push(c);
    });
    const w = [
        ...new Set(
          [
            a?.moon,
            a?.fire,
            a?.sun,
            o.weapons.torch,
            ...y.spot,
            ...y.point,
            ...g,
          ].filter(Boolean),
        ),
      ],
      _ = w.map((c) => c.castShadow);
    (w.forEach((c) => {
      ((c.castShadow = !0), (c.shadow.needsUpdate = !0));
    }),
      n.shadowMap.render(w, o.scene, o.camera),
      w.forEach((c, k) => {
        c.castShadow = _[k];
      }));
    for (const c of Object.values(o.rooms)) c.props?.warmUp?.();
    (o.render(),
      o.npc?.akane?.char?.parts?.head?.warm?.(4096, n),
      e && (e.root.visible = !1),
      s &&
        ((s.z.root.visible = l),
        s.z.setFade?.(1),
        s.z.holdLantern?.(!1),
        s.z.selfLight?.(0)),
      o.zombies.clear(),
      o.fx.update(0.5));
  } catch (i) {
    console.warn("[warmUp]", i);
  }
  const t = o.startPoint || [wt.bedside[0], wt.bedside[1], 0];
  o.player.place(t[0], t[1], t[2] ?? 0, 0);
}
