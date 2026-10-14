// assets/index-DQDjAbEY 08 — pos
// Lines 2200-2438 of readable/assets/index-DQDjAbEY.pretty.js (statement-aligned).
function buildCockpitGlass(e, l, a, o) {
  const { body: t, glass: s } = e,
    n = 98,
    c = 88,
    i = Zo(n, c),
    d = (L, T) => L * c + ((T + c) % c),
    f = (n + 1) * c,
    p = new Float32Array(f),
    m = new Float32Array(f),
    x = new Float32Array(f),
    w = new Float32Array(f);
  for (let L = 0; L <= n; L++)
    for (let T = 0; T < c; T++) {
      const O = i.pos[L][T],
        q = d(L, T);
      ((p[q] = ea(O.x, O.y, O.z)),
        (m[q] = C0("dfront", O.x, O.y, O.z)),
        (x[q] = C0("dslide", O.x, O.y, O.z)),
        (w[q] = oo(O.x, O.y, O.z)));
    }
  const v = {
    body: [],
    inner: [],
    FL: [],
    FR: [],
    RL: [],
    RR: [],
    glassS: [],
    glassFL: [],
    glassFR: [],
    glassRL: [],
    glassRR: [],
  };
  for (let L = 0; L < n; L++)
    for (let T = 0; T < c; T++) {
      const O = [d(L, T), d(L + 1, T), d(L + 1, T + 1), d(L, T + 1)],
        q = (o0, n0) => O.some((U) => n0(o0[U])),
        j = (i.pos[L][T].x + i.pos[L + 1][(T + 1) % c].x) / 2,
        E = j > 0,
        l0 = [L, T];
      if (
        (q(p, (o0) => o0 > -0.03) && v.body.push(l0),
        Math.max(...O.map((o0) => i.pos[Math.floor(o0 / c)][o0 % c].y)) >
          0.66 && v.inner.push(l0),
        q(m, (o0) => o0 < 0.03) && v[E ? "FL" : "FR"].push(l0),
        q(x, (o0) => o0 < 0.03) && v[E ? "RL" : "RR"].push(l0),
        q(w, (o0) => o0 < 0.03))
      ) {
        const o0 = (i.pos[L][T].z + i.pos[L + 1][T].z) / 2,
          n0 = (i.pos[L][T].y + i.pos[L][(T + 1) % c].y) / 2,
          U = C0("dfront", j, n0, o0) < 0.02,
          e0 = C0("dslide", j, n0, o0) < 0.02;
        v[
          U
            ? E
              ? "glassFL"
              : "glassFR"
            : e0
              ? E
                ? "glassRL"
                : "glassRR"
              : "glassS"
        ].push(l0);
      }
    }
  const u = (L, T, O, q, { offset: j = 0, inward: E = !1 } = {}) => {
      const l0 = new Map(),
        y0 = [],
        o0 = [],
        n0 = [],
        U = (e0, a0) => {
          const r0 = d(e0, a0);
          if (l0.has(r0)) return l0.get(r0);
          const i0 = i.pos[e0][(a0 + c) % c],
            V = i.nrm[e0][(a0 + c) % c];
          return (
            y0.push(i0.x - V.x * j, i0.y - V.y * j, i0.z - V.z * j),
            E ? o0.push(-V.x, -V.y, -V.z) : o0.push(V.x, V.y, V.z),
            l0.set(r0, y0.length / 3 - 1),
            y0.length / 3 - 1
          );
        };
      for (const [e0, a0] of T) {
        const r0 = U(e0, a0),
          i0 = U(e0 + 1, a0),
          V = U(e0 + 1, a0 + 1),
          p0 = U(e0, a0 + 1);
        E ? n0.push(r0, V, p0, r0, i0, V) : n0.push(r0, p0, V, r0, V, i0);
      }
      n0.length && L.addRaw(y0, o0, n0, O, { ...q, inner: j });
    },
    g = t.tris + s.tris;
  (u(t, v.body, l, { mask: Re.BODY }),
    a ||
      u(t, v.inner, S.lining, { mask: Re.BODY }, { offset: S0, inward: !0 }));
  for (const [L, T, O] of [
    ["FL", _.DOOR_FL, Re.DOOR_FL],
    ["FR", _.DOOR_FR, Re.DOOR_FR],
    ["RL", _.DOOR_RL, Re.DOOR_RL],
    ["RR", _.DOOR_RR, Re.DOOR_RR],
  ])
    (u(t, v[L], l, { part: T, mask: O }),
      a ||
        u(t, v[L], S.lining, { part: T, mask: O }, { offset: S0, inward: !0 }));
  const P = 0.012;
  for (const [L, T] of [
    ["glassS", 0],
    ["glassFL", _.DOOR_FL],
    ["glassFR", _.DOOR_FR],
    ["glassRL", _.DOOR_RL],
    ["glassRR", _.DOOR_RR],
  ])
    a
      ? u(t, v[L], S.darkglass, { part: T, mask: Re.GLASS }, { offset: P })
      : u(s, v[L], S.darkglass, { part: T, mask: Re.GLASS }, { offset: P });
  o.parts.skins = t.tris + s.tris - g;
  const k = t.tris,
    y = (L) => {
      let T = 0,
        O = 1;
      for (let q = 0; q < 40; q++) {
        const j = (T + O) / 2;
        M(j) < L ? (T = j) : (O = j);
      }
      return (T + O) / 2;
    },
    M = (L) => ze(L, 0).z,
    F = (L, T) => ({
      s0: m0(y(L) - 0.01),
      s1: m0(y(T) + 0.01),
      th0: Oe - 0.001,
      th1: Math.PI / 2 + 0.25,
    }),
    A = (L, T, O) =>
      ta((q, j, E) => C0(L, q, j, E), { ...F(T, O), ns: 150, nt: 260 }).filter(
        (q) => q.closed && q.pos.length > 12,
      ),
    W = (L, T, { part: O = 0, r: q = 0.011, name: j = null } = {}) => {
      const E = Gt(L, T, 0.03, !0),
        l0 = E.pos.map((C, J) => C.clone().addScaledVector(E.nrm[J], -0.002));
      if ((t.add(v0([...l0, l0[0]], q, 4), null, S.rubber, { part: O }), a))
        return;
      const y0 = E.pos.map((C, J) =>
          C.clone().addScaledVector(E.nrm[J], -0.004),
        ),
        o0 = E.pos.map((C, J) =>
          C.clone().addScaledVector(E.nrm[J], -S0 - 0.006),
        );
      if (
        (t.add(Ae(y0, o0, !0), null, S.reveal, { part: O, both: S.reveal }), !j)
      )
        return;
      const n0 = E.pos.length,
        U = E.pos.map((C, J) => {
          const Y = E.pos[(J + 1) % n0],
            B = E.pos[(J - 1 + n0) % n0];
          return Y.clone().sub(B).normalize().cross(E.nrm[J]).normalize();
        }),
        e0 = E.pos[0].clone().addScaledVector(U[0], 0.02),
        a0 = C0(j, e0.x, e0.y, e0.z) < 0 ? -1 : 1,
        r0 = j === "chin" ? 0.03 : 0.05,
        i0 = E.pos.map((C, J) =>
          C.clone().addScaledVector(E.nrm[J], -S0 - 0.012),
        ),
        V = E.pos.map((C, J) =>
          C.clone()
            .addScaledVector(E.nrm[J], -S0 - 0.012)
            .addScaledVector(U[J], a0 * r0),
        ),
        p0 = E.pos.map((C, J) =>
          C.clone()
            .addScaledVector(E.nrm[J], -S0 + 0.002)
            .addScaledVector(U[J], a0 * (r0 + 0.008)),
        );
      (t.add(Ae(o0, i0, !0), null, S.frame, { part: O, both: S.frame }),
        t.add(Ae(i0, V, !0), null, S.frame, { part: O, both: S.frame }),
        t.add(Ae(V, p0, !0), null, S.frame, { part: O, both: S.frame }));
    },
    N = (L) => L.map((T) => h(-T.x, T.y, T.z)),
    D = (L) => L.map((T) => h(-T.x, T.y, T.z)),
    $ = (L, T) => {
      (T(L.pos, L.nrm, 1), T(N(L.pos), D(L.nrm), -1));
    };
  for (const [L, T, O] of [
    ["ws", 2, 3.2],
    ["chin", 2.3, 3.2],
    ["ovh", 1.05, 2.1],
    ["rwin", -1.95, -0.7],
  ])
    for (const q of A(L, T, O)) $(q, (j, E) => W(j, E, { name: L }));
  for (const L of A("wfront", 1, 2.5))
    $(L, (T, O, q) =>
      W(T, O, { part: q > 0 ? _.DOOR_FL : _.DOOR_FR, name: "wfront" }),
    );
  for (const L of A("wslide", -0.6, 0.9))
    $(L, (T, O, q) =>
      W(T, O, { part: q > 0 ? _.DOOR_RL : _.DOOR_RR, name: "wslide" }),
    );
  const u0 = (L, T, O, q, j) => {
    for (const E of A(L, T, O))
      $(E, (l0, y0, o0) => {
        const n0 = Gt(l0, y0, 0.032, !0),
          U = o0 > 0 ? q : j,
          e0 = (Y, B, k0) => Y.clone().addScaledVector(B, -k0),
          a0 = n0.pos.map((Y, B) => {
            const k0 = n0.pos[(B + 1) % n0.pos.length],
              r = n0.pos[(B - 1 + n0.pos.length) % n0.pos.length];
            return k0.clone().sub(r).normalize().cross(n0.nrm[B]).normalize();
          }),
          r0 = (() => {
            const Y = n0.pos[0].clone().addScaledVector(a0[0], 0.02);
            return C0(L, Y.x, Y.y, Y.z) < 0 ? 1 : -1;
          })(),
          i0 = n0.pos.map((Y, B) =>
            e0(Y, n0.nrm[B], 0.001).addScaledVector(a0[B], 0.0035 * r0),
          ),
          V = n0.pos.map((Y, B) =>
            e0(Y, n0.nrm[B], S0 + 0.004).addScaledVector(a0[B], 0.0035 * r0),
          );
        if ((t.add(Ae(i0, V, !0), null, S.edge, { part: U, both: S.edge }), a))
          return;
        const p0 = n0.pos.map((Y, B) =>
            e0(Y, n0.nrm[B], 0.0015).addScaledVector(a0[B], -0.0035 * r0),
          ),
          C = n0.pos.map((Y, B) =>
            e0(Y, n0.nrm[B], S0 + 0.004).addScaledVector(a0[B], -0.0035 * r0),
          );
        t.add(Ae(p0, C, !0), null, S.jamb, { both: S.jamb });
        const J = n0.pos.map((Y, B) =>
          e0(Y, n0.nrm[B], S0 * 0.55).addScaledVector(a0[B], -0.006 * r0),
        );
        t.add(v0([...J, J[0]], 0.007, 4), null, S.rubber);
      });
  };
  (u0("dfront", 0.9, 2.6, _.DOOR_FL, _.DOOR_FR),
    u0("dslide", -0.7, 1, _.DOOR_RL, _.DOOR_RR),
    (o.parts.openings = t.tris - k),
    (o.grid = i));
}
