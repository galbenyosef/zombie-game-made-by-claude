// assets__city-COfbVKUz 22 — math
// Lines 7048-7267 of readable/assets__city-COfbVKUz.pretty.js (statement-aligned).
function Do(m, e, d, n, h, c) {
  const w = new T0();
  w.name = "city3_furniture";
  const s = (i, t) => i + (t - i) * c(),
    x = W0(e, n, 2),
    k = r0({
      vertexShader: qo,
      fragmentShader: Wo,
      uniforms: { ...e },
      side: E0,
    }),
    P = (i) => Eo(h, i),
    _ = d.corridor,
    g = [],
    M = [],
    N = (i, t) =>
      _.dist(i - 0.5, i + 0.5, t - 0.5, t + 0.5, 300) < 260 ||
      (i > 300 && i < 580 && t > -40 && t < 260),
    T = (() => {
      const i = new l0();
      return (
        Y(i, [0, 0, 0], [0, 8.4, 0], 0.17, P(C.lamp), !0),
        Y(i, [0, 7.9, 0], [1.5, 8.35, 0], 0.08, P(C.lamp)),
        i.box(1.15, 8.15, -0.18, 1.85, 8.38, 0.18, P(C.lamp)),
        i.box(-0.18, 0, -0.18, 0.18, 0.5, 0.18, P(C.lamp)),
        i.build()
      );
    })(),
    S = (() => {
      const i = new l0();
      (Y(i, [0, 0, 0], [0, 6.2, 0], 0.22, P(C.lamp), !0),
        Y(i, [0, 5.8, 0], [7.5, 6, 0], 0.13, P(C.lamp)));
      for (const t of [3.8, 7])
        i.box(t - 0.17, 4.9, -0.15, t + 0.17, 5.85, 0.15, P(C.lamp));
      return (i.box(-0.17, 2.6, -0.15, 0.17, 3.5, 0.15, P(C.lamp)), i.build());
    })(),
    v = (() => {
      const i = new l0(),
        t = new _0(0.14, 0.17, 0.75, 8);
      return (
        t.translate(0, 0.37, 0),
        i.geo(t, P(C.crane)),
        i.box(-0.22, 0.45, -0.06, 0.22, 0.55, 0.06, P(C.crane)),
        i.build()
      );
    })(),
    a = (() => {
      const i = new l0();
      return (i.box(-0.3, 0, -0.25, 0.3, 1.1, 0.25, P(C.container)), i.build());
    })(),
    r = [xt(c, 8.5, 4), xt(c, 10.5, 5), xt(c, 7.5, 3)],
    y = new Map(),
    b = (i, t, u, o, l, f, z, A = 1) => {
      const F = i + "|" + Math.floor(o / 320) + "," + Math.floor(f / 320);
      (y.has(F) || y.set(F, [t, u, []]),
        y
          .get(F)[2]
          .push(
            new S0().compose(
              new X(o, l, f),
              new G0().setFromAxisAngle(new X(0, 1, 0), z),
              new X(A, A, A),
            ),
          ));
    };
  for (const i of d.lamps) {
    if (i.y > 9 || !N(i.x, i.z) || it(i.x, i.z, 1) || st(i.x, i.z, 1)) continue;
    const t = Math.atan2(-i.az, i.ax);
    (b("lamp", T, x, i.x, 0.15, i.z, t),
      M.push({
        seg: [[i.x, 0, i.z], [i.x, 8.4, i.z], 0.15],
        name: "lamp post",
      }));
  }
  const p = (i, t, u = 9) => _.lowest(i - 1, i + 1, t - 1, t + 1, u) < 16;
  for (const i of d.streets.ns)
    if (!(i.hw < 15 || i.old))
      for (const t of [-1, 1])
        for (let u = i.z0 + 12; u < i.z1 - 12; u += s(8.5, 11)) {
          const o = i.x + t * (i.hw - 2.6);
          !N(o, u) ||
            p(o, u) ||
            c() < 0.15 ||
            (b(
              "tree" + Math.floor(c() * 3),
              null,
              k,
              o,
              0.15,
              u,
              c() * 6.28,
              s(0.85, 1.15),
            ),
            M.push({
              box: [o - 3, 0, u - 3, o + 3, 11.5, u + 3],
              name: "street tree",
            }));
        }
  for (const i of d.streets.ew)
    if (!(i.hw < 15))
      for (const t of [-1, 1])
        for (let u = i.x0 + 12; u < i.x1 - 12; u += s(8.5, 11)) {
          const o = i.z + t * (i.hw - 2.6);
          !N(u, o) ||
            p(u, o) ||
            c() < 0.15 ||
            (b(
              "tree" + Math.floor(c() * 3),
              null,
              k,
              u,
              0.15,
              o,
              c() * 6.28,
              s(0.85, 1.15),
            ),
            M.push({
              box: [u - 3, 0, o - 3, u + 3, 11.5, o + 3],
              name: "street tree",
            }));
        }
  for (const i of d.streets.ns)
    for (const t of d.streets.ew) {
      if (
        !(
          i.x >= t.x0 - i.hw &&
          i.x <= t.x1 + i.hw &&
          t.z >= i.z0 - t.hw &&
          t.z <= i.z1 + t.hw
        ) ||
        !N(i.x, t.z) ||
        c() < 0.25
      )
        continue;
      const u = [
          [i.x - i.hw + 0.8, t.z - t.hw + 0.8, 0],
          [i.x + i.hw - 0.8, t.z + t.hw - 0.8, Math.PI],
        ],
        o = c();
      for (const [l, f, z] of u)
        if (!(p(l, f, 9) || it(l, f, 1.5) || st(l, f, 1.5))) {
          b("signal", S, x, l, 0.15, f, z);
          for (const A of [3.8, 7]) {
            const F = l + Math.cos(z) * A,
              E = f - Math.sin(z) * A;
            g.push({
              p: [F, 5.4, E],
              c: [2.6, 1, 0.05],
              s: 0.9,
              m: [1, o, 0.9, 0],
            });
          }
          M.push(
            { seg: [[l, 0, f], [l, 6.2, f], 0.25], name: "signal" },
            {
              seg: [
                [l, 6, f],
                [l + Math.cos(z) * 7.5, 6, f - Math.sin(z) * 7.5],
                0.6,
              ],
              name: "signal arm",
            },
          );
        }
    }
  for (const i of d.streets.ns)
    for (let t = i.z0 + 20; t < i.z1 - 20; t += s(25, 60)) {
      const u = c() < 0.5 ? -1 : 1,
        o = i.x + u * (i.hw - (i.hw > 15 ? 5.5 : 4) + 0.5);
      N(o, t) &&
        (c() < 0.5
          ? b("hydrant", v, x, o, 0.15, t, 0)
          : b(
              "nbox",
              a,
              x,
              o + u * 0.3,
              0.15,
              t,
              u > 0 ? Math.PI / 2 : -Math.PI / 2,
            ));
    }
  for (const [i, [t, u, o]] of y) {
    const l = t || r[+i.split("|")[0].slice(4)],
      f = new Mt(l, u, o.length);
    (o.forEach((z, A) => f.setMatrixAt(A, z)),
      (f.instanceMatrix.needsUpdate = !0),
      f.computeBoundingSphere(),
      (f.name = "city3_furn_" + i),
      w.add(f));
  }
  return { group: w, points: g, solids: M };
}
function Ko(m, e) {
  const d = Math.max(m[0] - e[0], 0, e[0] - m[3]),
    n = Math.max(m[1] - e[1], 0, e[1] - m[4]),
    h = Math.max(m[2] - e[2], 0, e[2] - m[5]);
  return d === 0 && n === 0 && h === 0
    ? -Math.min(
        e[0] - m[0],
        m[3] - e[0],
        e[1] - m[1],
        m[4] - e[1],
        e[2] - m[2],
        m[5] - e[2],
      )
    : Math.hypot(d, n, h);
}
function Vo(m, e, d, n) {
  const h = e[0] - m[0],
    c = e[1] - m[1],
    w = e[2] - m[2],
    s = h * h + c * c + w * w || 1e-9;
  let x = ((n[0] - m[0]) * h + (n[1] - m[1]) * c + (n[2] - m[2]) * w) / s;
  return (
    (x = x < 0 ? 0 : x > 1 ? 1 : x),
    Math.hypot(n[0] - m[0] - h * x, n[1] - m[1] - c * x, n[2] - m[2] - w * x) -
      d
  );
}
