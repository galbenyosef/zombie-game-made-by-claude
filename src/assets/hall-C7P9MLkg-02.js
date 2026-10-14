// assets/hall-C7P9MLkg 02 — add
// Lines 290-530 of readable/assets/hall-C7P9MLkg.pretty.js (statement-aligned).
function buildHallSconces(b, C, { y: r = 1.86 } = {}) {
  const e = ((M, i) => b.mats.get(M, i))("brass_aged"),
    y = new Q();
  ((y.name = "sconces"), C.add(y));
  const o = new n0("sconces"),
    p = new _0({
      color: 10131082,
      roughness: 0.45,
      metalness: 0,
      transparent: !0,
      opacity: 0.78,
      side: f0,
      depthWrite: !1,
    });
  p.name = "sconce_glass_dead";
  const v = new _0({ color: 9209976, roughness: 0.3, metalness: 0 });
  v.name = "sconce_bulb_dead";
  const s = [],
    Y = [],
    m = [
      [0.012, 0],
      [0.016, 0.004],
      [0.028, 0.03],
      [0.04, 0.07],
      [0.047, 0.1],
      [0.05, 0.115],
    ];
  for (const M of ht) {
    const i = M.wall === "W",
      u = i ? 5.4 : 6.8,
      B = i ? Math.PI / 2 : -Math.PI / 2,
      _ = (N) => o.at([u, r, M.z], B, N);
    let l = null;
    if (
      (_(() => {
        o.add(
          H(
            [
              [0, 0],
              [0.034, 0],
              [0.04, 0.004],
              [0.04, 0.008],
              [0.03, 0.013],
              [0.012, 0.016],
              [0, 0.017],
            ],
            28,
          ),
          e,
          { m: g([0, 0, 0], [Math.PI / 2, 0, 0], [1, 1, 1.45]), uv: "keep" },
        );
        const N = new a0([
          P(0, -0.01, 0.012),
          P(0, -0.04, 0.05),
          P(0, -0.02, 0.085),
          P(0, 0.03, 0.09),
        ]);
        (o.add(
          S0(N, (G) => 0.0065 - G * 0.0015, 20, 8),
          e,
          { uv: "keep" },
        ),
          o.add(new G0(0.009, 12, 8), e, {
            m: g([0, -0.036, 0.047]),
            uv: "keep",
          }),
          (l = [0, 0.03, 0.09]),
          o.add(
            H(
              [
                [0, 0],
                [0.008, 0],
                [0.012, 0.006],
                [0.026, 0.012],
                [0.03, 0.017],
                [0.026, 0.018],
                [0.012, 0.014],
                [0, 0.014],
              ],
              20,
            ),
            e,
            { m: g(l), uv: "keep" },
          ),
          o.add(
            H(
              [
                [0, 0.012],
                [0.011, 0.012],
                [0.011, 0.034],
                [0.009, 0.036],
                [0, 0.036],
              ],
              14,
            ),
            e,
            { m: g(l), uv: "keep" },
          ),
          M.state === "dead"
            ? (o.add(H(m, 24), p, {
                m: g([l[0], l[1] + 0.014, l[2]]),
                uv: "keep",
              }),
              o.add(
                H(
                  [
                    [0, 0],
                    [0.008, 0.004],
                    [0.011, 0.02],
                    [0.008, 0.036],
                    [0.003, 0.046],
                    [0, 0.048],
                  ],
                  12,
                ),
                v,
                { m: g([l[0], l[1] + 0.034, l[2]]), uv: "keep" },
              ))
            : M.state === "broken" &&
              (o.add(
                H(m.slice(0, 4), 24, { phi0: 0.6, phi: Math.PI * 1.25 }),
                p,
                { m: g([l[0], l[1] + 0.014, l[2]]), uv: "keep" },
              ),
              o.add(
                H(
                  [
                    [0, 0],
                    [0.008, 0.004],
                    [0.009, 0.012],
                    [0.004, 0.014],
                    [0, 0.014],
                  ],
                  10,
                ),
                v,
                { m: g([l[0], l[1] + 0.034, l[2]]), uv: "keep" },
              )));
      }),
      M.state === "live")
    ) {
      const N = new Q();
      ((N.name = "sconce_live"),
        N.position.set(u, r, M.z),
        (N.rotation.y = B),
        y.add(N));
      const G = new _0({
        color: 15259832,
        roughness: 0.5,
        emissive: 16777215,
        side: f0,
      });
      G.name = "sconce_glass_live";
      const k = new p0(H(m, 24), G);
      (k.position.set(l[0], l[1] + 0.014, l[2]), N.add(k));
      const h = O0(4, 2.2, 0.9, { name: "sconce_bulb_live" }),
        n = new p0(
          H(
            [
              [0, 0],
              [0.008, 0.004],
              [0.011, 0.02],
              [0.008, 0.036],
              [0.003, 0.046],
              [0, 0.048],
            ],
            12,
          ),
          h,
        );
      (n.position.set(l[0], l[1] + 0.034, l[2]), N.add(n));
      const a = new B0(16752978, 1.1, 3.6, 2);
      ((a.name = "sconceLive"),
        a.position.set(l[0], l[1] + 0.06, l[2] + 0.02),
        N.add(a),
        s.push(a),
        Y.push({
          light: a,
          shadeMat: G,
          bulbMat: h,
          flick: new W0(b.rng(313), { amount: 0.55, rate: 1.4 }),
          base: a.intensity,
        }));
    }
  }
  return (
    o.flush(y),
    {
      group: y,
      lights: s,
      setOn(M) {
        for (const i of Y) i.flick.on = !!M;
      },
      setFlicker(M) {
        for (const i of Y) i.flick.amount = M;
      },
      update(M) {
        for (const i of Y) {
          const u = i.flick.update(M);
          ((i.light.intensity = i.base * u),
            i.shadeMat.emissive.setRGB(1.25 * u, 0.62 * u, 0.22 * u),
            i.bulbMat.color.setRGB(4 * u, 2.2 * u, 0.9 * u));
        }
      },
    }
  );
}
function pt(b, C) {
  b.computeBoundingBox();
  const { min: r, max: x } = b.boundingBox,
    e = b.attributes.position;
  for (let y = 0; y < e.count; y++) {
    const o = (x.y - e.getY(y)) / (x.y - r.y),
      p = 1 - C * o;
    (e.setX(y, e.getX(y) * p), e.setZ(y, e.getZ(y) * p));
  }
  return (b.computeVertexNormals(), b);
}
function Z0(
  b,
  { R: C = 0.0055, pitch: r = 0.009, r: x = 0.0021, stretch: e = 1 } = {},
) {
  const y = b.getLength(),
    o = Math.max(2, Math.round(y / (r * e))),
    p = 8,
    v = o * p,
    s = b.computeFrenetFrames(v, !1),
    Y = [];
  for (let m = 0; m <= v; m++) {
    const M = m / v,
      i = b.getPointAt(M),
      u = (m / p) * Math.PI * 2;
    Y.push(
      i
        .clone()
        .addScaledVector(s.normals[m], Math.cos(u) * C)
        .addScaledVector(s.binormals[m], Math.sin(u) * C),
    );
  }
  return new j0(new a0(Y), v * 2, x, 5, !1);
}
