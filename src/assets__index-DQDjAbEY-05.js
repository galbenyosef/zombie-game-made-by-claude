// assets__index-DQDjAbEY 05 — fillstyle
// Lines 1385-1701 of readable/assets__index-DQDjAbEY.pretty.js (statement-aligned).
let ct = null;
const Fe = {};
function ao() {
  if (ct) return ct;
  const e = 2048,
    l = document.createElement("canvas");
  l.width = l.height = e;
  const a = l.getContext("2d");
  a.clearRect(0, 0, e, e);
  const o = (n, c, i, d, f) => (
      (Fe[n] = [c / e, 1 - (i + f) / e, (c + d) / e, 1 - i / e]),
      { px: c, py: i, w: d, h: f }
    ),
    t = (
      n,
      c,
      i,
      d,
      {
        stroke: f = null,
        sw: p = 0,
        align: m = "center",
        dy: x = 0,
        spacing: w = 0,
      } = {},
    ) => {
      (a.save(),
        (a.font = i),
        (a.textAlign = m),
        (a.textBaseline = "middle"),
        w && (a.letterSpacing = w + "px"));
      const v =
          m === "center"
            ? n.px + n.w / 2
            : m === "left"
              ? n.px + 6
              : n.px + n.w - 6,
        u = n.py + n.h / 2 + x;
      (f &&
        ((a.lineWidth = p),
        (a.strokeStyle = f),
        (a.lineJoin = "round"),
        a.strokeText(c, v, u)),
        (a.fillStyle = d),
        a.fillText(c, v, u),
        a.restore());
    };
  {
    const n = o("airrescue", 0, 0, 2048, 200);
    t(
      n,
      "AIR RESCUE",
      'bold 178px "Arial Black", Arial, sans-serif',
      "#f2f0ea",
      { spacing: 6 },
    );
  }
  {
    const n = o("callsign", 0, 210, 1024, 150);
    t(
      n,
      "RESCUE 07",
      'bold 120px "Arial Narrow", Arial, sans-serif',
      "#f2f0ea",
      { spacing: 4 },
    );
  }
  {
    const n = o("reg", 1024, 210, 1024, 150);
    t(n, "JA21AR", "bold 128px Arial, sans-serif", "#141414", { spacing: 10 });
  }
  {
    const n = o("danger", 0, 370, 1024, 110);
    (t(n, "DANGER  -  TAIL ROTOR", "bold 64px Arial, sans-serif", "#f2f0ea", {
      spacing: 3,
    }),
      (a.strokeStyle = "#f2f0ea"),
      (a.lineWidth = 5),
      a.strokeRect(n.px + 30, n.py + 12, n.w - 60, n.h - 24));
  }
  {
    const n = o("emergency", 1024, 370, 1024, 110);
    t(
      n,
      "EMERGENCY MEDICAL SERVICE",
      'bold 58px "Arial Narrow", Arial, sans-serif',
      "#c41a1e",
      { spacing: 2 },
    );
  }
  {
    const n = o("crest", 0, 490, 400, 420),
      c = n.px + 200,
      i = n.py + 200;
    (a.save(),
      a.beginPath(),
      a.moveTo(c - 150, i - 170),
      a.lineTo(c + 150, i - 170),
      a.lineTo(c + 150, i + 10),
      a.quadraticCurveTo(c + 150, i + 150, c, i + 205),
      a.quadraticCurveTo(c - 150, i + 150, c - 150, i + 10),
      a.closePath(),
      (a.fillStyle = "#f2f0ea"),
      a.fill(),
      (a.lineWidth = 12),
      (a.strokeStyle = "#d9a514"),
      a.stroke(),
      a.clip(),
      (a.fillStyle = "#b5161b"),
      a.fillRect(c - 160, i - 40, 320, 70),
      (a.fillStyle = "#f2f0ea"),
      (a.font = 'bold 54px "Arial Black", Arial, sans-serif'),
      (a.textAlign = "center"),
      (a.textBaseline = "middle"),
      a.fillText("AR", c, i - 4),
      (a.fillStyle = "#b5161b"));
    for (let d = 0; d < 5; d++)
      (a.beginPath(),
        a.ellipse(
          c - 20 - d * 18,
          i - 100 + d * 6,
          70 - d * 9,
          14,
          -0.35,
          0,
          Math.PI * 2,
        ),
        a.fill());
    (a.restore(),
      (a.font = "bold 40px Arial, sans-serif"),
      (a.fillStyle = "#f2f0ea"),
      (a.textAlign = "center"),
      a.fillText("CITY AIR RESCUE", c, n.py + 408 - 10));
  }
  {
    const n = o("cut", 420, 490, 300, 300);
    ((a.strokeStyle = "#e0b020"),
      (a.lineWidth = 22),
      a.beginPath(),
      a.moveTo(n.px + 30, n.py + 260),
      a.lineTo(n.px + 30, n.py + 30),
      a.lineTo(n.px + 260, n.py + 30),
      a.stroke(),
      t(
        { px: n.px + 50, py: n.py + 60, w: 240, h: 80 },
        "CUT",
        "bold 64px Arial, sans-serif",
        "#e0b020",
      ),
      t(
        { px: n.px + 50, py: n.py + 140, w: 240, h: 80 },
        "HERE",
        "bold 64px Arial, sans-serif",
        "#e0b020",
      ));
  }
  {
    const n = o("nostep", 740, 490, 400, 100);
    t(n, "NO STEP", "bold 70px Arial, sans-serif", "#1a1a1a", { spacing: 4 });
  }
  {
    const n = o("nostepW", 740, 600, 400, 100);
    t(n, "NO STEP", "bold 70px Arial, sans-serif", "#f2f0ea", { spacing: 4 });
  }
  {
    const n = o("fuel", 1150, 490, 400, 100);
    t(n, "JET A-1", "bold 66px Arial, sans-serif", "#1a1a1a");
  }
  {
    const n = o("push", 1150, 600, 400, 100);
    t(n, "PUSH  >", "bold 66px Arial, sans-serif", "#1a1a1a");
  }
  {
    const n = o("exit", 1560, 490, 480, 100);
    ((a.fillStyle = "#c41a1e"),
      a.fillRect(n.px + 10, n.py + 10, n.w - 20, n.h - 20),
      t(n, "EMERGENCY EXIT", "bold 50px Arial, sans-serif", "#f2f0ea"));
  }
  {
    const n = o("rescueArrow", 1560, 600, 480, 100);
    t(n, "<  RESCUE  >", "bold 60px Arial, sans-serif", "#e0b020");
  }
  {
    const n = o("army", 0, 920, 1400, 180);
    t(n, "ARMY", 'bold 160px "Arial Black", Arial, sans-serif', "#0c0c0a", {
      spacing: 24,
    });
  }
  {
    const n = o("armynum", 1400, 920, 648, 180);
    t(n, "21178", 'bold 140px "Arial Narrow", Arial, sans-serif', "#0c0c0a", {
      spacing: 6,
    });
  }
  {
    const n = o("star", 0, 1110, 300, 300),
      c = n.px + 150,
      i = n.py + 150;
    ((a.strokeStyle = "#0c0c0a"),
      (a.lineWidth = 14),
      a.beginPath(),
      a.arc(c, i, 120, 0, Math.PI * 2),
      a.stroke(),
      a.beginPath());
    for (let d = 0; d < 10; d++) {
      const f = -Math.PI / 2 + (d * Math.PI) / 5,
        p = d % 2 ? 44 : 112;
      a.lineTo(c + Math.cos(f) * p, i + Math.sin(f) * p);
    }
    (a.closePath(), (a.lineWidth = 12), a.stroke());
  }
  (ga(a, o), xa(a, o));
  const s = new Yt(l);
  return (
    (s.colorSpace = Po),
    (s.anisotropy = 8),
    (s.premultiplyAlpha = !1),
    (s.generateMipmaps = !0),
    (s.minFilter = Xt),
    (ct = s),
    s
  );
}
function ga(e, l) {
  const a = (
    o,
    t,
    {
      size: s = 22,
      col: n = "#e8e6df",
      bg: c = null,
      font: i = "bold",
      align: d = "center",
    } = {},
  ) => {
    (c && ((e.fillStyle = c), e.fillRect(o.px, o.py, o.w, o.h)),
      (e.fillStyle = n),
      (e.font = `${i} ${s}px Arial, sans-serif`),
      (e.textAlign = d),
      (e.textBaseline = "middle"));
    const f = t.length;
    t.forEach((p, m) =>
      e.fillText(
        p,
        d === "center" ? o.px + o.w / 2 : o.px + 8,
        o.py + (o.h * (m + 0.5)) / f,
      ),
    );
  };
  {
    const o = l("ovhPanel", 0, 1430, 1024, 600);
    ((e.fillStyle = "#1b1d20"),
      e.fillRect(o.px, o.py, o.w, o.h),
      (e.strokeStyle = "#8a8c90"),
      (e.lineWidth = 3),
      [
        ["BAT MSTR", "GEN 1", "GEN 2", "AVIONICS", "EMER BUS", "INV"],
        ["FUEL P1", "FUEL P2", "XFEED", "ENG 1 START", "ENG 2 START", "IGN"],
        ["NAV LT", "ANTI COLL", "STROBE", "LDG LT", "SRCH LT", "CABIN LT"],
        ["PITOT HT", "HYD 1", "HYD 2", "FIRE EXT 1", "FIRE EXT 2", "TEST"],
      ].forEach((s, n) =>
        s.forEach((c, i) => {
          const d = o.px + 20 + i * 164,
            f = o.py + 26 + n * 146;
          (e.strokeRect(d, f, 148, 128),
            a({ px: d, py: f + 4, w: 148, h: 30 }, [c], { size: 19 }),
            a({ px: d, py: f + 96, w: 148, h: 28 }, ["OFF"], {
              size: 16,
              col: "#b9b7b0",
              font: "normal",
            }),
            a({ px: d, py: f + 34, w: 148, h: 26 }, ["ON"], {
              size: 16,
              col: "#b9b7b0",
              font: "normal",
            }));
        }),
      ));
  }
  {
    const o = l("pedestal", 1030, 1430, 1018, 600);
    ((e.fillStyle = "#1b1d20"), e.fillRect(o.px, o.py, o.w, o.h));
    const t = (n, c, i) => {
      ((e.strokeStyle = "#55575b"),
        (e.lineWidth = 4),
        e.strokeRect(o.px + 10, o.py + n, o.w - 20, c),
        a({ px: o.px + 20, py: o.py + n + 6, w: 260, h: 30 }, [i], {
          size: 22,
          align: "left",
        }));
    };
    (t(10, 140, "COM 1   NAV 1"),
      t(160, 140, "COM 2   NAV 2"),
      t(310, 120, "XPDR"),
      t(440, 150, "AUDIO"),
      ["COM1", "COM2", "NAV1", "NAV2", "ICS", "PA", "MKR", "DME"].forEach(
        (n, c) => {
          const i = o.px + 30 + c * 122;
          ((e.fillStyle = "#2c2e32"),
            e.fillRect(i, o.py + 500, 100, 70),
            a({ px: i, py: o.py + 500, w: 100, h: 70 }, [n], { size: 20 }));
        },
      ));
  }
  {
    const o = l("placard1", 0, 2030, 600, 18);
    a(o, ["NO SMOKING  -  FASTEN SEAT BELTS"], {
      size: 14,
      col: "#d8d6cf",
      bg: "#26282b",
    });
  }
  {
    const o = l("compass", 620, 2030, 200, 18);
    a(o, ["N  3  6  E  12  15  S"], { size: 13, col: "#e8e6df", bg: "#111" });
  }
}
