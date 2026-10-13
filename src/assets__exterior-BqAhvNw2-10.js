// assets__exterior-BqAhvNw2 10 — apart
// Lines 2487-2606 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
function Ye(t = !1) {
  const i = new p0({ aPart: 1 }),
    a = new a0(),
    e = new G0();
  [
    [-2.3, 0.3],
    [2.3, 0.3],
    [2.36, 0.55],
    [2.3, 0.78],
    [1.92, 0.88],
    [1.05, 0.97],
    [-1.58, 0.97],
    [-2.22, 0.92],
    [-2.36, 0.72],
  ].forEach(([v, x], n) => (n ? e.lineTo(v, x) : e.moveTo(v, x)));
  const s = new q0(e, {
    depth: 1.7,
    bevelEnabled: !0,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 2,
    curveSegments: 1,
  });
  (s.translate(0, 0, -0.85),
    s.computeVertexNormals(),
    i.add(s, a, { aPart: 0 }));
  const l = new G0();
  [
    [1.05, 0.96],
    [0.32, 1.4],
    [-0.92, 1.42],
    [-1.56, 0.96],
  ].forEach(([v, x], n) => (n ? l.lineTo(v, x) : l.moveTo(v, x)));
  const d = new q0(l, { depth: 1.42, bevelEnabled: !1 });
  (d.translate(0, 0, -0.71),
    d.computeVertexNormals(),
    i.add(d, a, { aPart: 1 }),
    i.add(new $(1.26, 0.05, 1.4).translate(-0.3, 1.425, 0), a, { aPart: 0 }));
  for (const [v, x] of [
    [1.42, 0.76],
    [1.42, -0.76],
    [-1.45, 0.76],
    [-1.45, -0.76],
  ])
    i.add(
      new d0(0.33, 0.33, 0.24, 12).rotateX(Math.PI / 2).translate(v, 0.33, x),
      a,
      { aPart: 2 },
    );
  for (const v of [0.58, -0.58])
    (i.add(new $(0.08, 0.13, 0.36).translate(2.33, 0.68, v), a, { aPart: 3 }),
      i.add(new $(0.08, 0.14, 0.34).translate(-2.37, 0.76, v), a, {
        aPart: 4,
      }));
  return (
    i.add(new $(0.14, 0.16, 1.72).translate(2.36, 0.4, 0), a, { aPart: 5 }),
    i.add(new $(0.14, 0.16, 1.72).translate(-2.4, 0.42, 0), a, { aPart: 5 }),
    t && i.add(new $(0.3, 0.13, 1.2).translate(-0.3, 1.51, 0), a, { aPart: 6 }),
    i.build()
  );
}
function Q0(t, i, a) {
  const e = Ye(a),
    s = i.length,
    l = n0({ vertexShader: Ue, fragmentShader: Xe, uniforms: { ...t } }),
    d = new W0(e, l, s),
    v = new Float32Array(s * 4),
    x = new Float32Array(s * 4),
    n = new a0(),
    k = new s0(),
    m = new s0(),
    p = new s0(),
    b = new B(0, 1, 0),
    N = new B(0, 0, 1),
    o = new B(1, 0, 0);
  return (
    i.forEach((u, z) => {
      (k.setFromAxisAngle(b, u.yaw),
        m.setFromAxisAngle(N, u.pitch || 0),
        p.setFromAxisAngle(o, u.roll || 0),
        k.multiply(m).multiply(p),
        n.compose(new B(u.x, u.y, u.z), k, new B(1, 1, 1)),
        d.setMatrixAt(z, n),
        v.set([...u.paint, u.state], z * 4),
        x.set(
          [u.hazard ? 1 : 0, u.phase, u.lights ? 1 : 0, u.dirt ?? 0.4],
          z * 4,
        ));
    }),
    e.setAttribute("aCarA", new f0(v, 4)),
    e.setAttribute("aCarB", new f0(x, 4)),
    (d.instanceMatrix.needsUpdate = !0),
    (d.frustumCulled = !1),
    (d.name = a ? "street_police" : "street_cars"),
    d
  );
}
const Ze = `
attribute float aOn;
varying float vOn;
varying vec3 vWorld;
void main() {
  vec4 wp = vec4(position, 1.0);
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
#endif
  vOn = aOn; vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Qe = `
varying float vOn;
varying vec3 vWorld;
void main() {
  vec3 c = mix(vec3(0.03, 0.025, 0.02), vec3(3.4, 1.35, 0.32), vOn);
  gl_FragColor = vec4(c, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
