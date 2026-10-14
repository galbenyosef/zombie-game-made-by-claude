// assets/park-CwBfNU5l 17 — setattribute
// Lines 7000-7184 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function xo(e, a) {
  const t = new P0();
  t.name = "park_fires";
  const r = { uT: x0.uPT, uK: { value: 1 } },
    o = new oe({
      uniforms: r,
      vertexShader: po,
      fragmentShader: mo,
      transparent: !0,
      depthWrite: !1,
      blending: me,
      fog: !1,
      toneMapped: !1,
    }),
    n = new _t(1, 1),
    i = 5,
    f = new U0(n, o, e.length * i);
  ((f.name = "park_flames"), (f.renderOrder = 36), (f.frustumCulled = !1));
  const w = new Float32Array(e.length * i),
    s = new gt(),
    l = new C0(),
    u = new a0(),
    c = new a0(),
    M = [];
  (e.forEach((q, st) => {
    for (let j = 0; j < i; j++) {
      w[st * i + j] = a() * 10 + j;
      const Y = q.s * (0.6 + a() * 0.6) * (q.wide || 1),
        x = q.s * (1 + a() * 1.1),
        p = q.x + (a() - 0.5) * q.s * 0.9 * (q.wide || 1),
        g = q.z + (a() - 0.5) * q.s * 0.9 * (q.wide || 1);
      (M.push([p, q.y, g, Y, x]),
        f.setMatrixAt(
          st * i + j,
          s.compose(u.set(p, q.y, g), l, c.set(Y, x, 1)),
        ));
    }
  }),
    n.setAttribute("aSeed", new Y0(w, 1)),
    t.add(f));
  const h = 9,
    v = e.length,
    S = new Fe(),
    d = new _t(1, 1);
  (S.setIndex(d.index),
    S.setAttribute("position", d.attributes.position),
    S.setAttribute("uv", d.attributes.uv));
  const y = new Float32Array(v * h * 4),
    m = new Float32Array(v * h * 2);
  for (let q = 0; q < v; q++)
    for (let st = 0; st < h; st++) {
      const j = e[q],
        Y = q * h + st;
      (y.set([j.x, j.y + j.s * 0.9, j.z, j.s * (j.smoke ?? 1)], Y * 4),
        m.set([st / h + a() * 0.08, a()], Y * 2));
    }
  (S.setAttribute("aBase", new Y0(y, 4)),
    S.setAttribute("aSeed", new Y0(m, 2)),
    (S.instanceCount = v * h));
  const F = new oe({
    uniforms: wa.merge([ba.fog, { uT: { value: 0 } }]),
    vertexShader: `
attribute vec4 aBase;
attribute vec2 aSeed;
uniform float uT;
varying vec2 vUv;
varying float vAge, vSeed;
#include <fog_pars_vertex>
void main() {
  float life = 8.0 + aSeed.y * 3.0, age = fract(uT / life + aSeed.x);
  float sz = aBase.w;
  vec3 c = aBase.xyz + vec3(age * age * 4.0 + sin(uT * 0.3 + aSeed.y * 9.0) * 0.3 * age, age * (5.5 + sz * 3.0), -age * 1.6 + cos(uT * 0.4 + aSeed.y * 7.0) * 0.25 * age);
  float size = sz * (0.9 + age * 4.5);
  vec4 mvPosition = modelViewMatrix * vec4(c, 1.0);
  float r = aSeed.y * 6.28 + uT * (0.15 + aSeed.y * 0.1) * (aSeed.y > 0.5 ? 1.0 : -1.0);
  vec2 q = (uv - 0.5) * size; q = mat2(cos(r), sin(r), -sin(r), cos(r)) * q;
  mvPosition.xy += q;
  gl_Position = projectionMatrix * mvPosition;
  vUv = uv; vAge = age; vSeed = aSeed.y;
  #include <fog_vertex>
}`,
    fragmentShader: `
uniform float uT;
varying vec2 vUv;
varying float vAge, vSeed;
#include <fog_pars_fragment>
float h(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float n(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
void main() {
  vec2 c = vUv - 0.5;
  float cloud = n(vUv * 3.0 + vSeed * 17.0) * 0.55 + n(vUv * 7.0 - vSeed * 9.0 + uT * 0.05) * 0.3 + n(vUv * 15.0 + vSeed * 3.0) * 0.15;
  float a = smoothstep(0.5, 0.12, length(c) + (cloud - 0.5) * 0.35);
  a *= smoothstep(0.0, 0.08, vAge) * (1.0 - smoothstep(0.45, 1.0, vAge)) * 0.5;
  if (a < 0.004) discard;
  vec3 col = mix(vec3(0.9, 0.3, 0.07) * (1.2 - vAge * 3.0), vec3(0.035, 0.034, 0.036), smoothstep(0.0, 0.22, vAge));
  col *= 0.8 + 0.4 * cloud;
  gl_FragColor = vec4(col, a);
  #include <fog_fragment>
}`,
    transparent: !0,
    depthWrite: !1,
    fog: !0,
  });
  F.uniforms.uT = x0.uPT;
  const C = new jt(S, F);
  ((C.name = "park_smoke"),
    (C.frustumCulled = !1),
    (C.renderOrder = 37),
    t.add(C));
  const L = 12,
    z = new Q0(),
    W = new Float32Array(v * L * 3),
    D = new Float32Array(v * L * 2);
  for (let q = 0; q < v; q++)
    for (let st = 0; st < L; st++) {
      const j = e[q],
        Y = q * L + st;
      (W.set(
        [
          j.x + (a() - 0.5) * j.s * (j.wide || 1),
          j.y + j.s * 0.3,
          j.z + (a() - 0.5) * j.s * (j.wide || 1),
        ],
        Y * 3,
      ),
        D.set([a(), a() * 0.8 + j.s * 0.3], Y * 2));
    }
  (z.setAttribute("position", new $t(W, 3)),
    z.setAttribute("aSeed", new $t(D, 2)));
  const V = new oe({
      uniforms: { uT: x0.uPT, uScale: { value: 600 } },
      vertexShader: `
attribute vec2 aSeed;
uniform float uT, uScale;
varying float vK;
void main() {
  float life = 1.6 + aSeed.x * 1.8, age = fract(uT / life + aSeed.x * 7.3);
  float s = aSeed.x * 6.28, up = aSeed.y;
  vec3 p = position + vec3(sin(s + uT * 2.1) * 0.35 * age + cos(s) * 0.3 * age + age * 0.8, (1.0 - (1.0 - age) * (1.0 - age)) * (2.0 + up * 2.6), cos(s * 1.3 + uT * 1.7) * 0.35 * age + sin(s) * 0.3 * age);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vK = (1.0 - age) * (0.55 + 0.45 * sin(uT * 23.0 + s * 5.0));
  gl_PointSize = max(1.0, 0.05 * uScale / -mv.z);
}`,
      fragmentShader: `
varying float vK;
void main() {
  float d = length(gl_PointCoord - 0.5); if (d > 0.5) discard;
  gl_FragColor = vec4(vec3(4.0, 1.5, 0.35) * vK * smoothstep(0.5, 0.0, d), 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: me,
      fog: !1,
      toneMapped: !1,
    }),
    A = new va(z, V);
  ((A.name = "park_sparks"),
    (A.frustumCulled = !1),
    (A.renderOrder = 38),
    t.add(A));
  const K = e.map((q) => q.k ?? 1);
  function J(q, st) {
    K[q] = st;
    for (let j = 0; j < i; j++) {
      const Y = M[q * i + j];
      f.setMatrixAt(
        q * i + j,
        s.compose(
          u.set(Y[0], Y[1], Y[2]),
          l,
          c.set(Y[3] * Math.max(0.001, st), Y[4] * Math.max(0.001, st), 1),
        ),
      );
    }
    f.instanceMatrix.needsUpdate = !0;
  }
  return (
    e.forEach((q, st) => {
      (q.k ?? 1) !== 1 && J(st, q.k);
    }),
    { group: t, set: J, k: K, flames: f, plume: C, sparks: A }
  );
}
const je = 5;
