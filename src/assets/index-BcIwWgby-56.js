// assets/index-BcIwWgby 56 — math
// Lines 16913-17258 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Ec(s, o) {
  const t = [],
    e = new Map(),
    r = (n, l) => `${Math.floor(n / 4)},${Math.floor(l / 4)}`,
    a = (n, l, f) => {
      const h = Math.floor((n - 9) / 4),
        c = Math.floor((n + 9) / 4),
        M = Math.floor((l - 9) / 4),
        m = Math.floor((l + 9) / 4);
      for (let k = h; k <= c; k++)
        for (let S = M; S <= m; S++)
          for (const A of e.get(`${k},${S}`) || [])
            if (Math.hypot(A.x - n, A.z - l) < f + A.space) return !0;
      return !1;
    },
    p = (n) => {
      t.push(n);
      const l = r(n.x, n.z);
      (e.has(l) || e.set(l, []), e.get(l).push(n));
    },
    i = (n, l) => fe(n, l, to.a[0], to.a[1], to.b[0], to.b[1]),
    d = s.path,
    y = (n, l) => {
      if (n > -51.6 && n < 51.6 && l > 56.6 && l < 217.4)
        return s.dPathAt(n, l);
      let f = 1e9;
      for (let h = 0; h < d.n; h += 4)
        f = Math.min(f, (d.x[h] - n) ** 2 + (d.z[h] - l) ** 2);
      return ((f = Math.sqrt(f)), f < 18 ? f : 99);
    },
    w = (n, l, f) =>
      !(
        l < St.z + 1.5 ||
        (n > _t.x0 - 4 && n < _t.x1 + 4 && l > _t.z0 - 4 && l < _t.z1 + 5) ||
        s.sdAt(n, l) < f * 1.8 + 0.7 ||
        s.dStreamAt(n, l) < 2.6 ||
        Ds(n, l, f + 0.6)
      ),
    g = [
      [-5.2, 83.5],
      { s: 26, sd: -1, d: 7.5 },
      { s: 74, sd: 0, d: 7.4 },
      { s: 117, sd: -1, d: 7.2 },
      { s: 169, sd: 0, d: 7.6 },
      { s: 218, sd: -1, d: 7 },
      [-8.4, 164],
      [-7.4, 190.5],
      [18.4, 188.5],
    ],
    z = (n, l, f) => {
      for (const h in be) {
        const c = be[h];
        for (let M = 0; M < c.length - 1; M++)
          if (fe(n, l, c[M][0], c[M][1], c[M + 1][0], c[M + 1][1]) < f)
            return !0;
      }
      return !1;
    };
  for (const n of g) {
    let l, f;
    if (Array.isArray(n)) [l, f] = n;
    else {
      const h = s.at(n.s),
        c = de.find((m) => Math.abs(m.s - n.s) < 2),
        M =
          n.sd || (c ? Math.sign((c.x - h.x) * h.tz - (c.z - h.z) * h.tx) : 1);
      ((l = h.x + h.tz * M * n.d), (f = h.z - h.tx * M * n.d));
      for (
        let m = 0;
        m < 8 &&
        (z(l, f, 2.6) ||
          je.some((k) => Math.hypot(k.x - l, k.z - f) < k.r + 4.5) ||
          i(l, f) < 7 ||
          Ds(l, f, 1.5));
        m++
      ) {
        const k = s.at(n.s + (m % 2 ? -1 : 1) * (1 + (m >> 1)) * 2.5);
        ((l = k.x + k.tz * M * n.d), (f = k.z - k.tx * M * n.d));
      }
    }
    p({
      kind: "oak",
      x: l,
      z: f,
      r: 0.55 + o() * 0.2,
      H: 15 + o() * 4,
      space: 5.5,
      seed: o(),
    });
  }
  for (const [n, l, f] of [
    [-29.5, 80.6, "oak"],
    [-41, 82.6, "oak"],
    [-24.5, 82.3, "cedar"],
    [-35.2, 80.9, "cedar"],
    [-19.5, 80.4, "cedar"],
  ])
    p(
      f === "oak"
        ? {
            kind: f,
            x: n,
            z: l,
            r: 0.62 + o() * 0.15,
            H: 17 + o() * 3,
            space: 5.5,
            seed: o(),
          }
        : {
            kind: f,
            x: n,
            z: l,
            r: 0.58 + o() * 0.1,
            H: 30 + o() * 4,
            space: 3.6,
            seed: o(),
          },
    );
  for (const n of je)
    p({
      kind: "giant",
      x: n.x,
      z: n.z,
      r: n.r,
      H: 12,
      space: 3.2 + n.r,
      giant: n.name,
    });
  for (const n of ac) {
    const l = 0.4 + o() * 0.12,
      f = 24 + o() * 8,
      h = o();
    je.some((c) => Math.hypot(c.x - n.x, c.z - n.z) < c.r + 3) ||
      (i(n.x, n.z) < 5.5 && n.z < to.a[1] + 3) ||
      p({ kind: "cedar", x: n.x, z: n.z, r: l, H: f, space: 3.4, seed: h });
  }
  for (let n = 0; n < 34e3 && t.length < 560; n++) {
    const l = -57 + o() * 114,
      f = 78 + o() * 138,
      h = y(l, f),
      c = s.clearingSd(l, f);
    if (Math.min(h, c + 6) > 34) continue;
    const M = h < 9 ? 0.75 + o() * 0.35 : 0.45 + o() * 0.45,
      m = 0.26 + M * 0.42;
    if (!w(l, f, m)) continue;
    const k = $t(92, 80, f) * $t(28, 16, Math.abs(l - 2));
    if (
      (k > 0 && (o() < k * 0.85 || h < 9 * k)) ||
      (i(l, f) < 5.5 && f < to.a[1] + 3)
    )
      continue;
    const S = 4 + m * 2.4;
    a(l, f, S) ||
      p({
        kind: "cedar",
        x: l,
        z: f,
        r: m,
        H: 21 + M * 13 + o() * 3,
        space: S,
        seed: o(),
      });
  }
  for (
    let n = 0;
    n < 1e4 && t.filter((l) => l.kind === "young").length < 190;
    n++
  ) {
    const l = -55 + o() * 110,
      f = 78 + o() * 136,
      h = y(l, f),
      c = s.clearingSd(l, f);
    if (Math.min(h, c + 4) > 22) continue;
    const M = 0.08 + o() * 0.09;
    if (!w(l, f, M + 0.2)) continue;
    const m = $t(96, 80, f);
    o() > 0.35 + m * 0.65 ||
      (i(l, f) < 4.5 && f < to.a[1] + 1) ||
      a(l, f, 2.2) ||
      p({
        kind: "young",
        x: l,
        z: f,
        r: M,
        H: 6 + o() * 5 + (1 - m) * 2,
        space: 1.6,
        seed: o(),
      });
  }
  const x = [];
  for (let n = 0; n < 9e4 && x.length < 3600; n++) {
    const l = -125 + o() * 250,
      f = 70 + o() * 255;
    if (f < 79 && Math.abs(l) < 40) continue;
    const h = y(l, f),
      c = s.clearingSd(l, f),
      M = Math.min(h, c + 6);
    M < 29 ||
      (M > 58 && o() < 0.55) ||
      s.dStreamAt(l, f) < 3 ||
      (l > _t.x0 - 6 && l < _t.x1 + 6 && f > _t.z0 - 6 && f < _t.z1 + 8) ||
      x.push({
        x: l,
        z: f,
        H: 20 + o() * 14,
        w: 5 + o() * 3,
        v: Math.floor(o() * 4),
        y: s.heightAt(l, f),
      });
  }
  for (let n = 0; n < 6e4 && x.length < 6400; n++) {
    const l = -110 + o() * 220,
      f = 72 + o() * 230;
    if (f < 79 && Math.abs(l) < 40) continue;
    const h = Math.min(y(l, f), s.clearingSd(l, f) + 6);
    h < 40 ||
      h > 80 ||
      s.dStreamAt(l, f) < 3 ||
      x.push({
        x: l,
        z: f,
        H: 20 + o() * 14,
        w: 5.5 + o() * 3.5,
        v: Math.floor(o() * 4),
        y: s.heightAt(l, f),
      });
  }
  const v = (n, l, f) => {
    const h = Math.sin(n * 12.9898 + l * 78.233 + f * 37.719) * 43758.5453;
    return h - Math.floor(h);
  };
  for (const [n, l, f] of [
    [-32.4, 79.2, "young"],
    [-38.1, 79.4, "young"],
    [-44.4, 79.3, "young"],
    [-41.3, 79, "young"],
    [-47.4, 83.3, "young"],
    [-26.6, 78.7, "young"],
    [-51.6, 83.1, "young"],
    [-55, 80.5, "young"],
  ]) {
    const h = f === "young",
      c = h ? 0.1 + 0.07 * v(n, l, 1) : 0.5 + 0.1 * v(n, l, 1);
    w(n, l, h ? c + 0.2 : c) &&
      (t.some(
        (M) =>
          Math.hypot(M.x - n, M.z - l) <
          (h ? 2.4 : 4.4) + (M.kind === "young" ? 0 : M.r),
      ) ||
        p({
          kind: f,
          x: n,
          z: l,
          r: c,
          H: h ? 7 + 3 * v(n, l, 2) : 26 + 6 * v(n, l, 2),
          space: h ? 1.6 : 3.6 + c * 2.4,
          seed: v(n, l, 3),
          own: !0,
        }));
  }
  return { trees: t, far: x };
}
function qc() {
  const s = At("forest_bark"),
    t = { tMoss: { value: At("garden_moss").map } };
  return i0(s, "bark", (u) => {
    (Object.assign(u.uniforms, t),
      (u.vertexShader = u.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute vec3 aK;
varying vec3 vK;
varying vec3 vWN;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vK = aK; vWN = normalize(mat3(modelMatrix) * normal);`,
        )),
      (u.fragmentShader = u.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform sampler2D tMoss;
varying vec3 vK;
varying vec3 vWN;`,
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      {
        // moss: thick at the foot, up the north side, on whatever faces the sky; each tree its own tint
        float giK = step(1.5, vK.y), cav = clamp(vK.y - 2.0, 0.0, 1.0) * giK;
        // (round 5: aK.z >= 2 on dead wood - the fallen tree's and the log's bark come away in patches, the bare wood under it
        // weathered grey: aK.z - 2 how bare; the north side's moss then as 0.25)
        float bareK = clamp(vK.z - 2.0, 0.0, 1.0) * step(1.5, vK.z) * giK, northK = mix(vK.z, 0.25, step(1.5, vK.z));
        vec3 mc = texture2D(tMoss, vMapUv * 1.3).rgb;
        float up = clamp(vWN.y, 0.0, 1.0), north = clamp(-vWN.z * 0.7 + 0.2, 0.0, 1.0);
        float mk = clamp(vK.x * 1.1 + up * 0.8 + north * 0.35 * northK, 0.0, 1.0);
        mk *= smoothstep(0.25, 0.6, mk + (texture2D(tMoss, vMapUv * 0.37).g - 0.12) * 1.6);
        diffuseColor.rgb *= mix(vec3(1.0), vec3(1.08, 0.96, 0.9), vK.y * (1.0 - giK));
        // THE GIANTS (giants.js: aK.y >= 2): dead wood - the bark's rust drained to a wet black-grey, a pale scurf of lichen
        // on the ridges, the moss gone thin and grey; the hollows and the broken heart black
        if (giK > 0.5) {
          float l = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 dead = vec3(l) * vec3(0.9, 0.94, 1.0) * 0.6;
          float lic = smoothstep(0.5, 0.8, texture2D(tMoss, vMapUv * 0.21 + 0.37).g * 1.5 - 0.2) * smoothstep(0.06, 0.2, l);
          diffuseColor.rgb = mix(dead, vec3(0.12, 0.125, 0.11), lic * 0.45);
          // (round 5b: a touch darker - in the headlight at 2-4 m the log's top burned out white)
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.36, 0.35, 0.315) * (0.38 + 1.25 * l), bareK);
          mk *= 0.4 * (1.0 - 0.85 * bareK); mc = vec3(dot(mc, vec3(0.3, 0.6, 0.1))) * vec3(0.75, 0.85, 0.7);
        }
        diffuseColor.rgb = mix(diffuseColor.rgb, mc * 0.95, mk * 0.85);
        diffuseColor.rgb *= 1.0 - cav * 0.97;
      }`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      // (the giants are wet: the torch glints on their ridges; but nothing glints in a hollow)
      roughnessFactor = mix(roughnessFactor * mix(1.0, 0.52, step(1.5, vK.y)), 1.0, clamp(vK.y - 2.0, 0.0, 1.0));
      // (the bare wood where the bark has come away: dry-grey and dull, its grain fine - no glitter in the headlight)
      roughnessFactor = mix(roughnessFactor, 0.92, clamp(vK.z - 2.0, 0.0, 1.0) * step(1.5, vK.z) * step(1.5, vK.y));`,
        )
        .replace(
          "#include <normal_fragment_maps>",
          Pa.normal_fragment_maps.replace(
            "mapN.xy *= normalScale;",
            "mapN.xy *= normalScale * (vK.y > 1.5 ? 1.55 * (1.0 - 0.65 * clamp(vK.z - 2.0, 0.0, 1.0) * step(1.5, vK.z)) : 1.0);",
          ),
        )
        .replace(
          "#include <aomap_fragment>",
          `
      {
        vec3 Vw = normalize(cameraPosition - vFW), Nw = normalize(vWN);
        float ndv = clamp(1.0 - abs(dot(Nw, Vw)), 0.0, 1.0);
        float side = smoothstep(-0.3, 0.55, dot(Nw, uMoonDir)) * (0.5 + 0.5 * max(0.0, dot(-Vw, uMoonDir)));
        float brk = smoothstep(0.32, 0.78, fnoise(vec2(vFW.y * 0.42 + vFW.x * 0.9, vFW.z * 0.9 - vFW.y * 0.17)));
        totalEmissiveRadiance += uRim * (ndv * ndv * ndv) * side * (0.2 + 0.8 * brk) * mix(0.35, 1.0, canK.x);
      }
      #include <aomap_fragment>`,
        )));
  });
}
