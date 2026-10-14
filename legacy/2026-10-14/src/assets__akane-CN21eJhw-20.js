// assets__akane-CN21eJhw 20 — mul
// Lines 6492-7247 of readable/assets__akane-CN21eJhw.pretty.js (statement-aligned).
function an(e, t, a, o, r = {}) {
  const i = [],
    n = t.toon({
      base: "#2a2733",
      shade: "#17151c",
      deep: "#0c0b10",
      deepT: -0.35,
      deepAmt: 0.6,
      rampT: 0.12,
      soft: 0.012,
      side: e.DoubleSide,
      rim: 1.35,
      cloth: !0,
      sheen: 0.55,
      fold: 0.3,
      wetSpec: 0.6,
    }),
    s = t.toon({
      base: "#2a2630",
      shade: "#131117",
      rampT: 0.1,
      soft: 0.012,
      rim: 1.2,
      side: e.DoubleSide,
      cloth: !0,
      sheen: 0.4,
      fold: 0.15,
    }),
    u = t.toon({
      base: Kt,
      shade: it,
      rampT: 0.1,
      soft: 0.01,
      spec: 0.3,
      specT: 0.994,
      rim: 0.35,
      rimW: 0.8,
      wetSpec: 1,
      skin: !0,
      skinBoost: 0.7,
    }),
    l = t.toon({
      base: "#27232d",
      shade: "#0e0d11",
      rampT: 0.12,
      spec: 0.12,
      specT: 0.985,
      rim: 1,
      cloth: !0,
      sheen: 0.3,
      fold: 0.1,
      wetSpec: 0.4,
    }),
    v = t.toon({
      base: "#1b1519",
      shade: "#070507",
      rampT: 0.05,
      spec: 1.3,
      specT: 0.975,
      rim: 0.9,
      wetSpec: 0.5,
    }),
    g = t.toon({
      base: "#c8121e",
      shade: "#5c0710",
      rampT: 0,
      spec: 0.5,
      rim: 0.6,
      rimW: 0.84,
      litMax: 0.55,
      coat: [0.012, 0.22],
    }),
    m = "#040306",
    y = "#6e4452",
    k = r.pistol || null;
  k &&
    ((k.group.matrixAutoUpdate = !1),
    (k.group.visible = !1),
    a.chest.add(k.group));
  const G = Yo(e, { kit: t }),
    d = qo(e, { kit: t });
  ((G.group.visible = !1), (d.group.visible = !1));
  const w = [1, -1].map((b) => {
    const W = t.withOutline(new e.BufferGeometry(), n, m, { lineW: 1.05 }),
      X = t.withOutline(new e.BufferGeometry(), s, m, { lineW: 1 }),
      S = new e.Group(),
      h = t.withOutline(new e.BufferGeometry(), u, y, { lineW: 0.85 }),
      A = t.withOutline(new e.BufferGeometry(), l, m, { lineW: 0.85 }),
      D = t.withOutline(new e.BufferGeometry(), v, "#020203", { lineW: 0.45 }),
      T = t.withOutline(new e.BufferGeometry(), g, "#12030a", { lineW: 0.8 });
    (S.add(h, A, D, T),
      a.chest.add(W, X, S),
      i.push(
        W.userData.mesh,
        X.userData.mesh,
        h.userData.mesh,
        A.userData.mesh,
        T.userData.mesh,
      ));
    for (const z of [W, X, h, A, D, T]) z.userData.mesh.frustumCulled = !1;
    return {
      side: b,
      sleeve: W,
      cuff: X,
      hand: S,
      handMesh: h,
      gloveMesh: A,
      nails: D,
      pick: T,
      shapeKey: "",
      hasPick: !1,
    };
  });
  w.find((b) => b.side === -1).hand.add(G.group, d.group);
  const C = (b, W) => {
      if (!b || !W || !b.attributes.position || !W.attributes.position)
        return !1;
      const X = Object.keys(b.attributes),
        S = Object.keys(W.attributes);
      if (X.length !== S.length) return !1;
      for (const h of S) {
        const A = b.attributes[h],
          D = W.attributes[h];
        if (
          !A ||
          A.itemSize !== D.itemSize ||
          A.array.length !== D.array.length ||
          A.array.constructor !== D.array.constructor
        )
          return !1;
      }
      return (
        (!b.index && !W.index) ||
        !!(
          b.index &&
          W.index &&
          b.index.array.length === W.index.array.length &&
          b.index.array.constructor === W.index.array.constructor
        )
      );
    },
    x = (b, W, X = !0) => {
      const S = b.userData.mesh;
      if (
        X &&
        S.userData.ownGeo !== !1 &&
        S.geometry !== W &&
        C(S.geometry, W)
      ) {
        const h = S.geometry;
        for (const A in W.attributes) {
          const D = h.attributes[A];
          (D.array.set(W.attributes[A].array), (D.needsUpdate = !0));
        }
        (W.index &&
          (h.index.array.set(W.index.array), (h.index.needsUpdate = !0)),
          (h.boundingSphere = W.boundingSphere || null),
          (h.boundingBox = W.boundingBox || null),
          W.dispose());
        return;
      }
      (S.userData.ownGeo !== !1 && S.geometry.dispose(),
        (S.userData.ownGeo = X),
        (S.geometry = W),
        S.userData.hullMesh && (S.userData.hullMesh.geometry = W));
    },
    p = new e.Matrix4(),
    M = new e.Matrix4(),
    I = new e.Matrix4(),
    P = (b) => new e.Vector3(...b),
    F = (b) => {
      const W = P(b).applyMatrix4(M);
      return [W.x, W.y, W.z];
    },
    L = (b) => {
      const W = P(b).transformDirection(M);
      return [W.x, W.y, W.z];
    },
    O = (b) => {
      const W = P(b).applyMatrix4(I);
      return [W.x, W.y, W.z];
    },
    J = (b) => {
      const W = P(b).transformDirection(I);
      return [W.x, W.y, W.z];
    },
    s0 = a.hips.parent,
    $ = new e.Vector3(),
    r0 = (b, W, X) => {
      b = c.norm(b);
      let S = c.norm(c.sub(W, c.mul(b, c.dot(W, b)))),
        h = c.cross(S, b);
      return (c.dot(h, X) < 0 && (h = c.mul(h, -1)), { X: h, Y: S, Z: b });
    },
    t0 = (b, W) => (
      (W = c.norm(W)),
      (b = c.norm(c.sub(b, c.mul(W, c.dot(b, W))))),
      { X: c.cross(b, W), Y: b, Z: W }
    ),
    V = (18 * Math.PI) / 180,
    R = Math.cos(V),
    H = Math.sin(V);
  function N(b) {
    const W = (j, E, a0) => [
        j - w0.chest[0],
        E - w0.chest[1],
        a0 - w0.chest[2],
      ],
      X = Z(b.gunRaise ?? 1),
      S = b.gunAim ? c.norm(b.gunAim) : [0, 0.02, 1],
      h = c.norm([0.1, -0.7, 0.72]);
    let A = c.norm(c.lerp(h, S, X));
    const D = W(-0.045, 1.365, 0.405),
      T = W(-0.07, 1.06, 0.3);
    let z = c.lerp(T, D, X);
    const U = Z(b.gunRecoil ?? 0);
    U > 0 &&
      ((z = c.add(z, c.add(c.mul(A, -0.035 * U), [0, 0.006 * U, 0]))),
      (A = c.norm(c.add(A, [0, 0.09 * U, 0]))));
    const B = c.norm(c.sub([0, 1, 0], c.mul(A, c.dot([0, 1, 0], A)))),
      _ = c.add(c.mul(B, R), c.mul(A, H)),
      Q = c.sub(c.mul(A, R), c.mul(B, H)),
      q = c.cross(Q, _);
    return { G: z, B: A, Up: B, X: _, Y: q, Z: Q };
  }
  function Y(b, W, X) {
    if (W === -1) {
      const B = Dt,
        _ = c.sub(
          b.G,
          c.add(c.add(c.mul(b.X, B[0]), c.mul(b.Y, B[1])), c.mul(b.Z, B[2])),
        );
      return {
        W: _,
        X: b.X,
        Y: b.Y,
        Z: b.Z,
        shape: "pistol",
        pole: [-0.55, -1, 0.05],
        gunW: _,
      };
    }
    const h = Dt,
      A = h[0] - 0.052,
      D = h[1] + 0.001,
      T = h[2] - 0.004,
      z = c.mul(b.Y, -1);
    return {
      W: c.sub(b.G, c.add(c.add(c.mul(b.X, A), c.mul(z, D)), c.mul(b.Z, T))),
      X: b.X,
      Y: z,
      Z: b.Z,
      shape: "support",
      pole: [0.6, -1, 0.05],
    };
  }
  function o0(b, W, X, S) {
    if (b.arms === "gun" && S.gun && (W.side === -1 || (b.gunHands ?? 2) > 1.5))
      return Y(S.gun, W.side);
    const h = W.side,
      D = o.lefty ? 1 : -1,
      T = b.arms,
      z = (q, j, E) => [q - w0.chest[0], j - w0.chest[1], E - w0.chest[2]];
    if (
      (b.guitar > 0.5 &&
        (T === "guitar" || ((T === "point" || T === "wipe") && h !== D))) ||
      (T === "guitar" && b.guitar > 0.5)
    ) {
      if ((M.copy(o.placement(b)), h === D && T === "guitar")) {
        const P0 = Z(b.strumAmp, 0, 1.5),
          A0 = b.strum * Math.PI * 2,
          z0 = Math.cos(A0),
          _0 = 0.02 + 0.05 * P0,
          G0 = z0 * _0,
          p0 = F([
            0.03 + 0.3 * G0,
            G0,
            b0.topZ + 0.0135 + 0.024 * P0 * z0 * z0,
          ]),
          v0 = Math.sin(A0) * 0.18 * P0,
          m0 = L([1, 0, 0]),
          g0 = L([0, 1, 0]),
          D0 = L([0, 0, 1]),
          T0 = Zt(m0, g0, D0),
          K0 = v0 * 1.1;
        return {
          contact: p0,
          contactKind: "pick",
          X: Y0(T0.X, D0, K0),
          Y: Y0(T0.Y, D0, K0),
          Z: Y0(T0.Z, D0, K0),
          shape: "pick",
          pole: [h * 1, -0.7, -0.6],
        };
      }
      const q = Z(b.fret),
        j = n0(Te(1) - 0.012, Te(11) - 0.012, q),
        E = F([
          j,
          Be(2, j) + 0.013 * Z(b.bend ?? 0, -0.5, 1.5),
          b0.topZ + 0.0118,
        ]),
        a0 = L([1, 0, 0]),
        l0 = L([0, 1, 0]),
        e0 = L([0, 0, 1]),
        c0 = c.norm(
          c.add(c.add(c.mul(l0, 0.1), c.mul(e0, 1)), c.mul(a0, -0.12)),
        );
      let d0 = c.norm(c.add(c.mul(e0, 0.12), c.mul(l0, -1)));
      d0 = c.norm(c.sub(d0, c.mul(c0, c.dot(d0, c0))));
      let x0 = c.cross(d0, c0);
      return (
        c.dot(x0, a0) < 0 && (x0 = c.mul(x0, -1)),
        {
          contact: E,
          contactKind: "index",
          X: x0,
          Y: d0,
          Z: c0,
          shape: "fret",
          pole: [h * 0.9, -1, 0.1],
        }
      );
    }
    if (T === "guitar_up" && b.guitar > 0.5) {
      if ((M.copy(o.placement(b)), h === D)) {
        const j = t0(L([0, 0, -1]), L([0.15, -1, 0]));
        return {
          contact: F([-0.215, -0.14, 0]),
          contactKind: "palm",
          ...j,
          shape: "grip",
          pole: [h, -0.4, -0.5],
        };
      }
      const q = t0(L([0, 0, -1]), L([0, 1, 0.1]));
      return {
        contact: F([0.4, 0, -0.012]),
        contactKind: "palm",
        ...q,
        shape: "grip",
        pole: [h, -0.4, -0.5],
      };
    }
    if (T === "hands_up") {
      const q = r0([h * 0.15, 1, 0.1], [0, 0, -1], [-h, 0, 0]);
      return {
        W: z(h * 0.215, 1.3, 0.2),
        ...q,
        shape: "open",
        pole: [h, -1, -0.2],
      };
    }
    if (T === "fists") {
      const q = r0([-h * 0.25, 0.55, 0.8], [h * 0.4, 0.6, 0.3], [0, 1, 0]);
      return {
        W: z(h * 0.13, 1.08, 0.2),
        ...q,
        shape: "fist",
        pole: [h, -0.8, -0.3],
      };
    }
    if (T === "face") {
      const q = r0([-h * 0.3, 1, 0.1], [0, 0.1, 1], [0, 1, 0]);
      return {
        W: z(h * 0.065, 1.36, 0.19),
        ...q,
        shape: "relaxed",
        pole: [h, -1, 0.1],
      };
    }
    if (T === "reach" && h === -1) {
      const q = r0([0.1, 0.3, 1], [0, -0.2, -1], [0, 1, 0]);
      return {
        W: z(-0.1, 1.3, 0.46),
        ...q,
        shape: "reach",
        pole: [-0.6, -1, 0],
      };
    }
    if (T === "point" && h === D) {
      const q = Z(b.pointUp ?? 0.15, -0.5, 1),
        j = z(h * 0.1, 1.27 + q * 0.08, 0.43);
      if (S.aim) {
        const a0 = [L0[0] * h, L0[1], L0[2]];
        let l0 = c.norm(c.sub(S.aim, a0));
        const e0 = [0, 0, 1],
          c0 = Math.cos((70 * Math.PI) / 180);
        if (c.dot(l0, e0) < c0) {
          const p0 = c.norm(c.sub(l0, c.mul(e0, c.dot(l0, e0))));
          l0 = c.add(c.mul(e0, c0), c.mul(p0, Math.sqrt(1 - c0 * c0)));
        }
        let d0 = c.add(a0, c.mul(l0, 0.4));
        d0 = c.add(d0, [0, q * 0.08 - 0.03, 0]);
        const x0 = c.sub(S.aim, d0),
          P0 = c.len(x0);
        let A0 = c.norm(c.cross([0, 1, 0], x0));
        c.dot(A0, [h, 0, 0]) < 0 && (A0 = c.mul(A0, -1));
        const z0 = c.norm(
            c.add(c.add(x0, c.mul(A0, P0 * 0.13)), [0, P0 * 0.06, 0]),
          ),
          _0 = r0(z0, [0, 1, 0], [-h, 0, 0]),
          G0 = c.add(c.mul(_0.X, 0.0245), c.mul(_0.Y, 0.001));
        return {
          W: c.sub(d0, G0),
          ..._0,
          shape: "point",
          pole: [h, -0.6, -0.6],
        };
      }
      const E = r0([0.06 * -h, q, 1], [0, 1, 0], [-h, 0, 0]);
      return { W: j, ...E, shape: "point", pole: [h, -0.6, -0.6] };
    }
    if (T === "wipe" && h === D) {
      (s0.updateMatrixWorld(!0),
        $.set(h * 0.0285, -0.0055, 0.072),
        S.headToChest($));
      const q = [$.x, $.y, $.z],
        j = t0([0, 0.15, -1], [-h * 0.45, 1, 0.1]);
      return {
        contact: c.add(q, [0, 0, 0.012]),
        contactKind: "knuckle",
        ...j,
        shape: "wipe",
        pole: [h, -0.8, -0.2],
      };
    }
    if (T === "mic" && S.mic) {
      const q = S.mic,
        j = J(q.axisRoot),
        E = h === D ? -0.04 : 0.015,
        a0 = O(c.add(q.gripRoot, c.mul(q.axisRoot, E))),
        l0 = c.norm(J([h, 0.25, 0])),
        e0 = c.norm(c.cross(j, l0)),
        c0 = t0(l0, c.dot(e0, [0, -1, 0]) < 0 ? c.mul(e0, -1) : e0);
      return {
        contact: a0,
        contactKind: "palm",
        ...c0,
        shape: "grip",
        pole: [h, -1, -0.4],
      };
    }
    if (T === "phone" && h === D) {
      const q = O([h * 0.05, b.phoneY ?? 1.1, 0.3]),
        j = t0(J([0, -0.62, 0.78]), J([h * 0.1, 0.78, 0.62]));
      return {
        contact: q,
        contactKind: "phone",
        ...j,
        shape: "phone",
        pole: [h, -1, -0.3],
      };
    }
    if (T === "touch" && b.touchAt) {
      const q = b.touchAt,
        j = [L0[0] * h, L0[1], L0[2]],
        E = O(h === D ? q : [q[0] + 0.05 * h, q[1] + 0.03, q[2]]),
        a0 = c.norm(c.sub(E, j)),
        l0 = r0(a0, [0, 1, 0], [-h, 0.2, 0]);
      return h === D
        ? {
            contact: E,
            contactKind: "pen",
            ...l0,
            shape: "pen",
            pole: [h, -0.7, -0.5],
          }
        : {
            contact: E,
            contactKind: "palm",
            ...l0,
            shape: "flat",
            pole: [h, -0.8, -0.4],
          };
    }
    if (T === "bars" && b.barL && b.barR) {
      const q = h === 1 ? b.barL : b.barR,
        j = h === 1 ? b.barAxisL || [1, 0, 0] : b.barAxisR || [-1, 0, 0],
        E = O(q),
        a0 = c.norm(J(j)),
        l0 = [L0[0] * h, L0[1], L0[2]];
      let e0 = c.sub(E, l0);
      e0 = c.norm(c.sub(e0, c.mul(a0, c.dot(e0, a0))));
      const c0 = Y0(e0, c.mul(a0, h), b.barRoll ?? 0.32),
        d0 = r0(c0, J([0, 1, -0.3]), c.mul(a0, -1)),
        x0 = h === -1 && b.barReachR ? Z(b.barReachK ?? 0) : 0;
      if (x0 > 0.001) {
        const P0 = O(b.barReachR);
        return {
          contact: c.add(E, c.mul(c.sub(P0, E), x0)),
          contactKind: "bar",
          ...d0,
          shape: x0 > 0.55 ? "pick" : "grip",
          pole: [h * 1, -0.75, -0.55],
        };
      }
      return {
        contact: E,
        contactKind: "bar",
        ...d0,
        shape: "grip",
        pole: [h * 1, -0.75, -0.55],
      };
    }
    if (T === "grab" && b.grabL && b.grabR) {
      const q = h === 1 ? b.grabL : b.grabR,
        j = [L0[0] * h, L0[1], L0[2]],
        E = O(q),
        a0 = c.norm(c.sub(E, j)),
        l0 = r0(a0, [0, 1, 0], [-h, 0.2, 0]);
      return {
        contact: E,
        contactKind: "palm",
        ...l0,
        shape: "grip",
        pole: [h, -0.8, -0.4],
      };
    }
    if (T === "pen") {
      const q = b.desk ?? 0.74;
      if (h === D) {
        const E = b.penAt || [0, 0],
          a0 = O([h * 0.07 + E[0] * 0.08, q + 0.001, 0.34 + E[1] * 0.06]),
          l0 = r0(
            J([-h * 0.12, -0.52, 0.85]),
            J([h * 0.55, 0.83, 0.05]),
            J([-h, 0, 0.2]),
          );
        return {
          contact: a0,
          contactKind: "pen",
          ...l0,
          shape: "pen",
          pole: [h, -0.6, -0.6],
        };
      }
      const j = r0(J([-h * 0.35, -0.05, 1]), J([0, 1, 0]), J([-h, 0, 0]));
      return {
        contact: O([h * 0.16, q + 0.012, 0.3]),
        contactKind: "palm",
        ...j,
        shape: "flat",
        pole: [h, -0.3, -1],
      };
    }
    const B = r0([h * 0.08, -1, 0.06], [h, 0, 0], [0, 0, 1]),
      _ = Z(b.walkAmp ?? 0),
      Q =
        _ *
        Math.sin((b.walk ?? 0) * Math.PI * 2 + (h > 0 ? Math.PI : 0)) *
        (b.walkArm ?? 1);
    return {
      W: z(
        h * (0.25 - 0.012 * _),
        0.8 +
          (b.guitar > 0.5 && T !== "none" ? 0.02 : 0) +
          0.02 * _ * Math.abs(Q),
        0.035 + 0.11 * Q,
      ),
      ...B,
      shape: "relaxed",
      pole: [h * 0.25, 0, -1],
    };
  }
  function i0(b, W, X) {
    let S = c.sub(W, b),
      h = c.len(S);
    const A = ve + Ee - 0.002;
    h > A && ((W = c.add(b, c.mul(c.norm(S), A))), (S = c.sub(W, b)), (h = A));
    const D = c.norm(S),
      T = (ve * ve - Ee * Ee + h * h) / (2 * h),
      z = Math.sqrt(Math.max(0, ve * ve - T * T));
    let U = c.sub(X, c.mul(D, c.dot(X, D)));
    return (
      (U = c.norm(U)),
      { E: c.add(c.add(b, c.mul(D, T)), c.mul(U, z)), W }
    );
  }
  const u0 = new e.Matrix4(),
    f0 = new e.Matrix4();
  function K(b, W, X = {}) {
    (s0.updateMatrixWorld(!0),
      f0.copy(a.chest.matrixWorld).invert(),
      I.multiplyMatrices(f0, s0.matrixWorld),
      u0.multiplyMatrices(f0, a.head.matrixWorld));
    const S = {
      mic: X.mic || null,
      aim: X.aim || null,
      headToChest: (h) => h.applyMatrix4(u0),
      gun: null,
    };
    (b.arms === "gun" && (S.gun = N(b)),
      (G.group.visible = !1),
      (d.group.visible = !1));
    for (const h of w) {
      const A = o0(b, h, W, S),
        D = h.side === -1 ? Math.round(Z(b.extraFinger ?? 0) * 40) / 40 : 0,
        T = $o(A.shape, D),
        z = A.shape + "|" + D.toFixed(3);
      if (h.shapeKey !== z) {
        h.shapeKey = z;
        const p0 = tn(e, T, D, z);
        (x(h.handMesh, p0.skin, !1),
          x(h.gloveMesh, p0.glove, !1),
          x(h.nails, p0.nails, !1),
          T.pick
            ? (x(h.pick, nn(e, T.pick)), (h.pick.visible = !0))
            : (h.pick.visible = !1));
      }
      (h.side === -1 &&
        T.phone &&
        ((G.group.visible = !0),
        G.group.position.set(0, -0.021, 0.072),
        G.group.rotation.set(Math.PI / 2, 0, 0),
        b.phoneScreen && G.setScreen(b.phoneScreen)),
        h.side === -1 &&
          T.pen &&
          ((d.group.visible = !0),
          d.group.position.set(...T.pen.tip),
          d.group.quaternion.setFromUnitVectors(
            new e.Vector3(0, 1, 0),
            P(T.pen.dir),
          )));
      let U = A.W;
      if (A.contact) {
        const p0 =
            A.contactKind === "pick"
              ? T.pick.tip
              : A.contactKind === "pen"
                ? T.pen.tip
                : A.contactKind === "palm"
                  ? [0, -0.03, 0.048]
                  : A.contactKind === "bar"
                    ? b.barContact || [0, -0.024, 0.066]
                    : A.contactKind === "phone"
                      ? [0, -0.025, 0.072]
                      : A.contactKind === "knuckle"
                        ? c.lerp(T.fingers[0][1], T.fingers[1][1], 0.5)
                        : T.fingers[0][3],
          v0 = c.add(
            c.add(c.mul(A.X, p0[0]), c.mul(A.Y, p0[1])),
            c.mul(A.Z, p0[2]),
          );
        U = c.sub(A.contact, v0);
      }
      p.makeBasis(P(A.X), P(A.Y), P(A.Z));
      const B = [L0[0] * h.side, L0[1], L0[2]];
      if (A.shape === "pick" && b.arms === "guitar") {
        const p0 = Z(b.strumAmp, 0, 1.5),
          v0 = b.strum * Math.PI * 2;
        ((B[1] += 0.01 * p0 * Math.cos(v0)),
          (B[2] += 0.009 * p0 * Math.sin(v0)));
      }
      const { E: _, W: Q } = i0(B, U, A.pole);
      (p.setPosition(...Q),
        p.decompose(h.hand.position, h.hand.quaternion, h.hand.scale));
      const q =
          A.shape === "relaxed" || A.shape === "fist" || A.shape === "wipe"
            ? 0.036
            : A.shape === "pick"
              ? 0.006
              : 0.017,
        j = [B[0] - h.side * 0.05, B[1] - 0.01, B[2]],
        E = c.add(Q, c.mul(A.Z, q)),
        a0 = [j, B, c.lerp(B, _, 0.5), _, c.lerp(_, Q, 0.5), Q],
        l0 = (p0) => {
          const v0 = [
            [0, 0.046],
            [0.2, 0.049],
            [0.4, 0.046],
            [0.6, 0.042],
            [0.8, 0.039],
            [1, 0.037],
          ];
          for (let m0 = 1; m0 < v0.length; m0++)
            if (p0 <= v0[m0][0]) {
              const g0 = (p0 - v0[m0 - 1][0]) / (v0[m0][0] - v0[m0 - 1][0]);
              return n0(v0[m0 - 1][1], v0[m0][1], g0);
            }
          return 0.044;
        },
        e0 = (p0) => {
          const v0 =
              Math.max(0, Math.min(1, (p0 - 0.62) / 0.3)) *
              (1 - Math.max(0, (p0 - 0.97) / 0.03)),
            m0 = Math.exp(-Math.pow((p0 - 0.5) / 0.06, 2));
          return (
            l0(p0) *
            (1 +
              0.07 * v0 * Math.pow(Math.max(0, Math.sin(p0 * 60 + h.side)), 2) +
              0.05 * m0 * Math.pow(Math.max(0, Math.sin(p0 * 45)), 2))
          );
        },
        c0 = { segs: 72, radial: 24, up: [0, 0, 1], capStart: !0 };
      kt(h.sleeve.userData.mesh.geometry, a0, e0, c0) ||
        x(h.sleeve, I0(e, a0, e0, c0));
      const x0 = [
          c.sub(Q, c.mul(c.norm(c.sub(Q, _)), 0.012)),
          Q,
          c.add(Q, c.mul(A.Z, q * 0.55)),
          E,
        ],
        P0 = (p0) => n0(0.0405, 0.0385, p0),
        A0 = { segs: 12, radial: 24, up: [0, 0, 1] },
        z0 = h.cuff.userData.mesh.geometry,
        _0 = kt(z0, x0, P0, A0),
        G0 = _0 ? z0 : I0(e, x0, P0, A0);
      {
        const p0 = G0.attributes.position,
          v0 = 25,
          m0 = p0.count - v0;
        for (let g0 = 0; g0 < v0; g0++) {
          const D0 = g0 % 24,
            T0 =
              0.0015 + 0.0055 * X0(D0, h.side, 5) * (D0 % 3 === 0 ? 1 : 0.45);
          p0.setXYZ(
            m0 + g0,
            p0.getX(m0 + g0) - A.Z[0] * T0,
            p0.getY(m0 + g0) - A.Z[1] * T0,
            p0.getZ(m0 + g0) - A.Z[2] * T0,
          );
        }
        p0.needsUpdate = !0;
      }
      (_0 || x(h.cuff, G0), (h.elbow = _), (h.wrist = Q));
    }
    if (k) {
      const h = S.gun;
      if (((k.group.visible = !!h), h)) {
        const A = [0, -0.02386, -0.03669],
          D = c.sub(
            h.G,
            c.add(c.add(c.mul(h.X, 0), c.mul(h.Up, A[1])), c.mul(h.B, A[2])),
          );
        (p.makeBasis(P(c.mul(h.Y, -1)), P(h.Up), P(h.B)),
          p.setPosition(...D),
          k.group.matrix.copy(p),
          (k.group.matrixWorldNeedsUpdate = !0));
      }
    }
  }
  return {
    casters: i,
    setPose: K,
    arms: w,
    phone: G,
    pen: d,
    dispose() {
      for (const b of w)
        for (const W of [b.sleeve, b.cuff, b.pick])
          W.userData.mesh.geometry.dispose();
      (G.dispose(), d.dispose());
    },
  };
}
