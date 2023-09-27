var S = Object.defineProperty;
var $ = (t, r, n) => r in t ? S(t, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[r] = n;
var u = (t, r, n) => ($(t, typeof r != "symbol" ? r + "" : r, n), n);
var y = typeof global == "object" && global && global.Object === Object && global;
const O = y;
var T = typeof self == "object" && self && self.Object === Object && self, L = O || T || Function("return this")();
const E = L;
var w = E.Symbol;
const f = w;
var m = Object.prototype, A = m.hasOwnProperty, I = m.toString, a = f ? f.toStringTag : void 0;
function P(t) {
  var r = A.call(t, a), n = t[a];
  try {
    t[a] = void 0;
    var e = !0;
  } catch (s) {
  }
  var i = I.call(t);
  return e && (r ? t[a] = n : delete t[a]), i;
}
var _ = Object.prototype, C = _.toString;
function N(t) {
  return C.call(t);
}
var D = "[object Null]", G = "[object Undefined]", b = f ? f.toStringTag : void 0;
function U(t) {
  return t == null ? t === void 0 ? G : D : b && b in Object(t) ? P(t) : N(t);
}
function B(t) {
  return t != null && typeof t == "object";
}
var F = "[object Symbol]";
function H(t) {
  return typeof t == "symbol" || B(t) && U(t) == F;
}
function M(t, r) {
  for (var n = -1, e = t == null ? 0 : t.length, i = Array(e); ++n < e; )
    i[n] = r(t[n], n, t);
  return i;
}
var R = Array.isArray;
const h = R;
var Y = 1 / 0, g = f ? f.prototype : void 0, d = g ? g.toString : void 0;
function p(t) {
  if (typeof t == "string")
    return t;
  if (h(t))
    return M(t, p) + "";
  if (H(t))
    return d ? d.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -Y ? "-0" : r;
}
function q(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function j(t) {
  return t == null ? "" : p(t);
}
function o(t) {
  return j(t).toLowerCase();
}
function c(t) {
  return j(t).toUpperCase();
}
class x {
  constructor(r) {
    u(this, "handlers", []);
    u(this, "immutableList", []);
    u(this, "keys", []);
    u(this, "values", []);
    u(this, "labels", []);
    !r || !h(r) || r.filter((n) => q(n) || h(n)).forEach((n) => {
      if (h(n)) {
        const [e, i, s, l] = n;
        this.setItem(e, i, s, l);
      } else {
        const { key: e, value: i, label: s, extData: l } = n;
        this.setItem(e, i, s, l);
      }
    });
  }
  setItem(r, n, e, i) {
    return this[o(r)] = n, this[c(r)] = n, this[n] = e, this[o(`${r}_LABEL`)] = e, this[c(`${r}_LABEL`)] = e, this[o(`${r}_DESC`)] = e, this[c(`${r}_DESC`)] = e, this.mountExtData(r, i), this.keys.push(r), this.values.push(n), this.labels.push(e), this.immutableList.push({ key: r, value: n, label: e, extData: i }), this;
  }
  mountExtData(r, n) {
    var e;
    !n || !((e = Object.entries(n)) != null && e.length) || Object.entries(n).forEach(([i, s]) => {
      this[`${o(r)}_${o(i)}`] = s, this[`${c(r)}_${c(i)}`] = s, this[`${o(r)}${o(i)}`] = s, this[`${c(r)}${c(i)}`] = s;
    });
  }
  addHandler(r, ...n) {
    const e = this.handlers.map(([i]) => i) || [];
    return !r || typeof r != "function" || e.includes(r) ? this : (this.handlers.push([r, n]), this);
  }
  get OPTIONS() {
    return this.immutableList.map((r) => this.handlers.reduce((n, [e, i]) => e(n, ...i), r));
  }
}
export {
  x as default
};
