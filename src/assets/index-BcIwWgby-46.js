// assets/index-BcIwWgby 46 — math
// Lines 13993-14249 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function lc() {
  const s = At("forest_floor"),
    o = At("forest_path"),
    t = At("garden_moss"),
    u = {
      tPath: { value: o.map },
      tPathN: { value: o.normalMap },
      tMoss: { value: t.map },
      tMossN: { value: t.normalMap },
    };
  return i0(s, "ground", (r) => {
    (Object.assign(r.uniforms, u),
      (r.vertexShader = r.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute vec4 aMask;
varying vec4 vMask;
varying vec2 vGUv;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vMask = aMask; vGUv = uv;`,
        )),
      (r.fragmentShader = r.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform sampler2D tPath, tPathN, tMoss, tMossN;
varying vec4 vMask;
varying vec2 vGUv;
float gH(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float gN(vec2 p) { vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(gH(i), gH(i + vec2(1, 0)), f.x), mix(gH(i + vec2(0, 1)), gH(i + vec2(1, 1)), f.x), f.y); }
float pathK, mossK;`,
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      {
        float n1 = gN(vGUv * 1.7) * 0.6 + gN(vGUv * 5.3) * 0.4;
        pathK = smoothstep(0.4, 0.62, vMask.x + (n1 - 0.5) * 0.45);
        mossK = smoothstep(0.35, 0.7, vMask.y + (gN(vGUv * 0.9 + 7.0) - 0.5) * 0.5) * (1.0 - pathK);
        vec3 pc = texture2D(tPath, vGUv * 0.5).rgb;
        vec3 mc = texture2D(tMoss, vGUv / 1.6).rgb;
        diffuseColor.rgb = mix(diffuseColor.rgb, mc, mossK * 0.9);
        // the grassy soil of the churchyard and the clearing (the blades stand on it)
        diffuseColor.rgb = mix(diffuseColor.rgb, mix(vec3(0.018, 0.024, 0.01), mc * 0.7, 0.4), vMask.w * (1.0 - pathK) * 0.75);
        diffuseColor.rgb = mix(diffuseColor.rgb, pc, pathK);
        // wet near the water: darker, glossier
        diffuseColor.rgb *= 1.0 - 0.45 * vMask.z;
      }`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 0.78, pathK) * (1.0 - 0.45 * vMask.z);`,
        )
        .replace(
          "#include <normal_fragment_maps>",
          `#include <normal_fragment_maps>
      {
        vec3 nF = texture2D(normalMap, vNormalMapUv).xyz * 2.0 - 1.0;
        vec3 nP = texture2D(tPathN, vGUv * 0.5).xyz * 2.0 - 1.0;
        vec3 nM = texture2D(tMossN, vGUv / 1.6).xyz * 2.0 - 1.0;
        vec3 nB = mix(mix(nF, nM, mossK), nP, pathK);
        nB.xy *= normalScale;
        normal = normalize(tbn * nB);
      }`,
        )));
  });
}
function hc(s, o) {
  const t = new Kt();
  t.name = "forest_ground";
  const u = lc(),
    e = [],
    r = 0.4,
    a = -52,
    p = 52,
    i = 62,
    d = 216.4,
    y = o.heightAt,
    w = (n, l, f) => {
      if (l < St.z + 0.25 && n > St.xW - 0.3 && n < St.xE + 0.3)
        return [0, 0.15 + 0.3 * (0.5 + 0.5 * It(n * 0.4, l * 0.4)), 0, 1];
      const h = o.dPathAt(n, l),
        c = o.sPathAt(n, l),
        M = o.pw(c);
      let m = 1 - $t(M - 0.3, M + 0.35, h);
      const k = Math.hypot((n - 6) / 5.2, (l - 197.6) / 2.6);
      ((m = Math.max(m, (1 - $t(0.6, 1.1, k)) * 0.8)),
        o.trodAt && (m = Math.max(m, o.trodAt(n, l) * 0.95)),
        n > _t.x0 - 0.2 &&
          n < _t.x1 + 0.2 &&
          l > _t.z0 - 0.2 &&
          l < _t.z1 + 0.2 &&
          (m = 0.5));
      const S = o.dStreamAt(n, l),
        A = S < 3.2 ? 1 - $t(1.2, 3.2, S) : 0,
        b =
          $t(0.25, 1.6, Math.abs(f)) * 0.6 +
          (S < 5 ? $t(4.6, 2.5, S) * 0.8 : 0),
        P = Math.min(
          1,
          b +
            0.45 * Math.max(0, It(n * 0.23 + 3, l * 0.23 - 1)) +
            0.25 * (0.5 + 0.5 * It(n * 0.9, l * 0.9)) * 0.5,
        ),
        _ = o.clearingSd(n, l),
        I = _ < 0 ? $t(0, -3, _) * (1 - m) : 0;
      return [m, P, A, I];
    },
    g = (n, l, f) => {
      const c = y(n - 0.2, l),
        M = y(n + 0.2, l),
        m = y(n, l - 0.2),
        k = y(n, l + 0.2);
      return (f.set(c - M, 2 * 0.2, m - k).normalize(), f);
    },
    z = new dt(),
    x = 26,
    v = 26.4;
  for (let n = i; n < d - 0.01; n += v)
    for (let l = a; l < p - 0.01; l += x) {
      const f = Math.round(x / r) + 1,
        h = Math.round(v / r) + 1,
        c = f * h,
        M = new Float32Array(c * 3),
        m = new Float32Array(c * 3),
        k = new Float32Array(c * 2),
        S = new Float32Array(c * 4);
      for (let _ = 0; _ < h; _++)
        for (let I = 0; I < f; I++) {
          const R = _ * f + I,
            V = l + I * r,
            L = n + _ * r,
            K = y(V, L);
          ((M[R * 3] = V),
            (M[R * 3 + 1] = K),
            (M[R * 3 + 2] = L),
            g(V, L, z),
            (m[R * 3] = z.x),
            (m[R * 3 + 1] = z.y),
            (m[R * 3 + 2] = z.z),
            (k[R * 2] = V),
            (k[R * 2 + 1] = -L),
            S.set(w(V, L, K), R * 4));
        }
      const A = [];
      for (let _ = 0; _ < h - 1; _++)
        for (let I = 0; I < f - 1; I++) {
          const R = l + (I + 0.5) * r,
            V = n + (_ + 0.5) * r;
          if (
            (V < 62.05 && Math.abs(R) < 7.2) ||
            (R > _t.x0 + 0.4 &&
              R < _t.x1 - 0.4 &&
              V > _t.z0 + 0.4 &&
              V < _t.z1 - 0.4)
          )
            continue;
          const L = _ * f + I,
            K = L + 1,
            j = L + f,
            O = j + 1;
          Math.abs(M[L * 3 + 1] - M[O * 3 + 1]) <
          Math.abs(M[K * 3 + 1] - M[j * 3 + 1])
            ? A.push(L, j, O, L, O, K)
            : A.push(L, j, K, K, j, O);
        }
      const b = new Rt();
      (b.setAttribute("position", new vt(M, 3)),
        b.setAttribute("normal", new vt(m, 3)),
        b.setAttribute("uv", new vt(k, 2)),
        b.setAttribute("aMask", new vt(S, 4)),
        b.setIndex(A),
        b.computeBoundingSphere(),
        b.computeBoundingBox());
      const P = new bt(b, u);
      ((P.name = "forest_ground_chunk"),
        (P.receiveShadow = !0),
        (P.castShadow = !0),
        t.add(P),
        e.push({
          mesh: P,
          cx: l + x / 2,
          cz: n + v / 2,
          r: Math.hypot(x, v) / 2,
        }));
    }
  {
    const M = Math.round(86.66666666666667) + 1,
      m = Math.round(268 / 3) + 1,
      k = new Float32Array(M * m * 3),
      S = new Float32Array(M * m * 3),
      A = new Float32Array(M * m * 2),
      b = new Float32Array(M * m * 4);
    for (let R = 0; R < m; R++)
      for (let V = 0; V < M; V++) {
        const L = R * M + V,
          K = -130 + V * 3,
          j = 62 + R * 3,
          J =
            K > a + 1 && K < p - 1 && j > i + 1 && j < d - 1
              ? y(K, j) - 0.25
              : o.natural(K, j) * $t(62, 80, j) -
                (K > a - 2 && K < p + 2 && j < d + 2 ? 0.08 : 0);
        ((k[L * 3] = K),
          (k[L * 3 + 1] = J),
          (k[L * 3 + 2] = j),
          (S[L * 3 + 1] = 1),
          (A[L * 2] = K),
          (A[L * 2 + 1] = -j),
          b.set([0, 0.4 + 0.3 * It(K * 0.1, j * 0.1), 0, 0], L * 4));
      }
    const P = [];
    for (let R = 0; R < m - 1; R++)
      for (let V = 0; V < M - 1; V++) {
        const L = -130 + (V + 0.5) * 3,
          K = 62 + (R + 0.5) * 3;
        if (
          (L > a + 3 && L < p - 3 && K > i + 3 && K < d - 3) ||
          (K < 77 && Math.abs(L) < 36)
        )
          continue;
        const j = R * M + V,
          O = j + 1,
          J = j + M,
          tt = J + 1;
        P.push(j, J, O, O, J, tt);
      }
    const _ = new Rt();
    (_.setAttribute("position", new vt(k, 3)),
      _.setAttribute("normal", new vt(S, 3)),
      _.setAttribute("uv", new vt(A, 2)),
      _.setAttribute("aMask", new vt(b, 4)),
      _.setIndex(P),
      _.computeVertexNormals(),
      _.computeBoundingSphere());
    const I = new bt(_, u);
    ((I.name = "forest_ground_far"), (I.receiveShadow = !0), t.add(I));
  }
  return { group: t, chunks: e, material: u };
}
const qe = Math.PI * 2,
  zo = 40,
  uc = [47, 92, 149, 182, 240],
  fc = 36.4,
  dc = 160,
  xa = (s, o) =>
    0.9 +
    0.055 * Math.sin(s * 7.3 + o * 1.7) +
    0.035 * Math.sin(s * 13.1 + o * 3.1) * Math.sin(s * 2.3 + o) +
    0.02 * Math.sin(s * 23 + o * 5.3),
  pc =
    "float lampFlicker(float t, float i) { return 0.9 + 0.055 * sin(t * 7.3 + i * 1.7) + 0.035 * sin(t * 13.1 + i * 3.1) * sin(t * 2.3 + i) + 0.02 * sin(t * 23.0 + i * 5.3); }";
