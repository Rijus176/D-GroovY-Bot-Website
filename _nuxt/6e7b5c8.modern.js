(window.webpackJsonp = window.webpackJsonp || []).push([
    [54, 42], {
        336: function(t, e, n) {
            var content = n(339);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(35).default)("754da97b", content, !0, {
                sourceMap: !1
            })
        },
        338: function(t, e, n) {
            "use strict";
            n(336)
        },
        339: function(t, e, n) {
            var r = n(34)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".circle[data-v-2f76e8f6]{\n  stroke:#fff;\n  fill:none;\n  stroke-width:.35em;\n  stroke-dashoffset:-8.007em;\n  stroke-dasharray:8.007em;\n  -webkit-animation:circle-loading-data-v-2f76e8f6 1.4s linear infinite;\n          animation:circle-loading-data-v-2f76e8f6 1.4s linear infinite;\n  transform:rotate(-90deg);\n  transform-origin:50%;\n  position:relative\n}\n@-webkit-keyframes circle-loading-data-v-2f76e8f6{\n0%{\n    transform:rotate(0);\n    stroke-dashoffset:8.007em\n}\n50%{\n    stroke-dashoffset:0\n}\nto{\n    transform:rotate(1turn);\n    stroke-dashoffset:-8.007em\n}\n}\n@keyframes circle-loading-data-v-2f76e8f6{\n0%{\n    transform:rotate(0);\n    stroke-dashoffset:8.007em\n}\n50%{\n    stroke-dashoffset:0\n}\nto{\n    transform:rotate(1turn);\n    stroke-dashoffset:-8.007em\n}\n}\ncircle[data-v-2f76e8f6]{\n  fill:none;\n  stroke:#fff;\n  stroke-width:2;\n  stroke-dasharray:1,200;\n  stroke-dashoffset:0;\n  stroke-linecap:round;\n  -webkit-animation:dash 1.5s ease-in-out infinite;\n          animation:dash 1.5s ease-in-out infinite\n}", ""]), t.exports = r
        },
        340: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: {
                        type: {
                            type: String,
                            required: !1,
                            default: "circle"
                        }
                    }
                },
                o = (n(338), n(4)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", ["circle" === t.type ? n("div", [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "4em",
                            height: "4em"
                        }
                    }, [n("circle", {
                        staticClass: "circle",
                        attrs: {
                            cx: "2em",
                            cy: "2em",
                            r: "1.5em"
                        }
                    })])]) : t._e(), t._v(" "), "bullets" === t.type ? n("div", [n("div", {
                        staticClass: "flex items-center h-full"
                    }, t._l(3, (function(i) {
                        return n("div", {
                            key: i,
                            staticClass: "bg-white w-4 h-4 mr-2 last:mr-0 rounded-full flex-grow opacity-0 transform scale-0 animate-bullets-loading",
                            style: "animation-delay: " + 225 * (i - 1) + "ms !important"
                        })
                    })), 0)]) : t._e()])
                }), [], !1, null, "2f76e8f6", null);
            e.default = component.exports
        },
        416: function(t) {
            t.exports = JSON.parse('[{"id":"support","url":"https://discord.gg/rsGjn2X"},{"id":"community","url":"https://discord.gg/rsGjn2X"},{"id":"twitter","url":"https://twitter.com/groovybot"}]')
        },
        447: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(416),
                o = {
                    mounted() {
                        var t = r.find((t => t.id === this.$route.params.redirect));
                        t ? this.$util.url.redirect({
                            url: t.url
                        }) : this.$nuxt.error({
                            statusCode: 404,
                            message: "This page was not found!"
                        })
                    }
                },
                l = n(4),
                component = Object(l.a)(o, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("div", {
                        staticClass: "root-centered"
                    }, [e("loading")], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Loading: n(340).default
            })
        }
    }
]);