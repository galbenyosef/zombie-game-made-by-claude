// assets/gameplay-DnQwS-TC 13 — math
// Lines 5539-5875 of readable/assets/gameplay-DnQwS-TC.pretty.js (statement-aligned).
function yi(o, { exclude: t = [] } = {}) {
  const i = o.scene;
  i.updateMatrixWorld(!0);
  const e = [];
  for (const f of Fs)
    for (const b of f.openings) {
      if (b.type !== "door" && b.type !== "arch") continue;
      const L = f.x1 - f.x0 < f.z1 - f.z0,
        v = L
          ? new Oe(
              new pt(f.x0, b.sill, f.z0 + b.at),
              new pt(f.x1, b.head, f.z0 + b.at + b.w),
            )
          : new Oe(
              new pt(f.x0 + b.at, b.sill, f.z0),
              new pt(f.x0 + b.at + b.w, b.head, f.z1),
            ),
        R = v.getCenter(new pt()),
        W = L ? ie(f.x0 - 0.3, R.z) : ie(R.x, f.z0 - 0.3),
        C = L ? ie(f.x1 + 0.3, R.z) : ie(R.x, f.z1 + 0.3);
      if (!W || !C || W === C) continue;
      const j = [];
      for (const u of [v.min.x, v.max.x])
        for (const m of [v.min.y, v.max.y])
          for (const d of [v.min.z, v.max.z]) j.push(new pt(u, m, d));
      e.push({ id: b.id, a: W, b: C, corners: j });
    }
  const s = {};
  for (const f of Object.keys(le))
    s[f] = e.filter((b) => b.a === f || b.b === f);
  const l = new Set(t.filter(Boolean)),
    n = (f) => {
      for (let b = f; b; b = b.parent) if (l.has(b)) return !0;
      return !1;
    },
    r = Object.entries(le).map(([f, b]) => [
      f,
      b.x0 - Ie,
      b.x1 + Ie,
      b.z0 - Ie,
      b.z1 + Ie,
    ]),
    h = {};
  for (const f of Object.keys(le)) h[f] = [];
  const a = new Oe();
  let y = 0;
  i.traverse((f) => {
    if (
      !(f.isMesh || f.isLine || f.isPoints || f.isSprite) ||
      f.isSkinnedMesh ||
      f.isInstancedMesh ||
      !f.geometry ||
      n(f)
    )
      return;
    const b = f.geometry;
    if (
      (b.boundingBox || b.computeBoundingBox(),
      !b.boundingBox || b.boundingBox.isEmpty())
    )
      return;
    a.copy(b.boundingBox).applyMatrix4(f.matrixWorld);
    const L = r.filter(
      ([, W, C, j, u]) =>
        a.min.x >= W && a.max.x <= C && a.min.z >= j && a.max.z <= u,
    );
    if (L.length !== 1) return;
    const v = L[0][0],
      R = f.matrixWorld.elements;
    (h[v].push({ o: f, mask: 0, parent: f.parent, p: [R[12], R[13], R[14]] }),
      y++);
  });
  const g = new It(),
    w = new Gs(),
    _ = new pt(),
    c = new Set(),
    k = [-1, -1, 1, 1],
    K = (f, b) => {
      let L = 1 / 0,
        v = 1 / 0,
        R = -1 / 0,
        W = -1 / 0,
        C = 0;
      for (const j of f.corners) {
        if ((w.set(j.x, j.y, j.z, 1).applyMatrix4(g), w.w < 0.05)) {
          C++;
          continue;
        }
        const u = w.x / w.w,
          m = w.y / w.w;
        (u < L && (L = u),
          u > R && (R = u),
          m < v && (v = m),
          m > W && (W = m));
      }
      return C === f.corners.length
        ? null
        : (C > 0 && ((L = -1), (v = -1), (R = 1), (W = 1)),
          (L = Math.max(L, b[0])),
          (v = Math.max(v, b[1])),
          (R = Math.min(R, b[2])),
          (W = Math.min(W, b[3])),
          L < R && v < W ? [L, v, R, W] : null);
    },
    Y = new Set(),
    F = new Set(),
    X = (f, b, L) => {
      if ((Y.add(f), !(L > 7)))
        for (const v of s[f]) {
          const R = v.a === f ? v.b : v.a;
          if (F.has(R)) continue;
          const W = K(v, b);
          W && (F.add(R), X(R, W, L + 1), F.delete(R));
        }
    },
    J = (f) => {
      const b = f.o.matrixWorld.elements;
      return (
        f.o.parent === f.parent &&
        Math.abs(b[12] - f.p[0]) +
          Math.abs(b[13] - f.p[1]) +
          Math.abs(b[14] - f.p[2]) <
          0.5
      );
    },
    U = (f) => {
      for (const b of h[f]) b.o && (b.o.layers.mask = b.mask);
      c.delete(f);
    },
    N = (f) => {
      for (const b of h[f])
        if (b.o) {
          if (!J(b)) {
            b.o = null;
            continue;
          }
          ((b.mask = b.o.layers.mask), (b.o.layers.mask = 0));
        }
      c.add(f);
    };
  function T(f) {
    (f.updateMatrixWorld(), f.getWorldPosition(_));
    const b =
      o.flags.has("nocull") || o.flags.has("noceil") ? null : ie(_.x, _.z);
    if ((Y.clear(), b && _.y > -0.2 && _.y < le[b].h + 0.2))
      (g.multiplyMatrices(f.projectionMatrix, f.matrixWorldInverse),
        F.clear(),
        F.add(b),
        X(b, k, 0));
    else for (const L of Object.keys(le)) Y.add(L);
    for (const L of Object.keys(le))
      Y.has(L) ? c.has(L) && U(L) : c.has(L) || N(L);
    for (const L of c)
      for (const v of h[L])
        v.o && !J(v) && ((v.o.layers.mask = v.mask), (v.o = null));
  }
  return {
    update: T,
    portals: e,
    get culled() {
      return [...c];
    },
    objects: y,
    content: h,
  };
}
const gi = () => new Promise((o) => setTimeout(o, 40));
async function Li(o, t = () => {}) {
  (t(0.4, "systems"),
    (o.nav = new Vs(o.world, 0.3, o.navPlan || null)),
    (o.roomAt ||= ie),
    (o.fx = $s(o)),
    (o.hud = Zs()),
    (o.combat = ti(o)),
    (o.zombies = await si(o)),
    o.loadMark?.("zombies"),
    (o.weapons = pi(o)),
    o.weapons.onFire((r) => o.combat.shoot(r)),
    t(0.55, "akane"),
    await gi());
  const i = Hs(o, {});
  (o.scene.add(i.root),
    (o.npc = new fi(o, i, o.nav)),
    o.loadMark?.("akane"),
    (o.npc.onFire = (r, h) =>
      o.combat.shoot({
        origin: r.clone(),
        dir: h.clone(),
        muzzle: r.clone(),
        muzzleDir: h.clone(),
        spread: 0.012,
        player: !1,
      })),
    i.setPose({ guitar: 0, arms: "gun", gunRaise: 1, gunHands: 2 }, 0),
    i.setPose({ guitar: 0, arms: "hands_up" }, 0),
    i.setPose({ guitar: 0, arms: "touch", touchAt: [0.3, 0.55, 0.45] }, 0),
    i.setPose({ guitar: 0, arms: "point", pointUp: 0.25 }, 0),
    i.setPose(
      { guitar: 0, arms: "grab", grabL: [0.2, 1, 0.4], grabR: [-0.2, 1, 0.4] },
      0,
    ),
    i.setPose({ guitar: 0, arms: "down" }, 0),
    t(0.85, "script"),
    o.updaters.push((r) => o.weapons.update(r)),
    o.updaters.push((r) => o.npc.tick(r)),
    o.updaters.push((r) => o.zombies.update(r)),
    o.updaters.push((r) => o.combat.update(r)),
    o.updaters.push((r) => o.fx.update(r)),
    o.updaters.push(() => bi(o)),
    o.prepares.push((r) => i.prepare(r)),
    o.prepares.push((r) => o.zombies.prepare(r)),
    (o.combat.onPlayerDeath = () => xi(o)),
    (o.npc.onDeath = () => vi(o)));
  let e = null;
  const s = () => {
    const r = ["a_hurt1", "a_hurt2", "a_hurt3"].filter((h) => h !== e);
    return ((e = r[Math.floor(Math.random() * r.length)]), e);
  };
  o.npc.onWound = (r) => {
    const h = o.npc;
    (r >= 2 || !h.speaking) &&
      h.say(r >= 3 ? "v_hurt3" : r === 2 ? "v_hurt2" : s());
  };
  const l = {
      wood: ["step_wood_", 0.28, 0.4, 1],
      grass: ["step_grass_", 0.07, 0.09, 1],
      gravel: ["step_gravel_", 0.14, 0.16, 1],
      stone: ["step_stone_", 0.2, 0.26, 1],
      tile: ["step_stone_", 0.22, 0.26, 1.08],
      ash: ["step_gravel_", 0.08, 0.1, 0.8],
      leaves: ["step_leaves_", 0.12, 0.14, 1],
      dirt: ["step_dirt_", 0.12, 0.14, 1],
      concrete: ["step_stone_", 0.2, 0.25, 0.94],
      metal: ["step_metal_", 0.2, 0.24, 1],
      asphalt: ["step_stone_", 0.18, 0.22, 0.9],
    },
    n = (r, h) => l[o.surfaceAt ? o.surfaceAt(r, h) : "wood"] || l.wood;
  if (
    ((o.player.onStep = (r, h) => {
      const a =
        (o.player.deck?.surface && l[o.player.deck.surface]) ||
        n(o.player.pos.x, o.player.pos.z);
      o.audio.play(a[0] + (1 + ((Math.random() * 4) | 0)), {
        vol: a[1] + a[2] * h,
        rate: a[3] * (0.94 + Math.random() * 0.12),
      });
    }),
    (o.npc.onStep = (r) => {
      const h = o.npc.pos,
        a = n(h.x, h.z);
      o.audio.play(a[0] + (1 + ((Math.random() * 4) | 0)), {
        pos: [h.x, 0.05, h.z],
        vol: a[1] * 0.8 + a[2] * 0.4 * Math.min(1, r / 2),
        rate: a[3] * (0.9 + Math.random() * 0.16),
        ref: 1.5,
      });
    }),
    o.lighting?.moon && o.lighting?.fire)
  ) {
    const r = o.lighting;
    let h = 0;
    for (const a of [r.moon, r.fire])
      ((a.shadow.autoUpdate = !1), (a.shadow.needsUpdate = !0));
    o.updaters.push(() => {
      const a = h++ % 4;
      a === 1
        ? (r.moon.shadow.needsUpdate = !0)
        : a === 3 && (r.fire.shadow.needsUpdate = !0);
    });
  }
  ((o.script =
    o.section === 3
      ? (
          await fe(
            async () => {
              const { createScript3: r } =
                await import("./script3-CjSek-Nt.js");
              return { createScript3: r };
            },
            __vite__mapDeps([5, 1, 0, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
            import.meta.url,
          )
        ).createScript3(o)
      : o.section === 2
        ? (
            await fe(
              async () => {
                const { createScript2: r } =
                  await import("./script2-Chjgntzz.js");
                return { createScript2: r };
              },
              __vite__mapDeps([15, 1, 0, 2, 3, 9, 7]),
              import.meta.url,
            )
          ).createScript2(o)
        : wi(o)),
    (o.beats = {
      goto: (r) =>
        r.startsWith("run:")
          ? (o.script.goto(r.slice(4)), null)
          : o.script.enter(r),
    }),
    o.loadMark?.("script"),
    ki(o),
    Mi(o),
    await _i(o),
    o.loadMark?.("warmUp"),
    (o.shadowProxies = mi(o, { exclude: [i.root, o.camera] })),
    zi(o),
    o.loadMark?.("shadow proxies"),
    o.shell &&
      ((o.roomCull = yi(o, {
        exclude: [
          i.root,
          o.camera,
          o.shadowProxies.holder,
          o.scene.getObjectByName("fx"),
          o.scene.getObjectByName("exterior"),
        ],
      })),
      o.prepares.unshift((r) => o.roomCull.update(r))),
    (o.gameplay = !0),
    (o.enableBot = async () => {
      const r = await fe(
        () => import("./bot-D6vJ5k-G.js"),
        __vite__mapDeps([16, 1]),
        import.meta.url,
      );
      return (
        (o.bot = r.createBot(o)),
        o.updaters.push((h) => o.bot.tick(h)),
        o.bot
      );
    }),
    new URLSearchParams(location.search).get("bot") === "1" &&
      (await o.enableBot()));
}
