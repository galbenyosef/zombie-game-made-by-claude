// assets__living-DeOLLwnx 17 — push
// Lines 5589-5720 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
async function Ce(a) {
  const t = new y0();
  ((t.name = "living"), a.scene.add(t));
  const r = a.rng(1307),
    e = new st(a.mats, r),
    o = [],
    s = [],
    n = ue(a, e, t, a.rng(11));
  (o.push(...n.colliders), s.push(n.anim));
  const l = me(a, e, t, a.rng(23));
  (o.push(...l.colliders), s.push(...l.anim));
  const p = ye(a, e, t, a.rng(37));
  o.push(...p.colliders);
  const d = we(a, e, t, a.rng(41));
  (o.push(...d.colliders), s.push(...d.anim));
  const c = ze(a, e, t, a.rng(53));
  (o.push(...c.colliders), s.push(...c.anim));
  const u = _e(a, t, a.rng(67));
  (o.push(...u.colliders), s.push(u.anim));
  const b = e.flush(t, "living");
  for (const z of b) ((z.matrixAutoUpdate = !1), z.updateMatrix());
  const k = new _t(7308968, 0.6, 7, 2);
  (k.position.set(8.3, 1.9, 16.9),
    (k.name = "living_fill"),
    (k.userData.noActor = !0),
    t.add(k));
  const S = {
      tv: n.tv,
      barricade: u.api,
      sofa: {
        center: [l.sofa.x, 0, l.sofa.z],
        size: [0.95, 0.93, 2.1],
        facing: [-1, 0, 0],
      },
      table: {
        center: [p.table.x, 0, p.table.z],
        size: [p.table.w, p.table.h, p.table.d],
        coffee: {
          center: [l.table.x, 0, l.table.z],
          size: [l.table.d, l.table.h, l.table.w],
        },
      },
      plankSets: c.plankSets,
      lamp: l.lamp,
      clock: d.props.clock,
      phone: l.phone,
      recordPlayer: d.props.recordPlayer,
      mirror: d.props.mirror,
      fire: {
        spot: c.fireSpot,
        get level() {
          return c.fire.level;
        },
        set level(z) {
          c.fire.level = z;
        },
        setHaze(z) {
          c.fire.haze = z;
        },
        refreshShadow() {
          c.fireSpot.shadow.needsUpdate = !0;
        },
        dynamicShadow(z) {
          c.fireSpot.shadow.autoUpdate = !!z;
        },
      },
    },
    h = { tv: n.light, lamp: l.lamp.light, fireGaps: [c.fireSpot], fill: k },
    y = {
      tvFront: [1.6, 0, 16.5],
      tvScreen: [0.56, 1.03, 16.57],
      barricadeFront: [11.3, 0, 16.95],
      cover: [
        [5.75, 16.45],
        [5.75, 17.55],
        [10.35, 18.2],
        [2.45, 18.9],
      ],
      windowSpots: [
        [3.4, 20],
        [8.6, 20],
      ],
      kitchenDoor: [2.05, 0, 14.2],
      zombieFirst: [8.6, 0, 16.2],
      livingCentre: [6.1, 0, 17],
    };
  if (
    (new URLSearchParams(location.search).get("solo") || "")
      .split(",")
      .includes("living")
  ) {
    const z = a.game.beats,
      w = () => {
        (S.tv.setChannel("static"), S.barricade.reset());
        for (const i of S.plankSets) i.show(!0);
        S.lamp.setOn(!0);
      },
      f = (i, m, M, v, T, I = 75) =>
        a.game.debug.setCam({ x: i, y: m, z: M, yaw: v, pitch: T, fov: I });
    a.game.beats = {
      goto(i) {
        if (!i.startsWith("living")) return z?.goto?.(i);
        w();
        const m = i.split(":")[1] || "wide";
        m === "wide"
          ? f(6.1, 1.62, 14.3, 150, -2)
          : m === "tv"
            ? (S.tv.setChannel("face"), f(2.05, 1.18, 16.52, 90, -9, 55))
            : m === "flicker"
              ? f(3.6, 1.5, 15.2, 115, -10, 70)
              : m === "breach"
                ? (S.barricade.play(1.1, 0.4), f(7.4, 1.62, 17, -90, -4, 70))
                : m === "breached"
                  ? (S.barricade.breach(1), f(7.4, 1.62, 17, -90, -4, 75))
                  : m === "door"
                    ? f(7.2, 1.62, 17, -90, -3)
                    : m === "kitchen"
                      ? f(7.6, 1.62, 16.4, 66, -5)
                      : m === "centre" && f(6.1, 1.62, 17, 90, -4);
      },
    };
  }
  return {
    group: t,
    colliders: o,
    anim: s,
    points: y,
    props: S,
    lights: h,
    interact: [],
  };
}
