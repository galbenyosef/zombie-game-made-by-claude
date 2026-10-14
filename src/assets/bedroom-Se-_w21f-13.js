// assets/bedroom-Se-_w21f 13 — pitch
// Lines 3088-3277 of readable/assets/bedroom-Se-_w21f.pretty.js (statement-aligned).
const Ve = { x0: 0.18, x1: 1.1, y: 1.46, z1: 0.2 },
  Ne = new w0(0.48, 0.74, 2.4),
  ae = [
    {
      q: [0, 1],
      iris: [0.25, 0.42, 0.62],
      hair: "blonde",
      style: "ringlets",
      dress: "dressIvory",
      trim: "dressIvory",
    },
    {
      q: [1, 1],
      iris: [0.33, 0.2, 0.1],
      hair: "dark",
      style: "bob",
      dress: "dressRose",
      trim: "dressIvory",
    },
    {
      q: [0, 0],
      iris: [0.3, 0.42, 0.3],
      hair: "auburn",
      style: "curls",
      dress: "dressBlue",
      trim: "dressIvory",
    },
    {
      q: [1, 0],
      iris: [0.4, 0.42, 0.44],
      hair: "dark",
      style: "bonnet",
      dress: "dressBlack",
      trim: "dressIvory",
    },
  ];
function buildDolls(N, t) {
  const w = new u0();
  w.name = "dolls";
  const e = new M0("dolls"),
    o = nt(13),
    M = N.rng(66),
    { x0: s, x1: h, y: i, z1: z } = Ve;
  (e.add(R(s, i - 0.028, 0, h, i, z, 0.006, "x"), t.walnut),
    e.add(
      R(
        s + 0.005,
        i - 0.04,
        z - 0.022,
        h - 0.005,
        i - 0.026,
        z - 0.004,
        0.004,
        "x",
      ),
      t.walnut,
    ));
  for (const m of [s + 0.1, h - 0.1]) {
    const S = new jt();
    (S.moveTo(0, 0),
      S.lineTo(0.17, 0),
      S.bezierCurveTo(0.17, -0.04, 0.12, -0.05, 0.1, -0.08),
      S.bezierCurveTo(0.07, -0.12, 0.03, -0.12, 0.025, -0.18),
      S.quadraticCurveTo(0.02, -0.22, 0, -0.23),
      S.lineTo(0, 0));
    const u = new Et(S, {
      depth: 0.022,
      bevelEnabled: !0,
      bevelThickness: 0.003,
      bevelSize: 0.003,
      bevelSegments: 1,
      curveSegments: 16,
    });
    (u.rotateY(-Math.PI / 2),
      u.translate(m + 0.011, i - 0.028, 0),
      u.computeVertexNormals(),
      e.add(u, t.walnut));
  }
  const D = [];
  for (let m = 0; m < 4; m++) {
    const S = s + 0.12 + m * 0.22,
      u = Math.atan2(1.05 - S, 2.4 - 0.1),
      c = buildDollHeads(e, t, ae[m], o, M, m);
    (c.body.position.set(S, i, 0.085),
      (c.body.rotation.y = u),
      w.add(c.body),
      D.push(c));
  }
  {
    const m = buildDollHeads(
      e,
      t,
      {
        ...ae[0],
        q: [0, 1],
        iris: [0.22, 0.3, 0.5],
        hair: "auburn",
        style: "ringlets",
        dress: "dressRose",
      },
      o,
      M,
      4,
      !0,
    );
    (m.body.position.set(0.3, 0.06, 0.52),
      m.body.rotation.set(0, 0.9, Math.PI / 2 - 0.12, "YXZ"),
      w.add(m.body),
      (m.fallen = !0),
      D.push(m));
  }
  (e.flush(w), N.scene.add(w), w.updateMatrixWorld(!0));
  const C = N.camera,
    V = new w0(),
    A = new w0(),
    x = new w0(),
    k = new w0(),
    _ = new ct();
  let y = !1;
  for (const m of D)
    (m.body.updateMatrixWorld(!0),
      m.head.getWorldPosition(V),
      (m.rest = L(m, Ne)),
      (m.yaw = m.rest.yaw),
      (m.pitch = m.rest.pitch),
      W(m),
      (m.seen = !1),
      (m.moving = !1));
  function L(m, S, u = { yaw: 0, pitch: 0 }) {
    return (
      _.copy(m.head.parent.matrixWorld).invert(),
      x.copy(S).applyMatrix4(_).sub(m.head.position),
      (u.yaw = Pt(Math.atan2(x.x, x.z), -m.yawLim, m.yawLim)),
      (u.pitch = Pt(Math.atan2(x.y, Math.hypot(x.x, x.z)), -0.55, 0.5)),
      u
    );
  }
  function W(m) {
    m.head.rotation.set(-m.pitch, m.yaw, m.tilt, "YXZ");
  }
  const X = {
      list: D.map((m) => m.head),
      onCreak: null,
      speed: 0.32,
      setActive(m) {
        y = !!m;
      },
      get active() {
        return y;
      },
      reset(m = null) {
        for (const S of D) {
          const u = m ? L(S, m) : S.rest;
          ((S.yaw = u.yaw), (S.pitch = u.pitch), W(S));
        }
      },
    },
    F = { yaw: 0, pitch: 0 };
  return {
    group: w,
    anim: (m) => {
      (C.updateMatrixWorld(), C.getWorldPosition(A));
      for (const S of D) {
        (S.head.getWorldPosition(V),
          k.copy(V).project(C),
          (S.seen = k.z < 1 && Math.abs(k.x) < 1.15 && Math.abs(k.y) < 1.15));
        const u = y ? L(S, A, F) : S.rest;
        if (S.seen) {
          S.moving = !1;
          continue;
        }
        const c = u.yaw - S.yaw,
          g = u.pitch - S.pitch,
          b = Math.hypot(c, g);
        if (b < 0.002) {
          S.moving = !1;
          continue;
        }
        (!S.moving && b > 0.05 && X.onCreak && X.onCreak(S.index),
          (S.moving = !0));
        const p = Math.min(b, X.speed * m * (0.4 + 0.6 * g0(0, 0.3, b)));
        ((S.yaw += (c / b) * p), (S.pitch += (g / b) * p), W(S));
      }
    },
    api: X,
    colliders: [
      { x0: s, x1: h, z0: 0, z1: z + 0.12, y0: i - 0.25, y1: i + 0.4 },
    ],
  };
}
