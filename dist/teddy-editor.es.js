import xn, { forwardRef as en, createElement as gt, useState as P, useRef as xt, useEffect as Re } from "react";
var Ye = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ft;
function Tn() {
  if (Ft) return Le;
  Ft = 1;
  var n = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(r, l, a) {
    var c = null;
    if (a !== void 0 && (c = "" + a), l.key !== void 0 && (c = "" + l.key), "key" in l) {
      a = {};
      for (var d in l)
        d !== "key" && (a[d] = l[d]);
    } else a = l;
    return l = a.ref, {
      $$typeof: n,
      type: r,
      key: c,
      ref: l !== void 0 ? l : null,
      props: a
    };
  }
  return Le.Fragment = t, Le.jsx = s, Le.jsxs = s, Le;
}
var ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zt;
function yn() {
  return zt || (zt = 1, process.env.NODE_ENV !== "production" && function() {
    function n(i) {
      if (i == null) return null;
      if (typeof i == "function")
        return i.$$typeof === G ? null : i.displayName || i.name || null;
      if (typeof i == "string") return i;
      switch (i) {
        case A:
          return "Fragment";
        case xe:
          return "Profiler";
        case X:
          return "StrictMode";
        case K:
          return "Suspense";
        case T:
          return "SuspenseList";
        case W:
          return "Activity";
      }
      if (typeof i == "object")
        switch (typeof i.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), i.$$typeof) {
          case H:
            return "Portal";
          case re:
            return (i.displayName || "Context") + ".Provider";
          case ce:
            return (i._context.displayName || "Context") + ".Consumer";
          case R:
            var g = i.render;
            return i = i.displayName, i || (i = g.displayName || g.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
          case V:
            return g = i.displayName || null, g !== null ? g : n(i.type) || "Memo";
          case O:
            g = i._payload, i = i._init;
            try {
              return n(i(g));
            } catch {
            }
        }
      return null;
    }
    function t(i) {
      return "" + i;
    }
    function s(i) {
      try {
        t(i);
        var g = !1;
      } catch {
        g = !0;
      }
      if (g) {
        g = console;
        var C = g.error, y = typeof Symbol == "function" && Symbol.toStringTag && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return C.call(
          g,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          y
        ), t(i);
      }
    }
    function r(i) {
      if (i === A) return "<>";
      if (typeof i == "object" && i !== null && i.$$typeof === O)
        return "<...>";
      try {
        var g = n(i);
        return g ? "<" + g + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var i = _.A;
      return i === null ? null : i.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function c(i) {
      if (v.call(i, "key")) {
        var g = Object.getOwnPropertyDescriptor(i, "key").get;
        if (g && g.isReactWarning) return !1;
      }
      return i.key !== void 0;
    }
    function d(i, g) {
      function C() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          g
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(i, "key", {
        get: C,
        configurable: !0
      });
    }
    function p() {
      var i = n(this.type);
      return Z[i] || (Z[i] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), i = this.props.ref, i !== void 0 ? i : null;
    }
    function f(i, g, C, y, te, N, ue, ge) {
      return C = N.ref, i = {
        $$typeof: w,
        type: i,
        key: g,
        props: N,
        _owner: te
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(i, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(i, "ref", { enumerable: !1, value: null }), i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(i, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(i, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ue
      }), Object.defineProperty(i, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ge
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    }
    function b(i, g, C, y, te, N, ue, ge) {
      var L = g.children;
      if (L !== void 0)
        if (y)
          if (I(L)) {
            for (y = 0; y < L.length; y++)
              E(L[y]);
            Object.freeze && Object.freeze(L);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else E(L);
      if (v.call(g, "key")) {
        L = n(i);
        var de = Object.keys(g).filter(function(Pe) {
          return Pe !== "key";
        });
        y = 0 < de.length ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}", ee[L + y] || (de = 0 < de.length ? "{" + de.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          y,
          L,
          de,
          L
        ), ee[L + y] = !0);
      }
      if (L = null, C !== void 0 && (s(C), L = "" + C), c(g) && (s(g.key), L = "" + g.key), "key" in g) {
        C = {};
        for (var he in g)
          he !== "key" && (C[he] = g[he]);
      } else C = g;
      return L && d(
        C,
        typeof i == "function" ? i.displayName || i.name || "Unknown" : i
      ), f(
        i,
        L,
        N,
        te,
        l(),
        C,
        ue,
        ge
      );
    }
    function E(i) {
      typeof i == "object" && i !== null && i.$$typeof === w && i._store && (i._store.validated = 1);
    }
    var k = xn, w = Symbol.for("react.transitional.element"), H = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), xe = Symbol.for("react.profiler"), ce = Symbol.for("react.consumer"), re = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), _ = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, v = Object.prototype.hasOwnProperty, I = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      "react-stack-bottom-frame": function(i) {
        return i();
      }
    };
    var J, Z = {}, oe = k["react-stack-bottom-frame"].bind(
      k,
      a
    )(), ae = D(r(a)), ee = {};
    ke.Fragment = A, ke.jsx = function(i, g, C, y, te) {
      var N = 1e4 > _.recentlyCreatedOwnerStacks++;
      return b(
        i,
        g,
        C,
        !1,
        y,
        te,
        N ? Error("react-stack-top-frame") : oe,
        N ? D(r(i)) : ae
      );
    }, ke.jsxs = function(i, g, C, y, te) {
      var N = 1e4 > _.recentlyCreatedOwnerStacks++;
      return b(
        i,
        g,
        C,
        !0,
        y,
        te,
        N ? Error("react-stack-top-frame") : oe,
        N ? D(r(i)) : ae
      );
    };
  }()), ke;
}
var Wt;
function _n() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? Ye.exports = Tn() : Ye.exports = yn()), Ye.exports;
}
var o = _n();
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nn = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), An = (n) => n.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, s, r) => r ? r.toUpperCase() : s.toLowerCase()
), Gt = (n) => {
  const t = An(n);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, tn = (...n) => n.filter((t, s, r) => !!t && t.trim() !== "" && r.indexOf(t) === s).join(" ").trim(), wn = (n) => {
  for (const t in n)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rn = {
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
const Cn = en(
  ({
    color: n = "currentColor",
    size: t = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: r,
    className: l = "",
    children: a,
    iconNode: c,
    ...d
  }, p) => gt(
    "svg",
    {
      ref: p,
      ...Rn,
      width: t,
      height: t,
      stroke: n,
      strokeWidth: r ? Number(s) * 24 / Number(t) : s,
      className: tn("lucide", l),
      ...!a && !wn(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...c.map(([f, b]) => gt(f, b)),
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
const z = (n, t) => {
  const s = en(
    ({ className: r, ...l }, a) => gt(Cn, {
      ref: a,
      iconNode: t,
      className: tn(
        `lucide-${Nn(Gt(n))}`,
        `lucide-${n}`,
        r
      ),
      ...l
    })
  );
  return s.displayName = Gt(n), s;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vn = [
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 18H5", key: "18s9l3" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Sn = z("align-center", vn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }]
], kn = z("align-justify", Ln);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const On = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Mn = z("align-left", On);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jn = [
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 18H7", key: "1ygte8" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], In = z("align-right", jn);
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
], Pn = z("bold", Dn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hn = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], nn = z("chevron-down", Hn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = [
  ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
  ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }]
], Fn = z("code", Un);
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
], Wn = z("image", zn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gn = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], $n = z("italic", Gn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], Bn = z("link", Yn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
], qn = z("list-ordered", Vn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xn = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], Jn = z("list", Xn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zn = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], Kn = z("strikethrough", Zn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qn = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], er = z("underline", Qn);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tr = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], nr = z("video", tr);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rr = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Tt = z("x", rr), Be = (n, t, s) => {
  const r = window.getSelection();
  if (!r || r.rangeCount === 0 || !t.current) return;
  const l = r.getRangeAt(0);
  if (l.toString())
    try {
      const a = () => {
        let f = l.commonAncestorContainer;
        for (; f && f !== t.current; ) {
          if (f.nodeType === Node.ELEMENT_NODE) {
            const b = f;
            if (b.tagName.toLowerCase() === n.toLowerCase())
              return { isFormatted: !0, formatElement: b };
          }
          f = f.parentNode;
        }
        return { isFormatted: !1, formatElement: null };
      }, { isFormatted: c, formatElement: d } = a();
      let p = null;
      if (c && d) {
        const f = d.parentNode, b = document.createTextNode(d.textContent || "");
        f?.replaceChild(b, d), f?.normalize();
        const E = document.createRange();
        E.selectNodeContents(b), r.removeAllRanges(), r.addRange(E);
      } else {
        p = document.createElement(n);
        try {
          l.surroundContents(p);
          const f = document.createRange();
          f.selectNodeContents(p), r.removeAllRanges(), r.addRange(f);
        } catch {
          const b = l.extractContents();
          p.appendChild(b), l.insertNode(p);
          const E = document.createRange();
          E.selectNodeContents(p), r.removeAllRanges(), r.addRange(E);
        }
      }
      s();
    } catch (a) {
      console.warn("Error applying format:", a), s();
    }
}, rn = ({
  editorRef: n,
  activeFormats: t,
  updateActiveFormats: s,
  getButtonClass: r
}) => /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => Be("strong", n, s),
      className: r(t.bold),
      title: "Bold",
      children: /* @__PURE__ */ o.jsx(Pn, { size: 18 })
    }
  ),
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => Be("em", n, s),
      className: r(t.italic),
      title: "Italic",
      children: /* @__PURE__ */ o.jsx($n, { size: 18 })
    }
  ),
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => Be("u", n, s),
      className: r(t.underline),
      title: "Underline",
      children: /* @__PURE__ */ o.jsx(er, { size: 18 })
    }
  ),
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => Be("s", n, s),
      className: r(t.strikethrough),
      title: "Strikethrough",
      children: /* @__PURE__ */ o.jsx(Kn, { size: 18 })
    }
  )
] }), Ve = (n, t) => {
  const s = window.getSelection();
  if (!s || s.rangeCount === 0) return;
  let l = s.getRangeAt(0).commonAncestorContainer;
  for (; l && l.nodeType !== Node.ELEMENT_NODE; )
    l = l.parentNode;
  if (l && l.nodeType === Node.ELEMENT_NODE) {
    const a = l;
    a.style.textAlign = n === "left" ? "" : n, t();
  }
}, on = ({
  activeFormats: n,
  updateActiveFormats: t,
  getButtonClass: s
}) => /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => Ve("left", t),
      className: s(n.alignLeft),
      title: "Align Left",
      children: /* @__PURE__ */ o.jsx(Mn, { size: 18 })
    }
  ),
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => Ve("center", t),
      className: s(n.alignCenter),
      title: "Align Center",
      children: /* @__PURE__ */ o.jsx(Sn, { size: 18 })
    }
  ),
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => Ve("right", t),
      className: s(n.alignRight),
      title: "Align Right",
      children: /* @__PURE__ */ o.jsx(In, { size: 18 })
    }
  ),
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => Ve("justify", t),
      className: s(n.alignJustify),
      title: "Justify",
      children: /* @__PURE__ */ o.jsx(kn, { size: 18 })
    }
  )
] }), $t = (n, t, s) => {
  const r = window.getSelection();
  if (!r || r.rangeCount === 0 || !t.current) return;
  const l = r.getRangeAt(0);
  let a = l.commonAncestorContainer;
  a.nodeType === Node.TEXT_NODE && (a = a.parentNode);
  let c = a;
  for (; c && c !== t.current && !["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL"].includes(
    c.tagName
  ); )
    c = c.parentElement;
  if (!c || c === t.current) {
    const d = document.createElement(n), p = document.createElement("li");
    p.textContent = r.toString() || "List item", d.appendChild(p), l.deleteContents(), l.insertNode(d);
    const f = document.createRange();
    f.setStart(p, 0), f.setEnd(p, p.childNodes.length), r.removeAllRanges(), r.addRange(f);
  } else if (c.tagName === "LI") {
    const d = c.parentElement;
    if (d.tagName.toLowerCase() === n) {
      const p = document.createElement("p");
      p.innerHTML = c.innerHTML, d.parentNode?.replaceChild(p, d);
    } else {
      const p = document.createElement(n);
      p.innerHTML = d.innerHTML, d.parentNode?.replaceChild(p, d);
    }
  } else {
    const d = document.createElement(n), p = document.createElement("li");
    p.innerHTML = c.innerHTML, d.appendChild(p), c.parentNode?.replaceChild(d, c);
  }
  s();
}, an = ({
  editorRef: n,
  activeFormats: t,
  updateActiveFormats: s,
  getButtonClass: r
}) => /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => {
        n?.current && $t("ul", n, s);
      },
      className: r(t.bulletList),
      title: "Bullet List",
      children: /* @__PURE__ */ o.jsx(Jn, { size: 18 })
    }
  ),
  /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => {
        n?.current && $t("ol", n, s);
      },
      className: r(t.numberedList),
      title: "Numbered List",
      children: /* @__PURE__ */ o.jsx(qn, { size: 18 })
    }
  )
] }), or = ({
  editorRef: n,
  activeFormats: t,
  currentTextFormat: s,
  updateActiveFormats: r,
  applyTextFormat: l
}) => {
  const [a, c] = P({ top: 0, left: 0 }), [d, p] = P(!1), [f, b] = P(!1), E = xt(null), k = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" }
  ];
  Re(() => {
    const A = () => {
      const X = window.getSelection();
      if (!X || X.rangeCount === 0 || X.isCollapsed || !n.current || !n.current.contains(X.anchorNode)) {
        p(!1), b(!1);
        return;
      }
      const ce = X.getRangeAt(0).getBoundingClientRect(), re = E.current?.offsetHeight || 50, R = ce.top - re - 45, K = ce.left + ce.width / 2;
      c({ top: R, left: K }), p(!0);
    };
    return document.addEventListener("selectionchange", A), window.addEventListener("scroll", A, !0), window.addEventListener("resize", A), () => {
      document.removeEventListener("selectionchange", A), window.removeEventListener("scroll", A, !0), window.removeEventListener("resize", A);
    };
  }, [n]);
  const w = (A) => `p-1.5 rounded transition-colors ${A ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, H = (A) => {
    l(A), b(!1);
  };
  return d ? /* @__PURE__ */ o.jsxs(
    "div",
    {
      ref: E,
      className: "fixed z-50 flex items-center gap-1 p-1 bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in zoom-in-95 duration-200",
      style: {
        top: `${a.top}px`,
        left: `${a.left}px`,
        transform: "translateX(-50%)"
      },
      onMouseDown: (A) => {
        A.preventDefault();
      },
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ o.jsxs(
            "button",
            {
              onClick: () => b(!f),
              className: "flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between",
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "truncate max-w-[80px]", children: k.find((A) => A.value === s)?.label || "Paragraph" }),
                /* @__PURE__ */ o.jsx(nn, { size: 12 })
              ]
            }
          ),
          f && /* @__PURE__ */ o.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[140px] max-h-[300px] overflow-y-auto", children: k.map((A) => /* @__PURE__ */ o.jsx(
            "button",
            {
              onClick: () => H(A.tag),
              className: `w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${s === A.value ? "bg-blue-50 text-blue-600" : "text-gray-700"}`,
              children: A.label
            },
            A.value
          )) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ o.jsx(
          rn,
          {
            editorRef: n,
            activeFormats: t,
            updateActiveFormats: r,
            getButtonClass: w
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ o.jsx(
          an,
          {
            editorRef: n,
            activeFormats: {
              bulletList: t.bulletList,
              numberedList: t.numberedList
            },
            updateActiveFormats: r,
            getButtonClass: w
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ o.jsx(
          on,
          {
            activeFormats: {
              alignLeft: t.alignLeft,
              alignCenter: t.alignCenter,
              alignRight: t.alignRight,
              alignJustify: t.alignJustify
            },
            updateActiveFormats: r,
            getButtonClass: w
          }
        )
      ]
    }
  ) : null;
};
let Ce = null;
const lt = () => {
  const n = window.getSelection();
  n && n.rangeCount > 0 && (Ce = n.getRangeAt(0).cloneRange());
}, yt = () => {
  if (Ce) {
    const n = window.getSelection();
    n?.removeAllRanges(), n?.addRange(Ce);
  }
}, it = () => {
  const n = window.getSelection();
  if (!n || n.rangeCount === 0) return null;
  let s = n.getRangeAt(0).commonAncestorContainer;
  s.nodeType === Node.TEXT_NODE && (s = s.parentNode);
  let r = s;
  for (; r && r !== document.body; ) {
    if (r.nodeType === Node.ELEMENT_NODE) {
      const l = r, a = l.tagName.toLowerCase();
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
    r = r.parentNode;
  }
  return null;
}, ar = (n, t) => {
  yt();
  const s = window.getSelection();
  if (!s || s.rangeCount === 0) {
    const c = document.querySelector(
      '[contenteditable="true"]'
    );
    if (c) {
      const d = document.createElement("a");
      d.href = n, d.textContent = t || n, d.target = "_blank", d.rel = "noopener noreferrer", d.className = "text-blue-600 underline hover:text-blue-800", c.appendChild(d);
      const p = document.createTextNode(" ");
      c.appendChild(p);
      const f = document.createRange();
      f.setStartAfter(p), f.collapse(!0), s && (s.removeAllRanges(), s.addRange(f));
    }
    return;
  }
  const r = s.getRangeAt(0);
  let l = null, a = r.commonAncestorContainer;
  for (; a && a !== document.body; ) {
    if (a.nodeType === Node.ELEMENT_NODE && a.tagName.toLowerCase() === "a") {
      l = a;
      break;
    }
    a = a.parentNode;
  }
  if (l)
    l.setAttribute("href", n), l.textContent = t || n;
  else {
    const c = document.createElement("a");
    c.href = n, c.textContent = t || n, c.target = "_blank", c.rel = "noopener noreferrer", c.className = "text-blue-600 underline hover:text-blue-800", r.deleteContents(), r.insertNode(c);
    const d = document.createRange();
    d.setStartAfter(c), d.collapse(!0), s.removeAllRanges(), s.addRange(d);
  }
  Ce = null;
}, sr = (n, t = "Inserted image") => {
  yt();
  const s = window.getSelection();
  if (!s || s.rangeCount === 0) {
    const c = document.querySelector(
      '[contenteditable="true"]'
    );
    if (c) {
      const d = document.createElement("img");
      d.src = n, d.alt = t, d.className = "max-w-full h-auto rounded shadow-sm", c.appendChild(d);
      const p = document.createElement("br");
      c.appendChild(p);
      const f = document.createRange();
      f.setStartAfter(p), f.collapse(!0), s && (s.removeAllRanges(), s.addRange(f));
    }
    return;
  }
  const r = s.getRangeAt(0);
  let l = null, a = r.commonAncestorContainer;
  for (; a && a !== document.body; ) {
    if (a.nodeType === Node.ELEMENT_NODE && a.tagName.toLowerCase() === "img") {
      l = a;
      break;
    }
    a = a.parentNode;
  }
  if (l)
    l.setAttribute("src", n), l.setAttribute("alt", t);
  else {
    const c = document.createElement("img");
    c.src = n, c.alt = t, c.className = "max-w-full h-auto rounded shadow-sm", r.deleteContents(), r.insertNode(c);
    const d = document.createRange();
    d.setStartAfter(c), d.collapse(!0), s.removeAllRanges(), s.addRange(d);
  }
  Ce = null;
}, lr = (n) => {
  yt();
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) {
    const a = document.querySelector(
      '[contenteditable="true"]'
    );
    if (a) {
      const c = document.createElement("iframe");
      c.src = n, c.width = "560", c.height = "315", c.className = "max-w-full rounded shadow-sm", c.setAttribute("frameborder", "0"), c.setAttribute("allowfullscreen", "true"), c.setAttribute(
        "sandbox",
        "allow-scripts allow-same-origin allow-presentation"
      ), a.appendChild(c);
      const d = document.createElement("br");
      a.appendChild(d);
      const p = document.createRange();
      p.setStartAfter(d), p.collapse(!0), t && (t.removeAllRanges(), t.addRange(p));
    }
    return;
  }
  const s = t.getRangeAt(0);
  let r = null, l = s.commonAncestorContainer;
  for (; l && l !== document.body; ) {
    if (l.nodeType === Node.ELEMENT_NODE && l.tagName.toLowerCase() === "iframe") {
      r = l;
      break;
    }
    l = l.parentNode;
  }
  if (r)
    r.setAttribute("src", n);
  else {
    const a = document.createElement("iframe");
    a.src = n, a.width = "560", a.height = "315", a.className = "max-w-full rounded shadow-sm", a.setAttribute("frameborder", "0"), a.setAttribute("allowfullscreen", "true"), a.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-presentation"
    ), s.deleteContents(), s.insertNode(a);
    const c = document.createRange();
    c.setStartAfter(a), c.collapse(!0), t.removeAllRanges(), t.addRange(c);
  }
  Ce = null;
}, ir = ({
  isOpen: n,
  onClose: t,
  onInsert: s,
  initialData: r
}) => {
  const [l, a] = P(""), [c, d] = P("");
  Re(() => {
    n && r ? (a(r.url), d(r.text)) : n && !r && (a(""), d(""));
  }, [n, r]);
  const p = (f) => {
    f.preventDefault(), l.trim() && (s(l.trim(), c.trim()), a(""), d(""), t());
  };
  return n ? /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "text-lg font-semibold", children: r ? "Edit Link" : "Insert Link" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: t,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ o.jsx(Tt, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("form", { onSubmit: p, children: [
      /* @__PURE__ */ o.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ o.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "URL" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (f) => a(f.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "https://example.com",
            required: !0,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ o.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Link Text (optional)" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "text",
            value: c,
            onChange: (f) => d(f.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Link text"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: t,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ o.jsx(
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
}, cr = ({
  isOpen: n,
  onClose: t,
  onInsert: s,
  initialData: r
}) => {
  const [l, a] = P(""), [c, d] = P(""), p = xt(null);
  Re(() => {
    n && r ? (a(r.alt), d(r.src)) : n && !r && (a(""), d(""));
  }, [n, r]);
  const f = (k) => {
    const w = k.target.files?.[0];
    if (w) {
      const H = new FileReader();
      H.onload = (A) => {
        const X = A.target?.result;
        s(X, l || w.name), a(""), d(""), t(), p.current && (p.current.value = "");
      }, H.readAsDataURL(w);
    }
  }, b = () => {
    r && c && (s(c, l), a(""), d(""), t());
  }, E = () => {
    p.current && p.current.click();
  };
  return n ? /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "text-lg font-semibold", children: r ? "Edit Image" : "Insert Image" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: t,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ o.jsx(Tt, { size: 20 })
        }
      )
    ] }),
    r && /* @__PURE__ */ o.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ o.jsx(
        "img",
        {
          src: c,
          alt: l,
          className: "max-w-full h-32 object-contain rounded border"
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          type: "button",
          onClick: E,
          className: "mt-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200",
          children: "Replace Image"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        ref: p,
        type: "file",
        accept: "image/*",
        onChange: f,
        className: "hidden"
      }
    ),
    !r && /* @__PURE__ */ o.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ o.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Select Image File" }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "file",
          accept: "image/*",
          onChange: f,
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ o.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Alt Text (optional)" }),
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          value: l,
          onChange: (k) => a(k.target.value),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          placeholder: "Image description",
          autoFocus: !!r
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: t,
          className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      r && /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: b,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
          children: "Update Image"
        }
      )
    ] })
  ] }) }) : null;
}, ur = ({
  isOpen: n,
  onClose: t,
  onInsert: s,
  initialData: r
}) => {
  const [l, a] = P(""), [c, d] = P("");
  Re(() => {
    n && r ? a(r.src) : n && !r && a(""), d("");
  }, [n, r]);
  const p = (b) => {
    const E = b.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
    );
    if (E)
      return `https://www.youtube.com/embed/${E[1]}`;
    const k = b.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return k ? `https://player.vimeo.com/video/${k[1]}` : b.includes("youtube.com/embed/") || b.includes("player.vimeo.com/video/") ? b : null;
  }, f = (b) => {
    if (b.preventDefault(), d(""), l.trim()) {
      const E = p(l.trim());
      E ? (s(E), a(""), t()) : d("Invalid URL. Only YouTube and Vimeo are supported for security.");
    }
  };
  return n ? /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ o.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ o.jsx("h3", { className: "text-lg font-semibold", children: r ? "Edit Video" : "Insert Video" }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: t,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ o.jsx(Tt, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("form", { onSubmit: f, children: [
      /* @__PURE__ */ o.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ o.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Video URL" }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "url",
            value: l,
            onChange: (b) => a(b.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "YouTube, Vimeo, or embed URL",
            required: !0,
            autoFocus: !0
          }
        ),
        c && /* @__PURE__ */ o.jsx("p", { className: "text-sm text-red-500 mt-1", children: c }),
        /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Supports YouTube, Vimeo, and direct embed URLs" })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            type: "button",
            onClick: t,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ o.jsx(
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
}, dr = () => {
  const [n, t] = P(!1), [s, r] = P(!1), [l, a] = P(!1), [c, d] = P(null), p = () => {
    lt();
    const E = it();
    d(E?.type === "link" ? E : null), t(!0);
  }, f = () => {
    lt();
    const E = it();
    d(E?.type === "image" ? E : null), r(!0);
  }, b = () => {
    lt();
    const E = it();
    d(E?.type === "video" ? E : null), a(!0);
  };
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: p,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Link",
          children: /* @__PURE__ */ o.jsx(Bn, { size: 18 })
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: f,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Image",
          children: /* @__PURE__ */ o.jsx(Wn, { size: 18 })
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: b,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Video",
          children: /* @__PURE__ */ o.jsx(nr, { size: 18 })
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(
      ir,
      {
        isOpen: n,
        onClose: () => {
          t(!1), d(null);
        },
        onInsert: ar,
        initialData: c?.type === "link" ? {
          url: c.url,
          text: c.text
        } : null
      }
    ),
    /* @__PURE__ */ o.jsx(
      cr,
      {
        isOpen: s,
        onClose: () => {
          r(!1), d(null);
        },
        onInsert: sr,
        initialData: c?.type === "image" ? {
          src: c.src,
          alt: c.alt
        } : null
      }
    ),
    /* @__PURE__ */ o.jsx(
      ur,
      {
        isOpen: l,
        onClose: () => {
          a(!1), d(null);
        },
        onInsert: lr,
        initialData: c?.type === "video" ? {
          src: c.src
        } : null
      }
    )
  ] });
}, mr = ({
  config: n,
  activeFormats: t,
  currentTextFormat: s,
  updateActiveFormats: r,
  applyTextFormat: l,
  toggleCodeView: a,
  isCodeView: c,
  editorRef: d
}) => {
  const [p, f] = P(!1), b = (w) => `p-2 rounded transition-colors ${w ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, E = () => /* @__PURE__ */ o.jsx("div", { className: "w-px h-6 bg-gray-300 mx-1" }), k = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" }
  ];
  return /* @__PURE__ */ o.jsx("div", { className: "sticky top-0 z-40 w-full bg-white border-b border-gray-200 shadow-sm px-4 py-2 flex items-center justify-center", children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-1 max-w-5xl mx-auto w-full", children: [
    n.showTextFormat && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            onClick: () => f(!p),
            onBlur: () => setTimeout(() => f(!1), 200),
            className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors",
            children: [
              /* @__PURE__ */ o.jsx("span", { className: "font-medium", children: k.find((w) => w.value === s)?.label || "Paragraph" }),
              /* @__PURE__ */ o.jsx(nn, { size: 14, className: "text-gray-500" })
            ]
          }
        ),
        p && /* @__PURE__ */ o.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px] max-h-[300px] overflow-y-auto w-full", children: k.map((w) => /* @__PURE__ */ o.jsx(
          "button",
          {
            onMouseDown: (H) => {
              H.preventDefault(), l(w.tag);
            },
            className: `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${s === w.value ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`,
            children: w.label
          },
          w.value
        )) })
      ] }),
      /* @__PURE__ */ o.jsx(E, {})
    ] }),
    n.showInlineFormat && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        rn,
        {
          editorRef: d,
          activeFormats: {
            bold: t.bold,
            italic: t.italic,
            underline: t.underline,
            strikethrough: t.strikethrough
          },
          updateActiveFormats: r,
          getButtonClass: b
        }
      ),
      /* @__PURE__ */ o.jsx(E, {})
    ] }),
    n.showAlignment && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        on,
        {
          activeFormats: {
            alignLeft: t.alignLeft,
            alignCenter: t.alignCenter,
            alignRight: t.alignRight,
            alignJustify: t.alignJustify
          },
          updateActiveFormats: r,
          getButtonClass: b
        }
      ),
      /* @__PURE__ */ o.jsx(E, {})
    ] }),
    n.showList && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        an,
        {
          editorRef: d,
          activeFormats: {
            bulletList: t.bulletList,
            numberedList: t.numberedList
          },
          updateActiveFormats: r,
          getButtonClass: b
        }
      ),
      /* @__PURE__ */ o.jsx(E, {})
    ] }),
    n.showInsert && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(dr, {}),
      /* @__PURE__ */ o.jsx(E, {})
    ] }),
    n.showCodeView && /* @__PURE__ */ o.jsx(
      "button",
      {
        onClick: a,
        className: b(c),
        title: c ? "Switch to Visual View" : "Switch to Code View",
        children: /* @__PURE__ */ o.jsx(Fn, { size: 18 })
      }
    )
  ] }) });
};
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: sn,
  setPrototypeOf: Yt,
  isFrozen: fr,
  getPrototypeOf: pr,
  getOwnPropertyDescriptor: gr
} = Object;
let {
  freeze: Y,
  seal: Q,
  create: ht
} = Object, {
  apply: bt,
  construct: Et
} = typeof Reflect < "u" && Reflect;
Y || (Y = function(t) {
  return t;
});
Q || (Q = function(t) {
  return t;
});
bt || (bt = function(t, s) {
  for (var r = arguments.length, l = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
    l[a - 2] = arguments[a];
  return t.apply(s, l);
});
Et || (Et = function(t) {
  for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
    r[l - 1] = arguments[l];
  return new t(...r);
});
const qe = B(Array.prototype.forEach), hr = B(Array.prototype.lastIndexOf), Bt = B(Array.prototype.pop), Oe = B(Array.prototype.push), br = B(Array.prototype.splice), Je = B(String.prototype.toLowerCase), ct = B(String.prototype.toString), ut = B(String.prototype.match), Me = B(String.prototype.replace), Er = B(String.prototype.indexOf), xr = B(String.prototype.trim), ne = B(Object.prototype.hasOwnProperty), $ = B(RegExp.prototype.test), je = Tr(TypeError);
function B(n) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var s = arguments.length, r = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++)
      r[l - 1] = arguments[l];
    return bt(n, t, r);
  };
}
function Tr(n) {
  return function() {
    for (var t = arguments.length, s = new Array(t), r = 0; r < t; r++)
      s[r] = arguments[r];
    return Et(n, s);
  };
}
function x(n, t) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Je;
  Yt && Yt(n, null);
  let r = t.length;
  for (; r--; ) {
    let l = t[r];
    if (typeof l == "string") {
      const a = s(l);
      a !== l && (fr(t) || (t[r] = a), l = a);
    }
    n[l] = !0;
  }
  return n;
}
function yr(n) {
  for (let t = 0; t < n.length; t++)
    ne(n, t) || (n[t] = null);
  return n;
}
function ie(n) {
  const t = ht(null);
  for (const [s, r] of sn(n))
    ne(n, s) && (Array.isArray(r) ? t[s] = yr(r) : r && typeof r == "object" && r.constructor === Object ? t[s] = ie(r) : t[s] = r);
  return t;
}
function Ie(n, t) {
  for (; n !== null; ) {
    const r = gr(n, t);
    if (r) {
      if (r.get)
        return B(r.get);
      if (typeof r.value == "function")
        return B(r.value);
    }
    n = pr(n);
  }
  function s() {
    return null;
  }
  return s;
}
const Vt = Y(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), dt = Y(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), mt = Y(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), _r = Y(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ft = Y(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Nr = Y(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qt = Y(["#text"]), Xt = Y(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), pt = Y(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Jt = Y(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Xe = Y(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ar = Q(/\{\{[\w\W]*|[\w\W]*\}\}/gm), wr = Q(/<%[\w\W]*|[\w\W]*%>/gm), Rr = Q(/\$\{[\w\W]*/gm), Cr = Q(/^data-[\-\w.\u00B7-\uFFFF]+$/), vr = Q(/^aria-[\-\w]+$/), ln = Q(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Sr = Q(/^(?:\w+script|data):/i), Lr = Q(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), cn = Q(/^html$/i), kr = Q(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Zt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: vr,
  ATTR_WHITESPACE: Lr,
  CUSTOM_ELEMENT: kr,
  DATA_ATTR: Cr,
  DOCTYPE_NAME: cn,
  ERB_EXPR: wr,
  IS_ALLOWED_URI: ln,
  IS_SCRIPT_OR_DATA: Sr,
  MUSTACHE_EXPR: Ar,
  TMPLIT_EXPR: Rr
});
const De = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Or = function() {
  return typeof window > "u" ? null : window;
}, Mr = function(t, s) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let r = null;
  const l = "data-tt-policy-suffix";
  s && s.hasAttribute(l) && (r = s.getAttribute(l));
  const a = "dompurify" + (r ? "#" + r : "");
  try {
    return t.createPolicy(a, {
      createHTML(c) {
        return c;
      },
      createScriptURL(c) {
        return c;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + a + " could not be created."), null;
  }
}, Kt = function() {
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
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Or();
  const t = (h) => un(h);
  if (t.version = "3.3.1", t.removed = [], !n || !n.document || n.document.nodeType !== De.document || !n.Element)
    return t.isSupported = !1, t;
  let {
    document: s
  } = n;
  const r = s, l = r.currentScript, {
    DocumentFragment: a,
    HTMLTemplateElement: c,
    Node: d,
    Element: p,
    NodeFilter: f,
    NamedNodeMap: b = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: k,
    trustedTypes: w
  } = n, H = p.prototype, A = Ie(H, "cloneNode"), X = Ie(H, "remove"), xe = Ie(H, "nextSibling"), ce = Ie(H, "childNodes"), re = Ie(H, "parentNode");
  if (typeof c == "function") {
    const h = s.createElement("template");
    h.content && h.content.ownerDocument && (s = h.content.ownerDocument);
  }
  let R, K = "";
  const {
    implementation: T,
    createNodeIterator: V,
    createDocumentFragment: O,
    getElementsByTagName: W
  } = s, {
    importNode: G
  } = r;
  let _ = Kt();
  t.isSupported = typeof sn == "function" && typeof re == "function" && T && T.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: v,
    ERB_EXPR: I,
    TMPLIT_EXPR: D,
    DATA_ATTR: J,
    ARIA_ATTR: Z,
    IS_SCRIPT_OR_DATA: oe,
    ATTR_WHITESPACE: ae,
    CUSTOM_ELEMENT: ee
  } = Zt;
  let {
    IS_ALLOWED_URI: i
  } = Zt, g = null;
  const C = x({}, [...Vt, ...dt, ...mt, ...ft, ...qt]);
  let y = null;
  const te = x({}, [...Xt, ...pt, ...Jt, ...Xe]);
  let N = Object.seal(ht(null, {
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
  })), ue = null, ge = null;
  const L = Object.seal(ht(null, {
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
  let de = !0, he = !0, Pe = !1, _t = !0, Te = !1, He = !0, be = !1, Ze = !1, Ke = !1, ye = !1, Ue = !1, Fe = !1, Nt = !0, At = !1;
  const dn = "user-content-";
  let Qe = !0, ve = !1, _e = {}, se = null;
  const et = x({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let wt = null;
  const Rt = x({}, ["audio", "video", "img", "source", "image", "track"]);
  let tt = null;
  const Ct = x({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ze = "http://www.w3.org/1998/Math/MathML", We = "http://www.w3.org/2000/svg", me = "http://www.w3.org/1999/xhtml";
  let Ne = me, nt = !1, rt = null;
  const mn = x({}, [ze, We, me], ct);
  let Ge = x({}, ["mi", "mo", "mn", "ms", "mtext"]), $e = x({}, ["annotation-xml"]);
  const fn = x({}, ["title", "style", "font", "a", "script"]);
  let Se = null;
  const pn = ["application/xhtml+xml", "text/html"], gn = "text/html";
  let j = null, Ae = null;
  const hn = s.createElement("form"), vt = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, ot = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Ae && Ae === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = ie(e), Se = // eslint-disable-next-line unicorn/prefer-includes
      pn.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? gn : e.PARSER_MEDIA_TYPE, j = Se === "application/xhtml+xml" ? ct : Je, g = ne(e, "ALLOWED_TAGS") ? x({}, e.ALLOWED_TAGS, j) : C, y = ne(e, "ALLOWED_ATTR") ? x({}, e.ALLOWED_ATTR, j) : te, rt = ne(e, "ALLOWED_NAMESPACES") ? x({}, e.ALLOWED_NAMESPACES, ct) : mn, tt = ne(e, "ADD_URI_SAFE_ATTR") ? x(ie(Ct), e.ADD_URI_SAFE_ATTR, j) : Ct, wt = ne(e, "ADD_DATA_URI_TAGS") ? x(ie(Rt), e.ADD_DATA_URI_TAGS, j) : Rt, se = ne(e, "FORBID_CONTENTS") ? x({}, e.FORBID_CONTENTS, j) : et, ue = ne(e, "FORBID_TAGS") ? x({}, e.FORBID_TAGS, j) : ie({}), ge = ne(e, "FORBID_ATTR") ? x({}, e.FORBID_ATTR, j) : ie({}), _e = ne(e, "USE_PROFILES") ? e.USE_PROFILES : !1, de = e.ALLOW_ARIA_ATTR !== !1, he = e.ALLOW_DATA_ATTR !== !1, Pe = e.ALLOW_UNKNOWN_PROTOCOLS || !1, _t = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Te = e.SAFE_FOR_TEMPLATES || !1, He = e.SAFE_FOR_XML !== !1, be = e.WHOLE_DOCUMENT || !1, ye = e.RETURN_DOM || !1, Ue = e.RETURN_DOM_FRAGMENT || !1, Fe = e.RETURN_TRUSTED_TYPE || !1, Ke = e.FORCE_BODY || !1, Nt = e.SANITIZE_DOM !== !1, At = e.SANITIZE_NAMED_PROPS || !1, Qe = e.KEEP_CONTENT !== !1, ve = e.IN_PLACE || !1, i = e.ALLOWED_URI_REGEXP || ln, Ne = e.NAMESPACE || me, Ge = e.MATHML_TEXT_INTEGRATION_POINTS || Ge, $e = e.HTML_INTEGRATION_POINTS || $e, N = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && vt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (N.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && vt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (N.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (N.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Te && (he = !1), Ue && (ye = !0), _e && (g = x({}, qt), y = [], _e.html === !0 && (x(g, Vt), x(y, Xt)), _e.svg === !0 && (x(g, dt), x(y, pt), x(y, Xe)), _e.svgFilters === !0 && (x(g, mt), x(y, pt), x(y, Xe)), _e.mathMl === !0 && (x(g, ft), x(y, Jt), x(y, Xe))), e.ADD_TAGS && (typeof e.ADD_TAGS == "function" ? L.tagCheck = e.ADD_TAGS : (g === C && (g = ie(g)), x(g, e.ADD_TAGS, j))), e.ADD_ATTR && (typeof e.ADD_ATTR == "function" ? L.attributeCheck = e.ADD_ATTR : (y === te && (y = ie(y)), x(y, e.ADD_ATTR, j))), e.ADD_URI_SAFE_ATTR && x(tt, e.ADD_URI_SAFE_ATTR, j), e.FORBID_CONTENTS && (se === et && (se = ie(se)), x(se, e.FORBID_CONTENTS, j)), e.ADD_FORBID_CONTENTS && (se === et && (se = ie(se)), x(se, e.ADD_FORBID_CONTENTS, j)), Qe && (g["#text"] = !0), be && x(g, ["html", "head", "body"]), g.table && (x(g, ["tbody"]), delete ue.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw je('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        R = e.TRUSTED_TYPES_POLICY, K = R.createHTML("");
      } else
        R === void 0 && (R = Mr(w, l)), R !== null && typeof K == "string" && (K = R.createHTML(""));
      Y && Y(e), Ae = e;
    }
  }, St = x({}, [...dt, ...mt, ..._r]), Lt = x({}, [...ft, ...Nr]), bn = function(e) {
    let u = re(e);
    (!u || !u.tagName) && (u = {
      namespaceURI: Ne,
      tagName: "template"
    });
    const m = Je(e.tagName), S = Je(u.tagName);
    return rt[e.namespaceURI] ? e.namespaceURI === We ? u.namespaceURI === me ? m === "svg" : u.namespaceURI === ze ? m === "svg" && (S === "annotation-xml" || Ge[S]) : !!St[m] : e.namespaceURI === ze ? u.namespaceURI === me ? m === "math" : u.namespaceURI === We ? m === "math" && $e[S] : !!Lt[m] : e.namespaceURI === me ? u.namespaceURI === We && !$e[S] || u.namespaceURI === ze && !Ge[S] ? !1 : !Lt[m] && (fn[m] || !St[m]) : !!(Se === "application/xhtml+xml" && rt[e.namespaceURI]) : !1;
  }, le = function(e) {
    Oe(t.removed, {
      element: e
    });
    try {
      re(e).removeChild(e);
    } catch {
      X(e);
    }
  }, Ee = function(e, u) {
    try {
      Oe(t.removed, {
        attribute: u.getAttributeNode(e),
        from: u
      });
    } catch {
      Oe(t.removed, {
        attribute: null,
        from: u
      });
    }
    if (u.removeAttribute(e), e === "is")
      if (ye || Ue)
        try {
          le(u);
        } catch {
        }
      else
        try {
          u.setAttribute(e, "");
        } catch {
        }
  }, kt = function(e) {
    let u = null, m = null;
    if (Ke)
      e = "<remove></remove>" + e;
    else {
      const M = ut(e, /^[\r\n\t ]+/);
      m = M && M[0];
    }
    Se === "application/xhtml+xml" && Ne === me && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    const S = R ? R.createHTML(e) : e;
    if (Ne === me)
      try {
        u = new k().parseFromString(S, Se);
      } catch {
      }
    if (!u || !u.documentElement) {
      u = T.createDocument(Ne, "template", null);
      try {
        u.documentElement.innerHTML = nt ? K : S;
      } catch {
      }
    }
    const F = u.body || u.documentElement;
    return e && m && F.insertBefore(s.createTextNode(m), F.childNodes[0] || null), Ne === me ? W.call(u, be ? "html" : "body")[0] : be ? u.documentElement : F;
  }, Ot = function(e) {
    return V.call(
      e.ownerDocument || e,
      e,
      // eslint-disable-next-line no-bitwise
      f.SHOW_ELEMENT | f.SHOW_COMMENT | f.SHOW_TEXT | f.SHOW_PROCESSING_INSTRUCTION | f.SHOW_CDATA_SECTION,
      null
    );
  }, at = function(e) {
    return e instanceof E && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof b) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, Mt = function(e) {
    return typeof d == "function" && e instanceof d;
  };
  function fe(h, e, u) {
    qe(h, (m) => {
      m.call(t, e, u, Ae);
    });
  }
  const jt = function(e) {
    let u = null;
    if (fe(_.beforeSanitizeElements, e, null), at(e))
      return le(e), !0;
    const m = j(e.nodeName);
    if (fe(_.uponSanitizeElement, e, {
      tagName: m,
      allowedTags: g
    }), He && e.hasChildNodes() && !Mt(e.firstElementChild) && $(/<[/\w!]/g, e.innerHTML) && $(/<[/\w!]/g, e.textContent) || e.nodeType === De.progressingInstruction || He && e.nodeType === De.comment && $(/<[/\w]/g, e.data))
      return le(e), !0;
    if (!(L.tagCheck instanceof Function && L.tagCheck(m)) && (!g[m] || ue[m])) {
      if (!ue[m] && Dt(m) && (N.tagNameCheck instanceof RegExp && $(N.tagNameCheck, m) || N.tagNameCheck instanceof Function && N.tagNameCheck(m)))
        return !1;
      if (Qe && !se[m]) {
        const S = re(e) || e.parentNode, F = ce(e) || e.childNodes;
        if (F && S) {
          const M = F.length;
          for (let q = M - 1; q >= 0; --q) {
            const pe = A(F[q], !0);
            pe.__removalCount = (e.__removalCount || 0) + 1, S.insertBefore(pe, xe(e));
          }
        }
      }
      return le(e), !0;
    }
    return e instanceof p && !bn(e) || (m === "noscript" || m === "noembed" || m === "noframes") && $(/<\/no(script|embed|frames)/i, e.innerHTML) ? (le(e), !0) : (Te && e.nodeType === De.text && (u = e.textContent, qe([v, I, D], (S) => {
      u = Me(u, S, " ");
    }), e.textContent !== u && (Oe(t.removed, {
      element: e.cloneNode()
    }), e.textContent = u)), fe(_.afterSanitizeElements, e, null), !1);
  }, It = function(e, u, m) {
    if (Nt && (u === "id" || u === "name") && (m in s || m in hn))
      return !1;
    if (!(he && !ge[u] && $(J, u))) {
      if (!(de && $(Z, u))) {
        if (!(L.attributeCheck instanceof Function && L.attributeCheck(u, e))) {
          if (!y[u] || ge[u]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Dt(e) && (N.tagNameCheck instanceof RegExp && $(N.tagNameCheck, e) || N.tagNameCheck instanceof Function && N.tagNameCheck(e)) && (N.attributeNameCheck instanceof RegExp && $(N.attributeNameCheck, u) || N.attributeNameCheck instanceof Function && N.attributeNameCheck(u, e)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              u === "is" && N.allowCustomizedBuiltInElements && (N.tagNameCheck instanceof RegExp && $(N.tagNameCheck, m) || N.tagNameCheck instanceof Function && N.tagNameCheck(m)))
            ) return !1;
          } else if (!tt[u]) {
            if (!$(i, Me(m, ae, ""))) {
              if (!((u === "src" || u === "xlink:href" || u === "href") && e !== "script" && Er(m, "data:") === 0 && wt[e])) {
                if (!(Pe && !$(oe, Me(m, ae, "")))) {
                  if (m)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Dt = function(e) {
    return e !== "annotation-xml" && ut(e, ee);
  }, Pt = function(e) {
    fe(_.beforeSanitizeAttributes, e, null);
    const {
      attributes: u
    } = e;
    if (!u || at(e))
      return;
    const m = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: y,
      forceKeepAttr: void 0
    };
    let S = u.length;
    for (; S--; ) {
      const F = u[S], {
        name: M,
        namespaceURI: q,
        value: pe
      } = F, we = j(M), st = pe;
      let U = M === "value" ? st : xr(st);
      if (m.attrName = we, m.attrValue = U, m.keepAttr = !0, m.forceKeepAttr = void 0, fe(_.uponSanitizeAttribute, e, m), U = m.attrValue, At && (we === "id" || we === "name") && (Ee(M, e), U = dn + U), He && $(/((--!?|])>)|<\/(style|title|textarea)/i, U)) {
        Ee(M, e);
        continue;
      }
      if (we === "attributename" && ut(U, "href")) {
        Ee(M, e);
        continue;
      }
      if (m.forceKeepAttr)
        continue;
      if (!m.keepAttr) {
        Ee(M, e);
        continue;
      }
      if (!_t && $(/\/>/i, U)) {
        Ee(M, e);
        continue;
      }
      Te && qe([v, I, D], (Ut) => {
        U = Me(U, Ut, " ");
      });
      const Ht = j(e.nodeName);
      if (!It(Ht, we, U)) {
        Ee(M, e);
        continue;
      }
      if (R && typeof w == "object" && typeof w.getAttributeType == "function" && !q)
        switch (w.getAttributeType(Ht, we)) {
          case "TrustedHTML": {
            U = R.createHTML(U);
            break;
          }
          case "TrustedScriptURL": {
            U = R.createScriptURL(U);
            break;
          }
        }
      if (U !== st)
        try {
          q ? e.setAttributeNS(q, M, U) : e.setAttribute(M, U), at(e) ? le(e) : Bt(t.removed);
        } catch {
          Ee(M, e);
        }
    }
    fe(_.afterSanitizeAttributes, e, null);
  }, En = function h(e) {
    let u = null;
    const m = Ot(e);
    for (fe(_.beforeSanitizeShadowDOM, e, null); u = m.nextNode(); )
      fe(_.uponSanitizeShadowNode, u, null), jt(u), Pt(u), u.content instanceof a && h(u.content);
    fe(_.afterSanitizeShadowDOM, e, null);
  };
  return t.sanitize = function(h) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = null, m = null, S = null, F = null;
    if (nt = !h, nt && (h = "<!-->"), typeof h != "string" && !Mt(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw je("dirty is not a string, aborting");
      } else
        throw je("toString is not a function");
    if (!t.isSupported)
      return h;
    if (Ze || ot(e), t.removed = [], typeof h == "string" && (ve = !1), ve) {
      if (h.nodeName) {
        const pe = j(h.nodeName);
        if (!g[pe] || ue[pe])
          throw je("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof d)
      u = kt("<!---->"), m = u.ownerDocument.importNode(h, !0), m.nodeType === De.element && m.nodeName === "BODY" || m.nodeName === "HTML" ? u = m : u.appendChild(m);
    else {
      if (!ye && !Te && !be && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return R && Fe ? R.createHTML(h) : h;
      if (u = kt(h), !u)
        return ye ? null : Fe ? K : "";
    }
    u && Ke && le(u.firstChild);
    const M = Ot(ve ? h : u);
    for (; S = M.nextNode(); )
      jt(S), Pt(S), S.content instanceof a && En(S.content);
    if (ve)
      return h;
    if (ye) {
      if (Ue)
        for (F = O.call(u.ownerDocument); u.firstChild; )
          F.appendChild(u.firstChild);
      else
        F = u;
      return (y.shadowroot || y.shadowrootmode) && (F = G.call(r, F, !0)), F;
    }
    let q = be ? u.outerHTML : u.innerHTML;
    return be && g["!doctype"] && u.ownerDocument && u.ownerDocument.doctype && u.ownerDocument.doctype.name && $(cn, u.ownerDocument.doctype.name) && (q = "<!DOCTYPE " + u.ownerDocument.doctype.name + `>
` + q), Te && qe([v, I, D], (pe) => {
      q = Me(q, pe, " ");
    }), R && Fe ? R.createHTML(q) : q;
  }, t.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ot(h), Ze = !0;
  }, t.clearConfig = function() {
    Ae = null, Ze = !1;
  }, t.isValidAttribute = function(h, e, u) {
    Ae || ot({});
    const m = j(h), S = j(e);
    return It(m, S, u);
  }, t.addHook = function(h, e) {
    typeof e == "function" && Oe(_[h], e);
  }, t.removeHook = function(h, e) {
    if (e !== void 0) {
      const u = hr(_[h], e);
      return u === -1 ? void 0 : br(_[h], u, 1)[0];
    }
    return Bt(_[h]);
  }, t.removeHooks = function(h) {
    _[h] = [];
  }, t.removeAllHooks = function() {
    _ = Kt();
  }, t;
}
var Qt = un();
const jr = ({
  content: n = "",
  onChange: t,
  onBlur: s,
  onFocus: r,
  config: l = {
    showTextFormat: !0,
    showInlineFormat: !0,
    showAlignment: !0,
    showList: !0,
    showInsert: !0,
    showCodeView: !0
  }
}) => {
  const a = xt(null), [c, d] = P({
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
  }), [p, f] = P("p"), [b, E] = P(!1), [k, w] = P(n), H = (T) => {
    const V = window.getSelection();
    if (!V || V.rangeCount === 0) return;
    const O = V.getRangeAt(0);
    let W = O.commonAncestorContainer;
    W.nodeType === Node.TEXT_NODE && (W = W.parentNode);
    let G = null, _ = W;
    for (; _ && _ !== a.current; ) {
      if (_.nodeType === Node.ELEMENT_NODE) {
        const v = _, I = v.tagName.toLowerCase();
        if (["p", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(I)) {
          G = v;
          break;
        }
      }
      _ = _.parentNode;
    }
    if (G && G !== a.current) {
      const v = document.createElement(T);
      v.innerHTML = G.innerHTML, G.style.textAlign && (v.style.textAlign = G.style.textAlign), G.parentNode?.replaceChild(v, G), f(T);
      const I = document.createRange();
      I.selectNodeContents(v), V.removeAllRanges(), V.addRange(I);
    } else {
      const v = document.createElement(T);
      if (O.toString())
        try {
          O.surroundContents(v);
        } catch {
          const D = O.extractContents();
          v.appendChild(D), O.insertNode(v);
        }
      else {
        v.innerHTML = "<br>", O.insertNode(v);
        const I = document.createRange();
        I.setStart(v, 0), I.collapse(!0), V.removeAllRanges(), V.addRange(I);
      }
      f(T);
    }
    setTimeout(() => R(), 10);
  }, A = () => {
    if (a.current)
      if (b) {
        const T = Qt.sanitize(k);
        a.current.innerHTML = T, a.current.contentEditable = "true", E(!1);
      } else {
        const T = a.current.innerHTML;
        w(T), a.current.contentEditable = "false", a.current.textContent = T, E(!0);
      }
  }, X = () => {
    if (a.current && t) {
      const T = b ? a.current.textContent || "" : a.current.innerHTML;
      t(T);
    }
  }, xe = () => {
    if (b && a.current) {
      const T = a.current.textContent || "";
      w(T), t && t(T);
    }
  }, ce = () => {
    if (s && a.current) {
      const T = a.current.textContent || "";
      s(T);
    }
  }, re = () => {
    r && r();
  };
  Re(() => {
    if (a.current && n !== void 0) {
      const T = Qt.sanitize(n);
      b ? a.current.textContent = T : a.current.innerHTML = T, w(T);
    }
  }, [n, b]);
  const R = () => {
    const T = window.getSelection();
    if (!T || T.rangeCount === 0)
      return;
    let O = T.getRangeAt(0).commonAncestorContainer;
    O.nodeType === Node.TEXT_NODE && (O = O.parentNode);
    let W = O, G = "p";
    for (; W && W !== a.current; ) {
      if (["H1", "H2", "H3", "H4", "H5", "H6", "P"].includes(
        W.tagName
      )) {
        G = W.tagName.toLowerCase();
        break;
      }
      W = W.parentElement;
    }
    f(G);
    let _ = O, v = !1, I = !1;
    for (; _ && _ !== a.current; ) {
      if (_.tagName === "UL") {
        v = !0;
        break;
      } else if (_.tagName === "OL") {
        I = !0;
        break;
      }
      _ = _.parentElement;
    }
    const D = (ae) => {
      let ee = O;
      for (; ee && ee !== a.current; ) {
        if (ee.nodeType === Node.ELEMENT_NODE && ee.tagName.toLowerCase() === ae.toLowerCase())
          return !0;
        ee = ee.parentNode;
      }
      return !1;
    };
    let J = O;
    for (; J && J !== a.current; ) {
      if (J.nodeType === Node.ELEMENT_NODE) {
        const ae = J.tagName.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(ae)) {
          f(ae);
          break;
        }
      }
      J = J.parentNode;
    }
    (J === a.current || !J) && f("p");
    let Z = O;
    for (; Z && Z !== a.current && Z.nodeType !== Node.ELEMENT_NODE; )
      Z = Z.parentNode;
    const oe = Z && Z.nodeType === Node.ELEMENT_NODE ? Z.style.textAlign : "";
    d({
      bold: D("strong") || D("b"),
      italic: D("em") || D("i"),
      underline: D("u"),
      strikethrough: D("s") || D("strike") || D("del"),
      alignLeft: oe === "" || oe === "left",
      alignCenter: oe === "center",
      alignRight: oe === "right",
      alignJustify: oe === "justify",
      bulletList: v,
      numberedList: I
    });
  }, K = () => {
    const T = window.getSelection();
    if (T && T.rangeCount > 0) {
      const V = T.getRangeAt(0);
      a.current?.contains(V.commonAncestorContainer) && R();
    }
  };
  return Re(() => (document.addEventListener("selectionchange", K), () => {
    document.removeEventListener("selectionchange", K);
  }), []), /* @__PURE__ */ o.jsxs("div", { className: "teddy-editor w-full min-h-screen bg-gray-100 flex flex-col items-center pb-8 relative", children: [
    !b && /* @__PURE__ */ o.jsx(
      mr,
      {
        config: l,
        activeFormats: c,
        currentTextFormat: p,
        updateActiveFormats: R,
        applyTextFormat: H,
        toggleCodeView: A,
        isCodeView: b,
        editorRef: a
      }
    ),
    !b && /* @__PURE__ */ o.jsx(
      or,
      {
        editorRef: a,
        activeFormats: c,
        currentTextFormat: p,
        updateActiveFormats: R,
        applyTextFormat: H
      }
    ),
    /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: a,
        contentEditable: !b,
        className: `document-page outline-none focus:ring-0 ${b ? "font-mono text-sm bg-gray-50 whitespace-pre-wrap !p-8" : "prose prose-headings:mt-4 prose-headings:mb-2"}`,
        style: {
          whiteSpace: "pre-wrap",
          // marginTop: "2rem",
          // spacing from fixed header
          minHeight: "1000px"
          // Ensure visual resemblance to A4
        },
        onMouseUp: b ? void 0 : R,
        onKeyUp: b ? void 0 : R,
        onInput: b ? xe : X,
        onBlur: ce,
        onFocus: re
      }
    )
  ] });
};
function Dr() {
  return /* @__PURE__ */ o.jsx("div", { className: "max-w-[800px] mx-auto", children: /* @__PURE__ */ o.jsx(
    jr,
    {
      content: "<p>Initial content</p>",
      onChange: (n) => console.log("Content changed:", n),
      onBlur: (n) => console.log("Editor lost focus", n),
      onFocus: () => console.log("Editor gained focus")
    }
  ) });
}
export {
  Dr as default
};
