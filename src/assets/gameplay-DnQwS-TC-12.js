// assets/gameplay-DnQwS-TC 12 — count
// Lines 5326-5538 of readable/assets/gameplay-DnQwS-TC.pretty.js (statement-aligned).
const fs = 5;
function collectShadowProxies(o, { exclude: t = [] } = {}) {
  const i = o.scene,
    e = o.renderer,
    s = o.camera.layers.mask;
  i.updateMatrixWorld(!0);
  const l = new Set(t.filter(Boolean)),
    n = (T) => {
      for (let f = T; f; f = f.parent) if (l.has(f)) return !0;
      return !1;
    },
    r = (T) => {
      for (let f = T; f; f = f.parent) if (!f.visible) return !1;
      return !0;
    },
    h = (T) => {
      let f = T;
      for (; f.parent && f.parent !== i;) f = f.parent;
      return f;
    },
    a = (T) =>
      T &&
      T.visible !== !1 &&
      !T.wireframe &&
      !T.alphaToCoverage &&
      !(T.alphaTest > 0 && (T.map || T.alphaMap)) &&
      !(T.displacementMap && T.displacementScale !== 0) &&
      !(T.clippingPlanes && T.clippingPlanes.length),
    y = new Map(),
    g = new pt();
  i.traverse((T) => {
    if (
      !T.isMesh ||
      !T.castShadow ||
      T.isSkinnedMesh ||
      T.isInstancedMesh ||
      T.isBatchedMesh ||
      !(T.layers.mask & s) ||
      n(T) ||
      !r(T) ||
      T.customDepthMaterial ||
      T.customDistanceMaterial ||
      T.onBeforeShadow !== ys.prototype.onBeforeShadow
    )
      return;
    const f = T.geometry;
    if (
      !f ||
      !f.attributes.position ||
      f.morphAttributes.position ||
      f.drawRange.start !== 0 ||
      f.drawRange.count !== 1 / 0
    )
      return;
    const b = Array.isArray(T.material) ? T.material : [T.material];
    if (!b.every(a)) return;
    const L = b[0].side,
      v = b[0].shadowSide ?? null;
    if (!b.every((C) => C.side === L && (C.shadowSide ?? null) === v)) return;
    (f.boundingSphere || f.computeBoundingSphere(),
      g.copy(f.boundingSphere.center).applyMatrix4(T.matrixWorld));
    const R = `${h(T).uuid}|${L}|${v}|${Math.floor(g.x / fs)},${Math.floor(g.z / fs)}`;
    let W = y.get(R);
    (W || y.set(R, (W = { side: L, ss: v, src: [] })), W.src.push(T));
  });
  const w = new de();
  ((w.name = "shadowProxies"), (w.matrixAutoUpdate = !1), (w.visible = !1));
  const _ = [];
  for (const T of y.values()) {
    if (T.src.length < 2) continue;
    let f = 0,
      b = 0;
    for (const d of T.src) {
      const x = d.geometry;
      ((f += x.attributes.position.count),
        (b += x.index ? x.index.count : x.attributes.position.count));
    }
    const L = new Float32Array(f * 3),
      v = f > 65535 ? new Uint32Array(b) : new Uint16Array(b);
    let R = 0,
      W = 0;
    const C = [];
    for (const d of T.src) {
      const x = d.geometry,
        A = x.attributes.position,
        q = d.matrixWorld.elements;
      for (let $ = 0; $ < A.count; $++) {
        const lt = A.getX($),
          zt = A.getY($),
          ot = A.getZ($),
          Ft = (R + $) * 3;
        ((L[Ft] = q[0] * lt + q[4] * zt + q[8] * ot + q[12]),
          (L[Ft + 1] = q[1] * lt + q[5] * zt + q[9] * ot + q[13]),
          (L[Ft + 2] = q[2] * lt + q[6] * zt + q[10] * ot + q[14]));
      }
      const Z = d.matrixWorld.determinant() < 0;
      if (x.index) {
        const $ = x.index.array;
        for (let lt = 0; lt < $.length; lt += 3)
          ((v[W++] = $[lt] + R),
            (v[W++] = $[lt + (Z ? 2 : 1)] + R),
            (v[W++] = $[lt + (Z ? 1 : 2)] + R));
      } else
        for (let $ = 0; $ + 2 < A.count; $ += 3)
          ((v[W++] = R + $),
            (v[W++] = R + $ + (Z ? 2 : 1)),
            (v[W++] = R + $ + (Z ? 1 : 2)));
      (C.push({
        o: d,
        start: R,
        count: A.count,
        m: Float64Array.from(q),
        geo: x,
        mat: d.material,
        mats: Array.isArray(d.material) ? d.material.slice() : null,
      }),
        (R += A.count));
    }
    const j = new Je();
    (j.setAttribute("position", new ue(L, 3)),
      j.setIndex(new ue(v.subarray(0, W), 1)),
      j.computeBoundingSphere());
    const u = new vs({ side: T.side, colorWrite: !1, depthWrite: !1 });
    u.shadowSide = T.ss;
    const m = new Vt(j, u);
    ((m.name = "shadowProxy"),
      (m.castShadow = !0),
      (m.receiveShadow = !1),
      (m.matrixAutoUpdate = !1),
      w.add(m));
    for (const d of C) ((d.mesh = m), (d.o.castShadow = !1), _.push(d));
  }
  (i.add(w), w.updateMatrixWorld(!0));
  const c = e.shadowMap,
    k = c.render;
  c.render = function (...T) {
    w.visible = !0;
    try {
      return k.apply(this, T);
    } finally {
      w.visible = !1;
    }
  };
  let K = 0;
  const Y = (T) => {
    const f = T.mesh.geometry.attributes.position,
      b = f.array,
      L = T.start * 3,
      v = (T.start + T.count) * 3,
      R = b[L],
      W = b[L + 1],
      C = b[L + 2];
    for (let j = L; j < v; j += 3) ((b[j] = R), (b[j + 1] = W), (b[j + 2] = C));
    (f.addUpdateRange(L, v - L),
      (f.needsUpdate = !0),
      (T.o.castShadow = !0),
      K++);
  };
  let F = -1;
  function X() {
    if (o.frameNo === F) return;
    F = o.frameNo;
    let T = 0;
    for (let f = 0; f < _.length; f++) {
      const b = _[f],
        L = b.o,
        v = L.matrixWorld.elements,
        R = b.m;
      let W = L.geometry !== b.geo || L.material !== b.mat;
      if (!W && b.mats) {
        for (let C = 0; C < b.mats.length; C++)
          if (L.material[C] !== b.mats[C]) {
            W = !0;
            break;
          }
      }
      if (!W) {
        for (let C = 0; C < 16; C++)
          if (v[C] !== R[C]) {
            W = !0;
            break;
          }
      }
      (W || (W = !r(L)), W ? Y(b) : (_[T++] = b));
    }
    _.length = T;
  }
  const J = i.onBeforeRender;
  i.onBeforeRender = function (...T) {
    return (X(), J.apply(this, T));
  };
  let U = !0;
  const N = (T) => {
    if (T !== U) {
      U = T;
      for (const f of _) f.o.castShadow = !T;
      for (const f of w.children) f.castShadow = T;
    }
  };
  return {
    holder: w,
    get merged() {
      return _.length;
    },
    get evicted() {
      return K;
    },
    proxies: w.children.length,
    check: X,
    setEnabled: N,
  };
}
const Ie = 0.25;
