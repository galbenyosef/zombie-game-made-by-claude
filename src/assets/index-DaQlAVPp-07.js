// assets/index-DaQlAVPp 07 — extra
// Lines 37002-37258 of readable/assets/index-DaQlAVPp.pretty.js (statement-aligned).
function iS(
  r,
  { amt: e = 0.5, scale: t = 0.23, ceilH: n = 3, gravity: i = 1 } = {},
) {
  const s = nS();
  r.userData.breakup = e;
  const a = r.onBeforeCompile;
  return (
    (r.onBeforeCompile = (o, l) => {
      (a && a(o, l),
        (o.uniforms.uBrk = { value: s }),
        (o.uniforms.uBrkAmt = { value: e }),
        (o.uniforms.uBrkScale = { value: t }),
        (o.uniforms.uBrkCeil = { value: n }),
        (o.uniforms.uBrkGrav = { value: i }),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vBrkW;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vBrkW = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vBrkW;
uniform sampler2D uBrk;
uniform float uBrkAmt;
uniform float uBrkScale;
uniform float uBrkCeil;
uniform float uBrkGrav;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      vec3 brkN = normalize(cross(dFdx(vBrkW), dFdy(vBrkW)));               // faces the viewer: ceilings seen from below have y < 0
      vec3 brkA = abs(brkN);
      vec2 brkUv = brkA.y > 0.7 ? vBrkW.xz : (brkA.x > brkA.z ? vBrkW.zy : vBrkW.xy);
      vec4 brkS = texture2D(uBrk, brkUv * uBrkScale);
      vec4 brkS2 = texture2D(uBrk, brkUv * uBrkScale * 0.37 + 0.31);         // a second, larger octave: nothing repeats inside a room
      float brkTone = 1.0 + (brkS.r + brkS2.r - 1.0) * 0.45;                 // ~0.6..1.4, mean 1, gentle
      float brkStain = brkS.g;
      float brkVert = 1.0 - smoothstep(0.55, 0.85, brkA.y);
      float brkLowH = 0.42 + (brkS2.r - 0.5) * 0.35;                         // the damp line wanders along the wall
      float brkGrime = uBrkGrav * brkVert * (0.7 * (1.0 - smoothstep(0.0, brkLowH, vBrkW.y)) + 0.5 * smoothstep(uBrkCeil - 0.9, uBrkCeil, vBrkW.y) * (0.4 + brkStain));
      float brkK = clamp(mix(1.0, brkTone, uBrkAmt) * (1.0 - 0.5 * brkGrime * uBrkAmt) * (1.0 - 0.2 * brkStain * uBrkAmt), 0.05, 1.7);
      diffuseColor.rgb *= brkK;
      // ceilings: a few big old water stains in world space (never tiling), yellow-brown with a darker tide line
      float brkCeil = (1.0 - smoothstep(-0.9, -0.7, brkN.y)) * uBrkGrav;
      float brkIn = smoothstep(0.68, 0.74, brkS2.g), brkRing = smoothstep(0.655, 0.68, brkS2.g) - smoothstep(0.69, 0.75, brkS2.g);
      diffuseColor.rgb *= mix(vec3(1.0), mix(vec3(0.9, 0.8, 0.62), vec3(0.72, 0.6, 0.44), brkRing), brkCeil * uBrkAmt * clamp(brkIn * 0.9 + brkRing * 0.7, 0.0, 1.0));`,
          )
          .replace(
            "#include <roughnessmap_fragment>",
            `#include <roughnessmap_fragment>
      roughnessFactor = clamp(roughnessFactor + (1.0 - brkK) * 0.18, 0.04, 1.0);`,
          )));
    }),
    (r.customProgramCacheKey = () => "brk" + e + "_" + t + "_" + n + "_" + i),
    (r.needsUpdate = !0),
    r
  );
}
const Lp = "./";
let Mi = {},
  Dp = 8;
const kn = new Map(),
  Bs = new Map(),
  sS = new lp();
async function Ga(r, e) {
  if (kn.has(r)) return kn.get(r);
  const t = sS
    .loadAsync(r)
    .then(
      (n) => (
        (n.wrapS = n.wrapT = ji),
        (n.colorSpace = e ? Ht : Cn),
        (n.anisotropy = Dp),
        (n.generateMipmaps = !0),
        n
      ),
    )
    .catch(() => null);
  return (kn.set(r, t), t);
}
let Yc = !1;
const Vo = new Map();
async function qh(r) {
  const e = Mi[r];
  if (!e || kn.has("set:" + r)) return;
  if (kn.has("load:" + r)) return kn.get("load:" + r);
  const t = "?v=" + (e.baked || 0),
    n = (s) => `${Lp}tex/${r}/${s}.${e.ext?.[s] || "png"}${t}`,
    i = Promise.all([
      e.maps.albedo ? Ga(n("albedo"), !0) : null,
      e.maps.normal ? Ga(n("normal"), !1) : null,
      e.maps.orm ? Ga(n("orm"), !1) : null,
      e.maps.emissive ? Ga(n("emissive"), !0) : null,
    ]).then(([s, a, o, l]) => {
      kn.set("set:" + r, { albedo: s, normal: a, orm: o, emissive: l });
      for (const [c, h] of Vo.get(r) || []) (Fp(c, r, h), (c.needsUpdate = !0));
      Vo.delete(r);
    });
  return (kn.set("load:" + r, i), i);
}
async function Up(r, e, { lazy: t = !1 } = {}) {
  Dp = Math.min(16, r?.capabilities?.getMaxAnisotropy?.() ?? 8);
  try {
    Mi = await (
      await fetch(Lp + "tex/manifest.json", { cache: "no-store" })
    ).json();
  } catch {
    Mi = {};
  }
  if (((Yc = t), Yc)) return;
  const n = e || Object.keys(Mi);
  await Promise.all(n.map((i) => qh(i)));
}
async function rS(r) {
  await Promise.all((r || []).map((e) => qh(e)));
}
function Np(r, e = {}) {
  const t =
    r + "|" + JSON.stringify(e, (h, d) => (d && d.isColor ? d.getHex() : d));
  if (Bs.has(t)) return Bs.get(t);
  const n = Xh[r] || { rough: 0.8 },
    i = Mi[r],
    s = kn.get("set:" + r),
    a = n.extra && Object.keys(n.extra).length,
    o = {
      roughness: e.rough ?? n.rough ?? 0.8,
      metalness: e.metal ?? n.metal ?? 0,
      side: e.side ?? Vn,
    },
    l = a ? new Sl(o) : new ss(o);
  (!s && Yc && i && ((Vo.get(r) || Vo.set(r, []).get(r)).push([l, e]), qh(r)),
    Fp(l, r, e, !0),
    (l.userData.catalog = r));
  const c = e.breakup ?? n.bk;
  return (
    c && iS(l, { amt: c, scale: n.bkScale ?? 0.23, ceilH: n.ceilH ?? 3 }),
    Bs.set(t, l),
    l
  );
}
function Fp(r, e, t, n = !1) {
  const i = Xh[e] || { tile: 1, fallback: "#808080" },
    s = Mi[e],
    a = kn.get("set:" + e);
  if (a && a.albedo) {
    const o = t.uv ?? s.tile ?? i.tile ?? 1,
      l = 1 / o,
      c = (h) => {
        if (!h) return null;
        const d = h.clone();
        return (d.repeat.set(l, l), (d.needsUpdate = !0), d);
      };
    if (
      ((r.map = c(a.albedo)),
      a.normal &&
        ((r.normalMap = c(a.normal)),
        (r.normalScale = new j(s.normalScale ?? 1, s.normalScale ?? 1))),
      a.orm &&
        ((r.aoMap = c(a.orm)),
        (r.roughnessMap = r.aoMap),
        (r.roughness = 1),
        (r.aoMapIntensity = t.ao ?? 1),
        (t.metal ?? s.metal ?? i.metal ?? 0) > 0.05
          ? ((r.metalnessMap = r.aoMap), (r.metalness = 1))
          : (r.metalness = t.metal ?? 0)),
      a.emissive &&
        ((r.emissiveMap = c(a.emissive)),
        (r.emissive = new ye(1, 1, 1)),
        (r.emissiveIntensity = t.emissive ?? 1)),
      (r.color = new ye(t.color ?? 16777215)),
      s.extra)
    )
      for (const [h, d] of Object.entries(s.extra)) Ac(r, h, d);
  } else n && (r.color = new ye(t.color ?? i.fallback));
  if (n) {
    if (i.extra) for (const [o, l] of Object.entries(i.extra)) Ac(r, o, l);
    if (t.extra) for (const [o, l] of Object.entries(t.extra)) Ac(r, o, l);
  }
}
function Ac(r, e, t) {
  e in r && (r[e] && r[e].isColor ? r[e].set(t) : (r[e] = t));
}
function aS(r, e = {}) {
  const t = "paint|" + r + "|" + JSON.stringify(e);
  if (Bs.has(t)) return Bs.get(t);
  const n = new ss({
    color: r,
    roughness: e.rough ?? 0.8,
    metalness: e.metal ?? 0,
    ...(e.props || {}),
  });
  return (Bs.set(t, n), n);
}
function oS(r) {
  return !!Mi[r];
}
function lS() {
  return Object.keys(Mi);
}
const cS = Xh,
  Od = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        baked: lS,
        catalog: cS,
        ensure: rS,
        get: Np,
        has: oS,
        paint: aS,
        preload: Up,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  wn = new P(),
  _i = new P();
function Op(r, e = null, t = 0) {
  const n = r.attributes.position,
    i = r.attributes.normal,
    s = new Float32Array(n.count * 2),
    a = e ? new $e().getNormalMatrix(e) : null,
    o = Math.cos(t),
    l = Math.sin(t);
  for (let c = 0; c < n.count; c++) {
    (wn.fromBufferAttribute(n, c),
      _i.fromBufferAttribute(i, c),
      e && (wn.applyMatrix4(e), _i.applyMatrix3(a).normalize()));
    const h = Math.abs(_i.x),
      d = Math.abs(_i.y),
      u = Math.abs(_i.z);
    let f, p;
    (d >= h && d >= u
      ? ((f = wn.x), (p = _i.y > 0 ? -wn.z : wn.z))
      : h >= u
        ? ((f = _i.x > 0 ? -wn.z : wn.z), (p = wn.y))
        : ((f = _i.z > 0 ? wn.x : -wn.x), (p = wn.y)),
      (s[c * 2] = f * o - p * l),
      (s[c * 2 + 1] = f * l + p * o));
  }
  return (r.setAttribute("uv", new ot(s, 2)), r);
}
function Bd(r, e, t, n, i, s) {
  const a = new Zt(n - r, i - e, s - t);
  return (a.translate((r + n) / 2, (e + i) / 2, (t + s) / 2), Op(a));
}
