window.__require = (function t(e, n, o) {
    function r(s, c) {
        if (!n[s]) {
            if (!e[s]) {
                var a = s.split("/");
                if (((a = a[a.length - 1]), !e[a])) {
                    var u = "function" == typeof __require && __require;
                    if (!c && u) return u(a, !0);
                    if (i) return i(a, !0);
                    throw new Error("Cannot find module '" + s + "'");
                }
                s = a;
            }
            var l = (n[s] = {
                exports: {},
            });
            e[s][0].call(
                l.exports,
                function (t) {
                    return r(e[s][1][t] || t);
                },
                l,
                l.exports,
                t,
                e,
                n,
                o
            );
        }
        return n[s].exports;
    }
    for (var i = "function" == typeof __require && __require, s = 0; s < o.length; s++) r(o[s]);
    return r;
})(
    {
        CCCExtend: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "2b3d6taiftOUKD1LiqTUf7j", "CCCExtend"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    });
                var o = (function () {
                    function t() {}
                    return (
                        (t.init = function () {
                            this._extendRenderFlow();
                        }),
                        (t._extendRenderFlow = function () {
                            var t = 0,
                                e = (t++, t++, t++, 1 << t++),
                                n = (t++, 1 << t++),
                                o = 1 << t++,
                                r = n | o,
                                i = (t++, t++, t++, t++, cc.RenderFlow),
                                s = i.getBachther(),
                                c = [],
                                a = [];
                            Object.defineProperty(i.prototype, "_opacity", {
                                value: function (t) {
                                    s.parentOpacityDirty++,
                                        t.__levelRender && c[t.__itemIndex] && (c[t.__itemIndex].parentOpacityDirty = 1),
                                        this._next._func(t),
                                        (t._renderFlag &= ~n),
                                        t.__levelRender &&
                                            c[t.__itemIndex] &&
                                            t.__lastChildren &&
                                            (c[t.__itemIndex].parentOpacityDirty = 0),
                                        s.parentOpacityDirty--;
                                },
                            }),
                                Object.defineProperty(i.prototype, "_worldTransform", {
                                    value: function (t) {
                                        s.worldMatDirty++,
                                            t.__levelRender && c[t.__itemIndex] && (c[t.__itemIndex].worldMatDirty = 1);
                                        var n = t._matrix,
                                            o = t._trs,
                                            r = n.m;
                                        (r[12] = o[0]),
                                            (r[13] = o[1]),
                                            (r[14] = o[2]),
                                            t._mulMat(t._worldMatrix, t._parent._worldMatrix, n),
                                            (t._renderFlag &= ~e),
                                            this._next._func(t),
                                            t.__levelRender &&
                                                c[t.__itemIndex] &&
                                                t.__lastChildren &&
                                                (c[t.__itemIndex].worldMatDirty = 0),
                                            s.worldMatDirty--;
                                    },
                                });
                            var u = function (t, e, n) {
                                    a[e] || (a[e] = []),
                                        a[e].push(t),
                                        e++,
                                        (t.__renderLv = e),
                                        (t.__levelRender = !0),
                                        (t.__itemIndex = n);
                                    for (var o = t.children, r = 0; r < o.length; ++r) {
                                        var i = o[r];
                                        a[e] || (a[e] = []), (e = u(i, e, n));
                                    }
                                    return e;
                                },
                                l = function (t) {
                                    var n = t.children,
                                        o = t.opacity / 255;
                                    c = [];
                                    for (var l = 0; l < n.length; ++l)
                                        c.push({
                                            worldMatDirty: 0,
                                            parentOpacityDirty: 0,
                                        }),
                                            u(n[l], 0, l);
                                    for (; a.length > 0; ) {
                                        var p = a.shift();
                                        if (p.length > 0)
                                            for (; p.length > 0; ) {
                                                var h = p.shift();
                                                (h.__lastChildren = 0 == a.length), (h.__levelRender = !0);
                                                var f = h.parent.__opacityInHierarchy;
                                                void 0 === f && (f = o);
                                                var d = f * (h._opacity / 255);
                                                h.__opacityInHierarchy = d;
                                                var _ = h._cullingMask,
                                                    y = 0;
                                                c[h.__itemIndex] && (y = c[h.__itemIndex].worldMatDirty || 0);
                                                var v = 0;
                                                c[h.__itemIndex] && (v = c[h.__itemIndex].parentOpacityDirty || 0);
                                                var g = (y || s.worldMatDirty ? e : 0) | (v || s.parentOpacityDirty ? r : 0);
                                                if (((h._renderFlag |= g), h._activeInHierarchy && 0 !== h._opacity)) {
                                                    h._cullingMask = 0 === h.groupIndex ? _ : 1 << h.groupIndex;
                                                    var m = h._color._val;
                                                    h._color._fastSetA(h._opacity * d),
                                                        i.flows[h._renderFlag]._func(h),
                                                        (h._color._val = m);
                                                }
                                            }
                                    }
                                };
                            Object.defineProperty(i.prototype, "_children", {
                                value: function (t) {
                                    if (!t.__levelRender) {
                                        var n = t._cullingMask,
                                            o = t.__enableLevelRender,
                                            c = t.parent ? t.parent.__opacityInHierarchy : void 0,
                                            a = void 0 !== c ? c : s.parentOpacity;
                                        if (o || t.__levelRender) l(t);
                                        else {
                                            var u = (a *= t._opacity / 255);
                                            t.__opacityInHierarchy = u;
                                            for (
                                                var p = (s.worldMatDirty ? e : 0) | (s.parentOpacityDirty ? r : 0),
                                                    h = t._children,
                                                    f = 0,
                                                    d = h.length;
                                                f < d;
                                                f++
                                            ) {
                                                var _ = h[f];
                                                if (
                                                    ((_._renderFlag |= p),
                                                    (_.__opacityInHierarchy = (_._opacity * u) / 255),
                                                    _._activeInHierarchy && 0 !== _._opacity)
                                                ) {
                                                    _._cullingMask = 0 === _.groupIndex ? n : 1 << _.groupIndex;
                                                    var y = _._color._val;
                                                    _._color._fastSetA(_._opacity * u),
                                                        i.flows[_._renderFlag]._func(_),
                                                        (_._color._val = y);
                                                }
                                            }
                                        }
                                        (s.parentOpacity = a), this._next._func(t);
                                    }
                                },
                            });
                        }),
                        t
                    );
                })();
                (n.default = o), cc._RF.pop();
            },
            {},
        ],
        GDActionTask: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "5a2ccwz3GJJQ6hrckKFWlNB", "GDActionTask");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDWaitTask = n.GDSetValueTask = void 0);
                var i = t("../GDBlackboard"),
                    s = t("./GDTask"),
                    c = (function (t) {
                        function e(e) {
                            var n = t.call(this, e.desc) || this;
                            return (n.key = e.key), (n.value = e.value), (n.bbName = e.bbName), n;
                        }
                        return (
                            r(e, t),
                            (e.prototype.enter = function () {
                                return (
                                    i.GDBlackboardMgr.getBlackboard(this.bbName).setValue(this.key, this.value),
                                    s.GDTaskStatus.SUCCEED
                                );
                            }),
                            e
                        );
                    })(s.GDTask);
                n.GDSetValueTask = c;
                var a = (function (t) {
                    function e(e) {
                        var n = t.call(this, e.desc) || this;
                        return (n.waitTime = 1), (n._tickTime = 0), (n.waitTime = e.waitTime), n;
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            return (this._tickTime = 0), s.GDTaskStatus.RUNNING;
                        }),
                        (e.prototype.update = function (t) {
                            (this._tickTime += t), this._tickTime >= this.waitTime && (this._status = s.GDTaskStatus.SUCCEED);
                        }),
                        e
                    );
                })(s.GDTask);
                (n.GDWaitTask = a), cc._RF.pop();
            },
            {
                "../GDBlackboard": "GDBlackboard",
                "./GDTask": "GDTask",
            },
        ],
        GDAnimation: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "44fd9B7NxpMnLRxTqkjmPTy", "GDAnimation");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDAnimation = void 0);
                var s = cc._decorator,
                    c = s.ccclass,
                    a = s.property,
                    u = s.requireComponent,
                    l = s.menu,
                    p = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.atlas = null),
                                (e.json = null),
                                (e._animationData = null),
                                (e._clips = new Map()),
                                (e._clip = null),
                                (e._frame = null),
                                (e._texture = null),
                                (e._tick = 0),
                                (e._frameIndex = 0),
                                (e._loop = !1),
                                (e.timeScale = 1),
                                (e.pause = !1),
                                e
                            );
                        }
                        var n;
                        return (
                            r(e, t),
                            (n = e),
                            (e.prototype.onLoad = function () {
                                if (((this._texture = this.getComponent(cc.Sprite) || this.addComponent(cc.Sprite)), this.json))
                                    try {
                                        var t = this.json.json,
                                            e = n.animationDataCache.get(t.name);
                                        if (e) return (this._animationData = e.data), void (this._clips = e.clips);
                                        this.create(this.json.json),
                                            n.animationDataCache.set(this._animationData.name, {
                                                data: this._animationData,
                                                clips: this._clips,
                                            });
                                    } catch (o) {
                                        console.error(o);
                                    }
                            }),
                            (e.prototype.start = function () {
                                this._animationData.defaultClip && this.play(this._animationData.defaultClip, !0);
                            }),
                            (e.prototype.create = function (t) {
                                this._animationData = {
                                    name: t.name,
                                    version: t.version || "1",
                                    timeScale: parseFloat(t.timeScale) || 1,
                                    animations: [],
                                    defaultClip: t.defaultClip,
                                };
                                for (var e = 0; e < t.animations.length; e++) {
                                    var n = t.animations[e];
                                    this.addClip(n);
                                }
                            }),
                            (e.prototype.addClip = function (t) {
                                for (
                                    var e = {
                                            name: t.name,
                                            frames: [],
                                            duration: parseFloat(t.duration) || 0,
                                        },
                                        n = t.frames.length,
                                        o = 0,
                                        r = 0;
                                    r < n;
                                    r++
                                ) {
                                    var i = t.frames[r],
                                        s = {
                                            name: i.name,
                                            time: parseFloat(i.time),
                                        },
                                        c = s.time;
                                    (!c || c > 1 || c < o) && (c = (1 - o) / (n - r) + o),
                                        (s.time = c * e.duration),
                                        (o = c),
                                        (e.frames[r] = s);
                                }
                                this._animationData.animations.push(e), this._clips.set(e.name, e);
                            }),
                            (e.prototype.update = function (t) {
                                if (!this.pause && this._clip && this._frame) {
                                    if (((this._tick += t * this.timeScale), this._tick >= this._clip.duration))
                                        return this.resetClip(), void (this._loop && this.swapFrame(this._frameIndex));
                                    this._tick > this._frame.time && (this._frameIndex++, this.swapFrame(this._frameIndex));
                                }
                            }),
                            (e.prototype.resetClip = function () {
                                (this._tick = 0), (this._frameIndex = 0);
                            }),
                            (e.prototype.swapFrame = function (t) {
                                this._clip &&
                                    ((this._frame = this._clip.frames[t]),
                                    this._frame && (this._texture.spriteFrame = this.atlas.getSpriteFrame(this._frame.name)));
                            }),
                            (e.prototype.find = function (t) {
                                return this._clips.get(t);
                            }),
                            (e.prototype.play = function (t, e) {
                                void 0 === e && (e = !0),
                                    (this._clip = this.find(t)),
                                    (this._loop = e),
                                    this.resetClip(),
                                    this.swapFrame(this._frameIndex);
                            }),
                            (e.prototype.stop = function () {
                                this.resetClip(), this.swapFrame(this._frameIndex), (this._clip = null), (this._frame = null);
                            }),
                            (e.animationDataCache = new Map()),
                            i([a(cc.SpriteAtlas)], e.prototype, "atlas", void 0),
                            i([a(cc.JsonAsset)], e.prototype, "json", void 0),
                            (n = i([c, u(cc.Sprite), l("GD/GDAnimation")], e))
                        );
                    })(cc.Component);
                (n.GDAnimation = p), cc._RF.pop();
            },
            {},
        ],
        GDAsync: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "2e35b+O8/lOg7I/mfesnlFJ", "GDAsync");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function s(t) {
                                    try {
                                        a(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        a(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function a(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(s, c);
                                }
                                a((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2),
                                }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function c(t) {
                                return function (e) {
                                    return a([t, e]);
                                };
                            }
                            function a(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            o &&
                                                (r =
                                                    2 & i[0]
                                                        ? o.return
                                                        : i[0]
                                                        ? o.throw || ((r = o.return) && r.call(o), 0)
                                                        : o.next) &&
                                                !(r = r.call(o, i[1])).done)
                                        )
                                            return r;
                                        switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                s.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    s.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    (s.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && s.label < r[2]) {
                                                    (s.label = r[2]), s.ops.push(i);
                                                    break;
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, s);
                                    } catch (c) {
                                        (i = [6, c]), (o = 0);
                                    } finally {
                                        n = r = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                };
                            }
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDAsync = void 0);
                var i = (function () {
                    function t() {}
                    return (
                        (t.wait = function (t, e) {
                            return o(this, void 0, Promise, function () {
                                return r(this, function () {
                                    return cc.isValid(t)
                                        ? [
                                              2,
                                              new Promise(function (n) {
                                                  setTimeout(function () {
                                                      cc.isValid(t) ? n(!0) : n(!1);
                                                  }, 1e3 * e);
                                              }),
                                          ]
                                        : [2, !1];
                                });
                            });
                        }),
                        (t.runAction = function (t) {
                            return o(this, void 0, Promise, function () {
                                return r(this, function () {
                                    return [
                                        2,
                                        new Promise(function (e) {
                                            t.call(e).start();
                                        }),
                                    ];
                                });
                            });
                        }),
                        t
                    );
                })();
                (n.GDAsync = i), cc._RF.pop();
            },
            {},
        ],
        GDAudioMgr: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "b149fdaOvJA/Z6OzsTVyISS", "GDAudioMgr");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function s(t) {
                                    try {
                                        a(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        a(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function a(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(s, c);
                                }
                                a((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2),
                                }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function c(t) {
                                return function (e) {
                                    return a([t, e]);
                                };
                            }
                            function a(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            o &&
                                                (r =
                                                    2 & i[0]
                                                        ? o.return
                                                        : i[0]
                                                        ? o.throw || ((r = o.return) && r.call(o), 0)
                                                        : o.next) &&
                                                !(r = r.call(o, i[1])).done)
                                        )
                                            return r;
                                        switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                s.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    s.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    (s.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && s.label < r[2]) {
                                                    (s.label = r[2]), s.ops.push(i);
                                                    break;
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, s);
                                    } catch (c) {
                                        (i = [6, c]), (o = 0);
                                    } finally {
                                        n = r = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                };
                            }
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDAudioMgr = void 0);
                var i = t("../tools/GDMath"),
                    s = t("./GDResMgr"),
                    c = (function () {
                        function t() {
                            (this._state = {
                                music: !0,
                                sound: !0,
                                musicVolume: 1,
                                soundVolume: 1,
                            }),
                                (this._groups = new Map()),
                                (this._idMap = new Map()),
                                (this._cache = new Map()),
                                (this._currentMusicVolume = 0),
                                (this._currentSoundVolume = 0);
                        }
                        return (
                            Object.defineProperty(t, "instance", {
                                get: function () {
                                    return this._instance || ((this._instance = new t()), this._instance.init()), this._instance;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.init = function () {
                                (this.musicVolume = this._state.musicVolume),
                                    (this.soundVolume = this._state.soundVolume),
                                    (this.openMusic = this._state.music),
                                    (this.openSound = this._state.sound);
                            }),
                            Object.defineProperty(t.prototype, "openMusic", {
                                get: function () {
                                    return this._state.music;
                                },
                                set: function (t) {
                                    (this._state.music = t),
                                        (this._currentMusicVolume = t ? this.soundVolume : 0),
                                        cc.audioEngine.setMusicVolume(this._currentMusicVolume);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "openSound", {
                                get: function () {
                                    return this._state.sound;
                                },
                                set: function (t) {
                                    (this._state.sound = t),
                                        (this._currentSoundVolume = t ? this.soundVolume : 0),
                                        cc.audioEngine.setEffectsVolume(this._currentSoundVolume);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "musicVolume", {
                                get: function () {
                                    return this._state.musicVolume;
                                },
                                set: function (t) {
                                    (t = i.GDMath.clamp(t, 0, 1)), (this._currentMusicVolume = this._state.musicVolume = t);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(t.prototype, "soundVolume", {
                                get: function () {
                                    return this._state.soundVolume;
                                },
                                set: function (t) {
                                    (t = i.GDMath.clamp(t, 0, 1)), (this._currentSoundVolume = this._state.soundVolume = t);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.playBGM = function (t, e) {
                                var n;
                                void 0 === e && (e = !0);
                                var o = this.getClip(t.clipOrRes);
                                if (o) {
                                    var r = (null !== (n = t.zoomVolume) && void 0 !== n ? n : 1) * this._currentMusicVolume;
                                    (r = i.GDMath.clamp(r, 0, 1)), cc.audioEngine.setMusicVolume(r);
                                    var s = cc.audioEngine.playMusic(o, e);
                                    return this.setId(o, s), s;
                                }
                            }),
                            (t.prototype.playBGMAsync = function (t, e) {
                                var n;
                                return (
                                    void 0 === e && (e = !0),
                                    o(this, void 0, void 0, function () {
                                        var o, s, c, a;
                                        return r(this, function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, this.loadClip(t.clipOrRes)];
                                                case 1:
                                                    return (
                                                        (o = r.sent()),
                                                        (s = null !== (n = t.zoomVolume) && void 0 !== n ? n : 1),
                                                        (c = s * this._currentMusicVolume),
                                                        (c = i.GDMath.clamp(c, 0, 1)),
                                                        cc.audioEngine.setMusicVolume(c),
                                                        (a = cc.audioEngine.playMusic(o, e)),
                                                        this.setId(o, a),
                                                        [2, a]
                                                    );
                                            }
                                        });
                                    })
                                );
                            }),
                            (t.prototype.playOneShot = function (t, e) {
                                var n;
                                void 0 === e && (e = !1);
                                var o = this.getClip(t.clipOrRes),
                                    r = (null !== (n = t.zoomVolume) && void 0 !== n ? n : 1) * this._currentSoundVolume;
                                if (((r = i.GDMath.clamp(r, 0, 1)), cc.audioEngine.setEffectsVolume(r), !o)) return -1;
                                var s = cc.audioEngine.playEffect(o, e);
                                return this.setId(o, s), s;
                            }),
                            (t.prototype.getClipDuration = function (t) {
                                var e = this.getClip(t);
                                return null == e ? void 0 : e.duration;
                            }),
                            (t.prototype.playOneShotAsync = function (t, e) {
                                var n;
                                return (
                                    void 0 === e && (e = !1),
                                    o(this, void 0, void 0, function () {
                                        var o, s, c, a;
                                        return r(this, function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    return [4, this.loadClip(t.clipOrRes)];
                                                case 1:
                                                    return (
                                                        (o = r.sent()),
                                                        (s = null !== (n = t.zoomVolume) && void 0 !== n ? n : 1),
                                                        (c = s * this._currentSoundVolume),
                                                        (c = i.GDMath.clamp(c, 0, 1)),
                                                        cc.audioEngine.setEffectsVolume(c),
                                                        (a = cc.audioEngine.playEffect(o, e)),
                                                        this.setId(o, a),
                                                        [2, a]
                                                    );
                                            }
                                        });
                                    })
                                );
                            }),
                            (t.prototype.setId = function (t, e) {
                                t instanceof cc.AudioClip
                                    ? this._idMap.set(t.nativeUrl, e)
                                    : this._idMap.set(s.GDResMgr.getResAddress(t), e);
                            }),
                            (t.prototype.getId = function (t) {
                                return t instanceof cc.AudioClip
                                    ? this._idMap.get(t.nativeUrl)
                                    : this._idMap.get(s.GDResMgr.getResAddress(t));
                            }),
                            (t.prototype.loadClip = function (t) {
                                return o(this, void 0, void 0, function () {
                                    var e, n;
                                    return r(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                return t instanceof cc.AudioClip ? [2, t] : [3, 1];
                                            case 1:
                                                return (
                                                    (e = s.GDResMgr.getResAddress(t)),
                                                    (n = this._cache.get(e)) ? [2, n] : [4, s.GDResMgr.load(t)]
                                                );
                                            case 2:
                                                if ((n = o.sent())) return this._cache.set(e, n), [2, n];
                                                o.label = 3;
                                            case 3:
                                                return [2];
                                        }
                                    });
                                });
                            }),
                            (t.prototype.getClip = function (t) {
                                if (t instanceof cc.AudioClip) return t;
                                var e = s.GDResMgr.getResAddress(t),
                                    n = this._cache.get(e);
                                return n && n.loaded ? n : (n = s.GDResMgr.get(t)) ? (this._cache.set(e, n), n) : void 0;
                            }),
                            (t.prototype.pauseBGM = function () {
                                cc.audioEngine.pauseMusic();
                            }),
                            (t.prototype.resumeBGM = function () {
                                cc.audioEngine.resumeMusic();
                            }),
                            (t.prototype.stopBGM = function () {
                                cc.audioEngine.stopMusic();
                            }),
                            (t.prototype.pauseOneShot = function (t) {
                                var e = this.getId(t);
                                this.pauseId(e);
                            }),
                            (t.prototype.resumeOneShot = function (t) {
                                var e = this.getId(t);
                                this.resumeId(e);
                            }),
                            (t.prototype.stopOneShot = function (t) {
                                var e = this.getId(t);
                                this.stopId(e);
                            }),
                            (t.prototype.pauseId = function (t) {
                                cc.audioEngine.pause(t);
                            }),
                            (t.prototype.resumeId = function (t) {
                                cc.audioEngine.resume(t);
                            }),
                            (t.prototype.stopId = function (t) {
                                cc.audioEngine.stop(t);
                            }),
                            (t.prototype.pauseGroup = function (t) {
                                var e = this,
                                    n = this._groups.get(t);
                                n &&
                                    n.forEach(function (t) {
                                        e.pauseId(t);
                                    });
                            }),
                            (t.prototype.resumeGroup = function (t) {
                                var e = this,
                                    n = this._groups.get(t);
                                n &&
                                    n.forEach(function (t) {
                                        e.resumeId(t);
                                    });
                            }),
                            (t.prototype.stopGroup = function (t, e) {
                                var n = this;
                                void 0 === e && (e = !0);
                                var o = this._groups.get(t);
                                o &&
                                    (o.forEach(function (t) {
                                        n.stopId(t);
                                    }),
                                    e && this.removeGroup(t));
                            }),
                            (t.prototype.setGroup = function (t, e) {
                                var n = this._groups.get(e);
                                n || ((n = []), this._groups.set(e, n)), n.push(t);
                            }),
                            (t.prototype.removeGroup = function (t) {
                                this._groups.delete(t);
                            }),
                            (t.prototype.pauseAll = function () {
                                cc.audioEngine.pauseAllEffects(), cc.audioEngine.pauseMusic();
                            }),
                            (t.prototype.resumeAll = function () {
                                cc.audioEngine.resumeAllEffects(), cc.audioEngine.resumeMusic();
                            }),
                            (t.prototype.stopAll = function () {
                                cc.audioEngine.stopAll();
                            }),
                            (t.prototype.stopOneShotAll = function () {
                                cc.audioEngine.stopAllEffects();
                            }),
                            (t._instance = null),
                            t
                        );
                    })();
                (n.GDAudioMgr = c), cc._RF.pop();
            },
            {
                "../tools/GDMath": "GDMath",
                "./GDResMgr": "GDResMgr",
            },
        ],
        GDBlackboard: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "d0708vFQ0BEG4JA1oqSODYV", "GDBlackboard"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDBlackboardMgr = void 0);
                var o = t("./GDKV"),
                    r = (function () {
                        function t() {}
                        return (
                            (t.getBlackboard = function (t) {
                                return this._blackBoards.get(t) || this.newBlackboard(t);
                            }),
                            (t.newBlackboard = function (t) {
                                var e = new o.GDKV();
                                return this._blackBoards.set(t, e), e;
                            }),
                            (t._blackBoards = new Map()),
                            t
                        );
                    })();
                (n.GDBlackboardMgr = r), cc._RF.pop();
            },
            {
                "./GDKV": "GDKV",
            },
        ],
        GDButton: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "93975rrf0RALpHjUBi/+r5X", "GDButton");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDButton = void 0);
                var s = t("../manage/GDAudioMgr"),
                    c = cc._decorator,
                    a = c.ccclass,
                    u = c.property,
                    l = c.requireComponent,
                    p = c.menu,
                    h = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e._onClick = []),
                                (e._btn = null),
                                (e._intractable = !0),
                                (e.isNormal = !0),
                                (e.clickAudio = null),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                var t = this;
                                this._btn || (this._btn = this.getComponent(cc.Button)),
                                    this._btn &&
                                        this.isNormal &&
                                        ((this._btn.transition = cc.Button.Transition.SCALE), (this._btn.zoomScale = 1.05)),
                                    this.node.on(cc.Node.EventType.TOUCH_END, function () {
                                        if (t._intractable) {
                                            var e = t.clickAudio;
                                            e &&
                                                s.GDAudioMgr.instance.playOneShot({
                                                    clipOrRes: e,
                                                }),
                                                t._onClick.forEach(function (t) {
                                                    t.callback.call(t.context, t.data);
                                                });
                                        }
                                    });
                            }),
                            (e.prototype.setIntractable = function (t, e) {
                                void 0 === e && (e = !1),
                                    this._btn || (this._btn = this.getComponent(cc.Button)),
                                    (this._intractable = this._btn.interactable = t);
                            }),
                            Object.defineProperty(e.prototype, "intractable", {
                                get: function () {
                                    return this._intractable;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.addClickListener = function (t, e, n) {
                                this._onClick.push({
                                    callback: t,
                                    context: e,
                                    data: n,
                                });
                            }),
                            (e.prototype.removeClickListener = function (t, e) {
                                var n = this;
                                this._onClick.forEach(function (o) {
                                    e == o.context && o.callback == t ? n.removeClick(o) : o.callback == t && n.removeClick(o);
                                });
                            }),
                            (e.prototype.removeAllClickListener = function () {
                                this._onClick = [];
                            }),
                            (e.prototype.removeClick = function (t) {
                                var e = this._onClick.findIndex(function (e) {
                                    return e == t;
                                });
                                this._onClick.splice(e, 1);
                            }),
                            i([u], e.prototype, "isNormal", void 0),
                            i([u(cc.AudioClip)], e.prototype, "clickAudio", void 0),
                            i([a, l(cc.Button), p("GD/UI/GDButton")], e)
                        );
                    })(cc.Component);
                (n.GDButton = h), cc._RF.pop();
            },
            {
                "../manage/GDAudioMgr": "GDAudioMgr",
            },
        ],
        GDCCUtils: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "b2238pzT6NKI4+h/0Db1ndI", "GDCCUtils"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDCCUtils = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.ready = function () {
                            return new Promise(function (t) {
                                cc.director.once(cc.Director.EVENT_BEFORE_DRAW, t);
                            });
                        }),
                        (t.addSceneChild = function (t) {
                            cc.director.getScene().addChild(t);
                        }),
                        (t.addCanvasChild = function (t) {
                            var e = cc.Canvas.instance;
                            e && e.node.addChild(t);
                        }),
                        (t.convertToCanvasSpaceAR = function (t, e, n) {
                            void 0 === e && (e = cc.v2(0.5, 0.5)), void 0 === n && (n = cc.Vec2.ZERO);
                            var o = this.convertToWorldSpaceAR(t, e).add(n),
                                r = cc.Canvas.instance;
                            return r ? r.node.convertToNodeSpaceAR(o) : cc.Vec2.ZERO;
                        }),
                        (t.sleep = function (t, e) {
                            return new Promise(function (n) {
                                t.scheduleOnce(function () {
                                    n(!0);
                                }, e);
                            });
                        }),
                        (t.convertToWorldSpaceAR = function (t, e, n) {
                            void 0 === e && (e = cc.v2(0.5, 0.5)), void 0 === n && (n = cc.Vec2.ZERO);
                            var o = t.getAnchorPoint(),
                                r = t.convertToWorldSpaceAR(n);
                            return (r.x += t.width * (e.x - o.x) * t.scaleX), (r.y += t.height * (e.y - o.y) * t.scaleY), r;
                        }),
                        (t.getWorldAABB = function (t) {
                            var e = this.convertToWorldSpaceAR(t, cc.Vec2.ZERO);
                            return new cc.Rect(e.x, e.y, t.width * t.scaleX, t.height * t.scaleY);
                        }),
                        (t.convertNodeToTargeSpaceAR = function (t, e, n, o) {
                            void 0 === n && (n = cc.v2(0.5, 0.5)), void 0 === o && (o = cc.v2(0.5, 0.5));
                            var r = this.convertToWorldSpaceAR(e, o);
                            return this.convertToWorldSpaceAR(t, n).sub(r);
                        }),
                        (t.convertToNodeSpaceByAnchor = function (t, e) {
                            var n = this.convertToLocalSpaceByAnchor(t, e);
                            return (n.x += t.x), (n.y += t.y), n;
                        }),
                        (t.convertToLocalSpaceByAnchor = function (t, e) {
                            var n = t.getAnchorPoint(),
                                o = (e.x - n.x) * t.width * t.scaleX,
                                r = (e.y - n.y) * t.height * t.scaleY;
                            return new cc.Vec2(o, r);
                        }),
                        (t.FindChildNode = function (t, e) {
                            var n = e.getChildByName(t);
                            if (n) return n;
                            for (var o = e.children, r = o.length, i = 0; i < r; i++) {
                                var s = this.FindChildNode(t, o[i]);
                                if (s) return s;
                            }
                            return n;
                        }),
                        (t.FindNode = function (t, e) {
                            return (
                                void 0 === e && (e = null), null == e && (e = cc.director.getScene()), this.FindChildNode(t, e)
                            );
                        }),
                        (t.FindChildComponent = function (t, e) {
                            var n = e.getComponentInChildren(t);
                            if (n) return n;
                            for (var o = e.children, r = o.length, i = 0; i < r; i++) {
                                var s = this.FindChildComponent(t, o[i]);
                                if (s) return s;
                            }
                            return null;
                        }),
                        (t.FindComponent = function (t, e) {
                            return (
                                void 0 === e && (e = null),
                                null == e && (e = cc.director.getScene()),
                                this.FindChildComponent(t, e)
                            );
                        }),
                        (t.setSpriteGray = function (t) {
                            var e = t.getComponent(cc.Sprite),
                                n = cc.Material.getBuiltinMaterial("2d-gray-sprite");
                            (n = cc.MaterialVariant.create(n, e)), e.setMaterial(0, n);
                        }),
                        (t.setSpriteNormal = function (t) {
                            var e = t.getComponent(cc.Sprite),
                                n = cc.Material.getBuiltinMaterial("2d-sprite");
                            (n = cc.MaterialVariant.create(n, e)), e.setMaterial(0, n);
                        }),
                        t
                    );
                })();
                (n.GDCCUtils = o), cc._RF.pop();
            },
            {},
        ],
        GDCommonUtils: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "ff93ffp7PBJGavBWUz2f3V6", "GDCommonUtils"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDCommonUtils = void 0);
                var o = {
                        nextInt: function (t, e) {
                            return Math.floor(Math.random() * (e - t)) + t;
                        },
                        next01: function () {
                            return Math.random();
                        },
                    },
                    r = (function () {
                        function t() {}
                        return (
                            (t.isArray = function (t) {
                                return "function" == typeof Array.isArray
                                    ? Array.isArray(t)
                                    : "[object Array]" === Object.prototype.toString.call(t);
                            }),
                            (t.foramtDate = function (t, e) {
                                var n = {
                                    "M+": t.getMonth() + 1,
                                    "d+": t.getDate(),
                                    "h+": t.getHours(),
                                    "m+": t.getMinutes(),
                                    "s+": t.getSeconds(),
                                    "q+": Math.floor((t.getMonth() + 3) / 3),
                                    "S+": t.getMilliseconds(),
                                };
                                for (var o in (/(y+)/i.test(e) &&
                                    (e = e.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))),
                                n))
                                    new RegExp("(" + o + ")").test(e) &&
                                        (e = e.replace(RegExp.$1, ("00" + n[o]).substr(("" + n[o]).length)));
                                return e;
                            }),
                            (t.getElemClamped = function (t, e) {
                                return t[Math.max(0, Math.min(t.length - 1, e))];
                            }),
                            (t.randomIntClosedRange = function (t, e) {
                                return Math.floor(Math.random() * (e - t + 0.9999) + t);
                            }),
                            (t.indexOf = function (t, e) {
                                for (var n = 0; n < e.length; n++) if (e[n] == t) return n;
                                return -1;
                            }),
                            (t.indexOfArr = function (t) {
                                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                for (var o = e.length, r = !1, i = 0; i <= t.length - o; i += o) {
                                    r = !0;
                                    for (var s = 0; s < o; s++)
                                        if (t[i + s] !== e[s]) {
                                            r = !1;
                                            break;
                                        }
                                    if (r) return i;
                                }
                                return -1;
                            }),
                            (t.floatEqual = function (t, e, n) {
                                return void 0 === n && (n = 1e-6), Math.abs(t - e) < n;
                            }),
                            (t.formatTimeInterval = function (t, e, n) {
                                void 0 === e && (e = !1), void 0 === n && (n = !1), (e = n || e);
                                var o = "",
                                    r = Math.floor(t / 3600);
                                t %= 3600;
                                var i = Math.floor(t / 60);
                                return (
                                    (n || r > 0) && (r < 10 && (o += "0"), (o += r + ":")),
                                    (e || i > 0 || r > 0) && (i < 10 && (o += "0"), (o += i + ":")),
                                    (t = Math.floor(t % 60)) < 10 && (o += "0"),
                                    o + t
                                );
                            }),
                            (t.alignNumber = function (t, e) {
                                return t - Math.floor(t / e) * e;
                            }),
                            (t.formatNumber = function (t) {
                                var e = "" + Math.floor(t),
                                    n = "",
                                    o = 0;
                                if (-1 == e.indexOf(".")) {
                                    for (var r = e.length - 1; r >= 0; r--)
                                        (n = o % 3 == 0 && 0 != o ? e.charAt(r) + "," + n : e.charAt(r) + n), o++;
                                    return n;
                                }
                                for (r = e.indexOf(".") - 1; r >= 0; r--)
                                    (n = o % 3 == 0 && 0 != o ? e.charAt(r) + "," + n : e.charAt(r) + n), o++;
                                return n + (e + "00").substr((e + "00").indexOf("."), 3);
                            }),
                            (t.updateLabelSize = function (t) {
                                t._updateRenderData(!0);
                            }),
                            (t.lerp = function (t, e, n) {
                                return t + (e - t) * n;
                            }),
                            (t.shuffle = function (t, e, n, r) {
                                void 0 === e && (e = o),
                                    void 0 === n && (n = 0),
                                    void 0 === r && (r = -1),
                                    (e = e || o),
                                    r < 0 && (r = t.length - n);
                                for (var i = 0; i < r; i++) {
                                    var s = e.nextInt(n, n + r - i),
                                        c = t[s];
                                    (t[s] = t[r - i - 1 + n]), (t[r - i - 1 + n] = c);
                                }
                            }),
                            (t.addSimpleClick = function (t, e) {
                                var n = t,
                                    o = null;
                                n.on(
                                    cc.Node.EventType.TOUCH_START,
                                    function (t) {
                                        o = t.getLocation();
                                    },
                                    this
                                ),
                                    n.on(
                                        cc.Node.EventType.TOUCH_END,
                                        function (t) {
                                            o && o.subSelf(t.getLocation()).mag() < 3 && e();
                                        },
                                        this
                                    );
                            }),
                            (t.isGoodNumber = function (t) {
                                return "number" == typeof t && !Number.isNaN(t);
                            }),
                            (t.getVisibleRect = function () {
                                var t = cc.view.getViewportRect();
                                return cc.rect(
                                    t.origin.x / -cc.view.getScaleX(),
                                    t.origin.y / -cc.view.getScaleY(),
                                    (t.size.width + 2 * t.origin.x) / cc.view.getScaleX(),
                                    (t.size.height + 2 * t.origin.y) / cc.view.getScaleY()
                                );
                            }),
                            (t.randomGaussian = function (t, e, n) {
                                void 0 === n && (n = o);
                                var r = (n = n || o).next01(),
                                    i = n.next01();
                                return Math.sqrt(-2 * Math.log(r)) * Math.cos(2 * Math.PI * i) * e + t;
                            }),
                            (t.deepCopy = function (t, e) {
                                for (var n in e) this._deepCopyFields(t, e, n);
                            }),
                            (t.constructObjectMap = function (t) {
                                var e = new Map();
                                for (var n in t) {
                                    var o = t[n];
                                    "object" == typeof o ? e.set(n, this.constructObjectMap(o)) : e.set(n, o);
                                }
                                return e;
                            }),
                            (t._deepCopyFields = function (t, e, n) {
                                var o = e[n];
                                if ("number" == typeof o || "string" == typeof o) t[n] = o;
                                else if (this.isArray[o])
                                    for (var r = (t[n] = []), i = 0; i < o.length; i++) this._deepCopyFields(r, o, i);
                                else if (null == o) t[n] = null;
                                else if ("object" == typeof o) {
                                    var s = new o.constructor();
                                    for (var c in e) this._deepCopyFields(s, o, c);
                                }
                            }),
                            (t.formatNumberToEng = function (e) {
                                if (e < 1 && e > 0) return "1";
                                e = Math.floor(e);
                                var n = Math.floor(t.getExponent(e));
                                if (n < 13) {
                                    if (n < 4) return e + "";
                                    var o = Math.floor(n / t.constNum),
                                        r = n % t.constNum;
                                    return String(e / Math.pow(10, o * t.constNum)).substr(0, t.constNum + r) + t.getUnit(n);
                                }
                                return (e / Math.pow(10, n)).toFixed(3) + "e" + n;
                            }),
                            (t.getExponent = function (t) {
                                for (var e = 0; t >= 10; ) e++, (t /= 10);
                                return e;
                            }),
                            (t.getUnit = function (e) {
                                var n = Math.floor(e / t.constNum);
                                return e < 13 ? t.unitArr[n] : "e" + (n = Math.floor(e / t.constNum)) * t.constNum;
                            }),
                            (t.formatEngNumber = function (t, e) {
                                var n, o;
                                return (
                                    void 0 === e && (e = 2),
                                    (t = t) >= 1e6
                                        ? ((o = t / 1e6),
                                          (n = (0.001 * Math.floor(o / 0.001)).toFixed(e)),
                                          this.formatEndingZero(n) + "M")
                                        : t >= 1e3
                                        ? ((o = t / 1e3),
                                          (n = (0.001 * Math.floor(o / 0.001)).toFixed(e)),
                                          this.formatEndingZero(n) + "K")
                                        : t + ""
                                );
                            }),
                            (t.formatEndingZero = function (t) {
                                if (-1 != t.indexOf(".")) {
                                    if (this.endWith(t, "00")) return t.substring(0, t.length - 3);
                                    if (this.endWith(t, "0")) return t.substring(0, t.length - 1);
                                }
                                return t;
                            }),
                            (t.endWith = function (t, e) {
                                return e == t.substring(t.length - e.length);
                            }),
                            (t.makeMaxWidthLabel = function (t, e) {
                                var n = {};
                                return (
                                    (n.__proto__ = t),
                                    Object.defineProperty(n, "string", {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: function () {
                                            return t.string;
                                        },
                                        set: function (n) {
                                            (t.overflow = cc.Label.Overflow.NONE),
                                                (t.string = n),
                                                t._updateRenderData(!0),
                                                t.node.width > e &&
                                                    ((t.overflow = cc.Label.Overflow.RESIZE_HEIGHT),
                                                    t.node.setContentSize(e, 1),
                                                    (t.string = n));
                                        },
                                    }),
                                    n
                                );
                            }),
                            (t.climeUserName = function (t, e) {
                                void 0 === e && (e = 14);
                                for (var n = t.length; this.strlen(t) > e; ) t = t.substring(0, t.length - 1);
                                return t.length != n && (t += "..."), t;
                            }),
                            (t.strlen = function (t) {
                                for (var e = 0, n = 0; n < t.length; n++) {
                                    var o = t.charCodeAt(n);
                                    (o >= 1 && o <= 126) || (65376 <= o && o <= 65439) ? e++ : (e += 2);
                                }
                                return e;
                            }),
                            (t.shuffleArr = function (t) {
                                for (var e, n, o, r = t.length, i = 0; i < r; i++) {
                                    (n = r - i - 1),
                                        void 0,
                                        (o = t[(e = Math.floor(Math.random() * (r - i)))]),
                                        (t[e] = t[n]),
                                        (t[n] = o);
                                }
                                return t;
                            }),
                            (t.binarySearch = function (t, e, n) {
                                void 0 === n && (n = !1);
                                for (var o = 0, r = t.length - 1; r - o > 1; ) {
                                    var i = Math.floor((o + r) / 2);
                                    if (e < t[i]) r = i;
                                    else {
                                        if (!(e > t[i])) return i;
                                        o = i;
                                    }
                                }
                                return n ? (o == t.length - 1 ? t.length : r) : 0 == r ? -1 : o;
                            }),
                            (t.isInTriangle = function (t, e, n, o) {
                                var r = n.sub(e),
                                    i = o.sub(e),
                                    s = o.sub(n),
                                    c = t.sub(e),
                                    a = t.sub(n);
                                return (
                                    (r.cross(i) >= 0) ^ (r.cross(c) < 0) &&
                                    (r.cross(i) >= 0) ^ (i.cross(c) >= 0) &&
                                    (s.cross(r) > 0) ^ (s.cross(a) >= 0)
                                );
                            }),
                            (t.isInPolygon = function (t, e) {
                                var n,
                                    o,
                                    r,
                                    i,
                                    s = 0,
                                    c = e.length;
                                for (r = e[0], n = 1; n <= c; n++)
                                    (i = e[n % c]),
                                        t.x > Math.min(r.x, i.x) &&
                                            t.x <= Math.max(r.x, i.x) &&
                                            t.y <= Math.max(r.y, i.y) &&
                                            r.x != i.x &&
                                            ((o = ((t.x - r.x) * (i.y - r.y)) / (i.x - r.x) + r.y),
                                            (r.y == i.y || t.y <= o) && s++),
                                        (r = i);
                                return s % 2 != 0;
                            }),
                            (t.splitPolygon = function (t) {
                                if (t.length <= 3) return [0, 1, 2];
                                for (var e = {}, n = 0; n < t.length; n++) {
                                    var o = t[n];
                                    e[o.x + "-" + o.y] = n;
                                }
                                var r = function (t) {
                                    return e[t.x + "-" + t.y];
                                };
                                t = t.concat([]);
                                for (var i = [], s = 0; t.length > 3; ) {
                                    var c = t[s % t.length],
                                        a = t[(s + 1) % t.length],
                                        u = t[(s + 2) % t.length],
                                        l = (s + 1) % t.length,
                                        p = a.sub(c),
                                        h = u.sub(a);
                                    if (p.cross(h) < 0) s = (s + 1) % t.length;
                                    else {
                                        for (var f = !1, d = 0, _ = t; d < _.length; d++)
                                            if ((o = _[d]) != c && o != a && o != u && this.isInTriangle(o, c, a, u)) {
                                                f = !0;
                                                break;
                                            }
                                        f ? (s = (s + 1) % t.length) : (i.push(r(c), r(a), r(u)), t.splice(l, 1));
                                    }
                                }
                                for (var y = 0, v = t; y < v.length; y++) (o = v[y]), i.push(r(o));
                                return i;
                            }),
                            (t.computeUv = function (t, e, n) {
                                for (var o = [], r = 0, i = t; r < i.length; r++) {
                                    var s = i[r],
                                        c = this.clamp(0, 1, (s.x + e / 2) / e),
                                        a = this.clamp(0, 1, 1 - (s.y + n / 2) / n);
                                    o.push(cc.v2(c, a));
                                }
                                return o;
                            }),
                            (t.splitPolygonByLine = function (t, e) {
                                t.x, t.y, e.x, e.y;
                            }),
                            (t.clamp = function (t, e, n) {
                                if (t > e) {
                                    var o = t;
                                    (t = e), (e = o);
                                }
                                return n < t ? t : n > e ? e : n;
                            }),
                            (t.unitArr = ["", "K", "M", "B"]),
                            (t.constNum = 3),
                            t
                        );
                    })();
                (n.GDCommonUtils = r), cc._RF.pop();
            },
            {},
        ],
        GDCompositeTask: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "55ed4pS1tlPvqiRzh54SZG4", "GDCompositeTask");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDParallelTask = n.GDSelectorTask = n.GDSequenceTask = void 0);
                var i = t("./GDTask"),
                    s = (function (t) {
                        function e(e) {
                            var n = t.call(this, e.desc) || this;
                            return (n.children = []), (n.children = Array.from(e.children)), n;
                        }
                        return (
                            r(e, t),
                            (e.prototype.addTask = function () {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                for (var n = 0; n < t.length; n++) this.children.push(t[n]);
                            }),
                            (e.prototype.removeTask = function () {
                                for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                e.forEach(function (e) {
                                    var n = t.children.findIndex(function (t) {
                                        return t == e;
                                    });
                                    t.children.splice(n, 1);
                                });
                            }),
                            (e.prototype.stop = function () {
                                t.prototype.stop.call(this),
                                    this.children.forEach(function (t) {
                                        t.stop();
                                    });
                            }),
                            (e.prototype.enter = function () {
                                return this.next(0);
                            }),
                            (e.prototype.next = function (t) {
                                var e = this,
                                    n = this.children[t];
                                if (!n) return (this._status = i.GDTaskStatus.SUCCEED), i.GDTaskStatus.SUCCEED;
                                var o = n.start(function (n) {
                                    n != i.GDTaskStatus.FAIL ? e.next(t + 1) : (e._status = i.GDTaskStatus.FAIL);
                                });
                                return o == i.GDTaskStatus.SUCCEED
                                    ? this.next(t + 1)
                                    : o == i.GDTaskStatus.RUNNING
                                    ? i.GDTaskStatus.RUNNING
                                    : o == i.GDTaskStatus.FAIL
                                    ? i.GDTaskStatus.FAIL
                                    : void 0;
                            }),
                            e
                        );
                    })(i.GDTask);
                n.GDSequenceTask = s;
                var c = (function (t) {
                    function e(e) {
                        var n = t.call(this, e.desc) || this;
                        return (n.children = []), (n.children = Array.from(e.children)), n;
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            return this.next(0);
                        }),
                        (e.prototype.next = function (t) {
                            var e = this,
                                n = this.children[t];
                            if (!n) return (this._status = i.GDTaskStatus.FAIL), i.GDTaskStatus.FAIL;
                            var o = n.start(function (n) {
                                n != i.GDTaskStatus.SUCCEED ? e.next(t + 1) : (e._status = i.GDTaskStatus.SUCCEED);
                            });
                            return o == i.GDTaskStatus.SUCCEED
                                ? i.GDTaskStatus.SUCCEED
                                : o == i.GDTaskStatus.RUNNING
                                ? i.GDTaskStatus.RUNNING
                                : o == i.GDTaskStatus.FAIL
                                ? this.next(t + 1)
                                : void 0;
                        }),
                        e
                    );
                })(i.GDTask);
                n.GDSelectorTask = c;
                var a = (function (t) {
                    function e(e) {
                        var n = t.call(this, e.desc) || this;
                        return (n.children = []), (n.children = Array.from(e.children)), n;
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            for (var t = this, e = !1, n = 0, o = 0; o < this.children.length; o++) {
                                var r = this.children[o].start(function (e) {
                                    if (e == i.GDTaskStatus.FAIL) return (t._status = i.GDTaskStatus.FAIL), void t.stopChildren();
                                    --n <= 0 && (t._status = i.GDTaskStatus.SUCCEED);
                                });
                                if ((r == i.GDTaskStatus.RUNNING && ((e = !0), n++), r == i.GDTaskStatus.FAIL))
                                    return i.GDTaskStatus.FAIL;
                            }
                            return e ? i.GDTaskStatus.RUNNING : i.GDTaskStatus.SUCCEED;
                        }),
                        (e.prototype.stopChildren = function () {
                            this.children.forEach(function (t) {
                                t.stop();
                            });
                        }),
                        e
                    );
                })(i.GDTask);
                (n.GDParallelTask = a), cc._RF.pop();
            },
            {
                "./GDTask": "GDTask",
            },
        ],
        GDConditionTask: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "b38a60Bj2tGlo0O8PdudWpC", "GDConditionTask");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDComparisonTask = n.ComparisonType = void 0);
                var i,
                    s = t("../GDBlackboard"),
                    c = t("./GDTask");
                (function (t) {
                    (t[(t[">"] = 0)] = ">"),
                        (t[(t["<"] = 1)] = "<"),
                        (t[(t["=="] = 2)] = "=="),
                        (t[(t[">="] = 3)] = ">="),
                        (t[(t["<="] = 4)] = "<=");
                })((i = n.ComparisonType || (n.ComparisonType = {})));
                var a = (function (t) {
                    function e(e) {
                        var n = t.call(this, e.desc) || this;
                        return (
                            (n.key = e.key), (n.value = e.value), (n.comparisonType = e.comparisonType), (n.bbName = e.bbName), n
                        );
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            var t = s.GDBlackboardMgr.getBlackboard(this.bbName).getValue(this.key);
                            switch (this.comparisonType) {
                                case i["<"]:
                                    return this.value < t ? c.GDTaskStatus.SUCCEED : c.GDTaskStatus.FAIL;
                                case i[">"]:
                                    return this.value > t ? c.GDTaskStatus.SUCCEED : c.GDTaskStatus.FAIL;
                                case i["=="]:
                                    return this.value == t ? c.GDTaskStatus.SUCCEED : c.GDTaskStatus.FAIL;
                                case i[">="]:
                                    return this.value >= t ? c.GDTaskStatus.SUCCEED : c.GDTaskStatus.FAIL;
                                case i["<="]:
                                    return this.value <= t ? c.GDTaskStatus.SUCCEED : c.GDTaskStatus.FAIL;
                                default:
                                    return c.GDTaskStatus.FAIL;
                            }
                        }),
                        e
                    );
                })(c.GDTask);
                (n.GDComparisonTask = a), cc._RF.pop();
            },
            {
                "../GDBlackboard": "GDBlackboard",
                "./GDTask": "GDTask",
            },
        ],
        GDDecoratorTask: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "58dbfraZMZC+rDsTfr6MUam", "GDDecoratorTask");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDLoopTask = n.GDUntilFailTask = n.GDUntilSucceedTask = n.GDDecoratorTask = void 0);
                var i = t("./GDTask"),
                    s = (function (t) {
                        function e(e) {
                            var n = t.call(this, e.desc) || this;
                            return (n.children = null), (n.children = e.children), n;
                        }
                        return r(e, t), e;
                    })(i.GDTask);
                n.GDDecoratorTask = s;
                var c = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            var t = this;
                            return this.children.start(function (e) {
                                e == i.GDTaskStatus.SUCCEED && (t._status = i.GDTaskStatus.SUCCEED);
                            }) == i.GDTaskStatus.SUCCEED
                                ? i.GDTaskStatus.SUCCEED
                                : i.GDTaskStatus.RUNNING;
                        }),
                        (e.prototype.update = function () {
                            this.children.done &&
                                (this.children.status == i.GDTaskStatus.SUCCEED
                                    ? (this._status = i.GDTaskStatus.SUCCEED)
                                    : this.children.start());
                        }),
                        e
                    );
                })(s);
                n.GDUntilSucceedTask = c;
                var a = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            var t = this;
                            return this.children.start(function (e) {
                                e == i.GDTaskStatus.FAIL && (t._status = i.GDTaskStatus.SUCCEED);
                            }) == i.GDTaskStatus.FAIL
                                ? i.GDTaskStatus.SUCCEED
                                : i.GDTaskStatus.RUNNING;
                        }),
                        e
                    );
                })(s);
                n.GDUntilFailTask = a;
                var u = (function (t) {
                    function e(e) {
                        var n,
                            o = t.call(this, e) || this;
                        return (o.loopCount = null !== (n = e.loopCount) && void 0 !== n ? n : -1), o;
                    }
                    return (
                        r(e, t),
                        (e.prototype.enter = function () {
                            return (this._loopCount = this.loopCount), this.runChildren();
                        }),
                        (e.prototype.update = function () {
                            this.children.done &&
                                this.runChildren() == i.GDTaskStatus.SUCCEED &&
                                (this._status = i.GDTaskStatus.SUCCEED);
                        }),
                        (e.prototype.runChildren = function () {
                            return 0 == this._loopCount
                                ? i.GDTaskStatus.SUCCEED
                                : (this._loopCount--, this.children.start(), i.GDTaskStatus.RUNNING);
                        }),
                        e
                    );
                })(s);
                (n.GDLoopTask = u), cc._RF.pop();
            },
            {
                "./GDTask": "GDTask",
            },
        ],
        GDDraw: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "6f0aaTEPHtEaJvtbO1hiMaP", "GDDraw"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDDraw = void 0);
                var o = t("./GDCCUtils"),
                    r = t("./GDMath");
                cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, function () {
                    i.clearAll();
                });
                var i = (function () {
                    function t() {}
                    return (
                        (t.drawLine = function (t, e) {
                            var n = this.getGraphics();
                            (n.lineWidth = this.lineSize),
                                (n.strokeColor = this.color),
                                n.moveTo(t.x, t.y),
                                n.lineTo(e.x, e.y),
                                n.stroke();
                        }),
                        (t.drawRay = function (t, e, n) {
                            var o = this.getGraphics();
                            (o.lineWidth = this.lineSize), (o.strokeColor = this.color), o.moveTo(t.x, t.y);
                            var r = e.mul(n),
                                i = t.add(r);
                            o.lineTo(i.x, i.y), o.stroke();
                        }),
                        (t.drawPoint = function (t) {
                            var e = (2 * Math.PI) / 64,
                                n = 0.5 * this.pointSize,
                                o = 0,
                                i = this.getGraphics(),
                                s = t.add(r.GDMath.polarToCartesianByRad(o, n));
                            i.moveTo(s.x, s.y);
                            for (var c = cc.Vec2.ZERO, a = 0; a < 64; a++) {
                                o += e;
                                var u = Math.cos(o) * n,
                                    l = Math.sin(o) * n;
                                (c.x = t.x + u), (c.y = t.y + l), i.lineTo(c.x, c.y);
                            }
                            i.lineTo(s.x, s.y),
                                (i.lineWidth = this.lineSize),
                                (i.fillColor = this.color),
                                (i.lineJoin = cc.Graphics.LineJoin.ROUND),
                                i.fill(),
                                (i.lineJoin = cc.Graphics.LineJoin.MITER);
                        }),
                        (t.drawChain = function (t) {
                            if (!(t.length <= 0)) {
                                var e = this.getGraphics(),
                                    n = t[0];
                                e.moveTo(n.x, n.y);
                                for (var o = cc.Vec2.ZERO, r = 1; r < t.length; r++) (o = t[r]), e.lineTo(o.x, o.y);
                                (e.lineWidth = this.lineSize),
                                    (e.strokeColor = this.color),
                                    (e.lineJoin = cc.Graphics.LineJoin.ROUND),
                                    e.stroke(),
                                    (e.lineJoin = cc.Graphics.LineJoin.MITER);
                            }
                        }),
                        (t.drawPolygon = function (t) {
                            if (!(t.length <= 0)) {
                                var e = this.getGraphics(),
                                    n = t[0];
                                e.moveTo(n.x, n.y);
                                for (var o = cc.Vec2.ZERO, r = 1; r < t.length; r++) (o = t[r]), e.lineTo(o.x, o.y);
                                e.lineTo(n.x, n.y), (e.lineWidth = this.lineSize), (e.strokeColor = this.color), e.stroke();
                            }
                        }),
                        (t.drawAABB = function (t) {
                            var e = this.getGraphics();
                            e.rect(t.x, t.y, t.width, t.height),
                                (e.lineWidth = this.lineSize),
                                (e.strokeColor = this.color),
                                e.stroke();
                        }),
                        (t.drawArc = function (t, e, n, o, i) {
                            void 0 === i && (i = 64);
                            var s = n / i,
                                c = e,
                                a = this.getGraphics(),
                                u = t.add(r.GDMath.polarToCartesianByRad(c, o));
                            a.moveTo(u.x, u.y);
                            for (var l = cc.Vec2.ZERO, p = 0; p < i; p++) {
                                c += s;
                                var h = Math.cos(c) * o,
                                    f = Math.sin(c) * o;
                                (l.x = t.x + h), (l.y = t.y + f), a.lineTo(l.x, l.y);
                            }
                            (a.lineWidth = this.lineSize),
                                (a.strokeColor = this.color),
                                (a.lineJoin = cc.Graphics.LineJoin.ROUND),
                                a.stroke(),
                                (a.lineJoin = cc.Graphics.LineJoin.MITER);
                        }),
                        (t.drawCircle = function (t, e, n) {
                            void 0 === n && (n = 64);
                            var o = (2 * Math.PI) / n,
                                i = 0,
                                s = this.getGraphics(),
                                c = t.add(r.GDMath.polarToCartesianByRad(i, e));
                            s.moveTo(c.x, c.y);
                            for (var a = cc.Vec2.ZERO, u = 0; u < n; u++) {
                                i += o;
                                var l = Math.cos(i) * e,
                                    p = Math.sin(i) * e;
                                (a.x = t.x + l), (a.y = t.y + p), s.lineTo(a.x, a.y);
                            }
                            s.lineTo(c.x, c.y),
                                (s.lineWidth = this.lineSize),
                                (s.strokeColor = this.color),
                                (s.lineJoin = cc.Graphics.LineJoin.ROUND),
                                s.stroke(),
                                (s.lineJoin = cc.Graphics.LineJoin.MITER);
                        }),
                        (t.getGraphics = function () {
                            var t = this._pool.get();
                            (t && t.isValid) || (t = new cc.Node()), this.attached(t), this._activate.push(t);
                            var e = t.getComponent(cc.Graphics) || t.addComponent(cc.Graphics);
                            return e.clear(), e;
                        }),
                        (t.clearAll = function () {
                            var t = this;
                            this._activate.forEach(function (e) {
                                t._pool.put(e);
                            }),
                                (this._activate = []);
                        }),
                        (t.attached = function (t) {
                            this._root ||
                                ((this._root = o.GDCCUtils.FindNode("draw")),
                                this._root
                                    ? this._root.removeAllChildren()
                                    : ((this._root = new cc.Node("draw")), o.GDCCUtils.addCanvasChild(this._root)),
                                (this._root.group = "gizmo")),
                                (t.group = "gizmo"),
                                this._root.addChild(t);
                        }),
                        (t._pool = new cc.NodePool()),
                        (t._activate = []),
                        (t._root = null),
                        (t.lineSize = 4),
                        (t.color = cc.Color.RED),
                        (t.pointSize = 5),
                        t
                    );
                })();
                (n.GDDraw = i), cc._RF.pop();
            },
            {
                "./GDCCUtils": "GDCCUtils",
                "./GDMath": "GDMath",
            },
        ],
        GDKV: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "cb950ValgVPS6xF2HHCj/CI", "GDKV"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDKV = void 0);
                var o = t("./tools/GDUtils"),
                    r = (function () {
                        function t(t) {
                            (this.kv = {}), (this.monitor = t);
                        }
                        return (
                            (t.prototype.setValue = function () {
                                throw new Error("Method not implemented.");
                            }),
                            (t.prototype.set = function (t, e) {
                                var n;
                                this.kv[t] != e &&
                                    ((this.kv[t] = e), null === (n = this.monitor) || void 0 === n || n.valueChange(t, e));
                            }),
                            (t.prototype.get = function (t) {
                                return this.kv[t];
                            }),
                            (t.prototype.tryGet = function (t, e) {
                                var n = this.get(t) || e;
                                return n || (this.set(t, e), n);
                            }),
                            (t.prototype.delete = function (t) {
                                var e;
                                if (this.kv[t]) {
                                    var n = this.kv[t];
                                    return (
                                        delete this.kv[t],
                                        null === (e = this.monitor) || void 0 === e || e.valueChange(t, void 0),
                                        n
                                    );
                                }
                            }),
                            (t.prototype.toObject = function () {
                                return o.GDUtils.deepCopy(this.kv);
                            }),
                            (t.prototype.toString = function () {
                                return JSON.stringify(this.kv);
                            }),
                            (t.prototype.clear = function () {
                                this.kv = {};
                            }),
                            t
                        );
                    })();
                (n.GDKV = r), cc._RF.pop();
            },
            {
                "./tools/GDUtils": "GDUtils",
            },
        ],
        GDList: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "9590c9ATFNFMYttK2QNQP0f", "GDList"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDList = void 0);
                var o = (function () {
                    function t() {
                        this._elements = [];
                    }
                    return (
                        Object.defineProperty(t.prototype, "elements", {
                            get: function () {
                                return Array.from(this._elements);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "head", {
                            get: function () {
                                return 0 == this.length ? null : this._elements[0];
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "tail", {
                            get: function () {
                                return 0 == this.length ? null : this._elements[this._elements.length - 1];
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "isEmpty", {
                            get: function () {
                                return 0 == this.length;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "length", {
                            get: function () {
                                return this._elements.length;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.add = function (t) {
                            this._elements.push(t);
                        }),
                        (t.prototype.get = function (t) {
                            return t < 0 || t > this._elements.length - 1 ? null : this._elements[t];
                        }),
                        (t.prototype.insert = function (t, e) {
                            this._elements.splice(t, 0, e);
                        }),
                        (t.prototype.removeAt = function (t) {
                            return this._elements.splice(t, 1)[0];
                        }),
                        (t.prototype.removeElement = function (t) {
                            this.remove(function (e) {
                                return e == t;
                            });
                        }),
                        (t.prototype.remove = function (t) {
                            var e = this.findIndex(t);
                            return this.removeAt(e);
                        }),
                        (t.prototype.findIndex = function (t) {
                            return this._elements.findIndex(function (e) {
                                return null == t ? void 0 : t(e);
                            });
                        }),
                        (t.prototype.find = function (t) {
                            return this._elements.find(function (e) {
                                return null == t ? void 0 : t(e);
                            });
                        }),
                        (t.prototype.forEach = function (t) {
                            this._elements.forEach(t);
                        }),
                        (t.prototype.clear = function () {
                            this._elements = [];
                        }),
                        t
                    );
                })();
                (n.GDList = o), cc._RF.pop();
            },
            {},
        ],
        GDLocalStorage: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "fa87c1yb1JFeoGm6S9hD8Zt", "GDLocalStorage"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDLocalStorage = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.load = function (t) {
                            var e = cc.sys.localStorage.getItem(t);
                            return this.parse(e);
                        }),
                        (t.save = function (t, e) {
                            cc.sys.localStorage.setItem(t, JSON.stringify(e));
                        }),
                        (t.clear = function (t) {
                            cc.sys.localStorage.removeItem(t);
                        }),
                        (t.parse = function (t) {
                            if (!t) return null;
                            try {
                                return JSON.parse(t);
                            } catch (e) {
                                return null;
                            }
                        }),
                        t
                    );
                })();
                (n.GDLocalStorage = o), cc._RF.pop();
            },
            {},
        ],
        GDMath: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "0d722ucwE9JLJHUO6wFsy06", "GDMath"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDMath = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.clamp = function (t, e, n) {
                            var o, r;
                            return e > n ? ((o = n), (r = e)) : ((r = n), (o = e)), t < o ? o : t > r ? r : t;
                        }),
                        (t.mapping = function (t, e, n, o, r) {
                            t = this.clamp(t, e, n);
                            var i = n - e;
                            return 0 == i ? r : o + ((t - e) / i) * (r - o);
                        }),
                        (t.polarToCartesianByDegree = function (t, e) {
                            void 0 === e && (e = 1);
                            var n = t * this.D2R;
                            return this.polarToCartesianByRad(n, e);
                        }),
                        (t.polarToCartesianByRad = function (t, e) {
                            void 0 === e && (e = 1);
                            var n = e * Math.cos(t),
                                o = e * Math.sin(t);
                            return new cc.Vec2(n, o);
                        }),
                        (t.EPSILON = 1e-6),
                        (t.D2R = Math.PI / 180),
                        (t.R2D = 180 / Math.PI),
                        t
                    );
                })();
                (n.GDMath = o), cc._RF.pop();
            },
            {},
        ],
        GDObjectPool: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "cfe10Mop5RGrY4FG+60sn/9", "GDObjectPool");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        },
                    s =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function s(t) {
                                    try {
                                        a(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        a(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function a(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(s, c);
                                }
                                a((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2),
                                }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function c(t) {
                                return function (e) {
                                    return a([t, e]);
                                };
                            }
                            function a(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            o &&
                                                (r =
                                                    2 & i[0]
                                                        ? o.return
                                                        : i[0]
                                                        ? o.throw || ((r = o.return) && r.call(o), 0)
                                                        : o.next) &&
                                                !(r = r.call(o, i[1])).done)
                                        )
                                            return r;
                                        switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                s.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    s.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    (s.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && s.label < r[2]) {
                                                    (s.label = r[2]), s.ops.push(i);
                                                    break;
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, s);
                                    } catch (c) {
                                        (i = [6, c]), (o = 0);
                                    } finally {
                                        n = r = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                };
                            }
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDObjectPool = n.GDObjectPoolMgr = void 0);
                var a = t("./GDResMgr"),
                    u = cc._decorator,
                    l = u.ccclass,
                    p = u.property,
                    h = u.menu;
                cc.Node.prototype.GDPool = null;
                var f = (function () {
                    function t() {}
                    return (
                        (t.addPool = function (t, e) {
                            null == this._root && ((this._root = new cc.Node("pools")), cc.game.addPersistRootNode(this._root)),
                                this._objectPools.has(t) ||
                                    ((e.node.parent = this._root),
                                    (e.node.position = this._root.position),
                                    this._objectPools.set(t, e));
                        }),
                        (t.removePool = function (t) {
                            var e = a.GDResMgr.getResAddress(t),
                                n = this._objectPools.get(e);
                            return n ? (this._objectPools.delete(e), n) : null;
                        }),
                        (t.removeAllPool = function () {
                            var t = [];
                            return (
                                this._objectPools.forEach(function (e) {
                                    t.push(e);
                                }),
                                this._objectPools.clear(),
                                t
                            );
                        }),
                        (t.clearPool = function (t) {
                            var e = a.GDResMgr.getResAddress(t),
                                n = this._objectPools.get(e);
                            n && n.clear();
                        }),
                        (t.clearAllPool = function () {
                            this._objectPools.forEach(function (t) {
                                t.clear();
                            });
                        }),
                        (t.destroyPool = function (t) {
                            var e = a.GDResMgr.getResAddress(t),
                                n = this._objectPools.get(e);
                            n && (n.clear(), n.destroy(), this._objectPools.delete(e));
                        }),
                        (t.destroyAllPool = function () {
                            this._objectPools.forEach(function (t) {
                                t.clear(), t.destroy();
                            }),
                                this._objectPools.clear();
                        }),
                        (t.recycle = function (t, e) {
                            if (e) {
                                var n = a.GDResMgr.getResAddress(e),
                                    o = this.getPool(n);
                                o && o.recycle(t);
                            } else {
                                var r = t.GDPool;
                                r && r.recycle(t);
                            }
                        }),
                        (t.recycleAll = function (t) {
                            var e = a.GDResMgr.getResAddress(t),
                                n = this.getPool(e);
                            n && n.recycleAll();
                        }),
                        (t.getPool = function (t) {
                            return this._objectPools.get(t);
                        }),
                        (t.get = function (e) {
                            var n,
                                o = a.GDResMgr.getResAddress(e),
                                r = t.getPool(o);
                            return r && (null === (n = null == r ? void 0 : r.clone) || void 0 === n ? void 0 : n.data)
                                ? r.spawn()
                                : (r = t.newPool(e, 1, 1)).spawn();
                        }),
                        (t.load = function (e) {
                            return s(this, void 0, void 0, function () {
                                var n, o;
                                return c(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return (
                                                (n = a.GDResMgr.getResAddress(e)),
                                                (o = t.getPool(n)) ? [2, o.spawn()] : [4, t.newPoolAsync(e, 1, 1)]
                                            );
                                        case 1:
                                            return [2, (o = r.sent()).spawn()];
                                    }
                                });
                            });
                        }),
                        (t.newPoolAsync = function (t, e, n) {
                            return (
                                void 0 === e && (e = 3),
                                void 0 === n && (n = 2),
                                s(this, void 0, void 0, function () {
                                    var o, r, i, s;
                                    return c(this, function (c) {
                                        switch (c.label) {
                                            case 0:
                                                return [4, a.GDResMgr.load(t)];
                                            case 1:
                                                return (o = c.sent())
                                                    ? ((r = a.GDResMgr.getResAddress(t)),
                                                      (i = new cc.Node(r)),
                                                      (s = i.addComponent(d)).init(e, n, o),
                                                      s.alloc(),
                                                      this.addPool(r, s),
                                                      [2, s])
                                                    : [2, null];
                                        }
                                    });
                                })
                            );
                        }),
                        (t.newPool = function (t, e, n) {
                            void 0 === e && (e = 3), void 0 === n && (n = 2);
                            var o = a.GDResMgr.get(t);
                            if (o) {
                                var r = a.GDResMgr.getResAddress(t),
                                    i = new cc.Node(r).addComponent(d);
                                return i.init(e, n, o), i.alloc(), this.addPool(r, i), i;
                            }
                            return null;
                        }),
                        (t._root = null),
                        (t._objectPools = new Map()),
                        t
                    );
                })();
                n.GDObjectPoolMgr = f;
                var d = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e.initSize = 1),
                            (e.stepSize = 1),
                            (e.clone = null),
                            (e._pool = new cc.NodePool()),
                            (e._activate = new Map()),
                            e
                        );
                    }
                    return (
                        r(e, t),
                        (e.prototype.onLoad = function () {
                            0 == this.size && (this.init(), this.alloc(this.stepSize));
                        }),
                        Object.defineProperty(e.prototype, "size", {
                            get: function () {
                                return this._pool.size();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(e.prototype, "totalSize", {
                            get: function () {
                                return this._pool.size() + this._activate.size;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.init = function (t, e, n) {
                            (this.initSize = t || this.initSize),
                                (this.stepSize = e || this.stepSize),
                                (this.clone = n || this.clone);
                        }),
                        (e.prototype.alloc = function (t) {
                            for (t = t || this.stepSize; t--; ) {
                                var e = cc.instantiate(this.clone);
                                if (!e) return;
                                (e.GDPool = this), this.recycle(e);
                            }
                        }),
                        (e.prototype.recycle = function (t) {
                            null != t && (this._pool.put(t), this._activate.delete(t.uuid));
                        }),
                        (e.prototype.recycleAll = function () {
                            var t = this;
                            this._activate.forEach(function (e) {
                                t._pool.put(e);
                            }),
                                this._activate.clear();
                        }),
                        (e.prototype.spawn = function () {
                            this.size <= 0 && this.alloc();
                            var t = this._pool.get();
                            return this._activate.set(t.uuid, t), t;
                        }),
                        (e.prototype.clear = function () {
                            this._pool.clear(), this._activate.clear();
                        }),
                        i([p], e.prototype, "initSize", void 0),
                        i([p], e.prototype, "stepSize", void 0),
                        i([p(cc.Prefab)], e.prototype, "clone", void 0),
                        i([l, h("GD/GDObjectPool")], e)
                    );
                })(cc.Component);
                (n.GDObjectPool = d), cc._RF.pop();
            },
            {
                "./GDResMgr": "GDResMgr",
            },
        ],
        GDPolygonUtil: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "ff383lzZExO9pb+wBvRO1sU", "GDPolygonUtil"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDPolygonUtil = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.splitPolygonByLine = function (t, e, n, o) {
                            void 0 === o && (o = !1);
                            for (var r = [], i = n.length - 1; i >= 0; i--) {
                                var s = n[i],
                                    c = 0 == i ? n[n.length - 1] : n[i - 1],
                                    a = this.lineCrossPoint(s, c, t, e),
                                    u = a[0],
                                    l = a[1];
                                -1 != u && (n.splice(i, -1, l), r.push(i + 1));
                            }
                            return r;
                        }),
                        (t.lineCrossPoint = function (t, e, n, o) {
                            var r,
                                i,
                                s,
                                c,
                                a,
                                u,
                                l = t,
                                p = e,
                                h = n,
                                f = o,
                                d = new cc.Vec2(0, 0);
                            return (
                                (s = this.dblcmp((r = this.ab_cross_ac(l, p, h)), 0)),
                                (c = this.dblcmp((i = this.ab_cross_ac(l, p, f)), 0)),
                                (a = this.dblcmp(this.ab_cross_ac(h, f, l), 0)),
                                (u = this.dblcmp(this.ab_cross_ac(h, f, p), 0)),
                                -2 == (s ^ c) && -2 == (a ^ u)
                                    ? ((d.x = (h.x * i - f.x * r) / (i - r)), (d.y = (h.y * i - f.y * r) / (i - r)), [0, d])
                                    : 0 == s && this.point_on_line(h, l, p) <= 0
                                    ? [1, (d = h)]
                                    : 0 == c && this.point_on_line(f, l, p) <= 0
                                    ? [1, (d = f)]
                                    : 0 == a && this.point_on_line(l, h, f) <= 0
                                    ? [1, (d = l)]
                                    : 0 == u && this.point_on_line(p, h, f) <= 0
                                    ? [1, (d = p)]
                                    : [-1, null]
                            );
                        }),
                        (t.isLineSegmentCross = function (t, e, n, o) {
                            return (
                                ((n.x - t.x) * (n.y - o.y) - (n.y - t.y) * (n.x - o.x)) *
                                    ((n.x - e.x) * (n.y - o.y) - (n.y - e.y) * (n.x - o.x)) <
                                    0 ||
                                ((t.x - n.x) * (t.y - e.y) - (t.y - n.y) * (t.x - e.x)) *
                                    ((t.x - o.x) * (t.y - e.y) - (t.y - o.y) * (t.x - e.x)) <
                                    0
                            );
                        }),
                        (t.point_on_line = function (t, e, n) {
                            return this.dblcmp(this.dot(e.x - t.x, e.y - t.y, n.x - t.x, n.y - t.y), 0);
                        }),
                        (t.rayPointToLine = function (t, e, n) {
                            Math.min(e.x, n.x);
                            var o = Math.max(e.x, n.x),
                                r = Math.min(e.y, n.y),
                                i = Math.max(e.y, n.y);
                            if (t.y < r || t.y > i || t.x > o) return -1;
                            var s = e.x + ((n.x - e.x) / (n.y - e.y)) * (t.y - e.y);
                            return s > t.x ? 0 : s == t.x ? 1 : -1;
                        }),
                        (t.relationPointToPolygon = function (t, e) {
                            for (var n = 0, o = 0; o < e.length; ++o) {
                                if (e[o].equals(t)) return 2;
                                var r = e[o],
                                    i = e[0];
                                o < e.length - 1 && (i = e[o + 1]);
                                var s = this.rayPointToLine(t, r, i);
                                if (1 == s) return 1;
                                0 == s && n++;
                            }
                            return n % 2 == 0 ? -1 : 0;
                        }),
                        (t.lineCutPolygon = function (t, e, n) {
                            for (var o = [], r = [], i = [], s = 0; s < n.length; ++s) {
                                r.push(n[s]);
                                var c = n[s],
                                    a = n[0];
                                s < n.length - 1 && (a = n[s + 1]);
                                var u = this.lineCrossPoint(t, e, c, a);
                                0 == u[0]
                                    ? (i.push(r.length), r.push(u[1]))
                                    : u[0] > 0 && (u[1].equals(c) ? i.push(r.length - 1) : i.push(r.length));
                            }
                            if (i.length > 1) {
                                var l = r[i[0]],
                                    p = r[i[1]],
                                    h = this.relationPointToPolygon(new cc.Vec2((l.x + p.x) / 2, (l.y + p.y) / 2), n),
                                    f = h >= 0;
                                if (!r[i[i.length - 1]]) return console.log("\u88c1\u526a\u9519\u8bef"), o;
                                i.length > 2 &&
                                    l.sub(p).mag() > l.sub(r[i[i.length - 1]]).mag() &&
                                    ((p = r[i[i.length - 1]]),
                                    (f =
                                        (h = this.relationPointToPolygon(new cc.Vec2((l.x + p.x) / 2, (l.y + p.y) / 2), n)) < 0));
                                var d = f,
                                    _ = 0,
                                    y = i[_],
                                    v = [],
                                    g = [],
                                    m = 0;
                                for (v.push(r[y]), f && g.push(r[y]), _++, m++, y++; m < r.length; ) {
                                    y == r.length && (y = 0);
                                    var b = r[y];
                                    _ >= 0 && y == i[_]
                                        ? (++_ >= i.length && (_ = 0),
                                          f ? (g.push(b), o.push(g), (g = [])) : (g = []).push(b),
                                          v.push(b),
                                          (f = !f))
                                        : f
                                        ? g.push(b)
                                        : v.push(b),
                                        y++,
                                        m++;
                                }
                                if (f)
                                    if (!d && g.length > 1) g.push(r[i[0]]), o.push(g);
                                    else for (s = 0; s < g.length; ++s) v.push(g[s]);
                                o.push(v);
                            }
                            return o;
                        }),
                        (t.ab_cross_ac = function (t, e, n) {
                            return this.cross(e.x - t.x, e.y - t.y, n.x - t.x, n.y - t.y);
                        }),
                        (t.dot = function (t, e, n, o) {
                            return t * n + e * o;
                        }),
                        (t.cross = function (t, e, n, o) {
                            return t * o - n * e;
                        }),
                        (t.dblcmp = function (t, e) {
                            return Math.abs(t - e) <= 1e-6 ? 0 : t > e ? 1 : -1;
                        }),
                        t
                    );
                })();
                (n.GDPolygonUtil = o), cc._RF.pop();
            },
            {},
        ],
        GDQueue: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "de311NXGlBEcaA/rh71Wtcg", "GDQueue"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDQueue = void 0);
                var o = (function () {
                    function t() {
                        this._elements = [];
                    }
                    return (
                        Object.defineProperty(t.prototype, "front", {
                            get: function () {
                                return this._elements[0];
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "isEmpty", {
                            get: function () {
                                return 0 == this._elements.length;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "length", {
                            get: function () {
                                return this._elements.length;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "elements", {
                            get: function () {
                                return Array.from(this._elements);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.enqueue = function (t) {
                            this._elements.push(t);
                        }),
                        (t.prototype.dequeue = function () {
                            return this._elements.shift();
                        }),
                        (t.prototype.clear = function () {
                            this._elements = [];
                        }),
                        t
                    );
                })();
                (n.GDQueue = o), cc._RF.pop();
            },
            {},
        ],
        GDRequest: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "c7504tCx69JT6FBTnIGpMYY", "GDRequest"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDRequest = void 0);
                var o = (function () {
                    function t() {}
                    return (
                        (t.httpRequest = function (t, e, n) {
                            var o = new XMLHttpRequest();
                            (o.onreadystatechange = function () {
                                if (4 === o.readyState && 200 == o.status) {
                                    var t = o.responseText,
                                        e = JSON.parse(t);
                                    n(e);
                                } else
                                    4 === o.readyState &&
                                        401 == o.status &&
                                        n({
                                            ret: 1,
                                        });
                            }),
                                o.open(e, t, !0),
                                o.setRequestHeader("Access-Control-Allow-Origin", "*"),
                                o.setRequestHeader("Access-Control-Allow-Credentials", "true"),
                                o.setRequestHeader("Access-Control-Allow-Methods", "GET, POST"),
                                o.setRequestHeader("Access-Control-Allow-Headers", "x-requested-with,content-type,authorization"),
                                o.setRequestHeader("Content-Type", "application/json"),
                                (o.timeout = 8e3),
                                (o.ontimeout = function () {
                                    setTimeout(function () {
                                        n({
                                            ret: 1,
                                        });
                                    }, 8e3);
                                }),
                                o.send();
                        }),
                        t
                    );
                })();
                (n.GDRequest = o), cc._RF.pop();
            },
            {},
        ],
        GDResLoader: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "3c718iH+tJI46I7Fi2pPPCO", "GDResLoader");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function s(t) {
                                    try {
                                        a(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        a(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function a(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(s, c);
                                }
                                a((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2),
                                }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function c(t) {
                                return function (e) {
                                    return a([t, e]);
                                };
                            }
                            function a(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            o &&
                                                (r =
                                                    2 & i[0]
                                                        ? o.return
                                                        : i[0]
                                                        ? o.throw || ((r = o.return) && r.call(o), 0)
                                                        : o.next) &&
                                                !(r = r.call(o, i[1])).done)
                                        )
                                            return r;
                                        switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                s.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    s.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    (s.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && s.label < r[2]) {
                                                    (s.label = r[2]), s.ops.push(i);
                                                    break;
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, s);
                                    } catch (c) {
                                        (i = [6, c]), (o = 0);
                                    } finally {
                                        n = r = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                };
                            }
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDResLoader = void 0);
                var i = t("../tools/GDUtils"),
                    s = t("./GDResMgr"),
                    c = (function () {
                        function t() {}
                        return (
                            Object.defineProperty(t, "singleton", {
                                get: function () {
                                    return this._singleton || (this._singleton = new t()), this._singleton;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (t.prototype.load = function (t, e) {
                                var n;
                                return o(this, void 0, void 0, function () {
                                    return r(this, function (o) {
                                        switch (o.label) {
                                            case 0:
                                                return (
                                                    this.setData(t, e),
                                                    !this._resInfos || this._resInfos.length <= 0
                                                        ? (null === (n = this._progressFunc) || void 0 === n || n.call(this, 1),
                                                          [2])
                                                        : [4, this.handler()]
                                                );
                                            case 1:
                                                return o.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (t.prototype.unload = function () {
                                this._resInfos &&
                                    this._resInfos.forEach(function (t) {
                                        "string" == typeof t
                                            ? s.GDResMgr.releaseBundle(t)
                                            : "resPath" in t
                                            ? s.GDResMgr.release(t)
                                            : s.GDResMgr.releaseBundle(t.bundle);
                                    }),
                                    this.resetData();
                            }),
                            (t.prototype.setData = function (t, e) {
                                (this._resInfos = t), (this._progressFunc = e);
                            }),
                            (t.prototype.resetData = function () {
                                (this._resInfos = null), (this._progressFunc = null);
                            }),
                            (t.prototype.handler = function () {
                                return o(this, void 0, void 0, function () {
                                    var t,
                                        e,
                                        n,
                                        o = this;
                                    return r(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    (t = []),
                                                    (e = 1 / this._resInfos.length),
                                                    (n = []),
                                                    this._resInfos.forEach(function (r, i) {
                                                        var s;
                                                        (s =
                                                            "string" == typeof r
                                                                ? o.loadResByString(r, function (t) {
                                                                      o.updateStepProgress(n, i, t * e);
                                                                  })
                                                                : "resPath" in r
                                                                ? o.loadResByGDResAddress(r, function (t) {
                                                                      o.updateStepProgress(n, i, t * e);
                                                                  })
                                                                : o.loadResByGDResDir(r, function (t) {
                                                                      o.updateStepProgress(n, i, t * e);
                                                                  })) && t.push(s);
                                                    }),
                                                    [4, Promise.all(t)]
                                                );
                                            case 1:
                                                return r.sent(), [2];
                                        }
                                    });
                                });
                            }),
                            (t.prototype.updateStepProgress = function (t, e, n) {
                                (t[e] = n), this.updateProgress(t);
                            }),
                            (t.prototype.loadResByString = function (t, e) {
                                return s.GDResMgr.loadAll(t, function (t) {
                                    null == e || e(t);
                                });
                            }),
                            (t.prototype.loadResByGDResAddress = function (t, e) {
                                if (t.resPath && t.bundlePath)
                                    return s.GDResMgr.load(t, function (t) {
                                        null == e || e(t);
                                    });
                                null == e || e(1);
                            }),
                            (t.prototype.loadResByGDResDir = function (t, e) {
                                if (t.dir && t.bundle)
                                    return s.GDResMgr.loadDir(t, function (t) {
                                        null == e || e(t);
                                    });
                                null == e || e(1);
                            }),
                            (t.prototype.updateProgress = function (t) {
                                var e,
                                    n = i.GDUtils.sumArray(t);
                                null === (e = this._progressFunc) || void 0 === e || e.call(this, n);
                            }),
                            t
                        );
                    })();
                (n.GDResLoader = c), cc._RF.pop();
            },
            {
                "../tools/GDUtils": "GDUtils",
                "./GDResMgr": "GDResMgr",
            },
        ],
        GDResMgr: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "c7711rpRvpDEKJuwAzaL9jh", "GDResMgr");
                var o =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function s(t) {
                                    try {
                                        a(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        a(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function a(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(s, c);
                                }
                                a((o = o.apply(t, e || [])).next());
                            });
                        },
                    r =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2),
                                }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function c(t) {
                                return function (e) {
                                    return a([t, e]);
                                };
                            }
                            function a(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            o &&
                                                (r =
                                                    2 & i[0]
                                                        ? o.return
                                                        : i[0]
                                                        ? o.throw || ((r = o.return) && r.call(o), 0)
                                                        : o.next) &&
                                                !(r = r.call(o, i[1])).done)
                                        )
                                            return r;
                                        switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                s.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    s.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    (s.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && s.label < r[2]) {
                                                    (s.label = r[2]), s.ops.push(i);
                                                    break;
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, s);
                                    } catch (c) {
                                        (i = [6, c]), (o = 0);
                                    } finally {
                                        n = r = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                };
                            }
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDResMgr = void 0);
                var i = t("../tools/GDUtils"),
                    s = (function () {
                        function t() {}
                        return (
                            (t.getResAddress = function (t) {
                                return t.resPath + "@" + t.bundlePath;
                            }),
                            (t.loadBundle = function (t) {
                                return o(this, void 0, void 0, function () {
                                    var e,
                                        n = this;
                                    return r(this, function () {
                                        return (e = this._bundleMap.get(t))
                                            ? [2, e]
                                            : [
                                                  2,
                                                  new Promise(function (e) {
                                                      cc.assetManager.loadBundle(t, function (t, o) {
                                                          o && n._bundleMap.set(o.name, o), e(o);
                                                      });
                                                  }),
                                              ];
                                    });
                                });
                            }),
                            (t.preloadAsset = function (t) {
                                return o(this, void 0, void 0, function () {
                                    var e;
                                    return r(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, this.loadBundle(t.bundlePath)];
                                            case 1:
                                                return (e = n.sent()) ? (e.preload(t.resPath), [2]) : [2];
                                        }
                                    });
                                });
                            }),
                            (t.loadBundles = function () {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                return o(this, void 0, void 0, function () {
                                    var e,
                                        n = this;
                                    return r(this, function () {
                                        return t.length <= 0
                                            ? [2]
                                            : ((e = []),
                                              t.forEach(function (t) {
                                                  var o = n.loadBundle(t);
                                                  e.push(o);
                                              }),
                                              [2, Promise.all(e)]);
                                    });
                                });
                            }),
                            (t.preloadAll = function (t, e) {
                                return o(this, void 0, void 0, function () {
                                    var n, o;
                                    return r(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, this.loadBundle(t)];
                                            case 1:
                                                return (n = r.sent())
                                                    ? ((o = 0),
                                                      n.preloadDir(
                                                          "",
                                                          function (t, n) {
                                                              0 != n
                                                                  ? ((o = Math.max(o, t / n)), null == e || e(o))
                                                                  : null == e || e(1);
                                                          },
                                                          function () {
                                                              console.log("preloadAll complete:", t);
                                                          }
                                                      ),
                                                      [2])
                                                    : (null == e || e(1), [2]);
                                        }
                                    });
                                });
                            }),
                            (t.loadAll = function (t, e) {
                                return o(this, void 0, void 0, function () {
                                    var n, o;
                                    return r(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, this.loadBundle(t)];
                                            case 1:
                                                return (n = r.sent())
                                                    ? ((o = 0),
                                                      [
                                                          2,
                                                          new Promise(function (r) {
                                                              n.loadDir(
                                                                  "",
                                                                  function (t, n) {
                                                                      0 != n
                                                                          ? ((o = Math.max(o, t / n)), null == e || e(o))
                                                                          : null == e || e(1);
                                                                  },
                                                                  function (e, n) {
                                                                      console.log("loadAll complete:", t), r(n);
                                                                  }
                                                              );
                                                          }),
                                                      ])
                                                    : (null == e || e(1), [2]);
                                        }
                                    });
                                });
                            }),
                            (t.loadAlls = function (t, e) {
                                return o(this, void 0, void 0, function () {
                                    var n,
                                        o,
                                        s,
                                        c,
                                        a = this;
                                    return r(this, function () {
                                        return (n = t.length) <= 0
                                            ? (null == e || e(1), [2, null])
                                            : ((o = 1 / n),
                                              (s = []),
                                              (c = []),
                                              t.forEach(function (t, n) {
                                                  var r = a.loadAll(t, function (t) {
                                                      (s[n] = t * o), null == e || e(i.GDUtils.sumArray(s));
                                                  });
                                                  c.push(r);
                                              }),
                                              [2, Promise.all(c)]);
                                    });
                                });
                            }),
                            (t.loadDir = function (t, e) {
                                return o(this, void 0, void 0, function () {
                                    var n, o;
                                    return r(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return (
                                                    (n = null),
                                                    "string" != typeof t.bundle ? [3, 2] : [4, this.loadBundle(t.bundle)]
                                                );
                                            case 1:
                                                if (!(n = r.sent())) return null == e || e(1), [2, null];
                                                r.label = 2;
                                            case 2:
                                                return (
                                                    (o = 0),
                                                    [
                                                        2,
                                                        new Promise(function (r) {
                                                            n.loadDir(
                                                                t.dir,
                                                                function (t, n) {
                                                                    0 != n
                                                                        ? ((o = Math.max(o, t / n)), null == e || e(o))
                                                                        : null == e || e(1);
                                                                },
                                                                function (e, n) {
                                                                    console.log("loadBundleInDir complete:", t.bundle, t.dir),
                                                                        r(n);
                                                                }
                                                            );
                                                        }),
                                                    ]
                                                );
                                        }
                                    });
                                });
                            }),
                            (t.loadDirs = function (t, e) {
                                return o(this, void 0, void 0, function () {
                                    var n,
                                        o,
                                        s,
                                        c,
                                        a = this;
                                    return r(this, function () {
                                        return (n = t.length) <= 0
                                            ? (null == e || e(1), [2, null])
                                            : ((o = 1 / n),
                                              (s = []),
                                              (c = []),
                                              t.forEach(function (t, n) {
                                                  var r = a.loadDir(t, function (t) {
                                                      (s[n] = t * o), null == e || e(i.GDUtils.sumArray(s));
                                                  });
                                                  c.push(r);
                                              }),
                                              [2, Promise.all(c)]);
                                    });
                                });
                            }),
                            (t.load = function (t, e) {
                                return o(this, void 0, void 0, function () {
                                    var n, o;
                                    return r(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return [4, this.loadBundle(t.bundlePath)];
                                            case 1:
                                                return (n = r.sent())
                                                    ? ((o = 0),
                                                      [
                                                          2,
                                                          new Promise(function (r) {
                                                              n.load(
                                                                  t.resPath,
                                                                  function (t, n) {
                                                                      0 != n
                                                                          ? ((o = Math.max(o, t / n)), null == e || e(o))
                                                                          : null == e || e(1);
                                                                  },
                                                                  function (t, e) {
                                                                      r(e);
                                                                  }
                                                              );
                                                          }),
                                                      ])
                                                    : (null == e || e(1), [2, null]);
                                        }
                                    });
                                });
                            }),
                            (t.loads = function (t, e) {
                                return o(this, void 0, void 0, function () {
                                    var n,
                                        o,
                                        s,
                                        c,
                                        a = this;
                                    return r(this, function () {
                                        return (n = t.length) <= 0
                                            ? (null == e || e(1), [2, null])
                                            : ((o = 1 / n),
                                              (s = []),
                                              (c = []),
                                              t.forEach(function (t, n) {
                                                  var r = a.load(t, function (t) {
                                                      (s[n] = t * o), null == e || e(i.GDUtils.sumArray(s));
                                                  });
                                                  c.push(r);
                                              }),
                                              [2, Promise.all(c)]);
                                    });
                                });
                            }),
                            (t.loadAny = function (t, e) {
                                var n = 0;
                                return new Promise(function (o) {
                                    cc.assetManager.loadAny(
                                        t,
                                        function (t, o) {
                                            0 != o ? ((n = Math.max(n, t / o)), null == e || e(n)) : null == e || e(1);
                                        },
                                        function (t, e) {
                                            o(e);
                                        }
                                    );
                                });
                            }),
                            (t.loadRemote = function (t, e) {
                                return (
                                    void 0 === e && (e = !0),
                                    new Promise(function (n) {
                                        var o;
                                        if (t) {
                                            if (!e && !cc.sys.isBrowser) {
                                                var r = cc.assetManager.assets.get(t);
                                                r &&
                                                    (cc.assetManager.releaseAsset(r),
                                                    null === (o = cc.assetManager.cacheManager) ||
                                                        void 0 === o ||
                                                        o.removeCache(t)),
                                                    (t = t + "?r=" + Math.random()),
                                                    console.log("url===", t);
                                            }
                                            cc.assetManager.loadRemote(
                                                t,
                                                {
                                                    reload: !0,
                                                    cacheAsset: !1,
                                                    cacheEnabled: e,
                                                },
                                                function (t, e) {
                                                    n(e);
                                                }
                                            );
                                        } else n(null);
                                    })
                                );
                            }),
                            (t.get = function (t) {
                                var e = this._bundleMap.get(t.bundlePath);
                                return e ? e.get(t.resPath) : null;
                            }),
                            (t.release = function (t) {
                                var e = this._bundleMap.get(t.bundlePath);
                                e && e.release(t.resPath);
                            }),
                            (t.releaseDir = function (t) {
                                var e = this._bundleMap.get(t.bundle);
                                e &&
                                    e.getDirWithPath(t.dir).forEach(function (t) {
                                        e.release(t.path);
                                    });
                            }),
                            (t.releases = function () {
                                for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                e.forEach(function (e) {
                                    t.release(e);
                                });
                            }),
                            (t.releaseBundle = function (t) {
                                var e = this._bundleMap.get(t);
                                e && (e.releaseAll(), this._bundleMap.delete(t), cc.assetManager.removeBundle(e));
                            }),
                            (t.releaseBundles = function () {
                                for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                e.forEach(function (e) {
                                    t.releaseBundle(e);
                                });
                            }),
                            (t.clear = function () {
                                var t = this;
                                this._bundleMap.forEach(function (e, n) {
                                    t.releaseBundle(n);
                                }),
                                    this._bundleMap.clear();
                            }),
                            (t._bundleMap = new Map()),
                            t
                        );
                    })();
                (n.GDResMgr = s), cc._RF.pop();
            },
            {
                "../tools/GDUtils": "GDUtils",
            },
        ],
        GDSpineEx: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "aeba63kiJlA+arzLOhUuIXY", "GDSpineEx");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDSpineEx = void 0);
                var s = t("../collections/GDList"),
                    c = t("../collections/GDQueue"),
                    a = cc._decorator,
                    u = a.ccclass,
                    l = a.menu,
                    p = a.requireComponent,
                    h = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e._skeleton = null),
                                (e._playing = !1),
                                (e._current = null),
                                (e._loop = !1),
                                (e._queue = new c.GDQueue()),
                                (e._eventMap = new Map()),
                                (e._tick = 0),
                                (e._duration = 0),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            Object.defineProperty(e.prototype, "current", {
                                get: function () {
                                    return this._current;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "playing", {
                                get: function () {
                                    return this._playing;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "paused", {
                                get: function () {
                                    return this.skeleton.paused;
                                },
                                set: function (t) {
                                    this.skeleton.paused = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.onDisable = function () {
                                this.paused = !0;
                            }),
                            (e.prototype.onEnable = function () {
                                this.paused = !1;
                            }),
                            Object.defineProperty(e.prototype, "skeleton", {
                                get: function () {
                                    return this._skeleton
                                        ? this._skeleton
                                        : ((this._skeleton = this.getComponent(sp.Skeleton)), this._skeleton);
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.update = function (t) {
                                if (!this.skeleton.paused)
                                    if (this.current) {
                                        this._tick += t;
                                        var e = this._tick / this._duration;
                                        this.handleEvent(this.current, e),
                                            e >= 1 && (this._loop ? (this.resetEvent(), (this._tick = 0)) : this.next());
                                    } else this.next();
                            }),
                            (e.prototype.next = function () {
                                if (this._queue.isEmpty) this.reset();
                                else {
                                    var t = this._queue.dequeue();
                                    t && this.additional(t);
                                }
                            }),
                            (e.prototype.additional = function (t) {
                                var e,
                                    n,
                                    o,
                                    r = this.skeleton.findAnimation(t.name);
                                if (r) {
                                    this.node.active || (this.node.active = !0),
                                        this.reset(),
                                        (this._current = t.name),
                                        (this._playing = !0),
                                        (this._loop = null === (e = t.loop) || void 0 === e || e);
                                    var i = this.skeleton.findAnimation(r.name);
                                    this._duration = i.duration / this.skeleton.timeScale;
                                    var s = this.skeleton.setAnimation(0, r.name, this._loop);
                                    if (s) {
                                        var c = Math.max(
                                                0,
                                                Math.min(null !== (n = t.start) && void 0 !== n ? n : 0, s.animationEnd)
                                            ),
                                            a = Math.max(
                                                0,
                                                Math.min(
                                                    null !== (o = t.end) && void 0 !== o ? o : s.animationEnd,
                                                    s.animationEnd
                                                )
                                            );
                                        (s.animationStart = c), (s.animationEnd = a);
                                    }
                                }
                            }),
                            (e.prototype.resetEvent = function () {
                                this._eventMap.forEach(function (t) {
                                    t.elements.forEach(function (t) {
                                        t.done = !1;
                                    });
                                });
                            }),
                            (e.prototype.handleEvent = function (t, e) {
                                var n = this._eventMap.get(t);
                                n &&
                                    n.elements.forEach(function (t) {
                                        var n;
                                        !t.done &&
                                            t.time <= e &&
                                            ((t.done = !0), null === (n = t.callback) || void 0 === n || n.call(t));
                                    });
                            }),
                            (e.prototype.reset = function () {
                                (this._current = null), (this._playing = !1), (this._tick = 0), this.resetEvent();
                            }),
                            (e.prototype.getAnimationDuration = function (t) {
                                return this.skeleton.findAnimation(t).duration;
                            }),
                            (e.prototype.setAnimation = function (t) {
                                this.reset(), this.additional(t);
                            }),
                            (e.prototype.addAnimation = function (t) {
                                this._queue.enqueue(t);
                            }),
                            (e.prototype.addEvent = function (t, e, n) {
                                var o = this._eventMap.get(t);
                                o || ((o = new s.GDList()), this._eventMap.set(t, o)),
                                    o.add({
                                        name: t,
                                        callback: e,
                                        time: n,
                                        done: !1,
                                    });
                            }),
                            (e.prototype.removeEvent = function (t, e) {
                                var n = this._eventMap.get(t);
                                n &&
                                    (e
                                        ? n.remove(function (t) {
                                              return t.callback == e;
                                          })
                                        : n.clear());
                            }),
                            (e.prototype.removeEventAll = function () {
                                this._eventMap.clear();
                            }),
                            i([u, p(sp.Skeleton), l("GD/GDSpineEx")], e)
                        );
                    })(cc.Component);
                (n.GDSpineEx = h), cc._RF.pop();
            },
            {
                "../collections/GDList": "GDList",
                "../collections/GDQueue": "GDQueue",
            },
        ],
        GDStack: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "eebbcS/zdZIub0jKDSROXCN", "GDStack"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDStack = void 0);
                var o = (function () {
                    function t() {
                        this._elements = [];
                    }
                    return (
                        Object.defineProperty(t.prototype, "peek", {
                            get: function () {
                                return this._elements[this._elements.length - 1];
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "isEmpty", {
                            get: function () {
                                return 0 == this._elements.length;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "length", {
                            get: function () {
                                return this._elements.length;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "elements", {
                            get: function () {
                                return Array.from(this.elements);
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.push = function (t) {
                            this._elements.push(t);
                        }),
                        (t.prototype.pop = function () {
                            return this._elements.pop();
                        }),
                        (t.prototype.clear = function () {
                            this._elements = [];
                        }),
                        t
                    );
                })();
                (n.GDStack = o), cc._RF.pop();
            },
            {},
        ],
        GDTableMgr: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "79b830OJEpG5Jc5+hgFDQMZ", "GDTableMgr"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDTableMgr = void 0);
                var o = t("../manage/GDResMgr"),
                    r = t("./GDTable"),
                    i = (function () {
                        function t() {}
                        return (
                            (t.registerTable = function (t) {
                                for (var e = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                                n.forEach(function (n) {
                                    e._registerMap.set(t, n.address);
                                });
                            }),
                            (t.getTable = function (t, e) {
                                var n = this._tableMap.get(t);
                                if (!n) {
                                    var i = this._registerMap.get(t);
                                    if (!i) return void console.warn("table not register");
                                    var s = o.GDResMgr.get(i);
                                    (n = new r.GDTable(s, e)), this._tableMap.set(t, n);
                                }
                                return n;
                            }),
                            (t.removeTable = function (t) {
                                this._tableMap.delete(t);
                            }),
                            (t.getTableItem = function (t, e, n) {
                                var o = this.getTable(t, e);
                                return o ? o.getItem(n) : null;
                            }),
                            (t.getTableItemSize = function (t, e) {
                                var n = this.getTable(t, e);
                                return n ? n.getItemSize() : null;
                            }),
                            (t.getTableItems = function (t, e) {
                                var n = this.getTable(t, e);
                                return n ? n.getItems() : null;
                            }),
                            (t._tableMap = new Map()),
                            (t._registerMap = new Map()),
                            t
                        );
                    })();
                (n.GDTableMgr = i), cc._RF.pop();
            },
            {
                "../manage/GDResMgr": "GDResMgr",
                "./GDTable": "GDTable",
            },
        ],
        GDTable: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "ee1c5ZNTzNCHrJzaqBVNOqe", "GDTable"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    (n.GDTable = void 0);
                var o = t("../tools/GDUtils"),
                    r = (function () {
                        function t(t, e) {
                            (this.originalJsonAsset = null),
                                (this._keyItemMap = new Map()),
                                (this.originalJsonAsset = t),
                                this.parse(t, e);
                        }
                        return (
                            (t.prototype.parse = function (t, e) {
                                var n = t.json,
                                    r = null;
                                if (Array.isArray(n))
                                    for (var i = 0; i < n.length; i++)
                                        (r = o.GDUtils.cloneProperty(n[i], new e())), this._keyItemMap.set(r.key(), r);
                                else
                                    for (var s in n)
                                        n.hasOwnProperty(s) &&
                                            ((r = o.GDUtils.cloneProperty(n[s], new e())), this._keyItemMap.set(r.key(), r));
                            }),
                            (t.prototype.getItem = function (t) {
                                return this._keyItemMap.get(t);
                            }),
                            (t.prototype.getItems = function () {
                                return Array.from(this._keyItemMap.values());
                            }),
                            (t.prototype.getItemSize = function () {
                                return this._keyItemMap.size;
                            }),
                            t
                        );
                    })();
                (n.GDTable = r), cc._RF.pop();
            },
            {
                "../tools/GDUtils": "GDUtils",
            },
        ],
        GDTask: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "7a3eaSpbzNBuJEnAB6gWp8s", "GDTask");
                var o,
                    r,
                    i =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    s =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2),
                                }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function c(t) {
                                return function (e) {
                                    return a([t, e]);
                                };
                            }
                            function a(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            o &&
                                                (r =
                                                    2 & i[0]
                                                        ? o.return
                                                        : i[0]
                                                        ? o.throw || ((r = o.return) && r.call(o), 0)
                                                        : o.next) &&
                                                !(r = r.call(o, i[1])).done)
                                        )
                                            return r;
                                        switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                s.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    s.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    (s.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && s.label < r[2]) {
                                                    (s.label = r[2]), s.ops.push(i);
                                                    break;
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, s);
                                    } catch (c) {
                                        (i = [6, c]), (o = 0);
                                    } finally {
                                        n = r = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                };
                            }
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDPromiseTask = n.GDProxyTask = n.GDPayloadTask = n.GDTask = n.GDTaskStatus = void 0),
                    (function (t) {
                        (t[(t.STOP = 0)] = "STOP"),
                            (t[(t.WAIT = 1)] = "WAIT"),
                            (t[(t.RUNNING = 2)] = "RUNNING"),
                            (t[(t.SUCCEED = 3)] = "SUCCEED"),
                            (t[(t.FAIL = 4)] = "FAIL"),
                            (t[(t.ERROR = 5)] = "ERROR");
                    })((r = n.GDTaskStatus || (n.GDTaskStatus = {})));
                var c = (function () {
                    function t(e) {
                        (this.taskId = 0),
                            (this.uuid = 0),
                            (this._doneCallback = null),
                            (this.desc = ""),
                            (this._status = r.STOP),
                            (this.uuid = ++t.uuid),
                            (this.desc = e);
                    }
                    return (
                        Object.defineProperty(t.prototype, "status", {
                            get: function () {
                                return this._status;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.update = function () {}),
                        (t.prototype.exit = function () {}),
                        (t.prototype.start = function (t) {
                            if (
                                (void 0 === t && (t = null),
                                this.desc && console.log(this.desc),
                                (this._status = this.enter()),
                                this._status == r.RUNNING)
                            ) {
                                this._doneCallback = t;
                                var e = this.moveNext();
                                p.startTask({
                                    uuid: this.uuid,
                                    generator: e,
                                    complete: this.complete.bind(this),
                                });
                            }
                            return this._status;
                        }),
                        (t.prototype.stop = function () {
                            (this._status = r.STOP), p.stopTask(this.uuid);
                        }),
                        (t.prototype.moveNext = function () {
                            var t;
                            return s(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        (t = null), (e.label = 1);
                                    case 1:
                                        return this._status != r.RUNNING ? [3, 3] : (this.update(t), [4, null]);
                                    case 2:
                                        return (t = e.sent()), [3, 1];
                                    case 3:
                                        return [2, !0];
                                }
                            });
                        }),
                        (t.prototype.complete = function () {
                            var t;
                            this._status != r.STOP &&
                                (null === (t = this._doneCallback) || void 0 === t || t.call(this, this._status));
                        }),
                        Object.defineProperty(t.prototype, "progress", {
                            get: function () {
                                return 1;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "done", {
                            get: function () {
                                return this._status != r.RUNNING;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.taskId = 0),
                        (t.uuid = 0),
                        t
                    );
                })();
                n.GDTask = c;
                var a = (function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return (n._payloadCallback = null), (n._payloadCallback = e), n;
                    }
                    return (
                        i(e, t),
                        (e.prototype.enter = function () {
                            var t;
                            return (null === (t = this._payloadCallback) || void 0 === t ? void 0 : t.call(this))
                                ? r.SUCCEED
                                : r.FAIL;
                        }),
                        e
                    );
                })(c);
                n.GDPayloadTask = a;
                var u = (function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return (n._proxy = null), (n._proxy = e), n;
                    }
                    return (
                        i(e, t),
                        (e.prototype.enter = function () {
                            var t,
                                e = this;
                            return (
                                null === (t = this._proxy) ||
                                    void 0 === t ||
                                    t.call(this, function (t) {
                                        e._status = t ? r.SUCCEED : r.FAIL;
                                    }),
                                r.RUNNING
                            );
                        }),
                        e
                    );
                })(c);
                n.GDProxyTask = u;
                var l = (function (t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return (n._promise = null), (n._promise = e), n;
                    }
                    return (
                        i(e, t),
                        (e.prototype.enter = function () {
                            var t,
                                e = this,
                                n = null === (t = this._promise) || void 0 === t ? void 0 : t.call(this);
                            return n
                                ? (n.then(function (t) {
                                      e._status = null == t || null == t ? r.SUCCEED : t ? r.SUCCEED : r.FAIL;
                                  }),
                                  r.RUNNING)
                                : ((this._status = r.SUCCEED), r.SUCCEED);
                        }),
                        e
                    );
                })(c);
                n.GDPromiseTask = l;
                var p = (function (t) {
                    function e() {
                        return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                        i(e, t),
                        (e.startTask = function (t) {
                            null == this._node &&
                                ((this._node = new cc.Node("operation")),
                                this._node.addComponent(e),
                                cc.game.addPersistRootNode(this._node)),
                                t && this._taskMap.set(t.uuid, t);
                        }),
                        (e.stopTask = function (t) {
                            this._taskMap.delete(t);
                        }),
                        (e.prototype.update = function (t) {
                            e._taskMap.forEach(function (n) {
                                var o;
                                n.generator.next(t).done &&
                                    (null === (o = n.complete) || void 0 === o || o.call(n), e.stopTask(n.uuid));
                            });
                        }),
                        (e._taskMap = new Map()),
                        (e._node = null),
                        e
                    );
                })(cc.Component);
                cc._RF.pop();
            },
            {},
        ],
        GDTextureAssembler: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "f34cda13CVAY4FKNXuHrsAl", "GDTextureAssembler");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        });
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var i = t("../tools/GDCommonUtils"),
                    s = cc.gfx,
                    c = new s.VertexFormat([
                        {
                            name: s.ATTR_POSITION,
                            type: s.ATTR_TYPE_FLOAT32,
                            num: 2,
                        },
                        {
                            name: s.ATTR_UV0,
                            type: s.ATTR_TYPE_FLOAT32,
                            num: 2,
                        },
                        {
                            name: s.ATTR_COLOR,
                            type: s.ATTR_TYPE_UINT8,
                            num: 4,
                            normalize: !0,
                        },
                    ]),
                    a = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (
                                (e.verticesCount = 4),
                                (e.indicesCount = 6),
                                (e.floatsPerVert = 5),
                                (e.uvOffset = 2),
                                (e.colorOffset = 4),
                                (e.indicesArr = []),
                                (e._renderData = null),
                                (e._renderData = new cc.RenderData()),
                                e._renderData.init(e),
                                e.initData(),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            Object.defineProperty(e.prototype, "verticesFloats", {
                                get: function () {
                                    return this.verticesCount * this.floatsPerVert;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.getVfmt = function () {
                                return c;
                            }),
                            (e.prototype.getBuffer = function () {
                                return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
                            }),
                            (e.prototype.initData = function () {
                                this._renderData.createQuadData(0, this.verticesFloats, this.indicesCount);
                            }),
                            (e.prototype.resetData = function (t) {
                                var e = t.polygon;
                                !e ||
                                    e.length < 3 ||
                                    ((this.verticesCount = e.length),
                                    (this.indicesCount = this.verticesCount + 2 * (this.verticesCount - 3)),
                                    this._renderData.clear(),
                                    this.initData());
                            }),
                            (e.prototype.initQuadIndices = function (t, e) {
                                for (var n = 0; n < e.length; n++) t[n] = e[n];
                            }),
                            (e.prototype.updateColor = function (t, e) {
                                var n = this._renderData.uintVDatas[0];
                                if (n) {
                                    e = null != e ? e : t.node.color._val;
                                    for (
                                        var o = this.floatsPerVert, r = this.colorOffset, i = t.polygon, s = 0;
                                        s < i.length;
                                        s++
                                    )
                                        n[r + s * o] = e;
                                }
                            }),
                            (e.prototype.updateUVs = function (t) {
                                var e = this.uvOffset,
                                    n = this.floatsPerVert,
                                    o = this._renderData.vDatas[0],
                                    r = [];
                                t.texture && (r = i.GDCommonUtils.computeUv(t.polygon, t.texture.width, t.texture.height));
                                for (var s = t.polygon, c = 0; c < s.length; c++) {
                                    var a = n * c + e;
                                    (o[a] = r[c].x), (o[a + 1] = r[c].y);
                                }
                            }),
                            (e.prototype.updateWorldVertsWebGL = function (t) {
                                var e = this._renderData.vDatas[0],
                                    n = t.node._worldMatrix.m,
                                    o = n[0],
                                    r = n[1],
                                    i = n[4],
                                    s = n[5],
                                    c = n[12],
                                    a = n[13],
                                    u = 1 === o && 0 === r && 0 === i && 1 === s,
                                    l = this.floatsPerVert;
                                if (u)
                                    for (var p = t.polygon, h = 0; h < p.length; h++)
                                        (e[h * l] = p[h].x + c), (e[h * l + 1] = p[h].y + a);
                                else
                                    for (p = t.polygon, h = 0; h < p.length; h++)
                                        (e[h * l] = o * p[h].x + i * p[h].y + c), (e[h * l + 1] = r * p[h].x + s * p[h].y + a);
                            }),
                            (e.prototype.updateWorldVertsNative = function (t) {
                                for (
                                    var e = this._renderData.vDatas[0], n = this.floatsPerVert, o = t.polygon, r = 0;
                                    r < o.length;
                                    r++
                                )
                                    (e[r * n] = o[r].x), (e[r * n + 1] = o[r].y);
                            }),
                            (e.prototype.updateWorldVerts = function (t) {
                                this.updateWorldVertsWebGL(t);
                            }),
                            (e.prototype.updateVerts = function (t) {
                                var e = i.GDCommonUtils.splitPolygon(t.polygon);
                                this.initQuadIndices(this._renderData.iDatas[0], e), this.updateWorldVerts(t);
                            }),
                            (e.prototype.updateRenderData = function (t) {
                                t._vertsDirty &&
                                    (this.resetData(t),
                                    this.updateUVs(t),
                                    this.updateVerts(t),
                                    this.updateColor(t, null),
                                    (t._vertsDirty = !1));
                            }),
                            (e.prototype.fillBuffers = function (t, e) {
                                e.worldMatDirty && this.updateWorldVerts(t);
                                var n = this._renderData,
                                    o = n.vDatas[0],
                                    r = n.iDatas[0],
                                    i = this.getBuffer(),
                                    s = i.request(this.verticesCount, this.indicesCount),
                                    c = s.byteOffset >> 2,
                                    a = i._vData;
                                o.length + c > a.length ? a.set(o.subarray(0, a.length - c), c) : a.set(o, c);
                                for (var u = i._iData, l = s.indiceOffset, p = s.vertexOffset, h = 0, f = r.length; h < f; h++)
                                    u[l++] = p + r[h];
                            }),
                            (e.prototype.packToDynamicAtlas = function (t, e) {
                                if (!e._original && cc.dynamicAtlasManager && e._texture.packable) {
                                    var n = cc.dynamicAtlasManager.insertSpriteFrame(e);
                                    n && e._setDynamicAtlasFrame(n);
                                }
                                var o = t._materials[0];
                                o && o.getProperty("texture") !== e._texture && ((t._vertsDirty = !0), t._updateMaterial());
                            }),
                            e
                        );
                    })(cc.Assembler);
                (n.default = a), cc._RF.pop();
            },
            {
                "../tools/GDCommonUtils": "GDCommonUtils",
            },
        ],
        GDTexturePlus: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "3f0a5195TpDObGZeloDRd2b", "GDTexturePlus");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var s,
                    c = t("../tools/GDCommonUtils"),
                    a = t("./GDTextureAssembler");
                cc.renderer.renderEngine,
                    (function (t) {
                        (t[(t.Cut = 0)] = "Cut"), (t[(t.Stretch = 1)] = "Stretch");
                    })(s || (s = {}));
                var u = new cc.Vec2(),
                    l = new cc.Mat4(),
                    p = cc._decorator,
                    h = p.ccclass,
                    f = (p.inspector, p.executeInEditMode),
                    d = (p.mixins, p.property),
                    _ = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e._texture = null), (e._type = 0), (e.editing = !1), (e._polygon = []), (e._assembler = null), e
                            );
                        }
                        return (
                            r(e, t),
                            Object.defineProperty(e.prototype, "texture", {
                                get: function () {
                                    return this._texture;
                                },
                                set: function (t) {
                                    this._texture = t;
                                    var e = -t.width / 2,
                                        n = -t.height / 2,
                                        o = t.height / 2,
                                        r = t.width / 2;
                                    (this.polygon = [cc.v2(e, n), cc.v2(r, n), cc.v2(r, o), cc.v2(e, o)]), this._updateMaterial();
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "type", {
                                get: function () {
                                    return this._type;
                                },
                                set: function (t) {
                                    (this._type = t), this.setVertsDirty();
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "polygon", {
                                get: function () {
                                    return this._polygon;
                                },
                                set: function (t) {
                                    (this._polygon = t), this._updateVerts();
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.onLoad = function () {}),
                            (e.prototype.start = function () {
                                var t = this;
                                this.node.on(cc.Node.EventType.TOUCH_START, function () {}, this),
                                    this.node.on(
                                        cc.Node.EventType.TOUCH_MOVE,
                                        function (e) {
                                            (t.node.x += e.getDeltaX()), (t.node.y += e.getDeltaY());
                                        },
                                        this
                                    );
                            }),
                            (e.prototype._updateVerts = function () {
                                this.setVertsDirty();
                            }),
                            (e.prototype._updateMaterial = function () {
                                var t = this._texture,
                                    e = this.getMaterial(0);
                                e &&
                                    (void 0 !== e.getDefine("USE_TEXTURE") && e.define("USE_TEXTURE", !0),
                                    e.setProperty("texture", t)),
                                    this.setVertsDirty();
                            }),
                            (e.prototype._validateRender = function () {}),
                            (e.prototype._resetAssembler = function () {
                                (this._assembler = new a.default()).init(this), this._updateColor(), this.setVertsDirty();
                            }),
                            (e.prototype._hitTest = function (t) {
                                var e = this.node,
                                    n = u;
                                return (
                                    e._updateWorldMatrix(),
                                    !!cc.Mat4.invert(l, e._worldMatrix) &&
                                        (cc.Vec2.transformMat4(n, t, l), c.GDCommonUtils.isInPolygon(n, this.polygon))
                                );
                            }),
                            (e.Type = s),
                            i([d(cc.Texture2D)], e.prototype, "_texture", void 0),
                            i([d(cc.Texture2D)], e.prototype, "texture", null),
                            i(
                                [
                                    d({
                                        type: cc.Enum(s),
                                        serializable: !0,
                                    }),
                                ],
                                e.prototype,
                                "type",
                                null
                            ),
                            i([d(cc.Boolean)], e.prototype, "editing", void 0),
                            i(
                                [
                                    d({
                                        type: [cc.Vec2],
                                        serializable: !0,
                                    }),
                                ],
                                e.prototype,
                                "_polygon",
                                void 0
                            ),
                            i(
                                [
                                    d({
                                        type: [cc.Vec2],
                                        serializable: !0,
                                    }),
                                ],
                                e.prototype,
                                "polygon",
                                null
                            ),
                            i([h, f], e)
                        );
                    })(cc.RenderComponent);
                (n.default = _), cc._RF.pop();
            },
            {
                "../tools/GDCommonUtils": "GDCommonUtils",
                "./GDTextureAssembler": "GDTextureAssembler",
            },
        ],
        GDToggleGroup: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "56fbcc16ixAxLzmSguS5ejw", "GDToggleGroup");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDToggleGroup = void 0);
                var s = cc._decorator,
                    c = s.ccclass,
                    a = s.menu,
                    u = s.property,
                    l = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.allowSwitchOff = !1), (e._checkEvents = new Set()), (e._current = null), (e._toggles = []), e
                            );
                        }
                        return (
                            r(e, t),
                            Object.defineProperty(e.prototype, "toggleCount", {
                                get: function () {
                                    return this._toggles.length;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "toggles", {
                                get: function () {
                                    return this._toggles;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.start = function () {
                                this.schedule(this.first.bind(this));
                            }),
                            (e.prototype.first = function () {
                                this.current
                                    ? this.unschedule(this.first.bind(this))
                                    : !this.allowSwitchOff && this.toggles.length > 0 && (this.current = this._toggles[0]);
                            }),
                            (e.prototype.getToggleIndex = function (t) {
                                return this._toggles.findIndex(function (e) {
                                    return e == t;
                                });
                            }),
                            (e.prototype.addToggle = function (t) {
                                this._toggles.findIndex(function (e) {
                                    return e == t;
                                }) >= 0 ||
                                    (this._toggles.push(t), (t.toggleGroup = this), t == this.current && (this.current = t));
                            }),
                            (e.prototype.removeToggle = function (t) {
                                var e = this._toggles.findIndex(function (e) {
                                    return e == t;
                                });
                                e < 0 || this._toggles.splice(e, 1);
                            }),
                            (e.prototype.removeAll = function () {
                                this._toggles = [];
                            }),
                            (e.prototype.reset = function () {
                                (this._current = null), this._checkEvents.clear();
                            }),
                            (e.prototype.clear = function () {
                                (this._toggles = []), (this._current = null), this._checkEvents.clear();
                            }),
                            (e.prototype.setCurrentToggle = function (t) {
                                this.current = this._toggles[t];
                            }),
                            Object.defineProperty(e.prototype, "current", {
                                get: function () {
                                    return this._current;
                                },
                                set: function (t) {
                                    var e = this;
                                    if (this.allowSwitchOff || t) {
                                        this._current = t;
                                        var n = -1;
                                        this._toggles.forEach(function (t, o) {
                                            e._current == t
                                                ? e.allowSwitchOff
                                                    ? (t.selState = !t.selState)
                                                    : ((t.selState = !0), (n = o))
                                                : (t.selState = !1);
                                        }),
                                            this._checkEvents.forEach(function (t) {
                                                null == t || t(e._current, n);
                                            });
                                    }
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.addCheckEvents = function (t) {
                                this._checkEvents.add(t);
                            }),
                            (e.prototype.removeCheckEvents = function (t) {
                                this._checkEvents.delete(t);
                            }),
                            (e.prototype.getCurrentType = function (t) {
                                return null == this._current ? null : this._current.getComponent(t);
                            }),
                            i([u], e.prototype, "allowSwitchOff", void 0),
                            i([c, a("GD/UI/GDToggleGroup")], e)
                        );
                    })(cc.Component);
                (n.GDToggleGroup = l), cc._RF.pop();
            },
            {},
        ],
        GDToggle: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "93245IpxpVAHap6dmfY8pJC", "GDToggle");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDToggle = void 0);
                var s = t("./GDToggleGroup"),
                    c = cc._decorator,
                    a = c.ccclass,
                    u = c.property,
                    l = c.menu,
                    p = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.unSel = null),
                                (e.sel = null),
                                (e.toggleGroup = null),
                                (e._selState = !1),
                                (e._intractable = !0),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                if (null == this.toggleGroup) {
                                    var t = this.node.parent;
                                    t && (this.toggleGroup = t.getComponent(s.GDToggleGroup));
                                }
                                this.toggleGroup && this.toggleGroup.addToggle(this),
                                    this.sel && (this.sel.active = this._selState),
                                    this.unSel && (this.unSel.active = !this._selState);
                            }),
                            (e.prototype.onEnable = function () {
                                this.node.on(cc.Node.EventType.TOUCH_END, this.onSelect, this);
                            }),
                            (e.prototype.onDisable = function () {
                                this.node.off(cc.Node.EventType.TOUCH_END, this.onSelect, this);
                            }),
                            (e.prototype.onSelState = function () {}),
                            (e.prototype.canToggle = function () {
                                return !0;
                            }),
                            Object.defineProperty(e.prototype, "selState", {
                                get: function () {
                                    return this._selState;
                                },
                                set: function (t) {
                                    this._selState != t &&
                                        (this.sel && (this.sel.active = t),
                                        this.unSel && (this.unSel.active = !t),
                                        (this._selState = t),
                                        this.onSelState(t));
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            Object.defineProperty(e.prototype, "intractable", {
                                get: function () {
                                    return this._intractable;
                                },
                                set: function (t) {
                                    this._intractable = t;
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.onSelect = function () {
                                this.intractable &&
                                    this.canToggle() &&
                                    (null != this.toggleGroup
                                        ? (this.toggleGroup.current = this)
                                        : (this.selState = !this.selState));
                            }),
                            i([u(cc.Node)], e.prototype, "unSel", void 0),
                            i([u(cc.Node)], e.prototype, "sel", void 0),
                            i([u(s.GDToggleGroup)], e.prototype, "toggleGroup", void 0),
                            i([a, l("GD/UI/GDToggle")], e)
                        );
                    })(cc.Component);
                (n.GDToggle = p), cc._RF.pop();
            },
            {
                "./GDToggleGroup": "GDToggleGroup",
            },
        ],
        GDTypes: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "450f1qHi95L0Z/H+i3Jt9Pt", "GDTypes"),
                    Object.defineProperty(n, "__esModule", {
                        value: !0,
                    }),
                    cc._RF.pop();
            },
            {},
        ],
        GDTypewriter: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "19c773dGgxIkrar34Wd5N2w", "GDTypewriter");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDTypewriter = void 0);
                var s = cc._decorator,
                    c = s.ccclass,
                    a = s.property,
                    u = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e.label = null),
                                (e.interval = 0.1),
                                (e.tickWords = 1),
                                (e.msg = ""),
                                (e._currentPos = 0),
                                (e._time = 0),
                                e
                            );
                        }
                        return (
                            r(e, t),
                            (e.prototype.onLoad = function () {
                                (this.label = this.label || this.getComponent(cc.Label)), this.clear();
                            }),
                            (e.prototype.start = function () {
                                this.msg.length > 0 && this.play(this.msg);
                            }),
                            (e.prototype.play = function (t, e) {
                                void 0 === e && (e = !1), this.label && (e ? (this.msg += t) : (this.clear(), (this.msg = t)));
                            }),
                            (e.prototype.clear = function () {
                                (this.label.string = ""), (this._currentPos = 0), (this._time = 0);
                            }),
                            (e.prototype.update = function (t) {
                                this.msg &&
                                    0 != this.msg.length &&
                                    ((this._time += t),
                                    this._time >= this.interval && ((this._time -= this.interval), this.addContent()));
                            }),
                            (e.prototype.addContent = function () {
                                for (var t = 0; t < this.tickWords; t++) {
                                    var e = this.msg.charAt(this._currentPos);
                                    e && (this.label.string += e), this._currentPos++;
                                }
                            }),
                            i([a(cc.Label)], e.prototype, "label", void 0),
                            i([a], e.prototype, "interval", void 0),
                            i([a], e.prototype, "tickWords", void 0),
                            i([a], e.prototype, "msg", void 0),
                            i([c], e)
                        );
                    })(cc.Component);
                (n.GDTypewriter = u), cc._RF.pop();
            },
            {},
        ],
        GDUIListener: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "b5424M0rdBDjZ33GHQe7MBU", "GDUIListener");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDUIListener = void 0);
                var s = cc._decorator.ccclass,
                    c = (function (t) {
                        function e() {
                            var e = (null !== t && t.apply(this, arguments)) || this;
                            return (
                                (e._onClick = new Set()),
                                (e._onMove = new Set()),
                                (e._onCancel = new Set()),
                                (e._onRelease = new Set()),
                                (e._onPress = new Set()),
                                (e._intractable = !0),
                                e
                            );
                        }
                        var n;
                        return (
                            r(e, t),
                            (n = e),
                            (e.prototype.onLoad = function () {
                                this.on();
                            }),
                            (e.prototype.onDestroy = function () {
                                this.removeAllCancelListener(),
                                    this.removeAllClickListener(),
                                    this.removeAllMoveListener(),
                                    this.removeAllReleaseListener(),
                                    this.removeAllPressListener();
                            }),
                            Object.defineProperty(e.prototype, "intractable", {
                                get: function () {
                                    return this._intractable;
                                },
                                set: function (t) {
                                    this._intractable != t &&
                                        ((this._intractable = t), this._intractable ? this.on() : this.off());
                                },
                                enumerable: !1,
                                configurable: !0,
                            }),
                            (e.prototype.setIntractable = function (t) {
                                this.intractable = t;
                            }),
                            (e.prototype.getIntractable = function () {
                                return this.intractable;
                            }),
                            (e.prototype.on = function () {
                                this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this),
                                    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this),
                                    this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this),
                                    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
                            }),
                            (e.prototype.off = function () {
                                this.node.off(cc.Node.EventType.TOUCH_START, this.touchStart, this),
                                    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this),
                                    this.node.off(cc.Node.EventType.TOUCH_END, this.touchEnd, this),
                                    this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.touchCancel, this);
                            }),
                            (e.prototype.touchStart = function (t) {
                                this._onPress.forEach(function (e) {
                                    var n = e.callback;
                                    null == n || n.call(e.context, t.getLocation());
                                });
                            }),
                            (e.prototype.touchMove = function (t) {
                                var e = t.getLocation();
                                e.sub(t.getStartLocation()).magSqr() < 1 ||
                                    this._onMove.forEach(function (n) {
                                        var o = n.callback,
                                            r = t.getDelta();
                                        null == o || o.call(n.context, e, r);
                                    });
                            }),
                            (e.prototype.touchEnd = function () {
                                this._onClick.forEach(function (t) {
                                    var e = t.callback;
                                    null == e || e.call(t.context);
                                }),
                                    this._onRelease.forEach(function (t) {
                                        var e = t.callback;
                                        null == e || e.call(t.context);
                                    });
                            }),
                            (e.prototype.touchCancel = function () {
                                this._onCancel.forEach(function (t) {
                                    var e = t.callback;
                                    null == e || e.call(t.context);
                                }),
                                    this._onRelease.forEach(function (t) {
                                        var e = t.callback;
                                        null == e || e.call(t.context);
                                    });
                            }),
                            (e.prototype.addClickListener = function (t, e) {
                                this._onClick.add({
                                    callback: t,
                                    context: e,
                                });
                            }),
                            (e.prototype.removeClickListener = function (t, e) {
                                this.removeListener(this._onClick, t, e);
                            }),
                            (e.prototype.removeAllClickListener = function () {
                                this._onClick.clear();
                            }),
                            (e.prototype.addMoveListener = function (t, e) {
                                this._onMove.add({
                                    callback: t,
                                    context: e,
                                });
                            }),
                            (e.prototype.removeMoveListener = function (t, e) {
                                this.removeListener(this._onMove, t, e);
                            }),
                            (e.prototype.removeAllMoveListener = function () {
                                this._onMove.clear();
                            }),
                            (e.prototype.addCancelListener = function (t, e) {
                                this._onCancel.add({
                                    callback: t,
                                    context: e,
                                });
                            }),
                            (e.prototype.removeCancelListener = function (t, e) {
                                this.removeListener(this._onCancel, t, e);
                            }),
                            (e.prototype.removeAllCancelListener = function () {
                                this._onCancel.clear();
                            }),
                            (e.prototype.addReleaseListener = function (t, e) {
                                this._onRelease.add({
                                    callback: t,
                                    context: e,
                                });
                            }),
                            (e.prototype.removeReleaseListener = function (t, e) {
                                this.removeListener(this._onRelease, t, e);
                            }),
                            (e.prototype.removeAllReleaseListener = function () {
                                this._onRelease.clear();
                            }),
                            (e.prototype.addPressListener = function (t, e) {
                                this._onPress.add({
                                    callback: t,
                                    context: e,
                                });
                            }),
                            (e.prototype.removePressListener = function (t, e) {
                                this.removeListener(this._onPress, t, e);
                            }),
                            (e.prototype.removeAllPressListener = function () {
                                this._onPress.clear();
                            }),
                            (e.prototype.removeListener = function (t, e, n) {
                                t.forEach(function (o) {
                                    n == o.context && o.callback == e ? t.delete(o) : o.callback == e && t.delete(o);
                                });
                            }),
                            (e.get = function (t, e) {
                                void 0 === e && (e = !0);
                                var o = t.getComponent(n) || t.addComponent(n);
                                return e && o.addComponent(cc.BlockInputEvents), o;
                            }),
                            (n = i([s], e))
                        );
                    })(cc.Component);
                (n.GDUIListener = c), cc._RF.pop();
            },
            {},
        ],
        GDUtils: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "dc003UUMSVHi7jQRjFXT/vm", "GDUtils");
                var o =
                    (this && this.__assign) ||
                    function () {
                        return (o =
                            Object.assign ||
                            function (t) {
                                for (var e, n = 1, o = arguments.length; n < o; n++)
                                    for (var r in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                return t;
                            }).apply(this, arguments);
                    };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDUtils = void 0);
                var r = (function () {
                    function t() {}
                    return (
                        (t.sumArray = function (t) {
                            var e = 0;
                            return (
                                t.forEach(function (t) {
                                    t && (e += t);
                                }),
                                e
                            );
                        }),
                        (t.intRangeRandom = function (t, e) {
                            return e ? Math.floor(Math.random() * (e - t + 1) + t) : t;
                        }),
                        (t.rangeRandom = function (t, e) {
                            return e ? Math.random() * (e - t + 1) + t : t;
                        }),
                        (t.randomFloat = function (t) {
                            return Math.random() * t;
                        }),
                        (t.arrayRandom = function (t) {
                            if (Array.isArray(t)) return t[this.intRangeRandom(0, t.length - 1)];
                        }),
                        (t.arrayRandomIndex = function (t) {
                            if (Array.isArray(t)) return this.intRangeRandom(0, t.length - 1);
                        }),
                        (t.arrRandomNoRepeat = function (t, e, n) {
                            for (var o = [], r = 0; r < n; r++) {
                                var i = this.intRangeRandom(t, e);
                                -1 == o.indexOf(i) ? o.push(i) : r--;
                            }
                            return o;
                        }),
                        (t.shuffle = function (t) {
                            for (var e = 0; e < t.length; e++) {
                                var n = t[e],
                                    o = Math.floor(Math.random() * e);
                                (t[e] = t[o]), (t[o] = n);
                            }
                            return t;
                        }),
                        (t.chooseSet = function (t, e) {
                            for (var n = new Array(e), o = e, r = t.length; r > 0; r--) {
                                var i = o / r;
                                if (Math.random() <= i && ((n[--o] = t[r - 1]), 0 == o)) break;
                            }
                            return n;
                        }),
                        (t.deepCopy = function (t) {
                            var e = this;
                            if (null == t) return t;
                            if (t instanceof Date) return new Date(t.getTime());
                            if (t instanceof Array) {
                                var n = [];
                                return (
                                    t.forEach(function (t) {
                                        n.push(t);
                                    }),
                                    n.map(function (t) {
                                        return e.deepCopy(t);
                                    })
                                );
                            }
                            if (t instanceof Object) {
                                var r = o({}, t);
                                for (var i in t) t.hasOwnProperty(i) && (r[i] = this.deepCopy(t[i]));
                                return r;
                            }
                            return t;
                        }),
                        (t.cloneProperty = function (t, e) {
                            for (var n in ((e = null != e ? e : {}), t))
                                if (t.hasOwnProperty(n)) {
                                    var o = t[n];
                                    e[n] = this.deepCopy(o);
                                }
                            return e;
                        }),
                        (t.overlayProperty = function (t, e) {
                            if (!e) return t;
                            for (var n in t) t.hasOwnProperty(n) && e.hasOwnProperty(n) && (t[n] = e[n]);
                            return t;
                        }),
                        (t.equalDay = function (t, e) {
                            var n = new Date(t),
                                o = new Date(e);
                            return n.getFullYear() == o.getFullYear() && n.getMonth() == o.getMonth() && n.getDay() == o.getDay();
                        }),
                        (t.isToDay = function (t) {
                            return new Date().setHours(0, 0, 0, 0) == new Date(t).setHours(0, 0, 0, 0);
                        }),
                        (t.tranWhatDay = function () {
                            return [7, 1, 2, 3, 4, 5, 6][new Date().getDay()];
                        }),
                        (t.countDownFun = function (t, e) {
                            var n = setInterval(function () {
                                e(--t);
                            }, 1e3);
                            return Number(n);
                        }),
                        (t.secondFormatStr = function (t, e) {
                            void 0 === e && (e = 1);
                            var n = Math.floor(t / 3600),
                                o = n.toString().padStart(2, "0"),
                                r = Math.floor((t - 3600 * n) / 60)
                                    .toString()
                                    .padStart(2, "0"),
                                i = (t % 60).toString().padStart(2, "0"),
                                s = " " + o + ":" + r + ":" + i;
                            return 2 == e && (s = r + ":" + i), s;
                        }),
                        (t.twoPointDistance = function (t, e) {
                            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
                        }),
                        (t.calcAngle = function (t, e) {
                            return (e.sub(t).signAngle(cc.v2(0, 1)) / Math.PI) * 180;
                        }),
                        (t.formateDate = function (t) {
                            void 0 === t && (t = "");
                            var e = t ? new Date(t) : new Date(),
                                n = e.getFullYear(),
                                o = e.getMonth() + 1,
                                r = e.getDate();
                            return n + "-" + (o < 10 ? "0" + o : o) + "-" + (r < 10 ? "0" + r : r);
                        }),
                        (t.diffDay = function (t, e) {
                            return (Date.parse(t) - Date.parse(e)) / 1e3 / 60 / 60 / 24;
                        }),
                        t
                    );
                })();
                (n.GDUtils = r), cc._RF.pop();
            },
            {},
        ],
        GDWindowMgr: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "d7efbV2ipBLy6JBqLZRbQca", "GDWindowMgr");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        },
                    s =
                        (this && this.__awaiter) ||
                        function (t, e, n, o) {
                            return new (n || (n = Promise))(function (r, i) {
                                function s(t) {
                                    try {
                                        a(o.next(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function c(t) {
                                    try {
                                        a(o.throw(t));
                                    } catch (e) {
                                        i(e);
                                    }
                                }
                                function a(t) {
                                    var e;
                                    t.done
                                        ? r(t.value)
                                        : ((e = t.value),
                                          e instanceof n
                                              ? e
                                              : new n(function (t) {
                                                    t(e);
                                                })).then(s, c);
                                }
                                a((o = o.apply(t, e || [])).next());
                            });
                        },
                    c =
                        (this && this.__generator) ||
                        function (t, e) {
                            var n,
                                o,
                                r,
                                i,
                                s = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & r[0]) throw r[1];
                                        return r[1];
                                    },
                                    trys: [],
                                    ops: [],
                                };
                            return (
                                (i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2),
                                }),
                                "function" == typeof Symbol &&
                                    (i[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                i
                            );
                            function c(t) {
                                return function (e) {
                                    return a([t, e]);
                                };
                            }
                            function a(i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; s; )
                                    try {
                                        if (
                                            ((n = 1),
                                            o &&
                                                (r =
                                                    2 & i[0]
                                                        ? o.return
                                                        : i[0]
                                                        ? o.throw || ((r = o.return) && r.call(o), 0)
                                                        : o.next) &&
                                                !(r = r.call(o, i[1])).done)
                                        )
                                            return r;
                                        switch (((o = 0), r && (i = [2 & i[0], r.value]), i[0])) {
                                            case 0:
                                            case 1:
                                                r = i;
                                                break;
                                            case 4:
                                                return (
                                                    s.label++,
                                                    {
                                                        value: i[1],
                                                        done: !1,
                                                    }
                                                );
                                            case 5:
                                                s.label++, (o = i[1]), (i = [0]);
                                                continue;
                                            case 7:
                                                (i = s.ops.pop()), s.trys.pop();
                                                continue;
                                            default:
                                                if (
                                                    !(r = (r = s.trys).length > 0 && r[r.length - 1]) &&
                                                    (6 === i[0] || 2 === i[0])
                                                ) {
                                                    s = 0;
                                                    continue;
                                                }
                                                if (3 === i[0] && (!r || (i[1] > r[0] && i[1] < r[3]))) {
                                                    s.label = i[1];
                                                    break;
                                                }
                                                if (6 === i[0] && s.label < r[1]) {
                                                    (s.label = r[1]), (r = i);
                                                    break;
                                                }
                                                if (r && s.label < r[2]) {
                                                    (s.label = r[2]), s.ops.push(i);
                                                    break;
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue;
                                        }
                                        i = e.call(t, s);
                                    } catch (c) {
                                        (i = [6, c]), (o = 0);
                                    } finally {
                                        n = r = 0;
                                    }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0,
                                };
                            }
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.GDWindowMgr = n.GDWindow = n.GDWindowHierarchy = void 0);
                var a,
                    u = t("./GDResMgr"),
                    l = cc._decorator,
                    p = l.ccclass,
                    h = l.property;
                (function (t) {
                    (t[(t.BOTTOM = 0)] = "BOTTOM"), (t[(t.MID = 1)] = "MID"), (t[(t.TOP = 2)] = "TOP"), (t[(t.MAX = 3)] = "MAX");
                })((a = n.GDWindowHierarchy || (n.GDWindowHierarchy = {})));
                var f = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (e.hierarchy = a.MID), (e._isOpen = !1), (e.listener = null), e;
                    }
                    return (
                        r(e, t),
                        Object.defineProperty(e.prototype, "isOpen", {
                            get: function () {
                                return this._isOpen;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.open = function (t) {
                            var e, n;
                            this._isOpen ||
                                ((this._isOpen = !0),
                                (this.listener = t),
                                null === (n = null === (e = this.listener) || void 0 === e ? void 0 : e.open) ||
                                    void 0 === n ||
                                    n.call(e, this),
                                this.onOpen());
                        }),
                        (e.prototype.close = function () {
                            var t, e;
                            this._isOpen &&
                                ((this._isOpen = !1),
                                this.onClose(),
                                null === (e = null === (t = this.listener) || void 0 === t ? void 0 : t.close) ||
                                    void 0 === e ||
                                    e.call(t, this));
                        }),
                        (e.prototype.quit = function () {
                            this._isOpen && ((this._isOpen = !1), this.onClose());
                        }),
                        (e.prototype.onOpen = function () {
                            this.node.active = !0;
                        }),
                        (e.prototype.onClose = function () {
                            this.node.active = !1;
                        }),
                        i(
                            [
                                h({
                                    type: cc.Enum(a),
                                }),
                            ],
                            e.prototype,
                            "hierarchy",
                            void 0
                        ),
                        i([p], e)
                    );
                })(cc.Component);
                n.GDWindow = f;
                var d = (function () {
                    function t() {
                        (this._windowMap = new Map()),
                            (this._root = null),
                            (this._hierarchs = []),
                            cc.director.on(cc.Director.EVENT_AFTER_SCENE_LAUNCH, this.reset.bind(this));
                    }
                    return (
                        Object.defineProperty(t, "instance", {
                            get: function () {
                                return this._instance || ((this._instance = new t()), this._instance.reset()), this._instance;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "canvas", {
                            get: function () {
                                return cc.Canvas.instance;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (t.prototype.reset = function () {
                            this._windowMap.clear(), (this._hierarchs = []), this.build();
                        }),
                        (t.prototype.build = function () {
                            this.buildRoot(), this.buildHierarchy();
                        }),
                        (t.prototype.buildRoot = function () {
                            (this._root = this.createNode("windowRoot")), this.attachCanvas(this._root);
                        }),
                        (t.prototype.createNode = function (t) {
                            var e = new cc.Node(t);
                            return e.setContentSize(this.canvas.designResolution), e;
                        }),
                        (t.prototype.attachCanvas = function (t) {
                            this.addWidget(t), this.canvas.node.addChild(t);
                        }),
                        (t.prototype.buildHierarchy = function () {
                            for (var t = 0; t < a.MAX; t++) {
                                var e = this.createNode(a[t]);
                                this.addWidget(e), (this._hierarchs[t] = e), this._root.addChild(e);
                            }
                        }),
                        (t.prototype.addWidget = function (t) {
                            var e = t.addComponent(cc.Widget),
                                n = this.canvas.getComponent(cc.Widget);
                            (e.isAlignTop = n.isAlignTop),
                                (e.top = n.top),
                                (e.isAlignBottom = n.isAlignBottom),
                                (e.bottom = n.bottom),
                                (e.isAlignLeft = n.isAlignLeft),
                                (e.left = n.left),
                                (e.isAlignRight = n.isAlignRight),
                                (e.right = n.right);
                        }),
                        (t.prototype.getWindowCache = function (t) {
                            var e = u.GDResMgr.getResAddress(t);
                            return this._windowMap.get(e);
                        }),
                        (t.prototype.setWindowCache = function (t, e) {
                            var n = u.GDResMgr.getResAddress(t);
                            this._windowMap.set(n, e);
                        }),
                        (t.prototype.deleteWindowCache = function (t) {
                            var e = u.GDResMgr.getResAddress(t);
                            this._windowMap.delete(e);
                        }),
                        (t.prototype.detachHierarch = function (t) {
                            this._hierarchs[t.hierarchy].removeChild(t.node), t.node.destroy();
                        }),
                        (t.prototype.attachHierarch = function (t) {
                            var e = this._hierarchs[t.hierarchy];
                            e.children.findIndex(function (e) {
                                return e == t.node;
                            }) < 0 && e.addChild(t.node);
                        }),
                        (t.prototype.instanceWindow = function (t) {
                            var e = cc.instantiate(t);
                            if (e) {
                                var n = e.getComponent(f);
                                if (n) return n;
                            }
                            return null;
                        }),
                        (t.prototype.loadWindow = function (t) {
                            var e = u.GDResMgr.get(t);
                            if (!e) return null;
                            var n = this.instanceWindow(e);
                            return this.setWindowCache(t, n), this.attachHierarch(n), n;
                        }),
                        (t.prototype.loadWindowAsync = function (t) {
                            return s(this, void 0, void 0, function () {
                                var e, n;
                                return c(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, u.GDResMgr.load(t)];
                                        case 1:
                                            return (e = o.sent())
                                                ? ((n = this.instanceWindow(e)), this.setWindowCache(t, n), [2, n])
                                                : [2, null];
                                    }
                                });
                            });
                        }),
                        (t.prototype.openToTop = function (t, e) {
                            var n = this._hierarchs[t.hierarchy].children.length;
                            t.node.setSiblingIndex(n), t.open(e);
                        }),
                        (t.prototype.openWindow = function (t, e) {
                            var n = this.getWindowCache(t) || this.loadWindow(t);
                            return n && this.openToTop(n, e), n;
                        }),
                        (t.prototype.openWindowAsync = function (t, e) {
                            return s(this, void 0, void 0, function () {
                                var n, o;
                                return c(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return (o = this.getWindowCache(t)) ? [3, 2] : [4, this.loadWindowAsync(t)];
                                        case 1:
                                            (o = r.sent()), (r.label = 2);
                                        case 2:
                                            return (n = o) && this.openToTop(n, e), [2, n];
                                    }
                                });
                            });
                        }),
                        (t.prototype.closeWindowAll = function () {
                            this._windowMap.forEach(function (t) {
                                t.close();
                            });
                        }),
                        (t.prototype.closeWindow = function (t) {
                            var e = this.getWindowCache(t);
                            null == e || e.close();
                        }),
                        (t.prototype.destroyWindowAll = function () {
                            this._hierarchs.forEach(function (t) {
                                t.removeAllChildren();
                            }),
                                this._windowMap.clear();
                        }),
                        (t.prototype.destroyWindow = function (t) {
                            var e = this.getWindowCache(t);
                            e && (this.detachHierarch(e), this.deleteWindowCache(t));
                        }),
                        (t._instance = null),
                        t
                    );
                })();
                (n.GDWindowMgr = d), cc._RF.pop();
            },
            {
                "./GDResMgr": "GDResMgr",
            },
        ],
        LevelRender: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "ff0895Y+kRPzqSkbBIIUNFT", "LevelRender");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                });
                var s = cc._decorator,
                    c = s.ccclass,
                    a =
                        (s.property,
                        (function (t) {
                            function e() {
                                return (null !== t && t.apply(this, arguments)) || this;
                            }
                            return (
                                r(e, t),
                                (e.prototype.onLoad = function () {
                                    this.node.__enableLevelRender = !0;
                                }),
                                i([c], e)
                            );
                        })(cc.Component));
                (n.default = a), cc._RF.pop();
            },
            {},
        ],
        RecycleScroll: [
            function (t, e, n) {
                "use strict";
                cc._RF.push(e, "36ebcFphKVMmbEL00KSrRiU", "RecycleScroll");
                var o,
                    r =
                        (this && this.__extends) ||
                        ((o = function (t, e) {
                            return (o =
                                Object.setPrototypeOf ||
                                ({
                                    __proto__: [],
                                } instanceof Array &&
                                    function (t, e) {
                                        t.__proto__ = e;
                                    }) ||
                                function (t, e) {
                                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                })(t, e);
                        }),
                        function (t, e) {
                            function n() {
                                this.constructor = t;
                            }
                            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
                        }),
                    i =
                        (this && this.__decorate) ||
                        function (t, e, n, o) {
                            var r,
                                i = arguments.length,
                                s = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                                s = Reflect.decorate(t, e, n, o);
                            else
                                for (var c = t.length - 1; c >= 0; c--)
                                    (r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                            return i > 3 && s && Object.defineProperty(e, n, s), s;
                        };
                Object.defineProperty(n, "__esModule", {
                    value: !0,
                }),
                    (n.Direction = void 0);
                var s,
                    c = cc._decorator,
                    a = c.ccclass,
                    u = c.property;
                (function (t) {
                    (t[(t.TOP_TO_BOTTOM = 1)] = "TOP_TO_BOTTOM"), (t[(t.BOTTOM_TO_TOP = 2)] = "BOTTOM_TO_TOP");
                })((s = n.Direction || (n.Direction = {})));
                var l = (function (t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this;
                        return (
                            (e.itemPrefab = null),
                            (e.direction = s.TOP_TO_BOTTOM),
                            (e.spacing = null),
                            (e._numItems = 0),
                            (e._viewCol = 0),
                            (e._viewRow = 0),
                            (e._viewW = 0),
                            (e._viewH = 0),
                            (e._itemW = 0),
                            (e._itemH = 0),
                            (e._lastPosY = 0),
                            (e._isInit = !1),
                            (e._itemsUUIDToIndex = {}),
                            (e.itemList = []),
                            (e.content = null),
                            e
                        );
                    }
                    return (
                        r(e, t),
                        Object.defineProperty(e.prototype, "numItems", {
                            get: function () {
                                return this._numItems;
                            },
                            set: function (t) {
                                var e = this;
                                (this._numItems = t),
                                    this._hideAllItems(),
                                    this.scheduleOnce(function () {
                                        e._initialize(), e._updateContentHeight();
                                    }),
                                    this.updateAllItems();
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onItemRender = function () {}),
                        (e.prototype.onItemClicked = function () {}),
                        (e.prototype.updateScrollView = function (t, e) {
                            void 0 === e && (e = null);
                            var n = 30 * (1 - t);
                            e && (n = e),
                                (t = this.direction == s.TOP_TO_BOTTOM ? t : 1 - t),
                                this.node.getComponent(cc.ScrollView).scrollToPercentVertical(t, n);
                        }),
                        (e.prototype.updateAllItems = function () {
                            var t = this;
                            this.itemList.forEach(function (e) {
                                t._updateItem(t._itemsUUIDToIndex[e.uuid], e);
                            });
                        }),
                        (e.prototype._hideAllItems = function () {
                            this.itemList.forEach(function (t) {
                                t.active = !1;
                            });
                        }),
                        (e.prototype._getContent = function () {
                            return this.node.getComponent(cc.ScrollView).content;
                        }),
                        (e.prototype._initialize = function () {
                            var t = this;
                            if (!this._isInit) {
                                var e = this.node.getComponent(cc.ScrollView);
                                (e.enabled = !1), (this._isInit = !0);
                                var n = this._getContent();
                                (this.content = n), (this._viewW = n.parent.width), (this._viewH = n.parent.height);
                                var o = this.itemPrefab.data;
                                (this._itemW = o.width + this.spacing.x),
                                    (this._itemH = o.height + this.spacing.y),
                                    (this._lastPosY = n.y),
                                    (this._viewRow = Math.ceil(this._viewH / this._itemH) + 1),
                                    (this._viewCol = Math.floor(this._viewW / this._itemW));
                                var r = this._viewW - this._viewCol * this._itemW,
                                    i = this._itemH >> 1;
                                this.direction == s.TOP_TO_BOTTOM && (i = -i);
                                var c = cc.v2((-this._viewW >> 1) + (this._itemW >> 1) + (r >> 1), i),
                                    a = this._viewRow * this._viewCol;
                                cc.log("\u5b9e\u4f8b\u5316\u6570\u91cf:" + a);
                                var u = 0;
                                p(a, function (o) {
                                    if (cc.isValid(n)) {
                                        var r = cc.instantiate(t.itemPrefab);
                                        r.parent = n;
                                        var i = (o % t._viewCol) * t._itemW,
                                            l = Math.floor(o / t._viewCol) * t._itemH + (t.spacing.y >> 1);
                                        t.direction == s.TOP_TO_BOTTOM ? (l = -l) : r.setSiblingIndex(0);
                                        var p = c.add(cc.v2(i, l));
                                        r.setPosition(p),
                                            r.on(
                                                cc.Node.EventType.TOUCH_END,
                                                function () {
                                                    t.onItemClicked(t._itemsUUIDToIndex[r.uuid], r);
                                                },
                                                t
                                            ),
                                            t.itemList.push(r),
                                            t._updateItem(o, r),
                                            (t._itemsUUIDToIndex[r.uuid] = o),
                                            ++u == a && (e.enabled = !0);
                                    }
                                });
                            }
                        }),
                        (e.prototype._updateContentHeight = function () {
                            var t = this._getContent(),
                                e = Math.floor(this._viewW / this._itemW),
                                n = Math.ceil(this.numItems / e);
                            t.height = n * (this.itemPrefab.data.height + this.spacing.y) - this.spacing.y;
                        }),
                        (e.prototype._getPosInView = function (t) {
                            var e = this._getContent(),
                                n = e.parent,
                                o = e.convertToWorldSpaceAR(t.position);
                            return n.convertToNodeSpaceAR(o);
                        }),
                        (e.prototype.updateContentHeight = function (t) {
                            var e = this;
                            this.content &&
                                ((this.content.height = t),
                                this.content.setPosition(cc.v3(0, -250)),
                                this.itemList.forEach(function (t, n) {
                                    var o = e.itemList.length - 1 - n;
                                    t.setPosition(cc.v3(0, 100 * o + 50)), (e._itemsUUIDToIndex[t.uuid] = o);
                                }),
                                this.updateAllItems());
                        }),
                        (e.prototype._updateItem = function (t, e) {
                            var n = t >= 0 && t < this.numItems;
                            (e.active = n), n && this.onItemRender(t, e);
                        }),
                        (e.prototype.update = function () {
                            var t = this._getContent().y,
                                e = t - this._lastPosY;
                            if (((this._lastPosY = t), 0 != e))
                                for (var n = e < 0, o = this.itemList.length, r = 0; r < o; ++r) {
                                    var i = this.itemList[r],
                                        c = this._getPosInView(i),
                                        a = this._viewH >> 1,
                                        u = this._itemH >> 1,
                                        l = this._itemsUUIDToIndex[i.uuid],
                                        p = l;
                                    this.direction == s.TOP_TO_BOTTOM
                                        ? n
                                            ? c.y <= -(a + u) && ((i.y += this._viewRow * this._itemH), (p = l - o))
                                            : c.y >= a + u && ((i.y -= this._viewRow * this._itemH), (p = l + o))
                                        : n
                                        ? c.y <= -(a + u) &&
                                          ((i.y += this._viewRow * this._itemH), i.setSiblingIndex(0), (p = l + o))
                                        : c.y >= a + u &&
                                          ((i.y -= this._viewRow * this._itemH), i.setSiblingIndex(1), (p = l - o)),
                                        p != l && this._updateItem(p, i),
                                        (this._itemsUUIDToIndex[i.uuid] = p);
                                }
                        }),
                        i([u(cc.Prefab)], e.prototype, "itemPrefab", void 0),
                        i(
                            [
                                u({
                                    type: cc.Enum(s),
                                }),
                            ],
                            e.prototype,
                            "direction",
                            void 0
                        ),
                        i([u(cc.Vec2)], e.prototype, "spacing", void 0),
                        i([a], e)
                    );
                })(cc.Component);
                function p(t, e, n, o) {
                    void 0 === n && (n = 16), void 0 === o && (o = 0);
                    for (var r = t, i = new Date().getTime(), s = 0; s < r && !(o >= r); ++s) {
                        try {
                            e && e(o);
                        } catch (c) {
                            cc.error(c);
                        }
                        if ((o++, new Date().getTime() - i > n)) {
                            setTimeout(function () {
                                p(r, e, n, o);
                            }, 10);
                            break;
                        }
                    }
                }
                (n.default = l),
                    Object.defineProperty(cc.Node.prototype, "opacity", {
                        get: function () {
                            return this._opacity;
                        },
                        set: function (t) {
                            (t = cc.misc.clampf(t, 0, 255)),
                                this._opacity !== t &&
                                    ((this._opacity = t),
                                    this.emit("opacity-change", t),
                                    (this._renderFlag |= cc.RenderFlow.FLAG_OPACITY_COLOR));
                        },
                    }),
                    cc._RF.pop();
            },
            {},
        ],
    },
    {},
    [
        "GDBlackboard",
        "GDKV",
        "GDLocalStorage",
        "GDTypes",
        "GDTextureAssembler",
        "GDTexturePlus",
        "GDList",
        "GDQueue",
        "GDStack",
        "GDAnimation",
        "GDSpineEx",
        "GDTypewriter",
        "GDAudioMgr",
        "GDObjectPool",
        "GDResLoader",
        "GDResMgr",
        "GDWindowMgr",
        "GDTable",
        "GDTableMgr",
        "GDActionTask",
        "GDCompositeTask",
        "GDConditionTask",
        "GDDecoratorTask",
        "GDTask",
        "GDAsync",
        "GDCCUtils",
        "GDCommonUtils",
        "GDDraw",
        "GDMath",
        "GDPolygonUtil",
        "GDRequest",
        "GDUtils",
        "GDButton",
        "GDToggle",
        "GDToggleGroup",
        "GDUIListener",
        "CCCExtend",
        "LevelRender",
        "RecycleScroll",
    ]
);
