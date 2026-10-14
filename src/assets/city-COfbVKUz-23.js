// assets/city-COfbVKUz 23 — math
// Lines 7268-7574 of readable/assets/city-COfbVKUz.pretty.js (statement-aligned).
function jo({
  line: m,
  plan: e,
  roofItems: d,
  solids: n,
  flight: h,
  props: c,
}) {
  const s = new Map(),
    x = (t, u) => t * 100003 + u,
    k = (t, u, o, l, f) => {
      for (let z = Math.floor(u / 20); z <= Math.floor(o / 20); z++)
        for (let A = Math.floor(l / 20); A <= Math.floor(f / 20); A++) {
          const F = x(z, A);
          (s.get(F) || s.set(F, []).get(F)).push(t);
        }
    },
    P = (t, u) => {
      k({ box: t, name: u }, t[0], t[3], t[2], t[5]);
    };
  for (const t of e.blds) {
    if (t.kind === "prop" || t.kind === "site" || t.h < 1) continue;
    const u = t.tier === "near" && !t.exempt ? 1.35 : t.exempt ? 0.15 : 0.3,
      o = t.base + t.h + (t.flags & 4 ? 1.45 : 0.2),
      l = (f) => (t.faces & f ? u : 0.05);
    P(
      [
        t.x - t.w / 2 - l(2),
        t.base,
        t.z - t.d / 2 - l(8),
        t.x + t.w / 2 + l(1),
        o,
        t.z + t.d / 2 + l(4),
      ],
      (t.kind || "building") + " " + t.id,
    );
  }
  for (const t of d)
    if (t.type === "hut")
      P(
        [
          t.x - t.w / 2 - 0.2,
          t.y,
          t.z - t.d / 2 - 0.2,
          t.x + t.w / 2 + 0.2,
          t.y + t.h + 0.2,
          t.z + t.d / 2 + 0.2,
        ],
        "stair hut",
      );
    else if (t.type === "tank")
      P(
        [
          t.x - t.r * 1.1,
          t.y,
          t.z - t.r * 1.1,
          t.x + t.r * 1.1,
          t.y + t.legs + t.h * 1.3,
          t.z + t.r * 1.1,
        ],
        "roof tank",
      );
    else if (t.type === "mast") {
      const u = {
        seg: [[t.x, t.y, t.z], [t.x, t.y + t.h, t.z], 0.3],
        name: "antenna",
      };
      k(u, t.x - 1, t.x + 1, t.z - 1, t.z + 1);
    }
  for (const t of n)
    if (t.box) P(t.box, t.name);
    else if (t.seg) {
      const [u, o, l] = t.seg;
      k(
        t,
        Math.min(u[0], o[0]) - l,
        Math.max(u[0], o[0]) + l,
        Math.min(u[2], o[2]) - l,
        Math.max(u[2], o[2]) + l,
      );
    }
  for (const t of e.lamps) {
    if (t.y > 9) continue;
    const u = {
      seg: [
        [t.x - t.ax * 1.4, 0, t.z - t.az * 1.4],
        [t.x - t.ax * 1.4, 8.4, t.z - t.az * 1.4],
        0.12,
      ],
      name: "lamp post",
    };
    k(u, t.x - 2, t.x + 2, t.z - 2, t.z + 2);
  }
  const _ = (t) => {
      if (t[2] > $.z0 && t[2] < $.z1) {
        const u = Math.min(Math.abs(t[2] - $.z0), Math.abs(t[2] - $.z1)),
          o = t[1] - $.water;
        return t[1] > $.parapet
          ? Math.min(o, Math.hypot(u, t[1] - $.parapet))
          : Math.min(o, u);
      }
      return t[1] - 0.15;
    },
    g = h.kOf,
    M = [0, 0, 0, 0],
    N = [0, 0, 0],
    T = (t) => {
      const u = [],
        o = g("crane", t),
        l = o * o * (3 - 2 * o),
        f = f0.th0 + (f0.th1 - f0.th0) * l,
        z = Math.sin(f),
        A = Math.cos(f);
      (u.push({
        obb: {
          cx: f0.x,
          cz: f0.z,
          s: z,
          c: A,
          from: 1.6,
          to: f0.jibLen,
          half: 1.1,
          y0: f0.jibY - 0.4,
          y1: f0.jibY + 2.2,
        },
        name: "crane jib",
      }),
        u.push({
          obb: {
            cx: f0.x,
            cz: f0.z,
            s: z,
            c: A,
            from: -18,
            to: -1.6,
            half: 1.4,
            y0: f0.jibY - 1.3,
            y1: f0.jibY + f0.headH + 0.3,
          },
          name: "crane counter-jib / head",
        }));
      const F = g("tank", t);
      return (
        c.tank &&
          (c.tank.at(F, M),
          u.push({ sphere: [M[0], M[1], M[2], 2.9], name: "the tank" })),
        t > 45.9 &&
          t < 50.4 &&
          (h.heli2At(t, N),
          u.push({
            sphere: [N[0], N[1], N[2], 6.2],
            name: "the army helicopter",
          })),
        u
      );
    },
    S = (t, u) => {
      if (t.sphere)
        return (
          Math.hypot(
            u[0] - t.sphere[0],
            u[1] - t.sphere[1],
            u[2] - t.sphere[2],
          ) - t.sphere[3]
        );
      const o = t.obb,
        l = u[0] - o.cx,
        f = u[2] - o.cz,
        z = l * o.s + f * o.c,
        A = l * o.c - f * o.s,
        F = Math.max(o.from - z, 0, z - o.to),
        E = Math.max(Math.abs(A) - o.half, 0),
        K = Math.max(o.y0 - u[1], 0, u[1] - o.y1);
      return Math.hypot(F, E, K);
    },
    v = (t, u, o = 14) => {
      let l = _(t),
        f = "the ground / water";
      const z = Math.floor((t[0] - o) / 20),
        A = Math.floor((t[0] + o) / 20),
        F = Math.floor((t[2] - o) / 20),
        E = Math.floor((t[2] + o) / 20),
        K = new Set();
      for (let L = z; L <= A; L++)
        for (let q = F; q <= E; q++) {
          const R = s.get(x(L, q));
          if (R)
            for (const V of R) {
              if (K.has(V)) continue;
              K.add(V);
              const H = V.box
                ? Ko(V.box, t)
                : Vo(V.seg[0], V.seg[1], V.seg[2], t);
              H < l && ((l = H), (f = V.name));
            }
        }
      for (const L of u) {
        const q = S(L, t);
        q < l && ((l = q), (f = L.name));
      }
      return [l, f];
    },
    a = m.FRAME,
    r = (t) => {
      const u = [t.rotor];
      for (let o = 0; o < 28; o++) {
        const l = (o / 28) * Math.PI * 2,
          f = Math.cos(l),
          z = Math.sin(l);
        for (const A of [a.rotorR, a.rotorR * 0.55])
          u.push([
            t.rotor[0] + (t.f[0] * f + t.l[0] * z) * A,
            t.rotor[1] + (t.f[1] * f + t.l[1] * z) * A,
            t.rotor[2] + (t.f[2] * f + t.l[2] * z) * A,
          ]);
      }
      return u;
    },
    y = (t) => {
      const u = [];
      for (let o = 0; o < 8; o++) {
        const l = (o / 8) * Math.PI * 2;
        u.push([
          t.tail[0] + (t.f[0] * Math.cos(l) + t.u[0] * Math.sin(l)) * a.tailR,
          t.tail[1] + (t.f[1] * Math.cos(l) + t.u[1] * Math.sin(l)) * a.tailR,
          t.tail[2] + (t.f[2] * Math.cos(l) + t.u[2] * Math.sin(l)) * a.tailR,
        ]);
      }
      return (u.push(t.tail), u);
    },
    b = (t) => {
      const u = [];
      for (const o of [a.noseFwd, 2, 0.6, -0.9, -2.4])
        for (const [l, f] of [
          [0, -0.45],
          [0.95, 0.4],
          [-0.95, 0.4],
          [0, 1.6],
        ])
          u.push(t.at(o, l, f));
      for (const o of [-3.5, -5, -6.5]) u.push(t.at(o, 0, 0.9));
      for (const o of [-1.8, 0, 1.8])
        for (const l of [1.1, -1.1]) u.push(t.at(o, l, -a.skidDown));
      return u;
    },
    p = (t = m.t0, u = m.t1, o = 0.1) => {
      const l = [];
      for (let f = t; f <= u + 1e-6; f += o) {
        const z = Yt(m, f),
          A = T(f),
          F = (E, K = 0) => {
            let L = [1e9, ""];
            for (const q of E) {
              const R = v(q, A);
              R[0] < L[0] && (L = R);
            }
            return ((L[0] -= K), L);
          };
        l.push({
          t: +f.toFixed(2),
          rotor: F(r(z)),
          tail: F(y(z), a.tailR * 0),
          body: F(b(z), a.bodyR * 0),
        });
      }
      return l;
    };
  return {
    sweep: p,
    report: (t) => {
      const u = p(),
        o = {};
      for (const [f, z, A] of t) {
        const F = u.filter((R) => R.t >= z - 1e-6 && R.t <= A + 1e-6),
          E = (R) =>
            F.reduce(
              (V, H) => (H[R][0] < V[0] ? [H[R][0], H[R][1], H.t] : V),
              [1e9, "", 0],
            ),
          K = E("rotor"),
          L = E("tail"),
          q = E("body");
        o[f] = {
          rotor: +K[0].toFixed(2),
          rotorAt: K[2],
          rotorBy: K[1],
          tail: +L[0].toFixed(2),
          tailBy: L[1],
          body: +q[0].toFixed(2),
          bodyAt: q[2],
          bodyBy: q[1],
        };
      }
      const l = (f) =>
        u.reduce(
          (z, A) => (A[f][0] < z[0] ? [A[f][0], A[f][1], A.t] : z),
          [1e9, "", 0],
        );
      return (
        (o.whole = { rotor: l("rotor"), tail: l("tail"), body: l("body") }),
        o
      );
    },
    nearest: v,
    dynamic: T,
  };
}
