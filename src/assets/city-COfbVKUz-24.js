// assets/city-COfbVKUz 24 — math
// Lines 7575-7767 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
function Go(m, e, d) {
  const { renderer: n, scene: h, game: c } = m,
    w = new fe(16, 16, { type: he, depthBuffer: !0 });
  ((w.texture.generateMipmaps = !1),
    (w.texture.minFilter = Ht),
    (w.texture.magFilter = Ht));
  const s = new Vt(new Uint8Array([0, 0, 0, 255]), 1, 1);
  ((s.needsUpdate = !0), (e.uMirror.value = s));
  const x = new Gt(),
    k = new X(),
    P = new X(),
    _ = new X(),
    g = new X(),
    M = new X(),
    N = new X(),
    T = new S0(),
    S = new de(),
    v = new N0(),
    a = new N0(),
    r = new S0().set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1,
    ),
    y = { active: null, renders: 0, gain: 1 },
    b = (i) => {
      let t = null,
        u = 1e9;
      for (const o of d) {
        const l = i.position;
        if (
          l.x < o.zone[0] ||
          l.x > o.zone[3] ||
          l.y < o.zone[1] ||
          l.y > o.zone[4] ||
          l.z < o.zone[2] ||
          l.z > o.zone[5]
        )
          continue;
        const f = Math.abs(
          (l.x - o.p[0]) * o.n[0] +
            (l.y - o.p[1]) * o.n[1] +
            (l.z - o.p[2]) * o.n[2],
        );
        f < u && ((u = f), (t = o));
      }
      return t;
    };
  return {
    update: (i) => {
      const t = c.noMirror ? null : b(i);
      if (((y.active = t ? t.name : null), !t)) {
        ((e.uMirrorOn.value = 0), (e.uMirror.value = s));
        return;
      }
      const u = Math.max(16, Math.round((c.post?.size?.x || 1280) * 0.5)),
        o = Math.max(16, Math.round((c.post?.size?.y || 720) * 0.5));
      if (
        ((w.width !== u || w.height !== o) && w.setSize(u, o),
        k.set(t.n[0], t.n[1], t.n[2]),
        P.set(t.p[0], t.p[1], t.p[2]),
        i.updateMatrixWorld(),
        _.setFromMatrixPosition(i.matrixWorld),
        g.subVectors(P, _),
        g.dot(k) > 0)
      ) {
        ((e.uMirrorOn.value = 0), (e.uMirror.value = s));
        return;
      }
      (g.reflect(k).negate().add(P),
        T.extractRotation(i.matrixWorld),
        M.set(0, 0, -1).applyMatrix4(T).add(_),
        N.subVectors(P, M).reflect(k).negate().add(P),
        x.position.copy(g),
        x.up.set(0, 1, 0).applyMatrix4(T).reflect(k),
        x.lookAt(N),
        (x.near = i.near),
        (x.far = i.far),
        (x.fov = i.fov),
        (x.aspect = i.aspect),
        x.updateMatrixWorld(),
        x.projectionMatrix.copy(i.projectionMatrix),
        e.uMirrorMat.value
          .copy(r)
          .multiply(x.projectionMatrix)
          .multiply(x.matrixWorldInverse),
        S.setFromNormalAndCoplanarPoint(k, P).applyMatrix4(
          x.matrixWorldInverse,
        ),
        v.set(S.normal.x, S.normal.y, S.normal.z, S.constant));
      const l = x.projectionMatrix.elements;
      ((a.x = (Math.sign(v.x) + l[8]) / l[0]),
        (a.y = (Math.sign(v.y) + l[9]) / l[5]),
        (a.z = -1),
        (a.w = (1 + l[10]) / l[14]),
        v.multiplyScalar(2 / v.dot(a)),
        (l[2] = v.x),
        (l[6] = v.y),
        (l[10] = v.z + 1 - 0.003),
        (l[14] = v.w),
        x.projectionMatrixInverse.copy(x.projectionMatrix).invert(),
        (e.uMirrorOn.value = 0),
        (e.uMirror.value = s));
      const f = n.getRenderTarget(),
        z = n.autoClear;
      (n.setRenderTarget(w),
        (n.autoClear = !0),
        n.render(h, x),
        n.setRenderTarget(f),
        (n.autoClear = z),
        (e.uMirror.value = w.texture),
        (e.uMirrorOn.value = y.gain),
        e.uMirrorPlane.value.set(
          t.n[0],
          t.n[1],
          t.n[2],
          t.n[0] * t.p[0] + t.n[1] * t.p[1] + t.n[2] * t.p[2],
        ),
        y.renders++);
    },
    state: y,
    rt: w,
  };
}
const Oo = [
    ["lift-off", 0, 9],
    ["birds", 9.6, 12.2],
    ["crane", 14.4, 19.8],
    ["glass", 20.4, 23.6],
    ["gap", 24.2, 26.6],
    ["smoke", 29.2, 31.4],
    ["climb", 31.4, 38.6],
    ["dive", 38.6, 45.4],
    ["tank", 45.4, 49],
    ["heli2", 49, 51.2],
    ["highway", 51.2, 53.8],
    ["river", 53.8, 58.4],
    ["bridge", 58.4, 60.4],
    ["quay", 60.4, 66],
    ["wires", 67.2, 68.6],
    ["clip", 69, 70.2],
  ],
  $o = {
    post: {
      exposure: 1.12,
      bloom: 0.26,
      bloomThreshold: 1.25,
      vignette: 0.42,
      sat: 0.98,
      contrast: 1.07,
    },
    key: [11122902, 0.22],
    keyDir: [-0.85, 0.3, -0.35],
    fill: [9347780, 0.1],
    fillDir: [0.9, 0.25, 0.25],
    hemi: [3425374, 2758672, 0.32],
    env: 0.45,
    envName: "sky",
    fog: [1712432, 0.0035],
    keyBox: 30,
  },
  Xo = {
    post: {
      exposure: 1.22,
      bloom: 0.28,
      bloomThreshold: 1.2,
      vignette: 0.4,
      sat: 1,
      contrast: 1.08,
    },
    key: [11122902, 0.22],
    keyDir: [-0.85, 0.3, -0.35],
    fill: [9676488, 0.14],
    fillDir: [0.9, 0.25, 0.25],
    hemi: [3820134, 3021328, 0.36],
    env: 0.55,
    envName: "sky",
    fog: [1844275, 0.0012],
    keyBox: 26,
  };
