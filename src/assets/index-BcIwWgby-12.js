// assets/index-BcIwWgby 12 — math
// Lines 2961-3283 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function buildGardenProps(s, o) {
  const t = new Kt();
  t.name = "props";
  const u = [],
    e = Gn(),
    r = [],
    a = (st, G, q) => {
      let U = 0;
      for (; U < 8 && J0(st + Math.cos(q) * U, G + Math.sin(q) * U) < 0;)
        U += 0.03;
      return [st + Math.cos(q) * U, G + Math.sin(q) * U];
    };
  for (const [st, G, q] of [
    [-5, -0.8, 22],
    [0.7, 1, 16],
  ])
    for (let U = 0; U < q; U++) {
      const Z = (U / q) * Math.PI * 2 + o() * 0.2,
        [ot, $] = a(st, G, Z);
      if (
        J0(ot, $) > 0.3 ||
        Math.hypot(ot - Yt.a[0], $ - Yt.a[1]) < 1 ||
        Math.hypot(ot - Yt.b[0], $ - Yt.b[1]) < 1 ||
        Math.hypot(ot - Ie.akane[0], $ - Ie.akane[1]) < 1.1 ||
        Bo(ot, $) < 0.7
      )
        continue;
      const C = 0.22 + o() * 0.32;
      r.push({
        x: ot + (o() - 0.5) * 0.15,
        y: v0 + C * 0.15,
        z: $ + (o() - 0.5) * 0.15,
        s: [C * (1 + o() * 0.6), C * (0.55 + o() * 0.35), C * (1 + o() * 0.5)],
        rot: o() * 6.28,
        wet: !0,
      });
    }
  for (const [st, G, q] of [
    [6.2, -1.6, 0.7],
    [-10.2, -6, 0.9],
    [9.6, 4.4, 0.6],
    [-4.2, 6.6, 0.75],
    [1.5, 7.4, 0.5],
    [-11.8, 3, 0.55],
    [10.4, -4.6, 0.5],
    [-1.6, -7.6, 0.6],
  ])
    (r.push({
      x: st,
      y: Me(st, G) + q * 0.1,
      z: G,
      s: [q * 1.2, q * 0.7, q],
      rot: o() * 6.28,
    }),
      u.push({ x: st, z: G, r: q * 0.95 }));
  const p = r.map((st) => ({
      x: st.x,
      z: st.z,
      r: Math.max(st.s[0], st.s[2]) * 0.92,
    })),
    i = [Ho(o, 3), Ho(o, 3), Ho(o, 3)],
    d = new wt(),
    y = new w0(),
    w = new pe(),
    g = new dt(),
    z = new dt();
  i.map((st, G) => {
    const q = r.filter((Z, ot) => ot % 3 === G),
      U = new l0(st, e, q.length);
    return (
      q.forEach((Z, ot) => {
        (y.setFromEuler(w.set((o() - 0.5) * 0.3, Z.rot, (o() - 0.5) * 0.3)),
          d.compose(z.set(Z.x, Z.y, Z.z), y, g.set(...Z.s)),
          U.setMatrixAt(ot, d));
      }),
      (U.castShadow = !0),
      (U.receiveShadow = !0),
      U.layers.enable(_e),
      (U.name = "rocks" + G),
      t.add(U),
      U
    );
  });
  {
    const st = Ho(o, 2),
      G = [
        [7.8, -8.6],
        [7.1, -9.3],
        [6.3, -9.9],
        [-6.2, 6],
        [-7, 6.9],
        [-7.9, 7.6],
      ];
    for (const [U, Z] of G) p.push({ x: U, z: Z, r: 0.3 });
    const q = new l0(st, e, G.length);
    ((q.name = "steps"),
      (q.receiveShadow = !0),
      G.forEach(([U, Z], ot) => {
        (y.setFromEuler(w.set(0, o() * 6, 0)),
          d.compose(z.set(U, Me(U, Z) - 0.02, Z), y, g.set(0.28, 0.06, 0.24)),
          q.setMatrixAt(ot, d));
      }),
      t.add(q));
  }
  const x = new Kt();
  x.name = "lantern";
  const v = Ie.lantern[0],
    n = Ie.lantern[1],
    l = Me(v, n);
  new n0({ color: 9078396, roughness: 0.9 });
  const f = [
      [new Pt(0.34, 0.4, 0.2, 6), 0.1],
      [new Pt(0.1, 0.13, 0.8, 12), 0.6],
      [new Pt(0.3, 0.24, 0.14, 6), 1.07],
      [new Pt(0.22, 0.22, 0.32, 6, 1, !0), 1.3],
      [new Pt(0.05, 0.4, 0.3, 6), 1.6],
      [new t0(0.075, 12, 8), 1.78],
    ],
    h = new n0({ color: 9210240, roughness: 0.92 });
  ((h.onBeforeCompile = (st) => {
    ((st.vertexShader = st.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec3 vLW;`,
      )
      .replace(
        "#include <worldpos_vertex>",
        `#include <worldpos_vertex>
vLW = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
      )),
      (st.fragmentShader = st.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vLW;
float gH(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }`,
        )
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
diffuseColor.rgb *= 0.8 + 0.3 * gH(floor(vLW * 260.0)) * 0.6 + 0.15 * sin(vLW.y * 9.0 + vLW.x * 5.0);`,
        )));
  }),
    (h.customProgramCacheKey = () => "granite2"));
  const c = f.map(([st, G]) => {
    const q = new bt(st, h);
    return (
      (q.position.y = G),
      (q.castShadow = !0),
      (q.receiveShadow = !0),
      x.add(q),
      q
    );
  });
  ((c[3].material = h.clone()), (c[3].material.side = p0));
  const M = new bt(
    new Pt(0.17, 0.17, 0.26, 6),
    new n0({
      color: 2759180,
      emissive: 16757850,
      emissiveIntensity: 0.9,
      roughness: 1,
    }),
  );
  ((M.position.y = 1.3), x.add(M));
  const m = new No(16754768, 0.35, 3, 2);
  (m.position.set(0, 1.46, 0),
    (m.userData.noActor = !0),
    x.add(m),
    x.position.set(v, l, n),
    t.add(x),
    u.push({ x: v, z: n, r: 0.42 }));
  const k = new Kt();
  k.name = "bridge";
  const S = new dt(Yt.a[0], Me(...Yt.a), Yt.a[1]),
    A = new dt(Yt.b[0], Me(...Yt.b), Yt.b[1]),
    b = S.distanceTo(A),
    P = A.clone().sub(S).normalize(),
    _ = new dt(-P.z, 0, P.x),
    I = (st) =>
      S.clone()
        .lerp(A, st)
        .add(new dt(0, Yt.rise * Math.sin(Math.PI * st), 0)),
    R = new Ja({
      color: 10231314,
      roughness: 0.42,
      clearcoat: 0.6,
      clearcoatRoughness: 0.35,
    }),
    V = At("wood_oak_pale"),
    L = [],
    K = 26;
  for (let st = 0; st < K; st++) {
    const G = (st + 0.5) / K,
      q = I(G),
      U = I(G + 0.01),
      Z = U.clone().sub(q).normalize(),
      ot = new qt(Yt.w, 0.05, (b / K) * 0.94),
      $ = new bt(ot, V);
    ($.position.copy(q),
      $.quaternion.setFromRotationMatrix(
        new wt().makeBasis(_, Z.clone().cross(_).negate().normalize(), Z),
      ),
      ($.castShadow = !0),
      ($.receiveShadow = !0),
      $.layers.enable(_e),
      k.add($),
      L.push($));
  }
  const j = (st, G) => {
    const q = [];
    for (let U = 0; U <= 16; U++) {
      const Z = U / 16;
      q.push(
        I(Z)
          .addScaledVector(_, st)
          .add(new dt(0, G, 0)),
      );
    }
    return q;
  };
  for (const st of [-1, 1]) {
    for (const G of [0.82, 0.45]) {
      const q = new ws(j(st * Yt.w * 0.5, G)),
        U = new bt(new Es(q, 40, G > 0.6 ? 0.045 : 0.03, 8), R);
      ((U.castShadow = !0), k.add(U));
    }
    for (let G = 0; G <= 8; G++) {
      const q = I(G / 8).addScaledVector(_, st * Yt.w * 0.5),
        U = new bt(new Pt(0.05, 0.055, 0.95, 8), R);
      (U.position.copy(q).add(new dt(0, 0.44, 0)),
        (U.castShadow = !0),
        U.layers.enable(_e),
        k.add(U));
    }
  }
  for (const st of [0.2, 0.5, 0.8])
    for (const G of [-1, 1]) {
      const q = I(st).addScaledVector(_, G * Yt.w * 0.42),
        U = q.y - (v0 - 0.6),
        Z = new bt(new Pt(0.06, 0.06, U, 8), R);
      (Z.position.set(q.x, q.y - U / 2, q.z), Z.layers.enable(_e), k.add(Z));
    }
  (k.traverse((st) => {
    st.isMesh && (st.userData.m0 = st.material);
  }),
    t.add(k),
    u.push({ x: S.x, z: S.z, r: 0.75 }, { x: A.x, z: A.z, r: 0.75 }));
  const O = { p: x.position.clone(), r: x.rotation.clone() },
    J = At("ruin_char");
  return {
    group: t,
    circles: u,
    holes: p,
    setWorld: (st) => {
      const G = st === "ruins";
      ((e.userData.U.uMoss.value = G ? 0.25 : 1),
        G
          ? (x.position.set(v + 0.5, l + 0.22, n - 0.2),
            x.rotation.set(0, 0.6, Math.PI / 2 - 0.12),
            c[4].position.set(0.3, 1.3, 0.8),
            (c[5].visible = !1))
          : (x.position.copy(O.p),
            x.rotation.copy(O.r),
            c[4].position.set(0, 1.6, 0),
            (c[5].visible = !0)),
        (M.visible = !G),
        (m.intensity = G ? 0 : 0.35),
        k.traverse((q) => {
          q.isMesh && (q.material = G ? J : q.userData.m0);
        }),
        L.forEach((q, U) => {
          q.visible = !G || U < 8 || U > 17;
        }));
    },
    lantern: x,
    bridge: k,
    candle: m,
  };
}
const pt = { x0: -6.2, x1: 6.2, z0: 41, z1: 61.2 },
  W0 = 12,
  S0 = 3.4,
  sa = [44, 49, 54, 59],
  Te = [41, 44, 49, 54, 59, 61.2],
  Oo = [-6.2, -S0, S0, 6.2],
  Z0 = 7.2,
  Ia = 11.2,
  fs = [46.5, 51.5, 56.5],
  e0 = { w: 1.7, sill: 3.3, apex: 10.25 },
  G0 = { y: 8.3, r: 1.85 },
  z0 = { w: 3, sill: 5.75, apex: 10.75, rise: 2 },
  jt = {
    steps: [57.9, 58.25, 58.6],
    rise: 0.15,
    x0: -3.05,
    x1: 3.05,
    z1: 61.2,
    y: 0.45,
  },
  Qt = { ...r0.back, spring: 1.8 },
  Ue = r0.door,
  po = 4.3,
  _a = (s, o) => {
    const t = (s * s + o * o) / (2 * s);
    return { R: t, c: t - s };
  },
  aa = (s, o, t, u, e = 14) => {
    const r = (o - s) / 2,
      { R: a, c: p } = _a(r, u),
      i = Math.acos(Math.max(-1, Math.min(1, p / a))),
      d = [];
    for (let y = 0; y <= e; y++) {
      const w = (i * y) / e;
      d.push([s + a - a * Math.cos(w), t + a * Math.sin(w)]);
    }
    for (let y = e - 1; y >= 0; y--) {
      const w = (i * y) / e;
      d.push([o - a + a * Math.cos(w), t + a * Math.sin(w)]);
    }
    return d;
  };
