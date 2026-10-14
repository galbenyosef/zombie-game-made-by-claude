// assets/exterior-BqAhvNw2 08 — setattribute
// Lines 1922-2171 of readable/assets/exterior-BqAhvNw2.pretty.js (statement-aligned).
function Ee(t, i) {
  const a = i.length,
    e = new oe(),
    s = new te(1, 1);
  ((e.index = s.index),
    e.setAttribute("position", s.attributes.position),
    e.setAttribute("uv", s.attributes.uv));
  const l = new Float32Array(a * 4),
    d = new Float32Array(a * 4);
  (i.forEach((n, k) => {
    (l.set([...n.p, n.seed], k * 4),
      d.set([n.w, n.h, n.i, n.lean || 0], k * 4));
  }),
    e.setAttribute("aFlame", new f0(l, 4)),
    e.setAttribute("aSizeF", new f0(d, 4)),
    (e.instanceCount = a));
  const v = n0({
      vertexShader: Ve,
      fragmentShader: Oe,
      uniforms: { ...t },
      transparent: !0,
      depthWrite: !1,
      blending: A0,
      side: P0,
    }),
    x = new e0(e, v);
  return (
    (x.name = "city_flames"),
    (x.frustumCulled = !1),
    (x.renderOrder = 6),
    x
  );
}
const We = `
attribute vec2 aT;        // along 0..1, side -1..1
attribute vec4 aBase;     // x, y, z, height
attribute vec4 aShape;    // width at base, width at top, drift x, drift z
attribute vec4 aMisc;     // seed, density, fire light, speed
varying vec2 vT;
varying vec4 vMisc;
varying vec3 vWorld;
varying float vW;
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
  vT = aT; vMisc = aMisc; vWorld = P; vW = w;
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  De = `
varying vec2 vT;
varying vec4 vMisc;
varying vec3 vWorld;
varying float vW;
uniform float uMoonR;
${c0}
${m0}
${N0}
void main() {
  float t = vT.x, s = vT.y;
  float sp = vMisc.w;
  float scroll = uTime * 0.045 * sp;
  vec2 q = vec2(s * 0.9 + vMisc.x * 3.0, t * 5.0 - scroll);
  float big = exFbm3(q);
  float det = exFbm(q * 2.6 + vec2(5.0, -scroll * 1.5));
  float edge = abs(s) * (0.9 + 0.2 * t) + (big - 0.5) * 1.1 + (det - 0.5) * 0.35;
  float body = (1.0 - smoothstep(0.25, 0.92, edge)) * (1.0 - smoothstep(0.62, 1.0, abs(s)));
  float dens = body * smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.45, 1.0, t)) * vMisc.y;
  dens *= 0.60 + 0.8 * det;
  vec3 V = normalize(vWorld - cameraPosition);
  // in front of the moon the smoke is only ever a veil (the moon is the hero of the bedroom window)
  float mAng = length(cross(V, uMoonDir));
  dens *= mix(0.32, 1.0, smoothstep(0.03, 0.075, mAng));
  if (dens < 0.003) discard;
  // dark smoke: thick cores shade themselves, its own fire lights the underside, the city glow the rest,
  // thin edges in front of the moon catch its red light
  float thick = smoothstep(0.3, 0.95, dens);
  vec3 smoke = vec3(0.018, 0.016, 0.015) * (1.0 - 0.5 * thick);
  vec3 L = skyAmbient(vec3(0.0, 1.0, 0.0)) * 0.8 + skyAmbient(-V) * 0.5;
  vec3 fireL = vec3(1.0, 0.33, 0.08) * vMisc.z * (exp(-t * 10.0) + 0.06 * exp(-t * 3.0)) * (0.4 + 0.9 * (1.0 - det));
  vec3 col = smoke * (L * 6.0 + fireL * 9.0);
  float thin = 1.0 - smoothstep(0.05, 0.5, dens);
  float mf = dot(V, uMoonDir);
  col += vec3(1.0, 0.10, 0.04) * (smoothstep(0.9960, 0.9995, mf) * 0.45 + smoothstep(0.975, 0.997, mf) * 0.012) * thin;
  col += vec3(0.0030, 0.0040, 0.0056) * smoothstep(0.3, 0.9, abs(s)) * (1.0 - thick);
  col = applyHaze(col, vWorld);
  float a = clamp(dens * 1.35, 0.0, 0.96);
  gl_FragColor = vec4(col, a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ge(t, i) {
  const e = [],
    s = [],
    l = [],
    d = [],
    v = [];
  let x = 0;
  for (const p of i) {
    for (let b = 0; b <= 56; b++) {
      const N = Math.pow(b / 56, 1.25);
      for (const o of [-1, 1])
        (e.push(N, o),
          s.push(...p.p, p.h),
          l.push(p.w0, p.w1, p.dx, p.dz),
          d.push(p.seed, p.dens, p.fire, p.speed ?? 1));
      if (b < 56) {
        const o = x + b * 2;
        v.push(o, o + 1, o + 2, o + 1, o + 3, o + 2);
      }
    }
    x += 114;
  }
  const n = new z0();
  (n.setAttribute("position", new o0(new Float32Array(x * 3), 3)),
    n.setAttribute("aT", new o0(e, 2)),
    n.setAttribute("aBase", new o0(s, 4)),
    n.setAttribute("aShape", new o0(l, 4)),
    n.setAttribute("aMisc", new o0(d, 4)),
    n.setIndex(v));
  const k = n0({
      vertexShader: We,
      fragmentShader: De,
      uniforms: { ...t },
      transparent: !0,
      depthWrite: !1,
      side: P0,
    }),
    m = new e0(n, k);
  return (
    (m.name = "city_smoke"),
    (m.frustumCulled = !1),
    (m.renderOrder = 4),
    m
  );
}
const qe = `
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
  P.x += -1.1 * tt + sin(tt * 1.3 + s * 7.0) * 1.4 + (h1 - 0.5) * tt * 0.8;
  P.z += cos(tt * 1.1 + s * 3.0) * 1.2 + 0.25 * tt;
  vec4 mv = viewMatrix * vec4(P, 1.0);
  gl_Position = projectionMatrix * mv;
  float fade = smoothstep(0.0, 0.06, age) * (1.0 - smoothstep(0.55, 1.0, age));
  float tw = 0.55 + 0.45 * sin(uTime * (9.0 + h2 * 9.0) + s * 20.0);
  vCol = vec3(3.2, 0.95, 0.22) * fade * tw;
  gl_PointSize = clamp(aEm2.w * uPx * 45.0 / max(-mv.z, 0.5), 1.0, 9.0);
}
`,
  $e = `
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
function je(t, i, a) {
  const e = [];
  for (const k of i)
    for (let m = 0; m < k.n; m++)
      e.push([
        ...k.p,
        a() * 100,
        k.rise * (0.7 + a() * 0.6),
        k.life * (0.7 + a() * 0.6),
        k.spread,
        0.6 + a() * 0.8,
      ]);
  const s = e.length,
    l = new Float32Array(s * 4),
    d = new Float32Array(s * 4);
  e.forEach((k, m) => {
    (l.set(k.slice(0, 4), m * 4), d.set(k.slice(4, 8), m * 4));
  });
  const v = new z0();
  (v.setAttribute("position", new o0(new Float32Array(s * 3), 3)),
    v.setAttribute("aEm", new k0(l, 4)),
    v.setAttribute("aEm2", new k0(d, 4)));
  const x = n0({
      vertexShader: qe,
      fragmentShader: $e,
      uniforms: { ...t },
      transparent: !0,
      depthWrite: !1,
      blending: A0,
    }),
    n = new D0(v, x);
  return (
    (n.name = "city_embers"),
    (n.frustumCulled = !1),
    (n.renderOrder = 6),
    n
  );
}
function Z0(t, i = [3, 2]) {
  const a = [];
  return (
    i[1] > t.z + t.d / 2 && a.push({ nx: 0, nz: 1 }),
    i[1] < t.z - t.d / 2 && a.push({ nx: 0, nz: -1 }),
    i[0] > t.x + t.w / 2 && a.push({ nx: 1, nz: 0 }),
    i[0] < t.x - t.w / 2 && a.push({ nx: -1, nz: 0 }),
    a
  );
}
function B0(t, i, a, e, s = 0.4) {
  const l = i.nz ? t.w : t.d,
    d = Math.max(1, Math.floor(l / t.bay + 0.5)),
    v = l / d,
    x = (a + 0.5) * v - l / 2,
    n = t.flH * 1.3,
    k = e === 0 ? n * 0.45 : n + (e - 1) * t.flH + t.flH * 0.5,
    m = i.nz,
    p = -i.nx,
    b = t.x + m * x + i.nx * (t.w / 2 + s),
    N = t.z + p * x + i.nz * (t.d / 2 + s);
  return { x: b, y: t.base + k, z: N, nb: d };
}
