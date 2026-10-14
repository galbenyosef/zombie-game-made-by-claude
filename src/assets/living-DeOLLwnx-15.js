// assets/living-DeOLLwnx 15 — math
// Lines 4534-4850 of readable/assets/living-DeOLLwnx.pretty.js (statement-aligned).
function ze(a, t, r, e) {
  const o = new y0();
  ((o.name = "windows"), r.add(o));
  const s = [],
    n = [],
    l = a.mats.get("velvet_red", { side: N0 }),
    p = [],
    d = [];
  let c = null;
  const u = () => {
      c && (c.shadow.needsUpdate = !0);
    },
    b = 2.84,
    k = V0 - 0.165,
    S = V0 - 0.16;
  Mt.forEach((w, f) => {
    const i = (w.x0 + w.x1) / 2;
    t.frame(new b0());
    const m = i - 1.42,
      M = i + 1.42;
    t.part(
      new Z0(0.014, 0.014, M - m, 12).rotateZ(j0 / 2).translate(i, b, k),
      "brass_aged",
      { cast: !1 },
    );
    for (const G of [-1, 1])
      (t.part(
        j(
          [
            [0, 0],
            [0.02, 0.01],
            [0.032, 0.035],
            [0.024, 0.06],
            [0.006, 0.08],
            [0, 0.085],
          ],
          14,
        )
          .rotateZ((-G * j0) / 2)
          .translate(i + G * 1.42, b, k),
        "brass_aged",
        { cast: !1 },
      ),
        t.part(
          _(0.02, 0.05, 0.17, { r: 0.006 }).translate(
            i + G * 1.3,
            b + 0.01,
            V0 - 0.085,
          ),
          "brass_aged",
          { cast: !1 },
        ));
    const v = [];
    f === 1
      ? (v.push({
          xOut: i - 1.38,
          dir: 1,
          wTop: 0.62,
          wTie: 0.2,
          wBot: 0.46,
          tieV: 0.42,
          yTop: b - 0.03,
          length: b - 0.03,
          folds: 7,
          amp: 0.05,
        }),
        v.push({
          xOut: i + 1.38,
          dir: -1,
          wTop: 0.6,
          wTie: 0.22,
          wBot: 0.48,
          tieV: 0.45,
          yTop: b - 0.03,
          length: b - 0.03,
          folds: 7,
          amp: 0.05,
        }))
      : (v.push({
          xOut: i - 1.38,
          dir: 1,
          wTop: 0.5,
          wBot: 0.56,
          yTop: b - 0.03,
          length: b - 0.03 + 0.02,
          folds: 6,
          amp: 0.045,
          ragged: 0.08,
        }),
        v.push({
          xOut: i + 1.38,
          dir: -1,
          wTop: 0.62,
          wBot: 0.7,
          top: (G) => b - 0.03 - (Math.max(0, G - 0.3) / 0.7) * 1.05,
          length: b - 0.03 + 0.12,
          shorten: (G) => -Math.max(0, G - 0.3) * 0.2,
          folds: 5,
          amp: 0.06,
          ragged: 0.1,
        }));
    for (const G of v) {
      d.push(Se({ ...G, z: S, rng: e }));
      const J = 9;
      for (let E = 0; E < J; E++) {
        const U = E / (J - 1);
        (G.top ? G.top(U) : G.yTop) < b - 0.05 ||
          t.part(
            new at(0.022, 0.004, 6, 14).translate(
              G.xOut + G.dir * U * G.wTop,
              b,
              k,
            ),
            "brass_aged",
            { cast: !1 },
          );
      }
      if (G.tieV != null) {
        const E = G.yTop - G.tieV * G.length,
          U = G.xOut + G.dir * 0.06;
        (t.part(
          T0(
            [
              [U - G.dir * 0.05, E + 0.02, V0 - 0.02],
              [U, E, S - 0.09],
              [U + G.dir * G.wTie * 0.9, E - 0.01, S - 0.07],
              [U + G.dir * G.wTie, E + 0.01, S - 0.02],
            ],
            0.009,
            16,
            6,
          ),
          "brass_aged",
          { cast: !1 },
        ),
          t.part(
            j(
              [
                [0, 0],
                [0.02, 0.01],
                [0.03, 0.06],
                [0.01, 0.1],
                [0, 0.1],
              ],
              10,
            ).translate(U + G.dir * 0.03, E - 0.12, S - 0.09),
            "brass_aged",
            { cast: !1 },
          ));
      }
    }
    const T = new y0();
    ((T.name = "planks_" + w.id), o.add(T));
    const I = [],
      A = (G, J, E, U, B, o0, x) => {
        const Y = new $0(),
          n0 = () => (e() - 0.5) * 0.03;
        (Y.moveTo(-G / 2, -J / 2),
          Y.lineTo(G / 2 + n0(), -J / 2),
          Y.lineTo(G / 2 - 0.02, -J / 2 + J * 0.4),
          Y.lineTo(G / 2 + n0(), J / 2),
          Y.lineTo(-G / 2 + n0(), J / 2),
          Y.lineTo(-G / 2 - 0.015, 0),
          Y.lineTo(-G / 2, -J / 2));
        const c0 = G0(Y, 0.026, 0.004, 1);
        c0.translate(0, 0, -0.013);
        const W = new y0(),
          X = new st(a.mats, e);
        return (
          X.frame(new b0()),
          X.part(c0, "boards_barricade", { grain: "x" }),
          X.flush(W, "board"),
          W.position.set(E, U, V0 - 0.1 - o0 * 0.028),
          W.rotation.set(0, j0, B),
          x && (W.userData.hang = !0),
          (W.userData.base = {
            x: W.position.x,
            y: W.position.y,
            z: W.position.z,
            rz: B,
          }),
          T.add(W),
          I.push(W),
          W
        );
      };
    (A(2.2, 0.17, i, 1.62, 0.62 * (f ? -1 : 1), 0),
      A(2.1, 0.16, i + 0.05, 1.7, -0.55 * (f ? -1 : 1), 1),
      A(0.8, 0.15, i + (f ? -0.55 : 0.5), 1.05, 1.25 * (f ? -1 : 1), 2, !0));
    let D = 0;
    const q = {
      id: w.id,
      group: T,
      boards: I,
      spot: [i, 0, V0 - 0.4],
      get visible() {
        return T.visible;
      },
      show(G = !0) {
        ((T.visible = !!G), u());
      },
      hide() {
        ((T.visible = !1), u());
      },
      shake(G = 1) {
        D = Math.max(D, 0.02 * G);
      },
    };
    (s.push((G, J) => {
      if (!(D < 1e-4)) {
        ((D *= Math.exp(-G * 6)), u());
        for (const E of I) {
          const U = E.userData.base,
            B = Math.sin(J * 61 + U.x * 7) * D;
          ((E.position.z = U.z - Math.abs(B) * 0.8),
            (E.rotation.z = U.rz + B * (E.userData.hang ? 6 : 1.2)));
        }
        if (D < 1e-4)
          for (const E of I) {
            const U = E.userData.base;
            ((E.position.z = U.z), (E.rotation.z = U.rz));
          }
      }
    }),
      p.push(q));
  });
  {
    const w = new u0(F0(d), l);
    ((w.castShadow = !0),
      (w.receiveShadow = !0),
      (w.name = "curtains"),
      o.add(w));
  }
  const h = new tt(16742966, 600, 30, 0.5, 0.35, 2);
  (h.position.set(6, 11.5, V0 + 8.1),
    h.target.position.set(6, 0, V0 - 1.6),
    (h.castShadow = !0),
    h.shadow.mapSize.set(2048, 2048),
    (h.shadow.bias = -6e-4),
    (h.shadow.normalBias = 0.03),
    (h.shadow.camera.near = 6),
    (h.shadow.camera.far = 30),
    (h.shadow.autoUpdate = !1),
    (h.shadow.needsUpdate = !0),
    (h.name = "fire_gaps"),
    (c = h),
    o.add(h, h.target));
  const y = (() => {
      const w = document.createElement("canvas");
      ((w.width = 64), (w.height = 128));
      const f = w.getContext("2d"),
        i = f.createLinearGradient(0, 128, 0, 0);
      (i.addColorStop(0, "rgba(255,255,255,1)"),
        i.addColorStop(0.55, "rgba(150,150,150,1)"),
        i.addColorStop(1, "rgba(30,30,30,1)"),
        (f.fillStyle = i),
        f.fillRect(0, 0, 64, 128));
      for (let M = 0; M < 40; M++)
        ((f.fillStyle = `rgba(0,0,0,${0.15 + (M % 5) * 0.08})`),
          f.beginPath(),
          f.ellipse(
            (M * 37) % 64,
            (M * 53) % 128,
            6 + (M % 7) * 3,
            3 + (M % 4) * 2,
            0,
            0,
            Math.PI * 2,
          ),
          f.fill());
      const m = new ct(w);
      return ((m.colorSpace = ft), m);
    })(),
    C = new U0({
      map: y,
      color: new H0().setRGB(0.075, 0.022, 0.005),
      transparent: !0,
      blending: Tt,
      depthWrite: !1,
      toneMapped: !1,
      fog: !1,
    });
  {
    const w = Mt.map((i) =>
        new _0(i.x1 - i.x0, 1.8)
          .rotateY(j0)
          .translate((i.x0 + i.x1) / 2, 1.7, V0 + 0.17),
      ),
      f = new u0(F0(w), C);
    ((f.name = "fire_haze"), o.add(f));
  }
  const z = { level: 600, haze: 1 };
  return (
    s.push((w, f) => {
      const i =
        0.78 +
        0.1 * Math.sin(f * 1.7) +
        0.07 * Math.sin(f * 4.3 + 1.1) +
        0.05 * Math.sin(f * 9.1 + 2.3) +
        0.04 * Math.sin(f * 17.3);
      ((h.intensity = z.level * i),
        C.color.setRGB(
          0.075 * i * z.haze,
          0.022 * i * z.haze,
          0.005 * i * z.haze,
        ));
    }),
    { group: o, anim: s, colliders: n, plankSets: p, fireSpot: h, fire: z }
  );
}
const l0 = Math.PI,
  O0 = (a, t = 0, r = 1) => (a < t ? t : a > r ? r : a),
  Te = {
    slide: (a) => (a < 0.5 ? 4 * a * a * a : 1 - Math.pow(-2 * a + 2, 3) / 2),
    fall: (a) => a * a,
    fly: (a) => 1 - (1 - a) * (1 - a),
  };
