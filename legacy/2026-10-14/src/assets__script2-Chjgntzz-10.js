// assets__script2-Chjgntzz 10 — clone
// Lines 2445-2609 of readable/assets__script2-Chjgntzz.pretty.js (statement-aligned).
function $o(p) {
  const e = d(0, E.shockTop.y, E.shockTop.z),
    o = d(0, E.shockBot.y, E.shockBot.z),
    r = e.distanceTo(o),
    s = Math.atan2(-(o.z - e.z), -(o.y - e.y)),
    T = new Ae().compose(
      e,
      new Ue().setFromAxisAngle(d(1, 0, 0), s),
      d(1, 1, 1),
    );
  for (const k of [-1, 1]) {
    const S = k * E.shockTop.x,
      u = (b) => d(S, b, 0),
      x = (b, g, n, B) =>
        p.shock.add(b, T.clone().multiply(g || new Ae()), n, B);
    (x(
      new h0(0.016, 0.016, 0.024, 14).rotateZ(Math.PI / 2),
      Z(S, 0, 0),
      P.black,
    ),
      x(ke(u(-0.01), u(-0.2), 0.022, 16), null, P.chrome, {
        wear: (b, g, n) => [0, 0.5, n[2] * 0.6, 0.2],
      }),
      x(
        He(
          [
            [0.022, 0],
            [0.038, 0],
            [0.038, -0.008],
            [0.022, -0.008],
          ],
          18,
        ),
        Z(S, -0.045, 0),
        P.alu,
      ),
      x(ke(u(-0.19), u(-r + 0.05), 0.0085, 10), null, P.chrome, { anim: 1 }),
      x(
        He(
          [
            [0.012, 0],
            [0.038, 0],
            [0.038, -0.008],
            [0.012, -0.008],
          ],
          18,
        ),
        Z(S, -r + 0.07, 0),
        P.alu,
        { anim: 1 },
      ),
      x(ke(u(-r + 0.07), u(-r + 0.012), 0.014, 12), null, P.black, { anim: 1 }),
      x(
        new h0(0.016, 0.016, 0.024, 14).rotateZ(Math.PI / 2),
        Z(S, -r, 0),
        P.black,
        { anim: 1 },
      ),
      x(
        Ro(0.031, 0.0048, 7.5, -0.049, -r + 0.073, 5, 11).translate(S, 0, 0),
        null,
        P.chrome,
        { anim: 2, wear: (b, g, n) => [0, 0.55, n[2] * 0.5, 0] },
      ));
  }
  return { top: -0.049, bot: -r + 0.073 };
}
const K0 = (() => {
  const p = d(0, E.shockTop.y, E.shockTop.z),
    e = d(0, E.shockBot.y, E.shockBot.z),
    o = p.distanceTo(e);
  return { top: -0.049, bot: -o + 0.073, L: o };
})();
function Jo(p) {
  const e = E.stand,
    o = w0(!0),
    r = e.clone().addScaledVector(o, E.standLen),
    s = d(1, 0, 0).sub(o.clone().multiplyScalar(o.x)).normalize();
  (p.stand.add(
    ge(
      [e.clone(), e.clone().lerp(r, 0.5), r.clone().addScaledVector(o, -0.02)],
      (u) => 0.011 - 0.003 * u,
      10,
      { cap1: !0 },
    ),
    null,
    P.frame,
    { wear: (u, x, b) => [0.7, 0.7, Math.min(1, b[2] + 0.4), 0.3] },
  ),
    p.stand.add(
      new h0(0.016, 0.016, 0.03, 12).rotateZ(Math.PI / 2),
      Z(e.x, e.y, e.z),
      P.frame,
    ));
  const T = he(0.05, 0.008, 0.035, 0.003),
    k = o.clone().negate(),
    S = d().crossVectors(s, k).normalize();
  (p.stand.add(T, S0(r, s, k, S), P.frame, {
    wear: (u, x, b) => [0.8, 0.8, 1, 0],
  }),
    p.stand.add(
      ke(
        e.clone().addScaledVector(o, 0.08),
        e
          .clone()
          .addScaledVector(o, 0.08)
          .add(d(0.012, 0, 0)),
        0.004,
        6,
      ),
      null,
      P.steel,
    ));
}
const qe = O0,
  pt = (p, e = 0, o = 1) => (p < e ? e : p > o ? o : p),
  vt = (p, e, o, r) => p + (e - p) * (1 - Math.exp(-o * r)),
  Yt = (p, e, o) => {
    const r = pt((o - p) / (e - p));
    return r * r * (3 - 2 * r);
  },
  eo = (p) => {
    const e = Math.sin(p * 127.1 + 311.7) * 43758.5453;
    return e - Math.floor(e);
  },
  to = (p) => {
    const e = Math.floor(p),
      o = p - e,
      r = o * o * (3 - 2 * o);
    return eo(e) * (1 - r) + eo(e + 1) * r;
  },
  Ko = `
varying vec3 vLocal; varying vec3 vWorld;
void main() { vLocal = position; vec4 w = modelMatrix * vec4(position, 1.0); vWorld = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
  ea = `
varying vec3 vLocal; varying vec3 vWorld;
uniform float uTime; uniform float uK; uniform vec3 uColor; uniform float uLen;
float bh(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float bn(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(bh(i), bh(i + vec3(1,0,0)), f.x), mix(bh(i + vec3(0,1,0)), bh(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(bh(i + vec3(0,0,1)), bh(i + vec3(1,0,1)), f.x), mix(bh(i + vec3(0,1,1)), bh(i + vec3(1,1,1)), f.x), f.y), f.z); }
void main() {
  float t = clamp(-vLocal.z, 0.0, 1.0);
  vec2 q = vLocal.xy / max(t, 1e-4);
  float rad = length(q);
  float core = pow(1.0 - smoothstep(0.0, 1.0, rad), 1.8);
  float cutK = smoothstep(0.35, -0.1, q.y);                            // (the low beam's cut-off: little goes up)
  float nearF = smoothstep(0.0, 0.06, t);
  float farF = exp(-t * uLen * 0.17);
  float dust = 0.55 + 0.6 * bn(vWorld * 2.2 + vec3(0.0, uTime * 0.08, uTime * 0.05)) * bn(vWorld * 5.0 - vec3(uTime * 0.04));
  float a = core * cutK * nearF * farF * dust * uK;
  gl_FragColor = vec4(uColor * a, a);
}`,
  ta = `
uniform vec3 uPos; uniform float uSize; varying vec2 vUv;
void main() { vUv = uv; vec4 mv = viewMatrix * vec4(uPos, 1.0); mv.xyz += normalize(-mv.xyz) * 0.06; mv.xy += position.xy * uSize; gl_Position = projectionMatrix * mv; }`,
  oa = `
uniform float uK; uniform vec3 uColor; varying vec2 vUv;
void main() {
  vec2 p = vUv * 2.0 - 1.0; float r = length(p);
  float glow = exp(-r * r * 14.0) * 1.4 + exp(-r * 4.0) * 0.22;
  float streak = exp(-abs(p.y) * 55.0) * exp(-abs(p.x) * 2.2) * 0.55;
  float a = (glow + streak) * uK * smoothstep(1.0, 0.7, r);
  gl_FragColor = vec4(uColor * a, a);
}`;
