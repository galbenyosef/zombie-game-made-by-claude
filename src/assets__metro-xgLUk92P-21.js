// assets__metro-xgLUk92P 21 — board
// Lines 8275-8533 of readable/assets__metro-xgLUk92P.pretty.js (statement-aligned).
async function La(c, { rng: a, hatch: o } = {}) {
  ((a ||= c.rng(5301)), await c.mats.ensure(Qo));
  const s = new Jt();
  s.name = "metro";
  const f = [],
    h = [],
    d = [],
    l = Ko();
  ((l.board = ea({ cols: 24, rows: 2 })),
    l.board.set(`LINE 4    PARKGATE
SERVICE SUSPENDED`));
  const i = Jo(c, l);
  ((i.board = st([2.6, 2.6, 2.6], {
    name: "m_board",
    base: 789e3,
    emissiveMap: l.board.tex,
    map: l.board.tex,
    rough: 0.4,
  })),
    (i.glowSigns = st([1.5, 1.5, 1.5], {
      name: "m_glowsigns",
      base: 1052688,
      emissiveMap: l.signs.tex,
      map: l.signs.tex,
      rough: 0.35,
    })));
  const t = jo(c, s),
    e = Pa(),
    n = (E, N, Q) => e.groundAt(E, N, Math.min(Q, -2.6)) ?? e.groundAt(E, N, Q),
    r = new na("metro", { floorAt: n }),
    u = Uo(0.5),
    M = {
      ctx: c,
      THREE: Fo,
      B: r,
      M: i,
      L: t,
      A: l,
      group: s,
      rng: a,
      anim: f,
      sounds: { drips: [], hums: [] },
      audio: c.audio,
      line: u,
      walk: e,
      boardMaterial: i.board,
      faceQuadLocal: (E, N, Q, K) => Rt(l.signs.rect(E), N, Q, K, "+z", 0, 0),
    };
  M.D = la(M);
  const x = ra(M),
    w = ca(M),
    p = pa(M),
    S = ka(M, u),
    y = Ta(M, u),
    L = va(M);
  for (const E of [x, w, p, S, y, L]) h.push(...(E.colliders || []));
  const v = r.flush(s),
    C = c.camera || c.game.camera;
  (f.push((E, N) => {
    (t.update(E, N, C), l.board.tick(E));
  }),
    (t.torch = () => c.game.weapons?.torch || null),
    (t.lensZone = (E) => e.zoneAt(E.x, E.z, E.y - 1.6)),
    c.beforeRender((E) => t.prepare(E)));
  const k = Ia(M, C);
  f.push(k.update);
  {
    const E = [];
    for (const K of v) {
      const s0 = K.geometry;
      (s0.boundingSphere || s0.computeBoundingSphere(),
        E.push({
          mesh: K,
          c: s0.boundingSphere.center,
          r: s0.boundingSphere.radius,
        }));
    }
    let N = 0;
    const Q = new ot(1e9, 0, 0);
    f.push((K) => {
      const s0 = C.position,
        f0 = 220;
      if (((N -= K), !(N > 0 && s0.distanceToSquared(Q) < 100))) {
        ((N = 0.2), Q.copy(s0));
        for (const p0 of E) {
          const o0 =
            Math.hypot(p0.c.x - s0.x, p0.c.y - s0.y, p0.c.z - s0.z) - p0.r;
          p0.mesh.visible = o0 < f0;
        }
      }
    });
  }
  const R = u.sAtX(m.stopX),
    W = u.sAtX(P.bufferX - P.stopGap),
    Y = {
      ashwood: { s: +R.toFixed(3), side: "left" },
      parkgate: { s: +W.toFixed(3), side: "left" },
      start: { s: +u.sAtX(m.x0 - 160).toFixed(3), side: "left" },
    },
    $ = m.stopX - 1.5 * 18 + 0,
    Z = {
      shaftBottom: x.points.shaftBottom,
      shaftTop: x.points.shaftTop,
      passageEnd: w.points.passageEnd,
      staffDoor: w.points.staffDoor,
      ashwood: {
        board: [$, 217.4],
        akaneBoard: [$ + 1.3, 217.15],
        dead: [
          [-5.2, 215.6, 1.2],
          [1.6, 216.9, 2.6],
          [12.4, 214.4, -0.4],
          [26.8, 216.4, -2.1],
          [32, 215.8, 0.3],
          [38.6, 216.5, -1.6],
          [44.6, 215.2, 2.2],
          [48.4, 214.1, -2.6],
          [5.4, 227.4, 0.2],
          [17.6, 226.4, 3],
          [30.8, 227.9, -0.6],
          [42.2, 226.2, 2.7],
        ],
        stairs: p.points.stairs,
        cover: [23.6, 216.5],
      },
      parkgate: L.points,
      exitTop: [lt[0], lt[1], lt[2]],
    },
    H = {
      staffDoor: w.props.staffDoor,
      ladderTop: x.props.ladderTop,
      shutter: p.shutter,
      signals: y.signals,
      edges: { ashwood: p.edgesN, ashwoodSouth: p.edgesS, parkgate: L.edges },
      board: {
        set: (E) => {
          (l.board.set(E),
            c.audio?.play?.("metro_board_tick", {
              pos: [16.5, -5.75, 215.9],
              vol: 0.5,
            }));
        },
        get text() {
          return l.board.text;
        },
      },
      lights: {
        flicker: (E, N) => t.flicker(E, N),
        surge: () => {
          t.surge();
          const E = C.position;
          c.audio?.play?.("metro_surge", {
            pos: [E.x, E.y + 2, E.z],
            vol: 0.9,
          });
        },
        power: (E) => {
          t.power = Math.max(0, Math.min(1.5, E));
        },
      },
      lightsApi: t,
      line: u,
    },
    V = Aa;
  return {
    group: s,
    colliders: h,
    circles: d,
    anim: f,
    warmUp: () => {
      const E = c.renderer;
      for (const N of [
        l.signs.tex,
        l.frieze.tex,
        l.decals.tex,
        l.glows.tex,
        l.board.tex,
      ])
        try {
          E.initTexture(N);
        } catch {}
      t.update(0, 0, C);
    },
    points: Z,
    line: u.pts,
    lineLength: u.length,
    stops: Y,
    zoneAt: e.zoneAt,
    groundAt: e.groundAt,
    surfaceAt: e.surfaceAt,
    navPlans: e.navPlans,
    looks: V,
    props: H,
    meshes: v,
  };
}
function Ia(c, a) {
  const { audio: o, L: s, sounds: f } = c,
    h = new Map();
  let d = 2,
    l = 0;
  const i = (e, n) =>
    (e[0] - a.position.x) ** 2 + (e[2] - a.position.z) ** 2 < n * n &&
    Math.abs(e[1] - a.position.y) < 8;
  return {
    update: (e, n) => {
      if (o?.loop) {
        for (const r of f.hums) {
          const u = Math.hypot(
              r.pos[0] - a.position.x,
              r.pos[2] - a.position.z,
            ),
            b = u < 30 && Math.abs(r.pos[1] - a.position.y) < 8;
          let M = h.get(r.id);
          (b &&
            !M &&
            ((M = o.loop(r.id, { pos: r.pos, vol: 0 })), h.set(r.id, M)),
            M && M.fadeTo?.(b ? Math.max(0, 0.5 - u / 60) : 0, 0.8));
        }
        if (((l -= e), l <= 0)) {
          l = 0.5;
          let r = null,
            u = 144;
          for (const M of s.srcs) {
            if (!M.buzz) continue;
            const x =
              (M.mid[0] - a.position.x) ** 2 + (M.mid[2] - a.position.z) ** 2;
            x < u &&
              Math.abs(M.mid[1] - a.position.y) < 6 &&
              ((u = x), (r = M));
          }
          let b = h.get("metro_tube_buzz");
          (r &&
            !b &&
            ((b = o.loop("metro_tube_buzz", { pos: r.mid, vol: 0 })),
            h.set("metro_tube_buzz", b)),
            b?.handle?.panner &&
              r &&
              ((b.handle.panner.positionX.value = r.mid[0]),
              (b.handle.panner.positionY.value = r.mid[1]),
              (b.handle.panner.positionZ.value = r.mid[2])),
            b && b.fadeTo?.(r ? 0.35 * r.lvl : 0, 0.2));
        }
        if (((d -= e), d <= 0)) {
          d =
            1.4 + ((((Math.sin(n * 12.9898) * 43758.5453) % 1) + 1) % 1) * 3.5;
          const r = f.drips.filter((u) => i(u, 14));
          if (r.length) {
            const u = r[Math.floor(((n * 7.13) % 1) * r.length)];
            o.play?.("metro_drip_" + (1 + (Math.floor(n * 3.1) % 3)), {
              pos: u,
              vol: 0.35,
            });
          }
        }
      }
    },
  };
}
