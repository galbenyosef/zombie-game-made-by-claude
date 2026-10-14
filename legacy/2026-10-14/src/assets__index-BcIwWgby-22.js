// assets__index-BcIwWgby 22 — math
// Lines 6162-6503 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function vr(s, o, t, u, e) {
  const r = { uT: { value: 0 }, uGain: { value: 1.4 }, uOut: { value: 0.35 } },
    a = (M) =>
      new P0({
        uniforms: { ...ko.merge([So.fog]), map: { value: M } },
        vertexShader: mr,
        fragmentShader: xr,
        side: p0,
        fog: !0,
      }),
    p = u.get("church_glass").map,
    i = u.get("church_glass2").map,
    d = a(p),
    y = a(i);
  for (const M of [d, y])
    ((M.uniforms.uT = r.uT),
      (M.uniforms.uGain = r.uGain),
      (M.uniforms.uOut = r.uOut),
      (M.uniforms.uSmash = Vo.uSmash),
      (M.name = "church_glass"));
  const w = { L: [], G: [] },
    g = (M, m) => [
      [-M / 2, -m * 0.55],
      [-M * 0.3, -m],
      [M * 0.3, -m],
      [M / 2, -m * 0.55],
      [M / 2, m * 0.55],
      [M * 0.3, m],
      [-M * 0.3, m],
      [-M / 2, m * 0.55],
    ],
    z = (M, m, k, S, A, b = {}) => {
      const P = b.depth ?? 0.11,
        _ = (L) => L.map(([K, j]) => m(K, j, 0));
      t("tracery", I0(g(M.fb, P + 0.03), _(M.frame), k, { crease: 0.7 }));
      for (const [L, K, j] of M.mullions)
        t(
          "tracery",
          I0(
            g(M.bar, P),
            _([
              [L, K],
              [L, j],
            ]),
            k,
            { crease: 0.7 },
          ),
        );
      for (const L of M.lights)
        t("tracery", I0(g(M.bar, P), _(L.pts), k, { crease: 0.7 }));
      const I = [];
      for (let L = 0; L <= 40; L++) {
        const K = (L / 40) * Math.PI * 2;
        I.push([
          M.circle.cx + Math.cos(K) * M.circle.r,
          M.circle.cy + Math.sin(K) * M.circle.r,
        ]);
      }
      t("tracery", I0(g(M.bar, P), _(I), k, { crease: 0.7 }));
      const R = 0.03,
        V = Uo(M.w + 2 * R, M.sill - R, M.spring, M.apex + R, 18);
      x(
        V,
        M.sill,
        M.apex,
        M.w,
        m,
        S,
        A,
        b.broken ? 1 : 0,
        w[b.atlas || "L"],
        b.smash ? 1 : 0,
      );
    },
    x = (M, m, k, S, A, b, P, _, I, R = 0) => {
      const V = Aa.triangulateShape(
          M.map(([st, G]) => new re(st, G)),
          [],
        ),
        L = [],
        K = [],
        j = [],
        O = [],
        J = e() * 10;
      for (const [st, G] of M) {
        const q = A(st, G, 0);
        L.push(q[0], q[1], q[2]);
        const U = b(st, G);
        (K.push(U[0], U[1]),
          j.push(P[0], P[1], P[2], J),
          O.push(_, st / S + 0.5, (G - m) / (k - m), R));
      }
      const tt = new Rt();
      (tt.setAttribute("position", new xt(L, 3)),
        tt.setAttribute("uv", new xt(K, 2)),
        tt.setAttribute("aBack", new xt(j, 4)),
        tt.setAttribute("aInfo", new xt(O, 4)),
        tt.setIndex(V.flat()),
        tt.computeVertexNormals(),
        I.push(tt));
    },
    v = 0.45,
    n = [2.3, 1.45, 0.75],
    l = [2, 1.05, 0.55],
    f = [];
  fs.forEach((M, m) => {
    for (const k of [-1, 1]) {
      const S = k > 0,
        A = S ? [0, 1, 2][m] : [3, 1, 2][m],
        b = !S,
        P = !S && m === 0,
        _ = !S && M === co.zc,
        I = S ? pt.x1 + v : pt.x0 - v,
        R = (L, K, j) => [I - k * j, K, M + (S ? L : -L)],
        V = (L, K) => {
          let j = L / e0.w + 0.5;
          return (
            b && (j = 1 - j),
            [(A + j) / 4, (K - e0.sill) / (e0.apex - e0.sill)]
          );
        };
      (z(Wa, R, [-k, 0, 0], V, S ? n : l, { broken: P, smash: _ }),
        f.push({
          zc: M,
          east: S,
          slot: A,
          mirror: b,
          broken: P,
          smash: _,
          x: I,
          place: R,
          uvOf: V,
        }));
    }
  });
  {
    const M = pt.z1 + 0.4,
      m = (b, P, _) => [-b, P, M - _],
      k = z0.apex - z0.sill,
      S = ((k / z0.w) * 1024) / 2048;
    z(
      On,
      m,
      [0, 0, -1],
      (b, P) => [(b / z0.w + 0.5) * 0.5, 1 - S + ((P - z0.sill) / k) * S],
      [1.25, 1.45, 2.1],
      { atlas: "G", depth: 0.13 },
    );
  }
  {
    const M = pt.z0 - 0.5,
      m = jn,
      k = (_, I, R) => [_, I, M + R],
      S = (_, I) => [0.75 + (_ / m.r) * 0.25, 0.75 + ((I - G0.y) / m.r) * 0.25],
      A = (_) => _.map(([I, R]) => k(I, R, 0)),
      b = (_, I = 72) => {
        const R = [];
        for (let V = 0; V <= I; V++) {
          const L = (V / I) * Math.PI * 2;
          R.push([Math.cos(L) * _, G0.y + Math.sin(L) * _]);
        }
        return R;
      };
    (t("tracery", I0(g(0.14, 0.14), A(b(m.frame)), [0, 0, 1], { crease: 0.7 })),
      t(
        "tracery",
        I0(g(m.bar, 0.11), A(b(m.hub, 40)), [0, 0, 1], { crease: 0.7 }),
      ),
      t(
        "tracery",
        I0(g(m.bar, 0.11), A(b(m.mid, 60)), [0, 0, 1], { crease: 0.7 }),
      ));
    for (let _ = 0; _ < m.spokes; _++) {
      const I = (_ / m.spokes) * Math.PI * 2 + Math.PI / 2,
        R = Math.cos(I),
        V = Math.sin(I);
      t(
        "tracery",
        I0(
          g(m.bar, 0.11),
          A([
            [R * m.hub, G0.y + V * m.hub],
            [R * m.frame, G0.y + V * m.frame],
          ]),
          [0, 0, 1],
          { crease: 0.7 },
        ),
      );
      const L = I + (Math.PI * 2) / m.spokes,
        K = [];
      for (let j = 0; j <= 12; j++) {
        const O = j / 12,
          J = I + (L - I) * O,
          tt =
            m.petal -
            0.2 +
            0.2 * Math.sin(Math.PI * O) +
            0.08 * (1 - Math.abs(O - 0.5) * 2) ** 3;
        K.push([Math.cos(J) * tt, G0.y + Math.sin(J) * tt]);
      }
      t("tracery", I0(g(m.bar * 0.8, 0.1), A(K), [0, 0, 1], { crease: 0.7 }));
    }
    const P = b(m.r + 0.02, 72).slice(0, 72);
    x(P, G0.y - m.r, G0.y + m.r, m.r * 2, k, S, [2.4, 1.5, 0.8], 0, w.G);
  }
  const h = (M, m, k) => {
      const S = Mr(M),
        A = new bt(S, m);
      return (
        (A.name = k),
        (A.castShadow = !0),
        (A.receiveShadow = !1),
        (A.customDepthMaterial = wr()),
        o.add(A),
        A
      );
    },
    c = [h(w.L, d, "church_lancets"), h(w.G, y, "church_great_rose")];
  return { U: r, SMU: Vo, meshes: c, lancets: f, tex1: p, tex2: i };
}
function Mr(s) {
  let o = 0,
    t = 0;
  for (const p of s) ((o += p.attributes.position.count), (t += p.index.count));
  const u = new Rt(),
    e = new Uint32Array(t);
  for (const [p, i] of [
    ["position", 3],
    ["normal", 3],
    ["uv", 2],
    ["aBack", 4],
    ["aInfo", 4],
  ]) {
    const d = new Float32Array(o * i);
    let y = 0;
    for (const w of s)
      (d.set(w.attributes[p].array, y * i), (y += w.attributes.position.count));
    u.setAttribute(p, new vt(d, i));
  }
  let r = 0,
    a = 0;
  for (const p of s) {
    const i = p.index.array;
    for (let d = 0; d < i.length; d++) e[a + d] = i[d] + r;
    ((a += i.length), (r += p.attributes.position.count));
  }
  return (u.setIndex(new vt(e, 1)), u.computeBoundingSphere(), u);
}
let As = null;
function wr() {
  if (As) return As;
  const s = new za({ depthPacking: ka });
  return (
    (s.onBeforeCompile = (o) => {
      ((o.uniforms.uSmash = Vo.uSmash),
        (o.vertexShader = o.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
attribute vec4 aInfo;
varying vec4 vInfo;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vInfo = aInfo;`,
          )),
        (o.fragmentShader = o.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec4 vInfo;
` + Da,
          )
          .replace(
            "void main() {",
            `void main() {
  if (broken(vInfo) || smashed(vInfo)) discard;`,
          )));
    }),
    (s.customProgramCacheKey = () => "churchGlassDepth3"),
    (As = s),
    s
  );
}
const x0 = jt.y,
  N0 = (s, o, t, u, e, r, a, p = {}) => {
    const i = {
      x: o,
      y: t,
      z: u,
      h: e,
      r,
      lit: p.lit ?? !0,
      votive: !!p.votive,
      cl: a,
    };
    return (s.push(i), i);
  };
function yr(
  s,
  o,
  t,
  u,
  e,
  r,
  a,
  { h: p = 0.34, r: i = 0.019, rng: d, mat: y = "brass" } = {},
) {
  const w = r / 0.55;
  return (
    s(
      y,
      Wt(
        [
          [0, 0],
          [0.085 * w, 0],
          [0.09 * w, 0.012 * w],
          [0.07 * w, 0.03 * w],
          [0.03 * w, 0.07 * w],
          [0.022 * w, 0.1 * w],
          [0.035 * w, 0.12 * w],
          [0.02 * w, 0.14 * w],
          [0.016 * w, 0.3 * w],
          [0.03 * w, 0.33 * w],
          [0.018 * w, 0.36 * w],
          [0.017 * w, 0.49 * w],
          [0.05 * w, 0.51 * w],
          [0.055 * w, 0.525 * w],
          [0.03, r - 0.005],
          [0.024, r],
          [0, r],
        ].map(([g, z]) => [g, z]),
        t,
        u,
        e,
        { segs: 20, tile: 0.3 },
      ),
    ),
    N0(o, t, u + r, e, p * (0.75 + (d ? d() * 0.3 : 0.15)), i, a)
  );
}
