// assets/park-CwBfNU5l 05 — math
// Lines 1348-1640 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function Ee(e, a, t) {
  const r = e.length,
    o = new Float32Array(r * 12),
    n = new Float32Array(r * 12),
    i = new Float32Array(r * 8),
    f = new Float32Array(r * 12),
    w = new Uint32Array(r * 6),
    s = I(0, 0, 0),
    l = I(0, 0, 0),
    u = I(0, 0, 0),
    c = new Vt();
  for (let h = 0; h < r; h++) {
    const v = e[h],
      S = v.size;
    (v.ivy
      ? s.crossVectors(v.ivy, v.along).normalize()
      : (s.set(-v.along.z, 0, v.along.x),
        s.lengthSq() < 1e-4 && s.set(1, 0, 0),
        s.normalize(),
        s.applyAxisAngle(v.along, (a() - 0.5) * 1.4)),
      l.crossVectors(v.along, s).normalize(),
      l.y < 0 && !v.ivy && (l.negate(), s.negate()),
      u.copy(l).lerp(v.out, 0.6).normalize());
    const [d, y, m, F] = Wa(v.cell),
      C = [
        [0, -0.5, d, y],
        [1, -0.5, m, y],
        [1, 0.5, m, F],
        [0, 0.5, d, F],
      ],
      L = v.pos.clone().addScaledVector(v.along, -S * 0.25);
    for (let z = 0; z < 4; z++) {
      const [W, D, V, A] = C[z],
        K = h * 4 + z;
      ((o[K * 3] = L.x + v.along.x * W * S + s.x * D * S),
        (o[K * 3 + 1] = L.y + v.along.y * W * S + s.y * D * S),
        (o[K * 3 + 2] = L.z + v.along.z * W * S + s.z * D * S),
        (n[K * 3] = u.x),
        (n[K * 3 + 1] = u.y),
        (n[K * 3 + 2] = u.z),
        (i[K * 2] = V),
        (i[K * 2 + 1] = A));
    }
    t(v, c);
    for (let z = 0; z < 4; z++) {
      const W = h * 4 + z;
      ((f[W * 3] = c.r), (f[W * 3 + 1] = c.g), (f[W * 3 + 2] = c.b));
    }
    w.set([h * 4, h * 4 + 1, h * 4 + 2, h * 4, h * 4 + 2, h * 4 + 3], h * 6);
  }
  const M = new Q0();
  return (
    M.setAttribute("position", new $t(o, 3)),
    M.setAttribute("normal", new $t(n, 3)),
    M.setAttribute("uv", new $t(i, 2)),
    M.setAttribute("color", new $t(f, 3)),
    M.setIndex(new $t(w, 1)),
    M
  );
}
const qe = `
      {
        // the high crown sways slowly (a dawn breeze); the trunks stay put
        vec4 swq = vec4(transformed, 1.0);
        vec3 sw = (modelMatrix * swq).xyz;
        float k = clamp((sw.y - 5.0) / 22.0, 0.0, 1.0) * 0.12;
        transformed.x += sin(uPT * 0.7 + sw.x * 0.21 + sw.z * 0.13) * k + sin(uPT * 2.3 + sw.y * 1.7) * k * 0.15;
        transformed.z += sin(uPT * 0.55 + sw.z * 0.19 - sw.x * 0.07) * k * 0.8;
      }`;
function Te(e, a, t, r = null) {
  const o = e.mats.get(a, r ? { color: r } : {});
  return Gt(o, t, (n) => {
    ((n.vertexShader = n.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
attribute vec3 aK;
varying vec3 vK;
varying vec3 vBN;`,
      )
      .replace(
        "#include <uv_vertex>",
        `#include <uv_vertex>
vK = aK; vBN = normalize(mat3(modelMatrix) * normal);`,
      )),
      (n.fragmentShader = n.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vK;
varying vec3 vBN;`,
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      {
        // the foot of the trunk: rougher, darker, damp, a green bloom of algae on the north side; each tree its own tint
        float foot = vK.x, north = clamp(-vBN.z * 0.7 + 0.3, 0.0, 1.0);
        diffuseColor.rgb *= mix(vec3(1.0), vec3(1.06, 1.0, 0.92), vK.y);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.55, 0.6, 0.45), foot * 0.75);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.07, 0.03), foot * north * 0.45 + clamp(vBN.y, 0.0, 1.0) * 0.25);
      }`,
        )));
  });
}
function Da(e, a) {
  const t = Gt(
    new u0({
      map: e,
      alphaTest: 0.45,
      side: y0,
      roughness: 0.85,
      metalness: 0,
      vertexColors: !0,
    }),
    a,
    (o) => {
      o.vertexShader = o.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uPT;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
` + qe,
        );
    },
  );
  t.userData.noCast = !1;
  const r = new Qe({ depthPacking: Je, map: e, alphaTest: 0.45, side: y0 });
  return (
    (r.onBeforeCompile = (o) => {
      ((o.uniforms.uPT = x0.uPT),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uPT;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + qe,
          )));
    }),
    (r.customProgramCacheKey = () => "park3_carddepth"),
    { m: t, d: r }
  );
}
let Pe = null;
function We() {
  if (!Pe) {
    const e = buildParkGround();
    Pe = { atlas: e, ...Da(e, "cards") };
  }
  return Pe;
}
function Oa(e, a, t) {
  const r = new P0();
  r.name = "park_trees";
  const o = We(),
    n = o.atlas,
    i = Te(e, "park3_bark", "bark_plane"),
    f = Te(e, "forest_bark", "bark_oak", 10131084),
    w = { m: o.m, d: o.d },
    s = new Map(),
    l = [],
    u = (c, M) => {
      const h = c.shade;
      c.cell === t0.ivy
        ? M.setRGB(0.9 * h, 1 * h, 0.85 * h)
        : c.cell === t0.planeLeaf || c.cell === t0.oakLeaf
          ? M.setRGB(0.8 * h, 0.74 * h, 0.64 * h)
          : M.setRGB(0.6 * h, 0.58 * h, 0.56 * h);
    };
  for (const c of a) {
    const M = buildYoungTrees(c, t),
      h = ee(c.x, c.z);
    let v = s.get(h);
    (v || s.set(h, (v = { plane: [], oak: [], cards: [] })),
      (c.kind === "oak" ? v.oak : v.plane).push(...M.bark),
      v.cards.push(...M.cards),
      l.push({ x: c.x, z: c.z, r: c.r * 1.25 + 0.12, tree: !0 }));
  }
  for (const [c, M] of s) {
    for (const [h, v, S] of [
      ["plane", M.plane, i],
      ["oak", M.oak, f],
    ]) {
      if (!v.length) continue;
      const d = new jt(v0(v), S);
      ((d.name = "trees_" + h + "_" + c),
        (d.castShadow = !0),
        (d.receiveShadow = !0),
        r.add(d));
    }
    if (M.cards.length) {
      const h = new jt(Ee(M.cards, t, u), w.m);
      ((h.name = "trees_cards_" + c),
        (h.castShadow = !0),
        (h.receiveShadow = !0),
        (h.customDepthMaterial = w.d),
        r.add(h));
    }
  }
  return {
    group: r,
    circles: l,
    atlas: n,
    mats: { planeBark: i, oakBark: f, cards: w },
  };
}
function Ka(e, a, t, r, o, n, i, f = 0.2) {
  const s = new xt(
    t,
    o,
    r,
    Math.max(2, Math.round(t / 0.24)),
    Math.max(2, Math.round(o / 0.24)),
    Math.max(2, Math.round(r / 0.24)),
  );
  (s.deleteAttribute("uv"), s.deleteAttribute("normal"));
  const l = Be(s, 1e-4),
    u = l.attributes.position,
    c = t / 2 - f,
    M = o / 2 - f,
    h = r / 2 - f,
    v = i() * 100,
    S = Math.cos(n),
    d = Math.sin(n),
    y = (m, F, C) =>
      Math.sin(m * 2.7 + v) *
        Math.sin(C * 3.1 - v) *
        Math.sin(F * 2.3 + m * 0.7) *
        0.5 +
      Math.sin(m * 7.9 + C * 6.3 + F * 5.1 + v) * 0.25 +
      Math.sin(m * 13.7 - C * 11.9 + F * 9.3) * 0.12;
  for (let m = 0; m < u.count; m++) {
    const F = u.getX(m),
      C = u.getY(m),
      L = u.getZ(m),
      z = Math.max(-c, Math.min(c, F)),
      W = Math.max(-M, Math.min(M, C)),
      D = Math.max(-h, Math.min(h, L));
    let V = F - z,
      A = C - W,
      K = L - D;
    const J = Math.hypot(V, A, K) || 1;
    ((V /= J), (A /= J), (K /= J));
    const q = z + V * f,
      st = o / 2 + W + A * f,
      j = D + K * f,
      Y = e + q * S + j * d,
      x = a - q * d + j * S,
      p = V * S + K * d,
      g = -V * d + K * S,
      T = y(Y, st, x) * 0.08 * (C < -o / 2 + 0.05 ? 0.2 : 1);
    u.setXYZ(
      m,
      Y + p * T,
      Math.max(0, st + A * T * (A > 0.5 ? 0.6 : 1)),
      x + g * T,
    );
  }
  return (l.computeVertexNormals(), N(l));
}
function Ua(e, a, t, r, o) {
  const n = new z0(1, 22, 16);
  (n.deleteAttribute("uv"), n.deleteAttribute("normal"));
  const i = Be(n, 1e-4),
    f = i.attributes.position,
    w = o() * 100;
  for (let s = 0; s < f.count; s++) {
    const l = f.getX(s),
      u = f.getY(s),
      c = f.getZ(s),
      M = (u + 1) / 2,
      h =
        r < 3.2
          ? t * Math.pow(Math.max(0, 1 - Math.pow(M, 2.4)), 0.45)
          : t *
            Math.pow(Math.sin(Math.PI * Math.min(1, 0.1 + M * 0.92)), 0.6) *
            (1 - 0.5 * M),
      v =
        1 +
        0.14 * Math.sin(l * 5 + w) * Math.sin(c * 4 - w) * Math.sin(u * 3 + w) +
        0.07 * Math.sin(u * 11 + l * 3 + c * 4);
    f.setXYZ(s, e + l * h * v, Math.max(0, M * r - 0.15), a + c * h * v);
  }
  return (i.computeVertexNormals(), N(i));
}
