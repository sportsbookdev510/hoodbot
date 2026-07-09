(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  20570,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  44765,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      assign: function () {
        return i;
      },
      searchParamsToUrlQuery: function () {
        return u;
      },
      urlQueryToSearchParams: function () {
        return l;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    function u(e) {
      let t = {};
      for (let [r, n] of e.entries()) {
        let e = t[r];
        void 0 === e
          ? (t[r] = n)
          : Array.isArray(e)
          ? e.push(n)
          : (t[r] = [e, n]);
      }
      return t;
    }
    function a(e) {
      return "string" == typeof e
        ? e
        : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
        ? ""
        : String(e);
    }
    function l(e) {
      let t = new URLSearchParams();
      for (let [r, n] of Object.entries(e))
        if (Array.isArray(n)) for (let e of n) t.append(r, a(e));
        else t.set(r, a(n));
      return t;
    }
    function i(e, ...t) {
      for (let r of t) {
        for (let t of r.keys()) e.delete(t);
        for (let [t, n] of r.entries()) e.append(t, n);
      }
      return e;
    }
  },
  56135,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      formatUrl: function () {
        return l;
      },
      formatWithValidation: function () {
        return s;
      },
      urlObjectKeys: function () {
        return i;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(44066)._(e.r(44765)),
      a = /https?|ftp|gopher|file/;
    function l(e) {
      let { auth: t, hostname: r } = e,
        n = e.protocol || "",
        o = e.pathname || "",
        l = e.hash || "",
        i = e.query || "",
        s = !1;
      (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
        e.host
          ? (s = t + e.host)
          : r &&
            ((s = t + (~r.indexOf(":") ? `[${r}]` : r)),
            e.port && (s += ":" + e.port)),
        i && "object" == typeof i && (i = String(u.urlQueryToSearchParams(i)));
      let c = e.search || (i && `?${i}`) || "";
      return (
        n && !n.endsWith(":") && (n += ":"),
        e.slashes || ((!n || a.test(n)) && !1 !== s)
          ? ((s = "//" + (s || "")), o && "/" !== o[0] && (o = "/" + o))
          : s || (s = ""),
        l && "#" !== l[0] && (l = "#" + l),
        c && "?" !== c[0] && (c = "?" + c),
        (o = o.replace(/[?#]/g, encodeURIComponent)),
        (c = c.replace("#", "%23")),
        `${n}${s}${o}${c}${l}`
      );
    }
    let i = [
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
    function s(e) {
      return l(e);
    }
  },
  27929,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let n = e.r(5034);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else e && (r.current = u(e, n)), t && (o.current = u(t, n));
        },
        [e, t]
      );
    }
    function u(e, t) {
      if ("function" != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return "function" == typeof r ? r : () => e(null);
      }
    }
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  6755,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      DecodeError: function () {
        return g;
      },
      MiddlewareNotFoundError: function () {
        return j;
      },
      MissingStaticPage: function () {
        return v;
      },
      NormalizeError: function () {
        return x;
      },
      PageNotFoundError: function () {
        return b;
      },
      SP: function () {
        return y;
      },
      ST: function () {
        return m;
      },
      WEB_VITALS: function () {
        return u;
      },
      execOnce: function () {
        return a;
      },
      getDisplayName: function () {
        return f;
      },
      getLocationOrigin: function () {
        return s;
      },
      getURL: function () {
        return c;
      },
      isAbsoluteUrl: function () {
        return i;
      },
      isResSent: function () {
        return d;
      },
      loadGetInitialProps: function () {
        return h;
      },
      normalizeRepeatedSlashes: function () {
        return p;
      },
      stringifyError: function () {
        return _;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
    function a(e) {
      let t,
        r = !1;
      return (...n) => (r || ((r = !0), (t = e(...n))), t);
    }
    let l = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      i = (e) => l.test(e);
    function s() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return `${e}//${t}${r ? ":" + r : ""}`;
    }
    function c() {
      let { href: e } = window.location,
        t = s();
      return e.substring(t.length);
    }
    function f(e) {
      return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function p(e) {
      let t = e.split("?");
      return (
        t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
        (t[1] ? `?${t.slice(1).join("?")}` : "")
      );
    }
    async function h(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await h(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && d(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            `"${f(
              e
            )}.getInitialProps()" should resolve to an object. But found "${n}" instead.`
          ),
          "__NEXT_ERROR_CODE",
          { value: "E394", enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let y = "u" > typeof performance,
      m =
        y &&
        ["mark", "measure", "getEntriesByName"].every(
          (e) => "function" == typeof performance[e]
        );
    class g extends Error {}
    class x extends Error {}
    class b extends Error {
      constructor(e) {
        super(),
          (this.code = "ENOENT"),
          (this.name = "PageNotFoundError"),
          (this.message = `Cannot find module for page: ${e}`);
      }
    }
    class v extends Error {
      constructor(e, t) {
        super(),
          (this.message = `Failed to load static file for page: ${e} ${t}`);
      }
    }
    class j extends Error {
      constructor() {
        super(),
          (this.code = "ENOENT"),
          (this.message = "Cannot find the middleware module");
      }
    }
    function _(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  42826,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function () {
          return u;
        },
      });
    let n = e.r(6755),
      o = e.r(71910);
    function u(e) {
      if (!(0, n.isAbsoluteUrl)(e)) return !0;
      try {
        let t = (0, n.getLocationOrigin)(),
          r = new URL(e, t);
        return r.origin === t && (0, o.hasBasePath)(r.pathname);
      } catch (e) {
        return !1;
      }
    }
  },
  27979,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    let n = (e) => {};
  },
  12111,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var n = {
      default: function () {
        return g;
      },
      useLinkStatus: function () {
        return b;
      },
    };
    for (var o in n) Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
    let u = e.r(44066),
      a = e.r(14270),
      l = u._(e.r(5034)),
      i = e.r(56135),
      s = e.r(86812),
      c = e.r(27929),
      f = e.r(6755),
      d = e.r(27804);
    e.r(20570);
    let p = e.r(85781),
      h = e.r(42826),
      y = e.r(66834);
    function m(e) {
      return "string" == typeof e ? e : (0, i.formatUrl)(e);
    }
    function g(t) {
      var r;
      let n,
        o,
        u,
        [i, g] = (0, l.useOptimistic)(p.IDLE_LINK_STATUS),
        b = (0, l.useRef)(null),
        {
          href: v,
          as: j,
          children: _,
          prefetch: P = null,
          passHref: E,
          replace: O,
          shallow: N,
          scroll: w,
          onClick: T,
          onMouseEnter: S,
          onTouchStart: C,
          legacyBehavior: k = !1,
          onNavigate: R,
          ref: L,
          unstable_dynamicOnHover: A,
          ...M
        } = t;
      (n = _),
        k &&
          ("string" == typeof n || "number" == typeof n) &&
          (n = (0, a.jsx)("a", { children: n }));
      let I = l.default.useContext(s.AppRouterContext),
        U = !1 !== P,
        $ =
          !1 !== P
            ? null === (r = P) || "auto" === r
              ? y.FetchStrategy.PPR
              : y.FetchStrategy.Full
            : y.FetchStrategy.PPR,
        { href: D, as: B } = l.default.useMemo(() => {
          let e = m(v);
          return { href: e, as: j ? m(j) : e };
        }, [v, j]);
      if (k) {
        if (n?.$$typeof === Symbol.for("react.lazy"))
          throw Object.defineProperty(
            Error(
              "`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."
            ),
            "__NEXT_ERROR_CODE",
            { value: "E863", enumerable: !1, configurable: !0 }
          );
        o = l.default.Children.only(n);
      }
      let F = k ? o && "object" == typeof o && o.ref : L,
        K = l.default.useCallback(
          (e) => (
            null !== I &&
              (b.current = (0, p.mountLinkInstance)(e, D, I, $, U, g)),
            () => {
              b.current &&
                ((0, p.unmountLinkForCurrentNavigation)(b.current),
                (b.current = null)),
                (0, p.unmountPrefetchableInstance)(e);
            }
          ),
          [U, D, I, $, g]
        ),
        z = {
          ref: (0, c.useMergedRef)(K, F),
          onClick(t) {
            k || "function" != typeof T || T(t),
              k &&
                o.props &&
                "function" == typeof o.props.onClick &&
                o.props.onClick(t),
              !I ||
                t.defaultPrevented ||
                (function (t, r, n, o, u, a, i) {
                  if ("u" > typeof window) {
                    let s,
                      { nodeName: c } = t.currentTarget;
                    if (
                      ("A" === c.toUpperCase() &&
                        (((s = t.currentTarget.getAttribute("target")) &&
                          "_self" !== s) ||
                          t.metaKey ||
                          t.ctrlKey ||
                          t.shiftKey ||
                          t.altKey ||
                          (t.nativeEvent && 2 === t.nativeEvent.which))) ||
                      t.currentTarget.hasAttribute("download")
                    )
                      return;
                    if (!(0, h.isLocalURL)(r)) {
                      u && (t.preventDefault(), location.replace(r));
                      return;
                    }
                    if ((t.preventDefault(), i)) {
                      let e = !1;
                      if (
                        (i({
                          preventDefault: () => {
                            e = !0;
                          },
                        }),
                        e)
                      )
                        return;
                    }
                    let { dispatchNavigateAction: f } = e.r(93668);
                    l.default.startTransition(() => {
                      f(n || r, u ? "replace" : "push", a ?? !0, o.current);
                    });
                  }
                })(t, D, B, b, O, w, R);
          },
          onMouseEnter(e) {
            k || "function" != typeof S || S(e),
              k &&
                o.props &&
                "function" == typeof o.props.onMouseEnter &&
                o.props.onMouseEnter(e),
              I && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === A);
          },
          onTouchStart: function (e) {
            k || "function" != typeof C || C(e),
              k &&
                o.props &&
                "function" == typeof o.props.onTouchStart &&
                o.props.onTouchStart(e),
              I && U && (0, p.onNavigationIntent)(e.currentTarget, !0 === A);
          },
        };
      return (
        (0, f.isAbsoluteUrl)(B)
          ? (z.href = B)
          : (k && !E && ("a" !== o.type || "href" in o.props)) ||
            (z.href = (0, d.addBasePath)(B)),
        (u = k
          ? l.default.cloneElement(o, z)
          : (0, a.jsx)("a", { ...M, ...z, children: n })),
        (0, a.jsx)(x.Provider, { value: i, children: u })
      );
    }
    e.r(27979);
    let x = (0, l.createContext)(p.IDLE_LINK_STATUS),
      b = () => (0, l.useContext)(x);
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  8821,
  (e) => {
    "use strict";
    var t = e.i(14270),
      r = e.i(5034),
      n = e.i(12111);
    function o({ error: e, reset: o }) {
      return (
        (0, r.useEffect)(() => {
          console.error("Error caught by error boundary:", e);
        }, [e]),
        (0, t.jsxs)("div", {
          className:
            "min-h-screen bg-kururu-navy flex items-center justify-center px-4 relative overflow-hidden font-meme",
          children: [
            (0, t.jsxs)("div", {
              className: "absolute inset-0 overflow-hidden pointer-events-none",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute top-1/4 left-1/4 w-96 h-96 bg-kururu-orange/10 rounded-full blur-3xl animate-pulse",
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute bottom-1/4 right-1/4 w-96 h-96 bg-kururu-yellow/10 rounded-full blur-3xl animate-pulse",
                  style: { animationDelay: "1s" },
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className:
                "relative z-10 max-w-2xl mx-auto text-center space-y-8",
              children: [
                (0, t.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, t.jsx)("div", {
                      className: "text-8xl animate-in fade-in",
                      children: "🧪💥🌀",
                    }),
                    (0, t.jsx)("h1", {
                      className:
                        "text-5xl sm:text-6xl font-bold text-kururu-yellow drop-shadow-[5px_5px_0px_rgba(217,95,61,1)] animate-in fade-in",
                      style: { animationDelay: "0.1s" },
                      children: "LAB EXPLOSION! 😱",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "space-y-4 animate-in fade-in",
                  style: { animationDelay: "0.2s" },
                  children: [
                    (0, t.jsx)("p", {
                      className:
                        "text-xl sm:text-2xl text-kururu-silver leading-relaxed",
                      children:
                        "Ku-ku-ku! One of Kururu's experiments just blew up. The chaos levels are off the charts!",
                    }),
                    e.digest &&
                      (0, t.jsxs)("p", {
                        className: "text-sm text-kururu-orange font-mono",
                        children: ["Chaos ID: ", e.digest],
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row gap-6 justify-center pt-4 animate-in fade-in",
                  style: { animationDelay: "0.3s" },
                  children: [
                    (0, t.jsx)("button", {
                      onClick: o,
                      className:
                        "px-10 py-5 bg-kururu-yellow text-kururu-navy font-bold text-xl rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(217,95,61,1)]",
                      children: "🔄 RE-HACK SYSTEM",
                    }),
                    (0, t.jsx)(n.default, {
                      href: "/",
                      className:
                        "px-10 py-5 bg-kururu-orange text-white font-bold text-xl rounded-full hover:scale-110 hover:-rotate-2 transition-all duration-300 text-center shadow-[6px_6px_0px_0px_rgba(32,45,69,1)]",
                      children: "🏠 RETREAT TO LAB",
                    }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className:
                    "text-lg text-kururu-yellow font-bold pt-4 animate-in fade-in italic",
                  style: { animationDelay: "0.4s" },
                  children: "✨ Even an architect of chaos fails sometimes.",
                }),
              ],
            }),
          ],
        })
      );
    }
    e.s(["default", () => o]);
  },
]);
