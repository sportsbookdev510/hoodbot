(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  20570,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "warnOnce", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let a = (e) => {};
  },
  44765,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    var a = {
      assign: function () {
        return o;
      },
      searchParamsToUrlQuery: function () {
        return l;
      },
      urlQueryToSearchParams: function () {
        return i;
      },
    };
    for (var r in a) Object.defineProperty(s, r, { enumerable: !0, get: a[r] });
    function l(e) {
      let t = {};
      for (let [s, a] of e.entries()) {
        let e = t[s];
        void 0 === e
          ? (t[s] = a)
          : Array.isArray(e)
          ? e.push(a)
          : (t[s] = [e, a]);
      }
      return t;
    }
    function n(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function i(e) {
      let t = new URLSearchParams();
      for (let [s, a] of Object.entries(e))
        if (Array.isArray(a)) for (let e of a) t.append(s, n(e));
        else t.set(s, n(a));
      return t;
    }
    function o(e, ...t) {
      for (let s of t) {
        for (let t of s.keys()) e.delete(t);
        for (let [t, a] of s.entries()) e.append(t, a);
      }
      return e;
    }
  },
  56135,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    var a = {
      formatUrl: function () {
        return i;
      },
      formatWithValidation: function () {
        return c;
      },
      urlObjectKeys: function () {
        return o;
      },
    };
    for (var r in a) Object.defineProperty(s, r, { enumerable: !0, get: a[r] });
    let l = e.r(44066)._(e.r(44765)),
      n = /https?|ftp|gopher|file/;
    function i(e) {
      let { auth: t, hostname: s } = e,
        a = e.protocol || "",
        r = e.pathname || "",
        i = e.hash || "",
        o = e.query || "",
        c = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (c = t + e.host)
          : s &&
            ((c = t + (~s.indexOf(":") ? `[${s}]` : s)),
            e.port && (c += ":" + e.port)),
        o && "object" == typeof o && (o = String(l.urlQueryToSearchParams(o)));
      let d = e.search || (o && `?${o}`) || "";
      return (
        a && !a.endsWith(":") && (a += ":"),
        e.slashes || ((!a || n.test(a)) && !1 !== c)
          ? ((c = "//" + (c || "")), r && "/" !== r[0] && (r = "/" + r))
          : c || (c = ""),
        i && "#" !== i[0] && (i = "#" + i),
        d && "?" !== d[0] && (d = "?" + d),
        (r = r.replace(/[?#]/g, encodeURIComponent)),
        (d = d.replace("#", "%23")),
        `${a}${c}${r}${d}${i}`
      );
    }
    let o = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes",
    ];
    function c(e) {
      return i(e);
    }
  },
  27929,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return r;
        },
      });
    let a = e.r(5034);
    function r(e, t) {
      let s = (0, a.useRef)(null),
        r = (0, a.useRef)(null);
      return (0, a.useCallback)(
        (a) => {
          if (null === a) {
            let e = s.current;
            e && ((s.current = null), e());
            let t = r.current;
            t && ((r.current = null), t());
          } else e && (s.current = l(e, a)), t && (r.current = l(t, a));
        },
        [e, t]
      );
    }
    function l(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let s = e(t);
        return "function" == typeof s ? s : () => e(null);
      }
    }
    ("function" == typeof s.default ||
      ("object" == typeof s.default && null !== s.default)) &&
      void 0 === s.default.__esModule &&
      (Object.defineProperty(s.default, "__esModule", { value: !0 }),
      Object.assign(s.default, s),
      (t.exports = s.default));
  },
  6755,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    var a = {
      DecodeError: function () {
        return f;
      },
      MiddlewareNotFoundError: function () {
        return N;
      },
      MissingStaticPage: function () {
        return j;
      },
      NormalizeError: function () {
        return g;
      },
      PageNotFoundError: function () {
        return v;
      },
      SP: function () {
        return p;
      },
      ST: function () {
        return b;
      },
      WEB_VITALS: function () {
        return l;
      },
      execOnce: function () {
        return n;
      },
      getDisplayName: function () {
        return x;
      },
      getLocationOrigin: function () {
        return c;
      },
      getURL: function () {
        return d;
      },
      isAbsoluteUrl: function () {
        return o;
      },
      isResSent: function () {
        return h;
      },
      loadGetInitialProps: function () {
        return u;
      },
      normalizeRepeatedSlashes: function () {
        return m;
      },
      stringifyError: function () {
        return k;
      },
    };
    for (var r in a) Object.defineProperty(s, r, { enumerable: !0, get: a[r] });
    let l = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function n(e) {
      let t,
        s = !1;
      return (...a) => (s || ((s = !0), (t = e(...a))), t);
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      o = (e) => i.test(e);
    function c() {
      let { protocol: e, hostname: t, port: s } = window.location;
      return `${e}//${t}${s ? ":" + s : ""}`;
    }
    function d() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function x(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function h(e) {
      return e.finished || e.headersSent;
    }
    function m(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function u(e, t) {
      let s = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await u(t.Component, t.ctx) }
          : {};
      let a = await e.getInitialProps(t);
      if (s && h(s)) return a;
      if (!a)
        throw Object.defineProperty(
          Error(
            `"${x(
              e
            )}.getInitialProps()" should resolve to an object. But found "${a}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return a;
    }
    let p = "u" > typeof performance,
      b =
        p &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class f extends Error {}
    class g extends Error {}
    class v extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class j extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class N extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function k(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  42826,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return l;
        },
      });
    let a = e.r(6755),
      r = e.r(71910);
    function l(e) {
      if (!(0, a.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, a.getLocationOrigin)(),
          s = new URL(e, t);
        return s.origin === t && (0, r.hasBasePath)(s.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  27979,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 }),
      Object.defineProperty(s, "errorOnce", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let a = (e) => {};
  },
  12111,
  (e, t, s) => {
    "use strict";
    Object.defineProperty(s, "__esModule", { value: !0 });
    var a = {
      default: function () {
        return f;
      },
      useLinkStatus: function () {
        return v;
      },
    };
    for (var r in a) Object.defineProperty(s, r, { enumerable: !0, get: a[r] });
    let l = e.r(44066),
      n = e.r(14270),
      i = l._(e.r(5034)),
      o = e.r(56135),
      c = e.r(86812),
      d = e.r(27929),
      x = e.r(6755),
      h = e.r(27804);
    e.r(20570);
    let m = e.r(85781),
      u = e.r(42826),
      p = e.r(66834);
    function b(e) {
      return "string" == typeof e ? e : (0, o.formatUrl)(e);
    }
    function f(t) {
      var s;
      let a,
        r,
        l,
        [o, f] = (0, i.useOptimistic)(m.IDLE_LINK_STATUS),
        v = (0, i.useRef)(null),
        {
          href: j,
          as: N,
          children: k,
          prefetch: y = null,
          passHref: w,
          replace: E,
          shallow: T,
          scroll: O,
          onClick: U,
          onMouseEnter: R,
          onTouchStart: A,
          legacyBehavior: C = !1,
          onNavigate: S,
          ref: _,
          unstable_dynamicOnHover: P,
          ...K
        } = t;
      (a = k),
        C &&
          ("string" == typeof a || "number" == typeof a) &&
          (a = (0, n.jsx)("a", { children: a }));
      let L = i.default.useContext(c.AppRouterContext),
        M = !1 !== y,
        I =
          !1 !== y
            ? null === (s = y) || "auto" === s
              ? p.FetchStrategy.PPR
              : p.FetchStrategy.Full
            : p.FetchStrategy.PPR,
        { href: D, as: H } = i.default.useMemo(() => {
          let e = b(j);
          return { href: e, as: N ? b(N) : e };
        }, [j, N]);
      if (C) {
        if (a?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        r = i.default.Children.only(a);
      }
      let B = C ? r && "object" == typeof r && r.ref : _,
        z = i.default.useCallback(
          (e) => (
            null !== L &&
              (v.current = (0, m.mountLinkInstance)(e, D, L, I, M, f)),
            () => {
              v.current &&
                ((0, m.unmountLinkForCurrentNavigation)(v.current),
                (v.current = null)),
                (0, m.unmountPrefetchableInstance)(e);
            }
          ),
          [M, D, L, I, f]
        ),
        F = {
          ref: (0, d.useMergedRef)(z, B),
          onClick(t) {
            C || "function" != typeof U || U(t),
              C &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              !L ||
                t.defaultPrevented ||
                (function (t, s, a, r, l, n, o) {
                  if ("u" > typeof window) {
                    let c,
                      { nodeName: d } = t.currentTarget;
                    if (
                      ("A" === d.toUpperCase() &&
                        (((c = t.currentTarget.getAttribute("target")) &&
                          "_self" !== c) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, u.isLocalURL)(s)) {
                      l && (t.preventDefault(), location.replace(s));
                      return;
                    }
                    if ((t.preventDefault(), o)) {
                      let e = !1;
                      if (
                        (o({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: x } = e.r(93668);
                    i.default.startTransition(() => {
                      x(a || s, l ? "replace" : "push", n ?? !0, r.current);
                    });
                  }
                })(t, D, H, v, E, O, S);
          },
          onMouseEnter(e) {
            C || "function" != typeof R || R(e),
              C &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              L && M && (0, m.onNavigationIntent)(e.currentTarget, !0 === P);
          },
          onTouchStart: function (e) {
            C || "function" != typeof A || A(e),
              C &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              L && M && (0, m.onNavigationIntent)(e.currentTarget, !0 === P);
          },
        };
      return (
        (0, x.isAbsoluteUrl)(H)
          ? (F.href = H)
          : (C && !w && ("a" !== r.type || "href" in r.props)) ||
            (F.href = (0, h.addBasePath)(H)),
        (l = C
          ? i.default.cloneElement(r, F)
          : (0, n.jsx)("a", { ...K, ...F, children: a })),
        (0, n.jsx)(g.Provider, { value: o, children: l })
      );
    }
    e.r(27979);
    let g = (0, i.createContext)(m.IDLE_LINK_STATUS),
      v = () => (0, i.useContext)(g);
    ("function" == typeof s.default ||
      ("object" == typeof s.default && null !== s.default)) &&
      void 0 === s.default.__esModule &&
      (Object.defineProperty(s.default, "__esModule", { value: !0 }),
      Object.assign(s.default, s),
      (t.exports = s.default));
  },
  63780,
  (e) => {
    "use strict";
    var t = e.i(14270),
      s = e.i(5034),
      a = e.i(12111);
    function r() {
      let [e, r] = (0, s.useState)(!1);
      return (
        (0, s.useEffect)(
          () => (
            e
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "unset"),
            () => {
              document.body.style.overflow = "unset";
            }
          ),
          [e]
        ),
        (0, t.jsx)("nav", {
          className:
            "fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-rh-green",
          children: (0, t.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, t.jsxs)("div", {
                className: "flex items-center justify-between h-20",
                children: [
                  (0, t.jsxs)(a.default, {
                    href: "/",
                    className: "flex items-center gap-3 group",
                    children: [
                      // (0, t.jsx)("div", {
                      //   className:
                      //     "manga-border-sm p-0.5 bg-white overflow-hidden rounded-full",
                      //   children: (0, t.jsx)("img", {
                      //     src: "/images/kururu-favicon-bw.png",
                      //     alt: "Kururu Logo",
                      //     className:
                      //       "h-10 w-10 group-hover:scale-110 transition-transform duration-300",
                      //   }),
                      // }),
                      (0, t.jsx)("span", {
                        className:
                          "text-black font-display text-4xl tracking-tighter transform -rotate-2",
                        children: "Hoodbot",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "hidden md:flex items-center gap-10 font-display text-xl uppercase tracking-widest",
                    children: [
                      (0, t.jsx)("a", {
                        href: "#about",
                        className:
                          "text-black hover:bg-rh-green hover:text-white px-3 py-1 transition-all",
                        children: "About",
                      }),
                      (0, t.jsx)("a", {
                        href: "#tokenomics",
                        className:
                          "text-black hover:bg-rh-green hover:text-white px-3 py-1 transition-all",
                        children: "Tokenomics",
                      }),
                      // (0, t.jsx)("a", {
                      //   href: "#moon-mission",
                      //   className:
                      //     "text-black hover:bg-rh-green hover:text-white px-3 py-1 transition-all",
                      //   children: "Mission",
                      // }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: "hidden sm:flex items-center gap-4",
                    children: (0, t.jsx)("a", {
                      href: "https://app.uniswap.org/swap?chain=robinhood&inputCurrency=NATIVE&outputCurrency=0x7b73ca9572623dfebee289623140db656cbf946e",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "manga-btn text-lg py-2",
                      children: "Buy Now",
                    }),
                    
                  }),
                  (0, t.jsx)("button", {
                    onClick: () => r(!e),
                    className: "md:hidden manga-btn p-2 rounded-none",
                    "aria-label": "Toggle menu",
                    children: (0, t.jsx)("svg", {
                      className: "w-6 h-6 text-black",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: e
                        ? (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 3,
                            d: "M6 18L18 6M6 6l12 12",
                          })
                        : (0, t.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 3,
                            d: "M4 6h16M4 12h16M4 18h16",
                          }),
                    }),
                  }),
                ],
              }),
              e &&
                (0, t.jsxs)("div", {
                  className:
                    "md:hidden fixed inset-0 top-20 bg-white z-40 p-8 space-y-8 animate-in fade-in slide-in-from-top-2 flex flex-col items-center justify-center",
                  children: [
                    (0, t.jsx)("div", {
                      className:
                        "absolute inset-0 bg-halftone opacity-10 pointer-events-none",
                    }),
                    (0, t.jsx)("a", {
                      href: "#about",
                      className:
                        "font-display text-5xl text-black hover:bg-rh-green hover:text-white px-4 transition-all",
                      onClick: () => r(!1),
                      children: "About",
                    }),
                    (0, t.jsx)("a", {
                      href: "#tokenomics",
                      className:
                        "font-display text-5xl text-black hover:bg-rh-green hover:text-white px-4 transition-all",
                      onClick: () => r(!1),
                      children: "Tokenomics",
                    }),
                    // (0, t.jsx)("a", {
                    //   href: "#moon-mission",
                    //   className:
                    //     "font-display text-5xl text-black hover:bg-rh-green hover:text-white px-4 transition-all",
                    //   onClick: () => r(!1),
                    //   children: "Mission",
                    // }),
                  ],
                }),
            ],
          }),
        })
      );
    }
    e.s(["Navbar", () => r]);
  },
  85161,
  (e) => {
    "use strict";
    var t = e.i(14270),
      s = e.i(5034);
    function a() {
      let [e, a] = (0, s.useState)(!1);
      return (0, t.jsxs)("section", {
        className:
          "relative min-h-screen bg-white flex items-center overflow-hidden pt-20 border-b-8 border-rh-green",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 bg-halftone pointer-events-none opacity-5",
          }),
          (0, t.jsxs)("div", {
            className: "absolute inset-0 pointer-events-none overflow-hidden",
            children: [
              (0, t.jsx)("div", {
                className:
                  "absolute top-0 right-0 w-[500px] h-[500px] bg-[repeating-linear-gradient(45deg,black,black_1px,transparent_1px,transparent_40px)] opacity-10 rotate-12",
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute bottom-0 left-0 w-[500px] h-[500px] bg-[repeating-linear-gradient(-45deg,black,black_1px,transparent_1px,transparent_40px)] opacity-10 -rotate-12",
              }),
            ],
          }),
          (0, t.jsx)("div", {
            className:
              "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12",
            children: (0, t.jsxs)("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
              children: [
                (0, t.jsxs)("div", {
                  className: "space-y-8 order-2 lg:order-1",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "relative inline-block",
                      children: [
                        (0, t.jsxs)("h1", {
                          className:
                            "text-7xl sm:text-8xl lg:text-9xl font-display text-black mb-4 leading-none tracking-tighter transform -rotate-1",
                          children: [
                            // "KURURU:",
                            (0, t.jsx)("br", {}),
                            (0, t.jsx)("span", {
                              className: "text-outline bg-rh-green px-4 py-1",
                              children: "Hoodbot",
                            }),
                          ],
                        }),
                        // (0, t.jsx)("div", {
                        //   className:
                        //     "absolute -top-10 -left-6 bg-rh-green text-white font-display text-2xl px-4 py-1 transform -rotate-12 border-2 border-white",
                        //   children: "HACKING IN PROGRESS...",
                        // }),
                      ],
                    }),
                    // (0, t.jsx)("p", {
                    //   className:
                    //     "text-2xl text-black font-sans font-medium leading-tight max-w-lg border-l-8 border-rh-green pl-6",
                    //   children:
                    //     "Can’t believe the sketches captured ‘Hoodbot’ better than any camera could… and somehow just as good as reality itself 😂",
                    // }),
                    (0, t.jsxs)("div", {
                      className:
                        "manga-border bg-white p-4 inline-flex flex-col sm:flex-row items-center gap-4",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex items-center gap-3",
                          children: [
                            (0, t.jsx)("span", {
                              className: "font-display text-lg",
                              children: "CA:",
                            }),
                            (0, t.jsx)("code", {
                              className:
                                "bg-rh-green/5 px-3 py-1 rounded font-mono text-sm",
                              children: "0x7b73ca9572623dfebee289623140db656cbf946e...",
                            }),
                          ],
                        }),
                        (0, t.jsx)("button", {
                          onClick: () => {
                            navigator.clipboard.writeText(
                              "0x7b73ca9572623dfebee289623140db656cbf946e"
                            ),
                              a(!0),
                              setTimeout(() => a(!1), 2e3);
                          },
                          className: "manga-btn w-full sm:w-auto",
                          children: e ? "COPIED!" : "COPY CA",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex flex-col sm:flex-row gap-6 pt-4",
                      children: [
                        (0, t.jsx)("a", {
                          href: "https://x.com/hoodbotcoin",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "manga-btn text-2xl py-4 px-10 text-center",
                          children: "Twitter",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "flex justify-center order-1 lg:order-2",
                  children: (0, t.jsxs)("div", {
                    className: "relative w-full max-w-lg",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "manga-panel p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300",
                        children: [
                          (0, t.jsx)("div", {
                            className: "bg-white p-4 border-2 border-black",
                            children: (0, t.jsx)("img", {
                              src: "/images/kururu-mascot-bw.png",
                              alt: "Kururu Mascot",
                              className: "w-full h-auto animate-float-manga",
                            }),
                          }),
                          (0, t.jsx)("div", {
                            className:
                              "absolute inset-0 bg-screentone pointer-events-none opacity-20",
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "absolute -top-8 -right-8 speech-bubble animate-bounce",
                            children: [
                              (0, t.jsx)("span", {
                                className: "font-display text-2xl text-black",
                                children: "Hoodbot",
                              }),
                              (0, t.jsx)("div", {
                                className: "speech-bubble-inner",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute -z-10 -bottom-6 -left-6 w-full h-full border-4 border-black bg-white",
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute -z-20 -bottom-12 -left-12 w-full h-full border-4 border-black bg-rh-green/5",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["Hero", () => a]);
  },
  20608,
  (e) => {
    "use strict";
    var t = e.i(14270);
    function s() {
      return (0, t.jsxs)("section", {
        id: "about",
        className:
          "py-24 bg-white relative overflow-hidden border-b-8 border-rh-green",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 bg-halftone opacity-5 pointer-events-none",
          }),
          (0, t.jsx)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: (0, t.jsxs)("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
              children: [
                (0, t.jsx)("div", {
                  className: "flex justify-center order-2 lg:order-1",
                  children: (0, t.jsxs)("div", {
                    className: "relative w-full max-w-lg",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "manga-panel p-2 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300",
                          children: [
                            (0, t.jsx)("div", {
                              className: "bg-white border-2 border-black",
                              children: (0, t.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">There is an ASCII robot with the text &quot;Exterminate all humans&quot; on the official Robinhood website hidden in the robots.txt URL. Cool hoodbot easter egg.<br><br>Check for yourself:<a href="https://t.co/BvEWup5gDl">https://t.co/BvEWup5gDl</a> <a href="https://t.co/DVvope3FGU">pic.twitter.com/DVvope3FGU</a></p>&mdash; Sgt. Wingflapper (@SgtWingflapper) <a href="https://x.com/SgtWingflapper/status/2075241621919068360?ref_src=twsrc%5Etfw">July 9, 2026</a></blockquote>',
                                },
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "absolute inset-0 bg-screentone pointer-events-none opacity-20",
                            }),
                          ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "absolute -z-10 -top-4 -right-4 w-full h-full border-4 border-black bg-rh-green",
                      }),
                    ],
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "space-y-8 order-1 lg:order-2",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsxs)("h2", {
                          className:
                            "text-6xl sm:text-7xl font-display text-black mb-8 leading-none tracking-tighter",
                          children: [
                            (0, t.jsx)("br", {}),
                            (0, t.jsx)("span", {
                              className: "bg-rh-green text-white px-4",
                              children: "About",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "space-y-6",
                          children: [
                            (0, t.jsx)("p", {
                              className:
                                "text-2xl text-black font-sans leading-tight border-l-8 border-rh-green pl-6",
                              children:
                                "There is an ASCII robot with the text 'Exterminate all humans' on the official Robinhood website hidden in the robots.txt URL. Cool hoodbot easter egg.",
                            }),
                            // (0, t.jsxs)("div", {
                            //   className:
                            //     "speech-bubble relative font-sans text-lg italic",
                            //   children: [
                            //     '"Ku-ku-ku! Why play by the rules when you can rewrite them?"',
                            //     (0, t.jsx)("div", {
                            //       className: "speech-bubble-inner",
                            //     }),
                            //   ],
                            // }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "grid grid-cols-2 gap-6 pt-8",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "manga-border-sm bg-white p-6 hover:translate-x-1 hover:translate-y-1 transition-all",
                          children: [
                            (0, t.jsx)("div", {
                              className: "font-display text-3xl text-black",
                              children: "Burned",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "font-sans text-sm font-bold uppercase tracking-widest text-black/60",
                              children: "LP IS Burned",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "manga-border-sm bg-rh-green p-6 hover:-translate-x-1 hover:-translate-y-1 transition-all",
                          children: [
                            (0, t.jsx)("div", {
                              className: "font-display text-3xl text-white",
                              children: "1 Billion",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "font-sans text-sm font-bold uppercase tracking-widest text-white/60",
                              children: "TOTAL SUPPLY",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["About", () => s]);
  },
  3272,
  (e) => {
    "use strict";
    var t = e.i(14270),
      r = e.i(5034);
    function s() {
      (0, r.useEffect)(() => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        } else {
          window.twttr = window.twttr || {};
          window.twttr._e = window.twttr._e || [];
          window.twttr.ready = function(f) { window.twttr._e.push(f); };
          window.twttr.ready(function(twttr) { twttr.widgets.load(); });
        }
      }, []);
      return (0, t.jsxs)("section", {
        id: "tokenomics",
        className: "py-24 bg-white border-b-8 border-rh-green relative",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 bg-halftone opacity-5 pointer-events-none",
          }),
          (0, t.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, t.jsxs)("div", {
                className: "text-center mb-20",
                children: [
                  (0, t.jsxs)("h2", {
                    className:
                      "text-7xl sm:text-8xl font-display text-black mb-4 tracking-tighter leading-none",
                    children: [
                      // "THE ",
                      (0, t.jsx)("span", {
                        className: "bg-rh-green text-white px-4",
                        children: "Tokenomics",
                      }),
                    ],
                  }),
                  // (0, t.jsx)("p", {
                  //   className:
                  //     "text-2xl text-black font-sans font-medium max-w-2xl mx-auto border-t-4 border-rh-green pt-4 inline-block",
                  //   children:
                  //     "Hacked and optimized for maximum chaos. Here's how the $BASEDLON kingdom is built.",
                  // }),
                ],
              }),
              (0, t.jsxs)("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24",
                children: [
                  (0, t.jsx)("div", {
                    className: "flex justify-center",
                    children: (0, t.jsxs)("div", {
                      className: "relative w-full max-w-lg",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "manga-panel p-2 transform rotate-2 hover:rotate-0 transition-transform",
                          children: [
                            (0, t.jsx)("div", {
                              className: "bg-white border-2 border-black",
                              children: (0, t.jsx)("img", {
                                src: "/images/kururu-lab-bw.png",
                                alt: "Kururu Lab",
                                className: "w-full h-auto",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "absolute inset-0 bg-screentone pointer-events-none opacity-20",
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute -z-10 -bottom-6 -right-6 w-full h-full border-4 border-black bg-rh-green",
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-8",
                    children: (0, t.jsxs)("div", {
                      className:
                        "manga-border bg-white p-8 group hover:bg-rh-green transition-colors duration-300",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "font-display text-5xl mb-2 text-black group-hover:text-white",
                          children: "1 Billion",
                        }),
                        (0, t.jsx)("h3", {
                          className:
                            "font-display text-2xl mb-2 text-black group-hover:text-white underline decoration-4",
                          children: "Total Supply",
                        }),
                        // (0, t.jsx)("p", {
                        //   className:
                        //     "font-sans text-black group-hover:text-white font-medium",
                        //   children: "Every single one hacked into existence.",
                        // }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                  (0, t.jsxs)("div", {
                    className:
                      "manga-border-sm bg-white p-10 text-center hover:-translate-y-2 transition-transform",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-6xl mb-6 grayscale",
                        children: "🔒",
                      }),
                      (0, t.jsx)("h3", {
                        className: "font-display text-3xl mb-4 text-black",
                        children: "LP tokens",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "font-sans text-black font-medium leading-tight",
                        children: "Burned",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "manga-border-sm bg-rh-green p-10 text-center hover:-translate-y-2 transition-transform group",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-6xl mb-6 grayscale brightness-200",
                        children: "🕵️",
                      }),
                      (0, t.jsx)("h3", {
                        className: "font-display text-3xl mb-4 text-white",
                        children: "Contract",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "font-sans text-white font-medium leading-tight",
                        children: "Renounced",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "manga-border-sm bg-white p-10 text-center hover:-translate-y-2 transition-transform",
                    children: [
                      (0, t.jsx)("div", {
                        className: "text-6xl mb-6 grayscale",
                        children: "🐸",
                      }),
                      (0, t.jsx)("h3", {
                        className: "font-display text-3xl mb-4 text-black",
                        children: "TAX",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "font-sans text-black font-medium leading-tight",
                        children: "0/0",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    e.s(["Tokenomics", () => s]);
  },
  70144,
  (e) => {
    "use strict";
    var t = e.i(14270),
      s = e.i(5034);
    function a() {
      let [e, a] = (0, s.useState)(!1);
      // return (0, t.jsxs)("section", {
      //   id: "get-ready",
      //   className:
      //     "py-24 bg-white relative overflow-hidden border-b-8 border-rh-green",
      //   children: [
      //     (0, t.jsx)("div", {
      //       className:
      //         "absolute inset-0 bg-halftone opacity-5 pointer-events-none",
      //     }),
      //     (0, t.jsx)("div", {
      //       className: "absolute inset-0 pointer-events-none overflow-hidden",
      //       children: (0, t.jsx)("div", {
      //         className:
      //           "absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(0,0,0,0.05)_80px,rgba(0,0,0,0.05)_81px)]",
      //       }),
      //     }),
      //     // (0, t.jsxs)("div", {
      //     //   className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      //     //   children: [
      //     //     // (0, t.jsxs)("div", {
      //     //     //   className: "text-center mb-16 px-4",
      //     //     //   children: [
      //     //     //     (0, t.jsxs)("h2", {
      //     //     //       className:
      //     //     //         "text-7xl sm:text-8xl lg:text-9xl font-display text-black mb-4 tracking-tighter leading-none transform rotate-1",
      //     //     //       children: [
      //     //     //         "HACK THE ",
      //     //     //         (0, t.jsx)("span", {
      //     //     //           className: "bg-rh-green text-white px-6",
      //     //     //           children: "MOON!",
      //     //     //         }),
      //     //     //       ],
      //     //     //     }),
      //     //     //     (0, t.jsx)("p", {
      //     //     //       className:
      //     //     //         "text-2xl text-black font-sans font-bold uppercase tracking-widest border-b-4 border-rh-green pb-4 inline-block",
      //     //     //       children: "The lab is ready, the code is compiled.",
      //     //     //     }),
      //     //     //   ],
      //     //     // }),
      //     //     (0, t.jsxs)("div", {
      //     //       className:
      //     //         "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24",
      //     //       children: [
      //     //         (0, t.jsx)("div", {
      //     //           className: "flex justify-center order-2 lg:order-1",
      //     //           children: (0, t.jsxs)("div", {
      //     //             className: "relative w-full max-w-lg",
      //     //             children: [
      //     //               (0, t.jsxs)("div", {
      //     //                 className:
      //     //                   "manga-panel p-2 transform rotate-[-3deg] hover:rotate-0 transition-transform",
      //     //                 children: [
      //     //                   (0, t.jsx)("div", {
      //     //                     className: "bg-white border-2 border-black",
      //     //                     children: (0, t.jsx)("img", {
      //     //                       src: "/images/kururu-hacker-bw.png",
      //     //                       alt: "Kururu Hacking",
      //     //                       className: "w-full h-auto",
      //     //                     }),
      //     //                   }),
      //     //                   (0, t.jsx)("div", {
      //     //                     className:
      //     //                       "absolute inset-0 bg-screentone pointer-events-none opacity-20",
      //     //                   }),
      //     //                 ],
      //     //               }),
      //     //               (0, t.jsx)("div", {
      //     //                 className:
      //     //                   "absolute -z-10 -bottom-6 -left-6 w-full h-full border-4 border-black bg-rh-green",
      //     //               }),
      //     //             ],
      //     //           }),
      //     //         }),
      //     //         (0, t.jsxs)("div", {
      //     //           className: "order-1 lg:order-2 space-y-8",
      //     //           children: [
      //     //             (0, t.jsxs)("div", {
      //     //               className: "manga-border bg-white p-10 space-y-8",
      //     //               children: [
      //     //                 (0, t.jsxs)("div", {
      //     //                   className: "space-y-4",
      //     //                   children: [
      //     //                     (0, t.jsx)("h3", {
      //     //                       className:
      //     //                         "font-display text-4xl text-black underline decoration-4",
      //     //                       children: "CA DATA:",
      //     //                     }),
      //     //                     (0, t.jsxs)("div", {
      //     //                       className:
      //     //                         "flex flex-col sm:flex-row items-center gap-4",
      //     //                       children: [
      //     //                         (0, t.jsx)("code", {
      //     //                           className:
      //     //                             "bg-rh-green text-white p-3 rounded font-mono text-sm break-all flex-1 border-2 border-black",
      //     //                           children:
      //     //                             "0x7b73ca9572623dfebee289623140db656cbf946e",
      //     //                         }),
      //     //                         (0, t.jsx)("button", {
      //     //                           onClick: () => {
      //     //                             navigator.clipboard.writeText(
      //     //                               "0x7b73ca9572623dfebee289623140db656cbf946e"
      //     //                             ),
      //     //                               a(!0),
      //     //                               setTimeout(() => a(!1), 2e3);
      //     //                           },
      //     //                           className: "manga-btn w-full sm:w-auto",
      //     //                           children: e ? "COPIED!" : "COPY",
      //     //                         }),
      //     //                       ],
      //     //                     }),
      //     //                   ],
      //     //                 }),
      //     //                 (0, t.jsxs)("div", {
      //     //                   className: "space-y-6",
      //     //                   children: [
      //     //                     (0, t.jsxs)("div", {
      //     //                       className:
      //     //                         "flex items-center gap-6 border-b-2 border-black/10 pb-4",
      //     //                       children: [
      //     //                         (0, t.jsx)("div", {
      //     //                           className:
      //     //                             "bg-rh-green text-white w-12 h-12 flex items-center justify-center font-display text-2xl transform -rotate-12",
      //     //                           children: "★",
      //     //                         }),
      //     //                         (0, t.jsxs)("div", {
      //     //                           children: [
      //     //                             (0, t.jsx)("p", {
      //     //                               className:
      //     //                                 "font-display text-2xl text-black",
      //     //                               children: "HACKER PROOF",
      //     //                             }),
      //     //                             (0, t.jsx)("p", {
      //     //                               className:
      //     //                                 "font-sans text-black/60 font-medium",
      //     //                               children:
      //     //                                 "Audited by the Sergeant Major himself.",
      //     //                             }),
      //     //                           ],
      //     //                         }),
      //     //                       ],
      //     //                     }),
      //     //                     (0, t.jsxs)("div", {
      //     //                       className: "flex items-center gap-6",
      //     //                       children: [
      //     //                         (0, t.jsx)("div", {
      //     //                           className:
      //     //                             "bg-white text-black border-2 border-black w-12 h-12 flex items-center justify-center font-display text-2xl transform rotate-12",
      //     //                           children: "★",
      //     //                         }),
      //     //                         (0, t.jsxs)("div", {
      //     //                           children: [
      //     //                             (0, t.jsx)("p", {
      //     //                               className:
      //     //                                 "font-display text-2xl text-black",
      //     //                               children: "LIQUIDITY LOCKED",
      //     //                             }),
      //     //                             (0, t.jsx)("p", {
      //     //                               className:
      //     //                                 "font-sans text-black/60 font-medium",
      //     //                               children:
      //     //                                 "Kururu holds the keys forever.",
      //     //                             }),
      //     //                           ],
      //     //                         }),
      //     //                       ],
      //     //                     }),
      //     //                   ],
      //     //                 }),
      //     //               ],
      //     //             }),
      //     //             (0, t.jsxs)("div", {
      //     //               className:
      //     //                 "manga-border bg-rh-green p-8 text-white space-y-6",
      //     //               children: [
      //     //                 (0, t.jsx)("h4", {
      //     //                   className: "font-display text-3xl",
      //     //                   children: "JOIN THE SQUAD",
      //     //                 }),
      //     //                 (0, t.jsxs)("div", {
      //     //                   className: "flex flex-col sm:flex-row gap-6",
      //     //                   children: [
      //     //                     (0, t.jsx)("a", {
      //     //                       href: "https://t.me/elunmeskoneth",
      //     //                       className:
      //     //                         "manga-btn bg-white text-black flex-1 text-center py-4",
      //     //                       children: "Telegram",
      //     //                     }),
      //     //                     (0, t.jsx)("a", {
      //     //                       href: "https://x.com/hoodbotcoin",
      //     //                       className:
      //     //                         "manga-btn bg-white text-black flex-1 text-center py-4",
      //     //                       children: "Twitter",
      //     //                     }),
      //     //                   ],
      //     //                 }),
      //     //               ],
      //     //             }),
      //     //           ],
      //     //         }),
      //     //       ],
      //     //     }),
      //     //     // (0, t.jsxs)("div", {
      //     //     //   className: "grid grid-cols-1 md:grid-cols-3 gap-8 pb-12",
      //     //     //   children: [
      //     //     //     (0, t.jsxs)("div", {
      //     //     //       className:
      //     //     //         "manga-panel p-8 text-center hover:bg-rh-green group transition-colors duration-300",
      //     //     //       children: [
      //     //     //         (0, t.jsx)("div", {
      //     //     //           className: "text-6xl mb-6 grayscale group-hover:invert",
      //     //     //           children: "🌀",
      //     //     //         }),
      //     //     //         (0, t.jsx)("h3", {
      //     //     //           className:
      //     //     //             "font-display text-3xl mb-4 text-black group-hover:text-white",
      //     //     //           children: "FAIR LAUNCH",
      //     //     //         }),
      //     //     //         (0, t.jsx)("p", {
      //     //     //           className:
      //     //     //             "font-sans text-black/60 group-hover:text-white/60 font-medium italic",
      //     //     //           children: "Zero logic, zero team tokens, 100% chaos.",
      //     //     //         }),
      //     //     //       ],
      //     //     //     }),
      //     //     //     (0, t.jsxs)("div", {
      //     //     //       className:
      //     //     //         "manga-panel p-8 text-center hover:bg-rh-green group transition-colors duration-300 transform -rotate-1",
      //     //     //       children: [
      //     //     //         (0, t.jsx)("div", {
      //     //     //           className: "text-6xl mb-6 grayscale group-hover:invert",
      //     //     //           children: "🚀",
      //     //     //         }),
      //     //     //         (0, t.jsx)("h3", {
      //     //     //           className:
      //     //     //             "font-display text-3xl mb-4 text-black group-hover:text-white",
      //     //     //           children: "MOONBOUND",
      //     //     //         }),
      //     //     //         (0, t.jsx)("p", {
      //     //     //           className:
      //     //     //             "font-sans text-black/60 group-hover:text-white/60 font-medium italic",
      //     //     //           children: "Hacking the moon path.",
      //     //     //         }),
      //     //     //       ],
      //     //     //     }),
      //     //     //     (0, t.jsxs)("div", {
      //     //     //       className:
      //     //     //         "manga-panel p-8 text-center hover:bg-rh-green group transition-colors duration-300 transform rotate-1",
      //     //     //       children: [
      //     //     //         (0, t.jsx)("div", {
      //     //     //           className: "text-6xl mb-6 grayscale group-hover:invert",
      //     //     //           children: "🛸",
      //     //     //         }),
      //     //     //         (0, t.jsx)("h3", {
      //     //     //           className:
      //     //     //             "font-display text-3xl mb-4 text-black group-hover:text-white",
      //     //     //           children: "CHAOS GAINS",
      //     //     //         }),
      //     //     //         (0, t.jsx)("p", {
      //     //     //           className:
      //     //     //             "font-sans text-black/60 group-hover:text-white/60 font-medium italic",
      //     //     //           children: "The wildest ride in the KURURU kingdom.",
      //     //     //         }),
      //     //     //       ],
      //     //     //     }),
      //     //     //   ],
      //     //     // }),
      //     //   ],
      //     // }),
      //   ],
      // });
    }
    e.s(["GetReady", () => a]);
  },
  25286,
  (e) => {
    "use strict";
    var t = e.i(14270);
    function s() {
      // return (0, t.jsxs)("section", {
      //   id: "moon-mission",
      //   className:
      //     "py-24 bg-white relative overflow-hidden border-b-8 border-rh-green",
      //   // children: [
      //   //   (0, t.jsx)("div", {
      //   //     className:
      //   //       "absolute inset-0 bg-halftone opacity-5 pointer-events-none",
      //   //   }),
      //   //   (0, t.jsx)("div", {
      //   //     className: "absolute inset-0 pointer-events-none overflow-hidden",
      //   //     children: (0, t.jsx)("div", {
      //   //       className:
      //   //         "absolute top-0 right-0 w-[800px] h-full bg-[repeating-linear-gradient(135deg,black,black_1px,transparent_1px,transparent_60px)] opacity-5",
      //   //     }),
      //   //   }),
      //   //   (0, t.jsxs)("div", {
      //   //     className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      //   //     children: [
      //   //       (0, t.jsxs)("div", {
      //   //         className: "text-center mb-20 px-4",
      //   //         children: [
      //   //           (0, t.jsxs)("h2", {
      //   //             className:
      //   //               "text-7xl sm:text-8xl lg:text-9xl font-display text-black mb-4 tracking-tighter leading-none transform -rotate-1",
      //   //             children: [
      //   //               "DESTINATION: ",
      //   //               (0, t.jsx)("span", {
      //   //                 className: "bg-rh-green text-white px-4",
      //   //                 children: "MOON",
      //   //               }),
      //   //             ],
      //   //           }),
      //   //           (0, t.jsx)("p", {
      //   //             className:
      //   //               "text-2xl text-black font-sans font-bold italic border-l-4 border-black pl-4 inline-block",
      //   //             children:
      //   //               "\"We're not just going to the moon, we're mastering it.\"",
      //   //           }),
      //   //         ],
      //   //       }),
      //   //       (0, t.jsx)("div", {
      //   //         className: "flex justify-center mb-24",
      //   //         children: (0, t.jsxs)("div", {
      //   //           className: "relative w-full max-w-2xl",
      //   //           children: [
      //   //             (0, t.jsxs)("div", {
      //   //               className:
      //   //                 "manga-panel p-2 transform rotate-1 hover:rotate-0 transition-transform",
      //   //               children: [
      //   //                 (0, t.jsx)("div", {
      //   //                   className:
      //   //                     "bg-white border-2 border-black overflow-hidden",
      //   //                   children: (0, t.jsx)("img", {
      //   //                     src: "/images/kururu-rocket-bw.png",
      //   //                     alt: "Rocket Kururu",
      //   //                     className: "w-full h-auto animate-float-manga",
      //   //                   }),
      //   //                 }),
      //   //                 (0, t.jsx)("div", {
      //   //                   className:
      //   //                     "absolute inset-0 bg-screentone pointer-events-none opacity-20",
      //   //                 }),
      //   //                 (0, t.jsx)("div", {
      //   //                   className:
      //   //                     "absolute top-6 left-6 bg-rh-green text-white px-6 py-2 font-display text-4xl transform -rotate-12 outline outline-4 outline-black offset-4",
      //   //                   children: "VRRRROOOM!",
      //   //                 }),
      //   //               ],
      //   //             }),
      //   //             (0, t.jsx)("div", {
      //   //               className:
      //   //                 "absolute -z-10 -bottom-8 -left-8 w-full h-full border-4 border-black bg-rh-green/10",
      //   //             }),
      //   //             (0, t.jsx)("div", {
      //   //               className:
      //   //                 "absolute -z-20 -bottom-16 -left-16 w-full h-full border-4 border-black bg-white",
      //   //             }),
      //   //           ],
      //   //         }),
      //   //       }),
      //   //       (0, t.jsxs)("div", {
      //   //         className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-24",
      //   //         children: [
      //   //           (0, t.jsxs)("div", {
      //   //             className:
      //   //               "manga-panel p-8 bg-white group hover:bg-rh-green transition-colors duration-300 transform -rotate-2",
      //   //             children: [
      //   //               (0, t.jsx)("div", {
      //   //                 className: "text-5xl mb-6 grayscale group-hover:invert",
      //   //                 children: "🎯",
      //   //               }),
      //   //               (0, t.jsx)("h3", {
      //   //                 className:
      //   //                   "font-display text-3xl mb-4 text-black group-hover:text-white underline decoration-4",
      //   //                 children: "THE HACK",
      //   //               }),
      //   //               (0, t.jsx)("p", {
      //   //                 className:
      //   //                   "font-sans text-black group-hover:text-white font-medium leading-tight",
      //   //                 children:
      //   //                   "Kururu has found a backdoor to the moon. No logic, no rules, just pure chaotic energy powering the engines.",
      //   //               }),
      //   //             ],
      //   //           }),
      //   //           (0, t.jsxs)("div", {
      //   //             className:
      //   //               "manga-panel p-8 bg-white group hover:bg-rh-green transition-colors duration-300 transform rotate-1",
      //   //             children: [
      //   //               (0, t.jsx)("div", {
      //   //                 className: "text-5xl mb-6 grayscale group-hover:invert",
      //   //                 children: "💎",
      //   //               }),
      //   //               (0, t.jsx)("h3", {
      //   //                 className:
      //   //                   "font-display text-3xl mb-4 text-black group-hover:text-white underline decoration-4",
      //   //                 children: "CHAOS PAWS",
      //   //               }),
      //   //               (0, t.jsx)("p", {
      //   //                 className:
      //   //                   "font-sans text-black group-hover:text-white font-medium leading-tight",
      //   //                 children:
      //   //                   "Diamond hands are boring. We have chaos paws. We hold because we love the mischief.",
      //   //               }),
      //   //             ],
      //   //           }),
      //   //           (0, t.jsxs)("div", {
      //   //             className:
      //   //               "manga-panel p-8 bg-white group hover:bg-rh-green transition-colors duration-300 transform rotate-2",
      //   //             children: [
      //   //               (0, t.jsx)("div", {
      //   //                 className: "text-5xl mb-6 grayscale group-hover:invert",
      //   //                 children: "🛸",
      //   //               }),
      //   //               (0, t.jsx)("h3", {
      //   //                 className:
      //   //                   "font-display text-3xl mb-4 text-black group-hover:text-white underline decoration-4",
      //   //                 children: "RECURRING",
      //   //               }),
      //   //               (0, t.jsx)("p", {
      //   //                 className:
      //   //                   "font-sans text-black group-hover:text-white font-medium leading-tight",
      //   //                 children:
      //   //                   "Once we land on the moon, we hack the next planet. The mission never ends!",
      //   //               }),
      //   //             ],
      //   //           }),
      //   //         ],
      //   //       }),
      //   //       (0, t.jsxs)("div", {
      //   //         className:
      //   //           "manga-border bg-rh-green p-12 text-white text-center transform -rotate-1 relative overflow-hidden",
      //   //         children: [
      //   //           (0, t.jsx)("div", {
      //   //             className:
      //   //               "absolute inset-0 bg-screentone opacity-10 pointer-events-none",
      //   //           }),
      //   //           (0, t.jsxs)("div", {
      //   //             className: "relative z-10 max-w-3xl mx-auto space-y-8",
      //   //             children: [
      //   //               (0, t.jsxs)("h3", {
      //   //                 className: "text-5xl sm:text-6xl font-display mb-4",
      //   //                 children: [
      //   //                   "READY FOR THE ",
      //   //                   (0, t.jsx)("span", {
      //   //                     className: "text-black bg-white px-4",
      //   //                     children: "LAB?",
      //   //                   }),
      //   //                   "🧪",
      //   //                 ],
      //   //               }),
      //   //               (0, t.jsx)("p", {
      //   //                 className:
      //   //                   "text-2xl font-sans font-medium leading-tight italic",
      //   //                 children:
      //   //                   '"This isn\'t another moon mission. This is a hostile takeover of logic."',
      //   //               }),
      //   //               (0, t.jsxs)("div", {
      //   //                 className:
      //   //                   "flex flex-col sm:flex-row gap-6 justify-center pt-4",
      //   //                 children: [
      //   //                   (0, t.jsx)("a", {
      //   //                     href: "https://t.me/elunmeskoneth",
      //   //                     className:
      //   //                       "manga-btn bg-white text-black text-2xl py-5 px-12",
      //   //                     children: "ENTER LAB",
      //   //                   }),
      //   //                   (0, t.jsx)("a", {
      //   //                     href: "https://x.com/hoodbotcoin",
      //   //                     className:
      //   //                       "manga-btn bg-white text-black text-2xl py-5 px-12",
      //   //                     children: "Twitter",
      //   //                   }),
      //   //                 ],
      //   //               }),
      //   //             ],
      //   //           }),
      //   //         ],
      //   //       }),
      //   //     ],
      //   //   }),
      //   // ],
      // });
    }
    e.s(["MoonMission", () => s]);
  },
  76841,
  (e) => {
    "use strict";
    var t = e.i(14270);
    function s() {
      return (0, t.jsxs)("footer", {
        className: "relative bg-white border-t-8 border-rh-green overflow-hidden",
        children: [
          (0, t.jsx)("div", {
            className:
              "absolute inset-0 bg-halftone opacity-5 pointer-events-none",
          }),

          (0, t.jsx)("div", {
            className: "relative pt-12 pb-12 border-t-4 border-rh-green font-sans",
            children: (0, t.jsxs)("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                (0, t.jsxs)("div", {
                  className: "grid grid-cols-1 md:grid-cols-3 gap-12 mb-12",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "font-display text-5xl text-black transform -rotate-2",
                          children: "Hoodbot",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, t.jsx)("h4", {
                          className: "font-display text-2xl text-black",
                          children: "THE LAB",
                        }),
                        (0, t.jsxs)("ul", {
                          className:
                            "space-y-2 font-bold uppercase tracking-widest text-sm",
                          children: [
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)("a", {
                                href: "#about",
                                className: "hover:line-through",
                                children: "About",
                              }),
                            }),
                            (0, t.jsx)("li", {
                              children: (0, t.jsx)("a", {
                                href: "#tokenomics",
                                className: "hover:line-through",
                                children: "Tokenomics",
                              }),
                            }),
                            // (0, t.jsx)("li", {
                            //   children: (0, t.jsx)("a", {
                            //     href: "#moon-mission",
                            //     className: "hover:line-through",
                            //     children: "Mission",
                            //   }),
                            // }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, t.jsx)("h4", {
                          className: "font-display text-2xl text-black",
                          children: "Community",
                        }),
                        (0, t.jsxs)("div", {
                          className: "flex gap-4",
                          children: [
                            (0, t.jsx)("a", {
                              href: "https://x.com/hoodbotcoin",
                              className:
                                "manga-btn w-12 h-12 p-0 flex items-center justify-center",
                              "aria-label": "Twitter",
                              children: (0, t.jsx)("svg", {
                                className: "w-6 h-6 shrink-0",
                                fill: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0, t.jsx)("path", {
                                  d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", { className: "h-2 bg-rh-green mb-12" }),
                (0, t.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row items-center justify-between gap-12 text-black text-sm",
                  children: [
                    (0, t.jsx)("div", {
                      children: (0, t.jsx)("p", {
                        className: "font-bold underline decoration-2",
                        children:
                          "© 2026 Hoodbot Token. ALL RIGHTS RESERVED.",
                      }),
                    }),
                    // (0, t.jsxs)("div", {
                    //   className:
                    //     "manga-border-sm bg-white p-6 max-w-lg text-center transform rotate-1",
                    //   children: [
                    //     (0, t.jsx)("p", {
                    //       className: "font-display text-xl mb-2 italic",
                    //       children: "DISCLAIMER!",
                    //     }),
                    //     (0, t.jsx)("p", {
                    //       className:
                    //         "text-xs font-bold leading-tight uppercase tracking-tight",
                    //       children:
                    //         "$BASEDLON is a meme coin for chaotic entertainment only. It has zero intrinsic value and is purely speculative. Don't ape your life savings into this. Trade with chaos, but trade responsibly.",
                    //     }),
                    //   ],
                    // }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["Footer", () => s]);
  },
]);
