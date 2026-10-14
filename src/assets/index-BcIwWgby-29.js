// assets/index-BcIwWgby 29 — math
// Lines 8572-8920 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function Nr(s, o, t = Math.random) {
  const u = new Kt();
  ((u.name = "church_barricade"), s.add(u));
  const e = pt.z1 - 0.02,
    r = (Qt.x0 + Qt.x1) / 2,
    a = [],
    p = [],
    i = (z, x, v) => {
      const n = new bt(z, x);
      return (
        (n.name = v),
        (n.castShadow = !0),
        (n.receiveShadow = !0),
        (n.matrixAutoUpdate = !1),
        n
      );
    },
    d = () => {
      const z = { x0: 0, x1: 0, z0: 0, z1: 0, y0: 0, y1: 1.2, on: !0 };
      return (a.push(z), z);
    },
    y = (z, x, v, n, l = {}) => {
      const f = l.noCollider ? null : d(),
        h = {
          name: z,
          obj: x,
          keys: v,
          foot: n,
          col: f,
          u: -1,
          hold: l.hold,
          stand: l.stand,
          kind: l.kind,
        },
        c = new me(),
        M = new Ro(),
        m = new me(1, 1, 1),
        k = new me();
      return (
        (h.set = (S) => {
          if (((S = Math.max(0, Math.min(1, S))), S === h.u)) return;
          h.u = S;
          let A = v[0],
            b = v[v.length - 1];
          for (let I = 0; I < v.length - 1; I++)
            if (S >= v[I].u && S <= v[I + 1].u) {
              ((A = v[I]), (b = v[I + 1]));
              break;
            }
          const P = b.u > A.u ? (S - A.u) / (b.u - A.u) : 1,
            _ = b.ease ? b.ease(P) : P * P * (3 - 2 * P);
          if (
            (c.set(
              A.p[0] + (b.p[0] - A.p[0]) * _,
              A.p[1] + (b.p[1] - A.p[1]) * _,
              A.p[2] + (b.p[2] - A.p[2]) * _,
            ),
            M.slerpQuaternions(A.q, b.q, _),
            x.matrix.compose(c, M, m),
            (x.matrixWorldNeedsUpdate = !0),
            f)
          ) {
            let I = 1e9,
              R = -1e9,
              V = 1e9,
              L = -1e9;
            for (const K of n)
              (k.set(K[0], K[1], K[2]).applyMatrix4(x.matrix),
                (I = Math.min(I, k.x)),
                (R = Math.max(R, k.x)),
                (V = Math.min(V, k.z)),
                (L = Math.max(L, k.z)));
            ((f.x0 = I), (f.x1 = R), (f.z0 = V), (f.z1 = L));
          }
        }),
        (h.at = (S, A = new me()) =>
          A.set(S[0], S[1], S[2]).applyMatrix4(x.matrix)),
        p.push(h),
        u.add(x),
        h
      );
    },
    w = (z, x, v) => new Ro().setFromEuler(new pe(z, x, v, "YXZ"));
  {
    const n = [],
      l = [];
    (n.push(
      Mt(-1.1 / 2, 0.04, -0.55 / 2, 1.1 / 2, 0.62 - 0.07, 0.55 / 2, 0.01, "x"),
    ),
      n.push(
        Mt(
          -1.1 / 2 - 0.012,
          0.62 - 0.09,
          -0.55 / 2 - 0.012,
          1.1 / 2 + 0.012,
          0.62,
          0.55 / 2 + 0.012,
          0.012,
          "x",
        ),
      ));
    for (const c of [-1.1 / 2 + 0.08, 1.1 / 2 - 0.08])
      n.push(
        Mt(
          c - 0.05,
          0,
          -0.55 / 2 + 0.02,
          c + 0.05,
          0.05,
          0.55 / 2 - 0.02,
          0.006,
          "z",
        ),
      );
    for (const c of [-1.1 / 2 + 0.2, 0, 1.1 / 2 - 0.2])
      l.push(
        Mt(
          c - 0.025,
          0.035,
          -0.55 / 2 - 0.016,
          c + 0.025,
          0.62 + 0.004,
          0.55 / 2 + 0.016,
          0.003,
          "y",
        ),
      );
    for (const c of [-1, 1])
      l.push(
        Mt(
          (c * 1.1) / 2 - 0.03,
          0.62 * 0.5,
          -0.08,
          (c * 1.1) / 2 + 0.03,
          0.62 * 0.5 + 0.06,
          0.08,
          0.004,
          "y",
        ),
      );
    l.push(
      Mt(
        -0.06,
        0.62 - 0.2,
        -0.55 / 2 - 0.02,
        0.06,
        0.62 - 0.06,
        -0.55 / 2 + 0.002,
        0.004,
        "y",
      ),
    );
    const f = new Kt();
    ((f.matrixAutoUpdate = !1),
      f.add(
        i(us(n), o.oak, "church_chest"),
        i(us(l), o.iron, "church_chest_iron"),
      ));
    const h = e - 0.62 - 0.6 - 0.55 / 2 + 0.02;
    y(
      "chest",
      f,
      [
        { u: 0, p: [r + 0.02, 0, h], q: w(0, 0.04, 0) },
        { u: 0.45, p: [r + 0.25, 0, h - 0.95], q: w(0, 0.18, 0) },
        { u: 1, p: [5.5, 0, 57.95], q: w(0, 0.06, 0) },
      ],
      [
        [-1.1 / 2, 0, -0.55 / 2],
        [1.1 / 2, 0, -0.55 / 2],
        [-1.1 / 2, 0, 0.55 / 2],
        [1.1 / 2, 0, 0.55 / 2],
      ],
      {
        kind: "drag",
        hold: [
          [-0.3, 0.5, -0.55 / 2 - 0.02],
          [0.3, 0.5, -0.55 / 2 - 0.02],
        ],
        stand: [
          [0, r + 0.02, h - 0.55 / 2 - 0.62],
          [0.45, r + 0.2, h - 0.95 - 0.55 / 2 - 0.62],
          [1, 5.48, 57.95 - 0.55 / 2 - 0.62],
        ],
      },
    );
  }
  {
    const v = Ba(1.5, 0.72),
      n = i(v, o.oak, "church_barricade_pew"),
      l = new wt().makeBasis(
        new me(0, 1, 0),
        new me(1, 0, 0),
        new me(0, 0, -1),
      ),
      f = 0.2,
      h = new Ro().setFromRotationMatrix(new wt().makeRotationX(f).multiply(l)),
      c = e - 0.02 - 0.16 - 1.5 * Math.sin(f),
      M = new Ro().setFromRotationMatrix(
        new wt().makeBasis(new me(0, 0, -1), new me(-1, 0, 0), new me(0, 1, 0)),
      ),
      m = new Ro().setFromRotationMatrix(
        new wt().makeRotationX(-0.5).multiply(l),
      );
    y(
      "pew",
      n,
      [
        { u: 0, p: [r - 0.55, 0, c], q: h },
        { u: 0.3, p: [r - 0.5, 0, c - 0.45], q: m },
        { u: 1, p: [5.72, 0.17, 57.45], q: M },
      ],
      [
        [0, 0, 0],
        [1.5, 0, 0],
        [0, 1, 0],
        [1.5, 1, 0],
        [0, 0, 0.72],
        [1.5, 0, 0.72],
        [0, 1, 0.72],
        [1.5, 1, 0.72],
      ],
      {
        kind: "haul",
        hold: [
          [1.05, 0.95, 0.45],
          [0.95, 0.25, 0.45],
        ],
        stand: [
          [0, r, c - 1.05],
          [0.3, r, c - 1.5],
          [1, 4.45, 56.5],
        ],
      },
    );
  }
  {
    const z = [1.86, 1.22, 0.58],
      x = [0.07, -0.05, 0.04],
      v = Mt(-0.82, -0.085, -0.018, 0.82, 0.085, 0.018, 0.004, "x");
    z.forEach((n, l) => {
      const f = i(v, o.door, "church_plank"),
        h = e - 0.03,
        c = r - 0.35 + l * 0.32,
        M = e - 0.75 - l * 0.28,
        m = (t() - 0.5) * 0.8;
      y(
        "plank" + l,
        f,
        [
          { u: 0, p: [r, n, h], q: w(0, 0, x[l]) },
          {
            u: 0.55,
            p: [r - 0.12, n - 0.05, h - 0.42],
            q: w(0, -0.55, x[l] * 2),
          },
          {
            u: 1,
            p: [c, 0.02, M],
            q: w(Math.PI / 2, m, 0),
            ease: (k) => k * k,
          },
        ],
        [],
        {
          kind: "rip",
          noCollider: !0,
          hold: [
            [0.62, 0, -0.04],
            [0.3, 0, -0.04],
          ],
          stand: [[0, r + 0.22, e - 0.72]],
        },
      );
    });
  }
  const g = {
    pieces: p,
    reset() {
      for (const z of p) ((z.u = -1), z.set(0));
    },
    clearAll() {
      for (const z of p) ((z.u = -1), z.set(1));
    },
    get blocked() {
      return p.some((z) => z.u < 1);
    },
    cue(z, x = {}) {
      const v = p[z],
        n = v.at(v.hold[0]),
        l = v.at(v.hold[1]),
        f = v.stand,
        h = Math.max(0, v.u);
      let c = f[0],
        M = f[f.length - 1];
      for (let b = 0; b < f.length - 1; b++)
        if (h >= f[b][0] && h <= f[b + 1][0]) {
          ((c = f[b]), (M = f[b + 1]));
          break;
        }
      const m = M[0] > c[0] ? (h - c[0]) / (M[0] - c[0]) : 1,
        k = c[1] + (M[1] - c[1]) * m,
        S = c[2] + (M[2] - c[2]) * m,
        A = n.clone().add(l).multiplyScalar(0.5);
      return (
        (x.pos = [k, S]),
        (x.yaw = Math.atan2(A.x - k, A.z - S)),
        (x.L = n.toArray()),
        (x.R = l.toArray()),
        x
      );
    },
  };
  return (g.reset(), { api: g, colliders: a, root: u });
}
function Lr(s, o, t, u) {
  Ge.tex.value = t.tex1 || null;
  const e = [];
  u.forEach((a, p) => {
    if (p >= Ce) return;
    const i = t.lancets.find((z) => z.east === a.east && z.zc === a.zc);
    if (!i) return;
    const d = i.east ? pt.x1 - 0.3 : pt.x0 + 0.3,
      y = a.y ?? 6.6,
      w = new Is(Qa.radToDeg(a.angle ?? 0.25) * 2, 1, 0.3, 18);
    (w.position.set(d, y, i.zc),
      w.lookAt(a.target[0], a.target[1], a.target[2]),
      w.updateMatrixWorld(!0),
      Ge.mat[p].multiplyMatrices(w.projectionMatrix, w.matrixWorldInverse));
    const g = Math.min(0.9, 0.96 * (e0.w / (e0.apex - e0.sill)) * 2.4);
    (Ge.info[p].set(i.slot, i.mirror ? 1 : 0, g, 0.96),
      e.push({
        k: p,
        base: a.intensity ?? 900,
        ph: p * 1.7,
        pos: [d, y, i.zc],
      }));
  });
  const r = (a, p) => {
    for (const i of e) {
      const d =
        0.85 +
        0.1 * Math.sin(p * 0.7 + i.ph) +
        0.05 * Math.sin(p * 3.1 + i.ph * 2) * Math.sin(p * 5.3);
      Ge.pos[i.k].set(i.pos[0], i.pos[1], i.pos[2], i.base * d);
    }
  };
  return (r(0, 0), { spots: e, update: r });
}
