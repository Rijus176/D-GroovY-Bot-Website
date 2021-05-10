/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [67], {
        335: function(t, e, n) {
            "use strict";
            n.d(e, "c", (function() {
                return o
            })), n.d(e, "a", (function() {
                return c
            })), n.d(e, "f", (function() {
                return f
            })), n.d(e, "b", (function() {
                return l
            })), n.d(e, "d", (function() {
                return d
            })), n.d(e, "h", (function() {
                return h
            })), n.d(e, "e", (function() {
                return v
            })), n.d(e, "g", (function() {
                return y
            }));
            var r = function(t, b) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, b) {
                        t.__proto__ = b
                    } || function(t, b) {
                        for (var p in b) b.hasOwnProperty(p) && (t[p] = b[p])
                    })(t, b)
            };

            function o(t, b) {
                function e() {
                    this.constructor = t
                }
                r(t, b), t.prototype = null === b ? Object.create(b) : (e.prototype = b.prototype, new e)
            }
            var c = function() {
                return (c = Object.assign || function(t) {
                    for (var s, i = 1, e = arguments.length; i < e; i++)
                        for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
                    return t
                }).apply(this, arguments)
            };

            function f(s, t) {
                var e = {};
                for (var p in s) Object.prototype.hasOwnProperty.call(s, p) && t.indexOf(p) < 0 && (e[p] = s[p]);
                if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (p = Object.getOwnPropertySymbols(s); i < p.length; i++) t.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]) && (e[p[i]] = s[p[i]])
                }
                return e
            }

            function l(t, e, n, r) {
                return new(n || (n = Promise))((function(o, c) {
                    function f(t) {
                        try {
                            d(r.next(t))
                        } catch (t) {
                            c(t)
                        }
                    }

                    function l(t) {
                        try {
                            d(r.throw(t))
                        } catch (t) {
                            c(t)
                        }
                    }

                    function d(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(f, l)
                    }
                    d((r = r.apply(t, e || [])).next())
                }))
            }

            function d(t, body) {
                var e, n, r, g, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function c(c) {
                    return function(f) {
                        return function(c) {
                            if (e) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (e = 1, n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, c[1])).done) return r;
                                switch (n = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        r = c;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                            o.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && o.label < r[1]) {
                                            o.label = r[1], r = c;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2], o.ops.push(c);
                                            break
                                        }
                                        r[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                c = body.call(t, o)
                            } catch (t) {
                                c = [6, t], n = 0
                            } finally {
                                e = r = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, f])
                    }
                }
            }

            function h(t) {
                var s = "function" == typeof Symbol && Symbol.iterator,
                    e = s && t[s],
                    i = 0;
                if (e) return e.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && i >= t.length && (t = void 0), {
                            value: t && t[i++],
                            done: !t
                        }
                    }
                };
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function v(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    c = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) c.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return c
            }

            function y() {
                for (var t = [], i = 0; i < arguments.length; i++) t = t.concat(v(arguments[i]));
                return t
            }
        },
        368: function(t, e, n) {
            "use strict";

            function r(t) {
                switch (Object.prototype.toString.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return j(t, Error)
                }
            }

            function o(t) {
                return "[object ErrorEvent]" === Object.prototype.toString.call(t)
            }

            function c(t) {
                return "[object DOMError]" === Object.prototype.toString.call(t)
            }

            function f(t) {
                return "[object DOMException]" === Object.prototype.toString.call(t)
            }

            function l(t) {
                return "[object String]" === Object.prototype.toString.call(t)
            }

            function d(t) {
                return null === t || "object" != typeof t && "function" != typeof t
            }

            function h(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function v(t) {
                return "undefined" != typeof Event && j(t, Event)
            }

            function y(t) {
                return "undefined" != typeof Element && j(t, Element)
            }

            function _(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }

            function m(t) {
                return Boolean(t && t.then && "function" == typeof t.then)
            }

            function O(t) {
                return h(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
            }

            function j(t, base) {
                try {
                    return t instanceof base
                } catch (t) {
                    return !1
                }
            }
            n.d(e, "d", (function() {
                return r
            })), n.d(e, "e", (function() {
                return o
            })), n.d(e, "a", (function() {
                return c
            })), n.d(e, "b", (function() {
                return f
            })), n.d(e, "k", (function() {
                return l
            })), n.d(e, "i", (function() {
                return d
            })), n.d(e, "h", (function() {
                return h
            })), n.d(e, "f", (function() {
                return v
            })), n.d(e, "c", (function() {
                return y
            })), n.d(e, "j", (function() {
                return _
            })), n.d(e, "m", (function() {
                return m
            })), n.d(e, "l", (function() {
                return O
            })), n.d(e, "g", (function() {
                return j
            }))
        },
        369: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "e", (function() {
                    return c
                })), n.d(e, "i", (function() {
                    return f
                })), n.d(e, "h", (function() {
                    return l
                })), n.d(e, "d", (function() {
                    return d
                })), n.d(e, "c", (function() {
                    return h
                })), n.d(e, "b", (function() {
                    return v
                })), n.d(e, "a", (function() {
                    return y
                })), n.d(e, "f", (function() {
                    return _
                })), n.d(e, "g", (function() {
                    return m
                }));
                var r = n(393),
                    o = (n(394), {});

                function c() {
                    return Object(r.b)() ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o
                }

                function f() {
                    var t = c(),
                        e = t.crypto || t.msCrypto;
                    if (void 0 !== e && e.getRandomValues) {
                        var n = new Uint16Array(8);
                        e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                        var r = function(t) {
                            for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                            return e
                        };
                        return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                    }
                    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                        var e = 16 * Math.random() | 0;
                        return ("x" === t ? e : 3 & e | 8).toString(16)
                    }))
                }

                function l(t) {
                    if (!t) return {};
                    var e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    if (!e) return {};
                    var n = e[6] || "",
                        r = e[8] || "";
                    return {
                        host: e[4],
                        path: e[5],
                        protocol: e[2],
                        relative: e[5] + n + r
                    }
                }

                function d(t) {
                    if (t.message) return t.message;
                    if (t.exception && t.exception.values && t.exception.values[0]) {
                        var e = t.exception.values[0];
                        return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
                    }
                    return t.event_id || "<unknown>"
                }

                function h(t) {
                    var e = c();
                    if (!("console" in e)) return t();
                    var n = e.console,
                        r = {};
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                        t in e.console && n[t].__sentry_original__ && (r[t] = n[t], n[t] = n[t].__sentry_original__)
                    }));
                    var o = t();
                    return Object.keys(r).forEach((function(t) {
                        n[t] = r[t]
                    })), o
                }

                function v(t, e, n) {
                    t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].value = t.exception.values[0].value || e || "", t.exception.values[0].type = t.exception.values[0].type || n || "Error"
                }

                function y(t, e) {
                    void 0 === e && (e = {});
                    try {
                        t.exception.values[0].mechanism = t.exception.values[0].mechanism || {}, Object.keys(e).forEach((function(n) {
                            t.exception.values[0].mechanism[n] = e[n]
                        }))
                    } catch (t) {}
                }

                function _() {
                    try {
                        return document.location.href
                    } catch (t) {
                        return ""
                    }
                }

                function m(t, header) {
                    if (!header) return 6e4;
                    var e = parseInt("" + header, 10);
                    if (!isNaN(e)) return 1e3 * e;
                    var n = Date.parse("" + header);
                    return isNaN(n) ? 6e4 : n - t
                }
            }).call(this, n(7))
        },
        393: function(t, e, n) {
            "use strict";
            (function(t) {
                function r() {
                    return "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0)
                }

                function o(t, e) {
                    return t.require(e)
                }
                n.d(e, "b", (function() {
                    return r
                })), n.d(e, "a", (function() {
                    return o
                }))
            }).call(this, n(107))
        },
        394: function(t, e, n) {
            "use strict";
            n.d(e, "d", (function() {
                return o
            })), n.d(e, "c", (function() {
                return c
            })), n.d(e, "b", (function() {
                return f
            })), n.d(e, "a", (function() {
                return l
            }));
            var r = n(368);

            function o(t, e) {
                return void 0 === e && (e = 0), "string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
            }

            function c(line, t) {
                var e = line,
                    n = e.length;
                if (n <= 150) return e;
                t > n && (t = n);
                var r = Math.max(t - 60, 0);
                r < 5 && (r = 0);
                var o = Math.min(r + 140, n);
                return o > n - 5 && (o = n), o === n && (r = Math.max(o - 140, 0)), e = e.slice(r, o), r > 0 && (e = "'{snip} " + e), o < n && (e += " {snip}"), e
            }

            function f(input, t) {
                if (!Array.isArray(input)) return "";
                for (var output = [], i = 0; i < input.length; i++) {
                    var e = input[i];
                    try {
                        output.push(String(e))
                    } catch (t) {
                        output.push("[value cannot be serialized]")
                    }
                }
                return output.join(t)
            }

            function l(t, pattern) {
                return !!Object(r.k)(t) && (Object(r.j)(pattern) ? pattern.test(t) : "string" == typeof pattern && -1 !== t.indexOf(pattern))
            }
        },
        395: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            }));
            var r = n(369),
                o = Object(r.e)(),
                c = "Sentry Logger ",
                f = function() {
                    function t() {
                        this._enabled = !1
                    }
                    return t.prototype.disable = function() {
                        this._enabled = !1
                    }, t.prototype.enable = function() {
                        this._enabled = !0
                    }, t.prototype.log = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(r.c)((function() {
                            o.console.log(c + "[Log]: " + t.join(" "))
                        }))
                    }, t.prototype.warn = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(r.c)((function() {
                            o.console.warn(c + "[Warn]: " + t.join(" "))
                        }))
                    }, t.prototype.error = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        this._enabled && Object(r.c)((function() {
                            o.console.error(c + "[Error]: " + t.join(" "))
                        }))
                    }, t
                }();
            o.__SENTRY__ = o.__SENTRY__ || {};
            var l = o.__SENTRY__.logger || (o.__SENTRY__.logger = new f)
        },
        396: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = "<anonymous>";

            function o(t) {
                try {
                    return t && "function" == typeof t && t.name || r
                } catch (t) {
                    return r
                }
            }
        },
        426: function(t, e) {
            t.exports = function(t) {
                if (!t.webpackPolyfill) {
                    var e = Object.create(t);
                    e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function() {
                            return e.l
                        }
                    }), Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function() {
                            return e.i
                        }
                    }), Object.defineProperty(e, "exports", {
                        enumerable: !0
                    }), e.webpackPolyfill = 1
                }
                return e
            }
        },
        427: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "c", (function() {
                    return h
                })), n.d(e, "f", (function() {
                    return v
                })), n.d(e, "e", (function() {
                    return m
                })), n.d(e, "d", (function() {
                    return E
                })), n.d(e, "b", (function() {
                    return S
                })), n.d(e, "a", (function() {
                    return w
                }));
                var r = n(335),
                    o = n(428),
                    c = n(368),
                    f = n(429),
                    l = n(396),
                    d = n(394);

                function h(source, t, e) {
                    if (t in source) {
                        var n = source[t],
                            r = e(n);
                        if ("function" == typeof r) try {
                            r.prototype = r.prototype || {}, Object.defineProperties(r, {
                                __sentry_original__: {
                                    enumerable: !1,
                                    value: n
                                }
                            })
                        } catch (t) {}
                        source[t] = r
                    }
                }

                function v(object) {
                    return Object.keys(object).map((function(t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(object[t])
                    })).join("&")
                }

                function y(t) {
                    if (Object(c.d)(t)) {
                        var e = t,
                            n = {
                                message: e.message,
                                name: e.name,
                                stack: e.stack
                            };
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        return n
                    }
                    if (Object(c.f)(t)) {
                        var r = t,
                            source = {};
                        source.type = r.type;
                        try {
                            source.target = Object(c.c)(r.target) ? Object(o.a)(r.target) : Object.prototype.toString.call(r.target)
                        } catch (t) {
                            source.target = "<unknown>"
                        }
                        try {
                            source.currentTarget = Object(c.c)(r.currentTarget) ? Object(o.a)(r.currentTarget) : Object.prototype.toString.call(r.currentTarget)
                        } catch (t) {
                            source.currentTarget = "<unknown>"
                        }
                        for (var i in "undefined" != typeof CustomEvent && Object(c.g)(t, CustomEvent) && (source.detail = r.detail), r) Object.prototype.hasOwnProperty.call(r, i) && (source[i] = r);
                        return source
                    }
                    return t
                }

                function _(t) {
                    return function(t) {
                        return ~-encodeURI(t).split(/%..|./).length
                    }(JSON.stringify(t))
                }

                function m(object, t, e) {
                    void 0 === t && (t = 3), void 0 === e && (e = 102400);
                    var n = E(object, t);
                    return _(n) > e ? m(object, t - 1, e) : n
                }

                function O(e, n) {
                    return "domain" === n && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === n ? "[DomainEmitter]" : void 0 !== t && e === t ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : Object(c.l)(e) ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + Object(l.a)(e) + "]" : "symbol" == typeof e ? "[" + String(e) + "]" : "bigint" == typeof e ? "[BigInt: " + String(e) + "]" : e
                }

                function j(t, e, n, r) {
                    if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new f.a), 0 === n) return function(t) {
                        var e = Object.prototype.toString.call(t);
                        if ("string" == typeof t) return t;
                        if ("[object Object]" === e) return "[Object]";
                        if ("[object Array]" === e) return "[Array]";
                        var n = O(t);
                        return Object(c.i)(n) ? n : e
                    }(e);
                    if (null != e && "function" == typeof e.toJSON) return e.toJSON();
                    var o = O(e, t);
                    if (Object(c.i)(o)) return o;
                    var source = y(e),
                        l = Array.isArray(e) ? [] : {};
                    if (r.memoize(e)) return "[Circular ~]";
                    for (var d in source) Object.prototype.hasOwnProperty.call(source, d) && (l[d] = j(d, source[d], n - 1, r));
                    return r.unmemoize(e), l
                }

                function E(input, t) {
                    try {
                        return JSON.parse(JSON.stringify(input, (function(e, n) {
                            return j(e, n, t)
                        })))
                    } catch (t) {
                        return "**non-serializable**"
                    }
                }

                function S(t, e) {
                    void 0 === e && (e = 40);
                    var n = Object.keys(y(t));
                    if (n.sort(), !n.length) return "[object has no keys]";
                    if (n[0].length >= e) return Object(d.d)(n[0], e);
                    for (var r = n.length; r > 0; r--) {
                        var o = n.slice(0, r).join(", ");
                        if (!(o.length > e)) return r === n.length ? o : Object(d.d)(o, e)
                    }
                    return ""
                }

                function w(t) {
                    var e, n;
                    if (Object(c.h)(t)) {
                        var o = t,
                            f = {};
                        try {
                            for (var l = Object(r.h)(Object.keys(o)), d = l.next(); !d.done; d = l.next()) {
                                var h = d.value;
                                void 0 !== o[h] && (f[h] = w(o[h]))
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                d && !d.done && (n = l.return) && n.call(l)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return f
                    }
                    return Array.isArray(t) ? t.map(w) : t
                }
            }).call(this, n(7))
        },
        428: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n(368);

            function o(t) {
                try {
                    for (var e = t, n = [], r = 0, o = 0, f = " > ".length, l = void 0; e && r++ < 5 && !("html" === (l = c(e)) || r > 1 && o + n.length * f + l.length >= 80);) n.push(l), o += l.length, e = e.parentNode;
                    return n.reverse().join(" > ")
                } catch (t) {
                    return "<unknown>"
                }
            }

            function c(t) {
                var e, n, o, c, i, f = t,
                    l = [];
                if (!f || !f.tagName) return "";
                if (l.push(f.tagName.toLowerCase()), f.id && l.push("#" + f.id), (e = f.className) && Object(r.k)(e))
                    for (n = e.split(/\s+/), i = 0; i < n.length; i++) l.push("." + n[i]);
                var d = ["type", "name", "title", "alt"];
                for (i = 0; i < d.length; i++) o = d[i], (c = f.getAttribute(o)) && l.push("[" + o + '="' + c + '"]');
                return l.join("")
            }
        },
        429: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            var r = function() {
                function t() {
                    this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
                }
                return t.prototype.memoize = function(t) {
                    if (this._hasWeakSet) return !!this._inner.has(t) || (this._inner.add(t), !1);
                    for (var i = 0; i < this._inner.length; i++) {
                        if (this._inner[i] === t) return !0
                    }
                    return this._inner.push(t), !1
                }, t.prototype.unmemoize = function(t) {
                    if (this._hasWeakSet) this._inner.delete(t);
                    else
                        for (var i = 0; i < this._inner.length; i++)
                            if (this._inner[i] === t) {
                                this._inner.splice(i, 1);
                                break
                            }
                }, t
            }()
        },
        430: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return c
            })), n.d(e, "a", (function() {
                return f
            })), n.d(e, "d", (function() {
                return l
            })), n.d(e, "f", (function() {
                return d
            })), n.d(e, "e", (function() {
                return h
            })), n.d(e, "c", (function() {
                return v
            }));
            var r = n(395),
                o = n(369);

            function c() {
                if (!("fetch" in Object(o.e)())) return !1;
                try {
                    return new Headers, new Request(""), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function f(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }

            function l() {
                if (!c()) return !1;
                var t = Object(o.e)();
                if (f(t.fetch)) return !0;
                var e = !1,
                    n = t.document;
                if (n && "function" == typeof n.createElement) try {
                    var l = n.createElement("iframe");
                    l.hidden = !0, n.head.appendChild(l), l.contentWindow && l.contentWindow.fetch && (e = f(l.contentWindow.fetch)), n.head.removeChild(l)
                } catch (t) {
                    r.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                }
                return e
            }

            function d() {
                return "ReportingObserver" in Object(o.e)()
            }

            function h() {
                if (!c()) return !1;
                try {
                    return new Request("_", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (t) {
                    return !1
                }
            }

            function v() {
                var t = Object(o.e)(),
                    e = t.chrome,
                    n = e && e.app && e.app.runtime,
                    r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                return !n && r
            }
        },
        431: function(t, e, n) {
            (function(e) {
                t.exports = function t(e, n, r) {
                    function s(o, u) {
                        if (!n[o]) {
                            if (!e[o]) {
                                if (i) return i(o, !0);
                                var c = new Error("Cannot find module '" + o + "'");
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var f = n[o] = {
                                exports: {}
                            };
                            e[o][0].call(f.exports, (function(t) {
                                var n = e[o][1][t];
                                return s(n || t)
                            }), f, f.exports, t, e, n, r)
                        }
                        return n[o].exports
                    }
                    for (var i = !1, o = 0; o < r.length; o++) s(r[o]);
                    return s
                }({
                    1: [function(t, n, r) {
                        (function(t) {
                            "use strict";
                            var e, r, o = t.MutationObserver || t.WebKitMutationObserver;
                            if (o) {
                                var c = 0,
                                    f = new o(h),
                                    element = t.document.createTextNode("");
                                f.observe(element, {
                                    characterData: !0
                                }), e = function() {
                                    element.data = c = ++c % 2
                                }
                            } else if (t.setImmediate || void 0 === t.MessageChannel) e = "document" in t && "onreadystatechange" in t.document.createElement("script") ? function() {
                                var e = t.document.createElement("script");
                                e.onreadystatechange = function() {
                                    h(), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null
                                }, t.document.documentElement.appendChild(e)
                            } : function() {
                                setTimeout(h, 0)
                            };
                            else {
                                var l = new t.MessageChannel;
                                l.port1.onmessage = h, e = function() {
                                    l.port2.postMessage(0)
                                }
                            }
                            var d = [];

                            function h() {
                                var i, t;
                                r = !0;
                                for (var e = d.length; e;) {
                                    for (t = d, d = [], i = -1; ++i < e;) t[i]();
                                    e = d.length
                                }
                                r = !1
                            }

                            function v(t) {
                                1 !== d.push(t) || r || e()
                            }
                            n.exports = v
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {}],
                    2: [function(t, e, n) {
                        "use strict";
                        var r = t(1);

                        function o() {}
                        var c = {},
                            f = ["REJECTED"],
                            l = ["FULFILLED"],
                            d = ["PENDING"];

                        function h(t) {
                            if ("function" != typeof t) throw new TypeError("resolver must be a function");
                            this.state = d, this.queue = [], this.outcome = void 0, t !== o && m(this, t)
                        }

                        function v(t, e, n) {
                            this.promise = t, "function" == typeof e && (this.onFulfilled = e, this.callFulfilled = this.otherCallFulfilled), "function" == typeof n && (this.onRejected = n, this.callRejected = this.otherCallRejected)
                        }

                        function y(t, e, n) {
                            r((function() {
                                var r;
                                try {
                                    r = e(n)
                                } catch (e) {
                                    return c.reject(t, e)
                                }
                                r === t ? c.reject(t, new TypeError("Cannot resolve promise with itself")) : c.resolve(t, r)
                            }))
                        }

                        function _(t) {
                            var e = t && t.then;
                            if (t && ("object" == typeof t || "function" == typeof t) && "function" == typeof e) return function() {
                                e.apply(t, arguments)
                            }
                        }

                        function m(t, e) {
                            var n = !1;

                            function r(e) {
                                n || (n = !0, c.reject(t, e))
                            }

                            function o(e) {
                                n || (n = !0, c.resolve(t, e))
                            }

                            function f() {
                                e(o, r)
                            }
                            var l = O(f);
                            "error" === l.status && r(l.value)
                        }

                        function O(t, e) {
                            var n = {};
                            try {
                                n.value = t(e), n.status = "success"
                            } catch (t) {
                                n.status = "error", n.value = t
                            }
                            return n
                        }

                        function j(t) {
                            return t instanceof this ? t : c.resolve(new this(o), t)
                        }

                        function E(t) {
                            var e = new this(o);
                            return c.reject(e, t)
                        }

                        function S(t) {
                            var e = this;
                            if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
                            var n = t.length,
                                r = !1;
                            if (!n) return this.resolve([]);
                            for (var f = new Array(n), l = 0, i = -1, d = new this(o); ++i < n;) h(t[i], i);
                            return d;

                            function h(t, i) {
                                function o(t) {
                                    f[i] = t, ++l !== n || r || (r = !0, c.resolve(d, f))
                                }
                                e.resolve(t).then(o, (function(t) {
                                    r || (r = !0, c.reject(d, t))
                                }))
                            }
                        }

                        function w(t) {
                            var e = this;
                            if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
                            var n = t.length,
                                r = !1;
                            if (!n) return this.resolve([]);
                            for (var i = -1, f = new this(o); ++i < n;) l(t[i]);
                            return f;

                            function l(t) {
                                e.resolve(t).then((function(t) {
                                    r || (r = !0, c.resolve(f, t))
                                }), (function(t) {
                                    r || (r = !0, c.reject(f, t))
                                }))
                            }
                        }
                        e.exports = h, h.prototype.catch = function(t) {
                            return this.then(null, t)
                        }, h.prototype.then = function(t, e) {
                            if ("function" != typeof t && this.state === l || "function" != typeof e && this.state === f) return this;
                            var n = new this.constructor(o);
                            return this.state !== d ? y(n, this.state === l ? t : e, this.outcome) : this.queue.push(new v(n, t, e)), n
                        }, v.prototype.callFulfilled = function(t) {
                            c.resolve(this.promise, t)
                        }, v.prototype.otherCallFulfilled = function(t) {
                            y(this.promise, this.onFulfilled, t)
                        }, v.prototype.callRejected = function(t) {
                            c.reject(this.promise, t)
                        }, v.prototype.otherCallRejected = function(t) {
                            y(this.promise, this.onRejected, t)
                        }, c.resolve = function(t, e) {
                            var n = O(_, e);
                            if ("error" === n.status) return c.reject(t, n.value);
                            var r = n.value;
                            if (r) m(t, r);
                            else {
                                t.state = l, t.outcome = e;
                                for (var i = -1, o = t.queue.length; ++i < o;) t.queue[i].callFulfilled(e)
                            }
                            return t
                        }, c.reject = function(t, e) {
                            t.state = f, t.outcome = e;
                            for (var i = -1, n = t.queue.length; ++i < n;) t.queue[i].callRejected(e);
                            return t
                        }, h.resolve = j, h.reject = E, h.all = S, h.race = w
                    }, {
                        1: 1
                    }],
                    3: [function(t, n, r) {
                        (function(e) {
                            "use strict";
                            "function" != typeof e.Promise && (e.Promise = t(2))
                        }).call(this, void 0 !== e ? e : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
                    }, {
                        2: 2
                    }],
                    4: [function(t, e, n) {
                        "use strict";
                        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                            return typeof t
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                        };

                        function o(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }

                        function c() {
                            try {
                                if ("undefined" != typeof indexedDB) return indexedDB;
                                if ("undefined" != typeof webkitIndexedDB) return webkitIndexedDB;
                                if ("undefined" != typeof mozIndexedDB) return mozIndexedDB;
                                if ("undefined" != typeof OIndexedDB) return OIndexedDB;
                                if ("undefined" != typeof msIndexedDB) return msIndexedDB
                            } catch (t) {
                                return
                            }
                        }
                        var f = c();

                        function l() {
                            try {
                                if (!f || !f.open) return !1;
                                var t = "undefined" != typeof openDatabase && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform),
                                    e = "function" == typeof fetch && -1 !== fetch.toString().indexOf("[native code");
                                return (!t || e) && "undefined" != typeof indexedDB && "undefined" != typeof IDBKeyRange
                            } catch (t) {
                                return !1
                            }
                        }

                        function d(t, e) {
                            t = t || [], e = e || {};
                            try {
                                return new Blob(t, e)
                            } catch (r) {
                                if ("TypeError" !== r.name) throw r;
                                for (var n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder), i = 0; i < t.length; i += 1) n.append(t[i]);
                                return n.getBlob(e.type)
                            }
                        }
                        "undefined" == typeof Promise && t(3);
                        var h = Promise;

                        function v(t, e) {
                            e && t.then((function(t) {
                                e(null, t)
                            }), (function(t) {
                                e(t)
                            }))
                        }

                        function y(t, e, n) {
                            "function" == typeof e && t.then(e), "function" == typeof n && t.catch(n)
                        }

                        function _(t) {
                            return "string" != typeof t && (console.warn(t + " used as a key, but it is not a string."), t = String(t)), t
                        }

                        function m() {
                            if (arguments.length && "function" == typeof arguments[arguments.length - 1]) return arguments[arguments.length - 1]
                        }
                        var O = "local-forage-detect-blob-support",
                            j = void 0,
                            E = {},
                            S = Object.prototype.toString,
                            w = "readonly",
                            x = "readwrite";

                        function k(t) {
                            for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n), i = 0; i < e; i++) r[i] = t.charCodeAt(i);
                            return n
                        }

                        function I(t) {
                            return new h((function(e) {
                                var n = t.transaction(O, x),
                                    r = d([""]);
                                n.objectStore(O).put(r, "key"), n.onabort = function(t) {
                                    t.preventDefault(), t.stopPropagation(), e(!1)
                                }, n.oncomplete = function() {
                                    var t = navigator.userAgent.match(/Chrome\/(\d+)/),
                                        n = navigator.userAgent.match(/Edge\//);
                                    e(n || !t || parseInt(t[1], 10) >= 43)
                                }
                            })).catch((function() {
                                return !1
                            }))
                        }

                        function T(t) {
                            return "boolean" == typeof j ? h.resolve(j) : I(t).then((function(t) {
                                return j = t
                            }))
                        }

                        function R(t) {
                            var e = E[t.name],
                                n = {};
                            n.promise = new h((function(t, e) {
                                n.resolve = t, n.reject = e
                            })), e.deferredOperations.push(n), e.dbReady ? e.dbReady = e.dbReady.then((function() {
                                return n.promise
                            })) : e.dbReady = n.promise
                        }

                        function N(t) {
                            var e = E[t.name].deferredOperations.pop();
                            if (e) return e.resolve(), e.promise
                        }

                        function A(t, e) {
                            var n = E[t.name].deferredOperations.pop();
                            if (n) return n.reject(e), n.promise
                        }

                        function D(t, e) {
                            return new h((function(n, r) {
                                if (E[t.name] = E[t.name] || W(), t.db) {
                                    if (!e) return n(t.db);
                                    R(t), t.db.close()
                                }
                                var o = [t.name];
                                e && o.push(t.version);
                                var c = f.open.apply(f, o);
                                e && (c.onupgradeneeded = function(e) {
                                    var n = c.result;
                                    try {
                                        n.createObjectStore(t.storeName), e.oldVersion <= 1 && n.createObjectStore(O)
                                    } catch (n) {
                                        if ("ConstraintError" !== n.name) throw n;
                                        console.warn('The database "' + t.name + '" has been upgraded from version ' + e.oldVersion + " to version " + e.newVersion + ', but the storage "' + t.storeName + '" already exists.')
                                    }
                                }), c.onerror = function(t) {
                                    t.preventDefault(), r(c.error)
                                }, c.onsuccess = function() {
                                    n(c.result), N(t)
                                }
                            }))
                        }

                        function C(t) {
                            return D(t, !1)
                        }

                        function L(t) {
                            return D(t, !0)
                        }

                        function P(t, e) {
                            if (!t.db) return !0;
                            var n = !t.db.objectStoreNames.contains(t.storeName),
                                r = t.version < t.db.version,
                                o = t.version > t.db.version;
                            if (r && (t.version !== e && console.warn('The database "' + t.name + "\" can't be downgraded from version " + t.db.version + " to version " + t.version + "."), t.version = t.db.version), o || n) {
                                if (n) {
                                    var c = t.db.version + 1;
                                    c > t.version && (t.version = c)
                                }
                                return !0
                            }
                            return !1
                        }

                        function F(t) {
                            return new h((function(e, n) {
                                var r = new FileReader;
                                r.onerror = n, r.onloadend = function(n) {
                                    var r = btoa(n.target.result || "");
                                    e({
                                        __local_forage_encoded_blob: !0,
                                        data: r,
                                        type: t.type
                                    })
                                }, r.readAsBinaryString(t)
                            }))
                        }

                        function U(t) {
                            return d([k(atob(t.data))], {
                                type: t.type
                            })
                        }

                        function B(t) {
                            return t && t.__local_forage_encoded_blob
                        }

                        function M(t) {
                            var e = this,
                                n = e._initReady().then((function() {
                                    var t = E[e._dbInfo.name];
                                    if (t && t.dbReady) return t.dbReady
                                }));
                            return y(n, t, t), n
                        }

                        function H(t) {
                            R(t);
                            for (var e = E[t.name], n = e.forages, i = 0; i < n.length; i++) {
                                var r = n[i];
                                r._dbInfo.db && (r._dbInfo.db.close(), r._dbInfo.db = null)
                            }
                            return t.db = null, C(t).then((function(e) {
                                return t.db = e, P(t) ? L(t) : e
                            })).then((function(r) {
                                t.db = e.db = r;
                                for (var i = 0; i < n.length; i++) n[i]._dbInfo.db = r
                            })).catch((function(e) {
                                throw A(t, e), e
                            }))
                        }

                        function z(t, e, n, r) {
                            void 0 === r && (r = 1);
                            try {
                                var o = t.db.transaction(t.storeName, e);
                                n(null, o)
                            } catch (o) {
                                if (r > 0 && (!t.db || "InvalidStateError" === o.name || "NotFoundError" === o.name)) return h.resolve().then((function() {
                                    if (!t.db || "NotFoundError" === o.name && !t.db.objectStoreNames.contains(t.storeName) && t.version <= t.db.version) return t.db && (t.version = t.db.version + 1), L(t)
                                })).then((function() {
                                    return H(t).then((function() {
                                        z(t, e, n, r - 1)
                                    }))
                                })).catch(n);
                                n(o)
                            }
                        }

                        function W() {
                            return {
                                forages: [],
                                db: null,
                                dbReady: null,
                                deferredOperations: []
                            }
                        }

                        function $(t) {
                            var e = this,
                                n = {
                                    db: null
                                };
                            if (t)
                                for (var i in t) n[i] = t[i];
                            var r = E[n.name];
                            r || (r = W(), E[n.name] = r), r.forages.push(e), e._initReady || (e._initReady = e.ready, e.ready = M);
                            var o = [];

                            function c() {
                                return h.resolve()
                            }
                            for (var f = 0; f < r.forages.length; f++) {
                                var l = r.forages[f];
                                l !== e && o.push(l._initReady().catch(c))
                            }
                            var d = r.forages.slice(0);
                            return h.all(o).then((function() {
                                return n.db = r.db, C(n)
                            })).then((function(t) {
                                return n.db = t, P(n, e._defaultConfig.version) ? L(n) : t
                            })).then((function(t) {
                                n.db = r.db = t, e._dbInfo = n;
                                for (var o = 0; o < d.length; o++) {
                                    var c = d[o];
                                    c !== e && (c._dbInfo.db = n.db, c._dbInfo.version = n.version)
                                }
                            }))
                        }

                        function V(t, e) {
                            var n = this;
                            t = _(t);
                            var r = new h((function(e, r) {
                                n.ready().then((function() {
                                    z(n._dbInfo, w, (function(o, c) {
                                        if (o) return r(o);
                                        try {
                                            var f = c.objectStore(n._dbInfo.storeName).get(t);
                                            f.onsuccess = function() {
                                                var t = f.result;
                                                void 0 === t && (t = null), B(t) && (t = U(t)), e(t)
                                            }, f.onerror = function() {
                                                r(f.error)
                                            }
                                        } catch (t) {
                                            r(t)
                                        }
                                    }))
                                })).catch(r)
                            }));
                            return v(r, e), r
                        }

                        function Y(t, e) {
                            var n = this,
                                r = new h((function(e, r) {
                                    n.ready().then((function() {
                                        z(n._dbInfo, w, (function(o, c) {
                                            if (o) return r(o);
                                            try {
                                                var f = c.objectStore(n._dbInfo.storeName).openCursor(),
                                                    l = 1;
                                                f.onsuccess = function() {
                                                    var cursor = f.result;
                                                    if (cursor) {
                                                        var n = cursor.value;
                                                        B(n) && (n = U(n));
                                                        var r = t(n, cursor.key, l++);
                                                        void 0 !== r ? e(r) : cursor.continue()
                                                    } else e()
                                                }, f.onerror = function() {
                                                    r(f.error)
                                                }
                                            } catch (t) {
                                                r(t)
                                            }
                                        }))
                                    })).catch(r)
                                }));
                            return v(r, e), r
                        }

                        function J(t, e, n) {
                            var r = this;
                            t = _(t);
                            var o = new h((function(n, o) {
                                var c;
                                r.ready().then((function() {
                                    return c = r._dbInfo, "[object Blob]" === S.call(e) ? T(c.db).then((function(t) {
                                        return t ? e : F(e)
                                    })) : e
                                })).then((function(e) {
                                    z(r._dbInfo, x, (function(c, f) {
                                        if (c) return o(c);
                                        try {
                                            var l = f.objectStore(r._dbInfo.storeName);
                                            null === e && (e = void 0);
                                            var d = l.put(e, t);
                                            f.oncomplete = function() {
                                                void 0 === e && (e = null), n(e)
                                            }, f.onabort = f.onerror = function() {
                                                var t = d.error ? d.error : d.transaction.error;
                                                o(t)
                                            }
                                        } catch (t) {
                                            o(t)
                                        }
                                    }))
                                })).catch(o)
                            }));
                            return v(o, n), o
                        }

                        function G(t, e) {
                            var n = this;
                            t = _(t);
                            var r = new h((function(e, r) {
                                n.ready().then((function() {
                                    z(n._dbInfo, x, (function(o, c) {
                                        if (o) return r(o);
                                        try {
                                            var f = c.objectStore(n._dbInfo.storeName).delete(t);
                                            c.oncomplete = function() {
                                                e()
                                            }, c.onerror = function() {
                                                r(f.error)
                                            }, c.onabort = function() {
                                                var t = f.error ? f.error : f.transaction.error;
                                                r(t)
                                            }
                                        } catch (t) {
                                            r(t)
                                        }
                                    }))
                                })).catch(r)
                            }));
                            return v(r, e), r
                        }

                        function K(t) {
                            var e = this,
                                n = new h((function(t, n) {
                                    e.ready().then((function() {
                                        z(e._dbInfo, x, (function(r, o) {
                                            if (r) return n(r);
                                            try {
                                                var c = o.objectStore(e._dbInfo.storeName).clear();
                                                o.oncomplete = function() {
                                                    t()
                                                }, o.onabort = o.onerror = function() {
                                                    var t = c.error ? c.error : c.transaction.error;
                                                    n(t)
                                                }
                                            } catch (t) {
                                                n(t)
                                            }
                                        }))
                                    })).catch(n)
                                }));
                            return v(n, t), n
                        }

                        function X(t) {
                            var e = this,
                                n = new h((function(t, n) {
                                    e.ready().then((function() {
                                        z(e._dbInfo, w, (function(r, o) {
                                            if (r) return n(r);
                                            try {
                                                var c = o.objectStore(e._dbInfo.storeName).count();
                                                c.onsuccess = function() {
                                                    t(c.result)
                                                }, c.onerror = function() {
                                                    n(c.error)
                                                }
                                            } catch (t) {
                                                n(t)
                                            }
                                        }))
                                    })).catch(n)
                                }));
                            return v(n, t), n
                        }

                        function Q(t, e) {
                            var n = this,
                                r = new h((function(e, r) {
                                    t < 0 ? e(null) : n.ready().then((function() {
                                        z(n._dbInfo, w, (function(o, c) {
                                            if (o) return r(o);
                                            try {
                                                var f = c.objectStore(n._dbInfo.storeName),
                                                    l = !1,
                                                    d = f.openKeyCursor();
                                                d.onsuccess = function() {
                                                    var cursor = d.result;
                                                    cursor ? 0 === t || l ? e(cursor.key) : (l = !0, cursor.advance(t)) : e(null)
                                                }, d.onerror = function() {
                                                    r(d.error)
                                                }
                                            } catch (t) {
                                                r(t)
                                            }
                                        }))
                                    })).catch(r)
                                }));
                            return v(r, e), r
                        }

                        function Z(t) {
                            var e = this,
                                n = new h((function(t, n) {
                                    e.ready().then((function() {
                                        z(e._dbInfo, w, (function(r, o) {
                                            if (r) return n(r);
                                            try {
                                                var c = o.objectStore(e._dbInfo.storeName).openKeyCursor(),
                                                    f = [];
                                                c.onsuccess = function() {
                                                    var cursor = c.result;
                                                    cursor ? (f.push(cursor.key), cursor.continue()) : t(f)
                                                }, c.onerror = function() {
                                                    n(c.error)
                                                }
                                            } catch (t) {
                                                n(t)
                                            }
                                        }))
                                    })).catch(n)
                                }));
                            return v(n, t), n
                        }

                        function tt(t, e) {
                            e = m.apply(this, arguments);
                            var n = this.config();
                            (t = "function" != typeof t && t || {}).name || (t.name = t.name || n.name, t.storeName = t.storeName || n.storeName);
                            var r, o = this;
                            if (t.name) {
                                var c = t.name === n.name && o._dbInfo.db ? h.resolve(o._dbInfo.db) : C(t).then((function(e) {
                                    var n = E[t.name],
                                        r = n.forages;
                                    n.db = e;
                                    for (var i = 0; i < r.length; i++) r[i]._dbInfo.db = e;
                                    return e
                                }));
                                r = t.storeName ? c.then((function(e) {
                                    if (e.objectStoreNames.contains(t.storeName)) {
                                        var n = e.version + 1;
                                        R(t);
                                        var r = E[t.name],
                                            o = r.forages;
                                        e.close();
                                        for (var i = 0; i < o.length; i++) {
                                            var c = o[i];
                                            c._dbInfo.db = null, c._dbInfo.version = n
                                        }
                                        return new h((function(e, r) {
                                            var o = f.open(t.name, n);
                                            o.onerror = function(t) {
                                                o.result.close(), r(t)
                                            }, o.onupgradeneeded = function() {
                                                o.result.deleteObjectStore(t.storeName)
                                            }, o.onsuccess = function() {
                                                var t = o.result;
                                                t.close(), e(t)
                                            }
                                        })).then((function(t) {
                                            r.db = t;
                                            for (var e = 0; e < o.length; e++) {
                                                var n = o[e];
                                                n._dbInfo.db = t, N(n._dbInfo)
                                            }
                                        })).catch((function(e) {
                                            throw (A(t, e) || h.resolve()).catch((function() {})), e
                                        }))
                                    }
                                })) : c.then((function(e) {
                                    R(t);
                                    var n = E[t.name],
                                        r = n.forages;
                                    e.close();
                                    for (var i = 0; i < r.length; i++) r[i]._dbInfo.db = null;
                                    return new h((function(e, n) {
                                        var r = f.deleteDatabase(t.name);
                                        r.onerror = r.onblocked = function(t) {
                                            var e = r.result;
                                            e && e.close(), n(t)
                                        }, r.onsuccess = function() {
                                            var t = r.result;
                                            t && t.close(), e(t)
                                        }
                                    })).then((function(t) {
                                        n.db = t;
                                        for (var i = 0; i < r.length; i++) N(r[i]._dbInfo)
                                    })).catch((function(e) {
                                        throw (A(t, e) || h.resolve()).catch((function() {})), e
                                    }))
                                }))
                            } else r = h.reject("Invalid arguments");
                            return v(r, e), r
                        }
                        var et = {
                            _driver: "asyncStorage",
                            _initStorage: $,
                            _support: l(),
                            iterate: Y,
                            getItem: V,
                            setItem: J,
                            removeItem: G,
                            clear: K,
                            length: X,
                            key: Q,
                            keys: Z,
                            dropInstance: tt
                        };

                        function nt() {
                            return "function" == typeof openDatabase
                        }
                        var ot = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            it = "~~local_forage_type~",
                            at = /^~~local_forage_type~([^~]+)~/,
                            ct = "__lfsc__:",
                            st = ct.length,
                            ut = "arbf",
                            ft = "blob",
                            lt = "si08",
                            pt = "ui08",
                            ht = "uic8",
                            vt = "si16",
                            yt = "si32",
                            _t = "ur16",
                            gt = "ui32",
                            bt = "fl32",
                            mt = "fl64",
                            Ot = st + ut.length,
                            jt = Object.prototype.toString;

                        function Et(t) {
                            var i, e, n, r, o, c = .75 * t.length,
                                f = t.length,
                                p = 0;
                            "=" === t[t.length - 1] && (c--, "=" === t[t.length - 2] && c--);
                            var l = new ArrayBuffer(c),
                                d = new Uint8Array(l);
                            for (i = 0; i < f; i += 4) e = ot.indexOf(t[i]), n = ot.indexOf(t[i + 1]), r = ot.indexOf(t[i + 2]), o = ot.indexOf(t[i + 3]), d[p++] = e << 2 | n >> 4, d[p++] = (15 & n) << 4 | r >> 2, d[p++] = (3 & r) << 6 | 63 & o;
                            return l
                        }

                        function St(t) {
                            var i, e = new Uint8Array(t),
                                n = "";
                            for (i = 0; i < e.length; i += 3) n += ot[e[i] >> 2], n += ot[(3 & e[i]) << 4 | e[i + 1] >> 4], n += ot[(15 & e[i + 1]) << 2 | e[i + 2] >> 6], n += ot[63 & e[i + 2]];
                            return e.length % 3 == 2 ? n = n.substring(0, n.length - 1) + "=" : e.length % 3 == 1 && (n = n.substring(0, n.length - 2) + "=="), n
                        }

                        function wt(t, e) {
                            var n = "";
                            if (t && (n = jt.call(t)), t && ("[object ArrayBuffer]" === n || t.buffer && "[object ArrayBuffer]" === jt.call(t.buffer))) {
                                var r, marker = ct;
                                t instanceof ArrayBuffer ? (r = t, marker += ut) : (r = t.buffer, "[object Int8Array]" === n ? marker += lt : "[object Uint8Array]" === n ? marker += pt : "[object Uint8ClampedArray]" === n ? marker += ht : "[object Int16Array]" === n ? marker += vt : "[object Uint16Array]" === n ? marker += _t : "[object Int32Array]" === n ? marker += yt : "[object Uint32Array]" === n ? marker += gt : "[object Float32Array]" === n ? marker += bt : "[object Float64Array]" === n ? marker += mt : e(new Error("Failed to get type for BinaryArray"))), e(marker + St(r))
                            } else if ("[object Blob]" === n) {
                                var o = new FileReader;
                                o.onload = function() {
                                    var n = it + t.type + "~" + St(this.result);
                                    e(ct + ft + n)
                                }, o.readAsArrayBuffer(t)
                            } else try {
                                e(JSON.stringify(t))
                            } catch (n) {
                                console.error("Couldn't convert value into a JSON string: ", t), e(null, n)
                            }
                        }

                        function xt(t) {
                            if (t.substring(0, st) !== ct) return JSON.parse(t);
                            var e, n = t.substring(Ot),
                                r = t.substring(st, Ot);
                            if (r === ft && at.test(n)) {
                                var o = n.match(at);
                                e = o[1], n = n.substring(o[0].length)
                            }
                            var c = Et(n);
                            switch (r) {
                                case ut:
                                    return c;
                                case ft:
                                    return d([c], {
                                        type: e
                                    });
                                case lt:
                                    return new Int8Array(c);
                                case pt:
                                    return new Uint8Array(c);
                                case ht:
                                    return new Uint8ClampedArray(c);
                                case vt:
                                    return new Int16Array(c);
                                case _t:
                                    return new Uint16Array(c);
                                case yt:
                                    return new Int32Array(c);
                                case gt:
                                    return new Uint32Array(c);
                                case bt:
                                    return new Float32Array(c);
                                case mt:
                                    return new Float64Array(c);
                                default:
                                    throw new Error("Unkown type: " + r)
                            }
                        }
                        var kt = {
                            serialize: wt,
                            deserialize: xt,
                            stringToBuffer: Et,
                            bufferToString: St
                        };

                        function It(t, e, n, r) {
                            t.executeSql("CREATE TABLE IF NOT EXISTS " + e.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], n, r)
                        }

                        function Tt(t) {
                            var e = this,
                                n = {
                                    db: null
                                };
                            if (t)
                                for (var i in t) n[i] = "string" != typeof t[i] ? t[i].toString() : t[i];
                            var r = new h((function(t, r) {
                                try {
                                    n.db = openDatabase(n.name, String(n.version), n.description, n.size)
                                } catch (t) {
                                    return r(t)
                                }
                                n.db.transaction((function(o) {
                                    It(o, n, (function() {
                                        e._dbInfo = n, t()
                                    }), (function(t, e) {
                                        r(e)
                                    }))
                                }), r)
                            }));
                            return n.serializer = kt, r
                        }

                        function Rt(t, e, n, r, o, c) {
                            t.executeSql(n, r, o, (function(t, f) {
                                f.code === f.SYNTAX_ERR ? t.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [e.storeName], (function(t, l) {
                                    l.rows.length ? c(t, f) : It(t, e, (function() {
                                        t.executeSql(n, r, o, c)
                                    }), c)
                                }), c) : c(t, f)
                            }), c)
                        }

                        function Nt(t, e) {
                            var n = this;
                            t = _(t);
                            var r = new h((function(e, r) {
                                n.ready().then((function() {
                                    var o = n._dbInfo;
                                    o.db.transaction((function(n) {
                                        Rt(n, o, "SELECT * FROM " + o.storeName + " WHERE key = ? LIMIT 1", [t], (function(t, n) {
                                            var r = n.rows.length ? n.rows.item(0).value : null;
                                            r && (r = o.serializer.deserialize(r)), e(r)
                                        }), (function(t, e) {
                                            r(e)
                                        }))
                                    }))
                                })).catch(r)
                            }));
                            return v(r, e), r
                        }

                        function At(t, e) {
                            var n = this,
                                r = new h((function(e, r) {
                                    n.ready().then((function() {
                                        var o = n._dbInfo;
                                        o.db.transaction((function(n) {
                                            Rt(n, o, "SELECT * FROM " + o.storeName, [], (function(n, r) {
                                                for (var c = r.rows, f = c.length, i = 0; i < f; i++) {
                                                    var l = c.item(i),
                                                        d = l.value;
                                                    if (d && (d = o.serializer.deserialize(d)), void 0 !== (d = t(d, l.key, i + 1))) return void e(d)
                                                }
                                                e()
                                            }), (function(t, e) {
                                                r(e)
                                            }))
                                        }))
                                    })).catch(r)
                                }));
                            return v(r, e), r
                        }

                        function Dt(t, e, n, r) {
                            var o = this;
                            t = _(t);
                            var c = new h((function(c, f) {
                                o.ready().then((function() {
                                    void 0 === e && (e = null);
                                    var l = e,
                                        d = o._dbInfo;
                                    d.serializer.serialize(e, (function(e, h) {
                                        h ? f(h) : d.db.transaction((function(n) {
                                            Rt(n, d, "INSERT OR REPLACE INTO " + d.storeName + " (key, value) VALUES (?, ?)", [t, e], (function() {
                                                c(l)
                                            }), (function(t, e) {
                                                f(e)
                                            }))
                                        }), (function(e) {
                                            if (e.code === e.QUOTA_ERR) {
                                                if (r > 0) return void c(Dt.apply(o, [t, l, n, r - 1]));
                                                f(e)
                                            }
                                        }))
                                    }))
                                })).catch(f)
                            }));
                            return v(c, n), c
                        }

                        function Ct(t, e, n) {
                            return Dt.apply(this, [t, e, n, 1])
                        }

                        function Lt(t, e) {
                            var n = this;
                            t = _(t);
                            var r = new h((function(e, r) {
                                n.ready().then((function() {
                                    var o = n._dbInfo;
                                    o.db.transaction((function(n) {
                                        Rt(n, o, "DELETE FROM " + o.storeName + " WHERE key = ?", [t], (function() {
                                            e()
                                        }), (function(t, e) {
                                            r(e)
                                        }))
                                    }))
                                })).catch(r)
                            }));
                            return v(r, e), r
                        }

                        function Pt(t) {
                            var e = this,
                                n = new h((function(t, n) {
                                    e.ready().then((function() {
                                        var r = e._dbInfo;
                                        r.db.transaction((function(e) {
                                            Rt(e, r, "DELETE FROM " + r.storeName, [], (function() {
                                                t()
                                            }), (function(t, e) {
                                                n(e)
                                            }))
                                        }))
                                    })).catch(n)
                                }));
                            return v(n, t), n
                        }

                        function Ft(t) {
                            var e = this,
                                n = new h((function(t, n) {
                                    e.ready().then((function() {
                                        var r = e._dbInfo;
                                        r.db.transaction((function(e) {
                                            Rt(e, r, "SELECT COUNT(key) as c FROM " + r.storeName, [], (function(e, n) {
                                                var r = n.rows.item(0).c;
                                                t(r)
                                            }), (function(t, e) {
                                                n(e)
                                            }))
                                        }))
                                    })).catch(n)
                                }));
                            return v(n, t), n
                        }

                        function Ut(t, e) {
                            var n = this,
                                r = new h((function(e, r) {
                                    n.ready().then((function() {
                                        var o = n._dbInfo;
                                        o.db.transaction((function(n) {
                                            Rt(n, o, "SELECT key FROM " + o.storeName + " WHERE id = ? LIMIT 1", [t + 1], (function(t, n) {
                                                var r = n.rows.length ? n.rows.item(0).key : null;
                                                e(r)
                                            }), (function(t, e) {
                                                r(e)
                                            }))
                                        }))
                                    })).catch(r)
                                }));
                            return v(r, e), r
                        }

                        function Bt(t) {
                            var e = this,
                                n = new h((function(t, n) {
                                    e.ready().then((function() {
                                        var r = e._dbInfo;
                                        r.db.transaction((function(e) {
                                            Rt(e, r, "SELECT key FROM " + r.storeName, [], (function(e, n) {
                                                for (var r = [], i = 0; i < n.rows.length; i++) r.push(n.rows.item(i).key);
                                                t(r)
                                            }), (function(t, e) {
                                                n(e)
                                            }))
                                        }))
                                    })).catch(n)
                                }));
                            return v(n, t), n
                        }

                        function Mt(t) {
                            return new h((function(e, n) {
                                t.transaction((function(r) {
                                    r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], (function(n, r) {
                                        for (var o = [], i = 0; i < r.rows.length; i++) o.push(r.rows.item(i).name);
                                        e({
                                            db: t,
                                            storeNames: o
                                        })
                                    }), (function(t, e) {
                                        n(e)
                                    }))
                                }), (function(t) {
                                    n(t)
                                }))
                            }))
                        }

                        function Ht(t, e) {
                            e = m.apply(this, arguments);
                            var n = this.config();
                            (t = "function" != typeof t && t || {}).name || (t.name = t.name || n.name, t.storeName = t.storeName || n.storeName);
                            var r, o = this;
                            return v(r = t.name ? new h((function(e) {
                                var r;
                                r = t.name === n.name ? o._dbInfo.db : openDatabase(t.name, "", "", 0), t.storeName ? e({
                                    db: r,
                                    storeNames: [t.storeName]
                                }) : e(Mt(r))
                            })).then((function(t) {
                                return new h((function(e, n) {
                                    t.db.transaction((function(r) {
                                        function o(t) {
                                            return new h((function(e, n) {
                                                r.executeSql("DROP TABLE IF EXISTS " + t, [], (function() {
                                                    e()
                                                }), (function(t, e) {
                                                    n(e)
                                                }))
                                            }))
                                        }
                                        for (var c = [], i = 0, f = t.storeNames.length; i < f; i++) c.push(o(t.storeNames[i]));
                                        h.all(c).then((function() {
                                            e()
                                        })).catch((function(t) {
                                            n(t)
                                        }))
                                    }), (function(t) {
                                        n(t)
                                    }))
                                }))
                            })) : h.reject("Invalid arguments"), e), r
                        }
                        var qt = {
                            _driver: "webSQLStorage",
                            _initStorage: Tt,
                            _support: nt(),
                            iterate: At,
                            getItem: Nt,
                            setItem: Ct,
                            removeItem: Lt,
                            clear: Pt,
                            length: Ft,
                            key: Ut,
                            keys: Bt,
                            dropInstance: Ht
                        };

                        function zt() {
                            try {
                                return "undefined" != typeof localStorage && "setItem" in localStorage && !!localStorage.setItem
                            } catch (t) {
                                return !1
                            }
                        }

                        function Wt(t, e) {
                            var n = t.name + "/";
                            return t.storeName !== e.storeName && (n += t.storeName + "/"), n
                        }

                        function $t() {
                            var t = "_localforage_support_test";
                            try {
                                return localStorage.setItem(t, !0), localStorage.removeItem(t), !1
                            } catch (t) {
                                return !0
                            }
                        }

                        function Vt() {
                            return !$t() || localStorage.length > 0
                        }

                        function Yt(t) {
                            var e = this,
                                n = {};
                            if (t)
                                for (var i in t) n[i] = t[i];
                            return n.keyPrefix = Wt(t, e._defaultConfig), Vt() ? (e._dbInfo = n, n.serializer = kt, h.resolve()) : h.reject()
                        }

                        function Jt(t) {
                            var e = this,
                                n = e.ready().then((function() {
                                    for (var t = e._dbInfo.keyPrefix, i = localStorage.length - 1; i >= 0; i--) {
                                        var n = localStorage.key(i);
                                        0 === n.indexOf(t) && localStorage.removeItem(n)
                                    }
                                }));
                            return v(n, t), n
                        }

                        function Gt(t, e) {
                            var n = this;
                            t = _(t);
                            var r = n.ready().then((function() {
                                var e = n._dbInfo,
                                    r = localStorage.getItem(e.keyPrefix + t);
                                return r && (r = e.serializer.deserialize(r)), r
                            }));
                            return v(r, e), r
                        }

                        function Kt(t, e) {
                            var n = this,
                                r = n.ready().then((function() {
                                    for (var e = n._dbInfo, r = e.keyPrefix, o = r.length, c = localStorage.length, f = 1, i = 0; i < c; i++) {
                                        var l = localStorage.key(i);
                                        if (0 === l.indexOf(r)) {
                                            var d = localStorage.getItem(l);
                                            if (d && (d = e.serializer.deserialize(d)), void 0 !== (d = t(d, l.substring(o), f++))) return d
                                        }
                                    }
                                }));
                            return v(r, e), r
                        }

                        function Xt(t, e) {
                            var n = this,
                                r = n.ready().then((function() {
                                    var e, r = n._dbInfo;
                                    try {
                                        e = localStorage.key(t)
                                    } catch (t) {
                                        e = null
                                    }
                                    return e && (e = e.substring(r.keyPrefix.length)), e
                                }));
                            return v(r, e), r
                        }

                        function Qt(t) {
                            var e = this,
                                n = e.ready().then((function() {
                                    for (var t = e._dbInfo, n = localStorage.length, r = [], i = 0; i < n; i++) {
                                        var o = localStorage.key(i);
                                        0 === o.indexOf(t.keyPrefix) && r.push(o.substring(t.keyPrefix.length))
                                    }
                                    return r
                                }));
                            return v(n, t), n
                        }

                        function Zt(t) {
                            var e = this.keys().then((function(t) {
                                return t.length
                            }));
                            return v(e, t), e
                        }

                        function te(t, e) {
                            var n = this;
                            t = _(t);
                            var r = n.ready().then((function() {
                                var e = n._dbInfo;
                                localStorage.removeItem(e.keyPrefix + t)
                            }));
                            return v(r, e), r
                        }

                        function ee(t, e, n) {
                            var r = this;
                            t = _(t);
                            var o = r.ready().then((function() {
                                void 0 === e && (e = null);
                                var n = e;
                                return new h((function(o, c) {
                                    var f = r._dbInfo;
                                    f.serializer.serialize(e, (function(e, r) {
                                        if (r) c(r);
                                        else try {
                                            localStorage.setItem(f.keyPrefix + t, e), o(n)
                                        } catch (t) {
                                            "QuotaExceededError" !== t.name && "NS_ERROR_DOM_QUOTA_REACHED" !== t.name || c(t), c(t)
                                        }
                                    }))
                                }))
                            }));
                            return v(o, n), o
                        }

                        function ne(t, e) {
                            if (e = m.apply(this, arguments), !(t = "function" != typeof t && t || {}).name) {
                                var n = this.config();
                                t.name = t.name || n.name, t.storeName = t.storeName || n.storeName
                            }
                            var r, o = this;
                            return v(r = t.name ? new h((function(e) {
                                t.storeName ? e(Wt(t, o._defaultConfig)) : e(t.name + "/")
                            })).then((function(t) {
                                for (var i = localStorage.length - 1; i >= 0; i--) {
                                    var e = localStorage.key(i);
                                    0 === e.indexOf(t) && localStorage.removeItem(e)
                                }
                            })) : h.reject("Invalid arguments"), e), r
                        }
                        var re = {
                                _driver: "localStorageWrapper",
                                _initStorage: Yt,
                                _support: zt(),
                                iterate: Kt,
                                getItem: Gt,
                                setItem: ee,
                                removeItem: te,
                                clear: Jt,
                                length: Zt,
                                key: Xt,
                                keys: Qt,
                                dropInstance: ne
                            },
                            oe = function(t, e) {
                                return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
                            },
                            ie = function(t, e) {
                                for (var n = t.length, i = 0; i < n;) {
                                    if (oe(t[i], e)) return !0;
                                    i++
                                }
                                return !1
                            },
                            ae = Array.isArray || function(t) {
                                return "[object Array]" === Object.prototype.toString.call(t)
                            },
                            ce = {},
                            se = {},
                            ue = {
                                INDEXEDDB: et,
                                WEBSQL: qt,
                                LOCALSTORAGE: re
                            },
                            fe = [ue.INDEXEDDB._driver, ue.WEBSQL._driver, ue.LOCALSTORAGE._driver],
                            le = ["dropInstance"],
                            pe = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(le),
                            de = {
                                description: "",
                                driver: fe.slice(),
                                name: "localforage",
                                size: 4980736,
                                storeName: "keyvaluepairs",
                                version: 1
                            };

                        function he(t, e) {
                            t[e] = function() {
                                var n = arguments;
                                return t.ready().then((function() {
                                    return t[e].apply(t, n)
                                }))
                            }
                        }

                        function ve() {
                            for (var i = 1; i < arguments.length; i++) {
                                var t = arguments[i];
                                if (t)
                                    for (var e in t) t.hasOwnProperty(e) && (ae(t[e]) ? arguments[0][e] = t[e].slice() : arguments[0][e] = t[e])
                            }
                            return arguments[0]
                        }
                        var ye = new(function() {
                            function t(e) {
                                for (var n in o(this, t), ue)
                                    if (ue.hasOwnProperty(n)) {
                                        var r = ue[n],
                                            c = r._driver;
                                        this[n] = c, ce[c] || this.defineDriver(r)
                                    }
                                this._defaultConfig = ve({}, de), this._config = ve({}, this._defaultConfig, e), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch((function() {}))
                            }
                            return t.prototype.config = function(t) {
                                if ("object" === (void 0 === t ? "undefined" : r(t))) {
                                    if (this._ready) return new Error("Can't call config() after localforage has been used.");
                                    for (var i in t) {
                                        if ("storeName" === i && (t[i] = t[i].replace(/\W/g, "_")), "version" === i && "number" != typeof t[i]) return new Error("Database version must be a number.");
                                        this._config[i] = t[i]
                                    }
                                    return !("driver" in t) || !t.driver || this.setDriver(this._config.driver)
                                }
                                return "string" == typeof t ? this._config[t] : this._config
                            }, t.prototype.defineDriver = function(t, e, n) {
                                var r = new h((function(e, n) {
                                    try {
                                        var r = t._driver,
                                            o = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
                                        if (!t._driver) return void n(o);
                                        for (var c = pe.concat("_initStorage"), i = 0, f = c.length; i < f; i++) {
                                            var l = c[i];
                                            if ((!ie(le, l) || t[l]) && "function" != typeof t[l]) return void n(o)
                                        }! function() {
                                            for (var e = function(t) {
                                                    return function() {
                                                        var e = new Error("Method " + t + " is not implemented by the current driver"),
                                                            n = h.reject(e);
                                                        return v(n, arguments[arguments.length - 1]), n
                                                    }
                                                }, n = 0, r = le.length; n < r; n++) {
                                                var o = le[n];
                                                t[o] || (t[o] = e(o))
                                            }
                                        }();
                                        var d = function(n) {
                                            ce[r] && console.info("Redefining LocalForage driver: " + r), ce[r] = t, se[r] = n, e()
                                        };
                                        "_support" in t ? t._support && "function" == typeof t._support ? t._support().then(d, n) : d(!!t._support) : d(!0)
                                    } catch (t) {
                                        n(t)
                                    }
                                }));
                                return y(r, e, n), r
                            }, t.prototype.driver = function() {
                                return this._driver || null
                            }, t.prototype.getDriver = function(t, e, n) {
                                var r = ce[t] ? h.resolve(ce[t]) : h.reject(new Error("Driver not found."));
                                return y(r, e, n), r
                            }, t.prototype.getSerializer = function(t) {
                                var e = h.resolve(kt);
                                return y(e, t), e
                            }, t.prototype.ready = function(t) {
                                var e = this,
                                    n = e._driverSet.then((function() {
                                        return null === e._ready && (e._ready = e._initDriver()), e._ready
                                    }));
                                return y(n, t, t), n
                            }, t.prototype.setDriver = function(t, e, n) {
                                var r = this;
                                ae(t) || (t = [t]);
                                var o = this._getSupportedDrivers(t);

                                function c() {
                                    r._config.driver = r.driver()
                                }

                                function f(t) {
                                    return r._extend(t), c(), r._ready = r._initStorage(r._config), r._ready
                                }

                                function l(t) {
                                    return function() {
                                        var e = 0;

                                        function n() {
                                            for (; e < t.length;) {
                                                var o = t[e];
                                                return e++, r._dbInfo = null, r._ready = null, r.getDriver(o).then(f).catch(n)
                                            }
                                            c();
                                            var l = new Error("No available storage method found.");
                                            return r._driverSet = h.reject(l), r._driverSet
                                        }
                                        return n()
                                    }
                                }
                                var d = null !== this._driverSet ? this._driverSet.catch((function() {
                                    return h.resolve()
                                })) : h.resolve();
                                return this._driverSet = d.then((function() {
                                    var t = o[0];
                                    return r._dbInfo = null, r._ready = null, r.getDriver(t).then((function(t) {
                                        r._driver = t._driver, c(), r._wrapLibraryMethodsWithReady(), r._initDriver = l(o)
                                    }))
                                })).catch((function() {
                                    c();
                                    var t = new Error("No available storage method found.");
                                    return r._driverSet = h.reject(t), r._driverSet
                                })), y(this._driverSet, e, n), this._driverSet
                            }, t.prototype.supports = function(t) {
                                return !!se[t]
                            }, t.prototype._extend = function(t) {
                                ve(this, t)
                            }, t.prototype._getSupportedDrivers = function(t) {
                                for (var e = [], i = 0, n = t.length; i < n; i++) {
                                    var r = t[i];
                                    this.supports(r) && e.push(r)
                                }
                                return e
                            }, t.prototype._wrapLibraryMethodsWithReady = function() {
                                for (var i = 0, t = pe.length; i < t; i++) he(this, pe[i])
                            }, t.prototype.createInstance = function(e) {
                                return new t(e)
                            }, t
                        }());
                        e.exports = ye
                    }, {
                        3: 3
                    }]
                }, {}, [4])(4)
            }).call(this, n(7))
        },
        432: function(t, e, n) {
            "use strict";
            var r;
            n.d(e, "a", (function() {
                    return r
                })),
                function(t) {
                    t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
                }(r || (r = {})),
                function(t) {
                    t.fromString = function(e) {
                        switch (e) {
                            case "debug":
                                return t.Debug;
                            case "info":
                                return t.Info;
                            case "warn":
                            case "warning":
                                return t.Warning;
                            case "error":
                                return t.Error;
                            case "fatal":
                                return t.Fatal;
                            case "critical":
                                return t.Critical;
                            case "log":
                            default:
                                return t.Log
                        }
                    }
                }(r || (r = {}))
        },
        433: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return d
                })), n.d(e, "b", (function() {
                    return h
                }));
                var r = n(369),
                    o = n(393),
                    c = {
                        nowSeconds: function() {
                            return Date.now() / 1e3
                        }
                    };
                var f = Object(o.b)() ? function() {
                        try {
                            return Object(o.a)(t, "perf_hooks").performance
                        } catch (t) {
                            return
                        }
                    }() : function() {
                        var t = Object(r.e)().performance;
                        if (t && t.now) return {
                            now: function() {
                                return t.now()
                            },
                            timeOrigin: Date.now() - t.now()
                        }
                    }(),
                    l = void 0 === f ? c : {
                        nowSeconds: function() {
                            return (f.timeOrigin + f.now()) / 1e3
                        }
                    },
                    d = c.nowSeconds.bind(c),
                    h = l.nowSeconds.bind(l);
                ! function() {
                    var t = Object(r.e)().performance;
                    if (t) {
                        var e = 36e5,
                            n = t.now(),
                            o = Date.now(),
                            c = t.timeOrigin ? Math.abs(t.timeOrigin + n - o) : e,
                            f = c < e,
                            l = t.timing && t.timing.navigationStart,
                            d = "number" == typeof l ? Math.abs(l + n - o) : e;
                        return f || d < e ? c <= d ? ("timeOrigin", t.timeOrigin) : ("navigationStart", l) : ("dateNow", o)
                    }
                    "none"
                }()
            }).call(this, n(426)(t))
        },
        434: function(t, e, n) {
            (function(t, n) {
                var r = "__lodash_hash_undefined__",
                    o = 9007199254740991,
                    c = "[object Arguments]",
                    f = "[object Function]",
                    l = "[object Object]",
                    d = /^\[object .+?Constructor\]$/,
                    h = /^(?:0|[1-9]\d*)$/,
                    v = {};
                v["[object Float32Array]"] = v["[object Float64Array]"] = v["[object Int8Array]"] = v["[object Int16Array]"] = v["[object Int32Array]"] = v["[object Uint8Array]"] = v["[object Uint8ClampedArray]"] = v["[object Uint16Array]"] = v["[object Uint32Array]"] = !0, v[c] = v["[object Array]"] = v["[object ArrayBuffer]"] = v["[object Boolean]"] = v["[object DataView]"] = v["[object Date]"] = v["[object Error]"] = v[f] = v["[object Map]"] = v["[object Number]"] = v[l] = v["[object RegExp]"] = v["[object Set]"] = v["[object String]"] = v["[object WeakMap]"] = !1;
                var y = "object" == typeof t && t && t.Object === Object && t,
                    _ = "object" == typeof self && self && self.Object === Object && self,
                    m = y || _ || Function("return this")(),
                    O = e && !e.nodeType && e,
                    j = O && "object" == typeof n && n && !n.nodeType && n,
                    E = j && j.exports === O,
                    S = E && y.process,
                    w = function() {
                        try {
                            var t = j && j.require && j.require("util").types;
                            return t || S && S.binding && S.binding("util")
                        } catch (t) {}
                    }(),
                    x = w && w.isTypedArray;

                function k(t, e, n) {
                    switch (n.length) {
                        case 0:
                            return t.call(e);
                        case 1:
                            return t.call(e, n[0]);
                        case 2:
                            return t.call(e, n[0], n[1]);
                        case 3:
                            return t.call(e, n[0], n[1], n[2])
                    }
                    return t.apply(e, n)
                }
                var I, T, R, N = Array.prototype,
                    A = Function.prototype,
                    D = Object.prototype,
                    C = m["__core-js_shared__"],
                    L = A.toString,
                    P = D.hasOwnProperty,
                    F = (I = /[^.]+$/.exec(C && C.keys && C.keys.IE_PROTO || "")) ? "Symbol(src)_1." + I : "",
                    U = D.toString,
                    B = L.call(Object),
                    M = RegExp("^" + L.call(P).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    H = E ? m.Buffer : void 0,
                    z = m.Symbol,
                    W = m.Uint8Array,
                    $ = H ? H.allocUnsafe : void 0,
                    V = (T = Object.getPrototypeOf, R = Object, function(t) {
                        return T(R(t))
                    }),
                    Y = Object.create,
                    J = D.propertyIsEnumerable,
                    G = N.splice,
                    K = z ? z.toStringTag : void 0,
                    X = function() {
                        try {
                            var t = St(Object, "defineProperty");
                            return t({}, "", {}), t
                        } catch (t) {}
                    }(),
                    Q = H ? H.isBuffer : void 0,
                    Z = Math.max,
                    tt = Date.now,
                    et = St(m, "Map"),
                    nt = St(Object, "create"),
                    ot = function() {
                        function object() {}
                        return function(t) {
                            if (!Pt(t)) return {};
                            if (Y) return Y(t);
                            object.prototype = t;
                            var e = new object;
                            return object.prototype = void 0, e
                        }
                    }();

                function it(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function at(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function ct(t) {
                    var e = -1,
                        n = null == t ? 0 : t.length;
                    for (this.clear(); ++e < n;) {
                        var r = t[e];
                        this.set(r[0], r[1])
                    }
                }

                function st(t) {
                    var data = this.__data__ = new at(t);
                    this.size = data.size
                }

                function ut(t, e) {
                    var n = Nt(t),
                        r = !n && Rt(t),
                        o = !n && !r && Dt(t),
                        c = !n && !r && !o && Ut(t),
                        f = n || r || o || c,
                        l = f ? function(t, e) {
                            for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
                            return r
                        }(t.length, String) : [],
                        d = l.length;
                    for (var h in t) !e && !P.call(t, h) || f && ("length" == h || o && ("offset" == h || "parent" == h) || c && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || wt(h, d)) || l.push(h);
                    return l
                }

                function ft(object, t, e) {
                    (void 0 !== e && !Tt(object[t], e) || void 0 === e && !(t in object)) && ht(object, t, e)
                }

                function lt(object, t, e) {
                    var n = object[t];
                    P.call(object, t) && Tt(n, e) && (void 0 !== e || t in object) || ht(object, t, e)
                }

                function pt(t, e) {
                    for (var n = t.length; n--;)
                        if (Tt(t[n][0], e)) return n;
                    return -1
                }

                function ht(object, t, e) {
                    "__proto__" == t && X ? X(object, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: e,
                        writable: !0
                    }) : object[t] = e
                }
                it.prototype.clear = function() {
                    this.__data__ = nt ? nt(null) : {}, this.size = 0
                }, it.prototype.delete = function(t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return this.size -= e ? 1 : 0, e
                }, it.prototype.get = function(t) {
                    var data = this.__data__;
                    if (nt) {
                        var e = data[t];
                        return e === r ? void 0 : e
                    }
                    return P.call(data, t) ? data[t] : void 0
                }, it.prototype.has = function(t) {
                    var data = this.__data__;
                    return nt ? void 0 !== data[t] : P.call(data, t)
                }, it.prototype.set = function(t, e) {
                    var data = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, data[t] = nt && void 0 === e ? r : e, this
                }, at.prototype.clear = function() {
                    this.__data__ = [], this.size = 0
                }, at.prototype.delete = function(t) {
                    var data = this.__data__,
                        e = pt(data, t);
                    return !(e < 0) && (e == data.length - 1 ? data.pop() : G.call(data, e, 1), --this.size, !0)
                }, at.prototype.get = function(t) {
                    var data = this.__data__,
                        e = pt(data, t);
                    return e < 0 ? void 0 : data[e][1]
                }, at.prototype.has = function(t) {
                    return pt(this.__data__, t) > -1
                }, at.prototype.set = function(t, e) {
                    var data = this.__data__,
                        n = pt(data, t);
                    return n < 0 ? (++this.size, data.push([t, e])) : data[n][1] = e, this
                }, ct.prototype.clear = function() {
                    this.size = 0, this.__data__ = {
                        hash: new it,
                        map: new(et || at),
                        string: new it
                    }
                }, ct.prototype.delete = function(t) {
                    var e = Et(this, t).delete(t);
                    return this.size -= e ? 1 : 0, e
                }, ct.prototype.get = function(t) {
                    return Et(this, t).get(t)
                }, ct.prototype.has = function(t) {
                    return Et(this, t).has(t)
                }, ct.prototype.set = function(t, e) {
                    var data = Et(this, t),
                        n = data.size;
                    return data.set(t, e), this.size += data.size == n ? 0 : 1, this
                }, st.prototype.clear = function() {
                    this.__data__ = new at, this.size = 0
                }, st.prototype.delete = function(t) {
                    var data = this.__data__,
                        e = data.delete(t);
                    return this.size = data.size, e
                }, st.prototype.get = function(t) {
                    return this.__data__.get(t)
                }, st.prototype.has = function(t) {
                    return this.__data__.has(t)
                }, st.prototype.set = function(t, e) {
                    var data = this.__data__;
                    if (data instanceof at) {
                        var n = data.__data__;
                        if (!et || n.length < 199) return n.push([t, e]), this.size = ++data.size, this;
                        data = this.__data__ = new ct(n)
                    }
                    return data.set(t, e), this.size = data.size, this
                };
                var vt, yt = function(object, t, e) {
                    for (var n = -1, r = Object(object), o = e(object), c = o.length; c--;) {
                        var f = o[vt ? c : ++n];
                        if (!1 === t(r[f], f, r)) break
                    }
                    return object
                };

                function _t(t) {
                    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : K && K in Object(t) ? function(t) {
                        var e = P.call(t, K),
                            n = t[K];
                        try {
                            t[K] = void 0;
                            var r = !0
                        } catch (t) {}
                        var o = U.call(t);
                        r && (e ? t[K] = n : delete t[K]);
                        return o
                    }(t) : function(t) {
                        return U.call(t)
                    }(t)
                }

                function gt(t) {
                    return Ft(t) && _t(t) == c
                }

                function bt(t) {
                    return !(!Pt(t) || function(t) {
                        return !!F && F in t
                    }(t)) && (Ct(t) ? M : d).test(function(t) {
                        if (null != t) {
                            try {
                                return L.call(t)
                            } catch (t) {}
                            try {
                                return t + ""
                            } catch (t) {}
                        }
                        return ""
                    }(t))
                }

                function mt(object) {
                    if (!Pt(object)) return function(object) {
                        var t = [];
                        if (null != object)
                            for (var e in Object(object)) t.push(e);
                        return t
                    }(object);
                    var t = xt(object),
                        e = [];
                    for (var n in object)("constructor" != n || !t && P.call(object, n)) && e.push(n);
                    return e
                }

                function Ot(object, source, t, e, n) {
                    object !== source && yt(source, (function(r, o) {
                        if (n || (n = new st), Pt(r)) ! function(object, source, t, e, n, r, o) {
                            var c = kt(object, t),
                                f = kt(source, t),
                                d = o.get(f);
                            if (d) return void ft(object, t, d);
                            var h = r ? r(c, f, t + "", object, source, o) : void 0,
                                v = void 0 === h;
                            if (v) {
                                var y = Nt(f),
                                    _ = !y && Dt(f),
                                    m = !y && !_ && Ut(f);
                                h = f, y || _ || m ? Nt(c) ? h = c : Ft(w = c) && At(w) ? h = function(source, t) {
                                    var e = -1,
                                        n = source.length;
                                    t || (t = Array(n));
                                    for (; ++e < n;) t[e] = source[e];
                                    return t
                                }(c) : _ ? (v = !1, h = function(t, e) {
                                    if (e) return t.slice();
                                    var n = t.length,
                                        r = $ ? $(n) : new t.constructor(n);
                                    return t.copy(r), r
                                }(f, !0)) : m ? (v = !1, O = f, j = !0 ? (E = O.buffer, S = new E.constructor(E.byteLength), new W(S).set(new W(E)), S) : O.buffer, h = new O.constructor(j, O.byteOffset, O.length)) : h = [] : function(t) {
                                    if (!Ft(t) || _t(t) != l) return !1;
                                    var e = V(t);
                                    if (null === e) return !0;
                                    var n = P.call(e, "constructor") && e.constructor;
                                    return "function" == typeof n && n instanceof n && L.call(n) == B
                                }(f) || Rt(f) ? (h = c, Rt(c) ? h = function(t) {
                                    return function(source, t, object, e) {
                                        var n = !object;
                                        object || (object = {});
                                        var r = -1,
                                            o = t.length;
                                        for (; ++r < o;) {
                                            var c = t[r],
                                                f = e ? e(object[c], source[c], c, object, source) : void 0;
                                            void 0 === f && (f = source[c]), n ? ht(object, c, f) : lt(object, c, f)
                                        }
                                        return object
                                    }(t, Bt(t))
                                }(c) : Pt(c) && !Ct(c) || (h = function(object) {
                                    return "function" != typeof object.constructor || xt(object) ? {} : ot(V(object))
                                }(f))) : v = !1
                            }
                            var O, j, E, S;
                            var w;
                            v && (o.set(f, h), n(h, f, e, r, o), o.delete(f));
                            ft(object, t, h)
                        }(object, source, o, t, Ot, e, n);
                        else {
                            var c = e ? e(kt(object, o), r, o + "", object, source, n) : void 0;
                            void 0 === c && (c = r), ft(object, o, c)
                        }
                    }), Bt)
                }

                function jt(t, e) {
                    return It(function(t, e, n) {
                        return e = Z(void 0 === e ? t.length - 1 : e, 0),
                            function() {
                                for (var r = arguments, o = -1, c = Z(r.length - e, 0), f = Array(c); ++o < c;) f[o] = r[e + o];
                                o = -1;
                                for (var l = Array(e + 1); ++o < e;) l[o] = r[o];
                                return l[e] = n(f), k(t, this, l)
                            }
                    }(t, e, qt), t + "")
                }

                function Et(map, t) {
                    var e, n, data = map.__data__;
                    return ("string" == (n = typeof(e = t)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e) ? data["string" == typeof t ? "string" : "hash"] : data.map
                }

                function St(object, t) {
                    var e = function(object, t) {
                        return null == object ? void 0 : object[t]
                    }(object, t);
                    return bt(e) ? e : void 0
                }

                function wt(t, e) {
                    var n = typeof t;
                    return !!(e = null == e ? o : e) && ("number" == n || "symbol" != n && h.test(t)) && t > -1 && t % 1 == 0 && t < e
                }

                function xt(t) {
                    var e = t && t.constructor;
                    return t === ("function" == typeof e && e.prototype || D)
                }

                function kt(object, t) {
                    if (("constructor" !== t || "function" != typeof object[t]) && "__proto__" != t) return object[t]
                }
                var It = function(t) {
                    var e = 0,
                        n = 0;
                    return function() {
                        var r = tt(),
                            o = 16 - (r - n);
                        if (n = r, o > 0) {
                            if (++e >= 800) return arguments[0]
                        } else e = 0;
                        return t.apply(void 0, arguments)
                    }
                }(X ? function(t, e) {
                    return X(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: (n = e, function() {
                            return n
                        }),
                        writable: !0
                    });
                    var n
                } : qt);

                function Tt(t, e) {
                    return t === e || t != t && e != e
                }
                var Rt = gt(function() {
                        return arguments
                    }()) ? gt : function(t) {
                        return Ft(t) && P.call(t, "callee") && !J.call(t, "callee")
                    },
                    Nt = Array.isArray;

                function At(t) {
                    return null != t && Lt(t.length) && !Ct(t)
                }
                var Dt = Q || function() {
                    return !1
                };

                function Ct(t) {
                    if (!Pt(t)) return !1;
                    var e = _t(t);
                    return e == f || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }

                function Lt(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
                }

                function Pt(t) {
                    var e = typeof t;
                    return null != t && ("object" == e || "function" == e)
                }

                function Ft(t) {
                    return null != t && "object" == typeof t
                }
                var Ut = x ? function(t) {
                    return function(e) {
                        return t(e)
                    }
                }(x) : function(t) {
                    return Ft(t) && Lt(t.length) && !!v[_t(t)]
                };

                function Bt(object) {
                    return At(object) ? ut(object, !0) : mt(object)
                }
                var Mt, Ht = (Mt = function(object, source, t) {
                    Ot(object, source, t)
                }, jt((function(object, t) {
                    var e = -1,
                        n = t.length,
                        r = n > 1 ? t[n - 1] : void 0,
                        o = n > 2 ? t[2] : void 0;
                    for (r = Mt.length > 3 && "function" == typeof r ? (n--, r) : void 0, o && function(t, e, object) {
                            if (!Pt(object)) return !1;
                            var n = typeof e;
                            return !!("number" == n ? At(object) && wt(e, object.length) : "string" == n && e in object) && Tt(object[e], t)
                        }(t[0], t[1], o) && (r = n < 3 ? void 0 : r, n = 1), object = Object(object); ++e < n;) {
                        var source = t[e];
                        source && Mt(object, source, e, r)
                    }
                    return object
                })));

                function qt(t) {
                    return t
                }
                n.exports = Ht
            }).call(this, n(7), n(71)(t))
        },
        435: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Severity", (function() {
                return d.a
            })), n.d(e, "Status", (function() {
                return f
            })), n.d(e, "addGlobalEventProcessor", (function() {
                return E
            })), n.d(e, "addBreadcrumb", (function() {
                return B
            })), n.d(e, "captureException", (function() {
                return L
            })), n.d(e, "captureEvent", (function() {
                return F
            })), n.d(e, "captureMessage", (function() {
                return P
            })), n.d(e, "configureScope", (function() {
                return U
            })), n.d(e, "getHubFromCarrier", (function() {
                return A
            })), n.d(e, "getCurrentHub", (function() {
                return R
            })), n.d(e, "Hub", (function() {
                return k
            })), n.d(e, "makeMain", (function() {
                return T
            })), n.d(e, "Scope", (function() {
                return O
            })), n.d(e, "startTransaction", (function() {
                return J
            })), n.d(e, "SDK_VERSION", (function() {
                return G
            })), n.d(e, "setContext", (function() {
                return M
            })), n.d(e, "setExtra", (function() {
                return W
            })), n.d(e, "setExtras", (function() {
                return H
            })), n.d(e, "setTag", (function() {
                return $
            })), n.d(e, "setTags", (function() {
                return z
            })), n.d(e, "setUser", (function() {
                return V
            })), n.d(e, "withScope", (function() {
                return Y
            })), n.d(e, "BrowserClient", (function() {
                return ce
            })), n.d(e, "injectReportDialog", (function() {
                return qt
            })), n.d(e, "eventFromException", (function() {
                return Et
            })), n.d(e, "eventFromMessage", (function() {
                return St
            })), n.d(e, "defaultIntegrations", (function() {
                return _e
            })), n.d(e, "forceLoad", (function() {
                return Oe
            })), n.d(e, "init", (function() {
                return ge
            })), n.d(e, "lastEventId", (function() {
                return me
            })), n.d(e, "onLoad", (function() {
                return je
            })), n.d(e, "showReportDialog", (function() {
                return be
            })), n.d(e, "flush", (function() {
                return Ee
            })), n.d(e, "close", (function() {
                return Se
            })), n.d(e, "wrap", (function() {
                return we
            })), n.d(e, "SDK_NAME", (function() {
                return xe
            })), n.d(e, "Integrations", (function() {
                return Te
            })), n.d(e, "Transports", (function() {
                return c
            }));
            var r = {};
            n.r(r), n.d(r, "FunctionToString", (function() {
                return se
            })), n.d(r, "InboundFilters", (function() {
                return fe
            }));
            var o = {};
            n.r(o), n.d(o, "GlobalHandlers", (function() {
                return de
            })), n.d(o, "TryCatch", (function() {
                return pe
            })), n.d(o, "Breadcrumbs", (function() {
                return ae
            })), n.d(o, "LinkedErrors", (function() {
                return he
            })), n.d(o, "UserAgent", (function() {
                return ye
            }));
            var c = {};
            n.r(c), n.d(c, "BaseTransport", (function() {
                return Ct
            })), n.d(c, "FetchTransport", (function() {
                return Lt
            })), n.d(c, "XHRTransport", (function() {
                return Pt
            }));
            var f, l = n(335),
                d = n(432);
            ! function(t) {
                t.Unknown = "unknown", t.Skipped = "skipped", t.Success = "success", t.RateLimit = "rate_limit", t.Invalid = "invalid", t.Failed = "failed"
            }(f || (f = {})),
            function(t) {
                t.fromHttpCode = function(code) {
                    return code >= 200 && code < 300 ? t.Success : 429 === code ? t.RateLimit : code >= 400 && code < 500 ? t.Invalid : code >= 500 ? t.Failed : t.Unknown
                }
            }(f || (f = {}));
            var h, v = n(368),
                time = n(433);
            ! function(t) {
                t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED"
            }(h || (h = {}));
            var y, _ = function() {
                    function t(t) {
                        var e = this;
                        this._state = h.PENDING, this._handlers = [], this._resolve = function(t) {
                            e._setResult(h.RESOLVED, t)
                        }, this._reject = function(t) {
                            e._setResult(h.REJECTED, t)
                        }, this._setResult = function(t, n) {
                            e._state === h.PENDING && (Object(v.m)(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()))
                        }, this._attachHandler = function(t) {
                            e._handlers = e._handlers.concat(t), e._executeHandlers()
                        }, this._executeHandlers = function() {
                            if (e._state !== h.PENDING) {
                                var t = e._handlers.slice();
                                e._handlers = [], t.forEach((function(t) {
                                    t.done || (e._state === h.RESOLVED && t.onfulfilled && t.onfulfilled(e._value), e._state === h.REJECTED && t.onrejected && t.onrejected(e._value), t.done = !0)
                                }))
                            }
                        };
                        try {
                            t(this._resolve, this._reject)
                        } catch (t) {
                            this._reject(t)
                        }
                    }
                    return t.resolve = function(e) {
                        return new t((function(t) {
                            t(e)
                        }))
                    }, t.reject = function(e) {
                        return new t((function(t, n) {
                            n(e)
                        }))
                    }, t.all = function(e) {
                        return new t((function(n, r) {
                            if (Array.isArray(e))
                                if (0 !== e.length) {
                                    var o = e.length,
                                        c = [];
                                    e.forEach((function(e, f) {
                                        t.resolve(e).then((function(t) {
                                            c[f] = t, 0 === (o -= 1) && n(c)
                                        })).then(null, r)
                                    }))
                                } else n([]);
                            else r(new TypeError("Promise.all requires an array as input."))
                        }))
                    }, t.prototype.then = function(e, n) {
                        var r = this;
                        return new t((function(t, o) {
                            r._attachHandler({
                                done: !1,
                                onfulfilled: function(n) {
                                    if (e) try {
                                        return void t(e(n))
                                    } catch (t) {
                                        return void o(t)
                                    } else t(n)
                                },
                                onrejected: function(e) {
                                    if (n) try {
                                        return void t(n(e))
                                    } catch (t) {
                                        return void o(t)
                                    } else o(e)
                                }
                            })
                        }))
                    }, t.prototype.catch = function(t) {
                        return this.then((function(t) {
                            return t
                        }), t)
                    }, t.prototype.finally = function(e) {
                        var n = this;
                        return new t((function(t, r) {
                            var o, c;
                            return n.then((function(t) {
                                c = !1, o = t, e && e()
                            }), (function(t) {
                                c = !0, o = t, e && e()
                            })).then((function() {
                                c ? r(o) : t(o)
                            }))
                        }))
                    }, t.prototype.toString = function() {
                        return "[object SyncPromise]"
                    }, t
                }(),
                m = n(369),
                O = function() {
                    function t() {
                        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}
                    }
                    return t.clone = function(e) {
                        var n = new t;
                        return e && (n._breadcrumbs = Object(l.g)(e._breadcrumbs), n._tags = Object(l.a)({}, e._tags), n._extra = Object(l.a)({}, e._extra), n._contexts = Object(l.a)({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = Object(l.g)(e._eventProcessors)), n
                    }, t.prototype.addScopeListener = function(t) {
                        this._scopeListeners.push(t)
                    }, t.prototype.addEventProcessor = function(t) {
                        return this._eventProcessors.push(t), this
                    }, t.prototype.setUser = function(t) {
                        return this._user = t || {}, this._session && this._session.update({
                            user: t
                        }), this._notifyScopeListeners(), this
                    }, t.prototype.getUser = function() {
                        return this._user
                    }, t.prototype.setTags = function(t) {
                        return this._tags = Object(l.a)(Object(l.a)({}, this._tags), t), this._notifyScopeListeners(), this
                    }, t.prototype.setTag = function(t, e) {
                        var n;
                        return this._tags = Object(l.a)(Object(l.a)({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setExtras = function(t) {
                        return this._extra = Object(l.a)(Object(l.a)({}, this._extra), t), this._notifyScopeListeners(), this
                    }, t.prototype.setExtra = function(t, e) {
                        var n;
                        return this._extra = Object(l.a)(Object(l.a)({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setFingerprint = function(t) {
                        return this._fingerprint = t, this._notifyScopeListeners(), this
                    }, t.prototype.setLevel = function(t) {
                        return this._level = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransactionName = function(t) {
                        return this._transactionName = t, this._notifyScopeListeners(), this
                    }, t.prototype.setTransaction = function(t) {
                        return this.setTransactionName(t)
                    }, t.prototype.setContext = function(t, e) {
                        var n;
                        return null === e ? delete this._contexts[t] : this._contexts = Object(l.a)(Object(l.a)({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this
                    }, t.prototype.setSpan = function(span) {
                        return this._span = span, this._notifyScopeListeners(), this
                    }, t.prototype.getSpan = function() {
                        return this._span
                    }, t.prototype.getTransaction = function() {
                        var t, e, n, r, span = this.getSpan();
                        return (null === (t = span) || void 0 === t ? void 0 : t.transaction) ? null === (e = span) || void 0 === e ? void 0 : e.transaction : (null === (r = null === (n = span) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? span.spanRecorder.spans[0] : void 0
                    }, t.prototype.setSession = function(t) {
                        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                    }, t.prototype.getSession = function() {
                        return this._session
                    }, t.prototype.update = function(e) {
                        if (!e) return this;
                        if ("function" == typeof e) {
                            var n = e(this);
                            return n instanceof t ? n : this
                        }
                        return e instanceof t ? (this._tags = Object(l.a)(Object(l.a)({}, this._tags), e._tags), this._extra = Object(l.a)(Object(l.a)({}, this._extra), e._extra), this._contexts = Object(l.a)(Object(l.a)({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint)) : Object(v.h)(e) && (e = e, this._tags = Object(l.a)(Object(l.a)({}, this._tags), e.tags), this._extra = Object(l.a)(Object(l.a)({}, this._extra), e.extra), this._contexts = Object(l.a)(Object(l.a)({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint)), this
                    }, t.prototype.clear = function() {
                        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = Object(l.a)({
                            timestamp: Object(time.a)()
                        }, t);
                        return this._breadcrumbs = void 0 !== e && e >= 0 ? Object(l.g)(this._breadcrumbs, [n]).slice(-e) : Object(l.g)(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
                    }, t.prototype.clearBreadcrumbs = function() {
                        return this._breadcrumbs = [], this._notifyScopeListeners(), this
                    }, t.prototype.applyToEvent = function(t, e) {
                        var n;
                        if (this._extra && Object.keys(this._extra).length && (t.extra = Object(l.a)(Object(l.a)({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = Object(l.a)(Object(l.a)({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = Object(l.a)(Object(l.a)({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = Object(l.a)(Object(l.a)({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
                            t.contexts = Object(l.a)({
                                trace: this._span.getTraceContext()
                            }, t.contexts);
                            var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
                            r && (t.tags = Object(l.a)({
                                transaction: r
                            }, t.tags))
                        }
                        return this._applyFingerprint(t), t.breadcrumbs = Object(l.g)(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(Object(l.g)(j(), this._eventProcessors), t, e)
                    }, t.prototype._notifyEventProcessors = function(t, e, n, r) {
                        var o = this;
                        return void 0 === r && (r = 0), new _((function(c, f) {
                            var d = t[r];
                            if (null === e || "function" != typeof d) c(e);
                            else {
                                var h = d(Object(l.a)({}, e), n);
                                Object(v.m)(h) ? h.then((function(e) {
                                    return o._notifyEventProcessors(t, e, n, r + 1).then(c)
                                })).then(null, f) : o._notifyEventProcessors(t, h, n, r + 1).then(c).then(null, f)
                            }
                        }))
                    }, t.prototype._notifyScopeListeners = function() {
                        var t = this;
                        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function(e) {
                            e(t)
                        })), this._notifyingListeners = !1)
                    }, t.prototype._applyFingerprint = function(t) {
                        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }, t
                }();

            function j() {
                var t = Object(m.e)();
                return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors
            }

            function E(t) {
                j().push(t)
            }! function(t) {
                t.Ok = "ok", t.Exited = "exited", t.Crashed = "crashed", t.Abnormal = "abnormal"
            }(y || (y = {}));
            var S = n(395),
                w = n(393),
                object = n(427),
                x = function() {
                    function t(t) {
                        this.errors = 0, this.sid = Object(m.i)(), this.timestamp = Date.now(), this.started = Date.now(), this.duration = 0, this.status = y.Ok, this.init = !0, t && this.update(t)
                    }
                    return t.prototype.update = function(t) {
                        void 0 === t && (t = {}), t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address), t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || Date.now(), t.sid && (this.sid = 32 === t.sid.length ? t.sid : Object(m.i)()), void 0 !== t.init && (this.init = t.init), t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), "number" == typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started, t.release && (this.release = t.release), t.environment && (this.environment = t.environment), t.ipAddress && (this.ipAddress = t.ipAddress), t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status)
                    }, t.prototype.close = function(t) {
                        t ? this.update({
                            status: t
                        }) : this.status === y.Ok ? this.update({
                            status: y.Exited
                        }) : this.update()
                    }, t.prototype.toJSON = function() {
                        return Object(object.a)({
                            sid: "" + this.sid,
                            init: this.init,
                            started: new Date(this.started).toISOString(),
                            timestamp: new Date(this.timestamp).toISOString(),
                            status: this.status,
                            errors: this.errors,
                            did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                            duration: this.duration,
                            attrs: Object(object.a)({
                                release: this.release,
                                environment: this.environment,
                                ip_address: this.ipAddress,
                                user_agent: this.userAgent
                            })
                        })
                    }, t
                }(),
                k = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = new O), void 0 === n && (n = 3), this._version = n, this._stack = [{}], this.getStackTop().scope = e, this.bindClient(t)
                    }
                    return t.prototype.isOlderThan = function(t) {
                        return this._version < t
                    }, t.prototype.bindClient = function(t) {
                        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations()
                    }, t.prototype.pushScope = function() {
                        var t = O.clone(this.getScope());
                        return this.getStack().push({
                            client: this.getClient(),
                            scope: t
                        }), t
                    }, t.prototype.popScope = function() {
                        return !(this.getStack().length <= 1) && !!this.getStack().pop()
                    }, t.prototype.withScope = function(t) {
                        var e = this.pushScope();
                        try {
                            t(e)
                        } finally {
                            this.popScope()
                        }
                    }, t.prototype.getClient = function() {
                        return this.getStackTop().client
                    }, t.prototype.getScope = function() {
                        return this.getStackTop().scope
                    }, t.prototype.getStack = function() {
                        return this._stack
                    }, t.prototype.getStackTop = function() {
                        return this._stack[this._stack.length - 1]
                    }, t.prototype.captureException = function(t, e) {
                        var n = this._lastEventId = Object(m.i)(),
                            r = e;
                        if (!e) {
                            var o = void 0;
                            try {
                                throw new Error("Sentry syntheticException")
                            } catch (t) {
                                o = t
                            }
                            r = {
                                originalException: t,
                                syntheticException: o
                            }
                        }
                        return this._invokeClient("captureException", t, Object(l.a)(Object(l.a)({}, r), {
                            event_id: n
                        })), n
                    }, t.prototype.captureMessage = function(t, e, n) {
                        var r = this._lastEventId = Object(m.i)(),
                            o = n;
                        if (!n) {
                            var c = void 0;
                            try {
                                throw new Error(t)
                            } catch (t) {
                                c = t
                            }
                            o = {
                                originalException: t,
                                syntheticException: c
                            }
                        }
                        return this._invokeClient("captureMessage", t, e, Object(l.a)(Object(l.a)({}, o), {
                            event_id: r
                        })), r
                    }, t.prototype.captureEvent = function(t, e) {
                        var n = this._lastEventId = Object(m.i)();
                        return this._invokeClient("captureEvent", t, Object(l.a)(Object(l.a)({}, e), {
                            event_id: n
                        })), n
                    }, t.prototype.lastEventId = function() {
                        return this._lastEventId
                    }, t.prototype.addBreadcrumb = function(t, e) {
                        var n = this.getStackTop(),
                            r = n.scope,
                            o = n.client;
                        if (r && o) {
                            var c = o.getOptions && o.getOptions() || {},
                                f = c.beforeBreadcrumb,
                                d = void 0 === f ? null : f,
                                h = c.maxBreadcrumbs,
                                v = void 0 === h ? 100 : h;
                            if (!(v <= 0)) {
                                var y = Object(time.a)(),
                                    _ = Object(l.a)({
                                        timestamp: y
                                    }, t),
                                    O = d ? Object(m.c)((function() {
                                        return d(_, e)
                                    })) : _;
                                null !== O && r.addBreadcrumb(O, Math.min(v, 100))
                            }
                        }
                    }, t.prototype.setUser = function(t) {
                        var e = this.getScope();
                        e && e.setUser(t)
                    }, t.prototype.setTags = function(t) {
                        var e = this.getScope();
                        e && e.setTags(t)
                    }, t.prototype.setExtras = function(t) {
                        var e = this.getScope();
                        e && e.setExtras(t)
                    }, t.prototype.setTag = function(t, e) {
                        var n = this.getScope();
                        n && n.setTag(t, e)
                    }, t.prototype.setExtra = function(t, e) {
                        var n = this.getScope();
                        n && n.setExtra(t, e)
                    }, t.prototype.setContext = function(t, e) {
                        var n = this.getScope();
                        n && n.setContext(t, e)
                    }, t.prototype.configureScope = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client;
                        n && r && t(n)
                    }, t.prototype.run = function(t) {
                        var e = T(this);
                        try {
                            t(this)
                        } finally {
                            T(e)
                        }
                    }, t.prototype.getIntegration = function(t) {
                        var e = this.getClient();
                        if (!e) return null;
                        try {
                            return e.getIntegration(t)
                        } catch (e) {
                            return S.a.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null
                        }
                    }, t.prototype.startSpan = function(t) {
                        return this._callExtensionMethod("startSpan", t)
                    }, t.prototype.startTransaction = function(t, e) {
                        return this._callExtensionMethod("startTransaction", t, e)
                    }, t.prototype.traceHeaders = function() {
                        return this._callExtensionMethod("traceHeaders")
                    }, t.prototype.captureSession = function(t) {
                        if (void 0 === t && (t = !1), t) return this.endSession();
                        this._sendSessionUpdate()
                    }, t.prototype.endSession = function() {
                        var t, e, n, r, o;
                        null === (n = null === (e = null === (t = this.getStackTop()) || void 0 === t ? void 0 : t.scope) || void 0 === e ? void 0 : e.getSession()) || void 0 === n || n.close(), this._sendSessionUpdate(), null === (o = null === (r = this.getStackTop()) || void 0 === r ? void 0 : r.scope) || void 0 === o || o.setSession()
                    }, t.prototype.startSession = function(t) {
                        var e = this.getStackTop(),
                            n = e.scope,
                            r = e.client,
                            o = r && r.getOptions() || {},
                            c = o.release,
                            f = o.environment,
                            d = new x(Object(l.a)(Object(l.a)({
                                release: c,
                                environment: f
                            }, n && {
                                user: n.getUser()
                            }), t));
                        if (n) {
                            var h = n.getSession && n.getSession();
                            h && h.status === y.Ok && h.update({
                                status: y.Exited
                            }), this.endSession(), n.setSession(d)
                        }
                        return d
                    }, t.prototype._sendSessionUpdate = function() {
                        var t = this.getStackTop(),
                            e = t.scope,
                            n = t.client;
                        if (e) {
                            var r = e.getSession && e.getSession();
                            r && n && n.captureSession && n.captureSession(r)
                        }
                    }, t.prototype._invokeClient = function(t) {
                        for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        var o = this.getStackTop(),
                            c = o.scope,
                            f = o.client;
                        f && f[t] && (e = f)[t].apply(e, Object(l.g)(n, [c]))
                    }, t.prototype._callExtensionMethod = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = I(),
                            o = r.__SENTRY__;
                        if (o && o.extensions && "function" == typeof o.extensions[t]) return o.extensions[t].apply(this, e);
                        S.a.warn("Extension method " + t + " couldn't be found, doing nothing.")
                    }, t
                }();

            function I() {
                var t = Object(m.e)();
                return t.__SENTRY__ = t.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, t
            }

            function T(t) {
                var e = I(),
                    n = A(e);
                return D(e, t), n
            }

            function R() {
                var t = I();
                return N(t) && !A(t).isOlderThan(3) || D(t, new k), Object(w.b)() ? function(t) {
                    var e, n, r;
                    try {
                        var o = null === (r = null === (n = null === (e = I().__SENTRY__) || void 0 === e ? void 0 : e.extensions) || void 0 === n ? void 0 : n.domain) || void 0 === r ? void 0 : r.active;
                        if (!o) return A(t);
                        if (!N(o) || A(o).isOlderThan(3)) {
                            var c = A(t).getStackTop();
                            D(o, new k(c.client, O.clone(c.scope)))
                        }
                        return A(o)
                    } catch (e) {
                        return A(t)
                    }
                }(t) : A(t)
            }

            function N(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function A(t) {
                return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new k), t.__SENTRY__.hub
            }

            function D(t, e) {
                return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0)
            }

            function C(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                var r = R();
                if (r && r[t]) return r[t].apply(r, Object(l.g)(e));
                throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
            }

            function L(t, e) {
                var n;
                try {
                    throw new Error("Sentry syntheticException")
                } catch (t) {
                    n = t
                }
                return C("captureException", t, {
                    captureContext: e,
                    originalException: t,
                    syntheticException: n
                })
            }

            function P(t, e) {
                var n;
                try {
                    throw new Error(t)
                } catch (t) {
                    n = t
                }
                var r = "string" != typeof e ? {
                    captureContext: e
                } : void 0;
                return C("captureMessage", t, "string" == typeof e ? e : void 0, Object(l.a)({
                    originalException: t,
                    syntheticException: n
                }, r))
            }

            function F(t) {
                return C("captureEvent", t)
            }

            function U(t) {
                C("configureScope", t)
            }

            function B(t) {
                C("addBreadcrumb", t)
            }

            function M(t, e) {
                C("setContext", t, e)
            }

            function H(t) {
                C("setExtras", t)
            }

            function z(t) {
                C("setTags", t)
            }

            function W(t, e) {
                C("setExtra", t, e)
            }

            function $(t, e) {
                C("setTag", t, e)
            }

            function V(t) {
                C("setUser", t)
            }

            function Y(t) {
                C("withScope", t)
            }

            function J(t, e) {
                return C("startTransaction", Object(l.a)({}, t), e)
            }
            var G = "6.3.5",
                K = Object.setPrototypeOf || ({
                        __proto__: []
                    }
                    instanceof Array ? function(t, e) {
                        return t.__proto__ = e, t
                    } : function(t, e) {
                        for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
                        return t
                    });
            var X = function(t) {
                    function e(e) {
                        var n = this.constructor,
                            r = t.call(this, e) || this;
                        return r.message = e, r.name = n.prototype.constructor.name, K(r, n.prototype), r
                    }
                    return Object(l.c)(e, t), e
                }(Error),
                Q = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
                Z = "Invalid Dsn",
                tt = function() {
                    function t(t) {
                        "string" == typeof t ? this._fromString(t) : this._fromComponents(t), this._validate()
                    }
                    return t.prototype.toString = function(t) {
                        void 0 === t && (t = !1);
                        var e = this,
                            n = e.host,
                            path = e.path,
                            r = e.pass,
                            o = e.port,
                            c = e.projectId;
                        return e.protocol + "://" + e.publicKey + (t && r ? ":" + r : "") + "@" + n + (o ? ":" + o : "") + "/" + (path ? path + "/" : path) + c
                    }, t.prototype._fromString = function(t) {
                        var e = Q.exec(t);
                        if (!e) throw new X(Z);
                        var n = Object(l.e)(e.slice(1), 6),
                            r = n[0],
                            o = n[1],
                            c = n[2],
                            f = void 0 === c ? "" : c,
                            d = n[3],
                            h = n[4],
                            v = void 0 === h ? "" : h,
                            path = "",
                            y = n[5],
                            _ = y.split("/");
                        if (_.length > 1 && (path = _.slice(0, -1).join("/"), y = _.pop()), y) {
                            var m = y.match(/^\d+/);
                            m && (y = m[0])
                        }
                        this._fromComponents({
                            host: d,
                            pass: f,
                            path: path,
                            projectId: y,
                            port: v,
                            protocol: r,
                            publicKey: o
                        })
                    }, t.prototype._fromComponents = function(t) {
                        "user" in t && !("publicKey" in t) && (t.publicKey = t.user), this.user = t.publicKey || "", this.protocol = t.protocol, this.publicKey = t.publicKey || "", this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
                    }, t.prototype._validate = function() {
                        var t = this;
                        if (["protocol", "publicKey", "host", "projectId"].forEach((function(component) {
                                if (!t[component]) throw new X("Invalid Dsn: " + component + " missing")
                            })), !this.projectId.match(/^\d+$/)) throw new X("Invalid Dsn: Invalid projectId " + this.projectId);
                        if ("http" !== this.protocol && "https" !== this.protocol) throw new X("Invalid Dsn: Invalid protocol " + this.protocol);
                        if (this.port && isNaN(parseInt(this.port, 10))) throw new X("Invalid Dsn: Invalid port " + this.port)
                    }, t
                }(),
                et = n(394),
                nt = [];

            function ot(t) {
                var e = {};
                return function(t) {
                    var e = t.defaultIntegrations && Object(l.g)(t.defaultIntegrations) || [],
                        n = t.integrations,
                        r = [];
                    if (Array.isArray(n)) {
                        var o = n.map((function(i) {
                                return i.name
                            })),
                            c = [];
                        e.forEach((function(t) {
                            -1 === o.indexOf(t.name) && -1 === c.indexOf(t.name) && (r.push(t), c.push(t.name))
                        })), n.forEach((function(t) {
                            -1 === c.indexOf(t.name) && (r.push(t), c.push(t.name))
                        }))
                    } else "function" == typeof n ? (r = n(e), r = Array.isArray(r) ? r : [r]) : r = Object(l.g)(e);
                    var f = r.map((function(i) {
                            return i.name
                        })),
                        d = "Debug";
                    return -1 !== f.indexOf(d) && r.push.apply(r, Object(l.g)(r.splice(f.indexOf(d), 1))), r
                }(t).forEach((function(t) {
                    e[t.name] = t,
                        function(t) {
                            -1 === nt.indexOf(t.name) && (t.setupOnce(E, R), nt.push(t.name), S.a.log("Integration installed: " + t.name))
                        }(t)
                })), e
            }
            var it = function() {
                    function t(t, e) {
                        this._integrations = {}, this._processing = 0, this._backend = new t(e), this._options = e, e.dsn && (this._dsn = new tt(e.dsn))
                    }
                    return t.prototype.captureException = function(t, e, n) {
                        var r = this,
                            o = e && e.event_id;
                        return this._process(this._getBackend().eventFromException(t, e).then((function(t) {
                            return r._captureEvent(t, e, n)
                        })).then((function(t) {
                            o = t
                        }))), o
                    }, t.prototype.captureMessage = function(t, e, n, r) {
                        var o = this,
                            c = n && n.event_id,
                            f = Object(v.i)(t) ? this._getBackend().eventFromMessage(String(t), e, n) : this._getBackend().eventFromException(t, n);
                        return this._process(f.then((function(t) {
                            return o._captureEvent(t, n, r)
                        })).then((function(t) {
                            c = t
                        }))), c
                    }, t.prototype.captureEvent = function(t, e, n) {
                        var r = e && e.event_id;
                        return this._process(this._captureEvent(t, e, n).then((function(t) {
                            r = t
                        }))), r
                    }, t.prototype.captureSession = function(t) {
                        "string" != typeof t.release ? S.a.warn("Discarded session because of missing or non-string release") : (this._sendSession(t), t.update({
                            init: !1
                        }))
                    }, t.prototype.getDsn = function() {
                        return this._dsn
                    }, t.prototype.getOptions = function() {
                        return this._options
                    }, t.prototype.flush = function(t) {
                        var e = this;
                        return this._isClientProcessing(t).then((function(n) {
                            return e._getBackend().getTransport().close(t).then((function(t) {
                                return n && t
                            }))
                        }))
                    }, t.prototype.close = function(t) {
                        var e = this;
                        return this.flush(t).then((function(t) {
                            return e.getOptions().enabled = !1, t
                        }))
                    }, t.prototype.setupIntegrations = function() {
                        this._isEnabled() && (this._integrations = ot(this._options))
                    }, t.prototype.getIntegration = function(t) {
                        try {
                            return this._integrations[t.id] || null
                        } catch (e) {
                            return S.a.warn("Cannot retrieve integration " + t.id + " from the current Client"), null
                        }
                    }, t.prototype._updateSessionFromEvent = function(t, e) {
                        var n, r, o, c = !1,
                            f = !1,
                            d = e.exception && e.exception.values;
                        if (d) {
                            f = !0;
                            try {
                                for (var h = Object(l.h)(d), v = h.next(); !v.done; v = h.next()) {
                                    var _ = v.value.mechanism;
                                    if (_ && !1 === _.handled) {
                                        c = !0;
                                        break
                                    }
                                }
                            } catch (t) {
                                n = {
                                    error: t
                                }
                            } finally {
                                try {
                                    v && !v.done && (r = h.return) && r.call(h)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                        var m = e.user;
                        if (!t.userAgent) {
                            var O = e.request ? e.request.headers : {};
                            for (var j in O)
                                if ("user-agent" === j.toLowerCase()) {
                                    o = O[j];
                                    break
                                }
                        }
                        t.update(Object(l.a)(Object(l.a)({}, c && {
                            status: y.Crashed
                        }), {
                            user: m,
                            userAgent: o,
                            errors: t.errors + Number(f || c)
                        })), this.captureSession(t)
                    }, t.prototype._sendSession = function(t) {
                        this._getBackend().sendSession(t)
                    }, t.prototype._isClientProcessing = function(t) {
                        var e = this;
                        return new _((function(n) {
                            var r = 0,
                                o = setInterval((function() {
                                    0 == e._processing ? (clearInterval(o), n(!0)) : (r += 1, t && r >= t && (clearInterval(o), n(!1)))
                                }), 1)
                        }))
                    }, t.prototype._getBackend = function() {
                        return this._backend
                    }, t.prototype._isEnabled = function() {
                        return !1 !== this.getOptions().enabled && void 0 !== this._dsn
                    }, t.prototype._prepareEvent = function(t, e, n) {
                        var r = this,
                            o = this.getOptions().normalizeDepth,
                            c = void 0 === o ? 3 : o,
                            f = Object(l.a)(Object(l.a)({}, t), {
                                event_id: t.event_id || (n && n.event_id ? n.event_id : Object(m.i)()),
                                timestamp: t.timestamp || Object(time.a)()
                            });
                        this._applyClientOptions(f), this._applyIntegrationsMetadata(f);
                        var d = e;
                        n && n.captureContext && (d = O.clone(d).update(n.captureContext));
                        var h = _.resolve(f);
                        return d && (h = d.applyToEvent(f, n)), h.then((function(t) {
                            return "number" == typeof c && c > 0 ? r._normalizeEvent(t, c) : t
                        }))
                    }, t.prototype._normalizeEvent = function(t, e) {
                        if (!t) return null;
                        var n = Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)(Object(l.a)({}, t), t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map((function(b) {
                                return Object(l.a)(Object(l.a)({}, b), b.data && {
                                    data: Object(object.d)(b.data, e)
                                })
                            }))
                        }), t.user && {
                            user: Object(object.d)(t.user, e)
                        }), t.contexts && {
                            contexts: Object(object.d)(t.contexts, e)
                        }), t.extra && {
                            extra: Object(object.d)(t.extra, e)
                        });
                        return t.contexts && t.contexts.trace && (n.contexts.trace = t.contexts.trace), n
                    }, t.prototype._applyClientOptions = function(t) {
                        var e = this.getOptions(),
                            n = e.environment,
                            r = e.release,
                            o = e.dist,
                            c = e.maxValueLength,
                            f = void 0 === c ? 250 : c;
                        "environment" in t || (t.environment = "environment" in e ? n : "production"), void 0 === t.release && void 0 !== r && (t.release = r), void 0 === t.dist && void 0 !== o && (t.dist = o), t.message && (t.message = Object(et.d)(t.message, f));
                        var l = t.exception && t.exception.values && t.exception.values[0];
                        l && l.value && (l.value = Object(et.d)(l.value, f));
                        var d = t.request;
                        d && d.url && (d.url = Object(et.d)(d.url, f))
                    }, t.prototype._applyIntegrationsMetadata = function(t) {
                        var e = Object.keys(this._integrations);
                        e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = Object(l.g)(t.sdk.integrations || [], e))
                    }, t.prototype._sendEvent = function(t) {
                        this._getBackend().sendEvent(t)
                    }, t.prototype._captureEvent = function(t, e, n) {
                        return this._processEvent(t, e, n).then((function(t) {
                            return t.event_id
                        }), (function(t) {
                            S.a.error(t)
                        }))
                    }, t.prototype._processEvent = function(t, e, n) {
                        var r = this,
                            o = this.getOptions(),
                            c = o.beforeSend,
                            f = o.sampleRate;
                        if (!this._isEnabled()) return _.reject(new X("SDK not enabled, will not send event."));
                        var l = "transaction" === t.type;
                        return !l && "number" == typeof f && Math.random() > f ? _.reject(new X("Discarding event because it's not included in the random sample (sampling rate = " + f + ")")) : this._prepareEvent(t, n, e).then((function(t) {
                            if (null === t) throw new X("An event processor returned null, will not send event.");
                            if (e && e.data && !0 === e.data.__sentry__ || l || !c) return t;
                            var n = c(t, e);
                            if (void 0 === n) throw new X("`beforeSend` method has to return `null` or a valid event.");
                            return Object(v.m)(n) ? n.then((function(t) {
                                return t
                            }), (function(t) {
                                throw new X("beforeSend rejected with " + t)
                            })) : n
                        })).then((function(t) {
                            if (null === t) throw new X("`beforeSend` returned `null`, will not send event.");
                            var e = n && n.getSession && n.getSession();
                            return !l && e && r._updateSessionFromEvent(e, t), r._sendEvent(t), t
                        })).then(null, (function(t) {
                            if (t instanceof X) throw t;
                            throw r.captureException(t, {
                                data: {
                                    __sentry__: !0
                                },
                                originalException: t
                            }), new X("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
                        }))
                    }, t.prototype._process = function(t) {
                        var e = this;
                        this._processing += 1, t.then((function(t) {
                            return e._processing -= 1, t
                        }), (function(t) {
                            return e._processing -= 1, t
                        }))
                    }, t
                }(),
                at = function() {
                    function t() {}
                    return t.prototype.sendEvent = function(t) {
                        return _.resolve({
                            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                            status: f.Skipped
                        })
                    }, t.prototype.close = function(t) {
                        return _.resolve(!0)
                    }, t
                }(),
                ct = function() {
                    function t(t) {
                        this._options = t, this._options.dsn || S.a.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
                    }
                    return t.prototype.eventFromException = function(t, e) {
                        throw new X("Backend has to implement `eventFromException` method")
                    }, t.prototype.eventFromMessage = function(t, e, n) {
                        throw new X("Backend has to implement `eventFromMessage` method")
                    }, t.prototype.sendEvent = function(t) {
                        this._transport.sendEvent(t).then(null, (function(t) {
                            S.a.error("Error while sending event: " + t)
                        }))
                    }, t.prototype.sendSession = function(t) {
                        this._transport.sendSession ? this._transport.sendSession(t).then(null, (function(t) {
                            S.a.error("Error while sending session: " + t)
                        })) : S.a.warn("Dropping session because custom transport doesn't implement sendSession")
                    }, t.prototype.getTransport = function() {
                        return this._transport
                    }, t.prototype._setupTransport = function() {
                        return new at
                    }, t
                }(),
                st = n(430),
                ut = "?",
                ft = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                lt = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                pt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                ht = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                vt = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                yt = /Minified React error #\d+;/i;

            function _t(t) {
                var e = null,
                    n = 0;
                t && ("number" == typeof t.framesToPop ? n = t.framesToPop : yt.test(t.message) && (n = 1));
                try {
                    if (e = function(t) {
                            if (!t || !t.stacktrace) return null;
                            for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, c = n.split("\n"), f = [], line = 0; line < c.length; line += 2) {
                                var element = null;
                                (e = r.exec(c[line])) ? element = {
                                    url: e[2],
                                    func: e[3],
                                    args: [],
                                    line: +e[1],
                                    column: null
                                }: (e = o.exec(c[line])) && (element = {
                                    url: e[6],
                                    func: e[3] || e[4],
                                    args: e[5] ? e[5].split(",") : [],
                                    line: +e[1],
                                    column: +e[2]
                                }), element && (!element.func && element.line && (element.func = ut), f.push(element))
                            }
                            if (!f.length) return null;
                            return {
                                message: bt(t),
                                name: t.name,
                                stack: f
                            }
                        }(t)) return gt(e, n)
                } catch (t) {}
                try {
                    if (e = function(t) {
                            if (!t || !t.stack) return null;
                            for (var e, n, element, r = [], o = t.stack.split("\n"), i = 0; i < o.length; ++i) {
                                if (n = ft.exec(o[i])) {
                                    var c = n[2] && 0 === n[2].indexOf("native");
                                    n[2] && 0 === n[2].indexOf("eval") && (e = vt.exec(n[2])) && (n[2] = e[1], n[3] = e[2], n[4] = e[3]);
                                    var f = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                        l = n[1] || ut,
                                        d = -1 !== l.indexOf("safari-extension"),
                                        h = -1 !== l.indexOf("safari-web-extension");
                                    (d || h) && (l = -1 !== l.indexOf("@") ? l.split("@")[0] : ut, f = d ? "safari-extension:" + f : "safari-web-extension:" + f), element = {
                                        url: f,
                                        func: l,
                                        args: c ? [n[2]] : [],
                                        line: n[3] ? +n[3] : null,
                                        column: n[4] ? +n[4] : null
                                    }
                                } else if (n = pt.exec(o[i])) element = {
                                    url: n[2],
                                    func: n[1] || ut,
                                    args: [],
                                    line: +n[3],
                                    column: n[4] ? +n[4] : null
                                };
                                else {
                                    if (!(n = lt.exec(o[i]))) continue;
                                    n[3] && n[3].indexOf(" > eval") > -1 && (e = ht.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = e[1], n[4] = e[2], n[5] = "") : 0 !== i || n[5] || void 0 === t.columnNumber || (r[0].column = t.columnNumber + 1), element = {
                                        url: n[3],
                                        func: n[1] || ut,
                                        args: n[2] ? n[2].split(",") : [],
                                        line: n[4] ? +n[4] : null,
                                        column: n[5] ? +n[5] : null
                                    }
                                }!element.func && element.line && (element.func = ut), r.push(element)
                            }
                            if (!r.length) return null;
                            return {
                                message: bt(t),
                                name: t.name,
                                stack: r
                            }
                        }(t)) return gt(e, n)
                } catch (t) {}
                return {
                    message: bt(t),
                    name: t && t.name,
                    stack: [],
                    failed: !0
                }
            }

            function gt(t, e) {
                try {
                    return Object(l.a)(Object(l.a)({}, t), {
                        stack: t.stack.slice(e)
                    })
                } catch (e) {
                    return t
                }
            }

            function bt(t) {
                var e = t && t.message;
                return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
            }

            function mt(t) {
                var e = jt(t.stack),
                    n = {
                        type: t.name,
                        value: t.message
                    };
                return e && e.length && (n.stacktrace = {
                    frames: e
                }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
            }

            function Ot(t) {
                return {
                    exception: {
                        values: [mt(t)]
                    }
                }
            }

            function jt(t) {
                if (!t || !t.length) return [];
                var e = t,
                    n = e[0].func || "",
                    r = e[e.length - 1].func || "";
                return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)), -1 !== r.indexOf("sentryWrapped") && (e = e.slice(0, -1)), e.slice(0, 50).map((function(t) {
                    return {
                        colno: null === t.column ? void 0 : t.column,
                        filename: t.url || e[0].url,
                        function: t.func || "?",
                        in_app: !0,
                        lineno: null === t.line ? void 0 : t.line
                    }
                })).reverse()
            }

            function Et(t, e, n) {
                var r = wt(e, n && n.syntheticException || void 0, {
                    attachStacktrace: t.attachStacktrace
                });
                return Object(m.a)(r, {
                    handled: !0,
                    type: "generic"
                }), r.level = d.a.Error, n && n.event_id && (r.event_id = n.event_id), _.resolve(r)
            }

            function St(t, e, n, r) {
                void 0 === n && (n = d.a.Info);
                var o = xt(e, r && r.syntheticException || void 0, {
                    attachStacktrace: t.attachStacktrace
                });
                return o.level = n, r && r.event_id && (o.event_id = r.event_id), _.resolve(o)
            }

            function wt(t, e, n) {
                var r;
                if (void 0 === n && (n = {}), Object(v.e)(t) && t.error) return r = Ot(_t(t = t.error));
                if (Object(v.a)(t) || Object(v.b)(t)) {
                    var o = t,
                        c = o.name || (Object(v.a)(o) ? "DOMError" : "DOMException"),
                        f = o.message ? c + ": " + o.message : c;
                    return r = xt(f, e, n), Object(m.b)(r, f), "code" in o && (r.tags = Object(l.a)(Object(l.a)({}, r.tags), {
                        "DOMException.code": "" + o.code
                    })), r
                }
                return Object(v.d)(t) ? r = Ot(_t(t)) : Object(v.h)(t) || Object(v.f)(t) ? (r = function(t, e, n) {
                    var r = {
                        exception: {
                            values: [{
                                type: Object(v.f)(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
                                value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(object.b)(t)
                            }]
                        },
                        extra: {
                            __serialized__: Object(object.e)(t)
                        }
                    };
                    if (e) {
                        var o = jt(_t(e).stack);
                        r.stacktrace = {
                            frames: o
                        }
                    }
                    return r
                }(t, e, n.rejection), Object(m.a)(r, {
                    synthetic: !0
                }), r) : (r = xt(t, e, n), Object(m.b)(r, "" + t, void 0), Object(m.a)(r, {
                    synthetic: !0
                }), r)
            }

            function xt(input, t, e) {
                void 0 === e && (e = {});
                var n = {
                    message: input
                };
                if (e.attachStacktrace && t) {
                    var r = jt(_t(t).stack);
                    n.stacktrace = {
                        frames: r
                    }
                }
                return n
            }

            function kt(t) {
                if (t.metadata && t.metadata.sdk) {
                    var e = t.metadata.sdk;
                    return {
                        name: e.name,
                        version: e.version
                    }
                }
            }

            function It(t, e) {
                return e ? (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = Object(l.g)(t.sdk.integrations || [], e.integrations || []), t.sdk.packages = Object(l.g)(t.sdk.packages || [], e.packages || []), t) : t
            }

            function Tt(t, e) {
                var n = kt(e);
                return {
                    body: JSON.stringify(Object(l.a)({
                        sent_at: (new Date).toISOString()
                    }, n && {
                        sdk: n
                    })) + "\n" + JSON.stringify({
                        type: "session"
                    }) + "\n" + JSON.stringify(t),
                    type: "session",
                    url: e.getEnvelopeEndpointWithUrlEncodedAuth()
                }
            }

            function Rt(t, e) {
                var n = kt(e),
                    r = t.type || "event",
                    o = "transaction" === r,
                    c = t.debug_meta || {},
                    f = c.transactionSampling,
                    d = Object(l.f)(c, ["transactionSampling"]),
                    h = f || {},
                    v = h.method,
                    y = h.rate;
                0 === Object.keys(d).length ? delete t.debug_meta : t.debug_meta = d;
                var _ = {
                    body: JSON.stringify(n ? It(t, e.metadata.sdk) : t),
                    type: r,
                    url: o ? e.getEnvelopeEndpointWithUrlEncodedAuth() : e.getStoreEndpointWithUrlEncodedAuth()
                };
                if (o) {
                    var m = JSON.stringify(Object(l.a)({
                        event_id: t.event_id,
                        sent_at: (new Date).toISOString()
                    }, n && {
                        sdk: n
                    })) + "\n" + JSON.stringify({
                        type: t.type,
                        sample_rates: [{
                            id: v,
                            rate: y
                        }]
                    }) + "\n" + _.body;
                    _.body = m
                }
                return _
            }
            var Nt = function() {
                    function t(t, e) {
                        void 0 === e && (e = {}), this.dsn = t, this._dsnObject = new tt(t), this.metadata = e
                    }
                    return t.prototype.getDsn = function() {
                        return this._dsnObject
                    }, t.prototype.getBaseApiEndpoint = function() {
                        var t = this._dsnObject,
                            e = t.protocol ? t.protocol + ":" : "",
                            n = t.port ? ":" + t.port : "";
                        return e + "//" + t.host + n + (t.path ? "/" + t.path : "") + "/api/"
                    }, t.prototype.getStoreEndpoint = function() {
                        return this._getIngestEndpoint("store")
                    }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
                        return this.getStoreEndpoint() + "?" + this._encodedAuth()
                    }, t.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
                        return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
                    }, t.prototype.getStoreEndpointPath = function() {
                        var t = this._dsnObject;
                        return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
                    }, t.prototype.getRequestHeaders = function(t, e) {
                        var n = this._dsnObject,
                            header = ["Sentry sentry_version=7"];
                        return header.push("sentry_client=" + t + "/" + e), header.push("sentry_key=" + n.publicKey), n.pass && header.push("sentry_secret=" + n.pass), {
                            "Content-Type": "application/json",
                            "X-Sentry-Auth": header.join(", ")
                        }
                    }, t.prototype.getReportDialogEndpoint = function(t) {
                        void 0 === t && (t = {});
                        var e = this._dsnObject,
                            n = this.getBaseApiEndpoint() + "embed/error-page/",
                            r = [];
                        for (var o in r.push("dsn=" + e.toString()), t)
                            if ("dsn" !== o)
                                if ("user" === o) {
                                    if (!t.user) continue;
                                    t.user.name && r.push("name=" + encodeURIComponent(t.user.name)), t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                                } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                        return r.length ? n + "?" + r.join("&") : n
                    }, t.prototype._getEnvelopeEndpoint = function() {
                        return this._getIngestEndpoint("envelope")
                    }, t.prototype._getIngestEndpoint = function(t) {
                        return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + t + "/"
                    }, t.prototype._encodedAuth = function() {
                        var t = {
                            sentry_key: this._dsnObject.publicKey,
                            sentry_version: "7"
                        };
                        return Object(object.f)(t)
                    }, t
                }(),
                At = function() {
                    function t(t) {
                        this._limit = t, this._buffer = []
                    }
                    return t.prototype.isReady = function() {
                        return void 0 === this._limit || this.length() < this._limit
                    }, t.prototype.add = function(t) {
                        var e = this;
                        return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t), t.then((function() {
                            return e.remove(t)
                        })).then(null, (function() {
                            return e.remove(t).then(null, (function() {}))
                        })), t) : _.reject(new X("Not adding Promise due to buffer limit reached."))
                    }, t.prototype.remove = function(t) {
                        return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
                    }, t.prototype.length = function() {
                        return this._buffer.length
                    }, t.prototype.drain = function(t) {
                        var e = this;
                        return new _((function(n) {
                            var r = setTimeout((function() {
                                t && t > 0 && n(!1)
                            }), t);
                            _.all(e._buffer).then((function() {
                                clearTimeout(r), n(!0)
                            })).then(null, (function() {
                                n(!0)
                            }))
                        }))
                    }, t
                }(),
                Dt = {
                    event: "error",
                    transaction: "transaction",
                    session: "session"
                },
                Ct = function() {
                    function t(t) {
                        this.options = t, this._buffer = new At(30), this._rateLimits = {}, this._api = new Nt(t.dsn, t._metadata), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
                    }
                    return t.prototype.sendEvent = function(t) {
                        throw new X("Transport Class has to implement `sendEvent` method")
                    }, t.prototype.close = function(t) {
                        return this._buffer.drain(t)
                    }, t.prototype._handleResponse = function(t) {
                        var e = t.requestType,
                            n = t.response,
                            r = t.headers,
                            o = t.resolve,
                            c = t.reject,
                            l = f.fromHttpCode(n.status);
                        this._handleRateLimit(r) && S.a.warn("Too many requests, backing off until: " + this._disabledUntil(e)), l !== f.Success ? c(n) : o({
                            status: l
                        })
                    }, t.prototype._disabledUntil = function(t) {
                        var e = Dt[t];
                        return this._rateLimits[e] || this._rateLimits.all
                    }, t.prototype._isRateLimited = function(t) {
                        return this._disabledUntil(t) > new Date(Date.now())
                    }, t.prototype._handleRateLimit = function(t) {
                        var e, n, r, o, c = Date.now(),
                            f = t["x-sentry-rate-limits"],
                            d = t["retry-after"];
                        if (f) {
                            try {
                                for (var h = Object(l.h)(f.trim().split(",")), v = h.next(); !v.done; v = h.next()) {
                                    var y = v.value.split(":", 2),
                                        _ = parseInt(y[0], 10),
                                        O = 1e3 * (isNaN(_) ? 60 : _);
                                    try {
                                        for (var j = (r = void 0, Object(l.h)(y[1].split(";"))), E = j.next(); !E.done; E = j.next()) {
                                            var S = E.value;
                                            this._rateLimits[S || "all"] = new Date(c + O)
                                        }
                                    } catch (t) {
                                        r = {
                                            error: t
                                        }
                                    } finally {
                                        try {
                                            E && !E.done && (o = j.return) && o.call(j)
                                        } finally {
                                            if (r) throw r.error
                                        }
                                    }
                                }
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    v && !v.done && (n = h.return) && n.call(h)
                                } finally {
                                    if (e) throw e.error
                                }
                            }
                            return !0
                        }
                        return !!d && (this._rateLimits.all = new Date(c + Object(m.g)(c, d)), !0)
                    }, t
                }();
            var Lt = function(t) {
                    function e(e, n) {
                        void 0 === n && (n = function() {
                            var t, e, n = Object(m.e)();
                            if (Object(st.a)(n.fetch)) return n.fetch.bind(n);
                            var r = n.document,
                                o = n.fetch;
                            if ("function" == typeof(null === (t = r) || void 0 === t ? void 0 : t.createElement)) try {
                                var c = r.createElement("iframe");
                                c.hidden = !0, r.head.appendChild(c), (null === (e = c.contentWindow) || void 0 === e ? void 0 : e.fetch) && (o = c.contentWindow.fetch), r.head.removeChild(c)
                            } catch (t) {
                                S.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
                            }
                            return o.bind(n)
                        }());
                        var r = t.call(this, e) || this;
                        return r._fetch = n, r
                    }
                    return Object(l.c)(e, t), e.prototype.sendEvent = function(t) {
                        return this._sendRequest(Rt(t, this._api), t)
                    }, e.prototype.sendSession = function(t) {
                        return this._sendRequest(Tt(t, this._api), t)
                    }, e.prototype._sendRequest = function(t, e) {
                        var n = this;
                        if (this._isRateLimited(t.type)) return Promise.reject({
                            event: e,
                            type: t.type,
                            reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                            status: 429
                        });
                        var r = {
                            body: t.body,
                            method: "POST",
                            referrerPolicy: Object(st.e)() ? "origin" : ""
                        };
                        return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add(new _((function(e, o) {
                            n._fetch(t.url, r).then((function(r) {
                                var c = {
                                    "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": r.headers.get("Retry-After")
                                };
                                n._handleResponse({
                                    requestType: t.type,
                                    response: r,
                                    headers: c,
                                    resolve: e,
                                    reject: o
                                })
                            })).catch(o)
                        })))
                    }, e
                }(Ct),
                Pt = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return Object(l.c)(e, t), e.prototype.sendEvent = function(t) {
                        return this._sendRequest(Rt(t, this._api), t)
                    }, e.prototype.sendSession = function(t) {
                        return this._sendRequest(Tt(t, this._api), t)
                    }, e.prototype._sendRequest = function(t, e) {
                        var n = this;
                        return this._isRateLimited(t.type) ? Promise.reject({
                            event: e,
                            type: t.type,
                            reason: "Transport locked till " + this._disabledUntil(t.type) + " due to too many requests.",
                            status: 429
                        }) : this._buffer.add(new _((function(e, r) {
                            var o = new XMLHttpRequest;
                            for (var header in o.onreadystatechange = function() {
                                    if (4 === o.readyState) {
                                        var c = {
                                            "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                            "retry-after": o.getResponseHeader("Retry-After")
                                        };
                                        n._handleResponse({
                                            requestType: t.type,
                                            response: o,
                                            headers: c,
                                            resolve: e,
                                            reject: r
                                        })
                                    }
                                }, o.open("POST", t.url), n.options.headers) n.options.headers.hasOwnProperty(header) && o.setRequestHeader(header, n.options.headers[header]);
                            o.send(t.body)
                        })))
                    }, e
                }(Ct),
                Ft = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return Object(l.c)(e, t), e.prototype.eventFromException = function(t, e) {
                        return Et(this._options, t, e)
                    }, e.prototype.eventFromMessage = function(t, e, n) {
                        return void 0 === e && (e = d.a.Info), St(this._options, t, e, n)
                    }, e.prototype._setupTransport = function() {
                        if (!this._options.dsn) return t.prototype._setupTransport.call(this);
                        var e = Object(l.a)(Object(l.a)({}, this._options.transportOptions), {
                            dsn: this._options.dsn,
                            _metadata: this._options._metadata
                        });
                        return this._options.transport ? new this._options.transport(e) : Object(st.b)() ? new Lt(e) : new Pt(e)
                    }, e
                }(ct),
                Ut = 0;

            function Bt() {
                return Ut > 0
            }

            function Mt() {
                Ut += 1, setTimeout((function() {
                    Ut -= 1
                }))
            }

            function Ht(t, e, n) {
                if (void 0 === e && (e = {}), "function" != typeof t) return t;
                try {
                    if (t.__sentry__) return t;
                    if (t.__sentry_wrapped__) return t.__sentry_wrapped__
                } catch (e) {
                    return t
                }
                var r = function() {
                    var r = Array.prototype.slice.call(arguments);
                    try {
                        n && "function" == typeof n && n.apply(this, arguments);
                        var o = r.map((function(t) {
                            return Ht(t, e)
                        }));
                        return t.handleEvent ? t.handleEvent.apply(this, o) : t.apply(this, o)
                    } catch (t) {
                        throw Mt(), Y((function(n) {
                            n.addEventProcessor((function(t) {
                                var n = Object(l.a)({}, t);
                                return e.mechanism && (Object(m.b)(n, void 0, void 0), Object(m.a)(n, e.mechanism)), n.extra = Object(l.a)(Object(l.a)({}, n.extra), {
                                    arguments: r
                                }), n
                            })), L(t)
                        })), t
                    }
                };
                try {
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o])
                } catch (t) {}
                t.prototype = t.prototype || {}, r.prototype = t.prototype, Object.defineProperty(t, "__sentry_wrapped__", {
                    enumerable: !1,
                    value: r
                }), Object.defineProperties(r, {
                    __sentry__: {
                        enumerable: !1,
                        value: !0
                    },
                    __sentry_original__: {
                        enumerable: !1,
                        value: t
                    }
                });
                try {
                    Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                        get: function() {
                            return t.name
                        }
                    })
                } catch (t) {}
                return r
            }

            function qt(t) {
                if (void 0 === t && (t = {}), t.eventId)
                    if (t.dsn) {
                        var script = document.createElement("script");
                        script.async = !0, script.src = new Nt(t.dsn).getReportDialogEndpoint(t), t.onLoad && (script.onload = t.onLoad), (document.head || document.body).appendChild(script)
                    } else S.a.error("Missing dsn option in showReportDialog call");
                else S.a.error("Missing eventId option in showReportDialog call")
            }
            var zt, Wt = n(396),
                $t = Object(m.e)(),
                Vt = {},
                Yt = {};

            function Jt(t) {
                if (!Yt[t]) switch (Yt[t] = !0, t) {
                    case "console":
                        ! function() {
                            if (!("console" in $t)) return;
                            ["debug", "info", "warn", "error", "log", "assert"].forEach((function(t) {
                                t in $t.console && Object(object.c)($t.console, t, (function(e) {
                                    return function() {
                                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                        Kt("console", {
                                            args: n,
                                            level: t
                                        }), e && Function.prototype.apply.call(e, $t.console, n)
                                    }
                                }))
                            }))
                        }();
                        break;
                    case "dom":
                        ! function() {
                            if (!("document" in $t)) return;
                            var t = Kt.bind(null, "dom"),
                                e = ee(t, !0);
                            $t.document.addEventListener("click", e, !1), $t.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((function(e) {
                                var n = $t[e] && $t[e].prototype;
                                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(object.c)(n, "addEventListener", (function(e) {
                                    return function(n, r, o) {
                                        if ("click" === n || "keypress" == n) try {
                                            var c = this,
                                                f = c.__sentry_instrumentation_handlers__ = c.__sentry_instrumentation_handlers__ || {},
                                                l = f[n] = f[n] || {
                                                    refCount: 0
                                                };
                                            if (!l.handler) {
                                                var d = ee(t);
                                                l.handler = d, e.call(this, n, d, o)
                                            }
                                            l.refCount += 1
                                        } catch (t) {}
                                        return e.call(this, n, r, o)
                                    }
                                })), Object(object.c)(n, "removeEventListener", (function(t) {
                                    return function(e, n, r) {
                                        if ("click" === e || "keypress" == e) try {
                                            var o = this,
                                                c = o.__sentry_instrumentation_handlers__ || {},
                                                f = c[e];
                                            f && (f.refCount -= 1, f.refCount <= 0 && (t.call(this, e, f.handler, r), f.handler = void 0, delete c[e]), 0 === Object.keys(c).length && delete o.__sentry_instrumentation_handlers__)
                                        } catch (t) {}
                                        return t.call(this, e, n, r)
                                    }
                                })))
                            }))
                        }();
                        break;
                    case "xhr":
                        ! function() {
                            if (!("XMLHttpRequest" in $t)) return;
                            var t = [],
                                e = [],
                                n = XMLHttpRequest.prototype;
                            Object(object.c)(n, "open", (function(n) {
                                return function() {
                                    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                                    var c = this,
                                        f = r[1];
                                    c.__sentry_xhr__ = {
                                        method: Object(v.k)(r[0]) ? r[0].toUpperCase() : r[0],
                                        url: r[1]
                                    }, Object(v.k)(f) && "POST" === c.__sentry_xhr__.method && f.match(/sentry_key/) && (c.__sentry_own_request__ = !0);
                                    var l = function() {
                                        if (4 === c.readyState) {
                                            try {
                                                c.__sentry_xhr__ && (c.__sentry_xhr__.status_code = c.status)
                                            } catch (t) {}
                                            try {
                                                var n = t.indexOf(c);
                                                if (-1 !== n) {
                                                    t.splice(n);
                                                    var o = e.splice(n)[0];
                                                    c.__sentry_xhr__ && void 0 !== o[0] && (c.__sentry_xhr__.body = o[0])
                                                }
                                            } catch (t) {}
                                            Kt("xhr", {
                                                args: r,
                                                endTimestamp: Date.now(),
                                                startTimestamp: Date.now(),
                                                xhr: c
                                            })
                                        }
                                    };
                                    return "onreadystatechange" in c && "function" == typeof c.onreadystatechange ? Object(object.c)(c, "onreadystatechange", (function(t) {
                                        return function() {
                                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                            return l(), t.apply(c, e)
                                        }
                                    })) : c.addEventListener("readystatechange", l), n.apply(c, r)
                                }
                            })), Object(object.c)(n, "send", (function(n) {
                                return function() {
                                    for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                                    return t.push(this), e.push(r), Kt("xhr", {
                                        args: r,
                                        startTimestamp: Date.now(),
                                        xhr: this
                                    }), n.apply(this, r)
                                }
                            }))
                        }();
                        break;
                    case "fetch":
                        ! function() {
                            if (!Object(st.d)()) return;
                            Object(object.c)($t, "fetch", (function(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = {
                                        args: e,
                                        fetchData: {
                                            method: Xt(e),
                                            url: Qt(e)
                                        },
                                        startTimestamp: Date.now()
                                    };
                                    return Kt("fetch", Object(l.a)({}, r)), t.apply($t, e).then((function(t) {
                                        return Kt("fetch", Object(l.a)(Object(l.a)({}, r), {
                                            endTimestamp: Date.now(),
                                            response: t
                                        })), t
                                    }), (function(t) {
                                        throw Kt("fetch", Object(l.a)(Object(l.a)({}, r), {
                                            endTimestamp: Date.now(),
                                            error: t
                                        })), t
                                    }))
                                }
                            }))
                        }();
                        break;
                    case "history":
                        ! function() {
                            if (!Object(st.c)()) return;
                            var t = $t.onpopstate;

                            function e(t) {
                                return function() {
                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                    var r = e.length > 2 ? e[2] : void 0;
                                    if (r) {
                                        var o = zt,
                                            c = String(r);
                                        zt = c, Kt("history", {
                                            from: o,
                                            to: c
                                        })
                                    }
                                    return t.apply(this, e)
                                }
                            }
                            $t.onpopstate = function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var r = $t.location.href,
                                    o = zt;
                                if (zt = r, Kt("history", {
                                        from: o,
                                        to: r
                                    }), t) try {
                                    return t.apply(this, e)
                                } catch (t) {}
                            }, Object(object.c)($t.history, "pushState", e), Object(object.c)($t.history, "replaceState", e)
                        }();
                        break;
                    case "error":
                        ne = $t.onerror, $t.onerror = function(t, e, line, n, r) {
                            return Kt("error", {
                                column: n,
                                error: r,
                                line: line,
                                msg: t,
                                url: e
                            }), !!ne && ne.apply(this, arguments)
                        };
                        break;
                    case "unhandledrejection":
                        re = $t.onunhandledrejection, $t.onunhandledrejection = function(t) {
                            return Kt("unhandledrejection", t), !re || re.apply(this, arguments)
                        };
                        break;
                    default:
                        S.a.warn("unknown instrumentation type:", t)
                }
            }

            function Gt(t) {
                t && "string" == typeof t.type && "function" == typeof t.callback && (Vt[t.type] = Vt[t.type] || [], Vt[t.type].push(t.callback), Jt(t.type))
            }

            function Kt(t, data) {
                var e, n;
                if (t && Vt[t]) try {
                    for (var r = Object(l.h)(Vt[t] || []), o = r.next(); !o.done; o = r.next()) {
                        var c = o.value;
                        try {
                            c(data)
                        } catch (e) {
                            S.a.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Object(Wt.a)(c) + "\nError: " + e)
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (n = r.return) && n.call(r)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }

            function Xt(t) {
                return void 0 === t && (t = []), "Request" in $t && Object(v.g)(t[0], Request) && t[0].method ? String(t[0].method).toUpperCase() : t[1] && t[1].method ? String(t[1].method).toUpperCase() : "GET"
            }

            function Qt(t) {
                return void 0 === t && (t = []), "string" == typeof t[0] ? t[0] : "Request" in $t && Object(v.g)(t[0], Request) ? t[0].url : String(t[0])
            }
            var Zt, te;

            function ee(t, e) {
                return void 0 === e && (e = !1),
                    function(n) {
                        if (n && te !== n && ! function(t) {
                                if ("keypress" !== t.type) return !1;
                                try {
                                    var e = t.target;
                                    if (!e || !e.tagName) return !0;
                                    if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
                                } catch (t) {}
                                return !0
                            }(n)) {
                            var r = "keypress" === n.type ? "input" : n.type;
                            (void 0 === Zt || function(t, e) {
                                if (!t) return !0;
                                if (t.type !== e.type) return !0;
                                try {
                                    if (t.target !== e.target) return !0
                                } catch (t) {}
                                return !1
                            }(te, n)) && (t({
                                event: n,
                                name: r,
                                global: e
                            }), te = n), clearTimeout(Zt), Zt = $t.setTimeout((function() {
                                Zt = void 0
                            }), 1e3)
                        }
                    }
            }
            var ne = null;
            var re = null;
            var oe, ie = n(428),
                ae = function() {
                    function t(e) {
                        this.name = t.id, this._options = Object(l.a)({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        }, e)
                    }
                    return t.prototype.addSentryBreadcrumb = function(t) {
                        this._options.sentry && R().addBreadcrumb({
                            category: "sentry." + ("transaction" === t.type ? "transaction" : "event"),
                            event_id: t.event_id,
                            level: t.level,
                            message: Object(m.d)(t)
                        }, {
                            event: t
                        })
                    }, t.prototype.setupOnce = function() {
                        var t = this;
                        this._options.console && Gt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._consoleBreadcrumb.apply(t, Object(l.g)(e))
                            },
                            type: "console"
                        }), this._options.dom && Gt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._domBreadcrumb.apply(t, Object(l.g)(e))
                            },
                            type: "dom"
                        }), this._options.xhr && Gt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._xhrBreadcrumb.apply(t, Object(l.g)(e))
                            },
                            type: "xhr"
                        }), this._options.fetch && Gt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._fetchBreadcrumb.apply(t, Object(l.g)(e))
                            },
                            type: "fetch"
                        }), this._options.history && Gt({
                            callback: function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                t._historyBreadcrumb.apply(t, Object(l.g)(e))
                            },
                            type: "history"
                        })
                    }, t.prototype._consoleBreadcrumb = function(t) {
                        var e = {
                            category: "console",
                            data: {
                                arguments: t.args,
                                logger: "console"
                            },
                            level: d.a.fromString(t.level),
                            message: Object(et.b)(t.args, " ")
                        };
                        if ("assert" === t.level) {
                            if (!1 !== t.args[0]) return;
                            e.message = "Assertion failed: " + (Object(et.b)(t.args.slice(1), " ") || "console.assert"), e.data.arguments = t.args.slice(1)
                        }
                        R().addBreadcrumb(e, {
                            input: t.args,
                            level: t.level
                        })
                    }, t.prototype._domBreadcrumb = function(t) {
                        var e;
                        try {
                            e = t.event.target ? Object(ie.a)(t.event.target) : Object(ie.a)(t.event)
                        } catch (t) {
                            e = "<unknown>"
                        }
                        0 !== e.length && R().addBreadcrumb({
                            category: "ui." + t.name,
                            message: e
                        }, {
                            event: t.event,
                            name: t.name,
                            global: t.global
                        })
                    }, t.prototype._xhrBreadcrumb = function(t) {
                        if (t.endTimestamp) {
                            if (t.xhr.__sentry_own_request__) return;
                            var e = t.xhr.__sentry_xhr__ || {},
                                n = e.method,
                                r = e.url,
                                o = e.status_code,
                                body = e.body;
                            R().addBreadcrumb({
                                category: "xhr",
                                data: {
                                    method: n,
                                    url: r,
                                    status_code: o
                                },
                                type: "http"
                            }, {
                                xhr: t.xhr,
                                input: body
                            })
                        } else;
                    }, t.prototype._fetchBreadcrumb = function(t) {
                        t.endTimestamp && (t.fetchData.url.match(/sentry_key/) && "POST" === t.fetchData.method || (t.error ? R().addBreadcrumb({
                            category: "fetch",
                            data: t.fetchData,
                            level: d.a.Error,
                            type: "http"
                        }, {
                            data: t.error,
                            input: t.args
                        }) : R().addBreadcrumb({
                            category: "fetch",
                            data: Object(l.a)(Object(l.a)({}, t.fetchData), {
                                status_code: t.response.status
                            }),
                            type: "http"
                        }, {
                            input: t.args,
                            response: t.response
                        })))
                    }, t.prototype._historyBreadcrumb = function(t) {
                        var e = Object(m.e)(),
                            n = t.from,
                            r = t.to,
                            o = Object(m.h)(e.location.href),
                            c = Object(m.h)(n),
                            f = Object(m.h)(r);
                        c.path || (c = o), o.protocol === f.protocol && o.host === f.host && (r = f.relative), o.protocol === c.protocol && o.host === c.host && (n = c.relative), R().addBreadcrumb({
                            category: "navigation",
                            data: {
                                from: n,
                                to: r
                            }
                        })
                    }, t.id = "Breadcrumbs", t
                }(),
                ce = function(t) {
                    function e(e) {
                        void 0 === e && (e = {});
                        return e._metadata = e._metadata || {}, e._metadata.sdk = e._metadata.sdk || {
                            name: "sentry.javascript.browser",
                            packages: [{
                                name: "npm:@sentry/browser",
                                version: G
                            }],
                            version: G
                        }, t.call(this, Ft, e) || this
                    }
                    return Object(l.c)(e, t), e.prototype.showReportDialog = function(t) {
                        void 0 === t && (t = {}), Object(m.e)().document && (this._isEnabled() ? qt(Object(l.a)(Object(l.a)({}, t), {
                            dsn: t.dsn || this.getDsn()
                        })) : S.a.error("Trying to call showReportDialog with Sentry Client disabled"))
                    }, e.prototype._prepareEvent = function(e, n, r) {
                        return e.platform = e.platform || "javascript", t.prototype._prepareEvent.call(this, e, n, r)
                    }, e.prototype._sendEvent = function(e) {
                        var n = this.getIntegration(ae);
                        n && n.addSentryBreadcrumb(e), t.prototype._sendEvent.call(this, e)
                    }, e
                }(it),
                se = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        oe = Function.prototype.toString, Function.prototype.toString = function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            var n = this.__sentry_original__ || this;
                            return oe.apply(n, t)
                        }
                    }, t.id = "FunctionToString", t
                }(),
                ue = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
                fe = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this._options = e, this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        E((function(e) {
                            var n = R();
                            if (!n) return e;
                            var r = n.getIntegration(t);
                            if (r) {
                                var o = n.getClient(),
                                    c = o ? o.getOptions() : {},
                                    f = "function" == typeof r._mergeOptions ? r._mergeOptions(c) : {};
                                return "function" != typeof r._shouldDropEvent ? e : r._shouldDropEvent(e, f) ? null : e
                            }
                            return e
                        }))
                    }, t.prototype._shouldDropEvent = function(t, e) {
                        return this._isSentryError(t, e) ? (S.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(m.d)(t)), !0) : this._isIgnoredError(t, e) ? (S.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(m.d)(t)), !0) : this._isDeniedUrl(t, e) ? (S.a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(m.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0) : !this._isAllowedUrl(t, e) && (S.a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(m.d)(t) + ".\nUrl: " + this._getEventFilterUrl(t)), !0)
                    }, t.prototype._isSentryError = function(t, e) {
                        if (!e.ignoreInternal) return !1;
                        try {
                            return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
                        } catch (t) {
                            return !1
                        }
                    }, t.prototype._isIgnoredError = function(t, e) {
                        return !(!e.ignoreErrors || !e.ignoreErrors.length) && this._getPossibleEventMessages(t).some((function(t) {
                            return e.ignoreErrors.some((function(pattern) {
                                return Object(et.a)(t, pattern)
                            }))
                        }))
                    }, t.prototype._isDeniedUrl = function(t, e) {
                        if (!e.denyUrls || !e.denyUrls.length) return !1;
                        var n = this._getEventFilterUrl(t);
                        return !!n && e.denyUrls.some((function(pattern) {
                            return Object(et.a)(n, pattern)
                        }))
                    }, t.prototype._isAllowedUrl = function(t, e) {
                        if (!e.allowUrls || !e.allowUrls.length) return !0;
                        var n = this._getEventFilterUrl(t);
                        return !n || e.allowUrls.some((function(pattern) {
                            return Object(et.a)(n, pattern)
                        }))
                    }, t.prototype._mergeOptions = function(t) {
                        return void 0 === t && (t = {}), {
                            allowUrls: Object(l.g)(this._options.whitelistUrls || [], this._options.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                            denyUrls: Object(l.g)(this._options.blacklistUrls || [], this._options.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                            ignoreErrors: Object(l.g)(this._options.ignoreErrors || [], t.ignoreErrors || [], ue),
                            ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
                        }
                    }, t.prototype._getPossibleEventMessages = function(t) {
                        if (t.message) return [t.message];
                        if (t.exception) try {
                            var e = t.exception.values && t.exception.values[0] || {},
                                n = e.type,
                                r = void 0 === n ? "" : n,
                                o = e.value,
                                c = void 0 === o ? "" : o;
                            return ["" + c, r + ": " + c]
                        } catch (e) {
                            return S.a.error("Cannot extract message for event " + Object(m.d)(t)), []
                        }
                        return []
                    }, t.prototype._getEventFilterUrl = function(t) {
                        try {
                            if (t.stacktrace) {
                                var e = t.stacktrace.frames;
                                return e && e[e.length - 1].filename || null
                            }
                            if (t.exception) {
                                var n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames;
                                return n && n[n.length - 1].filename || null
                            }
                            return null
                        } catch (e) {
                            return S.a.error("Cannot extract url for event " + Object(m.d)(t)), null
                        }
                    }, t.id = "InboundFilters", t
                }();
            var le = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                pe = function() {
                    function t(e) {
                        this.name = t.id, this._options = Object(l.a)({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, e)
                    }
                    return t.prototype.setupOnce = function() {
                        var t = Object(m.e)();
                        (this._options.setTimeout && Object(object.c)(t, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && Object(object.c)(t, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && Object(object.c)(t, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in t && Object(object.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : le).forEach(this._wrapEventTarget.bind(this))
                    }, t.prototype._wrapTimeFunction = function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = e[0];
                            return e[0] = Ht(r, {
                                mechanism: {
                                    data: {
                                        function: Object(Wt.a)(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }), t.apply(this, e)
                        }
                    }, t.prototype._wrapRAF = function(t) {
                        return function(e) {
                            return t.call(this, Ht(e, {
                                mechanism: {
                                    data: {
                                        function: "requestAnimationFrame",
                                        handler: Object(Wt.a)(t)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        }
                    }, t.prototype._wrapEventTarget = function(t) {
                        var e = Object(m.e)(),
                            n = e[t] && e[t].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (Object(object.c)(n, "addEventListener", (function(e) {
                            return function(n, r, o) {
                                try {
                                    "function" == typeof r.handleEvent && (r.handleEvent = Ht(r.handleEvent.bind(r), {
                                        mechanism: {
                                            data: {
                                                function: "handleEvent",
                                                handler: Object(Wt.a)(r),
                                                target: t
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    }))
                                } catch (t) {}
                                return e.call(this, n, Ht(r, {
                                    mechanism: {
                                        data: {
                                            function: "addEventListener",
                                            handler: Object(Wt.a)(r),
                                            target: t
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }), o)
                            }
                        })), Object(object.c)(n, "removeEventListener", (function(t) {
                            return function(e, n, r) {
                                var o, c = n;
                                try {
                                    var f = null === (o = c) || void 0 === o ? void 0 : o.__sentry_wrapped__;
                                    f && t.call(this, e, f, r)
                                } catch (t) {}
                                return t.call(this, e, c, r)
                            }
                        })))
                    }, t.prototype._wrapXHR = function(t) {
                        return function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = this,
                                o = ["onload", "onerror", "onprogress", "onreadystatechange"];
                            return o.forEach((function(t) {
                                t in r && "function" == typeof r[t] && Object(object.c)(r, t, (function(e) {
                                    var n = {
                                        mechanism: {
                                            data: {
                                                function: t,
                                                handler: Object(Wt.a)(e)
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    };
                                    return e.__sentry_original__ && (n.mechanism.data.handler = Object(Wt.a)(e.__sentry_original__)), Ht(e, n)
                                }))
                            })), t.apply(this, e)
                        }
                    }, t.id = "TryCatch", t
                }(),
                de = function() {
                    function t(e) {
                        this.name = t.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = Object(l.a)({
                            onerror: !0,
                            onunhandledrejection: !0
                        }, e)
                    }
                    return t.prototype.setupOnce = function() {
                        Error.stackTraceLimit = 50, this._options.onerror && (S.a.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (S.a.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
                    }, t.prototype._installGlobalOnErrorHandler = function() {
                        var e = this;
                        this._onErrorHandlerInstalled || (Gt({
                            callback: function(data) {
                                var n = data.error,
                                    r = R(),
                                    o = r.getIntegration(t),
                                    c = n && !0 === n.__sentry_own_request__;
                                if (o && !Bt() && !c) {
                                    var f = r.getClient(),
                                        l = Object(v.i)(n) ? e._eventFromIncompleteOnError(data.msg, data.url, data.line, data.column) : e._enhanceEventWithInitialFrame(wt(n, void 0, {
                                            attachStacktrace: f && f.getOptions().attachStacktrace,
                                            rejection: !1
                                        }), data.url, data.line, data.column);
                                    Object(m.a)(l, {
                                        handled: !1,
                                        type: "onerror"
                                    }), r.captureEvent(l, {
                                        originalException: n
                                    })
                                }
                            },
                            type: "error"
                        }), this._onErrorHandlerInstalled = !0)
                    }, t.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                        var e = this;
                        this._onUnhandledRejectionHandlerInstalled || (Gt({
                            callback: function(n) {
                                var r = n;
                                try {
                                    "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                                } catch (t) {}
                                var o = R(),
                                    c = o.getIntegration(t),
                                    f = r && !0 === r.__sentry_own_request__;
                                if (!c || Bt() || f) return !0;
                                var l = o.getClient(),
                                    h = Object(v.i)(r) ? e._eventFromRejectionWithPrimitive(r) : wt(r, void 0, {
                                        attachStacktrace: l && l.getOptions().attachStacktrace,
                                        rejection: !0
                                    });
                                h.level = d.a.Error, Object(m.a)(h, {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }), o.captureEvent(h, {
                                    originalException: r
                                })
                            },
                            type: "unhandledrejection"
                        }), this._onUnhandledRejectionHandlerInstalled = !0)
                    }, t.prototype._eventFromIncompleteOnError = function(t, e, line, n) {
                        var r, o = Object(v.e)(t) ? t.message : t;
                        if (Object(v.k)(o)) {
                            var c = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                            c && (r = c[1], o = c[2])
                        }
                        var f = {
                            exception: {
                                values: [{
                                    type: r || "Error",
                                    value: o
                                }]
                            }
                        };
                        return this._enhanceEventWithInitialFrame(f, e, line, n)
                    }, t.prototype._eventFromRejectionWithPrimitive = function(t) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: " + String(t)
                                }]
                            }
                        }
                    }, t.prototype._enhanceEventWithInitialFrame = function(t, e, line, n) {
                        t.exception = t.exception || {}, t.exception.values = t.exception.values || [], t.exception.values[0] = t.exception.values[0] || {}, t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {}, t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
                        var r = isNaN(parseInt(n, 10)) ? void 0 : n,
                            o = isNaN(parseInt(line, 10)) ? void 0 : line,
                            c = Object(v.k)(e) && e.length > 0 ? e : Object(m.f)();
                        return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
                            colno: r,
                            filename: c,
                            function: "?",
                            in_app: !0,
                            lineno: o
                        }), t
                    }, t.id = "GlobalHandlers", t
                }(),
                he = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._key = e.key || "cause", this._limit = e.limit || 5
                    }
                    return t.prototype.setupOnce = function() {
                        E((function(e, n) {
                            var r = R().getIntegration(t);
                            return r ? r._handler(e, n) : e
                        }))
                    }, t.prototype._handler = function(t, e) {
                        if (!(t.exception && t.exception.values && e && Object(v.g)(e.originalException, Error))) return t;
                        var n = this._walkErrorTree(e.originalException, this._key);
                        return t.exception.values = Object(l.g)(n, t.exception.values), t
                    }, t.prototype._walkErrorTree = function(t, e, n) {
                        if (void 0 === n && (n = []), !Object(v.g)(t[e], Error) || n.length + 1 >= this._limit) return n;
                        var r = mt(_t(t[e]));
                        return this._walkErrorTree(t[e], e, Object(l.g)([r], n))
                    }, t.id = "LinkedErrors", t
                }(),
                ve = Object(m.e)(),
                ye = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function() {
                        E((function(e) {
                            var n, r, o;
                            if (R().getIntegration(t)) {
                                if (!ve.navigator && !ve.location && !ve.document) return e;
                                var c = (null === (n = e.request) || void 0 === n ? void 0 : n.url) || (null === (r = ve.location) || void 0 === r ? void 0 : r.href),
                                    f = (ve.document || {}).referrer,
                                    d = (ve.navigator || {}).userAgent,
                                    h = Object(l.a)(Object(l.a)(Object(l.a)({}, null === (o = e.request) || void 0 === o ? void 0 : o.headers), f && {
                                        Referer: f
                                    }), d && {
                                        "User-Agent": d
                                    }),
                                    v = Object(l.a)(Object(l.a)({}, c && {
                                        url: c
                                    }), {
                                        headers: h
                                    });
                                return Object(l.a)(Object(l.a)({}, e), {
                                    request: v
                                })
                            }
                            return e
                        }))
                    }, t.id = "UserAgent", t
                }(),
                _e = [new r.InboundFilters, new r.FunctionToString, new pe, new ae, new de, new he, new ye];

            function ge(t) {
                if (void 0 === t && (t = {}), void 0 === t.defaultIntegrations && (t.defaultIntegrations = _e), void 0 === t.release) {
                    var e = Object(m.e)();
                    e.SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id)
                }
                void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0),
                    function(t, e) {
                        !0 === e.debug && S.a.enable();
                        var n = R(),
                            r = new t(e);
                        n.bindClient(r)
                    }(ce, t), t.autoSessionTracking && function() {
                        if (void 0 === Object(m.e)().document) return void S.a.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                        var t = R();
                        if ("function" != typeof t.startSession || "function" != typeof t.captureSession) return;
                        t.startSession(), t.captureSession(), Gt({
                            callback: function() {
                                t.startSession(), t.captureSession()
                            },
                            type: "history"
                        })
                    }()
            }

            function be(t) {
                void 0 === t && (t = {}), t.eventId || (t.eventId = R().lastEventId());
                var e = R().getClient();
                e && e.showReportDialog(t)
            }

            function me() {
                return R().lastEventId()
            }

            function Oe() {}

            function je(t) {
                t()
            }

            function Ee(t) {
                var e = R().getClient();
                return e ? e.flush(t) : _.reject(!1)
            }

            function Se(t) {
                var e = R().getClient();
                return e ? e.close(t) : _.reject(!1)
            }

            function we(t) {
                return Ht(t)()
            }
            var xe = "sentry.javascript.browser",
                ke = {},
                Ie = Object(m.e)();
            Ie.Sentry && Ie.Sentry.Integrations && (ke = Ie.Sentry.Integrations);
            var Te = Object(l.a)(Object(l.a)(Object(l.a)({}, ke), r), o)
        },
        436: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Angular", (function() {
                return d
            })), n.d(e, "CaptureConsole", (function() {
                return _
            })), n.d(e, "Debug", (function() {
                return m
            })), n.d(e, "Dedupe", (function() {
                return O
            })), n.d(e, "Ember", (function() {
                return E
            })), n.d(e, "ExtraErrorData", (function() {
                return S
            })), n.d(e, "Offline", (function() {
                return k
            })), n.d(e, "ReportingObserver", (function() {
                return T
            })), n.d(e, "RewriteFrames", (function() {
                return P
            })), n.d(e, "SessionTiming", (function() {
                return F
            })), n.d(e, "Transaction", (function() {
                return U
            })), n.d(e, "Vue", (function() {
                return V
            }));
            var r, o = n(335),
                c = n(395),
                f = n(369),
                l = /^\[((?:[$a-zA-Z0-9]+:)?(?:[$a-zA-Z0-9]+))\] (.*?)\n?(\S+)$/,
                d = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, c.a.log("You are still using the Angular integration, consider moving to @sentry/angular"), this._angular = e.angular || Object(f.e)().angular, this._angular ? this._module = this._angular.module(t.moduleName, []) : c.a.error("AngularIntegration is missing an Angular instance")
                    }
                    return t.prototype.setupOnce = function(t, e) {
                        var n = this;
                        this._module && (this._getCurrentHub = e, this._module.config(["$provide", function(t) {
                            t.decorator("$exceptionHandler", ["$delegate", n._$exceptionHandlerDecorator.bind(n)])
                        }]))
                    }, t.prototype._$exceptionHandlerDecorator = function(e) {
                        var n = this;
                        return function(r, c) {
                            var f = n._getCurrentHub && n._getCurrentHub();
                            f && f.getIntegration(t) && f.withScope((function(t) {
                                c && t.setExtra("cause", c), t.addEventProcessor((function(t) {
                                    var e = t.exception && t.exception.values && t.exception.values[0];
                                    if (e) {
                                        var n = l.exec(e.value || "");
                                        n && (e.type = n[1], e.value = n[2], t.message = e.type + ": " + e.value, t.extra = Object(o.a)(Object(o.a)({}, t.extra), {
                                            angularDocs: n[3].substr(0, 250)
                                        }))
                                    }
                                    return t
                                })), f.captureException(r)
                            })), e(r, c)
                        }
                    }, t.id = "AngularJS", t.moduleName = "ngSentry", t
                }(),
                h = n(432),
                object = n(427),
                v = n(394),
                y = Object(f.e)(),
                _ = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._levels = ["log", "info", "warn", "error", "debug", "assert"], e.levels && (this._levels = e.levels)
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        "console" in y && this._levels.forEach((function(e) {
                            e in y.console && Object(object.c)(y.console, e, (function(r) {
                                return function() {
                                    for (var o = [], c = 0; c < arguments.length; c++) o[c] = arguments[c];
                                    var f = n();
                                    f.getIntegration(t) && f.withScope((function(t) {
                                        t.setLevel(h.a.fromString(e)), t.setExtra("arguments", o), t.addEventProcessor((function(t) {
                                            return t.logger = "console", t
                                        }));
                                        var n = Object(v.b)(o, " ");
                                        "assert" === e ? !1 === o[0] && (n = "Assertion failed: " + (Object(v.b)(o.slice(1), " ") || "console.assert"), t.setExtra("arguments", o.slice(1)), f.captureMessage(n)) : f.captureMessage(n)
                                    })), r && Function.prototype.apply.call(r, y.console, o)
                                }
                            }))
                        }))
                    }, t.id = "CaptureConsole", t
                }(),
                m = function() {
                    function t(e) {
                        this.name = t.id, this._options = Object(o.a)({
                            debugger: !1,
                            stringify: !1
                        }, e)
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e, r) {
                            var o = n().getIntegration(t);
                            return o && (o._options.debugger, Object(f.c)((function() {
                                o._options.stringify ? (console.log(JSON.stringify(e, null, 2)), r && console.log(JSON.stringify(r, null, 2))) : (console.log(e), r && console.log(r))
                            }))), e
                        }))
                    }, t.id = "Debug", t
                }(),
                O = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            if (r) {
                                try {
                                    if (r._shouldDropEvent(e, r._previousEvent)) return null
                                } catch (t) {
                                    return r._previousEvent = e
                                }
                                return r._previousEvent = e
                            }
                            return e
                        }))
                    }, t.prototype._shouldDropEvent = function(t, e) {
                        return !!e && (!!this._isSameMessageEvent(t, e) || !!this._isSameExceptionEvent(t, e))
                    }, t.prototype._isSameMessageEvent = function(t, e) {
                        var n = t.message,
                            r = e.message;
                        return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this._isSameFingerprint(t, e) && !!this._isSameStacktrace(t, e))))
                    }, t.prototype._getFramesFromEvent = function(t) {
                        var e = t.exception;
                        if (e) try {
                            return e.values[0].stacktrace.frames
                        } catch (t) {
                            return
                        } else if (t.stacktrace) return t.stacktrace.frames
                    }, t.prototype._isSameStacktrace = function(t, e) {
                        var n = this._getFramesFromEvent(t),
                            r = this._getFramesFromEvent(e);
                        if (!n && !r) return !0;
                        if (n && !r || !n && r) return !1;
                        if (n = n, (r = r).length !== n.length) return !1;
                        for (var i = 0; i < r.length; i++) {
                            var o = r[i],
                                c = n[i];
                            if (o.filename !== c.filename || o.lineno !== c.lineno || o.colno !== c.colno || o.function !== c.function) return !1
                        }
                        return !0
                    }, t.prototype._getExceptionFromEvent = function(t) {
                        return t.exception && t.exception.values && t.exception.values[0]
                    }, t.prototype._isSameExceptionEvent = function(t, e) {
                        var n = this._getExceptionFromEvent(e),
                            r = this._getExceptionFromEvent(t);
                        return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this._isSameFingerprint(t, e) && !!this._isSameStacktrace(t, e)))
                    }, t.prototype._isSameFingerprint = function(t, e) {
                        var n = t.fingerprint,
                            r = e.fingerprint;
                        if (!n && !r) return !0;
                        if (n && !r || !n && r) return !1;
                        n = n, r = r;
                        try {
                            return !(n.join("") !== r.join(""))
                        } catch (t) {
                            return !1
                        }
                    }, t.id = "Dedupe", t
                }(),
                j = n(368),
                E = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this._Ember = e.Ember || Object(f.e)().Ember
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        var r = this;
                        if (this._Ember) {
                            var o = this._Ember.onerror;
                            this._Ember.onerror = function(e) {
                                if (n().getIntegration(t) && n().captureException(e, {
                                        originalException: e
                                    }), "function" == typeof o) o.call(r._Ember, e);
                                else if (r._Ember.testing) throw e
                            }, this._Ember.RSVP.on("error", (function(e) {
                                n().getIntegration(t) && n().withScope((function(t) {
                                    Object(j.g)(e, Error) ? (t.setExtra("context", "Unhandled Promise error detected"), n().captureException(e, {
                                        originalException: e
                                    })) : (t.setExtra("reason", e), n().captureMessage("Unhandled Promise error detected"))
                                }))
                            }))
                        } else c.a.error("EmberIntegration is missing an Ember instance")
                    }, t.id = "Ember", t
                }(),
                S = function() {
                    function t(e) {
                        void 0 === e && (e = {
                            depth: 3
                        }), this._options = e, this.name = t.id
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e, r) {
                            var o = n().getIntegration(t);
                            return o ? o.enhanceEventWithErrorData(e, r) : e
                        }))
                    }, t.prototype.enhanceEventWithErrorData = function(t, e) {
                        var n;
                        if (!e || !e.originalException || !Object(j.d)(e.originalException)) return t;
                        var r = e.originalException.name || e.originalException.constructor.name,
                            c = this._extractErrorData(e.originalException);
                        if (c) {
                            var f = Object(o.a)({}, t.contexts),
                                l = Object(object.d)(c, this._options.depth);
                            return Object(j.h)(l) && (f = Object(o.a)(Object(o.a)({}, t.contexts), ((n = {})[r] = Object(o.a)({}, l), n))), Object(o.a)(Object(o.a)({}, t), {
                                contexts: f
                            })
                        }
                        return t
                    }, t.prototype._extractErrorData = function(t) {
                        var e, n, r = null;
                        try {
                            var f = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber"],
                                l = Object.getOwnPropertyNames(t).filter((function(t) {
                                    return -1 === f.indexOf(t)
                                }));
                            if (l.length) {
                                var d = {};
                                try {
                                    for (var h = Object(o.h)(l), v = h.next(); !v.done; v = h.next()) {
                                        var y = v.value,
                                            _ = t[y];
                                        Object(j.d)(_) && (_ = _.toString()), d[y] = _
                                    }
                                } catch (t) {
                                    e = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        v && !v.done && (n = h.return) && n.call(h)
                                    } finally {
                                        if (e) throw e.error
                                    }
                                }
                                r = d
                            }
                        } catch (t) {
                            c.a.error("Unable to extract extra data from the Error object:", t)
                        }
                        return r
                    }, t.id = "ExtraErrorData", t
                }(),
                w = n(431),
                x = n.n(w),
                k = function() {
                    function t(e) {
                        void 0 === e && (e = {}), this.name = t.id, this.global = Object(f.e)(), this.maxStoredEvents = e.maxStoredEvents || 30, this.offlineEventStore = x.a.createInstance({
                            name: "sentry/offlineEventStore"
                        })
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        var r = this;
                        this.hub = n(), "addEventListener" in this.global && this.global.addEventListener("online", (function() {
                            r._sendEvents().catch((function() {
                                c.a.warn("could not send cached events")
                            }))
                        })), e((function(e) {
                            return r.hub && r.hub.getIntegration(t) && "navigator" in r.global && "onLine" in r.global.navigator && !r.global.navigator.onLine ? (r._cacheEvent(e).then((function(t) {
                                return r._enforceMaxEvents()
                            })).catch((function(t) {
                                c.a.warn("could not cache event while offline")
                            })), null) : e
                        })), "navigator" in this.global && "onLine" in this.global.navigator && this.global.navigator.onLine && this._sendEvents().catch((function() {
                            c.a.warn("could not send cached events")
                        }))
                    }, t.prototype._cacheEvent = function(t) {
                        return Object(o.b)(this, void 0, void 0, (function() {
                            return Object(o.d)(this, (function(e) {
                                return [2, this.offlineEventStore.setItem(Object(f.i)(), Object(object.d)(t))]
                            }))
                        }))
                    }, t.prototype._enforceMaxEvents = function() {
                        return Object(o.b)(this, void 0, void 0, (function() {
                            var t, e = this;
                            return Object(o.d)(this, (function(n) {
                                return t = [], [2, this.offlineEventStore.iterate((function(e, n, r) {
                                    t.push({
                                        cacheKey: n,
                                        event: e
                                    })
                                })).then((function() {
                                    return e._purgeEvents(t.sort((function(a, b) {
                                        return (b.event.timestamp || 0) - (a.event.timestamp || 0)
                                    })).slice(e.maxStoredEvents < t.length ? e.maxStoredEvents : t.length).map((function(t) {
                                        return t.cacheKey
                                    })))
                                })).catch((function(t) {
                                    c.a.warn("could not enforce max events")
                                }))]
                            }))
                        }))
                    }, t.prototype._purgeEvent = function(t) {
                        return Object(o.b)(this, void 0, void 0, (function() {
                            return Object(o.d)(this, (function(e) {
                                return [2, this.offlineEventStore.removeItem(t)]
                            }))
                        }))
                    }, t.prototype._purgeEvents = function(t) {
                        return Object(o.b)(this, void 0, void 0, (function() {
                            var e = this;
                            return Object(o.d)(this, (function(n) {
                                return [2, Promise.all(t.map((function(t) {
                                    return e._purgeEvent(t)
                                }))).then()]
                            }))
                        }))
                    }, t.prototype._sendEvents = function() {
                        return Object(o.b)(this, void 0, void 0, (function() {
                            var t = this;
                            return Object(o.d)(this, (function(e) {
                                return [2, this.offlineEventStore.iterate((function(e, n, r) {
                                    t.hub ? (t.hub.captureEvent(e), t._purgeEvent(n).catch((function(t) {
                                        c.a.warn("could not purge event from cache")
                                    }))) : c.a.warn("no hub found - could not send cached event")
                                }))]
                            }))
                        }))
                    }, t.id = "Offline", t
                }(),
                I = n(430);
            ! function(t) {
                t.Crash = "crash", t.Deprecation = "deprecation", t.Intervention = "intervention"
            }(r || (r = {}));
            var T = function() {
                function t(e) {
                    void 0 === e && (e = {
                        types: [r.Crash, r.Deprecation, r.Intervention]
                    }), this._options = e, this.name = t.id
                }
                return t.prototype.setupOnce = function(t, e) {
                    Object(I.f)() && (this._getCurrentHub = e, new(Object(f.e)().ReportingObserver)(this.handler.bind(this), {
                        buffered: !0,
                        types: this._options.types
                    }).observe())
                }, t.prototype.handler = function(e) {
                    var n, c, f = this._getCurrentHub && this._getCurrentHub();
                    if (f && f.getIntegration(t)) {
                        var l = function(t) {
                            f.withScope((function(e) {
                                e.setExtra("url", t.url);
                                var label = "ReportingObserver [" + t.type + "]",
                                    details = "No details available";
                                if (t.body) {
                                    var body, n = {};
                                    for (var o in t.body) n[o] = t.body[o];
                                    if (e.setExtra("body", n), t.type === r.Crash) details = [(body = t.body).crashId || "", body.reason || ""].join(" ").trim() || details;
                                    else details = (body = t.body).message || details
                                }
                                f.captureMessage(label + ": " + details)
                            }))
                        };
                        try {
                            for (var d = Object(o.h)(e), h = d.next(); !h.done; h = d.next()) {
                                l(h.value)
                            }
                        } catch (t) {
                            n = {
                                error: t
                            }
                        } finally {
                            try {
                                h && !h.done && (c = d.return) && c.call(d)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }
                }, t.id = "ReportingObserver", t
            }();

            function R(t, e) {
                for (var n = 0, i = t.length - 1; i >= 0; i--) {
                    var r = t[i];
                    "." === r ? t.splice(i, 1) : ".." === r ? (t.splice(i, 1), n++) : n && (t.splice(i, 1), n--)
                }
                if (e)
                    for (; n--; n) t.unshift("..");
                return t
            }
            var N = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/;

            function A(t) {
                var e = N.exec(t);
                return e ? e.slice(1) : []
            }

            function D() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                for (var n = "", r = !1, i = t.length - 1; i >= -1 && !r; i--) {
                    var path = i >= 0 ? t[i] : "/";
                    path && (n = path + "/" + n, r = "/" === path.charAt(0))
                }
                return (r ? "/" : "") + (n = R(n.split("/").filter((function(p) {
                    return !!p
                })), !r).join("/")) || "."
            }

            function C(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
                return e > n ? [] : t.slice(e, n - e + 1)
            }

            function L(path, t) {
                var e = A(path)[2];
                return t && e.substr(-1 * t.length) === t && (e = e.substr(0, e.length - t.length)), e
            }
            var P = function() {
                    function t(e) {
                        var n = this;
                        void 0 === e && (e = {}), this.name = t.id, this._prefix = "app:///", this._iteratee = function(t) {
                            if (!t.filename) return t;
                            var e = /^[A-Z]:\\/.test(t.filename),
                                r = /^\//.test(t.filename);
                            if (e || r) {
                                var o = e ? t.filename.replace(/^[A-Z]:/, "").replace(/\\/g, "/") : t.filename,
                                    base = n._root ? function(t, e) {
                                        t = D(t).substr(1), e = D(e).substr(1);
                                        for (var n = C(t.split("/")), r = C(e.split("/")), o = Math.min(n.length, r.length), c = o, i = 0; i < o; i++)
                                            if (n[i] !== r[i]) {
                                                c = i;
                                                break
                                            }
                                        var f = [];
                                        for (i = c; i < n.length; i++) f.push("..");
                                        return (f = f.concat(r.slice(c))).join("/")
                                    }(n._root, o) : L(o);
                                t.filename = "" + n._prefix + base
                            }
                            return t
                        }, e.root && (this._root = e.root), e.prefix && (this._prefix = e.prefix), e.iteratee && (this._iteratee = e.iteratee)
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            return r ? r.process(e) : e
                        }))
                    }, t.prototype.process = function(t) {
                        return t.exception && Array.isArray(t.exception.values) ? this._processExceptionsEvent(t) : t.stacktrace ? this._processStacktraceEvent(t) : t
                    }, t.prototype._processExceptionsEvent = function(t) {
                        var e = this;
                        try {
                            return Object(o.a)(Object(o.a)({}, t), {
                                exception: Object(o.a)(Object(o.a)({}, t.exception), {
                                    values: t.exception.values.map((function(t) {
                                        return Object(o.a)(Object(o.a)({}, t), {
                                            stacktrace: e._processStacktrace(t.stacktrace)
                                        })
                                    }))
                                })
                            })
                        } catch (e) {
                            return t
                        }
                    }, t.prototype._processStacktraceEvent = function(t) {
                        try {
                            return Object(o.a)(Object(o.a)({}, t), {
                                stacktrace: this._processStacktrace(t.stacktrace)
                            })
                        } catch (e) {
                            return t
                        }
                    }, t.prototype._processStacktrace = function(t) {
                        var e = this;
                        return Object(o.a)(Object(o.a)({}, t), {
                            frames: t && t.frames && t.frames.map((function(t) {
                                return e._iteratee(t)
                            }))
                        })
                    }, t.id = "RewriteFrames", t
                }(),
                F = function() {
                    function t() {
                        this.name = t.id, this._startTime = Date.now()
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            return r ? r.process(e) : e
                        }))
                    }, t.prototype.process = function(t) {
                        var e, n = Date.now();
                        return Object(o.a)(Object(o.a)({}, t), {
                            extra: Object(o.a)(Object(o.a)({}, t.extra), (e = {}, e["session:start"] = this._startTime, e["session:duration"] = n - this._startTime, e["session:end"] = n, e))
                        })
                    }, t.id = "SessionTiming", t
                }(),
                U = function() {
                    function t() {
                        this.name = t.id
                    }
                    return t.prototype.setupOnce = function(e, n) {
                        e((function(e) {
                            var r = n().getIntegration(t);
                            return r ? r.process(e) : e
                        }))
                    }, t.prototype.process = function(t) {
                        for (var e = this._getFramesFromEvent(t), i = e.length - 1; i >= 0; i--) {
                            var n = e[i];
                            if (!0 === n.in_app) {
                                t.transaction = this._getTransaction(n);
                                break
                            }
                        }
                        return t
                    }, t.prototype._getFramesFromEvent = function(t) {
                        var e = t.exception && t.exception.values && t.exception.values[0];
                        return e && e.stacktrace && e.stacktrace.frames || []
                    }, t.prototype._getTransaction = function(t) {
                        return t.module || t.function ? (t.module || "?") + "/" + (t.function || "?") : "<unknown>"
                    }, t.id = "Transaction", t
                }(),
                time = n(433),
                B = {
                    id: "Tracing"
                },
                M = {
                    id: "BrowserTracing"
                },
                H = {
                    activate: ["activated", "deactivated"],
                    create: ["beforeCreate", "created"],
                    destroy: ["beforeDestroy", "destroyed"],
                    mount: ["beforeMount", "mounted"],
                    update: ["beforeUpdate", "updated"]
                },
                z = /(?:^|[-_/])(\w)/g,
                W = "root",
                $ = "anonymous component",
                V = function() {
                    function t(e) {
                        var n = this;
                        this.name = t.id, this._componentsCache = {}, this._applyTracingHooks = function(t, e) {
                            if (!t.$options.$_sentryPerfHook) {
                                t.$options.$_sentryPerfHook = !0;
                                var r = n._getComponentName(t),
                                    f = r === W,
                                    l = {},
                                    d = function(r) {
                                        var o = Object(time.b)();
                                        n._rootSpan ? n._finishRootSpan(o, e) : t.$once("hook:" + r, (function() {
                                            var t = e().getIntegration(B);
                                            if (t) {
                                                n._tracingActivity = t.constructor.pushActivity("Vue Application Render");
                                                var r = t.constructor.getTransaction();
                                                r && (n._rootSpan = r.startChild({
                                                    description: "Application Render",
                                                    op: "Vue"
                                                }))
                                            } else {
                                                var o = function(t) {
                                                    if (t && t.getScope) {
                                                        var e = t.getScope();
                                                        if (e) return e.getTransaction()
                                                    }
                                                    return
                                                }(e());
                                                o && (n._rootSpan = o.startChild({
                                                    description: "Application Render",
                                                    op: "Vue"
                                                }))
                                            }
                                        }))
                                    },
                                    h = function(o, c) {
                                        var f = Array.isArray(n._options.tracingOptions.trackComponents) ? n._options.tracingOptions.trackComponents.indexOf(r) > -1 : n._options.tracingOptions.trackComponents;
                                        if (n._rootSpan && f) {
                                            var d = Object(time.b)(),
                                                span = l[c];
                                            span ? (span.finish(), n._finishRootSpan(d, e)) : t.$once("hook:" + o, (function() {
                                                n._rootSpan && (l[c] = n._rootSpan.startChild({
                                                    description: "Vue <" + r + ">",
                                                    op: c
                                                }))
                                            }))
                                        }
                                    };
                                n._options.tracingOptions.hooks.forEach((function(e) {
                                    var r = H[e];
                                    r ? r.forEach((function(r) {
                                        var c = f ? d.bind(n, r) : h.bind(n, r, e),
                                            l = t.$options[r];
                                        Array.isArray(l) ? t.$options[r] = Object(o.g)([c], l) : t.$options[r] = "function" == typeof l ? [c, l] : [c]
                                    })) : c.a.warn("Unknown hook: " + e)
                                }))
                            }
                        }, c.a.log("You are still using the Vue.js integration, consider moving to @sentry/vue"), this._options = Object(o.a)(Object(o.a)({
                            Vue: Object(f.e)().Vue,
                            attachProps: !0,
                            logErrors: !1,
                            tracing: !1
                        }, e), {
                            tracingOptions: Object(o.a)({
                                hooks: ["mount", "update"],
                                timeout: 2e3,
                                trackComponents: !1
                            }, e.tracingOptions)
                        })
                    }
                    return t.prototype.setupOnce = function(t, e) {
                        this._options.Vue ? (this._attachErrorHandler(e), this._options.tracing && this._startTracing(e)) : c.a.error("Vue integration is missing a Vue instance")
                    }, t.prototype._getComponentName = function(t) {
                        if (!t) return $;
                        if (t.$root === t) return W;
                        if (!t.$options) return $;
                        if (t.$options.name) return t.$options.name;
                        if (t.$options._componentTag) return t.$options._componentTag;
                        if (t.$options.__file) {
                            var e = L(t.$options.__file.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/"), ".vue");
                            return this._componentsCache[e] || (this._componentsCache[e] = e.replace(z, (function(t, e) {
                                return e ? e.toUpperCase() : ""
                            })))
                        }
                        return $
                    }, t.prototype._finishRootSpan = function(t, e) {
                        var n = this;
                        this._rootSpanTimer && clearTimeout(this._rootSpanTimer), this._rootSpanTimer = setTimeout((function() {
                            if (n._tracingActivity) {
                                var r = e().getIntegration(B);
                                r && r.constructor.popActivity(n._tracingActivity)
                            }
                            n._rootSpan && n._rootSpan.finish(t)
                        }), this._options.tracingOptions.timeout)
                    }, t.prototype._startTracing = function(t) {
                        var e = this._applyTracingHooks;
                        this._options.Vue.mixin({
                            beforeCreate: function() {
                                t().getIntegration(B) || t().getIntegration(M) ? e(this, t) : c.a.error("Vue integration has tracing enabled, but Tracing integration is not configured")
                            }
                        })
                    }, t.prototype._attachErrorHandler = function(e) {
                        var n = this,
                            r = this._options.Vue.config.errorHandler;
                        this._options.Vue.config.errorHandler = function(o, f, l) {
                            var d = {};
                            if (f) try {
                                d.componentName = n._getComponentName(f), n._options.attachProps && (d.propsData = f.$options.propsData)
                            } catch (t) {
                                c.a.warn("Unable to extract metadata from Vue component.")
                            }
                            l && (d.lifecycleHook = l), e().getIntegration(t) && setTimeout((function() {
                                e().withScope((function(t) {
                                    t.setContext("vue", d), e().captureException(o)
                                }))
                            })), "function" == typeof r && r.call(n._options.Vue, o, f, l), n._options.logErrors && (n._options.Vue.util && n._options.Vue.util.warn("Error in " + l + ': "' + (o && o.toString()) + '"', f), console.error(o))
                        }
                    }, t.id = "Vue", t
                }()
        }
    }
]);