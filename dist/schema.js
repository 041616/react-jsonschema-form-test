!function (e, i) {
    "object" == typeof exports && "object" == typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define("schema", [], i) : "object" == typeof exports ? exports.schema = i() : e.schema = i()
}(window, function () {
    return function (r) {
        var t = {};

        function o(e) {
            if (t[e]) return t[e].exports;
            var i = t[e] = {i: e, l: !1, exports: {}};
            return r[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports
        }

        return o.m = r, o.c = t, o.d = function (e, i, r) {
            o.o(e, i) || Object.defineProperty(e, i, {enumerable: !0, get: r})
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, o.t = function (i, e) {
            if (1 & e && (i = o(i)), 8 & e) return i;
            if (4 & e && "object" == typeof i && i && i.__esModule) return i;
            var r = Object.create(null);
            if (o.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: i
            }), 2 & e && "string" != typeof i) for (var t in i) o.d(r, t, function (e) {
                return i[e]
            }.bind(null, t));
            return r
        }, o.n = function (e) {
            var i = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return o.d(i, "a", i), i
        }, o.o = function (e, i) {
            return Object.prototype.hasOwnProperty.call(e, i)
        }, o.p = "/dist/", o(o.s = 0)
    }([function (e, i, r) {
        "use strict";

        function t(i, r) {
            var t = {};
            return r.constructor !== Object || Object.keys(r).forEach(function (e) {
                r[e].constructor === Object && r[e].hasOwnProperty(i) && (t[e] = r[e][i])
            }), t
        }

        r.r(i);
        var o = {
            type: "string",
            ui: {"ui:help": "Comma separated font-family names"}
        }, n = {
            type: "string",
            default: "",
            ui: {
                "ui:widget": "CustomFileWidget",
                "ui:help": "The file must be in SVG format"
            }
        }, a = {
            type: "string",
            pattern: "^#([A-Fa-f0-9]{3}){1,2}$|^rgb\\(\\s*\\d{1,3},\\s*\\d{1,3},\\s*\\d{1,3}\\s*\\)$|^rgba\\(\\s*\\d{1,3},\\s*\\d{1,3},\\s*\\d{1,3},\\s*(0|1|(0?.\\d+))\\s*\\)$",
            ui: {
                "ui:widget": "CustomColorWidget",
                "ui:help": "Supported formats: hex, rgb, rgba",
                "ui:readonly": !0
            }
        }, l = {
            type: "string",
            format: "uri",
            pattern: "^(https?|wss?|ftp)://",
            ui: {
                "ui:help": "External resource URL",
                "ui:placeholder": "https://"
            }
        };
        var c, b, u, s = "backgroundColor",
            d = (c = {}, b = s, u = Object.assign({
                title: s,
                description: "Basic background color of the design"
            }, a), b in c ? Object.defineProperty(c, b, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : c[b] = u, c);
        var p, f, j, g = "textColor", v = (p = {}, f = g, j = Object.assign({
            title: g,
            description: "Basic text color of the design"
        }, a), f in p ? Object.defineProperty(p, f, {
            value: j,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : p[f] = j, p);
        var O, y, P, m = "fontFamily", w = (O = {}, y = m, P = Object.assign({
            title: m,
            description: "Basic font-family of the desing"
        }, o), y in O ? Object.defineProperty(O, y, {
            value: P,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : O[y] = P, O);
        var k, h, C, x = "linkColor", q = (k = {}, h = x, C = Object.assign({
            title: x,
            description: "Basic link color of the design"
        }, a), h in k ? Object.defineProperty(k, h, {
            value: C,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : k[h] = C, k);
        var S, G, B, V = "linkHoverColor",
            H = (S = {}, G = V, B = Object.assign({
                title: V,
                description: "Basic link hover color of the design"
            }, a), G in S ? Object.defineProperty(S, G, {
                value: B,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : S[G] = B, S);
        var F, N, T, M = "externalFontFamily",
            I = (F = {}, N = M, T = Object.assign({
                title: M,
                description: "URL for Google Fonts (see https://fonts.google.com/)"
            }, l), N in F ? Object.defineProperty(F, N, {
                value: T,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : F[N] = T, F);
        var U, A, _, z = "themePrimaryColor",
            L = (U = {}, A = z, _ = Object.assign({
                title: z,
                description: "Primary theme color of the design"
            }, a), A in U ? Object.defineProperty(U, A, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : U[A] = _, U);
        var W, $, E, R = "themeSecondaryColor",
            D = (W = {}, $ = R, E = Object.assign({
                title: R,
                description: "Secondary theme color of the design"
            }, a), $ in W ? Object.defineProperty(W, $, {
                value: E,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : W[$] = E, W);
        var J, K, Q, X, Y, Z = Object.assign({}, I, w, L, D, d, v, q, H),
            ee = (J = Object.keys(Z), K = [Object.keys(I)[0]], J.filter(function (e) {
                return !K.includes(e)
            })), ie = t("ui", Z), re = (Y = {
                type: "object",
                title: X = "basic",
                description: "Basic design styles",
                additionalProperties: !(Q = {}),
                required: ee,
                properties: Z,
                ui: ie
            }, X in Q ? Object.defineProperty(Q, X, {
                value: Y,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Q[X] = Y, Q);
        var te, oe, ne, ae = "backgroundColor",
            le = (te = {}, oe = ae, ne = Object.assign({
                title: ae,
                description: "Promo panel background color"
            }, a), oe in te ? Object.defineProperty(te, oe, {
                value: ne,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : te[oe] = ne, te);
        var ce, be, ue, se = "textColor",
            de = (ce = {}, be = se, ue = Object.assign({
                title: se,
                description: "Promo panel text color"
            }, a), be in ce ? Object.defineProperty(ce, be, {
                value: ue,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ce[be] = ue, ce);
        var pe, fe, je, ge = "backgroundColor",
            ve = (pe = {}, fe = ge, je = Object.assign({
                title: ge,
                description: "Background color of the promo panel button"
            }, a), fe in pe ? Object.defineProperty(pe, fe, {
                value: je,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : pe[fe] = je, pe);
        var Oe, ye, Pe, me = "borderColor",
            we = (Oe = {}, ye = me, Pe = Object.assign({
                title: me,
                description: "Border color of the promo panel button"
            }, a), ye in Oe ? Object.defineProperty(Oe, ye, {
                value: Pe,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Oe[ye] = Pe, Oe);
        var ke, he, Ce, xe = "textColor",
            qe = (ke = {}, he = xe, Ce = Object.assign({
                title: xe,
                description: "Text color of the promo panel button"
            }, a), he in ke ? Object.defineProperty(ke, he, {
                value: Ce,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ke[he] = Ce, ke);
        var Se, Ge, Be, Ve = Object.assign({}, qe, we, ve),
            He = Object.keys(Ve), Fe = t("ui", Ve), Ne = (Be = {
                type: "object",
                title: Ge = "button",
                description: "Promo panel button",
                additionalProperties: !(Se = {}),
                required: He,
                properties: Ve,
                ui: Fe
            }, Ge in Se ? Object.defineProperty(Se, Ge, {
                value: Be,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Se[Ge] = Be, Se);
        var Te, Me, Ie, Ue = "promoPanel", Ae = Object.assign({}, de, le, Ne),
            _e = Object.keys(Ae), ze = t("ui", Ae), Le = (Ie = {
                type: "object",
                title: Me = Ue,
                description: "Promo panel",
                additionalProperties: !(Te = {}),
                required: _e,
                properties: Ae,
                ui: ze
            }, Me in Te ? Object.defineProperty(Te, Me, {
                value: Ie,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Te[Me] = Ie, Te);
        var We, $e, Ee, Re = "fontFamily",
            De = (We = {}, $e = Re, Ee = Object.assign({
                title: Re,
                description: "Title font family"
            }, o), $e in We ? Object.defineProperty(We, $e, {
                value: Ee,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : We[$e] = Ee, We);
        var Je, Ke, Qe, Xe = "textColor",
            Ye = (Je = {}, Ke = Xe, Qe = Object.assign({
                title: Xe,
                description: "Title text color"
            }, a), Ke in Je ? Object.defineProperty(Je, Ke, {
                value: Qe,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Je[Ke] = Qe, Je);
        var Ze, ei, ii, ri = "backgroundColor",
            ti = (Ze = {}, ei = ri, ii = Object.assign({
                title: ri,
                description: "Title background color"
            }, a), ei in Ze ? Object.defineProperty(Ze, ei, {
                value: ii,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ze[ei] = ii, Ze);
        var oi, ni, ai, li = Object.assign({}, De, Ye, ti),
            ci = Object.keys(li), bi = t("ui", li), ui = (ai = {
                type: "object",
                title: ni = "title",
                description: "Main title on webpage",
                additionalProperties: !(oi = {}),
                required: ci,
                properties: li,
                ui: bi
            }, ni in oi ? Object.defineProperty(oi, ni, {
                value: ai,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : oi[ni] = ai, oi);
        var si, di, pi, fi = (si = {}, di = "color", pi = Object.assign({
            title: "color",
            description: '"Buy" button icon color'
        }, a), di in si ? Object.defineProperty(si, di, {
            value: pi,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : si[di] = pi, si);
        var ji, gi, vi, Oi = (ji = {}, gi = "file", vi = Object.assign({
            title: "file",
            description: 'SVG icon for "buy" button'
        }, n), gi in ji ? Object.defineProperty(ji, gi, {
            value: vi,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : ji[gi] = vi, ji);
        var yi, Pi, mi, wi = "hoverColor",
            ki = (yi = {}, Pi = wi, mi = Object.assign({
                title: wi,
                description: '"Buy" button icon hover color'
            }, a), Pi in yi ? Object.defineProperty(yi, Pi, {
                value: mi,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : yi[Pi] = mi, yi);
        var hi, Ci, xi, qi = Object.assign({}, Oi, fi, ki),
            Si = Object.keys(qi), Gi = t("ui", qi), Bi = (xi = {
                type: "object",
                title: Ci = "icon",
                description: '"Buy" button icon',
                additionalProperties: !(hi = {}),
                required: Si,
                properties: qi,
                ui: Gi
            }, Ci in hi ? Object.defineProperty(hi, Ci, {
                value: xi,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : hi[Ci] = xi, hi);
        var Vi, Hi, Fi, Ni = "textColor",
            Ti = (Vi = {}, Hi = Ni, Fi = Object.assign({
                title: Ni,
                description: '"Buy" button text color'
            }, a), Hi in Vi ? Object.defineProperty(Vi, Hi, {
                value: Fi,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Vi[Hi] = Fi, Vi);
        var Mi, Ii, Ui, Ai = "textHoverColor",
            _i = (Mi = {}, Ii = Ai, Ui = Object.assign({
                title: Ai,
                description: '"Buy" button text hover color'
            }, a), Ii in Mi ? Object.defineProperty(Mi, Ii, {
                value: Ui,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Mi[Ii] = Ui, Mi);
        var zi, Li, Wi, $i = "backgroundColor",
            Ei = (zi = {}, Li = $i, Wi = Object.assign({
                title: $i,
                description: '"Buy" button background color'
            }, a), Li in zi ? Object.defineProperty(zi, Li, {
                value: Wi,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : zi[Li] = Wi, zi);
        var Ri, Di, Ji, Ki = "backgroundHoverColor",
            Qi = (Ri = {}, Di = Ki, Ji = Object.assign({
                title: Ki,
                description: '"Buy" button background hover color'
            }, a), Di in Ri ? Object.defineProperty(Ri, Di, {
                value: Ji,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ri[Di] = Ji, Ri);
        var Xi, Yi, Zi, er = "fontFamily",
            ir = (Xi = {}, Yi = er, Zi = Object.assign({
                title: er,
                description: '"Buy" button font family'
            }, o), Yi in Xi ? Object.defineProperty(Xi, Yi, {
                value: Zi,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Xi[Yi] = Zi, Xi);
        var rr, tr, or, nr = (rr = {}, tr = "color", or = Object.assign({
            title: "color",
            description: '"Buy" button icon color of the product that is in cart'
        }, a), tr in rr ? Object.defineProperty(rr, tr, {
            value: or,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : rr[tr] = or, rr);
        var ar, lr, cr, br = (ar = {}, lr = "file", cr = Object.assign({
            title: "file",
            description: 'SVG icon for "buy" button of the product that is in cart'
        }, n), lr in ar ? Object.defineProperty(ar, lr, {
            value: cr,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : ar[lr] = cr, ar);
        var ur, sr, dr, pr = "hoverColor",
            fr = (ur = {}, sr = pr, dr = Object.assign({
                title: pr,
                description: '"Buy" button icon hover color of the product that is in cart'
            }, a), sr in ur ? Object.defineProperty(ur, sr, {
                value: dr,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ur[sr] = dr, ur);
        var jr, gr, vr, Or = "iconActive", yr = Object.assign({}, br, nr, fr),
            Pr = Object.keys(yr), mr = t("ui", yr), wr = (vr = {
                type: "object",
                title: gr = Or,
                description: 'Icon for "buy" button of the product that is in cart',
                additionalProperties: !(jr = {}),
                required: Pr,
                properties: yr,
                ui: mr
            }, gr in jr ? Object.defineProperty(jr, gr, {
                value: vr,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : jr[gr] = vr, jr);
        var kr, hr, Cr, xr = "backgroundActiveColor",
            qr = (kr = {}, hr = xr, Cr = Object.assign({
                title: xr,
                description: 'Background color for "buy" button of the product that is in cart'
            }, a), hr in kr ? Object.defineProperty(kr, hr, {
                value: Cr,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : kr[hr] = Cr, kr);
        var Sr, Gr, Br, Vr = "textActiveColor",
            Hr = (Sr = {}, Gr = Vr, Br = Object.assign({
                title: Vr,
                description: 'Text color for "buy" button of the product that is in cart'
            }, a), Gr in Sr ? Object.defineProperty(Sr, Gr, {
                value: Br,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Sr[Gr] = Br, Sr);
        var Fr, Nr, Tr, Mr = (Fr = {}, Nr = "color", Tr = Object.assign({
            title: "color",
            description: '"Contact us" button icon color'
        }, a), Nr in Fr ? Object.defineProperty(Fr, Nr, {
            value: Tr,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Fr[Nr] = Tr, Fr);
        var Ir, Ur, Ar, _r = (Ir = {}, Ur = "file", Ar = Object.assign({
            title: "file",
            description: 'SVG icon for "contact us" button'
        }, n), Ur in Ir ? Object.defineProperty(Ir, Ur, {
            value: Ar,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Ir[Ur] = Ar, Ir);
        var zr, Lr, Wr, $r = "hoverColor",
            Er = (zr = {}, Lr = $r, Wr = Object.assign({
                title: $r,
                description: '"Contact us" button icon hover color'
            }, a), Lr in zr ? Object.defineProperty(zr, Lr, {
                value: Wr,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : zr[Lr] = Wr, zr);
        var Rr, Dr, Jr, Kr = "iconContactUs",
            Qr = Object.assign({}, _r, Mr, Er), Xr = Object.keys(Qr),
            Yr = t("ui", Qr), Zr = (Jr = {
                type: "object",
                title: Dr = Kr,
                description: '"Contact us" button icon',
                additionalProperties: !(Rr = {}),
                required: Xr,
                properties: Qr,
                ui: Yr
            }, Dr in Rr ? Object.defineProperty(Rr, Dr, {
                value: Jr,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Rr[Dr] = Jr, Rr);
        var et, it, rt, tt = "buyButton",
            ot = Object.assign({}, ir, Bi, Ti, _i, Ei, Qi, wr, qr, Hr, Zr),
            nt = Object.keys(ot), at = t("ui", ot), lt = (rt = {
                type: "object",
                title: it = tt,
                description: "Buy button",
                additionalProperties: !(et = {}),
                required: nt,
                properties: ot,
                ui: at
            }, it in et ? Object.defineProperty(et, it, {
                value: rt,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : et[it] = rt, et);
        var ct, bt, ut, st = "backgroundColor",
            dt = (ct = {}, bt = st, ut = Object.assign({
                title: st,
                description: "Header background color"
            }, a), bt in ct ? Object.defineProperty(ct, bt, {
                value: ut,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ct[bt] = ut, ct);
        var pt, ft, jt, gt = "textColor",
            vt = (pt = {}, ft = gt, jt = Object.assign({
                title: gt,
                description: "Header text color"
            }, a), ft in pt ? Object.defineProperty(pt, ft, {
                value: jt,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : pt[ft] = jt, pt);
        var Ot, yt, Pt, mt = Object.assign({}, vt, dt), wt = Object.keys(mt),
            kt = t("ui", mt), ht = (Pt = {
                type: "object",
                title: yt = "header",
                description: "Header is a top part of the website with logo, company name etc",
                additionalProperties: !(Ot = {}),
                required: wt,
                properties: mt,
                ui: kt
            }, yt in Ot ? Object.defineProperty(Ot, yt, {
                value: Pt,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ot[yt] = Pt, Ot);
        var Ct, xt, qt, St = "backgroundColor",
            Gt = (Ct = {}, xt = St, qt = Object.assign({
                title: St,
                description: "Slider navigation background color"
            }, a), xt in Ct ? Object.defineProperty(Ct, xt, {
                value: qt,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ct[xt] = qt, Ct);
        var Bt, Vt, Ht, Ft = "backgroundActiveColor",
            Nt = (Bt = {}, Vt = Ft, Ht = Object.assign({
                title: Ft,
                description: "Slider navigation background color of the active item"
            }, a), Vt in Bt ? Object.defineProperty(Bt, Vt, {
                value: Ht,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Bt[Vt] = Ht, Bt);
        var Tt, Mt, It, Ut = "navigation", At = Object.assign({}, Gt, Nt),
            _t = Object.keys(At), zt = t("ui", At), Lt = (It = {
                type: "object",
                title: Mt = Ut,
                description: "Slider navigation",
                additionalProperties: !(Tt = {}),
                required: _t,
                properties: At,
                ui: zt
            }, Mt in Tt ? Object.defineProperty(Tt, Mt, {
                value: It,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Tt[Mt] = It, Tt);
        var Wt, $t, Et, Rt = (Wt = {}, $t = "file", Et = Object.assign({
            title: "file",
            description: 'SVG icon for "previous" arrow'
        }, n), $t in Wt ? Object.defineProperty(Wt, $t, {
            value: Et,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Wt[$t] = Et, Wt);
        var Dt, Jt, Kt, Qt = (Dt = {}, Jt = "color", Kt = Object.assign({
            title: "color",
            description: 'SVG icon color of the "previous" arrow'
        }, a), Jt in Dt ? Object.defineProperty(Dt, Jt, {
            value: Kt,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Dt[Jt] = Kt, Dt);
        var Xt, Yt, Zt, eo = "hoverColor",
            io = (Xt = {}, Yt = eo, Zt = Object.assign({
                title: eo,
                description: 'SVG icon hover color of the "previous" arrow'
            }, a), Yt in Xt ? Object.defineProperty(Xt, Yt, {
                value: Zt,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Xt[Yt] = Zt, Xt);
        var ro, to, oo, no = Object.assign({}, Rt, Qt, io),
            ao = Object.keys(no), lo = t("ui", no), co = (oo = {
                type: "object",
                title: to = "icon",
                description: '"Previous" arrow icon',
                additionalProperties: !(ro = {}),
                required: ao,
                properties: no,
                ui: lo
            }, to in ro ? Object.defineProperty(ro, to, {
                value: oo,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ro[to] = oo, ro);
        var bo, uo, so, po = "backgroundColor",
            fo = (bo = {}, uo = po, so = Object.assign({
                title: po,
                description: 'Background color of the "previous" arrow'
            }, a), uo in bo ? Object.defineProperty(bo, uo, {
                value: so,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : bo[uo] = so, bo);
        var jo, go, vo, Oo = "backgroundHoverColor",
            yo = (jo = {}, go = Oo, vo = Object.assign({
                title: Oo,
                description: 'Background hover color of the "previous" arrow'
            }, a), go in jo ? Object.defineProperty(jo, go, {
                value: vo,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : jo[go] = vo, jo);
        var Po, mo, wo, ko = "arrowPrev", ho = Object.assign({}, co, fo, yo),
            Co = Object.keys(ho), xo = t("ui", ho), qo = (wo = {
                type: "object",
                title: mo = ko,
                description: '"Previous" arrow',
                additionalProperties: !(Po = {}),
                required: Co,
                properties: ho,
                ui: xo
            }, mo in Po ? Object.defineProperty(Po, mo, {
                value: wo,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Po[mo] = wo, Po);
        var So, Go, Bo, Vo = (So = {}, Go = "file", Bo = Object.assign({
            title: "file",
            description: 'SVG icon for "next" arrow'
        }, n), Go in So ? Object.defineProperty(So, Go, {
            value: Bo,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : So[Go] = Bo, So);
        var Ho, Fo, No, To = (Ho = {}, Fo = "color", No = Object.assign({
            title: "color",
            description: 'SVG icon color of the "next" arrow'
        }, a), Fo in Ho ? Object.defineProperty(Ho, Fo, {
            value: No,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Ho[Fo] = No, Ho);
        var Mo, Io, Uo, Ao = "hoverColor",
            _o = (Mo = {}, Io = Ao, Uo = Object.assign({
                title: Ao,
                description: 'SVG icon hover color of the "next" arrow'
            }, a), Io in Mo ? Object.defineProperty(Mo, Io, {
                value: Uo,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Mo[Io] = Uo, Mo);
        var zo, Lo, Wo, $o = Object.assign({}, Vo, To, _o),
            Eo = Object.keys($o), Ro = t("ui", $o), Do = (Wo = {
                type: "object",
                title: Lo = "icon",
                description: '"Next" arrow icon',
                additionalProperties: !(zo = {}),
                required: Eo,
                properties: $o,
                ui: Ro
            }, Lo in zo ? Object.defineProperty(zo, Lo, {
                value: Wo,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : zo[Lo] = Wo, zo);
        var Jo, Ko, Qo, Xo = "backgroundColor",
            Yo = (Jo = {}, Ko = Xo, Qo = Object.assign({
                title: Xo,
                description: 'Background color of the "next" arrow'
            }, a), Ko in Jo ? Object.defineProperty(Jo, Ko, {
                value: Qo,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Jo[Ko] = Qo, Jo);
        var Zo, en, rn, tn = "backgroundHoverColor",
            on = (Zo = {}, en = tn, rn = Object.assign({
                title: tn,
                description: 'Background hover color of the "next" arrow'
            }, a), en in Zo ? Object.defineProperty(Zo, en, {
                value: rn,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Zo[en] = rn, Zo);
        var nn, an, ln, cn = "arrowNext", bn = Object.assign({}, Do, Yo, on),
            un = Object.keys(bn), sn = t("ui", bn), dn = (ln = {
                type: "object",
                title: an = cn,
                description: '"Next" arrow',
                additionalProperties: !(nn = {}),
                required: un,
                properties: bn,
                ui: sn
            }, an in nn ? Object.defineProperty(nn, an, {
                value: ln,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : nn[an] = ln, nn);
        var pn, fn, jn, gn = Object.assign({}, Lt, qo, dn),
            vn = Object.keys(gn), On = t("ui", gn), yn = (jn = {
                type: "object",
                title: fn = "slider",
                description: "Website slider",
                additionalProperties: !(pn = {}),
                required: vn,
                properties: gn,
                ui: On
            }, fn in pn ? Object.defineProperty(pn, fn, {
                value: jn,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : pn[fn] = jn, pn);
        var Pn, mn, wn, kn = "backgroundColor",
            hn = (Pn = {}, mn = kn, wn = Object.assign({
                title: kn,
                description: "Sidebar background color"
            }, a), mn in Pn ? Object.defineProperty(Pn, mn, {
                value: wn,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Pn[mn] = wn, Pn);
        var Cn, xn, qn, Sn = "textColor",
            Gn = (Cn = {}, xn = Sn, qn = Object.assign({
                title: Sn,
                description: "Sidebar text color"
            }, a), xn in Cn ? Object.defineProperty(Cn, xn, {
                value: qn,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Cn[xn] = qn, Cn);
        var Bn, Vn, Hn, Fn = "linkColor",
            Nn = (Bn = {}, Vn = Fn, Hn = Object.assign({
                title: Fn,
                description: "Color of the links inside sidebar"
            }, a), Vn in Bn ? Object.defineProperty(Bn, Vn, {
                value: Hn,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Bn[Vn] = Hn, Bn);
        var Tn, Mn, In, Un = "linkHoverColor",
            An = (Tn = {}, Mn = Un, In = Object.assign({
                title: Un,
                description: "Hover color of the links inside sidebar"
            }, a), Mn in Tn ? Object.defineProperty(Tn, Mn, {
                value: In,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Tn[Mn] = In, Tn);
        var _n, zn, Ln, Wn = "backgroundColor",
            $n = (_n = {}, zn = Wn, Ln = Object.assign({
                title: Wn,
                description: "Background color of the sidebar title"
            }, a), zn in _n ? Object.defineProperty(_n, zn, {
                value: Ln,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : _n[zn] = Ln, _n);
        var En, Rn, Dn, Jn = "fontFamily",
            Kn = (En = {}, Rn = Jn, Dn = Object.assign({
                title: Jn,
                description: "Font family of the sidebar title"
            }, o), Rn in En ? Object.defineProperty(En, Rn, {
                value: Dn,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : En[Rn] = Dn, En);
        var Qn, Xn, Yn, Zn = "textColor",
            ea = (Qn = {}, Xn = Zn, Yn = Object.assign({
                title: Zn,
                description: "Text color of the sidebar title"
            }, a), Xn in Qn ? Object.defineProperty(Qn, Xn, {
                value: Yn,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Qn[Xn] = Yn, Qn);
        var ia, ra, ta, oa = Object.assign({}, Kn, ea, $n),
            na = Object.keys(oa), aa = t("ui", oa), la = (ta = {
                type: "object",
                title: ra = "title",
                description: "Sidebar title",
                additionalProperties: !(ia = {}),
                required: na,
                properties: oa,
                ui: aa
            }, ra in ia ? Object.defineProperty(ia, ra, {
                value: ta,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ia[ra] = ta, ia);
        var ca, ba, ua, sa = "sidebar",
            da = Object.assign({}, Gn, hn, Nn, An, la), pa = Object.keys(da),
            fa = t("ui", da), ja = (ua = {
                type: "object",
                title: ba = sa,
                description: "Sidebar is a left|right part of the website",
                additionalProperties: !(ca = {}),
                required: pa,
                properties: da,
                ui: fa
            }, ba in ca ? Object.defineProperty(ca, ba, {
                value: ua,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ca[ba] = ua, ca);
        var ga, va, Oa, ya = "backgroundColor",
            Pa = (ga = {}, va = ya, Oa = Object.assign({
                title: ya,
                description: "Horizontal menu background color"
            }, a), va in ga ? Object.defineProperty(ga, va, {
                value: Oa,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ga[va] = Oa, ga);
        var ma, wa, ka, ha = "textColor",
            Ca = (ma = {}, wa = ha, ka = Object.assign({
                title: ha,
                description: "Horizontal menu text color"
            }, a), wa in ma ? Object.defineProperty(ma, wa, {
                value: ka,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ma[wa] = ka, ma);
        var xa, qa, Sa, Ga = "horizontalMenu", Ba = Object.assign({}, Ca, Pa),
            Va = Object.keys(Ba), Ha = t("ui", Ba), Fa = (Sa = {
                type: "object",
                title: qa = Ga,
                description: "Horizontal menu",
                additionalProperties: !(xa = {}),
                required: Va,
                properties: Ba,
                ui: Ha
            }, qa in xa ? Object.defineProperty(xa, qa, {
                value: Sa,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : xa[qa] = Sa, xa);
        var Na, Ta, Ma, Ia = "backgroundColor",
            Ua = (Na = {}, Ta = Ia, Ma = Object.assign({
                title: Ia,
                description: "Vertical menu background color"
            }, a), Ta in Na ? Object.defineProperty(Na, Ta, {
                value: Ma,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Na[Ta] = Ma, Na);
        var Aa, _a, za, La = "textColor",
            Wa = (Aa = {}, _a = La, za = Object.assign({
                title: La,
                description: "Vertical menu text color"
            }, a), _a in Aa ? Object.defineProperty(Aa, _a, {
                value: za,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Aa[_a] = za, Aa);
        var $a, Ea, Ra, Da = "verticalMenu", Ja = Object.assign({}, Wa, Ua),
            Ka = Object.keys(Ja), Qa = t("ui", Ja), Xa = (Ra = {
                type: "object",
                title: Ea = Da,
                description: "Vertical menu is navigation element of the website. Usually located in a sidebar",
                additionalProperties: !($a = {}),
                required: Ka,
                properties: Ja,
                ui: Qa
            }, Ea in $a ? Object.defineProperty($a, Ea, {
                value: Ra,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : $a[Ea] = Ra, $a);
        var Ya, Za, el, il = "textColor",
            rl = (Ya = {}, Za = il, el = Object.assign({
                title: il,
                description: "Text color of the mobile top panel"
            }, a), Za in Ya ? Object.defineProperty(Ya, Za, {
                value: el,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ya[Za] = el, Ya);
        var tl, ol, nl, al = "backgroundColor",
            ll = (tl = {}, ol = al, nl = Object.assign({
                title: al,
                description: "Background color of the mobile top panel"
            }, a), ol in tl ? Object.defineProperty(tl, ol, {
                value: nl,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : tl[ol] = nl, tl);
        var cl, bl, ul, sl = (cl = {}, bl = "file", ul = Object.assign({
            title: "file",
            description: 'SVG of the "cart" icon'
        }, n), bl in cl ? Object.defineProperty(cl, bl, {
            value: ul,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : cl[bl] = ul, cl);
        var dl, pl, fl, jl = (dl = {}, pl = "color", fl = Object.assign({
            title: "color",
            description: '"Cart" icon color'
        }, a), pl in dl ? Object.defineProperty(dl, pl, {
            value: fl,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : dl[pl] = fl, dl);
        var gl, vl, Ol, yl = Object.assign({}, sl, jl), Pl = Object.keys(yl),
            ml = t("ui", yl), wl = (Ol = {
                type: "object",
                title: vl = "icon",
                description: '"Cart" icon',
                additionalProperties: !(gl = {}),
                required: Pl,
                properties: yl,
                ui: ml
            }, vl in gl ? Object.defineProperty(gl, vl, {
                value: Ol,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : gl[vl] = Ol, gl);
        var kl, hl, Cl, xl = Object.assign({}, wl), ql = Object.keys(xl),
            Sl = t("ui", xl), Gl = (Cl = {
                type: "object",
                title: hl = "cart",
                description: '"Cart" button',
                additionalProperties: !(kl = {}),
                required: ql,
                properties: xl,
                ui: Sl
            }, hl in kl ? Object.defineProperty(kl, hl, {
                value: Cl,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : kl[hl] = Cl, kl);
        var Bl, Vl, Hl, Fl = (Bl = {}, Vl = "file", Hl = Object.assign({
            title: "file",
            description: 'SVG of the "hamburger" icon'
        }, n), Vl in Bl ? Object.defineProperty(Bl, Vl, {
            value: Hl,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Bl[Vl] = Hl, Bl);
        var Nl, Tl, Ml, Il = (Nl = {}, Tl = "color", Ml = Object.assign({
            title: "color",
            description: '"Hamburger" icon color'
        }, a), Tl in Nl ? Object.defineProperty(Nl, Tl, {
            value: Ml,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Nl[Tl] = Ml, Nl);
        var Ul, Al, _l, zl = Object.assign({}, Fl, Il), Ll = Object.keys(zl),
            Wl = t("ui", zl), $l = (_l = {
                type: "object",
                title: Al = "icon",
                description: '"Hamburger" icon',
                additionalProperties: !(Ul = {}),
                required: Ll,
                properties: zl,
                ui: Wl
            }, Al in Ul ? Object.defineProperty(Ul, Al, {
                value: _l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ul[Al] = _l, Ul);
        var El, Rl, Dl, Jl = "hamburger", Kl = Object.assign({}, $l),
            Ql = Object.keys(Kl), Xl = t("ui", Kl), Yl = (Dl = {
                type: "object",
                title: Rl = Jl,
                description: '"Hamburger" button',
                additionalProperties: !(El = {}),
                required: Ql,
                properties: Kl,
                ui: Xl
            }, Rl in El ? Object.defineProperty(El, Rl, {
                value: Dl,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : El[Rl] = Dl, El);
        var Zl, ec, ic, rc = (Zl = {}, ec = "file", ic = Object.assign({
            title: "file",
            description: 'SVG of the "phone" icon'
        }, n), ec in Zl ? Object.defineProperty(Zl, ec, {
            value: ic,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Zl[ec] = ic, Zl);
        var tc, oc, nc, ac = (tc = {}, oc = "color", nc = Object.assign({
            title: "color",
            description: '"Phone" icon color'
        }, a), oc in tc ? Object.defineProperty(tc, oc, {
            value: nc,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : tc[oc] = nc, tc);
        var lc, cc, bc, uc = Object.assign({}, rc, ac), sc = Object.keys(uc),
            dc = t("ui", uc), pc = (bc = {
                type: "object",
                title: cc = "icon",
                description: '"Phone" icon',
                additionalProperties: !(lc = {}),
                required: sc,
                properties: uc,
                ui: dc
            }, cc in lc ? Object.defineProperty(lc, cc, {
                value: bc,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : lc[cc] = bc, lc);
        var fc, jc, gc, vc = Object.assign({}, pc), Oc = Object.keys(vc),
            yc = t("ui", vc), Pc = (gc = {
                type: "object",
                title: jc = "phone",
                description: '"Phone" button',
                additionalProperties: !(fc = {}),
                required: Oc,
                properties: vc,
                ui: yc
            }, jc in fc ? Object.defineProperty(fc, jc, {
                value: gc,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : fc[jc] = gc, fc);
        var mc, wc, kc, hc = (mc = {}, wc = "file", kc = Object.assign({
            title: "file",
            description: 'SVG of the "search" icon'
        }, n), wc in mc ? Object.defineProperty(mc, wc, {
            value: kc,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : mc[wc] = kc, mc);
        var Cc, xc, qc, Sc = (Cc = {}, xc = "color", qc = Object.assign({
            title: "color",
            description: '"Search" icon color'
        }, a), xc in Cc ? Object.defineProperty(Cc, xc, {
            value: qc,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Cc[xc] = qc, Cc);
        var Gc, Bc, Vc, Hc = Object.assign({}, hc, Sc), Fc = Object.keys(Hc),
            Nc = t("ui", Hc), Tc = (Vc = {
                type: "object",
                title: Bc = "icon",
                description: '"Search" icon',
                additionalProperties: !(Gc = {}),
                required: Fc,
                properties: Hc,
                ui: Nc
            }, Bc in Gc ? Object.defineProperty(Gc, Bc, {
                value: Vc,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Gc[Bc] = Vc, Gc);
        var Mc, Ic, Uc, Ac = Object.assign({}, Tc), _c = Object.keys(Ac),
            zc = t("ui", Ac), Lc = (Uc = {
                type: "object",
                title: Ic = "search",
                description: '"Search" button',
                additionalProperties: !(Mc = {}),
                required: _c,
                properties: Ac,
                ui: zc
            }, Ic in Mc ? Object.defineProperty(Mc, Ic, {
                value: Uc,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Mc[Ic] = Uc, Mc);
        var Wc, $c, Ec, Rc = "hamburgerMenu",
            Dc = Object.assign({}, rl, ll, Yl, Lc, Pc, Gl),
            Jc = Object.keys(Dc), Kc = t("ui", Dc), Qc = (Ec = {
                type: "object",
                title: $c = Rc,
                description: "Mobile top panel with menu, search, phone and cart buttons",
                additionalProperties: !(Wc = {}),
                required: Jc,
                properties: Dc,
                ui: Kc
            }, $c in Wc ? Object.defineProperty(Wc, $c, {
                value: Ec,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Wc[$c] = Ec, Wc);
        var Xc, Yc, Zc, eb = "backgroundColor",
            ib = (Xc = {}, Yc = eb, Zc = Object.assign({
                title: eb,
                description: "Background color of the group list item"
            }, a), Yc in Xc ? Object.defineProperty(Xc, Yc, {
                value: Zc,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Xc[Yc] = Zc, Xc);
        var rb, tb, ob, nb = "textColor",
            ab = (rb = {}, tb = nb, ob = Object.assign({
                title: nb,
                description: "Product counter text color of the group"
            }, a), tb in rb ? Object.defineProperty(rb, tb, {
                value: ob,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : rb[tb] = ob, rb);
        var lb, cb, bb, ub = "counter", sb = Object.assign({}, ab),
            db = Object.keys(sb), pb = t("ui", sb), fb = (bb = {
                type: "object",
                title: cb = ub,
                description: "Product counter of the group",
                additionalProperties: !(lb = {}),
                required: db,
                properties: sb,
                ui: pb
            }, cb in lb ? Object.defineProperty(lb, cb, {
                value: bb,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : lb[cb] = bb, lb);
        var jb, gb, vb, Ob = "textColor",
            yb = (jb = {}, gb = Ob, vb = Object.assign({
                title: Ob,
                description: "Group name text color"
            }, a), gb in jb ? Object.defineProperty(jb, gb, {
                value: vb,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : jb[gb] = vb, jb);
        var Pb, mb, wb, kb = Object.assign({}, yb), hb = Object.keys(kb),
            Cb = t("ui", kb), xb = (wb = {
                type: "object",
                title: mb = "title",
                description: "Group name",
                additionalProperties: !(Pb = {}),
                required: hb,
                properties: kb,
                ui: Cb
            }, mb in Pb ? Object.defineProperty(Pb, mb, {
                value: wb,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Pb[mb] = wb, Pb);
        var qb, Sb, Gb, Bb = "groupItem", Vb = Object.assign({}, ib, xb, fb),
            Hb = Object.keys(Vb), Fb = t("ui", Vb), Nb = (Gb = {
                type: "object",
                title: Sb = Bb,
                description: "Item of a group list",
                additionalProperties: !(qb = {}),
                required: Hb,
                properties: Vb,
                ui: Fb
            }, Sb in qb ? Object.defineProperty(qb, Sb, {
                value: Gb,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : qb[Sb] = Gb, qb);
        var Tb, Mb, Ib, Ub = "backgroundColor",
            Ab = (Tb = {}, Mb = Ub, Ib = Object.assign({
                title: Ub,
                description: "Background color of the product list item"
            }, a), Mb in Tb ? Object.defineProperty(Tb, Mb, {
                value: Ib,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Tb[Mb] = Ib, Tb);
        var _b, zb, Lb, Wb = "textColor",
            $b = (_b = {}, zb = Wb, Lb = Object.assign({
                title: Wb,
                description: "Product name text color"
            }, a), zb in _b ? Object.defineProperty(_b, zb, {
                value: Lb,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : _b[zb] = Lb, _b);
        var Eb, Rb, Db, Jb = Object.assign({}, $b), Kb = Object.keys(Jb),
            Qb = t("ui", Jb), Xb = (Db = {
                type: "object",
                title: Rb = "title",
                description: "Product name",
                additionalProperties: !(Eb = {}),
                required: Kb,
                properties: Jb,
                ui: Qb
            }, Rb in Eb ? Object.defineProperty(Eb, Rb, {
                value: Db,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Eb[Rb] = Db, Eb);
        var Yb, Zb, eu, iu = "textColor",
            ru = (Yb = {}, Zb = iu, eu = Object.assign({
                title: iu,
                description: "Product price text color"
            }, a), Zb in Yb ? Object.defineProperty(Yb, Zb, {
                value: eu,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Yb[Zb] = eu, Yb);
        var tu, ou, nu, au = Object.assign({}, ru), lu = Object.keys(au),
            cu = t("ui", au), bu = (nu = {
                type: "object",
                title: ou = "price",
                description: "Product price",
                additionalProperties: !(tu = {}),
                required: lu,
                properties: au,
                ui: cu
            }, ou in tu ? Object.defineProperty(tu, ou, {
                value: nu,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : tu[ou] = nu, tu);
        var uu, su, du, pu = "textColor",
            fu = (uu = {}, su = pu, du = Object.assign({
                title: pu,
                description: "Product old price text color"
            }, a), su in uu ? Object.defineProperty(uu, su, {
                value: du,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : uu[su] = du, uu);
        var ju, gu, vu, Ou = "oldPrice", yu = Object.assign({}, fu),
            Pu = Object.keys(yu), mu = t("ui", yu), wu = (vu = {
                type: "object",
                title: gu = Ou,
                description: "Product old price",
                additionalProperties: !(ju = {}),
                required: Pu,
                properties: yu,
                ui: mu
            }, gu in ju ? Object.defineProperty(ju, gu, {
                value: vu,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ju[gu] = vu, ju);
        var ku, hu, Cu, xu = "textColor",
            qu = (ku = {}, hu = xu, Cu = Object.assign({
                title: xu,
                description: "Product label text color"
            }, a), hu in ku ? Object.defineProperty(ku, hu, {
                value: Cu,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ku[hu] = Cu, ku);
        var Su, Gu, Bu, Vu = "backgroundColor",
            Hu = (Su = {}, Gu = Vu, Bu = Object.assign({
                title: Vu,
                description: "Product label background color"
            }, a), Gu in Su ? Object.defineProperty(Su, Gu, {
                value: Bu,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Su[Gu] = Bu, Su);
        var Fu, Nu, Tu, Mu = Object.assign({}, qu, Hu), Iu = Object.keys(Mu),
            Uu = t("ui", Mu), Au = (Tu = {
                type: "object",
                title: Nu = "label",
                description: "Product label",
                additionalProperties: !(Fu = {}),
                required: Iu,
                properties: Mu,
                ui: Uu
            }, Nu in Fu ? Object.defineProperty(Fu, Nu, {
                value: Tu,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Fu[Nu] = Tu, Fu);
        var _u, zu, Lu, Wu = "textColor",
            $u = (_u = {}, zu = Wu, Lu = Object.assign({
                title: Wu,
                description: 'Product "available" indicator text color'
            }, a), zu in _u ? Object.defineProperty(_u, zu, {
                value: Lu,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : _u[zu] = Lu, _u);
        var Eu, Ru, Du, Ju = "stateAvailable", Ku = Object.assign({}, $u),
            Qu = Object.keys(Ku), Xu = t("ui", Ku), Yu = (Du = {
                type: "object",
                title: Ru = Ju,
                description: 'Product "available" indicator',
                additionalProperties: !(Eu = {}),
                required: Qu,
                properties: Ku,
                ui: Xu
            }, Ru in Eu ? Object.defineProperty(Eu, Ru, {
                value: Du,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Eu[Ru] = Du, Eu);
        var Zu, es, is, rs = "textColor",
            ts = (Zu = {}, es = rs, is = Object.assign({
                title: rs,
                description: 'Product "clarify availability" indicator text color'
            }, a), es in Zu ? Object.defineProperty(Zu, es, {
                value: is,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Zu[es] = is, Zu);
        var os, ns, as, ls = "stateClarify", cs = Object.assign({}, ts),
            bs = Object.keys(cs), us = t("ui", cs), ss = (as = {
                type: "object",
                title: ns = ls,
                description: 'Product "clarify availability" indicator',
                additionalProperties: !(os = {}),
                required: bs,
                properties: cs,
                ui: us
            }, ns in os ? Object.defineProperty(os, ns, {
                value: as,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : os[ns] = as, os);
        var ds, ps, fs, js = "textColor",
            gs = (ds = {}, ps = js, fs = Object.assign({
                title: js,
                description: 'Product "under order" indicator text color'
            }, a), ps in ds ? Object.defineProperty(ds, ps, {
                value: fs,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ds[ps] = fs, ds);
        var vs, Os, ys, Ps = "stateOrder", ms = Object.assign({}, gs),
            ws = Object.keys(ms), ks = t("ui", ms), hs = (ys = {
                type: "object",
                title: Os = Ps,
                description: 'Product "under order" indicator',
                additionalProperties: !(vs = {}),
                required: ws,
                properties: ms,
                ui: ks
            }, Os in vs ? Object.defineProperty(vs, Os, {
                value: ys,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : vs[Os] = ys, vs);
        var Cs, xs, qs, Ss = (Cs = {}, xs = "color", qs = Object.assign({
            title: "color",
            description: "Gift icon color"
        }, a), xs in Cs ? Object.defineProperty(Cs, xs, {
            value: qs,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Cs[xs] = qs, Cs);
        var Gs, Bs, Vs, Hs = (Gs = {}, Bs = "file", Vs = Object.assign({
            title: "file",
            description: "SVG icon for product with gifts"
        }, n), Bs in Gs ? Object.defineProperty(Gs, Bs, {
            value: Vs,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Gs[Bs] = Vs, Gs);
        var Fs, Ns, Ts, Ms = Object.assign({}, Hs, Ss), Is = Object.keys(Ms),
            Us = t("ui", Ms), As = (Ts = {
                type: "object",
                title: Ns = "icon",
                description: "Gift icon",
                additionalProperties: !(Fs = {}),
                required: Is,
                properties: Ms,
                ui: Us
            }, Ns in Fs ? Object.defineProperty(Fs, Ns, {
                value: Ts,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Fs[Ns] = Ts, Fs);
        var _s, zs, Ls, Ws = Object.assign({}, As), $s = Object.keys(Ws),
            Es = t("ui", Ws), Rs = (Ls = {
                type: "object",
                title: zs = "gift",
                description: "Gift label of the product list item",
                additionalProperties: !(_s = {}),
                required: $s,
                properties: Ws,
                ui: Es
            }, zs in _s ? Object.defineProperty(_s, zs, {
                value: Ls,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : _s[zs] = Ls, _s);
        var Ds, Js, Ks, Qs = (Ds = {}, Js = "color", Ks = Object.assign({
            title: "color",
            description: "Gift icon color"
        }, a), Js in Ds ? Object.defineProperty(Ds, Js, {
            value: Ks,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Ds[Js] = Ks, Ds);
        var Xs, Ys, Zs, ed = (Xs = {}, Ys = "file", Zs = Object.assign({
            title: "file",
            description: "SVG icon for product with gifts"
        }, n), Ys in Xs ? Object.defineProperty(Xs, Ys, {
            value: Zs,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Xs[Ys] = Zs, Xs);
        var id, rd, td, od = Object.assign({}, ed, Qs), nd = Object.keys(od),
            ad = t("ui", od), ld = (td = {
                type: "object",
                title: rd = "icon",
                description: "Timer icon",
                additionalProperties: !(id = {}),
                required: nd,
                properties: od,
                ui: ad
            }, rd in id ? Object.defineProperty(id, rd, {
                value: td,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : id[rd] = td, id);
        var cd, bd, ud, sd = Object.assign({}, ld), dd = Object.keys(sd),
            pd = t("ui", sd), fd = (ud = {
                type: "object",
                title: bd = "timer",
                description: "Timer label of the product list item",
                additionalProperties: !(cd = {}),
                required: dd,
                properties: sd,
                ui: pd
            }, bd in cd ? Object.defineProperty(cd, bd, {
                value: ud,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : cd[bd] = ud, cd);
        var jd, gd, vd, Od = "catalogItem",
            yd = Object.assign({}, Ab, Xb, bu, wu, Au, Yu, ss, hs, Rs, fd),
            Pd = Object.keys(yd), md = t("ui", yd), wd = (vd = {
                type: "object",
                title: gd = Od,
                description: "Item of a product list",
                additionalProperties: !(jd = {}),
                required: Pd,
                properties: yd,
                ui: md
            }, gd in jd ? Object.defineProperty(jd, gd, {
                value: vd,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : jd[gd] = vd, jd);
        var kd, hd, Cd, xd = "textColor",
            qd = (kd = {}, hd = xd, Cd = Object.assign({
                title: xd,
                description: "Text color of the portfolio list item"
            }, a), hd in kd ? Object.defineProperty(kd, hd, {
                value: Cd,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : kd[hd] = Cd, kd);
        var Sd, Gd, Bd, Vd = "backgroundColor",
            Hd = (Sd = {}, Gd = Vd, Bd = Object.assign({
                title: Vd,
                description: "Background color of the portfolio list item"
            }, a), Gd in Sd ? Object.defineProperty(Sd, Gd, {
                value: Bd,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Sd[Gd] = Bd, Sd);
        var Fd, Nd, Td, Md = "textColor",
            Id = (Fd = {}, Nd = Md, Td = Object.assign({
                title: Md,
                description: "Portfolio name text color"
            }, a), Nd in Fd ? Object.defineProperty(Fd, Nd, {
                value: Td,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Fd[Nd] = Td, Fd);
        var Ud, Ad, _d, zd = Object.assign({}, Id), Ld = Object.keys(zd),
            Wd = t("ui", zd), $d = (_d = {
                type: "object",
                title: Ad = "title",
                description: "Portfolio name",
                additionalProperties: !(Ud = {}),
                required: Ld,
                properties: zd,
                ui: Wd
            }, Ad in Ud ? Object.defineProperty(Ud, Ad, {
                value: _d,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ud[Ad] = _d, Ud);
        var Ed, Rd, Dd, Jd = "portfolioItem",
            Kd = Object.assign({}, qd, Hd, $d), Qd = Object.keys(Kd),
            Xd = t("ui", Kd), Yd = (Dd = {
                type: "object",
                title: Rd = Jd,
                description: "Item of a portfolio list",
                additionalProperties: !(Ed = {}),
                required: Qd,
                properties: Kd,
                ui: Xd
            }, Rd in Ed ? Object.defineProperty(Ed, Rd, {
                value: Dd,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ed[Rd] = Dd, Ed);
        var Zd, ep, ip, rp = "textColor",
            tp = (Zd = {}, ep = rp, ip = Object.assign({
                title: rp,
                description: "User content text color"
            }, a), ep in Zd ? Object.defineProperty(Zd, ep, {
                value: ip,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Zd[ep] = ip, Zd);
        var op, np, ap, lp = "backgroundColor",
            cp = (op = {}, np = lp, ap = Object.assign({
                title: lp,
                description: "User content background color"
            }, a), np in op ? Object.defineProperty(op, np, {
                value: ap,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : op[np] = ap, op);
        var bp, up, sp, dp = "linkColor",
            pp = (bp = {}, up = dp, sp = Object.assign({
                title: dp,
                description: "Color of the links inside user content"
            }, a), up in bp ? Object.defineProperty(bp, up, {
                value: sp,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : bp[up] = sp, bp);
        var fp, jp, gp, vp = "linkHoverColor",
            Op = (fp = {}, jp = vp, gp = Object.assign({
                title: vp,
                description: "Hover color of the links inside user content"
            }, a), jp in fp ? Object.defineProperty(fp, jp, {
                value: gp,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : fp[jp] = gp, fp);
        var yp, Pp, mp, wp = "userContent",
            kp = Object.assign({}, tp, cp, pp, Op), hp = Object.keys(kp),
            Cp = t("ui", kp), xp = (mp = {
                type: "object",
                title: Pp = wp,
                description: "User content",
                additionalProperties: !(yp = {}),
                required: hp,
                properties: kp,
                ui: Cp
            }, Pp in yp ? Object.defineProperty(yp, Pp, {
                value: mp,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : yp[Pp] = mp, yp);
        var qp, Sp, Gp, Bp = (qp = {}, Sp = "color", Gp = Object.assign({
            title: "color",
            description: "Navigation link icon color"
        }, a), Sp in qp ? Object.defineProperty(qp, Sp, {
            value: Gp,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : qp[Sp] = Gp, qp);
        var Vp, Hp, Fp, Np = (Vp = {}, Hp = "file", Fp = Object.assign({
            title: "file",
            description: "SVG icon for navigation link"
        }, n), Hp in Vp ? Object.defineProperty(Vp, Hp, {
            value: Fp,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Vp[Hp] = Fp, Vp);
        var Tp, Mp, Ip, Up = "hoverColor",
            Ap = (Tp = {}, Mp = Up, Ip = Object.assign({
                title: Up,
                description: "Navigation link icon hover color"
            }, a), Mp in Tp ? Object.defineProperty(Tp, Mp, {
                value: Ip,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Tp[Mp] = Ip, Tp);
        var _p, zp, Lp, Wp = Object.assign({}, Np, Bp, Ap),
            $p = Object.keys(Wp), Ep = t("ui", Wp), Rp = (Lp = {
                type: "object",
                title: zp = "icon",
                description: "Navigation link icon",
                additionalProperties: !(_p = {}),
                required: $p,
                properties: Wp,
                ui: Ep
            }, zp in _p ? Object.defineProperty(_p, zp, {
                value: Lp,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : _p[zp] = Lp, _p);
        var Dp, Jp, Kp, Qp = "textColor",
            Xp = (Dp = {}, Jp = Qp, Kp = Object.assign({
                title: Qp,
                description: "Navigation link color"
            }, a), Jp in Dp ? Object.defineProperty(Dp, Jp, {
                value: Kp,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Dp[Jp] = Kp, Dp);
        var Yp, Zp, ef, rf = "textHoverColor",
            tf = (Yp = {}, Zp = rf, ef = Object.assign({
                title: rf,
                description: "Navigation link hover color"
            }, a), Zp in Yp ? Object.defineProperty(Yp, Zp, {
                value: ef,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Yp[Zp] = ef, Yp);
        var of, nf, af, lf = "backgroundColor",
            cf = (of = {}, nf = lf, af = Object.assign({
                title: lf,
                description: "Navigation link background color"
            }, a), nf in of ? Object.defineProperty(of, nf, {
                value: af,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : of[nf] = af, of);
        var bf, uf, sf, df = "backgroundHoverColor",
            pf = (bf = {}, uf = df, sf = Object.assign({
                title: df,
                description: "Navigation link background hover color"
            }, a), uf in bf ? Object.defineProperty(bf, uf, {
                value: sf,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : bf[uf] = sf, bf);
        var ff, jf, gf, vf = "fontFamily",
            Of = (ff = {}, jf = vf, gf = Object.assign({
                title: vf,
                description: "Navigation link font family"
            }, o), jf in ff ? Object.defineProperty(ff, jf, {
                value: gf,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ff[jf] = gf, ff);
        var yf, Pf, mf, wf = "navigationLink",
            kf = Object.assign({}, Of, Xp, tf, cf, pf, Rp),
            hf = Object.keys(kf), Cf = t("ui", kf), xf = (mf = {
                type: "object",
                title: Pf = wf,
                description: 'Navigation element (link) such as "show more", "read more", "more" etc.',
                additionalProperties: !(yf = {}),
                required: hf,
                properties: kf,
                ui: Cf
            }, Pf in yf ? Object.defineProperty(yf, Pf, {
                value: mf,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : yf[Pf] = mf, yf);
        var qf, Sf, Gf, Bf = "backgroundColor",
            Vf = (qf = {}, Sf = Bf, Gf = Object.assign({
                title: Bf,
                description: "Footer background color"
            }, a), Sf in qf ? Object.defineProperty(qf, Sf, {
                value: Gf,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : qf[Sf] = Gf, qf);
        var Hf, Ff, Nf, Tf = "textColor",
            Mf = (Hf = {}, Ff = Tf, Nf = Object.assign({
                title: Tf,
                description: "Footer text color"
            }, a), Ff in Hf ? Object.defineProperty(Hf, Ff, {
                value: Nf,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Hf[Ff] = Nf, Hf);
        var If, Uf, Af, _f = "linkColor",
            zf = (If = {}, Uf = _f, Af = Object.assign({
                title: _f,
                description: "Color of the links inside footer"
            }, a), Uf in If ? Object.defineProperty(If, Uf, {
                value: Af,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : If[Uf] = Af, If);
        var Lf, Wf, $f, Ef = "linkHoverColor",
            Rf = (Lf = {}, Wf = Ef, $f = Object.assign({
                title: Ef,
                description: "Hover color of the links inside footer"
            }, a), Wf in Lf ? Object.defineProperty(Lf, Wf, {
                value: $f,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Lf[Wf] = $f, Lf);
        var Df, Jf, Kf, Qf = Object.assign({}, Mf, Vf, zf, Rf),
            Xf = Object.keys(Qf), Yf = t("ui", Qf), Zf = (Kf = {
                type: "object",
                title: Jf = "footer",
                description: "Footer is a bottom part of the website with contact info, copyrights etc",
                additionalProperties: !(Df = {}),
                required: Xf,
                properties: Qf,
                ui: Yf
            }, Jf in Df ? Object.defineProperty(Df, Jf, {
                value: Kf,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Df[Jf] = Kf, Df);
        var ej, ij, rj, tj = (ej = {}, ij = "file", rj = Object.assign({
            title: "file",
            description: 'SVG icon for "facebook"'
        }, n), ij in ej ? Object.defineProperty(ej, ij, {
            value: rj,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : ej[ij] = rj, ej);
        var oj, nj, aj, lj = (oj = {}, nj = "color", aj = Object.assign({
            title: "color",
            description: '"facebook" icon color'
        }, a), nj in oj ? Object.defineProperty(oj, nj, {
            value: aj,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : oj[nj] = aj, oj);
        var cj, bj, uj, sj = "hoverColor",
            dj = (cj = {}, bj = sj, uj = Object.assign({
                title: sj,
                description: '"facebook" icon hover color'
            }, a), bj in cj ? Object.defineProperty(cj, bj, {
                value: uj,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : cj[bj] = uj, cj);
        var pj, fj, jj, gj = Object.assign({}, tj, lj, dj),
            vj = Object.keys(gj), Oj = t("ui", gj), yj = (jj = {
                type: "object",
                title: fj = "icon",
                description: '"facebook" icon',
                additionalProperties: !(pj = {}),
                required: vj,
                properties: gj,
                ui: Oj
            }, fj in pj ? Object.defineProperty(pj, fj, {
                value: jj,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : pj[fj] = jj, pj);
        var Pj, mj, wj, kj = "facebook", hj = Object.assign({}, yj),
            Cj = Object.keys(hj), xj = t("ui", hj), qj = (wj = {
                type: "object",
                title: mj = kj,
                description: 'Social network: "facebook"',
                additionalProperties: !(Pj = {}),
                required: Cj,
                properties: hj,
                ui: xj
            }, mj in Pj ? Object.defineProperty(Pj, mj, {
                value: wj,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Pj[mj] = wj, Pj);
        var Sj, Gj, Bj, Vj = (Sj = {}, Gj = "file", Bj = Object.assign({
            title: "file",
            description: 'SVG icon for "instagram"'
        }, n), Gj in Sj ? Object.defineProperty(Sj, Gj, {
            value: Bj,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Sj[Gj] = Bj, Sj);
        var Hj, Fj, Nj, Tj = (Hj = {}, Fj = "color", Nj = Object.assign({
            title: "color",
            description: '"instagram" icon color'
        }, a), Fj in Hj ? Object.defineProperty(Hj, Fj, {
            value: Nj,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Hj[Fj] = Nj, Hj);
        var Mj, Ij, Uj, Aj = "hoverColor",
            _j = (Mj = {}, Ij = Aj, Uj = Object.assign({
                title: Aj,
                description: '"instagram" icon hover color'
            }, a), Ij in Mj ? Object.defineProperty(Mj, Ij, {
                value: Uj,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Mj[Ij] = Uj, Mj);
        var zj, Lj, Wj, $j = Object.assign({}, Vj, Tj, _j),
            Ej = Object.keys($j), Rj = t("ui", $j), Dj = (Wj = {
                type: "object",
                title: Lj = "icon",
                description: '"instagram" icon',
                additionalProperties: !(zj = {}),
                required: Ej,
                properties: $j,
                ui: Rj
            }, Lj in zj ? Object.defineProperty(zj, Lj, {
                value: Wj,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : zj[Lj] = Wj, zj);
        var Jj, Kj, Qj, Xj = "instagram", Yj = Object.assign({}, Dj),
            Zj = Object.keys(Yj), eg = t("ui", Yj), ig = (Qj = {
                type: "object",
                title: Kj = Xj,
                description: 'Social network: "instagram"',
                additionalProperties: !(Jj = {}),
                required: Zj,
                properties: Yj,
                ui: eg
            }, Kj in Jj ? Object.defineProperty(Jj, Kj, {
                value: Qj,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Jj[Kj] = Qj, Jj);
        var rg, tg, og, ng = (rg = {}, tg = "file", og = Object.assign({
            title: "file",
            description: 'SVG icon for "odnoklassniki"'
        }, n), tg in rg ? Object.defineProperty(rg, tg, {
            value: og,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : rg[tg] = og, rg);
        var ag, lg, cg, bg = (ag = {}, lg = "color", cg = Object.assign({
            title: "color",
            description: '"odnoklassniki" icon color'
        }, a), lg in ag ? Object.defineProperty(ag, lg, {
            value: cg,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : ag[lg] = cg, ag);
        var ug, sg, dg, pg = "hoverColor",
            fg = (ug = {}, sg = pg, dg = Object.assign({
                title: pg,
                description: '"odnoklassniki" icon hover color'
            }, a), sg in ug ? Object.defineProperty(ug, sg, {
                value: dg,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ug[sg] = dg, ug);
        var jg, gg, vg, Og = Object.assign({}, ng, bg, fg),
            yg = Object.keys(Og), Pg = t("ui", Og), mg = (vg = {
                type: "object",
                title: gg = "icon",
                description: '"odnoklassniki" icon',
                additionalProperties: !(jg = {}),
                required: yg,
                properties: Og,
                ui: Pg
            }, gg in jg ? Object.defineProperty(jg, gg, {
                value: vg,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : jg[gg] = vg, jg);
        var wg, kg, hg, Cg = "odnoklassniki", xg = Object.assign({}, mg),
            qg = Object.keys(xg), Sg = t("ui", xg), Gg = (hg = {
                type: "object",
                title: kg = Cg,
                description: 'Social network: "odnoklassniki"',
                additionalProperties: !(wg = {}),
                required: qg,
                properties: xg,
                ui: Sg
            }, kg in wg ? Object.defineProperty(wg, kg, {
                value: hg,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : wg[kg] = hg, wg);
        var Bg, Vg, Hg, Fg = (Bg = {}, Vg = "file", Hg = Object.assign({
            title: "file",
            description: 'SVG icon for "pinterest"'
        }, n), Vg in Bg ? Object.defineProperty(Bg, Vg, {
            value: Hg,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Bg[Vg] = Hg, Bg);
        var Ng, Tg, Mg, Ig = (Ng = {}, Tg = "color", Mg = Object.assign({
            title: "color",
            description: '"pinterest" icon color'
        }, a), Tg in Ng ? Object.defineProperty(Ng, Tg, {
            value: Mg,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Ng[Tg] = Mg, Ng);
        var Ug, Ag, _g, zg = "hoverColor",
            Lg = (Ug = {}, Ag = zg, _g = Object.assign({
                title: zg,
                description: '"pinterest" icon hover color'
            }, a), Ag in Ug ? Object.defineProperty(Ug, Ag, {
                value: _g,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Ug[Ag] = _g, Ug);
        var Wg, $g, Eg, Rg = Object.assign({}, Fg, Ig, Lg),
            Dg = Object.keys(Rg), Jg = t("ui", Rg), Kg = (Eg = {
                type: "object",
                title: $g = "icon",
                description: '"pinterest" icon',
                additionalProperties: !(Wg = {}),
                required: Dg,
                properties: Rg,
                ui: Jg
            }, $g in Wg ? Object.defineProperty(Wg, $g, {
                value: Eg,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Wg[$g] = Eg, Wg);
        var Qg, Xg, Yg, Zg = "pinterest", ev = Object.assign({}, Kg),
            iv = Object.keys(ev), rv = t("ui", ev), tv = (Yg = {
                type: "object",
                title: Xg = Zg,
                description: 'Social network: "pinterest"',
                additionalProperties: !(Qg = {}),
                required: iv,
                properties: ev,
                ui: rv
            }, Xg in Qg ? Object.defineProperty(Qg, Xg, {
                value: Yg,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Qg[Xg] = Yg, Qg);
        var ov, nv, av, lv = (ov = {}, nv = "file", av = Object.assign({
            title: "file",
            description: 'SVG icon for "tumblr"'
        }, n), nv in ov ? Object.defineProperty(ov, nv, {
            value: av,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : ov[nv] = av, ov);
        var cv, bv, uv, sv = (cv = {}, bv = "color", uv = Object.assign({
            title: "color",
            description: '"tumblr" icon color'
        }, a), bv in cv ? Object.defineProperty(cv, bv, {
            value: uv,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : cv[bv] = uv, cv);
        var dv, pv, fv, jv = "hoverColor",
            gv = (dv = {}, pv = jv, fv = Object.assign({
                title: jv,
                description: '"tumblr" icon hover color'
            }, a), pv in dv ? Object.defineProperty(dv, pv, {
                value: fv,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : dv[pv] = fv, dv);
        var vv, Ov, yv, Pv = Object.assign({}, lv, sv, gv),
            mv = Object.keys(Pv), wv = t("ui", Pv), kv = (yv = {
                type: "object",
                title: Ov = "icon",
                description: '"tumblr" icon',
                additionalProperties: !(vv = {}),
                required: mv,
                properties: Pv,
                ui: wv
            }, Ov in vv ? Object.defineProperty(vv, Ov, {
                value: yv,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : vv[Ov] = yv, vv);
        var hv, Cv, xv, qv = Object.assign({}, kv), Sv = Object.keys(qv),
            Gv = t("ui", qv), Bv = (xv = {
                type: "object",
                title: Cv = "tumblr",
                description: 'Social network: "tumblr"',
                additionalProperties: !(hv = {}),
                required: Sv,
                properties: qv,
                ui: Gv
            }, Cv in hv ? Object.defineProperty(hv, Cv, {
                value: xv,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : hv[Cv] = xv, hv);
        var Vv, Hv, Fv, Nv = (Vv = {}, Hv = "file", Fv = Object.assign({
            title: "file",
            description: 'SVG icon for "twitter"'
        }, n), Hv in Vv ? Object.defineProperty(Vv, Hv, {
            value: Fv,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Vv[Hv] = Fv, Vv);
        var Tv, Mv, Iv, Uv = (Tv = {}, Mv = "color", Iv = Object.assign({
            title: "color",
            description: '"twitter" icon color'
        }, a), Mv in Tv ? Object.defineProperty(Tv, Mv, {
            value: Iv,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : Tv[Mv] = Iv, Tv);
        var Av, _v, zv, Lv = "hoverColor",
            Wv = (Av = {}, _v = Lv, zv = Object.assign({
                title: Lv,
                description: '"twitter" icon hover color'
            }, a), _v in Av ? Object.defineProperty(Av, _v, {
                value: zv,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Av[_v] = zv, Av);
        var $v, Ev, Rv, Dv = Object.assign({}, Nv, Uv, Wv),
            Jv = Object.keys(Dv), Kv = t("ui", Dv), Qv = (Rv = {
                type: "object",
                title: Ev = "icon",
                description: '"twitter" icon',
                additionalProperties: !($v = {}),
                required: Jv,
                properties: Dv,
                ui: Kv
            }, Ev in $v ? Object.defineProperty($v, Ev, {
                value: Rv,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : $v[Ev] = Rv, $v);
        var Xv, Yv, Zv, eO = "twitter", iO = Object.assign({}, Qv),
            rO = Object.keys(iO), tO = t("ui", iO), oO = (Zv = {
                type: "object",
                title: Yv = eO,
                description: 'Social network: "twitter"',
                additionalProperties: !(Xv = {}),
                required: rO,
                properties: iO,
                ui: tO
            }, Yv in Xv ? Object.defineProperty(Xv, Yv, {
                value: Zv,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : Xv[Yv] = Zv, Xv);
        var nO, aO, lO, cO = (nO = {}, aO = "file", lO = Object.assign({
            title: "file",
            description: 'SVG icon for "vkontakte"'
        }, n), aO in nO ? Object.defineProperty(nO, aO, {
            value: lO,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : nO[aO] = lO, nO);
        var bO, uO, sO, dO = (bO = {}, uO = "color", sO = Object.assign({
            title: "color",
            description: '"vkontakte" icon color'
        }, a), uO in bO ? Object.defineProperty(bO, uO, {
            value: sO,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : bO[uO] = sO, bO);
        var pO, fO, jO, gO = "hoverColor",
            vO = (pO = {}, fO = gO, jO = Object.assign({
                title: gO,
                description: '"vkontakte" icon hover color'
            }, a), fO in pO ? Object.defineProperty(pO, fO, {
                value: jO,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : pO[fO] = jO, pO);
        var OO, yO, PO, mO = Object.assign({}, cO, dO, vO),
            wO = Object.keys(mO), kO = t("ui", mO), hO = (PO = {
                type: "object",
                title: yO = "icon",
                description: '"vkontakte" icon',
                additionalProperties: !(OO = {}),
                required: wO,
                properties: mO,
                ui: kO
            }, yO in OO ? Object.defineProperty(OO, yO, {
                value: PO,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : OO[yO] = PO, OO);
        var CO, xO, qO, SO = "vkontakte", GO = Object.assign({}, hO),
            BO = Object.keys(GO), VO = t("ui", GO), HO = (qO = {
                type: "object",
                title: xO = SO,
                description: 'Social network: "vkontakte"',
                additionalProperties: !(CO = {}),
                required: BO,
                properties: GO,
                ui: VO
            }, xO in CO ? Object.defineProperty(CO, xO, {
                value: qO,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : CO[xO] = qO, CO);
        var FO, NO, TO, MO = (FO = {}, NO = "file", TO = Object.assign({
            title: "file",
            description: 'SVG icon for "youtube"'
        }, n), NO in FO ? Object.defineProperty(FO, NO, {
            value: TO,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : FO[NO] = TO, FO);
        var IO, UO, AO, _O = (IO = {}, UO = "color", AO = Object.assign({
            title: "color",
            description: '"youtube" icon color'
        }, a), UO in IO ? Object.defineProperty(IO, UO, {
            value: AO,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : IO[UO] = AO, IO);
        var zO, LO, WO, $O = "hoverColor",
            EO = (zO = {}, LO = $O, WO = Object.assign({
                title: $O,
                description: '"youtube" icon hover color'
            }, a), LO in zO ? Object.defineProperty(zO, LO, {
                value: WO,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : zO[LO] = WO, zO);
        var RO, DO, JO, KO = Object.assign({}, MO, _O, EO),
            QO = Object.keys(KO), XO = t("ui", KO), YO = (JO = {
                type: "object",
                title: DO = "icon",
                description: '"youtube" icon',
                additionalProperties: !(RO = {}),
                required: QO,
                properties: KO,
                ui: XO
            }, DO in RO ? Object.defineProperty(RO, DO, {
                value: JO,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : RO[DO] = JO, RO);
        var ZO, ey, iy, ry = "youtube", ty = Object.assign({}, YO),
            oy = Object.keys(ty), ny = t("ui", ty), ay = (iy = {
                type: "object",
                title: ey = ry,
                description: 'Social network: "youtube"',
                additionalProperties: !(ZO = {}),
                required: oy,
                properties: ty,
                ui: ny
            }, ey in ZO ? Object.defineProperty(ZO, ey, {
                value: iy,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ZO[ey] = iy, ZO);
        var ly, cy, by, uy = "socialNetwork",
            sy = Object.assign({}, qj, ig, Gg, tv, Bv, oO, HO, ay),
            dy = Object.keys(sy), py = t("ui", sy), fy = (by = {
                type: "object",
                title: cy = uy,
                description: "Social network",
                additionalProperties: !(ly = {}),
                required: dy,
                properties: sy,
                ui: py
            }, cy in ly ? Object.defineProperty(ly, cy, {
                value: by,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : ly[cy] = by, ly),
            jy = Object.assign({}, re, Le, ui, lt, ht, yn, ja, Fa, Xa, Qc, Nb, wd, Yd, xp, xf, Zf, fy),
            gy = {
                type: "object",
                description: "Design settings",
                additionalProperties: !1,
                required: Object.keys(jy),
                properties: jy,
                ui: t("ui", jy)
            };
        delete gy.ui;
        i.default = gy
    }])
});