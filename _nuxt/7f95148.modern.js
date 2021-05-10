(window.webpackJsonp = window.webpackJsonp || []).push([
    [63, 45, 46, 47, 48, 49, 50, 51, 53], {
        343: function(t) {
            t.exports = JSON.parse('{"a":"https://groovy.bot","b":{"home":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"An incredibly easy to use music bot for Discord that doesn\'t skip on features. Supports YouTube, Spotify, Apple Music and more. Invite Groovy today and start listening to your favorite songs together with your friends!"},"commands":{"short":"Groovy\'s Commands","title":"Groovy\'s Commands - A Highly Detailed Documentation","description":"Find documentation on all the commands and features Groovy offers as well as check which commands require which permissions!"},"premium":{"short":"Groovy Premium","title":"Groovy Premium - Spice Up Your Discord Server","description":"Unlock neat and powerful features like volume control and audio effects for Groovy in order to enhance your Discord server!"},"guilds":{"short":"Your Discord Servers","title":"Groovy Dashboard - Manage Your Discord Servers","description":"Manage and configure your Discord servers from anywhere in the world at one place!"},"guild":{"short":"Your Discord Server","title":"Configure Your Discord Server","description":"Configure your Discord server from anywhere in the world! Manage your premium upgrade if you\'ve applied one!"},"invite":{"short":"Invite Groovy","title":"Invite Groovy - Start Listening Today","description":"Invite Groovy to your Discord server today and start listening to your favorite songs together with your friends on the best music bot!"},"login":{"short":"Groovy Login","title":"Groovy Login - Manage Your Subscription And Upgrades","description":"Log in to Groovy\'s dashboard and manage all of your Discord server at one place! You\'ll also be able to subscribe to our premium plans and add or remove upgrades!"}}}')
        },
        348: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    props: {
                        active: {
                            type: Boolean,
                            required: !0,
                            default: !1
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        displayState: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    methods: {
                        toggle() {
                            this.disabled || this.$emit("toggle")
                        }
                    }
                },
                n = r(4),
                component = Object(n.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("div", {
                        class: "toggle " + (t.active ? t.disabled ? "bg-gray-lighter" : t.displayState ? "bg-blue-base" : "bg-gray-light" : t.disabled ? "bg-gray-base" : "bg-gray-light") + " " + (t.disabled ? "cursor-not-allowed" : "cursor-pointer"),
                        on: {
                            click: function(e) {
                                return t.toggle()
                            }
                        }
                    }, [r("div", {
                        class: (t.active ? "toggle-knob-active" : "toggle-knob") + " transform transition-transform duration-150 ease-in-out " + (t.disabled ? "bg-gray-light cursor-not-allowed" : "bg-gray-dark cursor-pointer")
                    })])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        351: function(t, e, r) {
            var map = {
                "./24-7.svg": 352,
                "./audio-effects.svg": 353,
                "./autoplay.svg": 354,
                "./more-groovies.svg": 355,
                "./saved-queues.svg": 356,
                "./volume-control.svg": 357
            };

            function o(t) {
                var e = n(t);
                return r(e)
            }

            function n(t) {
                if (!r.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            o.keys = function() {
                return Object.keys(map)
            }, o.resolve = n, t.exports = o, o.id = 351
        },
        352: function(t, e, r) {
            t.exports = r.p + "img/afc4815.svg"
        },
        353: function(t, e, r) {
            t.exports = r.p + "img/6ec99fc.svg"
        },
        354: function(t, e, r) {
            t.exports = r.p + "img/d5ef0c5.svg"
        },
        355: function(t, e, r) {
            t.exports = r.p + "img/c97e74e.svg"
        },
        356: function(t, e, r) {
            t.exports = r.p + "img/ffe55ae.svg"
        },
        357: function(t, e, r) {
            t.exports = r.p + "img/711db40.svg"
        },
        370: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    props: {
                        loaded: {
                            type: Boolean
                        },
                        quantity: {
                            type: Number,
                            required: !0,
                            default: 3
                        },
                        period: {
                            type: String,
                            required: !0,
                            default: "monthly"
                        },
                        subscription: {
                            type: Object,
                            default: null
                        }
                    },
                    data: () => ({
                        mounted: !1
                    }),
                    computed: {
                        cssClasses: () => "text-2xl text-center px-8 py-2 rounded cursor-pointer",
                        hasNoSubscription() {
                            return !this.subscription
                        },
                        hasActiveSubscription() {
                            return this.$util.subscription.isActive(this.subscription)
                        },
                        hasNonRenewingSubscription() {
                            return this.$util.subscription.isNonRenewing(this.subscription)
                        },
                        hasCancelledSubscription() {
                            return this.$util.subscription.isCancelled(this.subscription)
                        },
                        isCurrentPlanSelected() {
                            return this.isSameQuantity && this.isSamePeriod
                        },
                        isHigherPlanSelected() {
                            return this.isHigherQuantity && this.isSamePeriod
                        },
                        isLowerPlanSelected() {
                            return this.isLowerQuantity && this.isSamePeriod
                        },
                        isDifferentPeriodPlanSelected() {
                            return !this.isSamePeriod
                        },
                        isSameQuantity() {
                            return this.subscription.planQuantity === this.quantity
                        },
                        isHigherQuantity() {
                            return this.subscription.planQuantity <= this.quantity
                        },
                        isLowerQuantity() {
                            return this.subscription.planQuantity >= this.quantity
                        },
                        isSamePeriod() {
                            return "".concat(this.subscription.billingPeriodUnit, "ly") === this.period
                        }
                    },
                    mounted() {
                        this.mounted = !0
                    }
                },
                n = r(4),
                component = Object(n.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return !t.loaded && t.mounted ? r("a", {
                        class: t.cssClasses + " btn cursor-not-allowed bg-purple-average"
                    }, [t._v("\n  Subscribe\n")]) : t.hasCancelledSubscription || t.hasNoSubscription ? r("a", {
                        class: t.cssClasses + " btn bg-purple-average",
                        on: {
                            click: function(e) {
                                return t.$emit("subscribe")
                            }
                        }
                    }, [t._v("\n  Subscribe\n")]) : t.hasNonRenewingSubscription && t.isCurrentPlanSelected ? r("a", {
                        class: t.cssClasses + " btn bg-blue-dark",
                        on: {
                            click: function(e) {
                                return t.$emit("reactivate")
                            }
                        }
                    }, [t._v("\n  Reactivate\n")]) : t.isCurrentPlanSelected ? r("a", {
                        class: t.cssClasses + " btn bg-gray-light",
                        on: {
                            click: function(e) {
                                return t.$emit("cancel")
                            }
                        }
                    }, [t._v("\n  Cancel\n")]) : t.isHigherPlanSelected ? r("a", {
                        class: t.cssClasses + " btn bg-purple-average",
                        on: {
                            click: function(e) {
                                return t.$emit("upgrade")
                            }
                        }
                    }, [t._v("\n  Upgrade\n")]) : t.isLowerPlanSelected ? r("a", {
                        class: t.cssClasses + " btn bg-purple-average",
                        on: {
                            click: function(e) {
                                return t.$emit("downgrade")
                            }
                        }
                    }, [t._v("\n  Downgrade\n")]) : t.isDifferentPeriodPlanSelected ? r("a", {
                        class: t.cssClasses + " btn bg-blue-base",
                        on: {
                            click: function(e) {
                                return t.$emit("change")
                            }
                        }
                    }, [t._v("\n  Switch\n")]) : t._e()
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        371: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    props: {
                        id: {
                            type: String,
                            default: null
                        },
                        illustration: {
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
                n = r(4),
                component = Object(n.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "flex flex-col items-center bg-gray-darker p-8 lg:p-12 rounded shadow transform duration-150 hover:-translate-y-0.5 overflow-hidden"
                    }, [o("div", {
                        ref: "feature",
                        staticClass: "flex flex-col items-center"
                    }, [o("img", {
                        staticClass: "h-auto sm:h-64 p-6 w-full sm:w-auto",
                        attrs: {
                            src: r(351)("./" + t.illustration + ".svg"),
                            alt: t.title,
                            loading: "lazy"
                        }
                    }), t._v(" "), o("div", {
                        staticClass: "flex flex-col items-center mt-4"
                    }, [o("h3", {
                        staticClass: "text-3xl lg:text-5xl font-bold text-center"
                    }, [t._v("\n        " + t._s(t.title) + "\n      ")]), t._v(" "), o("p", {
                        staticClass: "text-center text-lg lg:text-xl mt-2 opacity-75"
                    }, [t._v("\n        " + t._s(t.description) + "\n      ")])])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        372: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = {
                    props: {
                        title: {
                            type: String,
                            required: !0,
                            default: "N/A"
                        },
                        description: {
                            type: String,
                            required: !0,
                            default: "N/A"
                        },
                        init: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        }
                    },
                    data: () => ({
                        active: !1
                    }),
                    computed: {
                        maxActiveHeight() {
                            return this.$refs.content.scrollHeight
                        }
                    },
                    mounted() {
                        this.active = this.init
                    },
                    methods: {
                        toggle() {
                            this.active = !this.active
                        }
                    }
                },
                n = r(4),
                component = Object(n.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex flex-col bg-gray-dark max-w-screen-xl p-4 rounded shadow-md overflow-hidden cursor-pointer mb-4 last:mb-0 w-full",
                        on: {
                            click: function(e) {
                                return t.toggle()
                            }
                        }
                    }, [r("div", {
                        ref: "overview",
                        staticClass: "flex items-center"
                    }, [r("fa", {
                        class: (t.active ? "transform origin-center rotate-90 transition duration-200 ease-in-out" : "transform origin-center rotate-0 transition duration-200 ease-in-out") + " text-lg xl:text-xl w-4 h-4 xl:w-6 xl:h-6",
                        attrs: {
                            icon: "angle-right"
                        }
                    }), t._v(" "), r("p", {
                        staticClass: "text-xl lg:text-2xl font-bold ml-2"
                    }, [t._v("\n      " + t._s(t.title) + "\n    ")])], 1), t._v(" "), r("div", {
                        ref: "content",
                        style: "transition: max-height 200ms ease-in-out; " + (t.active ? "max-height: " + t.maxActiveHeight + "px;" : "max-height: 0;")
                    }, [r("p", {
                        staticClass: "mt-4 lg:text-xl"
                    }, [t._v("\n      " + t._s(t.description) + "\n    ")])])])
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        380: function(t) {
            t.exports = JSON.parse("[1,3,10]")
        },
        381: function(t) {
            t.exports = JSON.parse('[{"id":"volume","illustration":"volume-control","title":"Volume Control","description":"Gain full control over the bot\'s output volume. Make Groovy play quieter for background listening, or boost the sound for softer songs."},{"id":"effects","illustration":"audio-effects","title":"Audio Effects","description":"Change the feel of the songs using bass boost, vaporwave & nightcore modes, or more granular speed and pitch control. This one is guaranteed to impress your friends."},{"id":"247","illustration":"24-7","title":"24/7","description":"Allows you to force Groovy to stay in a voice channel indefinitely, for example to play a radio station."},{"id":"autoplay","illustration":"autoplay","title":"AutoPlay","description":"Forget about having to queue songs with AutoPlay! Groovy will automatically look at your listening history to pick the best songs to play next."},{"id":"playlists","illustration":"saved-queues","title":"Saved Queues","description":"Lets you save the current queue so that you can listen to it later or share it with your friends."},{"id":"groovies","illustration":"more-groovies","title":"More Groovies","description":"Want more than one Groovy? You can have up to three playing in different voice channels at the same time."}]')
        },
        382: function(t) {
            t.exports = JSON.parse('[{"content":"What is Groovy Premium?","answer":"Groovy Premium is a subscription that takes your music experience with Groovy to the next level. It includes volume control, audio effects, playlists, 24/7-mode, parallel playback with Groovy 2 & 3, and more to come."},{"content":"How do I get Groovy Premium?","answer":"To obtain Groovy Premium, you simply have to select your preferred tier at the top of this page and complete the checkout process. You\'ll then be guided on how to upgrade your first Discord server."},{"content":"Why are there different premium tiers?","answer":"In order to provide maximum flexibility Groovy offers 3 different tiers which you can pay monthly for. These consist of either 1, 3, or 10 upgrade slots. These slots are the limit for your upgraded servers. But don’t worry, you can transfer upgrades easily between servers."},{"content":"How do I transfer a server upgrade?","answer":"In order to transfer a server upgrade you first have to downgrade one of your already upgraded servers (keep in mind, there is a cooldown of 3 days after initially upgrading a server!). Once that\'s done, you\'ll have freed your upgrade slot, and you can just go ahead and upgrade another Discord server."},{"content":"How do I change my subscription?","answer":"If you want to change the tier you’re subscribed to, you can just select another one at the top of this website and proceed with the checkout. The rest happens automatically."},{"content":"How do I cancel my subscription?","answer":"In order to cancel your actively running subscription just press the “Cancel” button at the top of this page. We’d love to hear from you if there is anything that could be done better!"},{"content":"What is a server upgrade?","answer":"A server upgrade slot is basically a one-server ticket for premium. For each upgrade slot you purchase, you can concurrently upgrade one server to Groovy Premium."},{"content":"What does my subscription include?","answer":"Subscribing to a Groovy Premium tier gives you access to a plethora of features, such as volume control, audio effects, parallel playback (using Groovy 2 & 3), or 24/7 streaming (you can find all of the premium commands on the commands page), for all servers you have upgraded."},{"content":"What payment methods can I use?","answer":"Possible payment methods are either a Credit/Debit card, PayPal, Apple Pay or Google Pay."},{"content":"Is my transaction secure?","answer":"All transactions made through our billing provider are secured by the latest SSL/TLS standards, meaning all your data is encrypted and can’t be read by someone else. Groovy does not store any of your payment method information. Additionally, our billing service provider is PCI DSS Level 1 compliant, and a trusted choice for many startups."},{"content":"What billing provider do you use?","answer":"Groovy uses Chargebee for handling subscriptions and transactions."},{"content":"How do I download my invoices?","answer":"In order to be able to download your invoices you have to open the billing portal which you can find via the “Billing” tab."},{"content":"Can I get a refund for my payment?","answer":"In order to get a refund for your payment, please contact us. While there are no questions asked for prorated refunds or full refunds in the first week, we\'d love to hear from you about what we can improve on."},{"content":"What currency do I pay with?","answer":"As of now, we support USD as a primary currency and all invoices are created in USD. Most of our payment processors are usually able to convert to your local currency. Any currency exchange, including the conversion rates, is not officially supported nor endorsed by us."}]')
        },
        398: function(t, e, r) {
            "use strict";
            r.r(e);
            r(5);
            var o = r(2),
                n = r(3),
                l = r(12),
                c = r(68),
                d = r(380);

            function h(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, r)
                }
                return e
            }

            function f(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? h(Object(source), !0).forEach((function(e) {
                        Object(n.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            var y = {
                    data() {
                        return {
                            steps: d,
                            quantity: Number(this.$route.query.quantity) || 3,
                            period: this.$route.query.period || "monthly",
                            checkout: this.$route.query.checkout || !1,
                            coupon: this.$util.storage.get("coupon") || null,
                            mounted: !1
                        }
                    },
                    computed: f(f(f({}, Object(l.b)("core/global", ["loaded", "offer"])), Object(l.b)("data/chargebee", ["instance", "portal", "subscription"])), {}, {
                        ready() {
                            return !!this.loaded.subscription || !this.$auth.loggedIn
                        },
                        plan() {
                            return c.find((t => t.period === this.period))
                        },
                        couponActiveAndApplicable() {
                            return this.couponActive && "monthly" === this.period
                        },
                        couponActive() {
                            return this.mounted && this.coupon && (this.coupon.used && new Date(this.coupon.usedAt).getTime() - Date.now() > 0 || !this.coupon.used && this.coupon.accepted)
                        },
                        priceDisplay() {
                            return this.couponActiveAndApplicable ? this.reducedPrice : this.actualPrice
                        },
                        actualPrice() {
                            return this.plan.tiers.find((t => t.quantity === this.quantity)).price
                        },
                        reducedPrice() {
                            return Math.floor(Number(this.actualPrice) * this.coupon.discount * 100) / 100
                        },
                        isYearly() {
                            return "yearly" === this.period
                        },
                        hasActiveSubscription() {
                            return this.$util.subscription.isActive(this.subscription)
                        }
                    }),
                    watch: {
                        offer(t) {
                            t && (this.coupon = t.coupon)
                        }
                    },
                    mounted() {
                        var t = this;
                        return Object(o.a)((function*() {
                            if (t.mounted = !0, t.$auth.loggedIn) {
                                try {
                                    yield t.$util.executions.add([{
                                        root: "data/chargebee",
                                        actions: ["getInstance", "getPortal", "getSubscription"]
                                    }])
                                } catch (e) {
                                    t.$util.log(["e", e.message])
                                }
                                t.hasActiveSubscription ? (t.setQuantity(t.subscription.planQuantity), t.togglePeriod("".concat(t.subscription.billingPeriodUnit, "ly"))) : t.checkout && (!t.steps.find((e => e === t.quantity)) || "monthly" !== t.period && "yearly" !== t.period || t.openCheckout())
                            }
                        }))()
                    },
                    methods: {
                        setQuantity(t) {
                            this.steps.includes(t) && (this.quantity = t)
                        },
                        togglePeriod(t) {
                            t ? this.period = t : "monthly" === this.period ? this.period = "yearly" : this.period = "monthly"
                        },
                        openCheckout() {
                            this.$util.chargebee.openCheckout(this.instance, this.subscription, this.quantity, this.plan.id), this.$router.push("/premium")
                        },
                        subscribe() {
                            this.$auth.loggedIn ? this.openCheckout() : this.$router.push({
                                path: "/login",
                                query: {
                                    from: "/premium?quantity=".concat(this.quantity, "&period=").concat(this.period, "&checkout=true")
                                }
                            })
                        },
                        reactivate() {
                            this.$util.chargebee.openScheduledChangesModal(this.portal, this.subscription)
                        },
                        cancel() {
                            this.$util.chargebee.openCancelModal(this.portal, this.subscription)
                        },
                        upgrade() {
                            this.subscribe()
                        },
                        downgrade() {
                            this.subscribe()
                        },
                        change() {
                            this.subscribe()
                        }
                    }
                },
                m = r(4),
                component = Object(m.a)(y, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "content w-full transform -translate-y-52 lg:-translate-y-40 xl:-translate-y-32"
                    }, [r("div", {
                        staticClass: "flex flex-col bg-gray-darker rounded shadow-lg relative"
                    }, [r("star", {
                        staticClass: "absolute top-0 right-0 h-10 w-10 m-2 sm:m-4 text-purple-light fill-current"
                    }), t._v(" "), r("div", {
                        staticClass: "flex flex-col lg:grid grid-cols-3 gap-8 p-8 pb-0"
                    }, [t._m(0), t._v(" "), r("div", {
                        staticClass: "flex flex-col items-center justify-center"
                    }, [r("div", {
                        staticClass: "flex flex-col items-center justify-center"
                    }, [r("p", {
                        staticClass: "text-xl font-bold opacity-75 mb-4"
                    }, [t._v("\n            Quantity\n          ")]), t._v(" "), r("div", {
                        staticClass: "flex bg-gray-dark py-2 rounded-full"
                    }, t._l(t.steps, (function(e) {
                        return r("a", {
                            key: "qty-" + e,
                            class: "mx-2 py-2 px-4 rounded-full w-16 text-center text-xl font-bold cursor-pointer select-none " + (e === t.quantity ? "bg-blue-base" : "bg-gray-light"),
                            on: {
                                click: function(r) {
                                    return t.setQuantity(e)
                                }
                            }
                        }, [t._v("\n              " + t._s(e) + "\n            ")])
                    })), 0)]), t._v(" "), r("div", {
                        staticClass: "flex items-center mt-12 lg:mt-6"
                    }, [r("p", {
                        class: "mx-4 text-xl font-bold w-24 text-right transition-opacity duration-150 " + (t.isYearly ? "opacity-50" : "")
                    }, [t._v("\n            Monthly\n          ")]), t._v(" "), r("toggle", {
                        attrs: {
                            active: t.isYearly,
                            "display-state": !1
                        },
                        on: {
                            toggle: function(e) {
                                return t.togglePeriod()
                            }
                        }
                    }), t._v(" "), r("p", {
                        class: "mx-4 text-xl font-bold w-24 text-left transition-opacity duration-150 " + (t.isYearly ? "" : "opacity-50")
                    }, [t._v("\n            Yearly\n          ")])], 1)]), t._v(" "), r("div", {
                        staticClass: "flex items-center justify-center lg:justify-end my-4 lg:my-0"
                    }, [r("div", {
                        staticClass: "flex flex-col items-center"
                    }, [r("div", {
                        staticClass: "flex items-end"
                    }, [r("p", {
                        staticClass: "text-7xl sm:text-8xl lg:text-7xl xl:text-8xl font-bold leading-none"
                    }, [t._v("\n              " + t._s(new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: t.plan.currency
                    }).format(t.priceDisplay)) + "\n            ")]), t._v(" "), r("p", {
                        staticClass: "text-xl text-gray-lighter"
                    }, [t._v("\n              " + t._s(t.plan.cycle) + "\n            ")])]), t._v(" "), t.couponActiveAndApplicable ? r("div", [r("p", {
                        staticClass: "text-xl opacity-50"
                    }, [t._v("\n              " + t._s(new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: t.plan.currency
                    }).format(t.actualPrice)) + " after " + t._s(t.coupon.duration) + " " + t._s(1 === t.coupon.duration ? "month" : "months") + "\n            ")])]) : t._e()])])]), t._v(" "), r("div", {
                        staticClass: "flex flex-col lg:flex-row lg:justify-between lg:items-center p-8"
                    }, [r("div", {
                        staticClass: "flex flex-col flex-grow w-full lg:max-w-screen-sm"
                    }, [r("p", {
                        staticClass: "text-2xl opacity-80 font-bold text-center mb-2"
                    }, [t._v("\n          " + t._s(t.quantity) + "/10 Premium Servers\n        ")]), t._v(" "), r("div", [r("div", {
                        staticClass: "bg-gray-dark w-full h-2 relative rounded-full overflow-hidden"
                    }, [r("div", {
                        staticClass: "bg-blue-base h-2",
                        style: "transition: width 1s ease-in-out; width: " + 10 * t.quantity + "%"
                    })])])]), t._v(" "), r("div", {
                        staticClass: "flex flex-col mt-4 lg:mt-0"
                    }, [r("premium-management-button", {
                        attrs: {
                            loaded: t.ready,
                            quantity: t.quantity,
                            period: t.period,
                            subscription: t.subscription
                        },
                        on: {
                            subscribe: t.subscribe,
                            reactivate: t.reactivate,
                            cancel: t.cancel,
                            upgrade: t.upgrade,
                            downgrade: t.downgrade,
                            change: t.change
                        }
                    })], 1)])], 1)])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex flex-col items-center lg:items-start"
                    }, [r("p", {
                        staticClass: "text-2xl sm:text-3xl opacity-75"
                    }, [t._v("\n          Your Groovy Premium\n        ")]), t._v(" "), r("p", {
                        staticClass: "text-xl opacity-50"
                    }, [t._v("\n          Spice up your Discord server\n        ")])])
                }], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                Star: r(104).default,
                Toggle: r(348).default,
                PremiumManagementButton: r(370).default
            })
        },
        399: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = r(381),
                n = {
                    data: () => ({
                        features: o
                    })
                },
                l = r(4),
                component = Object(l.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex flex-col items-center"
                    }, [r("p", {
                        staticClass: "bg-purple-light bg-opacity-75 transition-colors duration-150 hover:bg-opacity-90 uppercase select-none text-lg text-gray-lightest px-3 py-1 rounded shadow mb-8"
                    }, [t._v("\n    premium features\n  ")]), t._v(" "), r("div", {
                        staticClass: "content grid grid-cols-1 lg:grid-cols-2 gap-4"
                    }, t._l(t.features, (function(e) {
                        return r("premium-feature", t._b({
                            key: e.id
                        }, "premium-feature", e, !1))
                    })), 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                PremiumFeature: r(371).default
            })
        },
        400: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = r(382),
                n = {
                    data: () => ({
                        faq: o
                    })
                },
                l = r(4),
                component = Object(l.a)(n, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex flex-col items-center"
                    }, [r("p", {
                        staticClass: "bg-purple-light bg-opacity-75 transition-colors duration-150 hover:bg-opacity-90 uppercase select-none text-lg text-gray-lightest px-3 py-1 rounded shadow mb-8"
                    }, [t._v("\n    premium faq\n  ")]), t._v(" "), r("div", {
                        staticClass: "content pb-4 xl:pb-8"
                    }, t._l(t.faq, (function(t, e) {
                        return r("premium-collapsible", {
                            key: e + "-" + t.content.split(" ")[0],
                            attrs: {
                                title: t.content,
                                description: t.answer
                            }
                        })
                    })), 1)])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                PremiumCollapsible: r(372).default
            })
        },
        408: function(t, e, r) {
            "use strict";
            r.r(e);
            var o = r(4),
                component = Object(o.a)({}, (function() {
                    var t = this,
                        e = t.$createElement;
                    t._self._c;
                    return t._m(0)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "flex flex-col items-center mx-4 mt-8 xl:mt-12"
                    }, [r("h1", {
                        staticClass: "text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold uppercase",
                        staticStyle: {
                            "text-shadow": "4px 4px 32px rgba(255, 255, 255, 0.5)"
                        }
                    }, [t._v("\n    Premium\n  ")]), t._v(" "), r("h2", {
                        staticClass: "text-2xl xl:text-4xl text-center max-w-screen-md mt-2"
                    }, [t._v("\n    Unlock neat and powerful features for Groovy!\n  ")])])
                }], !1, null, null, null);
            e.default = component.exports
        },
        443: function(t, e, r) {
            "use strict";
            r.r(e);
            var meta = r(343),
                {
                    short: o,
                    title: title,
                    description: n
                } = meta.b.premium,
                l = {
                    head() {
                        return {
                            title: title,
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: n
                            }, {
                                hid: "og:title",
                                property: "og:title",
                                content: title
                            }, {
                                hid: "og:site_name",
                                property: "og:site_name",
                                content: o
                            }, {
                                hid: "og:url",
                                property: "og:url",
                                content: "".concat(meta.a).concat(this.$route.path)
                            }, {
                                hid: "og:description",
                                property: "og:description",
                                content: n
                            }],
                            link: [{
                                rel: "canonical",
                                href: "".concat(meta.a).concat(this.$route.path)
                            }]
                        }
                    }
                },
                c = r(4),
                component = Object(c.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("div", {
                        staticClass: "root"
                    }, [r("div", {
                        staticClass: "wrapper bg-gradient-to-br from-blue-dark via-purple-average to-purple-light"
                    }, [r("div", {
                        staticClass: "wrapper pt-32 xl:pt-48 pb-64 xl:pb-48"
                    }, [r("premium-intro")], 1)]), t._v(" "), r("div", {
                        staticClass: "wrapper"
                    }, [r("div", {
                        staticClass: "wrapper"
                    }, [r("premium-management")], 1)]), t._v(" "), r("div", {
                        staticClass: "wrapper"
                    }, [r("div", {
                        staticClass: "wrapper transform -translate-y-24 lg:translate-y-0 lg:pb-32"
                    }, [r("premium-features")], 1)]), t._v(" "), r("div", {
                        staticClass: "wrapper"
                    }, [r("div", {
                        staticClass: "wrapper"
                    }, [r("premium-faq")], 1)])])])
                }), [], !1, null, null, null);
            e.default = component.exports;
            installComponents(component, {
                PremiumIntro: r(408).default,
                PremiumManagement: r(398).default,
                PremiumFeatures: r(399).default,
                PremiumFaq: r(400).default
            })
        }
    }
]);