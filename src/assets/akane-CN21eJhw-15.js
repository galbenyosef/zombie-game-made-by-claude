// assets/akane-CN21eJhw 15 — math
// Lines 4905-5383 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
function Vo(e, t, a = {}) {
  const o = new e.Group();
  o.name = "guitar";
  const r = new e.Group();
  o.add(r);
  const i = [],
    n = [],
    s = (V, R, H, N = {}) => {
      const Y = H ? Ko(e, V) : V,
        o0 = t.withOutline(Y, R, H, { lineW: N.lineW ?? 0.9 });
      return (
        H &&
          (o0.userData.mesh.userData.hullMesh.material = t.outline(H, {
            w: N.lineW ?? 0.9,
            hullN: !0,
          })),
        r.add(o0),
        N.cast !== !1 && i.push(o0.userData.mesh),
        n.push(Y),
        o0
      );
    },
    u = t.toon({
      base: "#b5121f",
      shade: "#5c0710",
      deep: "#2e0307",
      deepT: -0.3,
      deepAmt: 0.6,
      rampT: 0.05,
      spec: 1.3,
      specT: 0.988,
      rim: 1.1,
      rimW: 0.84,
      wetSpec: 0.25,
      beads: !0,
      beadScale: 6.5,
      litMax: 0.62,
      coat: [0.018, 0.34],
    }),
    l = t.toon({
      base: "#1c1a21",
      shade: "#0b0a0e",
      rampT: 0,
      spec: 1,
      specT: 0.985,
      rim: 0.8,
      rimW: 0.84,
    }),
    v = t.toon({ base: "#3e2324", shade: "#1e1012", rampT: 0, rim: 0.5 }),
    g = t.toon({
      base: "#4a2c2a",
      shade: "#241414",
      rampT: 0.05,
      spec: 0.5,
      specT: 0.99,
    }),
    m = t.toon({
      base: "#f4f1ec",
      shade: "#b8b4c8",
      rampT: 0,
      spec: 0.4,
      specT: 0.99,
    }),
    y = t.toon({
      base: "#b9bdcc",
      shade: "#3e4152",
      deep: "#1c1d26",
      deepT: -0.2,
      deepAmt: 0.8,
      rampT: 0.45,
      spec: 1.4,
      specT: 0.9,
      rim: 1.4,
    }),
    k = t.toon({
      base: "#f6f0e2",
      shade: "#c9c6d8",
      rampT: 0.05,
      spec: 0.4,
      specT: 0.99,
    }),
    G = t.toon({
      base: "#211e27",
      shade: "#0d0c11",
      rampT: 0.1,
      spec: 0.7,
      specT: 0.975,
      rim: 0.8,
    }),
    d = t.toon({
      base: "#fbfbff",
      shade: "#9a9eb8",
      rampT: -0.2,
      spec: 1,
      specT: 0.9,
    }),
    w = t.toon({
      base: "#24212a",
      shade: "#0d0c10",
      rampT: 0,
      spec: 0,
      specT: 0.99,
      rim: 1.1,
      side: e.DoubleSide,
    }),
    f = t.toon({
      base: "#8d91a3",
      shade: "#2e3040",
      rampT: 0.3,
      spec: 0.9,
      specT: 0.995,
      rim: 1.2,
      rimW: 0.84,
    }),
    C = t.toon({ base: "#c1121f", shade: "#6a0a13", rampT: 0 }),
    x = b0.topZ;
  {
    const V = new e.ExtrudeGeometry(He(e, It), {
      depth: 0.028999999999999998,
      bevelEnabled: !0,
      bevelThickness: 0.008,
      bevelSize: 0.008,
      bevelSegments: 5,
      curveSegments: 64,
    });
    (V.translate(0, 0, -0.028999999999999998 / 2),
      s(V, u, "#1f0206", { lineW: 1.1 }));
  }
  {
    const V = new e.ExtrudeGeometry(He(e, Oo), {
      depth: 0.0016,
      bevelEnabled: !0,
      bevelThickness: 6e-4,
      bevelSize: 0.0012,
      bevelSegments: 1,
    });
    (V.translate(0, 0, x + 6e-4), s(V, l, "#000000", { lineW: 0.6, cast: !1 }));
    const R = new e.Shape();
    for (let i0 = 0; i0 < 10; i0++) {
      const u0 = Math.PI / 2 + (i0 * Math.PI) / 5,
        f0 = i0 % 2 ? 0.0075 : 0.018;
      (i0 ? R.lineTo : R.moveTo).call(R, Math.cos(u0) * f0, Math.sin(u0) * f0);
    }
    R.closePath();
    const H = new e.ExtrudeGeometry(R, { depth: 5e-4, bevelEnabled: !1 });
    (H.rotateZ(0.3),
      H.translate(-0.205, 0.055, x + 2e-4),
      s(H, m, "#1a1a22", { lineW: 0.5, cast: !1 }));
    const N = new e.Shape(),
      Y = [
        [-0.024, -0.015],
        [0.022, -0.017],
        [0.026, -0.004],
        [0.019, 0.001],
        [0.027, 0.009],
        [0.021, 0.016],
        [-0.02, 0.018],
        [-0.025, 0.006],
        [-0.021, 0],
      ];
    N.moveTo(...Y[0]);
    for (const i0 of Y.slice(1)) N.lineTo(...i0);
    N.closePath();
    const o0 = new e.ExtrudeGeometry(N, { depth: 5e-4, bevelEnabled: !1 });
    (o0.rotateZ(-0.35),
      o0.translate(-0.17, -0.13, x + 2e-4),
      s(o0, m, "#1a1a22", { lineW: 0.5, cast: !1 }));
    for (let i0 = 0; i0 < 3; i0++) {
      const u0 = new e.BoxGeometry(0.036, 0.0045, 6e-4);
      (u0.translate(0, -0.008 + i0 * 0.008, 0),
        u0.rotateZ(-0.35),
        u0.translate(-0.17, -0.13, x + 9e-4),
        s(u0, l, null, { cast: !1 }));
    }
  }
  for (const V of [-0.028, 0.088]) {
    const R = new e.BoxGeometry(0.036, 0.086, 0.012, 1, 1, 1);
    (R.translate(V, 0, x + 0.008),
      s(R, G, "#000000", { lineW: 0.6, cast: !1 }));
    for (let H = 0; H < 6; H++) {
      const N = new e.CylinderGeometry(0.0026, 0.0026, 0.002, 12);
      (N.rotateX(Math.PI / 2),
        N.translate(V, Be(H, V), x + 0.0145),
        s(N, y, null, { cast: !1 }));
    }
  }
  {
    const V = new e.BoxGeometry(0.014, 0.078, 0.012);
    (V.translate(b0.bridgeX, 0, x + 0.009), s(V, f, "#1a1b24", { lineW: 0.6 }));
    const R = new e.BoxGeometry(0.05, 0.085, 0.006);
    (R.translate(b0.bridgeX - 0.07, 0, x + 0.004),
      s(R, f, "#1a1b24", { lineW: 0.6, cast: !1 }));
    const H = I0(
      e,
      [
        [b0.bridgeX - 0.06, -0.035, x + 0.006],
        [b0.bridgeX - 0.05, -0.06, x + 0.02],
        [b0.bridgeX - 0.01, -0.12, x + 0.025],
        [b0.bridgeX + 0.03, -0.15, x + 0.02],
      ],
      0.0022,
      { segs: 20, radial: 8, capEnd: !0 },
    );
    s(H, y, null, { cast: !1 });
  }
  for (const [V, R] of [
    [-0.135, -0.118],
    [-0.185, -0.082],
  ]) {
    const H = new e.CylinderGeometry(0.0115, 0.0125, 0.014, 24);
    (H.rotateX(Math.PI / 2),
      H.translate(V, R, x + 0.008),
      s(H, G, "#0b0a10", { lineW: 0.6 }));
    const N = new e.CylinderGeometry(0.004, 0.004, 0.0025, 16);
    (N.rotateX(Math.PI / 2),
      N.translate(V, R, x + 0.0155),
      s(N, y, null, { cast: !1 }));
  }
  {
    const V = new e.BoxGeometry(0.03, 0.012, 0.003);
    (V.translate(0.045, 0.125, x + 0.0025), s(V, y, null, { cast: !1 }));
  }
  {
    const R = b0.nutX + 0.004,
      H = 24,
      N = 20,
      Y = [],
      o0 = [];
    for (let K = 0; K <= H; K++) {
      const b = n0(0.12, R, K / H),
        W = (b - 0.12) / (R - 0.12),
        X = n0(0.057, 0.0425, W),
        S = n0(0.024, 0.021, W);
      for (let h = 0; h <= N; h++) {
        const A = Math.PI * (h / N);
        Y.push(b, (Math.cos(A) * X) / 2, x + 0.004 - Math.sin(A) * S);
      }
    }
    for (let K = 0; K < H; K++)
      for (let b = 0; b < N; b++) {
        const W = K * (N + 1) + b,
          X = W + 1,
          S = W + N + 1,
          h = S + 1;
        o0.push(W, S, X, X, S, h);
      }
    const i0 = new e.BufferGeometry();
    (i0.setAttribute("position", new e.Float32BufferAttribute(Y, 3)),
      i0.setIndex(o0),
      i0.computeVertexNormals(),
      s(i0, g, "#120808", { lineW: 0.9 }));
    {
      const b = b0.nutX - 0.15,
        W = new e.BoxGeometry(b, 1, 0.0055, 12, 1, 1);
      W.translate(0.15 + b / 2, 0, x + 0.004 + 0.00275);
      const X = W.attributes.position;
      for (let S = 0; S < X.count; S++) {
        const h = (X.getX(S) - 0.12) / (R - 0.12);
        X.setY(S, X.getY(S) * n0(0.057, 0.0425, h));
      }
      (W.computeVertexNormals(), s(W, v, "#1c0e12", { lineW: 0.6 }));
    }
    for (let K = 1; K <= 21; K++) {
      const b = Te(K);
      if (b < 0.12 + 0.03) break;
      const W = (b - 0.12) / (R - 0.12),
        X = n0(0.057, 0.0425, W),
        S = new e.BoxGeometry(0.0022, X, 0.0016);
      if (
        (S.translate(b, 0, x + 0.0101),
        s(S, y, null, { cast: !1 }),
        [3, 5, 7, 9, 12, 15, 17].includes(K))
      ) {
        const h = (b + Te(K - 1)) / 2;
        for (const A of K === 12 ? [-0.01, 0.01] : [0]) {
          const D = new e.CylinderGeometry(0.0033, 0.0033, 8e-4, 16);
          (D.rotateX(Math.PI / 2),
            D.translate(h, A, x + 0.0097),
            s(D, k, null, { cast: !1 }));
        }
      }
    }
    const u0 = new e.BoxGeometry(0.004, 0.0425, 0.004);
    (u0.translate(b0.nutX, 0, x + 0.0105), s(u0, k, null, { cast: !1 }));
    const f0 = new e.ExtrudeGeometry(He(e, Fo), {
      depth: 0.008,
      bevelEnabled: !0,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 3,
      curveSegments: 32,
    });
    (f0.translate(b0.nutX, 0, x - 0.012), s(f0, u, "#1f0206", { lineW: 0.9 }));
    for (let K = 0; K < 6; K++) {
      const b = b0.nutX + 0.042 + K * 0.024,
        W = 0.043 + Math.sin((K / 5) * 2.2) * 0.006,
        X = new e.CylinderGeometry(0.0035, 0.0035, 0.012, 12);
      (X.rotateX(Math.PI / 2),
        X.translate(b, W - 0.012, x + 0),
        s(X, y, null, { cast: !1 }));
      const S = new e.CylinderGeometry(0.0055, 0.0055, 0.012, 16);
      (S.translate(b, W + 0.012, x - 0.006),
        s(S, y, "#4a4c60", { lineW: 0.5 }));
    }
  }
  for (let V = 0; V < 6; V++) {
    const R = n0(58e-5, 36e-5, V / 5),
      H = [
        [b0.bridgeX, Be(V, b0.bridgeX), x + 0.0155],
        [b0.nutX, Be(V, b0.nutX), x + 0.0125],
        [
          b0.nutX + 0.042 + V * 0.024,
          0.031 + Math.sin((V / 5) * 2.2) * 0.006,
          x + 0.004,
        ],
      ],
      N = I0(e, H, R, { segs: 2, radial: 6, raw: !0 });
    s(N, d, null, { cast: !1 });
  }
  for (const V of [b0.strapTail, b0.strapHorn]) {
    const R = new e.CylinderGeometry(0.004, 0.005, 0.01, 12);
    (R.rotateZ(Math.PI / 2),
      R.translate(V[0] + (V === b0.strapTail ? -0.004 : 0.004), V[1], V[2]),
      s(R, y, null, { cast: !1 }));
  }
  const p = new e.Matrix4(),
    M = new e.Vector3(),
    I = new e.Vector3(),
    P = new e.Vector3(),
    F = (a.neckSide ?? "screenRight") === "screenLeft",
    L = new e.Group();
  L.name = "strap";
  let O = null,
    J = null;
  const s0 = { hang: -1 };
  function $(V) {
    if (V.arms === "guitar_up")
      return (
        M.set(F ? -1 : 1, 0.12, 0).normalize(),
        P.set(0, 0.28, 1).normalize(),
        P.addScaledVector(M, -P.dot(M)).normalize(),
        I.crossVectors(P, M),
        F && I.negate(),
        p.makeBasis(M, I, P),
        p.setPosition(F ? 0.1 : -0.1, 0.5, 0.14),
        p
      );
    const H =
        V.arms === "guitar" || V.arms === "point" || V.arms === "wipe" ? 0 : 1,
      N = (W, X) => Math.max(-X, Math.min(X, W || 0)),
      Y = ((n0(20, 12, H) + N(V.neckLift, 30)) * Math.PI) / 180,
      o0 = ((n0(14, 6, H) + N(V.guitarSwing, 20)) * Math.PI) / 180,
      i0 = ((n0(12, 4, H) + N(V.guitarTilt, 15)) * Math.PI) / 180,
      u0 = F ? -1 : 1;
    (M.set(
      u0 * Math.cos(Y) * Math.cos(o0),
      Math.sin(Y),
      Math.sin(o0) * Math.cos(Y),
    ).normalize(),
      P.set(0, Math.sin(i0), 1).normalize(),
      P.addScaledVector(M, -P.dot(M)).normalize(),
      I.crossVectors(P, M),
      F && I.negate(),
      p.makeBasis(M, I, P));
    const f0 = u0 * -0.07,
      K =
        n0(0.935, 0.9, H) +
        0.05 * Math.max(0, Math.min(1, V.sit ?? 0)) -
        N(V.guitarDrop, 0.05),
      b =
        0.132 +
        0.0012 * Math.abs(N(V.guitarTilt, 15)) +
        4e-4 * Math.max(0, -N(V.neckLift, 30));
    return (
      p.setPosition(f0 - w0.chest[0], K - w0.chest[1], b - w0.chest[2]),
      p
    );
  }
  function r0(V, R) {
    ((o.visible = V.guitar > 0.5 && V.arms !== "none"),
      $(V).decompose(o.position, o.quaternion, o.scale),
      (L.visible = o.visible && V.arms !== "guitar_up"));
    const N =
        (V.arms === "guitar" || V.arms === "point" || V.arms === "wipe"
          ? 0
          : 1) +
        (0.05 * Math.round(20 * Math.max(0, Math.min(1, V.sit ?? 0)))) / 20,
      Y = (u0, f0) => Math.round((u0 || 0) * f0) / f0,
      o0 = {
        arms: V.arms,
        neckLift: Y(V.neckLift, 10),
        guitarSwing: Y(V.guitarSwing, 10),
        guitarTilt: Y(V.guitarTilt, 10),
        guitarDrop: Y(V.guitarDrop, 2e3),
        sit: Y(Math.max(0, Math.min(1, V.sit ?? 0)), 20),
      },
      i0 =
        (V.arms === "guitar_up" ? "up" : N) +
        "|" +
        [o0.neckLift, o0.guitarSwing, o0.guitarTilt].join(",") +
        "|" +
        o0.guitarDrop;
    if (s0.hang !== i0) {
      s0.hang = i0;
      const u0 = t0($(o0).clone());
      O
        ? (O.userData.mesh.geometry.dispose(),
          J.geometry.dispose(),
          (O.userData.mesh.geometry = u0.strap),
          (O.userData.mesh.userData.hullMesh.geometry = u0.strap),
          (J.geometry = u0.stitch))
        : ((O = t.withOutline(u0.strap, w, "#000000", { lineW: 0.8 })),
          (J = new e.Mesh(u0.stitch, C)),
          L.add(O, J),
          i.push(O.userData.mesh));
    }
  }
  function t0(V) {
    const R = (b) => new e.Vector3(...b).applyMatrix4(V),
      H = R(b0.strapHorn),
      N = R(b0.strapTail),
      Y = F ? -1 : 1,
      o0 = (b, W, X) =>
        new e.Vector3(b - w0.chest[0], W - w0.chest[1], X - w0.chest[2]),
      i0 = [
        H,
        o0(Y * 0.13, 1.2, 0.13),
        o0(Y * 0.105, 1.3, 0.06),
        o0(Y * 0.1, 1.325, -0.03),
        o0(Y * 0.08, 1.26, -0.13),
        o0(-Y * 0.08, 1.05, -0.135),
        o0(-Y * 0.2, 0.92, -0.08),
        o0(-Y * 0.23, 0.9, 0.05),
        N,
      ],
      u0 = [],
      f0 = i0.map((b) => [b.x, b.y, b.z]),
      K = jo(f0, 60);
    for (const b of K) {
      const W = b[0] + w0.chest[0],
        X = b[1] + w0.chest[1],
        S = b[2] + w0.chest[2];
      let h = j0(W, X, S);
      if (h < 0.006) {
        const D = [
            j0(W + 0.001, X, S) - j0(W - 0.001, X, S),
            j0(W, X + 0.001, S) - j0(W, X - 0.001, S),
            j0(W, X, S + 0.001) - j0(W, X, S - 0.001),
          ],
          T = Math.hypot(...D) || 1;
        ((b[0] += (D[0] / T) * (0.006 - h)),
          (b[1] += (D[1] / T) * (0.006 - h)),
          (b[2] += (D[2] / T) * (0.006 - h)));
      }
      u0.push(b);
    }
    return {
      strap: Pt(e, u0, 0.022, 0.0022, { raw: !0, radial: 12, up: [0, 0, 1] }),
      stitch: Pt(e, u0, 0.0011, 0.0029, { raw: !0, radial: 8, up: [0, 0, 1] }),
    };
  }
  return (
    r0({ arms: "guitar", guitar: 1 }),
    {
      group: o,
      model: r,
      strap: L,
      casters: i,
      setPose: r0,
      placement: $,
      lefty: F,
      outline: It,
      dispose() {
        for (const V of n) V.dispose();
        O && O.userData.mesh.geometry.dispose();
      },
    }
  );
}
