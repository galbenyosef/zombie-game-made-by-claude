// assets/index-BcIwWgby 21 — math
// Lines 5876-6161 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Ss(s, o, t, u, { cut: e = !1, mat: r = "rib" } = {}) {
  const a = t.map((y, w) => u(y, w));
  let p = [],
    i = [];
  const d = () => {
    (p.length >= 2 && s(r, I0(o, p, i, { crease: 0.6 })), (p = []), (i = []));
  };
  for (let y = 0; y < t.length; y++) {
    if (e && ds(t[y][0], t[y][2]) > -0.05) {
      d();
      continue;
    }
    (p.push(t[y]), i.push(a[y]));
  }
  d();
}
function dr(s, o = 0.12) {
  const t = [s[0]];
  for (let u = 1; u < s.length; u++) {
    const e = s[u - 1],
      r = s[u],
      a = Math.hypot(r[0] - e[0], r[1] - e[1], r[2] - e[2]),
      p = Math.max(1, Math.ceil(a / o));
    for (let i = 1; i <= p; i++)
      t.push([
        e[0] + ((r[0] - e[0]) * i) / p,
        e[1] + ((r[1] - e[1]) * i) / p,
        e[2] + ((r[2] - e[2]) * i) / p,
      ]);
  }
  return t;
}
function pr(s, o) {
  const t = [];
  for (const i of sa)
    for (const d of [-S0, S0])
      (Wo(s, d, i, { rng: o }),
        t.push({
          x0: d - 0.44,
          x1: d + 0.44,
          z0: i - 0.44,
          z1: i + 0.44,
          y0: 0,
          y1: Z0,
        }));
  for (const i of sa)
    for (const d of [pt.x0, pt.x1])
      (Wo(s, d, i, { rng: o }),
        t.push({
          x0: d < 0 ? d : d - 0.44,
          x1: d < 0 ? d + 0.44 : d,
          z0: i - 0.44,
          z1: i + 0.44,
          y0: 0,
          y1: Z0,
        }));
  for (const i of [-S0, S0])
    (Wo(s, i, pt.z0, { rng: o }),
      t.push({
        x0: i - 0.44,
        x1: i + 0.44,
        z0: pt.z0,
        z1: pt.z0 + 0.44,
        y0: 0,
        y1: Z0,
      }));
  for (const i of [-S0, S0]) Wo(s, i, pt.z1, { rng: o, stop: 5.6 });
  for (const i of [pt.x0, pt.x1])
    for (const d of [pt.z0, pt.z1])
      Wo(s, i, d, { rng: o, small: !0, stop: d > 60 && i > 0 ? 3.2 : 0 });
  const u = [];
  for (let i = 0; i < Te.length - 1; i++)
    for (let d = 0; d < 3; d++)
      u.push({ i: d, j: i, ...ur(Oo[d], Oo[d + 1], Te[i], Te[i + 1]) });
  const e = [];
  for (const i of u) {
    const d = i.j === 2 && i.i < 2,
      [y, w] = fr(i.webs, d);
    (e.push(y), w && s("web", w), (i.cut = d));
  }
  for (const i of e) s("web", i, { cast: !0 });
  for (const i of u) {
    for (const d of i.groins) {
      const y = dr(d, 0.1);
      Ss(
        s,
        ir,
        y,
        (w) => {
          const g = w[0] - i.xc,
            z = w[2] - i.zc,
            x = i.A.dh(g),
            v = i.B.dh(z),
            n = new dt(x, -1, 0).normalize(),
            l = new dt(0, -1, v).normalize(),
            f = n.add(l);
          return (
            f.lengthSq() < 1e-6 && f.set(0, -1, 0),
            f.normalize().toArray()
          );
        },
        { cut: i.cut },
      );
    }
    i.cut ||
      s(
        "rib",
        A0(
          (d, y) =>
            (0.2 * Math.sin(Math.PI * (0.08 + 0.92 * y)) + 0.03) *
            (1 +
              0.18 *
                Math.pow(Math.max(0, Math.cos(d * 6)), 0.5) *
                Math.sin(Math.PI * y)),
          (d) => Ia - 0.34 + d * 0.4,
          36,
          8,
          i.xc,
          i.zc,
        ),
      );
  }
  const r = (i, d, y, w) =>
      i
        .pts(40)
        .map(([g, z]) => (y === "x" ? [w + g, Z0 + z, d] : [d, Z0 + z, w + g])),
    a = (i, d, y) => (w) => {
      const g = (y === "x" ? w[0] : w[2]) - d,
        z = w[1] - Z0,
        [x, v] = i.inward(g, z);
      return y === "x" ? [x, v, 0] : [0, v, x];
    };
  for (let i = 0; i < Te.length; i++)
    for (let d = 0; d < 3; d++) {
      const y = Oo[d],
        w = Oo[d + 1],
        g = ue((w - y) / 2, oo),
        z = (y + w) / 2,
        x = i === 0 || i === Te.length - 1,
        v = Te[i] + (i === 0 ? 0.02 : x ? -0.02 : 0);
      Ss(s, x ? ia : lr, r(g, v, "x", z), a(g, z, "x"));
    }
  for (let i = 0; i < Te.length - 1; i++)
    for (const d of [pt.x0 + 0.02, -S0, S0, pt.x1 - 0.02]) {
      const y = Te[i],
        w = Te[i + 1],
        g = ue((w - y) / 2, oo),
        z = (y + w) / 2,
        x = Math.abs(d) > 6;
      Ss(s, x ? ia : hr, r(g, d, "z", z), a(g, z, "z"));
    }
  const p = new m0(pt.x1 - pt.x0, pt.z1 - pt.z0 + 0.1, 1, 1)
    .rotateX(-Math.PI / 2)
    .translate(0, 0, (pt.z0 + pt.z1) / 2 - 0.05);
  s("floor", Ct(p), { cast: !1 });
  for (let i = 0; i < 3; i++) {
    const d = jt.steps[i],
      y = jt.rise * (i + 1);
    s(
      "floor",
      Mt(
        jt.x0 + i * 0.001,
        y - jt.rise - 0.02,
        d,
        jt.x1 - i * 0.001,
        y,
        jt.z1 - 0.01,
        0.018,
        "x",
        2,
      ),
      { cast: !1 },
    );
  }
  return (
    t.push({
      x0: jt.x0 - 0.05,
      x1: -1.6,
      z0: jt.steps[1],
      z1: pt.z1,
      y0: 0,
      y1: 1,
    }),
    t.push({
      x0: -1.6,
      x1: jt.x1 + 0.05,
      z0: jt.steps[0],
      z1: pt.z1,
      y0: 0,
      y1: 1,
    }),
    { colliders: t, cells: u }
  );
}
const xo = (s) => s.toFixed(4),
  Vo = { uSmash: { value: 0 } },
  mr = `
attribute vec4 aBack;
attribute vec4 aInfo;
varying vec2 vUv;
varying vec4 vBack;
varying vec4 vInfo;
varying vec3 vW;
#include <common>
#include <fog_pars_vertex>
void main() {
  vUv = uv; vBack = aBack; vInfo = aInfo;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vW = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,
  Da = `
float gh(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float gn(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y); }
// the broken lancet: a jagged hole low in its left light (window-local u, v)
bool broken(vec4 info) {
  if (info.x < 0.5) return false;
  vec2 q = info.yz;
  float n = gn(q * vec2(9.0, 34.0)) * 0.5 + gn(q * vec2(31.0, 97.0)) * 0.3 + gn(q * vec2(80.0, 260.0)) * 0.2;
  float d = length((q - vec2(0.3, 0.33)) * vec2(1.0, 2.9)) + (n - 0.5) * 0.3;
  float d2 = length((q - vec2(0.7, 0.2)) * vec2(1.2, 4.0)) + (n - 0.5) * 0.25;
  return d < 0.3 || d2 < 0.12;
}
// the light that gives (info.w = 1): q = metres in that light (x across from its middle, y up from the sill). The hole: an
// upright oval from the sill up ~2.7 m, wider than the light (so its sides go, but for jagged bits at the corners), its rim
// cut into eleven teeth of glass of random depth with a ragged noise on top; it grows from where it was struck (1 m up)
uniform float uSmash;
vec2 smashQ(vec4 info) { return vec2((info.y - 0.5) * ${xo(e0.w)} - (${xo(co.u)}), info.z * ${xo(e0.apex - e0.sill)}); }
float smashK() { float s = clamp(uSmash, 0.0, 1.0); return 1.0 - (1.0 - s) * (1.0 - s) * (1.0 - s); }
float smashD(vec2 q, float k) {
  vec2 d = (q - mix(vec2(0.0, 1.1), vec2(0.0, 1.75), k)) / vec2(0.55, 1.95);
  float r = length(d), a = atan(d.y, d.x);
  float s = a * 1.7507 + 5.5;
  float i = floor(s), f = fract(s);
  float tooth = (0.05 + 0.27 * gh(vec2(i, 4.1))) * pow(1.0 - abs(2.0 * f - 1.0), 1.6);
  float rag = (gn(q * vec2(21.0, 15.0)) - 0.5) * 0.09 + (gn(q * vec2(57.0, 43.0)) - 0.5) * 0.04;
  return r - k * (1.0 - tooth + rag);
}
// (round 5b, the user: "make the window break a bit more visual": the hole runs ~3.7 m up the struck light, and the light
// beside it goes too - a little lower, the debris through it: smashQ2 is that light's own q, its hole a size smaller)
vec2 smashQ2(vec2 q) { return vec2(q.x - ${xo(-2 * co.u)}, (q.y - 0.15) * 1.18); }
bool smashed(vec4 info) {
  if (info.w < 0.5 || uSmash <= 0.0) return false;
  vec2 q = smashQ(info);
  if (q.x > ${xo(-co.u)}) return smashD(smashQ2(q), smashK()) < 0.0;
  return smashD(q, smashK()) < 0.0;
}`,
  xr = `
uniform sampler2D map;
uniform float uT;
uniform float uGain;
uniform float uOut;
varying vec2 vUv;
varying vec4 vBack;
varying vec4 vInfo;
varying vec3 vW;
#include <common>
#include <fog_pars_fragment>
${Da}
void main() {
  if (broken(vInfo) || smashed(vInfo)) discard;
  vec3 g = texture2D(map, vUv).rgb;
  // the fire behind the glass: slow uneven drifts, a flicker, brighter low down (the glow of the burning streets)
  float t = uT + vBack.w * 7.0;
  float drift = gn(vW.xz * 0.45 + vec2(vW.y * 0.3 + t * 0.21, -t * 0.13)) * 0.6 + gn(vW.zx * 1.3 + vec2(t * 0.5, vW.y)) * 0.4;
  float flick = 1.0 + 0.07 * sin(t * 2.3) * sin(t * 3.1 + 1.7) + 0.04 * sin(t * 7.7);
  float low = mix(1.18, 0.78, clamp(vInfo.z, 0.0, 1.0));
  vec3 col = g * vBack.rgb * (0.72 + 0.5 * drift) * flick * low * uGain;
  // what is left of the light that gave: cracks running out from the hole, its broken edge bright with the fire
  if (vInfo.w > 0.5 && uSmash > 0.0) {
    vec2 q = smashQ(vInfo);
    if (q.x > ${xo(-co.u)}) q = smashQ2(q);
    {
      float k = smashK(), dd = smashD(q, k);
      vec2 d = (q - vec2(0.0, 1.75)) / vec2(0.55, 1.95);
      float cr = abs(fract(atan(d.y, d.x) * 2.07 + gn(q * 5.0) * 0.7) - 0.5);
      float crack = (1.0 - smoothstep(0.0, 0.018 / max(length(d), 0.4), cr)) * (1.0 - smoothstep(0.04, 0.55, dd)) * k;
      col *= 1.0 - 0.8 * crack;
      col *= 1.0 + 1.6 * k * (1.0 - smoothstep(0.0, 0.05, dd));
    }
  }
  if (!gl_FrontFacing) col = g * vec3(1.0, 0.5, 0.2) * uOut * (0.8 + 0.3 * drift);
  gl_FragColor = vec4(col, 1.0);
  #include <fog_fragment>
}`;
