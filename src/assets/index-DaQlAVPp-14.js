// assets/index-DaQlAVPp 14 — math
// Lines 39259-39473 of readable/assets/index-DaQlAVPp.pretty.js (statement-aligned).
function connectServiceBridge(r) {
  const e = new URLSearchParams(location.search).get("slot") ?? "0",
    t = new WebSocket(`ws://${location.host}/__ws?slot=${e}`);
  t.binaryType = "arraybuffer";
  let n = Promise.resolve();
  const i = (u, f = []) => {
    ((u.nbin = f.length), t.send(JSON.stringify(u)));
    for (const p of f) t.send(p);
  };
  ((t.onopen = () => r.ready.then(() => i({ type: "hello", slot: e }))),
    (t.onmessage = (u) => {
      const f = JSON.parse(u.data);
      n = n
        .then(() => h(f))
        .catch((p) =>
          i({ type: "result", id: f.id, error: String((p && p.stack) || p) }),
        );
    }));
  const s = r.renderer.domElement,
    a = document.createElement("canvas"),
    o = a.getContext("2d", { willReadFrequently: !0 });
  function l(u) {
    const p = Math.max(2, Math.round((192 * s.height) / s.width));
    ((a.width = 192), (a.height = p), o.drawImage(s, 0, 0, 192, p));
    const x = o.getImageData(0, 0, 192, p).data,
      m = [],
      g = [];
    let y = 0,
      w = 0;
    const _ = (C) => ((C /= 255), C);
    for (let C = 0; C < x.length; C += 4) {
      const R = _(x[C]),
        L = _(x[C + 1]),
        V = _(x[C + 2]),
        N = 0.2126 * R + 0.7152 * L + 0.0722 * V;
      m.push(N);
      const D = Math.max(R, L, V),
        O = Math.min(R, L, V);
      (g.push(D > 0.02 ? (D - O) / D : 0), N < 0.045 && y++, N > 0.97 && w++);
    }
    const b = m.length,
      S = [...m].sort((C, R) => C - R),
      E = m.reduce((C, R) => C + R, 0) / b,
      v = g.reduce((C, R) => C + R, 0) / b,
      T = {
        mean: +E.toFixed(3),
        p05: +S[Math.floor(b * 0.05)].toFixed(3),
        p50: +S[Math.floor(b * 0.5)].toFixed(3),
        p95: +S[Math.floor(b * 0.95)].toFixed(3),
        sat: +v.toFixed(3),
        dark: +(y / b).toFixed(3),
        hot: +(w / b).toFixed(3),
      };
    return (
      u &&
        (T.probes = u
          .split(";")
          .filter(Boolean)
          .map((C) => {
            const [R, L, V, N] = C.split(",").map(Number);
            let D = 0,
              O = 0,
              B = 0,
              Y = 0,
              Q = 0,
              se = 0;
            for (let ee = Math.floor(L * p); ee < Math.ceil(N * p); ee++)
              for (
                let re = Math.floor(R * 192);
                re < Math.ceil(V * 192);
                re++
              ) {
                const Ee = (ee * 192 + re) * 4,
                  oe = x[Ee] / 255,
                  Ie = x[Ee + 1] / 255,
                  X = x[Ee + 2] / 255;
                D += 0.2126 * oe + 0.7152 * Ie + 0.0722 * X;
                const Z = Math.max(oe, Ie, X),
                  K = Math.min(oe, Ie, X);
                ((O += Z > 0.02 ? (Z - K) / Z : 0),
                  (Y += oe),
                  (Q += Ie),
                  (se += X),
                  B++);
              }
            return (
              (B = Math.max(B, 1)),
              {
                rect: C,
                lum: +(D / B).toFixed(3),
                sat: +(O / B).toFixed(3),
                rgb: [Y / B, Q / B, se / B].map((ee) => Math.round(ee * 255)),
              }
            );
          })),
      T
    );
  }
  const c = () =>
    new Promise((u) => s.toBlob((f) => f.arrayBuffer().then(u), "image/png"));
  async function h(u) {
    if (u.type === "eval") {
      const p = await new Function(
        "game",
        "THREE",
        `return (async () => {
${u.js}
})()`,
      )(r, qc);
      let x;
      try {
        x = JSON.parse(JSON.stringify(p ?? null));
      } catch {
        x = String(p);
      }
      return i({ type: "result", id: u.id, result: x });
    }
    if (u.type === "render") {
      const f = Math.max(64, Math.min(3840, +u.w || 1280)),
        p = Math.max(64, Math.min(2160, +u.h || 720)),
        x = await r.debug.prepareShot(u, f, p),
        m = Math.max(1, Math.min(24, +u.frames || 1)),
        g = +u.dt || 0.1,
        y = +u.orbit || 0,
        w = +u.advance || 0,
        _ = [];
      for (let v = 0; v < m; v++)
        (v > 0 && (await r.debug.advanceShot(g, y, w)),
          r.render(),
          _.push(m > 1 ? await d() : await c()));
      let b = null;
      const S = [];
      if (m > 1) {
        const v = Math.ceil(Math.sqrt((m * s.width) / s.height)),
          T = Math.ceil(m / v),
          C = Math.min(s.width, Math.floor(2400 / v)),
          R = Math.round((C * s.height) / s.width),
          L = document.createElement("canvas");
        ((L.width = C * v), (L.height = R * T));
        const V = L.getContext("2d");
        if (
          (_.forEach((N, D) =>
            V.drawImage(N, (D % v) * C, Math.floor(D / v) * R, C, R),
          ),
          (b = await new Promise((N) =>
            L.toBlob((D) => D.arrayBuffer().then(N), "image/png"),
          )),
          S.push(b),
          u.keep === "1")
        )
          for (const N of _) {
            const D = document.createElement("canvas");
            ((D.width = s.width),
              (D.height = s.height),
              D.getContext("2d").drawImage(N, 0, 0),
              S.push(
                await new Promise((O) =>
                  D.toBlob((B) => B.arrayBuffer().then(O), "image/png"),
                ),
              ));
          }
        r.render();
      } else S.push(_[0]);
      const E = l(u.probe);
      return i(
        {
          type: "result",
          id: u.id,
          w: s.width,
          h: s.height,
          stats: { ...E, frameMs: r.perf ? r.perf() : void 0 },
          info: x,
        },
        S,
      );
    }
  }
  async function d() {
    return createImageBitmap(s);
  }
}
const urlParams = new URLSearchParams(location.search),
  serviceMode = urlParams.get("service") === "1",
  canvasEl = document.getElementById("c"),
  veilEl = document.getElementById("veil"),
  veilSubEl = document.getElementById("veil-sub"),
  veilBarEl = document.getElementById("veil-bar");
if (+(urlParams.get("section") || 1) == 2 && !serviceMode) {
  ((veilEl.style.background =
    "radial-gradient(ellipse at 50% 40%, #fbf7f0 0%, #efe6d8 75%)"),
    (veilEl.querySelector("h1").style.cssText =
      "color:#4a3a34;text-shadow:0 0 30px rgba(255,200,160,0.6)"),
    (veilSubEl.style.color = "#8a7466"));
  const r = document.createElement("div");
  ((r.textContent = "II  ·  the garden"),
    (r.style.cssText =
      "font-size:15px;letter-spacing:0.5em;color:#8a6a5a;margin:0.4em 0 0.6em;text-transform:uppercase"),
    veilEl.querySelector("h1").after(r),
    (document.body.style.background = "#fbf7f0"));
}
if (+(urlParams.get("section") || 1) == 3 && !serviceMode) {
  const r = document.createElement("div");
  ((r.textContent = "III  ·  the last stop"),
    (r.style.cssText =
      "font-size:15px;letter-spacing:0.5em;color:#9a7466;margin:0.4em 0 0.6em;text-transform:uppercase"),
    veilEl.querySelector("h1").after(r));
}
const game = new GameApp(canvasEl, {
  service: serviceMode,
  maxPixelRatio: +(urlParams.get("pr") || 1.5),
  progress: (r, e) => {
    ((veilBarEl.style.width = (r * 100).toFixed(0) + "%"), e && (veilSubEl.textContent = e));
  },
});
window.__game = game;
