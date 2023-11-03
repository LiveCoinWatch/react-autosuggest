(() => {
  function e(t) {
    return (
      (e =
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
            }),
      e(t)
    );
  }
  function t(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, a(r.key), r);
    }
  }
  function n(e, t) {
    return (
      (n = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      n(e, t)
    );
  }
  function r(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function o(e) {
    return (
      (o = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          }),
      o(e)
    );
  }
  function u(e, t, n) {
    return (
      (t = a(t)) in e
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
  function a(t) {
    var n = (function (t, n) {
      if ('object' !== e(t) || null === t) return t;
      var r = t[Symbol.toPrimitive];
      if (void 0 !== r) {
        var o = r.call(t, 'string');
        if ('object' !== e(o)) return o;
        throw new TypeError('@@toPrimitive must return a primitive value.');
      }
      return String(t);
    })(t);
    return 'symbol' === e(n) ? n : String(n);
  }
  var i = [
      { name: 'C', year: 1972 },
      { name: 'C#', year: 2e3 },
      { name: 'C++', year: 1983 },
      { name: 'Clojure', year: 2007 },
      { name: 'Elm', year: 2012 },
      { name: 'Go', year: 2009 },
      { name: 'Haskell', year: 1990 },
      { name: 'Java', year: 1995 },
      { name: 'JavaScript', year: 1995 },
      { name: 'Perl', year: 1987 },
      { name: 'PHP', year: 1995 },
      { name: 'Python', year: 1991 },
      { name: 'Ruby', year: 1995 },
      { name: 'Scala', year: 2003 },
    ],
    c = function (e) {
      var t = e.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if ('' === t) return [];
      var n = new RegExp('^' + t, 'i');
      return i.filter(function (e) {
        return n.test(e.name);
      });
    },
    s = function (e) {
      return e.name;
    },
    l = function (e) {
      return React.createElement('span', null, e.name);
    },
    f = (function (a) {
      !(function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && n(e, t);
      })(m, React.Component);
      var i,
        f,
        y,
        p,
        g =
          ((y = m),
          (p = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ('function' == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var t,
              n = o(y);
            if (p) {
              var u = o(this).constructor;
              t = Reflect.construct(n, arguments, u);
            } else t = n.apply(this, arguments);
            return (function (t, n) {
              if (n && ('object' === e(n) || 'function' == typeof n)) return n;
              if (void 0 !== n)
                throw new TypeError(
                  'Derived constructors may only return object or undefined'
                );
              return r(t);
            })(this, t);
          });
      function m() {
        var e;
        return (
          (function (e, t) {
            if (!(e instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, m),
          u(r((e = g.call(this))), 'onChange', function (t, n) {
            var r = n.newValue;
            e.setState({ value: r });
          }),
          u(r(e), 'onSuggestionsFetchRequested', function (t) {
            var n = t.value;
            e.setState({ suggestions: c(n) });
          }),
          u(r(e), 'onSuggestionsClearRequested', function () {
            e.setState({ suggestions: [] });
          }),
          (e.state = { value: '', suggestions: c('') }),
          e
        );
      }
      return (
        (i = m),
        (f = [
          {
            key: 'render',
            value: function () {
              var e = this.state,
                t = e.value,
                n = e.suggestions,
                r = {
                  placeholder: "Type 'c'",
                  value: t,
                  onChange: this.onChange,
                };
              return React.createElement(Autosuggest, {
                suggestions: n,
                onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
                onSuggestionsClearRequested: this.onSuggestionsClearRequested,
                getSuggestionValue: s,
                renderSuggestion: l,
                inputProps: r,
              });
            },
          },
        ]) && t(i.prototype, f),
        Object.defineProperty(i, 'prototype', { writable: !1 }),
        m
      );
    })();
  ReactDOM.render(React.createElement(f, null), document.getElementById('app'));
})();
