var je = Object.defineProperty;
var yr = Object.getOwnPropertySymbols;
var ze = Object.prototype.hasOwnProperty, Ge = Object.prototype.propertyIsEnumerable;
var Y = (r, e, t) => e in r ? je(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, q = (r, e) => {
  for (var t in e || (e = {}))
    ze.call(e, t) && Y(r, t, e[t]);
  if (yr)
    for (var t of yr(e))
      Ge.call(e, t) && Y(r, t, e[t]);
  return r;
};
var P = (r, e, t) => (Y(r, typeof e != "symbol" ? e + "" : e, t), t);
var He = typeof global == "object" && global && global.Object === Object && global;
const Wr = He;
var Be = typeof self == "object" && self && self.Object === Object && self, Ke = Wr || Be || Function("return this")();
const x = Ke;
var Ze = x.Symbol;
const O = Ze;
var Jr = Object.prototype, We = Jr.hasOwnProperty, Je = Jr.toString, U = O ? O.toStringTag : void 0;
function Xe(r) {
  var e = We.call(r, U), t = r[U];
  try {
    r[U] = void 0;
    var n = !0;
  } catch (u) {
  }
  var a = Je.call(r);
  return n && (e ? r[U] = t : delete r[U]), a;
}
var Ye = Object.prototype, qe = Ye.toString;
function Qe(r) {
  return qe.call(r);
}
var Ve = "[object Null]", ke = "[object Undefined]", br = O ? O.toStringTag : void 0;
function D(r) {
  return r == null ? r === void 0 ? ke : Ve : br && br in Object(r) ? Xe(r) : Qe(r);
}
function N(r) {
  return r != null && typeof r == "object";
}
var rt = "[object Symbol]";
function sr(r) {
  return typeof r == "symbol" || N(r) && D(r) == rt;
}
function Xr(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, a = Array(n); ++t < n; )
    a[t] = e(r[t], t, r);
  return a;
}
var et = Array.isArray;
const g = et;
var tt = 1 / 0, _r = O ? O.prototype : void 0, vr = _r ? _r.toString : void 0;
function Yr(r) {
  if (typeof r == "string")
    return r;
  if (g(r))
    return Xr(r, Yr) + "";
  if (sr(r))
    return vr ? vr.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -tt ? "-0" : e;
}
function S(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
function nt(r) {
  return r;
}
var at = "[object AsyncFunction]", ut = "[object Function]", it = "[object GeneratorFunction]", st = "[object Proxy]";
function qr(r) {
  if (!S(r))
    return !1;
  var e = D(r);
  return e == ut || e == it || e == at || e == st;
}
var ot = x["__core-js_shared__"];
const Q = ot;
var xr = function() {
  var r = /[^.]+$/.exec(Q && Q.keys && Q.keys.IE_PROTO || "");
  return r ? "Symbol(src)_1." + r : "";
}();
function ft(r) {
  return !!xr && xr in r;
}
var ct = Function.prototype, lt = ct.toString;
function R(r) {
  if (r != null) {
    try {
      return lt.call(r);
    } catch (e) {
    }
    try {
      return r + "";
    } catch (e) {
    }
  }
  return "";
}
var dt = /[\\^$.*+?()[\]{}|]/g, pt = /^\[object .+?Constructor\]$/, gt = Function.prototype, ht = Object.prototype, yt = gt.toString, bt = ht.hasOwnProperty, _t = RegExp(
  "^" + yt.call(bt).replace(dt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function vt(r) {
  if (!S(r) || ft(r))
    return !1;
  var e = qr(r) ? _t : pt;
  return e.test(R(r));
}
function xt(r, e) {
  return r == null ? void 0 : r[e];
}
function I(r, e) {
  var t = xt(r, e);
  return vt(t) ? t : void 0;
}
var $t = I(x, "WeakMap");
const rr = $t;
var At = function() {
  try {
    var r = I(Object, "defineProperty");
    return r({}, "", {}), r;
  } catch (e) {
  }
}();
const $r = At;
var mt = 9007199254740991, Ot = /^(?:0|[1-9]\d*)$/;
function or(r, e) {
  var t = typeof r;
  return e = e == null ? mt : e, !!e && (t == "number" || t != "symbol" && Ot.test(r)) && r > -1 && r % 1 == 0 && r < e;
}
function Tt(r, e, t) {
  e == "__proto__" && $r ? $r(r, e, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : r[e] = t;
}
function fr(r, e) {
  return r === e || r !== r && e !== e;
}
var wt = Object.prototype, Pt = wt.hasOwnProperty;
function Ct(r, e, t) {
  var n = r[e];
  (!(Pt.call(r, e) && fr(n, t)) || t === void 0 && !(e in r)) && Tt(r, e, t);
}
var St = 9007199254740991;
function cr(r) {
  return typeof r == "number" && r > -1 && r % 1 == 0 && r <= St;
}
function Qr(r) {
  return r != null && cr(r.length) && !qr(r);
}
var Et = Object.prototype;
function Vr(r) {
  var e = r && r.constructor, t = typeof e == "function" && e.prototype || Et;
  return r === t;
}
function Rt(r, e) {
  for (var t = -1, n = Array(r); ++t < r; )
    n[t] = e(t);
  return n;
}
var It = "[object Arguments]";
function Ar(r) {
  return N(r) && D(r) == It;
}
var kr = Object.prototype, Lt = kr.hasOwnProperty, Mt = kr.propertyIsEnumerable, Nt = Ar(function() {
  return arguments;
}()) ? Ar : function(r) {
  return N(r) && Lt.call(r, "callee") && !Mt.call(r, "callee");
};
const re = Nt;
function Dt() {
  return !1;
}
var ee = typeof exports == "object" && exports && !exports.nodeType && exports, mr = ee && typeof module == "object" && module && !module.nodeType && module, Ut = mr && mr.exports === ee, Or = Ut ? x.Buffer : void 0, Ft = Or ? Or.isBuffer : void 0, jt = Ft || Dt;
const er = jt;
var zt = "[object Arguments]", Gt = "[object Array]", Ht = "[object Boolean]", Bt = "[object Date]", Kt = "[object Error]", Zt = "[object Function]", Wt = "[object Map]", Jt = "[object Number]", Xt = "[object Object]", Yt = "[object RegExp]", qt = "[object Set]", Qt = "[object String]", Vt = "[object WeakMap]", kt = "[object ArrayBuffer]", rn = "[object DataView]", en = "[object Float32Array]", tn = "[object Float64Array]", nn = "[object Int8Array]", an = "[object Int16Array]", un = "[object Int32Array]", sn = "[object Uint8Array]", on = "[object Uint8ClampedArray]", fn = "[object Uint16Array]", cn = "[object Uint32Array]", c = {};
c[en] = c[tn] = c[nn] = c[an] = c[un] = c[sn] = c[on] = c[fn] = c[cn] = !0;
c[zt] = c[Gt] = c[kt] = c[Ht] = c[rn] = c[Bt] = c[Kt] = c[Zt] = c[Wt] = c[Jt] = c[Xt] = c[Yt] = c[qt] = c[Qt] = c[Vt] = !1;
function ln(r) {
  return N(r) && cr(r.length) && !!c[D(r)];
}
function dn(r) {
  return function(e) {
    return r(e);
  };
}
var te = typeof exports == "object" && exports && !exports.nodeType && exports, F = te && typeof module == "object" && module && !module.nodeType && module, pn = F && F.exports === te, V = pn && Wr.process, gn = function() {
  try {
    var r = F && F.require && F.require("util").types;
    return r || V && V.binding && V.binding("util");
  } catch (e) {
  }
}();
const Tr = gn;
var wr = Tr && Tr.isTypedArray, hn = wr ? dn(wr) : ln;
const ne = hn;
var yn = Object.prototype, bn = yn.hasOwnProperty;
function ae(r, e) {
  var t = g(r), n = !t && re(r), a = !t && !n && er(r), u = !t && !n && !a && ne(r), i = t || n || a || u, s = i ? Rt(r.length, String) : [], f = s.length;
  for (var o in r)
    (e || bn.call(r, o)) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (o == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (o == "offset" || o == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    u && (o == "buffer" || o == "byteLength" || o == "byteOffset") || // Skip index properties.
    or(o, f))) && s.push(o);
  return s;
}
function ue(r, e) {
  return function(t) {
    return r(e(t));
  };
}
var _n = ue(Object.keys, Object);
const vn = _n;
var xn = Object.prototype, $n = xn.hasOwnProperty;
function An(r) {
  if (!Vr(r))
    return vn(r);
  var e = [];
  for (var t in Object(r))
    $n.call(r, t) && t != "constructor" && e.push(t);
  return e;
}
function ie(r) {
  return Qr(r) ? ae(r) : An(r);
}
function mn(r) {
  var e = [];
  if (r != null)
    for (var t in Object(r))
      e.push(t);
  return e;
}
var On = Object.prototype, Tn = On.hasOwnProperty;
function wn(r) {
  if (!S(r))
    return mn(r);
  var e = Vr(r), t = [];
  for (var n in r)
    n == "constructor" && (e || !Tn.call(r, n)) || t.push(n);
  return t;
}
function Pn(r) {
  return Qr(r) ? ae(r, !0) : wn(r);
}
var Cn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sn = /^\w*$/;
function lr(r, e) {
  if (g(r))
    return !1;
  var t = typeof r;
  return t == "number" || t == "symbol" || t == "boolean" || r == null || sr(r) ? !0 : Sn.test(r) || !Cn.test(r) || e != null && r in Object(e);
}
var En = I(Object, "create");
const j = En;
function Rn() {
  this.__data__ = j ? j(null) : {}, this.size = 0;
}
function In(r) {
  var e = this.has(r) && delete this.__data__[r];
  return this.size -= e ? 1 : 0, e;
}
var Ln = "__lodash_hash_undefined__", Mn = Object.prototype, Nn = Mn.hasOwnProperty;
function Dn(r) {
  var e = this.__data__;
  if (j) {
    var t = e[r];
    return t === Ln ? void 0 : t;
  }
  return Nn.call(e, r) ? e[r] : void 0;
}
var Un = Object.prototype, Fn = Un.hasOwnProperty;
function jn(r) {
  var e = this.__data__;
  return j ? e[r] !== void 0 : Fn.call(e, r);
}
var zn = "__lodash_hash_undefined__";
function Gn(r, e) {
  var t = this.__data__;
  return this.size += this.has(r) ? 0 : 1, t[r] = j && e === void 0 ? zn : e, this;
}
function E(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
E.prototype.clear = Rn;
E.prototype.delete = In;
E.prototype.get = Dn;
E.prototype.has = jn;
E.prototype.set = Gn;
function Hn() {
  this.__data__ = [], this.size = 0;
}
function W(r, e) {
  for (var t = r.length; t--; )
    if (fr(r[t][0], e))
      return t;
  return -1;
}
var Bn = Array.prototype, Kn = Bn.splice;
function Zn(r) {
  var e = this.__data__, t = W(e, r);
  if (t < 0)
    return !1;
  var n = e.length - 1;
  return t == n ? e.pop() : Kn.call(e, t, 1), --this.size, !0;
}
function Wn(r) {
  var e = this.__data__, t = W(e, r);
  return t < 0 ? void 0 : e[t][1];
}
function Jn(r) {
  return W(this.__data__, r) > -1;
}
function Xn(r, e) {
  var t = this.__data__, n = W(t, r);
  return n < 0 ? (++this.size, t.push([r, e])) : t[n][1] = e, this;
}
function $(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
$.prototype.clear = Hn;
$.prototype.delete = Zn;
$.prototype.get = Wn;
$.prototype.has = Jn;
$.prototype.set = Xn;
var Yn = I(x, "Map");
const z = Yn;
function qn() {
  this.size = 0, this.__data__ = {
    hash: new E(),
    map: new (z || $)(),
    string: new E()
  };
}
function Qn(r) {
  var e = typeof r;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? r !== "__proto__" : r === null;
}
function J(r, e) {
  var t = r.__data__;
  return Qn(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
}
function Vn(r) {
  var e = J(this, r).delete(r);
  return this.size -= e ? 1 : 0, e;
}
function kn(r) {
  return J(this, r).get(r);
}
function ra(r) {
  return J(this, r).has(r);
}
function ea(r, e) {
  var t = J(this, r), n = t.size;
  return t.set(r, e), this.size += t.size == n ? 0 : 1, this;
}
function A(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.clear(); ++e < t; ) {
    var n = r[e];
    this.set(n[0], n[1]);
  }
}
A.prototype.clear = qn;
A.prototype.delete = Vn;
A.prototype.get = kn;
A.prototype.has = ra;
A.prototype.set = ea;
var ta = "Expected a function";
function dr(r, e) {
  if (typeof r != "function" || e != null && typeof e != "function")
    throw new TypeError(ta);
  var t = function() {
    var n = arguments, a = e ? e.apply(this, n) : n[0], u = t.cache;
    if (u.has(a))
      return u.get(a);
    var i = r.apply(this, n);
    return t.cache = u.set(a, i) || u, i;
  };
  return t.cache = new (dr.Cache || A)(), t;
}
dr.Cache = A;
var na = 500;
function aa(r) {
  var e = dr(r, function(n) {
    return t.size === na && t.clear(), n;
  }), t = e.cache;
  return e;
}
var ua = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ia = /\\(\\)?/g, sa = aa(function(r) {
  var e = [];
  return r.charCodeAt(0) === 46 && e.push(""), r.replace(ua, function(t, n, a, u) {
    e.push(a ? u.replace(ia, "$1") : n || t);
  }), e;
});
const oa = sa;
function L(r) {
  return r == null ? "" : Yr(r);
}
function X(r, e) {
  return g(r) ? r : lr(r, e) ? [r] : oa(L(r));
}
var fa = 1 / 0;
function G(r) {
  if (typeof r == "string" || sr(r))
    return r;
  var e = r + "";
  return e == "0" && 1 / r == -fa ? "-0" : e;
}
function pr(r, e) {
  e = X(e, r);
  for (var t = 0, n = e.length; r != null && t < n; )
    r = r[G(e[t++])];
  return t && t == n ? r : void 0;
}
function ca(r, e, t) {
  var n = r == null ? void 0 : pr(r, e);
  return n === void 0 ? t : n;
}
function se(r, e) {
  for (var t = -1, n = e.length, a = r.length; ++t < n; )
    r[a + t] = e[t];
  return r;
}
var la = ue(Object.getPrototypeOf, Object);
const da = la;
function pa(r, e, t) {
  var n = -1, a = r.length;
  e < 0 && (e = -e > a ? 0 : a + e), t = t > a ? a : t, t < 0 && (t += a), a = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var u = Array(a); ++n < a; )
    u[n] = r[n + e];
  return u;
}
function ga(r, e, t) {
  var n = r.length;
  return t = t === void 0 ? n : t, !e && t >= n ? r : pa(r, e, t);
}
var ha = "\\ud800-\\udfff", ya = "\\u0300-\\u036f", ba = "\\ufe20-\\ufe2f", _a = "\\u20d0-\\u20ff", va = ya + ba + _a, xa = "\\ufe0e\\ufe0f", $a = "\\u200d", Aa = RegExp("[" + $a + ha + va + xa + "]");
function oe(r) {
  return Aa.test(r);
}
function ma(r) {
  return r.split("");
}
var fe = "\\ud800-\\udfff", Oa = "\\u0300-\\u036f", Ta = "\\ufe20-\\ufe2f", wa = "\\u20d0-\\u20ff", Pa = Oa + Ta + wa, Ca = "\\ufe0e\\ufe0f", Sa = "[" + fe + "]", tr = "[" + Pa + "]", nr = "\\ud83c[\\udffb-\\udfff]", Ea = "(?:" + tr + "|" + nr + ")", ce = "[^" + fe + "]", le = "(?:\\ud83c[\\udde6-\\uddff]){2}", de = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ra = "\\u200d", pe = Ea + "?", ge = "[" + Ca + "]?", Ia = "(?:" + Ra + "(?:" + [ce, le, de].join("|") + ")" + ge + pe + ")*", La = ge + pe + Ia, Ma = "(?:" + [ce + tr + "?", tr, le, de, Sa].join("|") + ")", Na = RegExp(nr + "(?=" + nr + ")|" + Ma + La, "g");
function Da(r) {
  return r.match(Na) || [];
}
function Ua(r) {
  return oe(r) ? Da(r) : ma(r);
}
function he(r) {
  return function(e) {
    e = L(e);
    var t = oe(e) ? Ua(e) : void 0, n = t ? t[0] : e.charAt(0), a = t ? ga(t, 1).join("") : e.slice(1);
    return n[r]() + a;
  };
}
var Fa = he("toUpperCase");
const ye = Fa;
function ja(r) {
  return ye(L(r).toLowerCase());
}
function za(r, e, t, n) {
  var a = -1, u = r == null ? 0 : r.length;
  for (n && u && (t = r[++a]); ++a < u; )
    t = e(t, r[a], a, r);
  return t;
}
function Ga(r) {
  return function(e) {
    return r == null ? void 0 : r[e];
  };
}
var Ha = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, Ba = Ga(Ha);
const Ka = Ba;
var Za = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Wa = "\\u0300-\\u036f", Ja = "\\ufe20-\\ufe2f", Xa = "\\u20d0-\\u20ff", Ya = Wa + Ja + Xa, qa = "[" + Ya + "]", Qa = RegExp(qa, "g");
function Va(r) {
  return r = L(r), r && r.replace(Za, Ka).replace(Qa, "");
}
var ka = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function ru(r) {
  return r.match(ka) || [];
}
var eu = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function tu(r) {
  return eu.test(r);
}
var be = "\\ud800-\\udfff", nu = "\\u0300-\\u036f", au = "\\ufe20-\\ufe2f", uu = "\\u20d0-\\u20ff", iu = nu + au + uu, _e = "\\u2700-\\u27bf", ve = "a-z\\xdf-\\xf6\\xf8-\\xff", su = "\\xac\\xb1\\xd7\\xf7", ou = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fu = "\\u2000-\\u206f", cu = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xe = "A-Z\\xc0-\\xd6\\xd8-\\xde", lu = "\\ufe0e\\ufe0f", $e = su + ou + fu + cu, Ae = "['’]", Pr = "[" + $e + "]", du = "[" + iu + "]", me = "\\d+", pu = "[" + _e + "]", Oe = "[" + ve + "]", Te = "[^" + be + $e + me + _e + ve + xe + "]", gu = "\\ud83c[\\udffb-\\udfff]", hu = "(?:" + du + "|" + gu + ")", yu = "[^" + be + "]", we = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pe = "[\\ud800-\\udbff][\\udc00-\\udfff]", M = "[" + xe + "]", bu = "\\u200d", Cr = "(?:" + Oe + "|" + Te + ")", _u = "(?:" + M + "|" + Te + ")", Sr = "(?:" + Ae + "(?:d|ll|m|re|s|t|ve))?", Er = "(?:" + Ae + "(?:D|LL|M|RE|S|T|VE))?", Ce = hu + "?", Se = "[" + lu + "]?", vu = "(?:" + bu + "(?:" + [yu, we, Pe].join("|") + ")" + Se + Ce + ")*", xu = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", $u = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Au = Se + Ce + vu, mu = "(?:" + [pu, we, Pe].join("|") + ")" + Au, Ou = RegExp([
  M + "?" + Oe + "+" + Sr + "(?=" + [Pr, M, "$"].join("|") + ")",
  _u + "+" + Er + "(?=" + [Pr, M + Cr, "$"].join("|") + ")",
  M + "?" + Cr + "+" + Sr,
  M + "+" + Er,
  $u,
  xu,
  me,
  mu
].join("|"), "g");
function Tu(r) {
  return r.match(Ou) || [];
}
function wu(r, e, t) {
  return r = L(r), e = t ? void 0 : e, e === void 0 ? tu(r) ? Tu(r) : ru(r) : r.match(e) || [];
}
var Pu = "['’]", Cu = RegExp(Pu, "g");
function Ee(r) {
  return function(e) {
    return za(wu(Va(e).replace(Cu, "")), r, "");
  };
}
var Su = Ee(function(r, e, t) {
  return e = e.toLowerCase(), r + (t ? ja(e) : e);
});
const Rr = Su;
function Eu() {
  this.__data__ = new $(), this.size = 0;
}
function Ru(r) {
  var e = this.__data__, t = e.delete(r);
  return this.size = e.size, t;
}
function Iu(r) {
  return this.__data__.get(r);
}
function Lu(r) {
  return this.__data__.has(r);
}
var Mu = 200;
function Nu(r, e) {
  var t = this.__data__;
  if (t instanceof $) {
    var n = t.__data__;
    if (!z || n.length < Mu - 1)
      return n.push([r, e]), this.size = ++t.size, this;
    t = this.__data__ = new A(n);
  }
  return t.set(r, e), this.size = t.size, this;
}
function v(r) {
  var e = this.__data__ = new $(r);
  this.size = e.size;
}
v.prototype.clear = Eu;
v.prototype.delete = Ru;
v.prototype.get = Iu;
v.prototype.has = Lu;
v.prototype.set = Nu;
function Du(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, a = 0, u = []; ++t < n; ) {
    var i = r[t];
    e(i, t, r) && (u[a++] = i);
  }
  return u;
}
function Re() {
  return [];
}
var Uu = Object.prototype, Fu = Uu.propertyIsEnumerable, Ir = Object.getOwnPropertySymbols, ju = Ir ? function(r) {
  return r == null ? [] : (r = Object(r), Du(Ir(r), function(e) {
    return Fu.call(r, e);
  }));
} : Re;
const Ie = ju;
var zu = Object.getOwnPropertySymbols, Gu = zu ? function(r) {
  for (var e = []; r; )
    se(e, Ie(r)), r = da(r);
  return e;
} : Re;
const Hu = Gu;
function Le(r, e, t) {
  var n = e(r);
  return g(r) ? n : se(n, t(r));
}
function Lr(r) {
  return Le(r, ie, Ie);
}
function Bu(r) {
  return Le(r, Pn, Hu);
}
var Ku = I(x, "DataView");
const ar = Ku;
var Zu = I(x, "Promise");
const ur = Zu;
var Wu = I(x, "Set");
const ir = Wu;
var Mr = "[object Map]", Ju = "[object Object]", Nr = "[object Promise]", Dr = "[object Set]", Ur = "[object WeakMap]", Fr = "[object DataView]", Xu = R(ar), Yu = R(z), qu = R(ur), Qu = R(ir), Vu = R(rr), C = D;
(ar && C(new ar(new ArrayBuffer(1))) != Fr || z && C(new z()) != Mr || ur && C(ur.resolve()) != Nr || ir && C(new ir()) != Dr || rr && C(new rr()) != Ur) && (C = function(r) {
  var e = D(r), t = e == Ju ? r.constructor : void 0, n = t ? R(t) : "";
  if (n)
    switch (n) {
      case Xu:
        return Fr;
      case Yu:
        return Mr;
      case qu:
        return Nr;
      case Qu:
        return Dr;
      case Vu:
        return Ur;
    }
  return e;
});
const jr = C;
var ku = x.Uint8Array;
const zr = ku;
var ri = "__lodash_hash_undefined__";
function ei(r) {
  return this.__data__.set(r, ri), this;
}
function ti(r) {
  return this.__data__.has(r);
}
function Z(r) {
  var e = -1, t = r == null ? 0 : r.length;
  for (this.__data__ = new A(); ++e < t; )
    this.add(r[e]);
}
Z.prototype.add = Z.prototype.push = ei;
Z.prototype.has = ti;
function ni(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length; ++t < n; )
    if (e(r[t], t, r))
      return !0;
  return !1;
}
function ai(r, e) {
  return r.has(e);
}
var ui = 1, ii = 2;
function Me(r, e, t, n, a, u) {
  var i = t & ui, s = r.length, f = e.length;
  if (s != f && !(i && f > s))
    return !1;
  var o = u.get(r), d = u.get(e);
  if (o && d)
    return o == e && d == r;
  var p = -1, l = !0, _ = t & ii ? new Z() : void 0;
  for (u.set(r, e), u.set(e, r); ++p < s; ) {
    var h = r[p], y = e[p];
    if (n)
      var m = i ? n(y, h, p, e, r, u) : n(h, y, p, r, e, u);
    if (m !== void 0) {
      if (m)
        continue;
      l = !1;
      break;
    }
    if (_) {
      if (!ni(e, function(T, w) {
        if (!ai(_, w) && (h === T || a(h, T, t, n, u)))
          return _.push(w);
      })) {
        l = !1;
        break;
      }
    } else if (!(h === y || a(h, y, t, n, u))) {
      l = !1;
      break;
    }
  }
  return u.delete(r), u.delete(e), l;
}
function si(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(n, a) {
    t[++e] = [a, n];
  }), t;
}
function oi(r) {
  var e = -1, t = Array(r.size);
  return r.forEach(function(n) {
    t[++e] = n;
  }), t;
}
var fi = 1, ci = 2, li = "[object Boolean]", di = "[object Date]", pi = "[object Error]", gi = "[object Map]", hi = "[object Number]", yi = "[object RegExp]", bi = "[object Set]", _i = "[object String]", vi = "[object Symbol]", xi = "[object ArrayBuffer]", $i = "[object DataView]", Gr = O ? O.prototype : void 0, k = Gr ? Gr.valueOf : void 0;
function Ai(r, e, t, n, a, u, i) {
  switch (t) {
    case $i:
      if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
        return !1;
      r = r.buffer, e = e.buffer;
    case xi:
      return !(r.byteLength != e.byteLength || !u(new zr(r), new zr(e)));
    case li:
    case di:
    case hi:
      return fr(+r, +e);
    case pi:
      return r.name == e.name && r.message == e.message;
    case yi:
    case _i:
      return r == e + "";
    case gi:
      var s = si;
    case bi:
      var f = n & fi;
      if (s || (s = oi), r.size != e.size && !f)
        return !1;
      var o = i.get(r);
      if (o)
        return o == e;
      n |= ci, i.set(r, e);
      var d = Me(s(r), s(e), n, a, u, i);
      return i.delete(r), d;
    case vi:
      if (k)
        return k.call(r) == k.call(e);
  }
  return !1;
}
var mi = 1, Oi = Object.prototype, Ti = Oi.hasOwnProperty;
function wi(r, e, t, n, a, u) {
  var i = t & mi, s = Lr(r), f = s.length, o = Lr(e), d = o.length;
  if (f != d && !i)
    return !1;
  for (var p = f; p--; ) {
    var l = s[p];
    if (!(i ? l in e : Ti.call(e, l)))
      return !1;
  }
  var _ = u.get(r), h = u.get(e);
  if (_ && h)
    return _ == e && h == r;
  var y = !0;
  u.set(r, e), u.set(e, r);
  for (var m = i; ++p < f; ) {
    l = s[p];
    var T = r[l], w = e[l];
    if (n)
      var hr = i ? n(w, T, l, e, r, u) : n(T, w, l, r, e, u);
    if (!(hr === void 0 ? T === w || a(T, w, t, n, u) : hr)) {
      y = !1;
      break;
    }
    m || (m = l == "constructor");
  }
  if (y && !m) {
    var H = r.constructor, B = e.constructor;
    H != B && "constructor" in r && "constructor" in e && !(typeof H == "function" && H instanceof H && typeof B == "function" && B instanceof B) && (y = !1);
  }
  return u.delete(r), u.delete(e), y;
}
var Pi = 1, Hr = "[object Arguments]", Br = "[object Array]", K = "[object Object]", Ci = Object.prototype, Kr = Ci.hasOwnProperty;
function Si(r, e, t, n, a, u) {
  var i = g(r), s = g(e), f = i ? Br : jr(r), o = s ? Br : jr(e);
  f = f == Hr ? K : f, o = o == Hr ? K : o;
  var d = f == K, p = o == K, l = f == o;
  if (l && er(r)) {
    if (!er(e))
      return !1;
    i = !0, d = !1;
  }
  if (l && !d)
    return u || (u = new v()), i || ne(r) ? Me(r, e, t, n, a, u) : Ai(r, e, f, t, n, a, u);
  if (!(t & Pi)) {
    var _ = d && Kr.call(r, "__wrapped__"), h = p && Kr.call(e, "__wrapped__");
    if (_ || h) {
      var y = _ ? r.value() : r, m = h ? e.value() : e;
      return u || (u = new v()), a(y, m, t, n, u);
    }
  }
  return l ? (u || (u = new v()), wi(r, e, t, n, a, u)) : !1;
}
function gr(r, e, t, n, a) {
  return r === e ? !0 : r == null || e == null || !N(r) && !N(e) ? r !== r && e !== e : Si(r, e, t, n, gr, a);
}
var Ei = 1, Ri = 2;
function Ii(r, e, t, n) {
  var a = t.length, u = a, i = !n;
  if (r == null)
    return !u;
  for (r = Object(r); a--; ) {
    var s = t[a];
    if (i && s[2] ? s[1] !== r[s[0]] : !(s[0] in r))
      return !1;
  }
  for (; ++a < u; ) {
    s = t[a];
    var f = s[0], o = r[f], d = s[1];
    if (i && s[2]) {
      if (o === void 0 && !(f in r))
        return !1;
    } else {
      var p = new v();
      if (n)
        var l = n(o, d, f, r, e, p);
      if (!(l === void 0 ? gr(d, o, Ei | Ri, n, p) : l))
        return !1;
    }
  }
  return !0;
}
function Ne(r) {
  return r === r && !S(r);
}
function Li(r) {
  for (var e = ie(r), t = e.length; t--; ) {
    var n = e[t], a = r[n];
    e[t] = [n, a, Ne(a)];
  }
  return e;
}
function De(r, e) {
  return function(t) {
    return t == null ? !1 : t[r] === e && (e !== void 0 || r in Object(t));
  };
}
function Mi(r) {
  var e = Li(r);
  return e.length == 1 && e[0][2] ? De(e[0][0], e[0][1]) : function(t) {
    return t === r || Ii(t, r, e);
  };
}
function Ni(r, e) {
  return r != null && e in Object(r);
}
function Di(r, e, t) {
  e = X(e, r);
  for (var n = -1, a = e.length, u = !1; ++n < a; ) {
    var i = G(e[n]);
    if (!(u = r != null && t(r, i)))
      break;
    r = r[i];
  }
  return u || ++n != a ? u : (a = r == null ? 0 : r.length, !!a && cr(a) && or(i, a) && (g(r) || re(r)));
}
function Ui(r, e) {
  return r != null && Di(r, e, Ni);
}
var Fi = 1, ji = 2;
function zi(r, e) {
  return lr(r) && Ne(e) ? De(G(r), e) : function(t) {
    var n = ca(t, r);
    return n === void 0 && n === e ? Ui(t, r) : gr(e, n, Fi | ji);
  };
}
function Gi(r) {
  return function(e) {
    return e == null ? void 0 : e[r];
  };
}
function Hi(r) {
  return function(e) {
    return pr(e, r);
  };
}
function Bi(r) {
  return lr(r) ? Gi(G(r)) : Hi(r);
}
function Ue(r) {
  return typeof r == "function" ? r : r == null ? nt : typeof r == "object" ? g(r) ? zi(r[0], r[1]) : Mi(r) : Bi(r);
}
function Ki(r) {
  return r == null;
}
var Zi = he("toLowerCase");
const Wi = Zi;
var Ji = "Expected a function";
function Xi(r) {
  if (typeof r != "function")
    throw new TypeError(Ji);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !r.call(this);
      case 1:
        return !r.call(this, e[0]);
      case 2:
        return !r.call(this, e[0], e[1]);
      case 3:
        return !r.call(this, e[0], e[1], e[2]);
    }
    return !r.apply(this, e);
  };
}
function Yi(r, e, t, n) {
  if (!S(r))
    return r;
  e = X(e, r);
  for (var a = -1, u = e.length, i = u - 1, s = r; s != null && ++a < u; ) {
    var f = G(e[a]), o = t;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return r;
    if (a != i) {
      var d = s[f];
      o = n ? n(d, f, s) : void 0, o === void 0 && (o = S(d) ? d : or(e[a + 1]) ? [] : {});
    }
    Ct(s, f, o), s = s[f];
  }
  return r;
}
function qi(r, e, t) {
  for (var n = -1, a = e.length, u = {}; ++n < a; ) {
    var i = e[n], s = pr(r, i);
    t(s, i) && Yi(u, X(i, r), s);
  }
  return u;
}
function Qi(r, e) {
  if (r == null)
    return {};
  var t = Xr(Bu(r), function(n) {
    return [n];
  });
  return e = Ue(e), qi(r, t, function(n, a) {
    return e(n, a[0]);
  });
}
function Vi(r, e) {
  return Qi(r, Xi(Ue(e)));
}
var ki = Ee(function(r, e, t) {
  return r + (t ? "_" : "") + e.toLowerCase();
});
const Zr = ki;
function rs(r) {
  return L(r).toLowerCase();
}
function es(r) {
  return L(r).toUpperCase();
}
let b = {
  style: "snakeCase",
  useUpper: !0,
  separator: "_",
  labelFieldName: ["LABEL", "DESC"],
  optionLabelFieldName: "label",
  optionValueFieldName: "value"
};
class Fe {
  constructor(e) {
    P(this, "handlers", []);
    P(this, "immutableList", []);
    P(this, "keys", []);
    P(this, "values", []);
    P(this, "labels", []);
    !e || !g(e) || e.filter((t) => S(t) || g(t)).forEach((t) => {
      if (g(t)) {
        const [n, a, u, i] = t;
        this.setItem(n, a, u, i);
      } else {
        const { key: n, value: a, label: u, extData: i } = t;
        this.setItem(n, a, u, i);
      }
    });
  }
  get separator() {
    return b == null ? void 0 : b.separator;
  }
  get labelFieldNames() {
    const e = g(b.labelFieldName) ? b.labelFieldName : [b.labelFieldName];
    return e != null && e.length ? e : ["LABEL"];
  }
  get OPTIONS() {
    const { optionLabelFieldName: e, optionValueFieldName: t } = b;
    return this.immutableList.map((n) => (n[e] = n.label, n[t] = n.value, this.handlers.reduce((a, [u, i]) => u(a, ...i), n)));
  }
  get options() {
    return this.OPTIONS;
  }
  genKey(e) {
    const { useUpper: t, style: n } = b;
    return n === "snakeCase" ? t ? es(Zr(e)) : rs(Zr(e)) : n === "camelCase" ? t ? ye(Rr(e)) : Wi(Rr(e)) : e;
  }
  setItem(e, t, n, a) {
    return e == null || this.keys.includes(e) ? this : (this[this.genKey(e)] = t, this[t] = n, this.labelFieldNames.forEach((u) => {
      const i = `${e}${this.separator}${u}`;
      this[this.genKey(i)] = n;
    }), this.mountExtData(e, t, a), this.keys.push(e), this.values.push(t), this.labels.push(n), this.immutableList.push({ key: e, value: t, label: n, extData: a }), this);
  }
  mountExtData(e, t, n) {
    var i;
    if (!n || !((i = Object.entries(n)) != null && i.length))
      return;
    Object.entries(n).forEach(([s, f]) => {
      const o = `${e}${this.separator}${s}`;
      this[this.genKey(o)] = f;
      const d = `${t}${this.separator}${s}`;
      this[this.genKey(d)] = f;
    });
    const a = `${e}${this.separator}EXTDATA`, u = `${t}${this.separator}EXTDATA`;
    this[this.genKey(a)] = n, this[this.genKey(u)] = n;
  }
  addHandler(e, ...t) {
    const n = this.handlers.map(([a]) => a) || [];
    return !e || typeof e != "function" || n.includes(e) ? this : (this.handlers.push([e, t]), this);
  }
  filterHandler(e) {
    return this.filterHandlers = g(e) ? e : [e], this;
  }
  getOptions() {
    return this.immutableList.map((t) => this.handlers.reduce((n, [a, u]) => a(n, ...u), t));
  }
}
P(Fe, "defineConfig");
Fe.defineConfig = (r = b) => {
  b = q(q({}, b), Vi(r, Ki));
};
export {
  Fe as default
};
