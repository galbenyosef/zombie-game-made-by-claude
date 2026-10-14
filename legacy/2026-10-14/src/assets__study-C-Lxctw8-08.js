// assets__study-C-Lxctw8 08 — math
// Lines 2070-2588 of readable/assets__study-C-Lxctw8.pretty.js (statement-aligned).
function Wo(I, L) {
  const u = (l, m) => I.mats.get(l, m),
    c = u("wood_walnut"),
    b = u("brass_aged");
  I.rng(5150);
  const e = new c0();
  ((e.name = "studyWalls"), L.add(e));
  const a = new n0("studyWalls"),
    n = [],
    t = new c0();
  ((t.name = "deerHead"), e.add(t));
  const h = { z: 5.45, y: 1.74 };
  (t.position.set(7, h.y, h.z), (t.rotation.y = Math.PI / 2));
  const s = new n0("deerHead"),
    M = u("study_fur", { color: "#c79c7c" }),
    k = u("study_fur", { color: "#8c6c58" }),
    P = u("study_fur", { color: "#a88870" });
  {
    const l = new K0();
    (l.moveTo(0, -0.28),
      l.quadraticCurveTo(0.13, -0.22, 0.18, -0.06),
      l.lineTo(0.18, 0.15),
      l.quadraticCurveTo(0.14, 0.21, 0.08, 0.18),
      l.quadraticCurveTo(0.03, 0.24, 0, 0.21),
      l.quadraticCurveTo(-0.03, 0.24, -0.08, 0.18),
      l.quadraticCurveTo(-0.14, 0.21, -0.18, 0.15),
      l.lineTo(-0.18, -0.06),
      l.quadraticCurveTo(-0.13, -0.22, 0, -0.28),
      s.add(d0(l, 0.032, 0.006, { seg: 3, curveSegments: 10 }), c, {
        m: d([0, 0, 0.018]),
        uv: "world",
      }));
    const m = new m0([
        y(0, -0.06, 0.02),
        y(0, -0.01, 0.14),
        y(0, 0.06, 0.25),
        y(0, 0.1, 0.33),
        y(0, 0.085, 0.41),
        y(0, 0.03, 0.52),
        y(0, -0.02, 0.6),
        y(0, -0.035, 0.625),
      ]),
      r = [
        [0, 0.115, 0.17, 0],
        [0.15, 0.1, 0.15, 0.01],
        [0.32, 0.085, 0.13, 0.02],
        [0.48, 0.078, 0.1, 0.025],
        [0.56, 0.075, 0.085, 0.02],
        [0.64, 0.068, 0.072, 0.018],
        [0.74, 0.05, 0.06, 0.012],
        [0.84, 0.034, 0.05, 0.01],
        [0.93, 0.028, 0.042, 0.008],
        [0.98, 0.022, 0.032, 0.006],
        [1, 0.01, 0.014, 0.004],
      ],
      f = (z) => {
        for (let Y = 0; Y < r.length - 1; Y++)
          if (z >= r[Y][0] && z <= r[Y + 1][0]) {
            const C = (z - r[Y][0]) / (r[Y + 1][0] - r[Y][0]);
            return r[Y].map(($, E) => $ + (r[Y + 1][E] - $) * C);
          }
        return r[r.length - 1];
      },
      w = (z, Y = 1) => {
        const C = m.getPointAt(z),
          $ = m.getTangentAt(z),
          E = y(1, 0, 0),
          J = y().crossVectors($, E).normalize(),
          [, O, K, H] = f(z),
          a0 = Math.exp(-(((z - 0.57) / 0.07) ** 2));
        return Po(
          C.clone().addScaledVector(J, -H),
          E,
          J,
          O * Y,
          K * Y,
          22,
          (r0) =>
            Math.sin(r0) > 0
              ? 0.9 + 0.1 * Math.cos(r0 * 2)
              : 1 + (0.05 + 0.12 * a0) * Math.sin(-r0),
        );
      },
      x = [],
      _ = [];
    for (let z = 0; z <= 18; z++) {
      const Y = (z / 18) * 0.53;
      x.push(w(Y, 1 + 0.035 * Math.max(0, (Y - 0.44) / 0.09)));
    }
    for (let z = 0; z <= 28; z++) _.push(w(0.47 + (z / 28) * 0.53));
    (s.add(fo(Q0(x, { capStart: !0, capEnd: !0 })), k, { uv: "keep" }),
      s.add(fo(Q0(_, { capStart: !1, capEnd: !0 })), M, { uv: "keep" }));
    const V = new W0({
      color: 525830,
      roughness: 0.22,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
    V.name = "deer_nose";
    const Q = new W0({
      color: 656900,
      roughness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      envMapIntensity: 2.5,
    });
    Q.name = "deer_eye";
    const D = m.getTangentAt(0.99);
    m.getPointAt(0.985);
    const F = new U0().setFromUnitVectors(y(0, 0, 1), D);
    s.add(new f0(1, 16, 12), V, {
      m: new N0().compose(
        m.getPointAt(0.975).addScaledVector(y(0, 1, 0), -0.006),
        F,
        y(0.021, 0.027, 0.011),
      ),
      uv: "keep",
    });
    const R = m.getPointAt(0.63),
      N = m.getTangentAt(0.63);
    for (const z of [-1, 1]) {
      (s.add(new f0(0.019, 16, 12), Q, {
        m: d([z * 0.06, R.y + 0.012, R.z], [0, z * 0.45, 0], [0.72, 0.9, 1.2]),
        uv: "keep",
      }),
        s.add(new f0(1, 10, 6), u("leather_brown", { color: "#2a1a14" }), {
          m: new N0().compose(
            y(z * 0.052, R.y - 0.004, R.z + 0.04),
            new U0().setFromUnitVectors(y(0, 0, 1), N),
            y(0.005, 0.007, 0.024),
          ),
          uv: "keep",
          shadow: !1,
        }));
      const Y = T(
        [
          [0, 0],
          [0.03, 0.02],
          [0.038, 0.065],
          [0.03, 0.11],
          [0.014, 0.145],
          [0, 0.16],
        ],
        12,
      );
      s.add(Y, P, {
        m: d([z * 0.07, 0.15, 0.32], [-0.35, z * 0.2, -z * 0.95], [1, 1, 0.34]),
        uv: "world",
      });
    }
    const Z = u("study_antler");
    for (const z of [-1, 1]) {
      const Y = y(z * 0.036, 0.152, 0.355);
      s.add(new R0(0.02, 0.0085, 6, 14), Z, {
        m: d([Y.x, Y.y + 0.006, Y.z], [Math.PI / 2 - 0.25, 0, z * 0.35]),
        uv: "keep",
      });
      const C = new m0([
        Y,
        y(z * 0.1, 0.28, 0.33),
        y(z * 0.2, 0.42, 0.27),
        y(z * 0.27, 0.56, 0.26),
        y(z * 0.27, 0.7, 0.31),
        y(z * 0.22, 0.8, 0.37),
      ]);
      s.add(
        x0(C, (E) => 0.019 - E * 0.011, 30, 9),
        Z,
        { uv: "keep" },
      );
      const $ = (E, J, O) => {
        const K = C.getPointAt(E);
        s.add(
          x0(
            new m0([K, ...J.map((H) => y(z * H[0], H[1], H[2]))]),
            (H) => O * (1 - H * 0.85),
            14,
            7,
          ),
          Z,
          { uv: "keep" },
        );
      };
      ($(
        0.05,
        [
          [0.09, 0.22, 0.44],
          [0.1, 0.25, 0.53],
        ],
        0.012,
      ),
        $(
          0.18,
          [
            [0.17, 0.33, 0.41],
            [0.19, 0.37, 0.48],
          ],
          0.01,
        ),
        $(
          0.45,
          [
            [0.28, 0.48, 0.35],
            [0.33, 0.52, 0.42],
          ],
          0.009,
        ),
        $(
          0.82,
          [
            [0.33, 0.78, 0.33],
            [0.36, 0.84, 0.34],
          ],
          0.007,
        ),
        $(
          0.9,
          [
            [0.17, 0.86, 0.42],
            [0.14, 0.9, 0.45],
          ],
          0.006,
        ));
    }
  }
  s.flush(t);
  const i = u("study_paper", {
      extra: { clearcoat: 0.7, clearcoatRoughness: 0.1 },
    }),
    v = u("paper_old"),
    G = (l, m, r, f, w, x) => {
      const _ = (w.h + 2 * w.mat + 0.116) / 2;
      a.at([l, r - _, m], f, () =>
        a.at([0, 0, 0.001], [0.025, 0, 0], () =>
          a.at([0, _, 0], 0, () => Io(a, w, x, i, v)),
        ),
      );
    };
  (G(
    7,
    h.z,
    1.2,
    Math.PI / 2,
    { w: 0.32, h: 0.24, mat: 0.045, prof: "wide", rect: u0.hunt },
    u("wood_ebony"),
  ),
    G(
      10.8,
      8.2,
      1.58,
      -Math.PI / 2,
      { w: 0.27, h: 0.36, mat: 0.05, prof: "wide", rect: u0.stag },
      c,
    ));
  {
    const l = { z: 7.95, y: 1.52, L: 1.08, H: 0.46 };
    a.at([7, l.y, l.z], Math.PI / 2, () => {
      (a.box(
        u("wood_walnut", { color: "#7a6456" }),
        l.L,
        l.H,
        0.02,
        [0, 0, 0.012],
        { r: 0.006, seg: 2, grain: "x" },
      ),
        a.box(c, l.L + 0.04, 0.035, 0.03, [0, l.H / 2 + 0.017, 0.016], {
          r: 0.008,
          grain: "x",
        }),
        a.box(c, l.L + 0.04, 0.03, 0.03, [0, -0.46 / 2 - 0.015, 0.016], {
          r: 0.008,
          grain: "x",
        }));
      for (const f of [-1, 1]) {
        const x = [
          [0, -0.22],
          [0.065, -0.22],
          [0.075, -0.21000000000000002],
        ];
        for (let _ = 0; _ < 3; _++) {
          const V = -0.14500000000000002 + _ * 0.14;
          x.push([0.075, V - 0.03]);
          for (let Q = 0; Q <= 8; Q++) {
            const D = (Q / 8) * Math.PI;
            x.push([
              0.075 - 0.004 - Math.sin(D) * 0.024,
              V - 0.024 * Math.cos(D),
            ]);
          }
          x.push([0.075 + 0.012, V + 0.034], [0.075, V + 0.05]);
        }
        (x.push(
          [0.075, l.H / 2 - 0.03],
          [0.075 - 0.012, l.H / 2 - 0.02],
          [0, l.H / 2 - 0.02],
        ),
          a.add(d0(h0(x), 0.03, 0.004, { seg: 2 }), c, {
            m: d([f * (l.L / 2 - 0.1), 0, 0.022], [0, -Math.PI / 2, 0]),
            uv: "world",
          }));
      }
      const m = [
          [-0.5, -0.045],
          [-0.5, 0.025],
          [-0.28, 0.012],
          [-0.2, 0.018],
          [0.04, 0.013],
          [0.5, 0.008],
          [0.5, -0.002],
          [0.12, -0.006],
          [-0.1, -0.016],
          [-0.18, -0.03],
          [-0.2, -0.016],
          [-0.29, -0.016],
        ],
        r = u("wood_walnut", { color: "#ffffff" });
      for (let f = 0; f < 3; f++)
        a.add(d0(h0(m), 0.0012, 0, { seg: 1 }), r, {
          m: d([0.01, -0.46 / 2 + 0.085 + f * 0.14, 0.0225]),
          uv: "world",
          shadow: !1,
        });
      a.box(
        u("brass_aged", { rough: 0.3 }),
        0.11,
        0.028,
        0.003,
        [0, -0.46 / 2 - 0.015, 0.032],
        { r: 0.001, grain: null },
      );
    });
  }
  {
    a.add(new j(0.018, 0.018, 7.9 - 5.1, 16), c, {
      m: d([10.67, 2.6, (5.1 + 7.9) / 2], [Math.PI / 2, 0, 0]),
      uv: T0.z,
    });
    for (const _ of [5.1, 7.9])
      (a.add(
        T(
          [
            [0, 0],
            [0.024, 0],
            [0.032, 0.02],
            [0.03, 0.05],
            [0.012, 0.07],
            [0, 0.075],
          ],
          16,
        ),
        c,
        {
          m: d([10.67, 2.6, _], [_ < 6 ? -Math.PI / 2 : Math.PI / 2, 0, 0]),
          uv: "keep",
        },
      ),
        a.box(
          b,
          0.13,
          0.016,
          0.016,
          [10.8 - 0.065, 2.6, _ + (_ < 6 ? 0.12 : -0.12)],
          { r: 0.004, grain: null },
        ));
    const w = u("velvet_red", { side: F0 }),
      x = (_, V) => {
        const Q = Math.abs(V - _),
          D = Math.sign(V - _),
          F = 36,
          R = 40,
          N = 2.6 - 0.03,
          Z = 1.05,
          z = [],
          Y = [];
        for (let E = 0; E <= R; E++) {
          const J = E / R,
            O = 0.015 + (N - 0.015) * J,
            K =
              O > Z
                ? 0.38 + 0.62 * Math.pow((O - Z) / (N - Z), 0.8)
                : 0.38 + 0.4 * Math.pow((Z - O) / Z, 0.9),
            H = 0.028 * Math.pow(1 / K, 0.7);
          for (let a0 = 0; a0 <= F; a0++) {
            const r0 = a0 / F,
              k0 =
                Math.sin(r0 * Math.PI * 2 * 7 + J * 0.8) * H +
                Math.sin(r0 * Math.PI * 2 * 2.3 + 1.7) * H * 0.35;
            z.push(
              10.67 - 0.005 - Math.abs(k0) * 0.4 - k0 * 0.6,
              O,
              _ + D * Q * K * r0,
            );
          }
        }
        for (let E = 0; E < R; E++)
          for (let J = 0; J < F; J++) {
            const O = E * (F + 1) + J,
              K = O + F + 1;
            Y.push(O, O + 1, K, O + 1, K + 1, K);
          }
        const C = new q0();
        (C.setAttribute("position", new L0(z, 3)),
          C.setIndex(Y),
          C.computeVertexNormals(),
          a.add(C, w, { uv: "world" }));
        const $ = _ + D * Q * 0.38 * 0.55;
        (a.add(
          new R0(0.075, 0.007, 6, 20),
          u("brass_aged", { color: "#d8b060", rough: 0.6 }),
          { m: d([10.67 - 0.02, Z, $], [0, 0, 0], [0.7, 0.35, 1]), uv: "keep" },
        ),
          a.add(
            T(
              [
                [0, 0],
                [0.018, 0.005],
                [0.022, 0.05],
                [0.012, 0.075],
                [0.006, 0.09],
                [0, 0.095],
              ],
              10,
            ),
            u("brass_aged", { color: "#d8b060", rough: 0.7 }),
            { m: d([10.67 - 0.06, Z - 0.12, $]), uv: "keep" },
          ));
      };
    (x(5.18, 5.62), x(7.82, 7.38));
  }
  const S = new c0();
  ((S.name = "globe"), e.add(S));
  {
    const l = { x: 8.02, z: 8.06, cy: 0.74, r: 0.22 },
      m = new n0("globe");
    (m.at([l.x, 0, l.z], 0.4, () => {
      for (let w = 0; w < 4; w++) {
        const x = (w / 4) * Math.PI * 2 + Math.PI / 4,
          _ = new m0([
            y(Math.cos(x) * 0.27, 0, Math.sin(x) * 0.27),
            y(Math.cos(x) * 0.23, 0.3, Math.sin(x) * 0.23),
            y(Math.cos(x) * 0.26, l.cy - 0.02, Math.sin(x) * 0.26),
          ]);
        m.add(
          x0(_, (V) => 0.02 - 0.006 * Math.sin(Math.PI * V), 16, 10),
          c,
          { uv: T0.y },
        );
      }
      for (const w of [Math.PI / 4, -Math.PI / 4])
        m.box(c, 0.5, 0.024, 0.03, [0, 0.16, 0], { rot: [0, w, 0], r: 0.006 });
      m.add(
        T(
          [
            [0, 0.15],
            [0.03, 0.15],
            [0.034, 0.18],
            [0.02, 0.22],
            [0.008, 0.26],
            [0, 0.265],
          ],
          14,
        ),
        c,
        { uv: "keep" },
      );
      const r = new K0();
      r.absarc(0, 0, 0.3, 0, Math.PI * 2, !1);
      const f = new go();
      (f.absarc(0, 0, 0.235, 0, Math.PI * 2, !0),
        r.holes.push(f),
        m.add(d0(r, 0.022, 0.004, { seg: 2, curveSegments: 48 }), c, {
          m: d([0, l.cy, 0], [-Math.PI / 2, 0, 0]),
          uv: "world",
        }),
        m.add(new Bo(0.24, 0.29, 64), u("paper_old", { color: "#e0d0a8" }), {
          m: d([0, l.cy + 0.0115, 0], [-Math.PI / 2, 0, 0]),
          uv: "world",
        }),
        m.at([0, l.cy, 0], [0, 0, 0.41], () => {
          (m.add(new R0(l.r + 0.012, 0.006, 8, 64), b, {
            m: d([0, 0, 0], [0, Math.PI / 2 - 0.3, 0]),
            uv: "keep",
          }),
            m.add(new f0(l.r, 64, 40), u("study_globe"), {
              m: d([0, 0, 0], [0, 2.1, 0]),
              uv: "keep",
            }));
          for (const w of [-1, 1])
            m.add(
              T(
                [
                  [0, 0],
                  [0.01, 0],
                  [0.01, 0.014],
                  [0.004, 0.02],
                  [0, 0.022],
                ],
                10,
              ),
              b,
              {
                m: d([0, w * (l.r + 0.004), 0], [w < 0 ? Math.PI : 0, 0, 0]),
                uv: "keep",
              },
            );
        }));
    }),
      m.flush(S),
      n.push({
        x0: l.x - 0.31,
        x1: l.x + 0.31,
        z0: l.z - 0.31,
        z1: l.z + 0.31,
        y0: 0,
        y1: 1,
      }));
  }
  return (a.flush(e), { group: e, colliders: n, deerHead: t, globe: S });
}
