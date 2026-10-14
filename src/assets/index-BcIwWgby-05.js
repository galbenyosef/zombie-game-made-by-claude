// assets/index-BcIwWgby 05 — math
// Lines 1005-1343 of readable/assets/index-BcIwWgby.pretty.js (statement-aligned).
function buildBirdFlocks({
  sdf: s,
  depth: o,
  waterY: t,
  rng: u,
  specs: e,
  posts: r = [],
  onRise: a = null,
}) {
  const p = (n, l) => {
      let f = s(n, l);
      for (const h of r)
        f = Math.max(
          f,
          h[2] - Math.sqrt((n - h[0]) * (n - h[0]) + (l - h[1]) * (l - h[1])),
        );
      return f;
    },
    i = (n, l) => {
      const h = (p(n + 0.05, l) - p(n - 0.05, l)) / 0.1,
        c = (p(n, l + 0.05) - p(n, l - 0.05)) / (2 * 0.05),
        M = Math.sqrt(h * h + c * c) || 1;
      return [h / M, c / M];
    },
    d = (n, l) =>
      (n - Go.p[0]) * Go.d[0] + (l - Go.p[1]) * Go.d[1] > 0 ? "B" : "A",
    y = (n, l = 0.9) => {
      const f = n === "A" ? Wn : Rn,
        h = n === "A" ? 3.4 : 2.7;
      for (let c = 0; c < 60; c++) {
        const M = f.x + (u() - 0.5) * h * 2,
          m = f.z + (u() - 0.5) * h * 1.6;
        if (p(M, m) < -l && d(M, m) === n) return [M, m];
      }
      return [f.x, f.z];
    },
    w = (n, l, f) => {
      let h = n,
        c = l;
      for (let M = 0; M < 40; M++) {
        const m = p(h, c);
        if (m < -f) break;
        const [k, S] = i(h, c),
          A = Math.max(0.04, Math.min(0.5, m + f + 0.02));
        ((h -= k * A), (c -= S * A));
      }
      return [h, c];
    },
    g = e.map((n, l) => {
      const f = l % 3 === 2 ? "B" : "A",
        [h, c] = y(f, 1);
      return {
        i: l,
        x: h,
        z: c,
        y: t - 0.3,
        yaw: u() * Math.PI * 2,
        pitch: 0,
        speed: 0.12,
        size: n.size,
        omega: 0,
        wander: 0,
        avoidDir: 0,
        avoidT: 0,
        bend: 0,
        beat: 0.9,
        mode: "cruise",
        modeT: 2 + u() * 6,
        cruise: 0.15 + u() * 0.07,
        kickPh: u() * 6.28,
        kickRate: 0.35 + u() * 0.25,
        route: null,
        goal: null,
        visitCd: 3 + u() * 6,
        rise: 4 + u() * 10,
        rising: 0,
        rang: !1,
        depthK: u(),
        leader: -1,
        lobe: f,
        phase: u() * 6.28,
        effort: 0.3,
      };
    });
  (g.length > 5 && ((g[3].leader = 0), (g[5].leader = 1)),
    g.length > 8 && (g[8].leader = 4));
  const z = (n, l, f) => {
    const h = d(n.x, n.z),
      c = d(l, f);
    if (h === c) {
      n.route = [[l, f]];
      return;
    }
    const M = h === "A" ? ks.slice() : ks.slice().reverse();
    n.route = [...M, [l, f]];
  };
  let x = 2;
  function v(n, l, f) {
    if (n <= 0) return;
    let h = null;
    if (f) {
      ((h = w(f[0], f[1], 0.62)), (x -= n));
      const c = g.filter((M) => M.mode === "visit").length;
      if (x <= 0 && c < 3) {
        x = 2.2 + u() * 3.5;
        let M = null,
          m = 1e9;
        for (const k of g) {
          if (k.mode === "visit" || k.visitCd > 0 || k.mode === "transit")
            continue;
          const S =
            Math.sqrt(
              (k.x - h[0]) * (k.x - h[0]) + (k.z - h[1]) * (k.z - h[1]),
            ) +
            u() * 2;
          S < m && ((m = S), (M = k));
        }
        if (M) {
          ((M.mode = "visit"), (M.modeT = 16));
          const [k, S] = w(
            h[0] + (u() - 0.5) * 1.2,
            h[1] + (u() - 0.5) * 1.2,
            0.6,
          );
          ((M.goal = [k, S]), z(M, k, S));
        }
      }
    } else x = Math.min(x, 1.5);
    for (const c of g) {
      ((c.modeT -= n), (c.visitCd -= n));
      const M = c.size;
      let m = null,
        k =
          c.cruise *
          (0.8 +
            0.35 * Math.max(0, Math.sin(l * c.kickRate * 6.28 + c.kickPh)));
      if (c.mode === "cruise" && c.modeT <= 0) {
        const U = u();
        if (U < 0.2) ((c.mode = "hover"), (c.modeT = 2.5 + u() * 4));
        else if (U < 0.33) {
          c.mode = "transit";
          const Z = d(c.x, c.z) === "A" ? "B" : "A";
          ((c.goal = y(Z, 0.9)), z(c, c.goal[0], c.goal[1]), (c.modeT = 40));
        } else c.modeT = 4 + u() * 8;
      }
      if (
        (c.mode === "hover" &&
          ((k = 0.035),
          c.modeT <= 0 && ((c.mode = "cruise"), (c.modeT = 4 + u() * 7))),
        (c.mode === "transit" || c.mode === "visit") && c.route)
      ) {
        let U = c.route[0];
        const Z = c.route.length === 1,
          ot = Math.sqrt(
            (U[0] - c.x) * (U[0] - c.x) + (U[1] - c.z) * (U[1] - c.z),
          );
        (ot < (Z ? 0.45 : 0.32) &&
          (c.route.shift(),
          c.route.length
            ? (U = c.route[0])
            : ((c.route = null),
              c.mode === "visit"
                ? ((c.mode = "pass"),
                  (c.modeT = 2.2 + u() * 2),
                  (c.visitCd = 10 + u() * 10),
                  u() < 0.65 && (c.rise = 0.4))
                : ((c.mode = "cruise"), (c.modeT = 3 + u() * 6)))),
          c.route &&
            ((m = Math.atan2(U[0] - c.x, U[1] - c.z)),
            c.mode === "visit" && c.route.length === 1
              ? (k = Math.min(
                  c.cruise * 1.25,
                  0.08 + 0.18 * Math.min(1, ot / 1.5),
                ))
              : (k = c.cruise * 1.15)),
          c.modeT <= 0 &&
            ((c.mode = "cruise"), (c.route = null), (c.modeT = 3 + u() * 5)));
      }
      if (
        (c.mode === "pass" &&
          ((k = 0.07),
          c.modeT <= 0 &&
            ((c.mode = "cruise"),
            (c.modeT = 3 + u() * 5),
            (c.omega += (u() < 0.5 ? -1 : 1) * 0.6))),
        c.leader >= 0 && c.mode === "cruise")
      ) {
        const U = g[c.leader];
        if (d(U.x, U.z) === d(c.x, c.z)) {
          const Z =
              U.x - Math.sin(U.yaw) * (0.35 + M * 0.6) + Math.cos(U.yaw) * 0.18,
            ot =
              U.z - Math.cos(U.yaw) * (0.35 + M * 0.6) - Math.sin(U.yaw) * 0.18,
            $ = Math.sqrt((Z - c.x) * (Z - c.x) + (ot - c.z) * (ot - c.z));
          ($ > 0.12 && (m = Math.atan2(Z - c.x, ot - c.z)),
            (k = Re(U.speed + ($ - 0.2) * 0.35, 0.03, 0.34)));
        }
      }
      const S = 0.3 + c.speed * 2.2 + M * 0.7,
        A =
          c.mode === "cruise" || c.mode === "hover"
            ? 0.42 + M * 0.45
            : c.mode === "transit"
              ? 0.1 + M * 0.12
              : 0.2 + M * 0.25,
        b = [];
      for (const U of [-0.9, -0.45, 0, 0.45, 0.9]) {
        const Z = S * (1 - 0.28 * Math.abs(U));
        b.push(
          -p(c.x + Math.sin(c.yaw + U) * Z, c.z + Math.cos(c.yaw + U) * Z),
        );
      }
      const P = -p(c.x, c.z),
        _ = Math.min(b[1], b[2], b[3]),
        I = Re((A - _) / A, 0, 1);
      let R = 0;
      if (I > 0) {
        const U = b[3] + b[4] * 0.7,
          Z = b[1] + b[0] * 0.7;
        ((c.avoidT <= 0 || Math.abs(U - Z) > 0.35) &&
          ((c.avoidDir = U >= Z ? 1 : -1), (c.avoidT = 0.8)),
          (R = c.avoidDir * (0.6 + 2.2 * I)));
      }
      if (((c.avoidT -= n), P < A * 0.7)) {
        const [U, Z] = i(c.x, c.z),
          ot = Math.atan2(-U, -Z);
        R += Re(oa(c.yaw, ot), -1.2, 1.2) * (1 - P / (A * 0.7)) * 1.5;
      }
      let V = 0,
        L = 1;
      for (const U of g) {
        if (U === c) continue;
        const Z = U.x - c.x,
          ot = U.z - c.z,
          $ = Math.sqrt(Z * Z + ot * ot),
          C = (M + U.size) * 0.62;
        if ($ > C || $ < 1e-4 || Math.abs(U.y - c.y) > 0.16) continue;
        const T = (Z * Math.sin(c.yaw) + ot * Math.cos(c.yaw)) / $;
        if (T < -0.2) continue;
        const D = Math.sin(c.yaw) * ot - Math.cos(c.yaw) * Z;
        ((V += (D > 0 ? 1 : -1) * (1 - $ / C) * 1.4),
          T > 0.5 &&
            c.leader !== U.i &&
            (L = Math.min(L, 0.55 + (0.45 * $) / C)));
      }
      ((c.wander += (-c.wander * 0.7 + (u() - 0.5) * 2.6) * n),
        (c.wander = Re(c.wander, -0.7, 0.7)));
      let K;
      (m != null
        ? (K = Re(oa(c.yaw, m) * 1.8, -1.3, 1.3) * (1 - I * 0.85))
        : (K = c.wander * (c.mode === "hover" ? 0.3 : 1) * (1 - I)),
        (K += R + V),
        (K = Re(K, -2.6, 2.6)),
        (c.omega += (K - c.omega) * Math.min(1, n * 4.5)),
        (c.yaw += c.omega * n));
      const j = Math.min(1, Math.abs(c.omega) / 2.2),
        O = k * L * (1 - 0.45 * I) * (1 - 0.35 * j);
      ((c.speed += (O - c.speed) * Math.min(1, n * (O > c.speed ? 1.6 : 2.4))),
        (c.x += Math.sin(c.yaw) * c.speed * n),
        (c.z += Math.cos(c.yaw) * c.speed * n));
      const J = p(c.x, c.z);
      if (J > -0.1) {
        const [U, Z] = i(c.x, c.z);
        ((c.x -= U * (J + 0.1)), (c.z -= Z * (J + 0.1)));
        const ot = Math.sin(c.yaw),
          $ = Math.cos(c.yaw),
          C = ot * U + $ * Z;
        (C > 0 && (c.yaw = Math.atan2(ot - U * C * 1.05, $ - Z * C * 1.05)),
          (c.pushes = (c.pushes || 0) + 1));
      }
      {
        const U = c.x + Math.sin(c.yaw) * M * 0.45,
          Z = c.z + Math.cos(c.yaw) * M * 0.45,
          ot = p(U, Z);
        if (ot > -0.04) {
          const [$, C] = i(U, Z),
            T = Math.sin(c.yaw),
            D = Math.cos(c.yaw),
            N = T * $ + D * C;
          (N > 0 && (c.yaw = Math.atan2(T - $ * N * 1.05, D - C * N * 1.05)),
            (c.x -= $ * (ot + 0.04)),
            (c.z -= C * (ot + 0.04)),
            (c.pushes = (c.pushes || 0) + 1));
        }
      }
      for (const U of g) {
        if (U.i <= c.i) continue;
        const Z = c.x - U.x,
          ot = c.z - U.z,
          $ = Math.sqrt(Z * Z + ot * ot),
          C = (M + U.size) * 0.3;
        if ($ < C && $ > 1e-5 && Math.abs(U.y - c.y) < 0.12) {
          const T = ((C - $) * 0.5) / $;
          ((c.x += Z * T), (c.z += ot * T), (U.x -= Z * T), (U.z -= ot * T));
        }
      }
      c.rise -= n;
      const tt = t - Math.max(0.1, o(c.x, c.z)),
        st = t - 0.07 - M * 0.06;
      let G = Math.max(
        tt + 0.06 + M * 0.1,
        Math.min(
          st,
          t - 0.16 - 0.32 * c.depthK - 0.06 * Math.sin(l * 0.23 + c.i * 1.7),
        ),
      );
      ((c.mode === "visit" || c.mode === "pass") && (G = Math.max(G, t - 0.14)),
        c.rise < 0 &&
          ((G = t - 0.035),
          c.rise < -1.3
            ? ((c.rise = 7 + u() * 14), (c.rang = !1))
            : !c.rang &&
              c.y > t - 0.075 &&
              ((c.rang = !0),
              a &&
                a(
                  c.x + Math.sin(c.yaw) * M * 0.45,
                  c.z + Math.cos(c.yaw) * M * 0.45,
                  0.8,
                ))));
      const q = (G - c.y) * Math.min(1, n * 1.1);
      ((c.y += q),
        (c.pitch +=
          (Re(
            (q / Math.max(n, 0.001) / Math.max(0.05, c.speed + 0.05)) * 0.8,
            -0.5,
            0.5,
          ) -
            c.pitch) *
          Math.min(1, n * 3)),
        (c.bend +=
          (Re(c.omega * 0.32, -0.55, 0.55) - c.bend) * Math.min(1, n * 5)),
        (c.beat = 0.5 + c.speed * 4.2 + Math.abs(c.omega) * 0.35),
        (c.phase = (c.phase + c.beat * Math.PI * 2 * n) % (Math.PI * 200)),
        (c.effort = Math.min(1, c.speed / 0.3 + Math.abs(c.omega) * 0.25)));
    }
  }
  return { fish: g, step: v, wsdf: p, lobeOf: d, waterNear: w, LANE: ks };
}
