// assets/district-BhfbivMT 10 — part
// Lines 2687-3050 of readable/assets/district-BhfbivMT.pretty.js (statement-aligned).
function Lt(n, t) {
  const e = yo(n),
    r = e.length,
    o = [],
    l = [];
  for (let k = 0; k < r; k++) {
    const P = Et(n, e[k]),
      W = new Array(ne),
      q = new Array(ne);
    for (let Y = 0; Y < Oe; Y++) W[Y] = new z(P[Y][0], P[Y][1], e[k]);
    for (let Y = Oe; Y < ne; Y++) {
      const $ = P[ne - 1 - Y];
      W[Y] = new z(-$[0], $[1], e[k]);
    }
    q[0] = 0;
    for (let Y = 1; Y < ne; Y++) q[Y] = q[Y - 1] + W[Y].distanceTo(W[Y - 1]);
    (o.push(W), l.push(q));
  }
  const s = () => {
    const k = o.map((Y) => Y.map(() => new z())),
      P = new z(),
      W = new z(),
      q = new z();
    for (let Y = 0; Y < r - 1; Y++)
      for (let $ = 0; $ < ne - 1; $++)
        (P.subVectors(o[Y + 1][$ + 1], o[Y][$]),
          W.subVectors(o[Y][$ + 1], o[Y + 1][$]),
          q.crossVectors(W, P),
          k[Y][$].add(q),
          k[Y + 1][$].add(q),
          k[Y][$ + 1].add(q),
          k[Y + 1][$ + 1].add(q));
    for (const Y of k)
      for (const $ of Y)
        ($.lengthSq() < 1e-14 && $.set(0, 1, 0), $.normalize());
    return k;
  };
  let c = s();
  if (t.dents && t.dents.length) {
    for (let k = 0; k < r; k++)
      for (let P = 0; P < ne; P++) {
        const W = o[k][P];
        let q = 0;
        for (const Y of t.dents) {
          const $ =
            (W.x - Y.x) ** 2 / (Y.rx * Y.rx) +
            (W.y - Y.y) ** 2 / (Y.ry * Y.ry) +
            (W.z - Y.z) ** 2 / (Y.rz * Y.rz);
          $ < 1 && (q += Y.depth * (1 - $) * (1 - $));
        }
        q && W.addScaledVector(c[k][P], -q);
      }
    c = s();
  }
  const a = [],
    h = new z(),
    f = new z(),
    y = new z();
  for (let k = 0; k < r - 1; k++) {
    const P = [],
      W = (e[k] + e[k + 1]) / 2,
      q = ie(n.g(W));
    for (let Y = 0; Y < ne - 1; Y++) {
      const $ = Y < Oe - 1 ? 1 : -1,
        i0 = $ > 0 ? Y : ne - 2 - Y,
        o0 = vo(n, W, i0, $, q);
      (h.subVectors(o[k + 1][Y + 1], o[k][Y]),
        f.subVectors(o[k][Y + 1], o[k + 1][Y]),
        (o0.deg = y.crossVectors(f, h).length() < 4e-6),
        (o0.jh = i0),
        (o0.s = $),
        (o0.zc = W),
        (o0.g = q),
        t.burnt && o0.mat === "glass" && (o0.mat = null),
        o0.mat === "glass" &&
          o0.pane &&
          t.shattered &&
          t.shattered.has(o0.pane) &&
          (o0.mat = null),
        (o0.solid = !o0.deg && o0.mat !== null && o0.mat !== "glass"));
      const C0 = n.cabin && W > n.cabin[0] && W < n.cabin[1];
      ((o0.skin =
        t.inside &&
        o0.solid &&
        i0 > 0 &&
        (o0.part !== "body" ||
          (C0 && (i0 >= 6 || n.fullSkin)) ||
          (i0 >= 6 && q > 0.02))),
        P.push(o0));
    }
    a.push(P);
  }
  const m = (k, P) =>
      k >= 0 && k < r - 1 && P >= 0 && P < ne - 1 ? a[k][P] : null,
    b = n.gap ?? 0.0032,
    v = new Map(),
    p = (k, P) =>
      new z()
        .add(o[k][P])
        .add(o[k + 1][P])
        .add(o[k][P + 1])
        .add(o[k + 1][P + 1])
        .multiplyScalar(0.25);
  for (let k = 0; k < r; k++)
    for (let P = 0; P < ne; P++) {
      const W = [m(k - 1, P - 1), m(k - 1, P), m(k, P - 1), m(k, P)]
          .map((Y, $) =>
            Y ? { c: Y, i: k - 1 + ($ >> 1), j: P - 1 + ($ & 1) } : null,
          )
          .filter(Boolean),
        q = new Set(W.map((Y) => Y.c.part));
      if (!(q.size < 2))
        for (const Y of q) {
          const $ = new z();
          for (const i0 of W)
            i0.c.part === Y && !i0.c.deg && $.add(p(i0.i, i0.j).sub(o[k][P]));
          $.lengthSq() < 1e-12 ||
            ($.addScaledVector(c[k][P], -$.dot(c[k][P]))
              .normalize()
              .multiplyScalar(b),
            v.has(Y) || v.set(Y, new Map()),
            v.get(Y).set(k * ne + P, $));
        }
    }
  const d = n.tSide ?? 0.06,
    i = n.tTop ?? 0.03,
    u = (k, P, W) => {
      const q = o[P][W].clone(),
        Y = v.get(k)?.get(P * ne + W);
      return (Y && q.add(Y), q);
    },
    x = (k, P, W) => {
      const q = W < Oe ? W : ne - 1 - W;
      return u(k, P, W).addScaledVector(c[P][W], -(q <= 6 ? d : i));
    },
    w = (k, P) => [e[k], l[k][P]],
    _ = (k, P) => oe(k, 0.7 + 0.3 * ao(0.12, 0.8, P)),
    M = [
      [0, 0, 0, 1, -1, 0],
      [0, 1, 1, 1, 0, 1],
      [1, 1, 1, 0, 1, 0],
      [1, 0, 0, 0, 0, -1],
    ];
  for (let k = 0; k < r - 1; k++)
    for (let P = 0; P < ne - 1; P++) {
      const W = a[k][P];
      if (
        !W.deg &&
        W.mat === null &&
        W.jh === 7 &&
        !t.burnt &&
        W.pane &&
        t.shattered.has(W.pane)
      ) {
        const r0 = W.s > 0 ? P : P + 1,
          O0 = W.s > 0 ? P + 1 : P,
          q0 = o[k][r0],
          B0 = o[k + 1][r0],
          we = t.rng() * 0.7,
          Se = q0
            .clone()
            .lerp(B0, 0.2 + t.rng() * 0.6)
            .lerp(o[k][O0].clone().lerp(o[k + 1][O0], 0.5), 0.15 + we),
          ae = t.sink(W.part),
          fe = de(3, 0.2, 0.1),
          Pe = de(3, 0.8, 0.1),
          He = de(3, 0.5, 0.6);
        (ae.tri("glass", q0, B0, Se, fe, Pe, He, [1, 1, 1]),
          ae.tri("glass", q0, Se, B0, fe, He, Pe, [1, 1, 1]));
      }
      if (W.deg || W.mat === null) continue;
      const q = t.sink(W.part),
        Y = t.K(W.mat),
        $ = u(W.part, k, P),
        i0 = u(W.part, k, P + 1),
        o0 = u(W.part, k + 1, P + 1),
        C0 = u(W.part, k + 1, P);
      if (W.mat === "glass") {
        const r0 = (ae, fe) =>
            de(t.paneTile(W.pane), ...t.paneUV(W.pane, ae, fe)),
          O0 = r0($, P),
          q0 = r0(i0, P + 1),
          B0 = r0(o0, P + 1),
          we = r0(C0, P),
          Se = [1, 1, 1];
        (q.quad(Y, $, i0, o0, C0, O0, q0, B0, we, Se),
          q.quad(Y, $, C0, o0, i0, O0, we, B0, q0, Se));
        continue;
      }
      const Y0 = t.cellColor(W);
      if (
        (q.quad(
          Y,
          $,
          i0,
          o0,
          C0,
          w(k, P),
          w(k, P + 1),
          w(k + 1, P + 1),
          w(k + 1, P),
          _(Y0, $.y),
          _(Y0, i0.y),
          _(Y0, o0.y),
          _(Y0, C0.y),
        ),
        !W.skin)
      ) {
        const r0 = [$, i0, o0, C0],
          O0 = [
            [k, P],
            [k, P + 1],
            [k + 1, P + 1],
            [k + 1, P],
          ];
        for (let q0 = 0; q0 < 4; q0++) {
          const B0 = m(k + M[q0][4], P + M[q0][5]);
          if (
            W.part === "body" ||
            !B0 ||
            B0.part === W.part ||
            (B0.deg && B0.mat === null)
          )
            continue;
          const we = (q0 + 1) % 4,
            [Se, ae] = O0[q0],
            [fe, Pe] = O0[we],
            He = r0[q0].clone().addScaledVector(c[Se][ae], -0.022),
            Ie = r0[we].clone().addScaledVector(c[fe][Pe], -0.022);
          q.quad(
            t.burnt ? Y : "trim",
            r0[q0],
            He,
            Ie,
            r0[we],
            [0, 0],
            [0, 0.02],
            [0.3, 0.02],
            [0.3, 0],
            t.burnt ? [0.04, 0.035, 0.03] : [0.01, 0.01, 0.01],
          );
        }
        continue;
      }
      const H0 = x(W.part, k, P),
        t0 = x(W.part, k, P + 1),
        he = x(W.part, k + 1, P + 1),
        ce = x(W.part, k + 1, P),
        Q0 = t.skin(W),
        Ge = t.K(Q0.mat);
      q.quad(
        Ge,
        H0,
        ce,
        he,
        t0,
        w(k, P),
        w(k + 1, P),
        w(k + 1, P + 1),
        w(k, P + 1),
        Q0.col,
      );
      const s0 = [$, i0, o0, C0],
        be = [H0, t0, he, ce];
      for (let r0 = 0; r0 < 4; r0++) {
        const O0 = m(k + M[r0][4], P + M[r0][5]);
        if (
          !O0 ||
          (O0.part === W.part && (O0.solid || (O0.deg && O0.mat !== null)))
        )
          continue;
        const q0 = r0,
          B0 = (r0 + 1) % 4,
          we = s0[q0],
          Se = s0[B0],
          ae = be[q0],
          fe = be[B0],
          Pe = t.jambColor(W, Y0);
        q.quad(Y, we, ae, fe, Se, [0, 0], [0, 0.05], [0.3, 0.05], [0.3, 0], Pe);
      }
    }
  const C = (k, P, W, q, Y) => {
      const $ = [];
      for (let Y0 = 0; Y0 < ne; Y0++) {
        const H0 = o[k][Y0],
          t0 = $[$.length - 1];
        (!t0 || Math.hypot(t0.x - H0.x, t0.y - H0.y) > 1e-4) &&
          $.push(new ye(H0.x, H0.y));
      }
      const i0 = new je($);
      for (const Y0 of W || []) i0.holes.push(Y0);
      const o0 = e[k];
      let C0;
      (W && W.length
        ? ((C0 = new at(i0, { depth: i, bevelEnabled: !1 })),
          C0.translate(0, 0, P ? o0 - i : o0))
        : ((C0 = new wn(i0)), P || C0.rotateY(Math.PI), C0.translate(0, 0, o0)),
        U(t.sink("body"), q, C0, null, Y),
        C0.dispose());
    },
    T = t.burnt ? "burnt" : "trim",
    N = t.burnt ? [0.05, 0.045, 0.04] : [0.02, 0.02, 0.021];
  for (const k of n.arches)
    for (const P of [1, -1]) {
      const W = t.sink("body"),
        q = 10,
        Y = P * (n.hw(k.z) - n.tuck - 0.004),
        $ = P * (n.hw(k.z) - (n.wellDepth ?? 0.36)),
        i0 = k.r - 0.006,
        o0 = (Y0, H0) =>
          new z(
            Y0,
            k.y + i0 * Math.sin((Math.PI * H0) / q),
            k.z + i0 * Math.cos((Math.PI * H0) / q),
          ),
        C0 = new z(0, k.y, k.z);
      for (let Y0 = 0; Y0 < q; Y0++) {
        const H0 = o0(Y, Y0),
          t0 = o0(Y, Y0 + 1),
          he = o0($, Y0 + 1),
          ce = o0($, Y0),
          Q0 = new z().subVectors(t0, H0).cross(new z().subVectors(ce, H0)),
          Ge = new z(0, C0.y - H0.y, C0.z - H0.z);
        Q0.dot(Ge) > 0
          ? W.quad(
              T,
              H0,
              t0,
              he,
              ce,
              [H0.z, H0.y],
              [t0.z, t0.y],
              [he.z, he.y],
              [ce.z, ce.y],
              N,
            )
          : W.quad(
              T,
              H0,
              ce,
              he,
              t0,
              [H0.z, H0.y],
              [ce.z, ce.y],
              [he.z, he.y],
              [t0.z, t0.y],
              N,
            );
        const s0 = new z($, k.y, k.z),
          be = o0($, Y0),
          r0 = o0($, Y0 + 1);
        new z().subVectors(be, s0).cross(new z().subVectors(r0, s0)).x * P > 0
          ? W.tri(T, s0, be, r0, [s0.z, s0.y], [be.z, be.y], [r0.z, r0.y], N)
          : W.tri(T, s0, r0, be, [s0.z, s0.y], [r0.z, r0.y], [be.z, be.y], N);
      }
    }
  const K = t.K(n.capMat ?? "paint"),
    O = t.cellColor({ mat: n.capMat ?? "paint", part: "body", jh: 3, zc: 0 });
  return (
    C(r - 1, !0, n.frontHoles, K, oe(O, 0.9)),
    C(0, !1, n.backHoles, K, oe(O, 0.9)),
    { st: e, P: o, N: c, cells: a }
  );
}
