// assets__akane-CN21eJhw 08 — math
// Lines 2496-2845 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function ko(e, t, a = {}) {
  const o = a.res ?? 0.0011,
    r = ze(R0, [-0.085, -0.1, -0.105], [0.085, 0.125, 0.095], o, {
      smooth: 1,
      project: 3,
    }),
    i = new e.BufferGeometry();
  (i.setAttribute("position", new e.BufferAttribute(r.positions, 3)),
    i.setAttribute("normal", new e.BufferAttribute(r.normals, 3)),
    i.setIndex(new e.BufferAttribute(r.indices, 1)),
    i.computeBoundingSphere());
  let n = a.faceRes ?? 2048;
  const s = (N) => {
      const Y = document.createElement("canvas");
      return ((Y.width = Y.height = N), Y);
    },
    u = (N) => {
      const Y = new e.CanvasTexture(N);
      return (
        (Y.colorSpace = e.NoColorSpace),
        (Y.anisotropy = 8),
        (Y.premultiplyAlpha = !0),
        (Y.minFilter = e.LinearMipmapLinearFilter),
        (Y.magFilter = e.LinearFilter),
        Y
      );
    },
    l = (N) => {
      const Y = s(N),
        o0 = s(N),
        i0 = s(N / 2),
        u0 = {
          faceTex: u(Y),
          overTex: u(o0),
          dataTex: u(i0),
          key: "",
          ctx: {
            face: Y.getContext("2d"),
            over: o0.getContext("2d"),
            data: i0.getContext("2d"),
          },
        };
      return ((u0.dataTex.premultiplyAlpha = !0), u0);
    },
    v = new Map([[n, l(n)]]);
  let g = v.get(n);
  const m = t.face({
      faceTex: g.faceTex,
      dataTex: g.dataTex,
      rect: U0,
      headC: xo,
    }),
    y = t.withOutline(i, m, "#6e4452", { lineW: 1 }),
    k = y.userData.mesh,
    G = new e.Mesh(
      i,
      t.overlay({ tex: g.overTex, rect: U0, alpha: 0.4, pull: 0.028 }),
    );
  ((G.renderOrder = 20), y.add(G));
  const d = [-27, -84, 27, -35],
    w = [-48, -25, 48, 17],
    f = U0[0] * 1e3,
    C = (U0[1] + U0[3]) * 1e3,
    x = U0[2] * 1e3,
    p = (N, [Y, o0, i0, u0]) => {
      const f0 = N / x,
        K = Math.max(0, Math.floor((Y - f) * f0)),
        b = Math.min(N, Math.ceil((i0 - f) * f0)),
        W = Math.max(0, Math.floor((C - u0) * f0)),
        X = Math.min(N, Math.ceil((C - o0) * f0));
      return [K, W, b - K, X - W];
    },
    M = [],
    I = document.createElement("canvas"),
    P = I.getContext("2d"),
    F = new e.Texture(I),
    L = new e.Vector2(),
    O = ([N, Y, o0], i0) => {
      const u0 = N[Y + "Tex"];
      if (!o0) {
        u0.needsUpdate = !0;
        return;
      }
      const f0 = u0.image,
        K = f0.width,
        [b, W, X, S] = p(K, o0);
      ((I.width !== X || I.height !== S) && ((I.width = X), (I.height = S)),
        (P.globalCompositeOperation = "copy"),
        P.drawImage(f0, b, W, X, S, 0, 0, X, S),
        i0.copyTextureToTexture(F, u0, null, L.set(b, K - W - S)));
    };
  let J = !1;
  function s0(N) {
    if (!M.length) return;
    const Y = M.length > 4 || J ? M.length : 1;
    J = !1;
    for (let o0 = 0; o0 < Y && M.length; o0++) O(M.shift(), N);
  }
  const $ = (N, Y, o0) => {
    for (let i0 = M.length - 1; i0 >= 0; i0--)
      M[i0][0] === N &&
        M[i0][1] === Y &&
        (!o0 || (M[i0][2] && M[i0][2] === o0)) &&
        M.splice(i0, 1);
    (!o0 && M.some((i0) => i0[0] === N && i0[1] === Y && !i0[2])) ||
      M.push([N, Y, o0]);
  };
  let r0 = null,
    t0 = 0;
  function V(N, Y) {
    const o0 = JSON.stringify(N.eyes),
      i0 = JSON.stringify(N.mouth),
      u0 = JSON.stringify([
        N.brows,
        N.blush,
        N.tears,
        N.anger,
        N.sad,
        N.wet,
        N.wounds,
      ]),
      f0 = o0 + "|" + i0 + "|" + u0;
    ((r0 = N), (t0 = Y));
    const K = m.uniforms,
      b = gt(N, -1),
      W = gt(N, 1);
    if (
      (K.uIrisR.value.set(b.cx, b.cy, b.rx, b.ry),
      K.uIrisL.value.set(W.cx, W.cy, W.rx, W.ry),
      (K.uPupil.value = W.pupil),
      (K.uTears.value = Math.max(0, Math.min(1, N.tears))),
      f0 === g.key)
    )
      return;
    const X = g.synced && o0 === g.kE && u0 === g.kR,
      S = g.synced && i0 === g.kM && u0 === g.kR;
    ((g.key = f0),
      (g.kE = o0),
      (g.kM = i0),
      (g.kR = u0),
      X
        ? (Ze(g.ctx.face, null, null, N, Y, null, d), $(g, "face", d))
        : S
          ? (Ze(g.ctx.face, null, g.ctx.over, N, Y, g.ctx.data, w),
            $(g, "face", w),
            $(g, "over", w),
            $(g, "data", w))
          : (Ze(g.ctx.face, null, g.ctx.over, N, Y, g.ctx.data),
            $(g, "face", null),
            $(g, "over", null),
            $(g, "data", null),
            (g.synced = !0)));
  }
  function R(N) {
    N !== n &&
      ((n = N),
      v.has(N) || v.set(N, l(N)),
      (g = v.get(N)),
      (m.uniforms.uFaceTex.value = g.faceTex),
      (m.uniforms.uFaceData.value = g.dataTex),
      (G.material.uniforms.uOverTex.value = g.overTex),
      r0 && V(r0, t0),
      (J = !0));
  }
  function H(N, Y) {
    if (v.has(N) || !r0) return;
    const o0 = n;
    R(N);
    for (let i0 = M.length - 1; i0 >= 0; i0--)
      M[i0][0] === g && M.splice(i0, 1);
    if (Y)
      for (const i0 of [g.faceTex, g.overTex, g.dataTex])
        ((i0.needsUpdate = !0), Y.initTexture(i0));
    R(o0);
  }
  return {
    group: y,
    mesh: k,
    overlay: G,
    material: m,
    paint: V,
    setRes: R,
    warm: H,
    flush: s0,
    get res() {
      return n;
    },
    stats: { verts: r.positions.length / 3, tris: r.indices.length / 3 },
    dispose() {
      i.dispose();
      for (const N of v.values())
        (N.faceTex.dispose(), N.overTex.dispose(), N.dataTex.dispose());
    },
  };
}
function ut(e, t) {
  const a = [],
    o = (i) => e[Math.max(0, Math.min(e.length - 1, i))],
    r = e.length - 1;
  for (let i = 0; i <= t; i++) {
    const n = (i / t) * r,
      s = Math.min(r - 1, Math.floor(n)),
      u = n - s,
      l = o(s - 1),
      v = o(s),
      g = o(s + 1),
      m = o(s + 2),
      y = u * u,
      k = y * u;
    a.push(
      [0, 1, 2].map(
        (G) =>
          0.5 *
          (2 * v[G] +
            (-l[G] + g[G]) * u +
            (2 * l[G] - 5 * v[G] + 4 * g[G] - m[G]) * y +
            (-l[G] + 3 * v[G] - 3 * g[G] + m[G]) * k),
      ),
    );
  }
  return a;
}
const $e = (e, t) => [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
  St = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
  Qe = (e, t) => [
    e[1] * t[2] - e[2] * t[1],
    e[2] * t[0] - e[0] * t[2],
    e[0] * t[1] - e[1] * t[0],
  ],
  we = (e) => {
    const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]) || 1;
    return [e[0] / t, e[1] / t, e[2] / t];
  };
function Ut(e, t = [0, 0, 1]) {
  const a = e.length,
    o = [],
    r = [],
    i = [];
  for (let s = 0; s < a; s++)
    o.push(we($e(e[Math.min(a - 1, s + 1)], e[Math.max(0, s - 1)])));
  let n = $e(
    t,
    o[0].map((s) => s * St(t, o[0])),
  );
  (Math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]) < 1e-6 &&
    (n = Math.abs(o[0][0]) < 0.9 ? Qe(o[0], [1, 0, 0]) : Qe(o[0], [0, 1, 0])),
    (n = we(n)));
  for (let s = 0; s < a; s++) {
    if (s > 0) {
      const u = o[s];
      n = we(
        $e(
          n,
          u.map((l) => l * St(n, u)),
        ),
      );
    }
    (r.push(n), i.push(Qe(o[s], n)));
  }
  return { T: o, N: r, B: i };
}
function I0(e, t, a, o = {}) {
  const r = o.segs ?? 32,
    i = o.radial ?? 16,
    n = o.raw ? t : ut(t, r),
    s = n.length,
    { T: u, N: l, B: v } = Ut(n, o.up ?? [0, 0, 1]),
    g = typeof a == "function" ? a : () => a,
    m = o.scale ? o.scale[0] : 1,
    y = o.scale ? o.scale[1] : 1,
    k = [],
    G = [],
    d = [],
    w = (p, M, I, P, F, L, O = 0) => {
      for (let J = 0; J <= i; J++) {
        const s0 = (J / i) * Math.PI * 2,
          $ = Math.cos(s0),
          r0 = Math.sin(s0);
        (I[0] * $ * y + P[0] * r0 * m,
          I[1] * $ * y + P[1] * r0 * m,
          I[2] * $ * y + P[2] * r0 * m,
          k.push(
            p[0] + (I[0] * $ * m + P[0] * r0 * y) * F,
            p[1] + (I[1] * $ * m + P[1] * r0 * y) * F,
            p[2] + (I[2] * $ * m + P[2] * r0 * y) * F,
          ));
        let t0 = we([
          (I[0] * $) / m + (P[0] * r0) / y,
          (I[1] * $) / m + (P[1] * r0) / y,
          (I[2] * $) / m + (P[2] * r0) / y,
        ]);
        (O &&
          (t0 = we([
            t0[0] * (1 - Math.abs(O)) + L[0] * O,
            t0[1] * (1 - Math.abs(O)) + L[1] * O,
            t0[2] * (1 - Math.abs(O)) + L[2] * O,
          ])),
          G.push(t0[0], t0[1], t0[2]));
      }
    };
  let f = 0;
  const C = 5;
  if (o.capStart) {
    const p = g(0);
    for (let M = 0; M < C; M++) {
      const I = ((1 - M / C) * Math.PI) / 2,
        P = n[0].map((F, L) => F - u[0][L] * Math.sin(I) * p * Math.min(m, y));
      (w(P, 0, l[0], v[0], p * Math.cos(I) + 1e-5, u[0], -Math.sin(I)), f++);
    }
  }
  for (let p = 0; p < s; p++)
    (w(n[p], p / (s - 1), l[p], v[p], Math.max(g(p / (s - 1)), 1e-5), u[p]),
      f++);
  if (o.capEnd) {
    const p = g(1);
    for (let M = 1; M <= C; M++) {
      const I = ((M / C) * Math.PI) / 2,
        P = n[s - 1].map(
          (F, L) => F + u[s - 1][L] * Math.sin(I) * p * Math.min(m, y),
        );
      (w(
        P,
        1,
        l[s - 1],
        v[s - 1],
        p * Math.cos(I) + 1e-5,
        u[s - 1],
        Math.sin(I),
      ),
        f++);
    }
  }
  for (let p = 0; p < f - 1; p++)
    for (let M = 0; M < i; M++) {
      const I = p * (i + 1) + M,
        P = I + 1,
        F = I + i + 1,
        L = F + 1;
      d.push(I, P, F, P, L, F);
    }
  const x = new e.BufferGeometry();
  return (
    x.setAttribute("position", new e.Float32BufferAttribute(k, 3)),
    x.setAttribute("normal", new e.Float32BufferAttribute(G, 3)),
    x.setIndex(d),
    x.computeBoundingSphere(),
    x
  );
}
const xt = new Map();
