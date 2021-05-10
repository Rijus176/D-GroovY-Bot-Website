(window.webpackJsonp = window.webpackJsonp || []).push([
    [56, 21], {
        343: function(e) {
            e.exports = JSON.parse('{"a":"https://groovy.bot","b":{"home":{"short":"Groovy","title":"Groovy - The Best Discord Music Bot","description":"An incredibly easy to use music bot for Discord that doesn\'t skip on features. Supports YouTube, Spotify, Apple Music and more. Invite Groovy today and start listening to your favorite songs together with your friends!"},"commands":{"short":"Groovy\'s Commands","title":"Groovy\'s Commands - A Highly Detailed Documentation","description":"Find documentation on all the commands and features Groovy offers as well as check which commands require which permissions!"},"premium":{"short":"Groovy Premium","title":"Groovy Premium - Spice Up Your Discord Server","description":"Unlock neat and powerful features like volume control and audio effects for Groovy in order to enhance your Discord server!"},"guilds":{"short":"Your Discord Servers","title":"Groovy Dashboard - Manage Your Discord Servers","description":"Manage and configure your Discord servers from anywhere in the world at one place!"},"guild":{"short":"Your Discord Server","title":"Configure Your Discord Server","description":"Configure your Discord server from anywhere in the world! Manage your premium upgrade if you\'ve applied one!"},"invite":{"short":"Invite Groovy","title":"Invite Groovy - Start Listening Today","description":"Invite Groovy to your Discord server today and start listening to your favorite songs together with your friends on the best music bot!"},"login":{"short":"Groovy Login","title":"Groovy Login - Manage Your Subscription And Upgrades","description":"Log in to Groovy\'s dashboard and manage all of your Discord server at one place! You\'ll also be able to subscribe to our premium plans and add or remove upgrades!"}}}')
        },
        397: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = {
                    props: {
                        name: {
                            type: String,
                            required: !0,
                            default: "name"
                        },
                        usage: {
                            type: String,
                            required: !0,
                            default: "[usage]"
                        },
                        description: {
                            type: String,
                            required: !0,
                            default: "This is a description"
                        },
                        categories: {
                            type: Array,
                            required: !0,
                            default: () => ["basic", "player"]
                        },
                        aliases: {
                            type: Array,
                            required: !0,
                            default: () => ["basic", "player"]
                        },
                        permissions: {
                            type: Array,
                            required: !0,
                            default: () => ["basic", "player"]
                        },
                        premium: {
                            type: Boolean,
                            required: !0,
                            default: !1
                        },
                        requiresManageServer: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            active: !1,
                            prefix: this.$route.query.prefix ? decodeURI(this.$route.query.prefix) : "/"
                        }
                    },
                    computed: {
                        hasAliases() {
                            return this.aliases.length > 0
                        },
                        parsedAliases() {
                            return this.aliases.join(", ")
                        },
                        needsPermissions() {
                            return this.requiresManageServer || this.permissions.length > 0
                        },
                        maxActiveHeight() {
                            return this.$refs.content.scrollHeight
                        }
                    },
                    methods: {
                        toggle() {
                            this.active = !this.active
                        }
                    }
                },
                n = r(4),
                component = Object(n.a)(o, (function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "flex flex-col w-full bg-gray-dark p-4 mb-4 last:mb-0 rounded shadow-md overflow-hidden cursor-pointer",
                        on: {
                            click: function(t) {
                                return e.toggle()
                            }
                        }
                    }, [r("div", {
                        ref: "overview",
                        staticClass: "flex flex-row items-center"
                    }, [r("fa", {
                        class: (e.active ? "transform origin-center rotate-90 transition duration-200 ease-in-out" : "transform origin-center rotate-0 transition duration-200 ease-in-out") + " text-lg xl:text-xl w-4 h-4 xl:w-6 xl:h-6",
                        attrs: {
                            icon: "angle-right"
                        }
                    }), e._v(" "), r("div", {
                        staticClass: "flex flex-row justify-between items-center flex-grow"
                    }, [r("h2", {
                        staticClass: "text-xl xl:text-2xl font-bold ml-2"
                    }, [e._v("\n        " + e._s(e.prefix) + e._s(e.name)), r("span", {
                        staticClass: "opacity-50 font-normal"
                    }, [e._v(e._s(e.usage.length > 0 ? " " + e.usage : ""))])]), e._v(" "), e.premium ? r("star", {
                        staticClass: "text-purple-light fill-current ml-2 h-6 w-6`"
                    }) : e._e()], 1)], 1), e._v(" "), r("div", {
                        ref: "content",
                        style: "transition: max-height 200ms ease-in-out; " + (e.active ? "max-height: " + e.maxActiveHeight + "px;" : "max-height: 0;")
                    }, [r("p", {
                        staticClass: "text-lg xl:text-xl mt-4 mb-2"
                    }, [e._v("\n      " + e._s(e.description) + "\n    ")]), e._v(" "), e.hasAliases ? r("p", {
                        staticClass: "mb-2 xl:text-lg"
                    }, [e._v("\n      Aliases: "), r("span", {
                        staticClass: "opacity-75"
                    }, [e._v(e._s(e.parsedAliases))])]) : e._e(), e._v(" "), e.needsPermissions ? r("div", {
                        staticClass: "flex flex-row flex-wrap"
                    }, [r("p", {
                        staticClass: "opacity-50 xl:text-lg"
                    }, [e._v("\n        Permissions: \n      ")]), e._v(" "), e._l(e.permissions, (function(t) {
                        return r("p", {
                            key: t,
                            staticClass: "text-purple-light xl:text-lg"
                        }, [e._v("\n        " + e._s(t) + "  \n      ")])
                    })), e._v(" "), e.requiresManageServer ? r("p", {
                        staticClass: "text-blue-base xl:text-lg"
                    }, [e._v("\n        Manage Server\n      ")]) : e._e()], 2) : e._e()])])
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                Star: r(104).default
            })
        },
        411: function(e) {
            e.exports = JSON.parse('[{"name":"play","usage":"[link or search query]","description":"Loads your input and adds it to the queue; If there is no playing track, then it will start playing","categories":["player","basic"],"aliases":["p","q","queue"],"permissions":["Add to Queue"],"premium":false},{"name":"play file","usage":"","description":"Plays the file attached to your message","categories":["player","basic"],"aliases":["pf","f"],"permissions":["Add to Queue"],"premium":false},{"name":"join","usage":"","description":"Makes the bot join your voice channel","categories":["player","basic"],"aliases":["j"],"permissions":["Manage Player"],"premium":false},{"name":"queue","usage":"","description":"Displays the current song queue","categories":["queue","basic"],"aliases":["q"],"permissions":["View Queue"],"premium":false},{"name":"next","usage":"","description":"Skips to the next song","categories":["player","basic"],"aliases":["n","skip"],"permissions":["Manage Player"],"premium":false},{"name":"back","usage":"","description":"Skips to the previous song","categories":["player","basic"],"aliases":["b","previous","prev"],"permissions":["Manage Player"],"premium":false},{"name":"clear","usage":"","description":"Removes all tracks from the queue","categories":["queue","basic"],"aliases":[],"permissions":["Manage Queue"],"premium":false},{"name":"jump","usage":"[track position or title]","description":"Skips to the specified track","categories":["basic"],"aliases":["j","goto"],"permissions":["Manage Player","View Queue"],"premium":false},{"name":"loop track","usage":"","description":"Starts looping your currently playing track","categories":["queue","player"],"aliases":["loop song","lt","ls"],"permissions":["Manage Player"],"premium":false},{"name":"loop queue","usage":"","description":"Starts looping your current queue","categories":["queue","player"],"aliases":["lq"],"permissions":["Manage Player"],"premium":false},{"name":"loop off","usage":"","description":"Stops looping","categories":["queue","player"],"aliases":["loop stop"],"permissions":["Manage Player"],"premium":false},{"name":"lyrics","usage":"","description":"Displays lyrics for the currently playing track","categories":["basic","player"],"aliases":["ly"],"permissions":["View Queue"],"premium":false},{"name":"lyrics","usage":"[query]","description":"Searches for lyrics based on your query","categories":[],"aliases":["ly"],"permissions":["View Queue"],"premium":false},{"name":"pause","usage":"","description":"Pauses playback","categories":["player","basic"],"aliases":[],"permissions":["Manage Player"],"premium":false},{"name":"resume","usage":"","description":"Resumes playback","categories":["player","basic"],"aliases":["unpause"],"permissions":["Manage Player"],"premium":false},{"name":"remove","usage":"[track position or title]","description":"Removes the specified track from the queue","categories":["queue","basic"],"aliases":["r","rm","delete","del"],"permissions":["Manage Queue"],"premium":false},{"name":"remove range","usage":"[start], [end]","description":"Removes all the tracks from the specified start through the specified end","categories":["queue"],"aliases":["rr"],"permissions":["Manage Queue"],"premium":false},{"name":"disconnect","usage":"","description":"Disconnects the bot from your voice channel and clears the queue","categories":["player","queue","basic"],"aliases":["dc","leave","reset"],"permissions":["Manage Player","Manage Queue"],"premium":false},{"name":"shuffle","usage":"","description":"Randomizes the current order of tracks in the queue","categories":["queue","basic"],"aliases":["shuff","shuf","randomize","randomise"],"permissions":["Manage Queue"],"premium":false},{"name":"song","usage":"[song]","description":"Displays info about the specified track in the queue","categories":["queue","basic"],"aliases":["nowplaying","np"],"permissions":["View Queue"],"premium":false},{"name":"song","usage":"","description":"Displays info about the currently playing track","categories":["player"],"aliases":["nowplaying","np"],"permissions":["View Queue"],"premium":false},{"name":"24/7","usage":"","description":"Toggles 24/7 mode, which disables automatic inactivity-based disconnects","categories":["settings","premium"],"aliases":["247"],"permissions":["Manage Player"],"premium":true,"requiresManageServer":true},{"name":"autoplay","usage":"","description":"Toggles AutoPlay, which will automatically queue the best song to play next through looking at your listening history","categories":["queue","settings","premium"],"aliases":["ap"],"permissions":["Manage Player"],"premium":true},{"name":"bass boost","usage":"[amount]","description":"Sets the player\'s bass boost setting; If you input \\"reset\\", it will disable bass boosting","categories":["player","audio-effects","premium"],"aliases":["bb"],"permissions":["Manage Player"],"premium":true},{"name":"volume","usage":"[new volume]","description":"Sets the player\'s volume; If you input \\"reset\\", it will set the volume back to default","categories":["player","audio-effects","premium"],"aliases":["v","vol"],"permissions":["Manage Player"],"premium":true},{"name":"speed","usage":"[new speed]","description":"Sets the player\'s playback speed; If you input \\"reset\\", it will set the speed back to default","categories":["player","audio-effects","premium"],"aliases":[],"permissions":["Manage Player"],"premium":true},{"name":"pitch","usage":"[new pitch]","description":"Sets the player\'s pitch; If you input \\"reset\\", it will set the pitch back to default","categories":["player","audio-effects","premium"],"aliases":[],"permissions":["Manage Player"],"premium":true},{"name":"nightcore","usage":"","description":"Toggles nightcore mode","categories":["player","audio-effects","premium"],"aliases":[],"permissions":["Manage Player"],"premium":true},{"name":"vaporwave","usage":"","description":"Toggles vaporwave mode","categories":["player","audio-effects","premium"],"aliases":[],"permissions":["Manage Player"],"premium":true},{"name":"reset effects","usage":"","description":"Resets all audio effects","categories":["player","audio-effects"],"aliases":[],"permissions":["Manage Player"],"premium":false},{"name":"fast forward","usage":"[amount]","description":"Fast forwards the player by your specified amount; The default is 10 seconds","categories":["player"],"aliases":["ff","fwd"],"permissions":["Manage Player"],"premium":false},{"name":"rewind","usage":"[amount]","description":"Rewinds the player by your specified amount; The default is 10 seconds","categories":["player"],"aliases":["rw"],"permissions":["Manage Player"],"premium":false},{"name":"search","usage":"[query]","description":"Searches for your query on YouTube and lets you choose which songs to queue; To queue a track of the results, just type the number preceding it","categories":["queue"],"aliases":["s"],"permissions":["Add to Queue"],"premium":false},{"name":"seek","usage":"[position]","description":"Skips to the specified timestamp in the currently playing track","categories":["player"],"aliases":[],"permissions":["Manage Player"],"premium":false},{"name":"stop","usage":"","description":"Stops the currently playing track and returns to the beginning of the queue","categories":["queue","player"],"aliases":[],"permissions":["Manage Player"],"premium":false},{"name":"move","usage":"[track], [new position]","description":"Moves the specified song to the specified position","categories":["queue"],"aliases":["m"],"permissions":["Manage Queue"],"premium":false},{"name":"saved queues","usage":"","description":"Lists all of your personal saved queues","categories":["queue","premium"],"aliases":["sqs"],"permissions":[],"premium":true},{"name":"saved queue load","usage":"[name]","description":"Loads the specified saved queue into the current queue","categories":["queue","premium"],"aliases":["sq load"],"permissions":["Add to Queue"],"premium":true},{"name":"saved queue create","usage":"[name]","description":"Saves the current queue under the specified name","categories":["queue","premium"],"aliases":["sq create"],"permissions":["View Queue"],"premium":true},{"name":"saved queue delete","usage":"[name]","description":"Deletes the specified saved queue","categories":["queue","premium"],"aliases":["sq delete"],"permissions":[],"premium":true},{"name":"saved queue share","usage":"[name]","description":"Creates a link that anyone can use to play your saved queue","categories":["queue","premium"],"aliases":["sq share"],"permissions":[],"premium":true},{"name":"announce","usage":"","description":"Toggles the announcing of \\"Now playing\\" messages","categories":["settings"],"aliases":[],"permissions":[],"premium":false,"requiresManageServer":true},{"name":"perms","usage":"","description":"Displays all available permissions","categories":["settings"],"aliases":[],"permissions":[],"premium":false},{"name":"perms","usage":"[role/user]","description":"Displays the currently set permissions for the specified role or user","categories":["settings"],"aliases":[],"permissions":[],"premium":false,"requiresManageServer":true},{"name":"perms","usage":"[deny/allow/clear] [role or user], [permission]","description":"Modifies the permissions for a role or user; You can use \\"all\\" to select all permissions","categories":["settings"],"aliases":[],"permissions":[],"premium":false,"requiresManageServer":true}]')
        },
        412: function(e) {
            e.exports = JSON.parse('[{"id":"all","name":"All"},{"id":"basic","name":"Basic"},{"id":"player","name":"Player"},{"id":"queue","name":"Queue"},{"id":"audio-effects","name":"Audio Effects"},{"id":"settings","name":"Settings"},{"id":"premium","name":"Premium"}]')
        },
        438: function(e, t, r) {
            "use strict";
            r.r(t);
            r(5);
            var o = r(3),
                n = r(411),
                l = r(412),
                meta = r(343);

            function c(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(object);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function m(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? c(Object(source), !0).forEach((function(t) {
                        Object(o.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var {
                short: d,
                title: title,
                description: y
            } = meta.b.commands, f = {
                data() {
                    return {
                        commands: n,
                        categories: l,
                        activeCategory: this.$route.query.category || "all",
                        query: this.$route.query.query || ""
                    }
                },
                head() {
                    return {
                        title: title,
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: y
                        }, {
                            hid: "og:title",
                            property: "og:title",
                            content: title
                        }, {
                            hid: "og:site_name",
                            property: "og:site_name",
                            content: d
                        }, {
                            hid: "og:url",
                            property: "og:url",
                            content: "".concat(meta.a).concat(this.$route.path)
                        }, {
                            hid: "og:description",
                            property: "og:description",
                            content: y
                        }],
                        link: [{
                            rel: "canonical",
                            href: "".concat(meta.a).concat(this.$route.path)
                        }]
                    }
                },
                watch: {
                    query(e) {
                        if (this.updateCommands(), e.length > 0) this.$router.push({
                            query: m(m({}, this.$route.query), {}, {
                                query: e
                            })
                        });
                        else {
                            var t = Object.assign({}, this.$route.query);
                            delete t.query, Object.keys(t).length > 0 ? this.$router.push({
                                query: t
                            }) : this.$router.push({
                                path: "commands"
                            })
                        }
                    }
                },
                mounted() {
                    this.$nextTick((() => {
                        this.updateCommands(), this.$refs.input && window.innerWidth > 1200 && this.$refs.input.focus()
                    }))
                },
                methods: {
                    setCategory(e) {
                        this.activeCategory = e, this.updateCommands(), this.$router.push({
                            query: m(m({}, this.$route.query), {}, {
                                category: e
                            })
                        })
                    },
                    updateCommands() {
                        this.query.length > 0 ? this.commands = n.filter((e => e.name.includes(this.query) || e.aliases.join(" ").includes(this.query))) : this.commands = n.filter((e => e.categories.find((e => e === this.activeCategory)) || "all" === this.activeCategory))
                    }
                }
            }, h = r(4), component = Object(h.a)(f, (function() {
                var e = this,
                    t = e.$createElement,
                    r = e._self._c || t;
                return r("div", [r("div", {
                    staticClass: "root"
                }, [r("div", {
                    staticClass: "wrapper pt-24"
                }, [r("div", {
                    staticClass: "wrapper"
                }, [r("div", {
                    staticClass: "content items-center my-4 lg:my-8 w-full"
                }, [r("div", {
                    staticClass: "flex mb-4 w-full lg:max-w-screen-md"
                }, [r("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.query,
                        expression: "query"
                    }],
                    ref: "input",
                    staticClass: "bg-gray-darker rounded w-full px-3 py-2 text-xl xl:text-2xl text-white focus:outline-none shadow-md",
                    attrs: {
                        placeholder: "Search...",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.query
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.query = t.target.value)
                        }
                    }
                })]), e._v(" "), e.commands.length > 0 ? r("div", {
                    staticClass: "flex flex-col lg:flex-row items-start"
                }, [r("div", {
                    staticClass: "bg-gray-darker flex flex-wrap lg:flex-col rounded shadow-md p-2 mb-4 w-full lg:mr-4 lg:w-64"
                }, e._l(e.categories, (function(t) {
                    return r("a", {
                        key: t.id,
                        class: "m-2 " + (t.id === e.activeCategory ? "bg-blue-base" : "bg-gray-dark") + " py-1 px-4 flex-grow text-center rounded cursor-pointer xl:text-lg",
                        on: {
                            click: function(r) {
                                return e.setCategory(t.id)
                            }
                        }
                    }, [e._v("\n                " + e._s(t.name) + "\n              ")])
                })), 0), e._v(" "), r("div", {
                    staticClass: "flex flex-col w-full lg:max-w-screen-md"
                }, e._l(e.commands, (function(t) {
                    return r("command", e._b({
                        key: (t.name + (t.usage.length > 0 ? "-" + t.usage : "")).replace(" ", "-")
                    }, "command", t, !1))
                })), 1)]) : r("p", {
                    staticClass: "text-xl lg:text-4xl text-center lg:text-left font-bold opacity-50 mt-2"
                }, [e._v("\n            No commands found!\n          ")])])])])])])
            }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                Command: r(397).default
            })
        }
    }
]);