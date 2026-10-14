// assets__index-DQDjAbEY 17 — math
// Lines 4922-5240 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
function en(e) {
  const l = new jt({
    color: 16777215,
    roughness: 0.035,
    metalness: 0,
    transparent: !0,
    depthWrite: !1,
    side: wt,
    blending: Qt,
    blendSrc: vt,
    blendDst: mt,
    blendSrcAlpha: vt,
    blendDstAlpha: mt,
    envMapIntensity: 1.2,
  });
  l.forceSinglePass = !0;
  const a = [];
  for (let t = 0; t < 6; t++) a.push(new I0(0, 0, 0, 0));
  const o = {
    uPart: e.uPart,
    tCrack: { value: tn() },
    uCrack: { value: 0 },
    uDirtG: { value: 0.7 },
    uSmear: { value: a },
    uFog: { value: 0 },
    uReflBoost: { value: 3.2 },
    uCamRest: { value: new H0() },
    uPanel: { value: new I0(1.19, 2.29, 0.2025, 0) },
    uScrRefl: { value: new I0(0, 0, 0, 1) },
  };
  return (
    (l.userData.U = o),
    (l.onBeforeCompile = (t) => {
      (Object.assign(t.uniforms, o),
        (t.vertexShader = t.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
` + Ha,
          )
          .replace(
            "#include <beginnormal_vertex>",
            `#include <beginnormal_vertex>
` + $a,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
` + Ya,
          )),
        (t.fragmentShader = t.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
` + Xa,
          )
          .replace(
            "#include <clipping_planes_fragment>",
            `#include <clipping_planes_fragment>
` + ja,
          )
          .replace(
            "#include <color_fragment>",
            `#include <color_fragment>
` + Za,
          )
          .replace(
            "#include <normal_fragment_maps>",
            `#include <normal_fragment_maps>
` + Qa,
          )
          .replace(
            "#include <lights_fragment_end>",
            `#include <lights_fragment_end>
reflectedLight.indirectSpecular *= uReflBoost * (1.0 + gaOut * 0.8); reflectedLight.directSpecular *= gaOut;`,
          )
          .replace("#include <opaque_fragment>", Ja)));
    }),
    (l.customProgramCacheKey = () => "heli_glass_v1"),
    l
  );
}
let ft = null;
function tn() {
  if (ft) return ft;
  const e = 1024,
    l = 576,
    a = new Float32Array(e * l),
    o = new Float32Array(e * l).fill(9),
    t = new Float32Array(e * l),
    s = new Float32Array(e * l).fill(9);
  let n = 917;
  const c = () => ((n = (n * 16807) % 2147483647), n / 2147483647),
    i = (v, u) => [
      ((v - T0.x0) / (T0.x1 - T0.x0)) * e,
      ((u - T0.y0) / (T0.y1 - T0.y0)) * l,
    ],
    d = (T0.x1 - T0.x0) / e,
    f = (v, u, g, P, k, y, M) => {
      const [F, A] = i(v, u),
        [W, N] = i(g, P),
        D = Math.max(0, Math.floor(Math.min(F, W) - y - 1)),
        $ = Math.min(e - 1, Math.ceil(Math.max(F, W) + y + 1)),
        u0 = Math.max(0, Math.floor(Math.min(A, N) - y - 1)),
        L = Math.min(l - 1, Math.ceil(Math.max(A, N) + y + 1)),
        T = W - F,
        O = N - A,
        q = T * T + O * O || 1;
      for (let j = u0; j <= L; j++)
        for (let E = D; E <= $; E++) {
          const l0 = T0.x0 + (E + 0.5) * d;
          if (M > 0 ? l0 < 0.03 : l0 > -0.03) continue;
          const y0 = Math.max(
              0,
              Math.min(1, ((E + 0.5 - F) * T + (j + 0.5 - A) * O) / q),
            ),
            o0 = F + T * y0 - E - 0.5,
            n0 = A + O * y0 - j - 0.5,
            U = Math.hypot(o0, n0),
            e0 = Math.max(0, Math.min(1, y - U + 0.5));
          if (e0 <= 0) continue;
          const a0 = j * e + E;
          ((a[a0] = Math.max(a[a0], e0)),
            e0 > 0.25 && (o[a0] = Math.min(o[a0], k)));
        }
    },
    p = (v, u, g, P, k, y, M, F, A = 0, W = null) => {
      let N = v,
        D = u,
        $ = 0;
      const u0 = 0.012 + c() * 0.01,
        L = [[N, D, k]];
      for (; $ < P;) {
        g += (c() - 0.5) * 0.5;
        const T = u0 * (0.7 + c() * 0.6),
          O = N + Math.cos(g) * T,
          q = D + Math.sin(g) * T;
        if (
          (F > 0 ? O < 0.03 : O > -0.03) ||
          q < T0.y0 ||
          q > T0.y1 ||
          Math.abs(O) > 0.84
        )
          break;
        $ += T;
        const j = k + (y - k) * Math.pow($ / P, 0.85);
        (f(N, D, O, q, j, M * (1 - (0.5 * $) / P), F),
          L.push([O, q, j]),
          A < 2 &&
            c() < 0.05 &&
            p(
              O,
              q,
              g + (c() < 0.5 ? -1 : 1) * (0.4 + c() * 0.6),
              P * (0.2 + c() * 0.35),
              j,
              Math.min(1, j + (y - k) * 0.5),
              M * 0.75,
              F,
              A + 1,
            ),
          (N = O),
          (D = q));
      }
      return (W && W.push(L), L);
    },
    m = (v, u, g, P, k, y, M, F, A) => {
      const W = [],
        N = [];
      for (let O = 0; O < P; O++) {
        const q = A + (O / P) * Math.PI * 2 + (c() - 0.5) * 0.45;
        N.push(q);
        const j = k * (0.35 + c() * 0.65);
        W.push(p(v, u, q, j, y + 0.01 * c(), y + M, 1.3, g));
      }
      const D = F.map((O) => O * (0.85 + c() * 0.3));
      D.forEach((O, q) => {
        const j = y + M * (0.18 + q * 0.2);
        for (let E = 0; E < P; E++) {
          if (c() < 0.18 + q * 0.08) continue;
          const l0 = N[E],
            y0 = N[(E + 1) % P] + (E === P - 1 ? Math.PI * 2 : 0),
            o0 = 5;
          let n0 = v + Math.cos(l0) * O,
            U = u + Math.sin(l0) * O;
          for (let e0 = 1; e0 <= o0; e0++) {
            const a0 = l0 + (y0 - l0) * (e0 / o0),
              r0 = O * (1 + (c() - 0.5) * 0.16),
              i0 = v + Math.cos(a0) * r0,
              V = u + Math.sin(a0) * r0;
            (f(n0, U, i0, V, j, 1, g), (n0 = i0), (U = V));
          }
        }
      });
      const $ = D[D.length - 1] * 1.05,
        [u0, L] = i(v, u),
        T = $ / d;
      for (
        let O = Math.max(0, Math.floor(L - T));
        O <= Math.min(l - 1, Math.ceil(L + T));
        O++
      )
        for (
          let q = Math.max(0, Math.floor(u0 - T));
          q <= Math.min(e - 1, Math.ceil(u0 + T));
          q++
        ) {
          const j = T0.x0 + (q + 0.5) * d,
            E = T0.y0 + ((O + 0.5) / l) * (T0.y1 - T0.y0);
          if (g > 0 ? j < 0.03 : j > -0.03) continue;
          const l0 = j - v,
            y0 = E - u,
            o0 = Math.hypot(l0, y0);
          if (o0 > $) continue;
          let n0 = Math.atan2(y0, l0);
          for (; n0 < N[0];) n0 += Math.PI * 2;
          let U = 0;
          for (let r0 = 0; r0 < P; r0++) {
            const i0 = N[r0] + (N[r0] < N[0] ? Math.PI * 2 : 0);
            n0 >= i0 && (U = r0);
          }
          let e0 = D.findIndex((r0) => o0 < r0);
          e0 < 0 && (e0 = D.length);
          const a0 = O * e + q;
          ((t[a0] =
            0.05 +
            ((0.95 *
              (((Math.sin((U + 1) * 12.9898 + (e0 + 1) * 78.233 + g * 3.1) *
                43758.5453) %
                1) +
                1)) %
              1)),
            (s[a0] = Math.min(s[a0], y + M * (0.2 + e0 * 0.2))));
        }
      for (let O = 0; O < 40; O++) {
        const q = c() * Math.PI * 2,
          j = 0.004 + c() * 0.022;
        f(v, u, v + Math.cos(q) * j, u + Math.sin(q) * j, y, 1.6, g);
      }
    };
  (m(0.36, 1.86, 1, 13, 0.75, 0, 0.8, [0.035, 0.075, 0.13, 0.21, 0.31], 0.3),
    m(-0.42, 1.66, -1, 9, 0.5, 0.55, 0.42, [0.03, 0.07, 0.12, 0.19], 1.1),
    p(0.82, 1.5, 2.6, 0.8, 0.45, 0.9, 1.1, 1));
  const x = new Uint8Array(e * l * 4);
  for (let v = 0; v < e * l; v++) {
    const u = a[v],
      g = o[v] < 2 ? o[v] : 1;
    ((x[v * 4] = Math.round(u * 255)),
      (x[v * 4 + 1] = Math.round(Math.min(1, g * u) * 255)),
      (x[v * 4 + 2] = Math.round(t[v] * 255)),
      (x[v * 4 + 3] = Math.round((s[v] < 2 ? s[v] : 1) * 255)));
  }
  const w = new Ao(x, e, l, To);
  return (
    (w.colorSpace = Jt),
    (w.flipY = !1),
    (w.minFilter = Ot),
    (w.magFilter = Ot),
    (w.generateMipmaps = !1),
    (w.wrapS = w.wrapT = _o),
    (w.needsUpdate = !0),
    (ft = w),
    w
  );
}
const yt = [
    "MASTER CAUTION",
    "ENG 1 FIRE",
    "ENG 2 FIRE",
    "TAIL ROTOR",
    "LOW ROTOR RPM",
    "XMSN OIL",
    "XMSN CHIP",
    "HYD 1",
    "GEN 1",
    "FUEL LOW",
    "ENG 1 OUT",
    "ROTOR BRAKE",
  ],
  ce = 2048,
  ye = 1024,
  te = { x: 1024, y: 0, w: 64, h: 96 },
  no = {},
  Ze = [
    ...yt,
    "IAS",
    "ALT",
    "HDG",
    "VS",
    "NR",
    "N1",
    "TQ",
    "TOT",
    "FUEL",
    "OAT",
    "ATT  HDG  ALT",
    "RA",
    "SELF TEST",
    "AIR RESCUE  AVIONICS",
    "N",
    "0.5",
    "HR",
    "SpO2",
    "NIBP",
    "NO SIGNAL",
    "ENG 1",
    "ENG 2",
    "MASTER",
    "CAUTION",
    "FIRE",
    "GS",
    "TRK",
  ],
  R0 = (e) => {
    const l = Ze.indexOf(e);
    if (l < 0) throw new Error("screens: no caption " + e);
    return l;
  };
let ht = null;
