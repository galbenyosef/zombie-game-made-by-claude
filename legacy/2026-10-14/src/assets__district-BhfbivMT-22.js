// assets__district-BhfbivMT 22 — math
// Lines 6937-7211 of readable/assets__district-BhfbivMT.pretty.js (statement-aligned).
function Ho(n, t, e, r, o, l) {
  const s = n.burnt,
    c = n.rng,
    a = n.o,
    h = new qt(((a.seed ?? 1) * 97) | 0),
    f = 2.93,
    y = 0.36,
    m = 2.93 - y,
    b = [l - 0.1, -0.35, -1.35, -2.35, o + 0.1],
    v = (M) => {
      if (M < 0.22) return [-e, A0(r - 0.05, m, M / 0.22)];
      if (M < 0.34) {
        const C = Math.PI - ((M - 0.22) / 0.12) * (Math.PI / 2);
        return [-e + y + Math.cos(C) * y, m + Math.sin(C) * y];
      }
      if (M < 0.66) return [A0(-e + y, e - y, (M - 0.34) / 0.32), f];
      if (M < 0.78) {
        const C = Math.PI / 2 - ((M - 0.66) / 0.12) * (Math.PI / 2);
        return [e - y + Math.cos(C) * y, m + Math.sin(C) * y];
      }
      return [e, A0(m, r - 0.05, (M - 0.78) / 0.22)];
    },
    p = [
      0, 0.11, 0.22, 0.26, 0.3, 0.34, 0.45, 0.555, 0.66, 0.7, 0.74, 0.78, 0.89,
      1,
    ];
  for (const M of b) {
    const C = s && c() < 0.5 ? (c() - 0.5) * 0.4 : 0;
    for (let T = 0; T < p.length - 1; T++) {
      const [N, K] = v(p[T]),
        [O, k] = v(p[T + 1]),
        P = (W) => (C ? C * Math.max(0, W - r) * 0.5 : 0);
      f0(
        t,
        s ? "iron" : "trim",
        new z(N * 0.985, K - Math.abs(P(K)), M + P(K)),
        new z(O * 0.985, k - Math.abs(P(k)), M + P(k)),
        0.035,
        0.035,
        new z(0, 0, 1),
        k0,
      );
    }
  }
  const d = me("#5c5a3c"),
    i = [];
  for (let M = o; M <= l + 1e-6; M += 0.2) i.push(Math.min(M, l));
  const u = [
      0, 0.07, 0.14, 0.22, 0.26, 0.3, 0.34, 0.4, 0.46, 0.5, 0.54, 0.6, 0.66,
      0.7, 0.74, 0.78, 0.86, 0.93, 1,
    ],
    x = (M, C) => {
      let T = 9;
      for (const P of b) T = Math.min(T, Math.abs(M - P));
      const N = Math.min(1, T / 0.5) * 0.045,
        [K, O] = v(C),
        k = O > m - 0.01;
      return new z(K * (1.012 - (k ? 0 : N * 0.6)), O + 0.025 - (k ? N : 0), M);
    },
    w = (M, C) => {
      const T = h.fbm(M * 1.3, C * 5, 3) * 0.5 + 0.5;
      let N = 9;
      for (const K of b) N = Math.min(N, Math.abs(M - K));
      return s ? T + (0.25 - N) * 1.6 > 0.62 : T < 0.72 || N < 0.12;
    },
    _ = s ? "char" : "tarp";
  for (let M = 0; M < i.length - 1; M++)
    for (let C = 0; C < u.length - 1; C++) {
      const T = (i[M] + i[M + 1]) / 2,
        N = (u[C] + u[C + 1]) / 2;
      if (!w(T, N)) continue;
      const K = x(i[M], u[C]),
        O = x(i[M], u[C + 1]),
        k = x(i[M + 1], u[C + 1]),
        P = x(i[M + 1], u[C]),
        W = (q, Y) => {
          const $ = h.fbm(q * 1.3, Y * 5, 3) * 0.5 + 0.5;
          return oe(d, s ? 0.2 : 0.75 + 0.35 * $ - ($ > 0.64 ? 0.35 : 0));
        };
      t.quad(
        _,
        K,
        P,
        k,
        O,
        [i[M] * 2, u[C] * 6],
        [i[M + 1] * 2, u[C] * 6],
        [i[M + 1] * 2, u[C + 1] * 6],
        [i[M] * 2, u[C + 1] * 6],
        W(i[M], u[C]),
        W(i[M + 1], u[C]),
        W(i[M + 1], u[C + 1]),
        W(i[M], u[C + 1]),
      );
    }
  if (!s) {
    const M = u.map((N) => {
        const K = x(l, N);
        return new ye(K.x, K.y);
      }),
      C = new wn(new je([...M, new ye(e, r), new ye(-e, r)]));
    (U(t, "tarp", C, Z(0, 0, l + 0.02), oe(d, 0.8)), C.dispose());
    const T = new b0(0.09, 0.09, e * 2 - 0.1, 8).rotateZ(Math.PI / 2);
    (U(t, "tarp", T, Z(0, 2.72, o - 0.06), oe(d, 0.85)), T.dispose());
    for (let N = 0; N < 4; N++) {
      const K = -0.9 + N * 0.6 + (c() - 0.5) * 0.1,
        O = 0.3 + c() * 0.8;
      U(
        t,
        "tarp",
        new D0(0.22, O),
        Z(K, 2.64 - O / 2, o - 0.05, 0.05),
        oe(d, 0.7),
      );
    }
  }
}
function pn(n, t = {}) {
  if (Sn[n]) return Ro(n, t);
  if (n === "bus") return Ao(t);
  if (n === "armytruck") return Yo(t);
  throw new Error("buildVehicle: unknown kind " + n);
}
function se(n, t, e) {
  const r = document.createElement("canvas");
  ((r.width = n), (r.height = t), e(r.getContext("2d"), n, t));
  const o = new Dt(r);
  return ((o.colorSpace = Pt), (o.anisotropy = 4), o);
}
let Yt = null;
function Gt(n, t, e, r, o = 0) {
  if (!Yt) {
    const x = se(256, 128, (w) => {
      ((w.fillStyle = "#3f4a2c"),
        w.fillRect(0, 0, 256, 128),
        (w.fillStyle = "rgba(0,0,0,0.25)"));
      for (let _ = 0; _ < 900; _++)
        w.fillRect((_ * 97) % 256, (_ * 57) % 128, 2, 2);
      ((w.fillStyle = "#d8c060"),
        (w.font = "bold 44px monospace"),
        (w.textAlign = "center"),
        w.fillText("AMMO", 128, 58),
        (w.font = "bold 26px monospace"),
        w.fillText("9 MM  x 240", 128, 98));
    });
    Yt = {
      side: new e0({ map: x, roughness: 0.8 }),
      plain: new e0({ color: 4147756, roughness: 0.85 }),
      inner: new e0({ color: 1381647, roughness: 1 }),
      rounds: new e0({ color: 6969898, roughness: 0.7 }),
    };
  }
  const { side: l, plain: s, inner: c, rounds: a } = Yt,
    h = new P0();
  h.name = "ammo_crate";
  const f = new p0(0.95, 0.46, 0.52),
    y = (x) => {
      const w = f.clone(),
        _ = [];
      for (const M of f.groups)
        if (x(M.materialIndex))
          for (let C = M.start; C < M.start + M.count; C++)
            _.push(f.index.array[C]);
      return (w.setIndex(_), w.clearGroups(), w);
    },
    m = new l0(
      y((x) => x < 4),
      s,
    ),
    b = new l0(
      y((x) => x >= 4),
      l,
    );
  for (const x of [m, b]) ((x.position.y = 0.23), h.add(x));
  const v = new l0(new p0(0.88, 0.02, 0.45), c);
  ((v.position.y = 0.43), h.add(v));
  const p = new l0(new p0(0.97, 0.05, 0.54), s);
  (p.position.set(0.1, 0.12, 0.62),
    p.rotation.set(0.9, 0.2, 0.05),
    h.add(p),
    h.position.set(n, o, t),
    (h.rotation.y = e));
  const d = [];
  for (let x = 0; x < 4; x++) {
    const w = new p0(0.18, 0.1, 0.13);
    (w.rotateY((x % 2) * 0.2),
      w.translate(-0.3 + x * 0.2, 0.47, (x % 2) * 0.1 - 0.05),
      d.push(w));
  }
  const i = new P0();
  i.name = "ammo_rounds";
  const u = new l0(_0(d.map((x) => I0(x))), a);
  return (
    (u.castShadow = !0),
    i.add(u),
    i.position.set(n, o, t),
    (i.rotation.y = e),
    o === 0 &&
      r.push({
        x0: n - 0.5,
        x1: n + 0.5,
        z0: t - 0.4,
        z1: t + 0.4,
        y0: 0,
        y1: 0.5,
      }),
    {
      statics: h,
      group: i,
      pos: [n, o + 0.45, t],
      taken: !1,
      take() {
        ((this.taken = !0), (u.visible = !1));
      },
      reset() {
        ((this.taken = !1), (u.visible = !0));
      },
    }
  );
}
function Eo(n) {
  const t = new e0({ color: 16777215, roughness: 0.95 });
  return (
    (t.onBeforeCompile = (e) => {
      ((e.uniforms.uFireT = n.uFireT),
        (e.vertexShader = e.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vDW;`,
          )
          .replace(
            "#include <worldpos_vertex>",
            `#include <worldpos_vertex>
vDW = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
          )),
        (e.fragmentShader = e.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vDW;
uniform float uFireT;`,
          )
          .replace(
            "#include <map_fragment>",
            `#include <map_fragment>
      vec3 hallE = vec3(0.0);
      {
        vec3 rd = normalize(vDW - cameraPosition);
        vec3 r = vec3(rd.x, rd.y, max(rd.z, 0.02));
        r.x = abs(r.x) < 1e-4 ? 1e-4 : r.x; r.y = abs(r.y) < 1e-4 ? 1e-4 : r.y;
        vec3 pp = vec3(vDW.x - 23.4, vDW.y, 0.0), dims = vec3(1.4, 2.5, 4.5);
        vec3 tv = (step(0.0, r) * dims - pp) / r;
        float t = min(min(tv.x, tv.y), tv.z);
        vec3 hp = pp + r * t;
        float isBack = step(tv.z, min(tv.x, tv.y)), isY = (1.0 - isBack) * step(tv.y, tv.x);
        float isFloor = isY * step(r.y, 0.0), isCeil = isY * step(0.0, r.y), isSide = 1.0 - isBack - isY;
        vec3 c = vec3(0.2, 0.19, 0.17) * isSide + vec3(0.07, 0.06, 0.055) * isFloor + vec3(0.24, 0.23, 0.22) * isCeil + vec3(0.12, 0.11, 0.1) * isBack;
        c *= 0.85 + 0.15 * step(0.5, fract(hp.z * 1.6)) * isFloor;                               // (the floor's boards)
        c *= exp(-hp.z * 0.5);
        float ajar = isBack * step(abs(hp.x - 0.95), 0.28) * step(hp.y, 2.0);
        hallE = vec3(0.55, 0.05, 0.03) * ajar * (0.75 + 0.25 * sin(uFireT * 9.0) * sin(uFireT * 2.3));
        diffuseColor.rgb = c * (1.0 - ajar);
      }`,
          )
          .replace(
            "#include <emissivemap_fragment>",
            `#include <emissivemap_fragment>
totalEmissiveRadiance += hallE;`,
          )));
    }),
    (t.customProgramCacheKey = () => "doorway1"),
    t
  );
}
