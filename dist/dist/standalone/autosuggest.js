!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('React')))
    : 'function' == typeof define && define.amd
    ? define(['React'], t)
    : 'object' == typeof exports
    ? (exports.Autosuggest = t(require('React')))
    : (e.Autosuggest = t(e.React));
})(window, function (e) {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 5))
    );
  })([
    function (t, n) {
      t.exports = e;
    },
    function (e, t, n) {
      e.exports = n(6)();
    },
    function (e, t, n) {
      'use strict';
      e.exports = function (e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = e.length;
        if (t.length !== n) return !1;
        for (var o = 0; o < n; o++) if (e[o] !== t[o]) return !1;
        return !0;
      };
    },
    function (e, t, n) {
      'use strict';
      var o = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              o = !0,
              r = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(o = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              (r = !0), (i = e);
            } finally {
              try {
                !o && s.return && s.return();
              } finally {
                if (r) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
      e.exports = function (e) {
        var t = e.data,
          n = e.multiSection;
        function r(e) {
          var r = o(e, 2),
            i = r[0],
            u = r[1];
          return n
            ? null === u || u === t[i] - 1
              ? null ===
                (i = (function (e) {
                  for (null === e ? (e = 0) : e++; e < t.length && 0 === t[e]; )
                    e++;
                  return e === t.length ? null : e;
                })(i))
                ? [null, null]
                : [i, 0]
              : [i, u + 1]
            : 0 === t || u === t - 1
            ? [null, null]
            : null === u
            ? [null, 0]
            : [null, u + 1];
        }
        return {
          next: r,
          prev: function (e) {
            var r = o(e, 2),
              i = r[0],
              u = r[1];
            return n
              ? null === u || 0 === u
                ? null ===
                  (i = (function (e) {
                    for (
                      null === e ? (e = t.length - 1) : e--;
                      e >= 0 && 0 === t[e];

                    )
                      e--;
                    return -1 === e ? null : e;
                  })(i))
                  ? [null, null]
                  : [i, t[i] - 1]
                : [i, u - 1]
              : 0 === t || 0 === u
              ? [null, null]
              : null === u
              ? [null, t - 1]
              : [null, u - 1];
          },
          isLast: function (e) {
            return null === r(e)[1];
          },
        };
      };
    },
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var o = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              o = !0,
              r = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(o = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              (r = !0), (i = e);
            } finally {
              try {
                !o && s.return && s.return();
              } finally {
                if (r) throw i;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      };
      function r(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return Array.from(e);
      }
      var i,
        u = n(8),
        s = (i = u) && i.__esModule ? i : { default: i },
        c = function (e) {
          return e;
        };
      (t.default = function (e) {
        var t = Array.isArray(e) && 2 === e.length ? e : [e, null],
          n = o(t, 2),
          i = n[0],
          u = n[1];
        return function (e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1;
            o < t;
            o++
          )
            n[o - 1] = arguments[o];
          var a = n
            .map(function (e) {
              return i[e];
            })
            .filter(c);
          return 'string' == typeof a[0] || 'function' == typeof u
            ? { key: e, className: u ? u.apply(void 0, r(a)) : a.join(' ') }
            : { key: e, style: s.default.apply(void 0, [{}].concat(r(a))) };
        };
      }),
        (e.exports = t.default);
    },
    function (e, t, n) {
      e.exports = n(9).default;
    },
    function (e, t, n) {
      'use strict';
      var o = n(7);
      function r() {}
      function i() {}
      (i.resetWarningCache = r),
        (e.exports = function () {
          function e(e, t, n, r, i, u) {
            if (u !== o) {
              var s = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
              );
              throw ((s.name = 'Invariant Violation'), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: r,
          };
          return (n.PropTypes = n), n;
        });
    },
    function (e, t, n) {
      'use strict';
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    },
    function (e, t, n) {
      'use strict';
      var o = Object.prototype.propertyIsEnumerable;
      function r(e) {
        if (null == e)
          throw new TypeError(
            'Object.assign cannot be called with null or undefined'
          );
        return Object(e);
      }
      function i(e) {
        var t = Object.getOwnPropertyNames(e);
        return (
          Object.getOwnPropertySymbols &&
            (t = t.concat(Object.getOwnPropertySymbols(e))),
          t.filter(function (t) {
            return o.call(e, t);
          })
        );
      }
      e.exports =
        Object.assign ||
        function (e, t) {
          for (var n, o, u = r(e), s = 1; s < arguments.length; s++) {
            (n = arguments[s]), (o = i(Object(n)));
            for (var c = 0; c < o.length; c++) u[o[c]] = n[o[c]];
          }
          return u;
        };
    },
    function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, 'default', function () {
          return ve;
        });
      var o = n(0),
        r = n.n(o),
        i = (n(1), n(2)),
        u = n.n(i),
        s = n(3),
        c = n.n(s),
        a = n(4),
        l = n.n(a);
      function g(e) {
        return (g =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function f(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        if (e === t) return !1;
        var o = Object.keys(e),
          r = Object.keys(t);
        if (o.length !== r.length) return !0;
        var i,
          u,
          s = {};
        for (i = 0, u = n.length; i < u; i++) s[n[i]] = !0;
        for (i = 0, u = o.length; i < u; i++) {
          var c = o[i],
            a = e[c],
            l = t[c];
          if (a !== l) {
            if (
              !s[c] ||
              null === a ||
              null === l ||
              'object' !== g(a) ||
              'object' !== g(l)
            )
              return !0;
            var f = Object.keys(a),
              p = Object.keys(l);
            if (f.length !== p.length) return !0;
            for (var h = 0, d = f.length; h < d; h++) {
              var y = f[h];
              if (a[y] !== l[y]) return !0;
            }
          }
        }
        return !1;
      }
      function p(e) {
        return (p =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function d(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function y(e, t) {
        return !t || ('object' !== p(t) && 'function' != typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            })(e)
          : t;
      }
      function m() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function v(e) {
        return (v = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function b(e, t) {
        return (b =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var S = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && b(e, t);
        })(s, e);
        var t,
          n,
          o,
          i,
          u =
            ((t = s),
            function () {
              var e,
                n = v(t);
              if (m()) {
                var o = v(this).constructor;
                e = Reflect.construct(n, arguments, o);
              } else e = n.apply(this, arguments);
              return y(this, e);
            });
        function s() {
          return h(this, s), u.apply(this, arguments);
        }
        return (
          (n = s),
          (o = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.section,
                  n = e.renderSectionTitle,
                  o = e.theme,
                  i = e.sectionKeyPrefix,
                  u = n(t);
                return u
                  ? r.a.createElement(
                      'div',
                      o(''.concat(i, 'title'), 'sectionTitle'),
                      u
                    )
                  : null;
              },
            },
          ]) && d(n.prototype, o),
          i && d(n, i),
          s
        );
      })(o.Component);
      function O(e) {
        return (O =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function I() {
        return (I =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function j(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (n = i[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function P(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function _(e, t) {
        return !t || ('object' !== O(t) && 'function' != typeof t) ? C(e) : t;
      }
      function C(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function k() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function D(e) {
        return (D = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function E(e, t) {
        return (E =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function R(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      S.propTypes = {};
      var T = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && E(e, t);
        })(s, e);
        var t,
          n,
          o,
          i,
          u =
            ((t = s),
            function () {
              var e,
                n = D(t);
              if (k()) {
                var o = D(this).constructor;
                e = Reflect.construct(n, arguments, o);
              } else e = n.apply(this, arguments);
              return _(this, e);
            });
        function s() {
          var e;
          P(this, s);
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          return (
            R(
              C((e = u.call.apply(u, [this].concat(n)))),
              'storeItemReference',
              function (t) {
                null !== t && (e.item = t);
              }
            ),
            R(C(e), 'onMouseEnter', function (t) {
              var n = e.props,
                o = n.sectionIndex,
                r = n.itemIndex;
              e.props.onMouseEnter(t, { sectionIndex: o, itemIndex: r });
            }),
            R(C(e), 'onMouseLeave', function (t) {
              var n = e.props,
                o = n.sectionIndex,
                r = n.itemIndex;
              e.props.onMouseLeave(t, { sectionIndex: o, itemIndex: r });
            }),
            R(C(e), 'onMouseDown', function (t) {
              var n = e.props,
                o = n.sectionIndex,
                r = n.itemIndex;
              e.props.onMouseDown(t, { sectionIndex: o, itemIndex: r });
            }),
            R(C(e), 'onClick', function (t) {
              var n = e.props,
                o = n.sectionIndex,
                r = n.itemIndex;
              e.props.onClick(t, { sectionIndex: o, itemIndex: r });
            }),
            e
          );
        }
        return (
          (n = s),
          (o = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props, ['renderItemData']);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.isHighlighted,
                  n = e.item,
                  o = e.renderItem,
                  i = e.renderItemData,
                  u = j(e, [
                    'isHighlighted',
                    'item',
                    'renderItem',
                    'renderItemData',
                  ]);
                return (
                  delete u.sectionIndex,
                  delete u.itemIndex,
                  'function' == typeof u.onMouseEnter &&
                    (u.onMouseEnter = this.onMouseEnter),
                  'function' == typeof u.onMouseLeave &&
                    (u.onMouseLeave = this.onMouseLeave),
                  'function' == typeof u.onMouseDown &&
                    (u.onMouseDown = this.onMouseDown),
                  'function' == typeof u.onClick && (u.onClick = this.onClick),
                  r.a.createElement(
                    'li',
                    I({ role: 'option' }, u, { ref: this.storeItemReference }),
                    o(
                      n,
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? w(Object(n), !0).forEach(function (t) {
                                R(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : w(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })({ isHighlighted: t }, i)
                    )
                  )
                );
              },
            },
          ]) && x(n.prototype, o),
          i && x(n, i),
          s
        );
      })(o.Component);
      function M(e) {
        return (M =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function H() {
        return (H =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function A(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function U(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function L(e, t) {
        return !t || ('object' !== M(t) && 'function' != typeof t) ? B(e) : t;
      }
      function B(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function K() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function q(e) {
        return (q = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function V(e, t) {
        return (V =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function N(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      T.propTypes = {};
      var W = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && V(e, t);
        })(s, e);
        var t,
          n,
          o,
          i,
          u =
            ((t = s),
            function () {
              var e,
                n = q(t);
              if (K()) {
                var o = q(this).constructor;
                e = Reflect.construct(n, arguments, o);
              } else e = n.apply(this, arguments);
              return L(this, e);
            });
        function s() {
          var e;
          A(this, s);
          for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
          return (
            N(
              B((e = u.call.apply(u, [this].concat(n)))),
              'storeHighlightedItemReference',
              function (t) {
                e.props.onHighlightedItemChange(null === t ? null : t.item);
              }
            ),
            e
          );
        }
        return (
          (n = s),
          (o = [
            {
              key: 'shouldComponentUpdate',
              value: function (e) {
                return f(e, this.props, ['itemProps']);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.items,
                  o = t.itemProps,
                  i = t.renderItem,
                  u = t.renderItemData,
                  s = t.sectionIndex,
                  c = t.highlightedItemIndex,
                  a = t.getItemId,
                  l = t.theme,
                  g = t.keyPrefix,
                  f = null === s ? g : ''.concat(g, 'section-').concat(s, '-'),
                  p = 'function' == typeof o;
                return r.a.createElement(
                  'ul',
                  H(
                    { role: 'listbox' },
                    l(''.concat(f, 'items-list'), 'itemsList')
                  ),
                  n.map(function (t, n) {
                    var g = 0 === n,
                      h = n === c,
                      d = ''.concat(f, 'item-').concat(n),
                      y = p ? o({ sectionIndex: s, itemIndex: n }) : o,
                      m = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? F(Object(n), !0).forEach(function (t) {
                                N(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n)
                              )
                            : F(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t)
                                );
                              });
                        }
                        return e;
                      })(
                        { id: a(s, n), 'aria-selected': h },
                        l(d, 'item', g && 'itemFirst', h && 'itemHighlighted'),
                        {},
                        y
                      );
                    return (
                      h && (m.ref = e.storeHighlightedItemReference),
                      r.a.createElement(
                        T,
                        H({}, m, {
                          sectionIndex: s,
                          isHighlighted: h,
                          itemIndex: n,
                          item: t,
                          renderItem: i,
                          renderItemData: u,
                        })
                      )
                    );
                  })
                );
              },
            },
          ]) && U(n.prototype, o),
          i && U(n, i),
          s
        );
      })(o.Component);
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                oe(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function $(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var n = [],
              o = !0,
              r = !1,
              i = void 0;
            try {
              for (
                var u, s = e[Symbol.iterator]();
                !(o = (u = s.next()).done) &&
                (n.push(u.value), !t || n.length !== t);
                o = !0
              );
            } catch (e) {
              (r = !0), (i = e);
            } finally {
              try {
                o || null == s.return || s.return();
              } finally {
                if (r) throw i;
              }
            }
            return n;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return z(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(n);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return z(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function z(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function G(e) {
        return (G =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function J(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function X(e, t) {
        return !t || ('object' !== G(t) && 'function' != typeof t) ? Z(e) : t;
      }
      function Z(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function ee() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function te(e) {
        return (te = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ne(e, t) {
        return (ne =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function oe(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      N(W, 'defaultProps', { sectionIndex: null }), (W.propTypes = {});
      var re = {},
        ie = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && ne(e, t);
          })(s, e);
          var t,
            n,
            o,
            i,
            u =
              ((t = s),
              function () {
                var e,
                  n = te(t);
                if (ee()) {
                  var o = te(this).constructor;
                  e = Reflect.construct(n, arguments, o);
                } else e = n.apply(this, arguments);
                return X(this, e);
              });
          function s(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, s),
              oe(Z((t = u.call(this, e))), 'storeInputReference', function (e) {
                null !== e && (t.input = e);
                var n = t.props.inputProps.ref;
                n &&
                  ('function' == typeof n
                    ? n(e)
                    : 'object' === G(n) &&
                      Object.prototype.hasOwnProperty.call(n, 'current') &&
                      (n.current = e));
              }),
              oe(Z(t), 'storeItemsContainerReference', function (e) {
                null !== e && (t.itemsContainer = e);
              }),
              oe(Z(t), 'onHighlightedItemChange', function (e) {
                t.highlightedItem = e;
              }),
              oe(Z(t), 'getItemId', function (e, n) {
                if (null === n) return null;
                var o = t.props.id,
                  r = null === e ? '' : 'section-'.concat(e);
                return 'react-autowhatever-'
                  .concat(o, '-')
                  .concat(r, '-item-')
                  .concat(n);
              }),
              oe(Z(t), 'onFocus', function (e) {
                var n = t.props.inputProps;
                t.setState({ isInputFocused: !0 }), n.onFocus && n.onFocus(e);
              }),
              oe(Z(t), 'onBlur', function (e) {
                var n = t.props.inputProps;
                t.setState({ isInputFocused: !1 }), n.onBlur && n.onBlur(e);
              }),
              oe(Z(t), 'onKeyDown', function (e) {
                var n = t.props,
                  o = n.inputProps,
                  r = n.highlightedSectionIndex,
                  i = n.highlightedItemIndex,
                  u = e.keyCode;
                switch (u) {
                  case 40:
                  case 38:
                    var s = 40 === u ? 'next' : 'prev',
                      c = $(t.sectionIterator[s]([r, i]), 2),
                      a = c[0],
                      l = c[1];
                    o.onKeyDown(e, {
                      newHighlightedSectionIndex: a,
                      newHighlightedItemIndex: l,
                    });
                    break;
                  default:
                    o.onKeyDown(e, {
                      highlightedSectionIndex: r,
                      highlightedItemIndex: i,
                    });
                }
              }),
              (t.highlightedItem = null),
              (t.state = { isInputFocused: !1 }),
              t.setSectionsItems(e),
              t.setSectionIterator(e),
              t.setTheme(e),
              t
            );
          }
          return (
            (n = s),
            (o = [
              {
                key: 'componentDidMount',
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  e.items !== this.props.items && this.setSectionsItems(e),
                    (e.items === this.props.items &&
                      e.multiSection === this.props.multiSection) ||
                      this.setSectionIterator(e),
                    e.theme !== this.props.theme && this.setTheme(e);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.ensureHighlightedItemIsVisible();
                },
              },
              {
                key: 'setSectionsItems',
                value: function (e) {
                  e.multiSection &&
                    ((this.sectionsItems = e.items.map(function (t) {
                      return e.getSectionItems(t);
                    })),
                    (this.sectionsLengths = this.sectionsItems.map(function (
                      e
                    ) {
                      return e.length;
                    })),
                    (this.allSectionsAreEmpty = this.sectionsLengths.every(
                      function (e) {
                        return 0 === e;
                      }
                    )));
                },
              },
              {
                key: 'setSectionIterator',
                value: function (e) {
                  this.sectionIterator = c()({
                    multiSection: e.multiSection,
                    data: e.multiSection
                      ? this.sectionsLengths
                      : e.items.length,
                  });
                },
              },
              {
                key: 'setTheme',
                value: function (e) {
                  this.theme = l()(e.theme);
                },
              },
              {
                key: 'renderSections',
                value: function () {
                  var e = this;
                  if (this.allSectionsAreEmpty) return null;
                  var t = this.theme,
                    n = this.props,
                    o = n.id,
                    i = n.items,
                    u = n.renderItem,
                    s = n.renderItemData,
                    c = n.renderSectionTitle,
                    a = n.highlightedSectionIndex,
                    l = n.highlightedItemIndex,
                    g = n.itemProps;
                  return i.map(function (n, i) {
                    var f = 'react-autowhatever-'.concat(o, '-'),
                      p = ''.concat(f, 'section-').concat(i, '-'),
                      h = 0 === i;
                    return r.a.createElement(
                      'div',
                      t(
                        ''.concat(p, 'container'),
                        'sectionContainer',
                        h && 'sectionContainerFirst'
                      ),
                      r.a.createElement(S, {
                        section: n,
                        renderSectionTitle: c,
                        theme: t,
                        sectionKeyPrefix: p,
                      }),
                      r.a.createElement(W, {
                        items: e.sectionsItems[i],
                        itemProps: g,
                        renderItem: u,
                        renderItemData: s,
                        sectionIndex: i,
                        highlightedItemIndex: a === i ? l : null,
                        onHighlightedItemChange: e.onHighlightedItemChange,
                        getItemId: e.getItemId,
                        theme: t,
                        keyPrefix: f,
                        ref: e.storeItemsListReference,
                      })
                    );
                  });
                },
              },
              {
                key: 'renderItems',
                value: function () {
                  var e = this.props.items;
                  if (0 === e.length) return null;
                  var t = this.theme,
                    n = this.props,
                    o = n.id,
                    i = n.renderItem,
                    u = n.renderItemData,
                    s = n.highlightedSectionIndex,
                    c = n.highlightedItemIndex,
                    a = n.itemProps;
                  return r.a.createElement(W, {
                    items: e,
                    itemProps: a,
                    renderItem: i,
                    renderItemData: u,
                    highlightedItemIndex: null === s ? c : null,
                    onHighlightedItemChange: this.onHighlightedItemChange,
                    getItemId: this.getItemId,
                    theme: t,
                    keyPrefix: 'react-autowhatever-'.concat(o, '-'),
                  });
                },
              },
              {
                key: 'ensureHighlightedItemIsVisible',
                value: function () {
                  var e = this.highlightedItem;
                  if (e) {
                    var t = this.itemsContainer,
                      n =
                        e.offsetParent === t
                          ? e.offsetTop
                          : e.offsetTop - t.offsetTop,
                      o = t.scrollTop;
                    n < o
                      ? (o = n)
                      : n + e.offsetHeight > o + t.offsetHeight &&
                        (o = n + e.offsetHeight - t.offsetHeight),
                      o !== t.scrollTop && (t.scrollTop = o);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this.theme,
                    t = this.props,
                    n = t.id,
                    o = t.multiSection,
                    i = t.renderInputComponent,
                    u = t.renderItemsContainer,
                    s = t.highlightedSectionIndex,
                    c = t.highlightedItemIndex,
                    a = this.state.isInputFocused,
                    l = o ? this.renderSections() : this.renderItems(),
                    g = null !== l,
                    f = this.getItemId(s, c),
                    p = 'react-autowhatever-'.concat(n),
                    h = Y(
                      {
                        role: 'combobox',
                        'aria-haspopup': 'listbox',
                        'aria-owns': p,
                        'aria-expanded': g,
                      },
                      e(
                        'react-autowhatever-'.concat(n, '-container'),
                        'container',
                        g && 'containerOpen'
                      ),
                      {},
                      this.props.containerProps
                    ),
                    d = i(
                      Y(
                        {
                          type: 'text',
                          value: '',
                          autoComplete: 'off',
                          'aria-autocomplete': 'list',
                          'aria-controls': p,
                          'aria-activedescendant': f,
                        },
                        e(
                          'react-autowhatever-'.concat(n, '-input'),
                          'input',
                          g && 'inputOpen',
                          a && 'inputFocused'
                        ),
                        {},
                        this.props.inputProps,
                        {
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          onKeyDown:
                            this.props.inputProps.onKeyDown && this.onKeyDown,
                          ref: this.storeInputReference,
                        }
                      )
                    ),
                    y = u({
                      containerProps: Y(
                        { id: p, role: 'listbox' },
                        e(
                          'react-autowhatever-'.concat(n, '-items-container'),
                          'itemsContainer',
                          g && 'itemsContainerOpen'
                        ),
                        { ref: this.storeItemsContainerReference }
                      ),
                      children: l,
                    });
                  return r.a.createElement('div', h, d, y);
                },
              },
            ]) && J(n.prototype, o),
            i && J(n, i),
            s
          );
        })(o.Component);
      oe(ie, 'defaultProps', {
        id: '1',
        multiSection: !1,
        renderInputComponent: function (e) {
          return r.a.createElement('input', e);
        },
        renderItemsContainer: function (e) {
          var t = e.containerProps,
            n = e.children;
          return r.a.createElement('div', t, n);
        },
        renderItem: function () {
          throw new Error('`renderItem` must be provided');
        },
        renderItemData: re,
        renderSectionTitle: function () {
          throw new Error('`renderSectionTitle` must be provided');
        },
        getSectionItems: function () {
          throw new Error('`getSectionItems` must be provided');
        },
        containerProps: re,
        inputProps: re,
        itemProps: re,
        highlightedSectionIndex: null,
        highlightedItemIndex: null,
        theme: {
          container: 'react-autowhatever__container',
          containerOpen: 'react-autowhatever__container--open',
          input: 'react-autowhatever__input',
          inputOpen: 'react-autowhatever__input--open',
          inputFocused: 'react-autowhatever__input--focused',
          itemsContainer: 'react-autowhatever__items-container',
          itemsContainerOpen: 'react-autowhatever__items-container--open',
          itemsList: 'react-autowhatever__items-list',
          item: 'react-autowhatever__item',
          itemFirst: 'react-autowhatever__item--first',
          itemHighlighted: 'react-autowhatever__item--highlighted',
          sectionContainer: 'react-autowhatever__section-container',
          sectionContainerFirst: 'react-autowhatever__section-container--first',
          sectionTitle: 'react-autowhatever__section-title',
        },
      }),
        (ie.propTypes = {});
      var ue = function (e) {
        var t = {};
        for (var n in e)
          switch (n) {
            case 'suggestionsContainer':
              t.itemsContainer = e[n];
              break;
            case 'suggestionsContainerOpen':
              t.itemsContainerOpen = e[n];
              break;
            case 'suggestion':
              t.item = e[n];
              break;
            case 'suggestionFirst':
              t.itemFirst = e[n];
              break;
            case 'suggestionHighlighted':
              t.itemHighlighted = e[n];
              break;
            case 'suggestionsList':
              t.itemsList = e[n];
              break;
            default:
              t[n] = e[n];
          }
        return t;
      };
      function se(e) {
        return (se =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function ae(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ce(Object(n), !0).forEach(function (t) {
                ye(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function le(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function ge(e, t) {
        return !t || ('object' !== se(t) && 'function' != typeof t) ? fe(e) : t;
      }
      function fe(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function pe() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function he(e) {
        return (he = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function de(e, t) {
        return (de =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function ye(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var me = function () {
          return !0;
        },
        ve = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && de(e, t);
          })(c, e);
          var t,
            n,
            o,
            i,
            s =
              ((t = c),
              function () {
                var e,
                  n = he(t);
                if (pe()) {
                  var o = he(this).constructor;
                  e = Reflect.construct(n, arguments, o);
                } else e = n.apply(this, arguments);
                return ge(this, e);
              });
          function c(e) {
            var t,
              n = e.alwaysRenderSuggestions;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError('Cannot call a class as a function');
              })(this, c),
              ye(fe((t = s.call(this))), 'onDocumentMouseDown', function (e) {
                t.justClickedOnSuggestionsContainer = !1;
                for (
                  var n = (e.detail && e.detail.target) || e.target;
                  null !== n && n !== document;

                ) {
                  if (
                    n.getAttribute &&
                    null !== n.getAttribute('data-suggestion-index')
                  )
                    return;
                  if (n === t.suggestionsContainer)
                    return void (t.justClickedOnSuggestionsContainer = !0);
                  n = n.parentNode;
                }
              }),
              ye(fe(t), 'storeAutowhateverRef', function (e) {
                null !== e && (t.autowhatever = e);
              }),
              ye(fe(t), 'onSuggestionMouseEnter', function (e, n) {
                var o = n.sectionIndex,
                  r = n.itemIndex;
                t.updateHighlightedSuggestion(o, r),
                  e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !0),
                  (t.justMouseEntered = !0),
                  setTimeout(function () {
                    t.justMouseEntered = !1;
                  });
              }),
              ye(fe(t), 'highlightFirstSuggestion', function () {
                t.updateHighlightedSuggestion(
                  t.props.multiSection ? 0 : null,
                  0
                );
              }),
              ye(fe(t), 'onDocumentMouseUp', function () {
                t.pressedSuggestion &&
                  !t.justSelectedSuggestion &&
                  t.input.focus(),
                  (t.pressedSuggestion = null);
              }),
              ye(fe(t), 'onSuggestionMouseDown', function (e) {
                t.justSelectedSuggestion ||
                  ((t.justSelectedSuggestion = !0),
                  (t.pressedSuggestion = e.target));
              }),
              ye(fe(t), 'onSuggestionsClearRequested', function () {
                var e = t.props.onSuggestionsClearRequested;
                e && e();
              }),
              ye(fe(t), 'onSuggestionSelected', function (e, n) {
                var o = t.props,
                  r = o.alwaysRenderSuggestions,
                  i = o.onSuggestionSelected,
                  u = o.onSuggestionsFetchRequested;
                i && i(e, n);
                var s = t.props.shouldKeepSuggestionsOnSelect(n.suggestion);
                r || s
                  ? u({
                      value: n.suggestionValue,
                      reason: 'suggestion-selected',
                    })
                  : t.onSuggestionsClearRequested(),
                  t.resetHighlightedSuggestion();
              }),
              ye(fe(t), 'onSuggestionClick', function (e) {
                var n = t.props,
                  o = n.alwaysRenderSuggestions,
                  r = n.focusInputOnSuggestionClick,
                  i = n.onSuggestionSelected,
                  u = t.getSuggestionIndices(t.findSuggestionElement(e.target)),
                  s = u.sectionIndex,
                  c = u.suggestionIndex,
                  a = t.getSuggestion(s, c),
                  l = t.props.getSuggestionValue(a);
                t.maybeCallOnChange(e, l, 'click');
                var g = {
                  suggestion: a,
                  suggestionValue: l,
                  suggestionIndex: c,
                  sectionIndex: s,
                  method: 'click',
                };
                if (e.metaKey || e.ctrlKey) i && i(e, g);
                else {
                  t.onSuggestionSelected(e, g);
                  var f = t.props.shouldKeepSuggestionsOnSelect(a);
                  o || f || t.closeSuggestions();
                }
                !0 === r ? t.input.focus() : t.onBlur(),
                  setTimeout(function () {
                    t.justSelectedSuggestion = !1;
                  });
              }),
              ye(fe(t), 'onBlur', function () {
                var e = t.props,
                  n = e.inputProps,
                  o = e.shouldRenderSuggestions,
                  r = n.value,
                  i = n.onBlur,
                  u = t.getHighlightedSuggestion(),
                  s = o(r, 'input-blurred');
                t.setState({
                  isFocused: !1,
                  highlightedSectionIndex: null,
                  highlightedSuggestionIndex: null,
                  highlightedSuggestion: null,
                  valueBeforeUpDown: null,
                  isCollapsed: !s,
                }),
                  i && i(t.blurEvent, { highlightedSuggestion: u });
              }),
              ye(fe(t), 'onSuggestionMouseLeave', function (e) {
                t.resetHighlightedSuggestion(!1),
                  t.justSelectedSuggestion &&
                    e.target === t.pressedSuggestion &&
                    (t.justSelectedSuggestion = !1);
              }),
              ye(fe(t), 'onSuggestionTouchStart', function () {
                t.justSelectedSuggestion = !0;
              }),
              ye(fe(t), 'onSuggestionTouchMove', function () {
                (t.justSelectedSuggestion = !1),
                  (t.pressedSuggestion = null),
                  t.input.focus();
              }),
              ye(fe(t), 'itemProps', function (e) {
                return {
                  'data-section-index': e.sectionIndex,
                  'data-suggestion-index': e.itemIndex,
                  onMouseEnter: t.onSuggestionMouseEnter,
                  onMouseLeave: t.onSuggestionMouseLeave,
                  onMouseDown: t.onSuggestionMouseDown,
                  onTouchStart: t.onSuggestionTouchStart,
                  onTouchMove: t.onSuggestionTouchMove,
                  onClick: t.onSuggestionClick,
                };
              }),
              ye(fe(t), 'renderSuggestionsContainer', function (e) {
                var n = e.containerProps,
                  o = e.children;
                return (0,
                t.props
                  .renderSuggestionsContainer)({ containerProps: n, children: o, query: t.getQuery() });
              }),
              (t.state = {
                isFocused: !1,
                isCollapsed: !n,
                highlightedSectionIndex: null,
                highlightedSuggestionIndex: null,
                highlightedSuggestion: null,
                valueBeforeUpDown: null,
              }),
              (t.justPressedUpDown = !1),
              (t.justMouseEntered = !1),
              (t.pressedSuggestion = null),
              t
            );
          }
          return (
            (n = c),
            (o = [
              {
                key: 'componentDidMount',
                value: function () {
                  document.addEventListener(
                    'mousedown',
                    this.onDocumentMouseDown
                  ),
                    document.addEventListener(
                      'mouseup',
                      this.onDocumentMouseUp
                    ),
                    (this.input = this.autowhatever.input),
                    (this.suggestionsContainer = this.autowhatever.itemsContainer);
                },
              },
              {
                key: 'UNSAFE_componentWillReceiveProps',
                value: function (e) {
                  var t =
                    0 === this.state.highlightedSuggestionIndex &&
                    this.props.highlightFirstSuggestion &&
                    !e.highlightFirstSuggestion;
                  u()(e.suggestions, this.props.suggestions)
                    ? e.highlightFirstSuggestion &&
                      e.suggestions.length > 0 &&
                      !1 === this.justPressedUpDown &&
                      !1 === this.justMouseEntered
                      ? this.highlightFirstSuggestion()
                      : t && this.resetHighlightedSuggestion()
                    : this.willRenderSuggestions(e, 'suggestions-updated')
                    ? (this.state.isCollapsed &&
                        !this.justSelectedSuggestion &&
                        this.revealSuggestions(),
                      t && this.resetHighlightedSuggestion())
                    : this.resetHighlightedSuggestion();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  var n = this.props,
                    o = n.suggestions,
                    r = n.onSuggestionHighlighted,
                    i = n.highlightFirstSuggestion;
                  if (!u()(o, e.suggestions) && o.length > 0 && i)
                    this.highlightFirstSuggestion();
                  else if (r) {
                    var s = this.getHighlightedSuggestion();
                    s != t.highlightedSuggestion && r({ suggestion: s });
                  }
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  document.removeEventListener(
                    'mousedown',
                    this.onDocumentMouseDown
                  ),
                    document.removeEventListener(
                      'mouseup',
                      this.onDocumentMouseUp
                    );
                },
              },
              {
                key: 'updateHighlightedSuggestion',
                value: function (e, t, n) {
                  var o = this;
                  this.setState(function (r) {
                    var i = r.valueBeforeUpDown;
                    return (
                      null === t
                        ? (i = null)
                        : null === i && void 0 !== n && (i = n),
                      {
                        highlightedSectionIndex: e,
                        highlightedSuggestionIndex: t,
                        highlightedSuggestion:
                          null === t ? null : o.getSuggestion(e, t),
                        valueBeforeUpDown: i,
                      }
                    );
                  });
                },
              },
              {
                key: 'resetHighlightedSuggestion',
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  this.setState(function (t) {
                    var n = t.valueBeforeUpDown;
                    return {
                      highlightedSectionIndex: null,
                      highlightedSuggestionIndex: null,
                      highlightedSuggestion: null,
                      valueBeforeUpDown: e ? null : n,
                    };
                  });
                },
              },
              {
                key: 'revealSuggestions',
                value: function () {
                  this.setState({ isCollapsed: !1 });
                },
              },
              {
                key: 'closeSuggestions',
                value: function () {
                  this.setState({
                    highlightedSectionIndex: null,
                    highlightedSuggestionIndex: null,
                    highlightedSuggestion: null,
                    valueBeforeUpDown: null,
                    isCollapsed: !0,
                  });
                },
              },
              {
                key: 'getSuggestion',
                value: function (e, t) {
                  var n = this.props,
                    o = n.suggestions,
                    r = n.multiSection,
                    i = n.getSectionSuggestions;
                  return r ? i(o[e])[t] : o[t];
                },
              },
              {
                key: 'getHighlightedSuggestion',
                value: function () {
                  var e = this.state,
                    t = e.highlightedSectionIndex,
                    n = e.highlightedSuggestionIndex;
                  return null === n ? null : this.getSuggestion(t, n);
                },
              },
              {
                key: 'getSuggestionValueByIndex',
                value: function (e, t) {
                  return (0, this.props.getSuggestionValue)(
                    this.getSuggestion(e, t)
                  );
                },
              },
              {
                key: 'getSuggestionIndices',
                value: function (e) {
                  var t = e.getAttribute('data-section-index'),
                    n = e.getAttribute('data-suggestion-index');
                  return {
                    sectionIndex: 'string' == typeof t ? parseInt(t, 10) : null,
                    suggestionIndex: parseInt(n, 10),
                  };
                },
              },
              {
                key: 'findSuggestionElement',
                value: function (e) {
                  var t = e;
                  do {
                    if (
                      t.getAttribute &&
                      null !== t.getAttribute('data-suggestion-index')
                    )
                      return t;
                    t = t.parentNode;
                  } while (null !== t);
                  throw (
                    (console.error('Clicked element:', e),
                    new Error("Couldn't find suggestion element"))
                  );
                },
              },
              {
                key: 'maybeCallOnChange',
                value: function (e, t, n) {
                  var o = this.props.inputProps,
                    r = o.value,
                    i = o.onChange;
                  t !== r && i(e, { newValue: t, method: n });
                },
              },
              {
                key: 'willRenderSuggestions',
                value: function (e, t) {
                  var n = e.suggestions,
                    o = e.inputProps,
                    r = e.shouldRenderSuggestions,
                    i = o.value;
                  return n.length > 0 && r(i, t);
                },
              },
              {
                key: 'getQuery',
                value: function () {
                  var e = this.props.inputProps.value,
                    t = this.state.valueBeforeUpDown;
                  return (null === t ? e : t).trim();
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.suggestions,
                    o = t.renderInputComponent,
                    i = t.onSuggestionsFetchRequested,
                    u = t.renderSuggestion,
                    s = t.inputProps,
                    c = t.multiSection,
                    a = t.renderSectionTitle,
                    l = t.id,
                    g = t.getSectionSuggestions,
                    f = t.theme,
                    p = t.getSuggestionValue,
                    h = t.alwaysRenderSuggestions,
                    d = t.highlightFirstSuggestion,
                    y = t.containerProps,
                    m = this.state,
                    v = m.isFocused,
                    b = m.isCollapsed,
                    S = m.highlightedSectionIndex,
                    O = m.highlightedSuggestionIndex,
                    I = m.valueBeforeUpDown,
                    w = h ? me : this.props.shouldRenderSuggestions,
                    j = s.value,
                    P = s.onFocus,
                    x = s.onKeyDown,
                    _ = this.willRenderSuggestions(this.props, 'render'),
                    C = h || (v && !b && _),
                    k = C ? n : [],
                    D = ae({}, s, {
                      onFocus: function (t) {
                        if (
                          !e.justSelectedSuggestion &&
                          !e.justClickedOnSuggestionsContainer
                        ) {
                          var n = w(j, 'input-focused');
                          e.setState({ isFocused: !0, isCollapsed: !n }),
                            P && P(t),
                            n && i({ value: j, reason: 'input-focused' });
                        }
                      },
                      onBlur: function (t) {
                        e.justClickedOnSuggestionsContainer
                          ? e.input.focus()
                          : ((e.blurEvent = t),
                            e.justSelectedSuggestion ||
                              (e.onBlur(), e.onSuggestionsClearRequested()));
                      },
                      onChange: function (t) {
                        var n = t.target.value,
                          o = w(n, 'input-changed');
                        e.maybeCallOnChange(t, n, 'type'),
                          e.suggestionsContainer &&
                            (e.suggestionsContainer.scrollTop = 0),
                          e.setState(
                            ae(
                              {},
                              d
                                ? {}
                                : {
                                    highlightedSectionIndex: null,
                                    highlightedSuggestionIndex: null,
                                    highlightedSuggestion: null,
                                  },
                              { valueBeforeUpDown: null, isCollapsed: !o }
                            )
                          ),
                          o
                            ? i({ value: n, reason: 'input-changed' })
                            : e.onSuggestionsClearRequested();
                      },
                      onKeyDown: function (t, o) {
                        var r = t.keyCode;
                        switch (r) {
                          case 40:
                          case 38:
                            if (b)
                              w(j, 'suggestions-revealed') &&
                                (i({
                                  value: j,
                                  reason: 'suggestions-revealed',
                                }),
                                e.revealSuggestions(),
                                t.preventDefault());
                            else if (n.length > 0) {
                              var u,
                                s = o.newHighlightedSectionIndex,
                                c = o.newHighlightedItemIndex;
                              (u =
                                null === c
                                  ? null === I
                                    ? j
                                    : I
                                  : e.getSuggestionValueByIndex(s, c)),
                                e.updateHighlightedSuggestion(s, c, j),
                                e.maybeCallOnChange(
                                  t,
                                  u,
                                  40 === r ? 'down' : 'up'
                                ),
                                t.preventDefault();
                            }
                            (e.justPressedUpDown = !0),
                              setTimeout(function () {
                                e.justPressedUpDown = !1;
                              });
                            break;
                          case 13:
                            if (229 === t.keyCode) break;
                            var a = e.getHighlightedSuggestion();
                            if ((C && !h && e.closeSuggestions(), null != a)) {
                              t.preventDefault();
                              var l = p(a);
                              e.maybeCallOnChange(t, l, 'enter'),
                                e.onSuggestionSelected(t, {
                                  suggestion: a,
                                  suggestionValue: l,
                                  suggestionIndex: O,
                                  sectionIndex: S,
                                  method: 'enter',
                                }),
                                (e.justSelectedSuggestion = !0),
                                setTimeout(function () {
                                  e.justSelectedSuggestion = !1;
                                });
                            }
                            break;
                          case 27:
                            C && t.preventDefault();
                            var g = C && !h;
                            null === I
                              ? g ||
                                (e.maybeCallOnChange(t, '', 'escape'),
                                w('', 'escape-pressed')
                                  ? i({ value: '', reason: 'escape-pressed' })
                                  : e.onSuggestionsClearRequested())
                              : e.maybeCallOnChange(t, I, 'escape'),
                              g
                                ? (e.onSuggestionsClearRequested(),
                                  e.closeSuggestions())
                                : e.resetHighlightedSuggestion();
                        }
                        x && x(t);
                      },
                    }),
                    E = { query: this.getQuery() };
                  return r.a.createElement(ie, {
                    multiSection: c,
                    items: k,
                    renderInputComponent: o,
                    renderItemsContainer: this.renderSuggestionsContainer,
                    renderItem: u,
                    renderItemData: E,
                    renderSectionTitle: a,
                    getSectionItems: g,
                    highlightedSectionIndex: S,
                    highlightedItemIndex: O,
                    containerProps: y,
                    inputProps: D,
                    itemProps: this.itemProps,
                    theme: ue(f),
                    id: l,
                    ref: this.storeAutowhateverRef,
                  });
                },
              },
            ]) && le(n.prototype, o),
            i && le(n, i),
            c
          );
        })(o.Component);
      ye(ve, 'defaultProps', {
        renderSuggestionsContainer: function (e) {
          var t = e.containerProps,
            n = e.children;
          return r.a.createElement('div', t, n);
        },
        shouldRenderSuggestions: function (e) {
          return e.trim().length > 0;
        },
        alwaysRenderSuggestions: !1,
        multiSection: !1,
        shouldKeepSuggestionsOnSelect: function () {
          return !1;
        },
        focusInputOnSuggestionClick: !0,
        highlightFirstSuggestion: !1,
        theme: {
          container: 'react-autosuggest__container',
          containerOpen: 'react-autosuggest__container--open',
          input: 'react-autosuggest__input',
          inputOpen: 'react-autosuggest__input--open',
          inputFocused: 'react-autosuggest__input--focused',
          suggestionsContainer: 'react-autosuggest__suggestions-container',
          suggestionsContainerOpen:
            'react-autosuggest__suggestions-container--open',
          suggestionsList: 'react-autosuggest__suggestions-list',
          suggestion: 'react-autosuggest__suggestion',
          suggestionFirst: 'react-autosuggest__suggestion--first',
          suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
          sectionContainer: 'react-autosuggest__section-container',
          sectionContainerFirst: 'react-autosuggest__section-container--first',
          sectionTitle: 'react-autosuggest__section-title',
        },
        id: '1',
        containerProps: {},
      }),
        (ve.propTypes = {});
    },
  ]);
});
