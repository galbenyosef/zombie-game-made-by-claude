// assets/index-BcIwWgby 10 — math
// Lines 2205-2869 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function buildGardenFlora(s, o, t) {
  const u = new Kt();
  u.name = "flora";
  const e = {
      uWindT: { value: 0 },
      uWind: { value: 1 },
      uSunDirF: { value: new dt(-0.83, 0.27, 0.49).normalize() },
      uSunColF: { value: new Xt(1, 0.75, 0.45) },
    },
    r = bakeGardenSigns(),
    a = Un(r, e),
    p = At("garden_bark"),
    i = At("ruin_char"),
    d = [],
    y = [],
    w = [],
    g = [],
    z = new w0(),
    x = new pe(),
    v = new wt(),
    n = new dt(),
    l = new dt();
  let f = null;
  const h = (N) => {
      if (!f) return [0, 1, 0, 1];
      const H = N.clone().sub(f.c),
        Q = H.length() || 1;
      return [
        H.x / Q,
        H.y / Q + 0.25,
        H.z / Q,
        Math.min(1, Math.max(0, (Q / f.r - 0.35) / 0.65)),
      ];
    },
    c = (N, H, Q, W, B = 1, F = 1, E = null) => {
      (E
        ? z.setFromUnitVectors(Ht(0, 0, 1), E)
        : (x.set(t() * Math.PI * 2, t() * Math.PI * 2, t() * Math.PI * 2),
          z.setFromEuler(x)),
        v.compose(N, z, n.set(H, H, H)),
        g.push({
          m: v.clone(),
          cell: Q,
          flex: B,
          ph: t() * 6.28,
          back: F,
          c: W,
          sh: h(N),
        }));
    },
    M = (N, H = 0.12) => {
      const Q = Array.isArray(N) ? N[Math.floor(t() * N.length)] : N,
        W = new Xt(Q),
        B = 1 + (t() - 0.5) * H * 2;
      return W.multiplyScalar(B);
    },
    m = [
      {
        name: "cherry",
        at: Ie.cherry,
        height: 5.6,
        lean: [0.12, 0.42],
        r0: 0.21,
        levels: 3,
        kids: [5, 4, 3],
        angle: 0.75,
        lenRatio: 0.66,
        droop: 0.55,
        spreadOut: 0.5,
        wobble: 0.3,
        cardsPerTip: 22,
        cell: 1,
        size: [0.34, 0.5],
        color: [["#fff6f8", "#ffeef3", "#fde4ec"], 0.05],
        cluster: 0.62,
        back: 1.2,
      },
      {
        name: "mapleA",
        at: [5.2, -6.4],
        height: 4.6,
        lean: [-0.05, 0.08],
        r0: 0.14,
        levels: 3,
        kids: [4, 4, 3],
        angle: 0.8,
        lenRatio: 0.62,
        spreadOut: 0.7,
        wobble: 0.28,
        cardsPerTip: 20,
        cell: 0,
        size: [0.3, 0.44],
        color: [["#c8281a", "#d8421c", "#b01e14", "#e05a1e", "#9c1a12"], 0.15],
        cluster: 0.46,
        back: 1.6,
      },
      {
        name: "mapleB",
        at: [-9.8, 5.3],
        height: 4,
        lean: [0.1, -0.1],
        r0: 0.12,
        levels: 3,
        kids: [4, 3, 3],
        angle: 0.8,
        lenRatio: 0.62,
        spreadOut: 0.7,
        wobble: 0.3,
        cardsPerTip: 20,
        cell: 0,
        size: [0.3, 0.42],
        color: [["#e0601a", "#d24a16", "#f07a22", "#c83c14"], 0.15],
        cluster: 0.44,
        back: 1.6,
      },
      {
        name: "mapleC",
        at: [7.6, 6.2],
        height: 3.2,
        lean: [0, 0],
        r0: 0.09,
        levels: 3,
        kids: [3, 3, 3],
        angle: 0.85,
        lenRatio: 0.6,
        spreadOut: 0.6,
        wobble: 0.3,
        cardsPerTip: 18,
        cell: 0,
        size: [0.28, 0.4],
        color: [["#f0a020", "#e8b030", "#d88a18", "#f4c040"], 0.15],
        cluster: 0.42,
        back: 1.6,
      },
      {
        name: "pine",
        at: [-9.2, -7.6],
        height: 3.6,
        lean: [0.35, 0.15],
        r0: 0.16,
        levels: 2,
        kids: [5, 3],
        angle: 1.15,
        lenRatio: 0.7,
        spreadOut: 0.9,
        wobble: 0.22,
        rise: -0.02,
        cardsPerTip: 40,
        cell: 5,
        size: [0.22, 0.34],
        color: ["#7e9a6a", 0.12],
        cluster: 0.5,
        flat: !0,
        back: 0.6,
      },
    ];
  for (const N of m) {
    const H = En(t, N),
      Q = new bt(H.geo, p);
    ((Q.castShadow = !0),
      (Q.receiveShadow = !0),
      (Q.name = N.name),
      u.add(Q),
      d.push(Q),
      y.push({ x: N.at[0], z: N.at[1], r: N.r0 + 0.15 }));
    {
      const W = Ht(0, 0, 0);
      for (const F of H.tips) W.add(F.p);
      W.divideScalar(Math.max(1, H.tips.length));
      let B = 0.5;
      for (const F of H.tips) B = Math.max(B, F.p.distanceTo(W));
      f = { c: W, r: B + N.cluster };
    }
    w.push({ x: f.c.x, z: f.c.z, r: f.r });
    for (const W of H.tips)
      for (let B = 0; B < N.cardsPerTip; B++) {
        const F = W.pts[Math.max(0, W.pts.length - 1 - Math.floor(t() * 3))],
          E = N.cluster * Math.cbrt(t()),
          Y = (t() - 0.5) * 2,
          et = (t() - 0.5) * (N.flat ? 0.45 : 1.4),
          nt = (t() - 0.5) * 2;
        l.set(F.x + Y * E, F.y + et * E + (N.flat ? 0.08 : 0), F.z + nt * E);
        const it = N.size[0] + t() * (N.size[1] - N.size[0]);
        (c(
          l.clone(),
          it,
          N.cell,
          M(N.color[0], N.color[1]),
          1,
          N.back,
          N.flat
            ? Ht((t() - 0.5) * 0.4, 1, (t() - 0.5) * 0.4).normalize()
            : null,
        ),
          N.cell === 1 &&
            t() < 0.12 &&
            c(
              l.clone().add(Ht(0.05, -0.03, 0.04)),
              it * 0.6,
              2,
              M("#b8d890", 0.1),
              1,
              1,
            ));
      }
    f = null;
  }
  const k = [],
    S = new n0({ color: 8362570, roughness: 0.45 });
  for (let N = 0; N < 40; N++) {
    const H = -12.6 + t() * 1.7,
      Q = -9.9 + t() * 9.9,
      W = 5.8 + t() * 2.8,
      B = 0.045 + t() * 0.03,
      F = Ht((t() - 0.3) * 0.12, 1, (t() - 0.5) * 0.12).normalize(),
      E = [];
    for (let et = 0; et <= 6; et++)
      E.push(
        Ht(H, 0, Q)
          .addScaledVector(F, (W * et) / 6)
          .add(Ht(0, 0, 0).addScaledVector(Ht(0.1, 0, 0), (et / 6) ** 2 * 0.3)),
      );
    const Y = Fs(E, [B, B * 0.8], 7);
    (k.push({ g: Y, x: H, z: Q, h: W, r: B, lean: F, pts: E }),
      y.push({ x: H, z: Q, r: B + 0.08 }));
    for (let et = 0; et < 34; et++) {
      const nt = 0.4 + Math.sqrt(t()) * 0.6,
        it = Ht(H, 0, Q).addScaledVector(F, W * nt);
      c(
        it.add(Ht((t() - 0.5) * 1.1, (t() - 0.5) * 0.5, (t() - 0.5) * 1.1)),
        0.7 + t() * 0.35,
        4,
        M(["#dfe8c0", "#c8d8a0", "#e8ecc8"], 0.1),
        1.4,
        1.3,
      );
    }
  }
  const A = Ws(k.map((N) => N.g));
  ((S.onBeforeCompile = (N) => {
    ((N.vertexShader = N.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec2 vBUv;`,
      )
      .replace(
        "#include <uv_vertex>",
        `#include <uv_vertex>
vBUv = uv;`,
      )),
      (N.fragmentShader = N.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec2 vBUv;`,
        )
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
      float node = smoothstep(0.02, 0.0, abs(fract(vBUv.y / 0.32) - 0.5) - 0.47);
      diffuseColor.rgb *= 0.85 + 0.25 * sin(vBUv.y * 3.1 + vBUv.x * 2.0) * 0.2;
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.75, 0.8, 0.55), node);`,
        )));
  }),
    (S.customProgramCacheKey = () => "bamboo2"));
  const b = new bt(A, S);
  ((b.name = "bamboo"), (b.castShadow = !0), (b.receiveShadow = !0), u.add(b));
  const P = new bt(
    Ws(
      k.map((N) => {
        const H = 0.4 + t() * 1.6,
          Q = [
            Ht(N.x, 0, N.z),
            Ht(N.x, 0, N.z).addScaledVector(N.lean, H * 0.5),
            Ht(N.x, 0, N.z).addScaledVector(N.lean, H),
          ];
        return Fs(Q, [N.r, N.r * 0.9], 7);
      }),
    ),
    i,
  );
  ((P.name = "bamboo_burnt"), (P.visible = !1), (P.castShadow = !0), u.add(P));
  const _ = [],
    I = [
      [9.8, -9.2],
      [11.6, -6.8],
      [11.8, -2.4],
      [11.2, 3.4],
      [9.6, 8.6],
      [5.2, 9.4],
      [-4.8, 9.6],
      [-7.8, 8.8],
      [-11.4, 8.2],
      [-6.2, -9.4],
      [0.8, -9.6],
      [3.2, -8.6],
      [-10.6, -4],
      [6.8, -1.2],
      [-8.6, 2.6],
    ],
    R = ["#f26a9a", "#e8327a", "#fbe8ee", "#f58c6c", "#d94a8a"];
  for (const [N, H] of I) {
    const Q = 0.55 + t() * 0.45,
      W = 0.4 + t() * 0.25,
      B = R[Math.floor(t() * R.length)];
    (y.push({ x: N, z: H, r: Q * 0.8 }),
      _.push([N, H, Q, W]),
      (f = { c: Ht(N, 0.05, H), r: Math.max(Q, W) }));
    for (let F = 0; F < 160; F++) {
      const E = t() * Math.PI * 2,
        Y = Math.sqrt(t()),
        et = Math.sqrt(1 - Y * Y) * W * (0.7 + 0.3 * t()),
        nt = Ht(N + Math.cos(E) * Y * Q, et + 0.05, H + Math.sin(E) * Y * Q),
        it = Ht(Math.cos(E) * Y, et / W + 0.3, Math.sin(E) * Y).normalize(),
        lt = t() < 0.42;
      c(
        nt,
        lt ? 0.2 + t() * 0.08 : 0.22 + t() * 0.1,
        lt ? 3 : 2,
        lt ? M(B, 0.08) : M("#ffffff", 0.15),
        0.35,
        lt ? 0.9 : 1.1,
        it.lerp(Ht(t() - 0.5, t() - 0.5, t() - 0.5), 0.5).normalize(),
      );
    }
  }
  f = null;
  const V = [
    [-10.8, -1.2],
    [-11.4, 0.6],
    [-9.2, -2.8],
    [-6.6, -4.4],
    [-2.2, -4.9],
    [-0.6, 3.9],
    [2.4, 3.6],
    [-7.8, 3.2],
    [-11.8, -6.2],
    [-12.2, 7.2],
  ];
  for (const [N, H] of V) {
    const Q = 7 + Math.floor(t() * 5);
    for (let W = 0; W < Q; W++) {
      const B = (W / Q) * Math.PI * 2 + t() * 0.4,
        F = 0.55 + t() * 0.3,
        E = Ht(
          N + Math.cos(B) * F * 0.35,
          0.28 + t() * 0.1,
          H + Math.sin(B) * F * 0.35,
        ),
        Y = Ht(Math.cos(B), 0.9 + t() * 0.4, Math.sin(B)).normalize(),
        et = Ht(-Math.sin(B), 0.35, Math.cos(B)).normalize();
      (z.setFromRotationMatrix(
        new wt().makeBasis(et.clone().cross(Y).normalize(), Y, et),
      ),
        v.compose(E, z, n.set(F, F, F)),
        g.push({
          m: v.clone(),
          cell: 6,
          flex: 0.8,
          ph: t() * 6.28,
          back: 1.2,
          c: M("#ffffff", 0.12),
        }));
    }
  }
  const L = [
    [-8.9, -1.9],
    [-8.4, 1.4],
    [-6.4, 2.4],
    [-1.2, 3.3],
    [1.9, 3.1],
    [3, 1.2],
    [-5.6, -3.4],
    [-9.3, 0.2],
  ];
  for (const [N, H] of L) {
    for (let Q = 0; Q < 9; Q++) {
      const W = Ht(
          N + (t() - 0.5) * 0.5,
          0.3 + t() * 0.12,
          H + (t() - 0.5) * 0.5,
        ),
        B = t() * 6.28;
      (z.setFromEuler(x.set((t() - 0.5) * 0.3, B, (t() - 0.5) * 0.3)),
        v.compose(W, z, n.set(0.16, 0.75, 0.16)),
        g.push({
          m: v.clone(),
          cell: 4,
          flex: 0.6,
          ph: t() * 6.28,
          back: 1.2,
          c: M("#e8f0c8", 0.1),
        }));
    }
    for (let Q = 0; Q < 3; Q++)
      c(
        Ht(N + (t() - 0.5) * 0.4, 0.62 + t() * 0.15, H + (t() - 0.5) * 0.4),
        0.16,
        3,
        M("#6a3fb8", 0.1),
        0.6,
        0.8,
      );
  }
  const K = [];
  {
    const N = new Ms(0.5, 28, 0.18, Math.PI * 2 - 0.36).rotateX(-Math.PI / 2),
      H = document.createElement("canvas");
    H.width = H.height = 256;
    const Q = H.getContext("2d"),
      W = Q.createRadialGradient(128, 128, 10, 128, 128, 128);
    (W.addColorStop(0, "#5f8a2e"),
      W.addColorStop(0.85, "#3f6a22"),
      W.addColorStop(1, "#6b3a28"),
      (Q.fillStyle = W),
      Q.fillRect(0, 0, 256, 256),
      (Q.strokeStyle = "rgba(170,210,110,0.35)"),
      (Q.lineWidth = 2));
    for (let nt = 0; nt < 18; nt++) {
      const it = (nt / 18) * 6.28;
      (Q.beginPath(),
        Q.moveTo(128, 128),
        Q.lineTo(128 + Math.cos(it) * 124, 128 + Math.sin(it) * 124),
        Q.stroke());
    }
    const B = new io(H);
    B.colorSpace = lo;
    const F = new n0({ map: B, roughness: 0.35, side: p0 }),
      E = 26,
      Y = new l0(N, F, E);
    ((Y.name = "lilypads"), (Y.receiveShadow = !0));
    let et = 0;
    for (let nt = 0; nt < 400 && et < E; nt++) {
      const it = -8.8 + t() * 6,
        lt = -3.2 + t() * 5.2;
      if (
        J0(it, lt) > -0.35 ||
        K.some((yt) => Math.hypot(yt.x - it, yt.z - lt) < 0.55)
      )
        continue;
      const ht = 0.28 + t() * 0.3;
      (K.push({ x: it, z: lt, s: ht, rot: t() * 6.28, ph: t() * 6.28 }), et++);
    }
    ((Y.count = K.length), u.add(Y), (K.mesh = Y));
  }
  for (let N = 0; N < 3; N++) {
    const H = K[(N * 5) % K.length];
    if (!H) break;
    for (let Q = 0; Q < 9; Q++) {
      const W = (Q / 9) * Math.PI * 2,
        B = 0.55 + (Q % 2) * 0.25,
        F = Ht(Math.cos(W) * B, 1, Math.sin(W) * B).normalize(),
        E = Ht(
          H.x + Math.cos(W) * 0.05,
          v0 + 0.07,
          H.z + Math.sin(W) * 0.05,
        ).addScaledVector(F, 0.05),
        Y = Ht(-Math.sin(W), 0, Math.cos(W));
      (z.setFromRotationMatrix(
        new wt().makeBasis(Y, F, Y.clone().cross(F).normalize()),
      ),
        v.compose(E, z, n.set(0.14, 0.14, 0.14)),
        g.push({
          m: v.clone(),
          cell: 7,
          flex: 0.1,
          ph: 0,
          back: 1.4,
          c: M("#ffffff", 0.05),
        }));
    }
  }
  const j = [];
  (() => {
    const N = [],
      H = [],
      Q = [];
    for (let F = 0; F <= 4; F++) {
      const E = F / 4,
        Y = 0.012 * (1 - E * 0.9);
      (N.push(-Y, E, 0, Y, E, 0), Q.push(0, E, 1, E));
    }
    for (let F = 0; F < 4; F++) {
      const E = F * 2;
      H.push(E, E + 1, E + 2, E + 1, E + 3, E + 2);
    }
    const B = new Rt();
    return (
      B.setAttribute("position", new xt(N, 3)),
      B.setAttribute("uv", new xt(Q, 2)),
      B.setIndex(H),
      B.computeVertexNormals(),
      B
    );
  })();
  for (let N = 0; N < 420; N++) {
    let H,
      Q,
      W = !1;
    for (let E = 0; E < 20 && !W; E++) {
      ((H = -12.6 + t() * 25.2), (Q = -10.6 + t() * 21.2));
      const Y = J0(H, Q),
        et = Bo(H, Q);
      W =
        Y > 0.25 &&
        et > 0.5 &&
        (Y < 1.4 ||
          (et > 0.55 && et < 1.1) ||
          Math.abs(H) > 11.6 ||
          Math.abs(Q) > 9.6 ||
          t() < 0.15);
    }
    if (!W) continue;
    const B = 8 + Math.floor(t() * 10),
      F = Me(H, Q);
    for (let E = 0; E < B; E++)
      j.push([
        H + (t() - 0.5) * 0.22,
        F,
        Q + (t() - 0.5) * 0.22,
        t() * 6.28,
        0.18 + t() * 0.24,
        (t() - 0.5) * 0.7,
      ]);
  }
  for (let N = 0; N < j.length; N++) (t(), t());
  const O = new m0(1, 1).translate(0, 0.35, 0),
    J = new Float32Array(g.length * 4),
    tt = new Float32Array(g.length * 4),
    st = new l0(O, a.m, g.length);
  ((st.name = "leaves"),
    (st.customDepthMaterial = a.d),
    (st.castShadow = !0),
    (st.receiveShadow = !0));
  for (let N = 0; N < g.length; N++) {
    const H = g[N];
    (st.setMatrixAt(N, H.m),
      st.setColorAt(N, H.c),
      J.set([H.cell, H.flex, H.ph, H.back], N * 4),
      tt.set(H.sh || [0, 1, 0, 1], N * 4));
  }
  (O.setAttribute("aCard", new M0(J, 4)),
    O.setAttribute("aShade", new M0(tt, 4)));
  const G = new l0(
    new t0(1, 14, 10),
    new n0({ color: 1714704, roughness: 0.9 }),
    _.length,
  );
  (_.forEach(([N, H, Q, W], B) => {
    (v.compose(
      l.set(N, 0.02, H),
      z.identity(),
      n.set(Q * 0.72, W * 0.8, Q * 0.72),
    ),
      G.setMatrixAt(B, v));
  }),
    (G.castShadow = !0),
    (G.receiveShadow = !0),
    (G.name = "shrub_cores"),
    u.add(G),
    u.add(st));
  const q = 70,
    U = new m0(0.035, 0.028),
    Z = new n0({
      color: 16769514,
      roughness: 0.6,
      side: p0,
      emissive: 3809832,
    }),
    ot = new l0(U, Z, q);
  ((ot.name = "petals"), (ot.frustumCulled = !1));
  const $ = [],
    C = (N, H) => {
      const Q = t() * 6.28,
        W = Math.sqrt(t()) * 2.6;
      ((N.x = Ie.cherry[0] + 0.5 + Math.cos(Q) * W),
        (N.z = Ie.cherry[1] + 1.8 + Math.sin(Q) * W),
        (N.y = H ? 0.3 + t() * 4 : 3.2 + t() * 1.4),
        (N.vy = -(0.25 + t() * 0.2)),
        (N.ph = t() * 6.28),
        (N.spin = 1 + t() * 3),
        (N.state = 0),
        (N.t = 0),
        (N.rx = t() * 6),
        (N.rz = t() * 6));
    };
  for (let N = 0; N < q; N++) {
    const H = {};
    (C(H, !0), $.push(H));
  }
  u.add(ot);
  const T = (N) => {
    const H = N === "ruins";
    ((st.visible = !H),
      (G.visible = !H),
      (ot.visible = !H),
      (K.mesh.visible = !H),
      (b.visible = !H),
      (P.visible = H));
    for (const Q of d) Q.material = H ? i : p;
    e.uWind.value = H ? 0 : 1;
  };
  function D(N, H) {
    if (((e.uWindT.value = H), !ot.visible)) return;
    const Q = 0.25 + 0.2 * Math.sin(H * 0.35);
    for (let W = 0; W < q; W++) {
      const B = $[W];
      if (B.state === 0) {
        ((B.x += (Q + Math.sin(H * 1.3 + B.ph) * 0.25) * N),
          (B.z += Math.cos(H * 1.1 + B.ph) * 0.2 * N),
          (B.y += B.vy * N * (0.7 + 0.5 * Math.sin(H * 3 + B.ph))),
          (B.rx += B.spin * N),
          (B.rz += B.spin * 0.7 * N));
        const F = J0(B.x, B.z) < 0 ? v0 + 0.004 : Me(B.x, B.z) + 0.01;
        B.y <= F &&
          ((B.y = F),
          (B.state = J0(B.x, B.z) < 0 ? 1 : 2),
          (B.t = 0),
          (B.rx = -Math.PI / 2),
          (B.rz = 0),
          B.state === 1 && o.ripple(B.x, B.z, 0.35));
      } else
        ((B.t += N),
          B.state === 1 &&
            ((B.x += 0.03 * N), (B.z += Math.sin(H * 0.2 + B.ph) * 0.02 * N)),
          B.t > (B.state === 1 ? 25 : 12) && C(B, !1));
      (z.setFromEuler(x.set(B.rx, B.ph, B.rz)),
        v.compose(
          l.set(B.x, B.y, B.z),
          z,
          n.setScalar(
            B.state && B.t > (B.state === 1 ? 23 : 10)
              ? Math.max(0.01, 1 - (B.t - (B.state === 1 ? 23 : 10)) / 2)
              : 1,
          ),
        ),
        ot.setMatrixAt(W, v));
    }
    ot.instanceMatrix.needsUpdate = !0;
    for (let W = 0; W < K.length; W++) {
      const B = K[W];
      (z.setFromEuler(
        x.set(
          Math.sin(H * 0.7 + B.ph) * 0.03,
          B.rot + Math.sin(H * 0.1 + B.ph) * 0.1,
          Math.cos(H * 0.6 + B.ph) * 0.03,
        ),
      ),
        v.compose(l.set(B.x, v0 + 0.006, B.z), z, n.set(B.s, 1, B.s)),
        K.mesh.setMatrixAt(W, v));
    }
    K.mesh.instanceMatrix.needsUpdate = !0;
  }
  return {
    group: u,
    circles: y,
    trees: w,
    update: D,
    setWorld: T,
    U: e,
    leaves: st,
    bamboo: b,
  };
}
