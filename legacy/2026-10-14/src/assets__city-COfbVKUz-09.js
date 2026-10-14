// assets__city-COfbVKUz 09 — push
// Lines 2490-2839 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
const J = {
    block: 0,
    road: 1,
    walk: 2,
    cross: 3,
    plaza: 4,
    curb: 5,
    quay: 6,
    dirt: 7,
    cobble: 8,
    far: 9,
    wood: 10,
  },
  Le = `
attribute vec4 aG;
varying vec3 vWorld;
varying vec3 vN;
varying vec4 vG;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz; vN = normalize(mat3(modelMatrix) * normal); vG = aG;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Ie = `
varying vec3 vWorld;
varying vec3 vN;
varying vec4 vG;
${u0}
${g0}
${F0}
float lineAA(float d, float w, float fw) { return 1.0 - smoothstep(w - fw, w + fw, abs(d)); }
void main() {
  vec3 P = vWorld;
  vec3 V = normalize(P - cameraPosition);
  vec3 N = normalize(vN);
  float kind = vG.x, ac = vG.y, al = vG.z, hw = vG.w;
  vec2 p = P.xz;
  vec2 fwp = fwidth(p);
  float fw = max(fwp.x, fwp.y);
  float n = c3fbm3(p * 0.31);
  float n2 = c3n(p * 2.3);
  vec3 alb;
  float wet = 0.25, rough = 0.5, puddle = 0.0;
  if (kind < 0.5 || kind > 8.5) {
    // the yards and the far plain: broken concrete, gravel, rubble
    alb = vec3(0.050, 0.047, 0.044) * (0.6 + 0.8 * n) * (0.85 + 0.3 * n2);
    if (kind > 8.5) alb *= 0.7;
    puddle = smoothstep(0.6, 0.78, c3n(p * 0.19 + 3.0)) * 0.7;
    if (kind > 9.5) {
      // the wood round the cabin (the plain under its trees): dark leaf litter and earth, damp, hardly a puddle
      alb = vec3(0.034, 0.029, 0.021) * (0.6 + 0.8 * n) * (0.85 + 0.3 * n2);
      puddle *= 0.1; wet = 0.12;
    }
  } else if (kind < 1.5 || (kind > 2.5 && kind < 3.5)) {
    // asphalt
    alb = vec3(0.046, 0.045, 0.046) * (0.72 + 0.5 * n) * (0.9 + 0.2 * n2);
    float patchK = smoothstep(0.62, 0.66, c3n(p * 0.07 + 11.0));
    alb *= 1.0 - 0.25 * patchK;
    float crack = 1.0 - smoothstep(0.0, 0.03 + fw, abs(c3n(p * 0.35 + 5.0) - 0.5));
    alb *= 1.0 - 0.35 * crack * step(fw, 0.12);
    float oil = smoothstep(0.55, 0.8, c3n(vec2(ac * 0.6, al * 0.08) + 7.0)) * step(kind, 1.5);
    alb *= 1.0 - 0.3 * oil;
    puddle = smoothstep(0.56, 0.74, c3n(p * 0.21 + 3.0));
    float mk = 0.0;
    vec3 mkCol = vec3(0.30, 0.29, 0.26);
    if (kind < 1.5 && fw < 0.35) {
      float cw = hw - ${V0.toFixed(1)};                         // half the carriageway
      float aveK = step(15.0, hw);
      // the centre: a double yellow on the avenues, a dashed white on the streets
      float yel = aveK * (lineAA(ac - 0.18, 0.07, fw) + lineAA(ac + 0.18, 0.07, fw));
      float dash = step(0.55, fract(al / 9.0));
      mk += (1.0 - aveK) * lineAA(ac, 0.07, fw) * dash;
      // lane lines every 3.4 m out from the centre, an edge line by the curbs
      float lane = abs(ac) / 3.4;
      float laneL = lineAA((fract(lane + 0.5) - 0.5) * 3.4, 0.06, fw) * step(1.5, abs(ac)) * step(abs(ac), cw - 1.0) * step(0.5, fract(al / 6.0));
      mk += laneL;
      mk += lineAA(abs(ac) - (cw - 0.45), 0.06, fw);
      float wear = 0.35 + 0.65 * smoothstep(0.3, 0.75, c3n(p * 0.5 + 9.0));
      mk *= wear;
      alb = mix(alb, vec3(0.32, 0.25, 0.08), clamp(yel * wear, 0.0, 1.0) * 0.6);
      // manholes
      vec2 mh = vec2(ac - 1.8 * sign(ac + 0.01), mod(al + 7.0, 23.0) - 11.5);
      alb = mix(alb, vec3(0.022, 0.021, 0.02), (1.0 - smoothstep(0.32, 0.35, length(mh))) * step(2.0, cw));
    }
    if (kind > 2.5 && fw < 0.4) {
      // an intersection: zebras along its four edges (hw packs both half sizes: hwx * 1000 + hwz)
      float hx = floor(hw / 1000.0), hz = hw - hx * 1000.0;
      float ex = hx - abs(ac), ez = hz - abs(al);
      float zebX = step(ex, 4.2) * step(0.6, ex) * step(abs(al), hz - ${V0.toFixed(1)}) * step(0.5, fract(al / 1.1));
      float zebZ = step(ez, 4.2) * step(0.6, ez) * step(abs(ac), hx - ${V0.toFixed(1)}) * step(0.5, fract(ac / 1.1));
      // (a T on the park - kind 3.2: shut on its north side, 3.4: on its south side - has no zebra on the shut side)
      zebZ *= 1.0 - step(abs(kind - 3.2), 0.05) * step(al, 0.0) - step(abs(kind - 3.4), 0.05) * step(0.0, al);
      float wear = 0.4 + 0.6 * smoothstep(0.3, 0.7, c3n(p * 0.8 + 2.0));
      mk += clamp(zebX + zebZ, 0.0, 1.0) * wear * (1.0 - smoothstep(0.15, 0.4, fw));
    }
    alb = mix(alb, mkCol, clamp(mk, 0.0, 1.0) * 0.75);
    wet = 0.35;
  } else if (kind < 2.5) {
    // the sidewalk: square pavers, the curb stone along its road edge
    vec2 q = vec2(ac, al) / 0.6;
    vec2 f = abs(fract(q) - 0.5);
    float joint = smoothstep(0.43, 0.5, max(f.x, f.y)) * (1.0 - smoothstep(0.03, 0.08, fw));
    alb = vec3(0.090, 0.086, 0.080) * (0.78 + 0.4 * c3h12(floor(q))) * (0.8 + 0.35 * n) * (1.0 - 0.45 * joint);
    float curb = 1.0 - smoothstep(0.25, 0.3 + fw, hw - abs(ac));
    alb = mix(alb, vec3(0.14, 0.135, 0.125) * (0.8 + 0.3 * n2), curb);
    puddle = smoothstep(0.62, 0.78, c3n(p * 0.33 + 1.0)) * 0.6;
  } else if (kind < 4.5) {
    // a plaza: big stone slabs
    vec2 q = p / 1.2;
    vec2 f = abs(fract(q) - 0.5);
    float joint = smoothstep(0.46, 0.5, max(f.x, f.y)) * (1.0 - smoothstep(0.05, 0.1, fw));
    alb = vec3(0.13, 0.125, 0.115) * (0.8 + 0.3 * c3h12(floor(q))) * (0.8 + 0.3 * n) * (1.0 - 0.4 * joint);
    puddle = smoothstep(0.6, 0.76, c3n(p * 0.25 + 4.0));
  } else if (kind < 5.5) {
    alb = vec3(0.13, 0.125, 0.12) * (0.8 + 0.3 * n2);                 // a curb's face
  } else if (kind < 6.5) {
    // a quay wall: big stone courses, green-black where the water was, streaks
    float cy = P.y / 0.7, cx = (ac + 0.6 * mod(floor(cy), 2.0)) / 1.6;
    vec2 f = abs(fract(vec2(cx, cy)) - 0.5);
    float joint = smoothstep(0.45, 0.5, max(f.x * 0.9, f.y)) * (1.0 - smoothstep(0.05, 0.12, fw));
    alb = vec3(0.16, 0.15, 0.135) * (0.8 + 0.3 * c3h12(floor(vec2(cx, cy)))) * (1.0 - 0.45 * joint);
    float waterline = smoothstep(${($.water + 2.5).toFixed(1)}, ${($.water + 0.2).toFixed(1)}, P.y);
    alb = mix(alb, vec3(0.025, 0.03, 0.022), waterline);
    alb *= 1.0 - 0.35 * smoothstep(0.4, 0.8, c3n(vec2(ac * 0.8, P.y * 0.05)));
    wet = 0.15;
  } else if (kind < 7.5) {
    alb = vec3(0.060, 0.050, 0.040) * (0.6 + 0.8 * n) * (0.85 + 0.3 * n2);   // dirt (the building site, the lots)
    puddle = smoothstep(0.55, 0.72, c3n(p * 0.23 + 6.0));
  } else {
    // cobbles (the quays' promenades)
    vec2 q = vec2(ac / 0.22, al / 0.16 + 0.5 * mod(floor(ac / 0.22), 2.0));
    vec2 f = abs(fract(q) - 0.5);
    float joint = smoothstep(0.38, 0.5, max(f.x, f.y)) * (1.0 - smoothstep(0.02, 0.05, fw));
    alb = vec3(0.075, 0.070, 0.066) * (0.7 + 0.5 * c3h12(floor(q))) * (1.0 - 0.5 * joint);
    puddle = smoothstep(0.6, 0.78, c3n(p * 0.3 + 8.0));
  }
  alb *= 1.0 - 0.5 * puddle;
  float rgh = mix(0.55, 0.04, puddle);
  vec3 L = cityLight(P, N);
  vec3 col = alb * L;
  col += c3skyRefl(V, N, rgh) * mix(wet, 1.0, puddle);
  float dist = length(P - cameraPosition);
  if (dist < 500.0) col += citySpec(P, N, V, mix(40.0, 1200.0, puddle)) * mix(wet * 0.4, 1.0, puddle);
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  Ee = `
varying vec3 vWorld;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWorld = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }
`,
  qe = `
varying vec3 vWorld;
uniform float uWaterY;
${u0}
${g0}
${F0}
void main() {
  vec3 P = vWorld;
  vec3 V = normalize(P - cameraPosition);
  float dist = length(P - cameraPosition);
  // ripples: two scrolling noises, flattened with distance (no shimmer far off)
  vec2 q = P.xz;
  float t = uTime;
  float fade = 1.0 - smoothstep(60.0, 500.0, dist);
  vec2 g1 = vec2(c3n(q * 0.55 + vec2(t * 0.16, 0.0)) - c3n(q * 0.55 + vec2(t * 0.16, 0.0) + vec2(0.11, 0.0)), c3n(q * 0.55 + vec2(0.0, t * 0.12)) - c3n(q * 0.55 + vec2(0.0, t * 0.12) + vec2(0.0, 0.11)));
  vec2 g2 = vec2(c3n(q * 2.3 - vec2(t * 0.45, t * 0.1)) - 0.5, c3n(q * 2.3 + vec2(t * 0.25, -t * 0.4) + 4.0) - 0.5);
  vec2 g3 = vec2(c3n(q * 0.09 + vec2(t * 0.03, 0.0)) - 0.5, c3n(q * 0.09 + vec2(3.0, t * 0.02)) - 0.5);
  vec3 N = normalize(vec3((g1.x * 1.25 + g2.x * 0.10 + g3.x * 0.05) * fade, 1.0, (g1.y * 1.25 + g2.y * 0.10 + g3.y * 0.05) * fade));
  float fres = 0.02 + 0.98 * pow(1.0 - clamp(dot(-V, N), 0.0, 1.0), 5.0);
  vec3 R = reflect(V, N);
  R.y = abs(R.y);
  vec3 col = sky3(normalize(vec3(R.x, max(R.y, 0.004), R.z))) * fres * 1.15;
  col += vec3(0.0018, 0.0022, 0.0024);                                  // (the water's own murk)
  col += (c3skyAmb(vec3(0.0, 1.0, 0.0)) + vec3(0.02, 0.008, 0.003)) * vec3(0.010, 0.012, 0.011);
  if (dist < 900.0) col += citySpec(P, N, V, 260.0) * 0.9;
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,
  Bt = O0?.shaft
    ? {
        x0: O0.shaft.x0 - 0.02,
        z0: O0.shaft.z0 - 0.02,
        x1: O0.shaft.x1 + 0.02,
        z1: O0.shaft.z1 + 0.02,
      }
    : null,
  We = { ...d0, y: -0.08, drop: !0 },
  Ut = [Y0, ...(Bt ? [{ ...Bt, y: -0.08, drop: !0 }] : [])],
  De = [We, ...Ut];
function gt(m, e) {
  const [d, n, h, c] = m;
  if (h <= e.x0 || d >= e.x1 || c <= e.z0 || n >= e.z1) return [m];
  const w = [];
  (n < e.z0 && w.push([d, n, h, e.z0]), c > e.z1 && w.push([d, e.z1, h, c]));
  const s = Math.max(n, e.z0),
    x = Math.min(c, e.z1);
  return (
    d < e.x0 && w.push([d, s, e.x0, x]),
    h > e.x1 && w.push([e.x1, s, h, x]),
    w.filter(([k, P, _, g]) => _ - k > 0.001 && g - P > 0.001)
  );
}
class Lt {
  constructor(e = De) {
    ((this.keeps = e),
      (this.p = []),
      (this.n = []),
      (this.g = []),
      (this.i = []));
  }
  quad(e, d, n, h, c, w, s, x, k) {
    const P = this.p.length / 3;
    this.p.push(...e, ...d, ...n, ...h);
    for (let _ = 0; _ < 4; _++) this.n.push(...c);
    (this.g.push(...w, ...s, ...x, ...k),
      this.i.push(P, P + 1, P + 2, P, P + 2, P + 3));
  }
  flat(e, d, n, h, c, w) {
    for (const s of this.keeps) {
      if (n <= s.x0 || e >= s.x1 || h <= s.z0 || d >= s.z1) continue;
      for (const M of gt([e, d, n, h], s))
        this.flat(M[0], M[1], M[2], M[3], c, w);
      const x = Math.max(e, s.x0),
        k = Math.max(d, s.z0),
        P = Math.min(n, s.x1),
        _ = Math.min(h, s.z1),
        g = Math.min(c, s.y);
      if (!s.drop)
        for (const M of gt([x, k, P, _], s.hole))
          this.rect(M[0], M[1], M[2], M[3], g, w);
      if (c - g > 0.05) {
        const M = (N, T) => [J.curb, N, T, 0];
        (s.x0 > e && s.x0 < n && this.wallZ(k, _, s.x0, g, c, 1, M),
          s.x1 > e && s.x1 < n && this.wallZ(k, _, s.x1, g, c, -1, M),
          s.z0 > d && s.z0 < h && this.wallX(x, P, s.z0, g, c, 1, M),
          s.z1 > d && s.z1 < h && this.wallX(x, P, s.z1, g, c, -1, M));
      }
      return;
    }
    this.rect(e, d, n, h, c, w);
  }
  rect(e, d, n, h, c, w) {
    this.quad(
      [e, c, h],
      [n, c, h],
      [n, c, d],
      [e, c, d],
      [0, 1, 0],
      w(e, h),
      w(n, h),
      w(n, d),
      w(e, d),
    );
  }
  wallX(e, d, n, h, c, w, s) {
    for (const x of this.keeps)
      if (!(
        n <= x.z0 ||
        n >= x.z1 ||
        d <= x.x0 ||
        e >= x.x1 ||
        (!x.drop && c <= x.y + 0.001)
      )) {
        (e < x.x0 && this.wallX(e, x.x0, n, h, c, w, s),
          d > x.x1 && this.wallX(x.x1, d, n, h, c, w, s));
        return;
      }
    w > 0
      ? this.quad(
          [e, h, n],
          [d, h, n],
          [d, c, n],
          [e, c, n],
          [0, 0, 1],
          s(e, h),
          s(d, h),
          s(d, c),
          s(e, c),
        )
      : this.quad(
          [d, h, n],
          [e, h, n],
          [e, c, n],
          [d, c, n],
          [0, 0, -1],
          s(d, h),
          s(e, h),
          s(e, c),
          s(d, c),
        );
  }
  wallZ(e, d, n, h, c, w, s) {
    for (const x of this.keeps)
      if (!(
        n <= x.x0 ||
        n >= x.x1 ||
        d <= x.z0 ||
        e >= x.z1 ||
        (!x.drop && c <= x.y + 0.001)
      )) {
        (e < x.z0 && this.wallZ(e, x.z0, n, h, c, w, s),
          d > x.z1 && this.wallZ(x.z1, d, n, h, c, w, s));
        return;
      }
    w > 0
      ? this.quad(
          [n, h, d],
          [n, h, e],
          [n, c, e],
          [n, c, d],
          [1, 0, 0],
          s(d, h),
          s(e, h),
          s(e, c),
          s(d, c),
        )
      : this.quad(
          [n, h, e],
          [n, h, d],
          [n, c, d],
          [n, c, e],
          [-1, 0, 0],
          s(e, h),
          s(d, h),
          s(d, c),
          s(e, c),
        );
  }
  build() {
    const e = new v0();
    return (
      e.setAttribute("position", new e0(this.p, 3)),
      e.setAttribute("normal", new e0(this.n, 3)),
      e.setAttribute("aG", new e0(this.g, 4)),
      e.setIndex(
        this.p.length / 3 > 65535 ? new Pt(this.i, 1) : new At(this.i, 1),
      ),
      e.computeBoundingSphere(),
      e.computeBoundingBox(),
      e
    );
  }
}
