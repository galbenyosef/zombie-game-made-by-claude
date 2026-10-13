// assets__city-COfbVKUz 20 — box
// Lines 6435-6703 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
const No = `
attribute float aPart;
attribute vec4 aCar;      // paint rgb (linear), state (0 whole, 1 burnt, 2 police, 3 ambulance, 4 taxi, 5 army)
attribute vec4 aCar2;     // hazards on, phase, dirt, seed
varying vec3 vWorld;
varying vec3 vNw;
varying vec3 vLocal;
flat varying float vPart;
flat varying vec4 vA;
flat varying vec4 vB;
void main() {
  vec4 wp = vec4(position, 1.0);
  vec3 n = normal;
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp;
  n = mat3(instanceMatrix) * n;
#endif
  wp = modelMatrix * wp;
  vWorld = wp.xyz; vNw = normalize(mat3(modelMatrix) * n); vLocal = position; vPart = aPart; vA = aCar; vB = aCar2;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  To = `
varying vec3 vWorld;
varying vec3 vNw;
varying vec3 vLocal;
flat varying float vPart;
flat varying vec4 vA;
flat varying vec4 vB;
${u0}
${g0}
${F0}
void main() {
  vec3 P = vWorld;
  vec3 V = normalize(P - cameraPosition);
  vec3 N = normalize(vNw);
  float part = floor(vPart + 0.5);
  float state = vA.w;
  float burnt = step(0.5, state) * step(state, 1.5);
  float n = c3n(P.xz * 3.1 + P.y * 2.0 + vB.w);
  vec3 alb = vA.rgb;
  float coat = 0.6, rough = 0.35;
  vec3 emit = vec3(0.0);
  if (part < 0.5) {
    // paint: ash and dust on top, grime low
    float dust = smoothstep(0.3, 0.9, N.y) * (0.35 + 0.5 * vB.z);
    alb = mix(alb, vec3(0.13, 0.125, 0.12), dust * 0.6) * (0.85 + 0.25 * n);
    if (state > 2.5 && state < 3.5) alb = mix(alb, vec3(0.30, 0.03, 0.02), step(abs(vLocal.y - 1.05), 0.12));      // the ambulance's band
  } else if (part < 1.5) {
    alb = vec3(0.012, 0.014, 0.016); coat = 1.0; rough = 0.05;
    float crack = step(0.82, fract(vB.w * 7.3)) * step(0.6, c3n(vLocal.xz * 9.0 + vB.w));
    alb += crack * 0.05;
  } else if (part < 2.5) {
    alb = vec3(0.015); coat = 0.05; rough = 0.8;
  } else if (part < 3.5) {
    alb = vec3(0.10); coat = 0.4;
  } else if (part < 4.5) {
    alb = vec3(0.30, 0.30, 0.28); coat = 0.8;
  } else if (part < 5.5) {
    alb = vec3(0.12, 0.01, 0.01); coat = 0.8;
    float haz = vB.x * step(0.5, fract(uTime * 1.4 + vB.y));
    emit = vec3(2.2, 0.75, 0.05) * haz;
  } else if (part < 6.5) {
    float blue = step(0.0, vLocal.x);
    float c = fract(uTime * 1.8 + vB.y + blue * 0.5);
    float on = step(c, 0.25) * (0.6 + 0.4 * step(fract(uTime * 7.2), 0.5)) * step(1.5, state) * step(state, 3.5);
    alb = mix(vec3(0.2, 0.02, 0.02), vec3(0.02, 0.03, 0.2), blue);
    emit = mix(vec3(5.0, 0.3, 0.15), vec3(0.3, 0.6, 6.0), blue) * on;
  } else {
    alb = vec3(0.25, 0.25, 0.24);
  }
  if (burnt > 0.5) {
    float rust = smoothstep(0.35, 0.75, c3n(vLocal.xz * 2.3 + vB.w * 3.0));
    alb = mix(vec3(0.016, 0.014, 0.013), vec3(0.07, 0.03, 0.015), rust) * (0.7 + 0.5 * n);
    if (part > 0.5 && part < 1.5) alb = vec3(0.004);
    coat = 0.02; rough = 0.9; emit *= 0.0;
  }
  vec3 L = cityLight(P, N);
  vec3 col = alb * L + emit;
  float dist = length(P - cameraPosition);
  col += c3skyRefl(V, N, rough) * coat * (part < 1.5 ? 1.0 : 0.6);
  if (dist < 260.0 && coat > 0.3) col += citySpec(P, N, V, mix(30.0, 500.0, 1.0 - rough)) * coat * 0.5;
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
class St {
  constructor() {
    ((this.p = []), (this.n = []), (this.a = []), (this.i = []));
  }
  quad(e, d, n, h, c) {
    const w = [d[0] - e[0], d[1] - e[1], d[2] - e[2]],
      s = [h[0] - e[0], h[1] - e[1], h[2] - e[2]],
      x = w[1] * s[2] - w[2] * s[1],
      k = w[2] * s[0] - w[0] * s[2],
      P = w[0] * s[1] - w[1] * s[0],
      _ = Math.hypot(x, k, P) || 1,
      g = this.p.length / 3;
    this.p.push(...e, ...d, ...n, ...h);
    for (let M = 0; M < 4; M++)
      (this.n.push(x / _, k / _, P / _), this.a.push(c));
    this.i.push(g, g + 1, g + 2, g, g + 2, g + 3);
  }
  box(e, d, n, h, c, w, s, x = { ix: 0, zf: 0, zb: 0 }, k = null) {
    const P = k || {},
      _ = e + x.ix,
      g = d - x.ix,
      M = c + x.zb,
      N = w - x.zf,
      T = {
        a: [e, n, c],
        b: [d, n, c],
        c: [d, n, w],
        d: [e, n, w],
        e: [_, h, M],
        f: [g, h, M],
        g: [g, h, N],
        h: [_, h, N],
      };
    (this.quad(T.e, T.h, T.g, T.f, P.top ?? s),
      this.quad(T.d, T.c, T.g, T.h, P.front ?? s),
      this.quad(T.b, T.a, T.e, T.f, P.back ?? s),
      this.quad(T.c, T.b, T.f, T.g, P.right ?? s),
      this.quad(T.a, T.d, T.h, T.e, P.left ?? s));
  }
  wheel(e, d, n, h) {
    const w = e;
    for (let s = 0; s < 10; s++) {
      const x = (s / 10) * Math.PI * 2,
        k = ((s + 1) / 10) * Math.PI * 2,
        P = [w - h / 2, n + Math.cos(x) * n, d + Math.sin(x) * n],
        _ = [w - h / 2, n + Math.cos(k) * n, d + Math.sin(k) * n],
        g = [w + h / 2, n + Math.cos(x) * n, d + Math.sin(x) * n],
        M = [w + h / 2, n + Math.cos(k) * n, d + Math.sin(k) * n];
      this.quad(P, _, M, g, 2);
    }
    for (const s of [-1, 1]) {
      const x = this.p.length / 3,
        k = w + (s * h) / 2;
      (this.p.push(k, n, d), this.n.push(s, 0, 0), this.a.push(3));
      for (let P = 0; P < 10; P++) {
        const _ = (P / 10) * Math.PI * 2;
        (this.p.push(k, n + Math.cos(_) * n * 0.75, d + Math.sin(_) * n * 0.75),
          this.n.push(s, 0, 0),
          this.a.push(3));
      }
      for (let P = 0; P < 10; P++) {
        const _ = (P + 1) % 10;
        s > 0
          ? this.i.push(x, x + 1 + P, x + 1 + _)
          : this.i.push(x, x + 1 + _, x + 1 + P);
      }
    }
  }
  build() {
    const e = new v0();
    return (
      e.setAttribute("position", new e0(this.p, 3)),
      e.setAttribute("normal", new e0(this.n, 3)),
      e.setAttribute("aPart", new e0(this.a, 1)),
      e.setIndex(this.i),
      e.computeBoundingSphere(),
      e
    );
  }
}
function X0(
  m = 4.6,
  e = 1.8,
  d = 1.45,
  n = { zf: 1.15, zb: 0.55, ix: 0.12 },
  h,
) {
  const c = new St(),
    w = e / 2,
    s = m / 2;
  (c.box(
    -w,
    w,
    0.32,
    0.92,
    -s,
    s,
    0,
    { ix: 0.04, zf: 0.12, zb: 0.08 },
    { front: 3, back: 3 },
  ),
    c.box(-w + 0.08, w - 0.08, 0.92, d, -s + 0.95, s - 1.25, 1, n, { top: 0 }),
    c.box(-w + 0.02, w - 0.02, 0.62, 0.78, s - 0.06, s + 0.01, 4),
    c.box(-w + 0.04, w - 0.04, 0.7, 0.84, -s - 0.01, -s + 0.05, 5));
  for (const x of [s - 0.85, -s + 0.85])
    for (const k of [-1, 1]) c.wheel(k * (w - 0.12), x, 0.33, 0.24);
  return (h && h(c, w, s, d), c.build());
}
function vt(m, e, d, n, h = 0, c) {
  const w = new St(),
    s = e / 2,
    x = m / 2;
  (w.box(-s, s, 0.45, d, -x, x - n, h),
    w.box(-s, s, 0.45, d * 0.62, x - n, x, 0, { ix: 0.05, zf: 0.35, zb: 0 }),
    w.box(-s + 0.08, s - 0.08, d * 0.62, d * 0.88, x - n + 0.1, x - 0.25, 1, {
      ix: 0.04,
      zf: 0.35,
      zb: 0,
    }),
    w.box(-s + 0.05, s - 0.05, 0.75, 0.9, x - 0.05, x + 0.01, 4),
    w.box(-s + 0.05, s - 0.05, 0.6, 0.8, -x - 0.01, -x + 0.04, 5));
  for (const k of [x - 0.9, -x + 1.1])
    for (const P of [-1, 1]) w.wheel(P * (s - 0.15), k, 0.45, 0.3);
  return (c && c(w, s, x, d), w.build());
}
function Ho() {
  const m = new St(),
    e = 1.27,
    d = 6,
    n = 3.05;
  (m.box(-e, e, 0.35, 1.1, -d, d, 0),
    m.box(-e, e, 1.1, 2.4, -d, d, 1),
    m.box(-e, e, 2.4, n, -d, d, 0, { ix: 0.05, zf: 0.1, zb: 0.1 }),
    m.box(-e + 0.05, e - 0.05, 0.6, 0.8, d - 0.04, d + 0.01, 4));
  for (const h of [d - 2.4, -d + 2.6])
    for (const c of [-1, 1]) m.wheel(c * (e - 0.2), h, 0.5, 0.3);
  return m.build();
}
const Ro = {
    sedan: () => X0(),
    hatch: () => X0(4.1, 1.75, 1.5, { zf: 1, zb: 0.15, ix: 0.12 }),
    suv: () => X0(4.8, 1.95, 1.8, { zf: 0.85, zb: 0.12, ix: 0.1 }),
    taxi: () =>
      X0(4.7, 1.8, 1.48, { zf: 1.15, zb: 0.55, ix: 0.12 }, (m, e, d, n) =>
        m.box(-0.35, 0.35, n, n + 0.22, -0.3, 0.3, 7),
      ),
    police: () =>
      X0(4.8, 1.85, 1.48, { zf: 1.15, zb: 0.55, ix: 0.12 }, (m, e, d, n) =>
        m.box(-0.6, 0.6, n, n + 0.14, -0.25, 0.25, 6),
      ),
    van: () =>
      vt(5.3, 2, 2.3, 1.4, 0, (m, e, d, n) =>
        m.box(-0.55, 0.55, n, n + 0.15, d - 1.2, d - 0.9, 6),
      ),
    truck: () => vt(7.6, 2.4, 3.5, 2, 3),
    army: () => vt(7.2, 2.45, 3.2, 2.2, 0),
    bus: () => Ho(),
  },
  Bo = {
    sedan: [4.6, 1.8],
    hatch: [4.1, 1.75],
    suv: [4.8, 1.95],
    taxi: [4.7, 1.8],
    police: [4.8, 1.85],
    van: [5.3, 2],
    truck: [7.6, 2.4],
    army: [7.2, 2.45],
    bus: [12, 2.55],
  },
  Lo = [
    [0.12, 0.12, 0.13],
    [0.3, 0.3, 0.31],
    [0.03, 0.035, 0.04],
    [0.25, 0.02, 0.02],
    [0.02, 0.06, 0.18],
    [0.36, 0.36, 0.34],
    [0.1, 0.12, 0.1],
    [0.2, 0.12, 0.05],
    [0.05, 0.05, 0.06],
    [0.4, 0.4, 0.4],
  ];
