// assets__index-BcIwWgby 45 — math
// Lines 13331-13992 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function ic(s, o) {
  const t = [],
    u = [],
    e = [],
    r = [],
    a = [],
    p = ($, C) => s.heightAt($, C),
    i = Nt.tree,
    d = Nt.log,
    y = ($, C, T, D = 0) => {
      const [N, H] = He($, C, T);
      return at(N, D, H);
    },
    w = [],
    g = ($, C, T, D = !1, N = 0.12) => {
      for (let H = 0; H < $.length - 1; H++) {
        const Q = $[H],
          W = $[H + 1],
          B = Math.max(1, Math.ceil(Q.distanceTo(W) / N));
        for (let F = 0; F <= B; F++) {
          const E = (H + F / B) / ($.length - 1),
            Y = Q.clone().lerp(W, F / B);
          T.push([Y.x, Y.y, Y.z, C(E), D]);
        }
      }
    },
    z = ($) =>
      i.gap * 1.25 * xs(($ + 3.6 + 6.5) / 6.5) * xs((3 + 6.5 - $) / 6.5),
    x = ($, C, T = !1) => {
      const [D, N] = ze(i, $.x, $.z),
        H = z(D),
        Q = (N - H) * -i.gap - C;
      return T
        ? $.y > 1.9 || Q >= ($.y > 1.25 ? 0.24 : 0.5)
        : $.y - C > 2.3 || Q >= 0.62;
    },
    v = ($, C) => x($, C),
    n = ($, C) => x($, C, !0),
    l = at(i.ux, 0, i.uz),
    f = at(i.vx, 0, i.vz).multiplyScalar(i.gap),
    h = at(0, 1, 0),
    c = ($, C, T, D = 0.36, N = !1) =>
      u.push({
        pos: $,
        along: C,
        size: T,
        cell: Bt.twigs,
        out: at(o() - 0.5, 0.5, o() - 0.5).normalize(),
        shade: D,
        vertical: N,
      }),
    M = y(i, i.plate.u, i.plate.v),
    m = y(i, i.tip.u, i.tip.v),
    k = m.clone().sub(M).setY(0).normalize(),
    S = at(k.z, 0, -k.x),
    A = p(M.x, M.z),
    b = i.plate.r,
    P = 1.7,
    _ = at(M.x, A + P * 0.6, M.z),
    I = h.clone().applyAxisAngle(S, -0.2),
    R = k.clone().applyAxisAngle(S, -0.2);
  {
    const T = o() * 30,
      D = [],
      N = [],
      H = [],
      Q = [],
      W = Array.from({ length: 5 }, () => ({
        a: o() * F0,
        w: 0.4 + o() * 0.5,
        h: (o() - 0.35) * 0.35,
      })),
      B = (Y) => {
        let et = 1 + 0.1 * It(Math.cos(Y) * 1.7 + T, Math.sin(Y) * 1.7);
        for (const nt of W)
          et += nt.h * Math.max(0, 1 - Math.abs(ls(Y - nt.a)) / nt.w);
        return et - 0.12 * Math.pow(Math.max(0, -Math.sin(Y)), 3);
      },
      F = (Y, et, nt) => {
        const it = B(et),
          lt = Math.cos(et) * b * Y * it,
          ht = Math.sin(et) * P * Y * it,
          yt =
            0.09 * It(lt * 2.3 + T, ht * 2.3) +
            0.05 * It(lt * 6.1, ht * 6.1 + T) +
            0.03 * It(lt * 13, ht * 13 - T),
          Ft =
            nt > 0
              ? 0.2 * (1 - Y * Y) + yt + 0.05
              : -(0.3 * (1 - Y * Y) + yt * 1.8 + 0.12);
        return _.clone()
          .addScaledVector(S, lt)
          .addScaledVector(I, ht)
          .addScaledVector(R, Ft * (Y < 0.999 ? 1 : 0.35));
      };
    for (const Y of [1, -1]) {
      const et = D.length / 3;
      for (let nt = 0; nt <= 10; nt++)
        for (let it = 0; it <= 44; it++) {
          const lt = nt / 10,
            ht = (it / 44) * F0,
            yt = F(lt, ht, Y);
          (D.push(yt.x, yt.y, yt.z),
            N.push(
              Math.cos(ht) * b * lt * 1.3,
              Math.sin(ht) * P * lt * 1.3 + _.y,
            ),
            H.push(0.78, 0.15 + 0.35 * lt * lt, 0.4, 0));
        }
      for (let nt = 0; nt < 10; nt++)
        for (let it = 0; it < 44; it++) {
          const lt = et + nt * 45 + it,
            ht = lt + 44 + 1;
          Y > 0
            ? Q.push(lt, ht, lt + 1, lt + 1, ht, ht + 1)
            : Q.push(lt, lt + 1, ht, lt + 1, ht + 1, ht);
        }
    }
    for (let nt = 0; nt < 44; nt++) {
      const it = 450 + nt,
        lt = 945 + nt;
      Q.push(it, lt, it + 1, it + 1, lt, lt + 1);
    }
    const E = new Rt();
    (E.setAttribute("position", new xt(D, 3)),
      E.setAttribute("uv", new xt(N, 2)),
      E.setAttribute("aMask", new xt(H, 4)),
      E.setIndex(Q),
      E.computeVertexNormals(),
      e.push(E));
    for (let Y = -b * 0.85; Y <= b * 0.86; Y += 0.5) {
      const et = _.clone().addScaledVector(S, Y);
      (a.push({ x: et.x, z: et.z, r: 0.45, obst: "tree" }),
        r.push({
          x0: et.x - 0.3,
          x1: et.x + 0.3,
          z0: et.z - 0.3,
          z1: et.z + 0.3,
          y0: 0,
          y1: _.y + P * 0.75,
          obst: "tree",
        }));
    }
    for (let Y = 0; Y <= 10; Y++) {
      const et = (Y / 10) * F0,
        nt = F(1, et, 1);
      w.push([nt.x, nt.y, nt.z, 0.25, !1]);
    }
    w.push([_.x, _.y, _.z, b, !1]);
    for (let Y = 0, et = 15; Y < et; Y++) {
      const nt = (Y / et) * F0 + (o() - 0.5) * 0.35,
        it = Y % 3 === 0,
        lt = it ? 0.08 + o() * 0.07 : 0.03 + o() * 0.04,
        ht = it ? 0.15 + o() * 0.25 : 0.3 + o() * 0.5,
        yt = _.clone()
          .addScaledVector(S, Math.cos(nt) * b * ht)
          .addScaledVector(I, Math.sin(nt) * P * ht)
          .addScaledVector(R, it ? 0.28 : 0.2),
        Ft = S.clone()
          .multiplyScalar(Math.cos(nt))
          .addScaledVector(I, Math.sin(nt))
          .addScaledVector(R, 0.15 + o() * 0.35)
          .normalize(),
        Ut = Le(
          yt,
          Ft,
          b * (it ? 1.05 + o() * 0.5 : 0.7 + o() * 0.7),
          lt,
          lt * 0.3,
          o,
          null,
          { steps: 6, crook: 0.32, sag: 0.3, seg: it ? 7 : 5 },
        );
      Ut &&
        (t.push(xe(Ut.geo, () => j0(0.1, 0.55))), g(Ut.pts, Ut.rad, w, !it));
    }
    for (let Y = 0; Y < 34; Y++) {
      const et = o() * F0,
        nt = 0.95 + o() * 0.15,
        it = Y % 4 === 0,
        lt = _.clone()
          .addScaledVector(S, Math.cos(et) * b * (it ? nt * 0.6 : nt))
          .addScaledVector(I, Math.sin(et) * P * (it ? nt * 0.6 : nt))
          .addScaledVector(R, it ? 0.25 : 0),
        ht = S.clone()
          .multiplyScalar(Math.cos(et))
          .addScaledVector(I, Math.sin(et))
          .addScaledVector(R, (o() - 0.3) * 0.7)
          .normalize();
      c(
        lt,
        ht
          .clone()
          .add(at(0, -0.3, 0))
          .normalize(),
        0.5 + o() * 0.45,
        0.24 + o() * 0.1,
        !0,
      );
    }
  }
  const V = 0.6,
    L = 0.46,
    K = 0.32 + L,
    j = [];
  {
    const $ = _.clone().addScaledVector(R, 0.05),
      C = at(m.x, K, m.z);
    for (let T = 0; T <= 10; T++) {
      const D = T / 10,
        N = $.clone().lerp(C, D);
      ((N.y += Math.sin(Math.PI * D) * 0.12 - D * (1 - D) * 0.12),
        N.addScaledVector(S, Math.sin(Math.PI * D) * 0.16),
        j.push(N));
    }
  }
  const O = ($) =>
      (V + (L - V) * Math.pow($, 0.8)) *
      (1 + 0.42 * Math.exp((-$ * 6.2) / 0.6)),
    J = Cs(j, O, o, {
      seg: 32,
      step: 0.12,
      ridgeA: 0.12,
      endBreak: !0,
      moss: 0.6,
      teeth: 1,
      bare: 0.9,
      bareDir: l.clone().negate().addScaledVector(h, 0.6).normalize(),
    });
  t.push(J.geo);
  for (let $ = 0; $ <= J.n; $++) {
    const C = $ / J.n,
      T = J.C[$];
    w.push([T.x, T.y, T.z, O(C) * 1.13, !1]);
  }
  for (let $ = 0; $ <= J.n; $ += 3) {
    const C = $ / J.n,
      T = J.C[$];
    a.push({ x: T.x, z: T.z, r: O(C) + 0.05, obst: "tree" });
  }
  for (let $ = 0; $ < J.n; $ += 4) {
    const C = J.C[$],
      T = J.C[Math.min(J.n, $ + 4)],
      D = O($ / J.n) * 0.72;
    r.push({
      x0: Math.min(C.x, T.x) - D * 0.6,
      x1: Math.max(C.x, T.x) + D * 0.6,
      z0: Math.min(C.z, T.z) - D * 0.6,
      z1: Math.max(C.z, T.z) + D * 0.6,
      y0: Math.max(0, Math.min(C.y, T.y) - D),
      y1: Math.max(C.y, T.y) + D,
      obst: "tree",
    });
  }
  const tt = ($, C) => {
    const T = Math.min(J.n, Math.round($ * J.n));
    return J.C[T].clone().addScaledVector(C, O($) * 0.82);
  };
  for (let $ = 0; $ < 6; $++) {
    const C = 0.18 + $ * 0.1 + o() * 0.05,
      T = at(o() - 0.5, 0.55 + o() * 0.6, o() - 0.5).normalize(),
      D = Le(
        tt(C, T),
        T.clone()
          .add(at((o() - 0.5) * 0.4, 0.2, (o() - 0.5) * 0.4))
          .normalize(),
        0.3 + o() * 0.6,
        0.07 + o() * 0.05,
        0.05,
        o,
        v,
        { steps: 3, crook: 0.15, seg: 8 },
      );
    D && (t.push(xe(D.geo, () => j0(0.5, 0.06))), g(D.pts, D.rad, w));
  }
  {
    const $ = [],
      C = [
        { t: 0.86, d: [0.8, -0.55, -0.12], L: 4.4, r0: 0.21, sag: 0.35 },
        { t: 0.93, d: [-0.85, -0.45, -0.1], L: 3.8, r0: 0.19, sag: 0.35 },
        { t: 0.9, d: [0.2, -0.2, 0.95], L: 4.4, r0: 0.21, sag: -0.04 },
        { t: 0.97, d: [-0.5, -0.15, 0.8], L: 3.6, r0: 0.17, sag: -0.03 },
        { t: 0.88, d: [0.55, -0.35, 0.75], L: 3.8, r0: 0.15, sag: -0.02 },
        { t: 0.72, d: [-0.2, -0.55, 0.8], L: 3.4, r0: 0.14, sag: -0.02 },
        { t: 0.8, d: [0.4, -0.65, 0.55], L: 3.2, r0: 0.16, sag: 0.06 },
        { t: 0.83, d: [-0.45, -0.6, 0.55], L: 2.8, r0: 0.14, sag: 0.06 },
        { t: 0.99, d: [0.9, -0.1, 0.15], L: 3, r0: 0.13, sag: 0.12 },
        { t: 0.95, d: [0.1, -0.15, -1], L: 0.85, r0: 0.16, sag: 0, prop: !0 },
        {
          t: 0.76,
          d: [-0.1, -0.3, -0.95],
          L: 0.95,
          r0: 0.13,
          sag: 0,
          prop: !0,
        },
      ],
      T = ([N, H, Q]) =>
        l
          .clone()
          .multiplyScalar(N)
          .addScaledVector(f, H)
          .addScaledVector(h, Q)
          .normalize(),
      D = (N, H, Q, W, B, F, E, Y) =>
        Le(N, H, Q, W, B, o, v, {
          steps: E,
          crook: 0.17,
          sag: F,
          ground: p,
          seg: Y,
        });
    for (const N of C) {
      const H = T(N.d),
        Q = H.clone()
          .setY(N.prop ? -1 : Math.max(0, H.y) * 0.6)
          .normalize(),
        W = D(
          tt(N.t, Q),
          H,
          N.L,
          N.r0,
          N.r0 * 0.38,
          N.sag,
          N.prop ? 3 : 8,
          N.r0 > 0.15 ? 10 : 8,
        );
      if (W) {
        (t.push(xe(W.geo, (B, F) => j0(0.3 + 0.3 * Math.max(0, 1 - F), 0.06))),
          g(W.pts, W.rad, w));
        for (let B = 1; B < W.pts.length; B += 2) {
          const F = W.pts[B];
          F.y < 1.1 &&
            a.push({
              x: F.x,
              z: F.z,
              r: W.rad(B / (W.pts.length - 1)) + 0.18,
              obst: "tree",
            });
        }
        if (!N.prop) {
          for (let B = 0, F = 3 + Math.floor(o() * 2); B < F; B++) {
            const E = 1 + Math.floor(o() * (W.pts.length - 1)),
              Y = W.pts[Math.min(W.pts.length - 1, E)],
              et = H.clone()
                .add(
                  at(o() - 0.5, o() * 0.9 - 0.15, o() - 0.5).multiplyScalar(
                    1.3,
                  ),
                )
                .normalize(),
              nt = D(Y, et, 1 + o() * 1.1, 0.065, 0.025, 0.1, 5, 6);
            nt &&
              (t.push(xe(nt.geo, () => j0(0.25, 0.05))),
              g(nt.pts, nt.rad, w),
              $.push(
                nt.pts[nt.pts.length - 1].clone(),
                nt.pts[Math.max(0, nt.pts.length - 3)].clone(),
              ));
          }
          $.push(W.pts[W.pts.length - 1].clone());
        }
      }
    }
    {
      const H = [
          tt(0.975, h.clone().addScaledVector(f, 0.3).normalize()),
          y(i, i.tip.u + 0.4, (i.tip.v - 0.25) * i.gap, 3.9),
          y(i, i.tip.u + 1.6, (i.gap * i.tip.v + 3) * i.gap, 3),
        ],
        Q = [];
      for (let E = 0; E <= 12; E++) {
        const Y = E / 12,
          et = (1 - Y) * (1 - Y),
          nt = 2 * (1 - Y) * Y,
          it = Y * Y,
          lt = H[0]
            .clone()
            .multiplyScalar(et)
            .addScaledVector(H[1], nt)
            .addScaledVector(H[2], it);
        (E > 0 &&
          E < 12 &&
          lt.add(at((o() - 0.5) * 0.14, (o() - 0.5) * 0.1, (o() - 0.5) * 0.14)),
          Q.push(lt));
      }
      const W = (E) => (0.17 - 0.12 * E) * (1 + 0.07 * Math.sin(E * 13));
      let B = Q.length;
      for (let E = 1; E < Q.length; E++)
        if (!(
          Q[E].y - W(E / (Q.length - 1)) > 2.32 ||
          x(Q[E], W(E / (Q.length - 1)))
        )) {
          B = E;
          break;
        }
      const F = Q.slice(0, Math.max(2, B));
      if (F.length > 3) {
        const E = Vt(F, (Y) => W((Y * (F.length - 1)) / 12) + 0.004, 10, {
          cap: !0,
        });
        (t.push(xe(E, () => j0(0.4, 0.06))),
          g(F, (Y) => W((Y * (F.length - 1)) / 12), w));
        for (const Y of [
          Math.floor(F.length * 0.55),
          Math.floor(F.length * 0.75),
          F.length - 1,
        ])
          $.push(F[Y].clone());
        for (let Y = 0; Y < 2; Y++) {
          const et = F[3 + Y * 3],
            nt = Le(
              et,
              at(o() - 0.5, 0.8, o() - 0.5).normalize(),
              0.8 + o() * 0.8,
              0.05,
              0.02,
              o,
              v,
              { steps: 4, crook: 0.3, seg: 6 },
            );
          nt &&
            (t.push(xe(nt.geo, () => j0(0.3, 0.05))),
            g(nt.pts, nt.rad, w),
            $.push(nt.pts[nt.pts.length - 1].clone()));
        }
      }
    }
    for (const N of $) {
      for (let H = 0, Q = 2 + Math.floor(o() * 3); H < Q; H++) {
        const W = Le(
          N,
          at(o() - 0.5, o() * 0.8 - 0.15, o() - 0.5).normalize(),
          0.35 + o() * 0.55,
          0.018,
          0.005,
          o,
          n,
          { steps: 4, crook: 0.42, seg: 4, snap: !1 },
        );
        W && (t.push(xe(W.geo, () => j0(0.1, 0))), g(W.pts, W.rad, w, !0));
      }
      for (let H = 0; H < 5; H++) {
        const Q = N.clone().add(
          at((o() - 0.5) * 0.8, (o() - 0.35) * 0.6, (o() - 0.5) * 0.8),
        );
        !n(Q, 0.4) ||
          Q.y < p(Q.x, Q.z) + 0.2 ||
          c(
            Q,
            at(o() - 0.5, o() * 0.7 - 0.15, o() - 0.5).normalize(),
            0.65 + o() * 0.6,
            0.28 + o() * 0.14,
          );
      }
    }
    for (let N = 0; N < 6; N++) {
      const H = -1.9 + N * 0.85 + (o() - 0.5) * 0.4,
        Q = z(H) * i.gap,
        W = y(i, H, (Q - 1.32 - o() * 0.3) * i.gap, 1.22 + o() * 0.5),
        B = f
          .clone()
          .add(at((o() - 0.5) * 0.25, (o() - 0.35) * 0.3, 0))
          .addScaledVector(l, (o() - 0.5) * 0.45)
          .normalize(),
        F = Le(W, B, 0.9 + o() * 0.3, 0.016, 0.004, o, n, {
          steps: 5,
          crook: 0.22,
          seg: 4,
          snap: !1,
        });
      F &&
        (t.push(xe(F.geo, () => j0(0.08, 0))),
        g(F.pts, F.rad, w, !0),
        c(
          F.pts[Math.max(1, F.pts.length - 2)].clone(),
          B,
          0.55 + o() * 0.25,
          0.3,
        ));
      const E = Le(
        W,
        B.clone()
          .negate()
          .add(at(0, -0.4, 0))
          .normalize(),
        1.2,
        0.012,
        0.04,
        o,
        v,
        { steps: 4, crook: 0.2, ground: p, seg: 5, snap: !1 },
      );
      E && (t.push(xe(E.geo, () => j0(0.15, 0))), g(E.pts, E.rad, w));
    }
    for (let N = Math.floor(J.n * 0.7); N <= J.n; N += 2) {
      const H = J.C[N];
      a.push({ x: H.x, z: H.z, r: O(N / J.n) + 0.12, obst: "tree" });
    }
    for (const [N, H] of [
      [0.6, -1.4],
      [-1.4, -1.5],
      [1.6, -2],
      [-2.4, -2.1],
      [-0.2, -0.7],
    ]) {
      const Q = y(i, N, H * i.gap);
      a.push({ x: Q.x, z: Q.z, r: 0.42, obst: "tree" });
    }
  }
  const st = ys.gRoot,
    G = {
      name: "gRoot",
      x: st[0][0],
      z: st[0][1],
      yaw: +Math.atan2(st[1][0] - st[0][0], st[1][1] - st[0][1]).toFixed(3),
      s: i.s,
      route: s.routeIndexAtS(i.s),
      side: i.gap > 0 ? "R" : "L",
      tree: [+_.x.toFixed(2), +_.z.toFixed(2), b],
      out: st[st.length - 1].slice(),
      plate: !0,
    },
    q = {
      o: i,
      kind: "tree",
      ...Ua(
        i,
        w,
        i.gap * 1.25,
        a.filter(($) => $.obst === "tree"),
      ),
    };
  {
    let $ = 0,
      C = 0,
      T = 0;
    for (const [D, N, H, , Q] of w) {
      if (Q || N > 2) continue;
      const [W, B] = ze(i, D, H);
      Math.abs(B) > 3 || Math.abs(W) > 4 || (($ += D), (C += H), T++);
    }
    q.at = [$ / Math.max(1, T), C / Math.max(1, T)];
  }
  const U = [],
    Z = [];
  let ot = null;
  {
    const $ = (d.ang * Math.PI) / 180,
      C = Math.cos($),
      T = Math.sin($),
      D = 3.1,
      N = d.r,
      H = [];
    for (let F = 0; F <= 12; F++) {
      const E = F / 12,
        Y = -D + 2 * D * E,
        et = y(d, C * Y, T * Y);
      (et.addScaledVector(
        at(d.ux, 0, d.uz),
        0.16 * Math.sin(Math.PI * E) + 0.04 * Math.sin(E * 9.4),
      ),
        (et.y =
          N +
          Math.max(0, Math.min(0.12, p(et.x, et.z))) +
          0.015 * Math.sin(E * 7)),
        H.push(et));
    }
    const Q = Cs(
      H,
      (F) => N * (1.06 - 0.16 * F) * (1 + 0.06 * Math.sin(F * 11)),
      o,
      {
        seg: 22,
        step: 0.12,
        ridgeA: 0.08,
        endBreak: !0,
        startBreak: !0,
        moss: 0.7,
        teeth: 0.5,
        bare: 0.8,
        bareDir: at(-d.ux, 0.7, -d.uz).normalize(),
      },
    );
    for (const F of [-2.35, -1.7, 1.55, 2.45]) {
      const E = y(d, C * F, T * F),
        Y = at(d.ux * 0.55, 1, d.uz * 0.55).normalize();
      Z.push([
        E.x + Y.x * N * 0.9,
        N + Y.y * N * 0.92 - 0.02,
        E.z + Y.z * N * 0.9,
      ]);
    }
    t.push(Q.geo);
    for (const [F, E, Y] of [
      [2.15, 0.6, 0.32],
      [-2.5, -0.9, 0.42],
      [1.2, 2.6, 0.22],
    ]) {
      const et = y(d, C * F, T * F, N),
        nt = at(Math.cos(E) * 0.4, 0.9, Math.sin(E) * 0.4).normalize(),
        it = Le(
          et.clone().addScaledVector(nt, N * 0.7),
          nt,
          Y,
          0.045,
          0.03,
          o,
          null,
          { steps: 3, crook: 0.2, seg: 6 },
        );
      it && t.push(xe(it.geo, () => j0(0.4, 0.1)));
    }
    {
      const F = y(d, C * (D + 0.9) + 0.6, T * (D + 0.9), 0.16),
        E = y(d, C * (D + 2.3) + 1.4, T * (D + 2.1), 0.15);
      ((F.y = p(F.x, F.z) + 0.14), (E.y = p(E.x, E.z) + 0.13));
      const Y = Cs([F, E], () => 0.15, o, {
        seg: 14,
        step: 0.12,
        ridgeA: 0.06,
        endBreak: !0,
        startBreak: !0,
        moss: 0.6,
        teeth: 0.4,
      });
      t.push(Y.geo);
    }
    let W = 0;
    {
      const F = Q.geo.attributes.position;
      for (let E = 0; E < F.count; E++) {
        const [Y, et] = ze(d, F.getX(E), F.getZ(E));
        Math.abs(et) < 0.5 && (W = Math.max(W, F.getY(E)));
      }
    }
    const B = -N / Math.max(0.2, Math.sin($));
    ot = {
      o: d,
      s: +(d.s + B).toFixed(2),
      h: +W.toFixed(2),
      at: [+d.x.toFixed(2), +d.z.toFixed(2)],
    };
    for (let F = 0; F <= Q.n; F++) {
      const E = Q.C[F];
      U.push([E.x, E.y, E.z, N, !1]);
    }
  }
  return {
    bark: t,
    cards: u,
    earth: e,
    colliders: r,
    circles: a,
    solids: { tree: w, log: U },
    lurk: G,
    dodge: q,
    jump: ot,
    mush: Z,
    plate: { x: _.x, z: _.z, r: b },
  };
}
