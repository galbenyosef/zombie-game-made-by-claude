// assets__living-DeOLLwnx 06 — userdata
// Lines 1669-1728 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
const E0 = new Map(),
  de = [
    ["#0d0c0b", 0.45],
    ["#1b1714", 0.45],
    ["#2a2622", 0.5],
    ["#15100e", 0.28],
    ["#0b0908", 0.95],
    ["#3b3632", 0.95],
    ["#2a170d", 0.55],
    ["#2a160a", 0.2],
    ["#46361f", 0.85],
    ["#5a2c18", 0.5],
    ["#8a7650", 0.7],
    ["#4e5030", 0.75],
    ["#6b3b26", 0.8],
    ["#1e150e", 1],
    ["#0e1a12", 0.12],
    ["#3a1606", 0.2],
  ],
  he = [
    ["#aaa59a", 0.28],
    ["#77736a", 0.35],
  ],
  yt = (a) => {
    const t = parseInt(a.slice(1), 16);
    return [(t >> 16) & 255, (t >> 8) & 255, t & 255];
  };
function Pt(a, t) {
  const r = yt(a);
  let e = t[0],
    o = 1e9;
  for (const s of t) {
    const n = yt(s[0]),
      l = (r[0] - n[0]) ** 2 + (r[1] - n[1]) ** 2 + (r[2] - n[2]) ** 2;
    l < o && ((o = l), (e = s));
  }
  return e;
}
function a0(a, t) {
  const [r, e] = Pt(t, de),
    o = "p" + r;
  if (!E0.has(o)) {
    const s = new C0({ color: r, roughness: e, metalness: 0 });
    ((s.name = "flat" + r), (s.userData.flat = !0), E0.set(o, s));
  }
  return E0.get(o);
}
function I0(a, t) {
  const [r, e] = Pt(t, he),
    o = "m" + r;
  if (!E0.has(o)) {
    const s = new C0({ color: r, roughness: e, metalness: 1 });
    ((s.name = "metal" + r),
      (s.userData.flat = !0),
      (s.userData.metal = !0),
      E0.set(o, s));
  }
  return E0.get(o);
}
const i0 = Math.PI;
