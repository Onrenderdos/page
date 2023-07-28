(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-688879f7"], {
    1270: function(e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = {
            class: "relative w-full"
        }
          , l = {
            key: 0,
            class: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        }
          , c = Object(n["createElementVNode"])("img", {
            src: "/svg/wallet.svg",
            alt: ""
        }, null, -1)
          , r = [c]
          , s = ["value", "placeholder"]
          , i = ["value", "placeholder"];
        function d(e, t, o, c, d, m) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", a, [o.hasIcon ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", l, r)) : Object(n["createCommentVNode"])("", !0), "input" == o.type ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("input", {
                key: 1,
                type: "text",
                value: o.modelValue,
                onInput: t[0] || (t[0] = (...e)=>m.updateInput && m.updateInput(...e)),
                placeholder: o.placeholder,
                class: Object(n["normalizeClass"])(["w-full bg-input border border-active rounded-xl text-sm p-5 text-white outline-none break-all", {
                    "pl-12": o.hasIcon,
                    "pl-5": !o.hasIcon
                }])
            }, null, 42, s)) : (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("textarea", {
                key: 2,
                type: "text",
                value: o.modelValue,
                onInput: t[1] || (t[1] = (...e)=>m.updateInput && m.updateInput(...e)),
                placeholder: o.placeholder,
                class: Object(n["normalizeClass"])(["w-full bg-input border border-active rounded-xl text-sm p-5 text-white outline-none break-all", {
                    "pl-12": o.hasIcon,
                    "pl-5": !o.hasIcon
                }])
            }, null, 42, i))])
        }
        var m = {
            name: "Input",
            props: {
                placeholder: String,
                modelValue: {
                    type: [String, Number],
                    default: ""
                },
                hasIcon: {
                    type: Boolean,
                    default: !0
                },
                type: {
                    type: String,
                    default: "input"
                }
            },
            emits: ["update:modelValue"],
            methods: {
                updateInput(e) {
                    this.$emit("update:modelValue", e.target.value)
                }
            }
        }
          , u = o("6b0d")
          , b = o.n(u);
        const p = b()(m, [["render", d]]);
        t["a"] = p
    },
    2241: function(e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = {
            href: "/"
        }
          , l = Object(n["createElementVNode"])("img", {
            src: "/logo.png",
            alt: "",
            class: "w-full h-full object-contain"
        }, null, -1)
          , c = [l];
        function r(e, t, o, l, r, s) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("a", a, c)
        }
        var s = {
            name: "Logo",
            props: {
                isFooter: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , i = o("6b0d")
          , d = o.n(i);
        const m = d()(s, [["render", r]]);
        t["a"] = m
    },
    "2a7d": function(e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = ["href"]
          , l = ["disabled"];
        function c(e, t, o, c, r, s) {
            const i = Object(n["resolveComponent"])("IconLink");
            return o.isLink ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("a", {
                key: 0,
                href: o.link,
                target: "_blank",
                class: Object(n["normalizeClass"])(["button font-bold text-base cursor-pointer whitespace-nowrap flex justify-between", {
                    "bg-main text-white": o.primary,
                    "text-xs px-7 py-4": !o.small,
                    "text-xs px-4 py-2": o.small,
                    "w-full": o.full,
                    "bg-transparent border border-active text-active": !o.primary
                }])
            }, [Object(n["createElementVNode"])("h1", null, Object(n["toDisplayString"])(o.text), 1), Object(n["createVNode"])(i)], 10, a)) : (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("button", {
                key: 1,
                class: Object(n["normalizeClass"])(["button font-bold text-base whitespace-nowrap flex justify-between", {
                    "bg-main text-white": o.primary && !o.disabled,
                    "text-xs px-7 py-4": !o.small,
                    "text-xs px-4 py-2": o.small,
                    "w-full": o.full,
                    "bg-transparent border border-active text-active": !o.primary && !o.disabled,
                    "bg-gray-800 text-white cursor-not-allowed": o.disabled
                }]),
                disabled: o.disabled
            }, [Object(n["createElementVNode"])("h1", null, Object(n["toDisplayString"])(o.text), 1), Object(n["createVNode"])(i)], 10, l))
        }
        const r = {
            width: "25",
            height: "25",
            viewBox: "0 0 25 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }
          , s = Object(n["createElementVNode"])("path", {
            d: "M6.5 19.5L19.5 6.5M19.5 6.5V18.98M19.5 6.5H7.02",
            stroke: "currentColor",
            "stroke-width": "1.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }, null, -1)
          , i = [s];
        function d(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", r, i)
        }
        var m = o("6b0d")
          , u = o.n(m);
        const b = {}
          , p = u()(b, [["render", d]]);
        var h = p
          , f = {
            name: "Button",
            components: {
                IconLink: h
            },
            props: {
                text: {
                    type: String
                },
                icon: {
                    type: String,
                    default: "/svg/arrow.svg"
                },
                isLink: {
                    type: Boolean,
                    default: !1
                },
                link: {
                    type: String
                },
                primary: {
                    type: Boolean,
                    default: !1
                },
                small: {
                    type: Boolean,
                    default: !1
                },
                full: {
                    type: Boolean,
                    default: !1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            }
        };
        const j = u()(f, [["render", c]]);
        t["a"] = j
    },
    "8bbb": function(e, t, o) {
        "use strict";
        var n = o("7a23");
        const a = ["src"]
          , l = Object(n["createElementVNode"])("img", {
            src: "/svg/half-moon.svg",
            alt: ""
        }, null, -1)
          , c = {
            class: "text-active text-opacity-50 font-bold uppercase text-lg"
        }
          , r = {
            key: 1,
            class: "text-active text-opacity-50 md:text-lg text-sm uppercase"
        };
        function s(e, t, o, s, i, d) {
            const m = Object(n["resolveDirective"])("animate-onscroll");
            return Object(n["withDirectives"])((Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                class: Object(n["normalizeClass"])(["flex flex-col content-block text-white w-full relative", {
                    "w-full max-w-5xl": o.isHero,
                    "content-block--transparent": o.isTransparent,
                    "content-block--gradient": o.isGradient,
                    "items-start": !o.center,
                    "items-center": o.center
                }])
            }, [o.hasIcon ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("img", {
                key: 0,
                src: o.icon,
                alt: ""
            }, null, 8, a)) : Object(n["createCommentVNode"])("", !0), Object(n["createElementVNode"])("div", {
                class: Object(n["normalizeClass"])(["flex flex-col", {
                    "items-center": o.center,
                    "items-start": !o.center
                }])
            }, [o.hasHeader ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                key: 0,
                class: Object(n["normalizeClass"])(["flex items-center gap-1.5", {
                    "md:items-start item-center w-full md:justify-start justify-center": o.centerHeader && !o.center
                }])
            }, [l, Object(n["createElementVNode"])("h1", c, Object(n["toDisplayString"])(o.header), 1)], 2)) : Object(n["createCommentVNode"])("", !0), Object(n["createElementVNode"])("h1", {
                class: Object(n["normalizeClass"])(["text-active uppercase font-bold", {
                    "text-4xl md:text-5xl xl:text-9xl": o.isHero,
                    "md:text-5xl text-2xl": o.isHeader,
                    "md:text-3xl text-xl": !o.isHero && !o.isHeader
                }])
            }, Object(n["toDisplayString"])(o.title), 3), o.isHero ? Object(n["createCommentVNode"])("", !0) : (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("h2", r, Object(n["toDisplayString"])(o.subTitle), 1))], 2), Object(n["createElementVNode"])("p", {
                class: Object(n["normalizeClass"])(["text-main-white -mt-5 text-opacity-70", {
                    "text-lg": o.isHero,
                    "text-center": o.center
                }])
            }, Object(n["toDisplayString"])(o.description), 3), Object(n["renderSlot"])(e.$slots, "button")], 2)), [[m, {
                down: o.isHero || o.isHeader ? "" : "animate__animated animate__zoomIn",
                up: o.isHero || o.isHeader ? "" : "animate__animated animate__zoomIn"
            }]])
        }
        var i = {
            name: "ContentBlock",
            props: {
                icon: {
                    type: String,
                    default: "/svg/moon.svg"
                },
                hasIcon: {
                    type: Boolean,
                    default: !1
                },
                hasHeader: {
                    type: Boolean,
                    default: !1
                },
                isHero: {
                    type: Boolean,
                    default: !1
                },
                isHeader: {
                    type: Boolean,
                    default: !1
                },
                isTransparent: {
                    type: Boolean,
                    default: !1
                },
                isGradient: {
                    type: Boolean,
                    default: !1
                },
                center: {
                    type: Boolean,
                    default: !1
                },
                header: {
                    type: String,
                    default: "Community"
                },
                title: {
                    type: String
                },
                subTitle: {
                    type: String
                },
                description: {
                    type: String
                },
                centerHeader: {
                    type: Boolean
                }
            }
        }
          , d = o("6b0d")
          , m = o.n(d);
        const u = m()(i, [["render", s]]);
        t["a"] = u
    },
    "97c7": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("7a23");
        function a(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("Header")
              , s = Object(n["resolveComponent"])("Hero")
              , i = Object(n["resolveComponent"])("About")
              , d = Object(n["resolveComponent"])("Join")
              , m = Object(n["resolveComponent"])("Tokenomics")
              , u = Object(n["resolveComponent"])("Diamond")
              , b = Object(n["resolveComponent"])("Swap")
              , p = Object(n["resolveComponent"])("ContactUs")
              , h = Object(n["resolveComponent"])("Footer");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", null, [Object(n["createVNode"])(r), Object(n["createVNode"])(s), Object(n["createVNode"])(i), Object(n["createVNode"])(d), Object(n["createVNode"])(m), Object(n["createVNode"])(u), Object(n["createVNode"])(b), Object(n["createVNode"])(p), Object(n["createVNode"])(h)])
        }
        var l = o("5502");
        const c = {
            class: "flex items-center justify-between py-3 px-6 w-full"
        }
          , r = {
            class: "xl:flex items-center gap-7 hidden text-white relative z-3"
        }
          , s = {
            class: "md:flex hidden items-center ml-auto mr-10 lg:mr-0 lg:ml-0 gap-5"
        }
          , i = {
            class: "flex xl:hidden"
        }
          , d = Object(n["createElementVNode"])("img", {
            src: "/svg/menu.svg",
            alt: "",
            class: "h-5 w-5"
        }, null, -1)
          , m = [d]
          , u = {
            class: "fixed top-0 inset-x-0 transition transform origin-top xl:hidden z-50"
        }
          , b = {
            class: "rounded-lg shadow-md bg-content overflow-hidden px-6 py-3"
        }
          , p = {
            class: "flex items-center justify-between"
        }
          , h = Object(n["createElementVNode"])("img", {
            src: "/svg/menu.svg",
            alt: "",
            class: "h-5 w-5"
        }, null, -1)
          , f = [h]
          , j = {
            class: "flex flex-col gap-3 text-white mt-3"
        };
        function O(e, t, o, a, l, d) {
            const h = Object(n["resolveComponent"])("Logo")
              , O = Object(n["resolveComponent"])("Links")
              , g = Object(n["resolveComponent"])("Button")
              , v = Object(n["resolveComponent"])("router-link");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("nav", {
                class: Object(n["normalizeClass"])(["fixed top-0 w-full z-50", l.scrolled ? "bg-content bg-opacity-95" : "bg-transparent"])
            }, [Object(n["createElementVNode"])("div", c, [Object(n["createVNode"])(h, {
                class: "h-12 md:h-16"
            }), Object(n["createElementVNode"])("div", r, [Object(n["createVNode"])(O, {
                links: l.links
            }, null, 8, ["links"])]), Object(n["createElementVNode"])("div", s, [Object(n["createVNode"])(g, {
                text: "Buy $EVERMOON",
                primary: "",
                "is-link": "",
                small: "",
                link: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x4ad434b8CDC3AA5AC97932D6BD18b5d313aB0f6f"
            }), Object(n["createVNode"])(v, {
                to: "/dashboard"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createVNode"])(g, {
                    small: "",
                    text: "Dashboard"
                })]),
                _: 1
            })]), Object(n["createElementVNode"])("div", i, [Object(n["createElementVNode"])("button", {
                onClick: t[0] || (t[0] = e=>l.expandMenu = !l.expandMenu)
            }, m)])]), Object(n["withDirectives"])(Object(n["createElementVNode"])("div", u, [Object(n["createElementVNode"])("div", b, [Object(n["createElementVNode"])("div", p, [Object(n["createVNode"])(h, {
                class: "h-12"
            }), Object(n["createElementVNode"])("button", {
                onClick: t[1] || (t[1] = e=>l.expandMenu = !1)
            }, f)]), Object(n["createElementVNode"])("div", j, [Object(n["createVNode"])(O, {
                links: l.links,
                onClose: t[2] || (t[2] = e=>l.expandMenu = !1)
            }, null, 8, ["links"]), Object(n["createVNode"])(g, {
                text: "Buy $EVERMOON",
                primary: "",
                "is-link": "",
                small: "",
                link: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x4ad434b8CDC3AA5AC97932D6BD18b5d313aB0f6f"
            }), Object(n["createVNode"])(v, {
                to: "/dashboard"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createVNode"])(g, {
                    small: "",
                    text: "Dashboard",
                    full: ""
                })]),
                _: 1
            })])])], 512), [[n["vShow"], l.expandMenu]])], 2)
        }
        var g = o("2241");
        const v = ["href"];
        function x(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("router-link");
            return Object(n["openBlock"])(!0),
            Object(n["createElementBlock"])(n["Fragment"], null, Object(n["renderList"])(o.links, (o,a)=>(Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                key: a
            }, [o.anchor ? (Object(n["openBlock"])(),
            Object(n["createElementBlock"])("a", {
                key: 0,
                class: Object(n["normalizeClass"])(["font-medium", {
                    "text-active font-bold": e.$route.fullPath == o.url
                }]),
                href: o.url,
                onClick: t[0] || (t[0] = t=>e.$emit("close"))
            }, Object(n["toDisplayString"])(o.name), 11, v)) : (Object(n["openBlock"])(),
            Object(n["createBlock"])(r, {
                key: 1,
                to: o.url,
                class: Object(n["normalizeClass"])(["font-medium", {
                    "text-active font-bold": e.$route.fullPath == o.url
                }]),
                exact: "",
                onClick: t[1] || (t[1] = t=>e.$emit("close"))
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(o.name), 1)]),
                _: 2
            }, 1032, ["to", "class"]))]))), 128)
        }
        var k = {
            name: "Links",
            props: {
                links: {
                    type: Array
                }
            },
            emits: ["close"]
        }
          , w = o("6b0d")
          , y = o.n(w);
        const C = y()(k, [["render", x]]);
        var V = C
          , B = o("2a7d")
          , E = {
            name: "Nav",
            components: {
                Logo: g["a"],
                Button: B["a"],
                Links: V
            },
            data() {
                return {
                    expandMenu: !1,
                    links: [{
                        name: "Home",
                        url: "/"
                    }, {
                        name: "About",
                        url: "/#about"
                    }, {
                        name: "Community",
                        url: "/#community"
                    }, {
                        name: "Tokenomics",
                        url: "/#tokenomics"
                    }, {
                        name: "Buy",
                        url: "/#buy"
                    }],
                    scrolled: !1
                }
            },
            mounted() {
                window.addEventListener("scroll", ()=>{
                    window.pageYOffset > 0 ? this.scrolled = !0 : this.scrolled = !1
                }
                )
            }
        };
        const N = y()(E, [["render", O]]);
        var D = N;
        const S = {
            class: "relative flex items-center flex-col h-screen md:hero-min-height bg-hero bg-cover overflow-hidden"
        }
          , M = {
            class: "relative w-full flex flex-col items-start justify-center h-screen md:hero-min-height max-w-8xl lg:max-w-7xl md:max-w-4xl mx-auto z-3 px-6 md:px-16"
        }
          , _ = {
            class: "flex flex-col md:flex-row items-center gap-5 w-full sm:w-1/2 lg:w-2/3 xl:w-2/4"
        }
          , z = Object(n["createElementVNode"])("img", {
            src: "/rocket.png",
            class: "absolute bottom-56 right-0 md:w-1/3 z-2 float opacity-30 md:opacity-50",
            alt: ""
        }, null, -1)
          , A = Object(n["createElementVNode"])("img", {
            src: "/svg/hero-moon.svg",
            class: "absolute bottom-0 right-0 z-1 earth-ping",
            alt: ""
        }, null, -1)
          , T = Object(n["createElementVNode"])("img", {
            src: "/svg/hero-shadow-effect.svg",
            class: "absolute bottom-0 right-0 z-0",
            alt: ""
        }, null, -1);
        function H(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("Button")
              , s = Object(n["resolveComponent"])("router-link")
              , i = Object(n["resolveComponent"])("ContentBlock")
              , d = Object(n["resolveComponent"])("Contract");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", S, [Object(n["createElementVNode"])("div", M, [Object(n["createVNode"])(i, {
                title: "WELCOME TO EVERMOON",
                description: "We are a vibrant and inclusive community-driven project committed to creating an immersive and nurturing environment within the world of Web3. At EverMoon, we believe in the power of collaboration, innovation, and the potential of blockchain technology to revolutionize the way communities thrive.",
                "is-hero": "",
                "is-transparent": ""
            }, {
                button: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", _, [Object(n["createVNode"])(r, {
                    text: "Buy $EVERMOON",
                    primary: "",
                    "is-link": "",
                    full: "",
                    link: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x4ad434b8CDC3AA5AC97932D6BD18b5d313aB0f6f"
                }), Object(n["createVNode"])(s, {
                    to: "/dashboard",
                    class: "w-full"
                }, {
                    default: Object(n["withCtx"])(()=>[Object(n["createVNode"])(r, {
                        full: "",
                        text: "Dashboard"
                    })]),
                    _: 1
                })])]),
                _: 1
            })]), z, A, T, Object(n["createVNode"])(d)])
        }
        var I = o("8bbb");
        const L = {
            class: "w-full py-5 px-10 absolute bottom-0 text-white bg-content z-10"
        }
          , R = {
            class: "mx-auto max-w-8xl lg:max-w-7xl md:max-w-4xl flex flex-col-reverse gap-5 md:flex-row items-center justify-between"
        }
          , W = {
            class: "flex items-center gap-9"
        }
          , $ = Object(n["createStaticVNode"])('<a href="https://t.me/EverMoonERC" target="_blank"><img src="/svg/telegram.svg" alt=""></a><a href="https://twitter.com/EverMoonERC" target="_blank"><img src="/svg/twitter.svg" alt=""></a><a href="https://medium.com/@EVMERC20/welcome-to-evermoon-f00481a8f8d9" target="_blank"><img src="/svg/medium.svg" alt=""></a>', 3)
          , F = {
            class: "break-all xl:text-left text-center"
        }
          , P = Object(n["createElementVNode"])("span", {
            class: "relative ml-1.5"
        }, "0x4ad434b8...", -1);
        function q(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("Button")
              , s = Object(n["resolveComponent"])("IconCopy");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", L, [Object(n["createElementVNode"])("div", R, [Object(n["createElementVNode"])("div", W, [Object(n["createVNode"])(r, {
                "is-link": "",
                link: "https://www.dextools.io/app/en/ether/pair-explorer/0xaa665ad2c5f99c9861c1030ef85e48ba07059c2a",
                small: "",
                text: "View in Dextools"
            }), $]), Object(n["createElementVNode"])("p", null, [Object(n["createTextVNode"])(" Contract Address: "), Object(n["createElementVNode"])("span", F, [P, Object(n["createElementVNode"])("button", {
                class: "ml-3 top-1.5 relative",
                onClick: t[0] || (t[0] = e=>c.copy("0x4ad434b8CDC3AA5AC97932D6BD18b5d313aB0f6f"))
            }, [Object(n["createVNode"])(s)])])])])])
        }
        const J = {
            width: "24",
            height: "25",
            viewBox: "0 0 24 25",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }
          , U = Object(n["createElementVNode"])("path", {
            d: "M6.6001 11.897C6.6001 9.17101 6.6001 7.80801 7.4431 6.96101C8.2871 6.11401 9.6441 6.11401 12.3601 6.11401H15.2401C17.9551 6.11401 19.3121 6.11401 20.1561 6.96101C21.0001 7.80801 21.0001 9.17101 21.0001 11.897V16.717C21.0001 19.443 21.0001 20.806 20.1561 21.653C19.3131 22.5 17.9551 22.5 15.2401 22.5H12.3601C9.6441 22.5 8.2871 22.5 7.4431 21.653C6.6001 20.806 6.6001 19.443 6.6001 16.717V11.897Z",
            fill: "white"
        }, null, -1)
          , G = Object(n["createElementVNode"])("path", {
            opacity: "0.5",
            d: "M4.172 3.672C3 4.843 3 6.729 3 10.5V12.5C3 16.271 3 18.157 4.172 19.328C4.789 19.946 5.605 20.238 6.792 20.376C6.6 19.536 6.6 18.38 6.6 16.716V11.897C6.6 9.171 6.6 7.808 7.443 6.961C8.287 6.114 9.644 6.114 12.36 6.114H15.24C16.892 6.114 18.04 6.114 18.878 6.304C18.74 5.111 18.448 4.292 17.828 3.672C16.657 2.5 14.771 2.5 11 2.5C7.229 2.5 5.343 2.5 4.172 3.672Z",
            fill: "white"
        }, null, -1)
          , K = [U, G];
        function Z(e, t) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("svg", J, K)
        }
        const Q = {}
          , X = y()(Q, [["render", Z]]);
        var Y = X
          , ee = {
            name: "Contract",
            components: {
                IconCopy: Y,
                Button: B["a"]
            },
            methods: {
                async copy(e) {
                    try {
                        await navigator.clipboard.writeText(e)
                    } catch (t) {}
                }
            }
        };
        const te = y()(ee, [["render", q]]);
        var oe = te
          , ne = {
            name: "Hero",
            components: {
                Button: B["a"],
                ContentBlock: I["a"],
                Contract: oe
            },
            data() {
                return {}
            }
        };
        const ae = y()(ne, [["render", H]]);
        var le = ae;
        const ce = Object(n["createElementVNode"])("img", {
            src: "/svg/north-star.svg",
            class: "absolute top-20 right-1/4",
            alt: ""
        }, null, -1)
          , re = {
            class: "flex flex-col items-start w-full gap-12"
        }
          , se = {
            class: "grid gird-cols-1 md:grid-cols-2 gap-12 w-full"
        };
        function ie(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("ContentBlock")
              , s = Object(n["resolveComponent"])("Section");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(s, {
                id: "about",
                class: "bg-black"
            }, {
                default: Object(n["withCtx"])(()=>[ce, Object(n["createElementVNode"])("div", re, [Object(n["createVNode"])(r, {
                    title: "about us",
                    "is-header": "",
                    "has-header": "",
                    "is-transparent": ""
                }), Object(n["createElementVNode"])("div", se, [Object(n["createVNode"])(r, {
                    title: "Our Mission",
                    "sub-title": "Our mission is to establish the most influential community in the Web3 space",
                    description: "Individuals from diverse backgrounds can come together, connect, and unleash their creativity. We strive to foster an atmosphere that encourages learning, collaboration, and personal growth, where every member can contribute and benefit from the collective wisdom of the community.",
                    "has-icon": "",
                    "is-gradient": ""
                }), Object(n["createVNode"])(r, {
                    title: "Our Vision",
                    icon: "/svg/vision.svg",
                    "sub-title": "EverMoon envisions a future",
                    description: "Web3 communities empower individuals to explore their passions, share knowledge, and collaborate on projects with like-minded enthusiasts. We strive to break down barriers and create opportunities for people from all walks of life to access the exciting world of blockchain technology, regardless of their level of expertise.",
                    "has-icon": "",
                    "is-gradient": ""
                })]), Object(n["createVNode"])(r, {
                    title: "Community Management",
                    "sub-title": "EverMoon values community engagement and encourages meaningful interactions among its members.",
                    description: "Through regular events, raids, initiatives, and checkpoints, we aim to reach engagement and personal growth. We provide a platform for creators, developers, and innovators to showcase their talents, collaborate on projects, and explore the limitless possibilities of Web3 together.",
                    "is-gradient": ""
                })])]),
                _: 1
            })
        }
        const de = ["id"];
        function me(e, t, o, a, l, c) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", {
                id: o.id,
                class: Object(n["normalizeClass"])(["flex flex-col relative w-full py-10 lg:py-20 overflow-hidden", {
                    "px-7": !o.noPadding,
                    "px-7 xl:px-0": o.noPadding
                }])
            }, [Object(n["createElementVNode"])("div", {
                class: Object(n["normalizeClass"])(["w-full mx-auto max-w-8xl lg:max-w-7xl md:max-w-4xl", {
                    "my-auto": o.center
                }])
            }, [Object(n["renderSlot"])(e.$slots, "default")], 2)], 10, de)
        }
        var ue = {
            props: {
                id: String,
                center: Boolean,
                noPadding: Boolean
            },
            data() {
                return {}
            }
        };
        const be = y()(ue, [["render", me]]);
        var pe = be
          , he = {
            name: "About",
            components: {
                Section: pe,
                ContentBlock: I["a"]
            }
        };
        const fe = y()(he, [["render", ie]]);
        var je = fe;
        const Oe = {
            class: "flex items-center justify-between relative"
        }
          , ge = Object(n["createElementVNode"])("img", {
            src: "/svg/north-star.svg",
            class: "absolute top-0 right-1/2 left-1/2 opacity-0 md:opacity-100 lg:block hidden",
            alt: ""
        }, null, -1)
          , ve = {
            class: "flex flex-col lg:flex-row w-full items-center gap-5"
        }
          , xe = Object(n["createElementVNode"])("img", {
            src: "/astronaut.png",
            class: "w-2/4 z-10 float absolute lg:relative hidden lg:block",
            alt: ""
        }, null, -1)
          , ke = Object(n["createElementVNode"])("img", {
            class: "absolute right-0 top-0 earth-pulse opacity-25 md:opacity-100",
            src: "/svg/join-moon.svg",
            alt: ""
        }, null, -1);
        function we(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("Button")
              , s = Object(n["resolveComponent"])("router-link")
              , i = Object(n["resolveComponent"])("ContentBlock")
              , d = Object(n["resolveComponent"])("Section");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(d, {
                id: "community",
                class: "bg-content-2 h-full"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", Oe, [ge, Object(n["createVNode"])(i, {
                    "has-header": "",
                    "is-header": "",
                    "is-transparent": "",
                    title: "Join Evermoon Today",
                    description: "Whether you are an experienced blockchain enthusiast or new to the world of Web3, we welcome you to join EverMoon and become part of our growing community. Together, let's cultivate a space where ideas flourish, connections thrive, and innovation knows no bounds. Join us on this exciting journey and be part of shaping the future of Web3 with EverMoon.",
                    class: "relative z-2 mb-10"
                }, {
                    button: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", ve, [Object(n["createVNode"])(r, {
                        text: "Buy $EVERMOON",
                        primary: "",
                        "is-link": "",
                        full: "",
                        link: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x4ad434b8CDC3AA5AC97932D6BD18b5d313aB0f6f"
                    }), Object(n["createVNode"])(s, {
                        to: "/dashboard"
                    }, {
                        default: Object(n["withCtx"])(()=>[Object(n["createVNode"])(r, {
                            full: "",
                            text: "Dashboard"
                        })]),
                        _: 1
                    })])]),
                    _: 1
                }), xe]), ke]),
                _: 1
            })
        }
        var ye = {
            name: "About",
            components: {
                Section: pe,
                ContentBlock: I["a"],
                Button: B["a"]
            }
        };
        const Ce = y()(ye, [["render", we]]);
        var Ve = Ce;
        const Be = {
            class: "flex flex-row flex-wrap gap-5 items-center justify-center relative w-full h-full md:mt-36 mt-20"
        }
          , Ee = Object(n["createElementVNode"])("img", {
            src: "/svg/north-star.svg",
            class: "absolute top-0 right-5 left-5",
            alt: ""
        }, null, -1)
          , Ne = Object(n["createElementVNode"])("img", {
            src: "/svg/tokenomics.svg",
            class: "earth-spin",
            alt: ""
        }, null, -1);
        function De(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("ContentBlock")
              , s = Object(n["resolveComponent"])("TokenBlock")
              , i = Object(n["resolveComponent"])("Section");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(i, {
                id: "tokenomics",
                class: "bg-content-2 h-full"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createVNode"])(r, {
                    "has-header": "",
                    "is-header": "",
                    "is-transparent": "",
                    center: "",
                    header: "Statistics",
                    title: "Tokenomics",
                    description: "At the heart of our ecosystem lies our native token, EverMoon ($EVERMOON). EverMoon is designed with unique tokenomics that align with our community's values and goals. We aim to create a sustainable and rewarding economy for our members, where their contributions and participation are recognized and incentivized."
                }), Object(n["createElementVNode"])("div", Be, [Ee, Object(n["createVNode"])(s, {
                    title: "1% BuyBacks",
                    description: "1% of each transaction will be used to buyback the token, and highlight the team's long term vision of EverMoon.",
                    class: "lg:absolute lg:-top-16"
                }), Object(n["createVNode"])(s, {
                    title: "1% Marketing",
                    description: "1% of each transaction will be used to market the project, and enhance all marketing efforts.",
                    class: "lg:absolute lg:-left-12"
                }), Object(n["createVNode"])(s, {
                    title: "1% Deflationary",
                    description: "1% of each transaction is automatically burned, reducing the EverMoon supply forever.",
                    class: "lg:absolute lg:-right-12"
                }), Object(n["createVNode"])(s, {
                    title: "1% Liquidity Provision",
                    description: "1% of each transaction is added to the liquidity pool, enhancing the stability and liquidity of the $EVERMOON token.",
                    class: "lg:absolute lg:-bottom-16 left-32"
                }), Object(n["createVNode"])(s, {
                    title: "1% Redistribution Mechanism",
                    description: "1% of each transaction is reflected back to holders, promoting long-term engagement and loyalty within the community.",
                    class: "lg:absolute lg:-bottom-16 right-32"
                }), Ne])]),
                _: 1
            })
        }
        const Se = {
            class: "flex flex-col items-start content-block content-block--token content-block--gradient text-white max-w-md z-2"
        }
          , Me = Object(n["createElementVNode"])("img", {
            src: "/svg/coin.svg",
            alt: ""
        }, null, -1)
          , _e = {
            class: "text-active text-xl uppercase"
        }
          , ze = {
            class: "text-main-white font-medium text-opacity-40"
        };
        function Ae(e, t, o, a, l, c) {
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("div", Se, [Me, Object(n["createElementVNode"])("h1", _e, Object(n["toDisplayString"])(o.title), 1), Object(n["createElementVNode"])("p", ze, Object(n["toDisplayString"])(o.description), 1)])
        }
        var Te = {
            name: "TokenBlock",
            props: {
                title: {
                    type: String
                },
                description: {
                    type: String
                }
            }
        };
        const He = y()(Te, [["render", Ae]]);
        var Ie = He
          , Le = {
            name: "About",
            components: {
                Section: pe,
                ContentBlock: I["a"],
                TokenBlock: Ie,
                Button: B["a"]
            }
        };
        const Re = y()(Le, [["render", De]]);
        var We = Re;
        const $e = {
            class: "flex items-center justify-between"
        }
          , Fe = Object(n["createElementVNode"])("img", {
            src: "/diamond-hands.png",
            class: "w-full md:w-1/3 absolute md:relative opacity-20 md:opacity-100",
            alt: ""
        }, null, -1);
        function Pe(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("ContentBlock")
              , s = Object(n["resolveComponent"])("Section");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(s, null, {
                default: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", $e, [Object(n["createVNode"])(r, {
                    "has-header": "",
                    "is-header": "",
                    "is-transparent": "",
                    header: "Incentives",
                    title: "Diamond Hand Tax",
                    description: "To incentivize all holders to hold their bags like their lives depend on them, and also add more tokenomics to $EVERMOON, we tax 5% on all transfers, just like buys and sells, with all allocations being identical to the buy and sell taxes.",
                    class: "relative z-1"
                }), Fe])]),
                _: 1
            })
        }
        var qe = {
            name: "About",
            components: {
                Section: pe,
                ContentBlock: I["a"]
            }
        };
        const Je = y()(qe, [["render", Pe]]);
        var Ue = Je;
        const Ge = {
            class: "flex flex-col items-center justify-center"
        }
          , Ke = {
            class: "w-full max-w-lg p-5 border border-active gap-5 rounded-2xl mt-10 flex flex-col"
        };
        function Ze(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("ContentBlock")
              , s = Object(n["resolveComponent"])("Input")
              , i = Object(n["resolveComponent"])("Button")
              , d = Object(n["resolveComponent"])("Section");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(d, {
                class: "bg-content-2 h-full"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", Ge, [Object(n["createVNode"])(r, {
                    "has-header": "",
                    "is-header": "",
                    "is-transparent": "",
                    header: "Idea / Suggestion",
                    title: "GIVE US FEEDBACK!",
                    description: "We appreciate your feedback and value your input! Please take a moment to share your thoughts, suggestions, or ideas with us. We believe in continuous improvement and your feedback helps us enhance our products/services and provide you with a better experience.",
                    class: "relative z-1",
                    center: ""
                }), Object(n["createElementVNode"])("div", Ke, [Object(n["createVNode"])(s, {
                    modelValue: l.name,
                    "onUpdate:modelValue": t[0] || (t[0] = e=>l.name = e),
                    placeholder: "Name",
                    "has-icon": !1
                }, null, 8, ["modelValue"]), Object(n["createVNode"])(s, {
                    modelValue: l.message,
                    "onUpdate:modelValue": t[1] || (t[1] = e=>l.message = e),
                    placeholder: "Suggestions / Feedback",
                    "has-icon": !1,
                    type: "textarea"
                }, null, 8, ["modelValue"]), Object(n["createVNode"])(i, {
                    primary: "",
                    text: "Send",
                    onClick: c.submit
                }, null, 8, ["onClick"])])])]),
                _: 1
            })
        }
        const Qe = {
            _origin: "https://api.emailjs.com"
        }
          , Xe = (e,t="https://api.emailjs.com")=>{
            Qe._userID = e,
            Qe._origin = t
        }
          , Ye = (e,t,o)=>{
            if (!e)
                throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
            if (!t)
                throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
            if (!o)
                throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
            return !0
        }
        ;
        class et {
            constructor(e) {
                this.status = e.status,
                this.text = e.responseText
            }
        }
        const tt = (e,t,o={})=>new Promise((n,a)=>{
            const l = new XMLHttpRequest;
            l.addEventListener("load", ({target: e})=>{
                const t = new et(e);
                200 === t.status || "OK" === t.text ? n(t) : a(t)
            }
            ),
            l.addEventListener("error", ({target: e})=>{
                a(new et(e))
            }
            ),
            l.open("POST", Qe._origin + e, !0),
            Object.keys(o).forEach(e=>{
                l.setRequestHeader(e, o[e])
            }
            ),
            l.send(t)
        }
        )
          , ot = (e,t,o,n)=>{
            const a = n || Qe._userID;
            Ye(a, e, t);
            const l = {
                lib_version: "3.2.0",
                user_id: a,
                service_id: e,
                template_id: t,
                template_params: o
            };
            return tt("/api/v1.0/email/send", JSON.stringify(l), {
                "Content-type": "application/json"
            })
        }
          , nt = e=>{
            let t;
            if (t = "string" === typeof e ? document.querySelector(e) : e,
            !t || "FORM" !== t.nodeName)
                throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
            return t
        }
          , at = (e,t,o,n)=>{
            const a = n || Qe._userID
              , l = nt(o);
            Ye(a, e, t);
            const c = new FormData(l);
            return c.append("lib_version", "3.2.0"),
            c.append("service_id", e),
            c.append("template_id", t),
            c.append("user_id", a),
            tt("/api/v1.0/email/send-form", c)
        }
        ;
        var lt = {
            init: Xe,
            send: ot,
            sendForm: at
        }
          , ct = o("1270")
          , rt = {
            name: "About",
            components: {
                Section: pe,
                ContentBlock: I["a"],
                Input: ct["a"],
                Button: B["a"]
            },
            data() {
                return {
                    name: "",
                    email: "",
                    message: ""
                }
            },
            methods: {
                submit() {
                    try {
                        let e = {
                            name: this.name,
                            message: this.message
                        };
                        lt.send("service_kih0ue7", "template_1h0y8o9", e, "VvCMwBzhVOQ5jf5Mc")
                    } catch (e) {
                        console.log({
                            error: e
                        })
                    }
                    this.name = "",
                    this.email = "",
                    this.message = ""
                }
            }
        };
        const st = y()(rt, [["render", Ze]]);
        var it = st;
        const dt = {
            class: "flex md:flex-row flex-col-reverse items-center md:justify-between justify-center gap-10"
        }
          , mt = Object(n["createElementVNode"])("iframe", {
            width: "400",
            height: "720",
            frameborder: "0",
            allow: "clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *",
            src: "https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x4ad434b8CDC3AA5AC97932D6BD18b5d313aB0f6f&swapLockToToken=true&onRampDisabled=false&onRampAsDefault=true&onRampDefaultAmount=100&onRampTokenAddress=0x4ad434b8CDC3AA5AC97932D6BD18b5d313aB0f6f&onRampLockToken=true&stakeDisabled=true&network=eth&lightMode=false&primaryColor=%2300109e&backgroundColor=transparent&roundedCorners=15&padding=20&refId=1eM60z"
        }, null, -1);
        function ut(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("ContentBlock")
              , s = Object(n["resolveComponent"])("Section");
            return Object(n["openBlock"])(),
            Object(n["createBlock"])(s, {
                id: "buy"
            }, {
                default: Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div", dt, [mt, Object(n["createVNode"])(r, {
                    "has-header": "",
                    "is-header": "",
                    "is-transparent": "",
                    header: "Buy",
                    title: "Buy EverMoon with fiat",
                    description: "With our partners at Flooz, we allow anyone to buy #EVERMOON with fiat, card, and other payment methods. Just use the interface to our left to buy EVERMOON straight from fiat.",
                    class: "relative z-1 w-full max-w-2xl md:text-left md:items-start text-center items-center",
                    "center-header": ""
                })])]),
                _: 1
            })
        }
        var bt = {
            name: "Swap",
            components: {
                Section: pe,
                ContentBlock: I["a"]
            }
        };
        const pt = y()(bt, [["render", ut]]);
        var ht = pt;
        const ft = {
            class: "bg-dark flex xl:flex-row flex-col items-center justify-between w-full py-5 px-6 gap-5 bg-content text-active footer"
        }
          , jt = {
            class: "flex items-center gap-7 text-white relative z-3"
        };
        function Ot(e, t, o, a, l, c) {
            const r = Object(n["resolveComponent"])("Logo")
              , s = Object(n["resolveComponent"])("Links");
            return Object(n["openBlock"])(),
            Object(n["createElementBlock"])("footer", ft, [Object(n["createVNode"])(r, {
                class: "h-12"
            }), Object(n["createElementVNode"])("div", jt, [Object(n["createVNode"])(s, {
                links: l.links
            }, null, 8, ["links"])])])
        }
        var gt = {
            name: "Footer",
            components: {
                Logo: g["a"],
                Links: V
            },
            data() {
                return {
                    links: [{
                        name: "Home",
                        url: "/"
                    }, {
                        name: "About",
                        url: "/#about"
                    }, {
                        name: "Community",
                        url: "/#community"
                    }, {
                        name: "Tokenomics",
                        url: "/#tokenomics"
                    }, {
                        name: "Buy",
                        url: "/#buy"
                    }]
                }
            }
        };
        const vt = y()(gt, [["render", Ot]]);
        var xt = vt
          , kt = {
            name: "Dashboard",
            components: {
                Header: D,
                Hero: le,
                About: je,
                Join: Ve,
                Tokenomics: We,
                Diamond: Ue,
                ContactUs: it,
                Swap: ht,
                Footer: xt
            },
            methods: {
                ...Object(l["b"])(["getErc20TokenInfoWithoutConnect", "getPrice"])
            },
            async mounted() {
                await this.getPrice()
            }
        };
        const wt = y()(kt, [["render", a]]);
        t["default"] = wt
    }
}]);
