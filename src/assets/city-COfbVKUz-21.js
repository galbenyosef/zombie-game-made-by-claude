// assets/city-COfbVKUz 21 — math
// Lines 6704-7047 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
function Io(m, e, d, n) {
  const h = new T0();
  h.name = "city3_cars";
  const c = (t, u) => t + (u - t) * n(),
    w = (t) => t[Math.floor(n() * t.length)],
    s = r0({ vertexShader: No, fragmentShader: To, uniforms: { ...e } });
  s.name = "city3_cars";
  const x = [],
    k = [],
    P = [],
    _ = [],
    g = [],
    M = d.corridor,
    N = (t, u) => M.dist(t - 0.5, t + 0.5, u - 0.5, u + 0.5, 400),
    T = (t, u, o, l, f = {}) => {
      M.lowest(t - 3, t + 3, u - 3, u + 3, 9) < 11 ||
        it(t, u, 3) ||
        st(t, u, 3) ||
        x.push({ x: t, z: u, yaw: o, kind: l, ...f });
    },
    S = (t, u) => N(t, u) < 380 || (t > 300 && t < 580 && u > -30 && u < 260);
  for (const t of d.streets.ns) {
    const u = t.hw - (t.hw > 15 ? 5.5 : 4),
      o = Math.max(1, Math.floor(u / 3.3));
    for (let l = t.z0 + 6; l < t.z1 - 6; l += c(5.8, 9.5)) {
      if (!S(t.x, l)) {
        l += 40;
        continue;
      }
      const f = N(t.x, l) < 140;
      if (n() > (f ? 0.62 : 0.28)) continue;
      const z = Math.floor(n() * o * 2) - o,
        A = t.x + (z + 0.5) * 3.3 + c(-0.4, 0.4),
        F = z < 0 ? 0 : Math.PI,
        E = n() < 0.12;
      T(
        A,
        l,
        F + (E ? c(-0.9, 0.9) : c(-0.08, 0.08)),
        w([
          "sedan",
          "sedan",
          "hatch",
          "suv",
          "suv",
          "taxi",
          "van",
          "sedan",
          "truck",
          "police",
        ]),
        { burnt: n() < 0.12 },
      );
    }
    for (const l of [-1, 1])
      for (let f = t.z0 + 10; f < t.z1 - 10; f += c(5.5, 14))
        !S(t.x, f) ||
          n() < 0.35 ||
          T(
            t.x + l * (u - 1.1),
            f,
            l < 0 ? 0 : Math.PI,
            w(["sedan", "hatch", "suv", "van", "taxi"]),
            { burnt: n() < 0.06 },
          );
  }
  for (const t of d.streets.ew) {
    const u = t.hw - (t.hw > 15 ? 5.5 : 4),
      o = Math.max(1, Math.floor(u / 3.3));
    for (let l = t.x0 + 6; l < t.x1 - 6; l += c(5.8, 9.5)) {
      if (!S(l, t.z)) {
        l += 40;
        continue;
      }
      const f = N(l, t.z) < 140;
      if (n() > (f ? 0.62 : 0.28)) continue;
      const z = Math.floor(n() * o * 2) - o,
        A = t.z + (z + 0.5) * 3.3 + c(-0.4, 0.4),
        F = z < 0 ? Math.PI / 2 : -Math.PI / 2,
        E = n() < 0.12;
      T(
        l,
        A,
        F + (E ? c(-0.9, 0.9) : c(-0.08, 0.08)),
        w([
          "sedan",
          "sedan",
          "hatch",
          "suv",
          "suv",
          "taxi",
          "van",
          "sedan",
          "truck",
          "police",
          "army",
        ]),
        { burnt: n() < 0.12 },
      );
    }
    for (const l of [-1, 1])
      for (let f = t.x0 + 10; f < t.x1 - 10; f += c(5.5, 14))
        !S(f, t.z) ||
          n() < 0.35 ||
          T(
            f,
            t.z + l * (u - 1.1),
            l < 0 ? Math.PI / 2 : -Math.PI / 2,
            w(["sedan", "hatch", "suv", "van", "taxi"]),
            { burnt: n() < 0.06 },
          );
  }
  (x.push({ x: 600, z: -218, yaw: 1.2, kind: "bus", burnt: !0 }),
    x.push(
      { x: 455, z: 20, yaw: -1.4, kind: "van", amb: !0 },
      { x: 468, z: 16, yaw: 1.9, kind: "police" },
      { x: 430, z: 22, yaw: 1.62, kind: "police" },
    ));
  const v = new Map(),
    a = {},
    r = new S0(),
    y = new G0(),
    b = new X(0, 1, 0),
    p = new X(),
    i = new X(1, 1, 1);
  for (const t of x) {
    const u =
      t.kind + "|" + Math.floor(t.x / 300) + "," + Math.floor(t.z / 300);
    (v.get(u) || v.set(u, []).get(u)).push(t);
    const o = Bo[t.kind],
      l = t.yaw;
    if (t.burnt && n() < 0.3) {
      for (let f = 0; f < 3; f++)
        P.push({
          p: [t.x + c(-0.8, 0.8), 0.9, t.z + c(-1.2, 1.2)],
          w: c(1.6, 2.6),
          h: c(2, 4),
          i: c(0.9, 1.3),
          seed: n() * 50,
          lean: c(0.1, 0.7),
        });
      k.push({ x: t.x, y: 2.2, z: t.z, I: 34, kind: "car" });
    }
    if (t.kind === "police" || t.amb) {
      const f = n();
      (_.push({
        p: [
          t.x - Math.cos(l) * 0.4,
          t.kind === "van" ? 2.5 : 1.6,
          t.z + Math.sin(l) * 0.4,
        ],
        c: [4, 0.25, 0.15],
        s: 1.4,
        m: [3, f, 1.8, 0],
      }),
        _.push({
          p: [
            t.x + Math.cos(l) * 0.4,
            t.kind === "van" ? 2.5 : 1.6,
            t.z - Math.sin(l) * 0.4,
          ],
          c: [0.3, 0.6, 5],
          s: 1.4,
          m: [3, f, 1.8, 1],
        }));
    }
    g.push({
      box: [
        t.x - o[0] / 2,
        0,
        t.z - o[0] / 2,
        t.x + o[0] / 2,
        3.6,
        t.z + o[0] / 2,
      ],
      name: "car",
    });
  }
  for (const [t, u] of v) {
    const o = t.split("|")[0],
      l = (a[o] ||= Ro[o]()).clone(),
      f = u.length,
      z = new Float32Array(f * 4),
      A = new Float32Array(f * 4),
      F = new Mt(l, s, f);
    (u.forEach((E, K) => {
      (y.setFromAxisAngle(b, E.yaw),
        F.setMatrixAt(K, r.compose(p.set(E.x, 0.02, E.z), y, i)));
      const L =
          E.kind === "taxi"
            ? [0.55, 0.36, 0.02]
            : E.kind === "police"
              ? [0.03, 0.035, 0.05]
              : E.amb
                ? [0.55, 0.55, 0.52]
                : E.kind === "army"
                  ? [0.07, 0.085, 0.045]
                  : E.kind === "bus"
                    ? [0.3, 0.22, 0.04]
                    : w(Lo),
        q = E.burnt
          ? 1
          : E.kind === "police"
            ? 2
            : E.amb
              ? 3
              : E.kind === "taxi"
                ? 4
                : E.kind === "army"
                  ? 5
                  : 0;
      (z.set([...L, q], K * 4),
        A.set([n() < 0.12 ? 1 : 0, n(), n(), n() * 10], K * 4));
    }),
      l.setAttribute("aCar", new m0(z, 4)),
      l.setAttribute("aCar2", new m0(A, 4)),
      (F.instanceMatrix.needsUpdate = !0),
      F.computeBoundingSphere(),
      (F.name = "city3_cars_" + t),
      h.add(F));
  }
  return {
    group: h,
    fires: k,
    flames: P,
    points: _,
    solids: g,
    count: x.length,
  };
}
const Eo = (m, e) => m + 32768 * e,
  qo = `
attribute float aPart;       // 0 trunk / branches, 1 leaves
varying vec3 vWorld;
varying vec3 vNw;
varying float vP;
varying float vSeed;
void main() {
  vec4 wp = vec4(position, 1.0);
  vec3 n = normal;
#ifdef USE_INSTANCING
  wp = instanceMatrix * wp; n = mat3(instanceMatrix) * n;
  vSeed = instanceMatrix[3].x * 0.37 + instanceMatrix[3].z * 0.11;
#else
  vSeed = 0.0;
#endif
  vWorld = wp.xyz; vNw = normalize(n); vP = aPart;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,
  Wo = `
varying vec3 vWorld;
varying vec3 vNw;
varying float vP;
varying float vSeed;
${u0}
${g0}
${F0}
void main() {
  vec3 P = vWorld;
  vec3 N = normalize(vNw);
  vec3 V = normalize(P - cameraPosition);
  if (dot(N, V) > 0.0) N = -N;
  float n = c3n(P.xz * 2.7 + P.y * 3.1 + vSeed);
  vec3 alb;
  if (vP < 0.5) alb = vec3(0.035, 0.028, 0.022) * (0.7 + 0.5 * n);
  else {
    // a crown: holes where the leaves are gone (discard), the rest dark olive and rust
    float h = c3n(P.xz * 5.3 + P.y * 4.7 + vSeed * 3.0) * 0.6 + c3n(P.xz * 13.0 - P.y * 11.0) * 0.4;
    if (h < 0.47) discard;
    alb = mix(vec3(0.050, 0.055, 0.025), vec3(0.085, 0.045, 0.018), smoothstep(0.4, 0.7, c3n(P.xz * 1.3 + vSeed))) * (0.7 + 0.6 * n);
  }
  vec3 col = alb * cityLight(P, N);
  col = cityHaze(col, P);
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;
function xt(m, e, d) {
  const n = [],
    h = [],
    c = [],
    w = [],
    s = (a, r) => {
      const y = n.length / 3,
        b = a.attributes.position,
        p = a.attributes.normal;
      for (let i = 0; i < b.count; i++)
        (n.push(b.getX(i), b.getY(i), b.getZ(i)),
          h.push(p.getX(i), p.getY(i), p.getZ(i)),
          c.push(r));
      if (a.index)
        for (let i = 0; i < a.index.count; i++) w.push(y + a.index.getX(i));
      else for (let i = 0; i < b.count; i++) w.push(y + i);
      a.dispose();
    },
    x = new X(0, 1, 0),
    k = new X(),
    P = new G0(),
    _ = new S0(),
    g = new X(),
    M = new X(),
    N = (a, r, y, b) => {
      k.set(r[0] - a[0], r[1] - a[1], r[2] - a[2]);
      const p = k.length();
      P.setFromUnitVectors(x, k.normalize());
      const i = new _0(b, y, p, 5, 1, !0);
      (i.applyMatrix4(
        _.compose(
          M.set((a[0] + r[0]) / 2, (a[1] + r[1]) / 2, (a[2] + r[2]) / 2),
          P,
          g.set(1, 1, 1),
        ),
      ),
        s(i, 0));
    },
    T = e * 0.42;
  N([0, 0, 0], [0, T, 0], 0.17, 0.12);
  const S = 4 + Math.floor(m() * 2);
  for (let a = 0; a < S; a++) {
    const r = (a / S) * Math.PI * 2 + m() * 0.6,
      y = e * (0.35 + m() * 0.2),
      b = [Math.cos(r) * y * 0.55, T + y * 0.85, Math.sin(r) * y * 0.55];
    N([0, T * (0.9 + m() * 0.15), 0], b, 0.09, 0.03);
  }
  for (let a = 0; a < d; a++) {
    const r = m() * Math.PI * 2,
      y = e * 0.18 * m(),
      b = new le(e * (0.2 + m() * 0.1), 1);
    (b.scale(1, 0.75, 1),
      b.translate(Math.cos(r) * y, e * (0.68 + m() * 0.18), Math.sin(r) * y),
      s(b, 1));
  }
  const v = new v0();
  return (
    v.setAttribute("position", new e0(n, 3)),
    v.setAttribute("normal", new e0(h, 3)),
    v.setAttribute("aPart", new e0(c, 1)),
    v.setIndex(w),
    v.computeBoundingSphere(),
    v
  );
}
