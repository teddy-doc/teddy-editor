import yn, { forwardRef as tn, createElement as yt, useState as S, useRef as Ce, useEffect as pe, useCallback as ut } from "react";
var Be = { exports: {} }, Le = {};
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
  if ($t) return Le;
  $t = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function a(o, l, s) {
    var i = null;
    if (s !== void 0 && (i = "" + s), l.key !== void 0 && (i = "" + l.key), "key" in l) {
      s = {};
      for (var u in l)
        u !== "key" && (s[u] = l[u]);
    } else s = l;
    return l = s.ref, {
      $$typeof: r,
      type: o,
      key: i,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return Le.Fragment = n, Le.jsx = a, Le.jsxs = a, Le;
}
var je = {};
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
    function r(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === F ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case E:
          return "Fragment";
        case v:
          return "Profiler";
        case j:
          return "StrictMode";
        case X:
          return "Suspense";
        case ge:
          return "SuspenseList";
        case _:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case C:
            return "Portal";
          case V:
            return (c.displayName || "Context") + ".Provider";
          case U:
            return (c._context.displayName || "Context") + ".Consumer";
          case L:
            var h = c.render;
            return c = c.displayName, c || (c = h.displayName || h.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case ne:
            return h = c.displayName || null, h !== null ? h : r(c.type) || "Memo";
          case he:
            h = c._payload, c = c._init;
            try {
              return r(c(h));
            } catch {
            }
        }
      return null;
    }
    function n(c) {
      return "" + c;
    }
    function a(c) {
      try {
        n(c);
        var h = !1;
      } catch {
        h = !0;
      }
      if (h) {
        h = console;
        var R = h.error, A = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return R.call(
          h,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          A
        ), n(c);
      }
    }
    function o(c) {
      if (c === E) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === he)
        return "<...>";
      try {
        var h = r(c);
        return h ? "<" + h + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var c = w.A;
      return c === null ? null : c.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(c) {
      if ($.call(c, "key")) {
        var h = Object.getOwnPropertyDescriptor(c, "key").get;
        if (h && h.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function u(c, h) {
      function R() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          h
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: R,
        configurable: !0
      });
    }
    function m() {
      var c = r(this.type);
      return G[c] || (G[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function f(c, h, R, A, oe, k, ce, xe) {
      return R = k.ref, c = {
        $$typeof: y,
        type: c,
        key: h,
        props: k,
        _owner: oe
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(c, "ref", {
        enumerable: !1,
        get: m
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
        value: ce
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function T(c, h, R, A, oe, k, ce, xe) {
      var O = h.children;
      if (O !== void 0)
        if (A)
          if (W(O)) {
            for (A = 0; A < O.length; A++)
              p(O[A]);
            Object.freeze && Object.freeze(O);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(O);
      if ($.call(h, "key")) {
        O = r(c);
        var ue = Object.keys(h).filter(function(He) {
          return He !== "key";
        });
        A = 0 < ue.length ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}", te[O + A] || (ue = 0 < ue.length ? "{" + ue.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          A,
          O,
          ue,
          O
        ), te[O + A] = !0);
      }
      if (O = null, R !== void 0 && (a(R), O = "" + R), i(h) && (a(h.key), O = "" + h.key), "key" in h) {
        R = {};
        for (var be in h)
          be !== "key" && (R[be] = h[be]);
      } else R = h;
      return O && u(
        R,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), f(
        c,
        O,
        k,
        oe,
        l(),
        R,
        ce,
        xe
      );
    }
    function p(c) {
      typeof c == "object" && c !== null && c.$$typeof === y && c._store && (c._store.validated = 1);
    }
    var g = yn, y = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), V = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), _ = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), w = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, W = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(c) {
        return c();
      }
    };
    var D, G = {}, q = g["react-stack-bottom-frame"].bind(
      g,
      s
    )(), Q = I(o(s)), te = {};
    je.Fragment = E, je.jsx = function(c, h, R, A, oe) {
      var k = 1e4 > w.recentlyCreatedOwnerStacks++;
      return T(
        c,
        h,
        R,
        !1,
        A,
        oe,
        k ? Error("react-stack-top-frame") : q,
        k ? I(o(c)) : Q
      );
    }, je.jsxs = function(c, h, R, A, oe) {
      var k = 1e4 > w.recentlyCreatedOwnerStacks++;
      return T(
        c,
        h,
        R,
        !0,
        A,
        oe,
        k ? Error("react-stack-top-frame") : q,
        k ? I(o(c)) : Q
      );
    };
  }()), je;
}
var Gt;
function wn() {
  return Gt || (Gt = 1, process.env.NODE_ENV === "production" ? Be.exports = En() : Be.exports = Tn()), Be.exports;
}
var e = wn();
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), _n = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, a, o) => o ? o.toUpperCase() : a.toLowerCase()
), Yt = (r) => {
  const n = _n(r);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, nn = (...r) => r.filter((n, a, o) => !!n && n.trim() !== "" && o.indexOf(n) === a).join(" ").trim(), An = (r) => {
  for (const n in r)
    if (n.startsWith("aria-") || n === "role" || n === "title")
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
    color: r = "currentColor",
    size: n = 24,
    strokeWidth: a = 2,
    absoluteStrokeWidth: o,
    className: l = "",
    children: s,
    iconNode: i,
    ...u
  }, m) => yt(
    "svg",
    {
      ref: m,
      ...vn,
      width: n,
      height: n,
      stroke: r,
      strokeWidth: o ? Number(a) * 24 / Number(n) : a,
      className: nn("lucide", l),
      ...!s && !An(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...i.map(([f, T]) => yt(f, T)),
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
const z = (r, n) => {
  const a = tn(
    ({ className: o, ...l }, s) => yt(Rn, {
      ref: s,
      iconNode: n,
      className: nn(
        `lucide-${Nn(Yt(r))}`,
        `lucide-${r}`,
        o
      ),
      ...l
    })
  );
  return a.displayName = Yt(r), a;
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
], kn = z("align-center", Cn);
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
], Ln = z("align-justify", Sn);
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
], Mn = z("align-left", jn);
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
], Dn = z("align-right", On);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const In = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Pn = z("bold", In);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ke = z("chevron-down", Hn);
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
], Un = z("image", zn);
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
], $n = z("italic", Fn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Gn = z("link", Wn);
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
], Bn = z("list-ordered", Yn);
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
], Xn = z("list", Vn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qn = [
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
], Jn = z("palette", qn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Kn = z("redo", Zn);
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
], er = z("strikethrough", Qn);
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
], nr = z("table", tr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], or = z("underline", rr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], ar = z("undo", sr);
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
], ir = z("video", lr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Qe = z("x", cr), Ve = (r, n, a) => {
  const o = window.getSelection();
  if (!o || o.rangeCount === 0 || !n.current) return;
  const l = o.getRangeAt(0);
  if (l.toString())
    try {
      const s = () => {
        let f = l.commonAncestorContainer;
        for (; f && f !== n.current; ) {
          if (f.nodeType === Node.ELEMENT_NODE) {
            const T = f;
            if (T.tagName.toLowerCase() === r.toLowerCase())
              return { isFormatted: !0, formatElement: T };
          }
          f = f.parentNode;
        }
        return { isFormatted: !1, formatElement: null };
      }, { isFormatted: i, formatElement: u } = s();
      let m = null;
      if (i && u) {
        const f = u.parentNode, T = document.createTextNode(u.textContent || "");
        f?.replaceChild(T, u), f?.normalize();
        const p = document.createRange();
        p.selectNodeContents(T), o.removeAllRanges(), o.addRange(p);
      } else {
        m = document.createElement(r);
        try {
          l.surroundContents(m);
          const f = document.createRange();
          f.selectNodeContents(m), o.removeAllRanges(), o.addRange(f);
        } catch {
          const T = l.extractContents();
          m.appendChild(T), l.insertNode(m);
          const p = document.createRange();
          p.selectNodeContents(m), o.removeAllRanges(), o.addRange(p);
        }
      }
      a();
    } catch (s) {
      console.warn("Error applying format:", s), a();
    }
}, rn = ({
  editorRef: r,
  activeFormats: n,
  updateActiveFormats: a,
  getButtonClass: o
}) => /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Ve("strong", r, a),
      className: o(n.bold),
      title: "Bold",
      children: /* @__PURE__ */ e.jsx(Pn, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Ve("em", r, a),
      className: o(n.italic),
      title: "Italic",
      children: /* @__PURE__ */ e.jsx($n, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Ve("u", r, a),
      className: o(n.underline),
      title: "Underline",
      children: /* @__PURE__ */ e.jsx(or, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Ve("s", r, a),
      className: o(n.strikethrough),
      title: "Strikethrough",
      children: /* @__PURE__ */ e.jsx(er, { size: 18 })
    }
  )
] }), Xe = (r, n) => {
  const a = window.getSelection();
  if (!a || a.rangeCount === 0) return;
  let l = a.getRangeAt(0).commonAncestorContainer;
  for (; l && l.nodeType !== Node.ELEMENT_NODE; )
    l = l.parentNode;
  if (l && l.nodeType === Node.ELEMENT_NODE) {
    const s = l;
    s.style.textAlign = r === "left" ? "" : r, n();
  }
}, on = ({
  activeFormats: r,
  updateActiveFormats: n,
  getButtonClass: a
}) => /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Xe("left", n),
      className: a(r.alignLeft),
      title: "Align Left",
      children: /* @__PURE__ */ e.jsx(Mn, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Xe("center", n),
      className: a(r.alignCenter),
      title: "Align Center",
      children: /* @__PURE__ */ e.jsx(kn, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Xe("right", n),
      className: a(r.alignRight),
      title: "Align Right",
      children: /* @__PURE__ */ e.jsx(Dn, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Xe("justify", n),
      className: a(r.alignJustify),
      title: "Justify",
      children: /* @__PURE__ */ e.jsx(Ln, { size: 18 })
    }
  )
] }), Bt = (r, n, a) => {
  const o = window.getSelection();
  if (!o || o.rangeCount === 0 || !n.current) return;
  const l = o.getRangeAt(0);
  let s = l.commonAncestorContainer;
  s.nodeType === Node.TEXT_NODE && (s = s.parentNode);
  let i = s;
  for (; i && i !== n.current && !["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL"].includes(
    i.tagName
  ); )
    i = i.parentElement;
  if (!i || i === n.current) {
    const u = document.createElement(r), m = document.createElement("li");
    m.textContent = o.toString() || "List item", u.appendChild(m), l.deleteContents(), l.insertNode(u);
    const f = document.createRange();
    f.setStart(m, 0), f.setEnd(m, m.childNodes.length), o.removeAllRanges(), o.addRange(f);
  } else if (i.tagName === "LI") {
    const u = i.parentElement;
    if (u.tagName.toLowerCase() === r) {
      const m = document.createElement("p");
      m.innerHTML = i.innerHTML, u.parentNode?.replaceChild(m, u);
    } else {
      const m = document.createElement(r);
      m.innerHTML = u.innerHTML, u.parentNode?.replaceChild(m, u);
    }
  } else {
    const u = document.createElement(r), m = document.createElement("li");
    m.innerHTML = i.innerHTML, u.appendChild(m), i.parentNode?.replaceChild(u, i);
  }
  a();
}, sn = ({
  editorRef: r,
  activeFormats: n,
  updateActiveFormats: a,
  getButtonClass: o
}) => /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => {
        r?.current && Bt("ul", r, a);
      },
      className: o(n.bulletList),
      title: "Bullet List",
      children: /* @__PURE__ */ e.jsx(Xn, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => {
        r?.current && Bt("ol", r, a);
      },
      className: o(n.numberedList),
      title: "Numbered List",
      children: /* @__PURE__ */ e.jsx(Bn, { size: 18 })
    }
  )
] }), ur = ({
  editorRef: r,
  activeFormats: n,
  currentTextFormat: a,
  updateActiveFormats: o,
  applyTextFormat: l
}) => {
  const [s, i] = S({ top: 0, left: 0 }), [u, m] = S(!1), [f, T] = S(!1), p = Ce(null), g = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" }
  ];
  pe(() => {
    const E = () => {
      const j = window.getSelection();
      if (!j || j.rangeCount === 0 || j.isCollapsed || !r.current || !r.current.contains(j.anchorNode)) {
        m(!1), T(!1);
        return;
      }
      const U = j.getRangeAt(0).getBoundingClientRect(), V = p.current?.offsetHeight || 50, L = U.top - V - 45, X = U.left + U.width / 2;
      i({ top: L, left: X }), m(!0);
    };
    return document.addEventListener("selectionchange", E), window.addEventListener("scroll", E, !0), window.addEventListener("resize", E), () => {
      document.removeEventListener("selectionchange", E), window.removeEventListener("scroll", E, !0), window.removeEventListener("resize", E);
    };
  }, [r]);
  const y = (E) => `p-1.5 rounded transition-colors ${E ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, C = (E) => {
    l(E), T(!1);
  };
  return u ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: p,
      className: "fixed z-40 flex items-center gap-1 p-1 bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in zoom-in-95 duration-200",
      style: {
        top: `${s.top}px`,
        left: `${s.left}px`,
        transform: "translateX(-50%)"
      },
      onMouseDown: (E) => {
        E.preventDefault();
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => T(!f),
              className: "flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between",
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[80px]", children: g.find((E) => E.value === a)?.label || "Paragraph" }),
                /* @__PURE__ */ e.jsx(Ke, { size: 12 })
              ]
            }
          ),
          f && /* @__PURE__ */ e.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[140px] max-h-[300px] overflow-y-auto", children: g.map((E) => /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => C(E.tag),
              className: `w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${a === E.value ? "bg-blue-50 text-blue-600" : "text-gray-700"}`,
              children: E.label
            },
            E.value
          )) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ e.jsx(
          rn,
          {
            editorRef: r,
            activeFormats: n,
            updateActiveFormats: o,
            getButtonClass: y
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ e.jsx(
          sn,
          {
            editorRef: r,
            activeFormats: {
              bulletList: n.bulletList,
              numberedList: n.numberedList
            },
            updateActiveFormats: o,
            getButtonClass: y
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ e.jsx(
          on,
          {
            activeFormats: {
              alignLeft: n.alignLeft,
              alignCenter: n.alignCenter,
              alignRight: n.alignRight,
              alignJustify: n.alignJustify
            },
            updateActiveFormats: o,
            getButtonClass: y
          }
        )
      ]
    }
  ) : null;
};
let Re = null;
const dt = () => {
  const r = window.getSelection();
  r && r.rangeCount > 0 && (Re = r.getRangeAt(0).cloneRange());
}, Nt = () => {
  if (Re) {
    const r = window.getSelection();
    r?.removeAllRanges(), r?.addRange(Re);
  }
}, mt = () => {
  const r = window.getSelection();
  if (!r || r.rangeCount === 0) return null;
  let a = r.getRangeAt(0).commonAncestorContainer;
  a.nodeType === Node.TEXT_NODE && (a = a.parentNode);
  let o = a;
  for (; o && o !== document.body; ) {
    if (o.nodeType === Node.ELEMENT_NODE) {
      const l = o, s = l.tagName.toLowerCase();
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
    o = o.parentNode;
  }
  return null;
}, dr = (r, n) => {
  Nt();
  const a = window.getSelection();
  if (!a || a.rangeCount === 0) {
    const i = document.querySelector(
      '[contenteditable="true"]'
    );
    if (i) {
      const u = document.createElement("a");
      u.href = r, u.textContent = n || r, u.target = "_blank", u.rel = "noopener noreferrer", u.className = "text-blue-600 underline hover:text-blue-800", i.appendChild(u);
      const m = document.createTextNode(" ");
      i.appendChild(m);
      const f = document.createRange();
      f.setStartAfter(m), f.collapse(!0), a && (a.removeAllRanges(), a.addRange(f));
    }
    return;
  }
  const o = a.getRangeAt(0);
  let l = null, s = o.commonAncestorContainer;
  for (; s && s !== document.body; ) {
    if (s.nodeType === Node.ELEMENT_NODE && s.tagName.toLowerCase() === "a") {
      l = s;
      break;
    }
    s = s.parentNode;
  }
  if (l)
    l.setAttribute("href", r), l.textContent = n || r;
  else {
    const i = document.createElement("a");
    i.href = r, i.textContent = n || r, i.target = "_blank", i.rel = "noopener noreferrer", i.className = "text-blue-600 underline hover:text-blue-800", o.deleteContents(), o.insertNode(i);
    const u = document.createRange();
    u.setStartAfter(i), u.collapse(!0), a.removeAllRanges(), a.addRange(u);
  }
  Re = null;
}, mr = (r, n = "Inserted image") => {
  Nt();
  const a = window.getSelection();
  if (!a || a.rangeCount === 0) {
    const i = document.querySelector(
      '[contenteditable="true"]'
    );
    if (i) {
      const u = document.createElement("img");
      u.src = r, u.alt = n, u.className = "max-w-full h-auto rounded shadow-sm", i.appendChild(u);
      const m = document.createElement("br");
      i.appendChild(m);
      const f = document.createRange();
      f.setStartAfter(m), f.collapse(!0), a && (a.removeAllRanges(), a.addRange(f));
    }
    return;
  }
  const o = a.getRangeAt(0);
  let l = null, s = o.commonAncestorContainer;
  for (; s && s !== document.body; ) {
    if (s.nodeType === Node.ELEMENT_NODE && s.tagName.toLowerCase() === "img") {
      l = s;
      break;
    }
    s = s.parentNode;
  }
  if (l)
    l.setAttribute("src", r), l.setAttribute("alt", n);
  else {
    const i = document.createElement("img");
    i.src = r, i.alt = n, i.className = "max-w-full h-auto rounded shadow-sm", o.deleteContents(), o.insertNode(i);
    const u = document.createRange();
    u.setStartAfter(i), u.collapse(!0), a.removeAllRanges(), a.addRange(u);
  }
  Re = null;
}, fr = (r) => {
  Nt();
  const n = window.getSelection();
  if (!n || n.rangeCount === 0) {
    const s = document.querySelector(
      '[contenteditable="true"]'
    );
    if (s) {
      const i = document.createElement("iframe");
      i.src = r, i.width = "560", i.height = "315", i.className = "max-w-full rounded shadow-sm", i.setAttribute("frameborder", "0"), i.setAttribute("allowfullscreen", "true"), i.setAttribute(
        "sandbox",
        "allow-scripts allow-same-origin allow-presentation"
      ), s.appendChild(i);
      const u = document.createElement("br");
      s.appendChild(u);
      const m = document.createRange();
      m.setStartAfter(u), m.collapse(!0), n && (n.removeAllRanges(), n.addRange(m));
    }
    return;
  }
  const a = n.getRangeAt(0);
  let o = null, l = a.commonAncestorContainer;
  for (; l && l !== document.body; ) {
    if (l.nodeType === Node.ELEMENT_NODE && l.tagName.toLowerCase() === "iframe") {
      o = l;
      break;
    }
    l = l.parentNode;
  }
  if (o)
    o.setAttribute("src", r);
  else {
    const s = document.createElement("iframe");
    s.src = r, s.width = "560", s.height = "315", s.className = "max-w-full rounded shadow-sm", s.setAttribute("frameborder", "0"), s.setAttribute("allowfullscreen", "true"), s.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-presentation"
    ), a.deleteContents(), a.insertNode(s);
    const i = document.createRange();
    i.setStartAfter(s), i.collapse(!0), n.removeAllRanges(), n.addRange(i);
  }
  Re = null;
}, pr = ({
  isOpen: r,
  onClose: n,
  onInsert: a,
  initialData: o
}) => {
  const [l, s] = S(""), [i, u] = S("");
  pe(() => {
    r && o ? (s(o.url), u(o.text)) : r && !o && (s(""), u(""));
  }, [r, o]);
  const m = (f) => {
    f.preventDefault(), l.trim() && (a(l.trim(), i.trim()), s(""), u(""), n());
  };
  return r ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Link" : "Insert Link" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: n,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ e.jsx(Qe, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: m, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "URL" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (f) => s(f.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "https://example.com",
            required: !0,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Link Text (optional)" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "text",
            value: i,
            onChange: (f) => u(f.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Link text"
          }
        )
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: n,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: o ? "Update Link" : "Insert Link"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, gr = ({
  isOpen: r,
  onClose: n,
  onInsert: a,
  initialData: o
}) => {
  const [l, s] = S(""), [i, u] = S(""), m = Ce(null);
  pe(() => {
    r && o ? (s(o.alt), u(o.src)) : r && !o && (s(""), u(""));
  }, [r, o]);
  const f = (g) => {
    const y = g.target.files?.[0];
    if (y) {
      const C = new FileReader();
      C.onload = (E) => {
        const j = E.target?.result;
        a(j, l || y.name), s(""), u(""), n(), m.current && (m.current.value = "");
      }, C.readAsDataURL(y);
    }
  }, T = () => {
    o && i && (a(i, l), s(""), u(""), n());
  }, p = () => {
    m.current && m.current.click();
  };
  return r ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Image" : "Insert Image" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: n,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ e.jsx(Qe, { size: 20 })
        }
      )
    ] }),
    o && /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(
        "img",
        {
          src: i,
          alt: l,
          className: "max-w-full h-32 object-contain rounded border"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: p,
          className: "mt-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200",
          children: "Replace Image"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: m,
        type: "file",
        accept: "image/*",
        onChange: f,
        className: "hidden"
      }
    ),
    !o && /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Select Image File" }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "file",
          accept: "image/*",
          onChange: f,
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Alt Text (optional)" }),
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "text",
          value: l,
          onChange: (g) => s(g.target.value),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          placeholder: "Image description",
          autoFocus: !!o
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: n,
          className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      o && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: T,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
          children: "Update Image"
        }
      )
    ] })
  ] }) }) : null;
}, hr = ({
  isOpen: r,
  onClose: n,
  onInsert: a,
  initialData: o
}) => {
  const [l, s] = S(""), [i, u] = S("");
  pe(() => {
    r && o ? s(o.src) : r && !o && s(""), u("");
  }, [r, o]);
  const m = (T) => {
    const p = T.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
    );
    if (p)
      return `https://www.youtube.com/embed/${p[1]}`;
    const g = T.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return g ? `https://player.vimeo.com/video/${g[1]}` : T.includes("youtube.com/embed/") || T.includes("player.vimeo.com/video/") ? T : null;
  }, f = (T) => {
    if (T.preventDefault(), u(""), l.trim()) {
      const p = m(l.trim());
      p ? (a(p), s(""), n()) : u("Invalid URL. Only YouTube and Vimeo are supported for security.");
    }
  };
  return r ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Video" : "Insert Video" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: n,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ e.jsx(Qe, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: f, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Video URL" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (T) => s(T.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "YouTube, Vimeo, or embed URL",
            required: !0,
            autoFocus: !0
          }
        ),
        i && /* @__PURE__ */ e.jsx("p", { className: "text-sm text-red-500 mt-1", children: i }),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Supports YouTube, Vimeo, and direct embed URLs" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: n,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: o ? "Update Video" : "Insert Video"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, xr = () => {
  const [r, n] = S(!1), [a, o] = S(!1), [l, s] = S(!1), [i, u] = S(null), m = () => {
    dt();
    const p = mt();
    u(p?.type === "link" ? p : null), n(!0);
  }, f = () => {
    dt();
    const p = mt();
    u(p?.type === "image" ? p : null), o(!0);
  }, T = () => {
    dt();
    const p = mt();
    u(p?.type === "video" ? p : null), s(!0);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: m,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Link",
          children: /* @__PURE__ */ e.jsx(Gn, { size: 18 })
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: f,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Image",
          children: /* @__PURE__ */ e.jsx(Un, { size: 18 })
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: T,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Video",
          children: /* @__PURE__ */ e.jsx(ir, { size: 18 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      pr,
      {
        isOpen: r,
        onClose: () => {
          n(!1), u(null);
        },
        onInsert: dr,
        initialData: i?.type === "link" ? {
          url: i.url,
          text: i.text
        } : null
      }
    ),
    /* @__PURE__ */ e.jsx(
      gr,
      {
        isOpen: a,
        onClose: () => {
          o(!1), u(null);
        },
        onInsert: mr,
        initialData: i?.type === "image" ? {
          src: i.src,
          alt: i.alt
        } : null
      }
    ),
    /* @__PURE__ */ e.jsx(
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
}, br = ({
  getButtonClass: r,
  onUndo: n,
  onRedo: a,
  canUndo: o,
  canRedo: l
}) => {
  const s = (u) => {
    u.preventDefault(), o && n();
  }, i = (u) => {
    u.preventDefault(), l && a();
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onMouseDown: s,
        className: `${r(!1)} ${o ? "" : "opacity-50 cursor-not-allowed"}`,
        title: "Undo",
        disabled: !o,
        children: /* @__PURE__ */ e.jsx(ar, { size: 18 })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onMouseDown: i,
        className: `${r(!1)} ${l ? "" : "opacity-50 cursor-not-allowed"}`,
        title: "Redo",
        disabled: !l,
        children: /* @__PURE__ */ e.jsx(Kn, { size: 18 })
      }
    )
  ] });
}, yr = ({
  getButtonClass: r,
  updateActiveFormats: n
}) => {
  const [a, o] = S(!1), [l, s] = S(!1), [i, u] = S(!1), [m, f] = S(""), T = [
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
  ], p = [
    { name: "Sans Serif", value: "Arial, Helvetica, sans-serif" },
    { name: "Serif", value: "Times New Roman, Times, serif" },
    { name: "Monospace", value: "Courier New, Courier, monospace" }
  ], g = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96], y = (v) => {
    document.execCommand("foreColor", !1, v), o(!1), n();
  }, C = (v) => {
    document.execCommand("fontName", !1, v), s(!1), n();
  }, E = (v) => {
    document.execCommand("fontSize", !1, "7");
    const U = document.getElementsByTagName("font");
    for (let V = U.length - 1; V >= 0; V--) {
      const L = U[V];
      if (L.getAttribute("size") === "7") {
        const X = document.createElement("span");
        X.style.fontSize = `${v}px`, X.innerHTML = L.innerHTML, L.parentNode?.replaceChild(X, L);
      }
    }
    u(!1), f(""), n();
  }, j = (v) => {
    v.preventDefault(), m && E(m);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1 items-center relative", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ e.jsxs(
        "button",
        {
          onClick: () => s(!l),
          onBlur: () => setTimeout(() => s(!1), 200),
          className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between transition-colors",
          title: "Font Family",
          children: [
            /* @__PURE__ */ e.jsx("span", { className: "font-medium truncate max-w-[80px]", children: "Font" }),
            /* @__PURE__ */ e.jsx(Ke, { size: 14, className: "text-gray-500" })
          ]
        }
      ),
      l && /* @__PURE__ */ e.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px]", children: p.map((v) => /* @__PURE__ */ e.jsx(
        "button",
        {
          onMouseDown: (U) => {
            U.preventDefault(), C(v.value);
          },
          className: "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 font-medium",
          style: { fontFamily: v.value },
          children: v.name
        },
        v.name
      )) })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ e.jsxs(
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
            /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: "Size" }),
            /* @__PURE__ */ e.jsx(Ke, { size: 14, className: "text-gray-500" })
          ]
        }
      ),
      i && /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[100px] max-h-[300px] overflow-y-auto",
          onMouseDown: (v) => v.preventDefault(),
          children: [
            /* @__PURE__ */ e.jsx("div", { className: "p-2 border-b border-gray-100", children: /* @__PURE__ */ e.jsxs("form", { onSubmit: j, className: "flex gap-1", children: [
              /* @__PURE__ */ e.jsx(
                "input",
                {
                  type: "number",
                  value: m,
                  onChange: (v) => f(v.target.value),
                  placeholder: "px",
                  className: "w-12 text-sm border border-gray-300 rounded px-1",
                  onMouseDown: (v) => v.stopPropagation()
                }
              ),
              /* @__PURE__ */ e.jsx("button", { type: "submit", className: "text-xs bg-blue-50 text-blue-600 px-1 rounded", children: "Go" })
            ] }) }),
            g.map((v) => /* @__PURE__ */ e.jsx(
              "button",
              {
                onMouseDown: (U) => {
                  U.preventDefault(), E(v);
                },
                className: "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 hover:text-blue-600",
                children: v
              },
              v
            ))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: () => o(!a),
          onBlur: () => setTimeout(() => o(!1), 200),
          className: r(a),
          title: "Text Color",
          children: /* @__PURE__ */ e.jsx(Jn, { size: 18 })
        }
      ),
      a && /* @__PURE__ */ e.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-2 w-[180px] flex flex-wrap gap-1", children: T.map((v) => /* @__PURE__ */ e.jsx(
        "button",
        {
          onMouseDown: (U) => {
            U.preventDefault(), y(v);
          },
          className: "w-5 h-5 rounded border border-gray-300 hover:scale-110 transition-transform",
          style: { backgroundColor: v },
          title: v
        },
        v
      )) })
    ] })
  ] });
}, Er = ({ getButtonClass: r }) => {
  const [n, a] = S(!1), [o, l] = S(2), [s, i] = S(2), u = (m) => {
    m.preventDefault();
    let f = '<table style="border-collapse: collapse; width: 100%; border: 1px solid #ccc;">';
    f += "<tbody>";
    for (let T = 0; T < o; T++) {
      f += "<tr>";
      for (let p = 0; p < s; p++)
        f += '<td style="border: 1px solid #ccc; padding: 8px; min-width: 50px;">&nbsp;</td>';
      f += "</tr>";
    }
    f += "</tbody></table><p>&nbsp;</p>", document.execCommand("insertHTML", !1, f), a(!1);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => a(!n),
        className: r(n),
        title: "Insert Table",
        children: /* @__PURE__ */ e.jsx(nr, { size: 18 })
      }
    ),
    n && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-64", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ e.jsx("h3", { className: "text-sm font-semibold text-gray-700", children: "Insert Table" }),
        /* @__PURE__ */ e.jsx("button", { onClick: () => a(!1), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ e.jsx(Qe, { size: 16 }) })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: u, children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex gap-4 mb-4", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-medium text-gray-500 mb-1", children: "Rows" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "number",
                min: "1",
                max: "10",
                value: o,
                onChange: (m) => l(parseInt(m.target.value) || 1),
                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ e.jsx("label", { className: "block text-xs font-medium text-gray-500 mb-1", children: "Columns" }),
            /* @__PURE__ */ e.jsx(
              "input",
              {
                type: "number",
                min: "1",
                max: "10",
                value: s,
                onChange: (m) => i(parseInt(m.target.value) || 1),
                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ e.jsx(
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
  config: r,
  activeFormats: n,
  currentTextFormat: a,
  updateActiveFormats: o,
  applyTextFormat: l,
  editorRef: s,
  undo: i,
  redo: u,
  canUndo: m,
  canRedo: f
}) => {
  const [T, p] = S(!1), g = (E) => `p-2 rounded transition-colors ${E ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, y = () => /* @__PURE__ */ e.jsx("div", { className: "w-px h-6 bg-gray-300 mx-1" }), C = [
    { value: "p", label: "Normal text", tag: "p" },
    { value: "h1", label: "Title", tag: "h1" },
    { value: "h2", label: "Subtitle", tag: "h2" },
    { value: "h3", label: "Heading 1", tag: "h3" },
    { value: "h4", label: "Heading 2", tag: "h4" },
    { value: "h5", label: "Heading 3", tag: "h5" },
    { value: "h6", label: "Heading 4", tag: "h6" }
  ];
  return /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 z-50 w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-center border", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-1 max-w-7xl mx-auto w-full", children: [
    /* @__PURE__ */ e.jsx(
      br,
      {
        getButtonClass: g,
        onUndo: i,
        onRedo: u,
        canUndo: m,
        canRedo: f
      }
    ),
    /* @__PURE__ */ e.jsx(y, {}),
    r.showTextFormat && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            onClick: () => p(!T),
            onBlur: () => setTimeout(() => p(!1), 200),
            className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors",
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "font-medium truncate max-w-[100px]", children: C.find((E) => E.value === a)?.label || "Normal text" }),
              /* @__PURE__ */ e.jsx(Ke, { size: 14, className: "text-gray-500" })
            ]
          }
        ),
        T && /* @__PURE__ */ e.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px] max-h-[300px] overflow-y-auto w-full", children: C.map((E) => /* @__PURE__ */ e.jsx(
          "button",
          {
            onMouseDown: (j) => {
              j.preventDefault(), l(E.tag);
            },
            className: `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${a === E.value ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`,
            children: /* @__PURE__ */ e.jsx("span", { className: E.tag === "p" ? "" : E.tag === "h1" ? "text-2xl font-bold" : E.tag === "h2" ? "text-xl font-bold" : E.tag === "h3" ? "text-lg font-bold" : "font-bold", children: E.label })
          },
          E.value
        )) })
      ] }),
      /* @__PURE__ */ e.jsx(y, {})
    ] }),
    /* @__PURE__ */ e.jsx(
      yr,
      {
        getButtonClass: g,
        updateActiveFormats: o
      }
    ),
    /* @__PURE__ */ e.jsx(y, {}),
    r.showInlineFormat && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        rn,
        {
          editorRef: s,
          activeFormats: {
            bold: n.bold,
            italic: n.italic,
            underline: n.underline,
            strikethrough: n.strikethrough
          },
          updateActiveFormats: o,
          getButtonClass: g
        }
      ),
      /* @__PURE__ */ e.jsx(y, {})
    ] }),
    r.showAlignment && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        on,
        {
          activeFormats: {
            alignLeft: n.alignLeft,
            alignCenter: n.alignCenter,
            alignRight: n.alignRight,
            alignJustify: n.alignJustify
          },
          updateActiveFormats: o,
          getButtonClass: g
        }
      ),
      /* @__PURE__ */ e.jsx(y, {})
    ] }),
    r.showList && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        sn,
        {
          editorRef: s,
          activeFormats: {
            bulletList: n.bulletList,
            numberedList: n.numberedList
          },
          updateActiveFormats: o,
          getButtonClass: g
        }
      ),
      /* @__PURE__ */ e.jsx(y, {})
    ] }),
    r.showInsert && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(xr, {}),
      /* @__PURE__ */ e.jsx(Er, { getButtonClass: g })
    ] })
  ] }) });
};
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: an,
  setPrototypeOf: Vt,
  isFrozen: wr,
  getPrototypeOf: Nr,
  getOwnPropertyDescriptor: _r
} = Object;
let {
  freeze: Z,
  seal: re,
  create: Et
} = Object, {
  apply: Tt,
  construct: wt
} = typeof Reflect < "u" && Reflect;
Z || (Z = function(n) {
  return n;
});
re || (re = function(n) {
  return n;
});
Tt || (Tt = function(n, a) {
  for (var o = arguments.length, l = new Array(o > 2 ? o - 2 : 0), s = 2; s < o; s++)
    l[s - 2] = arguments[s];
  return n.apply(a, l);
});
wt || (wt = function(n) {
  for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
    o[l - 1] = arguments[l];
  return new n(...o);
});
const qe = K(Array.prototype.forEach), Ar = K(Array.prototype.lastIndexOf), Xt = K(Array.prototype.pop), Me = K(Array.prototype.push), vr = K(Array.prototype.splice), Ze = K(String.prototype.toLowerCase), ft = K(String.prototype.toString), pt = K(String.prototype.match), Oe = K(String.prototype.replace), Rr = K(String.prototype.indexOf), Cr = K(String.prototype.trim), se = K(Object.prototype.hasOwnProperty), J = K(RegExp.prototype.test), De = kr(TypeError);
function K(r) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
      o[l - 1] = arguments[l];
    return Tt(r, n, o);
  };
}
function kr(r) {
  return function() {
    for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++)
      a[o] = arguments[o];
    return wt(r, a);
  };
}
function N(r, n) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ze;
  Vt && Vt(r, null);
  let o = n.length;
  for (; o--; ) {
    let l = n[o];
    if (typeof l == "string") {
      const s = a(l);
      s !== l && (wr(n) || (n[o] = s), l = s);
    }
    r[l] = !0;
  }
  return r;
}
function Sr(r) {
  for (let n = 0; n < r.length; n++)
    se(r, n) || (r[n] = null);
  return r;
}
function ie(r) {
  const n = Et(null);
  for (const [a, o] of an(r))
    se(r, a) && (Array.isArray(o) ? n[a] = Sr(o) : o && typeof o == "object" && o.constructor === Object ? n[a] = ie(o) : n[a] = o);
  return n;
}
function Ie(r, n) {
  for (; r !== null; ) {
    const o = _r(r, n);
    if (o) {
      if (o.get)
        return K(o.get);
      if (typeof o.value == "function")
        return K(o.value);
    }
    r = Nr(r);
  }
  function a() {
    return null;
  }
  return a;
}
const qt = Z(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), gt = Z(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ht = Z(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Lr = Z(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), xt = Z(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), jr = Z(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Jt = Z(["#text"]), Zt = Z(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), bt = Z(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Kt = Z(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Je = Z(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Mr = re(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Or = re(/<%[\w\W]*|[\w\W]*%>/gm), Dr = re(/\$\{[\w\W]*/gm), Ir = re(/^data-[\-\w.\u00B7-\uFFFF]+$/), Pr = re(/^aria-[\-\w]+$/), ln = re(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Hr = re(/^(?:\w+script|data):/i), zr = re(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), cn = re(/^html$/i), Ur = re(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Qt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Pr,
  ATTR_WHITESPACE: zr,
  CUSTOM_ELEMENT: Ur,
  DATA_ATTR: Ir,
  DOCTYPE_NAME: cn,
  ERB_EXPR: Or,
  IS_ALLOWED_URI: ln,
  IS_SCRIPT_OR_DATA: Hr,
  MUSTACHE_EXPR: Mr,
  TMPLIT_EXPR: Dr
});
const Pe = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Fr = function() {
  return typeof window > "u" ? null : window;
}, $r = function(n, a) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let o = null;
  const l = "data-tt-policy-suffix";
  a && a.hasAttribute(l) && (o = a.getAttribute(l));
  const s = "dompurify" + (o ? "#" + o : "");
  try {
    return n.createPolicy(s, {
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
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fr();
  const n = (b) => un(b);
  if (n.version = "3.3.1", n.removed = [], !r || !r.document || r.document.nodeType !== Pe.document || !r.Element)
    return n.isSupported = !1, n;
  let {
    document: a
  } = r;
  const o = a, l = o.currentScript, {
    DocumentFragment: s,
    HTMLTemplateElement: i,
    Node: u,
    Element: m,
    NodeFilter: f,
    NamedNodeMap: T = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: g,
    trustedTypes: y
  } = r, C = m.prototype, E = Ie(C, "cloneNode"), j = Ie(C, "remove"), v = Ie(C, "nextSibling"), U = Ie(C, "childNodes"), V = Ie(C, "parentNode");
  if (typeof i == "function") {
    const b = a.createElement("template");
    b.content && b.content.ownerDocument && (a = b.content.ownerDocument);
  }
  let L, X = "";
  const {
    implementation: ge,
    createNodeIterator: ne,
    createDocumentFragment: he,
    getElementsByTagName: _
  } = a, {
    importNode: F
  } = o;
  let w = en();
  n.isSupported = typeof an == "function" && typeof V == "function" && ge && ge.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: $,
    ERB_EXPR: W,
    TMPLIT_EXPR: I,
    DATA_ATTR: D,
    ARIA_ATTR: G,
    IS_SCRIPT_OR_DATA: q,
    ATTR_WHITESPACE: Q,
    CUSTOM_ELEMENT: te
  } = Qt;
  let {
    IS_ALLOWED_URI: c
  } = Qt, h = null;
  const R = N({}, [...qt, ...gt, ...ht, ...xt, ...Jt]);
  let A = null;
  const oe = N({}, [...Zt, ...bt, ...Kt, ...Je]);
  let k = Object.seal(Et(null, {
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
  })), ce = null, xe = null;
  const O = Object.seal(Et(null, {
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
  let ue = !0, be = !0, He = !1, _t = !0, Te = !1, ze = !0, ye = !1, et = !1, tt = !1, we = !1, Ue = !1, Fe = !1, At = !0, vt = !1;
  const dn = "user-content-";
  let nt = !0, ke = !1, Ne = {}, ae = null;
  const rt = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Rt = null;
  const Ct = N({}, ["audio", "video", "img", "source", "image", "track"]);
  let ot = null;
  const kt = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), $e = "http://www.w3.org/1998/Math/MathML", We = "http://www.w3.org/2000/svg", de = "http://www.w3.org/1999/xhtml";
  let _e = de, st = !1, at = null;
  const mn = N({}, [$e, We, de], ft);
  let Ge = N({}, ["mi", "mo", "mn", "ms", "mtext"]), Ye = N({}, ["annotation-xml"]);
  const fn = N({}, ["title", "style", "font", "a", "script"]);
  let Se = null;
  const pn = ["application/xhtml+xml", "text/html"], gn = "text/html";
  let H = null, Ae = null;
  const hn = a.createElement("form"), St = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, lt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ae && Ae === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = ie(t), Se = // eslint-disable-next-line unicorn/prefer-includes
      pn.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? gn : t.PARSER_MEDIA_TYPE, H = Se === "application/xhtml+xml" ? ft : Ze, h = se(t, "ALLOWED_TAGS") ? N({}, t.ALLOWED_TAGS, H) : R, A = se(t, "ALLOWED_ATTR") ? N({}, t.ALLOWED_ATTR, H) : oe, at = se(t, "ALLOWED_NAMESPACES") ? N({}, t.ALLOWED_NAMESPACES, ft) : mn, ot = se(t, "ADD_URI_SAFE_ATTR") ? N(ie(kt), t.ADD_URI_SAFE_ATTR, H) : kt, Rt = se(t, "ADD_DATA_URI_TAGS") ? N(ie(Ct), t.ADD_DATA_URI_TAGS, H) : Ct, ae = se(t, "FORBID_CONTENTS") ? N({}, t.FORBID_CONTENTS, H) : rt, ce = se(t, "FORBID_TAGS") ? N({}, t.FORBID_TAGS, H) : ie({}), xe = se(t, "FORBID_ATTR") ? N({}, t.FORBID_ATTR, H) : ie({}), Ne = se(t, "USE_PROFILES") ? t.USE_PROFILES : !1, ue = t.ALLOW_ARIA_ATTR !== !1, be = t.ALLOW_DATA_ATTR !== !1, He = t.ALLOW_UNKNOWN_PROTOCOLS || !1, _t = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Te = t.SAFE_FOR_TEMPLATES || !1, ze = t.SAFE_FOR_XML !== !1, ye = t.WHOLE_DOCUMENT || !1, we = t.RETURN_DOM || !1, Ue = t.RETURN_DOM_FRAGMENT || !1, Fe = t.RETURN_TRUSTED_TYPE || !1, tt = t.FORCE_BODY || !1, At = t.SANITIZE_DOM !== !1, vt = t.SANITIZE_NAMED_PROPS || !1, nt = t.KEEP_CONTENT !== !1, ke = t.IN_PLACE || !1, c = t.ALLOWED_URI_REGEXP || ln, _e = t.NAMESPACE || de, Ge = t.MATHML_TEXT_INTEGRATION_POINTS || Ge, Ye = t.HTML_INTEGRATION_POINTS || Ye, k = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && St(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (k.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && St(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (k.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (k.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Te && (be = !1), Ue && (we = !0), Ne && (h = N({}, Jt), A = [], Ne.html === !0 && (N(h, qt), N(A, Zt)), Ne.svg === !0 && (N(h, gt), N(A, bt), N(A, Je)), Ne.svgFilters === !0 && (N(h, ht), N(A, bt), N(A, Je)), Ne.mathMl === !0 && (N(h, xt), N(A, Kt), N(A, Je))), t.ADD_TAGS && (typeof t.ADD_TAGS == "function" ? O.tagCheck = t.ADD_TAGS : (h === R && (h = ie(h)), N(h, t.ADD_TAGS, H))), t.ADD_ATTR && (typeof t.ADD_ATTR == "function" ? O.attributeCheck = t.ADD_ATTR : (A === oe && (A = ie(A)), N(A, t.ADD_ATTR, H))), t.ADD_URI_SAFE_ATTR && N(ot, t.ADD_URI_SAFE_ATTR, H), t.FORBID_CONTENTS && (ae === rt && (ae = ie(ae)), N(ae, t.FORBID_CONTENTS, H)), t.ADD_FORBID_CONTENTS && (ae === rt && (ae = ie(ae)), N(ae, t.ADD_FORBID_CONTENTS, H)), nt && (h["#text"] = !0), ye && N(h, ["html", "head", "body"]), h.table && (N(h, ["tbody"]), delete ce.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw De('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw De('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        L = t.TRUSTED_TYPES_POLICY, X = L.createHTML("");
      } else
        L === void 0 && (L = $r(y, l)), L !== null && typeof X == "string" && (X = L.createHTML(""));
      Z && Z(t), Ae = t;
    }
  }, Lt = N({}, [...gt, ...ht, ...Lr]), jt = N({}, [...xt, ...jr]), xn = function(t) {
    let d = V(t);
    (!d || !d.tagName) && (d = {
      namespaceURI: _e,
      tagName: "template"
    });
    const x = Ze(t.tagName), M = Ze(d.tagName);
    return at[t.namespaceURI] ? t.namespaceURI === We ? d.namespaceURI === de ? x === "svg" : d.namespaceURI === $e ? x === "svg" && (M === "annotation-xml" || Ge[M]) : !!Lt[x] : t.namespaceURI === $e ? d.namespaceURI === de ? x === "math" : d.namespaceURI === We ? x === "math" && Ye[M] : !!jt[x] : t.namespaceURI === de ? d.namespaceURI === We && !Ye[M] || d.namespaceURI === $e && !Ge[M] ? !1 : !jt[x] && (fn[x] || !Lt[x]) : !!(Se === "application/xhtml+xml" && at[t.namespaceURI]) : !1;
  }, le = function(t) {
    Me(n.removed, {
      element: t
    });
    try {
      V(t).removeChild(t);
    } catch {
      j(t);
    }
  }, Ee = function(t, d) {
    try {
      Me(n.removed, {
        attribute: d.getAttributeNode(t),
        from: d
      });
    } catch {
      Me(n.removed, {
        attribute: null,
        from: d
      });
    }
    if (d.removeAttribute(t), t === "is")
      if (we || Ue)
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
    let d = null, x = null;
    if (tt)
      t = "<remove></remove>" + t;
    else {
      const P = pt(t, /^[\r\n\t ]+/);
      x = P && P[0];
    }
    Se === "application/xhtml+xml" && _e === de && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const M = L ? L.createHTML(t) : t;
    if (_e === de)
      try {
        d = new g().parseFromString(M, Se);
      } catch {
      }
    if (!d || !d.documentElement) {
      d = ge.createDocument(_e, "template", null);
      try {
        d.documentElement.innerHTML = st ? X : M;
      } catch {
      }
    }
    const B = d.body || d.documentElement;
    return t && x && B.insertBefore(a.createTextNode(x), B.childNodes[0] || null), _e === de ? _.call(d, ye ? "html" : "body")[0] : ye ? d.documentElement : B;
  }, Ot = function(t) {
    return ne.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, it = function(t) {
    return t instanceof p && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof T) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, Dt = function(t) {
    return typeof u == "function" && t instanceof u;
  };
  function me(b, t, d) {
    qe(b, (x) => {
      x.call(n, t, d, Ae);
    });
  }
  const It = function(t) {
    let d = null;
    if (me(w.beforeSanitizeElements, t, null), it(t))
      return le(t), !0;
    const x = H(t.nodeName);
    if (me(w.uponSanitizeElement, t, {
      tagName: x,
      allowedTags: h
    }), ze && t.hasChildNodes() && !Dt(t.firstElementChild) && J(/<[/\w!]/g, t.innerHTML) && J(/<[/\w!]/g, t.textContent) || t.nodeType === Pe.progressingInstruction || ze && t.nodeType === Pe.comment && J(/<[/\w]/g, t.data))
      return le(t), !0;
    if (!(O.tagCheck instanceof Function && O.tagCheck(x)) && (!h[x] || ce[x])) {
      if (!ce[x] && Ht(x) && (k.tagNameCheck instanceof RegExp && J(k.tagNameCheck, x) || k.tagNameCheck instanceof Function && k.tagNameCheck(x)))
        return !1;
      if (nt && !ae[x]) {
        const M = V(t) || t.parentNode, B = U(t) || t.childNodes;
        if (B && M) {
          const P = B.length;
          for (let ee = P - 1; ee >= 0; --ee) {
            const fe = E(B[ee], !0);
            fe.__removalCount = (t.__removalCount || 0) + 1, M.insertBefore(fe, v(t));
          }
        }
      }
      return le(t), !0;
    }
    return t instanceof m && !xn(t) || (x === "noscript" || x === "noembed" || x === "noframes") && J(/<\/no(script|embed|frames)/i, t.innerHTML) ? (le(t), !0) : (Te && t.nodeType === Pe.text && (d = t.textContent, qe([$, W, I], (M) => {
      d = Oe(d, M, " ");
    }), t.textContent !== d && (Me(n.removed, {
      element: t.cloneNode()
    }), t.textContent = d)), me(w.afterSanitizeElements, t, null), !1);
  }, Pt = function(t, d, x) {
    if (At && (d === "id" || d === "name") && (x in a || x in hn))
      return !1;
    if (!(be && !xe[d] && J(D, d))) {
      if (!(ue && J(G, d))) {
        if (!(O.attributeCheck instanceof Function && O.attributeCheck(d, t))) {
          if (!A[d] || xe[d]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Ht(t) && (k.tagNameCheck instanceof RegExp && J(k.tagNameCheck, t) || k.tagNameCheck instanceof Function && k.tagNameCheck(t)) && (k.attributeNameCheck instanceof RegExp && J(k.attributeNameCheck, d) || k.attributeNameCheck instanceof Function && k.attributeNameCheck(d, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              d === "is" && k.allowCustomizedBuiltInElements && (k.tagNameCheck instanceof RegExp && J(k.tagNameCheck, x) || k.tagNameCheck instanceof Function && k.tagNameCheck(x)))
            ) return !1;
          } else if (!ot[d]) {
            if (!J(c, Oe(x, Q, ""))) {
              if (!((d === "src" || d === "xlink:href" || d === "href") && t !== "script" && Rr(x, "data:") === 0 && Rt[t])) {
                if (!(He && !J(q, Oe(x, Q, "")))) {
                  if (x)
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
    return t !== "annotation-xml" && pt(t, te);
  }, zt = function(t) {
    me(w.beforeSanitizeAttributes, t, null);
    const {
      attributes: d
    } = t;
    if (!d || it(t))
      return;
    const x = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let M = d.length;
    for (; M--; ) {
      const B = d[M], {
        name: P,
        namespaceURI: ee,
        value: fe
      } = B, ve = H(P), ct = fe;
      let Y = P === "value" ? ct : Cr(ct);
      if (x.attrName = ve, x.attrValue = Y, x.keepAttr = !0, x.forceKeepAttr = void 0, me(w.uponSanitizeAttribute, t, x), Y = x.attrValue, vt && (ve === "id" || ve === "name") && (Ee(P, t), Y = dn + Y), ze && J(/((--!?|])>)|<\/(style|title|textarea)/i, Y)) {
        Ee(P, t);
        continue;
      }
      if (ve === "attributename" && pt(Y, "href")) {
        Ee(P, t);
        continue;
      }
      if (x.forceKeepAttr)
        continue;
      if (!x.keepAttr) {
        Ee(P, t);
        continue;
      }
      if (!_t && J(/\/>/i, Y)) {
        Ee(P, t);
        continue;
      }
      Te && qe([$, W, I], (Ft) => {
        Y = Oe(Y, Ft, " ");
      });
      const Ut = H(t.nodeName);
      if (!Pt(Ut, ve, Y)) {
        Ee(P, t);
        continue;
      }
      if (L && typeof y == "object" && typeof y.getAttributeType == "function" && !ee)
        switch (y.getAttributeType(Ut, ve)) {
          case "TrustedHTML": {
            Y = L.createHTML(Y);
            break;
          }
          case "TrustedScriptURL": {
            Y = L.createScriptURL(Y);
            break;
          }
        }
      if (Y !== ct)
        try {
          ee ? t.setAttributeNS(ee, P, Y) : t.setAttribute(P, Y), it(t) ? le(t) : Xt(n.removed);
        } catch {
          Ee(P, t);
        }
    }
    me(w.afterSanitizeAttributes, t, null);
  }, bn = function b(t) {
    let d = null;
    const x = Ot(t);
    for (me(w.beforeSanitizeShadowDOM, t, null); d = x.nextNode(); )
      me(w.uponSanitizeShadowNode, d, null), It(d), zt(d), d.content instanceof s && b(d.content);
    me(w.afterSanitizeShadowDOM, t, null);
  };
  return n.sanitize = function(b) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d = null, x = null, M = null, B = null;
    if (st = !b, st && (b = "<!-->"), typeof b != "string" && !Dt(b))
      if (typeof b.toString == "function") {
        if (b = b.toString(), typeof b != "string")
          throw De("dirty is not a string, aborting");
      } else
        throw De("toString is not a function");
    if (!n.isSupported)
      return b;
    if (et || lt(t), n.removed = [], typeof b == "string" && (ke = !1), ke) {
      if (b.nodeName) {
        const fe = H(b.nodeName);
        if (!h[fe] || ce[fe])
          throw De("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (b instanceof u)
      d = Mt("<!---->"), x = d.ownerDocument.importNode(b, !0), x.nodeType === Pe.element && x.nodeName === "BODY" || x.nodeName === "HTML" ? d = x : d.appendChild(x);
    else {
      if (!we && !Te && !ye && // eslint-disable-next-line unicorn/prefer-includes
      b.indexOf("<") === -1)
        return L && Fe ? L.createHTML(b) : b;
      if (d = Mt(b), !d)
        return we ? null : Fe ? X : "";
    }
    d && tt && le(d.firstChild);
    const P = Ot(ke ? b : d);
    for (; M = P.nextNode(); )
      It(M), zt(M), M.content instanceof s && bn(M.content);
    if (ke)
      return b;
    if (we) {
      if (Ue)
        for (B = he.call(d.ownerDocument); d.firstChild; )
          B.appendChild(d.firstChild);
      else
        B = d;
      return (A.shadowroot || A.shadowrootmode) && (B = F.call(o, B, !0)), B;
    }
    let ee = ye ? d.outerHTML : d.innerHTML;
    return ye && h["!doctype"] && d.ownerDocument && d.ownerDocument.doctype && d.ownerDocument.doctype.name && J(cn, d.ownerDocument.doctype.name) && (ee = "<!DOCTYPE " + d.ownerDocument.doctype.name + `>
` + ee), Te && qe([$, W, I], (fe) => {
      ee = Oe(ee, fe, " ");
    }), L && Fe ? L.createHTML(ee) : ee;
  }, n.setConfig = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    lt(b), et = !0;
  }, n.clearConfig = function() {
    Ae = null, et = !1;
  }, n.isValidAttribute = function(b, t, d) {
    Ae || lt({});
    const x = H(b), M = H(t);
    return Pt(x, M, d);
  }, n.addHook = function(b, t) {
    typeof t == "function" && Me(w[b], t);
  }, n.removeHook = function(b, t) {
    if (t !== void 0) {
      const d = Ar(w[b], t);
      return d === -1 ? void 0 : vr(w[b], d, 1)[0];
    }
    return Xt(w[b]);
  }, n.removeHooks = function(b) {
    w[b] = [];
  }, n.removeAllHooks = function() {
    w = en();
  }, n;
}
var Wr = un();
const Gr = (r) => {
  const [n, a] = S([{ html: r }]), [o, l] = S(0), s = Ce(null), i = ut((p, g = !1) => {
    if (s.current && clearTimeout(s.current), g) {
      a((y) => y[o].html === p ? y : [...y.slice(0, o + 1), { html: p }]), l((y) => y + 1);
      return;
    }
    s.current = setTimeout(() => {
      a((y) => y[o].html === p ? y : [...y.slice(0, o + 1), { html: p }]), l((y) => y + 1);
    }, 500);
  }, [o]), u = ut(() => {
    if (o > 0) {
      const p = o - 1;
      return l(p), n[p].html;
    }
    return null;
  }, [o, n]), m = ut(() => {
    if (o < n.length - 1) {
      const p = o + 1;
      return l(p), n[p].html;
    }
    return null;
  }, [o, n]), f = o > 0, T = o < n.length - 1;
  return {
    history: n,
    pointer: o,
    pushState: i,
    undo: u,
    redo: m,
    canUndo: f,
    canRedo: T
  };
}, Yr = ({ paddingLeft: r, paddingRight: n, onChange: a }) => {
  const o = Ce(null), [l, s] = S(null), i = [];
  for (let g = 0; g <= 90; g++) {
    const y = g * 10, C = g % 10 === 0 ? 12 : g % 5 === 0 ? 8 : 4;
    i.push(
      /* @__PURE__ */ e.jsx(
        "line",
        {
          x1: y,
          y1: 20 - C,
          x2: y,
          y2: 20,
          stroke: "#ccc",
          strokeWidth: "1"
        },
        g
      )
    ), g % 10 === 0 && i.push(
      /* @__PURE__ */ e.jsx(
        "text",
        {
          x: y + 2,
          y: 10,
          fontSize: "8",
          fill: "#999",
          children: g
        },
        `text-${g}`
      )
    );
  }
  const u = (g, y) => {
    g.preventDefault(), s(y);
  }, m = (g) => {
    if (!l || !o.current) return;
    const y = o.current.getBoundingClientRect(), C = g.clientX - y.left, E = 896;
    if (l === "left") {
      const j = Math.max(0, Math.min(C, E - n - 50));
      a({ left: j, right: n });
    } else {
      const j = Math.max(0, Math.min(E - C, E - r - 50));
      a({ left: r, right: j });
    }
  }, f = () => {
    s(null);
  };
  pe(() => (l && (document.addEventListener("mousemove", m), document.addEventListener("mouseup", f)), () => {
    document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", f);
  }), [l, r, n]);
  const p = 896 - n;
  return /* @__PURE__ */ e.jsx("div", { ref: o, className: "h-6 w-full bg-gray-50 border-b border-gray-300 relative select-none", children: /* @__PURE__ */ e.jsxs("svg", { width: "100%", height: "100%", className: "absolute left-0", children: [
    i,
    /* @__PURE__ */ e.jsx("rect", { x: "0", y: "0", width: r, height: "100%", fill: "#e5e7eb", opacity: "0.5" }),
    /* @__PURE__ */ e.jsx("rect", { x: p, y: "0", width: n, height: "100%", fill: "#e5e7eb", opacity: "0.5" }),
    /* @__PURE__ */ e.jsx(
      "polygon",
      {
        points: `${r},0 ${r + 6},0 ${r + 6},10 ${r},20 ${r - 6},10 ${r - 6},0`,
        fill: "#3b82f6",
        cursor: "ew-resize",
        onMouseDown: (g) => u(g, "left")
      }
    ),
    /* @__PURE__ */ e.jsx(
      "polygon",
      {
        points: `${p},0 ${p + 6},0 ${p + 6},10 ${p},20 ${p - 6},10 ${p - 6},0`,
        fill: "#3b82f6",
        cursor: "ew-resize",
        onMouseDown: (g) => u(g, "right")
      }
    )
  ] }) });
}, Br = ({ paddingTop: r, paddingBottom: n, onChange: a }) => {
  const o = Ce(null), [l, s] = S(null), i = [];
  for (let g = 0; g <= 100; g++) {
    const y = g * 10, C = g % 10 === 0 ? 12 : g % 5 === 0 ? 8 : 4;
    i.push(
      /* @__PURE__ */ e.jsx(
        "line",
        {
          x1: 20 - C,
          y1: y,
          x2: 20,
          y2: y,
          stroke: "#ccc",
          strokeWidth: "1"
        },
        g
      )
    ), g % 10 === 0 && g !== 0 && i.push(
      /* @__PURE__ */ e.jsx(
        "text",
        {
          x: 2,
          y: y + 8,
          fontSize: "8",
          fill: "#999",
          className: "rotate-[-90deg] origin-center",
          children: g
        },
        `text-${g}`
      )
    );
  }
  const u = (g, y) => {
    g.preventDefault(), s(y);
  }, m = (g) => {
    if (!l || !o.current) return;
    const y = o.current.getBoundingClientRect(), C = 1123, E = g.clientY - y.top;
    if (l === "top") {
      const j = Math.max(0, Math.min(E, C - n - 50));
      a({ top: j, bottom: n });
    } else {
      const j = Math.max(0, Math.min(C - E, C - r - 50));
      a({ top: r, bottom: j });
    }
  }, f = () => {
    s(null);
  };
  pe(() => (l && (document.addEventListener("mousemove", m), document.addEventListener("mouseup", f)), () => {
    document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", f);
  }), [l, r, n]);
  const p = 1123 - n;
  return /* @__PURE__ */ e.jsx("div", { ref: o, className: "w-6 h-full bg-gray-50 border-r border-gray-300 relative select-none flex-shrink-0", children: /* @__PURE__ */ e.jsxs("svg", { width: "100%", height: "2000px", className: "absolute top-0", children: [
    i,
    /* @__PURE__ */ e.jsx("rect", { x: "0", y: "0", width: "100%", height: r, fill: "#e5e7eb", opacity: "0.5" }),
    /* @__PURE__ */ e.jsx("rect", { x: "0", y: p, width: "100%", height: n, fill: "#e5e7eb", opacity: "0.5" }),
    /* @__PURE__ */ e.jsx(
      "polygon",
      {
        points: `0,${r} 0,${r + 6} 10,${r + 6} 20,${r} 10,${r - 6} 0,${r - 6}`,
        fill: "#3b82f6",
        cursor: "ns-resize",
        onMouseDown: (g) => u(g, "top")
      }
    ),
    /* @__PURE__ */ e.jsx(
      "polygon",
      {
        points: `0,${p} 0,${p + 6} 10,${p + 6} 20,${p} 10,${p - 6} 0,${p - 6}`,
        fill: "#3b82f6",
        cursor: "ns-resize",
        onMouseDown: (g) => u(g, "bottom")
      }
    )
  ] }) });
}, Vr = ({
  content: r = "",
  onChange: n,
  onBlur: a,
  onFocus: o,
  config: l = {
    showTextFormat: !0,
    showInlineFormat: !0,
    showAlignment: !0,
    showList: !0,
    showInsert: !0
  }
}) => {
  const s = Ce(null), [i, u] = S({
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
  }), [m, f] = S({
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  }), [T, p] = S("p"), { pushState: g, undo: y, redo: C, canUndo: E, canRedo: j } = Gr(r), v = () => {
    const _ = y();
    _ !== null && s.current && (s.current.innerHTML = _, n && n(_), ne());
  }, U = () => {
    const _ = C();
    _ !== null && s.current && (s.current.innerHTML = _, n && n(_), ne());
  }, V = (_) => {
    const F = window.getSelection();
    if (!F || F.rangeCount === 0) return;
    const w = F.getRangeAt(0);
    let $ = w.commonAncestorContainer;
    $.nodeType === Node.TEXT_NODE && ($ = $.parentNode);
    let W = null, I = $;
    for (; I && I !== s.current; ) {
      if (I.nodeType === Node.ELEMENT_NODE) {
        const D = I, G = D.tagName.toLowerCase();
        if (["p", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(G)) {
          W = D;
          break;
        }
      }
      I = I.parentNode;
    }
    if (W && W !== s.current) {
      const D = document.createElement(_);
      D.innerHTML = W.innerHTML, W.style.textAlign && (D.style.textAlign = W.style.textAlign), W.parentNode?.replaceChild(D, W), p(_);
      const G = document.createRange();
      G.selectNodeContents(D), F.removeAllRanges(), F.addRange(G);
    } else {
      const D = document.createElement(_);
      if (w.toString())
        try {
          w.surroundContents(D);
        } catch {
          const q = w.extractContents();
          D.appendChild(q), w.insertNode(D);
        }
      else {
        D.innerHTML = "<br>", w.insertNode(D);
        const G = document.createRange();
        G.setStart(D, 0), G.collapse(!0), F.removeAllRanges(), F.addRange(G);
      }
      p(_);
    }
    s.current && g(s.current.innerHTML, !0), setTimeout(() => ne(), 10);
  }, L = () => {
    if (s.current && n) {
      const _ = s.current.innerHTML;
      n(_), g(_);
    }
  }, X = () => {
    if (a && s.current) {
      const _ = s.current.innerHTML;
      a(_);
    }
  }, ge = () => {
    o && o();
  };
  pe(() => {
    if (s.current && r !== void 0) {
      const _ = Wr.sanitize(r);
      s.current.innerHTML !== _ && (s.current.innerHTML = _);
    }
  }, [r]);
  const ne = () => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0)
      return;
    let w = _.getRangeAt(0).commonAncestorContainer;
    w.nodeType === Node.TEXT_NODE && (w = w.parentNode);
    let $ = w, W = "p";
    for (; $ && $ !== s.current; ) {
      if (["H1", "H2", "H3", "H4", "H5", "H6", "P"].includes(
        $.tagName
      )) {
        W = $.tagName.toLowerCase();
        break;
      }
      $ = $.parentElement;
    }
    p(W);
    let I = w, D = !1, G = !1;
    for (; I && I !== s.current; ) {
      if (I.tagName === "UL") {
        D = !0;
        break;
      } else if (I.tagName === "OL") {
        G = !0;
        break;
      }
      I = I.parentElement;
    }
    const q = (h) => {
      let R = w;
      for (; R && R !== s.current; ) {
        if (R.nodeType === Node.ELEMENT_NODE && R.tagName.toLowerCase() === h.toLowerCase())
          return !0;
        R = R.parentNode;
      }
      return !1;
    };
    let Q = w;
    for (; Q && Q !== s.current; ) {
      if (Q.nodeType === Node.ELEMENT_NODE) {
        const h = Q.tagName.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(h)) {
          p(h);
          break;
        }
      }
      Q = Q.parentNode;
    }
    (Q === s.current || !Q) && p("p");
    let te = w;
    for (; te && te !== s.current && te.nodeType !== Node.ELEMENT_NODE; )
      te = te.parentNode;
    const c = te && te.nodeType === Node.ELEMENT_NODE ? te.style.textAlign : "";
    u({
      bold: q("strong") || q("b"),
      italic: q("em") || q("i"),
      underline: q("u"),
      strikethrough: q("s") || q("strike") || q("del"),
      alignLeft: c === "" || c === "left",
      alignCenter: c === "center",
      alignRight: c === "right",
      alignJustify: c === "justify",
      bulletList: D,
      numberedList: G
    });
  }, he = () => {
    const _ = window.getSelection();
    if (_ && _.rangeCount > 0) {
      const F = _.getRangeAt(0);
      s.current?.contains(F.commonAncestorContainer) && ne();
    }
  };
  return pe(() => (document.addEventListener("selectionchange", he), () => {
    document.removeEventListener("selectionchange", he);
  }), []), /* @__PURE__ */ e.jsxs("div", { className: "teddy-editor w-full h-screen bg-gray-100 flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      Tr,
      {
        config: l,
        activeFormats: i,
        currentTextFormat: T,
        updateActiveFormats: ne,
        applyTextFormat: V,
        editorRef: s,
        undo: v,
        redo: U,
        canUndo: E,
        canRedo: j
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "flex-1 overflow-auto flex justify-center p-4 relative", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-1 w-full max-w-4xl", children: [
      /* @__PURE__ */ e.jsx("div", { className: "pl-6 select-none bg-gray-100 sticky top-0 z-10 pt-2", children: /* @__PURE__ */ e.jsx(
        Yr,
        {
          paddingLeft: m.left,
          paddingRight: m.right,
          onChange: ({ left: _, right: F }) => f((w) => ({ ...w, left: _, right: F }))
        }
      ) }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ e.jsx("div", { className: "pr-1 select-none pt-0 hidden sm:block h-full relative", children: /* @__PURE__ */ e.jsx(
          Br,
          {
            paddingTop: m.top,
            paddingBottom: m.bottom,
            onChange: ({ top: _, bottom: F }) => f((w) => ({ ...w, top: _, bottom: F }))
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            ref: s,
            contentEditable: !0,
            className: "document-page outline-none focus:ring-0 prose prose-headings:mt-4 prose-headings:mb-2 w-full bg-white shadow-sm min-h-[1123px]",
            style: {
              whiteSpace: "pre-wrap",
              paddingTop: `${m.top}px`,
              paddingRight: `${m.right}px`,
              paddingBottom: `${m.bottom}px`,
              paddingLeft: `${m.left}px`
            },
            onMouseUp: ne,
            onKeyUp: ne,
            onInput: L,
            onBlur: X,
            onFocus: ge
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(
      ur,
      {
        editorRef: s,
        activeFormats: i,
        currentTextFormat: T,
        updateActiveFormats: ne,
        applyTextFormat: V
      }
    )
  ] });
};
function qr() {
  return /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(
    Vr,
    {
      content: "<p>Initial content</p>",
      onChange: (r) => console.log("Content changed:", r),
      onBlur: (r) => console.log("Editor lost focus", r),
      onFocus: () => console.log("Editor gained focus")
    }
  ) });
}
export {
  qr as default
};
