// assets__exterior-BqAhvNw2 02 — math
// Lines 259-492 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
const me = `
varying vec3 vDir;
void main() {
  vDir = position;
  vec3 vp = (viewMatrix * vec4(position, 0.0)).xyz;
  gl_Position = projectionMatrix * vec4(vp * 900.0, 1.0);
}
`,
  ue = `
varying vec3 vDir;
uniform float uMoonR;
uniform vec2 uWind;
uniform float uCloud;
${c0}
${m0}

vec2 deckUV(vec3 d, float k) { return d.xz / (max(d.y, 0.0) + 0.045) * k; }
// cloud-deck density; det = 0..1 how much fine detail survives the pixel footprint (fades to the mean near the horizon)
float deck(vec2 p, float det) {
  vec2 w = uWind * uTime;
  float n = exFbm(p * 0.85 + w);
  float m = exFbm3(p * 3.3 - w * 1.6 + 5.2);
  n = mix(0.5, n, clamp(det * 1.5, 0.0, 1.0));
  m = mix(0.5, m, det);
  return smoothstep(0.50, 0.74, n + (m - 0.5) * 0.42 + (uCloud - 0.5) * 0.3);
}
float mBlob(vec2 q, vec2 c, vec2 r) { return 1.0 - smoothstep(0.55, 1.0, length((q - c) / r)); }
// the near side of the moon, roughly as the eye knows it (maria as soft dark seas)
float moonMaria(vec2 q) {
  vec2 w = q + (vec2(exNoise(q * 4.0 + 3.0), exNoise(q * 4.0 + 7.0)) - 0.5) * 0.20;
  float m = 0.0;
  m = max(m, mBlob(w, vec2(-0.30, 0.40), vec2(0.30, 0.24)));
  m = max(m, mBlob(w, vec2(-0.60, 0.02), vec2(0.26, 0.46)));
  m = max(m, mBlob(w, vec2(0.12, 0.36), vec2(0.15, 0.14)));
  m = max(m, mBlob(w, vec2(0.31, 0.10), vec2(0.20, 0.16)));
  m = max(m, mBlob(w, vec2(0.67, 0.28), vec2(0.10, 0.09)));
  m = max(m, mBlob(w, vec2(0.52, -0.17), vec2(0.12, 0.15)));
  m = max(m, mBlob(w, vec2(0.33, -0.32), vec2(0.08, 0.08)));
  m = max(m, mBlob(w, vec2(-0.18, -0.36), vec2(0.18, 0.12)));
  m = max(m, mBlob(w, vec2(-0.47, -0.37), vec2(0.09, 0.09)));
  m = max(m, mBlob(w, vec2(-0.02, 0.63), vec2(0.30, 0.07)));
  float n = exNoise(q * 7.0) * 0.5 + exNoise(q * 17.0) * 0.3;
  return clamp(m * (0.70 + 0.5 * n), 0.0, 1.0);
}

void main() {
  vec3 d = normalize(vDir);
  float el = asin(clamp(d.y, -1.0, 1.0));
  float az = atan(d.x, -d.z);
  float g = fireGlowAz(az);
  vec3 col = skyBase(d);

  // ---- the moon (drawn under the clouds)
  vec3 mR = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
  vec3 mU = cross(mR, uMoonDir);
  float cm = dot(d, uMoonDir);
  float mAng = length(cross(d, uMoonDir));
  float disc = 0.0;
  if (cm > 0.0) {
    vec2 q = vec2(dot(d, mR), dot(d, mU)) / uMoonR;
    float r = length(q);
    float aa = fwidth(r) + 0.004;
    disc = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
    if (disc > 0.0) {
      float nz = sqrt(max(0.0, 1.0 - r * r));
      vec3 mc = vec3(1.0, 0.060, 0.022) * 1.75;
      mc *= 0.50 + 0.50 * pow(nz, 0.45);
      mc *= 1.0 - moonMaria(q) * 0.52;
      float crat = exNoise(q * 23.0 + 1.3);
      mc *= 0.90 + 0.14 * smoothstep(0.55, 0.9, crat);
      float ty = 1.0 - smoothstep(0.0, 0.10, length(q - vec2(-0.05, -0.72)));
      mc *= 1.0 + ty * 0.35;
      mc *= mix(0.78, 1.0, smoothstep(-1.0, 0.5, q.y));      // the lower limb sits deeper in the smoke
      col = mix(col, mc, disc);
    }
    float outR = max(mAng - uMoonR, 0.0);
    vec3 halo = vec3(1.0, 0.075, 0.028);
    col += halo * (0.95 * exp(-outR / (uMoonR * 0.16)) + 0.20 * exp(-outR / (uMoonR * 0.9)) + 0.045 * exp(-outR / (uMoonR * 4.0)) + 0.012 * exp(-outR / 0.22)) * (1.0 - disc);
  }

  // ---- the rest of the city, beyond the last street that is built: a band of tiny lights and far fires under the glow
  if (el < 0.0 && el > -0.17) {
    float b = -el;
    vec2 q = vec2(az * 150.0, log(b + 0.004) * 32.0);
    vec2 qi = floor(q);
    float h = exHash12(qi + 7.0);
    vec2 qf = fract(q) - 0.5 - (exHash22(qi + 3.0) - 0.5) * 0.55;
    float pxq = length(fwidth(q));
    float dotm = 1.0 - smoothstep(0.0, max(pxq * 0.55, 0.10), length(qf));
    float district = smoothstep(0.35, 0.65, exNoise(vec2(az * 9.0, 0.5)));
    float lit = step(0.90 - 0.06 * district, h) * dotm;
    vec3 lc = mix(vec3(1.0, 0.42, 0.12), vec3(1.0, 0.60, 0.28), fract(h * 13.0));
    float fadeH = smoothstep(0.004, 0.03, b) * (1.0 - smoothstep(0.10, 0.16, b));
    col += lc * lit * 0.32 * fadeH * (0.75 + 0.25 * sin(uTime * 0.7 + h * 50.0));
    // far fires where the glow lobes are, each with a thread of smoke
    for (int i = 0; i < 7; i++) {
      float fi = float(i);
      vec2 fp = vec2(-0.62 + fi * 0.27 + 0.08 * sin(fi * 3.7), -0.012 - 0.030 * fract(fi * 0.618));
      if (i == 5) fp = vec2(1.45, -0.02);
      if (i == 6) fp = vec2(1.72, -0.035);
      vec2 dq = vec2(exWrapA(az - fp.x), el - fp.y);
      float fl = 0.75 + 0.25 * sin(uTime * (4.0 + fi) + fi * 7.0) * sin(uTime * 2.3 + fi);
      float core = exp(-dot(dq, dq) / (0.0000025 + 0.0000015 * fract(fi * 0.37)));
      float bloomF = exp(-dot(dq * vec2(1.0, 1.6), dq * vec2(1.0, 1.6)) / 0.00012);
      col += vec3(1.0, 0.36, 0.08) * (core * 1.4 + bloomF * 0.020) * fl * fireGlowAz(fp.x);
    }
  }

  // ---- stars in the gaps (under the clouds)
  float starMask = smoothstep(0.10, 0.35, el);
  vec3 stars = vec3(0.0);
  if (starMask > 0.0) {
    vec3 sp = d * 340.0;
    vec3 ci = floor(sp);
    float h = exHash13(ci);
    if (h > 0.9950) {
      vec3 jit = vec3(exHash13(ci + 1.7), exHash13(ci + 5.3), exHash13(ci + 9.1)) - 0.5;
      vec3 sc = normalize(ci + 0.5 + jit * 0.6) * 340.0;
      float rr = length(sp - sc);
      float px = length(fwidth(sp)) * 0.7;
      float s = 1.0 - smoothstep(0.0, max(px, 0.10), rr);
      float tw = 0.7 + 0.3 * sin(uTime * (1.3 + h * 37.0) + h * 311.0);
      stars = vec3(0.80, 0.84, 1.0) * s * tw * (0.015 + 0.09 * pow((h - 0.9950) / 0.0050, 3.0)) * starMask;
    }
  }

  // ---- the cloud deck, lit from below by the fires
  float den = 0.0;
  if (d.y > -0.03) {
    // cloud bands stretched along the wind: cool and moonlit up high, lit orange from beneath low over the fires
    vec2 p0 = deckUV(d, 1.0);
    vec2 p = vec2(p0.x * 0.55, p0.y * 1.35);
    float fw = length(fwidth(p));
    float det = 1.0 - smoothstep(0.08, 0.6, fw);
    den = deck(p, det);
    vec2 p1 = deckUV(normalize(d + vec3(0.0, 0.012, 0.0)), 1.0);
    float denUp = deck(vec2(p1.x * 0.55, p1.y * 1.35), det);
    float rim = clamp((den - denUp) * 4.0, 0.0, 1.0);
    float hk = exp(-max(el, 0.0) / 0.14);
    vec3 moonC = vec3(0.0042, 0.0060, 0.0086) * (0.7 + 0.6 * exNoise(p * 2.0));
    vec3 under = vec3(0.034, 0.0080, 0.0021) * g * hk;
    vec3 cc = moonC + under;
    cc += vec3(0.0085, 0.0115, 0.0160) * rim * (1.0 - hk * 0.6);
    cc *= mix(1.0, 0.55, smoothstep(0.6, 1.0, den));
    vec3 moonLit = vec3(1.0, 0.085, 0.030) * (0.60 * exp(-mAng / 0.026) + 0.14 * exp(-mAng / 0.10));
    cc += moonLit * (1.0 - smoothstep(0.30, 0.98, den));
    float fade = smoothstep(-0.03, 0.05, d.y);
    // the deck thins around the moon (the hero of the window): only a veil of cloud ever crosses the disc
    float clearing = mix(0.30, 1.0, smoothstep(0.035, 0.13, mAng));
    den *= fade * clearing;
    col = mix(col + stars, cc, den * 0.86);
  } else {
    col += stars;
  }

  // ---- low smoke bands over the burning horizon, stretched along the wind
  if (d.y > -0.05 && el < 0.45) {
    vec2 ps = deckUV(d, 0.55);
    vec2 pr = vec2(ps.x * 0.8 + ps.y * 0.6, -ps.x * 0.6 + ps.y * 0.8);
    float fw = length(fwidth(pr));
    float sm = exFbm(vec2(pr.x * 0.30, pr.y * 1.7) + vec2(uTime * 0.012, 0.0));
    sm = mix(0.5, sm, 1.0 - smoothstep(0.1, 0.8, fw));
    float band = smoothstep(0.52, 0.86, sm) * exp(-max(el, 0.0) / 0.10) * smoothstep(-0.05, 0.0, d.y);
    vec3 smc = vec3(0.014, 0.0040, 0.0016) * g + vec3(0.0012, 0.0010, 0.0011);
    col = mix(col, smc, band * 0.75);
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function we(t, i) {
  const a = n0({
      vertexShader: me,
      fragmentShader: ue,
      uniforms: { ...i, uCloud: { value: 0.5 } },
      side: ce,
      depthWrite: !1,
      depthTest: !1,
    }),
    e = new e0(new R0(1, 96, 48), a);
  return (
    (e.name = "sky"),
    (e.frustumCulled = !1),
    (e.renderOrder = -1e3),
    { mesh: e, mat: a }
  );
}
function ae(t) {
  return (
    (t >>>= 0),
    (t ^= t >>> 16),
    (t = Math.imul(t, 2146121005) >>> 0),
    (t ^= t >>> 15),
    (t = Math.imul(t, 2221713035) >>> 0),
    (t ^= t >>> 16),
    t >>> 0
  );
}
const se = (t, i) =>
    (ae(Math.floor(t / 280) * 7919 + Math.floor(i / 280) * 104729 + 9e6) &
      1023) <
    470,
  xe = (t, i, a) => (ae(t * 7919 + i * 104729 + a * 31 + 5e6) & 1023) < 880,
  ge = (t, i) => i > -41 && i < 1 && t > -262 && t < 262;
function ye(t = 1350) {
  const i = [],
    a = (e, s, l, d, v) => {
      Math.hypot(e - 3, s - 2) > t ||
        ge(e, s) ||
        (se(e, s) && xe(l, d, v) && i.push([e, t0(e, s) + 7.5, s]));
    };
  for (let e = -12; e <= 12; e++) {
    const s = Y.x0 + y0.dx * e;
    for (let l = -45; l <= 20; l++)
      (a(s + 1, l * 32, e, l, 0), a(s + 15, l * 32 + 16, e, l, 1));
  }
  for (let e = 0; e < 20; e++) {
    const s = -82 - 76 * e,
      l = -66 - 76 * e;
    for (let d = -45; d <= 45; d++)
      (a(d * 32 + 8, s + 1, e + 100, d, 2),
        a(d * 32 + 24, l - 1, e + 100, d, 3));
  }
  for (let e = 0; e < 6; e++) {
    const s = 60 + 76 * e,
      l = 76 + 76 * e;
    for (let d = -45; d <= 45; d++)
      (a(d * 32 + 8, s + 1, e + 200, d, 2),
        a(d * 32 + 24, l - 1, e + 200, d, 3));
  }
  return i;
}
