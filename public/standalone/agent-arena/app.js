"use strict";
(() => {
  // public/arena-demo/assets/index-DPIRUHWe.js
  var e = Object.create;
  var t = Object.defineProperty;
  var n = Object.getOwnPropertyDescriptor;
  var r = Object.getOwnPropertyNames;
  var i = Object.getPrototypeOf;
  var a = Object.prototype.hasOwnProperty;
  var o = (e3, t2) => () => (t2 || (e3((t2 = { exports: {} }).exports, t2, t2.exports), e3 = null), t2.exports);
  var s = (e3, i2, o2, s2) => {
    if (i2 && typeof i2 == `object` || typeof i2 == `function`) for (var c2 = r(i2), l2 = 0, u2 = c2.length, d2; l2 < u2; l2++) d2 = c2[l2], !a.call(e3, d2) && d2 !== o2 && t(e3, d2, { get: ((e4) => i2[e4]).bind(null, d2), enumerable: !(s2 = n(i2, d2)) || s2.enumerable });
    return e3;
  };
  var c = (n2, r2, o2) => (o2 = n2 == null ? {} : e(i(n2)), s(r2 || !n2 || !n2.__esModule || !a.call(n2, `default`) ? t(o2, `default`, { value: n2, enumerable: true }) : o2, n2));
  (function() {
    let e3 = document.createElement(`link`).relList;
    if (e3 && e3.supports && e3.supports(`modulepreload`)) return;
    for (let e4 of document.querySelectorAll(`link[rel="modulepreload"]`)) n2(e4);
    new MutationObserver((e4) => {
      for (let t3 of e4) if (t3.type === `childList`) for (let e5 of t3.addedNodes) e5.tagName === `LINK` && e5.rel === `modulepreload` && n2(e5);
    }).observe(document, { childList: true, subtree: true });
    function t2(e4) {
      let t3 = {};
      return e4.integrity && (t3.integrity = e4.integrity), e4.referrerPolicy && (t3.referrerPolicy = e4.referrerPolicy), t3.credentials = e4.crossOrigin === `use-credentials` ? `include` : e4.crossOrigin === `anonymous` ? `omit` : `same-origin`, t3;
    }
    function n2(e4) {
      if (e4.ep) return;
      e4.ep = true;
      let n3 = t2(e4);
      fetch(e4.href, n3);
    }
  })();
  var l = o(((e3) => {
    var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), n2 = /* @__PURE__ */ Symbol.for(`react.portal`), r2 = /* @__PURE__ */ Symbol.for(`react.fragment`), i2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), a2 = /* @__PURE__ */ Symbol.for(`react.profiler`), o2 = /* @__PURE__ */ Symbol.for(`react.consumer`), s2 = /* @__PURE__ */ Symbol.for(`react.context`), c2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), l2 = /* @__PURE__ */ Symbol.for(`react.suspense`), u2 = /* @__PURE__ */ Symbol.for(`react.memo`), d2 = /* @__PURE__ */ Symbol.for(`react.lazy`), f2 = /* @__PURE__ */ Symbol.for(`react.activity`), p2 = /* @__PURE__ */ Symbol.for(`react.view_transition`), m2 = Symbol.iterator;
    function h2(e4) {
      return typeof e4 != `object` || !e4 ? null : (e4 = m2 && e4[m2] || e4[`@@iterator`], typeof e4 == `function` ? e4 : null);
    }
    var g2 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, _2 = Object.assign, v2 = {};
    function y2(e4, t3, n3) {
      this.props = e4, this.context = t3, this.refs = v2, this.updater = n3 || g2;
    }
    y2.prototype.isReactComponent = {}, y2.prototype.setState = function(e4, t3) {
      if (typeof e4 != `object` && typeof e4 != `function` && e4 != null) throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
      this.updater.enqueueSetState(this, e4, t3, `setState`);
    }, y2.prototype.forceUpdate = function(e4) {
      this.updater.enqueueForceUpdate(this, e4, `forceUpdate`);
    };
    function b2() {
    }
    b2.prototype = y2.prototype;
    function ee2(e4, t3, n3) {
      this.props = e4, this.context = t3, this.refs = v2, this.updater = n3 || g2;
    }
    var x2 = ee2.prototype = new b2();
    x2.constructor = ee2, _2(x2, y2.prototype), x2.isPureReactComponent = true;
    var te2 = Array.isArray;
    function S2() {
    }
    var C2 = { H: null, A: null, T: null, S: null }, ne2 = Object.prototype.hasOwnProperty;
    function w2(e4, n3, r3) {
      var i3 = r3.ref;
      return { $$typeof: t2, type: e4, key: n3, ref: i3 === void 0 ? null : i3, props: r3 };
    }
    function T2(e4, t3) {
      return w2(e4.type, t3, e4.props);
    }
    function re2(e4) {
      return typeof e4 == `object` && !!e4 && e4.$$typeof === t2;
    }
    function ie2(e4) {
      var t3 = { "=": `=0`, ":": `=2` };
      return `$` + e4.replace(/[=:]/g, function(e5) {
        return t3[e5];
      });
    }
    var ae2 = /\/+/g;
    function oe2(e4, t3) {
      return typeof e4 == `object` && e4 && e4.key != null ? ie2(`` + e4.key) : t3.toString(36);
    }
    function se2(e4) {
      switch (e4.status) {
        case `fulfilled`:
          return e4.value;
        case `rejected`:
          throw e4.reason;
        default:
          switch (typeof e4.status == `string` ? e4.then(S2, S2) : (e4.status = `pending`, e4.then(function(t3) {
            e4.status === `pending` && (e4.status = `fulfilled`, e4.value = t3);
          }, function(t3) {
            e4.status === `pending` && (e4.status = `rejected`, e4.reason = t3);
          })), e4.status) {
            case `fulfilled`:
              return e4.value;
            case `rejected`:
              throw e4.reason;
          }
      }
      throw e4;
    }
    function ce2(e4, r3, i3, a3, o3) {
      var s3 = typeof e4;
      (s3 === `undefined` || s3 === `boolean`) && (e4 = null);
      var c3 = false;
      if (e4 === null) c3 = true;
      else switch (s3) {
        case `bigint`:
        case `string`:
        case `number`:
          c3 = true;
          break;
        case `object`:
          switch (e4.$$typeof) {
            case t2:
            case n2:
              c3 = true;
              break;
            case d2:
              return c3 = e4._init, ce2(c3(e4._payload), r3, i3, a3, o3);
          }
      }
      if (c3) return o3 = o3(e4), c3 = a3 === `` ? `.` + oe2(e4, 0) : a3, te2(o3) ? (i3 = ``, c3 != null && (i3 = c3.replace(ae2, `$&/`) + `/`), ce2(o3, r3, i3, ``, function(e5) {
        return e5;
      })) : o3 != null && (re2(o3) && (o3 = T2(o3, i3 + (o3.key == null || e4 && e4.key === o3.key ? `` : (`` + o3.key).replace(ae2, `$&/`) + `/`) + c3)), r3.push(o3)), 1;
      c3 = 0;
      var l3 = a3 === `` ? `.` : a3 + `:`;
      if (te2(e4)) for (var u3 = 0; u3 < e4.length; u3++) a3 = e4[u3], s3 = l3 + oe2(a3, u3), c3 += ce2(a3, r3, i3, s3, o3);
      else if (u3 = h2(e4), typeof u3 == `function`) for (e4 = u3.call(e4), u3 = 0; !(a3 = e4.next()).done; ) a3 = a3.value, s3 = l3 + oe2(a3, u3++), c3 += ce2(a3, r3, i3, s3, o3);
      else if (s3 === `object`) {
        if (typeof e4.then == `function`) return ce2(se2(e4), r3, i3, a3, o3);
        throw r3 = String(e4), Error(`Objects are not valid as a React child (found: ` + (r3 === `[object Object]` ? `object with keys {` + Object.keys(e4).join(`, `) + `}` : r3) + `). If you meant to render a collection of children, use an array instead.`);
      }
      return c3;
    }
    function le2(e4, t3, n3) {
      if (e4 == null) return e4;
      var r3 = [], i3 = 0;
      return ce2(e4, r3, ``, ``, function(e5) {
        return t3.call(n3, e5, i3++);
      }), r3;
    }
    function E2(e4) {
      if (e4._status === -1) {
        var t3 = e4._result, n3 = t3();
        n3.then(function(t4) {
          (e4._status === 0 || e4._status === -1) && (e4._status = 1, e4._result = t4, n3.status === void 0 && (n3.status = `fulfilled`, n3.value = t4));
        }, function(t4) {
          (e4._status === 0 || e4._status === -1) && (e4._status = 2, e4._result = t4, n3.status === void 0 && (n3.status = `rejected`, n3.reason = t4));
        }), e4._status === -1 && (e4._status = 0, e4._result = n3);
      }
      if (e4._status === 1) return e4._result.default;
      throw e4._result;
    }
    var ue2 = typeof reportError == `function` ? reportError : function(e4) {
      if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
        var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e4 == `object` && e4 && typeof e4.message == `string` ? String(e4.message) : String(e4), error: e4 });
        if (!window.dispatchEvent(t3)) return;
      } else if (typeof process == `object` && typeof process.emit == `function`) {
        process.emit(`uncaughtException`, e4);
        return;
      }
      console.error(e4);
    };
    function de2(e4) {
      var t3 = C2.T, n3 = {};
      n3.types = t3 === null ? null : t3.types, C2.T = n3;
      try {
        var r3 = e4(), i3 = C2.S;
        i3 !== null && i3(n3, r3), typeof r3 == `object` && r3 && typeof r3.then == `function` && r3.then(S2, ue2);
      } catch (e5) {
        ue2(e5);
      } finally {
        t3 !== null && n3.types !== null && (t3.types = n3.types), C2.T = t3;
      }
    }
    function fe2(e4) {
      var t3 = C2.T;
      if (t3 !== null) {
        var n3 = t3.types;
        n3 === null ? t3.types = [e4] : n3.indexOf(e4) === -1 && n3.push(e4);
      } else de2(fe2.bind(null, e4));
    }
    var pe2 = { map: le2, forEach: function(e4, t3, n3) {
      le2(e4, function() {
        t3.apply(this, arguments);
      }, n3);
    }, count: function(e4) {
      var t3 = 0;
      return le2(e4, function() {
        t3++;
      }), t3;
    }, toArray: function(e4) {
      return le2(e4, function(e5) {
        return e5;
      }) || [];
    }, only: function(e4) {
      if (!re2(e4)) throw Error(`React.Children.only expected to receive a single React element child.`);
      return e4;
    } };
    e3.Activity = f2, e3.Children = pe2, e3.Component = y2, e3.Fragment = r2, e3.Profiler = a2, e3.PureComponent = ee2, e3.StrictMode = i2, e3.Suspense = l2, e3.ViewTransition = p2, e3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C2, e3.__COMPILER_RUNTIME = { __proto__: null, c: function(e4) {
      return C2.H.useMemoCache(e4);
    } }, e3.addTransitionType = fe2, e3.cache = function(e4) {
      return function() {
        return e4.apply(null, arguments);
      };
    }, e3.cacheSignal = function() {
      return null;
    }, e3.cloneElement = function(e4, t3, n3) {
      if (e4 == null) throw Error(`The argument must be a React element, but you passed ` + e4 + `.`);
      var r3 = _2({}, e4.props), i3 = e4.key;
      if (t3 != null) for (a3 in t3.key !== void 0 && (i3 = `` + t3.key), t3) !ne2.call(t3, a3) || a3 === `key` || a3 === `__self` || a3 === `__source` || a3 === `ref` && t3.ref === void 0 || (r3[a3] = t3[a3]);
      var a3 = arguments.length - 2;
      if (a3 === 1) r3.children = n3;
      else if (1 < a3) {
        for (var o3 = Array(a3), s3 = 0; s3 < a3; s3++) o3[s3] = arguments[s3 + 2];
        r3.children = o3;
      }
      return w2(e4.type, i3, r3);
    }, e3.createContext = function(e4) {
      return e4 = { $$typeof: s2, _currentValue: e4, _currentValue2: e4, _threadCount: 0, Provider: null, Consumer: null }, e4.Provider = e4, e4.Consumer = { $$typeof: o2, _context: e4 }, e4;
    }, e3.createElement = function(e4, t3, n3) {
      var r3, i3 = {}, a3 = null;
      if (t3 != null) for (r3 in t3.key !== void 0 && (a3 = `` + t3.key), t3) ne2.call(t3, r3) && r3 !== `key` && r3 !== `__self` && r3 !== `__source` && (i3[r3] = t3[r3]);
      var o3 = arguments.length - 2;
      if (o3 === 1) i3.children = n3;
      else if (1 < o3) {
        for (var s3 = Array(o3), c3 = 0; c3 < o3; c3++) s3[c3] = arguments[c3 + 2];
        i3.children = s3;
      }
      if (e4 && e4.defaultProps) for (r3 in o3 = e4.defaultProps, o3) i3[r3] === void 0 && (i3[r3] = o3[r3]);
      return w2(e4, a3, i3);
    }, e3.createRef = function() {
      return { current: null };
    }, e3.forwardRef = function(e4) {
      return { $$typeof: c2, render: e4 };
    }, e3.isValidElement = re2, e3.lazy = function(e4) {
      return { $$typeof: d2, _payload: { _status: -1, _result: e4 }, _init: E2 };
    }, e3.memo = function(e4, t3) {
      return { $$typeof: u2, type: e4, compare: t3 === void 0 ? null : t3 };
    }, e3.startTransition = de2, e3.unstable_useCacheRefresh = function() {
      return C2.H.useCacheRefresh();
    }, e3.use = function(e4) {
      return C2.H.use(e4);
    }, e3.useActionState = function(e4, t3, n3) {
      return C2.H.useActionState(e4, t3, n3);
    }, e3.useCallback = function(e4, t3) {
      return C2.H.useCallback(e4, t3);
    }, e3.useContext = function(e4) {
      return C2.H.useContext(e4);
    }, e3.useDebugValue = function() {
    }, e3.useDeferredValue = function(e4, t3) {
      return C2.H.useDeferredValue(e4, t3);
    }, e3.useEffect = function(e4, t3) {
      return C2.H.useEffect(e4, t3);
    }, e3.useEffectEvent = function(e4) {
      return C2.H.useEffectEvent(e4);
    }, e3.useId = function() {
      return C2.H.useId();
    }, e3.useImperativeHandle = function(e4, t3, n3) {
      return C2.H.useImperativeHandle(e4, t3, n3);
    }, e3.useInsertionEffect = function(e4, t3) {
      return C2.H.useInsertionEffect(e4, t3);
    }, e3.useLayoutEffect = function(e4, t3) {
      return C2.H.useLayoutEffect(e4, t3);
    }, e3.useMemo = function(e4, t3) {
      return C2.H.useMemo(e4, t3);
    }, e3.useOptimistic = function(e4, t3) {
      return C2.H.useOptimistic(e4, t3);
    }, e3.useReducer = function(e4, t3, n3) {
      return C2.H.useReducer(e4, t3, n3);
    }, e3.useRef = function(e4) {
      return C2.H.useRef(e4);
    }, e3.useState = function(e4) {
      return C2.H.useState(e4);
    }, e3.useSyncExternalStore = function(e4, t3, n3) {
      return C2.H.useSyncExternalStore(e4, t3, n3);
    }, e3.useTransition = function() {
      return C2.H.useTransition();
    }, e3.version = `19.3.1`;
  }));
  var u = o(((e3, t2) => {
    t2.exports = l();
  }));
  var d = o(((e3) => {
    function t2(e4, t3) {
      var n3 = e4.length;
      e4.push(t3);
      a: for (; 0 < n3; ) {
        var r3 = n3 - 1 >>> 1, a3 = e4[r3];
        if (0 < i2(a3, t3)) e4[r3] = t3, e4[n3] = a3, n3 = r3;
        else break a;
      }
    }
    function n2(e4) {
      return e4.length === 0 ? null : e4[0];
    }
    function r2(e4) {
      if (e4.length === 0) return null;
      var t3 = e4[0], n3 = e4.pop();
      if (n3 !== t3) {
        e4[0] = n3;
        a: for (var r3 = 0, a3 = e4.length, o3 = a3 >>> 1; r3 < o3; ) {
          var s3 = 2 * (r3 + 1) - 1, c3 = e4[s3], l3 = s3 + 1, u3 = e4[l3];
          if (0 > i2(c3, n3)) l3 < a3 && 0 > i2(u3, c3) ? (e4[r3] = u3, e4[l3] = n3, r3 = l3) : (e4[r3] = c3, e4[s3] = n3, r3 = s3);
          else if (l3 < a3 && 0 > i2(u3, n3)) e4[r3] = u3, e4[l3] = n3, r3 = l3;
          else break a;
        }
      }
      return t3;
    }
    function i2(e4, t3) {
      var n3 = e4.sortIndex - t3.sortIndex;
      return n3 === 0 ? e4.id - t3.id : n3;
    }
    if (e3.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
      var a2 = performance;
      e3.unstable_now = function() {
        return a2.now();
      };
    } else {
      var o2 = Date, s2 = o2.now();
      e3.unstable_now = function() {
        return o2.now() - s2;
      };
    }
    var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h2 = false, g2 = false, _2 = typeof setTimeout == `function` ? setTimeout : null, v2 = typeof clearTimeout == `function` ? clearTimeout : null, y2 = typeof setImmediate < `u` ? setImmediate : null;
    function b2(e4) {
      for (var i3 = n2(l2); i3 !== null; ) {
        if (i3.callback === null) r2(l2);
        else if (i3.startTime <= e4) r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
        else break;
        i3 = n2(l2);
      }
    }
    function ee2(e4) {
      if (h2 = false, b2(e4), !m2) {
        if (n2(c2) !== null) m2 = true, x2 || (x2 = true, T2());
        else {
          var t3 = n2(l2);
          t3 !== null && ae2(ee2, t3.startTime - e4);
        }
      }
    }
    var x2 = false, te2 = -1, S2 = 5, C2 = -1;
    function ne2() {
      return g2 ? true : !(e3.unstable_now() - C2 < S2);
    }
    function w2() {
      if (g2 = false, x2) {
        var t3 = e3.unstable_now();
        C2 = t3;
        var i3 = true;
        try {
          a: {
            m2 = false, h2 && (h2 = false, v2(te2), te2 = -1), p2 = true;
            var a3 = f2;
            try {
              b: {
                for (b2(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && ne2()); ) {
                  var o3 = d2.callback;
                  if (typeof o3 == `function`) {
                    d2.callback = null, f2 = d2.priorityLevel;
                    var s3 = o3(d2.expirationTime <= t3);
                    if (t3 = e3.unstable_now(), typeof s3 == `function`) {
                      d2.callback = s3, b2(t3), i3 = true;
                      break b;
                    }
                    d2 === n2(c2) && r2(c2), b2(t3);
                  } else r2(c2);
                  d2 = n2(c2);
                }
                if (d2 !== null) i3 = true;
                else {
                  var u3 = n2(l2);
                  u3 !== null && ae2(ee2, u3.startTime - t3), i3 = false;
                }
              }
              break a;
            } finally {
              d2 = null, f2 = a3, p2 = false;
            }
            i3 = void 0;
          }
        } finally {
          i3 ? T2() : x2 = false;
        }
      }
    }
    var T2;
    if (typeof y2 == `function`) T2 = function() {
      y2(w2);
    };
    else if (typeof MessageChannel < `u`) {
      var re2 = new MessageChannel(), ie2 = re2.port2;
      re2.port1.onmessage = w2, T2 = function() {
        ie2.postMessage(null);
      };
    } else T2 = function() {
      _2(w2, 0);
    };
    function ae2(t3, n3) {
      te2 = _2(function() {
        t3(e3.unstable_now());
      }, n3);
    }
    e3.unstable_IdlePriority = 5, e3.unstable_ImmediatePriority = 1, e3.unstable_LowPriority = 4, e3.unstable_NormalPriority = 3, e3.unstable_Profiling = null, e3.unstable_UserBlockingPriority = 2, e3.unstable_cancelCallback = function(e4) {
      e4.callback = null;
    }, e3.unstable_forceFrameRate = function(e4) {
      0 > e4 || 125 < e4 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : S2 = 0 < e4 ? Math.floor(1e3 / e4) : 5;
    }, e3.unstable_getCurrentPriorityLevel = function() {
      return f2;
    }, e3.unstable_next = function(e4) {
      switch (f2) {
        case 1:
        case 2:
        case 3:
          var t3 = 3;
          break;
        default:
          t3 = f2;
      }
      var n3 = f2;
      f2 = t3;
      try {
        return e4();
      } finally {
        f2 = n3;
      }
    }, e3.unstable_requestPaint = function() {
      g2 = true;
    }, e3.unstable_runWithPriority = function(e4, t3) {
      switch (e4) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e4 = 3;
      }
      var n3 = f2;
      f2 = e4;
      try {
        return t3();
      } finally {
        f2 = n3;
      }
    }, e3.unstable_scheduleCallback = function(r3, i3, a3) {
      var o3 = e3.unstable_now();
      switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
        case 1:
          var s3 = -1;
          break;
        case 2:
          s3 = 250;
          break;
        case 5:
          s3 = 1073741823;
          break;
        case 4:
          s3 = 1e4;
          break;
        default:
          s3 = 5e3;
      }
      return s3 = a3 + s3, r3 = { id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1 }, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h2 ? (v2(te2), te2 = -1) : h2 = true, ae2(ee2, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m2 || p2 || (m2 = true, x2 || (x2 = true, T2()))), r3;
    }, e3.unstable_shouldYield = ne2, e3.unstable_wrapCallback = function(e4) {
      var t3 = f2;
      return function() {
        var n3 = f2;
        f2 = t3;
        try {
          return e4.apply(this, arguments);
        } finally {
          f2 = n3;
        }
      };
    };
  }));
  var f = o(((e3, t2) => {
    t2.exports = d();
  }));
  var p = o(((e3) => {
    var t2 = u();
    function n2(e4) {
      var t3 = `https://react.dev/errors/` + e4;
      if (1 < arguments.length) {
        t3 += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
      }
      return `Minified React error #` + e4 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function r2() {
    }
    var i2 = { d: { f: r2, r: function() {
      throw Error(n2(522));
    }, D: r2, C: r2, L: r2, m: r2, X: r2, S: r2, M: r2 }, p: 0, findDOMNode: null }, a2 = /* @__PURE__ */ Symbol.for(`react.portal`), o2 = /* @__PURE__ */ Symbol.for(`react.recoverable`), s2 = /* @__PURE__ */ Symbol.for(`react.optimistic_key`);
    function c2(e4, t3, n3) {
      var r3 = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: a2, key: r3 == null ? null : r3 === s2 ? s2 : `` + r3, children: e4, containerInfo: t3, implementation: n3 };
    }
    var l2 = t2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d2(e4, t3) {
      if (e4 === `font`) return ``;
      if (typeof t3 == `string`) return t3 === `use-credentials` ? t3 : ``;
    }
    e3.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i2, e3.browser = function(e4) {
      return { $$typeof: o2, _reason: e4 };
    }, e3.createPortal = function(e4, t3) {
      var r3 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!t3 || t3.nodeType !== 1 && t3.nodeType !== 9 && t3.nodeType !== 11) throw Error(n2(299));
      return c2(e4, t3, null, r3);
    }, e3.flushSync = function(e4) {
      var t3 = l2.T, n3 = i2.p;
      try {
        if (l2.T = null, i2.p = 2, e4) return e4();
      } finally {
        l2.T = t3, i2.p = n3, i2.d.f();
      }
    }, e3.preconnect = function(e4, t3) {
      typeof e4 == `string` && (t3 ? (t3 = t3.crossOrigin, t3 = typeof t3 == `string` ? t3 === `use-credentials` ? t3 : `` : void 0) : t3 = null, i2.d.C(e4, t3));
    }, e3.prefetchDNS = function(e4) {
      typeof e4 == `string` && i2.d.D(e4);
    }, e3.preinit = function(e4, t3) {
      if (typeof e4 == `string` && t3 && typeof t3.as == `string`) {
        var n3 = t3.as, r3 = d2(n3, t3.crossOrigin), a3 = typeof t3.integrity == `string` ? t3.integrity : void 0, o3 = typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0;
        n3 === `style` ? i2.d.S(e4, typeof t3.precedence == `string` ? t3.precedence : void 0, { crossOrigin: r3, integrity: a3, fetchPriority: o3 }) : n3 === `script` && i2.d.X(e4, { crossOrigin: r3, integrity: a3, fetchPriority: o3, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0 });
      }
    }, e3.preinitModule = function(e4, t3) {
      if (typeof e4 == `string`) {
        if (typeof t3 == `object` && t3) {
          if (t3.as == null || t3.as === `script`) {
            var n3 = d2(t3.as, t3.crossOrigin);
            i2.d.M(e4, { crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0 });
          }
        } else t3 ?? i2.d.M(e4);
      }
    }, e3.preload = function(e4, t3) {
      if (typeof e4 == `string` && typeof t3 == `object` && t3 && typeof t3.as == `string`) {
        var n3 = t3.as, r3 = d2(n3, t3.crossOrigin);
        i2.d.L(e4, n3, { crossOrigin: r3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, type: typeof t3.type == `string` ? t3.type : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0, referrerPolicy: typeof t3.referrerPolicy == `string` ? t3.referrerPolicy : void 0, imageSrcSet: typeof t3.imageSrcSet == `string` ? t3.imageSrcSet : void 0, imageSizes: typeof t3.imageSizes == `string` ? t3.imageSizes : void 0, media: typeof t3.media == `string` ? t3.media : void 0 });
      }
    }, e3.preloadModule = function(e4, t3) {
      if (typeof e4 == `string`) {
        if (t3) {
          var n3 = d2(t3.as, t3.crossOrigin);
          i2.d.m(e4, { as: typeof t3.as == `string` && t3.as !== `script` ? t3.as : void 0, crossOrigin: n3, integrity: typeof t3.integrity == `string` ? t3.integrity : void 0, nonce: typeof t3.nonce == `string` ? t3.nonce : void 0, fetchPriority: typeof t3.fetchPriority == `string` ? t3.fetchPriority : void 0 });
        } else i2.d.m(e4);
      }
    }, e3.requestFormReset = function(e4) {
      i2.d.r(e4);
    }, e3.unstable_batchedUpdates = function(e4, t3) {
      return e4(t3);
    }, e3.useFormState = function(e4, t3, n3) {
      return l2.H.useFormState(e4, t3, n3);
    }, e3.useFormStatus = function() {
      return l2.H.useHostTransitionStatus();
    }, e3.version = `19.3.1`;
  }));
  var m = o(((e3, t2) => {
    function n2() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e4) {
        console.error(e4);
      }
    }
    n2(), t2.exports = p();
  }));
  var h = o(((e3) => {
    var t2 = f(), n2 = u(), r2 = m();
    function i2(e4) {
      var t3 = `https://react.dev/errors/` + e4;
      if (1 < arguments.length) {
        t3 += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n3 = 2; n3 < arguments.length; n3++) t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
      }
      return `Minified React error #` + e4 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function a2(e4) {
      return !(!e4 || e4.nodeType !== 1 && e4.nodeType !== 9 && e4.nodeType !== 11);
    }
    function o2(e4) {
      for (var t3 = e4, n3 = t3; n3 && !n3.alternate; ) t3 = n3, t3.flags & 4098 && (e4 = t3.return), n3 = t3.return;
      for (; t3.return; ) t3 = t3.return;
      return t3.tag === 3 ? e4 : null;
    }
    function s2(e4) {
      if (e4.tag === 13) {
        var t3 = e4.memoizedState;
        if (t3 === null && (e4 = e4.alternate, e4 !== null && (t3 = e4.memoizedState)), t3 !== null) return t3.dehydrated;
      }
      return null;
    }
    function c2(e4) {
      if (e4.tag === 31) {
        var t3 = e4.memoizedState;
        if (t3 === null && (e4 = e4.alternate, e4 !== null && (t3 = e4.memoizedState)), t3 !== null) return t3.dehydrated;
      }
      return null;
    }
    function l2(e4) {
      if (o2(e4) !== e4) throw Error(i2(188));
    }
    function d2(e4) {
      var t3 = e4.alternate;
      if (!t3) {
        if (t3 = o2(e4), t3 === null) throw Error(i2(188));
        return t3 === e4 ? e4 : null;
      }
      for (var n3 = e4, r3 = t3; ; ) {
        var a3 = n3.return;
        if (a3 === null) break;
        var s3 = a3.alternate;
        if (s3 === null) {
          if (r3 = a3.return, r3 !== null) {
            n3 = r3;
            continue;
          }
          break;
        }
        if (a3.child === s3.child) {
          for (s3 = a3.child; s3; ) {
            if (s3 === n3) return l2(a3), e4;
            if (s3 === r3) return l2(a3), t3;
            s3 = s3.sibling;
          }
          throw Error(i2(188));
        }
        if (n3.return !== r3.return) n3 = a3, r3 = s3;
        else {
          for (var c3 = false, u2 = a3.child; u2; ) {
            if (u2 === n3) {
              c3 = true, n3 = a3, r3 = s3;
              break;
            }
            if (u2 === r3) {
              c3 = true, r3 = a3, n3 = s3;
              break;
            }
            u2 = u2.sibling;
          }
          if (!c3) {
            for (u2 = s3.child; u2; ) {
              if (u2 === n3) {
                c3 = true, n3 = s3, r3 = a3;
                break;
              }
              if (u2 === r3) {
                c3 = true, r3 = s3, n3 = a3;
                break;
              }
              u2 = u2.sibling;
            }
            if (!c3) throw Error(i2(189));
          }
        }
        if (n3.alternate !== r3) throw Error(i2(190));
      }
      if (n3.tag !== 3) throw Error(i2(188));
      return n3.stateNode.current === n3 ? e4 : t3;
    }
    function p2(e4) {
      var t3 = e4.tag;
      if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e4;
      for (e4 = e4.child; e4 !== null; ) {
        if (t3 = p2(e4), t3 !== null) return t3;
        e4 = e4.sibling;
      }
      return null;
    }
    function h2(e4, t3, n3, r3, i3, a3) {
      for (; e4 !== null; ) {
        if ((e4.tag === 5 || e4.tag === 27 || e4.tag === 6) && n3(e4, r3, i3, a3) || (e4.tag !== 22 || e4.memoizedState === null) && (t3 || e4.tag !== 5 && e4.tag !== 27) && h2(e4.child, t3, n3, r3, i3, a3)) return true;
        e4 = e4.sibling;
      }
      return false;
    }
    function g2(e4) {
      for (e4 = e4.return; e4 !== null; ) {
        if (e4.tag === 3 || e4.tag === 5 || e4.tag === 27) return e4;
        e4 = e4.return;
      }
      return null;
    }
    function _2(e4) {
      var t3 = false;
      for (e4 = e4.return; e4 !== null && (e4.tag === 4 && (t3 = true), e4.tag !== 3 && e4.tag !== 5 && e4.tag !== 27); ) e4 = e4.return;
      return t3;
    }
    function v2(e4) {
      var t3 = [null, null], n3 = g2(e4);
      return n3 === null || y2(t3, e4, n3.child, { foundSelf: false }), t3;
    }
    function y2(e4, t3, n3, r3) {
      for (; n3 !== null; ) {
        if (n3 === t3) r3.foundSelf = true;
        else if (n3.tag === 5 || n3.tag === 27 || n3.tag === 6) {
          if (r3.foundSelf) return e4[1] = n3, true;
          e4[0] = n3;
        } else if ((n3.tag !== 22 || n3.memoizedState === null) && y2(e4, t3, n3.child, r3)) return true;
        n3 = n3.sibling;
      }
      return false;
    }
    function b2(e4) {
      switch (e4.tag) {
        case 5:
        case 27:
        case 6:
          return e4.stateNode;
        case 3:
          return e4.stateNode.containerInfo;
        default:
          throw Error(i2(559));
      }
    }
    var ee2 = null, x2 = null;
    function te2(e4, t3, n3) {
      return e4 === n3 || e4 === t3 && (ee2 = e4, true);
    }
    function S2(e4, t3, n3) {
      return e4 === n3 ? (x2 = e4, false) : e4 === t3 && (x2 !== null && (ee2 = e4), true);
    }
    function C2(e4) {
      if (e4 === null) return null;
      do
        e4 = e4 === null ? null : e4.return;
      while (e4 && e4.tag !== 5 && e4.tag !== 27 && e4.tag !== 3);
      return e4 || null;
    }
    function ne2(e4, t3, n3) {
      for (var r3 = 0, i3 = e4; i3; i3 = n3(i3)) r3++;
      i3 = 0;
      for (var a3 = t3; a3; a3 = n3(a3)) i3++;
      for (; 0 < r3 - i3; ) e4 = n3(e4), r3--;
      for (; 0 < i3 - r3; ) t3 = n3(t3), i3--;
      for (; r3--; ) {
        if (e4 === t3 || t3 !== null && e4 === t3.alternate) return e4;
        e4 = n3(e4), t3 = n3(t3);
      }
      return null;
    }
    var w2 = Object.assign, T2 = /* @__PURE__ */ Symbol.for(`react.element`), re2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`), ie2 = /* @__PURE__ */ Symbol.for(`react.portal`), ae2 = /* @__PURE__ */ Symbol.for(`react.fragment`), oe2 = /* @__PURE__ */ Symbol.for(`react.strict_mode`), se2 = /* @__PURE__ */ Symbol.for(`react.profiler`), ce2 = /* @__PURE__ */ Symbol.for(`react.consumer`), le2 = /* @__PURE__ */ Symbol.for(`react.context`), E2 = /* @__PURE__ */ Symbol.for(`react.forward_ref`), ue2 = /* @__PURE__ */ Symbol.for(`react.suspense`), de2 = /* @__PURE__ */ Symbol.for(`react.suspense_list`), fe2 = /* @__PURE__ */ Symbol.for(`react.memo`), pe2 = /* @__PURE__ */ Symbol.for(`react.lazy`), me2 = /* @__PURE__ */ Symbol.for(`react.activity`), he2 = /* @__PURE__ */ Symbol.for(`react.legacy_hidden`), ge2 = /* @__PURE__ */ Symbol.for(`react.memo_cache_sentinel`), _e2 = /* @__PURE__ */ Symbol.for(`react.view_transition`), ve2 = /* @__PURE__ */ Symbol.for(`react.recoverable`), ye2 = Symbol.iterator;
    function be2(e4) {
      return typeof e4 != `object` || !e4 ? null : (e4 = ye2 && e4[ye2] || e4[`@@iterator`], typeof e4 == `function` ? e4 : null);
    }
    var xe2 = /* @__PURE__ */ Symbol.for(`react.client.reference`);
    function Se2(e4) {
      if (e4 == null) return null;
      if (typeof e4 == `function`) return e4.$$typeof === xe2 ? null : e4.displayName || e4.name || null;
      if (typeof e4 == `string`) return e4;
      switch (e4) {
        case ae2:
          return `Fragment`;
        case se2:
          return `Profiler`;
        case oe2:
          return `StrictMode`;
        case ue2:
          return `Suspense`;
        case de2:
          return `SuspenseList`;
        case me2:
          return `Activity`;
        case _e2:
          return `ViewTransition`;
      }
      if (typeof e4 == `object`) switch (e4.$$typeof) {
        case ie2:
          return `Portal`;
        case le2:
          return e4.displayName || `Context`;
        case ce2:
          return (e4._context.displayName || `Context`) + `.Consumer`;
        case E2:
          var t3 = e4.render;
          return e4 = e4.displayName, e4 ||= (e4 = t3.displayName || t3.name || ``, e4 === `` ? `ForwardRef` : `ForwardRef(` + e4 + `)`), e4;
        case fe2:
          return t3 = e4.displayName || null, t3 === null ? Se2(e4.type) || `Memo` : t3;
        case pe2:
          t3 = e4._payload, e4 = e4._init;
          try {
            return Se2(e4(t3));
          } catch {
          }
      }
      return null;
    }
    var Ce2 = Array.isArray, D2 = n2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O2 = r2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we2 = { pending: false, data: null, method: null, action: null }, Te2 = [], Ee2 = -1;
    function De2(e4) {
      return { current: e4 };
    }
    function Oe2(e4) {
      0 > Ee2 || (e4.current = Te2[Ee2], Te2[Ee2] = null, Ee2--);
    }
    function k2(e4, t3) {
      Ee2++, Te2[Ee2] = e4.current, e4.current = t3;
    }
    var ke2 = De2(null), Ae2 = De2(null), je2 = De2(null), Me2 = De2(null);
    function Ne2(e4, t3) {
      switch (k2(je2, t3), k2(Ae2, e4), k2(ke2, null), t3.nodeType) {
        case 9:
        case 11:
          e4 = (e4 = t3.documentElement) && (e4 = e4.namespaceURI) ? up(e4) : 0;
          break;
        default:
          if (e4 = t3.tagName, t3 = t3.namespaceURI) t3 = up(t3), e4 = dp(t3, e4);
          else switch (e4) {
            case `svg`:
              e4 = 1;
              break;
            case `math`:
              e4 = 2;
              break;
            default:
              e4 = 0;
          }
      }
      Oe2(ke2), k2(ke2, e4);
    }
    function Pe2() {
      Oe2(ke2), Oe2(Ae2), Oe2(je2);
    }
    function Fe2(e4) {
      var t3 = e4.memoizedState;
      t3 !== null && (sh._currentValue = t3.memoizedState, k2(Me2, e4)), t3 = ke2.current;
      var n3 = dp(t3, e4.type);
      t3 !== n3 && (k2(Ae2, e4), k2(ke2, n3));
    }
    function Ie2(e4) {
      Ae2.current === e4 && (Oe2(ke2), Oe2(Ae2)), Me2.current === e4 && (Oe2(Me2), sh._currentValue = we2);
    }
    var Le2, Re2;
    function ze2(e4) {
      if (Le2 === void 0) try {
        throw Error();
      } catch (e5) {
        var t3 = e5.stack.trim().match(/\n( *(at )?)/);
        Le2 = t3 && t3[1] || ``, Re2 = -1 < e5.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e5.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
      }
      return `
` + Le2 + e4 + Re2;
    }
    var Be2 = false;
    function Ve2(e4, t3) {
      if (!e4 || Be2) return ``;
      Be2 = true;
      var n3 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var r3 = { DetermineComponentFrameRoot: function() {
          try {
            if (t3) {
              var n4 = function() {
                throw Error();
              };
              if (Object.defineProperty(n4.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == `object` && Reflect.construct) {
                try {
                  Reflect.construct(n4, []);
                } catch (e5) {
                  var r4 = e5;
                }
                Reflect.construct(e4, [], n4);
              } else {
                try {
                  n4.call();
                } catch (e5) {
                  r4 = e5;
                }
                n4 = false;
                try {
                  var i4 = Object.getOwnPropertyDescriptor(e4.prototype, `props`);
                  Object.defineProperty(e4.prototype, "props", { configurable: true, set: function() {
                    throw Error();
                  } }), n4 = true, new e4();
                } finally {
                  n4 && (i4 === void 0 ? delete e4.prototype.props : Object.defineProperty(e4.prototype, "props", i4));
                }
              }
            } else {
              try {
                throw Error();
              } catch (e5) {
                r4 = e5;
              }
              (n4 = e4()) && typeof n4.catch == `function` && n4.catch(function() {
              });
            }
          } catch (e5) {
            if (e5 && r4 && typeof e5.stack == `string`) return [e5.stack, r4.stack];
          }
          return [null, null];
        } };
        r3.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i3 = Object.getOwnPropertyDescriptor(r3.DetermineComponentFrameRoot, `name`);
        i3 && i3.configurable && Object.defineProperty(r3.DetermineComponentFrameRoot, "name", { value: `DetermineComponentFrameRoot` });
        var a3 = r3.DetermineComponentFrameRoot(), o3 = a3[0], s3 = a3[1];
        if (o3 && s3) {
          var c3 = o3.split(`
`), l3 = s3.split(`
`);
          for (i3 = r3 = 0; r3 < c3.length && !c3[r3].includes(`DetermineComponentFrameRoot`); ) r3++;
          for (; i3 < l3.length && !l3[i3].includes(`DetermineComponentFrameRoot`); ) i3++;
          if (r3 === c3.length || i3 === l3.length) for (r3 = c3.length - 1, i3 = l3.length - 1; 1 <= r3 && 0 <= i3 && c3[r3] !== l3[i3]; ) i3--;
          for (; 1 <= r3 && 0 <= i3; r3--, i3--) if (c3[r3] !== l3[i3]) {
            if (r3 !== 1 || i3 !== 1) do
              if (r3--, i3--, 0 > i3 || c3[r3] !== l3[i3]) {
                var u2 = `
` + c3[r3].replace(` at new `, ` at `);
                return e4.displayName && u2.includes(`<anonymous>`) && (u2 = u2.replace(`<anonymous>`, e4.displayName)), u2;
              }
            while (1 <= r3 && 0 <= i3);
            break;
          }
        }
      } finally {
        Be2 = false, Error.prepareStackTrace = n3;
      }
      return (n3 = e4 ? e4.displayName || e4.name : ``) ? ze2(n3) : ``;
    }
    function He2(e4, t3) {
      switch (e4.tag) {
        case 26:
        case 27:
        case 5:
          return ze2(e4.type);
        case 16:
          return ze2(`Lazy`);
        case 13:
          return e4.child !== t3 && t3 !== null ? ze2(`Suspense Fallback`) : ze2(`Suspense`);
        case 19:
          return ze2(`SuspenseList`);
        case 0:
        case 15:
          return Ve2(e4.type, false);
        case 11:
          return Ve2(e4.type.render, false);
        case 1:
          return Ve2(e4.type, true);
        case 31:
          return ze2(`Activity`);
        case 30:
          return ze2(`ViewTransition`);
        default:
          return ``;
      }
    }
    function Ue2(e4) {
      try {
        var t3 = ``, n3 = null;
        do
          t3 += He2(e4, n3), n3 = e4, e4 = e4.return;
        while (e4);
        return t3;
      } catch (e5) {
        return `
Error generating stack: ` + e5.message + `
` + e5.stack;
      }
    }
    var We2 = Object.prototype.hasOwnProperty, Ge2 = t2.unstable_scheduleCallback, Ke2 = t2.unstable_cancelCallback, qe2 = t2.unstable_shouldYield, A2 = t2.unstable_requestPaint, j2 = t2.unstable_now, Je2 = t2.unstable_getCurrentPriorityLevel, Ye2 = t2.unstable_ImmediatePriority, Xe2 = t2.unstable_UserBlockingPriority, Ze2 = t2.unstable_NormalPriority, Qe2 = t2.unstable_LowPriority, $e2 = t2.unstable_IdlePriority, et2 = t2.log, tt2 = t2.unstable_setDisableYieldValue, nt2 = null, rt2 = null;
    function M2(e4) {
      if (typeof et2 == `function` && tt2(e4), rt2 && typeof rt2.setStrictMode == `function`) try {
        rt2.setStrictMode(nt2, e4);
      } catch {
      }
    }
    var it2 = Math.clz32 ? Math.clz32 : st2, at2 = Math.log, ot2 = Math.LN2;
    function st2(e4) {
      return e4 >>>= 0, e4 === 0 ? 32 : 31 - (at2(e4) / ot2 | 0) | 0;
    }
    var ct2 = 256, lt2 = 262144, ut2 = 4194304;
    function N2(e4) {
      var t3 = e4 & 42;
      if (t3 !== 0) return t3;
      switch (e4 & -e4) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e4 & -e4;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e4 & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e4 & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e4;
      }
    }
    function dt2(e4, t3, n3) {
      var r3 = e4.pendingLanes;
      if (r3 === 0) return 0;
      var i3 = 0, a3 = e4.suspendedLanes, o3 = e4.pingedLanes;
      e4 = e4.warmLanes;
      var s3 = r3 & 134217727;
      return s3 === 0 ? (s3 = r3 & ~a3, s3 === 0 ? o3 === 0 ? n3 || (n3 = r3 & ~e4, n3 !== 0 && (i3 = N2(n3))) : i3 = N2(o3) : i3 = N2(s3)) : (r3 = s3 & ~a3, r3 === 0 ? (o3 &= s3, o3 === 0 ? n3 || (n3 = s3 & ~e4, n3 !== 0 && (i3 = N2(n3))) : i3 = N2(o3)) : i3 = N2(r3)), i3 === 0 ? 0 : t3 !== 0 && t3 !== i3 && (t3 & a3) === 0 && (a3 = i3 & -i3, n3 = t3 & -t3, a3 >= n3 || a3 === 32 && n3 & 4194048) ? t3 : i3;
    }
    function ft2(e4, t3) {
      return (e4.pendingLanes & ~(e4.suspendedLanes & ~e4.pingedLanes) & t3) === 0;
    }
    function pt2(e4, t3) {
      t3 & 8 && (t3 |= t3 & 32);
      var n3 = e4.entangledLanes;
      if (n3 !== 0) for (e4 = e4.entanglements, n3 &= t3; 0 < n3; ) {
        var r3 = 31 - it2(n3), i3 = 1 << r3;
        t3 |= e4[r3], n3 &= ~i3;
      }
      return t3;
    }
    function mt2(e4, t3) {
      switch (e4) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t3 + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t3 + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function ht2() {
      var e4 = ut2;
      return ut2 <<= 1, !(ut2 & 62914560) && (ut2 = 4194304), e4;
    }
    function gt2(e4) {
      for (var t3 = [], n3 = 0; 31 > n3; n3++) t3.push(e4);
      return t3;
    }
    function _t2(e4, t3) {
      e4.pendingLanes |= t3, t3 !== 268435456 && (e4.suspendedLanes = 0, e4.pingedLanes = 0, e4.warmLanes = 0);
    }
    function vt2(e4, t3, n3, r3, i3, a3) {
      var o3 = e4.pendingLanes;
      e4.pendingLanes = n3, e4.suspendedLanes = 0, e4.pingedLanes = 0, e4.warmLanes = 0, e4.expiredLanes &= n3, e4.entangledLanes &= n3, e4.errorRecoveryDisabledLanes &= n3, e4.shellSuspendCounter = 0;
      var s3 = e4.entanglements, c3 = e4.expirationTimes, l3 = e4.hiddenUpdates;
      for (n3 = o3 & ~n3; 0 < n3; ) {
        var u2 = 31 - it2(n3), d3 = 1 << u2;
        s3[u2] = 0, c3[u2] = -1;
        var f2 = l3[u2];
        if (f2 !== null) for (l3[u2] = null, u2 = 0; u2 < f2.length; u2++) {
          var p3 = f2[u2];
          p3 !== null && (p3.lane &= -536870913);
        }
        n3 &= ~d3;
      }
      r3 !== 0 && yt2(e4, r3, 0), a3 !== 0 && i3 === 0 && e4.tag !== 0 && (e4.suspendedLanes |= a3 & ~(o3 & ~t3));
    }
    function yt2(e4, t3, n3) {
      e4.pendingLanes |= t3, e4.suspendedLanes &= ~t3;
      var r3 = 31 - it2(t3);
      e4.entangledLanes |= t3, e4.entanglements[r3] = e4.entanglements[r3] | 1073741824 | n3 & 261930;
    }
    function bt2(e4, t3) {
      var n3 = e4.entangledLanes |= t3;
      for (e4 = e4.entanglements; n3; ) {
        var r3 = 31 - it2(n3), i3 = 1 << r3;
        i3 & t3 | e4[r3] & t3 && (e4[r3] |= t3), n3 &= ~i3;
      }
    }
    function xt2(e4, t3) {
      var n3 = t3 & -t3;
      return n3 = n3 & 42 ? 1 : St2(n3), (n3 & (e4.suspendedLanes | t3)) === 0 ? n3 : 0;
    }
    function St2(e4) {
      switch (e4) {
        case 2:
          e4 = 1;
          break;
        case 8:
          e4 = 4;
          break;
        case 32:
          e4 = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e4 = 128;
          break;
        case 268435456:
          e4 = 134217728;
          break;
        default:
          e4 = 0;
      }
      return e4;
    }
    function Ct2(e4) {
      return e4 &= -e4, 2 < e4 ? 8 < e4 ? e4 & 134217727 ? 32 : 268435456 : 8 : 2;
    }
    function wt2() {
      var e4 = O2.p;
      return e4 === 0 ? (e4 = window.event, e4 === void 0 ? 32 : Ch(e4.type)) : e4;
    }
    function Tt2(e4, t3) {
      var n3 = O2.p;
      try {
        return O2.p = e4, t3();
      } finally {
        O2.p = n3;
      }
    }
    var Et2 = Math.random().toString(36).slice(2), Dt2 = `__reactFiber$` + Et2, Ot2 = `__reactProps$` + Et2, kt2 = `__reactContainer$` + Et2, At2 = `__reactEvents$` + Et2, jt2 = `__reactListeners$` + Et2, Mt2 = `__reactHandles$` + Et2, Nt2 = `__reactResources$` + Et2, P2 = `__reactMarker$` + Et2, F2 = `__reactLoad$` + Et2;
    function Pt2(e4) {
      delete e4[Dt2], delete e4[Ot2], delete e4[jt2], delete e4[Mt2];
    }
    function Ft2(e4) {
      var t3;
      if (t3 = e4[Dt2]) return t3;
      for (var n3 = e4.parentNode; n3; ) {
        if (t3 = n3[kt2] || n3[Dt2]) {
          if (n3 = t3.alternate, t3.child !== null || n3 !== null && n3.child !== null) for (e4 = fm(e4); e4 !== null; ) {
            if (n3 = e4[Dt2]) return n3;
            e4 = fm(e4);
          }
          return t3;
        }
        e4 = n3, n3 = e4.parentNode;
      }
      return null;
    }
    function It2(e4) {
      if (e4 = e4[Dt2] || e4[kt2]) {
        var t3 = e4.tag;
        if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3) return e4;
      }
      return null;
    }
    function Lt2(e4) {
      var t3 = e4.tag;
      if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6) return e4.stateNode;
      throw Error(i2(33));
    }
    function Rt2(e4) {
      var t3 = e4[Nt2];
      return t3 ||= e4[Nt2] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }, t3;
    }
    function zt2(e4) {
      e4[P2] = true;
    }
    function Bt2(e4) {
      e4[F2] = void 0;
    }
    var Vt2 = /* @__PURE__ */ new Set(), Ht2 = {};
    function Ut2(e4, t3) {
      Wt2(e4, t3), Wt2(e4 + `Capture`, t3);
    }
    function Wt2(e4, t3) {
      for (Ht2[e4] = t3, e4 = 0; e4 < t3.length; e4++) Vt2.add(t3[e4]);
    }
    var Gt2 = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), Kt2 = {}, qt2 = {};
    function Jt2(e4) {
      return We2.call(qt2, e4) ? true : We2.call(Kt2, e4) ? false : Gt2.test(e4) ? qt2[e4] = true : (Kt2[e4] = true, false);
    }
    var I2 = false;
    function Yt2() {
      var e4 = I2;
      return I2 = false, e4;
    }
    function Xt2(e4, t3, n3) {
      if (Jt2(t3)) {
        if (n3 === null) e4.removeAttribute(t3);
        else {
          switch (typeof n3) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e4.removeAttribute(t3);
              return;
            case `boolean`:
              var r3 = t3.toLowerCase().slice(0, 5);
              if (r3 !== `data-` && r3 !== `aria-`) {
                e4.removeAttribute(t3);
                return;
              }
          }
          e4.setAttribute(t3, n3);
        }
      }
    }
    function Zt2(e4, t3, n3) {
      if (n3 === null) e4.removeAttribute(t3);
      else {
        switch (typeof n3) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e4.removeAttribute(t3);
            return;
        }
        e4.setAttribute(t3, n3);
      }
    }
    function Qt2(e4, t3, n3, r3) {
      if (r3 === null) e4.removeAttribute(n3);
      else {
        switch (typeof r3) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e4.removeAttribute(n3);
            return;
        }
        e4.setAttributeNS(t3, n3, r3);
      }
    }
    function $t2(e4) {
      switch (typeof e4) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e4;
        case `object`:
          return e4;
        default:
          return ``;
      }
    }
    function en2(e4) {
      var t3 = e4.type;
      return (e4 = e4.nodeName) && e4.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
    }
    function tn2(e4, t3, n3) {
      var r3 = Object.getOwnPropertyDescriptor(e4.constructor.prototype, t3);
      if (!e4.hasOwnProperty(t3) && r3 !== void 0 && typeof r3.get == `function` && typeof r3.set == `function`) {
        var i3 = r3.get, a3 = r3.set;
        return Object.defineProperty(e4, t3, { configurable: true, get: function() {
          return i3.call(this);
        }, set: function(e5) {
          n3 = `` + e5, a3.call(this, e5);
        } }), Object.defineProperty(e4, t3, { enumerable: r3.enumerable }), { getValue: function() {
          return n3;
        }, setValue: function(e5) {
          n3 = `` + e5;
        }, stopTracking: function() {
          e4._valueTracker = null, delete e4[t3];
        } };
      }
    }
    function nn2(e4) {
      if (!e4._valueTracker) {
        var t3 = en2(e4) ? `checked` : `value`;
        e4._valueTracker = tn2(e4, t3, `` + e4[t3]);
      }
    }
    function rn2(e4) {
      if (!e4) return false;
      var t3 = e4._valueTracker;
      if (!t3) return true;
      var n3 = t3.getValue(), r3 = ``;
      return e4 && (r3 = en2(e4) ? e4.checked ? `true` : `false` : e4.value), e4 = r3, e4 !== n3 && (t3.setValue(e4), true);
    }
    var an2 = /[\n"\\]/g;
    function on2(e4) {
      return e4.replace(an2, function(e5) {
        return `\\` + e5.charCodeAt(0).toString(16) + ` `;
      });
    }
    function sn2(e4, t3, n3, r3, i3, a3, o3, s3) {
      e4.name = ``, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` ? e4.type = o3 : e4.removeAttribute(`type`), t3 == null ? o3 !== `submit` && o3 !== `reset` || e4.removeAttribute(`value`) : o3 === `number` ? (t3 === 0 && e4.value === `` || e4.value != t3) && (e4.value = `` + $t2(t3)) : e4.value !== `` + $t2(t3) && (e4.value = `` + $t2(t3)), t3 == null ? n3 == null ? r3 != null && e4.removeAttribute(`value`) : ln2(e4, $t2(n3)) : o3 === `number` && e4.value == t3 ? ln2(e4, $t2(e4.value)) : ln2(e4, $t2(t3)), i3 == null && a3 != null && (e4.defaultChecked = !!a3), i3 != null && (e4.checked = i3 && typeof i3 != `function` && typeof i3 != `symbol`), s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean` ? e4.name = `` + $t2(s3) : e4.removeAttribute(`name`);
    }
    function cn2(e4, t3, n3, r3, i3, a3, o3, s3) {
      if (a3 != null && typeof a3 != `function` && typeof a3 != `symbol` && typeof a3 != `boolean` && (e4.type = a3), t3 != null || n3 != null) {
        if (!(a3 !== `submit` && a3 !== `reset` || t3 != null)) {
          nn2(e4);
          return;
        }
        n3 = n3 == null ? `` : `` + $t2(n3), t3 = t3 == null ? n3 : `` + $t2(t3), s3 || t3 === e4.value || (e4.value = t3), e4.defaultValue = t3;
      }
      r3 ??= i3, r3 = typeof r3 != `function` && typeof r3 != `symbol` && !!r3, e4.checked = s3 ? e4.checked : !!r3, e4.defaultChecked = !!r3, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` && (e4.name = o3), nn2(e4);
    }
    function ln2(e4, t3) {
      e4.defaultValue !== `` + t3 && (e4.defaultValue = `` + t3);
    }
    function un2(e4, t3, n3, r3) {
      if (e4 = e4.options, t3) {
        t3 = {};
        for (var i3 = 0; i3 < n3.length; i3++) t3[`$` + n3[i3]] = true;
        for (n3 = 0; n3 < e4.length; n3++) i3 = t3.hasOwnProperty(`$` + e4[n3].value), e4[n3].selected !== i3 && (e4[n3].selected = i3), i3 && r3 && (e4[n3].defaultSelected = true);
      } else {
        for (n3 = `` + $t2(n3), t3 = null, i3 = 0; i3 < e4.length; i3++) {
          if (e4[i3].value === n3) {
            e4[i3].selected = true, r3 && (e4[i3].defaultSelected = true);
            return;
          }
          t3 !== null || e4[i3].disabled || (t3 = e4[i3]);
        }
        t3 !== null && (t3.selected = true);
      }
    }
    function dn2(e4, t3, n3) {
      t3 != null && (t3 = `` + $t2(t3), t3 !== e4.value && (e4.value = t3), n3 == null) ? e4.defaultValue !== t3 && (e4.defaultValue = t3) : e4.defaultValue = n3 == null ? `` : `` + $t2(n3);
    }
    function fn2(e4, t3, n3, r3) {
      if (t3 == null) {
        if (r3 != null) {
          if (n3 != null) throw Error(i2(92));
          if (Ce2(r3)) {
            if (1 < r3.length) throw Error(i2(93));
            r3 = r3[0];
          }
          n3 = r3;
        }
        n3 ??= ``, t3 = n3;
      }
      n3 = $t2(t3), e4.defaultValue = n3, r3 = e4.textContent, r3 === n3 && r3 !== `` && r3 !== null && (e4.value = r3), nn2(e4);
    }
    function pn2(e4, t3) {
      if (t3) {
        var n3 = e4.firstChild;
        if (n3 && n3 === e4.lastChild && n3.nodeType === 3) {
          n3.nodeValue = t3;
          return;
        }
      }
      e4.textContent = t3;
    }
    var mn2 = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
    function hn2(e4, t3, n3) {
      var r3 = t3.indexOf(`--`) === 0;
      n3 == null || typeof n3 == `boolean` || n3 === `` ? r3 ? e4.setProperty(t3, ``) : t3 === `float` ? e4.cssFloat = `` : e4[t3] = `` : r3 ? e4.setProperty(t3, n3) : typeof n3 != `number` || n3 === 0 || mn2.has(t3) ? t3 === `float` ? e4.cssFloat = n3 : e4[t3] = (`` + n3).trim() : e4[t3] = n3 + `px`;
    }
    function gn2(e4, t3, n3) {
      if (t3 != null && typeof t3 != `object`) throw Error(i2(62));
      if (e4 = e4.style, n3 != null) {
        for (var r3 in n3) !n3.hasOwnProperty(r3) || t3 != null && t3.hasOwnProperty(r3) || (r3.indexOf(`--`) === 0 ? e4.setProperty(r3, ``) : r3 === `float` ? e4.cssFloat = `` : e4[r3] = ``, I2 = true);
        for (var a3 in t3) r3 = t3[a3], t3.hasOwnProperty(a3) && n3[a3] !== r3 && (hn2(e4, a3, r3), I2 = true);
      } else for (var o3 in t3) t3.hasOwnProperty(o3) && hn2(e4, o3, t3[o3]);
    }
    function _n2(e4) {
      if (e4.indexOf(`-`) === -1) return false;
      switch (e4) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return false;
        default:
          return true;
      }
    }
    var vn2 = /* @__PURE__ */ new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), yn2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function bn2(e4) {
      return yn2.test(`` + e4) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e4;
    }
    function xn2() {
    }
    var Sn2 = null;
    function Cn2(e4) {
      return e4 = e4.target || e4.srcElement || window, e4.correspondingUseElement && (e4 = e4.correspondingUseElement), e4.nodeType === 3 ? e4.parentNode : e4;
    }
    var wn2 = null, Tn2 = null;
    function En2(e4) {
      var t3 = It2(e4);
      if (t3 && (e4 = t3.stateNode)) {
        var n3 = e4[Ot2] || null;
        a: switch (e4 = t3.stateNode, t3.type) {
          case `input`:
            if (sn2(e4, n3.value, n3.defaultValue, n3.defaultValue, n3.checked, n3.defaultChecked, n3.type, n3.name), t3 = n3.name, n3.type === `radio` && t3 != null) {
              for (n3 = e4; n3.parentNode; ) n3 = n3.parentNode;
              for (n3 = n3.querySelectorAll(`input[name="` + on2(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n3.length; t3++) {
                var r3 = n3[t3];
                if (r3 !== e4 && r3.form === e4.form) {
                  var a3 = r3[Ot2] || null;
                  if (!a3) throw Error(i2(90));
                  sn2(r3, a3.value, a3.defaultValue, a3.defaultValue, a3.checked, a3.defaultChecked, a3.type, a3.name);
                }
              }
              for (t3 = 0; t3 < n3.length; t3++) r3 = n3[t3], r3.form === e4.form && rn2(r3);
            }
            break a;
          case `textarea`:
            dn2(e4, n3.value, n3.defaultValue);
            break a;
          case `select`:
            t3 = n3.value, t3 != null && un2(e4, !!n3.multiple, t3, false);
        }
      }
    }
    var Dn2 = false;
    function On2(e4, t3, n3) {
      if (Dn2) return e4(t3, n3);
      Dn2 = true;
      try {
        return e4(t3);
      } finally {
        if (Dn2 = false, (wn2 !== null || Tn2 !== null) && (zd(), wn2 && (t3 = wn2, e4 = Tn2, Tn2 = wn2 = null, En2(t3), e4))) for (t3 = 0; t3 < e4.length; t3++) En2(e4[t3]);
      }
    }
    function kn2(e4, t3) {
      var n3 = e4.stateNode;
      if (n3 === null) return null;
      var r3 = n3[Ot2] || null;
      if (r3 === null) return null;
      n3 = r3[t3];
      a: switch (t3) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r3 = !r3.disabled) || (e4 = e4.type, r3 = e4 !== `button` && e4 !== `input` && e4 !== `select` && e4 !== `textarea`), e4 = !r3;
          break a;
        default:
          e4 = false;
      }
      if (e4) return null;
      if (n3 && typeof n3 != `function`) throw Error(i2(231, t3, typeof n3));
      return n3;
    }
    var An2 = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0, jn2 = false;
    if (An2) try {
      var Mn2 = {};
      Object.defineProperty(Mn2, "passive", { get: function() {
        jn2 = true;
      } }), window.addEventListener(`test`, Mn2, Mn2), window.removeEventListener(`test`, Mn2, Mn2);
    } catch {
      jn2 = false;
    }
    var Nn2 = null, Pn2 = null, Fn2 = null;
    function In2() {
      if (Fn2) return Fn2;
      var e4, t3 = Pn2, n3 = t3.length, r3, i3 = `value` in Nn2 ? Nn2.value : Nn2.textContent, a3 = i3.length;
      for (e4 = 0; e4 < n3 && t3[e4] === i3[e4]; e4++) ;
      var o3 = n3 - e4;
      for (r3 = 1; r3 <= o3 && t3[n3 - r3] === i3[a3 - r3]; r3++) ;
      return Fn2 = i3.slice(e4, 1 < r3 ? 1 - r3 : void 0);
    }
    function Ln2(e4) {
      var t3 = e4.keyCode;
      return `charCode` in e4 ? (e4 = e4.charCode, e4 === 0 && t3 === 13 && (e4 = 13)) : e4 = t3, e4 === 10 && (e4 = 13), 32 <= e4 || e4 === 13 ? e4 : 0;
    }
    function Rn2() {
      return true;
    }
    function zn2() {
      return false;
    }
    function Bn2(e4) {
      function t3(t4, n3, r3, i3, a3) {
        for (var o3 in this._reactName = t4, this._targetInst = r3, this.type = n3, this.nativeEvent = i3, this.target = a3, this.currentTarget = null, e4) e4.hasOwnProperty(o3) && (t4 = e4[o3], this[o3] = t4 ? t4(i3) : i3[o3]);
        return this.isDefaultPrevented = (i3.defaultPrevented == null ? false === i3.returnValue : i3.defaultPrevented) ? Rn2 : zn2, this.isPropagationStopped = zn2, this;
      }
      return w2(t3.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var e5 = this.nativeEvent;
        e5 && (e5.preventDefault ? e5.preventDefault() : typeof e5.returnValue != `unknown` && (e5.returnValue = false), this.isDefaultPrevented = Rn2);
      }, stopPropagation: function() {
        var e5 = this.nativeEvent;
        e5 && (e5.stopPropagation ? e5.stopPropagation() : typeof e5.cancelBubble != `unknown` && (e5.cancelBubble = true), this.isPropagationStopped = Rn2);
      }, persist: function() {
      }, isPersistent: Rn2 }), t3;
    }
    var Vn2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e4) {
      return e4.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, Hn2 = Bn2(Vn2), Un2 = w2({}, Vn2, { view: 0, detail: 0 }), Wn2 = Bn2(Un2), Gn2, Kn2, qn2, Jn2 = w2({}, Un2, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ar2, button: 0, buttons: 0, relatedTarget: function(e4) {
      return e4.relatedTarget === void 0 ? e4.fromElement === e4.srcElement ? e4.toElement : e4.fromElement : e4.relatedTarget;
    }, movementX: function(e4) {
      return `movementX` in e4 ? e4.movementX : (e4 !== qn2 && (qn2 && e4.type === `mousemove` ? (Gn2 = e4.screenX - qn2.screenX, Kn2 = e4.screenY - qn2.screenY) : Kn2 = Gn2 = 0, qn2 = e4), Gn2);
    }, movementY: function(e4) {
      return `movementY` in e4 ? e4.movementY : Kn2;
    } }), Yn2 = Bn2(Jn2), Xn2 = Bn2(w2({}, Jn2, { dataTransfer: 0 })), Zn2 = Bn2(w2({}, Un2, { relatedTarget: 0 })), Qn2 = Bn2(w2({}, Vn2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })), $n2 = Bn2(w2({}, Vn2, { clipboardData: function(e4) {
      return `clipboardData` in e4 ? e4.clipboardData : window.clipboardData;
    } })), er2 = Bn2(w2({}, Vn2, { data: 0 })), tr2 = { Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified` }, nr2 = { 8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta` }, rr2 = { Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey` };
    function ir2(e4) {
      var t3 = this.nativeEvent;
      return t3.getModifierState ? t3.getModifierState(e4) : (e4 = rr2[e4]) ? !!t3[e4] : false;
    }
    function ar2() {
      return ir2;
    }
    var or2 = Bn2(w2({}, Un2, { key: function(e4) {
      if (e4.key) {
        var t3 = tr2[e4.key] || e4.key;
        if (t3 !== `Unidentified`) return t3;
      }
      return e4.type === `keypress` ? (e4 = Ln2(e4), e4 === 13 ? `Enter` : String.fromCharCode(e4)) : e4.type === `keydown` || e4.type === `keyup` ? nr2[e4.keyCode] || `Unidentified` : ``;
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ar2, charCode: function(e4) {
      return e4.type === `keypress` ? Ln2(e4) : 0;
    }, keyCode: function(e4) {
      return e4.type === `keydown` || e4.type === `keyup` ? e4.keyCode : 0;
    }, which: function(e4) {
      return e4.type === `keypress` ? Ln2(e4) : e4.type === `keydown` || e4.type === `keyup` ? e4.keyCode : 0;
    } })), sr2 = Bn2(w2({}, Jn2, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 })), cr2 = Bn2(w2({}, Vn2, { submitter: 0 })), lr2 = Bn2(w2({}, Un2, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ar2 })), ur2 = Bn2(w2({}, Vn2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })), dr2 = Bn2(w2({}, Jn2, { deltaX: function(e4) {
      return `deltaX` in e4 ? e4.deltaX : `wheelDeltaX` in e4 ? -e4.wheelDeltaX : 0;
    }, deltaY: function(e4) {
      return `deltaY` in e4 ? e4.deltaY : `wheelDeltaY` in e4 ? -e4.wheelDeltaY : `wheelDelta` in e4 ? -e4.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 })), fr2 = Bn2(w2({}, Vn2, { newState: 0, oldState: 0, source: 0 })), pr2 = [9, 13, 27, 32], mr2 = An2 && `CompositionEvent` in window, hr2 = null;
    An2 && `documentMode` in document && (hr2 = document.documentMode);
    var gr2 = An2 && `TextEvent` in window && !hr2, _r2 = An2 && (!mr2 || hr2 && 8 < hr2 && 11 >= hr2), vr2 = ` `, yr2 = false;
    function br2(e4, t3) {
      switch (e4) {
        case `keyup`:
          return pr2.indexOf(t3.keyCode) !== -1;
        case `keydown`:
          return t3.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return true;
        default:
          return false;
      }
    }
    function xr2(e4) {
      return e4 = e4.detail, typeof e4 == `object` && `data` in e4 ? e4.data : null;
    }
    var L2 = false;
    function Sr2(e4, t3) {
      switch (e4) {
        case `compositionend`:
          return xr2(t3);
        case `keypress`:
          return t3.which === 32 ? (yr2 = true, vr2) : null;
        case `textInput`:
          return e4 = t3.data, e4 === vr2 && yr2 ? null : e4;
        default:
          return null;
      }
    }
    function Cr2(e4, t3) {
      if (L2) return e4 === `compositionend` || !mr2 && br2(e4, t3) ? (e4 = In2(), Fn2 = Pn2 = Nn2 = null, L2 = false, e4) : null;
      switch (e4) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
            if (t3.char && 1 < t3.char.length) return t3.char;
            if (t3.which) return String.fromCharCode(t3.which);
          }
          return null;
        case `compositionend`:
          return _r2 && t3.locale !== `ko` ? null : t3.data;
        default:
          return null;
      }
    }
    var wr2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function Tr2(e4) {
      var t3 = e4 && e4.nodeName && e4.nodeName.toLowerCase();
      return t3 === `input` ? !!wr2[e4.type] : t3 === `textarea`;
    }
    function Er2(e4, t3, n3, r3) {
      wn2 ? Tn2 ? Tn2.push(r3) : Tn2 = [r3] : wn2 = r3, t3 = Jf(t3, `onChange`), 0 < t3.length && (n3 = new Hn2(`onChange`, `change`, null, n3, r3), e4.push({ event: n3, listeners: t3 }));
    }
    var Dr2 = null, Or2 = null;
    function kr2(e4) {
      Vf(e4, 0);
    }
    function Ar2(e4) {
      if (rn2(Lt2(e4))) return e4;
    }
    function jr2(e4, t3) {
      if (e4 === `change`) return t3;
    }
    var Mr2 = false;
    if (An2) {
      var Nr2;
      if (An2) {
        var Pr2 = `oninput` in document;
        if (!Pr2) {
          var Fr2 = document.createElement(`div`);
          Fr2.setAttribute(`oninput`, `return;`), Pr2 = typeof Fr2.oninput == `function`;
        }
        Nr2 = Pr2;
      } else Nr2 = false;
      Mr2 = Nr2 && (!document.documentMode || 9 < document.documentMode);
    }
    function Ir2() {
      Dr2 && (Dr2.detachEvent(`onpropertychange`, Lr2), Or2 = Dr2 = null);
    }
    function Lr2(e4) {
      if (e4.propertyName === `value` && Ar2(Or2)) {
        var t3 = [];
        Er2(t3, Or2, e4, Cn2(e4)), On2(kr2, t3);
      }
    }
    function Rr2(e4, t3, n3) {
      e4 === `focusin` ? (Ir2(), Dr2 = t3, Or2 = n3, Dr2.attachEvent(`onpropertychange`, Lr2)) : e4 === `focusout` && Ir2();
    }
    function zr2(e4) {
      if (e4 === `selectionchange` || e4 === `keyup` || e4 === `keydown`) return Ar2(Or2);
    }
    function Br2(e4, t3) {
      if (e4 === `click`) return Ar2(t3);
    }
    function Vr2(e4, t3) {
      if (e4 === `input` || e4 === `change`) return Ar2(t3);
    }
    function Hr2(e4, t3) {
      return e4 === t3 && (e4 !== 0 || 1 / e4 == 1 / t3) || e4 !== e4 && t3 !== t3;
    }
    var Ur2 = typeof Object.is == `function` ? Object.is : Hr2;
    function Wr2(e4, t3) {
      if (Ur2(e4, t3)) return true;
      if (typeof e4 != `object` || !e4 || typeof t3 != `object` || !t3) return false;
      var n3 = Object.keys(e4), r3 = Object.keys(t3);
      if (n3.length !== r3.length) return false;
      for (r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3];
        if (!We2.call(t3, i3) || !Ur2(e4[i3], t3[i3])) return false;
      }
      return true;
    }
    function Gr2(e4) {
      if (e4 ||= typeof document < `u` ? document : void 0, e4 === void 0) return null;
      try {
        return e4.activeElement || e4.body;
      } catch {
        return e4.body;
      }
    }
    function Kr2(e4) {
      for (; e4 && e4.firstChild; ) e4 = e4.firstChild;
      return e4;
    }
    function qr2(e4, t3) {
      var n3 = Kr2(e4);
      e4 = 0;
      for (var r3; n3; ) {
        if (n3.nodeType === 3) {
          if (r3 = e4 + n3.textContent.length, e4 <= t3 && r3 >= t3) return { node: n3, offset: t3 - e4 };
          e4 = r3;
        }
        a: {
          for (; n3; ) {
            if (n3.nextSibling) {
              n3 = n3.nextSibling;
              break a;
            }
            n3 = n3.parentNode;
          }
          n3 = void 0;
        }
        n3 = Kr2(n3);
      }
    }
    function Jr2(e4, t3) {
      return e4 && t3 ? e4 === t3 ? true : e4 && e4.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? Jr2(e4, t3.parentNode) : `contains` in e4 ? e4.contains(t3) : e4.compareDocumentPosition ? !!(e4.compareDocumentPosition(t3) & 16) : false : false;
    }
    function Yr2(e4) {
      e4 = e4 != null && e4.ownerDocument != null && e4.ownerDocument.defaultView != null ? e4.ownerDocument.defaultView : window;
      for (var t3 = Gr2(e4.document); t3 instanceof e4.HTMLIFrameElement; ) {
        try {
          var n3 = typeof t3.contentWindow.location.href == `string`;
        } catch {
          n3 = false;
        }
        if (n3) e4 = t3.contentWindow;
        else break;
        t3 = Gr2(e4.document);
      }
      return t3;
    }
    function Xr2(e4) {
      var t3 = e4 && e4.nodeName && e4.nodeName.toLowerCase();
      return t3 && (t3 === `input` && (e4.type === `text` || e4.type === `search` || e4.type === `tel` || e4.type === `url` || e4.type === `password`) || t3 === `textarea` || e4.contentEditable === `true`);
    }
    var Zr2 = An2 && `documentMode` in document && 11 >= document.documentMode, Qr2 = null, $r2 = null, ei2 = null, ti2 = false;
    function ni2(e4, t3, n3) {
      var r3 = n3.window === n3 ? n3.document : n3.nodeType === 9 ? n3 : n3.ownerDocument;
      ti2 || Qr2 == null || Qr2 !== Gr2(r3) || (r3 = Qr2, `selectionStart` in r3 && Xr2(r3) ? r3 = { start: r3.selectionStart, end: r3.selectionEnd } : (r3 = (r3.ownerDocument && r3.ownerDocument.defaultView || window).getSelection(), r3 = { anchorNode: r3.anchorNode, anchorOffset: r3.anchorOffset, focusNode: r3.focusNode, focusOffset: r3.focusOffset }), ei2 && Wr2(ei2, r3) || (ei2 = r3, r3 = Jf($r2, `onSelect`), 0 < r3.length && (t3 = new Hn2(`onSelect`, `select`, null, t3, n3), e4.push({ event: t3, listeners: r3 }), t3.target = Qr2)));
    }
    function ri2(e4, t3) {
      var n3 = {};
      return n3[e4.toLowerCase()] = t3.toLowerCase(), n3[`Webkit` + e4] = `webkit` + t3, n3[`Moz` + e4] = `moz` + t3, n3;
    }
    var ii2 = { animationend: ri2(`Animation`, `AnimationEnd`), animationiteration: ri2(`Animation`, `AnimationIteration`), animationstart: ri2(`Animation`, `AnimationStart`), transitionrun: ri2(`Transition`, `TransitionRun`), transitionstart: ri2(`Transition`, `TransitionStart`), transitioncancel: ri2(`Transition`, `TransitionCancel`), transitionend: ri2(`Transition`, `TransitionEnd`) }, ai2 = {}, oi2 = {};
    An2 && (oi2 = document.createElement(`div`).style, `AnimationEvent` in window || (delete ii2.animationend.animation, delete ii2.animationiteration.animation, delete ii2.animationstart.animation), `TransitionEvent` in window || delete ii2.transitionend.transition);
    function si2(e4) {
      if (ai2[e4]) return ai2[e4];
      if (!ii2[e4]) return e4;
      var t3 = ii2[e4], n3;
      for (n3 in t3) if (t3.hasOwnProperty(n3) && n3 in oi2) return ai2[e4] = t3[n3];
      return e4;
    }
    var ci2 = si2(`animationend`), li2 = si2(`animationiteration`), ui2 = si2(`animationstart`), di2 = si2(`transitionrun`), fi2 = si2(`transitionstart`), pi2 = si2(`transitioncancel`), mi2 = si2(`transitionend`), hi2 = /* @__PURE__ */ new Map(), gi2 = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
    gi2.push(`scrollEnd`);
    function _i2(e4, t3) {
      hi2.set(e4, t3), Ut2(t3, [e4]);
    }
    var vi2 = 0;
    function yi2(e4, t3) {
      if (e4.name != null && e4.name !== `auto`) return e4.name;
      if (t3.autoName !== null) return t3.autoName;
      e4 = bd.identifierPrefix;
      var n3 = vi2++;
      return e4 = `_` + e4 + `t_` + n3.toString(32) + `_`, t3.autoName = e4;
    }
    function bi2(e4) {
      if (e4 == null || typeof e4 == `string`) return e4;
      var t3 = null, n3 = Od;
      if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
        var i3 = e4[n3[r3]];
        if (i3 != null) {
          if (i3 === `none`) return `none`;
          t3 = t3 == null ? i3 : t3 + (` ` + i3);
        }
      }
      return t3 ?? e4.default;
    }
    function xi2(e4, t3) {
      return e4 = bi2(e4), t3 = bi2(t3), t3 == null ? e4 === `auto` ? null : e4 : t3 === `auto` ? null : t3;
    }
    var Si2 = typeof reportError == `function` ? reportError : function(e4) {
      if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
        var t3 = new window.ErrorEvent(`error`, { bubbles: true, cancelable: true, message: typeof e4 == `object` && e4 && typeof e4.message == `string` ? String(e4.message) : String(e4), error: e4 });
        if (!window.dispatchEvent(t3)) return;
      } else if (typeof process == `object` && typeof process.emit == `function`) {
        process.emit(`uncaughtException`, e4);
        return;
      }
      console.error(e4);
    }, Ci2 = [], wi2 = 0, Ti2 = 0;
    function Ei2() {
      for (var e4 = wi2, t3 = Ti2 = wi2 = 0; t3 < e4; ) {
        var n3 = Ci2[t3];
        Ci2[t3++] = null;
        var r3 = Ci2[t3];
        Ci2[t3++] = null;
        var i3 = Ci2[t3];
        Ci2[t3++] = null;
        var a3 = Ci2[t3];
        if (Ci2[t3++] = null, r3 !== null && i3 !== null) {
          var o3 = r3.pending;
          o3 === null ? i3.next = i3 : (i3.next = o3.next, o3.next = i3), r3.pending = i3;
        }
        a3 !== 0 && Ai2(n3, i3, a3);
      }
    }
    function Di2(e4, t3, n3, r3) {
      Ci2[wi2++] = e4, Ci2[wi2++] = t3, Ci2[wi2++] = n3, Ci2[wi2++] = r3, Ti2 |= r3, e4.lanes |= r3, e4 = e4.alternate, e4 !== null && (e4.lanes |= r3);
    }
    function Oi2(e4, t3, n3, r3) {
      return Di2(e4, t3, n3, r3), ji2(e4);
    }
    function ki2(e4, t3) {
      return Di2(e4, null, null, t3), ji2(e4);
    }
    function Ai2(e4, t3, n3) {
      e4.lanes |= n3;
      var r3 = e4.alternate;
      r3 !== null && (r3.lanes |= n3);
      for (var i3 = false, a3 = e4.return; a3 !== null; ) a3.childLanes |= n3, r3 = a3.alternate, r3 !== null && (r3.childLanes |= n3), a3.tag === 22 && (e4 = a3.stateNode, e4 === null || e4._visibility & 1 || (i3 = true)), e4 = a3, a3 = a3.return;
      return e4.tag === 3 ? (a3 = e4.stateNode, i3 && t3 !== null && (i3 = 31 - it2(n3), e4 = a3.hiddenUpdates, r3 = e4[i3], r3 === null ? e4[i3] = [t3] : r3.push(t3), t3.lane = n3 | 536870912), a3) : null;
    }
    function ji2(e4) {
      if (50 < kd) throw kd = 0, Ad = null, Error(i2(185));
      for (var t3 = e4.return; t3 !== null; ) e4 = t3, t3 = e4.return;
      return e4.tag === 3 ? e4.stateNode : null;
    }
    var Mi2 = {};
    function Ni2(e4, t3, n3, r3) {
      this.tag = e4, this.key = n3, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r3, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function Pi2(e4, t3, n3, r3) {
      return new Ni2(e4, t3, n3, r3);
    }
    function Fi2(e4) {
      return e4 = e4.prototype, !(!e4 || !e4.isReactComponent);
    }
    function Ii2(e4, t3) {
      var n3 = e4.alternate;
      return n3 === null ? (n3 = Pi2(e4.tag, t3, e4.key, e4.mode), n3.elementType = e4.elementType, n3.type = e4.type, n3.stateNode = e4.stateNode, n3.alternate = e4, e4.alternate = n3) : (n3.pendingProps = t3, n3.type = e4.type, n3.flags = 0, n3.subtreeFlags = 0, n3.deletions = null), n3.flags = e4.flags & 1206910976, n3.childLanes = e4.childLanes, n3.lanes = e4.lanes, n3.child = e4.child, n3.memoizedProps = e4.memoizedProps, n3.memoizedState = e4.memoizedState, n3.updateQueue = e4.updateQueue, t3 = e4.dependencies, n3.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }, n3.sibling = e4.sibling, n3.index = e4.index, n3.ref = e4.ref, n3.refCleanup = e4.refCleanup, n3;
    }
    function Li2(e4, t3) {
      e4.flags &= 1206910978;
      var n3 = e4.alternate;
      return n3 === null ? (e4.childLanes = 0, e4.lanes = t3, e4.child = null, e4.subtreeFlags = 0, e4.memoizedProps = null, e4.memoizedState = null, e4.updateQueue = null, e4.dependencies = null, e4.stateNode = null) : (e4.childLanes = n3.childLanes, e4.lanes = n3.lanes, e4.child = n3.child, e4.subtreeFlags = 0, e4.deletions = null, e4.memoizedProps = n3.memoizedProps, e4.memoizedState = n3.memoizedState, e4.updateQueue = n3.updateQueue, e4.type = n3.type, t3 = n3.dependencies, e4.dependencies = t3 === null ? null : { lanes: t3.lanes, firstContext: t3.firstContext }), e4;
    }
    function Ri2(e4, t3, n3, r3, a3, o3) {
      var s3 = 0;
      if (r3 = e4, typeof r3 == `function`) Fi2(r3) && (s3 = 1);
      else if (typeof r3 == `string`) s3 = qm(e4, n3, ke2.current) ? 26 : e4 === `html` || e4 === `head` || e4 === `body` ? 27 : 5;
      else a: switch (r3) {
        case me2:
          return e4 = Pi2(31, n3, t3, a3), e4.elementType = me2, e4.lanes = o3, e4;
        case ae2:
          return zi2(n3.children, a3, o3, t3);
        case oe2:
          s3 = 8, a3 |= 24;
          break;
        case se2:
          return e4 = Pi2(12, n3, t3, a3 | 2), e4.elementType = se2, e4.lanes = o3, e4;
        case ue2:
          return e4 = Pi2(13, n3, t3, a3), e4.elementType = ue2, e4.lanes = o3, e4;
        case de2:
          return e4 = Pi2(19, n3, t3, a3), e4.elementType = de2, e4.lanes = o3, e4;
        case he2:
        case _e2:
          return e4 = a3 | 32, e4 = Pi2(30, n3, t3, e4), e4.elementType = _e2, e4.lanes = o3, e4.stateNode = { autoName: null, paired: null, clones: null, ref: null }, e4;
        default:
          if (typeof r3 == `object` && r3) switch (r3.$$typeof) {
            case le2:
              s3 = 10;
              break a;
            case ce2:
              s3 = 9;
              break a;
            case E2:
              s3 = 11;
              break a;
            case fe2:
              s3 = 14;
              break a;
            case pe2:
              s3 = 16, r3 = null;
              break a;
          }
          s3 = 29, n3 = Error(i2(130, e4 === null ? `null` : typeof e4, ``)), r3 = null;
      }
      return t3 = Pi2(s3, n3, t3, a3), t3.elementType = e4, t3.type = r3, t3.lanes = o3, t3;
    }
    function zi2(e4, t3, n3, r3) {
      return e4 = Pi2(7, e4, r3, t3), e4.lanes = n3, e4;
    }
    function Bi2(e4, t3, n3) {
      return e4 = Pi2(6, e4, null, t3), e4.lanes = n3, e4;
    }
    function Vi2(e4) {
      var t3 = Pi2(18, null, null, 0);
      return t3.stateNode = e4, t3;
    }
    function Hi2(e4, t3, n3) {
      return t3 = Pi2(4, e4.children === null ? [] : e4.children, e4.key, t3), t3.lanes = n3, t3.stateNode = { containerInfo: e4.containerInfo, pendingChildren: null, implementation: e4.implementation }, t3;
    }
    var Ui2 = /* @__PURE__ */ new WeakMap();
    function Wi2(e4, t3) {
      if (typeof e4 == `object` && e4) {
        var n3 = Ui2.get(e4);
        return n3 === void 0 ? (t3 = { value: e4, source: t3, stack: Ue2(t3) }, Ui2.set(e4, t3), t3) : n3;
      }
      return { value: e4, source: t3, stack: Ue2(t3) };
    }
    var Gi2 = [], Ki2 = 0, qi2 = null, Ji2 = 0, Yi2 = [], Xi2 = 0, Zi2 = null, Qi2 = 1, $i2 = ``;
    function ea2(e4, t3) {
      Gi2[Ki2++] = Ji2, Gi2[Ki2++] = qi2, qi2 = e4, Ji2 = t3;
    }
    function ta2(e4, t3, n3) {
      Yi2[Xi2++] = Qi2, Yi2[Xi2++] = $i2, Yi2[Xi2++] = Zi2, Zi2 = e4;
      var r3 = Qi2;
      e4 = $i2;
      var i3 = 32 - it2(r3) - 1;
      r3 &= ~(1 << i3), n3 += 1;
      var a3 = 32 - it2(t3) + i3;
      if (30 < a3) {
        var o3 = i3 - i3 % 5;
        a3 = (r3 & (1 << o3) - 1).toString(32), r3 >>= o3, i3 -= o3, Qi2 = 1 << 32 - it2(t3) + i3 | n3 << i3 | r3, $i2 = a3 + e4;
      } else Qi2 = 1 << a3 | n3 << i3 | r3, $i2 = e4;
    }
    function na2(e4) {
      e4.return !== null && (ea2(e4, 1), ta2(e4, 1, 0));
    }
    function ra2(e4) {
      for (; e4 === qi2; ) qi2 = Gi2[--Ki2], Gi2[Ki2] = null, Ji2 = Gi2[--Ki2], Gi2[Ki2] = null;
      for (; e4 === Zi2; ) Zi2 = Yi2[--Xi2], Yi2[Xi2] = null, $i2 = Yi2[--Xi2], Yi2[Xi2] = null, Qi2 = Yi2[--Xi2], Yi2[Xi2] = null;
    }
    function ia2(e4, t3) {
      Yi2[Xi2++] = Qi2, Yi2[Xi2++] = $i2, Yi2[Xi2++] = Zi2, Qi2 = t3.id, $i2 = t3.overflow, Zi2 = e4;
    }
    var aa2 = null, R2 = null, z2 = false, oa2 = null, sa2 = false, ca2 = Error(i2(519));
    function la2(e4) {
      throw ha2(Wi2(Error(i2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e4)), ca2;
    }
    function ua2(e4) {
      var t3 = e4.stateNode, n3 = e4.type, r3 = e4.memoizedProps;
      switch (t3[Dt2] = e4, t3[Ot2] = r3, n3) {
        case `dialog`:
          Q(`cancel`, t3), Q(`close`, t3);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t3);
          break;
        case `video`:
        case `audio`:
          for (n3 = 0; n3 < zf.length; n3++) Q(zf[n3], t3);
          break;
        case `source`:
          Q(`error`, t3);
          break;
        case `img`:
        case `image`:
        case `link`:
          Q(`error`, t3), Q(`load`, t3);
          break;
        case `details`:
          Q(`toggle`, t3);
          break;
        case `input`:
          Q(`invalid`, t3), cn2(t3, r3.value, r3.defaultValue, r3.checked, r3.defaultChecked, r3.type, r3.name, true);
          break;
        case `select`:
          Q(`invalid`, t3);
          break;
        case `textarea`:
          Q(`invalid`, t3), fn2(t3, r3.value, r3.defaultValue, r3.children);
      }
      n3 = r3.children, typeof n3 != `string` && typeof n3 != `number` && typeof n3 != `bigint` || t3.textContent === `` + n3 || true === r3.suppressHydrationWarning || ep(t3.textContent, n3) ? (r3.popover != null && (Q(`beforetoggle`, t3), Q(`toggle`, t3)), r3.onScroll != null && Q(`scroll`, t3), r3.onScrollEnd != null && Q(`scrollend`, t3), r3.onClick != null && (t3.onclick = xn2), t3 = true) : t3 = false, t3 || la2(e4, true);
    }
    function da2(e4) {
      for (aa2 = e4.return; aa2; ) switch (aa2.tag) {
        case 5:
        case 31:
        case 13:
          sa2 = false;
          return;
        case 27:
        case 3:
          sa2 = true;
          return;
        default:
          aa2 = aa2.return;
      }
    }
    function fa2(e4) {
      if (e4 !== aa2) return false;
      if (!z2) return da2(e4), z2 = true, false;
      var t3 = e4.tag, n3;
      if ((n3 = t3 !== 3 && t3 !== 27) && ((n3 = t3 === 5) && (n3 = e4.type, n3 = n3 === `form` || n3 === `button` || pp(e4.type, e4.memoizedProps)), n3 = !n3), n3 && R2 && la2(e4), da2(e4), t3 === 13) {
        if (e4 = e4.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(i2(317));
        R2 = dm(e4);
      } else if (t3 === 31) {
        if (e4 = e4.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(i2(317));
        R2 = dm(e4);
      } else t3 === 27 ? (t3 = R2, Sp(e4.type) ? (e4 = um, um = null, R2 = e4) : R2 = t3) : R2 = aa2 ? lm(e4.stateNode.nextSibling) : null;
      return true;
    }
    function pa2() {
      R2 = aa2 = null, z2 = false;
    }
    function ma2() {
      var e4 = oa2;
      return e4 !== null && (pd === null ? pd = e4 : pd.push.apply(pd, e4), oa2 = null), e4;
    }
    function ha2(e4) {
      oa2 === null ? oa2 = [e4] : oa2.push(e4);
    }
    var ga2 = De2(null), _a2 = null, va2 = null;
    function ya2(e4, t3, n3) {
      k2(ga2, t3._currentValue), t3._currentValue = n3;
    }
    function ba2(e4) {
      e4._currentValue = ga2.current, Oe2(ga2);
    }
    function xa2(e4, t3, n3) {
      for (; e4 !== null; ) {
        var r3 = e4.alternate;
        if ((e4.childLanes & t3) === t3 ? r3 !== null && (r3.childLanes & t3) !== t3 && (r3.childLanes |= t3) : (e4.childLanes |= t3, r3 !== null && (r3.childLanes |= t3)), e4 === n3) break;
        e4 = e4.return;
      }
    }
    function Sa2(e4, t3, n3, r3) {
      var a3 = e4.child;
      for (a3 !== null && (a3.return = e4); a3 !== null; ) {
        var o3 = a3.dependencies;
        if (o3 !== null) {
          var s3 = a3.child;
          o3 = o3.firstContext;
          a: for (; o3 !== null; ) {
            var c3 = o3;
            o3 = a3;
            for (var l3 = 0; l3 < t3.length; l3++) if (c3.context === t3[l3]) {
              o3.lanes |= n3, c3 = o3.alternate, c3 !== null && (c3.lanes |= n3), xa2(o3.return, n3, e4), r3 || (s3 = null);
              break a;
            }
            o3 = c3.next;
          }
        } else if (a3.tag === 18) {
          if (s3 = a3.return, s3 === null) throw Error(i2(341));
          s3.lanes |= n3, o3 = s3.alternate, o3 !== null && (o3.lanes |= n3), xa2(s3, n3, e4), s3 = null;
        } else a3.tag === 13 && a3.memoizedState !== null && a3.memoizedState.dehydrated === null ? (a3.lanes |= n3, s3 = a3.alternate, s3 !== null && (s3.lanes |= n3), xa2(a3.return, n3, e4), s3 = a3.child, s3 = s3 === null ? null : s3.sibling) : s3 = a3.child;
        if (s3 !== null) s3.return = a3;
        else for (s3 = a3; s3 !== null; ) {
          if (s3 === e4) {
            s3 = null;
            break;
          }
          if (a3 = s3.sibling, a3 !== null) {
            a3.return = s3.return, s3 = a3;
            break;
          }
          s3 = s3.return;
        }
        a3 = s3;
      }
    }
    function Ca2(e4, t3, n3, r3) {
      e4 = null;
      for (var a3 = t3, o3 = false; a3 !== null; ) {
        if (!o3) {
          if (a3.flags & 524288) o3 = true;
          else if (a3.flags & 262144) break;
        }
        if (a3.tag === 10) {
          var s3 = a3.alternate;
          if (s3 === null) throw Error(i2(387));
          if (s3 = s3.memoizedProps, s3 !== null) {
            var c3 = a3.type;
            Ur2(a3.pendingProps.value, s3.value) || (e4 === null ? e4 = [c3] : e4.push(c3));
          }
        } else if (a3 === Me2.current) {
          if (s3 = a3.alternate, s3 === null) throw Error(i2(387));
          s3.memoizedState.memoizedState !== a3.memoizedState.memoizedState && (e4 === null ? e4 = [sh] : e4.push(sh));
        }
        a3 = a3.return;
      }
      return e4 !== null && Sa2(t3, e4, n3, r3), t3.flags |= 262144, e4 !== null;
    }
    function wa(e4) {
      for (e4 = e4.firstContext; e4 !== null; ) {
        if (!Ur2(e4.context._currentValue, e4.memoizedValue)) return true;
        e4 = e4.next;
      }
      return false;
    }
    function Ta(e4) {
      _a2 = e4, va2 = null, e4 = e4.dependencies, e4 !== null && (e4.firstContext = null);
    }
    function Ea(e4) {
      return Oa(_a2, e4);
    }
    function Da(e4, t3) {
      return _a2 === null && Ta(e4), Oa(e4, t3);
    }
    function Oa(e4, t3) {
      var n3 = t3._currentValue;
      if (t3 = { context: t3, memoizedValue: n3, next: null }, va2 === null) {
        if (e4 === null) throw Error(i2(308));
        va2 = t3, e4.dependencies = { lanes: 0, firstContext: t3 }, e4.flags |= 524288;
      } else va2 = va2.next = t3;
      return n3;
    }
    var ka = typeof AbortController < `u` ? AbortController : function() {
      var e4 = [], t3 = this.signal = { aborted: false, addEventListener: function(t4, n3) {
        e4.push(n3);
      } };
      this.abort = function() {
        t3.aborted = true, e4.forEach(function(e5) {
          return e5();
        });
      };
    }, Aa = t2.unstable_scheduleCallback, ja = t2.unstable_NormalPriority, Ma = { $$typeof: le2, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function Na() {
      return { controller: new ka(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function Pa(e4) {
      e4.refCount--, e4.refCount === 0 && Aa(ja, function() {
        e4.controller.abort();
      });
    }
    function Fa(e4, t3) {
      if (e4.pendingLanes & 4194048) {
        var n3 = e4.transitionTypes;
        for (n3 === null && (n3 = e4.transitionTypes = []), e4 = 0; e4 < t3.length; e4++) {
          var r3 = t3[e4];
          n3.indexOf(r3) === -1 && n3.push(r3);
        }
      }
    }
    var Ia = null;
    function La(e4) {
      var t3 = e4.transitionTypes;
      return e4.transitionTypes = null, t3;
    }
    var Ra = null, za = 0, Ba = 0, Va = null;
    function Ha(e4, t3) {
      if (Ra === null) {
        var n3 = Ra = [];
        za = 0, Ba = Pf(), Va = { status: `pending`, value: void 0, then: function(e5) {
          n3.push(e5);
        } };
      }
      return za++, t3.then(Ua, Ua), t3;
    }
    function Ua() {
      if (--za === 0 && (Ia = null, Ra !== null)) {
        Va !== null && (Va.status = `fulfilled`);
        var e4 = Ra;
        Ra = null, Ba = 0, Va = null;
        for (var t3 = 0; t3 < e4.length; t3++) (0, e4[t3])();
      }
    }
    function Wa(e4, t3) {
      var n3 = [], r3 = { status: `pending`, value: null, reason: null, then: function(e5) {
        n3.push(e5);
      } };
      return e4.then(function() {
        r3.status = `fulfilled`, r3.value = t3;
        for (var e5 = 0; e5 < n3.length; e5++) (0, n3[e5])(t3);
      }, function(e5) {
        for (r3.status = `rejected`, r3.reason = e5, e5 = 0; e5 < n3.length; e5++) (0, n3[e5])(void 0);
      }), r3;
    }
    var Ga = D2.S;
    D2.S = function(e4, t3) {
      if (gd = j2(), typeof t3 == `object` && t3 && typeof t3.then == `function` && Ha(e4, t3), Ia !== null) for (var n3 = bf; n3 !== null; ) Fa(n3, Ia), n3 = n3.next;
      if (n3 = e4.types, n3 !== null) {
        for (var r3 = bf; r3 !== null; ) Fa(r3, n3), r3 = r3.next;
        if (Ba !== 0) {
          r3 = Ia, r3 === null && (r3 = Ia = []);
          for (var i3 = 0; i3 < n3.length; i3++) {
            var a3 = n3[i3];
            r3.indexOf(a3) === -1 && r3.push(a3);
          }
        }
      }
      Ga !== null && Ga(e4, t3);
    };
    var Ka = De2(null);
    function qa() {
      var e4 = Ka.current;
      return e4 === null ? K.pooledCache : e4;
    }
    function Ja(e4, t3) {
      t3 === null ? k2(Ka, Ka.current) : k2(Ka, t3.pool);
    }
    function Ya() {
      var e4 = qa();
      return e4 === null ? null : { parent: Ma._currentValue, pool: e4 };
    }
    var Xa = Error(i2(460)), Za = Error(i2(474)), Qa = Error(i2(542)), $a = { then: function() {
    } };
    function eo(e4) {
      return e4 = e4.status, e4 === `fulfilled` || e4 === `rejected`;
    }
    function to(e4, t3, n3) {
      switch (n3 = e4[n3], n3 === void 0 ? e4.push(t3) : n3 !== t3 && (t3.then(xn2, xn2), t3 = n3), t3.status) {
        case `fulfilled`:
          return t3.value;
        case `rejected`:
          throw e4 = t3.reason, ao(e4), e4 === void 0 && !(`reason` in t3) ? Error(i2(600)) : e4;
        default:
          if (typeof t3.status == `string`) t3.then(xn2, xn2);
          else {
            if (e4 = K, e4 !== null && 100 < e4.shellSuspendCounter) throw Error(i2(482));
            e4 = t3, e4.status = `pending`, e4.then(function(e5) {
              if (t3.status === `pending`) {
                var n4 = t3;
                n4.status = `fulfilled`, n4.value = e5;
              }
            }, function(e5) {
              if (t3.status === `pending`) {
                var n4 = t3;
                n4.status = `rejected`, n4.reason = e5;
              }
            });
          }
          switch (t3.status) {
            case `fulfilled`:
              return t3.value;
            case `rejected`:
              throw e4 = t3.reason, ao(e4), e4;
          }
          throw ro = t3, Xa;
      }
    }
    function no(e4) {
      try {
        var t3 = e4._init;
        return t3(e4._payload);
      } catch (e5) {
        throw typeof e5 == `object` && e5 && typeof e5.then == `function` ? (ro = e5, Xa) : e5;
      }
    }
    var ro = null;
    function io() {
      if (ro === null) throw Error(i2(459));
      var e4 = ro;
      return ro = null, e4;
    }
    function ao(e4) {
      if (e4 === Xa || e4 === Qa) throw Error(i2(483));
    }
    var oo = null, so = 0;
    function co(e4) {
      var t3 = so;
      return so += 1, oo === null && (oo = []), to(oo, e4, t3);
    }
    function lo(e4, t3) {
      t3 = t3.props.ref, e4.ref = t3 === void 0 ? null : t3;
    }
    function uo(e4, t3) {
      throw t3.$$typeof === T2 ? Error(i2(525)) : (e4 = Object.prototype.toString.call(t3), Error(i2(31, e4 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e4)));
    }
    function fo(e4) {
      function t3(t4, n4) {
        if (e4) {
          var r4 = t4.deletions;
          r4 === null ? (t4.deletions = [n4], t4.flags |= 16) : r4.push(n4);
        }
      }
      function n3(n4, r4) {
        if (!e4) return null;
        for (; r4 !== null; ) t3(n4, r4), r4 = r4.sibling;
        return null;
      }
      function r3(e5) {
        for (var t4 = /* @__PURE__ */ new Map(); e5 !== null; ) e5.key === null ? t4.set(e5.index, e5) : t4.set(e5.key, e5), e5 = e5.sibling;
        return t4;
      }
      function a3(e5, t4) {
        return e5 = Ii2(e5, t4), e5.index = 0, e5.sibling = null, e5;
      }
      function o3(t4, n4, r4) {
        return t4.index = r4, e4 ? (r4 = t4.alternate, r4 === null ? (t4.flags |= 134217730, n4) : (r4 = r4.index, r4 < n4 ? (t4.flags |= 2, n4) : r4)) : (t4.flags |= 1048576, n4);
      }
      function s3(t4) {
        return e4 && t4.alternate === null && (t4.flags |= 134217730), t4;
      }
      function c3(e5, t4, n4, r4) {
        return t4 === null || t4.tag !== 6 ? (t4 = Bi2(n4, e5.mode, r4), t4.return = e5, t4) : (t4 = a3(t4, n4), t4.return = e5, t4);
      }
      function l3(e5, t4, n4, r4) {
        var i3 = n4.type;
        return i3 === ae2 ? (e5 = d3(e5, t4, n4.props.children, r4, n4.key), lo(e5, n4), e5) : t4 !== null && (t4.elementType === i3 || typeof i3 == `object` && i3 && i3.$$typeof === pe2 && no(i3) === t4.type) ? (t4 = a3(t4, n4.props), lo(t4, n4), t4.return = e5, t4) : (t4 = Ri2(n4.type, n4.key, n4.props, null, e5.mode, r4), lo(t4, n4), t4.return = e5, t4);
      }
      function u2(e5, t4, n4, r4) {
        return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n4.containerInfo || t4.stateNode.implementation !== n4.implementation ? (t4 = Hi2(n4, e5.mode, r4), t4.return = e5, t4) : (t4 = a3(t4, n4.children || []), t4.return = e5, t4);
      }
      function d3(e5, t4, n4, r4, i3) {
        return t4 === null || t4.tag !== 7 ? (t4 = zi2(n4, e5.mode, r4, i3), t4.return = e5, t4) : (t4 = a3(t4, n4), t4.return = e5, t4);
      }
      function f2(e5, t4, n4) {
        if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`) return t4 = Bi2(`` + t4, e5.mode, n4), t4.return = e5, t4;
        if (typeof t4 == `object` && t4) {
          switch (t4.$$typeof) {
            case re2:
              return n4 = Ri2(t4.type, t4.key, t4.props, null, e5.mode, n4), lo(n4, t4), n4.return = e5, n4;
            case ie2:
              return t4 = Hi2(t4, e5.mode, n4), t4.return = e5, t4;
            case pe2:
              return t4 = no(t4), f2(e5, t4, n4);
          }
          if (Ce2(t4) || be2(t4)) return t4 = zi2(t4, e5.mode, n4, null), t4.return = e5, t4;
          if (typeof t4.then == `function`) return f2(e5, co(t4), n4);
          if (t4.$$typeof === le2) return f2(e5, Da(e5, t4), n4);
          uo(e5, t4);
        }
        return null;
      }
      function p3(e5, t4, n4, r4) {
        var i3 = t4 === null ? null : t4.key;
        if (typeof n4 == `string` && n4 !== `` || typeof n4 == `number` || typeof n4 == `bigint`) return i3 === null ? c3(e5, t4, `` + n4, r4) : null;
        if (typeof n4 == `object` && n4) {
          switch (n4.$$typeof) {
            case re2:
              return n4.key === i3 ? l3(e5, t4, n4, r4) : null;
            case ie2:
              return n4.key === i3 ? u2(e5, t4, n4, r4) : null;
            case pe2:
              return n4 = no(n4), p3(e5, t4, n4, r4);
          }
          if (Ce2(n4) || be2(n4)) return i3 === null ? d3(e5, t4, n4, r4, null) : null;
          if (typeof n4.then == `function`) return p3(e5, t4, co(n4), r4);
          if (n4.$$typeof === le2) return p3(e5, t4, Da(e5, n4), r4);
          uo(e5, n4);
        }
        return null;
      }
      function m2(e5, t4, n4, r4, i3) {
        if (typeof r4 == `string` && r4 !== `` || typeof r4 == `number` || typeof r4 == `bigint`) return e5 = e5.get(n4) || null, c3(t4, e5, `` + r4, i3);
        if (typeof r4 == `object` && r4) {
          switch (r4.$$typeof) {
            case re2:
              return e5 = e5.get(r4.key === null ? n4 : r4.key) || null, l3(t4, e5, r4, i3);
            case ie2:
              return e5 = e5.get(r4.key === null ? n4 : r4.key) || null, u2(t4, e5, r4, i3);
            case pe2:
              return r4 = no(r4), m2(e5, t4, n4, r4, i3);
          }
          if (Ce2(r4) || be2(r4)) return e5 = e5.get(n4) || null, d3(t4, e5, r4, i3, null);
          if (typeof r4.then == `function`) return m2(e5, t4, n4, co(r4), i3);
          if (r4.$$typeof === le2) return m2(e5, t4, n4, Da(t4, r4), i3);
          uo(t4, r4);
        }
        return null;
      }
      function h3(i3, a4, s4, c4) {
        for (var l4 = null, u3 = null, d4 = a4, h4 = a4 = 0, g4 = null; d4 !== null && h4 < s4.length; h4++) {
          d4.index > h4 ? (g4 = d4, d4 = null) : g4 = d4.sibling;
          var _4 = p3(i3, d4, s4[h4], c4);
          if (_4 === null) {
            d4 === null && (d4 = g4);
            break;
          }
          e4 && d4 && _4.alternate === null && t3(i3, d4), a4 = o3(_4, a4, h4), u3 === null ? l4 = _4 : u3.sibling = _4, u3 = _4, d4 = g4;
        }
        if (h4 === s4.length) return n3(i3, d4), z2 && ea2(i3, h4), l4;
        if (d4 === null) {
          for (; h4 < s4.length; h4++) d4 = f2(i3, s4[h4], c4), d4 !== null && (a4 = o3(d4, a4, h4), u3 === null ? l4 = d4 : u3.sibling = d4, u3 = d4);
          return z2 && ea2(i3, h4), l4;
        }
        for (d4 = r3(d4); h4 < s4.length; h4++) g4 = m2(d4, i3, h4, s4[h4], c4), g4 !== null && (e4 && (_4 = g4.alternate, _4 !== null && d4.delete(_4.key === null ? h4 : _4.key)), a4 = o3(g4, a4, h4), u3 === null ? l4 = g4 : u3.sibling = g4, u3 = g4);
        return e4 && d4.forEach(function(e5) {
          return t3(i3, e5);
        }), z2 && ea2(i3, h4), l4;
      }
      function g3(a4, s4, c4, l4) {
        if (c4 == null) throw Error(i2(151));
        for (var u3 = null, d4 = null, h4 = s4, g4 = s4 = 0, _4 = null, v3 = c4.next(); h4 !== null && !v3.done; g4++, v3 = c4.next()) {
          h4.index > g4 ? (_4 = h4, h4 = null) : _4 = h4.sibling;
          var y3 = p3(a4, h4, v3.value, l4);
          if (y3 === null) {
            h4 === null && (h4 = _4);
            break;
          }
          e4 && h4 && y3.alternate === null && t3(a4, h4), s4 = o3(y3, s4, g4), d4 === null ? u3 = y3 : d4.sibling = y3, d4 = y3, h4 = _4;
        }
        if (v3.done) return n3(a4, h4), z2 && ea2(a4, g4), u3;
        if (h4 === null) {
          for (; !v3.done; g4++, v3 = c4.next()) v3 = f2(a4, v3.value, l4), v3 !== null && (s4 = o3(v3, s4, g4), d4 === null ? u3 = v3 : d4.sibling = v3, d4 = v3);
          return z2 && ea2(a4, g4), u3;
        }
        for (h4 = r3(h4); !v3.done; g4++, v3 = c4.next()) v3 = m2(h4, a4, g4, v3.value, l4), v3 !== null && (e4 && (_4 = v3.alternate, _4 !== null && h4.delete(_4.key === null ? g4 : _4.key)), s4 = o3(v3, s4, g4), d4 === null ? u3 = v3 : d4.sibling = v3, d4 = v3);
        return e4 && h4.forEach(function(e5) {
          return t3(a4, e5);
        }), z2 && ea2(a4, g4), u3;
      }
      function _3(e5, r4, o4, c4) {
        if (typeof o4 == `object` && o4 && o4.type === ae2 && o4.key === null && o4.props.ref === void 0 && (o4 = o4.props.children), typeof o4 == `object` && o4) {
          switch (o4.$$typeof) {
            case re2:
              a: {
                for (var l4 = o4.key; r4 !== null; ) {
                  if (r4.key === l4) {
                    if (l4 = o4.type, l4 === ae2) {
                      if (r4.tag === 7) {
                        n3(e5, r4.sibling), c4 = a3(r4, o4.props.children), lo(c4, o4), c4.return = e5, e5 = c4;
                        break a;
                      }
                    } else if (r4.elementType === l4 || typeof l4 == `object` && l4 && l4.$$typeof === pe2 && no(l4) === r4.type) {
                      n3(e5, r4.sibling), c4 = a3(r4, o4.props), lo(c4, o4), c4.return = e5, e5 = c4;
                      break a;
                    }
                    n3(e5, r4);
                    break;
                  }
                  t3(e5, r4), r4 = r4.sibling;
                }
                o4.type === ae2 ? (c4 = zi2(o4.props.children, e5.mode, c4, o4.key), lo(c4, o4), c4.return = e5, e5 = c4) : (c4 = Ri2(o4.type, o4.key, o4.props, null, e5.mode, c4), lo(c4, o4), c4.return = e5, e5 = c4);
              }
              return s3(e5);
            case ie2:
              a: {
                for (l4 = o4.key; r4 !== null; ) {
                  if (r4.key === l4) {
                    if (r4.tag === 4 && r4.stateNode.containerInfo === o4.containerInfo && r4.stateNode.implementation === o4.implementation) {
                      n3(e5, r4.sibling), c4 = a3(r4, o4.children || []), c4.return = e5, e5 = c4;
                      break a;
                    }
                    n3(e5, r4);
                    break;
                  }
                  t3(e5, r4), r4 = r4.sibling;
                }
                c4 = Hi2(o4, e5.mode, c4), c4.return = e5, e5 = c4;
              }
              return s3(e5);
            case pe2:
              return o4 = no(o4), _3(e5, r4, o4, c4);
          }
          if (Ce2(o4)) return h3(e5, r4, o4, c4);
          if (be2(o4)) {
            if (l4 = be2(o4), typeof l4 != `function`) throw Error(i2(150));
            return o4 = l4.call(o4), g3(e5, r4, o4, c4);
          }
          if (typeof o4.then == `function`) return _3(e5, r4, co(o4), c4);
          if (o4.$$typeof === le2) return _3(e5, r4, Da(e5, o4), c4);
          uo(e5, o4);
        }
        return typeof o4 == `string` && o4 !== `` || typeof o4 == `number` || typeof o4 == `bigint` ? (o4 = `` + o4, r4 !== null && r4.tag === 6 ? (n3(e5, r4.sibling), c4 = a3(r4, o4), c4.return = e5, e5 = c4) : (n3(e5, r4), c4 = Bi2(o4, e5.mode, c4), c4.return = e5, e5 = c4), s3(e5)) : n3(e5, r4);
      }
      return function(e5, t4, n4, r4) {
        try {
          so = 0;
          var i3 = _3(e5, t4, n4, r4);
          return oo = null, i3;
        } catch (t5) {
          if (t5 === Xa || t5 === Qa) throw t5;
          var a4 = Pi2(29, t5, null, e5.mode);
          return a4.lanes = r4, a4.return = e5, a4;
        }
      };
    }
    var po = fo(true), mo = fo(false), ho = false;
    function go(e4) {
      e4.updateQueue = { baseState: e4.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function _o(e4, t3) {
      e4 = e4.updateQueue, t3.updateQueue === e4 && (t3.updateQueue = { baseState: e4.baseState, firstBaseUpdate: e4.firstBaseUpdate, lastBaseUpdate: e4.lastBaseUpdate, shared: e4.shared, callbacks: null });
    }
    function vo(e4) {
      return { lane: e4, tag: 0, payload: null, callback: null, next: null };
    }
    function yo(e4, t3, n3) {
      var r3 = e4.updateQueue;
      if (r3 === null) return null;
      if (r3 = r3.shared, G & 2) {
        var i3 = r3.pending;
        return i3 === null ? t3.next = t3 : (t3.next = i3.next, i3.next = t3), r3.pending = t3, t3 = ji2(e4), Ai2(e4, null, n3), t3;
      }
      return Di2(e4, r3, t3, n3), ji2(e4);
    }
    function bo(e4, t3, n3) {
      if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n3 & 4194048)) {
        var r3 = t3.lanes;
        r3 &= e4.pendingLanes, n3 |= r3, t3.lanes = n3, bt2(e4, n3);
      }
    }
    function xo(e4, t3) {
      var n3 = e4.updateQueue, r3 = e4.alternate;
      if (r3 !== null && (r3 = r3.updateQueue, n3 === r3)) {
        var i3 = null, a3 = null;
        if (n3 = n3.firstBaseUpdate, n3 !== null) {
          do {
            var o3 = { lane: n3.lane, tag: n3.tag, payload: n3.payload, callback: null, next: null };
            a3 === null ? i3 = a3 = o3 : a3 = a3.next = o3, n3 = n3.next;
          } while (n3 !== null);
          a3 === null ? i3 = a3 = t3 : a3 = a3.next = t3;
        } else i3 = a3 = t3;
        n3 = { baseState: r3.baseState, firstBaseUpdate: i3, lastBaseUpdate: a3, shared: r3.shared, callbacks: r3.callbacks }, e4.updateQueue = n3;
      } else e4 = n3.lastBaseUpdate, e4 === null ? n3.firstBaseUpdate = t3 : e4.next = t3, n3.lastBaseUpdate = t3;
    }
    var So = false;
    function Co() {
      if (So) {
        var e4 = Va;
        if (e4 !== null) throw e4;
      }
    }
    function wo(e4, t3, n3, r3) {
      So = false;
      var i3 = e4.updateQueue;
      ho = false;
      var a3 = i3.firstBaseUpdate, o3 = i3.lastBaseUpdate, s3 = i3.shared.pending;
      if (s3 !== null) {
        i3.shared.pending = null;
        var c3 = s3, l3 = c3.next;
        c3.next = null, o3 === null ? a3 = l3 : o3.next = l3, o3 = c3;
        var u2 = e4.alternate;
        u2 !== null && (u2 = u2.updateQueue, s3 = u2.lastBaseUpdate, s3 !== o3 && (s3 === null ? u2.firstBaseUpdate = l3 : s3.next = l3, u2.lastBaseUpdate = c3));
      }
      if (a3 !== null) {
        var d3 = i3.baseState;
        o3 = 0, u2 = l3 = c3 = null, s3 = a3;
        do {
          var f2 = s3.lane & -536870913, p3 = f2 !== s3.lane;
          if (p3 ? (J & f2) === f2 : (r3 & f2) === f2) {
            f2 !== 0 && f2 === Ba && (So = true), u2 !== null && (u2 = u2.next = { lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null });
            a: {
              var m2 = e4, h3 = s3;
              f2 = t3;
              var g3 = n3;
              switch (h3.tag) {
                case 1:
                  if (m2 = h3.payload, typeof m2 == `function`) {
                    d3 = m2.call(g3, d3, f2);
                    break a;
                  }
                  d3 = m2;
                  break a;
                case 3:
                  m2.flags = m2.flags & -65537 | 128;
                case 0:
                  if (m2 = h3.payload, f2 = typeof m2 == `function` ? m2.call(g3, d3, f2) : m2, f2 == null) break a;
                  d3 = w2({}, d3, f2);
                  break a;
                case 2:
                  ho = true;
              }
            }
            f2 = s3.callback, f2 !== null && (e4.flags |= 64, p3 && (e4.flags |= 8192), p3 = i3.callbacks, p3 === null ? i3.callbacks = [f2] : p3.push(f2));
          } else p3 = { lane: f2, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null }, u2 === null ? (l3 = u2 = p3, c3 = d3) : u2 = u2.next = p3, o3 |= f2;
          if (s3 = s3.next, s3 === null) {
            if (s3 = i3.shared.pending, s3 === null) break;
            p3 = s3, s3 = p3.next, p3.next = null, i3.lastBaseUpdate = p3, i3.shared.pending = null;
          }
        } while (1);
        u2 === null && (c3 = d3), i3.baseState = c3, i3.firstBaseUpdate = l3, i3.lastBaseUpdate = u2, a3 === null && (i3.shared.lanes = 0), sd |= o3, e4.lanes = o3, e4.memoizedState = d3;
      }
    }
    function To(e4, t3) {
      if (typeof e4 != `function`) throw Error(i2(191, e4));
      e4.call(t3);
    }
    function Eo(e4, t3) {
      var n3 = e4.callbacks;
      if (n3 !== null) for (e4.callbacks = null, e4 = 0; e4 < n3.length; e4++) To(n3[e4], t3);
    }
    var Do = De2(null), Oo = De2(0);
    function ko(e4, t3) {
      e4 = ad, k2(Oo, e4), k2(Do, t3), ad = e4 | t3.baseLanes;
    }
    function Ao() {
      k2(Oo, ad), k2(Do, Do.current);
    }
    function jo() {
      ad = Oo.current, Oe2(Do), Oe2(Oo);
    }
    var Mo = De2(null), No = null;
    function Po(e4) {
      var t3 = e4.alternate;
      k2(zo, zo.current & 1), k2(Mo, e4), No === null && (t3 === null || Do.current !== null || t3.memoizedState !== null) && (No = e4);
    }
    function Fo(e4) {
      k2(zo, zo.current), k2(Mo, e4), No === null && (No = e4);
    }
    function Io(e4) {
      e4.tag === 22 ? (k2(zo, zo.current), k2(Mo, e4), No === null && (No = e4)) : Lo();
    }
    function Lo() {
      k2(zo, zo.current), k2(Mo, Mo.current);
    }
    function Ro(e4) {
      Oe2(Mo), No === e4 && (No = null), Oe2(zo);
    }
    var zo = De2(0);
    function Bo(e4, t3) {
      k2(Mo, Mo.current), k2(zo, t3);
    }
    function Vo(e4) {
      Oe2(zo), Oe2(Mo), No === e4 && (No = null);
    }
    function Ho(e4) {
      for (var t3 = e4; t3 !== null; ) {
        if (t3.tag === 13) {
          var n3 = t3.memoizedState;
          if (n3 !== null && (n3 = n3.dehydrated, n3 === null || om(n3) || sm(n3))) return t3;
        } else if (t3.tag === 19 && t3.memoizedProps.revealOrder !== `independent`) {
          if (t3.flags & 128) return t3;
        } else if (t3.child !== null) {
          t3.child.return = t3, t3 = t3.child;
          continue;
        }
        if (t3 === e4) break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e4) return null;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
      return null;
    }
    var Uo = 0, B = null, V = null, Wo = null, Go = false, Ko = false, qo = false, Jo = 0, Yo = 0, Xo = null, Zo = 0;
    function Qo() {
      throw Error(i2(321));
    }
    function $o(e4, t3) {
      if (t3 === null) return false;
      for (var n3 = 0; n3 < t3.length && n3 < e4.length; n3++) if (!Ur2(e4[n3], t3[n3])) return false;
      return true;
    }
    function es(e4, t3, n3, r3, i3, a3) {
      return Uo = a3, B = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, D2.H = e4 === null || e4.memoizedState === null ? _c : vc, qo = false, a3 = n3(r3, i3), qo = false, Ko && (a3 = ns(t3, n3, r3, i3)), ts(e4), a3;
    }
    function ts(e4) {
      D2.H = gc;
      var t3 = V !== null && V.next !== null;
      if (Uo = 0, Wo = V = B = null, Go = false, Yo = 0, Xo = null, t3) throw Error(i2(300));
      e4 === null || Fc || (e4 = e4.dependencies, e4 !== null && wa(e4) && (Fc = true));
    }
    function ns(e4, t3, n3, r3) {
      B = e4;
      var a3 = 0;
      do {
        if (Ko && (Xo = null), Yo = 0, Ko = false, 25 <= a3) throw Error(i2(301));
        if (a3 += 1, Wo = V = null, e4.updateQueue != null) {
          var o3 = e4.updateQueue;
          o3.lastEffect = null, o3.events = null, o3.stores = null, o3.memoCache != null && (o3.memoCache.index = 0);
        }
        D2.H = yc, o3 = t3(n3, r3);
      } while (Ko);
      return o3;
    }
    function rs() {
      var e4 = D2.H, t3 = e4.useState()[0];
      return t3 = typeof t3.then == `function` ? us(t3) : t3, e4 = e4.useState()[0], (V === null ? null : V.memoizedState) !== e4 && (B.flags |= 1024), t3;
    }
    function is() {
      var e4 = Jo !== 0;
      return Jo = 0, e4;
    }
    function as(e4, t3, n3) {
      t3.updateQueue = e4.updateQueue, t3.flags &= -2053, e4.lanes &= ~n3;
    }
    function os(e4) {
      if (Go) {
        for (e4 = e4.memoizedState; e4 !== null; ) {
          var t3 = e4.queue;
          t3 !== null && (t3.pending = null), e4 = e4.next;
        }
        Go = false;
      }
      Uo = 0, Wo = V = B = null, Ko = false, Yo = Jo = 0, Xo = null;
    }
    function ss() {
      var e4 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Wo === null ? B.memoizedState = Wo = e4 : Wo = Wo.next = e4, Wo;
    }
    function cs() {
      if (V === null) {
        var e4 = B.alternate;
        e4 = e4 === null ? null : e4.memoizedState;
      } else e4 = V.next;
      var t3 = Wo === null ? B.memoizedState : Wo.next;
      if (t3 !== null) Wo = t3, V = e4;
      else {
        if (e4 === null) throw B.alternate === null ? Error(i2(467)) : Error(i2(310));
        V = e4, e4 = { memoizedState: V.memoizedState, baseState: V.baseState, baseQueue: V.baseQueue, queue: V.queue, next: null }, Wo === null ? B.memoizedState = Wo = e4 : Wo = Wo.next = e4;
      }
      return Wo;
    }
    function ls() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function us(e4) {
      var t3 = Yo;
      return Yo += 1, Xo === null && (Xo = []), e4 = to(Xo, e4, t3), t3 = B, (Wo === null ? t3.memoizedState : Wo.next) === null && (t3 = t3.alternate, D2.H = t3 === null || t3.memoizedState === null ? _c : vc), e4;
    }
    function ds(e4) {
      if (typeof e4 == `object` && e4) {
        if (typeof e4.then == `function`) return us(e4);
        if (e4.$$typeof === ve2) return;
        if (e4.$$typeof === le2) return Ea(e4);
      }
      throw Error(i2(438, String(e4)));
    }
    function fs(e4) {
      var t3 = null, n3 = B.updateQueue;
      if (n3 !== null && (t3 = n3.memoCache), t3 == null) {
        var r3 = B.alternate;
        r3 !== null && (r3 = r3.updateQueue, r3 !== null && (r3 = r3.memoCache, r3 != null && (t3 = { data: r3.data.map(function(e5) {
          return e5.slice();
        }), index: 0 })));
      }
      if (t3 ??= { data: [], index: 0 }, n3 === null && (n3 = ls(), B.updateQueue = n3), n3.memoCache = t3, n3 = t3.data[t3.index], n3 === void 0) for (n3 = t3.data[t3.index] = Array(e4), r3 = 0; r3 < e4; r3++) n3[r3] = ge2;
      return t3.index++, n3;
    }
    function ps(e4, t3) {
      return typeof t3 == `function` ? t3(e4) : t3;
    }
    function ms(e4) {
      return hs(cs(), V, e4);
    }
    function hs(e4, t3, n3) {
      var r3 = e4.queue;
      if (r3 === null) throw Error(i2(311));
      r3.lastRenderedReducer = n3;
      var a3 = e4.baseQueue, o3 = r3.pending;
      if (o3 !== null) {
        if (a3 !== null) {
          var s3 = a3.next;
          a3.next = o3.next, o3.next = s3;
        }
        t3.baseQueue = a3 = o3, r3.pending = null;
      }
      if (o3 = e4.baseState, a3 === null) e4.memoizedState = o3;
      else {
        t3 = a3.next;
        var c3 = s3 = null, l3 = null, u2 = t3, d3 = false;
        do {
          var f2 = u2.lane & -536870913;
          if (f2 === u2.lane ? (Uo & f2) === f2 : (J & f2) === f2) {
            var p3 = u2.revertLane;
            if (p3 === 0) l3 !== null && (l3 = l3.next = { lane: 0, revertLane: 0, gesture: null, action: u2.action, hasEagerState: u2.hasEagerState, eagerState: u2.eagerState, next: null }), f2 === Ba && (d3 = true);
            else if ((Uo & p3) === p3) {
              u2 = u2.next, p3 === Ba && (d3 = true);
              continue;
            } else f2 = { lane: 0, revertLane: u2.revertLane, gesture: null, action: u2.action, hasEagerState: u2.hasEagerState, eagerState: u2.eagerState, next: null }, l3 === null ? (c3 = l3 = f2, s3 = o3) : l3 = l3.next = f2, B.lanes |= p3, sd |= p3;
            f2 = u2.action, qo && n3(o3, f2), o3 = u2.hasEagerState ? u2.eagerState : n3(o3, f2);
          } else p3 = { lane: f2, revertLane: u2.revertLane, gesture: u2.gesture, action: u2.action, hasEagerState: u2.hasEagerState, eagerState: u2.eagerState, next: null }, l3 === null ? (c3 = l3 = p3, s3 = o3) : l3 = l3.next = p3, B.lanes |= f2, sd |= f2;
          u2 = u2.next;
        } while (u2 !== null && u2 !== t3);
        if (l3 === null ? s3 = o3 : l3.next = c3, !Ur2(o3, e4.memoizedState) && (Fc = true, d3 && (n3 = Va, n3 !== null))) throw n3;
        e4.memoizedState = o3, e4.baseState = s3, e4.baseQueue = l3, r3.lastRenderedState = o3;
      }
      return a3 === null && (r3.lanes = 0), [e4.memoizedState, r3.dispatch];
    }
    function gs(e4) {
      var t3 = cs(), n3 = t3.queue;
      if (n3 === null) throw Error(i2(311));
      n3.lastRenderedReducer = e4;
      var r3 = n3.dispatch, a3 = n3.pending, o3 = t3.memoizedState;
      if (a3 !== null) {
        n3.pending = null;
        var s3 = a3 = a3.next;
        do
          o3 = e4(o3, s3.action), s3 = s3.next;
        while (s3 !== a3);
        Ur2(o3, t3.memoizedState) || (Fc = true), t3.memoizedState = o3, t3.baseQueue === null && (t3.baseState = o3), n3.lastRenderedState = o3;
      }
      return [o3, r3];
    }
    function _s(e4, t3, n3) {
      var r3 = B, a3 = cs(), o3 = z2;
      if (o3) {
        if (n3 === void 0) throw Error(i2(407));
        n3 = n3();
      } else n3 = t3();
      var s3 = !Ur2((V || a3).memoizedState, n3);
      if (s3 && (a3.memoizedState = n3, Fc = true), a3 = a3.queue, Hs(bs.bind(null, r3, a3, e4), [e4]), e4 = a3.getSnapshot !== t3 || s3 || Wo !== null && !!(Wo.memoizedState.tag & 1), Ls(e4 ? 9 : 8, { destroy: void 0 }, ys.bind(null, r3, a3, n3, t3), null), e4) {
        if (r3.flags |= 2048, K === null) throw Error(i2(349));
        o3 || Uo & 127 || vs(r3, t3, n3);
      }
      return n3;
    }
    function vs(e4, t3, n3) {
      e4.flags |= 16384, e4 = { getSnapshot: t3, value: n3 }, t3 = B.updateQueue, t3 === null ? (t3 = ls(), B.updateQueue = t3, t3.stores = [e4]) : (n3 = t3.stores, n3 === null ? t3.stores = [e4] : n3.push(e4));
    }
    function ys(e4, t3, n3, r3) {
      t3.value = n3, t3.getSnapshot = r3, xs(t3) && Ss(e4);
    }
    function bs(e4, t3, n3) {
      return n3(function() {
        xs(t3) && Ss(e4);
      });
    }
    function xs(e4) {
      var t3 = e4.getSnapshot;
      e4 = e4.value;
      try {
        var n3 = t3();
        return !Ur2(e4, n3);
      } catch {
        return true;
      }
    }
    function Ss(e4) {
      var t3 = ki2(e4, 2);
      t3 !== null && Pd(t3, e4, 2);
    }
    function Cs(e4) {
      var t3 = ss();
      if (typeof e4 == `function`) {
        var n3 = e4;
        if (e4 = n3(), qo) {
          M2(true);
          try {
            n3();
          } finally {
            M2(false);
          }
        }
      }
      return t3.memoizedState = t3.baseState = e4, t3.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ps, lastRenderedState: e4 }, t3;
    }
    function ws(e4, t3, n3, r3) {
      return e4.baseState = n3, hs(e4, V, typeof r3 == `function` ? r3 : ps);
    }
    function Ts(e4, t3, n3, r3, a3) {
      if (pc(e4)) throw Error(i2(485));
      if (e4 = t3.action, e4 !== null) {
        var o3 = { payload: a3, action: e4, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e5) {
          o3.listeners.push(e5);
        } };
        D2.T === null ? o3.isTransition = false : n3(true), r3(o3), n3 = t3.pending, n3 === null ? (o3.next = t3.pending = o3, Es(t3, o3)) : (o3.next = n3.next, t3.pending = n3.next = o3);
      }
    }
    function Es(e4, t3) {
      var n3 = t3.action, r3 = t3.payload, i3 = e4.state;
      if (t3.isTransition) {
        var a3 = D2.T, o3 = {};
        o3.types = a3 === null ? null : a3.types, D2.T = o3;
        try {
          var s3 = n3(i3, r3), c3 = D2.S;
          c3 !== null && c3(o3, s3), Ds(e4, t3, s3);
        } catch (n4) {
          ks(e4, t3, n4);
        } finally {
          a3 !== null && o3.types !== null && (a3.types = o3.types), D2.T = a3;
        }
      } else try {
        a3 = n3(i3, r3), Ds(e4, t3, a3);
      } catch (n4) {
        ks(e4, t3, n4);
      }
    }
    function Ds(e4, t3, n3) {
      typeof n3 == `object` && n3 && typeof n3.then == `function` ? n3.then(function(n4) {
        Os(e4, t3, n4);
      }, function(n4) {
        return ks(e4, t3, n4);
      }) : Os(e4, t3, n3);
    }
    function Os(e4, t3, n3) {
      t3.status = `fulfilled`, t3.value = n3, As(t3), e4.state = n3, t3 = e4.pending, t3 !== null && (n3 = t3.next, n3 === t3 ? e4.pending = null : (n3 = n3.next, t3.next = n3, Es(e4, n3)));
    }
    function ks(e4, t3, n3) {
      var r3 = e4.pending;
      if (e4.pending = null, r3 !== null) {
        r3 = r3.next;
        do
          t3.status = `rejected`, t3.reason = n3, As(t3), t3 = t3.next;
        while (t3 !== r3);
      }
      e4.action = null;
    }
    function As(e4) {
      e4 = e4.listeners;
      for (var t3 = 0; t3 < e4.length; t3++) (0, e4[t3])();
    }
    function js(e4, t3) {
      return t3;
    }
    function Ms(e4, t3) {
      if (z2) {
        var n3 = K.formState;
        if (n3 !== null) {
          a: {
            var r3 = B;
            if (z2) {
              if (R2) {
                b: {
                  for (var i3 = R2, a3 = sa2; i3.nodeType !== 8; ) if (!a3 || (i3 = lm(i3.nextSibling), i3 === null)) {
                    i3 = null;
                    break b;
                  }
                  a3 = i3.data, i3 = a3 === `F!` || a3 === `F` ? i3 : null;
                }
                if (i3) {
                  R2 = lm(i3.nextSibling), r3 = i3.data === `F!`;
                  break a;
                }
              }
              la2(r3);
            }
            r3 = false;
          }
          r3 && (t3 = n3[0]);
        }
      }
      return n3 = ss(), n3.memoizedState = n3.baseState = t3, r3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: js, lastRenderedState: t3 }, n3.queue = r3, n3 = uc.bind(null, B, r3), r3.dispatch = n3, r3 = Cs(false), a3 = fc.bind(null, B, false, r3.queue), r3 = ss(), i3 = { state: t3, dispatch: null, action: e4, pending: null }, r3.queue = i3, n3 = Ts.bind(null, B, i3, a3, n3), i3.dispatch = n3, r3.memoizedState = e4, [t3, n3, false];
    }
    function Ns(e4) {
      return Ps(cs(), V, e4);
    }
    function Ps(e4, t3, n3) {
      if (t3 = hs(e4, t3, js)[0], e4 = ms(ps)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`) try {
        var r3 = us(t3);
      } catch (e5) {
        throw e5 === Xa ? Qa : e5;
      }
      else r3 = t3;
      t3 = cs();
      var i3 = t3.queue, a3 = i3.dispatch;
      return n3 !== t3.memoizedState && (B.flags |= 2048, Ls(9, { destroy: void 0 }, Fs.bind(null, i3, n3), null)), [r3, a3, e4];
    }
    function Fs(e4, t3) {
      e4.action = t3;
    }
    function Is(e4) {
      var t3 = cs(), n3 = V;
      if (n3 !== null) return Ps(t3, n3, e4);
      cs(), t3 = t3.memoizedState, n3 = cs();
      var r3 = n3.queue.dispatch;
      return n3.memoizedState = e4, [t3, r3, false];
    }
    function Ls(e4, t3, n3, r3) {
      return e4 = { tag: e4, create: n3, deps: r3, inst: t3, next: null }, t3 = B.updateQueue, t3 === null && (t3 = ls(), B.updateQueue = t3), n3 = t3.lastEffect, n3 === null ? t3.lastEffect = e4.next = e4 : (r3 = n3.next, n3.next = e4, e4.next = r3, t3.lastEffect = e4), e4;
    }
    function Rs() {
      return cs().memoizedState;
    }
    function zs(e4, t3, n3, r3) {
      var i3 = ss();
      B.flags |= e4, i3.memoizedState = Ls(1 | t3, { destroy: void 0 }, n3, r3 === void 0 ? null : r3);
    }
    function Bs(e4, t3, n3, r3) {
      var i3 = cs();
      r3 = r3 === void 0 ? null : r3;
      var a3 = i3.memoizedState.inst;
      V !== null && r3 !== null && $o(r3, V.memoizedState.deps) ? i3.memoizedState = Ls(t3, a3, n3, r3) : (B.flags |= e4, i3.memoizedState = Ls(1 | t3, a3, n3, r3));
    }
    function Vs(e4, t3) {
      zs(8390656, 8, e4, t3);
    }
    function Hs(e4, t3) {
      Bs(2048, 8, e4, t3);
    }
    function Us(e4) {
      B.flags |= 4;
      var t3 = B.updateQueue;
      if (t3 === null) t3 = ls(), B.updateQueue = t3, t3.events = [e4];
      else {
        var n3 = t3.events;
        n3 === null ? t3.events = [e4] : n3.push(e4);
      }
    }
    function Ws(e4) {
      var t3 = cs().memoizedState;
      return Us({ ref: t3, nextImpl: e4 }), function() {
        if (G & 2) throw Error(i2(440));
        return t3.impl.apply(void 0, arguments);
      };
    }
    function Gs(e4, t3) {
      return Bs(4, 2, e4, t3);
    }
    function Ks(e4, t3) {
      return Bs(4, 4, e4, t3);
    }
    function qs(e4, t3) {
      if (typeof t3 == `function`) {
        e4 = e4();
        var n3 = t3(e4);
        return function() {
          typeof n3 == `function` ? n3() : t3(null);
        };
      }
      if (t3 != null) return e4 = e4(), t3.current = e4, function() {
        t3.current = null;
      };
    }
    function Js(e4, t3, n3) {
      n3 = n3 == null ? null : n3.concat([e4]), Bs(4, 4, qs.bind(null, t3, e4), n3);
    }
    function Ys() {
    }
    function Xs(e4, t3) {
      var n3 = cs();
      t3 = t3 === void 0 ? null : t3;
      var r3 = n3.memoizedState;
      return t3 !== null && $o(t3, r3[1]) ? r3[0] : (n3.memoizedState = [e4, t3], e4);
    }
    function Zs(e4, t3) {
      var n3 = cs();
      t3 = t3 === void 0 ? null : t3;
      var r3 = n3.memoizedState;
      if (t3 !== null && $o(t3, r3[1])) return r3[0];
      if (r3 = e4(), qo) {
        M2(true);
        try {
          e4();
        } finally {
          M2(false);
        }
      }
      return n3.memoizedState = [r3, t3], r3;
    }
    function Qs(e4, t3, n3) {
      return n3 === void 0 || Uo & 1073741824 && !(J & 261930) ? e4.memoizedState = t3 : (e4.memoizedState = n3, e4 = Md(), B.lanes |= e4, sd |= e4, n3);
    }
    function $s(e4, t3, n3, r3) {
      return Ur2(n3, t3) ? n3 : Do.current === null ? !(Uo & 106) || Uo & 1073741824 && !(J & 261930) ? (Fc = true, e4.memoizedState = n3) : (e4 = Md(), B.lanes |= e4, sd |= e4, t3) : (e4 = Qs(e4, n3, r3), Ur2(e4, t3) || (Fc = true), e4);
    }
    function ec(e4, t3, n3, r3, i3) {
      var a3 = O2.p;
      O2.p = a3 !== 0 && 8 > a3 ? a3 : 8;
      var o3 = D2.T, s3 = {};
      s3.types = o3 === null ? null : o3.types, D2.T = s3, fc(e4, false, t3, n3);
      try {
        var c3 = i3(), l3 = D2.S;
        l3 !== null && l3(s3, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? dc(e4, t3, Wa(c3, r3), jd(e4)) : dc(e4, t3, r3, jd(e4));
      } catch (n4) {
        dc(e4, t3, { then: function() {
        }, status: `rejected`, reason: n4 }, jd());
      } finally {
        O2.p = a3, o3 !== null && s3.types !== null && (o3.types = s3.types), D2.T = o3;
      }
    }
    function tc() {
    }
    function nc(e4, t3, n3, r3) {
      if (e4.tag !== 5) throw Error(i2(476));
      var a3 = rc(e4).queue;
      ec(e4, a3, t3, we2, n3 === null ? tc : function() {
        return ic(e4), n3(r3);
      });
    }
    function rc(e4) {
      var t3 = e4.memoizedState;
      if (t3 !== null) return t3;
      t3 = { memoizedState: we2, baseState: we2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ps, lastRenderedState: we2 }, next: null };
      var n3 = {};
      return t3.next = { memoizedState: n3, baseState: n3, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ps, lastRenderedState: n3 }, next: null }, e4.memoizedState = t3, e4 = e4.alternate, e4 !== null && (e4.memoizedState = t3), t3;
    }
    function ic(e4) {
      var t3 = rc(e4);
      t3.next === null && (t3 = e4.alternate.memoizedState), dc(e4, t3.next.queue, {}, jd());
    }
    function ac() {
      return Ea(sh);
    }
    function oc() {
      return cs().memoizedState;
    }
    function sc() {
      return cs().memoizedState;
    }
    function cc(e4) {
      for (var t3 = e4.return; t3 !== null; ) {
        switch (t3.tag) {
          case 24:
          case 3:
            var n3 = jd();
            e4 = vo(n3);
            var r3 = yo(t3, e4, n3);
            r3 !== null && (Pd(r3, t3, n3), bo(r3, t3, n3)), t3 = { cache: Na() }, e4.payload = t3;
            return;
        }
        t3 = t3.return;
      }
    }
    function lc(e4, t3, n3) {
      var r3 = jd();
      n3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null }, pc(e4) ? mc(t3, n3) : (n3 = Oi2(e4, t3, n3, r3), n3 !== null && (Pd(n3, e4, r3), hc(n3, t3, r3)));
    }
    function uc(e4, t3, n3) {
      dc(e4, t3, n3, jd());
    }
    function dc(e4, t3, n3, r3) {
      var i3 = { lane: r3, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null };
      if (pc(e4)) mc(t3, i3);
      else {
        var a3 = e4.alternate;
        if (e4.lanes === 0 && (a3 === null || a3.lanes === 0) && (a3 = t3.lastRenderedReducer, a3 !== null)) try {
          var o3 = t3.lastRenderedState, s3 = a3(o3, n3);
          if (i3.hasEagerState = true, i3.eagerState = s3, Ur2(s3, o3)) return Di2(e4, t3, i3, 0), K === null && Ei2(), false;
        } catch {
        }
        if (n3 = Oi2(e4, t3, i3, r3), n3 !== null) return Pd(n3, e4, r3), hc(n3, t3, r3), true;
      }
      return false;
    }
    function fc(e4, t3, n3, r3) {
      if (r3 = { lane: 2, revertLane: Pf(), gesture: null, action: r3, hasEagerState: false, eagerState: null, next: null }, pc(e4)) {
        if (t3) throw Error(i2(479));
      } else t3 = Oi2(e4, n3, r3, 2), t3 !== null && Pd(t3, e4, 2);
    }
    function pc(e4) {
      var t3 = e4.alternate;
      return e4 === B || t3 !== null && t3 === B;
    }
    function mc(e4, t3) {
      Ko = Go = true;
      var n3 = e4.pending;
      n3 === null ? t3.next = t3 : (t3.next = n3.next, n3.next = t3), e4.pending = t3;
    }
    function hc(e4, t3, n3) {
      if (n3 & 4194048) {
        var r3 = t3.lanes;
        r3 &= e4.pendingLanes, n3 |= r3, t3.lanes = n3, bt2(e4, n3);
      }
    }
    var gc = { readContext: Ea, use: ds, useCallback: Qo, useContext: Qo, useEffect: Qo, useImperativeHandle: Qo, useLayoutEffect: Qo, useInsertionEffect: Qo, useMemo: Qo, useReducer: Qo, useRef: Qo, useState: Qo, useDebugValue: Qo, useDeferredValue: Qo, useTransition: Qo, useSyncExternalStore: Qo, useId: Qo, useHostTransitionStatus: Qo, useFormState: Qo, useActionState: Qo, useOptimistic: Qo, useMemoCache: Qo, useCacheRefresh: Qo, useEffectEvent: Qo }, _c = { readContext: Ea, use: ds, useCallback: function(e4, t3) {
      return ss().memoizedState = [e4, t3 === void 0 ? null : t3], e4;
    }, useContext: Ea, useEffect: Vs, useImperativeHandle: function(e4, t3, n3) {
      n3 = n3 == null ? null : n3.concat([e4]), zs(4194308, 4, qs.bind(null, t3, e4), n3);
    }, useLayoutEffect: function(e4, t3) {
      return zs(4194308, 4, e4, t3);
    }, useInsertionEffect: function(e4, t3) {
      zs(4, 2, e4, t3);
    }, useMemo: function(e4, t3) {
      var n3 = ss();
      t3 = t3 === void 0 ? null : t3;
      var r3 = e4();
      if (qo) {
        M2(true);
        try {
          e4();
        } finally {
          M2(false);
        }
      }
      return n3.memoizedState = [r3, t3], r3;
    }, useReducer: function(e4, t3, n3) {
      var r3 = ss();
      if (n3 !== void 0) {
        var i3 = n3(t3);
        if (qo) {
          M2(true);
          try {
            n3(t3);
          } finally {
            M2(false);
          }
        }
      } else i3 = t3;
      return r3.memoizedState = r3.baseState = i3, e4 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e4, lastRenderedState: i3 }, r3.queue = e4, e4 = e4.dispatch = lc.bind(null, B, e4), [r3.memoizedState, e4];
    }, useRef: function(e4) {
      var t3 = ss();
      return e4 = { current: e4 }, t3.memoizedState = e4;
    }, useState: function(e4) {
      e4 = Cs(e4);
      var t3 = e4.queue, n3 = uc.bind(null, B, t3);
      return t3.dispatch = n3, [e4.memoizedState, n3];
    }, useDebugValue: Ys, useDeferredValue: function(e4, t3) {
      return Qs(ss(), e4, t3);
    }, useTransition: function() {
      var e4 = Cs(false);
      return e4 = ec.bind(null, B, e4.queue, true, false), ss().memoizedState = e4, [false, e4];
    }, useSyncExternalStore: function(e4, t3, n3) {
      var r3 = B, a3 = ss();
      if (z2) {
        if (n3 === void 0) throw Error(i2(407));
        n3 = n3();
      } else {
        if (n3 = t3(), K === null) throw Error(i2(349));
        J & 127 || vs(r3, t3, n3);
      }
      a3.memoizedState = n3;
      var o3 = { value: n3, getSnapshot: t3 };
      return a3.queue = o3, Vs(bs.bind(null, r3, o3, e4), [e4]), r3.flags |= 2048, Ls(9, { destroy: void 0 }, ys.bind(null, r3, o3, n3, t3), null), n3;
    }, useId: function() {
      var e4 = ss(), t3 = K.identifierPrefix;
      if (z2) {
        var n3 = $i2, r3 = Qi2;
        n3 = (r3 & ~(1 << 32 - it2(r3) - 1)).toString(32) + n3, t3 = `_` + t3 + `R_` + n3, n3 = Jo++, 0 < n3 && (t3 += `H` + n3.toString(32)), t3 += `_`;
      } else n3 = Zo++, t3 = `_` + t3 + `r_` + n3.toString(32) + `_`;
      return e4.memoizedState = t3;
    }, useHostTransitionStatus: ac, useFormState: Ms, useActionState: Ms, useOptimistic: function(e4) {
      var t3 = ss();
      t3.memoizedState = t3.baseState = e4;
      var n3 = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return t3.queue = n3, t3 = fc.bind(null, B, true, n3), n3.dispatch = t3, [e4, t3];
    }, useMemoCache: fs, useCacheRefresh: function() {
      return ss().memoizedState = cc.bind(null, B);
    }, useEffectEvent: function(e4) {
      var t3 = ss(), n3 = { impl: e4 };
      return t3.memoizedState = n3, function() {
        if (G & 2) throw Error(i2(440));
        return n3.impl.apply(void 0, arguments);
      };
    } }, vc = { readContext: Ea, use: ds, useCallback: Xs, useContext: Ea, useEffect: Hs, useImperativeHandle: Js, useInsertionEffect: Gs, useLayoutEffect: Ks, useMemo: Zs, useReducer: ms, useRef: Rs, useState: function() {
      return ms(ps);
    }, useDebugValue: Ys, useDeferredValue: function(e4, t3) {
      return $s(cs(), V.memoizedState, e4, t3);
    }, useTransition: function() {
      var e4 = ms(ps)[0], t3 = cs().memoizedState;
      return [typeof e4 == `boolean` ? e4 : us(e4), t3];
    }, useSyncExternalStore: _s, useId: oc, useHostTransitionStatus: ac, useFormState: Ns, useActionState: Ns, useOptimistic: function(e4, t3) {
      return ws(cs(), V, e4, t3);
    }, useMemoCache: fs, useCacheRefresh: sc, useEffectEvent: Ws }, yc = { readContext: Ea, use: ds, useCallback: Xs, useContext: Ea, useEffect: Hs, useImperativeHandle: Js, useInsertionEffect: Gs, useLayoutEffect: Ks, useMemo: Zs, useReducer: gs, useRef: Rs, useState: function() {
      return gs(ps);
    }, useDebugValue: Ys, useDeferredValue: function(e4, t3) {
      var n3 = cs();
      return V === null ? Qs(n3, e4, t3) : $s(n3, V.memoizedState, e4, t3);
    }, useTransition: function() {
      var e4 = gs(ps)[0], t3 = cs().memoizedState;
      return [typeof e4 == `boolean` ? e4 : us(e4), t3];
    }, useSyncExternalStore: _s, useId: oc, useHostTransitionStatus: ac, useFormState: Is, useActionState: Is, useOptimistic: function(e4, t3) {
      var n3 = cs();
      return V === null ? (n3.baseState = e4, [e4, n3.queue.dispatch]) : ws(n3, V, e4, t3);
    }, useMemoCache: fs, useCacheRefresh: sc, useEffectEvent: Ws };
    function bc(e4, t3, n3, r3) {
      t3 = e4.memoizedState, n3 = n3(r3, t3), n3 = n3 == null ? t3 : w2({}, t3, n3), e4.memoizedState = n3, e4.lanes === 0 && (e4.updateQueue.baseState = n3);
    }
    var xc = { enqueueSetState: function(e4, t3, n3) {
      e4 = e4._reactInternals;
      var r3 = jd(), i3 = vo(r3);
      i3.payload = t3, n3 != null && (i3.callback = n3), t3 = yo(e4, i3, r3), t3 !== null && (Pd(t3, e4, r3), bo(t3, e4, r3));
    }, enqueueReplaceState: function(e4, t3, n3) {
      e4 = e4._reactInternals;
      var r3 = jd(), i3 = vo(r3);
      i3.tag = 1, i3.payload = t3, n3 != null && (i3.callback = n3), t3 = yo(e4, i3, r3), t3 !== null && (Pd(t3, e4, r3), bo(t3, e4, r3));
    }, enqueueForceUpdate: function(e4, t3) {
      e4 = e4._reactInternals;
      var n3 = jd(), r3 = vo(n3);
      r3.tag = 2, t3 != null && (r3.callback = t3), t3 = yo(e4, r3, n3), t3 !== null && (Pd(t3, e4, n3), bo(t3, e4, n3));
    } };
    function Sc(e4, t3, n3, r3, i3, a3, o3) {
      return e4 = e4.stateNode, typeof e4.shouldComponentUpdate == `function` ? e4.shouldComponentUpdate(r3, a3, o3) : t3.prototype && t3.prototype.isPureReactComponent ? !Wr2(n3, r3) || !Wr2(i3, a3) : true;
    }
    function Cc(e4, t3, n3, r3) {
      e4 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n3, r3), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n3, r3), t3.state !== e4 && xc.enqueueReplaceState(t3, t3.state, null);
    }
    function wc(e4, t3) {
      var n3 = t3;
      if (`ref` in t3) for (var r3 in n3 = {}, t3) r3 !== `ref` && (n3[r3] = t3[r3]);
      if (e4 = e4.defaultProps) for (var i3 in n3 === t3 && (n3 = w2({}, n3)), e4) n3[i3] === void 0 && (n3[i3] = e4[i3]);
      return n3;
    }
    function Tc(e4) {
      Si2(e4);
    }
    function Ec(e4) {
      console.error(e4);
    }
    function Dc(e4) {
      Si2(e4);
    }
    function Oc(e4, t3) {
      try {
        var n3 = e4.onUncaughtError;
        n3(t3.value, { componentStack: t3.stack });
      } catch (e5) {
        setTimeout(function() {
          throw e5;
        });
      }
    }
    function kc(e4, t3, n3) {
      try {
        var r3 = e4.onCaughtError;
        r3(n3.value, { componentStack: n3.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null });
      } catch (e5) {
        setTimeout(function() {
          throw e5;
        });
      }
    }
    function Ac(e4, t3, n3) {
      return n3 = vo(n3), n3.tag = 3, n3.payload = { element: null }, n3.callback = function() {
        Oc(e4, t3);
      }, n3;
    }
    function jc(e4) {
      return e4 = vo(e4), e4.tag = 3, e4;
    }
    function Mc(e4, t3, n3, r3) {
      var i3 = n3.type.getDerivedStateFromError;
      if (typeof i3 == `function`) {
        var a3 = r3.value;
        e4.payload = function() {
          return i3(a3);
        }, e4.callback = function() {
          kc(t3, n3, r3);
        };
      }
      var o3 = n3.stateNode;
      o3 !== null && typeof o3.componentDidCatch == `function` && (e4.callback = function() {
        kc(t3, n3, r3), typeof i3 != `function` && (yd === null ? yd = /* @__PURE__ */ new Set([this]) : yd.add(this));
        var e5 = r3.stack;
        this.componentDidCatch(r3.value, { componentStack: e5 === null ? `` : e5 });
      });
    }
    function Nc(e4, t3, n3, r3, a3) {
      if (n3.flags |= 32768, typeof r3 == `object` && r3 && typeof r3.then == `function`) {
        if (t3 = n3.alternate, t3 !== null && Ca2(t3, n3, a3, true), n3 = Mo.current, n3 !== null) {
          switch (n3.tag) {
            case 31:
            case 13:
            case 19:
              return No === null ? Kd() : n3.alternate === null && od === 0 && (od = 3), n3.flags &= -257, n3.flags |= 65536, n3.lanes = a3, r3 === $a ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? n3.updateQueue = /* @__PURE__ */ new Set([r3]) : t3.add(r3), mf(e4, r3, a3)), false;
            case 22:
              return n3.flags |= 65536, r3 === $a ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? (t3 = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([r3]) }, n3.updateQueue = t3) : (n3 = t3.retryQueue, n3 === null ? t3.retryQueue = /* @__PURE__ */ new Set([r3]) : n3.add(r3)), mf(e4, r3, a3)), false;
          }
          throw Error(i2(435, n3.tag));
        }
        return mf(e4, r3, a3), Kd(), false;
      }
      if (z2) return t3 = Mo.current, t3 === null ? (r3 !== ca2 && (t3 = Error(i2(423), { cause: r3 }), ha2(Wi2(t3, n3))), e4 = e4.current.alternate, e4.flags |= 65536, a3 &= -a3, e4.lanes |= a3, r3 = Wi2(r3, n3), a3 = Ac(e4.stateNode, r3, a3), xo(e4, a3), od !== 4 && (od = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = a3, r3 !== ca2 && (e4 = Error(i2(422), { cause: r3 }), ha2(Wi2(e4, n3)))), false;
      var o3 = Error(i2(520), { cause: r3 });
      if (o3 = Wi2(o3, n3), fd === null ? fd = [o3] : fd.push(o3), od !== 4 && (od = 2), t3 === null) return true;
      r3 = Wi2(r3, n3), n3 = t3;
      do {
        switch (n3.tag) {
          case 3:
            return n3.flags |= 65536, e4 = a3 & -a3, n3.lanes |= e4, e4 = Ac(n3.stateNode, r3, e4), xo(n3, e4), false;
          case 1:
            if (t3 = n3.type, o3 = n3.stateNode, !(n3.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || o3 !== null && typeof o3.componentDidCatch == `function` && (yd === null || !yd.has(o3)))) return n3.flags |= 65536, a3 &= -a3, n3.lanes |= a3, a3 = jc(a3), Mc(a3, e4, n3, r3), xo(n3, a3), false;
            break;
          case 22:
            if (n3.memoizedState !== null) return n3.flags |= 65536, false;
        }
        n3 = n3.return;
      } while (n3 !== null);
      return false;
    }
    var Pc = Error(i2(461)), Fc = false;
    function Ic(e4, t3, n3, r3) {
      t3.child = e4 === null ? mo(t3, null, n3, r3) : po(t3, e4.child, n3, r3);
    }
    function Lc(e4, t3, n3, r3, i3) {
      n3 = n3.render;
      var a3 = t3.ref;
      if (`ref` in r3) {
        var o3 = {};
        for (var s3 in r3) s3 !== `ref` && (o3[s3] = r3[s3]);
      } else o3 = r3;
      return Ta(t3), r3 = es(e4, t3, n3, o3, a3, i3), s3 = is(), e4 !== null && !Fc ? (as(e4, t3, i3), dl(e4, t3, i3)) : (z2 && s3 && na2(t3), t3.flags |= 1, Ic(e4, t3, r3, i3), t3.child);
    }
    function Rc(e4, t3, n3, r3, i3) {
      if (e4 === null) {
        var a3 = n3.type;
        return typeof a3 == `function` && !Fi2(a3) && a3.defaultProps === void 0 && n3.compare === null ? (t3.tag = 15, t3.type = a3, zc(e4, t3, a3, r3, i3)) : (e4 = Ri2(n3.type, null, r3, t3, t3.mode, i3), e4.ref = t3.ref, e4.return = t3, t3.child = e4);
      }
      if (a3 = e4.child, !fl(e4, i3)) {
        var o3 = a3.memoizedProps;
        if (n3 = n3.compare, n3 = n3 === null ? Wr2 : n3, n3(o3, r3) && e4.ref === t3.ref) return dl(e4, t3, i3);
      }
      return t3.flags |= 1, e4 = Ii2(a3, r3), e4.ref = t3.ref, e4.return = t3, t3.child = e4;
    }
    function zc(e4, t3, n3, r3, i3) {
      if (e4 !== null) {
        var a3 = e4.memoizedProps;
        if (Wr2(a3, r3) && e4.ref === t3.ref) {
          if (Fc = false, t3.pendingProps = r3 = a3, fl(e4, i3)) e4.flags & 131072 && (Fc = true);
          else return t3.lanes = e4.lanes, dl(e4, t3, i3);
        }
      }
      return qc(e4, t3, n3, r3, i3);
    }
    function Bc(e4, t3, n3, r3) {
      var i3 = r3.children, a3 = e4 === null ? null : e4.memoizedState;
      if (e4 === null && t3.stateNode === null && (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), r3.mode === `hidden`) {
        if (t3.flags & 128) {
          if (a3 = a3 === null ? n3 : a3.baseLanes | n3, e4 !== null) {
            for (r3 = t3.child = e4.child, i3 = 0; r3 !== null; ) i3 = i3 | r3.lanes | r3.childLanes, r3 = r3.sibling;
            r3 = i3 & ~a3;
          } else r3 = 0, t3.child = null;
          return Hc(e4, t3, a3, n3, r3);
        }
        if (n3 & 536870912) t3.memoizedState = { baseLanes: 0, cachePool: null }, e4 !== null && Ja(t3, a3 === null ? null : a3.cachePool), a3 === null ? Ao() : ko(t3, a3), Io(t3);
        else return r3 = t3.lanes = 536870912, Hc(e4, t3, a3 === null ? n3 : a3.baseLanes | n3, n3, r3);
      } else a3 === null ? (e4 !== null && Ja(t3, null), Ao(), Lo()) : (Ja(t3, a3.cachePool), ko(t3, a3), Lo(), t3.memoizedState = null);
      return Ic(e4, t3, i3, n3), t3.child;
    }
    function Vc(e4, t3) {
      return e4 !== null && e4.tag === 22 || t3.stateNode !== null || (t3.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t3.sibling;
    }
    function Hc(e4, t3, n3, r3, i3) {
      var a3 = qa();
      return a3 = a3 === null ? null : { parent: Ma._currentValue, pool: a3 }, t3.memoizedState = { baseLanes: n3, cachePool: a3 }, e4 !== null && Ja(t3, null), Ao(), Io(t3), e4 !== null && Ca2(e4, t3, r3, true), t3.childLanes = i3, null;
    }
    function Uc(e4, t3) {
      return t3 = nl({ mode: t3.mode, children: t3.children }, e4.mode), t3.ref = e4.ref, e4.child = t3, t3.return = e4, t3;
    }
    function Wc(e4, t3, n3) {
      return po(t3, e4.child, null, n3), e4 = Uc(t3, t3.pendingProps), e4.flags |= 2, Ro(t3), t3.memoizedState = null, e4;
    }
    function Gc(e4, t3, n3) {
      var r3 = t3.pendingProps, a3 = !!(t3.flags & 128);
      if (t3.flags &= -129, e4 === null) {
        if (z2) {
          if (r3.mode === `hidden`) return e4 = Uc(t3, r3), t3.lanes = 536870912, e4.memoizedState = { baseLanes: 0, cachePool: null }, Vc(null, e4);
          if (Fo(t3), (e4 = R2) ? (e4 = am(e4, sa2), e4 = e4 !== null && e4.data === `&` ? e4 : null, e4 !== null && (t3.memoizedState = { dehydrated: e4, treeContext: Zi2 === null ? null : { id: Qi2, overflow: $i2 }, retryLane: 536870912, hydrationErrors: null }, n3 = Vi2(e4), n3.return = t3, t3.child = n3, aa2 = t3, R2 = null)) : e4 = null, e4 === null) throw la2(t3);
          return t3.lanes = 536870912, null;
        }
        return Uc(t3, r3);
      }
      var o3 = e4.memoizedState;
      if (o3 !== null) {
        var s3 = o3.dehydrated;
        if (Fo(t3), a3) {
          if (t3.flags & 256) t3.flags &= -257, t3 = Wc(e4, t3, n3);
          else if (t3.memoizedState !== null) t3.child = e4.child, t3.flags |= 128, t3 = null;
          else throw Error(i2(558));
        } else if (Fc || Ca2(e4, t3, n3, false), a3 = (n3 & e4.childLanes) !== 0, Fc || a3) {
          if (Do.current === null) {
            if (r3 = K, r3 !== null && (s3 = xt2(r3, n3), s3 !== 0 && s3 !== o3.retryLane)) throw o3.retryLane = s3, ki2(e4, s3), Pd(r3, e4, s3), Pc;
            Kd();
          }
          t3 = Wc(e4, t3, n3);
        } else e4 = o3.treeContext, R2 = lm(s3.nextSibling), aa2 = t3, z2 = true, oa2 = null, sa2 = false, e4 !== null && ia2(t3, e4), t3 = Uc(t3, r3), t3.flags |= 134221824;
        return t3;
      }
      return e4 = Ii2(e4.child, { mode: r3.mode, children: r3.children }), e4.ref = t3.ref, t3.child = e4, e4.return = t3, e4;
    }
    function Kc(e4, t3) {
      var n3 = t3.ref;
      if (n3 === null) e4 !== null && e4.ref !== null && (t3.flags |= 4194816);
      else {
        if (typeof n3 != `function` && typeof n3 != `object`) throw Error(i2(284));
        (e4 === null || e4.ref !== n3) && (t3.flags |= 4194816);
      }
    }
    function qc(e4, t3, n3, r3, i3) {
      return Ta(t3), n3 = es(e4, t3, n3, r3, void 0, i3), r3 = is(), e4 !== null && !Fc ? (as(e4, t3, i3), dl(e4, t3, i3)) : (z2 && r3 && na2(t3), t3.flags |= 1, Ic(e4, t3, n3, i3), t3.child);
    }
    function Jc(e4, t3, n3, r3, i3, a3) {
      return Ta(t3), t3.updateQueue = null, n3 = ns(t3, r3, n3, i3), ts(e4), r3 = is(), e4 !== null && !Fc ? (as(e4, t3, a3), dl(e4, t3, a3)) : (z2 && r3 && na2(t3), t3.flags |= 1, Ic(e4, t3, n3, a3), t3.child);
    }
    function Yc(e4, t3, n3, r3, i3) {
      if (Ta(t3), t3.stateNode === null) {
        var a3 = Mi2, o3 = n3.contextType;
        typeof o3 == `object` && o3 && (a3 = Ea(o3)), a3 = new n3(r3, a3), t3.memoizedState = a3.state !== null && a3.state !== void 0 ? a3.state : null, a3.updater = xc, t3.stateNode = a3, a3._reactInternals = t3, a3 = t3.stateNode, a3.props = r3, a3.state = t3.memoizedState, a3.refs = {}, go(t3), o3 = n3.contextType, a3.context = typeof o3 == `object` && o3 ? Ea(o3) : Mi2, a3.state = t3.memoizedState, o3 = n3.getDerivedStateFromProps, typeof o3 == `function` && (bc(t3, n3, o3, r3), a3.state = t3.memoizedState), typeof n3.getDerivedStateFromProps == `function` || typeof a3.getSnapshotBeforeUpdate == `function` || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (o3 = a3.state, typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount(), o3 !== a3.state && xc.enqueueReplaceState(a3, a3.state, null), wo(t3, r3, a3, i3), Co(), a3.state = t3.memoizedState), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = true;
      } else if (e4 === null) {
        a3 = t3.stateNode;
        var s3 = t3.memoizedProps, c3 = wc(n3, s3);
        a3.props = c3;
        var l3 = a3.context, u2 = n3.contextType;
        o3 = Mi2, typeof u2 == `object` && u2 && (o3 = Ea(u2));
        var d3 = n3.getDerivedStateFromProps;
        u2 = typeof d3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u2 || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (s3 || l3 !== o3) && Cc(t3, a3, r3, o3), ho = false;
        var f2 = t3.memoizedState;
        a3.state = f2, wo(t3, r3, a3, i3), Co(), l3 = t3.memoizedState, s3 || f2 !== l3 || ho ? (typeof d3 == `function` && (bc(t3, n3, d3, r3), l3 = t3.memoizedState), (c3 = ho || Sc(t3, n3, c3, r3, f2, l3, o3)) ? (u2 || typeof a3.UNSAFE_componentWillMount != `function` && typeof a3.componentWillMount != `function` || (typeof a3.componentWillMount == `function` && a3.componentWillMount(), typeof a3.UNSAFE_componentWillMount == `function` && a3.UNSAFE_componentWillMount()), typeof a3.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r3, t3.memoizedState = l3), a3.props = r3, a3.state = l3, a3.context = o3, r3 = c3) : (typeof a3.componentDidMount == `function` && (t3.flags |= 4194308), r3 = false);
      } else {
        a3 = t3.stateNode, _o(e4, t3), o3 = t3.memoizedProps, u2 = wc(n3, o3), a3.props = u2, d3 = t3.pendingProps, f2 = a3.context, l3 = n3.contextType, c3 = Mi2, typeof l3 == `object` && l3 && (c3 = Ea(l3)), s3 = n3.getDerivedStateFromProps, (l3 = typeof s3 == `function` || typeof a3.getSnapshotBeforeUpdate == `function`) || typeof a3.UNSAFE_componentWillReceiveProps != `function` && typeof a3.componentWillReceiveProps != `function` || (o3 !== d3 || f2 !== c3) && Cc(t3, a3, r3, c3), ho = false, f2 = t3.memoizedState, a3.state = f2, wo(t3, r3, a3, i3), Co();
        var p3 = t3.memoizedState;
        o3 !== d3 || f2 !== p3 || ho || e4 !== null && e4.dependencies !== null && wa(e4.dependencies) ? (typeof s3 == `function` && (bc(t3, n3, s3, r3), p3 = t3.memoizedState), (u2 = ho || Sc(t3, n3, u2, r3, f2, p3, c3) || e4 !== null && e4.dependencies !== null && wa(e4.dependencies)) ? (l3 || typeof a3.UNSAFE_componentWillUpdate != `function` && typeof a3.componentWillUpdate != `function` || (typeof a3.componentWillUpdate == `function` && a3.componentWillUpdate(r3, p3, c3), typeof a3.UNSAFE_componentWillUpdate == `function` && a3.UNSAFE_componentWillUpdate(r3, p3, c3)), typeof a3.componentDidUpdate == `function` && (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a3.componentDidUpdate != `function` || o3 === e4.memoizedProps && f2 === e4.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e4.memoizedProps && f2 === e4.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r3, t3.memoizedState = p3), a3.props = r3, a3.state = p3, a3.context = c3, r3 = u2) : (typeof a3.componentDidUpdate != `function` || o3 === e4.memoizedProps && f2 === e4.memoizedState || (t3.flags |= 4), typeof a3.getSnapshotBeforeUpdate != `function` || o3 === e4.memoizedProps && f2 === e4.memoizedState || (t3.flags |= 1024), r3 = false);
      }
      return a3 = r3, Kc(e4, t3), r3 = !!(t3.flags & 128), a3 || r3 ? (a3 = t3.stateNode, n3 = r3 && typeof n3.getDerivedStateFromError != `function` ? null : a3.render(), t3.flags |= 1, e4 !== null && r3 ? (t3.child = po(t3, e4.child, null, i3), t3.child = po(t3, null, n3, i3)) : Ic(e4, t3, n3, i3), t3.memoizedState = a3.state, e4 = t3.child) : e4 = dl(e4, t3, i3), e4;
    }
    function Xc(e4, t3, n3, r3) {
      return pa2(), t3.flags |= 256, Ic(e4, t3, n3, r3), t3.child;
    }
    var Zc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Qc(e4) {
      return { baseLanes: e4, cachePool: Ya() };
    }
    function $c(e4, t3, n3) {
      return e4 = e4 === null ? 0 : e4.childLanes & ~n3, t3 && (e4 |= ud), e4;
    }
    function el(e4, t3, n3) {
      var r3 = t3.pendingProps, i3 = false, a3 = !!(t3.flags & 128), o3;
      if ((o3 = a3) || (o3 = e4 !== null && e4.memoizedState === null ? false : !!(zo.current & 2)), o3 && (i3 = true, t3.flags &= -129), o3 = !!(t3.flags & 32), t3.flags &= -33, e4 === null) {
        if (z2) {
          if (i3 ? Po(t3) : Lo(), (e4 = R2) ? (e4 = am(e4, sa2), e4 = e4 !== null && e4.data !== `&` ? e4 : null, e4 !== null && (t3.memoizedState = { dehydrated: e4, treeContext: Zi2 === null ? null : { id: Qi2, overflow: $i2 }, retryLane: 536870912, hydrationErrors: null }, n3 = Vi2(e4), n3.return = t3, t3.child = n3, aa2 = t3, R2 = null)) : e4 = null, e4 === null) throw la2(t3);
          return t3.lanes = sm(e4) ? 32 : 536870912, null;
        }
        return a3 = r3.children, r3 = r3.fallback, i3 ? (Lo(), i3 = t3.mode, a3 = nl({ mode: `hidden`, children: a3 }, i3), r3 = zi2(r3, i3, n3, null), a3.return = t3, r3.return = t3, a3.sibling = r3, t3.child = a3, r3 = t3.child, r3.memoizedState = Qc(n3), r3.childLanes = $c(e4, o3, n3), t3.memoizedState = Zc, Vc(null, r3)) : (Po(t3), tl(t3, a3));
      }
      var s3 = e4.memoizedState;
      if (s3 !== null) {
        var c3 = s3.dehydrated;
        if (c3 !== null) return il(e4, t3, a3, o3, r3, c3, s3, n3);
      }
      return i3 ? (Lo(), i3 = r3.fallback, a3 = t3.mode, s3 = e4.child, c3 = s3.sibling, r3 = Ii2(s3, { mode: `hidden`, children: r3.children }), r3.subtreeFlags = s3.subtreeFlags & 1206910976, c3 === null ? (i3 = zi2(i3, a3, n3, null), i3.flags |= 2) : i3 = Ii2(c3, i3), i3.return = t3, r3.return = t3, r3.sibling = i3, t3.child = r3, Vc(null, r3), r3 = t3.child, i3 = e4.child.memoizedState, i3 === null ? i3 = Qc(n3) : (a3 = i3.cachePool, a3 === null ? a3 = Ya() : (s3 = Ma._currentValue, a3 = a3.parent === s3 ? a3 : { parent: s3, pool: s3 }), i3 = { baseLanes: i3.baseLanes | n3, cachePool: a3 }), r3.memoizedState = i3, r3.childLanes = $c(e4, o3, n3), t3.memoizedState = Zc, Vc(e4.child, r3)) : (Po(t3), n3 = e4.child, e4 = n3.sibling, n3 = Ii2(n3, { mode: `visible`, children: r3.children }), n3.return = t3, n3.sibling = null, e4 !== null && (o3 = t3.deletions, o3 === null ? (t3.deletions = [e4], t3.flags |= 16) : o3.push(e4)), t3.child = n3, t3.memoizedState = null, n3);
    }
    function tl(e4, t3) {
      return t3 = nl({ mode: `visible`, children: t3 }, e4.mode), t3.return = e4, e4.child = t3;
    }
    function nl(e4, t3) {
      return e4 = Pi2(22, e4, null, t3), e4.lanes = 0, e4;
    }
    function rl(e4, t3, n3) {
      return po(t3, e4.child, null, n3), e4 = tl(t3, t3.pendingProps.children), e4.flags |= 2, t3.memoizedState = null, e4;
    }
    function il(e4, t3, n3, r3, a3, o3, s3, c3) {
      if (n3) return t3.flags & 256 ? (Po(t3), t3.flags &= -257, rl(e4, t3, c3)) : t3.memoizedState === null ? (Lo(), o3 = a3.fallback, s3 = t3.mode, a3 = nl({ mode: `visible`, children: a3.children }, s3), o3 = zi2(o3, s3, c3, null), o3.flags |= 2, a3.return = t3, o3.return = t3, a3.sibling = o3, t3.child = a3, po(t3, e4.child, null, c3), a3 = t3.child, a3.memoizedState = Qc(c3), a3.childLanes = $c(e4, r3, c3), t3.memoizedState = Zc, Vc(null, a3)) : (Lo(), t3.child = e4.child, t3.flags |= 128, null);
      if (Po(t3), sm(o3)) {
        if (r3 = o3.nextSibling && o3.nextSibling.dataset, r3) var l3 = r3.dgst;
        return r3 = l3, r3 !== `` && (a3 = Error(i2(419)), a3.stack = ``, a3.digest = r3, ha2({ value: a3, source: null, stack: null })), rl(e4, t3, c3);
      }
      if (Fc || Ca2(e4, t3, c3, false), r3 = (c3 & e4.childLanes) !== 0, Fc || r3) {
        if (Do.current !== null) return rl(e4, t3, c3);
        if (r3 = K, r3 !== null && (a3 = xt2(r3, c3), a3 !== 0 && a3 !== s3.retryLane)) throw s3.retryLane = a3, ki2(e4, a3), Pd(r3, e4, a3), Pc;
        return om(o3) || Kd(), rl(e4, t3, c3);
      }
      return om(o3) ? (t3.flags |= 192, t3.child = e4.child, null) : (e4 = s3.treeContext, R2 = lm(o3.nextSibling), aa2 = t3, z2 = true, oa2 = null, sa2 = false, e4 !== null && ia2(t3, e4), t3 = tl(t3, a3.children), t3.flags |= 134221824, t3);
    }
    function al(e4, t3, n3) {
      e4.lanes |= t3;
      var r3 = e4.alternate;
      r3 !== null && (r3.lanes |= t3), xa2(e4.return, t3, n3);
    }
    function ol(e4) {
      for (var t3 = null; e4 !== null; ) {
        var n3 = e4.alternate;
        n3 !== null && Ho(n3) === null && (t3 = e4), e4 = e4.sibling;
      }
      return t3;
    }
    function sl(e4, t3, n3, r3, i3, a3) {
      var o3 = e4.memoizedState;
      o3 === null ? e4.memoizedState = { isBackwards: t3, rendering: null, renderingStartTime: 0, last: r3, tail: n3, tailMode: i3, treeForkCount: a3 } : (o3.isBackwards = t3, o3.rendering = null, o3.renderingStartTime = 0, o3.last = r3, o3.tail = n3, o3.tailMode = i3, o3.treeForkCount = a3);
    }
    function cl(e4) {
      var t3 = e4.child;
      for (e4.child = null; t3 !== null; ) {
        var n3 = t3.sibling;
        t3.sibling = e4.child, e4.child = t3, t3 = n3;
      }
    }
    function ll(e4, t3, n3) {
      var r3 = t3.pendingProps, i3 = r3.revealOrder, a3 = r3.tail;
      r3 = r3.children;
      var o3 = zo.current;
      if (t3.flags & 128) return Bo(t3, o3), null;
      var s3 = !!(o3 & 2);
      if (s3 ? (o3 = o3 & 1 | 2, t3.flags |= 128) : o3 &= 1, Bo(t3, o3), i3 === `backwards` && e4 !== null ? (cl(e4), Ic(e4, t3, r3, n3), cl(e4)) : Ic(e4, t3, r3, n3), r3 = z2 ? Ji2 : 0, !s3 && e4 !== null && e4.flags & 128) a: for (e4 = t3.child; e4 !== null; ) {
        if (e4.tag === 13) e4.memoizedState !== null && al(e4, n3, t3);
        else if (e4.tag === 19) al(e4, n3, t3);
        else if (e4.child !== null) {
          e4.child.return = e4, e4 = e4.child;
          continue;
        }
        if (e4 === t3) break a;
        for (; e4.sibling === null; ) {
          if (e4.return === null || e4.return === t3) break a;
          e4 = e4.return;
        }
        e4.sibling.return = e4.return, e4 = e4.sibling;
      }
      switch (i3) {
        case `backwards`:
          n3 = ol(t3.child), n3 === null ? (i3 = t3.child, t3.child = null) : (i3 = n3.sibling, n3.sibling = null, cl(t3)), sl(t3, true, i3, null, a3, r3);
          break;
        case `unstable_legacy-backwards`:
          for (n3 = null, i3 = t3.child, t3.child = null; i3 !== null; ) {
            if (e4 = i3.alternate, e4 !== null && Ho(e4) === null) {
              t3.child = i3;
              break;
            }
            e4 = i3.sibling, i3.sibling = n3, n3 = i3, i3 = e4;
          }
          sl(t3, true, n3, null, a3, r3);
          break;
        case `together`:
          sl(t3, false, null, null, void 0, r3);
          break;
        case `independent`:
          t3.memoizedState = null;
          break;
        default:
          n3 = ol(t3.child), n3 === null ? (i3 = t3.child, t3.child = null) : (i3 = n3.sibling, n3.sibling = null), sl(t3, false, i3, n3, a3, r3);
      }
      return t3.child;
    }
    function ul(e4, t3, n3) {
      var r3 = t3.pendingProps;
      return ya2(t3, t3.type, r3.value), Ic(e4, t3, r3.children, n3), t3.child;
    }
    function dl(e4, t3, n3) {
      if (e4 !== null && (t3.dependencies = e4.dependencies), sd |= t3.lanes, (n3 & t3.childLanes) === 0) {
        if (e4 !== null) {
          if (Ca2(e4, t3, n3, false), (n3 & t3.childLanes) === 0) return null;
        } else return null;
      }
      if (e4 !== null && t3.child !== e4.child) throw Error(i2(153));
      if (t3.child !== null) {
        for (e4 = t3.child, n3 = Ii2(e4, e4.pendingProps), t3.child = n3, n3.return = t3; e4.sibling !== null; ) e4 = e4.sibling, n3 = n3.sibling = Ii2(e4, e4.pendingProps), n3.return = t3;
        n3.sibling = null;
      }
      return t3.child;
    }
    function fl(e4, t3) {
      return (e4.lanes & t3) !== 0 || (e4 = e4.dependencies, !!(e4 !== null && wa(e4)));
    }
    function pl(e4, t3, n3) {
      switch (t3.tag) {
        case 3:
          Ne2(t3, t3.stateNode.containerInfo), ya2(t3, Ma, e4.memoizedState.cache), pa2();
          break;
        case 27:
        case 5:
          Fe2(t3);
          break;
        case 4:
          Ne2(t3, t3.stateNode.containerInfo);
          break;
        case 10:
          ya2(t3, t3.type, t3.memoizedProps.value);
          break;
        case 31:
          if (t3.memoizedState !== null) return t3.flags |= 128, Fo(t3), null;
          break;
        case 13:
          var r3 = t3.memoizedState;
          if (r3 !== null) {
            if (r3.dehydrated !== null) return Po(t3), t3.flags |= 128, null;
            r3 = Ca2(e4, t3, n3, false);
            var i3 = t3.child.childLanes;
            return r3 || (n3 & i3) !== 0 ? el(e4, t3, n3) : (Po(t3), e4 = dl(e4, t3, n3), e4 === null ? null : e4.sibling);
          }
          Po(t3);
          break;
        case 19:
          if (t3.flags & 128) return ll(e4, t3, n3);
          if (i3 = !!(e4.flags & 128), r3 = (n3 & t3.childLanes) !== 0, r3 ||= (Ca2(e4, t3, n3, false), (n3 & t3.childLanes) !== 0), i3) {
            if (r3) return ll(e4, t3, n3);
            t3.flags |= 128;
          }
          if (i3 = t3.memoizedState, i3 !== null && (i3.rendering = null, i3.tail = null, i3.lastEffect = null), Bo(t3, zo.current), r3) break;
          return null;
        case 22:
          return t3.lanes = 0, Bc(e4, t3, n3, t3.pendingProps);
        case 24:
          ya2(t3, Ma, e4.memoizedState.cache);
      }
      return dl(e4, t3, n3);
    }
    function ml(e4, t3, n3) {
      if (e4 !== null) {
        if (e4.memoizedProps !== t3.pendingProps) Fc = true;
        else {
          if (!fl(e4, n3) && !(t3.flags & 128)) return Fc = false, pl(e4, t3, n3);
          Fc = !!(e4.flags & 131072);
        }
      } else Fc = false, z2 && t3.flags & 1048576 && ta2(t3, Ji2, t3.index);
      switch (t3.lanes = 0, t3.tag) {
        case 16:
          a: {
            var r3 = t3.pendingProps;
            if (e4 = no(t3.elementType), t3.type = e4, typeof e4 == `function`) Fi2(e4) ? (r3 = wc(e4, r3), t3.tag = 1, t3 = Yc(null, t3, e4, r3, n3)) : (t3.tag = 0, t3 = qc(null, t3, e4, r3, n3));
            else {
              if (e4 != null) {
                var a3 = e4.$$typeof;
                if (a3 === E2) {
                  t3.tag = 11, t3 = Lc(null, t3, e4, r3, n3);
                  break a;
                }
                if (a3 === fe2) {
                  t3.tag = 14, t3 = Rc(null, t3, e4, r3, n3);
                  break a;
                }
                if (a3 === le2) {
                  t3.tag = 10, t3.type = e4, t3 = ul(null, t3, n3);
                  break a;
                }
              }
              throw t3 = Se2(e4) || e4, Error(i2(306, t3, ``));
            }
          }
          return t3;
        case 0:
          return qc(e4, t3, t3.type, t3.pendingProps, n3);
        case 1:
          return r3 = t3.type, a3 = wc(r3, t3.pendingProps), Yc(e4, t3, r3, a3, n3);
        case 3:
          a: {
            if (Ne2(t3, t3.stateNode.containerInfo), e4 === null) throw Error(i2(387));
            r3 = t3.pendingProps;
            var o3 = t3.memoizedState;
            a3 = o3.element, _o(e4, t3), wo(t3, r3, null, n3);
            var s3 = t3.memoizedState;
            if (r3 = s3.cache, ya2(t3, Ma, r3), r3 !== o3.cache && Sa2(t3, [Ma], n3, true), Co(), r3 = s3.element, o3.isDehydrated) {
              if (o3 = { element: r3, isDehydrated: false, cache: s3.cache }, t3.updateQueue.baseState = o3, t3.memoizedState = o3, t3.flags & 256) {
                t3 = Xc(e4, t3, r3, n3);
                break a;
              }
              if (r3 !== a3) {
                a3 = Wi2(Error(i2(424)), t3), ha2(a3), t3 = Xc(e4, t3, r3, n3);
                break a;
              }
              switch (e4 = t3.stateNode.containerInfo, e4.nodeType) {
                case 9:
                  e4 = e4.body;
                  break;
                default:
                  e4 = e4.nodeName === `HTML` ? e4.ownerDocument.body : e4;
              }
              for (R2 = lm(e4.firstChild), aa2 = t3, z2 = true, oa2 = null, sa2 = true, n3 = mo(t3, null, r3, n3), t3.child = n3; n3; ) n3.flags = n3.flags & -3 | 134221824, n3 = n3.sibling;
            } else {
              if (pa2(), r3 === a3) {
                t3 = dl(e4, t3, n3);
                break a;
              }
              Ic(e4, t3, r3, n3);
            }
            t3 = t3.child;
          }
          return t3;
        case 26:
          return Kc(e4, t3), e4 === null ? (n3 = Nm(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n3 : z2 || (t3.stateNode = fp(t3.type, t3.pendingProps, je2.current, t3)) : t3.memoizedState = Nm(t3.type, e4.memoizedProps, t3.pendingProps, e4.memoizedState), null;
        case 27:
          return Fe2(t3), e4 === null && z2 && (r3 = t3.stateNode = hm(t3.type, t3.pendingProps, je2.current), aa2 = t3, sa2 = true, a3 = R2, Sp(t3.type) ? (um = a3, R2 = lm(r3.firstChild)) : R2 = a3), Ic(e4, t3, t3.pendingProps.children, n3), Kc(e4, t3), e4 === null && (t3.flags |= 4194304), t3.child;
        case 5:
          return e4 === null && z2 && ((a3 = r3 = R2) && (r3 = rm(r3, t3.type, t3.pendingProps, sa2), r3 === null ? a3 = false : (t3.stateNode = r3, aa2 = t3, R2 = lm(r3.firstChild), sa2 = false, a3 = true)), a3 || la2(t3)), Fe2(t3), a3 = t3.type, o3 = t3.pendingProps, s3 = e4 === null ? null : e4.memoizedProps, r3 = o3.children, pp(a3, o3) ? r3 = null : s3 !== null && pp(a3, s3) && (t3.flags |= 32), t3.memoizedState !== null && (a3 = es(e4, t3, rs, null, null, n3), sh._currentValue = a3), Kc(e4, t3), Ic(e4, t3, r3, n3), t3.child;
        case 6:
          return e4 === null && z2 && ((e4 = n3 = R2) && (n3 = im(n3, t3.pendingProps, sa2), n3 === null ? e4 = false : (t3.stateNode = n3, aa2 = t3, R2 = null, e4 = true)), e4 || la2(t3)), null;
        case 13:
          return el(e4, t3, n3);
        case 4:
          return Ne2(t3, t3.stateNode.containerInfo), r3 = t3.pendingProps, e4 === null ? t3.child = po(t3, null, r3, n3) : Ic(e4, t3, r3, n3), t3.child;
        case 11:
          return Lc(e4, t3, t3.type, t3.pendingProps, n3);
        case 7:
          return r3 = t3.pendingProps, Kc(e4, t3), Ic(e4, t3, r3, n3), t3.child;
        case 8:
          return Ic(e4, t3, t3.pendingProps.children, n3), t3.child;
        case 12:
          return Ic(e4, t3, t3.pendingProps.children, n3), t3.child;
        case 10:
          return ul(e4, t3, n3);
        case 9:
          return a3 = t3.type._context, r3 = t3.pendingProps.children, Ta(t3), a3 = Ea(a3), r3 = r3(a3), t3.flags |= 1, Ic(e4, t3, r3, n3), t3.child;
        case 14:
          return Rc(e4, t3, t3.type, t3.pendingProps, n3);
        case 15:
          return zc(e4, t3, t3.type, t3.pendingProps, n3);
        case 19:
          return ll(e4, t3, n3);
        case 31:
          return Gc(e4, t3, n3);
        case 22:
          return Bc(e4, t3, n3, t3.pendingProps);
        case 24:
          return Ta(t3), r3 = Ea(Ma), e4 === null ? (a3 = qa(), a3 === null && (a3 = K, o3 = Na(), a3.pooledCache = o3, o3.refCount++, o3 !== null && (a3.pooledCacheLanes |= n3), a3 = o3), t3.memoizedState = { parent: r3, cache: a3 }, go(t3), ya2(t3, Ma, a3)) : ((e4.lanes & n3) !== 0 && (_o(e4, t3), wo(t3, null, null, n3), Co()), a3 = e4.memoizedState, o3 = t3.memoizedState, a3.parent === r3 ? (r3 = o3.cache, ya2(t3, Ma, r3), r3 !== a3.cache && Sa2(t3, [Ma], n3, true)) : (a3 = { parent: r3, cache: r3 }, t3.memoizedState = a3, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = a3), ya2(t3, Ma, r3))), Ic(e4, t3, t3.pendingProps.children, n3), t3.child;
        case 30:
          return t3.stateNode === null && (t3.stateNode = { autoName: null, paired: null, clones: null, ref: null }), r3 = t3.pendingProps, r3.name != null && r3.name !== `auto` ? t3.flags |= e4 === null ? 18882560 : 18874368 : z2 && na2(t3), e4 !== null && e4.memoizedProps.name !== r3.name ? t3.flags |= 4194816 : Kc(e4, t3), Ic(e4, t3, r3.children, n3), t3.child;
        case 29:
          throw t3.pendingProps;
      }
      throw Error(i2(156, t3.tag));
    }
    function hl(e4) {
      e4.flags |= 4;
    }
    function gl(e4, t3, n3, r3, i3) {
      var a3;
      if ((a3 = !!(e4.mode & 32)) && (a3 = n3 === null ? Jm(t3, r3) : Jm(t3, r3) && (r3.src !== n3.src || r3.srcSet !== n3.srcSet)), a3) {
        if (e4.flags |= 16777216, (i3 & 335544128) === i3) {
          if (e4.stateNode.complete) e4.flags |= 8192;
          else if (Ud()) e4.flags |= 8192;
          else throw ro = $a, Za;
        }
      } else e4.flags &= -16777217;
    }
    function _l(e4, t3) {
      if (t3.type !== `stylesheet` || t3.state.loading & 4) e4.flags &= -16777217;
      else if (e4.flags |= 16777216, !Ym(t3)) {
        if (Ud()) e4.flags |= 8192;
        else throw ro = $a, Za;
      }
    }
    function vl(e4, t3) {
      t3 !== null && (e4.flags |= 4), e4.flags & 16384 && (t3 = e4.tag === 22 ? 536870912 : ht2(), e4.lanes |= t3, dd |= t3);
    }
    function yl(e4, t3) {
      if (!z2) switch (e4.tailMode) {
        case `visible`:
          break;
        case `collapsed`:
          for (var n3 = e4.tail, r3 = null; n3 !== null; ) n3.alternate !== null && (r3 = n3), n3 = n3.sibling;
          r3 === null ? t3 || e4.tail === null ? e4.tail = null : e4.tail.sibling = null : r3.sibling = null;
          break;
        default:
          for (t3 = e4.tail, n3 = null; t3 !== null; ) t3.alternate !== null && (n3 = t3), t3 = t3.sibling;
          n3 === null ? e4.tail = null : n3.sibling = null;
      }
    }
    function H(e4) {
      var t3 = e4.alternate !== null && e4.alternate.child === e4.child, n3 = 0, r3 = 0;
      if (t3) for (var i3 = e4.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags & 1206910976, r3 |= i3.flags & 1206910976, i3.return = e4, i3 = i3.sibling;
      else for (i3 = e4.child; i3 !== null; ) n3 |= i3.lanes | i3.childLanes, r3 |= i3.subtreeFlags, r3 |= i3.flags, i3.return = e4, i3 = i3.sibling;
      return e4.subtreeFlags |= r3, e4.childLanes = n3, t3;
    }
    function bl(e4, t3, n3) {
      var r3 = t3.pendingProps;
      switch (ra2(t3), t3.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return H(t3), null;
        case 1:
          return H(t3), null;
        case 3:
          return n3 = t3.stateNode, r3 = null, e4 !== null && (r3 = e4.memoizedState.cache), t3.memoizedState.cache !== r3 && (t3.flags |= 2048), ba2(Ma), Pe2(), n3.pendingContext && (n3.context = n3.pendingContext, n3.pendingContext = null), (e4 === null || e4.child === null) && (fa2(t3) ? hl(t3) : e4 === null || e4.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, ma2())), H(t3), null;
        case 26:
          var a3 = t3.type, o3 = t3.memoizedState;
          return e4 === null ? (hl(t3), o3 === null ? (H(t3), gl(t3, a3, null, r3, n3)) : (H(t3), _l(t3, o3))) : o3 ? o3 === e4.memoizedState ? (H(t3), t3.flags &= -16777217) : (hl(t3), H(t3), _l(t3, o3)) : (e4 = e4.memoizedProps, e4 !== r3 && hl(t3), H(t3), gl(t3, a3, e4, r3, n3)), null;
        case 27:
          if (Ie2(t3), n3 = je2.current, a3 = t3.type, e4 !== null && t3.stateNode != null) e4.memoizedProps !== r3 && hl(t3);
          else {
            if (!r3) {
              if (t3.stateNode === null) throw Error(i2(166));
              return H(t3), t3.subtreeFlags &= -33554433, null;
            }
            e4 = ke2.current, fa2(t3) ? ua2(t3, e4) : (e4 = hm(a3, r3, n3), t3.stateNode = e4, hl(t3));
          }
          return H(t3), t3.subtreeFlags &= -33554433, null;
        case 5:
          if (Ie2(t3), a3 = t3.type, e4 !== null && t3.stateNode != null) e4.memoizedProps !== r3 && hl(t3);
          else {
            if (!r3) {
              if (t3.stateNode === null) throw Error(i2(166));
              return H(t3), t3.subtreeFlags &= -33554433, null;
            }
            if (o3 = ke2.current, fa2(t3)) ua2(t3, o3);
            else {
              var s3 = lp(je2.current);
              switch (o3) {
                case 1:
                  o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, a3);
                  break;
                case 2:
                  o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, a3);
                  break;
                default:
                  switch (a3) {
                    case `svg`:
                      o3 = s3.createElementNS(`http://www.w3.org/2000/svg`, a3);
                      break;
                    case `math`:
                      o3 = s3.createElementNS(`http://www.w3.org/1998/Math/MathML`, a3);
                      break;
                    case `script`:
                      o3 = s3.createElement(`div`), o3.innerHTML = `<script><\/script>`, o3 = o3.removeChild(o3.firstChild);
                      break;
                    case `select`:
                      o3 = typeof r3.is == `string` ? s3.createElement(`select`, { is: r3.is }) : s3.createElement(`select`), r3.multiple ? o3.multiple = true : r3.size && (o3.size = r3.size);
                      break;
                    default:
                      o3 = typeof r3.is == `string` ? s3.createElement(a3, { is: r3.is }) : s3.createElement(a3);
                  }
              }
              o3[Dt2] = t3, o3[Ot2] = r3;
              a: for (s3 = t3.child; s3 !== null; ) {
                if (s3.tag === 5 || s3.tag === 6) o3.appendChild(s3.stateNode);
                else if (s3.tag !== 4 && s3.tag !== 27 && s3.child !== null) {
                  s3.child.return = s3, s3 = s3.child;
                  continue;
                }
                if (s3 === t3) break a;
                for (; s3.sibling === null; ) {
                  if (s3.return === null || s3.return === t3) break a;
                  s3 = s3.return;
                }
                s3.sibling.return = s3.return, s3 = s3.sibling;
              }
              t3.stateNode = o3;
              a: switch (np(o3, a3, r3), a3) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r3 = !!r3.autoFocus;
                  break a;
                case `img`:
                  r3 = true;
                  break a;
                default:
                  r3 = false;
              }
              r3 && hl(t3);
            }
          }
          return H(t3), t3.subtreeFlags &= -33554433, gl(t3, t3.type, e4 === null ? null : e4.memoizedProps, t3.pendingProps, n3), null;
        case 6:
          if (e4 && t3.stateNode != null) e4.memoizedProps !== r3 && hl(t3);
          else {
            if (typeof r3 != `string` && t3.stateNode === null) throw Error(i2(166));
            if (e4 = je2.current, fa2(t3)) {
              if (e4 = t3.stateNode, n3 = t3.memoizedProps, r3 = null, a3 = aa2, a3 !== null) switch (a3.tag) {
                case 27:
                case 5:
                  r3 = a3.memoizedProps;
              }
              e4[Dt2] = t3, e4 = !!(e4.nodeValue === n3 || r3 !== null && true === r3.suppressHydrationWarning || ep(e4.nodeValue, n3)), e4 || la2(t3, true);
            } else e4 = lp(e4).createTextNode(r3), e4[Dt2] = t3, t3.stateNode = e4;
          }
          return H(t3), null;
        case 31:
          if (n3 = t3.memoizedState, e4 === null || e4.memoizedState !== null) {
            if (r3 = fa2(t3), n3 !== null) {
              if (e4 === null) {
                if (!r3) throw Error(i2(318));
                if (e4 = t3.memoizedState, e4 = e4 === null ? null : e4.dehydrated, !e4) throw Error(i2(557));
                e4[Dt2] = t3;
              } else pa2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
              H(t3), e4 = false;
            } else n3 = ma2(), e4 !== null && e4.memoizedState !== null && (e4.memoizedState.hydrationErrors = n3), e4 = true;
            if (!e4) return t3.flags & 256 ? (Ro(t3), t3) : (Ro(t3), null);
            if (t3.flags & 128) throw Error(i2(558));
          }
          return H(t3), null;
        case 13:
          if (r3 = t3.memoizedState, e4 === null || e4.memoizedState !== null && e4.memoizedState.dehydrated !== null) {
            if (a3 = fa2(t3), r3 !== null && r3.dehydrated !== null) {
              if (e4 === null) {
                if (!a3) throw Error(i2(318));
                if (a3 = t3.memoizedState, a3 = a3 === null ? null : a3.dehydrated, !a3) throw Error(i2(317));
                a3[Dt2] = t3;
              } else pa2(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
              H(t3), a3 = false;
            } else a3 = ma2(), e4 !== null && e4.memoizedState !== null && (e4.memoizedState.hydrationErrors = a3), a3 = true;
            if (!a3) return t3.flags & 256 ? (Ro(t3), t3) : (Ro(t3), null);
          }
          return Ro(t3), t3.flags & 128 ? (t3.lanes = n3, t3) : (n3 = r3 !== null, e4 = e4 !== null && e4.memoizedState !== null, n3 && (r3 = t3.child, a3 = null, r3.alternate !== null && r3.alternate.memoizedState !== null && r3.alternate.memoizedState.cachePool !== null && (a3 = r3.alternate.memoizedState.cachePool.pool), o3 = null, r3.memoizedState !== null && r3.memoizedState.cachePool !== null && (o3 = r3.memoizedState.cachePool.pool), o3 !== a3 && (r3.flags |= 2048)), n3 !== e4 && n3 && (t3.child.flags |= 8192), vl(t3, t3.updateQueue), H(t3), null);
        case 4:
          return Pe2(), e4 === null && Wf(t3.stateNode.containerInfo), t3.flags |= 67108864, H(t3), null;
        case 10:
          return ba2(t3.type), H(t3), null;
        case 19:
          if (Vo(t3), r3 = t3.memoizedState, r3 === null) return H(t3), null;
          if (a3 = !!(t3.flags & 128), o3 = r3.rendering, o3 === null) {
            if (a3) yl(r3, false);
            else {
              if (od !== 0 || e4 !== null && e4.flags & 128) for (e4 = t3.child; e4 !== null; ) {
                if (o3 = Ho(e4), o3 !== null) {
                  for (t3.flags |= 128, yl(r3, false), e4 = o3.updateQueue, t3.updateQueue = e4, vl(t3, e4), t3.subtreeFlags = 0, e4 = n3, n3 = t3.child; n3 !== null; ) Li2(n3, e4), n3 = n3.sibling;
                  return Bo(t3, zo.current & 1 | 2), z2 && ea2(t3, r3.treeForkCount), t3.child;
                }
                e4 = e4.sibling;
              }
              r3.tail !== null && j2() > _d && (t3.flags |= 128, a3 = true, yl(r3, false), t3.lanes = 4194304);
            }
          } else {
            if (!a3) {
              if (e4 = Ho(o3), e4 !== null) {
                if (t3.flags |= 128, a3 = true, e4 = e4.updateQueue, t3.updateQueue = e4, vl(t3, e4), yl(r3, true), r3.tail === null && r3.tailMode !== `collapsed` && r3.tailMode !== `visible` && !o3.alternate && !z2) return H(t3), null;
              } else 2 * j2() - r3.renderingStartTime > _d && n3 !== 536870912 && (t3.flags |= 128, a3 = true, yl(r3, false), t3.lanes = 4194304);
            }
            r3.isBackwards ? (o3.sibling = t3.child, t3.child = o3) : (e4 = r3.last, e4 === null ? t3.child = o3 : e4.sibling = o3, r3.last = o3);
          }
          if (r3.tail !== null) {
            e4 = r3.tail;
            a: {
              for (n3 = e4; n3 !== null; ) {
                if (n3.alternate !== null) {
                  n3 = false;
                  break a;
                }
                n3 = n3.sibling;
              }
              n3 = true;
            }
            return r3.rendering = e4, r3.tail = e4.sibling, r3.renderingStartTime = j2(), e4.sibling = null, o3 = zo.current, o3 = a3 ? o3 & 1 | 2 : o3 & 1, r3.tailMode === `visible` || r3.tailMode === `collapsed` || !n3 || z2 ? Bo(t3, o3) : (n3 = o3, k2(Mo, t3), k2(zo, n3), No === null && (No = t3)), z2 && ea2(t3, r3.treeForkCount), e4;
          }
          return H(t3), null;
        case 22:
        case 23:
          return Ro(t3), jo(), r3 = t3.memoizedState !== null, e4 === null ? r3 && (t3.flags |= 8192) : e4.memoizedState !== null !== r3 && (t3.flags |= 8192), r3 ? n3 & 536870912 && !(t3.flags & 128) && (H(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : H(t3), n3 = t3.updateQueue, n3 !== null && vl(t3, n3.retryQueue), n3 = null, e4 !== null && e4.memoizedState !== null && e4.memoizedState.cachePool !== null && (n3 = e4.memoizedState.cachePool.pool), r3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r3 = t3.memoizedState.cachePool.pool), r3 !== n3 && (t3.flags |= 2048), e4 !== null && Oe2(Ka), null;
        case 24:
          return n3 = null, e4 !== null && (n3 = e4.memoizedState.cache), t3.memoizedState.cache !== n3 && (t3.flags |= 2048), ba2(Ma), H(t3), null;
        case 25:
          return null;
        case 30:
          return t3.flags |= 33554432, H(t3), null;
      }
      throw Error(i2(156, t3.tag));
    }
    function xl(e4, t3) {
      switch (ra2(t3), t3.tag) {
        case 1:
          return e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, t3) : null;
        case 3:
          return ba2(Ma), Pe2(), e4 = t3.flags, e4 & 65536 && !(e4 & 128) ? (t3.flags = e4 & -65537 | 128, t3) : null;
        case 26:
        case 27:
        case 5:
          return Ie2(t3), null;
        case 31:
          if (t3.memoizedState !== null) {
            if (Ro(t3), t3.alternate === null) throw Error(i2(340));
            pa2();
          }
          return e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, t3) : null;
        case 13:
          if (Ro(t3), e4 = t3.memoizedState, e4 !== null && e4.dehydrated !== null) {
            if (t3.alternate === null) throw Error(i2(340));
            pa2();
          }
          return e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, t3) : null;
        case 19:
          return Vo(t3), e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, e4 = t3.memoizedState, e4 !== null && (e4.rendering = null, e4.tail = null), t3.flags |= 4, t3) : null;
        case 4:
          return Pe2(), null;
        case 10:
          return ba2(t3.type), null;
        case 22:
        case 23:
          return Ro(t3), jo(), e4 !== null && Oe2(Ka), e4 = t3.flags, e4 & 65536 ? (t3.flags = e4 & -65537 | 128, t3) : null;
        case 24:
          return ba2(Ma), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Sl(e4, t3) {
      switch (ra2(t3), t3.tag) {
        case 3:
          ba2(Ma), Pe2();
          break;
        case 26:
        case 27:
        case 5:
          Ie2(t3);
          break;
        case 4:
          Pe2();
          break;
        case 31:
          t3.memoizedState !== null && Ro(t3);
          break;
        case 13:
          Ro(t3);
          break;
        case 19:
          Vo(t3);
          break;
        case 10:
          ba2(t3.type);
          break;
        case 22:
        case 23:
          Ro(t3), jo(), e4 !== null && Oe2(Ka);
          break;
        case 24:
          ba2(Ma);
      }
    }
    function Cl(e4, t3) {
      try {
        var n3 = t3.updateQueue, r3 = n3 === null ? null : n3.lastEffect;
        if (r3 !== null) {
          var i3 = r3.next;
          n3 = i3;
          do {
            if ((n3.tag & e4) === e4) {
              r3 = void 0;
              var a3 = n3.create, o3 = n3.inst;
              r3 = a3(), o3.destroy = r3;
            }
            n3 = n3.next;
          } while (n3 !== i3);
        }
      } catch (e5) {
        Z(t3, t3.return, e5);
      }
    }
    function wl(e4, t3, n3) {
      try {
        var r3 = t3.updateQueue, i3 = r3 === null ? null : r3.lastEffect;
        if (i3 !== null) {
          var a3 = i3.next;
          r3 = a3;
          do {
            if ((r3.tag & e4) === e4) {
              var o3 = r3.inst, s3 = o3.destroy;
              if (s3 !== void 0) {
                o3.destroy = void 0, i3 = t3;
                var c3 = n3, l3 = s3;
                try {
                  l3();
                } catch (e5) {
                  Z(i3, c3, e5);
                }
              }
            }
            r3 = r3.next;
          } while (r3 !== a3);
        }
      } catch (e5) {
        Z(t3, t3.return, e5);
      }
    }
    function Tl(e4) {
      var t3 = e4.updateQueue;
      if (t3 !== null) {
        var n3 = e4.stateNode;
        try {
          Eo(t3, n3);
        } catch (t4) {
          Z(e4, e4.return, t4);
        }
      }
    }
    function El(e4, t3, n3) {
      n3.props = wc(e4.type, e4.memoizedProps), n3.state = e4.memoizedState;
      try {
        n3.componentWillUnmount();
      } catch (n4) {
        Z(e4, t3, n4);
      }
    }
    function Dl(e4, t3) {
      try {
        var n3 = e4.ref;
        if (n3 !== null) {
          switch (e4.tag) {
            case 26:
            case 27:
            case 5:
              var r3 = e4.stateNode;
              break;
            case 30:
              var i3 = e4.stateNode, a3 = yi2(e4.memoizedProps, i3);
              (i3.ref === null || i3.ref.name !== a3) && (i3.ref = Pp(a3)), r3 = i3.ref;
              break;
            case 7:
              if (e4.stateNode === null) {
                var o3 = new Fp(e4);
                h2(e4.child, false, Qp, o3, void 0, void 0), e4.stateNode = o3;
              }
              r3 = e4.stateNode;
              break;
            default:
              r3 = e4.stateNode;
          }
          typeof n3 == `function` ? e4.refCleanup = n3(r3) : n3.current = r3;
        }
      } catch (n4) {
        Z(e4, t3, n4);
      }
    }
    function Ol(e4, t3) {
      var n3 = e4.ref, r3 = e4.refCleanup;
      if (n3 !== null) {
        if (typeof r3 == `function`) try {
          r3();
        } catch (n4) {
          Z(e4, t3, n4);
        } finally {
          e4.refCleanup = null, e4 = e4.alternate, e4 != null && (e4.refCleanup = null);
        }
        else if (typeof n3 == `function`) try {
          n3(null);
        } catch (n4) {
          Z(e4, t3, n4);
        }
        else n3.current = null;
      }
    }
    function kl(e4, t3) {
      if ((e4.tag === 5 || e4.tag === 27 || e4.tag === 6) && e4.alternate === null && t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) em(e4.stateNode, t3[n3]);
    }
    function Al(e4) {
      for (var t3 = e4.return; t3 !== null && (Nl(t3) && em(e4.stateNode, t3.stateNode), !Ml(t3)); ) t3 = t3.return;
    }
    function jl(e4) {
      for (var t3 = e4.return; t3 !== null && (Nl(t3) && tm(e4.stateNode, t3.stateNode), !Ml(t3)); ) t3 = t3.return;
    }
    function Ml(e4) {
      return e4.tag === 5 || e4.tag === 3 || e4.tag === 27;
    }
    function Nl(e4) {
      return e4 && e4.tag === 7 && e4.stateNode !== null;
    }
    function Pl(e4) {
      var t3 = e4.type, n3 = e4.memoizedProps, r3 = e4.stateNode;
      try {
        a: switch (t3) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n3.autoFocus && r3.focus();
            break a;
          case `img`:
            n3.src ? r3.src = n3.src : n3.srcSet && (r3.srcset = n3.srcSet);
        }
      } catch (t4) {
        Z(e4, e4.return, t4);
      }
    }
    function Fl(e4, t3, n3) {
      try {
        var r3 = e4.stateNode;
        ip(r3, e4.type, n3, t3), r3[Ot2] = t3;
      } catch (t4) {
        Z(e4, e4.return, t4);
      }
    }
    function Il(e4) {
      return e4.tag === 5 || e4.tag === 3 || e4.tag === 26 || e4.tag === 27 && Sp(e4.type) || e4.tag === 4;
    }
    function Ll(e4) {
      a: for (; ; ) {
        for (; e4.sibling === null; ) {
          if (e4.return === null || Il(e4.return)) return null;
          e4 = e4.return;
        }
        for (e4.sibling.return = e4.return, e4 = e4.sibling; e4.tag !== 5 && e4.tag !== 6 && e4.tag !== 18; ) {
          if (e4.tag === 27 && Sp(e4.type) || e4.flags & 2 || e4.child === null || e4.tag === 4) continue a;
          e4.child.return = e4, e4 = e4.child;
        }
        if (!(e4.flags & 2)) return e4.stateNode;
      }
    }
    function Rl(e4, t3, n3, r3) {
      var i3 = e4.tag;
      if (i3 === 5 || i3 === 6) i3 = e4.stateNode, t3 ? (n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3).insertBefore(i3, t3) : (t3 = n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3, t3.appendChild(i3), n3 = n3._reactRootContainer, n3 != null || t3.onclick !== null || (t3.onclick = xn2)), kl(e4, r3), I2 = true;
      else if (i3 !== 4 && (i3 === 27 && (kl(e4, r3), r3 = null, Sp(e4.type) && (n3 = e4.stateNode, t3 = null)), e4 = e4.child, e4 !== null)) for (Rl(e4, t3, n3, r3), e4 = e4.sibling; e4 !== null; ) Rl(e4, t3, n3, r3), e4 = e4.sibling;
    }
    function zl(e4, t3, n3, r3) {
      var i3 = e4.tag;
      if (i3 === 5 || i3 === 6) i3 = e4.stateNode, t3 ? n3.insertBefore(i3, t3) : n3.appendChild(i3), kl(e4, r3), I2 = true;
      else if (i3 !== 4 && (i3 === 27 && (kl(e4, r3), r3 = null, Sp(e4.type) && (n3 = e4.stateNode)), e4 = e4.child, e4 !== null)) for (zl(e4, t3, n3, r3), e4 = e4.sibling; e4 !== null; ) zl(e4, t3, n3, r3), e4 = e4.sibling;
    }
    function Bl(e4) {
      var t3 = e4.stateNode, n3 = e4.memoizedProps;
      try {
        for (var r3 = e4.type, i3 = t3.attributes; i3.length; ) t3.removeAttributeNode(i3[0]);
        np(t3, r3, n3), t3[Dt2] = e4, t3[Ot2] = n3;
      } catch (t4) {
        Z(e4, e4.return, t4);
      }
    }
    var Vl = false, Hl = null;
    function Ul(e4) {
      (e4.tag === 30 || e4.subtreeFlags & 33554432) && (Vl = true);
    }
    var Wl = null;
    function Gl() {
      var e4 = Wl;
      return Wl = null, e4;
    }
    var Kl = 0;
    function ql(e4, t3, n3, r3, i3) {
      return Kl = 0, Jl(e4.child, t3, n3, r3, i3);
    }
    function Jl(e4, t3, n3, r3, i3) {
      for (var a3 = false; e4 !== null; ) {
        if (e4.tag === 5) {
          var o3 = e4.stateNode;
          if (r3 !== null) {
            var s3 = Op(o3);
            r3.push(s3), s3.view && (a3 = true);
          } else a3 || Op(o3).view && (a3 = true);
          Vl = true, Tp(o3, Kl === 0 ? t3 : t3 + `_` + Kl, n3), Kl++;
        } else e4.tag === 22 && e4.memoizedState !== null || e4.tag === 30 && i3 || Jl(e4.child, t3, n3, r3, i3) && (a3 = true);
        e4 = e4.sibling;
      }
      return a3;
    }
    function Yl(e4, t3) {
      for (; e4 !== null; ) e4.tag === 5 ? Ep(e4.stateNode, e4.memoizedProps) : e4.tag === 22 && e4.memoizedState !== null || e4.tag === 30 && t3 || Yl(e4.child, t3), e4 = e4.sibling;
    }
    function Xl(e4) {
      if (e4.subtreeFlags & 18874368) for (e4 = e4.child; e4 !== null; ) {
        if ((e4.tag !== 22 || e4.memoizedState === null) && (Xl(e4), e4.tag === 30 && e4.flags & 18874368 && e4.stateNode.paired)) {
          var t3 = e4.memoizedProps;
          if (t3.name == null || t3.name === `auto`) throw Error(i2(544));
          var n3 = t3.name;
          t3 = xi2(t3.default, t3.share), t3 !== `none` && (ql(e4, n3, t3, null, false) || Yl(e4.child, false));
        }
        e4 = e4.sibling;
      }
    }
    function Zl(e4, t3) {
      if (e4.tag === 30) {
        var n3 = e4.stateNode, r3 = e4.memoizedProps, i3 = yi2(r3, n3), a3 = xi2(r3.default, n3.paired ? r3.share : r3.enter);
        a3 === `none` ? Xl(e4) : ql(e4, i3, a3, null, false) ? (Xl(e4), n3.paired || t3 || Nd(e4, r3.onEnter)) : Yl(e4.child, false);
      } else if (e4.subtreeFlags & 33554432) for (e4 = e4.child; e4 !== null; ) Zl(e4, t3), e4 = e4.sibling;
      else Xl(e4);
    }
    function Ql(e4) {
      if (Hl !== null && Hl.size !== 0) {
        var t3 = Hl;
        if (e4.subtreeFlags & 18874368) for (e4 = e4.child; e4 !== null; ) {
          if (e4.tag !== 22 || e4.memoizedState === null) {
            if (e4.tag === 30 && e4.flags & 18874368) {
              var n3 = e4.memoizedProps, r3 = n3.name;
              if (r3 != null && r3 !== `auto`) {
                var i3 = t3.get(r3);
                if (i3 !== void 0) {
                  var a3 = xi2(n3.default, n3.share);
                  if (a3 !== `none` && (ql(e4, r3, a3, null, false) ? (a3 = e4.stateNode, i3.paired = a3, a3.paired = i3, Nd(e4, n3.onShare)) : Yl(e4.child, false)), t3.delete(r3), t3.size === 0) break;
                }
              }
            }
            Ql(e4);
          }
          e4 = e4.sibling;
        }
      }
    }
    function $l(e4) {
      if (e4.tag === 30) {
        var t3 = e4.memoizedProps, n3 = yi2(t3, e4.stateNode), r3 = Hl === null ? void 0 : Hl.get(n3), i3 = xi2(t3.default, r3 === void 0 ? t3.exit : t3.share);
        i3 !== `none` && (ql(e4, n3, i3, null, false) ? r3 === void 0 ? Nd(e4, t3.onExit) : (i3 = e4.stateNode, r3.paired = i3, i3.paired = r3, Hl.delete(n3), Nd(e4, t3.onShare)) : Yl(e4.child, false)), Hl !== null && Ql(e4);
      } else if (e4.subtreeFlags & 33554432) for (e4 = e4.child; e4 !== null; ) $l(e4), e4 = e4.sibling;
      else Hl !== null && Ql(e4);
    }
    function eu(e4) {
      for (e4 = e4.child; e4 !== null; ) {
        if (e4.tag === 30) {
          var t3 = e4.memoizedProps, n3 = yi2(t3, e4.stateNode);
          t3 = xi2(t3.default, t3.update), e4.flags &= -5, t3 !== `none` && ql(e4, n3, t3, e4.memoizedState = [], false);
        } else e4.subtreeFlags & 33554432 && eu(e4);
        e4 = e4.sibling;
      }
    }
    function tu(e4) {
      if (e4.subtreeFlags & 18874368) for (e4 = e4.child; e4 !== null; ) {
        if (e4.tag !== 22 || e4.memoizedState === null) {
          if (e4.tag === 30 && e4.flags & 18874368) {
            var t3 = e4.stateNode;
            t3.paired !== null && (t3.paired = null, Yl(e4.child, false));
          }
          tu(e4);
        }
        e4 = e4.sibling;
      }
    }
    function nu(e4) {
      if (e4.tag === 30) e4.stateNode.paired = null, Yl(e4.child, false), tu(e4);
      else if (e4.subtreeFlags & 33554432) for (e4 = e4.child; e4 !== null; ) nu(e4), e4 = e4.sibling;
      else tu(e4);
    }
    function ru(e4) {
      for (e4 = e4.child; e4 !== null; ) e4.tag === 30 ? Yl(e4.child, false) : e4.subtreeFlags & 33554432 && ru(e4), e4 = e4.sibling;
    }
    function iu(e4, t3, n3, r3, i3, a3, o3) {
      for (var s3 = false; t3 !== null; ) {
        if (t3.tag === 5) {
          var c3 = t3.stateNode;
          if (a3 !== null && Kl < a3.length) {
            var l3 = a3[Kl], u2 = Op(c3);
            (l3.view || u2.view) && (s3 = true);
            var d3;
            if (d3 = !(e4.flags & 4)) {
              if (u2.clip) d3 = true;
              else {
                d3 = l3.rect;
                var f2 = u2.rect;
                d3 = d3.y !== f2.y || d3.x !== f2.x || d3.height !== f2.height || d3.width !== f2.width;
              }
            }
            d3 && (e4.flags |= 4), u2.abs ? u2 = !l3.abs : (l3 = l3.rect, u2 = u2.rect, u2 = l3.height !== u2.height || l3.width !== u2.width), u2 && (e4.flags |= 32);
          } else e4.flags |= 32;
          e4.flags & 4 && Tp(c3, Kl === 0 ? n3 : n3 + `_` + Kl, i3), s3 && e4.flags & 4 || (Wl === null && (Wl = []), Wl.push(c3, Kl === 0 ? r3 : r3 + `_` + Kl, t3.memoizedProps)), Kl++;
        } else (t3.tag !== 22 || t3.memoizedState === null) && (t3.tag === 30 && o3 ? e4.flags |= t3.flags & 32 : iu(e4, t3.child, n3, r3, i3, a3, o3) && (s3 = true));
        t3 = t3.sibling;
      }
      return s3;
    }
    function au(e4, t3) {
      for (e4 = e4.child; e4 !== null; ) {
        if (e4.tag === 30) {
          var n3 = e4.memoizedProps, r3 = e4.stateNode, i3 = yi2(n3, r3), a3 = xi2(n3.default, n3.update);
          if (t3) {
            r3 = r3.clones;
            var o3 = r3 === null ? null : r3.map(kp);
          } else o3 = e4.memoizedState, e4.memoizedState = null;
          r3 = e4;
          var s3 = e4.child;
          Kl = 0, i3 = iu(r3, s3, i3, i3, a3, o3, false), e4.flags & 4 && i3 && (t3 || Nd(e4, n3.onUpdate));
        } else e4.subtreeFlags & 33554432 && au(e4, t3);
        e4 = e4.sibling;
      }
    }
    var ou = false, U = false, su = false, cu = false, lu = typeof WeakSet == `function` ? WeakSet : Set, uu = null, du = false, fu = false, pu = false, mu = false;
    function hu(e4, t3, n3) {
      if (e4 = e4.containerInfo, sp = gh, e4 = Yr2(e4), Xr2(e4)) {
        if (`selectionStart` in e4) var r3 = { start: e4.selectionStart, end: e4.selectionEnd };
        else a: {
          r3 = (r3 = e4.ownerDocument) && r3.defaultView || window;
          var i3 = r3.getSelection && r3.getSelection();
          if (i3 && i3.rangeCount !== 0) {
            r3 = i3.anchorNode;
            var a3 = i3.anchorOffset, o3 = i3.focusNode;
            i3 = i3.focusOffset;
            try {
              r3.nodeType, o3.nodeType;
            } catch {
              r3 = null;
              break a;
            }
            var s3 = 0, c3 = -1, l3 = -1, u2 = 0, d3 = 0, f2 = e4, p3 = null;
            b: for (; ; ) {
              for (var m2; f2 !== r3 || a3 !== 0 && f2.nodeType !== 3 || (c3 = s3 + a3), f2 !== o3 || i3 !== 0 && f2.nodeType !== 3 || (l3 = s3 + i3), f2.nodeType === 3 && (s3 += f2.nodeValue.length), (m2 = f2.firstChild) !== null; ) p3 = f2, f2 = m2;
              for (; ; ) {
                if (f2 === e4) break b;
                if (p3 === r3 && ++u2 === a3 && (c3 = s3), p3 === o3 && ++d3 === i3 && (l3 = s3), (m2 = f2.nextSibling) !== null) break;
                f2 = p3, p3 = f2.parentNode;
              }
              f2 = m2;
            }
            r3 = c3 === -1 || l3 === -1 ? null : { start: c3, end: l3 };
          } else r3 = null;
        }
        r3 ||= { start: 0, end: 0 };
      } else r3 = null;
      for (cp = { focusedElem: e4, selectionRange: r3 }, gh = false, n3 = (n3 & 335544064) === n3, uu = t3, t3 = n3 ? 9270 : 1024; uu !== null; ) {
        if (e4 = uu, n3 && (r3 = e4.deletions, r3 !== null)) for (a3 = 0; a3 < r3.length; a3++) n3 && $l(r3[a3]);
        if (e4.alternate === null && e4.flags & 2) n3 && Ul(e4), gu(n3);
        else {
          if (e4.tag === 22) {
            if (r3 = e4.alternate, e4.memoizedState !== null) {
              r3 !== null && r3.memoizedState === null && n3 && $l(r3), gu(n3);
              continue;
            }
            if (r3 !== null && r3.memoizedState !== null) {
              n3 && Ul(e4), gu(n3);
              continue;
            }
          }
          r3 = e4.child, (e4.subtreeFlags & t3) !== 0 && r3 !== null ? (r3.return = e4, uu = r3) : (n3 && eu(e4), gu(n3));
        }
      }
      Hl = null;
    }
    function gu(e4) {
      for (; uu !== null; ) {
        var t3 = uu, n3 = e4, r3 = t3.alternate, a3 = t3.flags;
        switch (t3.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (a3 & 1024 && r3 !== null) {
              n3 = void 0, a3 = r3.memoizedProps, r3 = r3.memoizedState;
              var o3 = t3.stateNode;
              try {
                var s3 = wc(t3.type, a3);
                n3 = o3.getSnapshotBeforeUpdate(s3, r3), o3.__reactInternalSnapshotBeforeUpdate = n3;
              } catch (e5) {
                Z(t3, t3.return, e5);
              }
            }
            break;
          case 3:
            if (a3 & 1024) {
              if (r3 = t3.stateNode.containerInfo, n3 = r3.nodeType, n3 === 9) nm(r3);
              else if (n3 === 1) switch (r3.nodeName) {
                case `HEAD`:
                case `HTML`:
                case `BODY`:
                  nm(r3);
                  break;
                default:
                  r3.textContent = ``;
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          case 30:
            n3 && r3 !== null && (n3 = yi2(r3.memoizedProps, r3.stateNode), a3 = t3.memoizedProps, a3 = xi2(a3.default, a3.update), a3 !== `none` && ql(r3, n3, a3, r3.memoizedState = [], true));
            break;
          default:
            if (a3 & 1024) throw Error(i2(163));
        }
        if (r3 = t3.sibling, r3 !== null) {
          r3.return = t3.return, uu = r3;
          break;
        }
        uu = t3.return;
      }
    }
    function _u(e4, t3, n3) {
      var r3 = n3.flags;
      switch (n3.tag) {
        case 0:
        case 11:
        case 15:
          Iu(e4, n3), r3 & 4 && Cl(5, n3);
          break;
        case 1:
          if (Iu(e4, n3), r3 & 4) {
            if (e4 = n3.stateNode, t3 === null) try {
              e4.componentDidMount();
            } catch (e5) {
              Z(n3, n3.return, e5);
            }
            else {
              var i3 = wc(n3.type, t3.memoizedProps);
              t3 = t3.memoizedState;
              try {
                e4.componentDidUpdate(i3, t3, e4.__reactInternalSnapshotBeforeUpdate);
              } catch (e5) {
                Z(n3, n3.return, e5);
              }
            }
          }
          r3 & 64 && Tl(n3), r3 & 512 && Dl(n3, n3.return);
          break;
        case 3:
          if (Iu(e4, n3), r3 & 64 && (e4 = n3.updateQueue, e4 !== null)) {
            if (t3 = null, n3.child !== null) switch (n3.child.tag) {
              case 27:
              case 5:
                t3 = n3.child.stateNode;
                break;
              case 1:
                t3 = n3.child.stateNode;
            }
            try {
              Eo(e4, t3);
            } catch (e5) {
              Z(n3, n3.return, e5);
            }
          }
          break;
        case 27:
          t3 === null && r3 & 4 && Bl(n3);
        case 26:
        case 5:
          Iu(e4, n3), t3 === null && r3 & 4 && Pl(n3), r3 & 512 && Dl(n3, n3.return);
          break;
        case 12:
          Iu(e4, n3);
          break;
        case 31:
          Iu(e4, n3), r3 & 4 && Tu(e4, n3);
          break;
        case 13:
          Iu(e4, n3), r3 & 4 && Eu(e4, n3), r3 & 64 && (e4 = n3.memoizedState, e4 !== null && (e4 = e4.dehydrated, e4 !== null && (n3 = _f.bind(null, n3), cm(e4, n3))));
          break;
        case 22:
          if (r3 = n3.memoizedState !== null || ou, !r3) {
            var a3 = t3 !== null && t3.memoizedState !== null || U;
            t3 = ou, i3 = U, ou = r3, (U = a3) && !i3 ? (r3 = 2, n3.subtreeFlags & 8772 && (r3 |= 1), Ru(e4, n3, r3)) : Iu(e4, n3), ou = t3, U = i3;
          }
          break;
        case 30:
          Iu(e4, n3), r3 & 512 && Dl(n3, n3.return);
          break;
        case 7:
          r3 & 512 && Dl(n3, n3.return);
        default:
          Iu(e4, n3);
      }
    }
    function vu(e4, t3) {
      for (e4 = e4.child; e4 !== null; ) yu(e4, t3), e4 = e4.sibling;
    }
    function yu(e4, t3) {
      switch (e4.tag) {
        case 5:
        case 26:
          try {
            var n3 = e4.stateNode;
            if (t3) {
              var r3 = n3.style;
              typeof r3.setProperty == `function` ? r3.setProperty(`display`, `none`, `important`) : r3.display = `none`;
            } else {
              var i3 = e4.stateNode, a3 = e4.memoizedProps.style, o3 = a3 != null && a3.hasOwnProperty(`display`) ? a3.display : null;
              i3.style.display = o3 == null || typeof o3 == `boolean` ? `` : (`` + o3).trim();
            }
          } catch (t4) {
            Z(e4, e4.return, t4);
          }
          bu(e4, t3);
          break;
        case 6:
          try {
            e4.stateNode.nodeValue = t3 ? `` : e4.memoizedProps, I2 = true;
          } catch (t4) {
            Z(e4, e4.return, t4);
          }
          break;
        case 18:
          try {
            var s3 = e4.stateNode;
            t3 ? wp(s3, true) : wp(e4.stateNode, false);
          } catch (t4) {
            Z(e4, e4.return, t4);
          }
          break;
        case 22:
        case 23:
          e4.memoizedState === null && vu(e4, t3);
          break;
        default:
          vu(e4, t3);
      }
    }
    function bu(e4, t3) {
      if (e4.subtreeFlags & 67108864) for (e4 = e4.child; e4 !== null; ) {
        a: {
          var n3 = e4, r3 = t3;
          switch (n3.tag) {
            case 4:
              yu(n3, r3);
              break a;
            case 22:
              n3.memoizedState === null && bu(n3, r3);
              break a;
            default:
              bu(n3, r3);
          }
        }
        e4 = e4.sibling;
      }
    }
    function xu(e4) {
      var t3 = e4.alternate;
      t3 !== null && (e4.alternate = null, xu(t3)), e4.child = null, e4.deletions = null, e4.sibling = null, e4.tag === 5 && (t3 = e4.stateNode, t3 !== null && Pt2(t3)), e4.stateNode = null, e4.return = null, e4.dependencies = null, e4.memoizedProps = null, e4.memoizedState = null, e4.pendingProps = null, e4.stateNode = null, e4.updateQueue = null;
    }
    var W = null, Su = false;
    function Cu(e4, t3, n3) {
      for (n3 = n3.child; n3 !== null; ) wu(e4, t3, n3), n3 = n3.sibling;
    }
    function wu(e4, t3, n3) {
      if (rt2 && typeof rt2.onCommitFiberUnmount == `function`) try {
        rt2.onCommitFiberUnmount(nt2, n3);
      } catch {
      }
      switch (n3.tag) {
        case 26:
          U || Ol(n3, t3), Cu(e4, t3, n3), n3.memoizedState ? n3.memoizedState.count-- : n3.stateNode && !U && (n3 = n3.stateNode, n3.parentNode.removeChild(n3));
          break;
        case 27:
          U || Ol(n3, t3), jl(n3);
          var r3 = W, i3 = Su;
          Sp(n3.type) && (W = n3.stateNode, Su = false), Cu(e4, t3, n3), gm(n3.stateNode, n3.type, n3.memoizedProps), W = r3, Su = i3;
          break;
        case 5:
          U || Ol(n3, t3), jl(n3);
        case 6:
          if (n3.tag === 6 && jl(n3), r3 = W, i3 = Su, W = null, Cu(e4, t3, n3), W = r3, Su = i3, W !== null) {
            if (Su) try {
              (W.nodeType === 9 ? W.body : W.nodeName === `HTML` ? W.ownerDocument.body : W).removeChild(n3.stateNode), I2 = true;
            } catch (e5) {
              Z(n3, t3, e5);
            }
            else try {
              W.removeChild(n3.stateNode), I2 = true;
            } catch (e5) {
              Z(n3, t3, e5);
            }
          }
          break;
        case 18:
          W !== null && (Su ? (e4 = W, Cp(e4.nodeType === 9 ? e4.body : e4.nodeName === `HTML` ? e4.ownerDocument.body : e4, n3.stateNode), Hh(e4)) : Cp(W, n3.stateNode));
          break;
        case 4:
          r3 = W, i3 = Su, W = n3.stateNode.containerInfo, Su = true, Cu(e4, t3, n3), W = r3, Su = i3;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          wl(2, n3, t3), U || wl(4, n3, t3), Cu(e4, t3, n3);
          break;
        case 1:
          U || (Ol(n3, t3), r3 = n3.stateNode, typeof r3.componentWillUnmount == `function` && El(n3, t3, r3)), Cu(e4, t3, n3);
          break;
        case 21:
          Cu(e4, t3, n3);
          break;
        case 22:
          U = (r3 = U) || n3.memoizedState !== null, Cu(e4, t3, n3), U = r3;
          break;
        case 30:
          Ol(n3, t3), Cu(e4, t3, n3);
          break;
        case 7:
          U || Ol(n3, t3), Cu(e4, t3, n3);
          break;
        default:
          Cu(e4, t3, n3);
      }
    }
    function Tu(e4, t3) {
      if (t3.memoizedState === null && (e4 = t3.alternate, e4 !== null && (e4 = e4.memoizedState, e4 !== null))) {
        e4 = e4.dehydrated;
        try {
          Hh(e4);
        } catch (e5) {
          Z(t3, t3.return, e5);
        }
      }
    }
    function Eu(e4, t3) {
      if (t3.memoizedState === null && (e4 = t3.alternate, e4 !== null && (e4 = e4.memoizedState, e4 !== null && (e4 = e4.dehydrated, e4 !== null)))) try {
        Hh(e4);
      } catch (e5) {
        Z(t3, t3.return, e5);
      }
    }
    function Du(e4) {
      switch (e4.tag) {
        case 31:
        case 13:
        case 19:
          var t3 = e4.stateNode;
          return t3 === null && (t3 = e4.stateNode = new lu()), t3;
        case 22:
          return e4 = e4.stateNode, t3 = e4._retryCache, t3 === null && (t3 = e4._retryCache = new lu()), t3;
        default:
          throw Error(i2(435, e4.tag));
      }
    }
    function Ou(e4, t3) {
      var n3 = Du(e4);
      t3.forEach(function(t4) {
        if (!n3.has(t4)) {
          n3.add(t4);
          var r3 = vf.bind(null, e4, t4);
          t4.then(r3, r3);
        }
      });
    }
    function ku(e4, t3, n3) {
      var r3 = t3.deletions;
      if (r3 !== null) for (var a3 = 0; a3 < r3.length; a3++) {
        var o3 = r3[a3], s3 = e4, c3 = t3, l3 = c3;
        a: for (; l3 !== null; ) {
          switch (l3.tag) {
            case 27:
              if (Sp(l3.type)) {
                W = l3.stateNode, Su = false;
                break a;
              }
              break;
            case 5:
              W = l3.stateNode, Su = false;
              break a;
            case 3:
            case 4:
              W = l3.stateNode.containerInfo, Su = true;
              break a;
          }
          l3 = l3.return;
        }
        if (W === null) throw Error(i2(160));
        wu(s3, c3, o3), W = null, Su = false, s3 = o3.alternate, s3 !== null && (s3.return = null), o3.return = null;
      }
      if (t3.subtreeFlags & 13886) for (t3 = t3.child; t3 !== null; ) ju(t3, e4, n3), t3 = t3.sibling;
    }
    var Au = null;
    function ju(e4, t3, n3) {
      var r3 = e4.alternate, a3 = e4.flags;
      switch (e4.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (a3 & 4 && (r3 = e4.updateQueue, r3 = r3 === null ? null : r3.events, r3 !== null)) for (var o3 = 0; o3 < r3.length; o3++) {
            var s3 = r3[o3];
            s3.ref.impl = s3.nextImpl;
          }
          ku(t3, e4, n3), Mu(e4), a3 & 4 && (wl(3, e4, e4.return), Cl(3, e4), wl(5, e4, e4.return));
          break;
        case 1:
          ku(t3, e4, n3), Mu(e4), a3 & 512 && (U || r3 === null || Ol(r3, r3.return)), a3 & 64 && ou && (e4 = e4.updateQueue, e4 !== null && (t3 = e4.callbacks, t3 !== null && (n3 = e4.shared.hiddenCallbacks, e4.shared.hiddenCallbacks = n3 === null ? t3 : n3.concat(t3))));
          break;
        case 26:
          if (o3 = Au, ku(t3, e4, n3), Mu(e4), a3 & 512 && (U || r3 === null || Ol(r3, r3.return)), a3 & 4) {
            if (a3 = r3 === null ? null : r3.memoizedState, n3 = e4.memoizedState, r3 === null) {
              if (n3 === null) {
                if (e4.stateNode === null) {
                  if (ou) e4.stateNode = fp(e4.type, e4.memoizedProps, t3.containerInfo, e4);
                  else {
                    a: {
                      t3 = e4.type, n3 = e4.memoizedProps, a3 = o3.ownerDocument || o3;
                      b: switch (t3) {
                        case `title`:
                          r3 = a3.getElementsByTagName(`title`)[0], (!r3 || r3[P2] || r3[Dt2] || r3.namespaceURI === `http://www.w3.org/2000/svg` || r3.hasAttribute(`itemprop`)) && (r3 = a3.createElement(t3), a3.head.insertBefore(r3, a3.querySelector(`head > title`))), np(r3, t3, n3), r3[Dt2] = e4, zt2(r3), t3 = r3;
                          break a;
                        case `link`:
                          if (o3 = Gm(`link`, `href`, a3).get(t3 + (n3.href || ``))) {
                            for (s3 = 0; s3 < o3.length; s3++) if (r3 = o3[s3], r3.getAttribute(`href`) === (n3.href == null || n3.href === `` ? null : n3.href) && r3.getAttribute(`rel`) === (n3.rel == null ? null : n3.rel) && r3.getAttribute(`title`) === (n3.title == null ? null : n3.title) && r3.getAttribute(`crossorigin`) === (n3.crossOrigin == null ? null : n3.crossOrigin)) {
                              o3.splice(s3, 1);
                              break b;
                            }
                          }
                          r3 = a3.createElement(t3), np(r3, t3, n3), a3.head.appendChild(r3);
                          break;
                        case `meta`:
                          if (o3 = Gm(`meta`, `content`, a3).get(t3 + (n3.content || ``))) {
                            for (s3 = 0; s3 < o3.length; s3++) if (r3 = o3[s3], r3.getAttribute(`content`) === (n3.content == null ? null : `` + n3.content) && r3.getAttribute(`name`) === (n3.name == null ? null : n3.name) && r3.getAttribute(`property`) === (n3.property == null ? null : n3.property) && r3.getAttribute(`http-equiv`) === (n3.httpEquiv == null ? null : n3.httpEquiv) && r3.getAttribute(`charset`) === (n3.charSet == null ? null : n3.charSet)) {
                              o3.splice(s3, 1);
                              break b;
                            }
                          }
                          r3 = a3.createElement(t3), np(r3, t3, n3), a3.head.appendChild(r3);
                          break;
                        default:
                          throw Error(i2(468, t3));
                      }
                      r3[Dt2] = e4, zt2(r3), t3 = r3;
                    }
                    e4.stateNode = t3;
                  }
                } else ou || Km(o3, e4.type, e4.stateNode);
              } else e4.stateNode = Bm(o3, n3, e4.memoizedProps);
            } else a3 === n3 ? n3 === null && e4.stateNode !== null && Fl(e4, e4.memoizedProps, r3.memoizedProps) : (a3 === null ? (t3 = r3.stateNode, t3 === null || U || t3.parentNode.removeChild(t3)) : a3.count--, n3 === null ? ou || Km(o3, e4.type, e4.stateNode) : Bm(o3, n3, e4.memoizedProps));
          }
          break;
        case 27:
          ku(t3, e4, n3), Mu(e4), a3 & 512 && (U || r3 === null || Ol(r3, r3.return)), r3 !== null && a3 & 4 && Fl(e4, e4.memoizedProps, r3.memoizedProps);
          break;
        case 5:
          if (o3 = su, su = false, ku(t3, e4, n3), su = o3, Mu(e4), a3 & 512 && (U || r3 === null || Ol(r3, r3.return)), e4.flags & 32) {
            t3 = e4.stateNode;
            try {
              pn2(t3, ``), I2 = true;
            } catch (t4) {
              Z(e4, e4.return, t4);
            }
          }
          a3 & 4 && e4.stateNode != null && (t3 = e4.memoizedProps, Fl(e4, t3, r3 === null ? t3 : r3.memoizedProps)), a3 & 1024 && (cu = true);
          break;
        case 6:
          if (ku(t3, e4, n3), Mu(e4), a3 & 4) {
            if (e4.stateNode === null) throw Error(i2(162));
            t3 = e4.memoizedProps, n3 = e4.stateNode;
            try {
              n3.nodeValue = t3, I2 = true;
            } catch (t4) {
              Z(e4, e4.return, t4);
            }
          }
          break;
        case 3:
          if (I2 = false, Wm = null, o3 = Au, Au = bm(t3.containerInfo), ku(t3, e4, n3), Au = o3, Mu(e4), a3 & 4 && r3 !== null && r3.memoizedState.isDehydrated) try {
            Hh(t3.containerInfo);
          } catch (t4) {
            Z(e4, e4.return, t4);
          }
          cu && (cu = false, Nu(e4)), I2 = false;
          break;
        case 4:
          a3 = su, su = ou, r3 = Yt2(), o3 = Au, Au = bm(e4.stateNode.containerInfo), ku(t3, e4, n3), Mu(e4), Au = o3, I2 && fu && (pu = true), I2 = r3, su = a3;
          break;
        case 12:
          ku(t3, e4, n3), Mu(e4);
          break;
        case 31:
          ku(t3, e4, n3), Mu(e4), a3 & 4 && (t3 = e4.updateQueue, t3 !== null && (e4.updateQueue = null, Ou(e4, t3)));
          break;
        case 13:
          ku(t3, e4, n3), Mu(e4), e4.child.flags & 8192 && e4.memoizedState !== null != (r3 !== null && r3.memoizedState !== null) && (hd = j2()), a3 & 4 && (t3 = e4.updateQueue, t3 !== null && (e4.updateQueue = null, Ou(e4, t3)));
          break;
        case 22:
          o3 = e4.memoizedState !== null, s3 = r3 !== null && r3.memoizedState !== null;
          var c3 = ou, l3 = U, u2 = su;
          ou = c3 || o3, su = u2 || o3, U = l3 || s3, ku(t3, e4, n3), U = l3, su = u2, ou = c3, Mu(e4), a3 & 8192 && (t3 = e4.stateNode, t3._visibility = o3 ? t3._visibility & -2 : t3._visibility | 1, !o3 || r3 === null || s3 || ou || U || (t3 = s3 || U, n3 = ou, r3 = U, ou = o3 || ou, U = t3, Lu(e4, 2), ou = n3, U = r3), !o3 && su || vu(e4, o3)), a3 & 4 && (t3 = e4.updateQueue, t3 !== null && (n3 = t3.retryQueue, n3 !== null && (t3.retryQueue = null, Ou(e4, n3))));
          break;
        case 19:
          ku(t3, e4, n3), Mu(e4), a3 & 4 && (t3 = e4.updateQueue, t3 !== null && (e4.updateQueue = null, Ou(e4, t3)));
          break;
        case 30:
          a3 & 512 && (U || r3 === null || Ol(r3, r3.return)), a3 = Yt2(), o3 = fu, s3 = (n3 & 335544064) === n3, c3 = e4.memoizedProps, fu = s3 && xi2(c3.default, c3.update) !== `none`, ku(t3, e4, n3), Mu(e4), s3 && r3 !== null && I2 && (e4.flags |= 4), fu = o3, I2 = a3;
          break;
        case 21:
          break;
        case 7:
          a3 & 512 && (U || r3 === null || Ol(r3, r3.return)), r3 && r3.stateNode !== null && (r3.stateNode._fragmentFiber = e4);
        default:
          ku(t3, e4, n3), Mu(e4);
      }
    }
    function Mu(e4) {
      var t3 = e4.flags;
      if (t3 & 2) {
        try {
          for (var n3, r3 = e4.return; r3 !== null; ) {
            if (Il(r3)) {
              n3 = r3;
              break;
            }
            r3 = r3.return;
          }
          r3 = null;
          for (var a3 = e4.return; a3 !== null; ) {
            if (Nl(a3)) {
              var o3 = a3.stateNode;
              r3 === null ? r3 = [o3] : r3.push(o3);
            }
            if (Ml(a3)) break;
            a3 = a3.return;
          }
          var s3 = r3;
          if (n3 == null) throw Error(i2(160));
          switch (n3.tag) {
            case 27:
              var c3 = n3.stateNode;
              zl(e4, Ll(e4), c3, s3);
              break;
            case 5:
              var l3 = n3.stateNode;
              n3.flags & 32 && (pn2(l3, ``), n3.flags &= -33), zl(e4, Ll(e4), l3, s3);
              break;
            case 3:
            case 4:
              var u2 = n3.stateNode.containerInfo;
              Rl(e4, Ll(e4), u2, s3);
              break;
            default:
              throw Error(i2(161));
          }
        } catch (t4) {
          Z(e4, e4.return, t4);
        }
        e4.flags &= -3;
      }
      t3 & 4096 && (e4.flags &= -4097);
    }
    function Nu(e4) {
      if (e4.subtreeFlags & 1024) for (e4 = e4.child; e4 !== null; ) {
        var t3 = e4;
        Nu(t3), t3.tag === 5 && t3.flags & 1024 && (t3 = t3.stateNode, gh = true, t3.reset(), gh = false), e4 = e4.sibling;
      }
    }
    function Pu(e4, t3) {
      if (t3.subtreeFlags & 9270) for (t3 = t3.child; t3 !== null; ) Fu(t3, e4), t3 = t3.sibling;
      else au(t3, false);
    }
    function Fu(e4, t3) {
      var n3 = e4.alternate;
      if (n3 === null) Zl(e4, false);
      else switch (e4.tag) {
        case 3:
          if (mu = du = false, Gl(), Pu(t3, e4), !du && !pu) {
            if (e4 = Wl, e4 !== null) for (var r3 = 0; r3 < e4.length; r3 += 3) {
              n3 = e4[r3];
              var i3 = e4[r3 + 1];
              Ep(n3, e4[r3 + 2]), n3 = n3.ownerDocument.documentElement, n3 !== null && n3.animate({ opacity: [0, 0], pointerEvents: [`none`, `none`] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(` + i3 + `)` });
            }
            e4 = t3.containerInfo, e4 = e4.nodeType === 9 ? e4.documentElement : e4.ownerDocument.documentElement, e4 !== null && e4.style.viewTransitionName === `` && (e4.style.viewTransitionName = `none`, e4.animate({ opacity: [0, 0], pointerEvents: [`none`, `none`] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(root)` }), e4.animate({ width: [0, 0], height: [0, 0] }, { duration: 0, fill: `forwards`, pseudoElement: `::view-transition` })), mu = true;
          }
          Wl = null;
          break;
        case 5:
          Pu(t3, e4);
          break;
        case 4:
          r3 = du, du = false, Pu(t3, e4), du && (pu = true), du = r3;
          break;
        case 22:
          e4.memoizedState === null && (n3.memoizedState === null ? Pu(t3, e4) : Zl(e4, false));
          break;
        case 30:
          r3 = du, i3 = Gl(), du = false, Pu(t3, e4), du && (e4.flags |= 4);
          var a3 = e4.memoizedProps, o3 = e4.stateNode;
          t3 = yi2(a3, o3), o3 = yi2(n3.memoizedProps, o3);
          var s3 = xi2(a3.default, a3.update);
          s3 === `none` ? t3 = false : (a3 = n3.memoizedState, n3.memoizedState = null, n3 = e4.child, Kl = 0, t3 = iu(e4, n3, t3, o3, s3, a3, true), Kl !== (a3 === null ? 0 : a3.length) && (e4.flags |= 32)), e4.flags & 4 && t3 ? (Nd(e4, e4.memoizedProps.onUpdate), Wl = i3) : i3 !== null && (i3.push.apply(i3, Wl), Wl = i3), du = e4.flags & 32 ? true : r3;
          break;
        default:
          Pu(t3, e4);
      }
    }
    function Iu(e4, t3) {
      if (t3.subtreeFlags & 8772) for (t3 = t3.child; t3 !== null; ) _u(e4, t3.alternate, t3), t3 = t3.sibling;
    }
    function Lu(e4, t3) {
      for (e4 = e4.child; e4 !== null; ) {
        var n3 = e4, r3 = t3;
        switch (n3.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            wl(4, n3, n3.return), Lu(n3, r3);
            break;
          case 1:
            Ol(n3, n3.return);
            var i3 = n3.stateNode;
            typeof i3.componentWillUnmount == `function` && El(n3, n3.return, i3), Lu(n3, r3);
            break;
          case 27:
            r3 & 2 && gm(n3.stateNode, n3.type, n3.memoizedProps);
          case 5:
            Ol(n3, n3.return), n3.tag !== 5 && n3.tag !== 27 || jl(n3), Lu(n3, r3);
            break;
          case 6:
            jl(n3);
            break;
          case 26:
            Ol(n3, n3.return), i3 = n3.stateNode, n3.memoizedState !== null || i3 === null || U || i3.parentNode.removeChild(i3), Lu(n3, r3);
            break;
          case 22:
            n3.memoizedState === null && Lu(n3, r3);
            break;
          case 30:
            Ol(n3, n3.return), Lu(n3, r3);
            break;
          case 7:
            Ol(n3, n3.return);
          default:
            Lu(n3, r3);
        }
        e4 = e4.sibling;
      }
    }
    function Ru(e4, t3, n3) {
      for (n3 = t3.subtreeFlags & 8772 ? n3 : n3 & -2, t3 = t3.child; t3 !== null; ) {
        var r3 = t3.alternate, i3 = e4, a3 = t3, o3 = a3.flags, s3 = !!(n3 & 1);
        switch (a3.tag) {
          case 0:
          case 11:
          case 15:
            Ru(i3, a3, n3), Cl(4, a3);
            break;
          case 1:
            if (Ru(i3, a3, n3), r3 = a3, i3 = r3.stateNode, typeof i3.componentDidMount == `function`) try {
              i3.componentDidMount();
            } catch (e5) {
              Z(r3, r3.return, e5);
            }
            if (r3 = a3, i3 = r3.updateQueue, i3 !== null) {
              var c3 = r3.stateNode;
              try {
                var l3 = i3.shared.hiddenCallbacks;
                if (l3 !== null) for (i3.shared.hiddenCallbacks = null, i3 = 0; i3 < l3.length; i3++) To(l3[i3], c3);
              } catch (e5) {
                Z(r3, r3.return, e5);
              }
            }
            s3 && o3 & 64 && Tl(a3), Dl(a3, a3.return);
            break;
          case 27:
            n3 & 2 && Bl(a3);
          case 5:
            a3.tag !== 5 && a3.tag !== 27 || Al(a3), Ru(i3, a3, n3), s3 && r3 === null && o3 & 4 && Pl(a3), Dl(a3, a3.return);
            break;
          case 6:
            Al(a3);
            break;
          case 26:
            c3 = a3.stateNode, a3.memoizedState !== null || c3 === null || ou || Km(bm(c3.ownerDocument), a3.type, c3), Ru(i3, a3, n3), s3 && r3 === null && o3 & 4 && Pl(a3), Dl(a3, a3.return);
            break;
          case 12:
            Ru(i3, a3, n3);
            break;
          case 31:
            Ru(i3, a3, n3), s3 && o3 & 4 && Tu(i3, a3);
            break;
          case 13:
            Ru(i3, a3, n3), s3 && o3 & 4 && Eu(i3, a3);
            break;
          case 22:
            a3.memoizedState === null && Ru(i3, a3, n3), Dl(a3, a3.return);
            break;
          case 30:
            Ru(i3, a3, n3), Dl(a3, a3.return);
            break;
          case 7:
            Dl(a3, a3.return);
          default:
            Ru(i3, a3, n3);
        }
        t3 = t3.sibling;
      }
    }
    function zu(e4, t3) {
      var n3 = null;
      e4 !== null && e4.memoizedState !== null && e4.memoizedState.cachePool !== null && (n3 = e4.memoizedState.cachePool.pool), e4 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e4 = t3.memoizedState.cachePool.pool), e4 !== n3 && (e4 != null && e4.refCount++, n3 != null && Pa(n3));
    }
    function Bu(e4, t3) {
      e4 = null, t3.alternate !== null && (e4 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e4 && (t3.refCount++, e4 != null && Pa(e4));
    }
    function Vu(e4, t3, n3, r3) {
      var i3 = (n3 & 335544064) === n3;
      if (t3.subtreeFlags & (i3 ? 10262 : 10256)) for (t3 = t3.child; t3 !== null; ) Hu(e4, t3, n3, r3), t3 = t3.sibling;
      else i3 && ru(t3);
    }
    function Hu(e4, t3, n3, r3) {
      var i3 = (n3 & 335544064) === n3;
      i3 && t3.alternate === null && t3.return !== null && t3.return.alternate !== null && nu(t3);
      var a3 = t3.flags;
      switch (t3.tag) {
        case 0:
        case 11:
        case 15:
          Vu(e4, t3, n3, r3), a3 & 2048 && Cl(9, t3);
          break;
        case 1:
          Vu(e4, t3, n3, r3);
          break;
        case 3:
          Vu(e4, t3, n3, r3), i3 && mu && (e4 = e4.containerInfo, e4 = e4.nodeType === 9 ? e4.body : e4.nodeName === `HTML` ? e4.ownerDocument.body : e4, e4.style.viewTransitionName === `root` && (e4.style.viewTransitionName = ``), e4 = e4.ownerDocument.documentElement, e4 !== null && e4.style.viewTransitionName === `none` && (e4.style.viewTransitionName = ``)), a3 & 2048 && (a3 = null, t3.alternate !== null && (a3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== a3 && (t3.refCount++, a3 != null && Pa(a3)));
          break;
        case 12:
          if (a3 & 2048) {
            Vu(e4, t3, n3, r3), a3 = t3.stateNode;
            try {
              var o3 = t3.memoizedProps, s3 = o3.id, c3 = o3.onPostCommit;
              typeof c3 == `function` && c3(s3, t3.alternate === null ? `mount` : `update`, a3.passiveEffectDuration, -0);
            } catch (e5) {
              Z(t3, t3.return, e5);
            }
          } else Vu(e4, t3, n3, r3);
          break;
        case 31:
          Vu(e4, t3, n3, r3);
          break;
        case 13:
          Vu(e4, t3, n3, r3);
          break;
        case 23:
          break;
        case 22:
          o3 = t3.stateNode, s3 = t3.alternate, t3.memoizedState === null ? (i3 && s3 !== null && s3.memoizedState !== null && nu(t3), o3._visibility & 2 ? Vu(e4, t3, n3, r3) : (o3._visibility |= 2, Uu(e4, t3, n3, r3, !!(t3.subtreeFlags & 10256) || false))) : (i3 && s3 !== null && s3.memoizedState === null && nu(s3), o3._visibility & 2 ? Vu(e4, t3, n3, r3) : Wu(e4, t3)), a3 & 2048 && zu(s3, t3);
          break;
        case 24:
          Vu(e4, t3, n3, r3), a3 & 2048 && Bu(t3.alternate, t3);
          break;
        case 30:
          i3 && (a3 = t3.alternate, a3 !== null && (Yl(a3.child, true), Yl(t3.child, true))), Vu(e4, t3, n3, r3);
          break;
        default:
          Vu(e4, t3, n3, r3);
      }
    }
    function Uu(e4, t3, n3, r3, i3) {
      for (i3 &&= !!(t3.subtreeFlags & 10256) || false, t3 = t3.child; t3 !== null; ) {
        var a3 = e4, o3 = t3, s3 = n3, c3 = r3, l3 = o3.flags;
        switch (o3.tag) {
          case 0:
          case 11:
          case 15:
            Uu(a3, o3, s3, c3, i3), Cl(8, o3);
            break;
          case 23:
            break;
          case 22:
            var u2 = o3.stateNode;
            o3.memoizedState === null ? (u2._visibility |= 2, Uu(a3, o3, s3, c3, i3)) : u2._visibility & 2 ? Uu(a3, o3, s3, c3, i3) : Wu(a3, o3), i3 && l3 & 2048 && zu(o3.alternate, o3);
            break;
          case 24:
            Uu(a3, o3, s3, c3, i3), i3 && l3 & 2048 && Bu(o3.alternate, o3);
            break;
          default:
            Uu(a3, o3, s3, c3, i3);
        }
        t3 = t3.sibling;
      }
    }
    function Wu(e4, t3) {
      if (t3.subtreeFlags & 10256) for (t3 = t3.child; t3 !== null; ) {
        var n3 = e4, r3 = t3, i3 = r3.flags;
        switch (r3.tag) {
          case 22:
            Wu(n3, r3), i3 & 2048 && zu(r3.alternate, r3);
            break;
          case 24:
            Wu(n3, r3), i3 & 2048 && Bu(r3.alternate, r3);
            break;
          default:
            Wu(n3, r3);
        }
        t3 = t3.sibling;
      }
    }
    var Gu = 8192;
    function Ku(e4, t3, n3) {
      if (e4.subtreeFlags & Gu) for (e4 = e4.child; e4 !== null; ) qu(e4, t3, n3), e4 = e4.sibling;
    }
    function qu(e4, t3, n3) {
      switch (e4.tag) {
        case 26:
          Ku(e4, t3, n3), e4.flags & Gu && (e4.memoizedState === null ? (e4 = e4.stateNode, (t3 & 335544128) === t3 && Zm(n3, e4)) : Qm(n3, Au, e4.memoizedState, e4.memoizedProps));
          break;
        case 5:
          Ku(e4, t3, n3), e4.flags & Gu && (e4 = e4.stateNode, (t3 & 335544128) === t3 && Zm(n3, e4));
          break;
        case 3:
        case 4:
          var r3 = Au;
          Au = bm(e4.stateNode.containerInfo), Ku(e4, t3, n3), Au = r3;
          break;
        case 22:
          e4.memoizedState === null && (r3 = e4.alternate, r3 !== null && r3.memoizedState !== null ? (r3 = Gu, Gu = 16777216, Ku(e4, t3, n3), Gu = r3) : Ku(e4, t3, n3));
          break;
        case 30:
          if ((e4.flags & Gu) !== 0 && (r3 = e4.memoizedProps.name, r3 != null && r3 !== `auto`)) {
            var i3 = e4.stateNode;
            i3.paired = null, Hl === null && (Hl = /* @__PURE__ */ new Map()), Hl.set(r3, i3);
          }
          Ku(e4, t3, n3);
          break;
        default:
          Ku(e4, t3, n3);
      }
    }
    function Ju(e4) {
      var t3 = e4.alternate;
      if (t3 !== null && (e4 = t3.child, e4 !== null)) {
        t3.child = null;
        do
          t3 = e4.sibling, e4.sibling = null, e4 = t3;
        while (e4 !== null);
      }
    }
    function Yu(e4) {
      var t3 = e4.deletions;
      if (e4.flags & 16) {
        if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
          var r3 = t3[n3];
          uu = r3, Qu(r3, e4);
        }
        Ju(e4);
      }
      if (e4.subtreeFlags & 10256) for (e4 = e4.child; e4 !== null; ) Xu(e4), e4 = e4.sibling;
    }
    function Xu(e4) {
      switch (e4.tag) {
        case 0:
        case 11:
        case 15:
          Yu(e4), e4.flags & 2048 && wl(9, e4, e4.return);
          break;
        case 3:
          Yu(e4);
          break;
        case 12:
          Yu(e4);
          break;
        case 22:
          var t3 = e4.stateNode;
          e4.memoizedState !== null && t3._visibility & 2 && (e4.return === null || e4.return.tag !== 13) ? (t3._visibility &= -3, Zu(e4)) : Yu(e4);
          break;
        default:
          Yu(e4);
      }
    }
    function Zu(e4) {
      var t3 = e4.deletions;
      if (e4.flags & 16) {
        if (t3 !== null) for (var n3 = 0; n3 < t3.length; n3++) {
          var r3 = t3[n3];
          uu = r3, Qu(r3, e4);
        }
        Ju(e4);
      }
      for (e4 = e4.child; e4 !== null; ) {
        switch (t3 = e4, t3.tag) {
          case 0:
          case 11:
          case 15:
            wl(8, t3, t3.return), Zu(t3);
            break;
          case 22:
            n3 = t3.stateNode, n3._visibility & 2 && (n3._visibility &= -3, Zu(t3));
            break;
          default:
            Zu(t3);
        }
        e4 = e4.sibling;
      }
    }
    function Qu(e4, t3) {
      for (; uu !== null; ) {
        var n3 = uu;
        switch (n3.tag) {
          case 0:
          case 11:
          case 15:
            wl(8, n3, t3);
            break;
          case 23:
          case 22:
            if (n3.memoizedState !== null && n3.memoizedState.cachePool !== null) {
              var r3 = n3.memoizedState.cachePool.pool;
              r3 != null && r3.refCount++;
            }
            break;
          case 24:
            Pa(n3.memoizedState.cache);
        }
        if (r3 = n3.child, r3 !== null) r3.return = n3, uu = r3;
        else a: for (n3 = e4; uu !== null; ) {
          r3 = uu;
          var i3 = r3.sibling, a3 = r3.return;
          if (xu(r3), r3 === n3) {
            uu = null;
            break a;
          }
          if (i3 !== null) {
            i3.return = a3, uu = i3;
            break a;
          }
          uu = a3;
        }
      }
    }
    var $u = { getCacheForType: function(e4) {
      var t3 = Ea(Ma), n3 = t3.data.get(e4);
      return n3 === void 0 && (n3 = e4(), t3.data.set(e4, n3)), n3;
    }, cacheSignal: function() {
      return Ea(Ma).controller.signal;
    } }, ed = typeof WeakMap == `function` ? WeakMap : Map, G = 0, K = null, q = null, J = 0, Y = 0, td = null, nd = false, rd = false, id = false, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = 0, fd = null, pd = null, md = false, hd = 0, gd = 0, _d = 1 / 0, vd = null, yd = null, X = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
    function jd() {
      return G & 2 && J !== 0 ? J & -J : D2.T === null ? wt2() : Pf();
    }
    function Md() {
      if (ud === 0) {
        if (!(J & 536870912) || z2) {
          var e4 = lt2;
          lt2 <<= 1, !(lt2 & 3932160) && (lt2 = 262144), ud = e4;
        } else ud = 536870912;
      }
      return e4 = Mo.current, e4 !== null && (e4.flags |= 32), ud;
    }
    function Nd(e4, t3) {
      if (t3 != null) {
        var n3 = e4.stateNode, r3 = n3.ref;
        r3 === null && (r3 = n3.ref = Pp(yi2(e4.memoizedProps, n3))), Dd === null && (Dd = []), Dd.push(t3.bind(null, r3));
      }
    }
    function Pd(e4, t3, n3) {
      (e4 === K && (Y === 2 || Y === 9) || e4.cancelPendingCommit !== null) && (Vd(e4, 0), Rd(e4, J, ud, false)), _t2(e4, n3), G & 2 && e4 === K || (e4 === K && (!(G & 2) && (cd |= n3), od === 4 && Rd(e4, J, ud, false)), Ef(e4));
    }
    function Fd(e4, t3, n3) {
      if (G & 6) throw Error(i2(327));
      var r3 = !n3 && !(t3 & 127) && (t3 & e4.expiredLanes) === 0 || ft2(e4, t3), a3 = r3 ? Yd(e4, t3) : qd(e4, t3, true), o3 = r3;
      do {
        if (a3 === 0) {
          rd && !r3 && Rd(e4, t3, 0, false);
          break;
        }
        if (n3 = e4.current.alternate, o3 && !Ld(n3)) a3 = qd(e4, t3, false), o3 = false;
        else {
          if (a3 === 2) {
            if (o3 = t3, e4.errorRecoveryDisabledLanes & o3) var s3 = 0;
            else s3 = e4.pendingLanes & -536870913, s3 = s3 === 0 ? s3 & 536870912 ? 536870912 : 0 : s3;
            if (s3 !== 0) {
              t3 = s3;
              a: {
                var c3 = e4;
                a3 = fd;
                var l3 = c3.current.memoizedState.isDehydrated;
                if (l3 && (Vd(c3, s3).flags |= 256), s3 = qd(c3, s3, false), s3 !== 2 && s3 !== 6) {
                  if (id && !l3) {
                    c3.errorRecoveryDisabledLanes |= o3, cd |= o3, a3 = 4;
                    break a;
                  }
                  o3 = pd, pd = a3, o3 !== null && (pd === null ? pd = o3 : pd.push.apply(pd, o3));
                }
                a3 = s3;
              }
              if (o3 = false, a3 !== 2) continue;
            }
          }
          if (a3 === 1) {
            Vd(e4, 0), Rd(e4, t3, 0, true);
            break;
          }
          a: {
            switch (r3 = e4, o3 = a3, o3) {
              case 0:
              case 1:
                throw Error(i2(345));
              case 4:
                if ((t3 & 4194048) !== t3 && (t3 & 62914560) !== t3) break;
              case 6:
                Rd(r3, t3, ud, !nd);
                break a;
              case 2:
                pd = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(i2(329));
            }
            if ((t3 & 62914560) === t3 && (a3 = hd + 300 - j2(), 10 < a3)) {
              if (Rd(r3, t3, ud, !nd), dt2(r3, 0, true) !== 0) break a;
              Sd = t3, r3.timeoutHandle = gp(Id.bind(null, r3, n3, pd, vd, md, t3, ud, cd, dd, nd, o3, `Throttled`, -0, 0), a3);
              break a;
            }
            Id(r3, n3, pd, vd, md, t3, ud, cd, dd, nd, o3, null, -0, 0);
          }
          break;
        }
      } while (1);
      Ef(e4);
    }
    function Id(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u2, d3, f2, p3) {
      e4.timeoutHandle = -1;
      var m2 = t3.subtreeFlags, h3 = (a3 & 335544064) === a3;
      d3 = null, (h3 || m2 & 8192 || (m2 & 16785408) == 16785408) && (d3 = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: xn2 }, Hl = null, qu(t3, a3, d3), h3 && (m2 = d3, h3 = e4.containerInfo, h3 = (h3.nodeType === 9 ? h3 : h3.ownerDocument).__reactViewTransition, h3 != null && (m2.count++, m2.waitingForViewTransition = true, m2 = nh.bind(m2), h3.finished.then(m2, m2))), m2 = (a3 & 62914560) === a3 ? hd - j2() : (a3 & 4194048) === a3 ? gd - j2() : 0, m2 = eh(d3, m2), m2 !== null) ? (Sd = a3, e4.cancelPendingCommit = m2(nf.bind(null, e4, t3, a3, n3, r3, i3, o3, s3, c3, l3, u2, d3, null, f2, p3)), Rd(e4, a3, o3, !l3)) : nf(e4, t3, a3, n3, r3, i3, o3, s3, c3, l3, u2, d3);
    }
    function Ld(e4) {
      for (var t3 = e4; ; ) {
        var n3 = t3.tag;
        if ((n3 === 0 || n3 === 11 || n3 === 15) && t3.flags & 16384 && (n3 = t3.updateQueue, n3 !== null && (n3 = n3.stores, n3 !== null))) for (var r3 = 0; r3 < n3.length; r3++) {
          var i3 = n3[r3], a3 = i3.getSnapshot;
          i3 = i3.value;
          try {
            if (!Ur2(a3(), i3)) return false;
          } catch {
            return false;
          }
        }
        if (n3 = t3.child, t3.subtreeFlags & 16384 && n3 !== null) n3.return = t3, t3 = n3;
        else {
          if (t3 === e4) break;
          for (; t3.sibling === null; ) {
            if (t3.return === null || t3.return === e4) return true;
            t3 = t3.return;
          }
          t3.sibling.return = t3.return, t3 = t3.sibling;
        }
      }
      return true;
    }
    function Rd(e4, t3, n3, r3) {
      t3 = pt2(e4, t3), t3 &= ~ld, t3 &= ~cd, e4.suspendedLanes |= t3, e4.pingedLanes &= ~t3, r3 && (e4.warmLanes |= t3), r3 = e4.expirationTimes;
      for (var i3 = t3; 0 < i3; ) {
        var a3 = 31 - it2(i3), o3 = 1 << a3;
        r3[a3] = -1, i3 &= ~o3;
      }
      n3 !== 0 && yt2(e4, n3, t3);
    }
    function zd() {
      return G & 6 ? true : (Df(0, false), false);
    }
    function Bd() {
      if (q !== null) {
        if (Y === 0) var e4 = q.return;
        else e4 = q, va2 = _a2 = null, os(e4), oo = null, so = 0, e4 = q;
        for (; e4 !== null; ) Sl(e4.alternate, e4), e4 = e4.return;
        q = null;
      }
    }
    function Vd(e4, t3) {
      var n3 = e4.timeoutHandle;
      return n3 !== -1 && (e4.timeoutHandle = -1, _p(n3)), n3 = e4.cancelPendingCommit, n3 !== null && (e4.cancelPendingCommit = null, n3()), Sd = 0, Bd(), K = e4, q = n3 = Ii2(e4.current, null), J = t3, Y = 0, td = null, nd = false, rd = ft2(e4, t3), id = false, dd = ud = ld = cd = sd = od = 0, pd = fd = null, md = false, ad = pt2(e4, t3), Ei2(), n3;
    }
    function Hd(e4, t3) {
      B = null, D2.H = gc, t3 === Xa || t3 === Qa ? (t3 = io(), Y = 3) : t3 === Za ? (t3 = io(), Y = 4) : Y = t3 === Pc ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, td = t3, q === null && (od = 1, Oc(e4, Wi2(t3, e4.current)));
    }
    function Ud() {
      var e4 = Mo.current;
      return e4 === null ? true : (J & 4194048) === J ? No === null : (J & 62914560) === J || J & 536870912 ? e4 === No : false;
    }
    function Wd() {
      var e4 = D2.H;
      return D2.H = gc, e4 === null ? gc : e4;
    }
    function Gd() {
      var e4 = D2.A;
      return D2.A = $u, e4;
    }
    function Kd() {
      od = 4, nd || (J & 4194048) !== J && Mo.current !== null || (rd = true), !(sd & 134217727) && !(cd & 134217727) || K === null || Rd(K, J, ud, false);
    }
    function qd(e4, t3, n3) {
      var r3 = G;
      G |= 2;
      var i3 = Wd(), a3 = Gd();
      (K !== e4 || J !== t3) && (vd = null, Vd(e4, t3)), t3 = false;
      var o3 = od;
      a: do
        try {
          if (Y !== 0 && q !== null) {
            var s3 = q, c3 = td;
            switch (Y) {
              case 8:
                Bd(), o3 = 6;
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                Mo.current === null && (t3 = true);
                var l3 = Y;
                if (Y = 0, td = null, $d(e4, s3, c3, l3), n3 && rd) {
                  o3 = 0;
                  break a;
                }
                break;
              default:
                l3 = Y, Y = 0, td = null, $d(e4, s3, c3, l3);
            }
          }
          Jd(), o3 = od;
          break;
        } catch (t4) {
          Hd(e4, t4);
        }
      while (1);
      return t3 && e4.shellSuspendCounter++, va2 = _a2 = null, G = r3, D2.H = i3, D2.A = a3, q === null && (K = null, J = 0, Ei2()), o3;
    }
    function Jd() {
      for (; q !== null; ) Zd(q);
    }
    function Yd(e4, t3) {
      var n3 = G;
      G |= 2;
      var r3 = Wd(), a3 = Gd();
      K !== e4 || J !== t3 ? (vd = null, _d = j2() + 500, Vd(e4, t3)) : rd = ft2(e4, t3);
      a: do
        try {
          if (Y !== 0 && q !== null) {
            t3 = q;
            var o3 = td;
            b: switch (Y) {
              case 1:
                Y = 0, td = null, $d(e4, t3, o3, 1);
                break;
              case 2:
              case 9:
                if (eo(o3)) {
                  Y = 0, td = null, Qd(t3);
                  break;
                }
                t3 = function() {
                  Y !== 2 && Y !== 9 || K !== e4 || (Y = 7), Ef(e4);
                }, o3.then(t3, t3);
                break a;
              case 3:
                Y = 7;
                break a;
              case 4:
                Y = 5;
                break a;
              case 7:
                eo(o3) ? (Y = 0, td = null, Qd(t3)) : (Y = 0, td = null, $d(e4, t3, o3, 7));
                break;
              case 5:
                var s3 = null;
                switch (q.tag) {
                  case 26:
                    s3 = q.memoizedState;
                  case 5:
                  case 27:
                    var c3 = q;
                    if (s3 ? Ym(s3) : c3.stateNode.complete) {
                      Y = 0, td = null;
                      var l3 = c3.sibling;
                      if (l3 !== null) q = l3;
                      else {
                        var u2 = c3.return;
                        u2 === null ? q = null : (q = u2, ef(u2));
                      }
                      break b;
                    }
                }
                Y = 0, td = null, $d(e4, t3, o3, 5);
                break;
              case 6:
                Y = 0, td = null, $d(e4, t3, o3, 6);
                break;
              case 8:
                Bd(), od = 6;
                break a;
              default:
                throw Error(i2(462));
            }
          }
          Xd();
          break;
        } catch (t4) {
          Hd(e4, t4);
        }
      while (1);
      return va2 = _a2 = null, D2.H = r3, D2.A = a3, G = n3, q === null ? (K = null, J = 0, Ei2(), od) : 0;
    }
    function Xd() {
      for (; q !== null && !qe2(); ) Zd(q);
    }
    function Zd(e4) {
      var t3 = ml(e4.alternate, e4, ad);
      e4.memoizedProps = e4.pendingProps, t3 === null ? ef(e4) : q = t3;
    }
    function Qd(e4) {
      var t3 = e4, n3 = t3.alternate;
      switch (t3.tag) {
        case 15:
        case 0:
          t3 = Jc(n3, t3, t3.pendingProps, t3.type, void 0, J);
          break;
        case 11:
          t3 = Jc(n3, t3, t3.pendingProps, t3.type.render, t3.ref, J);
          break;
        case 5:
          os(t3);
          var r3 = t3;
          r3 === aa2 && (z2 ? (da2(r3), r3.tag === 5 && r3.stateNode != null && (R2 = r3.stateNode)) : (da2(r3), z2 = true));
        default:
          Sl(n3, t3), t3 = q = Li2(t3, ad), t3 = ml(n3, t3, ad);
      }
      e4.memoizedProps = e4.pendingProps, t3 === null ? ef(e4) : q = t3;
    }
    function $d(e4, t3, n3, r3) {
      va2 = _a2 = null, os(t3), oo = null, so = 0;
      var i3 = t3.return;
      try {
        if (Nc(e4, i3, t3, n3, J)) {
          od = 1, Oc(e4, Wi2(n3, e4.current)), q = null;
          return;
        }
      } catch (t4) {
        if (i3 !== null) throw q = i3, t4;
        od = 1, Oc(e4, Wi2(n3, e4.current)), q = null;
        return;
      }
      t3.flags & 32768 ? (z2 || r3 === 1 ? e4 = true : rd || J & 536870912 ? e4 = false : (nd = e4 = true, (r3 === 2 || r3 === 9 || r3 === 3 || r3 === 6) && (r3 = Mo.current, r3 !== null && r3.tag === 13 && (r3.flags |= 16384))), tf(t3, e4)) : ef(t3);
    }
    function ef(e4) {
      var t3 = e4;
      do {
        if (t3.flags & 32768) {
          tf(t3, nd);
          return;
        }
        e4 = t3.return;
        var n3 = bl(t3.alternate, t3, ad);
        if (n3 !== null) {
          q = n3;
          return;
        }
        if (t3 = t3.sibling, t3 !== null) {
          q = t3;
          return;
        }
        q = t3 = e4;
      } while (t3 !== null);
      od === 0 && (od = 5);
    }
    function tf(e4, t3) {
      do {
        var n3 = xl(e4.alternate, e4);
        if (n3 !== null) {
          n3.flags &= 32767, q = n3;
          return;
        }
        if (n3 = e4.return, n3 !== null && (n3.flags |= 32768, n3.subtreeFlags = 0, n3.deletions = null), !t3 && (e4 = e4.sibling, e4 !== null)) {
          q = e4;
          return;
        }
        q = e4 = n3;
      } while (e4 !== null);
      od = 6, q = null;
    }
    function nf(e4, t3, n3, r3, a3, o3, s3, c3, l3, u2, d3, f2) {
      e4.cancelPendingCommit = null;
      do
        df();
      while (X !== 0);
      if (G & 6) throw Error(i2(327));
      if (t3 !== null) {
        if (t3 === e4.current) throw Error(i2(177));
        e4 === K && (q = K = null, J = 0), xd = t3, bd = e4, Sd = n3, wd = a3, Td = r3, rf(e4, t3, n3, s3, c3, l3, f2);
      }
    }
    function rf(e4, t3, n3, r3, i3, a3, o3) {
      var s3 = t3.lanes | t3.childLanes;
      if (Cd = s3, s3 |= Ti2, vt2(e4, n3, s3, r3, i3, a3), Dd = null, (n3 & 335544064) === n3 ? (Od = La(e4), r3 = 10262) : (Od = null, r3 = 10256), (t3.subtreeFlags & r3) !== 0 || (t3.flags & r3) !== 0 ? (e4.callbackNode = null, e4.callbackPriority = 0, yf(Ze2, function() {
        return ff(), null;
      })) : (e4.callbackNode = null, e4.callbackPriority = 0), Vl = false, r3 = !!(t3.flags & 13878), t3.subtreeFlags & 13878 || r3) {
        r3 = D2.T, D2.T = null, i3 = O2.p, O2.p = 2, a3 = G, G |= 4;
        try {
          hu(e4, t3, n3);
        } finally {
          G = a3, O2.p = i3, D2.T = r3;
        }
      }
      X = 1, Vl ? Ed = Mp(o3, e4.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
    }
    function af(e4) {
      if (X !== 0) {
        var t3 = bd.onRecoverableError;
        t3(e4, { componentStack: null });
      }
    }
    function of() {
      X === 3 && (X = 0, Fu(xd, bd), X = 4);
    }
    function sf() {
      if (X === 1) {
        X = 0;
        var e4 = bd, t3 = xd, n3 = Sd, r3 = !!(t3.flags & 13878);
        if (t3.subtreeFlags & 13878 || r3) {
          r3 = D2.T, D2.T = null;
          var i3 = O2.p;
          O2.p = 2;
          var a3 = G;
          G |= 4;
          try {
            fu = pu = false, ju(t3, e4, n3), n3 = cp;
            var o3 = Yr2(e4.containerInfo), s3 = n3.focusedElem, c3 = n3.selectionRange;
            if (o3 !== s3 && s3 && s3.ownerDocument && Jr2(s3.ownerDocument.documentElement, s3)) {
              if (c3 !== null && Xr2(s3)) {
                var l3 = c3.start, u2 = c3.end;
                if (u2 === void 0 && (u2 = l3), `selectionStart` in s3) s3.selectionStart = l3, s3.selectionEnd = Math.min(u2, s3.value.length);
                else {
                  var d3 = s3.ownerDocument || document, f2 = d3 && d3.defaultView || window;
                  if (f2.getSelection) {
                    var p3 = f2.getSelection(), m2 = s3.textContent.length, h3 = Math.min(c3.start, m2), g3 = c3.end === void 0 ? h3 : Math.min(c3.end, m2);
                    !p3.extend && h3 > g3 && (o3 = g3, g3 = h3, h3 = o3);
                    var _3 = qr2(s3, h3), v3 = qr2(s3, g3);
                    if (_3 && v3 && (p3.rangeCount !== 1 || p3.anchorNode !== _3.node || p3.anchorOffset !== _3.offset || p3.focusNode !== v3.node || p3.focusOffset !== v3.offset)) {
                      var y3 = d3.createRange();
                      y3.setStart(_3.node, _3.offset), p3.removeAllRanges(), h3 > g3 ? (p3.addRange(y3), p3.extend(v3.node, v3.offset)) : (y3.setEnd(v3.node, v3.offset), p3.addRange(y3));
                    }
                  }
                }
              }
              for (d3 = [], p3 = s3; p3 = p3.parentNode; ) p3.nodeType === 1 && d3.push({ element: p3, left: p3.scrollLeft, top: p3.scrollTop });
              for (typeof s3.focus == `function` && s3.focus(), s3 = 0; s3 < d3.length; s3++) {
                var b3 = d3[s3];
                b3.element.scrollLeft = b3.left, b3.element.scrollTop = b3.top;
              }
            }
            gh = !!sp, cp = sp = null;
          } finally {
            G = a3, O2.p = i3, D2.T = r3;
          }
        }
        e4.current = t3, X = 2;
      }
    }
    function cf() {
      if (X === 2) {
        X = 0;
        var e4 = bd, t3 = xd, n3 = !!(t3.flags & 8772);
        if (t3.subtreeFlags & 8772 || n3) {
          n3 = D2.T, D2.T = null;
          var r3 = O2.p;
          O2.p = 2;
          var i3 = G;
          G |= 4;
          try {
            _u(e4, t3.alternate, t3);
          } finally {
            G = i3, O2.p = r3, D2.T = n3;
          }
        }
        X = 3;
      }
    }
    function lf() {
      if (X === 4 || X === 3) {
        X = 0;
        var e4 = Ed;
        Ed = null, A2();
        var t3 = bd, n3 = xd, r3 = Sd, i3 = Td, a3 = (r3 & 335544064) === r3 ? 10262 : 10256;
        if ((n3.subtreeFlags & a3) !== 0 || (n3.flags & a3) !== 0 ? X = 5 : (X = 0, xd = bd = null, uf(t3, t3.pendingLanes)), a3 = t3.pendingLanes, a3 === 0 && (yd = null), Ct2(r3), n3 = n3.stateNode, rt2 && typeof rt2.onCommitFiberRoot == `function`) try {
          rt2.onCommitFiberRoot(nt2, n3, void 0, (n3.current.flags & 128) == 128);
        } catch {
        }
        if (i3 !== null) {
          n3 = D2.T, a3 = O2.p, O2.p = 2, D2.T = null;
          try {
            for (var o3 = t3.onRecoverableError, s3 = 0; s3 < i3.length; s3++) {
              var c3 = i3[s3];
              o3(c3.value, { componentStack: c3.stack });
            }
          } finally {
            D2.T = n3, O2.p = a3;
          }
        }
        if (i3 = Dd, o3 = Od, Od = null, i3 !== null && (Dd = null, o3 === null && (o3 = []), e4 !== null)) for (c3 = 0; c3 < i3.length; c3++) n3 = (0, i3[c3])(o3), n3 !== void 0 && e4.finished.finally(n3);
        Sd & 3 && df(), Ef(t3), a3 = t3.pendingLanes, r3 & 261930 && a3 & 42 ? t3 === Ad ? kd++ : (kd = 0, Ad = t3) : (kd = 0, Ad = null), Df(0, false);
      }
    }
    function uf(e4, t3) {
      (e4.pooledCacheLanes &= t3) === 0 && (t3 = e4.pooledCache, t3 != null && (e4.pooledCache = null, Pa(t3)));
    }
    function df() {
      return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
    }
    function ff() {
      if (X !== 5) return false;
      var e4 = bd, t3 = Cd;
      Cd = 0;
      var n3 = Ct2(Sd), r3 = D2.T, a3 = O2.p;
      try {
        O2.p = 32 > n3 ? 32 : n3, D2.T = null, n3 = wd, wd = null;
        var o3 = bd, s3 = Sd;
        if (X = 0, xd = bd = null, Sd = 0, G & 6) throw Error(i2(331));
        var c3 = G;
        if (G |= 4, Xu(o3.current), Hu(o3, o3.current, s3, n3), G = c3, Df(0, false), rt2 && typeof rt2.onPostCommitFiberRoot == `function`) try {
          rt2.onPostCommitFiberRoot(nt2, o3);
        } catch {
        }
        return true;
      } finally {
        O2.p = a3, D2.T = r3, uf(e4, t3);
      }
    }
    function pf(e4, t3, n3) {
      t3 = Wi2(n3, t3), t3 = Ac(e4.stateNode, t3, 2), e4 = yo(e4, t3, 2), e4 !== null && (_t2(e4, 2), Ef(e4));
    }
    function Z(e4, t3, n3) {
      if (e4.tag === 3) pf(e4, e4, n3);
      else for (; t3 !== null; ) {
        if (t3.tag === 3) {
          pf(t3, e4, n3);
          break;
        }
        if (t3.tag === 1) {
          var r3 = t3.stateNode;
          if (typeof t3.type.getDerivedStateFromError == `function` || typeof r3.componentDidCatch == `function` && (yd === null || !yd.has(r3))) {
            e4 = Wi2(n3, e4), n3 = jc(2), r3 = yo(t3, n3, 2), r3 !== null && (Mc(n3, r3, t3, e4), _t2(r3, 2), Ef(r3));
            break;
          }
        }
        t3 = t3.return;
      }
    }
    function mf(e4, t3, n3) {
      var r3 = e4.pingCache;
      if (r3 === null) {
        r3 = e4.pingCache = new ed();
        var i3 = /* @__PURE__ */ new Set();
        r3.set(t3, i3);
      } else i3 = r3.get(t3), i3 === void 0 && (i3 = /* @__PURE__ */ new Set(), r3.set(t3, i3));
      i3.has(n3) || (id = true, i3.add(n3), e4 = hf.bind(null, e4, t3, n3), t3.then(e4, e4));
    }
    function hf(e4, t3, n3) {
      var r3 = e4.pingCache;
      r3 !== null && r3.delete(t3), e4.pingedLanes |= e4.suspendedLanes & n3, e4.warmLanes &= ~n3, K === e4 && (J & n3) === n3 && (od === 4 || od === 3 && (J & 62914560) === J && 300 > j2() - hd ? G & 2 ? ld |= n3 : Vd(e4, 0) : ld |= n3, dd === J && (dd = 0)), Ef(e4);
    }
    function gf(e4, t3) {
      t3 === 0 && (t3 = ht2()), e4 = ki2(e4, t3), e4 !== null && (_t2(e4, t3), Ef(e4));
    }
    function _f(e4) {
      var t3 = e4.memoizedState, n3 = 0;
      t3 !== null && (n3 = t3.retryLane), gf(e4, n3);
    }
    function vf(e4, t3) {
      var n3 = 0;
      switch (e4.tag) {
        case 31:
        case 13:
          var r3 = e4.stateNode, a3 = e4.memoizedState;
          a3 !== null && (n3 = a3.retryLane);
          break;
        case 19:
          r3 = e4.stateNode;
          break;
        case 22:
          r3 = e4.stateNode._retryCache;
          break;
        default:
          throw Error(i2(314));
      }
      r3 !== null && r3.delete(t3), gf(e4, n3);
    }
    function yf(e4, t3) {
      return Ge2(e4, t3);
    }
    var bf = null, xf = null, Sf = false, Cf = false, wf = false, Tf = 0;
    function Ef(e4) {
      e4 !== xf && e4.next === null && (xf === null ? bf = xf = e4 : xf = xf.next = e4), Cf = true, Sf || (Sf = true, Nf());
    }
    function Df(e4, t3) {
      if (!wf && Cf) {
        wf = true;
        do
          for (var n3 = false, r3 = bf; r3 !== null; ) {
            if (!t3) {
              if (e4 !== 0) {
                var i3 = r3.pendingLanes;
                if (i3 === 0) var a3 = 0;
                else {
                  var o3 = r3.suspendedLanes, s3 = r3.pingedLanes;
                  a3 = (1 << 31 - it2(42 | e4) + 1) - 1, a3 &= i3 & ~(o3 & ~s3), a3 = a3 & 201326741 ? a3 & 201326741 | 1 : a3 ? a3 | 2 : 0;
                }
                a3 !== 0 && (n3 = true, Mf(r3, a3));
              } else a3 = J, a3 = dt2(r3, r3 === K ? a3 : 0, r3.cancelPendingCommit !== null || r3.timeoutHandle !== -1), !(a3 & 3) || ft2(r3, a3) || (n3 = true, Mf(r3, a3));
            }
            r3 = r3.next;
          }
        while (n3);
        wf = false;
      }
    }
    function Of() {
      kf();
    }
    function kf() {
      Cf = Sf = false;
      var e4 = 0;
      Tf !== 0 && hp() && (e4 = Tf);
      for (var t3 = j2(), n3 = null, r3 = bf; r3 !== null; ) {
        var i3 = r3.next, a3 = Af(r3, t3);
        a3 === 0 ? (r3.next = null, n3 === null ? bf = i3 : n3.next = i3, i3 === null && (xf = n3)) : (n3 = r3, (e4 !== 0 || a3 & 3) && (Cf = true)), r3 = i3;
      }
      X !== 0 && X !== 5 || Df(e4, false), Tf !== 0 && (Tf = 0);
    }
    function Af(e4, t3) {
      for (var n3 = e4.suspendedLanes, r3 = e4.pingedLanes, i3 = e4.expirationTimes, a3 = e4.pendingLanes & -62914561; 0 < a3; ) {
        var o3 = 31 - it2(a3), s3 = 1 << o3, c3 = i3[o3];
        c3 === -1 ? ((s3 & n3) === 0 || (s3 & r3) !== 0) && (i3[o3] = mt2(s3, t3)) : c3 <= t3 && (e4.expiredLanes |= s3), a3 &= ~s3;
      }
      if (t3 = K, n3 = J, n3 = dt2(e4, e4 === t3 ? n3 : 0, e4.cancelPendingCommit !== null || e4.timeoutHandle !== -1), r3 = e4.callbackNode, n3 === 0 || e4 === t3 && (Y === 2 || Y === 9) || e4.cancelPendingCommit !== null) return r3 !== null && r3 !== null && Ke2(r3), e4.callbackNode = null, e4.callbackPriority = 0;
      if (!(n3 & 3) || ft2(e4, n3)) {
        if (t3 = n3 & -n3, t3 === e4.callbackPriority) return t3;
        switch (r3 !== null && Ke2(r3), Ct2(n3)) {
          case 2:
          case 8:
            n3 = Xe2;
            break;
          case 32:
            n3 = Ze2;
            break;
          case 268435456:
            n3 = $e2;
            break;
          default:
            n3 = Ze2;
        }
        return r3 = jf.bind(null, e4), n3 = Ge2(n3, r3), e4.callbackPriority = t3, e4.callbackNode = n3, t3;
      }
      return r3 !== null && r3 !== null && Ke2(r3), e4.callbackPriority = 2, e4.callbackNode = null, 2;
    }
    function jf(e4, t3) {
      if (X !== 0 && X !== 5) return e4.callbackNode = null, e4.callbackPriority = 0, null;
      var n3 = e4.callbackNode;
      if (df() && e4.callbackNode !== n3) return null;
      var r3 = J;
      return r3 = dt2(e4, e4 === K ? r3 : 0, e4.cancelPendingCommit !== null || e4.timeoutHandle !== -1), r3 === 0 ? null : (Fd(e4, r3, t3), Af(e4, j2()), e4.callbackNode != null && e4.callbackNode === n3 ? jf.bind(null, e4) : null);
    }
    function Mf(e4, t3) {
      if (df()) return null;
      Fd(e4, t3, true);
    }
    function Nf() {
      bp(function() {
        G & 6 ? Ge2(Ye2, Of) : kf();
      });
    }
    function Pf() {
      if (Tf === 0) {
        var e4 = Ba;
        e4 === 0 && (e4 = ct2, ct2 <<= 1, !(ct2 & 261888) && (ct2 = 256)), Tf = e4;
      }
      return Tf;
    }
    function Ff(e4) {
      return e4 == null || typeof e4 == `symbol` || typeof e4 == `boolean` ? null : typeof e4 == `function` ? e4 : bn2(e4);
    }
    function If(e4, t3, n3, r3, i3) {
      if (t3 === `submit` && n3 && n3.stateNode === i3) {
        var a3 = Ff((i3[Ot2] || null).action), o3 = r3.submitter;
        o3 && (t3 = (t3 = o3[Ot2] || null) ? Ff(t3.formAction) : o3.getAttribute(`formAction`), t3 !== null && (a3 = t3, o3 = null));
        var s3 = new Hn2(`action`, `action`, null, r3, i3);
        e4.push({ event: s3, listeners: [{ instance: null, listener: function() {
          if (r3.defaultPrevented) {
            if (Tf !== 0) {
              var e5 = new FormData(i3, o3);
              nc(n3, { pending: true, data: e5, method: i3.method, action: a3 }, null, e5);
            }
          } else typeof a3 == `function` && (s3.preventDefault(), e5 = new FormData(i3, o3), nc(n3, { pending: true, data: e5, method: i3.method, action: a3 }, a3, e5));
        }, currentTarget: i3 }] });
      }
    }
    for (var Lf = 0; Lf < gi2.length; Lf++) {
      var Rf = gi2[Lf];
      _i2(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
    }
    _i2(ci2, `onAnimationEnd`), _i2(li2, `onAnimationIteration`), _i2(ui2, `onAnimationStart`), _i2(`dblclick`, `onDoubleClick`), _i2(`focusin`, `onFocus`), _i2(`focusout`, `onBlur`), _i2(di2, `onTransitionRun`), _i2(fi2, `onTransitionStart`), _i2(pi2, `onTransitionCancel`), _i2(mi2, `onTransitionEnd`), Wt2(`onMouseEnter`, [`mouseout`, `mouseover`]), Wt2(`onMouseLeave`, [`mouseout`, `mouseover`]), Wt2(`onPointerEnter`, [`pointerout`, `pointerover`]), Wt2(`onPointerLeave`, [`pointerout`, `pointerover`]), Ut2(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), Ut2(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), Ut2(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), Ut2(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), Ut2(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), Ut2(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
    var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
    function Vf(e4, t3) {
      t3 = !!(t3 & 4);
      for (var n3 = 0; n3 < e4.length; n3++) {
        var r3 = e4[n3], i3 = r3.event;
        r3 = r3.listeners;
        a: {
          var a3 = void 0;
          if (t3) for (var o3 = r3.length - 1; 0 <= o3; o3--) {
            var s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget;
            if (s3 = s3.listener, c3 !== a3 && i3.isPropagationStopped()) break a;
            a3 = s3, i3.currentTarget = l3;
            try {
              a3(i3);
            } catch (e5) {
              Si2(e5);
            }
            i3.currentTarget = null, a3 = c3;
          }
          else for (o3 = 0; o3 < r3.length; o3++) {
            if (s3 = r3[o3], c3 = s3.instance, l3 = s3.currentTarget, s3 = s3.listener, c3 !== a3 && i3.isPropagationStopped()) break a;
            a3 = s3, i3.currentTarget = l3;
            try {
              a3(i3);
            } catch (e5) {
              Si2(e5);
            }
            i3.currentTarget = null, a3 = c3;
          }
        }
      }
    }
    function Q(e4, t3) {
      var n3 = t3[At2];
      n3 === void 0 && (n3 = t3[At2] = /* @__PURE__ */ new Set());
      var r3 = e4 + `__bubble`;
      n3.has(r3) || (Gf(t3, e4, 2, false), n3.add(r3));
    }
    function Hf(e4, t3, n3) {
      var r3 = 0;
      t3 && (r3 |= 4), Gf(n3, e4, r3, t3);
    }
    var Uf = `_reactListening` + Math.random().toString(36).slice(2);
    function Wf(e4) {
      if (!e4[Uf]) {
        e4[Uf] = true, Vt2.forEach(function(t4) {
          t4 !== `selectionchange` && (Bf.has(t4) || Hf(t4, false, e4), Hf(t4, true, e4));
        });
        var t3 = e4.nodeType === 9 ? e4 : e4.ownerDocument;
        t3 === null || t3[Uf] || (t3[Uf] = true, Hf(`selectionchange`, false, t3));
      }
    }
    function Gf(e4, t3, n3, r3) {
      switch (Ch(t3)) {
        case 2:
          var i3 = _h;
          break;
        case 8:
          i3 = vh;
          break;
        default:
          i3 = yh;
      }
      n3 = i3.bind(null, t3, n3, e4), i3 = void 0, !jn2 || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i3 = true), r3 ? i3 === void 0 ? e4.addEventListener(t3, n3, true) : e4.addEventListener(t3, n3, { capture: true, passive: i3 }) : i3 === void 0 ? e4.addEventListener(t3, n3, false) : e4.addEventListener(t3, n3, { passive: i3 });
    }
    function Kf(e4, t3, n3, r3, i3) {
      var a3 = r3;
      if (!(t3 & 1) && !(t3 & 2) && r3 !== null) a: for (; ; ) {
        if (r3 === null) return;
        var s3 = r3.tag;
        if (s3 === 3 || s3 === 4) {
          var c3 = r3.stateNode.containerInfo;
          if (c3 === i3) break;
          if (s3 === 4) for (s3 = r3.return; s3 !== null; ) {
            var l3 = s3.tag;
            if ((l3 === 3 || l3 === 4) && s3.stateNode.containerInfo === i3) return;
            s3 = s3.return;
          }
          for (; c3 !== null; ) {
            if (s3 = Ft2(c3), s3 === null) return;
            if (l3 = s3.tag, l3 === 5 || l3 === 6 || l3 === 26 || l3 === 27) {
              r3 = a3 = s3;
              continue a;
            }
            c3 = c3.parentNode;
          }
        }
        r3 = r3.return;
      }
      On2(function() {
        var r4 = a3, i4 = Cn2(n3), s4 = [];
        a: {
          var c4 = hi2.get(e4);
          if (c4 !== void 0) {
            var l4 = Hn2, u2 = e4;
            switch (e4) {
              case `keypress`:
                if (Ln2(n3) === 0) break a;
              case `keydown`:
              case `keyup`:
                l4 = or2;
                break;
              case `focusin`:
                u2 = `focus`, l4 = Zn2;
                break;
              case `focusout`:
                u2 = `blur`, l4 = Zn2;
                break;
              case `beforeblur`:
              case `afterblur`:
                l4 = Zn2;
                break;
              case `click`:
                if (n3.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l4 = Yn2;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l4 = Xn2;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l4 = lr2;
                break;
              case ci2:
              case li2:
              case ui2:
                l4 = Qn2;
                break;
              case mi2:
                l4 = ur2;
                break;
              case `scroll`:
              case `scrollend`:
                l4 = Wn2;
                break;
              case `wheel`:
                l4 = dr2;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l4 = $n2;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l4 = sr2;
                break;
              case `submit`:
                l4 = cr2;
                break;
              case `toggle`:
              case `beforetoggle`:
                l4 = fr2;
            }
            var d3 = !!(t3 & 4), f2 = !d3 && (e4 === `scroll` || e4 === `scrollend`), p3 = d3 ? c4 === null ? null : c4 + `Capture` : c4;
            d3 = [];
            for (var m2 = r4, h3; m2 !== null; ) {
              var g3 = m2;
              if (h3 = g3.stateNode, g3 = g3.tag, g3 !== 5 && g3 !== 26 && g3 !== 27 || h3 === null || p3 === null || (g3 = kn2(m2, p3), g3 != null && d3.push(qf(m2, g3, h3))), f2) break;
              m2 = m2.return;
            }
            0 < d3.length && (c4 = new l4(c4, u2, null, n3, i4), s4.push({ event: c4, listeners: d3 }));
          }
        }
        if (!(t3 & 7)) {
          a: {
            if (l4 = e4 === `mouseover` || e4 === `pointerover`, c4 = e4 === `mouseout` || e4 === `pointerout`, l4 && n3 !== Sn2 && (u2 = n3.relatedTarget || n3.fromElement) && (Ft2(u2) || u2[kt2])) break a;
            (c4 || l4) && (u2 = i4.window === i4 ? i4 : (l4 = i4.ownerDocument) ? l4.defaultView || l4.parentWindow : window, c4 ? (l4 = n3.relatedTarget || n3.toElement, c4 = r4, l4 = l4 ? Ft2(l4) : null, l4 !== null && (f2 = o2(l4), d3 = l4.tag, l4 !== f2 || d3 !== 5 && d3 !== 27 && d3 !== 6) && (l4 = null)) : (c4 = null, l4 = r4), c4 !== l4 && (d3 = Yn2, g3 = `onMouseLeave`, p3 = `onMouseEnter`, m2 = `mouse`, (e4 === `pointerout` || e4 === `pointerover`) && (d3 = sr2, g3 = `onPointerLeave`, p3 = `onPointerEnter`, m2 = `pointer`), f2 = c4 == null ? u2 : Lt2(c4), h3 = l4 == null ? u2 : Lt2(l4), u2 = new d3(g3, m2 + `leave`, c4, n3, i4), u2.target = f2, u2.relatedTarget = h3, g3 = null, Ft2(i4) === r4 && (d3 = new d3(p3, m2 + `enter`, l4, n3, i4), d3.target = h3, d3.relatedTarget = f2, g3 = d3), f2 = g3, d3 = c4 && l4 ? ne2(c4, l4, Yf) : null, c4 !== null && Xf(s4, u2, c4, d3, false), l4 !== null && f2 !== null && Xf(s4, f2, l4, d3, true)));
          }
          a: {
            if (c4 = r4 ? Lt2(r4) : window, l4 = c4.nodeName && c4.nodeName.toLowerCase(), l4 === `select` || l4 === `input` && c4.type === `file`) var _3 = jr2;
            else if (Tr2(c4)) {
              if (Mr2) _3 = Vr2;
              else {
                _3 = zr2;
                var v3 = Rr2;
              }
            } else l4 = c4.nodeName, !l4 || l4.toLowerCase() !== `input` || c4.type !== `checkbox` && c4.type !== `radio` ? r4 && _n2(r4.elementType) && (_3 = jr2) : _3 = Br2;
            if (_3 &&= _3(e4, r4)) {
              Er2(s4, _3, n3, i4);
              break a;
            }
            v3 && v3(e4, c4, r4);
          }
          switch (v3 = r4 ? Lt2(r4) : window, e4) {
            case `focusin`:
              (Tr2(v3) || v3.contentEditable === `true`) && (Qr2 = v3, $r2 = r4, ei2 = null);
              break;
            case `focusout`:
              ei2 = $r2 = Qr2 = null;
              break;
            case `mousedown`:
              ti2 = true;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ti2 = false, ni2(s4, n3, i4);
              break;
            case `selectionchange`:
              if (Zr2) break;
            case `keydown`:
            case `keyup`:
              ni2(s4, n3, i4);
          }
          var y3;
          if (mr2) b: {
            switch (e4) {
              case `compositionstart`:
                var b3 = `onCompositionStart`;
                break b;
              case `compositionend`:
                b3 = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                b3 = `onCompositionUpdate`;
                break b;
            }
            b3 = void 0;
          }
          else L2 ? br2(e4, n3) && (b3 = `onCompositionEnd`) : e4 === `keydown` && n3.keyCode === 229 && (b3 = `onCompositionStart`);
          b3 && (_r2 && n3.locale !== `ko` && (L2 || b3 !== `onCompositionStart` ? b3 === `onCompositionEnd` && L2 && (y3 = In2()) : (Nn2 = i4, Pn2 = `value` in Nn2 ? Nn2.value : Nn2.textContent, L2 = true)), v3 = Jf(r4, b3), 0 < v3.length && (b3 = new er2(b3, e4, null, n3, i4), s4.push({ event: b3, listeners: v3 }), y3 ? b3.data = y3 : (y3 = xr2(n3), y3 !== null && (b3.data = y3)))), (y3 = gr2 ? Sr2(e4, n3) : Cr2(e4, n3)) && (b3 = Jf(r4, `onBeforeInput`), 0 < b3.length && (v3 = new er2(`onBeforeInput`, `beforeinput`, null, n3, i4), s4.push({ event: v3, listeners: b3 }), v3.data = y3)), If(s4, e4, r4, n3, i4);
        }
        Vf(s4, t3);
      });
    }
    function qf(e4, t3, n3) {
      return { instance: e4, listener: t3, currentTarget: n3 };
    }
    function Jf(e4, t3) {
      for (var n3 = t3 + `Capture`, r3 = []; e4 !== null; ) {
        var i3 = e4, a3 = i3.stateNode;
        if (i3 = i3.tag, i3 !== 5 && i3 !== 26 && i3 !== 27 || a3 === null || (i3 = kn2(e4, n3), i3 != null && r3.unshift(qf(e4, i3, a3)), i3 = kn2(e4, t3), i3 != null && r3.push(qf(e4, i3, a3))), e4.tag === 3) return r3;
        e4 = e4.return;
      }
      return [];
    }
    function Yf(e4) {
      if (e4 === null) return null;
      do
        e4 = e4.return;
      while (e4 && e4.tag !== 5 && e4.tag !== 27);
      return e4 || null;
    }
    function Xf(e4, t3, n3, r3, i3) {
      for (var a3 = t3._reactName, o3 = []; n3 !== null && n3 !== r3; ) {
        var s3 = n3, c3 = s3.alternate, l3 = s3.stateNode;
        if (s3 = s3.tag, c3 !== null && c3 === r3) break;
        s3 !== 5 && s3 !== 26 && s3 !== 27 || l3 === null || (c3 = l3, i3 ? (l3 = kn2(n3, a3), l3 != null && o3.unshift(qf(n3, l3, c3))) : i3 || (l3 = kn2(n3, a3), l3 != null && o3.push(qf(n3, l3, c3)))), n3 = n3.return;
      }
      o3.length !== 0 && e4.push({ event: t3, listeners: o3 });
    }
    var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
    function $f(e4) {
      return (typeof e4 == `string` ? e4 : `` + e4).replace(Zf, `
`).replace(Qf, ``);
    }
    function ep(e4, t3) {
      return t3 = $f(t3), $f(e4) === t3;
    }
    function $(e4, t3, n3, r3, a3, o3) {
      switch (n3) {
        case `children`:
          if (typeof r3 == `string`) t3 === `body` || t3 === `textarea` && r3 === `` || pn2(e4, r3);
          else if (typeof r3 == `number` || typeof r3 == `bigint`) t3 !== `body` && pn2(e4, `` + r3);
          else return;
          break;
        case `className`:
          Zt2(e4, `class`, r3);
          break;
        case `tabIndex`:
          Zt2(e4, `tabindex`, r3);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Zt2(e4, n3, r3);
          break;
        case `style`:
          gn2(e4, r3, o3);
          return;
        case `data`:
          if (t3 !== `object`) {
            Zt2(e4, `data`, r3);
            break;
          }
        case `src`:
        case `href`:
          if (r3 === `` && (t3 !== `a` || n3 !== `href`) || r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || typeof r3 == `boolean`) {
            e4.removeAttribute(n3);
            break;
          }
          r3 = bn2(r3), e4.setAttribute(n3, r3);
          break;
        case `action`:
        case `formAction`:
          if (typeof r3 == `function`) {
            e4.setAttribute(n3, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
            break;
          }
          if (typeof o3 == `function` && (n3 === `formAction` ? (t3 !== `input` && $(e4, t3, `name`, a3.name, a3, null), $(e4, t3, `formEncType`, a3.formEncType, a3, null), $(e4, t3, `formMethod`, a3.formMethod, a3, null), $(e4, t3, `formTarget`, a3.formTarget, a3, null)) : ($(e4, t3, `encType`, a3.encType, a3, null), $(e4, t3, `method`, a3.method, a3, null), $(e4, t3, `target`, a3.target, a3, null))), r3 == null || typeof r3 == `symbol` || typeof r3 == `boolean`) {
            e4.removeAttribute(n3);
            break;
          }
          r3 = bn2(r3), e4.setAttribute(n3, r3);
          break;
        case `onClick`:
          r3 != null && (e4.onclick = xn2);
          return;
        case `onScroll`:
          r3 != null && Q(`scroll`, e4);
          return;
        case `onScrollEnd`:
          r3 != null && Q(`scrollend`, e4);
          return;
        case `dangerouslySetInnerHTML`:
          if (r3 != null) {
            if (typeof r3 != `object` || !(`__html` in r3)) throw Error(i2(61));
            if (n3 = r3.__html, n3 != null) {
              if (a3.children != null) throw Error(i2(60));
              o3?.__html !== n3 && (e4.innerHTML = n3);
            }
          }
          break;
        case `multiple`:
          e4.multiple = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
          break;
        case `muted`:
          e4.muted = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (r3 == null || typeof r3 == `function` || typeof r3 == `boolean` || typeof r3 == `symbol`) {
            e4.removeAttribute(`xlink:href`);
            break;
          }
          n3 = bn2(r3), e4.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n3);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e4.setAttribute(n3, r3) : e4.removeAttribute(n3);
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `credentialless`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          r3 && typeof r3 != `function` && typeof r3 != `symbol` ? e4.setAttribute(n3, ``) : e4.removeAttribute(n3);
          break;
        case `capture`:
        case `download`:
          true === r3 ? e4.setAttribute(n3, ``) : false !== r3 && r3 != null && typeof r3 != `function` && typeof r3 != `symbol` ? e4.setAttribute(n3, r3) : e4.removeAttribute(n3);
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          r3 != null && typeof r3 != `function` && typeof r3 != `symbol` && !isNaN(r3) && 1 <= r3 ? e4.setAttribute(n3, r3) : e4.removeAttribute(n3);
          break;
        case `rowSpan`:
        case `start`:
          r3 == null || typeof r3 == `function` || typeof r3 == `symbol` || isNaN(r3) ? e4.removeAttribute(n3) : e4.setAttribute(n3, r3);
          break;
        case `popover`:
          Q(`beforetoggle`, e4), Q(`toggle`, e4), Xt2(e4, `popover`, r3);
          break;
        case `xlinkActuate`:
          Qt2(e4, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r3);
          break;
        case `xlinkArcrole`:
          Qt2(e4, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r3);
          break;
        case `xlinkRole`:
          Qt2(e4, `http://www.w3.org/1999/xlink`, `xlink:role`, r3);
          break;
        case `xlinkShow`:
          Qt2(e4, `http://www.w3.org/1999/xlink`, `xlink:show`, r3);
          break;
        case `xlinkTitle`:
          Qt2(e4, `http://www.w3.org/1999/xlink`, `xlink:title`, r3);
          break;
        case `xlinkType`:
          Qt2(e4, `http://www.w3.org/1999/xlink`, `xlink:type`, r3);
          break;
        case `xmlBase`:
          Qt2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r3);
          break;
        case `xmlLang`:
          Qt2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r3);
          break;
        case `xmlSpace`:
          Qt2(e4, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r3);
          break;
        case `is`:
          Xt2(e4, `is`, r3);
          break;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!(2 < n3.length) || n3[0] !== `o` && n3[0] !== `O` || n3[1] !== `n` && n3[1] !== `N`) n3 = vn2.get(n3) || n3, Xt2(e4, n3, r3);
          else return;
      }
      I2 = true;
    }
    function tp(e4, t3, n3, r3, a3, o3) {
      switch (n3) {
        case `style`:
          gn2(e4, r3, o3);
          return;
        case `dangerouslySetInnerHTML`:
          if (r3 != null) {
            if (typeof r3 != `object` || !(`__html` in r3)) throw Error(i2(61));
            if (n3 = r3.__html, n3 != null) {
              if (a3.children != null) throw Error(i2(60));
              o3?.__html !== n3 && (e4.innerHTML = n3);
            }
          }
          break;
        case `children`:
          if (typeof r3 == `string`) pn2(e4, r3);
          else if (typeof r3 == `number` || typeof r3 == `bigint`) pn2(e4, `` + r3);
          else return;
          break;
        case `onScroll`:
          r3 != null && Q(`scroll`, e4);
          return;
        case `onScrollEnd`:
          r3 != null && Q(`scrollend`, e4);
          return;
        case `onClick`:
          r3 != null && (e4.onclick = xn2);
          return;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          return;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!Ht2.hasOwnProperty(n3)) a: {
            if (n3[0] === `o` && n3[1] === `n` && (a3 = n3.endsWith(`Capture`), o3 = n3.slice(2, a3 ? n3.length - 7 : void 0), t3 = e4[Ot2] || null, t3 = t3 == null ? null : t3[n3], typeof t3 == `function` && e4.removeEventListener(o3, t3, a3), typeof r3 == `function`)) {
              typeof t3 != `function` && t3 !== null && (n3 in e4 ? e4[n3] = null : e4.hasAttribute(n3) && e4.removeAttribute(n3)), e4.addEventListener(o3, r3, a3);
              break a;
            }
            I2 = true, n3 in e4 ? e4[n3] = r3 : true === r3 ? e4.setAttribute(n3, ``) : Xt2(e4, n3, r3);
          }
          return;
      }
      I2 = true;
    }
    function np(e4, t3, n3) {
      switch (t3) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          Q(`error`, e4), Q(`load`, e4);
          var r3 = false, a3 = false, o3;
          for (o3 in n3) if (n3.hasOwnProperty(o3)) {
            var s3 = n3[o3];
            if (s3 != null) switch (o3) {
              case `src`:
                r3 = true;
                break;
              case `srcSet`:
                a3 = true;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(i2(137, t3));
              default:
                $(e4, t3, o3, s3, n3, null);
            }
          }
          a3 && $(e4, t3, `srcSet`, n3.srcSet, n3, null), r3 && $(e4, t3, `src`, n3.src, n3, null);
          return;
        case `input`:
          Q(`invalid`, e4);
          var c3 = o3 = s3 = a3 = null, l3 = null, u2 = null;
          for (r3 in n3) if (n3.hasOwnProperty(r3)) {
            var d3 = n3[r3];
            if (d3 != null) switch (r3) {
              case `name`:
                a3 = d3;
                break;
              case `type`:
                s3 = d3;
                break;
              case `checked`:
                l3 = d3;
                break;
              case `defaultChecked`:
                u2 = d3;
                break;
              case `value`:
                o3 = d3;
                break;
              case `defaultValue`:
                c3 = d3;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (d3 != null) throw Error(i2(137, t3));
                break;
              default:
                $(e4, t3, r3, d3, n3, null);
            }
          }
          cn2(e4, o3, c3, l3, u2, s3, a3, false);
          return;
        case `select`:
          for (a3 in Q(`invalid`, e4), r3 = s3 = o3 = null, n3) if (n3.hasOwnProperty(a3) && (c3 = n3[a3], c3 != null)) switch (a3) {
            case `value`:
              o3 = c3;
              break;
            case `defaultValue`:
              s3 = c3;
              break;
            case `multiple`:
              r3 = c3;
            default:
              $(e4, t3, a3, c3, n3, null);
          }
          t3 = o3, n3 = s3, e4.multiple = !!r3, t3 == null ? n3 != null && un2(e4, !!r3, n3, true) : un2(e4, !!r3, t3, false);
          return;
        case `textarea`:
          for (s3 in Q(`invalid`, e4), o3 = a3 = r3 = null, n3) if (n3.hasOwnProperty(s3) && (c3 = n3[s3], c3 != null)) switch (s3) {
            case `value`:
              r3 = c3;
              break;
            case `defaultValue`:
              a3 = c3;
              break;
            case `children`:
              o3 = c3;
              break;
            case `dangerouslySetInnerHTML`:
              if (c3 != null) throw Error(i2(91));
              break;
            default:
              $(e4, t3, s3, c3, n3, null);
          }
          fn2(e4, r3, a3, o3);
          return;
        case `option`:
          for (l3 in n3) if (n3.hasOwnProperty(l3) && (r3 = n3[l3], r3 != null)) switch (l3) {
            case `selected`:
              e4.selected = r3 && typeof r3 != `function` && typeof r3 != `symbol`;
              break;
            default:
              $(e4, t3, l3, r3, n3, null);
          }
          return;
        case `dialog`:
          Q(`beforetoggle`, e4), Q(`toggle`, e4), Q(`cancel`, e4), Q(`close`, e4);
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e4);
          break;
        case `video`:
        case `audio`:
          for (r3 = 0; r3 < zf.length; r3++) Q(zf[r3], e4);
          break;
        case `image`:
          Q(`error`, e4), Q(`load`, e4);
          break;
        case `details`:
          Q(`toggle`, e4);
          break;
        case `embed`:
        case `source`:
        case `link`:
          Q(`error`, e4), Q(`load`, e4);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u2 in n3) if (n3.hasOwnProperty(u2) && (r3 = n3[u2], r3 != null)) switch (u2) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(i2(137, t3));
            default:
              $(e4, t3, u2, r3, n3, null);
          }
          return;
        default:
          if (_n2(t3)) {
            for (d3 in n3) n3.hasOwnProperty(d3) && (r3 = n3[d3], r3 !== void 0 && tp(e4, t3, d3, r3, n3, void 0));
            return;
          }
      }
      for (c3 in n3) n3.hasOwnProperty(c3) && (r3 = n3[c3], r3 != null && $(e4, t3, c3, r3, n3, null));
    }
    var rp = {};
    function ip(e4, t3, n3, r3) {
      switch (t3) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a3 = null, o3 = null, s3 = null, c3 = null, l3 = null, u2 = null, d3 = null;
          for (m2 in n3) {
            var f2 = n3[m2];
            if (n3.hasOwnProperty(m2) && f2 != null) switch (m2) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                l3 = f2;
              default:
                r3.hasOwnProperty(m2) || $(e4, t3, m2, null, r3, f2);
            }
          }
          for (var p3 in r3) {
            var m2 = r3[p3];
            if (f2 = n3[p3], r3.hasOwnProperty(p3) && (m2 != null || f2 != null)) switch (p3) {
              case `type`:
                m2 !== f2 && (I2 = true), o3 = m2;
                break;
              case `name`:
                m2 !== f2 && (I2 = true), a3 = m2;
                break;
              case `checked`:
                m2 !== f2 && (I2 = true), u2 = m2;
                break;
              case `defaultChecked`:
                m2 !== f2 && (I2 = true), d3 = m2;
                break;
              case `value`:
                m2 !== f2 && (I2 = true), s3 = m2;
                break;
              case `defaultValue`:
                m2 !== f2 && (I2 = true), c3 = m2;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m2 != null) throw Error(i2(137, t3));
                break;
              default:
                m2 !== f2 && $(e4, t3, p3, m2, r3, f2);
            }
          }
          sn2(e4, s3, c3, l3, u2, d3, o3, a3);
          return;
        case `select`:
          for (o3 in m2 = s3 = c3 = p3 = null, n3) if (l3 = n3[o3], n3.hasOwnProperty(o3) && l3 != null) switch (o3) {
            case `value`:
              break;
            case `multiple`:
              m2 = l3;
            default:
              r3.hasOwnProperty(o3) || $(e4, t3, o3, null, r3, l3);
          }
          for (a3 in r3) if (o3 = r3[a3], l3 = n3[a3], r3.hasOwnProperty(a3) && (o3 != null || l3 != null)) switch (a3) {
            case `value`:
              o3 !== l3 && (I2 = true), p3 = o3;
              break;
            case `defaultValue`:
              o3 !== l3 && (I2 = true), c3 = o3;
              break;
            case `multiple`:
              o3 !== l3 && (I2 = true), s3 = o3;
            default:
              o3 !== l3 && $(e4, t3, a3, o3, r3, l3);
          }
          t3 = c3, n3 = s3, r3 = m2, p3 == null ? !!r3 != !!n3 && (t3 == null ? un2(e4, !!n3, n3 ? [] : ``, false) : un2(e4, !!n3, t3, true)) : un2(e4, !!n3, p3, false);
          return;
        case `textarea`:
          for (c3 in m2 = p3 = null, n3) if (a3 = n3[c3], n3.hasOwnProperty(c3) && a3 != null && !r3.hasOwnProperty(c3)) switch (c3) {
            case `value`:
              break;
            case `children`:
              break;
            default:
              $(e4, t3, c3, null, r3, a3);
          }
          for (s3 in r3) if (a3 = r3[s3], o3 = n3[s3], r3.hasOwnProperty(s3) && (a3 != null || o3 != null)) switch (s3) {
            case `value`:
              a3 !== o3 && (I2 = true), p3 = a3;
              break;
            case `defaultValue`:
              a3 !== o3 && (I2 = true), m2 = a3;
              break;
            case `children`:
              break;
            case `dangerouslySetInnerHTML`:
              if (a3 != null) throw Error(i2(91));
              break;
            default:
              a3 !== o3 && $(e4, t3, s3, a3, r3, o3);
          }
          dn2(e4, p3, m2);
          return;
        case `option`:
          for (var h3 in n3) if (p3 = n3[h3], n3.hasOwnProperty(h3) && p3 != null && !r3.hasOwnProperty(h3)) switch (h3) {
            case `selected`:
              e4.selected = false;
              break;
            default:
              $(e4, t3, h3, null, r3, p3);
          }
          for (l3 in r3) if (p3 = r3[l3], m2 = n3[l3], r3.hasOwnProperty(l3) && p3 !== m2 && (p3 != null || m2 != null)) switch (l3) {
            case `selected`:
              p3 !== m2 && (I2 = true), e4.selected = p3 && typeof p3 != `function` && typeof p3 != `symbol`;
              break;
            default:
              $(e4, t3, l3, p3, r3, m2);
          }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g3 in n3) p3 = n3[g3], n3.hasOwnProperty(g3) && p3 != null && !r3.hasOwnProperty(g3) && $(e4, t3, g3, null, r3, p3);
          for (u2 in r3) if (p3 = r3[u2], m2 = n3[u2], r3.hasOwnProperty(u2) && p3 !== m2 && (p3 != null || m2 != null)) switch (u2) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (p3 != null) throw Error(i2(137, t3));
              break;
            default:
              $(e4, t3, u2, p3, r3, m2);
          }
          return;
        default:
          if (_n2(t3)) {
            for (var _3 in n3) p3 = n3[_3], n3.hasOwnProperty(_3) && p3 !== void 0 && !r3.hasOwnProperty(_3) && tp(e4, t3, _3, void 0, r3, p3);
            for (d3 in r3) p3 = r3[d3], m2 = n3[d3], !r3.hasOwnProperty(d3) || p3 === m2 || p3 === void 0 && m2 === void 0 || tp(e4, t3, d3, p3, r3, m2);
            return;
          }
      }
      for (var v3 in n3) p3 = n3[v3], n3.hasOwnProperty(v3) && p3 != null && !r3.hasOwnProperty(v3) && $(e4, t3, v3, null, r3, p3);
      for (f2 in r3) p3 = r3[f2], m2 = n3[f2], !r3.hasOwnProperty(f2) || p3 === m2 || p3 == null && m2 == null || $(e4, t3, f2, p3, r3, m2);
    }
    function ap(e4) {
      switch (e4) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return true;
        default:
          return false;
      }
    }
    function op() {
      if (typeof performance.getEntriesByType == `function`) {
        for (var e4 = 0, t3 = 0, n3 = performance.getEntriesByType(`resource`), r3 = 0; r3 < n3.length; r3++) {
          var i3 = n3[r3], a3 = i3.transferSize, o3 = i3.initiatorType, s3 = i3.duration;
          if (a3 && s3 && ap(o3)) {
            for (o3 = 0, s3 = i3.responseEnd, r3 += 1; r3 < n3.length; r3++) {
              var c3 = n3[r3], l3 = c3.startTime;
              if (l3 > s3) break;
              var u2 = c3.transferSize, d3 = c3.initiatorType;
              u2 && ap(d3) && (c3 = c3.responseEnd, o3 += u2 * (c3 < s3 ? 1 : (s3 - l3) / (c3 - l3)));
            }
            if (--r3, t3 += 8 * (a3 + o3) / (i3.duration / 1e3), e4++, 10 < e4) break;
          }
        }
        if (0 < e4) return t3 / e4 / 1e6;
      }
      return navigator.connection && (e4 = navigator.connection.downlink, typeof e4 == `number`) ? e4 : 5;
    }
    var sp = null, cp = null;
    function lp(e4) {
      return e4.nodeType === 9 ? e4 : e4.ownerDocument;
    }
    function up(e4) {
      switch (e4) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function dp(e4, t3) {
      if (e4 === 0) switch (t3) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
      return e4 === 1 && t3 === `foreignObject` ? 0 : e4;
    }
    function fp(e4, t3, n3, r3) {
      return n3 = lp(n3).createElement(e4), n3[Dt2] = r3, n3[Ot2] = t3, np(n3, e4, t3), zt2(n3), n3;
    }
    function pp(e4, t3) {
      return e4 === `textarea` || e4 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
    }
    var mp = null;
    function hp() {
      var e4 = window.event;
      return e4 && e4.type === `popstate` ? e4 !== mp && (mp = e4, true) : (mp = null, false);
    }
    var gp = typeof setTimeout == `function` ? setTimeout : void 0, _p = typeof clearTimeout == `function` ? clearTimeout : void 0, vp = typeof Promise == `function` ? Promise : void 0, yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp, bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === void 0 ? gp : function(e4) {
      return vp.resolve(null).then(e4).catch(xp);
    };
    function xp(e4) {
      setTimeout(function() {
        throw e4;
      });
    }
    function Sp(e4) {
      return e4 === `head`;
    }
    function Cp(e4, t3) {
      var n3 = t3, r3 = 0;
      do {
        var i3 = n3.nextSibling;
        if (e4.removeChild(n3), i3 && i3.nodeType === 8) {
          if (n3 = i3.data, n3 === `/$` || n3 === `/&`) {
            if (r3 === 0) {
              e4.removeChild(i3), Hh(t3);
              return;
            }
            r3--;
          } else if (n3 === `$` || n3 === `$?` || n3 === `$~` || n3 === `$!` || n3 === `&`) r3++;
          else if (n3 === `html`) _m(e4.ownerDocument.documentElement);
          else if (n3 === `head`) {
            n3 = e4.ownerDocument.head, _m(n3);
            for (var a3 = n3.firstChild; a3; ) {
              var o3 = a3.nextSibling, s3 = a3.nodeName;
              a3[P2] || s3 === `SCRIPT` || s3 === `STYLE` || s3 === `LINK` && a3.rel.toLowerCase() === `stylesheet` || n3.removeChild(a3), a3 = o3;
            }
          } else n3 === `body` && _m(e4.ownerDocument.body);
        }
        n3 = i3;
      } while (n3);
      Hh(t3);
    }
    function wp(e4, t3) {
      var n3 = e4;
      e4 = 0;
      do {
        var r3 = n3.nextSibling;
        if (n3.nodeType === 1 ? t3 ? (n3._stashedDisplay = n3.style.display, n3.style.display = `none`) : (n3.style.display = n3._stashedDisplay || ``, n3.getAttribute(`style`) === `` && n3.removeAttribute(`style`)) : n3.nodeType === 3 && (t3 ? (n3._stashedText = n3.nodeValue, n3.nodeValue = ``) : n3.nodeValue = n3._stashedText || ``), r3 && r3.nodeType === 8) {
          if (n3 = r3.data, n3 === `/$`) {
            if (e4 === 0) break;
            e4--;
          } else n3 !== `$` && n3 !== `$?` && n3 !== `$~` && n3 !== `$!` || e4++;
        }
        n3 = r3;
      } while (n3);
    }
    function Tp(e4, t3, n3) {
      if (t3 = CSS.escape(t3) === t3 ? t3 : `r-` + btoa(t3).replace(/=/g, ``), e4.style.viewTransitionName = t3, n3 != null && (e4.style.viewTransitionClass = n3), n3 = getComputedStyle(e4), n3.display === `inline`) {
        if (t3 = e4.getClientRects(), t3.length === 1) var r3 = 1;
        else for (var i3 = r3 = 0; i3 < t3.length; i3++) {
          var a3 = t3[i3];
          0 < a3.width && 0 < a3.height && r3++;
        }
        r3 === 1 && (e4 = e4.style, e4.display = t3.length === 1 ? `inline-block` : `block`, e4.marginTop = `-` + n3.paddingTop, e4.marginBottom = `-` + n3.paddingBottom);
      }
    }
    function Ep(e4, t3) {
      e4 = e4.style, t3 = t3.style;
      var n3 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionName`) ? t3.viewTransitionName : t3.hasOwnProperty(`view-transition-name`) ? t3[`view-transition-name`] : null;
      e4.viewTransitionName = n3 == null || typeof n3 == `boolean` ? `` : (`` + n3).trim(), n3 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionClass`) ? t3.viewTransitionClass : t3.hasOwnProperty(`view-transition-class`) ? t3[`view-transition-class`] : null, e4.viewTransitionClass = n3 == null || typeof n3 == `boolean` ? `` : (`` + n3).trim(), e4.display === `inline-block` && (t3 == null ? e4.display = e4.margin = `` : (n3 = t3.display, e4.display = n3 == null || typeof n3 == `boolean` ? `` : n3, n3 = t3.margin, n3 == null ? (n3 = t3.hasOwnProperty(`marginTop`) ? t3.marginTop : t3[`margin-top`], e4.marginTop = n3 == null || typeof n3 == `boolean` ? `` : n3, t3 = t3.hasOwnProperty(`marginBottom`) ? t3.marginBottom : t3[`margin-bottom`], e4.marginBottom = t3 == null || typeof t3 == `boolean` ? `` : t3) : e4.margin = n3));
    }
    function Dp(e4, t3, n3) {
      return n3 = n3.ownerDocument.defaultView, { rect: e4, abs: t3.position === `absolute` || t3.position === `fixed`, clip: t3.clipPath !== `none` || t3.overflow !== `visible` || t3.filter !== `none` || t3.mask !== `none` || t3.mask !== `none` || t3.borderRadius !== `0px`, view: 0 <= e4.bottom && 0 <= e4.right && e4.top <= n3.innerHeight && e4.left <= n3.innerWidth };
    }
    function Op(e4) {
      return Dp(e4.getBoundingClientRect(), getComputedStyle(e4), e4);
    }
    function kp(e4) {
      var t3 = e4.getBoundingClientRect();
      t3 = new DOMRect(t3.x + 2e4, t3.y + 2e4, t3.width, t3.height);
      var n3 = getComputedStyle(e4);
      return Dp(t3, n3, e4);
    }
    function Ap(e4) {
      return e4.documentElement.clientHeight;
    }
    function jp(e4) {
      this.addEventListener(`load`, e4), this.addEventListener(`error`, e4);
    }
    function Mp(e4, t3, n3, r3, i3, a3, o3, s3, c3) {
      var l3 = t3.nodeType === 9 ? t3 : t3.ownerDocument;
      try {
        var u2 = l3.startViewTransition({ update: function() {
          var t4 = l3.defaultView, n4 = t4.navigation && t4.navigation.transition, o4 = l3.fonts.status;
          r3();
          var s4 = [];
          if (o4 === `loaded` && (Ap(l3), l3.fonts.status === `loading` && s4.push(l3.fonts.ready)), o4 = s4.length, e4 !== null) for (var c4 = e4.suspenseyImages, u3 = 0, d4 = 0; d4 < c4.length; d4++) {
            var f2 = c4[d4];
            if (!f2.complete) {
              var p3 = f2.getBoundingClientRect();
              if (0 < p3.bottom && 0 < p3.right && p3.top < t4.innerHeight && p3.left < t4.innerWidth) {
                if (u3 += Xm(f2), u3 > $m) {
                  s4.length = o4;
                  break;
                }
                f2 = new Promise(jp.bind(f2)), s4.push(f2);
              }
            }
          }
          if (0 < s4.length) return t4 = Promise.race([Promise.all(s4), new Promise(function(e5) {
            return setTimeout(e5, 500);
          })]).then(i3, i3), (n4 ? Promise.allSettled([n4.finished, t4]) : t4).then(a3, a3);
          if (i3(), n4) return n4.finished.then(a3, a3);
          a3();
        }, types: n3 });
        l3.__reactViewTransition = u2;
        var d3 = [];
        return u2.ready.then(function() {
          for (var e5 = l3.documentElement.getAnimations({ subtree: true }), t4 = 0; t4 < e5.length; t4++) {
            var n4 = e5[t4], r4 = n4.effect, i4 = r4.pseudoElement;
            if (i4 != null && i4.startsWith(`::view-transition`)) {
              d3.push(n4), n4 = r4.getKeyframes();
              for (var a4 = i4 = void 0, s4 = true, c4 = 0; c4 < n4.length; c4++) {
                var u3 = n4[c4], f2 = u3.width;
                if (i4 === void 0) i4 = f2;
                else if (i4 !== f2) {
                  s4 = false;
                  break;
                }
                if (f2 = u3.height, a4 === void 0) a4 = f2;
                else if (a4 !== f2) {
                  s4 = false;
                  break;
                }
                delete u3.width, delete u3.height, u3.transform === `none` && delete u3.transform;
              }
              s4 && i4 !== void 0 && a4 !== void 0 && (r4.setKeyframes(n4), s4 = getComputedStyle(r4.target, r4.pseudoElement), s4.width !== i4 || s4.height !== a4) && (s4 = n4[0], s4.width = i4, s4.height = a4, s4 = n4[n4.length - 1], s4.width = i4, s4.height = a4, r4.setKeyframes(n4));
            }
          }
          o3();
        }, function(e5) {
          l3.__reactViewTransition === u2 && (l3.__reactViewTransition = null);
          try {
            if (typeof e5 == `object` && e5) switch (e5.name) {
              case `InvalidStateError`:
                (e5.message === `View transition was skipped because document visibility state is hidden.` || e5.message === `Skipping view transition because document visibility state has become hidden.` || e5.message === `Skipping view transition because viewport size changed.` || e5.message === `Transition was aborted because of invalid state`) && (e5 = null);
            }
            e5 !== null && c3(e5);
          } finally {
            r3(), i3(), o3();
          }
        }), u2.finished.finally(function() {
          for (var e5 = 0; e5 < d3.length; e5++) d3[e5].cancel();
          l3.__reactViewTransition === u2 && (l3.__reactViewTransition = null), s3();
        }), u2;
      } catch {
        return r3(), i3(), o3(), null;
      }
    }
    function Np(e4, t3) {
      this._scope = document.documentElement, this._selector = `::view-transition-` + e4 + `(` + t3 + `)`;
    }
    Np.prototype.animate = function(e4, t3) {
      return t3 = typeof t3 == `number` ? { duration: t3 } : w2({}, t3), t3.pseudoElement = this._selector, this._scope.animate(e4, t3);
    }, Np.prototype.getAnimations = function() {
      for (var e4 = this._scope, t3 = this._selector, n3 = e4.getAnimations({ subtree: true }), r3 = [], i3 = 0; i3 < n3.length; i3++) {
        var a3 = n3[i3].effect;
        a3 !== null && a3.target === e4 && a3.pseudoElement === t3 && r3.push(n3[i3]);
      }
      return r3;
    }, Np.prototype.getComputedStyle = function() {
      return getComputedStyle(this._scope, this._selector);
    };
    function Pp(e4) {
      return { name: e4, group: new Np(`group`, e4), imagePair: new Np(`image-pair`, e4), old: new Np(`old`, e4), new: new Np(`new`, e4) };
    }
    function Fp(e4) {
      this._fragmentFiber = e4, this._observers = this._eventListeners = null;
    }
    Fp.prototype.addEventListener = function(e4, t3, n3) {
      var r3 = null, i3 = null;
      if (!(n3 != null && typeof n3 != `boolean` && (r3 = n3.signal || null, r3 !== null && r3.aborted))) {
        this._eventListeners === null && (this._eventListeners = []);
        var a3 = this._eventListeners;
        if (Bp(a3, e4, t3, n3) === -1) {
          var o3 = this, s3 = t3;
          n3 != null && typeof n3 != `boolean` && true === n3.once && (s3 = function(r4) {
            o3.removeEventListener(e4, t3, n3), typeof t3 == `function` ? t3.call(this, r4) : t3.handleEvent(r4);
          }), r3 !== null && (i3 = o3.removeEventListener.bind(o3, e4, t3, n3), r3.addEventListener(`abort`, i3, { once: true }), i3 = r3.removeEventListener.bind(r3, `abort`, i3)), r3 = Rp(n3), a3.push({ type: e4, listener: t3, optionsOrUseCapture: n3, attachedListener: s3, cleanup: i3 }), h2(this._fragmentFiber.child, false, Ip, e4, s3, r3);
        }
        this._eventListeners = a3;
      }
    };
    function Ip(e4, t3, n3, r3) {
      return b2(e4).addEventListener(t3, n3, r3), false;
    }
    Fp.prototype.removeEventListener = function(e4, t3, n3) {
      var r3 = this._eventListeners;
      if (r3 !== null && (t3 = Bp(r3, e4, t3, n3), t3 !== -1)) {
        var i3 = r3[t3];
        n3 = i3.attachedListener;
        var a3 = i3.cleanup;
        i3 = Rp(i3.optionsOrUseCapture), h2(this._fragmentFiber.child, false, Lp, e4, n3, i3), r3.splice(t3, 1), a3 !== null && a3();
      }
    };
    function Lp(e4, t3, n3, r3) {
      return b2(e4).removeEventListener(t3, n3, r3), false;
    }
    function Rp(e4) {
      return e4 != null && typeof e4 != `boolean` && (true === e4.once || e4.signal instanceof AbortSignal) ? { capture: e4.capture, passive: e4.passive } : e4;
    }
    function zp(e4) {
      return e4 == null ? `c=0` : typeof e4 == `boolean` ? `c=` + (e4 ? `1` : `0`) : `c=` + (e4.capture ? `1` : `0`);
    }
    function Bp(e4, t3, n3, r3) {
      if (e4.length === 0) return -1;
      r3 = zp(r3);
      for (var i3 = 0; i3 < e4.length; i3++) {
        var a3 = e4[i3];
        if (a3.type === t3 && a3.listener === n3 && zp(a3.optionsOrUseCapture) === r3) return i3;
      }
      return -1;
    }
    Fp.prototype.dispatchEvent = function(e4) {
      var t3 = g2(this._fragmentFiber);
      if (t3 === null) return true;
      t3 = b2(t3);
      var n3 = this._eventListeners;
      if (n3 !== null && 0 < n3.length || !e4.bubbles) {
        var r3 = t3.nodeType === 9 ? t3.createComment(``) : document.createTextNode(``);
        if (n3) for (var i3 = 0; i3 < n3.length; i3++) {
          var a3 = n3[i3];
          r3.addEventListener(a3.type, a3.attachedListener, Rp(a3.optionsOrUseCapture));
        }
        if (t3.appendChild(r3), e4 = r3.dispatchEvent(e4), n3) for (i3 = 0; i3 < n3.length; i3++) a3 = n3[i3], r3.removeEventListener(a3.type, a3.attachedListener, Rp(a3.optionsOrUseCapture));
        return t3.removeChild(r3), e4;
      }
      return t3.dispatchEvent(e4);
    }, Fp.prototype.focus = function(e4) {
      h2(this._fragmentFiber.child, true, Vp, e4, void 0, void 0);
    };
    function Vp(e4, t3) {
      return e4.tag !== 6 && (e4 = b2(e4), pm(e4, t3));
    }
    Fp.prototype.focusLast = function(e4) {
      var t3 = [];
      h2(this._fragmentFiber.child, true, Hp, t3, void 0, void 0);
      for (var n3 = t3.length - 1; 0 <= n3 && !Vp(t3[n3], e4); n3--) ;
    };
    function Hp(e4, t3) {
      return t3.push(e4), false;
    }
    Fp.prototype.blur = function() {
      var e4 = g2(this._fragmentFiber);
      e4 !== null && (e4 = b2(e4), e4 = lp(e4).activeElement, e4 !== null && h2(this._fragmentFiber.child, false, Up, e4, void 0, void 0));
    };
    function Up(e4, t3) {
      return e4.tag !== 6 && (e4 = b2(e4), e4 === t3 || e4.contains(t3) ? (t3.blur(), true) : false);
    }
    Fp.prototype.observeUsing = function(e4) {
      this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e4), h2(this._fragmentFiber.child, false, Wp, e4, void 0, void 0);
    };
    function Wp(e4, t3) {
      return e4.tag === 6 || (e4 = b2(e4), t3.observe(e4)), false;
    }
    Fp.prototype.unobserveUsing = function(e4) {
      var t3 = this._observers;
      if (t3 !== null && t3.has(e4)) {
        t3.delete(e4), h2(this._fragmentFiber.child, false, Gp, e4, void 0, void 0);
        for (var n3 = t3 = 0; n3 < Kp.length; n3++) {
          var r3 = Kp[n3];
          r3.fragmentInstance === this && r3.observer === e4 ? e4.unobserve(r3.instance) : Kp[t3++] = r3;
        }
        Kp.length = t3;
      }
    };
    function Gp(e4, t3) {
      return e4.tag === 6 || (e4 = b2(e4), t3.unobserve(e4)), false;
    }
    var Kp = [], qp = false;
    function Jp(e4, t3, n3) {
      Kp.push({ fragmentInstance: e4, observer: t3, instance: n3 }), qp || (qp = true, mm(function() {
        qp = false;
        var e5 = Kp;
        Kp = [];
        for (var t4 = 0; t4 < e5.length; t4++) {
          var n4 = e5[t4];
          n4.observer.unobserve(n4.instance);
        }
      }));
    }
    Fp.prototype.getClientRects = function() {
      var e4 = [];
      return h2(this._fragmentFiber.child, false, Yp, e4, void 0, void 0), e4;
    };
    function Yp(e4, t3) {
      if (e4.tag === 6) {
        e4 = e4.stateNode;
        var n3 = e4.ownerDocument.createRange();
        n3.selectNodeContents(e4), t3.push.apply(t3, n3.getClientRects());
      } else e4 = b2(e4), t3.push.apply(t3, e4.getClientRects());
      return false;
    }
    Fp.prototype.getRootNode = function(e4) {
      var t3 = g2(this._fragmentFiber);
      return t3 === null ? this : b2(t3).getRootNode(e4);
    }, Fp.prototype.compareDocumentPosition = function(e4) {
      var t3 = g2(this._fragmentFiber);
      if (t3 === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var n3 = [];
      h2(this._fragmentFiber.child, false, Hp, n3, void 0, void 0);
      var r3 = b2(t3);
      if (n3.length === 0) {
        if (n3 = r3, _2(this._fragmentFiber)) {
          a: {
            for (t3 = this._fragmentFiber.return; t3 !== null; ) {
              if (t3.tag === 4) {
                t3 = t3.stateNode.containerInfo;
                break a;
              }
              if (t3.tag === 3 || t3.tag === 5 || t3.tag === 27) break;
              t3 = t3.return;
            }
            t3 = null;
          }
          t3 != null && (n3 = t3);
        }
        t3 = this._fragmentFiber;
        var i3 = r3 = n3.compareDocumentPosition(e4);
        return n3 === e4 ? i3 = Node.DOCUMENT_POSITION_CONTAINS : r3 & Node.DOCUMENT_POSITION_CONTAINED_BY && (n3 = v2(t3)[1], n3 === null ? i3 = Node.DOCUMENT_POSITION_PRECEDING : (e4 = b2(n3).compareDocumentPosition(e4), i3 = e4 === 0 || e4 & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i3 |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
      }
      t3 = b2(n3[0]), i3 = b2(n3[n3.length - 1]);
      var a3 = _2(this._fragmentFiber) ? t3.parentElement : r3;
      if (a3 == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      r3 = a3.compareDocumentPosition(t3) & Node.DOCUMENT_POSITION_CONTAINED_BY, a3 = a3.compareDocumentPosition(i3) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      var o3 = t3.compareDocumentPosition(e4), s3 = i3.compareDocumentPosition(e4), c3 = o3 & Node.DOCUMENT_POSITION_CONTAINED_BY || s3 & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return s3 = r3 && a3 && o3 & Node.DOCUMENT_POSITION_FOLLOWING && s3 & Node.DOCUMENT_POSITION_PRECEDING, t3 = r3 && t3 === e4 || a3 && i3 === e4 || c3 || s3 ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r3 && t3 === e4 || !a3 && i3 === e4 ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o3, t3 & Node.DOCUMENT_POSITION_DISCONNECTED || t3 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t3, this._fragmentFiber, n3[0], n3[n3.length - 1], e4) ? t3 : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    };
    function Xp(e4, t3, n3, r3, i3) {
      var a3 = Ft2(i3);
      if (e4 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if (n3 = !!a3) a: {
          for (; a3 !== null; ) {
            if (a3.tag === 7 && (a3 === t3 || a3.alternate === t3)) {
              n3 = true;
              break a;
            }
            a3 = a3.return;
          }
          n3 = false;
        }
        return n3;
      }
      if (e4 & Node.DOCUMENT_POSITION_CONTAINS) {
        if (a3 === null) return a3 = i3.ownerDocument, i3 === a3 || i3 === a3.documentElement || i3 === a3.body;
        a: {
          for (a3 = t3, t3 = g2(t3); a3 !== null; ) {
            if (!(a3.tag !== 5 && a3.tag !== 3 && a3.tag !== 27 || a3 !== t3 && a3.alternate !== t3)) {
              a3 = true;
              break a;
            }
            a3 = a3.return;
          }
          a3 = false;
        }
        return a3;
      }
      return e4 & Node.DOCUMENT_POSITION_PRECEDING ? ((t3 = !!a3) && !(t3 = a3 === n3) && (t3 = ne2(n3, a3, C2), t3 === null ? t3 = false : (h2(t3, true, te2, a3, n3), a3 = ee2, ee2 = null, t3 = a3 !== null)), t3) : e4 & Node.DOCUMENT_POSITION_FOLLOWING ? ((t3 = !!a3) && !(t3 = a3 === r3) && (t3 = ne2(r3, a3, C2), t3 === null ? t3 = false : (h2(t3, true, S2, a3, r3), a3 = ee2, x2 = ee2 = null, t3 = a3 !== null)), t3) : false;
    }
    function Zp(e4, t3) {
      var n3 = e4.ownerDocument.createRange();
      n3.selectNodeContents(e4), e4 = n3.getBoundingClientRect(), window.scrollTo(window.scrollX + e4.left, t3 ? window.scrollY + e4.top : window.scrollY + e4.bottom - window.innerHeight);
    }
    Fp.prototype.scrollIntoView = function(e4) {
      if (typeof e4 == `object`) throw Error(i2(566));
      var t3 = [];
      h2(this._fragmentFiber.child, false, Hp, t3, void 0, void 0);
      var n3 = false !== e4;
      if (t3.length === 0) {
        var r3 = v2(this._fragmentFiber);
        if (r3 = n3 ? r3[1] || r3[0] || g2(this._fragmentFiber) : r3[0] || r3[1], r3 === null) return;
        if (r3.tag === 6) {
          e4 = b2(r3), Zp(e4, n3);
          return;
        }
        if (r3 = b2(r3), r3.nodeType !== 9) {
          if (r3.nodeType === 11) {
            n3 = `host` in r3 ? r3.host : null, n3 !== null && n3.scrollIntoView(e4);
            return;
          }
          r3.scrollIntoView(e4);
        }
      }
      for (r3 = n3 ? t3.length - 1 : 0; r3 !== (n3 ? -1 : t3.length); ) {
        var a3 = t3[r3];
        a3.tag === 6 ? (a3 = b2(a3), Zp(a3, n3)) : b2(a3).scrollIntoView(e4), r3 += n3 ? -1 : 1;
      }
    };
    function Qp(e4, t3) {
      return e4 = b2(e4), $p(e4, t3), false;
    }
    function $p(e4, t3) {
      e4.reactFragments ??= /* @__PURE__ */ new Set(), e4.reactFragments.add(t3);
    }
    function em(e4, t3) {
      var n3 = t3._eventListeners;
      if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3];
        e4.addEventListener(i3.type, i3.attachedListener, Rp(i3.optionsOrUseCapture));
      }
      e4.nodeType !== 3 && (n3 = t3._observers, n3 !== null && n3.forEach(function(n4) {
        for (var r4 = 0, i4 = 0; i4 < Kp.length; i4++) {
          var a3 = Kp[i4];
          (a3.fragmentInstance !== t3 || a3.observer !== n4 || a3.instance !== e4) && (Kp[r4++] = a3);
        }
        Kp.length = r4, n4.observe(e4);
      }), $p(e4, t3));
    }
    function tm(e4, t3) {
      var n3 = t3._eventListeners;
      if (n3 !== null) for (var r3 = 0; r3 < n3.length; r3++) {
        var i3 = n3[r3];
        e4.removeEventListener(i3.type, i3.attachedListener, Rp(i3.optionsOrUseCapture));
      }
      e4.nodeType !== 3 && (n3 = t3._observers, n3 !== null && n3.forEach(function(n4) {
        typeof n4.rootMargin == `string` ? Jp(t3, n4, e4) : n4.unobserve(e4);
      }), e4.reactFragments != null && e4.reactFragments.delete(t3));
    }
    function nm(e4) {
      var t3 = e4.firstChild;
      for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
        var n3 = t3;
        switch (t3 = t3.nextSibling, n3.nodeName) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            nm(n3), Pt2(n3);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n3.rel.toLowerCase() === `stylesheet`) continue;
        }
        e4.removeChild(n3);
      }
    }
    function rm(e4, t3, n3, r3) {
      for (; e4.nodeType === 1; ) {
        var i3 = n3;
        if (e4.nodeName.toLowerCase() !== t3.toLowerCase()) {
          if (!r3 && (e4.nodeName !== `INPUT` || e4.type !== `hidden`)) break;
        } else if (!r3) {
          if (t3 === `input` && e4.type === `hidden`) {
            var a3 = i3.name == null ? null : `` + i3.name;
            if (i3.type === `hidden` && e4.getAttribute(`name`) === a3) return e4;
          } else return e4;
        } else if (!e4[P2]) switch (t3) {
          case `meta`:
            if (!e4.hasAttribute(`itemprop`)) break;
            return e4;
          case `link`:
            if (a3 = e4.getAttribute(`rel`), a3 === `stylesheet` && e4.hasAttribute(`data-precedence`) || a3 !== i3.rel || e4.getAttribute(`href`) !== (i3.href == null || i3.href === `` ? null : i3.href) || e4.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin) || e4.getAttribute(`title`) !== (i3.title == null ? null : i3.title)) break;
            return e4;
          case `style`:
            if (e4.hasAttribute(`data-precedence`)) break;
            return e4;
          case `script`:
            if (a3 = e4.getAttribute(`src`), (a3 !== (i3.src == null ? null : i3.src) || e4.getAttribute(`type`) !== (i3.type == null ? null : i3.type) || e4.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin)) && a3 && e4.hasAttribute(`async`) && !e4.hasAttribute(`itemprop`)) break;
            return e4;
          default:
            return e4;
        }
        if (e4 = lm(e4.nextSibling), e4 === null) break;
      }
      return null;
    }
    function im(e4, t3, n3) {
      if (t3 === ``) return null;
      for (; e4.nodeType !== 3; ) if ((e4.nodeType !== 1 || e4.nodeName !== `INPUT` || e4.type !== `hidden`) && !n3 || (e4 = lm(e4.nextSibling), e4 === null)) return null;
      return e4;
    }
    function am(e4, t3) {
      for (; e4.nodeType !== 8; ) if ((e4.nodeType !== 1 || e4.nodeName !== `INPUT` || e4.type !== `hidden`) && !t3 || (e4 = lm(e4.nextSibling), e4 === null)) return null;
      return e4;
    }
    function om(e4) {
      return e4.data === `$?` || e4.data === `$~`;
    }
    function sm(e4) {
      return e4.data === `$!` || e4.data === `$?` && e4.ownerDocument.readyState !== `loading`;
    }
    function cm(e4, t3) {
      var n3 = e4.ownerDocument;
      if (e4.data === `$~`) e4._reactRetry = t3;
      else if (e4.data !== `$?` || n3.readyState !== `loading`) t3();
      else {
        var r3 = function() {
          t3(), n3.removeEventListener(`DOMContentLoaded`, r3);
        };
        n3.addEventListener(`DOMContentLoaded`, r3), e4._reactRetry = r3;
      }
    }
    function lm(e4) {
      for (; e4 != null; e4 = e4.nextSibling) {
        var t3 = e4.nodeType;
        if (t3 === 1 || t3 === 3) break;
        if (t3 === 8) {
          if (t3 = e4.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`) break;
          if (t3 === `/$` || t3 === `/&`) return null;
        }
      }
      return e4;
    }
    var um = null;
    function dm(e4) {
      e4 = e4.nextSibling;
      for (var t3 = 0; e4; ) {
        if (e4.nodeType === 8) {
          var n3 = e4.data;
          if (n3 === `/$` || n3 === `/&`) {
            if (t3 === 0) return lm(e4.nextSibling);
            t3--;
          } else n3 !== `$` && n3 !== `$!` && n3 !== `$?` && n3 !== `$~` && n3 !== `&` || t3++;
        }
        e4 = e4.nextSibling;
      }
      return null;
    }
    function fm(e4) {
      e4 = e4.previousSibling;
      for (var t3 = 0; e4; ) {
        if (e4.nodeType === 8) {
          var n3 = e4.data;
          if (n3 === `$` || n3 === `$!` || n3 === `$?` || n3 === `$~` || n3 === `&`) {
            if (t3 === 0) return e4;
            t3--;
          } else n3 !== `/$` && n3 !== `/&` || t3++;
        }
        e4 = e4.previousSibling;
      }
      return null;
    }
    function pm(e4, t3) {
      function n3() {
        r3 = true;
      }
      if (e4.ownerDocument.activeElement === e4) return true;
      var r3 = false;
      try {
        e4.ownerDocument.addEventListener(`focus`, n3, true), (e4.focus || HTMLElement.prototype.focus).call(e4, t3);
      } finally {
        e4.ownerDocument.removeEventListener(`focus`, n3, true);
      }
      return r3;
    }
    function mm(e4) {
      yp(function() {
        yp(function(t3) {
          return e4(t3);
        });
      });
    }
    function hm(e4, t3, n3) {
      switch (t3 = lp(n3), e4) {
        case `html`:
          if (e4 = t3.documentElement, !e4) throw Error(i2(452));
          return e4;
        case `head`:
          if (e4 = t3.head, !e4) throw Error(i2(453));
          return e4;
        case `body`:
          if (e4 = t3.body, !e4) throw Error(i2(454));
          return e4;
        default:
          throw Error(i2(451));
      }
    }
    function gm(e4, t3, n3) {
      for (var r3 in n3) {
        var i3 = n3[r3];
        n3.hasOwnProperty(r3) && i3 != null && $(e4, t3, r3, null, rp, i3);
      }
      n3.dangerouslySetInnerHTML != null && (e4.textContent = ``), e4.onclick === xn2 && (e4.onclick = null), Pt2(e4);
    }
    function _m(e4) {
      for (var t3 = e4.attributes; t3.length; ) e4.removeAttributeNode(t3[0]);
      Pt2(e4);
    }
    var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
    function bm(e4) {
      if (typeof e4.getRootNode == `function`) {
        var t3 = e4.getRootNode();
        if (t3.nodeType === 9 || t3.nodeType === 11) return t3;
      }
      return e4.nodeType === 9 ? e4 : e4.ownerDocument;
    }
    var xm = O2.d;
    O2.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
    function Sm() {
      var e4 = xm.f(), t3 = zd();
      return e4 || t3;
    }
    function Cm(e4) {
      var t3 = It2(e4);
      t3 !== null && t3.tag === 5 && t3.type === `form` ? ic(t3) : xm.r(e4);
    }
    var wm = typeof document > `u` ? null : document;
    function Tm(e4, t3, n3) {
      var r3 = wm;
      if (r3 && typeof t3 == `string` && t3) {
        var i3 = on2(t3);
        i3 = `link[rel="` + e4 + `"][href="` + i3 + `"]`, typeof n3 == `string` && (i3 += `[crossorigin="` + n3 + `"]`), ym.has(i3) || (ym.add(i3), e4 = { rel: e4, crossOrigin: n3, href: t3 }, r3.querySelector(i3) === null && (t3 = r3.createElement(`link`), np(t3, `link`, e4), zt2(t3), r3.head.appendChild(t3)));
      }
    }
    function Em(e4) {
      xm.D(e4), Tm(`dns-prefetch`, e4, null);
    }
    function Dm(e4, t3) {
      xm.C(e4, t3), Tm(`preconnect`, e4, t3);
    }
    function Om(e4, t3, n3) {
      xm.L(e4, t3, n3);
      var r3 = wm;
      if (r3 && e4 && t3) {
        var i3 = `link[rel="preload"][as="` + on2(t3) + `"]`;
        t3 === `image` && n3 && n3.imageSrcSet ? (i3 += `[imagesrcset="` + on2(n3.imageSrcSet) + `"]`, typeof n3.imageSizes == `string` && (i3 += `[imagesizes="` + on2(n3.imageSizes) + `"]`)) : i3 += `[href="` + on2(e4) + `"]`;
        var a3 = i3;
        switch (t3) {
          case `style`:
            a3 = Pm(e4);
            break;
          case `script`:
            a3 = Rm(e4);
        }
        if (!(vm.has(a3) || (e4 = w2({ rel: `preload`, href: t3 === `image` && n3 && n3.imageSrcSet ? void 0 : e4, as: t3 }, n3), vm.set(a3, e4), r3.querySelector(i3) !== null || t3 === `style` && r3.querySelector(Fm(a3)) || t3 === `script` && r3.querySelector(zm(a3))))) {
          var o3 = r3.createElement(`link`);
          np(o3, `link`, e4), t3 === `style` && (o3[F2] = true, o3.onload = o3.onerror = function() {
            Bt2(o3);
          }), zt2(o3), r3.head.appendChild(o3);
        }
      }
    }
    function km(e4, t3) {
      xm.m(e4, t3);
      var n3 = wm;
      if (n3 && e4) {
        var r3 = t3 && typeof t3.as == `string` ? t3.as : `script`, i3 = `link[rel="modulepreload"][as="` + on2(r3) + `"][href="` + on2(e4) + `"]`, a3 = i3;
        switch (r3) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a3 = Rm(e4);
        }
        if (!vm.has(a3) && (e4 = w2({ rel: `modulepreload`, href: e4 }, t3), vm.set(a3, e4), n3.querySelector(i3) === null)) {
          switch (r3) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n3.querySelector(zm(a3))) return;
          }
          r3 = n3.createElement(`link`), np(r3, `link`, e4), zt2(r3), n3.head.appendChild(r3);
        }
      }
    }
    function Am(e4, t3, n3) {
      xm.S(e4, t3, n3);
      var r3 = wm;
      if (r3 && e4) {
        var i3 = Rt2(r3).hoistableStyles, a3 = Pm(e4);
        t3 ||= `default`;
        var o3 = i3.get(a3);
        if (!o3) {
          var s3 = { loading: 0, preload: null };
          if (o3 = r3.querySelector(Fm(a3))) s3.loading = 5;
          else {
            e4 = w2({ rel: `stylesheet`, href: e4, "data-precedence": t3 }, n3), (n3 = vm.get(a3)) && Hm(e4, n3);
            var c3 = o3 = r3.createElement(`link`);
            zt2(c3), np(c3, `link`, e4), c3._p = new Promise(function(e5, t4) {
              c3.onload = e5, c3.onerror = t4;
            }), c3.addEventListener(`load`, function() {
              s3.loading |= 1;
            }), c3.addEventListener(`error`, function() {
              s3.loading |= 2;
            }), s3.loading |= 4, Vm(o3, t3, r3);
          }
          o3 = { type: `stylesheet`, instance: o3, count: 1, state: s3 }, i3.set(a3, o3);
        }
      }
    }
    function jm(e4, t3) {
      xm.X(e4, t3);
      var n3 = wm;
      if (n3 && e4) {
        var r3 = Rt2(n3).hoistableScripts, i3 = Rm(e4), a3 = r3.get(i3);
        a3 || (a3 = n3.querySelector(zm(i3)), a3 || (e4 = w2({ src: e4, async: true }, t3), (t3 = vm.get(i3)) && Um(e4, t3), a3 = n3.createElement(`script`), zt2(a3), np(a3, `link`, e4), n3.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i3, a3));
      }
    }
    function Mm(e4, t3) {
      xm.M(e4, t3);
      var n3 = wm;
      if (n3 && e4) {
        var r3 = Rt2(n3).hoistableScripts, i3 = Rm(e4), a3 = r3.get(i3);
        a3 || (a3 = n3.querySelector(zm(i3)), a3 || (e4 = w2({ src: e4, async: true, type: `module` }, t3), (t3 = vm.get(i3)) && Um(e4, t3), a3 = n3.createElement(`script`), zt2(a3), np(a3, `link`, e4), n3.head.appendChild(a3)), a3 = { type: `script`, instance: a3, count: 1, state: null }, r3.set(i3, a3));
      }
    }
    function Nm(e4, t3, n3, r3) {
      var a3 = (a3 = je2.current) ? bm(a3) : null;
      if (!a3) throw Error(i2(446));
      switch (e4) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n3.precedence == `string` && typeof n3.href == `string` ? (n3 = Pm(n3.href), t3 = Rt2(a3).hoistableStyles, r3 = t3.get(n3), r3 || (r3 = { type: `style`, instance: null, count: 0, state: null }, t3.set(n3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
        case `link`:
          if (n3.rel === `stylesheet` && typeof n3.href == `string` && typeof n3.precedence == `string`) {
            e4 = Pm(n3.href);
            var o3 = Rt2(a3).hoistableStyles, s3 = o3.get(e4);
            if (s3 || (a3 = a3.ownerDocument || a3, s3 = { type: `stylesheet`, instance: null, count: 0, state: { loading: 0, preload: null } }, o3.set(e4, s3), (o3 = a3.querySelector(Fm(e4))) ? o3._p || (s3.instance = o3, s3.state.loading = 5) : (o3 = vm.get(e4), o3 || (o3 = { rel: `preload`, as: `style`, href: n3.href, crossOrigin: n3.crossOrigin, integrity: n3.integrity, media: n3.media, hrefLang: n3.hrefLang, referrerPolicy: n3.referrerPolicy }, vm.set(e4, o3)), Lm(a3, e4, o3, s3.state))), t3 && r3 === null) throw Error(i2(528, ``));
            return s3;
          }
          if (t3 && r3 !== null) throw Error(i2(529, ``));
          return null;
        case `script`:
          return t3 = n3.async, n3 = n3.src, typeof n3 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (n3 = Rm(n3), t3 = Rt2(a3).hoistableScripts, r3 = t3.get(n3), r3 || (r3 = { type: `script`, instance: null, count: 0, state: null }, t3.set(n3, r3)), r3) : { type: `void`, instance: null, count: 0, state: null };
        default:
          throw Error(i2(444, e4));
      }
    }
    function Pm(e4) {
      return `href="` + on2(e4) + `"`;
    }
    function Fm(e4) {
      return `link[rel="stylesheet"][` + e4 + `]`;
    }
    function Im(e4) {
      return w2({}, e4, { "data-precedence": e4.precedence, precedence: null });
    }
    function Lm(e4, t3, n3, r3) {
      if (t3 = e4.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`)) {
        if (true !== t3[F2]) {
          r3.loading = 1;
          return;
        }
      } else t3 = e4.createElement(`link`), t3[F2] = true, t3.onload = t3.onerror = Bt2.bind(null, t3), np(t3, `link`, n3), zt2(t3), e4.head.appendChild(t3);
      r3.preload = t3, t3.addEventListener(`load`, function() {
        return r3.loading |= 1;
      }), t3.addEventListener(`error`, function() {
        return r3.loading |= 2;
      });
    }
    function Rm(e4) {
      return `[src="` + on2(e4) + `"]`;
    }
    function zm(e4) {
      return `script[async]` + e4;
    }
    function Bm(e4, t3, n3) {
      if (t3.count++, t3.instance === null) switch (t3.type) {
        case `style`:
          var r3 = e4.querySelector(`style[data-href~="` + on2(n3.href) + `"]`);
          if (r3) return t3.instance = r3, zt2(r3), r3;
          var a3 = w2({}, n3, { "data-href": n3.href, "data-precedence": n3.precedence, href: null, precedence: null });
          return r3 = (e4.ownerDocument || e4).createElement(`style`), zt2(r3), np(r3, `style`, a3), Vm(r3, n3.precedence, e4), t3.instance = r3;
        case `stylesheet`:
          a3 = Pm(n3.href);
          var o3 = e4.querySelector(Fm(a3));
          if (o3) return t3.state.loading |= 4, t3.instance = o3, zt2(o3), o3;
          r3 = Im(n3), (a3 = vm.get(a3)) && Hm(r3, a3), o3 = (e4.ownerDocument || e4).createElement(`link`), zt2(o3);
          var s3 = o3;
          return s3._p = new Promise(function(e5, t4) {
            s3.onload = e5, s3.onerror = t4;
          }), np(o3, `link`, r3), t3.state.loading |= 4, Vm(o3, n3.precedence, e4), t3.instance = o3;
        case `script`:
          return o3 = Rm(n3.src), (a3 = e4.querySelector(zm(o3))) ? (t3.instance = a3, zt2(a3), a3) : (r3 = n3, (a3 = vm.get(o3)) && (r3 = w2({}, n3), Um(r3, a3)), e4 = e4.ownerDocument || e4, a3 = e4.createElement(`script`), zt2(a3), np(a3, `link`, r3), e4.head.appendChild(a3), t3.instance = a3);
        case `void`:
          return null;
        default:
          throw Error(i2(443, t3.type));
      }
      else t3.type === `stylesheet` && !(t3.state.loading & 4) && (r3 = t3.instance, t3.state.loading |= 4, Vm(r3, n3.precedence, e4));
      return t3.instance;
    }
    function Vm(e4, t3, n3) {
      for (var r3 = n3.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i3 = r3.length ? r3[r3.length - 1] : null, a3 = i3, o3 = 0; o3 < r3.length; o3++) {
        var s3 = r3[o3];
        if (s3.dataset.precedence === t3) a3 = s3;
        else if (a3 !== i3) break;
      }
      a3 ? a3.parentNode.insertBefore(e4, a3.nextSibling) : (t3 = n3.nodeType === 9 ? n3.head : n3, t3.insertBefore(e4, t3.firstChild));
    }
    function Hm(e4, t3) {
      e4.crossOrigin ??= t3.crossOrigin, e4.referrerPolicy ??= t3.referrerPolicy, e4.title ??= t3.title;
    }
    function Um(e4, t3) {
      e4.crossOrigin ??= t3.crossOrigin, e4.referrerPolicy ??= t3.referrerPolicy, e4.integrity ??= t3.integrity;
    }
    var Wm = null;
    function Gm(e4, t3, n3) {
      if (Wm === null) {
        var r3 = /* @__PURE__ */ new Map(), i3 = Wm = /* @__PURE__ */ new Map();
        i3.set(n3, r3);
      } else i3 = Wm, r3 = i3.get(n3), r3 || (r3 = /* @__PURE__ */ new Map(), i3.set(n3, r3));
      if (r3.has(e4)) return r3;
      for (r3.set(e4, null), n3 = n3.getElementsByTagName(e4), i3 = 0; i3 < n3.length; i3++) {
        var a3 = n3[i3];
        if (!(a3[P2] || a3[Dt2] || e4 === `link` && a3.getAttribute(`rel`) === `stylesheet`) && a3.namespaceURI !== `http://www.w3.org/2000/svg`) {
          var o3 = a3.getAttribute(t3) || ``;
          o3 = e4 + o3;
          var s3 = r3.get(o3);
          s3 ? s3.push(a3) : r3.set(o3, [a3]);
        }
      }
      return r3;
    }
    function Km(e4, t3, n3) {
      e4 = e4.ownerDocument || e4, e4.head.insertBefore(n3, t3 === `title` ? e4.querySelector(`head > title`) : null);
    }
    function qm(e4, t3, n3) {
      if (n3 === 1 || t3.itemProp != null) return false;
      switch (e4) {
        case `meta`:
        case `title`:
          return true;
        case `style`:
          if (typeof t3.precedence != `string` || typeof t3.href != `string` || t3.href === ``) break;
          return true;
        case `link`:
          if (typeof t3.rel != `string` || typeof t3.href != `string` || t3.href === `` || t3.onLoad || t3.onError) break;
          switch (t3.rel) {
            case `stylesheet`:
              return e4 = t3.disabled, typeof t3.precedence == `string` && e4 == null;
            default:
              return true;
          }
        case `script`:
          if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`) return true;
      }
      return false;
    }
    function Jm(e4, t3) {
      return e4 === `img` && t3.src != null && t3.src !== `` && t3.onLoad == null && t3.loading !== `lazy`;
    }
    function Ym(e4) {
      return !(e4.type === `stylesheet` && !(e4.state.loading & 3));
    }
    function Xm(e4) {
      return (e4.width || 100) * (e4.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
    }
    function Zm(e4, t3) {
      typeof t3.decode == `function` && (e4.imgCount++, t3.complete || (e4.imgBytes += Xm(t3), e4.suspenseyImages.push(t3)), e4 = rh.bind(e4), t3.decode().then(e4, e4));
    }
    function Qm(e4, t3, n3, r3) {
      if (n3.type === `stylesheet` && (typeof r3.media != `string` || false !== matchMedia(r3.media).matches) && !(n3.state.loading & 4)) {
        if (n3.instance === null) {
          var i3 = Pm(r3.href), a3 = t3.querySelector(Fm(i3));
          if (a3) {
            t3 = a3._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e4.count++, e4 = nh.bind(e4), t3.then(e4, e4)), n3.state.loading |= 4, n3.instance = a3, zt2(a3);
            return;
          }
          a3 = t3.ownerDocument || t3, r3 = Im(r3), (i3 = vm.get(i3)) && Hm(r3, i3), a3 = a3.createElement(`link`), zt2(a3);
          var o3 = a3;
          o3._p = new Promise(function(e5, t4) {
            o3.onload = e5, o3.onerror = t4;
          }), np(a3, `link`, r3), n3.instance = a3;
        }
        e4.stylesheets === null && (e4.stylesheets = /* @__PURE__ */ new Map()), e4.stylesheets.set(n3, t3), (t3 = n3.state.preload) && !(n3.state.loading & 3) && (e4.count++, n3 = nh.bind(e4), t3.addEventListener(`load`, n3), t3.addEventListener(`error`, n3));
      }
    }
    var $m = 0;
    function eh(e4, t3) {
      return e4.stylesheets && e4.count === 0 && ah(e4, e4.stylesheets), 0 < e4.count || 0 < e4.imgCount ? function(n3) {
        var r3 = setTimeout(function() {
          if (e4.stylesheets && ah(e4, e4.stylesheets), e4.unsuspend) {
            var t4 = e4.unsuspend;
            e4.unsuspend = null, t4();
          }
        }, 6e4 + t3);
        0 < e4.imgBytes && $m === 0 && ($m = 62500 * op());
        var i3 = setTimeout(function() {
          if (e4.waitingForImages = false, e4.count === 0 && (e4.stylesheets && ah(e4, e4.stylesheets), e4.unsuspend)) {
            var t4 = e4.unsuspend;
            e4.unsuspend = null, t4();
          }
        }, (e4.imgBytes > $m ? 50 : 800) + t3);
        return e4.unsuspend = n3, function() {
          e4.unsuspend = null, clearTimeout(r3), clearTimeout(i3);
        };
      } : null;
    }
    function th(e4) {
      if (e4.count === 0 && (e4.imgCount === 0 || !e4.waitingForImages)) {
        if (e4.stylesheets) ah(e4, e4.stylesheets);
        else if (e4.unsuspend) {
          var t3 = e4.unsuspend;
          e4.unsuspend = null, t3();
        }
      }
    }
    function nh() {
      this.count--, th(this);
    }
    function rh() {
      this.imgCount--, th(this);
    }
    var ih = null;
    function ah(e4, t3) {
      e4.stylesheets = null, e4.unsuspend !== null && (e4.count++, ih = /* @__PURE__ */ new Map(), t3.forEach(oh, e4), ih = null, nh.call(e4));
    }
    function oh(e4, t3) {
      if (!(t3.state.loading & 4)) {
        var n3 = ih.get(e4);
        if (n3) var r3 = n3.get(null);
        else {
          n3 = /* @__PURE__ */ new Map(), ih.set(e4, n3);
          for (var i3 = e4.querySelectorAll(`link[data-precedence],style[data-precedence]`), a3 = 0; a3 < i3.length; a3++) {
            var o3 = i3[a3];
            (o3.nodeName === `LINK` || o3.getAttribute(`media`) !== `not all`) && (n3.set(o3.dataset.precedence, o3), r3 = o3);
          }
          r3 && n3.set(null, r3);
        }
        i3 = t3.instance, o3 = i3.getAttribute(`data-precedence`), a3 = n3.get(o3) || r3, a3 === r3 && n3.set(null, i3), n3.set(o3, i3), this.count++, r3 = nh.bind(this), i3.addEventListener(`load`, r3), i3.addEventListener(`error`, r3), a3 ? a3.parentNode.insertBefore(i3, a3.nextSibling) : (e4 = e4.nodeType === 9 ? e4.head : e4, e4.insertBefore(i3, e4.firstChild)), t3.state.loading |= 4;
      }
    }
    var sh = { $$typeof: le2, Provider: null, Consumer: null, _currentValue: we2, _currentValue2: we2, _threadCount: 0 };
    function ch(e4, t3, n3, r3, i3, a3, o3, s3, c3) {
      this.tag = 1, this.containerInfo = e4, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gt2(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt2(0), this.hiddenUpdates = gt2(null), this.identifierPrefix = r3, this.onUncaughtError = i3, this.onCaughtError = a3, this.onRecoverableError = o3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function lh(e4, t3, n3, r3, i3, a3, o3, s3, c3, l3, u2, d3) {
      return e4 = new ch(e4, t3, n3, o3, c3, l3, u2, d3, s3), t3 = 1, true === a3 && (t3 |= 24), a3 = Pi2(3, null, null, t3), e4.current = a3, a3.stateNode = e4, t3 = Na(), t3.refCount++, e4.pooledCache = t3, t3.refCount++, a3.memoizedState = { element: r3, isDehydrated: n3, cache: t3 }, go(a3), e4;
    }
    function uh(e4) {
      return e4 ? (e4 = Mi2, e4) : Mi2;
    }
    function dh(e4, t3, n3, r3, i3, a3) {
      i3 = uh(i3), r3.context === null ? r3.context = i3 : r3.pendingContext = i3, r3 = vo(t3), r3.payload = { element: n3 }, a3 = a3 === void 0 ? null : a3, a3 !== null && (r3.callback = a3), n3 = yo(e4, r3, t3), n3 !== null && (Pd(n3, e4, t3), bo(n3, e4, t3));
    }
    function fh(e4, t3) {
      if (e4 = e4.memoizedState, e4 !== null && e4.dehydrated !== null) {
        var n3 = e4.retryLane;
        e4.retryLane = n3 !== 0 && n3 < t3 ? n3 : t3;
      }
    }
    function ph(e4, t3) {
      fh(e4, t3), (e4 = e4.alternate) && fh(e4, t3);
    }
    function mh(e4) {
      if (e4.tag === 13 || e4.tag === 31) {
        var t3 = ki2(e4, 67108864);
        t3 !== null && Pd(t3, e4, 67108864), ph(e4, 67108864);
      }
    }
    function hh(e4) {
      if (e4.tag === 13 || e4.tag === 31) {
        var t3 = jd();
        t3 = St2(t3);
        var n3 = ki2(e4, t3);
        n3 !== null && Pd(n3, e4, t3), ph(e4, t3);
      }
    }
    var gh = true;
    function _h(e4, t3, n3, r3) {
      var i3 = D2.T;
      D2.T = null;
      var a3 = O2.p;
      try {
        O2.p = 2, yh(e4, t3, n3, r3);
      } finally {
        O2.p = a3, D2.T = i3;
      }
    }
    function vh(e4, t3, n3, r3) {
      var i3 = D2.T;
      D2.T = null;
      var a3 = O2.p;
      try {
        O2.p = 8, yh(e4, t3, n3, r3);
      } finally {
        O2.p = a3, D2.T = i3;
      }
    }
    function yh(e4, t3, n3, r3) {
      if (gh) {
        var i3 = bh(r3);
        if (i3 === null) Kf(e4, t3, r3, xh, n3), Mh(e4, r3);
        else if (Ph(i3, e4, t3, n3, r3)) r3.stopPropagation();
        else if (Mh(e4, r3), t3 & 4 && -1 < jh.indexOf(e4)) {
          for (; i3 !== null; ) {
            var a3 = It2(i3);
            if (a3 !== null) switch (a3.tag) {
              case 3:
                if (a3 = a3.stateNode, a3.current.memoizedState.isDehydrated) {
                  var o3 = N2(a3.pendingLanes);
                  if (o3 !== 0) {
                    var s3 = a3;
                    for (s3.pendingLanes |= 2, s3.entangledLanes |= 2; o3; ) {
                      var c3 = 1 << 31 - it2(o3);
                      s3.entanglements[1] |= c3, o3 &= ~c3;
                    }
                    Ef(a3), !(G & 6) && (_d = j2() + 500, Df(0, false));
                  }
                }
                break;
              case 31:
              case 13:
                s3 = ki2(a3, 2), s3 !== null && Pd(s3, a3, 2), zd(), ph(a3, 2);
            }
            if (a3 = bh(r3), a3 === null && Kf(e4, t3, r3, xh, n3), a3 === i3) break;
            i3 = a3;
          }
          i3 !== null && r3.stopPropagation();
        } else Kf(e4, t3, r3, null, n3);
      }
    }
    function bh(e4) {
      return e4 = Cn2(e4), Sh(e4);
    }
    var xh = null;
    function Sh(e4) {
      if (xh = null, e4 = Ft2(e4), e4 !== null) {
        var t3 = o2(e4);
        if (t3 === null) e4 = null;
        else {
          var n3 = t3.tag;
          if (n3 === 13) {
            if (e4 = s2(t3), e4 !== null) return e4;
            e4 = null;
          } else if (n3 === 31) {
            if (e4 = c2(t3), e4 !== null) return e4;
            e4 = null;
          } else if (n3 === 3) {
            if (t3.stateNode.current.memoizedState.isDehydrated) return t3.tag === 3 ? t3.stateNode.containerInfo : null;
            e4 = null;
          } else t3 !== e4 && (e4 = null);
        }
      }
      return xh = e4, null;
    }
    function Ch(e4) {
      switch (e4) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `fullscreenerror`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `resize`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Je2()) {
            case Ye2:
              return 2;
            case Xe2:
              return 8;
            case Ze2:
            case Qe2:
              return 32;
            case $e2:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wh = false, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
    function Mh(e4, t3) {
      switch (e4) {
        case `focusin`:
        case `focusout`:
          Th = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Eh = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Dh = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Oh.delete(t3.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          kh.delete(t3.pointerId);
      }
    }
    function Nh(e4, t3, n3, r3, i3, a3) {
      return e4 === null || e4.nativeEvent !== a3 ? (e4 = { blockedOn: t3, domEventName: n3, eventSystemFlags: r3, nativeEvent: a3, targetContainers: [i3] }, t3 !== null && (t3 = It2(t3), t3 !== null && mh(t3)), e4) : (e4.eventSystemFlags |= r3, t3 = e4.targetContainers, i3 !== null && t3.indexOf(i3) === -1 && t3.push(i3), e4);
    }
    function Ph(e4, t3, n3, r3, i3) {
      switch (t3) {
        case `focusin`:
          return Th = Nh(Th, e4, t3, n3, r3, i3), true;
        case `dragenter`:
          return Eh = Nh(Eh, e4, t3, n3, r3, i3), true;
        case `mouseover`:
          return Dh = Nh(Dh, e4, t3, n3, r3, i3), true;
        case `pointerover`:
          var a3 = i3.pointerId;
          return Oh.set(a3, Nh(Oh.get(a3) || null, e4, t3, n3, r3, i3)), true;
        case `gotpointercapture`:
          return a3 = i3.pointerId, kh.set(a3, Nh(kh.get(a3) || null, e4, t3, n3, r3, i3)), true;
      }
      return false;
    }
    function Fh(e4) {
      var t3 = Ft2(e4.target);
      if (t3 !== null) {
        var n3 = o2(t3);
        if (n3 !== null) {
          if (t3 = n3.tag, t3 === 13) {
            if (t3 = s2(n3), t3 !== null) {
              e4.blockedOn = t3, Tt2(e4.priority, function() {
                hh(n3);
              });
              return;
            }
          } else if (t3 === 31) {
            if (t3 = c2(n3), t3 !== null) {
              e4.blockedOn = t3, Tt2(e4.priority, function() {
                hh(n3);
              });
              return;
            }
          } else if (t3 === 3 && n3.stateNode.current.memoizedState.isDehydrated) {
            e4.blockedOn = n3.tag === 3 ? n3.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e4.blockedOn = null;
    }
    function Ih(e4) {
      if (e4.blockedOn !== null) return false;
      for (var t3 = e4.targetContainers; 0 < t3.length; ) {
        var n3 = bh(e4.nativeEvent);
        if (n3 === null) {
          n3 = e4.nativeEvent;
          var r3 = new n3.constructor(n3.type, n3);
          Sn2 = r3, n3.target.dispatchEvent(r3), Sn2 = null;
        } else return t3 = It2(n3), t3 !== null && mh(t3), e4.blockedOn = n3, false;
        t3.shift();
      }
      return true;
    }
    function Lh(e4, t3, n3) {
      Ih(e4) && n3.delete(t3);
    }
    function Rh() {
      wh = false, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
    }
    function zh(e4, n3) {
      e4.blockedOn === n3 && (e4.blockedOn = null, wh || (wh = true, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, Rh)));
    }
    var Bh = null;
    function Vh(e4) {
      Bh !== e4 && (Bh = e4, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, function() {
        Bh === e4 && (Bh = null);
        for (var t3 = 0; t3 < e4.length; t3 += 3) {
          var n3 = e4[t3], r3 = e4[t3 + 1], i3 = e4[t3 + 2];
          if (typeof r3 != `function`) {
            if (Sh(r3 || n3) === null) continue;
            break;
          }
          var a3 = It2(n3);
          a3 !== null && (e4.splice(t3, 3), t3 -= 3, nc(a3, { pending: true, data: i3, method: n3.method, action: r3 }, r3, i3));
        }
      }));
    }
    function Hh(e4) {
      function t3(t4) {
        return zh(t4, e4);
      }
      Th !== null && zh(Th, e4), Eh !== null && zh(Eh, e4), Dh !== null && zh(Dh, e4), Oh.forEach(t3), kh.forEach(t3);
      for (var n3 = 0; n3 < Ah.length; n3++) {
        var r3 = Ah[n3];
        r3.blockedOn === e4 && (r3.blockedOn = null);
      }
      for (; 0 < Ah.length && (n3 = Ah[0], n3.blockedOn === null); ) Fh(n3), n3.blockedOn === null && Ah.shift();
      if (n3 = (e4.ownerDocument || e4).$$reactFormReplay, n3 != null) for (r3 = 0; r3 < n3.length; r3 += 3) {
        var i3 = n3[r3], a3 = n3[r3 + 1], o3 = i3[Ot2] || null;
        if (typeof a3 == `function`) o3 || Vh(n3);
        else if (o3) {
          var s3 = null;
          if (a3 && a3.hasAttribute(`formAction`)) {
            if (i3 = a3, o3 = a3[Ot2] || null) s3 = o3.formAction;
            else if (Sh(i3) !== null) continue;
          } else s3 = o3.action;
          typeof s3 == `function` ? n3[r3 + 1] = s3 : (n3.splice(r3, 3), r3 -= 3), Vh(n3);
        }
      }
    }
    function Uh() {
      function e4(e5) {
        e5.canIntercept && e5.info === `react-transition` && e5.intercept({ handler: function() {
          return new Promise(function(e6) {
            return i3 = e6;
          });
        }, focusReset: `manual`, scroll: `manual` });
      }
      function t3() {
        i3 !== null && (i3(), i3 = null), r3 || setTimeout(n3, 20);
      }
      function n3() {
        if (!r3 && !navigation.transition) {
          var e5 = navigation.currentEntry;
          e5 && e5.url != null && navigation.navigate(e5.url, { state: e5.getState(), info: `react-transition`, history: `replace` });
        }
      }
      if (typeof navigation == `object`) {
        var r3 = false, i3 = null;
        return navigation.addEventListener(`navigate`, e4), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n3, 100), function() {
          r3 = true, navigation.removeEventListener(`navigate`, e4), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i3 !== null && (i3(), i3 = null);
        };
      }
    }
    function Wh(e4) {
      this._internalRoot = e4;
    }
    Gh.prototype.render = Wh.prototype.render = function(e4) {
      var t3 = this._internalRoot;
      if (t3 === null) throw Error(i2(409));
      var n3 = t3.current;
      dh(n3, jd(), e4, t3, null, null);
    }, Gh.prototype.unmount = Wh.prototype.unmount = function() {
      var e4 = this._internalRoot;
      if (e4 !== null) {
        this._internalRoot = null;
        var t3 = e4.containerInfo;
        dh(e4.current, 2, null, e4, null, null), zd(), t3[kt2] = null;
      }
    };
    function Gh(e4) {
      this._internalRoot = e4;
    }
    Gh.prototype.unstable_scheduleHydration = function(e4) {
      if (e4) {
        var t3 = wt2();
        e4 = { blockedOn: null, target: e4, priority: t3 };
        for (var n3 = 0; n3 < Ah.length && t3 !== 0 && t3 < Ah[n3].priority; n3++) ;
        Ah.splice(n3, 0, e4), n3 === 0 && Fh(e4);
      }
    };
    var Kh = n2.version;
    if (Kh !== `19.3.1`) throw Error(i2(527, Kh, `19.3.1`));
    O2.findDOMNode = function(e4) {
      var t3 = e4._reactInternals;
      if (t3 === void 0) throw typeof e4.render == `function` ? Error(i2(188)) : (e4 = Object.keys(e4).join(`,`), Error(i2(268, e4)));
      return e4 = d2(t3), e4 = e4 === null ? null : p2(e4), e4 = e4 === null ? null : e4.stateNode, e4;
    };
    var qh = { bundleType: 0, version: `19.3.1`, rendererPackageName: `react-dom`, currentDispatcherRef: D2, reconcilerVersion: `19.3.1` };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jh.isDisabled && Jh.supportsFiber) try {
        nt2 = Jh.inject(qh), rt2 = Jh;
      } catch {
      }
    }
    e3.createRoot = function(e4, t3) {
      if (!a2(e4)) throw Error(i2(299));
      var n3 = false, r3 = ``, o3 = Tc, s3 = Ec, c3 = Dc;
      return t3 != null && (true === t3.unstable_strictMode && (n3 = true), t3.identifierPrefix !== void 0 && (r3 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (o3 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (s3 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (c3 = t3.onRecoverableError)), t3 = lh(e4, 1, false, null, null, n3, r3, null, o3, s3, c3, Uh), e4[kt2] = t3.current, Wf(e4), new Wh(t3);
    };
  }));
  var g = o(((e3, t2) => {
    function n2() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e4) {
        console.error(e4);
      }
    }
    n2(), t2.exports = h();
  }));
  var _ = c(u(), 1);
  var v = g();
  var y = { critic: `#d6ff4a`, tester: `#8fd4ff`, planner: `#f0c14a`, sprinter: `#ff8a5b`, reckless: `#d7b4ff` };
  function b(e3) {
    return y[e3] ?? `#e7f0dc`;
  }
  function ee(e3) {
    switch (e3) {
      case `plan_then_code`:
        return `Plan, then code`;
      case `test_first`:
        return `Test first`;
      case `self_critique`:
        return `Self-critique`;
      case `direct`:
        return `Direct`;
      default:
        return e3;
    }
  }
  function x(e3) {
    return `${Math.round(e3 * 100)}%`;
  }
  function te(e3, t2 = 0) {
    let n2 = e3.toFixed(t2);
    return e3 > 0 ? `+${n2}` : n2;
  }
  function S(e3) {
    return e3 >= 1e3 ? `${(e3 / 1e3).toFixed(1)}k` : String(e3);
  }
  function C(e3) {
    return e3 < 0.01 ? `$${e3.toFixed(4)}` : `$${e3.toFixed(3)}`;
  }
  function ne(e3, t2, n2) {
    let r2 = n2.find((e4) => e4.index === t2);
    if (!r2) return 0;
    let i2 = r2.results.filter((t3) => t3.lineage_id === e3.id);
    return i2.length ? i2.reduce((e4, t3) => e4 + t3.pass_rate, 0) / i2.length : 0;
  }
  var w = o(((e3) => {
    var t2 = /* @__PURE__ */ Symbol.for(`react.transitional.element`);
    function n2(e4, n3, r2) {
      var i2 = null;
      if (r2 !== void 0 && (i2 = `` + r2), n3.key !== void 0 && (i2 = `` + n3.key), `key` in n3) for (var a2 in r2 = {}, n3) a2 !== `key` && (r2[a2] = n3[a2]);
      else r2 = n3;
      return n3 = r2.ref, { $$typeof: t2, type: e4, key: i2, ref: n3 === void 0 ? null : n3, props: r2 };
    }
    e3.jsx = n2, e3.jsxs = n2;
  }));
  var T = o(((e3, t2) => {
    t2.exports = w();
  }))();
  function re({ data: e3, lineageId: t2 }) {
    let n2 = (t2 ? e3.genomes.filter((e4) => e4.lineage_id === t2) : e3.genomes).slice();
    if (!n2.length) return (0, T.jsx)(`p`, { className: `text-sm text-muted`, children: `No genomes in this season.` });
    let r2 = Math.max(...n2.map((e4) => e4.generation)), i2 = /* @__PURE__ */ new Map();
    for (let e4 of n2) {
      let t3 = i2.get(e4.generation) ?? [];
      t3.push(e4), i2.set(e4.generation, t3);
    }
    for (let e4 of i2.values()) e4.sort((e5, t3) => e5.lineage_id.localeCompare(t3.lineage_id));
    let a2 = Math.max(...[...i2.values()].map((e4) => e4.length)) * 64 + 36, o2 = 780 / (r2 + 1), s2 = /* @__PURE__ */ new Map();
    for (let e4 = 0; e4 <= r2; e4 += 1) (i2.get(e4) ?? []).forEach((t3, n3) => {
      s2.set(t3.id, { x: 24 + e4 * o2 + o2 / 2, y: 28 + n3 * 64 });
    });
    return (0, T.jsxs)(`svg`, { viewBox: `0 0 820 ${a2}`, className: `h-auto w-full`, role: `img`, "aria-label": `Genome lineage tree`, children: [n2.flatMap((e4) => e4.parent_ids.map((t3) => {
      let n3 = s2.get(t3), r3 = s2.get(e4.id);
      return !n3 || !r3 ? null : (0, T.jsx)(`line`, { x1: n3.x, y1: n3.y, x2: r3.x, y2: r3.y, stroke: b(e4.lineage_id), strokeWidth: `1.4`, opacity: `0.7` }, `${t3}-${e4.id}`);
    })), n2.map((e4) => {
      let t3 = s2.get(e4.id);
      return t3 ? (0, T.jsx)(`a`, { href: `#/agent/${e4.lineage_id}`, children: (0, T.jsxs)(`g`, { children: [(0, T.jsx)(`rect`, { x: t3.x - 54, y: t3.y - 16, width: `108`, height: `32`, rx: `16`, fill: `#171c15`, stroke: b(e4.lineage_id) }), (0, T.jsxs)(`text`, { x: t3.x, y: t3.y + 4, textAnchor: `middle`, fill: `#e7f0dc`, fontSize: `11`, children: [e4.name, ` g`, e4.generation] })] }) }, e4.id) : null;
    })] });
  }
  function ie(e3) {
    var t2, n2, r2 = ``;
    if (typeof e3 == `string` || typeof e3 == `number`) r2 += e3;
    else if (typeof e3 == `object`) {
      if (Array.isArray(e3)) {
        var i2 = e3.length;
        for (t2 = 0; t2 < i2; t2++) e3[t2] && (n2 = ie(e3[t2])) && (r2 && (r2 += ` `), r2 += n2);
      } else for (n2 in e3) e3[n2] && (r2 && (r2 += ` `), r2 += n2);
    }
    return r2;
  }
  function ae() {
    for (var e3, t2, n2 = 0, r2 = ``, i2 = arguments.length; n2 < i2; n2++) (e3 = arguments[n2]) && (t2 = ie(e3)) && (r2 && (r2 += ` `), r2 += t2);
    return r2;
  }
  var oe = (e3) => typeof e3 == `boolean` ? `${e3}` : e3 === 0 ? `0` : e3;
  var se = ae;
  var ce = (e3, t2) => (n2) => {
    if (t2?.variants == null) return se(e3, n2?.class, n2?.className);
    let { variants: r2, defaultVariants: i2 } = t2, a2 = Object.keys(r2).map((e4) => {
      let t3 = n2?.[e4], a3 = i2?.[e4];
      if (t3 === null) return null;
      let o3 = oe(t3) || oe(a3);
      return r2[e4][o3];
    }), o2 = n2 && Object.entries(n2).reduce((e4, t3) => {
      let [n3, r3] = t3;
      return r3 === void 0 || (e4[n3] = r3), e4;
    }, {});
    return se(e3, a2, t2?.compoundVariants?.reduce((e4, t3) => {
      let { class: n3, className: r3, ...a3 } = t3;
      return Object.entries(a3).every((e5) => {
        let [t4, n4] = e5;
        return Array.isArray(n4) ? n4.includes({ ...i2, ...o2 }[t4]) : { ...i2, ...o2 }[t4] === n4;
      }) ? [...e4, n3, r3] : e4;
    }, []), n2?.class, n2?.className);
  };
  var le = (e3, t2) => {
    let n2 = Array(e3.length + t2.length);
    for (let t3 = 0; t3 < e3.length; t3++) n2[t3] = e3[t3];
    for (let r2 = 0; r2 < t2.length; r2++) n2[e3.length + r2] = t2[r2];
    return n2;
  };
  var E = (e3, t2) => ({ classGroupId: e3, validator: t2 });
  var ue = (e3 = /* @__PURE__ */ new Map(), t2 = null, n2) => ({ nextPart: e3, validators: t2, classGroupId: n2 });
  var de = `-`;
  var fe = [];
  var pe = `arbitrary..`;
  var me = (e3) => {
    let t2 = _e(e3), { conflictingClassGroups: n2, conflictingClassGroupModifiers: r2 } = e3;
    return { getClassGroupId: (e4) => {
      if (e4.startsWith(`[`) && e4.endsWith(`]`)) return ge(e4);
      let n3 = e4.split(de);
      return he(n3, +(n3[0] === `` && n3.length > 1), t2);
    }, getConflictingClassGroupIds: (e4, t3) => {
      if (t3) {
        let t4 = r2[e4], i2 = n2[e4];
        return t4 ? i2 ? le(i2, t4) : t4 : i2 || fe;
      }
      return n2[e4] || fe;
    } };
  };
  var he = (e3, t2, n2) => {
    if (e3.length - t2 === 0) return n2.classGroupId;
    let r2 = e3[t2], i2 = n2.nextPart.get(r2);
    if (i2) {
      let n3 = he(e3, t2 + 1, i2);
      if (n3) return n3;
    }
    let a2 = n2.validators;
    if (a2 === null) return;
    let o2 = t2 === 0 ? e3.join(de) : e3.slice(t2).join(de), s2 = a2.length;
    for (let e4 = 0; e4 < s2; e4++) {
      let t3 = a2[e4];
      if (t3.validator(o2)) return t3.classGroupId;
    }
  };
  var ge = (e3) => e3.slice(1, -1).indexOf(`:`) === -1 ? void 0 : (() => {
    let t2 = e3.slice(1, -1), n2 = t2.indexOf(`:`), r2 = t2.slice(0, n2);
    return r2 ? pe + r2 : void 0;
  })();
  var _e = (e3) => {
    let { theme: t2, classGroups: n2 } = e3;
    return ve(n2, t2);
  };
  var ve = (e3, t2) => {
    let n2 = ue();
    for (let r2 in e3) {
      let i2 = e3[r2];
      ye(i2, n2, r2, t2);
    }
    return n2;
  };
  var ye = (e3, t2, n2, r2) => {
    let i2 = e3.length;
    for (let a2 = 0; a2 < i2; a2++) {
      let i3 = e3[a2];
      be(i3, t2, n2, r2);
    }
  };
  var be = (e3, t2, n2, r2) => {
    typeof e3 == `string` ? xe(e3, t2, n2) : typeof e3 == `function` ? Se(e3, t2, n2, r2) : Ce(e3, t2, n2, r2);
  };
  var xe = (e3, t2, n2) => {
    let r2 = e3 === `` ? t2 : D(t2, e3);
    r2.classGroupId = n2;
  };
  var Se = (e3, t2, n2, r2) => {
    O(e3) ? ye(e3(r2), t2, n2, r2) : (t2.validators === null && (t2.validators = []), t2.validators.push(E(n2, e3)));
  };
  var Ce = (e3, t2, n2, r2) => {
    let i2 = Object.entries(e3), a2 = i2.length;
    for (let e4 = 0; e4 < a2; e4++) {
      let [a3, o2] = i2[e4];
      ye(o2, D(t2, a3), n2, r2);
    }
  };
  var D = (e3, t2) => {
    let n2 = e3, r2 = t2.split(de), i2 = r2.length;
    for (let e4 = 0; e4 < i2; e4++) {
      let t3 = r2[e4], i3 = n2.nextPart.get(t3);
      i3 || (i3 = ue(), n2.nextPart.set(t3, i3)), n2 = i3;
    }
    return n2;
  };
  var O = (e3) => `isThemeGetter` in e3 && e3.isThemeGetter === true;
  var we = (e3) => {
    if (e3 < 1) return { get: () => void 0, set: () => {
    } };
    let t2 = 0, n2 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ Object.create(null), i2 = (i3, a2) => {
      n2[i3] = a2, t2++, t2 > e3 && (t2 = 0, r2 = n2, n2 = /* @__PURE__ */ Object.create(null));
    };
    return { get(e4) {
      let t3 = n2[e4];
      if (t3 !== void 0) return t3;
      if ((t3 = r2[e4]) !== void 0) return i2(e4, t3), t3;
    }, set(e4, t3) {
      e4 in n2 ? n2[e4] = t3 : i2(e4, t3);
    } };
  };
  var Te = `!`;
  var Ee = `:`;
  var De = [];
  var Oe = (e3, t2, n2, r2, i2) => ({ modifiers: e3, hasImportantModifier: t2, baseClassName: n2, maybePostfixModifierPosition: r2, isExternal: i2 });
  var k = (e3) => {
    let { prefix: t2, experimentalParseClassName: n2 } = e3, r2 = (e4) => {
      let t3 = [], n3 = 0, r3 = 0, i2 = 0, a2, o2 = e4.length;
      for (let s3 = 0; s3 < o2; s3++) {
        let o3 = e4[s3];
        if (n3 === 0 && r3 === 0) {
          if (o3 === Ee) {
            t3.push(e4.slice(i2, s3)), i2 = s3 + 1;
            continue;
          }
          if (o3 === `/`) {
            a2 = s3;
            continue;
          }
        }
        o3 === `[` ? n3++ : o3 === `]` ? n3-- : o3 === `(` ? r3++ : o3 === `)` && r3--;
      }
      let s2 = t3.length === 0 ? e4 : e4.slice(i2), c2 = s2, l2 = false;
      s2.endsWith(Te) ? (c2 = s2.slice(0, -1), l2 = true) : s2.startsWith(Te) && (c2 = s2.slice(1), l2 = true);
      let u2 = a2 && a2 > i2 ? a2 - i2 : void 0;
      return Oe(t3, l2, c2, u2);
    };
    if (t2) {
      let e4 = t2 + Ee, n3 = r2;
      r2 = (t3) => t3.startsWith(e4) ? n3(t3.slice(e4.length)) : Oe(De, false, t3, void 0, true);
    }
    if (n2) {
      let e4 = r2;
      r2 = (t3) => n2({ className: t3, parseClassName: e4 });
    }
    return r2;
  };
  var ke = (e3) => {
    let t2 = /* @__PURE__ */ new Map();
    return e3.orderSensitiveModifiers.forEach((e4, n2) => {
      t2.set(e4, 1e6 + n2);
    }), (e4) => {
      let n2 = [], r2 = [];
      for (let i2 = 0; i2 < e4.length; i2++) {
        let a2 = e4[i2], o2 = a2[0] === `[`, s2 = t2.has(a2);
        o2 || s2 ? (r2.length > 0 && (r2.sort(), n2.push(...r2), r2 = []), n2.push(a2)) : r2.push(a2);
      }
      return r2.length > 0 && (r2.sort(), n2.push(...r2)), n2;
    };
  };
  var Ae = (e3) => ({ cache: we(e3.cacheSize), parseClassName: k(e3), sortModifiers: ke(e3), postfixLookupClassGroupIds: je(e3), ...me(e3) });
  var je = (e3) => {
    let t2 = /* @__PURE__ */ Object.create(null), n2 = e3.postfixLookupClassGroups;
    if (n2) for (let e4 = 0; e4 < n2.length; e4++) t2[n2[e4]] = true;
    return t2;
  };
  var Me = /\s+/;
  var Ne = (e3, t2) => {
    let { parseClassName: n2, getClassGroupId: r2, getConflictingClassGroupIds: i2, sortModifiers: a2, postfixLookupClassGroupIds: o2 } = t2, s2 = [], c2 = e3.trim().split(Me), l2 = ``;
    for (let e4 = c2.length - 1; e4 >= 0; --e4) {
      let t3 = c2[e4], { isExternal: u2, modifiers: d2, hasImportantModifier: f2, baseClassName: p2, maybePostfixModifierPosition: m2 } = n2(t3);
      if (u2) {
        l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
        continue;
      }
      let h2 = !!m2, g2;
      if (h2) {
        g2 = r2(p2.substring(0, m2));
        let e5 = g2 && o2[g2] ? r2(p2) : void 0;
        e5 && e5 !== g2 && (g2 = e5, h2 = false);
      } else g2 = r2(p2);
      if (!g2) {
        if (!h2 || (g2 = r2(p2), !g2)) {
          l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
          continue;
        }
        h2 = false;
      }
      let _2 = d2.length === 0 ? `` : d2.length === 1 ? d2[0] : a2(d2).join(`:`), v2 = f2 ? _2 + Te : _2, y2 = v2 + g2;
      if (s2.indexOf(y2) > -1) continue;
      s2.push(y2);
      let b2 = i2(g2, h2);
      for (let e5 = 0; e5 < b2.length; ++e5) {
        let t4 = b2[e5];
        s2.push(v2 + t4);
      }
      l2 = t3 + (l2.length > 0 ? ` ` + l2 : l2);
    }
    return l2;
  };
  var Pe = (...e3) => {
    let t2 = 0, n2, r2, i2 = ``;
    for (; t2 < e3.length; ) (n2 = e3[t2++]) && (r2 = Fe(n2)) && (i2 && (i2 += ` `), i2 += r2);
    return i2;
  };
  var Fe = (e3) => {
    if (typeof e3 == `string`) return e3;
    let t2, n2 = ``;
    for (let r2 = 0; r2 < e3.length; r2++) e3[r2] && (t2 = Fe(e3[r2])) && (n2 && (n2 += ` `), n2 += t2);
    return n2;
  };
  var Ie = (e3, ...t2) => {
    let n2, r2, i2, a2, o2 = (o3) => (n2 = Ae(t2.reduce((e4, t3) => t3(e4), e3())), r2 = n2.cache.get, i2 = n2.cache.set, a2 = s2, s2(o3)), s2 = (e4) => {
      let t3 = r2(e4);
      if (t3) return t3;
      let a3 = Ne(e4, n2);
      return i2(e4, a3), a3;
    };
    return a2 = o2, (...e4) => a2(Pe(...e4));
  };
  var Le = [];
  var Re = (e3) => {
    let t2 = (t3) => t3[e3] || Le;
    return t2.isThemeGetter = true, t2.themeKey = e3, t2;
  };
  var ze = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
  var Be = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
  var Ve = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/;
  var He = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
  var Ue = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
  var We = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/;
  var Ge = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
  var Ke = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
  var qe = (e3) => Ve.test(e3);
  var A = (e3) => !!e3 && !Number.isNaN(Number(e3));
  var j = (e3) => !!e3 && Number.isInteger(Number(e3));
  var Je = (e3) => e3.endsWith(`%`) && A(e3.slice(0, -1));
  var Ye = (e3) => He.test(e3);
  var Xe = () => true;
  var Ze = (e3) => Ue.test(e3) && !We.test(e3);
  var Qe = () => false;
  var $e = (e3) => Ge.test(e3);
  var et = (e3) => Ke.test(e3);
  var tt = (e3) => !M(e3) && !N(e3);
  var nt = (e3) => e3.startsWith(`@container`) && (e3[10] === `/` && e3[11] !== void 0 || e3[11] === `s` && e3[16] !== void 0 && e3.startsWith(`-size/`, 10) || e3[11] === `n` && e3[18] !== void 0 && e3.startsWith(`-normal/`, 10));
  var rt = (e3) => vt(e3, St, Qe);
  var M = (e3) => ze.test(e3);
  var it = (e3) => vt(e3, Ct, Ze);
  var at = (e3) => vt(e3, wt, A);
  var ot = (e3) => vt(e3, Et, Xe);
  var st = (e3) => vt(e3, Tt, Qe);
  var ct = (e3) => vt(e3, bt, Qe);
  var lt = (e3) => vt(e3, xt, et);
  var ut = (e3) => vt(e3, Dt, $e);
  var N = (e3) => Be.test(e3);
  var dt = (e3) => yt(e3, Ct);
  var ft = (e3) => yt(e3, Tt);
  var pt = (e3) => yt(e3, bt);
  var mt = (e3) => yt(e3, St);
  var ht = (e3) => yt(e3, xt);
  var gt = (e3) => yt(e3, Dt, true);
  var _t = (e3) => yt(e3, Et, true);
  var vt = (e3, t2, n2) => {
    let r2 = ze.exec(e3);
    return r2 ? r2[1] ? t2(r2[1]) : n2(r2[2]) : false;
  };
  var yt = (e3, t2, n2 = false) => {
    let r2 = Be.exec(e3);
    return r2 ? r2[1] ? t2(r2[1]) : n2 : false;
  };
  var bt = (e3) => e3 === `position` || e3 === `percentage`;
  var xt = (e3) => e3 === `image` || e3 === `url`;
  var St = (e3) => e3 === `length` || e3 === `size` || e3 === `bg-size`;
  var Ct = (e3) => e3 === `length`;
  var wt = (e3) => e3 === `number`;
  var Tt = (e3) => e3 === `family-name`;
  var Et = (e3) => e3 === `number` || e3 === `weight`;
  var Dt = (e3) => e3 === `shadow`;
  var Ot = Ie(() => {
    let e3 = Re(`color`), t2 = Re(`font`), n2 = Re(`text`), r2 = Re(`font-weight`), i2 = Re(`tracking`), a2 = Re(`leading`), o2 = Re(`breakpoint`), s2 = Re(`container`), c2 = Re(`spacing`), l2 = Re(`radius`), u2 = Re(`shadow`), d2 = Re(`inset-shadow`), f2 = Re(`text-shadow`), p2 = Re(`drop-shadow`), m2 = Re(`blur`), h2 = Re(`perspective`), g2 = Re(`aspect`), _2 = Re(`ease`), v2 = Re(`animate`), y2 = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`], b2 = () => [`center`, `top`, `bottom`, `left`, `right`, `top-left`, `left-top`, `top-right`, `right-top`, `bottom-right`, `right-bottom`, `bottom-left`, `left-bottom`], ee2 = () => [...b2(), N, M], x2 = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`], te2 = () => [`auto`, `contain`, `none`], S2 = () => [N, M, c2], C2 = () => [qe, `full`, `auto`, ...S2()], ne2 = () => [j, `none`, `subgrid`, N, M], w2 = () => [`auto`, { span: [`full`, j, N, M] }, j, N, M], T2 = () => [j, `auto`, N, M], re2 = () => [`auto`, `min`, `max`, `fr`, N, M], ie2 = () => [`start`, `end`, `center`, `between`, `around`, `evenly`, `stretch`, `baseline`, `center-safe`, `end-safe`], ae2 = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`], oe2 = () => [`auto`, ...S2()], se2 = () => [qe, `auto`, `full`, `dvw`, `dvh`, `lvw`, `lvh`, `svw`, `svh`, `min`, `max`, `fit`, ...S2()], ce2 = () => [s2, qe, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...S2()], le2 = () => [qe, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...S2()], E2 = () => [e3, N, M], ue2 = () => [...b2(), pt, ct, { position: [N, M] }], de2 = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }], fe2 = () => [`auto`, `cover`, `contain`, mt, rt, { size: [N, M] }], pe2 = () => [Je, dt, it], me2 = () => [``, `none`, `full`, l2, N, M], he2 = () => [``, A, dt, it], ge2 = () => [`solid`, `dashed`, `dotted`, `double`], _e2 = () => [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`], ve2 = () => [A, Je, pt, ct], ye2 = () => [``, `none`, m2, N, M], be2 = () => [`none`, A, N, M], xe2 = () => [`none`, A, N, M], Se2 = () => [A, N, M], Ce2 = () => [qe, `full`, ...S2()];
    return { cacheSize: 500, theme: { animate: [`spin`, `ping`, `pulse`, `bounce`], aspect: [`video`], blur: [Ye], breakpoint: [Ye], color: [Xe], container: [Ye], "drop-shadow": [Ye], ease: [`in`, `out`, `in-out`], font: [tt], "font-weight": [`thin`, `extralight`, `light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`], "inset-shadow": [Ye], leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`], perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`], radius: [Ye], shadow: [Ye], spacing: [`px`, A], text: [Ye], "text-shadow": [Ye], tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`] }, classGroups: { aspect: [{ aspect: [`auto`, `square`, qe, M, N, g2] }], container: [`container`], "container-type": [{ "@container": [``, `normal`, `size`, N, M] }], "container-named": [nt], columns: [{ columns: [A, `auto`, M, N, s2] }], "break-after": [{ "break-after": y2() }], "break-before": [{ "break-before": y2() }], "break-inside": [{ "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] }], "box-decoration": [{ "box-decoration": [`slice`, `clone`] }], box: [{ box: [`border`, `content`] }], display: [`block`, `inline-block`, `inline`, `flex`, `inline-flex`, `table`, `inline-table`, `table-caption`, `table-cell`, `table-column`, `table-column-group`, `table-footer-group`, `table-header-group`, `table-row-group`, `table-row`, `flow-root`, `grid`, `inline-grid`, `contents`, `list-item`, `hidden`], sr: [`sr-only`, `not-sr-only`], float: [{ float: [`right`, `left`, `none`, `start`, `end`] }], clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }], isolation: [`isolate`, `isolation-auto`], "object-fit": [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }], "object-position": [{ object: ee2() }], overflow: [{ overflow: x2() }], "overflow-x": [{ "overflow-x": x2() }], "overflow-y": [{ "overflow-y": x2() }], overscroll: [{ overscroll: te2() }], "overscroll-x": [{ "overscroll-x": te2() }], "overscroll-y": [{ "overscroll-y": te2() }], position: [`static`, `fixed`, `absolute`, `relative`, `sticky`], inset: [{ inset: C2() }], "inset-x": [{ "inset-x": C2() }], "inset-y": [{ "inset-y": C2() }], start: [{ "inset-s": C2(), start: C2() }], end: [{ "inset-e": C2(), end: C2() }], "inset-bs": [{ "inset-bs": C2() }], "inset-be": [{ "inset-be": C2() }], top: [{ top: C2() }], right: [{ right: C2() }], bottom: [{ bottom: C2() }], left: [{ left: C2() }], visibility: [`visible`, `invisible`, `collapse`], z: [{ z: [j, `auto`, N, M] }], basis: [{ basis: [qe, `full`, `auto`, s2, ...S2()] }], "flex-direction": [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }], "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }], flex: [{ flex: [A, qe, `auto`, `initial`, `none`, M] }], grow: [{ grow: [``, A, N, M] }], shrink: [{ shrink: [``, A, N, M] }], order: [{ order: [j, `first`, `last`, `none`, N, M] }], "grid-cols": [{ "grid-cols": ne2() }], "col-start-end": [{ col: w2() }], "col-start": [{ "col-start": T2() }], "col-end": [{ "col-end": T2() }], "grid-rows": [{ "grid-rows": ne2() }], "row-start-end": [{ row: w2() }], "row-start": [{ "row-start": T2() }], "row-end": [{ "row-end": T2() }], "grid-flow": [{ "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] }], "auto-cols": [{ "auto-cols": re2() }], "auto-rows": [{ "auto-rows": re2() }], gap: [{ gap: S2() }], "gap-x": [{ "gap-x": S2() }], "gap-y": [{ "gap-y": S2() }], "justify-content": [{ justify: [...ie2(), `normal`] }], "justify-items": [{ "justify-items": [...ae2(), `normal`] }], "justify-self": [{ "justify-self": [`auto`, ...ae2()] }], "align-content": [{ content: [`normal`, ...ie2()] }], "align-items": [{ items: [...ae2(), { baseline: [``, `last`] }] }], "align-self": [{ self: [`auto`, ...ae2(), { baseline: [``, `last`] }] }], "place-content": [{ "place-content": ie2() }], "place-items": [{ "place-items": [...ae2(), `baseline`] }], "place-self": [{ "place-self": [`auto`, ...ae2()] }], p: [{ p: S2() }], px: [{ px: S2() }], py: [{ py: S2() }], ps: [{ ps: S2() }], pe: [{ pe: S2() }], pbs: [{ pbs: S2() }], pbe: [{ pbe: S2() }], pt: [{ pt: S2() }], pr: [{ pr: S2() }], pb: [{ pb: S2() }], pl: [{ pl: S2() }], m: [{ m: oe2() }], mx: [{ mx: oe2() }], my: [{ my: oe2() }], ms: [{ ms: oe2() }], me: [{ me: oe2() }], mbs: [{ mbs: oe2() }], mbe: [{ mbe: oe2() }], mt: [{ mt: oe2() }], mr: [{ mr: oe2() }], mb: [{ mb: oe2() }], ml: [{ ml: oe2() }], "space-x": [{ "space-x": S2() }], "space-x-reverse": [`space-x-reverse`], "space-y": [{ "space-y": S2() }], "space-y-reverse": [`space-y-reverse`], size: [{ size: se2() }], "inline-size": [{ inline: [`auto`, ...ce2()] }], "min-inline-size": [{ "min-inline": [`auto`, ...ce2()] }], "max-inline-size": [{ "max-inline": [`none`, ...ce2()] }], "block-size": [{ block: [`auto`, ...le2()] }], "min-block-size": [{ "min-block": [`auto`, ...le2()] }], "max-block-size": [{ "max-block": [`none`, ...le2()] }], w: [{ w: [s2, `screen`, ...se2()] }], "min-w": [{ "min-w": [s2, `screen`, `none`, ...se2()] }], "max-w": [{ "max-w": [s2, `screen`, `none`, `prose`, { screen: [o2] }, ...se2()] }], h: [{ h: [`screen`, `lh`, ...se2()] }], "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...se2()] }], "max-h": [{ "max-h": [`screen`, `lh`, `none`, ...se2()] }], "font-size": [{ text: [`base`, n2, dt, it] }], "font-smoothing": [`antialiased`, `subpixel-antialiased`], "font-style": [`italic`, `not-italic`], "font-weight": [{ font: [r2, _t, ot] }], "font-stretch": [{ "font-stretch": [`ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal`, `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`, Je, M] }], "font-family": [{ font: [ft, st, t2] }], "font-features": [{ "font-features": [M] }], "fvn-normal": [`normal-nums`], "fvn-ordinal": [`ordinal`], "fvn-slashed-zero": [`slashed-zero`], "fvn-figure": [`lining-nums`, `oldstyle-nums`], "fvn-spacing": [`proportional-nums`, `tabular-nums`], "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`], tracking: [{ tracking: [i2, N, M] }], "line-clamp": [{ "line-clamp": [A, `none`, N, at] }], leading: [{ leading: [`none`, a2, ...S2()] }], "list-image": [{ "list-image": [`none`, N, M] }], "list-style-position": [{ list: [`inside`, `outside`] }], "list-style-type": [{ list: [`disc`, `decimal`, `none`, N, M] }], "text-alignment": [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }], "placeholder-color": [{ placeholder: E2() }], "text-color": [{ text: E2() }], "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`], "text-decoration-style": [{ decoration: [...ge2(), `wavy`] }], "text-decoration-thickness": [{ decoration: [A, `from-font`, `auto`, N, it] }], "text-decoration-color": [{ decoration: E2() }], "underline-offset": [{ "underline-offset": [A, `auto`, N, M] }], "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`], "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`], "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }], indent: [{ indent: S2() }], "tab-size": [{ tab: [j, N, M] }], "vertical-align": [{ align: [`baseline`, `top`, `middle`, `bottom`, `text-top`, `text-bottom`, `sub`, `super`, N, M] }], whitespace: [{ whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] }], break: [{ break: [`normal`, `words`, `all`, `keep`] }], wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }], hyphens: [{ hyphens: [`none`, `manual`, `auto`] }], content: [{ content: [`none`, N, M] }], "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }], "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }], "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }], "bg-position": [{ bg: ue2() }], "bg-repeat": [{ bg: de2() }], "bg-size": [{ bg: fe2() }], "bg-image": [{ bg: [`none`, { linear: [{ to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, j, N, M], radial: [``, N, M], conic: [``, j, N, M] }, ht, lt] }], "bg-color": [{ bg: E2() }], "gradient-from-pos": [{ from: pe2() }], "gradient-via-pos": [{ via: pe2() }], "gradient-to-pos": [{ to: pe2() }], "gradient-from": [{ from: E2() }], "gradient-via": [{ via: E2() }], "gradient-to": [{ to: E2() }], rounded: [{ rounded: me2() }], "rounded-s": [{ "rounded-s": me2() }], "rounded-e": [{ "rounded-e": me2() }], "rounded-t": [{ "rounded-t": me2() }], "rounded-r": [{ "rounded-r": me2() }], "rounded-b": [{ "rounded-b": me2() }], "rounded-l": [{ "rounded-l": me2() }], "rounded-ss": [{ "rounded-ss": me2() }], "rounded-se": [{ "rounded-se": me2() }], "rounded-ee": [{ "rounded-ee": me2() }], "rounded-es": [{ "rounded-es": me2() }], "rounded-tl": [{ "rounded-tl": me2() }], "rounded-tr": [{ "rounded-tr": me2() }], "rounded-br": [{ "rounded-br": me2() }], "rounded-bl": [{ "rounded-bl": me2() }], "border-w": [{ border: he2() }], "border-w-x": [{ "border-x": he2() }], "border-w-y": [{ "border-y": he2() }], "border-w-s": [{ "border-s": he2() }], "border-w-e": [{ "border-e": he2() }], "border-w-bs": [{ "border-bs": he2() }], "border-w-be": [{ "border-be": he2() }], "border-w-t": [{ "border-t": he2() }], "border-w-r": [{ "border-r": he2() }], "border-w-b": [{ "border-b": he2() }], "border-w-l": [{ "border-l": he2() }], "divide-x": [{ "divide-x": he2() }], "divide-x-reverse": [`divide-x-reverse`], "divide-y": [{ "divide-y": he2() }], "divide-y-reverse": [`divide-y-reverse`], "border-style": [{ border: [...ge2(), `hidden`, `none`] }], "divide-style": [{ divide: [...ge2(), `hidden`, `none`] }], "border-color": [{ border: E2() }], "border-color-x": [{ "border-x": E2() }], "border-color-y": [{ "border-y": E2() }], "border-color-s": [{ "border-s": E2() }], "border-color-e": [{ "border-e": E2() }], "border-color-bs": [{ "border-bs": E2() }], "border-color-be": [{ "border-be": E2() }], "border-color-t": [{ "border-t": E2() }], "border-color-r": [{ "border-r": E2() }], "border-color-b": [{ "border-b": E2() }], "border-color-l": [{ "border-l": E2() }], "divide-color": [{ divide: E2() }], "outline-style": [{ outline: [...ge2(), `none`, `hidden`] }], "outline-offset": [{ "outline-offset": [A, N, M] }], "outline-w": [{ outline: [``, A, dt, it] }], "outline-color": [{ outline: E2() }], shadow: [{ shadow: [``, `inner`, `none`, u2, gt, ut] }], "shadow-color": [{ shadow: E2() }], "inset-shadow": [{ "inset-shadow": [`none`, d2, gt, ut] }], "inset-shadow-color": [{ "inset-shadow": E2() }], "ring-w": [{ ring: he2() }], "ring-w-inset": [`ring-inset`], "ring-color": [{ ring: E2() }], "ring-offset-w": [{ "ring-offset": [A, it] }], "ring-offset-color": [{ "ring-offset": E2() }], "inset-ring-w": [{ "inset-ring": he2() }], "inset-ring-color": [{ "inset-ring": E2() }], "text-shadow": [{ "text-shadow": [`none`, f2, gt, ut] }], "text-shadow-color": [{ "text-shadow": E2() }], opacity: [{ opacity: [A, N, M] }], "mix-blend": [{ "mix-blend": [..._e2(), `plus-darker`, `plus-lighter`] }], "bg-blend": [{ "bg-blend": _e2() }], "mask-clip": [{ "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] }, `mask-no-clip`], "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }], "mask-image-linear-pos": [{ "mask-linear": [A] }], "mask-image-linear-from-pos": [{ "mask-linear-from": ve2() }], "mask-image-linear-to-pos": [{ "mask-linear-to": ve2() }], "mask-image-linear-from-color": [{ "mask-linear-from": E2() }], "mask-image-linear-to-color": [{ "mask-linear-to": E2() }], "mask-image-t-from-pos": [{ "mask-t-from": ve2() }], "mask-image-t-to-pos": [{ "mask-t-to": ve2() }], "mask-image-t-from-color": [{ "mask-t-from": E2() }], "mask-image-t-to-color": [{ "mask-t-to": E2() }], "mask-image-r-from-pos": [{ "mask-r-from": ve2() }], "mask-image-r-to-pos": [{ "mask-r-to": ve2() }], "mask-image-r-from-color": [{ "mask-r-from": E2() }], "mask-image-r-to-color": [{ "mask-r-to": E2() }], "mask-image-b-from-pos": [{ "mask-b-from": ve2() }], "mask-image-b-to-pos": [{ "mask-b-to": ve2() }], "mask-image-b-from-color": [{ "mask-b-from": E2() }], "mask-image-b-to-color": [{ "mask-b-to": E2() }], "mask-image-l-from-pos": [{ "mask-l-from": ve2() }], "mask-image-l-to-pos": [{ "mask-l-to": ve2() }], "mask-image-l-from-color": [{ "mask-l-from": E2() }], "mask-image-l-to-color": [{ "mask-l-to": E2() }], "mask-image-x-from-pos": [{ "mask-x-from": ve2() }], "mask-image-x-to-pos": [{ "mask-x-to": ve2() }], "mask-image-x-from-color": [{ "mask-x-from": E2() }], "mask-image-x-to-color": [{ "mask-x-to": E2() }], "mask-image-y-from-pos": [{ "mask-y-from": ve2() }], "mask-image-y-to-pos": [{ "mask-y-to": ve2() }], "mask-image-y-from-color": [{ "mask-y-from": E2() }], "mask-image-y-to-color": [{ "mask-y-to": E2() }], "mask-image-radial": [{ "mask-radial": [N, M] }], "mask-image-radial-from-pos": [{ "mask-radial-from": ve2() }], "mask-image-radial-to-pos": [{ "mask-radial-to": ve2() }], "mask-image-radial-from-color": [{ "mask-radial-from": E2() }], "mask-image-radial-to-color": [{ "mask-radial-to": E2() }], "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }], "mask-image-radial-size": [{ "mask-radial": [{ closest: [`side`, `corner`], farthest: [`side`, `corner`] }] }], "mask-image-radial-pos": [{ "mask-radial-at": b2() }], "mask-image-conic-pos": [{ "mask-conic": [A] }], "mask-image-conic-from-pos": [{ "mask-conic-from": ve2() }], "mask-image-conic-to-pos": [{ "mask-conic-to": ve2() }], "mask-image-conic-from-color": [{ "mask-conic-from": E2() }], "mask-image-conic-to-color": [{ "mask-conic-to": E2() }], "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }], "mask-origin": [{ "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] }], "mask-position": [{ mask: ue2() }], "mask-repeat": [{ mask: de2() }], "mask-size": [{ mask: fe2() }], "mask-type": [{ "mask-type": [`alpha`, `luminance`] }], "mask-image": [{ mask: [`none`, N, M] }], filter: [{ filter: [``, `none`, N, M] }], blur: [{ blur: ye2() }], brightness: [{ brightness: [A, N, M] }], contrast: [{ contrast: [A, N, M] }], "drop-shadow": [{ "drop-shadow": [``, `none`, p2, gt, ut] }], "drop-shadow-color": [{ "drop-shadow": E2() }], grayscale: [{ grayscale: [``, A, N, M] }], "hue-rotate": [{ "hue-rotate": [A, N, M] }], invert: [{ invert: [``, A, N, M] }], saturate: [{ saturate: [A, N, M] }], sepia: [{ sepia: [``, A, N, M] }], "backdrop-filter": [{ "backdrop-filter": [``, `none`, N, M] }], "backdrop-blur": [{ "backdrop-blur": ye2() }], "backdrop-brightness": [{ "backdrop-brightness": [A, N, M] }], "backdrop-contrast": [{ "backdrop-contrast": [A, N, M] }], "backdrop-grayscale": [{ "backdrop-grayscale": [``, A, N, M] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [A, N, M] }], "backdrop-invert": [{ "backdrop-invert": [``, A, N, M] }], "backdrop-opacity": [{ "backdrop-opacity": [A, N, M] }], "backdrop-saturate": [{ "backdrop-saturate": [A, N, M] }], "backdrop-sepia": [{ "backdrop-sepia": [``, A, N, M] }], "border-collapse": [{ border: [`collapse`, `separate`] }], "border-spacing": [{ "border-spacing": S2() }], "border-spacing-x": [{ "border-spacing-x": S2() }], "border-spacing-y": [{ "border-spacing-y": S2() }], "table-layout": [{ table: [`auto`, `fixed`] }], caption: [{ caption: [`top`, `bottom`] }], transition: [{ transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, N, M] }], "transition-behavior": [{ transition: [`normal`, `discrete`] }], duration: [{ duration: [A, `initial`, N, M] }], ease: [{ ease: [`linear`, `initial`, _2, N, M] }], delay: [{ delay: [A, N, M] }], animate: [{ animate: [`none`, v2, N, M] }], backface: [{ backface: [`hidden`, `visible`] }], perspective: [{ perspective: [h2, N, M] }], "perspective-origin": [{ "perspective-origin": ee2() }], rotate: [{ rotate: be2() }], "rotate-x": [{ "rotate-x": be2() }], "rotate-y": [{ "rotate-y": be2() }], "rotate-z": [{ "rotate-z": be2() }], scale: [{ scale: xe2() }], "scale-x": [{ "scale-x": xe2() }], "scale-y": [{ "scale-y": xe2() }], "scale-z": [{ "scale-z": xe2() }], "scale-3d": [`scale-3d`], skew: [{ skew: Se2() }], "skew-x": [{ "skew-x": Se2() }], "skew-y": [{ "skew-y": Se2() }], transform: [{ transform: [N, M, ``, `none`, `gpu`, `cpu`] }], "transform-origin": [{ origin: ee2() }], "transform-style": [{ transform: [`3d`, `flat`] }], translate: [{ translate: Ce2() }], "translate-x": [{ "translate-x": Ce2() }], "translate-y": [{ "translate-y": Ce2() }], "translate-z": [{ "translate-z": Ce2() }], "translate-none": [`translate-none`], zoom: [{ zoom: [j, N, M] }], accent: [{ accent: E2() }], appearance: [{ appearance: [`none`, `auto`] }], "caret-color": [{ caret: E2() }], "color-scheme": [{ scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`] }], cursor: [{ cursor: [`auto`, `default`, `pointer`, `wait`, `text`, `move`, `help`, `not-allowed`, `none`, `context-menu`, `progress`, `cell`, `crosshair`, `vertical-text`, `alias`, `copy`, `no-drop`, `grab`, `grabbing`, `all-scroll`, `col-resize`, `row-resize`, `n-resize`, `e-resize`, `s-resize`, `w-resize`, `ne-resize`, `nw-resize`, `se-resize`, `sw-resize`, `ew-resize`, `ns-resize`, `nesw-resize`, `nwse-resize`, `zoom-in`, `zoom-out`, N, M] }], "field-sizing": [{ "field-sizing": [`fixed`, `content`] }], "pointer-events": [{ "pointer-events": [`auto`, `none`] }], resize: [{ resize: [`none`, ``, `y`, `x`] }], "scroll-behavior": [{ scroll: [`auto`, `smooth`] }], "scrollbar-thumb-color": [{ "scrollbar-thumb": E2() }], "scrollbar-track-color": [{ "scrollbar-track": E2() }], "scrollbar-gutter": [{ "scrollbar-gutter": [`auto`, `stable`, `both`] }], "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }], "scroll-m": [{ "scroll-m": S2() }], "scroll-mx": [{ "scroll-mx": S2() }], "scroll-my": [{ "scroll-my": S2() }], "scroll-ms": [{ "scroll-ms": S2() }], "scroll-me": [{ "scroll-me": S2() }], "scroll-mbs": [{ "scroll-mbs": S2() }], "scroll-mbe": [{ "scroll-mbe": S2() }], "scroll-mt": [{ "scroll-mt": S2() }], "scroll-mr": [{ "scroll-mr": S2() }], "scroll-mb": [{ "scroll-mb": S2() }], "scroll-ml": [{ "scroll-ml": S2() }], "scroll-p": [{ "scroll-p": S2() }], "scroll-px": [{ "scroll-px": S2() }], "scroll-py": [{ "scroll-py": S2() }], "scroll-ps": [{ "scroll-ps": S2() }], "scroll-pe": [{ "scroll-pe": S2() }], "scroll-pbs": [{ "scroll-pbs": S2() }], "scroll-pbe": [{ "scroll-pbe": S2() }], "scroll-pt": [{ "scroll-pt": S2() }], "scroll-pr": [{ "scroll-pr": S2() }], "scroll-pb": [{ "scroll-pb": S2() }], "scroll-pl": [{ "scroll-pl": S2() }], "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }], "snap-stop": [{ snap: [`normal`, `always`] }], "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }], "snap-strictness": [{ snap: [`mandatory`, `proximity`] }], touch: [{ touch: [`auto`, `none`, `manipulation`] }], "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }], "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }], "touch-pz": [`touch-pinch-zoom`], select: [{ select: [`none`, `text`, `all`, `auto`] }], "will-change": [{ "will-change": [`auto`, `scroll`, `contents`, `transform`, N, M] }], fill: [{ fill: [`none`, ...E2()] }], "stroke-w": [{ stroke: [A, dt, it, at] }], stroke: [{ stroke: [`none`, ...E2()] }], "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }] }, conflictingClassGroups: { "container-named": [`container-type`], overflow: [`overflow-x`, `overflow-y`], overscroll: [`overscroll-x`, `overscroll-y`], inset: [`inset-x`, `inset-y`, `inset-bs`, `inset-be`, `start`, `end`, `top`, `right`, `bottom`, `left`], "inset-x": [`start`, `end`, `right`, `left`], "inset-y": [`inset-bs`, `inset-be`, `top`, `bottom`], flex: [`basis`, `grow`, `shrink`], gap: [`gap-x`, `gap-y`], p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`], px: [`ps`, `pe`, `pr`, `pl`], py: [`pbs`, `pbe`, `pt`, `pb`], m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`], mx: [`ms`, `me`, `mr`, `ml`], my: [`mbs`, `mbe`, `mt`, `mb`], size: [`w`, `h`], "font-size": [`leading`], "fvn-normal": [`fvn-ordinal`, `fvn-slashed-zero`, `fvn-figure`, `fvn-spacing`, `fvn-fraction`], "fvn-ordinal": [`fvn-normal`], "fvn-slashed-zero": [`fvn-normal`], "fvn-figure": [`fvn-normal`], "fvn-spacing": [`fvn-normal`], "fvn-fraction": [`fvn-normal`], "line-clamp": [`display`, `overflow`], rounded: [`rounded-s`, `rounded-e`, `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l`, `rounded-ss`, `rounded-se`, `rounded-ee`, `rounded-es`, `rounded-tl`, `rounded-tr`, `rounded-br`, `rounded-bl`], "rounded-s": [`rounded-ss`, `rounded-es`], "rounded-e": [`rounded-se`, `rounded-ee`], "rounded-t": [`rounded-tl`, `rounded-tr`], "rounded-r": [`rounded-tr`, `rounded-br`], "rounded-b": [`rounded-br`, `rounded-bl`], "rounded-l": [`rounded-tl`, `rounded-bl`], "border-spacing": [`border-spacing-x`, `border-spacing-y`], "border-w": [`border-w-x`, `border-w-y`, `border-w-s`, `border-w-e`, `border-w-bs`, `border-w-be`, `border-w-t`, `border-w-r`, `border-w-b`, `border-w-l`], "border-w-x": [`border-w-s`, `border-w-e`, `border-w-r`, `border-w-l`], "border-w-y": [`border-w-bs`, `border-w-be`, `border-w-t`, `border-w-b`], "border-color": [`border-color-x`, `border-color-y`, `border-color-s`, `border-color-e`, `border-color-bs`, `border-color-be`, `border-color-t`, `border-color-r`, `border-color-b`, `border-color-l`], "border-color-x": [`border-color-s`, `border-color-e`, `border-color-r`, `border-color-l`], "border-color-y": [`border-color-bs`, `border-color-be`, `border-color-t`, `border-color-b`], translate: [`translate-x`, `translate-y`, `translate-none`], "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`], "scroll-m": [`scroll-mx`, `scroll-my`, `scroll-ms`, `scroll-me`, `scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mr`, `scroll-mb`, `scroll-ml`], "scroll-mx": [`scroll-ms`, `scroll-me`, `scroll-mr`, `scroll-ml`], "scroll-my": [`scroll-mbs`, `scroll-mbe`, `scroll-mt`, `scroll-mb`], "scroll-p": [`scroll-px`, `scroll-py`, `scroll-ps`, `scroll-pe`, `scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pr`, `scroll-pb`, `scroll-pl`], "scroll-px": [`scroll-ps`, `scroll-pe`, `scroll-pr`, `scroll-pl`], "scroll-py": [`scroll-pbs`, `scroll-pbe`, `scroll-pt`, `scroll-pb`], touch: [`touch-x`, `touch-y`, `touch-pz`], "touch-x": [`touch`], "touch-y": [`touch`], "touch-pz": [`touch`] }, conflictingClassGroupModifiers: { "font-size": [`leading`] }, postfixLookupClassGroups: [`container-type`], orderSensitiveModifiers: [`*`, `**`, `after`, `backdrop`, `before`, `details-content`, `file`, `first-letter`, `first-line`, `marker`, `placeholder`, `selection`] };
  });
  function kt(...e3) {
    return Ot(ae(e3));
  }
  var At = ce(`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium tracking-wide`, { variants: { variant: { default: `border-lime/30 bg-lime/10 text-lime`, outline: `border-line text-muted`, coral: `border-coral/40 bg-coral/10 text-coral`, gold: `border-gold/40 bg-gold/10 text-gold` } }, defaultVariants: { variant: `default` } });
  function jt({ className: e3, variant: t2, ...n2 }) {
    return (0, T.jsx)(`span`, { className: kt(At({ variant: t2 }), e3), ...n2 });
  }
  var Mt = ce(`inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime`, { variants: { variant: { default: `bg-lime text-arena hover:bg-lime/90`, outline: `border border-line bg-transparent text-ink hover:bg-white/5`, ghost: `text-muted hover:bg-white/5 hover:text-ink` }, size: { default: `h-9 px-4`, sm: `h-8 px-3 text-xs`, icon: `h-9 w-9` } }, defaultVariants: { variant: `default`, size: `default` } });
  function Nt({ className: e3, variant: t2, size: n2, ...r2 }) {
    return (0, T.jsx)(`button`, { className: kt(Mt({ variant: t2, size: n2 }), e3), ...r2 });
  }
  function P({ className: e3, ...t2 }) {
    return (0, T.jsx)(`div`, { className: kt(`rounded-2xl border border-line bg-panel/90`, e3), ...t2 });
  }
  function F({ className: e3, ...t2 }) {
    return (0, T.jsx)(`div`, { className: kt(`px-5 py-4`, e3), ...t2 });
  }
  function Pt({ data: e3, lineageId: t2, onOpenTrace: n2 }) {
    let r2 = e3.lineages.find((e4) => e4.id === t2), i2 = e3.genomes.filter((e4) => e4.lineage_id === t2), a2 = i2.find((e4) => e4.id === r2?.genome_id) ?? i2[i2.length - 1], o2 = e3.events.filter((e4) => e4.lineage_id === t2), s2 = [...e3.traces.filter((e4) => e4.lineage_id === t2)].sort((e4, t3) => t3.pass_rate - e4.pass_rate || t3.steps.length - e4.steps.length)[0];
    if (!r2 || !a2) return (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsxs)(`h2`, { className: `font-serif text-3xl`, children: [`No agent named `, t2] }), (0, T.jsx)(`p`, { className: `mt-2 text-sm text-muted`, children: `The season file does not have this lineage.` }), (0, T.jsx)(`a`, { className: `mt-4 inline-block text-lime`, href: `#/`, children: `Back to the season` })] }) });
    let c2 = `${window.location.origin}${window.location.pathname}#/agent/${r2.id}`;
    return (0, T.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [(0, T.jsxs)(`div`, { className: `flex flex-wrap items-end justify-between gap-3`, children: [(0, T.jsxs)(`div`, { children: [(0, T.jsx)(`p`, { className: `font-mono text-xs tracking-[0.18em] text-lime`, children: `AGENT` }), (0, T.jsx)(`h2`, { className: `font-serif text-4xl`, style: { color: b(r2.id) }, children: r2.name }), (0, T.jsxs)(`p`, { className: `mt-2 max-w-xl text-sm text-muted`, children: [`Skill `, r2.rating.toFixed(1), ` \xB1 `, (r2.sigma ?? 0).toFixed(1), ` \xB7 cost `, (r2.cost_rating ?? 0).toFixed(1), ` \xB1`, ` `, (r2.cost_sigma ?? 0).toFixed(1), ` \xB7 hidden `, x(r2.mean_pass), r2.model ? ` \xB7 ${r2.model}` : ``] })] }), (0, T.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [s2 ? (0, T.jsx)(Nt, { onClick: () => n2(s2.id), children: `Replay a trace` }) : null, (0, T.jsx)(Nt, { variant: `outline`, onClick: () => {
      navigator.clipboard?.writeText(c2);
    }, children: `Copy link` })] })] }), (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `Lineage` }), (0, T.jsx)(re, { data: e3, lineageId: r2.id })] }) }), (0, T.jsxs)(`div`, { className: `grid gap-4 lg:grid-cols-2`, children: [(0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsxs)(`div`, { className: `flex flex-wrap gap-2`, children: [(0, T.jsx)(jt, { children: ee(a2.strategy) }), (a2.tools ?? []).map((e4) => (0, T.jsx)(jt, { variant: `outline`, children: e4 }, e4)), (0, T.jsxs)(jt, { variant: `outline`, children: [`temp `, a2.temperature.toFixed(2)] }), (0, T.jsxs)(jt, { variant: `outline`, children: [`retries `, a2.retry_budget] })] }), (0, T.jsx)(`h3`, { className: `mt-4 font-serif text-2xl`, children: `Current prompt` }), [`identity`, `method`, `checklist`, `output`].map((e4) => (0, T.jsxs)(`div`, { className: `mt-3`, children: [(0, T.jsx)(`div`, { className: `font-mono text-[11px] tracking-wide text-muted`, children: e4.toUpperCase() }), (0, T.jsx)(`p`, { className: `mt-1 whitespace-pre-wrap text-sm text-ink`, children: a2.sections?.[e4] || `\u2014` })] }, e4))] }) }), (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `Rewrites` }), o2.length === 0 ? (0, T.jsx)(`p`, { className: `mt-3 text-sm text-muted`, children: `This genome was never rewritten.` }) : null, (0, T.jsx)(`ul`, { className: `mt-3 flex flex-col gap-3`, children: o2.map((e4) => (0, T.jsxs)(`li`, { className: `border-t border-line pt-3 first:border-0 first:pt-0`, children: [(0, T.jsxs)(`div`, { className: `font-mono text-xs text-muted`, children: [e4.from_genome, ` \u2192 `, e4.to_genome] }), (0, T.jsx)(`p`, { className: `mt-1 text-sm leading-relaxed text-muted`, children: e4.notes })] }, e4.to_genome)) })] }) })] }), (0, T.jsx)(`p`, { className: `font-mono text-xs text-muted`, children: c2 })] });
  }
  var Ft = `./`;
  function It(e3) {
    return e3.lineages.map((t2) => ({ id: t2.id, name: t2.name, model: t2.model || e3.meta.model, points: e3.rounds.map((e4) => {
      let n2 = e4.results.filter((e5) => e5.lineage_id === t2.id), r2 = n2.length ? n2.reduce((e5, t3) => e5 + t3.pass_rate, 0) / n2.length : 0;
      return { round: e4.index, pass: r2 };
    }) }));
  }
  function Lt(e3, t2, n2) {
    let r2 = e3.rounds.find((e4) => e4.index === n2);
    if (!r2) return null;
    let i2 = r2.results.filter((e4) => e4.lineage_id === t2);
    return i2.length ? i2.reduce((e4, t3) => e4 + t3.pass_rate, 0) / i2.length : null;
  }
  function Rt(e3) {
    return e3.events.filter((e4) => e4.kind.startsWith(`mutation`)).map((t2) => ({ event: t2, before: Lt(e3, t2.lineage_id, t2.round_index), after: Lt(e3, t2.lineage_id, t2.round_index + 1) }));
  }
  function zt(e3) {
    return e3 <= 0 ? 0.05 : Math.max(0.05, 0.5 / e3);
  }
  function Bt(e3) {
    let t2 = /(\d+(?:\.\d+)?)b/i.exec(e3);
    return t2 ? `${t2[1]}B` : e3;
  }
  function Vt(e3, t2) {
    return e3.meta.name === t2.meta.name && e3.meta.created_at === t2.meta.created_at;
  }
  function Ht({ data: e3 }) {
    let [t2, n2] = (0, _.useState)(null), [r2, i2] = (0, _.useState)(null);
    (0, _.useEffect)(() => {
      let e4 = false;
      return fetch(`${Ft}data/cross-model.json`).then((e5) => {
        if (!e5.ok) throw Error(`HTTP ${e5.status}`);
        return e5.json();
      }).then((t3) => {
        e4 || n2(t3);
      }).catch((t3) => {
        e4 || i2(t3 instanceof Error ? t3.message : `Missing season file`);
      }), () => {
        e4 = true;
      };
    }, []);
    let a2 = !t2 || !Vt(e3, t2);
    return (0, T.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [(0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`p`, { className: `font-mono text-[11px] tracking-[0.22em] text-lime`, children: `FINDINGS` }), (0, T.jsx)(`h2`, { className: `mt-2 font-serif text-3xl tracking-tight`, children: `What the measured seasons did` }), (0, T.jsx)(`p`, { className: `mt-3 max-w-3xl text-sm leading-relaxed text-muted`, children: `Pass rate is the mean of per-task hidden scores. The noise margin is half a task of that mean, and never under five points. On a six-task round that is eight points. A coach edit that drops a player by more than the margin is reverted to the parent genome, which then plays the next round. The child stays in the history.` })] }) }), t2 ? (0, T.jsx)(Ut, { data: t2 }) : null, r2 ? (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `The cross-model season is not in this build` }), (0, T.jsxs)(`p`, { className: `mt-2 text-sm text-muted`, children: [r2, `. Export it to data/cross-model.json.`] })] }) }) : null, !t2 && !r2 ? (0, T.jsx)(`p`, { className: `text-sm text-muted`, children: `Loading the recorded cross-model season\u2026` }) : null, a2 ? (0, T.jsx)(Gt, { data: e3 }) : null] });
  }
  function Ut({ data: e3 }) {
    let t2 = (0, _.useMemo)(() => It(e3), [e3]), n2 = (0, _.useMemo)(() => Rt(e3), [e3]), r2 = zt(e3.meta.task_count), i2 = n2.filter((e4) => e4.before != null && e4.after != null && e4.before - e4.after > r2), a2 = t2.filter((e4) => {
      let t3 = e4.points[0]?.pass ?? 0, n3 = e4.points[e4.points.length - 1]?.pass ?? 0;
      return Math.abs(t3 - n3) <= r2 && t3 >= 0.99;
    }), o2 = i2.length ? `A stronger coach lowered the smaller models` : `The coach edits stayed inside the noise`;
    return (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsxs)(`p`, { className: `font-mono text-[11px] tracking-[0.18em] text-muted`, children: [`RECORDED \xB7 `, e3.meta.name.toUpperCase()] }), (0, T.jsx)(`h3`, { className: `mt-2 font-serif text-3xl tracking-tight`, children: o2 }), (0, T.jsx)(`p`, { className: `mt-3 max-w-3xl text-sm leading-relaxed text-muted`, children: Wt(t2, i2, a2, r2, e3.meta.name, e3.events.some((e4) => e4.kind === `rollback`)) }), (0, T.jsx)(qt, { series: t2 }), (0, T.jsx)(Yt, { edits: n2, margin: r2, rollbacks: e3.events.filter((e4) => e4.kind === `rollback`) }), (0, T.jsx)(I, { events: e3.events })] }) });
  }
  function Wt(e3, t2, n2, r2, i2, a2) {
    let o2 = t2.map((t3) => {
      let n3 = e3.find((e4) => e4.id === t3.event.lineage_id), r3 = n3 ? Bt(n3.model) : `unknown`;
      return `${t3.event.name} (${r3}) fell from ${x(t3.before ?? 0)} to ${x(t3.after ?? 0)}`;
    }).join(`. `), s2 = n2.length ? `${n2.map((e4) => `${e4.name} (${Bt(e4.model)})`).join(` and `)} stayed at ${x(n2[0].points[0]?.pass ?? 1)}.` : ``, c2 = a2 ? `The rollback rule fired in this season.` : `Those drops clear the ${x(r2)} noise margin. This season was recorded before the rollback rule, so the worse genomes stayed in.`;
    return t2.length ? `${o2}. ${s2} ${c2}`.replace(/\s+/g, ` `) : `No coach edit in ${i2} moved hidden pass rate by more than ${x(r2)}.`;
  }
  function Gt({ data: e3 }) {
    let t2 = (0, _.useMemo)(() => It(e3), [e3]), n2 = (0, _.useMemo)(() => Rt(e3), [e3]), r2 = e3.events.filter((e4) => e4.kind === `rollback`), i2 = zt(e3.meta.task_count), a2 = r2.length ? `Rollback reverted ${r2.length} edit${r2.length === 1 ? `` : `s`} that lost more than noise` : n2.length ? `Coach edits in the season you are viewing` : `This season has no coach edits yet`;
    return (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsxs)(`p`, { className: `font-mono text-[11px] tracking-[0.18em] text-muted`, children: [`VIEWING \xB7 `, e3.meta.name.toUpperCase(), ` \xB7 `, e3.meta.provider] }), (0, T.jsx)(`h3`, { className: `mt-2 font-serif text-3xl tracking-tight`, children: a2 }), (0, T.jsx)(`p`, { className: `mt-3 max-w-3xl text-sm leading-relaxed text-muted`, children: Kt(e3, n2, r2, i2) }), (0, T.jsx)(Jt, { series: t2, events: e3.events }), (0, T.jsx)(Yt, { edits: n2, margin: i2, rollbacks: r2 }), (0, T.jsx)(I, { events: e3.events })] }) });
  }
  function Kt(e3, t2, n2, r2) {
    if (!t2.length) return `${e3.meta.name} finished ${e3.rounds.length} round${e3.rounds.length === 1 ? `` : `s`} without a mutation, so there is nothing for the rollback rule to undo.`;
    if (!n2.length) {
      let e4 = t2.filter((e5) => e5.before != null && e5.after != null).sort((e5, t3) => (e5.after ?? 0) - (e5.before ?? 0) - ((t3.after ?? 0) - (t3.before ?? 0)))[0];
      return e4 && e4.before != null && e4.after != null && e4.before - e4.after > r2 ? `${e4.event.name} dropped from ${x(e4.before)} to ${x(e4.after)} after ${e4.event.from_genome} \u2192 ${e4.event.to_genome}. That is past the ${x(r2)} margin, and this season did not roll it back.` : `Every measured edit stayed inside the ${x(r2)} noise margin, so the rollback rule left the genomes in place.`;
    }
    return n2.map((t3) => {
      let n3 = e3.rounds.filter((e4) => e4.index > t3.round_index).map((n4) => Lt(e3, t3.lineage_id, n4.index)).filter((e4) => e4 != null), r3 = n3.length ? ` The restored genome then scored ${n3.map((e4) => x(e4)).join(`, `)}.` : ` The season ended on the rollback, so the restored genome has not played yet.`, i2 = t3.pass_before ?? Lt(e3, t3.lineage_id, t3.round_index - 1), a2 = t3.pass_after ?? Lt(e3, t3.lineage_id, t3.round_index);
      return `${t3.name} fell from ${x(i2 ?? 0)} to ${x(a2 ?? 0)} and returned to ${t3.to_genome}.${r3}`;
    }).join(` `);
  }
  function qt({ series: e3 }) {
    let t2 = e3[0]?.points.map((e4) => e4.round) ?? [], n2 = { l: 44, r: 12, t: 16, b: 48 }, r2 = (720 - n2.l - n2.r) / Math.max(e3.length, 1), i2 = Math.min(18, (r2 - 16) / Math.max(t2.length, 1));
    function a2(e4, a3) {
      return n2.l + e4 * r2 + r2 / 2 - t2.length * i2 / 2 + a3 * i2;
    }
    function o2(e4) {
      return n2.t + (1 - e4) * (280 - n2.t - n2.b);
    }
    let s2 = 280 - n2.b;
    return (0, T.jsxs)(`figure`, { className: `mt-5`, children: [(0, T.jsxs)(`svg`, { viewBox: `0 0 720 280`, className: `h-auto w-full`, role: `img`, "aria-label": `Hidden pass rate by round and agent`, children: [[0, 0.5, 1].map((e4) => (0, T.jsxs)(`g`, { children: [(0, T.jsx)(`line`, { x1: n2.l, x2: 720 - n2.r, y1: o2(e4), y2: o2(e4), stroke: `rgba(231,240,220,0.12)` }), (0, T.jsx)(`text`, { x: n2.l - 8, y: o2(e4) + 4, textAnchor: `end`, fill: `#9aa892`, fontSize: `11`, children: Math.round(e4 * 100) })] }, e4)), e3.map((e4, t3) => e4.points.map((n3, r3) => (0, T.jsx)(`rect`, { x: a2(t3, r3), y: o2(n3.pass), width: i2 - 3, height: Math.max(0, s2 - o2(n3.pass)), fill: b(e4.id), opacity: r3 === 0 ? 0.45 : 1, rx: 2 }, `${e4.id}-${n3.round}`))), e3.map((e4, t3) => (0, T.jsx)(`text`, { x: n2.l + t3 * r2 + r2 / 2, y: 252, textAnchor: `middle`, fill: `#e7f0dc`, fontSize: `12`, children: e4.name }, e4.id)), e3.map((e4, t3) => (0, T.jsx)(`text`, { x: n2.l + t3 * r2 + r2 / 2, y: 268, textAnchor: `middle`, fill: `#9aa892`, fontSize: `10`, children: Bt(e4.model) }, `${e4.id}-model`))] }), (0, T.jsx)(`figcaption`, { className: `mt-1 text-xs text-muted`, children: `Faded bar is round 1, solid bar is the later round. Height is hidden pass rate.` })] });
  }
  function Jt({ series: e3, events: t2 }) {
    let n2 = e3[0]?.points.map((e4) => e4.round) ?? [];
    if (n2.length < 1) return null;
    let r2 = { l: 44, r: 16, t: 16, b: 36 };
    function i2(e4) {
      if (n2.length === 1) return (r2.l + 720 - r2.r) / 2;
      let t3 = n2.indexOf(e4);
      return r2.l + t3 / (n2.length - 1) * (720 - r2.l - r2.r);
    }
    function a2(e4) {
      return r2.t + (1 - e4) * (280 - r2.t - r2.b);
    }
    let o2 = t2.filter((e4) => e4.kind === `rollback`);
    return (0, T.jsxs)(`figure`, { className: `mt-5`, children: [(0, T.jsxs)(`svg`, { viewBox: `0 0 720 280`, className: `h-auto w-full`, role: `img`, "aria-label": `Hidden pass rate across rounds`, children: [[0, 0.5, 1].map((e4) => (0, T.jsxs)(`g`, { children: [(0, T.jsx)(`line`, { x1: r2.l, x2: 720 - r2.r, y1: a2(e4), y2: a2(e4), stroke: `rgba(231,240,220,0.12)` }), (0, T.jsx)(`text`, { x: r2.l - 8, y: a2(e4) + 4, textAnchor: `end`, fill: `#9aa892`, fontSize: `11`, children: Math.round(e4 * 100) })] }, e4)), n2.map((e4) => (0, T.jsxs)(`text`, { x: i2(e4), y: 268, textAnchor: `middle`, fill: `#9aa892`, fontSize: `11`, children: [`R`, e4] }, e4)), e3.map((e4) => (0, T.jsx)(`polyline`, { fill: `none`, stroke: b(e4.id), strokeWidth: `2.5`, points: e4.points.map((e5) => `${i2(e5.round)},${a2(e5.pass)}`).join(` `) }, e4.id)), e3.map((e4) => e4.points.map((t3) => (0, T.jsx)(`circle`, { cx: i2(t3.round), cy: a2(t3.pass), r: `3.5`, fill: b(e4.id) }, `${e4.id}-${t3.round}`))), o2.map((e4) => (0, T.jsx)(`line`, { x1: i2(e4.round_index), x2: i2(e4.round_index), y1: r2.t, y2: 280 - r2.b, stroke: `#ff8a5b`, strokeDasharray: `3 3` }, `${e4.lineage_id}-${e4.round_index}`))] }), (0, T.jsxs)(`figcaption`, { className: `mt-2 flex flex-wrap gap-3 text-xs text-muted`, children: [e3.map((e4) => (0, T.jsxs)(`span`, { className: `inline-flex items-center gap-1.5`, children: [(0, T.jsx)(`span`, { className: `inline-block h-2 w-2 rounded-full`, style: { background: b(e4.id) } }), e4.name, (0, T.jsx)(`span`, { className: `text-muted/80`, children: Bt(e4.model) })] }, e4.id)), o2.length ? (0, T.jsx)(`span`, { children: `Dashed line: a rollback.` }) : null] })] });
  }
  function I({ events: e3 }) {
    let t2 = e3.filter((e4) => e4.fact_check?.status === `rejected` && e4.fact_check.discarded_notes);
    return t2.length ? (0, T.jsxs)(`div`, { className: `mt-6`, children: [(0, T.jsx)(`h4`, { className: `font-serif text-xl`, children: `Coach notes the fact-check refused` }), (0, T.jsx)(`p`, { className: `mt-1 text-sm text-muted`, children: `A note is refused when it claims the wrong pass rate, or when the edit would take a tool or a retry away from an agent who is still failing. The deterministic coach writes the genome that actually plays.` }), (0, T.jsx)(`ul`, { className: `mt-3 flex flex-col gap-3`, children: t2.map((e4) => (0, T.jsxs)(`li`, { className: `border-t border-line pt-3`, children: [(0, T.jsxs)(`div`, { className: `font-medium`, children: [e4.name, ` `, (0, T.jsxs)(`span`, { className: `font-mono text-xs text-muted`, children: [e4.from_genome, ` \u2192 `, e4.to_genome] })] }), (0, T.jsx)(`p`, { className: `mt-1 text-sm leading-relaxed`, children: e4.fact_check?.discarded_notes }), (0, T.jsx)(`p`, { className: `mt-1 text-xs text-muted`, children: e4.fact_check?.problems?.join(`; `) })] }, e4.to_genome)) })] }) : null;
  }
  function Yt({ edits: e3, margin: t2, rollbacks: n2 }) {
    return !e3.length && !n2.length ? null : (0, T.jsx)(`div`, { className: `mt-5 overflow-x-auto`, children: (0, T.jsxs)(`table`, { className: `w-full min-w-[640px] text-left text-sm`, children: [(0, T.jsx)(`thead`, { className: `text-xs tracking-wide text-muted`, children: (0, T.jsxs)(`tr`, { children: [(0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Agent` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Edit` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Before` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `After` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Change` }), (0, T.jsxs)(`th`, { className: `py-2 font-medium`, children: [`Against `, x(t2), ` noise`] })] }) }), (0, T.jsx)(`tbody`, { children: e3.map((e4) => {
      let r2 = e4.before != null && e4.after != null ? e4.after - e4.before : null, i2 = r2 != null && -r2 > t2, a2 = n2.some((t3) => t3.lineage_id === e4.event.lineage_id && t3.round_index === e4.event.round_index + 1);
      return (0, T.jsxs)(`tr`, { className: `border-t border-line`, children: [(0, T.jsx)(`td`, { className: `py-2 pr-3`, children: e4.event.name }), (0, T.jsxs)(`td`, { className: `py-2 pr-3 font-mono text-xs text-muted`, children: [e4.event.from_genome, ` \u2192 `, e4.event.to_genome] }), (0, T.jsx)(`td`, { className: `py-2 pr-3 font-mono`, children: e4.before == null ? `\u2014` : x(e4.before) }), (0, T.jsx)(`td`, { className: `py-2 pr-3 font-mono`, children: e4.after == null ? `\u2014` : x(e4.after) }), (0, T.jsxs)(`td`, { className: `py-2 pr-3 font-mono ${r2 != null && r2 < 0 ? `text-coral` : `text-lime`}`, children: [r2 == null ? `\u2014` : te(Math.round(r2 * 100)), ` pts`] }), (0, T.jsx)(`td`, { className: `py-2 text-muted`, children: e4.after == null ? `Not played yet` : a2 ? `Rolled back` : i2 ? `Beyond noise, kept` : `Inside noise` })] }, e4.event.to_genome);
    }) })] }) });
  }
  function Xt(e3, t2) {
    let n2 = e3.split(`
`), r2 = t2.split(`
`), i2 = n2.length, a2 = r2.length, o2 = Array.from({ length: i2 + 1 }, () => Array(a2 + 1).fill(0));
    for (let e4 = i2 - 1; e4 >= 0; --e4) for (let t3 = a2 - 1; t3 >= 0; --t3) o2[e4][t3] = n2[e4] === r2[t3] ? o2[e4 + 1][t3 + 1] + 1 : Math.max(o2[e4 + 1][t3], o2[e4][t3 + 1]);
    let s2 = [], c2 = 0, l2 = 0;
    for (; c2 < i2 && l2 < a2; ) n2[c2] === r2[l2] ? (s2.push({ type: `same`, text: n2[c2] }), c2 += 1, l2 += 1) : o2[c2 + 1][l2] >= o2[c2][l2 + 1] ? (s2.push({ type: `del`, text: n2[c2] }), c2 += 1) : (s2.push({ type: `add`, text: r2[l2] }), l2 += 1);
    for (; c2 < i2; ) s2.push({ type: `del`, text: n2[c2] }), c2 += 1;
    for (; l2 < a2; ) s2.push({ type: `add`, text: r2[l2] }), l2 += 1;
    return s2;
  }
  function Zt({ data: e3 }) {
    let [t2, n2] = (0, _.useState)(e3.highlights.comeback_lineage_id), r2 = (0, _.useMemo)(() => e3.genomes.filter((e4) => e4.lineage_id === t2).sort((e4, t3) => e4.generation - t3.generation), [e3.genomes, t2]), [i2, a2] = (0, _.useState)(r2[r2.length - 1]?.generation ?? 0), o2 = r2.find((e4) => e4.generation === i2) ?? r2[r2.length - 1], s2 = r2.find((e4) => e4.generation === (o2?.generation ?? 0) - 1), c2 = o2 ? Xt(s2?.system_prompt ?? ``, o2.system_prompt) : [], l2 = e3.events.find((e4) => e4.to_genome === o2?.id);
    function u2(t3) {
      n2(t3);
      let r3 = e3.genomes.filter((e4) => e4.lineage_id === t3);
      a2(Math.max(...r3.map((e4) => e4.generation)));
    }
    return o2 ? (0, T.jsxs)(`div`, { className: `grid gap-4 lg:grid-cols-[240px_1fr]`, children: [(0, T.jsx)(`div`, { className: `flex flex-col gap-2`, children: e3.lineages.map((n3) => (0, T.jsxs)(`button`, { type: `button`, onClick: () => u2(n3.id), className: `rounded-xl border px-3 py-2 text-left ${n3.id === t2 ? `border-transparent text-arena` : `border-line text-ink`}`, style: n3.id === t2 ? { background: b(n3.id) } : void 0, children: [(0, T.jsx)(`div`, { className: `font-medium`, children: n3.name }), (0, T.jsxs)(`div`, { className: `text-xs ${n3.id === t2 ? `text-arena/70` : `text-muted`}`, children: [e3.genomes.filter((e4) => e4.lineage_id === n3.id).length, ` genomes`] })] }, n3.id)) }), (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`div`, { className: `flex flex-wrap gap-2`, children: r2.map((e4) => (0, T.jsxs)(`button`, { type: `button`, onClick: () => a2(e4.generation), className: `rounded-full border px-3 py-1 font-mono text-xs ${e4.id === o2.id ? `border-lime bg-lime text-arena` : `border-line text-muted`}`, children: [`g`, e4.generation] }, e4.id)) }), (0, T.jsxs)(`div`, { className: `mt-4 flex flex-wrap items-center gap-2`, children: [(0, T.jsxs)(`h3`, { className: `font-serif text-2xl`, children: [o2.name, ` \xB7 generation `, o2.generation] }), (0, T.jsx)(jt, { children: ee(o2.strategy) }), (0, T.jsxs)(jt, { variant: `outline`, children: [`temp `, o2.temperature.toFixed(2)] }), (0, T.jsxs)(jt, { variant: `outline`, children: [`retries `, o2.retry_budget] })] }), (0, T.jsxs)(`p`, { className: `mt-2 text-sm text-muted`, children: [`Parents: `, o2.parent_ids.length ? o2.parent_ids.join(`, `) : `seed`] }), l2 ? (0, T.jsx)(`p`, { className: `mt-3 rounded-xl bg-black/20 px-3 py-3 text-sm leading-relaxed break-words text-ink`, children: l2.notes }) : (0, T.jsx)(`p`, { className: `mt-3 text-sm text-muted`, children: o2.mutation_notes }), (0, T.jsxs)(`div`, { className: `mt-4 overflow-hidden rounded-xl border border-line`, children: [(0, T.jsx)(`div`, { className: `border-b border-line px-3 py-2 font-mono text-[11px] tracking-wide text-muted`, children: s2 ? `${s2.id} \u2192 ${o2.id}` : `SEED PROMPT` }), (0, T.jsx)(`pre`, { className: `max-h-[480px] overflow-auto whitespace-pre-wrap p-3 font-mono text-[13px] leading-6`, children: c2.map((e4, t3) => (0, T.jsxs)(`div`, { className: e4.type === `add` ? `bg-lime/10 text-lime` : e4.type === `del` ? `bg-coral/10 text-coral` : `text-ink/80`, children: [(0, T.jsx)(`span`, { className: `mr-3 inline-block w-3 text-muted`, children: e4.type === `add` ? `+` : e4.type === `del` ? `\u2212` : ` ` }), e4.text || ` `] }, `${e4.type}-${t3}`)) })] })] }) })] }) : null;
  }
  function Qt({ history: e3, focus: t2, onFocus: n2, height: r2 = 320 }) {
    let [i2, a2] = (0, _.useState)(null), o2 = (0, _.useMemo)(() => $t(e3), [e3]), s2 = { l: 46, r: 12, t: 18, b: 32 }, c2 = 760 - s2.l - s2.r, l2 = r2 - s2.t - s2.b;
    function u2(e4) {
      if (o2.rounds.length === 1) return s2.l + c2 / 2;
      let t3 = o2.rounds.indexOf(e4);
      return s2.l + t3 / (o2.rounds.length - 1) * c2;
    }
    function d2(e4) {
      return s2.t + (o2.max - e4) / (o2.max - o2.min) * l2;
    }
    let f2 = i2 ?? (t2 ? { lineageId: t2, round: o2.rounds[o2.rounds.length - 1] } : null), p2 = f2 ? o2.byKey.get(`${f2.lineageId}:${f2.round}`) : void 0;
    return (0, T.jsxs)(`div`, { className: `w-full`, children: [(0, T.jsxs)(`svg`, { viewBox: `0 0 760 ${r2}`, className: `h-auto w-full`, role: `img`, "aria-label": `Elo rating by round`, onMouseLeave: () => a2(null), children: [o2.ticks.map((e4) => (0, T.jsxs)(`g`, { children: [(0, T.jsx)(`line`, { x1: s2.l, x2: 760 - s2.r, y1: d2(e4), y2: d2(e4), stroke: `#2d3829`, strokeDasharray: `3 4` }), (0, T.jsx)(`text`, { x: s2.l - 8, y: d2(e4) + 4, textAnchor: `end`, fill: `#93a08a`, fontSize: `11`, fontFamily: `IBM Plex Mono, monospace`, children: e4 })] }, e4)), o2.rounds.map((e4) => (0, T.jsx)(`text`, { x: u2(e4), y: r2 - 8, textAnchor: `middle`, fill: `#93a08a`, fontSize: `11`, fontFamily: `IBM Plex Mono, monospace`, children: e4 === 0 ? `start` : `R${e4}` }, e4)), o2.series.map((e4) => {
      let r3 = t2 && t2 !== e4.id, o3 = e4.points.map((e5, t3) => `${t3 === 0 ? `M` : `L`} ${u2(e5.round)} ${d2(e5.rating)}`).join(` `), s3 = en(e4.points, u2, d2);
      return (0, T.jsxs)(`g`, { opacity: r3 ? 0.28 : 1, children: [t2 === e4.id && s3 ? (0, T.jsx)(`path`, { d: s3, fill: e4.color, opacity: `0.16` }) : null, (0, T.jsx)(`path`, { d: o3, fill: `none`, stroke: e4.color, strokeWidth: t2 === e4.id ? 3 : 2 }), e4.points.map((t3) => (0, T.jsx)(`circle`, { cx: u2(t3.round), cy: d2(t3.rating), r: i2?.lineageId === e4.id && i2.round === t3.round ? 5.5 : 3.5, fill: e4.color, stroke: `#10140f`, strokeWidth: `1.5`, onMouseEnter: () => a2({ lineageId: e4.id, round: t3.round }), onClick: () => n2?.(e4.id), style: { cursor: `pointer` } }, `${e4.id}-${t3.round}`))] }, e4.id);
    })] }), (0, T.jsxs)(`div`, { className: `mt-2 flex flex-wrap items-center gap-2`, children: [o2.series.map((e4) => (0, T.jsxs)(`button`, { type: `button`, onClick: () => n2?.(e4.id), className: `inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs ${t2 === e4.id ? `border-transparent text-arena` : `border-line text-muted`}`, style: t2 === e4.id ? { background: e4.color } : void 0, children: [(0, T.jsx)(`span`, { className: `h-2 w-2 rounded-full`, style: { background: e4.color } }), e4.name] }, e4.id)), p2 ? (0, T.jsxs)(`span`, { className: `ml-auto font-mono text-xs text-muted`, children: [p2.name, ` \xB7 round `, p2.round, ` \xB7 `, Math.round(p2.rating), ` \xB1 `, Math.round(p2.sigma)] }) : (0, T.jsx)(`span`, { className: `ml-auto font-mono text-xs text-muted`, children: `Band is rating \xB1 sigma` })] })] });
  }
  function $t(e3) {
    let t2 = [...new Set(e3.map((e4) => e4.round))].sort((e4, t3) => e4 - t3), n2 = e3.map((e4) => e4.rating), r2 = Math.min(...n2), i2 = Math.max(...n2), a2 = Math.max(0.8, (i2 - r2) * 0.35), o2 = r2 - a2, s2 = i2 + a2, c2 = s2 - o2, l2 = c2 > 40 ? 10 : c2 > 12 ? 2 : 1, u2 = [], d2 = Math.ceil(o2 / l2) * l2;
    for (let e4 = d2; e4 <= s2; e4 += l2) u2.push(Math.round(e4 * 10) / 10);
    return { rounds: t2, min: o2, max: s2, ticks: u2, series: [...new Set(e3.map((e4) => e4.lineage_id))].map((t3) => {
      let n3 = e3.filter((e4) => e4.lineage_id === t3).sort((e4, t4) => e4.round - t4.round);
      return { id: t3, name: n3[0]?.name ?? t3, color: b(t3), points: n3 };
    }), byKey: new Map(e3.map((e4) => [`${e4.lineage_id}:${e4.round}`, e4])) };
  }
  function en(e3, t2, n2) {
    return e3.length < 2 ? `` : `${e3.map((e4, r2) => `${r2 === 0 ? `M` : `L`} ${t2(e4.round)} ${n2(e4.rating + e4.sigma)}`).join(` `)} ${[...e3].reverse().map((e4) => `L ${t2(e4.round)} ${n2(e4.rating - e4.sigma)}`).join(` `)} Z`;
  }
  function tn({ data: e3, focus: t2, onFocus: n2 }) {
    return (0, T.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [(0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`div`, { className: `mb-2 flex items-end justify-between gap-3`, children: (0, T.jsxs)(`div`, { children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `Rating over time` }), (0, T.jsx)(`p`, { className: `text-sm text-muted`, children: `Click a line to isolate it. Pairings use hidden pass rate, then token count.` })] }) }), (0, T.jsx)(Qt, { history: e3.rating_history, focus: t2, onFocus: n2, height: 360 })] }) }), (0, T.jsx)(P, { children: (0, T.jsxs)(F, { className: `overflow-x-auto`, children: [(0, T.jsxs)(`table`, { className: `w-full min-w-[760px] border-collapse text-left text-sm`, children: [(0, T.jsx)(`thead`, { className: `font-mono text-[11px] tracking-wide text-muted`, children: (0, T.jsxs)(`tr`, { className: `border-b border-line`, children: [(0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `#` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Agent` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Skill` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Cost rating` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Hidden` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Tokens` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Spend` }), (0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Record` }), (0, T.jsx)(`th`, { className: `py-2 font-medium`, children: `Genome` })] }) }), (0, T.jsx)(`tbody`, { children: e3.lineages.map((e4, t3) => (0, T.jsxs)(`tr`, { className: `cursor-pointer border-b border-line/70 hover:bg-white/[0.03]`, onClick: () => n2(e4.id), children: [(0, T.jsx)(`td`, { className: `py-3 pr-3 font-mono text-muted`, children: t3 + 1 }), (0, T.jsx)(`td`, { className: `py-3 pr-3`, children: (0, T.jsxs)(`a`, { href: `#/agent/${e4.id}`, className: `inline-flex items-center gap-2 font-medium hover:text-lime`, children: [(0, T.jsx)(`span`, { className: `h-2.5 w-2.5 rounded-full`, style: { background: b(e4.id) } }), e4.name] }) }), (0, T.jsxs)(`td`, { className: `py-3 pr-3 font-mono`, children: [e4.rating.toFixed(1), (0, T.jsxs)(`span`, { className: `text-muted`, children: [` \xB1`, e4.sigma.toFixed(1)] })] }), (0, T.jsxs)(`td`, { className: `py-3 pr-3 font-mono`, children: [(e4.cost_rating ?? 0).toFixed(1), (0, T.jsx)(`span`, { className: `ml-1 ${(e4.cost_delta ?? 0) >= 0 ? `text-lime` : `text-coral`}`, children: te(e4.cost_delta ?? 0, 1) })] }), (0, T.jsx)(`td`, { className: `py-3 pr-3 font-mono`, children: x(e4.mean_pass) }), (0, T.jsx)(`td`, { className: `py-3 pr-3 font-mono`, children: S(e4.tokens) }), (0, T.jsx)(`td`, { className: `py-3 pr-3 font-mono`, children: C(e4.cost_usd) }), (0, T.jsxs)(`td`, { className: `py-3 pr-3 font-mono text-muted`, children: [e4.wins, `-`, e4.losses, `-`, e4.draws] }), (0, T.jsx)(`td`, { className: `py-3`, children: (0, T.jsxs)(jt, { variant: `outline`, children: [`g`, e4.generation, ` \xB7 `, ee(e4.strategy), e4.model ? ` \xB7 ${e4.model}` : ``] }) })] }, e4.id)) })] }), (0, T.jsx)(`p`, { className: `mt-3 text-xs text-muted`, children: `Skill is TrueSkill on hidden pass rate. Cost is a separate TrueSkill where fewer tokens win. Record is skill wins, losses, and draws.` })] }) })] });
  }
  function nn({ data: e3, focus: t2, onFocus: n2, onOpenTrace: r2 }) {
    let i2 = e3.lineages[0], a2 = e3.lineages.find((t3) => t3.id === e3.highlights.comeback_lineage_id) ?? i2, o2 = ne(a2, 1, e3.rounds), s2 = ne(a2, e3.meta.rounds, e3.rounds), c2 = e3.lineages.slice(0, 3);
    return (0, T.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [(0, T.jsxs)(`section`, { className: `grid gap-6 lg:grid-cols-[1.3fr_0.7fr]`, children: [(0, T.jsxs)(`div`, { children: [(0, T.jsxs)(`p`, { className: `font-mono text-xs tracking-[0.22em] text-lime`, children: [`OPEN SEASON \xB7 `, e3.meta.provider.toUpperCase()] }), (0, T.jsxs)(`h2`, { className: `mt-3 max-w-xl font-serif text-4xl leading-tight text-ink sm:text-5xl`, children: [e3.meta.lineage_count, ` agents. `, e3.meta.task_count, ` hidden-test tasks. The bottom of the table gets rewritten.`] }), (0, T.jsxs)(`p`, { className: `mt-4 max-w-xl text-base leading-relaxed text-muted`, children: [i2.name, ` leads on skill at `, i2.rating.toFixed(1), `. `, a2.name, ` moved from`, ` `, x(o2), ` hidden-test pass rate to `, x(s2), `. The rating still remembers what that comeback cost.`] }), (0, T.jsxs)(`div`, { className: `mt-5 flex flex-wrap gap-3`, children: [(0, T.jsx)(Nt, { onClick: () => r2(e3.highlights.sample_trace_id), children: `Replay the comeback` }), (0, T.jsxs)(Nt, { variant: `outline`, onClick: () => n2(a2.id), children: [`Follow `, a2.name] })] })] }), (0, T.jsxs)(`div`, { className: `grid grid-cols-2 gap-3`, children: [(0, T.jsx)(rn, { label: `Rounds`, value: String(e3.meta.rounds) }), (0, T.jsx)(rn, { label: `Submissions`, value: String(e3.traces.length) }), (0, T.jsx)(rn, { label: `Best skill`, value: i2.rating.toFixed(1), detail: i2.name }), (0, T.jsx)(rn, { label: `Best climb`, value: te(e3.highlights.pass_delta * 100, 0) + ` pts`, detail: a2.name })] })] }), (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsxs)(`div`, { className: `mb-2 flex items-baseline justify-between gap-3`, children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `Rating` }), (0, T.jsx)(`p`, { className: `text-right text-xs text-muted`, children: `TrueSkill skill. Shaded band is \xB1 sigma.` })] }), (0, T.jsx)(Qt, { history: e3.rating_history, focus: t2, onFocus: n2 })] }) }), (0, T.jsxs)(`section`, { className: `grid gap-4 lg:grid-cols-[0.9fr_1.1fr]`, children: [(0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `Podium` }), (0, T.jsx)(`ol`, { className: `mt-4 flex flex-col gap-3`, children: c2.map((e4, t3) => (0, T.jsxs)(`li`, { className: `flex items-center gap-3 rounded-xl border border-line px-3 py-3`, children: [(0, T.jsx)(`span`, { className: `w-6 font-serif text-2xl text-muted`, children: t3 + 1 }), (0, T.jsx)(`span`, { className: `h-8 w-1.5 rounded-full`, style: { background: b(e4.id) } }), (0, T.jsxs)(`div`, { className: `min-w-0 flex-1`, children: [(0, T.jsxs)(`div`, { className: `flex items-center gap-2`, children: [(0, T.jsx)(`span`, { className: `font-medium`, children: e4.name }), (0, T.jsx)(jt, { variant: `outline`, children: ee(e4.strategy) })] }), (0, T.jsxs)(`p`, { className: `text-xs text-muted`, children: [`gen `, e4.generation, ` \xB7 hidden `, x(e4.mean_pass), ` \xB7 `, e4.wins, `-`, e4.losses, `-`, e4.draws] })] }), (0, T.jsxs)(`div`, { className: `text-right`, children: [(0, T.jsx)(`div`, { className: `font-mono text-lg`, children: e4.rating.toFixed(1) }), (0, T.jsx)(`div`, { className: `font-mono text-xs ${e4.rating_delta >= 0 ? `text-lime` : `text-coral`}`, children: te(e4.rating_delta, 1) })] })] }, e4.id)) })] }) }), (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `Coach notes` }), (0, T.jsx)(`p`, { className: `mt-1 text-sm text-muted`, children: `The bottom of the table is rewritten. A mutation that drops hidden pass rate by more than the noise margin is reverted.` }), (0, T.jsx)(`ul`, { className: `mt-4 flex flex-col gap-3`, children: e3.events.map((e4) => (0, T.jsxs)(`li`, { className: `border-t border-line pt-3 first:border-0 first:pt-0`, children: [(0, T.jsxs)(`div`, { className: `flex flex-wrap items-center gap-2`, children: [(0, T.jsx)(`span`, { className: `font-medium`, children: e4.name }), (0, T.jsx)(jt, { variant: e4.kind === `rollback` ? `coral` : e4.kind.includes(`crossover`) ? `gold` : `default`, children: e4.kind }), (0, T.jsxs)(`span`, { className: `font-mono text-xs text-muted`, children: [e4.from_genome, ` \u2192 `, e4.to_genome] })] }), (0, T.jsx)(`p`, { className: `mt-1 text-sm leading-relaxed text-muted`, children: e4.notes })] }, e4.to_genome)) })] }) })] })] });
  }
  function rn({ label: e3, value: t2, detail: n2 }) {
    return (0, T.jsxs)(`div`, { className: `rounded-2xl border border-line bg-panel/80 px-4 py-4`, children: [(0, T.jsx)(`div`, { className: `font-mono text-[11px] tracking-[0.16em] text-muted`, children: e3.toUpperCase() }), (0, T.jsx)(`div`, { className: `mt-2 font-serif text-3xl text-ink`, children: t2 }), n2 ? (0, T.jsx)(`div`, { className: `text-xs text-muted`, children: n2 }) : null] });
  }
  function an({ data: e3 }) {
    let [t2, n2] = (0, _.useState)(null), r2 = (0, _.useMemo)(() => on(e3.lineages), [e3.lineages]), i2 = { l: 56, r: 24, t: 24, b: 48 };
    function a2(e4) {
      return i2.l + (e4 - r2.minX) / (r2.maxX - r2.minX || 1) * (760 - i2.l - i2.r);
    }
    function o2(e4) {
      return i2.t + (r2.maxY - e4) / (r2.maxY - r2.minY || 1) * (420 - i2.t - i2.b);
    }
    let s2 = r2.front.slice().sort((e4, t3) => e4.x - t3.x), c2 = s2.length < 2 ? `` : s2.map((e4, t3) => {
      if (t3 === 0) return `M ${a2(e4.x)} ${o2(e4.y)}`;
      let n3 = s2[t3 - 1];
      return `L ${a2(e4.x)} ${o2(n3.y)} L ${a2(e4.x)} ${o2(e4.y)}`;
    }).join(` `);
    return (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `Pareto front` }), (0, T.jsx)(`p`, { className: `mt-1 max-w-2xl text-sm text-muted`, children: `Skill is TrueSkill on hidden pass rate. Cost is a second TrueSkill where fewer tokens win. A point is on the front when no other agent is better at both.` }), (0, T.jsxs)(`svg`, { viewBox: `0 0 760 420`, className: `mt-4 h-auto w-full`, role: `img`, "aria-label": `Skill versus cost`, children: [(0, T.jsx)(`line`, { x1: i2.l, x2: 760 - i2.r, y1: 420 - i2.b, y2: 420 - i2.b, stroke: `#2d3829` }), (0, T.jsx)(`line`, { x1: i2.l, x2: i2.l, y1: i2.t, y2: 420 - i2.b, stroke: `#2d3829` }), (0, T.jsx)(`text`, { x: (i2.l + 760 - i2.r) / 2, y: 408, textAnchor: `middle`, fill: `#93a08a`, fontSize: `12`, children: `Cost rating \u2192 cheaper` }), (0, T.jsx)(`text`, { x: `16`, y: (i2.t + 420 - i2.b) / 2, fill: `#93a08a`, fontSize: `12`, transform: `rotate(-90 16 ${(i2.t + 420 - i2.b) / 2})`, children: `Skill rating \u2192` }), c2 ? (0, T.jsx)(`path`, { d: c2, fill: `none`, stroke: `#d6ff4a`, strokeWidth: `1.5`, strokeDasharray: `5 4` }) : null, r2.points.map((e4) => (0, T.jsx)(`g`, { onMouseEnter: () => n2(e4.id), onMouseLeave: () => n2(null), children: (0, T.jsxs)(`a`, { href: `#/agent/${e4.id}`, children: [r2.frontIds.has(e4.id) ? (0, T.jsx)(`circle`, { cx: a2(e4.x), cy: o2(e4.y), r: `16`, fill: `none`, stroke: `#d6ff4a`, strokeDasharray: `3 3` }) : null, (0, T.jsx)(`circle`, { cx: a2(e4.x), cy: o2(e4.y), r: t2 === e4.id ? 9 : 7, fill: b(e4.id), stroke: r2.frontIds.has(e4.id) ? `#e7f0dc` : `#10140f`, strokeWidth: r2.frontIds.has(e4.id) ? 2 : 1 }), (0, T.jsx)(`text`, { x: a2(e4.x) + 12, y: o2(e4.y) + 4, fill: `#e7f0dc`, fontSize: `13`, children: e4.name })] }) }, e4.id))] }), (0, T.jsxs)(`p`, { className: `text-xs text-muted`, children: [`Dashed rings mark the undominated agents`, r2.front.length ? `: ${r2.front.map((e4) => e4.name).join(`, `)}` : ``, `. A step line joins them when more than one agent is on the front. Click a name for that agent's page.`] })] }) });
  }
  function on(e3) {
    let t2 = e3.map((e4) => ({ ...e4, x: e4.cost_rating ?? 0, y: e4.rating })), n2 = Math.min(...t2.map((e4) => e4.x)) - 1, r2 = Math.max(...t2.map((e4) => e4.x)) + 1, i2 = Math.min(...t2.map((e4) => e4.y)) - 1, a2 = Math.max(...t2.map((e4) => e4.y)) + 1, o2 = t2.filter((e4) => !t2.some((t3) => t3.id !== e4.id && t3.x >= e4.x && t3.y >= e4.y && (t3.x > e4.x || t3.y > e4.y)));
    return { points: t2, minX: n2, maxX: r2, minY: i2, maxY: a2, front: o2, frontIds: new Set(o2.map((e4) => e4.id)) };
  }
  var sn = (e3) => e3?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
  function cn(e3, t2, n2 = []) {
    if (t2 == null) throw Error(`[lucide]: iconNode is required when icon name is used`);
    return { name: sn(e3), size: 24, node: t2, ...n2.length > 0 ? { aliases: n2 } : {} };
  }
  var ln = (e3) => {
    let t2 = ``, n2 = false;
    for (let r2 of e3) r2 === `-` || r2 === `_` || r2 <= ` ` ? n2 = t2.length > 0 : (t2.length === 0 ? t2 += r2.toLowerCase() : t2 += n2 ? r2.toUpperCase() : r2, n2 = false);
    return t2;
  };
  var un = (e3) => {
    let t2 = ln(e3);
    return t2.charAt(0).toUpperCase() + t2.slice(1);
  };
  var dn = (...e3) => e3.filter((e4, t2, n2) => !!e4 && e4.trim() !== `` && n2.indexOf(e4) === t2).join(` `).trim();
  var fn = { xmlns: `http://www.w3.org/2000/svg`, width: 24, height: 24, viewBox: `0 0 24 24`, fill: `none`, stroke: `currentColor`, "stroke-width": 2, "stroke-linecap": `round`, "stroke-linejoin": `round` };
  function pn(e3) {
    return e3 != null;
  }
  function mn(e3, t2 = {}) {
    let n2 = t2.attributeNames ?? {}, r2 = (e4) => n2[e4] ?? e4, i2 = e3.size ?? e3.width ?? fn.width, a2 = e3.size ?? e3.height ?? fn.height, o2 = e3.aliases?.filter((e4) => typeof e4 == `string` && e4.trim() !== ``).map((e4) => `lucide-${e4}`) ?? [], s2 = [...e3.name ? [`lucide-${e3.name}`] : [], ...o2], c2 = t2.className?.split(` `).filter(Boolean) ?? [], l2 = t2.includeDefaultClasses === false ? dn(...c2) : dn(`lucide`, ...s2, ...c2), u2 = t2.absoluteStrokeWidth ? Number(t2.strokeWidth ?? fn[`stroke-width`]) * Number(e3.size ?? e3.width ?? fn.width) / Number(t2.size ?? t2.width ?? fn.width) : t2.strokeWidth ?? fn[`stroke-width`];
    return [`svg`, { ...Object.entries(fn).reduce((e4, [t3, n3]) => (e4[r2(t3)] = n3, e4), {}), ...`color` in t2 && t2.color && { [r2(`stroke`)]: t2.color }, ...`size` in t2 && pn(t2.size) && { [r2(`width`)]: t2.size, [r2(`height`)]: t2.size }, ...`width` in t2 && pn(t2.width) && { [r2(`width`)]: t2.width }, ...`height` in t2 && pn(t2.height) && { [r2(`height`)]: t2.height }, [r2(`stroke-width`)]: u2, ...l2 && { [r2(`class`)]: l2 }, [r2(`viewBox`)]: `0 0 ${i2} ${a2}`, ...t2.hasA11yProp === false ? { [r2(`aria-hidden`)]: `true` } : {}, ...`attributes` in t2 && t2.attributes }, e3.node.map((e4) => {
      let [n3, i3, a3] = e4, o3 = t2.nonScalingStroke ? { [r2(`vector-effect`)]: `non-scaling-stroke`, ...i3 } : i3;
      return a3 ? [n3, o3, a3] : [n3, o3];
    })];
  }
  function hn(e3, t2 = {}) {
    return mn(e3, { ...t2, attributeNames: { ...t2.attributeNames, class: `className`, "stroke-width": `strokeWidth`, "stroke-linecap": `strokeLinecap`, "stroke-linejoin": `strokeLinejoin`, "vector-effect": `vectorEffect` } });
  }
  var gn = (e3) => {
    for (let t2 in e3) if (t2.startsWith(`aria-`) || t2 === `role` || t2 === `title`) return true;
    return false;
  };
  var _n = (0, _.createContext)({});
  var vn = () => (0, _.useContext)(_n);
  var yn = (0, _.forwardRef)(({ color: e3, size: t2, width: n2, height: r2, strokeWidth: i2, absoluteStrokeWidth: a2, nonScalingStroke: o2, className: s2 = ``, children: c2, iconNode: l2 = [], icon: u2 = { node: l2, aliases: [], size: 24 }, ...d2 }, f2) => {
    let { size: p2 = 24, strokeWidth: m2 = 2, absoluteStrokeWidth: h2 = false, nonScalingStroke: g2 = false, color: v2 = `currentColor`, className: y2 = `` } = vn() ?? {}, b2 = !!c2 || gn(d2), [ee2, x2, te2 = []] = hn(u2, { color: e3 ?? v2, width: n2 ?? t2 ?? p2, height: r2 ?? t2 ?? p2, strokeWidth: i2 ?? m2, absoluteStrokeWidth: a2 ?? h2, nonScalingStroke: o2 ?? g2, className: dn(y2, s2), hasA11yProp: b2, attributes: d2 });
    return (0, _.createElement)(ee2, { ref: f2, ...x2 }, [...te2.map(([e4, t3]) => (0, _.createElement)(e4, t3)), ...Array.isArray(c2) ? c2 : [c2]]);
  });
  function bn(e3, t2 = [], n2 = []) {
    let r2 = typeof e3 == `string` ? cn(e3, t2, n2) : e3, i2 = (0, _.forwardRef)(({ className: e4, ...t3 }, n3) => (0, _.createElement)(yn, { ref: n3, icon: r2, className: e4, ...t3 }));
    return r2.name && (i2.displayName = un(r2.name)), i2;
  }
  var xn = { name: `chevron-left`, size: 24, node: [[`path`, { d: `m15 18-6-6 6-6`, key: `1wnfg3` }]] };
  xn.node;
  var Sn = bn(xn);
  var Cn = { name: `chevron-right`, size: 24, node: [[`path`, { d: `m9 18 6-6-6-6`, key: `mthhwq` }]] };
  Cn.node;
  var wn = bn(Cn);
  var Tn = { name: `pause`, size: 24, node: [[`rect`, { x: `14`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `kaeet6` }], [`rect`, { x: `5`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `1wsw3u` }]] };
  Tn.node;
  var En = bn(Tn);
  var Dn = { name: `play`, size: 24, node: [[`path`, { d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`, key: `10ikf1` }]] };
  Dn.node;
  var On = bn(Dn);
  var kn = { system: `System`, plan: `Plan`, tests: `Edge cases`, code: `Draft`, tool: `Sandbox`, critique: `Critique`, revise: `Revision`, retry: `Retry` };
  function An({ data: e3, traceId: t2, onTrace: n2 }) {
    let r2 = e3.traces.find((e4) => e4.id === t2) ?? e3.traces[0], [i2, a2] = (0, _.useState)(0), [o2, s2] = (0, _.useState)(false), c2 = e3.genomes.find((e4) => e4.id === r2?.genome_id), l2 = e3.tasks.find((e4) => e4.id === r2?.task_id);
    (0, _.useEffect)(() => {
      a2(0), s2(false);
    }, [r2?.id]), (0, _.useEffect)(() => {
      if (!o2 || !r2) return;
      let e4 = window.setInterval(() => {
        a2((e5) => e5 >= r2.steps.length - 1 ? (s2(false), e5) : e5 + 1);
      }, 1300);
      return () => window.clearInterval(e4);
    }, [o2, r2]);
    let u2 = r2?.steps[i2], d2 = (0, _.useMemo)(() => [...new Set(e3.traces.map((e4) => e4.round))].sort((e4, t3) => e4 - t3), [e3.traces]), f2 = (0, _.useMemo)(() => {
      let t3 = new Set(e3.traces.filter((e4) => e4.lineage_id === r2?.lineage_id && e4.round === r2?.round).map((e4) => e4.task_id));
      return e3.tasks.filter((e4) => t3.has(e4.id));
    }, [e3.tasks, e3.traces, r2?.lineage_id, r2?.round]);
    if (!r2 || !u2) return (0, T.jsx)(`p`, { className: `text-sm text-muted`, children: `This export has no traces to replay.` });
    function p2(t3, r3, i3) {
      let a3 = e3.traces.find((e4) => e4.lineage_id === t3 && e4.round === r3 && e4.task_id === i3);
      a3 && n2(a3.id);
    }
    return (0, T.jsxs)(`div`, { className: `grid gap-4 lg:grid-cols-[280px_1fr]`, children: [(0, T.jsx)(P, { children: (0, T.jsxs)(F, { className: `flex flex-col gap-3`, children: [(0, T.jsx)(jn, { label: `Agent`, children: (0, T.jsx)(`select`, { className: `w-full rounded-lg border border-line bg-arena px-2 py-2 text-sm`, value: r2.lineage_id, onChange: (e4) => p2(e4.target.value, r2.round, r2.task_id), children: e3.lineages.map((e4) => (0, T.jsx)(`option`, { value: e4.id, children: e4.name }, e4.id)) }) }), (0, T.jsx)(jn, { label: `Round`, children: (0, T.jsx)(`select`, { className: `w-full rounded-lg border border-line bg-arena px-2 py-2 text-sm`, value: r2.round, onChange: (e4) => p2(r2.lineage_id, Number(e4.target.value), r2.task_id), children: d2.map((e4) => (0, T.jsxs)(`option`, { value: e4, children: [`Round `, e4] }, e4)) }) }), (0, T.jsx)(jn, { label: `Task`, children: (0, T.jsx)(`select`, { className: `w-full rounded-lg border border-line bg-arena px-2 py-2 text-sm`, value: r2.task_id, onChange: (e4) => p2(r2.lineage_id, r2.round, e4.target.value), children: f2.map((e4) => (0, T.jsx)(`option`, { value: e4.id, children: e4.title }, e4.id)) }) }), (0, T.jsxs)(`div`, { className: `rounded-xl border border-line px-3 py-3 text-sm`, children: [(0, T.jsx)(`div`, { className: `font-medium`, children: l2?.title }), (0, T.jsx)(`p`, { className: `mt-1 text-muted`, children: l2?.summary }), (0, T.jsxs)(`div`, { className: `mt-3 flex flex-wrap gap-2`, children: [(0, T.jsxs)(jt, { variant: r2.pass_rate >= 0.999 ? `default` : `coral`, children: [`hidden `, x(r2.pass_rate)] }), (0, T.jsxs)(jt, { variant: `outline`, children: [`examples `, x(r2.public_pass_rate)] })] }), (0, T.jsxs)(`p`, { className: `mt-2 font-mono text-xs text-muted`, children: [r2.tokens_in + r2.tokens_out, ` tokens \xB7 `, r2.wall_time_s.toFixed(2), `s \xB7 `, c2 ? ee(c2.strategy) : ``] })] }), r2.id === e3.highlights.sample_trace_id ? (0, T.jsx)(`p`, { className: `text-xs leading-relaxed text-muted`, children: e3.highlights.sample_reason }) : null] }) }), (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsxs)(`div`, { className: `flex flex-wrap items-center gap-2`, children: [(0, T.jsx)(Nt, { variant: `outline`, size: `icon`, onClick: () => a2((e4) => Math.max(0, e4 - 1)), "aria-label": `Previous step`, children: (0, T.jsx)(Sn, { size: 16 }) }), (0, T.jsx)(Nt, { variant: `outline`, size: `icon`, onClick: () => s2((e4) => !e4), "aria-label": o2 ? `Pause` : `Play`, children: o2 ? (0, T.jsx)(En, { size: 16 }) : (0, T.jsx)(On, { size: 16 }) }), (0, T.jsx)(Nt, { variant: `outline`, size: `icon`, onClick: () => a2((e4) => Math.min(r2.steps.length - 1, e4 + 1)), "aria-label": `Next step`, children: (0, T.jsx)(wn, { size: 16 }) }), (0, T.jsxs)(`span`, { className: `font-mono text-xs text-muted`, children: [`Step `, i2 + 1, ` / `, r2.steps.length, ` \xB7 `, kn[u2.kind] ?? u2.kind] })] }), (0, T.jsx)(`ol`, { className: `mt-4 flex gap-2 overflow-x-auto pb-1`, children: r2.steps.map((e4, t3) => (0, T.jsx)(`li`, { children: (0, T.jsxs)(`button`, { type: `button`, onClick: () => a2(t3), className: `whitespace-nowrap rounded-full border px-3 py-1 text-xs ${t3 === i2 ? `border-lime bg-lime text-arena` : `border-line text-muted`}`, children: [t3 + 1, `. `, kn[e4.kind] ?? e4.kind] }) }, `${e4.kind}-${t3}`)) }), (0, T.jsx)(`div`, { className: `mt-4`, children: Mn(u2, c2?.system_prompt ?? ``) })] }) })] });
  }
  function jn({ label: e3, children: t2 }) {
    return (0, T.jsxs)(`label`, { className: `flex flex-col gap-1 text-xs text-muted`, children: [e3, t2] });
  }
  function Mn(e3, t2) {
    return e3.kind === `system` ? (0, T.jsx)(Nn, { title: `System prompt`, body: t2 }) : e3.kind === `tool` ? (0, T.jsxs)(`div`, { children: [(0, T.jsx)(Nn, { title: `Sandbox`, body: e3.content ?? `` }), e3.failures && e3.failures.length > 0 ? (0, T.jsx)(`ul`, { className: `mt-3 flex flex-col gap-2`, children: e3.failures.slice(0, 4).map((e4, t3) => (0, T.jsxs)(`li`, { className: `rounded-lg border border-coral/30 bg-coral/5 px-3 py-2 font-mono text-xs leading-5 text-ink`, children: [`args `, JSON.stringify(e4.args), ` \xB7 expected `, JSON.stringify(e4.expected), ` \xB7 got `, JSON.stringify(e4.got), e4.error ? ` \xB7 ${e4.error}` : ``] }, t3)) }) : (0, T.jsx)(`p`, { className: `mt-3 text-sm text-lime`, children: `Hidden tests passed.` })] }) : e3.kind === `code` || e3.kind === `revise` || e3.kind === `retry` ? (0, T.jsx)(Pn, { code: e3.content ?? `` }) : (0, T.jsx)(Nn, { title: kn[e3.kind] ?? e3.kind, body: e3.content ?? `` });
  }
  function Nn({ title: e3, body: t2 }) {
    return (0, T.jsxs)(`div`, { children: [(0, T.jsx)(`div`, { className: `font-mono text-[11px] tracking-wide text-muted`, children: e3.toUpperCase() }), (0, T.jsx)(`p`, { className: `mt-2 whitespace-pre-wrap text-sm leading-relaxed text-ink`, children: t2 })] });
  }
  function Pn({ code: e3 }) {
    let t2 = (0, _.useMemo)(() => Fn(e3), [e3]);
    return (0, T.jsx)(`pre`, { className: `overflow-x-auto whitespace-pre-wrap font-mono text-[13px] leading-6`, children: t2 });
  }
  function Fn(e3) {
    let t2 = /(#.*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|\b(?:def|return|if|else|elif|for|while|in|not|and|or|class|import|from|True|False|None|raise|with|as)\b|\b\d+\b/g, n2 = [], r2 = 0, i2 = 0;
    for (let a2 of e3.matchAll(t2)) {
      let t3 = a2.index ?? 0;
      t3 > r2 && n2.push((0, T.jsx)(`span`, { children: e3.slice(r2, t3) }, `t-${i2++}`));
      let o2 = a2[0], s2 = o2.startsWith(`#`) ? `text-muted` : o2.startsWith(`"`) || o2.startsWith(`'`) ? `text-gold` : /^\d/.test(o2) ? `text-sky` : `text-lime`;
      n2.push((0, T.jsx)(`span`, { className: s2, children: o2 }, `m-${i2++}`)), r2 = t3 + o2.length;
    }
    return r2 < e3.length && n2.push((0, T.jsx)(`span`, { children: e3.slice(r2) }, `e-${i2}`)), n2;
  }
  var In = [{ id: `all`, label: `All` }, { id: `algorithms`, label: `Algorithms` }, { id: `bugfix`, label: `Bug fixes` }, { id: `refactor`, label: `Refactors` }];
  function Ln({ data: e3, onOpenTrace: t2 }) {
    let [n2, r2] = (0, _.useState)(`all`), [i2, a2] = (0, _.useState)(1), o2 = e3.rounds.find((e4) => e4.index === i2) ?? e3.rounds[0], s2 = e3.tasks.filter((e4) => n2 === `all` || e4.category === n2), c2 = e3.lineages;
    return (0, T.jsx)(P, { children: (0, T.jsxs)(F, { children: [(0, T.jsxs)(`div`, { className: `flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`, children: [(0, T.jsxs)(`div`, { children: [(0, T.jsx)(`h3`, { className: `font-serif text-2xl`, children: `Hidden-test pass rate` }), (0, T.jsx)(`p`, { className: `text-sm text-muted`, children: `Round 1 is the split. Later rounds go green as genomes change. Click a cell to replay it.` })] }), (0, T.jsx)(`div`, { className: `flex flex-wrap gap-2`, children: e3.rounds.map((e4) => (0, T.jsxs)(`button`, { type: `button`, onClick: () => a2(e4.index), className: `rounded-full border px-3 py-1 text-xs ${e4.index === o2.index ? `border-lime bg-lime text-arena` : `border-line text-muted`}`, children: [`Round `, e4.index] }, e4.index)) })] }), (0, T.jsx)(`div`, { className: `mt-4 flex flex-wrap gap-2`, children: In.map((e4) => (0, T.jsx)(`button`, { type: `button`, onClick: () => r2(e4.id), className: `rounded-full border px-3 py-1 text-xs ${n2 === e4.id ? `border-lime text-lime` : `border-line text-muted`}`, children: e4.label }, e4.id)) }), s2.length === 0 ? (0, T.jsx)(`p`, { className: `mt-8 text-sm text-muted`, children: `No tasks in this category.` }) : (0, T.jsx)(`div`, { className: `mt-4 overflow-x-auto`, children: (0, T.jsxs)(`table`, { className: `w-full min-w-[720px] border-collapse text-left text-sm`, children: [(0, T.jsx)(`thead`, { children: (0, T.jsxs)(`tr`, { className: `border-b border-line font-mono text-[11px] text-muted`, children: [(0, T.jsx)(`th`, { className: `py-2 pr-3 font-medium`, children: `Task` }), c2.map((e4) => (0, T.jsx)(`th`, { className: `px-1 py-2 text-center font-medium`, children: (0, T.jsxs)(`span`, { className: `inline-flex items-center gap-1`, children: [(0, T.jsx)(`span`, { className: `h-2 w-2 rounded-full`, style: { background: b(e4.id) } }), e4.name] }) }, e4.id))] }) }), (0, T.jsx)(`tbody`, { children: s2.map((e4) => (0, T.jsxs)(`tr`, { className: `border-b border-line/60`, children: [(0, T.jsxs)(`td`, { className: `py-2 pr-3`, children: [(0, T.jsx)(`div`, { className: `font-medium`, children: e4.title }), (0, T.jsxs)(`div`, { className: `mt-1 flex gap-1`, children: [(0, T.jsx)(jt, { variant: `outline`, children: e4.category }), (0, T.jsx)(jt, { variant: `outline`, children: e4.difficulty })] })] }), c2.map((n3) => {
      let r3 = o2.results.find((t3) => t3.task_id === e4.id && t3.lineage_id === n3.id), i3 = r3?.pass_rate ?? 0;
      return (0, T.jsx)(`td`, { className: `px-1 py-2 text-center`, children: (0, T.jsx)(`button`, { type: `button`, disabled: !r3, onClick: () => r3 && t2(r3.trace_id), className: `w-full rounded-lg px-2 py-2 font-mono text-xs text-arena`, style: { background: Rn(i3) }, title: r3 ? `${x(i3)} hidden \xB7 ${x(r3.public_pass_rate)} examples` : ``, children: r3 ? x(i3) : `\u2014` }) }, n3.id);
    })] }, e4.id)) })] }) })] }) });
  }
  function Rn(e3) {
    return e3 >= 0.999 ? `#d6ff4a` : e3 >= 0.75 ? `#b7d96a` : e3 >= 0.5 ? `#f0c14a` : e3 >= 0.3 ? `#e08a4f` : `#ff6a3d`;
  }
  var zn = Object.defineProperty;
  var Bn = (e3, t2) => zn(e3, `name`, { value: t2, configurable: true });
  var Vn = !!(typeof window < `u` && window.document && window.document.createElement);
  function Hn(e3, t2, { checkForDefaultPrevented: n2 = true } = {}) {
    return Bn(function(r2) {
      if (e3?.(r2), n2 === false || !r2 || !r2.defaultPrevented) return t2?.(r2);
    }, `handleEvent`);
  }
  Bn(Hn, `composeEventHandlers`);
  function Un(e3) {
    if (!Vn) throw Error(`Cannot access window outside of the DOM`);
    return e3?.ownerDocument?.defaultView ?? window;
  }
  Bn(Un, `getOwnerWindow`);
  function Wn(e3) {
    if (!Vn) throw Error(`Cannot access document outside of the DOM`);
    return e3?.ownerDocument ?? document;
  }
  Bn(Wn, `getOwnerDocument`);
  function Gn(e3, t2 = false) {
    let { activeElement: n2 } = Wn(e3);
    if (!n2?.nodeName) return null;
    if (Kn(n2) && n2.contentDocument) return Gn(n2.contentDocument.body, t2);
    if (t2) {
      let e4 = n2.getAttribute(`aria-activedescendant`);
      if (e4) {
        let t3 = Wn(n2).getElementById(e4);
        if (t3) return t3;
      }
    }
    return n2;
  }
  Bn(Gn, `getActiveElement`);
  function Kn(e3) {
    return e3.tagName === `IFRAME`;
  }
  Bn(Kn, `isFrame`);
  var qn = Object.defineProperty;
  var Jn = (e3, t2) => qn(e3, `name`, { value: t2, configurable: true });
  function Yn(e3, t2) {
    let n2 = _.createContext(t2);
    n2.displayName = e3 + `Context`;
    let r2 = Jn((e4) => {
      let { children: t3, ...r3 } = e4, i3 = _.useMemo(() => r3, Object.values(r3));
      return (0, T.jsx)(n2.Provider, { value: i3, children: t3 });
    }, `Provider`);
    r2.displayName = e3 + `Provider`;
    function i2(r3, i3 = {}) {
      let { optional: a2 = false } = i3, o2 = _.useContext(n2);
      if (o2) return o2;
      if (t2 !== void 0) return t2;
      if (!a2) throw Error(`\`${r3}\` must be used within \`${e3}\``);
    }
    return Jn(i2, `useContext`), [r2, i2];
  }
  Jn(Yn, `createContext`);
  function Xn(e3, t2 = []) {
    let n2 = [];
    function r2(t3, r3) {
      let i3 = _.createContext(r3);
      i3.displayName = t3 + `Context`;
      let a2 = n2.length;
      n2 = [...n2, r3];
      let o2 = Jn((t4) => {
        let { scope: n3, children: r4, ...o3 } = t4, s3 = n3?.[e3]?.[a2] || i3, c2 = _.useMemo(() => o3, Object.values(o3));
        return (0, T.jsx)(s3.Provider, { value: c2, children: r4 });
      }, `Provider`);
      o2.displayName = t3 + `Provider`;
      function s2(n3, o3, s3 = {}) {
        let { optional: c2 = false } = s3, l2 = o3?.[e3]?.[a2] || i3, u2 = _.useContext(l2);
        if (u2) return u2;
        if (r3 !== void 0) return r3;
        if (!c2) throw Error(`\`${n3}\` must be used within \`${t3}\``);
      }
      return Jn(s2, `useContext`), [o2, s2];
    }
    Jn(r2, `createContext`);
    let i2 = Jn(() => {
      let t3 = n2.map((e4) => _.createContext(e4));
      return Jn(function(n3) {
        let r3 = n3?.[e3] || t3;
        return _.useMemo(() => ({ [`__scope${e3}`]: { ...n3, [e3]: r3 } }), [n3, r3]);
      }, `useScope`);
    }, `createScope`);
    return i2.scopeName = e3, [r2, Zn(i2, ...t2)];
  }
  Jn(Xn, `createContextScope`);
  function Zn(...e3) {
    let t2 = e3[0];
    if (e3.length === 1) return t2;
    let n2 = Jn(() => {
      let n3 = e3.map((e4) => ({ useScope: e4(), scopeName: e4.scopeName }));
      return Jn(function(e4) {
        let r2 = n3.reduce((t3, { useScope: n4, scopeName: r3 }) => {
          let i2 = n4(e4)[`__scope${r3}`];
          return { ...t3, ...i2 };
        }, {});
        return _.useMemo(() => ({ [`__scope${t2.scopeName}`]: r2 }), [r2]);
      }, `useComposedScopes`);
    }, `createScope`);
    return n2.scopeName = t2.scopeName, n2;
  }
  Jn(Zn, `composeContextScopes`);
  var Qn = Object.defineProperty;
  var $n = (e3, t2) => Qn(e3, `name`, { value: t2, configurable: true });
  function er(e3, t2) {
    if (typeof e3 == `function`) return e3(t2);
    e3 != null && (e3.current = t2);
  }
  $n(er, `setRef`);
  function tr(...e3) {
    return (t2) => {
      let n2 = false, r2 = e3.map((e4) => {
        let r3 = er(e4, t2);
        return !n2 && typeof r3 == `function` && (n2 = true), r3;
      });
      if (n2) return () => {
        for (let t3 = 0; t3 < r2.length; t3++) {
          let n3 = r2[t3];
          typeof n3 == `function` ? n3() : er(e3[t3], null);
        }
      };
    };
  }
  $n(tr, `composeRefs`);
  function nr(...e3) {
    return _.useCallback(tr(...e3), e3);
  }
  $n(nr, `useComposedRefs`);
  var rr = Object.defineProperty;
  var ir = (e3, t2) => rr(e3, `name`, { value: t2, configurable: true });
  function ar(e3) {
    let t2 = _.forwardRef((t3, n2) => {
      let { children: r2, ...i2 } = t3, a2 = null, o2 = false, s2 = [];
      r2 = hr(r2), _.Children.forEach(r2, (e4) => {
        if (dr(e4)) {
          o2 = true;
          let t4 = e4, n3 = `child` in t4.props ? t4.props.child : t4.props.children;
          for (; pr(n3) && typeof yr == `function`; ) n3 = yr(n3._payload);
          a2 = cr(t4, n3), s2.push(a2?.props?.children);
        } else s2.push(e4);
      }), a2 ? a2 = _.cloneElement(a2, void 0, s2) : !o2 && _.Children.count(r2) === 1 && _.isValidElement(r2) && (a2 = r2);
      let c2 = a2 ? ur(a2) : void 0, l2 = nr(n2, c2);
      if (!a2) {
        if (r2 || r2 === 0) throw Error(o2 ? vr(e3) : _r(e3));
        return r2;
      }
      let u2 = lr(i2, a2.props ?? {});
      return a2.type !== _.Fragment && (u2.ref = n2 ? l2 : c2), _.cloneElement(a2, u2);
    });
    return t2.displayName = `${e3}.Slot`, t2;
  }
  ir(ar, `createSlot`);
  var or = /* @__PURE__ */ Symbol.for(`radix.slottable`);
  function sr(e3) {
    let t2 = ir((e4) => `child` in e4 ? e4.children(e4.child) : e4.children, `Slottable`);
    return t2.displayName = `${e3}.Slottable`, t2.__radixId = or, t2;
  }
  ir(sr, `createSlottable`);
  var cr = ir((e3, t2) => `child` in e3.props ? _.isValidElement(t2) ? _.cloneElement(t2, void 0, e3.props.children(t2.props.children)) : null : _.isValidElement(t2) ? t2 : null, `getSlottableElementFromSlottable`);
  function lr(e3, t2) {
    let n2 = { ...t2 };
    for (let r2 in t2) {
      let i2 = e3[r2], a2 = t2[r2];
      /^on[A-Z]/.test(r2) ? i2 && a2 ? n2[r2] = (...e4) => {
        let t3 = a2(...e4);
        return i2(...e4), t3;
      } : i2 && (n2[r2] = i2) : r2 === `style` ? n2[r2] = { ...i2, ...a2 } : r2 === `className` ? n2[r2] = [i2, a2].filter(Boolean).join(` `) : r2 === `aria-describedby` && (n2[r2] = gr(a2, i2));
    }
    return { ...e3, ...n2 };
  }
  ir(lr, `mergeProps`);
  function ur(e3) {
    let t2 = Object.getOwnPropertyDescriptor(e3.props, `ref`)?.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning;
    return n2 ? e3.ref : (t2 = Object.getOwnPropertyDescriptor(e3, `ref`)?.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning, n2 ? e3.props.ref : e3.props.ref || e3.ref);
  }
  ir(ur, `getElementRef`);
  function dr(e3) {
    return _.isValidElement(e3) && typeof e3.type == `function` && `__radixId` in e3.type && e3.type.__radixId === or;
  }
  ir(dr, `isSlottable`);
  var fr = /* @__PURE__ */ Symbol.for(`react.lazy`);
  function pr(e3) {
    return typeof e3 == `object` && !!e3 && `$$typeof` in e3 && e3.$$typeof === fr && `_payload` in e3 && mr(e3._payload);
  }
  ir(pr, `isLazyComponent`);
  function mr(e3) {
    return typeof e3 == `object` && !!e3 && `then` in e3;
  }
  ir(mr, `isPromiseLike`);
  function hr(e3) {
    let t2 = e3;
    for (; pr(t2) && typeof yr == `function`; ) t2 = yr(t2._payload);
    return t2;
  }
  ir(hr, `useUnwrappedLazy`);
  function gr(...e3) {
    let t2 = /* @__PURE__ */ new Set();
    for (let n2 of e3) if (typeof n2 == `string`) for (let e4 of String(n2).trim().split(/\s+/)) e4 && t2.add(e4);
    return t2.size > 0 ? Array.from(t2).join(` `) : void 0;
  }
  ir(gr, `concatAriaDescribedby`);
  var _r = ir((e3) => `${e3} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, `createSlotError`);
  var vr = ir((e3) => `${e3} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, `createSlottableError`);
  var yr = _.use;
  var br = globalThis?.document ? _.useLayoutEffect : () => {
  };
  var xr = Object.defineProperty;
  var L = (e3, t2) => xr(e3, `name`, { value: t2, configurable: true });
  function Sr(e3) {
    let t2 = e3 + `CollectionProvider`, [n2, r2] = Xn(t2), [i2, a2] = n2(t2, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), o2 = L((e4) => {
      let { scope: t3, children: n3 } = e4, r3 = _.useRef(null), a3 = _.useRef(/* @__PURE__ */ new Map()).current;
      return (0, T.jsx)(i2, { scope: t3, itemMap: a3, collectionRef: r3, children: n3 });
    }, `CollectionProvider`);
    o2.displayName = t2;
    let s2 = e3 + `CollectionSlot`, c2 = ar(s2), l2 = _.forwardRef((e4, t3) => {
      let { scope: n3, children: r3 } = e4, i3 = nr(t3, a2(s2, n3).collectionRef);
      return (0, T.jsx)(c2, { ref: i3, children: r3 });
    });
    l2.displayName = s2;
    let u2 = e3 + `CollectionItemSlot`, d2 = `data-radix-collection-item`, f2 = ar(u2), p2 = _.forwardRef((e4, t3) => {
      let { scope: n3, children: r3, ...i3 } = e4, o3 = _.useRef(null), s3 = nr(t3, o3), c3 = a2(u2, n3);
      return _.useEffect(() => (c3.itemMap.set(o3, { ref: o3, ...i3 }), () => void c3.itemMap.delete(o3))), (0, T.jsx)(f2, { [d2]: ``, ref: s3, children: r3 });
    });
    p2.displayName = u2;
    function m2(t3) {
      let n3 = a2(e3 + `CollectionConsumer`, t3);
      return _.useCallback(() => {
        let e4 = n3.collectionRef.current;
        if (!e4) return [];
        let t4 = Array.from(e4.querySelectorAll(`[${d2}]`));
        return Array.from(n3.itemMap.values()).sort((e5, n4) => t4.indexOf(e5.ref.current) - t4.indexOf(n4.ref.current));
      }, [n3.collectionRef, n3.itemMap]);
    }
    return L(m2, `useCollection`), [{ Provider: o2, Slot: l2, ItemSlot: p2 }, m2, r2];
  }
  L(Sr, `createCollection`);
  var Cr = /* @__PURE__ */ new WeakMap();
  var wr = class e2 extends Map {
    static {
      L(this, `OrderedDict`);
    }
    #e;
    constructor(e3) {
      super(e3), this.#e = [...super.keys()], Cr.set(this, true);
    }
    set(e3, t2) {
      return Cr.get(this) && !this.has(e3) && this.#e.push(e3), super.set(e3, t2), this;
    }
    insert(e3, t2, n2) {
      let r2 = this.has(t2), i2 = r2 ? this.size : this.size + 1, a2 = Dr(e3), o2 = a2 >= 0 ? Math.min(a2, i2 - 1) : Math.max(i2 + a2, 0);
      if (r2 ? this.#e.indexOf(t2) === o2 : o2 === this.size) return this.set(t2, n2), this;
      let s2 = this.#e.filter((e4) => e4 !== t2);
      s2.splice(o2, 0, t2);
      let c2 = s2.map((e4) => [e4, e4 === t2 ? n2 : this.get(e4)]);
      this.clear();
      for (let [e4, t3] of c2) this.set(e4, t3);
      return this;
    }
    with(t2, n2, r2) {
      let i2 = new e2(this);
      return i2.insert(t2, n2, r2), i2;
    }
    before(e3) {
      let t2 = this.#e.indexOf(e3) - 1;
      if (!(t2 < 0)) return this.entryAt(t2);
    }
    setBefore(e3, t2, n2) {
      let r2 = this.#e.indexOf(e3);
      if (r2 === -1) return this;
      let i2 = this.#e.indexOf(t2), a2 = i2 !== -1 && i2 < r2 ? r2 - 1 : r2;
      return this.insert(a2, t2, n2);
    }
    after(e3) {
      let t2 = this.#e.indexOf(e3);
      if (t2 = t2 === -1 || t2 === this.size - 1 ? -1 : t2 + 1, t2 !== -1) return this.entryAt(t2);
    }
    setAfter(e3, t2, n2) {
      let r2 = this.#e.indexOf(e3);
      if (r2 === -1) return this;
      let i2 = this.#e.indexOf(t2), a2 = i2 !== -1 && i2 <= r2 ? r2 : r2 + 1;
      return this.insert(a2, t2, n2);
    }
    first() {
      return this.entryAt(0);
    }
    last() {
      return this.entryAt(-1);
    }
    clear() {
      return this.#e = [], super.clear();
    }
    delete(e3) {
      let t2 = super.delete(e3);
      return t2 && this.#e.splice(this.#e.indexOf(e3), 1), t2;
    }
    deleteAt(e3) {
      let t2 = this.keyAt(e3);
      return t2 !== void 0 && this.delete(t2);
    }
    at(e3) {
      let t2 = Tr(this.#e, e3);
      if (t2 !== void 0) return this.get(t2);
    }
    entryAt(e3) {
      let t2 = Tr(this.#e, e3);
      if (t2 !== void 0) return [t2, this.get(t2)];
    }
    indexOf(e3) {
      return this.#e.indexOf(e3);
    }
    keyAt(e3) {
      return Tr(this.#e, e3);
    }
    from(e3, t2) {
      let n2 = this.indexOf(e3);
      if (n2 === -1) return;
      let r2 = n2 + t2;
      return r2 < 0 && (r2 = 0), r2 >= this.size && (r2 = this.size - 1), this.at(r2);
    }
    keyFrom(e3, t2) {
      let n2 = this.indexOf(e3);
      if (n2 === -1) return;
      let r2 = n2 + t2;
      return r2 < 0 && (r2 = 0), r2 >= this.size && (r2 = this.size - 1), this.keyAt(r2);
    }
    find(e3, t2) {
      let n2 = 0;
      for (let r2 of this) {
        if (Reflect.apply(e3, t2, [r2, n2, this])) return r2;
        n2++;
      }
    }
    findIndex(e3, t2) {
      let n2 = 0;
      for (let r2 of this) {
        if (Reflect.apply(e3, t2, [r2, n2, this])) return n2;
        n2++;
      }
      return -1;
    }
    filter(t2, n2) {
      let r2 = [], i2 = 0;
      for (let e3 of this) Reflect.apply(t2, n2, [e3, i2, this]) && r2.push(e3), i2++;
      return new e2(r2);
    }
    map(t2, n2) {
      let r2 = [], i2 = 0;
      for (let e3 of this) r2.push([e3[0], Reflect.apply(t2, n2, [e3, i2, this])]), i2++;
      return new e2(r2);
    }
    reduce(...e3) {
      let [t2, n2] = e3, r2 = e3.length > 1;
      if (!r2 && this.size === 0) throw TypeError(`Reduce of empty OrderedDict with no initial value`);
      let i2 = 0, a2 = n2;
      for (let e4 of this) a2 = i2 === 0 && !r2 ? e4 : Reflect.apply(t2, this, [a2, e4, i2, this]), i2++;
      return a2;
    }
    reduceRight(...e3) {
      let [t2, n2] = e3, r2 = e3.length > 1;
      if (!r2 && this.size === 0) throw TypeError(`Reduce of empty OrderedDict with no initial value`);
      let i2 = n2;
      for (let e4 = this.size - 1; e4 >= 0; e4--) {
        let n3 = this.entryAt(e4);
        i2 = e4 === this.size - 1 && !r2 ? n3 : Reflect.apply(t2, this, [i2, n3, e4, this]);
      }
      return i2;
    }
    sort(e3) {
      if (typeof e3 != `function`) throw TypeError(`OrderedDict.sort requires a compare function`);
      let t2 = [...this.entries()].sort(e3);
      this.clear();
      for (let [e4, n2] of t2) this.set(e4, n2);
      return this;
    }
    toSorted(t2) {
      if (typeof t2 != `function`) throw TypeError(`OrderedDict.toSorted requires a compare function`);
      let n2 = [...this.entries()].sort(t2);
      return new e2(n2);
    }
    toReversed() {
      let t2 = new e2();
      for (let e3 = this.size - 1; e3 >= 0; e3--) {
        let n2 = this.keyAt(e3), r2 = this.get(n2);
        t2.set(n2, r2);
      }
      return t2;
    }
    toSpliced(...t2) {
      let n2 = [...this.entries()];
      return n2.splice(...t2), new e2(n2);
    }
    slice(t2, n2) {
      let r2 = new e2();
      for (let e3 of this.#e.slice(t2, n2)) r2.set(e3, this.get(e3));
      return r2;
    }
    every(e3, t2) {
      let n2 = 0;
      for (let r2 of this) {
        if (!Reflect.apply(e3, t2, [r2, n2, this])) return false;
        n2++;
      }
      return true;
    }
    some(e3, t2) {
      let n2 = 0;
      for (let r2 of this) {
        if (Reflect.apply(e3, t2, [r2, n2, this])) return true;
        n2++;
      }
      return false;
    }
  };
  function Tr(e3, t2) {
    if (`at` in Array.prototype) return Array.prototype.at.call(e3, t2);
    let n2 = Er(e3, t2);
    return n2 === -1 ? void 0 : e3[n2];
  }
  L(Tr, `at`);
  function Er(e3, t2) {
    let n2 = e3.length, r2 = Dr(t2), i2 = r2 >= 0 ? r2 : n2 + r2;
    return i2 < 0 || i2 >= n2 ? -1 : i2;
  }
  L(Er, `toSafeIndex`);
  function Dr(e3) {
    return e3 !== e3 || e3 === 0 ? 0 : Math.trunc(e3);
  }
  L(Dr, `toSafeInteger`);
  function Or(e3) {
    let t2 = e3 + `CollectionProvider`, [n2, r2] = Xn(t2), [i2, a2] = n2(t2);
    i2.displayName = e3 + `CollectionStableContextProvider`;
    let [o2, s2] = n2(t2);
    o2.displayName = e3 + `CollectionStatefulContextProvider`;
    let c2 = L(({ state: e4, ...t3 }) => e4 ? (0, T.jsx)(u2, { ...t3, state: e4 }) : (0, T.jsx)(l2, { ...t3 }), `CollectionProvider`);
    c2.displayName = t2;
    let l2 = L((e4) => {
      let t3 = v2();
      return (0, T.jsx)(u2, { ...e4, state: t3 });
    }, `CollectionInit`);
    l2.displayName = e3 + `CollectionInit`;
    let u2 = L((e4) => {
      let { scope: t3, children: n3, state: r3 } = e4, a3 = _.useRef(null), [s3, c3] = _.useState(null), l3 = nr(a3, c3), [u3, d3] = r3, f3 = _.useRef(new wr()), p3 = _.useCallback(() => {
        let e5 = f3.current;
        return jr(e5) || e5.sort(Mr), e5;
      }, []);
      return _.useEffect(() => {
        if (!s3) return;
        let e5 = Nr(() => {
          d3((e6) => {
            let t4 = e6.toSorted(Mr);
            return t4.some(([t5], n4) => e6.keyAt(n4) !== t5) ? t4 : e6;
          });
        });
        return e5.observe(s3, { childList: true, subtree: true }), () => {
          e5.disconnect();
        };
      }, [s3, d3]), (0, T.jsx)(i2, { scope: t3, collectionElementRef: l3, collectionElementRefObject: a3, getCollection: p3, setCollection: d3, registryRef: f3, children: (0, T.jsx)(o2, { scope: t3, collectionElement: s3, collection: u3, children: n3 }) });
    }, `CollectionProviderImpl`);
    u2.displayName = e3 + `CollectionProviderImpl`;
    let d2 = e3 + `CollectionSlot`, f2 = ar(d2), p2 = _.forwardRef((e4, t3) => {
      let { scope: n3, children: r3 } = e4, i3 = nr(t3, a2(d2, n3).collectionElementRef);
      return (0, T.jsx)(f2, { ref: i3, children: r3 });
    });
    p2.displayName = d2;
    let m2 = e3 + `CollectionItemSlot`, h2 = ar(m2), g2 = _.forwardRef((e4, t3) => {
      let { scope: n3, children: r3, ...i3 } = e4, o3 = _.useRef(null), { setCollection: s3, registryRef: c3 } = a2(m2, n3), l3 = _.useRef(i3);
      kr(l3.current, i3) || (l3.current = i3);
      let u3 = l3.current, d3 = nr(t3, _.useCallback((e5) => {
        let t4 = c3.current;
        e5 ? t4.set(e5, { ...l3.current, element: e5 }) : o3.current && t4.delete(o3.current);
      }, [c3]), o3);
      br(() => {
        let e5 = o3.current, t4 = c3.current;
        e5 && t4.has(e5) && t4.set(e5, { ...u3, element: e5 });
      }, [u3, c3]);
      let f3 = _.useRef(null);
      return _.useEffect(() => {
        let e5 = o3.current, t4 = f3.current;
        ((t4?.element ?? null) !== e5 || e5 && t4?.itemData !== u3) && (f3.current = e5 ? { element: e5, itemData: u3 } : null, s3((n4) => {
          let r4 = new wr(n4);
          return t4 && t4.element !== e5 && r4.delete(t4.element), e5 && r4.set(e5, { ...u3, element: e5 }), r4.sort(Mr);
        }));
      }), _.useEffect(() => () => {
        let e5 = f3.current;
        f3.current = null, e5 && s3((t4) => {
          if (!t4.has(e5.element)) return t4;
          let n4 = new wr(t4);
          return n4.delete(e5.element), n4;
        });
      }, [s3]), (0, T.jsx)(h2, { "data-radix-collection-item": ``, ref: d3, children: r3 });
    });
    g2.displayName = m2;
    function v2() {
      return _.useState(new wr());
    }
    L(v2, `useInitCollection`);
    function y2(t3) {
      let { collection: n3 } = s2(e3 + `CollectionConsumer`, t3);
      return n3;
    }
    L(y2, `useCollection`);
    function b2(t3) {
      let { getCollection: n3 } = a2(e3 + `CollectionConsumer`, t3);
      return n3;
    }
    return L(b2, `useGetCollection`), [{ Provider: c2, Slot: p2, ItemSlot: g2 }, { createCollectionScope: r2, useCollection: y2, useGetCollection: b2, useInitCollection: v2 }];
  }
  L(Or, `createCollection`);
  function kr(e3, t2) {
    if (e3 === t2) return true;
    if (typeof e3 != `object` || typeof t2 != `object` || e3 == null || t2 == null) return false;
    let n2 = Object.keys(e3), r2 = Object.keys(t2);
    if (n2.length !== r2.length) return false;
    for (let r3 of n2) if (!Object.prototype.hasOwnProperty.call(t2, r3) || e3[r3] !== t2[r3]) return false;
    return true;
  }
  L(kr, `shallowEqual`);
  function Ar(e3, t2) {
    return !!(t2.compareDocumentPosition(e3) & Node.DOCUMENT_POSITION_PRECEDING);
  }
  L(Ar, `isElementPreceding`);
  function jr(e3) {
    let t2;
    for (let n2 of e3.keys()) {
      if (t2) {
        let e4 = t2.compareDocumentPosition(n2);
        if (!(e4 & Node.DOCUMENT_POSITION_DISCONNECTED) && e4 & Node.DOCUMENT_POSITION_PRECEDING) return false;
      }
      t2 = n2;
    }
    return true;
  }
  L(jr, `isInDocumentOrder`);
  function Mr(e3, t2) {
    return !e3[1].element || !t2[1].element ? 0 : Ar(e3[1].element, t2[1].element) ? -1 : 1;
  }
  L(Mr, `sortByDocumentPosition`);
  function Nr(e3) {
    return new MutationObserver((t2) => {
      for (let n2 of t2) if (n2.type === `childList`) {
        e3();
        return;
      }
    });
  }
  L(Nr, `getChildListObserver`);
  var Pr = Object.defineProperty;
  var Fr = (e3, t2) => Pr(e3, `name`, { value: t2, configurable: true });
  var Ir = _.useId || (() => void 0);
  var Lr = 0;
  function Rr(e3) {
    let [t2, n2] = _.useState(Ir());
    return br(() => {
      e3 || n2((e4) => e4 ?? String(Lr++));
    }, [e3]), e3 || (t2 ? `radix-${t2}` : ``);
  }
  Fr(Rr, `useId`);
  var zr = c(m(), 1);
  var Br = Object.defineProperty;
  var Vr = (e3, t2) => Br(e3, `name`, { value: t2, configurable: true });
  var Hr = [`a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`, `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`].reduce((e3, t2) => {
    let n2 = ar(`Primitive.${t2}`), r2 = _.forwardRef((e4, r3) => {
      let { asChild: i2, ...a2 } = e4, o2 = i2 ? n2 : t2;
      return typeof window < `u` && (window[/* @__PURE__ */ Symbol.for(`radix-ui`)] = true), (0, T.jsx)(o2, { ...a2, ref: r3 });
    });
    return r2.displayName = `Primitive.${t2}`, { ...e3, [t2]: r2 };
  }, {});
  function Ur(e3, t2) {
    e3 && zr.flushSync(() => e3.dispatchEvent(t2));
  }
  Vr(Ur, `dispatchDiscreteCustomEvent`);
  var Wr = Object.defineProperty;
  var Gr = (e3, t2) => Wr(e3, `name`, { value: t2, configurable: true });
  var Kr = _.useInsertionEffect;
  function qr(e3) {
    let t2 = _.useRef(e3);
    return typeof Kr == `function` ? Kr(() => {
      t2.current = e3;
    }) : br(() => {
      t2.current = e3;
    }), _.useMemo(() => ((...e4) => t2.current?.(...e4)), []);
  }
  Gr(qr, `useCallbackRef`);
  var Jr = Object.defineProperty;
  var Yr = (e3, t2) => Jr(e3, `name`, { value: t2, configurable: true });
  var Xr = _.useEffectEvent;
  var Zr = _.useInsertionEffect;
  function Qr(e3) {
    if (typeof Xr == `function`) return Xr(e3);
    let t2 = _.useRef(() => {
      throw Error(`Cannot call an event handler while rendering.`);
    });
    return typeof Zr == `function` ? Zr(() => {
      t2.current = e3;
    }) : br(() => {
      t2.current = e3;
    }), _.useMemo(() => ((...e4) => t2.current?.(...e4)), []);
  }
  Yr(Qr, `useEffectEvent`);
  var $r = Object.defineProperty;
  var ei = (e3, t2) => $r(e3, `name`, { value: t2, configurable: true });
  var ti = _.useInsertionEffect || br;
  function ni({ prop: e3, defaultProp: t2, onChange: n2 = ei(() => {
  }, `onChange`), caller: r2 }) {
    let [i2, a2, o2] = ri({ defaultProp: t2, onChange: n2 }), s2 = e3 !== void 0;
    return [s2 ? e3 : i2, _.useCallback((t3) => {
      if (s2) {
        let n3 = ii(t3) ? t3(e3) : t3;
        n3 !== e3 && o2.current?.(n3);
      } else a2(t3);
    }, [s2, e3, a2, o2])];
  }
  ei(ni, `useControllableState`);
  function ri({ defaultProp: e3, onChange: t2 }) {
    let [n2, r2] = _.useState(e3), i2 = _.useRef(n2), a2 = _.useRef(t2);
    return ti(() => {
      a2.current = t2;
    }, [t2]), _.useEffect(() => {
      i2.current !== n2 && (a2.current?.(n2), i2.current = n2);
    }, [n2, i2]), [n2, r2, a2];
  }
  ei(ri, `useUncontrolledState`);
  function ii(e3) {
    return typeof e3 == `function`;
  }
  ei(ii, `isFunction`);
  var ai = /* @__PURE__ */ Symbol(`RADIX:SYNC_STATE`);
  function oi(e3, t2, n2, r2) {
    let { prop: i2, defaultProp: a2, onChange: o2, caller: s2 } = t2, c2 = i2 !== void 0, l2 = Qr(o2), u2 = [{ ...n2, state: a2 }];
    r2 && u2.push(r2);
    let [d2, f2] = _.useReducer((t3, n3) => {
      if (n3.type === ai) return { ...t3, state: n3.state };
      let r3 = e3(t3, n3);
      return c2 && !Object.is(r3.state, t3.state) && l2(r3.state), r3;
    }, ...u2), p2 = d2.state, m2 = _.useRef(p2);
    _.useEffect(() => {
      m2.current !== p2 && (m2.current = p2, c2 || l2(p2));
    }, [p2, m2, c2]);
    let h2 = _.useMemo(() => i2 === void 0 ? d2 : { ...d2, state: i2 }, [d2, i2]);
    return _.useEffect(() => {
      c2 && !Object.is(i2, d2.state) && f2({ type: ai, state: i2 });
    }, [i2, d2.state, c2]), [h2, f2];
  }
  ei(oi, `useControllableStateReducer`);
  var si = Object.defineProperty;
  var ci = (e3, t2) => si(e3, `name`, { value: t2, configurable: true });
  var li = { LTR: `ltr`, RTL: `rtl` };
  var ui = _.createContext(void 0);
  function di(e3) {
    let t2 = _.useContext(ui);
    return e3 || t2 || li.LTR;
  }
  ci(di, `useDirection`);
  var fi = Object.defineProperty;
  var pi = (e3, t2) => fi(e3, `name`, { value: t2, configurable: true });
  var mi = false;
  function hi() {
    let [e3, t2] = _.useState(mi);
    return _.useEffect(() => {
      mi || (mi = true, t2(true));
    }, []), e3;
  }
  pi(hi, `useIsHydrated`);
  var gi = _.useSyncExternalStore;
  function _i() {
    return () => {
    };
  }
  pi(_i, `subscribe`);
  function vi() {
    return gi(_i, () => true, () => false);
  }
  pi(vi, `useIsHydratedModern`);
  var yi = typeof gi == `function` ? vi : hi;
  var bi = Object.defineProperty;
  var xi = (e3, t2) => bi(e3, `name`, { value: t2, configurable: true });
  var Si = `rovingFocusGroup.onEntryFocus`;
  var Ci = { bubbles: false, cancelable: true };
  var wi = `RovingFocusGroup`;
  var [Ti, Ei, Di] = Sr(wi);
  var [Oi, ki] = Xn(wi, [Di]);
  var Ai = { Vertical: `vertical`, Horizontal: `horizontal` };
  var ji = { LTR: `ltr`, RTL: `rtl` };
  var [Mi, Ni] = Oi(wi);
  var Pi = _.forwardRef(xi(function(e3, t2) {
    return (0, T.jsx)(Ti.Provider, { scope: e3.__scopeRovingFocusGroup, children: (0, T.jsx)(Ti.Slot, { scope: e3.__scopeRovingFocusGroup, children: (0, T.jsx)(Fi, { ...e3, ref: t2 }) }) });
  }, `RovingFocusGroup`));
  var Fi = _.forwardRef(xi(function(e3, t2) {
    let { __scopeRovingFocusGroup: n2, orientation: r2, loop: i2 = false, dir: a2, currentTabStopId: o2, defaultCurrentTabStopId: s2, onCurrentTabStopIdChange: c2, onEntryFocus: l2, preventScrollOnEntryFocus: u2 = false, ...d2 } = e3, f2 = _.useRef(null), p2 = nr(t2, f2), m2 = di(a2), [h2, g2] = ni({ prop: o2, defaultProp: s2 ?? null, onChange: c2, caller: wi }), [v2, y2] = _.useState(false), b2 = qr(l2), ee2 = Ei(n2), x2 = _.useRef(false), [te2, S2] = _.useState(0);
    return _.useEffect(() => {
      let e4 = f2.current;
      if (e4) return e4.addEventListener(Si, b2), () => e4.removeEventListener(Si, b2);
    }, [b2]), (0, T.jsx)(Mi, { scope: n2, orientation: r2, dir: m2, loop: i2, currentTabStopId: h2, onItemFocus: _.useCallback((e4) => g2(e4), [g2]), onItemShiftTab: _.useCallback(() => y2(true), []), onFocusableItemAdd: _.useCallback(() => S2((e4) => e4 + 1), []), onFocusableItemRemove: _.useCallback(() => S2((e4) => e4 - 1), []), children: (0, T.jsx)(Hr.div, { tabIndex: v2 || te2 === 0 ? -1 : 0, "data-orientation": r2, ...d2, ref: p2, style: { outline: `none`, ...e3.style }, onMouseDown: Hn(e3.onMouseDown, () => {
      x2.current = true;
    }), onFocus: Hn(e3.onFocus, (e4) => {
      let t3 = !x2.current;
      if (e4.target === e4.currentTarget && t3 && !v2) {
        let t4 = new CustomEvent(Si, Ci);
        if (e4.currentTarget.dispatchEvent(t4), !t4.defaultPrevented) {
          let e5 = ee2().filter((e6) => e6.focusable);
          Vi([e5.find((e6) => e6.active), e5.find((e6) => e6.id === h2), ...e5].filter(Boolean).map((e6) => e6.ref.current), u2);
        }
      }
      x2.current = false;
    }), onBlur: Hn(e3.onBlur, () => y2(false)) }) });
  }, `RovingFocusGroupImpl`));
  var Ii = `RovingFocusGroupItem`;
  var Li = _.forwardRef(xi(function(e3, t2) {
    let { __scopeRovingFocusGroup: n2, focusable: r2 = true, active: i2 = false, tabStopId: a2, children: o2, ...s2 } = e3, c2 = Rr(), l2 = a2 || c2, u2 = Ni(Ii, n2), d2 = u2.currentTabStopId === l2, f2 = Ei(n2), { onFocusableItemAdd: p2, onFocusableItemRemove: m2, currentTabStopId: h2 } = u2, g2 = yi();
    return br(() => {
      if (g2 && r2) return p2(), () => m2();
    }, [g2, r2, p2, m2]), _.useEffect(() => {
      if (!g2 && r2) return p2(), () => m2();
    }, [g2, r2, p2, m2]), (0, T.jsx)(Ti.ItemSlot, { scope: n2, id: l2, focusable: r2, active: i2, children: (0, T.jsx)(Hr.span, { tabIndex: d2 ? 0 : -1, "data-orientation": u2.orientation, ...s2, ref: t2, onMouseDown: Hn(e3.onMouseDown, (e4) => {
      r2 ? u2.onItemFocus(l2) : e4.preventDefault();
    }), onFocus: Hn(e3.onFocus, () => u2.onItemFocus(l2)), onKeyDown: Hn(e3.onKeyDown, (e4) => {
      if (e4.key === `Tab` && e4.shiftKey) {
        u2.onItemShiftTab();
        return;
      }
      if (e4.target !== e4.currentTarget) return;
      let t3 = Bi(e4, u2.orientation, u2.dir);
      if (t3 !== void 0) {
        if (e4.metaKey || e4.ctrlKey || e4.altKey || e4.shiftKey) return;
        e4.preventDefault();
        let n3 = f2().filter((e5) => e5.focusable).map((e5) => e5.ref.current);
        if (t3 === `last`) n3.reverse();
        else if (t3 === `prev` || t3 === `next`) {
          t3 === `prev` && n3.reverse();
          let r3 = n3.indexOf(e4.currentTarget);
          n3 = u2.loop ? Hi(n3, r3 + 1) : n3.slice(r3 + 1);
        }
        setTimeout(() => Vi(n3));
      }
    }), children: typeof o2 == `function` ? o2({ isCurrentTabStop: d2, hasTabStop: h2 != null }) : o2 }) });
  }, `RovingFocusGroupItem`));
  var Ri = { ArrowLeft: `prev`, ArrowUp: `prev`, ArrowRight: `next`, ArrowDown: `next`, PageUp: `first`, Home: `first`, PageDown: `last`, End: `last` };
  function zi(e3, t2) {
    return t2 === ji.RTL ? e3 === `ArrowLeft` ? `ArrowRight` : e3 === `ArrowRight` ? `ArrowLeft` : e3 : e3;
  }
  xi(zi, `getDirectionAwareKey`);
  function Bi(e3, t2, n2) {
    let r2 = zi(e3.key, n2);
    if (!(t2 === Ai.Vertical && [`ArrowLeft`, `ArrowRight`].includes(r2)) && !(t2 === Ai.Horizontal && [`ArrowUp`, `ArrowDown`].includes(r2))) return Ri[r2];
  }
  xi(Bi, `getFocusIntent`);
  function Vi(e3, t2 = false) {
    let n2 = document.activeElement;
    for (let r2 of e3) if (r2 === n2 || (r2.focus({ preventScroll: t2 }), document.activeElement !== n2)) return;
  }
  xi(Vi, `focusFirst`);
  function Hi(e3, t2) {
    return e3.map((n2, r2) => e3[(t2 + r2) % e3.length]);
  }
  xi(Hi, `wrapArray`);
  var Ui = Object.defineProperty;
  var Wi = (e3, t2) => Ui(e3, `name`, { value: t2, configurable: true });
  function Gi(e3, t2) {
    return _.useReducer((e4, n2) => t2[e4][n2] ?? e4, e3);
  }
  Wi(Gi, `useStateMachine`);
  var Ki = Wi((e3) => {
    let { present: t2, children: n2 } = e3, r2 = qi(t2), i2 = typeof n2 == `function` ? n2({ present: r2.isPresent }) : _.Children.only(n2), a2 = Yi(r2.ref, Zi(i2));
    return typeof n2 == `function` || r2.isPresent ? _.cloneElement(i2, { ref: a2 }) : null;
  }, `Presence`);
  function qi(e3) {
    let [t2, n2] = _.useState(), r2 = _.useRef(null), i2 = _.useRef(e3), a2 = _.useRef(`none`), o2 = _.useRef(void 0), [s2, c2] = Gi(e3 ? `mounted` : `unmounted`, { mounted: { UNMOUNT: `unmounted`, ANIMATION_OUT: `unmountSuspended` }, unmountSuspended: { MOUNT: `mounted`, ANIMATION_END: `unmounted` }, unmounted: { MOUNT: `mounted` } });
    return _.useEffect(() => {
      s2 === `mounted` ? (a2.current = o2.current ?? Xi(r2.current), o2.current = void 0) : a2.current = `none`;
    }, [s2]), br(() => {
      let t3 = r2.current, n3 = i2.current;
      if (n3 !== e3) {
        let r3 = a2.current, s3 = Xi(t3);
        e3 ? (o2.current = s3, c2(`MOUNT`)) : s3 === `none` || t3?.display === `none` ? c2(`UNMOUNT`) : c2(n3 && r3 !== s3 ? `ANIMATION_OUT` : `UNMOUNT`), i2.current = e3;
      }
    }, [e3, c2]), br(() => {
      if (t2) {
        let e4, n3 = t2.ownerDocument.defaultView ?? window, o3 = Wi((a3) => {
          let o4 = Xi(r2.current).includes(CSS.escape(a3.animationName));
          if (a3.target === t2 && o4 && (c2(`ANIMATION_END`), !i2.current)) {
            let r3 = t2.style.animationFillMode;
            t2.style.animationFillMode = `forwards`, e4 = n3.setTimeout(() => {
              t2.style.animationFillMode === `forwards` && (t2.style.animationFillMode = r3);
            });
          }
        }, `handleAnimationEnd`), s3 = Wi((e5) => {
          e5.target === t2 && (a2.current = Xi(r2.current));
        }, `handleAnimationStart`);
        return t2.addEventListener(`animationstart`, s3), t2.addEventListener(`animationcancel`, o3), t2.addEventListener(`animationend`, o3), () => {
          n3.clearTimeout(e4), t2.removeEventListener(`animationstart`, s3), t2.removeEventListener(`animationcancel`, o3), t2.removeEventListener(`animationend`, o3);
        };
      }
      c2(`ANIMATION_END`);
    }, [t2, c2]), { isPresent: [`mounted`, `unmountSuspended`].includes(s2), ref: _.useCallback((e4) => {
      if (e4) {
        let t3 = getComputedStyle(e4);
        r2.current = t3, o2.current = Xi(t3);
      } else r2.current = null;
      n2(e4);
    }, []) };
  }
  Wi(qi, `usePresence`);
  function Ji(e3, t2) {
    if (typeof e3 == `function`) return e3(t2);
    e3 != null && (e3.current = t2);
  }
  Wi(Ji, `setRef`);
  function Yi(...e3) {
    let t2 = _.useRef(e3);
    return t2.current = e3, _.useCallback((e4) => {
      let n2 = t2.current, r2 = false, i2 = n2.map((t3) => {
        let n3 = Ji(t3, e4);
        return !r2 && typeof n3 == `function` && (r2 = true), n3;
      });
      if (r2) return () => {
        for (let e5 = 0; e5 < i2.length; e5++) {
          let t3 = i2[e5];
          typeof t3 == `function` ? t3() : Ji(n2[e5], null);
        }
      };
    }, []);
  }
  Wi(Yi, `useStableComposedRefs`);
  function Xi(e3) {
    return e3?.animationName || `none`;
  }
  Wi(Xi, `getAnimationName`);
  function Zi(e3) {
    let t2 = Object.getOwnPropertyDescriptor(e3.props, `ref`)?.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning;
    return n2 ? e3.ref : (t2 = Object.getOwnPropertyDescriptor(e3, `ref`)?.get, n2 = t2 && `isReactWarning` in t2 && t2.isReactWarning, n2 ? e3.props.ref : e3.props.ref || e3.ref);
  }
  Wi(Zi, `getElementRef`);
  var Qi = Object.defineProperty;
  var $i = (e3, t2) => Qi(e3, `name`, { value: t2, configurable: true });
  var ea = { Automatic: `automatic`, Manual: `manual` };
  var ta = `Tabs`;
  var [na, ra] = Xn(ta, [ki]);
  var ia = ki();
  var [aa, R] = na(ta);
  var z = _.forwardRef($i(function(e3, t2) {
    let { __scopeTabs: n2, value: r2, onValueChange: i2, defaultValue: a2, orientation: o2 = `horizontal`, dir: s2, activationMode: c2 = ea.Automatic, ...l2 } = e3, u2 = di(s2), [d2, f2] = ni({ prop: r2, onChange: i2, defaultProp: a2 ?? ``, caller: ta });
    return (0, T.jsx)(aa, { scope: n2, baseId: Rr(), value: d2, onValueChange: f2, orientation: o2, dir: u2, activationMode: c2, children: (0, T.jsx)(Hr.div, { dir: u2, "data-orientation": o2, ...l2, ref: t2 }) });
  }, `Tabs`));
  var oa = `TabsList`;
  var sa = _.forwardRef($i(function(e3, t2) {
    let { __scopeTabs: n2, loop: r2 = true, ...i2 } = e3, a2 = R(oa, n2), o2 = ia(n2);
    return (0, T.jsx)(Pi, { asChild: true, ...o2, orientation: a2.orientation, dir: a2.dir, loop: r2, children: (0, T.jsx)(Hr.div, { role: `tablist`, "aria-orientation": a2.orientation, ...i2, ref: t2 }) });
  }, `TabsList`));
  var ca = `TabsTrigger`;
  var la = _.forwardRef($i(function(e3, t2) {
    let { __scopeTabs: n2, value: r2, disabled: i2 = false, ...a2 } = e3, o2 = R(ca, n2), s2 = ia(n2), c2 = fa(o2.baseId, r2), l2 = pa(o2.baseId, r2), u2 = r2 === o2.value;
    return (0, T.jsx)(Li, { asChild: true, ...s2, focusable: !i2, active: u2, children: (0, T.jsx)(Hr.button, { type: `button`, role: `tab`, "aria-selected": u2, "aria-controls": l2, "data-state": u2 ? `active` : `inactive`, "data-disabled": i2 ? `` : void 0, disabled: i2, id: c2, ...a2, ref: t2, onMouseDown: Hn(e3.onMouseDown, (e4) => {
      !i2 && e4.button === 0 && e4.ctrlKey === false ? (e4.currentTarget.focus(), o2.onValueChange(r2)) : e4.preventDefault();
    }), onKeyDown: Hn(e3.onKeyDown, (e4) => {
      i2 || e4.target !== e4.currentTarget || [` `, `Enter`].includes(e4.key) && o2.onValueChange(r2);
    }), onFocus: Hn(e3.onFocus, () => {
      let e4 = o2.activationMode !== ea.Manual;
      !u2 && !i2 && e4 && o2.onValueChange(r2);
    }) }) });
  }, `TabsTrigger`));
  var ua = `TabsContent`;
  var da = _.forwardRef($i(function(e3, t2) {
    let { __scopeTabs: n2, value: r2, forceMount: i2, children: a2, ...o2 } = e3, s2 = R(ua, n2), c2 = fa(s2.baseId, r2), l2 = pa(s2.baseId, r2), u2 = r2 === s2.value, d2 = _.useRef(u2);
    return _.useEffect(() => {
      let e4 = requestAnimationFrame(() => d2.current = false);
      return () => cancelAnimationFrame(e4);
    }, []), (0, T.jsx)(Ki, { present: i2 || u2, children: ({ present: n3 }) => (0, T.jsx)(Hr.div, { "data-state": u2 ? `active` : `inactive`, "data-orientation": s2.orientation, role: `tabpanel`, "aria-labelledby": c2, hidden: !n3, id: l2, tabIndex: 0, ...o2, ref: t2, style: { ...e3.style, animationDuration: d2.current ? `0s` : void 0 }, children: n3 && a2 }) });
  }, `TabsContent`));
  function fa(e3, t2) {
    return `${e3}-trigger-${t2}`;
  }
  $i(fa, `makeTriggerId`);
  function pa(e3, t2) {
    return `${e3}-content-${t2}`;
  }
  $i(pa, `makeContentId`);
  function ma({ className: e3, ...t2 }) {
    return (0, T.jsx)(z, { className: kt(`flex flex-col gap-6`, e3), ...t2 });
  }
  function ha({ className: e3, ...t2 }) {
    return (0, T.jsx)(sa, { className: kt(`inline-flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-arena/60 p-1`, e3), ...t2 });
  }
  function ga({ className: e3, ...t2 }) {
    return (0, T.jsx)(la, { className: kt(`rounded-full px-3 py-1.5 text-sm text-muted transition-colors data-[state=active]:bg-lime data-[state=active]:text-arena data-[state=active]:shadow-sm hover:text-ink`, e3), ...t2 });
  }
  function _a({ className: e3, ...t2 }) {
    return (0, T.jsx)(da, { className: kt(`outline-none`, e3), ...t2 });
  }
  var va = `./`;
  function ya(e3) {
    let t2 = (e3 || `#/`).replace(/^#/, ``).split(`/`).filter(Boolean);
    return t2[0] === `agent` && t2[1] ? { tab: `agent`, agent: decodeURIComponent(t2[1]) } : t2[0] && [`overview`, `leaderboard`, `evolution`, `pareto`, `tasks`, `replay`, `findings`].includes(t2[0]) ? { tab: t2[0], agent: null } : { tab: `overview`, agent: null };
  }
  function ba() {
    let [e3, t2] = (0, _.useState)(() => ya(window.location.hash));
    return (0, _.useEffect)(() => {
      let e4 = () => t2(ya(window.location.hash));
      return window.addEventListener(`hashchange`, e4), () => window.removeEventListener(`hashchange`, e4);
    }, []), e3;
  }
  function xa() {
    let e3 = ba(), [t2, n2] = (0, _.useState)(`mock`), [r2, i2] = (0, _.useState)(false), [a2, o2] = (0, _.useState)(null), [s2, c2] = (0, _.useState)(null), [l2, u2] = (0, _.useState)(null), [d2, f2] = (0, _.useState)(null);
    (0, _.useEffect)(() => {
      fetch(`${va}data/live.json`).then((e4) => i2(e4.ok)).catch(() => i2(false));
    }, []), (0, _.useEffect)(() => {
      let e4 = false, n3 = t2 === `live` ? `${va}data/live.json` : `${va}data/tournament.json`;
      return o2(null), c2(null), fetch(n3).then((e5) => {
        if (!e5.ok) throw Error(`HTTP ${e5.status}`);
        return e5.json();
      }).then((t3) => {
        e4 || (o2(t3), f2(t3.highlights?.sample_trace_id ?? t3.traces[0]?.id ?? null));
      }).catch((t3) => {
        e4 || c2(t3 instanceof Error ? t3.message : `Unknown error`);
      }), () => {
        e4 = true;
      };
    }, [t2]);
    function p2(e4) {
      window.location.hash = e4 === `overview` ? `#/` : `#/${e4}`;
    }
    function m2(e4) {
      f2(e4), p2(`replay`);
    }
    return (0, T.jsxs)(`div`, { className: `mx-auto min-h-screen max-w-6xl px-4 py-6 sm:px-6 sm:py-8`, children: [(0, T.jsxs)(`header`, { className: `mb-8 flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between`, children: [(0, T.jsxs)(`div`, { children: [(0, T.jsx)(`p`, { className: `font-mono text-[11px] tracking-[0.28em] text-lime`, children: `GREYHAT INC \xB7 AGENT ARENA` }), (0, T.jsx)(`h1`, { className: `font-serif text-4xl tracking-tight text-ink sm:text-5xl`, children: `The season so far` })] }), (0, T.jsxs)(`div`, { className: `flex flex-col items-start gap-2 sm:items-end`, children: [(0, T.jsx)(`p`, { className: `max-w-sm text-sm leading-relaxed text-muted`, children: `Coding agents compete on hidden tests, take two TrueSkill ratings, and the losers get a new genome.` }), r2 ? (0, T.jsxs)(`div`, { className: `flex gap-1 rounded-full border border-line p-1 text-xs`, children: [(0, T.jsx)(`button`, { type: `button`, className: `rounded-full px-3 py-1 ${t2 === `mock` ? `bg-lime text-arena` : `text-muted`}`, onClick: () => n2(`mock`), children: `Mock season` }), (0, T.jsx)(`button`, { type: `button`, className: `rounded-full px-3 py-1 ${t2 === `live` ? `bg-lime text-arena` : `text-muted`}`, onClick: () => n2(`live`), children: `Local model` })] }) : null] })] }), s2 ? (0, T.jsx)(Ca, { message: s2 }) : null, !s2 && !a2 ? (0, T.jsx)(Sa, {}) : null, a2 ? (0, T.jsxs)(ma, { value: e3.tab === `agent` ? `agent` : e3.tab, onValueChange: p2, children: [(0, T.jsxs)(ha, { "aria-label": `Dashboard sections`, children: [(0, T.jsx)(ga, { value: `overview`, children: `Overview` }), (0, T.jsx)(ga, { value: `leaderboard`, children: `Leaderboard` }), (0, T.jsx)(ga, { value: `pareto`, children: `Pareto` }), (0, T.jsx)(ga, { value: `evolution`, children: `Evolution` }), (0, T.jsx)(ga, { value: `tasks`, children: `Tasks` }), (0, T.jsx)(ga, { value: `replay`, children: `Replay` }), (0, T.jsx)(ga, { value: `findings`, children: `Findings` })] }), (0, T.jsx)(_a, { value: `overview`, children: (0, T.jsx)(nn, { data: a2, focus: l2, onFocus: u2, onOpenTrace: m2 }) }), (0, T.jsx)(_a, { value: `leaderboard`, children: (0, T.jsx)(tn, { data: a2, focus: l2, onFocus: u2 }) }), (0, T.jsx)(_a, { value: `pareto`, children: (0, T.jsx)(an, { data: a2 }) }), (0, T.jsx)(_a, { value: `evolution`, children: (0, T.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [(0, T.jsx)(re, { data: a2 }), (0, T.jsx)(Zt, { data: a2 })] }) }), (0, T.jsx)(_a, { value: `tasks`, children: (0, T.jsx)(Ln, { data: a2, onOpenTrace: m2 }) }), (0, T.jsx)(_a, { value: `replay`, children: (0, T.jsx)(An, { data: a2, traceId: d2 ?? a2.highlights.sample_trace_id, onTrace: f2 }) }), (0, T.jsx)(_a, { value: `findings`, children: (0, T.jsx)(Ht, { data: a2 }) }), (0, T.jsx)(_a, { value: `agent`, children: e3.agent ? (0, T.jsx)(Pt, { data: a2, lineageId: e3.agent, onOpenTrace: m2 }) : null })] }) : null, (0, T.jsxs)(`footer`, { className: `mt-10 border-t border-line pt-4 text-xs text-muted`, children: [`A GreyHat Inc project. Static build, ready for GitHub Pages. Agent pages are hash links, for example`, ` `, (0, T.jsx)(`span`, { className: `font-mono`, children: `#/agent/critic` }), `. MIT licensed.`] })] });
  }
  function Sa() {
    return (0, T.jsxs)(`div`, { className: `flex flex-col gap-3`, "aria-busy": `true`, "aria-live": `polite`, children: [(0, T.jsx)(`p`, { className: `text-sm text-muted`, children: `Loading the recorded season\u2026` }), (0, T.jsx)(`div`, { className: `h-28 animate-pulse rounded-2xl bg-panel` }), (0, T.jsx)(`div`, { className: `h-64 animate-pulse rounded-2xl bg-panel` })] });
  }
  function Ca({ message: e3 }) {
    return (0, T.jsxs)(`div`, { className: `rounded-2xl border border-coral/40 bg-coral/10 px-5 py-5`, children: [(0, T.jsx)(`h2`, { className: `font-serif text-2xl`, children: `The season file did not load` }), (0, T.jsxs)(`p`, { className: `mt-2 text-sm text-muted`, children: [e3, `. Export a tournament with`, ` `, (0, T.jsx)(`span`, { className: `font-mono text-ink`, children: `agent-arena export runs/demo -o dashboard/public/data/tournament.json` }), ` and reload.`] })] });
  }
  (0, v.createRoot)(document.getElementById(`root`)).render((0, T.jsx)(_.StrictMode, { children: (0, T.jsx)(xa, {}) }));
})();
