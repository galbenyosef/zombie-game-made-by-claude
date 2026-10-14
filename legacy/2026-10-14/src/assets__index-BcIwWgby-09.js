// assets__index-BcIwWgby 09 — math
// Lines 1979-2204 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Un(s, o) {
  const t = new n0({
      map: s,
      alphaTest: 0.45,
      side: p0,
      roughness: 0.65,
      metalness: 0,
    }),
    u = (r, a) => {
      ((r.uniforms.uWindT = o.uWindT),
        (r.uniforms.uWind = o.uWind),
        (r.uniforms.uSunDirF = o.uSunDirF),
        (r.uniforms.uSunColF = o.uSunColF),
        (r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec4 aCard;
attribute vec4 aShade;       // the crown's outward direction (world) + how far out in the crown the card sits (0 deep .. 1 out)
uniform float uWindT, uWind;
varying float vBack;
varying vec3 vShadeN;
varying float vOcc;
vec3 windAt(vec3 wp, float flex, float ph) {
  float gust = 0.55 + 0.45 * sin(uWindT * 0.35 + wp.x * 0.12 - wp.z * 0.08);
  float a = sin(uWindT * 1.7 + ph + wp.x * 0.6) * 0.6 + sin(uWindT * 3.1 + ph * 1.7 + wp.z * 0.9) * 0.4;
  return vec3(a * 0.7 + gust * 0.5, sin(uWindT * 2.3 + ph) * 0.25, a * 0.45) * flex * uWind * gust * 0.06;
}`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
      #ifdef USE_MAP
      vMapUv = vec2((mod(aCard.x, 4.0) + uv.x) * 0.25, (1.0 - floor(aCard.x / 4.0)) * 0.5 + uv.y * 0.5);
      #endif
      vBack = aCard.w; vShadeN = normalize(mat3(viewMatrix) * aShade.xyz); vOcc = aShade.w;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
      {
        vec3 wp0 = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        vec3 wdisp = windAt(wp0, aCard.y, aCard.z) * (1.0 + uv.y);
        transformed += (inverse(mat3(modelMatrix * instanceMatrix)) * wdisp);
      }`,
          )),
        a ||
          ((r.fragmentShader = r.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
uniform vec3 uSunDirF, uSunColF;
varying float vBack;
varying vec3 vShadeN;
varying float vOcc;`,
            )
            .replace(
              "#include <normal_fragment_begin>",
              `#include <normal_fragment_begin>
        normal = normalize(mix(normal, vShadeN, 0.72));                  // (the crown shaded as one round mass, not as flat cards)`,
            )
            .replace(
              "#include <color_fragment>",
              `#include <color_fragment>
        diffuseColor.rgb *= mix(0.42, 1.0, vOcc);`,
            )
            .replace(
              "#include <emissivemap_fragment>",
              `#include <emissivemap_fragment>
        {
          // the low sun through the leaves: bright where you look toward the sun
          vec3 Vw = normalize(cameraPosition - vWorldPosF);
          float thru = pow(max(dot(-Vw, uSunDirF), 0.0), 5.0);
          totalEmissiveRadiance += diffuseColor.rgb * uSunColF * thru * vBack * 0.55;
        }`,
            )
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vWorldPosF;`,
            )),
          (r.vertexShader = r.vertexShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vWorldPosF;`,
            )
            .replace(
              "#include <worldpos_vertex>",
              `#include <worldpos_vertex>
vWorldPosF = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;`,
            ))));
    };
  ((t.onBeforeCompile = (r) => u(r, !1)),
    (t.customProgramCacheKey = () => "card2"));
  const e = new za({ depthPacking: ka, map: s, alphaTest: 0.45, side: p0 });
  return (
    (e.onBeforeCompile = (r) => u(r, !0)),
    (e.customProgramCacheKey = () => "card2d"),
    { m: t, d: e }
  );
}
function Fs(s, o, t) {
  const u = [],
    e = [],
    r = [],
    a = [],
    p = new ws(s),
    i = Math.max(2, (s.length - 1) * 3),
    d = p.computeFrenetFrames(i, !1);
  let y = 0;
  const w = new dt();
  for (let z = 0; z <= i; z++) {
    const x = z / i,
      v = p.getPointAt(x),
      n = o[0] + (o[1] - o[0]) * Math.pow(x, 0.8);
    (z > 0 && (y += v.distanceTo(w)), w.copy(v));
    const l = d.normals[z],
      f = d.binormals[z];
    for (let h = 0; h <= t; h++) {
      const c = (h / t) * Math.PI * 2,
        M = Math.cos(c),
        m = Math.sin(c),
        k = M * l.x + m * f.x,
        S = M * l.y + m * f.y,
        A = M * l.z + m * f.z;
      (u.push(v.x + k * n, v.y + S * n, v.z + A * n),
        e.push(k, S, A),
        r.push((h / t) * Math.PI * 2 * Math.max(n, 0.04), y));
    }
  }
  for (let z = 0; z < i; z++)
    for (let x = 0; x < t; x++) {
      const v = z * (t + 1) + x,
        n = v + t + 1;
      a.push(v, n, v + 1, v + 1, n, n + 1);
    }
  const g = new Rt();
  return (
    g.setAttribute("position", new xt(u, 3)),
    g.setAttribute("normal", new xt(e, 3)),
    g.setAttribute("uv", new xt(r, 2)),
    g.setIndex(a),
    g
  );
}
function Ws(s) {
  let o = 0,
    t = 0;
  for (const y of s) ((o += y.attributes.position.count), (t += y.index.count));
  const u = new Float32Array(o * 3),
    e = new Float32Array(o * 3),
    r = new Float32Array(o * 2),
    a = new Uint32Array(t);
  let p = 0,
    i = 0;
  for (const y of s) {
    (u.set(y.attributes.position.array, p * 3),
      e.set(y.attributes.normal.array, p * 3),
      r.set(y.attributes.uv.array, p * 2));
    for (let w = 0; w < y.index.count; w++) a[i + w] = y.index.array[w] + p;
    ((p += y.attributes.position.count), (i += y.index.count));
  }
  const d = new Rt();
  return (
    d.setAttribute("position", new vt(u, 3)),
    d.setAttribute("normal", new vt(e, 3)),
    d.setAttribute("uv", new vt(r, 2)),
    d.setIndex(new vt(a, 1)),
    d
  );
}
function En(s, o) {
  const t = [],
    u = [],
    e = Ht(0, 1, 0),
    r = new dt(),
    a = new dt(),
    p = () => Ht(s() - 0.5, s() - 0.5, s() - 0.5);
  function i(w, g, z, x, v) {
    const n = [w.clone()],
      l = g.clone(),
      f = w.clone(),
      h = v === 0 ? 7 : 5;
    for (let m = 0; m < h; m++)
      (l
        .addScaledVector(p(), o.wobble ?? 0.35)
        .addScaledVector(e, (o.rise ?? 0.08) - (o.droop ?? 0) * v * 0.08)
        .normalize(),
        f.addScaledVector(l, z / h),
        n.push(f.clone()));
    const c = Math.max(0.012, x * (o.taper ?? 0.55));
    if (
      (t.push(Fs(n, [x, c], v === 0 ? 10 : v === 1 ? 7 : 5)), v >= o.levels)
    ) {
      u.push({ p: f.clone(), d: l.clone(), pts: n });
      return;
    }
    const M = o.kids[v];
    for (let m = 0; m < M; m++) {
      const k =
          (o.from ?? 0.35) +
          (1 - (o.from ?? 0.35)) * ((m + 0.3 + s() * 0.5) / M),
        S = n[Math.min(n.length - 1, Math.round(k * (n.length - 1)))];
      a.crossVectors(l, p()).normalize();
      const A = l
        .clone()
        .applyAxisAngle(a, (o.angle ?? 0.7) * (0.7 + s() * 0.6));
      (r.copy(A),
        (r.y = 0),
        r.lengthSq() > 1e-4 &&
          o.spreadOut &&
          A.addScaledVector(r.normalize(), o.spreadOut).normalize(),
        i(
          S,
          A,
          z * (o.lenRatio ?? 0.62) * (0.8 + s() * 0.4),
          Math.max(0.015, c * (0.8 + 0.4 * (1 - k))),
          v + 1,
        ));
    }
  }
  const d = Ht(o.at[0], Me(o.at[0], o.at[1]) - 0.05, o.at[1]),
    y = Ht(o.lean?.[0] ?? 0, 1, o.lean?.[1] ?? 0).normalize();
  return (i(d, y, o.height * 0.42, o.r0, 0), { geo: Ws(t), tips: u });
}
