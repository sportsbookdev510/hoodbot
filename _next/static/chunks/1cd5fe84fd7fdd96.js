(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  53348,
  (e) => {
    "use strict";
    var t = e.i(14270),
      l = e.i(5034);
    function s({ error: e, reset: s }) {
      return (
        (0, l.useEffect)(() => {
          console.error("Global error caught:", e);
        }, [e]),
        (0, t.jsx)("html", {
          lang: "en",
          children: (0, t.jsx)("body", {
            className: "font-meme antialiased bg-kururu-navy text-white",
            children: (0, t.jsxs)("div", {
              className:
                "min-h-screen flex items-center justify-center px-4 relative overflow-hidden",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "absolute inset-0 overflow-hidden pointer-events-none",
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
                          className: "text-8xl",
                          children: "🛸💥🌀",
                        }),
                        (0, t.jsx)("h1", {
                          className:
                            "text-5xl sm:text-6xl font-bold text-kururu-yellow drop-shadow-[5px_5px_0px_rgba(217,95,61,1)]",
                          children: "CHAOS CORE BREACH! 😱",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "space-y-4",
                      children: [
                        (0, t.jsx)("p", {
                          className:
                            "text-xl sm:text-2xl text-kururu-silver leading-relaxed",
                          children:
                            "Ku-ku-ku! The lab's mainframe just melted. Kururu is currently trying to bypass the failure!",
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
                        "flex flex-col sm:flex-row gap-6 justify-center pt-4",
                      children: [
                        (0, t.jsx)("button", {
                          onClick: s,
                          className:
                            "px-10 py-5 bg-kururu-yellow text-kururu-navy font-bold text-xl rounded-full hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(217,95,61,1)]",
                          children: "🔄 REBOOT CORE",
                        }),
                        (0, t.jsx)("a", {
                          href: "/",
                          className:
                            "px-10 py-5 bg-kururu-orange text-white font-bold text-xl rounded-full hover:scale-110 hover:-rotate-2 transition-all duration-300 text-center shadow-[6px_6px_0px_0px_rgba(32,45,69,1)]",
                          children: "🏠 ABANDON LAB",
                        }),
                      ],
                    }),
                    (0, t.jsx)("p", {
                      className:
                        "text-lg text-kururu-yellow font-bold pt-4 italic",
                      children: "✨ Nothing a little chaos can't fix.",
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      );
    }
    e.s(["default", () => s]);
  },
]);
