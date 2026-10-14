// assets/city-COfbVKUz 11 — setattribute
// Lines 3146-3427 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
const Oe = `
attribute vec4 aFlame;    // x, y, z (base), seed
attribute vec4 aSizeF;    // width, height, intensity, lean
varying vec2 vUv;
varying float vSeed;
varying float vI;
varying float vHaze;
uniform float uHazeK;
void main() {
  vec3 base = aFlame.xyz;
  vec3 toCam = cameraPosition - base;
  vec3 right = normalize(vec3(toCam.z, 0.0, -toCam.x));
  float w = aSizeF.x, h = aSizeF.y;
  vec3 P = base + right * position.x * w + vec3(0.0, (position.y + 0.5) * h, 0.0) + right * aSizeF.w * (position.y + 0.5) * h * 0.3;
  vUv = position.xy + 0.5;
  vSeed = aFlame.w; vI = aSizeF.z;
  float dist = length(P - cameraPosition);
  vHaze = 1.0 - exp(-dist * uHazeK * 1.4);
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  $e = `
varying vec2 vUv;
varying float vSeed;
varying float vI;
varying float vHaze;
${u0}
uniform float uTime;
void main() {
  vec2 uv = vUv;
  float t = uTime;
  float n = c3fbm3(vec2(uv.x * 2.6 + vSeed * 7.0, uv.y * 2.0 - t * 2.2 + vSeed));
  float n2 = c3fbm3(vec2(uv.x * 6.0 - vSeed, uv.y * 4.5 - t * 3.7));
  float x = abs(uv.x - 0.5 + (n - 0.5) * 0.45 * uv.y);
  float wdt = 0.48 * pow(1.0 - uv.y, 0.7);
  float body = 1.0 - smoothstep(wdt * 0.2, wdt, x + (n2 - 0.5) * 0.18);
  body *= 1.0 - smoothstep(0.25, 0.92, uv.y + (n - 0.5) * 0.75);
  body *= smoothstep(0.0, 0.10, uv.y);
  float heat = body * (1.15 - uv.y * 0.9) * (0.75 + 0.5 * n2);
  vec3 c = mix(vec3(0.55, 0.05, 0.008), vec3(1.7, 0.36, 0.05), smoothstep(0.15, 0.6, heat));
  c = mix(c, vec3(3.2, 1.1, 0.25), smoothstep(0.65, 1.05, heat));
  float flick = 0.8 + 0.2 * sin(t * 13.0 + vSeed * 31.0);
  vec3 col = c * body * vI * flick * (1.0 - 0.85 * vHaze);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Z0(m, e, d = "city3_flames") {
  const n = Math.max(1, e.length),
    h = new ot(),
    c = new et(1, 1);
  ((h.index = c.index),
    h.setAttribute("position", c.attributes.position),
    h.setAttribute("uv", c.attributes.uv));
  const w = new Float32Array(n * 4),
    s = new Float32Array(n * 4);
  e.forEach((g, M) => {
    (w.set([g.p[0], g.p[1], g.p[2], g.seed], M * 4),
      s.set([g.w, g.h, g.i, g.lean || 0], M * 4));
  });
  const x = new m0(w, 4),
    k = new m0(s, 4);
  (h.setAttribute("aFlame", x),
    h.setAttribute("aSizeF", k),
    (h.instanceCount = e.length));
  const P = r0({
      vertexShader: Oe,
      fragmentShader: $e,
      uniforms: { ...m },
      transparent: !0,
      depthWrite: !1,
      blending: rt,
      side: E0,
    }),
    _ = new s0(h, P);
  return (
    (_.name = d),
    (_.frustumCulled = !1),
    (_.renderOrder = 6),
    (_.userData.attrs = { aF: x, aS: k }),
    _
  );
}
const Xe = `
attribute vec2 aT;        // along 0..1, side -1..1
attribute vec4 aBase;     // x, y, z, height
attribute vec4 aShape;    // width at base, width at top, drift x, drift z
attribute vec4 aMisc;     // seed, density, fire light, speed
varying vec2 vT;
varying vec4 vMisc;
varying vec3 vWorld;
varying vec3 vSide;
uniform float uTime;
vec3 pathAt(float t) {
  float f = pow(t, 1.35);
  vec3 p = aBase.xyz + vec3(aShape.z * f, aBase.w * t, aShape.w * f);
  float s = aMisc.x;
  p.x += sin(t * 5.0 + s + uTime * 0.05) * aBase.w * 0.035 * t;
  p.z += cos(t * 4.0 + s * 1.3) * aBase.w * 0.03 * t;
  return p;
}
void main() {
  float t = aT.x;
  vec3 P = pathAt(t);
  vec3 Tn = normalize(pathAt(min(t + 0.02, 1.0)) - pathAt(max(t - 0.02, 0.0)));
  vec3 toCam = normalize(cameraPosition - P);
  vec3 S = normalize(cross(Tn, toCam));
  float w = mix(aShape.x, aShape.y, pow(t, 0.75));
  P += S * aT.y * w * 0.5;
  vT = aT; vMisc = aMisc; vWorld = P; vSide = S;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  Ye = `
varying vec2 vT;
varying vec4 vMisc;
varying vec3 vWorld;
varying vec3 vSide;
${u0}
${g0}
${F0}
void main() {
  float t = vT.x, s = vT.y;
  float sp = vMisc.w;
  float scroll = uTime * 0.045 * sp;
  vec2 q = vec2(s * 0.9 + vMisc.x * 3.0, t * 5.0 - scroll);
  float big = c3fbm3(q);
  float det = c3fbm(q * 2.6 + vec2(5.0, -scroll * 1.5));
  float edge = abs(s) * (0.9 + 0.2 * t) + (big - 0.5) * 1.1 + (det - 0.5) * 0.35;
  float body = (1.0 - smoothstep(0.25, 0.92, edge)) * (1.0 - smoothstep(0.62, 1.0, abs(s)));
  float dens = body * smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.45, 1.0, t)) * vMisc.y;
  dens *= 0.60 + 0.8 * det;
  if (dens < 0.003) discard;
  vec3 V = normalize(vWorld - cameraPosition);
  // dark smoke: thick cores shade themselves; its own fire lights the underside; the dawn and the sky the rest (the side
  // toward the east the brightest)
  float thick = smoothstep(0.3, 0.95, dens);
  vec3 smoke = vec3(0.085, 0.080, 0.076) * (1.0 - 0.5 * thick);
  float east = c3dawnAz(vSide * sign(s + 1e-4));
  vec3 L = c3skyAmb(vec3(0.0, 1.0, 0.0)) * 0.7 + c3skyAmb(-V) * 0.5 + vec3(0.030, 0.036, 0.046) * pow(east, 3.0) * (0.55 + 0.45 * uDawn) * (1.0 - thick);
  vec3 fireL = vec3(1.0, 0.33, 0.08) * vMisc.z * (exp(-t * 9.0) * 1.2 + 0.08 * exp(-t * 2.5)) * (0.4 + 0.9 * (1.0 - det));
  vec3 col = smoke * (L * 2.2 + fireL * 3.5);
  col = cityHaze(col, vWorld);
  float a = clamp(dens * 1.6, 0.0, 0.97);
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ue(m, e, d = "city3_smoke") {
  const h = [],
    c = [],
    w = [],
    s = [],
    x = [];
  let k = 0;
  for (const M of e) {
    for (let N = 0; N <= 48; N++) {
      const T = Math.pow(N / 48, 1.25);
      for (const S of [-1, 1])
        (h.push(T, S),
          c.push(...M.p, M.h),
          w.push(M.w0, M.w1, M.dx, M.dz),
          s.push(M.seed, M.dens, M.fire, M.speed ?? 1));
      if (N < 48) {
        const S = k + N * 2;
        x.push(S, S + 1, S + 2, S + 1, S + 3, S + 2);
      }
    }
    k += 98;
  }
  const P = new v0();
  (P.setAttribute("position", new e0(new Float32Array(Math.max(3, k * 3)), 3)),
    P.setAttribute("aT", new e0(h, 2)),
    P.setAttribute("aBase", new e0(c, 4)),
    P.setAttribute("aShape", new e0(w, 4)),
    P.setAttribute("aMisc", new e0(s, 4)),
    P.setIndex(k > 65535 ? new Pt(x, 1) : new At(x, 1)));
  const _ = r0({
      vertexShader: Xe,
      fragmentShader: Ye,
      uniforms: { ...m },
      transparent: !0,
      depthWrite: !1,
      side: E0,
    }),
    g = new s0(P, _);
  return ((g.name = d), (g.frustumCulled = !1), (g.renderOrder = 4), g);
}
const Ze = `
attribute vec4 aEm;       // source x, y, z, seed
attribute vec4 aEm2;      // rise speed, life, spread, size
varying vec3 vCol;
uniform float uTime;
uniform float uPx;
uniform vec2 uWind;
void main() {
  float s = aEm.w;
  float life = aEm2.y;
  float age = fract(uTime / life + s * 0.61);
  float cyc = floor(uTime / life + s * 0.61);
  float h1 = fract(sin(s * 91.7 + cyc * 17.3) * 43758.5);
  float h2 = fract(sin(s * 37.1 + cyc * 7.9) * 24634.6);
  float tt = age * life;
  vec3 P = aEm.xyz + vec3((h1 - 0.5) * aEm2.z, 0.0, (h2 - 0.5) * aEm2.z);
  P.y += aEm2.x * tt - 0.02 * tt * tt;
  P.xz += uWind * tt * 1.4 + vec2(sin(tt * 1.3 + s * 7.0), cos(tt * 1.1 + s * 3.0)) * 1.3;
  vec4 mv = viewMatrix * vec4(P, 1.0);
  gl_Position = projectionMatrix * mv;
  float fade = smoothstep(0.0, 0.06, age) * (1.0 - smoothstep(0.55, 1.0, age));
  float tw = 0.55 + 0.45 * sin(uTime * (9.0 + h2 * 9.0) + s * 20.0);
  vCol = vec3(3.2, 0.95, 0.22) * fade * tw;
  gl_PointSize = clamp(aEm2.w * uPx * 45.0 / max(-mv.z, 0.5), 1.0, 9.0);
}
`,
  Je = `
varying vec3 vCol;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float a = exp(-dot(q, q) * 3.5);
  if (a < 0.02) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Qe(m, e, d) {
  const n = [];
  for (const P of e)
    for (let _ = 0; _ < P.n; _++)
      n.push([
        ...P.p,
        d() * 100,
        P.rise * (0.7 + d() * 0.6),
        P.life * (0.7 + d() * 0.6),
        P.spread,
        0.6 + d() * 0.8,
      ]);
  const h = Math.max(1, n.length),
    c = new Float32Array(h * 4),
    w = new Float32Array(h * 4);
  n.forEach((P, _) => {
    (c.set(P.slice(0, 4), _ * 4), w.set(P.slice(4, 8), _ * 4));
  });
  const s = new v0();
  (s.setAttribute("position", new e0(new Float32Array(h * 3), 3)),
    s.setAttribute("aEm", new q0(c, 4)),
    s.setAttribute("aEm2", new q0(w, 4)),
    s.setDrawRange(0, n.length));
  const x = r0({
      vertexShader: Ze,
      fragmentShader: Je,
      uniforms: { ...m },
      transparent: !0,
      depthWrite: !1,
      blending: rt,
    }),
    k = new _t(s, x);
  return (
    (k.name = "city3_embers"),
    (k.frustumCulled = !1),
    (k.renderOrder = 6),
    k
  );
}
function It(m, e, d, n, h, c = 0.4) {
  const w = d ? m.w : m.d,
    s = Math.max(1, Math.floor(w / m.bay + 0.5)),
    x = w / s,
    k = (n + 0.5) * x - w / 2,
    P = m.groundH || m.flH * 1.3,
    _ = h === 0 ? P * 0.45 : P + (h - 1) * m.flH + m.flH * 0.5,
    g = d,
    M = -e;
  return {
    x: m.x + g * k + e * (m.w / 2 + c),
    y: m.base + _,
    z: m.z + M * k + d * (m.d / 2 + c),
    nb: s,
  };
}
