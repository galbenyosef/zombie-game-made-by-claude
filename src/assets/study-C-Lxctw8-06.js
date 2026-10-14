// assets/study-C-Lxctw8 06 — box
// Lines 1692-1956 of readable/assets/study-C-Lxctw8.pretty.js (statement-aligned).
function Vo(I, L) {
  const u = (m, r) => I.mats.get(m, r),
    c = u("wood_walnut"),
    b = u("brass_aged"),
    e = I.rng(1847),
    a = new c0();
  ((a.name = "bookcases"), L.add(a));
  const n = new n0("bookcases"),
    t = [],
    h = [],
    s = [],
    M = [],
    k = [V0(15, 0, 3), V0(15, 1, 3)],
    P = [
      { id: "N", cx: 8.875, wallZ: 4.6, rot: 0 },
      { id: "S", cx: 8.875, wallZ: 9, rot: Math.PI },
    ],
    i = 4,
    v = (g.L - 0.025) / i;
  let G = 0;
  for (const m of P) {
    const r = d([m.cx, 0, m.wallZ], [0, m.rot, 0]);
    (n.push(r), n.push(d([0, 0, g.off])));
    const f = g.L,
      w = f / 2;
    (n.box(c, f, g.topY + 0.03, 0.015, [0, (g.topY + 0.03) / 2, 0.0075], {
      r: 0.002,
      grain: "y",
    }),
      n.box(
        c,
        f,
        g.plinth,
        g.baseD - 0.02,
        [0, g.plinth / 2, (g.baseD - 0.02) / 2],
        { r: 0.004 },
      ),
      n.box(
        c,
        f - 0.02,
        g.ledgeY - g.plinth - 0.035,
        g.baseD - 0.04,
        [0, (g.plinth + g.ledgeY - 0.035) / 2, (g.baseD - 0.04) / 2],
        { r: 0.003 },
      ),
      n.box(
        c,
        f + 0.03,
        0.035,
        g.baseD + 0.02,
        [0, g.ledgeY - 0.0175, (g.baseD + 0.02) / 2],
        { r: 0.01, seg: 2 },
      ));
    for (let D = 0; D <= i; D++) {
      const F = -w + 0.0125 + D * v,
        R = D === 0 || D === i ? 0.03 : 0.024;
      n.box(
        c,
        R,
        g.topY - g.ledgeY,
        g.upD,
        [F, (g.ledgeY + g.topY) / 2, g.upD / 2 + 0.01],
        { r: 0.004, grain: "y" },
      );
    }
    for (const D of [-1, 1])
      n.box(
        c,
        0.03,
        g.ledgeY - 0.035,
        g.baseD,
        [D * (w - 0.015), (g.ledgeY - 0.035) / 2, g.baseD / 2],
        { r: 0.004, grain: "y" },
      );
    (n.box(c, f, 0.03, g.upD + 0.01, [0, g.topY + 0.015, g.upD / 2 + 0.005], {
      r: 0.004,
    }),
      n.box(
        c,
        f + 0.05,
        0.045,
        g.upD + 0.04,
        [0, g.topY + 0.052, (g.upD + 0.04) / 2],
        { r: 0.008, seg: 2 },
      ),
      n.box(
        c,
        f + 0.09,
        0.04,
        g.upD + 0.07,
        [0, g.topY + 0.094, (g.upD + 0.07) / 2],
        { r: 0.012, seg: 2 },
      ));
    for (let D = 0; D < i; D++) {
      const F = -w + 0.0125 + (D + 0.5) * v;
      for (const R of [-1, 1]) {
        const N = F + (R * v) / 4,
          Z = v / 2 - 0.012,
          z = g.ledgeY - g.plinth - 0.075;
        (n.box(c, Z, z, 0.02, [N, g.plinth + 0.02 + z / 2, g.baseD - 0.03], {
          r: 0.004,
          grain: "y",
        }),
          n.box(
            c,
            Z - 0.09,
            z - 0.12,
            0.012,
            [N, g.plinth + 0.02 + z / 2, g.baseD - 0.016],
            { r: 0.012, seg: 2, grain: "y" },
          ),
          n.add(new f0(0.011, 12, 8), b, {
            m: d([F + R * 0.035, g.plinth + 0.02 + z * 0.62, g.baseD - 0.012]),
            uv: "keep",
          }));
      }
    }
    for (let D = 0; D < i; D++) {
      const F = -w + 0.0125 + (D + 0.5) * v;
      for (let R = 0; R < g.shelves.length; R++)
        (m.id === "S" && D === 1 && R === 0) ||
          n.box(
            c,
            v - 0.024,
            g.t,
            g.upD - 0.01,
            [F, g.shelves[R], g.upD / 2 + 0.005],
            { r: 0.004, grain: "x" },
          );
    }
    const x = [g.ledgeY, ...g.shelves.map((D) => D + g.t / 2)],
      _ = [...g.shelves.map((D) => D - g.t / 2), g.topY];
    for (let D = 0; D < i; D++) {
      const F = -w + 0.0125 + D * v + 0.014,
        R = F + v - 0.028;
      for (let N = 0; N < x.length; N++) {
        let Z = x[N],
          z = _[N];
        if (
          (m.id === "S" && D === 1 && N <= 1) ||
          (m.id === "N" && D === 1 && N === 0)
        )
          continue;
        const Y = z - Z - 0.012;
        let C = F + e() * 0.02;
        const E = e() < 0.14,
          J = E ? (G++ % 2 === 0 ? [3, 0] : [9, 1]) : null;
        for (; C < R - 0.03;) {
          const O = e();
          if (O < 0.035 && C > F + 0.1) {
            C += 0.05 + e() * 0.1;
            continue;
          }
          const K = E
              ? Math.min(Y, 0.235)
              : Math.min(Y, 0.17 + e() * e() * 0.11 + e() * 0.03),
            H = E ? 0.042 : 0.018 + e() * e() * 0.05,
            a0 = Math.min(g.upD - 0.05, 0.13 + K * 0.3 + e() * 0.03),
            r0 = E ? J[0] : Math.floor(e() * 15),
            k0 = E ? J[1] : Math.floor(e() * 2),
            z0 = V0(r0, k0);
          if (O > 0.965 && !E && R - C > 0.25) {
            const o0 = 3 + Math.floor(e() * 3);
            let X = Z;
            const l0 = 0.16 + e() * 0.06;
            for (let w0 = 0; w0 < o0; w0++) {
              const P0 = 0.022 + e() * 0.025,
                A0 = 0.14 + e() * 0.06,
                S0 = d(
                  [
                    C + l0 / 2,
                    X,
                    g.upD - 0.02 - (0.13 + A0 * 0.3) / 2 + (e() - 0.5) * 0.01,
                  ],
                  [0, (e() - 0.5) * 0.08, 0],
                )
                  .multiply(d([0, P0 / 2, 0], [0, 0, Math.PI / 2]))
                  .multiply(d([0, -l0 / 2, 0]));
              (mo(
                t,
                h,
                s,
                n.top.clone().multiply(S0),
                P0,
                l0,
                0.13 + A0 * 0.3,
                V0(Math.floor(e() * 15), Math.floor(e() * 2)),
                k[1],
              ),
                (X += P0));
            }
            C += l0 + 0.02;
            continue;
          }
          const A = !E && e() < 0.05 ? -(0.12 + e() * 0.18) : 0,
            i0 = g.upD - 0.012 - a0 / 2 - e() * 0.018,
            s0 = A
              ? d([C + H, Z, i0], [0, 0, A]).multiply(d([-H / 2, 0, 0]))
              : d([C + H / 2, Z, i0], [0, (e() - 0.5) * 0.03, 0]),
            p0 = A ? H + K * Math.sin(-A) : H;
          if (C + p0 > R) break;
          (mo(t, h, s, n.top.clone().multiply(s0), H, K, a0, z0, k[0]),
            (C += p0 + (A ? 0.001 : 0.0012 + e() * 0.002)));
        }
      }
    }
    (n.pop(), n.pop());
    const V = m.wallZ,
      Q = m.wallZ + (m.rot === 0 ? 1 : -1) * (g.off + g.baseD + 0.02);
    M.push({
      x0: m.cx - w - 0.05,
      x1: m.cx + w + 0.05,
      z0: Math.min(V, Q),
      z1: Math.max(V, Q),
      y0: 0,
      y1: 2.5,
    });
  }
  {
    const m = 8.875 - (-1.5625 + 1.5 * v),
      r = 9 - g.off - g.upD / 2 - 0.02;
    n.at([m, g.ledgeY, r], Math.PI + 0.12, () => Eo(n, u));
  }
  {
    const m = 8.875 + (-1.5625 + 1.5 * v),
      r = 4.6 + g.off + g.upD - 0.06;
    (n.at([m - 0.12, g.ledgeY, r], [0, 0.25, 0], () => {
      (n.at([0, 0, 0], [-0.18, 0, 0], () => {
        (n.box(u("wood_ebony"), 0.17, 0.135, 0.012, [0, 0.0675, 0], {
          r: 0.003,
          grain: null,
        }),
          n.add(
            y0(0.136, 0.102, u0.snap),
            u("study_paper", { extra: { clearcoat: 0 } }),
            { m: d([0, 0.0675, 0.0065]), uv: "keep" },
          ));
      }),
        n.box(u("wood_ebony"), 0.02, 0.12, 0.006, [0, 0.06, -0.035], {
          rot: [0.35, 0, 0],
          r: 0.002,
          grain: null,
        }));
    }),
      n.box(b, 0.045, 0.07, 0.022, [m + 0.14, g.ledgeY + 0.035, r + 0.02], {
        r: 0.006,
        grain: null,
      }));
  }
  n.flush(a);
  const S = new q0();
  (S.setAttribute("position", new L0(t, 3)),
    S.setAttribute("normal", new L0(h, 3)),
    S.setAttribute("uv", new L0(s, 2)),
    S.computeBoundingSphere(),
    S.computeBoundingBox());
  const l = new H0(S, u("study_books"));
  return (
    (l.name = "books"),
    (l.castShadow = !0),
    (l.receiveShadow = !0),
    a.add(l),
    { group: a, colliders: M, bookCount: t.length / 108 }
  );
}
