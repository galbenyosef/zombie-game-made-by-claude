// assets__exterior-BqAhvNw2 15 — math
// Lines 3612-3796 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
async function vt(t) {
  const i = performance.now(),
    a = new b0();
  a.name = "exterior";
  const e = he(),
    s = t.game.lighting,
    l = new B(0.2, 0.216, -0.955);
  (s?.moon && l.copy(s.moon.position).sub(s.moon.target.position).normalize(),
    e.uMoonDir.value.copy(l));
  const d = we(t, e);
  a.add(d.mesh);
  const v = ke(t, e);
  a.add(v.mesh);
  const x = Ae(t.rng(20260928)),
    n = Ne(t, e, x);
  a.add(n.group);
  const k = _e(t, e, a),
    m = Je(t, e, t.rng(4242));
  a.add(m.group);
  const p = st(t, e, t.rng(99), m);
  a.add(p.mesh);
  const b = nt(t, e);
  a.add(b.mesh);
  const N = dt(t, e);
  (a.add(N.group),
    m.slots.push({
      type: "door",
      p: b.doorLamp.p,
      c: b.doorLamp.c,
      I: b.doorLamp.I,
      cone: 0,
    }));
  const o = x.near.find((g) => g.lantern);
  (o &&
    m.slots.push({
      type: "lantern",
      p: o.lantern,
      c: [1, 0.55, 0.22],
      I: 7,
      cone: 0,
    }),
    m.slots.forEach((g, M) => {
      M < e.uLampPos.value.length &&
        (e.uLampPos.value[M].set(...g.p, g.I),
        e.uLampCol.value[M].set(...g.c, g.cone));
    }));
  const u = o
      ? [{ p: o.lantern, c: [2.4, 1.1, 0.35], s: 1.3, m: [3, 0.3, 1.5, 0] }]
      : [],
    z = x.near.find((g) => g.ex && g.ex.tall),
    f = Ke(t, e, x, t.rng(777), {
      gridLamps: ye(),
      warning: z
        ? [[z.x + 4.07, z.base + z.h + z.flH * 3 + 9.2, z.z + 2.07]]
        : [],
      flames: m.flames,
      plumes: m.plumes,
      embers: m.embers,
      powered: se,
      points: u,
    });
  a.add(f.group);
  const L = [],
    P = x.tower,
    F = P.base + P.flH * 1.3 + (P.burnF - 1 + P.burnN / 2) * P.flH;
  L.push({ p: [P.x, F, P.z + P.d / 2 + 2], I: 320, c: [1, 0.42, 0.12] });
  for (const g of x.fires.slice(0, w0 - 1)) {
    const M = g.base + g.flH * 1.3 + (g.burnF - 1 + g.burnN / 2) * g.flH;
    L.push({ p: [g.x, M, g.z], I: 50 + g.burnN * 30, c: [1, 0.4, 0.11] });
  }
  L.forEach((g, M) => {
    (e.uFirePos.value[M].set(g.p[0], g.p[1], g.p[2], g.I),
      e.uFireCol.value[M].set(...g.c));
  });
  const I = v.mat.uniforms.uAve.value,
    T = m.heads;
  for (const g of I) g.set(0, 0, 0, 0);
  T.forEach((g, M) => I[M].set(g.x, g.y, g.z, g.state ? 45 : 0));
  const y = m.slots,
    H = s?.fire,
    c = { level: H ? H.intensity : 0.5, flicker: 0.14, light: H },
    w = [
      (g, M) => {
        e.uTime.value = M;
        for (let R = 0; R < L.length; R++) {
          const A = L[R],
            _ =
              0.82 +
              0.1 * Math.sin(M * 7.3 + R * 1.7) +
              0.08 * Math.sin(M * 13.1 + R * 3.1);
          e.uFirePos.value[R].w = A.I * _;
        }
        for (let R = 0; R < T.length; R++) {
          const A = T[R];
          if (A.state !== 2) continue;
          const _ =
            Math.sin(M * A.rate + A.phase) +
              Math.sin(M * A.rate * 2.7 + A.phase * 3.1) * 0.8 >
            -0.2
              ? 1
              : 0.08;
          ((I[R].w = 45 * _), (m.onAttr.array[R] = _));
        }
        m.onAttr.needsUpdate = !0;
        for (let R = 0; R < y.length; R++) {
          const A = y[R],
            _ = e.uLampPos.value[R];
          A.type === "lamp" && A.h.state === 2
            ? (_.w = I[T.indexOf(A.h)].w)
            : A.type === "fire"
              ? (_.w =
                  A.I *
                  (0.75 +
                    0.15 * Math.sin(M * 9.1) +
                    0.1 * Math.sin(M * 17.3 + 1.1)))
              : A.type === "copR"
                ? (_.w =
                    A.I *
                    ((M * 1.6) % 1 < 0.5 ? 1 : 0) *
                    ((M * 6.4) % 1 >= 0.5 ? 1 : 0.6))
                : A.type === "copB"
                  ? (_.w =
                      A.I *
                      ((M * 1.6) % 1 >= 0.5 ? 1 : 0) *
                      ((M * 6.4) % 1 >= 0.5 ? 1 : 0.6))
                  : A.type === "door" &&
                    (_.w =
                      A.I *
                      (Math.sin(M * 3.1) +
                        Math.sin(M * 7.7 + 2) * 0.7 +
                        Math.sin(M * 17.9) * 0.4 >
                      -0.6
                        ? 1
                        : 0.05));
        }
        if ((p.update(g), N.update(g, M), H && c.flicker > 0)) {
          const R =
            1 +
            c.flicker *
              (0.55 * Math.sin(M * 5.1) +
                0.3 * Math.sin(M * 11.7 + 1.3) +
                0.15 * Math.sin(M * 23.3));
          H.intensity = c.level * R;
        }
      },
    ];
  return (
    t.beforeRender(() => {
      e.uPx.value = (t.game.post?.size?.y || 720) / 720;
    }),
    t.scene.add(a),
    console.log(
      `[exterior] built in ${(performance.now() - i).toFixed(0)} ms: ${x.mid.length} mid, ${x.far.length} far, ${x.near.length} near, fx ${JSON.stringify(f.counts)}`,
    ),
    {
      stats: {
        buildMs: performance.now() - i,
        mid: x.mid.length,
        far: x.far.length,
        near: x.near.length,
        fx: f.counts,
        dead: p.agents.length,
      },
      group: a,
      anim: w,
      lights: { moon: s?.moon || null, fire: s?.fire || null },
      points: {
        cityView: [2.6, 1.62, 0.9],
        windowSeat: [2.6, 1.2, 0.45],
        burningCar: [m.burning.x, m.burning.y, m.burning.z],
        policeCar: [m.cop.x, m.cop.y, m.cop.z],
        streetDoor: [7, -27, -0.8],
      },
      props: {
        moon: { dir: l, mesh: d.mesh },
        fire: c,
        helicopter: { trigger: N.trigger, state: N.state, group: N.group },
        crowd: { setAttention: p.setAttention, agents: p.agents, mesh: p.mesh },
        rain: { setIntensity: k.setIntensity, panes: k.panes },
        uniforms: e,
        plan: x,
      },
    }
  );
}
