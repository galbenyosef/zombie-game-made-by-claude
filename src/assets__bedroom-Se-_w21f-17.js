// assets__bedroom-Se-_w21f 17 — count
// Lines 4131-4192 of readable/assets__bedroom-Se-_w21f.pretty.js (statement-aligned).
function Re(N, t, w, e, o) {
  for (const s of [-1, 1])
    N.add(
      E(
        [
          [0, 0],
          [0.012, 0],
          [0.012, 0.003],
          [0.006, 0.006],
          [0, 0.007],
        ],
        w + s * 0.04,
        e,
        o,
        { segs: 16, rot: [Math.PI / 2, 0, 0] },
      ),
      t.brass,
    );
  const M = [];
  for (let s = 0; s <= 16; s++) {
    const h = (s / 16) * Math.PI;
    M.push([
      w - Math.cos(h) * 0.04,
      e - Math.sin(h) * 0.028,
      o + 0.012 + Math.sin(h) * 0.004,
    ]);
  }
  N.add(h0(M, 0.0032, 24, 6), t.brass);
}
function ne(N, t, w, e = !1) {
  const o = N.attributes.normal;
  let M = 0;
  for (let s = 0; s < o.count; s++) M += t === "z" ? o.getZ(s) : o.getY(s);
  if ((Math.sign(M) !== w) !== e) {
    const s = N.index.array;
    for (let h = 0; h < s.length; h += 3) {
      const i = s[h + 1];
      ((s[h + 1] = s[h + 2]), (s[h + 2] = i));
    }
    N.computeVertexNormals();
  }
}
function Ue(N, t) {
  const w = new ot(),
    e = N.attributes.position.count,
    o = (s, h) => {
      const i = new Float32Array((e + t.attributes.position.count) * h);
      return (
        i.set(N.attributes[s].array, 0),
        i.set(t.attributes[s].array, e * h),
        new R0(i, h)
      );
    };
  (w.setAttribute("position", o("position", 3)),
    w.setAttribute("normal", o("normal", 3)),
    w.setAttribute("uv", o("uv", 2)));
  const M = new Uint32Array(N.index.count + t.index.count);
  M.set(N.index.array, 0);
  for (let s = 0; s < t.index.count; s++)
    M[N.index.count + s] = t.index.array[s] + e;
  return (w.setIndex(new R0(M, 1)), w);
}
