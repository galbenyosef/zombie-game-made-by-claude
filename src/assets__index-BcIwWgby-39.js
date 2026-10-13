// assets__index-BcIwWgby 39 — math
// Lines 11786-12203 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function nc() {
  const s = L0,
    o = Gs(le, 0.25),
    t = ps,
    u = cs,
    e = { ...C0 },
    r = Oe,
    a = (W) =>
      0.92 +
      0.22 * It(W / 6.5 + 1.3, 8.1) +
      0.3 * $t(e.gate + 6, e.gate, W) +
      0.25 *
        Math.max(
          $t(e.bridgeN - 5, e.bridgeN, W) * $t(e.bridgeS + 5, e.bridgeS, W),
          0,
        ),
    p = (W) => 2.4 + 1.3 * (0.5 + 0.5 * It(W / 17 + 9.1, 3.3)),
    i = { x0: -52, z0: 56, cell: 0.25 };
  ((i.nx = Math.round(104 / i.cell) + 1),
    (i.nz = Math.round(162 / i.cell) + 1));
  const d = i.nx * i.nz,
    y = new Float32Array(d).fill(99),
    w = new Float32Array(d),
    g = new Float32Array(d).fill(99),
    z = new Float32Array(d).fill(99),
    x = (W, B, F, E) => {
      const Y = i.cell,
        et = Math.ceil(B / Y);
      for (let nt = 0; nt < W.n; nt++) {
        const it = W.x[nt],
          lt = W.z[nt],
          ht = Math.round((it - i.x0) / Y),
          yt = Math.round((lt - i.z0) / Y);
        for (
          let Ft = Math.max(0, yt - et);
          Ft <= Math.min(i.nz - 1, yt + et);
          Ft++
        ) {
          const Ut = i.z0 + Ft * Y,
            Lt = (Ut - lt) ** 2,
            h0 = Ft * i.nx;
          for (
            let D0 = Math.max(0, ht - et);
            D0 <= Math.min(i.nx - 1, ht + et);
            D0++
          ) {
            const ee = i.x0 + D0 * Y,
              Ye = (ee - it) ** 2 + Lt,
              Se = h0 + D0,
              Ae = Math.sqrt(Ye);
            Ae < F[Se] && ((F[Se] = Ae), E && (E[Se] = W.s[nt]));
          }
        }
      }
    };
  (x(s, 18, y, w), x(t, 11, g, null), x(o, 4, z, null));
  const v = (W, B) => {
      const F = Math.round((W - i.x0) / i.cell),
        E = Math.round((B - i.z0) / i.cell);
      return F < 0 || E < 0 || F >= i.nx || E >= i.nz ? -1 : E * i.nx + F;
    },
    n = (W, B, F, E) => {
      const Y = (B - i.x0) / i.cell,
        et = (F - i.z0) / i.cell,
        nt = Math.floor(Y),
        it = Math.floor(et);
      if (nt < 0 || it < 0 || nt >= i.nx - 1 || it >= i.nz - 1) return E;
      const lt = Y - nt,
        ht = et - it,
        yt = it * i.nx + nt;
      return (
        (W[yt] * (1 - lt) + W[yt + 1] * lt) * (1 - ht) +
        (W[yt + i.nx] * (1 - lt) + W[yt + i.nx + 1] * lt) * ht
      );
    },
    l = [];
  for (const W in be) {
    const B = be[W];
    for (let F = 0; F < B.length - 1; F++)
      l.push([B[F][0], B[F][1], B[F + 1][0], B[F + 1][1]]);
  }
  const f = 6,
    h = new Map();
  for (const W of l) {
    const B = Math.floor((Math.min(W[0], W[2]) - 2) / f),
      F = Math.floor((Math.max(W[0], W[2]) + 2) / f),
      E = Math.floor((Math.min(W[1], W[3]) - 2) / f),
      Y = Math.floor((Math.max(W[1], W[3]) + 2) / f);
    for (let et = B; et <= F; et++)
      for (let nt = E; nt <= Y; nt++) {
        const it = et + "," + nt;
        (h.has(it) || h.set(it, []), h.get(it).push(W));
      }
  }
  const c = (W, B) => {
      let F = 1e9;
      for (const E of h.get(Math.floor(W / f) + "," + Math.floor(B / f)) || [])
        F = Math.min(F, fe(W, B, E[0], E[1], E[2], E[3]));
      return F;
    },
    M = (W, B, F, E, Y) => {
      let et = Math.min(F - r(E), Qr(W, B));
      for (const lt of de)
        et = Ps(et, Math.hypot(W - lt.x, B - lt.z) - lt.r, 2.2);
      ((et = Ps(et, Ee(W, B), 3)),
        (et = Ps(et, c(W, B) - 0.95, 1.2)),
        (et = Math.max(et, we.rim + 0.1 - Y)));
      const nt = Math.abs(W - Tt.x) - 0.62,
        it = Math.max(Tt.z0 - B, B - Tt.z1);
      return (
        (et = Math.min(
          et,
          nt > 0 && it > 0 ? Math.hypot(nt, it) : Math.max(nt, it),
        )),
        (et = Math.max(et, St.z + 0.05 - B)),
        (et = Math.max(et, -Ns(W, B))),
        et
      );
    },
    m = new Float32Array(d);
  for (let W = 0; W < i.nz; W++)
    for (let B = 0; B < i.nx; B++) {
      const F = W * i.nx + B,
        E = i.x0 + B * i.cell,
        Y = i.z0 + W * i.cell;
      m[F] =
        y[F] > 17 && g[F] > 10.5 && Ee(E, Y) > 6 && c(E, Y) > 7
          ? 9
          : M(E, Y, y[F], w[F], g[F]);
    }
  const k = (W, B) => n(m, W, B, 9),
    S = (W, B) => n(y, W, B, 99),
    A = (W, B) => {
      const F = n(g, W, B, 99);
      return F > 10.9 ? 99 : F;
    },
    b = (W, B) => {
      const F = v(W, B);
      return F < 0 ? 0 : w[F];
    },
    P = (W, B) => {
      let F =
        2.5 * It(W / 24 + 3.1, B / 24 - 1.7) +
        1.25 * It(W / 10.5 - 5.3, B / 10.5 + 2.2) +
        0.32 * It(W / 3.7 + 1.1, B / 3.7 + 7.3);
      ((F += 0.05 * (W - 4) * $t(95, 150, B) * $t(160, 140, B)),
        (F *= $t(78.5, 97, B)));
      const E = Math.hypot(W - Tt.x, (B - 166.2) * 0.8);
      F *= $t(4, 13, E);
      const Y = Ee(W, B);
      return (
        (F = F * $t(1, 9, Y) - 0.11 * Math.max(0, Y) ** 1.35 * $t(172, 190, B)),
        Math.max(-5.5, Math.min(3.6, F))
      );
    },
    _ = new Float32Array(d),
    I = (W, B, F) => {
      const E = F >= 0 ? m[F] : k(W, B),
        Y = F >= 0 ? w[F] : b(W, B),
        et = F >= 0 ? g[F] : A(W, B);
      if (B < St.z + 0.3 && W > St.xW - 0.4 && W < St.xE + 0.4)
        return 0.015 * It(W * 1.3, B * 1.3);
      let nt = P(W, B);
      const it = p(Y),
        lt = $t(0.3, it + 0.25, E);
      if (
        ((nt *= lt),
        (nt +=
          0.16 *
          $t(0.3, 0.75, E) *
          $t(1.8, 0.75, E) *
          (0.6 + 0.4 * It(W * 0.9, B * 0.9))),
        et < we.rim + 0.3)
      ) {
        const ht = 1 - $t(we.bed, we.rim, et + 0.25 * It(W * 0.35, B * 0.35));
        nt =
          nt * (1 - ht) -
          we.depth * ht * (0.93 + 0.07 * It(W * 0.8 + 4, B * 0.8));
      }
      return (
        E < 0.3 &&
          !(Math.abs(W - Tt.x) < 0.9 && B > Tt.z0 - 0.3 && B < Tt.z1 + 0.3) &&
          (nt = 0),
        nt
      );
    };
  for (let W = 0; W < i.nz; W++)
    for (let B = 0; B < i.nx; B++) {
      const F = W * i.nx + B;
      _[F] = I(i.x0 + B * i.cell, i.z0 + W * i.cell, F);
    }
  const R = (W, B) => {
      const F = (W - i.x0) / i.cell,
        E = (B - i.z0) / i.cell;
      return F < 0 || E < 0 || F >= i.nx - 1 || E >= i.nz - 1
        ? P(W, B)
        : n(_, W, B, 0);
    },
    V = (W, B) =>
      W > St.xW + St.t / 2 + 0.05 &&
      W < St.xE - St.t / 2 - 0.05 &&
      B > r0.z1 + 0.05 &&
      B < St.z - 0.02;
  let L = [Nt.tree, Nt.cart].map((W) => ({
      o: W,
      kind: W.name,
      s0: W.s + W.bay.u0 - 6,
      s1: W.s + W.bay.u1 + 6,
      ease: 7,
      off: W.gap * 1.25,
    })),
    K = [{ o: Nt.log, s: Nt.log.s - Nt.log.r, h: Nt.log.r * 2 }];
  const j = (W) => (W <= 0 ? 0 : W >= 1 ? 1 : W * W * (3 - 2 * W)),
    O = (W, B) => W.off * j((B - W.s0) / W.ease) * j((W.s1 - B) / W.ease),
    J = (W, B) => {
      let F = 0;
      for (const E of L) {
        const [Y, et] = ze(E.o, W, B),
          nt = E.o.s + Y;
        if (nt < E.s0 - 1 || nt > E.s1 + 1 || Math.abs(et) > 4.5) continue;
        const it = O(E, nt);
        F = Math.max(
          F,
          (1 - $t(0.7, 1.3, Math.abs(et - it))) * $t(0.12, 0.45, Math.abs(it)),
        );
      }
      return F;
    },
    tt = (W, B) => Math.abs(W - Tt.x) < 0.8 && B > Tt.z0 && B < Tt.z1,
    st = (W, B) =>
      B < St.z + 0.2
        ? n(z, W, B, 99) < 0.72
          ? "stone"
          : "grass"
        : tt(W, B)
          ? "wood"
          : Ee(W, B) < -1.5 && S(W, B) > 1.3
            ? "grass"
            : S(W, B) < a(b(W, B)) + 0.15 || J(W, B) > 0.5
              ? "dirt"
              : "leaves",
    G = [
      [4.25, 64.4],
      [3.3, 71.3],
    ],
    q = [null, null];
  {
    const W = (lt) => {
        const ht = Math.min(s.n - 1, Math.round(lt / 0.25));
        return [+s.x[ht].toFixed(2), +s.z[ht].toFixed(2)];
      },
      B = Tt.z0 - 0.8,
      F = Tt.z1 + 1.1,
      E = u(Tt.x, B),
      Y = u(Tt.x, F),
      et = u(2.2, 78.9),
      nt = s.len - 0.1,
      it = (lt, ht) => {
        const yt = Math.max(1, Math.round((ht - lt) / 8.3));
        for (let Ft = 1; Ft <= yt; Ft++) {
          const Ut = lt + ((ht - lt) * Ft) / yt;
          (G.push(W(Ut)), q.push(Ut));
        }
      };
    (G.push(W(et)),
      q.push(et),
      it(et, E),
      (G[G.length - 1] = [Tt.x, +B.toFixed(2)]),
      G.push([Tt.x, +((B + F) / 2).toFixed(2)], [Tt.x, +F.toFixed(2)]),
      q.push((E + Y) / 2, Y),
      it(Y, nt),
      G.forEach((lt, ht) => {
        const yt = q[ht];
        if (yt != null)
          for (const Ft of L) {
            const Ut = O(Ft, yt);
            if (Math.abs(Ut) > 0.05) {
              const Lt = O0(yt);
              G[ht] = [c0(Lt.x + Lt.tz * Ut), c0(Lt.z - Lt.tx * Ut)];
            }
          }
      }));
  }
  const U = (W, B) => {
      let F = 0,
        E = 1e9;
      return (
        G.forEach((Y, et) => {
          const nt = Math.hypot(Y[0] - W, Y[1] - B);
          nt < E && ((E = nt), (F = et));
        }),
        F
      );
    },
    Z = (W) => {
      let B = 2,
        F = 1e9;
      return (
        q.forEach((E, Y) => {
          if (E == null) return;
          const et = Math.abs(E - W);
          et < F && ((F = et), (B = Y));
        }),
        B
      );
    },
    ot = (W) => {
      const B = be[W],
        F = B[0],
        E = B[1];
      return [F[0], F[1], +Math.atan2(E[0] - F[0], E[1] - F[1]).toFixed(3)];
    },
    $ = (W, B) => {
      let F = 1e9;
      for (let E = 0; E < s.n; E += 2)
        F = Math.min(F, (s.x[E] - W) ** 2 + (s.z[E] - B) ** 2);
      return Math.sqrt(F);
    },
    C = Object.entries(be)
      .map(([W, B]) => {
        const F = B[0],
          E = B[1],
          Y = B[B.length - 1],
          et = u(Y[0], Y[1]),
          nt = s,
          it = Math.min(nt.n - 1, Math.round(et / 0.25)),
          lt = (Y[0] - nt.x[it]) * nt.tz[it] - (Y[1] - nt.z[it]) * nt.tx[it];
        return {
          name: W,
          x: F[0],
          z: F[1],
          yaw: +Math.atan2(E[0] - F[0], E[1] - F[1]).toFixed(3),
          route: Z(et),
          side: lt > 0 ? "L" : "R",
          dist: +$(F[0], F[1]).toFixed(1),
          s: +et.toFixed(1),
          mouth: [Y[0], Y[1]],
          warn: [
            +(F[0] + (E[0] - F[0]) * 0.4).toFixed(2),
            +(F[1] + (E[1] - F[1]) * 0.4).toFixed(2),
          ],
        };
      })
      .sort((W, B) => W.s - B.s),
    T = (W, B, F) =>
      C.filter(
        (E) =>
          /^t/.test(E.name) && E.s >= W && E.s <= B && (!F || E.side === F),
      ),
    D = de[1],
    N = de[2],
    H = {
      e1L: T(D.s - 14, D.s + 22, "L")
        .sort((W, B) => Math.abs(W.s - D.s - 4) - Math.abs(B.s - D.s - 4))
        .slice(0, 3)
        .map((W) => ot(W.name)),
      e2Ahead: T(N.s + 4, N.s + 26)
        .slice(0, 2)
        .map((W) => ot(W.name)),
      e2Behind: T(N.s - 26, N.s - 4)
        .reverse()
        .slice(0, 2)
        .map((W) => ot(W.name)),
      e3W: [ot("e3a"), ot("e3c")],
      e3E: [ot("e3b"), ot("e3d")],
      e3Big: [ot("e3e")],
    },
    Q = {
      path: s,
      yardPath: o,
      stream: t,
      S: e,
      G: i,
      hw: r,
      pw: a,
      bankW: p,
      natural: P,
      sdAt: k,
      dPathAt: S,
      sPathAt: b,
      dStreamAt: A,
      heightAt: R,
      clearingSd: Ee,
      inYard: V,
      onBridge: tt,
      surfaceAt: st,
      houseSd: Ns,
      trodAt: J,
      route: G,
      routeS: q,
      routeIndexNear: U,
      routeIndexAtS: Z,
      spawns: H,
      sideSpawns: C,
      idxOf: v,
      grids: { dP: y, sP: w, dS: g, sdG: m, H: _, dY: z },
      at(W) {
        const B = Math.max(0, Math.min(s.n - 1, Math.round(W / 0.25)));
        return { x: s.x[B], z: s.z[B], tx: s.tx[B], tz: s.tz[B] };
      },
      obst: Nt,
      get dodges() {
        return L;
      },
      get jumps() {
        return K;
      },
      swerveAt(W) {
        let B = 0;
        for (const F of L) B += O(F, W);
        return B;
      },
      setDodges(W, B) {
        ((L = W), B && (K = B), (Q.ride = ma(Q)));
      },
    };
  return ((Q.ride = ma(Q)), Q);
}
