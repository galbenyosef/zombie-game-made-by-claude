// assets/hall-C7P9MLkg 05 — math
// Lines 1602-1737 of readable/assets/hall-C7P9MLkg.pretty.js (statement-aligned).
async function xt(b) {
  const { game: C, shell: r } = b,
    x = (h, n) => b.mats.get(h, n),
    e = new Q();
  ((e.name = "hall"), b.scene.add(e));
  const y = b.rng(1313),
    o = [],
    p = [],
    v = Q0(b, e),
    s = it(b, e, { x: 6.1, z: 8 }),
    Y = ut(b, e),
    m = ft(b, e);
  (mt(b, e), p.push(...m.colliders));
  const M = r?.doors?.D3;
  if (M) {
    const h = new Q();
    ((h.name = "d3_decor"), M.group.add(h));
    const n = new n0("d3");
    n.box(
      x("brass_aged", { rough: 0.3 }),
      0.003,
      0.28,
      0.07,
      [0.0245, 1.33, 0.795],
      { r: 0.0012, grain: null },
    );
    const a = new u0(0.21, 0.28, 6, 8);
    {
      const f = tt(2, 2, "P"),
        E = a.attributes.position,
        S = a.attributes.uv;
      for (let L = 0; L < E.count; L++) {
        const z = S.getX(L),
          V = S.getY(L);
        (E.setZ(
          L,
          0.0035 * Math.sin(Math.PI * z) * Math.sin(Math.PI * V) +
            0.002 * (1 - V) * z,
        ),
          S.setXY(L, f[0] + z * (f[2] - f[0]), f[1] + V * (f[3] - f[1])));
      }
      a.computeVertexNormals();
    }
    n.add(a, x("hall_photos"), {
      m: g([0.0343, 1.5, 0.44], [0, Math.PI / 2, 0.055]),
      uv: "keep",
      shadow: !1,
    });
    const c = x("paper_old", {
      color: "#e6d49a",
      extra: { transparent: !0, opacity: 0.78 },
    });
    for (const [f, E, S] of [
      [-0.092, 0.132, 0.7],
      [0.1, 0.128, -0.55],
      [0.004, -0.14, 0.1],
    ])
      n.add(new u0(0.052, 0.018), c, {
        m: g([0.0356, 1.5 + E, 0.44 + f], [0, Math.PI / 2, S]),
        uv: "keep",
        shadow: !1,
      });
    n.flush(h);
  }
  const i = new x0(260, 9);
  let u = 0,
    B = 1,
    _ = 0,
    l = !1;
  const N = (h = 1, n = 1.2) => {
    ((u = n), (B = h), (_ = 0), (l = !0));
  };
  ((N.stop = () => {
    u = 0;
  }),
    o.push((h) => {
      if (!M || !l) return;
      u > 0 &&
        ((u -= h),
        (_ -= h),
        _ <= 0 &&
          (i.kick((y() < 0.5 ? -1 : 1) * (0.035 + y() * 0.05) * B),
          (_ = 0.04 + y() * 0.16)));
      const n = Math.max(-0.012, Math.min(0.012, i.update(h)));
      ((M.group.rotation.y = (M.alongX ? -1 : 1) * M.dir * M.angle + n),
        u <= 0 &&
          Math.abs(n) < 1e-5 &&
          Math.abs(i.v) < 1e-4 &&
          ((l = !1),
          (M.group.rotation.y = (M.alongX ? -1 : 1) * M.dir * M.angle)));
    }));
  const G = new B0(10138879, 0.7, 5, 2);
  ((G.name = "hallArchSpill"),
    G.position.set(6.1, 2.2, 13.15),
    e.add(G),
    o.push((h, n) => {
      (s.update(h), Y.update(h), v.update(h));
      for (const a of m.anims) a(h, n);
    }));
  const k = r?.doors || {};
  return (
    z0(C, "halls:open", () => {
      (k.D1?.open(1, !0), k.D4?.open(1, !0));
    }),
    z0(C, "halls:d4open", () => {
      k.D4?.open(1, !0);
    }),
    z0(C, "halls:closed", () => {
      (k.D1?.open(0, !0), k.D4?.open(0, !0));
    }),
    z0(C, "halls:dark", () => {
      s.setOn(!1);
    }),
    {
      group: e,
      colliders: p,
      anim: o,
      points: {
        hallNorth: [6.1, 0, 2.3],
        d3Front: [6.1, 0, 9.9],
        hallMid: [6.1, 0, 8],
        archMouth: [6.1, 0, 13.2],
      },
      props: {
        ceilingLight: s,
        scratch3: N,
        clock: m.clock,
        phone: m.phone,
        photos: v,
        sconces: Y,
      },
      lights: { ceiling: s.light, archSpill: G, sconces: Y.lights },
      interact: [],
    }
  );
}
