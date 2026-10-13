// assets__index-BcIwWgby 26 — level
// Lines 7683-8024 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
const Ar = `
attribute vec4 aFlame;          // x: lit 0..1, y: seed, z: size (m), w: how much it moves
uniform float uT;
uniform float uGust;
uniform vec3 uGustFrom;
varying vec2 vUv;
varying float vLit;
varying float vHot;
float fh(float n) { return fract(sin(n) * 43758.5453); }
float fn(float x) { float i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(fh(i), fh(i + 1.0), f); }
void main() {
  vec3 base = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
  float sd = aFlame.y * 97.0, t = uT * (0.85 + aFlame.y * 0.3);
  float flick = 1.0 + 0.09 * sin(t * 12.7 + sd) + 0.05 * sin(t * 23.3 + sd * 1.7) + 0.16 * (fn(t * 2.3 + sd) - 0.5);
  // the gust: toward the flames from the doors, stronger the nearer; it flattens and stretches them
  vec3 away = base - uGustFrom; away.y = 0.0; float dist = length(away); away /= max(dist, 0.01);
  float g = uGust * aFlame.w * clamp(1.6 - dist * 0.06, 0.25, 1.4) * (0.7 + 0.6 * fn(uT * 9.0 + sd));
  float s = aFlame.z;
  float h = s * (2.7 * flick * (1.0 - 0.35 * min(g, 1.0))) * mix(0.3, 1.0, aFlame.x);
  float w = s * (0.95 + 0.08 * sin(t * 6.1 + sd));
  vec3 lean = vec3(sin(t * 1.3 + sd) + 0.6 * sin(t * 3.1 + sd * 2.0), 0.0, cos(t * 1.1 + sd * 1.3)) * 0.07 * aFlame.w + away * g * 1.4;
  vec3 up = normalize(vec3(0.0, 1.0, 0.0) + lean);
  vec3 camR = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
  vec3 side = normalize(camR - up * dot(camR, up));
  // the quad: 4.5 flame-widths across and 2.2 flame-heights tall, the wick a little above its foot
  vec3 p = base + side * (uv.x - 0.5) * w * 4.5 + up * (uv.y * 2.2 - 0.32) * h;
  vUv = vec2((uv.x - 0.5) * 4.5, uv.y * 2.2 - 0.32);   // x: flame-widths from the axis, y: flame-heights above the wick
  vLit = aFlame.x * (1.0 - 0.45 * min(g, 1.0));
  vHot = flick;
  gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
}`,
  Pr = `
uniform float uHalo;
varying vec2 vUv;
varying float vLit;
varying float vHot;
void main() {
  if (vLit < 0.004) discard;
  float x = vUv.x, y = vUv.y;
  // the teardrop: widest a third of the way up, a rounded foot, a pointed tip
  float yy = clamp(y, 0.0, 1.0);
  float wdt = 0.5 * pow(max(sin(clamp(yy * 1.05 + 0.04, 0.0, 1.0) * 3.14159), 0.0), 0.7) * (1.0 - 0.45 * yy);
  float d = abs(x) / max(wdt, 0.02);
  float inY = smoothstep(-0.06, 0.06, y) * (1.0 - smoothstep(0.82, 1.0, y));
  float flame = (1.0 - smoothstep(0.72, 1.0, d)) * inY;
  vec3 blue = vec3(0.35, 0.45, 1.6), core = vec3(5.0, 3.4, 1.6), mid = vec3(3.6, 1.45, 0.38), tip = vec3(1.6, 0.4, 0.06);
  vec3 c = mix(mid, core, (1.0 - smoothstep(0.1, 0.65, d)) * (1.0 - smoothstep(0.1, 0.55, y)));
  c = mix(c, tip, smoothstep(0.45, 0.95, y));
  c = mix(blue, c, smoothstep(0.02, 0.2, y));
  // the halo: smoke and dust round the flame catching its light
  float r = length(vec2(x * 0.55, (y - 0.35) * 0.9));
  float halo = exp(-r * r * 2.2) * 0.3 + exp(-r * 1.4) * 0.12;
  vec3 col = c * flame * vHot + vec3(1.0, 0.42, 0.12) * halo * uHalo;
  gl_FragColor = vec4(col * vLit, 1.0);
}`;
function Tr(s, o, t, u, e, { gustFrom: r = [0, 1, 40.5] } = {}) {
  const a = t.length,
    p = (() => {
      const L = Wt(
          [
            [0, 0],
            [1.02, 0],
            [1, 0.03],
            [1, 0.93],
            [0.99, 0.975],
            [0.93, 1],
            [0.84, 0.99],
            [0.62, 0.965],
            [0.3, 0.955],
            [0, 0.955],
          ],
          0,
          0,
          0,
          { segs: 14, tile: 1 },
        ),
        K = [];
      for (const [O, J] of [
        [0.4, 0.55],
        [1.1, 0.3],
        [3.6, 0.42],
      ]) {
        const tt = [];
        for (let G = 0; G <= 5; G++) {
          const q = G / 5;
          tt.push([Math.cos(O) * 1.03, 0.99 - q * J, Math.sin(O) * 1.03]);
        }
        const st = Q0(tt, 0.1, 6, 5);
        (st.scale(1, 1, 1), K.push(st));
      }
      const j = us([L, ...K]);
      return (
        j.deleteAttribute("uv"),
        j.setAttribute(
          "uv",
          new vt(new Float32Array(j.attributes.position.count * 2), 2),
        ),
        j
      );
    })(),
    i = u.wax,
    d = new l0(p, i, a);
  ((d.name = "church_candles"), (d.castShadow = !1), (d.receiveShadow = !0));
  const y = new Float32Array(a * 2),
    w = new wt(),
    g = new w0(),
    z = new pe(),
    x = new dt(),
    v = new dt();
  (t.forEach((L, K) => {
    (z.set((e() - 0.5) * 0.04, e() * 6.283, (e() - 0.5) * 0.04),
      g.setFromEuler(z),
      d.setMatrixAt(
        K,
        w.compose(v.set(L.x, L.y, L.z), g, x.set(L.r, L.h, L.r)),
      ),
      (y[K * 2] = L.lit ? 1 : 0),
      (y[K * 2 + 1] = L.h));
  }),
    p.setAttribute("aWax", new M0(y, 2)));
  const n = new Xt();
  (t.forEach((L, K) => {
    const j = e();
    (j < 0.05
      ? n.setRGB(0.75, 0.16, 0.12)
      : j < 0.3
        ? n.setRGB(1, 0.9, 0.7)
        : j < 0.45
          ? n.setRGB(1.05, 1.03, 1)
          : n.setRGB(0.97, 0.93, 0.84),
      d.setColorAt(K, n));
  }),
    o.add(d));
  const l = t.filter((L) => L.votive);
  let f = null;
  if (l.length) {
    const L = Wt(
        [
          [0, 0],
          [0.034, 0],
          [0.036, 0.004],
          [0.035, 0.06],
          [0.037, 0.075],
          [0.033, 0.077],
          [0.03, 0.066],
          [0.03, 0.006],
          [0, 0.006],
        ],
        0,
        0,
        0,
        { segs: 16, tile: 1 },
      ),
      K = new P0({
        uniforms: { uT: { value: 0 } },
        vertexShader: `attribute vec2 aV; varying float vY; varying float vLit; varying vec3 vN; varying vec3 vV;
        void main() { vY = position.y / 0.077; vLit = aV.x; vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix * instanceMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,
        fragmentShader: `uniform float uT; varying float vY; varying float vLit; varying vec3 vN; varying vec3 vV;
        void main() { float rim = pow(1.0 - abs(dot(normalize(vN), vV)), 2.0);
          float band = smoothstep(0.05, 0.35, vY) * (1.0 - smoothstep(0.75, 1.0, vY));
          vec3 lit = vec3(2.6, 0.22, 0.08) * (0.55 + 0.45 * band) * (0.8 + 0.6 * rim);
          vec3 dark = vec3(0.09, 0.012, 0.01) * (0.4 + rim);
          gl_FragColor = vec4(mix(dark, lit, vLit), 1.0); }`,
      });
    ((f = new l0(L, K, l.length)), (f.name = "church_votives"));
    const j = new Float32Array(l.length * 2);
    (l.forEach((O, J) => {
      const tt = O.scale || 1;
      (f.setMatrixAt(
        J,
        w.compose(
          v.set(O.x, O.y - 0.006 * tt, O.z),
          g.identity(),
          x.set(tt, tt, tt),
        ),
      ),
        (j[J * 2] = O.lit ? 1 : 0),
        (O.vk = J));
    }),
      L.setAttribute("aV", new M0(j, 2)),
      o.add(f));
  }
  const h = t.filter((L) => L.lit),
    c = new m0(1, 1, 1, 1);
  c.translate(0.5, 0.5, 0);
  const M = {
      uT: { value: 0 },
      uGust: { value: 0 },
      uGustFrom: { value: new dt(...r) },
      uHalo: { value: 1 },
    },
    m = new P0({
      uniforms: M,
      vertexShader: Ar,
      fragmentShader: Pr,
      transparent: !0,
      depthWrite: !1,
      blending: ye,
    });
  m.name = "church_flames";
  const k = new l0(c, m, h.length);
  ((k.name = "church_flames"), (k.frustumCulled = !1), (k.renderOrder = 20));
  const S = new Float32Array(h.length * 4);
  (h.forEach((L, K) => {
    const j = L.votive ? 0.011 : Math.min(0.018, 0.0105 + L.r * 0.17);
    (k.setMatrixAt(
      K,
      w.compose(
        v.set(L.x, L.y + L.h * 0.955 + (L.votive ? 0.006 : 0.004), L.z),
        g.identity(),
        x.set(1, 1, 1),
      ),
    ),
      S.set([1, e(), j, L.votive ? 0.4 : 1], K * 4),
      (L.fk = K),
      (L.level = 1));
  }),
    c.setAttribute("aFlame", new M0(S, 4)),
    o.add(k));
  const A = { level: 0, out: [], outT: 0 },
    b = c.attributes.aFlame,
    P = p.attributes.aWax,
    _ = f ? f.geometry.attributes.aV : null,
    I = (L = 1) => {
      A.level = Math.max(A.level, L);
      const K = M.uGustFrom.value;
      for (const j of h) {
        if (j.level < 1) continue;
        const O = Math.hypot(j.x - K.x, j.z - K.z),
          J = L * (j.votive ? 0.05 : 0.5) * Math.max(0.04, 1 - O / 16);
        e() < J && ((j.dying = 0.25 + e() * 0.9), A.out.push(j));
      }
    },
    R = () => {
      ((A.level = 0), (A.out.length = 0));
      for (const L of h)
        ((L.level = 1),
          (L.dying = 0),
          (b.array[L.fk * 4] = 1),
          (P.array[t.indexOf(L) * 2] = 1),
          _ && L.votive && (_.array[L.vk * 2] = 1));
      ((b.needsUpdate = !0), (P.needsUpdate = !0), _ && (_.needsUpdate = !0));
    };
  for (const L of t) L.idx = t.indexOf(L);
  return {
    list: t,
    lit: h,
    flames: k,
    wax: d,
    votMesh: f,
    update: (L, K) => {
      if (
        ((M.uT.value = K),
        A.level > 0 &&
          ((A.level = Math.max(0, A.level - L / 2.5)),
          (M.uGust.value = A.level * A.level * (3 - 2 * A.level))),
        A.out.length)
      ) {
        let j = !1;
        for (const O of A.out) {
          if (O.dying > 0) {
            ((O.dying -= L), (j = !0));
            continue;
          }
          O.level > 0 &&
            ((O.level = Math.max(0, O.level - L * 3)),
            (j = !0),
            (b.array[O.fk * 4] = O.level),
            (P.array[O.idx * 2] = O.level),
            _ && O.votive && (_.array[O.vk * 2] = O.level));
        }
        ((b.needsUpdate = !0),
          (P.needsUpdate = !0),
          _ && (_.needsUpdate = !0),
          j || (A.out.length = 0));
      }
    },
    gust: I,
    reset: R,
    U: M,
    G: A,
  };
}
function Cr(s) {
  const o = s.onBeforeCompile,
    t = s.customProgramCacheKey;
  return (
    (s.onBeforeCompile = (u, e) => {
      (o.call(s, u, e),
        (u.vertexShader = u.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec2 aWax;
varying vec2 vWax;
varying float vWaxY;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vWax = aWax; vWaxY = position.y;`,
          )),
        (u.fragmentShader = u.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec2 vWax;
varying float vWaxY;`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
      {
        float below = (1.0 - vWaxY) * vWax.y;                          // metres under the rim
        float glow = exp(-below * 60.0) * 1.1 + exp(-below * 14.0) * 0.12;
        totalEmissiveRadiance += vec3(1.0, 0.42, 0.12) * glow * vWax.x;
      }`,
          )));
    }),
    (s.customProgramCacheKey = () => "churchWax" + t.call(s)),
    (s.needsUpdate = !0),
    s
  );
}
const la = `
float ah(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float an(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(ah(i), ah(i + vec2(1, 0)), f.x), mix(ah(i + vec2(0, 1)), ah(i + vec2(1, 1)), f.x), f.y); }`;
function Ir(s = 48) {
  const r = [];
  for (let a = 0; a < s; a++) {
    const p = (a / s) * Math.PI * 2;
    let i = 0.2;
    for (
      ;
      i < 2 &&
      ds(-3 + Math.cos(p) * 2.55 * i, 51.4 + Math.sin(p) * 2.05 * i) > 0;
    )
      i += 0.01;
    r.push([-3 + Math.cos(p) * 2.55 * i, 51.4 + Math.sin(p) * 2.05 * i]);
  }
  return r;
}
