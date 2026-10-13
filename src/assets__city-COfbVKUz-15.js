// assets__city-COfbVKUz 15 — math
// Lines 4399-4482 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
function Dt(m, e, d, n) {
  const h = [];
  for (const g of d)
    for (let M = 0; M < g.n; M++) {
      const N = e() * 6.283,
        T = e() * 2 - 1,
        S = g.speed * (0.3 + e());
      h.push([
        g.p[0],
        g.p[1],
        g.p[2],
        e(),
        Math.sqrt(1 - T * T) * Math.cos(N) * S,
        Math.abs(T) * S * 0.8 + g.up,
        Math.sqrt(1 - T * T) * Math.sin(N) * S,
        0.4 + e() * g.life,
      ]);
    }
  const c = Math.max(1, h.length),
    w = new Float32Array(c * 4),
    s = new Float32Array(c * 4);
  h.forEach((g, M) => {
    (w.set(g.slice(0, 4), M * 4), s.set(g.slice(4, 8), M * 4));
  });
  const x = new v0();
  (x.setAttribute("position", new e0(new Float32Array(c * 3), 3)),
    x.setAttribute("aP", new q0(w, 4)),
    x.setAttribute("aP2", new q0(s, 4)));
  const k = { ...m, uK: { value: -1 } },
    P = r0({
      vertexShader: yo,
      fragmentShader: go,
      uniforms: k,
      transparent: !0,
      depthWrite: !1,
      blending: rt,
    }),
    _ = new _t(x, P);
  return (
    (_.name = n),
    (_.frustumCulled = !1),
    (_.renderOrder = 7),
    { mesh: _, uni: k }
  );
}
const zo = `
attribute vec4 aP;        // path point x, y, z, its time
attribute float aSide;    // -1 .. 1
uniform float uHead;      // the time of the head (the trail is drawn up to it)
uniform float uTime;
varying float vAge;
varying float vS;
varying vec3 vWorld;
void main() {
  float age = max(uHead - aP.w, 0.0);
  vec3 c = aP.xyz + vec3(0.9, 1.6, -0.5) * age;
  vec3 toCam = normalize(cameraPosition - c);
  vec3 tang = vec3(1.0, -0.4, 0.3);
  vec3 sd = normalize(cross(toCam, tang));
  float w = 1.2 + age * 2.6;
  vec3 P = c + sd * aSide * w;
  vAge = (aP.w > uHead) ? -1.0 : age; vS = aSide; vWorld = P;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  Mo = `
varying float vAge;
varying float vS;
varying vec3 vWorld;
${u0}
${g0}
${F0}
void main() {
  if (vAge < 0.0) discard;
  float n = c3fbm3(vec2(vS * 1.3 + vAge * 0.7, vAge * 2.2 - uTime * 0.6));
  float d = (1.0 - smoothstep(0.35, 1.0, abs(vS) + (n - 0.5) * 0.6)) * exp(-vAge / 5.0) * smoothstep(0.0, 0.15, vAge);
  if (d < 0.01) discard;
  vec3 col = vec3(0.04, 0.036, 0.034) * (c3skyAmb(vec3(0.0, 1.0, 0.0)) * 2.0 + vec3(1.0, 0.35, 0.08) * exp(-vAge * 1.5) * 1.5);
  col = cityHaze(col, vWorld);
  gl_FragColor = vec4(col, clamp(d, 0.0, 0.92));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
