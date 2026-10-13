// assets__index-BcIwWgby 28 — math
// Lines 8281-8571 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Fr(s, o, t, u = null, e = {}, r = Math.random) {
  const a = Qt.x1 - Qt.x0,
    p = pt.z1 + 0.05,
    i = 0.075,
    d = new Kt();
  ((d.name = "church_backdoor"), d.position.set(Qt.x1 - 0.02, 0, p));
  const y = Uo(a - 0.03, 0.012, Qt.spring, Qt.h - 0.012, 10).map(([h, c]) => [
      h - a / 2 + 0.005,
      c,
    ]),
    w = new te(qs(y), {
      depth: i,
      bevelEnabled: !0,
      bevelThickness: 0.006,
      bevelSize: 0.006,
      bevelSegments: 1,
      curveSegments: 4,
    });
  (w.translate(0, 0, -i / 2), w.deleteAttribute("uv"));
  const g = new bt(Wr(w.toNonIndexed()), o.door);
  ((g.castShadow = !0), (g.receiveShadow = !0), d.add(g));
  const z = [];
  for (let h = 1; h < 6; h++)
    for (const c of [-1, 1])
      z.push(
        Mt(
          -a + (h * a) / 6 - 0.004,
          0.02,
          c * (i / 2 + 0.001) - 0.002,
          -a + (h * a) / 6 + 0.004,
          Qt.spring + 0.3,
          c * (i / 2 + 0.001) + 0.002,
          0.001,
          "y",
        ),
      );
  for (const h of [0.35, 1.2, 1.95]) {
    z.push(
      Mt(
        -a * 0.82,
        h - 0.035,
        -i / 2 - 0.012,
        0.02,
        h + 0.035,
        -i / 2,
        0.004,
        "x",
      ),
    );
    const c = -a * 0.82;
    z.push(
      Q0(
        [
          [c, h, -i / 2 - 0.006],
          [c - 0.08, h + 0.05, -i / 2 - 0.006],
          [c - 0.12, h, -i / 2 - 0.006],
          [c - 0.08, h - 0.045, -i / 2 - 0.006],
          [c - 0.05, h - 0.01, -i / 2 - 0.006],
        ],
        0.008,
        12,
        5,
      ),
    );
    for (let M = 0; M < 6; M++)
      z.push(
        Wt(
          [
            [0, 0],
            [0.01, 0],
            [0.008, 0.006],
            [0, 0.008],
          ],
          -a * 0.75 + M * a * 0.14,
          h,
          -i / 2 - 0.012,
          { segs: 6, rot: [-Math.PI / 2, 0, 0] },
        ),
      );
    z.push(new Pt(0.02, 0.02, 0.12, 8).translate(0.02, h, -i / 2));
  }
  for (const h of [-1, 1]) {
    z.push(
      Mt(
        -a + 0.12,
        0.98,
        (h * i) / 2 - 0.004,
        -a + 0.26,
        1.18,
        (h * i) / 2 + 0.004,
        0.003,
        "y",
      ),
    );
    const c = [];
    for (let M = 0; M <= 20; M++) {
      const m = (M / 20) * Math.PI * 2;
      c.push([
        -a + 0.19 + Math.cos(m) * 0.06,
        1 + Math.sin(m) * 0.06,
        h * (i / 2 + 0.018),
      ]);
    }
    z.push(Q0(c, 0.007, 20, 5, !0));
  }
  const x = Rr(z),
    v = new bt(x, o.iron);
  if (
    ((v.castShadow = !0),
    (v.receiveShadow = !0),
    d.add(v),
    s.add(d),
    t(
      "stone",
      Mt(
        Qt.x0 + 0.01,
        -0.03,
        pt.z1 + 0.005,
        Qt.x1 - 0.01,
        0.02,
        pt.z1 + 0.8,
        0.012,
        "x",
      ),
      { cast: !1 },
    ),
    t(
      "stone",
      Mt(
        Qt.x0 - 0.18,
        -0.06,
        pt.z1 + 0.8,
        Qt.x1 + 0.18,
        0.07,
        pt.z1 + 1.25,
        0.02,
        "x",
      ),
      { cast: !1 },
    ),
    u)
  ) {
    (t(
      "iron",
      Wt(
        [
          [0, 0],
          [0.22, 0],
          [0.22, 0.03],
          [0.05, 0.08],
          [0.025, 0.12],
          [0.02, 1.2],
          [0.04, 1.24],
          [0, 1.24],
        ],
        5.62,
        0,
        60.55,
        { segs: 10 },
      ),
    ),
      t(
        "iron",
        Wt(
          [
            [0, 0],
            [0.3, 0],
            [0.32, 0.025],
            [0.28, 0.035],
            [0, 0.03],
          ],
          5.62,
          1.24,
          60.55,
          { segs: 18 },
        ),
      ));
    for (let M = 0; M < 6; M++) {
      const m = (M / 6) * Math.PI * 2;
      u.push({
        x: 5.62 + Math.cos(m) * 0.2,
        y: 1.27,
        z: 60.55 + Math.sin(m) * 0.2,
        h: 0.14 + r() * 0.22,
        r: 0.02,
        lit: !0,
        cl: e.back,
      });
    }
    u.push({
      x: 5.62,
      y: 1.27,
      z: 60.55,
      h: 0.4,
      r: 0.03,
      lit: !0,
      cl: e.back,
    });
    for (let M = 0; M < 14; M++)
      u.push({
        x: 3.25 + r() * 0.35,
        y: 0,
        z: 59.7 + r() * 1.3,
        h: 0.05 + r() * 0.2,
        r: 0.017 + r() * 0.015,
        lit: r() > 0.08,
        cl: e.back,
      });
  }
  const n = {
      x0: Qt.x0,
      x1: Qt.x1,
      z0: pt.z1,
      z1: pt.z1 + 0.8,
      y0: 0,
      y1: Qt.h,
      on: !0,
    },
    l = { x0: 5.38, x1: 5.86, z0: 60.31, z1: 60.79, y0: 0, y1: 1.6 };
  return {
    api: {
      openK: 0,
      pos: [(Qt.x0 + Qt.x1) / 2, 1.2, pt.z1 + 0.8],
      collider: n,
      open(h = 1) {
        (this.audio &&
          h > 0.02 &&
          this.openK <= 0.02 &&
          this.audio.play?.("church_backdoor_open", {
            pos: this.pos,
            vol: 0.9,
          }),
          this.audio &&
            h <= 0.01 &&
            this.openK > 0.06 &&
            this.audio.play?.("church_backdoor_shut", {
              pos: this.pos,
              vol: 1,
            }),
          (this.openK = h),
          (d.rotation.y = -Math.max(-0.05, Math.min(1.05, h)) * 1.75),
          (n.on = h < 0.3));
      },
    },
    colliders: u ? [n, l] : [n],
    pivot: d,
  };
}
function Wr(s) {
  const o = s.attributes.position,
    t = s.attributes.normal,
    u = new Float32Array(o.count * 2);
  for (let e = 0; e < o.count; e++) {
    const r = Math.abs(t.getX(e)),
      a = Math.abs(t.getZ(e));
    ((u[e * 2] = (a > r, o.getY(e))),
      (u[e * 2 + 1] = a > r ? o.getX(e) : o.getZ(e)));
  }
  return (s.setAttribute("uv", new vt(u, 2)), s);
}
function Rr(s) {
  const o = s.map((e) => {
    const r = e.index ? e.toNonIndexed() : e;
    return (
      r.attributes.uv ||
        r.setAttribute(
          "uv",
          new vt(new Float32Array(r.attributes.position.count * 2), 2),
        ),
      r.attributes.normal || r.computeVertexNormals(),
      r
    );
  });
  let t = 0;
  for (const e of o) t += e.attributes.position.count;
  const u = new Rt();
  for (const [e, r] of [
    ["position", 3],
    ["normal", 3],
    ["uv", 2],
  ]) {
    const a = new Float32Array(t * r);
    let p = 0;
    for (const i of o)
      (a.set(i.attributes[e].array, p), (p += i.attributes[e].array.length));
    u.setAttribute(e, new vt(a, r));
  }
  return u;
}
const me = dt,
  Ro = w0;
