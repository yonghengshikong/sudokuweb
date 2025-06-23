System.register(['./_virtual_cc-DG8j2e3M.js'], (function (exports) {
  'use strict';
  var _createForOfIteratorHelperLoose;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module._;
    }],
    execute: (function () {

      var spineWasm = exports("default", function () {
        var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
        return function (spineWasm) {
          if (spineWasm === void 0) {
            spineWasm = {};
          }
          var e;
          e || (e = typeof spineWasm !== 'undefined' ? spineWasm : {});
          var ba, ca;
          e.ready = new Promise(function (a, b) {
            ba = a;
            ca = b;
          });
          var da = Object.assign({}, e),
            r = "";
          "undefined" != typeof document && document.currentScript && (r = document.currentScript.src);
          _scriptDir && (r = _scriptDir);
          0 !== r.indexOf("blob:") ? r = r.substr(0, r.replace(/[?#].*/, "").lastIndexOf("/") + 1) : r = "";
          var w = e.printErr || console.error.bind(console);
          Object.assign(e, da);
          da = null;
          var y;
          e.wasmBinary && (y = e.wasmBinary);
          e.noExitRuntime || !0;
          "object" != typeof WebAssembly && z("no native wasm support detected");
          var ea,
            fa = !1,
            ha,
            A,
            ia,
            ja,
            ka,
            B,
            la,
            ma;
          function na() {
            var a = ea.buffer;
            e.HEAP8 = ha = new Int8Array(a);
            e.HEAP16 = ia = new Int16Array(a);
            e.HEAP32 = ka = new Int32Array(a);
            e.HEAPU8 = A = new Uint8Array(a);
            e.HEAPU16 = ja = new Uint16Array(a);
            e.HEAPU32 = B = new Uint32Array(a);
            e.HEAPF32 = la = new Float32Array(a);
            e.HEAPF64 = ma = new Float64Array(a);
          }
          var oa,
            pa = [],
            qa = [],
            ra = [];
          function sa() {
            var a = e.preRun.shift();
            pa.unshift(a);
          }
          var C = 0,
            D = null;
          function z(a) {
            if (e.onAbort) e.onAbort(a);
            a = "Aborted(" + a + ")";
            w(a);
            fa = !0;
            a = new WebAssembly.RuntimeError(a + ". Build with -sASSERTIONS for more info.");
            ca(a);
            throw a;
          }
          function ua(a) {
            return a.startsWith("data:application/octet-stream;base64,");
          }
          var F;
          F = "spine.wasm";
          if (!ua(F)) {
            var va = F;
            F = e.locateFile ? e.locateFile(va, r) : r + va;
          }
          function wa(a) {
            try {
              if (a == F && y) return new Uint8Array(y);
              throw "both async and sync fetching of the wasm failed";
            } catch (b) {
              z(b);
            }
          }
          function xa(a) {
            return y || "function" != typeof fetch ? Promise.resolve().then(function () {
              return wa(a);
            }) : fetch(a, {
              credentials: "same-origin"
            }).then(function (b) {
              if (!b.ok) throw "failed to load wasm binary file at '" + a + "'";
              return b.arrayBuffer();
            })["catch"](function () {
              return wa(a);
            });
          }
          function ya(a, b, c) {
            return xa(a).then(function (d) {
              return WebAssembly.instantiate(d, b);
            }).then(function (d) {
              return d;
            }).then(c, function (d) {
              w("failed to asynchronously prepare wasm: " + d);
              z(d);
            });
          }
          function za(a, b) {
            var c = F;
            return y || "function" != typeof WebAssembly.instantiateStreaming || ua(c) || "function" != typeof fetch ? ya(c, a, b) : fetch(c, {
              credentials: "same-origin"
            }).then(function (d) {
              return WebAssembly.instantiateStreaming(d, a).then(b, function (g) {
                w("wasm streaming compile failed: " + g);
                w("falling back to ArrayBuffer instantiation");
                return ya(c, a, b);
              });
            });
          }
          function Aa(a) {
            for (; 0 < a.length;) a.shift()(e);
          }
          function Ba(a) {
            switch (a) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError("Unknown type size: " + a);
            }
          }
          var Ca = void 0;
          function G(a) {
            for (var b = ""; A[a];) b += Ca[A[a++]];
            return b;
          }
          var H = {},
            I = {},
            Da = {};
          function Ea(a) {
            if (void 0 === a) return "_unknown";
            a = a.replace(/[^a-zA-Z0-9_]/g, "$");
            var b = a.charCodeAt(0);
            return 48 <= b && 57 >= b ? "_" + a : a;
          }
          function Fa(a, b) {
            var _a$a;
            a = Ea(a);
            return (_a$a = {}, _a$a[a] = function () {
              return b.apply(this, arguments);
            }, _a$a)[a];
          }
          function Ga(a) {
            var b = Error,
              c = Fa(a, function (d) {
                this.name = a;
                this.message = d;
                d = Error(d).stack;
                void 0 !== d && (this.stack = this.toString() + "\n" + d.replace(/^Error(:[^\n]*)?\n/, ""));
              });
            c.prototype = Object.create(b.prototype);
            c.prototype.constructor = c;
            c.prototype.toString = function () {
              return void 0 === this.message ? this.name : this.name + ": " + this.message;
            };
            return c;
          }
          var J = void 0;
          function L(a) {
            throw new J(a);
          }
          var Ha = void 0;
          function Ia(a) {
            throw new Ha(a);
          }
          function M(a, b, c) {
            function d(f) {
              f = c(f);
              f.length !== a.length && Ia("Mismatched type converter count");
              for (var l = 0; l < a.length; ++l) N(a[l], f[l]);
            }
            a.forEach(function (f) {
              Da[f] = b;
            });
            var g = Array(b.length),
              k = [],
              h = 0;
            b.forEach(function (f, l) {
              I.hasOwnProperty(f) ? g[l] = I[f] : (k.push(f), H.hasOwnProperty(f) || (H[f] = []), H[f].push(function () {
                g[l] = I[f];
                ++h;
                h === k.length && d(g);
              }));
            });
            0 === k.length && d(g);
          }
          function N(a, b) {
            var c = {};
            if (!("argPackAdvance" in b)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var d = b.name;
            a || L("type \"" + d + "\" must have a positive integer typeid pointer");
            if (I.hasOwnProperty(a)) {
              if (c.qa) return;
              L("Cannot register type '" + d + "' twice");
            }
            I[a] = b;
            delete Da[a];
            H.hasOwnProperty(a) && (b = H[a], delete H[a], b.forEach(function (g) {
              return g();
            }));
          }
          function Ja(a) {
            L(a.F.I.G.name + " instance already deleted");
          }
          var Ka = !1;
          function La() {}
          function Ma(a) {
            --a.count.value;
            0 === a.count.value && (a.L ? a.M.S(a.L) : a.I.G.S(a.H));
          }
          function Na(a, b, c) {
            if (b === c) return a;
            if (void 0 === c.J) return null;
            a = Na(a, b, c.J);
            return null === a ? null : c.ha(a);
          }
          var Oa = {},
            O = [];
          function Pa() {
            for (; O.length;) {
              var a = O.pop();
              a.F.U = !1;
              a["delete"]();
            }
          }
          var P = void 0,
            Q = {};
          function Qa(a, b) {
            for (void 0 === b && L("ptr should not be undefined"); a.J;) b = a.W(b), a = a.J;
            return Q[b];
          }
          function Ra(a, b) {
            b.I && b.H || Ia("makeClassHandle requires ptr and ptrType");
            !!b.M !== !!b.L && Ia("Both smartPtrType and smartPtr must be specified");
            b.count = {
              value: 1
            };
            return R(Object.create(a, {
              F: {
                value: b
              }
            }));
          }
          function R(a) {
            if ("undefined" === typeof FinalizationRegistry) return R = function R(b) {
              return b;
            }, a;
            Ka = new FinalizationRegistry(function (b) {
              Ma(b.F);
            });
            R = function R(b) {
              var c = b.F;
              c.L && Ka.register(b, {
                F: c
              }, b);
              return b;
            };
            La = function La(b) {
              Ka.unregister(b);
            };
            return R(a);
          }
          function S() {}
          function Sa(a, b, c) {
            if (void 0 === a[b].K) {
              var d = a[b];
              a[b] = function () {
                a[b].K.hasOwnProperty(arguments.length) || L("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + a[b].K + ")!");
                return a[b].K[arguments.length].apply(this, arguments);
              };
              a[b].K = [];
              a[b].K[d.T] = d;
            }
          }
          function Ta(a, b) {
            e.hasOwnProperty(a) ? (L("Cannot register public name '" + a + "' twice"), Sa(e, a, a), e.hasOwnProperty(void 0) && L("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), e[a].K[void 0] = b) : e[a] = b;
          }
          function Ua(a, b, c, d, g, k, h, f) {
            this.name = a;
            this.constructor = b;
            this.P = c;
            this.S = d;
            this.J = g;
            this.ia = k;
            this.W = h;
            this.ha = f;
            this.la = [];
          }
          function Va(a, b, c) {
            for (; b !== c;) b.W || L("Expected null or instance of " + c.name + ", got an instance of " + b.name), a = b.W(a), b = b.J;
            return a;
          }
          function Wa(a, b) {
            if (null === b) return this.$ && L("null is not a valid " + this.name), 0;
            b.F || L("Cannot pass \"" + Xa(b) + "\" as a " + this.name);
            b.F.H || L("Cannot pass deleted object as a pointer of type " + this.name);
            return Va(b.F.H, b.F.I.G, this.G);
          }
          function Ya(a, b) {
            if (null === b) {
              this.$ && L("null is not a valid " + this.name);
              if (this.Z) {
                var c = this.ma();
                null !== a && a.push(this.S, c);
                return c;
              }
              return 0;
            }
            b.F || L("Cannot pass \"" + Xa(b) + "\" as a " + this.name);
            b.F.H || L("Cannot pass deleted object as a pointer of type " + this.name);
            !this.Y && b.F.I.Y && L("Cannot convert argument of type " + (b.F.M ? b.F.M.name : b.F.I.name) + " to parameter type " + this.name);
            c = Va(b.F.H, b.F.I.G, this.G);
            if (this.Z) switch (void 0 === b.F.L && L("Passing raw pointer to smart pointer is illegal"), this.pa) {
              case 0:
                b.F.M === this ? c = b.F.L : L("Cannot convert argument of type " + (b.F.M ? b.F.M.name : b.F.I.name) + " to parameter type " + this.name);
                break;
              case 1:
                c = b.F.L;
                break;
              case 2:
                if (b.F.M === this) c = b.F.L;else {
                  var d = b.clone();
                  c = this.na(c, T(function () {
                    d["delete"]();
                  }));
                  null !== a && a.push(this.S, c);
                }
                break;
              default:
                L("Unsupporting sharing policy");
            }
            return c;
          }
          function Za(a, b) {
            if (null === b) return this.$ && L("null is not a valid " + this.name), 0;
            b.F || L("Cannot pass \"" + Xa(b) + "\" as a " + this.name);
            b.F.H || L("Cannot pass deleted object as a pointer of type " + this.name);
            b.F.I.Y && L("Cannot convert argument of type " + b.F.I.name + " to parameter type " + this.name);
            return Va(b.F.H, b.F.I.G, this.G);
          }
          function $a(a) {
            return this.fromWireType(ka[a >> 2]);
          }
          function U(a, b, c, d) {
            this.name = a;
            this.G = b;
            this.$ = c;
            this.Y = d;
            this.Z = !1;
            this.S = this.na = this.ma = this.da = this.pa = this.ka = void 0;
            void 0 !== b.J ? this.toWireType = Ya : (this.toWireType = d ? Wa : Za, this.O = null);
          }
          function ab(a, b) {
            e.hasOwnProperty(a) || Ia("Replacing nonexistant public symbol");
            e[a] = b;
            e[a].T = void 0;
          }
          function bb(a, b) {
            var c = [];
            return function () {
              c.length = 0;
              Object.assign(c, arguments);
              if (a.includes("j")) {
                var d = e["dynCall_" + a];
                d = c && c.length ? d.apply(null, [b].concat(c)) : d.call(null, b);
              } else d = oa.get(b).apply(null, c);
              return d;
            };
          }
          function V(a, b) {
            a = G(a);
            var c = a.includes("j") ? bb(a, b) : oa.get(b);
            "function" != typeof c && L("unknown function pointer with signature " + a + ": " + b);
            return c;
          }
          var cb = void 0;
          function db(a) {
            a = eb(a);
            var b = G(a);
            W(a);
            return b;
          }
          function X(a, b) {
            function c(k) {
              g[k] || I[k] || (Da[k] ? Da[k].forEach(c) : (d.push(k), g[k] = !0));
            }
            var d = [],
              g = {};
            b.forEach(c);
            throw new cb(a + ": " + d.map(db).join([", "]));
          }
          function fb(a) {
            for (; a.length;) {
              var b = a.pop();
              a.pop()(b);
            }
          }
          function hb(a, b, c, d, g) {
            var k = b.length;
            2 > k && L("argTypes array size mismatch! Must at least get return value and 'this' types!");
            var h = null !== b[1] && null !== c,
              f = !1;
            for (c = 1; c < b.length; ++c) if (null !== b[c] && void 0 === b[c].O) {
              f = !0;
              break;
            }
            var l = "void" !== b[0].name,
              n = k - 2,
              m = Array(n),
              q = [],
              p = [];
            return function () {
              arguments.length !== n && L("function " + a + " called with " + arguments.length + " arguments, expected " + n + " args!");
              p.length = 0;
              q.length = h ? 2 : 1;
              q[0] = g;
              if (h) {
                var u = b[1].toWireType(p, this);
                q[1] = u;
              }
              for (var t = 0; t < n; ++t) m[t] = b[t + 2].toWireType(p, arguments[t]), q.push(m[t]);
              t = d.apply(null, q);
              if (f) fb(p);else for (var v = h ? 1 : 2; v < b.length; v++) {
                var E = 1 === v ? u : m[v - 2];
                null !== b[v].O && b[v].O(E);
              }
              u = l ? b[0].fromWireType(t) : void 0;
              return u;
            };
          }
          function ib(a, b) {
            for (var c = [], d = 0; d < a; d++) c.push(B[b + 4 * d >> 2]);
            return c;
          }
          function jb(a, b, c) {
            a instanceof Object || L(c + " with invalid \"this\": " + a);
            a instanceof b.G.constructor || L(c + " incompatible with \"this\" of type " + a.constructor.name);
            a.F.H || L("cannot call emscripten binding method " + c + " on deleted object");
            return Va(a.F.H, a.F.I.G, b.G);
          }
          var Y = new function () {
            this.N = [void 0];
            this.aa = [];
            this.get = function (a) {
              return this.N[a];
            };
            this.has = function (a) {
              return void 0 !== this.N[a];
            };
            this.ea = function (a) {
              var b = this.aa.pop() || this.N.length;
              this.N[b] = a;
              return b;
            };
            this.fa = function (a) {
              this.N[a] = void 0;
              this.aa.push(a);
            };
          }();
          function kb(a) {
            a >= Y.ba && 0 === --Y.get(a).oa && Y.fa(a);
          }
          var Z = function Z(a) {
              a || L("Cannot use deleted val. handle = " + a);
              return Y.get(a).value;
            },
            T = function T(a) {
              switch (a) {
                case void 0:
                  return 1;
                case null:
                  return 2;
                case !0:
                  return 3;
                case !1:
                  return 4;
                default:
                  return Y.ea({
                    oa: 1,
                    value: a
                  });
              }
            };
          function Xa(a) {
            if (null === a) return "null";
            var b = typeof a;
            return "object" === b || "array" === b || "function" === b ? a.toString() : "" + a;
          }
          function lb(a, b) {
            switch (b) {
              case 2:
                return function (c) {
                  return this.fromWireType(la[c >> 2]);
                };
              case 3:
                return function (c) {
                  return this.fromWireType(ma[c >> 3]);
                };
              default:
                throw new TypeError("Unknown float type: " + a);
            }
          }
          function mb(a, b, c) {
            switch (b) {
              case 0:
                return c ? function (d) {
                  return ha[d];
                } : function (d) {
                  return A[d];
                };
              case 1:
                return c ? function (d) {
                  return ia[d >> 1];
                } : function (d) {
                  return ja[d >> 1];
                };
              case 2:
                return c ? function (d) {
                  return ka[d >> 2];
                } : function (d) {
                  return B[d >> 2];
                };
              default:
                throw new TypeError("Unknown integer type: " + a);
            }
          }
          var nb = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
          function ob(a, b) {
            var c = I[a];
            void 0 === c && L(b + " has unknown type " + db(a));
            return c;
          }
          var pb = {};
          function qb() {
            var a = e.SpineWasmUtil,
              b = a.getCurrentListenerID(),
              c = a.getCurrentTrackEntry(),
              d = a.getCurrentEvent();
            a = a.getCurrentEventType();
            globalThis.TrackEntryListeners.emitListener(b, c, d, a);
          }
          e._spineListenerCallBackFromJS = qb;
          function rb() {
            var a = e.SpineWasmUtil,
              b = a.getCurrentListenerID(),
              c = a.getCurrentEventType(),
              d = a.getCurrentTrackEntry();
            a = a.getCurrentEvent();
            globalThis.TrackEntryListeners.emitTrackEntryListener(b, d, a, c);
          }
          e._spineTrackListenerCallback = rb;
          for (var sb = Array(256), tb = 0; 256 > tb; ++tb) sb[tb] = String.fromCharCode(tb);
          Ca = sb;
          J = e.BindingError = Ga("BindingError");
          Ha = e.InternalError = Ga("InternalError");
          S.prototype.isAliasOf = function (a) {
            if (!(this instanceof S && a instanceof S)) return !1;
            var b = this.F.I.G,
              c = this.F.H,
              d = a.F.I.G;
            for (a = a.F.H; b.J;) c = b.W(c), b = b.J;
            for (; d.J;) a = d.W(a), d = d.J;
            return b === d && c === a;
          };
          S.prototype.clone = function () {
            this.F.H || Ja(this);
            if (this.F.V) return this.F.count.value += 1, this;
            var a = R,
              b = Object,
              c = b.create,
              d = Object.getPrototypeOf(this),
              g = this.F;
            a = a(c.call(b, d, {
              F: {
                value: {
                  count: g.count,
                  U: g.U,
                  V: g.V,
                  H: g.H,
                  I: g.I,
                  L: g.L,
                  M: g.M
                }
              }
            }));
            a.F.count.value += 1;
            a.F.U = !1;
            return a;
          };
          S.prototype["delete"] = function () {
            this.F.H || Ja(this);
            this.F.U && !this.F.V && L("Object already scheduled for deletion");
            La(this);
            Ma(this.F);
            this.F.V || (this.F.L = void 0, this.F.H = void 0);
          };
          S.prototype.isDeleted = function () {
            return !this.F.H;
          };
          S.prototype.deleteLater = function () {
            this.F.H || Ja(this);
            this.F.U && !this.F.V && L("Object already scheduled for deletion");
            O.push(this);
            1 === O.length && P && P(Pa);
            this.F.U = !0;
            return this;
          };
          e.getInheritedInstanceCount = function () {
            return Object.keys(Q).length;
          };
          e.getLiveInheritedInstances = function () {
            var a = [],
              b;
            for (b in Q) Q.hasOwnProperty(b) && a.push(Q[b]);
            return a;
          };
          e.flushPendingDeletes = Pa;
          e.setDelayFunction = function (a) {
            P = a;
            O.length && P && P(Pa);
          };
          U.prototype.ja = function (a) {
            this.da && (a = this.da(a));
            return a;
          };
          U.prototype.ca = function (a) {
            this.S && this.S(a);
          };
          U.prototype.argPackAdvance = 8;
          U.prototype.readValueFromPointer = $a;
          U.prototype.deleteObject = function (a) {
            if (null !== a) a["delete"]();
          };
          U.prototype.fromWireType = function (a) {
            function b() {
              return this.Z ? Ra(this.G.P, {
                I: this.ka,
                H: c,
                M: this,
                L: a
              }) : Ra(this.G.P, {
                I: this,
                H: a
              });
            }
            var c = this.ja(a);
            if (!c) return this.ca(a), null;
            var d = Qa(this.G, c);
            if (void 0 !== d) {
              if (0 === d.F.count.value) return d.F.H = c, d.F.L = a, d.clone();
              d = d.clone();
              this.ca(a);
              return d;
            }
            d = this.G.ia(c);
            d = Oa[d];
            if (!d) return b.call(this);
            d = this.Y ? d.ga : d.pointerType;
            var g = Na(c, this.G, d.G);
            return null === g ? b.call(this) : this.Z ? Ra(d.G.P, {
              I: d,
              H: g,
              M: this,
              L: a
            }) : Ra(d.G.P, {
              I: d,
              H: g
            });
          };
          cb = e.UnboundTypeError = Ga("UnboundTypeError");
          Y.N.push({
            value: void 0
          }, {
            value: null
          }, {
            value: !0
          }, {
            value: !1
          });
          Y.ba = Y.N.length;
          e.count_emval_handles = function () {
            for (var a = 0, b = Y.ba; b < Y.N.length; ++b) void 0 !== Y.N[b] && ++a;
            return a;
          };
          var vb = {
            p: function p() {},
            t: function t(a, b, c, d, g) {
              var k = Ba(c);
              b = G(b);
              N(a, {
                name: b,
                fromWireType: function fromWireType(h) {
                  return !!h;
                },
                toWireType: function toWireType(h, f) {
                  return f ? d : g;
                },
                argPackAdvance: 8,
                readValueFromPointer: function readValueFromPointer(h) {
                  if (1 === c) var f = ha;else if (2 === c) f = ia;else if (4 === c) f = ka;else throw new TypeError("Unknown boolean type size: " + b);
                  return this.fromWireType(f[h >> k]);
                },
                O: null
              });
            },
            c: function c(a, b, _c, d, g, k, h, f, l, n, m, q, p) {
              m = G(m);
              k = V(g, k);
              f && (f = V(h, f));
              n && (n = V(l, n));
              p = V(q, p);
              var u = Ea(m);
              Ta(u, function () {
                X("Cannot construct " + m + " due to unbound types", [d]);
              });
              M([a, b, _c], d ? [d] : [], function (t) {
                t = t[0];
                if (d) {
                  var v = t.G;
                  var E = v.P;
                } else E = S.prototype;
                t = Fa(u, function () {
                  if (Object.getPrototypeOf(this) !== K) throw new J("Use 'new' to construct " + m);
                  if (void 0 === x.R) throw new J(m + " has no accessible constructor");
                  var gb = x.R[arguments.length];
                  if (void 0 === gb) throw new J("Tried to invoke ctor of " + m + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(x.R).toString() + ") parameters instead!");
                  return gb.apply(this, arguments);
                });
                var K = Object.create(E, {
                  constructor: {
                    value: t
                  }
                });
                t.prototype = K;
                var x = new Ua(m, t, K, p, v, k, f, n);
                x.J && (void 0 === x.J.X && (x.J.X = []), x.J.X.push(x));
                v = new U(m, x, !0, !1);
                E = new U(m + "*", x, !1, !1);
                var aa = new U(m + " const*", x, !1, !0);
                Oa[a] = {
                  pointerType: E,
                  ga: aa
                };
                ab(u, t);
                return [v, E, aa];
              });
            },
            f: function f(a, b, c, d, g, k, h) {
              var f = ib(c, d);
              b = G(b);
              k = V(g, k);
              M([], [a], function (l) {
                function n() {
                  X("Cannot call " + m + " due to unbound types", f);
                }
                l = l[0];
                var m = l.name + "." + b;
                b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                var q = l.G.constructor;
                void 0 === q[b] ? (n.T = c - 1, q[b] = n) : (Sa(q, b, m), q[b].K[c - 1] = n);
                M([], f, function (p) {
                  p = hb(m, [p[0], null].concat(p.slice(1)), null, k, h);
                  void 0 === q[b].K ? (p.T = c - 1, q[b] = p) : q[b].K[c - 1] = p;
                  if (l.G.X) {
                    for (var _iterator = _createForOfIteratorHelperLoose(l.G.X), _step; !(_step = _iterator()).done;) {
                      var u = _step.value;
                      u.constructor.hasOwnProperty(b) || (u.constructor[b] = p);
                    }
                  }
                  return [];
                });
                return [];
              });
            },
            h: function h(a, b, c, d, g, k, _h, f) {
              b = G(b);
              k = V(g, k);
              M([], [a], function (l) {
                l = l[0];
                var n = l.name + "." + b,
                  m = {
                    get: function get() {
                      X("Cannot access " + n + " due to unbound types", [c]);
                    },
                    enumerable: !0,
                    configurable: !0
                  };
                m.set = f ? function () {
                  X("Cannot access " + n + " due to unbound types", [c]);
                } : function () {
                  L(n + " is a read-only property");
                };
                Object.defineProperty(l.G.constructor, b, m);
                M([], [c], function (q) {
                  q = q[0];
                  var p = {
                    get: function get() {
                      return q.fromWireType(k(d));
                    },
                    enumerable: !0
                  };
                  f && (f = V(_h, f), p.set = function (u) {
                    var t = [];
                    f(d, q.toWireType(t, u));
                    fb(t);
                  });
                  Object.defineProperty(l.G.constructor, b, p);
                  return [];
                });
                return [];
              });
            },
            d: function d(a, b, c, _d, g, k) {
              0 < b || z();
              var h = ib(b, c);
              g = V(_d, g);
              M([], [a], function (f) {
                f = f[0];
                var l = "constructor " + f.name;
                void 0 === f.G.R && (f.G.R = []);
                if (void 0 !== f.G.R[b - 1]) throw new J("Cannot register multiple constructors with identical number of parameters (" + (b - 1) + ") for class '" + f.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                f.G.R[b - 1] = function () {
                  X("Cannot construct " + f.name + " due to unbound types", h);
                };
                M([], h, function (n) {
                  n.splice(1, 0, null);
                  f.G.R[b - 1] = hb(l, n, null, g, k);
                  return [];
                });
                return [];
              });
            },
            a: function a(_a, b, c, d, g, k, h, f) {
              var l = ib(c, d);
              b = G(b);
              k = V(g, k);
              M([], [_a], function (n) {
                function m() {
                  X("Cannot call " + q + " due to unbound types", l);
                }
                n = n[0];
                var q = n.name + "." + b;
                b.startsWith("@@") && (b = Symbol[b.substring(2)]);
                f && n.G.la.push(b);
                var p = n.G.P,
                  u = p[b];
                void 0 === u || void 0 === u.K && u.className !== n.name && u.T === c - 2 ? (m.T = c - 2, m.className = n.name, p[b] = m) : (Sa(p, b, q), p[b].K[c - 2] = m);
                M([], l, function (t) {
                  t = hb(q, t, n, k, h);
                  void 0 === p[b].K ? (t.T = c - 2, p[b] = t) : p[b].K[c - 2] = t;
                  return [];
                });
                return [];
              });
            },
            b: function b(a, _b, c, d, g, k, h, f, l, n) {
              _b = G(_b);
              g = V(d, g);
              M([], [a], function (m) {
                m = m[0];
                var q = m.name + "." + _b,
                  p = {
                    get: function get() {
                      X("Cannot access " + q + " due to unbound types", [c, h]);
                    },
                    enumerable: !0,
                    configurable: !0
                  };
                p.set = l ? function () {
                  X("Cannot access " + q + " due to unbound types", [c, h]);
                } : function () {
                  L(q + " is a read-only property");
                };
                Object.defineProperty(m.G.P, _b, p);
                M([], l ? [c, h] : [c], function (u) {
                  var t = u[0],
                    v = {
                      get: function get() {
                        var K = jb(this, m, q + " getter");
                        return t.fromWireType(g(k, K));
                      },
                      enumerable: !0
                    };
                  if (l) {
                    l = V(f, l);
                    var E = u[1];
                    v.set = function (K) {
                      var x = jb(this, m, q + " setter"),
                        aa = [];
                      l(n, x, E.toWireType(aa, K));
                      fb(aa);
                    };
                  }
                  Object.defineProperty(m.G.P, _b, v);
                  return [];
                });
                return [];
              });
            },
            s: function s(a, b) {
              b = G(b);
              N(a, {
                name: b,
                fromWireType: function fromWireType(c) {
                  var d = Z(c);
                  kb(c);
                  return d;
                },
                toWireType: function toWireType(c, d) {
                  return T(d);
                },
                argPackAdvance: 8,
                readValueFromPointer: $a,
                O: null
              });
            },
            m: function m(a, b, c) {
              c = Ba(c);
              b = G(b);
              N(a, {
                name: b,
                fromWireType: function fromWireType(d) {
                  return d;
                },
                toWireType: function toWireType(d, g) {
                  return g;
                },
                argPackAdvance: 8,
                readValueFromPointer: lb(b, c),
                O: null
              });
            },
            e: function e(a, b, c, d, g) {
              b = G(b);
              -1 === g && (g = 4294967295);
              g = Ba(c);
              var k = function k(f) {
                return f;
              };
              if (0 === d) {
                var h = 32 - 8 * c;
                k = function k(f) {
                  return f << h >>> h;
                };
              }
              c = b.includes("unsigned") ? function (f, l) {
                return l >>> 0;
              } : function (f, l) {
                return l;
              };
              N(a, {
                name: b,
                fromWireType: k,
                toWireType: c,
                argPackAdvance: 8,
                readValueFromPointer: mb(b, g, 0 !== d),
                O: null
              });
            },
            r: function r(a, b) {
              b = G(b);
              var c = "std::string" === b;
              N(a, {
                name: b,
                fromWireType: function fromWireType(d) {
                  var g = B[d >> 2],
                    k = d + 4;
                  if (c) for (var h = k, f = 0; f <= g; ++f) {
                    var l = k + f;
                    if (f == g || 0 == A[l]) {
                      if (h) {
                        var n = h;
                        var m = A,
                          q = n + (l - h);
                        for (h = n; m[h] && !(h >= q);) ++h;
                        if (16 < h - n && m.buffer && nb) n = nb.decode(m.subarray(n, h));else {
                          for (q = ""; n < h;) {
                            var p = m[n++];
                            if (p & 128) {
                              var u = m[n++] & 63;
                              if (192 == (p & 224)) q += String.fromCharCode((p & 31) << 6 | u);else {
                                var t = m[n++] & 63;
                                p = 224 == (p & 240) ? (p & 15) << 12 | u << 6 | t : (p & 7) << 18 | u << 12 | t << 6 | m[n++] & 63;
                                65536 > p ? q += String.fromCharCode(p) : (p -= 65536, q += String.fromCharCode(55296 | p >> 10, 56320 | p & 1023));
                              }
                            } else q += String.fromCharCode(p);
                          }
                          n = q;
                        }
                      } else n = "";
                      if (void 0 === v) var v = n;else v += String.fromCharCode(0), v += n;
                      h = l + 1;
                    }
                  } else {
                    v = Array(g);
                    for (f = 0; f < g; ++f) v[f] = String.fromCharCode(A[k + f]);
                    v = v.join("");
                  }
                  W(d);
                  return v;
                },
                toWireType: function toWireType(d, g) {
                  g instanceof ArrayBuffer && (g = new Uint8Array(g));
                  var k,
                    h = "string" == typeof g;
                  h || g instanceof Uint8Array || g instanceof Uint8ClampedArray || g instanceof Int8Array || L("Cannot pass non-string to std::string");
                  var f;
                  if (c && h) for (k = f = 0; k < g.length; ++k) {
                    var l = g.charCodeAt(k);
                    127 >= l ? f++ : 2047 >= l ? f += 2 : 55296 <= l && 57343 >= l ? (f += 4, ++k) : f += 3;
                  } else f = g.length;
                  k = f;
                  f = ub(4 + k + 1);
                  l = f + 4;
                  B[f >> 2] = k;
                  if (c && h) {
                    if (h = l, l = k + 1, k = A, 0 < l) {
                      l = h + l - 1;
                      for (var n = 0; n < g.length; ++n) {
                        var m = g.charCodeAt(n);
                        if (55296 <= m && 57343 >= m) {
                          var q = g.charCodeAt(++n);
                          m = 65536 + ((m & 1023) << 10) | q & 1023;
                        }
                        if (127 >= m) {
                          if (h >= l) break;
                          k[h++] = m;
                        } else {
                          if (2047 >= m) {
                            if (h + 1 >= l) break;
                            k[h++] = 192 | m >> 6;
                          } else {
                            if (65535 >= m) {
                              if (h + 2 >= l) break;
                              k[h++] = 224 | m >> 12;
                            } else {
                              if (h + 3 >= l) break;
                              k[h++] = 240 | m >> 18;
                              k[h++] = 128 | m >> 12 & 63;
                            }
                            k[h++] = 128 | m >> 6 & 63;
                          }
                          k[h++] = 128 | m & 63;
                        }
                      }
                      k[h] = 0;
                    }
                  } else if (h) for (h = 0; h < k; ++h) n = g.charCodeAt(h), 255 < n && (W(l), L("String has UTF-16 code units that do not fit in 8 bits")), A[l + h] = n;else for (h = 0; h < k; ++h) A[l + h] = g[h];
                  null !== d && d.push(W, f);
                  return f;
                },
                argPackAdvance: 8,
                readValueFromPointer: $a,
                O: function O(d) {
                  W(d);
                }
              });
            },
            u: function u(a, b) {
              b = G(b);
              N(a, {
                ra: !0,
                name: b,
                argPackAdvance: 0,
                fromWireType: function fromWireType() {},
                toWireType: function toWireType() {}
              });
            },
            j: function j(a, b, c) {
              a = Z(a);
              b = ob(b, "emval::as");
              var d = [],
                g = T(d);
              B[c >> 2] = g;
              return b.toWireType(d, a);
            },
            g: kb,
            k: function k(a, b) {
              a = Z(a);
              b = Z(b);
              return T(a[b]);
            },
            o: function o(a) {
              var b = pb[a];
              return T(void 0 === b ? G(a) : b);
            },
            i: function i(a) {
              var b = Z(a);
              fb(b);
              kb(a);
            },
            n: function n(a, b) {
              a = ob(a, "_emval_take_value");
              a = a.readValueFromPointer(b);
              return T(a);
            },
            l: function l() {
              z("");
            },
            q: function q(a) {
              var b = A.length;
              a >>>= 0;
              if (2147483648 < a) return !1;
              for (var c = 1; 4 >= c; c *= 2) {
                var d = b * (1 + .2 / c);
                d = Math.min(d, a + 100663296);
                var g = Math;
                d = Math.max(a, d);
                a: {
                  g = g.min.call(g, 2147483648, d + (65536 - d % 65536) % 65536) - ea.buffer.byteLength + 65535 >>> 16;
                  try {
                    ea.grow(g);
                    na();
                    var k = 1;
                    break a;
                  } catch (h) {}
                  k = void 0;
                }
                if (k) return !0;
              }
              return !1;
            },
            w: qb,
            v: rb
          };
          (function () {
            function a(c) {
              c = c.exports;
              e.asm = c;
              ea = e.asm.x;
              na();
              oa = e.asm.z;
              qa.unshift(e.asm.y);
              C--;
              e.monitorRunDependencies && e.monitorRunDependencies(C);
              if (0 == C && (D)) {
                var d = D;
                D = null;
                d();
              }
              return c;
            }
            var b = {
              a: vb
            };
            C++;
            e.monitorRunDependencies && e.monitorRunDependencies(C);
            if (e.instantiateWasm) try {
              return e.instantiateWasm(b, a);
            } catch (c) {
              w("Module.instantiateWasm callback failed with error: " + c), ca(c);
            }
            za(b, function (c) {
              a(c.instance);
            })["catch"](ca);
            return {};
          })();
          function ub() {
            return (ub = e.asm.A).apply(null, arguments);
          }
          function W() {
            return (W = e.asm.B).apply(null, arguments);
          }
          function eb() {
            return (eb = e.asm.C).apply(null, arguments);
          }
          e.__embind_initialize_bindings = function () {
            return (e.__embind_initialize_bindings = e.asm.D).apply(null, arguments);
          };
          var wb;
          D = function xb() {
            wb || yb();
            wb || (D = xb);
          };
          function yb() {
            function a() {
              if (!wb && (wb = !0, e.calledRun = !0, !fa)) {
                Aa(qa);
                ba(e);
                if (e.onRuntimeInitialized) e.onRuntimeInitialized();
                if (e.postRun) for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
                  var b = e.postRun.shift();
                  ra.unshift(b);
                }
                Aa(ra);
              }
            }
            if (!(0 < C)) {
              if (e.preRun) for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) sa();
              Aa(pa);
              0 < C || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function () {
                setTimeout(function () {
                  e.setStatus("");
                }, 1);
                a();
              }, 1)) : a());
            }
          }
          if (e.preInit) for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) e.preInit.pop()();
          yb();
          return spineWasm.ready;
        };
      }());

    })
  };
}));
