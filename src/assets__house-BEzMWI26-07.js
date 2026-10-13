// assets__house-BEzMWI26 07 — math
// Lines 1939-2247 of readable/assets__house-BEzMWI26.pretty.js (statement-aligned).
function It(s, o, { slits: e, shutK: n, doorK: t, near: u, dead: d }) {
  const a = new l0();
  a.name = "house_moonlight";
  const h = new j(...lt()),
    c = h.clone().negate(),
    g = ((b) => {
      const N = de(b, 0, 0);
      return N[0].clone().add(N[2]).multiplyScalar(0.5);
    })("W2"),
    w = 14,
    M = g.clone().addScaledVector(h, w),
    p = new ot(10139391, 0, 0, 0.3, 0.02, 0);
  ((p.name = "house_moon"),
    p.position.copy(M),
    p.target.position.copy(g),
    o.add(p, p.target),
    p.updateMatrixWorld(!0),
    p.target.updateMatrixWorld(!0));
  const C = g.clone().sub(M).normalize(),
    A = Ye + 0.035;
  let L = 0,
    U = 1e9,
    R = 0;
  const I = He.flatMap((b) => [de(b, -A, 0.03), de(b, A, 0.03)]);
  for (const b of I)
    for (const N of b) {
      const q = N.clone().sub(M),
        O = q.length(),
        t0 = q.dot(C);
      ((L = Math.max(L, Math.acos(Math.min(1, t0 / O)))),
        (U = Math.min(U, t0)),
        (R = Math.max(R, t0)));
    }
  ((p.angle = L + 0.01),
    (p.castShadow = !0),
    p.shadow.mapSize.set(1536, 1536),
    (p.shadow.camera.near = U - 3.2),
    (p.shadow.camera.far = R + 8),
    (p.shadow.bias = -4e-4),
    (p.shadow.normalBias = 0.02),
    (p.shadow.radius = 9),
    (p.shadow.autoUpdate = !1),
    (p.userData.noShadowBudget = !0),
    (p.shadow.needsUpdate = !0),
    (p.userData.actorGain = 0.35));
  const W = e.filter((b) => He.includes(b.win)).slice(0, be),
    o0 = { W1: 0, W2: 1, W3: 2 },
    D = [],
    Y = [],
    e0 = [],
    T = [],
    S = [],
    H = [],
    K = [],
    x = new j(),
    v = new j();
  W.forEach((b, N) => {
    const q = new j(...b.a),
      O = new j(...b.b),
      t0 = Ke(q, c),
      Q = Ke(O, c),
      w0 = v.copy(O).addScaledVector(c, Q).clone(),
      b0 = x.copy(q).addScaledVector(c, t0).clone(),
      u0 = O.clone().sub(q).cross(c).normalize(),
      _0 = D.length / 3;
    for (const [F0, te, oe] of [
      [q, 0, 0],
      [O, 0, 1],
      [w0, 1, 1],
      [b0, 1, 0],
    ])
      (D.push(F0.x, F0.y, F0.z),
        Y.push(te, oe),
        e0.push(u0.x, u0.y, u0.z),
        T.push(N),
        S.push(o0[b.win]),
        H.push(Math.min(1.5, b.w / 0.014) * (b.kind === "h" ? 0.8 : 1)));
    (K.push(_0, _0 + 1, _0 + 2, _0, _0 + 2, _0 + 3),
      (b.beam = { si: N, ta: t0, tb: Q }));
  });
  const z = new ee();
  (z.setAttribute("position", new g0(D, 3)),
    z.setAttribute("uv", new g0(Y, 2)),
    z.setAttribute("normal", new g0(e0, 3)),
    z.setAttribute("aSlit", new g0(T, 1)),
    z.setAttribute("aWin", new g0(S, 1)),
    z.setAttribute("aBright", new g0(H, 1)),
    z.setIndex(K),
    z.computeBoundingSphere());
  const r = Array.from({ length: be }, () => new j(0, 0, 0)),
    B = new J0({
      vertexShader: Bt,
      fragmentShader: Ft,
      uniforms: {
        uTex: { value: Wt() },
        uCol: { value: new M0(0.3, 0.4, 0.68) },
        uBlk: { value: r },
        uWin: { value: new j() },
      },
      transparent: !0,
      depthWrite: !1,
      blending: Q0,
      side: ge,
      toneMapped: !1,
      fog: !1,
    }),
    y = new y0(z, B);
  ((y.name = "house:moonbeams"),
    (y.renderOrder = 7),
    (y.frustumCulled = !1),
    a.add(y));
  const a0 = [],
    Z = [],
    $ = [],
    J = (b, N, q, O, t0) => {
      const Q = a0.length / 3;
      for (const w0 of [N, q, O, t0]) (a0.push(...w0), Z.push(b));
      $.push(Q, Q + 1, Q + 2, Q, Q + 2, Q + 3);
    },
    i = 3,
    f = -0.6,
    _ = 3.8;
  (J(
    0,
    [1.2, f, X.z0 - i],
    [8.8, f, X.z0 - i],
    [8.8, _, X.z0 - i],
    [1.2, _, X.z0 - i],
  ),
    J(
      1,
      [X.x1 + i, f, 200.2],
      [X.x1 + i, f, 205.3],
      [X.x1 + i, _, 205.3],
      [X.x1 + i, _, 200.2],
    ),
    J(
      2,
      [8.8, f, X.z1 + i],
      [1.2, f, X.z1 + i],
      [1.2, _, X.z1 + i],
      [8.8, _, X.z1 + i],
    ));
  const F = new ee();
  (F.setAttribute("position", new g0(a0, 3)),
    F.setAttribute("aWin", new g0(Z, 1)),
    F.setIndex($),
    F.computeVertexNormals(),
    F.computeBoundingSphere());
  const E = new J0({
      vertexShader: At,
      fragmentShader: Ct,
      uniforms: {
        uK: { value: new j() },
        uCol: { value: new M0(0.5, 0.66, 1) },
        uGain: { value: new j(0.72, 1.3, 0.32) },
      },
      transparent: !0,
      depthWrite: !1,
      toneMapped: !1,
      fog: !1,
    }),
    V = new y0(F, E);
  ((V.name = "house:nightCards"),
    (V.renderOrder = 1),
    (V.visible = !1),
    a.add(V));
  const l = { moon: 1, frame: 0 },
    f0 = 28,
    i0 = s.game?.camera,
    H0 = (b) =>
      b.x > n0.x0 - 0.05 &&
      b.x < n0.x1 + 0.05 &&
      b.z > n0.z0 - 0.05 &&
      b.z < n0.z1 + 0.05 &&
      b.y < 3.2,
    c0 = (b) => N0(0.86, 0.985, b),
    B0 = (b) => 1 - N0(0.004, 0.03, b),
    Y0 = (b, N, q) => {
      let O = 1,
        t0 = 0,
        Q = 0;
      const w0 = b.a[0],
        b0 = b.a[1],
        u0 = b.a[2],
        _0 = b.b[0],
        F0 = b.b[1],
        te = b.b[2],
        oe = h.x * h.x + h.z * h.z;
      for (const V0 of N) {
        const ae = V0.pos.x,
          se = V0.pos.z;
        if ((ae - w0) ** 2 + (se - u0) ** 2 > 36) continue;
        const ke = V0.dead ? 0.35 : (V0.kit?.height || 1.8) * 0.96,
          K0 = 0.23;
        for (let ne = 0; ne <= 6; ne++) {
          const G0 = ne / 6,
            ze = w0 + (_0 - w0) * G0,
            je = b0 + (F0 - b0) * G0,
            _e = u0 + (te - u0) * G0,
            P0 = ((ae - ze) * h.x + (se - _e) * h.z) / oe;
          if (P0 < 0.15) continue;
          const re = Math.hypot(ae - ze - P0 * h.x, se - _e - P0 * h.z);
          if (re > K0) continue;
          const Se = je + P0 * h.y;
          if (b.kind === "v") {
            const We = (0.1 - P0 * h.y - b0) / (F0 - b0),
              Be = (ke - P0 * h.y - b0) / (F0 - b0);
            Be > 0 &&
              We < 1 &&
              ((O = Math.min(O, Math.max(0, We))),
              (t0 = Math.max(t0, Math.min(1, Be))),
              (Q = Math.max(Q, N0(K0, K0 * 0.55, re))));
            break;
          }
          Se > 0.1 &&
            Se < ke &&
            ((O = Math.min(O, G0 - 1 / 12)),
            (t0 = Math.max(t0, G0 + 1 / 12)),
            (Q = Math.max(Q, N0(K0, K0 * 0.55, re))));
        }
      }
      return (Q > 0 ? q.set(O, t0, Q) : q.set(0, 0, 0), Q > 0);
    },
    s0 = (b) =>
      b.y > 3.2
        ? 0
        : N0(
            -0.25,
            0.35,
            Math.min(b.x - n0.x0, n0.x1 - b.x, b.z - n0.z0, n0.z1 - b.z),
          ),
    Me = (b, N) => {
      const q = i0 ? s0(i0.position) : 1;
      p.intensity = f0 * l.moon * q;
      const O = [c0(n("W1")), c0(n("W2")), c0(n("W3"))];
      (B.uniforms.uWin.value
        .set(O[0], O[1], O[2])
        .multiplyScalar(0.05 * l.moon * q * (0.93 + 0.07 * Math.sin(N * 0.37))),
        (y.visible = q > 0 && l.moon > 0 && O[0] + O[1] + O[2] > 0.001));
      const t0 = d();
      for (let u0 = 0; u0 < W.length; u0++)
        t0.length ? Y0(W[u0], t0, r[u0]) : r[u0].set(0, 0, 0);
      k0.uMB.value.w = l.moon * q * (0.7 + 0.9 * (1 - n("W2")));
      const Q = O[0] * B0(t.front()),
        w0 = O[1],
        b0 = O[2] * B0(t.back());
      (E.uniforms.uK.value.set(Q, w0, b0).multiplyScalar(l.moon > 0 ? 1 : 0),
        (V.visible = !!i0 && H0(i0.position) && Q + w0 + b0 > 0.002),
        l.frame++,
        u() &&
          l.moon > 0 &&
          q > 0 &&
          l.frame & 1 &&
          (p.shadow.needsUpdate = !0));
    },
    k = {
      light: p,
      set(b) {
        l.moon = b;
      },
      get level() {
        return l.moon;
      },
      beams: y,
      cards: V,
      dir: h.toArray(),
    };
  return { group: a, anim: Me, moon: k, light: p, beamMat: B, cardMat: E };
}
const h0 = 420,
  Lt = `
attribute float aSize;
attribute float aA;
uniform float uScale;
uniform vec4 uLamp;
uniform vec4 uGlow[2];
uniform vec3 uTorchPos;
uniform vec3 uTorchDir;
uniform vec3 uTorchCol;
uniform vec2 uTorchCone;
varying vec3 vCol;
varying float vA;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(aSize * uScale / max(-mv.z, 0.05), 1.0, 64.0);
  vec3 L = vec3(0.045, 0.05, 0.06);
  vec3 dl = uLamp.xyz - wp.xyz;
  L += vec3(1.0, 0.6, 0.28) * uLamp.w * 1.6 / (0.25 + dot(dl, dl));
  for (int i = 0; i < 2; i++) { vec3 dg = wp.xyz - uGlow[i].xyz; dg.y *= 0.45; L += vec3(0.35, 0.46, 0.75) * uGlow[i].w / (0.06 + 6.0 * dot(dg, dg)); }
  vec3 dt = wp.xyz - uTorchPos;
  float dd = length(dt);
  float c = dot(dt / max(dd, 0.001), uTorchDir);
  L += uTorchCol * smoothstep(uTorchCone.x, uTorchCone.y, c) / (0.5 + dd * dd);
  vCol = L * vec3(0.92, 0.85, 0.74);
  vA = aA;
}`,
  Tt = `
varying vec3 vCol;
varying float vA;
void main() {
  vec2 q = gl_PointCoord - 0.5;
  float r = dot(q, q) * 4.0;
  if (r > 1.0) discard;
  float a = vA * (1.0 - r) * (1.0 - r);
  gl_FragColor = vec4(vCol * a, 1.0);
}`;
