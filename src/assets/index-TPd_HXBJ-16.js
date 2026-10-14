// assets/index-TPd_HXBJ 16 — exp
// Lines 4894-4955 of readable/assets/index-TPd_HXBJ.pretty.js (statement-aligned).
const W = D0,
  k0 = (t, e = 0, o = 1) => (t < e ? e : t > o ? o : t),
  Dt = (t, e, o) => {
    const n = k0((o - t) / (e - t));
    return n * n * (3 - 2 * n);
  },
  _t = (t, e, o, n) => t + (e - t) * (1 - Math.exp(-o * n)),
  H0 = 18,
  Zt = 3,
  pe = H0 * Zt,
  eo = 15134697,
  oo = 8,
  no = 9.5,
  ao = [5.4, 0, -5.4],
  La = [4.3, -0.8, -5.9],
  Pa = `
attribute vec3 aCenter; attribute vec3 aCol; attribute float aSize; attribute float aKind;
uniform float uHead; uniform float uTail;
varying vec2 vUv; varying vec3 vCol; varying float vF;
void main() {
  vUv = uv; vCol = aCol;
  vec4 c = modelMatrix * vec4(aCenter, 1.0);
  vec3 fwd = normalize((modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
  vec3 toCam = normalize(cameraPosition - c.xyz);
  float k = clamp(dot(fwd, toCam), 0.0, 1.0);
  float on = aKind < 0.5 ? uHead : uTail;
  vF = (pow(k, 6.0) * 1.5 + pow(k, 1.5) * 0.12) * on;
  vec4 mv = viewMatrix * c;
  mv.xyz += normalize(-mv.xyz) * 0.08;
  mv.xy += position.xy * aSize * (0.5 + 0.7 * k);
  gl_Position = projectionMatrix * mv;
}`,
  Ia = `
varying vec2 vUv; varying vec3 vCol; varying float vF;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r = length(p);
  float glow = exp(-r * r * 12.0) * 1.4 + exp(-r * 4.0) * 0.2;
  float streak = exp(-abs(p.y) * 48.0) * exp(-abs(p.x) * 1.8) * 0.5;
  float a = (glow + streak) * vF * smoothstep(1.0, 0.65, r);
  gl_FragColor = vec4(vCol * a, a);
}`,
  za = `
varying vec3 vLocal; varying vec3 vWorld;
void main() { vLocal = position; vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
  Ea = `
varying vec3 vLocal; varying vec3 vWorld;
uniform float uTime; uniform float uK; uniform vec3 uColor;
float bh(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float bn(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(bh(i), bh(i + vec3(1,0,0)), f.x), mix(bh(i + vec3(0,1,0)), bh(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(bh(i + vec3(0,0,1)), bh(i + vec3(1,0,1)), f.x), mix(bh(i + vec3(0,1,1)), bh(i + vec3(1,1,1)), f.x), f.y), f.z); }
void main() {
  float t = clamp(vLocal.x, 0.0, 1.0);
  vec2 q = vLocal.yz / max(t, 1e-3);
  float rad = length(q);
  float core = pow(1.0 - smoothstep(0.0, 1.0, rad), 2.0);
  float nearF = smoothstep(0.0, 0.05, t);
  float farF = exp(-t * 3.2);
  float dust = 0.5 + 0.7 * bn(vWorld * 1.6 + vec3(uTime * 0.05, uTime * 0.03, 0.0)) * bn(vWorld * 4.3 - vec3(0.0, uTime * 0.04, 0.0));
  float a = core * nearF * farF * dust * uK;
  gl_FragColor = vec4(uColor * a, a);
}`;
