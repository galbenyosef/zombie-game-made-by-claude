// assets/index-DaQlAVPp 04 — look
// Lines 36261-36368 of readable/assets/index-DaQlAVPp.pretty.js (statement-aligned).
class $M {
  constructor() {
    ((this.held = new Set()),
      (this.edge = new Set()),
      (this.locked = !1),
      (this.look = { x: 0, y: 0 }),
      (this._fresh = !1),
      (this._dom = null),
      (this._asking = !1),
      (this.onLockChange = null));
  }
  attach(e) {
    this._dom = e;
    const t = (n, i) => {
      (n.repeat && i) ||
        (i
          ? (this.held.add(n.code), this.edge.add(n.code))
          : this.held.delete(n.code),
        i &&
          (n.code === "Space" ||
            n.code.startsWith("Arrow") ||
            n.code === "Tab") &&
          n.preventDefault());
    };
    (window.addEventListener("keydown", (n) => t(n, !0)),
      window.addEventListener("keyup", (n) => t(n, !1)),
      window.addEventListener("blur", () => this.held.clear()),
      window.addEventListener("mousedown", (n) => {
        if (!this.locked) return;
        const i = "Mouse" + n.button;
        (this.held.add(i), this.edge.add(i));
      }),
      window.addEventListener("mouseup", (n) => {
        this.held.delete("Mouse" + n.button);
      }),
      window.addEventListener("contextmenu", (n) => n.preventDefault()),
      document.addEventListener("pointerlockchange", () => {
        ((this.locked = document.pointerLockElement === e),
          (this.look.x = 0),
          (this.look.y = 0),
          (this._fresh = this.locked),
          this.onLockChange && this.onLockChange(this.locked));
      }),
      document.addEventListener("mousemove", (n) => {
        this.locked &&
          ((this.look.x += n.movementX || 0),
          (this.look.y += n.movementY || 0));
      }));
  }
  requestLock() {
    const e = this._dom;
    if (!e || document.pointerLockElement === e || this._asking) return;
    this._asking = !0;
    const t = () => {
      this._asking = !1;
    };
    try {
      const n = e.requestPointerLock?.({ unadjustedMovement: !0 });
      n?.then
        ? n.then(t, () => {
            try {
              e.requestPointerLock?.()?.catch?.(() => {});
            } catch {}
            t();
          })
        : t();
    } catch {
      t();
    }
  }
  down(e) {
    return this.held.has(e);
  }
  pressed(e) {
    return this.edge.has(e);
  }
  consume(e) {
    const t = this.edge.has(e);
    return (this.edge.delete(e), t);
  }
  takeLook() {
    this._fresh && ((this.look.x = 0), (this.look.y = 0), (this._fresh = !1));
    const e = { x: this.look.x, y: this.look.y };
    return ((this.look.x = 0), (this.look.y = 0), e);
  }
  endFrame() {
    this.edge.clear();
  }
  fakeLock(e = !0) {
    (Object.defineProperty(document, "pointerLockElement", {
      get: () => (e ? this._dom : null),
      configurable: !0,
    }),
      document.dispatchEvent(new Event("pointerlockchange")));
  }
  fakeMouse(e, t) {
    ((this.look.x += e), (this.look.y += t));
  }
}
const KM = 1.85,
  Sc = 3.5,
  wc = 0.27,
  Nd = 1.62,
  jM = 30,
  Tc = new P(),
  QM = new Pt(),
  Fd = new Pt(),
  eS = new rn(0, 0, 0, "YXZ");
