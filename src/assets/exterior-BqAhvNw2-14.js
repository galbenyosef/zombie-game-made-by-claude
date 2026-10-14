// assets/exterior-BqAhvNw2 14 — math
// Lines 3397-3611 of readable/assets/exterior-BqAhvNw2.pretty.js (statement-aligned).
const I0 = 36,
  V0 = 60,
  it = [
    [760, 125, -80],
    [560, 115, -260],
    [360, 96, -420],
    [220, 82, -500],
    [120, 72, -540],
    [40, 64, -560],
    [-60, 52, -575],
    [-150, 26, -600],
    [-230, -36, -630],
    [-300, -110, -660],
  ].map((t) => new B(...t)),
  lt = `
varying vec3 vLocal;
varying vec3 vWorld;
varying vec3 vNw;
void main() {
  vLocal = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vNw = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  rt = `
varying vec3 vLocal;
varying vec3 vWorld;
varying vec3 vNw;
uniform float uOn;
uniform float uTime;
uniform float uHazeK;
${c0}
void main() {
  float t = clamp(-vLocal.y, 0.0, 1.0);                  // 0 at the lamp, 1 at the ground
  vec3 V = normalize(vWorld - cameraPosition);
  float facing = abs(dot(normalize(vNw), V));
  float soft = pow(facing, 1.6);                          // edges of the cone fade: it reads as a volume
  float fall = (1.0 - smoothstep(0.55, 1.0, t)) * (0.35 + 0.65 * exp(-t * 3.0));
  float rain = 0.75 + 0.25 * exNoise(vec2(atan(vLocal.x, vLocal.z) * 30.0, t * 40.0 + uTime * 9.0));
  float dist = length(vWorld - cameraPosition);
  float hz = 1.0 - exp(-dist * uHazeK);
  float body = smoothstep(0.05, 0.85, facing);
  vec3 c = vec3(0.80, 0.88, 1.0) * (0.12 * body * body + 0.09 * pow(facing, 6.0)) * fall * rain * uOn * (1.0 - 0.7 * hz);
  gl_FragColor = vec4(c, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  ct = `
attribute vec4 aCol;
attribute vec2 aKind;
varying vec3 vCol;
uniform float uTime;
uniform float uPx;
void main() {
  float k = 1.0;
  if (aKind.x > 0.5 && aKind.x < 1.5) k = step(fract(uTime * 1.1 + aKind.y), 0.12);            // beacon
  else if (aKind.x > 1.5) k = step(fract(uTime * 0.9 + aKind.y), 0.05);                       // strobe
  vCol = aCol.rgb * k;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aCol.a * uPx * 2.5;
  if (k < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  ft = `
varying vec3 vCol;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q) * 2.5;
  float a = exp(-r * r * 2.2) + exp(-r * 1.6) * 0.2;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function buildHelicopterFlight(t, i) {
  const a = new b0();
  a.name = "helicopter";
  const e = new b0(),
    s = new j0({ color: new K0(0.006, 0.006, 0.007), fog: !1 }),
    l = new e0(new R0(1, 12, 8).scale(3.2, 1.25, 1.3), s),
    d = new e0(
      new d0(0.22, 0.45, 6.5, 6).rotateZ(Math.PI / 2).translate(-5.6, 0.35, 0),
      s,
    ),
    v = new e0(new $(0.9, 1.6, 0.12).translate(-8.8, 1, 0), s),
    x = new e0(new $(4.2, 0.1, 2.3).translate(0.2, -1.55, 0), s),
    n = new j0({
      color: new K0(0.01, 0.01, 0.012),
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
      fog: !1,
      side: P0,
    }),
    k = new e0(new fe(5.6, 24).rotateX(-Math.PI / 2).translate(0, 1.55, 0), n);
  e.add(l, d, v, x, k);
  const m = [
      [0.3, 0.2, -1.4, 5, 0.2, 0.08, 2, 0],
      [0.3, 0.2, 1.4, 0.15, 5, 0.6, 2, 0],
      [-9.1, 0.8, 0, 4, 4, 3.6, 1.8, 0],
      [0, 1.45, 0, 8, 0.3, 0.12, 2.4, 1],
      [-1, -0.4, 0, 9, 9, 9, 2.6, 2],
      [2.6, -1.3, 0, 7, 7.4, 8, 2.2, 0],
    ],
    p = new z0();
  (p.setAttribute(
    "position",
    new o0(
      m.flatMap((g) => g.slice(0, 3)),
      3,
    ),
  ),
    p.setAttribute(
      "aCol",
      new o0(
        m.flatMap((g) => g.slice(3, 7)),
        4,
      ),
    ),
    p.setAttribute(
      "aKind",
      new o0(
        m.flatMap((g, M) => [g[7], M * 0.37]),
        2,
      ),
    ));
  const b = new D0(
    p,
    n0({
      vertexShader: ct,
      fragmentShader: ft,
      uniforms: { uTime: i.uTime, uPx: i.uPx },
      transparent: !0,
      depthWrite: !1,
      blending: A0,
    }),
  );
  ((b.frustumCulled = !1), (b.renderOrder = 6), e.add(b), a.add(e));
  const N = new d0(0, 1, 1, 28, 8, !0).translate(0, -0.5, 0),
    o = { uOn: { value: 0 }, uTime: i.uTime, uHazeK: i.uHazeK },
    u = new e0(
      N,
      n0({
        vertexShader: lt,
        fragmentShader: rt,
        uniforms: o,
        transparent: !0,
        depthWrite: !1,
        blending: A0,
        side: P0,
      }),
    );
  ((u.frustumCulled = !1), (u.renderOrder = 7), a.add(u), (a.visible = !1));
  const z = new de(it, !1, "catmullrom", 0.5),
    f = new B(),
    L = new B(),
    P = new B(),
    F = new B(),
    I = new s0(),
    T = new B(),
    y = new B(),
    H = new B(0, -1, 0);
  let c = 8;
  const w = { active: !1, t: 0 };
  function h(g, M) {
    M - c > V0 && (c += V0 * Math.floor((M - c) / V0));
    const R = M - c,
      A = R >= 0 && R <= I0;
    if (((w.active = A), (w.t = R), (a.visible = A), !A)) {
      ((i.uHeliOn.value = 0), (o.uOn.value = 0));
      return;
    }
    const _ = R / I0;
    (z.getPointAt(Math.min(_, 0.999), f),
      z.getPointAt(Math.min(_ + 0.01, 1), L),
      e.position.copy(f),
      F.subVectors(L, f).normalize());
    const D = Math.atan2(-F.z, F.x);
    (e.rotation.set(0, 0, 0),
      (e.rotation.order = "YXZ"),
      (e.rotation.y = D),
      (e.rotation.z = -0.12),
      (e.rotation.x = 0.18 * Math.sin(_ * 5)));
    const j = Math.sin(M * 0.45) * 55 + Math.sin(M * 0.17) * 25;
    (P.set(f.x + F.x * 70 - F.z * j, 0, f.z + F.z * 70 + F.x * j),
      (P.y = t0(P.x, P.z) + 8),
      T.set(f.x, f.y - 1.6, f.z));
    const U = T.distanceTo(P);
    (u.position.copy(T),
      y.subVectors(P, T).normalize(),
      I.setFromUnitVectors(H, y),
      u.quaternion.copy(I));
    const K = Math.tan(0.085) * U;
    u.scale.set(K, U, K);
    const E = Math.min(1, R / 2, (I0 - R) / 2),
      Q = _ < 0.86 ? E : E * Math.max(0, 1 - (_ - 0.86) / 0.08);
    ((o.uOn.value = Q),
      i.uHeliPos.value.copy(T),
      i.uHeliDir.value.copy(y),
      (i.uHeliOn.value = Q));
  }
  return {
    group: a,
    update: h,
    state: w,
    trigger() {
      c = i.uTime.value || 0;
    },
  };
}
