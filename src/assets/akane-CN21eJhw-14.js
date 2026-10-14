// assets/akane-CN21eJhw 14 — nutx
// Lines 4786-4904 of readable/assets/akane-CN21eJhw.pretty.js (statement-aligned).
const b0 = {
    scale: 0.648,
    bridgeX: -0.1,
    nutX: 0.548,
    topZ: 0.0225,
    strapTail: [-0.272, -0.01, 0],
    strapHorn: [0.232, 0.112, 0],
  },
  Te = (e) => b0.nutX - b0.scale * (1 - Math.pow(2, -e / 12)),
  Be = (e, t) => {
    const a = Z((b0.nutX - t) / (b0.nutX - b0.bridgeX)),
      o = n0(0.0175, 0.0265, a);
    return n0(o, -o, e / 5);
  },
  It = [
    [-0.27, 0],
    [-0.255, 0.09],
    [-0.2, 0.158],
    [-0.12, 0.184],
    [-0.04, 0.166],
    [0.012, 0.132],
    [0.062, 0.136],
    [0.13, 0.152],
    [0.198, 0.142],
    [0.232, 0.112],
    [0.216, 0.078],
    [0.178, 0.05],
    [0.16, 0.034],
    [0.16, -0.034],
    [0.172, -0.054],
    [0.19, -0.086],
    [0.17, -0.122],
    [0.11, -0.132],
    [0.062, -0.117],
    [0.004, -0.142],
    [-0.06, -0.182],
    [-0.15, -0.196],
    [-0.226, -0.16],
    [-0.262, -0.09],
  ],
  Oo = [
    [-0.2, 0.128],
    [-0.12, 0.158],
    [-0.04, 0.142],
    [0.012, 0.112],
    [0.062, 0.118],
    [0.13, 0.134],
    [0.19, 0.124],
    [0.205, 0.1],
    [0.176, 0.06],
    [0.158, 0.038],
    [0.158, -0.038],
    [0.168, -0.06],
    [0.176, -0.086],
    [0.158, -0.108],
    [0.108, -0.114],
    [0.06, -0.098],
    [0.018, -0.085],
    [-0.05, -0.062],
    [-0.075, -0.035],
    [-0.075, 0.035],
    [-0.12, 0.07],
    [-0.19, 0.1],
  ],
  Fo = [
    [0, 0.021],
    [0.03, 0.026],
    [0.07, 0.044],
    [0.12, 0.052],
    [0.17, 0.05],
    [0.192, 0.036],
    [0.19, 0.012],
    [0.16, -0.004],
    [0.1, -0.012],
    [0.05, -0.02],
    [0.02, -0.024],
    [0, -0.021],
  ];
function He(e, t, a = !0) {
  const o = new e.Shape();
  if (a) {
    const r = t.map((s) => new e.Vector2(s[0], s[1])),
      n = new e.SplineCurve([...r, r[0], r[1]])
        .getSpacedPoints(160)
        .slice(0, -8);
    o.setFromPoints(n);
  } else {
    o.moveTo(t[0][0], t[0][1]);
    for (const r of t.slice(1)) o.lineTo(r[0], r[1]);
  }
  return (o.closePath(), o);
}
function Ko(e, t) {
  const a = t.index ? t.toNonIndexed() : t,
    o = a.attributes.position,
    r = o.count,
    i = new Map(),
    n = new Float32Array(r * 3);
  a.computeVertexNormals();
  const s = a.attributes.normal,
    u = (l) =>
      `${Math.round(o.getX(l) * 1e5)},${Math.round(o.getY(l) * 1e5)},${Math.round(o.getZ(l) * 1e5)}`;
  for (let l = 0; l < r; l++) {
    const v = u(l);
    let g = i.get(v);
    (g || ((g = [0, 0, 0]), i.set(v, g)),
      (g[0] += s.getX(l)),
      (g[1] += s.getY(l)),
      (g[2] += s.getZ(l)));
  }
  for (let l = 0; l < r; l++) {
    const v = i.get(u(l)),
      g = Math.hypot(v[0], v[1], v[2]) || 1;
    ((n[l * 3] = v[0] / g),
      (n[l * 3 + 1] = v[1] / g),
      (n[l * 3 + 2] = v[2] / g));
  }
  return (a.setAttribute("aOutN", new e.BufferAttribute(n, 3)), a);
}
