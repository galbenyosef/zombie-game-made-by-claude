// assets/city-COfbVKUz 14 — math
// Lines 4093-4398 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
const lo = `
attribute vec4 aS;        // x, y, z (centre), size
attribute vec4 aS2;       // seed, density, fire light, spin
varying vec2 vUv;
varying vec4 vS2;
varying vec3 vWorld;
varying float vFade;
uniform float uTime;
uniform vec2 uWind;
void main() {
  vec3 c = aS.xyz;
  c.xz += uWind * (sin(uTime * 0.11 + aS2.x * 6.0) * 2.5);
  c.y += sin(uTime * 0.21 + aS2.x * 9.0) * 1.2;
  vec3 toCam = cameraPosition - c;
  float d = length(toCam);
  vec3 f = toCam / d;
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 u = cross(f, r);
  float a = aS2.w * uTime * 0.05 + aS2.x * 6.28;
  vec2 q = vec2(cos(a) * position.x - sin(a) * position.y, sin(a) * position.x + cos(a) * position.y);
  vec3 P = c + (r * q.x + u * q.y) * aS.w;
  vUv = position.xy + 0.5; vS2 = aS2; vWorld = P;
  vFade = smoothstep(1.5, 9.0, d);                    // (a sprite fades as the lens goes through it: the veil takes over)
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  fo = `
varying vec2 vUv;
varying vec4 vS2;
varying vec3 vWorld;
varying float vFade;
${u0}
${g0}
${F0}
uniform float uOn;
void main() {
  vec2 q = vUv - 0.5;
  float r = length(q) * 2.0;
  float n = c3fbm(vUv * 3.0 + vS2.x * 7.0 + vec2(0.0, -uTime * 0.05));
  float dens = (1.0 - smoothstep(0.35, 1.0, r + (n - 0.5) * 0.6)) * vS2.y * vFade * uOn;
  if (dens < 0.004) discard;
  float h = clamp(vWorld.y / 120.0, 0.0, 1.0);
  vec3 V = normalize(vWorld - cameraPosition);
  vec3 L = c3skyAmb(vec3(0.0, 1.0, 0.0)) * 0.8 + c3skyAmb(-V) * 0.4;
  vec3 fireL = vec3(1.0, 0.36, 0.09) * vS2.z * exp(-vWorld.y / 16.0) * (0.6 + 0.8 * n);
  vec3 col = vec3(0.05, 0.047, 0.045) * (L * 2.0 + fireL * 2.6) * (0.65 + 0.5 * n);
  col = cityHaze(col, vWorld);
  gl_FragColor = vec4(col, clamp(dens * 1.2, 0.0, 0.95));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  ho = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,
  uo = `
varying vec2 vUv;
uniform float uK;
uniform float uTime;
uniform vec3 uFire;
${u0}
void main() {
  float n = c3fbm(vUv * vec2(3.0, 2.0) + vec2(uTime * 0.6, uTime * 0.25));
  float n2 = c3fbm3(vUv * vec2(7.0, 5.0) - vec2(uTime * 1.1, -uTime * 0.4));
  float a = clamp(uK * (0.86 + 0.25 * n + 0.12 * n2), 0.0, 0.99);
  float low = pow(1.0 - vUv.y, 2.2);
  vec3 col = vec3(0.0075, 0.0068, 0.0064) * (0.5 + 0.9 * n) + uFire * low * (0.35 + 0.9 * n2);
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Qt(m, e, d) {
  const n = I0.col;
  if (e < 1 || e > 160) return 0;
  const h = n.x + n.lean * e,
    c = n.z - n.lean * 0.35 * e,
    w = n.r0 + n.k * e,
    s = Math.hypot(m - h, d - c) / w;
  return Math.max(0, Math.min(1, (1.08 - s) / 0.35)) * Math.min(1, e / 6);
}
const po = `
attribute vec4 aB;        // start x, y, z, seed
attribute vec4 aB2;       // velocity x, y, z, flap rate
uniform float uK;         // 0..1 over the flight (2.6 s)
uniform float uTime;
varying float vA;
void main() {
  float t = uK * 2.6;
  float s = aB.w;
  vec3 v = aB2.xyz;
  vec3 c = aB.xyz + v * t + vec3(sin(t * 3.0 + s * 9.0), sin(t * 2.3 + s * 5.0) * 0.6, cos(t * 2.7 + s * 7.0)) * 1.2 * t;
  float flap = sin(uTime * aB2.w + s * 20.0);
  vec3 p = position;
  p.y += abs(p.x) * flap * 0.9;                               // the wings beat
  vec3 f = normalize(v);
  vec3 rr = normalize(cross(vec3(0.0, 1.0, 0.0), f));
  vec3 P = c + rr * p.x * 0.55 + vec3(0.0, p.y * 0.55, 0.0) + f * p.z * 0.55;
  vA = step(0.001, uK) * (1.0 - smoothstep(0.85, 1.0, uK));
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
  if (vA < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  mo = `
varying float vA;
void main() { gl_FragColor = vec4(vec3(0.004, 0.004, 0.005), 1.0); }
`,
  vo = `
attribute vec4 aG;        // start x, y, z, seed
attribute vec4 aG2;       // velocity x, y, z, size
uniform float uK;         // 0..1 over the fall
uniform float uDur;
uniform float uTime;
varying vec3 vN;
varying vec3 vW;
varying float vOn;
void main() {
  float t = uK * uDur;
  float s = aG.w;
  vec3 c = aG.xyz + aG2.xyz * t + vec3(0.0, -4.9 * t * t, 0.0);
  float a = t * (6.0 + s * 9.0) + s * 20.0, b = t * (4.0 + s * 7.0);
  vec3 p = position * aG2.w;
  p = vec3(cos(a) * p.x - sin(a) * p.y, sin(a) * p.x + cos(a) * p.y, p.z);
  p = vec3(p.x, cos(b) * p.y - sin(b) * p.z, sin(b) * p.y + cos(b) * p.z);
  vec3 n = vec3(0.0, 0.0, 1.0);
  n = vec3(cos(a) * n.x - sin(a) * n.y, sin(a) * n.x + cos(a) * n.y, n.z);
  n = vec3(n.x, cos(b) * n.y - sin(b) * n.z, sin(b) * n.y + cos(b) * n.z);
  vec3 P = c + p;
  vN = n; vW = P;
  vOn = step(0.001, uK) * step(uK, 0.999) * step(0.5, P.y);
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
  if (vOn < 0.5) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  xo = `
varying vec3 vN;
varying vec3 vW;
varying float vOn;
${u0}
${g0}
${F0}
uniform float uGlass;
void main() {
  vec3 V = normalize(vW - cameraPosition);
  vec3 N = normalize(vN); if (dot(N, V) > 0.0) N = -N;
  vec3 col;
  if (uGlass > 0.5) {
    // glass: the sky and the fires in it, and the burning floor above it catching every pane as it turns
    float glint = pow(abs(dot(N, V)), 24.0);
    col = c3skyRefl(V, N, 0.02) * 3.0 + citySpec(vW, N, V, 300.0) * 3.0 + vec3(0.02, 0.025, 0.03) + vec3(2.4, 0.95, 0.3) * glint;
  } else {
    col = vec3(0.05, 0.045, 0.04) * cityLight(vW, N);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function ht(m, e, d, n, h) {
  const c = Math.max(1, e.length),
    w = new ot(),
    s = new v0();
  (s.setAttribute(
    "position",
    new e0(
      d
        ? [-0.5, -0.4, 0, 0.55, -0.3, 0, 0, 0.6, 0]
        : [
            -0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, 0.5,
            0, -0.5, 0.5, 0,
          ],
      3,
    ),
  ),
    w.setAttribute("position", s.attributes.position));
  const x = new Float32Array(c * 4),
    k = new Float32Array(c * 4);
  (e.forEach((M, N) => {
    (x.set(M[0], N * 4), k.set(M[1], N * 4));
  }),
    w.setAttribute("aG", new m0(x, 4)),
    w.setAttribute("aG2", new m0(k, 4)),
    (w.instanceCount = e.length));
  const P = {
      ...m,
      uK: { value: 0 },
      uDur: { value: n },
      uGlass: { value: d ? 1 : 0 },
    },
    _ = r0({ vertexShader: vo, fragmentShader: xo, uniforms: P, side: E0 }),
    g = new s0(w, _);
  return ((g.name = h), (g.frustumCulled = !1), { mesh: g, uni: P });
}
const wo = `
attribute vec4 aF;        // offset x, y, z (from the centre), seed
attribute vec4 aF2;       // size, delay, rise, kind
uniform vec3 uC;
uniform float uK;         // seconds since the blast
varying vec2 vUv;
varying float vHeat;
varying float vA;
varying float vSeed;
void main() {
  float t = max(uK - aF2.y, 0.0);
  float grow = 1.0 - exp(-t * 3.2);
  vec3 c = uC + aF.xyz * grow * 1.6 + vec3(0.0, aF2.z * t * t * 0.6 + aF2.z * t * 0.8, 0.0);
  float size = aF2.x * (0.35 + grow * 1.1 + t * 0.25);
  vec3 toCam = normalize(cameraPosition - c);
  vec3 r = normalize(cross(vec3(0.0, 1.0, 0.0), toCam));
  vec3 u = cross(toCam, r);
  vec3 P = c + (r * position.x + u * position.y) * size;
  vUv = position.xy + 0.5;
  vHeat = exp(-t * 1.6);
  vA = step(0.0001, uK - aF2.y) * (1.0 - smoothstep(2.5, 6.0, t));
  vSeed = aF.w;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
  if (vA < 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  bo = `
varying vec2 vUv;
varying float vHeat;
varying float vA;
varying float vSeed;
${u0}
void main() {
  vec2 q = vUv - 0.5;
  float n = c3fbm(vUv * 3.5 + vSeed * 9.0);
  float r = length(q) * 2.0 + (n - 0.5) * 0.7;
  float body = 1.0 - smoothstep(0.45, 1.0, r);
  if (body * vA < 0.01) discard;
  float core = 1.0 - smoothstep(0.0, 0.7, r);
  vec3 hot = mix(vec3(2.2, 0.55, 0.10), vec3(5.0, 2.6, 0.9), core * vHeat);
  vec3 smoke = vec3(0.020, 0.017, 0.015);
  vec3 col = mix(smoke, hot, clamp(vHeat * 1.4 - 0.15 + core * 0.4 * vHeat, 0.0, 1.0));
  float a = body * vA * mix(0.9, 1.0, vHeat);
  gl_FragColor = vec4(col * (vHeat > 0.12 ? 1.0 : 1.0), a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Wt(m, e, d, n, h, c) {
  const w = new ot(),
    s = new et(1, 1);
  ((w.index = s.index), w.setAttribute("position", s.attributes.position));
  const x = new Float32Array(d * 4),
    k = new Float32Array(d * 4);
  for (let M = 0; M < d; M++) {
    const N = e() * 2 - 1,
      T = e() * 6.283,
      S = Math.cbrt(e());
    (x.set(
      [
        Math.sqrt(1 - N * N) * Math.cos(T) * n * S,
        N * n * 0.6 * S,
        Math.sqrt(1 - N * N) * Math.sin(T) * n * S,
        e() * 10,
      ],
      M * 4,
    ),
      k.set([n * (0.45 + e() * 0.6), e() * 0.25, h * (0.5 + e()), 0], M * 4));
  }
  (w.setAttribute("aF", new m0(x, 4)),
    w.setAttribute("aF2", new m0(k, 4)),
    (w.instanceCount = d));
  const P = { ...m, uC: { value: new X() }, uK: { value: -1 } },
    _ = r0({
      vertexShader: wo,
      fragmentShader: bo,
      uniforms: P,
      transparent: !0,
      depthWrite: !1,
    }),
    g = new s0(w, _);
  return (
    (g.name = c),
    (g.frustumCulled = !1),
    (g.renderOrder = 7),
    { mesh: g, uni: P }
  );
}
const yo = `
attribute vec4 aP;        // origin x, y, z, seed
attribute vec4 aP2;       // velocity x, y, z, life
uniform float uK;         // seconds since the burst
uniform float uPx;
varying vec3 vCol;
void main() {
  float t = uK;
  vec3 P = aP.xyz + aP2.xyz * t + vec3(0.0, -4.9 * t * t, 0.0);
  float life = clamp(1.0 - t / aP2.w, 0.0, 1.0);
  vec4 mv = viewMatrix * vec4(P, 1.0);
  gl_Position = projectionMatrix * mv;
  vCol = mix(vec3(3.0, 0.9, 0.2), vec3(6.0, 5.0, 3.5), life * life) * life * step(0.0, t);
  gl_PointSize = clamp(1.6 * uPx * 40.0 / max(-mv.z, 0.5), 1.0, 7.0);
  if (life <= 0.0 || t < 0.0) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  go = `
varying vec3 vCol;
void main() { vec2 q = gl_PointCoord * 2.0 - 1.0; float a = exp(-dot(q, q) * 3.0); if (a < 0.03) discard; gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
