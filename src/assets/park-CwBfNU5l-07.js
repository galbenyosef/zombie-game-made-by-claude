// assets/park-CwBfNU5l 07 — math
// Lines 1917-2224 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function buildFountain({
  trees: e = [],
  hedges: a = [],
  wear: t = [],
  ruts: r = [],
  mud: o = [],
  paved: n = [],
} = {}) {
  const { x0: i, z0: f, w, d: s, res: l } = b0,
    u = Math.round(w * l),
    c = Math.round(s * l),
    M = new Float32Array(u * c),
    h = new Float32Array(u * c),
    v = new Float32Array(u * c),
    S = new Float32Array(u * c),
    d = (z) => i + (z + 0.5) / l,
    y = (z) => f + (z + 0.5) / l;
  for (let z = 0; z < c; z++)
    for (let W = 0; W < u; W++) {
      const D = d(W),
        V = y(z),
        A = z * u + W,
        K = Le(D, V),
        J = O0(D * 0.9, V * 0.9),
        q = O0(D * 3.1 + 7, V * 3.1);
      M[A] = te(0.12, -0.12, K.d);
      const st =
        K.id === "avenue" ||
        K.id === "avenueN" ||
        K.id === "fountain" ||
        K.id === "forecourt"
          ? 1.25
          : 1;
      if (
        (K.d > -0.3 &&
          (h[A] = Math.max(
            h[A],
            te((0.3 + 0.65 * J) * st, 0, K.d) * (0.55 + 0.45 * q),
          )),
        ve(D, V))
      ) {
        const Y = Math.min(D - m0.x0, m0.x1 - D, V - m0.z0, m0.z1 - V);
        h[A] = Math.max(h[A], (0.12 + 0.4 * J * J) * te(0, 6, Y));
      }
      const j = Math.min(D - Jt.x0, Jt.x1 - D, V - Jt.z0, Jt.z1 - V);
      h[A] = Math.max(h[A], te(1.4, 0.2, j) * 0.8);
    }
  const m = (z, W, D, V, A) => {
    const K = Math.max(0, Math.floor((W - V - i) * l)),
      J = Math.min(u - 1, Math.ceil((W + V - i) * l)),
      q = Math.max(0, Math.floor((D - V - f) * l)),
      st = Math.min(c - 1, Math.ceil((D + V - f) * l));
    for (let j = q; j <= st; j++)
      for (let Y = K; Y <= J; Y++) {
        const x = d(Y),
          p = y(j),
          g = Math.hypot(x - W, p - D) / V;
        if (g < 1) {
          const T = j * u + Y;
          z[T] = Math.max(z[T], A(g, x, p));
        }
      }
  };
  for (const z of e) {
    const W = z.crown * 1.15 + 1.5,
      D = z.x + 1.2,
      V = z.z;
    (m(v, D, V, W, (A, K, J) =>
      Math.max(
        0,
        (1 - Math.pow(A, 1.4)) *
          (z.kind === "young" ? 0.6 : 1) *
          (0.75 + 0.5 * O0(K * 0.7, J * 0.7)) -
          0.08,
      ),
    ),
      z.kind !== "young" &&
        m(h, z.x, z.z, z.r * 2.6 + 0.8, (A) => (1 - A) * 0.85));
  }
  for (const z of a) {
    const W = Math.ceil(z.L / 0.8),
      D = Math.cos(z.yaw),
      V = Math.sin(z.yaw);
    for (let A = 0; A <= W; A++) {
      const K = -z.L / 2 + A * (z.L / W),
        J = z.cx + K * D + 0.8,
        q = z.cz - K * V + 0.6;
      m(
        v,
        J,
        q,
        z.W * 0.5 + 1,
        (st, j, Y) => (1 - st) * (0.5 + 0.5 * O0(j, Y)),
      );
    }
  }
  for (const z of t)
    m(
      h,
      z[0],
      z[1],
      z[2],
      (W, D, V) => (1 - W * W) * (z[3] ?? 0.9) * (0.7 + 0.3 * O0(D * 2, V * 2)),
    );
  for (const z of o)
    m(S, z[0], z[1], z[2], (W, D, V) =>
      Math.max(
        0,
        (1 - W * W) * (z[3] ?? 0.8) * (0.5 + 0.7 * O0(D * 0.8 + 3, V * 0.8)) -
          0.05,
      ),
    );
  for (const z of n) m(M, z[0], z[1], z[2], (W) => te(1, 0.92, W));
  for (const z of r) {
    const [W, D] = z.a,
      [V, A] = z.b,
      K = Math.hypot(V - W, A - D),
      J = (V - W) / K,
      q = (A - D) / K;
    for (let st = 0; st <= K; st += 0.35)
      for (const j of [-0.78, 0.78]) {
        const Y = Math.sin(st * 0.31) * 0.25,
          x = W + J * st - q * (j + Y),
          p = D + q * st + J * (j + Y);
        (m(S, x, p, 0.42, (g) => (1 - g) * 0.95),
          m(h, x, p, 0.75, (g) => (1 - g) * 0.8));
      }
  }
  {
    const z = R0;
    for (let W = 0; W < c; W++)
      for (let D = 0; D < u; D++) {
        const V = d(D),
          A = y(W);
        if (V > z.x0 - 0.15 && V < z.x1 + 0.15 && A > z.z0 - 0.15) {
          const K = W * u + D;
          ((M[K] = 1), (h[K] = 0), (v[K] = 0), (S[K] = 0));
        }
      }
  }
  const F = new Uint8Array(u * c * 4);
  for (let z = 0; z < u * c; z++)
    ((F[z * 4] = Math.round(Math.min(1, M[z]) * 255)),
      (F[z * 4 + 1] = Math.round(Math.min(1, h[z]) * 255)),
      (F[z * 4 + 2] = Math.round(Math.min(1, v[z]) * 255)),
      (F[z * 4 + 3] = Math.round(Math.min(1, S[z]) * 255)));
  const C = new pa(F, u, c, ma, xa);
  return (
    (C.magFilter = Se),
    (C.minFilter = Se),
    (C.wrapS = C.wrapT = Ma),
    (C.needsUpdate = !0),
    {
      data: F,
      tex: C,
      W: u,
      H: c,
      at: (z, W) => {
        const D = Math.max(0, Math.min(u - 1, Math.floor((z - i) * l))),
          V = Math.max(0, Math.min(c - 1, Math.floor((W - f) * l))),
          A = (V * u + D) * 4;
        return [F[A] / 255, F[A + 1] / 255, F[A + 2] / 255, F[A + 3] / 255];
      },
    }
  );
}
const Ye = `
uniform sampler2D tMask;
uniform sampler2D tLitter;
uniform sampler2D tDirt;
uniform vec4 uMaskBox;
`;
function Ha(e, a) {
  return Gt(e.mats.get("park3_lawn"), "lawn", (t) => {
    (Object.assign(t.uniforms, a),
      (t.fragmentShader = t.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
` + Ye,
        )
        .replace(
          "#include <map_fragment>",
          `
      vec2 muv = (vPW.xz - uMaskBox.xy) * uMaskBox.zw;
      vec4 mk = texture2D(tMask, muv);
      // the lawn at two scales (breaking its repeat) and broad patches of greener, drier, darker grass
      vec3 lawnA = texture2D(map, vMapUv).rgb, lawnB = texture2D(map, vPW.xz * 0.2171 + vec2(0.31, 0.77)).rgb;
      float bn = pnoise(vPW.xz * 0.09) * 0.65 + pnoise(vPW.xz * 0.31 + 7.0) * 0.35;
      vec3 lawn = mix(lawnA, lawnB, smoothstep(0.35, 0.65, bn) * 0.65);
      float pn = pnoise(vPW.xz * 0.035 + 3.1) * 0.7 + pnoise(vPW.xz * 0.13 - 1.7) * 0.3;
      lawn *= mix(vec3(0.78, 0.84, 0.74), vec3(1.14, 1.08, 0.9), pn);
      vec3 dirt = texture2D(tDirt, vPW.xz * 0.5).rgb * vec3(0.92, 0.86, 0.8);
      vec3 litter = texture2D(tLitter, vPW.xz * 0.3846 + vec2(0.13, 0.41)).rgb;
      float gWk = smoothstep(0.08, 0.85, mk.g + (pnoise(vPW.xz * 2.1 + 3.0) - 0.5) * 0.5);
      float gLk = smoothstep(0.12, 0.8, mk.b + (pnoise(vPW.xz * 1.3) - 0.5) * 0.55);
      float gMud = smoothstep(0.05, 0.6, mk.a);
      float gPud = smoothstep(0.62, 0.78, mk.a * (0.55 + pnoise(vPW.xz * 0.7 + 9.0) * 0.8));
      vec3 c = mix(lawn, dirt, gWk);
      c = mix(c, litter, gLk * (1.0 - gWk * 0.4));
      c = mix(c, dirt * vec3(0.42, 0.4, 0.37), gMud);
      c *= 1.0 - gPud * 0.55;
      diffuseColor.rgb = c;`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 0.88, gWk);
      roughnessFactor = mix(roughnessFactor, 0.72, gLk);
      roughnessFactor = mix(roughnessFactor, 0.66, gMud);
      roughnessFactor = mix(roughnessFactor, 0.06, gPud);`,
        )
        .replace(
          "mapN.xy *= normalScale;",
          "mapN.xy *= normalScale * (1.0 - gPud) * (1.0 - gMud * 0.85) * (1.0 - gWk * 0.4);",
        )));
  });
}
function ie(e, a, t, r, o = {}) {
  return Gt(e.mats.get(t, o.tint ? { color: o.tint } : {}), r, (n) => {
    (Object.assign(n.uniforms, a),
      (n.vertexShader = n.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute float aEdge;
varying float vEdge;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vEdge = aEdge;`,
        )),
      (n.fragmentShader = n.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
` +
            Ye +
            "varying float vEdge;",
        )
        .replace(
          "#include <map_fragment>",
          `#include <map_fragment>
      vec2 muv = (vPW.xz - uMaskBox.xy) * uMaskBox.zw;
      vec4 mk = texture2D(tMask, muv);
      // the edge crumbles into the lawn's worn band
      float ee = abs(vEdge), nE = pnoise(vPW.xz * 2.7) * 0.6 + pnoise(vPW.xz * 9.0) * 0.4;
      if (ee > ${(o.edge ?? 0.93).toFixed(3)} + (nE - 0.5) * ${(o.rag ?? 0.12).toFixed(3)}) discard;
      vec3 dirt = texture2D(tDirt, vPW.xz * 0.5).rgb * vec3(0.92, 0.86, 0.8);
      diffuseColor.rgb = mix(diffuseColor.rgb, dirt, smoothstep(0.7, 0.98, ee + (nE - 0.5) * 0.25) * 0.55);
      // leaves blown onto it under the trees
      vec3 litter = texture2D(tLitter, vPW.xz * 0.3846 + vec2(0.13, 0.41)).rgb;
      float gLk = smoothstep(0.35, 0.9, mk.b + (pnoise(vPW.xz * 1.7) - 0.5) * 0.6) * ${(o.leaves ?? 0.85).toFixed(3)};
      diffuseColor.rgb = mix(diffuseColor.rgb, litter, gLk);
      // damp, puddles in the low spots
      float gPud = smoothstep(0.66, 0.8, pnoise(vPW.xz * 0.23 + 4.0) * 0.7 + pnoise(vPW.xz * 0.9) * 0.3) * ${(o.puddles ?? 0).toFixed(3)} * (1.0 - gLk);
      diffuseColor.rgb *= 1.0 - gPud * 0.45;`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
      roughnessFactor = roughnessFactor * ${(o.wet ?? 1).toFixed(3)};
      roughnessFactor = mix(roughnessFactor, 0.75, gLk);
      roughnessFactor = mix(roughnessFactor, 0.04, gPud);`,
        )
        .replace(
          "mapN.xy *= normalScale;",
          "mapN.xy *= normalScale * (1.0 - gPud);",
        )));
  });
}
function Za(e = 5) {
  const a = [],
    t = [],
    r = [],
    o = [0, 0.35, 0.7];
  for (let i = 0; i < e; i++) {
    const f = a.length / 3;
    for (const M of o) a.push(-0.5, M, 0, 0.5, M, 0);
    a.push(0, 1, 0);
    const w = (i / e) * Math.PI * 2 + i * 0.7,
      s = 0.015 + (i % 3) * 0.012,
      l = 0.18 + ((i * 7) % 5) * 0.06,
      u = 0.7 + ((i * 3) % 4) * 0.12;
    for (let M = 0; M < o.length * 2 + 1; M++) t.push(w, s, l, u);
    for (let M = 0; M < o.length - 1; M++) {
      const h = f + M * 2;
      r.push(h, h + 1, h + 2, h + 1, h + 3, h + 2);
    }
    const c = f + (o.length - 1) * 2;
    r.push(c, c + 1, c + 2);
  }
  const n = new Fe();
  return (
    n.setAttribute("position", new H0(a, 3)),
    n.setAttribute(
      "normal",
      new H0(
        new Float32Array(a.length).map((i, f) => (f % 3 === 1 ? 1 : 0)),
        3,
      ),
    ),
    n.setAttribute("aBlade", new H0(t, 4)),
    n.setIndex(r),
    n
  );
}
