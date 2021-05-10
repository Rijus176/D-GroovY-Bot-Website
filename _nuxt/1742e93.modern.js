(window.webpackJsonp = window.webpackJsonp || []).push([
    [60, 42], {
        336: function(e, t, o) {
            var content = o(339);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(35).default)("754da97b", content, !0, {
                sourceMap: !1
            })
        },
        338: function(e, t, o) {
            "use strict";
            o(336)
        },
        339: function(e, t, o) {
            var r = o(34)((function(i) {
                return i[1]
            }));
            r.push([e.i, ".circle[data-v-2f76e8f6]{\n  stroke:#fff;\n  fill:none;\n  stroke-width:.35em;\n  stroke-dashoffset:-8.007em;\n  stroke-dasharray:8.007em;\n  -webkit-animation:circle-loading-data-v-2f76e8f6 1.4s linear infinite;\n          animation:circle-loading-data-v-2f76e8f6 1.4s linear infinite;\n  transform:rotate(-90deg);\n  transform-origin:50%;\n  position:relative\n}\n@-webkit-keyframes circle-loading-data-v-2f76e8f6{\n0%{\n    transform:rotate(0);\n    stroke-dashoffset:8.007em\n}\n50%{\n    stroke-dashoffset:0\n}\nto{\n    transform:rotate(1turn);\n    stroke-dashoffset:-8.007em\n}\n}\n@keyframes circle-loading-data-v-2f76e8f6{\n0%{\n    transform:rotate(0);\n    stroke-dashoffset:8.007em\n}\n50%{\n    stroke-dashoffset:0\n}\nto{\n    transform:rotate(1turn);\n    stroke-dashoffset:-8.007em\n}\n}\ncircle[data-v-2f76e8f6]{\n  fill:none;\n  stroke:#fff;\n  stroke-width:2;\n  stroke-dasharray:1,200;\n  stroke-dashoffset:0;\n  stroke-linecap:round;\n  -webkit-animation:dash 1.5s ease-in-out infinite;\n          animation:dash 1.5s ease-in-out infinite\n}", ""]), e.exports = r
        },
        340: function(e, t, o) {
            "use strict";
            o.r(t);
            var r = {
                    props: {
                        type: {
                            type: String,
                            required: !1,
                            default: "circle"
                        }
                    }
                },
                n = (o(338), o(4)),
                component = Object(n.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", ["circle" === e.type ? o("div", [o("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "4em",
                            height: "4em"
                        }
                    }, [o("circle", {
                        staticClass: "circle",
                        attrs: {
                            cx: "2em",
                            cy: "2em",
                            r: "1.5em"
                        }
                    })])]) : e._e(), e._v(" "), "bullets" === e.type ? o("div", [o("div", {
                        staticClass: "flex items-center h-full"
                    }, e._l(3, (function(i) {
                        return o("div", {
                            key: i,
                            staticClass: "bg-white w-4 h-4 mr-2 last:mr-0 rounded-full flex-grow opacity-0 transform scale-0 animate-bullets-loading",
                            style: "animation-delay: " + 225 * (i - 1) + "ms !important"
                        })
                    })), 0)]) : e._e()])
                }), [], !1, null, "2f76e8f6", null);
            t.default = component.exports
        },
        343: function(e) {
            e.exports = JSON.parse('{"a":"https://groovy.bot","b":{"home":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"An incredibly easy to use music bot for Discord that doesn\'t skip on features. Supports YouTube, Spotify, Apple Music and more. Invite Groovy today and start listening to your favorite songs together with your friends!"},"commands":{"short":"Groovy\'s Commands","title":"Groovy\'s Commands - A Highly Detailed Documentation","description":"Find documentation on all the commands and features Groovy offers as well as check which commands require which permissions!"},"premium":{"short":"Groovy Premium","title":"Groovy Premium - Spice Up Your Discord Server","description":"Unlock neat and powerful features like volume control and audio effects for Groovy in order to enhance your Discord server!"},"guilds":{"short":"Your Discord Servers","title":"Groovy Dashboard - Manage Your Discord Servers","description":"Manage and configure your Discord servers from anywhere in the world at one place!"},"guild":{"short":"Your Discord Server","title":"Configure Your Discord Server","description":"Configure your Discord server from anywhere in the world! Manage your premium upgrade if you\'ve applied one!"},"invite":{"short":"Invite Groovy","title":"Invite Groovy - Start Listening Today","description":"Invite Groovy to your Discord server today and start listening to your favorite songs together with your friends on the best music bot!"},"login":{"short":"Groovy Login","title":"Groovy Login - Manage Your Subscription And Upgrades","description":"Log in to Groovy\'s dashboard and manage all of your Discord server at one place! You\'ll also be able to subscribe to our premium plans and add or remove upgrades!"}}}')
        },
        379: function(e) {
            e.exports = JSON.parse('[{"id":"234395307759108106","name":"prod","display":"Groovy","color":"#79a5fa","invitable":true},{"id":"368424172730187786","name":"prod-2","display":"Groovy 2","color":"#7afa83","invitable":true,"premium":true},{"id":"287378523843198976","name":"prod-3","display":"Groovy 3","color":"#f9f97a","invitable":true,"premium":true},{"id":"582362839864573958","name":"staging","display":"Groovy Beta","color":"#faba7a"},{"id":"505914069132378112","name":"local","display":"Groovy Dev"},{"id":"234388536382586883","name":"steve","display":"Steve"}]')
        },
        440: function(e, t, o) {
            "use strict";
            o.r(t);
            o(5);
            var r = o(2),
                n = o(3),
                d = o(12),
                l = o(379),
                meta = o(343);

            function c(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(object);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }
            var {
                short: f,
                title: title,
                description: m
            } = meta.b.invite, h = {
                data() {
                    return {
                        bot: l.find((e => e.name === (this.$route.query.bot || "prod"))),
                        id: this.$route.query.guildId,
                        exists: this.$route.query.exists,
                        loggedIn: this.$auth.loggedIn
                    }
                },
                head() {
                    return {
                        title: title,
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: m
                        }, {
                            hid: "og:title",
                            property: "og:title",
                            content: title
                        }, {
                            hid: "og:site_name",
                            property: "og:site_name",
                            content: f
                        }, {
                            hid: "og:url",
                            property: "og:url",
                            content: "".concat(meta.a).concat(this.$route.path)
                        }, {
                            hid: "og:description",
                            property: "og:description",
                            content: m
                        }],
                        link: [{
                            rel: "canonical",
                            href: "".concat(meta.a).concat(this.$route.path)
                        }]
                    }
                },
                computed: function(e) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? c(Object(source), !0).forEach((function(t) {
                            Object(n.a)(e, t, source[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                        }))
                    }
                    return e
                }({}, Object(d.b)("data/data", ["guilds"])),
                mounted() {
                    var e = this;
                    return Object(r.a)((function*() {
                        if (e.id && e.loggedIn) {
                            try {
                                yield e.$util.executions.add([{
                                    root: "data/data",
                                    actions: ["getGuilds"]
                                }])
                            } catch (t) {
                                e.$util.log(["e", t.message])
                            }
                            if (!e.guilds.find((t => t.id === e.id))) return e.$nuxt.error({
                                statusCode: 403,
                                message: "You cannot access this page since you are not a member of this server."
                            });
                            if (void 0 === e.exists) {
                                if ((yield e.$util.guilds.isInvited(e.id)) && "prod" === e.bot.name) return e.$router.push("/guilds/".concat(e.id))
                            } else if ("true" === e.exists && "prod" === e.bot.name) return e.$router.push("/guilds/".concat(e.id));
                            var t = e.guilds.find((t => t.id === e.id)).permissions;
                            if (8 != (8 & t) && 32 != (32 & t)) return e.$util.modal.popup((() => o.e(5).then(o.bind(null, 456))))
                        }
                        e.id ? e.$util.url.invite(e.bot.id, e.id) : e.$util.url.invite(e.bot.id)
                    }))()
                }
            }, v = o(4), component = Object(v.a)(h, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", [t("div", {
                    staticClass: "root-centered"
                }, [t("loading")], 1)])
            }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                Loading: o(340).default
            })
        }
    }
]);