// assets__exterior-BqAhvNw2 12 — add
// Lines 2973-3124 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
const ne = new B(0, 1, 0),
  J0 = new $(1, 1, 1);
function et(t, i, a, e, s, l) {
  const d = new a0(),
    v = new s0(),
    x = new B(),
    n = new B(),
    k = (p, b, N, o) => {
      const u = new B().subVectors(b, p),
        z = u.length(),
        f = new d0(o, N, z, 5, 1, !0).translate(0, z / 2, 0);
      (v.setFromUnitVectors(ne, u.normalize()),
        d.compose(n.copy(p), v, x.set(1, 1, 1)),
        t.add(f, d, l));
    },
    m = (p, b, N, o, u) => {
      const z = p.clone().addScaledVector(b, N);
      if ((k(p, z, o, o * 0.68), u === 0)) return;
      const f = u > 2 ? 2 : 3;
      for (let L = 0; L < f; L++) {
        const P = b.clone(),
          F = 0.45 + s() * 0.55,
          I = s() * Math.PI * 2,
          T = new B(Math.cos(I), 0, Math.sin(I));
        (P.multiplyScalar(Math.cos(F))
          .addScaledVector(T, Math.sin(F))
          .add(new B(0, 0.25, 0))
          .normalize(),
          m(z, P, N * (0.62 + s() * 0.2), o * 0.62, u - 1));
      }
    };
  m(
    new B(i, a, e),
    new B((s() - 0.5) * 0.15, 1, (s() - 0.5) * 0.15).normalize(),
    2.6 + s(),
    0.16,
    4,
  );
}
const tt = `
attribute float aBone;
attribute vec4 aPos;      // x, y, z, heading
attribute vec4 aGait;     // phase, rate (Hz), limp 0..1, pose: 0 walk, 1 reach, 2 feed, 3 bang, 4 stand
attribute vec4 aLook;     // scale, head tilt, look-up amount, tint seed
varying vec3 vWorld;
varying vec3 vNw;
varying float vBone;
varying float vTint;
uniform float uTime;
vec3 rX(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(p.x, c * p.y - s * p.z, s * p.y + c * p.z); }
vec3 rZ(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x - s * p.y, s * p.x + c * p.y, p.z); }
vec3 rY(vec3 p, float a) { float c = cos(a), s = sin(a); return vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z); }
void main() {
  int b = int(aBone + 0.5);
  vec3 p = position;
  vec3 n = normal;
  float pose = aGait.w;
  float c = (uTime * aGait.y + aGait.x) * 6.2831853;
  float walk = pose < 0.5 || (pose > 0.5 && pose < 1.5) ? 1.0 : 0.0;
  float limp = aGait.z;
  float side = (b == 3 || b == 5 || b == 7 || b == 9) ? -1.0 : 1.0;   // left = -x
  // ---- legs
  float legPh = side < 0.0 ? c : c + 3.14159;
  float swing = sin(legPh) * (0.38 - (side > 0.0 ? limp * 0.25 : 0.0)) * walk;
  float knee = (0.08 + max(0.0, -sin(legPh + 0.9)) * 0.55 * (side > 0.0 ? 1.0 - limp * 0.7 : 1.0)) * walk;
  if (pose > 1.5 && pose < 2.5) { swing = -1.25; knee = 2.2; }                           // feeding: kneeling
  if (b >= 9) p = rX(p - vec3(0.1 * side, 0.48, 0.0), knee) + vec3(0.1 * side, 0.48, 0.0);
  if (b >= 7) p = rX(p - vec3(0.1 * side, 0.92, 0.0), -swing) + vec3(0.1 * side, 0.92, 0.0);
  // ---- arms
  float arm = sin(c + (side < 0.0 ? 3.14159 : 0.0)) * 0.22 * walk + 0.05 * sin(uTime * 0.9 + aGait.x * 7.0);
  float armOut = 0.10 + 0.05 * side * aLook.w;
  float fore = 0.25 + 0.15 * sin(c * 0.5 + side);
  if (pose > 0.5 && pose < 1.5) { arm = -1.25 + 0.12 * sin(c + side); fore = 0.15; armOut = 0.05; }        // reaching
  if (pose > 1.5 && pose < 2.5) { arm = -0.9; fore = 1.1; }
  if (pose > 2.5 && pose < 3.5) { float hit = pow(max(0.0, sin(uTime * 2.3 + aGait.x * 5.0 + side * 1.4)), 6.0); arm = -2.3 + hit * 0.9; fore = 0.2; armOut = 0.15; }   // beating on a door
  if (b == 5 || b == 6) p = rX(p - vec3(0.24 * side, 1.2, 0.0), -fore) + vec3(0.24 * side, 1.2, 0.0);
  if (b >= 3 && b <= 6) { p = rX(p - vec3(0.22 * side, 1.5, 0.0), arm) + vec3(0.22 * side, 1.5, 0.0); p = rZ(p - vec3(0.22 * side, 1.5, 0.0), armOut * side) + vec3(0.22 * side, 1.5, 0.0); }
  // ---- head: lolled, bobbing, looking up at something if told to
  float tilt = aLook.y + 0.10 * sin(c * 0.5 + aGait.x);
  float nod = 0.25 * (1.0 - aLook.z) - aLook.z * 0.85 + 0.08 * sin(c);
  if (b == 2) { p = rZ(p - vec3(0.0, 1.58, 0.0), tilt) + vec3(0.0, 1.58, 0.0); p = rX(p - vec3(0.0, 1.58, 0.0), nod) + vec3(0.0, 1.58, 0.0); }
  // ---- trunk: leaning forward, swaying
  float lean = 0.30 + 0.15 * aLook.w - aLook.z * 0.25;
  if (pose > 1.5 && pose < 2.5) lean = 1.05;
  if (pose > 2.5 && pose < 3.5) lean = 0.10;
  float sway = sin(c) * 0.09 * walk + 0.05 * sin(uTime * 0.7 + aGait.x * 3.0);
  if (b >= 1 && b <= 6) { p = rX(p - vec3(0.0, 1.0, 0.0), lean) + vec3(0.0, 1.0, 0.0); p = rZ(p - vec3(0.0, 1.0, 0.0), sway) + vec3(0.0, 1.0, 0.0); }
  // ---- whole body
  float bob = abs(sin(c)) * 0.035 * walk;
  if (pose > 1.5 && pose < 2.5) p.y -= 0.42;
  p *= aLook.x;
  p.y += bob;
  p = rY(p, aPos.w);
  vec3 wp = p + aPos.xyz;
  vWorld = wp; vNw = rY(n, aPos.w); vBone = aBone; vTint = aLook.w;
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,
  ot = `
varying vec3 vWorld;
varying vec3 vNw;
varying float vBone;
varying float vTint;
${c0}
${m0}
${N0}
void main() {
  vec3 P = vWorld;
  vec3 N = normalize(vNw);
  vec3 V = normalize(P - cameraPosition);
  int b = int(vBone + 0.5);
  float h = fract(vTint * 13.7);
  vec3 cloth = h < 0.3 ? vec3(0.030, 0.030, 0.032) : h < 0.5 ? vec3(0.070, 0.055, 0.040) : h < 0.62 ? vec3(0.16, 0.15, 0.13) : h < 0.78 ? vec3(0.05, 0.012, 0.012) : vec3(0.025, 0.035, 0.050);
  vec3 skin = vec3(0.10, 0.11, 0.085);
  vec3 alb = (b == 2 || b == 11) ? skin : cloth;
  if (b >= 7 && b <= 10) alb = mix(vec3(0.02, 0.02, 0.025), cloth, 0.4);
  alb *= 0.8 + 0.4 * exNoise(P.xy * 7.0 + vTint * 20.0);
  vec3 L = exLight(P, N);
  vec3 col = alb * L;
  col += alb * exSpec(P, N, V, 6.0) * 0.4;
  col = applyHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function at() {
  const t = new p0({ aBone: 1 }),
    i = new a0(),
    a = (s, l, d, v, x, n, k) =>
      t.add(new $(s, l, d).translate(v, x, n), i, { aBone: k });
  a(0.34, 0.2, 0.21, 0, 0.95, 0, 0);
  const e = new d0(0.19, 0.16, 0.56, 6, 1)
    .scale(1, 1, 0.62)
    .translate(0, 1.28, 0);
  (t.add(e, i, { aBone: 1 }),
    a(0.44, 0.1, 0.2, 0, 1.51, 0, 1),
    t.add(new R0(0.105, 8, 6).scale(0.9, 1.1, 1).translate(0, 1.69, 0.01), i, {
      aBone: 2,
    }),
    t.add(new d0(0.05, 0.05, 0.12, 5).translate(0, 1.58, 0), i, { aBone: 2 }));
  for (const s of [-1, 1]) {
    const l = s < 0;
    (a(0.095, 0.32, 0.095, 0.24 * s, 1.35, 0, l ? 3 : 4),
      a(0.08, 0.3, 0.08, 0.245 * s, 1.05, 0, l ? 5 : 6),
      a(0.07, 0.12, 0.05, 0.245 * s, 0.85, 0.01, l ? 5 : 6),
      a(0.14, 0.46, 0.15, 0.1 * s, 0.7, 0, l ? 7 : 8),
      a(0.11, 0.46, 0.12, 0.1 * s, 0.25, 0, l ? 9 : 10),
      a(0.11, 0.07, 0.25, 0.1 * s, 0.035, 0.06, l ? 9 : 10));
  }
  return t.build();
}
