import yn, { forwardRef as tn, createElement as yt, useState as S, useRef as Ke, useEffect as ve, useCallback as ut } from "react";
var Ye = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function En() {
  if ($t) return Se;
  $t = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function a(r, l, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), l.key !== void 0 && (i = "" + l.key), "key" in l) {
      s = {};
      for (var u in l)
        u !== "key" && (s[u] = l[u]);
    } else s = l;
    return l = s.ref, {
      $$typeof: o,
      type: r,
      key: i,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return Se.Fragment = e, Se.jsx = a, Se.jsxs = a, Se;
}
var Le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wt;
function Tn() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    function o(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === V ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case x:
          return "Fragment";
        case N:
          return "Profiler";
        case W:
          return "StrictMode";
        case O:
          return "Suspense";
        case ge:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case I:
            return "Portal";
          case K:
            return (c.displayName || "Context") + ".Provider";
          case $:
            return (c._context.displayName || "Context") + ".Consumer";
          case C:
            var g = c.render;
            return c = c.displayName, c || (c = g.displayName || g.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case _:
            return g = c.displayName || null, g !== null ? g : o(c.type) || "Memo";
          case B:
            g = c._payload, c = c._init;
            try {
              return o(c(g));
            } catch {
            }
        }
      return null;
    }
    function e(c) {
      return "" + c;
    }
    function a(c) {
      try {
        e(c);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var k = g.error, w = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return k.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          w
        ), e(c);
      }
    }
    function r(c) {
      if (c === x) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === B)
        return "<...>";
      try {
        var g = o(c);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var c = v.A;
      return c === null ? null : c.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(c) {
      if (D.call(c, "key")) {
        var g = Object.getOwnPropertyDescriptor(c, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function u(c, g) {
      function k() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: k,
        configurable: !0
      });
    }
    function f() {
      var c = o(this.type);
      return ee[c] || (ee[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, g, k, w, oe, A, ue, he) {
      return k = A.ref, c = {
        $$typeof: E,
        type: c,
        key: g,
        props: A,
        _owner: oe
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(c, "ref", { enumerable: !1, value: null }), c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(c, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(c, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: he
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function y(c, g, k, w, oe, A, ue, he) {
      var M = g.children;
      if (M !== void 0)
        if (w)
          if (j(M)) {
            for (w = 0; w < M.length; w++)
              b(M[w]);
            Object.freeze && Object.freeze(M);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(M);
      if (D.call(g, "key")) {
        M = o(c);
        var de = Object.keys(g).filter(function(Pe) {
          return Pe !== "key";
        });
        w = 0 < de.length ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}", ce[M + w] || (de = 0 < de.length ? "{" + de.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          w,
          M,
          de,
          M
        ), ce[M + w] = !0);
      }
      if (M = null, k !== void 0 && (a(k), M = "" + k), i(g) && (a(g.key), M = "" + g.key), "key" in g) {
        k = {};
        for (var be in g)
          be !== "key" && (k[be] = g[be]);
      } else k = g;
      return M && u(
        k,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        M,
        A,
        oe,
        l(),
        k,
        ue,
        he
      );
    }
    function b(c) {
      typeof c == "object" && c !== null && c.$$typeof === E && c._store && (c._store.validated = 1);
    }
    var R = yn, E = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), K = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), V = Symbol.for("react.client.reference"), v = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, j = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(c) {
        return c();
      }
    };
    var q, ee = {}, te = R["react-stack-bottom-frame"].bind(
      R,
      s
    )(), re = P(r(s)), ce = {};
    Le.Fragment = x, Le.jsx = function(c, g, k, w, oe) {
      var A = 1e4 > v.recentlyCreatedOwnerStacks++;
      return y(
        c,
        g,
        k,
        !1,
        w,
        oe,
        A ? Error("react-stack-top-frame") : te,
        A ? P(r(c)) : re
      );
    }, Le.jsxs = function(c, g, k, w, oe) {
      var A = 1e4 > v.recentlyCreatedOwnerStacks++;
      return y(
        c,
        g,
        k,
        !0,
        w,
        oe,
        A ? Error("react-stack-top-frame") : te,
        A ? P(r(c)) : re
      );
    };
  }()), Le;
}
var Gt;
function Nn() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Ye.exports = En() : Ye.exports = Tn()), Ye.exports;
}
var n = Nn();
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wn = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _n = (o) => o.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, a, r) => r ? r.toUpperCase() : a.toLowerCase()
), Yt = (o) => {
  const e = _n(o);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, nn = (...o) => o.filter((e, a, r) => !!e && e.trim() !== "" && r.indexOf(e) === a).join(" ").trim(), An = (o) => {
  for (const e in o)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rn = tn(
  ({
    color: o = "currentColor",
    size: e = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: r,
    className: l = "",
    children: s,
    iconNode: i,
    ...u
  }, f) => yt(
    "svg",
    {
      ref: f,
      ...vn,
      width: e,
      height: e,
      stroke: o,
      strokeWidth: r ? Number(a) * 24 / Number(e) : a,
      className: nn("lucide", l),
      ...!s && !An(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...i.map(([m, y]) => yt(m, y)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const F = (o, e) => {
  const a = tn(
    ({ className: r, ...l }, s) => yt(Rn, {
      ref: s,
      iconNode: e,
      className: nn(
        `lucide-${wn(Yt(o))}`,
        `lucide-${o}`,
        r
      ),
      ...l
    })
  );
  return a.displayName = Yt(o), a;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cn = [
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 18H5", key: "18s9l3" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], kn = F("align-center", Cn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }]
], Ln = F("align-justify", Sn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Mn = F("align-left", jn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = [
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 18H7", key: "1ygte8" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], In = F("align-right", On);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Pn = F("bold", Dn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ze = F("chevron-down", Hn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Un = F("image", zn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], $n = F("italic", Fn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Gn = F("link", Wn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
], Bn = F("list-ordered", Yn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], qn = F("list", Vn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  [
    "path",
    {
      d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
      key: "e79jfc"
    }
  ],
  ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
  ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
  ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
  ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
], Jn = F("palette", Xn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Kn = F("redo", Zn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], er = F("strikethrough", Qn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], nr = F("table", tr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], or = F("underline", rr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], ar = F("undo", sr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lr = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], ir = F("video", lr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Qe = F("x", cr), Be = (o, e, a) => {
  const r = window.getSelection();
  if (!r || r.rangeCount === 0 || !e.current) return;
  const l = r.getRangeAt(0);
  if (l.toString())
    try {
      const s = () => {
        let m = l.commonAncestorContainer;
        for (; m && m !== e.current; ) {
          if (m.nodeType === Node.ELEMENT_NODE) {
            const y = m;
            if (y.tagName.toLowerCase() === o.toLowerCase())
              return { isFormatted: !0, formatElement: y };
          }
          m = m.parentNode;
        }
        return { isFormatted: !1, formatElement: null };
      }, { isFormatted: i, formatElement: u } = s();
      let f = null;
      if (i && u) {
        const m = u.parentNode, y = document.createTextNode(u.textContent || "");
        m?.replaceChild(y, u), m?.normalize();
        const b = document.createRange();
        b.selectNodeContents(y), r.removeAllRanges(), r.addRange(b);
      } else {
        f = document.createElement(o);
        try {
          l.surroundContents(f);
          const m = document.createRange();
          m.selectNodeContents(f), r.removeAllRanges(), r.addRange(m);
        } catch {
          const y = l.extractContents();
          f.appendChild(y), l.insertNode(f);
          const b = document.createRange();
          b.selectNodeContents(f), r.removeAllRanges(), r.addRange(b);
        }
      }
      a();
    } catch (s) {
      console.warn("Error applying format:", s), a();
    }
}, rn = ({
  editorRef: o,
  activeFormats: e,
  updateActiveFormats: a,
  getButtonClass: r
}) => /* @__PURE__ */ n.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => Be("strong", o, a),
      className: r(e.bold),
      title: "Bold",
      children: /* @__PURE__ */ n.jsx(Pn, { size: 18 })
    }
  ),
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => Be("em", o, a),
      className: r(e.italic),
      title: "Italic",
      children: /* @__PURE__ */ n.jsx($n, { size: 18 })
    }
  ),
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => Be("u", o, a),
      className: r(e.underline),
      title: "Underline",
      children: /* @__PURE__ */ n.jsx(or, { size: 18 })
    }
  ),
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => Be("s", o, a),
      className: r(e.strikethrough),
      title: "Strikethrough",
      children: /* @__PURE__ */ n.jsx(er, { size: 18 })
    }
  )
] }), Ve = (o, e) => {
  const a = window.getSelection();
  if (!a || a.rangeCount === 0) return;
  let l = a.getRangeAt(0).commonAncestorContainer;
  for (; l && l.nodeType !== Node.ELEMENT_NODE; )
    l = l.parentNode;
  if (l && l.nodeType === Node.ELEMENT_NODE) {
    const s = l;
    s.style.textAlign = o === "left" ? "" : o, e();
  }
}, on = ({
  activeFormats: o,
  updateActiveFormats: e,
  getButtonClass: a
}) => /* @__PURE__ */ n.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => Ve("left", e),
      className: a(o.alignLeft),
      title: "Align Left",
      children: /* @__PURE__ */ n.jsx(Mn, { size: 18 })
    }
  ),
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => Ve("center", e),
      className: a(o.alignCenter),
      title: "Align Center",
      children: /* @__PURE__ */ n.jsx(kn, { size: 18 })
    }
  ),
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => Ve("right", e),
      className: a(o.alignRight),
      title: "Align Right",
      children: /* @__PURE__ */ n.jsx(In, { size: 18 })
    }
  ),
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => Ve("justify", e),
      className: a(o.alignJustify),
      title: "Justify",
      children: /* @__PURE__ */ n.jsx(Ln, { size: 18 })
    }
  )
] }), Bt = (o, e, a) => {
  const r = window.getSelection();
  if (!r || r.rangeCount === 0 || !e.current) return;
  const l = r.getRangeAt(0);
  let s = l.commonAncestorContainer;
  s.nodeType === Node.TEXT_NODE && (s = s.parentNode);
  let i = s;
  for (; i && i !== e.current && !["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL"].includes(
    i.tagName
  ); )
    i = i.parentElement;
  if (!i || i === e.current) {
    const u = document.createElement(o), f = document.createElement("li");
    f.textContent = r.toString() || "List item", u.appendChild(f), l.deleteContents(), l.insertNode(u);
    const m = document.createRange();
    m.setStart(f, 0), m.setEnd(f, f.childNodes.length), r.removeAllRanges(), r.addRange(m);
  } else if (i.tagName === "LI") {
    const u = i.parentElement;
    if (u.tagName.toLowerCase() === o) {
      const f = document.createElement("p");
      f.innerHTML = i.innerHTML, u.parentNode?.replaceChild(f, u);
    } else {
      const f = document.createElement(o);
      f.innerHTML = u.innerHTML, u.parentNode?.replaceChild(f, u);
    }
  } else {
    const u = document.createElement(o), f = document.createElement("li");
    f.innerHTML = i.innerHTML, u.appendChild(f), i.parentNode?.replaceChild(u, i);
  }
  a();
}, sn = ({
  editorRef: o,
  activeFormats: e,
  updateActiveFormats: a,
  getButtonClass: r
}) => /* @__PURE__ */ n.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => {
        o?.current && Bt("ul", o, a);
      },
      className: r(e.bulletList),
      title: "Bullet List",
      children: /* @__PURE__ */ n.jsx(qn, { size: 18 })
    }
  ),
  /* @__PURE__ */ n.jsx(
    "button",
    {
      onClick: () => {
        o?.current && Bt("ol", o, a);
      },
      className: r(e.numberedList),
      title: "Numbered List",
      children: /* @__PURE__ */ n.jsx(Bn, { size: 18 })
    }
  )
] }), ur = ({
  editorRef: o,
  activeFormats: e,
  currentTextFormat: a,
  updateActiveFormats: r,
  applyTextFormat: l
}) => {
  const [s, i] = S({ top: 0, left: 0 }), [u, f] = S(!1), [m, y] = S(!1), b = Ke(null), R = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" }
  ];
  ve(() => {
    const x = () => {
      const W = window.getSelection();
      if (!W || W.rangeCount === 0 || W.isCollapsed || !o.current || !o.current.contains(W.anchorNode)) {
        f(!1), y(!1);
        return;
      }
      const $ = W.getRangeAt(0).getBoundingClientRect(), K = b.current?.offsetHeight || 50, C = $.top - K - 45, O = $.left + $.width / 2;
      i({ top: C, left: O }), f(!0);
    };
    return document.addEventListener("selectionchange", x), window.addEventListener("scroll", x, !0), window.addEventListener("resize", x), () => {
      document.removeEventListener("selectionchange", x), window.removeEventListener("scroll", x, !0), window.removeEventListener("resize", x);
    };
  }, [o]);
  const E = (x) => `p-1.5 rounded transition-colors ${x ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, I = (x) => {
    l(x), y(!1);
  };
  return u ? /* @__PURE__ */ n.jsxs(
    "div",
    {
      ref: b,
      className: "fixed z-40 flex items-center gap-1 p-1 bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in zoom-in-95 duration-200",
      style: {
        top: `${s.top}px`,
        left: `${s.left}px`,
        transform: "translateX(-50%)"
      },
      onMouseDown: (x) => {
        x.preventDefault();
      },
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              onClick: () => y(!m),
              className: "flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between",
              children: [
                /* @__PURE__ */ n.jsx("span", { className: "truncate max-w-[80px]", children: R.find((x) => x.value === a)?.label || "Paragraph" }),
                /* @__PURE__ */ n.jsx(Ze, { size: 12 })
              ]
            }
          ),
          m && /* @__PURE__ */ n.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[140px] max-h-[300px] overflow-y-auto", children: R.map((x) => /* @__PURE__ */ n.jsx(
            "button",
            {
              onClick: () => I(x.tag),
              className: `w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${a === x.value ? "bg-blue-50 text-blue-600" : "text-gray-700"}`,
              children: x.label
            },
            x.value
          )) })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ n.jsx(
          rn,
          {
            editorRef: o,
            activeFormats: e,
            updateActiveFormats: r,
            getButtonClass: E
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ n.jsx(
          sn,
          {
            editorRef: o,
            activeFormats: {
              bulletList: e.bulletList,
              numberedList: e.numberedList
            },
            updateActiveFormats: r,
            getButtonClass: E
          }
        ),
        /* @__PURE__ */ n.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ n.jsx(
          on,
          {
            activeFormats: {
              alignLeft: e.alignLeft,
              alignCenter: e.alignCenter,
              alignRight: e.alignRight,
              alignJustify: e.alignJustify
            },
            updateActiveFormats: r,
            getButtonClass: E
          }
        )
      ]
    }
  ) : null;
};
let Re = null;
const dt = () => {
  const o = window.getSelection();
  o && o.rangeCount > 0 && (Re = o.getRangeAt(0).cloneRange());
}, wt = () => {
  if (Re) {
    const o = window.getSelection();
    o?.removeAllRanges(), o?.addRange(Re);
  }
}, mt = () => {
  const o = window.getSelection();
  if (!o || o.rangeCount === 0) return null;
  let a = o.getRangeAt(0).commonAncestorContainer;
  a.nodeType === Node.TEXT_NODE && (a = a.parentNode);
  let r = a;
  for (; r && r !== document.body; ) {
    if (r.nodeType === Node.ELEMENT_NODE) {
      const l = r, s = l.tagName.toLowerCase();
      if (s === "a")
        return {
          type: "link",
          url: l.getAttribute("href") || "",
          text: l.textContent || ""
        };
      if (s === "img")
        return {
          type: "image",
          src: l.getAttribute("src") || "",
          alt: l.getAttribute("alt") || ""
        };
      if (s === "iframe")
        return {
          type: "video",
          src: l.getAttribute("src") || ""
        };
    }
    r = r.parentNode;
  }
  return null;
}, dr = (o, e) => {
  wt();
  const a = window.getSelection();
  if (!a || a.rangeCount === 0) {
    const i = document.querySelector(
      '[contenteditable="true"]'
    );
    if (i) {
      const u = document.createElement("a");
      u.href = o, u.textContent = e || o, u.target = "_blank", u.rel = "noopener noreferrer", u.className = "text-blue-600 underline hover:text-blue-800", i.appendChild(u);
      const f = document.createTextNode(" ");
      i.appendChild(f);
      const m = document.createRange();
      m.setStartAfter(f), m.collapse(!0), a && (a.removeAllRanges(), a.addRange(m));
    }
    return;
  }
  const r = a.getRangeAt(0);
  let l = null, s = r.commonAncestorContainer;
  for (; s && s !== document.body; ) {
    if (s.nodeType === Node.ELEMENT_NODE && s.tagName.toLowerCase() === "a") {
      l = s;
      break;
    }
    s = s.parentNode;
  }
  if (l)
    l.setAttribute("href", o), l.textContent = e || o;
  else {
    const i = document.createElement("a");
    i.href = o, i.textContent = e || o, i.target = "_blank", i.rel = "noopener noreferrer", i.className = "text-blue-600 underline hover:text-blue-800", r.deleteContents(), r.insertNode(i);
    const u = document.createRange();
    u.setStartAfter(i), u.collapse(!0), a.removeAllRanges(), a.addRange(u);
  }
  Re = null;
}, mr = (o, e = "Inserted image") => {
  wt();
  const a = window.getSelection();
  if (!a || a.rangeCount === 0) {
    const i = document.querySelector(
      '[contenteditable="true"]'
    );
    if (i) {
      const u = document.createElement("img");
      u.src = o, u.alt = e, u.className = "max-w-full h-auto rounded shadow-sm", i.appendChild(u);
      const f = document.createElement("br");
      i.appendChild(f);
      const m = document.createRange();
      m.setStartAfter(f), m.collapse(!0), a && (a.removeAllRanges(), a.addRange(m));
    }
    return;
  }
  const r = a.getRangeAt(0);
  let l = null, s = r.commonAncestorContainer;
  for (; s && s !== document.body; ) {
    if (s.nodeType === Node.ELEMENT_NODE && s.tagName.toLowerCase() === "img") {
      l = s;
      break;
    }
    s = s.parentNode;
  }
  if (l)
    l.setAttribute("src", o), l.setAttribute("alt", e);
  else {
    const i = document.createElement("img");
    i.src = o, i.alt = e, i.className = "max-w-full h-auto rounded shadow-sm", r.deleteContents(), r.insertNode(i);
    const u = document.createRange();
    u.setStartAfter(i), u.collapse(!0), a.removeAllRanges(), a.addRange(u);
  }
  Re = null;
}, fr = (o) => {
  wt();
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) {
    const s = document.querySelector(
      '[contenteditable="true"]'
    );
    if (s) {
      const i = document.createElement("iframe");
      i.src = o, i.width = "560", i.height = "315", i.className = "max-w-full rounded shadow-sm", i.setAttribute("frameborder", "0"), i.setAttribute("allowfullscreen", "true"), i.setAttribute(
        "sandbox",
        "allow-scripts allow-same-origin allow-presentation"
      ), s.appendChild(i);
      const u = document.createElement("br");
      s.appendChild(u);
      const f = document.createRange();
      f.setStartAfter(u), f.collapse(!0), e && (e.removeAllRanges(), e.addRange(f));
    }
    return;
  }
  const a = e.getRangeAt(0);
  let r = null, l = a.commonAncestorContainer;
  for (; l && l !== document.body; ) {
    if (l.nodeType === Node.ELEMENT_NODE && l.tagName.toLowerCase() === "iframe") {
      r = l;
      break;
    }
    l = l.parentNode;
  }
  if (r)
    r.setAttribute("src", o);
  else {
    const s = document.createElement("iframe");
    s.src = o, s.width = "560", s.height = "315", s.className = "max-w-full rounded shadow-sm", s.setAttribute("frameborder", "0"), s.setAttribute("allowfullscreen", "true"), s.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-presentation"
    ), a.deleteContents(), a.insertNode(s);
    const i = document.createRange();
    i.setStartAfter(s), i.collapse(!0), e.removeAllRanges(), e.addRange(i);
  }
  Re = null;
}, pr = ({
  isOpen: o,
  onClose: e,
  onInsert: a,
  initialData: r
}) => {
  const [l, s] = S(""), [i, u] = S("");
  ve(() => {
    o && r ? (s(r.url), u(r.text)) : o && !r && (s(""), u(""));
  }, [o, r]);
  const f = (m) => {
    m.preventDefault(), l.trim() && (a(l.trim(), i.trim()), s(""), u(""), e());
  };
  return o ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-semibold", children: r ? "Edit Link" : "Insert Link" }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: e,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ n.jsx(Qe, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("form", { onSubmit: f, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "URL" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (m) => s(m.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "https://example.com",
            required: !0,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Link Text (optional)" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "text",
            value: i,
            onChange: (m) => u(m.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Link text"
          }
        )
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            onClick: e,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: r ? "Update Link" : "Insert Link"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, gr = ({
  isOpen: o,
  onClose: e,
  onInsert: a,
  initialData: r
}) => {
  const [l, s] = S(""), [i, u] = S(""), f = Ke(null);
  ve(() => {
    o && r ? (s(r.alt), u(r.src)) : o && !r && (s(""), u(""));
  }, [o, r]);
  const m = (R) => {
    const E = R.target.files?.[0];
    if (E) {
      const I = new FileReader();
      I.onload = (x) => {
        const W = x.target?.result;
        a(W, l || E.name), s(""), u(""), e(), f.current && (f.current.value = "");
      }, I.readAsDataURL(E);
    }
  }, y = () => {
    r && i && (a(i, l), s(""), u(""), e());
  }, b = () => {
    f.current && f.current.click();
  };
  return o ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-semibold", children: r ? "Edit Image" : "Insert Image" }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: e,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ n.jsx(Qe, { size: 20 })
        }
      )
    ] }),
    r && /* @__PURE__ */ n.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ n.jsx(
        "img",
        {
          src: i,
          alt: l,
          className: "max-w-full h-32 object-contain rounded border"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          type: "button",
          onClick: b,
          className: "mt-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200",
          children: "Replace Image"
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx(
      "input",
      {
        ref: f,
        type: "file",
        accept: "image/*",
        onChange: m,
        className: "hidden"
      }
    ),
    !r && /* @__PURE__ */ n.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Select Image File" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          type: "file",
          accept: "image/*",
          onChange: m,
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Alt Text (optional)" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          type: "text",
          value: l,
          onChange: (R) => s(R.target.value),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          placeholder: "Image description",
          autoFocus: !!r
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: e,
          className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      r && /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: y,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
          children: "Update Image"
        }
      )
    ] })
  ] }) }) : null;
}, hr = ({
  isOpen: o,
  onClose: e,
  onInsert: a,
  initialData: r
}) => {
  const [l, s] = S(""), [i, u] = S("");
  ve(() => {
    o && r ? s(r.src) : o && !r && s(""), u("");
  }, [o, r]);
  const f = (y) => {
    const b = y.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
    );
    if (b)
      return `https://www.youtube.com/embed/${b[1]}`;
    const R = y.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return R ? `https://player.vimeo.com/video/${R[1]}` : y.includes("youtube.com/embed/") || y.includes("player.vimeo.com/video/") ? y : null;
  }, m = (y) => {
    if (y.preventDefault(), u(""), l.trim()) {
      const b = f(l.trim());
      b ? (a(b), s(""), e()) : u("Invalid URL. Only YouTube and Vimeo are supported for security.");
    }
  };
  return o ? /* @__PURE__ */ n.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ n.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "text-lg font-semibold", children: r ? "Edit Video" : "Insert Video" }),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: e,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ n.jsx(Qe, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("form", { onSubmit: m, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ n.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Video URL" }),
        /* @__PURE__ */ n.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (y) => s(y.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "YouTube, Vimeo, or embed URL",
            required: !0,
            autoFocus: !0
          }
        ),
        i && /* @__PURE__ */ n.jsx("p", { className: "text-sm text-red-500 mt-1", children: i }),
        /* @__PURE__ */ n.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Supports YouTube, Vimeo, and direct embed URLs" })
      ] }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "button",
            onClick: e,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: r ? "Update Video" : "Insert Video"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, br = () => {
  const [o, e] = S(!1), [a, r] = S(!1), [l, s] = S(!1), [i, u] = S(null), f = () => {
    dt();
    const b = mt();
    u(b?.type === "link" ? b : null), e(!0);
  }, m = () => {
    dt();
    const b = mt();
    u(b?.type === "image" ? b : null), r(!0);
  }, y = () => {
    dt();
    const b = mt();
    u(b?.type === "video" ? b : null), s(!0);
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: f,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Link",
          children: /* @__PURE__ */ n.jsx(Gn, { size: 18 })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: m,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Image",
          children: /* @__PURE__ */ n.jsx(Un, { size: 18 })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: y,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Video",
          children: /* @__PURE__ */ n.jsx(ir, { size: 18 })
        }
      )
    ] }),
    /* @__PURE__ */ n.jsx(
      pr,
      {
        isOpen: o,
        onClose: () => {
          e(!1), u(null);
        },
        onInsert: dr,
        initialData: i?.type === "link" ? {
          url: i.url,
          text: i.text
        } : null
      }
    ),
    /* @__PURE__ */ n.jsx(
      gr,
      {
        isOpen: a,
        onClose: () => {
          r(!1), u(null);
        },
        onInsert: mr,
        initialData: i?.type === "image" ? {
          src: i.src,
          alt: i.alt
        } : null
      }
    ),
    /* @__PURE__ */ n.jsx(
      hr,
      {
        isOpen: l,
        onClose: () => {
          s(!1), u(null);
        },
        onInsert: fr,
        initialData: i?.type === "video" ? {
          src: i.src
        } : null
      }
    )
  ] });
}, xr = ({
  getButtonClass: o,
  onUndo: e,
  onRedo: a,
  canUndo: r,
  canRedo: l
}) => {
  const s = (u) => {
    u.preventDefault(), r && e();
  }, i = (u) => {
    u.preventDefault(), l && a();
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onMouseDown: s,
        className: `${o(!1)} ${r ? "" : "opacity-50 cursor-not-allowed"}`,
        title: "Undo",
        disabled: !r,
        children: /* @__PURE__ */ n.jsx(ar, { size: 18 })
      }
    ),
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onMouseDown: i,
        className: `${o(!1)} ${l ? "" : "opacity-50 cursor-not-allowed"}`,
        title: "Redo",
        disabled: !l,
        children: /* @__PURE__ */ n.jsx(Kn, { size: 18 })
      }
    )
  ] });
}, yr = ({
  getButtonClass: o,
  updateActiveFormats: e
}) => {
  const [a, r] = S(!1), [l, s] = S(!1), [i, u] = S(!1), [f, m] = S(""), y = [
    "#000000",
    "#434343",
    "#666666",
    "#999999",
    "#b7b7b7",
    "#cccccc",
    "#d9d9d9",
    "#efefef",
    "#f3f3f3",
    "#ffffff",
    "#980000",
    "#ff0000",
    "#ff9900",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#4a86e8",
    "#0000ff",
    "#9900ff",
    "#ff00ff",
    "#e6b8af",
    "#f4cccc",
    "#fce5cd",
    "#fff2cc",
    "#d9ead3",
    "#d0e0e3",
    "#c9daf8",
    "#cfe2f3",
    "#d9d2e9",
    "#ead1dc",
    "#dd7e6b",
    "#ea9999",
    "#f9cb9c",
    "#ffe599",
    "#b6d7a8",
    "#a2c4c9",
    "#a4c2f4",
    "#9fc5e8",
    "#b4a7d6",
    "#d5a6bd",
    "#cc4125",
    "#e06666",
    "#f6b26b",
    "#ffd966",
    "#93c47d",
    "#76a5af",
    "#6d9eeb",
    "#6fa8dc",
    "#8e7cc3",
    "#c27ba0",
    "#a61c00",
    "#cc0000",
    "#e69138",
    "#f1c232",
    "#6aa84f",
    "#45818e",
    "#3c78d8",
    "#3d85c6",
    "#674ea7",
    "#a64d79"
  ], b = [
    { name: "Sans Serif", value: "Arial, Helvetica, sans-serif" },
    { name: "Serif", value: "Times New Roman, Times, serif" },
    { name: "Monospace", value: "Courier New, Courier, monospace" }
  ], R = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96], E = (N) => {
    document.execCommand("foreColor", !1, N), r(!1), e();
  }, I = (N) => {
    document.execCommand("fontName", !1, N), s(!1), e();
  }, x = (N) => {
    document.execCommand("fontSize", !1, "7");
    const $ = document.getElementsByTagName("font");
    for (let K = $.length - 1; K >= 0; K--) {
      const C = $[K];
      if (C.getAttribute("size") === "7") {
        const O = document.createElement("span");
        O.style.fontSize = `${N}px`, O.innerHTML = C.innerHTML, C.parentNode?.replaceChild(O, C);
      }
    }
    u(!1), m(""), e();
  }, W = (N) => {
    N.preventDefault(), f && x(f);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "flex gap-1 items-center relative", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ n.jsxs(
        "button",
        {
          onClick: () => s(!l),
          onBlur: () => setTimeout(() => s(!1), 200),
          className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between transition-colors",
          title: "Font Family",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "font-medium truncate max-w-[80px]", children: "Font" }),
            /* @__PURE__ */ n.jsx(Ze, { size: 14, className: "text-gray-500" })
          ]
        }
      ),
      l && /* @__PURE__ */ n.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px]", children: b.map((N) => /* @__PURE__ */ n.jsx(
        "button",
        {
          onMouseDown: ($) => {
            $.preventDefault(), I(N.value);
          },
          className: "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 font-medium",
          style: { fontFamily: N.value },
          children: N.name
        },
        N.name
      )) })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ n.jsxs(
        "button",
        {
          onClick: () => u(!i),
          onBlur: () => {
            setTimeout(() => {
              u(!1);
            }, 200);
          },
          className: "flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[60px] justify-between transition-colors",
          title: "Font Size",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "font-medium", children: "Size" }),
            /* @__PURE__ */ n.jsx(Ze, { size: 14, className: "text-gray-500" })
          ]
        }
      ),
      i && /* @__PURE__ */ n.jsxs(
        "div",
        {
          className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[100px] max-h-[300px] overflow-y-auto",
          onMouseDown: (N) => N.preventDefault(),
          children: [
            /* @__PURE__ */ n.jsx("div", { className: "p-2 border-b border-gray-100", children: /* @__PURE__ */ n.jsxs("form", { onSubmit: W, className: "flex gap-1", children: [
              /* @__PURE__ */ n.jsx(
                "input",
                {
                  type: "number",
                  value: f,
                  onChange: (N) => m(N.target.value),
                  placeholder: "px",
                  className: "w-12 text-sm border border-gray-300 rounded px-1",
                  onMouseDown: (N) => N.stopPropagation()
                }
              ),
              /* @__PURE__ */ n.jsx("button", { type: "submit", className: "text-xs bg-blue-50 text-blue-600 px-1 rounded", children: "Go" })
            ] }) }),
            R.map((N) => /* @__PURE__ */ n.jsx(
              "button",
              {
                onMouseDown: ($) => {
                  $.preventDefault(), x(N);
                },
                className: "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 hover:text-blue-600",
                children: N
              },
              N
            ))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ n.jsx(
        "button",
        {
          onClick: () => r(!a),
          onBlur: () => setTimeout(() => r(!1), 200),
          className: o(a),
          title: "Text Color",
          children: /* @__PURE__ */ n.jsx(Jn, { size: 18 })
        }
      ),
      a && /* @__PURE__ */ n.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-2 w-[180px] flex flex-wrap gap-1", children: y.map((N) => /* @__PURE__ */ n.jsx(
        "button",
        {
          onMouseDown: ($) => {
            $.preventDefault(), E(N);
          },
          className: "w-5 h-5 rounded border border-gray-300 hover:scale-110 transition-transform",
          style: { backgroundColor: N },
          title: N
        },
        N
      )) })
    ] })
  ] });
}, Er = ({ getButtonClass: o }) => {
  const [e, a] = S(!1), [r, l] = S(2), [s, i] = S(2), u = (f) => {
    f.preventDefault();
    let m = '<table style="border-collapse: collapse; width: 100%; border: 1px solid #ccc;">';
    m += "<tbody>";
    for (let y = 0; y < r; y++) {
      m += "<tr>";
      for (let b = 0; b < s; b++)
        m += '<td style="border: 1px solid #ccc; padding: 8px; min-width: 50px;">&nbsp;</td>';
      m += "</tr>";
    }
    m += "</tbody></table><p>&nbsp;</p>", document.execCommand("insertHTML", !1, m), a(!1);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ n.jsx(
      "button",
      {
        onClick: () => a(!e),
        className: o(e),
        title: "Insert Table",
        children: /* @__PURE__ */ n.jsx(nr, { size: 18 })
      }
    ),
    e && /* @__PURE__ */ n.jsxs("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-64", children: [
      /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ n.jsx("h3", { className: "text-sm font-semibold text-gray-700", children: "Insert Table" }),
        /* @__PURE__ */ n.jsx("button", { onClick: () => a(!1), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ n.jsx(Qe, { size: 16 }) })
      ] }),
      /* @__PURE__ */ n.jsxs("form", { onSubmit: u, children: [
        /* @__PURE__ */ n.jsxs("div", { className: "flex gap-4 mb-4", children: [
          /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-xs font-medium text-gray-500 mb-1", children: "Rows" }),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "number",
                min: "1",
                max: "10",
                value: r,
                onChange: (f) => l(parseInt(f.target.value) || 1),
                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ n.jsx("label", { className: "block text-xs font-medium text-gray-500 mb-1", children: "Columns" }),
            /* @__PURE__ */ n.jsx(
              "input",
              {
                type: "number",
                min: "1",
                max: "10",
                value: s,
                onChange: (f) => i(parseInt(f.target.value) || 1),
                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ n.jsx(
          "button",
          {
            type: "submit",
            className: "w-full py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors",
            children: "Insert"
          }
        )
      ] })
    ] })
  ] });
}, Tr = ({
  config: o,
  activeFormats: e,
  currentTextFormat: a,
  updateActiveFormats: r,
  applyTextFormat: l,
  editorRef: s,
  undo: i,
  redo: u,
  canUndo: f,
  canRedo: m
}) => {
  const [y, b] = S(!1), R = (x) => `p-2 rounded transition-colors ${x ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, E = () => /* @__PURE__ */ n.jsx("div", { className: "w-px h-6 bg-gray-300 mx-1" }), I = [
    { value: "p", label: "Normal text", tag: "p" },
    { value: "h1", label: "Title", tag: "h1" },
    { value: "h2", label: "Subtitle", tag: "h2" },
    { value: "h3", label: "Heading 1", tag: "h3" },
    { value: "h4", label: "Heading 2", tag: "h4" },
    { value: "h5", label: "Heading 3", tag: "h5" },
    { value: "h6", label: "Heading 4", tag: "h6" }
  ];
  return /* @__PURE__ */ n.jsx("div", { className: "sticky top-0 z-50 w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-center border", children: /* @__PURE__ */ n.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-1 max-w-7xl mx-auto w-full", children: [
    /* @__PURE__ */ n.jsx(
      xr,
      {
        getButtonClass: R,
        onUndo: i,
        onRedo: u,
        canUndo: f,
        canRedo: m
      }
    ),
    /* @__PURE__ */ n.jsx(E, {}),
    o.showTextFormat && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ n.jsxs(
          "button",
          {
            onClick: () => b(!y),
            onBlur: () => setTimeout(() => b(!1), 200),
            className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors",
            children: [
              /* @__PURE__ */ n.jsx("span", { className: "font-medium truncate max-w-[100px]", children: I.find((x) => x.value === a)?.label || "Normal text" }),
              /* @__PURE__ */ n.jsx(Ze, { size: 14, className: "text-gray-500" })
            ]
          }
        ),
        y && /* @__PURE__ */ n.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px] max-h-[300px] overflow-y-auto w-full", children: I.map((x) => /* @__PURE__ */ n.jsx(
          "button",
          {
            onMouseDown: (W) => {
              W.preventDefault(), l(x.tag);
            },
            className: `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${a === x.value ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`,
            children: /* @__PURE__ */ n.jsx("span", { className: x.tag === "p" ? "" : x.tag === "h1" ? "text-2xl font-bold" : x.tag === "h2" ? "text-xl font-bold" : x.tag === "h3" ? "text-lg font-bold" : "font-bold", children: x.label })
          },
          x.value
        )) })
      ] }),
      /* @__PURE__ */ n.jsx(E, {})
    ] }),
    /* @__PURE__ */ n.jsx(
      yr,
      {
        getButtonClass: R,
        updateActiveFormats: r
      }
    ),
    /* @__PURE__ */ n.jsx(E, {}),
    o.showInlineFormat && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        rn,
        {
          editorRef: s,
          activeFormats: {
            bold: e.bold,
            italic: e.italic,
            underline: e.underline,
            strikethrough: e.strikethrough
          },
          updateActiveFormats: r,
          getButtonClass: R
        }
      ),
      /* @__PURE__ */ n.jsx(E, {})
    ] }),
    o.showAlignment && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        on,
        {
          activeFormats: {
            alignLeft: e.alignLeft,
            alignCenter: e.alignCenter,
            alignRight: e.alignRight,
            alignJustify: e.alignJustify
          },
          updateActiveFormats: r,
          getButtonClass: R
        }
      ),
      /* @__PURE__ */ n.jsx(E, {})
    ] }),
    o.showList && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(
        sn,
        {
          editorRef: s,
          activeFormats: {
            bulletList: e.bulletList,
            numberedList: e.numberedList
          },
          updateActiveFormats: r,
          getButtonClass: R
        }
      ),
      /* @__PURE__ */ n.jsx(E, {})
    ] }),
    o.showInsert && /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsx(br, {}),
      /* @__PURE__ */ n.jsx(Er, { getButtonClass: R })
    ] })
  ] }) });
};
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: an,
  setPrototypeOf: Vt,
  isFrozen: Nr,
  getPrototypeOf: wr,
  getOwnPropertyDescriptor: _r
} = Object;
let {
  freeze: J,
  seal: ne,
  create: Et
} = Object, {
  apply: Tt,
  construct: Nt
} = typeof Reflect < "u" && Reflect;
J || (J = function(e) {
  return e;
});
ne || (ne = function(e) {
  return e;
});
Tt || (Tt = function(e, a) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    l[s - 2] = arguments[s];
  return e.apply(a, l);
});
Nt || (Nt = function(e) {
  for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
    r[l - 1] = arguments[l];
  return new e(...r);
});
const qe = Z(Array.prototype.forEach), Ar = Z(Array.prototype.lastIndexOf), qt = Z(Array.prototype.pop), je = Z(Array.prototype.push), vr = Z(Array.prototype.splice), Je = Z(String.prototype.toLowerCase), ft = Z(String.prototype.toString), pt = Z(String.prototype.match), Me = Z(String.prototype.replace), Rr = Z(String.prototype.indexOf), Cr = Z(String.prototype.trim), se = Z(Object.prototype.hasOwnProperty), X = Z(RegExp.prototype.test), Oe = kr(TypeError);
function Z(o) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
      r[l - 1] = arguments[l];
    return Tt(o, e, r);
  };
}
function kr(o) {
  return function() {
    for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
      a[r] = arguments[r];
    return Nt(o, a);
  };
}
function T(o, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Je;
  Vt && Vt(o, null);
  let r = e.length;
  for (; r--; ) {
    let l = e[r];
    if (typeof l == "string") {
      const s = a(l);
      s !== l && (Nr(e) || (e[r] = s), l = s);
    }
    o[l] = !0;
  }
  return o;
}
function Sr(o) {
  for (let e = 0; e < o.length; e++)
    se(o, e) || (o[e] = null);
  return o;
}
function ie(o) {
  const e = Et(null);
  for (const [a, r] of an(o))
    se(o, a) && (Array.isArray(r) ? e[a] = Sr(r) : r && typeof r == "object" && r.constructor === Object ? e[a] = ie(r) : e[a] = r);
  return e;
}
function Ie(o, e) {
  for (; o !== null; ) {
    const r = _r(o, e);
    if (r) {
      if (r.get)
        return Z(r.get);
      if (typeof r.value == "function")
        return Z(r.value);
    }
    o = wr(o);
  }
  function a() {
    return null;
  }
  return a;
}
const Xt = J(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), gt = J(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ht = J(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Lr = J(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), bt = J(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), jr = J(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Jt = J(["#text"]), Zt = J(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), xt = J(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Kt = J(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xe = J(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Mr = ne(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Or = ne(/<%[\w\W]*|[\w\W]*%>/gm), Ir = ne(/\$\{[\w\W]*/gm), Dr = ne(/^data-[\-\w.\u00B7-\uFFFF]+$/), Pr = ne(/^aria-[\-\w]+$/), ln = ne(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Hr = ne(/^(?:\w+script|data):/i), zr = ne(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), cn = ne(/^html$/i), Ur = ne(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Qt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Pr,
  ATTR_WHITESPACE: zr,
  CUSTOM_ELEMENT: Ur,
  DATA_ATTR: Dr,
  DOCTYPE_NAME: cn,
  ERB_EXPR: Or,
  IS_ALLOWED_URI: ln,
  IS_SCRIPT_OR_DATA: Hr,
  MUSTACHE_EXPR: Mr,
  TMPLIT_EXPR: Ir
});
const De = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Fr = function() {
  return typeof window > "u" ? null : window;
}, $r = function(e, a) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const l = "data-tt-policy-suffix";
  a && a.hasAttribute(l) && (r = a.getAttribute(l));
  const s = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(s, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, en = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function un() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fr();
  const e = (h) => un(h);
  if (e.version = "3.3.1", e.removed = [], !o || !o.document || o.document.nodeType !== De.document || !o.Element)
    return e.isSupported = !1, e;
  let {
    document: a
  } = o;
  const r = a, l = r.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: i,
    Node: u,
    Element: f,
    NodeFilter: m,
    NamedNodeMap: y = o.NamedNodeMap || o.MozNamedAttrMap,
    HTMLFormElement: b,
    DOMParser: R,
    trustedTypes: E
  } = o, I = f.prototype, x = Ie(I, "cloneNode"), W = Ie(I, "remove"), N = Ie(I, "nextSibling"), $ = Ie(I, "childNodes"), K = Ie(I, "parentNode");
  if (typeof i == "function") {
    const h = a.createElement("template");
    h.content && h.content.ownerDocument && (a = h.content.ownerDocument);
  }
  let C, O = "";
  const {
    implementation: ge,
    createNodeIterator: _,
    createDocumentFragment: B,
    getElementsByTagName: z
  } = a, {
    importNode: V
  } = r;
  let v = en();
  e.isSupported = typeof an == "function" && typeof K == "function" && ge && ge.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: D,
    ERB_EXPR: j,
    TMPLIT_EXPR: P,
    DATA_ATTR: q,
    ARIA_ATTR: ee,
    IS_SCRIPT_OR_DATA: te,
    ATTR_WHITESPACE: re,
    CUSTOM_ELEMENT: ce
  } = Qt;
  let {
    IS_ALLOWED_URI: c
  } = Qt, g = null;
  const k = T({}, [...Xt, ...gt, ...ht, ...bt, ...Jt]);
  let w = null;
  const oe = T({}, [...Zt, ...xt, ...Kt, ...Xe]);
  let A = Object.seal(Et(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), ue = null, he = null;
  const M = Object.seal(Et(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let de = !0, be = !0, Pe = !1, _t = !0, Ee = !1, He = !0, xe = !1, et = !1, tt = !1, Te = !1, ze = !1, Ue = !1, At = !0, vt = !1;
  const dn = "user-content-";
  let nt = !0, Ce = !1, Ne = {}, ae = null;
  const rt = T({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Rt = null;
  const Ct = T({}, ["audio", "video", "img", "source", "image", "track"]);
  let ot = null;
  const kt = T({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fe = "http://www.w3.org/1998/Math/MathML", $e = "http://www.w3.org/2000/svg", me = "http://www.w3.org/1999/xhtml";
  let we = me, st = !1, at = null;
  const mn = T({}, [Fe, $e, me], ft);
  let We = T({}, ["mi", "mo", "mn", "ms", "mtext"]), Ge = T({}, ["annotation-xml"]);
  const fn = T({}, ["title", "style", "font", "a", "script"]);
  let ke = null;
  const pn = ["application/xhtml+xml", "text/html"], gn = "text/html";
  let U = null, _e = null;
  const hn = a.createElement("form"), St = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, lt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(_e && _e === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = ie(t), ke = // eslint-disable-next-line unicorn/prefer-includes
      pn.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? gn : t.PARSER_MEDIA_TYPE, U = ke === "application/xhtml+xml" ? ft : Je, g = se(t, "ALLOWED_TAGS") ? T({}, t.ALLOWED_TAGS, U) : k, w = se(t, "ALLOWED_ATTR") ? T({}, t.ALLOWED_ATTR, U) : oe, at = se(t, "ALLOWED_NAMESPACES") ? T({}, t.ALLOWED_NAMESPACES, ft) : mn, ot = se(t, "ADD_URI_SAFE_ATTR") ? T(ie(kt), t.ADD_URI_SAFE_ATTR, U) : kt, Rt = se(t, "ADD_DATA_URI_TAGS") ? T(ie(Ct), t.ADD_DATA_URI_TAGS, U) : Ct, ae = se(t, "FORBID_CONTENTS") ? T({}, t.FORBID_CONTENTS, U) : rt, ue = se(t, "FORBID_TAGS") ? T({}, t.FORBID_TAGS, U) : ie({}), he = se(t, "FORBID_ATTR") ? T({}, t.FORBID_ATTR, U) : ie({}), Ne = se(t, "USE_PROFILES") ? t.USE_PROFILES : !1, de = t.ALLOW_ARIA_ATTR !== !1, be = t.ALLOW_DATA_ATTR !== !1, Pe = t.ALLOW_UNKNOWN_PROTOCOLS || !1, _t = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ee = t.SAFE_FOR_TEMPLATES || !1, He = t.SAFE_FOR_XML !== !1, xe = t.WHOLE_DOCUMENT || !1, Te = t.RETURN_DOM || !1, ze = t.RETURN_DOM_FRAGMENT || !1, Ue = t.RETURN_TRUSTED_TYPE || !1, tt = t.FORCE_BODY || !1, At = t.SANITIZE_DOM !== !1, vt = t.SANITIZE_NAMED_PROPS || !1, nt = t.KEEP_CONTENT !== !1, Ce = t.IN_PLACE || !1, c = t.ALLOWED_URI_REGEXP || ln, we = t.NAMESPACE || me, We = t.MATHML_TEXT_INTEGRATION_POINTS || We, Ge = t.HTML_INTEGRATION_POINTS || Ge, A = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && St(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (A.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && St(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (A.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (A.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ee && (be = !1), ze && (Te = !0), Ne && (g = T({}, Jt), w = [], Ne.html === !0 && (T(g, Xt), T(w, Zt)), Ne.svg === !0 && (T(g, gt), T(w, xt), T(w, Xe)), Ne.svgFilters === !0 && (T(g, ht), T(w, xt), T(w, Xe)), Ne.mathMl === !0 && (T(g, bt), T(w, Kt), T(w, Xe))), t.ADD_TAGS && (typeof t.ADD_TAGS == "function" ? M.tagCheck = t.ADD_TAGS : (g === k && (g = ie(g)), T(g, t.ADD_TAGS, U))), t.ADD_ATTR && (typeof t.ADD_ATTR == "function" ? M.attributeCheck = t.ADD_ATTR : (w === oe && (w = ie(w)), T(w, t.ADD_ATTR, U))), t.ADD_URI_SAFE_ATTR && T(ot, t.ADD_URI_SAFE_ATTR, U), t.FORBID_CONTENTS && (ae === rt && (ae = ie(ae)), T(ae, t.FORBID_CONTENTS, U)), t.ADD_FORBID_CONTENTS && (ae === rt && (ae = ie(ae)), T(ae, t.ADD_FORBID_CONTENTS, U)), nt && (g["#text"] = !0), xe && T(g, ["html", "head", "body"]), g.table && (T(g, ["tbody"]), delete ue.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        C = t.TRUSTED_TYPES_POLICY, O = C.createHTML("");
      } else
        C === void 0 && (C = $r(E, l)), C !== null && typeof O == "string" && (O = C.createHTML(""));
      J && J(t), _e = t;
    }
  }, Lt = T({}, [...gt, ...ht, ...Lr]), jt = T({}, [...bt, ...jr]), bn = function(t) {
    let d = K(t);
    (!d || !d.tagName) && (d = {
      namespaceURI: we,
      tagName: "template"
    });
    const p = Je(t.tagName), L = Je(d.tagName);
    return at[t.namespaceURI] ? t.namespaceURI === $e ? d.namespaceURI === me ? p === "svg" : d.namespaceURI === Fe ? p === "svg" && (L === "annotation-xml" || We[L]) : !!Lt[p] : t.namespaceURI === Fe ? d.namespaceURI === me ? p === "math" : d.namespaceURI === $e ? p === "math" && Ge[L] : !!jt[p] : t.namespaceURI === me ? d.namespaceURI === $e && !Ge[L] || d.namespaceURI === Fe && !We[L] ? !1 : !jt[p] && (fn[p] || !Lt[p]) : !!(ke === "application/xhtml+xml" && at[t.namespaceURI]) : !1;
  }, le = function(t) {
    je(e.removed, {
      element: t
    });
    try {
      K(t).removeChild(t);
    } catch {
      W(t);
    }
  }, ye = function(t, d) {
    try {
      je(e.removed, {
        attribute: d.getAttributeNode(t),
        from: d
      });
    } catch {
      je(e.removed, {
        attribute: null,
        from: d
      });
    }
    if (d.removeAttribute(t), t === "is")
      if (Te || ze)
        try {
          le(d);
        } catch {
        }
      else
        try {
          d.setAttribute(t, "");
        } catch {
        }
  }, Mt = function(t) {
    let d = null, p = null;
    if (tt)
      t = "<remove></remove>" + t;
    else {
      const H = pt(t, /^[\r\n\t ]+/);
      p = H && H[0];
    }
    ke === "application/xhtml+xml" && we === me && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const L = C ? C.createHTML(t) : t;
    if (we === me)
      try {
        d = new R().parseFromString(L, ke);
      } catch {
      }
    if (!d || !d.documentElement) {
      d = ge.createDocument(we, "template", null);
      try {
        d.documentElement.innerHTML = st ? O : L;
      } catch {
      }
    }
    const Y = d.body || d.documentElement;
    return t && p && Y.insertBefore(a.createTextNode(p), Y.childNodes[0] || null), we === me ? z.call(d, xe ? "html" : "body")[0] : xe ? d.documentElement : Y;
  }, Ot = function(t) {
    return _.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, it = function(t) {
    return t instanceof b && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof y) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, It = function(t) {
    return typeof u == "function" && t instanceof u;
  };
  function fe(h, t, d) {
    qe(h, (p) => {
      p.call(e, t, d, _e);
    });
  }
  const Dt = function(t) {
    let d = null;
    if (fe(v.beforeSanitizeElements, t, null), it(t))
      return le(t), !0;
    const p = U(t.nodeName);
    if (fe(v.uponSanitizeElement, t, {
      tagName: p,
      allowedTags: g
    }), He && t.hasChildNodes() && !It(t.firstElementChild) && X(/<[/\w!]/g, t.innerHTML) && X(/<[/\w!]/g, t.textContent) || t.nodeType === De.progressingInstruction || He && t.nodeType === De.comment && X(/<[/\w]/g, t.data))
      return le(t), !0;
    if (!(M.tagCheck instanceof Function && M.tagCheck(p)) && (!g[p] || ue[p])) {
      if (!ue[p] && Ht(p) && (A.tagNameCheck instanceof RegExp && X(A.tagNameCheck, p) || A.tagNameCheck instanceof Function && A.tagNameCheck(p)))
        return !1;
      if (nt && !ae[p]) {
        const L = K(t) || t.parentNode, Y = $(t) || t.childNodes;
        if (Y && L) {
          const H = Y.length;
          for (let Q = H - 1; Q >= 0; --Q) {
            const pe = x(Y[Q], !0);
            pe.__removalCount = (t.__removalCount || 0) + 1, L.insertBefore(pe, N(t));
          }
        }
      }
      return le(t), !0;
    }
    return t instanceof f && !bn(t) || (p === "noscript" || p === "noembed" || p === "noframes") && X(/<\/no(script|embed|frames)/i, t.innerHTML) ? (le(t), !0) : (Ee && t.nodeType === De.text && (d = t.textContent, qe([D, j, P], (L) => {
      d = Me(d, L, " ");
    }), t.textContent !== d && (je(e.removed, {
      element: t.cloneNode()
    }), t.textContent = d)), fe(v.afterSanitizeElements, t, null), !1);
  }, Pt = function(t, d, p) {
    if (At && (d === "id" || d === "name") && (p in a || p in hn))
      return !1;
    if (!(be && !he[d] && X(q, d))) {
      if (!(de && X(ee, d))) {
        if (!(M.attributeCheck instanceof Function && M.attributeCheck(d, t))) {
          if (!w[d] || he[d]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Ht(t) && (A.tagNameCheck instanceof RegExp && X(A.tagNameCheck, t) || A.tagNameCheck instanceof Function && A.tagNameCheck(t)) && (A.attributeNameCheck instanceof RegExp && X(A.attributeNameCheck, d) || A.attributeNameCheck instanceof Function && A.attributeNameCheck(d, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              d === "is" && A.allowCustomizedBuiltInElements && (A.tagNameCheck instanceof RegExp && X(A.tagNameCheck, p) || A.tagNameCheck instanceof Function && A.tagNameCheck(p)))
            ) return !1;
          } else if (!ot[d]) {
            if (!X(c, Me(p, re, ""))) {
              if (!((d === "src" || d === "xlink:href" || d === "href") && t !== "script" && Rr(p, "data:") === 0 && Rt[t])) {
                if (!(Pe && !X(te, Me(p, re, "")))) {
                  if (p)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Ht = function(t) {
    return t !== "annotation-xml" && pt(t, ce);
  }, zt = function(t) {
    fe(v.beforeSanitizeAttributes, t, null);
    const {
      attributes: d
    } = t;
    if (!d || it(t))
      return;
    const p = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: w,
      forceKeepAttr: void 0
    };
    let L = d.length;
    for (; L--; ) {
      const Y = d[L], {
        name: H,
        namespaceURI: Q,
        value: pe
      } = Y, Ae = U(H), ct = pe;
      let G = H === "value" ? ct : Cr(ct);
      if (p.attrName = Ae, p.attrValue = G, p.keepAttr = !0, p.forceKeepAttr = void 0, fe(v.uponSanitizeAttribute, t, p), G = p.attrValue, vt && (Ae === "id" || Ae === "name") && (ye(H, t), G = dn + G), He && X(/((--!?|])>)|<\/(style|title|textarea)/i, G)) {
        ye(H, t);
        continue;
      }
      if (Ae === "attributename" && pt(G, "href")) {
        ye(H, t);
        continue;
      }
      if (p.forceKeepAttr)
        continue;
      if (!p.keepAttr) {
        ye(H, t);
        continue;
      }
      if (!_t && X(/\/>/i, G)) {
        ye(H, t);
        continue;
      }
      Ee && qe([D, j, P], (Ft) => {
        G = Me(G, Ft, " ");
      });
      const Ut = U(t.nodeName);
      if (!Pt(Ut, Ae, G)) {
        ye(H, t);
        continue;
      }
      if (C && typeof E == "object" && typeof E.getAttributeType == "function" && !Q)
        switch (E.getAttributeType(Ut, Ae)) {
          case "TrustedHTML": {
            G = C.createHTML(G);
            break;
          }
          case "TrustedScriptURL": {
            G = C.createScriptURL(G);
            break;
          }
        }
      if (G !== ct)
        try {
          Q ? t.setAttributeNS(Q, H, G) : t.setAttribute(H, G), it(t) ? le(t) : qt(e.removed);
        } catch {
          ye(H, t);
        }
    }
    fe(v.afterSanitizeAttributes, t, null);
  }, xn = function h(t) {
    let d = null;
    const p = Ot(t);
    for (fe(v.beforeSanitizeShadowDOM, t, null); d = p.nextNode(); )
      fe(v.uponSanitizeShadowNode, d, null), Dt(d), zt(d), d.content instanceof s && h(d.content);
    fe(v.afterSanitizeShadowDOM, t, null);
  };
  return e.sanitize = function(h) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = null, p = null, L = null, Y = null;
    if (st = !h, st && (h = "<!-->"), typeof h != "string" && !It(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw Oe("dirty is not a string, aborting");
      } else
        throw Oe("toString is not a function");
    if (!e.isSupported)
      return h;
    if (et || lt(t), e.removed = [], typeof h == "string" && (Ce = !1), Ce) {
      if (h.nodeName) {
        const pe = U(h.nodeName);
        if (!g[pe] || ue[pe])
          throw Oe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof u)
      d = Mt("<!---->"), p = d.ownerDocument.importNode(h, !0), p.nodeType === De.element && p.nodeName === "BODY" || p.nodeName === "HTML" ? d = p : d.appendChild(p);
    else {
      if (!Te && !Ee && !xe && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return C && Ue ? C.createHTML(h) : h;
      if (d = Mt(h), !d)
        return Te ? null : Ue ? O : "";
    }
    d && tt && le(d.firstChild);
    const H = Ot(Ce ? h : d);
    for (; L = H.nextNode(); )
      Dt(L), zt(L), L.content instanceof s && xn(L.content);
    if (Ce)
      return h;
    if (Te) {
      if (ze)
        for (Y = B.call(d.ownerDocument); d.firstChild; )
          Y.appendChild(d.firstChild);
      else
        Y = d;
      return (w.shadowroot || w.shadowrootmode) && (Y = V.call(r, Y, !0)), Y;
    }
    let Q = xe ? d.outerHTML : d.innerHTML;
    return xe && g["!doctype"] && d.ownerDocument && d.ownerDocument.doctype && d.ownerDocument.doctype.name && X(cn, d.ownerDocument.doctype.name) && (Q = "<!DOCTYPE " + d.ownerDocument.doctype.name + `>
` + Q), Ee && qe([D, j, P], (pe) => {
      Q = Me(Q, pe, " ");
    }), C && Ue ? C.createHTML(Q) : Q;
  }, e.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    lt(h), et = !0;
  }, e.clearConfig = function() {
    _e = null, et = !1;
  }, e.isValidAttribute = function(h, t, d) {
    _e || lt({});
    const p = U(h), L = U(t);
    return Pt(p, L, d);
  }, e.addHook = function(h, t) {
    typeof t == "function" && je(v[h], t);
  }, e.removeHook = function(h, t) {
    if (t !== void 0) {
      const d = Ar(v[h], t);
      return d === -1 ? void 0 : vr(v[h], d, 1)[0];
    }
    return qt(v[h]);
  }, e.removeHooks = function(h) {
    v[h] = [];
  }, e.removeAllHooks = function() {
    v = en();
  }, e;
}
var Wr = un();
const Gr = (o) => {
  const [e, a] = S([{ html: o }]), [r, l] = S(0), s = Ke(null), i = ut((b, R = !1) => {
    if (s.current && clearTimeout(s.current), R) {
      a((E) => E[r].html === b ? E : [...E.slice(0, r + 1), { html: b }]), l((E) => E + 1);
      return;
    }
    s.current = setTimeout(() => {
      a((E) => E[r].html === b ? E : [...E.slice(0, r + 1), { html: b }]), l((E) => E + 1);
    }, 500);
  }, [r]), u = ut(() => {
    if (r > 0) {
      const b = r - 1;
      return l(b), e[b].html;
    }
    return null;
  }, [r, e]), f = ut(() => {
    if (r < e.length - 1) {
      const b = r + 1;
      return l(b), e[b].html;
    }
    return null;
  }, [r, e]), m = r > 0, y = r < e.length - 1;
  return {
    history: e,
    pointer: r,
    pushState: i,
    undo: u,
    redo: f,
    canUndo: m,
    canRedo: y
  };
}, Yr = () => {
  const o = [];
  for (let e = 0; e <= 80; e++) {
    const a = e * 10, r = e % 10 === 0 ? 12 : e % 5 === 0 ? 8 : 4;
    o.push(
      /* @__PURE__ */ n.jsx(
        "line",
        {
          x1: a,
          y1: 20 - r,
          x2: a,
          y2: 20,
          stroke: "#ccc",
          strokeWidth: "1"
        },
        e
      )
    ), e % 10 === 0 && o.push(
      /* @__PURE__ */ n.jsx(
        "text",
        {
          x: a + 2,
          y: 10,
          fontSize: "8",
          fill: "#999",
          children: e
        },
        `text-${e}`
      )
    );
  }
  return /* @__PURE__ */ n.jsxs("div", { className: "h-6 w-full bg-gray-50 border-b border-gray-300 relative overflow-hidden select-none", children: [
    /* @__PURE__ */ n.jsx("svg", { width: "100%", height: "100%", className: "absolute left-8", children: o }),
    /* @__PURE__ */ n.jsx("div", { className: "absolute top-0 left-0 w-8 h-full bg-gray-200 border-r border-gray-300 opacity-50" }),
    /* @__PURE__ */ n.jsx("div", { className: "absolute top-0 right-0 w-8 h-full bg-gray-200 border-l border-gray-300 opacity-50" })
  ] });
}, Br = () => {
  const o = [];
  for (let e = 0; e <= 100; e++) {
    const a = e * 10, r = e % 10 === 0 ? 12 : e % 5 === 0 ? 8 : 4;
    o.push(
      /* @__PURE__ */ n.jsx(
        "line",
        {
          x1: 20 - r,
          y1: a,
          x2: 20,
          y2: a,
          stroke: "#ccc",
          strokeWidth: "1"
        },
        e
      )
    ), e % 10 === 0 && e !== 0 && o.push(
      /* @__PURE__ */ n.jsx(
        "text",
        {
          x: 2,
          y: a + 8,
          fontSize: "8",
          fill: "#999",
          className: "rotate-[-90deg] origin-center",
          children: e
        },
        `text-${e}`
      )
    );
  }
  return /* @__PURE__ */ n.jsxs("div", { className: "w-6 h-full bg-gray-50 border-r border-gray-300 relative overflow-hidden select-none flex-shrink-0", children: [
    /* @__PURE__ */ n.jsx("svg", { width: "100%", height: "2000px", className: "absolute top-8", children: o }),
    /* @__PURE__ */ n.jsx("div", { className: "absolute top-0 left-0 w-full h-8 bg-gray-200 border-b border-gray-300 opacity-50" })
  ] });
}, Vr = ({
  content: o = "",
  onChange: e,
  onBlur: a,
  onFocus: r,
  config: l = {
    showTextFormat: !0,
    showInlineFormat: !0,
    showAlignment: !0,
    showList: !0,
    showInsert: !0
  }
}) => {
  const s = Ke(null), [i, u] = S({
    bold: !1,
    italic: !1,
    underline: !1,
    strikethrough: !1,
    alignLeft: !1,
    alignCenter: !1,
    alignRight: !1,
    alignJustify: !1,
    bulletList: !1,
    numberedList: !1
  }), [f, m] = S("p"), { pushState: y, undo: b, redo: R, canUndo: E, canRedo: I } = Gr(o), x = () => {
    const _ = b();
    _ !== null && s.current && (s.current.innerHTML = _, e && e(_), O());
  }, W = () => {
    const _ = R();
    _ !== null && s.current && (s.current.innerHTML = _, e && e(_), O());
  }, N = (_) => {
    const B = window.getSelection();
    if (!B || B.rangeCount === 0) return;
    const z = B.getRangeAt(0);
    let V = z.commonAncestorContainer;
    V.nodeType === Node.TEXT_NODE && (V = V.parentNode);
    let v = null, D = V;
    for (; D && D !== s.current; ) {
      if (D.nodeType === Node.ELEMENT_NODE) {
        const j = D, P = j.tagName.toLowerCase();
        if (["p", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(P)) {
          v = j;
          break;
        }
      }
      D = D.parentNode;
    }
    if (v && v !== s.current) {
      const j = document.createElement(_);
      j.innerHTML = v.innerHTML, v.style.textAlign && (j.style.textAlign = v.style.textAlign), v.parentNode?.replaceChild(j, v), m(_);
      const P = document.createRange();
      P.selectNodeContents(j), B.removeAllRanges(), B.addRange(P);
    } else {
      const j = document.createElement(_);
      if (z.toString())
        try {
          z.surroundContents(j);
        } catch {
          const q = z.extractContents();
          j.appendChild(q), z.insertNode(j);
        }
      else {
        j.innerHTML = "<br>", z.insertNode(j);
        const P = document.createRange();
        P.setStart(j, 0), P.collapse(!0), B.removeAllRanges(), B.addRange(P);
      }
      m(_);
    }
    s.current && y(s.current.innerHTML, !0), setTimeout(() => O(), 10);
  }, $ = () => {
    if (s.current && e) {
      const _ = s.current.innerHTML;
      e(_), y(_);
    }
  }, K = () => {
    if (a && s.current) {
      const _ = s.current.innerHTML;
      a(_);
    }
  }, C = () => {
    r && r();
  };
  ve(() => {
    if (s.current && o !== void 0) {
      const _ = Wr.sanitize(o);
      s.current.innerHTML !== _ && (s.current.innerHTML = _);
    }
  }, [o]);
  const O = () => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0)
      return;
    let z = _.getRangeAt(0).commonAncestorContainer;
    z.nodeType === Node.TEXT_NODE && (z = z.parentNode);
    let V = z, v = "p";
    for (; V && V !== s.current; ) {
      if (["H1", "H2", "H3", "H4", "H5", "H6", "P"].includes(
        V.tagName
      )) {
        v = V.tagName.toLowerCase();
        break;
      }
      V = V.parentElement;
    }
    m(v);
    let D = z, j = !1, P = !1;
    for (; D && D !== s.current; ) {
      if (D.tagName === "UL") {
        j = !0;
        break;
      } else if (D.tagName === "OL") {
        P = !0;
        break;
      }
      D = D.parentElement;
    }
    const q = (ce) => {
      let c = z;
      for (; c && c !== s.current; ) {
        if (c.nodeType === Node.ELEMENT_NODE && c.tagName.toLowerCase() === ce.toLowerCase())
          return !0;
        c = c.parentNode;
      }
      return !1;
    };
    let ee = z;
    for (; ee && ee !== s.current; ) {
      if (ee.nodeType === Node.ELEMENT_NODE) {
        const ce = ee.tagName.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(ce)) {
          m(ce);
          break;
        }
      }
      ee = ee.parentNode;
    }
    (ee === s.current || !ee) && m("p");
    let te = z;
    for (; te && te !== s.current && te.nodeType !== Node.ELEMENT_NODE; )
      te = te.parentNode;
    const re = te && te.nodeType === Node.ELEMENT_NODE ? te.style.textAlign : "";
    u({
      bold: q("strong") || q("b"),
      italic: q("em") || q("i"),
      underline: q("u"),
      strikethrough: q("s") || q("strike") || q("del"),
      alignLeft: re === "" || re === "left",
      alignCenter: re === "center",
      alignRight: re === "right",
      alignJustify: re === "justify",
      bulletList: j,
      numberedList: P
    });
  }, ge = () => {
    const _ = window.getSelection();
    if (_ && _.rangeCount > 0) {
      const B = _.getRangeAt(0);
      s.current?.contains(B.commonAncestorContainer) && O();
    }
  };
  return ve(() => (document.addEventListener("selectionchange", ge), () => {
    document.removeEventListener("selectionchange", ge);
  }), []), /* @__PURE__ */ n.jsxs("div", { className: "teddy-editor w-full h-screen bg-gray-100 flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ n.jsx(
      Tr,
      {
        config: l,
        activeFormats: i,
        currentTextFormat: f,
        updateActiveFormats: O,
        applyTextFormat: N,
        editorRef: s,
        undo: x,
        redo: W,
        canUndo: E,
        canRedo: I
      }
    ),
    /* @__PURE__ */ n.jsx("div", { className: "flex-1 overflow-auto flex justify-center p-4 relative", children: /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col gap-1 w-full max-w-4xl", children: [
      /* @__PURE__ */ n.jsx("div", { className: "pl-6 select-none bg-gray-100 sticky top-0 z-10 pt-2", children: /* @__PURE__ */ n.jsx(Yr, {}) }),
      /* @__PURE__ */ n.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ n.jsx("div", { className: "pr-1 select-none pt-8 hidden sm:block h-full", children: /* @__PURE__ */ n.jsx(Br, {}) }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: s,
            contentEditable: !0,
            className: "document-page outline-none focus:ring-0 prose prose-headings:mt-4 prose-headings:mb-2 w-full bg-white shadow-sm p-8 min-h-[1000px]",
            style: {
              whiteSpace: "pre-wrap"
            },
            onMouseUp: O,
            onKeyUp: O,
            onInput: $,
            onBlur: K,
            onFocus: C
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ n.jsx(
      ur,
      {
        editorRef: s,
        activeFormats: i,
        currentTextFormat: f,
        updateActiveFormats: O,
        applyTextFormat: N
      }
    )
  ] });
};
function Xr() {
  return /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx(
    Vr,
    {
      content: "<p>Initial content</p>",
      onChange: (o) => console.log("Content changed:", o),
      onBlur: (o) => console.log("Editor lost focus", o),
      onFocus: () => console.log("Editor gained focus")
    }
  ) });
}
export {
  Xr as default
};
