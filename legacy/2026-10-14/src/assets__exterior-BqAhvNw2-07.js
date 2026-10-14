// assets__exterior-BqAhvNw2 07 — add
// Lines 1574-1921 of readable/assets__exterior-BqAhvNw2.pretty.js (statement-aligned).
const He = new $(1, 1, 1),
  Y0 = (() => {
    const t = new p0({});
    return (
      t.add(new d0(0.5, 0.5, 1, 20, 1, !1).translate(0, 0.5, 0), new a0(), {}),
      t.add(new ee(0.56, 0.34, 20, 1).translate(0, 1.17, 0), new a0(), {}),
      t.build()
    );
  })(),
  Fe = `
varying vec2 vUv;
varying vec3 vWorld;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Te = `
varying vec2 vUv;
varying vec3 vWorld;
uniform vec2 uSize;
uniform float uSeed;
uniform float uRain;
uniform vec3 uRight;
uniform vec3 uOut;
${c0}
${m0}

vec3 outside(vec3 d) {
  vec3 c = skyBase(d) * 1.3;
  float mc = dot(d, uMoonDir);
  c += vec3(1.0, 0.07, 0.03) * (1.4 * smoothstep(0.9985, 0.9996, mc) + 0.15 * smoothstep(0.985, 0.999, mc));
  if (d.y < -0.015) {
    vec2 q = d.xz / (0.03 - d.y) * 30.0;
    float h = exHash12(floor(q));
    c = c * 0.6 + vec3(1.0, 0.48, 0.18) * step(0.965, h) * 0.20;
  }
  return c;
}
// premultiplied accumulate
void over(inout vec4 acc, vec3 c, float a) { acc.rgb = c * a + acc.rgb * (1.0 - a); acc.a = a + acc.a * (1.0 - a); }

// a bead at c with radii r (pane metres): lens colour + coverage
vec4 bead(vec2 p, vec2 c, vec2 r, vec3 V, vec3 up, float px, float gk) {
  vec2 d = (p - c) / r;
  float l = length(d);
  float aa = px / min(r.x, r.y) * 1.5;
  float cover = 1.0 - smoothstep(1.0 - aa, 1.0, l);
  if (cover <= 0.0) return vec4(0.0);
  vec3 dir = normalize(V - (uRight * d.x + up * d.y) * 0.85);
  vec3 col = outside(dir) * 2.3;
  float rim = smoothstep(0.50, 1.0, l);
  col *= 1.0 - rim * 0.88;
  col += vec3(0.010, 0.012, 0.016) * rim;
  // glints: the room's lamp caught on the front of the bead, the city's glow gathered at its foot
  float g1 = 1.0 - smoothstep(0.0, 0.17 + aa, length(d - vec2(-0.32, 0.38)));
  float g2 = 1.0 - smoothstep(0.0, 0.32 + aa, length(d * vec2(1.0, 1.4) - vec2(0.15, -0.62)));
  col += vec3(1.0, 0.70, 0.42) * g1 * g1 * 1.5 * gk + vec3(1.0, 0.24, 0.07) * g2 * 0.10;
  return vec4(col, cover * 0.92);
}

// a field of static beads on a jittered grid; clearM removes them where a runner wiped the glass
vec4 beads(vec2 p, float cell, float prob, float rMin, float rMax, float sd, vec3 V, vec3 up, float px, float clearM, float spkRate) {
  vec2 ci = floor(p / cell);
  float hp = exHash12(ci + sd * 1.7 + 3.1);
  vec2 h = exHash22(ci + sd);
  float r = mix(rMin, rMax, h.x * h.x);
  vec2 jit = exHash22(ci + sd + 17.3) - 0.5;
  vec2 c = (ci + 0.5) * cell + jit * max(cell - 2.4 * r, 0.0);
  vec2 rr = vec2(r, r * (1.0 + 0.22 * step(0.55, h.y)));
  float clump = 0.30 + 0.70 * smoothstep(0.25, 0.75, exNoise(p * 5.0 + sd));
  float on = step(hp, prob * uRain * clump);
  float gk = (0.15 + 0.85 * h.y * h.y) * (r / rMax);
  vec4 b = on > 0.5 ? bead(p, c - vec2(0.0, 0.15 * r * step(0.55, h.y)), rr, V, up, px, gk) : vec4(0.0);
  float lod = smoothstep(0.10, 0.40, px / cell);
  float avgA = prob * uRain * clump * 3.1416 * (rMin * rMin + rMax * rMax) * 0.4 / (cell * cell) * 0.55;
  vec4 avg = vec4(outside(V) * 1.6, avgA);
  vec4 o = mix(b, avg, lod);
  // too small to draw: some beads still flash their glint as a single sparkling pixel
  vec2 gp = c + vec2(-0.32, 0.38) * rr;
  float spk = (1.0 - smoothstep(0.0, px * 0.9, length(p - gp))) * on * step(1.0 - spkRate, h.y) * lod;
  o = vec4(mix(o.rgb, vec3(1.0, 0.70, 0.42) * 0.9, spk), max(o.a, spk * 0.5));
  o.a *= clearM;
  return o;
}

void main() {
  vec2 p = vUv * uSize;
  vec3 V = normalize(vWorld - cameraPosition);
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec2 fwp = fwidth(p);
  float px = max(max(fwp.x, fwp.y), 1e-5);
  vec4 acc = vec4(0.0);

  // ---- grime: a film, dried streaks, dirt settled along the bottom rail
  float g1 = exFbm3(p * 2.2 + uSeed);
  float g2 = exNoise(vec2(p.x * 70.0, p.y * 2.2) + uSeed * 3.0);
  float g3 = exNoise(p * 26.0 + uSeed);
  float bottom = 1.0 - smoothstep(0.0, 0.22, p.y);
  float edgeD = min(min(p.x, uSize.x - p.x), min(p.y, uSize.y - p.y));
  float corner = 1.0 - smoothstep(0.0, 0.10, edgeD);
  float grime = 0.018 + 0.040 * smoothstep(0.45, 0.85, g1) + 0.030 * smoothstep(0.6, 0.95, g2) * (0.4 + 0.6 * bottom) + 0.05 * bottom * smoothstep(0.3, 0.8, g3) + 0.05 * corner;
  vec3 grimeC = vec3(0.030, 0.026, 0.022) + skyBase(V) * 0.35;
  over(acc, grimeC, grime);

  // ---- runners: a few drops sliding down in fits and starts, each leaving a trail
  float colW = 0.055;
  float ci = floor(p.x / colW);
  float h = exHash12(vec2(ci, uSeed + 0.5));
  float h2 = exHash12(vec2(ci + 3.7, uSeed + 7.7));
  float speed = 0.010 + 0.022 * h2;
  float ph = h * 100.0;
  float t = uTime;
  float prog = speed * (t + 0.40 * sin(t * 0.9 + ph) + 0.22 * sin(t * 2.1 + ph * 1.7)) + h2 * 7.0;
  float H = uSize.y + 0.40;
  float cyc = floor(prog / H);
  float yHead = uSize.y + 0.06 - (prog - cyc * H);
  float runOn = step(0.42, exHash12(vec2(ci + 0.5, cyc + uSeed))) * uRain;
  float x0 = (ci + 0.5) * colW + (exHash12(vec2(ci, cyc + uSeed * 2.0)) - 0.5) * colW * 0.45;
  float xs = x0 + 0.0022 * sin(p.y * 38.0 + ph) + 0.0012 * sin(p.y * 91.0 + ph * 2.0);
  float above = p.y - yHead;
  float tl = 0.10 + 0.30 * h2;
  float inTrail = step(0.0, above) * (1.0 - smoothstep(tl * 0.5, tl, above)) * runOn;
  float clearM = 1.0 - inTrail * (1.0 - smoothstep(0.004, 0.010, abs(p.x - xs)));

  // ---- static beads, two scales
  vec4 b1 = beads(p, 0.0065, 0.55, 0.00035, 0.0011, uSeed * 3.1 + 1.0, V, up, px, clearM, 0.0);
  over(acc, b1.rgb, b1.a);
  vec4 b2 = beads(p, 0.020, 0.40, 0.0012, 0.0030, uSeed * 5.3 + 9.0, V, up, px, clearM, 0.05);
  over(acc, b2.rgb, b2.a);

  // ---- the runner: a wet line with beads left behind, then the head
  if (runOn > 0.0) {
    float w = mix(0.0011, 0.00035, clamp(above / tl, 0.0, 1.0));
    float wpx = max(w, px * 0.5);
    float line = (1.0 - smoothstep(wpx * 0.5, wpx, abs(p.x - xs))) * inTrail * (w / wpx);
    vec3 lc = outside(normalize(V + uRight * sign(p.x - xs) * 0.6)) * 2.0;
    float sheen = 1.0 - smoothstep(0.0, wpx * 0.6, abs(p.x - xs + wpx * 0.3));
    lc += vec3(1.0, 0.70, 0.42) * sheen * 0.18;
    over(acc, lc, line * 0.8 * clamp(0.0015 / px, 0.25, 1.0));
    float by = floor(p.y / 0.011);
    float hb = exHash12(vec2(by, ci + cyc));
    vec2 bc = vec2(xs + (hb - 0.5) * 0.002, (by + 0.5) * 0.011);
    float bOn = step(0.45, hb) * step(yHead + 0.004, bc.y) * step(bc.y, yHead + tl);
    if (bOn > 0.0) { vec4 tb = bead(p, bc, vec2(0.0009 + 0.0007 * hb), V, up, px, 0.4); over(acc, tb.rgb, tb.a); }
    vec2 rH = vec2(0.0024, 0.0031) * (0.85 + 0.45 * h2);
    vec2 hc = vec2(x0 + 0.0022 * sin(yHead * 38.0 + ph) + 0.0012 * sin(yHead * 91.0 + ph * 2.0), yHead);
    vec4 hd = bead(p, hc, rH, V, up, px, 1.0);
    over(acc, hd.rgb, hd.a);
  }
  vec3 col = acc.a > 1e-4 ? acc.rgb / acc.a : vec3(0.0);
  gl_FragColor = vec4(col, acc.a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Re(t, i, a, e, s) {
  const l = n0({
    vertexShader: Fe,
    fragmentShader: Te,
    uniforms: {
      ...t,
      uSize: { value: new E0(i[0], i[1]) },
      uSeed: { value: a },
      uRain: { value: 1 },
      uRight: { value: e.clone() },
      uOut: { value: s.clone() },
    },
    transparent: !0,
    depthWrite: !1,
    side: P0,
  });
  return ((l.name = "rain_glass"), l);
}
function _e(t, i, a) {
  const e = [],
    s = t.shell;
  if (!s) return { panes: e, setIntensity() {} };
  let l = 1;
  for (const d of ["W1", "W2", "W3"]) {
    const v = s.windows[d];
    if (!v) continue;
    const x = v.opening,
      n = x.head - x.sill,
      m = new B(...v.interiorNormal).clone().negate();
    let p = v.glass;
    const b = p.geometry.parameters?.width ?? x.w;
    ((!v.alongX || b < 0.01) &&
      ((p = new e0(new te(x.w, n))),
      p.position.set(...v.center),
      (p.rotation.y = Math.PI / 2),
      (p.name = "rain_" + d),
      a.add(p),
      (v.glass.visible = !1)),
      p.updateMatrixWorld(!0));
    const N = new B(1, 0, 0)
        .applyQuaternion(p.getWorldQuaternion(new s0()))
        .normalize(),
      o = Re(i, [x.w, n], l++ * 7.31, N, m);
    ((p.material = o),
      (p.renderOrder = 10),
      e.push({ id: d, mesh: p, mat: o }));
  }
  return {
    panes: e,
    setIntensity(d) {
      for (const v of e) v.mat.uniforms.uRain.value = d;
    },
  };
}
const Ce = `
attribute vec4 aCol;      // rgb, size in px @720p
attribute vec4 aMode;     // kind, phase, rate, extra
varying vec3 vCol;
varying float vSharp;
uniform float uPx;
${c0}
${m0}
uniform float uHazeK;
float hazeAmtV(vec3 P, float dist) { float low = smoothstep(-40.0, -150.0, P.y); return 1.0 - exp(-dist * uHazeK * (1.0 + 0.6 * low)); }
void main() {
  vec3 P = position;
  float kind = aMode.x, ph = aMode.y, rate = aMode.z;
  float k = 1.0;
  if (kind > 0.5 && kind < 1.5) {                       // aircraft warning: slow on/off
    float c = fract(uTime * rate + ph);
    k = smoothstep(0.0, 0.08, c) * (1.0 - smoothstep(0.45, 0.55, c));
  } else if (kind > 1.5 && kind < 2.5) {                // gunfire: bursts of pops, long silences
    float slot = floor(uTime / 7.0 + ph);
    float live = step(0.55, exHash12(vec2(slot, ph * 13.0)));
    float lt = fract(uTime / 7.0 + ph) * 7.0;
    float pops = step(lt, 1.6 + 1.4 * exHash12(vec2(slot, ph)));
    float pop = step(0.72, exHash12(vec2(floor(uTime * 11.0), ph * 31.0 + slot)));
    k = live * pops * pop;
  } else if (kind > 2.5 && kind < 3.5) {                // fire flicker
    k = 0.65 + 0.35 * exNoise(vec2(uTime * rate, ph * 17.0));
  } else if (kind > 3.5 && kind < 4.5) {                // police: red / blue alternating (extra = 0 red, 1 blue)
    float c = fract(uTime * rate + ph + aMode.w * 0.5);
    k = step(c, 0.25) * (0.6 + 0.4 * step(fract(uTime * rate * 4.0), 0.5));
  } else if (kind > 4.5 && kind < 5.5) {                // a failing lamp
    k = 0.2 + 0.8 * step(0.3, exNoise(vec2(uTime * rate, ph * 9.0)));
  }
  vec3 D = P - cameraPosition;
  float dist = length(D);
  // pull toward the eye so a point on a facade never fights the wall behind it
  vec3 Pp = P - D / max(dist, 1e-3) * min(3.0, dist * 0.02);
  vec4 mv = viewMatrix * vec4(Pp, 1.0);
  gl_Position = projectionMatrix * mv;
  float hz = hazeAmtV(P, dist);
  vCol = aCol.rgb * k * (1.0 - 0.85 * hz);
  float sz = aCol.a * uPx;
  gl_PointSize = max(sz, 1.0) * 2.5;
  vSharp = 2.5;
  if (k < 0.001) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
}
`,
  Be = `
varying vec3 vCol;
varying float vSharp;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float r = length(q) * vSharp;               // r = 1 at the nominal size
  float core = exp(-r * r * 2.2);
  float halo = exp(-r * 1.6) * 0.18;
  float a = core + halo;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vCol * a, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function Ie(t, i, a) {
  const e = i.length,
    s = new Float32Array(e * 3),
    l = new Float32Array(e * 4),
    d = new Float32Array(e * 4);
  i.forEach((k, m) => {
    (s.set(k.p, m * 3),
      l.set([...k.c, k.s], m * 4),
      d.set(k.m || [0, 0, 0, 0], m * 4));
  });
  const v = new z0();
  (v.setAttribute("position", new k0(s, 3)),
    v.setAttribute("aCol", new k0(l, 4)),
    v.setAttribute("aMode", new k0(d, 4)),
    v.computeBoundingSphere());
  const x = n0({
      vertexShader: Ce,
      fragmentShader: Be,
      uniforms: { ...t },
      transparent: !0,
      depthWrite: !1,
      blending: A0,
    }),
    n = new D0(v, x);
  return ((n.name = a), (n.frustumCulled = !1), (n.renderOrder = 5), n);
}
const Ve = `
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
  float low = smoothstep(-40.0, -150.0, P.y);
  vHaze = 1.0 - exp(-dist * uHazeK * (1.0 + 0.6 * low));
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,
  Oe = `
varying vec2 vUv;
varying float vSeed;
varying float vI;
varying float vHaze;
${c0}
uniform float uTime;
void main() {
  vec2 uv = vUv;
  float t = uTime;
  float n = exFbm3(vec2(uv.x * 2.6 + vSeed * 7.0, uv.y * 2.0 - t * 2.2 + vSeed));
  float n2 = exFbm3(vec2(uv.x * 6.0 - vSeed, uv.y * 4.5 - t * 3.7));
  float x = abs(uv.x - 0.5 + (n - 0.5) * 0.45 * uv.y);
  float wdt = 0.48 * pow(1.0 - uv.y, 0.7);
  float body = 1.0 - smoothstep(wdt * 0.2, wdt, x + (n2 - 0.5) * 0.18);
  body *= 1.0 - smoothstep(0.25, 0.92, uv.y + (n - 0.5) * 0.75);
  body *= smoothstep(0.0, 0.10, uv.y);
  float heat = body * (1.15 - uv.y * 0.9) * (0.75 + 0.5 * n2);
  vec3 c = mix(vec3(0.55, 0.05, 0.008), vec3(1.7, 0.36, 0.05), smoothstep(0.15, 0.6, heat));
  c = mix(c, vec3(3.2, 1.1, 0.25), smoothstep(0.65, 1.05, heat));
  float flick = 0.8 + 0.2 * sin(t * 13.0 + vSeed * 31.0);
  vec3 col = c * body * vI * flick * (1.0 - 0.8 * vHaze);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
