// assets/city-COfbVKUz 25 — math
// Lines 7768-8042 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
async function Jo(m, { rng: e } = {}) {
  const d = performance.now();
  e = e || m.rng(5306);
  const n = new T0();
  n.name = "city";
  const h = ue(),
    c = ze(m, h);
  n.add(c.mesh);
  const w = Pe(),
    s = Se(e, w, io),
    x = co(s, w, m.rng(5307));
  x.heli2Path = zt;
  const k = Be(m, h, s);
  n.add(k.group);
  const P = ko(m, h, s, x, k.texture, m.rng(5308));
  n.add(P.group);
  const _ = Ke(m, h, s);
  n.add(_.group);
  const g = Co(m, h, s, k.texture, _.mat, m.rng(5309), x.blds.prop.id);
  (n.add(g.group), s.lamps.push(...g.lamps), s.fires.push(...g.fires));
  const M = Io(m, h, s, m.rng(5310));
  (n.add(M.group),
    s.fires.push(...M.fires),
    (s.extraFlames = M.flames),
    (s.extraPts = M.points));
  const N = Do(m, h, s, k.texture, x.blds.prop.id, m.rng(5311));
  (n.add(N.group), s.extraPts.push(...N.points));
  const T = to(m, h, s, m.rng(7713));
  n.add(T.group);
  const S = Ao(n, s.fires),
    v = { light: null },
    a = m.audio || m.game?.audio || null,
    r = So(w, P.props, a),
    y = Go(m, h, [
      {
        name: "gap",
        n: [0, 0, 1],
        p: [697, 50, i0.n.z1],
        zone: [600, 8, -236, 735, 80, -208],
      },
      {
        name: "climb",
        n: [-1, 0, 0],
        p: [y0.x0, 50, -222],
        zone: [880, 20, -256, 960, 110, -188],
      },
    ]);
  m.beforeRender((H) => y.update(H));
  const b = s.fires,
    p = s.lamps.filter((H) => H.on),
    i = [],
    t = [];
  let u = 0;
  const o = m.camera || m.game.camera,
    l = () => {
      const H = o.position;
      i.length = 0;
      for (const I of b) {
        const D =
          ((I.x - H.x) ** 2 + (I.y - H.y) ** 2 + (I.z - H.z) ** 2) / I.I;
        i.length < w0
          ? (i.push([D, I]), i.sort((G, a0) => G[0] - a0[0]))
          : D < i[w0 - 1][0] &&
            ((i[w0 - 1] = [D, I]), i.sort((G, a0) => G[0] - a0[0]));
      }
      t.length = 0;
      for (const I of p) {
        const W = (I.x - H.x) ** 2 + (I.z - H.z) ** 2;
        t.length < k0
          ? (t.push([W, I]), t.sort((D, G) => D[0] - G[0]))
          : W < t[k0 - 1][0] &&
            ((t[k0 - 1] = [W, I]), t.sort((D, G) => D[0] - G[0]));
      }
    },
    f = { h: null, asked: !1, on: !0 },
    z = (H) => {
      const I = a;
      if (!I || !I.ctx) return;
      if (!f.h) {
        const b0 = I.buffers.get("fire_loop");
        if (b0 === void 0) {
          f.asked || ((f.asked = !0), I.buffer("fire_loop"));
          return;
        }
        if (
          !b0 ||
          ((f.h = I.play("fire_loop", {
            loop: !0,
            vol: 0,
            pos: [H.x, H.y, H.z],
            ref: 9,
            rolloff: 1,
            bus: "amb",
            reverb: 0.1,
          })),
          !f.h)
        )
          return;
      }
      const W = i[0]?.[1],
        D = f.h,
        G = D.panner,
        a0 = D.gain.gain,
        o0 = I.ctx.currentTime,
        p0 =
          W && f.on && H.y > -3
            ? Math.min(1, W.I / 90) * 0.9 * (D.source.buffer?._norm ?? 1)
            : 0;
      (W &&
        G &&
        (G.positionX.setTargetAtTime(W.x, o0, 0.4),
        G.positionY.setTargetAtTime(W.y, o0, 0.4),
        G.positionZ.setTargetAtTime(W.z, o0, 0.4)),
        a0.cancelScheduledValues(o0),
        a0.setTargetAtTime(p0, o0, 0.5),
        a0.setTargetAtTime(0, o0 + 0.5, 0.3));
    },
    A = [
      (H, I) => {
        ((h.uTime.value = I),
          (h.uPx.value = (m.game.post?.size?.y || 720) / 720),
          u++ % 6 === 0 && l());
        for (let W = 0; W < w0; W++) {
          const D = i[W]?.[1],
            G = h.uFirePos.value[W];
          if (!D) {
            G.w = 0;
            continue;
          }
          const a0 =
            0.8 +
            0.12 * Math.sin(I * 7.3 + W * 1.7) +
            0.08 * Math.sin(I * 13.1 + W * 3.1);
          (G.set(D.x, D.y, D.z, D.I * a0),
            h.uFireCol.value[W].set(1, 0.4, 0.11),
            h.uFireDir.value[W].set(
              D.nx || 0,
              0,
              D.nz || 0,
              D.nx || D.nz ? 0.85 : 0,
            ));
        }
        (S.update(H, I, o.position), z(o.position), _o(h, v.light));
        {
          const W = o.position,
            D = Qt(W.x, W.y, W.z),
            G = P.props.smoke.veil.uK;
          G.value += (Math.min(1, D * 1.15) - G.value) * Math.min(1, H * 9);
        }
        for (let W = 0; W < k0; W++) {
          const D = t[W]?.[1],
            G = h.uLampPos.value[W];
          if (!D) {
            G.w = 0;
            continue;
          }
          const a0 = D.flick
            ? Math.sin(I * 7 + W) + Math.sin(I * 17.3 + W * 3) * 0.7 > -0.3
              ? 1
              : 0.1
            : 1;
          (G.set(D.x + D.ax * 1.4, D.y - 0.3, D.z + D.az * 1.4, 26 * a0),
            h.uLampCol.value[W].set(1, 0.45, 0.12, 1));
        }
      },
    ],
    F = (H, I) =>
      (H > C0.x0 && H < C0.x1 && I > C0.z0 && I < C0.z1) || st(H, I),
    E = (H) => H > $.z0 - 2 && H < $.z1 + 2,
    K = (H, I, W = 0) =>
      F(H, I)
        ? null
        : W > 12 || (E(I) && W > $.bed - 2 && W < 12)
          ? "air"
          : W > -3
            ? "city"
            : null,
    L = (H, I, W = 0) => (F(H, I) || W < -3 ? null : 0),
    q = s.streets.ns
      .filter((H) => H.x > C0.x0 - 220 && H.x < C0.x1 + 220)
      .concat(
        s.streets.ew.filter((H) => H.z > C0.z0 - 220 && H.z < C0.z1 + 220),
      ),
    R = (H, I, W = 0) => {
      if (F(H, I) || W < -3) return null;
      for (const D of q) {
        const G = D.hw > 15 ? 5.5 : 4;
        if (
          D.x !== void 0 &&
          D.z0 !== void 0 &&
          I >= D.z0 &&
          I <= D.z1 &&
          Math.abs(H - D.x) < D.hw
        )
          return Math.abs(H - D.x) < D.hw - G ? "asphalt" : "stone";
        if (
          D.z !== void 0 &&
          D.x0 !== void 0 &&
          H >= D.x0 &&
          H <= D.x1 &&
          Math.abs(I - D.z) < D.hw
        )
          return Math.abs(I - D.z) < D.hw - G ? "asphalt" : "stone";
      }
      return "stone";
    },
    V = () => {
      try {
        const H = new Gt(75, o.aspect || 1.7777777777777777, 0.05, 1500);
        (H.position.set(700, 36, -222),
          H.lookAt(760, 36, -222),
          H.updateMatrixWorld(),
          y.update(H),
          (h.uMirrorOn.value = 0));
      } catch (H) {
        console.warn("[city3 warmUp]", H);
      }
    };
  return (
    console.log(
      `[city3] built in ${(performance.now() - d).toFixed(0)} ms: ${s.blds.length} buildings, ${k.meshes.length} building meshes, ${_.meshes.length} ground meshes, fx ${JSON.stringify(T.counts)}, ${b.length} fires, ${p.length} lit lamps`,
    ),
    {
      group: n,
      colliders: [],
      circles: [],
      anim: A,
      points: {
        liftoff: [452, 0, 92],
        crash: r.crash.at.slice(),
        gap: [697, 35, -222],
        climbFace: [961, 60, -222],
        bridge: [1154, -7, -575],
        wires: [1256, 12, -667],
        mast: [1239.5, 21, -703.5],
      },
      props: {
        ...P.props,
        uniforms: h,
        plan: s,
        line: w,
        sites: P,
        pool: S,
        mirrors: y,
        searchlight(H) {
          v.light = H || null;
        },
        clearance(H = Oo) {
          return jo({
            line: w,
            plan: s,
            roofItems: k.roofItems,
            solids: [...P.solids, ...g.solids, ...M.solids, ...N.solids],
            flight: r,
            props: P.props,
          }).report(H);
        },
        ambience(H = !0) {
          f.on = !!H;
        },
        dawn(H) {
          h.uDawn.value = H;
        },
      },
      zoneAt: K,
      groundAt: L,
      surfaceAt: R,
      navPlans: {},
      looks: { city: $o, air: Xo },
      sky: { mesh: c.mesh, env: c.env, update: c.update, uniforms: h },
      flight: r,
      warmUp: V,
    }
  );
}
