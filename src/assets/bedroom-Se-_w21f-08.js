// assets/bedroom-Se-_w21f 08 — add
// Lines 1881-2262 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
function Ge(N, t) {
  const w = new u0();
  w.name = "window_dressing";
  const e = new M0("window"),
    o = nt(23),
    M = N.rng(4242),
    s = 1.06,
    h = 4.2;
  e.add(v0([s, C0, K0], [h, C0, K0], 0.014, 16), t.brass);
  for (const [d, K] of [
    [s, -1],
    [h, 1],
  ]) {
    const f = E(
      [
        [0, 0],
        [0.018, 0],
        [0.02, 0.01],
        [0.014, 0.02],
        [0.016, 0.03],
        [0.03, 0.05],
        [0.032, 0.065],
        [0.026, 0.08],
        [0.012, 0.095],
        [0.004, 0.11],
        [0, 0.112],
      ],
      0,
      0,
      0,
      { segs: 20, rot: [0, 0, (-K * Math.PI) / 2] },
    );
    (f.translate(d, C0, K0), e.add(f, t.brass));
  }
  for (const d of [1.14, 2.6, 4.1])
    (e.add(
      v0([d, C0 - 0.02, 0], [d, C0 - 0.004, K0 - 0.012], 0.007, 8),
      t.brass,
    ),
      e.add(
        E(
          [
            [0, 0],
            [0.028, 0],
            [0.028, 0.006],
            [0.02, 0.012],
            [0, 0.013],
          ],
          d,
          C0 - 0.025,
          0,
          { segs: 16, rot: [Math.PI / 2, 0, 0] },
        ),
        t.brass,
      ),
      e.add(
        h0(
          [
            [d, C0 - 0.004, K0 - 0.016],
            [d, C0 - 0.022, K0],
            [d, C0 - 0.004, K0 + 0.016],
          ],
          0.004,
          8,
          6,
        ),
        t.brass,
      ));
  const i = t.velvet.clone();
  i.userData = { ...t.velvet.userData };
  const z = {
      uTime: { value: 0 },
      uGust: { value: 0 },
      uIdle: { value: 0.006 },
    },
    D = (d) => {
      ((d.uniforms.uTime = z.uTime),
        (d.uniforms.uGust = z.uGust),
        (d.uniforms.uIdle = z.uIdle),
        (d.vertexShader = d.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec2 sway;
uniform float uTime;
uniform float uGust;
uniform float uIdle;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
      float swV = sway.x * sway.x;
      float swA = uIdle + uGust;
      float swW = sin(uTime * 1.55 + sway.y * 5.0 + sway.x * 2.2) * 0.6 + sin(uTime * 2.65 + sway.y * 9.0 - sway.x * 3.1) * 0.4;
      transformed.z += swA * swV * (0.7 + swW) ;
      transformed.x += swA * swV * 0.45 * sin(uTime * 1.25 + sway.y * 4.0 + 1.3);`,
          )));
    },
    C = i.onBeforeCompile;
  ((i.onBeforeCompile = (d, K) => {
    (C && C(d, K), D(d));
  }),
    (i.customProgramCacheKey = () => "bedCurtain"));
  const V = new be({ depthPacking: Me });
  ((V.onBeforeCompile = D),
    (V.customProgramCacheKey = () => "bedCurtainDepth"));
  const A = new ye();
  ((A.onBeforeCompile = D), (A.customProgramCacheKey = () => "bedCurtainDist"));
  const x = (d, K, f, U, O) => {
      const l = C0 - 0.03,
        a = f * 10,
        r = 120,
        n = new Float32Array((a + 1) * (r + 1) * 3),
        Y = new Float32Array((a + 1) * (r + 1) * 2),
        P = new Float32Array((a + 1) * (r + 1) * 2),
        q = [];
      for (let s0 = 0; s0 <= f; s0++) q.push(0.75 + M() * 0.6);
      let Q = 0;
      for (let s0 = 0; s0 <= r; s0++) {
        const t0 = s0 / r;
        for (let p0 = 0; p0 <= a; p0++) {
          const y0 = p0 / a,
            F0 = y0 * f,
            B0 = Math.floor(F0),
            H0 = F0 - B0,
            o0 = q[Math.min(B0, f)],
            m0 = q[Math.min(B0 + 1, f)],
            b0 = o0 + (m0 - o0) * g0(0, 1, H0),
            x0 = 0.18 * o.n2(F0 * 0.7 + U, t0 * 2.2) * t0,
            P0 = (H0 + x0) * Math.PI * 2;
          let I0 = Math.sin(P0);
          I0 = Math.sign(I0) * Math.pow(Math.abs(I0), 0.75);
          const G0 = (0.012 + 0.05 * g0(0, 0.05, t0) * (0.55 + 0.45 * t0)) * b0,
            X0 = 1 + 0.12 * t0 * t0,
            j0 = (d + K) / 2;
          let E0 =
              j0 +
              (d + (K - d) * y0 - j0) * X0 +
              0.01 * o.n2(y0 * 7 + U, t0 * 3) * t0,
            _0 = C0 - 0.035 - t0 * l,
            rt =
              K0 +
              0.018 +
              0.045 * t0 * t0 +
              G0 * I0 +
              0.006 * o.n2(y0 * 20, t0 * 12 + U) * t0;
          if (E0 > 1.24 && E0 < 3.96) {
            const lt =
                Math.exp(-Math.pow((_0 - 0.63) / 0.1, 2)) +
                0.6 * g0(0.63, 0.2, _0) * (_0 < 0.63 ? 1 : 0),
              It = 0.152 + 0.012 * I0;
            rt < It && (rt += (It - rt) * Math.min(1, lt * 1.4));
          }
          if (_0 < 0.004) {
            const lt = 0.004 - _0;
            ((_0 = 0.004 + lt * 0.08),
              (rt += lt * 0.9),
              (E0 += (y0 - 0.5) * lt * 0.2));
          }
          const f0 = O < 0 ? 1 - y0 : y0;
          ((_0 += 0 * f0),
            (n[Q * 3] = E0),
            (n[Q * 3 + 1] = _0),
            (n[Q * 3 + 2] = rt),
            (Y[Q * 2] = y0 * (K - d) * 2.3),
            (Y[Q * 2 + 1] = -t0 * l),
            (P[Q * 2] = Pt((C0 - 0.035 - _0) / l, 0, 1)),
            (P[Q * 2 + 1] = y0 * 2 + U),
            Q++);
        }
      }
      const H = [];
      for (let s0 = 0; s0 < r; s0++)
        for (let t0 = 0; t0 < a; t0++) {
          const p0 = s0 * (a + 1) + t0,
            y0 = p0 + 1,
            F0 = p0 + a + 1,
            B0 = F0 + 1;
          H.push(p0, F0, y0, y0, F0, B0);
        }
      const e0 = new ot();
      (e0.setAttribute("position", new R0(n, 3)),
        e0.setAttribute("uv", new R0(Y, 2)),
        e0.setAttribute("sway", new R0(P, 2)),
        e0.setIndex(H),
        e0.computeVertexNormals());
      let n0 = 0;
      const i0 = e0.attributes.normal;
      for (let s0 = 0; s0 < i0.count; s0++) n0 += i0.getZ(s0);
      if (n0 < 0) {
        const s0 = e0.index.array;
        for (let t0 = 0; t0 < s0.length; t0 += 3) {
          const p0 = s0[t0 + 1];
          ((s0[t0 + 1] = s0[t0 + 2]), (s0[t0 + 2] = p0));
        }
        e0.computeVertexNormals();
      }
      const l0 = new r0(e0, i);
      ((l0.customDepthMaterial = V),
        (l0.customDistanceMaterial = A),
        (l0.castShadow = !0),
        (l0.receiveShadow = !0),
        (l0.name = "curtain_" + (O < 0 ? "west" : "east")),
        (l0.frustumCulled = !1),
        w.add(l0));
      for (let s0 = 0; s0 <= f; s0++) {
        const t0 = d + ((K - d) * s0) / f,
          p0 = new at(0.021, 0.0035, 6, 18);
        (st(p0, [t0, C0, K0], [0, Math.PI / 2, 0]),
          e.add(p0, t.brass),
          e.add(
            v0(
              [t0, C0 - 0.021, K0 + 0.003],
              [t0, C0 - 0.04, K0 + 0.014],
              0.0022,
              5,
            ),
            t.brass,
          ));
      }
      return l0;
    },
    k = x(1.14, 1.64, 8, 1.7, -1),
    _ = x(3.6, 4.14, 8, 5.3, 1),
    y = new M0("radiator"),
    L = 1.82,
    W = 22,
    X = 0.072,
    F = 0.12,
    G = 0.54,
    m = [0.06, 0.105, 0.15];
  for (let d = 0; d < W; d++) {
    const K = L + d * X + X / 2;
    for (const f of m) {
      const U = new Ut(0.0155, G - F - 0.031, 4, 10);
      (U.translate(K, (F + G) / 2, f), y.add(U, t.radiator));
    }
    for (const f of [F + 0.012, G - 0.012]) {
      const U = new Ut(0.014, m[2] - m[0], 3, 8);
      (U.rotateX(Math.PI / 2),
        U.translate(K, f, (m[0] + m[2]) / 2),
        y.add(U, t.radiator));
    }
  }
  const S = W * X;
  for (const d of [F + 0.02, G - 0.02])
    y.add(
      v0([L - 0.012, d, 0.105], [L + S + 0.012, d, 0.105], 0.024, 12),
      t.radiator,
    );
  for (const d of [L + 0.03, L + S - 0.03])
    y.add(R(d - 0.025, 0, 0.07, d + 0.025, F + 0.01, 0.14, 0.006), t.radiator);
  (y.add(
    v0([L - 0.012, G - 0.02, 0.105], [L - 0.07, G - 0.02, 0.105], 0.012, 10),
    t.brass,
  ),
    y.add(
      v0([L - 0.07, G - 0.02, 0.105], [L - 0.07, 0, 0.105], 0.013, 10),
      t.radiator,
    ));
  {
    const d = new at(0.028, 0.0045, 6, 20);
    (st(d, [L - 0.07, G + 0.03, 0.105], [Math.PI / 2, 0, 0]),
      y.add(d, t.brass),
      y.add(
        v0([L - 0.07, G - 0.02, 0.105], [L - 0.07, G + 0.03, 0.105], 0.006, 8),
        t.brass,
      ));
  }
  const u = new u0();
  ((u.name = "radiator"), y.flush(u), w.add(u));
  const c = 3.38,
    g = 0.065,
    b = 0.64,
    p = E(
      [
        [0, 0],
        [0.036, 0],
        [0.04, 0.006],
        [0.042, 0.1],
        [0.036, 0.118],
        [0.034, 0.126],
        [0.037, 0.13],
        [0.036, 0.134],
        [0.031, 0.132],
        [0.03, 0.12],
        [0.037, 0.1],
        [0.036, 0.008],
        [0, 0.007],
      ],
      c,
      b,
      g,
      { segs: 32 },
    ),
    v = new r0(p, t.glass);
  ((v.name = "jar"), (v.renderOrder = 3), w.add(v));
  const I = E(
      [
        [0, 0.008],
        [0.0355, 0.008],
        [0.0375, 0.045],
        [0, 0.045],
      ],
      c,
      b,
      g,
      { segs: 32 },
    ),
    Z = new r0(I, t.murk);
  ((Z.name = "jar:water"), (Z.renderOrder = 2), w.add(Z));
  for (let d = 0; d < 5; d++) {
    const K = M() * Math.PI * 2,
      f = 0.18 + M() * 0.16,
      U = 0.04 + M() * 0.08,
      O = 0.04 + M() * 0.12,
      l = Math.cos(K),
      a = Math.sin(K) * 0.5,
      r = [
        [c + l * 0.01, b + 0.02, g + a * 0.01],
        [c + l * 0.02, b + 0.14, g + a * 0.02],
        [c + l * U * 0.5, b + 0.12 + f, g + a * U * 0.5],
        [c + l * U, b + 0.12 + f - O * 0.5, g + a * U],
        [c + l * U * 1.15, b + 0.12 + f - O, g + a * U * 1.15],
      ];
    e.add(h0(r, 0.002, 24, 5), t.stem);
    const n = r[4],
      Y = new he(0.014 + M() * 0.008, 2),
      P = Y.attributes.position;
    for (let q = 0; q < P.count; q++) {
      const Q = P.getX(q),
        H = P.getY(q),
        e0 = P.getZ(q),
        n0 = 1 + 0.4 * o.n2(Q * 140 + d * 3, e0 * 140 + H * 70);
      P.setXYZ(q, Q * n0, H * n0 * 1.3, e0 * n0);
    }
    (Y.computeVertexNormals(),
      st(Y, [n[0], n[1] - 0.012, n[2]], [0.5, K, 0.3]),
      e.add(Y, t.petal));
  }
  for (let d = 0; d < 6; d++) {
    const K = new Zt(0.008 + M() * 0.006, 7),
      f = K.attributes.position;
    for (let U = 0; U < f.count; U++)
      f.setZ(U, 0.003 * (f.getX(U) ** 2 + f.getY(U) ** 2) * 1400);
    (K.computeVertexNormals(),
      K.rotateX(-Math.PI / 2),
      K.rotateY(M() * 3),
      K.translate(c - 0.12 + M() * 0.26, b + 0.0012, 0.02 + M() * 0.1),
      e.add(K, t.petal, { cast: !1 }));
  }
  (e.flush(w), N.scene.add(w));
  const j = { gust: 0, attack: 0 };
  return {
    group: w,
    anim: (d, K) => {
      if (((z.uTime.value = K), j.attack > 0)) {
        const f = Math.min(j.attack, d * 4);
        ((j.gust += f), (j.attack -= f));
      }
      ((j.gust *= Math.exp(-d / 1.6)),
        (z.uGust.value = 0.1 * Math.min(j.gust, 2.5)));
    },
    curtains: {
      west: k,
      east: _,
      gust(d = 1) {
        j.attack += d;
      },
      set idle(d) {
        z.uIdle.value = d;
      },
      get idle() {
        return z.uIdle.value;
      },
    },
    radiator: u,
    colliders: [
      { x0: L - 0.1, x1: L + S + 0.02, z0: 0, z1: 0.2, y0: 0, y1: 0.6 },
    ],
  };
}
