(window.webpackJsonp = window.webpackJsonp || []).push([
    [59, 24, 25, 26, 27, 41], {
        343: function(t) {
            t.exports = JSON.parse('{"a":"https://groovy.bot","b":{"home":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"An incredibly easy to use music bot for Discord that doesn\'t skip on features. Supports YouTube, Spotify, Apple Music and more. Invite Groovy today and start listening to your favorite songs together with your friends!"},"commands":{"short":"Groovy\'s Commands","title":"Groovy\'s Commands - A Highly Detailed Documentation","description":"Find documentation on all the commands and features Groovy offers as well as check which commands require which permissions!"},"premium":{"short":"Groovy Premium","title":"Groovy Premium - Spice Up Your Discord Server","description":"Unlock neat and powerful features like volume control and audio effects for Groovy in order to enhance your Discord server!"},"guilds":{"short":"Your Discord Servers","title":"Groovy Dashboard - Manage Your Discord Servers","description":"Manage and configure your Discord servers from anywhere in the world at one place!"},"guild":{"short":"Your Discord Server","title":"Configure Your Discord Server","description":"Configure your Discord server from anywhere in the world! Manage your premium upgrade if you\'ve applied one!"},"invite":{"short":"Invite Groovy","title":"Invite Groovy - Start Listening Today","description":"Invite Groovy to your Discord server today and start listening to your favorite songs together with your friends on the best music bot!"},"login":{"short":"Groovy Login","title":"Groovy Login - Manage Your Subscription And Upgrades","description":"Log in to Groovy\'s dashboard and manage all of your Discord server at one place! You\'ll also be able to subscribe to our premium plans and add or remove upgrades!"}}}')
        },
        346: function(t, e, n) {
            var content = n(366);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(35).default)("2a9bfaf2", content, !0, {
                sourceMap: !1
            })
        },
        359: function(t, e, n) {
            var map = {
                "./enjoy-instant-support.svg": 360,
                "./get-started-in-seconds.svg": 361,
                "./listen-to-music-with-friends.svg": 362,
                "./never-miss-a-beat.svg": 363
            };

            function r(t) {
                var e = o(t);
                return n(e)
            }

            function o(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = o, t.exports = r, r.id = 359
        },
        360: function(t, e, n) {
            t.exports = n.p + "img/7f258b9.svg"
        },
        361: function(t, e, n) {
            t.exports = n.p + "img/af960dc.svg"
        },
        362: function(t, e, n) {
            t.exports = n.p + "img/4f546d7.svg"
        },
        363: function(t, e, n) {
            t.exports = n.p + "img/c256758.svg"
        },
        364: function(t, e, n) {
            var map = {
                "./EnjoyInstantSupportBlob.vue": [386, 1],
                "./GetStartedInSecondsBlob.vue": [387, 2],
                "./ListenToMusicWithFriendsBlob.vue": [388, 11],
                "./NeverMissABeatBlob.vue": [389, 12]
            };

            function r(t) {
                if (!n.o(map, t)) return Promise.resolve().then((function() {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }));
                var e = map[t],
                    r = e[0];
                return n.e(e[1]).then((function() {
                    return n(r)
                }))
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.id = 364, t.exports = r
        },
        365: function(t, e, n) {
            "use strict";
            n(346)
        },
        366: function(t, e, n) {
            var r = n(34)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".feature:first-child .feature-wrapper[data-v-1cb05c06]{\n  padding-top:8rem!important\n}\n.feature:last-child .feature-wrapper[data-v-1cb05c06]{\n  margin-bottom:4rem\n}\n@media (min-width:640px){\n.feature:last-child .feature-wrapper[data-v-1cb05c06]{\n    margin-bottom:10rem\n}\n}\n.feature:nth-child(odd) .feature-wrapper[data-v-1cb05c06]{\n  --tw-bg-opacity:1;\n  background-color:rgba(42, 44, 48, var(--tw-bg-opacity))\n}\n.wave path[data-v-1cb05c06]{\n  --tw-text-opacity:1;\n  color:rgba(42, 44, 48, var(--tw-text-opacity));\n  fill:currentColor\n}\n.feature:first-child .upper[data-v-1cb05c06], .feature:nth-child(2n) .wave[data-v-1cb05c06]{\n  display:none\n}\n@media (min-width:640px){\n.image-flip:nth-child(2n) div div .illustration[data-v-1cb05c06]{\n    order:2\n}\n}", ""]), t.exports = r
        },
        367: function(t, e, n) {
            var content = n(385);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(35).default)("8547d7d4", content, !0, {
                sourceMap: !1
            })
        },
        376: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    props: {
                        value: {
                            type: String,
                            default: null
                        },
                        title: {
                            type: String,
                            default: null
                        },
                        description: {
                            type: String,
                            default: null
                        },
                        illustration: {
                            type: String,
                            default: null
                        },
                        blob: {
                            type: String,
                            default: null
                        }
                    },
                    computed: {
                        component() {
                            return () => n(364)("./".concat(this.blob, ".vue"))
                        }
                    },
                    mounted() {
                        this.$ScrollTrigger.create({
                            trigger: this.$refs.feature,
                            animation: this.$gsap.fromTo(this.$refs.feature, {
                                autoAlpha: 0,
                                y: 100
                            }, {
                                duration: 1,
                                autoAlpha: 1,
                                y: 0
                            }),
                            once: !0
                        })
                    }
                },
                o = (n(365), n(4)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex-col items-center w-full image-flip feature"
                    }, [r("svg", {
                        staticClass: "wave upper",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1440 320"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-opacity": "1",
                            d: "M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        }
                    })]), t._v(" "), r("div", {
                        staticClass: "flex flex-col items-center w-full px-8 py-8 lg:py-0 relative feature-wrapper"
                    }, [r("div", {
                        ref: "feature",
                        staticClass: "grid gap-8 sm:gap-16 xl:gap-24 sm:grid-cols-2 max-w-screen-xl"
                    }, [r("div", {
                        staticClass: "illustration flex items-center"
                    }, [r("img", {
                        staticClass: "max-h-96",
                        attrs: {
                            src: n(359)("./" + t.illustration + ".svg"),
                            alt: t.title,
                            loading: "lazy"
                        }
                    })]), t._v(" "), r("div", {
                        staticClass: "flex flex-col sm:justify-center mt-12 sm:mt-0 relative"
                    }, [r("p", {
                        staticClass: "bg-blue-base bg-opacity-75 transition-colors duration-150 hover:bg-opacity-90 uppercase select-none text-lg text-gray-lightest px-3 py-1 rounded shadow self-start relative z-10"
                    }, [t._v("\n          " + t._s(t.value) + "\n        ")]), t._v(" "), r("h3", {
                        staticClass: "text-4xl lg:text-5xl leading-tight font-bold mt-6 mb-4 lg:mb-8 relative z-10"
                    }, [t._v("\n          " + t._s(t.title) + "\n        ")]), t._v(" "), r("p", {
                        staticClass: "text-xl lg:text-2xl relative z-10"
                    }, [t._v("\n          " + t._s(t.description) + "\n        ")]), t._v(" "), r(t.component, {
                        tag: "component",
                        staticClass: "absolute h-80 md:h-96 transform scale-100 md:scale-110 lg:scale-125 translate-y-4 md:translate-y-0 -translate-x-4 md:translate-x-4 lg:translate-x-12 text-blue-base fill-current opacity-10 blob"
                    })], 1)])]), t._v(" "), r("svg", {
                        staticClass: "wave",
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1440 320"
                        }
                    }, [r("path", {
                        attrs: {
                            "fill-opacity": "1",
                            d: "M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                        }
                    })])])
                }), [], !1, null, "1cb05c06", null);
            e.default = component.exports
        },
        383: function(t) {
            t.exports = JSON.parse('[{"value":"intuitive","title":"Get started in seconds","description":"Groovy is the quickest way to turn your Discord server into the big stage. Whether you\'re an upcoming artist, a super star, or a hobby DJ: Sharing music through Discord has never been easier.","illustration":"get-started-in-seconds","blob":"GetStartedInSecondsBlob"},{"value":"social","title":"Listen to music with your friends","description":"What better way is there to enjoy hanging out with friends than music?! With Groovy, you can turn your Discord server into a listening party everyone can contribute to.","illustration":"listen-to-music-with-friends","blob":"ListenToMusicWithFriendsBlob"},{"value":"24/7 support","title":"Enjoy instant support","description":"Something not right? Don\'t worry, we\'ve got you covered. Our support team is always available directly on Discord, or alternatively via email. No automated responses or complicated help desks.","illustration":"enjoy-instant-support","blob":"EnjoyInstantSupportBlob"},{"value":"stable","title":"Never miss a beat","description":"Behind the scenes we\'re working around the clock to make sure you can seamlessly enjoy your music experience. Groovy runs on state-of-the-art tech to ensure minimal downtime, low latency, and no disruptions.","illustration":"never-miss-a-beat","blob":"NeverMissABeatBlob"}]')
        },
        384: function(t, e, n) {
            "use strict";
            n(367)
        },
        385: function(t, e, n) {
            var r = n(34)((function(i) {
                return i[1]
            }));
            r.push([t.i, ".moving[data-v-32188b4e]{\n  transform:translateX(-500vw);\n  -webkit-animation:moving-mobile-data-v-32188b4e 5s linear infinite;\n          animation:moving-mobile-data-v-32188b4e 5s linear infinite\n}\n.rolling[data-v-32188b4e]{\n  -webkit-animation:rolling-data-v-32188b4e 5s linear infinite;\n          animation:rolling-data-v-32188b4e 5s linear infinite\n}\n@-webkit-keyframes moving-mobile-data-v-32188b4e{\n0%{\n    transform:translateX(-500vw)\n}\nto{\n    transform:translateX(100vw)\n}\n}\n@keyframes moving-mobile-data-v-32188b4e{\n0%{\n    transform:translateX(-500vw)\n}\nto{\n    transform:translateX(100vw)\n}\n}\n@-webkit-keyframes moving-data-v-32188b4e{\n0%{\n    transform:translateX(-150vw)\n}\nto{\n    transform:translateX(100vw)\n}\n}\n@keyframes moving-data-v-32188b4e{\n0%{\n    transform:translateX(-150vw)\n}\nto{\n    transform:translateX(100vw)\n}\n}\n@-webkit-keyframes rolling-data-v-32188b4e{\n0%{\n    transform:rotate(0)\n}\nto{\n    transform:rotate(5turn)\n}\n}\n@keyframes rolling-data-v-32188b4e{\n0%{\n    transform:rotate(0)\n}\nto{\n    transform:rotate(5turn)\n}\n}\n@media (min-width:768px){\n.moving[data-v-32188b4e]{\n    transform:translateX(-150vw);\n    -webkit-animation:moving-data-v-32188b4e 5s linear infinite;\n            animation:moving-data-v-32188b4e 5s linear infinite\n}\n}", ""]), t.exports = r
        },
        405: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(383),
                o = {
                    data: () => ({
                        features: r
                    })
                },
                l = n(4),
                component = Object(l.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex flex-col w-full items-center"
                    }, t._l(t.features, (function(e) {
                        return n("feature", t._b({
                            key: e.title
                        }, "feature", e, !1))
                    })), 1)
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Feature: n(376).default
            })
        },
        406: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = {
                    data: () => ({
                        groovies: [{
                            height: "h-28",
                            delay: "0.25s"
                        }, {
                            height: "h-16",
                            delay: "1s"
                        }, {
                            height: "h-24",
                            delay: "1.5s"
                        }, {
                            height: "h-12",
                            delay: "2.25s"
                        }, {
                            height: "h-20",
                            delay: "3.125s"
                        }, {
                            height: "h-28",
                            delay: "3.75s"
                        }, {
                            height: "h-16",
                            delay: "4.125s"
                        }, {
                            height: "h-12",
                            delay: "4.75s"
                        }]
                    })
                },
                o = (n(384), n(4)),
                component = Object(o.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "content relative justify-end h-48 w-full"
                    }, t._l(t.groovies, (function(t, e) {
                        return r("div", {
                            key: "groovy-" + e,
                            staticClass: "opacity-75"
                        }, [r("div", {
                            staticClass: "moving absolute bottom-0",
                            style: "animation-delay: " + t.delay + " !important"
                        }, [r("img", {
                            class: "rolling " + t.height,
                            style: "animation-delay: " + t.delay + " !important",
                            attrs: {
                                src: n(164),
                                alt: "Groovy's logo",
                                loading: "lazy"
                            }
                        })])])
                    })), 0)
                }), [], !1, null, "32188b4e", null);
            e.default = component.exports
        },
        409: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(4),
                component = Object(r.a)({}, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "max-w-full"
                    }, [n("div", {
                        staticClass: "flex flex-col"
                    }, [t._m(0), t._v(" "), n("div", {
                        staticClass: "flex flex-col lg:flex-row items-center lg:justify-center mt-8 lg:mt-10 px-8 mb-8 lg:mb-10"
                    }, [n("nuxt-link", {
                        staticClass: "btn btn-primary text-center text-lg lg:text-xl font-bold rounded-full py-2 px-4 lg:py-3 lg:px-6 w-64 lg:mx-2",
                        attrs: {
                            to: "/invite"
                        }
                    }, [t._v("\n        Add to Discord\n      ")]), t._v(" "), n("nuxt-link", {
                        staticClass: "btn text-center text-lg lg:text-xl font-bold bg-gray-lightest text-gray-dark rounded-full py-2 px-4 lg:py-3 lg:px-6 w-64 mt-4 lg:mt-0 lg:mx-2",
                        attrs: {
                            to: "/commands"
                        }
                    }, [t._v("\n        View Commands\n      ")])], 1)])])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "flex flex-col items-center px-8"
                    }, [n("h1", {
                        staticClass: "text-center text-4xl lg:text-6xl font-bold"
                    }, [t._v("\n        The best music bot"), n("br"), t._v("for Discord.\n      ")]), t._v(" "), n("h2", {
                        staticClass: "text-center text-2xl lg:text-3xl opacity-75 max-w-screen-md mt-6 lg:mt-8"
                    }, [t._v("\n        Groovy is the easiest way"), n("br"), t._v("to play music in your server.\n      ")])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        410: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(4),
                component = Object(r.a)({}, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "content px-6"
                    }, [n("div", {
                        staticClass: "flex flex-col items-center"
                    }, [n("h3", {
                        staticClass: "text-center text-4xl lg:text-6xl max-w-screen-md font-bold"
                    }, [t._v("\n      Ready to start using Groovy?\n    ")]), t._v(" "), n("p", {
                        staticClass: "text-center text-2xl lg:text-3xl opacity-75 max-w-screen-md mt-8"
                    }, [t._v("\n      Add Groovy to your Discord server today and listen to all of your favorite songs together with your friends!\n    ")]), t._v(" "), n("nuxt-link", {
                        staticClass: "btn btn-primary text-center text-lg lg:text-xl font-bold rounded-full py-2 px-4 lg:py-3 lg:px-6 w-64 mt-8",
                        attrs: {
                            to: "/invite"
                        }
                    }, [t._v("\n      Add to Discord\n    ")])], 1)])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        415: function(t, e, n) {
            t.exports = n.p + "img/7b5cd20.svg"
        },
        446: function(t, e, n) {
            "use strict";
            n.r(e);
            var meta = n(343),
                {
                    short: r,
                    title: title,
                    description: o
                } = meta.b.home,
                l = {
                    head() {
                        return {
                            title: title,
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: o
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: title
                            }, {
                                hid: "og:site_name",
                                property: "og:site_name",
                                content: r
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "".concat(meta.a).concat(this.$route.path)
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: o
                            }],
                            link: [{
                                rel: "canonical",
                                href: "".concat(meta.a).concat(this.$route.path)
                            }]
                        }
                    }
                },
                c = n(4),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("div", {
                        staticClass: "root overflow-hidden"
                    }, [r("div", {
                        staticClass: "wrapper bg-gray-base bg-center bg-cover bg-clip-border",
                        style: "background-image: url(" + n(415) + ")"
                    }, [r("div", {
                        staticClass: "wrapper pt-40 lg:pt-52 pb-16"
                    }, [r("intro")], 1)]), t._v(" "), r("div", {
                        staticClass: "wrapper"
                    }, [r("div", {
                        staticClass: "wrapper"
                    }, [r("features")], 1)]), t._v(" "), r("div", {
                        staticClass: "wrapper"
                    }, [r("div", {
                        staticClass: "wrapper bg-gray-dark"
                    }, [r("div", {
                        staticClass: "wrapper"
                    }, [r("divider")], 1)])]), t._v(" "), r("div", {
                        staticClass: "wrapper bg-gray-dark-mid"
                    }, [r("div", {
                        staticClass: "wrapper py-16 lg:py-24"
                    }, [r("cta")], 1)])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Intro: n(409).default,
                Features: n(405).default,
                Divider: n(406).default,
                Cta: n(410).default
            })
        }
    }
]);