// assets__index-BcIwWgby 47 — math
// Lines 14250-14583 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function Ea(s) {
  const o = [];
  (o.push({ kind: "wall", x: 5.62, z: 62, face: 0, y: 2.02 }),
    o.push({ kind: "gate", x: U0.x1 + 0.3, z: St.z + 0.3, face: 0, y: 1.78 }));
  {
    const x = b0.x + Math.sin(b0.yaw) * 0.23,
      v = b0.z + Math.cos(b0.yaw) * 0.23;
    o.push({
      kind: "angel",
      x,
      z: v,
      face: b0.yaw,
      y: 2.06,
      hang: [x, 2.31, v],
    });
  }
  const t = s.S,
    u = (x) => de.find((v) => v.name === x),
    e = (x) => {
      const v = s.at(x.s);
      return (x.x - v.x) * v.tz - (x.z - v.z) * v.tx > 0 ? -1 : 1;
    },
    r = [
      { s: t.gate + 4.5, sd: 1 },
      { s: u("lookBack").s, sd: e(u("lookBack")) },
      { s: u("e2").s + 1.5, sd: e(u("e2")) },
      { s: t.bridgeN - 9, sd: 1 },
      { s: t.end - 8, sd: 1, clearing: !0 },
    ],
    a = (x, v) => {
      for (const n in be) {
        const l = be[n];
        for (let f = 0; f < l.length - 1; f++)
          if (fe(x, v, l[f][0], l[f][1], l[f + 1][0], l[f + 1][1]) < 1.5)
            return !1;
      }
      for (const n of je)
        if (Math.hypot(x - n.x, v - n.z) < n.r * 1.12 + 1.3) return !1;
      return !0;
    };
  let p = 1;
  const i = (x) =>
    (x > Nt.tree.s - 16 && x < Nt.tree.s + 13) ||
    (x > Nt.cart.s - 15 && x < Nt.cart.s + 12) ||
    Math.abs(x - Nt.log.s) < 5;
  for (let x = t.gate + 11; x < t.end - 8; x += 11.2) {
    if (
      (x > t.bridgeN - 6 && x < t.bridgeS + 5) ||
      i(x) ||
      r.some((k) => Math.abs(k.s - x) < 4)
    )
      continue;
    const v = s.at(x - 4),
      n = s.at(x + 4),
      l = v.tx * n.tz - v.tz * n.tx,
      f = Math.abs(l) > 0.12 ? (l > 0 ? -1 : 1) : p;
    let h = x;
    for (const k of [0, 1.2, -1.2, 2.4, -2.4, 3.4, -3.4]) {
      if (i(x + k)) continue;
      const S = s.at(x + k);
      if (a(S.x - S.tz * f * 1.85, S.z + S.tx * f * 1.85)) {
        h = x + k;
        break;
      }
    }
    const c = s.at(h),
      M = -c.tz * f,
      m = c.tx * f;
    (o.push({
      kind: "post",
      x: c.x + M * 1.85,
      z: c.z + m * 1.85,
      face: Math.atan2(-M, -m),
      y: 1.62,
      s: h,
    }),
      (p = -f));
  }
  for (const x of r) {
    const v = s.at(x.s),
      n = -v.tz * x.sd,
      l = v.tx * x.sd;
    o.push({
      kind: "stone",
      x: v.x + n * 2.05,
      z: v.z + l * 2.05,
      face: Math.atan2(-n, -l),
      y: 0.86,
      s: x.s,
      clearing: !!x.clearing,
    });
  }
  (o.push({
    kind: "bridge",
    x: Tt.x + 0.8,
    z: Tt.z0 + 0.3,
    face: -Math.PI / 2,
    y: 1.62,
    s: t.bridgeN,
  }),
    o.push({
      kind: "bridge",
      x: Tt.x - 0.8,
      z: Tt.z1 - 0.3,
      face: Math.PI / 2,
      y: 1.62,
      s: t.bridgeS,
      south: !0,
    }),
    o.sort(
      (x, v) =>
        (x.s == null ? x.z - 1e4 : x.s) - (v.s == null ? v.z - 1e4 : v.s),
    ));
  const d = o.filter((x) => x.kind === "post"),
    y = (x) =>
      d.reduce((v, n) => (Math.abs(n.s - x) < Math.abs(v.s - x) ? n : v), d[0]),
    w = new Set(uc.map(y)),
    g = y(fc),
    z = y(dc);
  for (const x of o)
    (x.kind === "wall" || x.kind === "gate" || x.kind === "angel"
      ? (x.fate = "lit")
      : x.kind === "bridge"
        ? (x.fate = x.south ? "dead" : "lit")
        : x.kind === "stone"
          ? (x.fate = x.clearing ? "lit" : "dead")
          : w.has(x)
            ? (x.fate = "lit")
            : x === g
              ? (x.fate = "smashed")
              : x === z
                ? (x.fate = "gone")
                : (x.fate = "dead"),
      (x.lit = x.fate === "lit"));
  return o.slice(0, zo);
}
function mc() {
  const s = [],
    o = [],
    t = [],
    u = [];
  for (let a = 0; a <= 10; a++) {
    const p = a / 10,
      i = -0.075 + p * 0.15,
      d = 0.032 + 0.034 * Math.sin(Math.PI * p) ** 0.8;
    u.push(new re(d, i));
  }
  (o.push(new ro(u, 16)),
    s.push(new Pt(0.052, 0.062, 0.05, 16).translate(0, -0.1, 0)),
    s.push(new Pt(0.036, 0.052, 0.02, 16).translate(0, -0.07, 0)),
    s.push(new Pt(0.02, 0.062, 0.045, 16).translate(0, 0.098, 0)),
    s.push(new Pt(0.018, 0.02, 0.03, 10).translate(0, 0.134, 0)));
  for (let a = 0; a < 4; a++) {
    const p = (a * qe) / 4 + 0.4,
      i = [];
    for (let d = 0; d <= 6; d++) {
      const y = d / 6,
        w = -0.078 + y * 0.158,
        g = 0.04 + 0.034 * Math.sin(Math.PI * y) ** 0.8 + 0.004;
      i.push(at(Math.cos(p) * g, w, Math.sin(p) * g));
    }
    s.push(Vt(i, () => 0.0028, 4));
  }
  for (const a of [-0.02, 0.03])
    s.push(
      new s0(0.069, 0.0028, 4, 20).rotateX(Math.PI / 2).translate(0, a, 0),
    );
  const e = [];
  for (let a = 0; a <= 10; a++) {
    const p = (Math.PI * a) / 10;
    e.push(at(Math.cos(p) * 0.066, 0.1 + Math.sin(p) * 0.1, 0));
  }
  s.push(Vt(e, () => 0.0025, 4));
  const r = [];
  for (let a = 0; a <= 8; a++) {
    const p = a / 8;
    r.push(
      new re(
        0.011 * Math.sin(Math.PI * Math.pow(p, 0.7)) + 5e-4,
        -0.03 + p * 0.055,
      ),
    );
  }
  return (
    t.push(new ro(r, 8)),
    {
      metal: s.map((a) => d0((a.index, a), ["position", "normal", "uv"])),
      glass: o,
      flame: t,
      prof: u,
    }
  );
}
function qa(s, o = 1) {
  const t = s.attributes.position,
    u = new Float32Array(t.count);
  for (let e = 0; e < t.count; e++)
    u[e] = -1 - 0.98 * Math.max(0, Math.min(1, (t.getY(e) + 0.075) / 0.15)) * o;
  return (s.setAttribute("aLamp", new vt(u, 1)), s);
}
function xc(s, o) {
  const t = [],
    u = [],
    e = new wt()
      .makeRotationZ(Math.PI / 2 - 0.12)
      .premultiply(new wt().makeTranslation(0, 0.058, 0));
  for (const a of s.metal.slice(0, 2)) t.push(a.clone().applyMatrix4(e));
  {
    const a = s.metal[2]
      .clone()
      .applyMatrix4(new wt().makeRotationZ(0.5))
      .applyMatrix4(new wt().makeTranslation(0.02, -0.01, 0.03));
    t.push(a.applyMatrix4(e));
  }
  t.push(
    s.metal[3]
      .clone()
      .applyMatrix4(new wt().makeTranslation(0.05, -0.12, 0.09))
      .applyMatrix4(e),
  );
  for (const a of s.metal.slice(4, 10)) t.push(a.clone().applyMatrix4(e));
  {
    const a = [];
    for (let p = 0; p <= 10; p++) {
      const i = ((Math.PI * p) / 10) * 0.8;
      a.push(
        at(
          Math.cos(i) * 0.07 + 0.02,
          0.06 + Math.sin(i) * 0.06,
          -0.05 + p * 0.012,
        ),
      );
    }
    t.push(Vt(a, () => 0.0025, 4).applyMatrix4(e));
  }
  const r = new ro(s.prof, 20);
  {
    const a = r.attributes.position,
      p = [];
    for (let i = 0; i <= 20; i++)
      p.push(-0.045 + o() * 0.07 * (i % 3 ? 1 : 0.4));
    for (let i = 0; i < a.count; i++) {
      const d = Math.atan2(a.getZ(i), a.getX(i)),
        y = Math.round((((d + qe) % qe) / qe) * 20) % 21,
        w = p[y];
      if (a.getY(i) > w) {
        const g = Math.hypot(a.getX(i), a.getZ(i));
        (a.setY(i, w),
          a.setX(i, Math.cos(d) * g * 0.99),
          a.setZ(i, Math.sin(d) * g * 0.99));
      }
    }
    r.computeVertexNormals();
  }
  u.push(qa(r, 0.6).applyMatrix4(e));
  for (let a = 0; a < 9; a++) {
    const p = o() * qe,
      i = 0.12 + o() * 0.45,
      d = 0.015 + o() * 0.03,
      y = new Rt(),
      w = [
        0,
        0,
        0,
        d * (0.7 + o()),
        0.004,
        d * (o() - 0.5),
        d * (o() - 0.5),
        0.006,
        d * (0.7 + o()),
      ];
    (y.setAttribute("position", new xt(w, 3)),
      y.setAttribute("normal", new xt([0, 1, 0, 0, 1, 0, 0, 1, 0], 3)),
      y.setAttribute("uv", new xt([0, 0, 1, 0, 0, 1], 2)),
      y.setAttribute("aLamp", new xt([-1.1, -1.1, -1.1], 1)),
      y.setIndex([0, 2, 1]),
      y
        .applyMatrix4(new wt().makeRotationY(o() * qe))
        .translate(Math.cos(p) * i, 0.012, Math.sin(p) * i),
      u.push(y));
  }
  return { metal: t.map((a) => d0(a, ["position", "normal", "uv"])), glass: u };
}
function vc() {
  const s = [];
  s.push(
    new s0(0.02, 0.004, 4, 10, Math.PI * 1.4)
      .rotateY(Math.PI / 2)
      .translate(0, -0.02, 0),
  );
  for (let o = 0; o < 6; o++)
    s.push(
      new s0(0.012, 0.003, 4, 8)
        .rotateY(o % 2 ? 0 : Math.PI / 2)
        .translate(0, -0.045 - o * 0.022, 0),
    );
  return (
    s.push(
      new s0(0.012, 0.003, 4, 8, Math.PI * 1.3)
        .rotateY(Math.PI / 2)
        .rotateX(0.5)
        .translate(0.004, -0.045 - 6 * 0.022, 0),
    ),
    s.map((o) => d0(o, ["position", "normal", "uv"]))
  );
}
function Mc(s) {
  const o = [],
    t = [],
    u = (s() - 0.5) * 0.04,
    e = new qt(0.085, 2.05, 0.085, 1, 4, 1).translate(0, 1, 0),
    r = e.attributes.position;
  for (let a = 0; a < r.count; a++) r.setX(a, r.getX(a) + r.getY(a) * u);
  (e.computeVertexNormals(),
    o.push(e),
    o.push(new qt(0.07, 0.07, 0.56).translate(u * 1.98, 1.98, 0.24)),
    o.push(
      new qt(0.05, 0.05, 0.36)
        .rotateX(Math.PI / 4)
        .translate(u * 1.8, 1.84, 0.12),
    ),
    t.push(
      new s0(0.02, 0.004, 4, 10, Math.PI * 1.4)
        .rotateY(Math.PI / 2)
        .translate(u * 1.98, 1.925, 0.46),
    ));
  for (let a = 0; a < 3; a++)
    t.push(
      new s0(0.012, 0.003, 4, 8)
        .rotateY(a % 2 ? 0 : Math.PI / 2)
        .translate(u * 1.98, 1.9 - a * 0.022, 0.46),
    );
  return { wood: o, iron: t, hang: [u * 1.98, 1.86, 0.46] };
}
