// assets/park-CwBfNU5l 11 — math
// Lines 3064-3401 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function Me() {
  if (de) return de;
  const e = {};
  return (
    (de = {
      tex: ye(
        1024,
        1024,
        (t) => {
          (t.clearRect(0, 0, 1024, 1024),
            (t.strokeStyle = "#ffffff"),
            (t.fillStyle = "#ffffff"),
            (t.lineCap = "round"));
          {
            ((t.lineWidth = 14),
              t.beginPath(),
              t.moveTo(0, 16),
              t.lineTo(1024, 16),
              t.moveTo(0, 150),
              t.lineTo(1024, 150),
              t.stroke());
            for (let n = 0; n < 8; n++) {
              const i = 64 + n * 128;
              ((t.lineWidth = 10),
                t.beginPath(),
                t.arc(i, 83, 52, 0, Math.PI * 2),
                t.stroke(),
                t.beginPath(),
                t.arc(i, 83, 22, 0, Math.PI * 2),
                t.stroke(),
                (t.lineWidth = 8),
                t.beginPath(),
                t.moveTo(i + 64, 20),
                t.quadraticCurveTo(i + 40, 83, i + 64, 146),
                t.stroke());
              for (let f = 0; f < 4; f++) {
                const w = i - 48 + f * 32;
                (t.beginPath(),
                  t.moveTo(w - 12, 150),
                  t.lineTo(w, 210),
                  t.lineTo(w + 12, 150),
                  t.fill());
              }
            }
            e.frieze = ae(0, 0, 1024, 256, 1024, 1024);
          }
          {
            ((t.lineWidth = 18),
              t.beginPath(),
              t.moveTo(0, 270),
              t.lineTo(1024, 270),
              t.moveTo(0, 496),
              t.lineTo(1024, 496),
              t.stroke());
            for (let n = 0; n < 16; n++) {
              const i = 32 + n * 64;
              ((t.lineWidth = 9),
                t.beginPath(),
                t.moveTo(i, 270),
                t.lineTo(i, 496),
                t.stroke(),
                (t.lineWidth = 7),
                t.beginPath(),
                t.arc(i, 383, 16, 0, Math.PI * 2),
                t.stroke());
            }
            e.balustrade = ae(0, 256, 1024, 256, 1024, 1024);
          }
          {
            t.lineWidth = 3;
            for (let n = 0; n <= 17; n++) {
              const i = 4 + n * 29.647058823529413;
              (t.beginPath(), t.moveTo(i, 512), t.lineTo(i, 1024), t.stroke());
            }
            for (let n = 0; n <= 25; n++) {
              const i = 516 + n * 20.16;
              (t.beginPath(), t.moveTo(0, i), t.lineTo(512, i), t.stroke());
            }
            e.mesh = ae(0, 512, 512, 512, 1024, 1024);
          }
          {
            ((t.lineWidth = 16),
              t.beginPath(),
              t.moveTo(512, 532),
              t.lineTo(1024, 532),
              t.moveTo(512, 992),
              t.lineTo(1024, 992),
              t.stroke());
            for (let n = 0; n < 8; n++) t.fillRect(536 + n * 64, 532, 14, 460);
            e.bars = ae(512, 512, 512, 512, 1024, 1024);
          }
        },
        { srgb: !0 },
      ),
      rect: e,
    }),
    de
  );
}
function Zt(e, a) {
  const t = e.attributes.uv;
  for (let r = 0; r < t.count; r++)
    t.setXY(
      r,
      a[0] + (a[2] - a[0]) * t.getX(r),
      a[1] + (a[3] - a[1]) * t.getY(r),
    );
  return e;
}
const f0 = Math.PI * 2,
  Qa = (e) => e.map(([a, t]) => new _0(a, t)),
  g0 = (e, a = 16) => new Ie(Qa(e), a),
  Xt = (e, a, t, r = 0.008, o = 1) =>
    new Pa(e, a, t, o, Math.min(r, e / 2 - 1e-4, a / 2 - 1e-4, t / 2 - 1e-4)),
  He = (e, a) => e.map((t) => t.clone().applyMatrix4(a));
let A0 = null;
function buildParkStructures(e) {
  if (A0) return A0;
  const a = Gt(
      e.mats.get("church_dressed", { color: 11052186 }),
      "stone",
      (r) => {
        ((r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vSW;
varying vec3 vSN;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vSW = (modelMatrix * vec4(position, 1.0)).xyz; vSN = normalize(mat3(modelMatrix) * normal);`,
          )),
          (r.fragmentShader = r.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vSW;
varying vec3 vSN;`,
            )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
      // (green-black grime rising from the ground, streaks down from the ledges, moss on what faces the sky)
      float gr = 1.0 - smoothstep(0.0, 0.9, vSW.y);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.07, 0.08, 0.05), gr * 0.65);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.1, 0.13, 0.06), smoothstep(0.6, 0.95, vSN.y) * 0.45);
      diffuseColor.rgb *= 0.82 + 0.18 * sin(vSW.x * 3.1 + vSW.z * 2.3) * sin(vSW.y * 9.0);`,
            )));
      },
    ),
    t = Gt(
      new u0({ color: 4877920, roughness: 0.48, metalness: 0.55 }),
      "bronze",
      (r) => {
        ((r.vertexShader = r.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec3 vBN2;`,
          )
          .replace(
            "#include <uv_vertex>",
            `#include <uv_vertex>
vBN2 = normalize(mat3(modelMatrix) * normal);`,
          )),
          (r.fragmentShader = r.fragmentShader
            .replace(
              "#include <common>",
              `#include <common>
varying vec3 vBN2;`,
            )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
      // verdigris pale on top, the bronze dark brown where the rain does not reach
      diffuseColor.rgb = mix(vec3(0.09, 0.07, 0.045), vec3(0.32, 0.5, 0.42), smoothstep(-0.4, 0.7, vBN2.y));`,
            )));
      },
    );
  return (
    (A0 = {
      iron: Gt(e.mats.get("iron_black", { color: 6978672 }), "iron"),
      wood: Gt(e.mats.get("wood_oak_pale", { color: 9208436 }), "benchwood"),
      stone: a,
      bronze: t,
      brick: Gt(e.mats.get("ext_brick", { color: 11572356 }), "brick"),
      zinc: qt("zinc", 3160124, { rough: 0.5, metal: 0.7, side: y0 }),
      boards: Gt(e.mats.get("house_plank", { color: 8022616 }), "boards"),
      glassDead: qt("glassdead", 724238, { rough: 0.1, metal: 0.3 }),
      red: qt("playred", 6954006, { rough: 0.55, metal: 0.2 }),
      blue: qt("playblue", 1716312, { rough: 0.55, metal: 0.2 }),
      yellow: qt("playyel", 9071126, { rough: 0.6 }),
      steel: qt("steel", 9343638, { rough: 0.3, metal: 0.9 }),
      rubber: qt("rubber", 789516, { rough: 0.9 }),
      safety: qt("safety", 2758162, { rough: 0.95 }),
      sand: Gt(e.mats.get("garden_gravel", { color: 13152392 }), "sand"),
      cloth: qt("cloth", 2763312, { rough: 0.95 }),
      cloth2: qt("cloth2", 4864554, { rough: 0.95 }),
      blanket: qt("blanket", 4868676, { rough: 1 }),
      paper: Gt(new u0({ map: bakeEmergencySigns().tex, roughness: 0.85, side: y0 }), "paper"),
      sign: Gt(new u0({ map: bakeEmergencySigns().tex, roughness: 0.55 }), "sign"),
      lace: (() => {
        const r = Gt(
          new u0({
            map: Me().tex,
            alphaTest: 0.5,
            side: y0,
            color: 5662812,
            roughness: 0.5,
            metalness: 0.6,
          }),
          "lace",
        );
        return (
          (r.userData.depth = new Qe({
            depthPacking: Je,
            map: Me().tex,
            alphaTest: 0.5,
            side: y0,
          })),
          r
        );
      })(),
      blood: Gt(e.mats.get("blood_dark", { color: 5900808 }), "blood", null),
      sheet: Gt(e.mats.get("linen_stained", { color: 10131084 }), "sheet"),
      wool: Gt(e.mats.get("wool_grey", { color: 6974052 }), "wool"),
      woolOlive: Gt(e.mats.get("wool_grey", { color: 6974536 }), "woololive"),
    }),
    (A0.blood.polygonOffset = !0),
    (A0.blood.polygonOffsetFactor = -4),
    (A0.blood.polygonOffsetUnits = -4),
    (A0.blood.userData.noCast = !0),
    (A0.paper.userData.noCast = !0),
    A0
  );
}
function ra(e, { bloodAt: a = 0.3 } = {}) {
  const i = new _t(1.95, 0.86, 40, 18).rotateX(-Math.PI / 2),
    f = i.attributes.position,
    w = (m, F, C) => {
      const L = Math.max(0, Math.min(1, (C - m) / (F - m)));
      return L * L * (3 - 2 * L);
    },
    s = (m, F) => {
      const C =
          0.17 * Math.max(0, 1 - ((m - 0.07) / 0.07) ** 2 - (F / 0.11) ** 2),
        L =
          (m > 0.14 && m < 0.58 ? 1 : 0) *
          0.21 *
          Math.max(0, 1 - (F / (0.23 - 0.05 * w(0.4, 0.58, m))) ** 2) *
          w(0.12, 0.2, m) *
          (1 - 0.25 * w(0.4, 0.55, m)),
        z =
          (m > 0.5 ? 1 : 0) *
          Math.max(0, 1 - ((Math.abs(F) - 0.1) / 0.085) ** 2) *
          (0.13 - 0.05 * w(0.55, 0.92, m)),
        W =
          Math.max(
            0,
            1 - ((m - 0.95) / 0.035) ** 2 - ((Math.abs(F) - 0.11) / 0.06) ** 2,
          ) * 0.2,
        D =
          (m > 0.18 && m < 0.52 ? 1 : 0) *
          Math.max(0, 1 - ((Math.abs(F) - 0.29) / 0.05) ** 2) *
          0.08;
      return Math.max(C, L, z, W, D);
    },
    l = e() * 10;
  for (let m = 0; m < f.count; m++) {
    const F = f.getX(m),
      C = f.getZ(m),
      L = (F + 1.95 / 2) / 1.95;
    let z = 0;
    for (let V = -2; V <= 2; V++)
      z = Math.max(z, s(L, C + V * 0.04) - Math.abs(V) * 0.02);
    const W = w(0.5, 0.36, Math.abs(C)) * w(0, 0.05, L) * w(1, 0.97, L),
      D =
        0.012 * Math.sin(F * 14 + l) * Math.sin(C * 11 - l) +
        0.008 * Math.sin(F * 31 + C * 7);
    f.setY(
      m,
      Math.max(0.012, z * 1.02 + 0.02) * (0.3 + 0.7 * W) + D * W + 0.008,
    );
  }
  i.computeVertexNormals();
  const u = -1.95 / 2 + 1.95 * a,
    c = (e() - 0.5) * 0.15,
    M = 0.22 + e() * 0.12,
    h = i.index.array,
    v = [],
    S = i.attributes.normal;
  for (let m = 0; m < h.length; m += 3) {
    let F = !0;
    for (let C = 0; C < 3; C++) {
      const L = h[m + C],
        z = f.getX(L) - u,
        W = f.getZ(L) - c;
      Math.hypot(z, W * 1.3) >
        M * (0.8 + 0.4 * Math.sin(Math.atan2(W, z) * 5 + l)) && (F = !1);
    }
    F && v.push(h[m], h[m + 1], h[m + 2]);
  }
  const d = i.clone();
  d.setIndex(v);
  const y = d.attributes.position;
  for (let m = 0; m < y.count; m++)
    y.setY(m, y.getY(m) + 0.003 + S.getY(m) * 0.001);
  return { cloth: N(i), blood: v.length ? d : null };
}
function Ja(e, a, t, r, o, n = 32, i = 8) {
  const f = [],
    w = [];
  for (let l = 0; l <= i; l++) {
    const u = l / i,
      c = t + (r - t) * u,
      M = e + (a - e) * u;
    for (let h = 0; h <= n; h++) {
      const v = (h / n) * f0,
        S = M * (1 - 0.09 * Math.pow(Math.max(0, Math.cos(o * v)), 2));
      f.push(Math.sin(v) * S, c, Math.cos(v) * S);
    }
  }
  for (let l = 0; l < i; l++)
    for (let u = 0; u < n; u++) {
      const c = l * (n + 1) + u,
        M = c + n + 1;
      w.push(c, M, c + 1, c + 1, M, M + 1);
    }
  const s = new Q0();
  return (
    s.setAttribute("position", new H0(f, 3)),
    s.setIndex(w),
    s.computeVertexNormals(),
    s
  );
}
