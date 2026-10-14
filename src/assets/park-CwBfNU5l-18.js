// assets/park-CwBfNU5l 18 — next
// Lines 7185-7410 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function Mo(
  e,
  a,
  { sources: t = [], floods: r = [], ambulance: o = null } = {},
) {
  const n = [],
    i = [];
  for (let A = 0; A < je; A++) {
    const K = new Oe(16752704, 0, 10, 2);
    ((K.name = "park_pool_" + A),
      (K.castShadow = !1),
      a.add(K),
      n.push(K),
      i.push({ l: K, src: -1, next: -1, k: 0 }));
  }
  const f = t.length,
    w = new Float64Array(f),
    s = Array.from({ length: f }, (A, K) => K),
    l = [],
    u = new Float32Array(f);
  let c = 0,
    M = 0,
    h = 0;
  const v = (A, K) => w[A] - w[K],
    S = (A, K) => {
      for (let J = 0; J < A.length; J++) if (A[J] === K) return !0;
      return !1;
    },
    d = () => {
      l.length = 0;
      for (let A = 0; A < f && l.length < je; A++) {
        const K = s[A];
        t[K].pool !== !1 && w[K] < 1e11 && l.push(K);
      }
      for (const A of i) {
        const K = A.next >= 0 ? A.next : A.src;
        if (!(K >= 0 && S(l, K)))
          for (const J of l) {
            let q = !1;
            for (const st of i)
              (st.next >= 0 ? st.next : st.src) === J && (q = !0);
            if (!q) {
              A.next = J;
              break;
            }
          }
      }
    },
    y = r.map((A, K) => {
      const J = new ya(
        15266047,
        0,
        A.range ?? 75,
        A.angle ?? 0.62,
        A.penumbra ?? 0.55,
        2,
      );
      return (
        (J.name = "park_flood_" + K),
        J.position.copy(A.pos),
        J.target.position.copy(A.aim),
        (J.castShadow = !0),
        J.shadow.mapSize.set(1024, 1024),
        (J.shadow.bias = -4e-4),
        (J.shadow.normalBias = 0.03),
        (J.shadow.camera.near = 0.6),
        (J.shadow.camera.far = A.shadowFar ?? 38),
        a.add(J, J.target),
        n.push(J),
        { s: J, f: A, on: A.on !== !1, k: A.on !== !1 ? 1 : 0 }
      );
    });
  let m = null;
  if (o) {
    const A = new Oe(16719904, 0, 14, 2);
    ((A.name = "park_ambulance"),
      A.position.copy(o.pos),
      (A.castShadow = !1),
      a.add(A),
      n.push(A),
      (m = { l: A, ...o }));
  }
  const F = new Float64Array(f + y.length + 1),
    C = [];
  for (let A = 0; A < f + y.length + (m ? 1 : 0); A++) C.push(A);
  const L = (A) =>
      A < f ? t[A].pos : A < f + y.length ? y[A - f].f.pos : m.pos,
    z = (A) => (A < f ? u[A] : A < f + y.length ? y[A - f].k : m.k),
    W = (A, K) => F[A] - F[K],
    D = new Vt();
  function V(A, K, J) {
    ((c = J.position.x), (M = J.position.z));
    for (let Y = 0; Y < f; Y++) {
      const x = t[Y];
      ((u[Y] = x.k ? x.k(K) : 1),
        (w[Y] =
          (x.pos.x - c) ** 2 + (x.pos.z - M) ** 2 + (u[Y] > 0.03 ? 0 : 1e12)));
    }
    (s.sort(v), (h -= A), h <= 0 && ((h = 0.25), d()));
    for (const Y of i) {
      if (
        (Y.next >= 0 && Y.next !== Y.src
          ? ((Y.k = Math.max(0, Y.k - A * 3.5)),
            Y.k === 0 && ((Y.src = Y.next), (Y.next = -1)))
          : ((Y.next = -1), (Y.k = Math.min(1, Y.k + A * 2.5))),
        Y.src < 0)
      ) {
        Y.l.intensity = 0;
        continue;
      }
      const x = t[Y.src];
      (Y.l.position.copy(x.pos),
        Y.l.color.copy(x.color),
        (Y.l.distance = x.range),
        (Y.l.intensity = Y.k * u[Y.src] * x.cd));
    }
    for (const Y of y)
      ((Y.k += ((Y.on ? 1 : 0) - Y.k) * Math.min(1, A * 8)),
        (Y.s.intensity =
          Y.k * (Y.f.cd ?? 1800) * (Y.f.flicker ? Y.f.flicker(K) : 1)));
    if (m) {
      const Y = m.state(K);
      ((m.k = Y.k), (m.l.intensity = Y.k * m.cd), m.l.color.copy(Y.color));
    }
    const q = C.length;
    for (let Y = 0; Y < q; Y++) {
      const x = L(Y),
        p = z(Y);
      F[Y] =
        (x.x - c) ** 2 +
        (x.z - M) ** 2 -
        (Y >= f && Y < f + y.length ? 8e3 : 0) +
        (p > 0.03 ? 0 : 1e12);
    }
    C.sort(W);
    const st = x0.uPLamps.value,
      j = x0.uPLampC.value;
    for (let Y = 0; Y < $0; Y++) {
      if (Y >= q || F[C[Y]] > 1e11) {
        st[Y].w = 0;
        continue;
      }
      const x = C[Y],
        p = L(x);
      if (x < f) {
        const g = t[x];
        (st[Y].set(p.x, p.y, p.z, u[x] * (g.airK ?? 1)),
          j[Y].set(g.color.r, g.color.g, g.color.b, g.air ?? 1.5));
      } else if (x < f + y.length) {
        const g = y[x - f];
        (st[Y].set(p.x, p.y, p.z, g.k * (g.f.airK ?? 3)),
          j[Y].set(0.8, 0.88, 1, g.f.air ?? 5));
      } else
        (D.copy(m.l.color),
          st[Y].set(p.x, p.y, p.z, m.k * (m.airK ?? 1.2)),
          j[Y].set(D.r, D.g, D.b, m.air ?? 2));
    }
  }
  return {
    lights: n,
    pool: i,
    spots: y,
    amb: m,
    update: V,
    setFlood(A, K) {
      y[A] && (y[A].on = !!K);
    },
  };
}
const Ce = {
    post: {
      exposure: 1,
      bloom: 0.32,
      bloomThreshold: 1,
      vignette: 0.6,
      sat: 0.94,
      contrast: 1.14,
    },
    key: [11124194, 0.15],
    keyDir: [0.62, 0.42, -0.35],
    fill: [16747082, 0.03],
    fillDir: [-0.45, 0.25, 0.6],
    hemi: [3426410, 1446414, 0.19],
    env: 0.14,
    envName: "sky",
    fog: [659480, 0.0105],
    keyBox: 40,
  },
  wo = { ...Ce, post: { ...Ce.post, exposure: 0.94, bloom: 0.34 }, keyBox: 32 },
  bo = [
    "park3_lawn",
    "park3_litter",
    "park3_bark",
    "park3_hedge",
    "park3_canvas",
    "forest_bark",
    "forest_path",
    "street_asphalt",
    "garden_gravel",
    "plaza_cobble",
    "church_dressed",
    "church_stone",
    "forest_stone",
    "iron_black",
    "rust_metal",
    "concrete_grey",
    "wood_oak_pale",
    "boards_barricade",
    "car_burnt",
    "blood_dark",
    "sidewalk_tiles",
    "ruin_char",
    "paper_old",
    "house_plank",
    "ext_brick",
    "linen_stained",
    "wool_grey",
  ],
  vo = (e, a) => Gt(e.mats.get(a), "air_" + a),
  yo = (e, a) => k0(e, () => a, 5),
  zo = (e, a) => Ht(e, a, 0.012, 0.012, 6),
  go = (e, a) =>
    0.82 +
    0.1 * Math.sin(e * 9.1 + a * 1.7) +
    0.06 * Math.sin(e * 17.3 + a * 3.1) * Math.sin(e * 2.9 + a) +
    0.04 * Math.sin(e * 31 + a * 5.3);
