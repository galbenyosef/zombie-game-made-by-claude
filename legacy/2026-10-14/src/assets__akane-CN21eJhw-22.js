// assets__akane-CN21eJhw 22 — copy
// Lines 7250-7709 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function sn(e, t = {}) {
  const a = po(e),
    o = go(e, t.shadowSize ?? 4096),
    r = new e.Group();
  r.name = "char3d";
  const i = (h, A, D = 0, T = 0, z = 0) => {
      const U = new e.Group();
      return ((U.name = h), U.position.set(D, T, z), A.add(U), U);
    },
    n = {};
  ((n.hips = i("hips", r, 0, 0.86, 0)),
    (n.spine = i("spine", n.hips, 0, 0.09, 0)),
    (n.chest = i("chest", n.spine, 0, 0.23, 0)),
    (n.neck = i("neck", n.chest, 0, w0.neck[1] - w0.chest[1], w0.neck[2])),
    (n.headPivot = i("headPivot", n.neck, 0, 0.054, 0.004)),
    (n.head = i("head", n.headPivot, 0, 0.06 * We, 0.024 * We)),
    n.head.scale.setScalar(We));
  const s = ko(e, a, t);
  (n.head.add(s.group), o.add(s.mesh, { inB: !1 }));
  const u = Lo(e, a, n, t);
  for (const h of u.casters) o.add(h);
  const l = No(e, a, t);
  n.head.add(l.group);
  for (const h of l.casters) o.add(h);
  const v = Vo(e, a, t);
  (n.chest.add(v.group), n.chest.add(v.strap));
  for (const h of v.casters) o.add(h);
  const g = an(e, a, n, v, t);
  for (const h of g.casters) o.add(h);
  const m = new e.Group();
  ((m.name = "micStand"), r.add(m));
  let y = null,
    k = "";
  const G = 72,
    d = new e.InstancedBufferGeometry();
  {
    const h = new e.SphereGeometry(1, 10, 8);
    ((d.index = h.index),
      d.setAttribute("position", h.attributes.position),
      d.setAttribute("normal", h.attributes.normal),
      d.setAttribute(
        "aDrop",
        new e.InstancedBufferAttribute(new Float32Array(G * 4), 4),
      ),
      d.setAttribute(
        "aStretch",
        new e.InstancedBufferAttribute(new Float32Array(G), 1),
      ),
      (d.instanceCount = 0));
  }
  const w = new e.Mesh(d, a.drops());
  ((w.frustumCulled = !1), (w.name = "drops"));
  let f = rt({}),
    C = 0,
    x = null,
    p = {};
  const M = new e.Vector3(),
    I = new e.Matrix4();
  function P(h, A = 0) {
    ((p = h || {}), (f = rt(h)), (C = A), (a.shared.uTime.value = A));
    {
      const m0 = f.windW,
        g0 = a.shared.uHairWind.value;
      m0
        ? g0.set(m0[0], m0[1], m0[2], Z(f.hairFlutter ?? 0, 0, 2))
        : g0.set(0, 0, 0, 0);
    }
    const D = (f.bodyYaw == null ? 0.6 * f.yaw : f.bodyYaw) * W0,
      T = Math.sin(f.breathe * Math.PI * 2),
      z = Nt(f),
      U = _e(f),
      B = Z(f.headFwd ?? U),
      _ = Wo(f),
      Q = Z(f.chibi);
    (r.scale.setScalar(n0(1, 0.56, Q)),
      n.head.scale.setScalar(We * Z(f.headScale ?? 1, 0.5, 3) * n0(1, 2.2, Q)),
      n.hips.position.set(_.hipsX, _.hipsY, _.hipsZ));
    const q = Z(f.sway ?? 0, -15, 15),
      j = q * _.stand + 3.5 * _.weight,
      E = Z(f.pump ?? 0, -20, 30),
      a0 = _.ride || 0;
    {
      const m0 = Z(f.walkAmp ?? 0) * _.stand,
        g0 = (f.walk ?? 0) * Math.PI * 2;
      n.hips.rotation.set(
        0,
        (D * 0.5 - m0 * 4.5 * Math.sin(g0) * W0) * (1 - a0),
        (j * W0 + m0 * 2.4 * Math.sin(g0) * W0) * (1 - a0) +
          (f.rideRoll ?? 0) * W0 * a0,
      );
    }
    const l0 = f.lean + z * 0.35 + _.stomp * 6 + B * 5,
      e0 = Z(f.walkAmp ?? 0) * _.stand,
      c0 = (f.walk ?? 0) * Math.PI * 2,
      d0 = e0 * 5.5 * Math.sin(c0) * W0,
      x0 = e0 * 1.6 * Math.cos(c0 * 2) * W0;
    (n.spine.rotation.set(
      (l0 * 0.6 +
        E * 0.65 +
        _.bounce * 60 +
        e0 * 2.2 * (1 - Math.cos(c0 * 2))) *
        W0,
      D * (0.5 + 0.3 * a0) + d0 * 0.55,
      (-0.75 * j + 0.6 * q * (1 - _.stand)) * W0 + x0,
    ),
      n.chest.rotation.set((l0 * 0.4 + E * 0.35) * W0, 0, -0.15 * j * W0),
      n.chest.position.set(0, 0.23 + Z(f.shoulders ?? 0, -0.05, 0.05), 0),
      n.chest.scale.set(1 + T * 0.006, 1 + T * 0.004, 1 + T * 0.012));
    const P0 = f.yaw * W0 - D * (1 - 0.2 * a0),
      A0 = so(f);
    n.neck.position.set(0, w0.neck[1] - w0.chest[1], w0.neck[2] + B * 0.014);
    const z0 = -0.5 * l0 - 0.3 * E - 30 * _.bounce;
    (n.neck.rotation.set(
      (A0 * 0.3 + B * 11 + z0 * 0.3) * W0,
      P0 * 0.35,
      -f.roll * W0 * 0.3,
      "YXZ",
    ),
      n.headPivot.rotation.set(
        (A0 * 0.7 - B * 8 + z0 * 0.7) * W0,
        P0 * 0.65,
        -f.roll * W0 * 0.7,
        "YXZ",
      ));
    const _0 =
      f.lookUp > 0
        ? {
            ...f,
            eyes: {
              ...f.eyes,
              gaze: [f.eyes.gaze[0], f.eyes.gaze[1] + 0.7 * Z(f.lookUp)],
            },
          }
        : f;
    s.paint(_0, A);
    {
      const m0 = f.mouth,
        g0 = Z(m0.open),
        D0 =
          m0.shape === "A"
            ? 0.0022
            : m0.shape === "O"
              ? 0.002
              : m0.shape === "E" || m0.shape === "I"
                ? 0.001
                : m0.shape === "U"
                  ? 0.0012
                  : 0;
      a.shared.uJaw.value = g0 * n0(D0, 0.0026, U);
    }
    const G0 = Z(f.wet);
    for (const m0 of a.mats)
      m0.uniforms && m0.uniforms.uWet && (m0.uniforms.uWet.value = G0);
    ((s.overlay.material.uniforms.uOverA.value = 0.4 + 0.3 * Z(f.anger)),
      r.updateMatrixWorld(!0),
      M.set(0, -0.084 - a.shared.uJaw.value, 0.022).applyMatrix4(
        n.head.matrixWorld,
      ),
      I.copy(n.neck.matrixWorld).invert(),
      M.applyMatrix4(I),
      (u.neckMat.uniforms.uJawY.value = M.y + w0.neck[1] - 0.019),
      u.setPose(f, A, _),
      r.updateMatrixWorld(!0),
      v.setPose(f, A),
      r.updateMatrixWorld(!0));
    const p0 = f.micStand === !0 || (f.micStand !== !1 && f.arms === "mic");
    m.visible = p0;
    let v0 = null;
    if (p0) {
      const m0 = +(f.micH ?? 1.325).toFixed(3),
        g0 = f.micBoom !== !1,
        D0 = (f.micSide ?? 1) >= 0 ? 1 : -1,
        T0 = f.micTilt ?? void 0,
        K0 = f.micGrip ?? void 0,
        ae = [m0, g0, D0, T0, K0].join("|");
      (ae !== k &&
        ((k = ae),
        y && (m.remove(y.group), y.dispose()),
        (y = Xo(e, {
          kit: a,
          height: m0,
          boom: g0,
          side: D0,
          tilt: T0,
          grip: K0,
        })),
        m.add(y.group)),
        m.position.set(0, 0, f.micZ ?? 0.455),
        m.rotation.set(0, Math.PI, 0));
      const Z0 = y.grip,
        $0 = y.axis;
      v0 = {
        gripRoot: [-Z0[0], Z0[1], (f.micZ ?? 0.455) - Z0[2]],
        axisRoot: [-$0[0], $0[1], -$0[2]],
      };
    }
    ((x = v0),
      g.setPose(f, A, { mic: v0 }),
      l.setPose(f, A, n),
      r.updateMatrixWorld(!0),
      L(G0, A));
  }
  const F = [];
  function L(h, A) {
    const D = d.attributes.aDrop,
      T = d.attributes.aStretch;
    if (h < 0.05) {
      ((d.instanceCount = 0), (w.visible = !1));
      return;
    }
    ((w.visible = !0), (F.length = 0));
    for (const B of l.tips())
      F.push(M.set(B[0], B[1], B[2]).applyMatrix4(n.head.matrixWorld).clone());
    if (v.group.visible) {
      const B = v.outline.map((_) =>
        new e.Vector3(_[0], _[1], -0.01).applyMatrix4(v.group.matrixWorld),
      );
      B.sort((_, Q) => _.y - Q.y);
      for (let _ = 0; _ < 6 && _ < B.length; _++) F.push(B[_]);
    }
    F.push(M.set(0, -0.083, 0.03).applyMatrix4(n.head.matrixWorld).clone());
    for (const B of g.arms)
      B.wrist &&
        F.push(
          M.set(...B.wrist)
            .applyMatrix4(n.chest.matrixWorld)
            .clone()
            .add(new e.Vector3(0, -0.035, 0)),
        );
    let z = 0;
    const U = r.matrixWorld.elements[13];
    for (let B = 0; B < F.length && z < G; B++) {
      if (X0(B, 71) > h * 1.05) continue;
      const _ = F[B],
        Q = 1.1 + X0(B, 72) * 1.9,
        q = A / Q + X0(B, 73),
        j = q - Math.floor(q),
        E = 0.0012 + 0.0011 * X0(B, 74, Math.floor(q));
      if (j < 0.72) {
        const a0 = j / 0.72,
          l0 = E * (0.35 + 0.65 * a0);
        (D.setXYZW(z, _.x, _.y - l0 * (0.6 + 0.6 * a0), _.z, l0),
          T.setX(z, 0.25 * a0));
      } else {
        const a0 = (j - 0.72) * Q,
          l0 = _.y - E - 0.5 * 9.8 * a0 * a0;
        if (l0 < U) continue;
        (D.setXYZW(z, _.x, l0, _.z, E),
          T.setX(z, Math.min(3, 9.8 * a0 * 0.35)));
      }
      z++;
    }
    ((d.instanceCount = z), (D.needsUpdate = !0), (T.needsUpdate = !0));
  }
  const O = 0.03,
    J = [
      [0, -0.049, 0.074],
      [0, -0.0585, 0.073],
      [0, -0.066, 0.069],
      [0, -0.078, 0.062],
      [0, -0.029, 0.0715],
      [0.022, -0.058, 0.066],
      [-0.022, -0.058, 0.066],
    ];
  let s0 = null,
    $ = null;
  const r0 = new e.Vector3(),
    t0 = new e.Vector3();
  function V() {
    let h = r;
    for (; h.parent;) h = h.parent;
    if (h === r || !h.isScene) return null;
    if (h !== s0) {
      ((s0 = h), ($ = null));
      const D = h.getObjectByName("roof.micStand");
      D &&
        D.traverse((T) => {
          !$ &&
            T.isMesh &&
            T.geometry &&
            T.geometry.type === "SphereGeometry" &&
            ($ = T);
        });
    }
    if (!$) return null;
    for (let D = $; D; D = D.parent) if (!D.visible) return null;
    const A = $.geometry;
    return (
      A.boundingSphere || A.computeBoundingSphere(),
      $.updateWorldMatrix(!0, !1),
      t0.copy(A.boundingSphere.center).applyMatrix4($.matrixWorld),
      { c: t0, r: A.boundingSphere.radius * $.matrixWorld.getMaxScaleOnAxis() }
    );
  }
  function R(h) {
    r.updateMatrixWorld(!0);
    let A = 9;
    for (const D of J)
      (r0.set(D[0], D[1], D[2]).applyMatrix4(n.head.matrixWorld),
        (A = Math.min(A, r0.distanceTo(h.c) - h.r)));
    return A;
  }
  let H = 0;
  function N() {
    H = 0;
    const h = V();
    if (!h) return;
    const A = p,
      D = A.lean ?? 0;
    if (R(h) >= O) return;
    const z = (_) => (P({ ...A, lean: D - _ }, C), R(h));
    let U = 0,
      B = 8;
    for (; B < 40 && z(B) < O;) ((U = B), (B = Math.min(40, B * 2)));
    for (let _ = 0; _ < 7; _++) {
      const Q = 0.5 * (U + B);
      z(Q) >= O ? (B = Q) : (U = Q);
    }
    (z(B), (H = B), (p = A));
  }
  const Y = new e.Vector3(),
    o0 = new e.Vector3(),
    i0 = new e.Vector3(),
    u0 = new e.Vector3(),
    f0 = new e.Quaternion(),
    K = new e.Vector3(),
    b = new e.Matrix3(),
    W = new e.Matrix4();
  function X(h, A, D = {}) {
    D.micClear !== !1 && N();
    const T = A.quaternion,
      z = a.shared;
    if (D.world) {
      const Q = D.world;
      (z.uKeyDir.value.copy(Q.keyDir),
        z.uKeyCol.value.copy(Q.keyCol),
        z.uAmbGain.value.copy(Q.ambGain),
        z.uAmbCol.value.copy(Q.ambCol),
        (z.uAmb.value = Q.amb),
        z.uRimCol.value.copy(Q.rimCol),
        (z.uRimAmt.value = Q.rimAmt));
      const q = Q.rimDir || [1, -0.2];
      (Y.set(q[0], -q[1], -0.35).normalize().applyQuaternion(T),
        z.uRimDir.value.copy(Y),
        (z.uExposure.value = Q.comp ?? 1),
        (z.uSkinTint.value = Q.skinTint ?? 0.2),
        (z.uSkinWarm.value = Q.skinWarm ?? 0.22));
    } else {
      const Q = f.light,
        q = Q.key || [-0.6, -0.8];
      (Y.set(q[0], -q[1], D.keyZ ?? 0.75)
        .normalize()
        .applyQuaternion(T),
        z.uKeyDir.value.copy(Y));
      const j = Q.rim || [1, -0.2];
      (Y.set(j[0], -j[1], -0.35).normalize().applyQuaternion(T),
        z.uRimDir.value.copy(Y),
        z.uKeyCol.value.set(Q.keyColor || "#fff4ea"),
        z.uRimCol.value.set(Q.rimColor || "#6f95e8"),
        (z.uRimAmt.value = Q.rimAmt ?? 0.6),
        z.uAmbCol.value.set(Q.ambient || "#16338f"),
        (z.uAmb.value = Q.amb ?? 0.35),
        z.uAmbGain.value.setRGB(1, 1, 1),
        (z.uExposure.value = 1));
    }
    f.arms === "point" &&
      f.pointAt !== !1 &&
      (r.updateMatrixWorld(!0),
      A.getWorldPosition(Y),
      W.copy(n.chest.matrixWorld).invert(),
      Y.applyMatrix4(W),
      g.setPose(f, C, { mic: x, aim: [Y.x, Y.y, Y.z] }),
      r.updateMatrixWorld(!0));
    const U = D.height ?? h.getRenderTarget()?.height ?? h.domElement.height;
    ((z.uPxToView.value = A.isPerspectiveCamera
      ? (2 * Math.tan((A.fov * W0) / 2)) / U
      : 0),
      (z.uPx.value = D.outlinePx ?? 2.2),
      r.updateMatrixWorld(!0),
      n.head.getWorldQuaternion(f0),
      n.head.getWorldPosition(K),
      A.getWorldPosition(Y),
      Y.sub(K).applyQuaternion(f0.clone().invert()).normalize(),
      z.uCamH.value.copy(Y),
      (z.uWarp.value = D.warp ?? 11));
    const B = s.material.uniforms;
    (b.setFromMatrix4(I.makeRotationFromQuaternion(f0)),
      B.uHeadRot.value.copy(b),
      (B.uEyeReflect.value = Z(f.eyeReflect ?? 0.5, 0, 2)));
    const _ = D.env || null;
    if (
      ((B.uEnvMode.value = _ ? (_.rect ? 2 : _.cube ? 1 : 0) : 0),
      (B.uEnvCube.value = _ && _.cube ? _.cube : null),
      (B.uEnvRect.value = _ && _.rect ? _.rect : null),
      (B.uEnvGain.value = _ && _.gain != null ? _.gain : 1),
      (B.uIrisDetail.value = D.irisDetail ?? 1),
      D.faceRes && D.faceRes !== s.res && s.setRes(D.faceRes),
      s.flush(h),
      t.shadows !== !1)
    ) {
      const Q = D.shadowCenter
          ? o0.set(...D.shadowCenter)
          : r.localToWorld(o0.set(0, 1.15, 0.05)),
        q = D.shadowRadius ?? 0.62;
      (n.head.getWorldPosition(K),
        A.getWorldPosition(u0).sub(K),
        u0.lengthSq() > 1e-8
          ? u0.normalize()
          : A.getWorldDirection(u0).negate(),
        i0
          .copy(z.uKeyDir.value)
          .multiplyScalar(D.faceShadowKey ?? 0.45)
          .add(u0)
          .normalize());
      const j = o.render(h, z.uKeyDir.value, Q, q, i0);
      ((z.uShadowA.value = j.texA),
        (z.uShadowB.value = j.texB),
        z.uShadowMat.value.copy(j.matrix),
        z.uShadowMatB.value.copy(j.matrixB),
        (z.uShadowTexel.value = j.texel),
        (z.uShadowSoft.value = D.shadowSoft ? 1 : 0),
        (z.uShadowOn.value = 1));
    }
  }
  function S() {
    (s.dispose(),
      u.dispose(),
      l.dispose(),
      v.dispose(),
      g.dispose(),
      y && y.dispose(),
      d.dispose(),
      o.dispose(),
      a.dispose());
  }
  return (
    P({}, 0),
    {
      group: r,
      drops: w,
      setPose: P,
      prepare: X,
      dispose: S,
      rig: n,
      kit: a,
      parts: { head: s, body: u, hair: l, guitar: v, arms: g },
      get pose() {
        return f;
      },
      get micPush() {
        return H;
      },
      stats: () => ({
        head: s.stats,
        hair: l.stats && l.stats(),
        faceRes: s.res,
      }),
    }
  );
}
