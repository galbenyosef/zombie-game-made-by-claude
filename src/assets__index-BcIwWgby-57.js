// assets__index-BcIwWgby 57 — math
// Lines 17259-17567 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Gc(s, o = "cards") {
  const t = new n0({
    map: s,
    alphaTest: 0.5,
    side: p0,
    roughness: 0.82,
    metalness: 0,
    vertexColors: !0,
  });
  return i0(t, o, (u) => {
    ((u.uniforms.uSway = { value: 0 }),
      (u.vertexShader = u.vertexShader
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
      {
        // the high canopy sways slowly; a fern's frond bends from its root (aFlex 0 .. 1 along it); the cores stay put
        vec3 wq = (modelMatrix * vec4(transformed, 1.0)).xyz;
        float k = aFlex > 0.001 ? aFlex * aFlex * 0.07 : (aFlex < -0.5 ? 0.0 : clamp((wq.y - 4.0) / 24.0, 0.0, 1.0) * 0.06);
        transformed.x += sin(uFT * 0.8 + wq.x * 0.37 + wq.z * 0.23) * k;
        transformed.z += sin(uFT * 0.63 + wq.z * 0.31 - wq.x * 0.1) * k * 0.8;
      }`,
        )
        .replace(
          "#include <common>",
          `#include <common>
uniform float uFT;
attribute float aFlex;`,
        )));
  });
}
function Hc(s, o, t, u) {
  const { x: e, z: r, r: a, H: p } = s,
    i = 0.5 + t() * 0.45,
    d = 4 + Math.floor(t() * 3),
    y = t() * De,
    w = 0.4 + t() * 0.35,
    g = [(t() - 0.5) * 0.02, (t() - 0.5) * 0.02],
    z = t() * De,
    x = t() * 0.35,
    v = (U) => a * Math.max(0.05, 1 - 0.8 * Math.pow(Math.max(0, U) / p, 1.05)),
    n = (U, Z) => {
      const ot = v(U) + a * i * Math.exp(-Math.max(0, U) / 0.85),
        $ =
          Math.pow(
            Math.max(0, Math.cos(d * (Z - y) + 0.4 * Math.sin(Z * 3))),
            3,
          ) *
          w *
          Math.exp(-Math.max(0, U) / 0.75);
      return ot * (1 + $) * (1 + 0.025 * Math.sin(Z * 7 + U * 1.3));
    },
    l = (U) => [
      e + g[0] * U + Math.cos(z) * x * Math.sin((Math.PI * U) / p),
      o + U,
      r + g[1] * U + Math.sin(z) * x * Math.sin((Math.PI * U) / p),
    ],
    f = [
      -0.45, 0, 0.12, 0.3, 0.55, 0.9, 1.4, 2.1, 3.2, 4.8, 7, 9.5, 12.5, 16, 20,
      24.5, 29, 34, 40,
    ].filter((U) => U < p - 0.5);
  f.push(p);
  const h = u ? 14 : 9,
    c = f.length,
    M = new Float32Array(c * (h + 1) * 3),
    m = new Float32Array(c * (h + 1) * 2),
    k = new Float32Array(c * (h + 1) * 3),
    S = n(1.3, 0) * 0.9,
    A = t();
  for (let U = 0; U < c; U++) {
    const Z = f[U],
      ot = l(Z);
    for (let $ = 0; $ <= h; $++) {
      const C = ($ / h) * De,
        T = U === c - 1 ? 0.02 : n(Z, C),
        D = U * (h + 1) + $;
      ((M[D * 3] = ot[0] + Math.cos(C) * T),
        (M[D * 3 + 1] = ot[1]),
        (M[D * 3 + 2] = ot[2] + Math.sin(C) * T),
        (m[D * 2] = C * S),
        (m[D * 2 + 1] = Z),
        (k[D * 3] = Math.exp(-Math.max(0, Z) / 1.3)),
        (k[D * 3 + 1] = A),
        (k[D * 3 + 2] = Math.exp(-Math.max(0, Z) / 9)));
    }
  }
  const b = new Float32Array(M.length),
    P = new dt(),
    _ = new dt(),
    I = new dt(),
    R = (U, Z) => {
      const ot = U * (h + 1) + ((Z + h) % h);
      return [M[ot * 3], M[ot * 3 + 1], M[ot * 3 + 2]];
    };
  for (let U = 0; U < c; U++)
    for (let Z = 0; Z <= h; Z++) {
      const ot = R(U, Z + 1),
        $ = R(U, Z - 1),
        C = R(Math.min(c - 1, U + 1), Z),
        T = R(Math.max(0, U - 1), Z);
      (P.set(ot[0] - $[0], ot[1] - $[1], ot[2] - $[2]),
        _.set(C[0] - T[0], C[1] - T[1], C[2] - T[2]),
        I.crossVectors(_, P).normalize());
      const D = U * (h + 1) + Z,
        N = l(f[U]);
      ((M[D * 3] - N[0]) * I.x + (M[D * 3 + 2] - N[2]) * I.z < 0 && I.negate(),
        (b[D * 3] = I.x),
        (b[D * 3 + 1] = I.y),
        (b[D * 3 + 2] = I.z));
    }
  const V = [];
  for (let U = 0; U < c - 1; U++)
    for (let Z = 0; Z < h; Z++) {
      const ot = U * (h + 1) + Z,
        $ = ot + h + 1;
      V.push(ot, $, ot + 1, ot + 1, $, $ + 1);
    }
  const L = new Rt();
  (L.setAttribute("position", new vt(M, 3)),
    L.setAttribute("normal", new vt(b, 3)),
    L.setAttribute("uv", new vt(m, 2)),
    L.setAttribute("aK", new vt(k, 3)),
    L.setIndex(V));
  const K = [L],
    j = p * (0.42 + t() * 0.14);
  if (u)
    for (let U = 2.6 + t(); U < j; U += 0.9 + t() * 1.3) {
      const Z = t() * De,
        ot = l(U),
        $ = v(U),
        C = 0.25 + t() * 1.1,
        T = -0.25 - t() * 0.4,
        D = at(Math.cos(Z), T, Math.sin(Z)).normalize(),
        N = at(
          ot[0] + Math.cos(Z) * $ * 0.8,
          ot[1],
          ot[2] + Math.sin(Z) * $ * 0.8,
        ),
        H = Vt(
          [
            N,
            N.clone().addScaledVector(D, C * 0.5),
            N.clone().addScaledVector(D, C),
          ],
          [0.035 + t() * 0.03, 0.025, 0.008],
          4,
        );
      (H.setAttribute(
        "aK",
        new vt(new Float32Array(H.attributes.position.count * 3).fill(0.1), 3),
      ),
        K.push(H));
    }
  const O = [],
    J = 1.7 + a * 2.4 + t() * 0.6;
  ((s.cb = j), (s.Rc = J));
  let tt = t() * De;
  const st = u ? 0.78 : 1.15;
  for (let U = j; U < p - 0.7; U += st * (0.8 + t() * 0.4)) {
    const Z = (p - U) / (p - j),
      ot = J * Math.pow(Z, 0.8) * (1 - 0.25 * Math.pow(Z, 5)) + 0.4,
      $ = u ? 4 + Math.floor(t() * 3) : 3 + Math.floor(t() * 2),
      C = l(U);
    for (let T = 0; T < $; T++) {
      tt += 2.39996 + (t() - 0.5) * 0.6;
      const D = ot * (0.75 + t() * 0.4),
        N = 0.18 + t() * 0.25 - Z * 0.2,
        H = at(
          Math.cos(tt) * Math.cos(N),
          Math.sin(N),
          Math.sin(tt) * Math.cos(N),
        ),
        Q = at(C[0], C[1], C[2]).addScaledVector(
          at(Math.cos(tt), 0, Math.sin(tt)),
          v(U) * 0.9,
        ),
        W = Q.clone()
          .addScaledVector(H, D)
          .add(at(0, -D * 0.3, 0));
      if (u && D > 1.4 && t() < 0.3) {
        const F = Q.clone()
            .addScaledVector(H, D * 0.5)
            .add(at(0, -D * 0.05, 0)),
          E = Vt(
            [Q, F, Q.clone().lerp(W, 0.8)],
            [0.045 + a * 0.03, 0.026, 0.01],
            3,
          );
        (E.setAttribute(
          "aK",
          new vt(
            new Float32Array(E.attributes.position.count * 3).fill(0.15),
            3,
          ),
        ),
          K.push(E));
      }
      const B = Math.max(2, Math.min(5, Math.round(D / 0.55)));
      for (let F = 0; F < B; F++) {
        const E = 0.28 + (F / Math.max(1, B - 1)) * 0.72,
          Y = Q.clone()
            .lerp(W, E)
            .add(
              at(
                (t() - 0.5) * 0.3,
                -Math.sin(E * Math.PI) * 0.15 + (t() - 0.5) * 0.25,
                (t() - 0.5) * 0.3,
              ),
            ),
          et = W.clone()
            .sub(Q)
            .normalize()
            .add(
              at((t() - 0.5) * 0.7, -0.2 - t() * 0.45 * E, (t() - 0.5) * 0.7),
            )
            .normalize(),
          nt = (1.35 + t() * 0.95) * (0.8 + E * 0.45) * (u ? 1 : 1.3);
        O.push({
          pos: Y,
          along: et,
          size: nt,
          cell: E > 0.7 && (Z > 0.55 || t() < 0.35) ? Bt.cedarHang : Bt.cedar,
          out: Y.clone()
            .sub(at(C[0], Y.y + 0.5, C[2]))
            .normalize(),
          shade: 0.5 + Z * 0.12 + t() * 0.08,
        });
      }
    }
    if (u || t() < 0.5)
      for (let T = 0; T < 2; T++) {
        const D = t() * De,
          N = at(
            C[0] + Math.cos(D) * 0.45,
            C[1] + 0.2,
            C[2] + Math.sin(D) * 0.45,
          );
        O.push({
          pos: N,
          along: at(Math.cos(D) * 0.5, -0.8, Math.sin(D) * 0.5).normalize(),
          size: 1.3 + t() * 0.6,
          cell: Bt.cedarHang,
          out: at(Math.cos(D), 0.2, Math.sin(D)).normalize(),
          shade: 0.4,
          vertical: !0,
        });
      }
  }
  const G = [];
  {
    const U = u ? 10 : 7,
      Z = 7,
      ot = j + 0.4;
    for (let $ = 0; $ <= Z; $++) {
      const C = ot + (p - 0.6 - ot) * ($ / Z),
        T = (p - C) / (p - j),
        D = l(C),
        N = (J * Math.pow(T, 0.8) * (1 - 0.25 * Math.pow(T, 5)) + 0.4) * 0.62,
        H = [];
      for (let Q = 0; Q < U; Q++) {
        const W = (Q / U) * De,
          B = N * (0.75 + t() * 0.5) * ($ === Z ? 0.2 : 1);
        H.push([
          D[0] + Math.cos(W) * B,
          D[1] + (t() - 0.5) * 0.4 - ($ === 0 ? 0.3 : 0),
          D[2] + Math.sin(W) * B,
          Math.cos(W),
          Math.sin(W),
        ]);
      }
      G.push(H);
    }
  }
  if (u && t() < 0.3) {
    const U = 2.5 + t() * 5,
      Z = t() * De;
    for (let ot = 0.2; ot < U; ot += 0.22 + t() * 0.18) {
      const $ = Z + ot * 0.35 + (t() - 0.5) * 1.6,
        C = l(ot),
        T = n(ot, $) + 0.03,
        D = at(Math.cos($), 0.15, Math.sin($)).normalize();
      O.push({
        pos: at(C[0] + Math.cos($) * T, C[1], C[2] + Math.sin($) * T),
        along: at(-Math.sin($) * 0.4, 1, Math.cos($) * 0.4).normalize(),
        size: 0.45 + t() * 0.3,
        cell: Bt.ivy,
        out: D,
        shade: 0.7,
        ivy: D,
      });
    }
  }
  const q = l(p);
  for (let U = 0; U < 4; U++)
    O.push({
      pos: at(
        q[0] + (t() - 0.5) * 0.3,
        q[1] - 0.5 - U * 0.6,
        q[2] + (t() - 0.5) * 0.3,
      ),
      along: at((t() - 0.5) * 0.6, 1, (t() - 0.5) * 0.6).normalize(),
      size: 1 + t() * 0.4,
      cell: Bt.cedar,
      out: at(0, 1, 0),
      shade: 0.65,
      vertical: !0,
    });
  return { parts: K, cards: O, cb: j, core: G };
}
