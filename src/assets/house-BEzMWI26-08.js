// assets/house-BEzMWI26 08 — float32array
// Lines 2248-2453 of readable/assets/house-BEzMWI26.pretty.js (statement-aligned).
function Pt(s, { lampAt: o, glowAt: e = null }) {
  const n = new Float32Array(h0 * 3),
    t = new Float32Array(h0 * 3),
    u = new Float32Array(h0),
    d = new Float32Array(h0),
    a = new Float32Array(h0),
    h = new Float32Array(h0),
    c = new Float32Array(h0),
    m = new Float32Array(h0),
    g = new Float32Array(h0),
    w = new Float32Array(h0),
    M = new Float32Array(h0),
    p = new ee();
  (p.setAttribute("position", new Z0(n, 3).setUsage(ie)),
    p.setAttribute("aSize", new Z0(w, 1).setUsage(ie)),
    p.setAttribute("aA", new Z0(M, 1).setUsage(ie)),
    p.setDrawRange(0, 0));
  const C = new J0({
      vertexShader: Lt,
      fragmentShader: Tt,
      transparent: !0,
      depthWrite: !1,
      blending: Q0,
      toneMapped: !1,
      fog: !1,
      uniforms: {
        uScale: { value: 800 },
        uLamp: { value: new E0() },
        uGlow: { value: [new E0(), new E0()] },
        uTorchPos: { value: new j() },
        uTorchDir: { value: new j(0, 0, -1) },
        uTorchCol: { value: new M0(0, 0, 0) },
        uTorchCone: { value: new Ge(0.9, 0.95) },
      },
    }),
    A = new at(p, C);
  ((A.name = "house:dust"),
    (A.frustumCulled = !1),
    (A.renderOrder = 8),
    (A.visible = !1));
  let L = 0,
    U = 0,
    R = 90210;
  const I = () => ((R = (R * 16807) % 2147483647), R / 2147483647),
    W = (T, S, H, K, x, v, z) => {
      const r = L < h0 ? L++ : (U = (U + 1) % h0);
      ((n[r * 3] = T),
        (n[r * 3 + 1] = S),
        (n[r * 3 + 2] = H),
        (t[r * 3] = K),
        (t[r * 3 + 1] = x),
        (t[r * 3 + 2] = v),
        (u[r] = 0),
        (d[r] = z.life),
        (a[r] = z.s0),
        (h[r] = z.s1 ?? z.s0),
        (c[r] = z.a),
        (m[r] = z.g ?? 0.4),
        (g[r] = z.drag ?? 1.6),
        (A.visible = !0));
    },
    o0 = {
      points: A,
      burst(T, S, H, K = 1, { puff: x = !1, sides: v = null } = {}) {
        const z = Math.round(40 + 110 * K);
        for (let r = 0; r < z; r++) {
          const B = I(),
            y = T[0] + (S[0] - T[0]) * B,
            a0 = T[1] + (S[1] - T[1]) * B - I() * 0.02,
            Z = T[2] + (S[2] - T[2]) * B,
            $ = 0.03 + 0.12 * I() * K,
            J = 0.02 + 0.06 * I();
          W(
            y + H[0] * 0.02,
            a0,
            Z + H[1] * 0.02,
            (I() - 0.5) * $ + H[0] * J,
            -I() * 0.12 * K,
            (I() - 0.5) * $ + H[1] * J,
            {
              life: 2.2 + 2.6 * I(),
              s0: 0.006 + 0.008 * I(),
              a: 0.6 + 0.4 * I(),
              g: 0.22 + 0.3 * I(),
              drag: 1.4 + I(),
            },
          );
        }
        for (let r = 0; r < Math.round(4 + 8 * K); r++) {
          const B = I();
          W(
            T[0] + (S[0] - T[0]) * B,
            T[1] + (S[1] - T[1]) * B,
            T[2] + (S[2] - T[2]) * B,
            H[0] * 0.05,
            -0.2,
            H[1] * 0.05,
            {
              life: 1.2 + I(),
              s0: 0.009 + 0.006 * I(),
              a: 0.8,
              g: 3.5,
              drag: 0.6,
            },
          );
        }
        if (x)
          for (let r = 0; r < Math.round(10 + 12 * K); r++) {
            const B = v && I() < 0.6 ? v[r & 1] : [T, S],
              y = I(),
              a0 = B[0][0] + (B[1][0] - B[0][0]) * y,
              Z = B[0][1] + (B[1][1] - B[0][1]) * y,
              $ = B[0][2] + (B[1][2] - B[0][2]) * y,
              J = 0.25 + 0.3 * I();
            W(
              a0,
              Z,
              $,
              H[0] * J + (I() - 0.5) * 0.2,
              (I() - 0.4) * 0.15,
              H[1] * J + (I() - 0.5) * 0.2,
              {
                life: 1 + 0.9 * I(),
                s0: 0.05 + 0.04 * I(),
                s1: 0.22 + 0.12 * I(),
                a: 0.09 + 0.06 * I(),
                g: 0,
                drag: 2.6,
              },
            );
          }
      },
      clear() {
        ((L = 0), p.setDrawRange(0, 0), (A.visible = !1));
      },
    },
    D = new j(),
    Y = new j();
  return {
    api: o0,
    anim: (T) => {
      if (!A.visible) return;
      let S = 0;
      for (let v = 0; v < L; v++) {
        const z = (u[v] += T);
        if (z >= d[v]) continue;
        const r = v * 3,
          B = Math.exp(-g[v] * T);
        ((t[r] *= B),
          (t[r + 1] = t[r + 1] * B - m[v] * T),
          (t[r + 2] *= B),
          (n[r] += t[r] * T),
          (n[r + 1] += t[r + 1] * T),
          (n[r + 2] += t[r + 2] * T),
          n[r + 1] < I0 + 0.003 &&
            ((n[r + 1] = I0 + 0.003), (t[r] = t[r + 1] = t[r + 2] = 0)));
        const y = z / d[v];
        (S !== v &&
          ((n[S * 3] = n[r]),
          (n[S * 3 + 1] = n[r + 1]),
          (n[S * 3 + 2] = n[r + 2]),
          (t[S * 3] = t[r]),
          (t[S * 3 + 1] = t[r + 1]),
          (t[S * 3 + 2] = t[r + 2]),
          (u[S] = u[v]),
          (d[S] = d[v]),
          (a[S] = a[v]),
          (h[S] = h[v]),
          (c[S] = c[v]),
          (m[S] = m[v]),
          (g[S] = g[v])),
          (w[S] = a[S] + (h[S] - a[S]) * y),
          (M[S] = c[S] * Math.min(1, z / 0.08) * (1 - y * y)),
          S++);
      }
      if (((L = S), (U = 0), p.setDrawRange(0, L), !L)) {
        A.visible = !1;
        return;
      }
      ((p.attributes.position.needsUpdate = !0),
        (p.attributes.aSize.needsUpdate = !0),
        (p.attributes.aA.needsUpdate = !0));
      const H = s.game,
        K = C.uniforms;
      (o(K.uLamp.value), e && e(K.uGlow.value));
      const x = H?.weapons?.torch;
      (x && x.visible && x.intensity > 0
        ? (x.getWorldPosition(D),
          x.target.getWorldPosition(Y),
          K.uTorchPos.value.copy(D),
          K.uTorchDir.value.copy(Y).sub(D).normalize(),
          K.uTorchCol.value.copy(x.color).multiplyScalar(x.intensity * 0.22),
          K.uTorchCone.value.set(
            Math.cos(x.angle),
            Math.cos(x.angle * (1 - x.penumbra)),
          ))
        : K.uTorchCol.value.setRGB(0, 0, 0),
        H?.post?.size &&
          H.camera &&
          (K.uScale.value =
            H.post.size.y / (2 * Math.tan((H.camera.fov * Math.PI) / 360))));
    },
    points: A,
  };
}
const fe = [0.78, 0.76, 0.72];
