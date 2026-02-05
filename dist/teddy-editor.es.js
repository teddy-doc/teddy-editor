import xn, { forwardRef as en, createElement as bt, useState as M, useRef as Tt, useEffect as Te } from "react";
var Ye = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function yn() {
  if (zt) return ve;
  zt = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function s(o, l, a) {
    var i = null;
    if (a !== void 0 && (i = "" + a), l.key !== void 0 && (i = "" + l.key), "key" in l) {
      a = {};
      for (var d in l)
        d !== "key" && (a[d] = l[d]);
    } else a = l;
    return l = a.ref, {
      $$typeof: r,
      type: o,
      key: i,
      ref: l !== void 0 ? l : null,
      props: a
    };
  }
  return ve.Fragment = n, ve.jsx = s, ve.jsxs = s, ve;
}
var Ce = {};
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
function En() {
  return Wt || (Wt = 1, process.env.NODE_ENV !== "production" && function() {
    function r(c) {
      if (c == null) return null;
      if (typeof c == "function")
        return c.$$typeof === J ? null : c.displayName || c.name || null;
      if (typeof c == "string") return c;
      switch (c) {
        case T:
          return "Fragment";
        case $:
          return "Profiler";
        case _:
          return "StrictMode";
        case S:
          return "Suspense";
        case L:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof c == "object")
        switch (typeof c.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), c.$$typeof) {
          case y:
            return "Portal";
          case I:
            return (c.displayName || "Context") + ".Provider";
          case k:
            return (c._context.displayName || "Context") + ".Consumer";
          case A:
            var g = c.render;
            return c = c.displayName, c || (c = g.displayName || g.name || "", c = c !== "" ? "ForwardRef(" + c + ")" : "ForwardRef"), c;
          case z:
            return g = c.displayName || null, g !== null ? g : r(c.type) || "Memo";
          case G:
            g = c._payload, c = c._init;
            try {
              return r(c(g));
            } catch {
            }
        }
      return null;
    }
    function n(c) {
      return "" + c;
    }
    function s(c) {
      try {
        n(c);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var v = g.error, N = typeof Symbol == "function" && Symbol.toStringTag && c[Symbol.toStringTag] || c.constructor.name || "Object";
        return v.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          N
        ), n(c);
      }
    }
    function o(c) {
      if (c === T) return "<>";
      if (typeof c == "object" && c !== null && c.$$typeof === G)
        return "<...>";
      try {
        var g = r(c);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var c = C.A;
      return c === null ? null : c.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function i(c) {
      if (Q.call(c, "key")) {
        var g = Object.getOwnPropertyDescriptor(c, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return c.key !== void 0;
    }
    function d(c, g) {
      function v() {
        Oe || (Oe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      v.isReactWarning = !0, Object.defineProperty(c, "key", {
        get: v,
        configurable: !0
      });
    }
    function f() {
      var c = r(this.type);
      return Me[c] || (Me[c] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), c = this.props.ref, c !== void 0 ? c : null;
    }
    function m(c, g, v, N, ee, w, ae, de) {
      return v = w.ref, c = {
        $$typeof: P,
        type: c,
        key: g,
        props: w,
        _owner: ee
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(c, "ref", {
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
        value: ae
      }), Object.defineProperty(c, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    }
    function x(c, g, v, N, ee, w, ae, de) {
      var j = g.children;
      if (j !== void 0)
        if (N)
          if (Z(j)) {
            for (N = 0; N < j.length; N++)
              b(j[N]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(j);
      if (Q.call(g, "key")) {
        j = r(c);
        var se = Object.keys(g).filter(function(Pe) {
          return Pe !== "key";
        });
        N = 0 < se.length ? "{key: someKey, " + se.join(": ..., ") + ": ...}" : "{key: someKey}", De[j + N] || (se = 0 < se.length ? "{" + se.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          N,
          j,
          se,
          j
        ), De[j + N] = !0);
      }
      if (j = null, v !== void 0 && (s(v), j = "" + v), i(g) && (s(g.key), j = "" + g.key), "key" in g) {
        v = {};
        for (var me in g)
          me !== "key" && (v[me] = g[me]);
      } else v = g;
      return j && d(
        v,
        typeof c == "function" ? c.displayName || c.name || "Unknown" : c
      ), m(
        c,
        j,
        w,
        ee,
        l(),
        v,
        ae,
        de
      );
    }
    function b(c) {
      typeof c == "object" && c !== null && c.$$typeof === P && c._store && (c._store.validated = 1);
    }
    var O = xn, P = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), I = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), J = Symbol.for("react.client.reference"), C = O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, Z = Array.isArray, ue = console.createTask ? console.createTask : function() {
      return null;
    };
    O = {
      "react-stack-bottom-frame": function(c) {
        return c();
      }
    };
    var Oe, Me = {}, Ie = O["react-stack-bottom-frame"].bind(
      O,
      a
    )(), we = ue(o(a)), De = {};
    Ce.Fragment = T, Ce.jsx = function(c, g, v, N, ee) {
      var w = 1e4 > C.recentlyCreatedOwnerStacks++;
      return x(
        c,
        g,
        v,
        !1,
        N,
        ee,
        w ? Error("react-stack-top-frame") : Ie,
        w ? ue(o(c)) : we
      );
    }, Ce.jsxs = function(c, g, v, N, ee) {
      var w = 1e4 > C.recentlyCreatedOwnerStacks++;
      return x(
        c,
        g,
        v,
        !0,
        N,
        ee,
        w ? Error("react-stack-top-frame") : Ie,
        w ? ue(o(c)) : we
      );
    };
  }()), Ce;
}
var $t;
function Tn() {
  return $t || ($t = 1, process.env.NODE_ENV === "production" ? Ye.exports = yn() : Ye.exports = En()), Ye.exports;
}
var t = Tn();
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wn = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (n, s, o) => o ? o.toUpperCase() : s.toLowerCase()
), Gt = (r) => {
  const n = wn(r);
  return n.charAt(0).toUpperCase() + n.slice(1);
}, tn = (...r) => r.filter((n, s, o) => !!n && n.trim() !== "" && o.indexOf(n) === s).join(" ").trim(), _n = (r) => {
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
var An = {
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
const vn = en(
  ({
    color: r = "currentColor",
    size: n = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: o,
    className: l = "",
    children: a,
    iconNode: i,
    ...d
  }, f) => bt(
    "svg",
    {
      ref: f,
      ...An,
      width: n,
      height: n,
      stroke: r,
      strokeWidth: o ? Number(s) * 24 / Number(n) : s,
      className: tn("lucide", l),
      ...!a && !_n(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...i.map(([m, x]) => bt(m, x)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const U = (r, n) => {
  const s = en(
    ({ className: o, ...l }, a) => bt(vn, {
      ref: a,
      iconNode: n,
      className: tn(
        `lucide-${Nn(Gt(r))}`,
        `lucide-${r}`,
        o
      ),
      ...l
    })
  );
  return s.displayName = Gt(r), s;
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
], Rn = U("align-center", Cn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kn = [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }]
], Sn = U("align-justify", kn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], jn = U("align-left", Ln);
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
], Mn = U("align-right", On);
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
], Dn = U("bold", In);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ze = U("chevron-down", Pn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Un = U("image", Hn);
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
], zn = U("italic", Fn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], $n = U("link", Wn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
], Yn = U("list-ordered", Gn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bn = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], Vn = U("list", Bn);
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
], Xn = U("palette", qn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jn = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], Zn = U("redo", Jn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Qn = U("strikethrough", Kn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const er = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], tr = U("table", er);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nr = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], rr = U("underline", nr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const or = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], ar = U("undo", or);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sr = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], lr = U("video", sr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ke = U("x", ir), Be = (r, n, s) => {
  const o = window.getSelection();
  if (!o || o.rangeCount === 0 || !n.current) return;
  const l = o.getRangeAt(0);
  if (l.toString())
    try {
      const a = () => {
        let m = l.commonAncestorContainer;
        for (; m && m !== n.current; ) {
          if (m.nodeType === Node.ELEMENT_NODE) {
            const x = m;
            if (x.tagName.toLowerCase() === r.toLowerCase())
              return { isFormatted: !0, formatElement: x };
          }
          m = m.parentNode;
        }
        return { isFormatted: !1, formatElement: null };
      }, { isFormatted: i, formatElement: d } = a();
      let f = null;
      if (i && d) {
        const m = d.parentNode, x = document.createTextNode(d.textContent || "");
        m?.replaceChild(x, d), m?.normalize();
        const b = document.createRange();
        b.selectNodeContents(x), o.removeAllRanges(), o.addRange(b);
      } else {
        f = document.createElement(r);
        try {
          l.surroundContents(f);
          const m = document.createRange();
          m.selectNodeContents(f), o.removeAllRanges(), o.addRange(m);
        } catch {
          const x = l.extractContents();
          f.appendChild(x), l.insertNode(f);
          const b = document.createRange();
          b.selectNodeContents(f), o.removeAllRanges(), o.addRange(b);
        }
      }
      s();
    } catch (a) {
      console.warn("Error applying format:", a), s();
    }
}, nn = ({
  editorRef: r,
  activeFormats: n,
  updateActiveFormats: s,
  getButtonClass: o
}) => /* @__PURE__ */ t.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => Be("strong", r, s),
      className: o(n.bold),
      title: "Bold",
      children: /* @__PURE__ */ t.jsx(Dn, { size: 18 })
    }
  ),
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => Be("em", r, s),
      className: o(n.italic),
      title: "Italic",
      children: /* @__PURE__ */ t.jsx(zn, { size: 18 })
    }
  ),
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => Be("u", r, s),
      className: o(n.underline),
      title: "Underline",
      children: /* @__PURE__ */ t.jsx(rr, { size: 18 })
    }
  ),
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => Be("s", r, s),
      className: o(n.strikethrough),
      title: "Strikethrough",
      children: /* @__PURE__ */ t.jsx(Qn, { size: 18 })
    }
  )
] }), Ve = (r, n) => {
  const s = window.getSelection();
  if (!s || s.rangeCount === 0) return;
  let l = s.getRangeAt(0).commonAncestorContainer;
  for (; l && l.nodeType !== Node.ELEMENT_NODE; )
    l = l.parentNode;
  if (l && l.nodeType === Node.ELEMENT_NODE) {
    const a = l;
    a.style.textAlign = r === "left" ? "" : r, n();
  }
}, rn = ({
  activeFormats: r,
  updateActiveFormats: n,
  getButtonClass: s
}) => /* @__PURE__ */ t.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => Ve("left", n),
      className: s(r.alignLeft),
      title: "Align Left",
      children: /* @__PURE__ */ t.jsx(jn, { size: 18 })
    }
  ),
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => Ve("center", n),
      className: s(r.alignCenter),
      title: "Align Center",
      children: /* @__PURE__ */ t.jsx(Rn, { size: 18 })
    }
  ),
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => Ve("right", n),
      className: s(r.alignRight),
      title: "Align Right",
      children: /* @__PURE__ */ t.jsx(Mn, { size: 18 })
    }
  ),
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => Ve("justify", n),
      className: s(r.alignJustify),
      title: "Justify",
      children: /* @__PURE__ */ t.jsx(Sn, { size: 18 })
    }
  )
] }), Yt = (r, n, s) => {
  const o = window.getSelection();
  if (!o || o.rangeCount === 0 || !n.current) return;
  const l = o.getRangeAt(0);
  let a = l.commonAncestorContainer;
  a.nodeType === Node.TEXT_NODE && (a = a.parentNode);
  let i = a;
  for (; i && i !== n.current && !["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL"].includes(
    i.tagName
  ); )
    i = i.parentElement;
  if (!i || i === n.current) {
    const d = document.createElement(r), f = document.createElement("li");
    f.textContent = o.toString() || "List item", d.appendChild(f), l.deleteContents(), l.insertNode(d);
    const m = document.createRange();
    m.setStart(f, 0), m.setEnd(f, f.childNodes.length), o.removeAllRanges(), o.addRange(m);
  } else if (i.tagName === "LI") {
    const d = i.parentElement;
    if (d.tagName.toLowerCase() === r) {
      const f = document.createElement("p");
      f.innerHTML = i.innerHTML, d.parentNode?.replaceChild(f, d);
    } else {
      const f = document.createElement(r);
      f.innerHTML = d.innerHTML, d.parentNode?.replaceChild(f, d);
    }
  } else {
    const d = document.createElement(r), f = document.createElement("li");
    f.innerHTML = i.innerHTML, d.appendChild(f), i.parentNode?.replaceChild(d, i);
  }
  s();
}, on = ({
  editorRef: r,
  activeFormats: n,
  updateActiveFormats: s,
  getButtonClass: o
}) => /* @__PURE__ */ t.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => {
        r?.current && Yt("ul", r, s);
      },
      className: o(n.bulletList),
      title: "Bullet List",
      children: /* @__PURE__ */ t.jsx(Vn, { size: 18 })
    }
  ),
  /* @__PURE__ */ t.jsx(
    "button",
    {
      onClick: () => {
        r?.current && Yt("ol", r, s);
      },
      className: o(n.numberedList),
      title: "Numbered List",
      children: /* @__PURE__ */ t.jsx(Yn, { size: 18 })
    }
  )
] }), cr = ({
  editorRef: r,
  activeFormats: n,
  currentTextFormat: s,
  updateActiveFormats: o,
  applyTextFormat: l
}) => {
  const [a, i] = M({ top: 0, left: 0 }), [d, f] = M(!1), [m, x] = M(!1), b = Tt(null), O = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" }
  ];
  Te(() => {
    const T = () => {
      const _ = window.getSelection();
      if (!_ || _.rangeCount === 0 || _.isCollapsed || !r.current || !r.current.contains(_.anchorNode)) {
        f(!1), x(!1);
        return;
      }
      const k = _.getRangeAt(0).getBoundingClientRect(), I = b.current?.offsetHeight || 50, A = k.top - I - 45, S = k.left + k.width / 2;
      i({ top: A, left: S }), f(!0);
    };
    return document.addEventListener("selectionchange", T), window.addEventListener("scroll", T, !0), window.addEventListener("resize", T), () => {
      document.removeEventListener("selectionchange", T), window.removeEventListener("scroll", T, !0), window.removeEventListener("resize", T);
    };
  }, [r]);
  const P = (T) => `p-1.5 rounded transition-colors ${T ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, y = (T) => {
    l(T), x(!1);
  };
  return d ? /* @__PURE__ */ t.jsxs(
    "div",
    {
      ref: b,
      className: "fixed z-50 flex items-center gap-1 p-1 bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in zoom-in-95 duration-200",
      style: {
        top: `${a.top}px`,
        left: `${a.left}px`,
        transform: "translateX(-50%)"
      },
      onMouseDown: (T) => {
        T.preventDefault();
      },
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ t.jsxs(
            "button",
            {
              onClick: () => x(!m),
              className: "flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between",
              children: [
                /* @__PURE__ */ t.jsx("span", { className: "truncate max-w-[80px]", children: O.find((T) => T.value === s)?.label || "Paragraph" }),
                /* @__PURE__ */ t.jsx(Ze, { size: 12 })
              ]
            }
          ),
          m && /* @__PURE__ */ t.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[140px] max-h-[300px] overflow-y-auto", children: O.map((T) => /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => y(T.tag),
              className: `w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${s === T.value ? "bg-blue-50 text-blue-600" : "text-gray-700"}`,
              children: T.label
            },
            T.value
          )) })
        ] }),
        /* @__PURE__ */ t.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ t.jsx(
          nn,
          {
            editorRef: r,
            activeFormats: n,
            updateActiveFormats: o,
            getButtonClass: P
          }
        ),
        /* @__PURE__ */ t.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ t.jsx(
          on,
          {
            editorRef: r,
            activeFormats: {
              bulletList: n.bulletList,
              numberedList: n.numberedList
            },
            updateActiveFormats: o,
            getButtonClass: P
          }
        ),
        /* @__PURE__ */ t.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ t.jsx(
          rn,
          {
            activeFormats: {
              alignLeft: n.alignLeft,
              alignCenter: n.alignCenter,
              alignRight: n.alignRight,
              alignJustify: n.alignJustify
            },
            updateActiveFormats: o,
            getButtonClass: P
          }
        )
      ]
    }
  ) : null;
};
let Ne = null;
const ct = () => {
  const r = window.getSelection();
  r && r.rangeCount > 0 && (Ne = r.getRangeAt(0).cloneRange());
}, Nt = () => {
  if (Ne) {
    const r = window.getSelection();
    r?.removeAllRanges(), r?.addRange(Ne);
  }
}, ut = () => {
  const r = window.getSelection();
  if (!r || r.rangeCount === 0) return null;
  let s = r.getRangeAt(0).commonAncestorContainer;
  s.nodeType === Node.TEXT_NODE && (s = s.parentNode);
  let o = s;
  for (; o && o !== document.body; ) {
    if (o.nodeType === Node.ELEMENT_NODE) {
      const l = o, a = l.tagName.toLowerCase();
      if (a === "a")
        return {
          type: "link",
          url: l.getAttribute("href") || "",
          text: l.textContent || ""
        };
      if (a === "img")
        return {
          type: "image",
          src: l.getAttribute("src") || "",
          alt: l.getAttribute("alt") || ""
        };
      if (a === "iframe")
        return {
          type: "video",
          src: l.getAttribute("src") || ""
        };
    }
    o = o.parentNode;
  }
  return null;
}, ur = (r, n) => {
  Nt();
  const s = window.getSelection();
  if (!s || s.rangeCount === 0) {
    const i = document.querySelector(
      '[contenteditable="true"]'
    );
    if (i) {
      const d = document.createElement("a");
      d.href = r, d.textContent = n || r, d.target = "_blank", d.rel = "noopener noreferrer", d.className = "text-blue-600 underline hover:text-blue-800", i.appendChild(d);
      const f = document.createTextNode(" ");
      i.appendChild(f);
      const m = document.createRange();
      m.setStartAfter(f), m.collapse(!0), s && (s.removeAllRanges(), s.addRange(m));
    }
    return;
  }
  const o = s.getRangeAt(0);
  let l = null, a = o.commonAncestorContainer;
  for (; a && a !== document.body; ) {
    if (a.nodeType === Node.ELEMENT_NODE && a.tagName.toLowerCase() === "a") {
      l = a;
      break;
    }
    a = a.parentNode;
  }
  if (l)
    l.setAttribute("href", r), l.textContent = n || r;
  else {
    const i = document.createElement("a");
    i.href = r, i.textContent = n || r, i.target = "_blank", i.rel = "noopener noreferrer", i.className = "text-blue-600 underline hover:text-blue-800", o.deleteContents(), o.insertNode(i);
    const d = document.createRange();
    d.setStartAfter(i), d.collapse(!0), s.removeAllRanges(), s.addRange(d);
  }
  Ne = null;
}, dr = (r, n = "Inserted image") => {
  Nt();
  const s = window.getSelection();
  if (!s || s.rangeCount === 0) {
    const i = document.querySelector(
      '[contenteditable="true"]'
    );
    if (i) {
      const d = document.createElement("img");
      d.src = r, d.alt = n, d.className = "max-w-full h-auto rounded shadow-sm", i.appendChild(d);
      const f = document.createElement("br");
      i.appendChild(f);
      const m = document.createRange();
      m.setStartAfter(f), m.collapse(!0), s && (s.removeAllRanges(), s.addRange(m));
    }
    return;
  }
  const o = s.getRangeAt(0);
  let l = null, a = o.commonAncestorContainer;
  for (; a && a !== document.body; ) {
    if (a.nodeType === Node.ELEMENT_NODE && a.tagName.toLowerCase() === "img") {
      l = a;
      break;
    }
    a = a.parentNode;
  }
  if (l)
    l.setAttribute("src", r), l.setAttribute("alt", n);
  else {
    const i = document.createElement("img");
    i.src = r, i.alt = n, i.className = "max-w-full h-auto rounded shadow-sm", o.deleteContents(), o.insertNode(i);
    const d = document.createRange();
    d.setStartAfter(i), d.collapse(!0), s.removeAllRanges(), s.addRange(d);
  }
  Ne = null;
}, mr = (r) => {
  Nt();
  const n = window.getSelection();
  if (!n || n.rangeCount === 0) {
    const a = document.querySelector(
      '[contenteditable="true"]'
    );
    if (a) {
      const i = document.createElement("iframe");
      i.src = r, i.width = "560", i.height = "315", i.className = "max-w-full rounded shadow-sm", i.setAttribute("frameborder", "0"), i.setAttribute("allowfullscreen", "true"), i.setAttribute(
        "sandbox",
        "allow-scripts allow-same-origin allow-presentation"
      ), a.appendChild(i);
      const d = document.createElement("br");
      a.appendChild(d);
      const f = document.createRange();
      f.setStartAfter(d), f.collapse(!0), n && (n.removeAllRanges(), n.addRange(f));
    }
    return;
  }
  const s = n.getRangeAt(0);
  let o = null, l = s.commonAncestorContainer;
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
    const a = document.createElement("iframe");
    a.src = r, a.width = "560", a.height = "315", a.className = "max-w-full rounded shadow-sm", a.setAttribute("frameborder", "0"), a.setAttribute("allowfullscreen", "true"), a.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-presentation"
    ), s.deleteContents(), s.insertNode(a);
    const i = document.createRange();
    i.setStartAfter(a), i.collapse(!0), n.removeAllRanges(), n.addRange(i);
  }
  Ne = null;
}, fr = ({
  isOpen: r,
  onClose: n,
  onInsert: s,
  initialData: o
}) => {
  const [l, a] = M(""), [i, d] = M("");
  Te(() => {
    r && o ? (a(o.url), d(o.text)) : r && !o && (a(""), d(""));
  }, [r, o]);
  const f = (m) => {
    m.preventDefault(), l.trim() && (s(l.trim(), i.trim()), a(""), d(""), n());
  };
  return r ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Link" : "Insert Link" }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: n,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ t.jsx(Ke, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("form", { onSubmit: f, children: [
      /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "URL" }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (m) => a(m.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "https://example.com",
            required: !0,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Link Text (optional)" }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "text",
            value: i,
            onChange: (m) => d(m.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Link text"
          }
        )
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            onClick: n,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ t.jsx(
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
}, pr = ({
  isOpen: r,
  onClose: n,
  onInsert: s,
  initialData: o
}) => {
  const [l, a] = M(""), [i, d] = M(""), f = Tt(null);
  Te(() => {
    r && o ? (a(o.alt), d(o.src)) : r && !o && (a(""), d(""));
  }, [r, o]);
  const m = (O) => {
    const P = O.target.files?.[0];
    if (P) {
      const y = new FileReader();
      y.onload = (T) => {
        const _ = T.target?.result;
        s(_, l || P.name), a(""), d(""), n(), f.current && (f.current.value = "");
      }, y.readAsDataURL(P);
    }
  }, x = () => {
    o && i && (s(i, l), a(""), d(""), n());
  }, b = () => {
    f.current && f.current.click();
  };
  return r ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Image" : "Insert Image" }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: n,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ t.jsx(Ke, { size: 20 })
        }
      )
    ] }),
    o && /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ t.jsx(
        "img",
        {
          src: i,
          alt: l,
          className: "max-w-full h-32 object-contain rounded border"
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          onClick: b,
          className: "mt-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200",
          children: "Replace Image"
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      "input",
      {
        ref: f,
        type: "file",
        accept: "image/*",
        onChange: m,
        className: "hidden"
      }
    ),
    !o && /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Select Image File" }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "file",
          accept: "image/*",
          onChange: m,
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Alt Text (optional)" }),
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "text",
          value: l,
          onChange: (O) => a(O.target.value),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          placeholder: "Image description",
          autoFocus: !!o
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: n,
          className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      o && /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: x,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
          children: "Update Image"
        }
      )
    ] })
  ] }) }) : null;
}, gr = ({
  isOpen: r,
  onClose: n,
  onInsert: s,
  initialData: o
}) => {
  const [l, a] = M(""), [i, d] = M("");
  Te(() => {
    r && o ? a(o.src) : r && !o && a(""), d("");
  }, [r, o]);
  const f = (x) => {
    const b = x.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
    );
    if (b)
      return `https://www.youtube.com/embed/${b[1]}`;
    const O = x.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return O ? `https://player.vimeo.com/video/${O[1]}` : x.includes("youtube.com/embed/") || x.includes("player.vimeo.com/video/") ? x : null;
  }, m = (x) => {
    if (x.preventDefault(), d(""), l.trim()) {
      const b = f(l.trim());
      b ? (s(b), a(""), n()) : d("Invalid URL. Only YouTube and Vimeo are supported for security.");
    }
  };
  return r ? /* @__PURE__ */ t.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ t.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Video" : "Insert Video" }),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: n,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ t.jsx(Ke, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsxs("form", { onSubmit: m, children: [
      /* @__PURE__ */ t.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ t.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Video URL" }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (x) => a(x.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "YouTube, Vimeo, or embed URL",
            required: !0,
            autoFocus: !0
          }
        ),
        i && /* @__PURE__ */ t.jsx("p", { className: "text-sm text-red-500 mt-1", children: i }),
        /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Supports YouTube, Vimeo, and direct embed URLs" })
      ] }),
      /* @__PURE__ */ t.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            onClick: n,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ t.jsx(
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
}, hr = () => {
  const [r, n] = M(!1), [s, o] = M(!1), [l, a] = M(!1), [i, d] = M(null), f = () => {
    ct();
    const b = ut();
    d(b?.type === "link" ? b : null), n(!0);
  }, m = () => {
    ct();
    const b = ut();
    d(b?.type === "image" ? b : null), o(!0);
  }, x = () => {
    ct();
    const b = ut();
    d(b?.type === "video" ? b : null), a(!0);
  };
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: f,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Link",
          children: /* @__PURE__ */ t.jsx($n, { size: 18 })
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: m,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Image",
          children: /* @__PURE__ */ t.jsx(Un, { size: 18 })
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: x,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Video",
          children: /* @__PURE__ */ t.jsx(lr, { size: 18 })
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx(
      fr,
      {
        isOpen: r,
        onClose: () => {
          n(!1), d(null);
        },
        onInsert: ur,
        initialData: i?.type === "link" ? {
          url: i.url,
          text: i.text
        } : null
      }
    ),
    /* @__PURE__ */ t.jsx(
      pr,
      {
        isOpen: s,
        onClose: () => {
          o(!1), d(null);
        },
        onInsert: dr,
        initialData: i?.type === "image" ? {
          src: i.src,
          alt: i.alt
        } : null
      }
    ),
    /* @__PURE__ */ t.jsx(
      gr,
      {
        isOpen: l,
        onClose: () => {
          a(!1), d(null);
        },
        onInsert: mr,
        initialData: i?.type === "video" ? {
          src: i.src
        } : null
      }
    )
  ] });
}, br = ({ getButtonClass: r }) => {
  const n = (o) => {
    o.preventDefault(), document.execCommand("undo");
  }, s = (o) => {
    o.preventDefault(), document.execCommand("redo");
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onMouseDown: n,
        className: r(!1),
        title: "Undo",
        children: /* @__PURE__ */ t.jsx(ar, { size: 18 })
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onMouseDown: s,
        className: r(!1),
        title: "Redo",
        children: /* @__PURE__ */ t.jsx(Zn, { size: 18 })
      }
    )
  ] });
}, xr = ({
  getButtonClass: r,
  updateActiveFormats: n
}) => {
  const [s, o] = M(!1), [l, a] = M(!1), [i, d] = M(!1), f = [
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
  ], m = [
    { name: "Sans Serif", value: "Arial, Helvetica, sans-serif" },
    { name: "Serif", value: "Times New Roman, Times, serif" },
    { name: "Monospace", value: "Courier New, Courier, monospace" }
  ], x = [
    { label: "Small", value: "1" },
    { label: "Normal", value: "3" },
    { label: "Large", value: "5" },
    { label: "Huge", value: "7" }
  ], b = (y) => {
    document.execCommand("foreColor", !1, y), o(!1), n();
  }, O = (y) => {
    document.execCommand("fontName", !1, y), a(!1), n();
  }, P = (y) => {
    document.execCommand("fontSize", !1, y), d(!1), n();
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "flex gap-1 items-center relative", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: () => a(!l),
          onBlur: () => setTimeout(() => a(!1), 200),
          className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between transition-colors",
          title: "Font Family",
          children: [
            /* @__PURE__ */ t.jsx("span", { className: "font-medium truncate max-w-[80px]", children: "Font" }),
            /* @__PURE__ */ t.jsx(Ze, { size: 14, className: "text-gray-500" })
          ]
        }
      ),
      l && /* @__PURE__ */ t.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px]", children: m.map((y) => /* @__PURE__ */ t.jsx(
        "button",
        {
          onMouseDown: (T) => {
            T.preventDefault(), O(y.value);
          },
          className: "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 font-medium",
          style: { fontFamily: y.value },
          children: y.name
        },
        y.name
      )) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ t.jsxs(
        "button",
        {
          onClick: () => d(!i),
          onBlur: () => setTimeout(() => d(!1), 200),
          className: "flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[60px] justify-between transition-colors",
          title: "Font Size",
          children: [
            /* @__PURE__ */ t.jsx("span", { className: "font-medium", children: "Size" }),
            /* @__PURE__ */ t.jsx(Ze, { size: 14, className: "text-gray-500" })
          ]
        }
      ),
      i && /* @__PURE__ */ t.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[100px]", children: x.map((y) => /* @__PURE__ */ t.jsx(
        "button",
        {
          onMouseDown: (T) => {
            T.preventDefault(), P(y.value);
          },
          className: "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700",
          children: y.label
        },
        y.label
      )) })
    ] }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: () => o(!s),
          onBlur: () => setTimeout(() => o(!1), 200),
          className: r(s),
          title: "Text Color",
          children: /* @__PURE__ */ t.jsx(Xn, { size: 18 })
        }
      ),
      s && /* @__PURE__ */ t.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-2 w-[180px] flex flex-wrap gap-1", children: f.map((y) => /* @__PURE__ */ t.jsx(
        "button",
        {
          onMouseDown: (T) => {
            T.preventDefault(), b(y);
          },
          className: "w-5 h-5 rounded border border-gray-300 hover:scale-110 transition-transform",
          style: { backgroundColor: y },
          title: y
        },
        y
      )) })
    ] })
  ] });
}, yr = ({ getButtonClass: r }) => {
  const [n, s] = M(!1), [o, l] = M(2), [a, i] = M(2), d = (f) => {
    f.preventDefault();
    let m = '<table style="border-collapse: collapse; width: 100%; border: 1px solid #ccc;">';
    m += "<tbody>";
    for (let x = 0; x < o; x++) {
      m += "<tr>";
      for (let b = 0; b < a; b++)
        m += '<td style="border: 1px solid #ccc; padding: 8px; min-width: 50px;">&nbsp;</td>';
      m += "</tr>";
    }
    m += "</tbody></table><p>&nbsp;</p>", document.execCommand("insertHTML", !1, m), s(!1);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: () => s(!n),
        className: r(n),
        title: "Insert Table",
        children: /* @__PURE__ */ t.jsx(tr, { size: 18 })
      }
    ),
    n && /* @__PURE__ */ t.jsxs("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-64", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ t.jsx("h3", { className: "text-sm font-semibold text-gray-700", children: "Insert Table" }),
        /* @__PURE__ */ t.jsx("button", { onClick: () => s(!1), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ t.jsx(Ke, { size: 16 }) })
      ] }),
      /* @__PURE__ */ t.jsxs("form", { onSubmit: d, children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex gap-4 mb-4", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-xs font-medium text-gray-500 mb-1", children: "Rows" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "number",
                min: "1",
                max: "10",
                value: o,
                onChange: (f) => l(parseInt(f.target.value) || 1),
                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ t.jsx("label", { className: "block text-xs font-medium text-gray-500 mb-1", children: "Columns" }),
            /* @__PURE__ */ t.jsx(
              "input",
              {
                type: "number",
                min: "1",
                max: "10",
                value: a,
                onChange: (f) => i(parseInt(f.target.value) || 1),
                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(
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
}, Er = ({
  config: r,
  activeFormats: n,
  currentTextFormat: s,
  updateActiveFormats: o,
  applyTextFormat: l,
  editorRef: a
}) => {
  const [i, d] = M(!1), f = (b) => `p-2 rounded transition-colors ${b ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, m = () => /* @__PURE__ */ t.jsx("div", { className: "w-px h-6 bg-gray-300 mx-1" }), x = [
    { value: "p", label: "Normal text", tag: "p" },
    { value: "h1", label: "Title", tag: "h1" },
    { value: "h2", label: "Subtitle", tag: "h2" },
    { value: "h3", label: "Heading 1", tag: "h3" },
    { value: "h4", label: "Heading 2", tag: "h4" },
    { value: "h5", label: "Heading 3", tag: "h5" },
    { value: "h6", label: "Heading 4", tag: "h6" }
  ];
  return /* @__PURE__ */ t.jsx("div", { className: "sticky top-0 z-40 w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-center border", children: /* @__PURE__ */ t.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-1 max-w-7xl mx-auto w-full", children: [
    /* @__PURE__ */ t.jsx(br, { getButtonClass: f }),
    /* @__PURE__ */ t.jsx(m, {}),
    r.showTextFormat && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            onClick: () => d(!i),
            onBlur: () => setTimeout(() => d(!1), 200),
            className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors",
            children: [
              /* @__PURE__ */ t.jsx("span", { className: "font-medium truncate max-w-[100px]", children: x.find((b) => b.value === s)?.label || "Normal text" }),
              /* @__PURE__ */ t.jsx(Ze, { size: 14, className: "text-gray-500" })
            ]
          }
        ),
        i && /* @__PURE__ */ t.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px] max-h-[300px] overflow-y-auto w-full", children: x.map((b) => /* @__PURE__ */ t.jsx(
          "button",
          {
            onMouseDown: (O) => {
              O.preventDefault(), l(b.tag);
            },
            className: `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${s === b.value ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`,
            children: /* @__PURE__ */ t.jsx("span", { className: b.tag === "p" ? "" : b.tag === "h1" ? "text-2xl font-bold" : b.tag === "h2" ? "text-xl font-bold" : b.tag === "h3" ? "text-lg font-bold" : "font-bold", children: b.label })
          },
          b.value
        )) })
      ] }),
      /* @__PURE__ */ t.jsx(m, {})
    ] }),
    /* @__PURE__ */ t.jsx(
      xr,
      {
        getButtonClass: f,
        updateActiveFormats: o
      }
    ),
    /* @__PURE__ */ t.jsx(m, {}),
    r.showInlineFormat && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        nn,
        {
          editorRef: a,
          activeFormats: {
            bold: n.bold,
            italic: n.italic,
            underline: n.underline,
            strikethrough: n.strikethrough
          },
          updateActiveFormats: o,
          getButtonClass: f
        }
      ),
      /* @__PURE__ */ t.jsx(m, {})
    ] }),
    r.showAlignment && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        rn,
        {
          activeFormats: {
            alignLeft: n.alignLeft,
            alignCenter: n.alignCenter,
            alignRight: n.alignRight,
            alignJustify: n.alignJustify
          },
          updateActiveFormats: o,
          getButtonClass: f
        }
      ),
      /* @__PURE__ */ t.jsx(m, {})
    ] }),
    r.showList && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(
        on,
        {
          editorRef: a,
          activeFormats: {
            bulletList: n.bulletList,
            numberedList: n.numberedList
          },
          updateActiveFormats: o,
          getButtonClass: f
        }
      ),
      /* @__PURE__ */ t.jsx(m, {})
    ] }),
    r.showInsert && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(hr, {}),
      /* @__PURE__ */ t.jsx(yr, { getButtonClass: f })
    ] })
  ] }) });
};
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: an,
  setPrototypeOf: Bt,
  isFrozen: Tr,
  getPrototypeOf: Nr,
  getOwnPropertyDescriptor: wr
} = Object;
let {
  freeze: B,
  seal: K,
  create: xt
} = Object, {
  apply: yt,
  construct: Et
} = typeof Reflect < "u" && Reflect;
B || (B = function(n) {
  return n;
});
K || (K = function(n) {
  return n;
});
yt || (yt = function(n, s) {
  for (var o = arguments.length, l = new Array(o > 2 ? o - 2 : 0), a = 2; a < o; a++)
    l[a - 2] = arguments[a];
  return n.apply(s, l);
});
Et || (Et = function(n) {
  for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
    o[l - 1] = arguments[l];
  return new n(...o);
});
const qe = V(Array.prototype.forEach), _r = V(Array.prototype.lastIndexOf), Vt = V(Array.prototype.pop), Re = V(Array.prototype.push), Ar = V(Array.prototype.splice), Je = V(String.prototype.toLowerCase), dt = V(String.prototype.toString), mt = V(String.prototype.match), ke = V(String.prototype.replace), vr = V(String.prototype.indexOf), Cr = V(String.prototype.trim), te = V(Object.prototype.hasOwnProperty), Y = V(RegExp.prototype.test), Se = Rr(TypeError);
function V(r) {
  return function(n) {
    n instanceof RegExp && (n.lastIndex = 0);
    for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
      o[l - 1] = arguments[l];
    return yt(r, n, o);
  };
}
function Rr(r) {
  return function() {
    for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++)
      s[o] = arguments[o];
    return Et(r, s);
  };
}
function E(r, n) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Je;
  Bt && Bt(r, null);
  let o = n.length;
  for (; o--; ) {
    let l = n[o];
    if (typeof l == "string") {
      const a = s(l);
      a !== l && (Tr(n) || (n[o] = a), l = a);
    }
    r[l] = !0;
  }
  return r;
}
function kr(r) {
  for (let n = 0; n < r.length; n++)
    te(r, n) || (r[n] = null);
  return r;
}
function oe(r) {
  const n = xt(null);
  for (const [s, o] of an(r))
    te(r, s) && (Array.isArray(o) ? n[s] = kr(o) : o && typeof o == "object" && o.constructor === Object ? n[s] = oe(o) : n[s] = o);
  return n;
}
function Le(r, n) {
  for (; r !== null; ) {
    const o = wr(r, n);
    if (o) {
      if (o.get)
        return V(o.get);
      if (typeof o.value == "function")
        return V(o.value);
    }
    r = Nr(r);
  }
  function s() {
    return null;
  }
  return s;
}
const qt = B(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ft = B(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), pt = B(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Sr = B(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), gt = B(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Lr = B(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Xt = B(["#text"]), Jt = B(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ht = B(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Zt = B(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xe = B(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), jr = K(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Or = K(/<%[\w\W]*|[\w\W]*%>/gm), Mr = K(/\$\{[\w\W]*/gm), Ir = K(/^data-[\-\w.\u00B7-\uFFFF]+$/), Dr = K(/^aria-[\-\w]+$/), sn = K(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Pr = K(/^(?:\w+script|data):/i), Hr = K(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ln = K(/^html$/i), Ur = K(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Kt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Dr,
  ATTR_WHITESPACE: Hr,
  CUSTOM_ELEMENT: Ur,
  DATA_ATTR: Ir,
  DOCTYPE_NAME: ln,
  ERB_EXPR: Or,
  IS_ALLOWED_URI: sn,
  IS_SCRIPT_OR_DATA: Pr,
  MUSTACHE_EXPR: jr,
  TMPLIT_EXPR: Mr
});
const je = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Fr = function() {
  return typeof window > "u" ? null : window;
}, zr = function(n, s) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let o = null;
  const l = "data-tt-policy-suffix";
  s && s.hasAttribute(l) && (o = s.getAttribute(l));
  const a = "dompurify" + (o ? "#" + o : "");
  try {
    return n.createPolicy(a, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Qt = function() {
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
function cn() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fr();
  const n = (h) => cn(h);
  if (n.version = "3.3.1", n.removed = [], !r || !r.document || r.document.nodeType !== je.document || !r.Element)
    return n.isSupported = !1, n;
  let {
    document: s
  } = r;
  const o = s, l = o.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: i,
    Node: d,
    Element: f,
    NodeFilter: m,
    NamedNodeMap: x = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: b,
    DOMParser: O,
    trustedTypes: P
  } = r, y = f.prototype, T = Le(y, "cloneNode"), _ = Le(y, "remove"), $ = Le(y, "nextSibling"), k = Le(y, "childNodes"), I = Le(y, "parentNode");
  if (typeof i == "function") {
    const h = s.createElement("template");
    h.content && h.content.ownerDocument && (s = h.content.ownerDocument);
  }
  let A, S = "";
  const {
    implementation: L,
    createNodeIterator: z,
    createDocumentFragment: G,
    getElementsByTagName: X
  } = s, {
    importNode: J
  } = o;
  let C = Qt();
  n.isSupported = typeof an == "function" && typeof I == "function" && L && L.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Q,
    ERB_EXPR: Z,
    TMPLIT_EXPR: ue,
    DATA_ATTR: Oe,
    ARIA_ATTR: Me,
    IS_SCRIPT_OR_DATA: Ie,
    ATTR_WHITESPACE: we,
    CUSTOM_ELEMENT: De
  } = Kt;
  let {
    IS_ALLOWED_URI: c
  } = Kt, g = null;
  const v = E({}, [...qt, ...ft, ...pt, ...gt, ...Xt]);
  let N = null;
  const ee = E({}, [...Jt, ...ht, ...Zt, ...Xe]);
  let w = Object.seal(xt(null, {
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
  })), ae = null, de = null;
  const j = Object.seal(xt(null, {
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
  let se = !0, me = !0, Pe = !1, wt = !0, ge = !1, He = !0, fe = !1, Qe = !1, et = !1, he = !1, Ue = !1, Fe = !1, _t = !0, At = !1;
  const un = "user-content-";
  let tt = !0, _e = !1, be = {}, ne = null;
  const nt = E({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let vt = null;
  const Ct = E({}, ["audio", "video", "img", "source", "image", "track"]);
  let rt = null;
  const Rt = E({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ze = "http://www.w3.org/1998/Math/MathML", We = "http://www.w3.org/2000/svg", le = "http://www.w3.org/1999/xhtml";
  let xe = le, ot = !1, at = null;
  const dn = E({}, [ze, We, le], dt);
  let $e = E({}, ["mi", "mo", "mn", "ms", "mtext"]), Ge = E({}, ["annotation-xml"]);
  const mn = E({}, ["title", "style", "font", "a", "script"]);
  let Ae = null;
  const fn = ["application/xhtml+xml", "text/html"], pn = "text/html";
  let H = null, ye = null;
  const gn = s.createElement("form"), kt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, st = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ye && ye === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = oe(e), Ae = // eslint-disable-next-line unicorn/prefer-includes
      fn.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? pn : e.PARSER_MEDIA_TYPE, H = Ae === "application/xhtml+xml" ? dt : Je, g = te(e, "ALLOWED_TAGS") ? E({}, e.ALLOWED_TAGS, H) : v, N = te(e, "ALLOWED_ATTR") ? E({}, e.ALLOWED_ATTR, H) : ee, at = te(e, "ALLOWED_NAMESPACES") ? E({}, e.ALLOWED_NAMESPACES, dt) : dn, rt = te(e, "ADD_URI_SAFE_ATTR") ? E(oe(Rt), e.ADD_URI_SAFE_ATTR, H) : Rt, vt = te(e, "ADD_DATA_URI_TAGS") ? E(oe(Ct), e.ADD_DATA_URI_TAGS, H) : Ct, ne = te(e, "FORBID_CONTENTS") ? E({}, e.FORBID_CONTENTS, H) : nt, ae = te(e, "FORBID_TAGS") ? E({}, e.FORBID_TAGS, H) : oe({}), de = te(e, "FORBID_ATTR") ? E({}, e.FORBID_ATTR, H) : oe({}), be = te(e, "USE_PROFILES") ? e.USE_PROFILES : !1, se = e.ALLOW_ARIA_ATTR !== !1, me = e.ALLOW_DATA_ATTR !== !1, Pe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, wt = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ge = e.SAFE_FOR_TEMPLATES || !1, He = e.SAFE_FOR_XML !== !1, fe = e.WHOLE_DOCUMENT || !1, he = e.RETURN_DOM || !1, Ue = e.RETURN_DOM_FRAGMENT || !1, Fe = e.RETURN_TRUSTED_TYPE || !1, et = e.FORCE_BODY || !1, _t = e.SANITIZE_DOM !== !1, At = e.SANITIZE_NAMED_PROPS || !1, tt = e.KEEP_CONTENT !== !1, _e = e.IN_PLACE || !1, c = e.ALLOWED_URI_REGEXP || sn, xe = e.NAMESPACE || le, $e = e.MATHML_TEXT_INTEGRATION_POINTS || $e, Ge = e.HTML_INTEGRATION_POINTS || Ge, w = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && kt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (w.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && kt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (w.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (w.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ge && (me = !1), Ue && (he = !0), be && (g = E({}, Xt), N = [], be.html === !0 && (E(g, qt), E(N, Jt)), be.svg === !0 && (E(g, ft), E(N, ht), E(N, Xe)), be.svgFilters === !0 && (E(g, pt), E(N, ht), E(N, Xe)), be.mathMl === !0 && (E(g, gt), E(N, Zt), E(N, Xe))), e.ADD_TAGS && (typeof e.ADD_TAGS == "function" ? j.tagCheck = e.ADD_TAGS : (g === v && (g = oe(g)), E(g, e.ADD_TAGS, H))), e.ADD_ATTR && (typeof e.ADD_ATTR == "function" ? j.attributeCheck = e.ADD_ATTR : (N === ee && (N = oe(N)), E(N, e.ADD_ATTR, H))), e.ADD_URI_SAFE_ATTR && E(rt, e.ADD_URI_SAFE_ATTR, H), e.FORBID_CONTENTS && (ne === nt && (ne = oe(ne)), E(ne, e.FORBID_CONTENTS, H)), e.ADD_FORBID_CONTENTS && (ne === nt && (ne = oe(ne)), E(ne, e.ADD_FORBID_CONTENTS, H)), tt && (g["#text"] = !0), fe && E(g, ["html", "head", "body"]), g.table && (E(g, ["tbody"]), delete ae.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Se('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Se('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        A = e.TRUSTED_TYPES_POLICY, S = A.createHTML("");
      } else
        A === void 0 && (A = zr(P, l)), A !== null && typeof S == "string" && (S = A.createHTML(""));
      B && B(e), ye = e;
    }
  }, St = E({}, [...ft, ...pt, ...Sr]), Lt = E({}, [...gt, ...Lr]), hn = function(e) {
    let u = I(e);
    (!u || !u.tagName) && (u = {
      namespaceURI: xe,
      tagName: "template"
    });
    const p = Je(e.tagName), R = Je(u.tagName);
    return at[e.namespaceURI] ? e.namespaceURI === We ? u.namespaceURI === le ? p === "svg" : u.namespaceURI === ze ? p === "svg" && (R === "annotation-xml" || $e[R]) : !!St[p] : e.namespaceURI === ze ? u.namespaceURI === le ? p === "math" : u.namespaceURI === We ? p === "math" && Ge[R] : !!Lt[p] : e.namespaceURI === le ? u.namespaceURI === We && !Ge[R] || u.namespaceURI === ze && !$e[R] ? !1 : !Lt[p] && (mn[p] || !St[p]) : !!(Ae === "application/xhtml+xml" && at[e.namespaceURI]) : !1;
  }, re = function(e) {
    Re(n.removed, {
      element: e
    });
    try {
      I(e).removeChild(e);
    } catch {
      _(e);
    }
  }, pe = function(e, u) {
    try {
      Re(n.removed, {
        attribute: u.getAttributeNode(e),
        from: u
      });
    } catch {
      Re(n.removed, {
        attribute: null,
        from: u
      });
    }
    if (u.removeAttribute(e), e === "is")
      if (he || Ue)
        try {
          re(u);
        } catch {
        }
      else
        try {
          u.setAttribute(e, "");
        } catch {
        }
  }, jt = function(e) {
    let u = null, p = null;
    if (et)
      e = "<remove></remove>" + e;
    else {
      const D = mt(e, /^[\r\n\t ]+/);
      p = D && D[0];
    }
    Ae === "application/xhtml+xml" && xe === le && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const R = A ? A.createHTML(e) : e;
    if (xe === le)
      try {
        u = new O().parseFromString(R, Ae);
      } catch {
      }
    if (!u || !u.documentElement) {
      u = L.createDocument(xe, "template", null);
      try {
        u.documentElement.innerHTML = ot ? S : R;
      } catch {
      }
    }
    const W = u.body || u.documentElement;
    return e && p && W.insertBefore(s.createTextNode(p), W.childNodes[0] || null), xe === le ? X.call(u, fe ? "html" : "body")[0] : fe ? u.documentElement : W;
  }, Ot = function(e) {
    return z.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, lt = function(e) {
    return e instanceof b && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof x) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Mt = function(e) {
    return typeof d == "function" && e instanceof d;
  };
  function ie(h, e, u) {
    qe(h, (p) => {
      p.call(n, e, u, ye);
    });
  }
  const It = function(e) {
    let u = null;
    if (ie(C.beforeSanitizeElements, e, null), lt(e))
      return re(e), !0;
    const p = H(e.nodeName);
    if (ie(C.uponSanitizeElement, e, {
      tagName: p,
      allowedTags: g
    }), He && e.hasChildNodes() && !Mt(e.firstElementChild) && Y(/<[/\w!]/g, e.innerHTML) && Y(/<[/\w!]/g, e.textContent) || e.nodeType === je.progressingInstruction || He && e.nodeType === je.comment && Y(/<[/\w]/g, e.data))
      return re(e), !0;
    if (!(j.tagCheck instanceof Function && j.tagCheck(p)) && (!g[p] || ae[p])) {
      if (!ae[p] && Pt(p) && (w.tagNameCheck instanceof RegExp && Y(w.tagNameCheck, p) || w.tagNameCheck instanceof Function && w.tagNameCheck(p)))
        return !1;
      if (tt && !ne[p]) {
        const R = I(e) || e.parentNode, W = k(e) || e.childNodes;
        if (W && R) {
          const D = W.length;
          for (let q = D - 1; q >= 0; --q) {
            const ce = T(W[q], !0);
            ce.__removalCount = (e.__removalCount || 0) + 1, R.insertBefore(ce, $(e));
          }
        }
      }
      return re(e), !0;
    }
    return e instanceof f && !hn(e) || (p === "noscript" || p === "noembed" || p === "noframes") && Y(/<\/no(script|embed|frames)/i, e.innerHTML) ? (re(e), !0) : (ge && e.nodeType === je.text && (u = e.textContent, qe([Q, Z, ue], (R) => {
      u = ke(u, R, " ");
    }), e.textContent !== u && (Re(n.removed, {
      element: e.cloneNode()
    }), e.textContent = u)), ie(C.afterSanitizeElements, e, null), !1);
  }, Dt = function(e, u, p) {
    if (_t && (u === "id" || u === "name") && (p in s || p in gn))
      return !1;
    if (!(me && !de[u] && Y(Oe, u))) {
      if (!(se && Y(Me, u))) {
        if (!(j.attributeCheck instanceof Function && j.attributeCheck(u, e))) {
          if (!N[u] || de[u]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Pt(e) && (w.tagNameCheck instanceof RegExp && Y(w.tagNameCheck, e) || w.tagNameCheck instanceof Function && w.tagNameCheck(e)) && (w.attributeNameCheck instanceof RegExp && Y(w.attributeNameCheck, u) || w.attributeNameCheck instanceof Function && w.attributeNameCheck(u, e)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              u === "is" && w.allowCustomizedBuiltInElements && (w.tagNameCheck instanceof RegExp && Y(w.tagNameCheck, p) || w.tagNameCheck instanceof Function && w.tagNameCheck(p)))
            ) return !1;
          } else if (!rt[u]) {
            if (!Y(c, ke(p, we, ""))) {
              if (!((u === "src" || u === "xlink:href" || u === "href") && e !== "script" && vr(p, "data:") === 0 && vt[e])) {
                if (!(Pe && !Y(Ie, ke(p, we, "")))) {
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
  }, Pt = function(e) {
    return e !== "annotation-xml" && mt(e, De);
  }, Ht = function(e) {
    ie(C.beforeSanitizeAttributes, e, null);
    const {
      attributes: u
    } = e;
    if (!u || lt(e))
      return;
    const p = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: N,
      forceKeepAttr: void 0
    };
    let R = u.length;
    for (; R--; ) {
      const W = u[R], {
        name: D,
        namespaceURI: q,
        value: ce
      } = W, Ee = H(D), it = ce;
      let F = D === "value" ? it : Cr(it);
      if (p.attrName = Ee, p.attrValue = F, p.keepAttr = !0, p.forceKeepAttr = void 0, ie(C.uponSanitizeAttribute, e, p), F = p.attrValue, At && (Ee === "id" || Ee === "name") && (pe(D, e), F = un + F), He && Y(/((--!?|])>)|<\/(style|title|textarea)/i, F)) {
        pe(D, e);
        continue;
      }
      if (Ee === "attributename" && mt(F, "href")) {
        pe(D, e);
        continue;
      }
      if (p.forceKeepAttr)
        continue;
      if (!p.keepAttr) {
        pe(D, e);
        continue;
      }
      if (!wt && Y(/\/>/i, F)) {
        pe(D, e);
        continue;
      }
      ge && qe([Q, Z, ue], (Ft) => {
        F = ke(F, Ft, " ");
      });
      const Ut = H(e.nodeName);
      if (!Dt(Ut, Ee, F)) {
        pe(D, e);
        continue;
      }
      if (A && typeof P == "object" && typeof P.getAttributeType == "function" && !q)
        switch (P.getAttributeType(Ut, Ee)) {
          case "TrustedHTML": {
            F = A.createHTML(F);
            break;
          }
          case "TrustedScriptURL": {
            F = A.createScriptURL(F);
            break;
          }
        }
      if (F !== it)
        try {
          q ? e.setAttributeNS(q, D, F) : e.setAttribute(D, F), lt(e) ? re(e) : Vt(n.removed);
        } catch {
          pe(D, e);
        }
    }
    ie(C.afterSanitizeAttributes, e, null);
  }, bn = function h(e) {
    let u = null;
    const p = Ot(e);
    for (ie(C.beforeSanitizeShadowDOM, e, null); u = p.nextNode(); )
      ie(C.uponSanitizeShadowNode, u, null), It(u), Ht(u), u.content instanceof a && h(u.content);
    ie(C.afterSanitizeShadowDOM, e, null);
  };
  return n.sanitize = function(h) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = null, p = null, R = null, W = null;
    if (ot = !h, ot && (h = "<!-->"), typeof h != "string" && !Mt(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw Se("dirty is not a string, aborting");
      } else
        throw Se("toString is not a function");
    if (!n.isSupported)
      return h;
    if (Qe || st(e), n.removed = [], typeof h == "string" && (_e = !1), _e) {
      if (h.nodeName) {
        const ce = H(h.nodeName);
        if (!g[ce] || ae[ce])
          throw Se("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof d)
      u = jt("<!---->"), p = u.ownerDocument.importNode(h, !0), p.nodeType === je.element && p.nodeName === "BODY" || p.nodeName === "HTML" ? u = p : u.appendChild(p);
    else {
      if (!he && !ge && !fe && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return A && Fe ? A.createHTML(h) : h;
      if (u = jt(h), !u)
        return he ? null : Fe ? S : "";
    }
    u && et && re(u.firstChild);
    const D = Ot(_e ? h : u);
    for (; R = D.nextNode(); )
      It(R), Ht(R), R.content instanceof a && bn(R.content);
    if (_e)
      return h;
    if (he) {
      if (Ue)
        for (W = G.call(u.ownerDocument); u.firstChild; )
          W.appendChild(u.firstChild);
      else
        W = u;
      return (N.shadowroot || N.shadowrootmode) && (W = J.call(o, W, !0)), W;
    }
    let q = fe ? u.outerHTML : u.innerHTML;
    return fe && g["!doctype"] && u.ownerDocument && u.ownerDocument.doctype && u.ownerDocument.doctype.name && Y(ln, u.ownerDocument.doctype.name) && (q = "<!DOCTYPE " + u.ownerDocument.doctype.name + `>
` + q), ge && qe([Q, Z, ue], (ce) => {
      q = ke(q, ce, " ");
    }), A && Fe ? A.createHTML(q) : q;
  }, n.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    st(h), Qe = !0;
  }, n.clearConfig = function() {
    ye = null, Qe = !1;
  }, n.isValidAttribute = function(h, e, u) {
    ye || st({});
    const p = H(h), R = H(e);
    return Dt(p, R, u);
  }, n.addHook = function(h, e) {
    typeof e == "function" && Re(C[h], e);
  }, n.removeHook = function(h, e) {
    if (e !== void 0) {
      const u = _r(C[h], e);
      return u === -1 ? void 0 : Ar(C[h], u, 1)[0];
    }
    return Vt(C[h]);
  }, n.removeHooks = function(h) {
    C[h] = [];
  }, n.removeAllHooks = function() {
    C = Qt();
  }, n;
}
var Wr = cn();
const $r = ({
  content: r = "",
  onChange: n,
  onBlur: s,
  onFocus: o,
  config: l = {
    showTextFormat: !0,
    showInlineFormat: !0,
    showAlignment: !0,
    showList: !0,
    showInsert: !0
  }
}) => {
  const a = Tt(null), [i, d] = M({
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
  }), [f, m] = M("p"), x = (_) => {
    const $ = window.getSelection();
    if (!$ || $.rangeCount === 0) return;
    const k = $.getRangeAt(0);
    let I = k.commonAncestorContainer;
    I.nodeType === Node.TEXT_NODE && (I = I.parentNode);
    let A = null, S = I;
    for (; S && S !== a.current; ) {
      if (S.nodeType === Node.ELEMENT_NODE) {
        const L = S, z = L.tagName.toLowerCase();
        if (["p", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(z)) {
          A = L;
          break;
        }
      }
      S = S.parentNode;
    }
    if (A && A !== a.current) {
      const L = document.createElement(_);
      L.innerHTML = A.innerHTML, A.style.textAlign && (L.style.textAlign = A.style.textAlign), A.parentNode?.replaceChild(L, A), m(_);
      const z = document.createRange();
      z.selectNodeContents(L), $.removeAllRanges(), $.addRange(z);
    } else {
      const L = document.createElement(_);
      if (k.toString())
        try {
          k.surroundContents(L);
        } catch {
          const G = k.extractContents();
          L.appendChild(G), k.insertNode(L);
        }
      else {
        L.innerHTML = "<br>", k.insertNode(L);
        const z = document.createRange();
        z.setStart(L, 0), z.collapse(!0), $.removeAllRanges(), $.addRange(z);
      }
      m(_);
    }
    setTimeout(() => y(), 10);
  }, b = () => {
    if (a.current && n) {
      const _ = a.current.innerHTML;
      n(_);
    }
  }, O = () => {
    if (s && a.current) {
      const _ = a.current.innerHTML;
      s(_);
    }
  }, P = () => {
    o && o();
  };
  Te(() => {
    if (a.current && r !== void 0) {
      const _ = Wr.sanitize(r);
      a.current.innerHTML !== _ && (a.current.innerHTML = _);
    }
  }, [r]);
  const y = () => {
    const _ = window.getSelection();
    if (!_ || _.rangeCount === 0)
      return;
    let k = _.getRangeAt(0).commonAncestorContainer;
    k.nodeType === Node.TEXT_NODE && (k = k.parentNode);
    let I = k, A = "p";
    for (; I && I !== a.current; ) {
      if (["H1", "H2", "H3", "H4", "H5", "H6", "P"].includes(
        I.tagName
      )) {
        A = I.tagName.toLowerCase();
        break;
      }
      I = I.parentElement;
    }
    m(A);
    let S = k, L = !1, z = !1;
    for (; S && S !== a.current; ) {
      if (S.tagName === "UL") {
        L = !0;
        break;
      } else if (S.tagName === "OL") {
        z = !0;
        break;
      }
      S = S.parentElement;
    }
    const G = (Q) => {
      let Z = k;
      for (; Z && Z !== a.current; ) {
        if (Z.nodeType === Node.ELEMENT_NODE && Z.tagName.toLowerCase() === Q.toLowerCase())
          return !0;
        Z = Z.parentNode;
      }
      return !1;
    };
    let X = k;
    for (; X && X !== a.current; ) {
      if (X.nodeType === Node.ELEMENT_NODE) {
        const Q = X.tagName.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(Q)) {
          m(Q);
          break;
        }
      }
      X = X.parentNode;
    }
    (X === a.current || !X) && m("p");
    let J = k;
    for (; J && J !== a.current && J.nodeType !== Node.ELEMENT_NODE; )
      J = J.parentNode;
    const C = J && J.nodeType === Node.ELEMENT_NODE ? J.style.textAlign : "";
    d({
      bold: G("strong") || G("b"),
      italic: G("em") || G("i"),
      underline: G("u"),
      strikethrough: G("s") || G("strike") || G("del"),
      alignLeft: C === "" || C === "left",
      alignCenter: C === "center",
      alignRight: C === "right",
      alignJustify: C === "justify",
      bulletList: L,
      numberedList: z
    });
  }, T = () => {
    const _ = window.getSelection();
    if (_ && _.rangeCount > 0) {
      const $ = _.getRangeAt(0);
      a.current?.contains($.commonAncestorContainer) && y();
    }
  };
  return Te(() => (document.addEventListener("selectionchange", T), () => {
    document.removeEventListener("selectionchange", T);
  }), []), /* @__PURE__ */ t.jsxs("div", { className: "teddy-editor w-full min-h-screen bg-gray-100 flex flex-col items-center pb-8 relative", children: [
    /* @__PURE__ */ t.jsx(
      Er,
      {
        config: l,
        activeFormats: i,
        currentTextFormat: f,
        updateActiveFormats: y,
        applyTextFormat: x,
        editorRef: a
      }
    ),
    /* @__PURE__ */ t.jsx(
      cr,
      {
        editorRef: a,
        activeFormats: i,
        currentTextFormat: f,
        updateActiveFormats: y,
        applyTextFormat: x
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        ref: a,
        contentEditable: !0,
        className: "document-page outline-none focus:ring-0 prose prose-headings:mt-4 prose-headings:mb-2 max-w-4xl mx-auto",
        style: {
          whiteSpace: "pre-wrap",
          minHeight: "1000px"
          // Ensure visual resemblance to A4
        },
        onMouseUp: y,
        onKeyUp: y,
        onInput: b,
        onBlur: O,
        onFocus: P
      }
    )
  ] });
};
function Yr() {
  return /* @__PURE__ */ t.jsx("div", { children: /* @__PURE__ */ t.jsx(
    $r,
    {
      content: "<p>Initial content</p>",
      onChange: (r) => console.log("Content changed:", r),
      onBlur: (r) => console.log("Editor lost focus", r),
      onFocus: () => console.log("Editor gained focus")
    }
  ) });
}
export {
  Yr as default
};
