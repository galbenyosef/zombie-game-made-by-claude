// assets/index-BcIwWgby 04 — math
// Lines 748-1004 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Fn(s) {
  const { game: o, renderer: t, scene: u } = s,
    e = fn,
    r = ko.merge([
      So.fog,
      {
        tRefr: { value: null },
        tRefrD: { value: null },
        tRefl: { value: null },
        tNorm: { value: Cn() },
        uScreen: { value: new re(1, 1) },
        uTime: { value: 0 },
        uNear: { value: 0.05 },
        uFar: { value: 1500 },
        uReflK: { value: 1 },
        uGlint: { value: 1 },
        uDebug: { value: 0 },
        uWave: { value: 1 },
        uFilm: { value: 0 },
        uAsh: { value: 0 },
        uRefrK: { value: 0.3 },
        uProjK: { value: new re(1, 1) },
        uSunDir: { value: new dt(-0.83, 0.27, 0.49).normalize() },
        uSunCol: { value: new Xt(1, 0.8, 0.55) },
        uDeep: { value: new Xt(0.012, 0.034, 0.029) },
        uAbsorb: { value: new dt(1.5, 0.72, 0.92) },
        uRip: { value: Array.from({ length: 16 }, () => new H0(0, 0, -99, 0)) },
        uReflMat: { value: new wt() },
      },
    ]),
    a = new P0({ vertexShader: In, fragmentShader: _n, uniforms: r, fog: !0 }),
    p = new m0(e.x1 - e.x0, e.z1 - e.z0, 1, 1)
      .rotateX(-Math.PI / 2)
      .translate((e.x0 + e.x1) / 2, v0, (e.z0 + e.z1) / 2),
    i = new bt(p, a);
  ((i.name = "pond_water"), i.layers.set(ea), o.camera.layers.enable(ea));
  const d = { refr: 1, refl: 0.5, samples: 4, reflSamples: 4 };
  let y = null,
    w = null;
  const g = (O, J) =>
    new Ya(2, 2, {
      type: $a,
      depthBuffer: !0,
      samples: O,
      ...(J ? { depthTexture: new Xa(2, 2, Za) } : { resolveDepthBuffer: !1 }),
    });
  function z() {
    (y?.dispose(),
      w?.dispose(),
      (y = g(d.samples, !0)),
      (w = g(d.reflSamples, !1)),
      (r.tRefr.value = y.texture),
      (r.tRefrD.value = y.depthTexture),
      (r.tRefl.value = w.texture));
  }
  z();
  const x = new Is(),
    v = new Is();
  (x.layers.set(_e), v.layers.set(0), v.layers.enable(1));
  const n = new ja(),
    l = new H0(),
    f = new H0(),
    h = new ba(new dt(e.x0, v0 - 1, e.z0), new dt(e.x1, v0 + 0.2, e.z1)),
    c = new Oa(),
    M = new wt(),
    m = new dt(),
    k = new dt(),
    S = new dt(),
    A = new wt(),
    b = new dt(0, 1, 0),
    P = new dt(0, v0, 0);
  let _ = !1;
  function I(O) {
    if (
      !i.visible ||
      (O.updateMatrixWorld(),
      M.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse),
      c.setFromProjectionMatrix(M),
      !c.intersectsBox(h))
    )
      return;
    _ ||
      (u.traverse(($) => {
        $.isLight && $.layers.enable(_e);
      }),
      (_ = !0));
    const J = o.post.size,
      tt = Math.max(2, Math.floor(J.x * d.refr)),
      st = Math.max(2, Math.floor(J.y * d.refr)),
      G = Math.max(2, Math.floor(J.x * d.refl)),
      q = Math.max(2, Math.floor(J.y * d.refl));
    ((y.width !== tt || y.height !== st) && y.setSize(tt, st),
      (w.width !== G || w.height !== q) && w.setSize(G, q),
      r.uScreen.value.set(J.x, J.y),
      (r.uNear.value = O.near),
      (r.uFar.value = O.far),
      r.uProjK.value.set(
        O.projectionMatrix.elements[0],
        O.projectionMatrix.elements[5],
      ));
    const U = t.getRenderTarget(),
      Z = t.shadowMap.autoUpdate,
      ot = t.autoClear;
    if (
      ((t.shadowMap.autoUpdate = !1),
      (t.autoClear = !0),
      x.copy(O, !1),
      x.layers.set(_e),
      x.matrixWorld.copy(O.matrixWorld),
      x.matrixWorldInverse.copy(O.matrixWorldInverse),
      x.projectionMatrix.copy(O.projectionMatrix),
      x.projectionMatrixInverse.copy(O.projectionMatrixInverse),
      (x.matrixAutoUpdate = !1),
      (L.uCausOn.value = 1),
      t.setRenderTarget(y),
      t.render(u, x),
      (L.uCausOn.value = 0),
      m.setFromMatrixPosition(O.matrixWorld),
      m.y > v0 + 0.01)
    ) {
      const $ = new dt()
        .subVectors(P.set(m.x, v0, m.z), m)
        .reflect(b)
        .negate()
        .add(P);
      (A.extractRotation(O.matrixWorld),
        k.set(0, 0, -1).applyMatrix4(A).add(m),
        S.subVectors(P, k).reflect(b).negate().add(P),
        v.position.copy($),
        v.up.set(0, 1, 0).applyMatrix4(A).reflect(b),
        v.lookAt(S),
        (v.far = O.far),
        (v.near = O.near),
        (v.fov = O.fov),
        (v.aspect = O.aspect),
        v.updateMatrixWorld(),
        v.projectionMatrix.copy(O.projectionMatrix),
        r.uReflMat.value
          .set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1)
          .multiply(v.projectionMatrix)
          .multiply(v.matrixWorldInverse),
        n
          .setFromNormalAndCoplanarPoint(b, P)
          .applyMatrix4(v.matrixWorldInverse),
        l.set(n.normal.x, n.normal.y, n.normal.z, n.constant));
      const C = v.projectionMatrix.elements;
      (f.set(
        (Math.sign(l.x) + C[8]) / C[0],
        (Math.sign(l.y) + C[9]) / C[5],
        -1,
        (1 + C[10]) / C[14],
      ),
        l.multiplyScalar(2 / l.dot(f)),
        (C[2] = l.x),
        (C[6] = l.y),
        (C[10] = l.z + 1 - 0.003),
        (C[14] = l.w),
        v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),
        t.setRenderTarget(w),
        t.render(u, v));
    }
    (t.setRenderTarget(U), (t.shadowMap.autoUpdate = Z), (t.autoClear = ot));
  }
  let R = 0;
  const V = (O, J, tt = 1) => {
      r.uRip.value[R++ % 16].set(O, J, r.uTime.value, tt);
    },
    L = {
      uCausT: { value: 0 },
      uCaus: { value: 1 },
      uCausCol: { value: new Xt(1, 0.85, 0.6).multiplyScalar(1.6) },
      uCausOn: { value: 0 },
      uKoiA: { value: Array.from({ length: bo }, () => new H0()) },
      uKoiB: { value: Array.from({ length: bo }, () => new H0()) },
      uKoiSun: { value: new dt() },
      uSunBent: { value: new H0() },
    },
    K = (O) => {
      const J = r.uSunDir.value.clone().normalize(),
        tt = Math.hypot(J.x, J.z),
        st = J.y,
        G = tt / 1.333,
        q = Math.sqrt(1 - G * G);
      L.uKoiSun.value.set(
        ((J.x / tt) * G) / q,
        ((J.z / tt) * G) / q,
        O ? 1 : 0,
      );
      const U = (st - 1.333 * q) / (st + 1.333 * q),
        Z = (1.333 * st - q) / (1.333 * st + q),
        ot = 1 - (U * U + Z * Z) / 2;
      L.uSunBent.value.set(
        (J.x / tt) * G,
        q,
        (J.z / tt) * G,
        O ? ((st * ot) / q) * Pn : 0,
      );
    };
  K(!0);
  let j = !1;
  return {
    mesh: i,
    uniforms: r,
    causU: L,
    prepare: I,
    ripple: V,
    setQuality(O) {
      const J = d.samples,
        tt = d.reflSamples;
      (Object.assign(d, O), (d.samples !== J || d.reflSamples !== tt) && z());
    },
    get quality() {
      return { ...d };
    },
    update(O) {
      (j || (o.prepares.push((J) => I(J)), (j = !0)),
        (r.uTime.value += O),
        (L.uCausT.value += O));
    },
    setWorld(O) {
      const J = O === "ruins";
      (r.uDeep.value.set(
        ...(J ? [0.006, 0.005, 0.004] : [0.012, 0.034, 0.029]),
      ),
        r.uAbsorb.value.set(...(J ? [9, 10, 11] : [1.5, 0.72, 0.92])),
        r.uSunDir.value
          .set(...(J ? [0.35, 0.18, 0.92] : [-0.83, 0.27, 0.49]))
          .normalize(),
        r.uSunCol.value.set(...(J ? [0.55, 0.16, 0.05] : [1, 0.8, 0.55])),
        (r.uGlint.value = J ? 0.35 : 1),
        (r.uWave.value = J ? 0.35 : 1),
        (r.uFilm.value = J ? 1 : 0),
        (r.uAsh.value = J ? 1 : 0),
        (r.uReflK.value = J ? 0.85 : 1),
        (L.uCaus.value = J ? 0 : 1),
        K(!J));
    },
  };
}
const Re = (s, o, t) => (s < o ? o : s > t ? t : s),
  oa = (s, o) => {
    let t = o - s;
    for (; t > Math.PI;) t -= 2 * Math.PI;
    for (; t < -Math.PI;) t += 2 * Math.PI;
    return t;
  },
  Wn = { x: -5, z: -0.8 },
  Rn = { x: 0.7, z: 1 },
  ks = [
    [-3.6, -0.05],
    [-2.9, 0.42],
    [-2.25, 0.3],
    [-1.6, 0.5],
    [-0.95, 0.75],
    [-0.5, 1.2],
  ],
  Go = { p: [-2.25, 0.3], d: [1, 0.3] };
