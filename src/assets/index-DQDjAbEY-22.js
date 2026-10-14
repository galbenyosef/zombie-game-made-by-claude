// assets/index-DQDjAbEY 22 — age
// Lines 6161-6534 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function Tn(
  e,
  {
    name: l = "heli_fx",
    smokeN: a = 220,
    sparkN: o = 120,
    fireN: t = 14,
    haloN: s = 10,
    seed: n = 77,
  } = {},
) {
  let c = n >>> 0 || 1;
  const i = () => ((c = (c * 16807) % 2147483647), c / 2147483647),
    d = new $e();
  ((d.name = l), e.add(d));
  const f = ut(a, { iPos: 4, iDat: 4 }),
    p = {
      uCol: { value: new ee(0.012, 0.011, 0.011) },
      uLit: { value: new ee(0.03, 0.035, 0.05) },
      uGlow: { value: new ee(1.6, 0.45, 0.08) },
    },
    m = new ke({
      vertexShader: vn,
      fragmentShader: xn(),
      uniforms: Co.merge([No.fog, p]),
      transparent: !0,
      depthWrite: !1,
      fog: !0,
      blending: Qt,
      blendSrc: vt,
      blendDst: mt,
    });
  ((m.uniforms.uCol = p.uCol),
    (m.uniforms.uLit = p.uLit),
    (m.uniforms.uGlow = p.uGlow));
  const x = new le(f.g, m);
  ((x.name = l + "_smoke"),
    (x.frustumCulled = !1),
    (x.renderOrder = 8),
    d.add(x));
  const w = [];
  for (let U = 0; U < a; U++)
    w.push({
      on: !1,
      p: new _e(),
      v: new _e(),
      age: 0,
      life: 1,
      size: 1,
      grow: 1,
      seed: i(),
      op: 1,
      heat: 0,
    });
  const v = ut(o, { iPos: 4, iVel: 4 }),
    u = new ke({
      vertexShader: yn,
      fragmentShader: wn,
      uniforms: { uStreak: { value: 0.035 } },
      transparent: !0,
      depthWrite: !1,
      blending: Te,
      toneMapped: !1,
    }),
    g = new le(v.g, u);
  ((g.name = l + "_sparks"),
    (g.frustumCulled = !1),
    (g.renderOrder = 9),
    d.add(g));
  const P = [];
  for (let U = 0; U < o; U++)
    P.push({ on: !1, p: new _e(), v: new _e(), age: 0, life: 1, w: 0.01 });
  const k = ut(t, { iPos: 4, iDat: 4 }),
    y = { uTime: { value: 0 } },
    M = new ke({
      vertexShader: bn,
      fragmentShader: Mn,
      uniforms: y,
      transparent: !0,
      depthWrite: !1,
      blending: Te,
      toneMapped: !1,
    }),
    F = new le(k.g, M);
  ((F.name = l + "_fire"),
    (F.frustumCulled = !1),
    (F.renderOrder = 9),
    d.add(F));
  const A = [];
  for (let U = 0; U < t; U++)
    A.push({
      age: U / t,
      life: 0.5 + (U % 5) * 0.08,
      seed: (U * 0.618) % 1,
      off: new _e(),
    });
  const W = new K0(),
    N = new Q0(new Float32Array(s * 3), 3),
    D = new Q0(new Float32Array(s * 4), 4),
    $ = new Q0(new Float32Array(s), 1);
  (N.setUsage(gt),
    D.setUsage(gt),
    W.setAttribute("position", N),
    W.setAttribute("aCol", D),
    W.setAttribute("aStar", $));
  const u0 = { uPx: { value: 600 } },
    L = new ke({
      vertexShader: Pn,
      fragmentShader: Rn,
      uniforms: u0,
      transparent: !0,
      depthWrite: !1,
      blending: Te,
      toneMapped: !1,
    }),
    T = new Fo(W, L);
  ((T.name = l + "_halos"),
    (T.frustumCulled = !1),
    (T.renderOrder = 10),
    d.add(T));
  const O = new ke({
      vertexShader: kn,
      fragmentShader: zn,
      transparent: !0,
      depthWrite: !1,
      side: wt,
      blending: Te,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uTime: { value: 0 },
        uK: { value: 0 },
        uColor: { value: new ee(0.85, 0.92, 1) },
        uLen: { value: 40 },
      },
    }),
    q = new Eo(1, 1, 48, 1, !0);
  (q.translate(0, -0.5, 0), q.rotateX(Math.PI / 2));
  const j = new le(q, O);
  ((j.name = l + "_beam"),
    (j.frustumCulled = !1),
    (j.renderOrder = 7),
    (j.visible = !1),
    d.add(j));
  const E = new ke({
      vertexShader: Sn,
      fragmentShader: An,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      blending: Te,
      fog: !1,
      toneMapped: !1,
      uniforms: {
        uPos: { value: new _e() },
        uSize: { value: 1.6 },
        uK: { value: 0 },
        uColor: { value: new ee(0.9, 0.95, 1) },
      },
    }),
    l0 = new le(new de(1, 1), E);
  ((l0.name = l + "_flare"),
    (l0.frustumCulled = !1),
    (l0.renderOrder = 11),
    (l0.visible = !1),
    d.add(l0));
  const y0 = new ke({
      vertexShader:
        "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader:
        "varying vec2 vUv; uniform vec3 uColor; uniform float uK; void main(){ vec2 q = vUv * 2.0 - 1.0; float r = length(q); float a = (1.0 / (1.0 + r * r * 16.0) - 0.0588) * smoothstep(1.0, 0.6, r) * uK; gl_FragColor = vec4(uColor * a, 0.0); }",
      uniforms: { uColor: { value: new ee(1, 0.06, 0.03) }, uK: { value: 0 } },
      transparent: !0,
      depthWrite: !1,
      blending: Te,
      toneMapped: !1,
      fog: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
    o0 = new le(new de(1, 1).rotateX(-Math.PI / 2), y0);
  return (
    (o0.name = l + "_pool"),
    (o0.frustumCulled = !1),
    (o0.renderOrder = 3),
    (o0.visible = !1),
    d.add(o0),
    {
      group: d,
      smokeMesh: x,
      sparkMesh: g,
      fireMesh: F,
      halos: T,
      beam: j,
      flare: l0,
      beamMat: O,
      flareMat: E,
      pool: o0,
      poolMat: y0,
      puff(
        U,
        e0,
        {
          size: a0 = 0.45,
          grow: r0 = 1.6,
          life: i0 = 3,
          op: V = 0.85,
          heat: p0 = 0,
        } = {},
      ) {
        let C = null;
        for (const J of w) {
          if (!J.on) {
            C = J;
            break;
          }
          (!C || J.age / J.life > C.age / C.life) && (C = J);
        }
        ((C.on = !0),
          C.p.copy(U),
          C.v.copy(e0),
          (C.age = 0),
          (C.life = i0 * (0.8 + 0.4 * i())),
          (C.size = a0),
          (C.grow = r0),
          (C.seed = i()),
          (C.op = V),
          (C.heat = p0));
      },
      burst(U, e0 = 40, a0 = null, r0 = 7) {
        let i0 = 0;
        for (const V of P) {
          if (V.on && i0 < P.length - e0) continue;
          ((V.on = !0),
            V.p.copy(U),
            (V.age = 0),
            (V.life = 0.35 + i() * 0.7),
            (V.w = 0.006 + i() * 0.01));
          const p0 = i() * 2 - 1,
            C = i() * Math.PI * 2,
            J = Math.sqrt(1 - p0 * p0);
          if (
            (V.v.set(J * Math.cos(C), p0, J * Math.sin(C)),
            a0 && (V.v.multiplyScalar(0.55).add(a0), V.v.normalize()),
            V.v.multiplyScalar(r0 * (0.35 + i() * 0.9)),
            ++i0 >= e0)
          )
            break;
        }
      },
      sparksLive() {
        return P.some((U) => U.on);
      },
      update(
        U,
        e0,
        {
          fireAt: a0 = null,
          fireK: r0 = 0,
          fireWind: i0 = null,
          time: V = 0,
          rendererH: p0 = 900,
        } = {},
      ) {
        let C = 0;
        const J = f.a.iPos.array,
          Y = f.a.iDat.array;
        for (const r of w) {
          if (!r.on) continue;
          if (((r.age += U), r.age >= r.life)) {
            r.on = !1;
            continue;
          }
          (r.v.multiplyScalar(Math.exp(-U * 0.9)),
            (r.v.y += U * 0.35),
            r.p.addScaledVector(r.v, U));
          const c0 = r.age / r.life,
            F0 = r.size * (1 + r.grow * Math.sqrt(c0) * 3);
          ((J[C * 4] = r.p.x),
            (J[C * 4 + 1] = r.p.y),
            (J[C * 4 + 2] = r.p.z),
            (J[C * 4 + 3] = F0),
            (Y[C * 4] = c0),
            (Y[C * 4 + 1] = r.seed),
            (Y[C * 4 + 2] = r.op),
            (Y[C * 4 + 3] = r.heat),
            C++);
        }
        ((f.g.instanceCount = C),
          (f.a.iPos.needsUpdate = C > 0),
          (f.a.iDat.needsUpdate = C > 0),
          (x.visible = C > 0),
          (C = 0));
        const B = v.a.iPos.array,
          k0 = v.a.iVel.array;
        for (const r of P)
          if (r.on) {
            if (((r.age += U), r.age >= r.life)) {
              r.on = !1;
              continue;
            }
            ((r.v.y -= 9.8 * U),
              r.v.multiplyScalar(Math.exp(-U * 1.2)),
              r.p.addScaledVector(r.v, U),
              (B[C * 4] = r.p.x),
              (B[C * 4 + 1] = r.p.y),
              (B[C * 4 + 2] = r.p.z),
              (B[C * 4 + 3] = r.w),
              (k0[C * 4] = r.v.x),
              (k0[C * 4 + 1] = r.v.y),
              (k0[C * 4 + 2] = r.v.z),
              (k0[C * 4 + 3] = r.age / r.life),
              C++);
          }
        if (
          ((v.g.instanceCount = C),
          (v.a.iPos.needsUpdate = C > 0),
          (v.a.iVel.needsUpdate = C > 0),
          (g.visible = C > 0),
          (C = 0),
          r0 > 0.01 && a0)
        ) {
          y.uTime.value = V;
          const r = k.a.iPos.array,
            c0 = k.a.iDat.array;
          for (const F0 of A) {
            ((F0.age += U / F0.life),
              F0.age >= 1 &&
                ((F0.age -= 1),
                (F0.seed = i()),
                F0.off.set((i() - 0.5) * 0.3, i() * 0.1, (i() - 0.5) * 0.3)));
            const z0 = F0.age;
            ((r[C * 4] = a0.x + F0.off.x + (i0 ? i0.x * z0 * 0.05 : 0)),
              (r[C * 4 + 1] =
                a0.y + F0.off.y + z0 * 0.5 + (i0 ? i0.y * z0 * 0.05 : 0)),
              (r[C * 4 + 2] = a0.z + F0.off.z + (i0 ? i0.z * z0 * 0.05 : 0)),
              (r[C * 4 + 3] = (0.25 + 0.35 * r0) * (1 - 0.4 * z0)),
              (c0[C * 4] = z0),
              (c0[C * 4 + 1] = F0.seed),
              (c0[C * 4 + 2] = r0),
              (c0[C * 4 + 3] =
                0.6 + (i0 ? Math.min(2, i0.length() * 0.05) : 0)),
              C++);
          }
          ((k.a.iPos.needsUpdate = !0), (k.a.iDat.needsUpdate = !0));
        }
        ((k.g.instanceCount = C),
          (F.visible = C > 0),
          (u0.uPx.value =
            p0 / (2 * Math.tan(((e0.fov || 60) * Math.PI) / 360))),
          (O.uniforms.uTime.value = V));
      },
      setHalo(U, e0, a0, r0, i0, V = 0.12, p0 = 0) {
        ((N.array[U * 3] = e0.x),
          (N.array[U * 3 + 1] = e0.y),
          (N.array[U * 3 + 2] = e0.z),
          (D.array[U * 4] = a0),
          (D.array[U * 4 + 1] = r0),
          (D.array[U * 4 + 2] = i0),
          (D.array[U * 4 + 3] = V),
          ($.array[U] = p0),
          (N.needsUpdate = !0),
          (D.needsUpdate = !0),
          ($.needsUpdate = !0));
      },
      dispose() {
        for (const U of [x, g, F, T, j, l0, o0])
          (U.geometry.dispose(), U.material.dispose());
        d.parent?.remove(d);
      },
    }
  );
}
