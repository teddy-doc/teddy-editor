import Ne, { forwardRef as he, createElement as se, useState as v, useRef as ae, useEffect as V } from "react";
var Z = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function ve() {
  if (ce) return J;
  ce = 1;
  var n = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function i(o, l, t) {
    var a = null;
    if (t !== void 0 && (a = "" + t), l.key !== void 0 && (a = "" + l.key), "key" in l) {
      t = {};
      for (var c in l)
        c !== "key" && (t[c] = l[c]);
    } else t = l;
    return l = t.ref, {
      $$typeof: n,
      type: o,
      key: a,
      ref: l !== void 0 ? l : null,
      props: t
    };
  }
  return J.Fragment = s, J.jsx = i, J.jsxs = i, J;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var de;
function Ee() {
  return de || (de = 1, process.env.NODE_ENV !== "production" && function() {
    function n(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === G ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case h:
          return "Fragment";
        case X:
          return "Profiler";
        case M:
          return "StrictMode";
        case Y:
          return "Suspense";
        case I:
          return "SuspenseList";
        case z:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case H:
            return "Portal";
          case U:
            return (r.displayName || "Context") + ".Provider";
          case P:
            return (r._context.displayName || "Context") + ".Consumer";
          case q:
            var m = r.render;
            return r = r.displayName, r || (r = m.displayName || m.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case B:
            return m = r.displayName || null, m !== null ? m : n(r.type) || "Memo";
          case $:
            m = r._payload, r = r._init;
            try {
              return n(r(m));
            } catch {
            }
        }
      return null;
    }
    function s(r) {
      return "" + r;
    }
    function i(r) {
      try {
        s(r);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var f = m.error, y = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return f.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), s(r);
      }
    }
    function o(r) {
      if (r === h) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === $)
        return "<...>";
      try {
        var m = n(r);
        return m ? "<" + m + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var r = g.A;
      return r === null ? null : r.getOwner();
    }
    function t() {
      return Error("react-stack-top-frame");
    }
    function a(r) {
      if (C.call(r, "key")) {
        var m = Object.getOwnPropertyDescriptor(r, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function c(r, m) {
      function f() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: f,
        configurable: !0
      });
    }
    function d() {
      var r = n(this.type);
      return E[r] || (E[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function u(r, m, f, y, T, O, ee, te) {
      return f = O.ref, r = {
        $$typeof: _,
        type: r,
        key: m,
        props: O,
        _owner: T
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function x(r, m, f, y, T, O, ee, te) {
      var j = m.children;
      if (j !== void 0)
        if (y)
          if (N(j)) {
            for (y = 0; y < j.length; y++)
              b(j[y]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(j);
      if (C.call(m, "key")) {
        j = n(r);
        var F = Object.keys(m).filter(function(we) {
          return we !== "key";
        });
        y = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", S[j + y] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          j,
          F,
          j
        ), S[j + y] = !0);
      }
      if (j = null, f !== void 0 && (i(f), j = "" + f), a(m) && (i(m.key), j = "" + m.key), "key" in m) {
        f = {};
        for (var ne in m)
          ne !== "key" && (f[ne] = m[ne]);
      } else f = m;
      return j && c(
        f,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), u(
        r,
        j,
        O,
        T,
        l(),
        f,
        ee,
        te
      );
    }
    function b(r) {
      typeof r == "object" && r !== null && r.$$typeof === _ && r._store && (r._store.validated = 1);
    }
    var p = Ne, _ = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), U = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), z = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), g = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, N = Array.isArray, R = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var A, E = {}, w = p["react-stack-bottom-frame"].bind(
      p,
      t
    )(), L = R(o(t)), S = {};
    W.Fragment = h, W.jsx = function(r, m, f, y, T) {
      var O = 1e4 > g.recentlyCreatedOwnerStacks++;
      return x(
        r,
        m,
        f,
        !1,
        y,
        T,
        O ? Error("react-stack-top-frame") : w,
        O ? R(o(r)) : L
      );
    }, W.jsxs = function(r, m, f, y, T) {
      var O = 1e4 > g.recentlyCreatedOwnerStacks++;
      return x(
        r,
        m,
        f,
        !0,
        y,
        T,
        O ? Error("react-stack-top-frame") : w,
        O ? R(o(r)) : L
      );
    };
  }()), W;
}
var ue;
function je() {
  return ue || (ue = 1, process.env.NODE_ENV === "production" ? Z.exports = ve() : Z.exports = Ee()), Z.exports;
}
var e = je();
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ce = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (s, i, o) => o ? o.toUpperCase() : i.toLowerCase()
), me = (n) => {
  const s = Ce(n);
  return s.charAt(0).toUpperCase() + s.slice(1);
}, fe = (...n) => n.filter((s, i, o) => !!s && s.trim() !== "" && o.indexOf(s) === i).join(" ").trim(), Re = (n) => {
  for (const s in n)
    if (s.startsWith("aria-") || s === "role" || s === "title")
      return !0;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Le = {
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
const Te = he(
  ({
    color: n = "currentColor",
    size: s = 24,
    strokeWidth: i = 2,
    absoluteStrokeWidth: o,
    className: l = "",
    children: t,
    iconNode: a,
    ...c
  }, d) => se(
    "svg",
    {
      ref: d,
      ...Le,
      width: s,
      height: s,
      stroke: n,
      strokeWidth: o ? Number(i) * 24 / Number(s) : i,
      className: fe("lucide", l),
      ...!t && !Re(c) && { "aria-hidden": "true" },
      ...c
    },
    [
      ...a.map(([u, x]) => se(u, x)),
      ...Array.isArray(t) ? t : [t]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const k = (n, s) => {
  const i = he(
    ({ className: o, ...l }, t) => se(Te, {
      ref: t,
      iconNode: s,
      className: fe(
        `lucide-${ke(me(n))}`,
        `lucide-${n}`,
        o
      ),
      ...l
    })
  );
  return i.displayName = me(n), i;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = [
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 18H5", key: "18s9l3" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], _e = k("align-center", Ae);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }]
], Me = k("align-justify", Se);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Ie = k("align-left", Oe);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = [
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 18H7", key: "1ygte8" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Pe = k("align-right", He);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $e = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], ze = k("bold", $e);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], pe = k("chevron-down", Fe);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
], De = k("code", Ve);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], qe = k("image", Ue);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], Je = k("italic", Ye);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Xe = k("link", We);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
], Ge = k("list-ordered", Be);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], Qe = k("list", Ze);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ke = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], et = k("strikethrough", Ke);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], nt = k("underline", tt);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], ot = k("video", rt);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], le = k("x", st), Q = (n, s, i) => {
  const o = window.getSelection();
  if (!o || o.rangeCount === 0 || !s.current) return;
  const l = o.getRangeAt(0);
  if (l.toString())
    try {
      const t = () => {
        let u = l.commonAncestorContainer;
        for (; u && u !== s.current; ) {
          if (u.nodeType === Node.ELEMENT_NODE) {
            const x = u;
            if (x.tagName.toLowerCase() === n.toLowerCase())
              return { isFormatted: !0, formatElement: x };
          }
          u = u.parentNode;
        }
        return { isFormatted: !1, formatElement: null };
      }, { isFormatted: a, formatElement: c } = t();
      let d = null;
      if (a && c) {
        const u = c.parentNode, x = document.createTextNode(c.textContent || "");
        u?.replaceChild(x, c), u?.normalize();
        const b = document.createRange();
        b.selectNodeContents(x), o.removeAllRanges(), o.addRange(b);
      } else {
        d = document.createElement(n);
        try {
          l.surroundContents(d);
          const u = document.createRange();
          u.selectNodeContents(d), o.removeAllRanges(), o.addRange(u);
        } catch {
          const x = l.extractContents();
          d.appendChild(x), l.insertNode(d);
          const b = document.createRange();
          b.selectNodeContents(d), o.removeAllRanges(), o.addRange(b);
        }
      }
      i();
    } catch (t) {
      console.warn("Error applying format:", t), i();
    }
}, xe = ({
  editorRef: n,
  activeFormats: s,
  updateActiveFormats: i,
  getButtonClass: o
}) => /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Q("strong", n, i),
      className: o(s.bold),
      title: "Bold",
      children: /* @__PURE__ */ e.jsx(ze, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Q("em", n, i),
      className: o(s.italic),
      title: "Italic",
      children: /* @__PURE__ */ e.jsx(Je, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Q("u", n, i),
      className: o(s.underline),
      title: "Underline",
      children: /* @__PURE__ */ e.jsx(nt, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => Q("s", n, i),
      className: o(s.strikethrough),
      title: "Strikethrough",
      children: /* @__PURE__ */ e.jsx(et, { size: 18 })
    }
  )
] }), K = (n, s) => {
  const i = window.getSelection();
  if (!i || i.rangeCount === 0) return;
  let l = i.getRangeAt(0).commonAncestorContainer;
  for (; l && l.nodeType !== Node.ELEMENT_NODE; )
    l = l.parentNode;
  if (l && l.nodeType === Node.ELEMENT_NODE) {
    const t = l;
    t.style.textAlign = n === "left" ? "" : n, s();
  }
}, be = ({
  activeFormats: n,
  updateActiveFormats: s,
  getButtonClass: i
}) => /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => K("left", s),
      className: i(n.alignLeft),
      title: "Align Left",
      children: /* @__PURE__ */ e.jsx(Ie, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => K("center", s),
      className: i(n.alignCenter),
      title: "Align Center",
      children: /* @__PURE__ */ e.jsx(_e, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => K("right", s),
      className: i(n.alignRight),
      title: "Align Right",
      children: /* @__PURE__ */ e.jsx(Pe, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => K("justify", s),
      className: i(n.alignJustify),
      title: "Justify",
      children: /* @__PURE__ */ e.jsx(Me, { size: 18 })
    }
  )
] }), ge = (n, s, i) => {
  const o = window.getSelection();
  if (!o || o.rangeCount === 0 || !s.current) return;
  const l = o.getRangeAt(0);
  let t = l.commonAncestorContainer;
  t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
  let a = t;
  for (; a && a !== s.current && !["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL"].includes(
    a.tagName
  ); )
    a = a.parentElement;
  if (!a || a === s.current) {
    const c = document.createElement(n), d = document.createElement("li");
    d.textContent = o.toString() || "List item", c.appendChild(d), l.deleteContents(), l.insertNode(c);
    const u = document.createRange();
    u.setStart(d, 0), u.setEnd(d, d.childNodes.length), o.removeAllRanges(), o.addRange(u);
  } else if (a.tagName === "LI") {
    const c = a.parentElement;
    if (c.tagName.toLowerCase() === n) {
      const d = document.createElement("p");
      d.innerHTML = a.innerHTML, c.parentNode?.replaceChild(d, c);
    } else {
      const d = document.createElement(n);
      d.innerHTML = c.innerHTML, c.parentNode?.replaceChild(d, c);
    }
  } else {
    const c = document.createElement(n), d = document.createElement("li");
    d.innerHTML = a.innerHTML, c.appendChild(d), a.parentNode?.replaceChild(c, a);
  }
  i();
}, ye = ({
  editorRef: n,
  activeFormats: s,
  updateActiveFormats: i,
  getButtonClass: o
}) => /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => {
        n?.current && ge("ul", n, i);
      },
      className: o(s.bulletList),
      title: "Bullet List",
      children: /* @__PURE__ */ e.jsx(Qe, { size: 18 })
    }
  ),
  /* @__PURE__ */ e.jsx(
    "button",
    {
      onClick: () => {
        n?.current && ge("ol", n, i);
      },
      className: o(s.numberedList),
      title: "Numbered List",
      children: /* @__PURE__ */ e.jsx(Ge, { size: 18 })
    }
  )
] }), at = ({
  editorRef: n,
  activeFormats: s,
  currentTextFormat: i,
  updateActiveFormats: o,
  applyTextFormat: l
}) => {
  const [t, a] = v({ top: 0, left: 0 }), [c, d] = v(!1), [u, x] = v(!1), b = ae(null), p = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" }
  ];
  V(() => {
    const h = () => {
      const M = window.getSelection();
      if (!M || M.rangeCount === 0 || M.isCollapsed || !n.current || !n.current.contains(M.anchorNode)) {
        d(!1), x(!1);
        return;
      }
      const P = M.getRangeAt(0).getBoundingClientRect(), U = b.current?.offsetHeight || 50, q = P.top - U - 45, Y = P.left + P.width / 2;
      a({ top: q, left: Y }), d(!0);
    };
    return document.addEventListener("selectionchange", h), window.addEventListener("scroll", h, !0), window.addEventListener("resize", h), () => {
      document.removeEventListener("selectionchange", h), window.removeEventListener("scroll", h, !0), window.removeEventListener("resize", h);
    };
  }, [n]);
  const _ = (h) => `p-1.5 rounded transition-colors ${h ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, H = (h) => {
    l(h), x(!1);
  };
  return c ? /* @__PURE__ */ e.jsxs(
    "div",
    {
      ref: b,
      className: "fixed z-50 flex items-center gap-1 p-1 bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in zoom-in-95 duration-200",
      style: {
        top: `${t.top}px`,
        left: `${t.left}px`,
        transform: "translateX(-50%)"
      },
      onMouseDown: (h) => {
        h.preventDefault();
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => x(!u),
              className: "flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between",
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "truncate max-w-[80px]", children: p.find((h) => h.value === i)?.label || "Paragraph" }),
                /* @__PURE__ */ e.jsx(pe, { size: 12 })
              ]
            }
          ),
          u && /* @__PURE__ */ e.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[140px] max-h-[300px] overflow-y-auto", children: p.map((h) => /* @__PURE__ */ e.jsx(
            "button",
            {
              onClick: () => H(h.tag),
              className: `w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${i === h.value ? "bg-blue-50 text-blue-600" : "text-gray-700"}`,
              children: h.label
            },
            h.value
          )) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ e.jsx(
          xe,
          {
            editorRef: n,
            activeFormats: s,
            updateActiveFormats: o,
            getButtonClass: _
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ e.jsx(
          ye,
          {
            editorRef: n,
            activeFormats: {
              bulletList: s.bulletList,
              numberedList: s.numberedList
            },
            updateActiveFormats: o,
            getButtonClass: _
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ e.jsx(
          be,
          {
            activeFormats: {
              alignLeft: s.alignLeft,
              alignCenter: s.alignCenter,
              alignRight: s.alignRight,
              alignJustify: s.alignJustify
            },
            updateActiveFormats: o,
            getButtonClass: _
          }
        )
      ]
    }
  ) : null;
};
let D = null;
const re = () => {
  const n = window.getSelection();
  n && n.rangeCount > 0 && (D = n.getRangeAt(0).cloneRange());
}, ie = () => {
  if (D) {
    const n = window.getSelection();
    n?.removeAllRanges(), n?.addRange(D);
  }
}, oe = () => {
  const n = window.getSelection();
  if (!n || n.rangeCount === 0) return null;
  let i = n.getRangeAt(0).commonAncestorContainer;
  i.nodeType === Node.TEXT_NODE && (i = i.parentNode);
  let o = i;
  for (; o && o !== document.body; ) {
    if (o.nodeType === Node.ELEMENT_NODE) {
      const l = o, t = l.tagName.toLowerCase();
      if (t === "a")
        return {
          type: "link",
          url: l.getAttribute("href") || "",
          text: l.textContent || ""
        };
      if (t === "img")
        return {
          type: "image",
          src: l.getAttribute("src") || "",
          alt: l.getAttribute("alt") || ""
        };
      if (t === "iframe")
        return {
          type: "video",
          src: l.getAttribute("src") || ""
        };
    }
    o = o.parentNode;
  }
  return null;
}, lt = (n, s) => {
  ie();
  const i = window.getSelection();
  if (!i || i.rangeCount === 0) {
    const a = document.querySelector(
      '[contenteditable="true"]'
    );
    if (a) {
      const c = document.createElement("a");
      c.href = n, c.textContent = s || n, c.target = "_blank", c.rel = "noopener noreferrer", c.className = "text-blue-600 underline hover:text-blue-800", a.appendChild(c);
      const d = document.createTextNode(" ");
      a.appendChild(d);
      const u = document.createRange();
      u.setStartAfter(d), u.collapse(!0), i && (i.removeAllRanges(), i.addRange(u));
    }
    return;
  }
  const o = i.getRangeAt(0);
  let l = null, t = o.commonAncestorContainer;
  for (; t && t !== document.body; ) {
    if (t.nodeType === Node.ELEMENT_NODE && t.tagName.toLowerCase() === "a") {
      l = t;
      break;
    }
    t = t.parentNode;
  }
  if (l)
    l.setAttribute("href", n), l.textContent = s || n;
  else {
    const a = document.createElement("a");
    a.href = n, a.textContent = s || n, a.target = "_blank", a.rel = "noopener noreferrer", a.className = "text-blue-600 underline hover:text-blue-800", o.deleteContents(), o.insertNode(a);
    const c = document.createRange();
    c.setStartAfter(a), c.collapse(!0), i.removeAllRanges(), i.addRange(c);
  }
  D = null;
}, it = (n, s = "Inserted image") => {
  ie();
  const i = window.getSelection();
  if (!i || i.rangeCount === 0) {
    const a = document.querySelector(
      '[contenteditable="true"]'
    );
    if (a) {
      const c = document.createElement("img");
      c.src = n, c.alt = s, c.className = "max-w-full h-auto rounded shadow-sm", a.appendChild(c);
      const d = document.createElement("br");
      a.appendChild(d);
      const u = document.createRange();
      u.setStartAfter(d), u.collapse(!0), i && (i.removeAllRanges(), i.addRange(u));
    }
    return;
  }
  const o = i.getRangeAt(0);
  let l = null, t = o.commonAncestorContainer;
  for (; t && t !== document.body; ) {
    if (t.nodeType === Node.ELEMENT_NODE && t.tagName.toLowerCase() === "img") {
      l = t;
      break;
    }
    t = t.parentNode;
  }
  if (l)
    l.setAttribute("src", n), l.setAttribute("alt", s);
  else {
    const a = document.createElement("img");
    a.src = n, a.alt = s, a.className = "max-w-full h-auto rounded shadow-sm", o.deleteContents(), o.insertNode(a);
    const c = document.createRange();
    c.setStartAfter(a), c.collapse(!0), i.removeAllRanges(), i.addRange(c);
  }
  D = null;
}, ct = (n) => {
  ie();
  const s = window.getSelection();
  if (!s || s.rangeCount === 0) {
    const t = document.querySelector(
      '[contenteditable="true"]'
    );
    if (t) {
      const a = document.createElement("iframe");
      a.src = n, a.width = "560", a.height = "315", a.className = "max-w-full rounded shadow-sm", a.setAttribute("frameborder", "0"), a.setAttribute("allowfullscreen", "true"), t.appendChild(a);
      const c = document.createElement("br");
      t.appendChild(c);
      const d = document.createRange();
      d.setStartAfter(c), d.collapse(!0), s && (s.removeAllRanges(), s.addRange(d));
    }
    return;
  }
  const i = s.getRangeAt(0);
  let o = null, l = i.commonAncestorContainer;
  for (; l && l !== document.body; ) {
    if (l.nodeType === Node.ELEMENT_NODE && l.tagName.toLowerCase() === "iframe") {
      o = l;
      break;
    }
    l = l.parentNode;
  }
  if (o)
    o.setAttribute("src", n);
  else {
    const t = document.createElement("iframe");
    t.src = n, t.width = "560", t.height = "315", t.className = "max-w-full rounded shadow-sm", t.setAttribute("frameborder", "0"), t.setAttribute("allowfullscreen", "true"), i.deleteContents(), i.insertNode(t);
    const a = document.createRange();
    a.setStartAfter(t), a.collapse(!0), s.removeAllRanges(), s.addRange(a);
  }
  D = null;
}, dt = ({
  isOpen: n,
  onClose: s,
  onInsert: i,
  initialData: o
}) => {
  const [l, t] = v(""), [a, c] = v("");
  V(() => {
    n && o ? (t(o.url), c(o.text)) : n && !o && (t(""), c(""));
  }, [n, o]);
  const d = (u) => {
    u.preventDefault(), l.trim() && (i(l.trim(), a.trim()), t(""), c(""), s());
  };
  return n ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Link" : "Insert Link" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: s,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ e.jsx(le, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: d, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "URL" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (u) => t(u.target.value),
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
            value: a,
            onChange: (u) => c(u.target.value),
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
            onClick: s,
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
}, ut = ({
  isOpen: n,
  onClose: s,
  onInsert: i,
  initialData: o
}) => {
  const [l, t] = v(""), [a, c] = v(""), d = ae(null);
  V(() => {
    n && o ? (t(o.alt), c(o.src)) : n && !o && (t(""), c(""));
  }, [n, o]);
  const u = (p) => {
    const _ = p.target.files?.[0];
    if (_) {
      const H = new FileReader();
      H.onload = (h) => {
        const M = h.target?.result;
        i(M, l || _.name), t(""), c(""), s(), d.current && (d.current.value = "");
      }, H.readAsDataURL(_);
    }
  }, x = () => {
    o && a && (i(a, l), t(""), c(""), s());
  }, b = () => {
    d.current && d.current.click();
  };
  return n ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Image" : "Insert Image" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: s,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ e.jsx(le, { size: 20 })
        }
      )
    ] }),
    o && /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ e.jsx(
        "img",
        {
          src: a,
          alt: l,
          className: "max-w-full h-32 object-contain rounded border"
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: b,
          className: "mt-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200",
          children: "Replace Image"
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      "input",
      {
        ref: d,
        type: "file",
        accept: "image/*",
        onChange: u,
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
          onChange: u,
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
          onChange: (p) => t(p.target.value),
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
          onClick: s,
          className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      o && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: x,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
          children: "Update Image"
        }
      )
    ] })
  ] }) }) : null;
}, mt = ({
  isOpen: n,
  onClose: s,
  onInsert: i,
  initialData: o
}) => {
  const [l, t] = v("");
  V(() => {
    n && o ? t(o.src) : n && !o && t("");
  }, [n, o]);
  const a = (d) => {
    const u = d.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
    );
    if (u)
      return `https://www.youtube.com/embed/${u[1]}`;
    const x = d.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return x ? `https://player.vimeo.com/video/${x[1]}` : d;
  }, c = (d) => {
    if (d.preventDefault(), l.trim()) {
      const u = a(l.trim());
      i(u), t(""), s();
    }
  };
  return n ? /* @__PURE__ */ e.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ e.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ e.jsx("h3", { className: "text-lg font-semibold", children: o ? "Edit Video" : "Insert Video" }),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: s,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ e.jsx(le, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("form", { onSubmit: c, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ e.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Video URL" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (d) => t(d.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "YouTube, Vimeo, or embed URL",
            required: !0,
            autoFocus: !0
          }
        ),
        /* @__PURE__ */ e.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Supports YouTube, Vimeo, and direct embed URLs" })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "button",
            onClick: s,
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
}, gt = () => {
  const [n, s] = v(!1), [i, o] = v(!1), [l, t] = v(!1), [a, c] = v(null), d = () => {
    re();
    const b = oe();
    c(b?.type === "link" ? b : null), s(!0);
  }, u = () => {
    re();
    const b = oe();
    c(b?.type === "image" ? b : null), o(!0);
  }, x = () => {
    re();
    const b = oe();
    c(b?.type === "video" ? b : null), t(!0);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: d,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Link",
          children: /* @__PURE__ */ e.jsx(Xe, { size: 18 })
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: u,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Image",
          children: /* @__PURE__ */ e.jsx(qe, { size: 18 })
        }
      ),
      /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: x,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Video",
          children: /* @__PURE__ */ e.jsx(ot, { size: 18 })
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      dt,
      {
        isOpen: n,
        onClose: () => {
          s(!1), c(null);
        },
        onInsert: lt,
        initialData: a?.type === "link" ? {
          url: a.url,
          text: a.text
        } : null
      }
    ),
    /* @__PURE__ */ e.jsx(
      ut,
      {
        isOpen: i,
        onClose: () => {
          o(!1), c(null);
        },
        onInsert: it,
        initialData: a?.type === "image" ? {
          src: a.src,
          alt: a.alt
        } : null
      }
    ),
    /* @__PURE__ */ e.jsx(
      mt,
      {
        isOpen: l,
        onClose: () => {
          t(!1), c(null);
        },
        onInsert: ct,
        initialData: a?.type === "video" ? {
          src: a.src
        } : null
      }
    )
  ] });
}, ht = ({
  content: n = "",
  onChange: s,
  onBlur: i,
  onFocus: o,
  config: l = {
    showTextFormat: !0,
    showInlineFormat: !0,
    showAlignment: !0,
    showList: !0,
    showInsert: !0,
    showCodeView: !0
  }
}) => {
  const t = ae(null), [a, c] = v({
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
  }), [d, u] = v("p"), [x, b] = v(!1), [p, _] = v(!1), [H, h] = v(n), M = (g) => {
    const C = window.getSelection();
    if (!C || C.rangeCount === 0) return;
    const N = C.getRangeAt(0);
    let R = N.commonAncestorContainer;
    R.nodeType === Node.TEXT_NODE && (R = R.parentNode);
    let A = null, E = R;
    for (; E && E !== t.current; ) {
      if (E.nodeType === Node.ELEMENT_NODE) {
        const w = E, L = w.tagName.toLowerCase();
        if (["p", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(L)) {
          A = w;
          break;
        }
      }
      E = E.parentNode;
    }
    if (A && A !== t.current) {
      const w = document.createElement(g);
      w.innerHTML = A.innerHTML, A.style.textAlign && (w.style.textAlign = A.style.textAlign), A.parentNode?.replaceChild(w, A), u(g);
      const L = document.createRange();
      L.selectNodeContents(w), C.removeAllRanges(), C.addRange(L);
    } else {
      const w = document.createElement(g);
      if (N.toString())
        try {
          N.surroundContents(w);
        } catch {
          const S = N.extractContents();
          w.appendChild(S), N.insertNode(w);
        }
      else {
        w.innerHTML = "<br>", N.insertNode(w);
        const L = document.createRange();
        L.setStart(w, 0), L.collapse(!0), C.removeAllRanges(), C.addRange(L);
      }
      u(g);
    }
    setTimeout(() => I(), 10);
  }, X = () => {
    if (t.current)
      if (p)
        t.current.innerHTML = H, t.current.contentEditable = "true", _(!1);
      else {
        const g = t.current.innerHTML;
        h(g), t.current.contentEditable = "false", t.current.textContent = g, _(!0);
      }
  }, P = () => {
    if (t.current && s) {
      const g = p ? t.current.textContent || "" : t.current.innerHTML;
      s(g);
    }
  }, U = () => {
    if (p && t.current) {
      const g = t.current.textContent || "";
      h(g), s && s(g);
    }
  }, q = () => {
    if (i && t.current) {
      const g = t.current.textContent || "";
      i(g);
    }
  }, Y = () => {
    o && o();
  };
  V(() => {
    t.current && n !== void 0 && (p ? t.current.textContent = n : t.current.innerHTML = n, h(n));
  }, [n, p]);
  const I = () => {
    const g = window.getSelection();
    if (!g || g.rangeCount === 0)
      return;
    let N = g.getRangeAt(0).commonAncestorContainer;
    N.nodeType === Node.TEXT_NODE && (N = N.parentNode);
    let R = N, A = "p";
    for (; R && R !== t.current; ) {
      if (["H1", "H2", "H3", "H4", "H5", "H6", "P"].includes(
        R.tagName
      )) {
        A = R.tagName.toLowerCase();
        break;
      }
      R = R.parentElement;
    }
    u(A);
    let E = N, w = !1, L = !1;
    for (; E && E !== t.current; ) {
      if (E.tagName === "UL") {
        w = !0;
        break;
      } else if (E.tagName === "OL") {
        L = !0;
        break;
      }
      E = E.parentElement;
    }
    const S = (y) => {
      let T = N;
      for (; T && T !== t.current; ) {
        if (T.nodeType === Node.ELEMENT_NODE && T.tagName.toLowerCase() === y.toLowerCase())
          return !0;
        T = T.parentNode;
      }
      return !1;
    };
    let r = N;
    for (; r && r !== t.current; ) {
      if (r.nodeType === Node.ELEMENT_NODE) {
        const y = r.tagName.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(y)) {
          u(y);
          break;
        }
      }
      r = r.parentNode;
    }
    (r === t.current || !r) && u("p");
    let m = N;
    for (; m && m !== t.current && m.nodeType !== Node.ELEMENT_NODE; )
      m = m.parentNode;
    const f = m && m.nodeType === Node.ELEMENT_NODE ? m.style.textAlign : "";
    c({
      bold: S("strong") || S("b"),
      italic: S("em") || S("i"),
      underline: S("u"),
      strikethrough: S("s") || S("strike") || S("del"),
      alignLeft: f === "" || f === "left",
      alignCenter: f === "center",
      alignRight: f === "right",
      alignJustify: f === "justify",
      bulletList: w,
      numberedList: L
    });
  }, B = () => {
    const g = window.getSelection();
    if (g && g.rangeCount > 0) {
      const C = g.getRangeAt(0);
      t.current?.contains(C.commonAncestorContainer) && I();
    }
  };
  V(() => (document.addEventListener("selectionchange", B), () => {
    document.removeEventListener("selectionchange", B);
  }), []);
  const $ = (g) => `p-2 rounded transition-colors ${g ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, z = () => /* @__PURE__ */ e.jsx("div", { className: "w-px h-6 bg-gray-300 mx-1" }), G = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" }
  ];
  return /* @__PURE__ */ e.jsxs("div", { className: "teddy-editor w-full min-h-screen bg-gray-100 flex flex-col items-center pb-8 relative", children: [
    !p && /* @__PURE__ */ e.jsx("div", { className: "sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm px-4 py-2 flex items-center justify-center", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-wrap items-center gap-1 max-w-5xl mx-auto w-full", children: [
      l.showTextFormat && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              onClick: () => b(!x),
              onBlur: () => setTimeout(() => b(!1), 200),
              className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors",
              children: [
                /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: G.find((g) => g.value === d)?.label || "Paragraph" }),
                /* @__PURE__ */ e.jsx(pe, { size: 14, className: "text-gray-500" })
              ]
            }
          ),
          x && /* @__PURE__ */ e.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px] max-h-[300px] overflow-y-auto w-full", children: G.map((g) => /* @__PURE__ */ e.jsx(
            "button",
            {
              onMouseDown: (C) => {
                C.preventDefault(), M(g.tag);
              },
              className: `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${d === g.value ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`,
              children: g.label
            },
            g.value
          )) })
        ] }),
        /* @__PURE__ */ e.jsx(z, {})
      ] }),
      l.showInlineFormat && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          xe,
          {
            editorRef: t,
            activeFormats: {
              bold: a.bold,
              italic: a.italic,
              underline: a.underline,
              strikethrough: a.strikethrough
            },
            updateActiveFormats: I,
            getButtonClass: $
          }
        ),
        /* @__PURE__ */ e.jsx(z, {})
      ] }),
      l.showAlignment && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          be,
          {
            activeFormats: {
              alignLeft: a.alignLeft,
              alignCenter: a.alignCenter,
              alignRight: a.alignRight,
              alignJustify: a.alignJustify
            },
            updateActiveFormats: I,
            getButtonClass: $
          }
        ),
        /* @__PURE__ */ e.jsx(z, {})
      ] }),
      l.showList && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(
          ye,
          {
            editorRef: t,
            activeFormats: {
              bulletList: a.bulletList,
              numberedList: a.numberedList
            },
            updateActiveFormats: I,
            getButtonClass: $
          }
        ),
        /* @__PURE__ */ e.jsx(z, {})
      ] }),
      l.showInsert && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx(gt, {}),
        /* @__PURE__ */ e.jsx(z, {})
      ] }),
      l.showCodeView && /* @__PURE__ */ e.jsx(
        "button",
        {
          onClick: X,
          className: $(p),
          title: p ? "Switch to Visual View" : "Switch to Code View",
          children: /* @__PURE__ */ e.jsx(De, { size: 18 })
        }
      )
    ] }) }),
    !p && /* @__PURE__ */ e.jsx(
      at,
      {
        editorRef: t,
        activeFormats: a,
        currentTextFormat: d,
        updateActiveFormats: I,
        applyTextFormat: M
      }
    ),
    /* @__PURE__ */ e.jsx(
      "div",
      {
        ref: t,
        contentEditable: !p,
        className: `document-page outline-none focus:ring-0 ${p ? "font-mono text-sm bg-gray-50 whitespace-pre-wrap !p-8" : "prose prose-headings:mt-4 prose-headings:mb-2"}`,
        style: {
          whiteSpace: "pre-wrap",
          marginTop: "2rem",
          // spacing from fixed header
          minHeight: "1000px"
          // Ensure visual resemblance to A4
        },
        onMouseUp: p ? void 0 : I,
        onKeyUp: p ? void 0 : I,
        onInput: p ? U : P,
        onBlur: q,
        onFocus: Y
      }
    )
  ] });
};
function pt() {
  return /* @__PURE__ */ e.jsx(
    ht,
    {
      content: "<p>Initial content</p>",
      onChange: (n) => console.log("Content changed:", n),
      onBlur: (n) => console.log("Editor lost focus", n),
      onFocus: () => console.log("Editor gained focus")
    }
  );
}
export {
  pt as default
};
