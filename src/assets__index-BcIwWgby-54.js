// assets__index-BcIwWgby 54 — math
// Lines 16367-16676 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Rc(s, o, t, u = {}) {
  const e = [],
    r = (f, h, c, M = 1) => {
      const m = [f, h, c, t(), t(), t(), t(), M];
      (f > 1 && f < 11 && c > 197.8 && c < 209.2) || e.push(m);
    },
    a = (f, h, c = 2.2) => o.heightAt(f, h) + 0.3 + Math.pow(t(), 1.5) * c;
  for (let f = 0; f < 140 && e.length < 56; f++) {
    const h = Math.floor(t() * o.stream.n),
      c = o.stream.x[h],
      M = o.stream.z[h];
    if (
      c < -26 ||
      c > 28 ||
      Math.abs(c - 2.5) < 2.5 ||
      (Math.abs(c - 2.5) > 14 && t() < 0.5)
    )
      continue;
    const m = (t() - 0.5) * 4.5;
    r(c - o.stream.tz[h] * m, -1.75 + t() * 1.9, M + o.stream.tx[h] * m, 1.1);
  }
  if (u.warn) {
    const [f, h, c] = u.warn;
    for (let M = 0, m = 0; M < 18 && m < 200; m++) {
      const k = t() * Math.PI * 2,
        S = Math.sqrt(t()) * c,
        A = f + Math.cos(k) * S,
        b = h + Math.sin(k) * S;
      o.sdAt(A, b) < 0.6 || (r(A, a(A, b, 1.8), b, 0.85), M++);
    }
  }
  for (let f = 0, h = 0; f < 200 && h < 22; f++) {
    const c = t() * Math.PI * 2,
      M = Math.sqrt(t()),
      m = R0.x + Math.cos(c) * M * R0.rx,
      k = R0.z + Math.sin(c) * M * R0.rz;
    o.clearingSd(m, k) > 0 ||
      o.dPathAt(m, k) < 4 ||
      (m > 1 && m < 11 && k > 198 && k < 209) ||
      (r(m, 0.3 + Math.pow(t(), 1.3) * 1.8, k, 0.8), h++);
  }
  const p = e.length,
    i = new Float32Array(p * 3),
    d = new Float32Array(p * 4),
    y = new Float32Array(p);
  e.forEach((f, h) => {
    (i.set([f[0], f[1], f[2]], h * 3),
      d.set([f[3], f[4], f[5], f[6]], h * 4),
      (y[h] = f[7]));
  });
  const w = new Rt();
  (w.setAttribute("position", new vt(i, 3)),
    w.setAttribute("aSeed", new vt(d, 4)),
    w.setAttribute("aK", new vt(y, 1)),
    (w.boundingSphere = new hs(new dt(0, 0, 140), 120)));
  const g = {
      uScale: { value: 600 },
      uScare: { value: Array.from({ length: 4 }, () => new H0(0, 0, 0, -99)) },
      uScareD: { value: new H0(0, 0, 0, 0) },
      uCol: { value: new Xt(0.75, 1, 0.3) },
    },
    z = new P0({
      uniforms: { ...ko.merge([So.fog]), ...g },
      vertexShader: `
attribute vec4 aSeed;
attribute float aK;
uniform float uFT, uScale;
uniform vec4 uScare[4];
uniform vec4 uScareD;
varying float vGlow;
varying float vFogDepth;
varying vec3 vFW;
void main() {
  float t = uFT;
  vec4 s = aSeed;
  // the wander: slow loops, each its own
  vec3 p = position;
  p.x += sin(t * (0.21 + s.x * 0.2) + s.y * 40.0) * (0.5 + s.z * 0.7) + sin(t * (0.53 + s.w * 0.3) + s.x * 17.0) * 0.18;
  p.z += cos(t * (0.17 + s.y * 0.22) + s.z * 33.0) * (0.5 + s.x * 0.7) + cos(t * (0.61 + s.z * 0.3) + s.w * 11.0) * 0.18;
  p.y += sin(t * (0.3 + s.w * 0.25) + s.x * 23.0) * (0.25 + s.y * 0.3);
  // the flash: most blink (a quick swell, a slow fade, a dark pause), some glow steadily and dim
  float period = 2.2 + s.y * 4.5, ph = fract(t / period + s.z);
  float flash = smoothstep(0.0, 0.08, ph) * (1.0 - smoothstep(0.08, 0.42, ph));
  float glow = s.w < 0.22 ? 0.35 + 0.15 * sin(t * 1.3 + s.x * 30.0) : flash;
  // the scares: dark at once, flung up and away, back when it is over
  float dark = 1.0;
  for (int i = 0; i < 4; i++) {
    vec4 sc = uScare[i];
    float dur = i == 0 ? uScareD.x : i == 1 ? uScareD.y : i == 2 ? uScareD.z : uScareD.w;
    float age = t - sc.w;
    if (age < 0.0 || age > dur + 2.5 || sc.z <= 0.0) continue;
    vec2 d = position.xz - sc.xy; float dl = length(d);
    if (dl > sc.z) continue;
    float edge = 1.0 - smoothstep(sc.z * 0.7, sc.z, dl);
    float off = smoothstep(0.0, 0.25, age) * (1.0 - smoothstep(dur, dur + 2.5, age));
    dark = min(dark, 1.0 - off * edge);
    float fling = (1.0 - exp(-age * 1.8)) * (1.0 - smoothstep(dur, dur + 2.5, age)) * edge;
    p.xz += (dl > 1e-3 ? d / dl : vec2(0.0)) * fling * (2.0 + s.x * 2.0);
    p.y += fling * (1.5 + s.y * 2.0);
  }
  vGlow = glow * dark * aK;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(0.2 * uScale / -mv.z, 2.5, 44.0) * (0.55 + 0.45 * glow);
  vFogDepth = -mv.z; vFW = p;
  if (vGlow < 0.01) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);          // (a dark one is not drawn)
}`,
      fragmentShader: `
uniform vec3 uCol;
varying float vGlow;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5; float d = length(c);
  if (d > 0.5) discard;
  float core = smoothstep(0.13, 0.02, d), halo = smoothstep(0.5, 0.0, d);
  vec3 col = uCol * (core * 4.0 + halo * halo * halo * 0.9) * vGlow;
  #ifdef USE_FOG
    float fogK = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth * 0.6);
    col *= 1.0 - fogK;
  #endif
  gl_FragColor = vec4(col, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
      fog: !0,
    });
  ((z.uniforms.uFT = K0.uFT), Object.assign(z.uniforms, K0));
  const x = new Do(w, z);
  ((x.name = "forest_fireflies"), (x.frustumCulled = !1), (x.renderOrder = 33));
  let v = 0;
  return {
    points: x,
    api: {
      scare(f, h, c = 6, M = 6) {
        const m = v++ % 4;
        (g.uScare.value[m].set(f, h, c, K0.uFT.value),
          g.uScareD.value.setComponent(m, M));
      },
      reset() {
        for (const f of g.uScare.value) f.set(0, 0, 0, -99);
      },
      get count() {
        return p;
      },
    },
    update: (f) => {
      g.uScale.value =
        s.game.post.size.y / (2 * Math.tan((f.fov * Math.PI) / 360));
    },
  };
}
function Nc(s, o, t, u) {
  const e = [],
    r = (g, z) => {
      const x = Math.floor((g - u.box.x0) / 0.5),
        v = Math.floor((z - u.box.z0) / 0.5);
      return x < 0 || v < 0 || x >= u.nx || v >= u.nz
        ? 1
        : u.data[v * u.nx + x] / 255;
    };
  for (let g = 0; g < 8e3 && e.length < 9; g++) {
    const z = -42 + o() * 84,
      x = 80 + o() * 128,
      v = s.sdAt(z, x);
    if (
      v < -2.5 ||
      v > 7 ||
      r(z, x) > 0.35 ||
      (z > _t.x0 - 7 && z < _t.x1 + 7 && x > _t.z0 - 7 && x < _t.z1 + 7)
    )
      continue;
    let l = 0;
    for (let f = 0; f < 6; f++)
      l += r(z + Math.cos(f) * 4, x + Math.sin(f) * 4);
    l / 6 < 0.35 ||
      e.some((f) => Math.hypot(f[0] - z, f[1] - x) < 16) ||
      e.push([z, x, 0.9 + o() * 0.9, o()]);
  }
  const a = new Po(),
    p = new m0(1, 1).translate(0, 0.5, 0);
  ((a.index = p.index),
    a.setAttribute("position", p.attributes.position),
    a.setAttribute("uv", p.attributes.uv));
  const i = new Float32Array(e.length * 4),
    d = new Float32Array(e.length * 2);
  (e.forEach(([g, z, x, v], n) => {
    (i.set([g, s.heightAt(g, z) - 0.3, z, x], n * 4),
      d.set([v, 16 + v * 10], n * 2));
  }),
    a.setAttribute("aB", new M0(i, 4)),
    a.setAttribute("aS", new M0(d, 2)),
    (a.instanceCount = e.length));
  const y = new P0({
      uniforms: {
        uFT: K0.uFT,
        uMoon: { value: t.clone() },
        uCol: { value: new Xt(0.32, 0.42, 0.6) },
        uK: { value: 0.006 },
      },
      vertexShader: `
attribute vec4 aB;     // base (on the ground), width
attribute vec2 aS;     // seed, length
uniform vec3 uMoon;
varying vec2 vUv;
varying float vFade;
varying float vSeed;
void main() {
  vec3 base = aB.xyz, ax = normalize(uMoon);
  vec3 toCam = normalize(cameraPosition - base);
  vec3 right = normalize(cross(ax, toCam));
  vec3 wp = base + right * position.x * aB.w + ax * position.y * aS.y;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  vUv = uv; vSeed = aS.x;
  // (gone when the eye is in it or close; faint far off)
  float dc = length(cameraPosition - (base + ax * clamp(dot(cameraPosition - base, ax), 0.0, aS.y)));
  vFade = smoothstep(2.5, 9.0, dc) * (1.0 - smoothstep(30.0, 60.0, -mv.z));
}`,
      fragmentShader: `
uniform float uFT, uK;
uniform vec3 uCol;
varying vec2 vUv;
varying float vFade;
varying float vSeed;
float h1(float x) { return fract(sin(x * 91.7) * 43758.5453); }
float n1(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(h1(i), h1(i + 1.0), f); }
void main() {
  // (a soft gaussian across: a thread of lit mist, never a hard line, even edge-on far off)
  float xa = (vUv.x - 0.5) * 2.0;
  float across = exp(-xa * xa * 3.0) * (1.0 - smoothstep(0.7, 1.0, abs(xa)));
  float streak = 0.55 + 0.45 * n1(vUv.x * 9.0 + vSeed * 30.0 + uFT * 0.05) * n1(vUv.x * 23.0 - uFT * 0.03 + vSeed * 11.0);
  float along = smoothstep(0.0, 0.08, vUv.y) * (1.0 - smoothstep(0.55, 1.0, vUv.y));
  float a = across * streak * along * vFade * (0.7 + 0.3 * sin(uFT * 0.3 + vSeed * 20.0));
  gl_FragColor = vec4(uCol * a * uK, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
      side: p0,
    }),
    w = new bt(a, y);
  return (
    (w.name = "forest_moonbeams"),
    (w.frustumCulled = !1),
    (w.renderOrder = 34),
    { mesh: w, count: e.length }
  );
}
function Lc(s, o) {
  const t = s.length,
    u = new Float32Array(t * 3),
    e = new Float32Array(t),
    r = new Float32Array(t);
  s.forEach((d, y) => {
    (u.set([d.pos.x, d.pos.y, d.pos.z], y * 3),
      (e[y] = y),
      (r[y] = d.stone ? 0.55 : 1));
  });
  const a = new Rt();
  (a.setAttribute("position", new vt(u, 3)),
    a.setAttribute("aLamp", new vt(e, 1)),
    a.setAttribute("aK", new vt(r, 1)));
  const p = new P0({
      uniforms: {
        uFT: K0.uFT,
        uGlow: o,
        uScale: { value: 600 },
        uCol: { value: new Xt(1, 0.5, 0.17) },
      },
      vertexShader: `
attribute float aLamp;
attribute float aK;
uniform float uFT, uScale;
uniform float uGlow[${zo}];
varying float vK;
float lampFlicker(float t, float i) { return 0.9 + 0.055 * sin(t * 7.3 + i * 1.7) + 0.035 * sin(t * 13.1 + i * 3.1) * sin(t * 2.3 + i) + 0.02 * sin(t * 23.0 + i * 5.3); }
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  float d = -mv.z;
  int li = int(aLamp + 0.5); float g = 0.0;
  for (int k = 0; k < ${zo}; k++) if (k == li) g = uGlow[k];
  // (a halo about a metre and a half across; kept a few pixels wide far off; near ones fade, the air glow has them)
  gl_PointSize = clamp(1.5 * uScale / d, 10.0, 180.0);
  vK = g * lampFlicker(uFT, aLamp) * aK * smoothstep(1.2, 4.0, d) * (1.0 - smoothstep(70.0, 110.0, d)) * (0.6 + 0.4 * smoothstep(6.0, 30.0, d));
  if (vK < 0.002) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}`,
      fragmentShader: `
uniform vec3 uCol;
varying float vK;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  if (d > 1.0) discard;
  float h = exp(-d * d * 7.0) * 0.55 + exp(-d * d * 30.0) * 0.6;
  gl_FragColor = vec4(uCol * h * vK * 0.55, 1.0);
}`,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
    }),
    i = new Do(a, p);
  return (
    (i.name = "forest_lantern_halos"),
    (i.frustumCulled = !1),
    (i.renderOrder = 35),
    { pts: i, mat: p }
  );
}
const Us = Math.PI * 2;
