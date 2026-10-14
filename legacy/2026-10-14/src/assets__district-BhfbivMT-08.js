// assets__district-BhfbivMT 08 — math
// Lines 2124-2472 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function ut(n, t, e) {
  const r = n.onBeforeCompile;
  return (
    (n.onBeforeCompile = (o, l) => {
      (r && r.call(n, o, l),
        (o.uniforms.uWx = { value: so() }),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vWxP;
varying vec3 vWxN;`,
          )
          .replace(
            "#include <worldpos_vertex>",
            `#include <worldpos_vertex>
vWxP = (modelMatrix * vec4(transformed, 1.0)).xyz;
vWxN = normalize(mat3(modelMatrix) * objectNormal);`,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vWxP;
varying vec3 vWxN;
uniform sampler2D uWx;
float wxAsh = 0.0;
float wxBand = 0.0;`,
          )
          .replace(
            "#include <color_fragment>",
            `${
              e.band
                ? `
        // the old paint survives low down (the vertex colour is that paint): blistered, flaked through, faded
        vec4 bnS = texture2D(uWx, vec2(vWxP.x * 0.71 + vWxP.z * 0.69, vWxP.y) * 1.25);
        vec4 bnT = texture2D(uWx, vec2(vWxP.x * 0.69 - vWxP.z * 0.71, vWxP.y) * 0.37);
        float bnY = vWxP.y + (bnT.r - 0.5) * 0.42 + (bnS.r - 0.5) * 0.06;
        float bnK = 1.0 - smoothstep(${e.band[0].toFixed(3)}, ${e.band[1].toFixed(3)}, bnY);
        float bnScorch = smoothstep(${e.band[0].toFixed(3)} - 0.12, ${e.band[1].toFixed(3)}, bnY);
        bnK *= 1.0 - 0.9 * smoothstep(0.5, 0.6, bnS.g * 0.6 + bnS.r * 0.4 + bnScorch * 0.22);
        vec3 bnC = mix(vColor.rgb * (0.62 + 0.25 * bnS.b), vec3(0.035, 0.022, 0.014), bnScorch * 0.85);
        diffuseColor.rgb = mix(diffuseColor.rgb, bnC, bnK);
        wxBand = bnK;`
                : "#include <color_fragment>"
            }
        vec3 wxN = normalize(vWxN);
        vec4 wxT = texture2D(uWx, vWxP.xz * 0.37);
        vec4 wxS = texture2D(uWx, vec2(vWxP.x * 0.71 + vWxP.z * 0.69, vWxP.y * 0.9));
        float wxUp = smoothstep(0.3, 0.85, wxN.y);
        wxAsh = wxUp * (0.45 + 0.55 * smoothstep(0.3, 0.72, wxT.r + (wxS.g - 0.5) * 0.4)) * ${e.ash.toFixed(3)};
        float wxLow = (1.0 - smoothstep(0.02, 0.6, vWxP.y)) * (1.0 - wxUp);
        float wxStreak = (1.0 - abs(wxN.y)) * smoothstep(0.58, 0.82, wxS.b);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.2, 0.192, 0.18) * (0.8 + 0.4 * wxT.g), wxAsh);
        diffuseColor.rgb *= 1.0 - ${e.grime.toFixed(3)} * wxLow * (0.5 + 0.5 * wxS.g) - ${e.streak.toFixed(3)} * wxStreak;`,
          )
          .replace(
            "#include <roughnessmap_fragment>",
            `#include <roughnessmap_fragment>
        roughnessFactor = clamp(mix(roughnessFactor, ${e.bandRough ?? 0.5}, wxBand) + wxAsh * 0.6, 0.0, 1.0);`,
          )),
        e.coat &&
          (o.fragmentShader = o.fragmentShader.replace(
            "#include <lights_physical_fragment>",
            `#include <lights_physical_fragment>
        material.clearcoat *= 1.0 - wxAsh;`,
          )),
        e.env &&
          (o.fragmentShader = o.fragmentShader.replace(
            "#include <lights_fragment_maps>",
            `#include <lights_fragment_maps>
        #if defined( RE_IndirectSpecular )
        radiance *= ${e.env.toFixed(2)} * (1.0 - wxAsh * 0.8);
        clearcoatRadiance *= ${e.env.toFixed(2)} * (1.0 - wxAsh);
        #endif`,
          )));
    }),
    (n.customProgramCacheKey = () => "vehwx|" + t),
    (n.name = "veh_" + t),
    n
  );
}
let yt = null;
const uo = new Set(["paint", "trim", "metal", "lamp", "burnt", "tarp"]);
function zn() {
  if (yt) return yt;
  const n = io(),
    t = co(),
    e = ut(
      new Hn({
        vertexColors: !0,
        roughness: 0.38,
        metalness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      }),
      "paint",
      { ash: 0.32, grime: 0.4, streak: 0.08, coat: !0, env: 2.5 },
    ),
    r = ut(
      new e0({ vertexColors: !0, roughness: 0.74, metalness: 0 }),
      "trim",
      { ash: 0.3, grime: 0.25, streak: 0.05 },
    ),
    o = ut(
      new e0({ vertexColors: !0, roughness: 0.25, metalness: 1 }),
      "metal",
      { ash: 0.25, grime: 0.35, streak: 0.06, env: 2 },
    ),
    l = ut(
      new e0({
        map: n.map,
        roughnessMap: n.rough,
        roughness: 1,
        metalness: 0,
        envMapIntensity: 1.5,
      }),
      "glass",
      { ash: 0.3, grime: 0, streak: 0.06, env: 4 },
    ),
    s = new e0({ vertexColors: !0, roughness: 0.14, metalness: 0.4 });
  s.name = "veh_lamp";
  const c = new e0({
    color: 13134360,
    roughness: 0.2,
    metalness: 0.25,
    emissive: 16742416,
    emissiveIntensity: 0,
  });
  c.name = "veh_hazard";
  const a = new e0({
    map: t.map,
    roughness: 0.45,
    metalness: 0.05,
    emissive: 16777215,
    emissiveMap: t.glow,
    emissiveIntensity: 0.9,
  });
  a.name = "veh_decal";
  const h = new e0({
    vertexColors: !0,
    roughness: 0.96,
    metalness: 0,
    side: ht,
    map: fo(),
  });
  h.name = "veh_tarp";
  const f = v0("car_burnt"),
    y = f.clone();
  return (
    (y.userData = { ...f.userData }),
    (y.vertexColors = !0),
    ut(y, "burnt", {
      ash: 0.3,
      grime: 0.15,
      streak: 0.06,
      band: [0.3, 0.5],
      bandRough: 0.62,
    }),
    (yt = {
      paint: e,
      trim: r,
      metal: o,
      glass: l,
      lamp: s,
      hazard: c,
      decal: a,
      tarp: h,
      burnt: y,
      iron: v0("iron_black"),
      char: v0("ruin_char"),
    }),
    yt
  );
}
class kn {
  constructor() {
    this.b = new Map();
  }
  buf(t) {
    let e = this.b.get(t);
    return (e || ((e = { p: [], u: [], c: [] }), this.b.set(t, e)), e);
  }
  tri(t, e, r, o, l, s, c, a, h = a, f = a) {
    const y = this.buf(t);
    (y.p.push(e.x, e.y, e.z, r.x, r.y, r.z, o.x, o.y, o.z),
      y.u.push(l[0], l[1], s[0], s[1], c[0], c[1]),
      y.c.push(a[0], a[1], a[2], h[0], h[1], h[2], f[0], f[1], f[2]));
  }
  quad(t, e, r, o, l, s, c, a, h, f, y = f, m = f, b = f) {
    (this.tri(t, e, r, o, s, c, a, f, y, m),
      this.tri(t, e, o, l, s, a, h, f, m, b));
  }
}
const Ue = new z(),
  vt = new z(),
  un = new Gn();
function ho(n, t) {
  const e = Math.abs(t.x),
    r = Math.abs(t.y),
    o = Math.abs(t.z);
  return r >= e && r >= o
    ? [n.x, t.y > 0 ? -n.z : n.z]
    : e >= o
      ? [t.x > 0 ? -n.z : n.z, n.y]
      : [t.z > 0 ? n.x : -n.x, n.y];
}
function U(n, t, e, r, o = [1, 1, 1], l = "box") {
  const s = e.index ? e.toNonIndexed() : e;
  s.attributes.normal || s.computeVertexNormals();
  const c = s.attributes.position,
    a = s.attributes.normal,
    h = s.attributes.uv,
    f = n.buf(t),
    y = r ? r.determinant() < 0 : !1;
  r && un.getNormalMatrix(r);
  const m = y ? [0, 2, 1] : [0, 1, 2];
  for (let b = 0; b < c.count; b += 3)
    for (const v of m) {
      if (
        (Ue.fromBufferAttribute(c, b + v),
        r && Ue.applyMatrix4(r),
        f.p.push(Ue.x, Ue.y, Ue.z),
        l === "own" && h)
      )
        f.u.push(h.getX(b + v), h.getY(b + v));
      else {
        (vt.fromBufferAttribute(a, b + v),
          r && vt.applyMatrix3(un).normalize());
        const p = typeof l == "function" ? l(Ue, vt) : ho(Ue, vt);
        f.u.push(p[0], p[1]);
      }
      f.c.push(o[0], o[1], o[2]);
    }
  s !== e && s.dispose();
}
function po(n, t = 0.7) {
  const e = n.length / 9,
    r = new Float32Array(e * 3),
    o = new Float32Array(n.length),
    l = Math.cos(t),
    s = new Map();
  for (let a = 0; a < e; a++) {
    const h = a * 9,
      f = n[h + 3] - n[h],
      y = n[h + 4] - n[h + 1],
      m = n[h + 5] - n[h + 2],
      b = n[h + 6] - n[h],
      v = n[h + 7] - n[h + 1],
      p = n[h + 8] - n[h + 2];
    ((r[a * 3] = y * p - m * v),
      (r[a * 3 + 1] = m * b - f * p),
      (r[a * 3 + 2] = f * v - y * b));
    for (let d = 0; d < 3; d++) {
      const i = h + d * 3,
        u =
          Math.round(n[i] * 2e3) +
          "," +
          Math.round(n[i + 1] * 2e3) +
          "," +
          Math.round(n[i + 2] * 2e3);
      let x = s.get(u);
      (x || s.set(u, (x = [])), x.push(a));
    }
  }
  const c = (a) => {
    const h = r[a * 3],
      f = r[a * 3 + 1],
      y = r[a * 3 + 2],
      m = Math.hypot(h, f, y) || 1;
    return [h / m, f / m, y / m];
  };
  for (let a = 0; a < e; a++) {
    const h = c(a);
    for (let f = 0; f < 3; f++) {
      const y = a * 9 + f * 3,
        m =
          Math.round(n[y] * 2e3) +
          "," +
          Math.round(n[y + 1] * 2e3) +
          "," +
          Math.round(n[y + 2] * 2e3);
      let b = 0,
        v = 0,
        p = 0;
      for (const i of s.get(m)) {
        const u = c(i);
        u[0] * h[0] + u[1] * h[1] + u[2] * h[2] >= l &&
          ((b += r[i * 3]), (v += r[i * 3 + 1]), (p += r[i * 3 + 2]));
      }
      const d = Math.hypot(b, v, p);
      d > 1e-12
        ? ((o[y] = b / d), (o[y + 1] = v / d), (o[y + 2] = p / d))
        : ((o[y] = h[0]), (o[y + 1] = h[1]), (o[y + 2] = h[2]));
    }
  }
  return o;
}
function dn(n, t) {
  const e = new P0();
  e.name = t;
  const r = zn();
  for (const [o, l] of n.b) {
    if (!l.p.length) continue;
    const s = new St(),
      c = new Float32Array(l.p);
    (s.setAttribute("position", new V0(c, 3)),
      s.setAttribute("normal", new V0(po(c), 3)),
      s.setAttribute("uv", new V0(new Float32Array(l.u), 2)),
      uo.has(o) && s.setAttribute("color", new V0(new Float32Array(l.c), 3)),
      s.computeBoundingSphere());
    const a = new l0(s, r[o]);
    ((a.name = t + "_" + o),
      (a.castShadow = !0),
      (a.receiveShadow = !0),
      e.add(a));
  }
  return e;
}
function g0(n, t, e, r = 0.02, o = 1) {
  if (r < 0.012) return new p0(n, t, e);
  const l = Math.max(
      0.001,
      Math.min(r, n / 2 - 0.001, t / 2 - 0.001, e / 2 - 0.001),
    ),
    s = n / 2 - l,
    c = t / 2 - l,
    a = Math.max(5e-4, Math.min(r - l * 0.5, s, c) * 0.7),
    h = new je();
  (h.moveTo(-s + a, -c),
    h.lineTo(s - a, -c),
    h.quadraticCurveTo(s, -c, s, -c + a),
    h.lineTo(s, c - a),
    h.quadraticCurveTo(s, c, s - a, c),
    h.lineTo(-s + a, c),
    h.quadraticCurveTo(-s, c, -s, c - a),
    h.lineTo(-s, -c + a),
    h.quadraticCurveTo(-s, -c, -s + a, -c));
  const f = new at(h, {
    depth: Math.max(5e-4, e - 2 * l),
    bevelEnabled: !0,
    bevelThickness: l,
    bevelSize: l,
    bevelSegments: o,
    curveSegments: o,
  });
  return (f.translate(0, 0, -(e - 2 * l) / 2), f);
}
new J0();
