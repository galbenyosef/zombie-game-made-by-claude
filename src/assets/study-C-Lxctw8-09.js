// assets/study-C-Lxctw8 09 — shadow
// Lines 2589-2729 of readable/assets/study-C-Lxctw8.pretty.js (statement-aligned).
async function Oo(I) {
  const { game: L, shell: u } = I,
    c = (m, r) => I.mats.get(m, r),
    b = new c0();
  ((b.name = "study"), I.scene.add(b));
  const e = I.rng(777),
    a = [],
    n = [],
    t = Co(I, b),
    h = Xo(I, b),
    s = Vo(I, b),
    M = Wo(I, b);
  a.push(t.collider, ...h.colliders, ...s.colliders, ...M.colliders);
  {
    const m = new n0("studyRug"),
      r = { x0: 7.55, x1: 9.9, z0: 5.35, z1: 7.95, t: 0.008 };
    m.box(
      c("rug_persian"),
      r.x1 - r.x0,
      r.t,
      r.z1 - r.z0,
      [(r.x0 + r.x1) / 2, r.t / 2, (r.z0 + r.z1) / 2],
      { r: 0.003, grain: null },
    );
    const f = [];
    for (const [x, _] of [
      [r.z0, -1],
      [r.z1, 1],
    ])
      for (let Q = 0; Q < 150; Q++) {
        const D =
            r.x0 +
            0.015 +
            (r.x1 - r.x0 - 0.03) * (Q / 149) +
            (e() - 0.5) * 0.004,
          F = 0.055 + e() * 0.03,
          R = (e() - 0.5) * 0.4,
          N = 0.0034,
          Z = D + Math.sin(R) * F,
          z = x + _ * Math.cos(R) * F,
          Y = r.t * 0.5,
          C = 0.0012 + e() * 0.002;
        f.push(
          D - N / 2,
          Y,
          x,
          Z,
          C,
          z,
          D + N / 2,
          Y,
          x,
          D + N / 2,
          Y,
          x,
          Z,
          C,
          z,
          Z + N * 0.8,
          C,
          z,
        );
      }
    const w = new q0();
    (w.setAttribute("position", new L0(f, 3)),
      w.computeVertexNormals(),
      m.add(w, c("linen_stained", { color: "#b8a888", side: F0 }), {
        uv: "world",
        shadow: !1,
      }),
      m.flush(b));
  }
  const k = new xo(16756848, 6, 7.5, 0.5, 0.9, 2);
  ((k.name = "studyBounce"),
    k.position.set(8.9, 0.9, 7.1),
    k.target.position.set(7.1, 2.1, 5.5),
    (k.castShadow = !0),
    k.shadow.mapSize.set(1024, 1024),
    (k.shadow.camera.near = 0.1),
    (k.shadow.camera.far = 7.5),
    (k.shadow.bias = -6e-4),
    (k.shadow.normalBias = 0.02),
    b.add(k, k.target));
  const P = new bo(16762512, 0.25, 3, 2);
  ((P.name = "studyFill"), P.position.set(8.9, 2.1, 6.9), b.add(P));
  const i = k.intensity,
    v = P.intensity;
  n.push((m) => {
    t.update(m);
    const r = t.lamp.on ? Math.max(0, t.lamp.light.intensity / 4.5) : 0;
    ((k.intensity = i * r), (P.intensity = v * (0.35 + 0.65 * r)));
  });
  const G = t.pistolA,
    S = t.pistolB,
    l = t.pistolASpot;
  return (
    I.interact &&
      I.interact.add({
        id: "pistol",
        pos: l,
        radius: 1.6,
        prompt: "take",
        enabled: () => G.visible,
        onUse: (m) => m.events.emit("use", "pistol"),
      }),
    io(L, "study:lampoff", () => t.lamp.setOn(!1)),
    io(L, "study:taken", () => {
      ((G.visible = !1), (S.visible = !1));
    }),
    {
      group: b,
      colliders: a,
      anim: n,
      points: {
        deskFront: [8.75, 0, 6.5],
        deskFrontWoman: [8.8, 0, 7.12],
        studyInside: [7.45, 0, 6.65],
        pistolASpot: l,
        pistolBSpot: t.pistolBSpot,
      },
      props: {
        desk: t.group,
        pistolA: G,
        pistolB: S,
        ammo: t.ammo,
        lamp: t.lamp,
        deerHead: M.deerHead,
        gunCase: t.gunCase,
        caseLid: t.caseLid,
        globe: M.globe,
      },
      lights: {
        deskLamp: t.lights.deskLamp,
        deskLampGlass: t.lights.deskLampGlass,
        bounce: k,
        fill: P,
      },
      interact: ["pistol"],
    }
  );
}
