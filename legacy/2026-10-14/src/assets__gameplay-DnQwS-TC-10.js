// assets__gameplay-DnQwS-TC 10 — math
// Lines 3935-3943 of readable/assets__gameplay-DnQwS-TC.pretty.js (statement-aligned).
const ht = pt,
  ce = Math.PI / 180,
  ds = (o = 0, t = 1) => o + Math.random() * (t - o),
  us = (o, t) => {
    let i = t - o;
    for (; i > Math.PI;) i -= 2 * Math.PI;
    for (; i < -Math.PI;) i += 2 * Math.PI;
    return i;
  };
