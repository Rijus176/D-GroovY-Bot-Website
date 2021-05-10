(window.webpackJsonp = window.webpackJsonp || []).push([
    [28], {
        419: function(t) {
            t.exports = JSON.parse('[{"id":"twitter","icon":"twitter","display":"Twitter","url":"https://twitter.com/groovybot"},{"id":"github","icon":"github","display":"GitHub","url":"https://github.com/groovy-bot"},{"id":"linkedin","icon":"linkedin","display":"LinkedIn","url":"https://www.linkedin.com/company/groovy-bot"}]')
        },
        451: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = r(419),
                o = {
                    data: () => ({
                        year: (new Date).getFullYear(),
                        socials: l
                    })
                },
                n = r(4),
                component = Object(n.a)(o, (function() {
                    var t = this,
                        e = t.$createElement,
                        l = t._self._c || e;
                    return l("div", {
                        staticClass: "root flex-shrink-0"
                    }, [l("div", {
                        staticClass: "wrapper bg-gray-darker py-4 sm:py-8"
                    }, [l("div", {
                        staticClass: "content w-full"
                    }, [l("div", {
                        staticClass: "flex flex-col w-full"
                    }, [l("div", {
                        staticClass: "flex justify-between items-start sm:items-center"
                    }, [l("div", {
                        staticClass: "flex flex-col items-start"
                    }, [l("nuxt-link", {
                        attrs: {
                            to: "/",
                            "aria-label": "Home"
                        }
                    }, [l("img", {
                        staticClass: "h-12 sm:h-16",
                        attrs: {
                            src: r(164),
                            alt: "Groovy's logo",
                            loading: "lazy"
                        }
                    })]), t._v(" "), l("a", {
                        staticClass: "text-lg text-blue-base opacity-50 hover:opacity-75 transition-opacity duration-100 mt-2",
                        attrs: {
                            href: "mailto:contact@groovy.bot"
                        }
                    }, [t._v("\n              contact@groovy.bot\n            ")])], 1), t._v(" "), l("div", {
                        staticClass: "flex items-center mt-4 sm:mt-0"
                    }, t._l(t.socials, (function(t) {
                        return l("a", {
                            key: t.id,
                            staticClass: "flex items-center text-2xl lg:text-3xl mx-2 sm:mx-4 transition-opacity ease-in-out duration-100 opacity-75 hover:opacity-100",
                            attrs: {
                                href: t.url,
                                "aria-label": "Groovy's " + t.display,
                                rel: "nofollow noopener noreferrer",
                                target: "_blank"
                            }
                        }, [l("fa", {
                            attrs: {
                                icon: ["fab", t.icon]
                            }
                        })], 1)
                    })), 0)]), t._v(" "), l("div", {
                        staticClass: "flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-16"
                    }, [l("div", {
                        staticClass: "flex justify-center flex-wrap divide-x divide-gray-light divide-opacity-25"
                    }), t._v(" "), l("div", {
                        staticClass: "flex items-center mt-2 sm:mt-0"
                    }, [l("fa", {
                        staticClass: "text-gray-light",
                        attrs: {
                            icon: "code"
                        }
                    }), t._v(" "), l("p", {
                        staticClass: "text-gray-light"
                    }, [t._v("\n               with \n            ")]), t._v(" "), l("fa", {
                        staticClass: "text-gray-light",
                        attrs: {
                            icon: "heart"
                        }
                    }), t._v(" "), l("p", {
                        staticClass: "text-gray-light"
                    }, [t._v("\n               by \n            ")]), t._v(" "), l("a", {
                        staticClass: "text-blue-base opacity-50 hover:opacity-75 transition-opacity duration-100",
                        attrs: {
                            href: "https://rxs.to/?utm_source=groovy&utm_medium=web&utm_campaign=footer"
                        }
                    }, [t._v("\n              rxsto#1234\n            ")])], 1)])])])]), t._v(" "), t._m(0), t._v(" "), l("div", {
                        staticClass: "bg-gray-darker w-full flex justify-center px-4 p-4 sm:py-6"
                    }, [l("p", {
                        staticClass: "text-center text-gray-light"
                    }, [t._v("\n      Copyright © " + t._s(t.year) + " Groovy Bot Inc. All rights reserved.\n    ")])])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "bg-gray-darker w-full flex justify-center px-4"
                    }, [e("hr", {
                        staticClass: "max-w-screen-xl w-full text-gray-base"
                    })])
                }], !1, null, null, null);
            e.default = component.exports
        }
    }
]);