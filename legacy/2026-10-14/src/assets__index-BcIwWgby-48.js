// assets__index-BcIwWgby 48 — push
// Lines 14584-14651 of readable/assets__index-BcIwWgby.pretty.js (statement-aligned).
function wc() {
  const s = [];
  s.push(new qt(0.05, 0.16, 0.012).translate(0, 0, 0.006));
  const o = [at(0, 0.05, 0.01), at(0, 0.08, 0.14), at(0, 0.08, 0.26)];
  s.push(Vt(o, () => 0.008, 5));
  const t = [];
  for (let u = 0; u <= 12; u++) {
    const e = (u / 12) * Math.PI * 1.5;
    t.push(
      at(
        0,
        -0.05 + 0.1 * (u / 12) + Math.sin(e) * 0.03,
        0.01 + (u / 12) * 0.13 + Math.cos(e) * 0.015,
      ),
    );
  }
  return (
    s.push(Vt(t, () => 0.005, 4)),
    s.push(
      new s0(0.018, 0.004, 4, 10, Math.PI * 1.4)
        .rotateY(Math.PI / 2)
        .translate(0, 0.06, 0.26),
    ),
    { iron: s, hang: [0, 0.04, 0.26] }
  );
}
function yc(s) {
  const o = [],
    t = [],
    u = (p, i, d, y) => new Pt(i, p, d, 6).translate(0, y + d / 2, 0);
  (o.push(u(0.3, 0.26, 0.12, 0)),
    o.push(new Pt(0.085, 0.1, 0.5, 10).translate(0, 0.37, 0)),
    o.push(u(0.2, 0.26, 0.1, 0.62)),
    o.push(u(0.2, 0.2, 0.03, 0.72)));
  for (let p = 0; p < 6; p++) {
    const i = (p * qe) / 6 + qe / 12;
    o.push(
      new qt(0.05, 0.22, 0.05).translate(
        Math.cos(i) * 0.165,
        0.86,
        Math.sin(i) * 0.165,
      ),
    );
  }
  o.push(u(0.21, 0.19, 0.03, 0.97));
  const e = new Pt(0.05, 0.36, 0.17, 6, 2).translate(0, 1.085, 0),
    r = e.attributes.position;
  for (let p = 0; p < r.count; p++) {
    const i = r.getX(p),
      d = r.getZ(p),
      y = Math.hypot(i, d),
      w = Math.atan2(d, i),
      g = Math.pow(Math.abs(Math.cos(3 * w)), 8);
    y > 0.3 && r.setY(p, r.getY(p) + g * 0.05);
  }
  (e.computeVertexNormals(),
    o.push(e),
    o.push(new t0(0.065, 10, 8).scale(1, 1.15, 1).translate(0, 1.23, 0)),
    o.push(new no(0.03, 0.07, 8).translate(0, 1.32, 0)));
  const a = new wt().makeRotationFromEuler(
    new pe((s() - 0.5) * 0.06, 0, (s() - 0.5) * 0.06),
  );
  for (const p of o) p.applyMatrix4(a);
  return (
    t.push(new Pt(0.12, 0.12, 0.17, 6).translate(0, 0.86, 0).applyMatrix4(a)),
    { stone: o.map((p) => d0(p, ["position", "normal", "uv"])), glow: t }
  );
}
