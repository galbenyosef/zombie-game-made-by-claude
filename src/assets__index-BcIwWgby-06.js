// assets__index-BcIwWgby 06 — push
// Lines 1344-1577 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Ln() {
  const s = [],
    o = [],
    t = [],
    u = [],
    a = (g) => {
      const z =
        0.105 *
          Math.pow(
            Math.sin(Math.PI * Math.min(1, Math.pow(g, 0.62) * 0.98 + 0.02)),
            0.75,
          ) *
          (1 - 0.55 * g * g) +
        0.004;
      return [z, z * 1.12];
    },
    p = s.length / 3;
  for (let g = 0; g <= 28; g++) {
    const z = g / 28,
      x = 0.5 - z * 0.78,
      [v, n] = a(z);
    for (let l = 0; l <= 18; l++) {
      const f = (l / 18) * Math.PI * 2,
        h = Math.cos(f),
        c = Math.sin(f),
        M = c * n * (c < 0 ? 0.82 : 1);
      (s.push(h * v, M, x), o.push(h, c * 0.9, 0.12 * (1 - z)), t.push(0));
    }
  }
  for (let g = 0; g < 28; g++)
    for (let z = 0; z < 18; z++) {
      const x = p + g * 19 + z,
        v = x + 18 + 1;
      u.push(x, x + 1, v, x + 1, v + 1, v);
    }
  {
    const g = s.length / 3;
    (s.push(0, 0, 0.505), o.push(0, 0, 1), t.push(0));
    for (let z = 0; z < 18; z++) u.push(g, p + z + 1, p + z);
  }
  for (const g of [-1, 1]) {
    const z = new t0(0.016, 8, 6);
    z.translate(g * 0.068, 0.028, 0.43);
    const x = s.length / 3,
      v = z.attributes.position,
      n = z.attributes.normal;
    for (let l = 0; l < v.count; l++)
      (s.push(v.getX(l), v.getY(l), v.getZ(l)),
        o.push(n.getX(l), n.getY(l), n.getZ(l)),
        t.push(2));
    for (let l = 0; l < z.index.count; l++) u.push(x + z.index.array[l]);
  }
  const i = u.length,
    d = (g, z = 1, x = [1, 0, 0]) => {
      const v = s.length / 3;
      for (const n of g) (s.push(...n), o.push(...x), t.push(z));
      for (let n = 1; n < g.length - 1; n++) u.push(v, v + n, v + n + 1);
    };
  (d([
    [0, 0, -0.26],
    [0, 0.03, -0.3],
    [0, 0.13, -0.47],
    [0, 0.11, -0.52],
    [0, 0.02, -0.44],
    [0, 0, -0.43],
    [0, -0.02, -0.44],
    [0, -0.11, -0.52],
    [0, -0.13, -0.47],
    [0, -0.03, -0.3],
  ]),
    d([
      [0, 0.1, 0.12],
      [0, 0.13, 0.08],
      [0, 0.155, -0.02],
      [0, 0.14, -0.12],
      [0, 0.085, -0.2],
      [0, 0.07, -0.14],
      [0, 0.1, 0],
    ]));
  for (const g of [-1, 1])
    d(
      [
        [g * 0.08, -0.05, 0.3],
        [g * 0.17, -0.1, 0.25],
        [g * 0.19, -0.11, 0.18],
        [g * 0.15, -0.09, 0.14],
        [g * 0.085, -0.06, 0.22],
      ],
      1,
      [0, 1, 0],
    );
  const y = new Rt();
  (y.setAttribute("position", new xt(s, 3)),
    y.setAttribute("normal", new xt(o, 3)),
    y.setAttribute("aPart", new xt(t, 1)),
    y.setIndex(u),
    y.computeVertexNormals());
  const w = y.attributes.normal;
  for (let g = 0; g <= 28; g++) {
    const z = p + g * 19,
      x = z + 18,
      v = w.getX(z) + w.getX(x),
      n = w.getY(z) + w.getY(x),
      l = w.getZ(z) + w.getZ(x),
      f = Math.hypot(v, n, l) || 1;
    (w.setXYZ(z, v / f, n / f, l / f), w.setXYZ(x, v / f, n / f, l / f));
  }
  return (y.addGroup(0, i, 0), y.addGroup(i, u.length - i, 1), y);
}
function Dn(s, o) {
  const t = new n0({
      color: 16777215,
      roughness: 0.36,
      metalness: 0,
      side: p0,
    }),
    u = new n0({
      color: 16777215,
      roughness: 0.5,
      metalness: 0,
      side: p0,
      transparent: !0,
    });
  for (const [e, r] of [
    [t, !1],
    [u, !0],
  ])
    ((e.onBeforeCompile = (a) => Bn(a, o, r)),
      (e.customProgramCacheKey = () => (r ? "koifin2" : "koi2")),
      Ca(e, s, { shadows: !1, strength: 0.45 }));
  return [t, u];
}
function Bn(s, o, t) {
  ((s.uniforms.uSwimT = o.uSwimT),
    (s.vertexShader = s.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
attribute float aPart;
attribute vec4 aKoi;        // seed, tail phase (radians, integrated on the CPU), curl into the turn, flex (0 = dead, rigid)
uniform float uSwimT;
varying vec3 vKL;
varying float vPart;
varying vec4 vKoi;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
    vKL = position; vPart = aPart; vKoi = aKoi;
    {
      float s = clamp((0.5 - position.z) / 1.02, 0.0, 1.0);                // 0 nose .. 1 tail tip
      float ph = aKoi.y - s * 4.2;
      float amp = aKoi.w * (0.012 + 0.11 * s * s);
      transformed.x += sin(ph) * amp;
      // the curl: the whole body bends along the arc it swims (nose and tail both toward the inside of the turn)
      float zc = position.z - 0.1;
      transformed.x += aKoi.z * zc * zc * 1.2;
      // the fins trail and flutter a little behind the body's own swing
      if (aPart > 0.5 && aPart < 1.5) transformed.x += sin(ph - 1.1) * 0.02 * aKoi.w * (0.3 + s);
    }`,
      )),
    (s.fragmentShader = s.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
varying vec3 vKL;
varying float vPart;
varying vec4 vKoi;
float kh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float kn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(kh(i), kh(i + vec2(1, 0)), f.x), mix(kh(i + vec2(0, 1)), kh(i + vec2(1, 1)), f.x), f.y); }
float kf(vec2 p) { return kn(p) * 0.6 + kn(p * 2.3 + 7.0) * 0.3 + kn(p * 5.1 + 3.0) * 0.1; }`,
      )
      .replace(
        "#include <color_fragment>",
        `#include <color_fragment>
    float kRough = 0.36, kMetal = 0.0, kEnv = 0.3;
    {
      float seed = vKoi.x, kind = floor(seed * 6.0);
      float ang = atan(vKL.x, vKL.y + 1e-5);                      // round the body from the ridge of the back (the seam: under the belly)
      vec2 q = vec2(vKL.z * 6.0, ang * 0.9) + seed * 37.0;
      float top = smoothstep(-0.02, 0.05, vKL.y);                 // the back (the patterns sit on it)
      // (linear albedos: an ivory white, a deep orange-red, ink black; the old near-1.0 white glowed under the caustics)
      vec3 white = vec3(0.7, 0.66, 0.58), red = vec3(0.62, 0.08, 0.02), black = vec3(0.013, 0.012, 0.013);
      vec3 gold = vec3(0.8, 0.5, 0.13), bronze = vec3(0.3, 0.16, 0.06);
      float p1 = smoothstep(0.52, 0.58, kf(q * 1.1)) * top;
      float p2 = smoothstep(0.62, 0.66, kf(q * 2.4 + 11.0));
      vec3 c = white;
      float net = 0.14;                                                                              // (how dark the scales' rims)
      if (kind < 1.0) c = mix(white, red, p1);                                                       // kohaku
      else if (kind < 2.0) c = mix(mix(white, red, p1), black, p2 * top * 0.95);                      // sanke
      else if (kind < 3.0) c = mix(mix(black, red, p1), white, smoothstep(0.6, 0.66, kf(q * 1.7 + 5.0)) * 0.9);   // showa
      else if (kind < 4.0) { c = gold * (0.85 + 0.3 * kf(q * 3.0)); kMetal = 0.55; kRough = 0.3; kEnv = 0.6; net = 0.3; }   // ogon: metallic
      else if (kind < 5.0) { c = bronze * (0.8 + 0.4 * kf(q * 2.0)); net = 0.5; }                    // chagoi: the net of its scales
      else c = mix(white, red, smoothstep(0.075, 0.06, length(vec2(vKL.x, vKL.z - 0.36))) * top);     // tancho: one red crown
      // the scales: a net of small diamonds from the gills to the tail (the rims darker, rougher), gone where too fine to see
      vec2 sc = vec2(-vKL.z * 44.0, ang * 4.8);
      float sa = sc.x + sc.y, sb = sc.x - sc.y, sw = max(fwidth(sa), fwidth(sb));
      float dl = min(0.5 - abs(fract(sa) - 0.5), 0.5 - abs(fract(sb) - 0.5));
      float rim = (1.0 - smoothstep(0.02, 0.02 + max(0.12, sw), dl)) * (1.0 - smoothstep(0.2, 0.45, sw))
                * smoothstep(0.34, 0.29, vKL.z) * smoothstep(-0.3, -0.25, vKL.z) * step(vPart, 0.5);
      c *= 1.0 - net * rim;
      kRough += 0.16 * rim;
      c *= mix(0.86, 1.0, top);                                                                      // (a shade darker down the flanks)
      if (vPart > 0.5 && vPart < 1.5) {
        // the fins: pale, thin, their rays fanning from the root (the tail from the wrist, the pectorals from behind the gills)
        float ra = vKL.z < -0.24 ? atan(vKL.y, -(vKL.z + 0.27)) * 26.0 : abs(vKL.x) > 0.06 ? atan(vKL.z - 0.3, abs(vKL.x) - 0.075) * 22.0 : (vKL.z + vKL.y * 0.7) * 170.0;
        float ray = sin(ra) * (1.0 - smoothstep(0.8, 2.2, fwidth(ra)));
        c = mix(c, white * 0.95, 0.55) * (1.0 + 0.1 * ray);
        kRough = 0.45;
        ${t ? "diffuseColor.a = 0.52 + 0.16 * ray;" : ""}
      }
      if (vPart > 1.5) { c = vec3(0.008); kRough = 0.12; kEnv = 1.0; }                               // the eyes: black and wet
      if (vKoi.w < 0.01) { c = mix(c, vec3(0.7, 0.68, 0.62), 0.55); kEnv = 1.0; kMetal = 0.0; }        // (the dead: washed out, wet, half out of the water)
      diffuseColor.rgb = c;
    }`,
      )
      .replace(
        "#include <metalnessmap_fragment>",
        `#include <metalnessmap_fragment>
    roughnessFactor = kRough; metalnessFactor = kMetal;`,
      )
      .replace(
        "#include <lights_fragment_end>",
        `#ifdef RE_IndirectSpecular
    radiance *= kEnv;
    #endif
    #include <lights_fragment_end>`,
      )
      .replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
    if (vPart > 0.5 && vPart < 1.5) totalEmissiveRadiance += diffuseColor.rgb * 0.03;          // (a little light through the membrane)`,
      )));
}
