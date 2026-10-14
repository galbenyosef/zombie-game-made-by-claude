// assets/park-CwBfNU5l 09 — math
// Lines 2310-2631 of readable/assets/park-CwBfNU5l.pretty.js (statement-aligned).
function buildParkPaths(
  e,
  {
    trees: a = [],
    hedges: t = [],
    wear: r = [],
    ruts: o = [],
    mud: n = [],
    paved: i = [],
  } = {},
) {
  const f = new P0();
  f.name = "park_ground";
  const w = buildFountain({ trees: a, hedges: t, wear: r, ruts: o, mud: n, paved: i }),
    s = {
      tMask: { value: w.tex },
      tLitter: { value: e.mats.get("park3_litter").map },
      tDirt: { value: e.mats.get("forest_path").map },
      uMaskBox: { value: new ue(b0.x0, b0.z0, 1 / b0.w, 1 / b0.d) },
    },
    l = Ha(e, s);
  l.normalScale && l.normalScale.set(0.55, 0.55);
  {
    const p = b0.x0,
      g = b0.x0 + b0.w,
      T = b0.z0,
      G = b0.z0 + b0.d,
      Z = R0,
      tt = (at, nt, mt, Mt) =>
        new _t(
          nt - at,
          Mt - mt,
          Math.max(1, Math.round((nt - at) / 3)),
          Math.max(1, Math.round((Mt - mt) / 3)),
        )
          .rotateX(-Math.PI / 2)
          .translate((at + nt) / 2, 0, (mt + Mt) / 2),
      it = K0(
        [tt(p, Z.x0, T, G), tt(Z.x1, g, T, G), tt(Z.x0, Z.x1, T, Z.z0)].map(
          (at) => N(at),
        ),
      ),
      et = new jt(it, l);
    ((et.name = "park_lawn"),
      (et.receiveShadow = !0),
      (et.castShadow = !1),
      f.add(et));
  }
  const u = ie(e, s, "street_asphalt", "asphalt", {
      wet: 0.55,
      puddles: 0.9,
      leaves: 0.8,
      edge: 0.95,
      rag: 0.08,
    }),
    c = ie(e, s, "garden_gravel", "gravel", {
      tint: 9077880,
      wet: 0.95,
      puddles: 0.35,
      leaves: 0.9,
      edge: 0.9,
      rag: 0.16,
    }),
    M = { asphalt: [], gravel: [] },
    h = Ae,
    v = (p) => p[0] > h.x0 && p[0] < h.x1 && p[1] > h.z0 && p[1] < h.z1,
    S = (p, g) => {
      let T = 0,
        G = 1;
      const Z = v(p);
      for (let it = 0; it < 24; it++) {
        const et = (T + G) / 2,
          at = [p[0] + (g[0] - p[0]) * et, p[1] + (g[1] - p[1]) * et];
        v(at) === Z ? (T = et) : (G = et);
      }
      const tt = Z ? G : T;
      return [p[0] + (g[0] - p[0]) * tt, p[1] + (g[1] - p[1]) * tt];
    },
    d = (p) => {
      const g = [];
      let T = [];
      for (let G = 0; G < p.length; G++)
        v(p[G])
          ? T.length && (T.push(S(p[G - 1], p[G])), g.push(T), (T = []))
          : (!T.length && G > 0 && T.push(S(p[G - 1], p[G])), T.push(p[G]));
      return (T.length && g.push(T), g.filter((G) => G.length > 1));
    };
  for (const p of be)
    for (const g of d(p.line)) {
      const T = { ...p, line: g },
        G = T.line,
        Z = G.length,
        tt = T.w / 2 + 0.1,
        it = T.kind === "asphalt" ? 0.016 : 0.012,
        et = new Float32Array(Z * 2 * 3),
        at = new Float32Array(Z * 2),
        nt = new Float32Array(Z * 2 * 3),
        mt = [];
      for (let wt = 0; wt < Z; wt++) {
        const Et = G[Math.max(0, wt - 1)],
          P = G[Math.min(Z - 1, wt + 1)],
          $ = Math.hypot(P[0] - Et[0], P[1] - Et[1]) || 1,
          lt = (P[0] - Et[0]) / $,
          ft = (P[1] - Et[1]) / $;
        for (let Pt = 0; Pt < 2; Pt++) {
          const Wt = Pt ? 1 : -1,
            Dt = wt * 2 + Pt;
          ((et[Dt * 3] = G[wt][0] - ft * Wt * tt),
            (et[Dt * 3 + 1] = it),
            (et[Dt * 3 + 2] = G[wt][1] + lt * Wt * tt),
            (nt[Dt * 3 + 1] = 1),
            (at[Dt] = Wt));
        }
        if (wt < Z - 1) {
          const Pt = wt * 2;
          mt.push(Pt, Pt + 2, Pt + 1, Pt + 1, Pt + 2, Pt + 3);
        }
      }
      const Mt = new Q0();
      (Mt.setAttribute("position", new $t(et, 3)),
        Mt.setAttribute("normal", new $t(nt, 3)),
        Mt.setAttribute("aEdge", new $t(at, 1)),
        Mt.setIndex(mt),
        Mt.computeVertexNormals());
      const Ft = Mt.attributes.normal;
      if (Ft.getY(0) < 0) {
        const wt = Mt.index.array;
        for (let Et = 0; Et < wt.length; Et += 3) {
          const P = wt[Et + 1];
          ((wt[Et + 1] = wt[Et + 2]), (wt[Et + 2] = P));
        }
      }
      for (let wt = 0; wt < Ft.count; wt++) Ft.setXYZ(wt, 0, 1, 0);
      (N(Mt), M[T.kind].push(Mt));
    }
  for (const [p, g] of [
    ["asphalt", u],
    ["gravel", c],
  ]) {
    if (!M[p].length) continue;
    const T = new jt(K0(M[p]), g);
    ((T.name = "park_paths_" + p),
      (T.receiveShadow = !0),
      (T.castShadow = !1),
      f.add(T));
  }
  const y = ie(e, s, "plaza_cobble", "setts", {
    tint: 9078400,
    wet: 1,
    puddles: 0.45,
    leaves: 0.7,
    edge: 2,
    rag: 0,
  });
  y.normalScale && y.normalScale.set(0.22, 0.22);
  const m = ie(e, s, "sidewalk_tiles", "pavers", {
    tint: 9078916,
    wet: 0.7,
    puddles: 0.6,
    leaves: 0.5,
    edge: 2,
    rag: 0,
  });
  m.normalScale && m.normalScale.set(0.6, 0.6);
  const F = [],
    C = Gt(e.mats.get("church_dressed", { color: 10131086 }), "curb"),
    L = [],
    z = [],
    W = (p, g = 0) => (
      p.setAttribute(
        "aEdge",
        new $t(new Float32Array(p.attributes.position.count).fill(g), 1),
      ),
      p
    );
  for (const p of _e) {
    p.kind === "setts" &&
      L.push(
        W(N(new j0(p.r, 72).rotateX(-Math.PI / 2).translate(p.x, 0.022, p.z))),
      );
    const g = [
      new _0(p.r - 0.22, 0),
      new _0(p.r - 0.22, 0.07),
      new _0(p.r - 0.02, 0.075),
      new _0(p.r + 0.02, 0),
    ];
    z.push(N(new Ie(g, 96).translate(p.x, 0, p.z)));
  }
  {
    const p = Ae;
    F.push(
      W(
        N(
          new _t(p.x1 - p.x0, p.z1 - p.z0)
            .rotateX(-Math.PI / 2)
            .translate((p.x0 + p.x1) / 2, 0.022, (p.z0 + p.z1) / 2),
        ),
      ),
    );
    for (const [g, T, G, Z] of [
      [p.x0, p.z0, p.x0 + 0.22, p.z1],
      [p.x1 - 0.22, p.z0, p.x1, p.z1],
      [p.x0, p.z0, p.x0 + 4.4, p.z0 + 0.22],
      [p.x1 - 4.4, p.z0, p.x1, p.z0 + 0.22],
    ])
      z.push(
        N(
          new xt(G - g, 0.075, Z - T).translate(
            (g + G) / 2,
            0.037,
            (T + Z) / 2,
          ),
        ),
      );
  }
  const D = _e.find((p) => p.id === "bandstand"),
    V = N(new j0(D.r, 64).rotateX(-Math.PI / 2).translate(D.x, 0.014, D.z));
  {
    const p = new jt(K0([W(V)]), c);
    ((p.name = "park_band_apron"), (p.receiveShadow = !0), f.add(p));
  }
  {
    const p = new jt(K0(L), y);
    ((p.name = "park_setts"), (p.receiveShadow = !0), f.add(p));
  }
  {
    const p = new jt(K0(F), m);
    ((p.name = "park_pavers"), (p.receiveShadow = !0), f.add(p));
  }
  {
    const p = new jt(K0(z), C);
    ((p.name = "park_curbs"),
      (p.receiveShadow = !0),
      (p.castShadow = !1),
      f.add(p));
  }
  const A = 0.36,
    K = 16,
    J = Math.ceil((K * 2) / A),
    q = {
      uOrigin: { value: new _0() },
      uStepFar: { value: new _0(A, K) },
      uPTt: x0.uPT,
    },
    st = Za(5),
    j = new Float32Array(J * J * 2);
  for (let p = 0; p < J; p++)
    for (let g = 0; g < J; g++)
      ((j[(p * J + g) * 2] = g - J / 2), (j[(p * J + g) * 2 + 1] = p - J / 2));
  (st.setAttribute("aCell", new Y0(j, 2)),
    (st.instanceCount = J * J),
    (st.boundingSphere = new ha(new a0(), 1e5)));
  const Y = new jt(st, ja(s, q));
  ((Y.name = "park_tufts"),
    (Y.frustumCulled = !1),
    (Y.receiveShadow = !0),
    (Y.castShadow = !1),
    f.add(Y));
  function x(p) {
    const g = p.position;
    ((Y.visible = g.y < 25 && V0(g.x, g.z, -20)),
      q.uOrigin.value.set(Math.floor(g.x / A), Math.floor(g.z / A)));
  }
  return {
    group: f,
    mask: w,
    MU: s,
    update: x,
    mats: { lawnM: l, asphaltM: u, gravelM: c, settsM: y, curbM: C },
  };
}
function K0(e) {
  let a = 0,
    t = 0;
  for (const c of e)
    ((a += c.attributes.position.count),
      (t += c.index ? c.index.count : c.attributes.position.count));
  const r = e.every((c) => c.attributes.aEdge),
    o = new Float32Array(a * 3),
    n = new Float32Array(a * 3),
    i = new Float32Array(a * 2),
    f = r ? new Float32Array(a) : null,
    w = new Uint32Array(t);
  let s = 0,
    l = 0;
  for (const c of e) {
    const M = c.attributes.position.count;
    if (
      (o.set(c.attributes.position.array.subarray(0, M * 3), s * 3),
      n.set(c.attributes.normal.array.subarray(0, M * 3), s * 3),
      i.set(c.attributes.uv.array.subarray(0, M * 2), s * 2),
      f && f.set(c.attributes.aEdge.array.subarray(0, M), s),
      c.index)
    ) {
      const h = c.index.array;
      for (let v = 0; v < c.index.count; v++) w[l + v] = h[v] + s;
      l += c.index.count;
    } else {
      for (let h = 0; h < M; h++) w[l + h] = s + h;
      l += M;
    }
    s += M;
  }
  const u = new Q0();
  return (
    u.setAttribute("position", new $t(o, 3)),
    u.setAttribute("normal", new $t(n, 3)),
    u.setAttribute("uv", new $t(i, 2)),
    f && u.setAttribute("aEdge", new $t(f, 1)),
    u.setIndex(new $t(w, 1)),
    u.computeBoundingSphere(),
    u
  );
}
let ce = null,
  de = null;
const ae = (e, a, t, r, o = 2048, n = 2048) => [
  e / o,
  1 - (a + r) / n,
  (e + t) / o,
  1 - a / n,
];
