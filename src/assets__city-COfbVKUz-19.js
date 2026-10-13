// assets__city-COfbVKUz 19 — box
// Lines 6083-6434 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
function Co(m, e, d, n, h, c, w) {
  const s = new T0();
  s.name = "city3_structures";
  const x = (v, a) => v + (a - v) * c(),
    k = W0(e, n, 2),
    P = [],
    _ = [],
    g = [],
    M = (v) => Fo(w, v),
    N = new Map(),
    T = (v) => {
      const a = Math.floor(v / 360);
      return N.get(a) || N.set(a, new l0()).get(a);
    },
    S = { p: [], n: [], g: [], i: [] };
  {
    const v = wt,
      a = (v.z0 + v.z1) / 2,
      r = v.bottom,
      y = v.top,
      b = y - v.deck;
    for (let p = v.x0; p < v.x1 - 0.1; p += 120) {
      const i = Math.min(v.x1, p + 120),
        t = T(p + 60);
      ($0(S, p, i, v.z0, v.z1, y, !1),
        t.box(p, b, v.z0, i, y - 0.01, v.z1, M(C.concrete)));
      for (const u of [-493.5, -488.8, -484, -479.2, -476])
        t.box(p, r, u - 0.25, i, b, u + 0.25, M(C.bridge));
      for (let u = p; u < i; u += 8)
        t.box(
          u - 0.12,
          r + 0.4,
          v.z0 + 1.2,
          u + 0.12,
          b,
          v.z1 - 1.2,
          M(C.bridge),
        );
      (t.box(p, y, v.z0, i, y + 1.05, v.z0 + 0.45, M(C.concrete)),
        t.box(p, y, v.z1 - 0.45, i, y + 1.05, v.z1, M(C.concrete)),
        t.box(p, y, a - 0.3, i, y + 0.9, a + 0.3, M(C.concrete)),
        t.box(p, r - 0.1, v.z0 - 0.1, i, y + 0.05, v.z0 + 0.05, M(C.concrete)),
        t.box(p, r - 0.1, v.z1 - 0.05, i, y + 0.05, v.z1 + 0.1, M(C.concrete)));
    }
    for (
      let p =
        v.pierX0 - Math.floor((v.pierX0 - v.x0) / v.pierStep) * v.pierStep;
      p < v.x1;
      p += v.pierStep
    ) {
      const i = T(p);
      (i.box(p - 1.1, 0.15, a - 1.1, p + 1.1, r - 1, a + 1.1, M(C.concrete)),
        i.box(
          p - 1.3,
          r - 1,
          v.z0 + 0.8,
          p + 1.3,
          r,
          v.z1 - 0.8,
          M(C.concrete),
        ),
        P.push({
          box: [p - 1.1, 0, a - 1.1, p + 1.1, r, a + 1.1],
          name: "highway pier",
        }));
    }
    P.push({ box: [v.x0, r, v.z0, v.x1, y + 1.1, v.z1], name: "highway deck" });
    for (let p = v.x0 + 20; p < v.x1; p += 42) {
      const i = T(p);
      Y(i, [p, y + 0.9, a], [p, y + 10.5, a], 0.22, M(C.lamp), !0);
      for (const u of [-1, 1])
        (Y(i, [p, y + 10.3, a], [p, y + 10.6, a + u * 2.2], 0.12, M(C.lamp)),
          i.box(
            p - 0.3,
            y + 10.25,
            a + u * 2.2 - 0.5,
            p + 0.3,
            y + 10.5,
            a + u * 2.2 + 0.5,
            M(C.lamp),
          ));
      const t = c() < 0.3;
      for (const u of [-1, 1])
        g.push({
          x: p,
          y: y + 10.1,
          z: a + u * 2.2,
          on: t,
          ax: 0,
          az: 0,
          flick: c() < 0.2,
        });
    }
    for (let p = v.x0 + 30; p < v.x1; p += x(9, 26)) {
      if (Math.abs(p - 1052) < 30) continue;
      const i = Math.floor(c() * 4),
        t = v.z0 + 2.6 + i * 4.6 + (i > 1 ? 1.4 : 0),
        u = x(4.2, 5.2),
        o = T(p),
        l = c() < 0.18,
        f = l ? C.burnt : C.container;
      (o.box(p - u / 2, y + 0.25, t - 0.9, p + u / 2, y + 1, t + 0.9, M(f)),
        o.box(
          p - u * 0.25,
          y + 1,
          t - 0.8,
          p + u * 0.2,
          y + 1.5,
          t + 0.8,
          M(l ? C.burnt : C.glassRail),
        ),
        l && c() < 0.4 && _.push({ x: p, y: y + 2, z: t, I: 30, kind: "car" }));
    }
  }
  for (const v of Ot) {
    const a = v.x - v.w / 2,
      r = v.x + v.w / 2,
      y = $.z1 + 4,
      b = $.z0 - 4,
      p = T(v.x);
    if (v.kind === "girder") {
      const t = 0.09999999999999998,
        u = -1.5;
      ($0(S, a + 3, r - 3, b, y, 0.6, !0),
        p.box(a, t, b, r, 0.6 - 0.01, y, M(C.concrete)),
        p.box(a, 0.6, b, a + 3, 0.6 + 0.18, y, M(C.concrete)),
        p.box(r - 3, 0.6, b, r, 0.6 + 0.18, y, M(C.concrete)));
      for (const o of [a + 2, a + 8, r - 8, r - 2])
        p.box(o - 0.3, u, b, o + 0.3, t, y, M(C.bridge));
      for (let o = b; o < y; o += 6)
        for (let l = 0; l < 3; l++) {
          const f = [a + 2, a + 8, r - 8][l],
            z = [a + 8, r - 8, r - 2][l];
          (Y(p, [f, u + 0.2, o], [z, t - 0.1, o], 0.12, M(C.bridge)),
            Y(p, [f, t - 0.1, o], [z, u + 0.2, o], 0.12, M(C.bridge)));
        }
      (p.box(a - 0.15, u + 0.3, b, a + 0.1, t, y, M(C.bridge)),
        p.box(r - 0.1, u + 0.3, b, r + 0.15, t, y, M(C.bridge)));
      for (const o of [a + 0.1, r - 0.1]) {
        p.box(o - 0.05, 0.6 + 1.05, b, o + 0.05, 0.6 + 1.15, y, M(C.iron));
        for (let l = b; l < y; l += 2)
          p.box(
            o - 0.04,
            0.6,
            l - 0.04,
            o + 0.04,
            0.6 + 1.1,
            l + 0.04,
            M(C.iron),
          );
      }
      for (let o = b + 10; o < y; o += 27)
        for (const l of [-1, 1]) {
          const f = v.x + l * (v.w / 2 - 0.6);
          (Y(p, [f, 0.6, o], [f, 0.6 + 8.5, o], 0.18, M(C.lamp), !0),
            p.box(
              f - l * 1.6 - 0.3,
              0.6 + 8.3,
              o - 0.3,
              f - l * 0.1 + 0.3,
              0.6 + 8.5,
              o + 0.3,
              M(C.lamp),
            ),
            g.push({
              x: f - l * 1.4,
              y: 0.6 + 8.2,
              z: o,
              on: c() < 0.4,
              ax: 0,
              az: 0,
              flick: c() < 0.2,
            }));
        }
      for (const o of v.piers || []) {
        p.box(a - 1, $.bed, o - 1.25, r + 1, u, o + 1.25, M(C.concrete));
        for (const l of [a - 1, r + 1]) {
          const f = new _0(1.25, 1.25, u - $.bed, 12, 1);
          (f.translate(l, (u + $.bed) / 2, o), p.geo(f, M(C.concrete)));
        }
        P.push({
          box: [a - 2.3, $.bed, o - 1.25, r + 2.3, u, o + 1.25],
          name: v.name + " pier",
        });
      }
      if (
        (P.push({
          box: [a - 0.2, u, b, r + 0.2, 0.6 + 1.2, y],
          name: v.name + " deck",
        }),
        v.name === "b2")
      ) {
        p.box(v.x + 1, 0.6 + 0.3, -552, v.x + 3.6, 0.6 + 3.4, -540, M(C.burnt));
        for (let o = b + 8; o < y - 6; o += x(10, 20)) {
          const l = v.x + (c() < 0.5 ? -3.5 : 3.5) + x(-0.5, 0.5);
          Math.abs(o + 546) < 9 ||
            (p.box(
              l - 0.9,
              0.6 + 0.25,
              o - 2.2,
              l + 0.9,
              0.6 + 1,
              o + 2.2,
              M(c() < 0.25 ? C.burnt : C.container),
            ),
            p.box(
              l - 0.8,
              0.6 + 1,
              o - 1,
              l + 0.8,
              0.6 + 1.45,
              o + 0.9,
              M(C.glassRail),
            ));
        }
      }
    } else if (v.kind === "arch") {
      const t = [-537, -573],
        u = -9.5;
      ($0(S, a + 3, r - 3, b, y, 1, !0),
        p.box(a, 1 - 0.6, b, r, 1 - 0.01, y, M(C.trim)),
        p.box(a, 1, b, a + 0.7, 1 + 1.1, y, M(C.trim)),
        p.box(r - 0.7, 1, b, r, 1 + 1.1, y, M(C.trim)));
      const o = [
        [$.z0, t[1] - 3],
        [t[1] + 3, t[0] - 3],
        [t[0] + 3, $.z1],
      ];
      for (const [l, f] of o) {
        const A = (f - l) / 2,
          F = (l + f) / 2,
          E = 1 - 1.4 - u;
        for (let K = 0; K < 14; K++) {
          const L = K / 14,
            q = (K + 1) / 14,
            R = l + (f - l) * L,
            V = l + (f - l) * q,
            H = u + E * Math.sqrt(Math.max(0, 1 - ((R - F) / A) ** 2)),
            I = u + E * Math.sqrt(Math.max(0, 1 - ((V - F) / A) ** 2));
          p.box(a + 0.3, Math.min(H, I), R, r - 0.3, 1 - 0.6, V, M(C.trim));
        }
      }
      for (const l of t)
        p.box(a - 1.5, $.bed, l - 3, r + 1.5, u + 1.5, l + 3, M(C.trim));
      P.push({ box: [a, $.bed, $.z0, r, 1 + 1.1, $.z1], name: v.name });
    } else if (v.kind === "cable") {
      const t = 0.5999999999999999,
        u = ($.z0 + $.z1) / 2,
        o = v.tower;
      ($0(S, a + 2, r - 2, b, y, 2.4, !0),
        p.box(a, t, b, r, 2.4 - 0.01, y, M(C.concrete)),
        p.box(a - 0.3, t - 0.4, b, a + 0.6, 2.4 + 0.9, y, M(C.bridge)),
        p.box(r - 0.6, t - 0.4, b, r + 0.3, 2.4 + 0.9, y, M(C.bridge)));
      for (const l of [-1, 1])
        Y(
          p,
          [v.x + l * (v.w / 2 + 2.5), $.bed, u],
          [v.x + l * 4.5, o, u],
          3.2,
          M(C.concrete),
        );
      (p.box(
        v.x - v.w / 2 - 2,
        t - 3,
        u - 1.6,
        v.x + v.w / 2 + 2,
        t,
        u + 1.6,
        M(C.concrete),
      ),
        p.box(
          v.x - 9,
          o - 22,
          u - 1.4,
          v.x + 9,
          o - 19,
          u + 1.4,
          M(C.concrete),
        ));
      for (const l of [-1, 1])
        for (const f of [-1, 1])
          for (let z = 1; z <= 9; z++) {
            const A = u + f * (6 + z * 5.6),
              F = o - 2 - z * 1.6,
              E = v.x + l * (v.w / 2 - 0.2);
            Y(
              p,
              [v.x + l * 4.6, F, u + f * 0.8],
              [E, 2.4 + 0.6, A],
              0.09,
              M(C.iron),
              !0,
            );
          }
      (P.push(
        { box: [a, t - 3, $.z0, r, 2.4 + 1, $.z1], name: v.name + " deck" },
        {
          box: [v.x - 20, $.bed, u - 2, v.x + 20, o, u + 2],
          name: v.name + " pylon",
        },
      ),
        (d.extraPoints = (d.extraPoints || []).concat([
          [v.x - 4.5, o + 0.8, u],
          [v.x + 4.5, o + 0.8, u],
          [v.x, o - 40, u],
        ])));
    } else {
      const t = 0.20000000000000007,
        u = -2;
      ($0(S, a + 2, r - 2, b, y, 0.8, !0),
        p.box(a, t, b, r, 0.8 - 0.01, y, M(C.concrete)));
      for (const o of [a + 2, v.x, r - 2])
        p.box(o - 0.3, u, b, o + 0.3, t, y, M(C.bridge));
      if (v.kind === "truss")
        for (const o of [a + 0.3, r - 0.3])
          (Y(p, [o, 0.8 + 9, b + 6], [o, 0.8 + 9, y - 6], 0.5, M(C.bridge)),
            J0(
              p,
              [o, 0.8, b],
              [o, 0.8, y],
              [o, 0.8 + 9, b + 6],
              [o, 0.8 + 9, y - 6],
              7,
              0.35,
              M(C.bridge),
            ));
      for (const o of v.piers || [-555])
        p.box(a - 1, $.bed, o - 1.4, r + 1, u, o + 1.4, M(C.concrete));
      P.push({ box: [a, $.bed, $.z0, r, 0.8 + 10, $.z1], name: v.name });
    }
    for (const [i, t] of [
      [$.z1, $.z1 + 4],
      [$.z0 - 4, $.z0],
    ])
      p.box(a, 0, Math.min(i, t), r, 0.2, Math.max(i, t), M(C.concrete));
  }
  for (const [v, a] of N) {
    const r = new s0(a.build(), k);
    ((r.name = "city3_struct_" + v), s.add(r));
  }
  {
    const v = new v0();
    (v.setAttribute("position", new e0(S.p, 3)),
      v.setAttribute("normal", new e0(S.n, 3)),
      v.setAttribute("aG", new e0(S.g, 4)),
      v.setIndex(S.i),
      v.computeBoundingSphere());
    const a = new s0(v, h);
    ((a.name = "city3_decks"), s.add(a));
  }
  return { group: s, solids: P, fires: _, lamps: g };
}
