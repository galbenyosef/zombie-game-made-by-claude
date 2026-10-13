// assets__gameplay-DnQwS-TC 03 — classlist
// Lines 746-1030 of readable/assets__gameplay-DnQwS-TC.pretty.js (statement-aligned).
const Qs = `
#hud { font-family: 'Georgia', 'Times New Roman', serif; color: #efe3d4; user-select: none; }
#hud .sub { position: absolute; left: 50%; bottom: 11%; transform: translateX(-50%); max-width: min(72vw, 900px); text-align: center; font-size: clamp(19px, 2.3vw, 34px);
  font-style: italic; letter-spacing: 0.02em; line-height: 1.25; padding: 0.35em 1.2em; opacity: 0; transition: opacity 0.25s ease;
  text-shadow: 0 0 14px rgba(0,0,0,0.95), 0 2px 3px rgba(0,0,0,0.9), 0 0 2px #000; }
#hud .sub.on { opacity: 1; }
#hud .sub.thought { color: #b8c2cc; font-size: clamp(17px, 2.0vw, 30px); letter-spacing: 0.05em; }
#hud .sub b { display: block; font-style: normal; font-weight: 400; font-size: 0.42em; letter-spacing: 0.42em; color: #d1394a; margin-bottom: 0.15em; text-transform: uppercase; }
#hud .prompt { position: absolute; left: 50%; top: 58%; transform: translate(-50%, 0) scale(0.9); opacity: 0; transition: opacity 0.15s ease, transform 0.15s ease; display: flex; align-items: center; gap: 12px; }
#hud .prompt.on { opacity: 1; transform: translate(-50%, 0) scale(1); }
#hud .prompt .key { width: 44px; height: 44px; border-radius: 50%; border: 2px solid #efe3d4; display: flex; align-items: center; justify-content: center; font: 700 21px 'Georgia', serif;
  background: rgba(10,6,6,0.55); box-shadow: 0 0 18px rgba(0,0,0,0.7), inset 0 0 8px rgba(255,255,255,0.1); }
#hud .prompt svg { width: 34px; height: 34px; filter: drop-shadow(0 0 6px rgba(0,0,0,0.9)); }
#hud .cross { position: absolute; left: 50%; top: 50%; width: 30px; height: 30px; margin: -15px 0 0 -15px; opacity: 0; transition: opacity 0.2s, transform 0.08s; }
#hud .cross.on { opacity: 0.85; }
#hud .cross i { position: absolute; background: #efe3d4; box-shadow: 0 0 4px #000; }
#hud .cross i:nth-child(1) { left: 14px; top: 0; width: 2px; height: 8px; } #hud .cross i:nth-child(2) { left: 14px; bottom: 0; width: 2px; height: 8px; }
#hud .cross i:nth-child(3) { top: 14px; left: 0; height: 2px; width: 8px; } #hud .cross i:nth-child(4) { top: 14px; right: 0; height: 2px; width: 8px; }
#hud .cross i:nth-child(5) { left: 14px; top: 14px; width: 2px; height: 2px; }
#hud .hitm { position: absolute; left: 50%; top: 50%; width: 26px; height: 26px; margin: -13px 0 0 -13px; opacity: 0; pointer-events: none; }
#hud .hitm i { position: absolute; left: 12px; top: 0; width: 2px; height: 9px; background: #fff; box-shadow: 0 0 4px #000; }
#hud .hitm.on { animation: hitm 0.22s ease-out; }
#hud .hitm.head i { background: #ff4a4a; }
@keyframes hitm { 0% { opacity: 1; transform: scale(0.7); } 100% { opacity: 0; transform: scale(1.35); } }
#hud .ammo { position: absolute; right: 4.5%; bottom: 6%; display: flex; gap: 5px; align-items: flex-end; opacity: 0; transition: opacity 0.4s; filter: drop-shadow(0 0 5px rgba(0,0,0,0.9)); }
#hud .ammo.on { opacity: 1; }
#hud .ammo svg { width: 11px; height: 30px; } #hud .ammo svg.spent { opacity: 0.22; }
#hud .ammo .res { font-size: 15px; letter-spacing: 0.1em; margin-left: 8px; color: #b9a99a; align-self: center; }
#hud .card { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transition: opacity 1.6s ease; pointer-events: none; text-align: center; }
#hud .card.on { opacity: 1; }
#hud .card h2 { font-weight: 400; letter-spacing: 0.6em; margin: 0 0 0 0.6em; font-size: clamp(22px, 3.6vw, 56px); color: #d9c7b8; text-shadow: 0 0 30px #7a1010; }
#hud .card p { margin: 1.1em 0 0; letter-spacing: 0.35em; font-size: 14px; color: #8a7466; text-transform: uppercase; }
#hud .vitals { position: absolute; left: 3.2%; bottom: 5.5%; opacity: 0; transition: opacity 0.6s; pointer-events: none; font-size: 11px; letter-spacing: 0.32em; color: #b9a99a; text-shadow: 0 0 6px #000; }
#hud .vitals.on { opacity: 0.95; }
#hud .vitals div { display: flex; align-items: center; gap: 7px; margin-top: 7px; }
#hud .vitals span { width: 64px; }
#hud .vitals i { width: 11px; height: 11px; transform: rotate(45deg); border: 1.5px solid #d9c7b8; box-shadow: 0 0 5px #000; transition: background 0.25s, border-color 0.25s; }
#hud .vitals i.full { background: #b8202c; border-color: #e8c0b0; }
#hud .vitals div.crit span { color: #ff5a5a; animation: vcrit 0.7s ease-in-out infinite alternate; }
@keyframes vcrit { from { opacity: 1; } to { opacity: 0.35; } }
#hud .hint { position: absolute; left: 50%; bottom: 4%; transform: translateX(-50%); font-size: 15px; letter-spacing: 0.16em; color: #b9a99a; opacity: 0; transition: opacity 0.8s; text-shadow: 0 0 8px #000; }
#hud .hint.on { opacity: 0.9; }
#hud .fadeout { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; }
#hud .task { position: absolute; left: 50%; bottom: 7.2%; transform: translateX(-50%); width: min(34vw, 380px); opacity: 0; transition: opacity 0.5s; text-align: center; pointer-events: none; }
#hud .task.on { opacity: 1; }
#hud .task span { display: block; font-size: 13px; letter-spacing: 0.42em; color: #d1394a; text-transform: uppercase; margin-bottom: 7px; text-shadow: 0 0 8px #000, 0 0 2px #000; }
#hud .task .bar { height: 4px; background: rgba(239,227,212,0.16); box-shadow: 0 0 10px rgba(0,0,0,0.8); }
#hud .task .bar i { display: block; height: 100%; width: 0; background: #efe3d4; transition: width 0.15s linear, background 0.3s; }
#hud .task.halt .bar i { background: #d1394a; }
`,
  ns = {
    take: '<svg viewBox="0 0 32 32" fill="none" stroke="#efe3d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17V8a2 2 0 014 0v7M13 15V6a2 2 0 014 0v9M17 15V8a2 2 0 014 0v9M21 17v-4a2 2 0 014 0v8c0 5-3 8-8 8h-2c-3 0-5-1-7-4l-4-6a2 2 0 013-2l3 3"/></svg>',
    use: '<svg viewBox="0 0 32 32" fill="none" stroke="#efe3d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="4"/><path d="M16 3v5M16 24v5M3 16h5M24 16h5M7 7l3 3M22 22l3 3M25 7l-3 3M10 22l-3 3"/></svg>',
    open: '<svg viewBox="0 0 32 32" fill="none" stroke="#efe3d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 28V5l13-2v25M21 28H5M17 16h1"/></svg>',
    light:
      '<svg viewBox="0 0 32 32" fill="none" stroke="#efe3d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4h8l1 8H11zM11 12l-1 16h12l-1-16M6 7l3 2M26 7l-3 2M16 1v2"/></svg>',
  },
  rs =
    '<svg viewBox="0 0 11 30"><path d="M5.5 0c2.5 2.5 4 5 4 9v3H1.5V9c0-4 1.5-6.5 4-9z" fill="#c99b50"/><rect x="1.5" y="12" width="8" height="16" rx="1" fill="#efe3d4"/><rect x="1.5" y="26" width="8" height="3" fill="#8a6a32"/></svg>';
function Zs(o, t = document.getElementById("hud")) {
  const i = document.createElement("style");
  ((i.textContent = Qs),
    document.head.appendChild(i),
    (t.innerHTML =
      '<div class="sub"></div><div class="prompt"><div class="key">E</div><span class="ic"></span></div><div class="cross"><i></i><i></i><i></i><i></i><i></i></div><div class="hitm"><i style="transform:rotate(45deg) translateY(-6px)"></i><i style="transform:rotate(135deg) translateY(-6px)"></i><i style="transform:rotate(225deg) translateY(-6px)"></i><i style="transform:rotate(315deg) translateY(-6px)"></i></div><div class="ammo"></div><div class="hint"></div><div class="card"><h2></h2><p></p></div><div class="task"><span></span><div class="bar"><i></i></div></div><div class="vitals"><div class="v0"><span>SARA</span><i></i><i></i><i></i></div><div class="v1"><span>AKANE</span><i></i><i></i><i></i></div></div><div class="fadeout"></div>'));
  const e = (w) => t.querySelector(w),
    s = {
      hitm: e(".hitm"),
      sub: e(".sub"),
      prompt: e(".prompt"),
      ic: e(".prompt .ic"),
      cross: e(".cross"),
      ammo: e(".ammo"),
      hint: e(".hint"),
      card: e(".card"),
      h2: e(".card h2"),
      p: e(".card p"),
      fade: e(".fadeout"),
      task: e(".task"),
      taskLabel: e(".task span"),
      taskBar: e(".task .bar i"),
    };
  let l = null,
    n = null,
    r = null,
    h = "",
    a = null,
    y = "";
  const g = {
    subtitle(w, _ = 2.4, c = "", k = "") {
      (clearTimeout(l),
        s.sub.classList.toggle("thought", k === "thought"),
        (s.sub.innerHTML =
          (c && g.showSpeaker ? `<b>${c}</b>` : "") + w.replace(/</g, "&lt;")),
        requestAnimationFrame(() => s.sub.classList.add("on")),
        (l = setTimeout(() => s.sub.classList.remove("on"), _ * 1e3)));
    },
    clearSubtitle() {
      (clearTimeout(l), s.sub.classList.remove("on"));
    },
    showSpeaker: !1,
    prompt(w) {
      if (!w) {
        s.prompt.classList.remove("on");
        return;
      }
      (s.prompt.dataset.k !== w &&
        ((s.prompt.dataset.k = w), (s.ic.innerHTML = ns[w] || ns.use)),
        s.prompt.classList.add("on"));
    },
    crosshair(w, _ = !1) {
      (s.cross.classList.toggle("on", !!w),
        (s.cross.style.transform = _ ? "scale(0.55)" : "scale(1)"));
    },
    ammo(w, _, c, k = !0) {
      const K = `${w}|${_}|${c}`;
      if (K !== h) {
        h = K;
        let Y = "";
        for (let F = 0; F < _; F++)
          Y += F < w ? rs : rs.replace("<svg", '<svg class="spent"');
        ((Y += `<span class="res">${c}</span>`), (s.ammo.innerHTML = Y));
      }
      (s.ammo.classList.toggle("on", k),
        k &&
          (clearTimeout(n),
          (n = setTimeout(() => s.ammo.classList.remove("on"), 3800))));
    },
    hitmarker(w = !1) {
      (s.hitm.classList.remove("on"),
        s.hitm.offsetWidth,
        s.hitm.classList.toggle("head", !!w),
        s.hitm.classList.add("on"));
    },
    hint(w, _ = 4) {
      (clearTimeout(r),
        (s.hint.textContent = w),
        s.hint.classList.add("on"),
        (r = setTimeout(() => s.hint.classList.remove("on"), _ * 1e3)));
    },
    task(w, _ = 0, c = !1) {
      if (w == null) {
        s.task.classList.remove("on");
        return;
      }
      (s.taskLabel.textContent !== w && (s.taskLabel.textContent = w),
        (s.taskBar.style.width =
          (Math.max(0, Math.min(1, _)) * 100).toFixed(1) + "%"),
        s.task.classList.toggle("halt", !!c),
        s.task.classList.add("on"));
    },
    vitals(w, _) {
      const c = w + "|" + _;
      if (c === y) return;
      y = c;
      const k = t.querySelectorAll(".vitals div");
      [w, _].forEach((F, X) => {
        (k[X].querySelectorAll("i").forEach((U, N) =>
          U.classList.toggle("full", N < F),
        ),
          k[X].classList.toggle("crit", F <= 0),
          (k[X].style.display = F == null ? "none" : ""));
      });
      const K = w < 3 || (_ != null && _ < 3),
        Y = t.querySelector(".vitals");
      (clearTimeout(a),
        K
          ? Y.classList.add("on")
          : (a = setTimeout(() => Y.classList.remove("on"), 2200)));
    },
    card(w, _ = "", c = !0) {
      ((s.h2.textContent = w),
        (s.p.textContent = _),
        s.card.classList.toggle("on", c));
    },
    setVisible(w) {
      t.style.display = w ? "" : "none";
    },
  };
  return g;
}
const Fe = 3;
function ks({ grace: o = 0.7, delay: t = 3, step: i = 1.5 } = {}) {
  const e = { n: 0, last: -99, dead: !1, graceT: 0, healT: 0, onChange: null };
  return (
    (e.hit = (s) =>
      e.dead || e.graceT > 0
        ? !1
        : (e.n++,
          (e.last = s),
          (e.graceT = o),
          (e.healT = 0),
          e.n > Fe && (e.dead = !0),
          e.onChange && e.onChange(e.n, e.dead),
          !0)),
    (e.update = (s, l) => {
      if (
        ((e.graceT = Math.max(0, e.graceT - s)),
        e.dead || e.n === 0 || l - e.last < t)
      ) {
        e.healT = 0;
        return;
      }
      ((e.healT += s),
        e.healT >= i &&
          ((e.healT = 0), e.n--, e.onChange && e.onChange(e.n, !1)));
    }),
    (e.reset = () => {
      ((e.n = 0),
        (e.dead = !1),
        (e.graceT = 0),
        (e.healT = 0),
        (e.last = -99),
        e.onChange && e.onChange(0, !1));
    }),
    e
  );
}
const Ht = pt,
  ge = (o = 0, t = 1) => o + Math.random() * (t - o);
function Xs(o, t, i, e) {
  let s = 0,
    l = 1e9,
    n = 0,
    r = 0,
    h = 0;
  if (i.shot === !1) return 1 / 0;
  const a = i.y0 ?? -0.3,
    y = i.shotY1 ?? i.y1 ?? 3.3,
    g = [i.x0, a, i.z0],
    w = [i.x1, y, i.z1],
    _ = [o.x, o.y, o.z],
    c = [t.x, t.y, t.z];
  for (let k = 0; k < 3; k++) {
    if (Math.abs(c[k]) < 1e-9) {
      if (_[k] < g[k] || _[k] > w[k]) return 1 / 0;
      continue;
    }
    let K = (g[k] - _[k]) / c[k],
      Y = (w[k] - _[k]) / c[k],
      F = -1;
    if (K > Y) {
      const X = K;
      ((K = Y), (Y = X), (F = 1));
    }
    if (
      (K > s &&
        ((s = K),
        (n = r = h = 0),
        k === 0 ? (n = F) : k === 1 ? (r = F) : (h = F)),
      Y < l && (l = Y),
      s > l)
    )
      return 1 / 0;
  }
  return (e && e.set(n, r, h), s);
}
function Js(o, t, i, e) {
  let s = 0,
    l = 0;
  const n = (r) => {
    const h = o.y + t.y * r,
      a = e(o.x + t.x * r, o.z + t.z * r, h + 0.02);
    return a != null && h <= a && h > a - 0.75;
  };
  for (let r = 0; r < 160 && s < i; r++) {
    const h = o.y + t.y * s,
      a = e(o.x + t.x * s, o.z + t.z * s, h + 0.02);
    if (a != null && h <= a && h > a - 0.75) {
      let y = l,
        g = s;
      for (let w = 0; w < 6; w++) {
        const _ = (y + g) / 2;
        n(_) ? (g = _) : (y = _);
      }
      return g;
    }
    ((l = s),
      (s +=
        a != null && h > a
          ? Math.min(0.6, Math.max(0.04, (h - a) / -t.y))
          : 0.3));
  }
  return 1 / 0;
}
