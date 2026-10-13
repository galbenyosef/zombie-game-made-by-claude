// assets__living-DeOLLwnx 04 — fillstyle
// Lines 942-1232 of readable/assets__living-DeOLLwnx.pretty.js (statement-aligned).
function ae(a) {
  return Y0(512, 256, (t, r, e) => {
    ((t.fillStyle = "#1a1714"),
      t.fillRect(0, 0, r, e),
      (t.fillStyle = "#0c0a09"),
      t.fillRect(r / 2 - 3, 0, 6, e));
    const o = (n, l, p, d, c) => {
      ((t.fillStyle = "#e4dccb"), t.fillRect(n - 4, l - 4, p + 8, d + 8));
      const u = t.createLinearGradient(n, l, n, l + d);
      (u.addColorStop(0, "#a89272"),
        u.addColorStop(1, "#5a4832"),
        (t.fillStyle = u),
        t.fillRect(n, l, p, d),
        (t.fillStyle = "rgba(40,30,20,0.85)"));
      const b = c === 0 ? 1 : c === 1 ? 2 : 3;
      for (let k = 0; k < b; k++) {
        const S = n + p * (0.3 + 0.4 * (b === 1 ? 0.5 : k / (b - 1)));
        (k0(t, S, l + d * 0.36, 5, 6, "rgba(40,30,20,0.9)"),
          t.fillRect(S - 6, l + d * 0.45, 12, d * 0.5));
      }
      (c === 3 &&
        ((t.fillStyle = "rgba(20,15,10,0.9)"),
        t.fillRect(n + p * 0.25, l + d * 0.25, p * 0.5, d * 0.3)),
        (t.fillStyle = "#0b0908"));
      for (const [k, S, h, y] of [
        [n - 4, l - 4, 1, 1],
        [n + p + 4, l - 4, -1, 1],
        [n - 4, l + d + 4, 1, -1],
        [n + p + 4, l + d + 4, -1, -1],
      ])
        (t.beginPath(),
          t.moveTo(k, S),
          t.lineTo(k + 12 * h, S),
          t.lineTo(k, S + 12 * y),
          t.fill());
    };
    let s = 0;
    for (const n of [0, 1])
      for (let l = 0; l < 2; l++)
        for (let p = 0; p < 2; p++)
          o(
            (n * r) / 2 + 22 + p * 118,
            20 + l * 118,
            92,
            96,
            (s++ * 7 + ((a() * 3) | 0)) % 4,
          );
  });
}
function se() {
  return Y0(128, 128, (a, t, r) => {
    ((a.fillStyle = "#0b0b0c"),
      a.fillRect(0, 0, t, r),
      (a.fillStyle = "#7a1418"),
      a.beginPath(),
      a.arc(64, 64, 36, 0, s0),
      a.fill(),
      (a.strokeStyle = "#b89040"),
      (a.lineWidth = 2),
      a.beginPath(),
      a.arc(64, 64, 30, 0, s0),
      a.stroke(),
      (a.fillStyle = "#b89040"),
      a.fillRect(46, 50, 36, 4),
      a.fillRect(52, 74, 24, 3),
      (a.fillStyle = "#ddd"),
      a.beginPath(),
      a.arc(64, 64, 3, 0, s0),
      a.fill(),
      (a.strokeStyle = "rgba(255,255,255,0.05)"));
    for (let e = 40; e < 64; e += 1.5)
      (a.beginPath(), a.arc(64, 64, e, 0, s0), a.stroke());
  });
}
function oe(a, t = 256, r = 256, e) {
  const o = (s) => {
    (s.clearRect(0, 0, t, r),
      (s.filter = "blur(6px)"),
      (s.fillStyle = "rgba(255,245,220,0.9)"),
      s.fillRect(14, 14, t - 28, r - 28),
      (s.filter = "none"),
      (s.globalCompositeOperation = "destination-out"));
    for (let n = 0; n < 40; n++)
      k0(
        s,
        a() * t,
        a() * r,
        6 + a() * 20,
        4 + a() * 14,
        "rgba(0,0,0,0.25)",
        4,
      );
  };
  return e ? o : Y0(t, r, o);
}
function ne(a, t = 1024, r = 256, e) {
  return (s) => {
    s.clearRect(0, 0, t, r);
    for (let n = 0; n < 26; n++) {
      const l = r * (0.2 + a() * 0.6),
        p = 0.35 + a() * 0.6;
      ((s.strokeStyle = `rgba(230,210,170,${p})`),
        (s.lineWidth = 0.8 + a() * 1.8),
        s.beginPath(),
        s.moveTo(a() * 60, l));
      for (let d = 1; d <= 12; d++)
        s.lineTo(
          (d / 12) * (t - a() * 60),
          l + Math.sin(d * 0.6 + n) * 6 + (a() - 0.5) * 3,
        );
      s.stroke();
    }
  };
}
function re(a, t = 256, r = 256, e) {
  return (s) => {
    (s.clearRect(0, 0, t, r), (s.filter = "blur(10px)"));
    for (let n = 0; n < 14; n++)
      k0(
        s,
        t / 2 + (a() - 0.5) * 90,
        r * (0.6 + a() * 0.4),
        20 + a() * 40,
        40 + a() * 60,
        "rgba(10,8,6,0.35)",
        0,
      );
  };
}
function bt(a, t = 256, r = 256, e) {
  return (s) => {
    (s.clearRect(0, 0, t, r), (s.filter = "blur(3px)"));
    for (let n = 0; n < 3; n++)
      ((s.strokeStyle = `rgba(60,40,15,${0.35 - n * 0.08})`),
        (s.lineWidth = 5 - n),
        s.beginPath(),
        s.ellipse(
          t / 2 + (a() - 0.5) * 20,
          r / 2,
          90 - n * 18 + a() * 10,
          110 - n * 20,
          a(),
          0,
          s0,
        ),
        s.stroke());
    ((s.fillStyle = "rgba(60,45,20,0.12)"),
      s.beginPath(),
      s.ellipse(t / 2, r / 2, 88, 108, 0, 0, s0),
      s.fill());
  };
}
function le(a, t = 256, r = 512, e) {
  return (s) => {
    s.clearRect(0, 0, t, r);
    const n = s.createLinearGradient(0, 0, 0, r);
    (n.addColorStop(0, "rgba(160,150,130,0.35)"),
      n.addColorStop(1, "rgba(160,150,130,0.12)"),
      (s.fillStyle = n),
      s.fillRect(0, 0, t, r),
      (s.globalCompositeOperation = "destination-out"));
    for (let l = 0; l < 7; l++) {
      ((s.strokeStyle = "rgba(0,0,0,0.5)"),
        (s.lineWidth = 10 + a() * 18),
        s.beginPath());
      const p = a() * t;
      (s.moveTo(p, a() * r * 0.3),
        s.bezierCurveTo(
          p + 40,
          r * 0.4,
          p - 30,
          r * 0.6,
          p + (a() - 0.5) * 60,
          r * (0.7 + a() * 0.3),
        ),
        s.stroke());
    }
    ((s.globalCompositeOperation = "source-over"),
      (s.fillStyle = "rgba(190,180,160,0.3)"));
    for (let l = 0; l < 600; l++) s.fillRect(a() * t, a() * r, 1, 1);
  };
}
function ie() {
  return Y0(128, 32, (a, t, r) => {
    ((a.fillStyle = "#000"),
      a.fillRect(0, 0, t, r),
      (a.fillStyle = "#fff"),
      (a.font = "bold 26px monospace"),
      (a.textAlign = "center"),
      (a.textBaseline = "middle"),
      a.fillText("12:00", t / 2, r / 2 + 1));
  });
}
function ce(a, t = 256, r = 256, e) {
  return (s) => {
    (s.clearRect(0, 0, t, r), (s.filter = "blur(4px)"));
    const n = s.createRadialGradient(
      t * 0.45,
      r * 0.5,
      10,
      t * 0.5,
      r * 0.5,
      t * 0.45,
    );
    (n.addColorStop(0, "rgba(70,6,16,0.9)"),
      n.addColorStop(0.7, "rgba(90,10,20,0.6)"),
      n.addColorStop(1, "rgba(90,10,20,0)"),
      (s.fillStyle = n),
      s.beginPath(),
      s.ellipse(t * 0.5, r * 0.5, t * 0.44, r * 0.3, 0.3, 0, s0),
      s.fill(),
      (s.strokeStyle = "rgba(60,5,12,0.7)"),
      (s.lineWidth = 3),
      s.beginPath(),
      s.ellipse(t * 0.52, r * 0.5, t * 0.42, r * 0.3, 0.3, 0, s0),
      s.stroke(),
      (s.filter = "none"));
  };
}
function W0(a, t, r) {
  return (e, o, s) => {
    (e.save(),
      a(e, o, s),
      e.restore(),
      e.save(),
      (e.globalCompositeOperation = "source-in"),
      (e.fillStyle = t),
      e.fillRect(0, 0, o, s),
      (e.globalCompositeOperation = "destination-in"),
      (e.fillStyle = `rgba(0,0,0,${r})`),
      e.fillRect(0, 0, o, s),
      e.restore());
  };
}
const fe = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  pe = `
precision highp float;
varying vec2 vUv;
uniform float uFrame;
uniform float uTime;
uniform float uFace;
uniform float uGain;
uniform float uFlick;
uniform float uCollapse;
uniform float uOn;
uniform sampler2D uFaceTex;
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec2 c = vUv * 2.0 - 1.0;
  // the rounded CRT mask
  vec2 q = abs(c) - vec2(0.80, 0.74);
  float rr = length(max(q, 0.0)) - 0.2;
  float mask = 1.0 - smoothstep(-0.03, 0.01, rr);
  // switch-off collapse: squeeze to a line, then to a dot
  float sy = max(1.0 - uCollapse * 1.9, 0.006);
  float sx = uCollapse > 0.5 ? max(1.0 - (uCollapse - 0.5) * 2.1, 0.004) : 1.0;
  vec2 cc = c / vec2(sx, sy);
  float inside = step(abs(cc.x), 1.0) * step(abs(cc.y), 1.0);
  vec2 uv = cc * 0.5 + 0.5;
  float f = floor(uFrame);
  // static: horizontally smeared grains, per-line gain, rolling bars, scanlines
  float n1 = h21(floor(vec2(uv.x * 170.0, uv.y * 128.0)) + f * vec2(17.13, 31.71));
  float n2 = h21(floor(vec2(uv.x * 55.0, uv.y * 128.0)) + f * vec2(3.17, 7.77));
  float line = h21(vec2(floor(uv.y * 128.0), f * 1.31));
  float stat = pow(mix(n1, n2, 0.35), 1.35) * (0.7 + 0.6 * line);
  float roll = fract(uv.y * 0.85 + uTime * 0.23);
  float bar = 0.62 + 0.38 * smoothstep(0.0, 0.22, roll) * smoothstep(1.0, 0.6, roll);
  float roll2 = fract(uv.y * 2.3 - uTime * 0.61);
  bar *= 0.9 + 0.1 * smoothstep(0.0, 0.05, roll2);
  float scan = 0.8 + 0.2 * sin(uv.y * 256.0 * 3.14159);
  vec3 col = vec3(stat) * bar * scan * vec3(0.84, 0.93, 1.08);
  // the face shows through for a frame
  vec2 fuv = vec2(uv.x + (line - 0.5) * 0.012, uv.y);
  vec3 face = texture2D(uFaceTex, fuv).rgb;
  col = mix(col, face * (0.75 + 0.45 * stat) * scan * vec3(0.9, 0.97, 1.05), uFace * 0.9);
  // tube falloff toward the corners
  float vig = 1.0 - 0.38 * dot(c * vec2(0.85, 1.0), c * vec2(0.85, 1.0));
  col *= vig * uFlick * uGain;
  // a white-hot line / dot while collapsing
  col *= 1.0 + uCollapse * 5.0;
  col *= inside * uOn;
  vec3 glass = vec3(0.010, 0.013, 0.013);
  gl_FragColor = vec4(mix(glass, max(col, glass), mask), 1.0);
}
`;
