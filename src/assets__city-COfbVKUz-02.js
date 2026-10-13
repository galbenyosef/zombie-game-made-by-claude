// assets__city-COfbVKUz 02 — push
// Lines 325-667 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
function ve() {
  const m = [];
  for (let d = 0; d <= 5; d++) {
    const n = U0(d),
      h = d === 0 ? 12 : d === 3 ? 16 : 10;
    m.push({
      z: n,
      hw: h,
      x0: Q.x0,
      x1: Q.x1,
      kind: d === 3 || d === 0 ? "ave" : "st",
    });
  }
  for (let d = 0; e(d) < Q.z1; d++)
    m.push({
      z: K0(d),
      hw: d === 0 ? 14 : d % 3 === 0 ? 15 : 10,
      x0: Q.x0,
      x1: Q.x1,
      kind: d % 3 === 0 ? "ave" : "st",
    });
  for (let d = 0; Q0(d) > Q.z0; d++)
    m.push({
      z: Q0(d),
      hw: d % 4 === 3 ? 11 : 8,
      x0: Q.x0,
      x1: Q.x1,
      kind: d % 4 === 3 ? "ave" : "st",
      old: !0,
    });
  return (
    m.push({ z: -487, hw: 13, x0: wt.x0, x1: wt.x1, kind: "quay" }),
    m.push({ z: -617.5, hw: 7.5, x0: Q.x0, x1: Q.x1, kind: "quay", old: !0 }),
    m
  );
  function e(d) {
    return K0(d);
  }
}
const bt = [
  { name: "twins", x0: 655, x1: 730, z0: -292, z1: -152 },
  { name: "climb", x0: 961, x1: 1036, z0: -292, z1: -152 },
];
function xe() {
  const m = [],
    e = [];
  for (let s = -12; s <= 29; s++) e.push(j0(s));
  const d = (s) =>
      s === 0 ? 17 : s === -1 || s === 1 ? 12 : s % 3 === 0 ? 16 : 11,
    n = (s) => (s % 3 === 0 ? 12 : 10),
    h = [[-474, U0(5) - 10]];
  for (let s = 5; s >= 1; s--)
    h.push([
      U0(s) + (s === 3 ? 16 : 10),
      U0(s - 1) - (s - 1 === 3 ? 16 : s - 1 === 0 ? 12 : 10),
    ]);
  const c = [];
  for (let s = 0; K0(s) < Q.z1; s++) {
    const x = s === 0 ? 14 : s % 3 === 0 ? 15 : 10,
      k = (s + 1) % 3 === 0 ? 15 : 10;
    c.push([K0(s) + x, Math.min(Q.z1, K0(s + 1) - k)]);
  }
  const w = [U0(0) + 12, K0(0) - 14];
  for (let s = 0; s < e.length - 1; s++) {
    const x = s - 12,
      k = e[s] + d(x),
      P = e[s + 1] - d(x + 1);
    if (P < Q.x0 || k > Q.x1) continue;
    for (const [N, T] of [...h, w, ...c])
      T - N < 8 ||
        (k >= j0(-1) && P <= j0(1) && N >= w[0] - 1 && T <= w[1] + 1) ||
        m.push({
          x0: k,
          x1: P,
          z0: N,
          z1: T,
          region: N > 200 ? "south" : "down",
        });
    const _ = e[s] + n(x),
      g = e[s + 1] - n(x + 1);
    let M = pe.z0;
    for (let N = 0; Q0(N) > Q.z0; N++) {
      const T = N % 4 === 3 ? 11 : 8,
        S = M,
        v = Q0(N) + T;
      (S - v > 8 && m.push({ x0: _, x1: g, z0: v, z1: S, region: "old" }),
        (M = Q0(N) - T));
    }
  }
  for (const s of bt) {
    for (let x = m.length - 1; x >= 0; x--) {
      const k = m[x];
      k.x0 >= s.x0 - 1 &&
        k.x1 <= s.x1 + 1 &&
        k.z0 >= s.z0 - 1 &&
        k.z1 <= s.z1 + 1 &&
        m.splice(x, 1);
    }
    m.push({
      x0: s.x0,
      x1: s.x1,
      z0: s.z0,
      z1: s.z1,
      region: "down",
      superName: s.name,
    });
  }
  return m;
}
function we() {
  const m = me(),
    e = ve(),
    d = [];
  for (const h of e) {
    let c = [[h.x0, h.x1]];
    for (const w of bt)
      h.z < w.z0 ||
        h.z > w.z1 ||
        (c = c.flatMap(([s, x]) =>
          w.x1 <= s || w.x0 >= x
            ? [[s, x]]
            : [
                [s, w.x0],
                [w.x1, x],
              ].filter(([k, P]) => P - k > 1),
        ));
    for (const [w, s] of c)
      if (h.z > h0.z0 && h.z < h0.z1)
        for (const [x, k] of [
          [w, Math.min(s, j0(-1))],
          [Math.max(w, j0(1)), s],
        ])
          k - x > 1 && d.push({ ...h, x0: x, x1: k });
      else d.push({ ...h, x0: w, x1: s });
  }
  const n = [];
  for (const h of m) {
    let c = [[h.z0, h.z1]];
    for (const w of bt)
      h.x > w.x0 &&
        h.x < w.x1 &&
        (c = c.flatMap(([s, x]) =>
          w.z1 <= s || w.z0 >= x
            ? [[s, x]]
            : [
                [s, w.z0],
                [w.z1, x],
              ].filter(([k, P]) => P - k > 1),
        ));
    for (const [w, s] of c) n.push({ ...h, z0: w, z1: s });
  }
  return { ns: n, ew: d };
}
const Ot = [
    { name: "b0", x: 134, w: 18, kind: "truss" },
    { name: "b1", x: 644, w: 22, kind: "arch" },
    { name: "b2", x: 1154, w: 24, kind: "girder", piers: [-524, -586] },
    { name: "b3", x: 1664, w: 30, kind: "cable", tower: 92 },
    { name: "b4", x: 2276, w: 22, kind: "girder", piers: [-540, -570] },
  ],
  be = `
varying vec3 vDir;
void main() {
  vDir = position;
  vec3 vp = (viewMatrix * vec4(position, 0.0)).xyz;
  gl_Position = projectionMatrix * vec4(vp * 900.0, 1.0);
}
`,
  ye = `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  ge = `
  if (starMask > 0.0) {
    vec3 sp = d * 300.0;
    vec3 ci = floor(sp);
    float h = c3h13(ci);
    if (h > 0.9965) {
      vec3 jit = vec3(c3h13(ci + 1.7), c3h13(ci + 5.3), c3h13(ci + 9.1)) - 0.5;
      vec3 sc = normalize(ci + 0.5 + jit * 0.6) * 300.0;
      float rr = length(sp - sc);
      float px = pxStar;
      float s = 1.0 - smoothstep(0.0, max(px, 0.10), rr);
      float tw = 0.75 + 0.25 * sin(uTime * (1.1 + h * 31.0) + h * 311.0);
      stars = vec3(0.80, 0.86, 1.0) * s * tw * (0.020 + 0.12 * pow((h - 0.9965) / 0.0035, 3.0)) * starMask;
    }
  }
`,
  Rt = (m) => `
varying vec3 vDir;
uniform float uMoonR;
uniform vec2 uWind;
${u0}
${g0}
vec2 deckUV(vec3 d, float k) { return d.xz / (max(d.y, 0.0) + 0.06) * k; }
float mBlob(vec2 q, vec2 c, vec2 r) { return 1.0 - smoothstep(0.55, 1.0, length((q - c) / r)); }
float moonMaria(vec2 q) {
  vec2 w = q + (vec2(c3n(q * 4.0 + 3.0), c3n(q * 4.0 + 7.0)) - 0.5) * 0.18;
  float m = 0.0;
  m = max(m, mBlob(w, vec2(-0.30, 0.40), vec2(0.30, 0.24)));
  m = max(m, mBlob(w, vec2(-0.60, 0.02), vec2(0.26, 0.46)));
  m = max(m, mBlob(w, vec2(0.12, 0.36), vec2(0.15, 0.14)));
  m = max(m, mBlob(w, vec2(0.31, 0.10), vec2(0.20, 0.16)));
  m = max(m, mBlob(w, vec2(0.52, -0.17), vec2(0.12, 0.15)));
  m = max(m, mBlob(w, vec2(-0.18, -0.36), vec2(0.18, 0.12)));
  m = max(m, mBlob(w, vec2(-0.47, -0.37), vec2(0.09, 0.09)));
  float n = c3n(q * 7.0) * 0.5 + c3n(q * 17.0) * 0.3;
  return clamp(m * (0.70 + 0.5 * n), 0.0, 1.0);
}
void main() {
  vec3 d = normalize(vDir);
  float el = asin(clamp(d.y, -1.0, 1.0));
  float e = max(el, 0.0);
  float az = c3az(d);
  float dk = c3dawnAz(d);
  float dawn = 0.55 + 0.45 * uDawn;
  float g = c3fireAz(az) * (1.0 - 0.6 * pow(dk, 4.0));
  vec3 col = sky3(d);
  vec2 wind = uWind * uTime * 0.0006;
  // (every derivative here, in uniform control flow: inside a branch that differs between neighbouring pixels they are
  // undefined)
  float pxStar = length(fwidth(d * 300.0)) * 0.7;
  vec2 qCity = vec2(az * 160.0, log(max(-el, 0.0) + 0.004) * 34.0);
  float pxCity = length(fwidth(qCity));
  vec2 p0d = deckUV(d, 1.0);
  vec2 prd = vec2(p0d.x * 0.92 + p0d.y * 0.38, -p0d.x * 0.38 + p0d.y * 0.92);
  float fwDeck = length(fwidth(vec2(prd.x * 0.35, prd.y * 1.6)));
  vec2 psd = deckUV(d, 0.6);
  float fwBand = length(fwidth(vec2(psd.x * 0.8 + psd.y * 0.6, -psd.x * 0.6 + psd.y * 0.8)));

  // ---- the moon: pale, low in the west, warmed a little by the air it shines through
  vec3 mR = normalize(cross(uMoonDir, vec3(0.0, 1.0, 0.0)));
  vec3 mU = cross(mR, uMoonDir);
  float cm = dot(d, uMoonDir);
  float mAng = length(cross(d, uMoonDir));
  float disc = 0.0;
  vec2 qm = vec2(dot(d, mR), dot(d, mU)) / uMoonR;
  float aaM = fwidth(length(qm)) + 0.01;                     // (derivatives outside the branches: undefined inside)
  if (cm > 0.0) {
    vec2 q = qm;
    float r = length(q);
    float aa = aaM;
    disc = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, r);
    if (disc > 0.0) {
      float nz = sqrt(max(0.0, 1.0 - r * r));
      vec3 mc = vec3(1.0, 0.86, 0.66) * 0.62;
      mc *= 0.55 + 0.45 * pow(nz, 0.5);
      mc *= 1.0 - moonMaria(q) * 0.42;
      mc *= mix(0.72, 1.0, smoothstep(-1.0, 0.6, q.y));
      col = mix(col, mc, disc);
    }
    float outR = max(mAng - uMoonR, 0.0);
    col += vec3(0.85, 0.78, 0.66) * (0.20 * exp(-outR / (uMoonR * 0.35)) + 0.030 * exp(-outR / (uMoonR * 2.5)) + 0.006 * exp(-outR / 0.18)) * (1.0 - disc);
  }

  // ---- the rest of the city under the horizon: tiny far lights and far fires in the haze
  if (el < 0.0 && el > -0.16) {
    float b = -el;
    vec2 q = vec2(az * 160.0, log(b + 0.004) * 34.0);
    vec2 qi = floor(q);
    float h = c3h12(qi + 7.0);
    vec2 qf = fract(q) - 0.5 - (c3h22(qi + 3.0) - 0.5) * 0.55;
    float pxq = pxCity;
    float dotm = 1.0 - smoothstep(0.0, max(pxq * 0.55, 0.10), length(qf));
    float lit = step(0.93 - 0.05 * min(g, 1.0), h) * dotm;
    vec3 lc = mix(vec3(1.0, 0.42, 0.12), vec3(1.0, 0.62, 0.30), fract(h * 13.0));
    float fadeH = smoothstep(0.003, 0.025, b) * (1.0 - smoothstep(0.09, 0.15, b));
    col += lc * lit * 0.20 * fadeH * (0.75 + 0.25 * sin(uTime * 0.7 + h * 50.0));
  }

  // ---- the last stars (gone toward the dawn, and near the glow of the fires)
  float starMask = smoothstep(0.12, 0.40, el) * (1.0 - smoothstep(0.35, 0.75, dk * (1.0 - smoothstep(0.5, 1.2, el)))) * (1.0 - 0.6 * uDawn);
  vec3 stars = vec3(0.0);
  ${m ? "" : ge}

  // ---- high thin cloud: long streaks that catch the first light in the east (rose and pale gold under them), lit by
  // the fires from beneath over the burning districts, dark grey-blue against the night elsewhere
  float den = 0.0;
  if (d.y > -0.02) {
    vec2 p0 = deckUV(d, 1.0);
    vec2 pr = vec2(p0.x * 0.92 + p0.y * 0.38, -p0.x * 0.38 + p0.y * 0.92);
    vec2 p = vec2(pr.x * 0.35, pr.y * 1.6) + wind;
    float fw = fwDeck;
    float det = 1.0 - smoothstep(0.1, 0.7, fw);
    float n = c3fbm(p * 0.9);
    float m = c3fbm3(p * 3.4 + 5.2);
    n = mix(0.5, n, clamp(det * 1.5, 0.0, 1.0)); m = mix(0.5, m, det);
    den = smoothstep(0.52, 0.80, n + (m - 0.5) * 0.45) * smoothstep(-0.02, 0.06, d.y) * (1.0 - smoothstep(0.75, 1.3, e));
    float lowK = exp(-e / 0.22);
    vec3 base = sky3(normalize(vec3(d.x, max(d.y, 0.0) * 0.6 + 0.02, d.z))) * 0.70;
    vec3 rose = mix(vec3(0.090, 0.050, 0.044), vec3(0.150, 0.085, 0.048), pow(dk, 8.0)) * pow(dk, 3.5) * (0.35 + 0.65 * lowK) * dawn * 1.6;
    vec3 ember = vec3(0.050, 0.014, 0.004) * g * lowK;
    vec3 cc = base + rose + ember;
    cc *= 0.82 + 0.36 * m;
    col = mix(col + stars, cc, den * 0.92);
  } else col += stars;

  // ---- banks of smoke low over the burning horizon, drifting with the wind, lit orange from under them
  if (d.y > -0.04 && el < 0.40) {
    vec2 ps = deckUV(d, 0.6);
    vec2 pr = vec2(ps.x * 0.8 + ps.y * 0.6, -ps.x * 0.6 + ps.y * 0.8);
    float fw = fwBand;
    float sm = c3fbm(vec2(pr.x * 0.28, pr.y * 1.4) + vec2(uTime * 0.010, 0.0));
    sm = mix(0.5, sm, 1.0 - smoothstep(0.1, 0.8, fw));
    float band = smoothstep(0.50, 0.82, sm) * exp(-e / 0.085) * smoothstep(-0.04, 0.0, d.y) * (0.25 + 0.75 * min(g, 1.2));
    float underlit = exp(-e / 0.03);
    vec3 smc = vec3(0.0085, 0.0062, 0.0058) + vec3(0.050, 0.013, 0.0030) * g * underlit + vec3(0.012, 0.012, 0.014) * pow(dk, 3.0) * dawn;
    col = mix(col, smc, band * 0.80);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function ze(m, e) {
  const d = { ...e, uMoonR: { value: 0.016 } },
    n = r0({
      vertexShader: be,
      fragmentShader: Rt(!1),
      uniforms: d,
      side: Nt,
      depthWrite: !1,
      depthTest: !1,
    }),
    h = new s0(new Ct(1, 96, 48), n);
  ((h.name = "city3_sky"), (h.frustumCulled = !1), (h.renderOrder = -1e3));
  const c = new oe();
  c.name = "city3_sky_env";
  const w = r0({
    vertexShader: ye,
    fragmentShader: Rt(!0),
    uniforms: d,
    side: Nt,
    depthWrite: !1,
  });
  return (
    c.add(new s0(new Ct(40, 64, 32), w)),
    { mesh: h, env: c, uniforms: d, mat: n, update(s) {} }
  );
}
