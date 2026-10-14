// assets/bedroom-Se-_w21f 14 — math
// Lines 3278-3675 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
function buildDollHeads(N, t, w, e, o, M, s = !1) {
  const h = new u0();
  h.name = "doll" + M;
  const i = new M0("doll" + M),
    z = t[w.dress],
    D = t[w.trim],
    C = t.porcelain,
    V =
      w.hair === "blonde"
        ? t.hairBlonde
        : w.hair === "auburn"
          ? t.hairAuburn
          : t.hairDark,
    x = E(
      [
        [0, 0.1],
        [0.034, 0.1],
        [0.04, 0.09],
        [0.055, 0.065],
        [0.075, 0.04],
        [0.092, 0.018],
        [0.1, 0.006],
        [0.103, 0],
      ],
      0,
      0,
      0,
      { segs: 64, tile: 0.5 },
    );
  {
    const c = x.attributes.position;
    for (let g = 0; g < c.count; g++) {
      let b = c.getX(g),
        p = c.getY(g),
        v = c.getZ(g);
      const I = Math.atan2(v, b),
        Z = 1 - p / 0.1,
        j =
          1 +
          0.07 * Z * Z * Math.sin(I * 17 + M) +
          0.03 * Z * e.n2(I * 3 + M, p * 20);
      ((b *= j),
        (v *= j),
        v > 0 && ((v *= 1 + 0.9 * Z), (p += 0.012 * Z * (v / 0.12))),
        c.setXYZ(g, b, Math.max(p, 0.002), v));
    }
    x.computeVertexNormals();
  }
  i.add(x, z);
  const k = E(
    [
      [0.098, 0.012],
      [0.106, 0.004],
      [0.108, 0],
    ],
    0,
    0,
    0,
    { segs: 64 },
  );
  {
    const c = k.attributes.position;
    for (let g = 0; g < c.count; g++) {
      const b = c.getX(g),
        p = c.getZ(g),
        v = Math.atan2(p, b),
        I = 1 + 0.08 * Math.sin(v * 34);
      c.setXYZ(g, b * I * (p > 0, 1), c.getY(g), p * I * (p > 0 ? 1.9 : 1));
    }
    k.computeVertexNormals();
  }
  i.add(k, D);
  const _ = E(
    [
      [0, 0.09],
      [0.033, 0.09],
      [0.036, 0.12],
      [0.04, 0.16],
      [0.042, 0.19],
      [0.03, 0.205],
      [0.012, 0.21],
      [0, 0.21],
    ],
    0,
    0,
    0,
    { segs: 28, scale: [1, 1, 0.78] },
  );
  (i.add(_, z),
    i.add(
      E(
        [
          [0.036, 0.105],
          [0.039, 0.108],
          [0.039, 0.122],
          [0.036, 0.125],
        ],
        0,
        0,
        0,
        { segs: 28, scale: [1, 1, 0.8] },
      ),
      D,
    ));
  const y = E(
    [
      [0.012, 0.212],
      [0.03, 0.207],
      [0.05, 0.197],
      [0.053, 0.192],
    ],
    0,
    0,
    0,
    { segs: 48 },
  );
  {
    const c = y.attributes.position;
    for (let g = 0; g < c.count; g++) {
      const b = c.getX(g),
        p = c.getZ(g),
        v = Math.atan2(p, b),
        I = Math.hypot(b, p),
        Z = 1 + 0.12 * Math.max(0, Math.sin(v * 12)) * g0(0.02, 0.05, I);
      c.setXYZ(
        g,
        b * Z,
        c.getY(g) - 0.004 * Math.sin(v * 12) * g0(0.03, 0.05, I),
        p * Z * 0.85,
      );
    }
    y.computeVertexNormals();
  }
  (i.add(y, D),
    i.add(
      E(
        [
          [0, 0.2],
          [0.013, 0.2],
          [0.012, 0.23],
          [0, 0.232],
        ],
        0,
        0,
        0,
        { segs: 16 },
      ),
      C,
    ));
  for (const c of [-1, 1])
    (i.add(J0(c * 0.045, 0.18, 0, 0.024, 16, 12, [0.9, 1.1, 0.9]), z),
      i.add(
        h0(
          [
            [c * 0.05, 0.175, 0],
            [c * 0.058, 0.13, 0.012],
            [c * 0.05, 0.1, 0.04],
            [c * 0.035, 0.085, 0.075],
          ],
          0.011,
          12,
          8,
        ),
        z,
      ),
      i.add(J0(c * 0.03, 0.08, 0.088, 0.011, 12, 10, [0.8, 0.55, 1.2]), C),
      i.add(
        E(
          [
            [0.0125, -0.004],
            [0.017, 0],
            [0.0125, 0.004],
          ],
          0,
          0,
          0,
          { segs: 16, rot: [1.2, 0, c * 0.3] },
        ).translate(c * 0.036, 0.087, 0.07),
        D,
      ));
  for (const c of [-1, 1]) {
    const g = c * 0.028,
      b = 0.14,
      p = 0.012,
      v = c * 0.006;
    i.add(
      h0(
        [
          [g, p + 0.012, b - 0.06],
          [g, p + 0.01, b - 0.012],
          [g + v * 0.5, p - 0.012, b + 0.01],
          [g + v, p - 0.05, b + 0.016],
          [g + v, p - 0.072, b + 0.014],
        ],
        0.0135,
        16,
        8,
      ),
      t.stocking,
    );
    const I = R(-0.0145, -0.012, -0.018, 0.0145, 0.012, 0.03, 0.01, "z");
    (I.translate(g + v, p - 0.083, b + 0.024), i.add(I, t.shoe));
  }
  i.flush(h);
  const L = new u0();
  ((L.name = "doll" + M + ":head"), L.position.set(0, 0.228, 0));
  const W = new M0("dollhead" + M),
    X = 0.052,
    F = new $0(X, 48, 32);
  F.scale(0.94, 1.04, 0.98);
  {
    const c = F.attributes.uv,
      [g, b] = w.q;
    for (let p = 0; p < c.count; p++)
      c.setXY(p, c.getX(p) * 0.5 + g * 0.5, c.getY(p) * 0.5 + b * 0.5);
  }
  (F.translate(0, X * 0.96, 0.004), W.add(F, t.dollFace));
  const G = (c) => {
      const g = new $0(0.0082, 28, 18),
        b = g.attributes.position,
        p = new Float32Array(b.count * 3);
      for (let v = 0; v < b.count; v++) {
        const I = b.getZ(v) / 0.0082,
          Z = Math.acos(Pt(I, -1, 1));
        let j;
        if (Z < 0.3) j = [0.008, 0.007, 0.008];
        else if (Z < 0.82) {
          const d =
            0.35 +
            ((Z - 0.3) / 0.52) * 0.5 +
            0.15 * Math.sin(Math.atan2(b.getY(v), b.getX(v)) * 14);
          j = [c[0] * d * 0.42, c[1] * d * 0.42, c[2] * d * 0.42];
        } else Z < 0.9 ? (j = [0.03, 0.025, 0.025]) : (j = [0.5, 0.46, 0.4]);
        ((p[v * 3] = j[0]), (p[v * 3 + 1] = j[1]), (p[v * 3 + 2] = j[2]));
      }
      return (g.setAttribute("color", new R0(p, 3)), g);
    },
    m = [];
  for (const c of [-1, 1]) {
    const g = c * 0.36,
      b = 0.47 * Math.PI,
      p = Math.sin(g) * Math.sin(b) * X * 0.94 * 0.9,
      v = Math.cos(b) * X * 1.04 * 0.9 + X * 0.96,
      I = Math.cos(g) * Math.sin(b) * X * 0.98 * 0.9 + 0.004,
      Z = G(w.iris);
    (Z.rotateY(g * 0.6), Z.translate(p, v, I), m.push(Z));
    const j = new $0(0.0088, 24, 10, 0, Math.PI * 2, 0, 1.12);
    (j.rotateX(-0.06),
      j.rotateY(g * 0.6),
      j.translate(p, v, I),
      W.add(j, t.porcelain));
  }
  const S = new $0(X * 1.07, 40, 24, 0, Math.PI * 2, 0, Math.PI * 0.62);
  {
    const c = S.attributes.position;
    for (let g = 0; g < c.count; g++) {
      const b = c.getX(g),
        p = c.getY(g),
        v = c.getZ(g),
        I = g0(0.2, 0.9, v / (X * 1.07)),
        Z =
          1 +
          0.04 * e.n2(b * 90 + M, p * 90) +
          0.03 * Math.sin(Math.atan2(v, b) * 20 + p * 60);
      c.setXYZ(
        g,
        b * Z,
        p + I * (w.style === "bob" ? 0.006 : 0.016) * g0(-0.2, 0.4, p / X),
        v * Z * (1 - 0.08 * I),
      );
    }
    (S.computeVertexNormals(),
      S.scale(0.95, 1.05, 0.99),
      S.translate(0, X * 0.96 + 0.004, -0.002));
  }
  if ((W.add(S, V), w.style === "ringlets" || w.style === "curls")) {
    const c = w.style === "ringlets" ? 9 : 14;
    for (let g = 0; g < c; g++) {
      const b = Math.PI * (0.25 + 1.5 * (g / (c - 1))),
        p = Math.sin(b) * X * 0.95,
        v = -Math.cos(b) * X * 0.9;
      if (v > X * 0.5) continue;
      const I = w.style === "ringlets" ? 0.07 + o() * 0.03 : 0.035 + o() * 0.02,
        Z = [];
      for (let j = 0; j <= 18; j++) {
        const T = j / 18,
          d = T * Math.PI * 2 * (w.style === "ringlets" ? 3 : 2);
        Z.push([
          p + Math.cos(d) * 0.007,
          X * 0.96 + 0.015 - T * I,
          v + Math.sin(d) * 0.007,
        ]);
      }
      W.add(h0(Z, 0.0048, 40, 6), V);
    }
  } else if (w.style === "bob") {
    const c = new xe(
      [
        [X * 1.03, 0.012],
        [X * 1.1, -0.02],
        [X * 1.1, -0.045],
        [X * 1.02, -0.058],
        [X * 0.86, -0.06],
      ].map(([b, p]) => new ue(b, p)),
      36,
      0.95,
      Math.PI * 2 - 1.9,
    );
    c.translate(0, X * 0.96 + 0.01, -0.004);
    {
      const b = c.attributes.position;
      for (let p = 0; p < b.count; p++) {
        const v = b.getX(p),
          I = b.getY(p),
          Z = b.getZ(p),
          j = 1 + 0.03 * Math.sin(Math.atan2(Z, v) * 30);
        b.setXYZ(p, v * j, I, Z * j);
      }
      c.computeVertexNormals();
    }
    W.add(c, V);
    const g = new $0(
      X * 1.08,
      24,
      8,
      Math.PI * 0.3,
      Math.PI * 0.4,
      Math.PI * 0.2,
      Math.PI * 0.22,
    );
    (g.translate(0, X * 0.96 + 0.004, 0), W.add(g, V));
  } else if (w.style === "bonnet") {
    const c = new $0(
      X * 1.2,
      40,
      20,
      Math.PI * 0.55,
      Math.PI * 1.9,
      0,
      Math.PI * 0.58,
    );
    (c.rotateX(-0.25),
      c.translate(0, X * 0.96 + 0.006, -0.006),
      W.add(c, t.dressBlack));
    const g = E(
      [
        [X * 1.18, 0],
        [X * 1.28, 0.004],
        [X * 1.3, 0.01],
        [X * 1.18, 0.012],
      ],
      0,
      0,
      0,
      { segs: 40, rot: [1.2, 0, 0] },
    );
    {
      const b = g.attributes.position;
      for (let p = 0; p < b.count; p++) {
        const v = 1 + 0.06 * Math.sin(Math.atan2(b.getZ(p), b.getX(p)) * 24);
        b.setXYZ(p, b.getX(p) * v, b.getY(p), b.getZ(p) * v);
      }
    }
    (g.translate(0, X * 0.96 + 0.018, 0.012),
      g.computeVertexNormals(),
      W.add(g, t.dressIvory));
    for (const b of [-1, 1])
      W.add(
        h0(
          [
            [b * X * 0.9, X * 0.7, 0.01],
            [b * X * 0.7, X * 0.1, 0.03],
            [b * 0.01, -0.005, 0.04],
          ],
          0.003,
          12,
          5,
        ),
        t.dressBlack,
      );
  }
  W.flush(L);
  const u = new r0(Le(m), t.dollEye);
  return (
    (u.name = "doll" + M + ":eyes"),
    (u.castShadow = !1),
    (u.receiveShadow = !0),
    L.add(u),
    h.add(L),
    {
      body: h,
      head: L,
      index: M,
      yawLim: s ? 0.9 : 1.55,
      tilt: s ? 0 : (o() - 0.5) * 0.22,
    }
  );
}
