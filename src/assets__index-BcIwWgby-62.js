// assets__index-BcIwWgby 62 — math
// Lines 18614-20092 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function ai(s, o, t, u) {
  const e = { bark: [], mounds: [] },
    r = {};
  let a = "graves";
  const p = {
      cloth: "fabric",
      wool: "fabric",
      leather: "hard",
      metal: "hard",
      wood: "wood",
    },
    i = [],
    d = [],
    y = (m, k, S, A = 0, b = 0) => {
      const P = o.at(m),
        _ = k === "L" ? 1 : -1,
        I = P.x + P.tz * _ * S,
        R = P.z - P.tx * _ * S,
        V = Math.atan2(_ * P.tz, -_ * P.tx) + A;
      return {
        x: I,
        z: R,
        y: Math.max(0, o.heightAt(I, R)) + b,
        m: new wt().compose(
          at(I, Math.max(0, o.heightAt(I, R)) + b, R),
          es.setFromAxisAngle(os, V),
          ss,
        ),
        phi: V,
        s: m,
      };
    },
    w = (m, k, S, A, b = null, P = 0) => {
      ((k = k.clone()),
        S && k.applyMatrix4(S),
        d0(k, ["position", "normal", "uv", "color", "aSway", "aHard"]),
        k.attributes.uv ||
          k.setAttribute(
            "uv",
            new vt(new Float32Array(k.attributes.position.count * 2), 2),
          ),
        (m === "wood" || m === "leather" || m === "metal") && Ct(k),
        ei(k, A));
      const _ = p[m];
      if (
        (_ === "fabric" && (k.attributes.aSway || oi(k, b, P)), _ === "hard")
      ) {
        const I = k.attributes.position.count,
          R = new Float32Array(I * 2);
        for (let V = 0; V < I; V++)
          R.set(m === "metal" ? [0.85, 0.42] : [0, 0], V * 2);
        k.setAttribute("aHard", new vt(R, 2));
      }
      return (
        r[a] || (r[a] = { fabric: [], hard: [], wood: [] }),
        r[a][_].push(k),
        k
      );
    },
    g = (m, k = 0.3) => {
      const S = m.attributes.position.count,
        A = new Float32Array(S * 3);
      for (let b = 0; b < S; b++) A.set([k, 0.55, 0.6], b * 3);
      return (m.setAttribute("aK", new vt(A, 3)), m);
    },
    z = (m, [k, S, A], b, P, _) => {
      a = m;
      const I = y(k, S, A),
        R = [0.9, 0.04, 0, 0],
        V = (L) => {
          const K = new t0(0.135, 18, 9, 0, ne, 0, Math.PI * 0.5).scale(
            1,
            0.85,
            1.12,
          );
          (w("metal", K, L, [0.11, 0.12, 0.075]),
            w(
              "metal",
              new s0(0.15, 0.012, 5, 24)
                .rotateX(Math.PI / 2)
                .scale(1, 1, 1.14)
                .translate(0, 0.004, 0),
              L,
              [0.1, 0.11, 0.07],
            ),
            w(
              "leather",
              Vt(
                [
                  at(-0.12, 0, 0.02),
                  at(-0.09, -0.12, 0.03),
                  at(0, -0.17, 0.035),
                  at(0.09, -0.12, 0.03),
                  at(0.12, 0, 0.02),
                ],
                () => 0.006,
                4,
              ),
              L,
              [0.12, 0.08, 0.05],
            ));
        };
      for (let L = 0; L < b; L++) {
        const K = (L - (b - 1) / 2) * 1.12 + (t() - 0.5) * 0.15,
          j = (t() - 0.5) * 0.25,
          O = 1.7 + t() * 0.25,
          J = 0.62 + t() * 0.12,
          tt = 0.2 + t() * 0.08,
          st = (t() - 0.5) * 0.12,
          G = new t0(1, 18, 7, 0, ne, 0, Math.PI / 2).scale(J / 2, tt, O / 2),
          q = G.attributes.position;
        for (let B = 0; B < q.count; B++) {
          const F = q.getX(B),
            E = q.getZ(B),
            Y = q.getY(B);
          (q.setY(
            B,
            Y * (1 + 0.25 * It(F * 7 + L * 3, E * 7)) +
              0.02 * It(F * 19, E * 19 + L),
          ),
            q.setX(B, F * (1 + 0.06 * It(E * 4, L))));
        }
        G.computeVertexNormals();
        const U = Dt(B0(st), Ot(K, -0.04, j), I.m);
        G.applyMatrix4(U);
        const Z = G.attributes.position,
          ot = new Float32Array(Z.count * 2),
          $ = new Float32Array(Z.count * 4);
        for (let B = 0; B < Z.count; B++)
          (Z.setY(B, Z.getY(B) + o.heightAt(Z.getX(B), Z.getZ(B)) - I.y),
            (ot[B * 2] = Z.getX(B)),
            (ot[B * 2 + 1] = -Z.getZ(B)),
            $.set(R, B * 4));
        (G.computeVertexNormals(),
          G.setAttribute("uv", new vt(ot, 2)),
          G.setAttribute("aMask", new vt($, 4)),
          e.mounds.push(d0(G, ["position", "normal", "uv", "aMask"])));
        const C = 1.15 + t() * 0.3,
          T = (t() - 0.5) * 0.16,
          D = Dt(
            ve(T),
            B0((t() - 0.5) * 0.3),
            Ot(K, -0.25, j + O / 2 + 0.05),
            I.m,
          );
        if (L === _) {
          const B = Dt(
            B0(0.6 + t() * 0.4),
            g0(0.08),
            ve(-0.12),
            Ot(K + 0.05, -0.12, j + O / 2 + 0.12),
            I.m,
          );
          (w(
            "metal",
            new Pt(0.0105, 0.012, 0.66, 8).translate(0, 0.33, 0),
            B,
            [0.06, 0.06, 0.06],
          ),
            w(
              "metal",
              new Pt(0.004, 0.004, 0.42, 5).translate(0.016, 0.26, 0.004),
              B,
              [0.06, 0.06, 0.06],
            ),
            w(
              "wood",
              new Zt(0.044, 0.42, 0.05, 1, 0.012).translate(0, 0.44, -0.006),
              B,
              [0.075, 0.045, 0.026],
            ),
            w(
              "metal",
              new Zt(0.04, 0.2, 0.055, 1, 0.008).translate(0, 0.74, -0.004),
              B,
              [0.07, 0.07, 0.068],
            ),
            w(
              "metal",
              new Pt(0.006, 0.006, 0.06, 6)
                .rotateZ(Math.PI / 2)
                .translate(0.035, 0.7, 0.01),
              B,
              [0.08, 0.08, 0.08],
            ),
            w(
              "metal",
              new Zt(0.03, 0.09, 0.05, 1, 0.006).translate(0, 0.72, -0.05),
              B,
              [0.06, 0.06, 0.06],
            ),
            w(
              "metal",
              new s0(0.022, 0.004, 4, 10, Math.PI)
                .rotateY(Math.PI / 2)
                .translate(0, 0.83, -0.03),
              B,
              [0.06, 0.06, 0.06],
            ));
          {
            const F = new qt(0.042, 0.42, 0.07, 1, 3, 1),
              E = F.attributes.position;
            for (let Y = 0; Y < E.count; Y++) {
              const et = (E.getY(Y) + 0.21) / 0.42;
              E.setZ(Y, E.getZ(Y) * (0.85 + et * 0.9) - et * 0.035);
            }
            (F.computeVertexNormals(),
              w("wood", F.translate(0, 1.05, -0.012), B, [0.07, 0.042, 0.024]));
          }
          V(Dt(g0(0.2), ve(-0.15), Ot(0, 1.27, -0.01), B));
          continue;
        }
        const N = [
            at(0, 0, 0),
            at(0.015, C * 0.4, 0.01),
            at(-0.01, C * 0.75, -0.01),
            at(0.01, C + 0.25, 0),
          ],
          H = [
            at(-0.36, 0, 0),
            at(-0.12, 0.012, 0.01),
            at(0.14, -0.01, 0),
            at(0.36, 0.015, -0.01),
          ].map((B) => B.add(at(0, C * 0.72 + 0.25, 0.042)));
        e.bark.push(
          g(
            Vt(N, (B) => 0.045 * (1 - B * 0.3), 7, { cap: !0 }).applyMatrix4(D),
          ),
          g(
            Vt(H, (B) => 0.034 * (1 - B * 0.2), 7, { cap: !0 }).applyMatrix4(D),
          ),
        );
        const Q = new s0(0.04, 0.012, 5, 10)
          .rotateY(Math.PI / 4)
          .translate(0, C * 0.72 + 0.25, 0.018);
        (w("cloth", Q, D, [0.42, 0.4, 0.34]),
          w(
            "cloth",
            new s0(0.038, 0.011, 5, 10)
              .rotateY(-Math.PI / 4)
              .translate(0, C * 0.72 + 0.25, 0.02),
            D,
            [0.4, 0.38, 0.33],
          ));
        const W = new m0(0.04, 0.22, 1, 4).translate(
          0.03,
          C * 0.72 + 0.25 - 0.12,
          0.05,
        );
        (w(
          "cloth",
          W,
          D,
          [0.4, 0.38, 0.32],
          (B, F) => (L === P ? Math.max(0, C * 0.72 + 0.25 - F) * 2.5 : 0),
          1.7 + L,
        ),
          L === P && V(Dt(g0(-0.35), ve(0.25), Ot(0, C + 0.12, 0.02), D)));
      }
      d.push({
        name: m,
        x: +I.x.toFixed(2),
        z: +I.z.toFixed(2),
        s: +k.toFixed(1),
      });
    };
  (z("graves", ae.graves, 3, 1, -1),
    z("graves2", ae.graves2, 2, -1, 1),
    (a = "shoe"));
  {
    const [m, k, S] = ae.shoe,
      A = y(m, k, S, 2.1),
      b = Dt(g0(1), Ot(0, 0.026, 0), A.m),
      P = (K) =>
        0.0185 +
        0.0095 * Math.min(1, Math.max(0, (K + 0.025) / 0.07)) -
        0.003 * Math.max(0, 1 - Math.abs(K + 0.005) / 0.025),
      _ = (K) => {
        const j = new he();
        for (let O = 0; O <= 32; O++) {
          const J = (O / 32) * ne,
            tt = 0.068 * Math.cos(J),
            st = P(tt) * Math.sin(J) * K;
          O ? j.lineTo(tt * K, st) : j.moveTo(tt * K, st);
        }
        return j;
      },
      I = new te(_(1), {
        depth: 0.011,
        bevelEnabled: !0,
        bevelThickness: 0.002,
        bevelSize: 0.002,
        bevelSegments: 1,
        curveSegments: 8,
      }).rotateX(-Math.PI / 2);
    w("leather", I, b, [0.035, 0.028, 0.022]);
    const R = _(1.04);
    R.holes.push(new Lo(_(0.9).getPoints(32)));
    const V = new te(R, {
      depth: 0.026,
      bevelEnabled: !0,
      bevelThickness: 0.002,
      bevelSize: 0.0015,
      bevelSegments: 1,
      curveSegments: 8,
    })
      .rotateX(-Math.PI / 2)
      .translate(0, 0.012, 0);
    (w("leather", V, b, [0.42, 0.035, 0.028]),
      w(
        "leather",
        new js(_(0.9), 8).rotateX(-Math.PI / 2).translate(0, 0.0145, 0),
        b,
        [0.06, 0.045, 0.035],
      ));
    const L = new t0(1, 16, 8, 0, ne, 0, Math.PI / 2)
      .scale(0.04, 0.03, 0.027)
      .translate(0.03, 0.012, 0);
    (w("leather", L, b, [0.45, 0.04, 0.03]),
      w(
        "leather",
        new s0(0.025, 0.0042, 5, 14, Math.PI)
          .rotateY(Math.PI / 2)
          .scale(1, 1.25, 1)
          .translate(-0.008, 0.026, 0),
        b,
        [0.28, 0.04, 0.03],
      ),
      w(
        "metal",
        new s0(0.0055, 0.0014, 4, 10).translate(-0.008, 0.026, 0.026),
        b,
        [0.55, 0.45, 0.25],
      ),
      d.push({ name: "shoe", x: +A.x.toFixed(2), z: +A.z.toFixed(2), s: m }));
  }
  a = "suitcase";
  {
    const [m, k, S] = ae.suitcase,
      A = y(m, k, S, -0.45),
      b = 0.64,
      P = 0.42,
      _ = 0.12,
      I = 0.012,
      R = (tt) => [
        new Zt(b, I, P, 1, 0.005).translate(0, I / 2, 0),
        new Zt(b, tt, I, 1, 0.005).translate(0, tt / 2, -P / 2 + I / 2),
        new Zt(b, tt, I, 1, 0.005).translate(0, tt / 2, P / 2 - I / 2),
        new Zt(I, tt, P, 1, 0.005).translate(-b / 2 + I / 2, tt / 2, 0),
        new Zt(I, tt, P, 1, 0.005).translate(b / 2 - I / 2, tt / 2, 0),
      ],
      V = Dt(Ot(0, 0.002, 0), A.m);
    for (const tt of R(_)) w("leather", tt, V, [0.1, 0.045, 0.03]);
    const L = Dt(g0(-2.1), ve(0.18), Ot(0.02, _, P / 2 - 0.01), V);
    for (const tt of R(0.05)) w("leather", tt, L, [0.1, 0.045, 0.03]);
    w(
      "cloth",
      new m0(b - 0.03, P - 0.03)
        .rotateX(-Math.PI / 2)
        .translate(0, I + 0.002, 0),
      V,
      [0.12, 0.03, 0.025],
    );
    for (const tt of [-0.18, 0.18])
      w(
        "metal",
        new qt(0.03, 0.022, 0.012).translate(tt, _ - 0.01, -P / 2 - 0.004),
        V,
        [0.35, 0.3, 0.18],
      );
    w(
      "leather",
      new s0(0.05, 0.007, 4, 10, Math.PI).translate(0, _ + 0.004, 0).rotateY(0),
      Dt(g0(-Math.PI / 2), Ot(0, 0.01, -P / 2 - 0.03), V),
      [0.07, 0.035, 0.025],
    );
    const K = Be(
      0.4,
      0.95,
      10,
      18,
      (tt) => 0.8 + 0.2 * Math.sin(tt * 3),
      0.025,
      3.1,
      (tt, st) =>
        st < 0.35 ? 0.09 + 0.05 * Math.sin((st / 0.35) * Math.PI) : 0,
    );
    w(
      "cloth",
      K,
      Dt(Ot(0, 0, 0.47 - 0.95 / 2 - 0.1), B0(Math.PI), V),
      [0.3, 0.28, 0.24],
    );
    const j = Be(0.62, 0.95, 14, 18, (tt) => 0.38 + 0.62 * tt, 0.03, 7.7);
    w("cloth", j, Dt(B0(0.5), Ot(-0.45, 0, -0.85), V), [0.075, 0.1, 0.15]);
    const O = Be(0.48, 0.55, 10, 10, (tt) => (tt > 0.75 ? 1.6 : 1), 0.045, 1.9);
    w("wool", O, Dt(B0(-0.9), Ot(0.55, 0, -0.55), V), [0.055, 0.05, 0.045]);
    const J = Be(0.07, 0.24, 2, 5, () => 1, 0.01, 5.5);
    (w("wool", J, Dt(B0(1.3), Ot(0.1, 0, -1.25), V), [0.17, 0.15, 0.12]),
      d.push({
        name: "suitcase",
        x: +A.x.toFixed(2),
        z: +A.z.toFixed(2),
        s: m,
      }),
      o.sdAt(A.x, A.z) < 0.4 && i.push({ x: A.x, z: A.z, r: 0.3, thing: !0 }));
  }
  a = "coat";
  {
    const m = (u.lamps || [])
        .filter(
          (S) =>
            S.kind === "post" &&
            S.fate === "dead" &&
            S.s != null &&
            Math.abs(S.s - ae.coat[0]) < 6,
        )
        .sort(
          (S, A) => Math.abs(S.s - ae.coat[0]) - Math.abs(A.s - ae.coat[0]),
        )[0],
      k = m ? m.s : ae.coat[0];
    if (m) {
      const S = o.at(Math.max(0, k - 10)),
        A = Math.atan2(S.x - m.x, S.z - m.z),
        b = new wt().compose(at(m.x, 0, m.z), es.setFromAxisAngle(os, A), ss),
        P = 1.92,
        _ = 1.28,
        I = 30,
        R = 20,
        V = 2.6,
        L = [],
        K = [],
        j = [];
      for (let G = 0; G <= R; G++) {
        const q = G / R,
          U = q * _,
          Z =
            q < 0.06
              ? 0.075 + (q / 0.06) * 0.16
              : 0.235 -
                0.02 * Math.min(1, (q - 0.06) / 0.3) +
                Math.max(0, q - 0.5) * 0.09,
          ot =
            q < 0.06
              ? 0.06 + (q / 0.06) * 0.045
              : 0.105 + Math.max(0, q - 0.5) * 0.06;
        for (let $ = 0; $ <= I; $++) {
          const C = Math.PI / 2 + 0.13 + ($ / I) * (ne - 0.26),
            T = Math.cos(C),
            D = Math.sin(C),
            N =
              1 +
              (0.05 * Math.sin(C * 6 + q * 3) +
                0.03 * Math.sin(C * 11 - q * 5)) *
                q +
              0.02 * It(C * 3, U * 4);
          let H = Math.sign(T) * Math.pow(Math.abs(T), 2 / V) * Z * N,
            Q = Math.sign(D) * Math.pow(Math.abs(D), 2 / V) * ot * N;
          const W = Math.max(0, 1 - Math.abs(si(C - Math.PI / 2)) / 0.9);
          (q < 0.4 &&
            ((H *= 1 + 0.25 * W * (1 - q / 0.4)),
            (Q += 0.02 * W * (1 - q / 0.4))),
            L.push(H, P - U - (q > 0.9 ? 0.02 * Math.sin(C * 3) : 0), Q),
            j.push(Math.pow(q, 1.7), 0.7));
        }
      }
      for (let G = 0; G < R; G++)
        for (let q = 0; q < I; q++) {
          const U = G * (I + 1) + q,
            Z = U + I + 1;
          K.push(U, Z, U + 1, U + 1, Z, Z + 1);
        }
      const O = new Rt();
      (O.setAttribute("position", new xt(L, 3)),
        O.setIndex(K),
        O.computeVertexNormals());
      {
        const G = O.attributes.position,
          q = new Float32Array(G.count * 2);
        for (let U = 0; U < G.count; U++)
          ((q[U * 2] = Math.atan2(G.getZ(U), G.getX(U)) * 0.3),
            (q[U * 2 + 1] = G.getY(U)));
        O.setAttribute("uv", new vt(q, 2));
      }
      (O.setAttribute("aSway", new xt(j, 2)),
        w("wool", O, b, [0.028, 0.025, 0.022]));
      for (const G of [-1, 1]) {
        const q = Vt(
          [
            at(G * 0.215, P - 0.06, 0),
            at(G * 0.245, P - 0.38, 0.02),
            at(G * 0.25, P - 0.62, 0.05),
            at(G * 0.24, P - 0.8, 0.06),
          ],
          (U) => 0.06 - U * 0.008,
          9,
          { cap: !0 },
        );
        w(
          "wool",
          q,
          b,
          [0.025, 0.022, 0.02],
          (U, Z) => Math.pow(Math.max(0, (P - Z) / _), 1.6),
          0.7,
        );
      }
      w(
        "wool",
        new Pt(0.075, 0.095, 0.085, 16, 1, !0, Math.PI * 0.15, Math.PI * 1.7)
          .rotateY(Math.PI / 2)
          .translate(0, P + 0.02, 0),
        b,
        [0.04, 0.036, 0.032],
      );
      const J = Dt(ve(0.1), g0(-0.06), Ot(0, 2.05, 0), b),
        tt = new ro(
          [
            [0.092, 0],
            [0.09, 0.02],
            [0.085, 0.1],
            [0.06, 0.125],
            [0, 0.13],
          ].map(([G, q]) => new re(G, q)),
          16,
        );
      w("wool", tt, J, [0.04, 0.035, 0.03]);
      const st = new nn(0.088, 0.175, 22, 1).rotateX(-Math.PI / 2);
      {
        const G = st.attributes.position;
        for (let q = 0; q < G.count; q++) {
          const U = Math.hypot(G.getX(q), G.getZ(q));
          G.setY(
            q,
            (U - 0.09) *
              0.28 *
              (0.6 + 0.4 * Math.cos(Math.atan2(G.getZ(q), G.getX(q)) * 2)),
          );
        }
        st.computeVertexNormals();
      }
      (w("wool", st, J, [0.04, 0.035, 0.03]),
        w(
          "cloth",
          new Pt(0.091, 0.093, 0.022, 16, 1, !0).translate(0, 0.03, 0),
          J,
          [0.015, 0.013, 0.012],
        ),
        d.push({ name: "coat", x: +m.x.toFixed(2), z: +m.z.toFixed(2), s: k }));
    }
  }
  a = "strips";
  {
    const m = [],
      k = new Set();
    for (const [S, A] of ae.strips) {
      const b = o.at(S),
        P = A === "L" ? 1 : -1;
      let _ = null,
        I = 1e9;
      for (const q of u.trees || []) {
        if (q.yard || k.has(q) || (q.kind === "young" && q.r < 0.1)) continue;
        const U = o.dPathAt(q.x, q.z) - o.hw(o.sPathAt(q.x, q.z)),
          Z = q.x - b.x,
          ot = q.z - b.z,
          $ = Z * b.tz - ot * b.tx;
        if (U < 0.7 + q.r || U > 3.2 + q.r || $ * P < 0) continue;
        const C = Math.abs(o.sPathAt(q.x, q.z) - S);
        C > 4.5 || (C + U * 0.5 < I && ((I = C + U * 0.5), (_ = q)));
      }
      if (!_) {
        const q = o.hw(S),
          U = b.x + b.tz * P * (q + 0.55),
          Z = b.z - b.tx * P * (q + 0.55),
          ot = o.heightAt(U, Z),
          $ = at((t() - 0.5) * 0.25, 0, (t() - 0.5) * 0.25),
          C = 1.95 + t() * 0.3,
          T = [
            at(U, ot - 0.15, Z),
            at(U + $.x * 0.4, ot + C * 0.45, Z + $.z * 0.4),
            at(U + $.x * 0.8 + 0.03, ot + C * 0.8, Z + $.z * 0.8),
            at(U + $.x, ot + C, Z + $.z),
          ];
        e.bark.push(
          g(
            Vt(T, (N) => 0.038 * (1 - N * 0.55) + 0.006, 6, { cap: !0 }),
            0.2,
          ),
        );
        const D = at(b.x - U, 0, b.z - Z).normalize();
        m.push({ knot: T[3].clone().add(at(0, -0.06, 0)), toP: D, s: S });
        continue;
      }
      k.add(_);
      const R = _,
        V = o.at(o.sPathAt(R.x, R.z)),
        L = at(V.x - R.x, 0, V.z - R.z).normalize(),
        K = 2.05 + t() * 0.35,
        j = (R.kind === "giant", R.r * 0.95),
        O = at(R.x + L.x * j * 0.8, K, R.z + L.z * j * 0.8),
        J = Math.min(
          1.5,
          Math.max(
            0.7,
            o.dPathAt(R.x, R.z) - o.hw(o.sPathAt(R.x, R.z)) - j + 0.2,
          ),
        ),
        tt = at(-L.z, 0, L.x).multiplyScalar((t() - 0.5) * 0.4),
        st = [
          O,
          O.clone()
            .addScaledVector(L, J * 0.4)
            .add(at(0, 0.05, 0))
            .add(tt),
          O.clone()
            .addScaledVector(L, J * 0.75)
            .add(at(0, 0.03, 0))
            .add(tt),
          O.clone()
            .addScaledVector(L, J)
            .add(at(0, -0.02, 0))
            .add(tt.clone().multiplyScalar(1.4)),
        ];
      e.bark.push(
        g(
          Vt(st, (q) => 0.04 * (1 - q * 0.6) + 0.006, 6, { cap: !0 }),
          0.15,
        ),
      );
      const G = st[2].clone().lerp(st[3], 0.35);
      m.push({ knot: G, toP: L, s: S });
    }
    (m.forEach((S, A) => {
      const b = new wt().compose(
        S.knot,
        es.setFromAxisAngle(
          os,
          Math.atan2(S.toP.x, S.toP.z) + (t() - 0.5) * 0.8,
        ),
        ss,
      );
      w("cloth", new t0(0.035, 8, 6).scale(1.4, 0.9, 1), b, [0.42, 0.4, 0.35]);
      const P = 0.5 + t() * 0.35,
        _ = 0.075 + t() * 0.04,
        I = 10,
        R = [],
        V = [],
        L = [],
        K = (t() - 0.5) * 0.12,
        j = (t() - 0.5) * 1.2;
      for (let J = 0; J <= I; J++) {
        const tt = J / I,
          st = -tt * P,
          G = j * tt,
          q = Math.sin(tt * 2.2) * K;
        for (const U of [-1, 1]) {
          const Z = J === I ? (U > 0 ? 0.05 : -0.03) * P * 0.3 : 0;
          (R.push(
            q + ((Math.cos(G) * U * _) / 2) * (1 - tt * 0.3),
            st + Z,
            (Math.sin(G) * U * _) / 2 + tt * tt * 0.025,
          ),
            L.push(U * 0.04, st));
        }
      }
      for (let J = 0; J < I; J++) {
        const tt = J * 2;
        V.push(tt, tt + 2, tt + 1, tt + 1, tt + 2, tt + 3);
      }
      const O = new Rt();
      (O.setAttribute("position", new xt(R, 3)),
        O.setAttribute("uv", new xt(L, 2)),
        O.setIndex(V),
        O.computeVertexNormals(),
        w(
          "cloth",
          O,
          b,
          [0.46, 0.44, 0.38],
          A === 1 ? (J, tt) => Math.min(1, Math.max(0, -tt) * 3) : null,
          2.3 + A,
        ));
    }),
      m.length &&
        d.push({
          name: "strips",
          x: +m[0].knot.x.toFixed(2),
          z: +m[0].knot.z.toFixed(2),
          s: m[0].s,
          n: m.length,
        }));
  }
  a = "crate";
  {
    const [m, k, S] = ae.crate,
      A = y(m, k, S, 0.2),
      b = 0.56,
      P = 0.3,
      _ = 0.32,
      I = 0.022,
      R = [
        new Zt(b, I, _, 1, 0.005).translate(0, I / 2, 0),
        new Zt(b, P, I, 1, 0.005).translate(0, P / 2, -_ / 2 + I / 2),
        new Zt(b, P, I, 1, 0.005).translate(0, P / 2, _ / 2 - I / 2),
        new Zt(I, P, _, 1, 0.005).translate(-b / 2 + I / 2, P / 2, 0),
        new Zt(I, P, _, 1, 0.005).translate(b / 2 - I / 2, P / 2, 0),
      ];
    for (const K of R) w("wood", K, A.m, [0.13, 0.15, 0.08]);
    for (const K of [-b / 2 - 0.015, b / 2 + 0.015])
      w(
        "cloth",
        new s0(0.045, 0.008, 4, 10, Math.PI)
          .rotateY(Math.PI / 2)
          .translate(K, P * 0.62, 0),
        A.m,
        [0.3, 0.26, 0.18],
      );
    w(
      "wood",
      new Zt(b + 0.02, I, _ + 0.02, 1, 0.005),
      Dt(ve(0.32), B0(-0.5), Ot(-0.45, 0.07, 0.25), A.m),
      [0.13, 0.15, 0.08],
    );
    for (const K of [-0.2, 0.2])
      w(
        "metal",
        new qt(0.04, 0.05, 0.01).translate(K, P - 0.03, -_ / 2 - 0.006),
        A.m,
        [0.08, 0.08, 0.07],
      );
    (d.push({ name: "crate", x: +A.x.toFixed(2), z: +A.z.toFixed(2), s: m }),
      o.sdAt(A.x, A.z) < 0.4 && i.push({ x: A.x, z: A.z, r: 0.32, thing: !0 }));
    const V = Dt(g0(Math.PI - 0.3), B0(0.9), Ot(0.55, 0.06, -0.45), A.m);
    (w(
      "wool",
      new Pt(0.105, 0.095, 0.075, 16).translate(0, 0.038, 0),
      V,
      [0.12, 0.12, 0.07],
    ),
      w(
        "wool",
        new Pt(0.115, 0.105, 0.025, 16)
          .translate(0, 0.085, 0)
          .scale(1, 1, 1.08),
        V,
        [0.12, 0.12, 0.07],
      ),
      w(
        "leather",
        new Ms(0.09, 12, 0, Math.PI)
          .rotateX(-Math.PI / 2 + 0.25)
          .translate(0, 0.005, 0.1),
        V,
        [0.03, 0.025, 0.02],
      ));
    const L = a0(
      [
        new Pt(0.0062, 0.0062, 0.045, 7).translate(0, 0.0225, 0),
        new Pt(0.0042, 0.006, 0.01, 7).translate(0, 0.05, 0),
      ].map((K) => d0(K)),
    );
    for (let K = 0; K < 18; K++) {
      const j = t() * ne,
        O = 0.25 + t() * 0.9,
        J = Math.cos(j) * O + 0.2,
        tt = Math.sin(j) * O - 0.5;
      w(
        "metal",
        L,
        Dt(g0(Math.PI / 2), B0(t() * ne), Ot(J, 0.008, tt), A.m),
        [0.42, 0.3, 0.11],
      );
    }
  }
  a = "cart";
  const x = [],
    v = [];
  {
    const m = Nt.cart,
      k = -m.gap,
      S = new wt()
        .makeBasis(at(m.ux, 0, m.uz), at(0, 1, 0), at(-m.vx * k, 0, -m.vz * k))
        .setPosition(m.x, Math.max(0, o.heightAt(m.x, m.z)), m.z),
      A = (C, T, D = 5) => {
        const N = C.attributes.position;
        for (let H = 0; H < N.count; H += D)
          x.push([N.getX(H), N.getY(H), N.getZ(H), T, !1]);
      },
      b = [],
      P = 2.2,
      _ = 1.15,
      I = 0.42,
      R = 0.66,
      V = 0.62,
      L = 0.62,
      K = P / 2 + 1.5,
      j = [0.062, 0.058, 0.052],
      O = [0.05, 0.046, 0.041],
      J = [0.04, 0.038, 0.035];
    for (let C = 0; C < 5; C++)
      b.push([
        "wood",
        new Zt(_ / 5 - 0.024, 0.035, P - 0.02, 1, 0.006).translate(
          -_ / 2 + _ / 10 + (C * _) / 5,
          R,
          0,
        ),
        C % 2 ? j : O,
      ]);
    for (const C of [-1, 1])
      for (let T = 0; T < 2; T++)
        b.push([
          "wood",
          new Zt(0.035, I / 2 - 0.01, P, 1, 0.006).translate(
            C * (_ / 2 - 0.018),
            R + 0.02 + I / 4 + (T * I) / 2,
            0,
          ),
          T ? O : j,
        ]);
    (b.push([
      "wood",
      new Zt(_, I, 0.03, 1, 0.006).translate(0, R + I / 2, P / 2 - 0.015),
      j,
    ]),
      b.push([
        "wood",
        new Zt(_ - 0.04, I - 0.03, 0.028, 1, 0.006)
          .translate(0, (I - 0.03) / 2, 0)
          .applyMatrix4(Dt(g0(-1.85), Ot(0, R, -P / 2 - 0.016))),
        O,
      ]));
    for (const C of [-1, 1])
      for (const T of [-1, 1])
        b.push([
          "wood",
          new Pt(0.028, 0.034, I + 0.2, 7).translate(
            C * (_ / 2 + 0.03),
            R + (I + 0.2) / 2 - 0.04,
            T * (P / 2 - 0.12),
          ),
          O,
        ]);
    b.push([
      "metal",
      new Pt(0.035, 0.035, _ + 0.36, 8).rotateZ(Math.PI / 2).translate(0, L, 0),
      J,
    ]);
    const tt = ya(V, 12, 0.035, 0.019, 0.085, 0.07);
    for (const C of [-1, 1]) {
      const T = new wt()
        .makeRotationY(Math.PI / 2)
        .premultiply(new wt().makeTranslation(C * (_ / 2 + 0.14), L, 0));
      b.push(
        ["wood", tt.rim.clone().applyMatrix4(T), j],
        ["wood", tt.hub.clone().applyMatrix4(T), O],
        ["metal", new s0(V + 0.03, 0.013, 4, 40).applyMatrix4(T), J],
      );
      for (const D of tt.spokes) b.push(["wood", D.clone().applyMatrix4(T), O]);
    }
    for (const C of [-1, 1])
      b.push([
        "wood",
        Vt(
          [
            at(C * 0.34, R - 0.08, -0.4),
            at(C * 0.34, R - 0.09, P / 2),
            at(C * 0.35, R - 0.07, P / 2 + 0.8),
            at(C * 0.33, R, K),
          ],
          () => 0.045,
          8,
          { cap: !0 },
        ),
        j,
      ]);
    b.push([
      "wood",
      new Pt(0.034, 0.034, 0.72, 7)
        .rotateZ(Math.PI / 2)
        .translate(0, R - 0.02, K - 0.12),
      O,
    ]);
    const st = Dt(ve(Math.PI / 2 - 0.46), B0(0.1));
    let G = 1e9;
    {
      const C = at(0, 0, 0);
      for (const [, T] of b) {
        const D = T.attributes.position;
        for (let N = 0; N < D.count; N++)
          (C.fromBufferAttribute(D, N).applyMatrix4(st),
            (G = Math.min(G, C.y)));
      }
    }
    const q = Dt(st, Ot(0.62, -G - 0.02, 0.58 - K), S);
    for (const [C, T, D] of b) {
      const N = w(C, T, q, D);
      A(N, C === "metal" ? 0.02 : 0.03);
    }
    const U = (C) => C * k,
      Z = (C, T, D = 0, N = 0) => {
        const [H, Q] = He(m, C, T);
        return new wt().compose(
          at(H, Math.max(0, o.heightAt(H, Q)) + D, Q),
          es.setFromAxisAngle(os, Math.atan2(m.ux, m.uz) + N),
          ss,
        );
      },
      ot = (C, T, D, N) => [
        new Zt(C, N, T, 1, 0.005).translate(0, N / 2, 0),
        new Zt(C, D, N, 1, 0.005).translate(0, D / 2, -T / 2 + N / 2),
        new Zt(C, D, N, 1, 0.005).translate(0, D / 2, T / 2 - N / 2),
        new Zt(N, D, T, 1, 0.005).translate(-C / 2 + N / 2, D / 2, 0),
        new Zt(N, D, T, 1, 0.005).translate(C / 2 - N / 2, D / 2, 0),
      ],
      $ = (C, T, D) => {
        const [N, H] = He(m, C, U(T));
        x.push([N, 0.15, H, D, !1]);
      };
    {
      const C = Z(-1.75, U(1.45), 0.002, 0.5);
      for (const T of ot(0.62, 0.4, 0.13, 0.012))
        w("leather", T, C, [0.09, 0.05, 0.035]);
      for (const T of ot(0.62, 0.4, 0.05, 0.012))
        w(
          "leather",
          T,
          Dt(g0(-2.2), Ot(0, 0.13, 0.19), C),
          [0.09, 0.05, 0.035],
        );
      (w(
        "cloth",
        new m0(0.58, 0.36).rotateX(-Math.PI / 2).translate(0, 0.015, 0),
        C,
        [0.13, 0.04, 0.03],
      ),
        w(
          "cloth",
          Be(
            0.5,
            0.9,
            10,
            16,
            (T) => 0.75 + 0.25 * Math.sin(T * 3),
            0.028,
            8.3,
          ),
          Dt(B0(1.9), Ot(-0.55, 0, -0.35), C),
          [0.16, 0.155, 0.14],
        ),
        w(
          "cloth",
          Be(0.58, 0.8, 12, 14, (T) => 0.4 + 0.6 * T, 0.03, 2.2),
          Dt(B0(-0.4), Ot(0.45, 0, -0.75), C),
          [0.09, 0.085, 0.12],
        ),
        $(-1.75, 1.45, 0.4),
        $(-2.2, 1.2, 0.3),
        $(-1.4, 0.75, 0.3));
    }
    {
      const C = Z(-0.95, U(0.42), 0, -0.25);
      for (const T of ot(0.42, 0.18, 0.6, 0.012))
        w("leather", T, Dt(g0(0.12), C), [0.06, 0.045, 0.035]);
      (w(
        "metal",
        new s0(0.05, 0.007, 4, 10, Math.PI).translate(0, 0.6, 0),
        Dt(g0(0.12), C),
        J,
      ),
        $(-0.95, 0.42, 0.28));
    }
    {
      const C = Z(-2.55, U(2.15), 0, 1.1),
        T = new t0(0.28, 18, 12).scale(1.15, 0.72, 0.9);
      {
        const D = T.attributes.position;
        for (let N = 0; N < D.count; N++) {
          const H = D.getX(N),
            Q = D.getY(N),
            W = D.getZ(N);
          D.setXYZ(
            N,
            H * (1 + 0.08 * It(Q * 9, W * 9)),
            Math.max(-0.02, Q) + 0.2,
            W * (1 + 0.08 * It(H * 9 + 3, Q * 9)),
          );
        }
        T.computeVertexNormals();
      }
      (w("wool", T, C, [0.085, 0.05, 0.04]),
        w(
          "wool",
          new t0(0.075, 10, 8).scale(1.3, 0.8, 1).translate(0.05, 0.42, 0.02),
          C,
          [0.075, 0.045, 0.035],
        ));
      for (const D of [0.9, -0.7])
        w(
          "wool",
          new no(0.05, 0.16, 6)
            .rotateZ(D)
            .translate(0.1 * Math.sign(D), 0.47, 0),
          C,
          [0.075, 0.045, 0.035],
        );
      $(-2.55, 2.15, 0.36);
    }
    {
      const C = Be(
        0.9,
        1.3,
        12,
        18,
        () => 1,
        0.04,
        5.1,
        (T, D) => (D > 0.62 ? (D - 0.62) * 0.75 : 0),
      );
      (w(
        "cloth",
        C,
        Z(-0.85, U(1.95), 0.01, Math.PI / 2 + 0.25),
        [0.15, 0.135, 0.11],
      ),
        $(-0.75, 1.85, 0.25));
    }
    {
      const C = new ro(
          [
            [0, 0],
            [0.12, 0],
            [0.14, 0.02],
            [0.15, 0.17],
            [0.165, 0.185],
            [0.15, 0.19],
          ].map(([N, H]) => new re(N, H)),
          18,
        ),
        T = Dt(
          g0(Math.PI / 2 - 0.15),
          Ot(0, 0.15, 0),
          Z(-1.35, U(0.05), 0, 1.2),
        );
      w("metal", C, T, [0.05, 0.048, 0.045]);
      for (const N of [-1, 1])
        w(
          "metal",
          new s0(0.035, 0.007, 4, 10, Math.PI)
            .rotateX(Math.PI / 2)
            .translate(N * 0.165, 0.16, 0),
          T,
          J,
        );
      $(-1.35, 0.05, 0.19);
      const D = a0(
        [
          new ro(
            [
              [0, 0],
              [0.1, 0],
              [0.12, 0.05],
              [0.11, 0.13],
              [0.06, 0.18],
              [0.02, 0.2],
              [0, 0.2],
            ].map(([N, H]) => new re(N, H)),
            14,
          ),
          new Pt(0.012, 0.02, 0.16, 6).rotateZ(-0.9).translate(0.14, 0.11, 0),
        ].map((N) => d0(N)),
      );
      (w(
        "metal",
        D,
        Dt(ve(1.45), Ot(0, 0.11, 0), Z(0.95, U(-0.18), 0, 0.4)),
        [0.07, 0.068, 0.062],
      ),
        $(0.95, -0.18, 0.16));
      for (const [N, H, Q] of [
        [-1.95, 0.25, 0.2],
        [-0.55, -0.22, 1.4],
        [-2.35, 0.8, 2.1],
      ])
        (w(
          "metal",
          new Pt(0.11, 0.09, 0.02, 16).translate(0, 0.012, 0),
          Dt(g0((Q - 1) * 0.1), Z(N, U(H), 0, Q)),
          [0.12, 0.115, 0.1],
        ),
          $(N, H, 0.12));
    }
    {
      const C = Dt(
        g0(-Math.PI / 2 + 0.12),
        Ot(0, 0.05, 0),
        Z(-2.25, U(2.75), 0, 0.3),
      );
      w("wood", new Zt(0.42, 0.035, 0.4, 1, 0.008).translate(0, 0.45, 0), C, j);
      for (const T of [-1, 1])
        for (const D of [-1, 1])
          w(
            "wood",
            new Pt(0.018, 0.02, 0.45, 6).translate(T * 0.18, 0.225, D * 0.17),
            C,
            O,
          );
      for (const T of [-1, 1])
        w(
          "wood",
          new Pt(0.018, 0.018, 0.5, 6).translate(T * 0.18, 0.7, -0.17),
          C,
          O,
        );
      for (const T of [0.62, 0.85])
        w(
          "wood",
          new Zt(0.38, 0.06, 0.02, 1, 0.006).translate(0, T, -0.17),
          C,
          j,
        );
      $(-2.25, 2.75, 0.45);
    }
    {
      const C = new t0(1, 16, 12).scale(0.32, 0.16, 0.22);
      {
        const T = C.attributes.position;
        for (let D = 0; D < T.count; D++) {
          const N = T.getX(D),
            H = T.getY(D);
          (T.setY(
            D,
            Math.max(-0.01, H) * (1 - 0.35 * Math.max(0, N / 0.32)) +
              0.025 * It(N * 11, T.getZ(D) * 11),
          ),
            T.setZ(D, T.getZ(D) * (1 - 0.45 * Math.max(0, N / 0.32) ** 2)));
        }
        C.computeVertexNormals();
      }
      (w("wool", C, Z(1.25, U(2.35), 0.02, 0.8), [0.11, 0.085, 0.055]),
        w(
          "wood",
          new Zt(1, 0.03, 0.17, 1, 0.006),
          Dt(ve(0.05), Z(-1.6, U(2.35), 0.02, 1.4)),
          O,
        ),
        $(1.25, 2.35, 0.3));
    }
    d.push({ name: "cart", x: +m.x.toFixed(2), z: +m.z.toFixed(2), s: m.s });
    for (const [C, T, D] of [
      [0, 2.75, 0.66],
      [0, 2.05, 0.68],
      [0, 1.35, 0.6],
      [-0.5, 0.78, 0.3],
      [-0.55, 0.28, 0.27],
      [-0.95, 0.42, 0.3],
      [-1.75, 1.45, 0.38],
      [-2.55, 2.15, 0.34],
      [-2.25, 2.75, 0.4],
    ]) {
      const [N, H] = He(m, C, U(T));
      i.push({ x: N, z: H, r: D, thing: !0, obst: "cart" });
    }
    for (const C of [2.7, 2.05, 1.4]) {
      const [T, D] = He(m, 0, U(C));
      v.push({
        x0: T - 0.45,
        x1: T + 0.45,
        z0: D - 0.45,
        z1: D + 0.45,
        y0: 0,
        y1: 1.3,
        obst: "cart",
      });
    }
  }
  a = "pram";
  {
    const [m, k, S] = ae.pram,
      A = y(m, k, S, -0.6),
      b = [],
      P = 0.82,
      _ = 0.4,
      I = 0.3,
      R = 0.42,
      V = (C) => {
        const T = P / 2,
          D = _ / 2,
          N = 0.12;
        return (
          C.moveTo(-T + N, -D),
          C.lineTo(T - N, -D),
          C.quadraticCurveTo(T, -D, T, -D + N),
          C.lineTo(T, D - N),
          C.quadraticCurveTo(T, D, T - N, D),
          C.lineTo(-T + N, D),
          C.quadraticCurveTo(-T, D, -T, D - N),
          C.lineTo(-T, -D + N),
          C.quadraticCurveTo(-T, -D, -T + N, -D),
          C
        );
      },
      L = V(new he()),
      K = V(new he()),
      j = new Lo();
    {
      const C = P / 2 - 0.018,
        T = _ / 2 - 0.018,
        D = 0.1;
      (j.moveTo(-C + D, -T),
        j.lineTo(C - D, -T),
        j.quadraticCurveTo(C, -T, C, -T + D),
        j.lineTo(C, T - D),
        j.quadraticCurveTo(C, T, C - D, T),
        j.lineTo(-C + D, T),
        j.quadraticCurveTo(-C, T, -C, T - D),
        j.lineTo(-C, -T + D),
        j.quadraticCurveTo(-C, -T, -C + D, -T));
    }
    L.holes.push(j);
    const O = new te(L, {
      depth: I,
      bevelEnabled: !0,
      bevelThickness: 0.008,
      bevelSize: 0.006,
      bevelSegments: 1,
      curveSegments: 4,
    })
      .rotateX(-Math.PI / 2)
      .translate(0, R, 0);
    {
      const C = O.attributes.position;
      for (let T = 0; T < C.count; T++) {
        const D = C.getY(T) - R;
        (C.setY(T, R + D),
          C.setX(T, C.getX(T) * (1 + (0.12 * D) / I)),
          C.setZ(T, C.getZ(T) * (1 + (0.1 * D) / I)));
      }
      O.computeVertexNormals();
    }
    (b.push(["leather", O, [0.025, 0.025, 0.028]]),
      b.push([
        "leather",
        new js(K, 4).rotateX(-Math.PI / 2).translate(0, R + 0.005, 0),
        [0.025, 0.025, 0.028],
      ]));
    const J = new t0(0.24, 16, 8, -Math.PI / 2, Math.PI, 0, Math.PI / 2)
      .scale(1.1, 1.05, 0.88)
      .rotateY(Math.PI)
      .translate(P / 2 - 0.2, R + I, 0);
    b.push(["leather", J, [0.02, 0.02, 0.022]]);
    for (const C of [0, -0.55, -1.1])
      b.push([
        "metal",
        new s0(0.25, 0.006, 4, 16, Math.PI)
          .rotateY(Math.PI / 2)
          .rotateZ(C)
          .translate(P / 2 - 0.2, R + I, 0),
        [0.1, 0.1, 0.1],
      ]);
    for (const C of [-0.28, 0.28]) {
      b.push([
        "metal",
        new Pt(0.009, 0.009, _ + 0.16, 6)
          .rotateX(Math.PI / 2)
          .translate(C, 0.17, 0),
        [0.1, 0.1, 0.1],
      ]);
      for (const T of [-0.15, 0.15])
        b.push([
          "metal",
          Vt(
            [at(C * 1.3, R, T), at(C * 1.05, 0.28, T), at(C, 0.17, T)],
            () => 0.008,
            5,
          ),
          [0.1, 0.1, 0.1],
        ]);
    }
    (b.push([
      "metal",
      Vt(
        [
          at(-P / 2, R + 0.1, -0.16),
          at(-P / 2 - 0.25, R + 0.45, -0.16),
          at(-P / 2 - 0.38, R + 0.62, -0.16),
        ],
        () => 0.011,
        6,
      ),
      [0.1, 0.1, 0.1],
    ]),
      b.push([
        "metal",
        Vt(
          [
            at(-P / 2, R + 0.1, 0.16),
            at(-P / 2 - 0.25, R + 0.45, 0.16),
            at(-P / 2 - 0.38, R + 0.62, 0.16),
          ],
          () => 0.011,
          6,
        ),
        [0.1, 0.1, 0.1],
      ]),
      b.push([
        "leather",
        new Pt(0.018, 0.018, 0.36, 8)
          .rotateX(Math.PI / 2)
          .translate(-P / 2 - 0.38, R + 0.62, 0),
        [0.03, 0.025, 0.02],
      ]));
    const tt = ya(0.17, 12, 0.012, 0.005, 0.025, 0.02);
    for (const C of [-0.28, 0.28])
      for (const T of [-_ / 2 - 0.06, _ / 2 + 0.06]) {
        const D = new wt().makeTranslation(C, 0.17, T);
        b.push(
          ["metal", tt.rim.clone().applyMatrix4(D), [0.05, 0.05, 0.05]],
          ["metal", tt.hub.clone().applyMatrix4(D), [0.1, 0.1, 0.1]],
        );
        for (const N of tt.spokes)
          b.push(["metal", N.clone().applyMatrix4(D), [0.12, 0.12, 0.12]]);
      }
    const st = Dt(g0(-1.5), Ot(0, _ / 2 + 0.08, 0.05), B0(0.15), A.m);
    for (const [C, T, D] of b) w(C, T, st, D);
    const G = Be(
      0.5,
      0.7,
      8,
      10,
      () => 1,
      0.03,
      4.4,
      (C, T) => (T > 0.7 ? (T - 0.7) * 0.9 : 0),
    );
    (w(
      "cloth",
      G,
      Dt(B0(Math.PI / 2 + 0.2), Ot(0.05, 0, -0.55), A.m),
      [0.5, 0.36, 0.33],
    ),
      d.push({ name: "pram", x: +A.x.toFixed(2), z: +A.z.toFixed(2), s: m }),
      o.sdAt(A.x, A.z) < 0.4 && i.push({ x: A.x, z: A.z, r: 0.45, thing: !0 }));
    const [q, U, Z] = ae.doll,
      ot = y(q, U, Z, 1.1),
      $ = Dt(g0(Math.PI / 2 - 0.08), Ot(0, 0.035, 0), ot.m);
    (w(
      "cloth",
      new Pt(0.05, 0.11, 0.2, 14, 1).translate(0, 0.1, 0).scale(1, 1, 0.55),
      $,
      [0.42, 0.3, 0.3],
    ),
      w(
        "leather",
        new t0(0.06, 14, 10).translate(0, 0.27, 0),
        $,
        [0.55, 0.47, 0.4],
      ),
      w(
        "leather",
        new t0(0.064, 14, 10, 0, ne, 0, Math.PI * 0.62)
          .rotateX(-0.5)
          .translate(0, 0.278, -0.006),
        $,
        [0.05, 0.03, 0.018],
      ));
    for (const C of [-1, 1])
      (w(
        "leather",
        new Ys(0.016, 0.11, 3, 8)
          .rotateZ(C * 0.5)
          .translate(C * 0.075, 0.15, 0),
        $,
        [0.55, 0.47, 0.4],
      ),
        w(
          "leather",
          new Ys(0.019, 0.12, 3, 8)
            .rotateZ(C * 0.12)
            .translate(C * 0.04, -0.06, 0),
          $,
          [0.55, 0.47, 0.4],
        ));
    d.push({ name: "doll", x: +ot.x.toFixed(2), z: +ot.z.toFixed(2), s: q });
  }
  const n = (m) => {
      m.vertexShader = m.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uFT;
attribute vec2 aSway;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
      if (aSway.x > 0.0) {
        // (cloth stirring in a breath of air that is not there: slow, uneven)
        float t = uFT, w = aSway.x;
        transformed.x += (sin(t * 0.83 + aSway.y) * 0.7 + sin(t * 1.91 + aSway.y * 2.3) * 0.3) * 0.035 * w;
        transformed.z += (sin(t * 0.67 + aSway.y * 1.7) * 0.7 + sin(t * 1.53 + aSway.y) * 0.3) * 0.03 * w;
      }`,
        );
    },
    l = (m) => {
      ((m.vertexShader = m.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute vec2 aHard;
varying vec2 vHard;`,
        )
        .replace(
          "#include <uv_vertex>",
          `#include <uv_vertex>
vHard = aHard;`,
        )),
        (m.fragmentShader = m.fragmentShader
          .replace(
            "#include <common>",
            `#include <common>
varying vec2 vHard;`,
          )
          .replace(
            "#include <metalnessmap_fragment>",
            `#include <metalnessmap_fragment>
metalnessFactor = vHard.x; if (vHard.y > 0.0) roughnessFactor = vHard.y;`,
          )));
    },
    f = (m, k, S = null, A = {}) => {
      const b = i0(At(m), k, S);
      return (
        (b.vertexColors = !0),
        A.side && (b.side = A.side),
        A.sheen != null &&
          b.sheen != null &&
          ((b.sheen = A.sheen),
          b.sheenColor && b.sheenColor.setRGB(0.09, 0.085, 0.08)),
        A.spec != null &&
          b.specularIntensity != null &&
          (b.specularIntensity = A.spec),
        b
      );
    },
    h = {
      fabric: f("linen_stained", "thing_fabric", n, {
        side: p0,
        sheen: 0.3,
        spec: 0.12,
      }),
      hard: f("leather_brown", "thing_hard", l),
      wood: f("house_plank", "thing_wood"),
    },
    c = { coat: ["fabric"], cart: ["wood"] },
    M = new Kt();
  M.name = "forest_things";
  for (const [m, k] of Object.entries(r))
    for (const S of ["fabric", "hard", "wood"]) {
      if (!k[S].length) continue;
      const A = a0(k[S]);
      (A.computeBoundingSphere(), A.computeBoundingBox());
      const b = new bt(A, h[S]);
      ((b.name = "things_" + m + "_" + S),
        (b.castShadow = !!c[m]?.includes(S)),
        (b.receiveShadow = !0),
        M.add(b));
    }
  return (
    d.sort((m, k) => m.s - k.s),
    {
      group: M,
      bark: e.bark,
      mounds: e.mounds,
      circles: i,
      things: d,
      cart: { solids: x, colliders: v },
    }
  );
}
