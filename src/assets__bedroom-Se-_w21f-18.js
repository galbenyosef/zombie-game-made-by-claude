// assets__bedroom-Se-_w21f 18 — add
// Lines 4193-4871 of readable/assets__bedroom-Se-_w21f.pretty.js (statement-aligned).
async function je(N, t, { candles: w = null } = {}) {
  const e = new u0();
  e.name = "dressing";
  const o = new M0("dressing"),
    M = nt(57),
    s = N.rng(2024),
    h = [],
    i = new u0();
  i.name = "painting";
  {
    const A = new M0("painting"),
      x = 0.82,
      k = 0.11,
      _ = x / 2,
      y = [
        [0, 0],
        [k, 0],
        [k, 0.034],
        [k - 0.004, 0.044],
        [k - 0.014, 0.05],
        [k - 0.03, 0.066],
        [k - 0.045, 0.07],
        [k - 0.06, 0.061],
        [k - 0.07, 0.047],
        [k - 0.082, 0.041],
        [k - 0.09, 0.046],
        [k - 0.097, 0.043],
        [k - 0.102, 0.031],
        [k - 0.106, 0.021],
        [0, 0.018],
      ],
      L = (G, m, S) =>
        A.add(
          Q0(y, G, m, S, [0, 0, 1], { mitreA: 1, mitreB: 1, crease: 0.9 }),
          t.gilt,
        );
    (L([-_, _, 0], [_, _, 0], [0, 1, 0]),
      L([_, -_, 0], [-_, -_, 0], [0, -1, 0]),
      L([-_, -_, 0], [-_, _, 0], [-1, 0, 0]),
      L([_, _, 0], [_, -_, 0], [1, 0, 0]),
      A.add(
        R(-_ - 0.02, -_ - 0.02, -0.004, _ + 0.02, _ + 0.02, 0.004, 0.002, "x"),
        t.walnut,
      ));
    const W = new ut(x + 0.004, x + 0.004, 1, 1);
    W.translate(0, 0, 0.012);
    const X = new r0(W, t.canvas);
    ((X.name = "painting:canvas"),
      (X.receiveShadow = !0),
      A.add(
        h0(
          [
            [-_ + 0.05, _ - 0.1, -0.012],
            [0, _ + 0.14, -0.035],
            [_ - 0.05, _ - 0.1, -0.012],
          ],
          0.0012,
          16,
          4,
        ),
        t.chrome,
        { cast: !1 },
      ),
      A.flush(i),
      i.add(X),
      i.position.set(5.2 - 0.031, 1.7, 2),
      i.rotation.set(0.045, -Math.PI / 2, 0.012, "YXZ"),
      i.traverse((G) => {
        G.isMesh && ((G.castShadow = !0), (G.receiveShadow = !0));
      }),
      e.add(i),
      o.add(v0([5.2, 2.29, 2], [5.185, 2.295, 2], 0.0025, 6), t.iron),
      o.add(
        E(
          [
            [0, 0],
            [0.028, 0],
            [0.028, 0.008],
            [0.02, 0.012],
            [0, 0.013],
          ],
          5.2,
          2.36,
          2,
          { segs: 20, rot: [0, 0, Math.PI / 2] },
        ),
        t.brass,
      ),
      o.add(
        h0(
          [
            [5.19, 2.36, 2],
            [5.13, 2.38, 2],
            [5.08, 2.34, 2],
          ],
          0.006,
          16,
          8,
        ),
        t.brass,
      ));
    const F = new Vt(
      0.03,
      0.03,
      0.42,
      20,
      1,
      !1,
      Math.PI * 0.1,
      Math.PI * 1.25,
    );
    (F.rotateX(Math.PI / 2),
      F.rotateZ(-0.6),
      F.translate(5.07, 2.33, 2),
      o.add(F, t.brass));
    for (const G of [-1, 1])
      o.add(
        E(
          [
            [0, 0],
            [0.03, 0],
            [0.03, 0.004],
            [0, 0.004],
          ],
          5.07,
          2.33,
          2 + G * 0.21,
          { segs: 20, rot: [Math.PI / 2, 0, 0] },
        ),
        t.brass,
      );
    o.add(v0([5.07, 2.32, 1.81], [5.07, 2.32, 2.19], 0.009, 12), t.bulbDead);
  }
  const z = new u0();
  z.name = "rug";
  {
    const y = (b, p) =>
        0.016 *
        Math.exp(-Math.pow((b - 2.98) / 0.07, 2)) *
        g0(2.7, 3.1, p) *
        (1 - g0(3.45, 3.7, p)),
      L = (b, p) =>
        0.003 * (1 - g0(0, 0.06, Math.min(b - 0.5, 3.4 - b, p - 1.2, 3.7 - p))),
      X = Bt({
        x0: 0.5,
        x1: 3.4,
        z0: 1.2,
        z1: 3.7,
        top: (b, p) => 0.011 + y(b, p) + L(b, p) + 0.0012 * M.n2(b * 6, p * 6),
        hang: { w: 0.011, e: 0.011, n: 0.011, s: 0.011 },
        r: 0.005,
        res: 0.03,
        floor: 5e-4,
      });
    {
      const b = X.attributes.position,
        p = X.attributes.uv;
      for (let v = 0; v < b.count; v++)
        p.setXY(
          v,
          (b.getX(v) - 0.5) / (3.4 - 0.5),
          (b.getZ(v) - 1.2) / (3.7 - 1.2),
        );
      p.needsUpdate = !0;
    }
    const F = w ? w.poolMaterial(t.rug) : t.rug,
      G = new r0(X, F);
    ((G.name = "rug:body"),
      (G.receiveShadow = !0),
      (G.castShadow = !1),
      z.add(G));
    const m = [],
      S = [];
    for (const [b, p] of [
      [0.5, -1],
      [3.4, 1],
    ])
      for (let v = 1.2 + 0.02; v < 3.7 - 0.02; v += 0.011) {
        const I = 0.05 + s() * 0.025,
          Z = (s() - 0.5) * 0.35,
          j = 0.004,
          T = b + p * 0.004,
          d = b + p * (0.004 + Math.cos(Z) * I),
          K = v + Math.sin(Z) * I,
          f = m.length / 3,
          U = 0.0015 + s() * 0.002;
        (m.push(
          T,
          0.006,
          v - j / 2,
          T,
          0.006,
          v + j / 2,
          d,
          U,
          K + (j / 2) * 0.6,
          d,
          U,
          K - (j / 2) * 0.6,
        ),
          S.push(f, f + 1, f + 2, f, f + 2, f + 3));
      }
    const u = new ot();
    (u.setAttribute("position", new T0(m, 3)),
      u.setIndex(S),
      u.computeVertexNormals());
    const c = u.attributes.normal;
    for (let b = 0; b < c.count; b++) c.setXYZ(b, 0, 1, 0);
    Gt(u, "xz", 1);
    const g = new r0(u, w ? w.poolMaterial(t.fringe) : t.fringe);
    ((g.name = "rug:fringe"), (g.receiveShadow = !0), z.add(g), e.add(z));
  }
  const D = new u0();
  D.name = "chair";
  {
    const A = new M0("chair"),
      x = t.walnut,
      k = 0.53,
      _ = 0.93,
      y = 0.11,
      L = 0.5,
      W = 0.455;
    A.add(
      R(k + 0.01, W - 0.07, y + 0.02, _ - 0.01, W - 0.02, L - 0.01, 0.006, "x"),
      x,
    );
    const X = new $0(1, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    {
      const u = X.attributes.position;
      for (let c = 0; c < u.count; c++) {
        const g = u.getX(c),
          b = u.getY(c),
          p = u.getZ(c),
          v = Math.sign(g) * Math.pow(Math.abs(g), 0.35),
          I = Math.sign(p) * Math.pow(Math.abs(p), 0.35);
        u.setXYZ(c, v * 0.205, b * 0.045, I * 0.2);
      }
      X.computeVertexNormals();
    }
    (X.translate((k + _) / 2, W - 0.025, (y + L) / 2 + 0.01),
      Gt(X, "xz", 1),
      A.add(X, t.upholstery));
    for (const u of [k + 0.025, _ - 0.025]) {
      A.add(
        E(
          [
            [0, 0],
            [0.014, 0],
            [0.016, 0.02],
            [0.013, 0.05],
            [0.016, 0.16],
            [0.021, 0.2],
            [0.016, 0.24],
            [0.015, 0.34],
            [0.02, 0.37],
            [0.02, W - 0.02],
            [0, W - 0.02],
          ],
          u,
          0,
          L - 0.03,
          { segs: 16, tile: 0.8 },
        ),
        x,
      );
      const c = [
        [u, 0, y + 0.03],
        [u, W, y + 0.025],
        [u, 0.72, y + 0.005],
        [u, 0.95, y - 0.012],
      ];
      for (let g = 0; g < 3; g++) A.add(re(c[g], c[g + 1], 0.032, 0.03), x);
      A.add(
        E(
          [
            [0, 0],
            [0.014, 0],
            [0.016, 0.012],
            [0.008, 0.026],
            [0, 0.03],
          ],
          u,
          0.95,
          y - 0.012,
          { segs: 12 },
        ),
        x,
      );
    }
    const F = [];
    for (let u = 0; u <= 12; u++) {
      const c = u / 12;
      F.push([
        k + 0.02 + c * (_ - k - 0.04),
        0.905 + 0.035 * Math.sin(Math.PI * c),
        y - 0.009 + 0.012 * Math.sin(Math.PI * c) * 0,
      ]);
    }
    for (let u = 0; u < 12; u++)
      A.add(re(F[u], F[u + 1], 0.026, 0.06 - (0.02 * Math.abs(u - 6)) / 6), x);
    A.add(
      R(k + 0.03, 0.6, y - 0.006, _ - 0.03, 0.63, y + 0.018, 0.005, "x"),
      x,
    );
    {
      const u = new jt();
      (u.moveTo(-0.05, 0),
        u.bezierCurveTo(-0.05, 0.08, -0.09, 0.13, -0.06, 0.2),
        u.bezierCurveTo(-0.03, 0.25, -0.07, 0.3, -0.07, 0.33),
        u.lineTo(0.07, 0.33),
        u.bezierCurveTo(0.07, 0.3, 0.03, 0.25, 0.06, 0.2),
        u.bezierCurveTo(0.09, 0.13, 0.05, 0.08, 0.05, 0));
      const c = new ve();
      (c.absellipse(0, 0.19, 0.022, 0.05, 0, Math.PI * 2, !1, 0),
        u.holes.push(c));
      const g = new Et(u, {
        depth: 0.016,
        bevelEnabled: !0,
        bevelThickness: 0.003,
        bevelSize: 0.003,
        bevelSegments: 1,
        curveSegments: 16,
      });
      (g.rotateX(-0.08),
        g.translate((k + _) / 2, 0.595, y - 0.008),
        g.computeVertexNormals(),
        A.add(g, x));
    }
    for (const u of [k + 0.025, _ - 0.025])
      A.add(
        R(u - 0.009, 0.14, y + 0.03, u + 0.009, 0.16, L - 0.03, 0.004, "z"),
        x,
      );
    (A.add(
      R(
        k + 0.025,
        0.2,
        (y + L) / 2 - 0.009,
        _ - 0.025,
        0.218,
        (y + L) / 2 + 0.009,
        0.004,
        "x",
      ),
      x,
    ),
      A.flush(D));
    const G = Bt({
        x0: k + 0.03,
        x1: _ - 0.03,
        z0: y - 0.03,
        z1: y + 0.008,
        top: (u, c) =>
          0.945 +
          0.025 * Math.sin((Math.PI * (u - k)) / (_ - k)) +
          0.004 * M.n2(u * 20, c * 20),
        hang: { s: 0.4, n: 0.26, w: 0.05, e: 0.05 },
        r: 0.018,
        res: 0.012,
        floor: W + 0.03,
        fold: (u, c, g) =>
          u === "s" || u === "n"
            ? (0.006 + 0.028 * g0(0, 0.3, g)) *
              Math.sin(c * 38 + (u === "s" ? 0 : 2) + M.n2(c * 8, g * 4) * 2)
            : 0.01 * g0(0, 0.1, g),
        hem: (u, c) => (u === "s" ? 0.85 + 0.15 * Math.sin(c * 13) : 1),
      }),
      m = new r0(G, t.cardigan);
    ((m.name = "chair:cardigan"),
      (m.castShadow = !0),
      (m.receiveShadow = !0),
      D.add(m));
    const S = new M0("cardigan");
    for (const u of [-1, 1]) {
      const c = u < 0 ? k + 0.035 : _ - 0.035,
        g = [
          [c, 0.955, y + 0],
          [c - u * 0.02, 0.92, y + 0.03],
          [c + u * 0.01, 0.8, y + 0.055],
          [c + u * 0.02, 0.66, y + 0.07],
          [c + u * 0.015, 0.53, y + 0.1],
        ],
        b = h0(g, 0.03, 24, 10),
        p = b.attributes.position;
      for (let v = 0; v < p.count; v++) {
        const I = p.getY(v);
        (p.setX(v, c + (p.getX(v) - c) * 0.55 + 0.004 * Math.sin(I * 70)),
          p.setZ(v, p.getZ(v) + 0.003 * Math.sin(I * 55 + u)));
      }
      (b.computeVertexNormals(),
        S.add(b, t.cardigan),
        S.add(
          E(
            [
              [0, 0],
              [0.024, 0],
              [0.026, 0.02],
              [0, 0.021],
            ],
            g[4][0],
            g[4][1] - 0.02,
            g[4][2],
            { segs: 12 },
          ),
          t.cardigan,
        ));
    }
    for (let u = 0; u < 5; u++)
      S.add(
        E(
          [
            [0, 0],
            [0.007, 0],
            [0.007, 0.003],
            [0, 0.004],
          ],
          k + 0.07,
          0.9 - u * 0.075,
          y + 0.035,
          { segs: 10, rot: [Math.PI / 2, 0, 0] },
        ),
        t.horn,
      );
    (S.flush(D),
      e.add(D),
      h.push({
        x0: k - 0.01,
        x1: _ + 0.01,
        z0: 0.03,
        z1: L + 0.01,
        y0: 0,
        y1: 1,
      }));
  }
  const C = new u0();
  C.name = "pendant";
  {
    const A = new M0("pendant"),
      x = 2.6,
      k = 2.4,
      _ = 3,
      y = 2.36;
    A.add(
      E(
        [
          [0, 0],
          [0.085, 0],
          [0.084, -0.008],
          [0.07, -0.018],
          [0.045, -0.026],
          [0.02, -0.03],
          [0.012, -0.045],
          [0, -0.046],
        ],
        x,
        _ - 0.001,
        k,
        { segs: 32 },
      ),
      t.trim,
    );
    for (const G of [0, Math.PI]) {
      const m = [];
      for (let S = 0; S <= 60; S++) {
        const u = S / 60,
          c = _ - 0.045 - u * (_ - 0.045 - y - 0.06),
          g = u * 34 + G;
        m.push([
          x + Math.cos(g) * 0.0028 + 0.004 * Math.sin(u * 3),
          c,
          k + Math.sin(g) * 0.0028,
        ]);
      }
      A.add(h0(m, 0.0026, 180, 5), t.cord);
    }
    (A.add(
      E(
        [
          [0, 0],
          [0.018, 0],
          [0.019, 0.01],
          [0.016, 0.04],
          [0.012, 0.055],
          [0.006, 0.06],
          [0, 0.06],
        ],
        x,
        y,
        k,
        { segs: 20 },
      ),
      t.bakelite,
    ),
      A.flush(C));
    const L = E(
        [
          [0, 0],
          [0.016, 0.004],
          [0.027, 0.024],
          [0.03, 0.045],
          [0.022, 0.07],
          [0.014, 0.08],
          [0.0135, 0.09],
          [0, 0.09],
        ],
        x,
        y - 0.09,
        k,
        { segs: 24 },
      ),
      W = new r0(L, t.bulbGlass);
    ((W.name = "pendant:glass"), (W.renderOrder = 3), C.add(W));
    const X = h0(
        [
          [x - 0.008, y - 0.012, k],
          [x - 0.006, y - 0.042, k],
          [x, y - 0.048, k + 0.002],
          [x + 0.006, y - 0.042, k],
          [x + 0.008, y - 0.012, k],
        ],
        7e-4,
        20,
        4,
      ),
      F = new r0(X, t.bulbDead);
    ((F.name = "pendant:filament"), C.add(F), e.add(C));
  }
  {
    (o.add(
      E(
        [
          [0, 0],
          [0.045, 0],
          [0.045, 0.006],
          [0.03, 0.014],
          [0.012, 0.018],
          [0, 0.019],
        ],
        2.1,
        1.72,
        4.8,
        { segs: 24, rot: [-Math.PI / 2, 0, 0] },
      ),
      t.brass,
    ),
      o.add(
        h0(
          [
            [2.1, 1.72, 4.8 - 0.015],
            [2.1, 1.72 - 0.02, 4.8 - 0.07],
            [2.1, 1.72 + 0.02, 4.8 - 0.13],
            [2.1, 1.72 + 0.08, 4.8 - 0.14],
          ],
          0.006,
          24,
          8,
        ),
        t.brass,
      ),
      o.add(
        E(
          [
            [0, 0],
            [0.02, 0],
            [0.024, 0.012],
            [0.016, 0.03],
            [0.013, 0.05],
            [0, 0.05],
          ],
          2.1,
          1.72 + 0.075,
          4.8 - 0.14,
          { segs: 16 },
        ),
        t.brass,
      ));
    const _ = E(
        [
          [0.02, 0],
          [0.028, 0.01],
          [0.05, 0.05],
          [0.065, 0.09],
          [0.07, 0.1],
          [0.068, 0.104],
        ],
        0,
        0,
        0,
        { segs: 28 },
      ),
      y = _.attributes.position,
      L = _.index.array,
      W = [];
    for (let F = 0; F < L.length; F += 3) {
      let G = 0;
      for (let m = 0; m < 3; m++) {
        const S = y.getX(L[F + m]),
          u = y.getZ(L[F + m]),
          c = y.getY(L[F + m]),
          g = Math.atan2(u, S);
        g > 0.3 && g < 0.9 && c > 0.05 + (g - 0.3) * 0.05 && G++;
      }
      G < 2 && W.push(L[F], L[F + 1], L[F + 2]);
    }
    (_.setIndex(W), _.translate(2.1, 1.72 + 0.105, 4.8 - 0.14));
    const X = new r0(_, t.frosted);
    ((X.name = "sconce:shade"), (X.renderOrder = 3), e.add(X));
  }
  {
    const L = new ut(1.04, 0.96);
    (L.rotateY(Math.PI),
      L.translate((2.56 + 3.6) / 2, (1.42 + 2.38) / 2, 4.7988));
    const W = new r0(L, t.palePatch);
    ((W.name = "palePatch"),
      (W.receiveShadow = !0),
      (W.renderOrder = 1),
      e.add(W));
    const X = (F, G, m, S, u) => {
      const c = new ut(Math.abs(m - F) || u, Math.abs(S - G) || u);
      (c.rotateY(Math.PI),
        c.translate((F + m) / 2, (G + S) / 2, 4.7988 - 4e-4));
      const g = new r0(c, t.grimeLine);
      ((g.renderOrder = 2), (g.receiveShadow = !0), e.add(g));
    };
    (X(2.56, 2.38, 3.6, 2.38, 0.012),
      X(2.56, 1.42, 2.56, 2.38, 0.006),
      X(3.6, 1.42, 3.6, 2.38, 0.006),
      o.add(
        v0(
          [(2.56 + 3.6) / 2, 2.38 + 0.05, 4.8],
          [(2.56 + 3.6) / 2, 2.38 + 0.055, 4.785],
          0.003,
          6,
        ),
        t.brass,
      ),
      o.add(J0((2.56 + 3.6) / 2, 2.38 + 0.055, 4.784, 0.005, 8, 6), t.brass));
  }
  if (t.soot) {
    const A = new ut(3.62, 3.8);
    (A.rotateX(Math.PI / 2), A.translate(0.08 + 1.81, 3 - 0.0015, 0.5 + 1.9));
    const x = new r0(A, t.soot);
    ((x.name = "ceilingSoot"), (x.renderOrder = 1), e.add(x));
  }
  if (t.cobweb) {
    const A = new ot(),
      x = [
        [0.075, 2.83, 0.52],
        [0.52, 2.83, 0.075],
        [0.09, 2.28, 0.09],
        [0.075, 2.83, 0.075],
      ];
    (A.setAttribute(
      "position",
      new T0([...x[0], ...x[1], ...x[2], ...x[3]], 3),
    ),
      A.setAttribute("uv", new T0([0, 1, 1, 1, 0.5, 0, 0.5, 0.99], 2)),
      A.setIndex([0, 2, 1, 0, 3, 1]),
      A.computeVertexNormals());
    const k = new r0(A, t.cobweb);
    ((k.name = "cobweb"), (k.renderOrder = 4), e.add(k));
  }
  let V = null;
  if (t.tally) {
    const y = new ut(3.6, 1.7999999999999998);
    (y.rotateY(Math.PI / 2),
      y.translate(0.0012, (0.58 + 2.38) / 2, (0.6 + 4.2) / 2),
      (V = new r0(y, t.tally)),
      (V.name = "tallyWall"),
      (V.receiveShadow = !0),
      (V.renderOrder = 1),
      e.add(V));
  }
  return (
    o.flush(e),
    N.scene.add(e),
    { group: e, colliders: h, painting: i, chair: D, rug: z, bulb: C, tally: V }
  );
}
