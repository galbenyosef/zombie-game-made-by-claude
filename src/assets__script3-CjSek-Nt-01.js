// assets__script3-CjSek-Nt 01 — math
// Lines 1-34 of readable/assets__script3-CjSek-Nt.pretty.js (statement-aligned).
import {
  o as Lt,
  V as yo,
  Q as Re,
  E as Ke,
  w as bo,
  t as de,
  F as xo,
  v as _o,
} from "./index-DaQlAVPp.js";
import { KINDS as zo } from "./index-Db-AsSxU.js";
import { c as Mo } from "./index-TPd_HXBJ.js";
import { c as Wt } from "./index-DQDjAbEY.js";
import { n as vo } from "./district-BhfbivMT.js";
import { U as K, A as he, C as L, T as oe, E as ee } from "./plan3-BlRgM2iV.js";
import { H as be } from "./hatch-Vg74Rrkt.js";
import "./anim-B86X8yU9.js";
import "./lightrig-BOum5aAY.js";
import "./RoundedBoxGeometry-D0zz8qHa.js";
import "./kit-CwMQzO5T.js";
import "./kit-CFeM0oZ2.js";
import "./furniture-BraVmmRV.js";
const A = yo,
  Ot = Math.PI / 180,
  O = (H = 0, o = 1) => H + Math.random() * (o - H),
  B = (H, o = 0, c = 1) => (H < o ? o : H > c ? c : H),
  Nt = (H, o, c) => H + (o - H) * c,
  Ve = (H) => (H <= 0 ? 0 : H >= 1 ? 1 : H * H * (3 - 2 * H)),
  xe = (H, o) => {
    let c = o - H;
    for (; c > Math.PI;) c -= 2 * Math.PI;
    for (; c < -Math.PI;) c += 2 * Math.PI;
    return c;
  };
