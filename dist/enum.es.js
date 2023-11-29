var or = Object.defineProperty;
var gt = Object.getOwnPropertySymbols;
var ur = Object.prototype.hasOwnProperty, fr = Object.prototype.propertyIsEnumerable;
var W = (t, r, e) => r in t ? or(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e, Y = (t, r) => {
  for (var e in r || (r = {}))
    ur.call(r, e) && W(t, e, r[e]);
  if (gt)
    for (var e of gt(r))
      fr.call(r, e) && W(t, e, r[e]);
  return t;
};
var S = (t, r, e) => (W(t, typeof r != "symbol" ? r + "" : r, e), e);
var lr = typeof global == "object" && global && global.Object === Object && global;
const Dt = lr;
var cr = typeof self == "object" && self && self.Object === Object && self, pr = Dt || cr || Function("return this")();
const $ = pr;
var gr = $.Symbol;
const m = gr;
var jt = Object.prototype, hr = jt.hasOwnProperty, dr = jt.toString, F = m ? m.toStringTag : void 0;
function yr(t) {
  var r = hr.call(t, F), e = t[F];
  try {
    t[F] = void 0;
    var n = !0;
  } catch (i) {
  }
  var a = dr.call(t);
  return n && (r ? t[F] = e : delete t[F]), a;
}
var _r = Object.prototype, vr = _r.toString;
function br(t) {
  return vr.call(t);
}
var $r = "[object Null]", Tr = "[object Undefined]", ht = m ? m.toStringTag : void 0;
function N(t) {
  return t == null ? t === void 0 ? Tr : $r : ht && ht in Object(t) ? yr(t) : br(t);
}
function R(t) {
  return t != null && typeof t == "object";
}
var Ar = "[object Symbol]";
function nt(t) {
  return typeof t == "symbol" || R(t) && N(t) == Ar;
}
function Gt(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length, a = Array(n); ++e < n; )
    a[e] = r(t[e], e, t);
  return a;
}
var Or = Array.isArray;
const h = Or;
var mr = 1 / 0, dt = m ? m.prototype : void 0, yt = dt ? dt.toString : void 0;
function Ut(t) {
  if (typeof t == "string")
    return t;
  if (h(t))
    return Gt(t, Ut) + "";
  if (nt(t))
    return yt ? yt.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -mr ? "-0" : r;
}
function I(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function Pr(t) {
  return t;
}
var wr = "[object AsyncFunction]", Sr = "[object Function]", Er = "[object GeneratorFunction]", Ir = "[object Proxy]";
function Bt(t) {
  if (!I(t))
    return !1;
  var r = N(t);
  return r == Sr || r == Er || r == wr || r == Ir;
}
var xr = $["__core-js_shared__"];
const Z = xr;
var _t = function() {
  var t = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Cr(t) {
  return !!_t && _t in t;
}
var Lr = Function.prototype, Rr = Lr.toString;
function C(t) {
  if (t != null) {
    try {
      return Rr.call(t);
    } catch (r) {
    }
    try {
      return t + "";
    } catch (r) {
    }
  }
  return "";
}
var Nr = /[\\^$.*+?()[\]{}|]/g, Fr = /^\[object .+?Constructor\]$/, Mr = Function.prototype, Dr = Object.prototype, jr = Mr.toString, Gr = Dr.hasOwnProperty, Ur = RegExp(
  "^" + jr.call(Gr).replace(Nr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Br(t) {
  if (!I(t) || Cr(t))
    return !1;
  var r = Bt(t) ? Ur : Fr;
  return r.test(C(t));
}
function Kr(t, r) {
  return t == null ? void 0 : t[r];
}
function L(t, r) {
  var e = Kr(t, r);
  return Br(e) ? e : void 0;
}
var Hr = L($, "WeakMap");
const V = Hr;
var zr = function() {
  try {
    var t = L(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch (r) {
  }
}();
const vt = zr;
var Xr = 9007199254740991, qr = /^(?:0|[1-9]\d*)$/;
function at(t, r) {
  var e = typeof t;
  return r = r == null ? Xr : r, !!r && (e == "number" || e != "symbol" && qr.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function Wr(t, r, e) {
  r == "__proto__" && vt ? vt(t, r, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[r] = e;
}
function it(t, r) {
  return t === r || t !== t && r !== r;
}
var Yr = Object.prototype, Zr = Yr.hasOwnProperty;
function Jr(t, r, e) {
  var n = t[r];
  (!(Zr.call(t, r) && it(n, e)) || e === void 0 && !(r in t)) && Wr(t, r, e);
}
var Qr = 9007199254740991;
function st(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Qr;
}
function Kt(t) {
  return t != null && st(t.length) && !Bt(t);
}
var Vr = Object.prototype;
function Ht(t) {
  var r = t && t.constructor, e = typeof r == "function" && r.prototype || Vr;
  return t === e;
}
function kr(t, r) {
  for (var e = -1, n = Array(t); ++e < t; )
    n[e] = r(e);
  return n;
}
var te = "[object Arguments]";
function bt(t) {
  return R(t) && N(t) == te;
}
var zt = Object.prototype, re = zt.hasOwnProperty, ee = zt.propertyIsEnumerable, ne = bt(function() {
  return arguments;
}()) ? bt : function(t) {
  return R(t) && re.call(t, "callee") && !ee.call(t, "callee");
};
const Xt = ne;
function ae() {
  return !1;
}
var qt = typeof exports == "object" && exports && !exports.nodeType && exports, $t = qt && typeof module == "object" && module && !module.nodeType && module, ie = $t && $t.exports === qt, Tt = ie ? $.Buffer : void 0, se = Tt ? Tt.isBuffer : void 0, oe = se || ae;
const k = oe;
var ue = "[object Arguments]", fe = "[object Array]", le = "[object Boolean]", ce = "[object Date]", pe = "[object Error]", ge = "[object Function]", he = "[object Map]", de = "[object Number]", ye = "[object Object]", _e = "[object RegExp]", ve = "[object Set]", be = "[object String]", $e = "[object WeakMap]", Te = "[object ArrayBuffer]", Ae = "[object DataView]", Oe = "[object Float32Array]", me = "[object Float64Array]", Pe = "[object Int8Array]", we = "[object Int16Array]", Se = "[object Int32Array]", Ee = "[object Uint8Array]", Ie = "[object Uint8ClampedArray]", xe = "[object Uint16Array]", Ce = "[object Uint32Array]", l = {};
l[Oe] = l[me] = l[Pe] = l[we] = l[Se] = l[Ee] = l[Ie] = l[xe] = l[Ce] = !0;
l[ue] = l[fe] = l[Te] = l[le] = l[Ae] = l[ce] = l[pe] = l[ge] = l[he] = l[de] = l[ye] = l[_e] = l[ve] = l[be] = l[$e] = !1;
function Le(t) {
  return R(t) && st(t.length) && !!l[N(t)];
}
function Re(t) {
  return function(r) {
    return t(r);
  };
}
var Wt = typeof exports == "object" && exports && !exports.nodeType && exports, M = Wt && typeof module == "object" && module && !module.nodeType && module, Ne = M && M.exports === Wt, J = Ne && Dt.process, Fe = function() {
  try {
    var t = M && M.require && M.require("util").types;
    return t || J && J.binding && J.binding("util");
  } catch (r) {
  }
}();
const At = Fe;
var Ot = At && At.isTypedArray, Me = Ot ? Re(Ot) : Le;
const Yt = Me;
var De = Object.prototype, je = De.hasOwnProperty;
function Zt(t, r) {
  var e = h(t), n = !e && Xt(t), a = !e && !n && k(t), i = !e && !n && !a && Yt(t), s = e || n || a || i, o = s ? kr(t.length, String) : [], f = o.length;
  for (var u in t)
    (r || je.call(t, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    at(u, f))) && o.push(u);
  return o;
}
function Jt(t, r) {
  return function(e) {
    return t(r(e));
  };
}
var Ge = Jt(Object.keys, Object);
const Ue = Ge;
var Be = Object.prototype, Ke = Be.hasOwnProperty;
function He(t) {
  if (!Ht(t))
    return Ue(t);
  var r = [];
  for (var e in Object(t))
    Ke.call(t, e) && e != "constructor" && r.push(e);
  return r;
}
function Qt(t) {
  return Kt(t) ? Zt(t) : He(t);
}
function ze(t) {
  var r = [];
  if (t != null)
    for (var e in Object(t))
      r.push(e);
  return r;
}
var Xe = Object.prototype, qe = Xe.hasOwnProperty;
function We(t) {
  if (!I(t))
    return ze(t);
  var r = Ht(t), e = [];
  for (var n in t)
    n == "constructor" && (r || !qe.call(t, n)) || e.push(n);
  return e;
}
function Ye(t) {
  return Kt(t) ? Zt(t, !0) : We(t);
}
var Ze = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Je = /^\w*$/;
function ot(t, r) {
  if (h(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || nt(t) ? !0 : Je.test(t) || !Ze.test(t) || r != null && t in Object(r);
}
var Qe = L(Object, "create");
const D = Qe;
function Ve() {
  this.__data__ = D ? D(null) : {}, this.size = 0;
}
function ke(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var tn = "__lodash_hash_undefined__", rn = Object.prototype, en = rn.hasOwnProperty;
function nn(t) {
  var r = this.__data__;
  if (D) {
    var e = r[t];
    return e === tn ? void 0 : e;
  }
  return en.call(r, t) ? r[t] : void 0;
}
var an = Object.prototype, sn = an.hasOwnProperty;
function on(t) {
  var r = this.__data__;
  return D ? r[t] !== void 0 : sn.call(r, t);
}
var un = "__lodash_hash_undefined__";
function fn(t, r) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = D && r === void 0 ? un : r, this;
}
function x(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
x.prototype.clear = Ve;
x.prototype.delete = ke;
x.prototype.get = nn;
x.prototype.has = on;
x.prototype.set = fn;
function ln() {
  this.__data__ = [], this.size = 0;
}
function z(t, r) {
  for (var e = t.length; e--; )
    if (it(t[e][0], r))
      return e;
  return -1;
}
var cn = Array.prototype, pn = cn.splice;
function gn(t) {
  var r = this.__data__, e = z(r, t);
  if (e < 0)
    return !1;
  var n = r.length - 1;
  return e == n ? r.pop() : pn.call(r, e, 1), --this.size, !0;
}
function hn(t) {
  var r = this.__data__, e = z(r, t);
  return e < 0 ? void 0 : r[e][1];
}
function dn(t) {
  return z(this.__data__, t) > -1;
}
function yn(t, r) {
  var e = this.__data__, n = z(e, t);
  return n < 0 ? (++this.size, e.push([t, r])) : e[n][1] = r, this;
}
function T(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = ln;
T.prototype.delete = gn;
T.prototype.get = hn;
T.prototype.has = dn;
T.prototype.set = yn;
var _n = L($, "Map");
const j = _n;
function vn() {
  this.size = 0, this.__data__ = {
    hash: new x(),
    map: new (j || T)(),
    string: new x()
  };
}
function bn(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function X(t, r) {
  var e = t.__data__;
  return bn(r) ? e[typeof r == "string" ? "string" : "hash"] : e.map;
}
function $n(t) {
  var r = X(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function Tn(t) {
  return X(this, t).get(t);
}
function An(t) {
  return X(this, t).has(t);
}
function On(t, r) {
  var e = X(this, t), n = e.size;
  return e.set(t, r), this.size += e.size == n ? 0 : 1, this;
}
function A(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++r < e; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
A.prototype.clear = vn;
A.prototype.delete = $n;
A.prototype.get = Tn;
A.prototype.has = An;
A.prototype.set = On;
var mn = "Expected a function";
function ut(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(mn);
  var e = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], i = e.cache;
    if (i.has(a))
      return i.get(a);
    var s = t.apply(this, n);
    return e.cache = i.set(a, s) || i, s;
  };
  return e.cache = new (ut.Cache || A)(), e;
}
ut.Cache = A;
var Pn = 500;
function wn(t) {
  var r = ut(t, function(n) {
    return e.size === Pn && e.clear(), n;
  }), e = r.cache;
  return r;
}
var Sn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, En = /\\(\\)?/g, In = wn(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(Sn, function(e, n, a, i) {
    r.push(a ? i.replace(En, "$1") : n || e);
  }), r;
});
const xn = In;
function ft(t) {
  return t == null ? "" : Ut(t);
}
function q(t, r) {
  return h(t) ? t : ot(t, r) ? [t] : xn(ft(t));
}
var Cn = 1 / 0;
function G(t) {
  if (typeof t == "string" || nt(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -Cn ? "-0" : r;
}
function lt(t, r) {
  r = q(r, t);
  for (var e = 0, n = r.length; t != null && e < n; )
    t = t[G(r[e++])];
  return e && e == n ? t : void 0;
}
function Ln(t, r, e) {
  var n = t == null ? void 0 : lt(t, r);
  return n === void 0 ? e : n;
}
function Vt(t, r) {
  for (var e = -1, n = r.length, a = t.length; ++e < n; )
    t[a + e] = r[e];
  return t;
}
var Rn = Jt(Object.getPrototypeOf, Object);
const Nn = Rn;
function Fn() {
  this.__data__ = new T(), this.size = 0;
}
function Mn(t) {
  var r = this.__data__, e = r.delete(t);
  return this.size = r.size, e;
}
function Dn(t) {
  return this.__data__.get(t);
}
function jn(t) {
  return this.__data__.has(t);
}
var Gn = 200;
function Un(t, r) {
  var e = this.__data__;
  if (e instanceof T) {
    var n = e.__data__;
    if (!j || n.length < Gn - 1)
      return n.push([t, r]), this.size = ++e.size, this;
    e = this.__data__ = new A(n);
  }
  return e.set(t, r), this.size = e.size, this;
}
function b(t) {
  var r = this.__data__ = new T(t);
  this.size = r.size;
}
b.prototype.clear = Fn;
b.prototype.delete = Mn;
b.prototype.get = Dn;
b.prototype.has = jn;
b.prototype.set = Un;
function Bn(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length, a = 0, i = []; ++e < n; ) {
    var s = t[e];
    r(s, e, t) && (i[a++] = s);
  }
  return i;
}
function kt() {
  return [];
}
var Kn = Object.prototype, Hn = Kn.propertyIsEnumerable, mt = Object.getOwnPropertySymbols, zn = mt ? function(t) {
  return t == null ? [] : (t = Object(t), Bn(mt(t), function(r) {
    return Hn.call(t, r);
  }));
} : kt;
const tr = zn;
var Xn = Object.getOwnPropertySymbols, qn = Xn ? function(t) {
  for (var r = []; t; )
    Vt(r, tr(t)), t = Nn(t);
  return r;
} : kt;
const Wn = qn;
function rr(t, r, e) {
  var n = r(t);
  return h(t) ? n : Vt(n, e(t));
}
function Pt(t) {
  return rr(t, Qt, tr);
}
function Yn(t) {
  return rr(t, Ye, Wn);
}
var Zn = L($, "DataView");
const tt = Zn;
var Jn = L($, "Promise");
const rt = Jn;
var Qn = L($, "Set");
const et = Qn;
var wt = "[object Map]", Vn = "[object Object]", St = "[object Promise]", Et = "[object Set]", It = "[object WeakMap]", xt = "[object DataView]", kn = C(tt), ta = C(j), ra = C(rt), ea = C(et), na = C(V), E = N;
(tt && E(new tt(new ArrayBuffer(1))) != xt || j && E(new j()) != wt || rt && E(rt.resolve()) != St || et && E(new et()) != Et || V && E(new V()) != It) && (E = function(t) {
  var r = N(t), e = r == Vn ? t.constructor : void 0, n = e ? C(e) : "";
  if (n)
    switch (n) {
      case kn:
        return xt;
      case ta:
        return wt;
      case ra:
        return St;
      case ea:
        return Et;
      case na:
        return It;
    }
  return r;
});
const Ct = E;
var aa = $.Uint8Array;
const Lt = aa;
var ia = "__lodash_hash_undefined__";
function sa(t) {
  return this.__data__.set(t, ia), this;
}
function oa(t) {
  return this.__data__.has(t);
}
function H(t) {
  var r = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new A(); ++r < e; )
    this.add(t[r]);
}
H.prototype.add = H.prototype.push = sa;
H.prototype.has = oa;
function ua(t, r) {
  for (var e = -1, n = t == null ? 0 : t.length; ++e < n; )
    if (r(t[e], e, t))
      return !0;
  return !1;
}
function fa(t, r) {
  return t.has(r);
}
var la = 1, ca = 2;
function er(t, r, e, n, a, i) {
  var s = e & la, o = t.length, f = r.length;
  if (o != f && !(s && f > o))
    return !1;
  var u = i.get(t), p = i.get(r);
  if (u && p)
    return u == r && p == t;
  var g = -1, c = !0, v = e & ca ? new H() : void 0;
  for (i.set(t, r), i.set(r, t); ++g < o; ) {
    var d = t[g], y = r[g];
    if (n)
      var O = s ? n(y, d, g, r, t, i) : n(d, y, g, t, r, i);
    if (O !== void 0) {
      if (O)
        continue;
      c = !1;
      break;
    }
    if (v) {
      if (!ua(r, function(P, w) {
        if (!fa(v, w) && (d === P || a(d, P, e, n, i)))
          return v.push(w);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === y || a(d, y, e, n, i))) {
      c = !1;
      break;
    }
  }
  return i.delete(t), i.delete(r), c;
}
function pa(t) {
  var r = -1, e = Array(t.size);
  return t.forEach(function(n, a) {
    e[++r] = [a, n];
  }), e;
}
function ga(t) {
  var r = -1, e = Array(t.size);
  return t.forEach(function(n) {
    e[++r] = n;
  }), e;
}
var ha = 1, da = 2, ya = "[object Boolean]", _a = "[object Date]", va = "[object Error]", ba = "[object Map]", $a = "[object Number]", Ta = "[object RegExp]", Aa = "[object Set]", Oa = "[object String]", ma = "[object Symbol]", Pa = "[object ArrayBuffer]", wa = "[object DataView]", Rt = m ? m.prototype : void 0, Q = Rt ? Rt.valueOf : void 0;
function Sa(t, r, e, n, a, i, s) {
  switch (e) {
    case wa:
      if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
        return !1;
      t = t.buffer, r = r.buffer;
    case Pa:
      return !(t.byteLength != r.byteLength || !i(new Lt(t), new Lt(r)));
    case ya:
    case _a:
    case $a:
      return it(+t, +r);
    case va:
      return t.name == r.name && t.message == r.message;
    case Ta:
    case Oa:
      return t == r + "";
    case ba:
      var o = pa;
    case Aa:
      var f = n & ha;
      if (o || (o = ga), t.size != r.size && !f)
        return !1;
      var u = s.get(t);
      if (u)
        return u == r;
      n |= da, s.set(t, r);
      var p = er(o(t), o(r), n, a, i, s);
      return s.delete(t), p;
    case ma:
      if (Q)
        return Q.call(t) == Q.call(r);
  }
  return !1;
}
var Ea = 1, Ia = Object.prototype, xa = Ia.hasOwnProperty;
function Ca(t, r, e, n, a, i) {
  var s = e & Ea, o = Pt(t), f = o.length, u = Pt(r), p = u.length;
  if (f != p && !s)
    return !1;
  for (var g = f; g--; ) {
    var c = o[g];
    if (!(s ? c in r : xa.call(r, c)))
      return !1;
  }
  var v = i.get(t), d = i.get(r);
  if (v && d)
    return v == r && d == t;
  var y = !0;
  i.set(t, r), i.set(r, t);
  for (var O = s; ++g < f; ) {
    c = o[g];
    var P = t[c], w = r[c];
    if (n)
      var pt = s ? n(w, P, c, r, t, i) : n(P, w, c, t, r, i);
    if (!(pt === void 0 ? P === w || a(P, w, e, n, i) : pt)) {
      y = !1;
      break;
    }
    O || (O = c == "constructor");
  }
  if (y && !O) {
    var U = t.constructor, B = r.constructor;
    U != B && "constructor" in t && "constructor" in r && !(typeof U == "function" && U instanceof U && typeof B == "function" && B instanceof B) && (y = !1);
  }
  return i.delete(t), i.delete(r), y;
}
var La = 1, Nt = "[object Arguments]", Ft = "[object Array]", K = "[object Object]", Ra = Object.prototype, Mt = Ra.hasOwnProperty;
function Na(t, r, e, n, a, i) {
  var s = h(t), o = h(r), f = s ? Ft : Ct(t), u = o ? Ft : Ct(r);
  f = f == Nt ? K : f, u = u == Nt ? K : u;
  var p = f == K, g = u == K, c = f == u;
  if (c && k(t)) {
    if (!k(r))
      return !1;
    s = !0, p = !1;
  }
  if (c && !p)
    return i || (i = new b()), s || Yt(t) ? er(t, r, e, n, a, i) : Sa(t, r, f, e, n, a, i);
  if (!(e & La)) {
    var v = p && Mt.call(t, "__wrapped__"), d = g && Mt.call(r, "__wrapped__");
    if (v || d) {
      var y = v ? t.value() : t, O = d ? r.value() : r;
      return i || (i = new b()), a(y, O, e, n, i);
    }
  }
  return c ? (i || (i = new b()), Ca(t, r, e, n, a, i)) : !1;
}
function ct(t, r, e, n, a) {
  return t === r ? !0 : t == null || r == null || !R(t) && !R(r) ? t !== t && r !== r : Na(t, r, e, n, ct, a);
}
var Fa = 1, Ma = 2;
function Da(t, r, e, n) {
  var a = e.length, i = a, s = !n;
  if (t == null)
    return !i;
  for (t = Object(t); a--; ) {
    var o = e[a];
    if (s && o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++a < i; ) {
    o = e[a];
    var f = o[0], u = t[f], p = o[1];
    if (s && o[2]) {
      if (u === void 0 && !(f in t))
        return !1;
    } else {
      var g = new b();
      if (n)
        var c = n(u, p, f, t, r, g);
      if (!(c === void 0 ? ct(p, u, Fa | Ma, n, g) : c))
        return !1;
    }
  }
  return !0;
}
function nr(t) {
  return t === t && !I(t);
}
function ja(t) {
  for (var r = Qt(t), e = r.length; e--; ) {
    var n = r[e], a = t[n];
    r[e] = [n, a, nr(a)];
  }
  return r;
}
function ar(t, r) {
  return function(e) {
    return e == null ? !1 : e[t] === r && (r !== void 0 || t in Object(e));
  };
}
function Ga(t) {
  var r = ja(t);
  return r.length == 1 && r[0][2] ? ar(r[0][0], r[0][1]) : function(e) {
    return e === t || Da(e, t, r);
  };
}
function Ua(t, r) {
  return t != null && r in Object(t);
}
function Ba(t, r, e) {
  r = q(r, t);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var s = G(r[n]);
    if (!(i = t != null && e(t, s)))
      break;
    t = t[s];
  }
  return i || ++n != a ? i : (a = t == null ? 0 : t.length, !!a && st(a) && at(s, a) && (h(t) || Xt(t)));
}
function Ka(t, r) {
  return t != null && Ba(t, r, Ua);
}
var Ha = 1, za = 2;
function Xa(t, r) {
  return ot(t) && nr(r) ? ar(G(t), r) : function(e) {
    var n = Ln(e, t);
    return n === void 0 && n === r ? Ka(e, t) : ct(r, n, Ha | za);
  };
}
function qa(t) {
  return function(r) {
    return r == null ? void 0 : r[t];
  };
}
function Wa(t) {
  return function(r) {
    return lt(r, t);
  };
}
function Ya(t) {
  return ot(t) ? qa(G(t)) : Wa(t);
}
function ir(t) {
  return typeof t == "function" ? t : t == null ? Pr : typeof t == "object" ? h(t) ? Xa(t[0], t[1]) : Ga(t) : Ya(t);
}
function Za(t) {
  return t == null;
}
var Ja = "Expected a function";
function Qa(t) {
  if (typeof t != "function")
    throw new TypeError(Ja);
  return function() {
    var r = arguments;
    switch (r.length) {
      case 0:
        return !t.call(this);
      case 1:
        return !t.call(this, r[0]);
      case 2:
        return !t.call(this, r[0], r[1]);
      case 3:
        return !t.call(this, r[0], r[1], r[2]);
    }
    return !t.apply(this, r);
  };
}
function Va(t, r, e, n) {
  if (!I(t))
    return t;
  r = q(r, t);
  for (var a = -1, i = r.length, s = i - 1, o = t; o != null && ++a < i; ) {
    var f = G(r[a]), u = e;
    if (f === "__proto__" || f === "constructor" || f === "prototype")
      return t;
    if (a != s) {
      var p = o[f];
      u = n ? n(p, f, o) : void 0, u === void 0 && (u = I(p) ? p : at(r[a + 1]) ? [] : {});
    }
    Jr(o, f, u), o = o[f];
  }
  return t;
}
function ka(t, r, e) {
  for (var n = -1, a = r.length, i = {}; ++n < a; ) {
    var s = r[n], o = lt(t, s);
    e(o, s) && Va(i, q(s, t), o);
  }
  return i;
}
function ti(t, r) {
  if (t == null)
    return {};
  var e = Gt(Yn(t), function(n) {
    return [n];
  });
  return r = ir(r), ka(t, e, function(n, a) {
    return r(n, a[0]);
  });
}
function ri(t, r) {
  return ti(t, Qa(ir(r)));
}
function ei(t) {
  return ft(t).toLowerCase();
}
function ni(t) {
  return ft(t).toUpperCase();
}
let _ = {
  useUpper: !0,
  separator: "_",
  labelFieldName: ["LABEL", "DESC"],
  optionLabelFieldName: "label",
  optionValueFieldName: "value"
};
class sr {
  constructor(r) {
    S(this, "handlers", []);
    S(this, "immutableList", []);
    S(this, "keys", []);
    S(this, "values", []);
    S(this, "labels", []);
    !r || !h(r) || r.filter((e) => I(e) || h(e)).forEach((e) => {
      if (h(e)) {
        const [n, a, i, s] = e;
        this.setItem(n, a, i, s);
      } else {
        const { key: n, value: a, label: i, extData: s } = e;
        this.setItem(n, a, i, s);
      }
    });
  }
  get separator() {
    return _ == null ? void 0 : _.separator;
  }
  get labelFieldNames() {
    const r = h(_.labelFieldName) ? _.labelFieldName : [_.labelFieldName];
    return r != null && r.length ? r : ["LABEL"];
  }
  get OPTIONS() {
    const { optionLabelFieldName: r, optionValueFieldName: e } = _;
    return this.immutableList.map((n) => (n[r] = n.label, n[e] = n.value, this.handlers.reduce((a, [i, s]) => i(a, ...s), n)));
  }
  genKey(r) {
    const { useUpper: e } = _;
    return e ? ni(r) : ei(r);
  }
  setItem(r, e, n, a) {
    return r == null || this.keys.includes(r) ? this : (this[this.genKey(r)] = e, this[e] = n, this.labelFieldNames.forEach((i) => {
      const s = `${r}${this.separator}${i}`;
      this[this.genKey(s)] = n;
    }), this.mountExtData(r, e, a), this.keys.push(r), this.values.push(e), this.labels.push(n), this.immutableList.push({ key: r, value: e, label: n, extData: a }), this);
  }
  mountExtData(r, e, n) {
    var s;
    if (!n || !((s = Object.entries(n)) != null && s.length))
      return;
    Object.entries(n).forEach(([o, f]) => {
      const u = `${r}${this.separator}${o}`;
      this[this.genKey(u)] = f;
      const p = `${e}${this.separator}${o}`;
      this[this.genKey(p)] = f;
    });
    const a = `${r}${this.separator}EXTDATA`, i = `${e}${this.separator}EXTDATA`;
    this[this.genKey(a)] = n, this[this.genKey(i)] = n;
  }
  addHandler(r, ...e) {
    const n = this.handlers.map(([a]) => a) || [];
    return !r || typeof r != "function" || n.includes(r) ? this : (this.handlers.push([r, e]), this);
  }
  filterHandler(r) {
    return this.filterHandlers = h(r) ? r : [r], this;
  }
  getOptions() {
    return this.immutableList.map((e) => this.handlers.reduce((n, [a, i]) => a(n, ...i), e));
  }
}
S(sr, "defineConfig");
sr.defineConfig = (t = _) => {
  _ = Y(Y({}, _), ri(t, Za));
};
export {
  sr as default
};
