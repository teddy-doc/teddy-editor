import Li, { forwardRef as wn, createElement as zr, useState as se, useRef as q0, useEffect as t0, useCallback as lr } from "react";
var yt = { exports: {} }, Q0 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function Ii() {
  if (Aa) return Q0;
  Aa = 1;
  var r = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(a, n, i) {
    var l = null;
    if (i !== void 0 && (l = "" + i), n.key !== void 0 && (l = "" + n.key), "key" in n) {
      i = {};
      for (var u in n)
        u !== "key" && (i[u] = n[u]);
    } else i = n;
    return n = i.ref, {
      $$typeof: r,
      type: a,
      key: l,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return Q0.Fragment = e, Q0.jsx = t, Q0.jsxs = t, Q0;
}
var et = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ma;
function Oi() {
  return Ma || (Ma = 1, process.env.NODE_ENV !== "production" && function() {
    function r(M) {
      if (M == null) return null;
      if (typeof M == "function")
        return M.$$typeof === ze ? null : M.displayName || M.name || null;
      if (typeof M == "string") return M;
      switch (M) {
        case T:
          return "Fragment";
        case N:
          return "Profiler";
        case z:
          return "StrictMode";
        case U:
          return "Suspense";
        case Q:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof M == "object")
        switch (typeof M.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), M.$$typeof) {
          case A:
            return "Portal";
          case P:
            return (M.displayName || "Context") + ".Provider";
          case O:
            return (M._context.displayName || "Context") + ".Consumer";
          case j:
            var I = M.render;
            return M = M.displayName, M || (M = I.displayName || I.name || "", M = M !== "" ? "ForwardRef(" + M + ")" : "ForwardRef"), M;
          case ee:
            return I = M.displayName || null, I !== null ? I : r(M.type) || "Memo";
          case le:
            I = M._payload, M = M._init;
            try {
              return r(M(I));
            } catch {
            }
        }
      return null;
    }
    function e(M) {
      return "" + M;
    }
    function t(M) {
      try {
        e(M);
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var Y = I.error, X = typeof Symbol == "function" && Symbol.toStringTag && M[Symbol.toStringTag] || M.constructor.name || "Object";
        return Y.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), e(M);
      }
    }
    function a(M) {
      if (M === T) return "<>";
      if (typeof M == "object" && M !== null && M.$$typeof === le)
        return "<...>";
      try {
        var I = r(M);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var M = H.A;
      return M === null ? null : M.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function l(M) {
      if (V.call(M, "key")) {
        var I = Object.getOwnPropertyDescriptor(M, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return M.key !== void 0;
    }
    function u(M, I) {
      function Y() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(M, "key", {
        get: Y,
        configurable: !0
      });
    }
    function c() {
      var M = r(this.type);
      return me[M] || (me[M] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), M = this.props.ref, M !== void 0 ? M : null;
    }
    function d(M, I, Y, X, xe, K, Ve, He) {
      return Y = K.ref, M = {
        $$typeof: k,
        type: M,
        key: I,
        props: K,
        _owner: xe
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(M, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(M, "ref", { enumerable: !1, value: null }), M._store = {}, Object.defineProperty(M._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(M, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(M, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ve
      }), Object.defineProperty(M, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: He
      }), Object.freeze && (Object.freeze(M.props), Object.freeze(M)), M;
    }
    function g(M, I, Y, X, xe, K, Ve, He) {
      var oe = I.children;
      if (oe !== void 0)
        if (X)
          if (re(oe)) {
            for (X = 0; X < oe.length; X++)
              p(oe[X]);
            Object.freeze && Object.freeze(oe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(oe);
      if (V.call(I, "key")) {
        oe = r(M);
        var qe = Object.keys(I).filter(function(F0) {
          return F0 !== "key";
        });
        X = 0 < qe.length ? "{key: someKey, " + qe.join(": ..., ") + ": ...}" : "{key: someKey}", Ae[oe + X] || (qe = 0 < qe.length ? "{" + qe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          oe,
          qe,
          oe
        ), Ae[oe + X] = !0);
      }
      if (oe = null, Y !== void 0 && (t(Y), oe = "" + Y), l(I) && (t(I.key), oe = "" + I.key), "key" in I) {
        Y = {};
        for (var We in I)
          We !== "key" && (Y[We] = I[We]);
      } else Y = I;
      return oe && u(
        Y,
        typeof M == "function" ? M.displayName || M.name || "Unknown" : M
      ), d(
        M,
        oe,
        K,
        xe,
        n(),
        Y,
        Ve,
        He
      );
    }
    function p(M) {
      typeof M == "object" && M !== null && M.$$typeof === k && M._store && (M._store.validated = 1);
    }
    var x = Li, k = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), P = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), Q = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), ze = Symbol.for("react.client.reference"), H = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, re = Array.isArray, ae = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      "react-stack-bottom-frame": function(M) {
        return M();
      }
    };
    var ce, me = {}, ue = x["react-stack-bottom-frame"].bind(
      x,
      i
    )(), fe = ae(a(i)), Ae = {};
    et.Fragment = T, et.jsx = function(M, I, Y, X, xe) {
      var K = 1e4 > H.recentlyCreatedOwnerStacks++;
      return g(
        M,
        I,
        Y,
        !1,
        X,
        xe,
        K ? Error("react-stack-top-frame") : ue,
        K ? ae(a(M)) : fe
      );
    }, et.jsxs = function(M, I, Y, X, xe) {
      var K = 1e4 > H.recentlyCreatedOwnerStacks++;
      return g(
        M,
        I,
        Y,
        !0,
        X,
        xe,
        K ? Error("react-stack-top-frame") : ue,
        K ? ae(a(M)) : fe
      );
    };
  }()), et;
}
var Na;
function Bi() {
  return Na || (Na = 1, process.env.NODE_ENV === "production" ? yt.exports = Ii() : yt.exports = Oi()), yt.exports;
}
var b = Bi();
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hi = (r) => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qi = (r) => r.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (e, t, a) => a ? a.toUpperCase() : t.toLowerCase()
), Ea = (r) => {
  const e = qi(r);
  return e.charAt(0).toUpperCase() + e.slice(1);
}, kn = (...r) => r.filter((e, t, a) => !!e && e.trim() !== "" && a.indexOf(e) === t).join(" ").trim(), ji = (r) => {
  for (const e in r)
    if (e.startsWith("aria-") || e === "role" || e === "title")
      return !0;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Fi = {
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
const Pi = wn(
  ({
    color: r = "currentColor",
    size: e = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: a,
    className: n = "",
    children: i,
    iconNode: l,
    ...u
  }, c) => zr(
    "svg",
    {
      ref: c,
      ...Fi,
      width: e,
      height: e,
      stroke: r,
      strokeWidth: a ? Number(t) * 24 / Number(e) : t,
      className: kn("lucide", n),
      ...!i && !ji(u) && { "aria-hidden": "true" },
      ...u
    },
    [
      ...l.map(([d, g]) => zr(d, g)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Se = (r, e) => {
  const t = wn(
    ({ className: a, ...n }, i) => zr(Pi, {
      ref: i,
      iconNode: e,
      className: kn(
        `lucide-${Hi(Ea(r))}`,
        `lucide-${r}`,
        a
      ),
      ...n
    })
  );
  return t.displayName = Ea(r), t;
};
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _i = [
  ["path", { d: "M17 12H7", key: "16if0g" }],
  ["path", { d: "M19 18H5", key: "18s9l3" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Ui = Se("align-center", _i);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gi = [
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 18h18", key: "1h113x" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }]
], $i = Se("align-justify", Gi);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vi = [
  ["path", { d: "M15 12H3", key: "6jk70r" }],
  ["path", { d: "M17 18H3", key: "1amg6g" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Wi = Se("align-left", Vi);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = [
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M21 18H7", key: "1ygte8" }],
  ["path", { d: "M21 6H3", key: "1jwq7v" }]
], Xi = Se("align-right", Yi);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zi = [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
], Ji = Se("bold", Zi);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ki = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], jt = Se("chevron-down", Ki);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qi = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], es = Se("image", Qi);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ts = [
  ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
  ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
  ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }]
], rs = Se("italic", ts);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const as = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
], ns = Se("link", as);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const is = [
  ["path", { d: "M10 12h11", key: "6m4ad9" }],
  ["path", { d: "M10 18h11", key: "11hvi2" }],
  ["path", { d: "M10 6h11", key: "c7qv1k" }],
  ["path", { d: "M4 10h2", key: "16xx2s" }],
  ["path", { d: "M4 6h1v4", key: "cnovpq" }],
  ["path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1", key: "m9a95d" }]
], ss = Se("list-ordered", is);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ls = [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
], os = Se("list", ls);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const us = [
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
], cs = Se("palette", us);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ms = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], hs = Se("redo", ms);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ds = [
  [
    "path",
    {
      d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
      key: "wuwx1p"
    }
  ]
], fs = Se("sigma", ds);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ps = [
  ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
  ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }]
], vs = Se("strikethrough", ps);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gs = [
  ["path", { d: "M12 3v18", key: "108xh3" }],
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M3 15h18", key: "5xshup" }]
], bs = Se("table", gs);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xs = [
  ["path", { d: "M6 4v6a6 6 0 0 0 12 0V4", key: "9kb039" }],
  ["line", { x1: "4", x2: "20", y1: "20", y2: "20", key: "nun2al" }]
], ys = Se("underline", xs);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ws = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], ks = Se("undo", ws);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ss = [
  [
    "path",
    {
      d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
      key: "ftymec"
    }
  ],
  ["rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" }]
], Ts = Se("video", Ss);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const As = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ct = Se("x", As), wt = (r, e, t) => {
  const a = window.getSelection();
  if (!a || a.rangeCount === 0 || !e.current) return;
  const n = a.getRangeAt(0);
  if (n.toString())
    try {
      const i = () => {
        let d = n.commonAncestorContainer;
        for (; d && d !== e.current; ) {
          if (d.nodeType === Node.ELEMENT_NODE) {
            const g = d;
            if (g.tagName.toLowerCase() === r.toLowerCase())
              return { isFormatted: !0, formatElement: g };
          }
          d = d.parentNode;
        }
        return { isFormatted: !1, formatElement: null };
      }, { isFormatted: l, formatElement: u } = i();
      let c = null;
      if (l && u) {
        const d = u.parentNode, g = document.createTextNode(u.textContent || "");
        d?.replaceChild(g, u), d?.normalize();
        const p = document.createRange();
        p.selectNodeContents(g), a.removeAllRanges(), a.addRange(p);
      } else {
        c = document.createElement(r);
        try {
          n.surroundContents(c);
          const d = document.createRange();
          d.selectNodeContents(c), a.removeAllRanges(), a.addRange(d);
        } catch {
          const g = n.extractContents();
          c.appendChild(g), n.insertNode(c);
          const p = document.createRange();
          p.selectNodeContents(c), a.removeAllRanges(), a.addRange(p);
        }
      }
      t();
    } catch (i) {
      console.warn("Error applying format:", i), t();
    }
}, Sn = ({
  editorRef: r,
  activeFormats: e,
  updateActiveFormats: t,
  getButtonClass: a
}) => /* @__PURE__ */ b.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => wt("strong", r, t),
      className: a(e.bold),
      title: "Bold",
      children: /* @__PURE__ */ b.jsx(Ji, { size: 18 })
    }
  ),
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => wt("em", r, t),
      className: a(e.italic),
      title: "Italic",
      children: /* @__PURE__ */ b.jsx(rs, { size: 18 })
    }
  ),
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => wt("u", r, t),
      className: a(e.underline),
      title: "Underline",
      children: /* @__PURE__ */ b.jsx(ys, { size: 18 })
    }
  ),
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => wt("s", r, t),
      className: a(e.strikethrough),
      title: "Strikethrough",
      children: /* @__PURE__ */ b.jsx(vs, { size: 18 })
    }
  )
] }), kt = (r, e) => {
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) return;
  let n = t.getRangeAt(0).commonAncestorContainer;
  for (; n && n.nodeType !== Node.ELEMENT_NODE; )
    n = n.parentNode;
  if (n && n.nodeType === Node.ELEMENT_NODE) {
    const i = n;
    i.style.textAlign = r === "left" ? "" : r, e();
  }
}, Tn = ({
  activeFormats: r,
  updateActiveFormats: e,
  getButtonClass: t
}) => /* @__PURE__ */ b.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => kt("left", e),
      className: t(r.alignLeft),
      title: "Align Left",
      children: /* @__PURE__ */ b.jsx(Wi, { size: 18 })
    }
  ),
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => kt("center", e),
      className: t(r.alignCenter),
      title: "Align Center",
      children: /* @__PURE__ */ b.jsx(Ui, { size: 18 })
    }
  ),
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => kt("right", e),
      className: t(r.alignRight),
      title: "Align Right",
      children: /* @__PURE__ */ b.jsx(Xi, { size: 18 })
    }
  ),
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => kt("justify", e),
      className: t(r.alignJustify),
      title: "Justify",
      children: /* @__PURE__ */ b.jsx($i, { size: 18 })
    }
  )
] }), za = (r, e, t) => {
  const a = window.getSelection();
  if (!a || a.rangeCount === 0 || !e.current) return;
  const n = a.getRangeAt(0);
  let i = n.commonAncestorContainer;
  i.nodeType === Node.TEXT_NODE && (i = i.parentNode);
  let l = i;
  for (; l && l !== e.current && !["P", "H1", "H2", "H3", "H4", "H5", "H6", "LI", "UL", "OL"].includes(
    l.tagName
  ); )
    l = l.parentElement;
  if (!l || l === e.current) {
    const u = document.createElement(r), c = document.createElement("li");
    c.textContent = a.toString() || "List item", u.appendChild(c), n.deleteContents(), n.insertNode(u);
    const d = document.createRange();
    d.setStart(c, 0), d.setEnd(c, c.childNodes.length), a.removeAllRanges(), a.addRange(d);
  } else if (l.tagName === "LI") {
    const u = l.parentElement;
    if (u.tagName.toLowerCase() === r) {
      const c = document.createElement("p");
      c.innerHTML = l.innerHTML, u.parentNode?.replaceChild(c, u);
    } else {
      const c = document.createElement(r);
      c.innerHTML = u.innerHTML, u.parentNode?.replaceChild(c, u);
    }
  } else {
    const u = document.createElement(r), c = document.createElement("li");
    c.innerHTML = l.innerHTML, u.appendChild(c), l.parentNode?.replaceChild(u, l);
  }
  t();
}, An = ({
  editorRef: r,
  activeFormats: e,
  updateActiveFormats: t,
  getButtonClass: a
}) => /* @__PURE__ */ b.jsxs("div", { className: "flex gap-1", children: [
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => {
        r?.current && za("ul", r, t);
      },
      className: a(e.bulletList),
      title: "Bullet List",
      children: /* @__PURE__ */ b.jsx(os, { size: 18 })
    }
  ),
  /* @__PURE__ */ b.jsx(
    "button",
    {
      onClick: () => {
        r?.current && za("ol", r, t);
      },
      className: a(e.numberedList),
      title: "Numbered List",
      children: /* @__PURE__ */ b.jsx(ss, { size: 18 })
    }
  )
] }), Ms = ({
  editorRef: r,
  activeFormats: e,
  currentTextFormat: t,
  updateActiveFormats: a,
  applyTextFormat: n
}) => {
  const [i, l] = se({ top: 0, left: 0 }), [u, c] = se(!1), [d, g] = se(!1), p = q0(null), x = [
    { value: "p", label: "Paragraph", tag: "p" },
    { value: "h1", label: "Heading 1", tag: "h1" },
    { value: "h2", label: "Heading 2", tag: "h2" },
    { value: "h3", label: "Heading 3", tag: "h3" },
    { value: "h4", label: "Heading 4", tag: "h4" },
    { value: "h5", label: "Heading 5", tag: "h5" },
    { value: "h6", label: "Heading 6", tag: "h6" }
  ];
  t0(() => {
    const T = () => {
      const z = window.getSelection();
      if (!z || z.rangeCount === 0 || z.isCollapsed || !r.current || !r.current.contains(z.anchorNode)) {
        c(!1), g(!1);
        return;
      }
      const O = z.getRangeAt(0).getBoundingClientRect(), P = p.current?.offsetHeight || 50, j = O.top - P - 45, U = O.left + O.width / 2;
      l({ top: j, left: U }), c(!0);
    };
    return document.addEventListener("selectionchange", T), window.addEventListener("scroll", T, !0), window.addEventListener("resize", T), () => {
      document.removeEventListener("selectionchange", T), window.removeEventListener("scroll", T, !0), window.removeEventListener("resize", T);
    };
  }, [r]);
  const k = (T) => `p-1.5 rounded transition-colors ${T ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, A = (T) => {
    n(T), g(!1);
  };
  return u ? /* @__PURE__ */ b.jsxs(
    "div",
    {
      ref: p,
      className: "fixed z-40 flex items-center gap-1 p-1 bg-white rounded-lg shadow-lg border border-gray-200 animate-in fade-in zoom-in-95 duration-200",
      style: {
        top: `${i.top}px`,
        left: `${i.left}px`,
        transform: "translateX(-50%)"
      },
      onMouseDown: (T) => {
        T.preventDefault();
      },
      children: [
        /* @__PURE__ */ b.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ b.jsxs(
            "button",
            {
              onClick: () => g(!d),
              className: "flex items-center gap-1 px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between",
              children: [
                /* @__PURE__ */ b.jsx("span", { className: "truncate max-w-[80px]", children: x.find((T) => T.value === t)?.label || "Paragraph" }),
                /* @__PURE__ */ b.jsx(jt, { size: 12 })
              ]
            }
          ),
          d && /* @__PURE__ */ b.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-xl overflow-hidden min-w-[140px] max-h-[300px] overflow-y-auto", children: x.map((T) => /* @__PURE__ */ b.jsx(
            "button",
            {
              onClick: () => A(T.tag),
              className: `w-full text-left px-3 py-2 text-sm hover:bg-gray-50 ${t === T.value ? "bg-blue-50 text-blue-600" : "text-gray-700"}`,
              children: T.label
            },
            T.value
          )) })
        ] }),
        /* @__PURE__ */ b.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ b.jsx(
          Sn,
          {
            editorRef: r,
            activeFormats: e,
            updateActiveFormats: a,
            getButtonClass: k
          }
        ),
        /* @__PURE__ */ b.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ b.jsx(
          An,
          {
            editorRef: r,
            activeFormats: {
              bulletList: e.bulletList,
              numberedList: e.numberedList
            },
            updateActiveFormats: a,
            getButtonClass: k
          }
        ),
        /* @__PURE__ */ b.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
        /* @__PURE__ */ b.jsx(
          Tn,
          {
            activeFormats: {
              alignLeft: e.alignLeft,
              alignCenter: e.alignCenter,
              alignRight: e.alignRight,
              alignJustify: e.alignJustify
            },
            updateActiveFormats: a,
            getButtonClass: k
          }
        )
      ]
    }
  ) : null;
};
class Pe {
  // The + prefix indicates that these fields aren't writeable
  // Lexer holding the input string.
  // Start offset, zero-based inclusive.
  // End offset, zero-based exclusive.
  constructor(e, t, a) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = a;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Pe(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Ge {
  // don't expand the token
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new Ge(t, Pe.range(this, e));
  }
}
class R {
  // Error start position based on passed-in Token or ParseNode.
  // Length of affected text based on passed-in Token or ParseNode.
  // The underlying error message without any context added.
  constructor(e, t) {
    this.name = void 0, this.position = void 0, this.length = void 0, this.rawMessage = void 0;
    var a = "KaTeX parse error: " + e, n, i, l = t && t.loc;
    if (l && l.start <= l.end) {
      var u = l.lexer.input;
      n = l.start, i = l.end, n === u.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
      var c = u.slice(n, i).replace(/[^]/g, "$&̲"), d;
      n > 15 ? d = "…" + u.slice(n - 15, n) : d = u.slice(0, n);
      var g;
      i + 15 < u.length ? g = u.slice(i, i + 15) + "…" : g = u.slice(i), a += d + c + g;
    }
    var p = new Error(a);
    return p.name = "ParseError", p.__proto__ = R.prototype, p.position = n, n != null && i != null && (p.length = i - n), p.rawMessage = e, p;
  }
}
R.prototype.__proto__ = Error.prototype;
var Ns = function(e, t) {
  return e === void 0 ? t : e;
}, Es = /([A-Z])/g, zs = function(e) {
  return e.replace(Es, "-$1").toLowerCase();
}, Cs = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Rs = /[&><"']/g;
function Ds(r) {
  return String(r).replace(Rs, (e) => Cs[e]);
}
var Mn = function r(e) {
  return e.type === "ordgroup" || e.type === "color" ? e.body.length === 1 ? r(e.body[0]) : e : e.type === "font" ? r(e.body) : e;
}, Ls = function(e) {
  var t = Mn(e);
  return t.type === "mathord" || t.type === "textord" || t.type === "atom";
}, Is = function(e) {
  if (!e)
    throw new Error("Expected non-null, but got " + String(e));
  return e;
}, Os = function(e) {
  var t = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);
  return t ? t[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1]) ? null : t[1].toLowerCase() : "_relative";
}, ie = {
  deflt: Ns,
  escape: Ds,
  hyphenate: zs,
  getBaseElem: Mn,
  isCharacterBox: Ls,
  protocolFromUrl: Os
}, Bt = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (r) => "#" + r
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (r, e) => (e.push(r), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (r) => Math.max(0, r),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (r) => Math.max(0, r),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (r) => Math.max(0, r),
    cli: "-e, --max-expand <n>",
    cliProcessor: (r) => r === "Infinity" ? 1 / 0 : parseInt(r)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function Bs(r) {
  if (r.default)
    return r.default;
  var e = r.type, t = Array.isArray(e) ? e[0] : e;
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
  }
}
class _r {
  constructor(e) {
    this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t in Bt)
      if (Bt.hasOwnProperty(t)) {
        var a = Bt[t];
        this[t] = e[t] !== void 0 ? a.processor ? a.processor(e[t]) : e[t] : Bs(a);
      }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, a) {
    var n = this.strict;
    if (typeof n == "function" && (n = n(e, t, a)), !(!n || n === "ignore")) {
      if (n === !0 || n === "error")
        throw new R("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), a);
      n === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, a) {
    var n = this.strict;
    if (typeof n == "function")
      try {
        n = n(e, t, a);
      } catch {
        n = "error";
      }
    return !n || n === "ignore" ? !1 : n === !0 || n === "error" ? !0 : n === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + n + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if (e.url && !e.protocol) {
      var t = ie.protocolFromUrl(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var a = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!a;
  }
}
class M0 {
  constructor(e, t, a) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = a;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return s0[Hs[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return s0[qs[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return s0[js[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return s0[Fs[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return s0[Ps[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return s0[_s[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Ur = 0, Ft = 1, W0 = 2, b0 = 3, ot = 4, Ye = 5, Y0 = 6, Le = 7, s0 = [new M0(Ur, 0, !1), new M0(Ft, 0, !0), new M0(W0, 1, !1), new M0(b0, 1, !0), new M0(ot, 2, !1), new M0(Ye, 2, !0), new M0(Y0, 3, !1), new M0(Le, 3, !0)], Hs = [ot, Ye, ot, Ye, Y0, Le, Y0, Le], qs = [Ye, Ye, Ye, Ye, Le, Le, Le, Le], js = [W0, b0, ot, Ye, Y0, Le, Y0, Le], Fs = [b0, b0, Ye, Ye, Le, Le, Le, Le], Ps = [Ft, Ft, b0, b0, Ye, Ye, Le, Le], _s = [Ur, Ft, W0, b0, W0, b0, W0, b0], $ = {
  DISPLAY: s0[Ur],
  TEXT: s0[W0],
  SCRIPT: s0[ot],
  SCRIPTSCRIPT: s0[Y0]
}, Cr = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function Us(r) {
  for (var e = 0; e < Cr.length; e++)
    for (var t = Cr[e], a = 0; a < t.blocks.length; a++) {
      var n = t.blocks[a];
      if (r >= n[0] && r <= n[1])
        return t.name;
    }
  return null;
}
var Ht = [];
Cr.forEach((r) => r.blocks.forEach((e) => Ht.push(...e)));
function Nn(r) {
  for (var e = 0; e < Ht.length; e += 2)
    if (r >= Ht[e] && r <= Ht[e + 1])
      return !0;
  return !1;
}
var V0 = 80, Gs = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, $s = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Vs = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, Ws = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, Ys = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Xs = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Zs = function(e, t, a) {
  var n = a - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + n + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Js = function(e, t, a) {
  t = 1e3 * t;
  var n = "";
  switch (e) {
    case "sqrtMain":
      n = Gs(t, V0);
      break;
    case "sqrtSize1":
      n = $s(t, V0);
      break;
    case "sqrtSize2":
      n = Vs(t, V0);
      break;
    case "sqrtSize3":
      n = Ws(t, V0);
      break;
    case "sqrtSize4":
      n = Ys(t, V0);
      break;
    case "sqrtTall":
      n = Zs(t, V0, a);
  }
  return n;
}, Ks = function(e, t) {
  switch (e) {
    case "⎜":
      return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
    case "∣":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
    case "∥":
      return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z" + ("M367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z");
    case "⎟":
      return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
    case "⎢":
      return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
    case "⎥":
      return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
    case "⎪":
      return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
    case "⏐":
      return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
    case "‖":
      return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257z" + ("M478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Ca = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
  leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, Qs = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
class mt {
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    var e = (t) => t.toText();
    return this.children.map(e).join("");
  }
}
var l0 = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, St = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, Ra = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function el(r, e) {
  l0[r] = e;
}
function Gr(r, e, t) {
  if (!l0[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var a = r.charCodeAt(0), n = l0[e][a];
  if (!n && r[0] in Ra && (a = Ra[r[0]].charCodeAt(0), n = l0[e][a]), !n && t === "text" && Nn(a) && (n = l0[e][77]), n)
    return {
      depth: n[0],
      height: n[1],
      italic: n[2],
      skew: n[3],
      width: n[4]
    };
}
var or = {};
function tl(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !or[e]) {
    var t = or[e] = {
      cssEmPerMu: St.quad[e] / 18
    };
    for (var a in St)
      St.hasOwnProperty(a) && (t[a] = St[a][e]);
  }
  return or[e];
}
var rl = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], Da = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], La = function(e, t) {
  return t.size < 2 ? e : rl[e - 1][t.size - 1];
};
class g0 {
  // A font family applies to a group of fonts (i.e. SansSerif), while a font
  // represents a specific font (i.e. SansSerif Bold).
  // See: https://tex.stackexchange.com/questions/22350/difference-between-textrm-and-mathrm
  /**
   * The base size index.
   */
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || g0.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Da[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    for (var a in e)
      e.hasOwnProperty(a) && (t[a] = e[a]);
    return new g0(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: La(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: Da[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = La(g0.BASESIZE, e);
    return this.size === t && this.textSize === g0.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== g0.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + g0.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = tl(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
g0.BASESIZE = 6;
var Rr = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, al = {
  ex: !0,
  em: !0,
  mu: !0
}, En = function(e) {
  return typeof e != "string" && (e = e.unit), e in Rr || e in al || e === "ex";
}, be = function(e, t) {
  var a;
  if (e.unit in Rr)
    a = Rr[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    a = t.fontMetrics().cssEmPerMu;
  else {
    var n;
    if (t.style.isTight() ? n = t.havingStyle(t.style.text()) : n = t, e.unit === "ex")
      a = n.fontMetrics().xHeight;
    else if (e.unit === "em")
      a = n.fontMetrics().quad;
    else
      throw new R("Invalid unit: '" + e.unit + "'");
    n !== t && (a *= n.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * a, t.maxSize);
}, L = function(e) {
  return +e.toFixed(4) + "em";
}, C0 = function(e) {
  return e.filter((t) => t).join(" ");
}, zn = function(e, t, a) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = a || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var n = t.getColor();
    n && (this.style.color = n);
  }
}, Cn = function(e) {
  var t = document.createElement(e);
  t.className = C0(this.classes);
  for (var a in this.style)
    this.style.hasOwnProperty(a) && (t.style[a] = this.style[a]);
  for (var n in this.attributes)
    this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, nl = /[\s"'>/=\x00-\x1f]/, Rn = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + ie.escape(C0(this.classes)) + '"');
  var a = "";
  for (var n in this.style)
    this.style.hasOwnProperty(n) && (a += ie.hyphenate(n) + ":" + this.style[n] + ";");
  a && (t += ' style="' + ie.escape(a) + '"');
  for (var i in this.attributes)
    if (this.attributes.hasOwnProperty(i)) {
      if (nl.test(i))
        throw new R("Invalid attribute name '" + i + "'");
      t += " " + i + '="' + ie.escape(this.attributes[i]) + '"';
    }
  t += ">";
  for (var l = 0; l < this.children.length; l++)
    t += this.children[l].toMarkup();
  return t += "</" + e + ">", t;
};
class ht {
  constructor(e, t, a, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, zn.call(this, e, a, n), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Cn.call(this, "span");
  }
  toMarkup() {
    return Rn.call(this, "span");
  }
}
class $r {
  constructor(e, t, a, n) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, zn.call(this, t, n), this.children = a || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Cn.call(this, "a");
  }
  toMarkup() {
    return Rn.call(this, "a");
  }
}
class il {
  constructor(e, t, a) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = a;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    e.src = this.src, e.alt = this.alt, e.className = "mord";
    for (var t in this.style)
      this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
    return e;
  }
  toMarkup() {
    var e = '<img src="' + ie.escape(this.src) + '"' + (' alt="' + ie.escape(this.alt) + '"'), t = "";
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (t += ie.hyphenate(a) + ":" + this.style[a] + ";");
    return t && (e += ' style="' + ie.escape(t) + '"'), e += "'/>", e;
  }
}
var sl = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Xe {
  constructor(e, t, a, n, i, l, u, c) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = a || 0, this.italic = n || 0, this.skew = i || 0, this.width = l || 0, this.classes = u || [], this.style = c || {}, this.maxFontSize = 0;
    var d = Us(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = sl[this.text]);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = L(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = C0(this.classes));
    for (var a in this.style)
      this.style.hasOwnProperty(a) && (t = t || document.createElement("span"), t.style[a] = this.style[a]);
    return t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += ie.escape(C0(this.classes)), t += '"');
    var a = "";
    this.italic > 0 && (a += "margin-right:" + this.italic + "em;");
    for (var n in this.style)
      this.style.hasOwnProperty(n) && (a += ie.hyphenate(n) + ":" + this.style[n] + ";");
    a && (e = !0, t += ' style="' + ie.escape(a) + '"');
    var i = ie.escape(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class y0 {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var a in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
    for (var n = 0; n < this.children.length; n++)
      t.appendChild(this.children[n].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ie.escape(this.attributes[t]) + '"');
    e += ">";
    for (var a = 0; a < this.children.length; a++)
      e += this.children[a].toMarkup();
    return e += "</svg>", e;
  }
}
class R0 {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Ca[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + ie.escape(this.alternate) + '"/>' : '<path d="' + ie.escape(Ca[this.pathName]) + '"/>';
  }
}
class Dr {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var a in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, a) && t.setAttribute(a, this.attributes[a]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="' + ie.escape(this.attributes[t]) + '"');
    return e += "/>", e;
  }
}
function Ia(r) {
  if (r instanceof Xe)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function ll(r) {
  if (r instanceof ht)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var ol = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, ul = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
}, de = {
  math: {},
  text: {}
};
function s(r, e, t, a, n, i) {
  de[r][n] = {
    font: e,
    group: t,
    replace: a
  }, i && a && (de[r][a] = de[r][n]);
}
var o = "math", E = "text", m = "main", f = "ams", ve = "accent-token", q = "bin", Be = "close", X0 = "inner", G = "mathord", Te = "op-token", $e = "open", $t = "punct", v = "rel", S0 = "spacing", w = "textord";
s(o, m, v, "≡", "\\equiv", !0);
s(o, m, v, "≺", "\\prec", !0);
s(o, m, v, "≻", "\\succ", !0);
s(o, m, v, "∼", "\\sim", !0);
s(o, m, v, "⊥", "\\perp");
s(o, m, v, "⪯", "\\preceq", !0);
s(o, m, v, "⪰", "\\succeq", !0);
s(o, m, v, "≃", "\\simeq", !0);
s(o, m, v, "∣", "\\mid", !0);
s(o, m, v, "≪", "\\ll", !0);
s(o, m, v, "≫", "\\gg", !0);
s(o, m, v, "≍", "\\asymp", !0);
s(o, m, v, "∥", "\\parallel");
s(o, m, v, "⋈", "\\bowtie", !0);
s(o, m, v, "⌣", "\\smile", !0);
s(o, m, v, "⊑", "\\sqsubseteq", !0);
s(o, m, v, "⊒", "\\sqsupseteq", !0);
s(o, m, v, "≐", "\\doteq", !0);
s(o, m, v, "⌢", "\\frown", !0);
s(o, m, v, "∋", "\\ni", !0);
s(o, m, v, "∝", "\\propto", !0);
s(o, m, v, "⊢", "\\vdash", !0);
s(o, m, v, "⊣", "\\dashv", !0);
s(o, m, v, "∋", "\\owns");
s(o, m, $t, ".", "\\ldotp");
s(o, m, $t, "⋅", "\\cdotp");
s(o, m, w, "#", "\\#");
s(E, m, w, "#", "\\#");
s(o, m, w, "&", "\\&");
s(E, m, w, "&", "\\&");
s(o, m, w, "ℵ", "\\aleph", !0);
s(o, m, w, "∀", "\\forall", !0);
s(o, m, w, "ℏ", "\\hbar", !0);
s(o, m, w, "∃", "\\exists", !0);
s(o, m, w, "∇", "\\nabla", !0);
s(o, m, w, "♭", "\\flat", !0);
s(o, m, w, "ℓ", "\\ell", !0);
s(o, m, w, "♮", "\\natural", !0);
s(o, m, w, "♣", "\\clubsuit", !0);
s(o, m, w, "℘", "\\wp", !0);
s(o, m, w, "♯", "\\sharp", !0);
s(o, m, w, "♢", "\\diamondsuit", !0);
s(o, m, w, "ℜ", "\\Re", !0);
s(o, m, w, "♡", "\\heartsuit", !0);
s(o, m, w, "ℑ", "\\Im", !0);
s(o, m, w, "♠", "\\spadesuit", !0);
s(o, m, w, "§", "\\S", !0);
s(E, m, w, "§", "\\S");
s(o, m, w, "¶", "\\P", !0);
s(E, m, w, "¶", "\\P");
s(o, m, w, "†", "\\dag");
s(E, m, w, "†", "\\dag");
s(E, m, w, "†", "\\textdagger");
s(o, m, w, "‡", "\\ddag");
s(E, m, w, "‡", "\\ddag");
s(E, m, w, "‡", "\\textdaggerdbl");
s(o, m, Be, "⎱", "\\rmoustache", !0);
s(o, m, $e, "⎰", "\\lmoustache", !0);
s(o, m, Be, "⟯", "\\rgroup", !0);
s(o, m, $e, "⟮", "\\lgroup", !0);
s(o, m, q, "∓", "\\mp", !0);
s(o, m, q, "⊖", "\\ominus", !0);
s(o, m, q, "⊎", "\\uplus", !0);
s(o, m, q, "⊓", "\\sqcap", !0);
s(o, m, q, "∗", "\\ast");
s(o, m, q, "⊔", "\\sqcup", !0);
s(o, m, q, "◯", "\\bigcirc", !0);
s(o, m, q, "∙", "\\bullet", !0);
s(o, m, q, "‡", "\\ddagger");
s(o, m, q, "≀", "\\wr", !0);
s(o, m, q, "⨿", "\\amalg");
s(o, m, q, "&", "\\And");
s(o, m, v, "⟵", "\\longleftarrow", !0);
s(o, m, v, "⇐", "\\Leftarrow", !0);
s(o, m, v, "⟸", "\\Longleftarrow", !0);
s(o, m, v, "⟶", "\\longrightarrow", !0);
s(o, m, v, "⇒", "\\Rightarrow", !0);
s(o, m, v, "⟹", "\\Longrightarrow", !0);
s(o, m, v, "↔", "\\leftrightarrow", !0);
s(o, m, v, "⟷", "\\longleftrightarrow", !0);
s(o, m, v, "⇔", "\\Leftrightarrow", !0);
s(o, m, v, "⟺", "\\Longleftrightarrow", !0);
s(o, m, v, "↦", "\\mapsto", !0);
s(o, m, v, "⟼", "\\longmapsto", !0);
s(o, m, v, "↗", "\\nearrow", !0);
s(o, m, v, "↩", "\\hookleftarrow", !0);
s(o, m, v, "↪", "\\hookrightarrow", !0);
s(o, m, v, "↘", "\\searrow", !0);
s(o, m, v, "↼", "\\leftharpoonup", !0);
s(o, m, v, "⇀", "\\rightharpoonup", !0);
s(o, m, v, "↙", "\\swarrow", !0);
s(o, m, v, "↽", "\\leftharpoondown", !0);
s(o, m, v, "⇁", "\\rightharpoondown", !0);
s(o, m, v, "↖", "\\nwarrow", !0);
s(o, m, v, "⇌", "\\rightleftharpoons", !0);
s(o, f, v, "≮", "\\nless", !0);
s(o, f, v, "", "\\@nleqslant");
s(o, f, v, "", "\\@nleqq");
s(o, f, v, "⪇", "\\lneq", !0);
s(o, f, v, "≨", "\\lneqq", !0);
s(o, f, v, "", "\\@lvertneqq");
s(o, f, v, "⋦", "\\lnsim", !0);
s(o, f, v, "⪉", "\\lnapprox", !0);
s(o, f, v, "⊀", "\\nprec", !0);
s(o, f, v, "⋠", "\\npreceq", !0);
s(o, f, v, "⋨", "\\precnsim", !0);
s(o, f, v, "⪹", "\\precnapprox", !0);
s(o, f, v, "≁", "\\nsim", !0);
s(o, f, v, "", "\\@nshortmid");
s(o, f, v, "∤", "\\nmid", !0);
s(o, f, v, "⊬", "\\nvdash", !0);
s(o, f, v, "⊭", "\\nvDash", !0);
s(o, f, v, "⋪", "\\ntriangleleft");
s(o, f, v, "⋬", "\\ntrianglelefteq", !0);
s(o, f, v, "⊊", "\\subsetneq", !0);
s(o, f, v, "", "\\@varsubsetneq");
s(o, f, v, "⫋", "\\subsetneqq", !0);
s(o, f, v, "", "\\@varsubsetneqq");
s(o, f, v, "≯", "\\ngtr", !0);
s(o, f, v, "", "\\@ngeqslant");
s(o, f, v, "", "\\@ngeqq");
s(o, f, v, "⪈", "\\gneq", !0);
s(o, f, v, "≩", "\\gneqq", !0);
s(o, f, v, "", "\\@gvertneqq");
s(o, f, v, "⋧", "\\gnsim", !0);
s(o, f, v, "⪊", "\\gnapprox", !0);
s(o, f, v, "⊁", "\\nsucc", !0);
s(o, f, v, "⋡", "\\nsucceq", !0);
s(o, f, v, "⋩", "\\succnsim", !0);
s(o, f, v, "⪺", "\\succnapprox", !0);
s(o, f, v, "≆", "\\ncong", !0);
s(o, f, v, "", "\\@nshortparallel");
s(o, f, v, "∦", "\\nparallel", !0);
s(o, f, v, "⊯", "\\nVDash", !0);
s(o, f, v, "⋫", "\\ntriangleright");
s(o, f, v, "⋭", "\\ntrianglerighteq", !0);
s(o, f, v, "", "\\@nsupseteqq");
s(o, f, v, "⊋", "\\supsetneq", !0);
s(o, f, v, "", "\\@varsupsetneq");
s(o, f, v, "⫌", "\\supsetneqq", !0);
s(o, f, v, "", "\\@varsupsetneqq");
s(o, f, v, "⊮", "\\nVdash", !0);
s(o, f, v, "⪵", "\\precneqq", !0);
s(o, f, v, "⪶", "\\succneqq", !0);
s(o, f, v, "", "\\@nsubseteqq");
s(o, f, q, "⊴", "\\unlhd");
s(o, f, q, "⊵", "\\unrhd");
s(o, f, v, "↚", "\\nleftarrow", !0);
s(o, f, v, "↛", "\\nrightarrow", !0);
s(o, f, v, "⇍", "\\nLeftarrow", !0);
s(o, f, v, "⇏", "\\nRightarrow", !0);
s(o, f, v, "↮", "\\nleftrightarrow", !0);
s(o, f, v, "⇎", "\\nLeftrightarrow", !0);
s(o, f, v, "△", "\\vartriangle");
s(o, f, w, "ℏ", "\\hslash");
s(o, f, w, "▽", "\\triangledown");
s(o, f, w, "◊", "\\lozenge");
s(o, f, w, "Ⓢ", "\\circledS");
s(o, f, w, "®", "\\circledR");
s(E, f, w, "®", "\\circledR");
s(o, f, w, "∡", "\\measuredangle", !0);
s(o, f, w, "∄", "\\nexists");
s(o, f, w, "℧", "\\mho");
s(o, f, w, "Ⅎ", "\\Finv", !0);
s(o, f, w, "⅁", "\\Game", !0);
s(o, f, w, "‵", "\\backprime");
s(o, f, w, "▲", "\\blacktriangle");
s(o, f, w, "▼", "\\blacktriangledown");
s(o, f, w, "■", "\\blacksquare");
s(o, f, w, "⧫", "\\blacklozenge");
s(o, f, w, "★", "\\bigstar");
s(o, f, w, "∢", "\\sphericalangle", !0);
s(o, f, w, "∁", "\\complement", !0);
s(o, f, w, "ð", "\\eth", !0);
s(E, m, w, "ð", "ð");
s(o, f, w, "╱", "\\diagup");
s(o, f, w, "╲", "\\diagdown");
s(o, f, w, "□", "\\square");
s(o, f, w, "□", "\\Box");
s(o, f, w, "◊", "\\Diamond");
s(o, f, w, "¥", "\\yen", !0);
s(E, f, w, "¥", "\\yen", !0);
s(o, f, w, "✓", "\\checkmark", !0);
s(E, f, w, "✓", "\\checkmark");
s(o, f, w, "ℶ", "\\beth", !0);
s(o, f, w, "ℸ", "\\daleth", !0);
s(o, f, w, "ℷ", "\\gimel", !0);
s(o, f, w, "ϝ", "\\digamma", !0);
s(o, f, w, "ϰ", "\\varkappa");
s(o, f, $e, "┌", "\\@ulcorner", !0);
s(o, f, Be, "┐", "\\@urcorner", !0);
s(o, f, $e, "└", "\\@llcorner", !0);
s(o, f, Be, "┘", "\\@lrcorner", !0);
s(o, f, v, "≦", "\\leqq", !0);
s(o, f, v, "⩽", "\\leqslant", !0);
s(o, f, v, "⪕", "\\eqslantless", !0);
s(o, f, v, "≲", "\\lesssim", !0);
s(o, f, v, "⪅", "\\lessapprox", !0);
s(o, f, v, "≊", "\\approxeq", !0);
s(o, f, q, "⋖", "\\lessdot");
s(o, f, v, "⋘", "\\lll", !0);
s(o, f, v, "≶", "\\lessgtr", !0);
s(o, f, v, "⋚", "\\lesseqgtr", !0);
s(o, f, v, "⪋", "\\lesseqqgtr", !0);
s(o, f, v, "≑", "\\doteqdot");
s(o, f, v, "≓", "\\risingdotseq", !0);
s(o, f, v, "≒", "\\fallingdotseq", !0);
s(o, f, v, "∽", "\\backsim", !0);
s(o, f, v, "⋍", "\\backsimeq", !0);
s(o, f, v, "⫅", "\\subseteqq", !0);
s(o, f, v, "⋐", "\\Subset", !0);
s(o, f, v, "⊏", "\\sqsubset", !0);
s(o, f, v, "≼", "\\preccurlyeq", !0);
s(o, f, v, "⋞", "\\curlyeqprec", !0);
s(o, f, v, "≾", "\\precsim", !0);
s(o, f, v, "⪷", "\\precapprox", !0);
s(o, f, v, "⊲", "\\vartriangleleft");
s(o, f, v, "⊴", "\\trianglelefteq");
s(o, f, v, "⊨", "\\vDash", !0);
s(o, f, v, "⊪", "\\Vvdash", !0);
s(o, f, v, "⌣", "\\smallsmile");
s(o, f, v, "⌢", "\\smallfrown");
s(o, f, v, "≏", "\\bumpeq", !0);
s(o, f, v, "≎", "\\Bumpeq", !0);
s(o, f, v, "≧", "\\geqq", !0);
s(o, f, v, "⩾", "\\geqslant", !0);
s(o, f, v, "⪖", "\\eqslantgtr", !0);
s(o, f, v, "≳", "\\gtrsim", !0);
s(o, f, v, "⪆", "\\gtrapprox", !0);
s(o, f, q, "⋗", "\\gtrdot");
s(o, f, v, "⋙", "\\ggg", !0);
s(o, f, v, "≷", "\\gtrless", !0);
s(o, f, v, "⋛", "\\gtreqless", !0);
s(o, f, v, "⪌", "\\gtreqqless", !0);
s(o, f, v, "≖", "\\eqcirc", !0);
s(o, f, v, "≗", "\\circeq", !0);
s(o, f, v, "≜", "\\triangleq", !0);
s(o, f, v, "∼", "\\thicksim");
s(o, f, v, "≈", "\\thickapprox");
s(o, f, v, "⫆", "\\supseteqq", !0);
s(o, f, v, "⋑", "\\Supset", !0);
s(o, f, v, "⊐", "\\sqsupset", !0);
s(o, f, v, "≽", "\\succcurlyeq", !0);
s(o, f, v, "⋟", "\\curlyeqsucc", !0);
s(o, f, v, "≿", "\\succsim", !0);
s(o, f, v, "⪸", "\\succapprox", !0);
s(o, f, v, "⊳", "\\vartriangleright");
s(o, f, v, "⊵", "\\trianglerighteq");
s(o, f, v, "⊩", "\\Vdash", !0);
s(o, f, v, "∣", "\\shortmid");
s(o, f, v, "∥", "\\shortparallel");
s(o, f, v, "≬", "\\between", !0);
s(o, f, v, "⋔", "\\pitchfork", !0);
s(o, f, v, "∝", "\\varpropto");
s(o, f, v, "◀", "\\blacktriangleleft");
s(o, f, v, "∴", "\\therefore", !0);
s(o, f, v, "∍", "\\backepsilon");
s(o, f, v, "▶", "\\blacktriangleright");
s(o, f, v, "∵", "\\because", !0);
s(o, f, v, "⋘", "\\llless");
s(o, f, v, "⋙", "\\gggtr");
s(o, f, q, "⊲", "\\lhd");
s(o, f, q, "⊳", "\\rhd");
s(o, f, v, "≂", "\\eqsim", !0);
s(o, m, v, "⋈", "\\Join");
s(o, f, v, "≑", "\\Doteq", !0);
s(o, f, q, "∔", "\\dotplus", !0);
s(o, f, q, "∖", "\\smallsetminus");
s(o, f, q, "⋒", "\\Cap", !0);
s(o, f, q, "⋓", "\\Cup", !0);
s(o, f, q, "⩞", "\\doublebarwedge", !0);
s(o, f, q, "⊟", "\\boxminus", !0);
s(o, f, q, "⊞", "\\boxplus", !0);
s(o, f, q, "⋇", "\\divideontimes", !0);
s(o, f, q, "⋉", "\\ltimes", !0);
s(o, f, q, "⋊", "\\rtimes", !0);
s(o, f, q, "⋋", "\\leftthreetimes", !0);
s(o, f, q, "⋌", "\\rightthreetimes", !0);
s(o, f, q, "⋏", "\\curlywedge", !0);
s(o, f, q, "⋎", "\\curlyvee", !0);
s(o, f, q, "⊝", "\\circleddash", !0);
s(o, f, q, "⊛", "\\circledast", !0);
s(o, f, q, "⋅", "\\centerdot");
s(o, f, q, "⊺", "\\intercal", !0);
s(o, f, q, "⋒", "\\doublecap");
s(o, f, q, "⋓", "\\doublecup");
s(o, f, q, "⊠", "\\boxtimes", !0);
s(o, f, v, "⇢", "\\dashrightarrow", !0);
s(o, f, v, "⇠", "\\dashleftarrow", !0);
s(o, f, v, "⇇", "\\leftleftarrows", !0);
s(o, f, v, "⇆", "\\leftrightarrows", !0);
s(o, f, v, "⇚", "\\Lleftarrow", !0);
s(o, f, v, "↞", "\\twoheadleftarrow", !0);
s(o, f, v, "↢", "\\leftarrowtail", !0);
s(o, f, v, "↫", "\\looparrowleft", !0);
s(o, f, v, "⇋", "\\leftrightharpoons", !0);
s(o, f, v, "↶", "\\curvearrowleft", !0);
s(o, f, v, "↺", "\\circlearrowleft", !0);
s(o, f, v, "↰", "\\Lsh", !0);
s(o, f, v, "⇈", "\\upuparrows", !0);
s(o, f, v, "↿", "\\upharpoonleft", !0);
s(o, f, v, "⇃", "\\downharpoonleft", !0);
s(o, m, v, "⊶", "\\origof", !0);
s(o, m, v, "⊷", "\\imageof", !0);
s(o, f, v, "⊸", "\\multimap", !0);
s(o, f, v, "↭", "\\leftrightsquigarrow", !0);
s(o, f, v, "⇉", "\\rightrightarrows", !0);
s(o, f, v, "⇄", "\\rightleftarrows", !0);
s(o, f, v, "↠", "\\twoheadrightarrow", !0);
s(o, f, v, "↣", "\\rightarrowtail", !0);
s(o, f, v, "↬", "\\looparrowright", !0);
s(o, f, v, "↷", "\\curvearrowright", !0);
s(o, f, v, "↻", "\\circlearrowright", !0);
s(o, f, v, "↱", "\\Rsh", !0);
s(o, f, v, "⇊", "\\downdownarrows", !0);
s(o, f, v, "↾", "\\upharpoonright", !0);
s(o, f, v, "⇂", "\\downharpoonright", !0);
s(o, f, v, "⇝", "\\rightsquigarrow", !0);
s(o, f, v, "⇝", "\\leadsto");
s(o, f, v, "⇛", "\\Rrightarrow", !0);
s(o, f, v, "↾", "\\restriction");
s(o, m, w, "‘", "`");
s(o, m, w, "$", "\\$");
s(E, m, w, "$", "\\$");
s(E, m, w, "$", "\\textdollar");
s(o, m, w, "%", "\\%");
s(E, m, w, "%", "\\%");
s(o, m, w, "_", "\\_");
s(E, m, w, "_", "\\_");
s(E, m, w, "_", "\\textunderscore");
s(o, m, w, "∠", "\\angle", !0);
s(o, m, w, "∞", "\\infty", !0);
s(o, m, w, "′", "\\prime");
s(o, m, w, "△", "\\triangle");
s(o, m, w, "Γ", "\\Gamma", !0);
s(o, m, w, "Δ", "\\Delta", !0);
s(o, m, w, "Θ", "\\Theta", !0);
s(o, m, w, "Λ", "\\Lambda", !0);
s(o, m, w, "Ξ", "\\Xi", !0);
s(o, m, w, "Π", "\\Pi", !0);
s(o, m, w, "Σ", "\\Sigma", !0);
s(o, m, w, "Υ", "\\Upsilon", !0);
s(o, m, w, "Φ", "\\Phi", !0);
s(o, m, w, "Ψ", "\\Psi", !0);
s(o, m, w, "Ω", "\\Omega", !0);
s(o, m, w, "A", "Α");
s(o, m, w, "B", "Β");
s(o, m, w, "E", "Ε");
s(o, m, w, "Z", "Ζ");
s(o, m, w, "H", "Η");
s(o, m, w, "I", "Ι");
s(o, m, w, "K", "Κ");
s(o, m, w, "M", "Μ");
s(o, m, w, "N", "Ν");
s(o, m, w, "O", "Ο");
s(o, m, w, "P", "Ρ");
s(o, m, w, "T", "Τ");
s(o, m, w, "X", "Χ");
s(o, m, w, "¬", "\\neg", !0);
s(o, m, w, "¬", "\\lnot");
s(o, m, w, "⊤", "\\top");
s(o, m, w, "⊥", "\\bot");
s(o, m, w, "∅", "\\emptyset");
s(o, f, w, "∅", "\\varnothing");
s(o, m, G, "α", "\\alpha", !0);
s(o, m, G, "β", "\\beta", !0);
s(o, m, G, "γ", "\\gamma", !0);
s(o, m, G, "δ", "\\delta", !0);
s(o, m, G, "ϵ", "\\epsilon", !0);
s(o, m, G, "ζ", "\\zeta", !0);
s(o, m, G, "η", "\\eta", !0);
s(o, m, G, "θ", "\\theta", !0);
s(o, m, G, "ι", "\\iota", !0);
s(o, m, G, "κ", "\\kappa", !0);
s(o, m, G, "λ", "\\lambda", !0);
s(o, m, G, "μ", "\\mu", !0);
s(o, m, G, "ν", "\\nu", !0);
s(o, m, G, "ξ", "\\xi", !0);
s(o, m, G, "ο", "\\omicron", !0);
s(o, m, G, "π", "\\pi", !0);
s(o, m, G, "ρ", "\\rho", !0);
s(o, m, G, "σ", "\\sigma", !0);
s(o, m, G, "τ", "\\tau", !0);
s(o, m, G, "υ", "\\upsilon", !0);
s(o, m, G, "ϕ", "\\phi", !0);
s(o, m, G, "χ", "\\chi", !0);
s(o, m, G, "ψ", "\\psi", !0);
s(o, m, G, "ω", "\\omega", !0);
s(o, m, G, "ε", "\\varepsilon", !0);
s(o, m, G, "ϑ", "\\vartheta", !0);
s(o, m, G, "ϖ", "\\varpi", !0);
s(o, m, G, "ϱ", "\\varrho", !0);
s(o, m, G, "ς", "\\varsigma", !0);
s(o, m, G, "φ", "\\varphi", !0);
s(o, m, q, "∗", "*", !0);
s(o, m, q, "+", "+");
s(o, m, q, "−", "-", !0);
s(o, m, q, "⋅", "\\cdot", !0);
s(o, m, q, "∘", "\\circ", !0);
s(o, m, q, "÷", "\\div", !0);
s(o, m, q, "±", "\\pm", !0);
s(o, m, q, "×", "\\times", !0);
s(o, m, q, "∩", "\\cap", !0);
s(o, m, q, "∪", "\\cup", !0);
s(o, m, q, "∖", "\\setminus", !0);
s(o, m, q, "∧", "\\land");
s(o, m, q, "∨", "\\lor");
s(o, m, q, "∧", "\\wedge", !0);
s(o, m, q, "∨", "\\vee", !0);
s(o, m, w, "√", "\\surd");
s(o, m, $e, "⟨", "\\langle", !0);
s(o, m, $e, "∣", "\\lvert");
s(o, m, $e, "∥", "\\lVert");
s(o, m, Be, "?", "?");
s(o, m, Be, "!", "!");
s(o, m, Be, "⟩", "\\rangle", !0);
s(o, m, Be, "∣", "\\rvert");
s(o, m, Be, "∥", "\\rVert");
s(o, m, v, "=", "=");
s(o, m, v, ":", ":");
s(o, m, v, "≈", "\\approx", !0);
s(o, m, v, "≅", "\\cong", !0);
s(o, m, v, "≥", "\\ge");
s(o, m, v, "≥", "\\geq", !0);
s(o, m, v, "←", "\\gets");
s(o, m, v, ">", "\\gt", !0);
s(o, m, v, "∈", "\\in", !0);
s(o, m, v, "", "\\@not");
s(o, m, v, "⊂", "\\subset", !0);
s(o, m, v, "⊃", "\\supset", !0);
s(o, m, v, "⊆", "\\subseteq", !0);
s(o, m, v, "⊇", "\\supseteq", !0);
s(o, f, v, "⊈", "\\nsubseteq", !0);
s(o, f, v, "⊉", "\\nsupseteq", !0);
s(o, m, v, "⊨", "\\models");
s(o, m, v, "←", "\\leftarrow", !0);
s(o, m, v, "≤", "\\le");
s(o, m, v, "≤", "\\leq", !0);
s(o, m, v, "<", "\\lt", !0);
s(o, m, v, "→", "\\rightarrow", !0);
s(o, m, v, "→", "\\to");
s(o, f, v, "≱", "\\ngeq", !0);
s(o, f, v, "≰", "\\nleq", !0);
s(o, m, S0, " ", "\\ ");
s(o, m, S0, " ", "\\space");
s(o, m, S0, " ", "\\nobreakspace");
s(E, m, S0, " ", "\\ ");
s(E, m, S0, " ", " ");
s(E, m, S0, " ", "\\space");
s(E, m, S0, " ", "\\nobreakspace");
s(o, m, S0, null, "\\nobreak");
s(o, m, S0, null, "\\allowbreak");
s(o, m, $t, ",", ",");
s(o, m, $t, ";", ";");
s(o, f, q, "⊼", "\\barwedge", !0);
s(o, f, q, "⊻", "\\veebar", !0);
s(o, m, q, "⊙", "\\odot", !0);
s(o, m, q, "⊕", "\\oplus", !0);
s(o, m, q, "⊗", "\\otimes", !0);
s(o, m, w, "∂", "\\partial", !0);
s(o, m, q, "⊘", "\\oslash", !0);
s(o, f, q, "⊚", "\\circledcirc", !0);
s(o, f, q, "⊡", "\\boxdot", !0);
s(o, m, q, "△", "\\bigtriangleup");
s(o, m, q, "▽", "\\bigtriangledown");
s(o, m, q, "†", "\\dagger");
s(o, m, q, "⋄", "\\diamond");
s(o, m, q, "⋆", "\\star");
s(o, m, q, "◃", "\\triangleleft");
s(o, m, q, "▹", "\\triangleright");
s(o, m, $e, "{", "\\{");
s(E, m, w, "{", "\\{");
s(E, m, w, "{", "\\textbraceleft");
s(o, m, Be, "}", "\\}");
s(E, m, w, "}", "\\}");
s(E, m, w, "}", "\\textbraceright");
s(o, m, $e, "{", "\\lbrace");
s(o, m, Be, "}", "\\rbrace");
s(o, m, $e, "[", "\\lbrack", !0);
s(E, m, w, "[", "\\lbrack", !0);
s(o, m, Be, "]", "\\rbrack", !0);
s(E, m, w, "]", "\\rbrack", !0);
s(o, m, $e, "(", "\\lparen", !0);
s(o, m, Be, ")", "\\rparen", !0);
s(E, m, w, "<", "\\textless", !0);
s(E, m, w, ">", "\\textgreater", !0);
s(o, m, $e, "⌊", "\\lfloor", !0);
s(o, m, Be, "⌋", "\\rfloor", !0);
s(o, m, $e, "⌈", "\\lceil", !0);
s(o, m, Be, "⌉", "\\rceil", !0);
s(o, m, w, "\\", "\\backslash");
s(o, m, w, "∣", "|");
s(o, m, w, "∣", "\\vert");
s(E, m, w, "|", "\\textbar", !0);
s(o, m, w, "∥", "\\|");
s(o, m, w, "∥", "\\Vert");
s(E, m, w, "∥", "\\textbardbl");
s(E, m, w, "~", "\\textasciitilde");
s(E, m, w, "\\", "\\textbackslash");
s(E, m, w, "^", "\\textasciicircum");
s(o, m, v, "↑", "\\uparrow", !0);
s(o, m, v, "⇑", "\\Uparrow", !0);
s(o, m, v, "↓", "\\downarrow", !0);
s(o, m, v, "⇓", "\\Downarrow", !0);
s(o, m, v, "↕", "\\updownarrow", !0);
s(o, m, v, "⇕", "\\Updownarrow", !0);
s(o, m, Te, "∐", "\\coprod");
s(o, m, Te, "⋁", "\\bigvee");
s(o, m, Te, "⋀", "\\bigwedge");
s(o, m, Te, "⨄", "\\biguplus");
s(o, m, Te, "⋂", "\\bigcap");
s(o, m, Te, "⋃", "\\bigcup");
s(o, m, Te, "∫", "\\int");
s(o, m, Te, "∫", "\\intop");
s(o, m, Te, "∬", "\\iint");
s(o, m, Te, "∭", "\\iiint");
s(o, m, Te, "∏", "\\prod");
s(o, m, Te, "∑", "\\sum");
s(o, m, Te, "⨂", "\\bigotimes");
s(o, m, Te, "⨁", "\\bigoplus");
s(o, m, Te, "⨀", "\\bigodot");
s(o, m, Te, "∮", "\\oint");
s(o, m, Te, "∯", "\\oiint");
s(o, m, Te, "∰", "\\oiiint");
s(o, m, Te, "⨆", "\\bigsqcup");
s(o, m, Te, "∫", "\\smallint");
s(E, m, X0, "…", "\\textellipsis");
s(o, m, X0, "…", "\\mathellipsis");
s(E, m, X0, "…", "\\ldots", !0);
s(o, m, X0, "…", "\\ldots", !0);
s(o, m, X0, "⋯", "\\@cdots", !0);
s(o, m, X0, "⋱", "\\ddots", !0);
s(o, m, w, "⋮", "\\varvdots");
s(E, m, w, "⋮", "\\varvdots");
s(o, m, ve, "ˊ", "\\acute");
s(o, m, ve, "ˋ", "\\grave");
s(o, m, ve, "¨", "\\ddot");
s(o, m, ve, "~", "\\tilde");
s(o, m, ve, "ˉ", "\\bar");
s(o, m, ve, "˘", "\\breve");
s(o, m, ve, "ˇ", "\\check");
s(o, m, ve, "^", "\\hat");
s(o, m, ve, "⃗", "\\vec");
s(o, m, ve, "˙", "\\dot");
s(o, m, ve, "˚", "\\mathring");
s(o, m, G, "", "\\@imath");
s(o, m, G, "", "\\@jmath");
s(o, m, w, "ı", "ı");
s(o, m, w, "ȷ", "ȷ");
s(E, m, w, "ı", "\\i", !0);
s(E, m, w, "ȷ", "\\j", !0);
s(E, m, w, "ß", "\\ss", !0);
s(E, m, w, "æ", "\\ae", !0);
s(E, m, w, "œ", "\\oe", !0);
s(E, m, w, "ø", "\\o", !0);
s(E, m, w, "Æ", "\\AE", !0);
s(E, m, w, "Œ", "\\OE", !0);
s(E, m, w, "Ø", "\\O", !0);
s(E, m, ve, "ˊ", "\\'");
s(E, m, ve, "ˋ", "\\`");
s(E, m, ve, "ˆ", "\\^");
s(E, m, ve, "˜", "\\~");
s(E, m, ve, "ˉ", "\\=");
s(E, m, ve, "˘", "\\u");
s(E, m, ve, "˙", "\\.");
s(E, m, ve, "¸", "\\c");
s(E, m, ve, "˚", "\\r");
s(E, m, ve, "ˇ", "\\v");
s(E, m, ve, "¨", '\\"');
s(E, m, ve, "˝", "\\H");
s(E, m, ve, "◯", "\\textcircled");
var Dn = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
s(E, m, w, "–", "--", !0);
s(E, m, w, "–", "\\textendash");
s(E, m, w, "—", "---", !0);
s(E, m, w, "—", "\\textemdash");
s(E, m, w, "‘", "`", !0);
s(E, m, w, "‘", "\\textquoteleft");
s(E, m, w, "’", "'", !0);
s(E, m, w, "’", "\\textquoteright");
s(E, m, w, "“", "``", !0);
s(E, m, w, "“", "\\textquotedblleft");
s(E, m, w, "”", "''", !0);
s(E, m, w, "”", "\\textquotedblright");
s(o, m, w, "°", "\\degree", !0);
s(E, m, w, "°", "\\degree");
s(E, m, w, "°", "\\textdegree", !0);
s(o, m, w, "£", "\\pounds");
s(o, m, w, "£", "\\mathsterling", !0);
s(E, m, w, "£", "\\pounds");
s(E, m, w, "£", "\\textsterling", !0);
s(o, f, w, "✠", "\\maltese");
s(E, f, w, "✠", "\\maltese");
var Oa = '0123456789/@."';
for (var ur = 0; ur < Oa.length; ur++) {
  var Ba = Oa.charAt(ur);
  s(o, m, w, Ba, Ba);
}
var Ha = '0123456789!@*()-=+";:?/.,';
for (var cr = 0; cr < Ha.length; cr++) {
  var qa = Ha.charAt(cr);
  s(E, m, w, qa, qa);
}
var Pt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var mr = 0; mr < Pt.length; mr++) {
  var Tt = Pt.charAt(mr);
  s(o, m, G, Tt, Tt), s(E, m, w, Tt, Tt);
}
s(o, f, w, "C", "ℂ");
s(E, f, w, "C", "ℂ");
s(o, f, w, "H", "ℍ");
s(E, f, w, "H", "ℍ");
s(o, f, w, "N", "ℕ");
s(E, f, w, "N", "ℕ");
s(o, f, w, "P", "ℙ");
s(E, f, w, "P", "ℙ");
s(o, f, w, "Q", "ℚ");
s(E, f, w, "Q", "ℚ");
s(o, f, w, "R", "ℝ");
s(E, f, w, "R", "ℝ");
s(o, f, w, "Z", "ℤ");
s(E, f, w, "Z", "ℤ");
s(o, m, G, "h", "ℎ");
s(E, m, G, "h", "ℎ");
var W = "";
for (var Re = 0; Re < Pt.length; Re++) {
  var ye = Pt.charAt(Re);
  W = String.fromCharCode(55349, 56320 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56372 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56424 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56580 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56684 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56736 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56788 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56840 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56944 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), Re < 26 && (W = String.fromCharCode(55349, 56632 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W), W = String.fromCharCode(55349, 56476 + Re), s(o, m, G, ye, W), s(E, m, w, ye, W));
}
W = "𝕜";
s(o, m, G, "k", W);
s(E, m, w, "k", W);
for (var B0 = 0; B0 < 10; B0++) {
  var N0 = B0.toString();
  W = String.fromCharCode(55349, 57294 + B0), s(o, m, G, N0, W), s(E, m, w, N0, W), W = String.fromCharCode(55349, 57314 + B0), s(o, m, G, N0, W), s(E, m, w, N0, W), W = String.fromCharCode(55349, 57324 + B0), s(o, m, G, N0, W), s(E, m, w, N0, W), W = String.fromCharCode(55349, 57334 + B0), s(o, m, G, N0, W), s(E, m, w, N0, W);
}
var Lr = "ÐÞþ";
for (var hr = 0; hr < Lr.length; hr++) {
  var At = Lr.charAt(hr);
  s(o, m, G, At, At), s(E, m, w, At, At);
}
var Mt = [
  ["mathbf", "textbf", "Main-Bold"],
  // A-Z bold upright
  ["mathbf", "textbf", "Main-Bold"],
  // a-z bold upright
  ["mathnormal", "textit", "Math-Italic"],
  // A-Z italic
  ["mathnormal", "textit", "Math-Italic"],
  // a-z italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // A-Z bold italic
  ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
  // a-z bold italic
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  ["mathscr", "textscr", "Script-Regular"],
  // A-Z script
  ["", "", ""],
  // a-z script.  No font
  ["", "", ""],
  // A-Z bold script. No font
  ["", "", ""],
  // a-z bold script. No font
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // A-Z Fraktur
  ["mathfrak", "textfrak", "Fraktur-Regular"],
  // a-z Fraktur
  ["mathbb", "textbb", "AMS-Regular"],
  // A-Z double-struck
  ["mathbb", "textbb", "AMS-Regular"],
  // k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // A-Z bold Fraktur
  ["mathboldfrak", "textboldfrak", "Fraktur-Regular"],
  // a-z bold Fraktur
  ["mathsf", "textsf", "SansSerif-Regular"],
  // A-Z sans-serif
  ["mathsf", "textsf", "SansSerif-Regular"],
  // a-z sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // A-Z bold sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // a-z bold sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // A-Z italic sans-serif
  ["mathitsf", "textitsf", "SansSerif-Italic"],
  // a-z italic sans-serif
  ["", "", ""],
  // A-Z bold italic sans. No font
  ["", "", ""],
  // a-z bold italic sans. No font
  ["mathtt", "texttt", "Typewriter-Regular"],
  // A-Z monospace
  ["mathtt", "texttt", "Typewriter-Regular"]
  // a-z monospace
], ja = [
  ["mathbf", "textbf", "Main-Bold"],
  // 0-9 bold
  ["", "", ""],
  // 0-9 double-struck. No KaTeX font.
  ["mathsf", "textsf", "SansSerif-Regular"],
  // 0-9 sans-serif
  ["mathboldsf", "textboldsf", "SansSerif-Bold"],
  // 0-9 bold sans-serif
  ["mathtt", "texttt", "Typewriter-Regular"]
  // 0-9 monospace
], cl = function(e, t) {
  var a = e.charCodeAt(0), n = e.charCodeAt(1), i = (a - 55296) * 1024 + (n - 56320) + 65536, l = t === "math" ? 0 : 1;
  if (119808 <= i && i < 120484) {
    var u = Math.floor((i - 119808) / 26);
    return [Mt[u][2], Mt[u][l]];
  } else if (120782 <= i && i <= 120831) {
    var c = Math.floor((i - 120782) / 10);
    return [ja[c][2], ja[c][l]];
  } else {
    if (i === 120485 || i === 120486)
      return [Mt[0][2], Mt[0][l]];
    if (120486 < i && i < 120782)
      return ["", ""];
    throw new R("Unsupported character: " + e);
  }
}, Vt = function(e, t, a) {
  return de[a][e] && de[a][e].replace && (e = de[a][e].replace), {
    value: e,
    metrics: Gr(e, t, a)
  };
}, e0 = function(e, t, a, n, i) {
  var l = Vt(e, t, a), u = l.metrics;
  e = l.value;
  var c;
  if (u) {
    var d = u.italic;
    (a === "text" || n && n.font === "mathit") && (d = 0), c = new Xe(e, u.height, u.depth, d, u.skew, u.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + a + "'")), c = new Xe(e, 0, 0, 0, 0, 0, i);
  if (n) {
    c.maxFontSize = n.sizeMultiplier, n.style.isTight() && c.classes.push("mtight");
    var g = n.getColor();
    g && (c.style.color = g);
  }
  return c;
}, ml = function(e, t, a, n) {
  return n === void 0 && (n = []), a.font === "boldsymbol" && Vt(e, "Main-Bold", t).metrics ? e0(e, "Main-Bold", t, a, n.concat(["mathbf"])) : e === "\\" || de[t][e].font === "main" ? e0(e, "Main-Regular", t, a, n) : e0(e, "AMS-Regular", t, a, n.concat(["amsrm"]));
}, hl = function(e, t, a, n, i) {
  return i !== "textord" && Vt(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, dl = function(e, t, a) {
  var n = e.mode, i = e.text, l = ["mord"], u = n === "math" || n === "text" && t.font, c = u ? t.font : t.fontFamily, d = "", g = "";
  if (i.charCodeAt(0) === 55349 && ([d, g] = cl(i, n)), d.length > 0)
    return e0(i, d, n, t, l.concat(g));
  if (c) {
    var p, x;
    if (c === "boldsymbol") {
      var k = hl(i, n, t, l, a);
      p = k.fontName, x = [k.fontClass];
    } else u ? (p = On[c].fontName, x = [c]) : (p = Nt(c, t.fontWeight, t.fontShape), x = [c, t.fontWeight, t.fontShape]);
    if (Vt(i, p, n).metrics)
      return e0(i, p, n, t, l.concat(x));
    if (Dn.hasOwnProperty(i) && p.slice(0, 10) === "Typewriter") {
      for (var A = [], T = 0; T < i.length; T++)
        A.push(e0(i[T], p, n, t, l.concat(x)));
      return In(A);
    }
  }
  if (a === "mathord")
    return e0(i, "Math-Italic", n, t, l.concat(["mathnormal"]));
  if (a === "textord") {
    var z = de[n][i] && de[n][i].font;
    if (z === "ams") {
      var N = Nt("amsrm", t.fontWeight, t.fontShape);
      return e0(i, N, n, t, l.concat("amsrm", t.fontWeight, t.fontShape));
    } else if (z === "main" || !z) {
      var O = Nt("textrm", t.fontWeight, t.fontShape);
      return e0(i, O, n, t, l.concat(t.fontWeight, t.fontShape));
    } else {
      var P = Nt(z, t.fontWeight, t.fontShape);
      return e0(i, P, n, t, l.concat(P, t.fontWeight, t.fontShape));
    }
  } else
    throw new Error("unexpected type: " + a + " in makeOrd");
}, fl = (r, e) => {
  if (C0(r.classes) !== C0(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize)
    return !1;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var a in r.style)
    if (r.style.hasOwnProperty(a) && r.style[a] !== e.style[a])
      return !1;
  for (var n in e.style)
    if (e.style.hasOwnProperty(n) && r.style[n] !== e.style[n])
      return !1;
  return !0;
}, pl = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], a = r[e + 1];
    t instanceof Xe && a instanceof Xe && fl(t, a) && (t.text += a.text, t.height = Math.max(t.height, a.height), t.depth = Math.max(t.depth, a.depth), t.italic = a.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Vr = function(e) {
  for (var t = 0, a = 0, n = 0, i = 0; i < e.children.length; i++) {
    var l = e.children[i];
    l.height > t && (t = l.height), l.depth > a && (a = l.depth), l.maxFontSize > n && (n = l.maxFontSize);
  }
  e.height = t, e.depth = a, e.maxFontSize = n;
}, Fe = function(e, t, a, n) {
  var i = new ht(e, t, a, n);
  return Vr(i), i;
}, Ln = (r, e, t, a) => new ht(r, e, t, a), vl = function(e, t, a) {
  var n = Fe([e], [], t);
  return n.height = Math.max(a || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = L(n.height), n.maxFontSize = 1, n;
}, gl = function(e, t, a, n) {
  var i = new $r(e, t, a, n);
  return Vr(i), i;
}, In = function(e) {
  var t = new mt(e);
  return Vr(t), t;
}, bl = function(e, t) {
  return e instanceof mt ? Fe([], [e], t) : e;
}, xl = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, a = [t[0]], n = -t[0].shift - t[0].elem.depth, i = n, l = 1; l < t.length; l++) {
      var u = -t[l].shift - i - t[l].elem.depth, c = u - (t[l - 1].elem.height + t[l - 1].elem.depth);
      i = i + u, a.push({
        type: "kern",
        size: c
      }), a.push(t[l]);
    }
    return {
      children: a,
      depth: n
    };
  }
  var d;
  if (e.positionType === "top") {
    for (var g = e.positionData, p = 0; p < e.children.length; p++) {
      var x = e.children[p];
      g -= x.type === "kern" ? x.size : x.elem.height + x.elem.depth;
    }
    d = g;
  } else if (e.positionType === "bottom")
    d = -e.positionData;
  else {
    var k = e.children[0];
    if (k.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      d = -k.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      d = -k.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: d
  };
}, yl = function(e, t) {
  for (var {
    children: a,
    depth: n
  } = xl(e), i = 0, l = 0; l < a.length; l++) {
    var u = a[l];
    if (u.type === "elem") {
      var c = u.elem;
      i = Math.max(i, c.maxFontSize, c.height);
    }
  }
  i += 2;
  var d = Fe(["pstrut"], []);
  d.style.height = L(i);
  for (var g = [], p = n, x = n, k = n, A = 0; A < a.length; A++) {
    var T = a[A];
    if (T.type === "kern")
      k += T.size;
    else {
      var z = T.elem, N = T.wrapperClasses || [], O = T.wrapperStyle || {}, P = Fe(N, [d, z], void 0, O);
      P.style.top = L(-i - k - z.depth), T.marginLeft && (P.style.marginLeft = T.marginLeft), T.marginRight && (P.style.marginRight = T.marginRight), g.push(P), k += z.height + z.depth;
    }
    p = Math.min(p, k), x = Math.max(x, k);
  }
  var j = Fe(["vlist"], g);
  j.style.height = L(x);
  var U;
  if (p < 0) {
    var Q = Fe([], []), ee = Fe(["vlist"], [Q]);
    ee.style.height = L(-p);
    var le = Fe(["vlist-s"], [new Xe("​")]);
    U = [Fe(["vlist-r"], [j, le]), Fe(["vlist-r"], [ee])];
  } else
    U = [Fe(["vlist-r"], [j])];
  var Z = Fe(["vlist-t"], U);
  return U.length === 2 && Z.classes.push("vlist-t2"), Z.height = x, Z.depth = -p, Z;
}, wl = (r, e) => {
  var t = Fe(["mspace"], [], e), a = be(r, e);
  return t.style.marginRight = L(a), t;
}, Nt = function(e, t, a) {
  var n = "";
  switch (e) {
    case "amsrm":
      n = "AMS";
      break;
    case "textrm":
      n = "Main";
      break;
    case "textsf":
      n = "SansSerif";
      break;
    case "texttt":
      n = "Typewriter";
      break;
    default:
      n = e;
  }
  var i;
  return t === "textbf" && a === "textit" ? i = "BoldItalic" : t === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", n + "-" + i;
}, On = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  mathsfit: {
    variant: "sans-serif-italic",
    fontName: "SansSerif-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, Bn = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, kl = function(e, t) {
  var [a, n, i] = Bn[e], l = new R0(a), u = new y0([l], {
    width: L(n),
    height: L(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + L(n),
    viewBox: "0 0 " + 1e3 * n + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), c = Ln(["overlay"], [u], t);
  return c.height = i, c.style.height = L(i), c.style.width = L(n), c;
}, S = {
  fontMap: On,
  makeSymbol: e0,
  mathsym: ml,
  makeSpan: Fe,
  makeSvgSpan: Ln,
  makeLineSpan: vl,
  makeAnchor: gl,
  makeFragment: In,
  wrapFragment: bl,
  makeVList: yl,
  makeOrd: dl,
  makeGlue: wl,
  staticSvg: kl,
  svgData: Bn,
  tryCombineChars: pl
}, ge = {
  number: 3,
  unit: "mu"
}, H0 = {
  number: 4,
  unit: "mu"
}, v0 = {
  number: 5,
  unit: "mu"
}, Sl = {
  mord: {
    mop: ge,
    mbin: H0,
    mrel: v0,
    minner: ge
  },
  mop: {
    mord: ge,
    mop: ge,
    mrel: v0,
    minner: ge
  },
  mbin: {
    mord: H0,
    mop: H0,
    mopen: H0,
    minner: H0
  },
  mrel: {
    mord: v0,
    mop: v0,
    mopen: v0,
    minner: v0
  },
  mopen: {},
  mclose: {
    mop: ge,
    mbin: H0,
    mrel: v0,
    minner: ge
  },
  mpunct: {
    mord: ge,
    mop: ge,
    mrel: v0,
    mopen: ge,
    mclose: ge,
    mpunct: ge,
    minner: ge
  },
  minner: {
    mord: ge,
    mop: ge,
    mbin: H0,
    mrel: v0,
    mopen: ge,
    mpunct: ge,
    minner: ge
  }
}, Tl = {
  mord: {
    mop: ge
  },
  mop: {
    mord: ge,
    mop: ge
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: ge
  },
  mpunct: {},
  minner: {
    mop: ge
  }
}, Hn = {}, _t = {}, Ut = {};
function B(r) {
  for (var {
    type: e,
    names: t,
    props: a,
    handler: n,
    htmlBuilder: i,
    mathmlBuilder: l
  } = r, u = {
    type: e,
    numArgs: a.numArgs,
    argTypes: a.argTypes,
    allowedInArgument: !!a.allowedInArgument,
    allowedInText: !!a.allowedInText,
    allowedInMath: a.allowedInMath === void 0 ? !0 : a.allowedInMath,
    numOptionalArgs: a.numOptionalArgs || 0,
    infix: !!a.infix,
    primitive: !!a.primitive,
    handler: n
  }, c = 0; c < t.length; ++c)
    Hn[t[c]] = u;
  e && (i && (_t[e] = i), l && (Ut[e] = l));
}
function j0(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: a
  } = r;
  B({
    type: e,
    names: [],
    props: {
      numArgs: 0
    },
    handler() {
      throw new Error("Should never be called.");
    },
    htmlBuilder: t,
    mathmlBuilder: a
  });
}
var Gt = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, we = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, w0 = S.makeSpan, Al = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"], Ml = ["rightmost", "mrel", "mclose", "mpunct"], Nl = {
  display: $.DISPLAY,
  text: $.TEXT,
  script: $.SCRIPT,
  scriptscript: $.SCRIPTSCRIPT
}, El = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Ne = function(e, t, a, n) {
  n === void 0 && (n = [null, null]);
  for (var i = [], l = 0; l < e.length; l++) {
    var u = ne(e[l], t);
    if (u instanceof mt) {
      var c = u.children;
      i.push(...c);
    } else
      i.push(u);
  }
  if (S.tryCombineChars(i), !a)
    return i;
  var d = t;
  if (e.length === 1) {
    var g = e[0];
    g.type === "sizing" ? d = t.havingSize(g.size) : g.type === "styling" && (d = t.havingStyle(Nl[g.style]));
  }
  var p = w0([n[0] || "leftmost"], [], t), x = w0([n[1] || "rightmost"], [], t), k = a === "root";
  return Fa(i, (A, T) => {
    var z = T.classes[0], N = A.classes[0];
    z === "mbin" && Ml.includes(N) ? T.classes[0] = "mord" : N === "mbin" && Al.includes(z) && (A.classes[0] = "mord");
  }, {
    node: p
  }, x, k), Fa(i, (A, T) => {
    var z = Ir(T), N = Ir(A), O = z && N ? A.hasClass("mtight") ? Tl[z][N] : Sl[z][N] : null;
    if (O)
      return S.makeGlue(O, d);
  }, {
    node: p
  }, x, k), i;
}, Fa = function r(e, t, a, n, i) {
  n && e.push(n);
  for (var l = 0; l < e.length; l++) {
    var u = e[l], c = qn(u);
    if (c) {
      r(c.children, t, a, null, i);
      continue;
    }
    var d = !u.hasClass("mspace");
    if (d) {
      var g = t(u, a.node);
      g && (a.insertAfter ? a.insertAfter(g) : (e.unshift(g), l++));
    }
    d ? a.node = u : i && u.hasClass("newline") && (a.node = w0(["leftmost"])), a.insertAfter = /* @__PURE__ */ ((p) => (x) => {
      e.splice(p + 1, 0, x), l++;
    })(l);
  }
  n && e.pop();
}, qn = function(e) {
  return e instanceof mt || e instanceof $r || e instanceof ht && e.hasClass("enclosing") ? e : null;
}, zl = function r(e, t) {
  var a = qn(e);
  if (a) {
    var n = a.children;
    if (n.length) {
      if (t === "right")
        return r(n[n.length - 1], "right");
      if (t === "left")
        return r(n[0], "left");
    }
  }
  return e;
}, Ir = function(e, t) {
  return e ? (t && (e = zl(e, t)), El[e.classes[0]] || null) : null;
}, ut = function(e, t) {
  var a = ["nulldelimiter"].concat(e.baseSizingClasses());
  return w0(t.concat(a));
}, ne = function(e, t, a) {
  if (!e)
    return w0();
  if (_t[e.type]) {
    var n = _t[e.type](e, t);
    if (a && t.size !== a.size) {
      n = w0(t.sizingClasses(a), [n], t);
      var i = t.sizeMultiplier / a.sizeMultiplier;
      n.height *= i, n.depth *= i;
    }
    return n;
  } else
    throw new R("Got group of unknown type: '" + e.type + "'");
};
function Et(r, e) {
  var t = w0(["base"], r, e), a = w0(["strut"]);
  return a.style.height = L(t.height + t.depth), t.depth && (a.style.verticalAlign = L(-t.depth)), t.children.unshift(a), t;
}
function Or(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var a = Ne(r, e, "root"), n;
  a.length === 2 && a[1].hasClass("tag") && (n = a.pop());
  for (var i = [], l = [], u = 0; u < a.length; u++)
    if (l.push(a[u]), a[u].hasClass("mbin") || a[u].hasClass("mrel") || a[u].hasClass("allowbreak")) {
      for (var c = !1; u < a.length - 1 && a[u + 1].hasClass("mspace") && !a[u + 1].hasClass("newline"); )
        u++, l.push(a[u]), a[u].hasClass("nobreak") && (c = !0);
      c || (i.push(Et(l, e)), l = []);
    } else a[u].hasClass("newline") && (l.pop(), l.length > 0 && (i.push(Et(l, e)), l = []), i.push(a[u]));
  l.length > 0 && i.push(Et(l, e));
  var d;
  t ? (d = Et(Ne(t, e, !0)), d.classes = ["tag"], i.push(d)) : n && i.push(n);
  var g = w0(["katex-html"], i);
  if (g.setAttribute("aria-hidden", "true"), d) {
    var p = d.children[0];
    p.style.height = L(g.height + g.depth), g.depth && (p.style.verticalAlign = L(-g.depth));
  }
  return g;
}
function jn(r) {
  return new mt(r);
}
class Ue {
  constructor(e, t, a) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = a || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = C0(this.classes));
    for (var a = 0; a < this.children.length; a++)
      if (this.children[a] instanceof o0 && this.children[a + 1] instanceof o0) {
        for (var n = this.children[a].toText() + this.children[++a].toText(); this.children[a + 1] instanceof o0; )
          n += this.children[++a].toText();
        e.appendChild(new o0(n).toNode());
      } else
        e.appendChild(this.children[a].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += ie.escape(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + ie.escape(C0(this.classes)) + '"'), e += ">";
    for (var a = 0; a < this.children.length; a++)
      e += this.children[a].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class o0 {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return ie.escape(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Cl {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", L(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + L(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var C = {
  MathNode: Ue,
  TextNode: o0,
  SpaceNode: Cl,
  newDocumentFragment: jn
}, Ze = function(e, t, a) {
  return de[t][e] && de[t][e].replace && e.charCodeAt(0) !== 55349 && !(Dn.hasOwnProperty(e) && a && (a.fontFamily && a.fontFamily.slice(4, 6) === "tt" || a.font && a.font.slice(4, 6) === "tt")) && (e = de[t][e].replace), new C.TextNode(e);
}, Wr = function(e) {
  return e.length === 1 ? e[0] : new C.MathNode("mrow", e);
}, Yr = function(e, t) {
  if (t.fontFamily === "texttt")
    return "monospace";
  if (t.fontFamily === "textsf")
    return t.fontShape === "textit" && t.fontWeight === "textbf" ? "sans-serif-bold-italic" : t.fontShape === "textit" ? "sans-serif-italic" : t.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
  if (t.fontShape === "textit" && t.fontWeight === "textbf")
    return "bold-italic";
  if (t.fontShape === "textit")
    return "italic";
  if (t.fontWeight === "textbf")
    return "bold";
  var a = t.font;
  if (!a || a === "mathnormal")
    return null;
  var n = e.mode;
  if (a === "mathit")
    return "italic";
  if (a === "boldsymbol")
    return e.type === "textord" ? "bold" : "bold-italic";
  if (a === "mathbf")
    return "bold";
  if (a === "mathbb")
    return "double-struck";
  if (a === "mathsfit")
    return "sans-serif-italic";
  if (a === "mathfrak")
    return "fraktur";
  if (a === "mathscr" || a === "mathcal")
    return "script";
  if (a === "mathsf")
    return "sans-serif";
  if (a === "mathtt")
    return "monospace";
  var i = e.text;
  if (["\\imath", "\\jmath"].includes(i))
    return null;
  de[n][i] && de[n][i].replace && (i = de[n][i].replace);
  var l = S.fontMap[a].fontName;
  return Gr(i, l, n) ? S.fontMap[a].variant : null;
};
function dr(r) {
  if (!r)
    return !1;
  if (r.type === "mi" && r.children.length === 1) {
    var e = r.children[0];
    return e instanceof o0 && e.text === ".";
  } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
    var t = r.children[0];
    return t instanceof o0 && t.text === ",";
  } else
    return !1;
}
var _e = function(e, t, a) {
  if (e.length === 1) {
    var n = he(e[0], t);
    return a && n instanceof Ue && n.type === "mo" && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n];
  }
  for (var i = [], l, u = 0; u < e.length; u++) {
    var c = he(e[u], t);
    if (c instanceof Ue && l instanceof Ue) {
      if (c.type === "mtext" && l.type === "mtext" && c.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
        l.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && l.type === "mn") {
        l.children.push(...c.children);
        continue;
      } else if (dr(c) && l.type === "mn") {
        l.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && dr(l))
        c.children = [...l.children, ...c.children], i.pop();
      else if ((c.type === "msup" || c.type === "msub") && c.children.length >= 1 && (l.type === "mn" || dr(l))) {
        var d = c.children[0];
        d instanceof Ue && d.type === "mn" && (d.children = [...l.children, ...d.children], i.pop());
      } else if (l.type === "mi" && l.children.length === 1) {
        var g = l.children[0];
        if (g instanceof o0 && g.text === "̸" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
          var p = c.children[0];
          p instanceof o0 && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1), i.pop());
        }
      }
    }
    i.push(c), l = c;
  }
  return i;
}, D0 = function(e, t, a) {
  return Wr(_e(e, t, a));
}, he = function(e, t) {
  if (!e)
    return new C.MathNode("mrow");
  if (Ut[e.type]) {
    var a = Ut[e.type](e, t);
    return a;
  } else
    throw new R("Got group of unknown type: '" + e.type + "'");
};
function Pa(r, e, t, a, n) {
  var i = _e(r, t), l;
  i.length === 1 && i[0] instanceof Ue && ["mrow", "mtable"].includes(i[0].type) ? l = i[0] : l = new C.MathNode("mrow", i);
  var u = new C.MathNode("annotation", [new C.TextNode(e)]);
  u.setAttribute("encoding", "application/x-tex");
  var c = new C.MathNode("semantics", [l, u]), d = new C.MathNode("math", [c]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), a && d.setAttribute("display", "block");
  var g = n ? "katex" : "katex-mathml";
  return S.makeSpan([g], [d]);
}
var Fn = function(e) {
  return new g0({
    style: e.displayMode ? $.DISPLAY : $.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Pn = function(e, t) {
  if (t.displayMode) {
    var a = ["katex-display"];
    t.leqno && a.push("leqno"), t.fleqn && a.push("fleqn"), e = S.makeSpan(a, [e]);
  }
  return e;
}, Rl = function(e, t, a) {
  var n = Fn(a), i;
  if (a.output === "mathml")
    return Pa(e, t, n, a.displayMode, !0);
  if (a.output === "html") {
    var l = Or(e, n);
    i = S.makeSpan(["katex"], [l]);
  } else {
    var u = Pa(e, t, n, a.displayMode, !1), c = Or(e, n);
    i = S.makeSpan(["katex"], [u, c]);
  }
  return Pn(i, a);
}, Dl = function(e, t, a) {
  var n = Fn(a), i = Or(e, n), l = S.makeSpan(["katex"], [i]);
  return Pn(l, a);
}, Ll = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, Il = function(e) {
  var t = new C.MathNode("mo", [new C.TextNode(Ll[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Ol = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, Bl = function(e) {
  return e.type === "ordgroup" ? e.body.length : 1;
}, Hl = function(e, t) {
  function a() {
    var u = 4e5, c = e.label.slice(1);
    if (["widehat", "widecheck", "widetilde", "utilde"].includes(c)) {
      var d = e, g = Bl(d.base), p, x, k;
      if (g > 5)
        c === "widehat" || c === "widecheck" ? (p = 420, u = 2364, k = 0.42, x = c + "4") : (p = 312, u = 2340, k = 0.34, x = "tilde4");
      else {
        var A = [1, 1, 2, 2, 3, 3][g];
        c === "widehat" || c === "widecheck" ? (u = [0, 1062, 2364, 2364, 2364][A], p = [0, 239, 300, 360, 420][A], k = [0, 0.24, 0.3, 0.3, 0.36, 0.42][A], x = c + A) : (u = [0, 600, 1033, 2339, 2340][A], p = [0, 260, 286, 306, 312][A], k = [0, 0.26, 0.286, 0.3, 0.306, 0.34][A], x = "tilde" + A);
      }
      var T = new R0(x), z = new y0([T], {
        width: "100%",
        height: L(k),
        viewBox: "0 0 " + u + " " + p,
        preserveAspectRatio: "none"
      });
      return {
        span: S.makeSvgSpan([], [z], t),
        minWidth: 0,
        height: k
      };
    } else {
      var N = [], O = Ol[c], [P, j, U] = O, Q = U / 1e3, ee = P.length, le, Z;
      if (ee === 1) {
        var ze = O[3];
        le = ["hide-tail"], Z = [ze];
      } else if (ee === 2)
        le = ["halfarrow-left", "halfarrow-right"], Z = ["xMinYMin", "xMaxYMin"];
      else if (ee === 3)
        le = ["brace-left", "brace-center", "brace-right"], Z = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + ee + " children.");
      for (var H = 0; H < ee; H++) {
        var V = new R0(P[H]), re = new y0([V], {
          width: "400em",
          height: L(Q),
          viewBox: "0 0 " + u + " " + U,
          preserveAspectRatio: Z[H] + " slice"
        }), ae = S.makeSvgSpan([le[H]], [re], t);
        if (ee === 1)
          return {
            span: ae,
            minWidth: j,
            height: Q
          };
        ae.style.height = L(Q), N.push(ae);
      }
      return {
        span: S.makeSpan(["stretchy"], N, t),
        minWidth: j,
        height: Q
      };
    }
  }
  var {
    span: n,
    minWidth: i,
    height: l
  } = a();
  return n.height = l, n.style.height = L(l), i > 0 && (n.style.minWidth = L(i)), n;
}, ql = function(e, t, a, n, i) {
  var l, u = e.height + e.depth + a + n;
  if (/fbox|color|angl/.test(t)) {
    if (l = S.makeSpan(["stretchy", t], [], i), t === "fbox") {
      var c = i.color && i.getColor();
      c && (l.style.borderColor = c);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new Dr({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && d.push(new Dr({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var g = new y0(d, {
      width: "100%",
      height: L(u)
    });
    l = S.makeSvgSpan([], [g], i);
  }
  return l.height = u, l.style.height = L(u), l;
}, k0 = {
  encloseSpan: ql,
  mathMLnode: Il,
  svgSpan: Hl
};
function J(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function Xr(r) {
  var e = Wt(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function Wt(r) {
  return r && (r.type === "atom" || ul.hasOwnProperty(r.type)) ? r : null;
}
var Zr = (r, e) => {
  var t, a, n;
  r && r.type === "supsub" ? (a = J(r.base, "accent"), t = a.base, r.base = t, n = ll(ne(r, e)), r.base = a) : (a = J(r, "accent"), t = a.base);
  var i = ne(t, e.havingCrampedStyle()), l = a.isShifty && ie.isCharacterBox(t), u = 0;
  if (l) {
    var c = ie.getBaseElem(t), d = ne(c, e.havingCrampedStyle());
    u = Ia(d).skew;
  }
  var g = a.label === "\\c", p = g ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), x;
  if (a.isStretchy)
    x = k0.svgSpan(a, e), x = S.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: x,
        wrapperClasses: ["svg-align"],
        wrapperStyle: u > 0 ? {
          width: "calc(100% - " + L(2 * u) + ")",
          marginLeft: L(2 * u)
        } : void 0
      }]
    }, e);
  else {
    var k, A;
    a.label === "\\vec" ? (k = S.staticSvg("vec", e), A = S.svgData.vec[1]) : (k = S.makeOrd({
      mode: a.mode,
      text: a.label
    }, e, "textord"), k = Ia(k), k.italic = 0, A = k.width, g && (p += k.depth)), x = S.makeSpan(["accent-body"], [k]);
    var T = a.label === "\\textcircled";
    T && (x.classes.push("accent-full"), p = i.height);
    var z = u;
    T || (z -= A / 2), x.style.left = L(z), a.label === "\\textcircled" && (x.style.top = ".2em"), x = S.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -p
      }, {
        type: "elem",
        elem: x
      }]
    }, e);
  }
  var N = S.makeSpan(["mord", "accent"], [x], e);
  return n ? (n.children[0] = N, n.height = Math.max(N.height, n.height), n.classes[0] = "mord", n) : N;
}, _n = (r, e) => {
  var t = r.isStretchy ? k0.mathMLnode(r.label) : new C.MathNode("mo", [Ze(r.label, r.mode)]), a = new C.MathNode("mover", [he(r.base, e), t]);
  return a.setAttribute("accent", "true"), a;
}, jl = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
B({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var t = Gt(e[0]), a = !jl.test(r.funcName), n = !a || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: a,
      isShifty: n,
      base: t
    };
  },
  htmlBuilder: Zr,
  mathmlBuilder: _n
});
B({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    // unless in strict mode
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = e[0], a = r.parser.mode;
    return a === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), a = "text"), {
      type: "accent",
      mode: a,
      label: r.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  },
  htmlBuilder: Zr,
  mathmlBuilder: _n
});
B({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: a,
      base: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = ne(r.base, e), a = k0.svgSpan(r, e), n = r.label === "\\utilde" ? 0.12 : 0, i = S.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: a,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: n
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return S.makeSpan(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = k0.mathMLnode(r.label), a = new C.MathNode("munder", [he(r.base, e), t]);
    return a.setAttribute("accentunder", "true"), a;
  }
});
var zt = (r) => {
  var e = new C.MathNode("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
B({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: a,
      funcName: n
    } = r;
    return {
      type: "xArrow",
      mode: a.mode,
      label: n,
      body: e[0],
      below: t[0]
    };
  },
  // Flow is unable to correctly infer the type of `group`, even though it's
  // unambiguously determined from the passed-in `type` above.
  htmlBuilder(r, e) {
    var t = e.style, a = e.havingStyle(t.sup()), n = S.wrapFragment(ne(r.body, a, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    n.classes.push(i + "-arrow-pad");
    var l;
    r.below && (a = e.havingStyle(t.sub()), l = S.wrapFragment(ne(r.below, a, e), e), l.classes.push(i + "-arrow-pad"));
    var u = k0.svgSpan(r, e), c = -e.fontMetrics().axisHeight + 0.5 * u.height, d = -e.fontMetrics().axisHeight - 0.5 * u.height - 0.111;
    (n.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= n.depth);
    var g;
    if (l) {
      var p = -e.fontMetrics().axisHeight + l.height + 0.5 * u.height + 0.111;
      g = S.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: d
        }, {
          type: "elem",
          elem: u,
          shift: c
        }, {
          type: "elem",
          elem: l,
          shift: p
        }]
      }, e);
    } else
      g = S.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: n,
          shift: d
        }, {
          type: "elem",
          elem: u,
          shift: c
        }]
      }, e);
    return g.children[0].children[0].children[1].classes.push("svg-align"), S.makeSpan(["mrel", "x-arrow"], [g], e);
  },
  mathmlBuilder(r, e) {
    var t = k0.mathMLnode(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var a;
    if (r.body) {
      var n = zt(he(r.body, e));
      if (r.below) {
        var i = zt(he(r.below, e));
        a = new C.MathNode("munderover", [t, i, n]);
      } else
        a = new C.MathNode("mover", [t, n]);
    } else if (r.below) {
      var l = zt(he(r.below, e));
      a = new C.MathNode("munder", [t, l]);
    } else
      a = zt(), a = new C.MathNode("mover", [t, a]);
    return a;
  }
});
var Fl = S.makeSpan;
function Un(r, e) {
  var t = Ne(r.body, e, !0);
  return Fl([r.mclass], t, e);
}
function Gn(r, e) {
  var t, a = _e(r.body, e);
  return r.mclass === "minner" ? t = new C.MathNode("mpadded", a) : r.mclass === "mord" ? r.isCharacterBox ? (t = a[0], t.type = "mi") : t = new C.MathNode("mi", a) : (r.isCharacterBox ? (t = a[0], t.type = "mo") : t = new C.MathNode("mo", a), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : r.mclass === "mopen" || r.mclass === "mclose" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0em") : r.mclass === "minner" && (t.attributes.lspace = "0.0556em", t.attributes.width = "+0.1111em")), t;
}
B({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + a.slice(5),
      // TODO(kevinb): don't prefix with 'm'
      body: we(n),
      isCharacterBox: ie.isCharacterBox(n)
    };
  },
  htmlBuilder: Un,
  mathmlBuilder: Gn
});
var Yt = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
B({
  type: "mclass",
  names: ["\\@binrel"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Yt(e[0]),
      body: we(e[1]),
      isCharacterBox: ie.isCharacterBox(e[1])
    };
  }
});
B({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  props: {
    numArgs: 2
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, n = e[1], i = e[0], l;
    a !== "\\stackrel" ? l = Yt(n) : l = "mrel";
    var u = {
      type: "op",
      mode: n.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: a !== "\\stackrel",
      body: we(n)
    }, c = {
      type: "supsub",
      mode: i.mode,
      base: u,
      sup: a === "\\underset" ? null : i,
      sub: a === "\\underset" ? i : null
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: l,
      body: [c],
      isCharacterBox: ie.isCharacterBox(c)
    };
  },
  htmlBuilder: Un,
  mathmlBuilder: Gn
});
B({
  type: "pmb",
  names: ["\\pmb"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: Yt(e[0]),
      body: we(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Ne(r.body, e, !0), a = S.makeSpan([r.mclass], t, e);
    return a.style.textShadow = "0.02em 0.01em 0.04px", a;
  },
  mathmlBuilder(r, e) {
    var t = _e(r.body, e), a = new C.MathNode("mstyle", t);
    return a.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), a;
  }
});
var Pl = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, _a = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display"
}), Ua = (r) => r.type === "textord" && r.text === "@", _l = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function Ul(r, e, t) {
  var a = Pl[r];
  switch (a) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(a, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var n = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: a,
        mode: "math",
        family: "rel"
      }, l = t.callFunction("\\Big", [i], []), u = t.callFunction("\\\\cdright", [e[1]], []), c = {
        type: "ordgroup",
        mode: "math",
        body: [n, l, u]
      };
      return t.callFunction("\\\\cdparent", [c], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [d], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function Gl(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\")
      r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new R("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var a = [], n = [a], i = 0; i < e.length; i++) {
    for (var l = e[i], u = _a(), c = 0; c < l.length; c++)
      if (!Ua(l[c]))
        u.body.push(l[c]);
      else {
        a.push(u), c += 1;
        var d = Xr(l[c]).text, g = new Array(2);
        if (g[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, g[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !("=|.".indexOf(d) > -1)) if ("<>AV".indexOf(d) > -1)
          for (var p = 0; p < 2; p++) {
            for (var x = !0, k = c + 1; k < l.length; k++) {
              if (_l(l[k], d)) {
                x = !1, c = k;
                break;
              }
              if (Ua(l[k]))
                throw new R("Missing a " + d + " character to complete a CD arrow.", l[k]);
              g[p].body.push(l[k]);
            }
            if (x)
              throw new R("Missing a " + d + " character to complete a CD arrow.", l[c]);
          }
        else
          throw new R('Expected one of "<>AV=|." after @', l[c]);
        var A = Ul(d, g, r), T = {
          type: "styling",
          body: [A],
          mode: "math",
          style: "display"
          // CD is always displaystyle.
        };
        a.push(T), u = _a();
      }
    i % 2 === 0 ? a.push(u) : a.shift(), a = [], n.push(a);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var z = new Array(n[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: n,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: z,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(n.length + 1).fill([])
  };
}
B({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: a.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()), a = S.wrapFragment(ne(r.label, t, e), e);
    return a.classes.push("cd-label-" + r.side), a.style.bottom = L(0.8 - a.depth), a.height = 0, a.depth = 0, a;
  },
  mathmlBuilder(r, e) {
    var t = new C.MathNode("mrow", [he(r.label, e)]);
    return t = new C.MathNode("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new C.MathNode("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
B({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = S.wrapFragment(ne(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new C.MathNode("mrow", [he(r.fragment, e)]);
  }
});
B({
  type: "textord",
  names: ["\\@char"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    for (var {
      parser: t
    } = r, a = J(e[0], "ordgroup"), n = a.body, i = "", l = 0; l < n.length; l++) {
      var u = J(n[l], "textord");
      i += u.text;
    }
    var c = parseInt(i), d;
    if (isNaN(c))
      throw new R("\\@char has non-numeric argument " + i);
    if (c < 0 || c >= 1114111)
      throw new R("\\@char with invalid code point " + i);
    return c <= 65535 ? d = String.fromCharCode(c) : (c -= 65536, d = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: d
    };
  }
});
var $n = (r, e) => {
  var t = Ne(r.body, e.withColor(r.color), !1);
  return S.makeFragment(t);
}, Vn = (r, e) => {
  var t = _e(r.body, e.withColor(r.color)), a = new C.MathNode("mstyle", t);
  return a.setAttribute("mathcolor", r.color), a;
};
B({
  type: "color",
  names: ["\\textcolor"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "original"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, a = J(e[0], "color-token").color, n = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: we(n)
    };
  },
  htmlBuilder: $n,
  mathmlBuilder: Vn
});
B({
  type: "color",
  names: ["\\color"],
  props: {
    numArgs: 1,
    allowedInText: !0,
    argTypes: ["color"]
  },
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: a
    } = r, n = J(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", n);
    var i = t.parseExpression(!0, a);
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: i
    };
  },
  htmlBuilder: $n,
  mathmlBuilder: Vn
});
B({
  type: "cr",
  names: ["\\\\"],
  props: {
    numArgs: 0,
    numOptionalArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    var {
      parser: a
    } = r, n = a.gullet.future().text === "[" ? a.parseSizeGroup(!0) : null, i = !a.settings.displayMode || !a.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: a.mode,
      newLine: i,
      size: n && J(n, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = S.makeSpan(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = L(be(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new C.MathNode("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", L(be(r.size, e)))), t;
  }
});
var Br = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Wn = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new R("Expected a control sequence", r);
  return e;
}, $l = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, Yn = (r, e, t, a) => {
  var n = r.gullet.macros.get(t.text);
  n == null && (t.noexpand = !0, n = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, n, a);
};
B({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    e.consumeSpaces();
    var a = e.fetch();
    if (Br[a.text])
      return (t === "\\global" || t === "\\\\globallong") && (a.text = Br[a.text]), J(e.parseFunction(), "internal");
    throw new R("Invalid token after macro prefix", a);
  }
});
B({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, a = e.gullet.popToken(), n = a.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(n))
      throw new R("Expected a control sequence", a);
    for (var i = 0, l, u = [[]]; e.gullet.future().text !== "{"; )
      if (a = e.gullet.popToken(), a.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), u[i].push("{");
          break;
        }
        if (a = e.gullet.popToken(), !/^[1-9]$/.test(a.text))
          throw new R('Invalid argument number "' + a.text + '"');
        if (parseInt(a.text) !== i + 1)
          throw new R('Argument number "' + a.text + '" out of order');
        i++, u.push([]);
      } else {
        if (a.text === "EOF")
          throw new R("Expected a macro definition");
        u[i].push(a.text);
      }
    var {
      tokens: c
    } = e.gullet.consumeArg();
    return l && c.unshift(l), (t === "\\edef" || t === "\\xdef") && (c = e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(n, {
      tokens: c,
      numArgs: i,
      delimiters: u
    }, t === Br[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
B({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, a = Wn(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var n = $l(e);
    return Yn(e, a, n, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
B({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, a = Wn(e.gullet.popToken()), n = e.gullet.popToken(), i = e.gullet.popToken();
    return Yn(e, a, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(n), {
      type: "internal",
      mode: e.mode
    };
  }
});
var st = function(e, t, a) {
  var n = de.math[e] && de.math[e].replace, i = Gr(n || e, t, a);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Jr = function(e, t, a, n) {
  var i = a.havingBaseStyle(t), l = S.makeSpan(n.concat(i.sizingClasses(a)), [e], a), u = i.sizeMultiplier / a.sizeMultiplier;
  return l.height *= u, l.depth *= u, l.maxFontSize = i.sizeMultiplier, l;
}, Xn = function(e, t, a) {
  var n = t.havingBaseStyle(a), i = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = L(i), e.height -= i, e.depth += i;
}, Vl = function(e, t, a, n, i, l) {
  var u = S.makeSymbol(e, "Main-Regular", i, n), c = Jr(u, t, n, l);
  return a && Xn(c, n, t), c;
}, Wl = function(e, t, a, n) {
  return S.makeSymbol(e, "Size" + t + "-Regular", a, n);
}, Zn = function(e, t, a, n, i, l) {
  var u = Wl(e, t, i, n), c = Jr(S.makeSpan(["delimsizing", "size" + t], [u], n), $.TEXT, n, l);
  return a && Xn(c, n, $.TEXT), c;
}, fr = function(e, t, a) {
  var n;
  t === "Size1-Regular" ? n = "delim-size1" : n = "delim-size4";
  var i = S.makeSpan(["delimsizinginner", n], [S.makeSpan([], [S.makeSymbol(e, t, a)])]);
  return {
    type: "elem",
    elem: i
  };
}, pr = function(e, t, a) {
  var n = l0["Size4-Regular"][e.charCodeAt(0)] ? l0["Size4-Regular"][e.charCodeAt(0)][4] : l0["Size1-Regular"][e.charCodeAt(0)][4], i = new R0("inner", Ks(e, Math.round(1e3 * t))), l = new y0([i], {
    width: L(n),
    height: L(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + L(n),
    viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), u = S.makeSvgSpan([], [l], a);
  return u.height = t, u.style.height = L(t), u.style.width = L(n), {
    type: "elem",
    elem: u
  };
}, Hr = 8e-3, Ct = {
  type: "kern",
  size: -1 * Hr
}, Yl = ["|", "\\lvert", "\\rvert", "\\vert"], Xl = ["\\|", "\\lVert", "\\rVert", "\\Vert"], Jn = function(e, t, a, n, i, l) {
  var u, c, d, g, p = "", x = 0;
  u = d = g = e, c = null;
  var k = "Size1-Regular";
  e === "\\uparrow" ? d = g = "⏐" : e === "\\Uparrow" ? d = g = "‖" : e === "\\downarrow" ? u = d = "⏐" : e === "\\Downarrow" ? u = d = "‖" : e === "\\updownarrow" ? (u = "\\uparrow", d = "⏐", g = "\\downarrow") : e === "\\Updownarrow" ? (u = "\\Uparrow", d = "‖", g = "\\Downarrow") : Yl.includes(e) ? (d = "∣", p = "vert", x = 333) : Xl.includes(e) ? (d = "∥", p = "doublevert", x = 556) : e === "[" || e === "\\lbrack" ? (u = "⎡", d = "⎢", g = "⎣", k = "Size4-Regular", p = "lbrack", x = 667) : e === "]" || e === "\\rbrack" ? (u = "⎤", d = "⎥", g = "⎦", k = "Size4-Regular", p = "rbrack", x = 667) : e === "\\lfloor" || e === "⌊" ? (d = u = "⎢", g = "⎣", k = "Size4-Regular", p = "lfloor", x = 667) : e === "\\lceil" || e === "⌈" ? (u = "⎡", d = g = "⎢", k = "Size4-Regular", p = "lceil", x = 667) : e === "\\rfloor" || e === "⌋" ? (d = u = "⎥", g = "⎦", k = "Size4-Regular", p = "rfloor", x = 667) : e === "\\rceil" || e === "⌉" ? (u = "⎤", d = g = "⎥", k = "Size4-Regular", p = "rceil", x = 667) : e === "(" || e === "\\lparen" ? (u = "⎛", d = "⎜", g = "⎝", k = "Size4-Regular", p = "lparen", x = 875) : e === ")" || e === "\\rparen" ? (u = "⎞", d = "⎟", g = "⎠", k = "Size4-Regular", p = "rparen", x = 875) : e === "\\{" || e === "\\lbrace" ? (u = "⎧", c = "⎨", g = "⎩", d = "⎪", k = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (u = "⎫", c = "⎬", g = "⎭", d = "⎪", k = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (u = "⎧", g = "⎩", d = "⎪", k = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (u = "⎫", g = "⎭", d = "⎪", k = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (u = "⎧", g = "⎭", d = "⎪", k = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (u = "⎫", g = "⎩", d = "⎪", k = "Size4-Regular");
  var A = st(u, k, i), T = A.height + A.depth, z = st(d, k, i), N = z.height + z.depth, O = st(g, k, i), P = O.height + O.depth, j = 0, U = 1;
  if (c !== null) {
    var Q = st(c, k, i);
    j = Q.height + Q.depth, U = 2;
  }
  var ee = T + P + j, le = Math.max(0, Math.ceil((t - ee) / (U * N))), Z = ee + le * U * N, ze = n.fontMetrics().axisHeight;
  a && (ze *= n.sizeMultiplier);
  var H = Z / 2 - ze, V = [];
  if (p.length > 0) {
    var re = Z - T - P, ae = Math.round(Z * 1e3), ce = Qs(p, Math.round(re * 1e3)), me = new R0(p, ce), ue = (x / 1e3).toFixed(3) + "em", fe = (ae / 1e3).toFixed(3) + "em", Ae = new y0([me], {
      width: ue,
      height: fe,
      viewBox: "0 0 " + x + " " + ae
    }), M = S.makeSvgSpan([], [Ae], n);
    M.height = ae / 1e3, M.style.width = ue, M.style.height = fe, V.push({
      type: "elem",
      elem: M
    });
  } else {
    if (V.push(fr(g, k, i)), V.push(Ct), c === null) {
      var I = Z - T - P + 2 * Hr;
      V.push(pr(d, I, n));
    } else {
      var Y = (Z - T - P - j) / 2 + 2 * Hr;
      V.push(pr(d, Y, n)), V.push(Ct), V.push(fr(c, k, i)), V.push(Ct), V.push(pr(d, Y, n));
    }
    V.push(Ct), V.push(fr(u, k, i));
  }
  var X = n.havingBaseStyle($.TEXT), xe = S.makeVList({
    positionType: "bottom",
    positionData: H,
    children: V
  }, X);
  return Jr(S.makeSpan(["delimsizing", "mult"], [xe], X), $.TEXT, n, l);
}, vr = 80, gr = 0.08, br = function(e, t, a, n, i) {
  var l = Js(e, n, a), u = new R0(e, l), c = new y0([u], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: L(t),
    viewBox: "0 0 400000 " + a,
    preserveAspectRatio: "xMinYMin slice"
  });
  return S.makeSvgSpan(["hide-tail"], [c], i);
}, Zl = function(e, t) {
  var a = t.havingBaseSizing(), n = ti("\\surd", e * a.sizeMultiplier, ei, a), i = a.sizeMultiplier, l = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), u, c = 0, d = 0, g = 0, p;
  return n.type === "small" ? (g = 1e3 + 1e3 * l + vr, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), c = (1 + l + gr) / i, d = (1 + l) / i, u = br("sqrtMain", c, g, l, t), u.style.minWidth = "0.853em", p = 0.833 / i) : n.type === "large" ? (g = (1e3 + vr) * lt[n.size], d = (lt[n.size] + l) / i, c = (lt[n.size] + l + gr) / i, u = br("sqrtSize" + n.size, c, g, l, t), u.style.minWidth = "1.02em", p = 1 / i) : (c = e + l + gr, d = e + l, g = Math.floor(1e3 * e + l) + vr, u = br("sqrtTall", c, g, l, t), u.style.minWidth = "0.742em", p = 1.056), u.height = d, u.style.height = L(c), {
    span: u,
    advanceWidth: p,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + l) * i
  };
}, Kn = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"], Jl = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"], Qn = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"], lt = [0, 1.2, 1.8, 2.4, 3], Kl = function(e, t, a, n, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), Kn.includes(e) || Qn.includes(e))
    return Zn(e, t, !1, a, n, i);
  if (Jl.includes(e))
    return Jn(e, lt[t], !1, a, n, i);
  throw new R("Illegal delimiter: '" + e + "'");
}, Ql = [{
  type: "small",
  style: $.SCRIPTSCRIPT
}, {
  type: "small",
  style: $.SCRIPT
}, {
  type: "small",
  style: $.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], e1 = [{
  type: "small",
  style: $.SCRIPTSCRIPT
}, {
  type: "small",
  style: $.SCRIPT
}, {
  type: "small",
  style: $.TEXT
}, {
  type: "stack"
}], ei = [{
  type: "small",
  style: $.SCRIPTSCRIPT
}, {
  type: "small",
  style: $.SCRIPT
}, {
  type: "small",
  style: $.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], t1 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  throw new Error("Add support for delim type '" + e.type + "' here.");
}, ti = function(e, t, a, n) {
  for (var i = Math.min(2, 3 - n.style.size), l = i; l < a.length && a[l].type !== "stack"; l++) {
    var u = st(e, t1(a[l]), "math"), c = u.height + u.depth;
    if (a[l].type === "small") {
      var d = n.havingBaseStyle(a[l].style);
      c *= d.sizeMultiplier;
    }
    if (c > t)
      return a[l];
  }
  return a[a.length - 1];
}, ri = function(e, t, a, n, i, l) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var u;
  Qn.includes(e) ? u = Ql : Kn.includes(e) ? u = ei : u = e1;
  var c = ti(e, t, u, n);
  return c.type === "small" ? Vl(e, c.style, a, n, i, l) : c.type === "large" ? Zn(e, c.size, a, n, i, l) : Jn(e, t, a, n, i, l);
}, r1 = function(e, t, a, n, i, l) {
  var u = n.fontMetrics().axisHeight * n.sizeMultiplier, c = 901, d = 5 / n.fontMetrics().ptPerEm, g = Math.max(t - u, a + u), p = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    g / 500 * c,
    2 * g - d
  );
  return ri(e, p, !0, n, i, l);
}, x0 = {
  sqrtImage: Zl,
  sizedDelim: Kl,
  sizeToMaxHeight: lt,
  customSizedDelim: ri,
  leftRightDelim: r1
}, Ga = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, a1 = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
function Xt(r, e) {
  var t = Wt(r);
  if (t && a1.includes(t.text))
    return t;
  throw t ? new R("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new R("Invalid delimiter type '" + r.type + "'", r);
}
B({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  props: {
    numArgs: 1,
    argTypes: ["primitive"]
  },
  handler: (r, e) => {
    var t = Xt(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Ga[r.funcName].size,
      mclass: Ga[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? S.makeSpan([r.mclass]) : x0.sizedDelim(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(Ze(r.delim, r.mode));
    var t = new C.MathNode("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var a = L(x0.sizeToMaxHeight[r.size]);
    return t.setAttribute("minsize", a), t.setAttribute("maxsize", a), t;
  }
});
function $a(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
B({
  type: "leftright-right",
  names: ["\\right"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new R("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: Xt(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
B({
  type: "leftright",
  names: ["\\left"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Xt(e[0], r), a = r.parser;
    ++a.leftrightDepth;
    var n = a.parseExpression(!1);
    --a.leftrightDepth, a.expect("\\right", !1);
    var i = J(a.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: a.mode,
      body: n,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (r, e) => {
    $a(r);
    for (var t = Ne(r.body, e, !0, ["mopen", "mclose"]), a = 0, n = 0, i = !1, l = 0; l < t.length; l++)
      t[l].isMiddle ? i = !0 : (a = Math.max(t[l].height, a), n = Math.max(t[l].depth, n));
    a *= e.sizeMultiplier, n *= e.sizeMultiplier;
    var u;
    if (r.left === "." ? u = ut(e, ["mopen"]) : u = x0.leftRightDelim(r.left, a, n, e, r.mode, ["mopen"]), t.unshift(u), i)
      for (var c = 1; c < t.length; c++) {
        var d = t[c], g = d.isMiddle;
        g && (t[c] = x0.leftRightDelim(g.delim, a, n, g.options, r.mode, []));
      }
    var p;
    if (r.right === ".")
      p = ut(e, ["mclose"]);
    else {
      var x = r.rightColor ? e.withColor(r.rightColor) : e;
      p = x0.leftRightDelim(r.right, a, n, x, r.mode, ["mclose"]);
    }
    return t.push(p), S.makeSpan(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    $a(r);
    var t = _e(r.body, e);
    if (r.left !== ".") {
      var a = new C.MathNode("mo", [Ze(r.left, r.mode)]);
      a.setAttribute("fence", "true"), t.unshift(a);
    }
    if (r.right !== ".") {
      var n = new C.MathNode("mo", [Ze(r.right, r.mode)]);
      n.setAttribute("fence", "true"), r.rightColor && n.setAttribute("mathcolor", r.rightColor), t.push(n);
    }
    return Wr(t);
  }
});
B({
  type: "middle",
  names: ["\\middle"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var t = Xt(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new R("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    if (r.delim === ".")
      t = ut(e, []);
    else {
      t = x0.sizedDelim(r.delim, 1, e, r.mode, []);
      var a = {
        delim: r.delim,
        options: e
      };
      t.isMiddle = a;
    }
    return t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? Ze("|", "text") : Ze(r.delim, r.mode), a = new C.MathNode("mo", [t]);
    return a.setAttribute("fence", "true"), a.setAttribute("lspace", "0.05em"), a.setAttribute("rspace", "0.05em"), a;
  }
});
var Kr = (r, e) => {
  var t = S.wrapFragment(ne(r.body, e), e), a = r.label.slice(1), n = e.sizeMultiplier, i, l = 0, u = ie.isCharacterBox(r.body);
  if (a === "sout")
    i = S.makeSpan(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / n, l = -0.5 * e.fontMetrics().xHeight;
  else if (a === "phase") {
    var c = be({
      number: 0.6,
      unit: "pt"
    }, e), d = be({
      number: 0.35,
      unit: "ex"
    }, e), g = e.havingBaseSizing();
    n = n / g.sizeMultiplier;
    var p = t.height + t.depth + c + d;
    t.style.paddingLeft = L(p / 2 + c);
    var x = Math.floor(1e3 * p * n), k = Xs(x), A = new y0([new R0("phase", k)], {
      width: "400em",
      height: L(x / 1e3),
      viewBox: "0 0 400000 " + x,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = S.makeSvgSpan(["hide-tail"], [A], e), i.style.height = L(p), l = t.depth + c + d;
  } else {
    /cancel/.test(a) ? u || t.classes.push("cancel-pad") : a === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var T = 0, z = 0, N = 0;
    /box/.test(a) ? (N = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
      // User override.
    ), T = e.fontMetrics().fboxsep + (a === "colorbox" ? 0 : N), z = T) : a === "angl" ? (N = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), T = 4 * N, z = Math.max(0, 0.25 - t.depth)) : (T = u ? 0.2 : 0, z = T), i = k0.encloseSpan(t, a, T, z, e), /fbox|boxed|fcolorbox/.test(a) ? (i.style.borderStyle = "solid", i.style.borderWidth = L(N)) : a === "angl" && N !== 0.049 && (i.style.borderTopWidth = L(N), i.style.borderRightWidth = L(N)), l = t.depth + z, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var O;
  if (r.backgroundColor)
    O = S.makeVList({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: l
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    }, e);
  else {
    var P = /cancel|phase/.test(a) ? ["svg-align"] : [];
    O = S.makeVList({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: l,
          wrapperClasses: P
        }
      ]
    }, e);
  }
  return /cancel/.test(a) && (O.height = t.height, O.depth = t.depth), /cancel/.test(a) && !u ? S.makeSpan(["mord", "cancel-lap"], [O], e) : S.makeSpan(["mord"], [O], e);
}, Qr = (r, e) => {
  var t = 0, a = new C.MathNode(r.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [he(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      a.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      a.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      a.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      a.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      a.setAttribute("notation", "box");
      break;
    case "\\angl":
      a.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, a.setAttribute("width", "+" + 2 * t + "pt"), a.setAttribute("height", "+" + 2 * t + "pt"), a.setAttribute("lspace", t + "pt"), a.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var n = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
          // user override
        );
        a.setAttribute("style", "border: " + n + "em solid " + String(r.borderColor));
      }
      break;
    case "\\xcancel":
      a.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && a.setAttribute("mathbackground", r.backgroundColor), a;
};
B({
  type: "enclose",
  names: ["\\colorbox"],
  props: {
    numArgs: 2,
    allowedInText: !0,
    argTypes: ["color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: a,
      funcName: n
    } = r, i = J(e[0], "color-token").color, l = e[1];
    return {
      type: "enclose",
      mode: a.mode,
      label: n,
      backgroundColor: i,
      body: l
    };
  },
  htmlBuilder: Kr,
  mathmlBuilder: Qr
});
B({
  type: "enclose",
  names: ["\\fcolorbox"],
  props: {
    numArgs: 3,
    allowedInText: !0,
    argTypes: ["color", "color", "text"]
  },
  handler(r, e, t) {
    var {
      parser: a,
      funcName: n
    } = r, i = J(e[0], "color-token").color, l = J(e[1], "color-token").color, u = e[2];
    return {
      type: "enclose",
      mode: a.mode,
      label: n,
      backgroundColor: l,
      borderColor: i,
      body: u
    };
  },
  htmlBuilder: Kr,
  mathmlBuilder: Qr
});
B({
  type: "enclose",
  names: ["\\fbox"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
B({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: a,
      body: n
    };
  },
  htmlBuilder: Kr,
  mathmlBuilder: Qr
});
B({
  type: "enclose",
  names: ["\\angl"],
  props: {
    numArgs: 1,
    argTypes: ["hbox"],
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var ai = {};
function u0(r) {
  for (var {
    type: e,
    names: t,
    props: a,
    handler: n,
    htmlBuilder: i,
    mathmlBuilder: l
  } = r, u = {
    type: e,
    numArgs: a.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: n
  }, c = 0; c < t.length; ++c)
    ai[t[c]] = u;
  i && (_t[e] = i), l && (Ut[e] = l);
}
var ni = {};
function h(r, e) {
  ni[r] = e;
}
function Va(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var Zt = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new R("{" + r.envName + "} can be used only in display mode.");
};
function ea(r) {
  if (r.indexOf("ed") === -1)
    return r.indexOf("*") === -1;
}
function L0(r, e, t) {
  var {
    hskipBeforeAndAfter: a,
    addJot: n,
    cols: i,
    arraystretch: l,
    colSeparationType: u,
    autoTag: c,
    singleRow: d,
    emptySingleRow: g,
    maxNumCols: p,
    leqno: x
  } = e;
  if (r.gullet.beginGroup(), d || r.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
    var k = r.gullet.expandMacroAsText("\\arraystretch");
    if (k == null)
      l = 1;
    else if (l = parseFloat(k), !l || l < 0)
      throw new R("Invalid \\arraystretch: " + k);
  }
  r.gullet.beginGroup();
  var A = [], T = [A], z = [], N = [], O = c != null ? [] : void 0;
  function P() {
    c && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function j() {
    O && (r.gullet.macros.get("\\df@tag") ? (O.push(r.subparse([new Ge("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : O.push(!!c && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (P(), N.push(Va(r)); ; ) {
    var U = r.parseExpression(!1, d ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup(), U = {
      type: "ordgroup",
      mode: r.mode,
      body: U
    }, t && (U = {
      type: "styling",
      mode: r.mode,
      style: t,
      body: [U]
    }), A.push(U);
    var Q = r.fetch().text;
    if (Q === "&") {
      if (p && A.length === p) {
        if (d || u)
          throw new R("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (Q === "\\end") {
      j(), A.length === 1 && U.type === "styling" && U.body[0].body.length === 0 && (T.length > 1 || !g) && T.pop(), N.length < T.length + 1 && N.push([]);
      break;
    } else if (Q === "\\\\") {
      r.consume();
      var ee = void 0;
      r.gullet.future().text !== " " && (ee = r.parseSizeGroup(!0)), z.push(ee ? ee.value : null), j(), N.push(Va(r)), A = [], T.push(A), P();
    } else
      throw new R("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: n,
    arraystretch: l,
    body: T,
    cols: i,
    rowGaps: z,
    hskipBeforeAndAfter: a,
    hLinesBeforeRow: N,
    colSeparationType: u,
    tags: O,
    leqno: x
  };
}
function ta(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var c0 = function(e, t) {
  var a, n, i = e.body.length, l = e.hLinesBeforeRow, u = 0, c = new Array(i), d = [], g = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
    // User override.
  ), p = 1 / t.fontMetrics().ptPerEm, x = 5 * p;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var k = t.havingStyle($.SCRIPT).sizeMultiplier;
    x = 0.2778 * (k / t.sizeMultiplier);
  }
  var A = e.colSeparationType === "CD" ? be({
    number: 3,
    unit: "ex"
  }, t) : 12 * p, T = 3 * p, z = e.arraystretch * A, N = 0.7 * z, O = 0.3 * z, P = 0;
  function j(Ke) {
    for (var h0 = 0; h0 < Ke.length; ++h0)
      h0 > 0 && (P += 0.25), d.push({
        pos: P,
        isDashed: Ke[h0]
      });
  }
  for (j(l[0]), a = 0; a < e.body.length; ++a) {
    var U = e.body[a], Q = N, ee = O;
    u < U.length && (u = U.length);
    var le = new Array(U.length);
    for (n = 0; n < U.length; ++n) {
      var Z = ne(U[n], t);
      ee < Z.depth && (ee = Z.depth), Q < Z.height && (Q = Z.height), le[n] = Z;
    }
    var ze = e.rowGaps[a], H = 0;
    ze && (H = be(ze, t), H > 0 && (H += O, ee < H && (ee = H), H = 0)), e.addJot && (ee += T), le.height = Q, le.depth = ee, P += Q, le.pos = P, P += ee + H, c[a] = le, j(l[a + 1]);
  }
  var V = P / 2 + t.fontMetrics().axisHeight, re = e.cols || [], ae = [], ce, me, ue = [];
  if (e.tags && e.tags.some((Ke) => Ke))
    for (a = 0; a < i; ++a) {
      var fe = c[a], Ae = fe.pos - V, M = e.tags[a], I = void 0;
      M === !0 ? I = S.makeSpan(["eqn-num"], [], t) : M === !1 ? I = S.makeSpan([], [], t) : I = S.makeSpan([], Ne(M, t, !0), t), I.depth = fe.depth, I.height = fe.height, ue.push({
        type: "elem",
        elem: I,
        shift: Ae
      });
    }
  for (
    n = 0, me = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    n < u || me < re.length;
    ++n, ++me
  ) {
    for (var Y = re[me] || {}, X = !0; Y.type === "separator"; ) {
      if (X || (ce = S.makeSpan(["arraycolsep"], []), ce.style.width = L(t.fontMetrics().doubleRuleSep), ae.push(ce)), Y.separator === "|" || Y.separator === ":") {
        var xe = Y.separator === "|" ? "solid" : "dashed", K = S.makeSpan(["vertical-separator"], [], t);
        K.style.height = L(P), K.style.borderRightWidth = L(g), K.style.borderRightStyle = xe, K.style.margin = "0 " + L(-g / 2);
        var Ve = P - V;
        Ve && (K.style.verticalAlign = L(-Ve)), ae.push(K);
      } else
        throw new R("Invalid separator type: " + Y.separator);
      me++, Y = re[me] || {}, X = !1;
    }
    if (!(n >= u)) {
      var He = void 0;
      (n > 0 || e.hskipBeforeAndAfter) && (He = ie.deflt(Y.pregap, x), He !== 0 && (ce = S.makeSpan(["arraycolsep"], []), ce.style.width = L(He), ae.push(ce)));
      var oe = [];
      for (a = 0; a < i; ++a) {
        var qe = c[a], We = qe[n];
        if (We) {
          var F0 = qe.pos - V;
          We.depth = qe.depth, We.height = qe.height, oe.push({
            type: "elem",
            elem: We,
            shift: F0
          });
        }
      }
      oe = S.makeVList({
        positionType: "individualShift",
        children: oe
      }, t), oe = S.makeSpan(["col-align-" + (Y.align || "c")], [oe]), ae.push(oe), (n < u - 1 || e.hskipBeforeAndAfter) && (He = ie.deflt(Y.postgap, x), He !== 0 && (ce = S.makeSpan(["arraycolsep"], []), ce.style.width = L(He), ae.push(ce)));
    }
  }
  if (c = S.makeSpan(["mtable"], ae), d.length > 0) {
    for (var ft = S.makeLineSpan("hline", t, g), T0 = S.makeLineSpan("hdashline", t, g), A0 = [{
      type: "elem",
      elem: c,
      shift: 0
    }]; d.length > 0; ) {
      var r0 = d.pop(), P0 = r0.pos - V;
      r0.isDashed ? A0.push({
        type: "elem",
        elem: T0,
        shift: P0
      }) : A0.push({
        type: "elem",
        elem: ft,
        shift: P0
      });
    }
    c = S.makeVList({
      positionType: "individualShift",
      children: A0
    }, t);
  }
  if (ue.length === 0)
    return S.makeSpan(["mord"], [c], t);
  var I0 = S.makeVList({
    positionType: "individualShift",
    children: ue
  }, t);
  return I0 = S.makeSpan(["tag"], [I0], t), S.makeFragment([c, I0]);
}, n1 = {
  c: "center ",
  l: "left ",
  r: "right "
}, m0 = function(e, t) {
  for (var a = [], n = new C.MathNode("mtd", [], ["mtr-glue"]), i = new C.MathNode("mtd", [], ["mml-eqn-num"]), l = 0; l < e.body.length; l++) {
    for (var u = e.body[l], c = [], d = 0; d < u.length; d++)
      c.push(new C.MathNode("mtd", [he(u[d], t)]));
    e.tags && e.tags[l] && (c.unshift(n), c.push(n), e.leqno ? c.unshift(i) : c.push(i)), a.push(new C.MathNode("mtr", c));
  }
  var g = new C.MathNode("mtable", a), p = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  g.setAttribute("rowspacing", L(p));
  var x = "", k = "";
  if (e.cols && e.cols.length > 0) {
    var A = e.cols, T = "", z = !1, N = 0, O = A.length;
    A[0].type === "separator" && (x += "top ", N = 1), A[A.length - 1].type === "separator" && (x += "bottom ", O -= 1);
    for (var P = N; P < O; P++)
      A[P].type === "align" ? (k += n1[A[P].align], z && (T += "none "), z = !0) : A[P].type === "separator" && z && (T += A[P].separator === "|" ? "solid " : "dashed ", z = !1);
    g.setAttribute("columnalign", k.trim()), /[sd]/.test(T) && g.setAttribute("columnlines", T.trim());
  }
  if (e.colSeparationType === "align") {
    for (var j = e.cols || [], U = "", Q = 1; Q < j.length; Q++)
      U += Q % 2 ? "0em " : "1em ";
    g.setAttribute("columnspacing", U.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? g.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? g.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? g.setAttribute("columnspacing", "0.5em") : g.setAttribute("columnspacing", "1em");
  var ee = "", le = e.hLinesBeforeRow;
  x += le[0].length > 0 ? "left " : "", x += le[le.length - 1].length > 0 ? "right " : "";
  for (var Z = 1; Z < le.length - 1; Z++)
    ee += le[Z].length === 0 ? "none " : le[Z][0] ? "dashed " : "solid ";
  return /[sd]/.test(ee) && g.setAttribute("rowlines", ee.trim()), x !== "" && (g = new C.MathNode("menclose", [g]), g.setAttribute("notation", x.trim())), e.arraystretch && e.arraystretch < 1 && (g = new C.MathNode("mstyle", [g]), g.setAttribute("scriptlevel", "1")), g;
}, ii = function(e, t) {
  e.envName.indexOf("ed") === -1 && Zt(e);
  var a = [], n = e.envName.indexOf("at") > -1 ? "alignat" : "align", i = e.envName === "split", l = L0(e.parser, {
    cols: a,
    addJot: !0,
    autoTag: i ? void 0 : ea(e.envName),
    emptySingleRow: !0,
    colSeparationType: n,
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), u, c = 0, d = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var g = "", p = 0; p < t[0].body.length; p++) {
      var x = J(t[0].body[p], "textord");
      g += x.text;
    }
    u = Number(g), c = u * 2;
  }
  var k = !c;
  l.body.forEach(function(N) {
    for (var O = 1; O < N.length; O += 2) {
      var P = J(N[O], "styling"), j = J(P.body[0], "ordgroup");
      j.body.unshift(d);
    }
    if (k)
      c < N.length && (c = N.length);
    else {
      var U = N.length / 2;
      if (u < U)
        throw new R("Too many math in a row: " + ("expected " + u + ", but got " + U), N[0]);
    }
  });
  for (var A = 0; A < c; ++A) {
    var T = "r", z = 0;
    A % 2 === 1 ? T = "l" : A > 0 && k && (z = 1), a[A] = {
      type: "align",
      align: T,
      pregap: z,
      postgap: 0
    };
  }
  return l.colSeparationType = k ? "align" : "alignat", l;
};
u0({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Wt(e[0]), a = t ? [e[0]] : J(e[0], "ordgroup").body, n = a.map(function(l) {
      var u = Xr(l), c = u.text;
      if ("lcr".indexOf(c) !== -1)
        return {
          type: "align",
          align: c
        };
      if (c === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (c === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new R("Unknown column alignment: " + c, l);
    }), i = {
      cols: n,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: n.length
    };
    return L0(r.parser, i, ta(r.envName));
  },
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[r.envName.replace("*", "")], t = "c", a = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var n = r.parser;
      if (n.consumeSpaces(), n.fetch().text === "[") {
        if (n.consume(), n.consumeSpaces(), t = n.fetch().text, "lcr".indexOf(t) === -1)
          throw new R("Expected l or c or r", n.nextToken);
        n.consume(), n.consumeSpaces(), n.expect("]"), n.consume(), a.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = L0(r.parser, a, ta(r.envName)), l = Math.max(0, ...i.body.map((u) => u.length));
    return i.cols = new Array(l).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = L0(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Wt(e[0]), a = t ? [e[0]] : J(e[0], "ordgroup").body, n = a.map(function(l) {
      var u = Xr(l), c = u.text;
      if ("lc".indexOf(c) !== -1)
        return {
          type: "align",
          align: c
        };
      throw new R("Unknown column alignment: " + c, l);
    });
    if (n.length > 1)
      throw new R("{subarray} can contain only one column");
    var i = {
      cols: n,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    };
    if (i = L0(r.parser, i, "script"), i.body.length > 0 && i.body[0].length > 1)
      throw new R("{subarray} can contain only one column");
    return i;
  },
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = L0(r.parser, e, ta(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.indexOf("r") > -1 ? "." : "\\{",
      right: r.envName.indexOf("r") > -1 ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: ii,
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    ["gather", "gather*"].includes(r.envName) && Zt(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: ea(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return L0(r.parser, e, "display");
  },
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: ii,
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Zt(r);
    var e = {
      autoTag: ea(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return L0(r.parser, e, "display");
  },
  htmlBuilder: c0,
  mathmlBuilder: m0
});
u0({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return Zt(r), Gl(r.parser);
  },
  htmlBuilder: c0,
  mathmlBuilder: m0
});
h("\\nonumber", "\\gdef\\@eqnsw{0}");
h("\\notag", "\\nonumber");
B({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !0
  },
  handler(r, e) {
    throw new R(r.funcName + " valid only within array environment");
  }
});
var Wa = ai;
B({
  type: "environment",
  names: ["\\begin", "\\end"],
  props: {
    numArgs: 1,
    argTypes: ["text"]
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0];
    if (n.type !== "ordgroup")
      throw new R("Invalid environment name", n);
    for (var i = "", l = 0; l < n.body.length; ++l)
      i += J(n.body[l], "textord").text;
    if (a === "\\begin") {
      if (!Wa.hasOwnProperty(i))
        throw new R("No such environment: " + i, n);
      var u = Wa[i], {
        args: c,
        optArgs: d
      } = t.parseArguments("\\begin{" + i + "}", u), g = {
        mode: t.mode,
        envName: i,
        parser: t
      }, p = u.handler(g, c, d);
      t.expect("\\end", !1);
      var x = t.nextToken, k = J(t.parseFunction(), "environment");
      if (k.name !== i)
        throw new R("Mismatch: \\begin{" + i + "} matched by \\end{" + k.name + "}", x);
      return p;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: n
    };
  }
});
var si = (r, e) => {
  var t = r.font, a = e.withFont(t);
  return ne(r.body, a);
}, li = (r, e) => {
  var t = r.font, a = e.withFont(t);
  return he(r.body, a);
}, Ya = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak",
  "\\bm": "\\boldsymbol"
};
B({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  props: {
    numArgs: 1,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, n = Gt(e[0]), i = a;
    return i in Ya && (i = Ya[i]), {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: n
    };
  },
  htmlBuilder: si,
  mathmlBuilder: li
});
B({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0], n = ie.isCharacterBox(a);
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Yt(a),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: a
      }],
      isCharacterBox: n
    };
  }
});
B({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a,
      breakOnTokenText: n
    } = r, {
      mode: i
    } = t, l = t.parseExpression(!0, n), u = "math" + a.slice(1);
    return {
      type: "font",
      mode: i,
      font: u,
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: l
      }
    };
  },
  htmlBuilder: si,
  mathmlBuilder: li
});
var oi = (r, e) => {
  var t = e;
  return r === "display" ? t = t.id >= $.SCRIPT.id ? t.text() : $.DISPLAY : r === "text" && t.size === $.DISPLAY.size ? t = $.TEXT : r === "script" ? t = $.SCRIPT : r === "scriptscript" && (t = $.SCRIPTSCRIPT), t;
}, ra = (r, e) => {
  var t = oi(r.size, e.style), a = t.fracNum(), n = t.fracDen(), i;
  i = e.havingStyle(a);
  var l = ne(r.numer, i, e);
  if (r.continued) {
    var u = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
    l.height = l.height < u ? u : l.height, l.depth = l.depth < c ? c : l.depth;
  }
  i = e.havingStyle(n);
  var d = ne(r.denom, i, e), g, p, x;
  r.hasBarLine ? (r.barSize ? (p = be(r.barSize, e), g = S.makeLineSpan("frac-line", e, p)) : g = S.makeLineSpan("frac-line", e), p = g.height, x = g.height) : (g = null, p = 0, x = e.fontMetrics().defaultRuleThickness);
  var k, A, T;
  t.size === $.DISPLAY.size || r.size === "display" ? (k = e.fontMetrics().num1, p > 0 ? A = 3 * x : A = 7 * x, T = e.fontMetrics().denom1) : (p > 0 ? (k = e.fontMetrics().num2, A = x) : (k = e.fontMetrics().num3, A = 3 * x), T = e.fontMetrics().denom2);
  var z;
  if (g) {
    var O = e.fontMetrics().axisHeight;
    k - l.depth - (O + 0.5 * p) < A && (k += A - (k - l.depth - (O + 0.5 * p))), O - 0.5 * p - (d.height - T) < A && (T += A - (O - 0.5 * p - (d.height - T)));
    var P = -(O - 0.5 * p);
    z = S.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: T
      }, {
        type: "elem",
        elem: g,
        shift: P
      }, {
        type: "elem",
        elem: l,
        shift: -k
      }]
    }, e);
  } else {
    var N = k - l.depth - (d.height - T);
    N < A && (k += 0.5 * (A - N), T += 0.5 * (A - N)), z = S.makeVList({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: T
      }, {
        type: "elem",
        elem: l,
        shift: -k
      }]
    }, e);
  }
  i = e.havingStyle(t), z.height *= i.sizeMultiplier / e.sizeMultiplier, z.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var j;
  t.size === $.DISPLAY.size ? j = e.fontMetrics().delim1 : t.size === $.SCRIPTSCRIPT.size ? j = e.havingStyle($.SCRIPT).fontMetrics().delim2 : j = e.fontMetrics().delim2;
  var U, Q;
  return r.leftDelim == null ? U = ut(e, ["mopen"]) : U = x0.customSizedDelim(r.leftDelim, j, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? Q = S.makeSpan([]) : r.rightDelim == null ? Q = ut(e, ["mclose"]) : Q = x0.customSizedDelim(r.rightDelim, j, !0, e.havingStyle(t), r.mode, ["mclose"]), S.makeSpan(["mord"].concat(i.sizingClasses(e)), [U, S.makeSpan(["mfrac"], [z]), Q], e);
}, aa = (r, e) => {
  var t = new C.MathNode("mfrac", [he(r.numer, e), he(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var a = be(r.barSize, e);
    t.setAttribute("linethickness", L(a));
  }
  var n = oi(r.size, e.style);
  if (n.size !== e.style.size) {
    t = new C.MathNode("mstyle", [t]);
    var i = n.size === $.DISPLAY.size ? "true" : "false";
    t.setAttribute("displaystyle", i), t.setAttribute("scriptlevel", "0");
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var l = [];
    if (r.leftDelim != null) {
      var u = new C.MathNode("mo", [new C.TextNode(r.leftDelim.replace("\\", ""))]);
      u.setAttribute("fence", "true"), l.push(u);
    }
    if (l.push(t), r.rightDelim != null) {
      var c = new C.MathNode("mo", [new C.TextNode(r.rightDelim.replace("\\", ""))]);
      c.setAttribute("fence", "true"), l.push(c);
    }
    return Wr(l);
  }
  return t;
};
B({
  type: "genfrac",
  names: [
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  props: {
    numArgs: 2,
    allowedInArgument: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0], i = e[1], l, u = null, c = null, d = "auto";
    switch (a) {
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        l = !0;
        break;
      case "\\\\atopfrac":
        l = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        l = !1, u = "(", c = ")";
        break;
      case "\\\\bracefrac":
        l = !1, u = "\\{", c = "\\}";
        break;
      case "\\\\brackfrac":
        l = !1, u = "[", c = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    switch (a) {
      case "\\dfrac":
      case "\\dbinom":
        d = "display";
        break;
      case "\\tfrac":
      case "\\tbinom":
        d = "text";
        break;
    }
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !1,
      numer: n,
      denom: i,
      hasBarLine: l,
      leftDelim: u,
      rightDelim: c,
      size: d,
      barSize: null
    };
  },
  htmlBuilder: ra,
  mathmlBuilder: aa
});
B({
  type: "genfrac",
  names: ["\\cfrac"],
  props: {
    numArgs: 2
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0], i = e[1];
    return {
      type: "genfrac",
      mode: t.mode,
      continued: !0,
      numer: n,
      denom: i,
      hasBarLine: !0,
      leftDelim: null,
      rightDelim: null,
      size: "display",
      barSize: null
    };
  }
});
B({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  props: {
    numArgs: 0,
    infix: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t,
      token: a
    } = r, n;
    switch (t) {
      case "\\over":
        n = "\\frac";
        break;
      case "\\choose":
        n = "\\binom";
        break;
      case "\\atop":
        n = "\\\\atopfrac";
        break;
      case "\\brace":
        n = "\\\\bracefrac";
        break;
      case "\\brack":
        n = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: n,
      token: a
    };
  }
});
var Xa = ["display", "text", "script", "scriptscript"], Za = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
B({
  type: "genfrac",
  names: ["\\genfrac"],
  props: {
    numArgs: 6,
    allowedInArgument: !0,
    argTypes: ["math", "math", "size", "text", "math", "math"]
  },
  handler(r, e) {
    var {
      parser: t
    } = r, a = e[4], n = e[5], i = Gt(e[0]), l = i.type === "atom" && i.family === "open" ? Za(i.text) : null, u = Gt(e[1]), c = u.type === "atom" && u.family === "close" ? Za(u.text) : null, d = J(e[2], "size"), g, p = null;
    d.isBlank ? g = !0 : (p = d.value, g = p.number > 0);
    var x = "auto", k = e[3];
    if (k.type === "ordgroup") {
      if (k.body.length > 0) {
        var A = J(k.body[0], "textord");
        x = Xa[Number(A.text)];
      }
    } else
      k = J(k, "textord"), x = Xa[Number(k.text)];
    return {
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: n,
      continued: !1,
      hasBarLine: g,
      barSize: p,
      leftDelim: l,
      rightDelim: c,
      size: x
    };
  },
  htmlBuilder: ra,
  mathmlBuilder: aa
});
B({
  type: "infix",
  names: ["\\above"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    infix: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a,
      token: n
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: J(e[0], "size").value,
      token: n
    };
  }
});
B({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  props: {
    numArgs: 3,
    argTypes: ["math", "size", "math"]
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0], i = Is(J(e[1], "infix").size), l = e[2], u = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: l,
      continued: !1,
      hasBarLine: u,
      barSize: i,
      leftDelim: null,
      rightDelim: null,
      size: "auto"
    };
  },
  htmlBuilder: ra,
  mathmlBuilder: aa
});
var ui = (r, e) => {
  var t = e.style, a, n;
  r.type === "supsub" ? (a = r.sup ? ne(r.sup, e.havingStyle(t.sup()), e) : ne(r.sub, e.havingStyle(t.sub()), e), n = J(r.base, "horizBrace")) : n = J(r, "horizBrace");
  var i = ne(n.base, e.havingBaseStyle($.DISPLAY)), l = k0.svgSpan(n, e), u;
  if (n.isOver ? (u = S.makeVList({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: l
    }]
  }, e), u.children[0].children[0].children[1].classes.push("svg-align")) : (u = S.makeVList({
    positionType: "bottom",
    positionData: i.depth + 0.1 + l.height,
    children: [{
      type: "elem",
      elem: l
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }, e), u.children[0].children[0].children[0].classes.push("svg-align")), a) {
    var c = S.makeSpan(["mord", n.isOver ? "mover" : "munder"], [u], e);
    n.isOver ? u = S.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: a
      }]
    }, e) : u = S.makeVList({
      positionType: "bottom",
      positionData: c.depth + 0.2 + a.height + a.depth,
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: c
      }]
    }, e);
  }
  return S.makeSpan(["mord", n.isOver ? "mover" : "munder"], [u], e);
}, i1 = (r, e) => {
  var t = k0.mathMLnode(r.label);
  return new C.MathNode(r.isOver ? "mover" : "munder", [he(r.base, e), t]);
};
B({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: a,
      isOver: /^\\over/.test(a),
      base: e[0]
    };
  },
  htmlBuilder: ui,
  mathmlBuilder: i1
});
B({
  type: "href",
  names: ["\\href"],
  props: {
    numArgs: 2,
    argTypes: ["url", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[1], n = J(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: n
    }) ? {
      type: "href",
      mode: t.mode,
      href: n,
      body: we(a)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = Ne(r.body, e, !1);
    return S.makeAnchor(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = D0(r.body, e);
    return t instanceof Ue || (t = new Ue("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
B({
  type: "href",
  names: ["\\url"],
  props: {
    numArgs: 1,
    argTypes: ["url"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = J(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: a
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var n = [], i = 0; i < a.length; i++) {
      var l = a[i];
      l === "~" && (l = "\\textasciitilde"), n.push({
        type: "textord",
        mode: "text",
        text: l
      });
    }
    var u = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: n
    };
    return {
      type: "href",
      mode: t.mode,
      href: a,
      body: we(u)
    };
  }
});
B({
  type: "hbox",
  names: ["\\hbox"],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "hbox",
      mode: t.mode,
      body: we(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Ne(r.body, e, !1);
    return S.makeFragment(t);
  },
  mathmlBuilder(r, e) {
    return new C.MathNode("mrow", _e(r.body, e));
  }
});
B({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  props: {
    numArgs: 2,
    argTypes: ["raw", "original"],
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a,
      token: n
    } = r, i = J(e[0], "raw").string, l = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var u, c = {};
    switch (a) {
      case "\\htmlClass":
        c.class = i, u = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        c.id = i, u = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        c.style = i, u = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var d = i.split(","), g = 0; g < d.length; g++) {
          var p = d[g], x = p.indexOf("=");
          if (x < 0)
            throw new R("\\htmlData key/value '" + p + "' missing equals sign");
          var k = p.slice(0, x), A = p.slice(x + 1);
          c["data-" + k.trim()] = A;
        }
        u = {
          command: "\\htmlData",
          attributes: c
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(u) ? {
      type: "html",
      mode: t.mode,
      attributes: c,
      body: we(l)
    } : t.formatUnsupportedCmd(a);
  },
  htmlBuilder: (r, e) => {
    var t = Ne(r.body, e, !1), a = ["enclosing"];
    r.attributes.class && a.push(...r.attributes.class.trim().split(/\s+/));
    var n = S.makeSpan(a, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && n.setAttribute(i, r.attributes[i]);
    return n;
  },
  mathmlBuilder: (r, e) => D0(r.body, e)
});
B({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  props: {
    numArgs: 2,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: we(e[0]),
      mathml: we(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ne(r.html, e, !1);
    return S.makeFragment(t);
  },
  mathmlBuilder: (r, e) => D0(r.mathml, e)
});
var xr = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new R("Invalid size: '" + e + "' in \\includegraphics");
  var a = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!En(a))
    throw new R("Invalid unit: '" + a.unit + "' in \\includegraphics.");
  return a;
};
B({
  type: "includegraphics",
  names: ["\\includegraphics"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    argTypes: ["raw", "url"],
    allowedInText: !1
  },
  handler: (r, e, t) => {
    var {
      parser: a
    } = r, n = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, l = {
      number: 0,
      unit: "em"
    }, u = "";
    if (t[0])
      for (var c = J(t[0], "raw").string, d = c.split(","), g = 0; g < d.length; g++) {
        var p = d[g].split("=");
        if (p.length === 2) {
          var x = p[1].trim();
          switch (p[0].trim()) {
            case "alt":
              u = x;
              break;
            case "width":
              n = xr(x);
              break;
            case "height":
              i = xr(x);
              break;
            case "totalheight":
              l = xr(x);
              break;
            default:
              throw new R("Invalid key: '" + p[0] + "' in \\includegraphics.");
          }
        }
      }
    var k = J(e[0], "url").url;
    return u === "" && (u = k, u = u.replace(/^.*[\\/]/, ""), u = u.substring(0, u.lastIndexOf("."))), a.settings.isTrusted({
      command: "\\includegraphics",
      url: k
    }) ? {
      type: "includegraphics",
      mode: a.mode,
      alt: u,
      width: n,
      height: i,
      totalheight: l,
      src: k
    } : a.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = be(r.height, e), a = 0;
    r.totalheight.number > 0 && (a = be(r.totalheight, e) - t);
    var n = 0;
    r.width.number > 0 && (n = be(r.width, e));
    var i = {
      height: L(t + a)
    };
    n > 0 && (i.width = L(n)), a > 0 && (i.verticalAlign = L(-a));
    var l = new il(r.src, r.alt, i);
    return l.height = t, l.depth = a, l;
  },
  mathmlBuilder: (r, e) => {
    var t = new C.MathNode("mglyph", []);
    t.setAttribute("alt", r.alt);
    var a = be(r.height, e), n = 0;
    if (r.totalheight.number > 0 && (n = be(r.totalheight, e) - a, t.setAttribute("valign", L(-n))), t.setAttribute("height", L(a + n)), r.width.number > 0) {
      var i = be(r.width, e);
      t.setAttribute("width", L(i));
    }
    return t.setAttribute("src", r.src), t;
  }
});
B({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  props: {
    numArgs: 1,
    argTypes: ["size"],
    primitive: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, n = J(e[0], "size");
    if (t.settings.strict) {
      var i = a[1] === "m", l = n.value.unit === "mu";
      i ? (l || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " supports only mu units, " + ("not " + n.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " works only in math mode")) : l && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + a + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: n.value
    };
  },
  htmlBuilder(r, e) {
    return S.makeGlue(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = be(r.dimension, e);
    return new C.SpaceNode(t);
  }
});
B({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: a.slice(5),
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap" ? (t = S.makeSpan([], [ne(r.body, e)]), t = S.makeSpan(["inner"], [t], e)) : t = S.makeSpan(["inner"], [ne(r.body, e)]);
    var a = S.makeSpan(["fix"], []), n = S.makeSpan([r.alignment], [t, a], e), i = S.makeSpan(["strut"]);
    return i.style.height = L(n.height + n.depth), n.depth && (i.style.verticalAlign = L(-n.depth)), n.children.unshift(i), n = S.makeSpan(["thinbox"], [n], e), S.makeSpan(["mord", "vbox"], [n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new C.MathNode("mpadded", [he(r.body, e)]);
    if (r.alignment !== "rlap") {
      var a = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", a + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
B({
  type: "styling",
  names: ["\\(", "$"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    var {
      funcName: t,
      parser: a
    } = r, n = a.mode;
    a.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", l = a.parseExpression(!1, i);
    return a.expect(i), a.switchMode(n), {
      type: "styling",
      mode: a.mode,
      style: "text",
      body: l
    };
  }
});
B({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInMath: !1
  },
  handler(r, e) {
    throw new R("Mismatched " + r.funcName);
  }
});
var Ja = (r, e) => {
  switch (e.style.size) {
    case $.DISPLAY.size:
      return r.display;
    case $.TEXT.size:
      return r.text;
    case $.SCRIPT.size:
      return r.script;
    case $.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
B({
  type: "mathchoice",
  names: ["\\mathchoice"],
  props: {
    numArgs: 4,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: we(e[0]),
      text: we(e[1]),
      script: we(e[2]),
      scriptscript: we(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ja(r, e), a = Ne(t, e, !1);
    return S.makeFragment(a);
  },
  mathmlBuilder: (r, e) => {
    var t = Ja(r, e);
    return D0(t, e);
  }
});
var ci = (r, e, t, a, n, i, l) => {
  r = S.makeSpan([], [r]);
  var u = t && ie.isCharacterBox(t), c, d;
  if (e) {
    var g = ne(e, a.havingStyle(n.sup()), a);
    d = {
      elem: g,
      kern: Math.max(a.fontMetrics().bigOpSpacing1, a.fontMetrics().bigOpSpacing3 - g.depth)
    };
  }
  if (t) {
    var p = ne(t, a.havingStyle(n.sub()), a);
    c = {
      elem: p,
      kern: Math.max(a.fontMetrics().bigOpSpacing2, a.fontMetrics().bigOpSpacing4 - p.height)
    };
  }
  var x;
  if (d && c) {
    var k = a.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + r.depth + l;
    x = S.makeVList({
      positionType: "bottom",
      positionData: k,
      children: [{
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: L(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: L(i)
      }, {
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }]
    }, a);
  } else if (c) {
    var A = r.height - l;
    x = S.makeVList({
      positionType: "top",
      positionData: A,
      children: [{
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: L(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: r
      }]
    }, a);
  } else if (d) {
    var T = r.depth + l;
    x = S.makeVList({
      positionType: "bottom",
      positionData: T,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: L(i)
      }, {
        type: "kern",
        size: a.fontMetrics().bigOpSpacing5
      }]
    }, a);
  } else
    return r;
  var z = [x];
  if (c && i !== 0 && !u) {
    var N = S.makeSpan(["mspace"], [], a);
    N.style.marginRight = L(i), z.unshift(N);
  }
  return S.makeSpan(["mop", "op-limits"], z, a);
}, mi = ["\\smallint"], Z0 = (r, e) => {
  var t, a, n = !1, i;
  r.type === "supsub" ? (t = r.sup, a = r.sub, i = J(r.base, "op"), n = !0) : i = J(r, "op");
  var l = e.style, u = !1;
  l.size === $.DISPLAY.size && i.symbol && !mi.includes(i.name) && (u = !0);
  var c;
  if (i.symbol) {
    var d = u ? "Size2-Regular" : "Size1-Regular", g = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (g = i.name.slice(1), i.name = g === "oiint" ? "\\iint" : "\\iiint"), c = S.makeSymbol(i.name, d, "math", e, ["mop", "op-symbol", u ? "large-op" : "small-op"]), g.length > 0) {
      var p = c.italic, x = S.staticSvg(g + "Size" + (u ? "2" : "1"), e);
      c = S.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: c,
          shift: 0
        }, {
          type: "elem",
          elem: x,
          shift: u ? 0.08 : 0
        }]
      }, e), i.name = "\\" + g, c.classes.unshift("mop"), c.italic = p;
    }
  } else if (i.body) {
    var k = Ne(i.body, e, !0);
    k.length === 1 && k[0] instanceof Xe ? (c = k[0], c.classes[0] = "mop") : c = S.makeSpan(["mop"], k, e);
  } else {
    for (var A = [], T = 1; T < i.name.length; T++)
      A.push(S.mathsym(i.name[T], i.mode, e));
    c = S.makeSpan(["mop"], A, e);
  }
  var z = 0, N = 0;
  return (c instanceof Xe || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift && (z = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, N = c.italic), n ? ci(c, t, a, e, l, N, z) : (z && (c.style.position = "relative", c.style.top = L(z)), c);
}, dt = (r, e) => {
  var t;
  if (r.symbol)
    t = new Ue("mo", [Ze(r.name, r.mode)]), mi.includes(r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new Ue("mo", _e(r.body, e));
  else {
    t = new Ue("mi", [new o0(r.name.slice(1))]);
    var a = new Ue("mo", [Ze("⁡", "text")]);
    r.parentIsSupSub ? t = new Ue("mrow", [t, a]) : t = jn([t, a]);
  }
  return t;
}, s1 = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
B({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  props: {
    numArgs: 0
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, n = a;
    return n.length === 1 && (n = s1[n]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  },
  htmlBuilder: Z0,
  mathmlBuilder: dt
});
B({
  type: "op",
  names: ["\\mathop"],
  props: {
    numArgs: 1,
    primitive: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: we(a)
    };
  },
  htmlBuilder: Z0,
  mathmlBuilder: dt
});
var l1 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
B({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Z0,
  mathmlBuilder: dt
});
B({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  },
  htmlBuilder: Z0,
  mathmlBuilder: dt
});
B({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  props: {
    numArgs: 0,
    allowedInArgument: !0
  },
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, a = t;
    return a.length === 1 && (a = l1[a]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: Z0,
  mathmlBuilder: dt
});
var hi = (r, e) => {
  var t, a, n = !1, i;
  r.type === "supsub" ? (t = r.sup, a = r.sub, i = J(r.base, "operatorname"), n = !0) : i = J(r, "operatorname");
  var l;
  if (i.body.length > 0) {
    for (var u = i.body.map((p) => {
      var x = p.text;
      return typeof x == "string" ? {
        type: "textord",
        mode: p.mode,
        text: x
      } : p;
    }), c = Ne(u, e.withFont("mathrm"), !0), d = 0; d < c.length; d++) {
      var g = c[d];
      g instanceof Xe && (g.text = g.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    l = S.makeSpan(["mop"], c, e);
  } else
    l = S.makeSpan(["mop"], [], e);
  return n ? ci(l, t, a, e, e.style, 0, 0) : l;
}, o1 = (r, e) => {
  for (var t = _e(r.body, e.withFont("mathrm")), a = !0, n = 0; n < t.length; n++) {
    var i = t[n];
    if (!(i instanceof C.SpaceNode)) if (i instanceof C.MathNode)
      switch (i.type) {
        case "mi":
        case "mn":
        case "ms":
        case "mspace":
        case "mtext":
          break;
        // Do nothing yet.
        case "mo": {
          var l = i.children[0];
          i.children.length === 1 && l instanceof C.TextNode ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : a = !1;
          break;
        }
        default:
          a = !1;
      }
    else
      a = !1;
  }
  if (a) {
    var u = t.map((g) => g.toText()).join("");
    t = [new C.TextNode(u)];
  }
  var c = new C.MathNode("mi", t);
  c.setAttribute("mathvariant", "normal");
  var d = new C.MathNode("mo", [Ze("⁡", "text")]);
  return r.parentIsSupSub ? new C.MathNode("mrow", [c, d]) : C.newDocumentFragment([c, d]);
};
B({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  props: {
    numArgs: 1
  },
  handler: (r, e) => {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: we(n),
      alwaysHandleSupSub: a === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: hi,
  mathmlBuilder: o1
});
h("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
j0({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? S.makeFragment(Ne(r.body, e, !1)) : S.makeSpan(["mord"], Ne(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return D0(r.body, e, !0);
  }
});
B({
  type: "overline",
  names: ["\\overline"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = ne(r.body, e.havingCrampedStyle()), a = S.makeLineSpan("overline-line", e), n = e.fontMetrics().defaultRuleThickness, i = S.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * n
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: n
      }]
    }, e);
    return S.makeSpan(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new C.MathNode("mo", [new C.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var a = new C.MathNode("mover", [he(r.body, e), t]);
    return a.setAttribute("accent", "true"), a;
  }
});
B({
  type: "phantom",
  names: ["\\phantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: we(a)
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ne(r.body, e.withPhantom(), !1);
    return S.makeFragment(t);
  },
  mathmlBuilder: (r, e) => {
    var t = _e(r.body, e);
    return new C.MathNode("mphantom", t);
  }
});
B({
  type: "hphantom",
  names: ["\\hphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "hphantom",
      mode: t.mode,
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = S.makeSpan([], [ne(r.body, e.withPhantom())]);
    if (t.height = 0, t.depth = 0, t.children)
      for (var a = 0; a < t.children.length; a++)
        t.children[a].height = 0, t.children[a].depth = 0;
    return t = S.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e), S.makeSpan(["mord"], [t], e);
  },
  mathmlBuilder: (r, e) => {
    var t = _e(we(r.body), e), a = new C.MathNode("mphantom", t), n = new C.MathNode("mpadded", [a]);
    return n.setAttribute("height", "0px"), n.setAttribute("depth", "0px"), n;
  }
});
B({
  type: "vphantom",
  names: ["\\vphantom"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      parser: t
    } = r, a = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = S.makeSpan(["inner"], [ne(r.body, e.withPhantom())]), a = S.makeSpan(["fix"], []);
    return S.makeSpan(["mord", "rlap"], [t, a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = _e(we(r.body), e), a = new C.MathNode("mphantom", t), n = new C.MathNode("mpadded", [a]);
    return n.setAttribute("width", "0px"), n;
  }
});
B({
  type: "raisebox",
  names: ["\\raisebox"],
  props: {
    numArgs: 2,
    argTypes: ["size", "hbox"],
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r, a = J(e[0], "size").value, n = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: a,
      body: n
    };
  },
  htmlBuilder(r, e) {
    var t = ne(r.body, e), a = be(r.dy, e);
    return S.makeVList({
      positionType: "shift",
      positionData: -a,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    var t = new C.MathNode("mpadded", [he(r.body, e)]), a = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", a), t;
  }
});
B({
  type: "internal",
  names: ["\\relax"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    allowedInArgument: !0
  },
  handler(r) {
    var {
      parser: e
    } = r;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
B({
  type: "rule",
  names: ["\\rule"],
  props: {
    numArgs: 2,
    numOptionalArgs: 1,
    allowedInText: !0,
    allowedInMath: !0,
    argTypes: ["size", "size", "size"]
  },
  handler(r, e, t) {
    var {
      parser: a
    } = r, n = t[0], i = J(e[0], "size"), l = J(e[1], "size");
    return {
      type: "rule",
      mode: a.mode,
      shift: n && J(n, "size").value,
      width: i.value,
      height: l.value
    };
  },
  htmlBuilder(r, e) {
    var t = S.makeSpan(["mord", "rule"], [], e), a = be(r.width, e), n = be(r.height, e), i = r.shift ? be(r.shift, e) : 0;
    return t.style.borderRightWidth = L(a), t.style.borderTopWidth = L(n), t.style.bottom = L(i), t.width = a, t.height = n + i, t.depth = -i, t.maxFontSize = n * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = be(r.width, e), a = be(r.height, e), n = r.shift ? be(r.shift, e) : 0, i = e.color && e.getColor() || "black", l = new C.MathNode("mspace");
    l.setAttribute("mathbackground", i), l.setAttribute("width", L(t)), l.setAttribute("height", L(a));
    var u = new C.MathNode("mpadded", [l]);
    return n >= 0 ? u.setAttribute("height", L(n)) : (u.setAttribute("height", L(n)), u.setAttribute("depth", L(-n))), u.setAttribute("voffset", L(n)), u;
  }
});
function di(r, e, t) {
  for (var a = Ne(r, e, !1), n = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < a.length; i++) {
    var l = a[i].classes.indexOf("sizing");
    l < 0 ? Array.prototype.push.apply(a[i].classes, e.sizingClasses(t)) : a[i].classes[l + 1] === "reset-size" + e.size && (a[i].classes[l + 1] = "reset-size" + t.size), a[i].height *= n, a[i].depth *= n;
  }
  return S.makeFragment(a);
}
var Ka = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], u1 = (r, e) => {
  var t = e.havingSize(r.size);
  return di(r.body, t, e);
};
B({
  type: "sizing",
  names: Ka,
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler: (r, e) => {
    var {
      breakOnTokenText: t,
      funcName: a,
      parser: n
    } = r, i = n.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: n.mode,
      // Figure out what size to use based on the list of functions above
      size: Ka.indexOf(a) + 1,
      body: i
    };
  },
  htmlBuilder: u1,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), a = _e(r.body, t), n = new C.MathNode("mstyle", a);
    return n.setAttribute("mathsize", L(t.sizeMultiplier)), n;
  }
});
B({
  type: "smash",
  names: ["\\smash"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1,
    allowedInText: !0
  },
  handler: (r, e, t) => {
    var {
      parser: a
    } = r, n = !1, i = !1, l = t[0] && J(t[0], "ordgroup");
    if (l)
      for (var u = "", c = 0; c < l.body.length; ++c) {
        var d = l.body[c];
        if (u = d.text, u === "t")
          n = !0;
        else if (u === "b")
          i = !0;
        else {
          n = !1, i = !1;
          break;
        }
      }
    else
      n = !0, i = !0;
    var g = e[0];
    return {
      type: "smash",
      mode: a.mode,
      body: g,
      smashHeight: n,
      smashDepth: i
    };
  },
  htmlBuilder: (r, e) => {
    var t = S.makeSpan([], [ne(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0, t.children))
      for (var a = 0; a < t.children.length; a++)
        t.children[a].height = 0;
    if (r.smashDepth && (t.depth = 0, t.children))
      for (var n = 0; n < t.children.length; n++)
        t.children[n].depth = 0;
    var i = S.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
    return S.makeSpan(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new C.MathNode("mpadded", [he(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
B({
  type: "sqrt",
  names: ["\\sqrt"],
  props: {
    numArgs: 1,
    numOptionalArgs: 1
  },
  handler(r, e, t) {
    var {
      parser: a
    } = r, n = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: a.mode,
      body: i,
      index: n
    };
  },
  htmlBuilder(r, e) {
    var t = ne(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = S.wrapFragment(t, e);
    var a = e.fontMetrics(), n = a.defaultRuleThickness, i = n;
    e.style.id < $.TEXT.id && (i = e.fontMetrics().xHeight);
    var l = n + i / 4, u = t.height + t.depth + l + n, {
      span: c,
      ruleWidth: d,
      advanceWidth: g
    } = x0.sqrtImage(u, e), p = c.height - d;
    p > t.height + t.depth + l && (l = (l + p - t.height - t.depth) / 2);
    var x = c.height - t.height - l - d;
    t.style.paddingLeft = L(g);
    var k = S.makeVList({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + x)
      }, {
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: d
      }]
    }, e);
    if (r.index) {
      var A = e.havingStyle($.SCRIPTSCRIPT), T = ne(r.index, A, e), z = 0.6 * (k.height - k.depth), N = S.makeVList({
        positionType: "shift",
        positionData: -z,
        children: [{
          type: "elem",
          elem: T
        }]
      }, e), O = S.makeSpan(["root"], [N]);
      return S.makeSpan(["mord", "sqrt"], [O, k], e);
    } else
      return S.makeSpan(["mord", "sqrt"], [k], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: a
    } = r;
    return a ? new C.MathNode("mroot", [he(t, e), he(a, e)]) : new C.MathNode("msqrt", [he(t, e)]);
  }
});
var Qa = {
  display: $.DISPLAY,
  text: $.TEXT,
  script: $.SCRIPT,
  scriptscript: $.SCRIPTSCRIPT
};
B({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  props: {
    numArgs: 0,
    allowedInText: !0,
    primitive: !0
  },
  handler(r, e) {
    var {
      breakOnTokenText: t,
      funcName: a,
      parser: n
    } = r, i = n.parseExpression(!0, t), l = a.slice(1, a.length - 5);
    return {
      type: "styling",
      mode: n.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: l,
      body: i
    };
  },
  htmlBuilder(r, e) {
    var t = Qa[r.style], a = e.havingStyle(t).withFont("");
    return di(r.body, a, e);
  },
  mathmlBuilder(r, e) {
    var t = Qa[r.style], a = e.havingStyle(t), n = _e(r.body, a), i = new C.MathNode("mstyle", n), l = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, u = l[r.style];
    return i.setAttribute("scriptlevel", u[0]), i.setAttribute("displaystyle", u[1]), i;
  }
});
var c1 = function(e, t) {
  var a = e.base;
  if (a)
    if (a.type === "op") {
      var n = a.limits && (t.style.size === $.DISPLAY.size || a.alwaysHandleSupSub);
      return n ? Z0 : null;
    } else if (a.type === "operatorname") {
      var i = a.alwaysHandleSupSub && (t.style.size === $.DISPLAY.size || a.limits);
      return i ? hi : null;
    } else {
      if (a.type === "accent")
        return ie.isCharacterBox(a.base) ? Zr : null;
      if (a.type === "horizBrace") {
        var l = !e.sub;
        return l === a.isOver ? ui : null;
      } else
        return null;
    }
  else return null;
};
j0({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = c1(r, e);
    if (t)
      return t(r, e);
    var {
      base: a,
      sup: n,
      sub: i
    } = r, l = ne(a, e), u, c, d = e.fontMetrics(), g = 0, p = 0, x = a && ie.isCharacterBox(a);
    if (n) {
      var k = e.havingStyle(e.style.sup());
      u = ne(n, k, e), x || (g = l.height - k.fontMetrics().supDrop * k.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var A = e.havingStyle(e.style.sub());
      c = ne(i, A, e), x || (p = l.depth + A.fontMetrics().subDrop * A.sizeMultiplier / e.sizeMultiplier);
    }
    var T;
    e.style === $.DISPLAY ? T = d.sup1 : e.style.cramped ? T = d.sup3 : T = d.sup2;
    var z = e.sizeMultiplier, N = L(0.5 / d.ptPerEm / z), O = null;
    if (c) {
      var P = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      (l instanceof Xe || P) && (O = L(-l.italic));
    }
    var j;
    if (u && c) {
      g = Math.max(g, T, u.depth + 0.25 * d.xHeight), p = Math.max(p, d.sub2);
      var U = d.defaultRuleThickness, Q = 4 * U;
      if (g - u.depth - (c.height - p) < Q) {
        p = Q - (g - u.depth) + c.height;
        var ee = 0.8 * d.xHeight - (g - u.depth);
        ee > 0 && (g += ee, p -= ee);
      }
      var le = [{
        type: "elem",
        elem: c,
        shift: p,
        marginRight: N,
        marginLeft: O
      }, {
        type: "elem",
        elem: u,
        shift: -g,
        marginRight: N
      }];
      j = S.makeVList({
        positionType: "individualShift",
        children: le
      }, e);
    } else if (c) {
      p = Math.max(p, d.sub1, c.height - 0.8 * d.xHeight);
      var Z = [{
        type: "elem",
        elem: c,
        marginLeft: O,
        marginRight: N
      }];
      j = S.makeVList({
        positionType: "shift",
        positionData: p,
        children: Z
      }, e);
    } else if (u)
      g = Math.max(g, T, u.depth + 0.25 * d.xHeight), j = S.makeVList({
        positionType: "shift",
        positionData: -g,
        children: [{
          type: "elem",
          elem: u,
          marginRight: N
        }]
      }, e);
    else
      throw new Error("supsub must have either sup or sub.");
    var ze = Ir(l, "right") || "mord";
    return S.makeSpan([ze], [l, S.makeSpan(["msupsub"], [j])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, a, n;
    r.base && r.base.type === "horizBrace" && (n = !!r.sup, n === r.base.isOver && (t = !0, a = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var i = [he(r.base, e)];
    r.sub && i.push(he(r.sub, e)), r.sup && i.push(he(r.sup, e));
    var l;
    if (t)
      l = a ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var d = r.base;
        d && d.type === "op" && d.limits && e.style === $.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === $.DISPLAY || d.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var c = r.base;
        c && c.type === "op" && c.limits && (e.style === $.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === $.DISPLAY) ? l = "munder" : l = "msub";
      }
    else {
      var u = r.base;
      u && u.type === "op" && u.limits && (e.style === $.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === $.DISPLAY) ? l = "mover" : l = "msup";
    }
    return new C.MathNode(l, i);
  }
});
j0({
  type: "atom",
  htmlBuilder(r, e) {
    return S.mathsym(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new C.MathNode("mo", [Ze(r.text, r.mode)]);
    if (r.family === "bin") {
      var a = Yr(r, e);
      a === "bold-italic" && t.setAttribute("mathvariant", a);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var fi = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
j0({
  type: "mathord",
  htmlBuilder(r, e) {
    return S.makeOrd(r, e, "mathord");
  },
  mathmlBuilder(r, e) {
    var t = new C.MathNode("mi", [Ze(r.text, r.mode, e)]), a = Yr(r, e) || "italic";
    return a !== fi[t.type] && t.setAttribute("mathvariant", a), t;
  }
});
j0({
  type: "textord",
  htmlBuilder(r, e) {
    return S.makeOrd(r, e, "textord");
  },
  mathmlBuilder(r, e) {
    var t = Ze(r.text, r.mode, e), a = Yr(r, e) || "normal", n;
    return r.mode === "text" ? n = new C.MathNode("mtext", [t]) : /[0-9]/.test(r.text) ? n = new C.MathNode("mn", [t]) : r.text === "\\prime" ? n = new C.MathNode("mo", [t]) : n = new C.MathNode("mi", [t]), a !== fi[n.type] && n.setAttribute("mathvariant", a), n;
  }
});
var yr = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, wr = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
j0({
  type: "spacing",
  htmlBuilder(r, e) {
    if (wr.hasOwnProperty(r.text)) {
      var t = wr[r.text].className || "";
      if (r.mode === "text") {
        var a = S.makeOrd(r, e, "textord");
        return a.classes.push(t), a;
      } else
        return S.makeSpan(["mspace", t], [S.mathsym(r.text, r.mode, e)], e);
    } else {
      if (yr.hasOwnProperty(r.text))
        return S.makeSpan(["mspace", yr[r.text]], [], e);
      throw new R('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (wr.hasOwnProperty(r.text))
      t = new C.MathNode("mtext", [new C.TextNode(" ")]);
    else {
      if (yr.hasOwnProperty(r.text))
        return new C.MathNode("mspace");
      throw new R('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var en = () => {
  var r = new C.MathNode("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
j0({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new C.MathNode("mtable", [new C.MathNode("mtr", [en(), new C.MathNode("mtd", [D0(r.body, e)]), en(), new C.MathNode("mtd", [D0(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var tn = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, rn = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, m1 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, an = (r, e) => {
  var t = r.font;
  if (t) {
    if (tn[t])
      return e.withTextFontFamily(tn[t]);
    if (rn[t])
      return e.withTextFontWeight(rn[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(m1[t]);
};
B({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  props: {
    numArgs: 1,
    argTypes: ["text"],
    allowedInArgument: !0,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t,
      funcName: a
    } = r, n = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: we(n),
      font: a
    };
  },
  htmlBuilder(r, e) {
    var t = an(r, e), a = Ne(r.body, t, !0);
    return S.makeSpan(["mord", "text"], a, t);
  },
  mathmlBuilder(r, e) {
    var t = an(r, e);
    return D0(r.body, t);
  }
});
B({
  type: "underline",
  names: ["\\underline"],
  props: {
    numArgs: 1,
    allowedInText: !0
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = ne(r.body, e), a = S.makeLineSpan("underline-line", e), n = e.fontMetrics().defaultRuleThickness, i = S.makeVList({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: n
      }, {
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: 3 * n
      }, {
        type: "elem",
        elem: t
      }]
    }, e);
    return S.makeSpan(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new C.MathNode("mo", [new C.TextNode("‾")]);
    t.setAttribute("stretchy", "true");
    var a = new C.MathNode("munder", [he(r.body, e), t]);
    return a.setAttribute("accentunder", "true"), a;
  }
});
B({
  type: "vcenter",
  names: ["\\vcenter"],
  props: {
    numArgs: 1,
    argTypes: ["original"],
    // In LaTeX, \vcenter can act only on a box.
    allowedInText: !1
  },
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = ne(r.body, e), a = e.fontMetrics().axisHeight, n = 0.5 * (t.height - a - (t.depth + a));
    return S.makeVList({
      positionType: "shift",
      positionData: n,
      children: [{
        type: "elem",
        elem: t
      }]
    }, e);
  },
  mathmlBuilder(r, e) {
    return new C.MathNode("mpadded", [he(r.body, e)], ["vcenter"]);
  }
});
B({
  type: "verb",
  names: ["\\verb"],
  props: {
    numArgs: 0,
    allowedInText: !0
  },
  handler(r, e, t) {
    throw new R("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = nn(r), a = [], n = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var l = t[i];
      l === "~" && (l = "\\textasciitilde"), a.push(S.makeSymbol(l, "Typewriter-Regular", r.mode, n, ["mord", "texttt"]));
    }
    return S.makeSpan(["mord", "text"].concat(n.sizingClasses(e)), S.tryCombineChars(a), n);
  },
  mathmlBuilder(r, e) {
    var t = new C.TextNode(nn(r)), a = new C.MathNode("mtext", [t]);
    return a.setAttribute("mathvariant", "monospace"), a;
  }
});
var nn = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), E0 = Hn, pi = `[ \r
	]`, h1 = "\\\\[a-zA-Z@]+", d1 = "\\\\[^\uD800-\uDFFF]", f1 = "(" + h1 + ")" + pi + "*", p1 = `\\\\(
|[ \r	]+
?)[ \r	]*`, qr = "[̀-ͯ]", v1 = new RegExp(qr + "+$"), g1 = "(" + pi + "+)|" + // whitespace
(p1 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(qr + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(qr + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + f1) + // \macroName + spaces
("|" + d1 + ")");
class sn {
  // Category codes. The lexer only supports comment characters (14) for now.
  // MacroExpander additionally distinguishes active (13).
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(g1, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new Ge("EOF", new Pe(this, t, t));
    var a = this.tokenRegex.exec(e);
    if (a === null || a.index !== t)
      throw new R("Unexpected character: '" + e[t] + "'", new Ge(e[t], new Pe(this, t, t + 1)));
    var n = a[6] || a[3] || (a[2] ? "\\ " : " ");
    if (this.catcodes[n] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new Ge(n, new Pe(this, t, this.tokenRegex.lastIndex));
  }
}
class b1 {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new R("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, a) {
    if (a === void 0 && (a = !1), a) {
      for (var n = 0; n < this.undefStack.length; n++)
        delete this.undefStack[n][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var x1 = ni;
h("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
h("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
h("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
h("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
h("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
h("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
h("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var ln = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
h("\\char", function(r) {
  var e = r.popToken(), t, a = "";
  if (e.text === "'")
    t = 8, e = r.popToken();
  else if (e.text === '"')
    t = 16, e = r.popToken();
  else if (e.text === "`")
    if (e = r.popToken(), e.text[0] === "\\")
      a = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new R("\\char` missing argument");
      a = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (a = ln[e.text], a == null || a >= t)
      throw new R("Invalid base-" + t + " digit " + e.text);
    for (var n; (n = ln[r.future().text]) != null && n < t; )
      a *= t, a += n, r.popToken();
  }
  return "\\@char{" + a + "}";
});
var na = (r, e, t, a) => {
  var n = r.consumeArg().tokens;
  if (n.length !== 1)
    throw new R("\\newcommand's first argument must be a macro name");
  var i = n[0].text, l = r.isDefined(i);
  if (l && !e)
    throw new R("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!l && !t)
    throw new R("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var u = 0;
  if (n = r.consumeArg().tokens, n.length === 1 && n[0].text === "[") {
    for (var c = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
      c += d.text, d = r.expandNextToken();
    if (!c.match(/^\s*[0-9]+\s*$/))
      throw new R("Invalid number of arguments: " + c);
    u = parseInt(c), n = r.consumeArg().tokens;
  }
  return l && a || r.macros.set(i, {
    tokens: n,
    numArgs: u
  }), "";
};
h("\\newcommand", (r) => na(r, !1, !0, !1));
h("\\renewcommand", (r) => na(r, !0, !1, !1));
h("\\providecommand", (r) => na(r, !0, !0, !0));
h("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
h("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
h("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), E0[t], de.math[t], de.text[t]), "";
});
h("\\bgroup", "{");
h("\\egroup", "}");
h("~", "\\nobreakspace");
h("\\lq", "`");
h("\\rq", "'");
h("\\aa", "\\r a");
h("\\AA", "\\r A");
h("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
h("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
h("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
h("ℬ", "\\mathscr{B}");
h("ℰ", "\\mathscr{E}");
h("ℱ", "\\mathscr{F}");
h("ℋ", "\\mathscr{H}");
h("ℐ", "\\mathscr{I}");
h("ℒ", "\\mathscr{L}");
h("ℳ", "\\mathscr{M}");
h("ℛ", "\\mathscr{R}");
h("ℭ", "\\mathfrak{C}");
h("ℌ", "\\mathfrak{H}");
h("ℨ", "\\mathfrak{Z}");
h("\\Bbbk", "\\Bbb{k}");
h("·", "\\cdotp");
h("\\llap", "\\mathllap{\\textrm{#1}}");
h("\\rlap", "\\mathrlap{\\textrm{#1}}");
h("\\clap", "\\mathclap{\\textrm{#1}}");
h("\\mathstrut", "\\vphantom{(}");
h("\\underbar", "\\underline{\\text{#1}}");
h("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}');
h("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
h("\\ne", "\\neq");
h("≠", "\\neq");
h("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
h("∉", "\\notin");
h("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
h("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
h("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
h("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
h("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
h("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
h("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
h("⟂", "\\perp");
h("‼", "\\mathclose{!\\mkern-0.8mu!}");
h("∌", "\\notni");
h("⌜", "\\ulcorner");
h("⌝", "\\urcorner");
h("⌞", "\\llcorner");
h("⌟", "\\lrcorner");
h("©", "\\copyright");
h("®", "\\textregistered");
h("️", "\\textregistered");
h("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
h("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
h("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
h("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
h("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
h("⋮", "\\vdots");
h("\\varGamma", "\\mathit{\\Gamma}");
h("\\varDelta", "\\mathit{\\Delta}");
h("\\varTheta", "\\mathit{\\Theta}");
h("\\varLambda", "\\mathit{\\Lambda}");
h("\\varXi", "\\mathit{\\Xi}");
h("\\varPi", "\\mathit{\\Pi}");
h("\\varSigma", "\\mathit{\\Sigma}");
h("\\varUpsilon", "\\mathit{\\Upsilon}");
h("\\varPhi", "\\mathit{\\Phi}");
h("\\varPsi", "\\mathit{\\Psi}");
h("\\varOmega", "\\mathit{\\Omega}");
h("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
h("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
h("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
h("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
h("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
h("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
h("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
h("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var on = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
};
h("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in on ? e = on[t] : (t.slice(0, 4) === "\\not" || t in de.math && ["bin", "rel"].includes(de.math[t].group)) && (e = "\\dotsb"), e;
});
var ia = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
h("\\dotso", function(r) {
  var e = r.future().text;
  return e in ia ? "\\ldots\\," : "\\ldots";
});
h("\\dotsc", function(r) {
  var e = r.future().text;
  return e in ia && e !== "," ? "\\ldots\\," : "\\ldots";
});
h("\\cdots", function(r) {
  var e = r.future().text;
  return e in ia ? "\\@cdots\\," : "\\@cdots";
});
h("\\dotsb", "\\cdots");
h("\\dotsm", "\\cdots");
h("\\dotsi", "\\!\\cdots");
h("\\dotsx", "\\ldots\\,");
h("\\DOTSI", "\\relax");
h("\\DOTSB", "\\relax");
h("\\DOTSX", "\\relax");
h("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
h("\\,", "\\tmspace+{3mu}{.1667em}");
h("\\thinspace", "\\,");
h("\\>", "\\mskip{4mu}");
h("\\:", "\\tmspace+{4mu}{.2222em}");
h("\\medspace", "\\:");
h("\\;", "\\tmspace+{5mu}{.2777em}");
h("\\thickspace", "\\;");
h("\\!", "\\tmspace-{3mu}{.1667em}");
h("\\negthinspace", "\\!");
h("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
h("\\negthickspace", "\\tmspace-{5mu}{.277em}");
h("\\enspace", "\\kern.5em ");
h("\\enskip", "\\hskip.5em\\relax");
h("\\quad", "\\hskip1em\\relax");
h("\\qquad", "\\hskip2em\\relax");
h("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
h("\\tag@paren", "\\tag@literal{({#1})}");
h("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag"))
    throw new R("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
h("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
h("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
h("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
h("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
h("\\newline", "\\\\\\relax");
h("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var vi = L(l0["Main-Regular"][84][1] - 0.7 * l0["Main-Regular"][65][1]);
h("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + vi + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
h("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + vi + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
h("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
h("\\@hspace", "\\hskip #1\\relax");
h("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
h("\\ordinarycolon", ":");
h("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
h("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
h("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
h("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
h("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
h("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
h("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
h("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
h("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
h("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
h("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
h("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
h("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
h("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
h("∷", "\\dblcolon");
h("∹", "\\eqcolon");
h("≔", "\\coloneqq");
h("≕", "\\eqqcolon");
h("⩴", "\\Coloneqq");
h("\\ratio", "\\vcentcolon");
h("\\coloncolon", "\\dblcolon");
h("\\colonequals", "\\coloneqq");
h("\\coloncolonequals", "\\Coloneqq");
h("\\equalscolon", "\\eqqcolon");
h("\\equalscoloncolon", "\\Eqqcolon");
h("\\colonminus", "\\coloneq");
h("\\coloncolonminus", "\\Coloneq");
h("\\minuscolon", "\\eqcolon");
h("\\minuscoloncolon", "\\Eqcolon");
h("\\coloncolonapprox", "\\Colonapprox");
h("\\coloncolonsim", "\\Colonsim");
h("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
h("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
h("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
h("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
h("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
h("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
h("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
h("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
h("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
h("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
h("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
h("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
h("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
h("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
h("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
h("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
h("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
h("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
h("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
h("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
h("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
h("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
h("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
h("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
h("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
h("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
h("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
h("\\imath", "\\html@mathml{\\@imath}{ı}");
h("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
h("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
h("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
h("⟦", "\\llbracket");
h("⟧", "\\rrbracket");
h("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
h("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
h("⦃", "\\lBrace");
h("⦄", "\\rBrace");
h("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
h("⦵", "\\minuso");
h("\\darr", "\\downarrow");
h("\\dArr", "\\Downarrow");
h("\\Darr", "\\Downarrow");
h("\\lang", "\\langle");
h("\\rang", "\\rangle");
h("\\uarr", "\\uparrow");
h("\\uArr", "\\Uparrow");
h("\\Uarr", "\\Uparrow");
h("\\N", "\\mathbb{N}");
h("\\R", "\\mathbb{R}");
h("\\Z", "\\mathbb{Z}");
h("\\alef", "\\aleph");
h("\\alefsym", "\\aleph");
h("\\Alpha", "\\mathrm{A}");
h("\\Beta", "\\mathrm{B}");
h("\\bull", "\\bullet");
h("\\Chi", "\\mathrm{X}");
h("\\clubs", "\\clubsuit");
h("\\cnums", "\\mathbb{C}");
h("\\Complex", "\\mathbb{C}");
h("\\Dagger", "\\ddagger");
h("\\diamonds", "\\diamondsuit");
h("\\empty", "\\emptyset");
h("\\Epsilon", "\\mathrm{E}");
h("\\Eta", "\\mathrm{H}");
h("\\exist", "\\exists");
h("\\harr", "\\leftrightarrow");
h("\\hArr", "\\Leftrightarrow");
h("\\Harr", "\\Leftrightarrow");
h("\\hearts", "\\heartsuit");
h("\\image", "\\Im");
h("\\infin", "\\infty");
h("\\Iota", "\\mathrm{I}");
h("\\isin", "\\in");
h("\\Kappa", "\\mathrm{K}");
h("\\larr", "\\leftarrow");
h("\\lArr", "\\Leftarrow");
h("\\Larr", "\\Leftarrow");
h("\\lrarr", "\\leftrightarrow");
h("\\lrArr", "\\Leftrightarrow");
h("\\Lrarr", "\\Leftrightarrow");
h("\\Mu", "\\mathrm{M}");
h("\\natnums", "\\mathbb{N}");
h("\\Nu", "\\mathrm{N}");
h("\\Omicron", "\\mathrm{O}");
h("\\plusmn", "\\pm");
h("\\rarr", "\\rightarrow");
h("\\rArr", "\\Rightarrow");
h("\\Rarr", "\\Rightarrow");
h("\\real", "\\Re");
h("\\reals", "\\mathbb{R}");
h("\\Reals", "\\mathbb{R}");
h("\\Rho", "\\mathrm{P}");
h("\\sdot", "\\cdot");
h("\\sect", "\\S");
h("\\spades", "\\spadesuit");
h("\\sub", "\\subset");
h("\\sube", "\\subseteq");
h("\\supe", "\\supseteq");
h("\\Tau", "\\mathrm{T}");
h("\\thetasym", "\\vartheta");
h("\\weierp", "\\wp");
h("\\Zeta", "\\mathrm{Z}");
h("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
h("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
h("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
h("\\bra", "\\mathinner{\\langle{#1}|}");
h("\\ket", "\\mathinner{|{#1}\\rangle}");
h("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
h("\\Bra", "\\left\\langle#1\\right|");
h("\\Ket", "\\left|#1\\right\\rangle");
var gi = (r) => (e) => {
  var t = e.consumeArg().tokens, a = e.consumeArg().tokens, n = e.consumeArg().tokens, i = e.consumeArg().tokens, l = e.macros.get("|"), u = e.macros.get("\\|");
  e.macros.beginGroup();
  var c = (p) => (x) => {
    r && (x.macros.set("|", l), n.length && x.macros.set("\\|", u));
    var k = p;
    if (!p && n.length) {
      var A = x.future();
      A.text === "|" && (x.popToken(), k = !0);
    }
    return {
      tokens: k ? n : a,
      numArgs: 0
    };
  };
  e.macros.set("|", c(!1)), n.length && e.macros.set("\\|", c(!0));
  var d = e.consumeArg().tokens, g = e.expandTokens([
    ...i,
    ...d,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: g.reverse(),
    numArgs: 0
  };
};
h("\\bra@ket", gi(!1));
h("\\bra@set", gi(!0));
h("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
h("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
h("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
h("\\angln", "{\\angl n}");
h("\\blue", "\\textcolor{##6495ed}{#1}");
h("\\orange", "\\textcolor{##ffa500}{#1}");
h("\\pink", "\\textcolor{##ff00af}{#1}");
h("\\red", "\\textcolor{##df0030}{#1}");
h("\\green", "\\textcolor{##28ae7b}{#1}");
h("\\gray", "\\textcolor{gray}{#1}");
h("\\purple", "\\textcolor{##9d38bd}{#1}");
h("\\blueA", "\\textcolor{##ccfaff}{#1}");
h("\\blueB", "\\textcolor{##80f6ff}{#1}");
h("\\blueC", "\\textcolor{##63d9ea}{#1}");
h("\\blueD", "\\textcolor{##11accd}{#1}");
h("\\blueE", "\\textcolor{##0c7f99}{#1}");
h("\\tealA", "\\textcolor{##94fff5}{#1}");
h("\\tealB", "\\textcolor{##26edd5}{#1}");
h("\\tealC", "\\textcolor{##01d1c1}{#1}");
h("\\tealD", "\\textcolor{##01a995}{#1}");
h("\\tealE", "\\textcolor{##208170}{#1}");
h("\\greenA", "\\textcolor{##b6ffb0}{#1}");
h("\\greenB", "\\textcolor{##8af281}{#1}");
h("\\greenC", "\\textcolor{##74cf70}{#1}");
h("\\greenD", "\\textcolor{##1fab54}{#1}");
h("\\greenE", "\\textcolor{##0d923f}{#1}");
h("\\goldA", "\\textcolor{##ffd0a9}{#1}");
h("\\goldB", "\\textcolor{##ffbb71}{#1}");
h("\\goldC", "\\textcolor{##ff9c39}{#1}");
h("\\goldD", "\\textcolor{##e07d10}{#1}");
h("\\goldE", "\\textcolor{##a75a05}{#1}");
h("\\redA", "\\textcolor{##fca9a9}{#1}");
h("\\redB", "\\textcolor{##ff8482}{#1}");
h("\\redC", "\\textcolor{##f9685d}{#1}");
h("\\redD", "\\textcolor{##e84d39}{#1}");
h("\\redE", "\\textcolor{##bc2612}{#1}");
h("\\maroonA", "\\textcolor{##ffbde0}{#1}");
h("\\maroonB", "\\textcolor{##ff92c6}{#1}");
h("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
h("\\maroonD", "\\textcolor{##ca337c}{#1}");
h("\\maroonE", "\\textcolor{##9e034e}{#1}");
h("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
h("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
h("\\purpleC", "\\textcolor{##aa87ff}{#1}");
h("\\purpleD", "\\textcolor{##7854ab}{#1}");
h("\\purpleE", "\\textcolor{##543b78}{#1}");
h("\\mintA", "\\textcolor{##f5f9e8}{#1}");
h("\\mintB", "\\textcolor{##edf2df}{#1}");
h("\\mintC", "\\textcolor{##e0e5cc}{#1}");
h("\\grayA", "\\textcolor{##f6f7f7}{#1}");
h("\\grayB", "\\textcolor{##f0f1f2}{#1}");
h("\\grayC", "\\textcolor{##e3e5e6}{#1}");
h("\\grayD", "\\textcolor{##d6d8da}{#1}");
h("\\grayE", "\\textcolor{##babec2}{#1}");
h("\\grayF", "\\textcolor{##888d93}{#1}");
h("\\grayG", "\\textcolor{##626569}{#1}");
h("\\grayH", "\\textcolor{##3b3e40}{#1}");
h("\\grayI", "\\textcolor{##21242c}{#1}");
h("\\kaBlue", "\\textcolor{##314453}{#1}");
h("\\kaGreen", "\\textcolor{##71B307}{#1}");
var bi = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class y1 {
  constructor(e, t, a) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new b1(x1, t.macros), this.mode = a, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new sn(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, a, n;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: n,
        end: a
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: n,
        start: t,
        end: a
      } = this.consumeArg());
    return this.pushToken(new Ge("EOF", a.loc)), this.pushTokens(n), new Ge("", Pe.range(t, a));
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], a = e && e.length > 0;
    a || this.consumeSpaces();
    var n = this.future(), i, l = 0, u = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++l;
      else if (i.text === "}") {
        if (--l, l === -1)
          throw new R("Extra }", i);
      } else if (i.text === "EOF")
        throw new R("Unexpected end of input in a macro argument, expected '" + (e && a ? e[u] : "}") + "'", i);
      if (e && a)
        if ((l === 0 || l === 1 && e[u] === "{") && i.text === e[u]) {
          if (++u, u === e.length) {
            t.splice(-u, u);
            break;
          }
        } else
          u = 0;
    } while (l !== 0 || a);
    return n.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: n,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new R("The length of delimiters doesn't match the number of args!");
      for (var a = t[0], n = 0; n < a.length; n++) {
        var i = this.popToken();
        if (a[n] !== i.text)
          throw new R("Use of the macro doesn't match its definition", i);
      }
    }
    for (var l = [], u = 0; u < e; u++)
      l.push(this.consumeArg(t && t[u + 1]).tokens);
    return l;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new R("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), a = t.text, n = t.noexpand ? null : this._getExpansion(a);
    if (n == null || e && n.unexpandable) {
      if (e && n == null && a[0] === "\\" && !this.isDefined(a))
        throw new R("Undefined control sequence: " + a);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var i = n.tokens, l = this.consumeArgs(n.numArgs, n.delimiters);
    if (n.numArgs) {
      i = i.slice();
      for (var u = i.length - 1; u >= 0; --u) {
        var c = i[u];
        if (c.text === "#") {
          if (u === 0)
            throw new R("Incomplete placeholder at end of macro body", c);
          if (c = i[--u], c.text === "#")
            i.splice(u + 1, 1);
          else if (/^[1-9]$/.test(c.text))
            i.splice(u, 2, ...l[+c.text - 1]);
          else
            throw new R("Not a valid argument number", c);
        }
      }
    }
    return this.pushTokens(i), i.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    throw new Error();
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new Ge(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], a = this.stack.length;
    for (this.pushTokens(e); this.stack.length > a; )
      if (this.expandOnce(!0) === !1) {
        var n = this.stack.pop();
        n.treatAsRelax && (n.noexpand = !1, n.treatAsRelax = !1), t.push(n);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((a) => a.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var a = this.lexer.catcodes[e];
      if (a != null && a !== 13)
        return;
    }
    var n = typeof t == "function" ? t(this) : t;
    if (typeof n == "string") {
      var i = 0;
      if (n.indexOf("#") !== -1)
        for (var l = n.replace(/##/g, ""); l.indexOf("#" + (i + 1)) !== -1; )
          ++i;
      for (var u = new sn(n, this.settings), c = [], d = u.lex(); d.text !== "EOF"; )
        c.push(d), d = u.lex();
      c.reverse();
      var g = {
        tokens: c,
        numArgs: i
      };
      return g;
    }
    return n;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || E0.hasOwnProperty(e) || de.math.hasOwnProperty(e) || de.text.hasOwnProperty(e) || bi.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : E0.hasOwnProperty(e) && !E0[e].primitive;
  }
}
var un = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Rt = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), kr = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, cn = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class Jt {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new y1(e, t, this.mode), this.settings = t, this.leftrightDepth = 0;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new R("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new Ge("}")), this.gullet.pushTokens(e);
    var a = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, a;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence than infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var a = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var n = this.fetch();
      if (Jt.endOfExpression.indexOf(n.text) !== -1 || t && n.text === t || e && E0[n.text] && E0[n.text].infix)
        break;
      var i = this.parseAtom(t);
      if (i) {
        if (i.type === "internal")
          continue;
      } else break;
      a.push(i);
    }
    return this.mode === "text" && this.formLigatures(a), this.handleInfixNodes(a);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, a, n = 0; n < e.length; n++)
      if (e[n].type === "infix") {
        if (t !== -1)
          throw new R("only one infix operator per group", e[n].token);
        t = n, a = e[n].replaceWith;
      }
    if (t !== -1 && a) {
      var i, l, u = e.slice(0, t), c = e.slice(t + 1);
      u.length === 1 && u[0].type === "ordgroup" ? i = u[0] : i = {
        type: "ordgroup",
        mode: this.mode,
        body: u
      }, c.length === 1 && c[0].type === "ordgroup" ? l = c[0] : l = {
        type: "ordgroup",
        mode: this.mode,
        body: c
      };
      var d;
      return a === "\\\\abovefrac" ? d = this.callFunction(a, [i, e[t], l], []) : d = this.callFunction(a, [i, l], []), [d];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), a = t.text;
    this.consume(), this.consumeSpaces();
    var n;
    do {
      var i;
      n = this.parseGroup(e);
    } while (((i = n) == null ? void 0 : i.type) === "internal");
    if (!n)
      throw new R("Expected group after '" + a + "'", t);
    return n;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], a = 0; a < e.length; a++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[a]
      });
    var n = {
      type: "text",
      mode: this.mode,
      body: t
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [n]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if (t?.type === "internal" || this.mode === "text")
      return t;
    for (var a, n; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op") {
          var l = i.text === "\\limits";
          t.limits = l, t.alwaysHandleSupSub = !0;
        } else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else
          throw new R("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (a)
          throw new R("Double superscript", i);
        a = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (n)
          throw new R("Double subscript", i);
        n = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (a)
          throw new R("Double superscript", i);
        var u = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, c = [u];
        for (this.consume(); this.fetch().text === "'"; )
          c.push(u), this.consume();
        this.fetch().text === "^" && c.push(this.handleSupSubscript("superscript")), a = {
          type: "ordgroup",
          mode: this.mode,
          body: c
        };
      } else if (Rt[i.text]) {
        var d = un.test(i.text), g = [];
        for (g.push(new Ge(Rt[i.text])), this.consume(); ; ) {
          var p = this.fetch().text;
          if (!Rt[p] || un.test(p) !== d)
            break;
          g.unshift(new Ge(Rt[p])), this.consume();
        }
        var x = this.subparse(g);
        d ? n = {
          type: "ordgroup",
          mode: "math",
          body: x
        } : a = {
          type: "ordgroup",
          mode: "math",
          body: x
        };
      } else
        break;
    }
    return a || n ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: a,
      sub: n
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var a = this.fetch(), n = a.text, i = E0[n];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new R("Got function '" + n + "' with no arguments" + (t ? " as " + t : ""), a);
    if (this.mode === "text" && !i.allowedInText)
      throw new R("Can't use function '" + n + "' in text mode", a);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new R("Can't use function '" + n + "' in math mode", a);
    var {
      args: l,
      optArgs: u
    } = this.parseArguments(n, i);
    return this.callFunction(n, l, u, a, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, a, n, i) {
    var l = {
      funcName: e,
      parser: this,
      token: n,
      breakOnTokenText: i
    }, u = E0[e];
    if (u && u.handler)
      return u.handler(l, t, a);
    throw new R("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var a = t.numArgs + t.numOptionalArgs;
    if (a === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var n = [], i = [], l = 0; l < a; l++) {
      var u = t.argTypes && t.argTypes[l], c = l < t.numOptionalArgs;
      (t.primitive && u == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && i[0] == null) && (u = "primitive");
      var d = this.parseGroupOfType("argument to '" + e + "'", u, c);
      if (c)
        i.push(d);
      else if (d != null)
        n.push(d);
      else
        throw new R("Null argument, please report this as a bug");
    }
    return {
      args: n,
      optArgs: i
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, a) {
    switch (t) {
      case "color":
        return this.parseColorGroup(a);
      case "size":
        return this.parseSizeGroup(a);
      case "url":
        return this.parseUrlGroup(a);
      case "math":
      case "text":
        return this.parseArgumentGroup(a, t);
      case "hbox": {
        var n = this.parseArgumentGroup(a, "text");
        return n != null ? {
          type: "styling",
          mode: n.mode,
          body: [n],
          style: "text"
          // simulate \textstyle
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup("raw", a);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (a)
          throw new R("A primitive argument cannot be optional");
        var l = this.parseGroup(e);
        if (l == null)
          throw new R("Expected group as " + e, this.fetch());
        return l;
      }
      case "original":
      case null:
      case void 0:
        return this.parseArgumentGroup(a);
      default:
        throw new R("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e, t) {
    var a = this.gullet.scanArgument(t);
    if (a == null)
      return null;
    for (var n = "", i; (i = this.fetch()).text !== "EOF"; )
      n += i.text, this.consume();
    return this.consume(), a.text = n, a;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var a = this.fetch(), n = a, i = "", l; (l = this.fetch()).text !== "EOF" && e.test(i + l.text); )
      n = l, i += n.text, this.consume();
    if (i === "")
      throw new R("Invalid " + t + ": '" + a.text + "'", a);
    return a.range(n, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup("color", e);
    if (t == null)
      return null;
    var a = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!a)
      throw new R("Invalid color: '" + t.text + "'", t);
    var n = a[0];
    return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), {
      type: "color-token",
      mode: this.mode,
      color: n
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, a = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup("size", e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", a = !0);
    var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!n)
      throw new R("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(n[1] + n[2]),
      // sign + magnitude, cast to number
      unit: n[3]
    };
    if (!En(i))
      throw new R("Invalid unit: '" + i.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: a
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup("url", e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var a = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: a
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var a = this.gullet.scanArgument(e);
    if (a == null)
      return null;
    var n = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var l = {
      type: "ordgroup",
      mode: this.mode,
      loc: a.loc,
      body: i
    };
    return t && this.switchMode(n), l;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var a = this.fetch(), n = a.text, i;
    if (n === "{" || n === "\\begingroup") {
      this.consume();
      var l = n === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var u = this.parseExpression(!1, l), c = this.fetch();
      this.expect(l), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: Pe.range(a, c),
        body: u,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: n === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && n[0] === "\\" && !bi.hasOwnProperty(n)) {
      if (this.settings.throwOnError)
        throw new R("Undefined control sequence: " + n, a);
      i = this.formatUnsupportedCmd(n), this.consume();
    }
    return i;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, a = 0; a < t; ++a) {
      var n = e[a], i = n.text;
      i === "-" && e[a + 1].text === "-" && (a + 1 < t && e[a + 2].text === "-" ? (e.splice(a, 3, {
        type: "textord",
        mode: "text",
        loc: Pe.range(n, e[a + 2]),
        text: "---"
      }), t -= 2) : (e.splice(a, 2, {
        type: "textord",
        mode: "text",
        loc: Pe.range(n, e[a + 1]),
        text: "--"
      }), t -= 1)), (i === "'" || i === "`") && e[a + 1].text === i && (e.splice(a, 2, {
        type: "textord",
        mode: "text",
        loc: Pe.range(n, e[a + 1]),
        text: i + i
      }), t -= 1);
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var a = t.slice(5), n = a.charAt(0) === "*";
      if (n && (a = a.slice(1)), a.length < 2 || a.charAt(0) !== a.slice(-1))
        throw new R(`\\verb assertion failed --
                    please report what input caused this bug`);
      return a = a.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: a,
        star: n
      };
    }
    cn.hasOwnProperty(t[0]) && !de[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = cn[t[0]] + t.slice(1));
    var i = v1.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var l;
    if (de[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Lr.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var u = de[this.mode][t].group, c = Pe.range(e), d;
      if (ol.hasOwnProperty(u)) {
        var g = u;
        d = {
          type: "atom",
          mode: this.mode,
          family: g,
          loc: c,
          text: t
        };
      } else
        d = {
          type: u,
          mode: this.mode,
          loc: c,
          text: t
        };
      l = d;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (Nn(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: Pe.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var p = 0; p < i[0].length; p++) {
        var x = i[0][p];
        if (!kr[x])
          throw new R("Unknown accent ' " + x + "'", e);
        var k = kr[x][this.mode] || kr[x].text;
        if (!k)
          throw new R("Accent " + x + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: Pe.range(e),
          label: k,
          isStretchy: !1,
          isShifty: !0,
          // $FlowFixMe
          base: l
        };
      }
    return l;
  }
}
Jt.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
var sa = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var a = new Jt(e, t);
  delete a.gullet.macros.current["\\df@tag"];
  var n = a.parse();
  if (delete a.gullet.macros.current["\\current@color"], delete a.gullet.macros.current["\\color"], a.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new R("\\tag works only in display equations");
    n = [{
      type: "tag",
      mode: "text",
      body: n,
      tag: a.subparse([new Ge("\\df@tag")])
    }];
  }
  return n;
}, xi = function(e, t, a) {
  t.textContent = "";
  var n = la(e, a).toNode();
  t.appendChild(n);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), xi = function() {
  throw new R("KaTeX doesn't work in quirks mode.");
});
var w1 = function(e, t) {
  var a = la(e, t).toMarkup();
  return a;
}, k1 = function(e, t) {
  var a = new _r(t);
  return sa(e, a);
}, yi = function(e, t, a) {
  if (a.throwOnError || !(e instanceof R))
    throw e;
  var n = S.makeSpan(["katex-error"], [new Xe(t)]);
  return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + a.errorColor), n;
}, la = function(e, t) {
  var a = new _r(t);
  try {
    var n = sa(e, a);
    return Rl(n, e, a);
  } catch (i) {
    return yi(i, e, a);
  }
}, S1 = function(e, t) {
  var a = new _r(t);
  try {
    var n = sa(e, a);
    return Dl(n, e, a);
  } catch (i) {
    return yi(i, e, a);
  }
}, T1 = "0.16.28", A1 = {
  Span: ht,
  Anchor: $r,
  SymbolNode: Xe,
  SvgNode: y0,
  PathNode: R0,
  LineNode: Dr
}, M1 = {
  /**
   * Current KaTeX version
   */
  version: T1,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: xi,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: w1,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: R,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: Bt,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: k1,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: la,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: S1,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: el,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: s,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: B,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: h,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: A1
};
let z0 = null;
const Dt = () => {
  const r = window.getSelection();
  r && r.rangeCount > 0 && (z0 = r.getRangeAt(0).cloneRange());
}, Kt = () => {
  if (z0) {
    const r = window.getSelection();
    z0.commonAncestorContainer.isConnected && (r?.removeAllRanges(), r?.addRange(z0));
  }
}, Lt = () => {
  const r = window.getSelection();
  if (!r || r.rangeCount === 0) return null;
  let t = r.getRangeAt(0).commonAncestorContainer;
  t.nodeType === Node.TEXT_NODE && (t = t.parentNode);
  let a = t;
  for (; a && a !== document.body; ) {
    if (a.nodeType === Node.ELEMENT_NODE) {
      const n = a, i = n.tagName.toLowerCase();
      if (i === "a")
        return {
          type: "link",
          url: n.getAttribute("href") || "",
          text: n.textContent || ""
        };
      if (i === "img")
        return {
          type: "image",
          src: n.getAttribute("src") || "",
          alt: n.getAttribute("alt") || ""
        };
      if (i === "iframe")
        return {
          type: "video",
          src: n.getAttribute("src") || ""
        };
      if (i === "span" && n.classList.contains("math-tex"))
        return {
          type: "equation",
          latex: n.getAttribute("data-latex") || ""
        };
    }
    a = a.parentNode;
  }
  return null;
}, N1 = (r, e) => {
  Kt();
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) {
    const l = document.querySelector(
      '[contenteditable="true"]'
    );
    if (l) {
      const u = document.createElement("a");
      u.href = r, u.textContent = e || r, u.target = "_blank", u.rel = "noopener noreferrer", u.className = "text-blue-600 underline hover:text-blue-800", l.appendChild(u);
      const c = document.createTextNode(" ");
      l.appendChild(c);
      const d = document.createRange();
      d.setStartAfter(c), d.collapse(!0), t && (t.removeAllRanges(), t.addRange(d));
    }
    return;
  }
  const a = t.getRangeAt(0);
  let n = null, i = a.commonAncestorContainer;
  for (; i && i !== document.body; ) {
    if (i.nodeType === Node.ELEMENT_NODE && i.tagName.toLowerCase() === "a") {
      n = i;
      break;
    }
    i = i.parentNode;
  }
  if (n)
    n.setAttribute("href", r), n.textContent = e || r;
  else {
    const l = document.createElement("a");
    l.href = r, l.textContent = e || r, l.target = "_blank", l.rel = "noopener noreferrer", l.className = "text-blue-600 underline hover:text-blue-800", a.deleteContents(), a.insertNode(l);
    const u = document.createRange();
    u.setStartAfter(l), u.collapse(!0), t.removeAllRanges(), t.addRange(u);
  }
  z0 = null;
}, E1 = (r, e = "Inserted image") => {
  Kt();
  const t = window.getSelection();
  if (!t || t.rangeCount === 0) {
    const l = document.querySelector(
      '[contenteditable="true"]'
    );
    if (l) {
      const u = document.createElement("img");
      u.src = r, u.alt = e, u.className = "max-w-full h-auto rounded shadow-sm", l.appendChild(u);
      const c = document.createElement("br");
      l.appendChild(c);
      const d = document.createRange();
      d.setStartAfter(c), d.collapse(!0), t && (t.removeAllRanges(), t.addRange(d));
    }
    return;
  }
  const a = t.getRangeAt(0);
  let n = null, i = a.commonAncestorContainer;
  for (; i && i !== document.body; ) {
    if (i.nodeType === Node.ELEMENT_NODE && i.tagName.toLowerCase() === "img") {
      n = i;
      break;
    }
    i = i.parentNode;
  }
  if (n)
    n.setAttribute("src", r), n.setAttribute("alt", e);
  else {
    const l = document.createElement("img");
    l.src = r, l.alt = e, l.className = "max-w-full h-auto rounded shadow-sm", a.deleteContents(), a.insertNode(l);
    const u = document.createRange();
    u.setStartAfter(l), u.collapse(!0), t.removeAllRanges(), t.addRange(u);
  }
  z0 = null;
}, z1 = (r) => {
  Kt();
  const e = window.getSelection();
  if (!e || e.rangeCount === 0) {
    const i = document.querySelector(
      '[contenteditable="true"]'
    );
    if (i) {
      const l = document.createElement("iframe");
      l.src = r, l.width = "560", l.height = "315", l.className = "max-w-full rounded shadow-sm", l.setAttribute("frameborder", "0"), l.setAttribute("allowfullscreen", "true"), l.setAttribute(
        "sandbox",
        "allow-scripts allow-same-origin allow-presentation"
      ), i.appendChild(l);
      const u = document.createElement("br");
      i.appendChild(u);
      const c = document.createRange();
      c.setStartAfter(u), c.collapse(!0), e && (e.removeAllRanges(), e.addRange(c));
    }
    return;
  }
  const t = e.getRangeAt(0);
  let a = null, n = t.commonAncestorContainer;
  for (; n && n !== document.body; ) {
    if (n.nodeType === Node.ELEMENT_NODE && n.tagName.toLowerCase() === "iframe") {
      a = n;
      break;
    }
    n = n.parentNode;
  }
  if (a)
    a.setAttribute("src", r);
  else {
    const i = document.createElement("iframe");
    i.src = r, i.width = "560", i.height = "315", i.className = "max-w-full rounded shadow-sm", i.setAttribute("frameborder", "0"), i.setAttribute("allowfullscreen", "true"), i.setAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-presentation"
    ), t.deleteContents(), t.insertNode(i);
    const l = document.createRange();
    l.setStartAfter(i), l.collapse(!0), e.removeAllRanges(), e.addRange(l);
  }
  z0 = null;
}, C1 = (r) => {
  Kt();
  try {
    const e = M1.renderToString(r, {
      throwOnError: !1
    }), t = window.getSelection();
    if (!t || t.rangeCount === 0) {
      const l = document.querySelector(
        '[contenteditable="true"]'
      );
      if (l) {
        const u = document.createElement("span");
        u.className = "math-tex inline-block px-1 select-none bg-gray-50 rounded border border-transparent hover:border-blue-300 cursor-pointer", u.contentEditable = "false", u.setAttribute("data-latex", r), u.innerHTML = e, l.appendChild(u);
        const c = document.createTextNode(" ");
        l.appendChild(c);
        const d = document.createRange();
        d.setStartAfter(c), d.collapse(!0), t && (t.removeAllRanges(), t.addRange(d));
      }
      return;
    }
    const a = t.getRangeAt(0);
    let n = null, i = a.commonAncestorContainer;
    for (; i && i !== document.body; ) {
      if (i.nodeType === Node.ELEMENT_NODE && i.tagName.toLowerCase() === "span" && i.classList.contains("math-tex")) {
        n = i;
        break;
      }
      i = i.parentNode;
    }
    if (n)
      n.setAttribute("data-latex", r), n.innerHTML = e;
    else {
      const l = document.createElement("span");
      l.className = "math-tex inline-block px-1 select-none bg-gray-50 rounded border border-transparent hover:border-blue-300 cursor-pointer", l.contentEditable = "false", l.setAttribute("data-latex", r), l.innerHTML = e, a.deleteContents(), a.insertNode(l);
      const u = document.createRange();
      u.setStartAfter(l), u.collapse(!0), t.removeAllRanges(), t.addRange(u);
    }
  } catch (e) {
    console.error("KaTeX rendering error:", e);
  }
  z0 = null;
}, R1 = ({
  isOpen: r,
  onClose: e,
  onInsert: t,
  initialData: a
}) => {
  const [n, i] = se(""), [l, u] = se("");
  t0(() => {
    r && a ? (i(a.url), u(a.text)) : r && !a && (i(""), u(""));
  }, [r, a]);
  const c = (d) => {
    d.preventDefault(), n.trim() && (t(n.trim(), l.trim()), i(""), u(""), e());
  };
  return r ? /* @__PURE__ */ b.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ b.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ b.jsx("h3", { className: "text-lg font-semibold", children: a ? "Edit Link" : "Insert Link" }),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: e,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ b.jsx(ct, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs("form", { onSubmit: c, children: [
      /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ b.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "URL" }),
        /* @__PURE__ */ b.jsx(
          "input",
          {
            type: "url",
            value: n,
            onChange: (d) => i(d.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "https://example.com",
            required: !0,
            autoFocus: !0
          }
        )
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ b.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Link Text (optional)" }),
        /* @__PURE__ */ b.jsx(
          "input",
          {
            type: "text",
            value: l,
            onChange: (d) => u(d.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "Link text"
          }
        )
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ b.jsx(
          "button",
          {
            type: "button",
            onClick: e,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ b.jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: a ? "Update Link" : "Insert Link"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, D1 = ({
  isOpen: r,
  onClose: e,
  onInsert: t,
  initialData: a
}) => {
  const [n, i] = se(""), [l, u] = se(""), c = q0(null);
  t0(() => {
    r && a ? (i(a.alt), u(a.src)) : r && !a && (i(""), u(""));
  }, [r, a]);
  const d = (x) => {
    const k = x.target.files?.[0];
    if (k) {
      const A = new FileReader();
      A.onload = (T) => {
        const z = T.target?.result;
        t(z, n || k.name), i(""), u(""), e(), c.current && (c.current.value = "");
      }, A.readAsDataURL(k);
    }
  }, g = () => {
    a && l && (t(l, n), i(""), u(""), e());
  }, p = () => {
    c.current && c.current.click();
  };
  return r ? /* @__PURE__ */ b.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ b.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ b.jsx("h3", { className: "text-lg font-semibold", children: a ? "Edit Image" : "Insert Image" }),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: e,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ b.jsx(ct, { size: 20 })
        }
      )
    ] }),
    a && /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ b.jsx(
        "img",
        {
          src: l,
          alt: n,
          className: "max-w-full h-32 object-contain rounded border"
        }
      ),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          type: "button",
          onClick: p,
          className: "mt-2 px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200",
          children: "Replace Image"
        }
      )
    ] }),
    /* @__PURE__ */ b.jsx(
      "input",
      {
        ref: c,
        type: "file",
        accept: "image/*",
        onChange: d,
        className: "hidden"
      }
    ),
    !a && /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ b.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Select Image File" }),
      /* @__PURE__ */ b.jsx(
        "input",
        {
          type: "file",
          accept: "image/*",
          onChange: d,
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ b.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Alt Text (optional)" }),
      /* @__PURE__ */ b.jsx(
        "input",
        {
          type: "text",
          value: n,
          onChange: (x) => i(x.target.value),
          className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
          placeholder: "Image description",
          autoFocus: !!a
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "flex gap-2 justify-end", children: [
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: e,
          className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
          children: "Cancel"
        }
      ),
      a && /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: g,
          className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
          children: "Update Image"
        }
      )
    ] })
  ] }) }) : null;
}, L1 = ({
  isOpen: r,
  onClose: e,
  onInsert: t,
  initialData: a
}) => {
  const [n, i] = se(""), [l, u] = se("");
  t0(() => {
    r && a ? i(a.src) : r && !a && i(""), u("");
  }, [r, a]);
  const c = (g) => {
    const p = g.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
    );
    if (p)
      return `https://www.youtube.com/embed/${p[1]}`;
    const x = g.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return x ? `https://player.vimeo.com/video/${x[1]}` : g.includes("youtube.com/embed/") || g.includes("player.vimeo.com/video/") ? g : null;
  }, d = (g) => {
    if (g.preventDefault(), u(""), n.trim()) {
      const p = c(n.trim());
      p ? (t(p), i(""), e()) : u("Invalid URL. Only YouTube and Vimeo are supported for security.");
    }
  };
  return r ? /* @__PURE__ */ b.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ b.jsxs("div", { className: "bg-white rounded-lg p-6 w-96 max-w-full mx-4", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ b.jsx("h3", { className: "text-lg font-semibold", children: a ? "Edit Video" : "Insert Video" }),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: e,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ b.jsx(ct, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs("form", { onSubmit: d, children: [
      /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ b.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Video URL" }),
        /* @__PURE__ */ b.jsx(
          "input",
          {
            type: "url",
            value: n,
            onChange: (g) => i(g.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            placeholder: "YouTube, Vimeo, or embed URL",
            required: !0,
            autoFocus: !0
          }
        ),
        l && /* @__PURE__ */ b.jsx("p", { className: "text-sm text-red-500 mt-1", children: l }),
        /* @__PURE__ */ b.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Supports YouTube, Vimeo, and direct embed URLs" })
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ b.jsx(
          "button",
          {
            type: "button",
            onClick: e,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ b.jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: a ? "Update Video" : "Insert Video"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, mn = {
  Common: [
    { label: "+", code: "+" },
    { label: "-", code: "-" },
    { label: "=", code: "=" },
    { label: "÷", code: "\\div" },
    { label: "×", code: "\\times" },
    { label: "≠", code: "\\neq" },
    { label: "±", code: "\\pm" },
    { label: "∞", code: "\\infty" }
  ],
  Greek: [
    { label: "α", code: "\\alpha" },
    { label: "β", code: "\\beta" },
    { label: "γ", code: "\\gamma" },
    { label: "δ", code: "\\delta" },
    { label: "θ", code: "\\theta" },
    { label: "λ", code: "\\lambda" },
    { label: "π", code: "\\pi" },
    { label: "σ", code: "\\sigma" },
    { label: "Δ", code: "\\Delta" },
    { label: "Ω", code: "\\Omega" }
  ],
  Operators: [
    { label: "∑", code: "\\sum" },
    { label: "∏", code: "\\prod" },
    { label: "∫", code: "\\int" },
    { label: "√", code: "\\sqrt{}" },
    { label: "x/y", code: "\\frac{}{}" },
    { label: "x^n", code: "^{}" },
    { label: "x_n", code: "_{}" }
  ],
  Relations: [
    { label: "<", code: "<" },
    { label: ">", code: ">" },
    { label: "≤", code: "\\leq" },
    { label: "≥", code: "\\geq" },
    { label: "≈", code: "\\approx" },
    { label: "∈", code: "\\in" },
    { label: "→", code: "\\rightarrow" },
    { label: "←", code: "\\leftarrow" }
  ]
}, I1 = ({
  isOpen: r,
  onClose: e,
  onInsert: t,
  initialData: a
}) => {
  const [n, i] = se(""), l = q0(null), [u, c] = se("Common");
  t0(() => {
    r && a ? i(a.latex) : r && !a && i("");
  }, [r, a]);
  const d = (p) => {
    p.preventDefault(), n.trim() && (t(n.trim()), i(""), e());
  }, g = (p) => {
    if (!l.current) return;
    const x = l.current.selectionStart, k = l.current.selectionEnd, A = n, T = A.substring(0, x) + p + A.substring(k);
    i(T), setTimeout(() => {
      if (l.current) {
        l.current.focus();
        const z = x + p.length;
        p.endsWith("{}") ? l.current.setSelectionRange(z - 1, z - 1) : l.current.setSelectionRange(z, z);
      }
    }, 0);
  };
  return r ? /* @__PURE__ */ b.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50", children: /* @__PURE__ */ b.jsxs("div", { className: "bg-white rounded-lg p-6 w-[500px] max-w-full mx-4 shadow-xl", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ b.jsx("h3", { className: "text-lg font-semibold", children: a ? "Edit Equation" : "Insert Equation (LaTeX)" }),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: e,
          className: "text-gray-500 hover:text-gray-700",
          children: /* @__PURE__ */ b.jsx(ct, { size: 20 })
        }
      )
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ b.jsx("div", { className: "flex border-b border-gray-200 mb-2", children: Object.keys(mn).map((p) => /* @__PURE__ */ b.jsx(
        "button",
        {
          type: "button",
          onClick: () => c(p),
          className: `px-3 py-1 text-xs font-medium focus:outline-none transition-colors ${u === p ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-700"}`,
          children: p
        },
        p
      )) }),
      /* @__PURE__ */ b.jsx("div", { className: "grid grid-cols-8 gap-1 bg-gray-50 p-2 rounded max-h-32 overflow-y-auto", children: mn[u].map((p) => /* @__PURE__ */ b.jsx(
        "button",
        {
          type: "button",
          onClick: () => g(p.code),
          className: "p-1 h-8 text-center text-sm bg-white border border-gray-200 rounded hover:bg-blue-50 hover:border-blue-300 transition-colors",
          title: p.code,
          children: p.label
        },
        p.label
      )) })
    ] }),
    /* @__PURE__ */ b.jsxs("form", { onSubmit: d, children: [
      /* @__PURE__ */ b.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ b.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "LaTeX Expression" }),
        /* @__PURE__ */ b.jsx(
          "textarea",
          {
            ref: l,
            value: n,
            onChange: (p) => i(p.target.value),
            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm",
            placeholder: "e.g. E = mc^2",
            rows: 3,
            required: !0,
            autoFocus: !0
          }
        ),
        /* @__PURE__ */ b.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Supports standard LaTeX math syntax." })
      ] }),
      /* @__PURE__ */ b.jsxs("div", { className: "flex gap-2 justify-end", children: [
        /* @__PURE__ */ b.jsx(
          "button",
          {
            type: "button",
            onClick: e,
            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50",
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ b.jsx(
          "button",
          {
            type: "submit",
            className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
            children: a ? "Update Equation" : "Insert Equation"
          }
        )
      ] })
    ] })
  ] }) }) : null;
}, O1 = () => {
  const [r, e] = se(!1), [t, a] = se(!1), [n, i] = se(!1), [l, u] = se(!1), [c, d] = se(null), g = () => {
    Dt();
    const A = Lt();
    d(A?.type === "link" ? A : null), e(!0);
  }, p = () => {
    Dt();
    const A = Lt();
    d(A?.type === "image" ? A : null), a(!0);
  }, x = () => {
    Dt();
    const A = Lt();
    d(A?.type === "video" ? A : null), i(!0);
  }, k = () => {
    Dt();
    const A = Lt();
    d(
      A?.type === "equation" ? A : null
    ), u(!0);
  };
  return t0(() => {
    const A = (z) => {
      const N = z.target;
      if (N.classList.contains("math-tex") || N.closest(".math-tex")) {
        const O = N.classList.contains("math-tex") ? N : N.closest(".math-tex"), P = window.getSelection(), j = document.createRange();
        j.selectNode(O), P?.removeAllRanges(), P?.addRange(j), k();
      }
    }, T = document.querySelector('[contenteditable="true"]');
    return T && T.addEventListener("click", A), () => {
      const z = document.querySelector('[contenteditable="true"]');
      z && z.removeEventListener("click", A);
    };
  }, []), /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    /* @__PURE__ */ b.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: g,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Link",
          children: /* @__PURE__ */ b.jsx(ns, { size: 18 })
        }
      ),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: p,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Image",
          children: /* @__PURE__ */ b.jsx(es, { size: 18 })
        }
      ),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: x,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Video",
          children: /* @__PURE__ */ b.jsx(Ts, { size: 18 })
        }
      ),
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: k,
          className: "p-2 rounded transition-colors hover:bg-gray-200",
          title: "Insert Equation",
          children: /* @__PURE__ */ b.jsx(fs, { size: 18 })
        }
      )
    ] }),
    /* @__PURE__ */ b.jsx(
      R1,
      {
        isOpen: r,
        onClose: () => {
          e(!1), d(null);
        },
        onInsert: N1,
        initialData: c?.type === "link" ? {
          url: c.url,
          text: c.text
        } : null
      }
    ),
    /* @__PURE__ */ b.jsx(
      D1,
      {
        isOpen: t,
        onClose: () => {
          a(!1), d(null);
        },
        onInsert: E1,
        initialData: c?.type === "image" ? {
          src: c.src,
          alt: c.alt
        } : null
      }
    ),
    /* @__PURE__ */ b.jsx(
      L1,
      {
        isOpen: n,
        onClose: () => {
          i(!1), d(null);
        },
        onInsert: z1,
        initialData: c?.type === "video" ? {
          src: c.src
        } : null
      }
    ),
    /* @__PURE__ */ b.jsx(
      I1,
      {
        isOpen: l,
        onClose: () => {
          u(!1), d(null);
        },
        onInsert: C1,
        initialData: c?.type === "equation" ? {
          latex: c.latex
        } : null
      }
    )
  ] });
}, B1 = ({
  getButtonClass: r,
  onUndo: e,
  onRedo: t,
  canUndo: a,
  canRedo: n
}) => {
  const i = (u) => {
    u.preventDefault(), a && e();
  }, l = (u) => {
    u.preventDefault(), n && t();
  };
  return /* @__PURE__ */ b.jsxs("div", { className: "flex gap-1", children: [
    /* @__PURE__ */ b.jsx(
      "button",
      {
        onMouseDown: i,
        className: `${r(!1)} ${a ? "" : "opacity-50 cursor-not-allowed"}`,
        title: "Undo",
        disabled: !a,
        children: /* @__PURE__ */ b.jsx(ks, { size: 18 })
      }
    ),
    /* @__PURE__ */ b.jsx(
      "button",
      {
        onMouseDown: l,
        className: `${r(!1)} ${n ? "" : "opacity-50 cursor-not-allowed"}`,
        title: "Redo",
        disabled: !n,
        children: /* @__PURE__ */ b.jsx(hs, { size: 18 })
      }
    )
  ] });
}, H1 = ({
  getButtonClass: r,
  updateActiveFormats: e
}) => {
  const [t, a] = se(!1), [n, i] = se(!1), [l, u] = se(!1), [c, d] = se(""), g = [
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
  ], x = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96], k = (N) => {
    document.execCommand("foreColor", !1, N), a(!1), e();
  }, A = (N) => {
    document.execCommand("fontName", !1, N), i(!1), e();
  }, T = (N) => {
    document.execCommand("fontSize", !1, "7");
    const O = document.getElementsByTagName("font");
    for (let P = O.length - 1; P >= 0; P--) {
      const j = O[P];
      if (j.getAttribute("size") === "7") {
        const U = document.createElement("span");
        U.style.fontSize = `${N}px`, U.innerHTML = j.innerHTML, j.parentNode?.replaceChild(U, j);
      }
    }
    u(!1), d(""), e();
  }, z = (N) => {
    N.preventDefault(), c && T(c);
  };
  return /* @__PURE__ */ b.jsxs("div", { className: "flex gap-1 items-center relative", children: [
    /* @__PURE__ */ b.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ b.jsxs(
        "button",
        {
          onClick: () => i(!n),
          onBlur: () => setTimeout(() => i(!1), 200),
          className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[100px] justify-between transition-colors",
          title: "Font Family",
          children: [
            /* @__PURE__ */ b.jsx("span", { className: "font-medium truncate max-w-[80px]", children: "Font" }),
            /* @__PURE__ */ b.jsx(jt, { size: 14, className: "text-gray-500" })
          ]
        }
      ),
      n && /* @__PURE__ */ b.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px]", children: p.map((N) => /* @__PURE__ */ b.jsx(
        "button",
        {
          onMouseDown: (O) => {
            O.preventDefault(), A(N.value);
          },
          className: "w-full text-left px-4 py-2 text-sm hover:bg-gray-50 text-gray-700 font-medium",
          style: { fontFamily: N.value },
          children: N.name
        },
        N.name
      )) })
    ] }),
    /* @__PURE__ */ b.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ b.jsxs(
        "button",
        {
          onClick: () => u(!l),
          onBlur: () => {
            setTimeout(() => {
              u(!1);
            }, 200);
          },
          className: "flex items-center gap-2 px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[60px] justify-between transition-colors",
          title: "Font Size",
          children: [
            /* @__PURE__ */ b.jsx("span", { className: "font-medium", children: "Size" }),
            /* @__PURE__ */ b.jsx(jt, { size: 14, className: "text-gray-500" })
          ]
        }
      ),
      l && /* @__PURE__ */ b.jsxs(
        "div",
        {
          className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[100px] max-h-[300px] overflow-y-auto",
          onMouseDown: (N) => N.preventDefault(),
          children: [
            /* @__PURE__ */ b.jsx("div", { className: "p-2 border-b border-gray-100", children: /* @__PURE__ */ b.jsxs("form", { onSubmit: z, className: "flex gap-1", children: [
              /* @__PURE__ */ b.jsx(
                "input",
                {
                  type: "number",
                  value: c,
                  onChange: (N) => d(N.target.value),
                  placeholder: "px",
                  className: "w-12 text-sm border border-gray-300 rounded px-1",
                  onMouseDown: (N) => N.stopPropagation()
                }
              ),
              /* @__PURE__ */ b.jsx("button", { type: "submit", className: "text-xs bg-blue-50 text-blue-600 px-1 rounded", children: "Go" })
            ] }) }),
            x.map((N) => /* @__PURE__ */ b.jsx(
              "button",
              {
                onMouseDown: (O) => {
                  O.preventDefault(), T(N);
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
    /* @__PURE__ */ b.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ b.jsx(
        "button",
        {
          onClick: () => a(!t),
          onBlur: () => setTimeout(() => a(!1), 200),
          className: r(t),
          title: "Text Color",
          children: /* @__PURE__ */ b.jsx(cs, { size: 18 })
        }
      ),
      t && /* @__PURE__ */ b.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-2 w-[180px] flex flex-wrap gap-1", children: g.map((N) => /* @__PURE__ */ b.jsx(
        "button",
        {
          onMouseDown: (O) => {
            O.preventDefault(), k(N);
          },
          className: "w-5 h-5 rounded border border-gray-300 hover:scale-110 transition-transform",
          style: { backgroundColor: N },
          title: N
        },
        N
      )) })
    ] })
  ] });
}, q1 = ({ getButtonClass: r }) => {
  const [e, t] = se(!1), [a, n] = se(2), [i, l] = se(2), u = (c) => {
    c.preventDefault();
    let d = '<table style="border-collapse: collapse; width: 100%; border: 1px solid #ccc;">';
    d += "<tbody>";
    for (let g = 0; g < a; g++) {
      d += "<tr>";
      for (let p = 0; p < i; p++)
        d += '<td style="border: 1px solid #ccc; padding: 8px; min-width: 50px;">&nbsp;</td>';
      d += "</tr>";
    }
    d += "</tbody></table><p>&nbsp;</p>", document.execCommand("insertHTML", !1, d), t(!1);
  };
  return /* @__PURE__ */ b.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ b.jsx(
      "button",
      {
        onClick: () => t(!e),
        className: r(e),
        title: "Insert Table",
        children: /* @__PURE__ */ b.jsx(bs, { size: 18 })
      }
    ),
    e && /* @__PURE__ */ b.jsxs("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 w-64", children: [
      /* @__PURE__ */ b.jsxs("div", { className: "flex justify-between items-center mb-3", children: [
        /* @__PURE__ */ b.jsx("h3", { className: "text-sm font-semibold text-gray-700", children: "Insert Table" }),
        /* @__PURE__ */ b.jsx("button", { onClick: () => t(!1), className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ b.jsx(ct, { size: 16 }) })
      ] }),
      /* @__PURE__ */ b.jsxs("form", { onSubmit: u, children: [
        /* @__PURE__ */ b.jsxs("div", { className: "flex gap-4 mb-4", children: [
          /* @__PURE__ */ b.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ b.jsx("label", { className: "block text-xs font-medium text-gray-500 mb-1", children: "Rows" }),
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: "number",
                min: "1",
                max: "10",
                value: a,
                onChange: (c) => n(parseInt(c.target.value) || 1),
                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
              }
            )
          ] }),
          /* @__PURE__ */ b.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ b.jsx("label", { className: "block text-xs font-medium text-gray-500 mb-1", children: "Columns" }),
            /* @__PURE__ */ b.jsx(
              "input",
              {
                type: "number",
                min: "1",
                max: "10",
                value: i,
                onChange: (c) => l(parseInt(c.target.value) || 1),
                className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 outline-none"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ b.jsx(
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
}, j1 = ({
  config: r,
  activeFormats: e,
  currentTextFormat: t,
  updateActiveFormats: a,
  applyTextFormat: n,
  editorRef: i,
  undo: l,
  redo: u,
  canUndo: c,
  canRedo: d
}) => {
  const [g, p] = se(!1), x = (T) => `p-2 rounded transition-colors ${T ? "bg-blue-100 text-blue-600 hover:bg-blue-200" : "text-gray-600 hover:bg-gray-100"}`, k = () => /* @__PURE__ */ b.jsx("div", { className: "w-px h-6 bg-gray-300 mx-1" }), A = [
    { value: "p", label: "Normal text", tag: "p" },
    { value: "h1", label: "Title", tag: "h1" },
    { value: "h2", label: "Subtitle", tag: "h2" },
    { value: "h3", label: "Heading 1", tag: "h3" },
    { value: "h4", label: "Heading 2", tag: "h4" },
    { value: "h5", label: "Heading 3", tag: "h5" },
    { value: "h6", label: "Heading 4", tag: "h6" }
  ];
  return /* @__PURE__ */ b.jsx("div", { className: "sticky top-0 z-50 w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-center border", children: /* @__PURE__ */ b.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-1 max-w-7xl mx-auto w-full", children: [
    /* @__PURE__ */ b.jsx(
      B1,
      {
        getButtonClass: x,
        onUndo: l,
        onRedo: u,
        canUndo: c,
        canRedo: d
      }
    ),
    /* @__PURE__ */ b.jsx(k, {}),
    r.showTextFormat && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ b.jsxs(
          "button",
          {
            onClick: () => p(!g),
            onBlur: () => setTimeout(() => p(!1), 200),
            className: "flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded min-w-[130px] justify-between transition-colors",
            children: [
              /* @__PURE__ */ b.jsx("span", { className: "font-medium truncate max-w-[100px]", children: A.find((T) => T.value === t)?.label || "Normal text" }),
              /* @__PURE__ */ b.jsx(jt, { size: 14, className: "text-gray-500" })
            ]
          }
        ),
        g && /* @__PURE__ */ b.jsx("div", { className: "absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[160px] max-h-[300px] overflow-y-auto w-full", children: A.map((T) => /* @__PURE__ */ b.jsx(
          "button",
          {
            onMouseDown: (z) => {
              z.preventDefault(), n(T.tag);
            },
            className: `w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${t === T.value ? "bg-blue-50 text-blue-600 font-medium" : "text-gray-700"}`,
            title: `Format as ${T.label}`,
            children: /* @__PURE__ */ b.jsx("span", { className: T.tag === "p" ? "" : T.tag === "h1" ? "text-2xl font-bold" : T.tag === "h2" ? "text-xl font-bold" : T.tag === "h3" ? "text-lg font-bold" : "font-bold", children: T.label })
          },
          T.value
        )) })
      ] }),
      /* @__PURE__ */ b.jsx(k, {})
    ] }),
    /* @__PURE__ */ b.jsx(
      H1,
      {
        getButtonClass: x,
        updateActiveFormats: a
      }
    ),
    /* @__PURE__ */ b.jsx(k, {}),
    r.showInlineFormat && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(
        Sn,
        {
          editorRef: i,
          activeFormats: {
            bold: e.bold,
            italic: e.italic,
            underline: e.underline,
            strikethrough: e.strikethrough
          },
          updateActiveFormats: a,
          getButtonClass: x
        }
      ),
      /* @__PURE__ */ b.jsx(k, {})
    ] }),
    r.showAlignment && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(
        Tn,
        {
          activeFormats: {
            alignLeft: e.alignLeft,
            alignCenter: e.alignCenter,
            alignRight: e.alignRight,
            alignJustify: e.alignJustify
          },
          updateActiveFormats: a,
          getButtonClass: x
        }
      ),
      /* @__PURE__ */ b.jsx(k, {})
    ] }),
    r.showList && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(
        An,
        {
          editorRef: i,
          activeFormats: {
            bulletList: e.bulletList,
            numberedList: e.numberedList
          },
          updateActiveFormats: a,
          getButtonClass: x
        }
      ),
      /* @__PURE__ */ b.jsx(k, {})
    ] }),
    r.showInsert && /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
      /* @__PURE__ */ b.jsx(O1, {}),
      /* @__PURE__ */ b.jsx(q1, { getButtonClass: x })
    ] })
  ] }) });
};
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */
const {
  entries: wi,
  setPrototypeOf: hn,
  isFrozen: F1,
  getPrototypeOf: P1,
  getOwnPropertyDescriptor: _1
} = Object;
let {
  freeze: Ie,
  seal: Je,
  create: jr
} = Object, {
  apply: Fr,
  construct: Pr
} = typeof Reflect < "u" && Reflect;
Ie || (Ie = function(e) {
  return e;
});
Je || (Je = function(e) {
  return e;
});
Fr || (Fr = function(e, t) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++)
    n[i - 2] = arguments[i];
  return e.apply(t, n);
});
Pr || (Pr = function(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    a[n - 1] = arguments[n];
  return new e(...a);
});
const It = Oe(Array.prototype.forEach), U1 = Oe(Array.prototype.lastIndexOf), dn = Oe(Array.prototype.pop), tt = Oe(Array.prototype.push), G1 = Oe(Array.prototype.splice), qt = Oe(String.prototype.toLowerCase), Sr = Oe(String.prototype.toString), Tr = Oe(String.prototype.match), rt = Oe(String.prototype.replace), $1 = Oe(String.prototype.indexOf), V1 = Oe(String.prototype.trim), Qe = Oe(Object.prototype.hasOwnProperty), De = Oe(RegExp.prototype.test), at = W1(TypeError);
function Oe(r) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      a[n - 1] = arguments[n];
    return Fr(r, e, a);
  };
}
function W1(r) {
  return function() {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
      t[a] = arguments[a];
    return Pr(r, t);
  };
}
function te(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qt;
  hn && hn(r, null);
  let a = e.length;
  for (; a--; ) {
    let n = e[a];
    if (typeof n == "string") {
      const i = t(n);
      i !== n && (F1(e) || (e[a] = i), n = i);
    }
    r[n] = !0;
  }
  return r;
}
function Y1(r) {
  for (let e = 0; e < r.length; e++)
    Qe(r, e) || (r[e] = null);
  return r;
}
function i0(r) {
  const e = jr(null);
  for (const [t, a] of wi(r))
    Qe(r, t) && (Array.isArray(a) ? e[t] = Y1(a) : a && typeof a == "object" && a.constructor === Object ? e[t] = i0(a) : e[t] = a);
  return e;
}
function nt(r, e) {
  for (; r !== null; ) {
    const a = _1(r, e);
    if (a) {
      if (a.get)
        return Oe(a.get);
      if (typeof a.value == "function")
        return Oe(a.value);
    }
    r = P1(r);
  }
  function t() {
    return null;
  }
  return t;
}
const fn = Ie(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ar = Ie(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Mr = Ie(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), X1 = Ie(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Nr = Ie(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Z1 = Ie(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), pn = Ie(["#text"]), vn = Ie(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Er = Ie(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), gn = Ie(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ot = Ie(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), J1 = Je(/\{\{[\w\W]*|[\w\W]*\}\}/gm), K1 = Je(/<%[\w\W]*|[\w\W]*%>/gm), Q1 = Je(/\$\{[\w\W]*/gm), eo = Je(/^data-[\-\w.\u00B7-\uFFFF]+$/), to = Je(/^aria-[\-\w]+$/), ki = Je(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ro = Je(/^(?:\w+script|data):/i), ao = Je(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Si = Je(/^html$/i), no = Je(/^[a-z][.\w]*(-[.\w]+)+$/i);
var bn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: to,
  ATTR_WHITESPACE: ao,
  CUSTOM_ELEMENT: no,
  DATA_ATTR: eo,
  DOCTYPE_NAME: Si,
  ERB_EXPR: K1,
  IS_ALLOWED_URI: ki,
  IS_SCRIPT_OR_DATA: ro,
  MUSTACHE_EXPR: J1,
  TMPLIT_EXPR: Q1
});
const it = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, io = function() {
  return typeof window > "u" ? null : window;
}, so = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let a = null;
  const n = "data-tt-policy-suffix";
  t && t.hasAttribute(n) && (a = t.getAttribute(n));
  const i = "dompurify" + (a ? "#" + a : "");
  try {
    return e.createPolicy(i, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, xn = function() {
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
function Ti() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : io();
  const e = (_) => Ti(_);
  if (e.version = "3.3.1", e.removed = [], !r || !r.document || r.document.nodeType !== it.document || !r.Element)
    return e.isSupported = !1, e;
  let {
    document: t
  } = r;
  const a = t, n = a.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: l,
    Node: u,
    Element: c,
    NodeFilter: d,
    NamedNodeMap: g = r.NamedNodeMap || r.MozNamedAttrMap,
    HTMLFormElement: p,
    DOMParser: x,
    trustedTypes: k
  } = r, A = c.prototype, T = nt(A, "cloneNode"), z = nt(A, "remove"), N = nt(A, "nextSibling"), O = nt(A, "childNodes"), P = nt(A, "parentNode");
  if (typeof l == "function") {
    const _ = t.createElement("template");
    _.content && _.content.ownerDocument && (t = _.content.ownerDocument);
  }
  let j, U = "";
  const {
    implementation: Q,
    createNodeIterator: ee,
    createDocumentFragment: le,
    getElementsByTagName: Z
  } = t, {
    importNode: ze
  } = a;
  let H = xn();
  e.isSupported = typeof wi == "function" && typeof P == "function" && Q && Q.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: V,
    ERB_EXPR: re,
    TMPLIT_EXPR: ae,
    DATA_ATTR: ce,
    ARIA_ATTR: me,
    IS_SCRIPT_OR_DATA: ue,
    ATTR_WHITESPACE: fe,
    CUSTOM_ELEMENT: Ae
  } = bn;
  let {
    IS_ALLOWED_URI: M
  } = bn, I = null;
  const Y = te({}, [...fn, ...Ar, ...Mr, ...Nr, ...pn]);
  let X = null;
  const xe = te({}, [...vn, ...Er, ...gn, ...Ot]);
  let K = Object.seal(jr(null, {
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
  })), Ve = null, He = null;
  const oe = Object.seal(jr(null, {
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
  let qe = !0, We = !0, F0 = !1, ft = !0, T0 = !1, A0 = !0, r0 = !1, P0 = !1, I0 = !1, Ke = !1, h0 = !1, pt = !1, oa = !0, ua = !1;
  const Ai = "user-content-";
  let Qt = !0, J0 = !1, _0 = {}, a0 = null;
  const er = te({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ca = null;
  const ma = te({}, ["audio", "video", "img", "source", "image", "track"]);
  let tr = null;
  const ha = te({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), vt = "http://www.w3.org/1998/Math/MathML", gt = "http://www.w3.org/2000/svg", d0 = "http://www.w3.org/1999/xhtml";
  let U0 = d0, rr = !1, ar = null;
  const Mi = te({}, [vt, gt, d0], Sr);
  let bt = te({}, ["mi", "mo", "mn", "ms", "mtext"]), xt = te({}, ["annotation-xml"]);
  const Ni = te({}, ["title", "style", "font", "a", "script"]);
  let K0 = null;
  const Ei = ["application/xhtml+xml", "text/html"], zi = "text/html";
  let Me = null, G0 = null;
  const Ci = t.createElement("form"), da = function(y) {
    return y instanceof RegExp || y instanceof Function;
  }, nr = function() {
    let y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(G0 && G0 === y)) {
      if ((!y || typeof y != "object") && (y = {}), y = i0(y), K0 = // eslint-disable-next-line unicorn/prefer-includes
      Ei.indexOf(y.PARSER_MEDIA_TYPE) === -1 ? zi : y.PARSER_MEDIA_TYPE, Me = K0 === "application/xhtml+xml" ? Sr : qt, I = Qe(y, "ALLOWED_TAGS") ? te({}, y.ALLOWED_TAGS, Me) : Y, X = Qe(y, "ALLOWED_ATTR") ? te({}, y.ALLOWED_ATTR, Me) : xe, ar = Qe(y, "ALLOWED_NAMESPACES") ? te({}, y.ALLOWED_NAMESPACES, Sr) : Mi, tr = Qe(y, "ADD_URI_SAFE_ATTR") ? te(i0(ha), y.ADD_URI_SAFE_ATTR, Me) : ha, ca = Qe(y, "ADD_DATA_URI_TAGS") ? te(i0(ma), y.ADD_DATA_URI_TAGS, Me) : ma, a0 = Qe(y, "FORBID_CONTENTS") ? te({}, y.FORBID_CONTENTS, Me) : er, Ve = Qe(y, "FORBID_TAGS") ? te({}, y.FORBID_TAGS, Me) : i0({}), He = Qe(y, "FORBID_ATTR") ? te({}, y.FORBID_ATTR, Me) : i0({}), _0 = Qe(y, "USE_PROFILES") ? y.USE_PROFILES : !1, qe = y.ALLOW_ARIA_ATTR !== !1, We = y.ALLOW_DATA_ATTR !== !1, F0 = y.ALLOW_UNKNOWN_PROTOCOLS || !1, ft = y.ALLOW_SELF_CLOSE_IN_ATTR !== !1, T0 = y.SAFE_FOR_TEMPLATES || !1, A0 = y.SAFE_FOR_XML !== !1, r0 = y.WHOLE_DOCUMENT || !1, Ke = y.RETURN_DOM || !1, h0 = y.RETURN_DOM_FRAGMENT || !1, pt = y.RETURN_TRUSTED_TYPE || !1, I0 = y.FORCE_BODY || !1, oa = y.SANITIZE_DOM !== !1, ua = y.SANITIZE_NAMED_PROPS || !1, Qt = y.KEEP_CONTENT !== !1, J0 = y.IN_PLACE || !1, M = y.ALLOWED_URI_REGEXP || ki, U0 = y.NAMESPACE || d0, bt = y.MATHML_TEXT_INTEGRATION_POINTS || bt, xt = y.HTML_INTEGRATION_POINTS || xt, K = y.CUSTOM_ELEMENT_HANDLING || {}, y.CUSTOM_ELEMENT_HANDLING && da(y.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (K.tagNameCheck = y.CUSTOM_ELEMENT_HANDLING.tagNameCheck), y.CUSTOM_ELEMENT_HANDLING && da(y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (K.attributeNameCheck = y.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), y.CUSTOM_ELEMENT_HANDLING && typeof y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (K.allowCustomizedBuiltInElements = y.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), T0 && (We = !1), h0 && (Ke = !0), _0 && (I = te({}, pn), X = [], _0.html === !0 && (te(I, fn), te(X, vn)), _0.svg === !0 && (te(I, Ar), te(X, Er), te(X, Ot)), _0.svgFilters === !0 && (te(I, Mr), te(X, Er), te(X, Ot)), _0.mathMl === !0 && (te(I, Nr), te(X, gn), te(X, Ot))), y.ADD_TAGS && (typeof y.ADD_TAGS == "function" ? oe.tagCheck = y.ADD_TAGS : (I === Y && (I = i0(I)), te(I, y.ADD_TAGS, Me))), y.ADD_ATTR && (typeof y.ADD_ATTR == "function" ? oe.attributeCheck = y.ADD_ATTR : (X === xe && (X = i0(X)), te(X, y.ADD_ATTR, Me))), y.ADD_URI_SAFE_ATTR && te(tr, y.ADD_URI_SAFE_ATTR, Me), y.FORBID_CONTENTS && (a0 === er && (a0 = i0(a0)), te(a0, y.FORBID_CONTENTS, Me)), y.ADD_FORBID_CONTENTS && (a0 === er && (a0 = i0(a0)), te(a0, y.ADD_FORBID_CONTENTS, Me)), Qt && (I["#text"] = !0), r0 && te(I, ["html", "head", "body"]), I.table && (te(I, ["tbody"]), delete Ve.tbody), y.TRUSTED_TYPES_POLICY) {
        if (typeof y.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw at('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof y.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw at('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        j = y.TRUSTED_TYPES_POLICY, U = j.createHTML("");
      } else
        j === void 0 && (j = so(k, n)), j !== null && typeof U == "string" && (U = j.createHTML(""));
      Ie && Ie(y), G0 = y;
    }
  }, fa = te({}, [...Ar, ...Mr, ...X1]), pa = te({}, [...Nr, ...Z1]), Ri = function(y) {
    let D = P(y);
    (!D || !D.tagName) && (D = {
      namespaceURI: U0,
      tagName: "template"
    });
    const F = qt(y.tagName), pe = qt(D.tagName);
    return ar[y.namespaceURI] ? y.namespaceURI === gt ? D.namespaceURI === d0 ? F === "svg" : D.namespaceURI === vt ? F === "svg" && (pe === "annotation-xml" || bt[pe]) : !!fa[F] : y.namespaceURI === vt ? D.namespaceURI === d0 ? F === "math" : D.namespaceURI === gt ? F === "math" && xt[pe] : !!pa[F] : y.namespaceURI === d0 ? D.namespaceURI === gt && !xt[pe] || D.namespaceURI === vt && !bt[pe] ? !1 : !pa[F] && (Ni[F] || !fa[F]) : !!(K0 === "application/xhtml+xml" && ar[y.namespaceURI]) : !1;
  }, n0 = function(y) {
    tt(e.removed, {
      element: y
    });
    try {
      P(y).removeChild(y);
    } catch {
      z(y);
    }
  }, O0 = function(y, D) {
    try {
      tt(e.removed, {
        attribute: D.getAttributeNode(y),
        from: D
      });
    } catch {
      tt(e.removed, {
        attribute: null,
        from: D
      });
    }
    if (D.removeAttribute(y), y === "is")
      if (Ke || h0)
        try {
          n0(D);
        } catch {
        }
      else
        try {
          D.setAttribute(y, "");
        } catch {
        }
  }, va = function(y) {
    let D = null, F = null;
    if (I0)
      y = "<remove></remove>" + y;
    else {
      const ke = Tr(y, /^[\r\n\t ]+/);
      F = ke && ke[0];
    }
    K0 === "application/xhtml+xml" && U0 === d0 && (y = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + y + "</body></html>");
    const pe = j ? j.createHTML(y) : y;
    if (U0 === d0)
      try {
        D = new x().parseFromString(pe, K0);
      } catch {
      }
    if (!D || !D.documentElement) {
      D = Q.createDocument(U0, "template", null);
      try {
        D.documentElement.innerHTML = rr ? U : pe;
      } catch {
      }
    }
    const Ce = D.body || D.documentElement;
    return y && F && Ce.insertBefore(t.createTextNode(F), Ce.childNodes[0] || null), U0 === d0 ? Z.call(D, r0 ? "html" : "body")[0] : r0 ? D.documentElement : Ce;
  }, ga = function(y) {
    return ee.call(
      y.ownerDocument || y,
      y,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, ir = function(y) {
    return y instanceof p && (typeof y.nodeName != "string" || typeof y.textContent != "string" || typeof y.removeChild != "function" || !(y.attributes instanceof g) || typeof y.removeAttribute != "function" || typeof y.setAttribute != "function" || typeof y.namespaceURI != "string" || typeof y.insertBefore != "function" || typeof y.hasChildNodes != "function");
  }, ba = function(y) {
    return typeof u == "function" && y instanceof u;
  };
  function f0(_, y, D) {
    It(_, (F) => {
      F.call(e, y, D, G0);
    });
  }
  const xa = function(y) {
    let D = null;
    if (f0(H.beforeSanitizeElements, y, null), ir(y))
      return n0(y), !0;
    const F = Me(y.nodeName);
    if (f0(H.uponSanitizeElement, y, {
      tagName: F,
      allowedTags: I
    }), A0 && y.hasChildNodes() && !ba(y.firstElementChild) && De(/<[/\w!]/g, y.innerHTML) && De(/<[/\w!]/g, y.textContent) || y.nodeType === it.progressingInstruction || A0 && y.nodeType === it.comment && De(/<[/\w]/g, y.data))
      return n0(y), !0;
    if (!(oe.tagCheck instanceof Function && oe.tagCheck(F)) && (!I[F] || Ve[F])) {
      if (!Ve[F] && wa(F) && (K.tagNameCheck instanceof RegExp && De(K.tagNameCheck, F) || K.tagNameCheck instanceof Function && K.tagNameCheck(F)))
        return !1;
      if (Qt && !a0[F]) {
        const pe = P(y) || y.parentNode, Ce = O(y) || y.childNodes;
        if (Ce && pe) {
          const ke = Ce.length;
          for (let je = ke - 1; je >= 0; --je) {
            const p0 = T(Ce[je], !0);
            p0.__removalCount = (y.__removalCount || 0) + 1, pe.insertBefore(p0, N(y));
          }
        }
      }
      return n0(y), !0;
    }
    return y instanceof c && !Ri(y) || (F === "noscript" || F === "noembed" || F === "noframes") && De(/<\/no(script|embed|frames)/i, y.innerHTML) ? (n0(y), !0) : (T0 && y.nodeType === it.text && (D = y.textContent, It([V, re, ae], (pe) => {
      D = rt(D, pe, " ");
    }), y.textContent !== D && (tt(e.removed, {
      element: y.cloneNode()
    }), y.textContent = D)), f0(H.afterSanitizeElements, y, null), !1);
  }, ya = function(y, D, F) {
    if (oa && (D === "id" || D === "name") && (F in t || F in Ci))
      return !1;
    if (!(We && !He[D] && De(ce, D))) {
      if (!(qe && De(me, D))) {
        if (!(oe.attributeCheck instanceof Function && oe.attributeCheck(D, y))) {
          if (!X[D] || He[D]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(wa(y) && (K.tagNameCheck instanceof RegExp && De(K.tagNameCheck, y) || K.tagNameCheck instanceof Function && K.tagNameCheck(y)) && (K.attributeNameCheck instanceof RegExp && De(K.attributeNameCheck, D) || K.attributeNameCheck instanceof Function && K.attributeNameCheck(D, y)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              D === "is" && K.allowCustomizedBuiltInElements && (K.tagNameCheck instanceof RegExp && De(K.tagNameCheck, F) || K.tagNameCheck instanceof Function && K.tagNameCheck(F)))
            ) return !1;
          } else if (!tr[D]) {
            if (!De(M, rt(F, fe, ""))) {
              if (!((D === "src" || D === "xlink:href" || D === "href") && y !== "script" && $1(F, "data:") === 0 && ca[y])) {
                if (!(F0 && !De(ue, rt(F, fe, "")))) {
                  if (F)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, wa = function(y) {
    return y !== "annotation-xml" && Tr(y, Ae);
  }, ka = function(y) {
    f0(H.beforeSanitizeAttributes, y, null);
    const {
      attributes: D
    } = y;
    if (!D || ir(y))
      return;
    const F = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: X,
      forceKeepAttr: void 0
    };
    let pe = D.length;
    for (; pe--; ) {
      const Ce = D[pe], {
        name: ke,
        namespaceURI: je,
        value: p0
      } = Ce, $0 = Me(ke), sr = p0;
      let Ee = ke === "value" ? sr : V1(sr);
      if (F.attrName = $0, F.attrValue = Ee, F.keepAttr = !0, F.forceKeepAttr = void 0, f0(H.uponSanitizeAttribute, y, F), Ee = F.attrValue, ua && ($0 === "id" || $0 === "name") && (O0(ke, y), Ee = Ai + Ee), A0 && De(/((--!?|])>)|<\/(style|title|textarea)/i, Ee)) {
        O0(ke, y);
        continue;
      }
      if ($0 === "attributename" && Tr(Ee, "href")) {
        O0(ke, y);
        continue;
      }
      if (F.forceKeepAttr)
        continue;
      if (!F.keepAttr) {
        O0(ke, y);
        continue;
      }
      if (!ft && De(/\/>/i, Ee)) {
        O0(ke, y);
        continue;
      }
      T0 && It([V, re, ae], (Ta) => {
        Ee = rt(Ee, Ta, " ");
      });
      const Sa = Me(y.nodeName);
      if (!ya(Sa, $0, Ee)) {
        O0(ke, y);
        continue;
      }
      if (j && typeof k == "object" && typeof k.getAttributeType == "function" && !je)
        switch (k.getAttributeType(Sa, $0)) {
          case "TrustedHTML": {
            Ee = j.createHTML(Ee);
            break;
          }
          case "TrustedScriptURL": {
            Ee = j.createScriptURL(Ee);
            break;
          }
        }
      if (Ee !== sr)
        try {
          je ? y.setAttributeNS(je, ke, Ee) : y.setAttribute(ke, Ee), ir(y) ? n0(y) : dn(e.removed);
        } catch {
          O0(ke, y);
        }
    }
    f0(H.afterSanitizeAttributes, y, null);
  }, Di = function _(y) {
    let D = null;
    const F = ga(y);
    for (f0(H.beforeSanitizeShadowDOM, y, null); D = F.nextNode(); )
      f0(H.uponSanitizeShadowNode, D, null), xa(D), ka(D), D.content instanceof i && _(D.content);
    f0(H.afterSanitizeShadowDOM, y, null);
  };
  return e.sanitize = function(_) {
    let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = null, F = null, pe = null, Ce = null;
    if (rr = !_, rr && (_ = "<!-->"), typeof _ != "string" && !ba(_))
      if (typeof _.toString == "function") {
        if (_ = _.toString(), typeof _ != "string")
          throw at("dirty is not a string, aborting");
      } else
        throw at("toString is not a function");
    if (!e.isSupported)
      return _;
    if (P0 || nr(y), e.removed = [], typeof _ == "string" && (J0 = !1), J0) {
      if (_.nodeName) {
        const p0 = Me(_.nodeName);
        if (!I[p0] || Ve[p0])
          throw at("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (_ instanceof u)
      D = va("<!---->"), F = D.ownerDocument.importNode(_, !0), F.nodeType === it.element && F.nodeName === "BODY" || F.nodeName === "HTML" ? D = F : D.appendChild(F);
    else {
      if (!Ke && !T0 && !r0 && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return j && pt ? j.createHTML(_) : _;
      if (D = va(_), !D)
        return Ke ? null : pt ? U : "";
    }
    D && I0 && n0(D.firstChild);
    const ke = ga(J0 ? _ : D);
    for (; pe = ke.nextNode(); )
      xa(pe), ka(pe), pe.content instanceof i && Di(pe.content);
    if (J0)
      return _;
    if (Ke) {
      if (h0)
        for (Ce = le.call(D.ownerDocument); D.firstChild; )
          Ce.appendChild(D.firstChild);
      else
        Ce = D;
      return (X.shadowroot || X.shadowrootmode) && (Ce = ze.call(a, Ce, !0)), Ce;
    }
    let je = r0 ? D.outerHTML : D.innerHTML;
    return r0 && I["!doctype"] && D.ownerDocument && D.ownerDocument.doctype && D.ownerDocument.doctype.name && De(Si, D.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + D.ownerDocument.doctype.name + `>
` + je), T0 && It([V, re, ae], (p0) => {
      je = rt(je, p0, " ");
    }), j && pt ? j.createHTML(je) : je;
  }, e.setConfig = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    nr(_), P0 = !0;
  }, e.clearConfig = function() {
    G0 = null, P0 = !1;
  }, e.isValidAttribute = function(_, y, D) {
    G0 || nr({});
    const F = Me(_), pe = Me(y);
    return ya(F, pe, D);
  }, e.addHook = function(_, y) {
    typeof y == "function" && tt(H[_], y);
  }, e.removeHook = function(_, y) {
    if (y !== void 0) {
      const D = U1(H[_], y);
      return D === -1 ? void 0 : G1(H[_], D, 1)[0];
    }
    return dn(H[_]);
  }, e.removeHooks = function(_) {
    H[_] = [];
  }, e.removeAllHooks = function() {
    H = xn();
  }, e;
}
var yn = Ti();
const lo = (r) => {
  const [e, t] = se([{ html: r }]), [a, n] = se(0), i = q0(null), l = lr((p, x = !1) => {
    if (i.current && clearTimeout(i.current), x) {
      t((k) => k[a].html === p ? k : [...k.slice(0, a + 1), { html: p }]), n((k) => k + 1);
      return;
    }
    i.current = setTimeout(() => {
      t((k) => k[a].html === p ? k : [...k.slice(0, a + 1), { html: p }]), n((k) => k + 1);
    }, 500);
  }, [a]), u = lr(() => {
    if (a > 0) {
      const p = a - 1;
      return n(p), e[p].html;
    }
    return null;
  }, [a, e]), c = lr(() => {
    if (a < e.length - 1) {
      const p = a + 1;
      return n(p), e[p].html;
    }
    return null;
  }, [a, e]), d = a > 0, g = a < e.length - 1;
  return {
    history: e,
    pointer: a,
    pushState: l,
    undo: u,
    redo: c,
    canUndo: d,
    canRedo: g
  };
}, oo = ({ paddingLeft: r, paddingRight: e, onChange: t }) => {
  const a = q0(null), [n, i] = se(null), l = [];
  for (let x = 0; x <= 90; x++) {
    const k = x * 10, A = x % 10 === 0 ? 12 : x % 5 === 0 ? 8 : 4;
    l.push(
      /* @__PURE__ */ b.jsx(
        "line",
        {
          x1: k,
          y1: 20 - A,
          x2: k,
          y2: 20,
          stroke: "#ccc",
          strokeWidth: "1"
        },
        x
      )
    ), x % 10 === 0 && l.push(
      /* @__PURE__ */ b.jsx(
        "text",
        {
          x: k + 2,
          y: 10,
          fontSize: "8",
          fill: "#999",
          children: x
        },
        `text-${x}`
      )
    );
  }
  const u = (x, k) => {
    x.preventDefault(), i(k);
  }, c = (x) => {
    if (!n || !a.current) return;
    const k = a.current.getBoundingClientRect(), A = x.clientX - k.left, T = 896;
    if (n === "left") {
      const z = Math.max(0, Math.min(A, T - e - 50));
      t({ left: z, right: e });
    } else {
      const z = Math.max(0, Math.min(T - A, T - r - 50));
      t({ left: r, right: z });
    }
  }, d = () => {
    i(null);
  };
  t0(() => (n && (document.addEventListener("mousemove", c), document.addEventListener("mouseup", d)), () => {
    document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", d);
  }), [n, r, e]);
  const p = 896 - e;
  return /* @__PURE__ */ b.jsx("div", { ref: a, className: "h-6 w-full bg-gray-50 border-b border-gray-300 relative select-none", children: /* @__PURE__ */ b.jsxs("svg", { width: "100%", height: "100%", className: "absolute left-0", children: [
    l,
    /* @__PURE__ */ b.jsx("rect", { x: "0", y: "0", width: r, height: "100%", fill: "#e5e7eb", opacity: "0.5" }),
    /* @__PURE__ */ b.jsx("rect", { x: p, y: "0", width: e, height: "100%", fill: "#e5e7eb", opacity: "0.5" }),
    /* @__PURE__ */ b.jsx(
      "polygon",
      {
        points: `${r},0 ${r + 6},0 ${r + 6},10 ${r},20 ${r - 6},10 ${r - 6},0`,
        fill: "#3b82f6",
        cursor: "ew-resize",
        onMouseDown: (x) => u(x, "left")
      }
    ),
    /* @__PURE__ */ b.jsx(
      "polygon",
      {
        points: `${p},0 ${p + 6},0 ${p + 6},10 ${p},20 ${p - 6},10 ${p - 6},0`,
        fill: "#3b82f6",
        cursor: "ew-resize",
        onMouseDown: (x) => u(x, "right")
      }
    )
  ] }) });
}, uo = ({ paddingTop: r, paddingBottom: e, onChange: t }) => {
  const a = q0(null), [n, i] = se(null), l = [];
  for (let x = 0; x <= 100; x++) {
    const k = x * 10, A = x % 10 === 0 ? 12 : x % 5 === 0 ? 8 : 4;
    l.push(
      /* @__PURE__ */ b.jsx(
        "line",
        {
          x1: 20 - A,
          y1: k,
          x2: 20,
          y2: k,
          stroke: "#ccc",
          strokeWidth: "1"
        },
        x
      )
    ), x % 10 === 0 && x !== 0 && l.push(
      /* @__PURE__ */ b.jsx(
        "text",
        {
          x: 2,
          y: k + 8,
          fontSize: "8",
          fill: "#999",
          className: "rotate-[-90deg] origin-center",
          children: x
        },
        `text-${x}`
      )
    );
  }
  const u = (x, k) => {
    x.preventDefault(), i(k);
  }, c = (x) => {
    if (!n || !a.current) return;
    const k = a.current.getBoundingClientRect(), A = 1123, T = x.clientY - k.top;
    if (n === "top") {
      const z = Math.max(0, Math.min(T, A - e - 50));
      t({ top: z, bottom: e });
    } else {
      const z = Math.max(0, Math.min(A - T, A - r - 50));
      t({ top: r, bottom: z });
    }
  }, d = () => {
    i(null);
  };
  t0(() => (n && (document.addEventListener("mousemove", c), document.addEventListener("mouseup", d)), () => {
    document.removeEventListener("mousemove", c), document.removeEventListener("mouseup", d);
  }), [n, r, e]);
  const p = 1123 - e;
  return /* @__PURE__ */ b.jsx("div", { ref: a, className: "w-6 h-full bg-gray-50 border-r border-gray-300 relative select-none flex-shrink-0", children: /* @__PURE__ */ b.jsxs("svg", { width: "100%", height: "2000px", className: "absolute top-0", children: [
    l,
    /* @__PURE__ */ b.jsx("rect", { x: "0", y: "0", width: "100%", height: r, fill: "#e5e7eb", opacity: "0.5" }),
    /* @__PURE__ */ b.jsx("rect", { x: "0", y: p, width: "100%", height: e, fill: "#e5e7eb", opacity: "0.5" }),
    /* @__PURE__ */ b.jsx(
      "polygon",
      {
        points: `0,${r} 0,${r + 6} 10,${r + 6} 20,${r} 10,${r - 6} 0,${r - 6}`,
        fill: "#3b82f6",
        cursor: "ns-resize",
        onMouseDown: (x) => u(x, "top")
      }
    ),
    /* @__PURE__ */ b.jsx(
      "polygon",
      {
        points: `0,${p} 0,${p + 6} 10,${p + 6} 20,${p} 10,${p - 6} 0,${p - 6}`,
        fill: "#3b82f6",
        cursor: "ns-resize",
        onMouseDown: (x) => u(x, "bottom")
      }
    )
  ] }) });
}, co = ({
  content: r = "",
  onChange: e,
  onBlur: t,
  onFocus: a,
  onReady: n,
  config: i = {
    showTextFormat: !0,
    showInlineFormat: !0,
    showAlignment: !0,
    showList: !0,
    showInsert: !0
  }
}) => {
  const l = q0(null), [u, c] = se({
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
  }), [d, g] = se({
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  }), [p, x] = se("p"), { pushState: k, undo: A, redo: T, canUndo: z, canRedo: N } = lo(r), O = () => ({
    getContent: () => l.current?.innerHTML || "",
    setContent: (H) => {
      l.current && (l.current.innerHTML = H, k(H), e && e(H, O()));
    }
  }), P = () => {
    const H = A();
    H !== null && l.current && (l.current.innerHTML = H, e && e(H, O()), Z());
  }, j = () => {
    const H = T();
    H !== null && l.current && (l.current.innerHTML = H, e && e(H, O()), Z());
  }, U = (H) => {
    const V = window.getSelection();
    if (!V || V.rangeCount === 0) return;
    const re = V.getRangeAt(0);
    let ae = re.commonAncestorContainer;
    ae.nodeType === Node.TEXT_NODE && (ae = ae.parentNode);
    let ce = null, me = ae;
    for (; me && me !== l.current; ) {
      if (me.nodeType === Node.ELEMENT_NODE) {
        const ue = me, fe = ue.tagName.toLowerCase();
        if (["p", "h1", "h2", "h3", "h4", "h5", "h6", "div"].includes(fe)) {
          ce = ue;
          break;
        }
      }
      me = me.parentNode;
    }
    if (ce && ce !== l.current) {
      const ue = document.createElement(H);
      ue.innerHTML = ce.innerHTML, ce.style.textAlign && (ue.style.textAlign = ce.style.textAlign), ce.parentNode?.replaceChild(ue, ce), x(H);
      const fe = document.createRange();
      fe.selectNodeContents(ue), V.removeAllRanges(), V.addRange(fe);
    } else {
      const ue = document.createElement(H);
      if (re.toString())
        try {
          re.surroundContents(ue);
        } catch {
          const Ae = re.extractContents();
          ue.appendChild(Ae), re.insertNode(ue);
        }
      else {
        ue.innerHTML = "<br>", re.insertNode(ue);
        const fe = document.createRange();
        fe.setStart(ue, 0), fe.collapse(!0), V.removeAllRanges(), V.addRange(fe);
      }
      x(H);
    }
    l.current && k(l.current.innerHTML, !0), setTimeout(() => Z(), 10);
  }, Q = () => {
    if (l.current && e) {
      const H = l.current.innerHTML;
      e(H, O()), k(H);
    }
  }, ee = () => {
    t && t(O());
  }, le = () => {
    a && a(O());
  };
  t0(() => {
    n && n(O());
  }, []), t0(() => {
    if (l.current && r !== void 0) {
      const H = yn.sanitize(r, {
        ADD_TAGS: ["iframe", "img", "br"],
        // Ensure these are allowed
        ADD_ATTR: [
          "target",
          "rel",
          "data-latex",
          // For equations
          "frameborder",
          "allowfullscreen",
          "sandbox",
          // For secure iframes
          "allow",
          "class",
          "style",
          "src",
          "href",
          "alt",
          "width",
          "height"
        ],
        // Ensure iframe sandbox is enforced if someone manually edits HTML
        FORBID_TAGS: ["script", "style", "object", "embed", "form", "input", "button"],
        FORBID_ATTR: ["onmouseover", "onload", "onclick", "onerror"]
      });
      yn.addHook("afterSanitizeAttributes", (V) => {
        V.tagName === "A" && V.getAttribute("target") === "_blank" && V.setAttribute("rel", "noopener noreferrer"), V.tagName === "IFRAME" && (V.getAttribute("sandbox") || V.setAttribute("sandbox", "allow-scripts allow-same-origin allow-presentation"));
      }), l.current.innerHTML !== H && (l.current.innerHTML = H);
    }
  }, [r]);
  const Z = () => {
    const H = window.getSelection();
    if (!H || H.rangeCount === 0)
      return;
    let re = H.getRangeAt(0).commonAncestorContainer;
    re.nodeType === Node.TEXT_NODE && (re = re.parentNode);
    let ae = re, ce = "p";
    for (; ae && ae !== l.current; ) {
      if (["H1", "H2", "H3", "H4", "H5", "H6", "P"].includes(
        ae.tagName
      )) {
        ce = ae.tagName.toLowerCase();
        break;
      }
      ae = ae.parentElement;
    }
    x(ce);
    let me = re, ue = !1, fe = !1;
    for (; me && me !== l.current; ) {
      if (me.tagName === "UL") {
        ue = !0;
        break;
      } else if (me.tagName === "OL") {
        fe = !0;
        break;
      }
      me = me.parentElement;
    }
    const Ae = (X) => {
      let xe = re;
      for (; xe && xe !== l.current; ) {
        if (xe.nodeType === Node.ELEMENT_NODE && xe.tagName.toLowerCase() === X.toLowerCase())
          return !0;
        xe = xe.parentNode;
      }
      return !1;
    };
    let M = re;
    for (; M && M !== l.current; ) {
      if (M.nodeType === Node.ELEMENT_NODE) {
        const X = M.tagName.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6", "p"].includes(X)) {
          x(X);
          break;
        }
      }
      M = M.parentNode;
    }
    (M === l.current || !M) && x("p");
    let I = re;
    for (; I && I !== l.current && I.nodeType !== Node.ELEMENT_NODE; )
      I = I.parentNode;
    const Y = I && I.nodeType === Node.ELEMENT_NODE ? I.style.textAlign : "";
    c({
      bold: Ae("strong") || Ae("b"),
      italic: Ae("em") || Ae("i"),
      underline: Ae("u"),
      strikethrough: Ae("s") || Ae("strike") || Ae("del"),
      alignLeft: Y === "" || Y === "left",
      alignCenter: Y === "center",
      alignRight: Y === "right",
      alignJustify: Y === "justify",
      bulletList: ue,
      numberedList: fe
    });
  }, ze = () => {
    const H = window.getSelection();
    if (H && H.rangeCount > 0) {
      const V = H.getRangeAt(0);
      l.current?.contains(V.commonAncestorContainer) && Z();
    }
  };
  return t0(() => (document.addEventListener("selectionchange", ze), () => {
    document.removeEventListener("selectionchange", ze);
  }), []), /* @__PURE__ */ b.jsxs("div", { className: "teddy-editor w-full h-screen bg-gray-100 flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ b.jsx(
      j1,
      {
        config: i,
        activeFormats: u,
        currentTextFormat: p,
        updateActiveFormats: Z,
        applyTextFormat: U,
        editorRef: l,
        undo: P,
        redo: j,
        canUndo: z,
        canRedo: N
      }
    ),
    /* @__PURE__ */ b.jsx("div", { className: "flex-1 overflow-auto flex justify-center p-4 relative", children: /* @__PURE__ */ b.jsxs("div", { className: "flex flex-col gap-1 w-full max-w-4xl", children: [
      /* @__PURE__ */ b.jsx("div", { className: "pl-6 select-none bg-gray-100 sticky top-0 z-10 pt-2", children: /* @__PURE__ */ b.jsx(
        oo,
        {
          paddingLeft: d.left,
          paddingRight: d.right,
          onChange: ({ left: H, right: V }) => g((re) => ({ ...re, left: H, right: V }))
        }
      ) }),
      /* @__PURE__ */ b.jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ b.jsx("div", { className: "pr-1 select-none pt-0 hidden sm:block h-full relative", children: /* @__PURE__ */ b.jsx(
          uo,
          {
            paddingTop: d.top,
            paddingBottom: d.bottom,
            onChange: ({ top: H, bottom: V }) => g((re) => ({ ...re, top: H, bottom: V }))
          }
        ) }),
        /* @__PURE__ */ b.jsx(
          "div",
          {
            ref: l,
            contentEditable: !0,
            className: "document-page outline-none focus:ring-0 prose prose-headings:mt-4 prose-headings:mb-2 w-full bg-white shadow-sm min-h-[1123px]",
            style: {
              whiteSpace: "pre-wrap",
              paddingTop: `${d.top}px`,
              paddingRight: `${d.right}px`,
              paddingBottom: `${d.bottom}px`,
              paddingLeft: `${d.left}px`
            },
            onMouseUp: Z,
            onKeyUp: Z,
            onInput: Q,
            onBlur: ee,
            onFocus: le
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ b.jsx(
      Ms,
      {
        editorRef: l,
        activeFormats: u,
        currentTextFormat: p,
        updateActiveFormats: Z,
        applyTextFormat: U
      }
    )
  ] });
}, ho = co;
export {
  ho as TeddyEditor,
  co as default
};
